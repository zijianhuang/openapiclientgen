import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Accountsv1auth_token_promotion {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The promoted Auth Token that must be used to authenticate future API requests. */
		auth_token?: string | null;

		/** The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url?: string | null;
	}
	export interface Accountsv1auth_token_promotionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The promoted Auth Token that must be used to authenticate future API requests. */
		auth_token: FormControl<string | null | undefined>,

		/** The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountsv1auth_token_promotionFormGroup() {
		return new FormGroup<Accountsv1auth_token_promotionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			auth_token: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accountsv1credential {
	}
	export interface Accountsv1credentialFormProperties {
	}
	export function CreateAccountsv1credentialFormGroup() {
		return new FormGroup<Accountsv1credentialFormProperties>({
		});

	}

	export interface Accountsv1credentialcredential_aws {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The unique string that we created to identify the AWS resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url?: string | null;
	}
	export interface Accountsv1credentialcredential_awsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the AWS resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountsv1credentialcredential_awsFormGroup() {
		return new FormGroup<Accountsv1credentialcredential_awsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accountsv1credentialcredential_public_key {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The unique string that that we created to identify the PublicKey resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url?: string | null;
	}
	export interface Accountsv1credentialcredential_public_keyFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The unique string that that we created to identify the PublicKey resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountsv1credentialcredential_public_keyFormGroup() {
		return new FormGroup<Accountsv1credentialcredential_public_keyFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accountsv1safelist {

		/** The phone number in SafeList. */
		phone_number?: string | null;

		/**
		 * The unique string that we created to identify the SafeList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
	}
	export interface Accountsv1safelistFormProperties {

		/** The phone number in SafeList. */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the SafeList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
	}
	export function CreateAccountsv1safelistFormGroup() {
		return new FormGroup<Accountsv1safelistFormProperties>({
			phone_number: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GN[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Accountsv1secondary_auth_token {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in UTC when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The generated secondary Auth Token that can be used to authenticate future API requests. */
		secondary_auth_token?: string | null;

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url?: string | null;
	}
	export interface Accountsv1secondary_auth_tokenFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in UTC when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The generated secondary Auth Token that can be used to authenticate future API requests. */
		secondary_auth_token: FormControl<string | null | undefined>,

		/** The URI for this resource, relative to `https://accounts.twilio.com` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountsv1secondary_auth_tokenFormGroup() {
		return new FormGroup<Accountsv1secondary_auth_tokenFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			secondary_auth_token: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
		 * Post v1/AuthTokens/Promote
		 * @return {Accountsv1auth_token_promotion} OK
		 */
		UpdateAuthTokenPromotion(): Observable<Accountsv1auth_token_promotion> {
			return this.http.post<Accountsv1auth_token_promotion>(this.baseUri + 'v1/AuthTokens/Promote', null, {});
		}

		/**
		 * Delete the secondary Auth Token from your account
		 * Delete v1/AuthTokens/Secondary
		 * @return {void} 
		 */
		DeleteSecondaryAuthToken(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/AuthTokens/Secondary', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new secondary Auth Token
		 * Post v1/AuthTokens/Secondary
		 * @return {void} 
		 */
		CreateSecondaryAuthToken(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/AuthTokens/Secondary', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a collection of AWS Credentials belonging to the account used to make the request
		 * Get v1/Credentials/AWS
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListCredentialAwsReturn} OK
		 */
		ListCredentialAws(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListCredentialAwsReturn> {
			return this.http.get<ListCredentialAwsReturn>(this.baseUri + 'v1/Credentials/AWS?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a Credential from your account
		 * Delete v1/Credentials/AWS/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the AWS resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteCredentialAws(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Credentials/AWS/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the AWS credentials specified by the provided Credential Sid
		 * Get v1/Credentials/AWS/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the AWS resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Accountsv1credentialcredential_aws} OK
		 */
		FetchCredentialAws(Sid: string): Observable<Accountsv1credentialcredential_aws> {
			return this.http.get<Accountsv1credentialcredential_aws>(this.baseUri + 'v1/Credentials/AWS/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieves a collection of Public Key Credentials belonging to the account used to make the request
		 * Get v1/Credentials/PublicKeys
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListCredentialPublicKeyReturn} OK
		 */
		ListCredentialPublicKey(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListCredentialPublicKeyReturn> {
			return this.http.get<ListCredentialPublicKeyReturn>(this.baseUri + 'v1/Credentials/PublicKeys?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a Credential from your account
		 * Delete v1/Credentials/PublicKeys/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the PublicKey resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteCredentialPublicKey(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Credentials/PublicKeys/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the public key specified by the provided Credential Sid
		 * Get v1/Credentials/PublicKeys/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the PublicKey resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Accountsv1credentialcredential_public_key} OK
		 */
		FetchCredentialPublicKey(Sid: string): Observable<Accountsv1credentialcredential_public_key> {
			return this.http.get<Accountsv1credentialcredential_public_key>(this.baseUri + 'v1/Credentials/PublicKeys/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Remove a phone number from SafeList.
		 * Delete v1/SafeList/Numbers
		 * @param {string} PhoneNumber The phone number to be removed from SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
		 * @return {void} 
		 */
		DeleteSafelist(PhoneNumber: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/SafeList/Numbers?PhoneNumber=' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a phone number exists in SafeList.
		 * Get v1/SafeList/Numbers
		 * @param {string} PhoneNumber The phone number to be fetched from SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
		 * @return {Accountsv1safelist} OK
		 */
		FetchSafelist(PhoneNumber: string | null | undefined): Observable<Accountsv1safelist> {
			return this.http.get<Accountsv1safelist>(this.baseUri + 'v1/SafeList/Numbers?PhoneNumber=' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)), {});
		}
	}

	export interface ListCredentialAwsReturn {
		credentials?: Array<Accountsv1credentialcredential_aws>;
		meta?: ListCredentialAwsReturnMeta;
	}
	export interface ListCredentialAwsReturnFormProperties {
	}
	export function CreateListCredentialAwsReturnFormGroup() {
		return new FormGroup<ListCredentialAwsReturnFormProperties>({
		});

	}

	export interface ListCredentialAwsReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListCredentialAwsReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListCredentialAwsReturnMetaFormGroup() {
		return new FormGroup<ListCredentialAwsReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCredentialPublicKeyReturn {
		credentials?: Array<Accountsv1credentialcredential_public_key>;
		meta?: ListCredentialPublicKeyReturnMeta;
	}
	export interface ListCredentialPublicKeyReturnFormProperties {
	}
	export function CreateListCredentialPublicKeyReturnFormGroup() {
		return new FormGroup<ListCredentialPublicKeyReturnFormProperties>({
		});

	}

	export interface ListCredentialPublicKeyReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListCredentialPublicKeyReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListCredentialPublicKeyReturnMetaFormGroup() {
		return new FormGroup<ListCredentialPublicKeyReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

