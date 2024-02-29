import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Type of authorization used by the connector */
	export enum AuthType { oauth2 = 'oauth2', apiKey = 'apiKey', basic = 'basic', custom = 'custom', none = 'none' }

	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface BadRequestResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestResponseFormGroup() {
		return new FormGroup<BadRequestResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Connection {

		/** Type of authorization used by the connector */
		auth_type?: AuthType | null;

		/** The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter to the `authorize_url`. Be sure to URL encode the `redirect_uri` part. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI. */
		authorize_url?: string | null;
		configurable_resources?: Array<string>;
		ConnectionConfiguration?: Array<ConnectionConfiguration>;

		/** Type: double */
		created_at?: number | null;

		/** List of custom mappings configured for this connection */
		custom_mappings?: Array<CustomMapping>;

		/** Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API. */
		enabled?: boolean | null;

		/** The settings that are wanted to create a connection. */
		form_fields?: Array<FormField>;

		/** Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection). */
		has_guide?: boolean | null;

		/** A visual icon of the connection, that will be shown in the Vault */
		icon?: string | null;

		/** The unique identifier of the connection. */
		id?: string | null;

		/** The current state of the Integration. */
		integration_state?: ConnectionIntegration_state | null;

		/** The logo of the connection, that will be shown in the Vault */
		logo?: string | null;

		/** Attach your own consumer specific metadata */
		metadata?: string | null;

		/** The name of the connection */
		name?: string | null;

		/** OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types */
		oauth_grant_type?: ConnectionOauth_grant_type | null;
		resource_schema_support?: Array<string>;
		resource_settings_support?: Array<string>;

		/** The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI. */
		revoke_url?: string | null;
		schema_support?: boolean | null;

		/** The ID of the service this connection belongs to. */
		service_id?: string | null;

		/** Connection settings. Values will persist to `form_fields` with corresponding id */
		settings?: string | null;

		/** List of settings that are required to be configured on integration before authorization can occur */
		settings_required_for_authorization?: Array<string>;

		/** [Connection state flow](#section/Connection-state) */
		state?: ConnectionState | null;

		/** Status of the connection. */
		status?: ConnectionStatus | null;
		subscriptions?: Array<WebhookSubscription>;
		tag_line?: string | null;

		/** The unified API category where the connection belongs to. */
		unified_api?: string | null;

		/** Type: double */
		updated_at?: number | null;
		validation_support?: boolean | null;

		/** The website URL of the connection */
		website?: string | null;
	}
	export interface ConnectionFormProperties {

		/** Type of authorization used by the connector */
		auth_type: FormControl<AuthType | null | undefined>,

		/** The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter to the `authorize_url`. Be sure to URL encode the `redirect_uri` part. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI. */
		authorize_url: FormControl<string | null | undefined>,

		/** Type: double */
		created_at: FormControl<number | null | undefined>,

		/** Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API. */
		enabled: FormControl<boolean | null | undefined>,

		/** Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection). */
		has_guide: FormControl<boolean | null | undefined>,

		/** A visual icon of the connection, that will be shown in the Vault */
		icon: FormControl<string | null | undefined>,

		/** The unique identifier of the connection. */
		id: FormControl<string | null | undefined>,

		/** The current state of the Integration. */
		integration_state: FormControl<ConnectionIntegration_state | null | undefined>,

		/** The logo of the connection, that will be shown in the Vault */
		logo: FormControl<string | null | undefined>,

		/** Attach your own consumer specific metadata */
		metadata: FormControl<string | null | undefined>,

		/** The name of the connection */
		name: FormControl<string | null | undefined>,

		/** OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types */
		oauth_grant_type: FormControl<ConnectionOauth_grant_type | null | undefined>,

		/** The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI. */
		revoke_url: FormControl<string | null | undefined>,
		schema_support: FormControl<boolean | null | undefined>,

		/** The ID of the service this connection belongs to. */
		service_id: FormControl<string | null | undefined>,

		/** Connection settings. Values will persist to `form_fields` with corresponding id */
		settings: FormControl<string | null | undefined>,

		/** [Connection state flow](#section/Connection-state) */
		state: FormControl<ConnectionState | null | undefined>,

		/** Status of the connection. */
		status: FormControl<ConnectionStatus | null | undefined>,
		tag_line: FormControl<string | null | undefined>,

		/** The unified API category where the connection belongs to. */
		unified_api: FormControl<string | null | undefined>,

		/** Type: double */
		updated_at: FormControl<number | null | undefined>,
		validation_support: FormControl<boolean | null | undefined>,

		/** The website URL of the connection */
		website: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			auth_type: new FormControl<AuthType | null | undefined>(undefined),
			authorize_url: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			has_guide: new FormControl<boolean | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			integration_state: new FormControl<ConnectionIntegration_state | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			oauth_grant_type: new FormControl<ConnectionOauth_grant_type | null | undefined>(undefined),
			revoke_url: new FormControl<string | null | undefined>(undefined),
			schema_support: new FormControl<boolean | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConnectionState | null | undefined>(undefined),
			status: new FormControl<ConnectionStatus | null | undefined>(undefined),
			tag_line: new FormControl<string | null | undefined>(undefined),
			unified_api: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			validation_support: new FormControl<boolean | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionConfiguration {
		ConnectionConfigurationDefaults?: Array<ConnectionConfigurationDefaults>;
		resource?: string | null;
	}
	export interface ConnectionConfigurationFormProperties {
		resource: FormControl<string | null | undefined>,
	}
	export function CreateConnectionConfigurationFormGroup() {
		return new FormGroup<ConnectionConfigurationFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionConfigurationDefaults {
		id?: string | null;
		options?: Array<FormFieldOption>;
		target?: ConnectionConfigurationDefaultsTarget | null;
		value?: string;
	}
	export interface ConnectionConfigurationDefaultsFormProperties {
		id: FormControl<string | null | undefined>,
		target: FormControl<ConnectionConfigurationDefaultsTarget | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateConnectionConfigurationDefaultsFormGroup() {
		return new FormGroup<ConnectionConfigurationDefaultsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<ConnectionConfigurationDefaultsTarget | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormFieldOption {
	}
	export interface FormFieldOptionFormProperties {
	}
	export function CreateFormFieldOptionFormGroup() {
		return new FormGroup<FormFieldOptionFormProperties>({
		});

	}

	export enum ConnectionConfigurationDefaultsTarget { custom_fields = 'custom_fields', resource = 'resource' }

	export interface CustomMapping {

		/** Consumer ID */
		consumer_id?: string | null;

		/** This mapping represents a finder for a custom field */
		custom_field?: boolean | null;

		/** Target Field description */
		description?: string | null;

		/** Target Field ID */
		id?: string | null;

		/** Target Field Key */
		key?: string | null;

		/** Target Field name to use as a label */
		label?: string | null;

		/** Target Field Mapping is required */
		required?: boolean | null;

		/** Target Field Mapping value */
		value?: string | null;
	}
	export interface CustomMappingFormProperties {

		/** Consumer ID */
		consumer_id: FormControl<string | null | undefined>,

		/** This mapping represents a finder for a custom field */
		custom_field: FormControl<boolean | null | undefined>,

		/** Target Field description */
		description: FormControl<string | null | undefined>,

		/** Target Field ID */
		id: FormControl<string | null | undefined>,

		/** Target Field Key */
		key: FormControl<string | null | undefined>,

		/** Target Field name to use as a label */
		label: FormControl<string | null | undefined>,

		/** Target Field Mapping is required */
		required: FormControl<boolean | null | undefined>,

		/** Target Field Mapping value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomMappingFormGroup() {
		return new FormGroup<CustomMappingFormProperties>({
			consumer_id: new FormControl<string | null | undefined>(undefined),
			custom_field: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormField {

		/** Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list. */
		allow_custom_values?: boolean | null;
		custom_field?: boolean | null;

		/** The description of the form field */
		description?: string | null;

		/** Indicates if the form field is displayed in a “read-only” mode. */
		disabled?: boolean | null;

		/** Indicates if the form field is not displayed but the value that is being stored on the connection. */
		hidden?: boolean | null;

		/** The unique identifier of the form field. */
		id?: string | null;

		/** The label of the field */
		label?: string | null;
		options?: Array<FormFieldOption>;

		/** The placeholder for the form field */
		placeholder?: string | null;

		/** Prefix to display in front of the form field. */
		prefix?: string | null;

		/** Indicates if the form field is required, which means it must be filled in before the form can be submitted */
		required?: boolean | null;

		/** Indicates if the form field contains sensitive data, which will display the value as a masked input. */
		sensitive?: boolean | null;

		/** Suffix to display next to the form field. */
		suffix?: string | null;
		type?: FormFieldType | null;
	}
	export interface FormFieldFormProperties {

		/** Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list. */
		allow_custom_values: FormControl<boolean | null | undefined>,
		custom_field: FormControl<boolean | null | undefined>,

		/** The description of the form field */
		description: FormControl<string | null | undefined>,

		/** Indicates if the form field is displayed in a “read-only” mode. */
		disabled: FormControl<boolean | null | undefined>,

		/** Indicates if the form field is not displayed but the value that is being stored on the connection. */
		hidden: FormControl<boolean | null | undefined>,

		/** The unique identifier of the form field. */
		id: FormControl<string | null | undefined>,

		/** The label of the field */
		label: FormControl<string | null | undefined>,

		/** The placeholder for the form field */
		placeholder: FormControl<string | null | undefined>,

		/** Prefix to display in front of the form field. */
		prefix: FormControl<string | null | undefined>,

		/** Indicates if the form field is required, which means it must be filled in before the form can be submitted */
		required: FormControl<boolean | null | undefined>,

		/** Indicates if the form field contains sensitive data, which will display the value as a masked input. */
		sensitive: FormControl<boolean | null | undefined>,

		/** Suffix to display next to the form field. */
		suffix: FormControl<string | null | undefined>,
		type: FormControl<FormFieldType | null | undefined>,
	}
	export function CreateFormFieldFormGroup() {
		return new FormGroup<FormFieldFormProperties>({
			allow_custom_values: new FormControl<boolean | null | undefined>(undefined),
			custom_field: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			placeholder: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FormFieldType | null | undefined>(undefined),
		});

	}

	export enum FormFieldType { text = 'text', checkbox = 'checkbox', tel = 'tel', email = 'email', url = 'url', textarea = 'textarea', select = 'select', 'filtered-select' = 'filtered-select', 'multi-select' = 'multi-select', datetime = 'datetime', date = 'date', time = 'time', number = 'number' }

	export enum ConnectionIntegration_state { disabled = 'disabled', needs_configuration = 'needs_configuration', configured = 'configured' }

	export enum ConnectionOauth_grant_type { authorization_code = 'authorization_code', client_credentials = 'client_credentials', password = 'password' }

	export enum ConnectionState { available = 'available', callable = 'callable', added = 'added', authorized = 'authorized', invalid = 'invalid' }

	export enum ConnectionStatus { live = 'live', upcoming = 'upcoming', requested = 'requested' }

	export interface WebhookSubscription {

		/** The date and time the webhook subscription was created downstream */
		created_at?: string | null;

		/** The list of downstream Events this connection is subscribed to */
		downstream_event_types?: Array<string>;

		/** The ID of the downstream service */
		downstream_id?: string | null;

		/** The URL the downstream is sending to when the event is triggered */
		execute_url?: string | null;

		/** The list of Unify Events this connection is subscribed to */
		unify_event_types?: Array<string>;
	}
	export interface WebhookSubscriptionFormProperties {

		/** The date and time the webhook subscription was created downstream */
		created_at: FormControl<string | null | undefined>,

		/** The ID of the downstream service */
		downstream_id: FormControl<string | null | undefined>,

		/** The URL the downstream is sending to when the event is triggered */
		execute_url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookSubscriptionFormGroup() {
		return new FormGroup<WebhookSubscriptionFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			execute_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionEvent {
		entity?: ConsumerConnection;

		/** The service provider's ID of the entity that triggered this event */
		entity_id?: string | null;

		/** The type entity that triggered this event */
		entity_type?: string | null;

		/** Unique reference to this request event */
		event_id?: string | null;
		event_type?: ConnectionEventEvent_type | null;

		/**
		 * The current count this request event has been attempted
		 * Type: double
		 */
		execution_attempt?: number | null;

		/** ISO Datetime for when the original event occurred */
		occurred_at?: string | null;

		/** Service provider identifier */
		service_id?: string | null;
	}
	export interface ConnectionEventFormProperties {

		/** The service provider's ID of the entity that triggered this event */
		entity_id: FormControl<string | null | undefined>,

		/** The type entity that triggered this event */
		entity_type: FormControl<string | null | undefined>,

		/** Unique reference to this request event */
		event_id: FormControl<string | null | undefined>,
		event_type: FormControl<ConnectionEventEvent_type | null | undefined>,

		/**
		 * The current count this request event has been attempted
		 * Type: double
		 */
		execution_attempt: FormControl<number | null | undefined>,

		/** ISO Datetime for when the original event occurred */
		occurred_at: FormControl<string | null | undefined>,

		/** Service provider identifier */
		service_id: FormControl<string | null | undefined>,
	}
	export function CreateConnectionEventFormGroup() {
		return new FormGroup<ConnectionEventFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<string | null | undefined>(undefined),
			event_id: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<ConnectionEventEvent_type | null | undefined>(undefined),
			execution_attempt: new FormControl<number | null | undefined>(undefined),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConsumerConnection {

		/** Type of authorization used by the connector */
		auth_type?: AuthType | null;
		consumer_id?: string | null;
		created_at?: string | null;
		enabled?: boolean | null;
		icon?: string | null;
		id?: string | null;
		logo?: string | null;

		/** Attach your own consumer specific metadata */
		metadata?: string | null;
		name?: string | null;
		service_id?: string | null;

		/** Connection settings. Values will persist to `form_fields` with corresponding id */
		settings?: string | null;
		state?: ConsumerConnectionState | null;
		tag_line?: string | null;
		unified_api?: string | null;
		updated_at?: string | null;
		website?: string | null;
	}
	export interface ConsumerConnectionFormProperties {

		/** Type of authorization used by the connector */
		auth_type: FormControl<AuthType | null | undefined>,
		consumer_id: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		icon: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Attach your own consumer specific metadata */
		metadata: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		service_id: FormControl<string | null | undefined>,

		/** Connection settings. Values will persist to `form_fields` with corresponding id */
		settings: FormControl<string | null | undefined>,
		state: FormControl<ConsumerConnectionState | null | undefined>,
		tag_line: FormControl<string | null | undefined>,
		unified_api: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateConsumerConnectionFormGroup() {
		return new FormGroup<ConsumerConnectionFormProperties>({
			auth_type: new FormControl<AuthType | null | undefined>(undefined),
			consumer_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConsumerConnectionState | null | undefined>(undefined),
			tag_line: new FormControl<string | null | undefined>(undefined),
			unified_api: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConsumerConnectionState { available = 'available', callable = 'callable', added = 'added', configured = 'configured', authorized = 'authorized' }

	export enum ConnectionEventEvent_type { '*' = '*', 'vault.connection.created' = 'vault.connection.created', 'vault.connection.updated' = 'vault.connection.updated', 'vault.connection.disabled' = 'vault.connection.disabled', 'vault.connection.deleted' = 'vault.connection.deleted', 'vault.connection.callable' = 'vault.connection.callable', 'vault.connection.revoked' = 'vault.connection.revoked', 'vault.connection.token_refresh.failed' = 'vault.connection.token_refresh.failed' }

	export interface ConnectionImportData {
		credentials?: ConnectionImportDataCredentials;

		/** Attach your own consumer specific metadata */
		metadata?: string | null;

		/** Connection settings. Values will persist to `form_fields` with corresponding id */
		settings?: string | null;
	}
	export interface ConnectionImportDataFormProperties {

		/** Attach your own consumer specific metadata */
		metadata: FormControl<string | null | undefined>,

		/** Connection settings. Values will persist to `form_fields` with corresponding id */
		settings: FormControl<string | null | undefined>,
	}
	export function CreateConnectionImportDataFormGroup() {
		return new FormGroup<ConnectionImportDataFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionImportDataCredentials {

		/** Access token */
		access_token?: string | null;

		/**
		 * The number of seconds until the token expires. If omitted the token will be queued for refresh.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in?: number | null;

		/** The datetime at which the token was issued. If omitted the token will be queued for refresh. */
		issued_at?: Date | null;

		/**
		 * The refresh token can be used to obtain a new access token.
		 * Required
		 */
		refresh_token: string;
	}
	export interface ConnectionImportDataCredentialsFormProperties {

		/** Access token */
		access_token: FormControl<string | null | undefined>,

		/**
		 * The number of seconds until the token expires. If omitted the token will be queued for refresh.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: FormControl<number | null | undefined>,

		/** The datetime at which the token was issued. If omitted the token will be queued for refresh. */
		issued_at: FormControl<Date | null | undefined>,

		/**
		 * The refresh token can be used to obtain a new access token.
		 * Required
		 */
		refresh_token: FormControl<string | null | undefined>,
	}
	export function CreateConnectionImportDataCredentialsFormGroup() {
		return new FormGroup<ConnectionImportDataCredentialsFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			issued_at: new FormControl<Date | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectionMetadata {
		id?: string | null;
		name?: string | null;
	}
	export interface ConnectionMetadataFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectionMetadataFormGroup() {
		return new FormGroup<ConnectionMetadataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionWebhook {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/**
		 * The delivery url of the webhook endpoint.
		 * Required
		 */
		delivery_url: string;

		/** A description of the object. */
		description?: string | null;

		/** Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan. */
		disabled_reason?: ConnectionWebhookDisabled_reason | null;

		/**
		 * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
		 * Required
		 */
		events: Array<string>;

		/**
		 * The Unify Base URL events from connectors will be sent to after service id is appended.
		 * Required
		 */
		execute_base_url: string;
		id?: string | null;

		/**
		 * The status of the webhook.
		 * Required
		 */
		status: ConnectionWebhookStatus;

		/**
		 * Name of Apideck Unified API
		 * Required
		 */
		unified_api: ConnectionWebhookUnified_api;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;
	}
	export interface ConnectionWebhookFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The delivery url of the webhook endpoint.
		 * Required
		 */
		delivery_url: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/** Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan. */
		disabled_reason: FormControl<ConnectionWebhookDisabled_reason | null | undefined>,

		/**
		 * The Unify Base URL events from connectors will be sent to after service id is appended.
		 * Required
		 */
		execute_base_url: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * The status of the webhook.
		 * Required
		 */
		status: FormControl<ConnectionWebhookStatus | null | undefined>,

		/**
		 * Name of Apideck Unified API
		 * Required
		 */
		unified_api: FormControl<ConnectionWebhookUnified_api | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionWebhookFormGroup() {
		return new FormGroup<ConnectionWebhookFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			delivery_url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(https?)://')]),
			description: new FormControl<string | null | undefined>(undefined),
			disabled_reason: new FormControl<ConnectionWebhookDisabled_reason | null | undefined>(undefined),
			execute_base_url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(https?)://')]),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ConnectionWebhookStatus | null | undefined>(undefined, [Validators.required]),
			unified_api: new FormControl<ConnectionWebhookUnified_api | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectionWebhookDisabled_reason { none = 'none', retry_limit = 'retry_limit', usage_limit = 'usage_limit' }

	export enum ConnectionWebhookStatus { enabled = 'enabled', disabled = 'disabled' }

	export enum ConnectionWebhookUnified_api { accounting = 'accounting', ats = 'ats', calendar = 'calendar', crm = 'crm', csp = 'csp', 'customer-support' = 'customer-support', ecommerce = 'ecommerce', email = 'email', 'email-marketing' = 'email-marketing', 'expense-management' = 'expense-management', 'file-storage' = 'file-storage', form = 'form', hris = 'hris', lead = 'lead', payroll = 'payroll', pos = 'pos', procurement = 'procurement', 'project-management' = 'project-management', script = 'script', sms = 'sms', spreadsheet = 'spreadsheet', 'team-messaging' = 'team-messaging', 'issue-tracking' = 'issue-tracking', 'time-registration' = 'time-registration', 'transactional-email' = 'transactional-email', vault = 'vault', 'data-warehouse' = 'data-warehouse' }

	export interface Consumer {

		/** Type: double */
		aggregated_request_count?: number | null;

		/** ID of your Apideck Application */
		application_id?: string | null;
		connections?: Array<ConsumerConnection>;

		/**
		 * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
		 * Required
		 */
		consumer_id: string;
		created?: string | null;

		/** The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. */
		metadata?: ConsumerMetadata;
		modified?: string | null;
		request_count_updated?: string | null;
		request_counts?: RequestCountAllocation;
		services?: Array<string>;
	}
	export interface ConsumerFormProperties {

		/** Type: double */
		aggregated_request_count: FormControl<number | null | undefined>,

		/** ID of your Apideck Application */
		application_id: FormControl<string | null | undefined>,

		/**
		 * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
		 * Required
		 */
		consumer_id: FormControl<string | null | undefined>,
		created: FormControl<string | null | undefined>,
		modified: FormControl<string | null | undefined>,
		request_count_updated: FormControl<string | null | undefined>,
	}
	export function CreateConsumerFormGroup() {
		return new FormGroup<ConsumerFormProperties>({
			aggregated_request_count: new FormControl<number | null | undefined>(undefined),
			application_id: new FormControl<string | null | undefined>(undefined),
			consumer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<string | null | undefined>(undefined),
			request_count_updated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. */
	export interface ConsumerMetadata {

		/** The name of the account as shown in the sidebar. */
		account_name?: string | null;

		/** The email of the user as shown in the sidebar. */
		email?: string | null;

		/** The avatar of the user in the sidebar. Must be a valid URL */
		image?: string | null;

		/** The name of the user as shown in the sidebar. */
		user_name?: string | null;
	}

	/** The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. */
	export interface ConsumerMetadataFormProperties {

		/** The name of the account as shown in the sidebar. */
		account_name: FormControl<string | null | undefined>,

		/** The email of the user as shown in the sidebar. */
		email: FormControl<string | null | undefined>,

		/** The avatar of the user in the sidebar. Must be a valid URL */
		image: FormControl<string | null | undefined>,

		/** The name of the user as shown in the sidebar. */
		user_name: FormControl<string | null | undefined>,
	}
	export function CreateConsumerMetadataFormGroup() {
		return new FormGroup<ConsumerMetadataFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			user_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestCountAllocation {

		/** Type: double */
		proxy?: number | null;

		/** Type: double */
		unify?: number | null;

		/** Type: double */
		vault?: number | null;
	}
	export interface RequestCountAllocationFormProperties {

		/** Type: double */
		proxy: FormControl<number | null | undefined>,

		/** Type: double */
		unify: FormControl<number | null | undefined>,

		/** Type: double */
		vault: FormControl<number | null | undefined>,
	}
	export function CreateRequestCountAllocationFormGroup() {
		return new FormGroup<RequestCountAllocationFormProperties>({
			proxy: new FormControl<number | null | undefined>(undefined),
			unify: new FormControl<number | null | undefined>(undefined),
			vault: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConsumerRequestCountsInDateRangeResponse {

		/** Required */
		data: ConsumerRequestCountsInDateRangeResponseData;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface ConsumerRequestCountsInDateRangeResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateConsumerRequestCountsInDateRangeResponseFormGroup() {
		return new FormGroup<ConsumerRequestCountsInDateRangeResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsumerRequestCountsInDateRangeResponseData {

		/** Type: double */
		aggregated_request_count?: number | null;
		application_id?: string | null;
		consumer_id?: string | null;
		end_datetime?: string | null;
		request_counts?: RequestCountAllocation;
		start_datetime?: string | null;
	}
	export interface ConsumerRequestCountsInDateRangeResponseDataFormProperties {

		/** Type: double */
		aggregated_request_count: FormControl<number | null | undefined>,
		application_id: FormControl<string | null | undefined>,
		consumer_id: FormControl<string | null | undefined>,
		end_datetime: FormControl<string | null | undefined>,
		start_datetime: FormControl<string | null | undefined>,
	}
	export function CreateConsumerRequestCountsInDateRangeResponseDataFormGroup() {
		return new FormGroup<ConsumerRequestCountsInDateRangeResponseDataFormProperties>({
			aggregated_request_count: new FormControl<number | null | undefined>(undefined),
			application_id: new FormControl<string | null | undefined>(undefined),
			consumer_id: new FormControl<string | null | undefined>(undefined),
			end_datetime: new FormControl<string | null | undefined>(undefined),
			start_datetime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectionResponse {

		/** Required */
		data: Connection;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateConnectionResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateConnectionResponseFormGroup() {
		return new FormGroup<CreateConnectionResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConsumerResponse {

		/** Required */
		data: Consumer;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateConsumerResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateConsumerResponseFormGroup() {
		return new FormGroup<CreateConsumerResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCustomMappingRequest {

		/**
		 * Target Field Mapping value
		 * Required
		 */
		value: string;
	}
	export interface CreateCustomMappingRequestFormProperties {

		/**
		 * Target Field Mapping value
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomMappingRequestFormGroup() {
		return new FormGroup<CreateCustomMappingRequestFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCustomMappingResponse {

		/** Required */
		data: CustomMapping;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateCustomMappingResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateCustomMappingResponseFormGroup() {
		return new FormGroup<CreateCustomMappingResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSessionResponse {

		/** Required */
		data: CreateSessionResponseData;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateSessionResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateSessionResponseFormGroup() {
		return new FormGroup<CreateSessionResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSessionResponseData {

		/** Required */
		session_token: string;

		/** Required */
		session_uri: string;
	}
	export interface CreateSessionResponseDataFormProperties {

		/** Required */
		session_token: FormControl<string | null | undefined>,

		/** Required */
		session_uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateSessionResponseDataFormGroup() {
		return new FormGroup<CreateSessionResponseDataFormProperties>({
			session_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			session_uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomFieldFinder {

		/** More information about the custom field */
		description?: string | null;

		/** JSONPath finder for retrieving this value when mapping a response payload from downstream */
		finder?: string | null;

		/** Custom Field ID */
		id?: string | null;

		/** Custom Field name to use as a label if provided */
		name?: string | null;

		/** Custom Field value */
		value?: any;
	}
	export interface CustomFieldFinderFormProperties {

		/** More information about the custom field */
		description: FormControl<string | null | undefined>,

		/** JSONPath finder for retrieving this value when mapping a response payload from downstream */
		finder: FormControl<string | null | undefined>,

		/** Custom Field ID */
		id: FormControl<string | null | undefined>,

		/** Custom Field name to use as a label if provided */
		name: FormControl<string | null | undefined>,

		/** Custom Field value */
		value: FormControl<any | null | undefined>,
	}
	export function CreateCustomFieldFinderFormGroup() {
		return new FormGroup<CustomFieldFinderFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			finder: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface DeleteConsumerResponse {

		/** Required */
		data: any;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteConsumerResponseFormProperties {

		/** Required */
		data: FormControl<any | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteConsumerResponseFormGroup() {
		return new FormGroup<DeleteConsumerResponseFormProperties>({
			data: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FormFieldOptionGroup {
		id?: string | null;
		label?: string | null;
		options?: Array<SimpleFormFieldOption>;
	}
	export interface FormFieldOptionGroupFormProperties {
		id: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
	}
	export function CreateFormFieldOptionGroupFormGroup() {
		return new FormGroup<FormFieldOptionGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimpleFormFieldOption {
		label?: string | null;
		value?: string;
	}
	export interface SimpleFormFieldOptionFormProperties {
		label: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSimpleFormFieldOptionFormGroup() {
		return new FormGroup<SimpleFormFieldOptionFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConnectionResponse {

		/** Required */
		data: Connection;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetConnectionResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectionResponseFormGroup() {
		return new FormGroup<GetConnectionResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectionsResponse {

		/** Required */
		data: Array<Connection>;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetConnectionsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectionsResponseFormGroup() {
		return new FormGroup<GetConnectionsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConsumerResponse {

		/** Required */
		data: Consumer;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetConsumerResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConsumerResponseFormGroup() {
		return new FormGroup<GetConsumerResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConsumersResponse {

		/** Required */
		GetConsumersResponseData: Array<GetConsumersResponseData>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetConsumersResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetConsumersResponseFormGroup() {
		return new FormGroup<GetConsumersResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConsumersResponseData {

		/** Type: double */
		aggregated_request_count?: number | null;
		application_id?: string | null;
		consumer_id?: string | null;
		created?: string | null;

		/** The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. */
		metadata?: ConsumerMetadata;
		modified?: string | null;
		request_count_updated?: string | null;
		request_counts?: RequestCountAllocation;
		services?: Array<string>;
	}
	export interface GetConsumersResponseDataFormProperties {

		/** Type: double */
		aggregated_request_count: FormControl<number | null | undefined>,
		application_id: FormControl<string | null | undefined>,
		consumer_id: FormControl<string | null | undefined>,
		created: FormControl<string | null | undefined>,
		modified: FormControl<string | null | undefined>,
		request_count_updated: FormControl<string | null | undefined>,
	}
	export function CreateGetConsumersResponseDataFormGroup() {
		return new FormGroup<GetConsumersResponseDataFormProperties>({
			aggregated_request_count: new FormControl<number | null | undefined>(undefined),
			application_id: new FormControl<string | null | undefined>(undefined),
			consumer_id: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<string | null | undefined>(undefined),
			request_count_updated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Links to navigate to previous or next pages through the API */
	export interface Links {

		/** Link to navigate to the current page through the API */
		current?: string | null;

		/** Link to navigate to the previous page through the API */
		next?: string | null;

		/** Link to navigate to the previous page through the API */
		previous?: string | null;
	}

	/** Links to navigate to previous or next pages through the API */
	export interface LinksFormProperties {

		/** Link to navigate to the current page through the API */
		current: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		next: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response metadata */
	export interface Meta {

		/** Cursors to navigate to previous or next pages through the API */
		cursors?: MetaCursors;

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			items_on_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetaCursors {

		/** Cursor to navigate to the current page of results through the API */
		current?: string | null;

		/** Cursor to navigate to the next page of results through the API */
		next?: string | null;

		/** Cursor to navigate to the previous page of results through the API */
		previous?: string | null;
	}
	export interface MetaCursorsFormProperties {

		/** Cursor to navigate to the current page of results through the API */
		current: FormControl<string | null | undefined>,

		/** Cursor to navigate to the next page of results through the API */
		next: FormControl<string | null | undefined>,

		/** Cursor to navigate to the previous page of results through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateMetaCursorsFormGroup() {
		return new FormGroup<MetaCursorsFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomFieldsResponse {

		/** Required */
		data: Array<CustomFieldFinder>;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetCustomFieldsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCustomFieldsResponseFormGroup() {
		return new FormGroup<GetCustomFieldsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCustomMappingResponse {

		/** Required */
		data: CustomMapping;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetCustomMappingResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCustomMappingResponseFormGroup() {
		return new FormGroup<GetCustomMappingResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLogsResponse {

		/** Required */
		data: Array<Log>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetLogsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetLogsResponseFormGroup() {
		return new FormGroup<GetLogsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Log {

		/**
		 * Indicates if the request was made via REST or Graphql endpoint.
		 * Required
		 */
		api_style: string;

		/**
		 * The Apideck base URL the request was made to.
		 * Required
		 */
		base_url: string;

		/**
		 * Indicates whether or not this is a child or parent request.
		 * Required
		 */
		child_request: boolean;

		/**
		 * The consumer Id associated with the request.
		 * Required
		 */
		consumer_id: string;

		/**
		 * The entire execution time in milliseconds it took to call the Apideck service provider.
		 * Required
		 * Type: double
		 */
		duration: number;

		/** If error occurred, this is brief explanation */
		error_message?: string | null;

		/**
		 * The entire execution time in milliseconds it took to make the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		execution: number;

		/**
		 * When request is a parent request, this indicates if there are child requests associated.
		 * Required
		 */
		has_children: boolean;

		/**
		 * HTTP Method of request.
		 * Required
		 */
		http_method: string;

		/**
		 * UUID acting as Request Identifier.
		 * Required
		 */
		id: string;

		/**
		 * Latency added by making this request via Unified Api.
		 * Required
		 * Type: double
		 */
		latency: number;

		/**
		 * The request as defined in OpenApi Spec.
		 * Required
		 */
		operation: LogOperation;

		/**
		 * When request is a child request, this UUID indicates it's parent request.
		 * Required
		 */
		parent_id: string;

		/**
		 * The path component of the URI the request was made to.
		 * Required
		 */
		path: string;

		/**
		 * Indicates whether the request was made using Apidecks sandbox credentials or not.
		 * Required
		 */
		sandbox: boolean;

		/**
		 * Apideck service provider associated with request.
		 * Required
		 */
		service: LogService;

		/** The IP address of the source of the request. */
		source_ip?: string | null;

		/**
		 * HTTP Status code that was returned.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;

		/**
		 * Whether or not the request was successful.
		 * Required
		 */
		success: boolean;

		/**
		 * ISO Date and time when the request was made.
		 * Required
		 */
		timestamp: string;

		/**
		 * Which Unified Api request was made to.
		 * Required
		 */
		unified_api: LogUnified_api;
	}
	export interface LogFormProperties {

		/**
		 * Indicates if the request was made via REST or Graphql endpoint.
		 * Required
		 */
		api_style: FormControl<string | null | undefined>,

		/**
		 * The Apideck base URL the request was made to.
		 * Required
		 */
		base_url: FormControl<string | null | undefined>,

		/**
		 * Indicates whether or not this is a child or parent request.
		 * Required
		 */
		child_request: FormControl<boolean | null | undefined>,

		/**
		 * The consumer Id associated with the request.
		 * Required
		 */
		consumer_id: FormControl<string | null | undefined>,

		/**
		 * The entire execution time in milliseconds it took to call the Apideck service provider.
		 * Required
		 * Type: double
		 */
		duration: FormControl<number | null | undefined>,

		/** If error occurred, this is brief explanation */
		error_message: FormControl<string | null | undefined>,

		/**
		 * The entire execution time in milliseconds it took to make the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		execution: FormControl<number | null | undefined>,

		/**
		 * When request is a parent request, this indicates if there are child requests associated.
		 * Required
		 */
		has_children: FormControl<boolean | null | undefined>,

		/**
		 * HTTP Method of request.
		 * Required
		 */
		http_method: FormControl<string | null | undefined>,

		/**
		 * UUID acting as Request Identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Latency added by making this request via Unified Api.
		 * Required
		 * Type: double
		 */
		latency: FormControl<number | null | undefined>,

		/**
		 * When request is a child request, this UUID indicates it's parent request.
		 * Required
		 */
		parent_id: FormControl<string | null | undefined>,

		/**
		 * The path component of the URI the request was made to.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/**
		 * Indicates whether the request was made using Apidecks sandbox credentials or not.
		 * Required
		 */
		sandbox: FormControl<boolean | null | undefined>,

		/** The IP address of the source of the request. */
		source_ip: FormControl<string | null | undefined>,

		/**
		 * HTTP Status code that was returned.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,

		/**
		 * Whether or not the request was successful.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,

		/**
		 * ISO Date and time when the request was made.
		 * Required
		 */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * Which Unified Api request was made to.
		 * Required
		 */
		unified_api: FormControl<LogUnified_api | null | undefined>,
	}
	export function CreateLogFormGroup() {
		return new FormGroup<LogFormProperties>({
			api_style: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			base_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			child_request: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			consumer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			error_message: new FormControl<string | null | undefined>(undefined),
			execution: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			has_children: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			http_method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			parent_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sandbox: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			source_ip: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unified_api: new FormControl<LogUnified_api | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LogOperation {

		/**
		 * The OpenApi Operation Id associated with the request
		 * Required
		 */
		id: string;

		/**
		 * The OpenApi Operation name associated with the request
		 * Required
		 */
		name: string;
	}
	export interface LogOperationFormProperties {

		/**
		 * The OpenApi Operation Id associated with the request
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The OpenApi Operation name associated with the request
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogOperationFormGroup() {
		return new FormGroup<LogOperationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LogService {

		/**
		 * Apideck service provider id.
		 * Required
		 */
		id: string;

		/**
		 * Apideck service provider name.
		 * Required
		 */
		name: string;
	}
	export interface LogServiceFormProperties {

		/**
		 * Apideck service provider id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Apideck service provider name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogServiceFormGroup() {
		return new FormGroup<LogServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogUnified_api { crm = 'crm', lead = 'lead', proxy = 'proxy', vault = 'vault', accounting = 'accounting', hris = 'hris', ats = 'ats', ecommerce = 'ecommerce', 'issue-tracking' = 'issue-tracking', pos = 'pos', 'file-storage' = 'file-storage', sms = 'sms' }

	export interface GetResourceExampleResponse {

		/** Required */
		data: ResourceExample;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetResourceExampleResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceExampleResponseFormGroup() {
		return new FormGroup<GetResourceExampleResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceExample {

		/** Example response from the downstream API */
		example_response?: string | null;
		resource?: LinkedConnectorResource;

		/** Service provider identifier */
		service_id?: string | null;

		/** Name of Apideck Unified API */
		unified_api?: ConnectionWebhookUnified_api | null;
	}
	export interface ResourceExampleFormProperties {

		/** Example response from the downstream API */
		example_response: FormControl<string | null | undefined>,

		/** Service provider identifier */
		service_id: FormControl<string | null | undefined>,

		/** Name of Apideck Unified API */
		unified_api: FormControl<ConnectionWebhookUnified_api | null | undefined>,
	}
	export function CreateResourceExampleFormGroup() {
		return new FormGroup<ResourceExampleFormProperties>({
			example_response: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			unified_api: new FormControl<ConnectionWebhookUnified_api | null | undefined>(undefined),
		});

	}

	export interface LinkedConnectorResource {

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id?: string | null;

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name?: string | null;

		/** ID of the resource, typically a lowercased version of name. */
		id?: string | null;

		/** Name of the resource (plural) */
		name?: string | null;

		/** Status of the resource. Resources with status live or beta are callable. */
		status?: LinkedConnectorResourceStatus | null;
	}
	export interface LinkedConnectorResourceFormProperties {

		/** ID of the resource in the Connector's API (downstream) */
		downstream_id: FormControl<string | null | undefined>,

		/** Name of the resource in the Connector's API (downstream) */
		downstream_name: FormControl<string | null | undefined>,

		/** ID of the resource, typically a lowercased version of name. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource (plural) */
		name: FormControl<string | null | undefined>,

		/** Status of the resource. Resources with status live or beta are callable. */
		status: FormControl<LinkedConnectorResourceStatus | null | undefined>,
	}
	export function CreateLinkedConnectorResourceFormGroup() {
		return new FormGroup<LinkedConnectorResourceFormProperties>({
			downstream_id: new FormControl<string | null | undefined>(undefined),
			downstream_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LinkedConnectorResourceStatus | null | undefined>(undefined),
		});

	}

	export enum LinkedConnectorResourceStatus { live = 'live', beta = 'beta', development = 'development', upcoming = 'upcoming', considering = 'considering' }

	export interface GetResourceSchemaResponse {

		/** Required */
		data: ResourceSchema;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetResourceSchemaResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceSchemaResponseFormGroup() {
		return new FormGroup<GetResourceSchemaResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceSchema {
	}
	export interface ResourceSchemaFormProperties {
	}
	export function CreateResourceSchemaFormGroup() {
		return new FormGroup<ResourceSchemaFormProperties>({
		});

	}


	/** The current state of the Integration. */
	export enum IntegrationState { disabled = 'disabled', needs_configuration = 'needs_configuration', configured = 'configured' }

	export interface LogsFilter {
		connector_id?: string | null;
		exclude_unified_apis?: string | null;

		/** Type: double */
		status_code?: number | null;
	}
	export interface LogsFilterFormProperties {
		connector_id: FormControl<string | null | undefined>,
		exclude_unified_apis: FormControl<string | null | undefined>,

		/** Type: double */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateLogsFilterFormGroup() {
		return new FormGroup<LogsFilterFormProperties>({
			connector_id: new FormControl<string | null | undefined>(undefined),
			exclude_unified_apis: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotFoundResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotFoundResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundResponseFormGroup() {
		return new FormGroup<NotFoundResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotImplementedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotImplementedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotImplementedResponseFormGroup() {
		return new FormGroup<NotImplementedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types */
	export enum OAuthGrantType { authorization_code = 'authorization_code', client_credentials = 'client_credentials', password = 'password' }

	export interface PaymentRequiredResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface PaymentRequiredResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRequiredResponseFormGroup() {
		return new FormGroup<PaymentRequiredResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProxyRequest {
	}
	export interface ProxyRequestFormProperties {
	}
	export function CreateProxyRequestFormGroup() {
		return new FormGroup<ProxyRequestFormProperties>({
		});

	}


	/** Status of the resource. Resources with status live or beta are callable. */
	export enum ResourceStatus { live = 'live', beta = 'beta', development = 'development', upcoming = 'upcoming', considering = 'considering' }

	export interface Session {

		/** The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. */
		consumer_metadata?: ConsumerMetadata;

		/** Custom consumer settings that are passed as part of the session. */
		custom_consumer_settings?: string | null;

		/** The URL to redirect the user to after the session has been configured. */
		redirect_uri?: string | null;

		/** Settings to change the way the Vault is displayed. */
		settings?: SessionSettings;

		/** Theming options to change the look and feel of Vault. */
		theme?: SessionTheme;
	}
	export interface SessionFormProperties {

		/** Custom consumer settings that are passed as part of the session. */
		custom_consumer_settings: FormControl<string | null | undefined>,

		/** The URL to redirect the user to after the session has been configured. */
		redirect_uri: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			custom_consumer_settings: new FormControl<string | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SessionSettings {

		/**
		 * Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in `allow_actions` will be shown on a connection in Vault.
		 * Available actions are: `delete`, `disconnect`, `reauthorize` and `disable`.
		 * Empty array will hide all actions. By default all actions are visible.
		 */
		allow_actions?: Array<string>;

		/** Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to `false`. */
		auto_redirect?: boolean | null;

		/** Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to `false`. */
		hide_guides?: boolean | null;

		/** A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user. */
		hide_resource_settings?: boolean | null;

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items. */
		isolation_mode?: boolean | null;

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment. */
		sandbox_mode?: boolean | null;

		/** The duration of time the session is valid for (maximum 1 week). */
		session_length?: string | null;

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to `true`. */
		show_logs?: boolean | null;

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to `true`. */
		show_sidebar?: boolean | null;

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `false`. */
		show_suggestions?: boolean | null;

		/** Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs. */
		unified_apis?: Array<UnifiedApiId>;
	}
	export interface SessionSettingsFormProperties {

		/** Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to `false`. */
		auto_redirect: FormControl<boolean | null | undefined>,

		/** Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to `false`. */
		hide_guides: FormControl<boolean | null | undefined>,

		/** A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user. */
		hide_resource_settings: FormControl<boolean | null | undefined>,

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items. */
		isolation_mode: FormControl<boolean | null | undefined>,

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment. */
		sandbox_mode: FormControl<boolean | null | undefined>,

		/** The duration of time the session is valid for (maximum 1 week). */
		session_length: FormControl<string | null | undefined>,

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to `true`. */
		show_logs: FormControl<boolean | null | undefined>,

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to `true`. */
		show_sidebar: FormControl<boolean | null | undefined>,

		/** Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `false`. */
		show_suggestions: FormControl<boolean | null | undefined>,
	}
	export function CreateSessionSettingsFormGroup() {
		return new FormGroup<SessionSettingsFormProperties>({
			auto_redirect: new FormControl<boolean | null | undefined>(undefined),
			hide_guides: new FormControl<boolean | null | undefined>(undefined),
			hide_resource_settings: new FormControl<boolean | null | undefined>(undefined),
			isolation_mode: new FormControl<boolean | null | undefined>(undefined),
			sandbox_mode: new FormControl<boolean | null | undefined>(undefined),
			session_length: new FormControl<string | null | undefined>(undefined),
			show_logs: new FormControl<boolean | null | undefined>(undefined),
			show_sidebar: new FormControl<boolean | null | undefined>(undefined),
			show_suggestions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Name of Apideck Unified API */
	export enum UnifiedApiId { accounting = 'accounting', ats = 'ats', calendar = 'calendar', crm = 'crm', csp = 'csp', 'customer-support' = 'customer-support', ecommerce = 'ecommerce', email = 'email', 'email-marketing' = 'email-marketing', 'expense-management' = 'expense-management', 'file-storage' = 'file-storage', form = 'form', hris = 'hris', lead = 'lead', payroll = 'payroll', pos = 'pos', procurement = 'procurement', 'project-management' = 'project-management', script = 'script', sms = 'sms', spreadsheet = 'spreadsheet', 'team-messaging' = 'team-messaging', 'issue-tracking' = 'issue-tracking', 'time-registration' = 'time-registration', 'transactional-email' = 'transactional-email', vault = 'vault', 'data-warehouse' = 'data-warehouse' }

	export interface SessionTheme {

		/** The URL to the favicon to use for Vault. */
		favicon?: string | null;

		/** The URL to the logo to use for Vault. */
		logo?: string | null;

		/** The primary color to use for Vault. */
		primary_color?: string | null;

		/** The URL to the privacy policy that will be shown in the sidebar. */
		privacy_url?: string | null;

		/** The background color to use for the sidebar. */
		sidepanel_background_color?: string | null;

		/** The text color to use for the sidebar. */
		sidepanel_text_color?: string | null;

		/** The URL to the terms and conditions that will be shown in the sidebar. */
		terms_url?: string | null;

		/** The name that will be shown in the sidebar. */
		vault_name?: string | null;
	}
	export interface SessionThemeFormProperties {

		/** The URL to the favicon to use for Vault. */
		favicon: FormControl<string | null | undefined>,

		/** The URL to the logo to use for Vault. */
		logo: FormControl<string | null | undefined>,

		/** The primary color to use for Vault. */
		primary_color: FormControl<string | null | undefined>,

		/** The URL to the privacy policy that will be shown in the sidebar. */
		privacy_url: FormControl<string | null | undefined>,

		/** The background color to use for the sidebar. */
		sidepanel_background_color: FormControl<string | null | undefined>,

		/** The text color to use for the sidebar. */
		sidepanel_text_color: FormControl<string | null | undefined>,

		/** The URL to the terms and conditions that will be shown in the sidebar. */
		terms_url: FormControl<string | null | undefined>,

		/** The name that will be shown in the sidebar. */
		vault_name: FormControl<string | null | undefined>,
	}
	export function CreateSessionThemeFormGroup() {
		return new FormGroup<SessionThemeFormProperties>({
			favicon: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			primary_color: new FormControl<string | null | undefined>(undefined),
			privacy_url: new FormControl<string | null | undefined>(undefined),
			sidepanel_background_color: new FormControl<string | null | undefined>(undefined),
			sidepanel_text_color: new FormControl<string | null | undefined>(undefined),
			terms_url: new FormControl<string | null | undefined>(undefined),
			vault_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnauthorizedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnauthorizedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedResponseFormGroup() {
		return new FormGroup<UnauthorizedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnexpectedErrorResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnexpectedErrorResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnexpectedErrorResponseFormGroup() {
		return new FormGroup<UnexpectedErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnprocessableResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnprocessableResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessableResponseFormGroup() {
		return new FormGroup<UnprocessableResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectionResponse {

		/** Required */
		data: Connection;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateConnectionResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateConnectionResponseFormGroup() {
		return new FormGroup<UpdateConnectionResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateConsumerRequest {

		/** The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. */
		metadata?: ConsumerMetadata;
	}
	export interface UpdateConsumerRequestFormProperties {
	}
	export function CreateUpdateConsumerRequestFormGroup() {
		return new FormGroup<UpdateConsumerRequestFormProperties>({
		});

	}

	export interface UpdateConsumerResponse {

		/** Required */
		data: Consumer;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateConsumerResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateConsumerResponseFormGroup() {
		return new FormGroup<UpdateConsumerResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCustomMappingRequest {

		/**
		 * Target Field Mapping value
		 * Required
		 */
		value: string;
	}
	export interface UpdateCustomMappingRequestFormProperties {

		/**
		 * Target Field Mapping value
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomMappingRequestFormGroup() {
		return new FormGroup<UpdateCustomMappingRequestFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCustomMappingResponse {

		/** Required */
		data: CustomMapping;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateCustomMappingResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCustomMappingResponseFormGroup() {
		return new FormGroup<UpdateCustomMappingResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VaultEventType { '*' = '*', 'vault.connection.created' = 'vault.connection.created', 'vault.connection.updated' = 'vault.connection.updated', 'vault.connection.disabled' = 'vault.connection.disabled', 'vault.connection.deleted' = 'vault.connection.deleted', 'vault.connection.callable' = 'vault.connection.callable', 'vault.connection.revoked' = 'vault.connection.revoked', 'vault.connection.token_refresh.failed' = 'vault.connection.token_refresh.failed' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Authorize
		 * __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__
		 * Use this endpoint to authenticate a user with a connector. It will return a 301 redirect to the downstream connector endpoints.
		 * Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.
		 * Vault handles the complete Authorization Code Grant Type Flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.
		 * Get vault/authorize/{service_id}/{application_id}
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} application_id Application ID of the resource to return
		 * @param {string} state An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.
		 * @param {string} redirect_uri URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.
		 * @param {Array<string>} scope One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.
		 * @return {void} 
		 */
		ConnectionsAuthorize(service_id: string, application_id: string, state: string, redirect_uri: string, scope: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vault/authorize/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&' + scope?.map(z => `scope=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Callback
		 * This endpoint gets called after the triggering the authorize flow.
		 * Callback links need a state and code parameter to verify the validity of the request.
		 * Get vault/callback
		 * @param {string} state An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.
		 * @param {string} code An authorization code from the connector which Apideck Vault will later exchange for an access token.
		 * @return {void} 
		 */
		ConnectionsCallback(state: string, code: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vault/callback?state=' + (state == null ? '' : encodeURIComponent(state)) + '&code=' + (code == null ? '' : encodeURIComponent(code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all connections
		 * This endpoint includes all the configured integrations and contains the required assets
		 * to build an integrations page where your users can install integrations.
		 * OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
		 * Get vault/connections
		 * @param {string} api Scope results to Unified API
		 * @param {boolean} configured Scopes results to connections that have been configured or not
		 * @return {GetConnectionsResponse} Connections
		 */
		ConnectionsAll(api: string | null | undefined, configured: boolean | null | undefined): Observable<GetConnectionsResponse> {
			return this.http.get<GetConnectionsResponse>(this.baseUri + 'vault/connections?api=' + (api == null ? '' : encodeURIComponent(api)) + '&configured=' + configured, {});
		}

		/**
		 * Deletes a connection
		 * Deletes a connection
		 * Delete vault/connections/{unified_api}/{service_id}
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} unified_api Unified API
		 * @return {void} 
		 */
		ConnectionsDelete(service_id: string, unified_api: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get connection
		 * Get a connection
		 * Get vault/connections/{unified_api}/{service_id}
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} unified_api Unified API
		 * @return {GetConnectionResponse} Connection
		 */
		ConnectionsOne(service_id: string, unified_api: string): Observable<GetConnectionResponse> {
			return this.http.get<GetConnectionResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)), {});
		}

		/**
		 * Update connection
		 * Update a connection
		 * Patch vault/connections/{unified_api}/{service_id}
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} unified_api Unified API
		 * @param {Connection} requestBody Fields that need to be updated on the resource
		 * @return {UpdateConnectionResponse} Connection updated
		 */
		ConnectionsUpdate(service_id: string, unified_api: string, requestBody: Connection): Observable<UpdateConnectionResponse> {
			return this.http.patch<UpdateConnectionResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create connection
		 * Create an authorized connection
		 * Post vault/connections/{unified_api}/{service_id}
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} unified_api Unified API
		 * @param {Connection} requestBody Fields that need to be persisted on the resource
		 * @return {CreateConnectionResponse} Connection created
		 */
		ConnectionsAdd(service_id: string, unified_api: string, requestBody: Connection): Observable<CreateConnectionResponse> {
			return this.http.post<CreateConnectionResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import connection
		 * Import an authorized connection.
		 * Post vault/connections/{unified_api}/{service_id}/import
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} unified_api Unified API
		 * @param {ConnectionImportData} requestBody Fields that need to be persisted on the resource
		 * @return {CreateConnectionResponse} Connection created
		 */
		ConnectionsImport(service_id: string, unified_api: string, requestBody: ConnectionImportData): Observable<CreateConnectionResponse> {
			return this.http.post<CreateConnectionResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Access Token
		 * Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.
		 * Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.
		 * Post vault/connections/{unified_api}/{service_id}/token
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} unified_api Unified API
		 * @return {GetConnectionResponse} Connection
		 */
		ConnectionsToken(service_id: string, unified_api: string, requestBody: string): Observable<GetConnectionResponse> {
			return this.http.post<GetConnectionResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get resource settings
		 * This endpoint returns custom settings and their defaults required by connection for a given resource.
		 * Get vault/connections/{unified_api}/{service_id}/{resource}/config
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} resource Name of the resource (plural)
		 * @return {GetConnectionResponse} Connection
		 */
		ConnectionSettingsAll(unified_api: string, service_id: string, resource: string): Observable<GetConnectionResponse> {
			return this.http.get<GetConnectionResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (resource == null ? '' : encodeURIComponent(resource)) + '/config', {});
		}

		/**
		 * Update settings
		 * Update default values for a connection's resource settings
		 * Patch vault/connections/{unified_api}/{service_id}/{resource}/config
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} unified_api Unified API
		 * @param {string} resource Name of the resource (plural)
		 * @param {Connection} requestBody Fields that need to be updated on the resource
		 * @return {UpdateConnectionResponse} Connection updated
		 */
		ConnectionSettingsUpdate(service_id: string, unified_api: string, resource: string, requestBody: Connection): Observable<UpdateConnectionResponse> {
			return this.http.patch<UpdateConnectionResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (resource == null ? '' : encodeURIComponent(resource)) + '/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get resource custom fields
		 * This endpoint returns an custom fields on a connection resource.
		 * Get vault/connections/{unified_api}/{service_id}/{resource}/custom-fields
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} resource Name of the resource (plural)
		 * @return {GetCustomFieldsResponse} Custom mapping
		 */
		CustomFieldsAll(unified_api: string, service_id: string, resource: string): Observable<GetCustomFieldsResponse> {
			return this.http.get<GetCustomFieldsResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (resource == null ? '' : encodeURIComponent(resource)) + '/custom-fields', {});
		}

		/**
		 * Get resource example
		 * This endpoint returns a downstream example of a given resource.
		 * Get vault/connections/{unified_api}/{service_id}/{resource}/example
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} resource Name of the resource (plural)
		 * @return {GetResourceExampleResponse} Resource Schema
		 */
		ConnectionsExample(unified_api: string, service_id: string, resource: string): Observable<GetResourceExampleResponse> {
			return this.http.get<GetResourceExampleResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (resource == null ? '' : encodeURIComponent(resource)) + '/example', {});
		}

		/**
		 * Get resource schema
		 * This endpoint returns an approximate JSONSchema of a given resource.
		 * Get vault/connections/{unified_api}/{service_id}/{resource}/schema
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} resource Name of the resource (plural)
		 * @return {GetResourceSchemaResponse} Resource Schema
		 */
		ConnectionsSchema(unified_api: string, service_id: string, resource: string): Observable<GetResourceSchemaResponse> {
			return this.http.get<GetResourceSchemaResponse>(this.baseUri + 'vault/connections/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (resource == null ? '' : encodeURIComponent(resource)) + '/schema', {});
		}

		/**
		 * Get all consumers
		 * This endpoint includes all application consumers, along with an aggregated count of requests made.
		 * Get vault/consumers
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @return {GetConsumersResponse} Consumers
		 */
		ConsumersAll(cursor: string | null | undefined, limit: number | null | undefined): Observable<GetConsumersResponse> {
			return this.http.get<GetConsumersResponse>(this.baseUri + 'vault/consumers?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}

		/**
		 * Create consumer
		 * Create a consumer
		 * Post vault/consumers
		 * @return {CreateConsumerResponse} Consumer created
		 */
		ConsumersAdd(requestBody: Consumer): Observable<CreateConsumerResponse> {
			return this.http.post<CreateConsumerResponse>(this.baseUri + 'vault/consumers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete consumer
		 * Delete consumer and all their connections, including credentials.
		 * Delete vault/consumers/{consumer_id}
		 * @param {string} consumer_id ID of the consumer to return
		 * @return {DeleteConsumerResponse} Consumer deleted
		 */
		ConsumersDelete(consumer_id: string): Observable<DeleteConsumerResponse> {
			return this.http.delete<DeleteConsumerResponse>(this.baseUri + 'vault/consumers/' + (consumer_id == null ? '' : encodeURIComponent(consumer_id)), {});
		}

		/**
		 * Get consumer
		 * Consumer detail including their aggregated counts with the connections they have authorized.
		 * Get vault/consumers/{consumer_id}
		 * @param {string} consumer_id ID of the consumer to return
		 * @return {GetConsumerResponse} Consumer
		 */
		ConsumersOne(consumer_id: string): Observable<GetConsumerResponse> {
			return this.http.get<GetConsumerResponse>(this.baseUri + 'vault/consumers/' + (consumer_id == null ? '' : encodeURIComponent(consumer_id)), {});
		}

		/**
		 * Update consumer
		 * Update consumer metadata such as name and email.
		 * Patch vault/consumers/{consumer_id}
		 * @param {string} consumer_id ID of the consumer to return
		 * @return {UpdateConsumerResponse} Consumer updated
		 */
		ConsumersUpdate(consumer_id: string, requestBody: UpdateConsumerRequest): Observable<UpdateConsumerResponse> {
			return this.http.patch<UpdateConsumerResponse>(this.baseUri + 'vault/consumers/' + (consumer_id == null ? '' : encodeURIComponent(consumer_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Consumer request counts
		 * Get consumer request counts within a given datetime range.
		 * Get vault/consumers/{consumer_id}/stats
		 * @param {string} consumer_id ID of the consumer to return
		 * @param {string} start_datetime Scopes results to requests that happened after datetime
		 * @param {string} end_datetime Scopes results to requests that happened before datetime
		 * @return {ConsumerRequestCountsInDateRangeResponse} Consumers Request Counts within Date Range
		 */
		ConsumerRequestCountsAll(consumer_id: string, start_datetime: string, end_datetime: string): Observable<ConsumerRequestCountsInDateRangeResponse> {
			return this.http.get<ConsumerRequestCountsInDateRangeResponse>(this.baseUri + 'vault/consumers/' + (consumer_id == null ? '' : encodeURIComponent(consumer_id)) + '/stats&start_datetime=' + (start_datetime == null ? '' : encodeURIComponent(start_datetime)) + '&end_datetime=' + (end_datetime == null ? '' : encodeURIComponent(end_datetime)), {});
		}

		/**
		 * Deletes a custom mapping
		 * Deletes a custom mapping
		 * Delete vault/custom-mappings/{unified_api}/{service_id}/{target_field_id}
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} target_field_id ID of the target field to return as a custom mapping.
		 * @return {void} 
		 */
		CustomMappingsDelete(unified_api: string, service_id: string, target_field_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'vault/custom-mappings/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (target_field_id == null ? '' : encodeURIComponent(target_field_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get custom mapping
		 * Get a custom mapping
		 * Get vault/custom-mappings/{unified_api}/{service_id}/{target_field_id}
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} target_field_id ID of the target field to return as a custom mapping.
		 * @return {GetCustomMappingResponse} Custom mapping
		 */
		CustomMappingsOne(unified_api: string, service_id: string, target_field_id: string): Observable<GetCustomMappingResponse> {
			return this.http.get<GetCustomMappingResponse>(this.baseUri + 'vault/custom-mappings/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (target_field_id == null ? '' : encodeURIComponent(target_field_id)), {});
		}

		/**
		 * Update custom mapping
		 * Update a custom mapping
		 * Patch vault/custom-mappings/{unified_api}/{service_id}/{target_field_id}
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} target_field_id ID of the target field to return as a custom mapping.
		 * @param {UpdateCustomMappingRequest} requestBody Fields that need to be updated on the resource
		 * @return {UpdateCustomMappingResponse} Custom mapping updated
		 */
		CustomMappingsUpdate(unified_api: string, service_id: string, target_field_id: string, requestBody: UpdateCustomMappingRequest): Observable<UpdateCustomMappingResponse> {
			return this.http.patch<UpdateCustomMappingResponse>(this.baseUri + 'vault/custom-mappings/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (target_field_id == null ? '' : encodeURIComponent(target_field_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create custom mapping
		 * Create a custom mapping
		 * Post vault/custom-mappings/{unified_api}/{service_id}/{target_field_id}
		 * @param {string} unified_api Unified API
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} target_field_id ID of the target field to return as a custom mapping.
		 * @param {CreateCustomMappingRequest} requestBody Fields that need to be updated on the resource
		 * @return {CreateCustomMappingResponse} Custom mapping created
		 */
		CustomMappingsAdd(unified_api: string, service_id: string, target_field_id: string, requestBody: CreateCustomMappingRequest): Observable<CreateCustomMappingResponse> {
			return this.http.post<CreateCustomMappingResponse>(this.baseUri + 'vault/custom-mappings/' + (unified_api == null ? '' : encodeURIComponent(unified_api)) + '/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (target_field_id == null ? '' : encodeURIComponent(target_field_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all consumer request logs
		 * This endpoint includes all consumer request logs.
		 * Get vault/logs
		 * @param {LogsFilter} filter Filter results
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @return {GetLogsResponse} Logs
		 */
		LogsAll(filter: LogsFilter | null | undefined, cursor: string | null | undefined, limit: number | null | undefined): Observable<GetLogsResponse> {
			return this.http.get<GetLogsResponse>(this.baseUri + 'vault/logs?filter=' + filter + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}

		/**
		 * Revoke connection
		 * __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__
		 * Use this endpoint to revoke an existing OAuth connector.
		 * Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.
		 * Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.
		 * Get vault/revoke/{service_id}/{application_id}
		 * @param {string} service_id Service ID of the resource to return
		 * @param {string} application_id Application ID of the resource to return
		 * @param {string} state An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.
		 * @param {string} redirect_uri URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.
		 * @return {void} 
		 */
		ConnectionsRevoke(service_id: string, application_id: string, state: string, redirect_uri: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vault/revoke/' + (service_id == null ? '' : encodeURIComponent(service_id)) + '/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Session
		 * Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
		 * URL to allow temporary access to manage their integrations and settings.
		 * Note: This is a short lived token that will expire after 1 hour (TTL: 3600).
		 * Post vault/sessions
		 * @param {Session} requestBody Additional redirect uri and/or consumer metadata
		 * @return {CreateSessionResponse} Session created
		 */
		SessionsCreate(requestBody: Session): Observable<CreateSessionResponse> {
			return this.http.post<CreateSessionResponse>(this.baseUri + 'vault/sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

