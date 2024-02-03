import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Execution_enum_status { active = 'active', ended = 'ended' }

	export enum Flow_enum_status { draft = 'draft', published = 'published' }

	export enum Flow_revision_enum_status { draft = 'draft', published = 'published' }

	export enum Flow_validate_enum_status { draft = 'draft', published = 'published' }

	export interface Studiov2flow {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Description of change made in the revision. */
		commit_message?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** JSON representation of flow definition. */
		definition?: any;

		/** List of error in the flow definition. */
		errors?: Array<string>;

		/** The string that you assigned to describe the Flow. */
		friendly_name?: string | null;

		/** The URLs of the Flow's nested resources. */
		links?: string | null;

		/** The latest revision number of the Flow's definition. */
		revision?: number | null;

		/**
		 * The unique string that we created to identify the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Flow_enum_status | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** Boolean if the flow definition is valid. */
		valid?: boolean | null;

		/** List of warnings in the flow definition. */
		warnings?: Array<string>;
		webhook_url?: string | null;
	}
	export interface Studiov2flowFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Description of change made in the revision. */
		commit_message: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** JSON representation of flow definition. */
		definition: FormControl<any | null | undefined>,

		/** The string that you assigned to describe the Flow. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of the Flow's nested resources. */
		links: FormControl<string | null | undefined>,

		/** The latest revision number of the Flow's definition. */
		revision: FormControl<number | null | undefined>,

		/**
		 * The unique string that we created to identify the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Flow_enum_status | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** Boolean if the flow definition is valid. */
		valid: FormControl<boolean | null | undefined>,
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov2flowFormGroup() {
		return new FormGroup<Studiov2flowFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			commit_message: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			definition: new FormControl<any | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			status: new FormControl<Flow_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov2flowexecution {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. */
		contact_channel_address?: string | null;

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context?: any;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid?: string | null;

		/** The URLs of nested resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Execution_enum_status | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Studiov2flowexecutionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. */
		contact_channel_address: FormControl<string | null | undefined>,

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context: FormControl<any | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid: FormControl<string | null | undefined>,

		/** The URLs of nested resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Execution_enum_status | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov2flowexecutionFormGroup() {
		return new FormGroup<Studiov2flowexecutionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			contact_channel_address: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			status: new FormControl<Execution_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov2flowexecutionexecution_context {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionContext resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context?: any;

		/**
		 * The SID of the context's Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		execution_sid?: string | null;

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Studiov2flowexecutionexecution_contextFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionContext resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context: FormControl<any | null | undefined>,

		/**
		 * The SID of the context's Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		execution_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov2flowexecutionexecution_contextFormGroup() {
		return new FormGroup<Studiov2flowexecutionexecution_contextFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			execution_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov2flowexecutionexecution_step {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionStep resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context?: any;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Step's Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		execution_sid?: string | null;

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The event that caused the Flow to transition to the Step. */
		name?: string | null;

		/**
		 * The unique string that we created to identify the ExecutionStep resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The Widget that preceded the Widget for the Step. */
		transitioned_from?: string | null;

		/** The Widget that will follow the Widget for the Step. */
		transitioned_to?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Studiov2flowexecutionexecution_stepFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionStep resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context: FormControl<any | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Step's Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		execution_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The event that caused the Flow to transition to the Step. */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the ExecutionStep resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The Widget that preceded the Widget for the Step. */
		transitioned_from: FormControl<string | null | undefined>,

		/** The Widget that will follow the Widget for the Step. */
		transitioned_to: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov2flowexecutionexecution_stepFormGroup() {
		return new FormGroup<Studiov2flowexecutionexecution_stepFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			execution_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FT[0-9a-fA-F]{32}$')]),
			transitioned_from: new FormControl<string | null | undefined>(undefined),
			transitioned_to: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov2flowexecutionexecution_stepexecution_step_context {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionStepContext resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context?: any;

		/**
		 * The SID of the context's Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		execution_sid?: string | null;

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid?: string | null;

		/**
		 * The SID of the Step that the context is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		step_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Studiov2flowexecutionexecution_stepexecution_step_contextFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionStepContext resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context: FormControl<any | null | undefined>,

		/**
		 * The SID of the context's Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		execution_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Step that the context is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		step_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov2flowexecutionexecution_stepexecution_step_contextFormGroup() {
		return new FormGroup<Studiov2flowexecutionexecution_stepexecution_step_contextFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			execution_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			step_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov2flowflow_revision {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Description of change made in the revision. */
		commit_message?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** JSON representation of flow definition. */
		definition?: any;

		/** List of error in the flow definition. */
		errors?: Array<string>;

		/** The string that you assigned to describe the Flow. */
		friendly_name?: string | null;

		/** The latest revision number of the Flow's definition. */
		revision?: number | null;

		/**
		 * The unique string that we created to identify the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Flow_enum_status | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** Boolean if the flow definition is valid. */
		valid?: boolean | null;
	}
	export interface Studiov2flowflow_revisionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Description of change made in the revision. */
		commit_message: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** JSON representation of flow definition. */
		definition: FormControl<any | null | undefined>,

		/** The string that you assigned to describe the Flow. */
		friendly_name: FormControl<string | null | undefined>,

		/** The latest revision number of the Flow's definition. */
		revision: FormControl<number | null | undefined>,

		/**
		 * The unique string that we created to identify the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Flow_enum_status | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** Boolean if the flow definition is valid. */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateStudiov2flowflow_revisionFormGroup() {
		return new FormGroup<Studiov2flowflow_revisionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			commit_message: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			definition: new FormControl<any | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			status: new FormControl<Flow_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Studiov2flowtest_user {

		/**
		 * Unique identifier of the flow.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** List of test user identities that can test draft versions of the flow. */
		test_users?: Array<string>;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Studiov2flowtest_userFormProperties {

		/**
		 * Unique identifier of the flow.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov2flowtest_userFormGroup() {
		return new FormGroup<Studiov2flowtest_userFormProperties>({
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov2flow_validate {

		/** Boolean if the flow definition is valid. */
		valid?: boolean | null;
	}
	export interface Studiov2flow_validateFormProperties {

		/** Boolean if the flow definition is valid. */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateStudiov2flow_validateFormGroup() {
		return new FormGroup<Studiov2flow_validateFormProperties>({
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of all Flows.
		 * Get v2/Flows
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFlowReturn} OK
		 */
		ListFlow(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFlowReturn> {
			return this.http.get<ListFlowReturn>(this.baseUri + 'v2/Flows?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Executions for the Flow.
		 * Get v2/Flows/{FlowSid}/Executions
		 * @param {string} FlowSid The SID of the Flow with the Execution resources to read.
		 * @param {Date} DateCreatedFrom Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
		 * @param {Date} DateCreatedTo Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListExecutionReturn} OK
		 */
		ListExecution(FlowSid: string, DateCreatedFrom: Date | null | undefined, DateCreatedTo: Date | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListExecutionReturn> {
			return this.http.get<ListExecutionReturn>(this.baseUri + 'v2/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions&DateCreatedFrom=' + DateCreatedFrom?.toISOString() + '&DateCreatedTo=' + DateCreatedTo?.toISOString() + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve the most recent context for an Execution.
		 * Get v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context
		 * @param {string} FlowSid The SID of the Flow with the Execution context to fetch.
		 * @param {string} ExecutionSid The SID of the Execution context to fetch.
		 * @return {Studiov2flowexecutionexecution_context} OK
		 */
		FetchExecutionContext(FlowSid: string, ExecutionSid: string): Observable<Studiov2flowexecutionexecution_context> {
			return this.http.get<Studiov2flowexecutionexecution_context>(this.baseUri + 'v2/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Context', {});
		}

		/**
		 * Retrieve a list of all Steps for an Execution.
		 * Get v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps
		 * @param {string} FlowSid The SID of the Flow with the Steps to read.
		 * @param {string} ExecutionSid The SID of the Execution with the Steps to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListExecutionStepReturn} OK
		 */
		ListExecutionStep(FlowSid: string, ExecutionSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListExecutionStepReturn> {
			return this.http.get<ListExecutionStepReturn>(this.baseUri + 'v2/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Steps&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a Step.
		 * Get v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}
		 * @param {string} FlowSid The SID of the Flow with the Step to fetch.
		 * @param {string} ExecutionSid The SID of the Execution resource with the Step to fetch.
		 * @param {string} Sid The SID of the ExecutionStep resource to fetch.
		 * @return {Studiov2flowexecutionexecution_step} OK
		 */
		FetchExecutionStep(FlowSid: string, ExecutionSid: string, Sid: string): Observable<Studiov2flowexecutionexecution_step> {
			return this.http.get<Studiov2flowexecutionexecution_step>(this.baseUri + 'v2/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Steps/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve the context for an Execution Step.
		 * Get v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context
		 * @param {string} FlowSid The SID of the Flow with the Step to fetch.
		 * @param {string} ExecutionSid The SID of the Execution resource with the Step to fetch.
		 * @param {string} StepSid The SID of the Step to fetch.
		 * @return {Studiov2flowexecutionexecution_stepexecution_step_context} OK
		 */
		FetchExecutionStepContext(FlowSid: string, ExecutionSid: string, StepSid: string): Observable<Studiov2flowexecutionexecution_stepexecution_step_context> {
			return this.http.get<Studiov2flowexecutionexecution_stepexecution_step_context>(this.baseUri + 'v2/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Steps/' + (StepSid == null ? '' : encodeURIComponent(StepSid)) + '/Context', {});
		}

		/**
		 * Delete the Execution and all Steps relating to it.
		 * Delete v2/Flows/{FlowSid}/Executions/{Sid}
		 * @param {string} FlowSid The SID of the Flow with the Execution resources to delete.
		 * @param {string} Sid The SID of the Execution resource to delete.
		 * @return {void} 
		 */
		DeleteExecution(FlowSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve an Execution
		 * Get v2/Flows/{FlowSid}/Executions/{Sid}
		 * @param {string} FlowSid The SID of the Flow with the Execution resource to fetch
		 * @param {string} Sid The SID of the Execution resource to fetch.
		 * @return {Studiov2flowexecution} OK
		 */
		FetchExecution(FlowSid: string, Sid: string): Observable<Studiov2flowexecution> {
			return this.http.get<Studiov2flowexecution>(this.baseUri + 'v2/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a specific Flow.
		 * Delete v2/Flows/{Sid}
		 * @param {string} Sid The SID of the Flow resource to delete.
		 * @return {void} 
		 */
		DeleteFlow(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/Flows/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific Flow.
		 * Get v2/Flows/{Sid}
		 * @param {string} Sid The SID of the Flow resource to fetch.
		 * @return {Studiov2flow} OK
		 */
		FetchFlow(Sid: string): Observable<Studiov2flow> {
			return this.http.get<Studiov2flow>(this.baseUri + 'v2/Flows/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Flows revisions.
		 * Get v2/Flows/{Sid}/Revisions
		 * @param {string} Sid The SID of the Flow resource to fetch.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFlowRevisionReturn} OK
		 */
		ListFlowRevision(Sid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFlowRevisionReturn> {
			return this.http.get<ListFlowRevisionReturn>(this.baseUri + 'v2/Flows/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/Revisions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a specific Flow revision.
		 * Get v2/Flows/{Sid}/Revisions/{Revision}
		 * @param {string} Sid The SID of the Flow resource to fetch.
		 * @param {string} Revision Specific Revision number or can be `LatestPublished` and `LatestRevision`.
		 * @return {Studiov2flowflow_revision} OK
		 */
		FetchFlowRevision(Sid: string, Revision: string): Observable<Studiov2flowflow_revision> {
			return this.http.get<Studiov2flowflow_revision>(this.baseUri + 'v2/Flows/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/Revisions/' + (Revision == null ? '' : encodeURIComponent(Revision)), {});
		}

		/**
		 * Fetch flow test users
		 * Get v2/Flows/{Sid}/TestUsers
		 * @param {string} Sid Unique identifier of the flow.
		 * @return {Studiov2flowtest_user} OK
		 */
		FetchTestUser(Sid: string): Observable<Studiov2flowtest_user> {
			return this.http.get<Studiov2flowtest_user>(this.baseUri + 'v2/Flows/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/TestUsers', {});
		}
	}

	export interface ListFlowReturn {
		flows?: Array<Studiov2flow>;
		meta?: ListFlowReturnMeta;
	}
	export interface ListFlowReturnFormProperties {
	}
	export function CreateListFlowReturnFormGroup() {
		return new FormGroup<ListFlowReturnFormProperties>({
		});

	}

	export interface ListFlowReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFlowReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFlowReturnMetaFormGroup() {
		return new FormGroup<ListFlowReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExecutionReturn {
		executions?: Array<Studiov2flowexecution>;
		meta?: ListExecutionReturnMeta;
	}
	export interface ListExecutionReturnFormProperties {
	}
	export function CreateListExecutionReturnFormGroup() {
		return new FormGroup<ListExecutionReturnFormProperties>({
		});

	}

	export interface ListExecutionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListExecutionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionReturnMetaFormGroup() {
		return new FormGroup<ListExecutionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExecutionStepReturn {
		meta?: ListExecutionStepReturnMeta;
		steps?: Array<Studiov2flowexecutionexecution_step>;
	}
	export interface ListExecutionStepReturnFormProperties {
	}
	export function CreateListExecutionStepReturnFormGroup() {
		return new FormGroup<ListExecutionStepReturnFormProperties>({
		});

	}

	export interface ListExecutionStepReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListExecutionStepReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionStepReturnMetaFormGroup() {
		return new FormGroup<ListExecutionStepReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFlowRevisionReturn {
		meta?: ListFlowRevisionReturnMeta;
		revisions?: Array<Studiov2flowflow_revision>;
	}
	export interface ListFlowRevisionReturnFormProperties {
	}
	export function CreateListFlowRevisionReturnFormGroup() {
		return new FormGroup<ListFlowRevisionReturnFormProperties>({
		});

	}

	export interface ListFlowRevisionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFlowRevisionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFlowRevisionReturnMetaFormGroup() {
		return new FormGroup<ListFlowRevisionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

