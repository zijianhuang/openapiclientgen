import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The Advanced Threat Protection settings. */
	export interface AdvancedThreatProtectionProperties {

		/** Indicates whether Advanced Threat Protection is enabled. */
		isEnabled?: boolean | null;
	}

	/** The Advanced Threat Protection settings. */
	export interface AdvancedThreatProtectionPropertiesFormProperties {

		/** Indicates whether Advanced Threat Protection is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedThreatProtectionPropertiesFormGroup() {
		return new FormGroup<AdvancedThreatProtectionPropertiesFormProperties>({
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Advanced Threat Protection resource. */
	export interface AdvancedThreatProtectionSetting {

		/** The Advanced Threat Protection settings. */
		properties?: AdvancedThreatProtectionProperties;
	}

	/** The Advanced Threat Protection resource. */
	export interface AdvancedThreatProtectionSettingFormProperties {
	}
	export function CreateAdvancedThreatProtectionSettingFormGroup() {
		return new FormGroup<AdvancedThreatProtectionSettingFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the Advanced Threat Protection settings for the specified resource.
		 * Get {resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {AdvancedThreatProtection_GetSettingName} settingName Advanced Threat Protection setting name.
		 * @return {AdvancedThreatProtectionSetting} Successful request to get Advanced Threat Protection settings.
		 */
		AdvancedThreatProtection_Get(api_version: string, resourceId: string, settingName: AdvancedThreatProtection_GetSettingName): Observable<AdvancedThreatProtectionSetting> {
			return this.http.get<AdvancedThreatProtectionSetting>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/advancedThreatProtectionSettings/' + settingName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates the Advanced Threat Protection settings on a specified resource.
		 * Put {resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {AdvancedThreatProtection_GetSettingName} settingName Advanced Threat Protection setting name.
		 * @param {AdvancedThreatProtectionSetting} requestBody Advanced Threat Protection Settings
		 * @return {AdvancedThreatProtectionSetting} Successful request to put Advanced Threat Protection settings.
		 */
		AdvancedThreatProtection_Create(api_version: string, resourceId: string, settingName: AdvancedThreatProtection_GetSettingName, requestBody: AdvancedThreatProtectionSetting): Observable<AdvancedThreatProtectionSetting> {
			return this.http.put<AdvancedThreatProtectionSetting>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/advancedThreatProtectionSettings/' + settingName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AdvancedThreatProtection_GetSettingName { current = 0 }

}

