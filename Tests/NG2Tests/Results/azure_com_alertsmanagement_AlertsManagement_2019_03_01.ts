import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An azure resource object */
	export interface ProxyResource {

		/** Azure resource Id */
		id?: string | null;

		/** Azure resource name */
		name?: string | null;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ProxyResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An alert created in alert management service. */
	export interface Alert extends ProxyResource {

		/** Alert property bag */
		properties?: AlertProperties;
	}

	/** An alert created in alert management service. */
	export interface AlertFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alert property bag */
	export interface AlertProperties {

		/** Information specific to the monitor service that gives more contextual details about the alert. */
		context?: AlertContext;

		/** Config which would be used for displaying the data in portal. */
		egressConfig?: EgressConfig;

		/** This object contains consistent fields across different monitor services. */
		essentials?: Essentials;
	}

	/** Alert property bag */
	export interface AlertPropertiesFormProperties {
	}
	export function CreateAlertPropertiesFormGroup() {
		return new FormGroup<AlertPropertiesFormProperties>({
		});

	}


	/** Information specific to the monitor service that gives more contextual details about the alert. */
	export interface AlertContext {
	}

	/** Information specific to the monitor service that gives more contextual details about the alert. */
	export interface AlertContextFormProperties {
	}
	export function CreateAlertContextFormGroup() {
		return new FormGroup<AlertContextFormProperties>({
		});

	}


	/** Config which would be used for displaying the data in portal. */
	export interface EgressConfig {
	}

	/** Config which would be used for displaying the data in portal. */
	export interface EgressConfigFormProperties {
	}
	export function CreateEgressConfigFormGroup() {
		return new FormGroup<EgressConfigFormProperties>({
		});

	}


	/** This object contains consistent fields across different monitor services. */
	export interface Essentials {

		/** Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule. */
		alertRule?: string | null;

		/** Alert object state, which can be modified by the user. */
		alertState?: EssentialsAlertState | null;

		/** Last modification time(ISO-8601 format) of alert instance. */
		lastModifiedDateTime?: Date | null;

		/** User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user. */
		lastModifiedUserName?: string | null;

		/** Can be 'Fired' or 'Resolved', which represents whether the underlying conditions have crossed the defined alert rule thresholds. */
		monitorCondition?: EssentialsMonitorCondition | null;

		/** Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met. */
		monitorConditionResolvedDateTime?: Date | null;

		/** Monitor service on which the rule(monitor) is set. */
		monitorService?: EssentialsMonitorService | null;

		/** Severity of alert Sev0 being highest and Sev4 being lowest. */
		severity?: EssentialsSeverity | null;

		/** The type of signal the alert is based on, which could be metrics, logs or activity logs. */
		signalType?: EssentialsSignalType | null;

		/** Unique Id of the smart group */
		smartGroupId?: string | null;

		/** Verbose reason describing the reason why this alert instance is added to a smart group */
		smartGroupingReason?: string | null;

		/** Unique Id created by monitor service for each alert instance. This could be used to track the issue at the monitor service, in case of Nagios, Zabbix, SCOM etc. */
		sourceCreatedId?: string | null;

		/** Creation time(ISO-8601 format) of alert instance. */
		startDateTime?: Date | null;

		/** Target ARM resource, on which alert got created. */
		targetResource?: string | null;

		/** Resource group of target ARM resource, on which alert got created. */
		targetResourceGroup?: string | null;

		/** Name of the target ARM resource name, on which alert got created. */
		targetResourceName?: string | null;

		/** Resource type of target ARM resource, on which alert got created. */
		targetResourceType?: string | null;
	}

	/** This object contains consistent fields across different monitor services. */
	export interface EssentialsFormProperties {

		/** Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule. */
		alertRule: FormControl<string | null | undefined>,

		/** Alert object state, which can be modified by the user. */
		alertState: FormControl<EssentialsAlertState | null | undefined>,

		/** Last modification time(ISO-8601 format) of alert instance. */
		lastModifiedDateTime: FormControl<Date | null | undefined>,

		/** User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user. */
		lastModifiedUserName: FormControl<string | null | undefined>,

		/** Can be 'Fired' or 'Resolved', which represents whether the underlying conditions have crossed the defined alert rule thresholds. */
		monitorCondition: FormControl<EssentialsMonitorCondition | null | undefined>,

		/** Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met. */
		monitorConditionResolvedDateTime: FormControl<Date | null | undefined>,

		/** Monitor service on which the rule(monitor) is set. */
		monitorService: FormControl<EssentialsMonitorService | null | undefined>,

		/** Severity of alert Sev0 being highest and Sev4 being lowest. */
		severity: FormControl<EssentialsSeverity | null | undefined>,

		/** The type of signal the alert is based on, which could be metrics, logs or activity logs. */
		signalType: FormControl<EssentialsSignalType | null | undefined>,

		/** Unique Id of the smart group */
		smartGroupId: FormControl<string | null | undefined>,

		/** Verbose reason describing the reason why this alert instance is added to a smart group */
		smartGroupingReason: FormControl<string | null | undefined>,

		/** Unique Id created by monitor service for each alert instance. This could be used to track the issue at the monitor service, in case of Nagios, Zabbix, SCOM etc. */
		sourceCreatedId: FormControl<string | null | undefined>,

		/** Creation time(ISO-8601 format) of alert instance. */
		startDateTime: FormControl<Date | null | undefined>,

		/** Target ARM resource, on which alert got created. */
		targetResource: FormControl<string | null | undefined>,

		/** Resource group of target ARM resource, on which alert got created. */
		targetResourceGroup: FormControl<string | null | undefined>,

		/** Name of the target ARM resource name, on which alert got created. */
		targetResourceName: FormControl<string | null | undefined>,

		/** Resource type of target ARM resource, on which alert got created. */
		targetResourceType: FormControl<string | null | undefined>,
	}
	export function CreateEssentialsFormGroup() {
		return new FormGroup<EssentialsFormProperties>({
			alertRule: new FormControl<string | null | undefined>(undefined),
			alertState: new FormControl<EssentialsAlertState | null | undefined>(undefined),
			lastModifiedDateTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedUserName: new FormControl<string | null | undefined>(undefined),
			monitorCondition: new FormControl<EssentialsMonitorCondition | null | undefined>(undefined),
			monitorConditionResolvedDateTime: new FormControl<Date | null | undefined>(undefined),
			monitorService: new FormControl<EssentialsMonitorService | null | undefined>(undefined),
			severity: new FormControl<EssentialsSeverity | null | undefined>(undefined),
			signalType: new FormControl<EssentialsSignalType | null | undefined>(undefined),
			smartGroupId: new FormControl<string | null | undefined>(undefined),
			smartGroupingReason: new FormControl<string | null | undefined>(undefined),
			sourceCreatedId: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
			targetResourceGroup: new FormControl<string | null | undefined>(undefined),
			targetResourceName: new FormControl<string | null | undefined>(undefined),
			targetResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EssentialsAlertState { New = 'New', Acknowledged = 'Acknowledged', Closed = 'Closed' }

	export enum EssentialsMonitorCondition { Fired = 'Fired', Resolved = 'Resolved' }

	export enum EssentialsMonitorService { 'Application Insights' = 'Application Insights', 'ActivityLog Administrative' = 'ActivityLog Administrative', 'ActivityLog Security' = 'ActivityLog Security', 'ActivityLog Recommendation' = 'ActivityLog Recommendation', 'ActivityLog Policy' = 'ActivityLog Policy', 'ActivityLog Autoscale' = 'ActivityLog Autoscale', 'Log Analytics' = 'Log Analytics', Nagios = 'Nagios', Platform = 'Platform', SCOM = 'SCOM', ServiceHealth = 'ServiceHealth', SmartDetector = 'SmartDetector', 'VM Insights' = 'VM Insights', Zabbix = 'Zabbix', 'Resource Health' = 'Resource Health' }

	export enum EssentialsSeverity { Sev0 = 'Sev0', Sev1 = 'Sev1', Sev2 = 'Sev2', Sev3 = 'Sev3', Sev4 = 'Sev4' }

	export enum EssentialsSignalType { Metric = 'Metric', Log = 'Log', Unknown = 'Unknown' }


	/** Alert Modification details */
	export interface AlertModification extends ProxyResource {

		/** Properties of the alert modification item. */
		properties?: AlertModificationProperties;
	}

	/** Alert Modification details */
	export interface AlertModificationFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateAlertModificationFormGroup() {
		return new FormGroup<AlertModificationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the alert modification item. */
	export interface AlertModificationProperties {

		/** Unique Id of the alert for which the history is being retrieved */
		alertId?: string | null;

		/** Modification details */
		modifications?: Array<AlertModificationItem>;
	}

	/** Properties of the alert modification item. */
	export interface AlertModificationPropertiesFormProperties {

		/** Unique Id of the alert for which the history is being retrieved */
		alertId: FormControl<string | null | undefined>,
	}
	export function CreateAlertModificationPropertiesFormGroup() {
		return new FormGroup<AlertModificationPropertiesFormProperties>({
			alertId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alert modification item. */
	export interface AlertModificationItem {

		/** Modification comments */
		comments?: string | null;

		/** Description of the modification */
		description?: string | null;

		/** Reason for the modification */
		modificationEvent?: AlertModificationItemModificationEvent | null;

		/** Modified date and time */
		modifiedAt?: string | null;

		/** Modified user details (Principal client name) */
		modifiedBy?: string | null;

		/** New value */
		newValue?: string | null;

		/** Old value */
		oldValue?: string | null;
	}

	/** Alert modification item. */
	export interface AlertModificationItemFormProperties {

		/** Modification comments */
		comments: FormControl<string | null | undefined>,

		/** Description of the modification */
		description: FormControl<string | null | undefined>,

		/** Reason for the modification */
		modificationEvent: FormControl<AlertModificationItemModificationEvent | null | undefined>,

		/** Modified date and time */
		modifiedAt: FormControl<string | null | undefined>,

		/** Modified user details (Principal client name) */
		modifiedBy: FormControl<string | null | undefined>,

		/** New value */
		newValue: FormControl<string | null | undefined>,

		/** Old value */
		oldValue: FormControl<string | null | undefined>,
	}
	export function CreateAlertModificationItemFormGroup() {
		return new FormGroup<AlertModificationItemFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			modificationEvent: new FormControl<AlertModificationItemModificationEvent | null | undefined>(undefined),
			modifiedAt: new FormControl<string | null | undefined>(undefined),
			modifiedBy: new FormControl<string | null | undefined>(undefined),
			newValue: new FormControl<string | null | undefined>(undefined),
			oldValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlertModificationItemModificationEvent { AlertCreated = 'AlertCreated', StateChange = 'StateChange', MonitorConditionChange = 'MonitorConditionChange' }


	/** List the alerts. */
	export interface AlertsList {

		/** URL to fetch the next set of alerts. */
		nextLink?: string | null;

		/** List of alerts */
		value?: Array<Alert>;
	}

	/** List the alerts. */
	export interface AlertsListFormProperties {

		/** URL to fetch the next set of alerts. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAlertsListFormGroup() {
		return new FormGroup<AlertsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of alerts based on the input filters and 'groupby' parameters. */
	export interface AlertsSummary extends ProxyResource {

		/** Group the result set. */
		properties?: AlertsSummaryGroup;
	}

	/** Summary of alerts based on the input filters and 'groupby' parameters. */
	export interface AlertsSummaryFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateAlertsSummaryFormGroup() {
		return new FormGroup<AlertsSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Group the result set. */
	export interface AlertsSummaryGroup {

		/** Name of the field aggregated */
		groupedby?: string | null;

		/**
		 * Total count of the smart groups.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		smartGroupsCount?: number | null;

		/**
		 * Total count of the result set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/** List of the items */
		values?: Array<AlertsSummaryGroupItem>;
	}

	/** Group the result set. */
	export interface AlertsSummaryGroupFormProperties {

		/** Name of the field aggregated */
		groupedby: FormControl<string | null | undefined>,

		/**
		 * Total count of the smart groups.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		smartGroupsCount: FormControl<number | null | undefined>,

		/**
		 * Total count of the result set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateAlertsSummaryGroupFormGroup() {
		return new FormGroup<AlertsSummaryGroupFormProperties>({
			groupedby: new FormControl<string | null | undefined>(undefined),
			smartGroupsCount: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Alerts summary group item */
	export interface AlertsSummaryGroupItem {

		/**
		 * Count of the aggregated field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Name of the field aggregated */
		groupedby?: string | null;

		/** Value of the aggregated field */
		name?: string | null;

		/** List of the items */
		values?: Array<AlertsSummaryGroupItem>;
	}

	/** Alerts summary group item */
	export interface AlertsSummaryGroupItemFormProperties {

		/**
		 * Count of the aggregated field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Name of the field aggregated */
		groupedby: FormControl<string | null | undefined>,

		/** Value of the aggregated field */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlertsSummaryGroupItemFormGroup() {
		return new FormGroup<AlertsSummaryGroupItemFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			groupedby: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the service. */
	export interface ErrorResponse {

		/** Details of error response. */
		error?: ErrorResponseBody;
	}

	/** An error response from the service. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Details of error response. */
	export interface ErrorResponseBody {

		/** Error code, intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<ErrorResponseBody>;

		/** Description of the error, intended for display in user interface. */
		message?: string | null;

		/** Target of the particular error, for example name of the property. */
		target?: string | null;
	}

	/** Details of error response. */
	export interface ErrorResponseBodyFormProperties {

		/** Error code, intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** Description of the error, intended for display in user interface. */
		message: FormControl<string | null | undefined>,

		/** Target of the particular error, for example name of the property. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseBodyFormGroup() {
		return new FormGroup<ErrorResponseBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation provided by provider */
	export interface Operation {

		/** Properties of the operation */
		display?: OperationDisplay;

		/** Name of the operation */
		name?: string | null;
	}

	/** Operation provided by provider */
	export interface OperationFormProperties {

		/** Name of the operation */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationDisplay {

		/** Description of the operation */
		description?: string | null;

		/** Operation name */
		operation?: string | null;

		/** Provider name */
		provider?: string | null;

		/** Resource name */
		resource?: string | null;
	}
	export interface OperationDisplayFormProperties {

		/** Description of the operation */
		description: FormControl<string | null | undefined>,

		/** Operation name */
		operation: FormControl<string | null | undefined>,

		/** Provider name */
		provider: FormControl<string | null | undefined>,

		/** Resource name */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the operations available in the AlertsManagement RP. */
	export interface OperationsList {

		/** URL to fetch the next set of alerts. */
		nextLink?: string | null;

		/**
		 * Array of operations
		 * Required
		 */
		value: Array<Operation>;
	}

	/** Lists the operations available in the AlertsManagement RP. */
	export interface OperationsListFormProperties {

		/** URL to fetch the next set of alerts. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationsListFormGroup() {
		return new FormGroup<OperationsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of related alerts grouped together smartly by AMS. */
	export interface SmartGroup extends ProxyResource {

		/** Properties of smart group. */
		properties?: SmartGroupProperties;
	}

	/** Set of related alerts grouped together smartly by AMS. */
	export interface SmartGroupFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateSmartGroupFormGroup() {
		return new FormGroup<SmartGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of smart group. */
	export interface SmartGroupProperties {

		/** Summary of alertSeverities in the smart group */
		alertSeverities?: Array<SmartGroupAggregatedProperty>;

		/** Summary of alertStates in the smart group */
		alertStates?: Array<SmartGroupAggregatedProperty>;

		/**
		 * Total number of alerts in smart group
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alertsCount?: number | null;

		/** Last updated time of smart group. Date-Time in ISO-8601 format. */
		lastModifiedDateTime?: Date | null;

		/** Last modified by user name. */
		lastModifiedUserName?: string | null;

		/** Summary of monitorConditions in the smart group */
		monitorConditions?: Array<SmartGroupAggregatedProperty>;

		/** Summary of monitorServices in the smart group */
		monitorServices?: Array<SmartGroupAggregatedProperty>;

		/** The URI to fetch the next page of alerts. Call ListNext() with this URI to fetch the next page alerts. */
		nextLink?: string | null;

		/** Summary of target resource groups in the smart group */
		resourceGroups?: Array<SmartGroupAggregatedProperty>;

		/** Summary of target resource types in the smart group */
		resourceTypes?: Array<SmartGroupAggregatedProperty>;

		/** Summary of target resources in the smart group */
		resources?: Array<SmartGroupAggregatedProperty>;

		/** Severity of smart group is the highest(Sev0 >... > Sev4) severity of all the alerts in the group. */
		severity?: EssentialsSeverity | null;

		/** Smart group state */
		smartGroupState?: EssentialsAlertState | null;

		/** Creation time of smart group. Date-Time in ISO-8601 format. */
		startDateTime?: Date | null;
	}

	/** Properties of smart group. */
	export interface SmartGroupPropertiesFormProperties {

		/**
		 * Total number of alerts in smart group
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alertsCount: FormControl<number | null | undefined>,

		/** Last updated time of smart group. Date-Time in ISO-8601 format. */
		lastModifiedDateTime: FormControl<Date | null | undefined>,

		/** Last modified by user name. */
		lastModifiedUserName: FormControl<string | null | undefined>,

		/** The URI to fetch the next page of alerts. Call ListNext() with this URI to fetch the next page alerts. */
		nextLink: FormControl<string | null | undefined>,

		/** Severity of smart group is the highest(Sev0 >... > Sev4) severity of all the alerts in the group. */
		severity: FormControl<EssentialsSeverity | null | undefined>,

		/** Smart group state */
		smartGroupState: FormControl<EssentialsAlertState | null | undefined>,

		/** Creation time of smart group. Date-Time in ISO-8601 format. */
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSmartGroupPropertiesFormGroup() {
		return new FormGroup<SmartGroupPropertiesFormProperties>({
			alertsCount: new FormControl<number | null | undefined>(undefined),
			lastModifiedDateTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedUserName: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<EssentialsSeverity | null | undefined>(undefined),
			smartGroupState: new FormControl<EssentialsAlertState | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Aggregated property of each type */
	export interface SmartGroupAggregatedProperty {

		/**
		 * Total number of items of type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Name of the type. */
		name?: string | null;
	}

	/** Aggregated property of each type */
	export interface SmartGroupAggregatedPropertyFormProperties {

		/**
		 * Total number of items of type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Name of the type. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSmartGroupAggregatedPropertyFormGroup() {
		return new FormGroup<SmartGroupAggregatedPropertyFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alert Modification details */
	export interface SmartGroupModification extends ProxyResource {

		/** Properties of the smartGroup modification item. */
		properties?: SmartGroupModificationProperties;
	}

	/** Alert Modification details */
	export interface SmartGroupModificationFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateSmartGroupModificationFormGroup() {
		return new FormGroup<SmartGroupModificationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** smartGroup modification item. */
	export interface SmartGroupModificationItem {

		/** Modification comments */
		comments?: string | null;

		/** Description of the modification */
		description?: string | null;

		/** Reason for the modification */
		modificationEvent?: SmartGroupModificationItemModificationEvent | null;

		/** Modified date and time */
		modifiedAt?: string | null;

		/** Modified user details (Principal client name) */
		modifiedBy?: string | null;

		/** New value */
		newValue?: string | null;

		/** Old value */
		oldValue?: string | null;
	}

	/** smartGroup modification item. */
	export interface SmartGroupModificationItemFormProperties {

		/** Modification comments */
		comments: FormControl<string | null | undefined>,

		/** Description of the modification */
		description: FormControl<string | null | undefined>,

		/** Reason for the modification */
		modificationEvent: FormControl<SmartGroupModificationItemModificationEvent | null | undefined>,

		/** Modified date and time */
		modifiedAt: FormControl<string | null | undefined>,

		/** Modified user details (Principal client name) */
		modifiedBy: FormControl<string | null | undefined>,

		/** New value */
		newValue: FormControl<string | null | undefined>,

		/** Old value */
		oldValue: FormControl<string | null | undefined>,
	}
	export function CreateSmartGroupModificationItemFormGroup() {
		return new FormGroup<SmartGroupModificationItemFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			modificationEvent: new FormControl<SmartGroupModificationItemModificationEvent | null | undefined>(undefined),
			modifiedAt: new FormControl<string | null | undefined>(undefined),
			modifiedBy: new FormControl<string | null | undefined>(undefined),
			newValue: new FormControl<string | null | undefined>(undefined),
			oldValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SmartGroupModificationItemModificationEvent { SmartGroupCreated = 'SmartGroupCreated', StateChange = 'StateChange', AlertAdded = 'AlertAdded', AlertRemoved = 'AlertRemoved' }


	/** Properties of the smartGroup modification item. */
	export interface SmartGroupModificationProperties {

		/** Modification details */
		modifications?: Array<SmartGroupModificationItem>;

		/** URL to fetch the next set of results. */
		nextLink?: string | null;

		/** Unique Id of the smartGroup for which the history is being retrieved */
		smartGroupId?: string | null;
	}

	/** Properties of the smartGroup modification item. */
	export interface SmartGroupModificationPropertiesFormProperties {

		/** URL to fetch the next set of results. */
		nextLink: FormControl<string | null | undefined>,

		/** Unique Id of the smartGroup for which the history is being retrieved */
		smartGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSmartGroupModificationPropertiesFormGroup() {
		return new FormGroup<SmartGroupModificationPropertiesFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
			smartGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List the alerts. */
	export interface SmartGroupsList {

		/** URL to fetch the next set of alerts. */
		nextLink?: string | null;

		/** List of alerts */
		value?: Array<SmartGroup>;
	}

	/** List the alerts. */
	export interface SmartGroupsListFormProperties {

		/** URL to fetch the next set of alerts. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSmartGroupsListFormGroup() {
		return new FormGroup<SmartGroupsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all operations available through Azure Alerts Management Resource Provider.
		 * Get providers/Microsoft.AlertsManagement/operations
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {OperationsList} OK. Successfully retrieved operations list.
		 */
		Operations_List(api_version: Operations_ListApi_version): Observable<OperationsList> {
			return this.http.get<OperationsList>(this.baseUri + 'providers/Microsoft.AlertsManagement/operations?api_version=' + api_version, {});
		}

		/**
		 * Get all Smart Groups within a specified subscription
		 * List all the Smart Groups within a specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} targetResource Filter by target resource( which is full ARM ID) Default value is select all.
		 * @param {string} targetResourceGroup Filter by target resource group name. Default value is select all.
		 * @param {string} targetResourceType Filter by target resource type. Default value is select all.
		 * @param {EssentialsMonitorService} monitorService Filter by monitor service which generates the alert instance. Default value is select all.
		 * @param {EssentialsMonitorCondition} monitorCondition Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
		 * @param {EssentialsSeverity} severity Filter by severity.  Default value is select all.
		 * @param {EssentialsAlertState} smartGroupState Filter by state of the smart group. Default value is to select all.
		 * @param {SmartGroups_GetAllTimeRange} timeRange Filter by time range by below listed values. Default value is 1 day.
		 * @param {number} pageCount Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the "includeContent"  filter is selected, maximum value allowed is 25. Default value is 25.
		 * @param {SmartGroups_GetAllSortBy} sortBy Sort the query results by input field. Default value is sort by 'lastModifiedDateTime'.
		 * @param {SmartGroups_GetAllSortOrder} sortOrder Sort the query results order in either ascending or descending.  Default value is 'desc' for time fields and 'asc' for others.
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {SmartGroupsList} OK. Returns list of all smartGroups.
		 */
		SmartGroups_GetAll(subscriptionId: string, targetResource: string | null | undefined, targetResourceGroup: string | null | undefined, targetResourceType: string | null | undefined, monitorService: EssentialsMonitorService | null | undefined, monitorCondition: EssentialsMonitorCondition | null | undefined, severity: EssentialsSeverity | null | undefined, smartGroupState: EssentialsAlertState | null | undefined, timeRange: SmartGroups_GetAllTimeRange | null | undefined, pageCount: number | null | undefined, sortBy: SmartGroups_GetAllSortBy | null | undefined, sortOrder: SmartGroups_GetAllSortOrder | null | undefined, api_version: Operations_ListApi_version): Observable<SmartGroupsList> {
			return this.http.get<SmartGroupsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AlertsManagement/smartGroups&targetResource=' + (targetResource == null ? '' : encodeURIComponent(targetResource)) + '&targetResourceGroup=' + (targetResourceGroup == null ? '' : encodeURIComponent(targetResourceGroup)) + '&targetResourceType=' + (targetResourceType == null ? '' : encodeURIComponent(targetResourceType)) + '&monitorService=' + monitorService + '&monitorCondition=' + monitorCondition + '&severity=' + severity + '&smartGroupState=' + smartGroupState + '&timeRange=' + timeRange + '&pageCount=' + pageCount + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&api_version=' + api_version, {});
		}

		/**
		 * Get information related to a specific Smart Group.
		 * Get information related to a specific Smart Group.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} smartGroupId Smart group unique id. 
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {SmartGroup} OK. Returns the group with the specified smart group Id.
		 */
		SmartGroups_GetById(subscriptionId: string, smartGroupId: string, api_version: Operations_ListApi_version): Observable<SmartGroup> {
			return this.http.get<SmartGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AlertsManagement/smartGroups/' + (smartGroupId == null ? '' : encodeURIComponent(smartGroupId)) + '&api_version=' + api_version, {});
		}

		/**
		 * Change the state of a Smart Group.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId}/changeState
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} smartGroupId Smart group unique id. 
		 * @param {Operations_ListApi_version} api_version API version.
		 * @param {EssentialsAlertState} newState New state of the alert.
		 * @return {SmartGroup} OK. Smart Group state updated.
		 */
		SmartGroups_ChangeState(subscriptionId: string, smartGroupId: string, api_version: Operations_ListApi_version, newState: EssentialsAlertState): Observable<SmartGroup> {
			return this.http.post<SmartGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AlertsManagement/smartGroups/' + (smartGroupId == null ? '' : encodeURIComponent(smartGroupId)) + '/changeState&api_version=' + api_version + '&newState=' + newState, null, {});
		}

		/**
		 * Get the history a smart group, which captures any Smart Group state changes (New/Acknowledged/Closed) .
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId}/history
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} smartGroupId Smart group unique id. 
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {SmartGroupModification} OK. Returns the list of changes of smart group.
		 */
		SmartGroups_GetHistory(subscriptionId: string, smartGroupId: string, api_version: Operations_ListApi_version): Observable<SmartGroupModification> {
			return this.http.get<SmartGroupModification>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AlertsManagement/smartGroups/' + (smartGroupId == null ? '' : encodeURIComponent(smartGroupId)) + '/history&api_version=' + api_version, {});
		}

		/**
		 * List all existing alerts, where the results can be filtered on the basis of multiple parameters (e.g. time range). The results can then be sorted on the basis specific fields, with the default being lastModifiedDateTime.
		 * Get {scope}/providers/Microsoft.AlertsManagement/alerts
		 * @param {string} scope scope here is resourceId for which alert is created.
		 * @param {string} targetResource Filter by target resource( which is full ARM ID) Default value is select all.
		 * @param {string} targetResourceType Filter by target resource type. Default value is select all.
		 * @param {string} targetResourceGroup Filter by target resource group name. Default value is select all.
		 * @param {EssentialsMonitorService} monitorService Filter by monitor service which generates the alert instance. Default value is select all.
		 * @param {EssentialsMonitorCondition} monitorCondition Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
		 * @param {EssentialsSeverity} severity Filter by severity.  Default value is select all.
		 * @param {EssentialsAlertState} alertState Filter by state of the alert instance. Default value is to select all.
		 * @param {string} alertRule Filter by specific alert rule.  Default value is to select all.
		 * @param {string} smartGroupId Filter the alerts list by the Smart Group Id. Default value is none.
		 * @param {boolean} includeContext Include context which has contextual data specific to the monitor service. Default value is false'
		 * @param {boolean} includeEgressConfig Include egress config which would be used for displaying the content in portal.  Default value is 'false'.
		 * @param {number} pageCount Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the "includeContent"  filter is selected, maximum value allowed is 25. Default value is 25.
		 * @param {Alerts_GetAllSortBy} sortBy Sort the query results by input field,  Default value is 'lastModifiedDateTime'.
		 * @param {SmartGroups_GetAllSortOrder} sortOrder Sort the query results order in either ascending or descending.  Default value is 'desc' for time fields and 'asc' for others.
		 * @param {string} select This filter allows to selection of the fields(comma separated) which would  be part of the essential section. This would allow to project only the  required fields rather than getting entire content.  Default is to fetch all the fields in the essentials section.
		 * @param {SmartGroups_GetAllTimeRange} timeRange Filter by time range by below listed values. Default value is 1 day.
		 * @param {string} customTimeRange Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none.
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {AlertsList} OK. Successfully listed alert objects.
		 */
		Alerts_GetAll(scope: string, targetResource: string | null | undefined, targetResourceType: string | null | undefined, targetResourceGroup: string | null | undefined, monitorService: EssentialsMonitorService | null | undefined, monitorCondition: EssentialsMonitorCondition | null | undefined, severity: EssentialsSeverity | null | undefined, alertState: EssentialsAlertState | null | undefined, alertRule: string | null | undefined, smartGroupId: string | null | undefined, includeContext: boolean | null | undefined, includeEgressConfig: boolean | null | undefined, pageCount: number | null | undefined, sortBy: Alerts_GetAllSortBy | null | undefined, sortOrder: SmartGroups_GetAllSortOrder | null | undefined, select: string | null | undefined, timeRange: SmartGroups_GetAllTimeRange | null | undefined, customTimeRange: string | null | undefined, api_version: Operations_ListApi_version): Observable<AlertsList> {
			return this.http.get<AlertsList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.AlertsManagement/alerts&targetResource=' + (targetResource == null ? '' : encodeURIComponent(targetResource)) + '&targetResourceType=' + (targetResourceType == null ? '' : encodeURIComponent(targetResourceType)) + '&targetResourceGroup=' + (targetResourceGroup == null ? '' : encodeURIComponent(targetResourceGroup)) + '&monitorService=' + monitorService + '&monitorCondition=' + monitorCondition + '&severity=' + severity + '&alertState=' + alertState + '&alertRule=' + (alertRule == null ? '' : encodeURIComponent(alertRule)) + '&smartGroupId=' + (smartGroupId == null ? '' : encodeURIComponent(smartGroupId)) + '&includeContext=' + includeContext + '&includeEgressConfig=' + includeEgressConfig + '&pageCount=' + pageCount + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeRange=' + timeRange + '&customTimeRange=' + (customTimeRange == null ? '' : encodeURIComponent(customTimeRange)) + '&api_version=' + api_version + '', {});
		}

		/**
		 * Get a specific alert.
		 * Get information related to a specific alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to get alert by id then use parent resource of scope. So in this example get alert by id call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}'.
		 * Get {scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}
		 * @param {string} scope scope here is resourceId for which alert is created.
		 * @param {string} alertId Unique ID of an alert instance.
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {Alert} OK. Returns the alert with the specified ID.
		 */
		Alerts_GetById(scope: string, alertId: string, api_version: Operations_ListApi_version): Observable<Alert> {
			return this.http.get<Alert>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.AlertsManagement/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '&api_version=' + api_version + '', {});
		}

		/**
		 * Change the state of an alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to change state of this particular alert then use parent resource of scope. So in this example change state call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}'.
		 * Post {scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}/changestate
		 * @param {string} scope scope here is resourceId for which alert is created.
		 * @param {string} alertId Unique ID of an alert instance.
		 * @param {Operations_ListApi_version} api_version API version.
		 * @param {EssentialsAlertState} newState New state of the alert.
		 * @return {Alert} OK. Alert state updated.
		 */
		Alerts_ChangeState(scope: string, alertId: string, api_version: Operations_ListApi_version, newState: EssentialsAlertState): Observable<Alert> {
			return this.http.post<Alert>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.AlertsManagement/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/changestate&api_version=' + api_version + '&newState=' + newState + '', null, {});
		}

		/**
		 * Get the history of an alert, which captures any monitor condition changes (Fired/Resolved), alert state changes (New/Acknowledged/Closed) and applied action rules for that particular alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to get history of this particular alert then use parent resource of scope. So in this example get history call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history'.
		 * Get {scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history
		 * @param {string} scope scope here is resourceId for which alert is created.
		 * @param {string} alertId Unique ID of an alert instance.
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {AlertModification} OK. Returns the history of the specified alert.
		 */
		Alerts_GetHistory(scope: string, alertId: string, api_version: Operations_ListApi_version): Observable<AlertModification> {
			return this.http.get<AlertModification>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.AlertsManagement/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/history&api_version=' + api_version + '', {});
		}

		/**
		 * Get a summarized count of your alerts grouped by various parameters (e.g. grouping by 'Severity' returns the count of alerts for each severity).
		 * Get {scope}/providers/Microsoft.AlertsManagement/alertsSummary
		 * @param {string} scope scope here is resourceId for which alert is created.
		 * @param {Alerts_GetSummaryGroupby} groupby This parameter allows the result set to be grouped by input fields. For example, groupby=severity,alertstate.
		 * @param {boolean} includeSmartGroupsCount Include count of the SmartGroups as part of the summary. Default value is 'false'.
		 * @param {string} targetResource Filter by target resource( which is full ARM ID) Default value is select all.
		 * @param {string} targetResourceType Filter by target resource type. Default value is select all.
		 * @param {string} targetResourceGroup Filter by target resource group name. Default value is select all.
		 * @param {EssentialsMonitorService} monitorService Filter by monitor service which generates the alert instance. Default value is select all.
		 * @param {EssentialsMonitorCondition} monitorCondition Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
		 * @param {EssentialsSeverity} severity Filter by severity.  Default value is select all.
		 * @param {EssentialsAlertState} alertState Filter by state of the alert instance. Default value is to select all.
		 * @param {string} alertRule Filter by specific alert rule.  Default value is to select all.
		 * @param {SmartGroups_GetAllTimeRange} timeRange Filter by time range by below listed values. Default value is 1 day.
		 * @param {string} customTimeRange Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none.
		 * @param {Operations_ListApi_version} api_version API version.
		 * @return {AlertsSummary} OK. Alert summary returned.
		 */
		Alerts_GetSummary(scope: string, groupby: Alerts_GetSummaryGroupby, includeSmartGroupsCount: boolean | null | undefined, targetResource: string | null | undefined, targetResourceType: string | null | undefined, targetResourceGroup: string | null | undefined, monitorService: EssentialsMonitorService | null | undefined, monitorCondition: EssentialsMonitorCondition | null | undefined, severity: EssentialsSeverity | null | undefined, alertState: EssentialsAlertState | null | undefined, alertRule: string | null | undefined, timeRange: SmartGroups_GetAllTimeRange | null | undefined, customTimeRange: string | null | undefined, api_version: Operations_ListApi_version): Observable<AlertsSummary> {
			return this.http.get<AlertsSummary>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.AlertsManagement/alertsSummary&groupby=' + groupby + '&includeSmartGroupsCount=' + includeSmartGroupsCount + '&targetResource=' + (targetResource == null ? '' : encodeURIComponent(targetResource)) + '&targetResourceType=' + (targetResourceType == null ? '' : encodeURIComponent(targetResourceType)) + '&targetResourceGroup=' + (targetResourceGroup == null ? '' : encodeURIComponent(targetResourceGroup)) + '&monitorService=' + monitorService + '&monitorCondition=' + monitorCondition + '&severity=' + severity + '&alertState=' + alertState + '&alertRule=' + (alertRule == null ? '' : encodeURIComponent(alertRule)) + '&timeRange=' + timeRange + '&customTimeRange=' + (customTimeRange == null ? '' : encodeURIComponent(customTimeRange)) + '&api_version=' + api_version + '', {});
		}
	}

	export enum Operations_ListApi_version { '2018-05-05' = '2018-05-05' }

	export enum SmartGroups_GetAllTimeRange { '1h' = '1h', '1d' = '1d', '7d' = '7d', '30d' = '30d' }

	export enum SmartGroups_GetAllSortBy { alertsCount = 'alertsCount', state = 'state', severity = 'severity', startDateTime = 'startDateTime', lastModifiedDateTime = 'lastModifiedDateTime' }

	export enum SmartGroups_GetAllSortOrder { asc = 'asc', desc = 'desc' }

	export enum Alerts_GetAllSortBy { name = 'name', severity = 'severity', alertState = 'alertState', monitorCondition = 'monitorCondition', targetResource = 'targetResource', targetResourceName = 'targetResourceName', targetResourceGroup = 'targetResourceGroup', targetResourceType = 'targetResourceType', startDateTime = 'startDateTime', lastModifiedDateTime = 'lastModifiedDateTime' }

	export enum Alerts_GetSummaryGroupby { severity = 'severity', alertState = 'alertState', monitorCondition = 'monitorCondition', monitorService = 'monitorService', signalType = 'signalType', alertRule = 'alertRule' }

}

