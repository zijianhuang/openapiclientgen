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
		 * List all fire.com Accounts
		 * Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
		 * Get v1/accounts
		 * @return {GetAccountsReturn} An array of account objects.
		 */
		GetAccounts(): Observable<GetAccountsReturn> {
			return this.http.get<GetAccountsReturn>(this.baseUri + 'v1/accounts', {});
		}

		/**
		 * Add a new account
		 * Creates a new fire.com account.
		 * **Please note there is a charge associated with creating a new account.**
		 * Post v1/accounts
		 * @param {AddAccountPostBody} requestBody Details of the new account
		 * @return {void} 
		 */
		AddAccount(requestBody: AddAccountPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the details of a fire.com Account
		 * You can retrieve the details of a fire.com Account by its `ican`.
		 * Get v1/accounts/{ican}
		 * @return {GetAccountByIdReturn} An array of account objects.
		 */
		GetAccountById(ican: number): Observable<GetAccountByIdReturn> {
			return this.http.get<GetAccountByIdReturn>(this.baseUri + 'v1/accounts/' + ican, {});
		}

		/**
		 * List transactions for an account (v1)
		 * Retrieve a list of transactions against an account. Recommended to use the v3 endpoint instead.
		 * Get v1/accounts/{ican}/transactions
		 * @return {GetTransactionsByAccountIdv1Return} An array of transaction objects for the account with a count (`total`).
		 */
		GetTransactionsByAccountIdv1(ican: number, limit: number, offset: number): Observable<GetTransactionsByAccountIdv1Return> {
			return this.http.get<GetTransactionsByAccountIdv1Return>(this.baseUri + 'v1/accounts/' + ican + '/transactions?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Filtered list of transactions for an account (v1)
		 * Retrieve a filtered list of transactions against an account. Recommended to use the v3 endpoint instead.
		 * * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
		 * * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
		 * * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
		 * * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `offset` - The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.
		 * Get v1/accounts/{ican}/transactions/filter
		 * @return {GetTransactionsByAccountIdFilteredReturn} An array of transaction objects for the account with a count (`total`) filtered by the specified query parameter.
		 */
		GetTransactionsByAccountIdFiltered(ican: number, dateRangeFrom: number, dateRangeTo: number, searchKeyword: string, transactionTypes: Array<string>, offset: number): Observable<GetTransactionsByAccountIdFilteredReturn> {
			return this.http.get<GetTransactionsByAccountIdFilteredReturn>(this.baseUri + 'v1/accounts/' + ican + '/transactions/filter?dateRangeFrom=' + dateRangeFrom + '&dateRangeTo=' + dateRangeTo + '&searchKeyword=' + (searchKeyword == null ? '' : encodeURIComponent(searchKeyword)) + '&' + transactionTypes.map(z => `transactionTypes=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset, {});
		}

		/**
		 * Create a new API Application
		 * Create a new API Application with specified permissions
		 * Post v1/apps
		 * @param {CreateApiApplicationPostBody} requestBody Details of the new API Application
		 * @return {CreateApiApplicationReturn} API Application created successfully
		 */
		CreateApiApplication(requestBody: CreateApiApplicationPostBody): Observable<CreateApiApplicationReturn> {
			return this.http.post<CreateApiApplicationReturn>(this.baseUri + 'v1/apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authenticate with the API.
		 * Access to the API is by Bearer Tokens. The process is somewhat similar to OAuth2.0, but with some changes to improve security.
		 * 1. You must first log into the firework online application and create a new Application in the Profile > API page. (You will need your PIN digits and 2-Factor Authentication device).
		 * 2. Give your application a Name and select the scope/permissions you need the application to have (more on Scopes below).
		 * 3. You will be provided with three pieces of information - the App Refresh Token, Client ID and Client Key. You need to take note of the Client Key when it is displayed - it will not be shown again.
		 * You now use these pieces of data to retrieve a short-term Access Token which you can use to access the API. The Access Token expires within a relatively short time, so even if it is compromised, the attacker will not have long to use it. The Client Key is the most important piece of information to keep secret. This should only ever be stored on a backend server, and never in a front end client or mobile app.
		 * **If you ever accidentally reveal the Client Key (or accidentally commit it to Github for instance) it is vital that you log into firework online and delete/recreate the App Tokens as soon as possible. Anyone who has these three pieces of data can access the API to view your data and set up payments from your account (depending on the scope of the tokens).**
		 * Once you have the access token, pass it as a header for every call, like so:
		 * `Authorization: Bearer $ACCESS_TOKEN`
		 * Whenever it expires, create a new nonce and get a new access token again.
		 * Post v1/apps/accesstokens
		 * @param {AuthenticatePostBody} requestBody Authentication data
		 * @return {AuthenticateReturn} Successfully authenticated
		 */
		Authenticate(requestBody: AuthenticatePostBody): Observable<AuthenticateReturn> {
			return this.http.post<AuthenticateReturn>(this.baseUri + 'v1/apps/accesstokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get list of ASPSPs / Banks
		 * Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
		 * ***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***
		 * Get v1/aspsps
		 * @param {string} currency The three letter code for the currency - either `EUR` or `GBP`. Use this to filter the list for banks that can be used to pay in a certain currency.
		 * @return {GetListOfAspspsReturn} A list of ASPSPs the customers can use to pay a payment.
		 */
		GetListOfAspsps(currency: string | null | undefined): Observable<GetListOfAspspsReturn> {
			return this.http.get<GetListOfAspspsReturn>(this.baseUri + 'v1/aspsps?currency=' + (currency == null ? '' : encodeURIComponent(currency)), {});
		}

		/**
		 * List batches
		 * Returns the list of batch with the specified types and statuses.
		 * Get v1/batches
		 * @return {GetBatchesReturn} List all batches.
		 */
		GetBatches(batchStatus: GetBatchesBatchStatus | null | undefined, batchTypes: GetBatchesBatchTypes | null | undefined, orderBy: GetBatchesOrderBy | null | undefined, order: GetBatchesOrder | null | undefined): Observable<GetBatchesReturn> {
			return this.http.get<GetBatchesReturn>(this.baseUri + 'v1/batches?batchStatus=' + batchStatus + '&batchTypes=' + batchTypes + '&orderBy=' + orderBy + '&order=' + order, {});
		}

		/**
		 * Create a new batch of payments
		 * The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.
		 * For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.
		 * The process is as follows:
		 * **1.**Create a new batch
		 * **2.**Add payments to the batch
		 * **3.**Submit the batch for approval
		 * Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.
		 * **Batch Life Cycle Events**
		 * A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.
		 * The following events are triggered during a batch:
		 * **batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.
		 * **batch.item-added:** Details of the item added to the batch
		 * **batch.item-removed:** Details of the item removed from the batch
		 * **batch.cancelled:** Notifies that the batch was cancelled.
		 * **batch.submitted:** Notifes that the batch was submitted
		 * **batch.approved:** Notifies that the batch was approved.
		 * **batch.rejected:** Notifies that the batch was rejected.
		 * **batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)
		 * **batch.completed:** Notifies that the batch completed successfully. Includes a summary.
		 * Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.
		 * This is the first step in creating a batch payment.
		 * Post v1/batches
		 * @param {CreateBatchPaymentPostBody} requestBody Details of the batch payment
		 * @return {CreateBatchPaymentReturn} Batch created successfully
		 */
		CreateBatchPayment(requestBody: CreateBatchPaymentPostBody): Observable<CreateBatchPaymentReturn> {
			return this.http.post<CreateBatchPaymentReturn>(this.baseUri + 'v1/batches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel a batch
		 * Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
		 * Delete v1/batches/{batchUuid}
		 * @return {void} Batch payment deleted successfully.
		 */
		CancelBatchPayment(batchUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details of a single Batch
		 * Returns the details of the batch specified in the API endpoint - {batchUuid}.
		 * Get v1/batches/{batchUuid}
		 * @return {GetDetailsSingleBatchReturn} Returns the details of the batch specified in the API endpoint - {batchUuid}.
		 */
		GetDetailsSingleBatch(batchUuid: string): Observable<GetDetailsSingleBatchReturn> {
			return this.http.get<GetDetailsSingleBatchReturn>(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)), {});
		}

		/**
		 * Submit a batch for approval
		 * Submits the Batch (for approval in the case of a **BANK_TRANSFER** or **INTERNATIONAL_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** or **INTERNATIONAL_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
		 * You can only submit a batch while it is in the OPEN state.
		 * Put v1/batches/{batchUuid}
		 * @return {void} 
		 */
		SubmitBatch(batchUuid: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Approvers for a Batch
		 * Returns a list of approvers for this batch.
		 * Get v1/batches/{batchUuid}/approvals
		 * @return {GetListofApproversForBatchReturn} A list of approvers for this batch.
		 */
		GetListofApproversForBatch(batchUuid: string): Observable<GetListofApproversForBatchReturn> {
			return this.http.get<GetListofApproversForBatchReturn>(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/approvals', {});
		}

		/**
		 * List items in a Batch (Bank Transfers)
		 * Returns a paginated list of items in the specified batch.
		 * Get v1/batches/{batchUuid}/banktransfers
		 * @return {GetItemsBatchBankTransferReturn} A fire.com list object of Batch Items (Internal transfers or Bank transfers).
		 */
		GetItemsBatchBankTransfer(batchUuid: string, offset: number | null | undefined, limit: number | null | undefined): Observable<GetItemsBatchBankTransferReturn> {
			return this.http.get<GetItemsBatchBankTransferReturn>(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/banktransfers&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Add a bank transfer payment to the batch.
		 * There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
		 * **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
		 * **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
		 * Post v1/batches/{batchUuid}/banktransfers
		 * @param {AddBankTransferBatchPaymentPostBody} requestBody Details of **Mode 1** & **Mode 2**.
		 * @return {AddBankTransferBatchPaymentReturn} Batch payment added successfully. **Note*** Please use batchUuid when submitting a batch, not batchItemUuid.
		 */
		AddBankTransferBatchPayment(batchUuid: string, requestBody: AddBankTransferBatchPaymentPostBody): Observable<AddBankTransferBatchPaymentReturn> {
			return this.http.post<AddBankTransferBatchPaymentReturn>(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/banktransfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a Payment from the Batch (Bank Transfers)
		 * Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
		 * Delete v1/batches/{batchUuid}/banktransfers/{itemUuid}
		 * @return {void} Batch payment deleted successfully.
		 */
		DeleteBankTransferBatchPayment(batchUuid: string, itemUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/banktransfers/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List items in a Batch (Internal Transfers)
		 * Returns a paginated list of items in the specified batch.
		 * Get v1/batches/{batchUuid}/internaltransfers
		 * @return {GetItemsBatchInternalTrasnferReturn} A fire.com list object of Batch Items (Internal transfers or Bank transfers).
		 */
		GetItemsBatchInternalTrasnfer(batchUuid: string, offset: number | null | undefined, limit: number | null | undefined): Observable<GetItemsBatchInternalTrasnferReturn> {
			return this.http.get<GetItemsBatchInternalTrasnferReturn>(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/internaltransfers&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Add an internal transfer payment to the batch
		 * Simply specify the source account, destination account, amount and a reference.
		 * Post v1/batches/{batchUuid}/internaltransfers
		 * @param {AddInternalTransferBatchPaymentPostBody} requestBody Details of the source account, destination account, amount and a reference.
		 * @return {AddInternalTransferBatchPaymentReturn} Batch payment added successfully. Note* Please use batchUuid when submitting a batch, not batchItemUuid.
		 */
		AddInternalTransferBatchPayment(batchUuid: string, requestBody: AddInternalTransferBatchPaymentPostBody): Observable<AddInternalTransferBatchPaymentReturn> {
			return this.http.post<AddInternalTransferBatchPaymentReturn>(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/internaltransfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a Payment from the Batch (Internal Transfer)
		 * Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
		 * Delete v1/batches/{batchUuid}/internaltransfers/{itemUuid}
		 * @return {void} Batch payment deleted successfully.
		 */
		DeleteInternalTransferBatchPayment(batchUuid: string, itemUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/internaltransfers/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * View List of Cards.
		 * Returns a list of cards related to your fire.com account.
		 * Get v1/cards
		 * @return {GetListofCardsReturn} Successful response
		 */
		GetListofCards(): Observable<GetListofCardsReturn> {
			return this.http.get<GetListofCardsReturn>(this.baseUri + 'v1/cards', {});
		}

		/**
		 * Create a new debit card.
		 * You can create multiple debit cards which can be linked to your fire.com accounts.
		 * Post v1/cards
		 * @param {CreateNewCardPostBody} requestBody Details of the new card
		 * @return {CreateNewCardReturn} Card created successfully
		 */
		CreateNewCard(requestBody: CreateNewCardPostBody): Observable<CreateNewCardReturn> {
			return this.http.post<CreateNewCardReturn>(this.baseUri + 'v1/cards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Block a card
		 * Updates status of an existing card to block which prevents any transactions being carried out with that card.
		 * Post v1/cards/{cardId}/block
		 * @return {void} 
		 */
		BlockCard(cardId: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/cards/' + cardId + '/block', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Card Transactions.
		 * Returns a list of cards transactions related to your fire.com card.
		 * Get v1/cards/{cardId}/transactions
		 * @return {Array<GetListofCardTransactionsReturn>} Successful response
		 */
		GetListofCardTransactions(cardId: number, limit: number | null | undefined, offset: number | null | undefined): Observable<Array<GetListofCardTransactionsReturn>> {
			return this.http.get<Array<GetListofCardTransactionsReturn>>(this.baseUri + 'v1/cards/' + cardId + '/transactions?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Unblock a card
		 * Updates status of an existing card to unblock which means that transactions can be carried out with that card.
		 * Post v1/cards/{cardId}/unblock
		 * @return {void} 
		 */
		UnblockCard(cardId: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/cards/' + cardId + '/unblock', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all DD payments associated with a direct debit mandate
		 * Retrieve all direct debit payments associated with a direct debit mandate.
		 * The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
		 * Get v1/directdebits
		 * @param {string} mandateUuid The mandate UUID to retrieve
		 * @return {GetDirectDebitsForMandateUuidReturn} Retrieve all direct debit payments associated with a direct debit mandate.
		 */
		GetDirectDebitsForMandateUuid(mandateUuid: string): Observable<GetDirectDebitsForMandateUuidReturn> {
			return this.http.get<GetDirectDebitsForMandateUuidReturn>(this.baseUri + 'v1/directdebits?mandateUuid=' + (mandateUuid == null ? '' : encodeURIComponent(mandateUuid)), {});
		}

		/**
		 * Get the details of a direct debit
		 * Retrieve all details of a single direct debit collection/payment, whether successful or not.
		 * The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
		 * Get v1/directdebits/{directDebitUuid}
		 * @return {GetDirectDebitByUuidReturn} Retrieve all details of a single direct debit collection/payment
		 */
		GetDirectDebitByUuid(directDebitUuid: string): Observable<GetDirectDebitByUuidReturn> {
			return this.http.get<GetDirectDebitByUuidReturn>(this.baseUri + 'v1/directdebits/' + (directDebitUuid == null ? '' : encodeURIComponent(directDebitUuid)), {});
		}

		/**
		 * Reject a direct debit payment
		 * This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
		 * Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
		 * Post v1/directdebits/{directDebitUuid}/reject
		 * @return {void} 
		 */
		RejectDirectDebit(directDebitUuid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/directdebits/' + (directDebitUuid == null ? '' : encodeURIComponent(directDebitUuid)) + '/reject', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all direct debit mandates
		 * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
		 * Get v1/mandates
		 * @return {GetDirectDebitMandatesReturn} List all direct debit mandates.
		 */
		GetDirectDebitMandates(): Observable<GetDirectDebitMandatesReturn> {
			return this.http.get<GetDirectDebitMandatesReturn>(this.baseUri + 'v1/mandates', {});
		}

		/**
		 * Get direct debit mandate details
		 * Retrieve all details for a direct debit mandate.
		 * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
		 * Get v1/mandates/{mandateUuid}
		 * @return {GetMandateReturn} Retrieve all details for a direct debit mandate.
		 */
		GetMandate(mandateUuid: string): Observable<GetMandateReturn> {
			return this.http.get<GetMandateReturn>(this.baseUri + 'v1/mandates/' + (mandateUuid == null ? '' : encodeURIComponent(mandateUuid)), {});
		}

		/**
		 * Update a direct debit mandate alias
		 * Update Direct Debit Mandate Alias
		 * The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
		 * Post v1/mandates/{mandateUuid}
		 * @return {void} 
		 */
		UpdateMandateAlias(mandateUuid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/mandates/' + (mandateUuid == null ? '' : encodeURIComponent(mandateUuid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate a direct debit mandate
		 * This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
		 * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
		 * Post v1/mandates/{mandateUuid}/activate
		 * @return {void} 
		 */
		ActivateMandate(mandateUuid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/mandates/' + (mandateUuid == null ? '' : encodeURIComponent(mandateUuid)) + '/activate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel a direct debit mandate
		 * This endpoint allows you to cancel a direct debit mandate.
		 * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
		 * Post v1/mandates/{mandateUuid}/cancel
		 * @return {void} 
		 */
		CancelMandateByUuid(mandateUuid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/mandates/' + (mandateUuid == null ? '' : encodeURIComponent(mandateUuid)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all Payee Bank Accounts
		 * Returns all your payee bank accounts.
		 * Ordered by payee name ascending.
		 * Can be paginated.
		 * Get v1/payees
		 * @return {GetPayeesReturn} An array of Payee Bank Accounts
		 */
		GetPayees(): Observable<GetPayeesReturn> {
			return this.http.get<GetPayeesReturn>(this.baseUri + 'v1/payees', {});
		}

		/**
		 * Create a Fire Open Payment request
		 * Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.
		 * To set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.
		 * Consumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.
		 * The funds are settled into your fire.com account, fully reconciled, with your specified fields provided.
		 * There are two implementation options you can use to display payment pages with Fire Open Payments.
		 * 1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.
		 * 2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.
		 * ## Hosted Payment Pages Option
		 * ![Image](https://fire.com/docs/images/fop-hosted-flow.png)
		 * The payer is brought through 5 stages to complete the payment:
		 * 1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.
		 * 2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.
		 * 3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.
		 * 4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.
		 * 5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.
		 * To implement the hosted Fire Open Payments option you need to do the following:
		 * 1. You can create a new Fire Open Payment request either within Firework Online or via the API.
		 * 2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:
		 * - “Create a Payment Request”
		 * - “Get Payment Details”
		 * 3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.
		 * 4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.
		 * 5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.
		 * 6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.
		 * 7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.
		 * 8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.
		 * 9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.
		 * Once the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`
		 * This request creates a new Fire Open Payment Payment. A code is returned that can be shared to your customers as a URL by any channel you wish.
		 * You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.
		 * Post v1/paymentrequests
		 * @param {NewPaymentRequestPostBody} requestBody Details of the new payment request
		 * @return {NewPaymentRequestReturn} Payment Request created successfully
		 */
		NewPaymentRequest(requestBody: NewPaymentRequestPostBody): Observable<NewPaymentRequestReturn> {
			return this.http.post<NewPaymentRequestReturn>(this.baseUri + 'v1/paymentrequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Payment Details
		 * Returns the details of a specific payment.
		 * As the customer goes through the process of making the payment the status of the payment will change.
		 * * `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
		 * * `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
		 * * `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
		 * * `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
		 * * `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
		 * * `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.
		 * You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.
		 * Get v1/payments/{paymentUuid}
		 * @return {GetPaymentDetailsReturn} The Payment Request details object
		 */
		GetPaymentDetails(paymentUuid: string): Observable<GetPaymentDetailsReturn> {
			return this.http.get<GetPaymentDetailsReturn>(this.baseUri + 'v1/payments/' + (paymentUuid == null ? '' : encodeURIComponent(paymentUuid)), {});
		}

		/**
		 * Returns details of a specific fire.com user.
		 * You can retrieve the details of a specific fire.com user
		 * Get v1/user/{userId}
		 * @return {GetUserReturn} Unique information about a User.
		 */
		GetUser(userId: number): Observable<GetUserReturn> {
			return this.http.get<GetUserReturn>(this.baseUri + 'v1/user/' + userId, {});
		}

		/**
		 * Returns list of all users on your fire.com account
		 * You can retrieve the details of all fire.com users on your acount.
		 * Get v1/users
		 * @return {Array<GetUsersReturn>} List of all Users.
		 */
		GetUsers(): Observable<Array<GetUsersReturn>> {
			return this.http.get<Array<GetUsersReturn>>(this.baseUri + 'v1/users', {});
		}

		/**
		 * List items in a Batch (International Transfers)
		 * Returns a paginated list of items in the specified batch.
		 * Get v2/batches/{batchUuid}/internationaltransfers
		 * @return {GetItemsBatchInternationalTransferReturn} A fire.com list object of Batch Items (Internal transfers, Bank transfers or International transfers).
		 */
		GetItemsBatchInternationalTransfer(batchUuid: string, offset: number | null | undefined, limit: number | null | undefined): Observable<GetItemsBatchInternationalTransferReturn> {
			return this.http.get<GetItemsBatchInternationalTransferReturn>(this.baseUri + 'v2/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/internationaltransfers&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Add an international transfer payment to the batch.
		 * International transfers must be added to a batch using the Payee ID (**Mode 1**). Payees must be set up using the web application.
		 * **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
		 * Post v2/batches/{batchUuid}/internationaltransfers
		 * @param {AddInternationalTransferBatchPaymentPostBody} requestBody Details of **Mode 1**
		 * @return {AddInternationalTransferBatchPaymentReturn} Batch payment added successfully. **Note*** Please use batchUuid when submitting a batch, not batchItemUuid.
		 */
		AddInternationalTransferBatchPayment(batchUuid: string, requestBody: AddInternationalTransferBatchPaymentPostBody): Observable<AddInternationalTransferBatchPaymentReturn> {
			return this.http.post<AddInternationalTransferBatchPaymentReturn>(this.baseUri + 'v2/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/internationaltransfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a Payment from the Batch (International Transfers)
		 * Removes a Payment from the Batch (International Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
		 * Delete v2/batches/{batchUuid}/internationaltransfers/{itemUuid}
		 * @return {void} Batch payment deleted successfully.
		 */
		DeleteInternationalTransferBatchPayment(batchUuid: string, itemUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/batches/' + (batchUuid == null ? '' : encodeURIComponent(batchUuid)) + '/internationaltransfers/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List transactions for an account (v3)
		 * Retrieve a list of transactions against an account. Initially, use the optional `limit`, `dateRangeFrom` and `dateRangeTo` query params to limit your query, then use the embedded `next` or `prev` links in the response to get newer or older pages.
		 * Get v3/accounts/{ican}/transactions
		 * @return {GetTransactionsByAccountIdv3Return} An array of transaction objects for the account with a count (`total`).
		 */
		GetTransactionsByAccountIdv3(ican: number, limit: number | null | undefined, dateRangeFrom: number | null | undefined, dateRangeTo: number | null | undefined, startAfter: string | null | undefined): Observable<GetTransactionsByAccountIdv3Return> {
			return this.http.get<GetTransactionsByAccountIdv3Return>(this.baseUri + 'v3/accounts/' + ican + '/transactions?limit=' + limit + '&dateRangeFrom=' + dateRangeFrom + '&dateRangeTo=' + dateRangeTo + '&startAfter=' + (startAfter == null ? '' : encodeURIComponent(startAfter)), {});
		}
	}

	export interface GetAccountsReturn {
		GetAccountsReturnAccounts?: Array<GetAccountsReturnAccounts>;
	}
	export interface GetAccountsReturnFormProperties {
	}
	export function CreateGetAccountsReturnFormGroup() {
		return new FormGroup<GetAccountsReturnFormProperties>({
		});

	}

	export interface GetAccountsReturnAccounts {

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance?: number | null;

		/** the BIC of the account (provided if currency is EUR). */
		cbic?: string | null;

		/** the Account Number of the account. */
		ccan?: string | null;

		/** the IBAN of the account (provided if currency is EUR). */
		ciban?: string | null;

		/** the Sort Code of the account. */
		cnsc?: string | null;

		/** Internal Use */
		colour?: string | null;

		/** The currency. */
		currency?: GetAccountsReturnAccountsCurrency;

		/** true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees). */
		defaultAccount?: boolean | null;

		/** Whether or not direct debits can be set up on this account. */
		directDebitsAllowed?: boolean | null;

		/** Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned. */
		fopOnly?: boolean | null;

		/** identifier for the fire.com account (assigned by fire.com) */
		ican?: number | null;

		/** the name the user gives to the account to help them identify it. */
		name?: string | null;

		/** Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only. */
		status?: GetAccountsReturnAccountsStatus | null;
	}
	export interface GetAccountsReturnAccountsFormProperties {

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance: FormControl<number | null | undefined>,

		/** the BIC of the account (provided if currency is EUR). */
		cbic: FormControl<string | null | undefined>,

		/** the Account Number of the account. */
		ccan: FormControl<string | null | undefined>,

		/** the IBAN of the account (provided if currency is EUR). */
		ciban: FormControl<string | null | undefined>,

		/** the Sort Code of the account. */
		cnsc: FormControl<string | null | undefined>,

		/** Internal Use */
		colour: FormControl<string | null | undefined>,

		/** true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees). */
		defaultAccount: FormControl<boolean | null | undefined>,

		/** Whether or not direct debits can be set up on this account. */
		directDebitsAllowed: FormControl<boolean | null | undefined>,

		/** Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned. */
		fopOnly: FormControl<boolean | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) */
		ican: FormControl<number | null | undefined>,

		/** the name the user gives to the account to help them identify it. */
		name: FormControl<string | null | undefined>,

		/** Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only. */
		status: FormControl<GetAccountsReturnAccountsStatus | null | undefined>,
	}
	export function CreateGetAccountsReturnAccountsFormGroup() {
		return new FormGroup<GetAccountsReturnAccountsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			cbic: new FormControl<string | null | undefined>(undefined),
			ccan: new FormControl<string | null | undefined>(undefined),
			ciban: new FormControl<string | null | undefined>(undefined),
			cnsc: new FormControl<string | null | undefined>(undefined),
			colour: new FormControl<string | null | undefined>(undefined),
			defaultAccount: new FormControl<boolean | null | undefined>(undefined),
			directDebitsAllowed: new FormControl<boolean | null | undefined>(undefined),
			fopOnly: new FormControl<boolean | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetAccountsReturnAccountsStatus | null | undefined>(undefined),
		});

	}

	export interface GetAccountsReturnAccountsCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetAccountsReturnAccountsCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetAccountsReturnAccountsCurrencyFormGroup() {
		return new FormGroup<GetAccountsReturnAccountsCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetAccountsReturnAccountsCurrencyCode { EUR = 'EUR', GBP = 'GBP' }

	export enum GetAccountsReturnAccountsStatus { LIVE = 'LIVE', BREXIT_MIGRATED = 'BREXIT_MIGRATED' }

	export interface AddAccountPostBody {

		/** a field to indicate you accept the fee for a new account */
		acceptFeesAndCharges?: boolean | null;

		/**
		 * Name to give the new account
		 * Max length: 50
		 */
		accountName?: string | null;

		/** The currency of the new account */
		currency?: GetAccountsReturnAccountsCurrencyCode | null;
	}
	export interface AddAccountPostBodyFormProperties {

		/** a field to indicate you accept the fee for a new account */
		acceptFeesAndCharges: FormControl<boolean | null | undefined>,

		/**
		 * Name to give the new account
		 * Max length: 50
		 */
		accountName: FormControl<string | null | undefined>,

		/** The currency of the new account */
		currency: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,
	}
	export function CreateAddAccountPostBodyFormGroup() {
		return new FormGroup<AddAccountPostBodyFormProperties>({
			acceptFeesAndCharges: new FormControl<boolean | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			currency: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
		});

	}

	export interface GetAccountByIdReturn {

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance?: number | null;

		/** the BIC of the account (provided if currency is EUR). */
		cbic?: string | null;

		/** the Account Number of the account. */
		ccan?: string | null;

		/** the IBAN of the account (provided if currency is EUR). */
		ciban?: string | null;

		/** the Sort Code of the account. */
		cnsc?: string | null;

		/** Internal Use */
		colour?: string | null;

		/** The currency. */
		currency?: GetAccountByIdReturnCurrency;

		/** true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees). */
		defaultAccount?: boolean | null;

		/** Whether or not direct debits can be set up on this account. */
		directDebitsAllowed?: boolean | null;

		/** Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned. */
		fopOnly?: boolean | null;

		/** identifier for the fire.com account (assigned by fire.com) */
		ican?: number | null;

		/** the name the user gives to the account to help them identify it. */
		name?: string | null;

		/** Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only. */
		status?: GetAccountsReturnAccountsStatus | null;
	}
	export interface GetAccountByIdReturnFormProperties {

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance: FormControl<number | null | undefined>,

		/** the BIC of the account (provided if currency is EUR). */
		cbic: FormControl<string | null | undefined>,

		/** the Account Number of the account. */
		ccan: FormControl<string | null | undefined>,

		/** the IBAN of the account (provided if currency is EUR). */
		ciban: FormControl<string | null | undefined>,

		/** the Sort Code of the account. */
		cnsc: FormControl<string | null | undefined>,

		/** Internal Use */
		colour: FormControl<string | null | undefined>,

		/** true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees). */
		defaultAccount: FormControl<boolean | null | undefined>,

		/** Whether or not direct debits can be set up on this account. */
		directDebitsAllowed: FormControl<boolean | null | undefined>,

		/** Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned. */
		fopOnly: FormControl<boolean | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) */
		ican: FormControl<number | null | undefined>,

		/** the name the user gives to the account to help them identify it. */
		name: FormControl<string | null | undefined>,

		/** Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only. */
		status: FormControl<GetAccountsReturnAccountsStatus | null | undefined>,
	}
	export function CreateGetAccountByIdReturnFormGroup() {
		return new FormGroup<GetAccountByIdReturnFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			cbic: new FormControl<string | null | undefined>(undefined),
			ccan: new FormControl<string | null | undefined>(undefined),
			ciban: new FormControl<string | null | undefined>(undefined),
			cnsc: new FormControl<string | null | undefined>(undefined),
			colour: new FormControl<string | null | undefined>(undefined),
			defaultAccount: new FormControl<boolean | null | undefined>(undefined),
			directDebitsAllowed: new FormControl<boolean | null | undefined>(undefined),
			fopOnly: new FormControl<boolean | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetAccountsReturnAccountsStatus | null | undefined>(undefined),
		});

	}

	export interface GetAccountByIdReturnCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetAccountByIdReturnCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetAccountByIdReturnCurrencyFormGroup() {
		return new FormGroup<GetAccountByIdReturnCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1Return {

		/** milisecond timestamp of date range to value. */
		dateRangeTo?: number | null;

		/** The total number of card transactions in the list. */
		total?: number | null;
		GetTransactionsByAccountIdv1ReturnTransactions?: Array<GetTransactionsByAccountIdv1ReturnTransactions>;
	}
	export interface GetTransactionsByAccountIdv1ReturnFormProperties {

		/** milisecond timestamp of date range to value. */
		dateRangeTo: FormControl<number | null | undefined>,

		/** The total number of card transactions in the list. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnFormProperties>({
			dateRangeTo: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactions {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges?: number | null;

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges?: number | null;

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance?: number | null;

		/** Details of the batch run if this transaction was part of a batch. */
		batchItemDetails?: GetTransactionsByAccountIdv1ReturnTransactionsBatchItemDetails;

		/** Details of the card used (if applicable) */
		card?: GetTransactionsByAccountIdv1ReturnTransactionsCard;

		/** The currency. */
		currency?: GetTransactionsByAccountIdv1ReturnTransactionsCurrency;

		/** Date of the transaction */
		date?: Date | null;
		dateAcknowledged?: Date | null;

		/** Details of the direct debit (if applicable) */
		directDebitDetails?: GetTransactionsByAccountIdv1ReturnTransactionsDirectDebitDetails;

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid?: string | null;

		/** The amount of the fee, if any. */
		feeAmount?: number | null;

		/** Details of the FX trade (if applicable) */
		fxTradeDetails?: GetTransactionsByAccountIdv1ReturnTransactionsFxTradeDetails;

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican?: number | null;

		/** The comment/reference on the transaction */
		myRef?: string | null;

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode?: string | null;

		/** Extra details about the transaction based on the scheme used to make the payment. */
		GetTransactionsByAccountIdv1ReturnTransactionsProprietarySchemeDetails?: Array<GetTransactionsByAccountIdv1ReturnTransactionsProprietarySchemeDetails>;

		/** The id of the transaction. */
		refId?: number | null;

		/** Details of the related third party involved in the transaction. */
		relatedParty?: GetTransactionsByAccountIdv1ReturnTransactionsRelatedParty;

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount?: number | null;

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId?: number | null;

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type?: string | null;

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsFormProperties {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges: FormControl<number | null | undefined>,

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance: FormControl<number | null | undefined>,

		/** Date of the transaction */
		date: FormControl<Date | null | undefined>,
		dateAcknowledged: FormControl<Date | null | undefined>,

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid: FormControl<string | null | undefined>,

		/** The amount of the fee, if any. */
		feeAmount: FormControl<number | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican: FormControl<number | null | undefined>,

		/** The comment/reference on the transaction */
		myRef: FormControl<string | null | undefined>,

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode: FormControl<string | null | undefined>,

		/** The id of the transaction. */
		refId: FormControl<number | null | undefined>,

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount: FormControl<number | null | undefined>,

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId: FormControl<number | null | undefined>,

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type: FormControl<string | null | undefined>,

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsFormProperties>({
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			amountBeforeCharges: new FormControl<number | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dateAcknowledged: new FormControl<Date | null | undefined>(undefined),
			eventUuid: new FormControl<string | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined),
			paymentRequestPublicCode: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
			txnId: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			yourRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsBatchItemDetails {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid?: string | null;

		/** The optional name given to the batch at creation time. */
		batchName?: string | null;

		/** The UUID for this batch. */
		batchPublicUuid?: string | null;

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsBatchItemDetailsFormProperties {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid: FormControl<string | null | undefined>,

		/** The optional name given to the batch at creation time. */
		batchName: FormControl<string | null | undefined>,

		/** The UUID for this batch. */
		batchPublicUuid: FormControl<string | null | undefined>,

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsBatchItemDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsBatchItemDetailsFormProperties>({
			batchItemPublicUuid: new FormControl<string | null | undefined>(undefined),
			batchName: new FormControl<string | null | undefined>(undefined),
			batchPublicUuid: new FormControl<string | null | undefined>(undefined),
			jobNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsCard {
		alias?: string | null;
		cardId?: number | null;
		embossBusinessName?: string | null;
		embossCardName?: string | null;
		expiryDate?: Date | null;
		maskedPan?: string | null;
		provider?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsCardFormProperties {
		alias: FormControl<string | null | undefined>,
		cardId: FormControl<number | null | undefined>,
		embossBusinessName: FormControl<string | null | undefined>,
		embossCardName: FormControl<string | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,
		maskedPan: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsCardFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsCardFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			cardId: new FormControl<number | null | undefined>(undefined),
			embossBusinessName: new FormControl<string | null | undefined>(undefined),
			embossCardName: new FormControl<string | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			maskedPan: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsCurrencyFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsDirectDebitDetails {

		/** The direct debit reference. */
		directDebitReference?: string | null;

		/** The UUID for the direct debit payment */
		directDebitUuid?: string | null;

		/** the reference of the mandate */
		mandateReference?: string | null;

		/** The UUID for the mandate */
		mandateUUid?: string | null;

		/** The UUID for the mandate */
		mandateUuid?: string | null;

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias?: string | null;

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge?: string | null;

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsDirectDebitDetailsFormProperties {

		/** The direct debit reference. */
		directDebitReference: FormControl<string | null | undefined>,

		/** The UUID for the direct debit payment */
		directDebitUuid: FormControl<string | null | undefined>,

		/** the reference of the mandate */
		mandateReference: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUUid: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUuid: FormControl<string | null | undefined>,

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias: FormControl<string | null | undefined>,

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge: FormControl<string | null | undefined>,

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsDirectDebitDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsDirectDebitDetailsFormProperties>({
			directDebitReference: new FormControl<string | null | undefined>(undefined),
			directDebitUuid: new FormControl<string | null | undefined>(undefined),
			mandateReference: new FormControl<string | null | undefined>(undefined),
			mandateUUid: new FormControl<string | null | undefined>(undefined),
			mandateUuid: new FormControl<string | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlLarge: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlSmall: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsFxTradeDetails {

		/** amount of buyCurrency being bought */
		buyAmount?: number | null;

		/** currency which is being bought */
		buyCurrency?: string | null;

		/** type of trade - BUY or SELL */
		fixedSide?: string | null;

		/** The FX provider used to make the trade. */
		provider?: string | null;

		/** exchange rate */
		rate4d?: number | null;

		/** amount of sellCurrency being sold */
		sellAmount?: number | null;

		/** currency which is being sold */
		sellCurrency?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsFxTradeDetailsFormProperties {

		/** amount of buyCurrency being bought */
		buyAmount: FormControl<number | null | undefined>,

		/** currency which is being bought */
		buyCurrency: FormControl<string | null | undefined>,

		/** type of trade - BUY or SELL */
		fixedSide: FormControl<string | null | undefined>,

		/** The FX provider used to make the trade. */
		provider: FormControl<string | null | undefined>,

		/** exchange rate */
		rate4d: FormControl<number | null | undefined>,

		/** amount of sellCurrency being sold */
		sellAmount: FormControl<number | null | undefined>,

		/** currency which is being sold */
		sellCurrency: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsFxTradeDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsFxTradeDetailsFormProperties>({
			buyAmount: new FormControl<number | null | undefined>(undefined),
			buyCurrency: new FormControl<string | null | undefined>(undefined),
			fixedSide: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			rate4d: new FormControl<number | null | undefined>(undefined),
			sellAmount: new FormControl<number | null | undefined>(undefined),
			sellCurrency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsProprietarySchemeDetails {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data?: string | null;

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsProprietarySchemeDetailsFormProperties {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data: FormControl<string | null | undefined>,

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsProprietarySchemeDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsProprietarySchemeDetailsFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsRelatedParty {
		account?: GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyAccount;
		type?: GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyFormProperties {
		type: FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyFormProperties>({
			type: new FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyAccount {

		/** the Account Number of the account. */
		accountNumber?: string | null;

		/** the name the user gives to the account to help them identify it. */
		alias?: string | null;

		/** the BIC of the account (provided if currency is EUR). */
		bic?: string | null;

		/** the IBAN of the account (provided if currency is EUR). */
		iban?: string | null;

		/** identifier for the fire.com account (assigned by fire.com) */
		id?: number | null;

		/** the Sort Code of the account. */
		nsc?: string | null;
	}
	export interface GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyAccountFormProperties {

		/** the Account Number of the account. */
		accountNumber: FormControl<string | null | undefined>,

		/** the name the user gives to the account to help them identify it. */
		alias: FormControl<string | null | undefined>,

		/** the BIC of the account (provided if currency is EUR). */
		bic: FormControl<string | null | undefined>,

		/** the IBAN of the account (provided if currency is EUR). */
		iban: FormControl<string | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) */
		id: FormControl<number | null | undefined>,

		/** the Sort Code of the account. */
		nsc: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyAccountFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyAccountFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			nsc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType { FIRE_ACCOUNT = 'FIRE_ACCOUNT' }

	export interface GetTransactionsByAccountIdFilteredReturn {

		/** milisecond timestamp of date range to value. */
		dateRangeTo?: number | null;

		/** The total number of card transactions in the list. */
		total?: number | null;
		GetTransactionsByAccountIdFilteredReturnTransactions?: Array<GetTransactionsByAccountIdFilteredReturnTransactions>;
	}
	export interface GetTransactionsByAccountIdFilteredReturnFormProperties {

		/** milisecond timestamp of date range to value. */
		dateRangeTo: FormControl<number | null | undefined>,

		/** The total number of card transactions in the list. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnFormProperties>({
			dateRangeTo: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactions {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges?: number | null;

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges?: number | null;

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance?: number | null;

		/** Details of the batch run if this transaction was part of a batch. */
		batchItemDetails?: GetTransactionsByAccountIdFilteredReturnTransactionsBatchItemDetails;

		/** Details of the card used (if applicable) */
		card?: GetTransactionsByAccountIdFilteredReturnTransactionsCard;

		/** The currency. */
		currency?: GetTransactionsByAccountIdFilteredReturnTransactionsCurrency;

		/** Date of the transaction */
		date?: Date | null;
		dateAcknowledged?: Date | null;

		/** Details of the direct debit (if applicable) */
		directDebitDetails?: GetTransactionsByAccountIdFilteredReturnTransactionsDirectDebitDetails;

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid?: string | null;

		/** The amount of the fee, if any. */
		feeAmount?: number | null;

		/** Details of the FX trade (if applicable) */
		fxTradeDetails?: GetTransactionsByAccountIdFilteredReturnTransactionsFxTradeDetails;

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican?: number | null;

		/** The comment/reference on the transaction */
		myRef?: string | null;

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode?: string | null;

		/** Extra details about the transaction based on the scheme used to make the payment. */
		GetTransactionsByAccountIdFilteredReturnTransactionsProprietarySchemeDetails?: Array<GetTransactionsByAccountIdFilteredReturnTransactionsProprietarySchemeDetails>;

		/** The id of the transaction. */
		refId?: number | null;

		/** Details of the related third party involved in the transaction. */
		relatedParty?: GetTransactionsByAccountIdFilteredReturnTransactionsRelatedParty;

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount?: number | null;

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId?: number | null;

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type?: string | null;

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsFormProperties {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges: FormControl<number | null | undefined>,

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance: FormControl<number | null | undefined>,

		/** Date of the transaction */
		date: FormControl<Date | null | undefined>,
		dateAcknowledged: FormControl<Date | null | undefined>,

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid: FormControl<string | null | undefined>,

		/** The amount of the fee, if any. */
		feeAmount: FormControl<number | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican: FormControl<number | null | undefined>,

		/** The comment/reference on the transaction */
		myRef: FormControl<string | null | undefined>,

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode: FormControl<string | null | undefined>,

		/** The id of the transaction. */
		refId: FormControl<number | null | undefined>,

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount: FormControl<number | null | undefined>,

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId: FormControl<number | null | undefined>,

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type: FormControl<string | null | undefined>,

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsFormProperties>({
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			amountBeforeCharges: new FormControl<number | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dateAcknowledged: new FormControl<Date | null | undefined>(undefined),
			eventUuid: new FormControl<string | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined),
			paymentRequestPublicCode: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
			txnId: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			yourRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsBatchItemDetails {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid?: string | null;

		/** The optional name given to the batch at creation time. */
		batchName?: string | null;

		/** The UUID for this batch. */
		batchPublicUuid?: string | null;

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsBatchItemDetailsFormProperties {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid: FormControl<string | null | undefined>,

		/** The optional name given to the batch at creation time. */
		batchName: FormControl<string | null | undefined>,

		/** The UUID for this batch. */
		batchPublicUuid: FormControl<string | null | undefined>,

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsBatchItemDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsBatchItemDetailsFormProperties>({
			batchItemPublicUuid: new FormControl<string | null | undefined>(undefined),
			batchName: new FormControl<string | null | undefined>(undefined),
			batchPublicUuid: new FormControl<string | null | undefined>(undefined),
			jobNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsCard {
		alias?: string | null;
		cardId?: number | null;
		embossBusinessName?: string | null;
		embossCardName?: string | null;
		expiryDate?: Date | null;
		maskedPan?: string | null;
		provider?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsCardFormProperties {
		alias: FormControl<string | null | undefined>,
		cardId: FormControl<number | null | undefined>,
		embossBusinessName: FormControl<string | null | undefined>,
		embossCardName: FormControl<string | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,
		maskedPan: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsCardFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsCardFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			cardId: new FormControl<number | null | undefined>(undefined),
			embossBusinessName: new FormControl<string | null | undefined>(undefined),
			embossCardName: new FormControl<string | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			maskedPan: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsCurrencyFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsDirectDebitDetails {

		/** The direct debit reference. */
		directDebitReference?: string | null;

		/** The UUID for the direct debit payment */
		directDebitUuid?: string | null;

		/** the reference of the mandate */
		mandateReference?: string | null;

		/** The UUID for the mandate */
		mandateUUid?: string | null;

		/** The UUID for the mandate */
		mandateUuid?: string | null;

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias?: string | null;

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge?: string | null;

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsDirectDebitDetailsFormProperties {

		/** The direct debit reference. */
		directDebitReference: FormControl<string | null | undefined>,

		/** The UUID for the direct debit payment */
		directDebitUuid: FormControl<string | null | undefined>,

		/** the reference of the mandate */
		mandateReference: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUUid: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUuid: FormControl<string | null | undefined>,

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias: FormControl<string | null | undefined>,

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge: FormControl<string | null | undefined>,

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsDirectDebitDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsDirectDebitDetailsFormProperties>({
			directDebitReference: new FormControl<string | null | undefined>(undefined),
			directDebitUuid: new FormControl<string | null | undefined>(undefined),
			mandateReference: new FormControl<string | null | undefined>(undefined),
			mandateUUid: new FormControl<string | null | undefined>(undefined),
			mandateUuid: new FormControl<string | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlLarge: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlSmall: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsFxTradeDetails {

		/** amount of buyCurrency being bought */
		buyAmount?: number | null;

		/** currency which is being bought */
		buyCurrency?: string | null;

		/** type of trade - BUY or SELL */
		fixedSide?: string | null;

		/** The FX provider used to make the trade. */
		provider?: string | null;

		/** exchange rate */
		rate4d?: number | null;

		/** amount of sellCurrency being sold */
		sellAmount?: number | null;

		/** currency which is being sold */
		sellCurrency?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsFxTradeDetailsFormProperties {

		/** amount of buyCurrency being bought */
		buyAmount: FormControl<number | null | undefined>,

		/** currency which is being bought */
		buyCurrency: FormControl<string | null | undefined>,

		/** type of trade - BUY or SELL */
		fixedSide: FormControl<string | null | undefined>,

		/** The FX provider used to make the trade. */
		provider: FormControl<string | null | undefined>,

		/** exchange rate */
		rate4d: FormControl<number | null | undefined>,

		/** amount of sellCurrency being sold */
		sellAmount: FormControl<number | null | undefined>,

		/** currency which is being sold */
		sellCurrency: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsFxTradeDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsFxTradeDetailsFormProperties>({
			buyAmount: new FormControl<number | null | undefined>(undefined),
			buyCurrency: new FormControl<string | null | undefined>(undefined),
			fixedSide: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			rate4d: new FormControl<number | null | undefined>(undefined),
			sellAmount: new FormControl<number | null | undefined>(undefined),
			sellCurrency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsProprietarySchemeDetails {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data?: string | null;

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsProprietarySchemeDetailsFormProperties {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data: FormControl<string | null | undefined>,

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsProprietarySchemeDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsProprietarySchemeDetailsFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsRelatedParty {
		account?: GetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyAccount;
		type?: GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyFormProperties {
		type: FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyFormProperties>({
			type: new FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyAccount {

		/** the Account Number of the account. */
		accountNumber?: string | null;

		/** the name the user gives to the account to help them identify it. */
		alias?: string | null;

		/** the BIC of the account (provided if currency is EUR). */
		bic?: string | null;

		/** the IBAN of the account (provided if currency is EUR). */
		iban?: string | null;

		/** identifier for the fire.com account (assigned by fire.com) */
		id?: number | null;

		/** the Sort Code of the account. */
		nsc?: string | null;
	}
	export interface GetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyAccountFormProperties {

		/** the Account Number of the account. */
		accountNumber: FormControl<string | null | undefined>,

		/** the name the user gives to the account to help them identify it. */
		alias: FormControl<string | null | undefined>,

		/** the BIC of the account (provided if currency is EUR). */
		bic: FormControl<string | null | undefined>,

		/** the IBAN of the account (provided if currency is EUR). */
		iban: FormControl<string | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) */
		id: FormControl<number | null | undefined>,

		/** the Sort Code of the account. */
		nsc: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyAccountFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdFilteredReturnTransactionsRelatedPartyAccountFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			nsc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApiApplicationPostBody {

		/** A name for the API Application to help you identify it */
		applicationName?: string | null;

		/** Whether or not this API Application can be used */
		enabled?: boolean | null;

		/** The date that this API Application can no longer be used. */
		expiry?: Date | null;

		/** The ICAN of one of your Fire accounts. Restrict this API Application to a certan account. */
		ican?: number | null;

		/** Number of approvals required to create a payee in a batch */
		numberOfPayeeApprovalsRequired?: number | null;

		/** Number of approvals required to process a payment in a batch */
		numberOfPaymentApprovalsRequired?: number | null;

		/** The list of permissions required */
		permissions?: Array<string>;
	}
	export interface CreateApiApplicationPostBodyFormProperties {

		/** A name for the API Application to help you identify it */
		applicationName: FormControl<string | null | undefined>,

		/** Whether or not this API Application can be used */
		enabled: FormControl<boolean | null | undefined>,

		/** The date that this API Application can no longer be used. */
		expiry: FormControl<Date | null | undefined>,

		/** The ICAN of one of your Fire accounts. Restrict this API Application to a certan account. */
		ican: FormControl<number | null | undefined>,

		/** Number of approvals required to create a payee in a batch */
		numberOfPayeeApprovalsRequired: FormControl<number | null | undefined>,

		/** Number of approvals required to process a payment in a batch */
		numberOfPaymentApprovalsRequired: FormControl<number | null | undefined>,
	}
	export function CreateCreateApiApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApiApplicationPostBodyFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			numberOfPayeeApprovalsRequired: new FormControl<number | null | undefined>(undefined),
			numberOfPaymentApprovalsRequired: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateApiApplicationReturn {

		/** The ID of the API Application */
		applicationId?: number | null;

		/** The Client ID of the new API Application */
		clientId?: string | null;

		/** The Client Key of the new API Application */
		clientKey?: string | null;

		/** Whether or not this API Application can be used */
		enabled?: boolean | null;

		/** The date that this API Application can no longer be used. */
		expiry?: Date | null;

		/** The ICAN of one of your Fire accounts. Restrict this API Application to a certan account. */
		ican?: number | null;

		/** Number of approvals required to create a payee in a batch */
		numberOfPayeeApprovalsRequired?: number | null;

		/** Number of approvals required to process a payment in a batch */
		numberOfPaymentApprovalsRequired?: number | null;

		/** The Refresh Token of the new API Application */
		refreshToken?: string | null;
	}
	export interface CreateApiApplicationReturnFormProperties {

		/** The ID of the API Application */
		applicationId: FormControl<number | null | undefined>,

		/** The Client ID of the new API Application */
		clientId: FormControl<string | null | undefined>,

		/** The Client Key of the new API Application */
		clientKey: FormControl<string | null | undefined>,

		/** Whether or not this API Application can be used */
		enabled: FormControl<boolean | null | undefined>,

		/** The date that this API Application can no longer be used. */
		expiry: FormControl<Date | null | undefined>,

		/** The ICAN of one of your Fire accounts. Restrict this API Application to a certan account. */
		ican: FormControl<number | null | undefined>,

		/** Number of approvals required to create a payee in a batch */
		numberOfPayeeApprovalsRequired: FormControl<number | null | undefined>,

		/** Number of approvals required to process a payment in a batch */
		numberOfPaymentApprovalsRequired: FormControl<number | null | undefined>,

		/** The Refresh Token of the new API Application */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiApplicationReturnFormGroup() {
		return new FormGroup<CreateApiApplicationReturnFormProperties>({
			applicationId: new FormControl<number | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			numberOfPayeeApprovalsRequired: new FormControl<number | null | undefined>(undefined),
			numberOfPaymentApprovalsRequired: new FormControl<number | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticatePostBody {

		/** The Client ID for this API Application */
		clientId?: string | null;

		/** The SHA256 hash of the nonce above and the app’s Client Key. The Client Key will only be shown to you when you create the app, so don’t forget to save it somewhere safe. SECRET=( `/bin/echo -n $NONCE$CLIENT_KEY | sha256sum` ). */
		clientSecret?: string | null;

		/** Always `AccessToken`. (This will change to `refresh_token` in a future release.) */
		grantType?: AuthenticatePostBodyGrantType | null;

		/** A random non-repeating number used as a salt for the `clientSecret` below. The simplest nonce is a unix time. */
		nonce?: number | null;

		/** The Refresh Token for this API Application */
		refreshToken?: string | null;
	}
	export interface AuthenticatePostBodyFormProperties {

		/** The Client ID for this API Application */
		clientId: FormControl<string | null | undefined>,

		/** The SHA256 hash of the nonce above and the app’s Client Key. The Client Key will only be shown to you when you create the app, so don’t forget to save it somewhere safe. SECRET=( `/bin/echo -n $NONCE$CLIENT_KEY | sha256sum` ). */
		clientSecret: FormControl<string | null | undefined>,

		/** Always `AccessToken`. (This will change to `refresh_token` in a future release.) */
		grantType: FormControl<AuthenticatePostBodyGrantType | null | undefined>,

		/** A random non-repeating number used as a salt for the `clientSecret` below. The simplest nonce is a unix time. */
		nonce: FormControl<number | null | undefined>,

		/** The Refresh Token for this API Application */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticatePostBodyFormGroup() {
		return new FormGroup<AuthenticatePostBodyFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			grantType: new FormControl<AuthenticatePostBodyGrantType | null | undefined>(undefined),
			nonce: new FormControl<number | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthenticatePostBodyGrantType { AccessToken = 'AccessToken' }

	export interface AuthenticateReturn {

		/** The App Bearer Access Token you can use in further API calls. */
		accessToken?: string | null;

		/** The ID of the application you are using. */
		apiApplicationId?: number | null;

		/** The business ID for the business. */
		businessId?: number | null;

		/** The expiry date and time for this token (ISO-8601). */
		expiry?: Date | null;

		/** The permissions assigned to the Access Token as an array of strings. This provides information on what API access it is allowed. See the section on Scope below. */
		permissions?: Array<string>;
	}
	export interface AuthenticateReturnFormProperties {

		/** The App Bearer Access Token you can use in further API calls. */
		accessToken: FormControl<string | null | undefined>,

		/** The ID of the application you are using. */
		apiApplicationId: FormControl<number | null | undefined>,

		/** The business ID for the business. */
		businessId: FormControl<number | null | undefined>,

		/** The expiry date and time for this token (ISO-8601). */
		expiry: FormControl<Date | null | undefined>,
	}
	export function CreateAuthenticateReturnFormGroup() {
		return new FormGroup<AuthenticateReturnFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			apiApplicationId: new FormControl<number | null | undefined>(undefined),
			businessId: new FormControl<number | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetListOfAspspsReturn {
		GetListOfAspspsReturnAspsps?: Array<GetListOfAspspsReturnAspsps>;

		/** The total number of ASPSPs in the list. */
		total?: number | null;
	}
	export interface GetListOfAspspsReturnFormProperties {

		/** The total number of ASPSPs in the list. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetListOfAspspsReturnFormGroup() {
		return new FormGroup<GetListOfAspspsReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetListOfAspspsReturnAspsps {

		/** The name of the ASPSP / bank. */
		alias?: string | null;

		/** The UUID associated with the ASPSP / bank. */
		aspspUuid?: string | null;
		country?: GetListOfAspspsReturnAspspsCountry;

		/** The currency. */
		currency?: GetListOfAspspsReturnAspspsCurrency;

		/** The date the ASPSP / bank was created. */
		dateCreated?: Date | null;

		/** The date the ASPSP / bank was last updated. */
		lastUpdated?: Date | null;

		/** A link to the ASPSP / bank's logo in SVG format. */
		logoUrl?: string | null;
	}
	export interface GetListOfAspspsReturnAspspsFormProperties {

		/** The name of the ASPSP / bank. */
		alias: FormControl<string | null | undefined>,

		/** The UUID associated with the ASPSP / bank. */
		aspspUuid: FormControl<string | null | undefined>,

		/** The date the ASPSP / bank was created. */
		dateCreated: FormControl<Date | null | undefined>,

		/** The date the ASPSP / bank was last updated. */
		lastUpdated: FormControl<Date | null | undefined>,

		/** A link to the ASPSP / bank's logo in SVG format. */
		logoUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetListOfAspspsReturnAspspsFormGroup() {
		return new FormGroup<GetListOfAspspsReturnAspspsFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			aspspUuid: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListOfAspspsReturnAspspsCountry {

		/** The 2-letter code for the country - e.g. `IE`, `GP`... */
		code?: string | null;

		/** The name of the country */
		description?: string | null;
	}
	export interface GetListOfAspspsReturnAspspsCountryFormProperties {

		/** The 2-letter code for the country - e.g. `IE`, `GP`... */
		code: FormControl<string | null | undefined>,

		/** The name of the country */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetListOfAspspsReturnAspspsCountryFormGroup() {
		return new FormGroup<GetListOfAspspsReturnAspspsCountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListOfAspspsReturnAspspsCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetListOfAspspsReturnAspspsCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetListOfAspspsReturnAspspsCurrencyFormGroup() {
		return new FormGroup<GetListOfAspspsReturnAspspsCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetBatchesBatchStatus { SUBMITTED = 'SUBMITTED', REMOVED = 'REMOVED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export enum GetBatchesBatchTypes { INTERNAL_TRANSFER = 'INTERNAL_TRANSFER', BANK_TRANSFER = 'BANK_TRANSFER', INTERNATIONAL_TRANSFER = 'INTERNATIONAL_TRANSFER', NEW_PAYEE = 'NEW_PAYEE' }

	export enum GetBatchesOrderBy { DATE = 'DATE' }

	export enum GetBatchesOrder { DESC = 'DESC', ASC = 'ASC' }

	export interface GetBatchesReturn {
		GetBatchesReturnItems?: Array<GetBatchesReturnItems>;

		/** total number of batches returned */
		total?: number | null;
	}
	export interface GetBatchesReturnFormProperties {

		/** total number of batches returned */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetBatchesReturnFormGroup() {
		return new FormGroup<GetBatchesReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBatchesReturnItems {

		/** The amount of funds to send. In cent or pence */
		amount?: number | null;

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges?: number | null;

		/** A UUID for this item. */
		batchItemUuid?: string | null;

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated?: Date | null;

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount?: number | null;

		/** The Fire account ID of the source account. */
		icanFrom?: number | null;

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo?: number | null;

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated?: Date | null;

		/** The reference on the transaction. */
		ref?: string | null;

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId?: number | null;

		/** The outcome of the attempted transaction. */
		result?: GetBatchesReturnItemsResult;

		/** status of the batch if internal trasnfer */
		status?: GetBatchesBatchStatus | null;

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount?: number | null;
	}
	export interface GetBatchesReturnItemsFormProperties {

		/** The amount of funds to send. In cent or pence */
		amount: FormControl<number | null | undefined>,

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** A UUID for this item. */
		batchItemUuid: FormControl<string | null | undefined>,

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated: FormControl<Date | null | undefined>,

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount: FormControl<number | null | undefined>,

		/** The Fire account ID of the source account. */
		icanFrom: FormControl<number | null | undefined>,

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo: FormControl<number | null | undefined>,

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The reference on the transaction. */
		ref: FormControl<string | null | undefined>,

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId: FormControl<number | null | undefined>,

		/** status of the batch if internal trasnfer */
		status: FormControl<GetBatchesBatchStatus | null | undefined>,

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount: FormControl<number | null | undefined>,
	}
	export function CreateGetBatchesReturnItemsFormGroup() {
		return new FormGroup<GetBatchesReturnItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			batchItemUuid: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			icanFrom: new FormControl<number | null | undefined>(undefined),
			icanTo: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<GetBatchesBatchStatus | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBatchesReturnItemsResult {
		code?: number | null;
		message?: string | null;
	}
	export interface GetBatchesReturnItemsResultFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchesReturnItemsResultFormGroup() {
		return new FormGroup<GetBatchesReturnItemsResultFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBatchPaymentPostBody {

		/** An optional name you give to the batch at creation time. */
		batchName?: string | null;

		/** An optional POST URL that all events for this batch will be sent to. */
		callbackUrl?: string | null;

		/** 3 digit ISO code for the currency you wish to send - GBP, EUR, USD, CAD, etc... */
		currency?: string | null;

		/** An optional job number you can give to the batch to help link it to your own system. */
		jobNumber?: string | null;

		/** The type of the batch - can be one of the listed 3 */
		type?: CreateBatchPaymentPostBodyType | null;
	}
	export interface CreateBatchPaymentPostBodyFormProperties {

		/** An optional name you give to the batch at creation time. */
		batchName: FormControl<string | null | undefined>,

		/** An optional POST URL that all events for this batch will be sent to. */
		callbackUrl: FormControl<string | null | undefined>,

		/** 3 digit ISO code for the currency you wish to send - GBP, EUR, USD, CAD, etc... */
		currency: FormControl<string | null | undefined>,

		/** An optional job number you can give to the batch to help link it to your own system. */
		jobNumber: FormControl<string | null | undefined>,

		/** The type of the batch - can be one of the listed 3 */
		type: FormControl<CreateBatchPaymentPostBodyType | null | undefined>,
	}
	export function CreateCreateBatchPaymentPostBodyFormGroup() {
		return new FormGroup<CreateBatchPaymentPostBodyFormProperties>({
			batchName: new FormControl<string | null | undefined>(undefined),
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			jobNumber: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreateBatchPaymentPostBodyType | null | undefined>(undefined),
		});

	}

	export enum CreateBatchPaymentPostBodyType { BANK_TRANSFER = 'BANK_TRANSFER', INTERNAL_TRANSFER = 'INTERNAL_TRANSFER', INTERNATIONAL_TRANSFER = 'INTERNATIONAL_TRANSFER' }

	export interface CreateBatchPaymentReturn {

		/** A UUID for this item. */
		batchUuid?: string | null;
	}
	export interface CreateBatchPaymentReturnFormProperties {

		/** A UUID for this item. */
		batchUuid: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchPaymentReturnFormGroup() {
		return new FormGroup<CreateBatchPaymentReturnFormProperties>({
			batchUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDetailsSingleBatchReturn {

		/** An optional name you give to the batch at creation time */
		batchName?: string | null;

		/** A UUID for this item. */
		batchUuid?: string | null;

		/** An optional POST URL that all events for this batch will be sent to. */
		callbackUrl?: string | null;

		/** All payments in the batch must be the same currency. */
		currency?: string | null;

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated?: Date | null;

		/** An optional job number you can give to the batch to help link it to your own system. */
		jobNumber?: string | null;

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated?: Date | null;

		/** Once processed, a count of the number of items that didn’t process successfully. */
		numberOfItemsFailed?: number | null;

		/** A count of the number of items in the batch */
		numberOfItemsSubmitted?: number | null;

		/** Once processed, a count of the number of items that processed successfully. */
		numberOfItemsSucceeded?: number | null;

		/** A string describing where the batch originated - for instance the name of the API token that was used, or showing that the batch was automatically created by fire.com (in the case of a new payee batch). */
		sourceName?: string | null;

		/** status of the batch object */
		status?: GetDetailsSingleBatchReturnStatus | null;

		/** The type of the batch - can be one of the listed enums */
		type?: GetBatchesBatchTypes | null;

		/** Once processed, a sum of the value of items that didn’t process successfully. Specified in pence or cent. */
		valueOfItemsFailed?: number | null;

		/** A sum of the value of items in the batch. Specified in pence or cent. */
		valueOfItemsSubmitted?: number | null;

		/** Once processed, a sum of the value of items that processed successfully. Specified in pence or cent. */
		valueOfItemsSucceeded?: number | null;
	}
	export interface GetDetailsSingleBatchReturnFormProperties {

		/** An optional name you give to the batch at creation time */
		batchName: FormControl<string | null | undefined>,

		/** A UUID for this item. */
		batchUuid: FormControl<string | null | undefined>,

		/** An optional POST URL that all events for this batch will be sent to. */
		callbackUrl: FormControl<string | null | undefined>,

		/** All payments in the batch must be the same currency. */
		currency: FormControl<string | null | undefined>,

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated: FormControl<Date | null | undefined>,

		/** An optional job number you can give to the batch to help link it to your own system. */
		jobNumber: FormControl<string | null | undefined>,

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated: FormControl<Date | null | undefined>,

		/** Once processed, a count of the number of items that didn’t process successfully. */
		numberOfItemsFailed: FormControl<number | null | undefined>,

		/** A count of the number of items in the batch */
		numberOfItemsSubmitted: FormControl<number | null | undefined>,

		/** Once processed, a count of the number of items that processed successfully. */
		numberOfItemsSucceeded: FormControl<number | null | undefined>,

		/** A string describing where the batch originated - for instance the name of the API token that was used, or showing that the batch was automatically created by fire.com (in the case of a new payee batch). */
		sourceName: FormControl<string | null | undefined>,

		/** status of the batch object */
		status: FormControl<GetDetailsSingleBatchReturnStatus | null | undefined>,

		/** The type of the batch - can be one of the listed enums */
		type: FormControl<GetBatchesBatchTypes | null | undefined>,

		/** Once processed, a sum of the value of items that didn’t process successfully. Specified in pence or cent. */
		valueOfItemsFailed: FormControl<number | null | undefined>,

		/** A sum of the value of items in the batch. Specified in pence or cent. */
		valueOfItemsSubmitted: FormControl<number | null | undefined>,

		/** Once processed, a sum of the value of items that processed successfully. Specified in pence or cent. */
		valueOfItemsSucceeded: FormControl<number | null | undefined>,
	}
	export function CreateGetDetailsSingleBatchReturnFormGroup() {
		return new FormGroup<GetDetailsSingleBatchReturnFormProperties>({
			batchName: new FormControl<string | null | undefined>(undefined),
			batchUuid: new FormControl<string | null | undefined>(undefined),
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			jobNumber: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			numberOfItemsFailed: new FormControl<number | null | undefined>(undefined),
			numberOfItemsSubmitted: new FormControl<number | null | undefined>(undefined),
			numberOfItemsSucceeded: new FormControl<number | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetDetailsSingleBatchReturnStatus | null | undefined>(undefined),
			type: new FormControl<GetBatchesBatchTypes | null | undefined>(undefined),
			valueOfItemsFailed: new FormControl<number | null | undefined>(undefined),
			valueOfItemsSubmitted: new FormControl<number | null | undefined>(undefined),
			valueOfItemsSucceeded: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetDetailsSingleBatchReturnStatus { PENDING_APPROVAL = 'PENDING_APPROVAL', REJECTED = 'REJECTED', COMPLETE = 'COMPLETE', OPEN = 'OPEN', CANCELLED = 'CANCELLED', PENDING_PARENT_BATCH_APPROVAL = 'PENDING_PARENT_BATCH_APPROVAL', READY_FOR_PROCESSING = 'READY_FOR_PROCESSING', PROCESSING = 'PROCESSING' }

	export interface GetListofApproversForBatchReturn {
		GetListofApproversForBatchReturnApprovals?: Array<GetListofApproversForBatchReturnApprovals>;
	}
	export interface GetListofApproversForBatchReturnFormProperties {
	}
	export function CreateGetListofApproversForBatchReturnFormGroup() {
		return new FormGroup<GetListofApproversForBatchReturnFormProperties>({
		});

	}

	export interface GetListofApproversForBatchReturnApprovals {

		/** User email address */
		emailAddress?: string | null;
		firstName?: string | null;
		lastName?: string | null;

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated?: Date | null;
		mobileNumber?: string | null;
		status?: string | null;

		/** User id assigned by fire.com */
		userId?: number | null;
	}
	export interface GetListofApproversForBatchReturnApprovalsFormProperties {

		/** User email address */
		emailAddress: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated: FormControl<Date | null | undefined>,
		mobileNumber: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** User id assigned by fire.com */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateGetListofApproversForBatchReturnApprovalsFormGroup() {
		return new FormGroup<GetListofApproversForBatchReturnApprovalsFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchBankTransferReturn {
		GetItemsBatchBankTransferReturnItems?: Array<GetItemsBatchBankTransferReturnItems>;

		/** total number of batches returned */
		total?: number | null;
	}
	export interface GetItemsBatchBankTransferReturnFormProperties {

		/** total number of batches returned */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetItemsBatchBankTransferReturnFormGroup() {
		return new FormGroup<GetItemsBatchBankTransferReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchBankTransferReturnItems {

		/** The amount of funds to send. In cent or pence */
		amount?: number | null;

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges?: number | null;

		/** A UUID for this item. */
		batchItemUuid?: string | null;

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated?: Date | null;

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount?: number | null;

		/** The Fire account ID of the source account. */
		icanFrom?: number | null;

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo?: number | null;

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated?: Date | null;

		/** The reference on the transaction. */
		ref?: string | null;

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId?: number | null;

		/** The outcome of the attempted transaction. */
		result?: GetItemsBatchBankTransferReturnItemsResult;

		/** status of the batch if internal trasnfer */
		status?: GetBatchesBatchStatus | null;

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount?: number | null;
	}
	export interface GetItemsBatchBankTransferReturnItemsFormProperties {

		/** The amount of funds to send. In cent or pence */
		amount: FormControl<number | null | undefined>,

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** A UUID for this item. */
		batchItemUuid: FormControl<string | null | undefined>,

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated: FormControl<Date | null | undefined>,

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount: FormControl<number | null | undefined>,

		/** The Fire account ID of the source account. */
		icanFrom: FormControl<number | null | undefined>,

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo: FormControl<number | null | undefined>,

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The reference on the transaction. */
		ref: FormControl<string | null | undefined>,

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId: FormControl<number | null | undefined>,

		/** status of the batch if internal trasnfer */
		status: FormControl<GetBatchesBatchStatus | null | undefined>,

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount: FormControl<number | null | undefined>,
	}
	export function CreateGetItemsBatchBankTransferReturnItemsFormGroup() {
		return new FormGroup<GetItemsBatchBankTransferReturnItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			batchItemUuid: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			icanFrom: new FormControl<number | null | undefined>(undefined),
			icanTo: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<GetBatchesBatchStatus | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchBankTransferReturnItemsResult {
		code?: number | null;
		message?: string | null;
	}
	export interface GetItemsBatchBankTransferReturnItemsResultFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetItemsBatchBankTransferReturnItemsResultFormGroup() {
		return new FormGroup<GetItemsBatchBankTransferReturnItemsResultFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddBankTransferBatchPaymentPostBody {

		/** The value of the transaction */
		amount?: number | null;

		/** The destination account holder name */
		destAccountHolderName?: string | null;

		/** The destination Account Number if a GBP bank transfer */
		destAccountNumber?: string | null;

		/** The destination IBAN if a Euro Bank transfer */
		destIban?: string | null;

		/** The destination Nsc if a GBP bank transfer */
		destNsc?: string | null;

		/** The Fire account ID for the fire.com account the funds are taken from. */
		icanFrom?: number | null;

		/** The reference on the transaction for your records - not shown to the beneficiary. */
		myRef?: string | null;

		/** Use ACCOUNT_DETAILS if you are providing account numbers/sort codes/IBANs (Mode 2). Specify the account details in the destIban, destAccountHolderName, destNsc or destAccountNumber fields as appropriate. */
		payeeType?: AddBankTransferBatchPaymentPostBodyPayeeType | null;

		/** The reference on the transaction - displayed on the beneficiary bank statement. */
		yourRef?: string | null;
	}
	export interface AddBankTransferBatchPaymentPostBodyFormProperties {

		/** The value of the transaction */
		amount: FormControl<number | null | undefined>,

		/** The destination account holder name */
		destAccountHolderName: FormControl<string | null | undefined>,

		/** The destination Account Number if a GBP bank transfer */
		destAccountNumber: FormControl<string | null | undefined>,

		/** The destination IBAN if a Euro Bank transfer */
		destIban: FormControl<string | null | undefined>,

		/** The destination Nsc if a GBP bank transfer */
		destNsc: FormControl<string | null | undefined>,

		/** The Fire account ID for the fire.com account the funds are taken from. */
		icanFrom: FormControl<number | null | undefined>,

		/** The reference on the transaction for your records - not shown to the beneficiary. */
		myRef: FormControl<string | null | undefined>,

		/** Use ACCOUNT_DETAILS if you are providing account numbers/sort codes/IBANs (Mode 2). Specify the account details in the destIban, destAccountHolderName, destNsc or destAccountNumber fields as appropriate. */
		payeeType: FormControl<AddBankTransferBatchPaymentPostBodyPayeeType | null | undefined>,

		/** The reference on the transaction - displayed on the beneficiary bank statement. */
		yourRef: FormControl<string | null | undefined>,
	}
	export function CreateAddBankTransferBatchPaymentPostBodyFormGroup() {
		return new FormGroup<AddBankTransferBatchPaymentPostBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			destAccountHolderName: new FormControl<string | null | undefined>(undefined),
			destAccountNumber: new FormControl<string | null | undefined>(undefined),
			destIban: new FormControl<string | null | undefined>(undefined),
			destNsc: new FormControl<string | null | undefined>(undefined),
			icanFrom: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<AddBankTransferBatchPaymentPostBodyPayeeType | null | undefined>(undefined),
			yourRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddBankTransferBatchPaymentPostBodyPayeeType { ACCOUNT_DETAILS = 'ACCOUNT_DETAILS' }

	export interface AddBankTransferBatchPaymentReturn {

		/** A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch. */
		batchItemUuid?: string | null;
	}
	export interface AddBankTransferBatchPaymentReturnFormProperties {

		/** A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch. */
		batchItemUuid: FormControl<string | null | undefined>,
	}
	export function CreateAddBankTransferBatchPaymentReturnFormGroup() {
		return new FormGroup<AddBankTransferBatchPaymentReturnFormProperties>({
			batchItemUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchInternalTrasnferReturn {
		GetItemsBatchInternalTrasnferReturnItems?: Array<GetItemsBatchInternalTrasnferReturnItems>;

		/** total number of batches returned */
		total?: number | null;
	}
	export interface GetItemsBatchInternalTrasnferReturnFormProperties {

		/** total number of batches returned */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetItemsBatchInternalTrasnferReturnFormGroup() {
		return new FormGroup<GetItemsBatchInternalTrasnferReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchInternalTrasnferReturnItems {

		/** The amount of funds to send. In cent or pence */
		amount?: number | null;

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges?: number | null;

		/** A UUID for this item. */
		batchItemUuid?: string | null;

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated?: Date | null;

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount?: number | null;

		/** The Fire account ID of the source account. */
		icanFrom?: number | null;

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo?: number | null;

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated?: Date | null;

		/** The reference on the transaction. */
		ref?: string | null;

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId?: number | null;

		/** The outcome of the attempted transaction. */
		result?: GetItemsBatchInternalTrasnferReturnItemsResult;

		/** status of the batch if internal trasnfer */
		status?: GetBatchesBatchStatus | null;

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount?: number | null;
	}
	export interface GetItemsBatchInternalTrasnferReturnItemsFormProperties {

		/** The amount of funds to send. In cent or pence */
		amount: FormControl<number | null | undefined>,

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** A UUID for this item. */
		batchItemUuid: FormControl<string | null | undefined>,

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated: FormControl<Date | null | undefined>,

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount: FormControl<number | null | undefined>,

		/** The Fire account ID of the source account. */
		icanFrom: FormControl<number | null | undefined>,

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo: FormControl<number | null | undefined>,

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The reference on the transaction. */
		ref: FormControl<string | null | undefined>,

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId: FormControl<number | null | undefined>,

		/** status of the batch if internal trasnfer */
		status: FormControl<GetBatchesBatchStatus | null | undefined>,

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount: FormControl<number | null | undefined>,
	}
	export function CreateGetItemsBatchInternalTrasnferReturnItemsFormGroup() {
		return new FormGroup<GetItemsBatchInternalTrasnferReturnItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			batchItemUuid: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			icanFrom: new FormControl<number | null | undefined>(undefined),
			icanTo: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<GetBatchesBatchStatus | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchInternalTrasnferReturnItemsResult {
		code?: number | null;
		message?: string | null;
	}
	export interface GetItemsBatchInternalTrasnferReturnItemsResultFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetItemsBatchInternalTrasnferReturnItemsResultFormGroup() {
		return new FormGroup<GetItemsBatchInternalTrasnferReturnItemsResultFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddInternalTransferBatchPaymentPostBody {

		/** amount of funds to be transfered */
		amount?: number | null;

		/** The account ID for the fire.com account the funds are taken from */
		icanFrom?: number | null;

		/** The account ID for the fire.com account the funds are directed to */
		icanTo?: number | null;

		/** The reference on the transaction */
		ref?: string | null;
	}
	export interface AddInternalTransferBatchPaymentPostBodyFormProperties {

		/** amount of funds to be transfered */
		amount: FormControl<number | null | undefined>,

		/** The account ID for the fire.com account the funds are taken from */
		icanFrom: FormControl<number | null | undefined>,

		/** The account ID for the fire.com account the funds are directed to */
		icanTo: FormControl<number | null | undefined>,

		/** The reference on the transaction */
		ref: FormControl<string | null | undefined>,
	}
	export function CreateAddInternalTransferBatchPaymentPostBodyFormGroup() {
		return new FormGroup<AddInternalTransferBatchPaymentPostBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			icanFrom: new FormControl<number | null | undefined>(undefined),
			icanTo: new FormControl<number | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddInternalTransferBatchPaymentReturn {

		/** A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch. */
		batchItemUuid?: string | null;
	}
	export interface AddInternalTransferBatchPaymentReturnFormProperties {

		/** A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch. */
		batchItemUuid: FormControl<string | null | undefined>,
	}
	export function CreateAddInternalTransferBatchPaymentReturnFormGroup() {
		return new FormGroup<AddInternalTransferBatchPaymentReturnFormProperties>({
			batchItemUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardsReturn {
		GetListofCardsReturnCards?: Array<GetListofCardsReturnCards>;
	}
	export interface GetListofCardsReturnFormProperties {
	}
	export function CreateGetListofCardsReturnFormGroup() {
		return new FormGroup<GetListofCardsReturnFormProperties>({
		});

	}

	export interface GetListofCardsReturnCards {

		/** Whether the card is blocked or not */
		blocked?: boolean | null;

		/** card id assigned by fire.com */
		cardId?: number | null;

		/** The date-time the card was created */
		dateCreated?: Date | null;

		/** card user email address */
		emailAddress?: string | null;

		/** identifier for the eur fire.com account (assigned by fire.com) */
		eurIcan?: number | null;

		/** card expiry date */
		expiryDate?: Date | null;

		/** card user first name */
		firstName?: string | null;

		/** identifier for the gbp fire.com account (assigned by fire.com) */
		gbpIcan?: number | null;

		/** card user last name */
		lastName?: string | null;

		/** card number (masked) */
		maskedPan?: string | null;

		/** card provider */
		provider?: GetListofCardsReturnCardsProvider | null;

		/** card status */
		status?: GetListofCardsReturnCardsStatus | null;

		/** reason for card status */
		statusReason?: GetListofCardsReturnCardsStatusReason | null;

		/** card user id assigned by fire.com */
		userId?: number | null;
	}
	export interface GetListofCardsReturnCardsFormProperties {

		/** Whether the card is blocked or not */
		blocked: FormControl<boolean | null | undefined>,

		/** card id assigned by fire.com */
		cardId: FormControl<number | null | undefined>,

		/** The date-time the card was created */
		dateCreated: FormControl<Date | null | undefined>,

		/** card user email address */
		emailAddress: FormControl<string | null | undefined>,

		/** identifier for the eur fire.com account (assigned by fire.com) */
		eurIcan: FormControl<number | null | undefined>,

		/** card expiry date */
		expiryDate: FormControl<Date | null | undefined>,

		/** card user first name */
		firstName: FormControl<string | null | undefined>,

		/** identifier for the gbp fire.com account (assigned by fire.com) */
		gbpIcan: FormControl<number | null | undefined>,

		/** card user last name */
		lastName: FormControl<string | null | undefined>,

		/** card number (masked) */
		maskedPan: FormControl<string | null | undefined>,

		/** card provider */
		provider: FormControl<GetListofCardsReturnCardsProvider | null | undefined>,

		/** card status */
		status: FormControl<GetListofCardsReturnCardsStatus | null | undefined>,

		/** reason for card status */
		statusReason: FormControl<GetListofCardsReturnCardsStatusReason | null | undefined>,

		/** card user id assigned by fire.com */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateGetListofCardsReturnCardsFormGroup() {
		return new FormGroup<GetListofCardsReturnCardsFormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined),
			cardId: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			eurIcan: new FormControl<number | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gbpIcan: new FormControl<number | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			maskedPan: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<GetListofCardsReturnCardsProvider | null | undefined>(undefined),
			status: new FormControl<GetListofCardsReturnCardsStatus | null | undefined>(undefined),
			statusReason: new FormControl<GetListofCardsReturnCardsStatusReason | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetListofCardsReturnCardsProvider { MASTERCARD = 'MASTERCARD' }

	export enum GetListofCardsReturnCardsStatus { LIVE = 'LIVE', CREATED_ACTIVE = 'CREATED_ACTIVE', CREATED_INACTIVE = 'CREATED_INACTIVE', DEACTIVATED = 'DEACTIVATED' }

	export enum GetListofCardsReturnCardsStatusReason { LOST_CARD = 'LOST_CARD', STOLEN_CARD = 'STOLEN_CARD', CARD_DESTROYED = 'CARD_DESTROYED' }

	export interface CreateNewCardPostBody {
		acceptFeesAndCharges?: boolean | null;
		addressType?: CreateNewCardPostBodyAddressType | null;
		cardPin?: string | null;
		eurIcan?: number | null;
		gbpIcan?: number | null;
		userId?: number | null;
	}
	export interface CreateNewCardPostBodyFormProperties {
		acceptFeesAndCharges: FormControl<boolean | null | undefined>,
		addressType: FormControl<CreateNewCardPostBodyAddressType | null | undefined>,
		cardPin: FormControl<string | null | undefined>,
		eurIcan: FormControl<number | null | undefined>,
		gbpIcan: FormControl<number | null | undefined>,
		userId: FormControl<number | null | undefined>,
	}
	export function CreateCreateNewCardPostBodyFormGroup() {
		return new FormGroup<CreateNewCardPostBodyFormProperties>({
			acceptFeesAndCharges: new FormControl<boolean | null | undefined>(undefined),
			addressType: new FormControl<CreateNewCardPostBodyAddressType | null | undefined>(undefined),
			cardPin: new FormControl<string | null | undefined>(undefined),
			eurIcan: new FormControl<number | null | undefined>(undefined),
			gbpIcan: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreateNewCardPostBodyAddressType { HOME = 'HOME', BUSINESS = 'BUSINESS' }

	export interface CreateNewCardReturn {
		cardId?: number | null;
		expiryDate?: Date | null;
		maskedPan?: string | null;
		status?: CreateNewCardReturnStatus | null;
	}
	export interface CreateNewCardReturnFormProperties {
		cardId: FormControl<number | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,
		maskedPan: FormControl<string | null | undefined>,
		status: FormControl<CreateNewCardReturnStatus | null | undefined>,
	}
	export function CreateCreateNewCardReturnFormGroup() {
		return new FormGroup<CreateNewCardReturnFormProperties>({
			cardId: new FormControl<number | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			maskedPan: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CreateNewCardReturnStatus | null | undefined>(undefined),
		});

	}

	export enum CreateNewCardReturnStatus { CREATED_ACTIVE = 'CREATED_ACTIVE', CREATED_INACTIVE = 'CREATED_INACTIVE' }

	export interface GetListofCardTransactionsReturn {

		/** milisecond timestamp of date range to value. */
		dateRangeTo?: number | null;

		/** The total number of card transactions in the list. */
		total?: number | null;
		GetListofCardTransactionsReturnTransactions?: Array<GetListofCardTransactionsReturnTransactions>;
	}
	export interface GetListofCardTransactionsReturnFormProperties {

		/** milisecond timestamp of date range to value. */
		dateRangeTo: FormControl<number | null | undefined>,

		/** The total number of card transactions in the list. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnFormProperties>({
			dateRangeTo: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactions {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges?: number | null;

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges?: number | null;

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance?: number | null;

		/** Details of the batch run if this transaction was part of a batch. */
		batchItemDetails?: GetListofCardTransactionsReturnTransactionsBatchItemDetails;

		/** Details of the card used (if applicable) */
		card?: GetListofCardTransactionsReturnTransactionsCard;

		/** The currency. */
		currency?: GetListofCardTransactionsReturnTransactionsCurrency;

		/** Date of the transaction */
		date?: Date | null;
		dateAcknowledged?: Date | null;

		/** Details of the direct debit (if applicable) */
		directDebitDetails?: GetListofCardTransactionsReturnTransactionsDirectDebitDetails;

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid?: string | null;

		/** The amount of the fee, if any. */
		feeAmount?: number | null;

		/** Details of the FX trade (if applicable) */
		fxTradeDetails?: GetListofCardTransactionsReturnTransactionsFxTradeDetails;

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican?: number | null;

		/** The comment/reference on the transaction */
		myRef?: string | null;

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode?: string | null;

		/** Extra details about the transaction based on the scheme used to make the payment. */
		GetListofCardTransactionsReturnTransactionsProprietarySchemeDetails?: Array<GetListofCardTransactionsReturnTransactionsProprietarySchemeDetails>;

		/** The id of the transaction. */
		refId?: number | null;

		/** Details of the related third party involved in the transaction. */
		relatedParty?: GetListofCardTransactionsReturnTransactionsRelatedParty;

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount?: number | null;

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId?: number | null;

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type?: string | null;

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsFormProperties {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges: FormControl<number | null | undefined>,

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance: FormControl<number | null | undefined>,

		/** Date of the transaction */
		date: FormControl<Date | null | undefined>,
		dateAcknowledged: FormControl<Date | null | undefined>,

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid: FormControl<string | null | undefined>,

		/** The amount of the fee, if any. */
		feeAmount: FormControl<number | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican: FormControl<number | null | undefined>,

		/** The comment/reference on the transaction */
		myRef: FormControl<string | null | undefined>,

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode: FormControl<string | null | undefined>,

		/** The id of the transaction. */
		refId: FormControl<number | null | undefined>,

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount: FormControl<number | null | undefined>,

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId: FormControl<number | null | undefined>,

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type: FormControl<string | null | undefined>,

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsFormProperties>({
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			amountBeforeCharges: new FormControl<number | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dateAcknowledged: new FormControl<Date | null | undefined>(undefined),
			eventUuid: new FormControl<string | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined),
			paymentRequestPublicCode: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
			txnId: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			yourRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsBatchItemDetails {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid?: string | null;

		/** The optional name given to the batch at creation time. */
		batchName?: string | null;

		/** The UUID for this batch. */
		batchPublicUuid?: string | null;

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsBatchItemDetailsFormProperties {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid: FormControl<string | null | undefined>,

		/** The optional name given to the batch at creation time. */
		batchName: FormControl<string | null | undefined>,

		/** The UUID for this batch. */
		batchPublicUuid: FormControl<string | null | undefined>,

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsBatchItemDetailsFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsBatchItemDetailsFormProperties>({
			batchItemPublicUuid: new FormControl<string | null | undefined>(undefined),
			batchName: new FormControl<string | null | undefined>(undefined),
			batchPublicUuid: new FormControl<string | null | undefined>(undefined),
			jobNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsCard {
		alias?: string | null;
		cardId?: number | null;
		embossBusinessName?: string | null;
		embossCardName?: string | null;
		expiryDate?: Date | null;
		maskedPan?: string | null;
		provider?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsCardFormProperties {
		alias: FormControl<string | null | undefined>,
		cardId: FormControl<number | null | undefined>,
		embossBusinessName: FormControl<string | null | undefined>,
		embossCardName: FormControl<string | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,
		maskedPan: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsCardFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsCardFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			cardId: new FormControl<number | null | undefined>(undefined),
			embossBusinessName: new FormControl<string | null | undefined>(undefined),
			embossCardName: new FormControl<string | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			maskedPan: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsCurrencyFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsDirectDebitDetails {

		/** The direct debit reference. */
		directDebitReference?: string | null;

		/** The UUID for the direct debit payment */
		directDebitUuid?: string | null;

		/** the reference of the mandate */
		mandateReference?: string | null;

		/** The UUID for the mandate */
		mandateUUid?: string | null;

		/** The UUID for the mandate */
		mandateUuid?: string | null;

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias?: string | null;

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge?: string | null;

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsDirectDebitDetailsFormProperties {

		/** The direct debit reference. */
		directDebitReference: FormControl<string | null | undefined>,

		/** The UUID for the direct debit payment */
		directDebitUuid: FormControl<string | null | undefined>,

		/** the reference of the mandate */
		mandateReference: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUUid: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUuid: FormControl<string | null | undefined>,

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias: FormControl<string | null | undefined>,

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge: FormControl<string | null | undefined>,

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsDirectDebitDetailsFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsDirectDebitDetailsFormProperties>({
			directDebitReference: new FormControl<string | null | undefined>(undefined),
			directDebitUuid: new FormControl<string | null | undefined>(undefined),
			mandateReference: new FormControl<string | null | undefined>(undefined),
			mandateUUid: new FormControl<string | null | undefined>(undefined),
			mandateUuid: new FormControl<string | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlLarge: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlSmall: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsFxTradeDetails {

		/** amount of buyCurrency being bought */
		buyAmount?: number | null;

		/** currency which is being bought */
		buyCurrency?: string | null;

		/** type of trade - BUY or SELL */
		fixedSide?: string | null;

		/** The FX provider used to make the trade. */
		provider?: string | null;

		/** exchange rate */
		rate4d?: number | null;

		/** amount of sellCurrency being sold */
		sellAmount?: number | null;

		/** currency which is being sold */
		sellCurrency?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsFxTradeDetailsFormProperties {

		/** amount of buyCurrency being bought */
		buyAmount: FormControl<number | null | undefined>,

		/** currency which is being bought */
		buyCurrency: FormControl<string | null | undefined>,

		/** type of trade - BUY or SELL */
		fixedSide: FormControl<string | null | undefined>,

		/** The FX provider used to make the trade. */
		provider: FormControl<string | null | undefined>,

		/** exchange rate */
		rate4d: FormControl<number | null | undefined>,

		/** amount of sellCurrency being sold */
		sellAmount: FormControl<number | null | undefined>,

		/** currency which is being sold */
		sellCurrency: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsFxTradeDetailsFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsFxTradeDetailsFormProperties>({
			buyAmount: new FormControl<number | null | undefined>(undefined),
			buyCurrency: new FormControl<string | null | undefined>(undefined),
			fixedSide: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			rate4d: new FormControl<number | null | undefined>(undefined),
			sellAmount: new FormControl<number | null | undefined>(undefined),
			sellCurrency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsProprietarySchemeDetails {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data?: string | null;

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsProprietarySchemeDetailsFormProperties {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data: FormControl<string | null | undefined>,

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsProprietarySchemeDetailsFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsProprietarySchemeDetailsFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsRelatedParty {
		account?: GetListofCardTransactionsReturnTransactionsRelatedPartyAccount;
		type?: GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsRelatedPartyFormProperties {
		type: FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsRelatedPartyFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsRelatedPartyFormProperties>({
			type: new FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>(undefined),
		});

	}

	export interface GetListofCardTransactionsReturnTransactionsRelatedPartyAccount {

		/** the Account Number of the account. */
		accountNumber?: string | null;

		/** the name the user gives to the account to help them identify it. */
		alias?: string | null;

		/** the BIC of the account (provided if currency is EUR). */
		bic?: string | null;

		/** the IBAN of the account (provided if currency is EUR). */
		iban?: string | null;

		/** identifier for the fire.com account (assigned by fire.com) */
		id?: number | null;

		/** the Sort Code of the account. */
		nsc?: string | null;
	}
	export interface GetListofCardTransactionsReturnTransactionsRelatedPartyAccountFormProperties {

		/** the Account Number of the account. */
		accountNumber: FormControl<string | null | undefined>,

		/** the name the user gives to the account to help them identify it. */
		alias: FormControl<string | null | undefined>,

		/** the BIC of the account (provided if currency is EUR). */
		bic: FormControl<string | null | undefined>,

		/** the IBAN of the account (provided if currency is EUR). */
		iban: FormControl<string | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) */
		id: FormControl<number | null | undefined>,

		/** the Sort Code of the account. */
		nsc: FormControl<string | null | undefined>,
	}
	export function CreateGetListofCardTransactionsReturnTransactionsRelatedPartyAccountFormGroup() {
		return new FormGroup<GetListofCardTransactionsReturnTransactionsRelatedPartyAccountFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			nsc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDirectDebitsForMandateUuidReturn {
		GetDirectDebitsForMandateUuidReturnDirectdebits?: Array<GetDirectDebitsForMandateUuidReturnDirectdebits>;

		/** Number of direct debits found */
		total?: number | null;
	}
	export interface GetDirectDebitsForMandateUuidReturnFormProperties {

		/** Number of direct debits found */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetDirectDebitsForMandateUuidReturnFormGroup() {
		return new FormGroup<GetDirectDebitsForMandateUuidReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDirectDebitsForMandateUuidReturnDirectdebits {

		/** Value of the payment */
		amount?: number | null;

		/** The currency. */
		currency?: GetDirectDebitsForMandateUuidReturnDirectdebitsCurrency;

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated?: Date | null;

		/** The direct debit reference. */
		directDebitReference?: string | null;

		/** The UUID for the direct debit payment */
		directDebitUuid?: string | null;

		/** DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true. */
		isDDIC?: boolean | null;

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated?: Date | null;

		/** The UUID for the mandate */
		mandateUUid?: string | null;

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;

		/** Reason why rejected */
		schemeRejectReason?: string | null;

		/** The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeRejectReasonCode?: GetDirectDebitsForMandateUuidReturnDirectdebitsSchemeRejectReasonCode | null;

		/**
		 * The statuses of the direct debit payments associated with the mandate.
		 * * 'RECIEVED' - Direct Debit has been recieved
		 * * 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it
		 * * 'REJECT_READY_FOR_PROCESSING'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'COLLECTED' - Direct debit collected
		 * * 'REFUND_REQUESTED' - Refund requested on direct debit
		 * * 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit
		 * * 'REFUND_RECORDED'
		 * * 'REFUND_FILE_CREATED'
		 * * 'REFUND_FILE_SENT'
		 */
		status?: GetDirectDebitsForMandateUuidReturnDirectdebitsStatus | null;

		/** The ican of your fire account that the money was taken from */
		targetIcan?: number | null;

		/** The payee that was created when the DD was processed */
		targetPayeeId?: number | null;

		/** The type of the direct debit. */
		type?: GetDirectDebitsForMandateUuidReturnDirectdebitsType | null;
	}
	export interface GetDirectDebitsForMandateUuidReturnDirectdebitsFormProperties {

		/** Value of the payment */
		amount: FormControl<number | null | undefined>,

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated: FormControl<Date | null | undefined>,

		/** The direct debit reference. */
		directDebitReference: FormControl<string | null | undefined>,

		/** The UUID for the direct debit payment */
		directDebitUuid: FormControl<string | null | undefined>,

		/** DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true. */
		isDDIC: FormControl<boolean | null | undefined>,

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The UUID for the mandate */
		mandateUUid: FormControl<string | null | undefined>,

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,

		/** Reason why rejected */
		schemeRejectReason: FormControl<string | null | undefined>,

		/** The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeRejectReasonCode: FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsSchemeRejectReasonCode | null | undefined>,

		/**
		 * The statuses of the direct debit payments associated with the mandate.
		 * * 'RECIEVED' - Direct Debit has been recieved
		 * * 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it
		 * * 'REJECT_READY_FOR_PROCESSING'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'COLLECTED' - Direct debit collected
		 * * 'REFUND_REQUESTED' - Refund requested on direct debit
		 * * 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit
		 * * 'REFUND_RECORDED'
		 * * 'REFUND_FILE_CREATED'
		 * * 'REFUND_FILE_SENT'
		 */
		status: FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsStatus | null | undefined>,

		/** The ican of your fire account that the money was taken from */
		targetIcan: FormControl<number | null | undefined>,

		/** The payee that was created when the DD was processed */
		targetPayeeId: FormControl<number | null | undefined>,

		/** The type of the direct debit. */
		type: FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsType | null | undefined>,
	}
	export function CreateGetDirectDebitsForMandateUuidReturnDirectdebitsFormGroup() {
		return new FormGroup<GetDirectDebitsForMandateUuidReturnDirectdebitsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			directDebitReference: new FormControl<string | null | undefined>(undefined),
			directDebitUuid: new FormControl<string | null | undefined>(undefined),
			isDDIC: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			mandateUUid: new FormControl<string | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
			schemeRejectReason: new FormControl<string | null | undefined>(undefined),
			schemeRejectReasonCode: new FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsSchemeRejectReasonCode | null | undefined>(undefined),
			status: new FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsStatus | null | undefined>(undefined),
			targetIcan: new FormControl<number | null | undefined>(undefined),
			targetPayeeId: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsType | null | undefined>(undefined),
		});

	}

	export interface GetDirectDebitsForMandateUuidReturnDirectdebitsCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetDirectDebitsForMandateUuidReturnDirectdebitsCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetDirectDebitsForMandateUuidReturnDirectdebitsCurrencyFormGroup() {
		return new FormGroup<GetDirectDebitsForMandateUuidReturnDirectdebitsCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetDirectDebitsForMandateUuidReturnDirectdebitsSchemeRejectReasonCode { _0 = '0', _1 = '1', _2 = '2', _3 = '3', _4 = '4', _5 = '5', _6 = '6', _7 = '7', _8 = '8', _9 = '9', A = 'A', B = 'B' }

	export enum GetDirectDebitsForMandateUuidReturnDirectdebitsStatus { RECIEVED = 'RECIEVED', REJECT_REQUESTED = 'REJECT_REQUESTED', REJECT_READY_FOR_PROCESSING = 'REJECT_READY_FOR_PROCESSING', REJECT_RECORD_IN_PROGRESS = 'REJECT_RECORD_IN_PROGRESS', REJECT_RECORDED = 'REJECT_RECORDED', REJECT_FILE_CREATED = 'REJECT_FILE_CREATED', REJECT_FILE_SENT = 'REJECT_FILE_SENT', COLLECTED = 'COLLECTED', REFUND_REQUESTED = 'REFUND_REQUESTED', REFUND_RECORD_IN_PROGRESS = 'REFUND_RECORD_IN_PROGRESS', REFUND_RECORDED = 'REFUND_RECORDED', REFUND_FILE_CREATED = 'REFUND_FILE_CREATED', REFUND_FILE_SENT = 'REFUND_FILE_SENT' }

	export enum GetDirectDebitsForMandateUuidReturnDirectdebitsType { FIRST_COLLECTION = 'FIRST_COLLECTION', ONGOING_COLLECTION = 'ONGOING_COLLECTION', REPRESENTED_COLLECTION = 'REPRESENTED_COLLECTION', FINAL_COLLECTION = 'FINAL_COLLECTION' }

	export interface GetDirectDebitByUuidReturn {

		/** Value of the payment */
		amount?: number | null;

		/** The currency. */
		currency?: GetDirectDebitByUuidReturnCurrency;

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated?: Date | null;

		/** The direct debit reference. */
		directDebitReference?: string | null;

		/** The UUID for the direct debit payment */
		directDebitUuid?: string | null;

		/** DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true. */
		isDDIC?: boolean | null;

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated?: Date | null;

		/** The UUID for the mandate */
		mandateUUid?: string | null;

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;

		/** Reason why rejected */
		schemeRejectReason?: string | null;

		/** The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeRejectReasonCode?: GetDirectDebitsForMandateUuidReturnDirectdebitsSchemeRejectReasonCode | null;

		/**
		 * The statuses of the direct debit payments associated with the mandate.
		 * * 'RECIEVED' - Direct Debit has been recieved
		 * * 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it
		 * * 'REJECT_READY_FOR_PROCESSING'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'COLLECTED' - Direct debit collected
		 * * 'REFUND_REQUESTED' - Refund requested on direct debit
		 * * 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit
		 * * 'REFUND_RECORDED'
		 * * 'REFUND_FILE_CREATED'
		 * * 'REFUND_FILE_SENT'
		 */
		status?: GetDirectDebitsForMandateUuidReturnDirectdebitsStatus | null;

		/** The ican of your fire account that the money was taken from */
		targetIcan?: number | null;

		/** The payee that was created when the DD was processed */
		targetPayeeId?: number | null;

		/** The type of the direct debit. */
		type?: GetDirectDebitsForMandateUuidReturnDirectdebitsType | null;
	}
	export interface GetDirectDebitByUuidReturnFormProperties {

		/** Value of the payment */
		amount: FormControl<number | null | undefined>,

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated: FormControl<Date | null | undefined>,

		/** The direct debit reference. */
		directDebitReference: FormControl<string | null | undefined>,

		/** The UUID for the direct debit payment */
		directDebitUuid: FormControl<string | null | undefined>,

		/** DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true. */
		isDDIC: FormControl<boolean | null | undefined>,

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The UUID for the mandate */
		mandateUUid: FormControl<string | null | undefined>,

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,

		/** Reason why rejected */
		schemeRejectReason: FormControl<string | null | undefined>,

		/** The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeRejectReasonCode: FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsSchemeRejectReasonCode | null | undefined>,

		/**
		 * The statuses of the direct debit payments associated with the mandate.
		 * * 'RECIEVED' - Direct Debit has been recieved
		 * * 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it
		 * * 'REJECT_READY_FOR_PROCESSING'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'COLLECTED' - Direct debit collected
		 * * 'REFUND_REQUESTED' - Refund requested on direct debit
		 * * 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit
		 * * 'REFUND_RECORDED'
		 * * 'REFUND_FILE_CREATED'
		 * * 'REFUND_FILE_SENT'
		 */
		status: FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsStatus | null | undefined>,

		/** The ican of your fire account that the money was taken from */
		targetIcan: FormControl<number | null | undefined>,

		/** The payee that was created when the DD was processed */
		targetPayeeId: FormControl<number | null | undefined>,

		/** The type of the direct debit. */
		type: FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsType | null | undefined>,
	}
	export function CreateGetDirectDebitByUuidReturnFormGroup() {
		return new FormGroup<GetDirectDebitByUuidReturnFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			directDebitReference: new FormControl<string | null | undefined>(undefined),
			directDebitUuid: new FormControl<string | null | undefined>(undefined),
			isDDIC: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			mandateUUid: new FormControl<string | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
			schemeRejectReason: new FormControl<string | null | undefined>(undefined),
			schemeRejectReasonCode: new FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsSchemeRejectReasonCode | null | undefined>(undefined),
			status: new FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsStatus | null | undefined>(undefined),
			targetIcan: new FormControl<number | null | undefined>(undefined),
			targetPayeeId: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GetDirectDebitsForMandateUuidReturnDirectdebitsType | null | undefined>(undefined),
		});

	}

	export interface GetDirectDebitByUuidReturnCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetDirectDebitByUuidReturnCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetDirectDebitByUuidReturnCurrencyFormGroup() {
		return new FormGroup<GetDirectDebitByUuidReturnCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDirectDebitMandatesReturn {
		GetDirectDebitMandatesReturnMandates?: Array<GetDirectDebitMandatesReturnMandates>;

		/** Number of direct debits found */
		total?: number | null;
	}
	export interface GetDirectDebitMandatesReturnFormProperties {

		/** Number of direct debits found */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetDirectDebitMandatesReturnFormGroup() {
		return new FormGroup<GetDirectDebitMandatesReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDirectDebitMandatesReturnMandates {

		/** The name of the alias */
		alias?: string | null;

		/** The currency. */
		currency?: GetDirectDebitMandatesReturnMandatesCurrency;

		/** Date the direct debit was canceled. Milliseconds since the epoch (1970). */
		dateCancelled?: Date | null;

		/** Date the direct debit was completed. Milliseconds since the epoch (1970). */
		dateCompleted?: Date | null;

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated?: Date | null;

		/** Rejection reason if transaction is rejected */
		fireRejectionReason?: GetDirectDebitMandatesReturnMandatesFireRejectionReason | null;

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated?: Date | null;

		/** The value of largest direct debit collected */
		latestDirectDebitAmount?: number | null;

		/** The date of latest direct debit collected */
		latestDirectDebitDate?: Date | null;

		/** the reference of the mandate */
		mandateReference?: string | null;

		/** The UUID for the mandate */
		mandateUuid?: string | null;

		/** The number of direct debits collected */
		numberOfDirectDebitCollected?: number | null;

		/** The name of the alias */
		originatorAlias?: string | null;

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlLarge?: string | null;

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlSmall?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;

		/** Reason for cancelation */
		schemeCancelReason?: string | null;

		/** The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeCancelReasonCode?: string | null;

		/**
		 * The status of the mandate.
		 * * 'CREATED'
		 * * 'LIVE'
		 * * 'REJECT_REQUESTED'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'CANCEL_REQUESTED'
		 * * 'CANCEL_RECORD_IN_PROGRESS'
		 * * 'CANCEL_RECORDED'
		 * * 'CANCEL_FILE_CREATED'
		 * * 'CANCEL_FILE_SENT'
		 * * 'COMPLETE'
		 * * 'DORMANT'
		 */
		status?: GetDirectDebitMandatesReturnMandatesStatus | null;

		/** Identifier for the fire.com account (assigned by fire.com) */
		targetIcan?: number | null;

		/** The value of direct debits collected */
		valueOfDirectDebitCollected?: number | null;
	}
	export interface GetDirectDebitMandatesReturnMandatesFormProperties {

		/** The name of the alias */
		alias: FormControl<string | null | undefined>,

		/** Date the direct debit was canceled. Milliseconds since the epoch (1970). */
		dateCancelled: FormControl<Date | null | undefined>,

		/** Date the direct debit was completed. Milliseconds since the epoch (1970). */
		dateCompleted: FormControl<Date | null | undefined>,

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated: FormControl<Date | null | undefined>,

		/** Rejection reason if transaction is rejected */
		fireRejectionReason: FormControl<GetDirectDebitMandatesReturnMandatesFireRejectionReason | null | undefined>,

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The value of largest direct debit collected */
		latestDirectDebitAmount: FormControl<number | null | undefined>,

		/** The date of latest direct debit collected */
		latestDirectDebitDate: FormControl<Date | null | undefined>,

		/** the reference of the mandate */
		mandateReference: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUuid: FormControl<string | null | undefined>,

		/** The number of direct debits collected */
		numberOfDirectDebitCollected: FormControl<number | null | undefined>,

		/** The name of the alias */
		originatorAlias: FormControl<string | null | undefined>,

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlLarge: FormControl<string | null | undefined>,

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlSmall: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,

		/** Reason for cancelation */
		schemeCancelReason: FormControl<string | null | undefined>,

		/** The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeCancelReasonCode: FormControl<string | null | undefined>,

		/**
		 * The status of the mandate.
		 * * 'CREATED'
		 * * 'LIVE'
		 * * 'REJECT_REQUESTED'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'CANCEL_REQUESTED'
		 * * 'CANCEL_RECORD_IN_PROGRESS'
		 * * 'CANCEL_RECORDED'
		 * * 'CANCEL_FILE_CREATED'
		 * * 'CANCEL_FILE_SENT'
		 * * 'COMPLETE'
		 * * 'DORMANT'
		 */
		status: FormControl<GetDirectDebitMandatesReturnMandatesStatus | null | undefined>,

		/** Identifier for the fire.com account (assigned by fire.com) */
		targetIcan: FormControl<number | null | undefined>,

		/** The value of direct debits collected */
		valueOfDirectDebitCollected: FormControl<number | null | undefined>,
	}
	export function CreateGetDirectDebitMandatesReturnMandatesFormGroup() {
		return new FormGroup<GetDirectDebitMandatesReturnMandatesFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			dateCancelled: new FormControl<Date | null | undefined>(undefined),
			dateCompleted: new FormControl<Date | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			fireRejectionReason: new FormControl<GetDirectDebitMandatesReturnMandatesFireRejectionReason | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			latestDirectDebitAmount: new FormControl<number | null | undefined>(undefined),
			latestDirectDebitDate: new FormControl<Date | null | undefined>(undefined),
			mandateReference: new FormControl<string | null | undefined>(undefined),
			mandateUuid: new FormControl<string | null | undefined>(undefined),
			numberOfDirectDebitCollected: new FormControl<number | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlLarge: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlSmall: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
			schemeCancelReason: new FormControl<string | null | undefined>(undefined),
			schemeCancelReasonCode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetDirectDebitMandatesReturnMandatesStatus | null | undefined>(undefined),
			targetIcan: new FormControl<number | null | undefined>(undefined),
			valueOfDirectDebitCollected: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDirectDebitMandatesReturnMandatesCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetDirectDebitMandatesReturnMandatesCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetDirectDebitMandatesReturnMandatesCurrencyFormGroup() {
		return new FormGroup<GetDirectDebitMandatesReturnMandatesCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetDirectDebitMandatesReturnMandatesFireRejectionReason { ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS = 'ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS', DDIC = 'DDIC', ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND', ACCOUNT_NOT_LIVE = 'ACCOUNT_NOT_LIVE', CUSTOMER_NOT_FOUND = 'CUSTOMER_NOT_FOUND', BUSINESS_NOT_LIVE = 'BUSINESS_NOT_LIVE', BUSINESS_NOT_FULL = 'BUSINESS_NOT_FULL', PERSONAL_USER_NOT_LIVE = 'PERSONAL_USER_NOT_LIVE', PERSONAL_USER_NOT_FULL = 'PERSONAL_USER_NOT_FULL', MANDATE_ALREADY_EXISTS = 'MANDATE_ALREADY_EXISTS', MANDATE_WITH_DIFERENT_ACCOUNT = 'MANDATE_WITH_DIFERENT_ACCOUNT', NULL_MANDATE_REFERENCE = 'NULL_MANDATE_REFERENCE', INVALID_ACCOUNT_CURRENCY = 'INVALID_ACCOUNT_CURRENCY', INVALID_MANDATE_REFERENCE = 'INVALID_MANDATE_REFERENCE', REQUESTED_BY_CUSTOMER_VIA_SUPPORT = 'REQUESTED_BY_CUSTOMER_VIA_SUPPORT', CUSTOMER_ACCOUNT_CLOSED = 'CUSTOMER_ACCOUNT_CLOSED', CUSTOMER_DECEASED = 'CUSTOMER_DECEASED', ACCOUNT_TRANSFERRED = 'ACCOUNT_TRANSFERRED', MANDATE_NOT_FOUND = 'MANDATE_NOT_FOUND', ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT = 'ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT', INVALID_ACCOUNT_TYPE = 'INVALID_ACCOUNT_TYPE', MANDATE_EXPIRED = 'MANDATE_EXPIRED', MANDATE_CANCELLED = 'MANDATE_CANCELLED', REQUESTED_BY_CUSTOMER = 'REQUESTED_BY_CUSTOMER' }

	export enum GetDirectDebitMandatesReturnMandatesStatus { CREATED = 'CREATED', LIVE = 'LIVE', REJECT_REQUESTED = 'REJECT_REQUESTED', REJECT_RECORD_IN_PROGRESS = 'REJECT_RECORD_IN_PROGRESS', REJECT_RECORDED = 'REJECT_RECORDED', REJECT_FILE_CREATED = 'REJECT_FILE_CREATED', REJECT_FILE_SENT = 'REJECT_FILE_SENT', CANCEL_REQUESTED = 'CANCEL_REQUESTED', CANCEL_RECORD_IN_PROGRESS = 'CANCEL_RECORD_IN_PROGRESS', CANCEL_RECORDED = 'CANCEL_RECORDED', CANCEL_FILE_CREATED = 'CANCEL_FILE_CREATED', CANCEL_FILE_SENT = 'CANCEL_FILE_SENT', COMPLETE = 'COMPLETE', DORMANT = 'DORMANT' }

	export interface GetMandateReturn {

		/** The name of the alias */
		alias?: string | null;

		/** The currency. */
		currency?: GetMandateReturnCurrency;

		/** Date the direct debit was canceled. Milliseconds since the epoch (1970). */
		dateCancelled?: Date | null;

		/** Date the direct debit was completed. Milliseconds since the epoch (1970). */
		dateCompleted?: Date | null;

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated?: Date | null;

		/** Rejection reason if transaction is rejected */
		fireRejectionReason?: GetDirectDebitMandatesReturnMandatesFireRejectionReason | null;

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated?: Date | null;

		/** The value of largest direct debit collected */
		latestDirectDebitAmount?: number | null;

		/** The date of latest direct debit collected */
		latestDirectDebitDate?: Date | null;

		/** the reference of the mandate */
		mandateReference?: string | null;

		/** The UUID for the mandate */
		mandateUuid?: string | null;

		/** The number of direct debits collected */
		numberOfDirectDebitCollected?: number | null;

		/** The name of the alias */
		originatorAlias?: string | null;

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlLarge?: string | null;

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlSmall?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;

		/** Reason for cancelation */
		schemeCancelReason?: string | null;

		/** The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeCancelReasonCode?: string | null;

		/**
		 * The status of the mandate.
		 * * 'CREATED'
		 * * 'LIVE'
		 * * 'REJECT_REQUESTED'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'CANCEL_REQUESTED'
		 * * 'CANCEL_RECORD_IN_PROGRESS'
		 * * 'CANCEL_RECORDED'
		 * * 'CANCEL_FILE_CREATED'
		 * * 'CANCEL_FILE_SENT'
		 * * 'COMPLETE'
		 * * 'DORMANT'
		 */
		status?: GetDirectDebitMandatesReturnMandatesStatus | null;

		/** Identifier for the fire.com account (assigned by fire.com) */
		targetIcan?: number | null;

		/** The value of direct debits collected */
		valueOfDirectDebitCollected?: number | null;
	}
	export interface GetMandateReturnFormProperties {

		/** The name of the alias */
		alias: FormControl<string | null | undefined>,

		/** Date the direct debit was canceled. Milliseconds since the epoch (1970). */
		dateCancelled: FormControl<Date | null | undefined>,

		/** Date the direct debit was completed. Milliseconds since the epoch (1970). */
		dateCompleted: FormControl<Date | null | undefined>,

		/** Date the direct debit was created. Milliseconds since the epoch (1970). */
		dateCreated: FormControl<Date | null | undefined>,

		/** Rejection reason if transaction is rejected */
		fireRejectionReason: FormControl<GetDirectDebitMandatesReturnMandatesFireRejectionReason | null | undefined>,

		/** Date the direct debit was last updated. Milliseconds since the epoch (1970). */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The value of largest direct debit collected */
		latestDirectDebitAmount: FormControl<number | null | undefined>,

		/** The date of latest direct debit collected */
		latestDirectDebitDate: FormControl<Date | null | undefined>,

		/** the reference of the mandate */
		mandateReference: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUuid: FormControl<string | null | undefined>,

		/** The number of direct debits collected */
		numberOfDirectDebitCollected: FormControl<number | null | undefined>,

		/** The name of the alias */
		originatorAlias: FormControl<string | null | undefined>,

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlLarge: FormControl<string | null | undefined>,

		/** Logo url from party who sets up the direct debit. */
		originatorLogoUrlSmall: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,

		/** Reason for cancelation */
		schemeCancelReason: FormControl<string | null | undefined>,

		/** The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason. */
		schemeCancelReasonCode: FormControl<string | null | undefined>,

		/**
		 * The status of the mandate.
		 * * 'CREATED'
		 * * 'LIVE'
		 * * 'REJECT_REQUESTED'
		 * * 'REJECT_RECORD_IN_PROGRESS'
		 * * 'REJECT_RECORDED'
		 * * 'REJECT_FILE_CREATED'
		 * * 'REJECT_FILE_SENT'
		 * * 'CANCEL_REQUESTED'
		 * * 'CANCEL_RECORD_IN_PROGRESS'
		 * * 'CANCEL_RECORDED'
		 * * 'CANCEL_FILE_CREATED'
		 * * 'CANCEL_FILE_SENT'
		 * * 'COMPLETE'
		 * * 'DORMANT'
		 */
		status: FormControl<GetDirectDebitMandatesReturnMandatesStatus | null | undefined>,

		/** Identifier for the fire.com account (assigned by fire.com) */
		targetIcan: FormControl<number | null | undefined>,

		/** The value of direct debits collected */
		valueOfDirectDebitCollected: FormControl<number | null | undefined>,
	}
	export function CreateGetMandateReturnFormGroup() {
		return new FormGroup<GetMandateReturnFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			dateCancelled: new FormControl<Date | null | undefined>(undefined),
			dateCompleted: new FormControl<Date | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			fireRejectionReason: new FormControl<GetDirectDebitMandatesReturnMandatesFireRejectionReason | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			latestDirectDebitAmount: new FormControl<number | null | undefined>(undefined),
			latestDirectDebitDate: new FormControl<Date | null | undefined>(undefined),
			mandateReference: new FormControl<string | null | undefined>(undefined),
			mandateUuid: new FormControl<string | null | undefined>(undefined),
			numberOfDirectDebitCollected: new FormControl<number | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlLarge: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlSmall: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
			schemeCancelReason: new FormControl<string | null | undefined>(undefined),
			schemeCancelReasonCode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetDirectDebitMandatesReturnMandatesStatus | null | undefined>(undefined),
			targetIcan: new FormControl<number | null | undefined>(undefined),
			valueOfDirectDebitCollected: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMandateReturnCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetMandateReturnCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetMandateReturnCurrencyFormGroup() {
		return new FormGroup<GetMandateReturnCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPayeesReturn {
		GetPayeesReturnFundingSources?: Array<GetPayeesReturnFundingSources>;

		/** The total number of payees in the list. */
		total?: number | null;
	}
	export interface GetPayeesReturnFormProperties {

		/** The total number of payees in the list. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetPayeesReturnFormGroup() {
		return new FormGroup<GetPayeesReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPayeesReturnFundingSources {

		/** The name on the payee bank account. */
		accountHolderName?: string | null;

		/** The alias attributed to the payee, usually set by the user when creating the payee. */
		accountName?: string | null;

		/** The Account Number of the account if currency is GBP. */
		accountNumber?: string | null;

		/** The BIC of the account if currency is EUR. */
		bic?: string | null;

		/** The creation source of the payee. */
		createdBy?: GetPayeesReturnFundingSourcesCreatedBy | null;

		/** The currency. */
		currency?: GetPayeesReturnFundingSourcesCurrency;

		/** The date the payee was created. ISO Date Time. */
		dateCreated?: Date | null;

		/** The IBAN of the account if currency is EUR. */
		iban?: string | null;

		/** Identifier for the fire.com payee bank account (assigned by fire.com). */
		id?: number | null;

		/** The Sort Code of the account if currency is GBP. */
		nsc?: string | null;

		/**
		 * The status of the payee. Only payees in LIVE status can be selected as a destination account for an outgoing payment.
		 * * 'CREATED' - The payee has been set-up via Bank Transfer Received, Direct Debit, or Open Banking. This payee must be converted to LIVE status to select as a destination account for an outgoing payment.
		 * * 'LIVE' - The payee can be selected as a destination account for an outgoing payment.
		 * * 'CLOSED'
		 * * 'ARCHIVED' - The payee has been deleted and must be added again to be selected as a destination account for an outgoing payment.
		 */
		status?: GetPayeesReturnFundingSourcesStatus | null;
	}
	export interface GetPayeesReturnFundingSourcesFormProperties {

		/** The name on the payee bank account. */
		accountHolderName: FormControl<string | null | undefined>,

		/** The alias attributed to the payee, usually set by the user when creating the payee. */
		accountName: FormControl<string | null | undefined>,

		/** The Account Number of the account if currency is GBP. */
		accountNumber: FormControl<string | null | undefined>,

		/** The BIC of the account if currency is EUR. */
		bic: FormControl<string | null | undefined>,

		/** The creation source of the payee. */
		createdBy: FormControl<GetPayeesReturnFundingSourcesCreatedBy | null | undefined>,

		/** The date the payee was created. ISO Date Time. */
		dateCreated: FormControl<Date | null | undefined>,

		/** The IBAN of the account if currency is EUR. */
		iban: FormControl<string | null | undefined>,

		/** Identifier for the fire.com payee bank account (assigned by fire.com). */
		id: FormControl<number | null | undefined>,

		/** The Sort Code of the account if currency is GBP. */
		nsc: FormControl<string | null | undefined>,

		/**
		 * The status of the payee. Only payees in LIVE status can be selected as a destination account for an outgoing payment.
		 * * 'CREATED' - The payee has been set-up via Bank Transfer Received, Direct Debit, or Open Banking. This payee must be converted to LIVE status to select as a destination account for an outgoing payment.
		 * * 'LIVE' - The payee can be selected as a destination account for an outgoing payment.
		 * * 'CLOSED'
		 * * 'ARCHIVED' - The payee has been deleted and must be added again to be selected as a destination account for an outgoing payment.
		 */
		status: FormControl<GetPayeesReturnFundingSourcesStatus | null | undefined>,
	}
	export function CreateGetPayeesReturnFundingSourcesFormGroup() {
		return new FormGroup<GetPayeesReturnFundingSourcesFormProperties>({
			accountHolderName: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<GetPayeesReturnFundingSourcesCreatedBy | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			nsc: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetPayeesReturnFundingSourcesStatus | null | undefined>(undefined),
		});

	}

	export enum GetPayeesReturnFundingSourcesCreatedBy { CUSTOMER = 'CUSTOMER', LODGEMENT = 'LODGEMENT', 'DIRECT DEBIT' = 'DIRECT DEBIT', 'OPEN BANKING' = 'OPEN BANKING', 'FIRE OPEN PAYMENT' = 'FIRE OPEN PAYMENT', 'FIRE DIRECT' = 'FIRE DIRECT' }

	export interface GetPayeesReturnFundingSourcesCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetPayeesReturnFundingSourcesCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetPayeesReturnFundingSourcesCurrencyFormGroup() {
		return new FormGroup<GetPayeesReturnFundingSourcesCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetPayeesReturnFundingSourcesStatus { CREATED = 'CREATED', LIVE = 'LIVE', CLOSED = 'CLOSED', ARCHIVED = 'ARCHIVED' }

	export interface NewPaymentRequestPostBody {

		/** These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer. */
		additionalFields?: string | null;

		/** The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100). */
		amount?: number | null;

		/** For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		collectFields?: string | null;

		/**
		 * Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.
		 * Required
		 */
		currency: GetAccountsReturnAccountsCurrencyCode;

		/**
		 * A public facing description of the request. This will be shown to the user when they tap or scan the request.
		 * Required
		 */
		description: string;

		/** This is the expiry of the payment request. After this time, the payment cannot be paid. */
		expiry?: Date | null;

		/**
		 * The ican of the account to collect the funds into. Must be one of your fire.com Accounts.
		 * Required
		 */
		icanTo: number;

		/** For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		mandatoryFields?: string | null;

		/** The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types. */
		maxNumberPayments?: number | null;

		/**
		 * An internal description of the request.
		 * Required
		 */
		myRef: string;
		orderDetails?: NewPaymentRequestPostBodyOrderDetails;

		/** The merchant return URL where the customer will be re-directed to with the result of the transaction. */
		returnUrl?: string | null;

		/**
		 * The type of Fire Open Payment that was created
		 * Required
		 */
		type: NewPaymentRequestPostBodyType;
	}
	export interface NewPaymentRequestPostBodyFormProperties {

		/** These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer. */
		additionalFields: FormControl<string | null | undefined>,

		/** The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100). */
		amount: FormControl<number | null | undefined>,

		/** For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		collectFields: FormControl<string | null | undefined>,

		/**
		 * Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.
		 * Required
		 */
		currency: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/**
		 * A public facing description of the request. This will be shown to the user when they tap or scan the request.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** This is the expiry of the payment request. After this time, the payment cannot be paid. */
		expiry: FormControl<Date | null | undefined>,

		/**
		 * The ican of the account to collect the funds into. Must be one of your fire.com Accounts.
		 * Required
		 */
		icanTo: FormControl<number | null | undefined>,

		/** For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		mandatoryFields: FormControl<string | null | undefined>,

		/** The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types. */
		maxNumberPayments: FormControl<number | null | undefined>,

		/**
		 * An internal description of the request.
		 * Required
		 */
		myRef: FormControl<string | null | undefined>,

		/** The merchant return URL where the customer will be re-directed to with the result of the transaction. */
		returnUrl: FormControl<string | null | undefined>,

		/**
		 * The type of Fire Open Payment that was created
		 * Required
		 */
		type: FormControl<NewPaymentRequestPostBodyType | null | undefined>,
	}
	export function CreateNewPaymentRequestPostBodyFormGroup() {
		return new FormGroup<NewPaymentRequestPostBodyFormProperties>({
			additionalFields: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			collectFields: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiry: new FormControl<Date | null | undefined>(undefined),
			icanTo: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mandatoryFields: new FormControl<string | null | undefined>(undefined),
			maxNumberPayments: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			returnUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<NewPaymentRequestPostBodyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewPaymentRequestPostBodyOrderDetails {

		/** This is your own comment for the transaction. */
		comment1?: string | null;

		/** This is your own comment for the transaction. */
		comment2?: string | null;

		/** Use this field to store a customer number for the transaction (for example). */
		customerNumber?: string | null;

		/** The first line of the delivery address. */
		deliveryAddressLine1?: string | null;

		/** The second line of the delivery address. */
		deliveryAddressLine2?: string | null;

		/** Delivery address city */
		deliveryCity?: string | null;

		/** 2-digit code for the country */
		deliveryCountry?: string | null;

		/** Delivery address post code */
		deliveryPostCode?: string | null;

		/** This is a reference you use to uniquely identify each of your customers. */
		merchantCustomerIdentification?: string | null;

		/** Your Merchant Number (if applicable). */
		merchantNumber?: string | null;

		/** Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1. */
		orderId?: string | null;

		/** Use this field to store a product id for the transaction (for example). */
		productId?: string | null;

		/** Use this field to store any other reference for the transaction (for example, a phone number). */
		variableReference?: string | null;
	}
	export interface NewPaymentRequestPostBodyOrderDetailsFormProperties {

		/** This is your own comment for the transaction. */
		comment1: FormControl<string | null | undefined>,

		/** This is your own comment for the transaction. */
		comment2: FormControl<string | null | undefined>,

		/** Use this field to store a customer number for the transaction (for example). */
		customerNumber: FormControl<string | null | undefined>,

		/** The first line of the delivery address. */
		deliveryAddressLine1: FormControl<string | null | undefined>,

		/** The second line of the delivery address. */
		deliveryAddressLine2: FormControl<string | null | undefined>,

		/** Delivery address city */
		deliveryCity: FormControl<string | null | undefined>,

		/** 2-digit code for the country */
		deliveryCountry: FormControl<string | null | undefined>,

		/** Delivery address post code */
		deliveryPostCode: FormControl<string | null | undefined>,

		/** This is a reference you use to uniquely identify each of your customers. */
		merchantCustomerIdentification: FormControl<string | null | undefined>,

		/** Your Merchant Number (if applicable). */
		merchantNumber: FormControl<string | null | undefined>,

		/** Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1. */
		orderId: FormControl<string | null | undefined>,

		/** Use this field to store a product id for the transaction (for example). */
		productId: FormControl<string | null | undefined>,

		/** Use this field to store any other reference for the transaction (for example, a phone number). */
		variableReference: FormControl<string | null | undefined>,
	}
	export function CreateNewPaymentRequestPostBodyOrderDetailsFormGroup() {
		return new FormGroup<NewPaymentRequestPostBodyOrderDetailsFormProperties>({
			comment1: new FormControl<string | null | undefined>(undefined),
			comment2: new FormControl<string | null | undefined>(undefined),
			customerNumber: new FormControl<string | null | undefined>(undefined),
			deliveryAddressLine1: new FormControl<string | null | undefined>(undefined),
			deliveryAddressLine2: new FormControl<string | null | undefined>(undefined),
			deliveryCity: new FormControl<string | null | undefined>(undefined),
			deliveryCountry: new FormControl<string | null | undefined>(undefined),
			deliveryPostCode: new FormControl<string | null | undefined>(undefined),
			merchantCustomerIdentification: new FormControl<string | null | undefined>(undefined),
			merchantNumber: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			variableReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NewPaymentRequestPostBodyType { OTHER = 'OTHER' }

	export interface NewPaymentRequestReturn {

		/**
		 * The code for this request. Create a URL in this format: `https://payments.fire.com/{code}` and share to your customers.
		 * Max length: 8
		 * Min length: 8
		 */
		code?: string | null;

		/** The type of Fire Open Payment that was created. */
		type?: NewPaymentRequestPostBodyType | null;
	}
	export interface NewPaymentRequestReturnFormProperties {

		/**
		 * The code for this request. Create a URL in this format: `https://payments.fire.com/{code}` and share to your customers.
		 * Max length: 8
		 * Min length: 8
		 */
		code: FormControl<string | null | undefined>,

		/** The type of Fire Open Payment that was created. */
		type: FormControl<NewPaymentRequestPostBodyType | null | undefined>,
	}
	export function CreateNewPaymentRequestReturnFormGroup() {
		return new FormGroup<NewPaymentRequestReturnFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(8)]),
			type: new FormControl<NewPaymentRequestPostBodyType | null | undefined>(undefined),
		});

	}

	export interface GetPaymentDetailsReturn {

		/** These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer. */
		additionalFields?: string | null;

		/** The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100). */
		amount?: number | null;

		/** For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		collectFields?: string | null;

		/** The currency. */
		currency?: GetPaymentDetailsReturnCurrency;

		/** A public facing description of the request. This will be shown to the user when they tap or scan the request. */
		description?: string | null;

		/** This is the expiry of the payment request. After this time, the payment cannot be paid. */
		expiry?: Date | null;

		/** The ican of the account to collect the funds into. Must be one of your fire.com Accounts. */
		icanTo?: number | null;

		/** For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		mandatoryFields?: string | null;

		/** The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types. */
		maxNumberPayments?: number | null;

		/** An internal description of the request. */
		myRef?: string | null;
		orderDetails?: GetPaymentDetailsReturnOrderDetails;

		/**
		 * The code that was returned when you created the payment request.
		 * Max length: 8
		 * Min length: 8
		 */
		paymentRequestCode?: string | null;

		/** A unique id for the transaction. */
		paymentUuid?: string | null;

		/** The merchant return URL where the customer will be re-directed to with the result of the transaction. */
		returnUrl?: string | null;

		/** The status of the transaction */
		status?: GetPaymentDetailsReturnStatus | null;

		/** The type of payment request payment */
		transactionType?: GetPaymentDetailsReturnTransactionType | null;

		/** The type of Fire Open Payment that was created */
		type?: NewPaymentRequestPostBodyType | null;

		/** A URL to be called in the background with the details of the payment after the payment is complete */
		webhookUrl?: string | null;
	}
	export interface GetPaymentDetailsReturnFormProperties {

		/** These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer. */
		additionalFields: FormControl<string | null | undefined>,

		/** The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100). */
		amount: FormControl<number | null | undefined>,

		/** For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		collectFields: FormControl<string | null | undefined>,

		/** A public facing description of the request. This will be shown to the user when they tap or scan the request. */
		description: FormControl<string | null | undefined>,

		/** This is the expiry of the payment request. After this time, the payment cannot be paid. */
		expiry: FormControl<Date | null | undefined>,

		/** The ican of the account to collect the funds into. Must be one of your fire.com Accounts. */
		icanTo: FormControl<number | null | undefined>,

		/** For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively. */
		mandatoryFields: FormControl<string | null | undefined>,

		/** The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types. */
		maxNumberPayments: FormControl<number | null | undefined>,

		/** An internal description of the request. */
		myRef: FormControl<string | null | undefined>,

		/**
		 * The code that was returned when you created the payment request.
		 * Max length: 8
		 * Min length: 8
		 */
		paymentRequestCode: FormControl<string | null | undefined>,

		/** A unique id for the transaction. */
		paymentUuid: FormControl<string | null | undefined>,

		/** The merchant return URL where the customer will be re-directed to with the result of the transaction. */
		returnUrl: FormControl<string | null | undefined>,

		/** The status of the transaction */
		status: FormControl<GetPaymentDetailsReturnStatus | null | undefined>,

		/** The type of payment request payment */
		transactionType: FormControl<GetPaymentDetailsReturnTransactionType | null | undefined>,

		/** The type of Fire Open Payment that was created */
		type: FormControl<NewPaymentRequestPostBodyType | null | undefined>,

		/** A URL to be called in the background with the details of the payment after the payment is complete */
		webhookUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetPaymentDetailsReturnFormGroup() {
		return new FormGroup<GetPaymentDetailsReturnFormProperties>({
			additionalFields: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			collectFields: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			icanTo: new FormControl<number | null | undefined>(undefined),
			mandatoryFields: new FormControl<string | null | undefined>(undefined),
			maxNumberPayments: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined),
			paymentRequestCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(8)]),
			paymentUuid: new FormControl<string | null | undefined>(undefined),
			returnUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetPaymentDetailsReturnStatus | null | undefined>(undefined),
			transactionType: new FormControl<GetPaymentDetailsReturnTransactionType | null | undefined>(undefined),
			type: new FormControl<NewPaymentRequestPostBodyType | null | undefined>(undefined),
			webhookUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPaymentDetailsReturnCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetPaymentDetailsReturnCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetPaymentDetailsReturnCurrencyFormGroup() {
		return new FormGroup<GetPaymentDetailsReturnCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPaymentDetailsReturnOrderDetails {

		/** This is your own comment for the transaction. */
		comment1?: string | null;

		/** This is your own comment for the transaction. */
		comment2?: string | null;

		/** Use this field to store a customer number for the transaction (for example). */
		customerNumber?: string | null;

		/** The first line of the delivery address. */
		deliveryAddressLine1?: string | null;

		/** The second line of the delivery address. */
		deliveryAddressLine2?: string | null;

		/** Delivery address city */
		deliveryCity?: string | null;

		/** 2-digit code for the country */
		deliveryCountry?: string | null;

		/** Delivery address post code */
		deliveryPostCode?: string | null;

		/** This is a reference you use to uniquely identify each of your customers. */
		merchantCustomerIdentification?: string | null;

		/** Your Merchant Number (if applicable). */
		merchantNumber?: string | null;

		/** Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1. */
		orderId?: string | null;

		/** Use this field to store a product id for the transaction (for example). */
		productId?: string | null;

		/** Use this field to store any other reference for the transaction (for example, a phone number). */
		variableReference?: string | null;
	}
	export interface GetPaymentDetailsReturnOrderDetailsFormProperties {

		/** This is your own comment for the transaction. */
		comment1: FormControl<string | null | undefined>,

		/** This is your own comment for the transaction. */
		comment2: FormControl<string | null | undefined>,

		/** Use this field to store a customer number for the transaction (for example). */
		customerNumber: FormControl<string | null | undefined>,

		/** The first line of the delivery address. */
		deliveryAddressLine1: FormControl<string | null | undefined>,

		/** The second line of the delivery address. */
		deliveryAddressLine2: FormControl<string | null | undefined>,

		/** Delivery address city */
		deliveryCity: FormControl<string | null | undefined>,

		/** 2-digit code for the country */
		deliveryCountry: FormControl<string | null | undefined>,

		/** Delivery address post code */
		deliveryPostCode: FormControl<string | null | undefined>,

		/** This is a reference you use to uniquely identify each of your customers. */
		merchantCustomerIdentification: FormControl<string | null | undefined>,

		/** Your Merchant Number (if applicable). */
		merchantNumber: FormControl<string | null | undefined>,

		/** Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1. */
		orderId: FormControl<string | null | undefined>,

		/** Use this field to store a product id for the transaction (for example). */
		productId: FormControl<string | null | undefined>,

		/** Use this field to store any other reference for the transaction (for example, a phone number). */
		variableReference: FormControl<string | null | undefined>,
	}
	export function CreateGetPaymentDetailsReturnOrderDetailsFormGroup() {
		return new FormGroup<GetPaymentDetailsReturnOrderDetailsFormProperties>({
			comment1: new FormControl<string | null | undefined>(undefined),
			comment2: new FormControl<string | null | undefined>(undefined),
			customerNumber: new FormControl<string | null | undefined>(undefined),
			deliveryAddressLine1: new FormControl<string | null | undefined>(undefined),
			deliveryAddressLine2: new FormControl<string | null | undefined>(undefined),
			deliveryCity: new FormControl<string | null | undefined>(undefined),
			deliveryCountry: new FormControl<string | null | undefined>(undefined),
			deliveryPostCode: new FormControl<string | null | undefined>(undefined),
			merchantCustomerIdentification: new FormControl<string | null | undefined>(undefined),
			merchantNumber: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			variableReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetPaymentDetailsReturnStatus { AWAITING_AUTHORISATION = 'AWAITING_AUTHORISATION', AUTHORISED = 'AUTHORISED', AWAITING_MULTI_AUTHORISATION = 'AWAITING_MULTI_AUTHORISATION', NOT_AUTHORISED = 'NOT_AUTHORISED', PAID = 'PAID', REJECTED = 'REJECTED', ACCEPTED = 'ACCEPTED', RECEIVED = 'RECEIVED' }

	export enum GetPaymentDetailsReturnTransactionType { REFUND_REQUEST = 'REFUND_REQUEST', PAYMENT = 'PAYMENT' }

	export interface GetUserReturn {

		/** email address for user */
		emailAddress?: string | null;

		/** User first name */
		firstName?: string | null;

		/** The User ID for this User */
		id?: number | null;

		/** User second name */
		lastName?: string | null;

		/** Timestamp on when user last logged in. */
		lastlogin?: string | null;
		mobileApplicationDetails?: GetUserReturnMobileApplicationDetails;

		/** User mobile number */
		mobileNumber?: string | null;

		/** User role */
		role?: GetUserReturnRole | null;

		/** Status of user */
		status?: GetUserReturnStatus | null;

		/** Users Cvl type ID (shows up when status is LIVE) */
		userCvl?: string | null;
	}
	export interface GetUserReturnFormProperties {

		/** email address for user */
		emailAddress: FormControl<string | null | undefined>,

		/** User first name */
		firstName: FormControl<string | null | undefined>,

		/** The User ID for this User */
		id: FormControl<number | null | undefined>,

		/** User second name */
		lastName: FormControl<string | null | undefined>,

		/** Timestamp on when user last logged in. */
		lastlogin: FormControl<string | null | undefined>,

		/** User mobile number */
		mobileNumber: FormControl<string | null | undefined>,

		/** User role */
		role: FormControl<GetUserReturnRole | null | undefined>,

		/** Status of user */
		status: FormControl<GetUserReturnStatus | null | undefined>,

		/** Users Cvl type ID (shows up when status is LIVE) */
		userCvl: FormControl<string | null | undefined>,
	}
	export function CreateGetUserReturnFormGroup() {
		return new FormGroup<GetUserReturnFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			lastlogin: new FormControl<string | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<GetUserReturnRole | null | undefined>(undefined),
			status: new FormControl<GetUserReturnStatus | null | undefined>(undefined),
			userCvl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserReturnMobileApplicationDetails {

		/** Operating system of device. */
		OS?: GetUserReturnMobileApplicationDetailsOS | null;

		/** Business user ID */
		businessUserId?: number | null;

		/** Client ID of user. */
		clientID?: string | null;

		/** type of device. */
		deviceName?: GetUserReturnMobileApplicationDetailsDeviceName | null;

		/** OS version for device. */
		deviceOSVersion?: string | null;

		/** Mobile application id for user. */
		mobileApplicationId?: number | null;

		/** Status of user */
		status?: GetUserReturnMobileApplicationDetailsStatus | null;
	}
	export interface GetUserReturnMobileApplicationDetailsFormProperties {

		/** Operating system of device. */
		OS: FormControl<GetUserReturnMobileApplicationDetailsOS | null | undefined>,

		/** Business user ID */
		businessUserId: FormControl<number | null | undefined>,

		/** Client ID of user. */
		clientID: FormControl<string | null | undefined>,

		/** type of device. */
		deviceName: FormControl<GetUserReturnMobileApplicationDetailsDeviceName | null | undefined>,

		/** OS version for device. */
		deviceOSVersion: FormControl<string | null | undefined>,

		/** Mobile application id for user. */
		mobileApplicationId: FormControl<number | null | undefined>,

		/** Status of user */
		status: FormControl<GetUserReturnMobileApplicationDetailsStatus | null | undefined>,
	}
	export function CreateGetUserReturnMobileApplicationDetailsFormGroup() {
		return new FormGroup<GetUserReturnMobileApplicationDetailsFormProperties>({
			OS: new FormControl<GetUserReturnMobileApplicationDetailsOS | null | undefined>(undefined),
			businessUserId: new FormControl<number | null | undefined>(undefined),
			clientID: new FormControl<string | null | undefined>(undefined),
			deviceName: new FormControl<GetUserReturnMobileApplicationDetailsDeviceName | null | undefined>(undefined),
			deviceOSVersion: new FormControl<string | null | undefined>(undefined),
			mobileApplicationId: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<GetUserReturnMobileApplicationDetailsStatus | null | undefined>(undefined),
		});

	}

	export enum GetUserReturnMobileApplicationDetailsOS { Android = 'Android', IOS = 'IOS', OTHER = 'OTHER' }

	export enum GetUserReturnMobileApplicationDetailsDeviceName { iPhone = 'iPhone', Android = 'Android', Other = 'Other' }

	export enum GetUserReturnMobileApplicationDetailsStatus { LIVE = 'LIVE', CLOSED = 'CLOSED', LOCKED = 'LOCKED', SMS_SENT = 'SMS_SENT' }

	export enum GetUserReturnRole { ADMIN = 'ADMIN', FULL_USER = 'FULL_USER', READ_ONLY = 'READ_ONLY', CARD_ONLY = 'CARD_ONLY' }

	export enum GetUserReturnStatus { LIVE = 'LIVE', CLOSED = 'CLOSED', FROZEN = 'FROZEN', INVITE_SENT = 'INVITE_SENT', SMS_CODE_SENT = 'SMS_CODE_SENT' }

	export interface GetUsersReturn {

		/** email address for user */
		emailAddress?: string | null;

		/** User first name */
		firstName?: string | null;

		/** The User ID for this User */
		id?: number | null;

		/** User second name */
		lastName?: string | null;

		/** Timestamp on when user last logged in. */
		lastlogin?: string | null;
		mobileApplicationDetails?: GetUsersReturnMobileApplicationDetails;

		/** User mobile number */
		mobileNumber?: string | null;

		/** User role */
		role?: GetUserReturnRole | null;

		/** Status of user */
		status?: GetUserReturnStatus | null;

		/** Users Cvl type ID (shows up when status is LIVE) */
		userCvl?: string | null;
	}
	export interface GetUsersReturnFormProperties {

		/** email address for user */
		emailAddress: FormControl<string | null | undefined>,

		/** User first name */
		firstName: FormControl<string | null | undefined>,

		/** The User ID for this User */
		id: FormControl<number | null | undefined>,

		/** User second name */
		lastName: FormControl<string | null | undefined>,

		/** Timestamp on when user last logged in. */
		lastlogin: FormControl<string | null | undefined>,

		/** User mobile number */
		mobileNumber: FormControl<string | null | undefined>,

		/** User role */
		role: FormControl<GetUserReturnRole | null | undefined>,

		/** Status of user */
		status: FormControl<GetUserReturnStatus | null | undefined>,

		/** Users Cvl type ID (shows up when status is LIVE) */
		userCvl: FormControl<string | null | undefined>,
	}
	export function CreateGetUsersReturnFormGroup() {
		return new FormGroup<GetUsersReturnFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			lastlogin: new FormControl<string | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<GetUserReturnRole | null | undefined>(undefined),
			status: new FormControl<GetUserReturnStatus | null | undefined>(undefined),
			userCvl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsersReturnMobileApplicationDetails {

		/** Operating system of device. */
		OS?: GetUserReturnMobileApplicationDetailsOS | null;

		/** Business user ID */
		businessUserId?: number | null;

		/** Client ID of user. */
		clientID?: string | null;

		/** type of device. */
		deviceName?: GetUserReturnMobileApplicationDetailsDeviceName | null;

		/** OS version for device. */
		deviceOSVersion?: string | null;

		/** Mobile application id for user. */
		mobileApplicationId?: number | null;

		/** Status of user */
		status?: GetUserReturnMobileApplicationDetailsStatus | null;
	}
	export interface GetUsersReturnMobileApplicationDetailsFormProperties {

		/** Operating system of device. */
		OS: FormControl<GetUserReturnMobileApplicationDetailsOS | null | undefined>,

		/** Business user ID */
		businessUserId: FormControl<number | null | undefined>,

		/** Client ID of user. */
		clientID: FormControl<string | null | undefined>,

		/** type of device. */
		deviceName: FormControl<GetUserReturnMobileApplicationDetailsDeviceName | null | undefined>,

		/** OS version for device. */
		deviceOSVersion: FormControl<string | null | undefined>,

		/** Mobile application id for user. */
		mobileApplicationId: FormControl<number | null | undefined>,

		/** Status of user */
		status: FormControl<GetUserReturnMobileApplicationDetailsStatus | null | undefined>,
	}
	export function CreateGetUsersReturnMobileApplicationDetailsFormGroup() {
		return new FormGroup<GetUsersReturnMobileApplicationDetailsFormProperties>({
			OS: new FormControl<GetUserReturnMobileApplicationDetailsOS | null | undefined>(undefined),
			businessUserId: new FormControl<number | null | undefined>(undefined),
			clientID: new FormControl<string | null | undefined>(undefined),
			deviceName: new FormControl<GetUserReturnMobileApplicationDetailsDeviceName | null | undefined>(undefined),
			deviceOSVersion: new FormControl<string | null | undefined>(undefined),
			mobileApplicationId: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<GetUserReturnMobileApplicationDetailsStatus | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchInternationalTransferReturn {
		GetItemsBatchInternationalTransferReturnItems?: Array<GetItemsBatchInternationalTransferReturnItems>;

		/** total number of batches returned */
		total?: number | null;
	}
	export interface GetItemsBatchInternationalTransferReturnFormProperties {

		/** total number of batches returned */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetItemsBatchInternationalTransferReturnFormGroup() {
		return new FormGroup<GetItemsBatchInternationalTransferReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchInternationalTransferReturnItems {

		/** The amount of funds to send. In cent or pence */
		amount?: number | null;

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges?: number | null;

		/** A UUID for this item. */
		batchItemUuid?: string | null;

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated?: Date | null;

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount?: number | null;

		/** The Fire account ID of the source account. */
		icanFrom?: number | null;

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo?: number | null;

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated?: Date | null;

		/** The reference on the transaction. */
		ref?: string | null;

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId?: number | null;

		/** The outcome of the attempted transaction. */
		result?: GetItemsBatchInternationalTransferReturnItemsResult;

		/** status of the batch if internal trasnfer */
		status?: GetBatchesBatchStatus | null;

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount?: number | null;
	}
	export interface GetItemsBatchInternationalTransferReturnItemsFormProperties {

		/** The amount of funds to send. In cent or pence */
		amount: FormControl<number | null | undefined>,

		/** The amount of the transfer after fees and taxes. in pence or cent. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** A UUID for this item. */
		batchItemUuid: FormControl<string | null | undefined>,

		/** The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z */
		dateCreated: FormControl<Date | null | undefined>,

		/** The fee charged by fire.com for the payment. In pence or cent. */
		feeAmount: FormControl<number | null | undefined>,

		/** The Fire account ID of the source account. */
		icanFrom: FormControl<number | null | undefined>,

		/** The Fire account ID for the fire.com account the funds are sent to. */
		icanTo: FormControl<number | null | undefined>,

		/** The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The reference on the transaction. */
		ref: FormControl<string | null | undefined>,

		/** The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint. */
		refId: FormControl<number | null | undefined>,

		/** status of the batch if internal trasnfer */
		status: FormControl<GetBatchesBatchStatus | null | undefined>,

		/** Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent. */
		taxAmount: FormControl<number | null | undefined>,
	}
	export function CreateGetItemsBatchInternationalTransferReturnItemsFormGroup() {
		return new FormGroup<GetItemsBatchInternationalTransferReturnItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			batchItemUuid: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			icanFrom: new FormControl<number | null | undefined>(undefined),
			icanTo: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<GetBatchesBatchStatus | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemsBatchInternationalTransferReturnItemsResult {
		code?: number | null;
		message?: string | null;
	}
	export interface GetItemsBatchInternationalTransferReturnItemsResultFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetItemsBatchInternationalTransferReturnItemsResultFormGroup() {
		return new FormGroup<GetItemsBatchInternationalTransferReturnItemsResultFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddInternationalTransferBatchPaymentPostBody {

		/** The value of the payment in the beneficiary currency. */
		amount?: number | null;

		/** The Fire account ID for the fire.com account the funds are taken from. */
		icanFrom?: number | null;

		/** The reference on the transaction for your records - not shown to the beneficiary. */
		myRef?: string | null;

		/** The ID of the existing payee */
		payeeId?: number | null;

		/** The reason for the payment, used for transaction monitoring purposes. Must be one of Invoice Payment|Salary/Dividend Payment|Expenses|Savings|Other */
		paymentReason?: string | null;

		/** The reference on the transaction - displayed on the beneficiary bank statement. */
		yourRef?: string | null;
	}
	export interface AddInternationalTransferBatchPaymentPostBodyFormProperties {

		/** The value of the payment in the beneficiary currency. */
		amount: FormControl<number | null | undefined>,

		/** The Fire account ID for the fire.com account the funds are taken from. */
		icanFrom: FormControl<number | null | undefined>,

		/** The reference on the transaction for your records - not shown to the beneficiary. */
		myRef: FormControl<string | null | undefined>,

		/** The ID of the existing payee */
		payeeId: FormControl<number | null | undefined>,

		/** The reason for the payment, used for transaction monitoring purposes. Must be one of Invoice Payment|Salary/Dividend Payment|Expenses|Savings|Other */
		paymentReason: FormControl<string | null | undefined>,

		/** The reference on the transaction - displayed on the beneficiary bank statement. */
		yourRef: FormControl<string | null | undefined>,
	}
	export function CreateAddInternationalTransferBatchPaymentPostBodyFormGroup() {
		return new FormGroup<AddInternationalTransferBatchPaymentPostBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			icanFrom: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<number | null | undefined>(undefined),
			paymentReason: new FormControl<string | null | undefined>(undefined),
			yourRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddInternationalTransferBatchPaymentReturn {

		/** A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch. */
		batchItemUuid?: string | null;
	}
	export interface AddInternationalTransferBatchPaymentReturnFormProperties {

		/** A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch. */
		batchItemUuid: FormControl<string | null | undefined>,
	}
	export function CreateAddInternationalTransferBatchPaymentReturnFormGroup() {
		return new FormGroup<AddInternationalTransferBatchPaymentReturnFormProperties>({
			batchItemUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3Return {
		GetTransactionsByAccountIdv3ReturnContent?: Array<GetTransactionsByAccountIdv3ReturnContent>;
		GetTransactionsByAccountIdv3ReturnLinks?: Array<GetTransactionsByAccountIdv3ReturnLinks>;
	}
	export interface GetTransactionsByAccountIdv3ReturnFormProperties {
	}
	export function CreateGetTransactionsByAccountIdv3ReturnFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnFormProperties>({
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContent {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges?: number | null;

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges?: number | null;

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance?: number | null;

		/** Details of the batch run if this transaction was part of a batch. */
		batchItemDetails?: GetTransactionsByAccountIdv3ReturnContentBatchItemDetails;

		/** Details of the card used (if applicable) */
		card?: GetTransactionsByAccountIdv3ReturnContentCard;

		/** The currency. */
		currency?: GetTransactionsByAccountIdv3ReturnContentCurrency;

		/** Date of the transaction */
		date?: Date | null;
		dateAcknowledged?: Date | null;

		/** Details of the direct debit (if applicable) */
		directDebitDetails?: GetTransactionsByAccountIdv3ReturnContentDirectDebitDetails;

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid?: string | null;

		/** The amount of the fee, if any. */
		feeAmount?: number | null;

		/** Details of the FX trade (if applicable) */
		fxTradeDetails?: GetTransactionsByAccountIdv3ReturnContentFxTradeDetails;

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican?: number | null;

		/** The comment/reference on the transaction */
		myRef?: string | null;

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode?: string | null;

		/** Extra details about the transaction based on the scheme used to make the payment. */
		GetTransactionsByAccountIdv3ReturnContentProprietarySchemeDetails?: Array<GetTransactionsByAccountIdv3ReturnContentProprietarySchemeDetails>;

		/** The id of the transaction. */
		refId?: number | null;

		/** Details of the related third party involved in the transaction. */
		relatedParty?: GetTransactionsByAccountIdv3ReturnContentRelatedParty;

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount?: number | null;

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId?: number | null;

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type?: string | null;

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentFormProperties {

		/** Net amount lodged or taken from the account after fees and charges were applied. */
		amountAfterCharges: FormControl<number | null | undefined>,

		/** Amount of the transaction before the fees and taxes were applied. */
		amountBeforeCharges: FormControl<number | null | undefined>,

		/** the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account). */
		balance: FormControl<number | null | undefined>,

		/** Date of the transaction */
		date: FormControl<Date | null | undefined>,
		dateAcknowledged: FormControl<Date | null | undefined>,

		/** An internal Fire reference for the transaction (UUID) */
		eventUuid: FormControl<string | null | undefined>,

		/** The amount of the fee, if any. */
		feeAmount: FormControl<number | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version. */
		ican: FormControl<number | null | undefined>,

		/** The comment/reference on the transaction */
		myRef: FormControl<string | null | undefined>,

		/** (FOP payments only) The FOP Payment Code that was used to make this payment. */
		paymentRequestPublicCode: FormControl<string | null | undefined>,

		/** The id of the transaction. */
		refId: FormControl<number | null | undefined>,

		/** The amount of the tax, if any (e.g. Stamp duty for ATM transactions) */
		taxAmount: FormControl<number | null | undefined>,

		/** The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction. */
		txnId: FormControl<number | null | undefined>,

		/**
		 * The type of the transaction:
		 * * `LODGEMENT` - Bank Transfer received
		 * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
		 * * `MANUAL_TRANSFER` - Manual Transfer to
		 * * `WITHDRAWAL` - Bank Transfer sent
		 * * `REVERSAL` - Credit Reversal
		 * * `DIRECT_DEBIT` - A direct debit.
		 * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
		 * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
		 * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
		 * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
		 * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
		 * * `LODGEMENT_REVERSED` - Bank Transfer received returned
		 * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
		 * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
		 * * `CREATE_CARD` - The fee taken when a debit card is issued.
		 * * `ADD_ACCOUNT` - The fee taken when an account is created.
		 * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
		 * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
		 * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
		 * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
		 * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
		 * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
		 * * `CARD_ATM_DEBIT` - Card used in an ATM
		 * * `CARD_ATM_CREDIT` - Card used in an ATM
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
		 * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
		 * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
		 * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
		 * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
		 * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
		 * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
		 * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
		 * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
		 */
		type: FormControl<string | null | undefined>,

		/** The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals */
		yourRef: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentFormProperties>({
			amountAfterCharges: new FormControl<number | null | undefined>(undefined),
			amountBeforeCharges: new FormControl<number | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dateAcknowledged: new FormControl<Date | null | undefined>(undefined),
			eventUuid: new FormControl<string | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			ican: new FormControl<number | null | undefined>(undefined),
			myRef: new FormControl<string | null | undefined>(undefined),
			paymentRequestPublicCode: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<number | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
			txnId: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			yourRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentBatchItemDetails {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid?: string | null;

		/** The optional name given to the batch at creation time. */
		batchName?: string | null;

		/** The UUID for this batch. */
		batchPublicUuid?: string | null;

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentBatchItemDetailsFormProperties {

		/** The UUID for this item in the batch. */
		batchItemPublicUuid: FormControl<string | null | undefined>,

		/** The optional name given to the batch at creation time. */
		batchName: FormControl<string | null | undefined>,

		/** The UUID for this batch. */
		batchPublicUuid: FormControl<string | null | undefined>,

		/** The optional job number given to the batch to link it to your own system. */
		jobNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentBatchItemDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentBatchItemDetailsFormProperties>({
			batchItemPublicUuid: new FormControl<string | null | undefined>(undefined),
			batchName: new FormControl<string | null | undefined>(undefined),
			batchPublicUuid: new FormControl<string | null | undefined>(undefined),
			jobNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentCard {
		alias?: string | null;
		cardId?: number | null;
		embossBusinessName?: string | null;
		embossCardName?: string | null;
		expiryDate?: Date | null;
		maskedPan?: string | null;
		provider?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentCardFormProperties {
		alias: FormControl<string | null | undefined>,
		cardId: FormControl<number | null | undefined>,
		embossBusinessName: FormControl<string | null | undefined>,
		embossCardName: FormControl<string | null | undefined>,
		expiryDate: FormControl<Date | null | undefined>,
		maskedPan: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentCardFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentCardFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			cardId: new FormControl<number | null | undefined>(undefined),
			embossBusinessName: new FormControl<string | null | undefined>(undefined),
			embossCardName: new FormControl<string | null | undefined>(undefined),
			expiryDate: new FormControl<Date | null | undefined>(undefined),
			maskedPan: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentCurrency {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code?: GetAccountsReturnAccountsCurrencyCode | null;

		/** The name of the currency */
		description?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentCurrencyFormProperties {

		/** The three letter code for the currency - either `EUR` or `GBP`. */
		code: FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>,

		/** The name of the currency */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentCurrencyFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentCurrencyFormProperties>({
			code: new FormControl<GetAccountsReturnAccountsCurrencyCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentDirectDebitDetails {

		/** The direct debit reference. */
		directDebitReference?: string | null;

		/** The UUID for the direct debit payment */
		directDebitUuid?: string | null;

		/** the reference of the mandate */
		mandateReference?: string | null;

		/** The UUID for the mandate */
		mandateUUid?: string | null;

		/** The UUID for the mandate */
		mandateUuid?: string | null;

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias?: string | null;

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge?: string | null;

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall?: string | null;

		/** The creator of the party who sets up the direct debit. */
		originatorName?: string | null;

		/** Set by party who sets up the direct debit. */
		originatorReference?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentDirectDebitDetailsFormProperties {

		/** The direct debit reference. */
		directDebitReference: FormControl<string | null | undefined>,

		/** The UUID for the direct debit payment */
		directDebitUuid: FormControl<string | null | undefined>,

		/** the reference of the mandate */
		mandateReference: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUUid: FormControl<string | null | undefined>,

		/** The UUID for the mandate */
		mandateUuid: FormControl<string | null | undefined>,

		/** The Alias of the party who sets up the direct debit. */
		originatorAlias: FormControl<string | null | undefined>,

		/** URL pointing to a large version of the Originator Logo (if available) */
		originatorLogoUrlLarge: FormControl<string | null | undefined>,

		/** URL pointing to a small version of the Originator Logo (if available) */
		originatorLogoUrlSmall: FormControl<string | null | undefined>,

		/** The creator of the party who sets up the direct debit. */
		originatorName: FormControl<string | null | undefined>,

		/** Set by party who sets up the direct debit. */
		originatorReference: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentDirectDebitDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentDirectDebitDetailsFormProperties>({
			directDebitReference: new FormControl<string | null | undefined>(undefined),
			directDebitUuid: new FormControl<string | null | undefined>(undefined),
			mandateReference: new FormControl<string | null | undefined>(undefined),
			mandateUUid: new FormControl<string | null | undefined>(undefined),
			mandateUuid: new FormControl<string | null | undefined>(undefined),
			originatorAlias: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlLarge: new FormControl<string | null | undefined>(undefined),
			originatorLogoUrlSmall: new FormControl<string | null | undefined>(undefined),
			originatorName: new FormControl<string | null | undefined>(undefined),
			originatorReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentFxTradeDetails {

		/** amount of buyCurrency being bought */
		buyAmount?: number | null;

		/** currency which is being bought */
		buyCurrency?: string | null;

		/** type of trade - BUY or SELL */
		fixedSide?: string | null;

		/** The FX provider used to make the trade. */
		provider?: string | null;

		/** exchange rate */
		rate4d?: number | null;

		/** amount of sellCurrency being sold */
		sellAmount?: number | null;

		/** currency which is being sold */
		sellCurrency?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentFxTradeDetailsFormProperties {

		/** amount of buyCurrency being bought */
		buyAmount: FormControl<number | null | undefined>,

		/** currency which is being bought */
		buyCurrency: FormControl<string | null | undefined>,

		/** type of trade - BUY or SELL */
		fixedSide: FormControl<string | null | undefined>,

		/** The FX provider used to make the trade. */
		provider: FormControl<string | null | undefined>,

		/** exchange rate */
		rate4d: FormControl<number | null | undefined>,

		/** amount of sellCurrency being sold */
		sellAmount: FormControl<number | null | undefined>,

		/** currency which is being sold */
		sellCurrency: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentFxTradeDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentFxTradeDetailsFormProperties>({
			buyAmount: new FormControl<number | null | undefined>(undefined),
			buyCurrency: new FormControl<string | null | undefined>(undefined),
			fixedSide: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			rate4d: new FormControl<number | null | undefined>(undefined),
			sellAmount: new FormControl<number | null | undefined>(undefined),
			sellCurrency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentProprietarySchemeDetails {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data?: string | null;

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentProprietarySchemeDetailsFormProperties {

		/** the scheme proprietary data - key pairs separated by | and key/values separated by ^ */
		data: FormControl<string | null | undefined>,

		/** the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentProprietarySchemeDetailsFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentProprietarySchemeDetailsFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentRelatedParty {
		account?: GetTransactionsByAccountIdv3ReturnContentRelatedPartyAccount;
		type?: GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentRelatedPartyFormProperties {
		type: FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentRelatedPartyFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentRelatedPartyFormProperties>({
			type: new FormControl<GetTransactionsByAccountIdv1ReturnTransactionsRelatedPartyType | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnContentRelatedPartyAccount {

		/** the Account Number of the account. */
		accountNumber?: string | null;

		/** the name the user gives to the account to help them identify it. */
		alias?: string | null;

		/** the BIC of the account (provided if currency is EUR). */
		bic?: string | null;

		/** the IBAN of the account (provided if currency is EUR). */
		iban?: string | null;

		/** identifier for the fire.com account (assigned by fire.com) */
		id?: number | null;

		/** the Sort Code of the account. */
		nsc?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnContentRelatedPartyAccountFormProperties {

		/** the Account Number of the account. */
		accountNumber: FormControl<string | null | undefined>,

		/** the name the user gives to the account to help them identify it. */
		alias: FormControl<string | null | undefined>,

		/** the BIC of the account (provided if currency is EUR). */
		bic: FormControl<string | null | undefined>,

		/** the IBAN of the account (provided if currency is EUR). */
		iban: FormControl<string | null | undefined>,

		/** identifier for the fire.com account (assigned by fire.com) */
		id: FormControl<number | null | undefined>,

		/** the Sort Code of the account. */
		nsc: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnContentRelatedPartyAccountFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnContentRelatedPartyAccountFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			nsc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsByAccountIdv3ReturnLinks {

		/** https://api.fire.com/business/v3/accounts/1/transactions?startAfter=eyJpY2F */
		href?: string | null;

		/** The relationship of this link to the current object - self, next, prev page. */
		rel?: string | null;
	}
	export interface GetTransactionsByAccountIdv3ReturnLinksFormProperties {

		/** https://api.fire.com/business/v3/accounts/1/transactions?startAfter=eyJpY2F */
		href: FormControl<string | null | undefined>,

		/** The relationship of this link to the current object - self, next, prev page. */
		rel: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsByAccountIdv3ReturnLinksFormGroup() {
		return new FormGroup<GetTransactionsByAccountIdv3ReturnLinksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

}

