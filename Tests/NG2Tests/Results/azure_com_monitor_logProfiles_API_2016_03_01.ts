import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of log profiles. */
	export interface LogProfileCollection {

		/**
		 * the values of the log profiles.
		 * Required
		 */
		value: Array<LogProfileResource>;
	}

	/** Represents a collection of log profiles. */
	export interface LogProfileCollectionFormProperties {
	}
	export function CreateLogProfileCollectionFormGroup() {
		return new FormGroup<LogProfileCollectionFormProperties>({
		});

	}


	/** The log profile resource. */
	export interface LogProfileResource {

		/**
		 * The log profile properties.
		 * Required
		 */
		properties: LogProfileProperties;
	}

	/** The log profile resource. */
	export interface LogProfileResourceFormProperties {
	}
	export function CreateLogProfileResourceFormGroup() {
		return new FormGroup<LogProfileResourceFormProperties>({
		});

	}


	/** The log profile properties. */
	export interface LogProfileProperties {

		/**
		 * the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
		 * Required
		 */
		categories: Array<string>;

		/**
		 * List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
		 * Required
		 */
		locations: Array<string>;

		/**
		 * Specifies the retention policy for the log.
		 * Required
		 */
		retentionPolicy: RetentionPolicy;

		/** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'. */
		serviceBusRuleId?: string | null;

		/** the resource id of the storage account to which you would like to send the Activity Log. */
		storageAccountId?: string | null;
	}

	/** The log profile properties. */
	export interface LogProfilePropertiesFormProperties {

		/** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'. */
		serviceBusRuleId: FormControl<string | null | undefined>,

		/** the resource id of the storage account to which you would like to send the Activity Log. */
		storageAccountId: FormControl<string | null | undefined>,
	}
	export function CreateLogProfilePropertiesFormGroup() {
		return new FormGroup<LogProfilePropertiesFormProperties>({
			serviceBusRuleId: new FormControl<string | null | undefined>(undefined),
			storageAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The log profile resource for patch operations. */
	export interface LogProfileResourcePatch {

		/** The log profile properties. */
		properties?: LogProfileProperties;

		/** Resource tags */
		tags?: any;
	}

	/** The log profile resource for patch operations. */
	export interface LogProfileResourcePatchFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateLogProfileResourcePatchFormGroup() {
		return new FormGroup<LogProfileResourcePatchFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** An azure resource object */
	export interface Resource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the retention policy for the log. */
	export interface RetentionPolicy {

		/**
		 * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
		 * Required
		 * Minimum: 0
		 */
		days: number;

		/**
		 * a value indicating whether the retention policy is enabled.
		 * Required
		 */
		enabled: boolean;
	}

	/** Specifies the retention policy for the log. */
	export interface RetentionPolicyFormProperties {

		/**
		 * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
		 * Required
		 * Minimum: 0
		 */
		days: FormControl<number | null | undefined>,

		/**
		 * a value indicating whether the retention policy is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRetentionPolicyFormGroup() {
		return new FormGroup<RetentionPolicyFormProperties>({
			days: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List the log profiles.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {LogProfileCollection} Successful request to list log profiles
		 */
		LogProfiles_List(api_version: string, subscriptionId: string): Observable<LogProfileCollection> {
			return this.http.get<LogProfileCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/logprofiles?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the log profile.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName}
		 * @param {string} logProfileName The name of the log profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {LogProfileResource} Successful request to get more information about a log profile.
		 */
		LogProfiles_Get(logProfileName: string, api_version: string, subscriptionId: string): Observable<LogProfileResource> {
			return this.http.get<LogProfileResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/logprofiles/' + (logProfileName == null ? '' : encodeURIComponent(logProfileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a log profile in Azure Monitoring REST API.
		 * Put subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName}
		 * @param {string} logProfileName The name of the log profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {LogProfileResource} requestBody Parameters supplied to the operation.
		 * @return {LogProfileResource} Successful request to create or update a log profile
		 */
		LogProfiles_CreateOrUpdate(logProfileName: string, api_version: string, subscriptionId: string, requestBody: LogProfileResource): Observable<LogProfileResource> {
			return this.http.put<LogProfileResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/logprofiles/' + (logProfileName == null ? '' : encodeURIComponent(logProfileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the log profile.
		 * Delete subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName}
		 * @param {string} logProfileName The name of the log profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {void} Successful request to delete a log profile
		 */
		LogProfiles_Delete(logProfileName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/logprofiles/' + (logProfileName == null ? '' : encodeURIComponent(logProfileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing LogProfilesResource. To update other fields use the CreateOrUpdate method.
		 * Patch subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} logProfileName The name of the log profile.
		 * @param {string} api_version Client Api Version.
		 * @param {LogProfileResourcePatch} requestBody Parameters supplied to the operation.
		 * @return {LogProfileResource} An existing log profile was successfully updated.
		 */
		LogProfiles_Update(subscriptionId: string, logProfileName: string, api_version: string, requestBody: LogProfileResourcePatch): Observable<LogProfileResource> {
			return this.http.patch<LogProfileResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/logprofiles/' + (logProfileName == null ? '' : encodeURIComponent(logProfileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

