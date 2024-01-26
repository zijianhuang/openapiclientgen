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
		 * Verify that an OTP sent by the Send SMS Verification API is valid.
		 * Get v1/verification/result
		 * @param {string} tran_id The unique ID that was returned by the Send Verification SMS API that triggered the OTP sms.
		 * @param {string} key FraudLabs Pro API key.
		 * @param {V1VerificationResultGetByTran_idAndKeyAndFormatAndOtpFormat} format Returns the API response in json (default) or xml format.
		 * @param {string} otp The OTP that was sent to the recipient’s phone.
		 * @return {void} Get verification response
		 */
		V1VerificationResultGetByTran_idAndKeyAndFormatAndOtp(tran_id: string, key: string, format: V1VerificationResultGetByTran_idAndKeyAndFormatAndOtpFormat | null | undefined, otp: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/verification/result?tran_id=' + (tran_id == null ? '' : encodeURIComponent(tran_id)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&format=' + format + '&otp=' + (otp == null ? '' : encodeURIComponent(otp)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send an SMS with verification code and a custom message for authentication purpose.
		 * Post v1/verification/send
		 * @param {string} country_code ISO 3166 country code for the recipient mobile phone number. If parameter is supplied, then some basic telephone number validation is done.
		 * @param {V1VerificationResultGetByTran_idAndKeyAndFormatAndOtpFormat} format Returns the API response in json (default) or xml format.
		 * @param {string} tel The recipient mobile phone number in E164 format which is a plus followed by just numbers with no spaces or parentheses.
		 * @param {string} key FraudLabs Pro API key.
		 * @param {string} mesg The message template for the SMS. Add <otp> as placeholder for the actual OTP to be generated. Max length is 140 characters.
		 * @return {void} send verification response
		 */
		V1VerificationSendPostByCountry_codeAndFormatAndTelAndKeyAndMesg(country_code: string | null | undefined, format: V1VerificationResultGetByTran_idAndKeyAndFormatAndOtpFormat | null | undefined, tel: string, key: string, mesg: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/verification/send?country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)) + '&format=' + format + '&tel=' + (tel == null ? '' : encodeURIComponent(tel)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&mesg=' + (mesg == null ? '' : encodeURIComponent(mesg)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum V1VerificationResultGetByTran_idAndKeyAndFormatAndOtpFormat { json = 'json', xml = 'xml' }

}

