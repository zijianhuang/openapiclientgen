import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Data source object contains configuration to collect telemetry and one or more sinks to send that telemetry data to */
	export interface DataSource {

		/** Required */
		configuration: DataSourceConfiguration;

		/**
		 * Datasource kind
		 * Required
		 */
		kind: DataSourceKind;

		/** Required */
		sinks: Array<SinkConfiguration>;
	}

	/** Data source object contains configuration to collect telemetry and one or more sinks to send that telemetry data to */
	export interface DataSourceFormProperties {

		/**
		 * Datasource kind
		 * Required
		 */
		kind: FormControl<DataSourceKind | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			kind: new FormControl<DataSourceKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DataSourceConfiguration {

		/** Windows event logs configuration. */
		eventLogs?: Array<EventLogConfiguration>;

		/** Performance counter configuration */
		perfCounters?: Array<PerformanceCounterConfiguration>;

		/** ETW providers configuration */
		providers?: Array<EtwProviderConfiguration>;
	}
	export interface DataSourceConfigurationFormProperties {
	}
	export function CreateDataSourceConfigurationFormGroup() {
		return new FormGroup<DataSourceConfigurationFormProperties>({
		});

	}

	export interface EventLogConfiguration {
		filter?: string | null;

		/** Required */
		logName: string;
	}
	export interface EventLogConfigurationFormProperties {
		filter: FormControl<string | null | undefined>,

		/** Required */
		logName: FormControl<string | null | undefined>,
	}
	export function CreateEventLogConfigurationFormGroup() {
		return new FormGroup<EventLogConfigurationFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			logName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PerformanceCounterConfiguration {
		instance?: string | null;

		/** Required */
		name: string;

		/** Required */
		samplingPeriod: string;
	}
	export interface PerformanceCounterConfigurationFormProperties {
		instance: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		samplingPeriod: FormControl<string | null | undefined>,
	}
	export function CreatePerformanceCounterConfigurationFormGroup() {
		return new FormGroup<PerformanceCounterConfigurationFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			samplingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EtwProviderConfiguration {

		/** Required */
		events: Array<EtwEventConfiguration>;

		/** Required */
		id: string;
	}
	export interface EtwProviderConfigurationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateEtwProviderConfigurationFormGroup() {
		return new FormGroup<EtwProviderConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EtwEventConfiguration {
		filter?: string | null;

		/** Required */
		id: number;

		/** Required */
		name: string;
	}
	export interface EtwEventConfigurationFormProperties {
		filter: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEtwEventConfigurationFormGroup() {
		return new FormGroup<EtwEventConfigurationFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataSourceKind { PerformanceCounter = 'PerformanceCounter', ETWProviders = 'ETWProviders', WindowsEventLogs = 'WindowsEventLogs' }

	export interface SinkConfiguration {

		/** Required */
		kind: SinkConfigurationKind;
	}
	export interface SinkConfigurationFormProperties {

		/** Required */
		kind: FormControl<SinkConfigurationKind | null | undefined>,
	}
	export function CreateSinkConfigurationFormGroup() {
		return new FormGroup<SinkConfigurationFormProperties>({
			kind: new FormControl<SinkConfigurationKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SinkConfigurationKind { EventHub = 'EventHub', ApplicationInsights = 'ApplicationInsights', LogAnalytics = 'LogAnalytics' }


	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
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


	/** Virtual machine diagnostic settings */
	export interface GuestDiagnosticSettings {

		/** the array of data source object which are configured to collect and send data */
		dataSources?: Array<DataSource>;

		/** Operating system type for the configuration */
		osType?: GuestDiagnosticSettingsOsType | null;
		proxySetting?: string | null;
	}

	/** Virtual machine diagnostic settings */
	export interface GuestDiagnosticSettingsFormProperties {

		/** Operating system type for the configuration */
		osType: FormControl<GuestDiagnosticSettingsOsType | null | undefined>,
		proxySetting: FormControl<string | null | undefined>,
	}
	export function CreateGuestDiagnosticSettingsFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsFormProperties>({
			osType: new FormControl<GuestDiagnosticSettingsOsType | null | undefined>(undefined),
			proxySetting: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GuestDiagnosticSettingsOsType { Windows = 'Windows', Linux = 'Linux' }


	/** A list of guest diagnostic settings. */
	export interface GuestDiagnosticSettingsList {

		/** Provides the link to retrieve the next set of elements. */
		nextLink?: string | null;

		/** The list of guest diagnostic settings. */
		value?: Array<GuestDiagnosticSettingsResource>;
	}

	/** A list of guest diagnostic settings. */
	export interface GuestDiagnosticSettingsListFormProperties {

		/** Provides the link to retrieve the next set of elements. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGuestDiagnosticSettingsListFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Virtual machine guest diagnostics settings resource. */
	export interface GuestDiagnosticSettingsResource {

		/**
		 * Virtual machine diagnostic settings
		 * Required
		 */
		properties: GuestDiagnosticSettings;
	}

	/** Virtual machine guest diagnostics settings resource. */
	export interface GuestDiagnosticSettingsResourceFormProperties {
	}
	export function CreateGuestDiagnosticSettingsResourceFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsResourceFormProperties>({
		});

	}


	/** An diagnostic settings object for the body of patch operations. */
	export interface GuestDiagnosticSettingsPatchResource {

		/** Virtual machine diagnostic settings */
		properties?: GuestDiagnosticSettings;

		/** Resource tags */
		tags?: any;
	}

	/** An diagnostic settings object for the body of patch operations. */
	export interface GuestDiagnosticSettingsPatchResourceFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateGuestDiagnosticSettingsPatchResourceFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsPatchResourceFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** An azure resource object */
	export interface Resource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all guest diagnostic settings in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/guestDiagnosticSettings
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {GuestDiagnosticSettingsList} The request succeeded.
		 */
		GuestDiagnosticsSettings_List(subscriptionId: string, api_version: string): Observable<GuestDiagnosticSettingsList> {
			return this.http.get<GuestDiagnosticSettingsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/guestDiagnosticSettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a list of all guest diagnostic settings in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {GuestDiagnosticSettingsList} The request succeeded.
		 */
		GuestDiagnosticsSettings_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<GuestDiagnosticSettingsList> {
			return this.http.get<GuestDiagnosticSettingsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/guestDiagnosticSettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets guest diagnostics settings.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diagnosticSettingsName The name of the diagnostic setting.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {GuestDiagnosticSettingsResource} The request succeeded.
		 */
		GuestDiagnosticsSettings_Get(resourceGroupName: string, diagnosticSettingsName: string, subscriptionId: string, api_version: string): Observable<GuestDiagnosticSettingsResource> {
			return this.http.get<GuestDiagnosticSettingsResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/guestDiagnosticSettings/' + (diagnosticSettingsName == null ? '' : encodeURIComponent(diagnosticSettingsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates guest diagnostics settings.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diagnosticSettingsName The name of the diagnostic setting.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {GuestDiagnosticSettingsResource} requestBody The configuration to create or update.
		 * @return {GuestDiagnosticSettingsResource} An existing guest diagnostic settings was successfully updated.
		 */
		GuestDiagnosticsSettings_CreateOrUpdate(resourceGroupName: string, diagnosticSettingsName: string, api_version: string, subscriptionId: string, requestBody: GuestDiagnosticSettingsResource): Observable<GuestDiagnosticSettingsResource> {
			return this.http.put<GuestDiagnosticSettingsResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/guestDiagnosticSettings/' + (diagnosticSettingsName == null ? '' : encodeURIComponent(diagnosticSettingsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete guest diagnostics settings.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diagnosticSettingsName The name of the diagnostic setting.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {void} The diagnostic settings was successfully deleted.
		 */
		GuestDiagnosticsSettings_Delete(resourceGroupName: string, diagnosticSettingsName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/guestDiagnosticSettings/' + (diagnosticSettingsName == null ? '' : encodeURIComponent(diagnosticSettingsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates guest diagnostics settings.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diagnosticSettingsName The name of the diagnostic setting.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {GuestDiagnosticSettingsPatchResource} requestBody The configuration to patch.
		 * @return {GuestDiagnosticSettingsResource} An existing guest diagnostic settings was successfully updated.
		 */
		GuestDiagnosticsSettings_Update(resourceGroupName: string, diagnosticSettingsName: string, api_version: string, subscriptionId: string, requestBody: GuestDiagnosticSettingsPatchResource): Observable<GuestDiagnosticSettingsResource> {
			return this.http.patch<GuestDiagnosticSettingsResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/guestDiagnosticSettings/' + (diagnosticSettingsName == null ? '' : encodeURIComponent(diagnosticSettingsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

