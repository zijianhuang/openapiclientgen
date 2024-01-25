import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines the endpoint properties */
	export interface Endpoint {

		/** The endpoint URL */
		endpoint?: string | null;

		/** The name of the endpoint */
		name?: string | null;
	}

	/** Defines the endpoint properties */
	export interface EndpointFormProperties {

		/** The endpoint URL */
		endpoint: FormControl<string | null | undefined>,

		/** The name of the endpoint */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response indicates Front Door service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error response indicates Front Door service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Experiment {
	}
	export interface ExperimentFormProperties {
	}
	export function CreateExperimentFormGroup() {
		return new FormGroup<ExperimentFormProperties>({
		});

	}


	/** Defines a list of Experiments. It contains a list of Experiment objects and a URL link to get the next set of results. */
	export interface ExperimentList {

		/** URL to get the next set of Experiment objects if there are any. */
		nextLink?: string | null;

		/** List of Experiments within a resource group. */
		value?: Array<Experiment>;
	}

	/** Defines a list of Experiments. It contains a list of Experiment objects and a URL link to get the next set of results. */
	export interface ExperimentListFormProperties {

		/** URL to get the next set of Experiment objects if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExperimentListFormGroup() {
		return new FormGroup<ExperimentListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the properties of an experiment */
	export interface ExperimentProperties {

		/** The description of the details or intents of the Experiment */
		description?: string | null;

		/** The state of the Experiment */
		enabledState?: ExperimentPropertiesEnabledState | null;

		/** Defines the endpoint properties */
		endpointA?: Endpoint;

		/** Defines the endpoint properties */
		endpointB?: Endpoint;

		/** Defines the server side resource status */
		resourceState?: ExperimentPropertiesResourceState | null;

		/** The uri to the Script used in the Experiment */
		scriptFileUri?: string | null;

		/** The description of Experiment status from the server side */
		status?: string | null;
	}

	/** Defines the properties of an experiment */
	export interface ExperimentPropertiesFormProperties {

		/** The description of the details or intents of the Experiment */
		description: FormControl<string | null | undefined>,

		/** The state of the Experiment */
		enabledState: FormControl<ExperimentPropertiesEnabledState | null | undefined>,

		/** Defines the server side resource status */
		resourceState: FormControl<ExperimentPropertiesResourceState | null | undefined>,

		/** The uri to the Script used in the Experiment */
		scriptFileUri: FormControl<string | null | undefined>,

		/** The description of Experiment status from the server side */
		status: FormControl<string | null | undefined>,
	}
	export function CreateExperimentPropertiesFormGroup() {
		return new FormGroup<ExperimentPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enabledState: new FormControl<ExperimentPropertiesEnabledState | null | undefined>(undefined),
			resourceState: new FormControl<ExperimentPropertiesResourceState | null | undefined>(undefined),
			scriptFileUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExperimentPropertiesEnabledState { Enabled = 0, Disabled = 1 }

	export enum ExperimentPropertiesResourceState { Creating = 0, Enabling = 1, Enabled = 2, Disabling = 3, Disabled = 4, Deleting = 5 }


	/** Defines modifiable attributes of an Experiment */
	export interface ExperimentUpdateModel {

		/** Defines the properties of an experiment */
		properties?: ExperimentUpdateProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Defines modifiable attributes of an Experiment */
	export interface ExperimentUpdateModelFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateExperimentUpdateModelFormGroup() {
		return new FormGroup<ExperimentUpdateModelFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Defines the properties of an experiment */
	export interface ExperimentUpdateProperties {

		/** The description of the intent or details of the Experiment */
		description?: string | null;

		/** The state of the Experiment */
		enabledState?: ExperimentPropertiesEnabledState | null;
	}

	/** Defines the properties of an experiment */
	export interface ExperimentUpdatePropertiesFormProperties {

		/** The description of the intent or details of the Experiment */
		description: FormControl<string | null | undefined>,

		/** The state of the Experiment */
		enabledState: FormControl<ExperimentPropertiesEnabledState | null | undefined>,
	}
	export function CreateExperimentUpdatePropertiesFormGroup() {
		return new FormGroup<ExperimentUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enabledState: new FormControl<ExperimentPropertiesEnabledState | null | undefined>(undefined),
		});

	}


	/** Defines the properties of a latency metric used in the latency scorecard */
	export interface LatencyMetric {

		/** The lower end of the 95% confidence interval for endpoint A */
		aCLower95CI?: number | null;

		/** The upper end of the 95% confidence interval for endpoint A */
		aHUpper95CI?: number | null;

		/** The metric value of the A endpoint */
		aValue?: number | null;

		/** The lower end of the 95% confidence interval for endpoint B */
		bCLower95CI?: number | null;

		/** The upper end of the 95% confidence interval for endpoint B */
		bUpper95CI?: number | null;

		/** The metric value of the B endpoint */
		bValue?: number | null;

		/** The difference in value between endpoint A and B */
		delta?: number | null;

		/** The percent difference between endpoint A and B */
		deltaPercent?: number | null;

		/** The end time of the Latency Scorecard in UTC */
		endDateTimeUTC?: string | null;

		/** The name of the Latency Metric */
		name?: string | null;
	}

	/** Defines the properties of a latency metric used in the latency scorecard */
	export interface LatencyMetricFormProperties {

		/** The lower end of the 95% confidence interval for endpoint A */
		aCLower95CI: FormControl<number | null | undefined>,

		/** The upper end of the 95% confidence interval for endpoint A */
		aHUpper95CI: FormControl<number | null | undefined>,

		/** The metric value of the A endpoint */
		aValue: FormControl<number | null | undefined>,

		/** The lower end of the 95% confidence interval for endpoint B */
		bCLower95CI: FormControl<number | null | undefined>,

		/** The upper end of the 95% confidence interval for endpoint B */
		bUpper95CI: FormControl<number | null | undefined>,

		/** The metric value of the B endpoint */
		bValue: FormControl<number | null | undefined>,

		/** The difference in value between endpoint A and B */
		delta: FormControl<number | null | undefined>,

		/** The percent difference between endpoint A and B */
		deltaPercent: FormControl<number | null | undefined>,

		/** The end time of the Latency Scorecard in UTC */
		endDateTimeUTC: FormControl<string | null | undefined>,

		/** The name of the Latency Metric */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLatencyMetricFormGroup() {
		return new FormGroup<LatencyMetricFormProperties>({
			aCLower95CI: new FormControl<number | null | undefined>(undefined),
			aHUpper95CI: new FormControl<number | null | undefined>(undefined),
			aValue: new FormControl<number | null | undefined>(undefined),
			bCLower95CI: new FormControl<number | null | undefined>(undefined),
			bUpper95CI: new FormControl<number | null | undefined>(undefined),
			bValue: new FormControl<number | null | undefined>(undefined),
			delta: new FormControl<number | null | undefined>(undefined),
			deltaPercent: new FormControl<number | null | undefined>(undefined),
			endDateTimeUTC: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LatencyScorecard {
	}
	export interface LatencyScorecardFormProperties {
	}
	export function CreateLatencyScorecardFormGroup() {
		return new FormGroup<LatencyScorecardFormProperties>({
		});

	}


	/** Defines a the properties of a Latency Scorecard */
	export interface LatencyScorecardProperties {

		/** The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html */
		country?: string | null;

		/** The description of the Latency Scorecard */
		description?: string | null;

		/** The end time of the Latency Scorecard in UTC */
		endDateTimeUTC?: Date | null;

		/** The A endpoint in the scorecard */
		endpointA?: string | null;

		/** The B endpoint in the scorecard */
		endpointB?: string | null;

		/** The unique identifier of the Latency Scorecard */
		id?: string | null;

		/** The latency metrics of the Latency Scorecard */
		latencyMetrics?: Array<LatencyMetric>;

		/** The name of the Latency Scorecard */
		name?: string | null;

		/** The start time of the Latency Scorecard in UTC */
		startDateTimeUTC?: Date | null;
	}

	/** Defines a the properties of a Latency Scorecard */
	export interface LatencyScorecardPropertiesFormProperties {

		/** The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html */
		country: FormControl<string | null | undefined>,

		/** The description of the Latency Scorecard */
		description: FormControl<string | null | undefined>,

		/** The end time of the Latency Scorecard in UTC */
		endDateTimeUTC: FormControl<Date | null | undefined>,

		/** The A endpoint in the scorecard */
		endpointA: FormControl<string | null | undefined>,

		/** The B endpoint in the scorecard */
		endpointB: FormControl<string | null | undefined>,

		/** The unique identifier of the Latency Scorecard */
		id: FormControl<string | null | undefined>,

		/** The name of the Latency Scorecard */
		name: FormControl<string | null | undefined>,

		/** The start time of the Latency Scorecard in UTC */
		startDateTimeUTC: FormControl<Date | null | undefined>,
	}
	export function CreateLatencyScorecardPropertiesFormGroup() {
		return new FormGroup<LatencyScorecardPropertiesFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			endpointA: new FormControl<string | null | undefined>(undefined),
			endpointB: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDateTimeUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Defines the server side resource status */
	export enum NetworkExperimentResourceState { Creating = 0, Enabling = 1, Enabled = 2, Disabling = 3, Disabled = 4, Deleting = 5 }

	export interface PreconfiguredEndpoint {
	}
	export interface PreconfiguredEndpointFormProperties {
	}
	export function CreatePreconfiguredEndpointFormGroup() {
		return new FormGroup<PreconfiguredEndpointFormProperties>({
		});

	}


	/** Defines a list of preconfigured endpoints. */
	export interface PreconfiguredEndpointList {

		/** URL to get the next set of PreconfiguredEndpoints if there are any. */
		nextLink?: string | null;

		/** List of PreconfiguredEndpoints supported by NetworkExperiment. */
		value?: Array<PreconfiguredEndpoint>;
	}

	/** Defines a list of preconfigured endpoints. */
	export interface PreconfiguredEndpointListFormProperties {

		/** URL to get the next set of PreconfiguredEndpoints if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePreconfiguredEndpointListFormGroup() {
		return new FormGroup<PreconfiguredEndpointListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the properties of a preconfigured endpoint */
	export interface PreconfiguredEndpointProperties {

		/** The preconfigured endpoint backend */
		backend?: string | null;

		/** The description of the endpoint */
		description?: string | null;

		/** The endpoint that is preconfigured */
		endpoint?: string | null;

		/** The type of endpoint */
		endpointType?: PreconfiguredEndpointPropertiesEndpointType | null;
	}

	/** Defines the properties of a preconfigured endpoint */
	export interface PreconfiguredEndpointPropertiesFormProperties {

		/** The preconfigured endpoint backend */
		backend: FormControl<string | null | undefined>,

		/** The description of the endpoint */
		description: FormControl<string | null | undefined>,

		/** The endpoint that is preconfigured */
		endpoint: FormControl<string | null | undefined>,

		/** The type of endpoint */
		endpointType: FormControl<PreconfiguredEndpointPropertiesEndpointType | null | undefined>,
	}
	export function CreatePreconfiguredEndpointPropertiesFormGroup() {
		return new FormGroup<PreconfiguredEndpointPropertiesFormProperties>({
			backend: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			endpointType: new FormControl<PreconfiguredEndpointPropertiesEndpointType | null | undefined>(undefined),
		});

	}

	export enum PreconfiguredEndpointPropertiesEndpointType { AFD = 0, AzureRegion = 1, CDN = 2, ATM = 3 }

	export interface Profile {
	}
	export interface ProfileFormProperties {
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
		});

	}


	/** Defines a list of Profiles. It contains a list of Profile objects and a URL link to get the next set of results. */
	export interface ProfileList {

		/** URL to get the next set of Profile objects if there are any. */
		nextLink?: string | null;

		/** List of Profiles within a resource group. */
		value?: Array<Profile>;
	}

	/** Defines a list of Profiles. It contains a list of Profile objects and a URL link to get the next set of results. */
	export interface ProfileListFormProperties {

		/** URL to get the next set of Profile objects if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProfileListFormGroup() {
		return new FormGroup<ProfileListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the properties of an experiment */
	export interface ProfileProperties {

		/** The state of the Experiment */
		enabledState?: ExperimentPropertiesEnabledState | null;

		/** Defines the server side resource status */
		resourceState?: ExperimentPropertiesResourceState | null;
	}

	/** Defines the properties of an experiment */
	export interface ProfilePropertiesFormProperties {

		/** The state of the Experiment */
		enabledState: FormControl<ExperimentPropertiesEnabledState | null | undefined>,

		/** Defines the server side resource status */
		resourceState: FormControl<ExperimentPropertiesResourceState | null | undefined>,
	}
	export function CreateProfilePropertiesFormGroup() {
		return new FormGroup<ProfilePropertiesFormProperties>({
			enabledState: new FormControl<ExperimentPropertiesEnabledState | null | undefined>(undefined),
			resourceState: new FormControl<ExperimentPropertiesResourceState | null | undefined>(undefined),
		});

	}


	/** Defines modifiable attributes of a Profile */
	export interface ProfileUpdateModel {

		/** Defines the properties of an experiment */
		properties?: ProfileUpdateProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Defines modifiable attributes of a Profile */
	export interface ProfileUpdateModelFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateProfileUpdateModelFormGroup() {
		return new FormGroup<ProfileUpdateModelFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Defines the properties of an experiment */
	export interface ProfileUpdateProperties {

		/** The enabled state of the Profile */
		enabledState?: ExperimentPropertiesEnabledState | null;
	}

	/** Defines the properties of an experiment */
	export interface ProfileUpdatePropertiesFormProperties {

		/** The enabled state of the Profile */
		enabledState: FormControl<ExperimentPropertiesEnabledState | null | undefined>,
	}
	export function CreateProfileUpdatePropertiesFormGroup() {
		return new FormGroup<ProfileUpdatePropertiesFormProperties>({
			enabledState: new FormControl<ExperimentPropertiesEnabledState | null | undefined>(undefined),
		});

	}

	export interface Timeseries {
	}
	export interface TimeseriesFormProperties {
	}
	export function CreateTimeseriesFormGroup() {
		return new FormGroup<TimeseriesFormProperties>({
		});

	}


	/** Defines a timeseries datapoint used in a timeseries */
	export interface TimeseriesDataPoint {

		/** The DateTime of the Timeseries data point in UTC */
		dateTimeUTC?: string | null;

		/** The Value of the Timeseries data point */
		value?: number | null;
	}

	/** Defines a timeseries datapoint used in a timeseries */
	export interface TimeseriesDataPointFormProperties {

		/** The DateTime of the Timeseries data point in UTC */
		dateTimeUTC: FormControl<string | null | undefined>,

		/** The Value of the Timeseries data point */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTimeseriesDataPointFormGroup() {
		return new FormGroup<TimeseriesDataPointFormProperties>({
			dateTimeUTC: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines the properties of a timeseries */
	export interface TimeseriesProperties {

		/** The aggregation interval of the Timeseries */
		aggregationInterval?: TimeseriesPropertiesAggregationInterval | null;

		/** The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html */
		country?: string | null;

		/** The end DateTime of the Timeseries in UTC */
		endDateTimeUTC?: string | null;

		/** The endpoint associated with the Timeseries data point */
		endpoint?: string | null;

		/** The start DateTime of the Timeseries in UTC */
		startDateTimeUTC?: string | null;

		/** The set of data points for the timeseries */
		timeseriesData?: Array<TimeseriesDataPoint>;

		/** The type of Timeseries */
		timeseriesType?: TimeseriesPropertiesTimeseriesType | null;
	}

	/** Defines the properties of a timeseries */
	export interface TimeseriesPropertiesFormProperties {

		/** The aggregation interval of the Timeseries */
		aggregationInterval: FormControl<TimeseriesPropertiesAggregationInterval | null | undefined>,

		/** The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html */
		country: FormControl<string | null | undefined>,

		/** The end DateTime of the Timeseries in UTC */
		endDateTimeUTC: FormControl<string | null | undefined>,

		/** The endpoint associated with the Timeseries data point */
		endpoint: FormControl<string | null | undefined>,

		/** The start DateTime of the Timeseries in UTC */
		startDateTimeUTC: FormControl<string | null | undefined>,

		/** The type of Timeseries */
		timeseriesType: FormControl<TimeseriesPropertiesTimeseriesType | null | undefined>,
	}
	export function CreateTimeseriesPropertiesFormGroup() {
		return new FormGroup<TimeseriesPropertiesFormProperties>({
			aggregationInterval: new FormControl<TimeseriesPropertiesAggregationInterval | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			endDateTimeUTC: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			startDateTimeUTC: new FormControl<string | null | undefined>(undefined),
			timeseriesType: new FormControl<TimeseriesPropertiesTimeseriesType | null | undefined>(undefined),
		});

	}

	export enum TimeseriesPropertiesAggregationInterval { Hourly = 0, Daily = 1 }

	export enum TimeseriesPropertiesTimeseriesType { MeasurementCounts = 0, LatencyP50 = 1, LatencyP75 = 2, LatencyP95 = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of Network Experiment Profiles under a subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/NetworkExperimentProfiles
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {ProfileList} successful operation
		 */
		NetworkExperimentProfiles_List(subscriptionId: string, api_version: string): Observable<ProfileList> {
			return this.http.get<ProfileList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/NetworkExperimentProfiles&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of Network Experiment Profiles within a resource group under a subscription
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @return {ProfileList} successful operation
		 */
		NetworkExperimentProfiles_ListByResourceGroup(subscriptionId: string, api_version: string, resourceGroupName: string): Observable<ProfileList> {
			return this.http.get<ProfileList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an NetworkExperiment Profile by ProfileName
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @return {Profile} successful operation
		 */
		NetworkExperimentProfiles_Get(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string): Observable<Profile> {
			return this.http.get<Profile>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an NetworkExperiment Profile
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {Profile} requestBody An Network Experiment Profile
		 * @return {Profile} OK. The request has succeeded.
		 */
		NetworkExperimentProfiles_CreateOrUpdate(profileName: string, subscriptionId: string, api_version: string, resourceGroupName: string, requestBody: Profile): Observable<Profile> {
			return this.http.put<Profile>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an NetworkExperiment Profile by ProfileName
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @return {void} Delete successful.
		 */
		NetworkExperimentProfiles_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an NetworkExperimentProfiles by NetworkExperimentProfile name
		 * Updates an NetworkExperimentProfiles
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {ProfileUpdateModel} requestBody The Profile Update Model
		 * @return {Profile} OK. successful operation
		 */
		NetworkExperimentProfiles_Update(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string, requestBody: ProfileUpdateModel): Observable<Profile> {
			return this.http.patch<Profile>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of Experiments
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @return {ExperimentList} successful operation
		 */
		Experiments_ListByProfile(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string): Observable<ExperimentList> {
			return this.http.get<ExperimentList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/Experiments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an Experiment by ExperimentName
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {string} experimentName The Experiment identifier associated with the Experiment
		 * @return {Experiment} successful operation
		 */
		Experiments_Get(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string, experimentName: string): Observable<Experiment> {
			return this.http.get<Experiment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/Experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an Experiment
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {string} experimentName The Experiment identifier associated with the Experiment
		 * @param {Experiment} requestBody The Experiment resource
		 * @return {Experiment} OK. The request has succeeded.
		 */
		Experiments_CreateOrUpdate(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string, experimentName: string, requestBody: Experiment): Observable<Experiment> {
			return this.http.put<Experiment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/Experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Experiment
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {string} experimentName The Experiment identifier associated with the Experiment
		 * @return {void} Delete successful.
		 */
		Experiments_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string, experimentName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/Experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an Experiment by Experiment id
		 * Updates an Experiment
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {string} experimentName The Experiment identifier associated with the Experiment
		 * @param {ExperimentUpdateModel} requestBody The Experiment Update Model
		 * @return {Experiment} OK. successful operation
		 */
		Experiments_Update(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string, experimentName: string, requestBody: ExperimentUpdateModel): Observable<Experiment> {
			return this.http.patch<Experiment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/Experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a Latency Scorecard for a given Experiment
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}/LatencyScorecard
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {string} experimentName The Experiment identifier associated with the Experiment
		 * @param {string} endDateTimeUTC The end DateTime of the Latency Scorecard in UTC
		 * @param {string} country The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html
		 * @param {Reports_GetLatencyScorecardsAggregationInterval} aggregationInterval The aggregation interval of the Latency Scorecard
		 * @return {LatencyScorecard} successful operation
		 */
		Reports_GetLatencyScorecards(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string, experimentName: string, endDateTimeUTC: string | null | undefined, country: string | null | undefined, aggregationInterval: Reports_GetLatencyScorecardsAggregationInterval): Observable<LatencyScorecard> {
			return this.http.get<LatencyScorecard>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/Experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/LatencyScorecard&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&endDateTimeUTC=' + (endDateTimeUTC == null ? '' : encodeURIComponent(endDateTimeUTC)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&aggregationInterval=' + aggregationInterval, {});
		}

		/**
		 * Gets a Timeseries for a given Experiment
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}/Timeseries
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @param {string} experimentName The Experiment identifier associated with the Experiment
		 * @param {Date} startDateTimeUTC The start DateTime of the Timeseries in UTC
		 * @param {Date} endDateTimeUTC The end DateTime of the Timeseries in UTC
		 * @param {TimeseriesPropertiesAggregationInterval} aggregationInterval The aggregation interval of the Timeseries
		 * @param {TimeseriesPropertiesTimeseriesType} timeseriesType The type of Timeseries
		 * @param {string} endpoint The specific endpoint
		 * @param {string} country The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html
		 * @return {Timeseries} successful operation
		 */
		Reports_GetTimeseries(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string, experimentName: string, startDateTimeUTC: Date, endDateTimeUTC: Date, aggregationInterval: TimeseriesPropertiesAggregationInterval, timeseriesType: TimeseriesPropertiesTimeseriesType, endpoint: string | null | undefined, country: string | null | undefined): Observable<Timeseries> {
			return this.http.get<Timeseries>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/Experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/Timeseries&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&startDateTimeUTC=' + startDateTimeUTC.toISOString() + '&endDateTimeUTC=' + endDateTimeUTC.toISOString() + '&aggregationInterval=' + aggregationInterval + '&timeseriesType=' + timeseriesType + '&endpoint=' + (endpoint == null ? '' : encodeURIComponent(endpoint)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * Gets a list of Preconfigured Endpoints
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/PreconfiguredEndpoints
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} profileName The Profile identifier associated with the Tenant and Partner
		 * @return {PreconfiguredEndpointList} OK. The request has succeeded.
		 */
		PreconfiguredEndpoints_List(subscriptionId: string, api_version: string, resourceGroupName: string, profileName: string): Observable<PreconfiguredEndpointList> {
			return this.http.get<PreconfiguredEndpointList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/NetworkExperimentProfiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/PreconfiguredEndpoints&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum Reports_GetLatencyScorecardsAggregationInterval { Daily = 0, Weekly = 1, Monthly = 2 }

}

