import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The runbook property associated with the entity. */
	export interface RunbookAssociationProperty {

		/** Gets or sets the name of the runbook. */
		name?: string | null;
	}

	/** The runbook property associated with the entity. */
	export interface RunbookAssociationPropertyFormProperties {

		/** Gets or sets the name of the runbook. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRunbookAssociationPropertyFormGroup() {
		return new FormGroup<RunbookAssociationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook {
	}
	export interface WebhookFormProperties {
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
		});

	}


	/** The parameters supplied to the create or update webhook operation. */
	export interface WebhookCreateOrUpdateParameters {

		/**
		 * Gets or sets the name of the webhook.
		 * Required
		 */
		name: string;

		/**
		 * The properties of the create webhook operation.
		 * Required
		 */
		properties: WebhookCreateOrUpdateProperties;
	}

	/** The parameters supplied to the create or update webhook operation. */
	export interface WebhookCreateOrUpdateParametersFormProperties {

		/**
		 * Gets or sets the name of the webhook.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebhookCreateOrUpdateParametersFormGroup() {
		return new FormGroup<WebhookCreateOrUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of the create webhook operation. */
	export interface WebhookCreateOrUpdateProperties {

		/** Gets or sets the expiry time. */
		expiryTime?: Date | null;

		/** Gets or sets the value of the enabled flag of webhook. */
		isEnabled?: boolean | null;

		/** Gets or sets the parameters of the job. */
		parameters?: {[id: string]: string };

		/** Gets or sets the name of the hybrid worker group the webhook job will run on. */
		runOn?: string | null;

		/** The runbook property associated with the entity. */
		runbook?: RunbookAssociationProperty;

		/** Gets or sets the uri. */
		uri?: string | null;
	}

	/** The properties of the create webhook operation. */
	export interface WebhookCreateOrUpdatePropertiesFormProperties {

		/** Gets or sets the expiry time. */
		expiryTime: FormControl<Date | null | undefined>,

		/** Gets or sets the value of the enabled flag of webhook. */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Gets or sets the parameters of the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the name of the hybrid worker group the webhook job will run on. */
		runOn: FormControl<string | null | undefined>,

		/** Gets or sets the uri. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateWebhookCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<WebhookCreateOrUpdatePropertiesFormProperties>({
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list webhook operation. */
	export interface WebhookListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of webhooks. */
		value?: Array<Webhook>;
	}

	/** The response model for the list webhook operation. */
	export interface WebhookListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebhookListResultFormGroup() {
		return new FormGroup<WebhookListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the webhook properties */
	export interface WebhookProperties {

		/** Gets or sets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets or sets the expiry time. */
		expiryTime?: Date | null;

		/** Gets or sets the value of the enabled flag of the webhook. */
		isEnabled?: boolean | null;

		/** Gets or sets the last invoked time. */
		lastInvokedTime?: Date | null;

		/** Details of the user who last modified the Webhook */
		lastModifiedBy?: string | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with. */
		parameters?: {[id: string]: string };

		/** Gets or sets the name of the hybrid worker group the webhook job will run on. */
		runOn?: string | null;

		/** The runbook property associated with the entity. */
		runbook?: RunbookAssociationProperty;

		/** Gets or sets the webhook uri. */
		uri?: string | null;
	}

	/** Definition of the webhook properties */
	export interface WebhookPropertiesFormProperties {

		/** Gets or sets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the expiry time. */
		expiryTime: FormControl<Date | null | undefined>,

		/** Gets or sets the value of the enabled flag of the webhook. */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Gets or sets the last invoked time. */
		lastInvokedTime: FormControl<Date | null | undefined>,

		/** Details of the user who last modified the Webhook */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the name of the hybrid worker group the webhook job will run on. */
		runOn: FormControl<string | null | undefined>,

		/** Gets or sets the webhook uri. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateWebhookPropertiesFormGroup() {
		return new FormGroup<WebhookPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			lastInvokedTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update webhook operation. */
	export interface WebhookUpdateParameters {

		/** Gets or sets the name of the webhook. */
		name?: string | null;

		/** The properties of the update webhook. */
		properties?: WebhookUpdateProperties;
	}

	/** The parameters supplied to the update webhook operation. */
	export interface WebhookUpdateParametersFormProperties {

		/** Gets or sets the name of the webhook. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebhookUpdateParametersFormGroup() {
		return new FormGroup<WebhookUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the update webhook. */
	export interface WebhookUpdateProperties {

		/** Gets or sets the description of the webhook. */
		description?: string | null;

		/** Gets or sets the value of the enabled flag of webhook. */
		isEnabled?: boolean | null;

		/** Gets or sets the parameters of the job. */
		parameters?: {[id: string]: string };

		/** Gets or sets the name of the hybrid worker group the webhook job will run on. */
		runOn?: string | null;
	}

	/** The properties of the update webhook. */
	export interface WebhookUpdatePropertiesFormProperties {

		/** Gets or sets the description of the webhook. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the value of the enabled flag of webhook. */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Gets or sets the parameters of the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the name of the hybrid worker group the webhook job will run on. */
		runOn: FormControl<string | null | undefined>,
	}
	export function CreateWebhookUpdatePropertiesFormGroup() {
		return new FormGroup<WebhookUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of webhooks.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {WebhookListResult} OK
		 */
		Webhook_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<WebhookListResult> {
			return this.http.get<WebhookListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/webhooks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Generates a Uri for use in creating a webhook.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/generateUri
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {string} OK
		 */
		Webhook_GenerateUri(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/webhooks/generateUri&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { responseType: 'text' });
		}

		/**
		 * Retrieve the webhook identified by webhook name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} webhookName The webhook name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Webhook} OK
		 */
		Webhook_Get(resourceGroupName: string, automationAccountName: string, webhookName: string, subscriptionId: string, api_version: string): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create the webhook identified by webhook name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} webhookName The webhook name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {WebhookCreateOrUpdateParameters} requestBody The create or update parameters for webhook.
		 * @return {Webhook} OK
		 */
		Webhook_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, webhookName: string, subscriptionId: string, api_version: string, requestBody: WebhookCreateOrUpdateParameters): Observable<Webhook> {
			return this.http.put<Webhook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the webhook by name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} webhookName The webhook name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Webhook_Delete(resourceGroupName: string, automationAccountName: string, webhookName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the webhook identified by webhook name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} webhookName The webhook name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {WebhookUpdateParameters} requestBody The update parameters for webhook.
		 * @return {Webhook} OK
		 */
		Webhook_Update(resourceGroupName: string, automationAccountName: string, webhookName: string, subscriptionId: string, api_version: string, requestBody: WebhookUpdateParameters): Observable<Webhook> {
			return this.http.patch<Webhook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

