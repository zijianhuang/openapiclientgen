import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Action Plan Properties */
	export interface ActionPlanAdminProperties {

		/** Action plan instance identifier */
		actionPlanInstanceId?: string | null;

		/** Action plan uri */
		actionPlanUri?: string | null;

		/** Blob container name storing the deployment data */
		blobContainerName?: string | null;

		/** The deployment end time */
		endTime?: Date | null;

		/** Error information */
		error?: ActionPlanAdminPropertiesError;

		/** Error information */
		parameters?: ActionPlanAdminPropertiesParameters;

		/** The provisioning state */
		provisioningState?: string | null;

		/** The target resource group name */
		resourceGroupName?: string | null;

		/** The deployment start time */
		startTime?: Date | null;

		/** The target subscription identifier */
		subscriptionId?: string | null;
	}

	/** Action Plan Properties */
	export interface ActionPlanAdminPropertiesFormProperties {

		/** Action plan instance identifier */
		actionPlanInstanceId: FormControl<string | null | undefined>,

		/** Action plan uri */
		actionPlanUri: FormControl<string | null | undefined>,

		/** Blob container name storing the deployment data */
		blobContainerName: FormControl<string | null | undefined>,

		/** The deployment end time */
		endTime: FormControl<Date | null | undefined>,

		/** The provisioning state */
		provisioningState: FormControl<string | null | undefined>,

		/** The target resource group name */
		resourceGroupName: FormControl<string | null | undefined>,

		/** The deployment start time */
		startTime: FormControl<Date | null | undefined>,

		/** The target subscription identifier */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanAdminPropertiesFormGroup() {
		return new FormGroup<ActionPlanAdminPropertiesFormProperties>({
			actionPlanInstanceId: new FormControl<string | null | undefined>(undefined),
			actionPlanUri: new FormControl<string | null | undefined>(undefined),
			blobContainerName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionPlanAdminPropertiesError {

		/** Error Code */
		code?: string | null;
		details?: ExtendedErrorInfo;

		/** Error Message */
		message?: string | null;
	}
	export interface ActionPlanAdminPropertiesErrorFormProperties {

		/** Error Code */
		code: FormControl<string | null | undefined>,

		/** Error Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanAdminPropertiesErrorFormGroup() {
		return new FormGroup<ActionPlanAdminPropertiesErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionPlanAdminPropertiesParameters {

		/** Parameters as JToken string */
		value?: string | null;
	}
	export interface ActionPlanAdminPropertiesParametersFormProperties {

		/** Parameters as JToken string */
		value: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanAdminPropertiesParametersFormGroup() {
		return new FormGroup<ActionPlanAdminPropertiesParametersFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of action plans */
	export interface ActionPlanList {

		/** Continuation token */
		nextLink?: string | null;

		/** Array of action plans. */
		value?: Array<ActionPlanResourceEntity>;
	}

	/** List of action plans */
	export interface ActionPlanListFormProperties {

		/** Continuation token */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanListFormGroup() {
		return new FormGroup<ActionPlanListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action Plan Resource Entity */
	export interface ActionPlanResourceEntity {

		/** Entity tag of the resource */
		eTag?: string | null;

		/** Action Plan Properties */
		properties?: ActionPlanAdminProperties;
	}

	/** Action Plan Resource Entity */
	export interface ActionPlanResourceEntityFormProperties {

		/** Entity tag of the resource */
		eTag: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanResourceEntityFormGroup() {
		return new FormGroup<ActionPlanResourceEntityFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExtendedErrorInfo {
	}
	export interface ExtendedErrorInfoFormProperties {
	}
	export function CreateExtendedErrorInfoFormGroup() {
		return new FormGroup<ExtendedErrorInfoFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of action plans
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {ActionPlanList} OK
		 */
		ActionPlans_List(subscriptionId: string, api_version: string): Observable<ActionPlanList> {
			return this.http.get<ActionPlanList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/actionPlans&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified action plan
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/{planId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} planId Identifier of the action plan.
		 * @param {string} api_version Client API Version.
		 * @return {ActionPlanResourceEntity} OK
		 */
		ActionPlans_Get(subscriptionId: string, planId: string, api_version: string): Observable<ActionPlanResourceEntity> {
			return this.http.get<ActionPlanResourceEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/' + (planId == null ? '' : encodeURIComponent(planId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

