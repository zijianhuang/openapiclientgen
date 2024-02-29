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
		 * Get estimated price
		 * This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
		 * Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.
		 * Get v1/estimate
		 * @return {GetEstimatedPriceReturn} 200
		 */
		GetEstimatedPrice(amount: string | null | undefined, currency_from: string | null | undefined, currency_to: string | null | undefined): Observable<GetEstimatedPriceReturn> {
			return this.http.get<GetEstimatedPriceReturn>(this.baseUri + 'v1/estimate?amount=' + (amount == null ? '' : encodeURIComponent(amount)) + '&currency_from=' + (currency_from == null ? '' : encodeURIComponent(currency_from)) + '&currency_to=' + (currency_to == null ? '' : encodeURIComponent(currency_to)), {});
		}

		/**
		 * Get the minimum payment amount
		 * Get the minimum payment amount for a specific pair.
		 * You can provide both currencies in the pair or just currency\_from, and we will calculate the minimum payment amount for currency\_from and currency which you have specified as the outcome in the Store Settings.
		 * You can also specify one of the fiat currencies in the currency\_from. In this case, the minimum payment will be calculated in this fiat currency.
		 * You can also add field fiat\_equivalent (optional field) to get the fiat equivalent of the minimum amount.
		 * In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.
		 * Get v1/min-amount
		 * @return {GetTheMinimumPaymentAmountReturn} 200
		 */
		GetTheMinimumPaymentAmount(currency_from: string | null | undefined, currency_to: string | null | undefined): Observable<GetTheMinimumPaymentAmountReturn> {
			return this.http.get<GetTheMinimumPaymentAmountReturn>(this.baseUri + 'v1/min-amount?currency_from=' + (currency_from == null ? '' : encodeURIComponent(currency_from)) + '&currency_to=' + (currency_to == null ? '' : encodeURIComponent(currency_to)), {});
		}

		/**
		 * Get list of payments
		 * Returns the entire list of all transactions, created with certain API key.
		 * The list of optional parameters:
		 * - limit - number of records in one page. (possible values: from 1 to 500)
		 * - page - the page number you want to get (possible values: from 0 to **page count - 1**)
		 * - sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
		 * - orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
		 * - dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
		 * - dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
		 * Get v1/payment/
		 * @return {GetListOfPaymentsReturn} 200
		 */
		GetListOfPayments(limit: string | null | undefined, page: string | null | undefined, sortBy: string | null | undefined, orderBy: string | null | undefined, dateFrom: string | null | undefined, dateTo: string | null | undefined): Observable<GetListOfPaymentsReturn> {
			return this.http.get<GetListOfPaymentsReturn>(this.baseUri + 'v1/payment/?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&dateFrom=' + (dateFrom == null ? '' : encodeURIComponent(dateFrom)) + '&dateTo=' + (dateTo == null ? '' : encodeURIComponent(dateTo)), {});
		}

		/**
		 * Get/Update payment estimate
		 * This endpoint is required to get the current estimate on the payment, and update the current estimate.
		 * Please note! Calling this estimate before `expiration_estimate_date` will return the current estimate, it won’t be updated.
		 * `:id` \- payment ID, for which you want to get the estimate
		 * Response:
		 * `id` \- payment ID
		 * `token_id` - id of api key used to create this payment (please discard this parameter)
		 * `pay_amount` - payment estimate, the exact amount the user will have to send to complete the payment
		 * `expiration_estimate_date` - expiration date of this estimate
		 * Post v1/payment/{id}/update-merchant-estimate
		 * @return {GetUpdatePaymentEstimateReturn} 200
		 */
		GetUpdatePaymentEstimate(): Observable<GetUpdatePaymentEstimateReturn> {
			return this.http.post<GetUpdatePaymentEstimateReturn>(this.baseUri + 'v1/payment/{id}/update-merchant-estimate', null, {});
		}

		/**
		 * Get payment status
		 * Get the actual information about the payment. You need to provide the ID of the payment in the request.
		 * NOTE! You should make the get payment status request with the same API key that you used in the create payment request.
		 * Here is the list of avalable statuses:
		 * - waiting - waiting for the customer to send the payment. The initial status of each payment.
		 * - confirming - the transaction is being processed on the blockchain. Appears when NOWPayments detect the funds from the user on the blockchain.
		 * - confirmed -  the process is confirmed by the blockchain. Customer’s funds have accumulated enough confirmations.
		 * - sending - the funds are being sent to your personal wallet. We are in the process of sending the funds to you.
		 * - partially_paid -  it shows that the customer sent the less than the actual price. Appears when the funds have arrived in your wallet.
		 * - finished - the funds have reached your personal address and the payment is finished.
		 * - failed -  the payment wasn't completed due to the error of some kind.
		 * - refunded -  the funds were refunded back to the user.
		 * - expired - the user didn't send the funds to the specified address in the 24 hour time window.
		 * Additional info:
		 * - outcome_amount - this parameter shows the amount that will be (or is already) received on your Outcome Wallet once the transaction is settled.
		 * - outcome_currency - this parameter shows the currency in which the transaction will be settled.
		 * - invoice_id - this parameter shows invoice ID from which the payment was created
		 * Get v1/payment/{payment_id}
		 * @return {GetPaymentStatusReturn} 200
		 */
		GetPaymentStatus(): Observable<GetPaymentStatusReturn> {
			return this.http.get<GetPaymentStatusReturn>(this.baseUri + 'v1/payment/{payment_id}', {});
		}

		/**
		 * Verify payout
		 * This method is required to verify payouts by using your 2fa code.
		 * You’ll have 10 attempts to verify the payout. If it is not verified after 10 attempts, the payout will remain in ‘creating’ status.
		 * Payout will be processed only when it is verified.
		 * Make sure to have your 2fa authentication enabled in your NOWPayments Account (in Account Settings).
		 * When 2fa is disabled, the code automatically goes to your registration email.
		 * The code sent by email is valid for one hour.
		 * Next is a description of the required request fields:
		 * - :batch-withdrawal-id - payout id you received in `2. Create payout` method
		 * - verification_code - 2fa code you received with your Google Auth app or via email
		 * In order to establish an automatic verification of payouts, you should switch 2FA through the application.
		 * There are several libraries for different frameworks aimed on generating a 2FA codes based on a secret key from your account settings.
		 * e.g: Speakeasy for JavaScript.
		 * We do not recommend to change any default settings.
		 * ```
		 * const 2faVerificationCode = speakeasy.totp({
		 * your_2fa_secret_key,
		 * encoding: 'base32',
		 * })
		 * ```
		 * Post v1/payout/{withdrawals_id}/verify
		 * @return {void} 200
		 */
		VerifyPayout(requestBody: VerifyPayoutPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/payout/{withdrawals_id}/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sub-partners
		 * This method returns the entire list of your sub-partners.
		 * Get v1/sub-partner
		 * @param {string} id int or array of int (optional)
		 * @param {string} offset (optional) default 0
		 * @param {string} limit (optional) default 10
		 * @param {string} order ASC / DESC (optional) default ASC
		 * @return {void} 
		 */
		GetSubPartners(id: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined, order: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/sub-partner?id=' + (id == null ? '' : encodeURIComponent(id)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sub-partner balance
		 * This request can be made only from a whitelisted IP.
		 * If IP whitelisting is disabled, this request can be made by any user that has an API key.
		 * Get v1/sub-partner/balance/{id}
		 * @return {GetSubPartnerBalanceReturn} 200
		 */
		GetSubPartnerBalance(): Observable<GetSubPartnerBalanceReturn> {
			return this.http.get<GetSubPartnerBalanceReturn>(this.baseUri + 'v1/sub-partner/balance/{id}', {});
		}

		/**
		 * Get transfer
		 * Get the actual information about the transfer. You need to provide the transfer ID in the request.
		 * Get v1/sub-partner/transfer/{id}
		 * @return {GetTransferReturn} 200
		 */
		GetTransfer(): Observable<GetTransferReturn> {
			return this.http.get<GetTransferReturn>(this.baseUri + 'v1/sub-partner/transfer/{id}', {});
		}

		/**
		 * Get all transfers
		 * Returns the entire list of transfers created by your sub-partners.
		 * Get v1/sub-partner/transfers
		 * @param {string} id int or array of int (optional)
		 * @param {string} status string or array of string 
		 * "WAITING"/"CREATED"/"FINISHED"/"REJECTED"
		 * (optional)
		 * @param {string} limit (optional) default 10
		 * @param {string} offset (optional) default 0
		 * @param {string} order ASC / DESC (optional) default ASC
		 * @return {GetAllTransfersReturn} 200
		 */
		GetAllTransfers(id: string | null | undefined, status: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, order: string | null | undefined): Observable<GetAllTransfersReturn> {
			return this.http.get<GetAllTransfersReturn>(this.baseUri + 'v1/sub-partner/transfers?id=' + (id == null ? '' : encodeURIComponent(id)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Get many recurring payments
		 * The method allows you to view the entire list of recurring payments filtered by payment status and/or payment plan id
		 * Get v1/subscriptions
		 * @param {string} status "WAITING_PAY" / "PAID" /  "PARTIALLY_PAID" / "EXPIRED"
		 * @param {string} is_active true / false
		 * @return {GetManyRecurringPaymentsReturn} 200
		 */
		GetManyRecurringPayments(status: string | null | undefined, subscription_plan_id: string | null | undefined, is_active: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<GetManyRecurringPaymentsReturn> {
			return this.http.get<GetManyRecurringPaymentsReturn>(this.baseUri + 'v1/subscriptions?status=' + (status == null ? '' : encodeURIComponent(status)) + '&subscription_plan_id=' + (subscription_plan_id == null ? '' : encodeURIComponent(subscription_plan_id)) + '&is_active=' + (is_active == null ? '' : encodeURIComponent(is_active)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * Get many plans
		 * This method allows you to obtain information about all the payment plans you’ve created.
		 * Get v1/subscriptions/plans
		 * @param {string} limit Number
		 * @param {string} offset Number
		 * @return {GetManyPlansReturn} 200
		 */
		GetManyPlans(limit: string | null | undefined, offset: string | null | undefined): Observable<GetManyPlansReturn> {
			return this.http.get<GetManyPlansReturn>(this.baseUri + 'v1/subscriptions/plans?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * Get one plan
		 * This method allows you to obtain information about your payment plan.
		 * (you need to specify your payment plan id in the request).
		 * Get v1/subscriptions/plans/{plan_id}
		 * @return {GetOnePlanReturn} 200
		 */
		GetOnePlan(): Observable<GetOnePlanReturn> {
			return this.http.get<GetOnePlanReturn>(this.baseUri + 'v1/subscriptions/plans/{plan_id}', {});
		}

		/**
		 * Update plan
		 * This method allows you to add necessary changes to a created plan. They won’t affect users who have already paid; however, the changes will take effect when a new payment is to be made.
		 * Patch v1/subscriptions/plans/{plan_id}
		 * @return {void} 
		 */
		UpdatePlan(requestBody: UpdatePlanPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/subscriptions/plans/{plan_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete recurring payment
		 * Completely removes a particular payment from the recurring payment plan.
		 * You need to specify the payment plan id in the request.
		 * Delete v1/subscriptions/{sub_id}
		 * @return {DeleteRecurringPaymentReturn} 200
		 */
		DeleteRecurringPayment(): Observable<DeleteRecurringPaymentReturn> {
			return this.http.delete<DeleteRecurringPaymentReturn>(this.baseUri + 'v1/subscriptions/{sub_id}', {});
		}

		/**
		 * Get one recurring payment
		 * Get information about a particular recurring payment via its ID.
		 * Here’s the list of available statuses:
		 * \- WAITING_PAY
		 * \- PAID
		 * \- PARTIALLY_PAID
		 * \- EXPIRED
		 * Get v1/subscriptions/{sub_id}
		 * @return {GetOneRecurringPaymentReturn} 200
		 */
		GetOneRecurringPayment(): Observable<GetOneRecurringPaymentReturn> {
			return this.http.get<GetOneRecurringPaymentReturn>(this.baseUri + 'v1/subscriptions/{sub_id}', {});
		}
	}

	export interface GetEstimatedPriceReturn {

		/** Type: double */
		amount_from?: number | null;
		currency_from?: string | null;
		currency_to?: string | null;

		/** Type: double */
		estimated_amount?: number | null;
	}
	export interface GetEstimatedPriceReturnFormProperties {

		/** Type: double */
		amount_from: FormControl<number | null | undefined>,
		currency_from: FormControl<string | null | undefined>,
		currency_to: FormControl<string | null | undefined>,

		/** Type: double */
		estimated_amount: FormControl<number | null | undefined>,
	}
	export function CreateGetEstimatedPriceReturnFormGroup() {
		return new FormGroup<GetEstimatedPriceReturnFormProperties>({
			amount_from: new FormControl<number | null | undefined>(undefined),
			currency_from: new FormControl<string | null | undefined>(undefined),
			currency_to: new FormControl<string | null | undefined>(undefined),
			estimated_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTheMinimumPaymentAmountReturn {
		currency_from?: string | null;
		currency_to?: string | null;

		/** Type: double */
		fiat_equivalent?: number | null;

		/** Type: double */
		min_amount?: number | null;
	}
	export interface GetTheMinimumPaymentAmountReturnFormProperties {
		currency_from: FormControl<string | null | undefined>,
		currency_to: FormControl<string | null | undefined>,

		/** Type: double */
		fiat_equivalent: FormControl<number | null | undefined>,

		/** Type: double */
		min_amount: FormControl<number | null | undefined>,
	}
	export function CreateGetTheMinimumPaymentAmountReturnFormGroup() {
		return new FormGroup<GetTheMinimumPaymentAmountReturnFormProperties>({
			currency_from: new FormControl<string | null | undefined>(undefined),
			currency_to: new FormControl<string | null | undefined>(undefined),
			fiat_equivalent: new FormControl<number | null | undefined>(undefined),
			min_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetListOfPaymentsReturn {
		GetListOfPaymentsReturnData?: Array<GetListOfPaymentsReturnData>;

		/** Type: double */
		limit?: number | null;

		/** Type: double */
		page?: number | null;

		/** Type: double */
		pagesCount?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface GetListOfPaymentsReturnFormProperties {

		/** Type: double */
		limit: FormControl<number | null | undefined>,

		/** Type: double */
		page: FormControl<number | null | undefined>,

		/** Type: double */
		pagesCount: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetListOfPaymentsReturnFormGroup() {
		return new FormGroup<GetListOfPaymentsReturnFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pagesCount: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetListOfPaymentsReturnData {

		/** Type: double */
		actually_paid?: number | null;
		order_description?: string | null;
		order_id?: string | null;

		/** Type: double */
		outcome_amount?: number | null;
		outcome_currency?: string | null;
		pay_address?: string | null;

		/** Type: double */
		pay_amount?: number | null;
		pay_currency?: string | null;

		/** Type: double */
		payment_id?: number | null;
		payment_status?: string | null;

		/** Type: double */
		price_amount?: number | null;
		price_currency?: string | null;
		purchase_id?: string | null;
	}
	export interface GetListOfPaymentsReturnDataFormProperties {

		/** Type: double */
		actually_paid: FormControl<number | null | undefined>,
		order_description: FormControl<string | null | undefined>,
		order_id: FormControl<string | null | undefined>,

		/** Type: double */
		outcome_amount: FormControl<number | null | undefined>,
		outcome_currency: FormControl<string | null | undefined>,
		pay_address: FormControl<string | null | undefined>,

		/** Type: double */
		pay_amount: FormControl<number | null | undefined>,
		pay_currency: FormControl<string | null | undefined>,

		/** Type: double */
		payment_id: FormControl<number | null | undefined>,
		payment_status: FormControl<string | null | undefined>,

		/** Type: double */
		price_amount: FormControl<number | null | undefined>,
		price_currency: FormControl<string | null | undefined>,
		purchase_id: FormControl<string | null | undefined>,
	}
	export function CreateGetListOfPaymentsReturnDataFormGroup() {
		return new FormGroup<GetListOfPaymentsReturnDataFormProperties>({
			actually_paid: new FormControl<number | null | undefined>(undefined),
			order_description: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined),
			outcome_amount: new FormControl<number | null | undefined>(undefined),
			outcome_currency: new FormControl<string | null | undefined>(undefined),
			pay_address: new FormControl<string | null | undefined>(undefined),
			pay_amount: new FormControl<number | null | undefined>(undefined),
			pay_currency: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<number | null | undefined>(undefined),
			payment_status: new FormControl<string | null | undefined>(undefined),
			price_amount: new FormControl<number | null | undefined>(undefined),
			price_currency: new FormControl<string | null | undefined>(undefined),
			purchase_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUpdatePaymentEstimateReturn {
		expiration_estimate_date?: string | null;
		id?: string | null;

		/** Type: double */
		pay_amount?: number | null;
		token_id?: string | null;
	}
	export interface GetUpdatePaymentEstimateReturnFormProperties {
		expiration_estimate_date: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: double */
		pay_amount: FormControl<number | null | undefined>,
		token_id: FormControl<string | null | undefined>,
	}
	export function CreateGetUpdatePaymentEstimateReturnFormGroup() {
		return new FormGroup<GetUpdatePaymentEstimateReturnFormProperties>({
			expiration_estimate_date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			pay_amount: new FormControl<number | null | undefined>(undefined),
			token_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPaymentStatusReturn {

		/** Type: double */
		actually_paid?: number | null;
		created_at?: string | null;
		order_description?: string | null;
		order_id?: string | null;

		/** Type: double */
		outcome_amount?: number | null;
		outcome_currency?: string | null;
		pay_address?: string | null;

		/** Type: double */
		pay_amount?: number | null;
		pay_currency?: string | null;

		/** Type: double */
		payment_id?: number | null;
		payment_status?: string | null;

		/** Type: double */
		price_amount?: number | null;
		price_currency?: string | null;
		purchase_id?: string | null;
		updated_at?: string | null;
	}
	export interface GetPaymentStatusReturnFormProperties {

		/** Type: double */
		actually_paid: FormControl<number | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		order_description: FormControl<string | null | undefined>,
		order_id: FormControl<string | null | undefined>,

		/** Type: double */
		outcome_amount: FormControl<number | null | undefined>,
		outcome_currency: FormControl<string | null | undefined>,
		pay_address: FormControl<string | null | undefined>,

		/** Type: double */
		pay_amount: FormControl<number | null | undefined>,
		pay_currency: FormControl<string | null | undefined>,

		/** Type: double */
		payment_id: FormControl<number | null | undefined>,
		payment_status: FormControl<string | null | undefined>,

		/** Type: double */
		price_amount: FormControl<number | null | undefined>,
		price_currency: FormControl<string | null | undefined>,
		purchase_id: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetPaymentStatusReturnFormGroup() {
		return new FormGroup<GetPaymentStatusReturnFormProperties>({
			actually_paid: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			order_description: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined),
			outcome_amount: new FormControl<number | null | undefined>(undefined),
			outcome_currency: new FormControl<string | null | undefined>(undefined),
			pay_address: new FormControl<string | null | undefined>(undefined),
			pay_amount: new FormControl<number | null | undefined>(undefined),
			pay_currency: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<number | null | undefined>(undefined),
			payment_status: new FormControl<string | null | undefined>(undefined),
			price_amount: new FormControl<number | null | undefined>(undefined),
			price_currency: new FormControl<string | null | undefined>(undefined),
			purchase_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyPayoutPostBody {
		verification_code?: string | null;
	}
	export interface VerifyPayoutPostBodyFormProperties {
		verification_code: FormControl<string | null | undefined>,
	}
	export function CreateVerifyPayoutPostBodyFormGroup() {
		return new FormGroup<VerifyPayoutPostBodyFormProperties>({
			verification_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSubPartnerBalanceReturn {
		result?: GetSubPartnerBalanceReturnResult;
	}
	export interface GetSubPartnerBalanceReturnFormProperties {
	}
	export function CreateGetSubPartnerBalanceReturnFormGroup() {
		return new FormGroup<GetSubPartnerBalanceReturnFormProperties>({
		});

	}

	export interface GetSubPartnerBalanceReturnResult {
		balances?: GetSubPartnerBalanceReturnResultBalances;
		subPartnerId?: string | null;
	}
	export interface GetSubPartnerBalanceReturnResultFormProperties {
		subPartnerId: FormControl<string | null | undefined>,
	}
	export function CreateGetSubPartnerBalanceReturnResultFormGroup() {
		return new FormGroup<GetSubPartnerBalanceReturnResultFormProperties>({
			subPartnerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSubPartnerBalanceReturnResultBalances {
		usddtrc20?: GetSubPartnerBalanceReturnResultBalancesUsddtrc20;
		usdtbsc?: GetSubPartnerBalanceReturnResultBalancesUsdtbsc;
	}
	export interface GetSubPartnerBalanceReturnResultBalancesFormProperties {
	}
	export function CreateGetSubPartnerBalanceReturnResultBalancesFormGroup() {
		return new FormGroup<GetSubPartnerBalanceReturnResultBalancesFormProperties>({
		});

	}

	export interface GetSubPartnerBalanceReturnResultBalancesUsddtrc20 {

		/** Type: double */
		amount?: number | null;

		/** Type: double */
		pendingAmount?: number | null;
	}
	export interface GetSubPartnerBalanceReturnResultBalancesUsddtrc20FormProperties {

		/** Type: double */
		amount: FormControl<number | null | undefined>,

		/** Type: double */
		pendingAmount: FormControl<number | null | undefined>,
	}
	export function CreateGetSubPartnerBalanceReturnResultBalancesUsddtrc20FormGroup() {
		return new FormGroup<GetSubPartnerBalanceReturnResultBalancesUsddtrc20FormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			pendingAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSubPartnerBalanceReturnResultBalancesUsdtbsc {

		/** Type: double */
		amount?: number | null;

		/** Type: double */
		pendingAmount?: number | null;
	}
	export interface GetSubPartnerBalanceReturnResultBalancesUsdtbscFormProperties {

		/** Type: double */
		amount: FormControl<number | null | undefined>,

		/** Type: double */
		pendingAmount: FormControl<number | null | undefined>,
	}
	export function CreateGetSubPartnerBalanceReturnResultBalancesUsdtbscFormGroup() {
		return new FormGroup<GetSubPartnerBalanceReturnResultBalancesUsdtbscFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			pendingAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransferReturn {
		result?: GetTransferReturnResult;
	}
	export interface GetTransferReturnFormProperties {
	}
	export function CreateGetTransferReturnFormGroup() {
		return new FormGroup<GetTransferReturnFormProperties>({
		});

	}

	export interface GetTransferReturnResult {
		amount?: string | null;
		created_at?: string | null;
		currency?: string | null;
		from_sub_id?: string | null;
		id?: string | null;
		status?: string | null;
		to_sub_id?: string | null;
		updated_at?: string | null;
	}
	export interface GetTransferReturnResultFormProperties {
		amount: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,
		from_sub_id: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		to_sub_id: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetTransferReturnResultFormGroup() {
		return new FormGroup<GetTransferReturnResultFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			from_sub_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			to_sub_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAllTransfersReturn {

		/** Type: double */
		count?: number | null;
		GetAllTransfersReturnResult?: Array<GetAllTransfersReturnResult>;
	}
	export interface GetAllTransfersReturnFormProperties {

		/** Type: double */
		count: FormControl<number | null | undefined>,
	}
	export function CreateGetAllTransfersReturnFormGroup() {
		return new FormGroup<GetAllTransfersReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAllTransfersReturnResult {
		amount?: string | null;
		created_at?: string | null;
		currency?: string | null;
		from_sub_id?: string | null;
		id?: string | null;
		status?: string | null;
		to_sub_id?: string | null;
		updated_at?: string | null;
	}
	export interface GetAllTransfersReturnResultFormProperties {
		amount: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,
		from_sub_id: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		to_sub_id: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetAllTransfersReturnResultFormGroup() {
		return new FormGroup<GetAllTransfersReturnResultFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			from_sub_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			to_sub_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetManyRecurringPaymentsReturn {

		/** Type: double */
		count?: number | null;
		GetManyRecurringPaymentsReturnResult?: Array<GetManyRecurringPaymentsReturnResult>;
	}
	export interface GetManyRecurringPaymentsReturnFormProperties {

		/** Type: double */
		count: FormControl<number | null | undefined>,
	}
	export function CreateGetManyRecurringPaymentsReturnFormGroup() {
		return new FormGroup<GetManyRecurringPaymentsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetManyRecurringPaymentsReturnResult {
		created_at?: string | null;
		expire_date?: string | null;
		id?: string | null;
		is_active?: boolean | null;
		status?: string | null;
		subscriber?: GetManyRecurringPaymentsReturnResultSubscriber;
		subscription_plan_id?: string | null;
		updated_at?: string | null;
	}
	export interface GetManyRecurringPaymentsReturnResultFormProperties {
		created_at: FormControl<string | null | undefined>,
		expire_date: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		is_active: FormControl<boolean | null | undefined>,
		status: FormControl<string | null | undefined>,
		subscription_plan_id: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetManyRecurringPaymentsReturnResultFormGroup() {
		return new FormGroup<GetManyRecurringPaymentsReturnResultFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			expire_date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_active: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscription_plan_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetManyRecurringPaymentsReturnResultSubscriber {
		email?: string | null;
		sub_partner_id?: string | null;
	}
	export interface GetManyRecurringPaymentsReturnResultSubscriberFormProperties {
		email: FormControl<string | null | undefined>,
		sub_partner_id: FormControl<string | null | undefined>,
	}
	export function CreateGetManyRecurringPaymentsReturnResultSubscriberFormGroup() {
		return new FormGroup<GetManyRecurringPaymentsReturnResultSubscriberFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			sub_partner_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetManyPlansReturn {

		/** Type: double */
		count?: number | null;
		GetManyPlansReturnResult?: Array<GetManyPlansReturnResult>;
	}
	export interface GetManyPlansReturnFormProperties {

		/** Type: double */
		count: FormControl<number | null | undefined>,
	}
	export function CreateGetManyPlansReturnFormGroup() {
		return new FormGroup<GetManyPlansReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetManyPlansReturnResult {

		/** Type: double */
		amount?: number | null;
		cancel_url?: any;
		created_at?: string | null;
		currency?: string | null;
		id?: string | null;
		interval_day?: string | null;
		ipn_callback_url?: any;
		partially_paid_url?: any;
		success_url?: any;
		title?: string | null;
		updated_at?: string | null;
	}
	export interface GetManyPlansReturnResultFormProperties {

		/** Type: double */
		amount: FormControl<number | null | undefined>,
		cancel_url: FormControl<any | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		interval_day: FormControl<string | null | undefined>,
		ipn_callback_url: FormControl<any | null | undefined>,
		partially_paid_url: FormControl<any | null | undefined>,
		success_url: FormControl<any | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetManyPlansReturnResultFormGroup() {
		return new FormGroup<GetManyPlansReturnResultFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			cancel_url: new FormControl<any | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interval_day: new FormControl<string | null | undefined>(undefined),
			ipn_callback_url: new FormControl<any | null | undefined>(undefined),
			partially_paid_url: new FormControl<any | null | undefined>(undefined),
			success_url: new FormControl<any | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOnePlanReturn {
		result?: GetOnePlanReturnResult;
	}
	export interface GetOnePlanReturnFormProperties {
	}
	export function CreateGetOnePlanReturnFormGroup() {
		return new FormGroup<GetOnePlanReturnFormProperties>({
		});

	}

	export interface GetOnePlanReturnResult {

		/** Type: double */
		amount?: number | null;
		cancel_url?: any;
		created_at?: string | null;
		currency?: string | null;
		id?: string | null;
		interval_day?: string | null;
		ipn_callback_url?: any;
		partially_paid_url?: any;
		success_url?: any;
		title?: string | null;
		updated_at?: string | null;
	}
	export interface GetOnePlanReturnResultFormProperties {

		/** Type: double */
		amount: FormControl<number | null | undefined>,
		cancel_url: FormControl<any | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		interval_day: FormControl<string | null | undefined>,
		ipn_callback_url: FormControl<any | null | undefined>,
		partially_paid_url: FormControl<any | null | undefined>,
		success_url: FormControl<any | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetOnePlanReturnResultFormGroup() {
		return new FormGroup<GetOnePlanReturnResultFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			cancel_url: new FormControl<any | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interval_day: new FormControl<string | null | undefined>(undefined),
			ipn_callback_url: new FormControl<any | null | undefined>(undefined),
			partially_paid_url: new FormControl<any | null | undefined>(undefined),
			success_url: new FormControl<any | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePlanPatchBody {

		/** Type: double */
		amount?: number | null;
		currency?: string | null;

		/** Type: double */
		interval_day?: number | null;
		title?: string | null;
	}
	export interface UpdatePlanPatchBodyFormProperties {

		/** Type: double */
		amount: FormControl<number | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/** Type: double */
		interval_day: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePlanPatchBodyFormGroup() {
		return new FormGroup<UpdatePlanPatchBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			interval_day: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRecurringPaymentReturn {
		result?: string | null;
	}
	export interface DeleteRecurringPaymentReturnFormProperties {
		result: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecurringPaymentReturnFormGroup() {
		return new FormGroup<DeleteRecurringPaymentReturnFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOneRecurringPaymentReturn {
		result?: GetOneRecurringPaymentReturnResult;
	}
	export interface GetOneRecurringPaymentReturnFormProperties {
	}
	export function CreateGetOneRecurringPaymentReturnFormGroup() {
		return new FormGroup<GetOneRecurringPaymentReturnFormProperties>({
		});

	}

	export interface GetOneRecurringPaymentReturnResult {
		created_at?: string | null;
		expire_date?: string | null;
		id?: string | null;
		is_active?: boolean | null;
		status?: string | null;
		subscriber?: GetOneRecurringPaymentReturnResultSubscriber;
		subscription_plan_id?: string | null;
		updated_at?: string | null;
	}
	export interface GetOneRecurringPaymentReturnResultFormProperties {
		created_at: FormControl<string | null | undefined>,
		expire_date: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		is_active: FormControl<boolean | null | undefined>,
		status: FormControl<string | null | undefined>,
		subscription_plan_id: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetOneRecurringPaymentReturnResultFormGroup() {
		return new FormGroup<GetOneRecurringPaymentReturnResultFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			expire_date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_active: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscription_plan_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOneRecurringPaymentReturnResultSubscriber {
		sub_partner_id?: string | null;
	}
	export interface GetOneRecurringPaymentReturnResultSubscriberFormProperties {
		sub_partner_id: FormControl<string | null | undefined>,
	}
	export function CreateGetOneRecurringPaymentReturnResultSubscriberFormGroup() {
		return new FormGroup<GetOneRecurringPaymentReturnResultSubscriberFormProperties>({
			sub_partner_id: new FormControl<string | null | undefined>(undefined),
		});

	}

}

