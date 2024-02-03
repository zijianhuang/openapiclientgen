import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DataMaskingPolicy {
	}
	export interface DataMaskingPolicyFormProperties {
	}
	export function CreateDataMaskingPolicyFormGroup() {
		return new FormGroup<DataMaskingPolicyFormProperties>({
		});

	}


	/** The properties of a database data masking policy. */
	export interface DataMaskingPolicyProperties {

		/** The list of the application principals. This is a legacy parameter and is no longer used. */
		applicationPrincipals?: string | null;

		/**
		 * The state of the data masking policy.
		 * Required
		 */
		dataMaskingState: DataMaskingPolicyPropertiesDataMaskingState;

		/** The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries. */
		exemptPrincipals?: string | null;

		/** The masking level. This is a legacy parameter and is no longer used. */
		maskingLevel?: string | null;
	}

	/** The properties of a database data masking policy. */
	export interface DataMaskingPolicyPropertiesFormProperties {

		/** The list of the application principals. This is a legacy parameter and is no longer used. */
		applicationPrincipals: FormControl<string | null | undefined>,

		/**
		 * The state of the data masking policy.
		 * Required
		 */
		dataMaskingState: FormControl<DataMaskingPolicyPropertiesDataMaskingState | null | undefined>,

		/** The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries. */
		exemptPrincipals: FormControl<string | null | undefined>,

		/** The masking level. This is a legacy parameter and is no longer used. */
		maskingLevel: FormControl<string | null | undefined>,
	}
	export function CreateDataMaskingPolicyPropertiesFormGroup() {
		return new FormGroup<DataMaskingPolicyPropertiesFormProperties>({
			applicationPrincipals: new FormControl<string | null | undefined>(undefined),
			dataMaskingState: new FormControl<DataMaskingPolicyPropertiesDataMaskingState | null | undefined>(undefined, [Validators.required]),
			exemptPrincipals: new FormControl<string | null | undefined>(undefined),
			maskingLevel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataMaskingPolicyPropertiesDataMaskingState { Disabled = 'Disabled', Enabled = 'Enabled' }

	export interface DataMaskingRule {
	}
	export interface DataMaskingRuleFormProperties {
	}
	export function CreateDataMaskingRuleFormGroup() {
		return new FormGroup<DataMaskingRuleFormProperties>({
		});

	}


	/** The response to a list data masking rules request. */
	export interface DataMaskingRuleListResult {

		/** The list of database data masking rules. */
		value?: Array<DataMaskingRule>;
	}

	/** The response to a list data masking rules request. */
	export interface DataMaskingRuleListResultFormProperties {
	}
	export function CreateDataMaskingRuleListResultFormGroup() {
		return new FormGroup<DataMaskingRuleListResultFormProperties>({
		});

	}


	/** The properties of a database data masking rule. */
	export interface DataMaskingRuleProperties {

		/** The alias name. This is a legacy parameter and is no longer used. */
		aliasName?: string | null;

		/**
		 * The column name on which the data masking rule is applied.
		 * Required
		 */
		columnName: string;

		/** The rule Id. */
		id?: string | null;

		/**
		 * The masking function that is used for the data masking rule.
		 * Required
		 */
		maskingFunction: DataMaskingRulePropertiesMaskingFunction;

		/** The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. */
		numberFrom?: string | null;

		/** The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. */
		numberTo?: string | null;

		/** If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored. */
		prefixSize?: string | null;

		/** If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored. */
		replacementString?: string | null;

		/** The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState. */
		ruleState?: DataMaskingPolicyPropertiesDataMaskingState | null;

		/**
		 * The schema name on which the data masking rule is applied.
		 * Required
		 */
		schemaName: string;

		/** If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored. */
		suffixSize?: string | null;

		/**
		 * The table name on which the data masking rule is applied.
		 * Required
		 */
		tableName: string;
	}

	/** The properties of a database data masking rule. */
	export interface DataMaskingRulePropertiesFormProperties {

		/** The alias name. This is a legacy parameter and is no longer used. */
		aliasName: FormControl<string | null | undefined>,

		/**
		 * The column name on which the data masking rule is applied.
		 * Required
		 */
		columnName: FormControl<string | null | undefined>,

		/** The rule Id. */
		id: FormControl<string | null | undefined>,

		/**
		 * The masking function that is used for the data masking rule.
		 * Required
		 */
		maskingFunction: FormControl<DataMaskingRulePropertiesMaskingFunction | null | undefined>,

		/** The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. */
		numberFrom: FormControl<string | null | undefined>,

		/** The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. */
		numberTo: FormControl<string | null | undefined>,

		/** If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored. */
		prefixSize: FormControl<string | null | undefined>,

		/** If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored. */
		replacementString: FormControl<string | null | undefined>,

		/** The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState. */
		ruleState: FormControl<DataMaskingPolicyPropertiesDataMaskingState | null | undefined>,

		/**
		 * The schema name on which the data masking rule is applied.
		 * Required
		 */
		schemaName: FormControl<string | null | undefined>,

		/** If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored. */
		suffixSize: FormControl<string | null | undefined>,

		/**
		 * The table name on which the data masking rule is applied.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDataMaskingRulePropertiesFormGroup() {
		return new FormGroup<DataMaskingRulePropertiesFormProperties>({
			aliasName: new FormControl<string | null | undefined>(undefined),
			columnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			maskingFunction: new FormControl<DataMaskingRulePropertiesMaskingFunction | null | undefined>(undefined, [Validators.required]),
			numberFrom: new FormControl<string | null | undefined>(undefined),
			numberTo: new FormControl<string | null | undefined>(undefined),
			prefixSize: new FormControl<string | null | undefined>(undefined),
			replacementString: new FormControl<string | null | undefined>(undefined),
			ruleState: new FormControl<DataMaskingPolicyPropertiesDataMaskingState | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			suffixSize: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataMaskingRulePropertiesMaskingFunction { Default = 'Default', CCN = 'CCN', Email = 'Email', Number = 'Number', SSN = 'SSN', Text = 'Text' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a database data masking policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {DataMaskingPolicies_GetDataMaskingPolicyName} dataMaskingPolicyName The name of the database for which the data masking rule applies.
		 * @return {DataMaskingPolicy} OK
		 */
		DataMaskingPolicies_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, dataMaskingPolicyName: DataMaskingPolicies_GetDataMaskingPolicyName): Observable<DataMaskingPolicy> {
			return this.http.get<DataMaskingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataMaskingPolicies/' + dataMaskingPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database data masking policy
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {DataMaskingPolicies_GetDataMaskingPolicyName} dataMaskingPolicyName The name of the database for which the data masking rule applies.
		 * @param {DataMaskingPolicy} requestBody Parameters for creating or updating a data masking policy.
		 * @return {DataMaskingPolicy} OK
		 */
		DataMaskingPolicies_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, dataMaskingPolicyName: DataMaskingPolicies_GetDataMaskingPolicyName, requestBody: DataMaskingPolicy): Observable<DataMaskingPolicy> {
			return this.http.put<DataMaskingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataMaskingPolicies/' + dataMaskingPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of database data masking rules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {DataMaskingPolicies_GetDataMaskingPolicyName} dataMaskingPolicyName The name of the database for which the data masking rule applies.
		 * @return {DataMaskingRuleListResult} OK
		 */
		DataMaskingRules_ListByDatabase(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, dataMaskingPolicyName: DataMaskingPolicies_GetDataMaskingPolicyName): Observable<DataMaskingRuleListResult> {
			return this.http.get<DataMaskingRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataMaskingPolicies/' + dataMaskingPolicyName + '/rules?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database data masking rule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {DataMaskingPolicies_GetDataMaskingPolicyName} dataMaskingPolicyName The name of the database for which the data masking rule applies.
		 * @param {string} dataMaskingRuleName The name of the data masking rule.
		 * @param {DataMaskingRule} requestBody The required parameters for creating or updating a data masking rule.
		 * @return {DataMaskingRule} OK
		 */
		DataMaskingRules_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, dataMaskingPolicyName: DataMaskingPolicies_GetDataMaskingPolicyName, dataMaskingRuleName: string, requestBody: DataMaskingRule): Observable<DataMaskingRule> {
			return this.http.put<DataMaskingRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataMaskingPolicies/' + dataMaskingPolicyName + '/rules/' + (dataMaskingRuleName == null ? '' : encodeURIComponent(dataMaskingRuleName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DataMaskingPolicies_GetDataMaskingPolicyName { Default = 'Default' }

}

