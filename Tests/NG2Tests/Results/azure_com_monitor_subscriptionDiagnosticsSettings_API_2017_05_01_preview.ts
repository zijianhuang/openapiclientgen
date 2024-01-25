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


	/** The subscription diagnostic settings. */
	export interface SubscriptionDiagnosticSettings {

		/** The resource Id for the event hub authorization rule. */
		eventHubAuthorizationRuleId?: string | null;

		/** The name of the event hub. If none is specified, the default event hub will be selected. */
		eventHubName?: string | null;

		/** The list of logs settings. */
		logs?: Array<SubscriptionLogSettings>;

		/** The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility. */
		serviceBusRuleId?: string | null;

		/** The resource ID of the storage account to which you would like to send Diagnostic Logs. */
		storageAccountId?: string | null;

		/** The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 */
		workspaceId?: string | null;
	}

	/** The subscription diagnostic settings. */
	export interface SubscriptionDiagnosticSettingsFormProperties {

		/** The resource Id for the event hub authorization rule. */
		eventHubAuthorizationRuleId: FormControl<string | null | undefined>,

		/** The name of the event hub. If none is specified, the default event hub will be selected. */
		eventHubName: FormControl<string | null | undefined>,

		/** The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility. */
		serviceBusRuleId: FormControl<string | null | undefined>,

		/** The resource ID of the storage account to which you would like to send Diagnostic Logs. */
		storageAccountId: FormControl<string | null | undefined>,

		/** The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionDiagnosticSettingsFormGroup() {
		return new FormGroup<SubscriptionDiagnosticSettingsFormProperties>({
			eventHubAuthorizationRuleId: new FormControl<string | null | undefined>(undefined),
			eventHubName: new FormControl<string | null | undefined>(undefined),
			serviceBusRuleId: new FormControl<string | null | undefined>(undefined),
			storageAccountId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Part of Subscription diagnostic setting. Specifies the settings for a particular log. */
	export interface SubscriptionLogSettings {

		/** Name of a Subscription Diagnostic Log category for a resource type this setting is applied to. */
		category?: string | null;

		/**
		 * a value indicating whether this log is enabled.
		 * Required
		 */
		enabled: boolean;
	}

	/** Part of Subscription diagnostic setting. Specifies the settings for a particular log. */
	export interface SubscriptionLogSettingsFormProperties {

		/** Name of a Subscription Diagnostic Log category for a resource type this setting is applied to. */
		category: FormControl<string | null | undefined>,

		/**
		 * a value indicating whether this log is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSubscriptionLogSettingsFormGroup() {
		return new FormGroup<SubscriptionLogSettingsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The subscription diagnostic setting resource. */
	export interface SubscriptionDiagnosticSettingsResource {

		/** The subscription diagnostic settings. */
		properties?: SubscriptionDiagnosticSettings;
	}

	/** The subscription diagnostic setting resource. */
	export interface SubscriptionDiagnosticSettingsResourceFormProperties {
	}
	export function CreateSubscriptionDiagnosticSettingsResourceFormGroup() {
		return new FormGroup<SubscriptionDiagnosticSettingsResourceFormProperties>({
		});

	}


	/** Represents a collection of subscription diagnostic settings resources. */
	export interface SubscriptionDiagnosticSettingsResourceCollection {

		/** The collection of subscription diagnostic settings resources. */
		value?: Array<SubscriptionDiagnosticSettingsResource>;
	}

	/** Represents a collection of subscription diagnostic settings resources. */
	export interface SubscriptionDiagnosticSettingsResourceCollectionFormProperties {
	}
	export function CreateSubscriptionDiagnosticSettingsResourceCollectionFormGroup() {
		return new FormGroup<SubscriptionDiagnosticSettingsResourceCollectionFormProperties>({
		});

	}


	/** A proxy only azure resource object */
	export interface SubscriptionProxyOnlyResource {

		/** Azure resource Id */
		id?: string | null;

		/** Location of the resource */
		location?: string | null;

		/** Azure resource name */
		name?: string | null;

		/** Azure resource type */
		type?: string | null;
	}

	/** A proxy only azure resource object */
	export interface SubscriptionProxyOnlyResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/** Location of the resource */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionProxyOnlyResourceFormGroup() {
		return new FormGroup<SubscriptionProxyOnlyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the active subscription diagnostic settings list for the specified subscriptionId.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version Client Api Version.
		 * @return {SubscriptionDiagnosticSettingsResourceCollection} Successful request to get more information about subscription diagnostic setting
		 */
		SubscriptionDiagnosticSettings_List(subscriptionId: string, api_version: string): Observable<SubscriptionDiagnosticSettingsResourceCollection> {
			return this.http.get<SubscriptionDiagnosticSettingsResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/diagnosticSettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the active subscription diagnostic settings for the specified resource.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings/{name}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version Client Api Version.
		 * @param {string} name The name of the diagnostic setting.
		 * @return {SubscriptionDiagnosticSettingsResource} Successful request to get more information about diagnostic setting.
		 */
		SubscriptionDiagnosticSettings_Get(subscriptionId: string, api_version: string, name: string): Observable<SubscriptionDiagnosticSettingsResource> {
			return this.http.get<SubscriptionDiagnosticSettingsResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/diagnosticSettings/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates subscription diagnostic settings for the specified resource.
		 * Put subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings/{name}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version Client Api Version.
		 * @param {string} name The name of the diagnostic setting.
		 * @param {SubscriptionDiagnosticSettingsResource} requestBody Parameters supplied to the operation.
		 * @return {SubscriptionDiagnosticSettingsResource} Successful request to create a subscription diagnostic setting
		 */
		SubscriptionDiagnosticSettings_CreateOrUpdate(subscriptionId: string, api_version: string, name: string, requestBody: SubscriptionDiagnosticSettingsResource): Observable<SubscriptionDiagnosticSettingsResource> {
			return this.http.put<SubscriptionDiagnosticSettingsResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/diagnosticSettings/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes existing subscription diagnostic settings for the specified resource.
		 * Delete subscriptions/{subscriptionId}/providers/microsoft.insights/diagnosticSettings/{name}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version Client Api Version.
		 * @param {string} name The name of the diagnostic setting.
		 * @return {void} Successful request to remove a subscription diagnostic setting
		 */
		SubscriptionDiagnosticSettings_Delete(subscriptionId: string, api_version: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/diagnosticSettings/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

