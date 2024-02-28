import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Model for component. */
	export interface Component {

		/** For optimistic concurrency control. */
		etag?: string | null;

		/** Model for properties of a component. */
		properties?: ComponentProperties;
	}

	/** Model for component. */
	export interface ComponentFormProperties {

		/** For optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for properties of a component. */
	export interface ComponentProperties {

		/** Properties requested in aggregation queries. */
		aggregateProperties?: {[id: string]: string };

		/** component children. */
		children?: Array<Component>;

		/** Name of the component. */
		componentName?: string | null;

		/** Component type group category. Classification of component type groups into a logical category. e.g. Network, Disk, Memory, CPU. */
		componentTypeGroupCategory?: string | null;

		/** ID of the component type. */
		componentTypeId?: string | null;

		/** Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc. */
		componentTypeName?: string | null;

		/** Health state of the component. */
		healthState?: ComponentPropertiesHealthState | null;

		/** Category of component's health state. */
		healthStateCategory?: ComponentPropertiesHealthStateCategory | null;

		/** End time for health state changes. */
		healthStateChangesEndTime?: Date | null;

		/** Start time for health state changes. */
		healthStateChangesStartTime?: Date | null;

		/** Time of last health state change. */
		lastHealthStateChangeTime?: Date | null;

		/** ID of the OMS solution this component belong to. */
		solutionId?: string | null;

		/** ID of the VM this component belongs to. */
		vmId?: string | null;

		/** Name of the VM this component belongs to. */
		vmName?: string | null;

		/** Tags on the VM this component belongs to. */
		vmTags?: {[id: string]: string };

		/** Type of the workload. */
		workloadType?: ComponentPropertiesWorkloadType | null;

		/** ID of the workspace. */
		workspaceId?: string | null;
	}

	/** Model for properties of a component. */
	export interface ComponentPropertiesFormProperties {

		/** Properties requested in aggregation queries. */
		aggregateProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Name of the component. */
		componentName: FormControl<string | null | undefined>,

		/** Component type group category. Classification of component type groups into a logical category. e.g. Network, Disk, Memory, CPU. */
		componentTypeGroupCategory: FormControl<string | null | undefined>,

		/** ID of the component type. */
		componentTypeId: FormControl<string | null | undefined>,

		/** Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc. */
		componentTypeName: FormControl<string | null | undefined>,

		/** Health state of the component. */
		healthState: FormControl<ComponentPropertiesHealthState | null | undefined>,

		/** Category of component's health state. */
		healthStateCategory: FormControl<ComponentPropertiesHealthStateCategory | null | undefined>,

		/** End time for health state changes. */
		healthStateChangesEndTime: FormControl<Date | null | undefined>,

		/** Start time for health state changes. */
		healthStateChangesStartTime: FormControl<Date | null | undefined>,

		/** Time of last health state change. */
		lastHealthStateChangeTime: FormControl<Date | null | undefined>,

		/** ID of the OMS solution this component belong to. */
		solutionId: FormControl<string | null | undefined>,

		/** ID of the VM this component belongs to. */
		vmId: FormControl<string | null | undefined>,

		/** Name of the VM this component belongs to. */
		vmName: FormControl<string | null | undefined>,

		/** Tags on the VM this component belongs to. */
		vmTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of the workload. */
		workloadType: FormControl<ComponentPropertiesWorkloadType | null | undefined>,

		/** ID of the workspace. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateComponentPropertiesFormGroup() {
		return new FormGroup<ComponentPropertiesFormProperties>({
			aggregateProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			componentTypeGroupCategory: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined),
			healthState: new FormControl<ComponentPropertiesHealthState | null | undefined>(undefined),
			healthStateCategory: new FormControl<ComponentPropertiesHealthStateCategory | null | undefined>(undefined),
			healthStateChangesEndTime: new FormControl<Date | null | undefined>(undefined),
			healthStateChangesStartTime: new FormControl<Date | null | undefined>(undefined),
			lastHealthStateChangeTime: new FormControl<Date | null | undefined>(undefined),
			solutionId: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
			vmTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			workloadType: new FormControl<ComponentPropertiesWorkloadType | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComponentPropertiesHealthState { Error = 'Error', Warning = 'Warning', Success = 'Success', Unknown = 'Unknown', Uninitialized = 'Uninitialized' }

	export enum ComponentPropertiesHealthStateCategory { Identity = 'Identity', CustomGroup = 'CustomGroup' }

	export enum ComponentPropertiesWorkloadType { BaseOS = 'BaseOS', SQL = 'SQL', IIS = 'IIS', Apache = 'Apache' }


	/** Model for collection of components. */
	export interface ComponentsCollection {

		/** URL to the next set of results. */
		nextLink?: string | null;

		/** Collection of components. */
		value?: Array<Component>;
	}

	/** Model for collection of components. */
	export interface ComponentsCollectionFormProperties {

		/** URL to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateComponentsCollectionFormGroup() {
		return new FormGroup<ComponentsCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error field contract. */
	export interface ErrorFieldContract {

		/** Property level error code. */
		code?: string | null;

		/** Human-readable representation of property-level error. */
		message?: string | null;

		/** Property name. */
		target?: string | null;
	}

	/** Error field contract. */
	export interface ErrorFieldContractFormProperties {

		/** Property level error code. */
		code: FormControl<string | null | undefined>,

		/** Human-readable representation of property-level error. */
		message: FormControl<string | null | undefined>,

		/** Property name. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldContractFormGroup() {
		return new FormGroup<ErrorFieldContractFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error body contract. */
	export interface ErrorResponse {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code?: string | null;

		/** The list of invalid fields send in request, in case of validation error. */
		details?: Array<ErrorFieldContract>;

		/** Human-readable representation of the error. */
		message?: string | null;
	}

	/** Error body contract. */
	export interface ErrorResponseFormProperties {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code: FormControl<string | null | undefined>,

		/** Human-readable representation of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for health state change */
	export interface HealthStateChange {

		/** Health state of monitor instance. */
		healthState?: ComponentPropertiesHealthState | null;

		/** Time at which this Health state was reached. */
		healthStateChangeTime?: Date | null;
	}

	/** Model for health state change */
	export interface HealthStateChangeFormProperties {

		/** Health state of monitor instance. */
		healthState: FormControl<ComponentPropertiesHealthState | null | undefined>,

		/** Time at which this Health state was reached. */
		healthStateChangeTime: FormControl<Date | null | undefined>,
	}
	export function CreateHealthStateChangeFormGroup() {
		return new FormGroup<HealthStateChangeFormProperties>({
			healthState: new FormControl<ComponentPropertiesHealthState | null | undefined>(undefined),
			healthStateChangeTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Model for Monitor */
	export interface Monitor {

		/** For optimistic concurrency control. */
		etag?: string | null;

		/** Model for properties of a Monitor. */
		properties?: MonitorProperties;
	}

	/** Model for Monitor */
	export interface MonitorFormProperties {

		/** For optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateMonitorFormGroup() {
		return new FormGroup<MonitorFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for properties of a Monitor. */
	export interface MonitorProperties {

		/** Generates alerts or not */
		alertGeneration?: MonitorPropertiesAlertGeneration | null;

		/** Component Type Display Name of the monitor */
		componentTypeDisplayName?: string | null;

		/** Component Type Id of monitor */
		componentTypeId?: string | null;

		/** Component Type Name of monitor */
		componentTypeName?: string | null;

		/** Collection of MonitorCriteria. For PATCH calls, instead of partial list, complete list of expected criteria should be passed for proper updating. */
		criteria?: Array<MonitorCriteria>;

		/** Description of the monitor */
		description?: string | null;

		/** URL pointing to the documentation of the monitor */
		documentationURL?: string | null;

		/**
		 * Frequency at which monitor condition is evaluated
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency?: number | null;

		/**
		 * The duration in minutes in the past during which the monitor is evaluated
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lookbackDuration?: number | null;

		/** Category of the monitor */
		monitorCategory?: MonitorPropertiesMonitorCategory | null;

		/** User friendly display name of the monitor */
		monitorDisplayName?: string | null;

		/** ID of the monitor */
		monitorId?: string | null;

		/** Name of the monitor */
		monitorName?: string | null;

		/** Is the monitor state enabled or disabled */
		monitorState?: MonitorPropertiesAlertGeneration | null;

		/** Type of the monitor */
		monitorType?: MonitorPropertiesMonitorType | null;

		/** User friendly display name of the parent monitor */
		parentMonitorDisplayName?: string | null;

		/** Name of the parent monitor */
		parentMonitorName?: string | null;

		/** Name of the signal on which this monitor is configured. */
		signalName?: string | null;

		/** Type of the signal on which this monitor is configured. */
		signalType?: string | null;
	}

	/** Model for properties of a Monitor. */
	export interface MonitorPropertiesFormProperties {

		/** Generates alerts or not */
		alertGeneration: FormControl<MonitorPropertiesAlertGeneration | null | undefined>,

		/** Component Type Display Name of the monitor */
		componentTypeDisplayName: FormControl<string | null | undefined>,

		/** Component Type Id of monitor */
		componentTypeId: FormControl<string | null | undefined>,

		/** Component Type Name of monitor */
		componentTypeName: FormControl<string | null | undefined>,

		/** Description of the monitor */
		description: FormControl<string | null | undefined>,

		/** URL pointing to the documentation of the monitor */
		documentationURL: FormControl<string | null | undefined>,

		/**
		 * Frequency at which monitor condition is evaluated
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,

		/**
		 * The duration in minutes in the past during which the monitor is evaluated
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lookbackDuration: FormControl<number | null | undefined>,

		/** Category of the monitor */
		monitorCategory: FormControl<MonitorPropertiesMonitorCategory | null | undefined>,

		/** User friendly display name of the monitor */
		monitorDisplayName: FormControl<string | null | undefined>,

		/** ID of the monitor */
		monitorId: FormControl<string | null | undefined>,

		/** Name of the monitor */
		monitorName: FormControl<string | null | undefined>,

		/** Is the monitor state enabled or disabled */
		monitorState: FormControl<MonitorPropertiesAlertGeneration | null | undefined>,

		/** Type of the monitor */
		monitorType: FormControl<MonitorPropertiesMonitorType | null | undefined>,

		/** User friendly display name of the parent monitor */
		parentMonitorDisplayName: FormControl<string | null | undefined>,

		/** Name of the parent monitor */
		parentMonitorName: FormControl<string | null | undefined>,

		/** Name of the signal on which this monitor is configured. */
		signalName: FormControl<string | null | undefined>,

		/** Type of the signal on which this monitor is configured. */
		signalType: FormControl<string | null | undefined>,
	}
	export function CreateMonitorPropertiesFormGroup() {
		return new FormGroup<MonitorPropertiesFormProperties>({
			alertGeneration: new FormControl<MonitorPropertiesAlertGeneration | null | undefined>(undefined),
			componentTypeDisplayName: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentationURL: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<number | null | undefined>(undefined),
			lookbackDuration: new FormControl<number | null | undefined>(undefined),
			monitorCategory: new FormControl<MonitorPropertiesMonitorCategory | null | undefined>(undefined),
			monitorDisplayName: new FormControl<string | null | undefined>(undefined),
			monitorId: new FormControl<string | null | undefined>(undefined),
			monitorName: new FormControl<string | null | undefined>(undefined),
			monitorState: new FormControl<MonitorPropertiesAlertGeneration | null | undefined>(undefined),
			monitorType: new FormControl<MonitorPropertiesMonitorType | null | undefined>(undefined),
			parentMonitorDisplayName: new FormControl<string | null | undefined>(undefined),
			parentMonitorName: new FormControl<string | null | undefined>(undefined),
			signalName: new FormControl<string | null | undefined>(undefined),
			signalType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MonitorPropertiesAlertGeneration { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** Criteria for monitor configuration */
	export interface MonitorCriteria {

		/** Comparison enum on threshold of this criteria */
		comparisonOperator?: MonitorCriteriaComparisonOperator | null;

		/** Target health state of the criteria */
		healthState?: ComponentPropertiesHealthState | null;

		/**
		 * Threshold value for this criteria
		 * Type: double
		 */
		threshold?: number | null;
	}

	/** Criteria for monitor configuration */
	export interface MonitorCriteriaFormProperties {

		/** Comparison enum on threshold of this criteria */
		comparisonOperator: FormControl<MonitorCriteriaComparisonOperator | null | undefined>,

		/** Target health state of the criteria */
		healthState: FormControl<ComponentPropertiesHealthState | null | undefined>,

		/**
		 * Threshold value for this criteria
		 * Type: double
		 */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateMonitorCriteriaFormGroup() {
		return new FormGroup<MonitorCriteriaFormProperties>({
			comparisonOperator: new FormControl<MonitorCriteriaComparisonOperator | null | undefined>(undefined),
			healthState: new FormControl<ComponentPropertiesHealthState | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MonitorCriteriaComparisonOperator { Equals = 'Equals', GreaterThan = 'GreaterThan', GreaterThanOrEqual = 'GreaterThanOrEqual', LessThan = 'LessThan', LessThanOrEqual = 'LessThanOrEqual', NotEquals = 'NotEquals' }

	export enum MonitorPropertiesMonitorCategory { AvailabilityHealth = 'AvailabilityHealth', Configuration = 'Configuration', EntityHealth = 'EntityHealth', PerformanceHealth = 'PerformanceHealth', Security = 'Security' }

	export enum MonitorPropertiesMonitorType { Aggregate = 'Aggregate', Dependency = 'Dependency', Unit = 'Unit' }


	/** Model for monitor instance. */
	export interface MonitorInstance {

		/** For optimistic concurrency control. */
		etag?: string | null;

		/** Model for properties of a monitor instance. */
		properties?: MonitorInstanceProperties;
	}

	/** Model for monitor instance. */
	export interface MonitorInstanceFormProperties {

		/** For optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateMonitorInstanceFormGroup() {
		return new FormGroup<MonitorInstanceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for properties of a monitor instance. */
	export interface MonitorInstanceProperties {

		/** Properties requested in aggregation queries. */
		aggregateProperties?: {[id: string]: string };

		/** Generates alert or not. */
		alertGeneration?: MonitorPropertiesAlertGeneration | null;

		/** Health instance children. */
		children?: Array<MonitorInstance>;

		/** ID of the component. */
		componentId?: string | null;

		/** Name of the component. */
		componentName?: string | null;

		/** ID of the component type. */
		componentTypeId?: string | null;

		/** Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc. */
		componentTypeName?: string | null;

		/** Health state of monitor instance. */
		healthState?: ComponentPropertiesHealthState | null;

		/** Category of monitor instance's health state. */
		healthStateCategory?: ComponentPropertiesHealthStateCategory | null;

		/** Health state changes. */
		healthStateChanges?: Array<HealthStateChange>;

		/** End time for health state changes. */
		healthStateChangesEndTime?: Date | null;

		/** Start time for health state changes. */
		healthStateChangesStartTime?: Date | null;

		/** Time of last health state change. */
		lastHealthStateChangeTime?: Date | null;

		/** Monitor type category. Indicates the attribute of the component that the health criteria monitors such as Performance, Availability, etc. */
		monitorCategory?: MonitorPropertiesMonitorCategory | null;

		/** ID of the monitor instance. */
		monitorId?: string | null;

		/** Name of the monitor. */
		monitorName?: string | null;

		/** Type of the monitor. The qualifier for the health criteria depending on the functionality it performs such as Unit, Aggregate, Dependency. */
		monitorType?: MonitorPropertiesMonitorType | null;

		/** ID of the OMS solution this health instance belong to. */
		solutionId?: string | null;

		/** Type of the workload. */
		workloadType?: ComponentPropertiesWorkloadType | null;

		/** ID of the workspace. */
		workspaceId?: string | null;
	}

	/** Model for properties of a monitor instance. */
	export interface MonitorInstancePropertiesFormProperties {

		/** Properties requested in aggregation queries. */
		aggregateProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Generates alert or not. */
		alertGeneration: FormControl<MonitorPropertiesAlertGeneration | null | undefined>,

		/** ID of the component. */
		componentId: FormControl<string | null | undefined>,

		/** Name of the component. */
		componentName: FormControl<string | null | undefined>,

		/** ID of the component type. */
		componentTypeId: FormControl<string | null | undefined>,

		/** Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc. */
		componentTypeName: FormControl<string | null | undefined>,

		/** Health state of monitor instance. */
		healthState: FormControl<ComponentPropertiesHealthState | null | undefined>,

		/** Category of monitor instance's health state. */
		healthStateCategory: FormControl<ComponentPropertiesHealthStateCategory | null | undefined>,

		/** End time for health state changes. */
		healthStateChangesEndTime: FormControl<Date | null | undefined>,

		/** Start time for health state changes. */
		healthStateChangesStartTime: FormControl<Date | null | undefined>,

		/** Time of last health state change. */
		lastHealthStateChangeTime: FormControl<Date | null | undefined>,

		/** Monitor type category. Indicates the attribute of the component that the health criteria monitors such as Performance, Availability, etc. */
		monitorCategory: FormControl<MonitorPropertiesMonitorCategory | null | undefined>,

		/** ID of the monitor instance. */
		monitorId: FormControl<string | null | undefined>,

		/** Name of the monitor. */
		monitorName: FormControl<string | null | undefined>,

		/** Type of the monitor. The qualifier for the health criteria depending on the functionality it performs such as Unit, Aggregate, Dependency. */
		monitorType: FormControl<MonitorPropertiesMonitorType | null | undefined>,

		/** ID of the OMS solution this health instance belong to. */
		solutionId: FormControl<string | null | undefined>,

		/** Type of the workload. */
		workloadType: FormControl<ComponentPropertiesWorkloadType | null | undefined>,

		/** ID of the workspace. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateMonitorInstancePropertiesFormGroup() {
		return new FormGroup<MonitorInstancePropertiesFormProperties>({
			aggregateProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			alertGeneration: new FormControl<MonitorPropertiesAlertGeneration | null | undefined>(undefined),
			componentId: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined),
			healthState: new FormControl<ComponentPropertiesHealthState | null | undefined>(undefined),
			healthStateCategory: new FormControl<ComponentPropertiesHealthStateCategory | null | undefined>(undefined),
			healthStateChangesEndTime: new FormControl<Date | null | undefined>(undefined),
			healthStateChangesStartTime: new FormControl<Date | null | undefined>(undefined),
			lastHealthStateChangeTime: new FormControl<Date | null | undefined>(undefined),
			monitorCategory: new FormControl<MonitorPropertiesMonitorCategory | null | undefined>(undefined),
			monitorId: new FormControl<string | null | undefined>(undefined),
			monitorName: new FormControl<string | null | undefined>(undefined),
			monitorType: new FormControl<MonitorPropertiesMonitorType | null | undefined>(undefined),
			solutionId: new FormControl<string | null | undefined>(undefined),
			workloadType: new FormControl<ComponentPropertiesWorkloadType | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for collection of health instances. */
	export interface MonitorInstancesCollection {

		/** URL to the next set of results. */
		nextLink?: string | null;

		/** Collection of health instances. */
		value?: Array<MonitorInstance>;
	}

	/** Model for collection of health instances. */
	export interface MonitorInstancesCollectionFormProperties {

		/** URL to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMonitorInstancesCollectionFormGroup() {
		return new FormGroup<MonitorInstancesCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for collection of Monitor. */
	export interface MonitorsCollection {

		/** URL for next set of results. */
		nextLink?: string | null;

		/** Collection of Monitor. */
		value?: Array<Monitor>;
	}

	/** Model for collection of Monitor. */
	export interface MonitorsCollectionFormProperties {

		/** URL for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMonitorsCollectionFormGroup() {
		return new FormGroup<MonitorsCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for NotificationSetting. */
	export interface NotificationSetting {

		/** For optimistic concurrency control. */
		etag?: string | null;

		/** Model for properties of a NotificationSetting. */
		properties?: NotificationSettingProperties;
	}

	/** Model for NotificationSetting. */
	export interface NotificationSettingFormProperties {

		/** For optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateNotificationSettingFormGroup() {
		return new FormGroup<NotificationSettingFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for properties of a NotificationSetting. */
	export interface NotificationSettingProperties {

		/** List of action group resource ids to be notified */
		actionGroupResourceIds?: Array<string>;
	}

	/** Model for properties of a NotificationSetting. */
	export interface NotificationSettingPropertiesFormProperties {
	}
	export function CreateNotificationSettingPropertiesFormGroup() {
		return new FormGroup<NotificationSettingPropertiesFormProperties>({
		});

	}


	/** Model for collection of notificationSettings. */
	export interface NotificationSettingsCollection {

		/** URL to the next set of results. */
		nextLink?: string | null;
		value?: Array<NotificationSetting>;
	}

	/** Model for collection of notificationSettings. */
	export interface NotificationSettingsCollectionFormProperties {

		/** URL to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateNotificationSettingsCollectionFormGroup() {
		return new FormGroup<NotificationSettingsCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation supported by the resource provider. */
	export interface Operation {

		/** Properties of an operation supported by the resource provider. */
		display?: OperationProperties;

		/** The name of the resource operation. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;
	}

	/** Operation supported by the resource provider. */
	export interface OperationFormProperties {

		/** The name of the resource operation. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an operation supported by the resource provider. */
	export interface OperationProperties {

		/** The description of the resource provider. */
		description?: string | null;

		/** This operation name. */
		operation?: string | null;

		/** The provider name. */
		provider?: string | null;

		/** The resource name. */
		resource?: string | null;
	}

	/** Properties of an operation supported by the resource provider. */
	export interface OperationPropertiesFormProperties {

		/** The description of the resource provider. */
		description: FormControl<string | null | undefined>,

		/** This operation name. */
		operation: FormControl<string | null | undefined>,

		/** The provider name. */
		provider: FormControl<string | null | undefined>,

		/** The resource name. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for a list of operations supported by the resource provider. */
	export interface OperationListResult {

		/** URL to the next set of results. */
		nextLink?: string | null;

		/** List of operations. */
		value?: Array<Operation>;
	}

	/** Container for a list of operations supported by the resource provider. */
	export interface OperationListResultFormProperties {

		/** URL to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the details of all operations possible on the resource provider.
		 * Get providers/Microsoft.WorkloadMonitor/operations
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} skiptoken The page-continuation token to use with a paged version of this API.
		 * @return {OperationListResult} OK.
		 */
		Operations_List(api_version: Operations_ListApi_version, skiptoken: string | null | undefined): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.WorkloadMonitor/operations?api_version=' + api_version + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get subscription wide details of components.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.WorkloadMonitor/componentsSummary
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} select Properties to be returned in the response.
		 * @param {string} filter Filter to be applied on the operation.
		 * @param {string} apply Apply aggregation.
		 * @param {string} orderby Sort the result on one or more properties.
		 * @param {string} expand Include properties inline in the response.
		 * @param {string} top Limit the result to the specified number of rows.
		 * @param {string} skiptoken The page-continuation token to use with a paged version of this API.
		 * @return {ComponentsCollection} OK. At least one component found.
		 */
		ComponentsSummary_List(subscriptionId: string, api_version: Operations_ListApi_version, select: string | null | undefined, filter: string | null | undefined, apply: string | null | undefined, orderby: string | null | undefined, expand: string | null | undefined, top: string | null | undefined, skiptoken: string | null | undefined): Observable<ComponentsCollection> {
			return this.http.get<ComponentsCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.WorkloadMonitor/componentsSummary&api_version=' + api_version + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&apply=' + (apply == null ? '' : encodeURIComponent(apply)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get subscription wide health instances.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.WorkloadMonitor/monitorInstancesSummary
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} select Properties to be returned in the response.
		 * @param {string} filter Filter to be applied on the operation.
		 * @param {string} apply Apply aggregation.
		 * @param {string} orderby Sort the result on one or more properties.
		 * @param {string} expand Include properties inline in the response.
		 * @param {string} top Limit the result to the specified number of rows.
		 * @param {string} skiptoken The page-continuation token to use with a paged version of this API.
		 * @return {MonitorInstancesCollection} OK.
		 */
		MonitorInstancesSummary_List(subscriptionId: string, api_version: Operations_ListApi_version, select: string | null | undefined, filter: string | null | undefined, apply: string | null | undefined, orderby: string | null | undefined, expand: string | null | undefined, top: string | null | undefined, skiptoken: string | null | undefined): Observable<MonitorInstancesCollection> {
			return this.http.get<MonitorInstancesCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.WorkloadMonitor/monitorInstancesSummary&api_version=' + api_version + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&apply=' + (apply == null ? '' : encodeURIComponent(apply)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get list of components for a resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/components
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} select Properties to be returned in the response.
		 * @param {string} filter Filter to be applied on the operation.
		 * @param {string} apply Apply aggregation.
		 * @param {string} orderby Sort the result on one or more properties.
		 * @param {string} expand Include properties inline in the response.
		 * @param {string} top Limit the result to the specified number of rows.
		 * @param {string} skiptoken The page-continuation token to use with a paged version of this API.
		 * @return {ComponentsCollection} OK. At least one component found.
		 */
		Components_ListByResource(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, api_version: Operations_ListApi_version, select: string | null | undefined, filter: string | null | undefined, apply: string | null | undefined, orderby: string | null | undefined, expand: string | null | undefined, top: string | null | undefined, skiptoken: string | null | undefined): Observable<ComponentsCollection> {
			return this.http.get<ComponentsCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/components&api_version=' + api_version + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&apply=' + (apply == null ? '' : encodeURIComponent(apply)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get details of a component.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/components/{componentId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} componentId Component Id.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} select Properties to be returned in the response.
		 * @param {string} expand Include properties inline in the response.
		 * @return {Component} OK. component is found.
		 */
		Components_Get(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, componentId: string, api_version: Operations_ListApi_version, select: string | null | undefined, expand: string | null | undefined): Observable<Component> {
			return this.http.get<Component>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/components/' + (componentId == null ? '' : encodeURIComponent(componentId)) + '&api_version=' + api_version + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Get list of monitor instances for a resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitorInstances
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} select Properties to be returned in the response.
		 * @param {string} filter Filter to be applied on the operation.
		 * @param {string} apply Apply aggregation.
		 * @param {string} orderby Sort the result on one or more properties.
		 * @param {string} expand Include properties inline in the response.
		 * @param {string} top Limit the result to the specified number of rows.
		 * @param {string} skiptoken The page-continuation token to use with a paged version of this API.
		 * @return {MonitorInstancesCollection} OK.
		 */
		MonitorInstances_ListByResource(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, api_version: Operations_ListApi_version, select: string | null | undefined, filter: string | null | undefined, apply: string | null | undefined, orderby: string | null | undefined, expand: string | null | undefined, top: string | null | undefined, skiptoken: string | null | undefined): Observable<MonitorInstancesCollection> {
			return this.http.get<MonitorInstancesCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/monitorInstances&api_version=' + api_version + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&apply=' + (apply == null ? '' : encodeURIComponent(apply)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get details of a monitorInstance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitorInstances/{monitorInstanceId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} monitorInstanceId MonitorInstance Id.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} select Properties to be returned in the response.
		 * @param {string} expand Include properties inline in the response.
		 * @return {MonitorInstance} OK. monitorInstance is found.
		 */
		MonitorInstances_Get(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, monitorInstanceId: string, api_version: Operations_ListApi_version, select: string | null | undefined, expand: string | null | undefined): Observable<MonitorInstance> {
			return this.http.get<MonitorInstance>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/monitorInstances/' + (monitorInstanceId == null ? '' : encodeURIComponent(monitorInstanceId)) + '&api_version=' + api_version + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Get list of a monitors of a resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitors
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} filter Filter to be applied on the operation.
		 * @param {string} skiptoken The page-continuation token to use with a paged version of this API.
		 * @return {MonitorsCollection} OK. At least one monitor is found.
		 */
		Monitors_ListByResource(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, api_version: Operations_ListApi_version, filter: string | null | undefined, skiptoken: string | null | undefined): Observable<MonitorsCollection> {
			return this.http.get<MonitorsCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/monitors&api_version=' + api_version + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get details of a single monitor.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitors/{monitorId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} monitorId Monitor Id.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @return {Monitor} OK. monitor is found.
		 */
		Monitors_Get(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, monitorId: string, api_version: Operations_ListApi_version): Observable<Monitor> {
			return this.http.get<Monitor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/monitors/' + (monitorId == null ? '' : encodeURIComponent(monitorId)) + '&api_version=' + api_version, {});
		}

		/**
		 * Update a Monitor's configuration.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitors/{monitorId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} monitorId Monitor Id.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {Monitor} requestBody Body of the Monitor PATCH object.
		 * @return {Monitor} OK. Existing monitor is updated.
		 */
		Monitors_Update(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, monitorId: string, api_version: Operations_ListApi_version, requestBody: Monitor): Observable<Monitor> {
			return this.http.patch<Monitor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/monitors/' + (monitorId == null ? '' : encodeURIComponent(monitorId)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get list of notification settings for a resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/notificationSettings
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {string} skiptoken The page-continuation token to use with a paged version of this API.
		 * @return {NotificationSettingsCollection} OK. At least one component found.
		 */
		NotificationSettings_ListByResource(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, api_version: Operations_ListApi_version, skiptoken: string | null | undefined): Observable<NotificationSettingsCollection> {
			return this.http.get<NotificationSettingsCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/notificationSettings&api_version=' + api_version + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get a of notification setting for a resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/notificationSettings/{notificationSettingName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {NotificationSettings_GetNotificationSettingName} notificationSettingName Default string modeled as parameter for URL to work correctly.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @return {NotificationSetting} OK. At least one component found.
		 */
		NotificationSettings_Get(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, notificationSettingName: NotificationSettings_GetNotificationSettingName, api_version: Operations_ListApi_version): Observable<NotificationSetting> {
			return this.http.get<NotificationSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/notificationSettings/' + notificationSettingName + '&api_version=' + api_version, {});
		}

		/**
		 * Update notification settings for a resource.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/notificationSettings/{notificationSettingName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {NotificationSettings_GetNotificationSettingName} notificationSettingName Default string modeled as parameter for URL to work correctly.
		 * @param {Operations_ListApi_version} api_version The API version to use for this operation.
		 * @param {NotificationSetting} requestBody Body of the NotificationSetting PUT object.
		 * @return {NotificationSetting} OK. At least one component found.
		 */
		NotificationSettings_Update(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, notificationSettingName: NotificationSettings_GetNotificationSettingName, api_version: Operations_ListApi_version, requestBody: NotificationSetting): Observable<NotificationSetting> {
			return this.http.put<NotificationSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.WorkloadMonitor/notificationSettings/' + notificationSettingName + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Operations_ListApi_version { '2018-08-31-preview' = '2018-08-31-preview' }

	export enum NotificationSettings_GetNotificationSettingName { default = 'default' }

}

