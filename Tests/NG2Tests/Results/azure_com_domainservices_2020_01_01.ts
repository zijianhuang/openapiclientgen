import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the Domain Services. */
	export interface CloudError {

		/** An error response from the Domain Services. */
		error?: CloudErrorBody;
	}

	/** An error response from the Domain Services. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Domain Services. */
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

	/** An error response from the Domain Services. */
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


	/** Domain Security Settings */
	export interface DomainSecuritySettings {

		/** A flag to determine whether or not NtlmV1 is enabled or disabled. */
		ntlmV1?: DomainSecuritySettingsNtlmV1 | null;

		/** A flag to determine whether or not SyncNtlmPasswords is enabled or disabled. */
		syncNtlmPasswords?: DomainSecuritySettingsNtlmV1 | null;

		/** A flag to determine whether or not TlsV1 is enabled or disabled. */
		tlsV1?: DomainSecuritySettingsNtlmV1 | null;
	}

	/** Domain Security Settings */
	export interface DomainSecuritySettingsFormProperties {

		/** A flag to determine whether or not NtlmV1 is enabled or disabled. */
		ntlmV1: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,

		/** A flag to determine whether or not SyncNtlmPasswords is enabled or disabled. */
		syncNtlmPasswords: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,

		/** A flag to determine whether or not TlsV1 is enabled or disabled. */
		tlsV1: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,
	}
	export function CreateDomainSecuritySettingsFormGroup() {
		return new FormGroup<DomainSecuritySettingsFormProperties>({
			ntlmV1: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
			syncNtlmPasswords: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
			tlsV1: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
		});

	}

	export enum DomainSecuritySettingsNtlmV1 { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** Domain service. */
	export interface DomainService extends Resource {

		/** Properties of the Domain Service. */
		properties?: DomainServiceProperties;
	}

	/** Domain service. */
	export interface DomainServiceFormProperties extends ResourceFormProperties {
	}
	export function CreateDomainServiceFormGroup() {
		return new FormGroup<DomainServiceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from the List Domain Services operation. */
	export interface DomainServiceListResult {

		/** The continuation token for the next page of results. */
		nextLink?: string | null;

		/** the list of domain services. */
		value?: Array<DomainService>;
	}

	/** The response from the List Domain Services operation. */
	export interface DomainServiceListResultFormProperties {

		/** The continuation token for the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDomainServiceListResultFormGroup() {
		return new FormGroup<DomainServiceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the Domain Service. */
	export interface DomainServiceProperties {

		/** Deployment Id */
		deploymentId?: string | null;

		/** The name of the Azure domain that the user would like to deploy Domain Services to. */
		domainName?: string | null;

		/** Domain Security Settings */
		domainSecuritySettings?: DomainSecuritySettings;

		/** Enabled or Disabled flag to turn on Group-based filtered sync */
		filteredSync?: DomainSecuritySettingsNtlmV1 | null;

		/** Secure LDAP Settings */
		ldapsSettings?: LdapsSettings;

		/** Settings for notification */
		notificationSettings?: NotificationSettings;

		/** the current deployment or provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** List of ReplicaSets */
		replicaSets?: Array<ReplicaSet>;

		/** SyncOwner ReplicaSet Id */
		syncOwner?: string | null;

		/** Azure Active Directory Tenant Id */
		tenantId?: string | null;

		/**
		 * Data Model Version
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** Properties of the Domain Service. */
	export interface DomainServicePropertiesFormProperties {

		/** Deployment Id */
		deploymentId: FormControl<string | null | undefined>,

		/** The name of the Azure domain that the user would like to deploy Domain Services to. */
		domainName: FormControl<string | null | undefined>,

		/** Enabled or Disabled flag to turn on Group-based filtered sync */
		filteredSync: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,

		/** the current deployment or provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** SyncOwner ReplicaSet Id */
		syncOwner: FormControl<string | null | undefined>,

		/** Azure Active Directory Tenant Id */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * Data Model Version
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateDomainServicePropertiesFormGroup() {
		return new FormGroup<DomainServicePropertiesFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			filteredSync: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			syncOwner: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Replica Set Definition */
	export interface ReplicaSet {

		/** List of Domain Controller IP Address */
		domainControllerIpAddress?: Array<string>;

		/** External access ip address. */
		externalAccessIpAddress?: string | null;

		/** List of Domain Health Alerts */
		healthAlerts?: Array<HealthAlert>;

		/** Last domain evaluation run DateTime */
		healthLastEvaluated?: Date | null;

		/** List of Domain Health Monitors */
		healthMonitors?: Array<HealthMonitor>;

		/** Virtual network location */
		location?: string | null;

		/** ReplicaSet Id */
		replicaSetId?: string | null;

		/** Status of Domain Service instance */
		serviceStatus?: string | null;

		/** The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName. */
		subnetId?: string | null;

		/** Virtual network site id */
		vnetSiteId?: string | null;
	}

	/** Replica Set Definition */
	export interface ReplicaSetFormProperties {

		/** External access ip address. */
		externalAccessIpAddress: FormControl<string | null | undefined>,

		/** Last domain evaluation run DateTime */
		healthLastEvaluated: FormControl<Date | null | undefined>,

		/** Virtual network location */
		location: FormControl<string | null | undefined>,

		/** ReplicaSet Id */
		replicaSetId: FormControl<string | null | undefined>,

		/** Status of Domain Service instance */
		serviceStatus: FormControl<string | null | undefined>,

		/** The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName. */
		subnetId: FormControl<string | null | undefined>,

		/** Virtual network site id */
		vnetSiteId: FormControl<string | null | undefined>,
	}
	export function CreateReplicaSetFormGroup() {
		return new FormGroup<ReplicaSetFormProperties>({
			externalAccessIpAddress: new FormControl<string | null | undefined>(undefined),
			healthLastEvaluated: new FormControl<Date | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			replicaSetId: new FormControl<string | null | undefined>(undefined),
			serviceStatus: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
			vnetSiteId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Health Alert Description */
	export interface HealthAlert {

		/** Health Alert Id */
		id?: string | null;

		/** Health Alert Issue */
		issue?: string | null;

		/** Health Alert Last Detected DateTime */
		lastDetected?: Date | null;

		/** Health Alert Name */
		name?: string | null;

		/** Health Alert Raised DateTime */
		raised?: Date | null;

		/** Health Alert TSG Link */
		resolutionUri?: string | null;

		/** Health Alert Severity */
		severity?: string | null;
	}

	/** Health Alert Description */
	export interface HealthAlertFormProperties {

		/** Health Alert Id */
		id: FormControl<string | null | undefined>,

		/** Health Alert Issue */
		issue: FormControl<string | null | undefined>,

		/** Health Alert Last Detected DateTime */
		lastDetected: FormControl<Date | null | undefined>,

		/** Health Alert Name */
		name: FormControl<string | null | undefined>,

		/** Health Alert Raised DateTime */
		raised: FormControl<Date | null | undefined>,

		/** Health Alert TSG Link */
		resolutionUri: FormControl<string | null | undefined>,

		/** Health Alert Severity */
		severity: FormControl<string | null | undefined>,
	}
	export function CreateHealthAlertFormGroup() {
		return new FormGroup<HealthAlertFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			lastDetected: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			raised: new FormControl<Date | null | undefined>(undefined),
			resolutionUri: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Health Monitor Description */
	export interface HealthMonitor {

		/** Health Monitor Details */
		details?: string | null;

		/** Health Monitor Id */
		id?: string | null;

		/** Health Monitor Name */
		name?: string | null;
	}

	/** Health Monitor Description */
	export interface HealthMonitorFormProperties {

		/** Health Monitor Details */
		details: FormControl<string | null | undefined>,

		/** Health Monitor Id */
		id: FormControl<string | null | undefined>,

		/** Health Monitor Name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHealthMonitorFormGroup() {
		return new FormGroup<HealthMonitorFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Secure LDAP Settings */
	export interface LdapsSettings {

		/** NotAfter DateTime of configure ldaps certificate. */
		certificateNotAfter?: Date | null;

		/** Thumbprint of configure ldaps certificate. */
		certificateThumbprint?: string | null;

		/** A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled. */
		externalAccess?: DomainSecuritySettingsNtlmV1 | null;

		/** A flag to determine whether or not Secure LDAP is enabled or disabled. */
		ldaps?: DomainSecuritySettingsNtlmV1 | null;

		/** The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file. */
		pfxCertificate?: string | null;

		/** The password to decrypt the provided Secure LDAP certificate pfx file. */
		pfxCertificatePassword?: string | null;

		/** Public certificate used to configure secure ldap. */
		publicCertificate?: string | null;
	}

	/** Secure LDAP Settings */
	export interface LdapsSettingsFormProperties {

		/** NotAfter DateTime of configure ldaps certificate. */
		certificateNotAfter: FormControl<Date | null | undefined>,

		/** Thumbprint of configure ldaps certificate. */
		certificateThumbprint: FormControl<string | null | undefined>,

		/** A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled. */
		externalAccess: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,

		/** A flag to determine whether or not Secure LDAP is enabled or disabled. */
		ldaps: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,

		/** The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file. */
		pfxCertificate: FormControl<string | null | undefined>,

		/** The password to decrypt the provided Secure LDAP certificate pfx file. */
		pfxCertificatePassword: FormControl<string | null | undefined>,

		/** Public certificate used to configure secure ldap. */
		publicCertificate: FormControl<string | null | undefined>,
	}
	export function CreateLdapsSettingsFormGroup() {
		return new FormGroup<LdapsSettingsFormProperties>({
			certificateNotAfter: new FormControl<Date | null | undefined>(undefined),
			certificateThumbprint: new FormControl<string | null | undefined>(undefined),
			externalAccess: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
			ldaps: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
			pfxCertificate: new FormControl<string | null | undefined>(undefined),
			pfxCertificatePassword: new FormControl<string | null | undefined>(undefined),
			publicCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for notification */
	export interface NotificationSettings {

		/** The list of additional recipients */
		additionalRecipients?: Array<string>;

		/** Should domain controller admins be notified */
		notifyDcAdmins?: DomainSecuritySettingsNtlmV1 | null;

		/** Should global admins be notified */
		notifyGlobalAdmins?: DomainSecuritySettingsNtlmV1 | null;
	}

	/** Settings for notification */
	export interface NotificationSettingsFormProperties {

		/** Should domain controller admins be notified */
		notifyDcAdmins: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,

		/** Should global admins be notified */
		notifyGlobalAdmins: FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>,
	}
	export function CreateNotificationSettingsFormGroup() {
		return new FormGroup<NotificationSettingsFormProperties>({
			notifyDcAdmins: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
			notifyGlobalAdmins: new FormControl<DomainSecuritySettingsNtlmV1 | null | undefined>(undefined),
		});

	}


	/** The operation supported by Domain Services. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Domain Services. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by Domain Services. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Domain Services. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Domain Services. */
	export interface OperationEntity {

		/** The operation supported by Domain Services. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;
	}

	/** The operation supported by Domain Services. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of domain service operation response. */
	export interface OperationEntityListResult {

		/** The continuation token for the next page of results. */
		nextLink?: string | null;

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of domain service operation response. */
	export interface OperationEntityListResultFormProperties {

		/** The continuation token for the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Resource model definition. */
	export interface Resource {

		/** Resource etag */
		etag?: string | null;

		/** Resource Id */
		id?: string | null;

		/** Resource location */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The Resource model definition. */
	export interface ResourceFormProperties {

		/** Resource etag */
		etag: FormControl<string | null | undefined>,

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the available Domain Services operations.
		 * Get providers/Microsoft.AAD/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationEntityListResult} HTTP 200 (OK) if the operation was successful.
		 */
		DomainServiceOperations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.AAD/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List Domain Services in Subscription
		 * The List Domain Services in Subscription operation lists all the domain services available under the given subscription (and across all resource groups within that subscription).
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AAD/domainServices
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DomainServiceListResult} HTTP 200 (OK) if the operation was successful.
		 */
		DomainServices_List(api_version: string, subscriptionId: string): Observable<DomainServiceListResult> {
			return this.http.get<DomainServiceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AAD/domainServices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List Domain Services in Resource Group
		 * The List Domain Services in Resource Group operation lists all the domain services available under the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @return {DomainServiceListResult} HTTP 200 (OK) if the operation was successful.
		 */
		DomainServices_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<DomainServiceListResult> {
			return this.http.get<DomainServiceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AAD/domainServices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Domain Service
		 * The Get Domain Service operation retrieves a json representation of the Domain Service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} domainServiceName The name of the domain service.
		 * @return {DomainService} HTTP 200 (OK) if the operation was successful.
		 */
		DomainServices_Get(api_version: string, subscriptionId: string, resourceGroupName: string, domainServiceName: string): Observable<DomainService> {
			return this.http.get<DomainService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AAD/domainServices/' + (domainServiceName == null ? '' : encodeURIComponent(domainServiceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update Domain Service (PUT Resource)
		 * The Create Domain Service operation creates a new domain service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} domainServiceName The name of the domain service.
		 * @param {DomainService} requestBody Properties supplied to the Create or Update a Domain Service operation.
		 * @return {DomainService} HTTP 200 (OK) if the operation was successful.
		 */
		DomainServices_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, domainServiceName: string, requestBody: DomainService): Observable<DomainService> {
			return this.http.put<DomainService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AAD/domainServices/' + (domainServiceName == null ? '' : encodeURIComponent(domainServiceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Domain Service (DELETE Resource)
		 * The Delete Domain Service operation deletes an existing Domain Service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} domainServiceName The name of the domain service.
		 * @return {void} 
		 */
		DomainServices_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, domainServiceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AAD/domainServices/' + (domainServiceName == null ? '' : encodeURIComponent(domainServiceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Domain Service (PATCH Resource)
		 * The Update Domain Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} domainServiceName The name of the domain service.
		 * @param {DomainService} requestBody Properties supplied to the Update a Domain Service operation.
		 * @return {DomainService} HTTP 200 (OK) if the operation was successful.
		 */
		DomainServices_Update(api_version: string, subscriptionId: string, resourceGroupName: string, domainServiceName: string, requestBody: DomainService): Observable<DomainService> {
			return this.http.patch<DomainService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AAD/domainServices/' + (domainServiceName == null ? '' : encodeURIComponent(domainServiceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

