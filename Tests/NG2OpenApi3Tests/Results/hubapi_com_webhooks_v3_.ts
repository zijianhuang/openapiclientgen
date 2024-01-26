import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchInputSubscriptionBatchUpdateRequest {

		/** Required */
		inputs: Array<SubscriptionBatchUpdateRequest>;
	}
	export interface BatchInputSubscriptionBatchUpdateRequestFormProperties {
	}
	export function CreateBatchInputSubscriptionBatchUpdateRequestFormGroup() {
		return new FormGroup<BatchInputSubscriptionBatchUpdateRequestFormProperties>({
		});

	}

	export interface SubscriptionBatchUpdateRequest {

		/** Required */
		active: boolean;

		/** Required */
		id: number;
	}
	export interface SubscriptionBatchUpdateRequestFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionBatchUpdateRequestFormGroup() {
		return new FormGroup<SubscriptionBatchUpdateRequestFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchResponseSubscriptionResponse {

		/** Required */
		completedAt: Date;
		links?: {[id: string]: string };
		requestedAt?: Date | null;

		/** Required */
		results: Array<SubscriptionResponse>;

		/** Required */
		startedAt: Date;

		/** Required */
		status: BatchResponseSubscriptionResponseStatus;
	}
	export interface BatchResponseSubscriptionResponseFormProperties {

		/** Required */
		completedAt: FormControl<Date | null | undefined>,
		links: FormControl<{[id: string]: string } | null | undefined>,
		requestedAt: FormControl<Date | null | undefined>,

		/** Required */
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<BatchResponseSubscriptionResponseStatus | null | undefined>,
	}
	export function CreateBatchResponseSubscriptionResponseFormGroup() {
		return new FormGroup<BatchResponseSubscriptionResponseFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BatchResponseSubscriptionResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Complete details for an event subscription. */
	export interface SubscriptionResponse {

		/**
		 * Determines if the subscription is active or paused.
		 * Required
		 */
		active: boolean;

		/**
		 * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
		 * Required
		 */
		createdAt: Date;

		/**
		 * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
		 * Required
		 */
		eventType: SubscriptionResponseEventType;

		/**
		 * The unique ID of the subscription.
		 * Required
		 */
		id: string;

		/** The internal name of the property being monitored for changes. Only applies when `eventType` is `propertyChange`. */
		propertyName?: string | null;

		/** When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#). */
		updatedAt?: Date | null;
	}

	/** Complete details for an event subscription. */
	export interface SubscriptionResponseFormProperties {

		/**
		 * Determines if the subscription is active or paused.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
		 * Required
		 */
		eventType: FormControl<SubscriptionResponseEventType | null | undefined>,

		/**
		 * The unique ID of the subscription.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The internal name of the property being monitored for changes. Only applies when `eventType` is `propertyChange`. */
		propertyName: FormControl<string | null | undefined>,

		/** When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#). */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSubscriptionResponseFormGroup() {
		return new FormGroup<SubscriptionResponseFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<SubscriptionResponseEventType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			propertyName: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SubscriptionResponseEventType { 'contact.propertyChange' = 0, 'company.propertyChange' = 1, 'deal.propertyChange' = 2, 'ticket.propertyChange' = 3, 'product.propertyChange' = 4, 'line_item.propertyChange' = 5, 'contact.creation' = 6, 'contact.deletion' = 7, 'contact.privacyDeletion' = 8, 'company.creation' = 9, 'company.deletion' = 10, 'deal.creation' = 11, 'deal.deletion' = 12, 'ticket.creation' = 13, 'ticket.deletion' = 14, 'product.creation' = 15, 'product.deletion' = 16, 'line_item.creation' = 17, 'line_item.deletion' = 18, 'conversation.creation' = 19, 'conversation.deletion' = 20, 'conversation.newMessage' = 21, 'conversation.privacyDeletion' = 22, 'conversation.propertyChange' = 23, 'contact.merge' = 24, 'company.merge' = 25, 'deal.merge' = 26, 'ticket.merge' = 27, 'product.merge' = 28, 'line_item.merge' = 29, 'contact.restore' = 30, 'company.restore' = 31, 'deal.restore' = 32, 'ticket.restore' = 33, 'product.restore' = 34, 'line_item.restore' = 35, 'contact.associationChange' = 36, 'company.associationChange' = 37, 'deal.associationChange' = 38, 'ticket.associationChange' = 39, 'line_item.associationChange' = 40 }

	export enum BatchResponseSubscriptionResponseStatus { PENDING = 0, PROCESSING = 1, CANCELED = 2, COMPLETE = 3 }

	export interface BatchResponseSubscriptionResponseWithErrors {

		/** Required */
		completedAt: Date;
		errors?: Array<StandardError>;
		links?: {[id: string]: string };
		numErrors?: number | null;
		requestedAt?: Date | null;

		/** Required */
		results: Array<SubscriptionResponse>;

		/** Required */
		startedAt: Date;

		/** Required */
		status: BatchResponseSubscriptionResponseStatus;
	}
	export interface BatchResponseSubscriptionResponseWithErrorsFormProperties {

		/** Required */
		completedAt: FormControl<Date | null | undefined>,
		links: FormControl<{[id: string]: string } | null | undefined>,
		numErrors: FormControl<number | null | undefined>,
		requestedAt: FormControl<Date | null | undefined>,

		/** Required */
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<BatchResponseSubscriptionResponseStatus | null | undefined>,
	}
	export function CreateBatchResponseSubscriptionResponseWithErrorsFormGroup() {
		return new FormGroup<BatchResponseSubscriptionResponseWithErrorsFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			numErrors: new FormControl<number | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BatchResponseSubscriptionResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StandardError {

		/** Required */
		category: string;

		/** Required */
		context: {[id: string]: Array<string> };

		/** Required */
		errors: Array<ErrorDetail>;
		id?: string | null;

		/** Required */
		links: {[id: string]: string };

		/** Required */
		message: string;

		/** Required */
		status: string;
		subCategory?: string | null;
	}
	export interface StandardErrorFormProperties {

		/** Required */
		category: FormControl<string | null | undefined>,

		/** Required */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateStandardErrorFormGroup() {
		return new FormGroup<StandardErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** New or updated webhook settings for an app. */
	export interface SettingsChangeRequest {

		/**
		 * A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
		 * Required
		 */
		targetUrl: string;

		/**
		 * Configuration details for webhook throttling.
		 * Required
		 */
		throttling: ThrottlingSettings;
	}

	/** New or updated webhook settings for an app. */
	export interface SettingsChangeRequestFormProperties {

		/**
		 * A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
		 * Required
		 */
		targetUrl: FormControl<string | null | undefined>,
	}
	export function CreateSettingsChangeRequestFormGroup() {
		return new FormGroup<SettingsChangeRequestFormProperties>({
			targetUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration details for webhook throttling. */
	export interface ThrottlingSettings {

		/**
		 * The maximum number of HTTP requests HubSpot will attempt to make to your app in a given time frame determined by `period`.
		 * Required
		 */
		maxConcurrentRequests: number;

		/**
		 * Time scale for this setting. Can be either `SECONDLY` (per second) or `ROLLING_MINUTE` (per minute).
		 * Required
		 */
		period: ThrottlingSettingsPeriod;
	}

	/** Configuration details for webhook throttling. */
	export interface ThrottlingSettingsFormProperties {

		/**
		 * The maximum number of HTTP requests HubSpot will attempt to make to your app in a given time frame determined by `period`.
		 * Required
		 */
		maxConcurrentRequests: FormControl<number | null | undefined>,

		/**
		 * Time scale for this setting. Can be either `SECONDLY` (per second) or `ROLLING_MINUTE` (per minute).
		 * Required
		 */
		period: FormControl<ThrottlingSettingsPeriod | null | undefined>,
	}
	export function CreateThrottlingSettingsFormGroup() {
		return new FormGroup<ThrottlingSettingsFormProperties>({
			maxConcurrentRequests: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<ThrottlingSettingsPeriod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ThrottlingSettingsPeriod { SECONDLY = 0, ROLLING_MINUTE = 1 }


	/** Webhook settings for an app. */
	export interface SettingsResponse {

		/**
		 * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
		 * Required
		 */
		createdAt: Date;

		/**
		 * A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
		 * Required
		 */
		targetUrl: string;

		/**
		 * Configuration details for webhook throttling.
		 * Required
		 */
		throttling: ThrottlingSettings;

		/** When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#). */
		updatedAt?: Date | null;
	}

	/** Webhook settings for an app. */
	export interface SettingsResponseFormProperties {

		/**
		 * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
		 * Required
		 */
		targetUrl: FormControl<string | null | undefined>,

		/** When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#). */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSettingsResponseFormGroup() {
		return new FormGroup<SettingsResponseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			targetUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** New webhook settings for an app. */
	export interface SubscriptionCreateRequest {

		/** Determines if the subscription is active or paused. Defaults to false. */
		active?: boolean | null;

		/**
		 * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
		 * Required
		 */
		eventType: SubscriptionResponseEventType;

		/** The internal name of the property to monitor for changes. Only applies when `eventType` is `propertyChange`. */
		propertyName?: string | null;
	}

	/** New webhook settings for an app. */
	export interface SubscriptionCreateRequestFormProperties {

		/** Determines if the subscription is active or paused. Defaults to false. */
		active: FormControl<boolean | null | undefined>,

		/**
		 * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
		 * Required
		 */
		eventType: FormControl<SubscriptionResponseEventType | null | undefined>,

		/** The internal name of the property to monitor for changes. Only applies when `eventType` is `propertyChange`. */
		propertyName: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionCreateRequestFormGroup() {
		return new FormGroup<SubscriptionCreateRequestFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			eventType: new FormControl<SubscriptionResponseEventType | null | undefined>(undefined, [Validators.required]),
			propertyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of event subscriptions for your app */
	export interface SubscriptionListResponse {

		/**
		 * List of event subscriptions for your app
		 * Required
		 */
		results: Array<SubscriptionResponse>;
	}

	/** List of event subscriptions for your app */
	export interface SubscriptionListResponseFormProperties {
	}
	export function CreateSubscriptionListResponseFormGroup() {
		return new FormGroup<SubscriptionListResponseFormProperties>({
		});

	}


	/** Updated details for the subscription. */
	export interface SubscriptionPatchRequest {

		/** Determines if the subscription is active or paused. */
		active?: boolean | null;
	}

	/** Updated details for the subscription. */
	export interface SubscriptionPatchRequestFormProperties {

		/** Determines if the subscription is active or paused. */
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateSubscriptionPatchRequestFormGroup() {
		return new FormGroup<SubscriptionPatchRequestFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete webhooks/v3/{appId}/settings
		 * @return {void} 
		 */
		Delete_SlashwebhooksSlashv3SlashappIdSlashsettings_clear(appId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhooks/v3/' + appId + '/settings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get webhooks/v3/{appId}/settings
		 * @return {SettingsResponse} successful operation
		 */
		Get_SlashwebhooksSlashv3SlashappIdSlashsettings_getAll(appId: number): Observable<SettingsResponse> {
			return this.http.get<SettingsResponse>(this.baseUri + 'webhooks/v3/' + appId + '/settings', {});
		}

		/**
		 * Put webhooks/v3/{appId}/settings
		 * @return {SettingsResponse} successful operation
		 */
		Put_SlashwebhooksSlashv3SlashappIdSlashsettings_configure(appId: number, requestBody: SettingsChangeRequest): Observable<SettingsResponse> {
			return this.http.put<SettingsResponse>(this.baseUri + 'webhooks/v3/' + appId + '/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get webhooks/v3/{appId}/subscriptions
		 * @return {SubscriptionListResponse} successful operation
		 */
		Get_SlashwebhooksSlashv3SlashappIdSlashsubscriptions_getAll(appId: number): Observable<SubscriptionListResponse> {
			return this.http.get<SubscriptionListResponse>(this.baseUri + 'webhooks/v3/' + appId + '/subscriptions', {});
		}

		/**
		 * Post webhooks/v3/{appId}/subscriptions
		 * @return {void} 
		 */
		Post_SlashwebhooksSlashv3SlashappIdSlashsubscriptions_create(appId: number, requestBody: SubscriptionCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhooks/v3/' + appId + '/subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post webhooks/v3/{appId}/subscriptions/batch/update
		 * @return {BatchResponseSubscriptionResponse} successful operation
		 */
		Post_SlashwebhooksSlashv3SlashappIdSlashsubscriptionsSlashbatchSlashupdate_updateBatch(appId: number, requestBody: BatchInputSubscriptionBatchUpdateRequest): Observable<BatchResponseSubscriptionResponse> {
			return this.http.post<BatchResponseSubscriptionResponse>(this.baseUri + 'webhooks/v3/' + appId + '/subscriptions/batch/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete webhooks/v3/{appId}/subscriptions/{subscriptionId}
		 * @return {void} 
		 */
		Delete_SlashwebhooksSlashv3SlashappIdSlashsubscriptionsSlashsubscriptionId_archive(subscriptionId: number, appId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhooks/v3/' + appId + '/subscriptions/' + subscriptionId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get webhooks/v3/{appId}/subscriptions/{subscriptionId}
		 * @return {SubscriptionResponse} successful operation
		 */
		Get_SlashwebhooksSlashv3SlashappIdSlashsubscriptionsSlashsubscriptionId_getById(subscriptionId: number, appId: number): Observable<SubscriptionResponse> {
			return this.http.get<SubscriptionResponse>(this.baseUri + 'webhooks/v3/' + appId + '/subscriptions/' + subscriptionId, {});
		}

		/**
		 * Patch webhooks/v3/{appId}/subscriptions/{subscriptionId}
		 * @return {SubscriptionResponse} successful operation
		 */
		Patch_SlashwebhooksSlashv3SlashappIdSlashsubscriptionsSlashsubscriptionId_update(subscriptionId: number, appId: number, requestBody: SubscriptionPatchRequest): Observable<SubscriptionResponse> {
			return this.http.patch<SubscriptionResponse>(this.baseUri + 'webhooks/v3/' + appId + '/subscriptions/' + subscriptionId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

