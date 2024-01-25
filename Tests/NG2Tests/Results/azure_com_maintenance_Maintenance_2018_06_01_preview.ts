import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Apply Update request */
	export interface ApplyUpdate {

		/** Properties for apply update */
		properties?: ApplyUpdateProperties;
	}

	/** Apply Update request */
	export interface ApplyUpdateFormProperties {
	}
	export function CreateApplyUpdateFormGroup() {
		return new FormGroup<ApplyUpdateFormProperties>({
		});

	}


	/** Properties for apply update */
	export interface ApplyUpdateProperties {

		/** Last Update time */
		lastUpdateTime?: Date | null;

		/** The resourceId */
		resourceId?: string | null;

		/** The status */
		status?: ApplyUpdatePropertiesStatus | null;
	}

	/** Properties for apply update */
	export interface ApplyUpdatePropertiesFormProperties {

		/** Last Update time */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** The resourceId */
		resourceId: FormControl<string | null | undefined>,

		/** The status */
		status: FormControl<ApplyUpdatePropertiesStatus | null | undefined>,
	}
	export function CreateApplyUpdatePropertiesFormGroup() {
		return new FormGroup<ApplyUpdatePropertiesFormProperties>({
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApplyUpdatePropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum ApplyUpdatePropertiesStatus { Pending = 0, InProgress = 1, Completed = 2, RetryNow = 3, RetryLater = 4 }


	/** Configuration Assignment */
	export interface ConfigurationAssignment {

		/** Location of the resource */
		location?: string | null;

		/** Properties for configuration assignment */
		properties?: ConfigurationAssignmentProperties;
	}

	/** Configuration Assignment */
	export interface ConfigurationAssignmentFormProperties {

		/** Location of the resource */
		location: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationAssignmentFormGroup() {
		return new FormGroup<ConfigurationAssignmentFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for configuration assignment */
	export interface ConfigurationAssignmentProperties {

		/** The maintenance configuration Id */
		maintenanceConfigurationId?: string | null;

		/** The unique resourceId */
		resourceId?: string | null;
	}

	/** Properties for configuration assignment */
	export interface ConfigurationAssignmentPropertiesFormProperties {

		/** The maintenance configuration Id */
		maintenanceConfigurationId: FormControl<string | null | undefined>,

		/** The unique resourceId */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationAssignmentPropertiesFormGroup() {
		return new FormGroup<ConfigurationAssignmentPropertiesFormProperties>({
			maintenanceConfigurationId: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response details received from the Azure Maintenance service. */
	export interface ErrorDetails {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code?: string | null;

		/** Human-readable representation of the error. */
		message?: string | null;
	}

	/** An error response details received from the Azure Maintenance service. */
	export interface ErrorDetailsFormProperties {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code: FormControl<string | null | undefined>,

		/** Human-readable representation of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ConfigurationAssignments list */
	export interface ListConfigurationAssignmentsResult {

		/** The list of configuration Assignments */
		value?: Array<ConfigurationAssignment>;
	}

	/** Response for ConfigurationAssignments list */
	export interface ListConfigurationAssignmentsResultFormProperties {
	}
	export function CreateListConfigurationAssignmentsResultFormGroup() {
		return new FormGroup<ListConfigurationAssignmentsResultFormProperties>({
		});

	}


	/** Response for MaintenanceConfigurations list */
	export interface ListMaintenanceConfigurationsResult {

		/** The list of maintenance Configurations */
		value?: Array<MaintenanceConfiguration>;
	}

	/** Response for MaintenanceConfigurations list */
	export interface ListMaintenanceConfigurationsResultFormProperties {
	}
	export function CreateListMaintenanceConfigurationsResultFormGroup() {
		return new FormGroup<ListMaintenanceConfigurationsResultFormProperties>({
		});

	}


	/** Maintenance configuration record type */
	export interface MaintenanceConfiguration {

		/** Gets or sets location of the resource */
		location?: string | null;

		/** Properties for maintenance configuration */
		properties?: MaintenanceConfigurationProperties;

		/** Gets or sets tags of the resource */
		tags?: {[id: string]: string };
	}

	/** Maintenance configuration record type */
	export interface MaintenanceConfigurationFormProperties {

		/** Gets or sets location of the resource */
		location: FormControl<string | null | undefined>,

		/** Gets or sets tags of the resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMaintenanceConfigurationFormGroup() {
		return new FormGroup<MaintenanceConfigurationFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties for maintenance configuration */
	export interface MaintenanceConfigurationProperties {

		/** Gets or sets extensionProperties of the maintenanceConfiguration */
		extensionProperties?: {[id: string]: string };

		/** Gets or sets maintenanceScope of the configuration */
		maintenanceScope?: MaintenanceConfigurationPropertiesMaintenanceScope | null;

		/** Gets or sets namespace of the resource */
		namespace?: string | null;
	}

	/** Properties for maintenance configuration */
	export interface MaintenanceConfigurationPropertiesFormProperties {

		/** Gets or sets extensionProperties of the maintenanceConfiguration */
		extensionProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets maintenanceScope of the configuration */
		maintenanceScope: FormControl<MaintenanceConfigurationPropertiesMaintenanceScope | null | undefined>,

		/** Gets or sets namespace of the resource */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceConfigurationPropertiesFormGroup() {
		return new FormGroup<MaintenanceConfigurationPropertiesFormProperties>({
			extensionProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenanceScope: new FormControl<MaintenanceConfigurationPropertiesMaintenanceScope | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenanceConfigurationPropertiesMaintenanceScope { All = 0, Host = 1, Resource = 2, InResource = 3 }


	/** Response for Updates list */
	export interface ListUpdatesResult {

		/** The pending updates */
		value?: Array<Update>;
	}

	/** Response for Updates list */
	export interface ListUpdatesResultFormProperties {
	}
	export function CreateListUpdatesResultFormGroup() {
		return new FormGroup<ListUpdatesResultFormProperties>({
		});

	}


	/** Maintenance update on a resource */
	export interface Update {

		/** Duration of impact in seconds */
		impactDurationInSec?: number | null;

		/** The impact type */
		impactType?: UpdateImpactType | null;

		/** The impact area */
		maintenanceScope?: MaintenanceConfigurationPropertiesMaintenanceScope | null;

		/** Time when Azure will start force updates if not self-updated by customer before this time */
		notBefore?: Date | null;

		/** Properties for update */
		properties?: UpdateProperties;

		/** The status */
		status?: ApplyUpdatePropertiesStatus | null;
	}

	/** Maintenance update on a resource */
	export interface UpdateFormProperties {

		/** Duration of impact in seconds */
		impactDurationInSec: FormControl<number | null | undefined>,

		/** The impact type */
		impactType: FormControl<UpdateImpactType | null | undefined>,

		/** The impact area */
		maintenanceScope: FormControl<MaintenanceConfigurationPropertiesMaintenanceScope | null | undefined>,

		/** Time when Azure will start force updates if not self-updated by customer before this time */
		notBefore: FormControl<Date | null | undefined>,

		/** The status */
		status: FormControl<ApplyUpdatePropertiesStatus | null | undefined>,
	}
	export function CreateUpdateFormGroup() {
		return new FormGroup<UpdateFormProperties>({
			impactDurationInSec: new FormControl<number | null | undefined>(undefined),
			impactType: new FormControl<UpdateImpactType | null | undefined>(undefined),
			maintenanceScope: new FormControl<MaintenanceConfigurationPropertiesMaintenanceScope | null | undefined>(undefined),
			notBefore: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ApplyUpdatePropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum UpdateImpactType { None = 0, Freeze = 1, Restart = 2, Redeploy = 3 }


	/** Properties for update */
	export interface UpdateProperties {

		/** The resourceId */
		resourceId?: string | null;
	}

	/** Properties for update */
	export interface UpdatePropertiesFormProperties {

		/** The resourceId */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePropertiesFormGroup() {
		return new FormGroup<UpdatePropertiesFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response received from the Azure Maintenance service. */
	export interface MaintenanceError {

		/** An error response details received from the Azure Maintenance service. */
		error?: ErrorDetails;
	}

	/** An error response received from the Azure Maintenance service. */
	export interface MaintenanceErrorFormProperties {
	}
	export function CreateMaintenanceErrorFormGroup() {
		return new FormGroup<MaintenanceErrorFormProperties>({
		});

	}


	/** Represents an operation returned by the GetOperations request */
	export interface Operation {

		/** Information about an operation */
		display?: OperationInfo;

		/** Name of the operation */
		name?: string | null;

		/** Origin of the operation */
		origin?: string | null;

		/** Properties of the operation */
		properties?: string | null;
	}

	/** Represents an operation returned by the GetOperations request */
	export interface OperationFormProperties {

		/** Name of the operation */
		name: FormControl<string | null | undefined>,

		/** Origin of the operation */
		origin: FormControl<string | null | undefined>,

		/** Properties of the operation */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an operation */
	export interface OperationInfo {

		/** Description of the operation */
		description?: string | null;

		/** Name of the operation */
		operation?: string | null;

		/** Name of the provider */
		provider?: string | null;

		/** Name of the resource type */
		resource?: string | null;
	}

	/** Information about an operation */
	export interface OperationInfoFormProperties {

		/** Description of the operation */
		description: FormControl<string | null | undefined>,

		/** Name of the operation */
		operation: FormControl<string | null | undefined>,

		/** Name of the provider */
		provider: FormControl<string | null | undefined>,

		/** Name of the resource type */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationInfoFormGroup() {
		return new FormGroup<OperationInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the List Operations operation */
	export interface OperationsListResult {

		/** A collection of operations */
		value?: Array<Operation>;
	}

	/** Result of the List Operations operation */
	export interface OperationsListResultFormProperties {
	}
	export function CreateOperationsListResultFormGroup() {
		return new FormGroup<OperationsListResultFormProperties>({
		});

	}


	/** Definition of a Resource */
	export interface Resource {

		/** Fully qualified identifier of the resource */
		id?: string | null;

		/** Name of the resource */
		name?: string | null;

		/** Type of the resource */
		type?: string | null;
	}

	/** Definition of a Resource */
	export interface ResourceFormProperties {

		/** Fully qualified identifier of the resource */
		id: FormControl<string | null | undefined>,

		/** Name of the resource */
		name: FormControl<string | null | undefined>,

		/** Type of the resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List available operations
		 * List the available operations supported by the Microsoft.Maintenance resource provider
		 * Get providers/Microsoft.Maintenance/operations
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {OperationsListResult} OK
		 */
		Operations_List(api_version: string): Observable<OperationsListResult> {
			return this.http.get<OperationsListResult>(this.baseUri + 'providers/Microsoft.Maintenance/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Configuration records within a subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/maintenanceConfigurations
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ListMaintenanceConfigurationsResult} OK
		 */
		MaintenanceConfigurations_List(subscriptionId: string, api_version: string): Observable<ListMaintenanceConfigurationsResult> {
			return this.http.get<ListMaintenanceConfigurationsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Maintenance/maintenanceConfigurations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Configuration record
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} resourceName Resource Identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {MaintenanceConfiguration} OK
		 */
		MaintenanceConfigurations_Get(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string): Observable<MaintenanceConfiguration> {
			return this.http.get<MaintenanceConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maintenance/maintenanceConfigurations/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update configuration record
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} resourceName Resource Identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {MaintenanceConfiguration} requestBody The configuration
		 * @return {MaintenanceConfiguration} OK
		 */
		MaintenanceConfigurations_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string, requestBody: MaintenanceConfiguration): Observable<MaintenanceConfiguration> {
			return this.http.put<MaintenanceConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maintenance/maintenanceConfigurations/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Configuration record
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} resourceName Resource Identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {MaintenanceConfiguration} OK
		 */
		MaintenanceConfigurations_Delete(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string): Observable<MaintenanceConfiguration> {
			return this.http.delete<MaintenanceConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maintenance/maintenanceConfigurations/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Patch configuration record
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} resourceName Resource Identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {MaintenanceConfiguration} requestBody The configuration
		 * @return {MaintenanceConfiguration} OK
		 */
		MaintenanceConfigurations_Update(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string, requestBody: MaintenanceConfiguration): Observable<MaintenanceConfiguration> {
			return this.http.patch<MaintenanceConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maintenance/maintenanceConfigurations/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Apply Updates to resource with parent
		 * Apply maintenance updates to resource with parent
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceParentType Resource parent type
		 * @param {string} resourceParentName Resource parent identifier
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ApplyUpdate} OK
		 */
		ApplyUpdates_CreateOrUpdateParent(subscriptionId: string, resourceGroupName: string, providerName: string, resourceParentType: string, resourceParentName: string, resourceType: string, resourceName: string, api_version: string): Observable<ApplyUpdate> {
			return this.http.put<ApplyUpdate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceParentType == null ? '' : encodeURIComponent(resourceParentType)) + '/' + (resourceParentName == null ? '' : encodeURIComponent(resourceParentName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/applyUpdates/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Track Updates to resource with parent
		 * Track maintenance updates to resource with parent
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} resourceParentType Resource parent type
		 * @param {string} resourceParentName Resource parent identifier
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} applyUpdateName applyUpdate Id
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ApplyUpdate} OK
		 */
		ApplyUpdates_GetParent(subscriptionId: string, resourceGroupName: string, resourceParentType: string, resourceParentName: string, providerName: string, resourceType: string, resourceName: string, applyUpdateName: string, api_version: string): Observable<ApplyUpdate> {
			return this.http.get<ApplyUpdate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceParentType == null ? '' : encodeURIComponent(resourceParentType)) + '/' + (resourceParentName == null ? '' : encodeURIComponent(resourceParentName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/applyUpdates/' + (applyUpdateName == null ? '' : encodeURIComponent(applyUpdateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List configurationAssignments for resource
		 * List configurationAssignments for resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceParentType Resource parent type
		 * @param {string} resourceParentName Resource parent identifier
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ListConfigurationAssignmentsResult} OK
		 */
		ConfigurationAssignments_ListParent(subscriptionId: string, resourceGroupName: string, providerName: string, resourceParentType: string, resourceParentName: string, resourceType: string, resourceName: string, api_version: string): Observable<ListConfigurationAssignmentsResult> {
			return this.http.get<ListConfigurationAssignmentsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceParentType == null ? '' : encodeURIComponent(resourceParentType)) + '/' + (resourceParentName == null ? '' : encodeURIComponent(resourceParentName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/configurationAssignments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create configuration assignment
		 * Register configuration for resource.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceParentType Resource parent type
		 * @param {string} resourceParentName Resource parent identifier
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} configurationAssignmentName Configuration assignment name
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {ConfigurationAssignment} requestBody The configurationAssignment
		 * @return {ConfigurationAssignment} OK
		 */
		ConfigurationAssignments_CreateOrUpdateParent(subscriptionId: string, resourceGroupName: string, providerName: string, resourceParentType: string, resourceParentName: string, resourceType: string, resourceName: string, configurationAssignmentName: string, api_version: string, requestBody: ConfigurationAssignment): Observable<ConfigurationAssignment> {
			return this.http.put<ConfigurationAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceParentType == null ? '' : encodeURIComponent(resourceParentType)) + '/' + (resourceParentName == null ? '' : encodeURIComponent(resourceParentName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/configurationAssignments/' + (configurationAssignmentName == null ? '' : encodeURIComponent(configurationAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unregister configuration for resource
		 * Unregister configuration for resource.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceParentType Resource parent type
		 * @param {string} resourceParentName Resource parent identifier
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} configurationAssignmentName Unique configuration assignment name
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ConfigurationAssignment} OK
		 */
		ConfigurationAssignments_DeleteParent(subscriptionId: string, resourceGroupName: string, providerName: string, resourceParentType: string, resourceParentName: string, resourceType: string, resourceName: string, configurationAssignmentName: string, api_version: string): Observable<ConfigurationAssignment> {
			return this.http.delete<ConfigurationAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceParentType == null ? '' : encodeURIComponent(resourceParentType)) + '/' + (resourceParentName == null ? '' : encodeURIComponent(resourceParentName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/configurationAssignments/' + (configurationAssignmentName == null ? '' : encodeURIComponent(configurationAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Updates to resource
		 * Get updates to resources.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/updates
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceParentType Resource parent type
		 * @param {string} resourceParentName Resource parent identifier
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ListUpdatesResult} OK
		 */
		Updates_ListParent(subscriptionId: string, resourceGroupName: string, providerName: string, resourceParentType: string, resourceParentName: string, resourceType: string, resourceName: string, api_version: string): Observable<ListUpdatesResult> {
			return this.http.get<ListUpdatesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceParentType == null ? '' : encodeURIComponent(resourceParentType)) + '/' + (resourceParentName == null ? '' : encodeURIComponent(resourceParentName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/updates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Apply Updates to resource
		 * Apply maintenance updates to resource
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ApplyUpdate} OK
		 */
		ApplyUpdates_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, providerName: string, resourceType: string, resourceName: string, api_version: string): Observable<ApplyUpdate> {
			return this.http.put<ApplyUpdate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/applyUpdates/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Track Updates to resource
		 * Track maintenance updates to resource
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} applyUpdateName applyUpdate Id
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ApplyUpdate} OK
		 */
		ApplyUpdates_Get(subscriptionId: string, resourceGroupName: string, providerName: string, resourceType: string, resourceName: string, applyUpdateName: string, api_version: string): Observable<ApplyUpdate> {
			return this.http.get<ApplyUpdate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/applyUpdates/' + (applyUpdateName == null ? '' : encodeURIComponent(applyUpdateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List configurationAssignments for resource
		 * List configurationAssignments for resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ListConfigurationAssignmentsResult} OK
		 */
		ConfigurationAssignments_List(subscriptionId: string, resourceGroupName: string, providerName: string, resourceType: string, resourceName: string, api_version: string): Observable<ListConfigurationAssignmentsResult> {
			return this.http.get<ListConfigurationAssignmentsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/configurationAssignments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create configuration assignment
		 * Register configuration for resource.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} configurationAssignmentName Configuration assignment name
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {ConfigurationAssignment} requestBody The configurationAssignment
		 * @return {ConfigurationAssignment} OK
		 */
		ConfigurationAssignments_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, providerName: string, resourceType: string, resourceName: string, configurationAssignmentName: string, api_version: string, requestBody: ConfigurationAssignment): Observable<ConfigurationAssignment> {
			return this.http.put<ConfigurationAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/configurationAssignments/' + (configurationAssignmentName == null ? '' : encodeURIComponent(configurationAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unregister configuration for resource
		 * Unregister configuration for resource.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} configurationAssignmentName Unique configuration assignment name
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ConfigurationAssignment} OK
		 */
		ConfigurationAssignments_Delete(subscriptionId: string, resourceGroupName: string, providerName: string, resourceType: string, resourceName: string, configurationAssignmentName: string, api_version: string): Observable<ConfigurationAssignment> {
			return this.http.delete<ConfigurationAssignment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/configurationAssignments/' + (configurationAssignmentName == null ? '' : encodeURIComponent(configurationAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Updates to resource
		 * Get updates to resources.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/updates
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name
		 * @param {string} providerName Resource provider name
		 * @param {string} resourceType Resource type
		 * @param {string} resourceName Resource identifier
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ListUpdatesResult} OK
		 */
		Updates_List(subscriptionId: string, resourceGroupName: string, providerName: string, resourceType: string, resourceName: string, api_version: string): Observable<ListUpdatesResult> {
			return this.http.get<ListUpdatesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Maintenance/updates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

