import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Configures where to store the OMS agent data for workspaces under a scope */
	export interface WorkspaceSetting {

		/** Workspace setting data */
		properties?: WorkspaceSettingProperties;
	}

	/** Configures where to store the OMS agent data for workspaces under a scope */
	export interface WorkspaceSettingFormProperties {
	}
	export function CreateWorkspaceSettingFormGroup() {
		return new FormGroup<WorkspaceSettingFormProperties>({
		});

	}


	/** Workspace setting data */
	export interface WorkspaceSettingProperties {

		/**
		 * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
		 * Required
		 */
		scope: string;

		/**
		 * The full Azure ID of the workspace to save the data in
		 * Required
		 */
		workspaceId: string;
	}

	/** Workspace setting data */
	export interface WorkspaceSettingPropertiesFormProperties {

		/**
		 * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * The full Azure ID of the workspace to save the data in
		 * Required
		 */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceSettingPropertiesFormGroup() {
		return new FormGroup<WorkspaceSettingPropertiesFormProperties>({
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of workspace settings response */
	export interface WorkspaceSettingList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of workspace settings
		 * Required
		 */
		value: Array<WorkspaceSetting>;
	}

	/** List of workspace settings response */
	export interface WorkspaceSettingListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceSettingListFormGroup() {
		return new FormGroup<WorkspaceSettingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {WorkspaceSettingList} OK
		 */
		WorkspaceSettings_List(api_version: string, subscriptionId: string): Observable<WorkspaceSettingList> {
			return this.http.get<WorkspaceSettingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @return {WorkspaceSetting} OK
		 */
		WorkspaceSettings_Get(api_version: string, subscriptionId: string, workspaceSettingName: string): Observable<WorkspaceSetting> {
			return this.http.get<WorkspaceSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * creating settings about where we should store your security data and logs
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @param {WorkspaceSetting} requestBody Security data setting object
		 * @return {WorkspaceSetting} OK
		 */
		WorkspaceSettings_Create(api_version: string, subscriptionId: string, workspaceSettingName: string, requestBody: WorkspaceSetting): Observable<WorkspaceSetting> {
			return this.http.put<WorkspaceSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the custom workspace settings for this subscription. new VMs will report to the default workspace
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @return {void} 
		 */
		WorkspaceSettings_Delete(api_version: string, subscriptionId: string, workspaceSettingName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Settings about where we should store your security data and logs
		 * Patch subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @param {WorkspaceSetting} requestBody Security data setting object
		 * @return {WorkspaceSetting} OK
		 */
		WorkspaceSettings_Update(api_version: string, subscriptionId: string, workspaceSettingName: string, requestBody: WorkspaceSetting): Observable<WorkspaceSetting> {
			return this.http.patch<WorkspaceSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

