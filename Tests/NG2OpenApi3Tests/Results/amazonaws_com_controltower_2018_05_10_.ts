import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DisableControlOutput {

		/** Required */
		operationIdentifier: string;
	}
	export interface DisableControlOutputFormProperties {

		/** Required */
		operationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDisableControlOutputFormGroup() {
		return new FormGroup<DisableControlOutputFormProperties>({
			operationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface EnableControlOutput {

		/** Required */
		operationIdentifier: string;
	}
	export interface EnableControlOutputFormProperties {

		/** Required */
		operationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEnableControlOutputFormGroup() {
		return new FormGroup<EnableControlOutputFormProperties>({
			operationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetControlOperationOutput {

		/** Required */
		controlOperation: ControlOperation;
	}
	export interface GetControlOperationOutputFormProperties {
	}
	export function CreateGetControlOperationOutputFormGroup() {
		return new FormGroup<GetControlOperationOutputFormProperties>({
		});

	}


	/** An operation performed by the control. */
	export interface ControlOperation {
		endTime?: Date;
		operationType?: ControlOperationType;
		startTime?: Date;
		status?: ControlOperationStatus;
		statusMessage?: string;
	}

	/** An operation performed by the control. */
	export interface ControlOperationFormProperties {
		endTime: FormControl<Date | null | undefined>,
		operationType: FormControl<ControlOperationType | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<ControlOperationStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateControlOperationFormGroup() {
		return new FormGroup<ControlOperationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			operationType: new FormControl<ControlOperationType | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ControlOperationStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ControlOperationType { ENABLE_CONTROL = 'ENABLE_CONTROL', DISABLE_CONTROL = 'DISABLE_CONTROL' }

	export enum ControlOperationStatus { SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS' }

	export interface ListEnabledControlsOutput {

		/** Required */
		enabledControls: Array<EnabledControlSummary>;
		nextToken?: string;
	}
	export interface ListEnabledControlsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnabledControlsOutputFormGroup() {
		return new FormGroup<ListEnabledControlsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of enabled controls. */
	export interface EnabledControlSummary {
		controlIdentifier?: string;
	}

	/** A summary of enabled controls. */
	export interface EnabledControlSummaryFormProperties {
		controlIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEnabledControlSummaryFormGroup() {
		return new FormGroup<EnabledControlSummaryFormProperties>({
			controlIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisableControlInput {

		/** Required */
		controlIdentifier: string;

		/** Required */
		targetIdentifier: string;
	}
	export interface DisableControlInputFormProperties {

		/** Required */
		controlIdentifier: FormControl<string | null | undefined>,

		/** Required */
		targetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDisableControlInputFormGroup() {
		return new FormGroup<DisableControlInputFormProperties>({
			controlIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableControlInput {

		/** Required */
		controlIdentifier: string;

		/** Required */
		targetIdentifier: string;
	}
	export interface EnableControlInputFormProperties {

		/** Required */
		controlIdentifier: FormControl<string | null | undefined>,

		/** Required */
		targetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEnableControlInputFormGroup() {
		return new FormGroup<EnableControlInputFormProperties>({
			controlIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetControlOperationInput {

		/** Required */
		operationIdentifier: string;
	}
	export interface GetControlOperationInputFormProperties {

		/** Required */
		operationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetControlOperationInputFormGroup() {
		return new FormGroup<GetControlOperationInputFormProperties>({
			operationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEnabledControlsInput {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		targetIdentifier: string;
	}
	export interface ListEnabledControlsInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		targetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateListEnabledControlsInputFormGroup() {
		return new FormGroup<ListEnabledControlsInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			targetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.
		 * Post disable-control
		 * @return {DisableControlOutput} Success
		 */
		DisableControl(requestBody: DisableControlPostBody): Observable<DisableControlOutput> {
			return this.http.post<DisableControlOutput>(this.baseUri + 'disable-control', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
		 * Post enable-control
		 * @return {EnableControlOutput} Success
		 */
		EnableControl(requestBody: EnableControlPostBody): Observable<EnableControlOutput> {
			return this.http.post<EnableControlOutput>(this.baseUri + 'enable-control', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.
		 * Post get-control-operation
		 * @return {GetControlOperationOutput} Success
		 */
		GetControlOperation(requestBody: GetControlOperationPostBody): Observable<GetControlOperationOutput> {
			return this.http.post<GetControlOperationOutput>(this.baseUri + 'get-control-operation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.
		 * Post list-enabled-controls
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEnabledControlsOutput} Success
		 */
		ListEnabledControls(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEnabledControlsPostBody): Observable<ListEnabledControlsOutput> {
			return this.http.post<ListEnabledControlsOutput>(this.baseUri + 'list-enabled-controls?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface DisableControlPostBody {

		/**
		 * The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted, with the exception of the <b>Region deny</b> guardrail.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		controlIdentifier: string;

		/**
		 * The ARN of the organizational unit.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		targetIdentifier: string;
	}
	export interface DisableControlPostBodyFormProperties {

		/**
		 * The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted, with the exception of the <b>Region deny</b> guardrail.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		controlIdentifier: FormControl<string | null | undefined>,

		/**
		 * The ARN of the organizational unit.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		targetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDisableControlPostBodyFormGroup() {
		return new FormGroup<DisableControlPostBodyFormProperties>({
			controlIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[0-9a-zA-Z_\-:\/]+$')]),
			targetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[0-9a-zA-Z_\-:\/]+$')]),
		});

	}

	export interface EnableControlPostBody {

		/**
		 * The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted, with the exception of the <b>Region deny</b> guardrail.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		controlIdentifier: string;

		/**
		 * The ARN of the organizational unit.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		targetIdentifier: string;
	}
	export interface EnableControlPostBodyFormProperties {

		/**
		 * The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted, with the exception of the <b>Region deny</b> guardrail.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		controlIdentifier: FormControl<string | null | undefined>,

		/**
		 * The ARN of the organizational unit.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		targetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEnableControlPostBodyFormGroup() {
		return new FormGroup<EnableControlPostBodyFormProperties>({
			controlIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[0-9a-zA-Z_\-:\/]+$')]),
			targetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[0-9a-zA-Z_\-:\/]+$')]),
		});

	}

	export interface GetControlOperationPostBody {

		/**
		 * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		operationIdentifier: string;
	}
	export interface GetControlOperationPostBodyFormProperties {

		/**
		 * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		operationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetControlOperationPostBodyFormGroup() {
		return new FormGroup<GetControlOperationPostBodyFormProperties>({
			operationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface ListEnabledControlsPostBody {

		/**
		 * How many results to return per API call.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** The token to continue the list from a previous API call with the same parameters. */
		nextToken?: string | null;

		/**
		 * The ARN of the organizational unit.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		targetIdentifier: string;
	}
	export interface ListEnabledControlsPostBodyFormProperties {

		/**
		 * How many results to return per API call.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The token to continue the list from a previous API call with the same parameters. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The ARN of the organizational unit.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		targetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateListEnabledControlsPostBodyFormGroup() {
		return new FormGroup<ListEnabledControlsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			targetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[0-9a-zA-Z_\-:\/]+$')]),
		});

	}

}

