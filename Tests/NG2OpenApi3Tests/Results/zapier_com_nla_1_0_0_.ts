import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorResponse {

		/**
		 * Error message.
		 * Required
		 */
		error: string;
	}
	export interface ErrorResponseFormProperties {

		/**
		 * Error message.
		 * Required
		 */
		error: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * This extends from ExecuteRequestBase to add the preview_only option.
	 * (1) Providers who allow side effects or (2) actions that do not have a side effect should use this class.
	 */
	export interface ExecuteRequest {

		/**
		 * Plain english instructions. Provide as much detail as possible, even if other fields are present.
		 * Required
		 */
		instructions: string;

		/** If true, we will not execute the action, but will return the params of the preview. */
		preview_only?: boolean | null;
	}

	/**
	 * This extends from ExecuteRequestBase to add the preview_only option.
	 * (1) Providers who allow side effects or (2) actions that do not have a side effect should use this class.
	 */
	export interface ExecuteRequestFormProperties {

		/**
		 * Plain english instructions. Provide as much detail as possible, even if other fields are present.
		 * Required
		 */
		instructions: FormControl<string | null | undefined>,

		/** If true, we will not execute the action, but will return the params of the preview. */
		preview_only: FormControl<boolean | null | undefined>,
	}
	export function CreateExecuteRequestFormGroup() {
		return new FormGroup<ExecuteRequestFormProperties>({
			instructions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preview_only: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This is a summary of the results given the action that was executed. */
	export interface ExecuteResponse {

		/**
		 * The name of the action that was executed.
		 * Required
		 */
		action_used: string;

		/**
		 * The rest of the full results. Always returns an array of objects
		 * Required
		 */
		additional_results: Array<string>;

		/** A hint for the assistant on what to do next. */
		assistant_hint?: string | null;

		/** The error message if the execution failed. */
		error?: string | null;

		/**
		 * The id of the execution log.
		 * Required
		 */
		id: string;

		/**
		 * The params we used / will use to execute the action.
		 * Required
		 */
		input_params: string;

		/** A trimmed down result of the first item of the full results. Ideal for humans and language models! */
		result?: string | null;

		/** Human readable labels for some of the keys in the result. */
		result_field_labels?: string | null;

		/**
		 * The URL to run the action or review the AI choices the AI made for input_params given instructions.
		 * Required
		 */
		review_url: string;

		/** The status of the execution. */
		status?: ExecuteResponseStatus | null;
	}

	/** This is a summary of the results given the action that was executed. */
	export interface ExecuteResponseFormProperties {

		/**
		 * The name of the action that was executed.
		 * Required
		 */
		action_used: FormControl<string | null | undefined>,

		/** A hint for the assistant on what to do next. */
		assistant_hint: FormControl<string | null | undefined>,

		/** The error message if the execution failed. */
		error: FormControl<string | null | undefined>,

		/**
		 * The id of the execution log.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The params we used / will use to execute the action.
		 * Required
		 */
		input_params: FormControl<string | null | undefined>,

		/** A trimmed down result of the first item of the full results. Ideal for humans and language models! */
		result: FormControl<string | null | undefined>,

		/** Human readable labels for some of the keys in the result. */
		result_field_labels: FormControl<string | null | undefined>,

		/**
		 * The URL to run the action or review the AI choices the AI made for input_params given instructions.
		 * Required
		 */
		review_url: FormControl<string | null | undefined>,

		/** The status of the execution. */
		status: FormControl<ExecuteResponseStatus | null | undefined>,
	}
	export function CreateExecuteResponseFormGroup() {
		return new FormGroup<ExecuteResponseFormProperties>({
			action_used: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistant_hint: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input_params: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined),
			result_field_labels: new FormControl<string | null | undefined>(undefined),
			review_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ExecuteResponseStatus | null | undefined>(undefined),
		});

	}

	export enum ExecuteResponseStatus { success = 'success', error = 'error', empty = 'empty', preview = 'preview' }

	export interface ExposedActionResponseSchema {

		/**
		 * URL to configure and expose more actions.
		 * Required
		 */
		configuration_link: string;

		/** Required */
		results: Array<ExposedActionSchema>;
	}
	export interface ExposedActionResponseSchemaFormProperties {

		/**
		 * URL to configure and expose more actions.
		 * Required
		 */
		configuration_link: FormControl<string | null | undefined>,
	}
	export function CreateExposedActionResponseSchemaFormGroup() {
		return new FormGroup<ExposedActionResponseSchemaFormProperties>({
			configuration_link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExposedActionSchema {

		/**
		 * Description of the action.
		 * Required
		 */
		description: string;

		/**
		 * The unique ID of the exposed action.
		 * Required
		 */
		id: string;

		/**
		 * The operation ID of the exposed action.
		 * Required
		 */
		operation_id: string;

		/**
		 * Available hint fields for the action.
		 * Required
		 */
		params: string;
	}
	export interface ExposedActionSchemaFormProperties {

		/**
		 * Description of the action.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the exposed action.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The operation ID of the exposed action.
		 * Required
		 */
		operation_id: FormControl<string | null | undefined>,

		/**
		 * Available hint fields for the action.
		 * Required
		 */
		params: FormControl<string | null | undefined>,
	}
	export function CreateExposedActionSchemaFormGroup() {
		return new FormGroup<ExposedActionSchemaFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operation_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			params: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Check
		 * Test that the API and auth are working.
		 * Get api/v1/check/
		 * @return {void} OK
		 */
		Check(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/check/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Configuration Link
		 * Provides a link to configure more actions. Alternatively, searching through apps and actions will provide more specific configuration links.
		 * Get api/v1/configuration-link/
		 * @return {void} OK
		 */
		Get_configuration_link(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/configuration-link/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Execution Log Endpoint
		 * Get the execution log for a given execution log id.
		 * Get api/v1/execution-log/{execution_log_id}/
		 * @return {ExecuteResponse} OK
		 */
		Get_execution_log_endpoint(execution_log_id: string): Observable<ExecuteResponse> {
			return this.http.get<ExecuteResponse>(this.baseUri + 'api/v1/execution-log/' + (execution_log_id == null ? '' : encodeURIComponent(execution_log_id)) + '/', {});
		}

		/**
		 * List Exposed Actions
		 * List all the currently exposed actions for the given account.
		 * Get api/v1/exposed/
		 * @return {ExposedActionResponseSchema} OK
		 */
		List_exposed_actions(): Observable<ExposedActionResponseSchema> {
			return this.http.get<ExposedActionResponseSchema>(this.baseUri + 'api/v1/exposed/', {});
		}

		/**
		 * Execute App Action Endpoint
		 * Give us a plain english description of exact action you want to do. There should be dynamically generated documentation for this endpoint for each action that is exposed.
		 * Post api/v1/exposed/{exposed_app_action_id}/execute/
		 * @return {ExecuteResponse} OK
		 */
		Execute_app_action_endpoint(exposed_app_action_id: string, requestBody: ExecuteRequest): Observable<ExecuteResponse> {
			return this.http.post<ExecuteResponse>(this.baseUri + 'api/v1/exposed/' + (exposed_app_action_id == null ? '' : encodeURIComponent(exposed_app_action_id)) + '/execute/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

