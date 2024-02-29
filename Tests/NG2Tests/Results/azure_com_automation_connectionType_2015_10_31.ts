import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of the connection type. */
	export interface ConnectionType {

		/** Gets the id of the resource. */
		id?: string | null;

		/** Gets the name of the connection type. */
		name?: string | null;

		/** Properties of the connection type. */
		properties?: ConnectionTypeProperties;

		/** Resource type */
		type?: string | null;
	}

	/** Definition of the connection type. */
	export interface ConnectionTypeFormProperties {

		/** Gets the id of the resource. */
		id: FormControl<string | null | undefined>,

		/** Gets the name of the connection type. */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateConnectionTypeFormGroup() {
		return new FormGroup<ConnectionTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create or update connection type operation. */
	export interface ConnectionTypeCreateOrUpdateParameters {

		/**
		 * Gets or sets the name of the connection type.
		 * Required
		 */
		name: string;

		/**
		 * The properties of the create connection type.
		 * Required
		 */
		properties: ConnectionTypeCreateOrUpdateProperties;
	}

	/** The parameters supplied to the create or update connection type operation. */
	export interface ConnectionTypeCreateOrUpdateParametersFormProperties {

		/**
		 * Gets or sets the name of the connection type.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectionTypeCreateOrUpdateParametersFormGroup() {
		return new FormGroup<ConnectionTypeCreateOrUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of the create connection type. */
	export interface ConnectionTypeCreateOrUpdateProperties {

		/**
		 * Gets or sets the field definitions of the connection type.
		 * Required
		 */
		fieldDefinitions: {[id: string]: FieldDefinition };

		/** Gets or sets a Boolean value to indicate if the connection type is global. */
		isGlobal?: boolean | null;
	}

	/** The properties of the create connection type. */
	export interface ConnectionTypeCreateOrUpdatePropertiesFormProperties {

		/**
		 * Gets or sets the field definitions of the connection type.
		 * Required
		 */
		fieldDefinitions: FormControl<{[id: string]: FieldDefinition } | null | undefined>,

		/** Gets or sets a Boolean value to indicate if the connection type is global. */
		isGlobal: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectionTypeCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<ConnectionTypeCreateOrUpdatePropertiesFormProperties>({
			fieldDefinitions: new FormControl<{[id: string]: FieldDefinition } | null | undefined>(undefined, [Validators.required]),
			isGlobal: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response model for the list connection type operation. */
	export interface ConnectionTypeListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of connection types. */
		value?: Array<ConnectionType>;
	}

	/** The response model for the list connection type operation. */
	export interface ConnectionTypeListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConnectionTypeListResultFormGroup() {
		return new FormGroup<ConnectionTypeListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the connection type. */
	export interface ConnectionTypeProperties {

		/** Gets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets the field definitions of the connection type. */
		fieldDefinitions?: {[id: string]: FieldDefinition };

		/** Gets or sets a Boolean value to indicate if the connection type is global. */
		isGlobal?: boolean | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;
	}

	/** Properties of the connection type. */
	export interface ConnectionTypePropertiesFormProperties {

		/** Gets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets the field definitions of the connection type. */
		fieldDefinitions: FormControl<{[id: string]: FieldDefinition } | null | undefined>,

		/** Gets or sets a Boolean value to indicate if the connection type is global. */
		isGlobal: FormControl<boolean | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionTypePropertiesFormGroup() {
		return new FormGroup<ConnectionTypePropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fieldDefinitions: new FormControl<{[id: string]: FieldDefinition } | null | undefined>(undefined),
			isGlobal: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Definition of the connection fields. */
	export interface FieldDefinition {

		/** Gets or sets the isEncrypted flag of the connection field definition. */
		isEncrypted?: boolean | null;

		/** Gets or sets the isOptional flag of the connection field definition. */
		isOptional?: boolean | null;

		/**
		 * Gets or sets the type of the connection field definition.
		 * Required
		 */
		type: string;
	}

	/** Definition of the connection fields. */
	export interface FieldDefinitionFormProperties {

		/** Gets or sets the isEncrypted flag of the connection field definition. */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Gets or sets the isOptional flag of the connection field definition. */
		isOptional: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets the type of the connection field definition.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFieldDefinitionFormGroup() {
		return new FormGroup<FieldDefinitionFormProperties>({
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			isOptional: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of connection types.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ConnectionTypeListResult} OK
		 */
		ConnectionType_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<ConnectionTypeListResult> {
			return this.http.get<ConnectionTypeListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connectionTypes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the connection type identified by connection type name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes/{connectionTypeName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} connectionTypeName The name of connection type.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ConnectionType} OK
		 */
		ConnectionType_Get(resourceGroupName: string, automationAccountName: string, connectionTypeName: string, subscriptionId: string, api_version: string): Observable<ConnectionType> {
			return this.http.get<ConnectionType>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connectionTypes/' + (connectionTypeName == null ? '' : encodeURIComponent(connectionTypeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a connection type.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes/{connectionTypeName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} connectionTypeName The parameters supplied to the create or update connection type operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {ConnectionTypeCreateOrUpdateParameters} requestBody The parameters supplied to the create or update connection type operation.
		 * @return {void} 
		 */
		ConnectionType_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, connectionTypeName: string, subscriptionId: string, api_version: string, requestBody: ConnectionTypeCreateOrUpdateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connectionTypes/' + (connectionTypeName == null ? '' : encodeURIComponent(connectionTypeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the connection type.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes/{connectionTypeName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} connectionTypeName The name of connection type.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		ConnectionType_Delete(resourceGroupName: string, automationAccountName: string, connectionTypeName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connectionTypes/' + (connectionTypeName == null ? '' : encodeURIComponent(connectionTypeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

