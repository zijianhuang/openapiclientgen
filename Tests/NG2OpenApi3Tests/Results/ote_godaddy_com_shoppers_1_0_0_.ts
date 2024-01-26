import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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

	export interface PasswordError {

		/** Short identifier for the error, suitable for indicating the specific error within client code */
		code?: PasswordErrorCode | null;

		/** Human-readable, English description of the error */
		message?: string | null;

		/** Response type, always 'error' */
		type?: string | null;
	}
	export interface PasswordErrorFormProperties {

		/** Short identifier for the error, suitable for indicating the specific error within client code */
		code: FormControl<PasswordErrorCode | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,

		/** Response type, always 'error' */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePasswordErrorFormGroup() {
		return new FormGroup<PasswordErrorFormProperties>({
			code: new FormControl<PasswordErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PasswordErrorCode { PW_BLACK_LIST = 0, PW_TOO_SHORT = 1, PW_TOO_LONG = 2, PW_MISSING_UC = 3, PW_MISSING_NUM = 4, PW_RECENTLY_USED = 5, PW_NOT_UNIQUE = 6 }

	export interface Secret {

		/** The secret value used to set a subaccount's password */
		secret?: string | null;
	}
	export interface SecretFormProperties {

		/** The secret value used to set a subaccount's password */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Shopper {

		/** Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record */
		customerId?: string | null;

		/** Required */
		email: string;
		externalId?: number | null;

		/** Required */
		marketId: string;

		/** Required */
		nameFirst: string;

		/** Required */
		nameLast: string;

		/** Required */
		shopperId: string;
	}
	export interface ShopperFormProperties {

		/** Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record */
		customerId: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
		externalId: FormControl<number | null | undefined>,

		/** Required */
		marketId: FormControl<string | null | undefined>,

		/** Required */
		nameFirst: FormControl<string | null | undefined>,

		/** Required */
		nameLast: FormControl<string | null | undefined>,

		/** Required */
		shopperId: FormControl<string | null | undefined>,
	}
	export function CreateShopperFormGroup() {
		return new FormGroup<ShopperFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<number | null | undefined>(undefined),
			marketId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameFirst: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameLast: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shopperId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShopperId {

		/** Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record */
		customerId?: string | null;

		/** Required */
		shopperId: string;
	}
	export interface ShopperIdFormProperties {

		/** Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record */
		customerId: FormControl<string | null | undefined>,

		/** Required */
		shopperId: FormControl<string | null | undefined>,
	}
	export function CreateShopperIdFormGroup() {
		return new FormGroup<ShopperIdFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
			shopperId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShopperStatus {

		/** Indicates the billing state of the Shopper.<br />ABANDONED: The shopper has not been billed in at least 10 years and has no active subscriptions.<br />INACTIVE: The shopper has been billed within the last 10 years but has no active subscriptions.<br />ACTIVE: The shopper has at least one active subscription. */
		billingState?: ShopperStatusBillingState | null;
	}
	export interface ShopperStatusFormProperties {

		/** Indicates the billing state of the Shopper.<br />ABANDONED: The shopper has not been billed in at least 10 years and has no active subscriptions.<br />INACTIVE: The shopper has been billed within the last 10 years but has no active subscriptions.<br />ACTIVE: The shopper has at least one active subscription. */
		billingState: FormControl<ShopperStatusBillingState | null | undefined>,
	}
	export function CreateShopperStatusFormGroup() {
		return new FormGroup<ShopperStatusFormProperties>({
			billingState: new FormControl<ShopperStatusBillingState | null | undefined>(undefined),
		});

	}

	export enum ShopperStatusBillingState { ABANDONED = 0, INACTIVE = 1, ACTIVE = 2 }

	export interface ShopperUpdate {
		email?: string | null;
		externalId?: number | null;

		/** Max length: 50 */
		marketId?: ShopperUpdateMarketId | null;
		nameFirst?: string | null;
		nameLast?: string | null;
	}
	export interface ShopperUpdateFormProperties {
		email: FormControl<string | null | undefined>,
		externalId: FormControl<number | null | undefined>,

		/** Max length: 50 */
		marketId: FormControl<ShopperUpdateMarketId | null | undefined>,
		nameFirst: FormControl<string | null | undefined>,
		nameLast: FormControl<string | null | undefined>,
	}
	export function CreateShopperUpdateFormGroup() {
		return new FormGroup<ShopperUpdateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<number | null | undefined>(undefined),
			marketId: new FormControl<ShopperUpdateMarketId | null | undefined>(undefined, [Validators.maxLength(50)]),
			nameFirst: new FormControl<string | null | undefined>(undefined),
			nameLast: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShopperUpdateMarketId { 'da-DK' = 0, 'de-AT' = 1, 'de-CH' = 2, 'de-DE' = 3, 'el-GR' = 4, 'en-AE' = 5, 'en-AU' = 6, 'en-CA' = 7, 'en-GB' = 8, 'en-HK' = 9, 'en-IE' = 10, 'en-IL' = 11, 'en-IN' = 12, 'en-MY' = 13, 'en-NZ' = 14, 'en-PH' = 15, 'en-PK' = 16, 'en-SG' = 17, 'en-US' = 18, 'en-ZA' = 19, 'es-AR' = 20, 'es-CL' = 21, 'es-CO' = 22, 'es-ES' = 23, 'es-MX' = 24, 'es-PE' = 25, 'es-US' = 26, 'es-VE' = 27, 'fi-FI' = 28, 'fr-BE' = 29, 'fr-CA' = 30, 'fr-CH' = 31, 'fr-FR' = 32, 'hi-IN' = 33, 'id-ID' = 34, 'it-CH' = 35, 'it-IT' = 36, 'ja-JP' = 37, 'ko-KR' = 38, 'mr-IN' = 39, 'nb-NO' = 40, 'nl-BE' = 41, 'nl-NL' = 42, 'pl-PL' = 43, 'pt-BR' = 44, 'pt-PT' = 45, 'ru-RU' = 46, 'sv-SE' = 47, 'ta-IN' = 48, 'th-TH' = 49, 'tr-TR' = 50, 'uk-UA' = 51, 'vi-VN' = 52, 'zh-HK' = 53, 'zh-SG' = 54, 'zh-TW' = 55 }

	export interface SubaccountCreate {

		/** Required */
		email: string;
		externalId?: number | null;

		/** Max length: 50 */
		marketId?: ShopperUpdateMarketId | null;

		/** Required */
		nameFirst: string;

		/** Required */
		nameLast: string;

		/** Required */
		password: string;
	}
	export interface SubaccountCreateFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,
		externalId: FormControl<number | null | undefined>,

		/** Max length: 50 */
		marketId: FormControl<ShopperUpdateMarketId | null | undefined>,

		/** Required */
		nameFirst: FormControl<string | null | undefined>,

		/** Required */
		nameLast: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateSubaccountCreateFormGroup() {
		return new FormGroup<SubaccountCreateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<number | null | undefined>(undefined),
			marketId: new FormControl<ShopperUpdateMarketId | null | undefined>(undefined, [Validators.maxLength(50)]),
			nameFirst: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameLast: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a Subaccount owned by the authenticated Reseller
		 * Post v1/shoppers/subaccount
		 * @param {SubaccountCreate} requestBody The subaccount to create
		 * @return {ShopperId} Request was successful
		 */
		CreateSubaccount(requestBody: SubaccountCreate): Observable<ShopperId> {
			return this.http.post<ShopperId>(this.baseUri + 'v1/shoppers/subaccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request the deletion of a shopper profile
		 * <strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Delete v1/shoppers/{shopperId}
		 * @param {string} shopperId The ID of the shopper to delete. Must agree with the shopper id on the token or header, if present. *Note*: **shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)
		 * @param {string} auditClientIp The client IP of the user who originated the request leading to this call.
		 * @return {void} 
		 */
		Delete(shopperId: string, auditClientIp: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/shoppers/' + (shopperId == null ? '' : encodeURIComponent(shopperId)) + '&auditClientIp=' + (auditClientIp == null ? '' : encodeURIComponent(auditClientIp)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details for the specified Shopper
		 * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Get v1/shoppers/{shopperId}
		 * @param {string} shopperId Shopper whose details are to be retrieved
		 * @param {Array<string>} includes Additional properties to be included in the response shopper object
		 * @return {Shopper} Request was successful
		 */
		Get(shopperId: string, includes: Array<string> | null | undefined): Observable<Shopper> {
			return this.http.get<Shopper>(this.baseUri + 'v1/shoppers/' + (shopperId == null ? '' : encodeURIComponent(shopperId)) + '&' + includes?.map(z => `includes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Update details for the specified Shopper
		 * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Post v1/shoppers/{shopperId}
		 * @param {string} shopperId The ID of the Shopper to update
		 * @param {ShopperUpdate} requestBody The Shopper details to update
		 * @return {ShopperId} Request was successful
		 */
		Update(shopperId: string, requestBody: ShopperUpdate): Observable<ShopperId> {
			return this.http.post<ShopperId>(this.baseUri + 'v1/shoppers/' + (shopperId == null ? '' : encodeURIComponent(shopperId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set subaccount's password
		 * <strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Put v1/shoppers/{shopperId}/factors/password
		 * @param {string} shopperId Shopper whose password will be set
		 * @param {Secret} requestBody The value to set the subaccount's password to
		 * @return {ShopperId} Request was successful
		 */
		ChangePassword(shopperId: string, requestBody: Secret): Observable<ShopperId> {
			return this.http.put<ShopperId>(this.baseUri + 'v1/shoppers/' + (shopperId == null ? '' : encodeURIComponent(shopperId)) + '/factors/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get details for the specified Shopper
		 * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
		 * Get v1/shoppers/{shopperId}/status
		 * @param {string} shopperId The ID of the shopper to retrieve. Must agree with the shopper id on the token or header, if present
		 * @param {string} auditClientIp The client IP of the user who originated the request leading to this call.
		 * @return {ShopperStatus} Request was successful
		 */
		GetStatus(shopperId: string, auditClientIp: string): Observable<ShopperStatus> {
			return this.http.get<ShopperStatus>(this.baseUri + 'v1/shoppers/' + (shopperId == null ? '' : encodeURIComponent(shopperId)) + '/status&auditClientIp=' + (auditClientIp == null ? '' : encodeURIComponent(auditClientIp)), {});
		}
	}

}

