import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response from ListSettings. */
	export interface GoogleCloudResourcesettingsV1ListSettingsResponse {

		/** Unused. A page token used to retrieve the next page. */
		nextPageToken?: string | null;

		/** A list of settings that are available at the specified Cloud resource. */
		settings?: Array<GoogleCloudResourcesettingsV1Setting>;
	}

	/** The response from ListSettings. */
	export interface GoogleCloudResourcesettingsV1ListSettingsResponseFormProperties {

		/** Unused. A page token used to retrieve the next page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudResourcesettingsV1ListSettingsResponseFormGroup() {
		return new FormGroup<GoogleCloudResourcesettingsV1ListSettingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schema for settings. */
	export interface GoogleCloudResourcesettingsV1Setting {

		/** The data in a setting value. */
		effectiveValue?: GoogleCloudResourcesettingsV1Value;

		/** A fingerprint used for optimistic concurrency. See UpdateSetting for more details. */
		etag?: string | null;

		/** The data in a setting value. */
		localValue?: GoogleCloudResourcesettingsV1Value;

		/** Metadata about a setting which is not editable by the end user. */
		metadata?: GoogleCloudResourcesettingsV1SettingMetadata;

		/** The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature" */
		name?: string | null;
	}

	/** The schema for settings. */
	export interface GoogleCloudResourcesettingsV1SettingFormProperties {

		/** A fingerprint used for optimistic concurrency. See UpdateSetting for more details. */
		etag: FormControl<string | null | undefined>,

		/** The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudResourcesettingsV1SettingFormGroup() {
		return new FormGroup<GoogleCloudResourcesettingsV1SettingFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data in a setting value. */
	export interface GoogleCloudResourcesettingsV1Value {

		/** Defines this value as being a boolean value. */
		booleanValue?: boolean | null;

		/** Defines this value as being a Duration. */
		durationValue?: string | null;

		/** A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions. */
		enumValue?: GoogleCloudResourcesettingsV1ValueEnumValue;

		/** A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map. */
		stringMapValue?: GoogleCloudResourcesettingsV1ValueStringMap;

		/** A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set. */
		stringSetValue?: GoogleCloudResourcesettingsV1ValueStringSet;

		/** Defines this value as being a string value. */
		stringValue?: string | null;
	}

	/** The data in a setting value. */
	export interface GoogleCloudResourcesettingsV1ValueFormProperties {

		/** Defines this value as being a boolean value. */
		booleanValue: FormControl<boolean | null | undefined>,

		/** Defines this value as being a Duration. */
		durationValue: FormControl<string | null | undefined>,

		/** Defines this value as being a string value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudResourcesettingsV1ValueFormGroup() {
		return new FormGroup<GoogleCloudResourcesettingsV1ValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			durationValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions. */
	export interface GoogleCloudResourcesettingsV1ValueEnumValue {

		/** The value of this enum */
		value?: string | null;
	}

	/** A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions. */
	export interface GoogleCloudResourcesettingsV1ValueEnumValueFormProperties {

		/** The value of this enum */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudResourcesettingsV1ValueEnumValueFormGroup() {
		return new FormGroup<GoogleCloudResourcesettingsV1ValueEnumValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map. */
	export interface GoogleCloudResourcesettingsV1ValueStringMap {

		/** The key-value pairs in the map */
		mappings?: {[id: string]: string };
	}

	/** A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map. */
	export interface GoogleCloudResourcesettingsV1ValueStringMapFormProperties {

		/** The key-value pairs in the map */
		mappings: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudResourcesettingsV1ValueStringMapFormGroup() {
		return new FormGroup<GoogleCloudResourcesettingsV1ValueStringMapFormProperties>({
			mappings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set. */
	export interface GoogleCloudResourcesettingsV1ValueStringSet {

		/** The strings in the set */
		values?: Array<string>;
	}

	/** A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set. */
	export interface GoogleCloudResourcesettingsV1ValueStringSetFormProperties {
	}
	export function CreateGoogleCloudResourcesettingsV1ValueStringSetFormGroup() {
		return new FormGroup<GoogleCloudResourcesettingsV1ValueStringSetFormProperties>({
		});

	}


	/** Metadata about a setting which is not editable by the end user. */
	export interface GoogleCloudResourcesettingsV1SettingMetadata {

		/** The data type for this setting. */
		dataType?: GoogleCloudResourcesettingsV1SettingMetadataDataType | null;

		/** The data in a setting value. */
		defaultValue?: GoogleCloudResourcesettingsV1Value;

		/** A detailed description of what this setting does. */
		description?: string | null;

		/** The human readable name for this setting. */
		displayName?: string | null;

		/** A flag indicating that values of this setting cannot be modified. See documentation for the specific setting for updates and reasons. */
		readOnly?: boolean | null;
	}

	/** Metadata about a setting which is not editable by the end user. */
	export interface GoogleCloudResourcesettingsV1SettingMetadataFormProperties {

		/** The data type for this setting. */
		dataType: FormControl<GoogleCloudResourcesettingsV1SettingMetadataDataType | null | undefined>,

		/** A detailed description of what this setting does. */
		description: FormControl<string | null | undefined>,

		/** The human readable name for this setting. */
		displayName: FormControl<string | null | undefined>,

		/** A flag indicating that values of this setting cannot be modified. See documentation for the specific setting for updates and reasons. */
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudResourcesettingsV1SettingMetadataFormGroup() {
		return new FormGroup<GoogleCloudResourcesettingsV1SettingMetadataFormProperties>({
			dataType: new FormControl<GoogleCloudResourcesettingsV1SettingMetadataDataType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudResourcesettingsV1SettingMetadataDataType { DATA_TYPE_UNSPECIFIED = 0, BOOLEAN = 1, STRING = 2, STRING_SET = 3, ENUM_VALUE = 4, DURATION_VALUE = 5, STRING_MAP = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the setting to get. See Setting for naming requirements.
		 * @param {Resourcesettings_projects_settings_getView} view The SettingView for this request.
		 * @return {GoogleCloudResourcesettingsV1Setting} Successful response
		 */
		Resourcesettings_projects_settings_get(name: string, view: Resourcesettings_projects_settings_getView | null | undefined): Observable<GoogleCloudResourcesettingsV1Setting> {
			return this.http.get<GoogleCloudResourcesettingsV1Setting>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature"
		 * @return {GoogleCloudResourcesettingsV1Setting} Successful response
		 */
		Resourcesettings_projects_settings_patch(name: string, requestBody: GoogleCloudResourcesettingsV1Setting): Observable<GoogleCloudResourcesettingsV1Setting> {
			return this.http.patch<GoogleCloudResourcesettingsV1Setting>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the settings that are available on the Cloud resource `parent`.
		 * Get v1/{parent}/settings
		 * @param {string} parent Required. The project, folder, or organization that is the parent resource for this setting. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
		 * @param {number} pageSize Unused. The size of the page to be returned.
		 * @param {string} pageToken Unused. A page token used to retrieve the next page.
		 * @param {Resourcesettings_projects_settings_getView} view The SettingView for this request.
		 * @return {GoogleCloudResourcesettingsV1ListSettingsResponse} Successful response
		 */
		Resourcesettings_projects_settings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Resourcesettings_projects_settings_getView | null | undefined): Observable<GoogleCloudResourcesettingsV1ListSettingsResponse> {
			return this.http.get<GoogleCloudResourcesettingsV1ListSettingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/settings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}
	}

	export enum Resourcesettings_projects_settings_getView { SETTING_VIEW_UNSPECIFIED = 0, SETTING_VIEW_BASIC = 1, SETTING_VIEW_EFFECTIVE_VALUE = 2, SETTING_VIEW_LOCAL_VALUE = 3 }

}

