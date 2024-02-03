import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Instance view status. */
	export interface InstanceViewStatus {

		/** The status code. */
		code?: string | null;

		/** The short localizable label for the status. */
		displayStatus?: string | null;

		/** The level code. */
		level?: InstanceViewStatusLevel | null;

		/** The detailed status message, including for alerts and error messages. */
		message?: string | null;

		/** The time of the status. */
		time?: Date | null;
	}

	/** Instance view status. */
	export interface InstanceViewStatusFormProperties {

		/** The status code. */
		code: FormControl<string | null | undefined>,

		/** The short localizable label for the status. */
		displayStatus: FormControl<string | null | undefined>,

		/** The level code. */
		level: FormControl<InstanceViewStatusLevel | null | undefined>,

		/** The detailed status message, including for alerts and error messages. */
		message: FormControl<string | null | undefined>,

		/** The time of the status. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceViewStatusFormGroup() {
		return new FormGroup<InstanceViewStatusFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			displayStatus: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<InstanceViewStatusLevel | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum InstanceViewStatusLevel { Info = 'Info', Warning = 'Warning', Error = 'Error' }


	/** Describes the properties of a Run Command. */
	export interface RunCommandDocument extends RunCommandDocumentBase {

		/** The parameters used by the script. */
		parameters?: Array<RunCommandParameterDefinition>;

		/**
		 * The script to be executed.
		 * Required
		 */
		script: Array<string>;
	}

	/** Describes the properties of a Run Command. */
	export interface RunCommandDocumentFormProperties extends RunCommandDocumentBaseFormProperties {
	}
	export function CreateRunCommandDocumentFormGroup() {
		return new FormGroup<RunCommandDocumentFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osType: new FormControl<RunCommandDocumentBaseOsType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the properties of a run command parameter. */
	export interface RunCommandParameterDefinition {

		/** The run command parameter default value. */
		defaultValue?: string | null;

		/**
		 * The run command parameter name.
		 * Required
		 */
		name: string;

		/** The run command parameter required. */
		required?: boolean | null;

		/**
		 * The run command parameter type.
		 * Required
		 */
		type: string;
	}

	/** Describes the properties of a run command parameter. */
	export interface RunCommandParameterDefinitionFormProperties {

		/** The run command parameter default value. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * The run command parameter name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The run command parameter required. */
		required: FormControl<boolean | null | undefined>,

		/**
		 * The run command parameter type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRunCommandParameterDefinitionFormGroup() {
		return new FormGroup<RunCommandParameterDefinitionFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the properties of a Run Command metadata. */
	export interface RunCommandDocumentBase {

		/**
		 * The VM run command schema.
		 * Required
		 */
		'$schema': string;

		/**
		 * The VM run command description.
		 * Required
		 */
		description: string;

		/**
		 * The VM run command id.
		 * Required
		 */
		id: string;

		/**
		 * The VM run command label.
		 * Required
		 */
		label: string;

		/**
		 * The Operating System type.
		 * Required
		 */
		osType: RunCommandDocumentBaseOsType;
	}

	/** Describes the properties of a Run Command metadata. */
	export interface RunCommandDocumentBaseFormProperties {

		/**
		 * The VM run command schema.
		 * Required
		 */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * The VM run command description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The VM run command id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The VM run command label.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The Operating System type.
		 * Required
		 */
		osType: FormControl<RunCommandDocumentBaseOsType | null | undefined>,
	}
	export function CreateRunCommandDocumentBaseFormGroup() {
		return new FormGroup<RunCommandDocumentBaseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osType: new FormControl<RunCommandDocumentBaseOsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RunCommandDocumentBaseOsType { Windows = 'Windows', Linux = 'Linux' }


	/** Capture Virtual Machine parameters. */
	export interface RunCommandInput {

		/**
		 * The run command id.
		 * Required
		 */
		commandId: string;

		/** The run command parameters. */
		parameters?: Array<RunCommandInputParameter>;

		/** Optional. The script to be executed.  When this value is given, the given script will override the default script of the command. */
		script?: Array<string>;
	}

	/** Capture Virtual Machine parameters. */
	export interface RunCommandInputFormProperties {

		/**
		 * The run command id.
		 * Required
		 */
		commandId: FormControl<string | null | undefined>,
	}
	export function CreateRunCommandInputFormGroup() {
		return new FormGroup<RunCommandInputFormProperties>({
			commandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the properties of a run command parameter. */
	export interface RunCommandInputParameter {

		/**
		 * The run command parameter name.
		 * Required
		 */
		name: string;

		/**
		 * The run command parameter value.
		 * Required
		 */
		value: string;
	}

	/** Describes the properties of a run command parameter. */
	export interface RunCommandInputParameterFormProperties {

		/**
		 * The run command parameter name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The run command parameter value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRunCommandInputParameterFormGroup() {
		return new FormGroup<RunCommandInputParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The List Virtual Machine operation response. */
	export interface RunCommandListResult {

		/** The uri to fetch the next page of run commands. Call ListNext() with this to fetch the next page of run commands. */
		nextLink?: string | null;

		/**
		 * The list of virtual machine run commands.
		 * Required
		 */
		value: Array<RunCommandDocumentBase>;
	}

	/** The List Virtual Machine operation response. */
	export interface RunCommandListResultFormProperties {

		/** The uri to fetch the next page of run commands. Call ListNext() with this to fetch the next page of run commands. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRunCommandListResultFormGroup() {
		return new FormGroup<RunCommandListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunCommandResult {

		/** Run command operation response. */
		value?: Array<InstanceViewStatus>;
	}
	export interface RunCommandResultFormProperties {
	}
	export function CreateRunCommandResultFormGroup() {
		return new FormGroup<RunCommandResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all available run commands for a subscription in a location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands
		 * @param {string} location The location upon which run commands is queried.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RunCommandListResult} OK
		 */
		VirtualMachineRunCommands_List(location: string, api_version: string, subscriptionId: string): Observable<RunCommandListResult> {
			return this.http.get<RunCommandListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/runCommands&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets specific run command for a subscription in a location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands/{commandId}
		 * @param {string} location The location upon which run commands is queried.
		 * @param {string} commandId The command id.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RunCommandDocument} OK
		 */
		VirtualMachineRunCommands_Get(location: string, commandId: string, api_version: string, subscriptionId: string): Observable<RunCommandDocument> {
			return this.http.get<RunCommandDocument>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/runCommands/' + (commandId == null ? '' : encodeURIComponent(commandId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Run command on a virtual machine in a VM scale set.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/runCommand
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmScaleSetName The name of the VM scale set.
		 * @param {string} instanceId The instance ID of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RunCommandInput} requestBody Parameters supplied to the Run command operation.
		 * @return {RunCommandResult} OK
		 */
		VirtualMachineScaleSetVMs_RunCommand(resourceGroupName: string, vmScaleSetName: string, instanceId: string, api_version: string, subscriptionId: string, requestBody: RunCommandInput): Observable<RunCommandResult> {
			return this.http.post<RunCommandResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachineScaleSets/' + (vmScaleSetName == null ? '' : encodeURIComponent(vmScaleSetName)) + '/virtualmachines/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/runCommand&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run command on the VM.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommand
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} vmName The name of the virtual machine.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RunCommandInput} requestBody Parameters supplied to the Run command operation.
		 * @return {RunCommandResult} OK
		 */
		VirtualMachines_RunCommand(resourceGroupName: string, vmName: string, api_version: string, subscriptionId: string, requestBody: RunCommandInput): Observable<RunCommandResult> {
			return this.http.post<RunCommandResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/virtualMachines/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/runCommand&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

