import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AutomationAccount {
	}
	export interface AutomationAccountFormProperties {
	}
	export function CreateAutomationAccountFormGroup() {
		return new FormGroup<AutomationAccountFormProperties>({
		});

	}


	/** The parameters supplied to the create or update automation account operation. */
	export interface AutomationAccountCreateOrUpdateParameters {

		/** Gets or sets the location of the resource. */
		location?: string | null;

		/** Gets or sets name of the resource. */
		name?: string | null;

		/** The parameters supplied to the create or update account properties. */
		properties?: AutomationAccountCreateOrUpdateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the create or update automation account operation. */
	export interface AutomationAccountCreateOrUpdateParametersFormProperties {

		/** Gets or sets the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAutomationAccountCreateOrUpdateParametersFormGroup() {
		return new FormGroup<AutomationAccountCreateOrUpdateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create or update account properties. */
	export interface AutomationAccountCreateOrUpdateProperties {

		/** The account SKU. */
		sku?: Sku;
	}

	/** The parameters supplied to the create or update account properties. */
	export interface AutomationAccountCreateOrUpdatePropertiesFormProperties {
	}
	export function CreateAutomationAccountCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<AutomationAccountCreateOrUpdatePropertiesFormProperties>({
		});

	}


	/** The response model for the list account operation. */
	export interface AutomationAccountListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets list of accounts. */
		value?: Array<AutomationAccount>;
	}

	/** The response model for the list account operation. */
	export interface AutomationAccountListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAutomationAccountListResultFormGroup() {
		return new FormGroup<AutomationAccountListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the account property. */
	export interface AutomationAccountProperties {

		/** Gets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets or sets the last modified by. */
		lastModifiedBy?: string | null;

		/** Gets the last modified time. */
		lastModifiedTime?: Date | null;

		/** The account SKU. */
		sku?: Sku;

		/** Gets status of account. */
		state?: AutomationAccountPropertiesState | null;
	}

	/** Definition of the account property. */
	export interface AutomationAccountPropertiesFormProperties {

		/** Gets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the last modified by. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Gets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets status of account. */
		state: FormControl<AutomationAccountPropertiesState | null | undefined>,
	}
	export function CreateAutomationAccountPropertiesFormGroup() {
		return new FormGroup<AutomationAccountPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<AutomationAccountPropertiesState | null | undefined>(undefined),
		});

	}

	export enum AutomationAccountPropertiesState { Ok = 'Ok', Unavailable = 'Unavailable', Suspended = 'Suspended' }


	/** The parameters supplied to the update automation account operation. */
	export interface AutomationAccountUpdateParameters {

		/** Gets or sets the location of the resource. */
		location?: string | null;

		/** Gets or sets the name of the resource. */
		name?: string | null;

		/** The parameters supplied to the update account properties. */
		properties?: AutomationAccountUpdateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the update automation account operation. */
	export interface AutomationAccountUpdateParametersFormProperties {

		/** Gets or sets the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets the name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAutomationAccountUpdateParametersFormGroup() {
		return new FormGroup<AutomationAccountUpdateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update account properties. */
	export interface AutomationAccountUpdateProperties {

		/** The account SKU. */
		sku?: Sku;
	}

	/** The parameters supplied to the update account properties. */
	export interface AutomationAccountUpdatePropertiesFormProperties {
	}
	export function CreateAutomationAccountUpdatePropertiesFormGroup() {
		return new FormGroup<AutomationAccountUpdatePropertiesFormProperties>({
		});

	}


	/** Automation key which is used to register a DSC Node */
	export interface Key {

		/** Automation key name. */
		KeyName?: KeyKeyName | null;

		/** Automation key permissions. */
		Permissions?: KeyPermissions | null;

		/** Value of the Automation Key used for registration. */
		Value?: string | null;
	}

	/** Automation key which is used to register a DSC Node */
	export interface KeyFormProperties {

		/** Automation key name. */
		KeyName: FormControl<KeyKeyName | null | undefined>,

		/** Automation key permissions. */
		Permissions: FormControl<KeyPermissions | null | undefined>,

		/** Value of the Automation Key used for registration. */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			KeyName: new FormControl<KeyKeyName | null | undefined>(undefined),
			Permissions: new FormControl<KeyPermissions | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeyKeyName { Primary = 'Primary', Secondary = 'Secondary' }

	export enum KeyPermissions { Read = 'Read', Full = 'Full' }

	export interface KeyListResult {

		/** Lists the automation keys. */
		keys?: Array<Key>;
	}
	export interface KeyListResultFormProperties {
	}
	export function CreateKeyListResultFormGroup() {
		return new FormGroup<KeyListResultFormProperties>({
		});

	}


	/** Automation REST API operation */
	export interface Operation {

		/** Provider, Resource and Operation values */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Automation REST API operation */
	export interface OperationFormProperties {

		/** Provider, Resource and Operation values */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list of Automation operations */
	export interface OperationListResult {

		/** List of Automation operations supported by the Automation resource provider. */
		value?: Array<Operation>;
	}

	/** The response model for the list of Automation operations */
	export interface OperationListResultFormProperties {
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
		});

	}


	/** The account SKU. */
	export interface Sku {

		/**
		 * Gets or sets the SKU capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/** Gets or sets the SKU family. */
		family?: string | null;

		/**
		 * Gets or sets the SKU name of the account.
		 * Required
		 */
		name: SkuName;
	}

	/** The account SKU. */
	export interface SkuFormProperties {

		/**
		 * Gets or sets the SKU capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/** Gets or sets the SKU family. */
		family: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the SKU name of the account.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SkuName { Free = 'Free', Basic = 'Basic' }


	/** Definition of the statistic. */
	export interface Statistics {

		/** Gets the property value of the statistic. */
		counterProperty?: string | null;

		/**
		 * Gets the value of the statistic.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		counterValue?: string | null;

		/** Gets the endTime of the statistic. */
		endTime?: Date | null;

		/** Gets the id. */
		id?: string | null;

		/** Gets the startTime of the statistic. */
		startTime?: Date | null;
	}

	/** Definition of the statistic. */
	export interface StatisticsFormProperties {

		/** Gets the property value of the statistic. */
		counterProperty: FormControl<string | null | undefined>,

		/**
		 * Gets the value of the statistic.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		counterValue: FormControl<string | null | undefined>,

		/** Gets the endTime of the statistic. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets the id. */
		id: FormControl<string | null | undefined>,

		/** Gets the startTime of the statistic. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			counterProperty: new FormControl<string | null | undefined>(undefined),
			counterValue: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The response model for the list statistics operation. */
	export interface StatisticsListResult {

		/** Gets or sets a list of statistics. */
		value?: Array<Statistics>;
	}

	/** The response model for the list statistics operation. */
	export interface StatisticsListResultFormProperties {
	}
	export function CreateStatisticsListResultFormGroup() {
		return new FormGroup<StatisticsListResultFormProperties>({
		});

	}


	/** Definition of Usage. */
	export interface Usage {

		/**
		 * Gets or sets the current usage value.
		 * Type: double
		 */
		currentValue?: number | null;

		/** Gets or sets the id of the resource. */
		id?: string | null;

		/**
		 * Gets or sets max limit. -1 for unlimited
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit?: string | null;

		/** Definition of usage counter name. */
		name?: UsageCounterName;

		/** Gets or sets the throttle status. */
		throttleStatus?: string | null;

		/** Gets or sets the usage unit name. */
		unit?: string | null;
	}

	/** Definition of Usage. */
	export interface UsageFormProperties {

		/**
		 * Gets or sets the current usage value.
		 * Type: double
		 */
		currentValue: FormControl<number | null | undefined>,

		/** Gets or sets the id of the resource. */
		id: FormControl<string | null | undefined>,

		/**
		 * Gets or sets max limit. -1 for unlimited
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit: FormControl<string | null | undefined>,

		/** Gets or sets the throttle status. */
		throttleStatus: FormControl<string | null | undefined>,

		/** Gets or sets the usage unit name. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			throttleStatus: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of usage counter name. */
	export interface UsageCounterName {

		/** Gets or sets the localized usage counter name. */
		localizedValue?: string | null;

		/** Gets or sets the usage counter name. */
		value?: string | null;
	}

	/** Definition of usage counter name. */
	export interface UsageCounterNameFormProperties {

		/** Gets or sets the localized usage counter name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Gets or sets the usage counter name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUsageCounterNameFormGroup() {
		return new FormGroup<UsageCounterNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the get usage operation. */
	export interface UsageListResult {

		/** Gets or sets usage. */
		value?: Array<Usage>;
	}

	/** The response model for the get usage operation. */
	export interface UsageListResultFormProperties {
	}
	export function CreateUsageListResultFormGroup() {
		return new FormGroup<UsageListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Automation REST API operations.
		 * Get providers/Microsoft.Automation/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} OK
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Automation/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the Automation Accounts within an Azure subscription.
		 * Retrieve a list of accounts within a given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Automation/automationAccounts
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {AutomationAccountListResult} OK
		 */
		AutomationAccount_List(subscriptionId: string, api_version: string): Observable<AutomationAccountListResult> {
			return this.http.get<AutomationAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Automation/automationAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a list of accounts within a given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {AutomationAccountListResult} OK
		 */
		AutomationAccount_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<AutomationAccountListResult> {
			return this.http.get<AutomationAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get information about an Automation Account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {AutomationAccount} OK
		 */
		AutomationAccount_Get(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<AutomationAccount> {
			return this.http.get<AutomationAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update automation account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {AutomationAccountCreateOrUpdateParameters} requestBody Parameters supplied to the create or update automation account.
		 * @return {AutomationAccount} OK
		 */
		AutomationAccount_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string, requestBody: AutomationAccountCreateOrUpdateParameters): Observable<AutomationAccount> {
			return this.http.put<AutomationAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an automation account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		AutomationAccount_Delete(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an automation account.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {AutomationAccountUpdateParameters} requestBody Parameters supplied to the update automation account.
		 * @return {AutomationAccount} OK
		 */
		AutomationAccount_Update(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string, requestBody: AutomationAccountUpdateParameters): Observable<AutomationAccount> {
			return this.http.patch<AutomationAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the automation keys for an account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/listKeys
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {KeyListResult} OK
		 */
		Keys_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<KeyListResult> {
			return this.http.post<KeyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Retrieve the statistics for the account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/statistics
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {StatisticsListResult} OK
		 */
		Statistics_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<StatisticsListResult> {
			return this.http.get<StatisticsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/statistics&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the usage for the account id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/usages
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {UsageListResult} OK
		 */
		Usages_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<UsageListResult> {
			return this.http.get<UsageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

