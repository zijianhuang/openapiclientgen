import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AftermarketListingAction {

		/**
		 * Action Id
		 * Required
		 */
		listingActionId: number;
	}
	export interface AftermarketListingActionFormProperties {

		/**
		 * Action Id
		 * Required
		 */
		listingActionId: FormControl<number | null | undefined>,
	}
	export function CreateAftermarketListingActionFormGroup() {
		return new FormGroup<AftermarketListingActionFormProperties>({
			listingActionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AftermarketListingExpiryCreate {

		/**
		 * Domain name
		 * Required
		 */
		domain: string;

		/**
		 * Date when the domain expires
		 * Required
		 */
		expiresAt: string;

		/**
		 * Losing registrar id for the domain
		 * Required
		 * Minimum: 1
		 */
		losingRegistrarId: number;

		/** Monthly traffic page view for the domain */
		pageViewsMonthly?: number | null;

		/** Monthly parking revenue (in USD micro unit) for the domain */
		revenueMonthly?: number | null;
	}
	export interface AftermarketListingExpiryCreateFormProperties {

		/**
		 * Domain name
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Date when the domain expires
		 * Required
		 */
		expiresAt: FormControl<string | null | undefined>,

		/**
		 * Losing registrar id for the domain
		 * Required
		 * Minimum: 1
		 */
		losingRegistrarId: FormControl<number | null | undefined>,

		/** Monthly traffic page view for the domain */
		pageViewsMonthly: FormControl<number | null | undefined>,

		/** Monthly parking revenue (in USD micro unit) for the domain */
		revenueMonthly: FormControl<number | null | undefined>,
	}
	export function CreateAftermarketListingExpiryCreateFormGroup() {
		return new FormGroup<AftermarketListingExpiryCreateFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			losingRegistrarId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			pageViewsMonthly: new FormControl<number | null | undefined>(undefined),
			revenueMonthly: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorField {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** Human-readable, English description of the problem with the contents of the field */
		message?: string | null;

		/**
		 * <ul>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>
		 * <strong style='margin-left: 12px;'>OR</strong>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>
		 * </ul>
		 * Required
		 */
		path: string;

		/** JSONPath referring to a field containing an error, which is referenced by `path` */
		pathRelated?: string | null;
	}
	export interface ErrorFieldFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the problem with the contents of the field */
		message: FormControl<string | null | undefined>,

		/**
		 * <ul>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>
		 * <strong style='margin-left: 12px;'>OR</strong>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>
		 * </ul>
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** JSONPath referring to a field containing an error, which is referenced by `path` */
		pathRelated: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldFormGroup() {
		return new FormGroup<ErrorFieldFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pathRelated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorLimit {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: string;
	}
	export interface ErrorLimitFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: FormControl<string | null | undefined>,
	}
	export function CreateErrorLimitFormGroup() {
		return new FormGroup<ErrorLimitFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			retryAfterSec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Expiry {
		id?: number | null;
	}
	export interface ExpiryFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreateExpiryFormGroup() {
		return new FormGroup<ExpiryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Remove listings from GoDaddy Auction
		 * Delete v1/aftermarket/listings
		 * @param {Array<string>} domains A comma separated list of domain names
		 * @return {AftermarketListingAction} Request was successful
		 */
		DeleteListings(domains: Array<string>): Observable<AftermarketListingAction> {
			return this.http.delete<AftermarketListingAction>(this.baseUri + 'v1/aftermarket/listings?' + domains.map(z => `domains=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Add expiry listings into GoDaddy Auction
		 * Post v1/aftermarket/listings/expiry
		 * @param {Array<AftermarketListingExpiryCreate>} requestBody An array of expiry listings to be loaded
		 * @return {AftermarketListingAction} Request was successful
		 */
		AddExpiryListings(requestBody: Array<AftermarketListingExpiryCreate>): Observable<AftermarketListingAction> {
			return this.http.post<AftermarketListingAction>(this.baseUri + 'v1/aftermarket/listings/expiry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

