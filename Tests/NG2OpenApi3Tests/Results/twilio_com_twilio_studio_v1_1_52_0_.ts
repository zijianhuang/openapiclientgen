import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Engagement_enum_status { active = 0, ended = 1 }

	export enum Execution_enum_status { active = 0, ended = 1 }

	export enum Flow_enum_status { draft = 0, published = 1 }

	export interface Studiov1flow {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the Flow. */
		friendly_name?: string | null;

		/** The URLs of the Flow's nested resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Flow_enum_status | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** The latest version number of the Flow's definition. */
		version?: number | null;
	}
	export interface Studiov1flowFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the Flow. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of the Flow's nested resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Flow_enum_status | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** The latest version number of the Flow's definition. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateStudiov1flowFormGroup() {
		return new FormGroup<Studiov1flowFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			status: new FormControl<Flow_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Studiov1flowengagement {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Engagement resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The phone number, SIP address or Client identifier that triggered this Engagement. Phone numbers are in E.164 format (+16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. */
		contact_channel_address?: string | null;

		/**
		 * The SID of the Contact.
		 * Max length: 34
		 * Min length: 34
		 */
		contact_sid?: string | null;

		/** The current state of the execution flow. As your flow executes, we save the state in a flow context. Your widgets can access the data in the flow context as variables, either in configuration fields or in text areas as variable substitution. */
		context?: any;

		/** The date and time in GMT when the Engagement was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Engagement was updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid?: string | null;

		/** The URLs of the Engagement's nested resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Engagement resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Engagement_enum_status | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Studiov1flowengagementFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Engagement resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The phone number, SIP address or Client identifier that triggered this Engagement. Phone numbers are in E.164 format (+16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. */
		contact_channel_address: FormControl<string | null | undefined>,

		/**
		 * The SID of the Contact.
		 * Max length: 34
		 * Min length: 34
		 */
		contact_sid: FormControl<string | null | undefined>,

		/** The current state of the execution flow. As your flow executes, we save the state in a flow context. Your widgets can access the data in the flow context as variables, either in configuration fields or in text areas as variable substitution. */
		context: FormControl<any | null | undefined>,

		/** The date and time in GMT when the Engagement was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Engagement was updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid: FormControl<string | null | undefined>,

		/** The URLs of the Engagement's nested resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Engagement resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Engagement_enum_status | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov1flowengagementFormGroup() {
		return new FormGroup<Studiov1flowengagementFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			contact_channel_address: new FormControl<string | null | undefined>(undefined),
			contact_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			status: new FormControl<Engagement_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov1flowengagementengagement_context {

		/**
		 * The SID of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** As your flow executes, we save the state in what's called the Flow Context. Any data in the flow context can be accessed by your widgets as variables, either in configuration fields or in text areas as variable substitution. */
		context?: any;

		/**
		 * The SID of the Engagement.
		 * Max length: 34
		 * Min length: 34
		 */
		engagement_sid?: string | null;

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid?: string | null;

		/** The URL of the resource. */
		url?: string | null;
	}
	export interface Studiov1flowengagementengagement_contextFormProperties {

		/**
		 * The SID of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** As your flow executes, we save the state in what's called the Flow Context. Any data in the flow context can be accessed by your widgets as variables, either in configuration fields or in text areas as variable substitution. */
		context: FormControl<any | null | undefined>,

		/**
		 * The SID of the Engagement.
		 * Max length: 34
		 * Min length: 34
		 */
		engagement_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid: FormControl<string | null | undefined>,

		/** The URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov1flowengagementengagement_contextFormGroup() {
		return new FormGroup<Studiov1flowengagementengagement_contextFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			engagement_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov1flowengagementstep {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Step resource.
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
		 * The SID of the Engagement.
		 * Max length: 34
		 * Min length: 34
		 */
		engagement_sid?: string | null;

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
		 * The unique string that we created to identify the Step resource.
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
	export interface Studiov1flowengagementstepFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Step resource.
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
		 * The SID of the Engagement.
		 * Max length: 34
		 * Min length: 34
		 */
		engagement_sid: FormControl<string | null | undefined>,

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
		 * The unique string that we created to identify the Step resource.
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
	export function CreateStudiov1flowengagementstepFormGroup() {
		return new FormGroup<Studiov1flowengagementstepFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			engagement_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FT[0-9a-fA-F]{32}$')]),
			transitioned_from: new FormControl<string | null | undefined>(undefined),
			transitioned_to: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov1flowengagementstepstep_context {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the StepContext resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context?: any;

		/**
		 * The SID of the Engagement.
		 * Max length: 34
		 * Min length: 34
		 */
		engagement_sid?: string | null;

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid?: string | null;

		/**
		 * The SID of the Step the context is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		step_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Studiov1flowengagementstepstep_contextFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the StepContext resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution. */
		context: FormControl<any | null | undefined>,

		/**
		 * The SID of the Engagement.
		 * Max length: 34
		 * Min length: 34
		 */
		engagement_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flow_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Step the context is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		step_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov1flowengagementstepstep_contextFormGroup() {
		return new FormGroup<Studiov1flowengagementstepstep_contextFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			engagement_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			step_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov1flowexecution {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. */
		contact_channel_address?: string | null;

		/**
		 * The SID of the Contact.
		 * Max length: 34
		 * Min length: 34
		 */
		contact_sid?: string | null;

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
		status?: Engagement_enum_status | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Studiov1flowexecutionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. */
		contact_channel_address: FormControl<string | null | undefined>,

		/**
		 * The SID of the Contact.
		 * Max length: 34
		 * Min length: 34
		 */
		contact_sid: FormControl<string | null | undefined>,

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
		status: FormControl<Engagement_enum_status | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateStudiov1flowexecutionFormGroup() {
		return new FormGroup<Studiov1flowexecutionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			contact_channel_address: new FormControl<string | null | undefined>(undefined),
			contact_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			status: new FormControl<Engagement_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov1flowexecutionexecution_context {

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
	export interface Studiov1flowexecutionexecution_contextFormProperties {

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
	export function CreateStudiov1flowexecutionexecution_contextFormGroup() {
		return new FormGroup<Studiov1flowexecutionexecution_contextFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			execution_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Studiov1flowexecutionexecution_step {

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
	export interface Studiov1flowexecutionexecution_stepFormProperties {

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
	export function CreateStudiov1flowexecutionexecution_stepFormGroup() {
		return new FormGroup<Studiov1flowexecutionexecution_stepFormProperties>({
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

	export interface Studiov1flowexecutionexecution_stepexecution_step_context {

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
	export interface Studiov1flowexecutionexecution_stepexecution_step_contextFormProperties {

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
	export function CreateStudiov1flowexecutionexecution_stepexecution_step_contextFormGroup() {
		return new FormGroup<Studiov1flowexecutionexecution_stepexecution_step_contextFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			context: new FormControl<any | null | undefined>(undefined),
			execution_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FN[0-9a-fA-F]{32}$')]),
			flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FW[0-9a-fA-F]{32}$')]),
			step_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of all Flows.
		 * Get v1/Flows
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFlowReturn} OK
		 */
		ListFlow(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFlowReturn> {
			return this.http.get<ListFlowReturn>(this.baseUri + 'v1/Flows?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Engagements for the Flow.
		 * Get v1/Flows/{FlowSid}/Engagements
		 * @param {string} FlowSid The SID of the Flow to read Engagements from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListEngagementReturn} OK
		 */
		ListEngagement(FlowSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListEngagementReturn> {
			return this.http.get<ListEngagementReturn>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Engagements&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve the most recent context for an Engagement.
		 * Get v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context
		 * @param {string} FlowSid The SID of the Flow.
		 * @param {string} EngagementSid The SID of the Engagement.
		 * @return {Studiov1flowengagementengagement_context} OK
		 */
		FetchEngagementContext(FlowSid: string, EngagementSid: string): Observable<Studiov1flowengagementengagement_context> {
			return this.http.get<Studiov1flowengagementengagement_context>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Engagements/' + (EngagementSid == null ? '' : encodeURIComponent(EngagementSid)) + '/Context', {});
		}

		/**
		 * Retrieve a list of all Steps for an Engagement.
		 * Get v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps
		 * @param {string} FlowSid The SID of the Flow with the Step to read.
		 * @param {string} EngagementSid The SID of the Engagement with the Step to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListStepReturn} OK
		 */
		ListStep(FlowSid: string, EngagementSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListStepReturn> {
			return this.http.get<ListStepReturn>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Engagements/' + (EngagementSid == null ? '' : encodeURIComponent(EngagementSid)) + '/Steps&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a Step.
		 * Get v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}
		 * @param {string} FlowSid The SID of the Flow with the Step to fetch.
		 * @param {string} EngagementSid The SID of the Engagement with the Step to fetch.
		 * @param {string} Sid The SID of the Step resource to fetch.
		 * @return {Studiov1flowengagementstep} OK
		 */
		FetchStep(FlowSid: string, EngagementSid: string, Sid: string): Observable<Studiov1flowengagementstep> {
			return this.http.get<Studiov1flowengagementstep>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Engagements/' + (EngagementSid == null ? '' : encodeURIComponent(EngagementSid)) + '/Steps/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve the context for an Engagement Step.
		 * Get v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context
		 * @param {string} FlowSid The SID of the Flow with the Step to fetch.
		 * @param {string} EngagementSid The SID of the Engagement with the Step to fetch.
		 * @param {string} StepSid The SID of the Step to fetch
		 * @return {Studiov1flowengagementstepstep_context} OK
		 */
		FetchStepContext(FlowSid: string, EngagementSid: string, StepSid: string): Observable<Studiov1flowengagementstepstep_context> {
			return this.http.get<Studiov1flowengagementstepstep_context>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Engagements/' + (EngagementSid == null ? '' : encodeURIComponent(EngagementSid)) + '/Steps/' + (StepSid == null ? '' : encodeURIComponent(StepSid)) + '/Context', {});
		}

		/**
		 * Delete this Engagement and all Steps relating to it.
		 * Delete v1/Flows/{FlowSid}/Engagements/{Sid}
		 * @param {string} FlowSid The SID of the Flow to delete Engagements from.
		 * @param {string} Sid The SID of the Engagement resource to delete.
		 * @return {void} 
		 */
		DeleteEngagement(FlowSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Engagements/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve an Engagement
		 * Get v1/Flows/{FlowSid}/Engagements/{Sid}
		 * @param {string} FlowSid The SID of the Flow.
		 * @param {string} Sid The SID of the Engagement resource to fetch.
		 * @return {Studiov1flowengagement} OK
		 */
		FetchEngagement(FlowSid: string, Sid: string): Observable<Studiov1flowengagement> {
			return this.http.get<Studiov1flowengagement>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Engagements/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Executions for the Flow.
		 * Get v1/Flows/{FlowSid}/Executions
		 * @param {string} FlowSid The SID of the Flow with the Execution resources to read.
		 * @param {Date} DateCreatedFrom Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
		 * @param {Date} DateCreatedTo Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListExecutionReturn} OK
		 */
		ListExecution(FlowSid: string, DateCreatedFrom: Date | null | undefined, DateCreatedTo: Date | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListExecutionReturn> {
			return this.http.get<ListExecutionReturn>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions&DateCreatedFrom=' + DateCreatedFrom?.toISOString() + '&DateCreatedTo=' + DateCreatedTo?.toISOString() + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve the most recent context for an Execution.
		 * Get v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Context
		 * @param {string} FlowSid The SID of the Flow with the Execution context to fetch.
		 * @param {string} ExecutionSid The SID of the Execution context to fetch.
		 * @return {Studiov1flowexecutionexecution_context} OK
		 */
		FetchExecutionContext(FlowSid: string, ExecutionSid: string): Observable<Studiov1flowexecutionexecution_context> {
			return this.http.get<Studiov1flowexecutionexecution_context>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Context', {});
		}

		/**
		 * Retrieve a list of all Steps for an Execution.
		 * Get v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps
		 * @param {string} FlowSid The SID of the Flow with the Steps to read.
		 * @param {string} ExecutionSid The SID of the Execution with the Steps to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListExecutionStepReturn} OK
		 */
		ListExecutionStep(FlowSid: string, ExecutionSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListExecutionStepReturn> {
			return this.http.get<ListExecutionStepReturn>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Steps&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a Step.
		 * Get v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}
		 * @param {string} FlowSid The SID of the Flow with the Step to fetch.
		 * @param {string} ExecutionSid The SID of the Execution resource with the Step to fetch.
		 * @param {string} Sid The SID of the ExecutionStep resource to fetch.
		 * @return {Studiov1flowexecutionexecution_step} OK
		 */
		FetchExecutionStep(FlowSid: string, ExecutionSid: string, Sid: string): Observable<Studiov1flowexecutionexecution_step> {
			return this.http.get<Studiov1flowexecutionexecution_step>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Steps/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve the context for an Execution Step.
		 * Get v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context
		 * @param {string} FlowSid The SID of the Flow with the Step to fetch.
		 * @param {string} ExecutionSid The SID of the Execution resource with the Step to fetch.
		 * @param {string} StepSid The SID of the Step to fetch.
		 * @return {Studiov1flowexecutionexecution_stepexecution_step_context} OK
		 */
		FetchExecutionStepContext(FlowSid: string, ExecutionSid: string, StepSid: string): Observable<Studiov1flowexecutionexecution_stepexecution_step_context> {
			return this.http.get<Studiov1flowexecutionexecution_stepexecution_step_context>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (ExecutionSid == null ? '' : encodeURIComponent(ExecutionSid)) + '/Steps/' + (StepSid == null ? '' : encodeURIComponent(StepSid)) + '/Context', {});
		}

		/**
		 * Delete the Execution and all Steps relating to it.
		 * Delete v1/Flows/{FlowSid}/Executions/{Sid}
		 * @param {string} FlowSid The SID of the Flow with the Execution resources to delete.
		 * @param {string} Sid The SID of the Execution resource to delete.
		 * @return {void} 
		 */
		DeleteExecution(FlowSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve an Execution
		 * Get v1/Flows/{FlowSid}/Executions/{Sid}
		 * @param {string} FlowSid The SID of the Flow with the Execution resource to fetch
		 * @param {string} Sid The SID of the Execution resource to fetch.
		 * @return {Studiov1flowexecution} OK
		 */
		FetchExecution(FlowSid: string, Sid: string): Observable<Studiov1flowexecution> {
			return this.http.get<Studiov1flowexecution>(this.baseUri + 'v1/Flows/' + (FlowSid == null ? '' : encodeURIComponent(FlowSid)) + '/Executions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a specific Flow.
		 * Delete v1/Flows/{Sid}
		 * @param {string} Sid The SID of the Flow resource to delete.
		 * @return {void} 
		 */
		DeleteFlow(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Flows/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific Flow.
		 * Get v1/Flows/{Sid}
		 * @param {string} Sid The SID of the Flow resource to fetch.
		 * @return {Studiov1flow} OK
		 */
		FetchFlow(Sid: string): Observable<Studiov1flow> {
			return this.http.get<Studiov1flow>(this.baseUri + 'v1/Flows/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListFlowReturn {
		flows?: Array<Studiov1flow>;
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

	export interface ListEngagementReturn {
		engagements?: Array<Studiov1flowengagement>;
		meta?: ListEngagementReturnMeta;
	}
	export interface ListEngagementReturnFormProperties {
	}
	export function CreateListEngagementReturnFormGroup() {
		return new FormGroup<ListEngagementReturnFormProperties>({
		});

	}

	export interface ListEngagementReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListEngagementReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListEngagementReturnMetaFormGroup() {
		return new FormGroup<ListEngagementReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStepReturn {
		meta?: ListStepReturnMeta;
		steps?: Array<Studiov1flowengagementstep>;
	}
	export interface ListStepReturnFormProperties {
	}
	export function CreateListStepReturnFormGroup() {
		return new FormGroup<ListStepReturnFormProperties>({
		});

	}

	export interface ListStepReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListStepReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListStepReturnMetaFormGroup() {
		return new FormGroup<ListStepReturnMetaFormProperties>({
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
		executions?: Array<Studiov1flowexecution>;
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
		steps?: Array<Studiov1flowexecutionexecution_step>;
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

}

