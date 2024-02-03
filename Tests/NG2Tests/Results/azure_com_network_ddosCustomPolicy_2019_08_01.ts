import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the Batch service. */
	export interface CloudError {

		/** An error response from the Batch service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Batch service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DdosCustomPolicy {
	}
	export interface DdosCustomPolicyFormProperties {
	}
	export function CreateDdosCustomPolicyFormGroup() {
		return new FormGroup<DdosCustomPolicyFormProperties>({
		});

	}


	/** DDoS custom policy properties. */
	export interface DdosCustomPolicyPropertiesFormat {

		/** The protocol-specific DDoS policy customization parameters. */
		protocolCustomSettings?: Array<ProtocolCustomSettingsFormat>;

		/** The current provisioning state. */
		provisioningState?: DdosCustomPolicyPropertiesFormatProvisioningState | null;

		/** The list of public IPs associated with the DDoS custom policy resource. This list is read-only. */
		DdosCustomPolicyPropertiesFormatPublicIPAddresses?: Array<DdosCustomPolicyPropertiesFormatPublicIPAddresses>;

		/** The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. */
		resourceGuid?: string | null;
	}

	/** DDoS custom policy properties. */
	export interface DdosCustomPolicyPropertiesFormatFormProperties {

		/** The current provisioning state. */
		provisioningState: FormControl<DdosCustomPolicyPropertiesFormatProvisioningState | null | undefined>,

		/** The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. */
		resourceGuid: FormControl<string | null | undefined>,
	}
	export function CreateDdosCustomPolicyPropertiesFormatFormGroup() {
		return new FormGroup<DdosCustomPolicyPropertiesFormatFormProperties>({
			provisioningState: new FormControl<DdosCustomPolicyPropertiesFormatProvisioningState | null | undefined>(undefined),
			resourceGuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DDoS custom policy properties. */
	export interface ProtocolCustomSettingsFormat {

		/** The protocol for which the DDoS protection policy is being customized. */
		protocol?: ProtocolCustomSettingsFormatProtocol | null;

		/** The customized DDoS protection source rate. */
		sourceRateOverride?: string | null;

		/** The customized DDoS protection trigger rate. */
		triggerRateOverride?: string | null;

		/** The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic. */
		triggerSensitivityOverride?: ProtocolCustomSettingsFormatTriggerSensitivityOverride | null;
	}

	/** DDoS custom policy properties. */
	export interface ProtocolCustomSettingsFormatFormProperties {

		/** The protocol for which the DDoS protection policy is being customized. */
		protocol: FormControl<ProtocolCustomSettingsFormatProtocol | null | undefined>,

		/** The customized DDoS protection source rate. */
		sourceRateOverride: FormControl<string | null | undefined>,

		/** The customized DDoS protection trigger rate. */
		triggerRateOverride: FormControl<string | null | undefined>,

		/** The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic. */
		triggerSensitivityOverride: FormControl<ProtocolCustomSettingsFormatTriggerSensitivityOverride | null | undefined>,
	}
	export function CreateProtocolCustomSettingsFormatFormGroup() {
		return new FormGroup<ProtocolCustomSettingsFormatFormProperties>({
			protocol: new FormControl<ProtocolCustomSettingsFormatProtocol | null | undefined>(undefined),
			sourceRateOverride: new FormControl<string | null | undefined>(undefined),
			triggerRateOverride: new FormControl<string | null | undefined>(undefined),
			triggerSensitivityOverride: new FormControl<ProtocolCustomSettingsFormatTriggerSensitivityOverride | null | undefined>(undefined),
		});

	}

	export enum ProtocolCustomSettingsFormatProtocol { Tcp = 'Tcp', Udp = 'Udp', Syn = 'Syn' }

	export enum ProtocolCustomSettingsFormatTriggerSensitivityOverride { Relaxed = 'Relaxed', Low = 'Low', Default = 'Default', High = 'High' }

	export enum DdosCustomPolicyPropertiesFormatProvisioningState { Succeeded = 'Succeeded', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }

	export interface DdosCustomPolicyPropertiesFormatPublicIPAddresses {

		/** Resource ID. */
		id?: string | null;
	}
	export interface DdosCustomPolicyPropertiesFormatPublicIPAddressesFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDdosCustomPolicyPropertiesFormatPublicIPAddressesFormGroup() {
		return new FormGroup<DdosCustomPolicyPropertiesFormatPublicIPAddressesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets information about the specified DDoS custom policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosCustomPolicyName The name of the DDoS custom policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DdosCustomPolicy} Request successful. The operation returns the specified DDoS custom policy resource.
		 */
		DdosCustomPolicies_Get(resourceGroupName: string, ddosCustomPolicyName: string, api_version: string, subscriptionId: string): Observable<DdosCustomPolicy> {
			return this.http.get<DdosCustomPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosCustomPolicies/' + (ddosCustomPolicyName == null ? '' : encodeURIComponent(ddosCustomPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a DDoS custom policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosCustomPolicyName The name of the DDoS custom policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DdosCustomPolicy} requestBody Parameters supplied to the create or update operation.
		 * @return {DdosCustomPolicy} Update successful. The operation returns the resulting DDoS custom policy resource.
		 */
		DdosCustomPolicies_CreateOrUpdate(resourceGroupName: string, ddosCustomPolicyName: string, api_version: string, subscriptionId: string, requestBody: DdosCustomPolicy): Observable<DdosCustomPolicy> {
			return this.http.put<DdosCustomPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosCustomPolicies/' + (ddosCustomPolicyName == null ? '' : encodeURIComponent(ddosCustomPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified DDoS custom policy.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosCustomPolicyName The name of the DDoS custom policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		DdosCustomPolicies_Delete(resourceGroupName: string, ddosCustomPolicyName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosCustomPolicies/' + (ddosCustomPolicyName == null ? '' : encodeURIComponent(ddosCustomPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a DDoS custom policy tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosCustomPolicyName The name of the DDoS custom policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {any} requestBody Parameters supplied to the update DDoS custom policy resource tags.
		 * @return {DdosCustomPolicy} Update successful. The operation returns the resulting DDoS custom policy resource.
		 */
		DdosCustomPolicies_UpdateTags(resourceGroupName: string, ddosCustomPolicyName: string, api_version: string, subscriptionId: string, requestBody: any): Observable<DdosCustomPolicy> {
			return this.http.patch<DdosCustomPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosCustomPolicies/' + (ddosCustomPolicyName == null ? '' : encodeURIComponent(ddosCustomPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

