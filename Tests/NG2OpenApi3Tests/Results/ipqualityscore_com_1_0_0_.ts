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
		 * Email Validation
		 * Email Validation
		 * Get json/email/{YOUR_API_KEY_HERE}/{USER_EMAIL_HERE}
		 * @return {EmailValidationReturn} Successful response
		 */
		EmailValidation(): Observable<EmailValidationReturn> {
			return this.http.get<EmailValidationReturn>(this.baseUri + 'json/email/{YOUR_API_KEY_HERE}/{USER_EMAIL_HERE}', {});
		}

		/**
		 * Phone Validation
		 * Phone Validation
		 * Get json/phone/{YOUR_API_KEY_HERE}/{USER_PHONE_HERE}
		 * @param {string} country country
		 * @return {PhoneValidationReturn} Successful response
		 */
		PhoneValidation(country: string | null | undefined): Observable<PhoneValidationReturn> {
			return this.http.get<PhoneValidationReturn>(this.baseUri + 'json/phone/{YOUR_API_KEY_HERE}/{USER_PHONE_HERE}?country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * Malicious URL Scanner
		 * Malicious URL Scanner
		 * Get json/url/{YOUR_API_KEY_HERE}/{URL_HERE}
		 * @return {MaliciousUrlScannerReturn} Successful response
		 */
		MaliciousUrlScanner(): Observable<MaliciousUrlScannerReturn> {
			return this.http.get<MaliciousUrlScannerReturn>(this.baseUri + 'json/url/{YOUR_API_KEY_HERE}/{URL_HERE}', {});
		}
	}

	export interface EmailValidationReturn {
		associated_names?: EmailValidationReturnAssociated_names;
		associated_phone_numbers?: EmailValidationReturnAssociated_phone_numbers;
		catch_all?: boolean | null;
		common?: boolean | null;
		deliverability?: string | null;
		disposable?: boolean | null;
		dns_valid?: boolean | null;
		domain_age?: EmailValidationReturnDomain_age;
		domain_velocity?: string | null;
		first_name?: string | null;
		first_seen?: EmailValidationReturnFirst_seen;
		fraud_score?: number | null;
		frequent_complainer?: boolean | null;
		generic?: boolean | null;
		honeypot?: boolean | null;
		leaked?: boolean | null;
		message?: string | null;
		overall_score?: number | null;
		recent_abuse?: boolean | null;
		request_id?: string | null;
		sanitized_email?: string | null;
		smtp_score?: number | null;
		spam_trap_score?: string | null;
		success?: boolean | null;
		suggested_domain?: string | null;
		suspect?: boolean | null;
		timed_out?: boolean | null;
		user_activity?: string | null;
		valid?: boolean | null;
	}
	export interface EmailValidationReturnFormProperties {
		catch_all: FormControl<boolean | null | undefined>,
		common: FormControl<boolean | null | undefined>,
		deliverability: FormControl<string | null | undefined>,
		disposable: FormControl<boolean | null | undefined>,
		dns_valid: FormControl<boolean | null | undefined>,
		domain_velocity: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		fraud_score: FormControl<number | null | undefined>,
		frequent_complainer: FormControl<boolean | null | undefined>,
		generic: FormControl<boolean | null | undefined>,
		honeypot: FormControl<boolean | null | undefined>,
		leaked: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		overall_score: FormControl<number | null | undefined>,
		recent_abuse: FormControl<boolean | null | undefined>,
		request_id: FormControl<string | null | undefined>,
		sanitized_email: FormControl<string | null | undefined>,
		smtp_score: FormControl<number | null | undefined>,
		spam_trap_score: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		suggested_domain: FormControl<string | null | undefined>,
		suspect: FormControl<boolean | null | undefined>,
		timed_out: FormControl<boolean | null | undefined>,
		user_activity: FormControl<string | null | undefined>,
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailValidationReturnFormGroup() {
		return new FormGroup<EmailValidationReturnFormProperties>({
			catch_all: new FormControl<boolean | null | undefined>(undefined),
			common: new FormControl<boolean | null | undefined>(undefined),
			deliverability: new FormControl<string | null | undefined>(undefined),
			disposable: new FormControl<boolean | null | undefined>(undefined),
			dns_valid: new FormControl<boolean | null | undefined>(undefined),
			domain_velocity: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			fraud_score: new FormControl<number | null | undefined>(undefined),
			frequent_complainer: new FormControl<boolean | null | undefined>(undefined),
			generic: new FormControl<boolean | null | undefined>(undefined),
			honeypot: new FormControl<boolean | null | undefined>(undefined),
			leaked: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			overall_score: new FormControl<number | null | undefined>(undefined),
			recent_abuse: new FormControl<boolean | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			sanitized_email: new FormControl<string | null | undefined>(undefined),
			smtp_score: new FormControl<number | null | undefined>(undefined),
			spam_trap_score: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			suggested_domain: new FormControl<string | null | undefined>(undefined),
			suspect: new FormControl<boolean | null | undefined>(undefined),
			timed_out: new FormControl<boolean | null | undefined>(undefined),
			user_activity: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EmailValidationReturnAssociated_names {
		names?: Array<string>;
		status?: string | null;
	}
	export interface EmailValidationReturnAssociated_namesFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateEmailValidationReturnAssociated_namesFormGroup() {
		return new FormGroup<EmailValidationReturnAssociated_namesFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailValidationReturnAssociated_phone_numbers {
		phone_numbers?: Array<string>;
		status?: string | null;
	}
	export interface EmailValidationReturnAssociated_phone_numbersFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateEmailValidationReturnAssociated_phone_numbersFormGroup() {
		return new FormGroup<EmailValidationReturnAssociated_phone_numbersFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailValidationReturnDomain_age {
		human?: string | null;
		iso?: string | null;
		timestamp?: number | null;
	}
	export interface EmailValidationReturnDomain_ageFormProperties {
		human: FormControl<string | null | undefined>,
		iso: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateEmailValidationReturnDomain_ageFormGroup() {
		return new FormGroup<EmailValidationReturnDomain_ageFormProperties>({
			human: new FormControl<string | null | undefined>(undefined),
			iso: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmailValidationReturnFirst_seen {
		human?: string | null;
		iso?: string | null;
		timestamp?: number | null;
	}
	export interface EmailValidationReturnFirst_seenFormProperties {
		human: FormControl<string | null | undefined>,
		iso: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateEmailValidationReturnFirst_seenFormGroup() {
		return new FormGroup<EmailValidationReturnFirst_seenFormProperties>({
			human: new FormControl<string | null | undefined>(undefined),
			iso: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhoneValidationReturn {
		VOIP?: boolean | null;
		active?: boolean | null;
		active_status?: string | null;
		associated_email_addresses?: PhoneValidationReturnAssociated_email_addresses;
		carrier?: string | null;
		city?: string | null;
		country?: string | null;
		dialing_code?: number | null;
		do_not_call?: boolean | null;
		formatted?: string | null;
		fraud_score?: number | null;
		leaked?: boolean | null;
		line_type?: string | null;
		local_format?: string | null;
		mcc?: string | null;
		message?: string | null;
		mnc?: string | null;
		name?: string | null;
		prepaid?: string | null;
		recent_abuse?: boolean | null;
		region?: string | null;
		request_id?: string | null;
		risky?: boolean | null;
		sms_domain?: string | null;
		sms_email?: string | null;
		spammer?: boolean | null;
		success?: boolean | null;
		timezone?: string | null;
		user_activity?: string | null;
		valid?: boolean | null;
		zip_code?: string | null;
	}
	export interface PhoneValidationReturnFormProperties {
		VOIP: FormControl<boolean | null | undefined>,
		active: FormControl<boolean | null | undefined>,
		active_status: FormControl<string | null | undefined>,
		carrier: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		dialing_code: FormControl<number | null | undefined>,
		do_not_call: FormControl<boolean | null | undefined>,
		formatted: FormControl<string | null | undefined>,
		fraud_score: FormControl<number | null | undefined>,
		leaked: FormControl<boolean | null | undefined>,
		line_type: FormControl<string | null | undefined>,
		local_format: FormControl<string | null | undefined>,
		mcc: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		mnc: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		prepaid: FormControl<string | null | undefined>,
		recent_abuse: FormControl<boolean | null | undefined>,
		region: FormControl<string | null | undefined>,
		request_id: FormControl<string | null | undefined>,
		risky: FormControl<boolean | null | undefined>,
		sms_domain: FormControl<string | null | undefined>,
		sms_email: FormControl<string | null | undefined>,
		spammer: FormControl<boolean | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		user_activity: FormControl<string | null | undefined>,
		valid: FormControl<boolean | null | undefined>,
		zip_code: FormControl<string | null | undefined>,
	}
	export function CreatePhoneValidationReturnFormGroup() {
		return new FormGroup<PhoneValidationReturnFormProperties>({
			VOIP: new FormControl<boolean | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			active_status: new FormControl<string | null | undefined>(undefined),
			carrier: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			dialing_code: new FormControl<number | null | undefined>(undefined),
			do_not_call: new FormControl<boolean | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			fraud_score: new FormControl<number | null | undefined>(undefined),
			leaked: new FormControl<boolean | null | undefined>(undefined),
			line_type: new FormControl<string | null | undefined>(undefined),
			local_format: new FormControl<string | null | undefined>(undefined),
			mcc: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			mnc: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			prepaid: new FormControl<string | null | undefined>(undefined),
			recent_abuse: new FormControl<boolean | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			risky: new FormControl<boolean | null | undefined>(undefined),
			sms_domain: new FormControl<string | null | undefined>(undefined),
			sms_email: new FormControl<string | null | undefined>(undefined),
			spammer: new FormControl<boolean | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			user_activity: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
			zip_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneValidationReturnAssociated_email_addresses {
		emails?: Array<string>;
		status?: string | null;
	}
	export interface PhoneValidationReturnAssociated_email_addressesFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreatePhoneValidationReturnAssociated_email_addressesFormGroup() {
		return new FormGroup<PhoneValidationReturnAssociated_email_addressesFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MaliciousUrlScannerReturn {
		adult?: boolean | null;
		category?: string | null;
		content_type?: string | null;
		dns_valid?: boolean | null;
		domain?: string | null;
		domain_age?: MaliciousUrlScannerReturnDomain_age;
		domain_rank?: number | null;
		ip_address?: string | null;
		malware?: boolean | null;
		message?: string | null;
		page_size?: number | null;
		parking?: boolean | null;
		phishing?: boolean | null;
		request_id?: string | null;
		risk_score?: number | null;
		server?: string | null;
		spamming?: boolean | null;
		status_code?: number | null;
		success?: boolean | null;
		suspicious?: boolean | null;
		unsafe?: boolean | null;
	}
	export interface MaliciousUrlScannerReturnFormProperties {
		adult: FormControl<boolean | null | undefined>,
		category: FormControl<string | null | undefined>,
		content_type: FormControl<string | null | undefined>,
		dns_valid: FormControl<boolean | null | undefined>,
		domain: FormControl<string | null | undefined>,
		domain_rank: FormControl<number | null | undefined>,
		ip_address: FormControl<string | null | undefined>,
		malware: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		parking: FormControl<boolean | null | undefined>,
		phishing: FormControl<boolean | null | undefined>,
		request_id: FormControl<string | null | undefined>,
		risk_score: FormControl<number | null | undefined>,
		server: FormControl<string | null | undefined>,
		spamming: FormControl<boolean | null | undefined>,
		status_code: FormControl<number | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		suspicious: FormControl<boolean | null | undefined>,
		unsafe: FormControl<boolean | null | undefined>,
	}
	export function CreateMaliciousUrlScannerReturnFormGroup() {
		return new FormGroup<MaliciousUrlScannerReturnFormProperties>({
			adult: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			content_type: new FormControl<string | null | undefined>(undefined),
			dns_valid: new FormControl<boolean | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			domain_rank: new FormControl<number | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			malware: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			parking: new FormControl<boolean | null | undefined>(undefined),
			phishing: new FormControl<boolean | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			risk_score: new FormControl<number | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			spamming: new FormControl<boolean | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			suspicious: new FormControl<boolean | null | undefined>(undefined),
			unsafe: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MaliciousUrlScannerReturnDomain_age {
		human?: string | null;
		iso?: string | null;
		timestamp?: number | null;
	}
	export interface MaliciousUrlScannerReturnDomain_ageFormProperties {
		human: FormControl<string | null | undefined>,
		iso: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateMaliciousUrlScannerReturnDomain_ageFormGroup() {
		return new FormGroup<MaliciousUrlScannerReturnDomain_ageFormProperties>({
			human: new FormControl<string | null | undefined>(undefined),
			iso: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

}

