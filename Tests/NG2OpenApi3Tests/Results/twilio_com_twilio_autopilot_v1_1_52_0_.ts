import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Autopilotv1assistant {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Reserved. */
		callback_events?: string | null;

		/** Reserved. */
		callback_url?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** A string describing the state of the assistant. */
		development_stage?: string | null;

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name?: string | null;

		/**
		 * Reserved.
		 * Min length: 34
		 * Max length: 34
		 */
		latest_model_build_sid?: string | null;

		/** A list of the URLs of the Assistant's related resources. */
		links?: string | null;

		/** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
		log_queries?: boolean | null;

		/** Whether model needs to be rebuilt. */
		needs_model_build?: boolean | null;

		/**
		 * The unique string that we created to identify the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. It can be up to 64 characters long. */
		unique_name?: string | null;

		/** The absolute URL of the Assistant resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistantFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Reserved. */
		callback_events: FormControl<string | null | undefined>,

		/** Reserved. */
		callback_url: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A string describing the state of the assistant. */
		development_stage: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * Reserved.
		 * Min length: 34
		 * Max length: 34
		 */
		latest_model_build_sid: FormControl<string | null | undefined>,

		/** A list of the URLs of the Assistant's related resources. */
		links: FormControl<string | null | undefined>,

		/** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
		log_queries: FormControl<boolean | null | undefined>,

		/** Whether model needs to be rebuilt. */
		needs_model_build: FormControl<boolean | null | undefined>,

		/**
		 * The unique string that we created to identify the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. It can be up to 64 characters long. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Assistant resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantFormGroup() {
		return new FormGroup<Autopilotv1assistantFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			callback_events: new FormControl<string | null | undefined>(undefined),
			callback_url: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			development_stage: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			latest_model_build_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UG[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			log_queries: new FormControl<boolean | null | undefined>(undefined),
			needs_model_build: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistantdefaults {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Defaults resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations. */
		data?: any;

		/** The absolute URL of the Defaults resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistantdefaultsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Defaults resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations. */
		data: FormControl<any | null | undefined>,

		/** The absolute URL of the Defaults resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantdefaultsFormGroup() {
		return new FormGroup<Autopilotv1assistantdefaultsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			data: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistantdialogue {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Dialogue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The JSON string that describes the dialogue session object. */
		data?: any;

		/**
		 * The unique string that we created to identify the Dialogue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Dialogue resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistantdialogueFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Dialogue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The JSON string that describes the dialogue session object. */
		data: FormControl<any | null | undefined>,

		/**
		 * The unique string that we created to identify the Dialogue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Dialogue resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantdialogueFormGroup() {
		return new FormGroup<Autopilotv1assistantdialogueFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			data: new FormControl<any | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UK[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistantfield_type {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the FieldType resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name?: string | null;

		/** A list of the URLs of related resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the FieldType resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the FieldType resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistantfield_typeFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the FieldType resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name: FormControl<string | null | undefined>,

		/** A list of the URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the FieldType resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the FieldType resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantfield_typeFormGroup() {
		return new FormGroup<Autopilotv1assistantfield_typeFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UB[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistantfield_typefield_value {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the FieldValue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Field Type associated with the Field Value.
		 * Min length: 34
		 * Max length: 34
		 */
		field_type_sid?: string | null;

		/** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
		language?: string | null;

		/**
		 * The unique string that we created to identify the FieldValue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/**
		 * The word for which the field value is a synonym of.
		 * Min length: 34
		 * Max length: 34
		 */
		synonym_of?: string | null;

		/** The absolute URL of the FieldValue resource. */
		url?: string | null;

		/** The Field Value data. */
		value?: string | null;
	}
	export interface Autopilotv1assistantfield_typefield_valueFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the FieldValue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Field Type associated with the Field Value.
		 * Min length: 34
		 * Max length: 34
		 */
		field_type_sid: FormControl<string | null | undefined>,

		/** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
		language: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the FieldValue resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The word for which the field value is a synonym of.
		 * Min length: 34
		 * Max length: 34
		 */
		synonym_of: FormControl<string | null | undefined>,

		/** The absolute URL of the FieldValue resource. */
		url: FormControl<string | null | undefined>,

		/** The Field Value data. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantfield_typefield_valueFormGroup() {
		return new FormGroup<Autopilotv1assistantfield_typefield_valueFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			field_type_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UB[0-9a-fA-F]{32}$')]),
			language: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UC[0-9a-fA-F]{32}$')]),
			synonym_of: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UC[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistantmodel_build {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ModelBuild resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/**
		 * The time in seconds it took to build the model.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		build_duration?: number | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/**
		 * If the `status` for the model build is `failed`, this value is a code to more information about the failure. This value will be null for all other statuses. See [error code dictionary](https://www.twilio.com/docs/api/errors) for a description of the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code?: number | null;

		/**
		 * The unique string that we created to identify the ModelBuild resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		status?: Autopilotv1assistantmodel_buildStatus | null;

		/** An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the ModelBuild resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistantmodel_buildFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ModelBuild resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/**
		 * The time in seconds it took to build the model.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		build_duration: FormControl<number | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * If the `status` for the model build is `failed`, this value is a code to more information about the failure. This value will be null for all other statuses. See [error code dictionary](https://www.twilio.com/docs/api/errors) for a description of the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code: FormControl<number | null | undefined>,

		/**
		 * The unique string that we created to identify the ModelBuild resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Autopilotv1assistantmodel_buildStatus | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the ModelBuild resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantmodel_buildFormGroup() {
		return new FormGroup<Autopilotv1assistantmodel_buildFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			build_duration: new FormControl<number | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			error_code: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UG[0-9a-fA-F]{32}$')]),
			status: new FormControl<Autopilotv1assistantmodel_buildStatus | null | undefined>(undefined),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Autopilotv1assistantmodel_buildStatus { enqueued = 'enqueued', building = 'building', completed = 'completed', failed = 'failed', canceled = 'canceled' }

	export interface Autopilotv1assistantquery {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Query resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
		 * Min length: 34
		 * Max length: 34
		 */
		dialogue_sid?: string | null;

		/** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query. For example: `en-US`. */
		language?: string | null;

		/**
		 * The SID of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) queried.
		 * Min length: 34
		 * Max length: 34
		 */
		model_build_sid?: string | null;

		/** The end-user's natural language input. */
		query?: string | null;

		/** The natural language analysis results that include the [Task](https://www.twilio.com/docs/autopilot/api/task) recognized and a list of identified [Fields](https://www.twilio.com/docs/autopilot/api/task-field). */
		results?: any;

		/**
		 * The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query.
		 * Min length: 34
		 * Max length: 34
		 */
		sample_sid?: string | null;

		/**
		 * The unique string that we created to identify the Query resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The communication channel from where the end-user input came. */
		source_channel?: string | null;

		/** The status of the Query. Can be: `pending-review`, `reviewed`, or `discarded` */
		status?: string | null;

		/** The absolute URL of the Query resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistantqueryFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Query resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
		 * Min length: 34
		 * Max length: 34
		 */
		dialogue_sid: FormControl<string | null | undefined>,

		/** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query. For example: `en-US`. */
		language: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) queried.
		 * Min length: 34
		 * Max length: 34
		 */
		model_build_sid: FormControl<string | null | undefined>,

		/** The end-user's natural language input. */
		query: FormControl<string | null | undefined>,

		/** The natural language analysis results that include the [Task](https://www.twilio.com/docs/autopilot/api/task) recognized and a list of identified [Fields](https://www.twilio.com/docs/autopilot/api/task-field). */
		results: FormControl<any | null | undefined>,

		/**
		 * The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query.
		 * Min length: 34
		 * Max length: 34
		 */
		sample_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Query resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The communication channel from where the end-user input came. */
		source_channel: FormControl<string | null | undefined>,

		/** The status of the Query. Can be: `pending-review`, `reviewed`, or `discarded` */
		status: FormControl<string | null | undefined>,

		/** The absolute URL of the Query resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantqueryFormGroup() {
		return new FormGroup<Autopilotv1assistantqueryFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			dialogue_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UK[0-9a-fA-F]{32}$')]),
			language: new FormControl<string | null | undefined>(undefined),
			model_build_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UG[0-9a-fA-F]{32}$')]),
			query: new FormControl<string | null | undefined>(undefined),
			results: new FormControl<any | null | undefined>(undefined),
			sample_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UF[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UH[0-9a-fA-F]{32}$')]),
			source_channel: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistantstyle_sheet {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the StyleSheet resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The JSON string that describes the style sheet object. */
		data?: any;

		/** The absolute URL of the StyleSheet resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistantstyle_sheetFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the StyleSheet resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The JSON string that describes the style sheet object. */
		data: FormControl<any | null | undefined>,

		/** The absolute URL of the StyleSheet resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantstyle_sheetFormGroup() {
		return new FormGroup<Autopilotv1assistantstyle_sheetFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			data: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistanttask {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The URL from which the Assistant can fetch actions. */
		actions_url?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name?: string | null;

		/** A list of the URLs of related resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Task resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the Task resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistanttaskFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The URL from which the Assistant can fetch actions. */
		actions_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name: FormControl<string | null | undefined>,

		/** A list of the URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Task resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Task resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistanttaskFormGroup() {
		return new FormGroup<Autopilotv1assistanttaskFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			actions_url: new FormControl<string | null | undefined>(undefined),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UD[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistanttaskfield {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Field resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The Field Type of the field. Can be: a [Built-in Field Type](https://www.twilio.com/docs/autopilot/built-in-field-types), the unique_name, or the SID of a custom Field Type. */
		field_type?: string | null;

		/**
		 * The unique string that we created to identify the Field resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with this Field.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the Field resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistanttaskfieldFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Field resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The Field Type of the field. Can be: a [Built-in Field Type](https://www.twilio.com/docs/autopilot/built-in-field-types), the unique_name, or the SID of a custom Field Type. */
		field_type: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Field resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with this Field.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Field resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistanttaskfieldFormGroup() {
		return new FormGroup<Autopilotv1assistanttaskfieldFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			field_type: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UE[0-9a-fA-F]{32}$')]),
			task_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UD[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistanttasksample {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sample resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
		language?: string | null;

		/**
		 * The unique string that we created to identify the Sample resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included. */
		source_channel?: string | null;

		/** The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging). */
		tagged_text?: string | null;

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid?: string | null;

		/** The absolute URL of the Sample resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistanttasksampleFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sample resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
		language: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Sample resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included. */
		source_channel: FormControl<string | null | undefined>,

		/** The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging). */
		tagged_text: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Sample resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistanttasksampleFormGroup() {
		return new FormGroup<Autopilotv1assistanttasksampleFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UF[0-9a-fA-F]{32}$')]),
			source_channel: new FormControl<string | null | undefined>(undefined),
			tagged_text: new FormControl<string | null | undefined>(undefined),
			task_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UD[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistanttasktask_actions {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskActions resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task. */
		data?: any;

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid?: string | null;

		/** The absolute URL of the TaskActions resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistanttasktask_actionsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskActions resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task. */
		data: FormControl<any | null | undefined>,

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the TaskActions resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistanttasktask_actionsFormGroup() {
		return new FormGroup<Autopilotv1assistanttasktask_actionsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			data: new FormControl<any | null | undefined>(undefined),
			task_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UD[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistanttasktask_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskStatistics resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/**
		 * The total number of [Fields](https://www.twilio.com/docs/autopilot/api/task-field) associated with the Task.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fields_count?: number | null;

		/**
		 * The total number of [Samples](https://www.twilio.com/docs/autopilot/api/task-sample) associated with the Task.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		samples_count?: number | null;

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) for which the statistics were collected.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid?: string | null;

		/** The absolute URL of the TaskStatistics resource. */
		url?: string | null;
	}
	export interface Autopilotv1assistanttasktask_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskStatistics resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/**
		 * The total number of [Fields](https://www.twilio.com/docs/autopilot/api/task-field) associated with the Task.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fields_count: FormControl<number | null | undefined>,

		/**
		 * The total number of [Samples](https://www.twilio.com/docs/autopilot/api/task-sample) associated with the Task.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		samples_count: FormControl<number | null | undefined>,

		/**
		 * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) for which the statistics were collected.
		 * Min length: 34
		 * Max length: 34
		 */
		task_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the TaskStatistics resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistanttasktask_statisticsFormGroup() {
		return new FormGroup<Autopilotv1assistanttasktask_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			fields_count: new FormControl<number | null | undefined>(undefined),
			samples_count: new FormControl<number | null | undefined>(undefined),
			task_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UD[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1assistantwebhook {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Webhook resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The list of space-separated events that this Webhook is subscribed to. */
		events?: string | null;

		/**
		 * The unique string that we created to identify the Webhook resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the Webhook resource. */
		url?: string | null;

		/** The method used when calling the webhook's URL. */
		webhook_method?: string | null;

		/** The URL associated with this Webhook. */
		webhook_url?: string | null;
	}
	export interface Autopilotv1assistantwebhookFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Webhook resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
		 * Min length: 34
		 * Max length: 34
		 */
		assistant_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The list of space-separated events that this Webhook is subscribed to. */
		events: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Webhook resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Webhook resource. */
		url: FormControl<string | null | undefined>,

		/** The method used when calling the webhook's URL. */
		webhook_method: FormControl<string | null | undefined>,

		/** The URL associated with this Webhook. */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1assistantwebhookFormGroup() {
		return new FormGroup<Autopilotv1assistantwebhookFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assistant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			events: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UM[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			webhook_method: new FormControl<string | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Autopilotv1restore_assistant {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Reserved. */
		callback_events?: string | null;

		/** Reserved. */
		callback_url?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** A string describing the state of the assistant. */
		development_stage?: string | null;

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name?: string | null;

		/**
		 * Reserved.
		 * Min length: 34
		 * Max length: 34
		 */
		latest_model_build_sid?: string | null;

		/** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
		log_queries?: boolean | null;

		/** Whether model needs to be rebuilt. */
		needs_model_build?: boolean | null;

		/**
		 * The unique string that we created to identify the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;
	}
	export interface Autopilotv1restore_assistantFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Reserved. */
		callback_events: FormControl<string | null | undefined>,

		/** Reserved. */
		callback_url: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A string describing the state of the assistant. */
		development_stage: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * Reserved.
		 * Min length: 34
		 * Max length: 34
		 */
		latest_model_build_sid: FormControl<string | null | undefined>,

		/** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
		log_queries: FormControl<boolean | null | undefined>,

		/** Whether model needs to be rebuilt. */
		needs_model_build: FormControl<boolean | null | undefined>,

		/**
		 * The unique string that we created to identify the Assistant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotv1restore_assistantFormGroup() {
		return new FormGroup<Autopilotv1restore_assistantFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			callback_events: new FormControl<string | null | undefined>(undefined),
			callback_url: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			development_stage: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			latest_model_build_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UG[0-9a-fA-F]{32}$')]),
			log_queries: new FormControl<boolean | null | undefined>(undefined),
			needs_model_build: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UA[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Model_build_enum_status { enqueued = 'enqueued', building = 'building', completed = 'completed', failed = 'failed', canceled = 'canceled' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/Assistants
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListAssistantReturn} OK
		 */
		ListAssistant(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListAssistantReturn> {
			return this.http.get<ListAssistantReturn>(this.baseUri + 'v1/Assistants?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Defaults
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @return {Autopilotv1assistantdefaults} OK
		 */
		FetchDefaults(AssistantSid: string): Observable<Autopilotv1assistantdefaults> {
			return this.http.get<Autopilotv1assistantdefaults>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Defaults', {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Dialogues/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Dialogue resource to fetch.
		 * @return {Autopilotv1assistantdialogue} OK
		 */
		FetchDialogue(AssistantSid: string, Sid: string): Observable<Autopilotv1assistantdialogue> {
			return this.http.get<Autopilotv1assistantdialogue>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Dialogues/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/FieldTypes
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFieldTypeReturn} OK
		 */
		ListFieldType(AssistantSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFieldTypeReturn> {
			return this.http.get<ListFieldTypeReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/FieldTypes&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resources to read.
		 * @param {string} FieldTypeSid The SID of the Field Type associated with the Field Value to read.
		 * @param {string} Language The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US`
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFieldValueReturn} OK
		 */
		ListFieldValue(AssistantSid: string, FieldTypeSid: string, Language: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFieldValueReturn> {
			return this.http.get<ListFieldValueReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/FieldTypes/' + (FieldTypeSid == null ? '' : encodeURIComponent(FieldTypeSid)) + '/FieldValues&Language=' + (Language == null ? '' : encodeURIComponent(Language)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resources to delete.
		 * @param {string} FieldTypeSid The SID of the Field Type associated with the Field Value to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the FieldValue resource to delete.
		 * @return {void} 
		 */
		DeleteFieldValue(AssistantSid: string, FieldTypeSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/FieldTypes/' + (FieldTypeSid == null ? '' : encodeURIComponent(FieldTypeSid)) + '/FieldValues/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resource to fetch.
		 * @param {string} FieldTypeSid The SID of the Field Type associated with the Field Value to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the FieldValue resource to fetch.
		 * @return {Autopilotv1assistantfield_typefield_value} OK
		 */
		FetchFieldValue(AssistantSid: string, FieldTypeSid: string, Sid: string): Observable<Autopilotv1assistantfield_typefield_value> {
			return this.http.get<Autopilotv1assistantfield_typefield_value>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/FieldTypes/' + (FieldTypeSid == null ? '' : encodeURIComponent(FieldTypeSid)) + '/FieldValues/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/FieldTypes/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the FieldType resource to delete.
		 * @return {void} 
		 */
		DeleteFieldType(AssistantSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/FieldTypes/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/FieldTypes/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the FieldType resource to fetch.
		 * @return {Autopilotv1assistantfield_type} OK
		 */
		FetchFieldType(AssistantSid: string, Sid: string): Observable<Autopilotv1assistantfield_type> {
			return this.http.get<Autopilotv1assistantfield_type>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/FieldTypes/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/ModelBuilds
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListModelBuildReturn} OK
		 */
		ListModelBuild(AssistantSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListModelBuildReturn> {
			return this.http.get<ListModelBuildReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/ModelBuilds&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the ModelBuild resource to delete.
		 * @return {void} 
		 */
		DeleteModelBuild(AssistantSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/ModelBuilds/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the ModelBuild resource to fetch.
		 * @return {Autopilotv1assistantmodel_build} OK
		 */
		FetchModelBuild(AssistantSid: string, Sid: string): Observable<Autopilotv1assistantmodel_build> {
			return this.http.get<Autopilotv1assistantmodel_build>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/ModelBuilds/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Queries
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
		 * @param {string} Language The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
		 * @param {string} ModelBuild The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
		 * @param {string} Status The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
		 * @param {string} DialogueSid The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListQueryReturn} OK
		 */
		ListQuery(AssistantSid: string, Language: string | null | undefined, ModelBuild: string | null | undefined, Status: string | null | undefined, DialogueSid: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListQueryReturn> {
			return this.http.get<ListQueryReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Queries&Language=' + (Language == null ? '' : encodeURIComponent(Language)) + '&ModelBuild=' + (ModelBuild == null ? '' : encodeURIComponent(ModelBuild)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&DialogueSid=' + (DialogueSid == null ? '' : encodeURIComponent(DialogueSid)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/Queries/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Query resource to delete.
		 * @return {void} 
		 */
		DeleteQuery(AssistantSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Queries/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Queries/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Query resource to fetch.
		 * @return {Autopilotv1assistantquery} OK
		 */
		FetchQuery(AssistantSid: string, Sid: string): Observable<Autopilotv1assistantquery> {
			return this.http.get<Autopilotv1assistantquery>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Queries/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Returns Style sheet JSON object for the Assistant
		 * Get v1/Assistants/{AssistantSid}/StyleSheet
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @return {Autopilotv1assistantstyle_sheet} OK
		 */
		FetchStyleSheet(AssistantSid: string): Observable<Autopilotv1assistantstyle_sheet> {
			return this.http.get<Autopilotv1assistantstyle_sheet>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/StyleSheet', {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Tasks
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTaskReturn} OK
		 */
		ListTask(AssistantSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTaskReturn> {
			return this.http.get<ListTaskReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/Tasks/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Task resource to delete.
		 * @return {void} 
		 */
		DeleteTask(AssistantSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Tasks/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Task resource to fetch.
		 * @return {Autopilotv1assistanttask} OK
		 */
		FetchTask(AssistantSid: string, Sid: string): Observable<Autopilotv1assistanttask> {
			return this.http.get<Autopilotv1assistanttask>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Returns JSON actions for the Task.
		 * Get v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task for which the task actions to fetch were defined.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) for which the task actions to fetch were defined.
		 * @return {Autopilotv1assistanttasktask_actions} OK
		 */
		FetchTaskActions(AssistantSid: string, TaskSid: string): Observable<Autopilotv1assistanttasktask_actions> {
			return this.http.get<Autopilotv1assistanttasktask_actions>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Actions', {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to read.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with the Field resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFieldReturn} OK
		 */
		ListField(AssistantSid: string, TaskSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFieldReturn> {
			return this.http.get<ListFieldReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Fields&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to delete.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with the Field resource to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Field resource to delete.
		 * @return {void} 
		 */
		DeleteField(AssistantSid: string, TaskSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Fields/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource to fetch.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with the Field resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Field resource to fetch.
		 * @return {Autopilotv1assistanttaskfield} OK
		 */
		FetchField(AssistantSid: string, TaskSid: string, Sid: string): Observable<Autopilotv1assistanttaskfield> {
			return this.http.get<Autopilotv1assistanttaskfield>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Fields/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to read.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resources to read.
		 * @param {string} Language The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSampleReturn} OK
		 */
		ListSample(AssistantSid: string, TaskSid: string, Language: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSampleReturn> {
			return this.http.get<ListSampleReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Samples&Language=' + (Language == null ? '' : encodeURIComponent(Language)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to delete.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resource to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Sample resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteSample(AssistantSid: string, TaskSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Samples/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource to fetch.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resource to create.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Sample resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Autopilotv1assistanttasksample} OK
		 */
		FetchSample(AssistantSid: string, TaskSid: string, Sid: string): Observable<Autopilotv1assistanttasksample> {
			return this.http.get<Autopilotv1assistanttasksample>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Samples/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @param {string} TaskSid The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) that is associated with the resource to fetch.
		 * @return {Autopilotv1assistanttasktask_statistics} OK
		 */
		FetchTaskStatistics(AssistantSid: string, TaskSid: string): Observable<Autopilotv1assistanttasktask_statistics> {
			return this.http.get<Autopilotv1assistanttasktask_statistics>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Statistics', {});
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Webhooks
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListWebhookReturn} OK
		 */
		ListWebhook(AssistantSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListWebhookReturn> {
			return this.http.get<ListWebhookReturn>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Webhooks&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Assistants/{AssistantSid}/Webhooks/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Webhook resource to delete.
		 * @return {void} 
		 */
		DeleteWebhook(AssistantSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Webhooks/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{AssistantSid}/Webhooks/{Sid}
		 * @param {string} AssistantSid The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Webhook resource to fetch.
		 * @return {Autopilotv1assistantwebhook} OK
		 */
		FetchWebhook(AssistantSid: string, Sid: string): Observable<Autopilotv1assistantwebhook> {
			return this.http.get<Autopilotv1assistantwebhook>(this.baseUri + 'v1/Assistants/' + (AssistantSid == null ? '' : encodeURIComponent(AssistantSid)) + '/Webhooks/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete v1/Assistants/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Assistant resource to delete.
		 * @return {void} 
		 */
		DeleteAssistant(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Assistants/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Assistants/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Assistant resource to fetch.
		 * @return {Autopilotv1assistant} OK
		 */
		FetchAssistant(Sid: string): Observable<Autopilotv1assistant> {
			return this.http.get<Autopilotv1assistant>(this.baseUri + 'v1/Assistants/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListAssistantReturn {
		assistants?: Array<Autopilotv1assistant>;
		meta?: ListAssistantReturnMeta;
	}
	export interface ListAssistantReturnFormProperties {
	}
	export function CreateListAssistantReturnFormGroup() {
		return new FormGroup<ListAssistantReturnFormProperties>({
		});

	}

	export interface ListAssistantReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListAssistantReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListAssistantReturnMetaFormGroup() {
		return new FormGroup<ListAssistantReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFieldTypeReturn {
		field_types?: Array<Autopilotv1assistantfield_type>;
		meta?: ListFieldTypeReturnMeta;
	}
	export interface ListFieldTypeReturnFormProperties {
	}
	export function CreateListFieldTypeReturnFormGroup() {
		return new FormGroup<ListFieldTypeReturnFormProperties>({
		});

	}

	export interface ListFieldTypeReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFieldTypeReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFieldTypeReturnMetaFormGroup() {
		return new FormGroup<ListFieldTypeReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFieldValueReturn {
		field_values?: Array<Autopilotv1assistantfield_typefield_value>;
		meta?: ListFieldValueReturnMeta;
	}
	export interface ListFieldValueReturnFormProperties {
	}
	export function CreateListFieldValueReturnFormGroup() {
		return new FormGroup<ListFieldValueReturnFormProperties>({
		});

	}

	export interface ListFieldValueReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFieldValueReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFieldValueReturnMetaFormGroup() {
		return new FormGroup<ListFieldValueReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListModelBuildReturn {
		meta?: ListModelBuildReturnMeta;
		model_builds?: Array<Autopilotv1assistantmodel_build>;
	}
	export interface ListModelBuildReturnFormProperties {
	}
	export function CreateListModelBuildReturnFormGroup() {
		return new FormGroup<ListModelBuildReturnFormProperties>({
		});

	}

	export interface ListModelBuildReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListModelBuildReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListModelBuildReturnMetaFormGroup() {
		return new FormGroup<ListModelBuildReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListQueryReturn {
		meta?: ListQueryReturnMeta;
		queries?: Array<Autopilotv1assistantquery>;
	}
	export interface ListQueryReturnFormProperties {
	}
	export function CreateListQueryReturnFormGroup() {
		return new FormGroup<ListQueryReturnFormProperties>({
		});

	}

	export interface ListQueryReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListQueryReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListQueryReturnMetaFormGroup() {
		return new FormGroup<ListQueryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskReturn {
		meta?: ListTaskReturnMeta;
		tasks?: Array<Autopilotv1assistanttask>;
	}
	export interface ListTaskReturnFormProperties {
	}
	export function CreateListTaskReturnFormGroup() {
		return new FormGroup<ListTaskReturnFormProperties>({
		});

	}

	export interface ListTaskReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListTaskReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListTaskReturnMetaFormGroup() {
		return new FormGroup<ListTaskReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFieldReturn {
		fields?: Array<Autopilotv1assistanttaskfield>;
		meta?: ListFieldReturnMeta;
	}
	export interface ListFieldReturnFormProperties {
	}
	export function CreateListFieldReturnFormGroup() {
		return new FormGroup<ListFieldReturnFormProperties>({
		});

	}

	export interface ListFieldReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFieldReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFieldReturnMetaFormGroup() {
		return new FormGroup<ListFieldReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSampleReturn {
		meta?: ListSampleReturnMeta;
		samples?: Array<Autopilotv1assistanttasksample>;
	}
	export interface ListSampleReturnFormProperties {
	}
	export function CreateListSampleReturnFormGroup() {
		return new FormGroup<ListSampleReturnFormProperties>({
		});

	}

	export interface ListSampleReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSampleReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSampleReturnMetaFormGroup() {
		return new FormGroup<ListSampleReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWebhookReturn {
		meta?: ListWebhookReturnMeta;
		webhooks?: Array<Autopilotv1assistantwebhook>;
	}
	export interface ListWebhookReturnFormProperties {
	}
	export function CreateListWebhookReturnFormGroup() {
		return new FormGroup<ListWebhookReturnFormProperties>({
		});

	}

	export interface ListWebhookReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListWebhookReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListWebhookReturnMetaFormGroup() {
		return new FormGroup<ListWebhookReturnMetaFormProperties>({
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

