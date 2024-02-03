import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case. */
	export enum CountryCode { AD = 'AD', AE = 'AE', AF = 'AF', AG = 'AG', AI = 'AI', AL = 'AL', AM = 'AM', AN = 'AN', AO = 'AO', AQ = 'AQ', AR = 'AR', AS = 'AS', AT = 'AT', AU = 'AU', AW = 'AW', AZ = 'AZ', BA = 'BA', BB = 'BB', BD = 'BD', BE = 'BE', BF = 'BF', BG = 'BG', BH = 'BH', BI = 'BI', BJ = 'BJ', BL = 'BL', BM = 'BM', BN = 'BN', BO = 'BO', BR = 'BR', BS = 'BS', BT = 'BT', BW = 'BW', BY = 'BY', BZ = 'BZ', CA = 'CA', CC = 'CC', CD = 'CD', CF = 'CF', CG = 'CG', CH = 'CH', CI = 'CI', CK = 'CK', CL = 'CL', CM = 'CM', CN = 'CN', CO = 'CO', CR = 'CR', CU = 'CU', CV = 'CV', CW = 'CW', CX = 'CX', CY = 'CY', CZ = 'CZ', DE = 'DE', DJ = 'DJ', DK = 'DK', DM = 'DM', DO = 'DO', DZ = 'DZ', EC = 'EC', EE = 'EE', EG = 'EG', EH = 'EH', ER = 'ER', ES = 'ES', ET = 'ET', FI = 'FI', FJ = 'FJ', FK = 'FK', FM = 'FM', FO = 'FO', FR = 'FR', GA = 'GA', GB = 'GB', GD = 'GD', GE = 'GE', GG = 'GG', GH = 'GH', GI = 'GI', GL = 'GL', GM = 'GM', GN = 'GN', GQ = 'GQ', GR = 'GR', GT = 'GT', GU = 'GU', GW = 'GW', GY = 'GY', HK = 'HK', HN = 'HN', HR = 'HR', HT = 'HT', HU = 'HU', ID = 'ID', IE = 'IE', IL = 'IL', IM = 'IM', IN = 'IN', IO = 'IO', IQ = 'IQ', IR = 'IR', IS = 'IS', IT = 'IT', JE = 'JE', JM = 'JM', JO = 'JO', JP = 'JP', KE = 'KE', KG = 'KG', KH = 'KH', KI = 'KI', KM = 'KM', KN = 'KN', KP = 'KP', KR = 'KR', KW = 'KW', KY = 'KY', KZ = 'KZ', LA = 'LA', LB = 'LB', LC = 'LC', LI = 'LI', LK = 'LK', LR = 'LR', LS = 'LS', LT = 'LT', LU = 'LU', LV = 'LV', LY = 'LY', MA = 'MA', MC = 'MC', MD = 'MD', ME = 'ME', MF = 'MF', MG = 'MG', MH = 'MH', MK = 'MK', ML = 'ML', MM = 'MM', MN = 'MN', MO = 'MO', MP = 'MP', MR = 'MR', MS = 'MS', MT = 'MT', MU = 'MU', MV = 'MV', MW = 'MW', MX = 'MX', MY = 'MY', MZ = 'MZ', NA = 'NA', NC = 'NC', NE = 'NE', NG = 'NG', NI = 'NI', NL = 'NL', NO = 'NO', NP = 'NP', NR = 'NR', NU = 'NU', NZ = 'NZ', OM = 'OM', PA = 'PA', PE = 'PE', PF = 'PF', PG = 'PG', PH = 'PH', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PR = 'PR', PS = 'PS', PT = 'PT', PW = 'PW', PY = 'PY', QA = 'QA', RE = 'RE', RO = 'RO', RS = 'RS', RU = 'RU', RW = 'RW', SA = 'SA', SB = 'SB', SC = 'SC', SD = 'SD', SE = 'SE', SG = 'SG', SH = 'SH', SI = 'SI', SJ = 'SJ', SK = 'SK', SL = 'SL', SM = 'SM', SN = 'SN', SO = 'SO', SR = 'SR', SS = 'SS', ST = 'ST', SV = 'SV', SX = 'SX', SY = 'SY', SZ = 'SZ', TC = 'TC', TD = 'TD', TG = 'TG', TH = 'TH', TJ = 'TJ', TK = 'TK', TL = 'TL', TM = 'TM', TN = 'TN', TO = 'TO', TR = 'TR', TT = 'TT', TV = 'TV', TW = 'TW', TZ = 'TZ', UA = 'UA', UG = 'UG', US = 'US', UY = 'UY', UZ = 'UZ', VA = 'VA', VC = 'VC', VE = 'VE', VG = 'VG', VI = 'VI', VN = 'VN', VU = 'VU', WF = 'WF', WS = 'WS', XK = 'XK', YE = 'YE', YT = 'YT', ZA = 'ZA', ZM = 'ZM', ZW = 'ZW' }


	/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
	export enum CreditDebitIndicator { CREDIT = 'CREDIT', DEBIT = 'DEBIT' }


	/** 3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD. */
	export enum CurrencyCode { AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYN = 'BYN', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHF = 'CHF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GGP = 'GGP', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', IMP = 'IMP', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JEP = 'JEP', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRU = 'MRU', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SPL = 'SPL', SRD = 'SRD', STN = 'STN', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRY = 'TRY', TTD = 'TTD', TVD = 'TVD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPF = 'XPF', YER = 'YER', ZAR = 'ZAR', ZMW = 'ZMW', ZMK = 'ZMK', ZWD = 'ZWD', '' = '' }


	/** The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount. */
	export interface EndBalance {
		amount?: number | null;

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator?: CreditDebitIndicator | null;
	}

	/** The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount. */
	export interface EndBalanceFormProperties {
		amount: FormControl<number | null | undefined>,

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator: FormControl<CreditDebitIndicator | null | undefined>,
	}
	export function CreateEndBalanceFormGroup() {
		return new FormGroup<EndBalanceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			creditDebitIndicator: new FormControl<CreditDebitIndicator | null | undefined>(undefined),
		});

	}


	/** On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json. */
	export interface Error {

		/**
		 * Human readable detailed error description.
		 * Maximum: 255
		 */
		detail?: string | null;

		/** The numeric HTTP Status Code, e.g. 404 */
		status?: number | null;

		/**
		 * Human readable high level error description.
		 * Maximum: 255
		 */
		title?: string | null;

		/** Identifies the type of error. */
		type?: ErrorType | null;
	}

	/** On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json. */
	export interface ErrorFormProperties {

		/**
		 * Human readable detailed error description.
		 * Maximum: 255
		 */
		detail: FormControl<string | null | undefined>,

		/** The numeric HTTP Status Code, e.g. 404 */
		status: FormControl<number | null | undefined>,

		/**
		 * Human readable high level error description.
		 * Maximum: 255
		 */
		title: FormControl<string | null | undefined>,

		/** Identifies the type of error. */
		type: FormControl<ErrorType | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ErrorType | null | undefined>(undefined),
		});

	}

	export enum ErrorType { 'invalid-request' = 'invalid-request', 'invalid-application' = 'invalid-application', 'invalid-feed-connection' = 'invalid-feed-connection', 'duplicate-statement' = 'duplicate-statement', 'invalid-end-balance' = 'invalid-end-balance', 'invalid-start-and-end-date' = 'invalid-start-and-end-date', 'invalid-start-date' = 'invalid-start-date', 'internal-error' = 'internal-error', 'feed-already-connected-in-current-organisation' = 'feed-already-connected-in-current-organisation', 'invalid-end-date' = 'invalid-end-date', 'statement-not-found' = 'statement-not-found', 'feed-connected-in-different-organisation' = 'feed-connected-in-different-organisation', 'feed-already-connected-in-different-organisation' = 'feed-already-connected-in-different-organisation', 'bank-feed-not-found' = 'bank-feed-not-found', 'invalid-country-specified' = 'invalid-country-specified', 'invalid-organisation-bank-feeds' = 'invalid-organisation-bank-feeds', 'invalid-organisation-multi-currency' = 'invalid-organisation-multi-currency', 'invalid-feed-connection-for-organisation' = 'invalid-feed-connection-for-organisation', 'invalid-user-role' = 'invalid-user-role', 'account-not-valid' = 'account-not-valid' }

	export interface FeedConnection {

		/** Xero identifier for a bank account in Xero. Must be included if AccountNumber is not specified. */
		accountId?: string | null;

		/**
		 * The Account Name will be used for the creation of a new Xero Bank Account if a matching Xero Bank Account is not found.
		 * Maximum: 30
		 */
		accountName?: string | null;

		/**
		 * String(40) when AccountType is BANK String(4) when AccountType is CREDITCARD The Account Number is used to match the feed to a Xero Bank Account. The API will create a new Xero Bank Account if a match to an existing Xero Bank Account is not found. Only the last 4 digits must be supplied for Credit Card numbers. Must be included if AccountId is not specified.
		 * Maximum: 40
		 */
		accountNumber?: string | null;

		/**
		 * This account identifier is generated by the financial institute (FI). This must be unique for your financial institute.
		 * Maximum: 50
		 */
		accountToken?: string | null;

		/** High level bank account type - BANK CREDITCARD BANK encompasses all bank account types other than credit cards. */
		accountType?: FeedConnectionAccountType | null;

		/** ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case. */
		country?: CountryCode | null;

		/** 3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD. */
		currency?: CurrencyCode | null;

		/** On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json. */
		error?: Error;

		/** GUID used to identify the Account. */
		id?: string | null;

		/** the current status of the feed connection */
		status?: FeedConnectionStatus | null;
	}
	export interface FeedConnectionFormProperties {

		/** Xero identifier for a bank account in Xero. Must be included if AccountNumber is not specified. */
		accountId: FormControl<string | null | undefined>,

		/**
		 * The Account Name will be used for the creation of a new Xero Bank Account if a matching Xero Bank Account is not found.
		 * Maximum: 30
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * String(40) when AccountType is BANK String(4) when AccountType is CREDITCARD The Account Number is used to match the feed to a Xero Bank Account. The API will create a new Xero Bank Account if a match to an existing Xero Bank Account is not found. Only the last 4 digits must be supplied for Credit Card numbers. Must be included if AccountId is not specified.
		 * Maximum: 40
		 */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * This account identifier is generated by the financial institute (FI). This must be unique for your financial institute.
		 * Maximum: 50
		 */
		accountToken: FormControl<string | null | undefined>,

		/** High level bank account type - BANK CREDITCARD BANK encompasses all bank account types other than credit cards. */
		accountType: FormControl<FeedConnectionAccountType | null | undefined>,

		/** ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case. */
		country: FormControl<CountryCode | null | undefined>,

		/** 3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD. */
		currency: FormControl<CurrencyCode | null | undefined>,

		/** GUID used to identify the Account. */
		id: FormControl<string | null | undefined>,

		/** the current status of the feed connection */
		status: FormControl<FeedConnectionStatus | null | undefined>,
	}
	export function CreateFeedConnectionFormGroup() {
		return new FormGroup<FeedConnectionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountToken: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<FeedConnectionAccountType | null | undefined>(undefined),
			country: new FormControl<CountryCode | null | undefined>(undefined),
			currency: new FormControl<CurrencyCode | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FeedConnectionStatus | null | undefined>(undefined),
		});

	}

	export enum FeedConnectionAccountType { BANK = 'BANK', CREDITCARD = 'CREDITCARD' }

	export enum FeedConnectionStatus { PENDING = 'PENDING', REJECTED = 'REJECTED' }

	export interface FeedConnections {
		items?: Array<FeedConnection>;
		pagination?: Pagination;
	}
	export interface FeedConnectionsFormProperties {
	}
	export function CreateFeedConnectionsFormGroup() {
		return new FormGroup<FeedConnectionsFormProperties>({
		});

	}

	export interface Pagination {

		/** Number of items returned */
		itemCount?: number | null;

		/** Page number which specifies the set of records to retrieve. Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?page=2 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned. */
		page?: number | null;

		/** Number of pages available */
		pageCount?: number | null;

		/** Page size which specifies how many records per page will be returned (default 50). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100. */
		pageSize?: number | null;
	}
	export interface PaginationFormProperties {

		/** Number of items returned */
		itemCount: FormControl<number | null | undefined>,

		/** Page number which specifies the set of records to retrieve. Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?page=2 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned. */
		page: FormControl<number | null | undefined>,

		/** Number of pages available */
		pageCount: FormControl<number | null | undefined>,

		/** Page size which specifies how many records per page will be returned (default 50). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100. */
		pageSize: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			itemCount: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageCount: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The starting balance of the statement */
	export interface StartBalance {

		/** decimal(19,4) unsigned Opening/closing balance amount. */
		amount?: number | null;

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator?: CreditDebitIndicator | null;
	}

	/** The starting balance of the statement */
	export interface StartBalanceFormProperties {

		/** decimal(19,4) unsigned Opening/closing balance amount. */
		amount: FormControl<number | null | undefined>,

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator: FormControl<CreditDebitIndicator | null | undefined>,
	}
	export function CreateStartBalanceFormGroup() {
		return new FormGroup<StartBalanceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			creditDebitIndicator: new FormControl<CreditDebitIndicator | null | undefined>(undefined),
		});

	}

	export interface Statement {

		/** The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount. */
		endBalance?: EndBalance;

		/** Closing balance date ISO-8601 YYYY-MM-DD */
		endDate?: Date | null;
		errors?: Array<Error>;

		/** The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections. */
		feedConnectionId?: string | null;

		/** GUID used to identify the Statement. */
		id?: string | null;

		/** The starting balance of the statement */
		startBalance?: StartBalance;

		/** Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD */
		startDate?: Date | null;
		statementLineCount?: number | null;
		statementLines?: Array<StatementLine>;

		/** Current status of statements */
		status?: StatementStatus | null;
	}
	export interface StatementFormProperties {

		/** Closing balance date ISO-8601 YYYY-MM-DD */
		endDate: FormControl<Date | null | undefined>,

		/** The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections. */
		feedConnectionId: FormControl<string | null | undefined>,

		/** GUID used to identify the Statement. */
		id: FormControl<string | null | undefined>,

		/** Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD */
		startDate: FormControl<Date | null | undefined>,
		statementLineCount: FormControl<number | null | undefined>,

		/** Current status of statements */
		status: FormControl<StatementStatus | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			feedConnectionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			statementLineCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<StatementStatus | null | undefined>(undefined),
		});

	}


	/** the lines details for a statement */
	export interface StatementLine {

		/** Transaction amount */
		amount?: number | null;

		/**
		 * The cheque/check number
		 * Maximum: 20
		 */
		chequeNumber?: string | null;

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator?: CreditDebitIndicator | null;

		/**
		 * Transaction description
		 * Maximum: 2000
		 */
		description?: string | null;

		/**
		 * Typically the merchant or payee name
		 * Maximum: 255
		 */
		payeeName?: string | null;

		/** The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD */
		postedDate?: Date | null;

		/**
		 * Optional field to enhance the Description
		 * Maximum: 255
		 */
		reference?: string | null;

		/** Financial institute's internal transaction identifier. If provided this field is factored into duplicate detection. */
		transactionId?: string | null;
	}

	/** the lines details for a statement */
	export interface StatementLineFormProperties {

		/** Transaction amount */
		amount: FormControl<number | null | undefined>,

		/**
		 * The cheque/check number
		 * Maximum: 20
		 */
		chequeNumber: FormControl<string | null | undefined>,

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator: FormControl<CreditDebitIndicator | null | undefined>,

		/**
		 * Transaction description
		 * Maximum: 2000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Typically the merchant or payee name
		 * Maximum: 255
		 */
		payeeName: FormControl<string | null | undefined>,

		/** The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD */
		postedDate: FormControl<Date | null | undefined>,

		/**
		 * Optional field to enhance the Description
		 * Maximum: 255
		 */
		reference: FormControl<string | null | undefined>,

		/** Financial institute's internal transaction identifier. If provided this field is factored into duplicate detection. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateStatementLineFormGroup() {
		return new FormGroup<StatementLineFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			chequeNumber: new FormControl<string | null | undefined>(undefined),
			creditDebitIndicator: new FormControl<CreditDebitIndicator | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			payeeName: new FormControl<string | null | undefined>(undefined),
			postedDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StatementStatus { PENDING = 'PENDING', REJECTED = 'REJECTED', DELIVERED = 'DELIVERED' }

	export interface Statements {
		items?: Array<Statement>;
		pagination?: Pagination;
	}
	export interface StatementsFormProperties {
	}
	export function CreateStatementsFormGroup() {
		return new FormGroup<StatementsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches for feed connections
		 * By passing in the appropriate options, you can search for available feed connections in the system.
		 * Get FeedConnections
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page=1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.
		 * @param {number} pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize=100 to specify page size of 100.
		 * @return {void} 
		 */
		GetFeedConnections(page: number | null | undefined, pageSize: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'FeedConnections?page=' + page + '&pageSize=' + pageSize, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create one or more new feed connection
		 * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
		 * Post FeedConnections
		 * @param {FeedConnections} requestBody Feed Connection(s) array object in the body
		 * @return {void} 
		 */
		CreateFeedConnections(requestBody: FeedConnections): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'FeedConnections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an existing feed connection
		 * By passing in FeedConnections array object in the body, you can delete a feed connection.
		 * Post FeedConnections/DeleteRequests
		 * @param {FeedConnections} requestBody Feed Connections array object in the body
		 * @return {void} 
		 */
		DeleteFeedConnections(requestBody: FeedConnections): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'FeedConnections/DeleteRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single feed connection based on a unique id provided
		 * By passing in a FeedConnection Id options, you can search for matching feed connections
		 * Get FeedConnections/{id}
		 * @param {string} id Unique identifier for retrieving single object
		 * @return {FeedConnection} success returns a FeedConnection object matching the id in response
		 */
		GetFeedConnection(id: string): Observable<FeedConnection> {
			return this.http.get<FeedConnection>(this.baseUri + 'FeedConnections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieve all statements
		 * By passing in parameters, you can search for matching statements
		 * Get Statements
		 * @param {number} page unique id for single object
		 * @param {number} pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.
		 * @return {Statements} success returns Statements array of objects response
		 */
		GetStatements(page: number | null | undefined, pageSize: number | null | undefined): Observable<Statements> {
			return this.http.get<Statements>(this.baseUri + 'Statements?page=' + page + '&pageSize=' + pageSize, {});
		}

		/**
		 * Creates one or more new statements
		 * Post Statements
		 * @param {Statements} requestBody Statements array of objects in the body
		 * @return {void} 
		 */
		CreateStatements(requestBody: Statements): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Statements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single statement based on unique id provided
		 * By passing in a statement id, you can search for matching statements
		 * Get Statements/{statementID}
		 * @param {string} statementId statement id for single object
		 * @return {Statement} search results matching id for single statement
		 */
		GetStatement(statementId: string, statementID: string): Observable<Statement> {
			return this.http.get<Statement>(this.baseUri + 'Statements/' + (statementID == null ? '' : encodeURIComponent(statementID)) + '?statementId=' + (statementId == null ? '' : encodeURIComponent(statementId)), {});
		}
	}

}

