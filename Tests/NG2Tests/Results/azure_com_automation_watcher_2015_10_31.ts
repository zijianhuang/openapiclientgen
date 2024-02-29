import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Watcher {
	}
	export interface WatcherFormProperties {
	}
	export function CreateWatcherFormGroup() {
		return new FormGroup<WatcherFormProperties>({
		});

	}


	/** The response model for the list watcher operation. */
	export interface WatcherListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of watchers. */
		value?: Array<Watcher>;
	}

	/** The response model for the list watcher operation. */
	export interface WatcherListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWatcherListResultFormGroup() {
		return new FormGroup<WatcherListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the watcher properties */
	export interface WatcherProperties {

		/** Gets or sets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/**
		 * Gets or sets the frequency at which the watcher is invoked.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		executionFrequencyInSeconds?: string | null;

		/** Details of the user who last modified the watcher. */
		lastModifiedBy?: string | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook. */
		scriptName?: string | null;

		/** Gets or sets the parameters of the script. */
		scriptParameters?: {[id: string]: string };

		/** Gets or sets the name of the hybrid worker group the watcher will run on. */
		scriptRunOn?: string | null;

		/** Gets the current status of the watcher. */
		status?: string | null;
	}

	/** Definition of the watcher properties */
	export interface WatcherPropertiesFormProperties {

		/** Gets or sets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the frequency at which the watcher is invoked.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		executionFrequencyInSeconds: FormControl<string | null | undefined>,

		/** Details of the user who last modified the watcher. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook. */
		scriptName: FormControl<string | null | undefined>,

		/** Gets or sets the parameters of the script. */
		scriptParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the name of the hybrid worker group the watcher will run on. */
		scriptRunOn: FormControl<string | null | undefined>,

		/** Gets the current status of the watcher. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateWatcherPropertiesFormGroup() {
		return new FormGroup<WatcherPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			executionFrequencyInSeconds: new FormControl<string | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			scriptName: new FormControl<string | null | undefined>(undefined),
			scriptParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			scriptRunOn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WatcherUpdateParameters {

		/** Gets or sets the name of the resource. */
		name?: string | null;

		/** The properties of the update watcher operation. */
		properties?: WatcherUpdateProperties;
	}
	export interface WatcherUpdateParametersFormProperties {

		/** Gets or sets the name of the resource. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWatcherUpdateParametersFormGroup() {
		return new FormGroup<WatcherUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the update watcher operation. */
	export interface WatcherUpdateProperties {

		/**
		 * Gets or sets the frequency at which the watcher is invoked.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		executionFrequencyInSeconds?: string | null;
	}

	/** The properties of the update watcher operation. */
	export interface WatcherUpdatePropertiesFormProperties {

		/**
		 * Gets or sets the frequency at which the watcher is invoked.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		executionFrequencyInSeconds: FormControl<string | null | undefined>,
	}
	export function CreateWatcherUpdatePropertiesFormGroup() {
		return new FormGroup<WatcherUpdatePropertiesFormProperties>({
			executionFrequencyInSeconds: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of watchers.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {WatcherListResult} OK
		 */
		Watcher_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<WatcherListResult> {
			return this.http.get<WatcherListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/watchers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the watcher identified by watcher name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} watcherName The watcher name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Watcher} OK
		 */
		Watcher_Get(resourceGroupName: string, automationAccountName: string, watcherName: string, subscriptionId: string, api_version: string): Observable<Watcher> {
			return this.http.get<Watcher>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/watchers/' + (watcherName == null ? '' : encodeURIComponent(watcherName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create the watcher identified by watcher name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} watcherName The watcher name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {Watcher} requestBody The create or update parameters for watcher.
		 * @return {Watcher} OK
		 */
		Watcher_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, watcherName: string, subscriptionId: string, api_version: string, requestBody: Watcher): Observable<Watcher> {
			return this.http.put<Watcher>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/watchers/' + (watcherName == null ? '' : encodeURIComponent(watcherName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the watcher by name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} watcherName The watcher name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Watcher_Delete(resourceGroupName: string, automationAccountName: string, watcherName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/watchers/' + (watcherName == null ? '' : encodeURIComponent(watcherName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the watcher identified by watcher name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} watcherName The watcher name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {WatcherUpdateParameters} requestBody The update parameters for watcher.
		 * @return {Watcher} OK
		 */
		Watcher_Update(resourceGroupName: string, automationAccountName: string, watcherName: string, subscriptionId: string, api_version: string, requestBody: WatcherUpdateParameters): Observable<Watcher> {
			return this.http.patch<Watcher>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/watchers/' + (watcherName == null ? '' : encodeURIComponent(watcherName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resume the watcher identified by watcher name.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}/start
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} watcherName The watcher name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Watcher_Start(resourceGroupName: string, automationAccountName: string, watcherName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/watchers/' + (watcherName == null ? '' : encodeURIComponent(watcherName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resume the watcher identified by watcher name.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}/stop
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} watcherName The watcher name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Watcher_Stop(resourceGroupName: string, automationAccountName: string, watcherName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/watchers/' + (watcherName == null ? '' : encodeURIComponent(watcherName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

