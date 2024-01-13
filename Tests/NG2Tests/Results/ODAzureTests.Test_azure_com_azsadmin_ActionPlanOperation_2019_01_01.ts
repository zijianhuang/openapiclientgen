import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Action Plan Operation Properties */
	export interface ActionPlanOperationAdminProperties {

		/** Action plan instance identifier */
		actionPlanInstanceId?: string | null;

		/** Action plan operation identifier */
		actionPlanOperationId?: string | null;

		/** Blob container name storing the deployment data */
		blobContainerName?: string | null;

		/** The operation description */
		description?: string | null;

		/** The deployment end time */
		endTime?: Date | null;

		/** Error information */
		error?: ActionPlanOperationAdminPropertiesError;

		/** The action plan operation outputs in JToken format */
		outputs?: string | null;

		/** The deployment parameters in JToken format */
		parameters?: string | null;

		/** The provisioning state */
		provisioningState?: string | null;

		/** The deployment start time */
		startTime?: Date | null;

		/** The target subscription identifier */
		subscriptionId?: string | null;

		/** The operation title */
		title?: string | null;

		/** Action plan operation type */
		type?: string | null;
	}

	/** Action Plan Operation Properties */
	export interface ActionPlanOperationAdminPropertiesFormProperties {

		/** Action plan instance identifier */
		actionPlanInstanceId: FormControl<string | null | undefined>,

		/** Action plan operation identifier */
		actionPlanOperationId: FormControl<string | null | undefined>,

		/** Blob container name storing the deployment data */
		blobContainerName: FormControl<string | null | undefined>,

		/** The operation description */
		description: FormControl<string | null | undefined>,

		/** The deployment end time */
		endTime: FormControl<Date | null | undefined>,

		/** The action plan operation outputs in JToken format */
		outputs: FormControl<string | null | undefined>,

		/** The deployment parameters in JToken format */
		parameters: FormControl<string | null | undefined>,

		/** The provisioning state */
		provisioningState: FormControl<string | null | undefined>,

		/** The deployment start time */
		startTime: FormControl<Date | null | undefined>,

		/** The target subscription identifier */
		subscriptionId: FormControl<string | null | undefined>,

		/** The operation title */
		title: FormControl<string | null | undefined>,

		/** Action plan operation type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanOperationAdminPropertiesFormGroup() {
		return new FormGroup<ActionPlanOperationAdminPropertiesFormProperties>({
			actionPlanInstanceId: new FormControl<string | null | undefined>(undefined),
			actionPlanOperationId: new FormControl<string | null | undefined>(undefined),
			blobContainerName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionPlanOperationAdminPropertiesError {

		/** Error Code */
		code?: string | null;
		details?: ExtendedErrorInfo;

		/** Error Message */
		message?: string | null;
	}
	export interface ActionPlanOperationAdminPropertiesErrorFormProperties {

		/** Error Code */
		code: FormControl<string | null | undefined>,

		/** Error Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanOperationAdminPropertiesErrorFormGroup() {
		return new FormGroup<ActionPlanOperationAdminPropertiesErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action Plan Operation Resource Entity */
	export interface ActionPlanOperationResourceEntity {

		/** Entity tag of the resource */
		eTag?: string | null;

		/** Action Plan Operation Properties */
		properties?: ActionPlanOperationAdminProperties;
	}

	/** Action Plan Operation Resource Entity */
	export interface ActionPlanOperationResourceEntityFormProperties {

		/** Entity tag of the resource */
		eTag: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanOperationResourceEntityFormGroup() {
		return new FormGroup<ActionPlanOperationResourceEntityFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of action plan operations */
	export interface ActionPlanOperationsList {

		/** Continuation token */
		nextLink?: string | null;

		/** Array of action plan operations. */
		value?: Array<ActionPlanOperationResourceEntity>;
	}

	/** List of action plan operations */
	export interface ActionPlanOperationsListFormProperties {

		/** Continuation token */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateActionPlanOperationsListFormGroup() {
		return new FormGroup<ActionPlanOperationsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
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
		 * Lists the action plan operations
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/{planId}/operations
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} planId Identifier of the action plan.
		 * @param {string} api_version Client API Version.
		 * @return {ActionPlanOperationsList} OK
		 */
		ActionPlanOperations_List(subscriptionId: string, planId: string, api_version: string): Observable<ActionPlanOperationsList> {
			return this.http.get<ActionPlanOperationsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/' + (planId == null ? '' : encodeURIComponent(planId)) + '/operations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified action plan operation
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/{planId}/operations/{operationId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} planId Identifier of the action plan.
		 * @param {string} operationId Identifier of the action plan operation.
		 * @param {string} api_version Client API Version.
		 * @return {ActionPlanOperationResourceEntity} OK
		 */
		ActionPlanOperations_Get(subscriptionId: string, planId: string, operationId: string, api_version: string): Observable<ActionPlanOperationResourceEntity> {
			return this.http.get<ActionPlanOperationResourceEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/' + (planId == null ? '' : encodeURIComponent(planId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

