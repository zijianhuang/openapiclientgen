import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Carrier {
		country?: string | null;
		name?: string | null;
		network_code?: string | null;
		network_type?: CarrierNetwork_type | null;
	}
	export interface CarrierFormProperties {
		country: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		network_code: FormControl<string | null | undefined>,
		network_type: FormControl<CarrierNetwork_type | null | undefined>,
	}
	export function CreateCarrierFormGroup() {
		return new FormGroup<CarrierFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network_code: new FormControl<string | null | undefined>(undefined),
			network_type: new FormControl<CarrierNetwork_type | null | undefined>(undefined),
		});

	}

	export enum CarrierNetwork_type { fixed_line = 0, fixed_line_or_mobile = 1, mobile = 2, pager = 3, personal_number = 4, premium_rate = 5, shared_cost = 6, toll_free = 7, uan = 8, unknown = 9, voicemail = 10, voip = 11 }

	export interface Mnp {
		country?: string | null;
		international_formatted?: string | null;
		isPorted?: boolean | null;
		mccmnc?: string | null;
		national_format?: string | null;
		network?: string | null;
		number?: string | null;
	}
	export interface MnpFormProperties {
		country: FormControl<string | null | undefined>,
		international_formatted: FormControl<string | null | undefined>,
		isPorted: FormControl<boolean | null | undefined>,
		mccmnc: FormControl<string | null | undefined>,
		national_format: FormControl<string | null | undefined>,
		network: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateMnpFormGroup() {
		return new FormGroup<MnpFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			international_formatted: new FormControl<string | null | undefined>(undefined),
			isPorted: new FormControl<boolean | null | undefined>(undefined),
			mccmnc: new FormControl<string | null | undefined>(undefined),
			national_format: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Roaming {
		roaming_country_code?: string | null;
		roaming_network_code?: string | null;
		roaming_network_name?: string | null;
		status?: RoamingStatus | null;
	}
	export interface RoamingFormProperties {
		roaming_country_code: FormControl<string | null | undefined>,
		roaming_network_code: FormControl<string | null | undefined>,
		roaming_network_name: FormControl<string | null | undefined>,
		status: FormControl<RoamingStatus | null | undefined>,
	}
	export function CreateRoamingFormGroup() {
		return new FormGroup<RoamingFormProperties>({
			roaming_country_code: new FormControl<string | null | undefined>(undefined),
			roaming_network_code: new FormControl<string | null | undefined>(undefined),
			roaming_network_name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RoamingStatus | null | undefined>(undefined),
		});

	}

	export enum RoamingStatus { unknown = 0, roaming = 1, not_roaming = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get analytics
		 * @param {string} start Start date of the statistics in the format YYYY-MM-DD. By default, the date of 30 days ago is set.
		 * @param {string} end End date of the statistics in the format YYYY-MM-DD. By default, the current day.
		 * @param {string} label Shows only data of a specific label.
		 * @param {string} subaccounts Receive the data only for the main account, all your (sub-)accounts or only for specific subaccounts.
		 * @param {AnalyticsGroup_by} group_by Defines the grouping of the data.
		 * @return {AnalyticsReturn} OK
		 */
		Analytics(start: string | null | undefined, end: string | null | undefined, label: string | null | undefined, subaccounts: string | null | undefined, group_by: AnalyticsGroup_by | null | undefined): Observable<AnalyticsReturn> {
			return this.http.get<AnalyticsReturn>(this.baseUri + 'analytics?start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&label=' + (label == null ? '' : encodeURIComponent(label)) + '&subaccounts=' + (subaccounts == null ? '' : encodeURIComponent(subaccounts)) + '&group_by=' + group_by, {});
		}

		/**
		 * Get balance
		 * @return {number} OK
		 */
		Balance(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'balance', {});
		}

		/**
		 * Get contacts
		 * @param {ContactsGetAction} action Determines the action to execute.
		 * @param {ContactsGetJson} json Defines whether to return the response as JSON or CSV separated by semicolon.
		 * @return {string} OK (CSV)
		 */
		ContactsGet(action: ContactsGetAction, json: ContactsGetJson | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'contacts?action=' + action + '&json=' + json, { responseType: 'text' });
		}

		/**
		 * Post contacts
		 * @param {ContactsPOSTAction} action Determines the action to execute.
		 * @param {ContactsPOSTJson} json Defines whether to return the response as JSON or CSV separated by semicolon.
		 * @param {string} id The contact ID for editing/deletion.
		 * @param {string} nick The contacts name.
		 * @param {string} empfaenger The contacts phone number.
		 * @param {string} email The contacts email address.
		 * @return {string} OK
		 */
		ContactsPOST(action: ContactsPOSTAction, json: ContactsPOSTJson | null | undefined, id: string | null | undefined, nick: string | null | undefined, empfaenger: string | null | undefined, email: string | null | undefined): Observable<string> {
			return this.http.post(this.baseUri + 'contacts?action=' + action + '&json=' + json + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&nick=' + (nick == null ? '' : encodeURIComponent(nick)) + '&empfaenger=' + (empfaenger == null ? '' : encodeURIComponent(empfaenger)) + '&email=' + (email == null ? '' : encodeURIComponent(email)), null, { responseType: 'text' });
		}

		/**
		 * Get hooks
		 * @param {ContactsGetAction} action Determines the action to execute.
		 * @return {HooksGetReturn} OK
		 */
		HooksGet(action: ContactsGetAction): Observable<HooksGetReturn> {
			return this.http.get<HooksGetReturn>(this.baseUri + 'hooks?action=' + action, {});
		}

		/**
		 * Post hooks
		 * @param {HooksPOSTAction} action Determines the action to execute.
		 * @param {number} id The Webhook ID you wish to unsubscribe.
		 * @param {string} target_url Target URL of your Webhook.
		 * @param {HooksPOSTEvent_type} event_type Type of event for which you would like to receive a webhook.
		 * @param {HooksPOSTRequest_method} request_method Request method in which you want to receive the webhook.
		 * @return {HooksPOSTReturn} Hook subscribed
		 */
		HooksPOST(action: HooksPOSTAction, id: number | null | undefined, target_url: string | null | undefined, event_type: HooksPOSTEvent_type | null | undefined, request_method: HooksPOSTRequest_method | null | undefined): Observable<HooksPOSTReturn> {
			return this.http.post<HooksPOSTReturn>(this.baseUri + 'hooks?action=' + action + '&id=' + id + '&target_url=' + (target_url == null ? '' : encodeURIComponent(target_url)) + '&event_type=' + event_type + '&request_method=' + request_method, null, {});
		}

		/**
		 * Post lookup
		 * @param {string} type Allowed values are "cnam", "format", "hlr" and "mnp".
		 * @param {Array<string>} number The phone number to look up.
		 * @param {string} json Determines whether the response shall be returned in JSON format. Does not work with type "format".
		 * @return {void} OK
		 */
		Lookup(type: string, number: Array<string>, json: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup?type=' + (type == null ? '' : encodeURIComponent(type)) + '&' + number.map(z => `number=${encodeURIComponent(z)}`).join('&') + '&json=' + (json == null ? '' : encodeURIComponent(json)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post lookup/cnam
		 * @param {Array<string>} number The phone number to look up.
		 * @return {void} OK
		 */
		LookupCnam(number: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/cnam?' + number.map(z => `number=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post lookup/format
		 * @param {Array<string>} number The phone number to look up.
		 * @return {void} OK
		 */
		LookupFormat(number: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/format?' + number.map(z => `number=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post lookup/hlr
		 * @param {Array<string>} number The phone number to look up.
		 * @return {void} OK
		 */
		LookupHlr(number: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/hlr?' + number.map(z => `number=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post lookup/mnp
		 * @param {Array<string>} number The phone number to look up.
		 * @param {string} json Determines whether the response shall be returned in JSON format.
		 * @return {void} OK
		 */
		LookupMnp(number: Array<string>, json: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lookup/mnp?' + number.map(z => `number=${encodeURIComponent(z)}`).join('&') + '&json=' + (json == null ? '' : encodeURIComponent(json)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pricing
		 * @param {string} country The countries ISO code to get pricings for. Allowed values are de, fr, at. Omit to show pricings for all channels.
		 * @param {string} format Determines the response format. Allowed values are json and csv. The default value is json.
		 * @return {void} OK
		 */
		Pricing(country: string | null | undefined, format: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pricing?country=' + (country == null ? '' : encodeURIComponent(country)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post sms
		 * @param {string} text The actual text message to send.
		 * @param {string} to The recipient number or group name.
		 * @param {string} from Set a custom sender name.
		 * @param {string} foreign_id Identifier to return in callbacks.
		 * @param {string} label A custom label.
		 * @param {string} udh A custom User Data Header.
		 * @param {string} delay Date/Time for delayed dispatch.
		 * @param {SmsDebug} debug Disable message sending.
		 * @param {SmsNo_reload} no_reload Enable sending of duplicated messages within 180 seconds.
		 * @param {SmsUnicode} unicode Force unicode encoding. Reduces sms length to 70 chars.
		 * @param {SmsFlash} flash Send as flash.
		 * @param {SmsUtf8} utf8 Force UTF8 encoding.
		 * @param {SmsDetails} details Attach message details to response.
		 * @param {SmsReturn_msg_id} return_msg_id Attach message ID to second row in a text response.
		 * @param {SmsJson} json Return a detailed JSON response.
		 * @param {SmsPerformance_tracking} performance_tracking Enable performance tracking for found URLs.
		 * @return {SmsReturn} OK
		 */
		Sms(text: string, to: string, from: string | null | undefined, foreign_id: string | null | undefined, label: string | null | undefined, udh: string | null | undefined, delay: string | null | undefined, debug: SmsDebug | null | undefined, no_reload: SmsNo_reload | null | undefined, unicode: SmsUnicode | null | undefined, flash: SmsFlash | null | undefined, utf8: SmsUtf8 | null | undefined, details: SmsDetails | null | undefined, return_msg_id: SmsReturn_msg_id | null | undefined, json: SmsJson | null | undefined, performance_tracking: SmsPerformance_tracking | null | undefined): Observable<SmsReturn> {
			return this.http.post<SmsReturn>(this.baseUri + 'sms?text=' + (text == null ? '' : encodeURIComponent(text)) + '&to=' + (to == null ? '' : encodeURIComponent(to)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&foreign_id=' + (foreign_id == null ? '' : encodeURIComponent(foreign_id)) + '&label=' + (label == null ? '' : encodeURIComponent(label)) + '&udh=' + (udh == null ? '' : encodeURIComponent(udh)) + '&delay=' + (delay == null ? '' : encodeURIComponent(delay)) + '&debug=' + debug + '&no_reload=' + no_reload + '&unicode=' + unicode + '&flash=' + flash + '&utf8=' + utf8 + '&details=' + details + '&return_msg_id=' + return_msg_id + '&json=' + json + '&performance_tracking=' + performance_tracking, null, {});
		}

		/**
		 * Get status
		 * @param {string} msg_id The ID from the SMS.
		 * @return {string} OK
		 */
		Status(msg_id: string): Observable<string> {
			return this.http.get(this.baseUri + 'status?msg_id=' + (msg_id == null ? '' : encodeURIComponent(msg_id)), { responseType: 'text' });
		}

		/**
		 * Post validate_for_voice
		 * @param {string} number Determines the recipient. Can only be a number, not a contact from your address book.
		 * @param {string} callback The callback URL which gets queried right after validation.
		 * @return {ValidateForVoiceReturn} OK
		 */
		ValidateForVoice(number: string, callback: string | null | undefined): Observable<ValidateForVoiceReturn> {
			return this.http.post<ValidateForVoiceReturn>(this.baseUri + 'validate_for_voice?number=' + (number == null ? '' : encodeURIComponent(number)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), null, {});
		}

		/**
		 * Post voice
		 * @param {string} to Determines the receiver. Must be a valid phone number or contact from the address book.
		 * @param {string} text The text to convert to a voice message. Accepts valid XML too.
		 * @param {VoiceXml} xml Decides whether the parameter "text" is plain text or XML. The default value is 0.
		 * @param {string} from Sets the sender. Must be a verified sender. Use an inbound number of yours or one of ours.
		 * @return {string} OK
		 */
		Voice(to: string, text: string, xml: VoiceXml | null | undefined, from: string | null | undefined): Observable<string> {
			return this.http.post(this.baseUri + 'voice?to=' + (to == null ? '' : encodeURIComponent(to)) + '&text=' + (text == null ? '' : encodeURIComponent(text)) + '&xml=' + xml + '&from=' + (from == null ? '' : encodeURIComponent(from)), null, { responseType: 'text' });
		}
	}

	export enum AnalyticsGroup_by { date = 0, label = 1, subaccount = 2, country = 3 }

	export interface AnalyticsReturn {
		date?: string | null;
		direct?: number | null;
		economy?: number | null;
		hlr?: number | null;
		inbound?: number | null;
		mnp?: number | null;
		usage_eur?: number | null;
		voice?: number | null;
	}
	export interface AnalyticsReturnFormProperties {
		date: FormControl<string | null | undefined>,
		direct: FormControl<number | null | undefined>,
		economy: FormControl<number | null | undefined>,
		hlr: FormControl<number | null | undefined>,
		inbound: FormControl<number | null | undefined>,
		mnp: FormControl<number | null | undefined>,
		usage_eur: FormControl<number | null | undefined>,
		voice: FormControl<number | null | undefined>,
	}
	export function CreateAnalyticsReturnFormGroup() {
		return new FormGroup<AnalyticsReturnFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			direct: new FormControl<number | null | undefined>(undefined),
			economy: new FormControl<number | null | undefined>(undefined),
			hlr: new FormControl<number | null | undefined>(undefined),
			inbound: new FormControl<number | null | undefined>(undefined),
			mnp: new FormControl<number | null | undefined>(undefined),
			usage_eur: new FormControl<number | null | undefined>(undefined),
			voice: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ContactsGetAction { read = 0 }

	export enum ContactsGetJson { _0 = 0, _1 = 1 }

	export enum ContactsPOSTAction { del = 0, write = 1 }

	export enum ContactsPOSTJson { _0 = 0, _1 = 1 }

	export interface HooksGetReturn {
		HooksGetReturnHooks?: Array<HooksGetReturnHooks>;
		success?: boolean | null;
	}
	export interface HooksGetReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateHooksGetReturnFormGroup() {
		return new FormGroup<HooksGetReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface HooksGetReturnHooks {
		created?: string | null;
		event_type?: string | null;
		id?: string | null;
		request_method?: string | null;
		target_url?: string | null;
	}
	export interface HooksGetReturnHooksFormProperties {
		created: FormControl<string | null | undefined>,
		event_type: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		request_method: FormControl<string | null | undefined>,
		target_url: FormControl<string | null | undefined>,
	}
	export function CreateHooksGetReturnHooksFormGroup() {
		return new FormGroup<HooksGetReturnHooksFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			request_method: new FormControl<string | null | undefined>(undefined),
			target_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HooksPOSTAction { subscribe = 0, unsubscribe = 1 }

	export enum HooksPOSTEvent_type { all = 0, sms_mo = 1, dlr = 2, voice_status = 3 }

	export enum HooksPOSTRequest_method { POST = 0, JSON = 1, GET = 2 }

	export interface HooksPOSTReturn {
		id?: number | null;
		success?: boolean | null;
	}
	export interface HooksPOSTReturnFormProperties {
		id: FormControl<number | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateHooksPOSTReturnFormGroup() {
		return new FormGroup<HooksPOSTReturnFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SmsDebug { _1 = 1, _0 = 0 }

	export enum SmsNo_reload { _1 = 1, _0 = 0 }

	export enum SmsUnicode { _1 = 1, _0 = 0 }

	export enum SmsFlash { _1 = 1, _0 = 0 }

	export enum SmsUtf8 { _1 = 1, _0 = 0 }

	export enum SmsDetails { _1 = 1, _0 = 0 }

	export enum SmsReturn_msg_id { _1 = 1, _0 = 0 }

	export enum SmsJson { _1 = 1, _0 = 0 }

	export enum SmsPerformance_tracking { _1 = 1, _0 = 0 }

	export interface SmsReturn {
		balance?: number | null;
		debug?: string | null;
		SmsReturnMessages?: Array<SmsReturnMessages>;
		sms_type?: SmsReturnSms_type | null;
		success?: string | null;
		total_price?: number | null;
	}
	export interface SmsReturnFormProperties {
		balance: FormControl<number | null | undefined>,
		debug: FormControl<string | null | undefined>,
		sms_type: FormControl<SmsReturnSms_type | null | undefined>,
		success: FormControl<string | null | undefined>,
		total_price: FormControl<number | null | undefined>,
	}
	export function CreateSmsReturnFormGroup() {
		return new FormGroup<SmsReturnFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			debug: new FormControl<string | null | undefined>(undefined),
			sms_type: new FormControl<SmsReturnSms_type | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
			total_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SmsReturnMessages {
		encoding?: string | null;
		error?: string | null;
		error_text?: string | null;
		id?: string | null;
		messages?: Array<string>;
		parts?: number | null;
		price?: number | null;
		recipient?: string | null;
		sender?: string | null;
		success?: boolean | null;
		text?: string | null;
	}
	export interface SmsReturnMessagesFormProperties {
		encoding: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		error_text: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		parts: FormControl<number | null | undefined>,
		price: FormControl<number | null | undefined>,
		recipient: FormControl<string | null | undefined>,
		sender: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateSmsReturnMessagesFormGroup() {
		return new FormGroup<SmsReturnMessagesFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			error_text: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			parts: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			recipient: new FormControl<string | null | undefined>(undefined),
			sender: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SmsReturnSms_type { economy = 0, direct = 1 }

	export interface ValidateForVoiceReturn {
		code?: string | null;
		error?: string | null;
		success?: boolean | null;
	}
	export interface ValidateForVoiceReturnFormProperties {
		code: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateValidateForVoiceReturnFormGroup() {
		return new FormGroup<ValidateForVoiceReturnFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum VoiceXml { _1 = 1, _0 = 0 }

}

