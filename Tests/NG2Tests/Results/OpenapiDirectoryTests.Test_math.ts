import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Convert a given number from one base to another base
		 * Get numbers/base
		 * @param {string} number Number to convert to the target base
		 * @param {string} from Base of the supplied number (Optional base 10 assumed by default)
		 * @param {string} to Target base to convert to
		 * @return {void} 200 success response
		 */
		NumbersBaseGetByNumberAndFromAndTo(number: string, from: string, to: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/base?number=' + (number == null ? '' : encodeURIComponent(number)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert a given number to binary
		 * Get numbers/base/binary
		 * @param {string} number Number to convert to binary
		 * @param {string} from Base of the supplied number (Optional base 10 assumed by default)
		 * @return {void} 200 success response
		 */
		NumbersBaseBinaryGetByNumberAndFrom(number: string, from: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/base/binary?number=' + (number == null ? '' : encodeURIComponent(number)) + '&from=' + (from == null ? '' : encodeURIComponent(from)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert a given number to hexadecimal
		 * Get numbers/base/hex
		 * @param {string} number Number to convert to hex
		 * @param {string} from Base of the supplied number (Optional base 10 assumed by default)
		 * @return {void} 200 success response
		 */
		NumbersBaseHexGetByNumberAndFrom(number: string, from: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/base/hex?number=' + (number == null ? '' : encodeURIComponent(number)) + '&from=' + (from == null ? '' : encodeURIComponent(from)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert a given number to octal
		 * Get numbers/base/octal
		 * @param {string} number Number to convert to octal
		 * @param {string} from Base of the supplied number (Optional base 10 assumed by default)
		 * @return {void} 200 success response
		 */
		NumbersBaseOctalGetByNumberAndFrom(number: string, from: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/base/octal?number=' + (number == null ? '' : encodeURIComponent(number)) + '&from=' + (from == null ? '' : encodeURIComponent(from)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the cardinal of the given number
		 * Get numbers/cardinal
		 * @param {string} number Number value
		 * @param {string} language Language to use
		 * @return {void} 200 Success response
		 */
		NumbersCardinalGetByNumberAndLanguage(number: string, language: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/cardinal?number=' + (number == null ? '' : encodeURIComponent(number)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Spells out the number as a currency
		 * Get numbers/currency
		 * @param {string} number Number to spell
		 * @param {string} language Language to use
		 * @return {void} 200 Success response
		 */
		NumbersCurrencyGetByNumberAndLanguage(number: string, language: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/currency?number=' + (number == null ? '' : encodeURIComponent(number)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a random fact about a number
		 * Get numbers/fact
		 * @param {string} number Number value
		 * @return {void} 200 Success response
		 */
		NumbersFactGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/fact?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a cube number or not.
		 * Get numbers/is-cube
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersIs_cubeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/is-cube?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a palindrome number or not.
		 * Get numbers/is-palindrome
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersIs_palindromeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/is-palindrome?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a square number or not.
		 * Get numbers/is-square
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersIs_squareGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/is-square?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a triangle number or not.
		 * Get numbers/is-triangle
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersIs_triangleGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/is-triangle?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the number of the day for current day
		 * Get numbers/nod
		 * @return {void} 200 Success response
		 */
		NumbersNodGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/nod', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert base 10 representation of a given number to chinese numeral.
		 * Get numbers/numeral/chinese
		 * @param {string} number Number to convert
		 * @return {void} 200 Success response
		 */
		NumbersNumeralChineseGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/numeral/chinese?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert base 10 representation of a given number to egyptian numeral.
		 * Get numbers/numeral/egyptian
		 * @param {string} number Number to convert
		 * @return {void} 200 Success response
		 */
		NumbersNumeralEgyptianGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/numeral/egyptian?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert base 10 representation of a given number to roman numeral.
		 * Get numbers/numeral/roman
		 * @param {string} number Number to convert
		 * @return {void} 200 Success response
		 */
		NumbersNumeralRomanGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/numeral/roman?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the ordinal of the given number
		 * Get numbers/ordinal
		 * @param {string} number Number value
		 * @return {void} 200 Success response
		 */
		NumbersOrdinalGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/ordinal?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get digits of pi (Ï€)
		 * Get numbers/pi
		 * @param {string} from Optional start position
		 * @param {string} to Optional start position
		 * @return {void} 200 Success response
		 */
		NumbersPiGetByFromAndTo(from: string, to: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/pi?from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the prime factors of a given number.
		 * Get numbers/prime/factors
		 * @param {string} number Number to get the factors
		 * @return {void} 200 Success response
		 */
		NumbersPrimeFactorsGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/factors?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a known fermat prime number or not.
		 * Get numbers/prime/is-fermat-prime
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersPrimeIs_fermat_primeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/is-fermat-prime?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a known fibonacci prime number or not.
		 * Get numbers/prime/is-fibonacci-prime
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersPrimeIs_fibonacci_primeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/is-fibonacci-prime?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a known mersenne prime number or not.
		 * Get numbers/prime/is-mersenne-prime
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersPrimeIs_mersenne_primeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/is-mersenne-prime?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a known partition prime number or not.
		 * Get numbers/prime/is-partition-prime
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersPrimeIs_partition_primeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/is-partition-prime?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a known pell prime number or not.
		 * Get numbers/prime/is-pell-prime
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersPrimeIs_pell_primeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/is-pell-prime?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a perfect number or not.
		 * Get numbers/prime/is-perfect
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersPrimeIs_perfectGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/is-perfect?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a given number is a known prime number or not.
		 * Get numbers/prime/is-prime
		 * @param {string} number Number to check
		 * @return {void} 200 Success response
		 */
		NumbersPrimeIs_primeGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/prime/is-prime?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate random number(s)
		 * Get numbers/random
		 * @param {string} min Minimum Number value in the range
		 * @param {string} max Maximum Number value
		 * @param {string} total Total number of random numbers to generate. Defaults to 1
		 * @return {void} 200 Success response
		 */
		NumbersRandomGetByMinAndMaxAndTotal(min: string, max: string, total: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/random?min=' + (min == null ? '' : encodeURIComponent(min)) + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&total=' + (total == null ? '' : encodeURIComponent(total)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

