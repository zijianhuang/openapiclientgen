import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Events. */
	export interface OBEvent1 {

		/**
		 * Resource-Update Event.
		 * Required
		 */
		'urn:uk:org:openbanking:events:resource-update': OBEventResourceUpdate1;
	}

	/** Events. */
	export interface OBEvent1FormProperties {
	}
	export function CreateOBEvent1FormGroup() {
		return new FormGroup<OBEvent1FormProperties>({
		});

	}


	/** Resource-Update Event. */
	export interface OBEventResourceUpdate1 {

		/**
		 * The resource-update event.
		 * Required
		 */
		subject: OBEventSubject1;
	}

	/** Resource-Update Event. */
	export interface OBEventResourceUpdate1FormProperties {
	}
	export function CreateOBEventResourceUpdate1FormGroup() {
		return new FormGroup<OBEventResourceUpdate1FormProperties>({
		});

	}


	/** The resource-update event. */
	export interface OBEventSubject1 {

		/**
		 * Resource Id for the updated resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		'http://openbanking.org.uk/rid': string;

		/**
		 * Resource links to other available versions of the resource.
		 * Required
		 * Minimum items: 1
		 */
		'http://openbanking.org.uk/rlk': Array<OBEventLink1>;

		/**
		 * Resource Type for the updated resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		'http://openbanking.org.uk/rty': string;

		/**
		 * Subject type for the updated resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		subject_type: string;
	}

	/** The resource-update event. */
	export interface OBEventSubject1FormProperties {

		/**
		 * Resource Id for the updated resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		'http://openbanking.org.uk/rid': FormControl<string | null | undefined>,

		/**
		 * Resource Type for the updated resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		'http://openbanking.org.uk/rty': FormControl<string | null | undefined>,

		/**
		 * Subject type for the updated resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		subject_type: FormControl<string | null | undefined>,
	}
	export function CreateOBEventSubject1FormGroup() {
		return new FormGroup<OBEventSubject1FormProperties>({
			'http://openbanking.org.uk/rid': new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			'http://openbanking.org.uk/rty': new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			subject_type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}


	/** Resource links to other available versions of the resource. */
	export interface OBEventLink1 {

		/**
		 * Resource link.
		 * Required
		 */
		link: string;

		/**
		 * Resource version.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		version: string;
	}

	/** Resource links to other available versions of the resource. */
	export interface OBEventLink1FormProperties {

		/**
		 * Resource link.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Resource version.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateOBEventLink1FormGroup() {
		return new FormGroup<OBEventLink1FormProperties>({
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
		});

	}


	/** The resource-update event. */
	export interface OBEventNotification1 {

		/**
		 * Audience.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		aud: string;

		/**
		 * Events.
		 * Required
		 */
		events: OBEvent1;

		/**
		 * Issued At.
		 * Required
		 * Minimum: 0
		 */
		iat: number;

		/**
		 * Issuer.
		 * Required
		 */
		iss: string;

		/**
		 * JWT ID.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		jti: string;

		/**
		 * Subject
		 * Required
		 */
		sub: string;

		/**
		 * Time of Event.
		 * Required
		 * Minimum: 0
		 */
		toe: number;

		/**
		 * Transaction Identifier.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		txn: string;
	}

	/** The resource-update event. */
	export interface OBEventNotification1FormProperties {

		/**
		 * Audience.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		aud: FormControl<string | null | undefined>,

		/**
		 * Issued At.
		 * Required
		 * Minimum: 0
		 */
		iat: FormControl<number | null | undefined>,

		/**
		 * Issuer.
		 * Required
		 */
		iss: FormControl<string | null | undefined>,

		/**
		 * JWT ID.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		jti: FormControl<string | null | undefined>,

		/**
		 * Subject
		 * Required
		 */
		sub: FormControl<string | null | undefined>,

		/**
		 * Time of Event.
		 * Required
		 * Minimum: 0
		 */
		toe: FormControl<number | null | undefined>,

		/**
		 * Transaction Identifier.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		txn: FormControl<string | null | undefined>,
	}
	export function CreateOBEventNotification1FormGroup() {
		return new FormGroup<OBEventNotification1FormProperties>({
			aud: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			iat: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			iss: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jti: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			toe: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			txn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

