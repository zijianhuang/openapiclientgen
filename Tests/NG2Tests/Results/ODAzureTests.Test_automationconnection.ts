import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Connection {
	}
	export interface ConnectionFormProperties {
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
		});

	}


	/** The parameters supplied to the create or update connection operation. */
	export interface ConnectionCreateOrUpdateParameters {

		/**
		 * Gets or sets the name of the connection.
		 * Required
		 */
		name: string;

		/**
		 * The properties of the create connection properties
		 * Required
		 */
		properties: ConnectionCreateOrUpdateProperties;
	}

	/** The parameters supplied to the create or update connection operation. */
	export interface ConnectionCreateOrUpdateParametersFormProperties {

		/**
		 * Gets or sets the name of the connection.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectionCreateOrUpdateParametersFormGroup() {
		return new FormGroup<ConnectionCreateOrUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of the create connection properties */
	export interface ConnectionCreateOrUpdateProperties {

		/**
		 * The connection type property associated with the entity.
		 * Required
		 */
		connectionType: ConnectionTypeAssociationProperty;

		/** Gets or sets the description of the connection. */
		description?: string | null;

		/** Gets or sets the field definition properties of the connection. */
		fieldDefinitionValues?: {[id: string]: string };
	}

	/** The properties of the create connection properties */
	export interface ConnectionCreateOrUpdatePropertiesFormProperties {

		/** Gets or sets the description of the connection. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the field definition properties of the connection. */
		fieldDefinitionValues: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateConnectionCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<ConnectionCreateOrUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fieldDefinitionValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The response model for the list connection operation. */
	export interface ConnectionListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of connection. */
		value?: Array<Connection>;
	}

	/** The response model for the list connection operation. */
	export interface ConnectionListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConnectionListResultFormGroup() {
		return new FormGroup<ConnectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the connection properties. */
	export interface ConnectionProperties {

		/** The connection type property associated with the entity. */
		connectionType?: ConnectionTypeAssociationProperty;

		/** Gets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets the field definition values of the connection. */
		fieldDefinitionValues?: {[id: string]: string };

		/** Gets the last modified time. */
		lastModifiedTime?: Date | null;
	}

	/** Definition of the connection properties. */
	export interface ConnectionPropertiesFormProperties {

		/** Gets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets the field definition values of the connection. */
		fieldDefinitionValues: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionPropertiesFormGroup() {
		return new FormGroup<ConnectionPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fieldDefinitionValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The connection type property associated with the entity. */
	export interface ConnectionTypeAssociationProperty {

		/** Gets or sets the name of the connection type. */
		name?: string | null;
	}

	/** The connection type property associated with the entity. */
	export interface ConnectionTypeAssociationPropertyFormProperties {

		/** Gets or sets the name of the connection type. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectionTypeAssociationPropertyFormGroup() {
		return new FormGroup<ConnectionTypeAssociationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update connection operation. */
	export interface ConnectionUpdateParameters {

		/** Gets or sets the name of the connection. */
		name?: string | null;

		/** The properties of the update connection operation. */
		properties?: ConnectionUpdateProperties;
	}

	/** The parameters supplied to the update connection operation. */
	export interface ConnectionUpdateParametersFormProperties {

		/** Gets or sets the name of the connection. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectionUpdateParametersFormGroup() {
		return new FormGroup<ConnectionUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the update connection operation. */
	export interface ConnectionUpdateProperties {

		/** Gets or sets the description of the connection. */
		description?: string | null;

		/** Gets or sets the field definition values of the connection. */
		fieldDefinitionValues?: {[id: string]: string };
	}

	/** The properties of the update connection operation. */
	export interface ConnectionUpdatePropertiesFormProperties {

		/** Gets or sets the description of the connection. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the field definition values of the connection. */
		fieldDefinitionValues: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateConnectionUpdatePropertiesFormGroup() {
		return new FormGroup<ConnectionUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fieldDefinitionValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of connections.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ConnectionListResult} OK
		 */
		Connection_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<ConnectionListResult> {
			return this.http.get<ConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the connection identified by connection name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} connectionName The name of connection.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Connection} OK
		 */
		Connection_Get(resourceGroupName: string, automationAccountName: string, connectionName: string, subscriptionId: string, api_version: string): Observable<Connection> {
			return this.http.get<Connection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a connection.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} connectionName The parameters supplied to the create or update connection operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {ConnectionCreateOrUpdateParameters} requestBody The parameters supplied to the create or update connection operation.
		 * @return {Connection} OK
		 */
		Connection_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, connectionName: string, subscriptionId: string, api_version: string, requestBody: ConnectionCreateOrUpdateParameters): Observable<Connection> {
			return this.http.put<Connection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the connection.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} connectionName The name of connection.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Connection} OK
		 */
		Connection_Delete(resourceGroupName: string, automationAccountName: string, connectionName: string, subscriptionId: string, api_version: string): Observable<Connection> {
			return this.http.delete<Connection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update a connection.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} connectionName The parameters supplied to the update a connection operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {ConnectionUpdateParameters} requestBody The parameters supplied to the update a connection operation.
		 * @return {Connection} OK
		 */
		Connection_Update(resourceGroupName: string, automationAccountName: string, connectionName: string, subscriptionId: string, api_version: string, requestBody: ConnectionUpdateParameters): Observable<Connection> {
			return this.http.patch<Connection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

