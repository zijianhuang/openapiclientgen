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
		 * Feedback the status of an order transaction.
		 * Post v1/order/feedback
		 * @return {void} Feedback order response
		 */
		V1OrderFeedbackPostByIdAndKeyAndFormatAndActionAndNotes(id: string, key: string, format: V1OrderFeedbackPostByIdAndKeyAndFormatAndActionAndNotesFormat | null | undefined, action: V1OrderFeedbackPostByIdAndKeyAndFormatAndActionAndNotesAction, notes: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/order/feedback?id=' + (id == null ? '' : encodeURIComponent(id)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&format=' + format + '&action=' + action + '&notes=' + (notes == null ? '' : encodeURIComponent(notes)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Screen order for payment fraud.
		 * Post v1/order/screen
		 * @return {void} Screen order response
		 */
		V1OrderScreenPostByIpAndKeyAndFormatAndLast_nameAndFirst_nameAndBill_addrAndBill_cityAndBill_stateAndBill_countryAndBill_zip_codeAndShip_addrAndShip_cityAndShip_stateAndShip_countryAndShip_zip_codeAndEmail_domainAndUser_phoneAndEmailAndEmail_hashAndUsername_hashAndPassword_hashAndBin_noAndCard_hashAndAvs_resultAndCvv_resultAndUser_order_idAndUser_order_memoAndAmountAndQuantityAndCurrencyAndDepartmentAndPayment_modeAndFlp_checksum(ip: string, key: string, format: V1OrderFeedbackPostByIdAndKeyAndFormatAndActionAndNotesFormat | null | undefined, last_name: string | null | undefined, first_name: string | null | undefined, bill_addr: string | null | undefined, bill_city: string | null | undefined, bill_state: string | null | undefined, bill_country: string | null | undefined, bill_zip_code: string | null | undefined, ship_addr: string | null | undefined, ship_city: string | null | undefined, ship_state: string | null | undefined, ship_country: string | null | undefined, ship_zip_code: string | null | undefined, email_domain: string | null | undefined, user_phone: string | null | undefined, email: string | null | undefined, email_hash: string | null | undefined, username_hash: string | null | undefined, password_hash: string | null | undefined, bin_no: string | null | undefined, card_hash: string | null | undefined, avs_result: string | null | undefined, cvv_result: string | null | undefined, user_order_id: string | null | undefined, user_order_memo: string | null | undefined, amount: number | null | undefined, quantity: number | null | undefined, currency: string | null | undefined, department: string | null | undefined, payment_mode: string | null | undefined, flp_checksum: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/order/screen?ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&format=' + format + '&last_name=' + (last_name == null ? '' : encodeURIComponent(last_name)) + '&first_name=' + (first_name == null ? '' : encodeURIComponent(first_name)) + '&bill_addr=' + (bill_addr == null ? '' : encodeURIComponent(bill_addr)) + '&bill_city=' + (bill_city == null ? '' : encodeURIComponent(bill_city)) + '&bill_state=' + (bill_state == null ? '' : encodeURIComponent(bill_state)) + '&bill_country=' + (bill_country == null ? '' : encodeURIComponent(bill_country)) + '&bill_zip_code=' + (bill_zip_code == null ? '' : encodeURIComponent(bill_zip_code)) + '&ship_addr=' + (ship_addr == null ? '' : encodeURIComponent(ship_addr)) + '&ship_city=' + (ship_city == null ? '' : encodeURIComponent(ship_city)) + '&ship_state=' + (ship_state == null ? '' : encodeURIComponent(ship_state)) + '&ship_country=' + (ship_country == null ? '' : encodeURIComponent(ship_country)) + '&ship_zip_code=' + (ship_zip_code == null ? '' : encodeURIComponent(ship_zip_code)) + '&email_domain=' + (email_domain == null ? '' : encodeURIComponent(email_domain)) + '&user_phone=' + (user_phone == null ? '' : encodeURIComponent(user_phone)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&email_hash=' + (email_hash == null ? '' : encodeURIComponent(email_hash)) + '&username_hash=' + (username_hash == null ? '' : encodeURIComponent(username_hash)) + '&password_hash=' + (password_hash == null ? '' : encodeURIComponent(password_hash)) + '&bin_no=' + (bin_no == null ? '' : encodeURIComponent(bin_no)) + '&card_hash=' + (card_hash == null ? '' : encodeURIComponent(card_hash)) + '&avs_result=' + (avs_result == null ? '' : encodeURIComponent(avs_result)) + '&cvv_result=' + (cvv_result == null ? '' : encodeURIComponent(cvv_result)) + '&user_order_id=' + (user_order_id == null ? '' : encodeURIComponent(user_order_id)) + '&user_order_memo=' + (user_order_memo == null ? '' : encodeURIComponent(user_order_memo)) + '&amount=' + amount + '&quantity=' + quantity + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&department=' + (department == null ? '' : encodeURIComponent(department)) + '&payment_mode=' + (payment_mode == null ? '' : encodeURIComponent(payment_mode)) + '&flp_checksum=' + (flp_checksum == null ? '' : encodeURIComponent(flp_checksum)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum V1OrderFeedbackPostByIdAndKeyAndFormatAndActionAndNotesFormat { json = 'json', xml = 'xml' }

	export enum V1OrderFeedbackPostByIdAndKeyAndFormatAndActionAndNotesAction { APPROVE = 'APPROVE', REJECT = 'REJECT', REJECT_BLACKLIST = 'REJECT_BLACKLIST' }

}

