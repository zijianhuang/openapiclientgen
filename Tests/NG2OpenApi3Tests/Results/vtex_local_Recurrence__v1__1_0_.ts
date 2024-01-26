import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddrecurrenceitemRequest {

		/** Required */
		frequency: Frequency;

		/** Required */
		quantity: number;

		/** Required */
		seller: string;

		/** Required */
		shippingAddressId: string;

		/** Required */
		sku: string;
	}
	export interface AddrecurrenceitemRequestFormProperties {

		/** Required */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		seller: FormControl<string | null | undefined>,

		/** Required */
		shippingAddressId: FormControl<string | null | undefined>,

		/** Required */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateAddrecurrenceitemRequestFormGroup() {
		return new FormGroup<AddrecurrenceitemRequestFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingAddressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Frequency {

		/** Required */
		interval: number;

		/** Required */
		periodicity: string;
	}
	export interface FrequencyFormProperties {

		/** Required */
		interval: FormControl<number | null | undefined>,

		/** Required */
		periodicity: FormControl<string | null | undefined>,
	}
	export function CreateFrequencyFormGroup() {
		return new FormGroup<FrequencyFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			periodicity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item {

		/** Required */
		frequency: Frequency;

		/** Required */
		quantity: number;

		/** Required */
		seller: string;

		/** Required */
		shippingAddressId: string;

		/** Required */
		sku: string;
	}
	export interface ItemFormProperties {

		/** Required */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		seller: FormControl<string | null | undefined>,

		/** Required */
		shippingAddressId: FormControl<string | null | undefined>,

		/** Required */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingAddressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReindexrecurrenceRequest {

		/** Required */
		frequency: Frequency;
	}
	export interface ReindexrecurrenceRequestFormProperties {
	}
	export function CreateReindexrecurrenceRequestFormGroup() {
		return new FormGroup<ReindexrecurrenceRequestFormProperties>({
		});

	}

	export interface UpdatepartialrecurrenceRequest {

		/** Required */
		deliveryDay: number;

		/** Required */
		deliveryWeekday: string;

		/** Required */
		status: string;
	}
	export interface UpdatepartialrecurrenceRequestFormProperties {

		/** Required */
		deliveryDay: FormControl<number | null | undefined>,

		/** Required */
		deliveryWeekday: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdatepartialrecurrenceRequestFormGroup() {
		return new FormGroup<UpdatepartialrecurrenceRequestFormProperties>({
			deliveryDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			deliveryWeekday: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdaterecurrenceRequest {

		/** Required */
		deliveryDay: number;

		/** Required */
		deliveryWeekday: string;

		/** Required */
		email: string;

		/** Required */
		items: Array<Item>;

		/** Required */
		paymentAccountId: string;
	}
	export interface UpdaterecurrenceRequestFormProperties {

		/** Required */
		deliveryDay: FormControl<number | null | undefined>,

		/** Required */
		deliveryWeekday: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		paymentAccountId: FormControl<string | null | undefined>,
	}
	export function CreateUpdaterecurrenceRequestFormGroup() {
		return new FormGroup<UpdaterecurrenceRequestFormProperties>({
			deliveryDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			deliveryWeekday: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdaterecurrencesettingsRequest {

		/** Required */
		defaultSLA: string;

		/** Required */
		salesChannel: string;
	}
	export interface UpdaterecurrencesettingsRequestFormProperties {

		/** Required */
		defaultSLA: FormControl<string | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,
	}
	export function CreateUpdaterecurrencesettingsRequestFormGroup() {
		return new FormGroup<UpdaterecurrencesettingsRequestFormProperties>({
			defaultSLA: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Subscriptions
		 * Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.
		 * Get subscriptions
		 * @param {string} email If you wish to list tasks by email, insert the desired user's email.
		 * @param {string} cycleStatus If you wish to list tasks by Subscriptions with failures on the last execution cycle, insert the desired cycleStatus.
		 * @return {void} 
		 */
		GetRecurrencebyemail(email: string | null | undefined, cycleStatus: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions?email=' + (email == null ? '' : encodeURIComponent(email)) + '&cycleStatus=' + (cycleStatus == null ? '' : encodeURIComponent(cycleStatus)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Subscription
		 * Updates details of a given Subscription (formerly recurrence).
		 * Put subscriptions
		 * @return {void} 
		 */
		Updaterecurrence(requestBody: UpdaterecurrenceRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self Subscription
		 * Lists details of your self Subscription (formerly Recurrence).
		 * Get subscriptions/me
		 * @return {void} 
		 */
		Getselfrecurrence(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/me', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscription settings
		 * Retrieves your store's Subscriptions' (formerly recurrence) settings.
		 * Get subscriptions/settings
		 * @return {void} 
		 */
		Getrecurrencesettings(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/settings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Subscription settings
		 * Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.
		 * Put subscriptions/settings
		 * @return {void} 
		 */
		Updaterecurrencesettings(requestBody: UpdaterecurrencesettingsRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscription by recurrenceId
		 * Retrieves a given Subscription (formerly recurrence) by recurrenceId.
		 * Get subscriptions/{recurrenceId}
		 * @return {void} 
		 */
		GetRecurrencebyrecurrenceId(recurrenceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (recurrenceId == null ? '' : encodeURIComponent(recurrenceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update partial Subscription
		 * Updates partial information of a given subscription (formerly Recurrence).
		 * Patch subscriptions/{recurrenceId}
		 * @return {void} 
		 */
		Updatepartialrecurrence(recurrenceId: string, requestBody: UpdatepartialrecurrenceRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (recurrenceId == null ? '' : encodeURIComponent(recurrenceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscription addresses
		 * Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.
		 * Get subscriptions/{recurrenceId}/addresses
		 * @return {void} 
		 */
		Getrecurrenceaddresses(recurrenceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (recurrenceId == null ? '' : encodeURIComponent(recurrenceId)) + '/addresses', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add Subscription item
		 * Adds an item to a Subscription (formerly Recurrence).
		 * Post subscriptions/{recurrenceId}/items
		 * @return {void} 
		 */
		Addrecurrenceitem(recurrenceId: string, requestBody: Array<AddrecurrenceitemRequest>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (recurrenceId == null ? '' : encodeURIComponent(recurrenceId)) + '/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reindex Subscription
		 * Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.
		 * Patch subscriptions/{recurrenceId}/reindex
		 * @return {void} 
		 */
		Reindexrecurrence(recurrenceId: string, requestBody: Array<ReindexrecurrenceRequest>): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (recurrenceId == null ? '' : encodeURIComponent(recurrenceId)) + '/reindex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get payment accounts
		 * Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.
		 * Get subscriptions/{recurrenceid}/accounts
		 * @return {void} 
		 */
		Getpaymentaccounts(recurrenceid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (recurrenceid == null ? '' : encodeURIComponent(recurrenceid)) + '/accounts', { observe: 'response', responseType: 'text' });
		}
	}

}

