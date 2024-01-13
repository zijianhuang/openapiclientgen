import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The properties of the Canonical support plan. */
	export interface CanonicalSupportPlanProperties {

		/** The provisioning state of the resource. */
		provisioningState?: CanonicalSupportPlanPropertiesProvisioningState | null;
	}

	/** The properties of the Canonical support plan. */
	export interface CanonicalSupportPlanPropertiesFormProperties {

		/** The provisioning state of the resource. */
		provisioningState: FormControl<CanonicalSupportPlanPropertiesProvisioningState | null | undefined>,
	}
	export function CreateCanonicalSupportPlanPropertiesFormGroup() {
		return new FormGroup<CanonicalSupportPlanPropertiesFormProperties>({
			provisioningState: new FormControl<CanonicalSupportPlanPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum CanonicalSupportPlanPropertiesProvisioningState { Succeeded = 0, Failed = 1, Cancelled = 2, Purchasing = 3, Downgrading = 4, Cancelling = 5, Upgrading = 6 }


	/** The status of the Canonical support plan. */
	export interface CanonicalSupportPlanResponseEnvelope {

		/** The id of the ARM resource, e.g. "/subscriptions/{id}/providers/Microsoft.Addons/supportProvider/{supportProviderName}/supportPlanTypes/{planTypeName}". */
		id?: string | null;

		/** The name of the Canonical support plan, i.e. "essential", "standard" or "advanced". */
		name?: string | null;

		/**
		 * The properties of the Canonical support plan.
		 * Required
		 */
		properties: CanonicalSupportPlanProperties;

		/** Microsoft.Addons/supportProvider */
		type?: string | null;
	}

	/** The status of the Canonical support plan. */
	export interface CanonicalSupportPlanResponseEnvelopeFormProperties {

		/** The id of the ARM resource, e.g. "/subscriptions/{id}/providers/Microsoft.Addons/supportProvider/{supportProviderName}/supportPlanTypes/{planTypeName}". */
		id: FormControl<string | null | undefined>,

		/** The name of the Canonical support plan, i.e. "essential", "standard" or "advanced". */
		name: FormControl<string | null | undefined>,

		/** Microsoft.Addons/supportProvider */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCanonicalSupportPlanResponseEnvelopeFormGroup() {
		return new FormGroup<CanonicalSupportPlanResponseEnvelopeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CanonicalSupportPlanStatusElement {

		/** Whether the support plan is enabled for this subscription. */
		enabled?: boolean | null;

		/** Support plan type. */
		supportPlanType?: CanonicalSupportPlanStatusElementSupportPlanType | null;

		/** This indicates that when this support plan is cancelled and then enabled that AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeIfReEnabled?: boolean | null;

		/** This indicates that when this support plan is enabled if AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeWhenEnabled?: boolean | null;
	}
	export interface CanonicalSupportPlanStatusElementFormProperties {

		/** Whether the support plan is enabled for this subscription. */
		enabled: FormControl<boolean | null | undefined>,

		/** Support plan type. */
		supportPlanType: FormControl<CanonicalSupportPlanStatusElementSupportPlanType | null | undefined>,

		/** This indicates that when this support plan is cancelled and then enabled that AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeIfReEnabled: FormControl<boolean | null | undefined>,

		/** This indicates that when this support plan is enabled if AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeWhenEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCanonicalSupportPlanStatusElementFormGroup() {
		return new FormGroup<CanonicalSupportPlanStatusElementFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			supportPlanType: new FormControl<CanonicalSupportPlanStatusElementSupportPlanType | null | undefined>(undefined),
			willEmitOneTimeChargeIfReEnabled: new FormControl<boolean | null | undefined>(undefined),
			willEmitOneTimeChargeWhenEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CanonicalSupportPlanStatusElementSupportPlanType { essential = 0, standard = 1, advanced = 2 }


	/** Error description and code explaining why an operation failed. */
	export interface ErrorDefinition {

		/**
		 * Service specific error code which serves as the substatus for the HTTP error code.
		 * Required
		 * Minimum: 100
		 * Maximum: 600
		 */
		code: number;

		/**
		 * Description of the error.
		 * Required
		 */
		message: string;
	}

	/** Error description and code explaining why an operation failed. */
	export interface ErrorDefinitionFormProperties {

		/**
		 * Service specific error code which serves as the substatus for the HTTP error code.
		 * Required
		 * Minimum: 100
		 * Maximum: 600
		 */
		code: FormControl<number | null | undefined>,

		/**
		 * Description of the error.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDefinitionFormGroup() {
		return new FormGroup<ErrorDefinitionFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(100), Validators.max(600)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Definition object with the name and properties of an operation. */
	export interface OperationsDefinition {

		/** Display object with properties of the operation. */
		display?: OperationsDisplayDefinition;

		/** Name of the operation. */
		name?: string | null;
	}

	/** Definition object with the name and properties of an operation. */
	export interface OperationsDefinitionFormProperties {

		/** Name of the operation. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationsDefinitionFormGroup() {
		return new FormGroup<OperationsDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Display object with properties of the operation. */
	export interface OperationsDisplayDefinition {

		/** Description of the operation. */
		description?: string | null;

		/** Short description of the operation. */
		operation?: string | null;

		/** Resource provider of the operation. */
		provider?: string | null;

		/** Resource for the operation. */
		resource?: string | null;
	}

	/** Display object with properties of the operation. */
	export interface OperationsDisplayDefinitionFormProperties {

		/** Description of the operation. */
		description: FormControl<string | null | undefined>,

		/** Short description of the operation. */
		operation: FormControl<string | null | undefined>,

		/** Resource provider of the operation. */
		provider: FormControl<string | null | undefined>,

		/** Resource for the operation. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationsDisplayDefinitionFormGroup() {
		return new FormGroup<OperationsDisplayDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Addons RP operations.
		 * Get providers/Microsoft.Addons/operations
		 * @param {string} api_version Client API version.
		 * @return {Array<OperationsDefinition>} List all the operations.
		 */
		Operations_List(api_version: string): Observable<Array<OperationsDefinition>> {
			return this.http.get<Array<OperationsDefinition>>(this.baseUri + 'providers/Microsoft.Addons/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the Canonical Support Plans.
		 * Returns the Canonical Support Plans as well as whether they are enabled or not for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/{providerName}/supportPlanTypes
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} providerName The support plan type. For now the only valid type is "canonical".
		 * @return {Array<CanonicalSupportPlanTypes_GetReturn>} OK
		 */
		CanonicalSupportPlanTypes_Get(api_version: string, subscriptionId: string, providerName: string): Observable<Array<CanonicalSupportPlanTypes_GetReturn>> {
			return this.http.get<Array<CanonicalSupportPlanTypes_GetReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Addons/supportProviders/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/supportPlanTypes?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns whether or not the canonical support plan of type {type} is enabled for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/{providerName}/supportPlanTypes/{planTypeName}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} providerName The support plan type. For now the only valid type is "canonical".
		 * @param {SupportPlanTypes_GetPlanTypeName} planTypeName The Canonical support plan type.
		 * @return {CanonicalSupportPlanResponseEnvelope} OK
		 */
		SupportPlanTypes_Get(api_version: string, subscriptionId: string, providerName: string, planTypeName: SupportPlanTypes_GetPlanTypeName): Observable<CanonicalSupportPlanResponseEnvelope> {
			return this.http.get<CanonicalSupportPlanResponseEnvelope>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Addons/supportProviders/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/supportPlanTypes/' + planTypeName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the Canonical support plan of type {type} for the subscription.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/{providerName}/supportPlanTypes/{planTypeName}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} providerName The support plan type. For now the only valid type is "canonical".
		 * @param {SupportPlanTypes_GetPlanTypeName} planTypeName The Canonical support plan type.
		 * @return {CanonicalSupportPlanResponseEnvelope} OK
		 */
		SupportPlanTypes_CreateOrUpdate(api_version: string, subscriptionId: string, providerName: string, planTypeName: SupportPlanTypes_GetPlanTypeName): Observable<CanonicalSupportPlanResponseEnvelope> {
			return this.http.put<CanonicalSupportPlanResponseEnvelope>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Addons/supportProviders/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/supportPlanTypes/' + planTypeName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Cancels the Canonical support plan of type {type} for the subscription.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/{providerName}/supportPlanTypes/{planTypeName}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} providerName The support plan type. For now the only valid type is "canonical".
		 * @param {SupportPlanTypes_GetPlanTypeName} planTypeName The Canonical support plan type.
		 * @return {void} 
		 */
		SupportPlanTypes_Delete(api_version: string, subscriptionId: string, providerName: string, planTypeName: SupportPlanTypes_GetPlanTypeName): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Addons/supportProviders/' + (providerName == null ? '' : encodeURIComponent(providerName)) + '/supportPlanTypes/' + planTypeName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CanonicalSupportPlanTypes_GetReturn {

		/** Whether the support plan is enabled for this subscription. */
		enabled?: boolean | null;

		/** Support plan type. */
		supportPlanType?: CanonicalSupportPlanStatusElementSupportPlanType | null;

		/** This indicates that when this support plan is cancelled and then enabled that AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeIfReEnabled?: boolean | null;

		/** This indicates that when this support plan is enabled if AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeWhenEnabled?: boolean | null;
	}
	export interface CanonicalSupportPlanTypes_GetReturnFormProperties {

		/** Whether the support plan is enabled for this subscription. */
		enabled: FormControl<boolean | null | undefined>,

		/** Support plan type. */
		supportPlanType: FormControl<CanonicalSupportPlanStatusElementSupportPlanType | null | undefined>,

		/** This indicates that when this support plan is cancelled and then enabled that AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeIfReEnabled: FormControl<boolean | null | undefined>,

		/** This indicates that when this support plan is enabled if AddonsRP will emit a one-time charge. */
		willEmitOneTimeChargeWhenEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCanonicalSupportPlanTypes_GetReturnFormGroup() {
		return new FormGroup<CanonicalSupportPlanTypes_GetReturnFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			supportPlanType: new FormControl<CanonicalSupportPlanStatusElementSupportPlanType | null | undefined>(undefined),
			willEmitOneTimeChargeIfReEnabled: new FormControl<boolean | null | undefined>(undefined),
			willEmitOneTimeChargeWhenEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SupportPlanTypes_GetPlanTypeName { Essential = 0, Standard = 1, Advanced = 2 }

}

