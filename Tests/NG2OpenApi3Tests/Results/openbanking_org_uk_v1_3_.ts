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
		 * Gets a list of all `ATM` objects.
		 * Get atms
		 * @return {void} Successful response with a list of `ATM` data
		 */
		ATMGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'atms', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all `Branch` objects.
		 * Get branches
		 * @return {void} Successful response with a list of `Branch` data
		 */
		BranchGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'branches', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all `Branch Current Account` objects.
		 * Get business-current-accounts
		 * @return {void} Successful response with a list of `Branch Current Account` data
		 */
		BCAGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'business-current-accounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all `Commerical Credit Card` objects.
		 * Get commercial-credit-cards
		 * @return {void} Successful response with a list of `Commercial Credit Card` data
		 */
		CCCGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'commercial-credit-cards', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all `Personal Current Account` objects.
		 * Get personal-current-accounts
		 * @return {void} Successful response with a list of `Personal Current Account` data
		 */
		PCAGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'personal-current-accounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all `Unsercured SME Lending` objects.
		 * Get unsecured-sme-loans
		 * @return {void} Successful response with a list of `Unsecured SME Lending` data
		 */
		SMEGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'unsecured-sme-loans', { observe: 'response', responseType: 'text' });
		}
	}

}

