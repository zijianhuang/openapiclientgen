import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Azure SQL managed instance. */
	export interface ManagedInstance {

		/** Azure Active Directory identity configuration for a resource. */
		identity?: ManagedInstanceIdentity;

		/** The properties of a managed instance. */
		properties?: ManagedInstanceProperties;

		/** An ARM Resource SKU. */
		sku?: ManagedInstanceSku;
	}

	/** An Azure SQL managed instance. */
	export interface ManagedInstanceFormProperties {
	}
	export function CreateManagedInstanceFormGroup() {
		return new FormGroup<ManagedInstanceFormProperties>({
		});

	}

	export interface ManagedInstanceIdentity {

		/** The Azure Active Directory principal id. */
		principalId?: string | null;

		/** The Azure Active Directory tenant id. */
		tenantId?: string | null;

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type?: ManagedInstanceIdentityType | null;
	}
	export interface ManagedInstanceIdentityFormProperties {

		/** The Azure Active Directory principal id. */
		principalId: FormControl<string | null | undefined>,

		/** The Azure Active Directory tenant id. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type: FormControl<ManagedInstanceIdentityType | null | undefined>,
	}
	export function CreateManagedInstanceIdentityFormGroup() {
		return new FormGroup<ManagedInstanceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManagedInstanceIdentityType | null | undefined>(undefined),
		});

	}

	export enum ManagedInstanceIdentityType { SystemAssigned = 'SystemAssigned' }


	/** The properties of a managed instance. */
	export interface ManagedInstanceProperties {

		/** Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). */
		administratorLogin?: string | null;

		/** The administrator login password (required for managed instance creation). */
		administratorLoginPassword?: string | null;

		/** Collation of the managed instance. */
		collation?: string | null;

		/** The Dns Zone that the managed instance is in. */
		dnsZone?: string | null;

		/** The resource id of another managed instance whose DNS zone this managed instance will share after creation. */
		dnsZonePartner?: string | null;

		/** The fully qualified domain name of the managed instance. */
		fullyQualifiedDomainName?: string | null;

		/** The Id of the instance pool this managed server belongs to. */
		instancePoolId?: string | null;

		/** The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses). */
		licenseType?: ManagedInstancePropertiesLicenseType | null;

		/**
		 * Specifies the mode of database creation.
		 * Default: Regular instance creation.
		 * Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
		 */
		managedInstanceCreateMode?: ManagedInstancePropertiesManagedInstanceCreateMode | null;

		/** Connection type used for connecting to the instance. */
		proxyOverride?: ManagedInstancePropertiesProxyOverride | null;

		/** Whether or not the public data endpoint is enabled. */
		publicDataEndpointEnabled?: boolean | null;

		/** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
		restorePointInTime?: Date | null;

		/** The resource identifier of the source managed instance associated with create operation of this instance. */
		sourceManagedInstanceId?: string | null;

		/** The state of the managed instance. */
		state?: string | null;

		/** Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only. */
		storageSizeInGB?: number | null;

		/** Subnet resource ID for the managed instance. */
		subnetId?: string | null;

		/**
		 * Id of the timezone. Allowed values are timezones supported by Windows.
		 * Windows keeps details on supported timezones, including the id, in registry under
		 * KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
		 * You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
		 * List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
		 * An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
		 */
		timezoneId?: string | null;

		/** The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80. */
		vCores?: number | null;
	}

	/** The properties of a managed instance. */
	export interface ManagedInstancePropertiesFormProperties {

		/** Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). */
		administratorLogin: FormControl<string | null | undefined>,

		/** The administrator login password (required for managed instance creation). */
		administratorLoginPassword: FormControl<string | null | undefined>,

		/** Collation of the managed instance. */
		collation: FormControl<string | null | undefined>,

		/** The Dns Zone that the managed instance is in. */
		dnsZone: FormControl<string | null | undefined>,

		/** The resource id of another managed instance whose DNS zone this managed instance will share after creation. */
		dnsZonePartner: FormControl<string | null | undefined>,

		/** The fully qualified domain name of the managed instance. */
		fullyQualifiedDomainName: FormControl<string | null | undefined>,

		/** The Id of the instance pool this managed server belongs to. */
		instancePoolId: FormControl<string | null | undefined>,

		/** The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses). */
		licenseType: FormControl<ManagedInstancePropertiesLicenseType | null | undefined>,

		/**
		 * Specifies the mode of database creation.
		 * Default: Regular instance creation.
		 * Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
		 */
		managedInstanceCreateMode: FormControl<ManagedInstancePropertiesManagedInstanceCreateMode | null | undefined>,

		/** Connection type used for connecting to the instance. */
		proxyOverride: FormControl<ManagedInstancePropertiesProxyOverride | null | undefined>,

		/** Whether or not the public data endpoint is enabled. */
		publicDataEndpointEnabled: FormControl<boolean | null | undefined>,

		/** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
		restorePointInTime: FormControl<Date | null | undefined>,

		/** The resource identifier of the source managed instance associated with create operation of this instance. */
		sourceManagedInstanceId: FormControl<string | null | undefined>,

		/** The state of the managed instance. */
		state: FormControl<string | null | undefined>,

		/** Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only. */
		storageSizeInGB: FormControl<number | null | undefined>,

		/** Subnet resource ID for the managed instance. */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * Id of the timezone. Allowed values are timezones supported by Windows.
		 * Windows keeps details on supported timezones, including the id, in registry under
		 * KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
		 * You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
		 * List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
		 * An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
		 */
		timezoneId: FormControl<string | null | undefined>,

		/** The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80. */
		vCores: FormControl<number | null | undefined>,
	}
	export function CreateManagedInstancePropertiesFormGroup() {
		return new FormGroup<ManagedInstancePropertiesFormProperties>({
			administratorLogin: new FormControl<string | null | undefined>(undefined),
			administratorLoginPassword: new FormControl<string | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			dnsZone: new FormControl<string | null | undefined>(undefined),
			dnsZonePartner: new FormControl<string | null | undefined>(undefined),
			fullyQualifiedDomainName: new FormControl<string | null | undefined>(undefined),
			instancePoolId: new FormControl<string | null | undefined>(undefined),
			licenseType: new FormControl<ManagedInstancePropertiesLicenseType | null | undefined>(undefined),
			managedInstanceCreateMode: new FormControl<ManagedInstancePropertiesManagedInstanceCreateMode | null | undefined>(undefined),
			proxyOverride: new FormControl<ManagedInstancePropertiesProxyOverride | null | undefined>(undefined),
			publicDataEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			restorePointInTime: new FormControl<Date | null | undefined>(undefined),
			sourceManagedInstanceId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			storageSizeInGB: new FormControl<number | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
			vCores: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ManagedInstancePropertiesLicenseType { LicenseIncluded = 'LicenseIncluded', BasePrice = 'BasePrice' }

	export enum ManagedInstancePropertiesManagedInstanceCreateMode { Default = 'Default', PointInTimeRestore = 'PointInTimeRestore' }

	export enum ManagedInstancePropertiesProxyOverride { Proxy = 'Proxy', Redirect = 'Redirect', Default = 'Default' }

	export interface ManagedInstanceSku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}
	export interface ManagedInstanceSkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceSkuFormGroup() {
		return new FormGroup<ManagedInstanceSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of managed instances. */
	export interface ManagedInstanceListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedInstance>;
	}

	/** A list of managed instances. */
	export interface ManagedInstanceListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceListResultFormGroup() {
		return new FormGroup<ManagedInstanceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update request for an Azure SQL Database managed instance. */
	export interface ManagedInstanceUpdate {

		/** The properties of a managed instance. */
		properties?: ManagedInstanceProperties;

		/** An ARM Resource SKU. */
		sku?: ManagedInstanceUpdateSku;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update request for an Azure SQL Database managed instance. */
	export interface ManagedInstanceUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateManagedInstanceUpdateFormGroup() {
		return new FormGroup<ManagedInstanceUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ManagedInstanceUpdateSku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}
	export interface ManagedInstanceUpdateSkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceUpdateSkuFormGroup() {
		return new FormGroup<ManagedInstanceUpdateSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of all managed instances in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/managedInstances
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceListResult} Successfully retrieved the list of managed instances.
		 */
		ManagedInstances_List(subscriptionId: string, api_version: string): Observable<ManagedInstanceListResult> {
			return this.http.get<ManagedInstanceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/managedInstances&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of all managed instances in an instance pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/managedInstances
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} instancePoolName The instance pool name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceListResult} Successfully retrieved the list of managed instances.
		 */
		ManagedInstances_ListByInstancePool(resourceGroupName: string, instancePoolName: string, subscriptionId: string, api_version: string): Observable<ManagedInstanceListResult> {
			return this.http.get<ManagedInstanceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/instancePools/' + (instancePoolName == null ? '' : encodeURIComponent(instancePoolName)) + '/managedInstances&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of managed instances in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceListResult} Successfully retrieved the list of managed instances.
		 */
		ManagedInstances_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<ManagedInstanceListResult> {
			return this.http.get<ManagedInstanceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a managed instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstance} Successfully retrieved the specified managed instance.
		 */
		ManagedInstances_Get(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<ManagedInstance> {
			return this.http.get<ManagedInstance>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a managed instance.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedInstance} requestBody The requested managed instance resource state.
		 * @return {ManagedInstance} Successfully updated the managed instance.
		 */
		ManagedInstances_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string, requestBody: ManagedInstance): Observable<ManagedInstance> {
			return this.http.put<ManagedInstance>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a managed instance.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the managed instance.
		 */
		ManagedInstances_Delete(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a managed instance.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedInstanceUpdate} requestBody The requested managed instance resource state.
		 * @return {ManagedInstance} Successfully updated the managed instance.
		 */
		ManagedInstances_Update(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string, requestBody: ManagedInstanceUpdate): Observable<ManagedInstance> {
			return this.http.patch<ManagedInstance>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

