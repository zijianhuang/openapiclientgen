import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Variable {
	}
	export interface VariableFormProperties {
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
		});

	}


	/** The parameters supplied to the create or update variable operation. */
	export interface VariableCreateOrUpdateParameters {

		/**
		 * Gets or sets the name of the variable.
		 * Required
		 */
		name: string;

		/**
		 * The properties of the create variable operation.
		 * Required
		 */
		properties: VariableCreateOrUpdateProperties;
	}

	/** The parameters supplied to the create or update variable operation. */
	export interface VariableCreateOrUpdateParametersFormProperties {

		/**
		 * Gets or sets the name of the variable.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVariableCreateOrUpdateParametersFormGroup() {
		return new FormGroup<VariableCreateOrUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of the create variable operation. */
	export interface VariableCreateOrUpdateProperties {

		/** Gets or sets the description of the variable. */
		description?: string | null;

		/** Gets or sets the encrypted flag of the variable. */
		isEncrypted?: boolean | null;

		/** Gets or sets the value of the variable. */
		value?: string | null;
	}

	/** The properties of the create variable operation. */
	export interface VariableCreateOrUpdatePropertiesFormProperties {

		/** Gets or sets the description of the variable. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the encrypted flag of the variable. */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Gets or sets the value of the variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariableCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<VariableCreateOrUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list variables operation. */
	export interface VariableListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of variables. */
		value?: Array<Variable>;
	}

	/** The response model for the list variables operation. */
	export interface VariableListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVariableListResultFormGroup() {
		return new FormGroup<VariableListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the variable properties */
	export interface VariableProperties {

		/** Gets or sets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets or sets the encrypted flag of the variable. */
		isEncrypted?: boolean | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the value of the variable. */
		value?: string | null;
	}

	/** Definition of the variable properties */
	export interface VariablePropertiesFormProperties {

		/** Gets or sets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the encrypted flag of the variable. */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the value of the variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariablePropertiesFormGroup() {
		return new FormGroup<VariablePropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update variable operation. */
	export interface VariableUpdateParameters {

		/** Gets or sets the name of the variable. */
		name?: string | null;

		/** The properties of the update variable */
		properties?: VariableUpdateProperties;
	}

	/** The parameters supplied to the update variable operation. */
	export interface VariableUpdateParametersFormProperties {

		/** Gets or sets the name of the variable. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVariableUpdateParametersFormGroup() {
		return new FormGroup<VariableUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the update variable */
	export interface VariableUpdateProperties {

		/** Gets or sets the description of the variable. */
		description?: string | null;

		/** Gets or sets the value of the variable. */
		value?: string | null;
	}

	/** The properties of the update variable */
	export interface VariableUpdatePropertiesFormProperties {

		/** Gets or sets the description of the variable. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the value of the variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariableUpdatePropertiesFormGroup() {
		return new FormGroup<VariableUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of variables.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {VariableListResult} OK
		 */
		Variable_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<VariableListResult> {
			return this.http.get<VariableListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/variables&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the variable identified by variable name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} variableName The name of variable.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Variable} OK
		 */
		Variable_Get(resourceGroupName: string, automationAccountName: string, variableName: string, subscriptionId: string, api_version: string): Observable<Variable> {
			return this.http.get<Variable>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/variables/' + (variableName == null ? '' : encodeURIComponent(variableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a variable.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} variableName The variable name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {VariableCreateOrUpdateParameters} requestBody The parameters supplied to the create or update variable operation.
		 * @return {Variable} OK
		 */
		Variable_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, variableName: string, subscriptionId: string, api_version: string, requestBody: VariableCreateOrUpdateParameters): Observable<Variable> {
			return this.http.put<Variable>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/variables/' + (variableName == null ? '' : encodeURIComponent(variableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the variable.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} variableName The name of variable.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Variable_Delete(resourceGroupName: string, automationAccountName: string, variableName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/variables/' + (variableName == null ? '' : encodeURIComponent(variableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a variable.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} variableName The variable name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {VariableUpdateParameters} requestBody The parameters supplied to the update variable operation.
		 * @return {Variable} OK
		 */
		Variable_Update(resourceGroupName: string, automationAccountName: string, variableName: string, subscriptionId: string, api_version: string, requestBody: VariableUpdateParameters): Observable<Variable> {
			return this.http.patch<Variable>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/variables/' + (variableName == null ? '' : encodeURIComponent(variableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

