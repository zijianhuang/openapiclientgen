import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of hybrid runbook worker. */
	export interface HybridRunbookWorker {

		/** Gets or sets the assigned machine IP address. */
		ip?: string | null;

		/** Last Heartbeat from the Worker */
		lastSeenDateTime?: Date | null;

		/** Gets or sets the worker machine name. */
		name?: string | null;

		/** Gets or sets the registration time of the worker machine. */
		registrationTime?: Date | null;
	}

	/** Definition of hybrid runbook worker. */
	export interface HybridRunbookWorkerFormProperties {

		/** Gets or sets the assigned machine IP address. */
		ip: FormControl<string | null | undefined>,

		/** Last Heartbeat from the Worker */
		lastSeenDateTime: FormControl<Date | null | undefined>,

		/** Gets or sets the worker machine name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the registration time of the worker machine. */
		registrationTime: FormControl<Date | null | undefined>,
	}
	export function CreateHybridRunbookWorkerFormGroup() {
		return new FormGroup<HybridRunbookWorkerFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			lastSeenDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			registrationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Definition of hybrid runbook worker group. */
	export interface HybridRunbookWorkerGroup {

		/** Definition of RunAs credential to use for hybrid worker. */
		credential?: RunAsCredentialAssociationProperty;

		/** Type of the HybridWorkerGroup. */
		groupType?: HybridRunbookWorkerGroupGroupType | null;

		/** Gets or sets the list of hybrid runbook workers. */
		hybridRunbookWorkers?: Array<HybridRunbookWorker>;

		/** Gets or sets the id of the resource. */
		id?: string | null;

		/** Gets or sets the name of the group. */
		name?: string | null;
	}

	/** Definition of hybrid runbook worker group. */
	export interface HybridRunbookWorkerGroupFormProperties {

		/** Type of the HybridWorkerGroup. */
		groupType: FormControl<HybridRunbookWorkerGroupGroupType | null | undefined>,

		/** Gets or sets the id of the resource. */
		id: FormControl<string | null | undefined>,

		/** Gets or sets the name of the group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHybridRunbookWorkerGroupFormGroup() {
		return new FormGroup<HybridRunbookWorkerGroupFormProperties>({
			groupType: new FormControl<HybridRunbookWorkerGroupGroupType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HybridRunbookWorkerGroupGroupType { User = 'User', System = 'System' }


	/** Parameters supplied to the update operation. */
	export interface HybridRunbookWorkerGroupUpdateParameters {

		/** Definition of RunAs credential to use for hybrid worker. */
		credential?: RunAsCredentialAssociationProperty;
	}

	/** Parameters supplied to the update operation. */
	export interface HybridRunbookWorkerGroupUpdateParametersFormProperties {
	}
	export function CreateHybridRunbookWorkerGroupUpdateParametersFormGroup() {
		return new FormGroup<HybridRunbookWorkerGroupUpdateParametersFormProperties>({
		});

	}


	/** The response model for the list hybrid runbook worker groups. */
	export interface HybridRunbookWorkerGroupsListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of hybrid runbook worker groups. */
		value?: Array<HybridRunbookWorkerGroup>;
	}

	/** The response model for the list hybrid runbook worker groups. */
	export interface HybridRunbookWorkerGroupsListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateHybridRunbookWorkerGroupsListResultFormGroup() {
		return new FormGroup<HybridRunbookWorkerGroupsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of RunAs credential to use for hybrid worker. */
	export interface RunAsCredentialAssociationProperty {

		/** Gets or sets the name of the credential. */
		name?: string | null;
	}

	/** Definition of RunAs credential to use for hybrid worker. */
	export interface RunAsCredentialAssociationPropertyFormProperties {

		/** Gets or sets the name of the credential. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRunAsCredentialAssociationPropertyFormGroup() {
		return new FormGroup<RunAsCredentialAssociationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of hybrid runbook worker groups.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {HybridRunbookWorkerGroupsListResult} OK
		 */
		HybridRunbookWorkerGroup_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<HybridRunbookWorkerGroupsListResult> {
			return this.http.get<HybridRunbookWorkerGroupsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/hybridRunbookWorkerGroups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a hybrid runbook worker group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} hybridRunbookWorkerGroupName The hybrid runbook worker group name
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {HybridRunbookWorkerGroup} OK
		 */
		HybridRunbookWorkerGroup_Get(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, subscriptionId: string, api_version: string): Observable<HybridRunbookWorkerGroup> {
			return this.http.get<HybridRunbookWorkerGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/hybridRunbookWorkerGroups/' + (hybridRunbookWorkerGroupName == null ? '' : encodeURIComponent(hybridRunbookWorkerGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Delete a hybrid runbook worker group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} hybridRunbookWorkerGroupName The hybrid runbook worker group name
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		HybridRunbookWorkerGroup_Delete(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/hybridRunbookWorkerGroups/' + (hybridRunbookWorkerGroupName == null ? '' : encodeURIComponent(hybridRunbookWorkerGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a hybrid runbook worker group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} hybridRunbookWorkerGroupName The hybrid runbook worker group name
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {HybridRunbookWorkerGroupUpdateParameters} requestBody The hybrid runbook worker group
		 * @return {HybridRunbookWorkerGroup} OK
		 */
		HybridRunbookWorkerGroup_Update(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, subscriptionId: string, api_version: string, requestBody: HybridRunbookWorkerGroupUpdateParameters): Observable<HybridRunbookWorkerGroup> {
			return this.http.patch<HybridRunbookWorkerGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/hybridRunbookWorkerGroups/' + (hybridRunbookWorkerGroupName == null ? '' : encodeURIComponent(hybridRunbookWorkerGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

