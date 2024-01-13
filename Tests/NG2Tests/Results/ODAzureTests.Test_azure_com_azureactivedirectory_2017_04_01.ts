import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The diagnostic settings. */
	export interface DiagnosticSettings {

		/** The resource Id for the event hub authorization rule. */
		eventHubAuthorizationRuleId?: string | null;

		/** The name of the event hub. If none is specified, the default event hub will be selected. */
		eventHubName?: string | null;

		/** The list of logs settings. */
		logs?: Array<LogSettings>;

		/** The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility. */
		serviceBusRuleId?: string | null;

		/** The resource ID of the storage account to which you would like to send Diagnostic Logs. */
		storageAccountId?: string | null;

		/** The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 */
		workspaceId?: string | null;
	}

	/** The diagnostic settings. */
	export interface DiagnosticSettingsFormProperties {

		/** The resource Id for the event hub authorization rule. */
		eventHubAuthorizationRuleId: FormControl<string | null | undefined>,

		/** The name of the event hub. If none is specified, the default event hub will be selected. */
		eventHubName: FormControl<string | null | undefined>,

		/** The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility. */
		serviceBusRuleId: FormControl<string | null | undefined>,

		/** The resource ID of the storage account to which you would like to send Diagnostic Logs. */
		storageAccountId: FormControl<string | null | undefined>,

		/** The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticSettingsFormGroup() {
		return new FormGroup<DiagnosticSettingsFormProperties>({
			eventHubAuthorizationRuleId: new FormControl<string | null | undefined>(undefined),
			eventHubName: new FormControl<string | null | undefined>(undefined),
			serviceBusRuleId: new FormControl<string | null | undefined>(undefined),
			storageAccountId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log. */
	export interface LogSettings {

		/** Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. */
		category?: LogSettingsCategory | null;

		/**
		 * A value indicating whether this log is enabled.
		 * Required
		 */
		enabled: boolean;

		/** Specifies the retention policy for the log. */
		retentionPolicy?: RetentionPolicy;
	}

	/** Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log. */
	export interface LogSettingsFormProperties {

		/** Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. */
		category: FormControl<LogSettingsCategory | null | undefined>,

		/**
		 * A value indicating whether this log is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogSettingsFormGroup() {
		return new FormGroup<LogSettingsFormProperties>({
			category: new FormControl<LogSettingsCategory | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogSettingsCategory { AuditLogs = 0, SignInLogs = 1 }


	/** The diagnostic settings Category. */
	export interface DiagnosticSettingsCategory {

		/** The type of the diagnostic settings category. */
		categoryType?: DiagnosticSettingsCategoryCategoryType | null;
	}

	/** The diagnostic settings Category. */
	export interface DiagnosticSettingsCategoryFormProperties {

		/** The type of the diagnostic settings category. */
		categoryType: FormControl<DiagnosticSettingsCategoryCategoryType | null | undefined>,
	}
	export function CreateDiagnosticSettingsCategoryFormGroup() {
		return new FormGroup<DiagnosticSettingsCategoryFormProperties>({
			categoryType: new FormControl<DiagnosticSettingsCategoryCategoryType | null | undefined>(undefined),
		});

	}

	export enum DiagnosticSettingsCategoryCategoryType { Logs = 0 }


	/** The diagnostic settings category resource. */
	export interface DiagnosticSettingsCategoryResource {

		/** The diagnostic settings Category. */
		properties?: DiagnosticSettingsCategory;
	}

	/** The diagnostic settings category resource. */
	export interface DiagnosticSettingsCategoryResourceFormProperties {
	}
	export function CreateDiagnosticSettingsCategoryResourceFormGroup() {
		return new FormGroup<DiagnosticSettingsCategoryResourceFormProperties>({
		});

	}


	/** Represents a collection of diagnostic setting category resources. */
	export interface DiagnosticSettingsCategoryResourceCollection {

		/** The collection of diagnostic settings category resources. */
		value?: Array<DiagnosticSettingsCategoryResource>;
	}

	/** Represents a collection of diagnostic setting category resources. */
	export interface DiagnosticSettingsCategoryResourceCollectionFormProperties {
	}
	export function CreateDiagnosticSettingsCategoryResourceCollectionFormGroup() {
		return new FormGroup<DiagnosticSettingsCategoryResourceCollectionFormProperties>({
		});

	}


	/** The diagnostic setting resource. */
	export interface DiagnosticSettingsResource {

		/** The diagnostic settings. */
		properties?: DiagnosticSettings;
	}

	/** The diagnostic setting resource. */
	export interface DiagnosticSettingsResourceFormProperties {
	}
	export function CreateDiagnosticSettingsResourceFormGroup() {
		return new FormGroup<DiagnosticSettingsResourceFormProperties>({
		});

	}


	/** Represents a collection of alert rule resources. */
	export interface DiagnosticSettingsResourceCollection {

		/** The collection of diagnostic settings resources. */
		value?: Array<DiagnosticSettingsResource>;
	}

	/** Represents a collection of alert rule resources. */
	export interface DiagnosticSettingsResourceCollectionFormProperties {
	}
	export function CreateDiagnosticSettingsResourceCollectionFormGroup() {
		return new FormGroup<DiagnosticSettingsResourceCollectionFormProperties>({
		});

	}


	/** Contains the localized display information for this particular operation / action. These value will be used by several clients for (1) custom role definitions for RBAC; (2) complex query filters for the event service; and (3) audit history / records for management operations. */
	export interface Display {

		/** The description. The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views. Prescriptive guidance for namespaces: Read any 'display.provider' resource Create or Update any 'display.provider' resource Delete any 'display.provider' resource Perform any other action on any 'display.provider' resource Prescriptive guidance for namespaces: Read any 'display.resource' Create or Update any 'display.resource' Delete any 'display.resource' 'ActionName' any 'display.resources' */
		description?: string | null;

		/** The operation. The localized friendly name for the operation, as it should be shown to the user. It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing. Prescriptive guidance: Read Create or Update Delete 'ActionName' */
		operation?: string | null;

		/** The provider. The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider?: string | null;

		/** The publisher. The localized friendly form of the resource publisher name. */
		publisher?: string | null;

		/** The resource. The localized friendly form of the resource related to this action/operation – it should match the public documentation for the resource provider. It should use Title Casing. This value should be unique for a particular URL type (e.g. nested types should *not* reuse their parent’s display.resource field). e.g. "Virtual Machines" or "Scheduler Job Collections", or "Virtual Machine VM Sizes" or "Scheduler Jobs" */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation / action. These value will be used by several clients for (1) custom role definitions for RBAC; (2) complex query filters for the event service; and (3) audit history / records for management operations. */
	export interface DisplayFormProperties {

		/** The description. The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views. Prescriptive guidance for namespaces: Read any 'display.provider' resource Create or Update any 'display.provider' resource Delete any 'display.provider' resource Perform any other action on any 'display.provider' resource Prescriptive guidance for namespaces: Read any 'display.resource' Create or Update any 'display.resource' Delete any 'display.resource' 'ActionName' any 'display.resources' */
		description: FormControl<string | null | undefined>,

		/** The operation. The localized friendly name for the operation, as it should be shown to the user. It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing. Prescriptive guidance: Read Create or Update Delete 'ActionName' */
		operation: FormControl<string | null | undefined>,

		/** The provider. The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider: FormControl<string | null | undefined>,

		/** The publisher. The localized friendly form of the resource publisher name. */
		publisher: FormControl<string | null | undefined>,

		/** The resource. The localized friendly form of the resource related to this action/operation – it should match the public documentation for the resource provider. It should use Title Casing. This value should be unique for a particular URL type (e.g. nested types should *not* reuse their parent’s display.resource field). e.g. "Virtual Machines" or "Scheduler Job Collections", or "Virtual Machine VM Sizes" or "Scheduler Jobs" */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error definition. */
	export interface ErrorDefinition {

		/** Service specific error code which serves as the substatus for the HTTP error code. */
		code?: string | null;

		/** Internal error details. */
		details?: Array<ErrorDefinition>;

		/** Description of the error. */
		message?: string | null;
	}

	/** Error definition. */
	export interface ErrorDefinitionFormProperties {

		/** Service specific error code which serves as the substatus for the HTTP error code. */
		code: FormControl<string | null | undefined>,

		/** Description of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDefinitionFormGroup() {
		return new FormGroup<ErrorDefinitionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response. */
	export interface ErrorResponse {

		/** Error definition. */
		error?: ErrorDefinition;
	}

	/** Error response. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Operations discovery class. */
	export interface OperationsDiscovery {

		/** Contains the localized display information for this particular operation / action. These value will be used by several clients for (1) custom role definitions for RBAC; (2) complex query filters for the event service; and (3) audit history / records for management operations. */
		display?: Display;

		/** Name of the API. The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. Examples of operations include: * Microsoft.Compute/virtualMachine/capture/action * Microsoft.Compute/virtualMachine/restart/action * Microsoft.Compute/virtualMachine/write * Microsoft.Compute/virtualMachine/read * Microsoft.Compute/virtualMachine/delete Each action should include, in order: (1) Resource Provider Namespace (2) Type hierarchy for which the action applies (e.g. server/databases for a SQL Azure database) (3) Read, Write, Action or Delete indicating which type applies. If it is a PUT/PATCH on a collection or named value, Write should be used. If it is a GET, Read should be used. If it is a DELETE, Delete should be used. If it is a POST, Action should be used. */
		name?: string | null;

		/** Origin. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is "user,system" */
		origin?: string | null;

		/** ClientDiscovery properties. */
		properties?: OperationsDiscoveryProperties;
	}

	/** Operations discovery class. */
	export interface OperationsDiscoveryFormProperties {

		/** Name of the API. The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. Examples of operations include: * Microsoft.Compute/virtualMachine/capture/action * Microsoft.Compute/virtualMachine/restart/action * Microsoft.Compute/virtualMachine/write * Microsoft.Compute/virtualMachine/read * Microsoft.Compute/virtualMachine/delete Each action should include, in order: (1) Resource Provider Namespace (2) Type hierarchy for which the action applies (e.g. server/databases for a SQL Azure database) (3) Read, Write, Action or Delete indicating which type applies. If it is a PUT/PATCH on a collection or named value, Write should be used. If it is a GET, Read should be used. If it is a DELETE, Delete should be used. If it is a POST, Action should be used. */
		name: FormControl<string | null | undefined>,

		/** Origin. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is "user,system" */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationsDiscoveryFormGroup() {
		return new FormGroup<OperationsDiscoveryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ClientDiscovery properties. */
	export interface OperationsDiscoveryProperties {
	}

	/** ClientDiscovery properties. */
	export interface OperationsDiscoveryPropertiesFormProperties {
	}
	export function CreateOperationsDiscoveryPropertiesFormGroup() {
		return new FormGroup<OperationsDiscoveryPropertiesFormProperties>({
		});

	}


	/** Collection of ClientDiscovery details. */
	export interface OperationsDiscoveryCollection {

		/** The ClientDiscovery details. */
		value?: Array<OperationsDiscovery>;
	}

	/** Collection of ClientDiscovery details. */
	export interface OperationsDiscoveryCollectionFormProperties {
	}
	export function CreateOperationsDiscoveryCollectionFormGroup() {
		return new FormGroup<OperationsDiscoveryCollectionFormProperties>({
		});

	}


	/** A proxy only azure resource object. */
	export interface ProxyOnlyResource {

		/** Azure resource Id */
		id?: string | null;

		/** Azure resource name */
		name?: string | null;

		/** Azure resource type */
		type?: string | null;
	}

	/** A proxy only azure resource object. */
	export interface ProxyOnlyResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyOnlyResourceFormGroup() {
		return new FormGroup<ProxyOnlyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the retention policy for the log. */
	export interface RetentionPolicy {

		/**
		 * The number of days for the retention in days. A value of 0 will retain the events indefinitely.
		 * Required
		 * Minimum: 0
		 */
		days: number;

		/**
		 * A value indicating whether the retention policy is enabled.
		 * Required
		 */
		enabled: boolean;
	}

	/** Specifies the retention policy for the log. */
	export interface RetentionPolicyFormProperties {

		/**
		 * The number of days for the retention in days. A value of 0 will retain the events indefinitely.
		 * Required
		 * Minimum: 0
		 */
		days: FormControl<number | null | undefined>,

		/**
		 * A value indicating whether the retention policy is enabled.
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the active diagnostic settings list for AadIam.
		 * Get providers/microsoft.aadiam/diagnosticSettings
		 * @param {string} api_version Client Api Version.
		 * @return {DiagnosticSettingsResourceCollection} Successful request to get more information about AadIam diagnostic settings
		 */
		DiagnosticSettings_List(api_version: string): Observable<DiagnosticSettingsResourceCollection> {
			return this.http.get<DiagnosticSettingsResourceCollection>(this.baseUri + 'providers/microsoft.aadiam/diagnosticSettings?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the active diagnostic setting for AadIam.
		 * Get providers/microsoft.aadiam/diagnosticSettings/{name}
		 * @param {string} api_version Client Api Version.
		 * @param {string} name The name of the diagnostic setting.
		 * @return {DiagnosticSettingsResource} Successful request to get more information about diagnostic setting
		 */
		DiagnosticSettings_Get(api_version: string, name: string): Observable<DiagnosticSettingsResource> {
			return this.http.get<DiagnosticSettingsResource>(this.baseUri + 'providers/microsoft.aadiam/diagnosticSettings/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates diagnostic settings for AadIam.
		 * Put providers/microsoft.aadiam/diagnosticSettings/{name}
		 * @param {string} api_version Client Api Version.
		 * @param {string} name The name of the diagnostic setting.
		 * @param {DiagnosticSettingsResource} requestBody Parameters supplied to the operation.
		 * @return {DiagnosticSettingsResource} Successful request to create AadIam diagnostic setting.
		 */
		DiagnosticSettings_CreateOrUpdate(api_version: string, name: string, requestBody: DiagnosticSettingsResource): Observable<DiagnosticSettingsResource> {
			return this.http.put<DiagnosticSettingsResource>(this.baseUri + 'providers/microsoft.aadiam/diagnosticSettings/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes existing diagnostic setting for AadIam.
		 * Delete providers/microsoft.aadiam/diagnosticSettings/{name}
		 * @param {string} api_version Client Api Version.
		 * @param {string} name The name of the diagnostic setting.
		 * @return {void} Successful request to remove a diagnostic setting
		 */
		DiagnosticSettings_Delete(api_version: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/microsoft.aadiam/diagnosticSettings/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the diagnostic settings categories for AadIam.
		 * Get providers/microsoft.aadiam/diagnosticSettingsCategories
		 * @param {string} api_version Client Api Version.
		 * @return {DiagnosticSettingsCategoryResourceCollection} Successful request to get list of diagnostic setting categories
		 */
		DiagnosticSettingsCategory_List(api_version: string): Observable<DiagnosticSettingsCategoryResourceCollection> {
			return this.http.get<DiagnosticSettingsCategoryResourceCollection>(this.baseUri + 'providers/microsoft.aadiam/diagnosticSettingsCategories?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Operation to return the list of available operations.
		 * Get providers/microsoft.aadiam/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationsDiscoveryCollection} Successful request to get list of AadIam operations.
		 */
		Operations_List(api_version: string): Observable<OperationsDiscoveryCollection> {
			return this.http.get<OperationsDiscoveryCollection>(this.baseUri + 'providers/microsoft.aadiam/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

