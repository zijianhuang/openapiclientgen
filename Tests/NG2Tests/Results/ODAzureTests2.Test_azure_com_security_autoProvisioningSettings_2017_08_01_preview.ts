import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Auto provisioning setting */
	export interface AutoProvisioningSetting {

		/** describes properties of an auto provisioning setting */
		properties?: AutoProvisioningSettingProperties;
	}

	/** Auto provisioning setting */
	export interface AutoProvisioningSettingFormProperties {
	}
	export function CreateAutoProvisioningSettingFormGroup() {
		return new FormGroup<AutoProvisioningSettingFormProperties>({
		});

	}


	/** describes properties of an auto provisioning setting */
	export interface AutoProvisioningSettingProperties {

		/**
		 * Describes what kind of security agent provisioning action to take
		 * Required
		 */
		autoProvision: AutoProvisioningSettingPropertiesAutoProvision;
	}

	/** describes properties of an auto provisioning setting */
	export interface AutoProvisioningSettingPropertiesFormProperties {

		/**
		 * Describes what kind of security agent provisioning action to take
		 * Required
		 */
		autoProvision: FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>,
	}
	export function CreateAutoProvisioningSettingPropertiesFormGroup() {
		return new FormGroup<AutoProvisioningSettingPropertiesFormProperties>({
			autoProvision: new FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutoProvisioningSettingPropertiesAutoProvision { On = 0, Off = 1 }


	/** List of all the auto provisioning settings response */
	export interface AutoProvisioningSettingList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of all the auto provisioning settings */
		value?: Array<AutoProvisioningSetting>;
	}

	/** List of all the auto provisioning settings response */
	export interface AutoProvisioningSettingListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAutoProvisioningSettingListFormGroup() {
		return new FormGroup<AutoProvisioningSettingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Exposes the auto provisioning settings of the subscriptions
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {AutoProvisioningSettingList} OK
		 */
		AutoProvisioningSettings_List(api_version: string, subscriptionId: string): Observable<AutoProvisioningSettingList> {
			return this.http.get<AutoProvisioningSettingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/autoProvisioningSettings?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Details of a specific setting
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} settingName Auto provisioning setting key
		 * @return {AutoProvisioningSetting} OK
		 */
		AutoProvisioningSettings_Get(api_version: string, subscriptionId: string, settingName: string): Observable<AutoProvisioningSetting> {
			return this.http.get<AutoProvisioningSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/autoProvisioningSettings/' + (settingName == null ? '' : encodeURIComponent(settingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Details of a specific setting
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} settingName Auto provisioning setting key
		 * @param {AutoProvisioningSetting} requestBody Auto provisioning setting key
		 * @return {AutoProvisioningSetting} OK
		 */
		AutoProvisioningSettings_Create(api_version: string, subscriptionId: string, settingName: string, requestBody: AutoProvisioningSetting): Observable<AutoProvisioningSetting> {
			return this.http.put<AutoProvisioningSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/autoProvisioningSettings/' + (settingName == null ? '' : encodeURIComponent(settingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

