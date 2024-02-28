import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccountBalance {

		/**
		 * Current available funds in this account
		 * Type: double
		 */
		availableFunds?: number | null;

		/**
		 * Current balance of account
		 * Required
		 * Type: double
		 */
		balance: number;

		/**
		 * A three-character ISO4217 currency code. This will be the currency that the user registered in
		 * Required
		 */
		currencyCode: string;

		/**
		 * Current withdrawable balance of this account
		 * Type: double
		 */
		withdrawableFunds?: number | null;
	}
	export interface AccountBalanceFormProperties {

		/**
		 * Current available funds in this account
		 * Type: double
		 */
		availableFunds: FormControl<number | null | undefined>,

		/**
		 * Current balance of account
		 * Required
		 * Type: double
		 */
		balance: FormControl<number | null | undefined>,

		/**
		 * A three-character ISO4217 currency code. This will be the currency that the user registered in
		 * Required
		 */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Current withdrawable balance of this account
		 * Type: double
		 */
		withdrawableFunds: FormControl<number | null | undefined>,
	}
	export function CreateAccountBalanceFormGroup() {
		return new FormGroup<AccountBalanceFormProperties>({
			availableFunds: new FormControl<number | null | undefined>(undefined, [Validators.pattern('([0-9]*.[0-9]{2})')]),
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.pattern('([0-9]*.[0-9]{2})')]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			withdrawableFunds: new FormControl<number | null | undefined>(undefined, [Validators.pattern('([0-9]*.[0-9]{2})')]),
		});

	}

	export interface AccountErrors {
		errors?: Array<Error>;
	}
	export interface AccountErrorsFormProperties {
	}
	export function CreateAccountErrorsFormGroup() {
		return new FormGroup<AccountErrorsFormProperties>({
		});

	}

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

	export interface AccountFlagsSet {
		token?: string | null;
	}
	export interface AccountFlagsSetFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateAccountFlagsSetFormGroup() {
		return new FormGroup<AccountFlagsSetFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accounts {

		/** Account ID */
		accountId?: string | null;

		/**
		 * Account number
		 * Required
		 */
		accountNum: string;

		/** The city of the customer's address */
		city?: string | null;

		/** Is it okay for the bookmaker to contact the customer with marketing information */
		contactable?: boolean | null;

		/** The country of the customer's address */
		country?: string | null;

		/** A two-character ISO 3166-1-Alpha-2 code representing the customer's country of registration */
		countryCode?: string | null;

		/** The county of the customer's address */
		county?: string | null;

		/** A three-character ISO4217 currency code. This will be the currency that the customer registered in */
		currencyCode?: string | null;

		/** Customer ID */
		customerId?: string | null;

		/** The primary email address of the customer with that account. Must be unique. */
		email?: string | null;

		/**
		 * The first name of the customer with that account
		 * Required
		 */
		firstName: string;
		AccountsFlags?: Array<AccountsFlags>;

		/**
		 * The last name of the customer with that account
		 * Required
		 */
		lastName: string;

		/** The mobile number of the customer with that account */
		mobile?: string | null;

		/** Is it okay for the bookmaker to give the user's contact details to companies with which it has partnerships */
		partnerContactable?: boolean | null;

		/** The postCode of the customer's address */
		postcode?: string | null;

		/**
		 * Account status
		 * Required
		 */
		status: string;

		/** Line number 1 of the customer's street address written out in full */
		street1?: string | null;

		/** Line number 2 of the customer's street address written out in full */
		street2?: string | null;

		/** Line number 3 of the customer's street address written out in full */
		street3?: string | null;

		/** The title of the name of the customer with that account */
		title?: string | null;
	}
	export interface AccountsFormProperties {

		/** Account ID */
		accountId: FormControl<string | null | undefined>,

		/**
		 * Account number
		 * Required
		 */
		accountNum: FormControl<string | null | undefined>,

		/** The city of the customer's address */
		city: FormControl<string | null | undefined>,

		/** Is it okay for the bookmaker to contact the customer with marketing information */
		contactable: FormControl<boolean | null | undefined>,

		/** The country of the customer's address */
		country: FormControl<string | null | undefined>,

		/** A two-character ISO 3166-1-Alpha-2 code representing the customer's country of registration */
		countryCode: FormControl<string | null | undefined>,

		/** The county of the customer's address */
		county: FormControl<string | null | undefined>,

		/** A three-character ISO4217 currency code. This will be the currency that the customer registered in */
		currencyCode: FormControl<string | null | undefined>,

		/** Customer ID */
		customerId: FormControl<string | null | undefined>,

		/** The primary email address of the customer with that account. Must be unique. */
		email: FormControl<string | null | undefined>,

		/**
		 * The first name of the customer with that account
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * The last name of the customer with that account
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/** The mobile number of the customer with that account */
		mobile: FormControl<string | null | undefined>,

		/** Is it okay for the bookmaker to give the user's contact details to companies with which it has partnerships */
		partnerContactable: FormControl<boolean | null | undefined>,

		/** The postCode of the customer's address */
		postcode: FormControl<string | null | undefined>,

		/**
		 * Account status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Line number 1 of the customer's street address written out in full */
		street1: FormControl<string | null | undefined>,

		/** Line number 2 of the customer's street address written out in full */
		street2: FormControl<string | null | undefined>,

		/** Line number 3 of the customer's street address written out in full */
		street3: FormControl<string | null | undefined>,

		/** The title of the name of the customer with that account */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAccountsFormGroup() {
		return new FormGroup<AccountsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountNum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined),
			contactable: new FormControl<boolean | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mobile: new FormControl<string | null | undefined>(undefined),
			partnerContactable: new FormControl<boolean | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street1: new FormControl<string | null | undefined>(undefined),
			street2: new FormControl<string | null | undefined>(undefined),
			street3: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsFlags {

		/**
		 * Name of the flag to set.
		 * Required
		 */
		flagName: string;

		/** The reason that the flag has been set. */
		flagReason?: string | null;

		/**
		 * Value to set the flag to.
		 * Required
		 */
		flagValue: string;
	}
	export interface AccountsFlagsFormProperties {

		/**
		 * Name of the flag to set.
		 * Required
		 */
		flagName: FormControl<string | null | undefined>,

		/** The reason that the flag has been set. */
		flagReason: FormControl<string | null | undefined>,

		/**
		 * Value to set the flag to.
		 * Required
		 */
		flagValue: FormControl<string | null | undefined>,
	}
	export function CreateAccountsFlagsFormGroup() {
		return new FormGroup<AccountsFlagsFormProperties>({
			flagName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flagReason: new FormControl<string | null | undefined>(undefined),
			flagValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FlagsElement {

		/**
		 * Name of the flag to set.
		 * Required
		 */
		flagName: string;

		/** The reason that the flag has been set. */
		flagReason?: string | null;

		/**
		 * Value to set the flag to.
		 * Required
		 */
		flagValue: string;
	}
	export interface FlagsElementFormProperties {

		/**
		 * Name of the flag to set.
		 * Required
		 */
		flagName: FormControl<string | null | undefined>,

		/** The reason that the flag has been set. */
		flagReason: FormControl<string | null | undefined>,

		/**
		 * Value to set the flag to.
		 * Required
		 */
		flagValue: FormControl<string | null | undefined>,
	}
	export function CreateFlagsElementFormGroup() {
		return new FormGroup<FlagsElementFormProperties>({
			flagName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flagReason: new FormControl<string | null | undefined>(undefined),
			flagValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPayments {
		payments?: Array<Payment>;
	}
	export interface GetPaymentsFormProperties {
	}
	export function CreateGetPaymentsFormGroup() {
		return new FormGroup<GetPaymentsFormProperties>({
		});

	}

	export interface Payment {

		/**
		 * Action of the payment (D = Deposit, W = withdrawal)
		 * Required
		 */
		action: string;

		/**
		 * The amount of the payment
		 * Required
		 * Type: double
		 */
		amount: number;

		/** The channel through which the payment was made */
		channel?: string | null;

		/**
		 * The commision for the payment
		 * Type: double
		 */
		commision?: number | null;

		/**
		 * ID of the payment
		 * Required
		 */
		id: string;

		/** The IP address from which the payment was made */
		ipAddress?: string | null;

		/** ID of the payment method */
		methodId?: string | null;

		/**
		 * The date and time when the payment was made
		 * Required
		 */
		paymentDateTime: string;

		/**
		 * The status of the payment
		 * Required
		 */
		status: string;

		/** Type of the payment */
		type?: string | null;
	}
	export interface PaymentFormProperties {

		/**
		 * Action of the payment (D = Deposit, W = withdrawal)
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * The amount of the payment
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** The channel through which the payment was made */
		channel: FormControl<string | null | undefined>,

		/**
		 * The commision for the payment
		 * Type: double
		 */
		commision: FormControl<number | null | undefined>,

		/**
		 * ID of the payment
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The IP address from which the payment was made */
		ipAddress: FormControl<string | null | undefined>,

		/** ID of the payment method */
		methodId: FormControl<string | null | undefined>,

		/**
		 * The date and time when the payment was made
		 * Required
		 */
		paymentDateTime: FormControl<string | null | undefined>,

		/**
		 * The status of the payment
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Type of the payment */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(D|W)')]),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.pattern('([0-9]*.[0-9]{2})')]),
			channel: new FormControl<string | null | undefined>(undefined),
			commision: new FormControl<number | null | undefined>(undefined, [Validators.pattern('([0-9]*.[0-9]{2})')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			methodId: new FormControl<string | null | undefined>(undefined),
			paymentDateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([A-Za-z]*)')]),
		});

	}


	/** Online Account */
	export interface OnlineAccount {
		name?: string | null;
		onlineAccountNumber?: string | null;
	}

	/** Online Account */
	export interface OnlineAccountFormProperties {
		name: FormControl<string | null | undefined>,
		onlineAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateOnlineAccountFormGroup() {
		return new FormGroup<OnlineAccountFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			onlineAccountNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Phone Number */
	export interface Phone {
		phoneNumber?: string | null;
	}

	/** Phone Number */
	export interface PhoneFormProperties {
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneFormGroup() {
		return new FormGroup<PhoneFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PIN object - if this object is not returned in plusCardDetails object then it has not been set. */
	export interface PinStatus {

		/** Type: double */
		attemptsRemaining?: number | null;
		blocked?: boolean | null;
	}

	/** PIN object - if this object is not returned in plusCardDetails object then it has not been set. */
	export interface PinStatusFormProperties {

		/** Type: double */
		attemptsRemaining: FormControl<number | null | undefined>,
		blocked: FormControl<boolean | null | undefined>,
	}
	export function CreatePinStatusFormGroup() {
		return new FormGroup<PinStatusFormProperties>({
			attemptsRemaining: new FormControl<number | null | undefined>(undefined),
			blocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Plus Card */
	export interface PlusCard {
		blocked?: boolean | null;
		cardNumber?: string | null;
	}

	/** Plus Card */
	export interface PlusCardFormProperties {
		blocked: FormControl<boolean | null | undefined>,
		cardNumber: FormControl<string | null | undefined>,
	}
	export function CreatePlusCardFormGroup() {
		return new FormGroup<PlusCardFormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined),
			cardNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Plus Card Details and linked accounts */
	export interface PlusCardDetails {

		/** Plus Card */
		card?: PlusCard;

		/** Online Account */
		onlineAccount?: OnlineAccount;

		/** Phone Number */
		phone?: Phone;

		/** PIN object - if this object is not returned in plusCardDetails object then it has not been set. */
		pin?: PinStatus;

		/** Retail Account */
		retailAccount?: RetailAccount;
	}

	/** Plus Card Details and linked accounts */
	export interface PlusCardDetailsFormProperties {
	}
	export function CreatePlusCardDetailsFormGroup() {
		return new FormGroup<PlusCardDetailsFormProperties>({
		});

	}


	/** Retail Account */
	export interface RetailAccount {
		selfExcluded?: boolean | null;
	}

	/** Retail Account */
	export interface RetailAccountFormProperties {
		selfExcluded: FormControl<boolean | null | undefined>,
	}
	export function CreateRetailAccountFormGroup() {
		return new FormGroup<RetailAccountFormProperties>({
			selfExcluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves details of a customers account
		 * Retrieves a limited set of customer account details. For security purposes, only a subset is supplied, which does not include fields such as security questions and answers.
		 * Get account
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @return {Accounts} Success
		 */
		AccountGetByFieldsAndIncludeAndExcludeAndLanguageAsPerTerritory(fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, languageAsPerTerritory: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Accounts> {
			return this.http.get<Accounts>(this.baseUri + 'account?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a customers account balance
		 * This method can be used to retrieve the customer’s account balance in UK Sterling.
		 * Get account/balance
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @return {AccountBalance} Success
		 */
		AccountBalanceGetByFieldsAndIncludeAndExcludeAndLanguageAsPerTerritory(fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, languageAsPerTerritory: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AccountBalance> {
			return this.http.get<AccountBalance>(this.baseUri + 'account/balance?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets a flag based on name to value provided for the user.
		 * Sets a flag based on name to value provided for the user.
		 * Post account/flags
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @param {Array<AccountFlagsPostByLanguageAsPerTerritoryPostBody>} requestBody Array of KVP for setting flags.
		 * @return {AccountFlagsSet} Success
		 */
		AccountFlagsPostByLanguageAsPerTerritory(languageAsPerTerritory: string | null | undefined, requestBody: Array<AccountFlagsPostByLanguageAsPerTerritoryPostBody>, headersHandler?: () => HttpHeaders): Observable<AccountFlagsSet> {
			return this.http.post<AccountFlagsSet>(this.baseUri + 'account/flags?languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a customer's account payments
		 * Retrieves the customer’s account payments in UK Sterling.
		 * Get account/payments
		 * @param {number} page The page number to return (Used with pageSize)
		 * @param {number} pageSize Specify the number of results to return per page.
		 * @param {string} dateFrom The FROM datetime from payments to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {string} dateTo The TO datetime for payments to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {string} sort The order the response will be retuned by. i.e. date,desc
		 * @param {string} transactionType Allows the user to select with they want to see withdrawls or deposits. If it is omitted from the query both types will be returned
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @return {GetPayments} Success - Payments obtained
		 */
		AccountPaymentsGetByPageAndPageSizeAndDateFromAndDateToAndSortAndTransactionTypeAndFieldsAndIncludeAndExcludeAndLanguageAsPerTerritory(page: number | null | undefined, pageSize: number | null | undefined, dateFrom: string | null | undefined, dateTo: string | null | undefined, sort: string | null | undefined, transactionType: string | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, languageAsPerTerritory: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetPayments> {
			return this.http.get<GetPayments>(this.baseUri + 'account/payments?page=' + page + '&pageSize=' + pageSize + '&dateFrom=' + (dateFrom == null ? '' : encodeURIComponent(dateFrom)) + '&dateTo=' + (dateTo == null ? '' : encodeURIComponent(dateTo)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&transactionType=' + (transactionType == null ? '' : encodeURIComponent(transactionType)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a customer's plus card details if they exist.
		 * Gets a customer's plus card details if they exist.
		 * Get account/plusCard
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @return {PlusCardDetails} Success - Plus Card Details
		 */
		AccountPlusCardGetByFieldsAndIncludeAndExclude(fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<PlusCardDetails> {
			return this.http.get<PlusCardDetails>(this.baseUri + 'account/plusCard?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets a customer's plus card as Lost/Stolen
		 * Sets a customer's plus card as Lost/Stolen
		 * Post account/plusCard/lostStolen
		 * @return {void} 
		 */
		AccountPlusCardLostStolenPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/plusCard/lostStolen', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets a customer's plus card phone number
		 * Sets a customer's plus card phone number
		 * Post account/plusCard/phone/{oldPhoneNumber}
		 * @param {string} oldPhoneNumber Old phone number to replace
		 * @param {Phone} requestBody Phone Number to be set.
		 * @return {void} 
		 */
		AccountPlusCardPhone_oldPhoneNumberPost(oldPhoneNumber: string, requestBody: Phone, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/plusCard/phone/' + (oldPhoneNumber == null ? '' : encodeURIComponent(oldPhoneNumber)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a customer's plus card pin
		 * Updates a customer's plus card pin
		 * Put account/plusCard/pin
		 * @param {number} requestBody PIN to be set.
		 * @return {void} 
		 */
		AccountPlusCardPinPut(requestBody: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/plusCard/pin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets a customer's plus card pin
		 * Sets a customer's plus card pin
		 * Post account/plusCard/pin
		 * @param {number} requestBody PIN to be set.
		 * @return {void} 
		 */
		AccountPlusCardPinPost(requestBody: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/plusCard/pin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export interface AccountFlagsPostByLanguageAsPerTerritoryPostBody {

		/**
		 * Name of the flag to set.
		 * Required
		 */
		flagName: string;

		/** The reason that the flag has been set. */
		flagReason?: string | null;

		/**
		 * Value to set the flag to.
		 * Required
		 */
		flagValue: string;
	}
	export interface AccountFlagsPostByLanguageAsPerTerritoryPostBodyFormProperties {

		/**
		 * Name of the flag to set.
		 * Required
		 */
		flagName: FormControl<string | null | undefined>,

		/** The reason that the flag has been set. */
		flagReason: FormControl<string | null | undefined>,

		/**
		 * Value to set the flag to.
		 * Required
		 */
		flagValue: FormControl<string | null | undefined>,
	}
	export function CreateAccountFlagsPostByLanguageAsPerTerritoryPostBodyFormGroup() {
		return new FormGroup<AccountFlagsPostByLanguageAsPerTerritoryPostBodyFormProperties>({
			flagName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flagReason: new FormControl<string | null | undefined>(undefined),
			flagValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

