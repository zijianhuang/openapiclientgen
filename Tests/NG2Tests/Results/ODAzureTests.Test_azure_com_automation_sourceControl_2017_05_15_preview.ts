import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SourceControl {
	}
	export interface SourceControlFormProperties {
	}
	export function CreateSourceControlFormGroup() {
		return new FormGroup<SourceControlFormProperties>({
		});

	}


	/** The parameters supplied to the create or update source control operation. */
	export interface SourceControlCreateOrUpdateParameters {

		/**
		 * The properties of the create source control operation.
		 * Required
		 */
		properties: SourceControlCreateOrUpdateProperties;
	}

	/** The parameters supplied to the create or update source control operation. */
	export interface SourceControlCreateOrUpdateParametersFormProperties {
	}
	export function CreateSourceControlCreateOrUpdateParametersFormGroup() {
		return new FormGroup<SourceControlCreateOrUpdateParametersFormProperties>({
		});

	}


	/** The properties of the create source control operation. */
	export interface SourceControlCreateOrUpdateProperties {

		/** The auto async of the source control. Default is false. */
		autoSync?: boolean | null;

		/**
		 * The repo branch of the source control. Include branch as empty string for VsoTfvc.
		 * Max length: 255
		 */
		branch?: string | null;

		/**
		 * The user description of the source control.
		 * Max length: 512
		 */
		description?: string | null;

		/**
		 * The folder path of the source control. Path must be relative.
		 * Max length: 255
		 */
		folderPath?: string | null;

		/** The auto publish of the source control. Default is true. */
		publishRunbook?: boolean | null;

		/**
		 * The repo url of the source control.
		 * Max length: 2000
		 */
		repoUrl?: string | null;
		securityToken?: SourceControlSecurityTokenProperties;

		/** The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive. */
		sourceType?: SourceControlCreateOrUpdatePropertiesSourceType | null;
	}

	/** The properties of the create source control operation. */
	export interface SourceControlCreateOrUpdatePropertiesFormProperties {

		/** The auto async of the source control. Default is false. */
		autoSync: FormControl<boolean | null | undefined>,

		/**
		 * The repo branch of the source control. Include branch as empty string for VsoTfvc.
		 * Max length: 255
		 */
		branch: FormControl<string | null | undefined>,

		/**
		 * The user description of the source control.
		 * Max length: 512
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The folder path of the source control. Path must be relative.
		 * Max length: 255
		 */
		folderPath: FormControl<string | null | undefined>,

		/** The auto publish of the source control. Default is true. */
		publishRunbook: FormControl<boolean | null | undefined>,

		/**
		 * The repo url of the source control.
		 * Max length: 2000
		 */
		repoUrl: FormControl<string | null | undefined>,

		/** The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive. */
		sourceType: FormControl<SourceControlCreateOrUpdatePropertiesSourceType | null | undefined>,
	}
	export function CreateSourceControlCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<SourceControlCreateOrUpdatePropertiesFormProperties>({
			autoSync: new FormControl<boolean | null | undefined>(undefined),
			branch: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			folderPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			publishRunbook: new FormControl<boolean | null | undefined>(undefined),
			repoUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			sourceType: new FormControl<SourceControlCreateOrUpdatePropertiesSourceType | null | undefined>(undefined),
		});

	}

	export enum SourceControlCreateOrUpdatePropertiesSourceType { VsoGit = 0, VsoTfvc = 1, GitHub = 2 }


	/** The response model for the list source controls operation. */
	export interface SourceControlListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The list of source controls. */
		value?: Array<SourceControl>;
	}

	/** The response model for the list source controls operation. */
	export interface SourceControlListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlListResultFormGroup() {
		return new FormGroup<SourceControlListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the source control properties */
	export interface SourceControlProperties {

		/** The auto sync of the source control. Default is false. */
		autoSync?: boolean | null;

		/** The repo branch of the source control. Include branch as empty string for VsoTfvc. */
		branch?: string | null;

		/** The creation time. */
		creationTime?: Date | null;

		/** The description. */
		description?: string | null;

		/** The folder path of the source control. */
		folderPath?: string | null;

		/** The last modified time. */
		lastModifiedTime?: Date | null;

		/** The auto publish of the source control. Default is true. */
		publishRunbook?: boolean | null;

		/** The repo url of the source control. */
		repoUrl?: string | null;

		/** The source type. Must be one of VsoGit, VsoTfvc, GitHub. */
		sourceType?: SourceControlCreateOrUpdatePropertiesSourceType | null;
	}

	/** Definition of the source control properties */
	export interface SourceControlPropertiesFormProperties {

		/** The auto sync of the source control. Default is false. */
		autoSync: FormControl<boolean | null | undefined>,

		/** The repo branch of the source control. Include branch as empty string for VsoTfvc. */
		branch: FormControl<string | null | undefined>,

		/** The creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The description. */
		description: FormControl<string | null | undefined>,

		/** The folder path of the source control. */
		folderPath: FormControl<string | null | undefined>,

		/** The last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** The auto publish of the source control. Default is true. */
		publishRunbook: FormControl<boolean | null | undefined>,

		/** The repo url of the source control. */
		repoUrl: FormControl<string | null | undefined>,

		/** The source type. Must be one of VsoGit, VsoTfvc, GitHub. */
		sourceType: FormControl<SourceControlCreateOrUpdatePropertiesSourceType | null | undefined>,
	}
	export function CreateSourceControlPropertiesFormGroup() {
		return new FormGroup<SourceControlPropertiesFormProperties>({
			autoSync: new FormControl<boolean | null | undefined>(undefined),
			branch: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			publishRunbook: new FormControl<boolean | null | undefined>(undefined),
			repoUrl: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<SourceControlCreateOrUpdatePropertiesSourceType | null | undefined>(undefined),
		});

	}

	export interface SourceControlSecurityTokenProperties {

		/**
		 * The access token.
		 * Max length: 1024
		 */
		accessToken?: string | null;

		/**
		 * The refresh token.
		 * Max length: 1024
		 */
		refreshToken?: string | null;

		/** The token type. Must be either PersonalAccessToken or Oauth. */
		tokenType?: SourceControlSecurityTokenPropertiesTokenType | null;
	}
	export interface SourceControlSecurityTokenPropertiesFormProperties {

		/**
		 * The access token.
		 * Max length: 1024
		 */
		accessToken: FormControl<string | null | undefined>,

		/**
		 * The refresh token.
		 * Max length: 1024
		 */
		refreshToken: FormControl<string | null | undefined>,

		/** The token type. Must be either PersonalAccessToken or Oauth. */
		tokenType: FormControl<SourceControlSecurityTokenPropertiesTokenType | null | undefined>,
	}
	export function CreateSourceControlSecurityTokenPropertiesFormGroup() {
		return new FormGroup<SourceControlSecurityTokenPropertiesFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			refreshToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			tokenType: new FormControl<SourceControlSecurityTokenPropertiesTokenType | null | undefined>(undefined),
		});

	}

	export enum SourceControlSecurityTokenPropertiesTokenType { PersonalAccessToken = 0, Oauth = 1 }


	/** The parameters supplied to the update source control operation. */
	export interface SourceControlUpdateParameters {

		/** The properties of the update source control */
		properties?: SourceControlUpdateProperties;
	}

	/** The parameters supplied to the update source control operation. */
	export interface SourceControlUpdateParametersFormProperties {
	}
	export function CreateSourceControlUpdateParametersFormGroup() {
		return new FormGroup<SourceControlUpdateParametersFormProperties>({
		});

	}


	/** The properties of the update source control */
	export interface SourceControlUpdateProperties {

		/** The auto sync of the source control. Default is false. */
		autoSync?: boolean | null;

		/** The repo branch of the source control. */
		branch?: string | null;

		/** The user description of the source control. */
		description?: string | null;

		/** The folder path of the source control. Path must be relative. */
		folderPath?: string | null;

		/** The auto publish of the source control. Default is true. */
		publishRunbook?: boolean | null;
		securityToken?: SourceControlSecurityTokenProperties;
	}

	/** The properties of the update source control */
	export interface SourceControlUpdatePropertiesFormProperties {

		/** The auto sync of the source control. Default is false. */
		autoSync: FormControl<boolean | null | undefined>,

		/** The repo branch of the source control. */
		branch: FormControl<string | null | undefined>,

		/** The user description of the source control. */
		description: FormControl<string | null | undefined>,

		/** The folder path of the source control. Path must be relative. */
		folderPath: FormControl<string | null | undefined>,

		/** The auto publish of the source control. Default is true. */
		publishRunbook: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceControlUpdatePropertiesFormGroup() {
		return new FormGroup<SourceControlUpdatePropertiesFormProperties>({
			autoSync: new FormControl<boolean | null | undefined>(undefined),
			branch: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			publishRunbook: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of source controls.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SourceControlListResult} OK
		 */
		SourceControl_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SourceControlListResult> {
			return this.http.get<SourceControlListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the source control identified by source control name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The name of source control.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SourceControl} OK
		 */
		SourceControl_Get(resourceGroupName: string, automationAccountName: string, sourceControlName: string, subscriptionId: string, api_version: string): Observable<SourceControl> {
			return this.http.get<SourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a source control.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The source control name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {SourceControlCreateOrUpdateParameters} requestBody The parameters supplied to the create or update source control operation.
		 * @return {SourceControl} OK
		 */
		SourceControl_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, sourceControlName: string, subscriptionId: string, api_version: string, requestBody: SourceControlCreateOrUpdateParameters): Observable<SourceControl> {
			return this.http.put<SourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the source control.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The name of source control.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		SourceControl_Delete(resourceGroupName: string, automationAccountName: string, sourceControlName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a source control.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The source control name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {SourceControlUpdateParameters} requestBody The parameters supplied to the update source control operation.
		 * @return {SourceControl} OK
		 */
		SourceControl_Update(resourceGroupName: string, automationAccountName: string, sourceControlName: string, subscriptionId: string, api_version: string, requestBody: SourceControlUpdateParameters): Observable<SourceControl> {
			return this.http.patch<SourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

