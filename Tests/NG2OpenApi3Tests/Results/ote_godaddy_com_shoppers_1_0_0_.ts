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

	export enum PasswordErrorCode { PW_BLACK_LIST = 'PW_BLACK_LIST', PW_TOO_SHORT = 'PW_TOO_SHORT', PW_TOO_LONG = 'PW_TOO_LONG', PW_MISSING_UC = 'PW_MISSING_UC', PW_MISSING_NUM = 'PW_MISSING_NUM', PW_RECENTLY_USED = 'PW_RECENTLY_USED', PW_NOT_UNIQUE = 'PW_NOT_UNIQUE' }

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

	export enum ShopperStatusBillingState { ABANDONED = 'ABANDONED', INACTIVE = 'INACTIVE', ACTIVE = 'ACTIVE' }

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

	export enum ShopperUpdateMarketId { 'da-DK' = 'da-DK', 'de-AT' = 'de-AT', 'de-CH' = 'de-CH', 'de-DE' = 'de-DE', 'el-GR' = 'el-GR', 'en-AE' = 'en-AE', 'en-AU' = 'en-AU', 'en-CA' = 'en-CA', 'en-GB' = 'en-GB', 'en-HK' = 'en-HK', 'en-IE' = 'en-IE', 'en-IL' = 'en-IL', 'en-IN' = 'en-IN', 'en-MY' = 'en-MY', 'en-NZ' = 'en-NZ', 'en-PH' = 'en-PH', 'en-PK' = 'en-PK', 'en-SG' = 'en-SG', 'en-US' = 'en-US', 'en-ZA' = 'en-ZA', 'es-AR' = 'es-AR', 'es-CL' = 'es-CL', 'es-CO' = 'es-CO', 'es-ES' = 'es-ES', 'es-MX' = 'es-MX', 'es-PE' = 'es-PE', 'es-US' = 'es-US', 'es-VE' = 'es-VE', 'fi-FI' = 'fi-FI', 'fr-BE' = 'fr-BE', 'fr-CA' = 'fr-CA', 'fr-CH' = 'fr-CH', 'fr-FR' = 'fr-FR', 'hi-IN' = 'hi-IN', 'id-ID' = 'id-ID', 'it-CH' = 'it-CH', 'it-IT' = 'it-IT', 'ja-JP' = 'ja-JP', 'ko-KR' = 'ko-KR', 'mr-IN' = 'mr-IN', 'nb-NO' = 'nb-NO', 'nl-BE' = 'nl-BE', 'nl-NL' = 'nl-NL', 'pl-PL' = 'pl-PL', 'pt-BR' = 'pt-BR', 'pt-PT' = 'pt-PT', 'ru-RU' = 'ru-RU', 'sv-SE' = 'sv-SE', 'ta-IN' = 'ta-IN', 'th-TH' = 'th-TH', 'tr-TR' = 'tr-TR', 'uk-UA' = 'uk-UA', 'vi-VN' = 'vi-VN', 'zh-HK' = 'zh-HK', 'zh-SG' = 'zh-SG', 'zh-TW' = 'zh-TW' }

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

