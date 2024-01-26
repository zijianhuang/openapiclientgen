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
		 * Check verification code
		 * Checks the user's emailed code is valid.
		 * If this returns success=true, you can safely assume the user you are interacting with is the owner of that email address.
		 * Post checkCode
		 * @return {CheckCodePostReturn} If success is true, the user has given the correct code. If not the code is incorrect. \
		 * Check the message for more information
		 */
		CheckCodePost(requestBody: CheckCodePostPostBody, headersHandler?: () => HttpHeaders): Observable<CheckCodePostReturn> {
			return this.http.post<CheckCodePostReturn>(this.baseUri + 'checkCode', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Send verification code
		 * This request send's a code to the given email address, which should be returned to check it is correct.
		 * Post sendCode
		 * @return {SendCodePostReturn} Success - Email sent
		 */
		SendCodePost(requestBody: SendCodePostPostBody, headersHandler?: () => HttpHeaders): Observable<SendCodePostReturn> {
			return this.http.post<SendCodePostReturn>(this.baseUri + 'sendCode', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export interface CheckCodePostPostBody {
		code?: string | null;
		email?: string | null;
	}
	export interface CheckCodePostPostBodyFormProperties {
		code: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
	}
	export function CreateCheckCodePostPostBodyFormGroup() {
		return new FormGroup<CheckCodePostPostBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckCodePostReturn {
		message?: string | null;
		success?: boolean | null;
	}
	export interface CheckCodePostReturnFormProperties {
		message: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckCodePostReturnFormGroup() {
		return new FormGroup<CheckCodePostReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SendCodePostPostBody {
		email?: string | null;
	}
	export interface SendCodePostPostBodyFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateSendCodePostPostBodyFormGroup() {
		return new FormGroup<SendCodePostPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendCodePostReturn {
		message?: boolean | null;
		success?: boolean | null;
	}
	export interface SendCodePostReturnFormProperties {
		message: FormControl<boolean | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateSendCodePostReturnFormGroup() {
		return new FormGroup<SendCodePostReturnFormProperties>({
			message: new FormControl<boolean | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

