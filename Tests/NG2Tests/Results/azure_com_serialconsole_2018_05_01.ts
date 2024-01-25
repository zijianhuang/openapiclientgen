import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Returns whether or not Serial Console is disabled. */
	export interface DisableSerialConsoleResult {

		/** Whether or not Serial Console is disabled. */
		disabled?: boolean | null;
	}

	/** Returns whether or not Serial Console is disabled. */
	export interface DisableSerialConsoleResultFormProperties {

		/** Whether or not Serial Console is disabled. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDisableSerialConsoleResultFormGroup() {
		return new FormGroup<DisableSerialConsoleResultFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Returns whether or not Serial Console is disabled (enabled). */
	export interface EnableSerialConsoleResult {

		/** Whether or not Serial Console is disabled (enabled). */
		disabled?: boolean | null;
	}

	/** Returns whether or not Serial Console is disabled (enabled). */
	export interface EnableSerialConsoleResultFormProperties {

		/** Whether or not Serial Console is disabled (enabled). */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEnableSerialConsoleResultFormGroup() {
		return new FormGroup<EnableSerialConsoleResultFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Error saying that the provided subscription could not be found */
	export interface GetSerialConsoleSubscriptionNotFound {

		/** Error code */
		code?: string | null;

		/** Subscription not found message */
		message?: string | null;
	}

	/** Error saying that the provided subscription could not be found */
	export interface GetSerialConsoleSubscriptionNotFoundFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Subscription not found message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetSerialConsoleSubscriptionNotFoundFormGroup() {
		return new FormGroup<GetSerialConsoleSubscriptionNotFoundFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Serial Console operations */
	export interface SerialConsoleOperations {

		/** A list of Serial Console operations */
		SerialConsoleOperationsValue?: Array<SerialConsoleOperationsValue>;
	}

	/** Serial Console operations */
	export interface SerialConsoleOperationsFormProperties {
	}
	export function CreateSerialConsoleOperationsFormGroup() {
		return new FormGroup<SerialConsoleOperationsFormProperties>({
		});

	}

	export interface SerialConsoleOperationsValue {
		display?: SerialConsoleOperationsValueDisplay;
		isDataAction?: string | null;
		name?: string | null;
	}
	export interface SerialConsoleOperationsValueFormProperties {
		isDataAction: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSerialConsoleOperationsValueFormGroup() {
		return new FormGroup<SerialConsoleOperationsValueFormProperties>({
			isDataAction: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SerialConsoleOperationsValueDisplay {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		resource?: string | null;
	}
	export interface SerialConsoleOperationsValueDisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateSerialConsoleOperationsValueDisplayFormGroup() {
		return new FormGroup<SerialConsoleOperationsValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns whether or not Serial Console is disabled. */
	export interface SerialConsoleStatus {

		/** Whether or not Serial Console is disabled. */
		disabled?: boolean | null;
	}

	/** Returns whether or not Serial Console is disabled. */
	export interface SerialConsoleStatusFormProperties {

		/** Whether or not Serial Console is disabled. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSerialConsoleStatusFormGroup() {
		return new FormGroup<SerialConsoleStatusFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of Serial Console API operations.
		 * Get providers/Microsoft.SerialConsole/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {SerialConsoleOperations} OK - returns a JSON object
		 */
		ListOperations(api_version: string): Observable<SerialConsoleOperations> {
			return this.http.get<SerialConsoleOperations>(this.baseUri + 'providers/Microsoft.SerialConsole/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the disabled status for a subscription
		 * Gets whether or not Serial Console is disabled for a given subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
		 * @param {string} _default Default parameter. Leave the value as "default".
		 * @return {SerialConsoleStatus} OK - Returns a JSON object
		 */
		GetConsoleStatus(api_version: string, subscriptionId: string, _default: string): Observable<SerialConsoleStatus> {
			return this.http.get<SerialConsoleStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SerialConsole/consoleServices/' + (_default == null ? '' : encodeURIComponent(_default)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Disable Serial Console for a subscription
		 * Disables the Serial Console service for all VMs and VM scale sets in the provided subscription
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/disableConsole
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
		 * @param {string} _default Default parameter. Leave the value as "default".
		 * @return {DisableSerialConsoleResult} OK - Returns a JSON object
		 */
		DisableConsole(api_version: string, subscriptionId: string, _default: string): Observable<DisableSerialConsoleResult> {
			return this.http.post<DisableSerialConsoleResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SerialConsole/consoleServices/' + (_default == null ? '' : encodeURIComponent(_default)) + '/disableConsole?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Enable Serial Console for a subscription
		 * Enables the Serial Console service for all VMs and VM scale sets in the provided subscription
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/enableConsole
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
		 * @param {string} _default Default parameter. Leave the value as "default".
		 * @return {EnableSerialConsoleResult} OK - Serial Console disabled
		 */
		EnableConsole(api_version: string, subscriptionId: string, _default: string): Observable<EnableSerialConsoleResult> {
			return this.http.post<EnableSerialConsoleResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SerialConsole/consoleServices/' + (_default == null ? '' : encodeURIComponent(_default)) + '/enableConsole?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

