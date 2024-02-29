import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List global resources
		 * Get 
		 * @param {GetByHypermediaAndContent_typeHypermedia} hypermedia Disable Hypermedia
		 * @param {GetByHypermediaAndContent_typeContent_type} content_type Content Type
		 * @return {GetByHypermediaAndContent_typeReturn} Return Status OK and/or resource list
		 */
		GetByHypermediaAndContent_type(hypermedia: GetByHypermediaAndContent_typeHypermedia | null | undefined, content_type: GetByHypermediaAndContent_typeContent_type | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetByHypermediaAndContent_typeReturn> {
			return this.http.get<GetByHypermediaAndContent_typeReturn>(this.baseUri + '?hypermedia=' + hypermedia + '&content_type=' + content_type, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List global announcements
		 * Get announcements
		 * @return {void} Return Status OK and/or resource list
		 */
		AnnouncementsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'announcements', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List areacodes
		 * Get areacodes
		 * @return {void} OK
		 */
		AreacodesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'areacodes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List global billing detail
		 * Get billing
		 * @return {void} OK
		 */
		BillingGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'billing', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate a phone number by calling it once
		 * Get calls
		 * @param {number} validate Validate a phone number by calling it for one ring. Note; not 100% proof the number is in service.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CallsGetByValidate(validate: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calls?validate=' + validate, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create phone calls with or without announcements and scheduled hangups
		 * Post calls
		 * @param {CallsPostPostBody} requestBody Create a phone call and play announcement audio to the "from" party (a leg)
		 * @return {void} 
		 */
		CallsPost(requestBody: CallsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calls', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List charges
		 * Get charges
		 * @return {void} OK
		 */
		ChargesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'charges', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create charges for invoices
		 * Post charges
		 * @return {void} 
		 */
		ChargesPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'charges', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List contacts
		 * Get contacts
		 * @return {void} OK
		 */
		ContactsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'contacts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all customers or find your own account
		 * Get customers
		 * @return {void} 
		 */
		CustomersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'customers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents a customer
		 * Get customers/{account}
		 * @param {number} account Account ID of customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Customers_accountGetReturn} Found
		 */
		Customers_accountGet(account: number, headersHandler?: () => HttpHeaders): Observable<Customers_accountGetReturn> {
			return this.http.get<Customers_accountGetReturn>(this.baseUri + 'customers/' + account, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List of announcement audio files
		 * Get customers/{account}/announcements
		 * @param {number} account Account ID of customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Customers_accountAnnouncementsGetReturn} OK
		 */
		Customers_accountAnnouncementsGet(account: number, headersHandler?: () => HttpHeaders): Observable<Customers_accountAnnouncementsGetReturn> {
			return this.http.get<Customers_accountAnnouncementsGetReturn>(this.baseUri + 'customers/' + account + '/announcements', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an announcement audio file
		 * Delete customers/{account}/announcements/{announcement_id}
		 * @return {void} 
		 */
		Customers_accountAnnouncements_announcement_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'customers/{account}/announcements/{announcement_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents an announcement audio file
		 * Get customers/{account}/announcements/{announcement_id}
		 * @return {void} OK
		 */
		Customers_accountAnnouncements_announcement_idGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'customers/{account}/announcements/{announcement_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List global ongoing faxes
		 * Get faxes
		 * @return {void} OK
		 */
		FaxesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'faxes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Hosted VoIP domains
		 * Get hosted
		 * @return {void} OK
		 */
		HostedGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hosted', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the IP address from where your API request originated
		 * Get ip-address
		 * @return {void} OK
		 */
		Ip_addressGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ip-address', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List mobile accounts
		 * Get mobile
		 * @return {void} OK
		 */
		MobileGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mobile', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List available SureVoIP Ofcom number allocations for purchase
		 * Get numbers
		 * @return {void} OK
		 */
		NumbersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search available numbers by areacode
		 * You can search by area name, area code or filter using both.
		 * Get numbers/areacodes
		 * @return {NumbersAreacodesGetReturn} OK
		 */
		NumbersAreacodesGet(headersHandler?: () => HttpHeaders): Observable<NumbersAreacodesGetReturn> {
			return this.http.get<NumbersAreacodesGetReturn>(this.baseUri + 'numbers/areacodes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List SureVoIP Partner accounts
		 * Get partners
		 * @return {void} OK
		 */
		PartnersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'partners', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List ported numbers
		 * Get porting
		 * @return {void} OK
		 */
		PortingGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'porting', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all Service Status messages
		 * Get service-status
		 * @return {void} OK
		 */
		Service_statusGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'service-status', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all SIP accounts
		 * Get sip
		 * @return {void} OK
		 */
		SipGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sip', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List SMS
		 * Get sms
		 * @return {void} OK
		 */
		SmsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return your POSTed data for testing
		 * Post support/echo
		 * @return {void} OK
		 */
		SupportEchoPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'support/echo', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all account credit topups
		 * Get topups
		 * @return {void} OK
		 */
		TopupsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'topups', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum GetByHypermediaAndContent_typeHypermedia { yes = 'yes', no = 'no' }

	export enum GetByHypermediaAndContent_typeContent_type { 'application/json' = 'application/json', 'text/html' = 'text/html', 'text/xml' = 'text/xml', 'application/xml' = 'application/xml' }

	export interface GetByHypermediaAndContent_typeReturn {
		status?: GetByHypermediaAndContent_typeReturnStatus | null;
	}
	export interface GetByHypermediaAndContent_typeReturnFormProperties {
		status: FormControl<GetByHypermediaAndContent_typeReturnStatus | null | undefined>,
	}
	export function CreateGetByHypermediaAndContent_typeReturnFormGroup() {
		return new FormGroup<GetByHypermediaAndContent_typeReturnFormProperties>({
			status: new FormControl<GetByHypermediaAndContent_typeReturnStatus | null | undefined>(undefined),
		});

	}

	export enum GetByHypermediaAndContent_typeReturnStatus { OK = 'OK' }

	export interface CallsPostPostBody {

		/**
		 * is in seconds. Just take 120 secs away from the hangup_at time for a announcement to be played 2 mins before the end of the call. If provided announcement_id is required
		 */
		announcement_at?: string | null;

		/**
		 * is the announcement id (from https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}) to play for example “your call is about to end in 2 mins”. We only allow a wav file, but we may allow "words", which will use SureVoIP provided text to speech. If provided announcement_at is required
		 */
		announcement_id?: string | null;

		/**
		 * The caller ID to show the b leg (to).
		 * Required
		 */
		caller_id: string;

		/**
		 * The person making the call, i.e the a leg. This person must answer in order for the b leg to be rung
		 * Required
		 */
		from: string;

		/**
		 * the id of a thank you announcement or similar. You can manage these as you would with any RESTful resource at https://api.surevoip.co.uk/announcements and https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}. It will be played at the end of the call at hangup. If provided hangup_at is required.
		 */
		hangup_announcement_id?: string | null;

		/**
		 * length in seconds from when the call is *answered* to when the system hangs up. If "hangup_announcement_id" is present, this will be played at hangup
		 */
		hangup_at?: string | null;
		options?: CallsPostPostBodyOptions;

		/**
		 * The b leg of the call, i.e. the person you are calling
		 * Required
		 */
		to: string;
	}
	export interface CallsPostPostBodyFormProperties {

		/**
		 * is in seconds. Just take 120 secs away from the hangup_at time for a announcement to be played 2 mins before the end of the call. If provided announcement_id is required
		 */
		announcement_at: FormControl<string | null | undefined>,

		/**
		 * is the announcement id (from https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}) to play for example “your call is about to end in 2 mins”. We only allow a wav file, but we may allow "words", which will use SureVoIP provided text to speech. If provided announcement_at is required
		 */
		announcement_id: FormControl<string | null | undefined>,

		/**
		 * The caller ID to show the b leg (to).
		 * Required
		 */
		caller_id: FormControl<string | null | undefined>,

		/**
		 * The person making the call, i.e the a leg. This person must answer in order for the b leg to be rung
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * the id of a thank you announcement or similar. You can manage these as you would with any RESTful resource at https://api.surevoip.co.uk/announcements and https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}. It will be played at the end of the call at hangup. If provided hangup_at is required.
		 */
		hangup_announcement_id: FormControl<string | null | undefined>,

		/**
		 * length in seconds from when the call is *answered* to when the system hangs up. If "hangup_announcement_id" is present, this will be played at hangup
		 */
		hangup_at: FormControl<string | null | undefined>,

		/**
		 * The b leg of the call, i.e. the person you are calling
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCallsPostPostBodyFormGroup() {
		return new FormGroup<CallsPostPostBodyFormProperties>({
			announcement_at: new FormControl<string | null | undefined>(undefined),
			announcement_id: new FormControl<string | null | undefined>(undefined),
			caller_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hangup_announcement_id: new FormControl<string | null | undefined>(undefined),
			hangup_at: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CallsPostPostBodyOptions {

		/** Change the caller ID shown to the a leg (from) */
		a_leg_caller_id?: string | null;

		/**
		 * Do not ring the "to" number, only the from and show "caller_id"
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		a_leg_only?: number | null;

		/**
		 * The phone keypad number to press to hangup the call and not place the second leg of the call. Default 2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancel_key?: number | null;

		/**
		 * The phone keypad number to press in order to place the call to the b leg, i.e. press to confirm. Default 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_key?: number | null;
		CallsPostPostBodyOptionsPlay_audio?: Array<CallsPostPostBodyOptionsPlay_audio>;
	}
	export interface CallsPostPostBodyOptionsFormProperties {

		/** Change the caller ID shown to the a leg (from) */
		a_leg_caller_id: FormControl<string | null | undefined>,

		/**
		 * Do not ring the "to" number, only the from and show "caller_id"
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		a_leg_only: FormControl<number | null | undefined>,

		/**
		 * The phone keypad number to press to hangup the call and not place the second leg of the call. Default 2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancel_key: FormControl<number | null | undefined>,

		/**
		 * The phone keypad number to press in order to place the call to the b leg, i.e. press to confirm. Default 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_key: FormControl<number | null | undefined>,
	}
	export function CreateCallsPostPostBodyOptionsFormGroup() {
		return new FormGroup<CallsPostPostBodyOptionsFormProperties>({
			a_leg_caller_id: new FormControl<string | null | undefined>(undefined),
			a_leg_only: new FormControl<number | null | undefined>(undefined),
			cancel_key: new FormControl<number | null | undefined>(undefined),
			connect_key: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CallsPostPostBodyOptionsPlay_audio {

		/**
		 * Id of announcement audio file which will play to the a leg of the call, i.e. the person that must answer the call first. This plays one or more audio files you have uploaded. The use case being you want to play audio to let the a leg of the call know what the call is about. Imagine a call center agent needs to know that they are calling a customer. These audio files may play a customer account number to the agent for example.
		 * Have lots of audio files in this array to build up a message
		 */
		announcement_id?: string | null;
	}
	export interface CallsPostPostBodyOptionsPlay_audioFormProperties {

		/**
		 * Id of announcement audio file which will play to the a leg of the call, i.e. the person that must answer the call first. This plays one or more audio files you have uploaded. The use case being you want to play audio to let the a leg of the call know what the call is about. Imagine a call center agent needs to know that they are calling a customer. These audio files may play a customer account number to the agent for example.
		 * Have lots of audio files in this array to build up a message
		 */
		announcement_id: FormControl<string | null | undefined>,
	}
	export function CreateCallsPostPostBodyOptionsPlay_audioFormGroup() {
		return new FormGroup<CallsPostPostBodyOptionsPlay_audioFormProperties>({
			announcement_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Customers_accountGetReturn {
		address?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		balance?: number | null;
		city?: string | null;
		company_name?: string | null;
		company_website?: string | null;
		country?: string | null;
		creditlimit?: string | null;
		email?: string | null;
		fax?: string | null;
		firstname?: string | null;
		lastname?: string | null;
		phone?: string | null;
		postcode?: string | null;
		state?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		username?: number | null;
	}
	export interface Customers_accountGetReturnFormProperties {
		address: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		balance: FormControl<number | null | undefined>,
		city: FormControl<string | null | undefined>,
		company_name: FormControl<string | null | undefined>,
		company_website: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		creditlimit: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,
		lastname: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postcode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		username: FormControl<number | null | undefined>,
	}
	export function CreateCustomers_accountGetReturnFormGroup() {
		return new FormGroup<Customers_accountGetReturnFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			company_website: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			creditlimit: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Customers_accountAnnouncementsGetReturn {
		list?: Array<string>;
	}
	export interface Customers_accountAnnouncementsGetReturnFormProperties {
	}
	export function CreateCustomers_accountAnnouncementsGetReturnFormGroup() {
		return new FormGroup<Customers_accountAnnouncementsGetReturnFormProperties>({
		});

	}

	export interface NumbersAreacodesGetReturn {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** Required */
		name: string;
	}
	export interface NumbersAreacodesGetReturnFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNumbersAreacodesGetReturnFormGroup() {
		return new FormGroup<NumbersAreacodesGetReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

