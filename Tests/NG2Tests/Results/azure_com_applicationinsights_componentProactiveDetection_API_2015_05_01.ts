import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Properties that define a ProactiveDetection configuration. */
	export interface ApplicationInsightsComponentProactiveDetectionConfiguration {

		/** Custom email addresses for this rule notifications */
		CustomEmails?: Array<string>;

		/** A flag that indicates whether this rule is enabled by the user */
		Enabled?: boolean | null;

		/** The last time this rule was updated */
		LastUpdatedTime?: string | null;

		/** The rule name */
		Name?: string | null;

		/** Static definitions of the ProactiveDetection configuration rule (same values for all components). */
		RuleDefinitions?: ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions;

		/** A flag that indicated whether notifications on this rule should be sent to subscription owners */
		SendEmailsToSubscriptionOwners?: boolean | null;
	}

	/** Properties that define a ProactiveDetection configuration. */
	export interface ApplicationInsightsComponentProactiveDetectionConfigurationFormProperties {

		/** A flag that indicates whether this rule is enabled by the user */
		Enabled: FormControl<boolean | null | undefined>,

		/** The last time this rule was updated */
		LastUpdatedTime: FormControl<string | null | undefined>,

		/** The rule name */
		Name: FormControl<string | null | undefined>,

		/** A flag that indicated whether notifications on this rule should be sent to subscription owners */
		SendEmailsToSubscriptionOwners: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationInsightsComponentProactiveDetectionConfigurationFormGroup() {
		return new FormGroup<ApplicationInsightsComponentProactiveDetectionConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SendEmailsToSubscriptionOwners: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions {

		/** The rule description */
		Description?: string | null;

		/** The rule name as it is displayed in UI */
		DisplayName?: string | null;

		/** URL which displays additional info about the proactive detection rule */
		HelpUrl?: string | null;

		/** A flag indicating whether the rule is enabled by default */
		IsEnabledByDefault?: boolean | null;

		/** A flag indicating whether the rule is hidden (from the UI) */
		IsHidden?: boolean | null;

		/** A flag indicating whether the rule is in preview */
		IsInPreview?: boolean | null;

		/** The rule name */
		Name?: string | null;

		/** A flag indicating whether email notifications are supported for detections for this rule */
		SupportsEmailNotifications?: boolean | null;
	}
	export interface ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitionsFormProperties {

		/** The rule description */
		Description: FormControl<string | null | undefined>,

		/** The rule name as it is displayed in UI */
		DisplayName: FormControl<string | null | undefined>,

		/** URL which displays additional info about the proactive detection rule */
		HelpUrl: FormControl<string | null | undefined>,

		/** A flag indicating whether the rule is enabled by default */
		IsEnabledByDefault: FormControl<boolean | null | undefined>,

		/** A flag indicating whether the rule is hidden (from the UI) */
		IsHidden: FormControl<boolean | null | undefined>,

		/** A flag indicating whether the rule is in preview */
		IsInPreview: FormControl<boolean | null | undefined>,

		/** The rule name */
		Name: FormControl<string | null | undefined>,

		/** A flag indicating whether email notifications are supported for detections for this rule */
		SupportsEmailNotifications: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitionsFormGroup() {
		return new FormGroup<ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitionsFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			HelpUrl: new FormControl<string | null | undefined>(undefined),
			IsEnabledByDefault: new FormControl<boolean | null | undefined>(undefined),
			IsHidden: new FormControl<boolean | null | undefined>(undefined),
			IsInPreview: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SupportsEmailNotifications: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of ProactiveDetection configurations of an Application Insights component.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @return {Array<ApplicationInsightsComponentProactiveDetectionConfiguration>} A list containing 0 or more ProactiveDetection configurations of an Application Insights component.
		 */
		ProactiveDetectionConfigurations_List(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string): Observable<Array<ApplicationInsightsComponentProactiveDetectionConfiguration>> {
			return this.http.get<Array<ApplicationInsightsComponentProactiveDetectionConfiguration>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/ProactiveDetectionConfigs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the ProactiveDetection configuration for this configuration id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs/{ConfigurationId}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {string} ConfigurationId The ProactiveDetection configuration ID. This is unique within a Application Insights component.
		 * @return {ApplicationInsightsComponentProactiveDetectionConfiguration} The ProactiveDetection configuration for this configuration id.
		 */
		ProactiveDetectionConfigurations_Get(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, ConfigurationId: string): Observable<ApplicationInsightsComponentProactiveDetectionConfiguration> {
			return this.http.get<ApplicationInsightsComponentProactiveDetectionConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/ProactiveDetectionConfigs/' + (ConfigurationId == null ? '' : encodeURIComponent(ConfigurationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update the ProactiveDetection configuration for this configuration id.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs/{ConfigurationId}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {string} ConfigurationId The ProactiveDetection configuration ID. This is unique within a Application Insights component.
		 * @param {ApplicationInsightsComponentProactiveDetectionConfiguration} requestBody Properties that need to be specified to update the ProactiveDetection configuration.
		 * @return {ApplicationInsightsComponentProactiveDetectionConfiguration} The ProactiveDetection configuration that was successfully updated.
		 */
		ProactiveDetectionConfigurations_Update(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, ConfigurationId: string, requestBody: ApplicationInsightsComponentProactiveDetectionConfiguration): Observable<ApplicationInsightsComponentProactiveDetectionConfiguration> {
			return this.http.put<ApplicationInsightsComponentProactiveDetectionConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/ProactiveDetectionConfigs/' + (ConfigurationId == null ? '' : encodeURIComponent(ConfigurationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

