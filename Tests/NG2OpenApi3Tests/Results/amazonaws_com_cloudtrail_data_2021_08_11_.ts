import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PutAuditEventsResponse {

		/** Required */
		failed: Array<ResultErrorEntry>;

		/** Required */
		successful: Array<AuditEventResultEntry>;
	}
	export interface PutAuditEventsResponseFormProperties {
	}
	export function CreatePutAuditEventsResponseFormGroup() {
		return new FormGroup<PutAuditEventsResponseFormProperties>({
		});

	}


	/** Includes the error code and error message for events that could not be ingested by CloudTrail. */
	export interface ResultErrorEntry {

		/** Required */
		errorCode: string;

		/** Required */
		errorMessage: string;

		/** Required */
		id: string;
	}

	/** Includes the error code and error message for events that could not be ingested by CloudTrail. */
	export interface ResultErrorEntryFormProperties {

		/** Required */
		errorCode: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResultErrorEntryFormGroup() {
		return new FormGroup<ResultErrorEntryFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response that includes successful and failed event results. */
	export interface AuditEventResultEntry {

		/** Required */
		eventID: string;

		/** Required */
		id: string;
	}

	/** A response that includes successful and failed event results. */
	export interface AuditEventResultEntryFormProperties {

		/** Required */
		eventID: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAuditEventResultEntryFormGroup() {
		return new FormGroup<AuditEventResultEntryFormProperties>({
			eventID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An event from a source outside of Amazon Web Services that you want CloudTrail to log. */
	export interface AuditEvent {

		/** Required */
		eventData: string;
		eventDataChecksum?: string;

		/** Required */
		id: string;
	}

	/** An event from a source outside of Amazon Web Services that you want CloudTrail to log. */
	export interface AuditEventFormProperties {

		/** Required */
		eventData: FormControl<string | null | undefined>,
		eventDataChecksum: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAuditEventFormGroup() {
		return new FormGroup<AuditEventFormProperties>({
			eventData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventDataChecksum: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChannelInsufficientPermission {
	}
	export interface ChannelInsufficientPermissionFormProperties {
	}
	export function CreateChannelInsufficientPermissionFormGroup() {
		return new FormGroup<ChannelInsufficientPermissionFormProperties>({
		});

	}

	export interface ChannelNotFound {
	}
	export interface ChannelNotFoundFormProperties {
	}
	export function CreateChannelNotFoundFormGroup() {
		return new FormGroup<ChannelNotFoundFormProperties>({
		});

	}

	export interface InvalidChannelARN {
	}
	export interface InvalidChannelARNFormProperties {
	}
	export function CreateInvalidChannelARNFormGroup() {
		return new FormGroup<InvalidChannelARNFormProperties>({
		});

	}

	export interface ChannelUnsupportedSchema {
	}
	export interface ChannelUnsupportedSchemaFormProperties {
	}
	export function CreateChannelUnsupportedSchemaFormGroup() {
		return new FormGroup<ChannelUnsupportedSchemaFormProperties>({
		});

	}

	export interface DuplicatedAuditEventId {
	}
	export interface DuplicatedAuditEventIdFormProperties {
	}
	export function CreateDuplicatedAuditEventIdFormGroup() {
		return new FormGroup<DuplicatedAuditEventIdFormProperties>({
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface PutAuditEventsRequest {

		/** Required */
		auditEvents: Array<AuditEvent>;
	}
	export interface PutAuditEventsRequestFormProperties {
	}
	export function CreatePutAuditEventsRequestFormGroup() {
		return new FormGroup<PutAuditEventsRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.
		 * Post PutAuditEvents#channelArn
		 * @param {string} channelArn The ARN or ID (the ARN suffix) of a channel.
		 * @param {string} externalId A unique identifier that is conditionally required when the channel's resource policy includes an external ID. This value can be any string, such as a passphrase or account number.
		 *     Min length: 2    Max length: 1224
		 * @return {PutAuditEventsResponse} Success
		 */
		PutAuditEvents(channelArn: string, externalId: string | null | undefined, requestBody: PutAuditEventsPostBody): Observable<PutAuditEventsResponse> {
			return this.http.post<PutAuditEventsResponse>(this.baseUri + 'PutAuditEvents#channelArn?channelArn=' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '&externalId=' + (externalId == null ? '' : encodeURIComponent(externalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface PutAuditEventsPostBody {

		/**
		 * The JSON payload of events that you want to ingest. You can also point to the JSON event payload in a file.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		auditEvents: Array<AuditEvent>;
	}
	export interface PutAuditEventsPostBodyFormProperties {
	}
	export function CreatePutAuditEventsPostBodyFormGroup() {
		return new FormGroup<PutAuditEventsPostBodyFormProperties>({
		});

	}

}

