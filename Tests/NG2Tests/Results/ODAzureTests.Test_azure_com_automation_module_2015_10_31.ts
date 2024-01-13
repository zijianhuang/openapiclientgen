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

		/** Gets or sets the position of the activity parameter. */
		position?: number | null;

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

		/** Gets or sets the position of the activity parameter. */
		position: FormControl<number | null | undefined>,

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
			position: new FormControl<number | null | undefined>(undefined),
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


	/** The parameters supplied to the create or update module operation. */
	export interface ModuleCreateOrUpdateParameters {

		/** Gets or sets the location of the resource. */
		location?: string | null;

		/** Gets or sets name of the resource. */
		name?: string | null;

		/**
		 * The parameters supplied to the create or update module properties.
		 * Required
		 */
		properties: ModuleCreateOrUpdateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the create or update module operation. */
	export interface ModuleCreateOrUpdateParametersFormProperties {

		/** Gets or sets the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateModuleCreateOrUpdateParametersFormGroup() {
		return new FormGroup<ModuleCreateOrUpdateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create or update module properties. */
	export interface ModuleCreateOrUpdateProperties {

		/**
		 * Definition of the content link.
		 * Required
		 */
		contentLink: ContentLink;
	}

	/** The parameters supplied to the create or update module properties. */
	export interface ModuleCreateOrUpdatePropertiesFormProperties {
	}
	export function CreateModuleCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<ModuleCreateOrUpdatePropertiesFormProperties>({
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

		/** Gets or sets the activity count of the module. */
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

		/** Gets or sets the size in bytes of the module. */
		sizeInBytes?: number | null;

		/** Gets or sets the version of the module. */
		version?: string | null;
	}

	/** Definition of the module property type. */
	export interface ModulePropertiesFormProperties {

		/** Gets or sets the activity count of the module. */
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

		/** Gets or sets the size in bytes of the module. */
		sizeInBytes: FormControl<number | null | undefined>,

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
			sizeInBytes: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModulePropertiesProvisioningState { Created = 0, Creating = 1, StartingImportModuleRunbook = 2, RunningImportModuleRunbook = 3, ContentRetrieved = 4, ContentDownloaded = 5, ContentValidated = 6, ConnectionTypeImported = 7, ContentStored = 8, ModuleDataStored = 9, ActivitiesStored = 10, ModuleImportRunbookComplete = 11, Succeeded = 12, Failed = 13, Cancelled = 14, Updating = 15 }


	/** The parameters supplied to the update module operation. */
	export interface ModuleUpdateParameters {

		/** Gets or sets the location of the resource. */
		location?: string | null;

		/** Gets or sets name of the resource. */
		name?: string | null;

		/** The parameters supplied to the update properties. */
		properties?: ModuleUpdateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the update module operation. */
	export interface ModuleUpdateParametersFormProperties {

		/** Gets or sets the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateModuleUpdateParametersFormGroup() {
		return new FormGroup<ModuleUpdateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update properties. */
	export interface ModuleUpdateProperties {

		/** Definition of the content link. */
		contentLink?: ContentLink;
	}

	/** The parameters supplied to the update properties. */
	export interface ModuleUpdatePropertiesFormProperties {
	}
	export function CreateModuleUpdatePropertiesFormGroup() {
		return new FormGroup<ModuleUpdatePropertiesFormProperties>({
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
		 * Retrieve a list of modules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ModuleListResult} OK
		 */
		Module_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<ModuleListResult> {
			return this.http.get<ModuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the module identified by module name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The module name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Module} OK
		 */
		Module_Get(resourceGroupName: string, automationAccountName: string, moduleName: string, subscriptionId: string, api_version: string): Observable<Module> {
			return this.http.get<Module>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update the module identified by module name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The name of module.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {ModuleCreateOrUpdateParameters} requestBody The create or update parameters for module.
		 * @return {Module} OK
		 */
		Module_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, moduleName: string, subscriptionId: string, api_version: string, requestBody: ModuleCreateOrUpdateParameters): Observable<Module> {
			return this.http.put<Module>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the module by name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The module name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Module_Delete(resourceGroupName: string, automationAccountName: string, moduleName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the module identified by module name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The name of module.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {ModuleUpdateParameters} requestBody The update parameters for module.
		 * @return {Module} OK
		 */
		Module_Update(resourceGroupName: string, automationAccountName: string, moduleName: string, subscriptionId: string, api_version: string, requestBody: ModuleUpdateParameters): Observable<Module> {
			return this.http.patch<Module>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of activities in the module identified by module name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The name of module.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ActivityListResult} OK
		 */
		Activity_ListByModule(resourceGroupName: string, automationAccountName: string, moduleName: string, subscriptionId: string, api_version: string): Observable<ActivityListResult> {
			return this.http.get<ActivityListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '/activities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the activity in the module identified by module name and activity name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities/{activityName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The name of module.
		 * @param {string} activityName The name of activity.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Activity} OK
		 */
		Activity_Get(resourceGroupName: string, automationAccountName: string, moduleName: string, activityName: string, subscriptionId: string, api_version: string): Observable<Activity> {
			return this.http.get<Activity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '/activities/' + (activityName == null ? '' : encodeURIComponent(activityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a list of fields of a given type identified by module name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/objectDataTypes/{typeName}/fields
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The name of module.
		 * @param {string} typeName The name of type.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {TypeFieldListResult} OK
		 */
		ObjectDataTypes_ListFieldsByModuleAndType(resourceGroupName: string, automationAccountName: string, moduleName: string, typeName: string, subscriptionId: string, api_version: string): Observable<TypeFieldListResult> {
			return this.http.get<TypeFieldListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '/objectDataTypes/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/fields&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a list of fields of a given type identified by module name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/types/{typeName}/fields
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} moduleName The name of module.
		 * @param {string} typeName The name of type.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {TypeFieldListResult} OK
		 */
		Fields_ListByType(resourceGroupName: string, automationAccountName: string, moduleName: string, typeName: string, subscriptionId: string, api_version: string): Observable<TypeFieldListResult> {
			return this.http.get<TypeFieldListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/modules/' + (moduleName == null ? '' : encodeURIComponent(moduleName)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/fields&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a list of fields of a given type across all accessible modules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/objectDataTypes/{typeName}/fields
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} typeName The name of type.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {TypeFieldListResult} OK
		 */
		ObjectDataTypes_ListFieldsByType(resourceGroupName: string, automationAccountName: string, typeName: string, subscriptionId: string, api_version: string): Observable<TypeFieldListResult> {
			return this.http.get<TypeFieldListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/objectDataTypes/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/fields&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

