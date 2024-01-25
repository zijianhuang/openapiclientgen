import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Storage farm. */
	export interface Farm {

		/** The properties of storage farm. */
		properties?: FarmProperties;
	}

	/** Storage farm. */
	export interface FarmFormProperties {
	}
	export function CreateFarmFormGroup() {
		return new FormGroup<FarmFormProperties>({
		});

	}


	/** The properties of storage farm. */
	export interface FarmProperties {

		/** Farm identifier. */
		farmId?: string | null;

		/** Storage farm settings. */
		settings?: FarmSettings;

		/** The settings of storage farm. */
		settingsStore?: string | null;

		/** Resource version. */
		version?: string | null;
	}

	/** The properties of storage farm. */
	export interface FarmPropertiesFormProperties {

		/** Farm identifier. */
		farmId: FormControl<string | null | undefined>,

		/** The settings of storage farm. */
		settingsStore: FormControl<string | null | undefined>,

		/** Resource version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateFarmPropertiesFormGroup() {
		return new FormGroup<FarmPropertiesFormProperties>({
			farmId: new FormControl<string | null | undefined>(undefined),
			settingsStore: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Storage farm settings. */
	export interface FarmSettings {

		/** Switch of bandwidth throttle enablement. */
		bandwidthThrottleIsEnabled?: boolean | null;

		/** The list of allowed origins. */
		corsAllowedOriginsList?: string | null;

		/** The suffixes of URI of hosts in data center. */
		dataCenterUriHostSuffixes?: string | null;

		/** Default egress threshold (in Gbps). */
		defaultEgressThresholdInGbps?: number | null;

		/** Default ingress threshold (in Gbps). */
		defaultIngressThresholdInGbps?: number | null;

		/** Default Intranet egress threshold (in Gbps). */
		defaultIntranetEgressThresholdInGbps?: number | null;

		/** Default Intranet ingress threshold (in Gbps). */
		defaultIntranetIngressThresholdInGbps?: number | null;

		/** Default request threshold (in TPS). */
		defaultRequestThresholdInTps?: number | null;

		/** Interval (in seconds) of default throttle probability decay. */
		defaultThrottleProbabilityDecayIntervalInSeconds?: number | null;

		/** Default total egress threshold (in Gbps). */
		defaultTotalEgressThresholdInGbps?: number | null;

		/** Default total ingress threshold (in Gbps). */
		defaultTotalIngressThresholdInGbps?: number | null;

		/** Interval (in seconds) of feedback refresh. */
		feedbackRefreshIntervalInSeconds?: number | null;

		/** Grace period for full throttling in refresh intervals. */
		gracePeriodForFullThrottlingInRefreshIntervals?: number | null;

		/** Maximum probability of throttle in grace period. */
		gracePeriodMaxThrottleProbability?: number | null;

		/** Host style HTTP port. */
		hostStyleHttpPort?: number | null;

		/** Host style HTTPs port. */
		hostStyleHttpsPort?: number | null;

		/** Minimum egress threshold (in Gbps). */
		minimumEgressThresholdInGbps?: number | null;

		/** Minimum ingress threshold (in Gbps). */
		minimumIngressThresholdInGbps?: number | null;

		/** Minimum Intranet egress threshold (in Gbps). */
		minimumIntranetEgressThresholdInGbps?: number | null;

		/** Minimum Intranet ingress threshold (in Gbps). */
		minimumIntranetIngressThresholdInGbps?: number | null;

		/** Minimum request threshold (in TPS). */
		minimumRequestThresholdInTps?: number | null;

		/** Minimum total egress threshold (in Gbp */
		minimumTotalEgressThresholdInGbps?: number | null;

		/** Minimum total ingress threshold (in Gbps). */
		minimumTotalIngressThresholdInGbps?: number | null;

		/** Number of accounts to sync. */
		numberOfAccountsToSync?: number | null;

		/** Overall egress threshold (in Gbps). */
		overallEgressThresholdInGbps?: number | null;

		/** Overall ingress threshold (in Gbps) */
		overallIngressThresholdInGbps?: number | null;

		/** Overall Intranet egress threshold (in Gbps). */
		overallIntranetEgressThresholdInGbps?: number | null;

		/** Overall Intranet ingress threshold (in Gbps). */
		overallIntranetIngressThresholdInGbps?: number | null;

		/** Overall request threshold (in TPS). */
		overallRequestThresholdInTps?: number | null;

		/** Overall total egress threshold (in Gbps). */
		overallTotalEgressThresholdInGbps?: number | null;

		/** Overall total ingress threshold (in Gbps). */
		overallTotalIngressThresholdInGbps?: number | null;

		/** The retention period (in days) for deleted storage account. */
		retentionPeriodForDeletedStorageAccountsInDays?: number | null;

		/** The polling interval (in second). */
		settingsPollingIntervalInSecond?: number | null;

		/** Tolerance factor for egress. */
		toleranceFactorForEgress?: number | null;

		/** Tolerance factor for ingress. */
		toleranceFactorForIngress?: number | null;

		/** Tolerance factor for Intranet egress. */
		toleranceFactorForIntranetEgress?: number | null;

		/** Tolerance factor for Intranet ingress. */
		toleranceFactorForIntranetIngress?: number | null;

		/** Tolerance factor for total egress. */
		toleranceFactorForTotalEgress?: number | null;

		/** Tolerance factor for total ingress. */
		toleranceFactorForTotalIngress?: number | null;

		/** Tolerance factor for TPS. */
		toleranceFactorForTps?: number | null;

		/** Interval (in seconds) of storage usage collection. */
		usageCollectionIntervalInSeconds?: number | null;
	}

	/** Storage farm settings. */
	export interface FarmSettingsFormProperties {

		/** Switch of bandwidth throttle enablement. */
		bandwidthThrottleIsEnabled: FormControl<boolean | null | undefined>,

		/** The list of allowed origins. */
		corsAllowedOriginsList: FormControl<string | null | undefined>,

		/** The suffixes of URI of hosts in data center. */
		dataCenterUriHostSuffixes: FormControl<string | null | undefined>,

		/** Default egress threshold (in Gbps). */
		defaultEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Default ingress threshold (in Gbps). */
		defaultIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Default Intranet egress threshold (in Gbps). */
		defaultIntranetEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Default Intranet ingress threshold (in Gbps). */
		defaultIntranetIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Default request threshold (in TPS). */
		defaultRequestThresholdInTps: FormControl<number | null | undefined>,

		/** Interval (in seconds) of default throttle probability decay. */
		defaultThrottleProbabilityDecayIntervalInSeconds: FormControl<number | null | undefined>,

		/** Default total egress threshold (in Gbps). */
		defaultTotalEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Default total ingress threshold (in Gbps). */
		defaultTotalIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Interval (in seconds) of feedback refresh. */
		feedbackRefreshIntervalInSeconds: FormControl<number | null | undefined>,

		/** Grace period for full throttling in refresh intervals. */
		gracePeriodForFullThrottlingInRefreshIntervals: FormControl<number | null | undefined>,

		/** Maximum probability of throttle in grace period. */
		gracePeriodMaxThrottleProbability: FormControl<number | null | undefined>,

		/** Host style HTTP port. */
		hostStyleHttpPort: FormControl<number | null | undefined>,

		/** Host style HTTPs port. */
		hostStyleHttpsPort: FormControl<number | null | undefined>,

		/** Minimum egress threshold (in Gbps). */
		minimumEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Minimum ingress threshold (in Gbps). */
		minimumIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Minimum Intranet egress threshold (in Gbps). */
		minimumIntranetEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Minimum Intranet ingress threshold (in Gbps). */
		minimumIntranetIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Minimum request threshold (in TPS). */
		minimumRequestThresholdInTps: FormControl<number | null | undefined>,

		/** Minimum total egress threshold (in Gbp */
		minimumTotalEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Minimum total ingress threshold (in Gbps). */
		minimumTotalIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Number of accounts to sync. */
		numberOfAccountsToSync: FormControl<number | null | undefined>,

		/** Overall egress threshold (in Gbps). */
		overallEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Overall ingress threshold (in Gbps) */
		overallIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Overall Intranet egress threshold (in Gbps). */
		overallIntranetEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Overall Intranet ingress threshold (in Gbps). */
		overallIntranetIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** Overall request threshold (in TPS). */
		overallRequestThresholdInTps: FormControl<number | null | undefined>,

		/** Overall total egress threshold (in Gbps). */
		overallTotalEgressThresholdInGbps: FormControl<number | null | undefined>,

		/** Overall total ingress threshold (in Gbps). */
		overallTotalIngressThresholdInGbps: FormControl<number | null | undefined>,

		/** The retention period (in days) for deleted storage account. */
		retentionPeriodForDeletedStorageAccountsInDays: FormControl<number | null | undefined>,

		/** The polling interval (in second). */
		settingsPollingIntervalInSecond: FormControl<number | null | undefined>,

		/** Tolerance factor for egress. */
		toleranceFactorForEgress: FormControl<number | null | undefined>,

		/** Tolerance factor for ingress. */
		toleranceFactorForIngress: FormControl<number | null | undefined>,

		/** Tolerance factor for Intranet egress. */
		toleranceFactorForIntranetEgress: FormControl<number | null | undefined>,

		/** Tolerance factor for Intranet ingress. */
		toleranceFactorForIntranetIngress: FormControl<number | null | undefined>,

		/** Tolerance factor for total egress. */
		toleranceFactorForTotalEgress: FormControl<number | null | undefined>,

		/** Tolerance factor for total ingress. */
		toleranceFactorForTotalIngress: FormControl<number | null | undefined>,

		/** Tolerance factor for TPS. */
		toleranceFactorForTps: FormControl<number | null | undefined>,

		/** Interval (in seconds) of storage usage collection. */
		usageCollectionIntervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateFarmSettingsFormGroup() {
		return new FormGroup<FarmSettingsFormProperties>({
			bandwidthThrottleIsEnabled: new FormControl<boolean | null | undefined>(undefined),
			corsAllowedOriginsList: new FormControl<string | null | undefined>(undefined),
			dataCenterUriHostSuffixes: new FormControl<string | null | undefined>(undefined),
			defaultEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			defaultIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			defaultIntranetEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			defaultIntranetIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			defaultRequestThresholdInTps: new FormControl<number | null | undefined>(undefined),
			defaultThrottleProbabilityDecayIntervalInSeconds: new FormControl<number | null | undefined>(undefined),
			defaultTotalEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			defaultTotalIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			feedbackRefreshIntervalInSeconds: new FormControl<number | null | undefined>(undefined),
			gracePeriodForFullThrottlingInRefreshIntervals: new FormControl<number | null | undefined>(undefined),
			gracePeriodMaxThrottleProbability: new FormControl<number | null | undefined>(undefined),
			hostStyleHttpPort: new FormControl<number | null | undefined>(undefined),
			hostStyleHttpsPort: new FormControl<number | null | undefined>(undefined),
			minimumEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			minimumIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			minimumIntranetEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			minimumIntranetIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			minimumRequestThresholdInTps: new FormControl<number | null | undefined>(undefined),
			minimumTotalEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			minimumTotalIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			numberOfAccountsToSync: new FormControl<number | null | undefined>(undefined),
			overallEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			overallIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			overallIntranetEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			overallIntranetIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			overallRequestThresholdInTps: new FormControl<number | null | undefined>(undefined),
			overallTotalEgressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			overallTotalIngressThresholdInGbps: new FormControl<number | null | undefined>(undefined),
			retentionPeriodForDeletedStorageAccountsInDays: new FormControl<number | null | undefined>(undefined),
			settingsPollingIntervalInSecond: new FormControl<number | null | undefined>(undefined),
			toleranceFactorForEgress: new FormControl<number | null | undefined>(undefined),
			toleranceFactorForIngress: new FormControl<number | null | undefined>(undefined),
			toleranceFactorForIntranetEgress: new FormControl<number | null | undefined>(undefined),
			toleranceFactorForIntranetIngress: new FormControl<number | null | undefined>(undefined),
			toleranceFactorForTotalEgress: new FormControl<number | null | undefined>(undefined),
			toleranceFactorForTotalIngress: new FormControl<number | null | undefined>(undefined),
			toleranceFactorForTps: new FormControl<number | null | undefined>(undefined),
			usageCollectionIntervalInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Storage farm properties. */
	export interface FarmCreationProperties {

		/** Setting access string. */
		properties?: SettingAccessString;
	}

	/** Storage farm properties. */
	export interface FarmCreationPropertiesFormProperties {
	}
	export function CreateFarmCreationPropertiesFormGroup() {
		return new FormGroup<FarmCreationPropertiesFormProperties>({
		});

	}


	/** Setting access string. */
	export interface SettingAccessString {

		/** Setting access string. */
		settingAccessString?: string | null;
	}

	/** Setting access string. */
	export interface SettingAccessStringFormProperties {

		/** Setting access string. */
		settingAccessString: FormControl<string | null | undefined>,
	}
	export function CreateSettingAccessStringFormGroup() {
		return new FormGroup<SettingAccessStringFormProperties>({
			settingAccessString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of storage farms. */
	export interface FarmList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of storage farms. */
		value?: Array<Farm>;
	}

	/** Pageable list of storage farms. */
	export interface FarmListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFarmListFormGroup() {
		return new FormGroup<FarmListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all storage farms.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} api_version REST Api Version.
		 * @return {FarmList} OK -- The list of storage farms has been returned.
		 */
		Farms_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<FarmList> {
			return this.http.get<FarmList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the Storage properties and settings for a specified storage farm.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} api_version REST Api Version.
		 * @return {Farm} OK -- The farm has been returned.
		 */
		Farms_Get(subscriptionId: string, resourceGroupName: string, farmId: string, api_version: string): Observable<Farm> {
			return this.http.get<Farm>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new storage farm.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} api_version REST Api Version.
		 * @param {FarmCreationProperties} requestBody Parameters used to create a farm
		 * @return {Farm} OK -- The new storage farm has been created.
		 */
		Farms_Create(subscriptionId: string, resourceGroupName: string, farmId: string, api_version: string, requestBody: FarmCreationProperties): Observable<Farm> {
			return this.http.put<Farm>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an existing storage farm.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} api_version REST Api Version.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {Farm} requestBody Farm to update.
		 * @return {Farm} OK -- The properties and settings of storage farm have been updated.
		 */
		Farms_Update(subscriptionId: string, api_version: string, resourceGroupName: string, farmId: string, requestBody: Farm): Observable<Farm> {
			return this.http.patch<Farm>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of metric definitions for a storage farm.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/metricdefinitions
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} api_version REST Api Version.
		 * @return {Farms_ListMetricDefinitionsReturn} OK -- The list of metric definitions has been returned.
		 */
		Farms_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, farmId: string, api_version: string): Observable<Farms_ListMetricDefinitionsReturn> {
			return this.http.get<Farms_ListMetricDefinitionsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of storage farm metrics.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/metrics
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} api_version REST Api Version.
		 * @return {Farms_ListMetricsReturn} OK -- The list of metrics has been returned.
		 */
		Farms_ListMetrics(subscriptionId: string, resourceGroupName: string, farmId: string, api_version: string): Observable<Farms_ListMetricsReturn> {
			return this.http.get<Farms_ListMetricsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Start garbage collection on deleted storage objects.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/ondemandgc
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} api_version REST Api Version.
		 * @return {void} OK -- Garbage collection has completed.
		 */
		Farms_StartGarbageCollection(subscriptionId: string, resourceGroupName: string, farmId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/ondemandgc&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the state of the garbage collection job.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/operationresults/{operationId}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} api_version REST Api Version.
		 * @param {string} operationId Operation Id.
		 * @return {string} OK -- The state of garbage collection has been returned.
		 */
		Farms_GetGarbageCollectionState(subscriptionId: string, resourceGroupName: string, farmId: string, api_version: string, operationId: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/operationresults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}
	}

	export interface Farms_ListMetricDefinitionsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metric definitions. */
		Farms_ListMetricDefinitionsReturnValue?: Array<Farms_ListMetricDefinitionsReturnValue>;
	}
	export interface Farms_ListMetricDefinitionsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFarms_ListMetricDefinitionsReturnFormGroup() {
		return new FormGroup<Farms_ListMetricDefinitionsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Farms_ListMetricDefinitionsReturnValue {

		/** Metric availabilities. */
		Farms_ListMetricDefinitionsReturnValueMetricAvailabilities?: Array<Farms_ListMetricDefinitionsReturnValueMetricAvailabilities>;

		/** Localizable string. */
		name?: Farms_ListMetricDefinitionsReturnValueName;

		/** Aggregate type. */
		primaryAggregationType?: Farms_ListMetricDefinitionsReturnValuePrimaryAggregationType | null;

		/** Metric unit. */
		unit?: Farms_ListMetricDefinitionsReturnValueUnit | null;
	}
	export interface Farms_ListMetricDefinitionsReturnValueFormProperties {

		/** Aggregate type. */
		primaryAggregationType: FormControl<Farms_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>,

		/** Metric unit. */
		unit: FormControl<Farms_ListMetricDefinitionsReturnValueUnit | null | undefined>,
	}
	export function CreateFarms_ListMetricDefinitionsReturnValueFormGroup() {
		return new FormGroup<Farms_ListMetricDefinitionsReturnValueFormProperties>({
			primaryAggregationType: new FormControl<Farms_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>(undefined),
			unit: new FormControl<Farms_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
		});

	}

	export interface Farms_ListMetricDefinitionsReturnValueMetricAvailabilities {

		/** Retention of metric. */
		retention?: string | null;

		/** Time grain. */
		timeGrain?: string | null;
	}
	export interface Farms_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties {

		/** Retention of metric. */
		retention: FormControl<string | null | undefined>,

		/** Time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateFarms_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormGroup() {
		return new FormGroup<Farms_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Farms_ListMetricDefinitionsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface Farms_ListMetricDefinitionsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFarms_ListMetricDefinitionsReturnValueNameFormGroup() {
		return new FormGroup<Farms_ListMetricDefinitionsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Farms_ListMetricDefinitionsReturnValuePrimaryAggregationType { None = 0, Average = 1, Total = 2, Minimum = 3, Maximum = 4, Last = 5 }

	export enum Farms_ListMetricDefinitionsReturnValueUnit { Count = 0, Bytes = 1, Seconds = 2, CountPerSecond = 3, BytesPerSecond = 4 }

	export interface Farms_ListMetricsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metrics. */
		Farms_ListMetricsReturnValue?: Array<Farms_ListMetricsReturnValue>;
	}
	export interface Farms_ListMetricsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFarms_ListMetricsReturnFormGroup() {
		return new FormGroup<Farms_ListMetricsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Farms_ListMetricsReturnValue {

		/** Metric end time. */
		endTime?: Date | null;

		/** Metric unit. */
		metricUnit?: Farms_ListMetricDefinitionsReturnValueUnit | null;

		/** List of metric values. */
		Farms_ListMetricsReturnValueMetricValues?: Array<Farms_ListMetricsReturnValueMetricValues>;

		/** Localizable string. */
		name?: Farms_ListMetricsReturnValueName;

		/** Metric start time. */
		startTime?: Date | null;

		/** Metric time grain. */
		timeGrain?: string | null;
	}
	export interface Farms_ListMetricsReturnValueFormProperties {

		/** Metric end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Metric unit. */
		metricUnit: FormControl<Farms_ListMetricDefinitionsReturnValueUnit | null | undefined>,

		/** Metric start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Metric time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateFarms_ListMetricsReturnValueFormGroup() {
		return new FormGroup<Farms_ListMetricsReturnValueFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			metricUnit: new FormControl<Farms_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Farms_ListMetricsReturnValueMetricValues {

		/** Average value of metric. */
		average?: number | null;

		/** Count of metric values. */
		count?: number | null;

		/** Maximum value of metric. */
		maximum?: number | null;

		/** Minimum value of metric. */
		minimum?: number | null;

		/** Metric value properties. */
		properties?: string | null;

		/** Timestamp of metric value. */
		timeStamp?: Date | null;

		/** Total value of metric. */
		total?: number | null;
	}
	export interface Farms_ListMetricsReturnValueMetricValuesFormProperties {

		/** Average value of metric. */
		average: FormControl<number | null | undefined>,

		/** Count of metric values. */
		count: FormControl<number | null | undefined>,

		/** Maximum value of metric. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum value of metric. */
		minimum: FormControl<number | null | undefined>,

		/** Metric value properties. */
		properties: FormControl<string | null | undefined>,

		/** Timestamp of metric value. */
		timeStamp: FormControl<Date | null | undefined>,

		/** Total value of metric. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateFarms_ListMetricsReturnValueMetricValuesFormGroup() {
		return new FormGroup<Farms_ListMetricsReturnValueMetricValuesFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Farms_ListMetricsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface Farms_ListMetricsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFarms_ListMetricsReturnValueNameFormGroup() {
		return new FormGroup<Farms_ListMetricsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

