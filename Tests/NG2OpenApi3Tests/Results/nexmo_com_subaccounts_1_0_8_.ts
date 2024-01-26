import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Invalid Transfer */
	export interface InvalidNumberTransferErrorResponse {

		/** Required */
		detail: string;

		/** Required */
		instance: string;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}

	/** Invalid Transfer */
	export interface InvalidNumberTransferErrorResponseFormProperties {

		/** Required */
		detail: FormControl<string | null | undefined>,

		/** Required */
		instance: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInvalidNumberTransferErrorResponseFormGroup() {
		return new FormGroup<InvalidNumberTransferErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBalanceTransfersResponse {
		_embedded?: ListBalanceTransfersResponse_embedded;
	}
	export interface ListBalanceTransfersResponseFormProperties {
	}
	export function CreateListBalanceTransfersResponseFormGroup() {
		return new FormGroup<ListBalanceTransfersResponseFormProperties>({
		});

	}

	export interface ListBalanceTransfersResponse_embedded {
		balance_transfers?: Array<TransferBalanceResponse>;
	}
	export interface ListBalanceTransfersResponse_embeddedFormProperties {
	}
	export function CreateListBalanceTransfersResponse_embeddedFormGroup() {
		return new FormGroup<ListBalanceTransfersResponse_embeddedFormProperties>({
		});

	}

	export interface TransferBalanceResponse {

		/** Balance transfer amount */
		amount?: number | null;

		/** Unique balance transfer ID */
		balance_transfer_id?: string | null;

		/** The date and time when the balance transfer was executed */
		created_at?: string | null;

		/** Account the balance is transferred from */
		from?: string | null;

		/** Reference for the balance transfer */
		reference?: string | null;

		/** Account the balance is transferred to */
		to?: string | null;
	}
	export interface TransferBalanceResponseFormProperties {

		/** Balance transfer amount */
		amount: FormControl<number | null | undefined>,

		/** Unique balance transfer ID */
		balance_transfer_id: FormControl<string | null | undefined>,

		/** The date and time when the balance transfer was executed */
		created_at: FormControl<string | null | undefined>,

		/** Account the balance is transferred from */
		from: FormControl<string | null | undefined>,

		/** Reference for the balance transfer */
		reference: FormControl<string | null | undefined>,

		/** Account the balance is transferred to */
		to: FormControl<string | null | undefined>,
	}
	export function CreateTransferBalanceResponseFormGroup() {
		return new FormGroup<TransferBalanceResponseFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			balance_transfer_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCreditTransfersResponse {
		_embedded?: ListCreditTransfersResponse_embedded;
	}
	export interface ListCreditTransfersResponseFormProperties {
	}
	export function CreateListCreditTransfersResponseFormGroup() {
		return new FormGroup<ListCreditTransfersResponseFormProperties>({
		});

	}

	export interface ListCreditTransfersResponse_embedded {
		'credit-transfers'?: Array<TransferCreditResponse>;
	}
	export interface ListCreditTransfersResponse_embeddedFormProperties {
	}
	export function CreateListCreditTransfersResponse_embeddedFormGroup() {
		return new FormGroup<ListCreditTransfersResponse_embeddedFormProperties>({
		});

	}

	export interface TransferCreditResponse {

		/** Credit transfer amount */
		amount?: number | null;

		/** The date and time when the credit transfer was executed */
		created_at?: string | null;

		/** Unique credit transfer ID */
		credit_transfer_id?: string | null;

		/** Account the credit is transferred from */
		from?: string | null;

		/** Reference for the credit transfer */
		reference?: string | null;

		/** Account the credit is transferred to */
		to?: string | null;
	}
	export interface TransferCreditResponseFormProperties {

		/** Credit transfer amount */
		amount: FormControl<number | null | undefined>,

		/** The date and time when the credit transfer was executed */
		created_at: FormControl<string | null | undefined>,

		/** Unique credit transfer ID */
		credit_transfer_id: FormControl<string | null | undefined>,

		/** Account the credit is transferred from */
		from: FormControl<string | null | undefined>,

		/** Reference for the credit transfer */
		reference: FormControl<string | null | undefined>,

		/** Account the credit is transferred to */
		to: FormControl<string | null | undefined>,
	}
	export function CreateTransferCreditResponseFormGroup() {
		return new FormGroup<TransferCreditResponseFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			credit_transfer_id: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifySubaccountRequest {
		name?: string | null;
		suspended?: boolean | null;
		use_primary_account_balance?: boolean | null;
	}
	export interface ModifySubaccountRequestFormProperties {
		name: FormControl<string | null | undefined>,
		suspended: FormControl<boolean | null | undefined>,
		use_primary_account_balance: FormControl<boolean | null | undefined>,
	}
	export function CreateModifySubaccountRequestFormGroup() {
		return new FormGroup<ModifySubaccountRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			use_primary_account_balance: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NewSubaccountRequest {

		/**
		 * Required
		 * Max length: 80
		 */
		name: string;
		secret?: string | null;
		use_primary_account_balance?: boolean | null;
	}
	export interface NewSubaccountRequestFormProperties {

		/**
		 * Required
		 * Max length: 80
		 */
		name: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,
		use_primary_account_balance: FormControl<boolean | null | undefined>,
	}
	export function CreateNewSubaccountRequestFormGroup() {
		return new FormGroup<NewSubaccountRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80)]),
			secret: new FormControl<string | null | undefined>(undefined),
			use_primary_account_balance: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Shortcode Not Found */
	export interface ShortcodeNotFound {

		/** Required */
		detail: string;

		/** Required */
		instance: string;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}

	/** Shortcode Not Found */
	export interface ShortcodeNotFoundFormProperties {

		/** Required */
		detail: FormControl<string | null | undefined>,

		/** Required */
		instance: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateShortcodeNotFoundFormGroup() {
		return new FormGroup<ShortcodeNotFoundFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubaccountCreateResponse {
	}
	export interface SubaccountCreateResponseFormProperties {
	}
	export function CreateSubaccountCreateResponseFormGroup() {
		return new FormGroup<SubaccountCreateResponseFormProperties>({
		});

	}

	export interface SubaccountResponse {

		/** Unique subaccount ID. */
		api_key?: string | null;

		/** Balance of the subAccount. Value is null if balance is shared with primary account. */
		balance?: number | null;

		/** Subaccount creation date and time. */
		created_at?: string | null;

		/** Credit limit of the subAccount. Value is null if balance is shared with primary account. */
		credit_limit?: number | null;

		/** Name of the subaccount. */
		name?: string | null;

		/** Unique primary account ID. */
		primary_account_api_key?: string | null;

		/** Subaccount suspension status. */
		suspended?: boolean | null;

		/** Flag showing if balance is shared with primary account. */
		use_primary_account_balance?: boolean | null;
	}
	export interface SubaccountResponseFormProperties {

		/** Unique subaccount ID. */
		api_key: FormControl<string | null | undefined>,

		/** Balance of the subAccount. Value is null if balance is shared with primary account. */
		balance: FormControl<number | null | undefined>,

		/** Subaccount creation date and time. */
		created_at: FormControl<string | null | undefined>,

		/** Credit limit of the subAccount. Value is null if balance is shared with primary account. */
		credit_limit: FormControl<number | null | undefined>,

		/** Name of the subaccount. */
		name: FormControl<string | null | undefined>,

		/** Unique primary account ID. */
		primary_account_api_key: FormControl<string | null | undefined>,

		/** Subaccount suspension status. */
		suspended: FormControl<boolean | null | undefined>,

		/** Flag showing if balance is shared with primary account. */
		use_primary_account_balance: FormControl<boolean | null | undefined>,
	}
	export function CreateSubaccountResponseFormGroup() {
		return new FormGroup<SubaccountResponseFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			credit_limit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primary_account_api_key: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			use_primary_account_balance: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SubaccountsAllResponse {
		_embedded?: SubaccountsAllResponse_embedded;
	}
	export interface SubaccountsAllResponseFormProperties {
	}
	export function CreateSubaccountsAllResponseFormGroup() {
		return new FormGroup<SubaccountsAllResponseFormProperties>({
		});

	}

	export interface SubaccountsAllResponse_embedded {
		primary_account?: SubaccountResponse;
		subaccounts?: Array<SubaccountResponse>;
	}
	export interface SubaccountsAllResponse_embeddedFormProperties {
	}
	export function CreateSubaccountsAllResponse_embeddedFormGroup() {
		return new FormGroup<SubaccountsAllResponse_embeddedFormProperties>({
		});

	}

	export interface TransferBalanceOrCreditRequest {

		/** Required */
		amount: number;

		/** Required */
		from: string;
		reference?: string | null;

		/** Required */
		to: string;
	}
	export interface TransferBalanceOrCreditRequestFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,
		reference: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,
	}
	export function CreateTransferBalanceOrCreditRequestFormGroup() {
		return new FormGroup<TransferBalanceOrCreditRequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransferNumberRequest {
		country?: string | null;
		from?: string | null;
		number?: number | null;
		to?: string | null;
	}
	export interface TransferNumberRequestFormProperties {
		country: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateTransferNumberRequestFormGroup() {
		return new FormGroup<TransferNumberRequestFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransferNumberResponse {

		/** The two character country code in ISO 3166-1 alpha-2 format */
		country?: string | null;

		/** Account the number is transferred from */
		from?: string | null;

		/** Number transfered */
		number?: string | null;

		/** Account the number is transferred to */
		to?: string | null;
	}
	export interface TransferNumberResponseFormProperties {

		/** The two character country code in ISO 3166-1 alpha-2 format */
		country: FormControl<string | null | undefined>,

		/** Account the number is transferred from */
		from: FormControl<string | null | undefined>,

		/** Number transfered */
		number: FormControl<string | null | undefined>,

		/** Account the number is transferred to */
		to: FormControl<string | null | undefined>,
	}
	export function CreateTransferNumberResponseFormGroup() {
		return new FormGroup<TransferNumberResponseFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Unprovisioned */
	export interface UnprovisionedErrorResponse {

		/** Required */
		detail: string;

		/** Required */
		instance: string;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}

	/** Unprovisioned */
	export interface UnprovisionedErrorResponseFormProperties {

		/** Required */
		detail: FormControl<string | null | undefined>,

		/** Required */
		instance: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUnprovisionedErrorResponseFormGroup() {
		return new FormGroup<UnprovisionedErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve list of balance transfers
		 * Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.
		 * Get {api_key}/balance-transfers
		 * @param {string} api_key ID of the primary account.
		 * @param {string} start_date Start of the retrieval period.
		 * @param {string} end_date End of the retrieval period. If absent then all transfers until now is returned.
		 * @param {string} subaccount Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts
		 * @return {ListBalanceTransfersResponse} List balance transfers response
		 */
		RetrieveBalanceTransfers(api_key: string, start_date: string, end_date: string | null | undefined, subaccount: string | null | undefined): Observable<ListBalanceTransfersResponse> {
			return this.http.get<ListBalanceTransfersResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/balance-transfers&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&subaccount=' + (subaccount == null ? '' : encodeURIComponent(subaccount)) + '', {});
		}

		/**
		 * Transfer balance
		 * Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.
		 * Post {api_key}/balance-transfers
		 * @param {string} api_key ID of the primary account
		 * @return {TransferBalanceResponse} Balance transfer response
		 */
		TransferBalance(api_key: string, requestBody: TransferBalanceOrCreditRequest): Observable<TransferBalanceResponse> {
			return this.http.post<TransferBalanceResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/balance-transfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve list of credit transfers
		 * Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.
		 * Get {api_key}/credit-transfers
		 * @param {string} api_key ID of the primary account.
		 * @param {string} start_date Start of the retrieval period.
		 * @param {string} end_date End of the retrieval period. If absent then all transfers until now is returned.
		 * @param {string} subaccount Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts
		 * @return {ListCreditTransfersResponse} List credit transfers response
		 */
		RetrieveCreditTransfers(api_key: string, start_date: string, end_date: string | null | undefined, subaccount: string | null | undefined): Observable<ListCreditTransfersResponse> {
			return this.http.get<ListCreditTransfersResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/credit-transfers&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&subaccount=' + (subaccount == null ? '' : encodeURIComponent(subaccount)) + '', {});
		}

		/**
		 * Transfer credit
		 * Transfer credit limit between a primary account and one of its subaccounts.
		 * Post {api_key}/credit-transfers
		 * @param {string} api_key ID of the primary account
		 * @return {TransferCreditResponse} Credit transfer response
		 */
		TransferCredit(api_key: string, requestBody: TransferBalanceOrCreditRequest): Observable<TransferCreditResponse> {
			return this.http.post<TransferCreditResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/credit-transfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve list of subaccounts
		 * Get the information of all the subaccounts owned by the primary account.
		 * Get {api_key}/subaccounts
		 * @param {string} api_key ID of the primary account
		 * @return {SubaccountsAllResponse} Subaccounts response
		 */
		RetrieveSubaccountsList(api_key: string): Observable<SubaccountsAllResponse> {
			return this.http.get<SubaccountsAllResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/subaccounts', {});
		}

		/**
		 * Create subaccount
		 * Create a subaccount for a given primary account.
		 * Post {api_key}/subaccounts
		 * @param {string} api_key ID of the primary account
		 * @return {SubaccountCreateResponse} Subaccount response
		 */
		CreateSubAccount(api_key: string, requestBody: NewSubaccountRequest): Observable<SubaccountCreateResponse> {
			return this.http.post<SubaccountCreateResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/subaccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a subaccount
		 * Get the information of a subaccount specified with its API key.
		 * Get {api_key}/subaccounts/{subaccount_key}
		 * @param {string} api_key ID of the primary account
		 * @param {string} subaccount_key ID of the subaccount
		 * @return {SubaccountResponse} Subaccount response
		 */
		RetrieveSubaccount(api_key: string, subaccount_key: string): Observable<SubaccountResponse> {
			return this.http.get<SubaccountResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/subaccounts/' + (subaccount_key == null ? '' : encodeURIComponent(subaccount_key)) + '', {});
		}

		/**
		 * Modify a subaccount
		 * Change one or more properties of a subaccount.
		 * Patch {api_key}/subaccounts/{subaccount_key}
		 * @param {string} api_key ID of the primary account
		 * @param {string} subaccount_key ID of the subaccount
		 * @return {SubaccountResponse} Subaccount response
		 */
		ModifySubaccount(api_key: string, subaccount_key: string, requestBody: ModifySubaccountRequest): Observable<SubaccountResponse> {
			return this.http.patch<SubaccountResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/subaccounts/' + (subaccount_key == null ? '' : encodeURIComponent(subaccount_key)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Transfer number
		 * Transfer number from one account to another.
		 * Post {api_key}/transfer-number
		 * @param {string} api_key ID of the primary account.
		 * @return {TransferNumberResponse} Number transfer response
		 */
		TransferNumber(api_key: string, requestBody: TransferNumberRequest): Observable<TransferNumberResponse> {
			return this.http.post<TransferNumberResponse>(this.baseUri + (api_key == null ? '' : encodeURIComponent(api_key)) + '/transfer-number', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

