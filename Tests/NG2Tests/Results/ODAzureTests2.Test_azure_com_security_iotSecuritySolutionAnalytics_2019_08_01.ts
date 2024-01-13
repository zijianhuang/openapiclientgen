import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Security Solution Aggregated Alert information */
	export interface IoTSecurityAggregatedAlert {

		/** IoT Security solution aggregated alert details. */
		properties?: IoTSecurityAggregatedAlertProperties;
	}

	/** Security Solution Aggregated Alert information */
	export interface IoTSecurityAggregatedAlertFormProperties {
	}
	export function CreateIoTSecurityAggregatedAlertFormGroup() {
		return new FormGroup<IoTSecurityAggregatedAlertFormProperties>({
		});

	}


	/** IoT Security solution aggregated alert details. */
	export interface IoTSecurityAggregatedAlertProperties {

		/** IoT Security solution alert response. */
		actionTaken?: string | null;

		/** Date of detection. */
		aggregatedDateUtc?: Date | null;

		/** Display name of the alert type. */
		alertDisplayName?: string | null;

		/** Name of the alert type. */
		alertType?: string | null;

		/** Number of alerts occurrences within the aggregated time window. */
		count?: number | null;

		/** Description of the suspected vulnerability and meaning. */
		description?: string | null;

		/** Azure resource ID of the resource that received the alerts. */
		effectedResourceType?: string | null;

		/** Log analytics query for getting the list of affected devices/alerts. */
		logAnalyticsQuery?: string | null;

		/** Recommended steps for remediation. */
		remediationSteps?: string | null;

		/** Assessed alert severity. */
		reportedSeverity?: IoTSecurityAggregatedAlertPropertiesReportedSeverity | null;

		/** The type of the alerted resource (Azure, Non-Azure). */
		systemSource?: string | null;

		/** 10 devices with the highest number of occurrences of this alert type, on this day. */
		IoTSecurityAggregatedAlertPropertiesTopDevicesList?: Array<IoTSecurityAggregatedAlertPropertiesTopDevicesList>;

		/** Name of the organization that raised the alert. */
		vendorName?: string | null;
	}

	/** IoT Security solution aggregated alert details. */
	export interface IoTSecurityAggregatedAlertPropertiesFormProperties {

		/** IoT Security solution alert response. */
		actionTaken: FormControl<string | null | undefined>,

		/** Date of detection. */
		aggregatedDateUtc: FormControl<Date | null | undefined>,

		/** Display name of the alert type. */
		alertDisplayName: FormControl<string | null | undefined>,

		/** Name of the alert type. */
		alertType: FormControl<string | null | undefined>,

		/** Number of alerts occurrences within the aggregated time window. */
		count: FormControl<number | null | undefined>,

		/** Description of the suspected vulnerability and meaning. */
		description: FormControl<string | null | undefined>,

		/** Azure resource ID of the resource that received the alerts. */
		effectedResourceType: FormControl<string | null | undefined>,

		/** Log analytics query for getting the list of affected devices/alerts. */
		logAnalyticsQuery: FormControl<string | null | undefined>,

		/** Recommended steps for remediation. */
		remediationSteps: FormControl<string | null | undefined>,

		/** Assessed alert severity. */
		reportedSeverity: FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>,

		/** The type of the alerted resource (Azure, Non-Azure). */
		systemSource: FormControl<string | null | undefined>,

		/** Name of the organization that raised the alert. */
		vendorName: FormControl<string | null | undefined>,
	}
	export function CreateIoTSecurityAggregatedAlertPropertiesFormGroup() {
		return new FormGroup<IoTSecurityAggregatedAlertPropertiesFormProperties>({
			actionTaken: new FormControl<string | null | undefined>(undefined),
			aggregatedDateUtc: new FormControl<Date | null | undefined>(undefined),
			alertDisplayName: new FormControl<string | null | undefined>(undefined),
			alertType: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			effectedResourceType: new FormControl<string | null | undefined>(undefined),
			logAnalyticsQuery: new FormControl<string | null | undefined>(undefined),
			remediationSteps: new FormControl<string | null | undefined>(undefined),
			reportedSeverity: new FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>(undefined),
			systemSource: new FormControl<string | null | undefined>(undefined),
			vendorName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IoTSecurityAggregatedAlertPropertiesReportedSeverity { Informational = 0, Low = 1, Medium = 2, High = 3 }

	export interface IoTSecurityAggregatedAlertPropertiesTopDevicesList {

		/** Number of alerts raised for this device. */
		alertsCount?: number | null;

		/** Name of the device. */
		deviceId?: string | null;

		/** Most recent time this alert was raised for this device, on this day. */
		lastOccurrence?: string | null;
	}
	export interface IoTSecurityAggregatedAlertPropertiesTopDevicesListFormProperties {

		/** Number of alerts raised for this device. */
		alertsCount: FormControl<number | null | undefined>,

		/** Name of the device. */
		deviceId: FormControl<string | null | undefined>,

		/** Most recent time this alert was raised for this device, on this day. */
		lastOccurrence: FormControl<string | null | undefined>,
	}
	export function CreateIoTSecurityAggregatedAlertPropertiesTopDevicesListFormGroup() {
		return new FormGroup<IoTSecurityAggregatedAlertPropertiesTopDevicesListFormProperties>({
			alertsCount: new FormControl<number | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			lastOccurrence: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of IoT Security solution aggregated alert data. */
	export interface IoTSecurityAggregatedAlertList {

		/** When there is too much alert data for one page, use this URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of aggregated alerts data.
		 * Required
		 */
		value: Array<IoTSecurityAggregatedAlert>;
	}

	/** List of IoT Security solution aggregated alert data. */
	export interface IoTSecurityAggregatedAlertListFormProperties {

		/** When there is too much alert data for one page, use this URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIoTSecurityAggregatedAlertListFormGroup() {
		return new FormGroup<IoTSecurityAggregatedAlertListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IoT Security solution recommendation information. */
	export interface IoTSecurityAggregatedRecommendation {

		/** IoT Security solution aggregated recommendation information */
		properties?: IoTSecurityAggregatedRecommendationProperties;
	}

	/** IoT Security solution recommendation information. */
	export interface IoTSecurityAggregatedRecommendationFormProperties {
	}
	export function CreateIoTSecurityAggregatedRecommendationFormGroup() {
		return new FormGroup<IoTSecurityAggregatedRecommendationFormProperties>({
		});

	}


	/** IoT Security solution aggregated recommendation information */
	export interface IoTSecurityAggregatedRecommendationProperties {

		/** Description of the suspected vulnerability and meaning. */
		description?: string | null;

		/** Name of the organization that made the recommendation. */
		detectedBy?: string | null;

		/** Number of healthy devices within the IoT Security solution. */
		healthyDevices?: number | null;

		/** Log analytics query for getting the list of affected devices/alerts. */
		logAnalyticsQuery?: string | null;

		/** Display name of the recommendation type. */
		recommendationDisplayName?: string | null;

		/** Name of the recommendation. */
		recommendationName?: string | null;

		/** Recommendation-type GUID. */
		recommendationTypeId?: string | null;

		/** Recommended steps for remediation */
		remediationSteps?: string | null;

		/** Assessed recommendation severity. */
		reportedSeverity?: IoTSecurityAggregatedAlertPropertiesReportedSeverity | null;

		/** Number of unhealthy devices within the IoT Security solution. */
		unhealthyDeviceCount?: number | null;
	}

	/** IoT Security solution aggregated recommendation information */
	export interface IoTSecurityAggregatedRecommendationPropertiesFormProperties {

		/** Description of the suspected vulnerability and meaning. */
		description: FormControl<string | null | undefined>,

		/** Name of the organization that made the recommendation. */
		detectedBy: FormControl<string | null | undefined>,

		/** Number of healthy devices within the IoT Security solution. */
		healthyDevices: FormControl<number | null | undefined>,

		/** Log analytics query for getting the list of affected devices/alerts. */
		logAnalyticsQuery: FormControl<string | null | undefined>,

		/** Display name of the recommendation type. */
		recommendationDisplayName: FormControl<string | null | undefined>,

		/** Name of the recommendation. */
		recommendationName: FormControl<string | null | undefined>,

		/** Recommendation-type GUID. */
		recommendationTypeId: FormControl<string | null | undefined>,

		/** Recommended steps for remediation */
		remediationSteps: FormControl<string | null | undefined>,

		/** Assessed recommendation severity. */
		reportedSeverity: FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>,

		/** Number of unhealthy devices within the IoT Security solution. */
		unhealthyDeviceCount: FormControl<number | null | undefined>,
	}
	export function CreateIoTSecurityAggregatedRecommendationPropertiesFormGroup() {
		return new FormGroup<IoTSecurityAggregatedRecommendationPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			detectedBy: new FormControl<string | null | undefined>(undefined),
			healthyDevices: new FormControl<number | null | undefined>(undefined),
			logAnalyticsQuery: new FormControl<string | null | undefined>(undefined),
			recommendationDisplayName: new FormControl<string | null | undefined>(undefined),
			recommendationName: new FormControl<string | null | undefined>(undefined),
			recommendationTypeId: new FormControl<string | null | undefined>(undefined),
			remediationSteps: new FormControl<string | null | undefined>(undefined),
			reportedSeverity: new FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>(undefined),
			unhealthyDeviceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of IoT Security solution aggregated recommendations. */
	export interface IoTSecurityAggregatedRecommendationList {

		/** When there is too much alert data for one page, use this URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of aggregated recommendations data.
		 * Required
		 */
		value: Array<IoTSecurityAggregatedRecommendation>;
	}

	/** List of IoT Security solution aggregated recommendations. */
	export interface IoTSecurityAggregatedRecommendationListFormProperties {

		/** When there is too much alert data for one page, use this URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIoTSecurityAggregatedRecommendationListFormGroup() {
		return new FormGroup<IoTSecurityAggregatedRecommendationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistical information about the number of alerts per device during last set number of days. */
	export interface IoTSecurityAlertedDevice {

		/** Number of alerts raised for this device. */
		alertsCount?: number | null;

		/** Device identifier. */
		deviceId?: string | null;
	}

	/** Statistical information about the number of alerts per device during last set number of days. */
	export interface IoTSecurityAlertedDeviceFormProperties {

		/** Number of alerts raised for this device. */
		alertsCount: FormControl<number | null | undefined>,

		/** Device identifier. */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateIoTSecurityAlertedDeviceFormGroup() {
		return new FormGroup<IoTSecurityAlertedDeviceFormProperties>({
			alertsCount: new FormControl<number | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistical information about the number of alerts per alert type during last set number of days */
	export interface IoTSecurityDeviceAlert {

		/** Display name of the alert */
		alertDisplayName?: string | null;

		/** Number of alerts raised for this alert type. */
		alertsCount?: number | null;

		/** Assessed Alert severity. */
		reportedSeverity?: IoTSecurityAggregatedAlertPropertiesReportedSeverity | null;
	}

	/** Statistical information about the number of alerts per alert type during last set number of days */
	export interface IoTSecurityDeviceAlertFormProperties {

		/** Display name of the alert */
		alertDisplayName: FormControl<string | null | undefined>,

		/** Number of alerts raised for this alert type. */
		alertsCount: FormControl<number | null | undefined>,

		/** Assessed Alert severity. */
		reportedSeverity: FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>,
	}
	export function CreateIoTSecurityDeviceAlertFormGroup() {
		return new FormGroup<IoTSecurityDeviceAlertFormProperties>({
			alertDisplayName: new FormControl<string | null | undefined>(undefined),
			alertsCount: new FormControl<number | null | undefined>(undefined),
			reportedSeverity: new FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>(undefined),
		});

	}


	/** Statistical information about the number of recommendations per device, per recommendation type. */
	export interface IoTSecurityDeviceRecommendation {

		/** Number of devices with this recommendation. */
		devicesCount?: number | null;

		/** Display name of the recommendation. */
		recommendationDisplayName?: string | null;

		/** Assessed recommendation severity. */
		reportedSeverity?: IoTSecurityAggregatedAlertPropertiesReportedSeverity | null;
	}

	/** Statistical information about the number of recommendations per device, per recommendation type. */
	export interface IoTSecurityDeviceRecommendationFormProperties {

		/** Number of devices with this recommendation. */
		devicesCount: FormControl<number | null | undefined>,

		/** Display name of the recommendation. */
		recommendationDisplayName: FormControl<string | null | undefined>,

		/** Assessed recommendation severity. */
		reportedSeverity: FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>,
	}
	export function CreateIoTSecurityDeviceRecommendationFormGroup() {
		return new FormGroup<IoTSecurityDeviceRecommendationFormProperties>({
			devicesCount: new FormControl<number | null | undefined>(undefined),
			recommendationDisplayName: new FormControl<string | null | undefined>(undefined),
			reportedSeverity: new FormControl<IoTSecurityAggregatedAlertPropertiesReportedSeverity | null | undefined>(undefined),
		});

	}


	/** Security analytics of your IoT Security solution */
	export interface IoTSecuritySolutionAnalyticsModel {

		/** Security analytics properties of your IoT Security solution */
		properties?: IoTSecuritySolutionAnalyticsModelProperties;
	}

	/** Security analytics of your IoT Security solution */
	export interface IoTSecuritySolutionAnalyticsModelFormProperties {
	}
	export function CreateIoTSecuritySolutionAnalyticsModelFormGroup() {
		return new FormGroup<IoTSecuritySolutionAnalyticsModelFormProperties>({
		});

	}


	/** List of Security analytics of your IoT Security solution */
	export interface IoTSecuritySolutionAnalyticsModelList {

		/** When there is too much alert data for one page, use this URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of Security analytics of your IoT Security solution
		 * Required
		 */
		value: Array<IoTSecuritySolutionAnalyticsModel>;
	}

	/** List of Security analytics of your IoT Security solution */
	export interface IoTSecuritySolutionAnalyticsModelListFormProperties {

		/** When there is too much alert data for one page, use this URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIoTSecuritySolutionAnalyticsModelListFormGroup() {
		return new FormGroup<IoTSecuritySolutionAnalyticsModelListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security analytics properties of your IoT Security solution */
	export interface IoTSecuritySolutionAnalyticsModelProperties {

		/** List of device metrics by the aggregation date. */
		IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetrics?: Array<IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetrics>;

		/** IoT Security solution analytics severity metrics. */
		metrics?: IoTSeverityMetrics;

		/** List of alerts with the count of raised alerts */
		mostPrevalentDeviceAlerts?: Array<IoTSecurityDeviceAlert>;

		/** List of aggregated recommendation data, per recommendation type, per device. */
		mostPrevalentDeviceRecommendations?: Array<IoTSecurityDeviceRecommendation>;

		/** List of devices with open alerts including the count of alerts per device. */
		topAlertedDevices?: Array<IoTSecurityAlertedDevice>;

		/** Number of unhealthy devices within your IoT Security solution. */
		unhealthyDeviceCount?: number | null;
	}

	/** Security analytics properties of your IoT Security solution */
	export interface IoTSecuritySolutionAnalyticsModelPropertiesFormProperties {

		/** Number of unhealthy devices within your IoT Security solution. */
		unhealthyDeviceCount: FormControl<number | null | undefined>,
	}
	export function CreateIoTSecuritySolutionAnalyticsModelPropertiesFormGroup() {
		return new FormGroup<IoTSecuritySolutionAnalyticsModelPropertiesFormProperties>({
			unhealthyDeviceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetrics {

		/** Aggregation of IoT Security solution device alert metrics by date. */
		date?: Date | null;

		/** IoT Security solution analytics severity metrics. */
		devicesMetrics?: IoTSeverityMetrics;
	}
	export interface IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsFormProperties {

		/** Aggregation of IoT Security solution device alert metrics by date. */
		date: FormControl<Date | null | undefined>,
	}
	export function CreateIoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsFormGroup() {
		return new FormGroup<IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** IoT Security solution analytics severity metrics. */
	export interface IoTSeverityMetrics {

		/** Count of high severity alerts/recommendations. */
		high?: number | null;

		/** Count of low severity alerts/recommendations. */
		low?: number | null;

		/** Count of medium severity alerts/recommendations. */
		medium?: number | null;
	}

	/** IoT Security solution analytics severity metrics. */
	export interface IoTSeverityMetricsFormProperties {

		/** Count of high severity alerts/recommendations. */
		high: FormControl<number | null | undefined>,

		/** Count of low severity alerts/recommendations. */
		low: FormControl<number | null | undefined>,

		/** Count of medium severity alerts/recommendations. */
		medium: FormControl<number | null | undefined>,
	}
	export function CreateIoTSeverityMetricsFormGroup() {
		return new FormGroup<IoTSeverityMetricsFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A container holding only the Tags for a resource, allowing the user to update the tags. */
	export interface TagsResource {

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** A container holding only the Tags for a resource, allowing the user to update the tags. */
	export interface TagsResourceFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagsResourceFormGroup() {
		return new FormGroup<TagsResourceFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use this method to get IoT security Analytics metrics in an array.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} solutionName The name of the IoT Security solution.
		 * @return {IoTSecuritySolutionAnalyticsModelList} OK
		 */
		IotSecuritySolutionAnalytics_List(api_version: string, subscriptionId: string, resourceGroupName: string, solutionName: string): Observable<IoTSecuritySolutionAnalyticsModelList> {
			return this.http.get<IoTSecuritySolutionAnalyticsModelList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/iotSecuritySolutions/' + (solutionName == null ? '' : encodeURIComponent(solutionName)) + '/analyticsModels?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Use this method to get IoT Security Analytics metrics.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} solutionName The name of the IoT Security solution.
		 * @return {IoTSecuritySolutionAnalyticsModel} OK
		 */
		IotSecuritySolutionAnalytics_Get(api_version: string, subscriptionId: string, resourceGroupName: string, solutionName: string): Observable<IoTSecuritySolutionAnalyticsModel> {
			return this.http.get<IoTSecuritySolutionAnalyticsModel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/iotSecuritySolutions/' + (solutionName == null ? '' : encodeURIComponent(solutionName)) + '/analyticsModels/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Use this method to get the aggregated alert list of yours IoT Security solution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} solutionName The name of the IoT Security solution.
		 * @param {number} top Number of results to retrieve.
		 * @return {IoTSecurityAggregatedAlertList} OK
		 */
		IotSecuritySolutionsAnalyticsAggregatedAlert_List(api_version: string, subscriptionId: string, resourceGroupName: string, solutionName: string, top: number | null | undefined): Observable<IoTSecurityAggregatedAlertList> {
			return this.http.get<IoTSecurityAggregatedAlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/iotSecuritySolutions/' + (solutionName == null ? '' : encodeURIComponent(solutionName)) + '/analyticsModels/default/aggregatedAlerts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Use this method to get a single the aggregated alert of yours IoT Security solution. This aggregation is performed by alert name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} solutionName The name of the IoT Security solution.
		 * @param {string} aggregatedAlertName Identifier of the aggregated alert.
		 * @return {IoTSecurityAggregatedAlert} OK
		 */
		IotSecuritySolutionsAnalyticsAggregatedAlert_Get(api_version: string, subscriptionId: string, resourceGroupName: string, solutionName: string, aggregatedAlertName: string): Observable<IoTSecurityAggregatedAlert> {
			return this.http.get<IoTSecurityAggregatedAlert>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/iotSecuritySolutions/' + (solutionName == null ? '' : encodeURIComponent(solutionName)) + '/analyticsModels/default/aggregatedAlerts/' + (aggregatedAlertName == null ? '' : encodeURIComponent(aggregatedAlertName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Use this method to dismiss an aggregated IoT Security Solution Alert.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}/dismiss
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} solutionName The name of the IoT Security solution.
		 * @param {string} aggregatedAlertName Identifier of the aggregated alert.
		 * @return {void} This aggregate alert is permanently dismissed.
		 */
		IotSecuritySolutionsAnalyticsAggregatedAlert_Dismiss(api_version: string, subscriptionId: string, resourceGroupName: string, solutionName: string, aggregatedAlertName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/iotSecuritySolutions/' + (solutionName == null ? '' : encodeURIComponent(solutionName)) + '/analyticsModels/default/aggregatedAlerts/' + (aggregatedAlertName == null ? '' : encodeURIComponent(aggregatedAlertName)) + '/dismiss?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Use this method to get the list of aggregated security analytics recommendations of yours IoT Security solution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} solutionName The name of the IoT Security solution.
		 * @param {number} top Number of results to retrieve.
		 * @return {IoTSecurityAggregatedRecommendationList} OK
		 */
		IotSecuritySolutionsAnalyticsRecommendation_List(api_version: string, subscriptionId: string, resourceGroupName: string, solutionName: string, top: number | null | undefined): Observable<IoTSecurityAggregatedRecommendationList> {
			return this.http.get<IoTSecurityAggregatedRecommendationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/iotSecuritySolutions/' + (solutionName == null ? '' : encodeURIComponent(solutionName)) + '/analyticsModels/default/aggregatedRecommendations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Use this method to get the aggregated security analytics recommendation of yours IoT Security solution. This aggregation is performed by recommendation name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations/{aggregatedRecommendationName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} solutionName The name of the IoT Security solution.
		 * @param {string} aggregatedRecommendationName Name of the recommendation aggregated for this query.
		 * @return {IoTSecurityAggregatedRecommendation} OK
		 */
		IotSecuritySolutionsAnalyticsRecommendation_Get(api_version: string, subscriptionId: string, resourceGroupName: string, solutionName: string, aggregatedRecommendationName: string): Observable<IoTSecurityAggregatedRecommendation> {
			return this.http.get<IoTSecurityAggregatedRecommendation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/iotSecuritySolutions/' + (solutionName == null ? '' : encodeURIComponent(solutionName)) + '/analyticsModels/default/aggregatedRecommendations/' + (aggregatedRecommendationName == null ? '' : encodeURIComponent(aggregatedRecommendationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

