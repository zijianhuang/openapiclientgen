import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Required */
		address: string;

		/** Required */
		city: string;

		/** Required */
		country_code: AddressCountry_code;

		/** Required */
		post_code: string;
	}
	export interface AddressFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		country_code: FormControl<AddressCountry_code | null | undefined>,

		/** Required */
		post_code: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country_code: new FormControl<AddressCountry_code | null | undefined>(undefined, [Validators.required]),
			post_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddressCountry_code { '' = '', AC = 'AC', AD = 'AD', AE = 'AE', AF = 'AF', AG = 'AG', AI = 'AI', AL = 'AL', AM = 'AM', AO = 'AO', AQ = 'AQ', AR = 'AR', AS = 'AS', AT = 'AT', AU = 'AU', AW = 'AW', AX = 'AX', AZ = 'AZ', BA = 'BA', BB = 'BB', BD = 'BD', BE = 'BE', BF = 'BF', BG = 'BG', BH = 'BH', BI = 'BI', BJ = 'BJ', BL = 'BL', BM = 'BM', BN = 'BN', BO = 'BO', BQ = 'BQ', BR = 'BR', BS = 'BS', BT = 'BT', BW = 'BW', BY = 'BY', BZ = 'BZ', CA = 'CA', CC = 'CC', CD = 'CD', CF = 'CF', CG = 'CG', CH = 'CH', CI = 'CI', CK = 'CK', CL = 'CL', CM = 'CM', CN = 'CN', CO = 'CO', CR = 'CR', CU = 'CU', CV = 'CV', CW = 'CW', CX = 'CX', CY = 'CY', CZ = 'CZ', DE = 'DE', DG = 'DG', DJ = 'DJ', DK = 'DK', DM = 'DM', DO = 'DO', DZ = 'DZ', EA = 'EA', EC = 'EC', EE = 'EE', EG = 'EG', EH = 'EH', ER = 'ER', ES = 'ES', ET = 'ET', FI = 'FI', FJ = 'FJ', FK = 'FK', FM = 'FM', FO = 'FO', FR = 'FR', GA = 'GA', GB = 'GB', GD = 'GD', GE = 'GE', GF = 'GF', GG = 'GG', GH = 'GH', GI = 'GI', GL = 'GL', GM = 'GM', GN = 'GN', GP = 'GP', GQ = 'GQ', GR = 'GR', GS = 'GS', GT = 'GT', GU = 'GU', GW = 'GW', GY = 'GY', HK = 'HK', HN = 'HN', HR = 'HR', HT = 'HT', HU = 'HU', IC = 'IC', ID = 'ID', IE = 'IE', IL = 'IL', IM = 'IM', IN = 'IN', IO = 'IO', IQ = 'IQ', IR = 'IR', IS = 'IS', IT = 'IT', JE = 'JE', JM = 'JM', JO = 'JO', JP = 'JP', KE = 'KE', KG = 'KG', KH = 'KH', KI = 'KI', KM = 'KM', KN = 'KN', KP = 'KP', KR = 'KR', KW = 'KW', KY = 'KY', KZ = 'KZ', LA = 'LA', LB = 'LB', LC = 'LC', LI = 'LI', LK = 'LK', LR = 'LR', LS = 'LS', LT = 'LT', LU = 'LU', LV = 'LV', LY = 'LY', MA = 'MA', MC = 'MC', MD = 'MD', ME = 'ME', MF = 'MF', MG = 'MG', MH = 'MH', MK = 'MK', ML = 'ML', MM = 'MM', MN = 'MN', MO = 'MO', MP = 'MP', MQ = 'MQ', MR = 'MR', MS = 'MS', MT = 'MT', MU = 'MU', MV = 'MV', MW = 'MW', MX = 'MX', MY = 'MY', MZ = 'MZ', NA = 'NA', NC = 'NC', NE = 'NE', NF = 'NF', NG = 'NG', NI = 'NI', NL = 'NL', NO = 'NO', NP = 'NP', NR = 'NR', NU = 'NU', NZ = 'NZ', OM = 'OM', PA = 'PA', PE = 'PE', PF = 'PF', PG = 'PG', PH = 'PH', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PR = 'PR', PS = 'PS', PT = 'PT', PW = 'PW', PY = 'PY', QA = 'QA', RE = 'RE', RO = 'RO', RS = 'RS', RU = 'RU', RW = 'RW', SA = 'SA', SB = 'SB', SC = 'SC', SD = 'SD', SE = 'SE', SG = 'SG', SH = 'SH', SI = 'SI', SJ = 'SJ', SK = 'SK', SL = 'SL', SM = 'SM', SN = 'SN', SO = 'SO', SR = 'SR', SS = 'SS', ST = 'ST', SV = 'SV', SX = 'SX', SY = 'SY', SZ = 'SZ', TA = 'TA', TC = 'TC', TD = 'TD', TF = 'TF', TG = 'TG', TH = 'TH', TJ = 'TJ', TK = 'TK', TL = 'TL', TM = 'TM', TN = 'TN', TO = 'TO', TR = 'TR', TT = 'TT', TV = 'TV', TW = 'TW', TZ = 'TZ', UA = 'UA', UG = 'UG', UM = 'UM', US = 'US', UY = 'UY', UZ = 'UZ', VA = 'VA', VC = 'VC', VE = 'VE', VG = 'VG', VI = 'VI', VN = 'VN', VU = 'VU', WF = 'WF', WS = 'WS', XA = 'XA', XB = 'XB', XK = 'XK', YE = 'YE', YT = 'YT', ZA = 'ZA', ZM = 'ZM', ZW = 'ZW' }

	export interface BankAccount {

		/** Required */
		account_number: string;
		account_number_iban?: string | null;

		/** Required */
		currency: BankAccountCurrency;
		id?: number | null;

		/** Required */
		name: string;
		need_qr?: boolean | null;
		swift?: string | null;
	}
	export interface BankAccountFormProperties {

		/** Required */
		account_number: FormControl<string | null | undefined>,
		account_number_iban: FormControl<string | null | undefined>,

		/** Required */
		currency: FormControl<BankAccountCurrency | null | undefined>,
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		need_qr: FormControl<boolean | null | undefined>,
		swift: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountFormGroup() {
		return new FormGroup<BankAccountFormProperties>({
			account_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			account_number_iban: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			need_qr: new FormControl<boolean | null | undefined>(undefined),
			swift: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BankAccountCurrency { AUD = 'AUD', BGN = 'BGN', BRL = 'BRL', CAD = 'CAD', CHF = 'CHF', CNY = 'CNY', CZK = 'CZK', DKK = 'DKK', EUR = 'EUR', GBP = 'GBP', HKD = 'HKD', HRK = 'HRK', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', ISK = 'ISK', JPY = 'JPY', KRW = 'KRW', LTL = 'LTL', LVL = 'LVL', MXN = 'MXN', MYR = 'MYR', NOK = 'NOK', NZD = 'NZD', PHP = 'PHP', PLN = 'PLN', RON = 'RON', RSD = 'RSD', RUB = 'RUB', SEK = 'SEK', SGD = 'SGD', THB = 'THB', TRY = 'TRY', UAH = 'UAH', USD = 'USD', ZAR = 'ZAR' }


	/** A object with a data property that contains an array of up to limit bank accounts. Each entry in the array is a separate bank account object. If no more bank accounts are available, the resulting array will be empty. */
	export interface BankAccountList {
		current_page?: number | null;
		data?: Array<BankAccount>;
		last_page?: number | null;
		next_page_url?: string | null;
		per_page?: number | null;
		prev_page_url?: string | null;
		total?: number | null;
	}

	/** A object with a data property that contains an array of up to limit bank accounts. Each entry in the array is a separate bank account object. If no more bank accounts are available, the resulting array will be empty. */
	export interface BankAccountListFormProperties {
		current_page: FormControl<number | null | undefined>,
		last_page: FormControl<number | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		per_page: FormControl<number | null | undefined>,
		prev_page_url: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateBankAccountListFormGroup() {
		return new FormGroup<BankAccountListFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			last_page: new FormControl<number | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev_page_url: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientError {
		message?: string | null;
	}
	export interface ClientErrorFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateClientErrorFormGroup() {
		return new FormGroup<ClientErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientErrorResponse {
		error?: ClientError;
	}
	export interface ClientErrorResponseFormProperties {
	}
	export function CreateClientErrorResponseFormGroup() {
		return new FormGroup<ClientErrorResponseFormProperties>({
		});

	}

	export interface ConversationRate {
		conversation_rate?: number | null;
		from_currency?: BankAccountCurrency | null;
		to_currency?: BankAccountCurrency | null;
	}
	export interface ConversationRateFormProperties {
		conversation_rate: FormControl<number | null | undefined>,
		from_currency: FormControl<BankAccountCurrency | null | undefined>,
		to_currency: FormControl<BankAccountCurrency | null | undefined>,
	}
	export function CreateConversationRateFormGroup() {
		return new FormGroup<ConversationRateFormProperties>({
			conversation_rate: new FormControl<number | null | undefined>(undefined),
			from_currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			to_currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
		});

	}

	export enum Country { '' = '', AC = 'AC', AD = 'AD', AE = 'AE', AF = 'AF', AG = 'AG', AI = 'AI', AL = 'AL', AM = 'AM', AO = 'AO', AQ = 'AQ', AR = 'AR', AS = 'AS', AT = 'AT', AU = 'AU', AW = 'AW', AX = 'AX', AZ = 'AZ', BA = 'BA', BB = 'BB', BD = 'BD', BE = 'BE', BF = 'BF', BG = 'BG', BH = 'BH', BI = 'BI', BJ = 'BJ', BL = 'BL', BM = 'BM', BN = 'BN', BO = 'BO', BQ = 'BQ', BR = 'BR', BS = 'BS', BT = 'BT', BW = 'BW', BY = 'BY', BZ = 'BZ', CA = 'CA', CC = 'CC', CD = 'CD', CF = 'CF', CG = 'CG', CH = 'CH', CI = 'CI', CK = 'CK', CL = 'CL', CM = 'CM', CN = 'CN', CO = 'CO', CR = 'CR', CU = 'CU', CV = 'CV', CW = 'CW', CX = 'CX', CY = 'CY', CZ = 'CZ', DE = 'DE', DG = 'DG', DJ = 'DJ', DK = 'DK', DM = 'DM', DO = 'DO', DZ = 'DZ', EA = 'EA', EC = 'EC', EE = 'EE', EG = 'EG', EH = 'EH', ER = 'ER', ES = 'ES', ET = 'ET', FI = 'FI', FJ = 'FJ', FK = 'FK', FM = 'FM', FO = 'FO', FR = 'FR', GA = 'GA', GB = 'GB', GD = 'GD', GE = 'GE', GF = 'GF', GG = 'GG', GH = 'GH', GI = 'GI', GL = 'GL', GM = 'GM', GN = 'GN', GP = 'GP', GQ = 'GQ', GR = 'GR', GS = 'GS', GT = 'GT', GU = 'GU', GW = 'GW', GY = 'GY', HK = 'HK', HN = 'HN', HR = 'HR', HT = 'HT', HU = 'HU', IC = 'IC', ID = 'ID', IE = 'IE', IL = 'IL', IM = 'IM', IN = 'IN', IO = 'IO', IQ = 'IQ', IR = 'IR', IS = 'IS', IT = 'IT', JE = 'JE', JM = 'JM', JO = 'JO', JP = 'JP', KE = 'KE', KG = 'KG', KH = 'KH', KI = 'KI', KM = 'KM', KN = 'KN', KP = 'KP', KR = 'KR', KW = 'KW', KY = 'KY', KZ = 'KZ', LA = 'LA', LB = 'LB', LC = 'LC', LI = 'LI', LK = 'LK', LR = 'LR', LS = 'LS', LT = 'LT', LU = 'LU', LV = 'LV', LY = 'LY', MA = 'MA', MC = 'MC', MD = 'MD', ME = 'ME', MF = 'MF', MG = 'MG', MH = 'MH', MK = 'MK', ML = 'ML', MM = 'MM', MN = 'MN', MO = 'MO', MP = 'MP', MQ = 'MQ', MR = 'MR', MS = 'MS', MT = 'MT', MU = 'MU', MV = 'MV', MW = 'MW', MX = 'MX', MY = 'MY', MZ = 'MZ', NA = 'NA', NC = 'NC', NE = 'NE', NF = 'NF', NG = 'NG', NI = 'NI', NL = 'NL', NO = 'NO', NP = 'NP', NR = 'NR', NU = 'NU', NZ = 'NZ', OM = 'OM', PA = 'PA', PE = 'PE', PF = 'PF', PG = 'PG', PH = 'PH', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PR = 'PR', PS = 'PS', PT = 'PT', PW = 'PW', PY = 'PY', QA = 'QA', RE = 'RE', RO = 'RO', RS = 'RS', RU = 'RU', RW = 'RW', SA = 'SA', SB = 'SB', SC = 'SC', SD = 'SD', SE = 'SE', SG = 'SG', SH = 'SH', SI = 'SI', SJ = 'SJ', SK = 'SK', SL = 'SL', SM = 'SM', SN = 'SN', SO = 'SO', SR = 'SR', SS = 'SS', ST = 'ST', SV = 'SV', SX = 'SX', SY = 'SY', SZ = 'SZ', TA = 'TA', TC = 'TC', TD = 'TD', TF = 'TF', TG = 'TG', TH = 'TH', TJ = 'TJ', TK = 'TK', TL = 'TL', TM = 'TM', TN = 'TN', TO = 'TO', TR = 'TR', TT = 'TT', TV = 'TV', TW = 'TW', TZ = 'TZ', UA = 'UA', UG = 'UG', UM = 'UM', US = 'US', UY = 'UY', UZ = 'UZ', VA = 'VA', VC = 'VC', VE = 'VE', VG = 'VG', VI = 'VI', VN = 'VN', VU = 'VU', WF = 'WF', WS = 'WS', XA = 'XA', XB = 'XB', XK = 'XK', YE = 'YE', YT = 'YT', ZA = 'ZA', ZM = 'ZM', ZW = 'ZW' }

	export enum Currency { AUD = 'AUD', BGN = 'BGN', BRL = 'BRL', CAD = 'CAD', CHF = 'CHF', CNY = 'CNY', CZK = 'CZK', DKK = 'DKK', EUR = 'EUR', GBP = 'GBP', HKD = 'HKD', HRK = 'HRK', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', ISK = 'ISK', JPY = 'JPY', KRW = 'KRW', LTL = 'LTL', LVL = 'LVL', MXN = 'MXN', MYR = 'MYR', NOK = 'NOK', NZD = 'NZD', PHP = 'PHP', PLN = 'PLN', RON = 'RON', RSD = 'RSD', RUB = 'RUB', SEK = 'SEK', SGD = 'SGD', THB = 'THB', TRY = 'TRY', UAH = 'UAH', USD = 'USD', ZAR = 'ZAR' }


	/** Document object representing your invoice. */
	export interface Document {

		/** DocumentBlock's identifier. */
		block_id?: number | null;
		cancelled?: boolean | null;
		comment?: string | null;
		conversion_rate?: number | null;
		currency?: BankAccountCurrency | null;
		due_date?: Date | null;
		electronic?: boolean | null;
		fulfillment_date?: Date | null;

		/** The document's gross total price. */
		gross_total?: number | null;

		/** The document's unique identifier. */
		id?: number | null;
		invoice_date?: Date | null;

		/** The document's invoice number. */
		invoice_number?: string | null;
		items?: Array<DocumentItem>;
		language?: DocumentLanguage | null;
		notification_status?: DocumentNotification_status | null;
		organization?: DocumentOrganization;
		paid_date?: Date | null;
		partner?: Partner;
		payment_method?: DocumentPayment_method | null;
		payment_status?: DocumentPayment_status | null;
		settings?: DocumentSettings;
		summary?: DocumentSummary;
		tags?: Array<string>;
		type?: DocumentType | null;
	}

	/** Document object representing your invoice. */
	export interface DocumentFormProperties {

		/** DocumentBlock's identifier. */
		block_id: FormControl<number | null | undefined>,
		cancelled: FormControl<boolean | null | undefined>,
		comment: FormControl<string | null | undefined>,
		conversion_rate: FormControl<number | null | undefined>,
		currency: FormControl<BankAccountCurrency | null | undefined>,
		due_date: FormControl<Date | null | undefined>,
		electronic: FormControl<boolean | null | undefined>,
		fulfillment_date: FormControl<Date | null | undefined>,

		/** The document's gross total price. */
		gross_total: FormControl<number | null | undefined>,

		/** The document's unique identifier. */
		id: FormControl<number | null | undefined>,
		invoice_date: FormControl<Date | null | undefined>,

		/** The document's invoice number. */
		invoice_number: FormControl<string | null | undefined>,
		language: FormControl<DocumentLanguage | null | undefined>,
		notification_status: FormControl<DocumentNotification_status | null | undefined>,
		paid_date: FormControl<Date | null | undefined>,
		payment_method: FormControl<DocumentPayment_method | null | undefined>,
		payment_status: FormControl<DocumentPayment_status | null | undefined>,
		type: FormControl<DocumentType | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			block_id: new FormControl<number | null | undefined>(undefined),
			cancelled: new FormControl<boolean | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			conversion_rate: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			due_date: new FormControl<Date | null | undefined>(undefined),
			electronic: new FormControl<boolean | null | undefined>(undefined),
			fulfillment_date: new FormControl<Date | null | undefined>(undefined),
			gross_total: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			invoice_date: new FormControl<Date | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<DocumentLanguage | null | undefined>(undefined),
			notification_status: new FormControl<DocumentNotification_status | null | undefined>(undefined),
			paid_date: new FormControl<Date | null | undefined>(undefined),
			payment_method: new FormControl<DocumentPayment_method | null | undefined>(undefined),
			payment_status: new FormControl<DocumentPayment_status | null | undefined>(undefined),
			type: new FormControl<DocumentType | null | undefined>(undefined),
		});

	}

	export interface DocumentItem {
		gross_amount?: number | null;
		name?: string | null;
		net_amount?: number | null;
		net_unit_amount?: number | null;
		product_id?: number | null;
		quantity?: number | null;
		vat?: DocumentItemVat | null;
		vat_amount?: number | null;
	}
	export interface DocumentItemFormProperties {
		gross_amount: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		net_amount: FormControl<number | null | undefined>,
		net_unit_amount: FormControl<number | null | undefined>,
		product_id: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		vat: FormControl<DocumentItemVat | null | undefined>,
		vat_amount: FormControl<number | null | undefined>,
	}
	export function CreateDocumentItemFormGroup() {
		return new FormGroup<DocumentItemFormProperties>({
			gross_amount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			net_amount: new FormControl<number | null | undefined>(undefined),
			net_unit_amount: new FormControl<number | null | undefined>(undefined),
			product_id: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			vat: new FormControl<DocumentItemVat | null | undefined>(undefined),
			vat_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DocumentItemVat { '0%' = '0%', '1%' = '1%', '10%' = '10%', '11%' = '11%', '12%' = '12%', '13%' = '13%', '14%' = '14%', '15%' = '15%', '16%' = '16%', '17%' = '17%', '18%' = '18%', '19%' = '19%', '2%' = '2%', '20%' = '20%', '21%' = '21%', '22%' = '22%', '23%' = '23%', '24%' = '24%', '25%' = '25%', '26%' = '26%', '27%' = '27%', '3%' = '3%', '4%' = '4%', '5%' = '5%', '6%' = '6%', '7%' = '7%', '8%' = '8%', '9%' = '9%', AAM = 'AAM', AM = 'AM', EU = 'EU', EUK = 'EUK', 'F.AFA' = 'F.AFA', FAD = 'FAD', 'K.AFA' = 'K.AFA', MAA = 'MAA', TAM = 'TAM', ÁKK = 'ÁKK', ÁTHK = 'ÁTHK' }

	export enum DocumentLanguage { de = 'de', en = 'en', fr = 'fr', hr = 'hr', hu = 'hu', it = 'it', ro = 'ro', sk = 'sk' }

	export enum DocumentNotification_status { closed = 'closed', downloaded = 'downloaded', failed = 'failed', none = 'none', opened = 'opened', readed = 'readed' }

	export interface DocumentOrganization {
		address?: Address;
		bank_account?: DocumentBankAccount;
		cash_settled?: boolean | null;
		eu_tax_number?: string | null;
		ev_number?: string | null;
		name?: string | null;
		small_taxpayer?: boolean | null;
		tax_number?: string | null;
	}
	export interface DocumentOrganizationFormProperties {
		cash_settled: FormControl<boolean | null | undefined>,
		eu_tax_number: FormControl<string | null | undefined>,
		ev_number: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		small_taxpayer: FormControl<boolean | null | undefined>,
		tax_number: FormControl<string | null | undefined>,
	}
	export function CreateDocumentOrganizationFormGroup() {
		return new FormGroup<DocumentOrganizationFormProperties>({
			cash_settled: new FormControl<boolean | null | undefined>(undefined),
			eu_tax_number: new FormControl<string | null | undefined>(undefined),
			ev_number: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			small_taxpayer: new FormControl<boolean | null | undefined>(undefined),
			tax_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentBankAccount {

		/** Required */
		account_number: string;
		account_number_iban?: string | null;
		id?: number | null;

		/** Required */
		name: string;
		swift?: string | null;
	}
	export interface DocumentBankAccountFormProperties {

		/** Required */
		account_number: FormControl<string | null | undefined>,
		account_number_iban: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		swift: FormControl<string | null | undefined>,
	}
	export function CreateDocumentBankAccountFormGroup() {
		return new FormGroup<DocumentBankAccountFormProperties>({
			account_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			account_number_iban: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swift: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentPayment_method { aruhitel = 'aruhitel', bankcard = 'bankcard', barion = 'barion', barter = 'barter', cash = 'cash', cash_on_delivery = 'cash_on_delivery', coupon = 'coupon', elore_utalas = 'elore_utalas', ep_kartya = 'ep_kartya', kompenzacio = 'kompenzacio', levonas = 'levonas', online_bankcard = 'online_bankcard', payoneer = 'payoneer', paypal = 'paypal', paypal_utolag = 'paypal_utolag', payu = 'payu', pick_pack_pont = 'pick_pack_pont', postai_csekk = 'postai_csekk', postautalvany = 'postautalvany', skrill = 'skrill', szep_card = 'szep_card', transferwise = 'transferwise', upwork = 'upwork', utalvany = 'utalvany', valto = 'valto', wire_transfer = 'wire_transfer' }

	export enum DocumentPayment_status { expired = 'expired', none = 'none', outstanding = 'outstanding', paid = 'paid', partially_paid = 'partially_paid' }

	export interface DocumentSettings {
		mediated_service?: boolean | null;
		online_payment?: DocumentSettingsOnline_payment | null;
		place_id?: number | null;
		round?: DocumentSettingsRound | null;
		without_financial_fulfillment?: boolean | null;
	}
	export interface DocumentSettingsFormProperties {
		mediated_service: FormControl<boolean | null | undefined>,
		online_payment: FormControl<DocumentSettingsOnline_payment | null | undefined>,
		place_id: FormControl<number | null | undefined>,
		round: FormControl<DocumentSettingsRound | null | undefined>,
		without_financial_fulfillment: FormControl<boolean | null | undefined>,
	}
	export function CreateDocumentSettingsFormGroup() {
		return new FormGroup<DocumentSettingsFormProperties>({
			mediated_service: new FormControl<boolean | null | undefined>(undefined),
			online_payment: new FormControl<DocumentSettingsOnline_payment | null | undefined>(undefined),
			place_id: new FormControl<number | null | undefined>(undefined),
			round: new FormControl<DocumentSettingsRound | null | undefined>(undefined),
			without_financial_fulfillment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DocumentSettingsOnline_payment { '' = '', Barion = 'Barion', SimplePay = 'SimplePay', no = 'no' }

	export enum DocumentSettingsRound { five = 'five', none = 'none', one = 'one', ten = 'ten' }

	export interface DocumentSummary {
		gross_amount_local?: number | null;
		net_amount?: number | null;
		net_amount_local?: number | null;
		vat_amount?: number | null;
		vat_amount_local?: number | null;
		vat_rate_summary?: Array<DocumentVatRateSummary>;
	}
	export interface DocumentSummaryFormProperties {
		gross_amount_local: FormControl<number | null | undefined>,
		net_amount: FormControl<number | null | undefined>,
		net_amount_local: FormControl<number | null | undefined>,
		vat_amount: FormControl<number | null | undefined>,
		vat_amount_local: FormControl<number | null | undefined>,
	}
	export function CreateDocumentSummaryFormGroup() {
		return new FormGroup<DocumentSummaryFormProperties>({
			gross_amount_local: new FormControl<number | null | undefined>(undefined),
			net_amount: new FormControl<number | null | undefined>(undefined),
			net_amount_local: new FormControl<number | null | undefined>(undefined),
			vat_amount: new FormControl<number | null | undefined>(undefined),
			vat_amount_local: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DocumentVatRateSummary {
		vat_name?: string | null;
		vat_percentage?: number | null;
		vat_rate_gross_amount?: number | null;
		vat_rate_net_amount?: number | null;
		vat_rate_vat_amount?: number | null;
		vat_rate_vat_amount_local?: number | null;
	}
	export interface DocumentVatRateSummaryFormProperties {
		vat_name: FormControl<string | null | undefined>,
		vat_percentage: FormControl<number | null | undefined>,
		vat_rate_gross_amount: FormControl<number | null | undefined>,
		vat_rate_net_amount: FormControl<number | null | undefined>,
		vat_rate_vat_amount: FormControl<number | null | undefined>,
		vat_rate_vat_amount_local: FormControl<number | null | undefined>,
	}
	export function CreateDocumentVatRateSummaryFormGroup() {
		return new FormGroup<DocumentVatRateSummaryFormProperties>({
			vat_name: new FormControl<string | null | undefined>(undefined),
			vat_percentage: new FormControl<number | null | undefined>(undefined),
			vat_rate_gross_amount: new FormControl<number | null | undefined>(undefined),
			vat_rate_net_amount: new FormControl<number | null | undefined>(undefined),
			vat_rate_vat_amount: new FormControl<number | null | undefined>(undefined),
			vat_rate_vat_amount_local: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DocumentType { advance = 'advance', canceled = 'canceled', cancellation = 'cancellation', draft = 'draft', invoice = 'invoice', proforma = 'proforma' }

	export interface DocumentBlock {
		custom_field1?: string | null;
		custom_field2?: string | null;
		id?: number | null;
		name?: string | null;
		prefix?: string | null;
	}
	export interface DocumentBlockFormProperties {
		custom_field1: FormControl<string | null | undefined>,
		custom_field2: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateDocumentBlockFormGroup() {
		return new FormGroup<DocumentBlockFormProperties>({
			custom_field1: new FormControl<string | null | undefined>(undefined),
			custom_field2: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty. */
	export interface DocumentBlockList {
		current_page?: number | null;
		data?: Array<DocumentBlock>;
		last_page?: number | null;
		next_page_url?: string | null;
		per_page?: number | null;
		prev_page_url?: string | null;
		total?: number | null;
	}

	/** A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty. */
	export interface DocumentBlockListFormProperties {
		current_page: FormControl<number | null | undefined>,
		last_page: FormControl<number | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		per_page: FormControl<number | null | undefined>,
		prev_page_url: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateDocumentBlockListFormGroup() {
		return new FormGroup<DocumentBlockListFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			last_page: new FormControl<number | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev_page_url: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DocumentInsert {
		bank_account_id?: number | null;

		/** Required */
		block_id: number;
		comment?: string | null;
		conversion_rate?: number | null;

		/** Required */
		currency: BankAccountCurrency;

		/** Required */
		due_date: Date;
		electronic?: boolean | null;

		/** Required */
		fulfillment_date: Date;
		items?: Array<string>;

		/** Required */
		language: DocumentLanguage;
		paid?: boolean | null;

		/** Required */
		partner_id: number;

		/** Required */
		payment_method: DocumentPayment_method;
		settings?: DocumentSettings;

		/** Required */
		type: DocumentInsertType;
		vendor_id?: string | null;
	}
	export interface DocumentInsertFormProperties {
		bank_account_id: FormControl<number | null | undefined>,

		/** Required */
		block_id: FormControl<number | null | undefined>,
		comment: FormControl<string | null | undefined>,
		conversion_rate: FormControl<number | null | undefined>,

		/** Required */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** Required */
		due_date: FormControl<Date | null | undefined>,
		electronic: FormControl<boolean | null | undefined>,

		/** Required */
		fulfillment_date: FormControl<Date | null | undefined>,

		/** Required */
		language: FormControl<DocumentLanguage | null | undefined>,
		paid: FormControl<boolean | null | undefined>,

		/** Required */
		partner_id: FormControl<number | null | undefined>,

		/** Required */
		payment_method: FormControl<DocumentPayment_method | null | undefined>,

		/** Required */
		type: FormControl<DocumentInsertType | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentInsertFormGroup() {
		return new FormGroup<DocumentInsertFormProperties>({
			bank_account_id: new FormControl<number | null | undefined>(undefined),
			block_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined),
			conversion_rate: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined, [Validators.required]),
			due_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			electronic: new FormControl<boolean | null | undefined>(undefined),
			fulfillment_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<DocumentLanguage | null | undefined>(undefined, [Validators.required]),
			paid: new FormControl<boolean | null | undefined>(undefined),
			partner_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			payment_method: new FormControl<DocumentPayment_method | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DocumentInsertType | null | undefined>(undefined, [Validators.required]),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentInsertType { advance = 'advance', draft = 'draft', invoice = 'invoice', proforma = 'proforma' }

	export interface DocumentItemData {

		/** Required */
		product_id: number;

		/** Required */
		quantity: number;
	}
	export interface DocumentItemDataFormProperties {

		/** Required */
		product_id: FormControl<number | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateDocumentItemDataFormGroup() {
		return new FormGroup<DocumentItemDataFormProperties>({
			product_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty. */
	export interface DocumentList {
		current_page?: number | null;
		data?: Array<Document>;
		last_page?: number | null;
		next_page_url?: string | null;
		per_page?: number | null;
		prev_page_url?: string | null;
		total?: number | null;
	}

	/** A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty. */
	export interface DocumentListFormProperties {
		current_page: FormControl<number | null | undefined>,
		last_page: FormControl<number | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		per_page: FormControl<number | null | undefined>,
		prev_page_url: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateDocumentListFormGroup() {
		return new FormGroup<DocumentListFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			last_page: new FormControl<number | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev_page_url: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DocumentNotificationStatus { closed = 'closed', downloaded = 'downloaded', failed = 'failed', none = 'none', opened = 'opened', readed = 'readed' }

	export interface DocumentProductData {
		comment?: string | null;

		/** Required */
		name: string;

		/** Required */
		quantity: number;

		/** Required */
		unit: string;

		/** Required */
		unit_price: number;

		/** Required */
		unit_price_type: DocumentProductDataUnit_price_type;

		/** Required */
		vat: DocumentItemVat;
	}
	export interface DocumentProductDataFormProperties {
		comment: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		unit: FormControl<string | null | undefined>,

		/** Required */
		unit_price: FormControl<number | null | undefined>,

		/** Required */
		unit_price_type: FormControl<DocumentProductDataUnit_price_type | null | undefined>,

		/** Required */
		vat: FormControl<DocumentItemVat | null | undefined>,
	}
	export function CreateDocumentProductDataFormGroup() {
		return new FormGroup<DocumentProductDataFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit_price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit_price_type: new FormControl<DocumentProductDataUnit_price_type | null | undefined>(undefined, [Validators.required]),
			vat: new FormControl<DocumentItemVat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentProductDataUnit_price_type { gross = 'gross', net = 'net' }

	export interface DocumentPublicUrl {
		public_url?: string | null;
	}
	export interface DocumentPublicUrlFormProperties {
		public_url: FormControl<string | null | undefined>,
	}
	export function CreateDocumentPublicUrlFormGroup() {
		return new FormGroup<DocumentPublicUrlFormProperties>({
			public_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Id {
		id?: number | null;
		legacy_id?: number | null;
	}
	export interface IdFormProperties {
		id: FormControl<number | null | undefined>,
		legacy_id: FormControl<number | null | undefined>,
	}
	export function CreateIdFormGroup() {
		return new FormGroup<IdFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			legacy_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OnlinePayment { '' = '', Barion = 'Barion', SimplePay = 'SimplePay', no = 'no' }

	export interface OnlineSzamlaStatus {
		messages?: Array<OnlineSzamlaStatusMessage>;
		status?: string | null;
		transaction_id?: string | null;
	}
	export interface OnlineSzamlaStatusFormProperties {
		status: FormControl<string | null | undefined>,
		transaction_id: FormControl<string | null | undefined>,
	}
	export function CreateOnlineSzamlaStatusFormGroup() {
		return new FormGroup<OnlineSzamlaStatusFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			transaction_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OnlineSzamlaStatusMessage {
		human_readable_message?: string | null;
		validation_error_code?: string | null;
		validation_result_code?: string | null;
	}
	export interface OnlineSzamlaStatusMessageFormProperties {
		human_readable_message: FormControl<string | null | undefined>,
		validation_error_code: FormControl<string | null | undefined>,
		validation_result_code: FormControl<string | null | undefined>,
	}
	export function CreateOnlineSzamlaStatusMessageFormGroup() {
		return new FormGroup<OnlineSzamlaStatusMessageFormProperties>({
			human_readable_message: new FormControl<string | null | undefined>(undefined),
			validation_error_code: new FormControl<string | null | undefined>(undefined),
			validation_result_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganizationData {
		tax_code?: string | null;
	}
	export interface OrganizationDataFormProperties {
		tax_code: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationDataFormGroup() {
		return new FormGroup<OrganizationDataFormProperties>({
			tax_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Partner extends PartnerUpsert {
		id?: number | null;
	}
	export interface PartnerFormProperties extends PartnerUpsertFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreatePartnerFormGroup() {
		return new FormGroup<PartnerFormProperties>({
			account_number: new FormControl<string | null | undefined>(undefined),
			general_ledger_number: new FormControl<string | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
			swift: new FormControl<string | null | undefined>(undefined),
			taxcode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A object with a data property that contains an array of up to limit partners. Each entry in the array is a separate partner object. If no more partners are available, the resulting array will be empty. */
	export interface PartnerList {
		current_page?: number | null;
		data?: Array<Partner>;
		last_page?: number | null;
		next_page_url?: string | null;
		per_page?: number | null;
		prev_page_url?: string | null;
		total?: number | null;
	}

	/** A object with a data property that contains an array of up to limit partners. Each entry in the array is a separate partner object. If no more partners are available, the resulting array will be empty. */
	export interface PartnerListFormProperties {
		current_page: FormControl<number | null | undefined>,
		last_page: FormControl<number | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		per_page: FormControl<number | null | undefined>,
		prev_page_url: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreatePartnerListFormGroup() {
		return new FormGroup<PartnerListFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			last_page: new FormControl<number | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev_page_url: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartnerUpsert {
		account_number?: string | null;

		/** Required */
		address: Address;
		emails?: Array<string>;
		general_ledger_number?: string | null;
		iban?: string | null;

		/** Required */
		name: string;
		phone?: string | null;
		swift?: string | null;
		taxcode?: string | null;
	}
	export interface PartnerUpsertFormProperties {
		account_number: FormControl<string | null | undefined>,
		general_ledger_number: FormControl<string | null | undefined>,
		iban: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		swift: FormControl<string | null | undefined>,
		taxcode: FormControl<string | null | undefined>,
	}
	export function CreatePartnerUpsertFormGroup() {
		return new FormGroup<PartnerUpsertFormProperties>({
			account_number: new FormControl<string | null | undefined>(undefined),
			general_ledger_number: new FormControl<string | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
			swift: new FormControl<string | null | undefined>(undefined),
			taxcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentHistory {
		conversion_rate?: number | null;

		/** Required */
		date: Date;

		/** Required */
		payment_method: DocumentPayment_method;

		/** Required */
		price: number;
		voucher_number?: string | null;
	}
	export interface PaymentHistoryFormProperties {
		conversion_rate: FormControl<number | null | undefined>,

		/** Required */
		date: FormControl<Date | null | undefined>,

		/** Required */
		payment_method: FormControl<DocumentPayment_method | null | undefined>,

		/** Required */
		price: FormControl<number | null | undefined>,
		voucher_number: FormControl<string | null | undefined>,
	}
	export function CreatePaymentHistoryFormGroup() {
		return new FormGroup<PaymentHistoryFormProperties>({
			conversion_rate: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			payment_method: new FormControl<DocumentPayment_method | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			voucher_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentMethod { aruhitel = 'aruhitel', bankcard = 'bankcard', barion = 'barion', barter = 'barter', cash = 'cash', cash_on_delivery = 'cash_on_delivery', coupon = 'coupon', elore_utalas = 'elore_utalas', ep_kartya = 'ep_kartya', kompenzacio = 'kompenzacio', levonas = 'levonas', online_bankcard = 'online_bankcard', payoneer = 'payoneer', paypal = 'paypal', paypal_utolag = 'paypal_utolag', payu = 'payu', pick_pack_pont = 'pick_pack_pont', postai_csekk = 'postai_csekk', postautalvany = 'postautalvany', skrill = 'skrill', szep_card = 'szep_card', transferwise = 'transferwise', upwork = 'upwork', utalvany = 'utalvany', valto = 'valto', wire_transfer = 'wire_transfer' }

	export enum PaymentStatus { expired = 'expired', none = 'none', outstanding = 'outstanding', paid = 'paid', partially_paid = 'partially_paid' }

	export interface Product {
		comment?: string | null;

		/** Required */
		currency: BankAccountCurrency;
		general_ledger_number?: string | null;
		general_ledger_taxcode?: string | null;
		id?: number | null;

		/** Required */
		name: string;
		net_unit_price?: number | null;

		/** Required */
		unit: string;

		/** Required */
		vat: DocumentItemVat;
	}
	export interface ProductFormProperties {
		comment: FormControl<string | null | undefined>,

		/** Required */
		currency: FormControl<BankAccountCurrency | null | undefined>,
		general_ledger_number: FormControl<string | null | undefined>,
		general_ledger_taxcode: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		net_unit_price: FormControl<number | null | undefined>,

		/** Required */
		unit: FormControl<string | null | undefined>,

		/** Required */
		vat: FormControl<DocumentItemVat | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined, [Validators.required]),
			general_ledger_number: new FormControl<string | null | undefined>(undefined),
			general_ledger_taxcode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net_unit_price: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat: new FormControl<DocumentItemVat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A object with a data property that contains an array of up to limit products. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty. */
	export interface ProductList {
		current_page?: number | null;
		data?: Array<Product>;
		last_page?: number | null;
		next_page_url?: string | null;
		per_page?: number | null;
		prev_page_url?: string | null;
		total?: number | null;
	}

	/** A object with a data property that contains an array of up to limit products. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty. */
	export interface ProductListFormProperties {
		current_page: FormControl<number | null | undefined>,
		last_page: FormControl<number | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		per_page: FormControl<number | null | undefined>,
		prev_page_url: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateProductListFormGroup() {
		return new FormGroup<ProductListFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			last_page: new FormControl<number | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev_page_url: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Round { five = 'five', none = 'none', one = 'one', ten = 'ten' }

	export interface SendDocument {
		emails?: Array<string>;
	}
	export interface SendDocumentFormProperties {
	}
	export function CreateSendDocumentFormGroup() {
		return new FormGroup<SendDocumentFormProperties>({
		});

	}

	export interface ServerError {
		message?: string | null;

		/** You should send us this ID to investigate the issue. */
		trace_id?: string | null;
	}
	export interface ServerErrorFormProperties {
		message: FormControl<string | null | undefined>,

		/** You should send us this ID to investigate the issue. */
		trace_id: FormControl<string | null | undefined>,
	}
	export function CreateServerErrorFormGroup() {
		return new FormGroup<ServerErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			trace_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServerErrorResponse {
		error?: ServerError;
	}
	export interface ServerErrorResponseFormProperties {
	}
	export function CreateServerErrorResponseFormGroup() {
		return new FormGroup<ServerErrorResponseFormProperties>({
		});

	}

	export enum UnitPriceType { gross = 'gross', net = 'net' }

	export interface ValidationError {
		field?: string | null;
		message?: string | null;
	}
	export interface ValidationErrorFormProperties {
		field: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidationErrorResponse {
		errors?: Array<ValidationError>;
		message?: string | null;
	}
	export interface ValidationErrorResponseFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorResponseFormGroup() {
		return new FormGroup<ValidationErrorResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Vat { '0%' = '0%', '1%' = '1%', '10%' = '10%', '11%' = '11%', '12%' = '12%', '13%' = '13%', '14%' = '14%', '15%' = '15%', '16%' = '16%', '17%' = '17%', '18%' = '18%', '19%' = '19%', '2%' = '2%', '20%' = '20%', '21%' = '21%', '22%' = '22%', '23%' = '23%', '24%' = '24%', '25%' = '25%', '26%' = '26%', '27%' = '27%', '3%' = '3%', '4%' = '4%', '5%' = '5%', '6%' = '6%', '7%' = '7%', '8%' = '8%', '9%' = '9%', AAM = 'AAM', AM = 'AM', EU = 'EU', EUK = 'EUK', 'F.AFA' = 'F.AFA', FAD = 'FAD', 'K.AFA' = 'K.AFA', MAA = 'MAA', TAM = 'TAM', ÁKK = 'ÁKK', ÁTHK = 'ÁTHK' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all bank account
		 * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
		 * Get bank-accounts
		 * @return {BankAccountList} Success response
		 */
		ListBankAccount(page: number | null | undefined, per_page: number | null | undefined): Observable<BankAccountList> {
			return this.http.get<BankAccountList>(this.baseUri + 'bank-accounts?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create a bank account
		 * Create a new bank account. Returns a bank account object if the create is succeded.
		 * Post bank-accounts
		 * @param {BankAccount} requestBody BankAccount object that you would like to store.
		 * @return {void} 
		 */
		CreateBankAccount(requestBody: BankAccount): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bank-accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a bank account
		 * Delete an existing bank account.
		 * Delete bank-accounts/{id}
		 * @return {void} 
		 */
		DeleteBankAccount(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bank-accounts/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a bank account
		 * Retrieves the details of an existing bank account.
		 * Get bank-accounts/{id}
		 * @return {BankAccount} Success response
		 */
		GetBankAccount(id: number): Observable<BankAccount> {
			return this.http.get<BankAccount>(this.baseUri + 'bank-accounts/' + id, {});
		}

		/**
		 * Update a bank account
		 * Update an existing bank accounts. Returns a bank account object if the update is succeded.
		 * Put bank-accounts/{id}
		 * @param {BankAccount} requestBody Bank account object that you would like to update.
		 * @return {BankAccount} Bank account updated successfully.
		 */
		UpdateBankAccount(id: number, requestBody: BankAccount): Observable<BankAccount> {
			return this.http.put<BankAccount>(this.baseUri + 'bank-accounts/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get currencies exchange rate.
		 * Return with the exchange value of given currencies.
		 * Get currencies
		 * @return {ConversationRate} Currencies exchange rate returned.
		 */
		GetConversionRate(from: BankAccountCurrency, to: BankAccountCurrency): Observable<ConversationRate> {
			return this.http.get<ConversationRate>(this.baseUri + 'currencies?from=' + from + '&to=' + to, {});
		}

		/**
		 * List all document blocks
		 * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
		 * Get document-blocks
		 * @return {DocumentBlockList} Success response
		 */
		ListDocumentBlock(page: number | null | undefined, per_page: number | null | undefined): Observable<DocumentBlockList> {
			return this.http.get<DocumentBlockList>(this.baseUri + 'document-blocks?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * List all documents
		 * Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.
		 * Get documents
		 * @param {number} block_id Filter documents by the identifier of your DocumentBlock.
		 * @param {number} partner_id Filter documents by the identifier of your Partner.
		 * @param {DocumentPayment_method} payment_method Filter documents by PaymentMethod value.
		 * @param {DocumentPayment_status} payment_status Filter documents by PaymentStatus value.
		 * @param {Date} start_date Filter documents by date.
		 * @param {Date} end_date Filter documents by date.
		 * @param {number} start_number Starting number of the document, should not contain year or any other formatting. Required if `start_year` given
		 * @param {number} end_number Ending number of the document, should not contain year or any other formatting. Required if `end_year` given
		 * @param {number} start_year Year for `start_number` parameter. Required if `start_number` given.
		 * @param {number} end_year Year for `end_number` parameter. Required if `end_number` given.
		 * @return {DocumentList} Success response
		 */
		ListDocument(page: number | null | undefined, per_page: number | null | undefined, block_id: number | null | undefined, partner_id: number | null | undefined, payment_method: DocumentPayment_method | null | undefined, payment_status: DocumentPayment_status | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, start_number: number | null | undefined, end_number: number | null | undefined, start_year: number | null | undefined, end_year: number | null | undefined): Observable<DocumentList> {
			return this.http.get<DocumentList>(this.baseUri + 'documents?page=' + page + '&per_page=' + per_page + '&block_id=' + block_id + '&partner_id=' + partner_id + '&payment_method=' + payment_method + '&payment_status=' + payment_status + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&start_number=' + start_number + '&end_number=' + end_number + '&start_year=' + start_year + '&end_year=' + end_year, {});
		}

		/**
		 * Create a document
		 * Create a new document. Returns a document object if the create is succeded.
		 * Post documents
		 * @param {DocumentInsert} requestBody DocumentInsert object that you would like to store.
		 * @return {void} 
		 */
		CreateDocument(requestBody: DocumentInsert): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a document
		 * Retrieves the details of an existing document.
		 * Get documents/{id}
		 * @return {Document} Success response
		 */
		GetDocument(id: number): Observable<Document> {
			return this.http.get<Document>(this.baseUri + 'documents/' + id, {});
		}

		/**
		 * Cancel a document
		 * Cancel a document. Returns a cancellation document object if the cancellation is succeded.
		 * Post documents/{id}/cancel
		 * @return {Document} Document cancellation successfully. Cancel document returned.
		 */
		CancelDocument(id: number): Observable<Document> {
			return this.http.post<Document>(this.baseUri + 'documents/' + id + '/cancel', null, {});
		}

		/**
		 * Create a document from proforma.
		 * Create a new document from proforma. Returns a document object if the create is succeded.
		 * Post documents/{id}/create-from-proforma
		 * @return {void} 
		 */
		CreateDocumentFromProforma(id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'documents/' + id + '/create-from-proforma', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download a document in PDF format.
		 * Download a document. Returns a document in PDF format.
		 * Get documents/{id}/download
		 * @return {void} Document PDF file.
		 */
		DownloadDocument(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'documents/' + id + '/download', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a document Online Számla status
		 * Retrieves the details of an existing document status.
		 * Get documents/{id}/online-szamla
		 * @return {OnlineSzamlaStatus} Success response
		 */
		GetOnlineSzamlaStatus(id: number): Observable<OnlineSzamlaStatus> {
			return this.http.get<OnlineSzamlaStatus>(this.baseUri + 'documents/' + id + '/online-szamla', {});
		}

		/**
		 * Delete all payment history on document
		 * Delete all exist payment history on document.
		 * Delete documents/{id}/payments
		 * @return {Array<PaymentHistory>} Payment history deleted successfully.
		 */
		DeletePayment(id: number): Observable<Array<PaymentHistory>> {
			return this.http.delete<Array<PaymentHistory>>(this.baseUri + 'documents/' + id + '/payments', {});
		}

		/**
		 * Retrieve a payment histroy
		 * Retrieves the details of payment history an existing document.
		 * Get documents/{id}/payments
		 * @return {Array<PaymentHistory>} Success response
		 */
		GetPayment(id: number): Observable<Array<PaymentHistory>> {
			return this.http.get<Array<PaymentHistory>>(this.baseUri + 'documents/' + id + '/payments', {});
		}

		/**
		 * Update payment history
		 * Update payment history an existing document. Returns a payment history object if the update is succeded.
		 * Put documents/{id}/payments
		 * @param {Array<PaymentHistory>} requestBody Payment history object that you would like to update.
		 * @return {Array<PaymentHistory>} Payment history updated successfully.
		 */
		UpdatePayment(id: number, requestBody: Array<PaymentHistory>): Observable<Array<PaymentHistory>> {
			return this.http.put<Array<PaymentHistory>>(this.baseUri + 'documents/' + id + '/payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a document download public url.
		 * Retrieves public url to download an existing document.
		 * Get documents/{id}/public-url
		 * @return {DocumentPublicUrl} Success response
		 */
		GetPublicUrl(id: number): Observable<DocumentPublicUrl> {
			return this.http.get<DocumentPublicUrl>(this.baseUri + 'documents/' + id + '/public-url', {});
		}

		/**
		 * Send invoice to given email adresses.
		 * Returns a list of emails, where the invoice is sent.
		 * Post documents/{id}/send
		 * @param {SendDocument} requestBody List of email-s where you want to send the invoice.
		 * @return {SendDocument} List of email adresses where the invoice sent.
		 */
		SendDocument(id: number, requestBody: SendDocument): Observable<SendDocument> {
			return this.http.post<SendDocument>(this.baseUri + 'documents/' + id + '/send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a organization data.
		 * Retrieves the data of organization.
		 * Get organization
		 * @return {OrganizationData} Success response
		 */
		GetOrganizationData(): Observable<OrganizationData> {
			return this.http.get<OrganizationData>(this.baseUri + 'organization', {});
		}

		/**
		 * List all partners
		 * Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.
		 * Get partners
		 * @return {PartnerList} Success response
		 */
		ListPartner(page: number | null | undefined, per_page: number | null | undefined): Observable<PartnerList> {
			return this.http.get<PartnerList>(this.baseUri + 'partners?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create a partner
		 * Create a new partner. Returns a partner object if the create is succeded.
		 * Post partners
		 * @param {PartnerUpsert} requestBody PartnerUpsert object that you would like to store.
		 * @return {void} 
		 */
		CreatePartner(requestBody: PartnerUpsert): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'partners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a partner
		 * Delete an existing partner.
		 * Delete partners/{id}
		 * @return {void} 
		 */
		DeletePartner(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'partners/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a partner
		 * Retrieves the details of an existing partner.
		 * Get partners/{id}
		 * @return {Partner} Success response
		 */
		GetPartner(id: number): Observable<Partner> {
			return this.http.get<Partner>(this.baseUri + 'partners/' + id, {});
		}

		/**
		 * Update a partner
		 * Update an existing partner. Returns a partner object if the update is succeded.
		 * Put partners/{id}
		 * @param {PartnerUpsert} requestBody Partner object that you would like to update.
		 * @return {Partner} Partner updated successfully.
		 */
		UpdatePartner(id: number, requestBody: PartnerUpsert): Observable<Partner> {
			return this.http.put<Partner>(this.baseUri + 'partners/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all product
		 * Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.
		 * Get products
		 * @return {ProductList} Success response
		 */
		ListProduct(page: number | null | undefined, per_page: number | null | undefined): Observable<ProductList> {
			return this.http.get<ProductList>(this.baseUri + 'products?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create a product
		 * Create a new product. Returns a product object if the create is succeded.
		 * Post products
		 * @param {Product} requestBody Product object that you would like to store.
		 * @return {void} 
		 */
		CreateProduct(requestBody: Product): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'products', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a product
		 * Delete an existing product.
		 * Delete products/{id}
		 * @return {void} 
		 */
		DeleteProduct(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'products/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a product
		 * Retrieves the details of an existing product.
		 * Get products/{id}
		 * @return {Product} Success response
		 */
		GetProduct(id: number): Observable<Product> {
			return this.http.get<Product>(this.baseUri + 'products/' + id, {});
		}

		/**
		 * Update a product
		 * Update an existing product. Returns a product object if the update is succeded.
		 * Put products/{id}
		 * @param {Product} requestBody Product object that you would like to update.
		 * @return {Product} Product updated successfully.
		 */
		UpdateProduct(id: number, requestBody: Product): Observable<Product> {
			return this.http.put<Product>(this.baseUri + 'products/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Convert legacy ID to v3 ID.
		 * Retrieves the API v3 ID.
		 * Get utils/convert-legacy-id/{id}
		 * @return {Id} Success response
		 */
		GetId(id: number): Observable<Id> {
			return this.http.get<Id>(this.baseUri + 'utils/convert-legacy-id/' + id, {});
		}
	}

}

