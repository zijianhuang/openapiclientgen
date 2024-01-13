import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The properties of the create Advanced Schedule. */
	export interface AdvancedSchedule {

		/** Days of the month that the job should execute on. Must be between 1 and 31. */
		monthDays?: Array<number>;

		/** Occurrences of days within a month. */
		monthlyOccurrences?: Array<AdvancedScheduleMonthlyOccurrence>;

		/** Days of the week that the job should execute on. */
		weekDays?: Array<string>;
	}

	/** The properties of the create Advanced Schedule. */
	export interface AdvancedScheduleFormProperties {
	}
	export function CreateAdvancedScheduleFormGroup() {
		return new FormGroup<AdvancedScheduleFormProperties>({
		});

	}


	/** The properties of the create advanced schedule monthly occurrence. */
	export interface AdvancedScheduleMonthlyOccurrence {

		/** Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. */
		day?: AdvancedScheduleMonthlyOccurrenceDay | null;

		/** Occurrence of the week within the month. Must be between 1 and 5 */
		occurrence?: number | null;
	}

	/** The properties of the create advanced schedule monthly occurrence. */
	export interface AdvancedScheduleMonthlyOccurrenceFormProperties {

		/** Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. */
		day: FormControl<AdvancedScheduleMonthlyOccurrenceDay | null | undefined>,

		/** Occurrence of the week within the month. Must be between 1 and 5 */
		occurrence: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedScheduleMonthlyOccurrenceFormGroup() {
		return new FormGroup<AdvancedScheduleMonthlyOccurrenceFormProperties>({
			day: new FormControl<AdvancedScheduleMonthlyOccurrenceDay | null | undefined>(undefined),
			occurrence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AdvancedScheduleMonthlyOccurrenceDay { Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4, Saturday = 5, Sunday = 6 }


	/** Azure query for the update configuration. */
	export interface AzureQueryProperties {

		/** List of locations to scope the query to. */
		locations?: Array<string>;

		/** List of Subscription or Resource Group ARM Ids. */
		scope?: Array<string>;

		/** Tag filter information for the VM. */
		tagSettings?: TagSettingsProperties;
	}

	/** Azure query for the update configuration. */
	export interface AzureQueryPropertiesFormProperties {
	}
	export function CreateAzureQueryPropertiesFormGroup() {
		return new FormGroup<AzureQueryPropertiesFormProperties>({
		});

	}


	/** Tag filter information for the VM. */
	export interface TagSettingsProperties {

		/** Filter VMs by Any or All specified tags. */
		filterOperator?: TagSettingsPropertiesFilterOperator | null;

		/** Dictionary of tags with its list of values. */
		tags?: {[id: string]: Array<string> };
	}

	/** Tag filter information for the VM. */
	export interface TagSettingsPropertiesFormProperties {

		/** Filter VMs by Any or All specified tags. */
		filterOperator: FormControl<TagSettingsPropertiesFilterOperator | null | undefined>,

		/** Dictionary of tags with its list of values. */
		tags: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateTagSettingsPropertiesFormGroup() {
		return new FormGroup<TagSettingsPropertiesFormProperties>({
			filterOperator: new FormControl<TagSettingsPropertiesFilterOperator | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}

	export enum TagSettingsPropertiesFilterOperator { All = 0, Any = 1 }


	/** Linux specific update configuration. */
	export interface LinuxProperties {

		/** packages excluded from the software update configuration. */
		excludedPackageNameMasks?: Array<string>;

		/** Update classifications included in the software update configuration. */
		includedPackageClassifications?: LinuxPropertiesIncludedPackageClassifications | null;

		/** packages included from the software update configuration. */
		includedPackageNameMasks?: Array<string>;

		/** Reboot setting for the software update configuration. */
		rebootSetting?: string | null;
	}

	/** Linux specific update configuration. */
	export interface LinuxPropertiesFormProperties {

		/** Update classifications included in the software update configuration. */
		includedPackageClassifications: FormControl<LinuxPropertiesIncludedPackageClassifications | null | undefined>,

		/** Reboot setting for the software update configuration. */
		rebootSetting: FormControl<string | null | undefined>,
	}
	export function CreateLinuxPropertiesFormGroup() {
		return new FormGroup<LinuxPropertiesFormProperties>({
			includedPackageClassifications: new FormControl<LinuxPropertiesIncludedPackageClassifications | null | undefined>(undefined),
			rebootSetting: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LinuxPropertiesIncludedPackageClassifications { Unclassified = 0, Critical = 1, Security = 2, Other = 3 }


	/** Non Azure query for the update configuration. */
	export interface NonAzureQueryProperties {

		/** Log Analytics Saved Search name. */
		functionAlias?: string | null;

		/** Workspace Id for Log Analytics in which the saved Search is resided. */
		workspaceId?: string | null;
	}

	/** Non Azure query for the update configuration. */
	export interface NonAzureQueryPropertiesFormProperties {

		/** Log Analytics Saved Search name. */
		functionAlias: FormControl<string | null | undefined>,

		/** Workspace Id for Log Analytics in which the saved Search is resided. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateNonAzureQueryPropertiesFormGroup() {
		return new FormGroup<NonAzureQueryPropertiesFormProperties>({
			functionAlias: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of schedule parameters. */
	export interface ScheduleProperties {

		/** The properties of the create Advanced Schedule. */
		advancedSchedule?: AdvancedSchedule;

		/** Gets or sets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets or sets the end time of the schedule. */
		expiryTime?: Date | null;

		/** Gets or sets the expiry time's offset in minutes. */
		expiryTimeOffsetMinutes?: number | null;

		/** Gets or sets the frequency of the schedule. */
		frequency?: SchedulePropertiesFrequency | null;

		/** Gets or sets the interval of the schedule. */
		interval?: number | null;

		/** Gets or sets a value indicating whether this schedule is enabled. */
		isEnabled?: boolean | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the next run time of the schedule. */
		nextRun?: Date | null;

		/** Gets or sets the next run time's offset in minutes. */
		nextRunOffsetMinutes?: number | null;

		/** Gets or sets the start time of the schedule. */
		startTime?: Date | null;

		/** Gets the start time's offset in minutes. */
		startTimeOffsetMinutes?: number | null;

		/** Gets or sets the time zone of the schedule. */
		timeZone?: string | null;
	}

	/** Definition of schedule parameters. */
	export interface SchedulePropertiesFormProperties {

		/** Gets or sets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the end time of the schedule. */
		expiryTime: FormControl<Date | null | undefined>,

		/** Gets or sets the expiry time's offset in minutes. */
		expiryTimeOffsetMinutes: FormControl<number | null | undefined>,

		/** Gets or sets the frequency of the schedule. */
		frequency: FormControl<SchedulePropertiesFrequency | null | undefined>,

		/** Gets or sets the interval of the schedule. */
		interval: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this schedule is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the next run time of the schedule. */
		nextRun: FormControl<Date | null | undefined>,

		/** Gets or sets the next run time's offset in minutes. */
		nextRunOffsetMinutes: FormControl<number | null | undefined>,

		/** Gets or sets the start time of the schedule. */
		startTime: FormControl<Date | null | undefined>,

		/** Gets the start time's offset in minutes. */
		startTimeOffsetMinutes: FormControl<number | null | undefined>,

		/** Gets or sets the time zone of the schedule. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateSchedulePropertiesFormGroup() {
		return new FormGroup<SchedulePropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			expiryTimeOffsetMinutes: new FormControl<number | null | undefined>(undefined),
			frequency: new FormControl<SchedulePropertiesFrequency | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			nextRun: new FormControl<Date | null | undefined>(undefined),
			nextRunOffsetMinutes: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			startTimeOffsetMinutes: new FormControl<number | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SchedulePropertiesFrequency { OneTime = 0, Day = 1, Hour = 2, Week = 3, Month = 4, Minute = 5 }


	/** Group specific to the update configuration. */
	export interface TargetProperties {

		/** List of Azure queries in the software update configuration. */
		azureQueries?: Array<AzureQueryProperties>;

		/** List of non Azure queries in the software update configuration. */
		nonAzureQueries?: Array<NonAzureQueryProperties>;
	}

	/** Group specific to the update configuration. */
	export interface TargetPropertiesFormProperties {
	}
	export function CreateTargetPropertiesFormGroup() {
		return new FormGroup<TargetPropertiesFormProperties>({
		});

	}


	/** Windows specific update configuration. */
	export interface WindowsProperties {

		/** KB numbers excluded from the software update configuration. */
		excludedKbNumbers?: Array<string>;

		/** KB numbers included from the software update configuration. */
		includedKbNumbers?: Array<string>;

		/** Update classification included in the software update configuration. A comma separated string with required values */
		includedUpdateClassifications?: WindowsPropertiesIncludedUpdateClassifications | null;

		/** Reboot setting for the software update configuration. */
		rebootSetting?: string | null;
	}

	/** Windows specific update configuration. */
	export interface WindowsPropertiesFormProperties {

		/** Update classification included in the software update configuration. A comma separated string with required values */
		includedUpdateClassifications: FormControl<WindowsPropertiesIncludedUpdateClassifications | null | undefined>,

		/** Reboot setting for the software update configuration. */
		rebootSetting: FormControl<string | null | undefined>,
	}
	export function CreateWindowsPropertiesFormGroup() {
		return new FormGroup<WindowsPropertiesFormProperties>({
			includedUpdateClassifications: new FormControl<WindowsPropertiesIncludedUpdateClassifications | null | undefined>(undefined),
			rebootSetting: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WindowsPropertiesIncludedUpdateClassifications { Unclassified = 0, Critical = 1, Security = 2, UpdateRollup = 3, FeaturePack = 4, ServicePack = 5, Definition = 6, Tools = 7, Updates = 8 }


	/** object returned when requesting a collection of software update configuration */
	export interface CollectionItemUpdateConfiguration {

		/** List of azure resource Ids for azure virtual machines targeted by the software update configuration. */
		azureVirtualMachines?: Array<string>;

		/** Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 */
		duration?: string | null;
	}

	/** object returned when requesting a collection of software update configuration */
	export interface CollectionItemUpdateConfigurationFormProperties {

		/** Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateCollectionItemUpdateConfigurationFormGroup() {
		return new FormGroup<CollectionItemUpdateConfigurationFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Target operating system for the software update configuration. */
	export enum OperatingSystemType { Windows = 0, Linux = 1 }


	/** Software update configuration properties. */
	export interface SoftwareUpdateConfiguration {

		/** Resource Id. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/**
		 * Software update configuration properties.
		 * Required
		 */
		properties: SoftwareUpdateConfigurationProperties;

		/** Resource type */
		type?: string | null;
	}

	/** Software update configuration properties. */
	export interface SoftwareUpdateConfigurationFormProperties {

		/** Resource Id. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software update configuration collection item properties. */
	export interface SoftwareUpdateConfigurationCollectionItem {

		/** Resource Id of the software update configuration */
		id?: string | null;

		/** Name of the software update configuration. */
		name?: string | null;

		/**
		 * Software update configuration collection item properties.
		 * Required
		 */
		properties: SoftwareUpdateConfigurationCollectionItemProperties;
	}

	/** Software update configuration collection item properties. */
	export interface SoftwareUpdateConfigurationCollectionItemFormProperties {

		/** Resource Id of the software update configuration */
		id: FormControl<string | null | undefined>,

		/** Name of the software update configuration. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationCollectionItemFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationCollectionItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software update configuration collection item properties. */
	export interface SoftwareUpdateConfigurationCollectionItemProperties {

		/** Creation time of the software update configuration, which only appears in the response. */
		creationTime?: Date | null;

		/** Gets or sets the frequency of the schedule. */
		frequency?: SchedulePropertiesFrequency | null;

		/** Last time software update configuration was modified, which only appears in the response. */
		lastModifiedTime?: Date | null;

		/** ext run time of the update. */
		nextRun?: Date | null;

		/** Provisioning state for the software update configuration, which only appears in the response. */
		provisioningState?: string | null;

		/** the start time of the update. */
		startTime?: Date | null;

		/** object returned when requesting a collection of software update configuration */
		updateConfiguration?: CollectionItemUpdateConfiguration;
	}

	/** Software update configuration collection item properties. */
	export interface SoftwareUpdateConfigurationCollectionItemPropertiesFormProperties {

		/** Creation time of the software update configuration, which only appears in the response. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the frequency of the schedule. */
		frequency: FormControl<SchedulePropertiesFrequency | null | undefined>,

		/** Last time software update configuration was modified, which only appears in the response. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** ext run time of the update. */
		nextRun: FormControl<Date | null | undefined>,

		/** Provisioning state for the software update configuration, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** the start time of the update. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationCollectionItemPropertiesFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationCollectionItemPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<SchedulePropertiesFrequency | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			nextRun: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** result of listing all software update configuration */
	export interface SoftwareUpdateConfigurationListResult {

		/** outer object returned when listing all software update configurations */
		value?: Array<SoftwareUpdateConfigurationCollectionItem>;
	}

	/** result of listing all software update configuration */
	export interface SoftwareUpdateConfigurationListResultFormProperties {
	}
	export function CreateSoftwareUpdateConfigurationListResultFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationListResultFormProperties>({
		});

	}


	/** Software update configuration properties. */
	export interface SoftwareUpdateConfigurationProperties {

		/** CreatedBy property, which only appears in the response. */
		createdBy?: string | null;

		/** Creation time of the resource, which only appears in the response. */
		creationTime?: Date | null;

		/** Error response of an operation failure */
		error?: SoftwareUpdateConfigurationPropertiesError;

		/** LastModifiedBy property, which only appears in the response. */
		lastModifiedBy?: string | null;

		/** Last time resource was modified, which only appears in the response. */
		lastModifiedTime?: Date | null;

		/** Provisioning state for the software update configuration, which only appears in the response. */
		provisioningState?: string | null;

		/**
		 * Definition of schedule parameters.
		 * Required
		 */
		scheduleInfo: ScheduleProperties;

		/** Task properties of the software update configuration. */
		tasks?: SoftwareUpdateConfigurationTasks;

		/**
		 * Update specific properties of the software update configuration.
		 * Required
		 */
		updateConfiguration: UpdateConfiguration;
	}

	/** Software update configuration properties. */
	export interface SoftwareUpdateConfigurationPropertiesFormProperties {

		/** CreatedBy property, which only appears in the response. */
		createdBy: FormControl<string | null | undefined>,

		/** Creation time of the resource, which only appears in the response. */
		creationTime: FormControl<Date | null | undefined>,

		/** LastModifiedBy property, which only appears in the response. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Last time resource was modified, which only appears in the response. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Provisioning state for the software update configuration, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationPropertiesFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationPropertiesFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SoftwareUpdateConfigurationPropertiesError {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}
	export interface SoftwareUpdateConfigurationPropertiesErrorFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationPropertiesErrorFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationPropertiesErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Task properties of the software update configuration. */
	export interface SoftwareUpdateConfigurationTasks {

		/** Task properties of the software update configuration. */
		postTask?: TaskProperties;

		/** Task properties of the software update configuration. */
		preTask?: TaskProperties;
	}

	/** Task properties of the software update configuration. */
	export interface SoftwareUpdateConfigurationTasksFormProperties {
	}
	export function CreateSoftwareUpdateConfigurationTasksFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationTasksFormProperties>({
		});

	}


	/** Task properties of the software update configuration. */
	export interface TaskProperties {

		/** Gets or sets the parameters of the task. */
		parameters?: {[id: string]: string };

		/** Gets or sets the name of the runbook. */
		source?: string | null;
	}

	/** Task properties of the software update configuration. */
	export interface TaskPropertiesFormProperties {

		/** Gets or sets the parameters of the task. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the name of the runbook. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateTaskPropertiesFormGroup() {
		return new FormGroup<TaskPropertiesFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update specific properties of the software update configuration. */
	export interface UpdateConfiguration {

		/** List of azure resource Ids for azure virtual machines targeted by the software update configuration. */
		azureVirtualMachines?: Array<string>;

		/** Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 */
		duration?: string | null;

		/** Linux specific update configuration. */
		linux?: LinuxProperties;

		/** List of names of non-azure machines targeted by the software update configuration. */
		nonAzureComputerNames?: Array<string>;

		/**
		 * Target operating system for the software update configuration.
		 * Required
		 */
		operatingSystem: OperatingSystemType;

		/** Group specific to the update configuration. */
		targets?: TargetProperties;

		/** Windows specific update configuration. */
		windows?: WindowsProperties;
	}

	/** Update specific properties of the software update configuration. */
	export interface UpdateConfigurationFormProperties {

		/** Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 */
		duration: FormControl<string | null | undefined>,

		/**
		 * Target operating system for the software update configuration.
		 * Required
		 */
		operatingSystem: FormControl<OperatingSystemType | null | undefined>,
	}
	export function CreateUpdateConfigurationFormGroup() {
		return new FormGroup<UpdateConfigurationFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			operatingSystem: new FormControl<OperatingSystemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all software update configurations for the account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation.
		 * @return {SoftwareUpdateConfigurationListResult} Return list of software update configurations.
		 */
		SoftwareUpdateConfigurations_List(subscriptionId: string, resourceGroupName: string, automationAccountName: string, api_version: string, filter: string | null | undefined): Observable<SoftwareUpdateConfigurationListResult> {
			return this.http.get<SoftwareUpdateConfigurationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Get a single software update configuration by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} softwareUpdateConfigurationName The name of the software update configuration to be created.
		 * @param {string} api_version Client Api Version.
		 * @return {SoftwareUpdateConfiguration} A single software update configuration.
		 */
		SoftwareUpdateConfigurations_GetByName(subscriptionId: string, resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, api_version: string): Observable<SoftwareUpdateConfiguration> {
			return this.http.get<SoftwareUpdateConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurations/' + (softwareUpdateConfigurationName == null ? '' : encodeURIComponent(softwareUpdateConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new software update configuration with the name given in the URI.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} softwareUpdateConfigurationName The name of the software update configuration to be created.
		 * @param {string} api_version Client Api Version.
		 * @param {SoftwareUpdateConfiguration} requestBody Request body.
		 * @return {SoftwareUpdateConfiguration} Software update configuration with the same name and properties already exists.
		 */
		SoftwareUpdateConfigurations_Create(subscriptionId: string, resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, api_version: string, requestBody: SoftwareUpdateConfiguration): Observable<SoftwareUpdateConfiguration> {
			return this.http.put<SoftwareUpdateConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurations/' + (softwareUpdateConfigurationName == null ? '' : encodeURIComponent(softwareUpdateConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * delete a specific software update configuration.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} softwareUpdateConfigurationName The name of the software update configuration to be created.
		 * @param {string} api_version Client Api Version.
		 * @return {void} The software update configuration has been deleted.
		 */
		SoftwareUpdateConfigurations_Delete(subscriptionId: string, resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurations/' + (softwareUpdateConfigurationName == null ? '' : encodeURIComponent(softwareUpdateConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

