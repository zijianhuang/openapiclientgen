import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log. */
	export interface LogSettings {

		/** Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. */
		category?: string | null;

		/**
		 * a value indicating whether this log is enabled.
		 * Required
		 */
		enabled: boolean;

		/** Specifies the retention policy for the log. */
		retentionPolicy?: RetentionPolicy;
	}

	/** Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log. */
	export interface LogSettingsFormProperties {

		/** Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. */
		category: FormControl<string | null | undefined>,

		/**
		 * a value indicating whether this log is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogSettingsFormGroup() {
		return new FormGroup<LogSettingsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric. */
	export interface MetricSettings {

		/**
		 * a value indicating whether this timegrain is enabled.
		 * Required
		 */
		enabled: boolean;

		/** Specifies the retention policy for the log. */
		retentionPolicy?: RetentionPolicy;

		/**
		 * the timegrain of the metric in ISO8601 format.
		 * Required
		 */
		timeGrain: string;
	}

	/** Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric. */
	export interface MetricSettingsFormProperties {

		/**
		 * a value indicating whether this timegrain is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * the timegrain of the metric in ISO8601 format.
		 * Required
		 */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateMetricSettingsFormGroup() {
		return new FormGroup<MetricSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeGrain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** Specifies the retention policy for the log. */
	export interface RetentionPolicy {

		/**
		 * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
		 * Required
		 * Minimum: 0
		 */
		days: number;

		/**
		 * a value indicating whether the retention policy is enabled.
		 * Required
		 */
		enabled: boolean;
	}

	/** Specifies the retention policy for the log. */
	export interface RetentionPolicyFormProperties {

		/**
		 * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
		 * Required
		 * Minimum: 0
		 */
		days: FormControl<number | null | undefined>,

		/**
		 * a value indicating whether the retention policy is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRetentionPolicyFormGroup() {
		return new FormGroup<RetentionPolicyFormProperties>({
			days: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The diagnostic settings for service. */
	export interface ServiceDiagnosticSettings {

		/** The resource Id for the event hub namespace authorization rule. */
		eventHubAuthorizationRuleId?: string | null;

		/** the list of logs settings. */
		logs?: Array<LogSettings>;

		/** the list of metric settings. */
		metrics?: Array<MetricSettings>;

		/** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming Diagnostic Logs. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'. */
		serviceBusRuleId?: string | null;

		/** The resource ID of the storage account to which you would like to send Diagnostic Logs. */
		storageAccountId?: string | null;

		/** The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 */
		workspaceId?: string | null;
	}

	/** The diagnostic settings for service. */
	export interface ServiceDiagnosticSettingsFormProperties {

		/** The resource Id for the event hub namespace authorization rule. */
		eventHubAuthorizationRuleId: FormControl<string | null | undefined>,

		/** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming Diagnostic Logs. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'. */
		serviceBusRuleId: FormControl<string | null | undefined>,

		/** The resource ID of the storage account to which you would like to send Diagnostic Logs. */
		storageAccountId: FormControl<string | null | undefined>,

		/** The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateServiceDiagnosticSettingsFormGroup() {
		return new FormGroup<ServiceDiagnosticSettingsFormProperties>({
			eventHubAuthorizationRuleId: new FormControl<string | null | undefined>(undefined),
			serviceBusRuleId: new FormControl<string | null | undefined>(undefined),
			storageAccountId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a service diagnostic setting */
	export interface ServiceDiagnosticSettingsResource {

		/** The diagnostic settings for service. */
		properties?: ServiceDiagnosticSettings;
	}

	/** Description of a service diagnostic setting */
	export interface ServiceDiagnosticSettingsResourceFormProperties {
	}
	export function CreateServiceDiagnosticSettingsResourceFormGroup() {
		return new FormGroup<ServiceDiagnosticSettingsResourceFormProperties>({
		});

	}


	/** Service diagnostic setting resource for patch operations */
	export interface ServiceDiagnosticSettingsResourcePatch {

		/** The diagnostic settings for service. */
		properties?: ServiceDiagnosticSettings;

		/** Resource tags */
		tags?: any;
	}

	/** Service diagnostic setting resource for patch operations */
	export interface ServiceDiagnosticSettingsResourcePatchFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateServiceDiagnosticSettingsResourcePatchFormGroup() {
		return new FormGroup<ServiceDiagnosticSettingsResourcePatchFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the active diagnostic settings for the specified resource. **WARNING**: This method will be deprecated in future releases.
		 * Get {resourceUri}/providers/microsoft.insights/diagnosticSettings/service
		 * @param {string} resourceUri The identifier of the resource.
		 * @param {string} api_version Client Api Version.
		 * @return {ServiceDiagnosticSettingsResource} Successful request to get more information about service diagnostic setting
		 */
		ServiceDiagnosticSettings_Get(resourceUri: string, api_version: string): Observable<ServiceDiagnosticSettingsResource> {
			return this.http.get<ServiceDiagnosticSettingsResource>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/diagnosticSettings/service&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create or update new diagnostic settings for the specified resource. **WARNING**: This method will be deprecated in future releases.
		 * Put {resourceUri}/providers/microsoft.insights/diagnosticSettings/service
		 * @param {string} resourceUri The identifier of the resource.
		 * @param {string} api_version Client Api Version.
		 * @param {ServiceDiagnosticSettingsResource} requestBody Parameters supplied to the operation.
		 * @return {ServiceDiagnosticSettingsResource} Successful request to create a service diagnostic setting
		 */
		ServiceDiagnosticSettings_CreateOrUpdate(resourceUri: string, api_version: string, requestBody: ServiceDiagnosticSettingsResource): Observable<ServiceDiagnosticSettingsResource> {
			return this.http.put<ServiceDiagnosticSettingsResource>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/diagnosticSettings/service&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing ServiceDiagnosticSettingsResource. To update other fields use the CreateOrUpdate method. **WARNING**: This method will be deprecated in future releases.
		 * Patch {resourceUri}/providers/microsoft.insights/diagnosticSettings/service
		 * @param {string} resourceUri The identifier of the resource.
		 * @param {string} api_version Client Api Version.
		 * @param {ServiceDiagnosticSettingsResourcePatch} requestBody Parameters supplied to the operation.
		 * @return {ServiceDiagnosticSettingsResource} An existing service diagnostics setting resource was successfully updated.
		 */
		ServiceDiagnosticSettings_Update(resourceUri: string, api_version: string, requestBody: ServiceDiagnosticSettingsResourcePatch): Observable<ServiceDiagnosticSettingsResource> {
			return this.http.patch<ServiceDiagnosticSettingsResource>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/diagnosticSettings/service&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

