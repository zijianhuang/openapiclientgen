import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Application Insights component pricing plan */
	export interface ApplicationInsightsComponentPricingPlan {

		/** An Application Insights component daily data volume cap */
		properties?: PricingPlanProperties;
	}

	/** An Application Insights component pricing plan */
	export interface ApplicationInsightsComponentPricingPlanFormProperties {
	}
	export function CreateApplicationInsightsComponentPricingPlanFormGroup() {
		return new FormGroup<ApplicationInsightsComponentPricingPlanFormProperties>({
		});

	}


	/** An Application Insights component daily data volume cap */
	export interface PricingPlanProperties {

		/**
		 * Daily data volume cap in GB.
		 * Type: double
		 */
		cap?: number | null;

		/**
		 * Maximum daily data volume cap that the user can set for this component.
		 * Type: double
		 */
		maxHistoryCap?: number | null;

		/** Pricing Plan Type Name. */
		planType?: string | null;

		/**
		 * Daily data volume cap UTC reset hour.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resetHour?: number | null;

		/** Do not send a notification email when the daily data volume cap is met. */
		stopSendNotificationWhenHitCap?: boolean | null;

		/** Reserved, not used for now. */
		stopSendNotificationWhenHitThreshold?: boolean | null;

		/**
		 * Reserved, not used for now.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		warningThreshold?: number | null;
	}

	/** An Application Insights component daily data volume cap */
	export interface PricingPlanPropertiesFormProperties {

		/**
		 * Daily data volume cap in GB.
		 * Type: double
		 */
		cap: FormControl<number | null | undefined>,

		/**
		 * Maximum daily data volume cap that the user can set for this component.
		 * Type: double
		 */
		maxHistoryCap: FormControl<number | null | undefined>,

		/** Pricing Plan Type Name. */
		planType: FormControl<string | null | undefined>,

		/**
		 * Daily data volume cap UTC reset hour.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resetHour: FormControl<number | null | undefined>,

		/** Do not send a notification email when the daily data volume cap is met. */
		stopSendNotificationWhenHitCap: FormControl<boolean | null | undefined>,

		/** Reserved, not used for now. */
		stopSendNotificationWhenHitThreshold: FormControl<boolean | null | undefined>,

		/**
		 * Reserved, not used for now.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		warningThreshold: FormControl<number | null | undefined>,
	}
	export function CreatePricingPlanPropertiesFormGroup() {
		return new FormGroup<PricingPlanPropertiesFormProperties>({
			cap: new FormControl<number | null | undefined>(undefined),
			maxHistoryCap: new FormControl<number | null | undefined>(undefined),
			planType: new FormControl<string | null | undefined>(undefined),
			resetHour: new FormControl<number | null | undefined>(undefined),
			stopSendNotificationWhenHitCap: new FormControl<boolean | null | undefined>(undefined),
			stopSendNotificationWhenHitThreshold: new FormControl<boolean | null | undefined>(undefined),
			warningThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** Azure resource Id. */
		id?: string | null;

		/** Azure resource name. */
		name?: string | null;

		/** Azure resource type. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** Azure resource Id. */
		id: FormControl<string | null | undefined>,

		/** Azure resource name. */
		name: FormControl<string | null | undefined>,

		/** Azure resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the current pricing plan setting for an Application Insights component.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @return {ApplicationInsightsComponentPricingPlan} An Application Insights component pricing plan definition.
		 */
		ComponentCurrentPricingPlan_Get(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string): Observable<ApplicationInsightsComponentPricingPlan> {
			return this.http.get<ApplicationInsightsComponentPricingPlan>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/pricingPlans/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Replace current pricing plan for an Application Insights component.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {ApplicationInsightsComponentPricingPlan} requestBody Properties that need to be specified to update current pricing plan for an Application Insights component.
		 * @return {ApplicationInsightsComponentPricingPlan} Successful request when updating billing features for an Application Insights component. The updated current billing features are returned.
		 */
		ComponentCurrentPricingPlan_CreateAndUpdate(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, requestBody: ApplicationInsightsComponentPricingPlan): Observable<ApplicationInsightsComponentPricingPlan> {
			return this.http.put<ApplicationInsightsComponentPricingPlan>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/pricingPlans/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update current pricing plan for an Application Insights component.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {ApplicationInsightsComponentPricingPlan} requestBody Properties that need to be specified to update current pricing plan for an Application Insights component.
		 * @return {ApplicationInsightsComponentPricingPlan} Successful request when updating billing features for an Application Insights component. The updated current billing features are returned.
		 */
		ComponentCurrentPricingPlan_Update(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, requestBody: ApplicationInsightsComponentPricingPlan): Observable<ApplicationInsightsComponentPricingPlan> {
			return this.http.patch<ApplicationInsightsComponentPricingPlan>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/pricingPlans/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

