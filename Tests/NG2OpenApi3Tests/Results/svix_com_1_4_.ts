import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AppPortalAccessIn {
		featureFlags?: Array<string>;
	}
	export interface AppPortalAccessInFormProperties {
	}
	export function CreateAppPortalAccessInFormGroup() {
		return new FormGroup<AppPortalAccessInFormProperties>({
		});

	}

	export interface AppPortalAccessOut {

		/** Required */
		token: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;
	}
	export interface AppPortalAccessOutFormProperties {

		/** Required */
		token: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAppPortalAccessOutFormGroup() {
		return new FormGroup<AppPortalAccessOutFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export interface ApplicationIn {
		metadata?: {[id: string]: string };

		/** Required */
		name: string;

		/** Minimum: 0 */
		rateLimit?: number | null;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		uid?: string | null;
	}
	export interface ApplicationInFormProperties {
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		rateLimit: FormControl<number | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateApplicationInFormGroup() {
		return new FormGroup<ApplicationInFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rateLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
		});

	}

	export interface ApplicationOut {

		/** Required */
		createdAt: Date;

		/** Required */
		id: string;
		metadata?: {[id: string]: string };

		/** Required */
		name: string;

		/** Minimum: 0 */
		rateLimit?: number | null;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		uid?: string | null;

		/** Required */
		updatedAt: Date;
	}
	export interface ApplicationOutFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		rateLimit: FormControl<number | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		uid: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationOutFormGroup() {
		return new FormGroup<ApplicationOutFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rateLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApplicationTokenExpireIn {

		/**
		 * How many seconds until the old key is expired.
		 * Minimum: 0
		 * Maximum: 259200
		 */
		expiry?: number | null;
	}
	export interface ApplicationTokenExpireInFormProperties {

		/**
		 * How many seconds until the old key is expired.
		 * Minimum: 0
		 * Maximum: 259200
		 */
		expiry: FormControl<number | null | undefined>,
	}
	export function CreateApplicationTokenExpireInFormGroup() {
		return new FormGroup<ApplicationTokenExpireInFormProperties>({
			expiry: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(259200)]),
		});

	}


	/** Sent when a background task finishes. */
	export interface BackgroundTaskFinishedEvent {

		/** Required */
		data: BackgroundTaskFinishedEventData;
		type?: BackgroundTaskFinishedEventType | null;
	}

	/** Sent when a background task finishes. */
	export interface BackgroundTaskFinishedEventFormProperties {
		type: FormControl<BackgroundTaskFinishedEventType | null | undefined>,
	}
	export function CreateBackgroundTaskFinishedEventFormGroup() {
		return new FormGroup<BackgroundTaskFinishedEventFormProperties>({
			type: new FormControl<BackgroundTaskFinishedEventType | null | undefined>(undefined),
		});

	}

	export interface BackgroundTaskFinishedEventData {

		/** Required */
		data: string;

		/**
		 * An enumeration.
		 * Required
		 */
		status: BackgroundTaskFinishedEventDataStatus;

		/**
		 * An enumeration.
		 * Required
		 */
		task: BackgroundTaskFinishedEventDataTask;

		/** Required */
		taskId: string;
	}
	export interface BackgroundTaskFinishedEventDataFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		status: FormControl<BackgroundTaskFinishedEventDataStatus | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		task: FormControl<BackgroundTaskFinishedEventDataTask | null | undefined>,

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateBackgroundTaskFinishedEventDataFormGroup() {
		return new FormGroup<BackgroundTaskFinishedEventDataFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BackgroundTaskFinishedEventDataStatus | null | undefined>(undefined, [Validators.required]),
			task: new FormControl<BackgroundTaskFinishedEventDataTask | null | undefined>(undefined, [Validators.required]),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BackgroundTaskFinishedEventDataStatus { finished = 'finished', failed = 'failed' }

	export enum BackgroundTaskFinishedEventDataTask { 'application.stats' = 'application.stats' }

	export enum BackgroundTaskFinishedEventType { 'background_task.finished' = 'background_task.finished' }


	/** An enumeration. */
	export enum BackgroundTaskOpWebhookStatus { finished = 'finished', failed = 'failed' }


	/** An enumeration. */
	export enum BackgroundTaskOpWebhookType { 'application.stats' = 'application.stats' }

	export interface BackgroundTaskOut {

		/** Required */
		data: string;

		/** Required */
		id: string;

		/**
		 * An enumeration.
		 * Required
		 */
		status: BackgroundTaskOutStatus;

		/**
		 * An enumeration.
		 * Required
		 */
		task: BackgroundTaskOutTask;
	}
	export interface BackgroundTaskOutFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		status: FormControl<BackgroundTaskOutStatus | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		task: FormControl<BackgroundTaskOutTask | null | undefined>,
	}
	export function CreateBackgroundTaskOutFormGroup() {
		return new FormGroup<BackgroundTaskOutFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BackgroundTaskOutStatus | null | undefined>(undefined, [Validators.required]),
			task: new FormControl<BackgroundTaskOutTask | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BackgroundTaskOutStatus { running = 'running', finished = 'finished', failed = 'failed' }

	export enum BackgroundTaskOutTask { 'endpoint.replay' = 'endpoint.replay', 'endpoint.recover' = 'endpoint.recover', 'application.stats' = 'application.stats' }


	/** An enumeration. */
	export enum BackgroundTaskStatus { running = 'running', finished = 'finished', failed = 'failed' }


	/** An enumeration. */
	export enum BackgroundTaskType { 'endpoint.replay' = 'endpoint.replay', 'endpoint.recover' = 'endpoint.recover', 'application.stats' = 'application.stats' }

	export interface DashboardAccessOut {

		/** Required */
		token: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;
	}
	export interface DashboardAccessOutFormProperties {

		/** Required */
		token: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDashboardAccessOutFormGroup() {
		return new FormGroup<DashboardAccessOutFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}


	/** Sent when an endpoint is created. */
	export interface EndpointCreatedEvent {

		/** Required */
		data: EndpointCreatedEventData;
		type?: EndpointCreatedEventType | null;
	}

	/** Sent when an endpoint is created. */
	export interface EndpointCreatedEventFormProperties {
		type: FormControl<EndpointCreatedEventType | null | undefined>,
	}
	export function CreateEndpointCreatedEventFormGroup() {
		return new FormGroup<EndpointCreatedEventFormProperties>({
			type: new FormControl<EndpointCreatedEventType | null | undefined>(undefined),
		});

	}

	export interface EndpointCreatedEventData {

		/** Required */
		appId: string;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid?: string | null;

		/** Required */
		endpointId: string;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid?: string | null;
	}
	export interface EndpointCreatedEventDataFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid: FormControl<string | null | undefined>,

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid: FormControl<string | null | undefined>,
	}
	export function CreateEndpointCreatedEventDataFormGroup() {
		return new FormGroup<EndpointCreatedEventDataFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpointUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
		});

	}

	export enum EndpointCreatedEventType { 'endpoint.created' = 'endpoint.created' }


	/** Sent when an endpoint is deleted. */
	export interface EndpointDeletedEvent {

		/** Required */
		data: EndpointDeletedEventData;
		type?: EndpointDeletedEventType | null;
	}

	/** Sent when an endpoint is deleted. */
	export interface EndpointDeletedEventFormProperties {
		type: FormControl<EndpointDeletedEventType | null | undefined>,
	}
	export function CreateEndpointDeletedEventFormGroup() {
		return new FormGroup<EndpointDeletedEventFormProperties>({
			type: new FormControl<EndpointDeletedEventType | null | undefined>(undefined),
		});

	}

	export interface EndpointDeletedEventData {

		/** Required */
		appId: string;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid?: string | null;

		/** Required */
		endpointId: string;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid?: string | null;
	}
	export interface EndpointDeletedEventDataFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid: FormControl<string | null | undefined>,

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid: FormControl<string | null | undefined>,
	}
	export function CreateEndpointDeletedEventDataFormGroup() {
		return new FormGroup<EndpointDeletedEventDataFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpointUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
		});

	}

	export enum EndpointDeletedEventType { 'endpoint.deleted' = 'endpoint.deleted' }


	/** Sent when an endpoint has been automatically disabled after continuous failures. */
	export interface EndpointDisabledEvent {

		/** Required */
		data: EndpointDisabledEventData;
		type?: EndpointDisabledEventType | null;
	}

	/** Sent when an endpoint has been automatically disabled after continuous failures. */
	export interface EndpointDisabledEventFormProperties {
		type: FormControl<EndpointDisabledEventType | null | undefined>,
	}
	export function CreateEndpointDisabledEventFormGroup() {
		return new FormGroup<EndpointDisabledEventFormProperties>({
			type: new FormControl<EndpointDisabledEventType | null | undefined>(undefined),
		});

	}

	export interface EndpointDisabledEventData {

		/** Required */
		appId: string;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid?: string | null;

		/** Required */
		endpointId: string;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid?: string | null;

		/** Required */
		failSince: Date;
	}
	export interface EndpointDisabledEventDataFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid: FormControl<string | null | undefined>,

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid: FormControl<string | null | undefined>,

		/** Required */
		failSince: FormControl<Date | null | undefined>,
	}
	export function CreateEndpointDisabledEventDataFormGroup() {
		return new FormGroup<EndpointDisabledEventDataFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpointUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			failSince: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EndpointDisabledEventType { 'endpoint.disabled' = 'endpoint.disabled' }

	export interface EndpointHeadersIn {

		/** Required */
		headers: {[id: string]: string };
	}
	export interface EndpointHeadersInFormProperties {

		/** Required */
		headers: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEndpointHeadersInFormGroup() {
		return new FormGroup<EndpointHeadersInFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * The value of the headers is returned in the `headers` field.
	 * Sensitive headers that have been redacted are returned in the sensitive field.
	 */
	export interface EndpointHeadersOut {

		/** Required */
		headers: {[id: string]: string };

		/** Required */
		sensitive: Array<string>;
	}

	/**
	 * The value of the headers is returned in the `headers` field.
	 * Sensitive headers that have been redacted are returned in the sensitive field.
	 */
	export interface EndpointHeadersOutFormProperties {

		/** Required */
		headers: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEndpointHeadersOutFormGroup() {
		return new FormGroup<EndpointHeadersOutFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndpointHeadersPatchIn {

		/** Required */
		headers: {[id: string]: string };
	}
	export interface EndpointHeadersPatchInFormProperties {

		/** Required */
		headers: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEndpointHeadersPatchInFormGroup() {
		return new FormGroup<EndpointHeadersPatchInFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndpointIn {

		/**
		 * List of message channels this endpoint listens to (omit for all)
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		channels?: Array<string>;
		description?: string | null;
		disabled?: boolean | null;

		/** Minimum items: 1 */
		filterTypes?: Array<string>;
		metadata?: {[id: string]: string };

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit?: number | null;

		/** The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24. */
		secret?: string | null;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface EndpointInFormProperties {
		description: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit: FormControl<number | null | undefined>,

		/** The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24. */
		secret: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateEndpointInFormGroup() {
		return new FormGroup<EndpointInFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			rateLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(whsec_)?[a-zA-Z0-9+/=]{32,100}$')]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface EndpointMessageOut {

		/**
		 * List of free-form identifiers that endpoints can filter by
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		channels?: Array<string>;

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		eventId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: string;

		/** Required */
		id: string;
		nextAttempt?: Date | null;

		/** Required */
		payload: string;

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: MessageStatus;

		/** Required */
		timestamp: Date;
	}
	export interface EndpointMessageOutFormProperties {

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		nextAttempt: FormControl<Date | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: FormControl<MessageStatus | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEndpointMessageOutFormGroup() {
		return new FormGroup<EndpointMessageOutFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextAttempt: new FormControl<Date | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<MessageStatus | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * The sending status of the message:
	 * - Success = 0
	 * - Pending = 1
	 * - Fail = 2
	 * - Sending = 3
	 */
	export enum MessageStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface EndpointOut {

		/**
		 * List of message channels this endpoint listens to (omit for all)
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		channels?: Array<string>;

		/** Required */
		createdAt: Date;
		description?: string | null;
		disabled?: boolean | null;

		/** Minimum items: 1 */
		filterTypes?: Array<string>;

		/** Required */
		id: string;
		metadata?: {[id: string]: string };

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit?: number | null;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid?: string | null;

		/** Required */
		updatedAt: Date;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface EndpointOutFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit: FormControl<number | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateEndpointOutFormGroup() {
		return new FormGroup<EndpointOutFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			rateLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface EndpointSecretOut {

		/**
		 * The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.
		 * Required
		 */
		key: string;
	}
	export interface EndpointSecretOutFormProperties {

		/**
		 * The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.
		 * Required
		 */
		key: FormControl<string | null | undefined>,
	}
	export function CreateEndpointSecretOutFormGroup() {
		return new FormGroup<EndpointSecretOutFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(whsec_)?[a-zA-Z0-9+/=]{32,100}$')]),
		});

	}

	export interface EndpointSecretRotateIn {

		/** The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24. */
		key?: string | null;
	}
	export interface EndpointSecretRotateInFormProperties {

		/** The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateEndpointSecretRotateInFormGroup() {
		return new FormGroup<EndpointSecretRotateInFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(whsec_)?[a-zA-Z0-9+/=]{32,100}$')]),
		});

	}

	export interface EndpointStats {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fail: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pending: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sending: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		success: number;
	}
	export interface EndpointStatsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fail: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pending: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sending: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		success: FormControl<number | null | undefined>,
	}
	export function CreateEndpointStatsFormGroup() {
		return new FormGroup<EndpointStatsFormProperties>({
			fail: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pending: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sending: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EndpointTransformationIn {

		/**
		 * Min length: 10
		 * Max length: 51200
		 */
		code?: string | null;
		enabled?: boolean | null;
	}
	export interface EndpointTransformationInFormProperties {

		/**
		 * Min length: 10
		 * Max length: 51200
		 */
		code: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndpointTransformationInFormGroup() {
		return new FormGroup<EndpointTransformationInFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(51200)]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EndpointTransformationOut {

		/**
		 * Min length: 10
		 * Max length: 51200
		 */
		code?: string | null;
		enabled?: boolean | null;
	}
	export interface EndpointTransformationOutFormProperties {

		/**
		 * Min length: 10
		 * Max length: 51200
		 */
		code: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndpointTransformationOutFormGroup() {
		return new FormGroup<EndpointTransformationOutFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(51200)]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EndpointUpdate {

		/**
		 * List of message channels this endpoint listens to (omit for all)
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		channels?: Array<string>;
		description?: string | null;
		disabled?: boolean | null;

		/** Minimum items: 1 */
		filterTypes?: Array<string>;
		metadata?: {[id: string]: string };

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit?: number | null;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface EndpointUpdateFormProperties {
		description: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit: FormControl<number | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateEndpointUpdateFormGroup() {
		return new FormGroup<EndpointUpdateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			rateLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Sent when an endpoint is updated. */
	export interface EndpointUpdatedEvent {

		/** Required */
		data: EndpointUpdatedEventData;
		type?: EndpointUpdatedEventType | null;
	}

	/** Sent when an endpoint is updated. */
	export interface EndpointUpdatedEventFormProperties {
		type: FormControl<EndpointUpdatedEventType | null | undefined>,
	}
	export function CreateEndpointUpdatedEventFormGroup() {
		return new FormGroup<EndpointUpdatedEventFormProperties>({
			type: new FormControl<EndpointUpdatedEventType | null | undefined>(undefined),
		});

	}

	export interface EndpointUpdatedEventData {

		/** Required */
		appId: string;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid?: string | null;

		/** Required */
		endpointId: string;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid?: string | null;
	}
	export interface EndpointUpdatedEventDataFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid: FormControl<string | null | undefined>,

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		endpointUid: FormControl<string | null | undefined>,
	}
	export function CreateEndpointUpdatedEventDataFormGroup() {
		return new FormGroup<EndpointUpdatedEventDataFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpointUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
		});

	}

	export enum EndpointUpdatedEventType { 'endpoint.updated' = 'endpoint.updated' }

	export interface EventExampleIn {

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: string;
	}
	export interface EventExampleInFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: FormControl<string | null | undefined>,
	}
	export function CreateEventExampleInFormGroup() {
		return new FormGroup<EventExampleInFormProperties>({
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
		});

	}

	export interface EventTypeIn {
		archived?: boolean | null;

		/** Required */
		description: string;

		/** Max length: 256 */
		featureFlag?: string | null;

		/**
		 * Required
		 * Max length: 256
		 */
		name: string;

		/** The schema for the event type for a specific version as a JSON schema. */
		schemas?: {[id: string]: any };
	}
	export interface EventTypeInFormProperties {
		archived: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Max length: 256 */
		featureFlag: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,

		/** The schema for the event type for a specific version as a JSON schema. */
		schemas: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateEventTypeInFormGroup() {
		return new FormGroup<EventTypeInFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			featureFlag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			schemas: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface EventTypeOut {
		archived?: boolean | null;

		/** Required */
		createdAt: Date;

		/** Required */
		description: string;

		/** Max length: 256 */
		featureFlag?: string | null;

		/**
		 * Required
		 * Max length: 256
		 */
		name: string;

		/** The schema for the event type for a specific version as a JSON schema. */
		schemas?: {[id: string]: any };

		/** Required */
		updatedAt: Date;
	}
	export interface EventTypeOutFormProperties {
		archived: FormControl<boolean | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Max length: 256 */
		featureFlag: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,

		/** The schema for the event type for a specific version as a JSON schema. */
		schemas: FormControl<{[id: string]: any } | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEventTypeOutFormGroup() {
		return new FormGroup<EventTypeOutFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			featureFlag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			schemas: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventTypeUpdate {
		archived?: boolean | null;

		/** Required */
		description: string;

		/** Max length: 256 */
		featureFlag?: string | null;

		/** The schema for the event type for a specific version as a JSON schema. */
		schemas?: {[id: string]: any };
	}
	export interface EventTypeUpdateFormProperties {
		archived: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Max length: 256 */
		featureFlag: FormControl<string | null | undefined>,

		/** The schema for the event type for a specific version as a JSON schema. */
		schemas: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateEventTypeUpdateFormGroup() {
		return new FormGroup<EventTypeUpdateFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			featureFlag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			schemas: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HttpErrorOut {

		/** Required */
		code: string;

		/** Required */
		detail: string;
	}
	export interface HttpErrorOutFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		detail: FormControl<string | null | undefined>,
	}
	export function CreateHttpErrorOutFormGroup() {
		return new FormGroup<HttpErrorOutFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IntegrationIn {

		/** Required */
		name: string;
	}
	export interface IntegrationInFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationInFormGroup() {
		return new FormGroup<IntegrationInFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IntegrationKeyOut {

		/** Required */
		key: string;
	}
	export interface IntegrationKeyOutFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationKeyOutFormGroup() {
		return new FormGroup<IntegrationKeyOutFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IntegrationOut {

		/** Required */
		createdAt: Date;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		updatedAt: Date;
	}
	export interface IntegrationOutFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateIntegrationOutFormGroup() {
		return new FormGroup<IntegrationOutFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IntegrationUpdate {

		/** Required */
		name: string;
	}
	export interface IntegrationUpdateFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationUpdateFormGroup() {
		return new FormGroup<IntegrationUpdateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListResponse_ApplicationOut_ {

		/** Required */
		data: Array<ApplicationOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_ApplicationOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_ApplicationOut_FormGroup() {
		return new FormGroup<ListResponse_ApplicationOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponse_BackgroundTaskOut_ {

		/** Required */
		data: Array<BackgroundTaskOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_BackgroundTaskOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_BackgroundTaskOut_FormGroup() {
		return new FormGroup<ListResponse_BackgroundTaskOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponse_EndpointMessageOut_ {

		/** Required */
		data: Array<EndpointMessageOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_EndpointMessageOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_EndpointMessageOut_FormGroup() {
		return new FormGroup<ListResponse_EndpointMessageOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponse_EndpointOut_ {

		/** Required */
		data: Array<EndpointOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_EndpointOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_EndpointOut_FormGroup() {
		return new FormGroup<ListResponse_EndpointOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponse_EventTypeOut_ {

		/** Required */
		data: Array<EventTypeOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_EventTypeOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_EventTypeOut_FormGroup() {
		return new FormGroup<ListResponse_EventTypeOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponse_IntegrationOut_ {

		/** Required */
		data: Array<IntegrationOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
	}
	export interface ListResponse_IntegrationOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_IntegrationOut_FormGroup() {
		return new FormGroup<ListResponse_IntegrationOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponse_MessageAttemptEndpointOut_ {

		/** Required */
		data: Array<MessageAttemptEndpointOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_MessageAttemptEndpointOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_MessageAttemptEndpointOut_FormGroup() {
		return new FormGroup<ListResponse_MessageAttemptEndpointOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageAttemptEndpointOut {

		/** Required */
		endpointId: string;

		/** Required */
		id: string;

		/** Required */
		msgId: string;

		/** Required */
		response: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode: number;

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: MessageStatus;

		/** Required */
		timestamp: Date;

		/**
		 * The reason an attempt was made:
		 * - Scheduled = 0
		 * - Manual = 1
		 * Required
		 */
		triggerType: MessageAttemptTriggerType;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;
	}
	export interface MessageAttemptEndpointOutFormProperties {

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		msgId: FormControl<string | null | undefined>,

		/** Required */
		response: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode: FormControl<number | null | undefined>,

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: FormControl<MessageStatus | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * The reason an attempt was made:
		 * - Scheduled = 0
		 * - Manual = 1
		 * Required
		 */
		triggerType: FormControl<MessageAttemptTriggerType | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMessageAttemptEndpointOutFormGroup() {
		return new FormGroup<MessageAttemptEndpointOutFormProperties>({
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			responseStatusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<MessageStatus | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			triggerType: new FormControl<MessageAttemptTriggerType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}


	/**
	 * The reason an attempt was made:
	 * - Scheduled = 0
	 * - Manual = 1
	 */
	export enum MessageAttemptTriggerType { _0 = 0, _1 = 1 }

	export interface ListResponse_MessageAttemptOut_ {

		/** Required */
		data: Array<MessageAttemptOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_MessageAttemptOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_MessageAttemptOut_FormGroup() {
		return new FormGroup<ListResponse_MessageAttemptOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageAttemptOut {

		/** Required */
		endpointId: string;

		/** Required */
		id: string;

		/** Required */
		msgId: string;

		/** Required */
		response: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode: number;

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: MessageStatus;

		/** Required */
		timestamp: Date;

		/**
		 * The reason an attempt was made:
		 * - Scheduled = 0
		 * - Manual = 1
		 * Required
		 */
		triggerType: MessageAttemptTriggerType;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;
	}
	export interface MessageAttemptOutFormProperties {

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		msgId: FormControl<string | null | undefined>,

		/** Required */
		response: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode: FormControl<number | null | undefined>,

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: FormControl<MessageStatus | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * The reason an attempt was made:
		 * - Scheduled = 0
		 * - Manual = 1
		 * Required
		 */
		triggerType: FormControl<MessageAttemptTriggerType | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMessageAttemptOutFormGroup() {
		return new FormGroup<MessageAttemptOutFormProperties>({
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			responseStatusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<MessageStatus | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			triggerType: new FormControl<MessageAttemptTriggerType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export interface ListResponse_MessageEndpointOut_ {

		/** Required */
		data: Array<MessageEndpointOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
	}
	export interface ListResponse_MessageEndpointOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_MessageEndpointOut_FormGroup() {
		return new FormGroup<ListResponse_MessageEndpointOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageEndpointOut {

		/**
		 * List of message channels this endpoint listens to (omit for all)
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		channels?: Array<string>;

		/** Required */
		createdAt: Date;
		description?: string | null;
		disabled?: boolean | null;

		/** Minimum items: 1 */
		filterTypes?: Array<string>;

		/** Required */
		id: string;
		metadata?: {[id: string]: string };
		nextAttempt?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit?: number | null;

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: MessageStatus;

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface MessageEndpointOutFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<{[id: string]: string } | null | undefined>,
		nextAttempt: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		rateLimit: FormControl<number | null | undefined>,

		/**
		 * The sending status of the message:
		 * - Success = 0
		 * - Pending = 1
		 * - Fail = 2
		 * - Sending = 3
		 * Required
		 */
		status: FormControl<MessageStatus | null | undefined>,

		/**
		 * Optional unique identifier for the endpoint
		 * Min length: 1
		 * Max length: 256
		 */
		uid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateMessageEndpointOutFormGroup() {
		return new FormGroup<MessageEndpointOutFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			nextAttempt: new FormControl<Date | null | undefined>(undefined),
			rateLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			status: new FormControl<MessageStatus | null | undefined>(undefined, [Validators.required]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface ListResponse_MessageOut_ {

		/** Required */
		data: Array<MessageOut>;

		/** Required */
		done: boolean;
		iterator?: string | null;
		prevIterator?: string | null;
	}
	export interface ListResponse_MessageOut_FormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
		iterator: FormControl<string | null | undefined>,
		prevIterator: FormControl<string | null | undefined>,
	}
	export function CreateListResponse_MessageOut_FormGroup() {
		return new FormGroup<ListResponse_MessageOut_FormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			iterator: new FormControl<string | null | undefined>(undefined),
			prevIterator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageOut {

		/**
		 * List of free-form identifiers that endpoints can filter by
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		channels?: Array<string>;

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		eventId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: string;

		/** Required */
		id: string;

		/** Required */
		payload: string;

		/** Required */
		timestamp: Date;
	}
	export interface MessageOutFormProperties {

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMessageOutFormGroup() {
		return new FormGroup<MessageOutFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Sent when a message delivery has failed (all of the retry attempts have been exhausted). */
	export interface MessageAttemptExhaustedEvent {

		/** Required */
		data: MessageAttemptExhaustedEventData;
		type?: MessageAttemptExhaustedEventType | null;
	}

	/** Sent when a message delivery has failed (all of the retry attempts have been exhausted). */
	export interface MessageAttemptExhaustedEventFormProperties {
		type: FormControl<MessageAttemptExhaustedEventType | null | undefined>,
	}
	export function CreateMessageAttemptExhaustedEventFormGroup() {
		return new FormGroup<MessageAttemptExhaustedEventFormProperties>({
			type: new FormControl<MessageAttemptExhaustedEventType | null | undefined>(undefined),
		});

	}

	export interface MessageAttemptExhaustedEventData {

		/** Required */
		appId: string;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid?: string | null;

		/** Required */
		endpointId: string;

		/** Required */
		lastAttempt: MessageAttemptFailedData;

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		msgEventId?: string | null;

		/** Required */
		msgId: string;
	}
	export interface MessageAttemptExhaustedEventDataFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid: FormControl<string | null | undefined>,

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		msgEventId: FormControl<string | null | undefined>,

		/** Required */
		msgId: FormControl<string | null | undefined>,
	}
	export function CreateMessageAttemptExhaustedEventDataFormGroup() {
		return new FormGroup<MessageAttemptExhaustedEventDataFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msgEventId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			msgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MessageAttemptFailedData {

		/** Required */
		id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode: number;

		/** Required */
		timestamp: Date;
	}
	export interface MessageAttemptFailedDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode: FormControl<number | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMessageAttemptFailedDataFormGroup() {
		return new FormGroup<MessageAttemptFailedDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			responseStatusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessageAttemptExhaustedEventType { 'message.attempt.exhausted' = 'message.attempt.exhausted' }


	/**
	 * Sent after a message has been failing for a few times.
	 * It's sent on the fourth failure. It complements `message.attempt.exhausted` which is sent after the last failure.
	 */
	export interface MessageAttemptFailingEvent {

		/** Required */
		data: MessageAttemptFailingEventData;
		type?: MessageAttemptFailingEventType | null;
	}

	/**
	 * Sent after a message has been failing for a few times.
	 * It's sent on the fourth failure. It complements `message.attempt.exhausted` which is sent after the last failure.
	 */
	export interface MessageAttemptFailingEventFormProperties {
		type: FormControl<MessageAttemptFailingEventType | null | undefined>,
	}
	export function CreateMessageAttemptFailingEventFormGroup() {
		return new FormGroup<MessageAttemptFailingEventFormProperties>({
			type: new FormControl<MessageAttemptFailingEventType | null | undefined>(undefined),
		});

	}

	export interface MessageAttemptFailingEventData {

		/** Required */
		appId: string;

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid?: string | null;

		/** Required */
		endpointId: string;

		/** Required */
		lastAttempt: MessageAttemptFailedData;

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		msgEventId?: string | null;

		/** Required */
		msgId: string;
	}
	export interface MessageAttemptFailingEventDataFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the application
		 * Min length: 1
		 * Max length: 256
		 */
		appUid: FormControl<string | null | undefined>,

		/** Required */
		endpointId: FormControl<string | null | undefined>,

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		msgEventId: FormControl<string | null | undefined>,

		/** Required */
		msgId: FormControl<string | null | undefined>,
	}
	export function CreateMessageAttemptFailingEventDataFormGroup() {
		return new FormGroup<MessageAttemptFailingEventDataFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appUid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			endpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msgEventId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			msgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessageAttemptFailingEventType { 'message.attempt.failing' = 'message.attempt.failing' }

	export interface MessageIn {
		application?: ApplicationIn;

		/**
		 * List of free-form identifiers that endpoints can filter by
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		channels?: Array<string>;

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		eventId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: string;

		/** Required */
		payload: string;

		/**
		 * The retention period for the payload (in days).
		 * Minimum: 5
		 * Maximum: 90
		 */
		payloadRetentionPeriod?: number | null;
	}
	export interface MessageInFormProperties {

		/**
		 * Optional unique identifier for the message
		 * Min length: 1
		 * Max length: 256
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,

		/**
		 * The retention period for the payload (in days).
		 * Minimum: 5
		 * Maximum: 90
		 */
		payloadRetentionPeriod: FormControl<number | null | undefined>,
	}
	export function CreateMessageInFormGroup() {
		return new FormGroup<MessageInFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-_.]+$')]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payloadRetentionPeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(90)]),
		});

	}


	/** Defines the ordering in a listing of results. */
	export enum Ordering { ascending = 'ascending', descending = 'descending' }

	export interface RecoverIn {

		/** Required */
		since: Date;
		until?: Date | null;
	}
	export interface RecoverInFormProperties {

		/** Required */
		since: FormControl<Date | null | undefined>,
		until: FormControl<Date | null | undefined>,
	}
	export function CreateRecoverInFormGroup() {
		return new FormGroup<RecoverInFormProperties>({
			since: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			until: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RecoverOut {

		/** Required */
		id: string;

		/**
		 * An enumeration.
		 * Required
		 */
		status: BackgroundTaskOutStatus;
		task?: RecoverOutTask | null;
	}
	export interface RecoverOutFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		status: FormControl<BackgroundTaskOutStatus | null | undefined>,
		task: FormControl<RecoverOutTask | null | undefined>,
	}
	export function CreateRecoverOutFormGroup() {
		return new FormGroup<RecoverOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BackgroundTaskOutStatus | null | undefined>(undefined, [Validators.required]),
			task: new FormControl<RecoverOutTask | null | undefined>(undefined),
		});

	}

	export enum RecoverOutTask { 'endpoint.recover' = 'endpoint.recover' }

	export interface ReplayIn {

		/** Required */
		since: Date;
		until?: Date | null;
	}
	export interface ReplayInFormProperties {

		/** Required */
		since: FormControl<Date | null | undefined>,
		until: FormControl<Date | null | undefined>,
	}
	export function CreateReplayInFormGroup() {
		return new FormGroup<ReplayInFormProperties>({
			since: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			until: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ReplayOut {

		/** Required */
		id: string;

		/**
		 * An enumeration.
		 * Required
		 */
		status: BackgroundTaskOutStatus;
		task?: ReplayOutTask | null;
	}
	export interface ReplayOutFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		status: FormControl<BackgroundTaskOutStatus | null | undefined>,
		task: FormControl<ReplayOutTask | null | undefined>,
	}
	export function CreateReplayOutFormGroup() {
		return new FormGroup<ReplayOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BackgroundTaskOutStatus | null | undefined>(undefined, [Validators.required]),
			task: new FormControl<ReplayOutTask | null | undefined>(undefined),
		});

	}

	export enum ReplayOutTask { 'endpoint.replay' = 'endpoint.replay' }


	/**
	 * The different classes of HTTP status codes:
	 * - CodeNone = 0
	 * - Code1xx = 100
	 * - Code2xx = 200
	 * - Code3xx = 300
	 * - Code4xx = 400
	 * - Code5xx = 500
	 */
	export enum StatusCodeClass { _0 = 0, _100 = 1, _200 = 2, _300 = 3, _400 = 4, _500 = 5 }


	/** All of the webhook types that we support */
	export interface WebhookTypes {

		/**
		 * Sent when an endpoint has been automatically disabled after continuous failures.
		 * Required
		 */
		a: EndpointDisabledEvent;

		/**
		 * Sent after a message has been failing for a few times.
		 * It's sent on the fourth failure. It complements `message.attempt.exhausted` which is sent after the last failure.
		 * Required
		 */
		a1: MessageAttemptFailingEvent;

		/**
		 * Sent when a background task finishes.
		 * Required
		 */
		a2: BackgroundTaskFinishedEvent;

		/**
		 * Sent when an endpoint is created.
		 * Required
		 */
		b: EndpointCreatedEvent;

		/**
		 * Sent when an endpoint is updated.
		 * Required
		 */
		c: EndpointUpdatedEvent;

		/**
		 * Sent when an endpoint is deleted.
		 * Required
		 */
		d: EndpointDeletedEvent;

		/**
		 * Sent when a message delivery has failed (all of the retry attempts have been exhausted).
		 * Required
		 */
		e: MessageAttemptExhaustedEvent;
	}

	/** All of the webhook types that we support */
	export interface WebhookTypesFormProperties {
	}
	export function CreateWebhookTypesFormGroup() {
		return new FormGroup<WebhookTypesFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Applications
		 * List of all the organization's applications.
		 * Get api/v1/app/
		 * @param {number} limit Maximum: 250
		 * @return {ListResponse_ApplicationOut_} Successful Response
		 */
		List_applications_api_v1_app__get(iterator: string | null | undefined, limit: number | null | undefined, order: Ordering | null | undefined): Observable<ListResponse_ApplicationOut_> {
			return this.http.get<ListResponse_ApplicationOut_>(this.baseUri + 'api/v1/app/?iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&order=' + order, {});
		}

		/**
		 * Create Application
		 * Create a new application.
		 * Post api/v1/app/
		 * @param {boolean} get_if_exists Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.
		 * @return {ApplicationOut} OK
		 */
		Create_application_api_v1_app__post(get_if_exists: boolean | null | undefined, requestBody: ApplicationIn): Observable<ApplicationOut> {
			return this.http.post<ApplicationOut>(this.baseUri + 'api/v1/app/?get_if_exists=' + get_if_exists, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Application
		 * Delete an application.
		 * Delete api/v1/app/{app_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Delete_application_api_v1_app__app_id___delete(app_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Application
		 * Get an application.
		 * Get api/v1/app/{app_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {ApplicationOut} Successful Response
		 */
		Get_application_api_v1_app__app_id___get(app_id: string): Observable<ApplicationOut> {
			return this.http.get<ApplicationOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/', {});
		}

		/**
		 * Update Application
		 * Update an application.
		 * Put api/v1/app/{app_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {ApplicationOut} Successful Response
		 */
		Update_application_api_v1_app__app_id___put(app_id: string, requestBody: ApplicationIn): Observable<ApplicationOut> {
			return this.http.put<ApplicationOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Attempts By Endpoint
		 * List attempts by endpoint id
		 * Get api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @param {MessageStatus} status Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {StatusCodeClass} status_code_class Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} channel Max length: 128
		 * @return {ListResponse_MessageAttemptOut_} Successful Response
		 */
		List_attempts_by_endpoint_api_v1_app__app_id__attempt_endpoint__endpoint_id___get(app_id: string, endpoint_id: string, iterator: string | null | undefined, limit: number | null | undefined, status: MessageStatus | null | undefined, status_code_class: StatusCodeClass | null | undefined, event_types: Array<string> | null | undefined, channel: string | null | undefined, before: Date | null | undefined, after: Date | null | undefined): Observable<ListResponse_MessageAttemptOut_> {
			return this.http.get<ListResponse_MessageAttemptOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/attempt/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&status=' + status + '&status_code_class=' + status_code_class + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&before=' + before?.toISOString() + '&after=' + after?.toISOString(), {});
		}

		/**
		 * List Attempts By Msg
		 * List attempts by message id
		 * Get api/v1/app/{app_id}/attempt/msg/{msg_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @param {MessageStatus} status Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {StatusCodeClass} status_code_class Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} channel Max length: 128
		 * @return {ListResponse_MessageAttemptOut_} Successful Response
		 */
		List_attempts_by_msg_api_v1_app__app_id__attempt_msg__msg_id___get(app_id: string, msg_id: string, endpoint_id: string | null | undefined, iterator: string | null | undefined, limit: number | null | undefined, status: MessageStatus | null | undefined, status_code_class: StatusCodeClass | null | undefined, event_types: Array<string> | null | undefined, channel: string | null | undefined, before: Date | null | undefined, after: Date | null | undefined): Observable<ListResponse_MessageAttemptOut_> {
			return this.http.get<ListResponse_MessageAttemptOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/attempt/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/&endpoint_id=' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&status=' + status + '&status_code_class=' + status_code_class + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&before=' + before?.toISOString() + '&after=' + after?.toISOString(), {});
		}

		/**
		 * List Endpoints
		 * List the application's endpoints.
		 * Get api/v1/app/{app_id}/endpoint/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @return {ListResponse_EndpointOut_} Successful Response
		 */
		List_endpoints_api_v1_app__app_id__endpoint__get(app_id: string, iterator: string | null | undefined, limit: number | null | undefined, order: Ordering | null | undefined): Observable<ListResponse_EndpointOut_> {
			return this.http.get<ListResponse_EndpointOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&order=' + order, {});
		}

		/**
		 * Create Endpoint
		 * Create a new endpoint for the application.
		 * When `secret` is `null` the secret is automatically generated (recommended)
		 * Post api/v1/app/{app_id}/endpoint/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Create_endpoint_api_v1_app__app_id__endpoint__post(app_id: string, requestBody: EndpointIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Endpoint
		 * Delete an endpoint.
		 * Delete api/v1/app/{app_id}/endpoint/{endpoint_id}/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Delete_endpoint_api_v1_app__app_id__endpoint__endpoint_id___delete(endpoint_id: string, app_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Endpoint
		 * Get an application.
		 * Get api/v1/app/{app_id}/endpoint/{endpoint_id}/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {EndpointOut} Successful Response
		 */
		Get_endpoint_api_v1_app__app_id__endpoint__endpoint_id___get(endpoint_id: string, app_id: string): Observable<EndpointOut> {
			return this.http.get<EndpointOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/', {});
		}

		/**
		 * Update Endpoint
		 * Update an endpoint.
		 * Put api/v1/app/{app_id}/endpoint/{endpoint_id}/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {EndpointOut} Successful Response
		 */
		Update_endpoint_api_v1_app__app_id__endpoint__endpoint_id___put(endpoint_id: string, app_id: string, requestBody: EndpointUpdate): Observable<EndpointOut> {
			return this.http.put<EndpointOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Endpoint Headers
		 * Get the additional headers to be sent with the webhook
		 * Get api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {EndpointHeadersOut} Successful Response
		 */
		Get_endpoint_headers_api_v1_app__app_id__endpoint__endpoint_id__headers__get(endpoint_id: string, app_id: string): Observable<EndpointHeadersOut> {
			return this.http.get<EndpointHeadersOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/headers/', {});
		}

		/**
		 * Patch Endpoint Headers
		 * Partially set the additional headers to be sent with the webhook
		 * Patch api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Patch_endpoint_headers_api_v1_app__app_id__endpoint__endpoint_id__headers__patch(app_id: string, endpoint_id: string, requestBody: EndpointHeadersPatchIn): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/headers/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Endpoint Headers
		 * Set the additional headers to be sent with the webhook
		 * Put api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Update_endpoint_headers_api_v1_app__app_id__endpoint__endpoint_id__headers__put(app_id: string, endpoint_id: string, requestBody: EndpointHeadersIn): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/headers/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Attempted Messages
		 * List messages for a particular endpoint. Additionally includes metadata about the latest message attempt.
		 * The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.
		 * Get api/v1/app/{app_id}/endpoint/{endpoint_id}/msg/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @param {string} channel Max length: 128
		 * @param {MessageStatus} status Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResponse_EndpointMessageOut_} Successful Response
		 */
		List_attempted_messages_api_v1_app__app_id__endpoint__endpoint_id__msg__get(endpoint_id: string, app_id: string, iterator: string | null | undefined, limit: number | null | undefined, channel: string | null | undefined, status: MessageStatus | null | undefined, before: Date | null | undefined, after: Date | null | undefined): Observable<ListResponse_EndpointMessageOut_> {
			return this.http.get<ListResponse_EndpointMessageOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/msg/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&status=' + status + '&before=' + before?.toISOString() + '&after=' + after?.toISOString(), {});
		}

		/**
		 * Recover Failed Webhooks
		 * Resend all failed messages since a given time.
		 * Post api/v1/app/{app_id}/endpoint/{endpoint_id}/recover/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Recover_failed_webhooks_api_v1_app__app_id__endpoint__endpoint_id__recover__post(app_id: string, endpoint_id: string, requestBody: RecoverIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/recover/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replay Missing Webhooks
		 * Replays messages to the endpoint. Only messages that were created after `since` will be sent. Messages that were previously sent to the endpoint are not resent.
		 * Post api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Replay_missing_webhooks_api_v1_app__app_id__endpoint__endpoint_id__replay_missing__post(app_id: string, endpoint_id: string, requestBody: ReplayIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/replay-missing/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Endpoint Secret
		 * Get the endpoint's signing secret.
		 * This is used to verify the authenticity of the webhook.
		 * For more information please refer to [the consuming webhooks docs](https://docs.svix.com/consuming-webhooks/).
		 * Get api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {EndpointSecretOut} Successful Response
		 */
		Get_endpoint_secret_api_v1_app__app_id__endpoint__endpoint_id__secret__get(endpoint_id: string, app_id: string): Observable<EndpointSecretOut> {
			return this.http.get<EndpointSecretOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/secret/', {});
		}

		/**
		 * Rotate Endpoint Secret
		 * Rotates the endpoint's signing secret.  The previous secret will be valid for the next 24 hours.
		 * Post api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Rotate_endpoint_secret_api_v1_app__app_id__endpoint__endpoint_id__secret_rotate__post(endpoint_id: string, app_id: string, requestBody: EndpointSecretRotateIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/secret/rotate/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send Event Type Example Message
		 * Send an example message for event
		 * Post api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Send_event_type_example_message_api_v1_app__app_id__endpoint__endpoint_id__send_example__post(app_id: string, endpoint_id: string, requestBody: EventExampleIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/send-example/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Endpoint Stats
		 * Get basic statistics for the endpoint.
		 * Get api/v1/app/{app_id}/endpoint/{endpoint_id}/stats/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {EndpointStats} Successful Response
		 */
		Get_endpoint_stats_api_v1_app__app_id__endpoint__endpoint_id__stats__get(endpoint_id: string, app_id: string, since: Date | null | undefined, until: Date | null | undefined): Observable<EndpointStats> {
			return this.http.get<EndpointStats>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/stats/&since=' + since?.toISOString() + '&until=' + until?.toISOString(), {});
		}

		/**
		 * Get Endpoint Transformation
		 * Get the transformation code associated with this endpoint
		 * Get api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {EndpointTransformationOut} Successful Response
		 */
		Get_endpoint_transformation_api_v1_app__app_id__endpoint__endpoint_id__transformation__get(endpoint_id: string, app_id: string): Observable<EndpointTransformationOut> {
			return this.http.get<EndpointTransformationOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/transformation/', {});
		}

		/**
		 * Set Endpoint Transformation
		 * Set or unset the transformation code associated with this endpoint
		 * Patch api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Set_endpoint_transformation_api_v1_app__app_id__endpoint__endpoint_id__transformation__patch(app_id: string, endpoint_id: string, requestBody: EndpointTransformationIn): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/transformation/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Integrations
		 * List the application's integrations.
		 * Get api/v1/app/{app_id}/integration/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResponse_IntegrationOut_} Successful Response
		 */
		List_integrations_api_v1_app__app_id__integration__get(app_id: string, iterator: string | null | undefined, limit: number | null | undefined): Observable<ListResponse_IntegrationOut_> {
			return this.http.get<ListResponse_IntegrationOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/integration/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit, {});
		}

		/**
		 * Create Integration
		 * Create an integration.
		 * Post api/v1/app/{app_id}/integration/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Create_integration_api_v1_app__app_id__integration__post(app_id: string, requestBody: IntegrationIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/integration/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Integration
		 * Delete an integration and revoke it's key.
		 * Delete api/v1/app/{app_id}/integration/{integ_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Delete_integration_api_v1_app__app_id__integration__integ_id___delete(integ_id: string, app_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/integration/' + (integ_id == null ? '' : encodeURIComponent(integ_id)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Integration
		 * Get an integration.
		 * Get api/v1/app/{app_id}/integration/{integ_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {IntegrationOut} Successful Response
		 */
		Get_integration_api_v1_app__app_id__integration__integ_id___get(integ_id: string, app_id: string): Observable<IntegrationOut> {
			return this.http.get<IntegrationOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/integration/' + (integ_id == null ? '' : encodeURIComponent(integ_id)) + '/', {});
		}

		/**
		 * Update Integration
		 * Update an integration.
		 * Put api/v1/app/{app_id}/integration/{integ_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {IntegrationOut} Successful Response
		 */
		Update_integration_api_v1_app__app_id__integration__integ_id___put(integ_id: string, app_id: string, requestBody: IntegrationUpdate): Observable<IntegrationOut> {
			return this.http.put<IntegrationOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/integration/' + (integ_id == null ? '' : encodeURIComponent(integ_id)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Integration Key
		 * Get an integration's key.
		 * Get api/v1/app/{app_id}/integration/{integ_id}/key/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {IntegrationKeyOut} Successful Response
		 */
		Get_integration_key_api_v1_app__app_id__integration__integ_id__key__get(integ_id: string, app_id: string): Observable<IntegrationKeyOut> {
			return this.http.get<IntegrationKeyOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/integration/' + (integ_id == null ? '' : encodeURIComponent(integ_id)) + '/key/', {});
		}

		/**
		 * Rotate Integration Key
		 * Rotate the integration's key. The previous key will be immediately revoked.
		 * Post api/v1/app/{app_id}/integration/{integ_id}/key/rotate/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {IntegrationKeyOut} Successful Response
		 */
		Rotate_integration_key_api_v1_app__app_id__integration__integ_id__key_rotate__post(integ_id: string, app_id: string): Observable<IntegrationKeyOut> {
			return this.http.post<IntegrationKeyOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/integration/' + (integ_id == null ? '' : encodeURIComponent(integ_id)) + '/key/rotate/', null, {});
		}

		/**
		 * List Messages
		 * List all of the application's messages.
		 * The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.
		 * The `after` parameter lets you filter all items created after a certain date and is ignored if an iterator is passed.
		 * `before` and `after` cannot be used simultaneously.
		 * Get api/v1/app/{app_id}/msg/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @param {string} channel Max length: 128
		 * @return {ListResponse_MessageOut_} Successful Response
		 */
		List_messages_api_v1_app__app_id__msg__get(app_id: string, iterator: string | null | undefined, limit: number | null | undefined, event_types: Array<string> | null | undefined, channel: string | null | undefined, before: Date | null | undefined, after: Date | null | undefined): Observable<ListResponse_MessageOut_> {
			return this.http.get<ListResponse_MessageOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&before=' + before?.toISOString() + '&after=' + after?.toISOString(), {});
		}

		/**
		 * Create Message
		 * Creates a new message and dispatches it to all of the application's endpoints.
		 * The `eventId` is an optional custom unique ID. It's verified to be unique only up to a day, after that no verification will be made.
		 * If a message with the same `eventId` already exists for any application in your environment, a 409 conflict error will be returned.
		 * The `eventType` indicates the type and schema of the event. All messages of a certain `eventType` are expected to have the same schema. Endpoints can choose to only listen to specific event types.
		 * Messages can also have `channels`, which similar to event types let endpoints filter by them. Unlike event types, messages can have multiple channels, and channels don't imply a specific message content or schema.
		 * The `payload` property is the webhook's body (the actual webhook message). Svix supports payload sizes of up to ~350kb, though it's generally a good idea to keep webhook payloads small, probably no larger than 40kb.
		 * The optional `application` property will be used to create an application if the application referenced in the path does not exist. If it does then this property is ignored.
		 * Post api/v1/app/{app_id}/msg/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Create_message_api_v1_app__app_id__msg__post(app_id: string, with_content: boolean | null | undefined, requestBody: MessageIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/&with_content=' + with_content, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Message
		 * Get a message by its ID or eventID.
		 * Get api/v1/app/{app_id}/msg/{msg_id}/
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {MessageOut} Successful Response
		 */
		Get_message_api_v1_app__app_id__msg__msg_id___get(msg_id: string, app_id: string): Observable<MessageOut> {
			return this.http.get<MessageOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/', {});
		}

		/**
		 * List Attempts
		 * Deprecated: Please use "List Attempts by Endpoint" and "List Attempts by Msg" instead.
		 * `msg_id`: Use a message id or a message `eventId`
		 * Get api/v1/app/{app_id}/msg/{msg_id}/attempt/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} channel Max length: 128
		 * @param {MessageStatus} status Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResponse_MessageAttemptOut_} Successful Response
		 */
		List_attempts_api_v1_app__app_id__msg__msg_id__attempt__get(app_id: string, msg_id: string, iterator: string | null | undefined, limit: number | null | undefined, endpoint_id: string | null | undefined, event_types: Array<string> | null | undefined, channel: string | null | undefined, status: MessageStatus | null | undefined, before: Date | null | undefined, after: Date | null | undefined): Observable<ListResponse_MessageAttemptOut_> {
			return this.http.get<ListResponse_MessageAttemptOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/attempt/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&endpoint_id=' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&status=' + status + '&before=' + before?.toISOString() + '&after=' + after?.toISOString(), {});
		}

		/**
		 * Get Attempt
		 * `msg_id`: Use a message id or a message `eventId`
		 * Get api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {MessageAttemptOut} Successful Response
		 */
		Get_attempt_api_v1_app__app_id__msg__msg_id__attempt__attempt_id___get(attempt_id: string, msg_id: string, app_id: string): Observable<MessageAttemptOut> {
			return this.http.get<MessageAttemptOut>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/attempt/' + (attempt_id == null ? '' : encodeURIComponent(attempt_id)) + '/', {});
		}

		/**
		 * Delete attempt response body
		 * Deletes the given attempt's response body. Useful when an endpoint accidentally returned sensitive content.
		 * Delete api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content/
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Expunge_attempt_content_api_v1_app__app_id__msg__msg_id__attempt__attempt_id__content__delete(attempt_id: string, msg_id: string, app_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/attempt/' + (attempt_id == null ? '' : encodeURIComponent(attempt_id)) + '/content/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete message payload
		 * Delete the given message's payload. Useful in cases when a message was accidentally sent with sensitive content.
		 * The message can't be replayed or resent once its payload has been deleted or expired.
		 * Delete api/v1/app/{app_id}/msg/{msg_id}/content/
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Expunge_message_payload_api_v1_app__app_id__msg__msg_id__content__delete(msg_id: string, app_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/content/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Attempted Destinations
		 * `msg_id`: Use a message id or a message `eventId`
		 * Get api/v1/app/{app_id}/msg/{msg_id}/endpoint/
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @return {ListResponse_MessageEndpointOut_} Successful Response
		 */
		List_attempted_destinations_api_v1_app__app_id__msg__msg_id__endpoint__get(msg_id: string, app_id: string, iterator: string | null | undefined, limit: number | null | undefined): Observable<ListResponse_MessageEndpointOut_> {
			return this.http.get<ListResponse_MessageEndpointOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/endpoint/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit, {});
		}

		/**
		 * List Attempts For Endpoint
		 * DEPRECATED: please use list_attempts with endpoint_id as a query parameter instead.
		 * List the message attempts for a particular endpoint.
		 * Returning the endpoint.
		 * The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.
		 * Get api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/attempt/
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {number} limit Maximum: 250
		 * @param {string} channel Max length: 128
		 * @param {MessageStatus} status Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResponse_MessageAttemptEndpointOut_} Successful Response
		 */
		List_attempts_for_endpoint_api_v1_app__app_id__msg__msg_id__endpoint__endpoint_id__attempt__get(msg_id: string, app_id: string, endpoint_id: string, iterator: string | null | undefined, limit: number | null | undefined, event_types: Array<string> | null | undefined, channel: string | null | undefined, status: MessageStatus | null | undefined, before: Date | null | undefined, after: Date | null | undefined): Observable<ListResponse_MessageAttemptEndpointOut_> {
			return this.http.get<ListResponse_MessageAttemptEndpointOut_>(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/attempt/&iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&status=' + status + '&before=' + before?.toISOString() + '&after=' + after?.toISOString(), {});
		}

		/**
		 * Resend Webhook
		 * Resend a message to the specified endpoint.
		 * Post api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend/
		 * @param {string} endpoint_id Min length: 1
		 *     Max length: 256
		 * @param {string} msg_id Min length: 1
		 *     Max length: 256
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Resend_webhook_api_v1_app__app_id__msg__msg_id__endpoint__endpoint_id__resend__post(endpoint_id: string, msg_id: string, app_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/msg/' + (msg_id == null ? '' : encodeURIComponent(msg_id)) + '/endpoint/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)) + '/resend/', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Consumer App Portal Access
		 * Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
		 * Post api/v1/auth/app-portal-access/{app_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {AppPortalAccessOut} Successful Response
		 */
		Get_app_portal_access_api_v1_auth_app_portal_access__app_id___post(app_id: string, requestBody: AppPortalAccessIn): Observable<AppPortalAccessOut> {
			return this.http.post<AppPortalAccessOut>(this.baseUri + 'api/v1/auth/app-portal-access/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Expire All
		 * Expire all of the tokens associated with a specific Application
		 * Post api/v1/auth/app/{app_id}/expire-all/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {void} 
		 */
		Expire_all_api_v1_auth_app__app_id__expire_all__post(app_id: string, requestBody: ApplicationTokenExpireIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/auth/app/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/expire-all/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Dashboard Access
		 * DEPRECATED: Please use `app-portal-access` instead.
		 * Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
		 * Post api/v1/auth/dashboard-access/{app_id}/
		 * @param {string} app_id Min length: 1
		 *     Max length: 256
		 * @return {DashboardAccessOut} Successful Response
		 */
		Get_dashboard_access_api_v1_auth_dashboard_access__app_id___post(app_id: string): Observable<DashboardAccessOut> {
			return this.http.post<DashboardAccessOut>(this.baseUri + 'api/v1/auth/dashboard-access/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/', null, {});
		}

		/**
		 * Logout
		 * Logout an app token.
		 * Trying to log out other tokens will fail.
		 * Post api/v1/auth/logout/
		 * @return {void} 
		 */
		Logout_api_v1_auth_logout__post(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/auth/logout/', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Background Tasks
		 * List background tasks executed in the past 90 days.
		 * Get api/v1/background-task/
		 * @param {number} limit Maximum: 250
		 * @return {ListResponse_BackgroundTaskOut_} Successful Response
		 */
		List_background_tasks_api_v1_background_task__get(iterator: string | null | undefined, limit: number | null | undefined, order: Ordering | null | undefined): Observable<ListResponse_BackgroundTaskOut_> {
			return this.http.get<ListResponse_BackgroundTaskOut_>(this.baseUri + 'api/v1/background-task/?iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&order=' + order, {});
		}

		/**
		 * Get Background Task
		 * Get a background task by ID.
		 * Get api/v1/background-task/{task_id}/
		 * @return {BackgroundTaskOut} Successful Response
		 */
		Get_background_task_api_v1_background_task__task_id___get(task_id: string): Observable<BackgroundTaskOut> {
			return this.http.get<BackgroundTaskOut>(this.baseUri + 'api/v1/background-task/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/', {});
		}

		/**
		 * List Event Types
		 * Return the list of event types.
		 * Get api/v1/event-type/
		 * @param {string} iterator Max length: 256
		 * @param {number} limit Maximum: 250
		 * @return {ListResponse_EventTypeOut_} Successful Response
		 */
		List_event_types_api_v1_event_type__get(iterator: string | null | undefined, limit: number | null | undefined, with_content: boolean | null | undefined, include_archived: boolean | null | undefined): Observable<ListResponse_EventTypeOut_> {
			return this.http.get<ListResponse_EventTypeOut_>(this.baseUri + 'api/v1/event-type/?iterator=' + (iterator == null ? '' : encodeURIComponent(iterator)) + '&limit=' + limit + '&with_content=' + with_content + '&include_archived=' + include_archived, {});
		}

		/**
		 * Create Event Type
		 * Create new or unarchive existing event type.
		 * Unarchiving an event type will allow endpoints to filter on it and messages to be sent with it.
		 * Endpoints filtering on the event type before archival will continue to filter on it.
		 * This operation does not preserve the description and schemas.
		 * Post api/v1/event-type/
		 * @return {void} 
		 */
		Create_event_type_api_v1_event_type__post(requestBody: EventTypeIn): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/event-type/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Archive Event Type
		 * Archive an event type.
		 * Endpoints already configured to filter on an event type will continue to do so after archival.
		 * However, new messages can not be sent with it and endpoints can not filter on it.
		 * An event type can be unarchived with the
		 * [create operation](#operation/create_event_type_api_v1_event_type__post).
		 * If `expunge=true` is set then the event type is deleted instead of archived.
		 * This can only be used in development environments.
		 * Delete api/v1/event-type/{event_type_name}/
		 * @param {string} event_type_name Max length: 256
		 * @return {void} 
		 */
		Delete_event_type_api_v1_event_type__event_type_name___delete(event_type_name: string, expunge: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/event-type/' + (event_type_name == null ? '' : encodeURIComponent(event_type_name)) + '/&expunge=' + expunge, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Event Type
		 * Get an event type.
		 * Get api/v1/event-type/{event_type_name}/
		 * @param {string} event_type_name Max length: 256
		 * @return {EventTypeOut} Successful Response
		 */
		Get_event_type_api_v1_event_type__event_type_name___get(event_type_name: string): Observable<EventTypeOut> {
			return this.http.get<EventTypeOut>(this.baseUri + 'api/v1/event-type/' + (event_type_name == null ? '' : encodeURIComponent(event_type_name)) + '/', {});
		}

		/**
		 * Update Event Type
		 * Update an event type.
		 * Put api/v1/event-type/{event_type_name}/
		 * @param {string} event_type_name Max length: 256
		 * @return {EventTypeOut} Successful Response
		 */
		Update_event_type_api_v1_event_type__event_type_name___put(event_type_name: string, requestBody: EventTypeUpdate): Observable<EventTypeOut> {
			return this.http.put<EventTypeOut>(this.baseUri + 'api/v1/event-type/' + (event_type_name == null ? '' : encodeURIComponent(event_type_name)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Health
		 * Verify the API server is up and running.
		 * Get api/v1/health/
		 * @return {void} 
		 */
		Health_api_v1_health__get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/health/', { observe: 'response', responseType: 'text' });
		}
	}

}

