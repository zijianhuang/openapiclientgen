import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/** A unique William Hill identifier for the error */
		code?: string | null;

		/** To help pinpoint the exact parameter where a request has failed */
		field?: string | null;

		/** A unique William Hill text string to enable you to identify the error (in English only) */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/** A unique William Hill identifier for the error */
		code: FormControl<string | null | undefined>,

		/** To help pinpoint the exact parameter where a request has failed */
		field: FormControl<string | null | undefined>,

		/** A unique William Hill text string to enable you to identify the error (in English only) */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NumbersErrors {
		errors?: Array<Error>;
	}
	export interface NumbersErrorsFormProperties {
	}
	export function CreateNumbersErrorsFormGroup() {
		return new FormGroup<NumbersErrorsFormProperties>({
		});

	}

	export interface Success {

		/** An array of random numbers */
		randomNumbers?: Array<number>;

		/** This is either the IP address of the customer if not authenticated, or if used in ‘Live’ mode, when there is a financial outcome, it is the IP address and customerId for the account the ticket was generated for. This is used for audit purposes in case of financial query about a game outcome. */
		sessionId?: string | null;
	}
	export interface SuccessFormProperties {

		/** This is either the IP address of the customer if not authenticated, or if used in ‘Live’ mode, when there is a financial outcome, it is the IP address and customerId for the account the ticket was generated for. This is used for audit purposes in case of financial query about a game outcome. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateSuccessFormGroup() {
		return new FormGroup<SuccessFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method is used to generate random numbers for your app. Within the request, you can specify the lowest number, the highest number and the amount of numbers returned. There is also an option to generate a unique set of numbers with no repetition of the same numbers allowed in the return.
		 * Get generate/integers
		 * @param {string} gameCode Identifier that indicates the game for which the RNG (Random Number Generator) has been used.
		 * @param {number} highest Highest possible value to be returned.
		 * @param {number} lowest Lowest possible value to be returned.
		 * @param {number} count Number of values to be returned.
		 * @param {boolean} unique Should the numbers returned be unique
		 * @return {Success} Success
		 */
		GetRandomNumbers(gameCode: string, highest: number, lowest: number, count: number, unique: boolean): Observable<Success> {
			return this.http.get<Success>(this.baseUri + 'generate/integers?gameCode=' + (gameCode == null ? '' : encodeURIComponent(gameCode)) + '&highest=' + highest + '&lowest=' + lowest + '&count=' + count + '&unique=' + unique, {});
		}
	}

}

