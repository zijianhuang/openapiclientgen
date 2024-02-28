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

		/**
		 * Occurrence of the week within the month. Must be between 1 and 5
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrence?: number | null;
	}

	/** The properties of the create advanced schedule monthly occurrence. */
	export interface AdvancedScheduleMonthlyOccurrenceFormProperties {

		/** Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. */
		day: FormControl<AdvancedScheduleMonthlyOccurrenceDay | null | undefined>,

		/**
		 * Occurrence of the week within the month. Must be between 1 and 5
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrence: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedScheduleMonthlyOccurrenceFormGroup() {
		return new FormGroup<AdvancedScheduleMonthlyOccurrenceFormProperties>({
			day: new FormControl<AdvancedScheduleMonthlyOccurrenceDay | null | undefined>(undefined),
			occurrence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AdvancedScheduleMonthlyOccurrenceDay { Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday', Sunday = 'Sunday' }

	export interface Schedule {
	}
	export interface ScheduleFormProperties {
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
		});

	}


	/** The parameters supplied to the create or update schedule operation. */
	export interface ScheduleCreateOrUpdateParameters {

		/**
		 * Gets or sets the name of the Schedule.
		 * Required
		 */
		name: string;

		/**
		 * The parameters supplied to the create or update schedule operation.
		 * Required
		 */
		properties: ScheduleCreateOrUpdateProperties;
	}

	/** The parameters supplied to the create or update schedule operation. */
	export interface ScheduleCreateOrUpdateParametersFormProperties {

		/**
		 * Gets or sets the name of the Schedule.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateScheduleCreateOrUpdateParametersFormGroup() {
		return new FormGroup<ScheduleCreateOrUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters supplied to the create or update schedule operation. */
	export interface ScheduleCreateOrUpdateProperties {

		/** The properties of the create Advanced Schedule. */
		advancedSchedule?: AdvancedSchedule;

		/** Gets or sets the description of the schedule. */
		description?: string | null;

		/** Gets or sets the end time of the schedule. */
		expiryTime?: Date | null;

		/**
		 * Gets or sets the frequency of the schedule.
		 * Required
		 */
		frequency: ScheduleCreateOrUpdatePropertiesFrequency;

		/** Gets or sets the interval of the schedule. */
		interval?: any;

		/**
		 * Gets or sets the start time of the schedule.
		 * Required
		 */
		startTime: Date;

		/** Gets or sets the time zone of the schedule. */
		timeZone?: string | null;
	}

	/** The parameters supplied to the create or update schedule operation. */
	export interface ScheduleCreateOrUpdatePropertiesFormProperties {

		/** Gets or sets the description of the schedule. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the end time of the schedule. */
		expiryTime: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the frequency of the schedule.
		 * Required
		 */
		frequency: FormControl<ScheduleCreateOrUpdatePropertiesFrequency | null | undefined>,

		/** Gets or sets the interval of the schedule. */
		interval: FormControl<any | null | undefined>,

		/**
		 * Gets or sets the start time of the schedule.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** Gets or sets the time zone of the schedule. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateScheduleCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<ScheduleCreateOrUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<ScheduleCreateOrUpdatePropertiesFrequency | null | undefined>(undefined, [Validators.required]),
			interval: new FormControl<any | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleCreateOrUpdatePropertiesFrequency { OneTime = 'OneTime', Day = 'Day', Hour = 'Hour', Week = 'Week', Month = 'Month', Minute = 'Minute' }


	/** The response model for the list schedule operation. */
	export interface ScheduleListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of schedules. */
		value?: Array<Schedule>;
	}

	/** The response model for the list schedule operation. */
	export interface ScheduleListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateScheduleListResultFormGroup() {
		return new FormGroup<ScheduleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Gets or sets the expiry time's offset in minutes.
		 * Type: double
		 */
		expiryTimeOffsetMinutes?: number | null;

		/** Gets or sets the frequency of the schedule. */
		frequency?: ScheduleCreateOrUpdatePropertiesFrequency | null;

		/** Gets or sets the interval of the schedule. */
		interval?: any;

		/** Gets or sets a value indicating whether this schedule is enabled. */
		isEnabled?: boolean | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the next run time of the schedule. */
		nextRun?: Date | null;

		/**
		 * Gets or sets the next run time's offset in minutes.
		 * Type: double
		 */
		nextRunOffsetMinutes?: number | null;

		/** Gets or sets the start time of the schedule. */
		startTime?: Date | null;

		/**
		 * Gets the start time's offset in minutes.
		 * Type: double
		 */
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

		/**
		 * Gets or sets the expiry time's offset in minutes.
		 * Type: double
		 */
		expiryTimeOffsetMinutes: FormControl<number | null | undefined>,

		/** Gets or sets the frequency of the schedule. */
		frequency: FormControl<ScheduleCreateOrUpdatePropertiesFrequency | null | undefined>,

		/** Gets or sets the interval of the schedule. */
		interval: FormControl<any | null | undefined>,

		/** Gets or sets a value indicating whether this schedule is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the next run time of the schedule. */
		nextRun: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the next run time's offset in minutes.
		 * Type: double
		 */
		nextRunOffsetMinutes: FormControl<number | null | undefined>,

		/** Gets or sets the start time of the schedule. */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * Gets the start time's offset in minutes.
		 * Type: double
		 */
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
			frequency: new FormControl<ScheduleCreateOrUpdatePropertiesFrequency | null | undefined>(undefined),
			interval: new FormControl<any | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			nextRun: new FormControl<Date | null | undefined>(undefined),
			nextRunOffsetMinutes: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			startTimeOffsetMinutes: new FormControl<number | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update schedule operation. */
	export interface ScheduleUpdateParameters {

		/** Gets or sets the name of the Schedule. */
		name?: string | null;

		/** The parameters supplied to the update schedule operation. */
		properties?: ScheduleUpdateProperties;
	}

	/** The parameters supplied to the update schedule operation. */
	export interface ScheduleUpdateParametersFormProperties {

		/** Gets or sets the name of the Schedule. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateScheduleUpdateParametersFormGroup() {
		return new FormGroup<ScheduleUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update schedule operation. */
	export interface ScheduleUpdateProperties {

		/** Gets or sets the description of the schedule. */
		description?: string | null;

		/** Gets or sets a value indicating whether this schedule is enabled. */
		isEnabled?: boolean | null;
	}

	/** The parameters supplied to the update schedule operation. */
	export interface ScheduleUpdatePropertiesFormProperties {

		/** Gets or sets the description of the schedule. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether this schedule is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateScheduleUpdatePropertiesFormGroup() {
		return new FormGroup<ScheduleUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Gets or sets the frequency of the schedule. */
	export enum ScheduleFrequency { OneTime = 'OneTime', Day = 'Day', Hour = 'Hour', Week = 'Week', Month = 'Month', Minute = 'Minute' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of schedules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ScheduleListResult} OK
		 */
		Schedule_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<ScheduleListResult> {
			return this.http.get<ScheduleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/schedules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the schedule identified by schedule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} scheduleName The schedule name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Schedule} OK
		 */
		Schedule_Get(resourceGroupName: string, automationAccountName: string, scheduleName: string, subscriptionId: string, api_version: string): Observable<Schedule> {
			return this.http.get<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/schedules/' + (scheduleName == null ? '' : encodeURIComponent(scheduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a schedule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} scheduleName The schedule name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {ScheduleCreateOrUpdateParameters} requestBody The parameters supplied to the create or update schedule operation.
		 * @return {Schedule} OK
		 */
		Schedule_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, scheduleName: string, subscriptionId: string, api_version: string, requestBody: ScheduleCreateOrUpdateParameters): Observable<Schedule> {
			return this.http.put<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/schedules/' + (scheduleName == null ? '' : encodeURIComponent(scheduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the schedule identified by schedule name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} scheduleName The schedule name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Schedule_Delete(resourceGroupName: string, automationAccountName: string, scheduleName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/schedules/' + (scheduleName == null ? '' : encodeURIComponent(scheduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the schedule identified by schedule name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} scheduleName The schedule name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {ScheduleUpdateParameters} requestBody The parameters supplied to the update schedule operation.
		 * @return {Schedule} OK
		 */
		Schedule_Update(resourceGroupName: string, automationAccountName: string, scheduleName: string, subscriptionId: string, api_version: string, requestBody: ScheduleUpdateParameters): Observable<Schedule> {
			return this.http.patch<Schedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/schedules/' + (scheduleName == null ? '' : encodeURIComponent(scheduleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

