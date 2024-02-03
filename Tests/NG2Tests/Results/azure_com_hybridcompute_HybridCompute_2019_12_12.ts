import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorDetail {

		/**
		 * The error's code.
		 * Required
		 */
		code: string;

		/** Additional error details. */
		details?: Array<ErrorDetail>;

		/**
		 * A human readable error message.
		 * Required
		 */
		message: string;

		/** Indicates which property in the request is responsible for the error. */
		target?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/**
		 * The error's code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A human readable error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Indicates which property in the request is responsible for the error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface Machine {
	}
	export interface MachineFormProperties {
	}
	export function CreateMachineFormGroup() {
		return new FormGroup<MachineFormProperties>({
		});

	}

	export interface MachineExtension {
	}
	export interface MachineExtensionFormProperties {
	}
	export function CreateMachineExtensionFormGroup() {
		return new FormGroup<MachineExtensionFormProperties>({
		});

	}


	/** Describes the Machine Extension Instance View. */
	export interface MachineExtensionInstanceView {

		/** The machine extension name. */
		name?: string | null;

		/** Instance view status. */
		status?: any;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** Describes the Machine Extension Instance View. */
	export interface MachineExtensionInstanceViewFormProperties {

		/** The machine extension name. */
		name: FormControl<string | null | undefined>,

		/** Instance view status. */
		status: FormControl<any | null | undefined>,

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateMachineExtensionInstanceViewFormGroup() {
		return new FormGroup<MachineExtensionInstanceViewFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Machine Extension. */
	export interface MachineExtensionProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion?: boolean | null;

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag?: string | null;

		/** The machine extension instance view. */
		instanceView?: MachineExtensionInstanceView;

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings?: string | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** The name of the extension handler publisher. */
		publisher?: string | null;

		/** Json formatted public settings for the extension. */
		settings?: string | null;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** Describes the properties of a Machine Extension. */
	export interface MachineExtensionPropertiesFormProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion: FormControl<boolean | null | undefined>,

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag: FormControl<string | null | undefined>,

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings: FormControl<string | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** The name of the extension handler publisher. */
		publisher: FormControl<string | null | undefined>,

		/** Json formatted public settings for the extension. */
		settings: FormControl<string | null | undefined>,

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateMachineExtensionPropertiesFormGroup() {
		return new FormGroup<MachineExtensionPropertiesFormProperties>({
			autoUpgradeMinorVersion: new FormControl<boolean | null | undefined>(undefined),
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
			protectedSettings: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Machine Extension Update. */
	export interface MachineExtensionUpdate extends UpdateResource {

		/** Describes Machine Extension Update Properties. */
		properties?: MachineExtensionUpdateProperties;
	}

	/** Describes a Machine Extension Update. */
	export interface MachineExtensionUpdateFormProperties extends UpdateResourceFormProperties {
	}
	export function CreateMachineExtensionUpdateFormGroup() {
		return new FormGroup<MachineExtensionUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Machine Extension. */
	export interface MachineExtensionUpdateProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion?: boolean | null;

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag?: string | null;

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings?: string | null;

		/** The name of the extension handler publisher. */
		publisher?: string | null;

		/** Json formatted public settings for the extension. */
		settings?: string | null;

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type?: string | null;

		/** Specifies the version of the script handler. */
		typeHandlerVersion?: string | null;
	}

	/** Describes the properties of a Machine Extension. */
	export interface MachineExtensionUpdatePropertiesFormProperties {

		/** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
		autoUpgradeMinorVersion: FormControl<boolean | null | undefined>,

		/** How the extension handler should be forced to update even if the extension configuration has not changed. */
		forceUpdateTag: FormControl<string | null | undefined>,

		/** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
		protectedSettings: FormControl<string | null | undefined>,

		/** The name of the extension handler publisher. */
		publisher: FormControl<string | null | undefined>,

		/** Json formatted public settings for the extension. */
		settings: FormControl<string | null | undefined>,

		/** Specifies the type of the extension; an example is "CustomScriptExtension". */
		type: FormControl<string | null | undefined>,

		/** Specifies the version of the script handler. */
		typeHandlerVersion: FormControl<string | null | undefined>,
	}
	export function CreateMachineExtensionUpdatePropertiesFormGroup() {
		return new FormGroup<MachineExtensionUpdatePropertiesFormProperties>({
			autoUpgradeMinorVersion: new FormControl<boolean | null | undefined>(undefined),
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
			protectedSettings: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeHandlerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the Machine Extensions List Result. */
	export interface MachineExtensionsListResult {

		/** The uri to fetch the next page of machine extensions. Call ListNext() with this to fetch the next page of extensions. */
		nextLink?: string | null;

		/** The list of extensions */
		value?: Array<MachineExtension>;
	}

	/** Describes the Machine Extensions List Result. */
	export interface MachineExtensionsListResultFormProperties {

		/** The uri to fetch the next page of machine extensions. Call ListNext() with this to fetch the next page of extensions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMachineExtensionsListResultFormGroup() {
		return new FormGroup<MachineExtensionsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List hybrid machine operation response. */
	export interface MachineListResult {

		/** The URI to fetch the next page of Machines. Call ListNext() with this URI to fetch the next page of hybrid machines. */
		nextLink?: string | null;

		/**
		 * The list of hybrid machines.
		 * Required
		 */
		value: Array<Machine>;
	}

	/** The List hybrid machine operation response. */
	export interface MachineListResultFormProperties {

		/** The URI to fetch the next page of Machines. Call ListNext() with this URI to fetch the next page of hybrid machines. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMachineListResultFormGroup() {
		return new FormGroup<MachineListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a hybrid machine. */
	export interface MachineProperties {

		/** The hybrid machine agent full version. */
		agentVersion?: string | null;

		/** Public Key that the client provides to be used during initial resource onboarding */
		clientPublicKey?: string | null;

		/** Specifies the hybrid machine display name. */
		displayName?: string | null;

		/** Details about the error state. */
		errorDetails?: Array<ErrorDetail>;

		/** Machine Extensions information */
		extensions?: Array<MachineExtensionInstanceView>;

		/** The time of the last status change. */
		lastStatusChange?: Date | null;

		/** Metadata pertaining to the geographic location of the resource. */
		locationData?: MachinePropertiesLocationData;

		/** Specifies the hybrid machine FQDN. */
		machineFqdn?: string | null;

		/** The Operating System running on the hybrid machine. */
		osName?: string | null;

		/** Specifies the operating system settings for the hybrid machine. */
		osProfile?: OSProfile;

		/** The version of Operating System running on the hybrid machine. */
		osVersion?: string | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** The status of the hybrid machine agent. */
		status?: MachinePropertiesStatus | null;

		/** Specifies the hybrid machine unique ID. */
		vmId?: string | null;
	}

	/** Describes the properties of a hybrid machine. */
	export interface MachinePropertiesFormProperties {

		/** The hybrid machine agent full version. */
		agentVersion: FormControl<string | null | undefined>,

		/** Public Key that the client provides to be used during initial resource onboarding */
		clientPublicKey: FormControl<string | null | undefined>,

		/** Specifies the hybrid machine display name. */
		displayName: FormControl<string | null | undefined>,

		/** The time of the last status change. */
		lastStatusChange: FormControl<Date | null | undefined>,

		/** Specifies the hybrid machine FQDN. */
		machineFqdn: FormControl<string | null | undefined>,

		/** The Operating System running on the hybrid machine. */
		osName: FormControl<string | null | undefined>,

		/** The version of Operating System running on the hybrid machine. */
		osVersion: FormControl<string | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** The status of the hybrid machine agent. */
		status: FormControl<MachinePropertiesStatus | null | undefined>,

		/** Specifies the hybrid machine unique ID. */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateMachinePropertiesFormGroup() {
		return new FormGroup<MachinePropertiesFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			clientPublicKey: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastStatusChange: new FormControl<Date | null | undefined>(undefined),
			machineFqdn: new FormControl<string | null | undefined>(undefined),
			osName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MachinePropertiesStatus | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MachinePropertiesLocationData {

		/** The city or locality where the resource is located. */
		city?: string | null;

		/** The country or region where the resource is located */
		countryOrRegion?: string | null;

		/** The district, state, or province where the resource is located. */
		district?: string | null;

		/**
		 * A canonical name for the geographic or physical location.
		 * Required
		 * Max length: 256
		 */
		name: string;
	}
	export interface MachinePropertiesLocationDataFormProperties {

		/** The city or locality where the resource is located. */
		city: FormControl<string | null | undefined>,

		/** The country or region where the resource is located */
		countryOrRegion: FormControl<string | null | undefined>,

		/** The district, state, or province where the resource is located. */
		district: FormControl<string | null | undefined>,

		/**
		 * A canonical name for the geographic or physical location.
		 * Required
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMachinePropertiesLocationDataFormGroup() {
		return new FormGroup<MachinePropertiesLocationDataFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			countryOrRegion: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export enum MachinePropertiesStatus { Connected = 'Connected', Disconnected = 'Disconnected', Error = 'Error' }


	/** Describes a hybrid machine reconnect. */
	export interface MachineReconnect {

		/** Hybrid Compute Machine properties */
		properties?: MachineReconnectProperties;
	}

	/** Describes a hybrid machine reconnect. */
	export interface MachineReconnectFormProperties {
	}
	export function CreateMachineReconnectFormGroup() {
		return new FormGroup<MachineReconnectFormProperties>({
		});

	}


	/** Describes the properties required to reconnect a hybrid machine. */
	export interface MachineReconnectProperties {

		/** Public Key that the client provides to be used during initial resource onboarding. */
		clientPublicKey?: string | null;

		/** Specifies the hybrid machine unique ID. */
		vmId?: string | null;
	}

	/** Describes the properties required to reconnect a hybrid machine. */
	export interface MachineReconnectPropertiesFormProperties {

		/** Public Key that the client provides to be used during initial resource onboarding. */
		clientPublicKey: FormControl<string | null | undefined>,

		/** Specifies the hybrid machine unique ID. */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateMachineReconnectPropertiesFormGroup() {
		return new FormGroup<MachineReconnectPropertiesFormProperties>({
			clientPublicKey: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a hybrid machine Update. */
	export interface MachineUpdate extends UpdateResource {

		/** Hybrid Compute Machine Managed Identity */
		identity?: any;

		/** Hybrid Compute Machine properties */
		properties?: MachineUpdateProperties;
	}

	/** Describes a hybrid machine Update. */
	export interface MachineUpdateFormProperties extends UpdateResourceFormProperties {

		/** Hybrid Compute Machine Managed Identity */
		identity: FormControl<any | null | undefined>,
	}
	export function CreateMachineUpdateFormGroup() {
		return new FormGroup<MachineUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			identity: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Describes the ARM updatable properties of a hybrid machine. */
	export interface MachineUpdateProperties {

		/** Metadata pertaining to the geographic location of the resource. */
		locationData?: MachineUpdatePropertiesLocationData;
	}

	/** Describes the ARM updatable properties of a hybrid machine. */
	export interface MachineUpdatePropertiesFormProperties {
	}
	export function CreateMachineUpdatePropertiesFormGroup() {
		return new FormGroup<MachineUpdatePropertiesFormProperties>({
		});

	}

	export interface MachineUpdatePropertiesLocationData {

		/** The city or locality where the resource is located. */
		city?: string | null;

		/** The country or region where the resource is located */
		countryOrRegion?: string | null;

		/** The district, state, or province where the resource is located. */
		district?: string | null;

		/**
		 * A canonical name for the geographic or physical location.
		 * Required
		 * Max length: 256
		 */
		name: string;
	}
	export interface MachineUpdatePropertiesLocationDataFormProperties {

		/** The city or locality where the resource is located. */
		city: FormControl<string | null | undefined>,

		/** The country or region where the resource is located */
		countryOrRegion: FormControl<string | null | undefined>,

		/** The district, state, or province where the resource is located. */
		district: FormControl<string | null | undefined>,

		/**
		 * A canonical name for the geographic or physical location.
		 * Required
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMachineUpdatePropertiesLocationDataFormGroup() {
		return new FormGroup<MachineUpdatePropertiesLocationDataFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			countryOrRegion: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}


	/** Specifies the operating system settings for the hybrid machine. */
	export interface OSProfile {

		/** Specifies the host OS name of the hybrid machine. */
		computerName?: string | null;
	}

	/** Specifies the operating system settings for the hybrid machine. */
	export interface OSProfileFormProperties {

		/** Specifies the host OS name of the hybrid machine. */
		computerName: FormControl<string | null | undefined>,
	}
	export function CreateOSProfileFormGroup() {
		return new FormGroup<OSProfileFormProperties>({
			computerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Compute Operation operation response. */
	export interface OperationListResult {

		/** The list of compute operations */
		value?: Array<OperationValue>;
	}

	/** The List Compute Operation operation response. */
	export interface OperationListResultFormProperties {
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
		});

	}


	/** Describes the properties of a Compute Operation value. */
	export interface OperationValue {

		/** Display properties */
		display?: OperationValueDisplay;

		/** The name of the compute operation. */
		name?: string | null;

		/** The origin of the compute operation. */
		origin?: string | null;
	}

	/** Describes the properties of a Compute Operation value. */
	export interface OperationValueFormProperties {

		/** The name of the compute operation. */
		name: FormControl<string | null | undefined>,

		/** The origin of the compute operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationValueFormGroup() {
		return new FormGroup<OperationValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Hybrid Compute Operation Value Display. */
	export interface OperationValueDisplay {

		/** The description of the operation. */
		description?: string | null;

		/** The display name of the compute operation. */
		operation?: string | null;

		/** The resource provider for the operation. */
		provider?: string | null;

		/** The display name of the resource the operation applies to. */
		resource?: string | null;
	}

	/** Describes the properties of a Hybrid Compute Operation Value Display. */
	export interface OperationValueDisplayFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The display name of the compute operation. */
		operation: FormControl<string | null | undefined>,

		/** The resource provider for the operation. */
		provider: FormControl<string | null | undefined>,

		/** The display name of the resource the operation applies to. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationValueDisplayFormGroup() {
		return new FormGroup<OperationValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Update Resource model definition. */
	export interface UpdateResource {

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The Update Resource model definition. */
	export interface UpdateResourceFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateResourceFormGroup() {
		return new FormGroup<UpdateResourceFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of hybrid compute operations.
		 * Get providers/Microsoft.HybridCompute/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationListResult} OK
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.HybridCompute/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the hybrid machines in the specified subscription. Use the nextLink property in the response to get the next page of hybrid machines.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/machines
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {MachineListResult} OK
		 */
		Machines_ListBySubscription(api_version: string, subscriptionId: string): Observable<MachineListResult> {
			return this.http.get<MachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HybridCompute/machines?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the hybrid machines in the specified resource group. Use the nextLink property in the response to get the next page of hybrid machines.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @return {MachineListResult} OK
		 */
		Machines_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<MachineListResult> {
			return this.http.get<MachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves information about the model view or the instance view of a hybrid machine.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the hybrid machine.
		 * @param {Machines_GetExpand} expand The expand expression to apply on the operation.
		 * @return {Machine} OK
		 */
		Machines_Get(api_version: string, subscriptionId: string, resourceGroupName: string, name: string, expand: Machines_GetExpand | null | undefined): Observable<Machine> {
			return this.http.get<Machine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + expand, {});
		}

		/**
		 * The operation to create or update a hybrid machine resource identity in Azure.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the hybrid machine.
		 * @param {Machine} requestBody Parameters supplied to the Create hybrid machine operation.
		 * @return {Machine} OK
		 */
		Machines_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, name: string, requestBody: Machine): Observable<Machine> {
			return this.http.put<Machine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to remove a hybrid machine identity in Azure.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the hybrid machine.
		 * @return {void} OK
		 */
		Machines_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to update a hybrid machine.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the hybrid machine.
		 * @param {MachineUpdate} requestBody Parameters supplied to the Update hybrid machine operation.
		 * @return {Machine} OK
		 */
		Machines_Update(api_version: string, subscriptionId: string, resourceGroupName: string, name: string, requestBody: MachineUpdate): Observable<Machine> {
			return this.http.patch<Machine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to get all extensions of a non-Azure machine
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the machine containing the extension.
		 * @param {string} expand The expand expression to apply on the operation.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {MachineExtensionsListResult} OK
		 */
		MachineExtensions_List(resourceGroupName: string, name: string, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<MachineExtensionsListResult> {
			return this.http.get<MachineExtensionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to get the extension.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the machine containing the extension.
		 * @param {string} extensionName The name of the machine extension.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {MachineExtension} OK
		 */
		MachineExtensions_Get(resourceGroupName: string, name: string, extensionName: string, api_version: string, subscriptionId: string): Observable<MachineExtension> {
			return this.http.get<MachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions/' + (extensionName == null ? '' : encodeURIComponent(extensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The operation to create or update the extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the machine where the extension should be created or updated.
		 * @param {string} extensionName The name of the machine extension.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {MachineExtension} requestBody Parameters supplied to the Create Machine Extension operation.
		 * @return {MachineExtension} OK
		 */
		MachineExtensions_CreateOrUpdate(resourceGroupName: string, name: string, extensionName: string, api_version: string, subscriptionId: string, requestBody: MachineExtension): Observable<MachineExtension> {
			return this.http.put<MachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions/' + (extensionName == null ? '' : encodeURIComponent(extensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to delete the extension.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the machine where the extension should be deleted.
		 * @param {string} extensionName The name of the machine extension.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		MachineExtensions_Delete(resourceGroupName: string, name: string, extensionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions/' + (extensionName == null ? '' : encodeURIComponent(extensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to create or update the extension.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the machine where the extension should be created or updated.
		 * @param {string} extensionName The name of the machine extension.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {MachineExtensionUpdate} requestBody Parameters supplied to the Create Machine Extension operation.
		 * @return {MachineExtension} OK
		 */
		MachineExtensions_Update(resourceGroupName: string, name: string, extensionName: string, api_version: string, subscriptionId: string, requestBody: MachineExtensionUpdate): Observable<MachineExtension> {
			return this.http.patch<MachineExtension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions/' + (extensionName == null ? '' : encodeURIComponent(extensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to reconnect a hybrid machine resource to its identity in Azure.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/reconnect
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the hybrid machine.
		 * @param {MachineReconnect} requestBody Parameters supplied to the Reconnect hybrid machine operation.
		 * @return {Machine} OK
		 */
		Machines_Reconnect(api_version: string, subscriptionId: string, resourceGroupName: string, name: string, requestBody: MachineReconnect): Observable<Machine> {
			return this.http.post<Machine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridCompute/machines/' + (name == null ? '' : encodeURIComponent(name)) + '/reconnect?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Machines_GetExpand { instanceView = 'instanceView' }

}

