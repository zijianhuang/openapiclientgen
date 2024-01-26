import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface EventRecord {

		/** Required */
		agent: string;

		/** Required */
		browsertype: string;

		/** Required */
		channel: string;

		/** Required */
		click: string;

		/** Required */
		clicks: number;

		/** Required */
		code: string;

		/** Required */
		company: string;

		/** Required */
		contact: string;

		/** Required */
		cost: number;

		/** Required */
		costcurrency: string;

		/** Required */
		currency: string;

		/** Required */
		deal: string;

		/** Required */
		'deal name': string;

		/** Required */
		delay: number;

		/** Required */
		denyreason: string;

		/** Required */
		device: string;

		/** Required */
		devicetype: string;

		/** Required */
		email: string;

		/** Required */
		emailaddrsha256: string;

		/** Required */
		flow: string;

		/** Required */
		flowstep: string;

		/** Required */
		flowtype: string;

		/** Required */
		impression: string;

		/** Required */
		ip: string;

		/** Required */
		latitude: string;

		/** Required */
		longitude: string;

		/** Required */
		optin: string;

		/** Required */
		os: string;

		/** Required */
		resolution: string;

		/** Required */
		revenue: number;

		/** Required */
		role: string;

		/** Required */
		session: string;

		/** Required */
		site: string;

		/** Required */
		'site name': string;

		/** Required */
		timestamp: Date;

		/** Required */
		total: number;

		/** Required */
		user: string;

		/** Required */
		userlanguage: string;
	}
	export interface EventRecordFormProperties {

		/** Required */
		agent: FormControl<string | null | undefined>,

		/** Required */
		browsertype: FormControl<string | null | undefined>,

		/** Required */
		channel: FormControl<string | null | undefined>,

		/** Required */
		click: FormControl<string | null | undefined>,

		/** Required */
		clicks: FormControl<number | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		company: FormControl<string | null | undefined>,

		/** Required */
		contact: FormControl<string | null | undefined>,

		/** Required */
		cost: FormControl<number | null | undefined>,

		/** Required */
		costcurrency: FormControl<string | null | undefined>,

		/** Required */
		currency: FormControl<string | null | undefined>,

		/** Required */
		deal: FormControl<string | null | undefined>,

		/** Required */
		'deal name': FormControl<string | null | undefined>,

		/** Required */
		delay: FormControl<number | null | undefined>,

		/** Required */
		denyreason: FormControl<string | null | undefined>,

		/** Required */
		device: FormControl<string | null | undefined>,

		/** Required */
		devicetype: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		emailaddrsha256: FormControl<string | null | undefined>,

		/** Required */
		flow: FormControl<string | null | undefined>,

		/** Required */
		flowstep: FormControl<string | null | undefined>,

		/** Required */
		flowtype: FormControl<string | null | undefined>,

		/** Required */
		impression: FormControl<string | null | undefined>,

		/** Required */
		ip: FormControl<string | null | undefined>,

		/** Required */
		latitude: FormControl<string | null | undefined>,

		/** Required */
		longitude: FormControl<string | null | undefined>,

		/** Required */
		optin: FormControl<string | null | undefined>,

		/** Required */
		os: FormControl<string | null | undefined>,

		/** Required */
		resolution: FormControl<string | null | undefined>,

		/** Required */
		revenue: FormControl<number | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,

		/** Required */
		session: FormControl<string | null | undefined>,

		/** Required */
		site: FormControl<string | null | undefined>,

		/** Required */
		'site name': FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,

		/** Required */
		user: FormControl<string | null | undefined>,

		/** Required */
		userlanguage: FormControl<string | null | undefined>,
	}
	export function CreateEventRecordFormGroup() {
		return new FormGroup<EventRecordFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			browsertype: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			click: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clicks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			company: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contact: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			costcurrency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'deal name': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			delay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			denyreason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			device: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			devicetype: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emailaddrsha256: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flowstep: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flowtype: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			impression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			optin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revenue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			session: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'site name': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userlanguage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * get events for analytics
		 * By passing in the company, site or deal Id a set of user interaction event records is returned. For pagination of a large result set use queryexecutionid and nexttoken instead.
		 * Get events
		 * @param {string} company pass an optional company Id
		 * @param {string} site pass an optional site Id
		 * @param {string} deal pass an optional deal Id
		 * @param {GetEventsType} type type of records to return
		 * @param {string} nexttoken next token to start returning records from
		 * @param {string} queryexecutionid id of execution to get more records based on next token
		 * @return {Array<EventRecord>} analytics results matching criteria
		 */
		GetEvents(company: string | null | undefined, site: string | null | undefined, deal: string | null | undefined, type: GetEventsType | null | undefined, nexttoken: string | null | undefined, queryexecutionid: string | null | undefined): Observable<Array<EventRecord>> {
			return this.http.get<Array<EventRecord>>(this.baseUri + 'events?company=' + (company == null ? '' : encodeURIComponent(company)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&deal=' + (deal == null ? '' : encodeURIComponent(deal)) + '&type=' + type + '&nexttoken=' + (nexttoken == null ? '' : encodeURIComponent(nexttoken)) + '&queryexecutionid=' + (queryexecutionid == null ? '' : encodeURIComponent(queryexecutionid)), {});
		}
	}

	export enum GetEventsType { all = 0, clicks = 1, contacts = 2 }

}

