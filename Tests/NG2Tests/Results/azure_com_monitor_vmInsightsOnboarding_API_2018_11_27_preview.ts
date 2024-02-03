import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about a container with data for a given resource. */
	export interface DataContainer {

		/**
		 * Information about a Log Analytics Workspace.
		 * Required
		 */
		workspace: WorkspaceInfo;
	}

	/** Information about a container with data for a given resource. */
	export interface DataContainerFormProperties {
	}
	export function CreateDataContainerFormGroup() {
		return new FormGroup<DataContainerFormProperties>({
		});

	}


	/** Information about a Log Analytics Workspace. */
	export interface WorkspaceInfo {

		/**
		 * Azure Resource Manager identifier of the Log Analytics Workspace.
		 * Required
		 */
		id: string;

		/**
		 * Location of the Log Analytics workspace.
		 * Required
		 */
		location: string;

		/**
		 * Resource properties.
		 * Required
		 */
		properties: WorkspaceInfoProperties;
	}

	/** Information about a Log Analytics Workspace. */
	export interface WorkspaceInfoFormProperties {

		/**
		 * Azure Resource Manager identifier of the Log Analytics Workspace.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Location of the Log Analytics workspace.
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceInfoFormGroup() {
		return new FormGroup<WorkspaceInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WorkspaceInfoProperties {

		/**
		 * Log Analytics workspace identifier.
		 * Required
		 */
		customerId: string;
	}
	export interface WorkspaceInfoPropertiesFormProperties {

		/**
		 * Log Analytics workspace identifier.
		 * Required
		 */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceInfoPropertiesFormGroup() {
		return new FormGroup<WorkspaceInfoPropertiesFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error details. */
	export interface Error {

		/**
		 * Error code identifying the specific error.
		 * Required
		 */
		code: string;

		/** Error message in the caller's locale. */
		message?: string | null;
	}

	/** Error details. */
	export interface ErrorFormProperties {

		/**
		 * Error code identifying the specific error.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Error message in the caller's locale. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An azure resource object */
	export interface ProxyResource {

		/** Azure resource Id */
		id?: string | null;

		/** Azure resource name */
		name?: string | null;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ProxyResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the API. */
	export interface ResponseWithError {

		/**
		 * Error details.
		 * Required
		 */
		error: Error;
	}

	/** An error response from the API. */
	export interface ResponseWithErrorFormProperties {
	}
	export function CreateResponseWithErrorFormGroup() {
		return new FormGroup<ResponseWithErrorFormProperties>({
		});

	}


	/** VM Insights onboarding status for a resource. */
	export interface VMInsightsOnboardingStatus extends ProxyResource {

		/** Resource properties. */
		properties?: VMInsightsOnboardingStatusProperties;
	}

	/** VM Insights onboarding status for a resource. */
	export interface VMInsightsOnboardingStatusFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateVMInsightsOnboardingStatusFormGroup() {
		return new FormGroup<VMInsightsOnboardingStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VMInsightsOnboardingStatusProperties {

		/** Containers that currently store VM Insights data for the specified resource. */
		data?: Array<DataContainer>;

		/**
		 * The status of VM Insights data from the resource. When reported as `present` the data array will contain information about the data containers to which data for the specified resource is being routed.
		 * Required
		 */
		dataStatus: VMInsightsOnboardingStatusPropertiesDataStatus;

		/**
		 * The onboarding status for the resource. Note that, a higher level scope, e.g., resource group or subscription, is considered onboarded if at least one resource under it is onboarded.
		 * Required
		 */
		onboardingStatus: VMInsightsOnboardingStatusPropertiesOnboardingStatus;

		/**
		 * Azure Resource Manager identifier of the resource whose onboarding status is being represented.
		 * Required
		 */
		resourceId: string;
	}
	export interface VMInsightsOnboardingStatusPropertiesFormProperties {

		/**
		 * The status of VM Insights data from the resource. When reported as `present` the data array will contain information about the data containers to which data for the specified resource is being routed.
		 * Required
		 */
		dataStatus: FormControl<VMInsightsOnboardingStatusPropertiesDataStatus | null | undefined>,

		/**
		 * The onboarding status for the resource. Note that, a higher level scope, e.g., resource group or subscription, is considered onboarded if at least one resource under it is onboarded.
		 * Required
		 */
		onboardingStatus: FormControl<VMInsightsOnboardingStatusPropertiesOnboardingStatus | null | undefined>,

		/**
		 * Azure Resource Manager identifier of the resource whose onboarding status is being represented.
		 * Required
		 */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateVMInsightsOnboardingStatusPropertiesFormGroup() {
		return new FormGroup<VMInsightsOnboardingStatusPropertiesFormProperties>({
			dataStatus: new FormControl<VMInsightsOnboardingStatusPropertiesDataStatus | null | undefined>(undefined, [Validators.required]),
			onboardingStatus: new FormControl<VMInsightsOnboardingStatusPropertiesOnboardingStatus | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VMInsightsOnboardingStatusPropertiesDataStatus { present = 'present', notPresent = 'notPresent' }

	export enum VMInsightsOnboardingStatusPropertiesOnboardingStatus { onboarded = 'onboarded', notOnboarded = 'notOnboarded', unknown = 'unknown' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the VM Insights onboarding status for the specified resource or resource scope.
		 * Get {resourceUri}/providers/Microsoft.Insights/vmInsightsOnboardingStatuses/default
		 * @param {string} api_version API version.
		 * @param {string} resourceUri The fully qualified Azure Resource manager identifier of the resource, or scope, whose status to retrieve.
		 * @return {VMInsightsOnboardingStatus} The operation completed successfully.
		 */
		VMInsights_GetOnboardingStatus(api_version: string, resourceUri: string): Observable<VMInsightsOnboardingStatus> {
			return this.http.get<VMInsightsOnboardingStatus>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.Insights/vmInsightsOnboardingStatuses/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

