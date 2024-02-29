import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of the activity. */
	export interface Activity {

		/** Gets or sets the id of the resource. */
		id?: string | null;

		/** Gets the name of the activity. */
		name?: string | null;

		/** Properties of the activity. */
		properties?: ActivityProperties;
	}

	/** Definition of the activity. */
	export interface ActivityFormProperties {

		/** Gets or sets the id of the resource. */
		id: FormControl<string | null | undefined>,

		/** Gets the name of the activity. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list activity operation. */
	export interface ActivityListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of activities. */
		value?: Array<Activity>;
	}

	/** The response model for the list activity operation. */
	export interface ActivityListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateActivityListResultFormGroup() {
		return new FormGroup<ActivityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the activity output type. */
	export interface ActivityOutputType {

		/** Gets or sets the name of the activity output type. */
		name?: string | null;

		/** Gets or sets the type of the activity output type. */
		type?: string | null;
	}

	/** Definition of the activity output type. */
	export interface ActivityOutputTypeFormProperties {

		/** Gets or sets the name of the activity output type. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the type of the activity output type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActivityOutputTypeFormGroup() {
		return new FormGroup<ActivityOutputTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the activity parameter. */
	export interface ActivityParameter {

		/** Gets or sets the description of the activity parameter. */
		description?: string | null;

		/** Gets or sets a Boolean value that indicates true if the parameter is dynamic. */
		isDynamic?: boolean | null;

		/** Gets or sets a Boolean value that indicates true if the parameter is required. If the value is false, the parameter is optional. */
		isMandatory?: boolean | null;

		/** Gets or sets the name of the activity parameter. */
		name?: string | null;

		/**
		 * Gets or sets the position of the activity parameter.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		position?: string | null;

		/** Gets or sets the type of the activity parameter. */
		type?: string | null;

		/** Gets or sets the validation set of activity parameter. */
		validationSet?: Array<ActivityParameterValidationSet>;

		/** Gets or sets a Boolean value that indicates true if the parameter can take values from the incoming pipeline objects. This setting is used if the cmdlet must access the complete input object. false indicates that the parameter cannot take values from the complete input object. */
		valueFromPipeline?: boolean | null;

		/** Gets or sets a Boolean value that indicates true if the parameter can be filled from a property of the incoming pipeline object that has the same name as this parameter. false indicates that the parameter cannot be filled from the incoming pipeline object property with the same name. */
		valueFromPipelineByPropertyName?: boolean | null;

		/** Gets or sets a Boolean value that indicates true if the cmdlet parameter accepts all the remaining command-line arguments that are associated with this parameter in the form of an array. false if the cmdlet parameter does not accept all the remaining argument values. */
		valueFromRemainingArguments?: boolean | null;
	}

	/** Definition of the activity parameter. */
	export interface ActivityParameterFormProperties {

		/** Gets or sets the description of the activity parameter. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets a Boolean value that indicates true if the parameter is dynamic. */
		isDynamic: FormControl<boolean | null | undefined>,

		/** Gets or sets a Boolean value that indicates true if the parameter is required. If the value is false, the parameter is optional. */
		isMandatory: FormControl<boolean | null | undefined>,

		/** Gets or sets the name of the activity parameter. */
		name: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the position of the activity parameter.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		position: FormControl<string | null | undefined>,

		/** Gets or sets the type of the activity parameter. */
		type: FormControl<string | null | undefined>,

		/** Gets or sets a Boolean value that indicates true if the parameter can take values from the incoming pipeline objects. This setting is used if the cmdlet must access the complete input object. false indicates that the parameter cannot take values from the complete input object. */
		valueFromPipeline: FormControl<boolean | null | undefined>,

		/** Gets or sets a Boolean value that indicates true if the parameter can be filled from a property of the incoming pipeline object that has the same name as this parameter. false indicates that the parameter cannot be filled from the incoming pipeline object property with the same name. */
		valueFromPipelineByPropertyName: FormControl<boolean | null | undefined>,

		/** Gets or sets a Boolean value that indicates true if the cmdlet parameter accepts all the remaining command-line arguments that are associated with this parameter in the form of an array. false if the cmdlet parameter does not accept all the remaining argument values. */
		valueFromRemainingArguments: FormControl<boolean | null | undefined>,
	}
	export function CreateActivityParameterFormGroup() {
		return new FormGroup<ActivityParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isDynamic: new FormControl<boolean | null | undefined>(undefined),
			isMandatory: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			valueFromPipeline: new FormControl<boolean | null | undefined>(undefined),
			valueFromPipelineByPropertyName: new FormControl<boolean | null | undefined>(undefined),
			valueFromRemainingArguments: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Definition of the activity parameter validation set. */
	export interface ActivityParameterValidationSet {

		/** Gets or sets the name of the activity parameter validation set member. */
		memberValue?: string | null;
	}

	/** Definition of the activity parameter validation set. */
	export interface ActivityParameterValidationSetFormProperties {

		/** Gets or sets the name of the activity parameter validation set member. */
		memberValue: FormControl<string | null | undefined>,
	}
	export function CreateActivityParameterValidationSetFormGroup() {
		return new FormGroup<ActivityParameterValidationSetFormProperties>({
			memberValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the activity parameter set. */
	export interface ActivityParameterSet {

		/** Gets or sets the name of the activity parameter set. */
		name?: string | null;

		/** Gets or sets the parameters of the activity parameter set. */
		parameters?: Array<ActivityParameter>;
	}

	/** Definition of the activity parameter set. */
	export interface ActivityParameterSetFormProperties {

		/** Gets or sets the name of the activity parameter set. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateActivityParameterSetFormGroup() {
		return new FormGroup<ActivityParameterSetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the activity. */
	export interface ActivityProperties {

		/** Gets or sets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the user name of the activity. */
		definition?: string | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the output types of the activity. */
		outputTypes?: Array<ActivityOutputType>;

		/** Gets or sets the parameter sets of the activity. */
		parameterSets?: Array<ActivityParameterSet>;
	}

	/** Properties of the activity. */
	export interface ActivityPropertiesFormProperties {

		/** Gets or sets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the user name of the activity. */
		definition: FormControl<string | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateActivityPropertiesFormGroup() {
		return new FormGroup<ActivityPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Definition of the runbook property type. */
	export interface ContentHash {

		/**
		 * Gets or sets the content hash algorithm used to hash the content.
		 * Required
		 */
		algorithm: string;

		/**
		 * Gets or sets expected hash value of the content.
		 * Required
		 */
		value: string;
	}

	/** Definition of the runbook property type. */
	export interface ContentHashFormProperties {

		/**
		 * Gets or sets the content hash algorithm used to hash the content.
		 * Required
		 */
		algorithm: FormControl<string | null | undefined>,

		/**
		 * Gets or sets expected hash value of the content.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateContentHashFormGroup() {
		return new FormGroup<ContentHashFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Definition of the content link. */
	export interface ContentLink {

		/** Definition of the runbook property type. */
		contentHash?: ContentHash;

		/** Gets or sets the uri of the runbook content. */
		uri?: string | null;

		/** Gets or sets the version of the content. */
		version?: string | null;
	}

	/** Definition of the content link. */
	export interface ContentLinkFormProperties {

		/** Gets or sets the uri of the runbook content. */
		uri: FormControl<string | null | undefined>,

		/** Gets or sets the version of the content. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateContentLinkFormGroup() {
		return new FormGroup<ContentLinkFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Module {
	}
	export interface ModuleFormProperties {
	}
	export function CreateModuleFormGroup() {
		return new FormGroup<ModuleFormProperties>({
		});

	}


	/** Definition of the module error info type. */
	export interface ModuleErrorInfo {

		/** Gets or sets the error code. */
		code?: string | null;

		/** Gets or sets the error message. */
		message?: string | null;
	}

	/** Definition of the module error info type. */
	export interface ModuleErrorInfoFormProperties {

		/** Gets or sets the error code. */
		code: FormControl<string | null | undefined>,

		/** Gets or sets the error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateModuleErrorInfoFormGroup() {
		return new FormGroup<ModuleErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list module operation. */
	export interface ModuleListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of modules. */
		value?: Array<Module>;
	}

	/** The response model for the list module operation. */
	export interface ModuleListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateModuleListResultFormGroup() {
		return new FormGroup<ModuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the module property type. */
	export interface ModuleProperties {

		/**
		 * Gets or sets the activity count of the module.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activityCount?: number | null;

		/** Definition of the content link. */
		contentLink?: ContentLink;

		/** Gets or sets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Definition of the module error info type. */
		error?: ModuleErrorInfo;

		/** Gets or sets type of module, if its composite or not. */
		isComposite?: boolean | null;

		/** Gets or sets the isGlobal flag of the module. */
		isGlobal?: boolean | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the provisioning state of the module. */
		provisioningState?: ModulePropertiesProvisioningState | null;

		/**
		 * Gets or sets the size in bytes of the module.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sizeInBytes?: string | null;

		/** Gets or sets the version of the module. */
		version?: string | null;
	}

	/** Definition of the module property type. */
	export interface ModulePropertiesFormProperties {

		/**
		 * Gets or sets the activity count of the module.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activityCount: FormControl<number | null | undefined>,

		/** Gets or sets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets type of module, if its composite or not. */
		isComposite: FormControl<boolean | null | undefined>,

		/** Gets or sets the isGlobal flag of the module. */
		isGlobal: FormControl<boolean | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the provisioning state of the module. */
		provisioningState: FormControl<ModulePropertiesProvisioningState | null | undefined>,

		/**
		 * Gets or sets the size in bytes of the module.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sizeInBytes: FormControl<string | null | undefined>,

		/** Gets or sets the version of the module. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateModulePropertiesFormGroup() {
		return new FormGroup<ModulePropertiesFormProperties>({
			activityCount: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isComposite: new FormControl<boolean | null | undefined>(undefined),
			isGlobal: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<ModulePropertiesProvisioningState | null | undefined>(undefined),
			sizeInBytes: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModulePropertiesProvisioningState { Created = 'Created', Creating = 'Creating', StartingImportModuleRunbook = 'StartingImportModuleRunbook', RunningImportModuleRunbook = 'RunningImportModuleRunbook', ContentRetrieved = 'ContentRetrieved', ContentDownloaded = 'ContentDownloaded', ContentValidated = 'ContentValidated', ConnectionTypeImported = 'ConnectionTypeImported', ContentStored = 'ContentStored', ModuleDataStored = 'ModuleDataStored', ActivitiesStored = 'ActivitiesStored', ModuleImportRunbookComplete = 'ModuleImportRunbookComplete', Succeeded = 'Succeeded', Failed = 'Failed', Cancelled = 'Cancelled', Updating = 'Updating' }


	/** The parameters supplied to the create or update module operation. */
	export interface PythonPackageCreateParameters {

		/**
		 * The parameters supplied to the create or update module properties.
		 * Required
		 */
		properties: PythonPackageCreateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the create or update module operation. */
	export interface PythonPackageCreateParametersFormProperties {

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePythonPackageCreateParametersFormGroup() {
		return new FormGroup<PythonPackageCreateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create or update module properties. */
	export interface PythonPackageCreateProperties {

		/**
		 * Definition of the content link.
		 * Required
		 */
		contentLink: ContentLink;
	}

	/** The parameters supplied to the create or update module properties. */
	export interface PythonPackageCreatePropertiesFormProperties {
	}
	export function CreatePythonPackageCreatePropertiesFormGroup() {
		return new FormGroup<PythonPackageCreatePropertiesFormProperties>({
		});

	}


	/** The parameters supplied to the update module operation. */
	export interface PythonPackageUpdateParameters {

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the update module operation. */
	export interface PythonPackageUpdateParametersFormProperties {

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePythonPackageUpdateParametersFormGroup() {
		return new FormGroup<PythonPackageUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Information about a field of a type. */
	export interface TypeField {

		/** Gets or sets the name of the field. */
		name?: string | null;

		/** Gets or sets the type of the field. */
		type?: string | null;
	}

	/** Information about a field of a type. */
	export interface TypeFieldFormProperties {

		/** Gets or sets the name of the field. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the type of the field. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTypeFieldFormGroup() {
		return new FormGroup<TypeFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list fields operation. */
	export interface TypeFieldListResult {

		/** Gets or sets a list of fields. */
		value?: Array<TypeField>;
	}

	/** The response model for the list fields operation. */
	export interface TypeFieldListResultFormProperties {
	}
	export function CreateTypeFieldListResultFormGroup() {
		return new FormGroup<TypeFieldListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of python 2 packages.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ModuleListResult} OK
		 */
		Python2Package_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<ModuleListResult> {
			return this.http.get<ModuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/python2Packages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the python 2 package identified by package name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} packageName The python package name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Module} OK
		 */
		Python2Package_Get(resourceGroupName: string, automationAccountName: string, packageName: string, subscriptionId: string, api_version: string): Observable<Module> {
			return this.http.get<Module>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/python2Packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update the python 2 package identified by package name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} packageName The name of python package.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {PythonPackageCreateParameters} requestBody The create or update parameters for python package.
		 * @return {Module} OK
		 */
		Python2Package_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, packageName: string, subscriptionId: string, api_version: string, requestBody: PythonPackageCreateParameters): Observable<Module> {
			return this.http.put<Module>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/python2Packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the python 2 package by name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} packageName The python package name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Python2Package_Delete(resourceGroupName: string, automationAccountName: string, packageName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/python2Packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the python 2 package identified by package name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} packageName The name of python package.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {PythonPackageUpdateParameters} requestBody The update parameters for python package.
		 * @return {Module} OK
		 */
		Python2Package_Update(resourceGroupName: string, automationAccountName: string, packageName: string, subscriptionId: string, api_version: string, requestBody: PythonPackageUpdateParameters): Observable<Module> {
			return this.http.patch<Module>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/python2Packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

