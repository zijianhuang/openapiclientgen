import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Address {

		/** define the type of address */
		AddressType?: AddressAddressType | null;

		/**
		 * max length = 500
		 * Max length: 500
		 */
		AddressLine1?: string | null;

		/**
		 * max length = 500
		 * Max length: 500
		 */
		AddressLine2?: string | null;

		/**
		 * max length = 500
		 * Max length: 500
		 */
		AddressLine3?: string | null;

		/**
		 * max length = 500
		 * Max length: 500
		 */
		AddressLine4?: string | null;

		/**
		 * max length = 255
		 * Max length: 255
		 */
		City?: string | null;

		/**
		 * max length = 255
		 * Max length: 255
		 */
		Region?: string | null;

		/**
		 * max length = 50
		 * Max length: 50
		 */
		PostalCode?: string | null;

		/**
		 * max length = 50, [A-Z], [a-z] only
		 * Max length: 50
		 */
		Country?: string | null;

		/**
		 * max length = 255
		 * Max length: 255
		 */
		AttentionTo?: string | null;
	}

	export enum AddressAddressType { POBOX = 0, STREET = 1, DELIVERY = 2 }

	export interface Phone {
		PhoneType?: PhonePhoneType | null;

		/**
		 * max length = 50
		 * Max length: 50
		 */
		PhoneNumber?: string | null;

		/**
		 * max length = 10
		 * Max length: 10
		 */
		PhoneAreaCode?: string | null;

		/**
		 * max length = 20
		 * Max length: 20
		 */
		PhoneCountryCode?: string | null;
	}

	export enum PhonePhoneType { DEFAULT = 0, DDI = 1, MOBILE = 2, FAX = 3, OFFICE = 4 }

	export interface Accounts {
		Accounts1?: Array<Account> | null;
	}

	export interface Account {

		/**
		 * Customer defined alpha numeric account code e.g 200 or SALES (max length = 10)
		 * Max length: 10
		 */
		Code?: string | null;

		/**
		 * Name of account (max length = 150)
		 * Max length: 150
		 */
		Name?: string | null;

		/** The Xero identifier for an account � specified as a string following  the endpoint name   e.g. /297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		AccountID?: string | null;

		/** See Account Types */
		Type?: AccountType | null;

		/** For bank accounts only (Account Type BANK) */
		BankAccountNumber?: string | null;

		/** Accounts with a status of ACTIVE can be updated to ARCHIVED. See Account Status Codes */
		Status?: AccountStatus | null;

		/** Description of the Account. Valid for all types of accounts except bank accounts (max length = 4000) */
		Description?: string | null;

		/** For bank accounts only. See Bank Account types */
		BankAccountType?: AccountBankAccountType | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: AccountCurrencyCode | null;

		/** The tax type from TaxRates */
		TaxType?: string | null;

		/** Boolean � describes whether account can have payments applied to it */
		EnablePaymentsToAccount?: boolean | null;

		/** Boolean � describes whether account code is available for use with expense claims */
		ShowInExpenseClaims?: boolean | null;

		/** See Account Class Types */
		Class?: AccountClass | null;

		/** If this is a system account then this element is returned. See System Account types. Note that non-system accounts may have this element set as either �� or null. */
		SystemAccount?: AccountSystemAccount | null;

		/** Shown if set */
		ReportingCode?: string | null;

		/** Shown if set */
		ReportingCodeName?: string | null;

		/** boolean to indicate if an account has an attachment (read only) */
		HasAttachments?: boolean | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** Boolean � describes whether the account is shown in the watchlist widget on the dashboard */
		AddToWatchlist?: boolean | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export enum AccountType { BANK = 0, CURRENT = 1, CURRLIAB = 2, DEPRECIATN = 3, DIRECTCOSTS = 4, EQUITY = 5, EXPENSE = 6, FIXED = 7, INVENTORY = 8, LIABILITY = 9, NONCURRENT = 10, OTHERINCOME = 11, OVERHEADS = 12, PREPAYMENT = 13, REVENUE = 14, SALES = 15, TERMLIAB = 16, PAYGLIABILITY = 17, PAYG = 18, SUPERANNUATIONEXPENSE = 19, SUPERANNUATIONLIABILITY = 20, WAGESEXPENSE = 21 }

	export enum AccountStatus { ACTIVE = 0, ARCHIVED = 1, DELETED = 2 }

	export enum AccountBankAccountType { BANK = 0, CREDITCARD = 1, PAYPAL = 2, NONE = 3, _ = 4 }

	export enum AccountCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum AccountClass { ASSET = 0, EQUITY = 1, EXPENSE = 2, LIABILITY = 3, REVENUE = 4 }

	export enum AccountSystemAccount { DEBTORS = 0, CREDITORS = 1, BANKCURRENCYGAIN = 2, GST = 3, GSTONIMPORTS = 4, HISTORICAL = 5, REALISEDCURRENCYGAIN = 6, RETAINEDEARNINGS = 7, ROUNDING = 8, TRACKINGTRANSFERS = 9, UNPAIDEXPCLM = 10, UNREALISEDCURRENCYGAIN = 11, WAGEPAYABLES = 12, CISASSETS = 13, CISASSET = 14, CISLABOUR = 15, CISLABOUREXPENSE = 16, CISLABOURINCOME = 17, CISLIABILITY = 18, CISMATERIALS = 19, _ = 20 }

	export interface ValidationError {

		/** Validation error message */
		Message?: string | null;
	}

	export interface Attachments {
		Attachments1?: Array<Attachment> | null;
	}

	export interface Attachment {

		/** Unique ID for the file */
		AttachmentID?: string | null;

		/** Name of the file */
		FileName?: string | null;

		/** URL to the file on xero.com */
		Url?: string | null;

		/** Type of file */
		MimeType?: string | null;

		/** Length of the file content */
		ContentLength?: number | null;

		/** Include the file with the online invoice */
		IncludeOnline?: boolean | null;
	}

	export interface BankTransactions {
		BankTransactions1?: Array<BankTransaction> | null;
	}

	export interface BankTransaction {

		/**
		 * See Bank Transaction Types
		 * Required
		 */
		Type: BankTransactionType;
		Contact: Contact;

		/**
		 * See LineItems
		 * Required
		 */
		LineItems: Array<LineItem>;
		BankAccount: Account;

		/** Boolean to show if transaction is reconciled */
		IsReconciled?: boolean | null;

		/** Date of transaction � YYYY-MM-DD */
		Date?: Date | null;

		/** Reference for the transaction. Only supported for SPEND and RECEIVE transactions. */
		Reference?: string | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: BankTransactionCurrencyCode | null;

		/** Exchange rate to base currency when money is spent or received. e.g.0.7500 Only used for bank transactions in non base currency. If this isn�t specified for non base currency accounts then either the user-defined rate (preference) or the XE.com day rate will be used. Setting currency is only supported on overpayments. */
		CurrencyRate?: number | null;

		/** URL link to a source document � shown as �Go to App Name� */
		Url?: string | null;

		/** See Bank Transaction Status Codes */
		Status?: BankTransactionStatus | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Total of bank transaction excluding taxes */
		SubTotal?: number | null;

		/** Total tax on bank transaction */
		TotalTax?: number | null;

		/** Total of bank transaction tax inclusive */
		Total?: number | null;

		/** Xero generated unique identifier for bank transaction */
		BankTransactionID?: string | null;

		/** Xero generated unique identifier for a Prepayment. This will be returned on BankTransactions with a Type of SPEND-PREPAYMENT or RECEIVE-PREPAYMENT */
		PrepaymentID?: string | null;

		/** Xero generated unique identifier for an Overpayment. This will be returned on BankTransactions with a Type of SPEND-OVERPAYMENT or RECEIVE-OVERPAYMENT */
		OverpaymentID?: string | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** Boolean to indicate if a bank transaction has an attachment */
		HasAttachments?: boolean | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export enum BankTransactionType { RECEIVE = 0, RECEIVE_OVERPAYMENT = 1, RECEIVE_PREPAYMENT = 2, SPEND = 3, SPEND_OVERPAYMENT = 4, SPEND_PREPAYMENT = 5, RECEIVE_TRANSFER = 6, SPEND_TRANSFER = 7 }

	export interface Contact {

		/** Xero identifier */
		ContactID?: string | null;

		/**
		 * This can be updated via the API only i.e. This field is read only on the Xero contact screen, used to identify contacts in external systems (max length = 50). If the Contact Number is used, this is displayed as Contact Code in the Contacts UI in Xero.
		 * Max length: 50
		 */
		ContactNumber?: string | null;

		/**
		 * A user defined account number. This can be updated via the API and the Xero UI (max length = 50)
		 * Max length: 50
		 */
		AccountNumber?: string | null;

		/** Current status of a contact � see contact status types */
		ContactStatus?: ContactContactStatus | null;

		/**
		 * Full name of contact/organisation (max length = 255)
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * First name of contact person (max length = 255)
		 * Max length: 255
		 */
		FirstName?: string | null;

		/**
		 * Last name of contact person (max length = 255)
		 * Max length: 255
		 */
		LastName?: string | null;

		/**
		 * Email address of contact person (umlauts not supported) (max length  = 255)
		 * Max length: 255
		 */
		EmailAddress?: string | null;

		/** Skype user name of contact */
		SkypeUserName?: string | null;

		/** See contact persons */
		ContactPersons?: Array<ContactPerson> | null;

		/** Bank account number of contact */
		BankAccountDetails?: string | null;

		/**
		 * Tax number of contact � this is also known as the ABN (Australia), GST Number (New Zealand), VAT Number (UK) or Tax ID Number (US and global) in the Xero UI depending on which regionalized version of Xero you are using (max length = 50)
		 * Max length: 50
		 */
		TaxNumber?: string | null;

		/** The tax type from TaxRates */
		AccountsReceivableTaxType?: string | null;

		/** The tax type from TaxRates */
		AccountsPayableTaxType?: string | null;

		/** Store certain address types for a contact � see address types */
		Addresses?: Array<Address> | null;

		/** Store certain phone types for a contact � see phone types */
		Phones?: Array<Phone> | null;

		/** true or false � Boolean that describes if a contact that has any AP  invoices entered against them. Cannot be set via PUT or POST � it is automatically set when an accounts payable invoice is generated against this contact. */
		IsSupplier?: boolean | null;

		/** true or false � Boolean that describes if a contact has any AR invoices entered against them. Cannot be set via PUT or POST � it is automatically set when an accounts receivable invoice is generated against this contact. */
		IsCustomer?: boolean | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		DefaultCurrency?: ContactDefaultCurrency | null;

		/** Store XeroNetworkKey for contacts. */
		XeroNetworkKey?: string | null;

		/** The default sales account code for contacts */
		SalesDefaultAccountCode?: string | null;

		/** The default purchases account code for contacts */
		PurchasesDefaultAccountCode?: string | null;

		/** The default sales tracking categories for contacts */
		SalesTrackingCategories?: Array<SalesTrackingCategory> | null;

		/** The default purchases tracking categories for contacts */
		PurchasesTrackingCategories?: Array<SalesTrackingCategory> | null;

		/** The name of the Tracking Category assigned to the contact under SalesTrackingCategories and PurchasesTrackingCategories */
		TrackingCategoryName?: string | null;

		/** The name of the Tracking Option assigned to the contact under SalesTrackingCategories and PurchasesTrackingCategories */
		TrackingCategoryOption?: string | null;
		PaymentTerms?: PaymentTerm | null;

		/** UTC timestamp of last update to contact */
		UpdatedDateUTC?: Date | null;

		/** Displays which contact groups a contact is included in */
		ContactGroups?: Array<ContactGroup> | null;

		/** Website address for contact (read only) */
		Website?: string | null;
		BrandingTheme?: BrandingTheme | null;

		/** Bank details for use on a batch payment stored with each contact */
		BatchPayments?: BatchPaymentDetails | null;

		/** The default discount rate for the contact (read only) */
		Discount?: number | null;

		/** The raw AccountsReceivable(sales invoices) and AccountsPayable(bills) outstanding and overdue amounts, not converted to base currency (read only) */
		Balances?: Balances | null;

		/** Displays array of attachments from the API */
		Attachments?: Array<Attachment> | null;

		/** A boolean to indicate if a contact has an attachment */
		HasAttachments?: boolean | null;

		/** Displays validation errors returned from the API */
		ValidationErrors?: Array<ValidationError> | null;

		/** A boolean to indicate if a contact has an validation errors */
		HasValidationErrors?: boolean | null;

		/** Status of object */
		StatusAttributeString?: string | null;
	}

	export enum ContactContactStatus { ACTIVE = 0, ARCHIVED = 1, GDPRREQUEST = 2 }

	export interface ContactPerson {

		/** First name of person */
		FirstName?: string | null;

		/** Last name of person */
		LastName?: string | null;

		/** Email address of person */
		EmailAddress?: string | null;

		/** boolean to indicate whether contact should be included on emails with invoices etc. */
		IncludeInEmails?: boolean | null;
	}

	export enum ContactDefaultCurrency { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export interface SalesTrackingCategory {

		/** The default sales tracking category name for contacts */
		TrackingCategoryName?: string | null;

		/** The default purchase tracking category name for contacts */
		TrackingOptionName?: string | null;
	}

	export interface PaymentTerm {
		Bills?: Bill | null;
		Sales?: Bill | null;
	}

	export interface Bill {

		/** Day of Month (0-31) */
		Day?: number | null;
		Type?: BillType | null;
	}

	export enum BillType { DAYSAFTERBILLDATE = 0, DAYSAFTERBILLMONTH = 1, OFCURRENTMONTH = 2, OFFOLLOWINGMONTH = 3 }

	export interface ContactGroup {

		/** The Name of the contact group. Required when creating a new contact  group */
		Name?: string | null;

		/** The Status of a contact group. To delete a contact group update the status to DELETED. Only contact groups with a status of ACTIVE are returned on GETs. */
		Status?: ContactGroupStatus | null;

		/** The Xero identifier for an contact group � specified as a string following the endpoint name. e.g. /297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		ContactGroupID?: string | null;

		/** The ContactID and Name of Contacts in a contact group. Returned on GETs when the ContactGroupID is supplied in the URL. */
		Contacts?: Array<Contact> | null;
	}

	export enum ContactGroupStatus { ACTIVE = 0, DELETED = 1 }

	export interface BrandingTheme {

		/** Xero identifier */
		BrandingThemeID?: string | null;

		/** Name of branding theme */
		Name?: string | null;

		/** The location of the image file used as the logo on this branding theme */
		LogoUrl?: string | null;

		/** Always INVOICE */
		Type?: BrandingThemeType | null;

		/** Integer � ranked order of branding theme. The default branding theme has a value of 0 */
		SortOrder?: number | null;

		/** UTC timestamp of creation date of branding theme */
		CreatedDateUTC?: Date | null;
	}

	export enum BrandingThemeType { INVOICE = 0 }


	/** The raw AccountsReceivable(sales invoices) and AccountsPayable(bills) outstanding and overdue amounts, not converted to base currency (read only) */
	export interface Balances {
		AccountsReceivable?: AccountsReceivable | null;
		AccountsPayable?: AccountsPayable | null;
	}

	export interface AccountsReceivable {
		Outstanding?: number | null;
		Overdue?: number | null;
	}

	export interface AccountsPayable {
		Outstanding?: number | null;
		Overdue?: number | null;
	}

	export interface LineItem {

		/** LineItem unique ID */
		LineItemID?: string | null;

		/** Description needs to be at least 1 char long. A line item with just a description (i.e no unit amount or quantity) can be created by specifying just a <Description> element that contains at least 1 character */
		Description?: string | null;

		/** LineItem Quantity */
		Quantity?: number | null;

		/** LineItem Unit Amount */
		UnitAmount?: number | null;

		/** See Items */
		ItemCode?: string | null;

		/** See Accounts */
		AccountCode?: string | null;

		/** The tax type from TaxRates */
		TaxType?: string | null;

		/** The tax amount is auto calculated as a percentage of the line amount (see below) based on the tax rate. This value can be overriden if the calculated <TaxAmount> is not correct. */
		TaxAmount?: number | null;

		/** If you wish to omit either of the <Quantity> or <UnitAmount> you can provide a LineAmount and Xero will calculate the missing amount for you. The line amount reflects the discounted price if a DiscountRate has been used . i.e LineAmount = Quantity * Unit Amount * ((100 � DiscountRate)/100) */
		LineAmount?: number | null;

		/** Optional Tracking Category � see Tracking.  Any LineItem can have a  maximum of 2 <TrackingCategory> elements. */
		Tracking?: Array<LineItemTracking> | null;

		/** Percentage discount being applied to a line item (only supported on  ACCREC invoices � ACC PAY invoices and credit notes in Xero do not support discounts */
		DiscountRate?: number | null;

		/** Discount amount being applied to a line item. Only supported on ACCREC invoices - ACCPAY invoices and credit notes in Xero do not support discounts. */
		DiscountAmount?: number | null;

		/** The Xero identifier for a Repeating Invoice */
		RepeatingInvoiceID?: string | null;
	}

	export interface LineItemTracking {

		/** The Xero identifier for a tracking category */
		TrackingCategoryID?: string | null;

		/** The Xero identifier for a tracking category option */
		TrackingOptionID?: string | null;

		/**
		 * The name of the tracking category
		 * Max length: 100
		 */
		Name?: string | null;

		/** See Tracking Options */
		Option?: string | null;
	}

	export enum BankTransactionCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum BankTransactionStatus { AUTHORISED = 0, DELETED = 1, VOIDED = 2 }

	export enum BankTransactionLineAmountTypes { Exclusive = 0, Inclusive = 1, NoTax = 2 }


	/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
	export enum LineAmountTypes { Exclusive = 0, Inclusive = 1, NoTax = 2 }

	export interface BankTransfers {
		BankTransfers1?: Array<BankTransfer> | null;
	}

	export interface BankTransfer {
		FromBankAccount: Account;
		ToBankAccount: Account;

		/**
		 * amount of the transaction
		 * Required
		 */
		Amount: number;

		/** The date of the Transfer YYYY-MM-DD */
		Date?: Date | null;

		/** The identifier of the Bank Transfer */
		BankTransferID?: string | null;

		/** The currency rate */
		CurrencyRate?: number | null;

		/** The Bank Transaction ID for the source account */
		FromBankTransactionID?: string | null;

		/** The Bank Transaction ID for the destination account */
		ToBankTransactionID?: string | null;

		/** Boolean to indicate if a Bank Transfer has an attachment */
		HasAttachments?: boolean | null;

		/** UTC timestamp of creation date of bank transfer */
		CreatedDateUTC?: Date | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export interface BatchPayments {
		BatchPayments1?: Array<BatchPayment> | null;
	}

	export interface BatchPayment {
		Account?: Account | null;

		/**
		 * (NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.
		 * Max length: 12
		 */
		Reference?: string | null;

		/**
		 * (NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.
		 * Max length: 12
		 */
		Particulars?: string | null;

		/**
		 * (NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.
		 * Max length: 12
		 */
		Code?: string | null;

		/**
		 * (Non-NZ Only) These details are sent to the org�s bank as a reference for the batch payment transaction. They will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement imported into Xero. Maximum field length = 18
		 * Max length: 18
		 */
		Details?: string | null;

		/**
		 * (UK Only) Only shows on the statement line in Xero. Max length =18
		 * Max length: 18
		 */
		Narrative?: string | null;

		/** The Xero generated unique identifier for the bank transaction (read-only) */
		BatchPaymentID?: string | null;

		/** Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06 */
		DateString?: string | null;

		/** Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06 */
		Date?: Date | null;

		/** The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice e.g. 200.00 */
		Amount?: number | null;
		Payments?: Array<Payment> | null;

		/** PAYBATCH for bill payments or RECBATCH for sales invoice payments (read-only) */
		Type?: BatchPaymentType | null;

		/** AUTHORISED or DELETED (read-only). New batch payments will have a status of AUTHORISED. It is not possible to delete batch payments via the API. */
		Status?: PaymentStatus | null;

		/** The total of the payments that make up the batch (read-only) */
		TotalAmount?: string | null;

		/** UTC timestamp of last update to the payment */
		UpdatedDateUTC?: Date | null;

		/** Booelan that tells you if the batch payment has been reconciled (read-only) */
		IsReconciled?: string | null;
	}

	export interface Payment {
		Invoice?: Invoice | null;
		CreditNote?: CreditNote | null;
		Prepayment?: Prepayment | null;
		Overpayment?: Overpayment | null;

		/** Number of invoice or credit note you are applying payment to e.g.INV-4003 */
		InvoiceNumber?: string | null;

		/** Number of invoice or credit note you are applying payment to e.g. INV-4003 */
		CreditNoteNumber?: string | null;
		Account?: Account | null;

		/** Code of account you are using to make the payment e.g. 001 (note- not all accounts have a code value) */
		Code?: string | null;

		/** Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06 */
		Date?: Date | null;

		/** Exchange rate when payment is received. Only used for non base currency invoices and credit notes e.g. 0.7500 */
		CurrencyRate?: number | null;

		/** The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice e.g. 200.00 */
		Amount?: number | null;

		/** An optional description for the payment e.g. Direct Debit */
		Reference?: string | null;

		/** An optional parameter for the payment. A boolean indicating whether you would like the payment to be created as reconciled when using PUT, or whether a payment has been reconciled when using GET */
		IsReconciled?: boolean | null;

		/** The status of the payment. */
		Status?: PaymentStatus | null;

		/** See Payment Types. */
		PaymentType?: PaymentPaymentType | null;

		/** UTC timestamp of last update to the payment */
		UpdatedDateUTC?: Date | null;

		/** The Xero identifier for an Payment e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		PaymentID?: string | null;

		/** The suppliers bank account number the payment is being made to */
		BankAccountNumber?: string | null;

		/** The suppliers bank account number the payment is being made to */
		Particulars?: string | null;

		/** The information to appear on the supplier's bank account */
		Details?: string | null;

		/** A boolean to indicate if a contact has an validation errors */
		HasAccount?: boolean | null;

		/** A boolean to indicate if a contact has an validation errors */
		HasValidationErrors?: boolean | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export interface Invoice {

		/** See Invoice Types */
		Type?: InvoiceType | null;
		Contact?: Contact | null;

		/** See LineItems */
		LineItems?: Array<LineItem> | null;

		/** Date invoice was issued � YYYY-MM-DD. If the Date element is not specified it will default to the current date based on the timezone setting of the organisation */
		Date?: Date | null;

		/** Date invoice is due � YYYY-MM-DD */
		DueDate?: Date | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/**
		 * ACCREC � Unique alpha numeric code identifying invoice (when missing will auto-generate from your Organisation Invoice Settings) (max length = 255)
		 * Max length: 255
		 */
		InvoiceNumber?: string | null;

		/**
		 * ACCREC only � additional reference number (max length = 255)
		 * Max length: 255
		 */
		Reference?: string | null;

		/** See BrandingThemes */
		BrandingThemeID?: string | null;

		/** URL link to a source document � shown as �Go to [appName]� in the Xero app */
		Url?: string | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: InvoiceCurrencyCode | null;

		/** The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used. (max length = [18].[6]) */
		CurrencyRate?: number | null;

		/** See Invoice Status Codes */
		Status?: InvoiceStatus | null;

		/** Boolean to set whether the invoice in the Xero app should be marked as �sent�. This can be set only on invoices that have been approved */
		SentToContact?: boolean | null;

		/** Shown on sales invoices (Accounts Receivable) when this has been set */
		ExpectedPaymentDate?: Date | null;

		/** Shown on bills (Accounts Payable) when this has been set */
		PlannedPaymentDate?: Date | null;

		/** CIS deduction for UK contractors */
		CISDeduction?: number | null;

		/** Total of invoice excluding taxes */
		SubTotal?: number | null;

		/** Total tax on invoice */
		TotalTax?: number | null;

		/** Total of Invoice tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn�t equal the sum of the LineAmounts */
		Total?: number | null;

		/** Total of discounts applied on the invoice line items */
		TotalDiscount?: number | null;

		/** Xero generated unique identifier for invoice */
		InvoiceID?: string | null;

		/** boolean to indicate if an invoice has an attachment */
		HasAttachments?: boolean | null;

		/** boolean to indicate if an invoice has a discount */
		IsDiscounted?: boolean | null;

		/** See Payments */
		Payments?: Array<Payment> | null;

		/** See Prepayments */
		Prepayments?: Array<Prepayment> | null;

		/** See Overpayments */
		Overpayments?: Array<Overpayment> | null;

		/** Amount remaining to be paid on invoice */
		AmountDue?: number | null;

		/** Sum of payments received for invoice */
		AmountPaid?: number | null;

		/** The date the invoice was fully paid. Only returned on fully paid invoices */
		FullyPaidOnDate?: Date | null;

		/** Sum of all credit notes, over-payments and pre-payments applied to invoice */
		AmountCredited?: number | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** Details of credit notes that have been applied to an invoice */
		CreditNotes?: Array<CreditNote> | null;

		/** Displays array of attachments from the API */
		Attachments?: Array<Attachment> | null;

		/** A boolean to indicate if a invoice has an validation errors */
		HasErrors?: boolean | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;

		/** Displays array of warning messages from the API */
		Warnings?: Array<ValidationError> | null;
	}

	export enum InvoiceType { ACCPAY = 0, ACCPAYCREDIT = 1, APOVERPAYMENT = 2, APPREPAYMENT = 3, ACCREC = 4, ACCRECCREDIT = 5, AROVERPAYMENT = 6, ARPREPAYMENT = 7 }

	export enum InvoiceCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum InvoiceStatus { DRAFT = 0, SUBMITTED = 1, DELETED = 2, AUTHORISED = 3, PAID = 4, VOIDED = 5 }

	export interface Prepayment {

		/** See Prepayment Types */
		Type?: PrepaymentType | null;
		Contact?: Contact | null;

		/** The date the prepayment is created YYYY-MM-DD */
		Date?: Date | null;

		/** See Prepayment Status Codes */
		Status?: PrepaymentStatus | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** See Prepayment Line Items */
		LineItems?: Array<LineItem> | null;

		/** The subtotal of the prepayment excluding taxes */
		SubTotal?: number | null;

		/** The total tax on the prepayment */
		TotalTax?: number | null;

		/** The total of the prepayment(subtotal + total tax) */
		Total?: number | null;

		/** Returns Invoice number field. Reference field isn't available. */
		Reference?: string | null;

		/** UTC timestamp of last update to the prepayment */
		UpdatedDateUTC?: Date | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: PrepaymentCurrencyCode | null;

		/** Xero generated unique identifier */
		PrepaymentID?: string | null;

		/** The currency rate for a multicurrency prepayment. If no rate is specified, the XE.com day rate is used */
		CurrencyRate?: number | null;

		/** The remaining credit balance on the prepayment */
		RemainingCredit?: number | null;

		/** See Allocations */
		Allocations?: Array<Allocation> | null;

		/** The amount of applied to an invoice */
		AppliedAmount?: number | null;

		/** boolean to indicate if a prepayment has an attachment */
		HasAttachments?: boolean | null;

		/** See Attachments */
		Attachments?: Array<Attachment> | null;
	}

	export enum PrepaymentType { RECEIVE_PREPAYMENT = 0, SPEND_PREPAYMENT = 1, ARPREPAYMENT = 2, APPREPAYMENT = 3 }

	export enum PrepaymentStatus { AUTHORISED = 0, PAID = 1, VOIDED = 2 }

	export enum PrepaymentCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export interface Allocation {
		Invoice: Invoice;
		Overpayment?: Overpayment | null;
		Prepayment?: Prepayment | null;
		CreditNote?: CreditNote | null;

		/**
		 * the amount being applied to the invoice
		 * Required
		 */
		Amount: number;

		/**
		 * the date the allocation is applied YYYY-MM-DD.
		 * Required
		 */
		Date: Date;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export interface Overpayment {

		/** See Overpayment Types */
		Type?: OverpaymentType | null;
		Contact?: Contact | null;

		/** The date the overpayment is created YYYY-MM-DD */
		Date?: Date | null;

		/** See Overpayment Status Codes */
		Status?: PrepaymentStatus | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** See Overpayment Line Items */
		LineItems?: Array<LineItem> | null;

		/** The subtotal of the overpayment excluding taxes */
		SubTotal?: number | null;

		/** The total tax on the overpayment */
		TotalTax?: number | null;

		/** The total of the overpayment (subtotal + total tax) */
		Total?: number | null;

		/** UTC timestamp of last update to the overpayment */
		UpdatedDateUTC?: Date | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: OverpaymentCurrencyCode | null;

		/** Xero generated unique identifier */
		OverpaymentID?: string | null;

		/** The currency rate for a multicurrency overpayment. If no rate is specified, the XE.com day rate is used */
		CurrencyRate?: number | null;

		/** The remaining credit balance on the overpayment */
		RemainingCredit?: number | null;

		/** See Allocations */
		Allocations?: Array<Allocation> | null;

		/** The amount of applied to an invoice */
		AppliedAmount?: number | null;

		/** See Payments */
		Payments?: Array<Payment> | null;

		/** boolean to indicate if a overpayment has an attachment */
		HasAttachments?: boolean | null;

		/** See Attachments */
		Attachments?: Array<Attachment> | null;
	}

	export enum OverpaymentType { RECEIVE_OVERPAYMENT = 0, SPEND_OVERPAYMENT = 1, AROVERPAYMENT = 2 }

	export enum OverpaymentCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export interface CreditNote {

		/** See Credit Note Types */
		Type?: CreditNoteType | null;
		Contact?: Contact | null;

		/** The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date?: Date | null;

		/** See Credit Note Status Codes */
		Status?: InvoiceStatus | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** See Invoice Line Items */
		LineItems?: Array<LineItem> | null;

		/** The subtotal of the credit note excluding taxes */
		SubTotal?: number | null;

		/** The total tax on the credit note */
		TotalTax?: number | null;

		/** The total of the Credit Note(subtotal + total tax) */
		Total?: number | null;

		/** UTC timestamp of last update to the credit note */
		UpdatedDateUTC?: Date | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: CreditNoteCurrencyCode | null;

		/** Date when credit note was fully paid(UTC format) */
		FullyPaidOnDate?: Date | null;

		/** Xero generated unique identifier */
		CreditNoteID?: string | null;

		/** ACCRECCREDIT � Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings) */
		CreditNoteNumber?: string | null;

		/** ACCRECCREDIT only � additional reference number */
		Reference?: string | null;

		/** boolean to indicate if a credit note has been sent to a contact via  the Xero app (currently read only) */
		SentToContact?: boolean | null;

		/** The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used */
		CurrencyRate?: number | null;

		/** The remaining credit balance on the Credit Note */
		RemainingCredit?: number | null;

		/** See Allocations */
		Allocations?: Array<Allocation> | null;

		/** The amount of applied to an invoice */
		AppliedAmount?: number | null;

		/** See Payments */
		Payments?: Array<Payment> | null;

		/** See BrandingThemes */
		BrandingThemeID?: string | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** boolean to indicate if a credit note has an attachment */
		HasAttachments?: boolean | null;

		/** A boolean to indicate if a credit note has an validation errors */
		HasErrors?: boolean | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export enum CreditNoteType { ACCPAYCREDIT = 0, ACCRECCREDIT = 1 }

	export enum CreditNoteCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum PaymentStatus { AUTHORISED = 0, DELETED = 1 }

	export enum PaymentPaymentType { ACCRECPAYMENT = 0, ACCPAYPAYMENT = 1, ARCREDITPAYMENT = 2, APCREDITPAYMENT = 3, AROVERPAYMENTPAYMENT = 4, ARPREPAYMENTPAYMENT = 5, APPREPAYMENTPAYMENT = 6, APOVERPAYMENTPAYMENT = 7 }

	export enum BatchPaymentType { PAYBATCH = 0, RECBATCH = 1 }


	/** Bank details for use on a batch payment stored with each contact */
	export interface BatchPaymentDetails {

		/** Bank account number for use with Batch Payments */
		BankAccountNumber?: string | null;

		/** Name of bank for use with Batch Payments */
		BankAccountName?: string | null;

		/**
		 * (Non-NZ Only) These details are sent to the org�s bank as a reference for the batch payment transaction. They will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement imported into Xero. Maximum field length = 18
		 * Max length: 18
		 */
		Details?: string | null;

		/**
		 * (NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.
		 * Max length: 12
		 */
		Code?: string | null;

		/**
		 * (NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.
		 * Max length: 12
		 */
		Reference?: string | null;
	}

	export interface BrandingThemes {
		BrandingThemes1?: Array<BrandingTheme> | null;
	}

	export interface PaymentServices {
		PaymentServices1?: Array<PaymentService> | null;
	}

	export interface PaymentService {

		/** Xero identifier */
		PaymentServiceID?: string | null;

		/** Name of payment service */
		PaymentServiceName?: string | null;

		/** The custom payment URL */
		PaymentServiceUrl?: string | null;

		/** The text displayed on the Pay Now button in Xero Online Invoicing. If this is not set it will default to Pay by credit card */
		PayNowText?: string | null;

		/** This will always be CUSTOM for payment services created via the API. */
		PaymentServiceType?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export interface Contacts {
		Contacts1?: Array<Contact> | null;
	}

	export interface CISSettings {
		CISSettings1?: Array<CISSetting> | null;
	}

	export interface CISSetting {

		/** Boolean that describes if the contact is a CIS Subcontractor */
		CISEnabled?: boolean | null;

		/** CIS Deduction rate for the contact if he is a subcontractor. If the contact is not CISEnabled, then the rate is not returned */
		Rate?: number | null;
	}

	export interface CISOrgSetting {

		/** true or false - Boolean that describes if the organisation is a CIS Contractor */
		CISContractorEnabled?: boolean | null;

		/** true or false - Boolean that describes if the organisation is a CIS SubContractor */
		CISSubContractorEnabled?: boolean | null;

		/** CIS Deduction rate for the organisation */
		Rate?: number | null;
	}

	export interface ContactGroups {
		ContactGroups1?: Array<ContactGroup> | null;
	}

	export interface RequestEmpty {

		/** Need at least one field to create an empty JSON payload */
		Status?: string | null;
	}

	export interface CreditNotes {
		CreditNotes1?: Array<CreditNote> | null;
	}

	export interface Allocations {
		Allocations1?: Array<Allocation> | null;
	}

	export interface Currencies {
		Currencies1?: Array<Currency> | null;
	}

	export interface Currency {

		/** 3 letter alpha code for the currency � see list of currency codes */
		Code?: CurrencyCode | null;

		/** Name of Currency */
		Description?: string | null;
	}

	export enum CurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export interface Employees {
		Employees1?: Array<Employee> | null;
	}

	export interface Employee {

		/** The Xero identifier for an employee e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		EmployeeID?: string | null;

		/** Current status of an employee � see contact status types */
		Status?: ContactContactStatus | null;

		/**
		 * First name of an employee (max length = 255)
		 * Max length: 255
		 */
		FirstName?: string | null;

		/**
		 * Last name of an employee (max length = 255)
		 * Max length: 255
		 */
		LastName?: string | null;
		ExternalLink?: ExternalLink | null;
		UpdatedDateUTC?: Date | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export interface ExternalLink {

		/** See External link types */
		LinkType?: ExternalLinkLinkType | null;

		/** URL for service e.g. http://twitter.com/xeroapi */
		Url?: string | null;
		Description?: string | null;
	}

	export enum ExternalLinkLinkType { Facebook = 0, GooglePlus = 1, LinkedIn = 2, Twitter = 3, Website = 4 }

	export interface ExpenseClaims {
		ExpenseClaims1?: Array<ExpenseClaim> | null;
	}

	export interface ExpenseClaim {

		/** Xero generated unique identifier for an expense claim */
		ExpenseClaimID?: string | null;

		/** Current status of an expense claim � see status types */
		Status?: ExpenseClaimStatus | null;

		/** See Payments */
		Payments?: Array<Payment> | null;
		User?: User | null;
		Receipts?: Array<Receipt> | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** The total of an expense claim being paid */
		Total?: number | null;

		/** The amount due to be paid for an expense claim */
		AmountDue?: number | null;

		/** The amount still to pay for an expense claim */
		AmountPaid?: number | null;

		/** The date when the expense claim is due to be paid YYYY-MM-DD */
		PaymentDueDate?: Date | null;

		/** The date the expense claim will be reported in Xero YYYY-MM-DD */
		ReportingDate?: Date | null;

		/** The Xero identifier for the Receipt e.g.  e59a2c7f-1306-4078-a0f3-73537afcbba9 */
		ReceiptID?: string | null;
	}

	export enum ExpenseClaimStatus { SUBMITTED = 0, AUTHORISED = 1, PAID = 2, VOIDED = 3, DELETED = 4 }

	export interface User {

		/** Xero identifier */
		UserID?: string | null;

		/** Email address of user */
		EmailAddress?: string | null;

		/** First name of user */
		FirstName?: string | null;

		/** Last name of user */
		LastName?: string | null;

		/** Timestamp of last change to user */
		UpdatedDateUTC?: Date | null;

		/** Boolean to indicate if user is the subscriber */
		IsSubscriber?: boolean | null;

		/** User role that defines permissions in Xero and via API (READONLY, INVOICEONLY, STANDARD, FINANCIALADVISER, etc) */
		OrganisationRole?: UserOrganisationRole | null;
	}

	export enum UserOrganisationRole { READONLY = 0, INVOICEONLY = 1, STANDARD = 2, FINANCIALADVISER = 3, MANAGEDCLIENT = 4, CASHBOOKCLIENT = 5, UNKNOWN = 6 }

	export interface Receipt {

		/** Date of receipt � YYYY-MM-DD */
		Date?: Date | null;
		Contact?: Contact | null;
		LineItems?: Array<LineItem> | null;
		User?: User | null;

		/** Additional reference number */
		Reference?: string | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Total of receipt excluding taxes */
		SubTotal?: number | null;

		/** Total tax on receipt */
		TotalTax?: number | null;

		/** Total of receipt tax inclusive (i.e. SubTotal + TotalTax) */
		Total?: number | null;

		/** Xero generated unique identifier for receipt */
		ReceiptID?: string | null;

		/** Current status of receipt � see status types */
		Status?: ReceiptStatus | null;

		/** Xero generated sequence number for receipt in current claim for a given user */
		ReceiptNumber?: string | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** boolean to indicate if a receipt has an attachment */
		HasAttachments?: boolean | null;

		/** URL link to a source document � shown as �Go to [appName]� in the Xero app */
		Url?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;

		/** Displays array of warning messages from the API */
		Warnings?: Array<ValidationError> | null;

		/** Displays array of attachments from the API */
		Attachments?: Array<Attachment> | null;
	}

	export enum ReceiptStatus { DRAFT = 0, SUBMITTED = 1, AUTHORISED = 2, DECLINED = 3, VOIDED = 4 }

	export interface HistoryRecords {
		HistoryRecords1?: Array<HistoryRecord> | null;
	}

	export interface HistoryRecord {

		/** details */
		Details?: string | null;

		/** Name of branding theme */
		Changes?: string | null;

		/** has a value of 0 */
		User?: string | null;

		/** UTC timestamp of creation date of branding theme */
		DateUTC?: Date | null;
	}

	export interface Invoices {
		Invoices1?: Array<Invoice> | null;
	}

	export interface OnlineInvoices {
		OnlineInvoices1?: Array<OnlineInvoice> | null;
	}

	export interface OnlineInvoice {

		/** the URL to an online invoice */
		OnlineInvoiceUrl?: string | null;
	}

	export interface InvoiceReminders {
		InvoiceReminders1?: Array<InvoiceReminder> | null;
	}

	export interface InvoiceReminder {

		/** setting for on or off */
		Enabled?: boolean | null;
	}

	export interface Items {
		Items1?: Array<Item> | null;
	}

	export interface Item {

		/**
		 * User defined item code (max length = 30)
		 * Required
		 * Max length: 30
		 */
		Code: string;

		/** The inventory asset account for the item. The account must be of type INVENTORY. The  COGSAccountCode in PurchaseDetails is also required to create a tracked item */
		InventoryAssetAccountCode?: string | null;

		/**
		 * The name of the item (max length = 50)
		 * Max length: 50
		 */
		Name?: string | null;

		/** Boolean value, defaults to true. When IsSold is true the item will be available on sales transactions in the Xero UI. If IsSold is updated to false then Description and SalesDetails values will be nulled. */
		IsSold?: boolean | null;

		/** Boolean value, defaults to true. When IsPurchased is true the item is available for purchase transactions in the Xero UI. If IsPurchased is updated to false then PurchaseDescription and PurchaseDetails values will be nulled. */
		IsPurchased?: boolean | null;

		/**
		 * The sales description of the item (max length = 4000)
		 * Max length: 4000
		 */
		Description?: string | null;

		/**
		 * The purchase description of the item (max length = 4000)
		 * Max length: 4000
		 */
		PurchaseDescription?: string | null;
		PurchaseDetails?: Purchase | null;
		SalesDetails?: Purchase | null;

		/** True for items that are tracked as inventory. An item will be tracked as inventory if the InventoryAssetAccountCode and COGSAccountCode are set. */
		IsTrackedAsInventory?: boolean | null;

		/** The value of the item on hand. Calculated using average cost accounting. */
		TotalCostPool?: number | null;

		/** The quantity of the item on hand */
		QuantityOnHand?: number | null;

		/** Last modified date in UTC format */
		UpdatedDateUTC?: Date | null;

		/** The Xero identifier for an Item */
		ItemID?: string | null;

		/** Status of object */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export interface Purchase {

		/** Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request. */
		UnitPrice?: number | null;

		/** Default account code to be used for purchased/sale. Not applicable to the purchase details of tracked items */
		AccountCode?: string | null;

		/** Cost of goods sold account. Only applicable to the purchase details of tracked items. */
		COGSAccountCode?: string | null;

		/** The tax type from TaxRates */
		TaxType?: string | null;
	}

	export interface Journals {
		Journals1?: Array<Journal> | null;
	}

	export interface Journal {

		/** Xero identifier */
		JournalID?: string | null;

		/** Date the journal was posted */
		JournalDate?: Date | null;

		/** Xero generated journal number */
		JournalNumber?: number | null;

		/** Created date UTC format */
		CreatedDateUTC?: Date | null;

		/** reference field for additional indetifying information */
		Reference?: string | null;

		/** The identifier for the source transaction (e.g. InvoiceID) */
		SourceID?: string | null;

		/** The journal source type. The type of transaction that created the journal */
		SourceType?: JournalSourceType | null;

		/** See JournalLines */
		JournalLines?: Array<JournalLine> | null;
	}

	export enum JournalSourceType { ACCREC = 0, ACCPAY = 1, ACCRECCREDIT = 2, ACCPAYCREDIT = 3, ACCRECPAYMENT = 4, ACCPAYPAYMENT = 5, ARCREDITPAYMENT = 6, APCREDITPAYMENT = 7, CASHREC = 8, CASHPAID = 9, TRANSFER = 10, ARPREPAYMENT = 11, APPREPAYMENT = 12, AROVERPAYMENT = 13, APOVERPAYMENT = 14, EXPCLAIM = 15, EXPPAYMENT = 16, MANJOURNAL = 17, PAYSLIP = 18, WAGEPAYABLE = 19, INTEGRATEDPAYROLLPE = 20, INTEGRATEDPAYROLLPT = 21, EXTERNALSPENDMONEY = 22, INTEGRATEDPAYROLLPTPAYMENT = 23, INTEGRATEDPAYROLLCN = 24 }

	export interface JournalLine {

		/** Xero identifier for Journal */
		JournalLineID?: string | null;

		/** See Accounts */
		AccountID?: string | null;

		/** See Accounts */
		AccountCode?: string | null;

		/** See Account Types */
		AccountType?: AccountType | null;

		/** See AccountCodes */
		AccountName?: string | null;

		/** The description from the source transaction line item. Only returned if populated. */
		Description?: string | null;

		/** Net amount of journal line. This will be a positive value for a debit and negative for a credit */
		NetAmount?: number | null;

		/** Gross amount of journal line (NetAmount + TaxAmount). */
		GrossAmount?: number | null;

		/** Total tax on a journal line */
		TaxAmount?: number | null;

		/** The tax type from TaxRates */
		TaxType?: string | null;

		/** see TaxRates */
		TaxName?: string | null;

		/** Optional Tracking Category � see Tracking. Any JournalLine can have a maximum of 2 <TrackingCategory> elements. */
		TrackingCategories?: Array<TrackingCategory> | null;
	}

	export interface TrackingCategory {

		/** The Xero identifier for a tracking category e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		TrackingCategoryID?: string | null;

		/** The Xero identifier for a tracking option e.g. dc54c220-0140-495a-b925-3246adc0075f */
		TrackingOptionID?: string | null;

		/**
		 * The name of the tracking category e.g. Department, Region (max length = 100)
		 * Max length: 100
		 */
		Name?: string | null;

		/**
		 * The option name of the tracking option e.g. East, West (max length = 100)
		 * Max length: 100
		 */
		Option?: string | null;

		/** The status of a tracking category */
		Status?: AccountStatus | null;

		/** See Tracking Options */
		Options?: Array<TrackingOption> | null;
	}

	export interface TrackingOption {

		/** The Xero identifier for a tracking optione.g. ae777a87-5ef3-4fa0-a4f0-d10e1f13073a */
		TrackingOptionID?: string | null;

		/**
		 * The name of the tracking option e.g. Marketing, East (max length = 50)
		 * Max length: 50
		 */
		Name?: string | null;

		/** The status of a tracking option */
		Status?: AccountStatus | null;

		/** Filter by a tracking categorye.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		TrackingCategoryID?: string | null;
	}

	export interface LinkedTransactions {
		LinkedTransactions1?: Array<LinkedTransaction> | null;
	}

	export interface LinkedTransaction {

		/** Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice */
		SourceTransactionID?: string | null;

		/** The line item identifier from the source transaction. */
		SourceLineItemID?: string | null;

		/** Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED. */
		ContactID?: string | null;

		/** Filter by the TargetTransactionID. Get all the linked transactions  allocated to a particular ACCREC invoice */
		TargetTransactionID?: string | null;

		/** The line item identifier from the target transaction. It is possible  to link multiple billable expenses to the same TargetLineItemID. */
		TargetLineItemID?: string | null;

		/** The Xero identifier for an Linked Transaction e.g./LinkedTransactions/297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		LinkedTransactionID?: string | null;

		/** Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED. */
		Status?: LinkedTransactionStatus | null;

		/** This will always be BILLABLEEXPENSE. More types may be added in future. */
		Type?: LinkedTransactionType | null;

		/** The last modified date in UTC format */
		UpdatedDateUTC?: Date | null;

		/** The Type of the source tranasction. This will be ACCPAY if the linked transaction was created from an invoice and SPEND if it was created from a bank transaction. */
		SourceTransactionTypeCode?: LinkedTransactionSourceTransactionTypeCode | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export enum LinkedTransactionStatus { APPROVED = 0, DRAFT = 1, ONDRAFT = 2, BILLED = 3, VOIDED = 4 }

	export enum LinkedTransactionType { BILLABLEEXPENSE = 0 }

	export enum LinkedTransactionSourceTransactionTypeCode { ACCPAY = 0, SPEND = 1 }

	export interface ManualJournals {
		ManualJournals1?: Array<ManualJournal> | null;
	}

	export interface ManualJournal {

		/**
		 * Description of journal being posted
		 * Required
		 */
		Narration: string;

		/** See JournalLines */
		JournalLines?: Array<ManualJournalLine> | null;

		/** Date journal was posted � YYYY-MM-DD */
		Date?: Date | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** See Manual Journal Status Codes */
		Status?: ManualJournalStatus | null;

		/** Url link to a source document � shown as �Go to [appName]� in the Xero app */
		Url?: string | null;

		/** Boolean � default is true if not specified */
		ShowOnCashBasisReports?: boolean | null;

		/** Boolean to indicate if a manual journal has an attachment */
		HasAttachments?: boolean | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** The Xero identifier for a Manual Journal */
		ManualJournalID?: string | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of warning messages from the API */
		Warnings?: Array<ValidationError> | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;

		/** Displays array of attachments from the API */
		Attachments?: Array<Attachment> | null;
	}

	export interface ManualJournalLine {

		/** total for line. Debits are positive, credits are negative value */
		LineAmount?: number | null;

		/** See Accounts */
		AccountCode?: string | null;

		/** Description for journal line */
		Description?: string | null;

		/** The tax type from TaxRates */
		TaxType?: string | null;

		/** Optional Tracking Category � see Tracking. Any JournalLine can have a maximum of 2 <TrackingCategory> elements. */
		Tracking?: Array<TrackingCategory> | null;

		/** The calculated tax amount based on the TaxType and LineAmount */
		TaxAmount?: number | null;

		/** is the line blank */
		IsBlank?: boolean | null;
	}

	export enum ManualJournalStatus { DRAFT = 0, POSTED = 1, DELETED = 2, VOIDED = 3, ARCHIVED = 4 }

	export interface Organisations {
		Organisations1?: Array<Organisation> | null;
	}

	export interface Organisation {

		/** Unique Xero identifier */
		OrganisationID?: string | null;

		/** Display a unique key used for Xero-to-Xero transactions */
		APIKey?: string | null;

		/** Display name of organisation shown in Xero */
		Name?: string | null;

		/** Organisation name shown on Reports */
		LegalName?: string | null;

		/** Boolean to describe if organisation is registered with a local tax authority i.e. true, false */
		PaysTax?: boolean | null;

		/** See Version Types */
		Version?: OrganisationVersion | null;

		/** Organisation Type */
		OrganisationType?: OrganisationOrganisationType | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		BaseCurrency?: OrganisationBaseCurrency | null;
		CountryCode?: OrganisationCountryCode | null;

		/** Boolean to describe if organisation is a demo company. */
		IsDemoCompany?: boolean | null;

		/** Will be set to ACTIVE if you can connect to organisation via the Xero API */
		OrganisationStatus?: string | null;

		/** Shows for New Zealand, Australian and UK organisations */
		RegistrationNumber?: string | null;

		/** Shown if set. US Only. */
		EmployerIdentificationNumber?: string | null;

		/** Shown if set. Displays in the Xero UI as Tax File Number (AU), GST Number (NZ), VAT Number (UK) and Tax ID Number (US & Global). */
		TaxNumber?: string | null;

		/** Calendar day e.g. 0-31 */
		FinancialYearEndDay?: number | null;

		/** Calendar Month e.g. 1-12 */
		FinancialYearEndMonth?: number | null;

		/** The accounting basis used for tax returns. See Sales Tax Basis */
		SalesTaxBasis?: OrganisationSalesTaxBasis | null;

		/** The frequency with which tax returns are processed. See Sales Tax Period */
		SalesTaxPeriod?: OrganisationSalesTaxPeriod | null;

		/** The default for LineAmountTypes on sales transactions */
		DefaultSalesTax?: string | null;

		/** The default for LineAmountTypes on purchase transactions */
		DefaultPurchasesTax?: string | null;

		/** Shown if set. See lock dates */
		PeriodLockDate?: Date | null;

		/** Shown if set. See lock dates */
		EndOfYearLockDate?: Date | null;

		/** Timestamp when the organisation was created in Xero */
		CreatedDateUTC?: Date | null;

		/** Timezone specifications */
		Timezone?: OrganisationTimezone | null;

		/** Organisation Type */
		OrganisationEntityType?: OrganisationOrganisationType | null;

		/** A unique identifier for the organisation. Potential uses. */
		ShortCode?: string | null;

		/** Organisation Classes describe which plan the Xero organisation is on (e.g. DEMO, TRIAL, PREMIUM) */
		Class?: OrganisationClass | null;

		/** BUSINESS or PARTNER. Partner edition organisations are sold exclusively through accounting partners and have restricted functionality (e.g. no access to invoicing) */
		Edition?: OrganisationEdition | null;

		/** Description of business type as defined in Organisation settings */
		LineOfBusiness?: string | null;

		/** Address details for organisation � see Addresses */
		Addresses?: Array<Address> | null;

		/** Phones details for organisation � see Phones */
		Phones?: Array<Phone> | null;

		/** Organisation profile links for popular services such as Facebook,Twitter, GooglePlus and LinkedIn. You can also add link to your website here. Shown if Organisation settings  is updated in Xero. See ExternalLinks below */
		ExternalLinks?: Array<ExternalLink> | null;
		PaymentTerms?: PaymentTerm | null;
	}

	export enum OrganisationVersion { AU = 0, NZ = 1, GLOBAL = 2, UK = 3, US = 4, AUONRAMP = 5, NZONRAMP = 6, GLOBALONRAMP = 7, UKONRAMP = 8, USONRAMP = 9 }

	export enum OrganisationOrganisationType { ACCOUNTING_PRACTICE = 0, COMPANY = 1, CHARITY = 2, CLUB_OR_SOCIETY = 3, LOOK_THROUGH_COMPANY = 4, NOT_FOR_PROFIT = 5, PARTNERSHIP = 6, S_CORPORATION = 7, SELF_MANAGED_SUPERANNUATION_FUND = 8, SOLE_TRADER = 9, SUPERANNUATION_FUND = 10, TRUST = 11 }

	export enum OrganisationBaseCurrency { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum OrganisationCountryCode { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AN = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BW = 32, BY = 33, BZ = 34, CA = 35, CC = 36, CD = 37, CF = 38, CG = 39, CH = 40, CI = 41, CK = 42, CL = 43, CM = 44, CN = 45, CO = 46, CR = 47, CU = 48, CV = 49, CW = 50, CX = 51, CY = 52, CZ = 53, DE = 54, DJ = 55, DK = 56, DM = 57, DO = 58, DZ = 59, EC = 60, EE = 61, EG = 62, EH = 63, ER = 64, ES = 65, ET = 66, FI = 67, FJ = 68, FK = 69, FM = 70, FO = 71, FR = 72, GA = 73, GB = 74, GD = 75, GE = 76, GG = 77, GH = 78, GI = 79, GL = 80, GM = 81, GN = 82, GQ = 83, GR = 84, GT = 85, GU = 86, GW = 87, GY = 88, HK = 89, HN = 90, HR = 91, HT = 92, HU = 93, ID = 94, IE = 95, IL = 96, IM = 97, IN = 98, IO = 99, IQ = 100, IR = 101, IS = 102, IT = 103, JE = 104, JM = 105, JO = 106, JP = 107, KE = 108, KG = 109, KH = 110, KI = 111, KM = 112, KN = 113, KP = 114, KR = 115, KW = 116, KY = 117, KZ = 118, LA = 119, LB = 120, LC = 121, LI = 122, LK = 123, LR = 124, LS = 125, LT = 126, LU = 127, LV = 128, LY = 129, MA = 130, MC = 131, MD = 132, ME = 133, MF = 134, MG = 135, MH = 136, MK = 137, ML = 138, MM = 139, MN = 140, MO = 141, MP = 142, MR = 143, MS = 144, MT = 145, MU = 146, MV = 147, MW = 148, MX = 149, MY = 150, MZ = 151, NA = 152, NC = 153, NE = 154, NG = 155, NI = 156, NL = 157, NO = 158, NP = 159, NR = 160, NU = 161, NZ = 162, OM = 163, PA = 164, PE = 165, PF = 166, PG = 167, PH = 168, PK = 169, PL = 170, PM = 171, PN = 172, PR = 173, PS = 174, PT = 175, PW = 176, PY = 177, QA = 178, RE = 179, RO = 180, RS = 181, RU = 182, RW = 183, SA = 184, SB = 185, SC = 186, SD = 187, SE = 188, SG = 189, SH = 190, SI = 191, SJ = 192, SK = 193, SL = 194, SM = 195, SN = 196, SO = 197, SR = 198, SS = 199, ST = 200, SV = 201, SX = 202, SY = 203, SZ = 204, TC = 205, TD = 206, TG = 207, TH = 208, TJ = 209, TK = 210, TL = 211, TM = 212, TN = 213, TO = 214, TR = 215, TT = 216, TV = 217, TW = 218, TZ = 219, UA = 220, UG = 221, US = 222, UY = 223, UZ = 224, VA = 225, VC = 226, VE = 227, VG = 228, VI = 229, VN = 230, VU = 231, WF = 232, WS = 233, XK = 234, YE = 235, YT = 236, ZA = 237, ZM = 238, ZW = 239 }

	export enum OrganisationSalesTaxBasis { PAYMENTS = 0, INVOICE = 1, NONE = 2, CASH = 3, ACCRUAL = 4, FLATRATECASH = 5, FLATRATEACCRUAL = 6, ACCRUALS = 7 }

	export enum OrganisationSalesTaxPeriod { MONTHLY = 0, QUARTERLY1 = 1, QUARTERLY2 = 2, QUARTERLY3 = 3, ANNUALLY = 4, ONEMONTHS = 5, TWOMONTHS = 6, SIXMONTHS = 7, _1MONTHLY = 8, _2MONTHLY = 9, _3MONTHLY = 10, _6MONTHLY = 11, QUARTERLY = 12, YEARLY = 13, NONE = 14 }

	export enum OrganisationTimezone { MOROCCOSTANDARDTIME = 0, UTC = 1, GMTSTANDARDTIME = 2, GREENWICHSTANDARDTIME = 3, WEUROPESTANDARDTIME = 4, CENTRALEUROPESTANDARDTIME = 5, ROMANCESTANDARDTIME = 6, CENTRALEUROPEANSTANDARDTIME = 7, WCENTRALAFRICASTANDARDTIME = 8, NAMIBIASTANDARDTIME = 9, JORDANSTANDARDTIME = 10, GTBSTANDARDTIME = 11, MIDDLEEASTSTANDARDTIME = 12, EGYPTSTANDARDTIME = 13, SYRIASTANDARDTIME = 14, EEUROPESTANDARDTIME = 15, SOUTHAFRICASTANDARDTIME = 16, FLESTANDARDTIME = 17, TURKEYSTANDARDTIME = 18, ISRAELSTANDARDTIME = 19, KALININGRADSTANDARDTIME = 20, LIBYASTANDARDTIME = 21, ARABICSTANDARDTIME = 22, ARABSTANDARDTIME = 23, BELARUSSTANDARDTIME = 24, RUSSIANSTANDARDTIME = 25, EAFRICASTANDARDTIME = 26, IRANSTANDARDTIME = 27, ARABIANSTANDARDTIME = 28, AZERBAIJANSTANDARDTIME = 29, RUSSIATIMEZONE3 = 30, MAURITIUSSTANDARDTIME = 31, GEORGIANSTANDARDTIME = 32, CAUCASUSSTANDARDTIME = 33, AFGHANISTANSTANDARDTIME = 34, WESTASIASTANDARDTIME = 35, EKATERINBURGSTANDARDTIME = 36, PAKISTANSTANDARDTIME = 37, INDIASTANDARDTIME = 38, SRILANKASTANDARDTIME = 39, NEPALSTANDARDTIME = 40, CENTRALASIASTANDARDTIME = 41, BANGLADESHSTANDARDTIME = 42, NCENTRALASIASTANDARDTIME = 43, MYANMARSTANDARDTIME = 44, SEASIASTANDARDTIME = 45, NORTHASIASTANDARDTIME = 46, CHINASTANDARDTIME = 47, NORTHASIAEASTSTANDARDTIME = 48, SINGAPORESTANDARDTIME = 49, WAUSTRALIASTANDARDTIME = 50, TAIPEISTANDARDTIME = 51, ULAANBAATARSTANDARDTIME = 52, TOKYOSTANDARDTIME = 53, KOREASTANDARDTIME = 54, YAKUTSKSTANDARDTIME = 55, CENAUSTRALIASTANDARDTIME = 56, AUSCENTRALSTANDARDTIME = 57, EAUSTRALIASTANDARDTIME = 58, AUSEASTERNSTANDARDTIME = 59, WESTPACIFICSTANDARDTIME = 60, TASMANIASTANDARDTIME = 61, MAGADANSTANDARDTIME = 62, VLADIVOSTOKSTANDARDTIME = 63, RUSSIATIMEZONE10 = 64, CENTRALPACIFICSTANDARDTIME = 65, RUSSIATIMEZONE11 = 66, NEWZEALANDSTANDARDTIME = 67, UTC_12 = 68, FIJISTANDARDTIME = 69, KAMCHATKASTANDARDTIME = 70, TONGASTANDARDTIME = 71, SAMOASTANDARDTIME = 72, LINEISLANDSSTANDARDTIME = 73, AZORESSTANDARDTIME = 74, CAPEVERDESTANDARDTIME = 75, UTC02 = 76, MIDATLANTICSTANDARDTIME = 77, ESOUTHAMERICASTANDARDTIME = 78, ARGENTINASTANDARDTIME = 79, SAEASTERNSTANDARDTIME = 80, GREENLANDSTANDARDTIME = 81, MONTEVIDEOSTANDARDTIME = 82, BAHIASTANDARDTIME = 83, NEWFOUNDLANDSTANDARDTIME = 84, PARAGUAYSTANDARDTIME = 85, ATLANTICSTANDARDTIME = 86, CENTRALBRAZILIANSTANDARDTIME = 87, SAWESTERNSTANDARDTIME = 88, PACIFICSASTANDARDTIME = 89, VENEZUELASTANDARDTIME = 90, SAPACIFICSTANDARDTIME = 91, EASTERNSTANDARDTIME = 92, USEASTERNSTANDARDTIME = 93, CENTRALAMERICASTANDARDTIME = 94, CENTRALSTANDARDTIME = 95, CENTRALSTANDARDTIMEMEXICO = 96, CANADACENTRALSTANDARDTIME = 97, USMOUNTAINSTANDARDTIME = 98, MOUNTAINSTANDARDTIMEMEXICO = 99, MOUNTAINSTANDARDTIME = 100, PACIFICSTANDARDTIMEMEXICO = 101, PACIFICSTANDARDTIME = 102, ALASKANSTANDARDTIME = 103, HAWAIIANSTANDARDTIME = 104, UTC11 = 105, DATELINESTANDARDTIME = 106 }

	export enum OrganisationClass { DEMO = 0, TRIAL = 1, STARTER = 2, STANDARD = 3, PREMIUM = 4, PREMIUM_20 = 5, PREMIUM_50 = 6, PREMIUM_100 = 7, LEDGER = 8, GST_CASHBOOK = 9, NON_GST_CASHBOOK = 10 }

	export enum OrganisationEdition { BUSINESS = 0, PARTNER = 1 }

	export enum CountryCode { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AN = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BW = 32, BY = 33, BZ = 34, CA = 35, CC = 36, CD = 37, CF = 38, CG = 39, CH = 40, CI = 41, CK = 42, CL = 43, CM = 44, CN = 45, CO = 46, CR = 47, CU = 48, CV = 49, CW = 50, CX = 51, CY = 52, CZ = 53, DE = 54, DJ = 55, DK = 56, DM = 57, DO = 58, DZ = 59, EC = 60, EE = 61, EG = 62, EH = 63, ER = 64, ES = 65, ET = 66, FI = 67, FJ = 68, FK = 69, FM = 70, FO = 71, FR = 72, GA = 73, GB = 74, GD = 75, GE = 76, GG = 77, GH = 78, GI = 79, GL = 80, GM = 81, GN = 82, GQ = 83, GR = 84, GT = 85, GU = 86, GW = 87, GY = 88, HK = 89, HN = 90, HR = 91, HT = 92, HU = 93, ID = 94, IE = 95, IL = 96, IM = 97, IN = 98, IO = 99, IQ = 100, IR = 101, IS = 102, IT = 103, JE = 104, JM = 105, JO = 106, JP = 107, KE = 108, KG = 109, KH = 110, KI = 111, KM = 112, KN = 113, KP = 114, KR = 115, KW = 116, KY = 117, KZ = 118, LA = 119, LB = 120, LC = 121, LI = 122, LK = 123, LR = 124, LS = 125, LT = 126, LU = 127, LV = 128, LY = 129, MA = 130, MC = 131, MD = 132, ME = 133, MF = 134, MG = 135, MH = 136, MK = 137, ML = 138, MM = 139, MN = 140, MO = 141, MP = 142, MR = 143, MS = 144, MT = 145, MU = 146, MV = 147, MW = 148, MX = 149, MY = 150, MZ = 151, NA = 152, NC = 153, NE = 154, NG = 155, NI = 156, NL = 157, NO = 158, NP = 159, NR = 160, NU = 161, NZ = 162, OM = 163, PA = 164, PE = 165, PF = 166, PG = 167, PH = 168, PK = 169, PL = 170, PM = 171, PN = 172, PR = 173, PS = 174, PT = 175, PW = 176, PY = 177, QA = 178, RE = 179, RO = 180, RS = 181, RU = 182, RW = 183, SA = 184, SB = 185, SC = 186, SD = 187, SE = 188, SG = 189, SH = 190, SI = 191, SJ = 192, SK = 193, SL = 194, SM = 195, SN = 196, SO = 197, SR = 198, SS = 199, ST = 200, SV = 201, SX = 202, SY = 203, SZ = 204, TC = 205, TD = 206, TG = 207, TH = 208, TJ = 209, TK = 210, TL = 211, TM = 212, TN = 213, TO = 214, TR = 215, TT = 216, TV = 217, TW = 218, TZ = 219, UA = 220, UG = 221, US = 222, UY = 223, UZ = 224, VA = 225, VC = 226, VE = 227, VG = 228, VI = 229, VN = 230, VU = 231, WF = 232, WS = 233, XK = 234, YE = 235, YT = 236, ZA = 237, ZM = 238, ZW = 239 }


	/** Timezone specifications */
	export enum TimeZone { MOROCCOSTANDARDTIME = 0, UTC = 1, GMTSTANDARDTIME = 2, GREENWICHSTANDARDTIME = 3, WEUROPESTANDARDTIME = 4, CENTRALEUROPESTANDARDTIME = 5, ROMANCESTANDARDTIME = 6, CENTRALEUROPEANSTANDARDTIME = 7, WCENTRALAFRICASTANDARDTIME = 8, NAMIBIASTANDARDTIME = 9, JORDANSTANDARDTIME = 10, GTBSTANDARDTIME = 11, MIDDLEEASTSTANDARDTIME = 12, EGYPTSTANDARDTIME = 13, SYRIASTANDARDTIME = 14, EEUROPESTANDARDTIME = 15, SOUTHAFRICASTANDARDTIME = 16, FLESTANDARDTIME = 17, TURKEYSTANDARDTIME = 18, ISRAELSTANDARDTIME = 19, KALININGRADSTANDARDTIME = 20, LIBYASTANDARDTIME = 21, ARABICSTANDARDTIME = 22, ARABSTANDARDTIME = 23, BELARUSSTANDARDTIME = 24, RUSSIANSTANDARDTIME = 25, EAFRICASTANDARDTIME = 26, IRANSTANDARDTIME = 27, ARABIANSTANDARDTIME = 28, AZERBAIJANSTANDARDTIME = 29, RUSSIATIMEZONE3 = 30, MAURITIUSSTANDARDTIME = 31, GEORGIANSTANDARDTIME = 32, CAUCASUSSTANDARDTIME = 33, AFGHANISTANSTANDARDTIME = 34, WESTASIASTANDARDTIME = 35, EKATERINBURGSTANDARDTIME = 36, PAKISTANSTANDARDTIME = 37, INDIASTANDARDTIME = 38, SRILANKASTANDARDTIME = 39, NEPALSTANDARDTIME = 40, CENTRALASIASTANDARDTIME = 41, BANGLADESHSTANDARDTIME = 42, NCENTRALASIASTANDARDTIME = 43, MYANMARSTANDARDTIME = 44, SEASIASTANDARDTIME = 45, NORTHASIASTANDARDTIME = 46, CHINASTANDARDTIME = 47, NORTHASIAEASTSTANDARDTIME = 48, SINGAPORESTANDARDTIME = 49, WAUSTRALIASTANDARDTIME = 50, TAIPEISTANDARDTIME = 51, ULAANBAATARSTANDARDTIME = 52, TOKYOSTANDARDTIME = 53, KOREASTANDARDTIME = 54, YAKUTSKSTANDARDTIME = 55, CENAUSTRALIASTANDARDTIME = 56, AUSCENTRALSTANDARDTIME = 57, EAUSTRALIASTANDARDTIME = 58, AUSEASTERNSTANDARDTIME = 59, WESTPACIFICSTANDARDTIME = 60, TASMANIASTANDARDTIME = 61, MAGADANSTANDARDTIME = 62, VLADIVOSTOKSTANDARDTIME = 63, RUSSIATIMEZONE10 = 64, CENTRALPACIFICSTANDARDTIME = 65, RUSSIATIMEZONE11 = 66, NEWZEALANDSTANDARDTIME = 67, UTC_12 = 68, FIJISTANDARDTIME = 69, KAMCHATKASTANDARDTIME = 70, TONGASTANDARDTIME = 71, SAMOASTANDARDTIME = 72, LINEISLANDSSTANDARDTIME = 73, AZORESSTANDARDTIME = 74, CAPEVERDESTANDARDTIME = 75, UTC02 = 76, MIDATLANTICSTANDARDTIME = 77, ESOUTHAMERICASTANDARDTIME = 78, ARGENTINASTANDARDTIME = 79, SAEASTERNSTANDARDTIME = 80, GREENLANDSTANDARDTIME = 81, MONTEVIDEOSTANDARDTIME = 82, BAHIASTANDARDTIME = 83, NEWFOUNDLANDSTANDARDTIME = 84, PARAGUAYSTANDARDTIME = 85, ATLANTICSTANDARDTIME = 86, CENTRALBRAZILIANSTANDARDTIME = 87, SAWESTERNSTANDARDTIME = 88, PACIFICSASTANDARDTIME = 89, VENEZUELASTANDARDTIME = 90, SAPACIFICSTANDARDTIME = 91, EASTERNSTANDARDTIME = 92, USEASTERNSTANDARDTIME = 93, CENTRALAMERICASTANDARDTIME = 94, CENTRALSTANDARDTIME = 95, CENTRALSTANDARDTIMEMEXICO = 96, CANADACENTRALSTANDARDTIME = 97, USMOUNTAINSTANDARDTIME = 98, MOUNTAINSTANDARDTIMEMEXICO = 99, MOUNTAINSTANDARDTIME = 100, PACIFICSTANDARDTIMEMEXICO = 101, PACIFICSTANDARDTIME = 102, ALASKANSTANDARDTIME = 103, HAWAIIANSTANDARDTIME = 104, UTC11 = 105, DATELINESTANDARDTIME = 106 }

	export enum PaymentTermType { DAYSAFTERBILLDATE = 0, DAYSAFTERBILLMONTH = 1, OFCURRENTMONTH = 2, OFFOLLOWINGMONTH = 3 }

	export interface Overpayments {
		Overpayments1?: Array<Overpayment> | null;
	}

	export interface Payments {
		Payments1?: Array<Payment> | null;
	}

	export interface PaymentDelete {

		/**
		 * The status of the payment.
		 * Required
		 */
		Status: string;
	}

	export interface Prepayments {
		Prepayments1?: Array<Prepayment> | null;
	}

	export interface PurchaseOrders {
		PurchaseOrders1?: Array<PurchaseOrder> | null;
	}

	export interface PurchaseOrder {
		Contact?: Contact | null;

		/** See LineItems */
		LineItems?: Array<LineItem> | null;

		/** Date purchase order was issued � YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date?: Date | null;

		/** Date the goods are to be delivered � YYYY-MM-DD */
		DeliveryDate?: Date | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings) */
		PurchaseOrderNumber?: string | null;

		/** Additional reference number */
		Reference?: string | null;

		/** See BrandingThemes */
		BrandingThemeID?: string | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: PurchaseOrderCurrencyCode | null;

		/** See Purchase Order Status Codes */
		Status?: PurchaseOrderStatus | null;

		/** Boolean to set whether the purchase order should be marked as �sent�. This can be set only on purchase orders that have been approved or billed */
		SentToContact?: boolean | null;

		/** The address the goods are to be delivered to */
		DeliveryAddress?: string | null;

		/** The person that the delivery is going to */
		AttentionTo?: string | null;

		/** The phone number for the person accepting the delivery */
		Telephone?: string | null;

		/** A free text feild for instructions (500 characters max) */
		DeliveryInstructions?: string | null;

		/** The date the goods are expected to arrive. */
		ExpectedArrivalDate?: Date | null;

		/** Xero generated unique identifier for purchase order */
		PurchaseOrderID?: string | null;

		/** The currency rate for a multicurrency purchase order. If no rate is specified, the XE.com day rate is used. */
		CurrencyRate?: number | null;

		/** Total of purchase order excluding taxes */
		SubTotal?: number | null;

		/** Total tax on purchase order */
		TotalTax?: number | null;

		/** Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax) */
		Total?: number | null;

		/** Total of discounts applied on the purchase order line items */
		TotalDiscount?: number | null;

		/** boolean to indicate if a purchase order has an attachment */
		HasAttachments?: boolean | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;

		/** Displays array of warning messages from the API */
		Warnings?: Array<ValidationError> | null;

		/** Displays array of attachments from the API */
		Attachments?: Array<Attachment> | null;
	}

	export enum PurchaseOrderCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum PurchaseOrderStatus { DRAFT = 0, SUBMITTED = 1, AUTHORISED = 2, BILLED = 3, DELETED = 4 }

	export interface Quotes {
		Quotes1?: Array<Quote> | null;
	}

	export interface Quote {

		/** QuoteID GUID is automatically generated and is returned after create or GET. */
		QuoteID?: string | null;

		/**
		 * Unique alpha numeric code identifying a quote (Max Length = 255)
		 * Max length: 255
		 */
		QuoteNumber?: string | null;

		/**
		 * Additional reference number
		 * Max length: 4000
		 */
		Reference?: string | null;

		/**
		 * Terms of the quote
		 * Max length: 4000
		 */
		Terms?: string | null;
		Contact?: Contact | null;

		/** See LineItems */
		LineItems?: Array<LineItem> | null;

		/** Date quote was issued � YYYY-MM-DD. If the Date element is not specified it will default to the current date based on the timezone setting of the organisation */
		Date?: Date | null;

		/** Date the quote was issued (YYYY-MM-DD) */
		DateString?: string | null;

		/** Date the quote expires � YYYY-MM-DD. */
		ExpiryDate?: Date | null;

		/** Date the quote expires � YYYY-MM-DD. */
		ExpiryDateString?: string | null;

		/** The status of the quote. */
		Status?: QuoteStatus | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: QuoteCurrencyCode | null;

		/** The currency rate for a multicurrency quote */
		CurrencyRate?: number | null;

		/** Total of quote excluding taxes. */
		SubTotal?: number | null;

		/** Total tax on quote */
		TotalTax?: number | null;

		/** Total of Quote tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn�t equal the sum of the LineAmounts */
		Total?: number | null;

		/** Total of discounts applied on the quote line items */
		TotalDiscount?: number | null;

		/**
		 * Title text for the quote
		 * Max length: 100
		 */
		Title?: string | null;

		/**
		 * Summary text for the quote
		 * Max length: 3000
		 */
		Summary?: string | null;

		/** See BrandingThemes */
		BrandingThemeID?: string | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: QuoteLineAmountTypes | null;

		/** A string to indicate if a invoice status */
		StatusAttributeString?: string | null;

		/** Displays array of validation error messages from the API */
		ValidationErrors?: Array<ValidationError> | null;
	}

	export enum QuoteStatus { DRAFT = 0, SENT = 1, DECLINED = 2, ACCEPTED = 3, INVOICED = 4 }

	export enum QuoteCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum QuoteLineAmountTypes { EXCLUSIVE = 0, INCLUSIVE = 1, NOTAX = 2 }


	/** The status of the quote. */
	export enum QuoteStatusCodes { DRAFT = 0, SENT = 1, DECLINED = 2, ACCEPTED = 3, INVOICED = 4 }

	export interface Receipts {
		Receipts1?: Array<Receipt> | null;
	}

	export interface RepeatingInvoices {
		RepeatingInvoices1?: Array<RepeatingInvoice> | null;
	}

	export interface RepeatingInvoice {

		/** See Invoice Types */
		Type?: RepeatingInvoiceType | null;
		Contact?: Contact | null;
		Schedule?: Schedule | null;

		/** See LineItems */
		LineItems?: Array<LineItem> | null;

		/** Line amounts are exclusive of tax by default if you don�t specify this element. See Line Amount Types */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** ACCREC only � additional reference number */
		Reference?: string | null;

		/** See BrandingThemes */
		BrandingThemeID?: string | null;

		/** 3 letter alpha code for the currency � see list of currency codes */
		CurrencyCode?: RepeatingInvoiceCurrencyCode | null;

		/** One of the following - DRAFT or AUTHORISED � See Invoice Status Codes */
		Status?: RepeatingInvoiceStatus | null;

		/** Total of invoice excluding taxes */
		SubTotal?: number | null;

		/** Total tax on invoice */
		TotalTax?: number | null;

		/** Total of Invoice tax inclusive (i.e. SubTotal + TotalTax) */
		Total?: number | null;

		/** Xero generated unique identifier for repeating invoice template */
		RepeatingInvoiceID?: string | null;

		/** Xero generated unique identifier for repeating invoice template */
		ID?: string | null;

		/** boolean to indicate if an invoice has an attachment */
		HasAttachments?: boolean | null;

		/** Displays array of attachments from the API */
		Attachments?: Array<Attachment> | null;
	}

	export enum RepeatingInvoiceType { ACCPAY = 0, ACCREC = 1 }

	export interface Schedule {

		/** Integer used with the unit e.g. 1 (every 1 week), 2 (every 2 months) */
		Period?: number | null;

		/** One of the following - WEEKLY or MONTHLY */
		Unit?: ScheduleUnit | null;

		/** Integer used with due date type e.g 20 (of following month), 31 (of current month) */
		DueDate?: number | null;

		/** the payment terms */
		DueDateType?: ScheduleDueDateType | null;

		/** Date the first invoice of the current version of the repeating schedule was generated (changes when repeating invoice is edited) */
		StartDate?: Date | null;

		/** The calendar date of the next invoice in the schedule to be generated */
		NextScheduledDate?: Date | null;

		/** Invoice end date � only returned if the template has an end date set */
		EndDate?: Date | null;
	}

	export enum ScheduleUnit { WEEKLY = 0, MONTHLY = 1 }

	export enum ScheduleDueDateType { DAYSAFTERBILLDATE = 0, DAYSAFTERBILLMONTH = 1, DAYSAFTERINVOICEDATE = 2, DAYSAFTERINVOICEMONTH = 3, OFCURRENTMONTH = 4, OFFOLLOWINGMONTH = 5 }

	export enum RepeatingInvoiceCurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, _ = 163 }

	export enum RepeatingInvoiceStatus { DRAFT = 0, AUTHORISED = 1, DELETED = 2 }

	export interface ReportWithRows {
		Reports?: Array<ReportWithRow> | null;
	}

	export interface ReportWithRow {

		/** Report id */
		ReportID?: string | null;

		/** Name of the report */
		ReportName?: string | null;

		/** Title of the report */
		ReportTitle?: string | null;

		/** The type of report (BalanceSheet,ProfitLoss, etc) */
		ReportType?: string | null;

		/** Report titles array (3 to 4 strings with the report name, orgnisation name and time frame of report) */
		ReportTitles?: Array<string> | null;

		/** Date of report */
		ReportDate?: string | null;
		Rows?: Array<ReportRows> | null;

		/** Updated Date */
		UpdatedDateUTC?: Date | null;
		Fields?: Array<ReportFields> | null;
	}

	export interface ReportRows {
		RowType?: ReportRowsRowType | null;
		Title?: string | null;
		Cells?: Array<ReportCell> | null;
		Rows?: Array<ReportRow> | null;
	}

	export enum ReportRowsRowType { Header = 0, Section = 1, Row = 2, SummaryRow = 3 }

	export interface ReportCell {
		Value?: string | null;
		Attributes?: Array<ReportAttribute> | null;
	}

	export interface ReportAttribute {
		Id?: string | null;
		Value?: string | null;
	}

	export interface ReportRow {
		RowType?: ReportRowsRowType | null;
		Title?: string | null;
		Cells?: Array<ReportCell> | null;
	}

	export interface ReportFields {
		FieldID?: string | null;
		Description?: string | null;
		Value?: string | null;
	}

	export enum RowType { Header = 0, Section = 1, Row = 2, SummaryRow = 3 }

	export interface Reports {
		Reports1?: Array<Report> | null;
	}

	export interface Report {

		/** See Prepayment Types */
		ReportID?: string | null;

		/** See Prepayment Types */
		ReportName?: string | null;

		/** See Prepayment Types */
		ReportType?: ReportReportType | null;

		/** See Prepayment Types */
		ReportTitle?: string | null;

		/** Date of report */
		ReportDate?: string | null;

		/** Updated Date */
		UpdatedDateUTC?: Date | null;
		Contacts?: Array<TenNinteyNineContact> | null;
	}

	export enum ReportReportType { AgedPayablesByContact = 0 }

	export interface TenNinteyNineContact {

		/** Box 1 on 1099 Form */
		Box1?: number | null;

		/** Box 2 on 1099 Form */
		Box2?: number | null;

		/** Box 3 on 1099 Form */
		Box3?: number | null;

		/** Box 4 on 1099 Form */
		Box4?: number | null;

		/** Box 5 on 1099 Form */
		Box5?: number | null;

		/** Box 6 on 1099 Form */
		Box6?: number | null;

		/** Box 7 on 1099 Form */
		Box7?: number | null;

		/** Box 8 on 1099 Form */
		Box8?: number | null;

		/** Box 9 on 1099 Form */
		Box9?: number | null;

		/** Box 10 on 1099 Form */
		Box10?: number | null;

		/** Box 11 on 1099 Form */
		Box11?: number | null;

		/** Box 13 on 1099 Form */
		Box13?: number | null;

		/** Box 14 on 1099 Form */
		Box14?: number | null;

		/** Contact name on 1099 Form */
		Name?: string | null;

		/** Contact Fed Tax ID type */
		FederalTaxIDType?: string | null;

		/** Contact city on 1099 Form */
		City?: string | null;

		/** Contact zip on 1099 Form */
		Zip?: string | null;

		/** Contact State on 1099 Form */
		State?: string | null;

		/** Contact email on 1099 Form */
		Email?: string | null;

		/** Contact address on 1099 Form */
		StreetAddress?: string | null;

		/** Contact tax id on 1099 Form */
		TaxID?: string | null;

		/** Contact contact id */
		ContactId?: string | null;
	}

	export interface TaxRates {
		TaxRates1?: Array<TaxRate> | null;
	}

	export interface TaxRate {

		/** Name of tax rate */
		Name?: string | null;

		/** The tax type */
		TaxType?: string | null;

		/** See TaxComponents */
		TaxComponents?: Array<TaxComponent> | null;

		/** See Status Codes */
		Status?: TaxRateStatus | null;

		/** See ReportTaxTypes */
		ReportTaxType?: TaxRateReportTaxType | null;

		/** Boolean to describe if tax rate can be used for asset accounts i.e.  true,false */
		CanApplyToAssets?: boolean | null;

		/** Boolean to describe if tax rate can be used for equity accounts i.e true,false */
		CanApplyToEquity?: boolean | null;

		/** Boolean to describe if tax rate can be used for expense accounts  i.e. true,false */
		CanApplyToExpenses?: boolean | null;

		/** Boolean to describe if tax rate can be used for liability accounts  i.e. true,false */
		CanApplyToLiabilities?: boolean | null;

		/** Boolean to describe if tax rate can be used for revenue accounts i.e. true,false */
		CanApplyToRevenue?: boolean | null;

		/** Tax Rate (decimal to 4dp) e.g 12.5000 */
		DisplayTaxRate?: number | null;

		/** Effective Tax Rate (decimal to 4dp) e.g 12.5000 */
		EffectiveRate?: number | null;
	}

	export interface TaxComponent {

		/** Name of Tax Component */
		Name?: string | null;

		/** Tax Rate (up to 4dp) */
		Rate?: number | null;

		/** Boolean to describe if Tax rate is compounded. */
		IsCompound?: boolean | null;

		/** Boolean to describe if tax rate is non-recoverable. Non-recoverable rates are only applicable to Canadian organisations */
		IsNonRecoverable?: boolean | null;
	}

	export enum TaxRateStatus { ACTIVE = 0, DELETED = 1, ARCHIVED = 2, PENDING = 3 }

	export enum TaxRateReportTaxType { AVALARA = 0, BASEXCLUDED = 1, CAPITALSALESOUTPUT = 2, CAPITALEXPENSESINPUT = 3, ECOUTPUT = 4, ECOUTPUTSERVICES = 5, ECINPUT = 6, ECACQUISITIONS = 7, EXEMPTEXPENSES = 8, EXEMPTINPUT = 9, EXEMPTOUTPUT = 10, GSTONIMPORTS = 11, INPUT = 12, INPUTTAXED = 13, MOSSSALES = 14, NONE = 15, NONEOUTPUT = 16, OUTPUT = 17, PURCHASESINPUT = 18, SALESOUTPUT = 19, EXEMPTCAPITAL = 20, EXEMPTEXPORT = 21, CAPITALEXINPUT = 22, GSTONCAPIMPORTS = 23, GSTONCAPITALIMPORTS = 24, REVERSECHARGES = 25, PAYMENTS = 26, INVOICE = 27, CASH = 28, ACCRUAL = 29, FLATRATECASH = 30, FLATRATEACCRUAL = 31, ACCRUALS = 32, TXCA = 33, SRCAS = 34, DSOUTPUT = 35, BLINPUT2 = 36, EPINPUT = 37, IMINPUT2 = 38, MEINPUT = 39, IGDSINPUT2 = 40, ESN33OUTPUT = 41, OPINPUT = 42, OSOUTPUT = 43, TXN33INPUT = 44, TXESSINPUT = 45, TXREINPUT = 46, TXPETINPUT = 47, NRINPUT = 48, ES33OUTPUT = 49, ZERORATEDINPUT = 50, ZERORATEDOUTPUT = 51, DRCHARGESUPPLY = 52, DRCHARGE = 53, CAPINPUT = 54, CAPIMPORTS = 55, IMINPUT = 56, INPUT2 = 57, CIUINPUT = 58, SRINPUT = 59, OUTPUT2 = 60, SROUTPUT = 61, CAPOUTPUT = 62, SROUTPUT2 = 63, CIUOUTPUT = 64, ZROUTPUT = 65, ZREXPORT = 66, ACC28PLUS = 67, ACCUPTO28 = 68, OTHEROUTPUT = 69, SHOUTPUT = 70, ZRINPUT = 71, BADDEBT = 72, OTHERINPUT = 73 }


	/** See Tax Types � can only be used on update calls */
	export enum TaxType { OUTPUT = 0, INPUT = 1, CAPEXINPUT = 2, EXEMPTEXPORT = 3, EXEMPTEXPENSES = 4, EXEMPTCAPITAL = 5, EXEMPTOUTPUT = 6, INPUTTAXED = 7, BASEXCLUDED = 8, GSTONCAPIMPORTS = 9, GSTONIMPORTS = 10, NONE = 11, INPUT2 = 12, ZERORATED = 13, OUTPUT2 = 14, CAPEXINPUT2 = 15, CAPEXOUTPUT = 16, CAPEXOUTPUT2 = 17, CAPEXSRINPUT = 18, CAPEXSROUTPUT = 19, ECACQUISITIONS = 20, ECZRINPUT = 21, ECZROUTPUT = 22, ECZROUTPUTSERVICES = 23, EXEMPTINPUT = 24, REVERSECHARGES = 25, RRINPUT = 26, RROUTPUT = 27, SRINPUT = 28, SROUTPUT = 29, ZERORATEDINPUT = 30, ZERORATEDOUTPUT = 31, BLINPUT = 32, DSOUTPUT = 33, EPINPUT = 34, ES33OUTPUT = 35, ESN33OUTPUT = 36, IGDSINPUT2 = 37, IMINPUT2 = 38, MEINPUT = 39, NRINPUT = 40, OPINPUT = 41, OSOUTPUT = 42, TXESSINPUT = 43, TXN33INPUT = 44, TXPETINPUT = 45, TXREINPUT = 46, INPUT3 = 47, INPUT4 = 48, OUTPUT3 = 49, OUTPUT4 = 50, SROUTPUT2 = 51, TXCA = 52, SRCAS = 53, BLINPUT2 = 54, DRCHARGESUPPLY20 = 55, DRCHARGE20 = 56, DRCHARGESUPPLY5 = 57, DRCHARGE5 = 58 }

	export interface TrackingCategories {
		TrackingCategories1?: Array<TrackingCategory> | null;
	}

	export interface TrackingOptions {
		Options?: Array<TrackingOption> | null;
	}

	export interface Users {
		Users1?: Array<User> | null;
	}

	export interface Error {

		/** Exception number */
		ErrorNumber?: number | null;

		/** Exception type */
		Type?: string | null;

		/** Exception message */
		Message?: string | null;

		/** Array of Elements of validation Errors */
		Elements?: Array<Element> | null;
	}

	export interface Element {

		/** Array of Validation Error message */
		ValidationErrors?: Array<ValidationError> | null;

		/** Unique ID for batch payment object with validation error */
		BatchPaymentID?: string | null;
		BankTransactionID?: string | null;
		CreditNoteID?: string | null;
		ContactID?: string | null;
		InvoiceID?: string | null;
		ItemID?: string | null;
		PurchaseOrderID?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Allows you to retrieve the full chart of accounts
		 * Get Accounts
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {Accounts} Success - return response of type Accounts array with 0 to n Account
		 */
		GetAccounts(where: string, order: string): Observable<Accounts> {
			return this.http.get<Accounts>(this.baseUri + 'Accounts?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to create a new chart of accounts
		 * Put Accounts
		 * @param {Account} requestBody Account object in body of request
		 * @return {Accounts} Success - created new Account and return response of type Accounts array with new Account
		 */
		CreateAccount(requestBody: Account): Observable<Accounts> {
			return this.http.put<Accounts>(this.baseUri + 'Accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a single chart of accounts
		 * Get Accounts/{AccountID}
		 * @param {string} AccountID Unique identifier for retrieving single object
		 * @return {Accounts} Success - return response of type Accounts array with one Account
		 */
		GetAccount(AccountID: string): Observable<Accounts> {
			return this.http.get<Accounts>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)), {});
		}

		/**
		 * Allows you to update a chart of accounts
		 * Post Accounts/{AccountID}
		 * @param {string} AccountID Unique identifier for retrieving single object
		 * @param {Accounts} requestBody Request of type Accounts array with one Account
		 * @return {Accounts} Success - update existing Account and return response of type Accounts array with updated Account
		 */
		UpdateAccount(AccountID: string, requestBody: Accounts): Observable<Accounts> {
			return this.http.post<Accounts>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to delete a chart of accounts
		 * Delete Accounts/{AccountID}
		 * @param {string} AccountID Unique identifier for retrieving single object
		 * @return {Accounts} Success - delete existing Account and return response of type Accounts array with deleted Account
		 */
		DeleteAccount(AccountID: string): Observable<Accounts> {
			return this.http.delete<Accounts>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)), {});
		}

		/**
		 * Allows you to retrieve Attachments for accounts
		 * Get Accounts/{AccountID}/Attachments
		 * @param {string} AccountID Unique identifier for Account object
		 * @return {Attachments} Success - return response of type Attachments array of Attachment
		 */
		GetAccountAttachments(AccountID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve specific Attachment on Account
		 * Get Accounts/{AccountID}/Attachments/{AttachmentID}
		 * @param {string} AccountID Unique identifier for Account object
		 * @param {string} AttachmentID Unique identifier for Attachment object
		 * @return {void} Success - return response of attachment for Account as binary data
		 */
		GetAccountAttachmentById(AccountID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachment on Account by Filename
		 * Get Accounts/{AccountID}/Attachments/{FileName}
		 * @param {string} AccountID Unique identifier for Account object
		 * @param {string} FileName Name of the attachment
		 * @return {void} Success - return response of attachment for Account as binary data
		 */
		GetAccountAttachmentByFileName(AccountID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve either one or many BatchPayments for invoices
		 * Get BatchPayments
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {BatchPayments} Success - return response of type BatchPayments array of BatchPayment objects
		 */
		GetBatchPayments(where: string, order: string): Observable<BatchPayments> {
			return this.http.get<BatchPayments>(this.baseUri + 'BatchPayments?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Create one or many BatchPayments for invoices
		 * Put BatchPayments
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {BatchPayments} requestBody BatchPayments with an array of Payments in body of request
		 * @return {BatchPayments} Success - return response of type BatchPayments array of BatchPayment objects
		 */
		CreateBatchPayment(summarizeErrors: boolean, requestBody: BatchPayments): Observable<BatchPayments> {
			return this.http.put<BatchPayments>(this.baseUri + 'BatchPayments?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve history from a Batch Payment
		 * Get BatchPayments/{BatchPaymentID}/History
		 * @param {string} BatchPaymentID Unique identifier for BatchPayment
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetBatchPaymentHistory(BatchPaymentID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'BatchPayments/' + (BatchPaymentID == null ? '' : encodeURIComponent(BatchPaymentID)) + '/History', {});
		}

		/**
		 * Allows you to create a history record for a Batch Payment
		 * Put BatchPayments/{BatchPaymentID}/History
		 * @param {string} BatchPaymentID Unique identifier for BatchPayment
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateBatchPaymentHistoryRecord(BatchPaymentID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'BatchPayments/' + (BatchPaymentID == null ? '' : encodeURIComponent(BatchPaymentID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve any spend or receive money transactions
		 * Get BankTransactions
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page Up to 100 bank transactions will be returned in a single API call with line items details
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {BankTransactions} Success - return response of type BankTransactions array with 0 to n BankTransaction
		 */
		GetBankTransactions(where: string, order: string, page: number, unitdp: number): Observable<BankTransactions> {
			return this.http.get<BankTransactions>(this.baseUri + 'BankTransactions?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to create one or more spend or receive money transaction
		 * Put BankTransactions
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @param {BankTransactions} requestBody BankTransactions with an array of BankTransaction objects in body of request
		 * @return {BankTransactions} Success - return response of type BankTransactions array with new BankTransaction
		 */
		CreateBankTransactions(summarizeErrors: boolean, unitdp: number, requestBody: BankTransactions): Observable<BankTransactions> {
			return this.http.put<BankTransactions>(this.baseUri + 'BankTransactions?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update or create one or more spend or receive money transaction
		 * Post BankTransactions
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {BankTransactions} Success - return response of type BankTransactions array with new BankTransaction
		 */
		UpdateOrCreateBankTransactions(summarizeErrors: boolean, unitdp: number, requestBody: BankTransactions): Observable<BankTransactions> {
			return this.http.post<BankTransactions>(this.baseUri + 'BankTransactions?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a single spend or receive money transaction
		 * Get BankTransactions/{BankTransactionID}
		 * @param {string} BankTransactionID Xero generated unique identifier for a bank transaction
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {BankTransactions} Success - return response of type BankTransactions array with a specific BankTransaction
		 */
		GetBankTransaction(BankTransactionID: string, unitdp: number): Observable<BankTransactions> {
			return this.http.get<BankTransactions>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to update a single spend or receive money transaction
		 * Post BankTransactions/{BankTransactionID}
		 * @param {string} BankTransactionID Xero generated unique identifier for a bank transaction
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {BankTransactions} Success - return response of type BankTransactions array with updated BankTransaction
		 */
		UpdateBankTransaction(BankTransactionID: string, unitdp: number, requestBody: BankTransactions): Observable<BankTransactions> {
			return this.http.post<BankTransactions>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve any attachments to bank transactions
		 * Get BankTransactions/{BankTransactionID}/Attachments
		 * @param {string} BankTransactionID Xero generated unique identifier for a bank transaction
		 * @return {Attachments} Success - return response of type Attachments array with 0 to n Attachment
		 */
		GetBankTransactionAttachments(BankTransactionID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve Attachments on a specific BankTransaction
		 * Get BankTransactions/{BankTransactionID}/Attachments/{AttachmentID}
		 * @param {string} BankTransactionID Xero generated unique identifier for a bank transaction
		 * @param {string} AttachmentID Xero generated unique identifier for an attachment
		 * @return {void} Success - return response of attachment for BankTransaction as binary data
		 */
		GetBankTransactionAttachmentById(BankTransactionID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachments on BankTransaction by Filename
		 * Get BankTransactions/{BankTransactionID}/Attachments/{FileName}
		 * @param {string} BankTransactionID Xero generated unique identifier for a bank transaction
		 * @param {string} FileName The name of the file being attached
		 * @return {void} Success - return response of attachment for BankTransaction as binary data
		 */
		GetBankTransactionAttachmentByFileName(BankTransactionID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve history from a bank transactions
		 * Get BankTransactions/{BankTransactionID}/History
		 * @param {string} BankTransactionID Xero generated unique identifier for a bank transaction
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetBankTransactionsHistory(BankTransactionID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/History', {});
		}

		/**
		 * Allows you to create history record for a bank transactions
		 * Put BankTransactions/{BankTransactionID}/History
		 * @param {string} BankTransactionID Xero generated unique identifier for a bank transaction
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateBankTransactionHistoryRecord(BankTransactionID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve all bank transfers
		 * Get BankTransfers
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {BankTransfers} Success - return response of BankTransfers array of 0 to N BankTransfer
		 */
		GetBankTransfers(where: string, order: string): Observable<BankTransfers> {
			return this.http.get<BankTransfers>(this.baseUri + 'BankTransfers?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to create a bank transfers
		 * Put BankTransfers
		 * @param {BankTransfers} requestBody BankTransfers with array of BankTransfer objects in request body
		 * @return {BankTransfers} Success - return response of BankTransfers array of one BankTransfer
		 */
		CreateBankTransfer(requestBody: BankTransfers): Observable<BankTransfers> {
			return this.http.put<BankTransfers>(this.baseUri + 'BankTransfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve any bank transfers
		 * Get BankTransfers/{BankTransferID}
		 * @param {string} BankTransferID Xero generated unique identifier for a bank transfer
		 * @return {BankTransfers} Success - return response of BankTransfers array with one BankTransfer
		 */
		GetBankTransfer(BankTransferID: string): Observable<BankTransfers> {
			return this.http.get<BankTransfers>(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)), {});
		}

		/**
		 * Allows you to retrieve Attachments from  bank transfers
		 * Get BankTransfers/{BankTransferID}/Attachments
		 * @param {string} BankTransferID Xero generated unique identifier for a bank transfer
		 * @return {Attachments} Success - return response of Attachments array of 0 to N Attachment for a Bank Transfer
		 */
		GetBankTransferAttachments(BankTransferID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve Attachments on BankTransfer
		 * Get BankTransfers/{BankTransferID}/Attachments/{AttachmentID}
		 * @param {string} BankTransferID Xero generated unique identifier for a bank transfer
		 * @param {string} AttachmentID Xero generated unique identifier for an Attachment to a bank transfer
		 * @return {void} Success - return response of binary data from the Attachment to a Bank Transfer
		 */
		GetBankTransferAttachmentById(BankTransferID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachments on BankTransfer by file name
		 * Get BankTransfers/{BankTransferID}/Attachments/{FileName}
		 * @param {string} BankTransferID Xero generated unique identifier for a bank transfer
		 * @param {string} FileName The name of the file being attached to a Bank Transfer
		 * @return {void} Success - return response of binary data from the Attachment to a Bank Transfer
		 */
		GetBankTransferAttachmentByFileName(BankTransferID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve history from a bank transfers
		 * Get BankTransfers/{BankTransferID}/History
		 * @param {string} BankTransferID Xero generated unique identifier for a bank transfer
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetBankTransferHistory(BankTransferID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)) + '/History', {});
		}

		/**
		 * Put BankTransfers/{BankTransferID}/History
		 * @param {string} BankTransferID Xero generated unique identifier for a bank transfer
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateBankTransferHistoryRecord(BankTransferID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve all the BrandingThemes
		 * Get BrandingThemes
		 * @return {BrandingThemes} Success - return response of type BrandingThemes
		 */
		GetBrandingThemes(): Observable<BrandingThemes> {
			return this.http.get<BrandingThemes>(this.baseUri + 'BrandingThemes', {});
		}

		/**
		 * Allows you to retrieve a specific BrandingThemes
		 * Get BrandingThemes/{BrandingThemeID}
		 * @param {string} BrandingThemeID Unique identifier for a Branding Theme
		 * @return {BrandingThemes} Success - return response of type BrandingThemes with one BrandingTheme
		 */
		GetBrandingTheme(BrandingThemeID: string): Observable<BrandingThemes> {
			return this.http.get<BrandingThemes>(this.baseUri + 'BrandingThemes/' + (BrandingThemeID == null ? '' : encodeURIComponent(BrandingThemeID)), {});
		}

		/**
		 * Allows you to retrieve the Payment services for a Branding Theme
		 * Get BrandingThemes/{BrandingThemeID}/PaymentServices
		 * @param {string} BrandingThemeID Unique identifier for a Branding Theme
		 * @return {PaymentServices} Success - return response of type PaymentServices array with 0 to N PaymentService
		 */
		GetBrandingThemePaymentServices(BrandingThemeID: string): Observable<PaymentServices> {
			return this.http.get<PaymentServices>(this.baseUri + 'BrandingThemes/' + (BrandingThemeID == null ? '' : encodeURIComponent(BrandingThemeID)) + '/PaymentServices', {});
		}

		/**
		 * Allow for the creation of new custom payment service for specified Branding Theme
		 * Post BrandingThemes/{BrandingThemeID}/PaymentServices
		 * @param {string} BrandingThemeID Unique identifier for a Branding Theme
		 * @param {PaymentService} requestBody PaymentService object in body of request
		 * @return {PaymentServices} Success - return response of type PaymentServices array with newly created PaymentService
		 */
		CreateBrandingThemePaymentServices(BrandingThemeID: string, requestBody: PaymentService): Observable<PaymentServices> {
			return this.http.post<PaymentServices>(this.baseUri + 'BrandingThemes/' + (BrandingThemeID == null ? '' : encodeURIComponent(BrandingThemeID)) + '/PaymentServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve all contacts in a Xero organisation
		 * Get Contacts
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {Array<string>} IDs Filter by a comma separated list of ContactIDs. Allows you to retrieve a specific set of contacts in a single call.
		 * @param {number} page e.g. page=1 - Up to 100 contacts will be returned in a single API call.
		 * @param {boolean} includeArchived e.g. includeArchived=true - Contacts with a status of ARCHIVED will be included in the response
		 * @return {Contacts} Success - return response of type Contacts array with 0 to N Contact
		 */
		GetContacts(where: string, order: string, IDs: Array<string>, page: number, includeArchived: boolean): Observable<Contacts> {
			return this.http.get<Contacts>(this.baseUri + 'Contacts?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&' + IDs.map(z => `IDs=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&includeArchived=' + includeArchived, {});
		}

		/**
		 * Allows you to create a multiple contacts (bulk) in a Xero organisation
		 * Put Contacts
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Contacts} requestBody Contacts with an array of Contact objects to create in body of request
		 * @return {Contacts} Success - return response of type Contacts array with newly created Contact
		 */
		CreateContacts(summarizeErrors: boolean, requestBody: Contacts): Observable<Contacts> {
			return this.http.put<Contacts>(this.baseUri + 'Contacts?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update OR create one or more contacts in a Xero organisation
		 * Post Contacts
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @return {Contacts} Success - return response of type Contacts array with newly created Contact
		 */
		UpdateOrCreateContacts(summarizeErrors: boolean, requestBody: Contacts): Observable<Contacts> {
			return this.http.post<Contacts>(this.baseUri + 'Contacts?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a single contact by Contact Number in a Xero organisation
		 * Get Contacts/{ContactNumber}
		 * @param {string} ContactNumber This field is read only on the Xero contact screen, used to identify contacts in external systems (max length = 50).
		 * @return {Contacts} Success - return response of type Contacts array with a unique Contact
		 */
		GetContactByContactNumber(ContactNumber: string): Observable<Contacts> {
			return this.http.get<Contacts>(this.baseUri + 'Contacts/' + (ContactNumber == null ? '' : encodeURIComponent(ContactNumber)), {});
		}

		/**
		 * Allows you to retrieve a single contacts in a Xero organisation
		 * Get Contacts/{ContactID}
		 * @param {string} ContactID Unique identifier for a Contact
		 * @return {Contacts} Success - return response of type Contacts array with a unique Contact
		 */
		GetContact(ContactID: string): Observable<Contacts> {
			return this.http.get<Contacts>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)), {});
		}

		/**
		 * Post Contacts/{ContactID}
		 * @param {string} ContactID Unique identifier for a Contact
		 * @param {Contacts} requestBody an array of Contacts containing single Contact object with properties to update
		 * @return {Contacts} Success - return response of type Contacts array with an updated Contact
		 */
		UpdateContact(ContactID: string, requestBody: Contacts): Observable<Contacts> {
			return this.http.post<Contacts>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve, add and update contacts in a Xero organisation
		 * Get Contacts/{ContactID}/Attachments
		 * @param {string} ContactID Unique identifier for a Contact
		 * @return {Attachments} Success - return response of type Attachments array with 0 to N Attachment
		 */
		GetContactAttachments(ContactID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve Attachments on Contacts
		 * Get Contacts/{ContactID}/Attachments/{AttachmentID}
		 * @param {string} ContactID Unique identifier for a Contact
		 * @param {string} AttachmentID Unique identifier for a Attachment
		 * @return {void} Success - return response of attachment for Contact as binary data
		 */
		GetContactAttachmentById(ContactID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachments on Contacts by file name
		 * Get Contacts/{ContactID}/Attachments/{FileName}
		 * @param {string} ContactID Unique identifier for a Contact
		 * @param {string} FileName Name for the file you are attaching
		 * @return {void} Success - return response of attachment for Contact as binary data
		 */
		GetContactAttachmentByFileName(ContactID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve CISSettings for a contact in a Xero organisation
		 * Get Contacts/{ContactID}/CISSettings
		 * @param {string} ContactID Unique identifier for a Contact
		 * @return {CISSettings} Success - return response of type CISSettings for a specific Contact
		 */
		GetContactCISSettings(ContactID: string): Observable<CISSettings> {
			return this.http.get<CISSettings>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/CISSettings', {});
		}

		/**
		 * Allows you to retrieve a history records of an Contact
		 * Get Contacts/{ContactID}/History
		 * @param {string} ContactID Unique identifier for a Contact
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetContactHistory(ContactID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/History', {});
		}

		/**
		 * Allows you to retrieve a history records of an Contact
		 * Put Contacts/{ContactID}/History
		 * @param {string} ContactID Unique identifier for a Contact
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateContactHistory(ContactID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve the ContactID and Name of all the contacts in a contact group
		 * Get ContactGroups
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {ContactGroups} Success - return response of type Contact Groups array of Contact Group
		 */
		GetContactGroups(where: string, order: string): Observable<ContactGroups> {
			return this.http.get<ContactGroups>(this.baseUri + 'ContactGroups?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to create a contact group
		 * Put ContactGroups
		 * @param {ContactGroups} requestBody ContactGroups with an array of names in request body
		 * @return {ContactGroups} Success - return response of type Contact Groups array of newly created Contact Group
		 */
		CreateContactGroup(requestBody: ContactGroups): Observable<ContactGroups> {
			return this.http.put<ContactGroups>(this.baseUri + 'ContactGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a unique Contact Group by ID
		 * Get ContactGroups/{ContactGroupID}
		 * @param {string} ContactGroupID Unique identifier for a Contact Group
		 * @return {ContactGroups} Success - return response of type Contact Groups array with a specific Contact Group
		 */
		GetContactGroup(ContactGroupID: string): Observable<ContactGroups> {
			return this.http.get<ContactGroups>(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)), {});
		}

		/**
		 * Allows you to update a Contact Group
		 * Post ContactGroups/{ContactGroupID}
		 * @param {string} ContactGroupID Unique identifier for a Contact Group
		 * @param {ContactGroups} requestBody an array of Contact groups with Name of specific group to update
		 * @return {ContactGroups} Success - return response of type Contact Groups array of updated Contact Group
		 */
		UpdateContactGroup(ContactGroupID: string, requestBody: ContactGroups): Observable<ContactGroups> {
			return this.http.post<ContactGroups>(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to add Contacts to a Contact Group
		 * Put ContactGroups/{ContactGroupID}/Contacts
		 * @param {string} ContactGroupID Unique identifier for a Contact Group
		 * @param {Contacts} requestBody Contacts with array of contacts specifiying the ContactID to be added to ContactGroup in body of request
		 * @return {Contacts} Success - return response of type Contacts array of added Contacts
		 */
		CreateContactGroupContacts(ContactGroupID: string, requestBody: Contacts): Observable<Contacts> {
			return this.http.put<Contacts>(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)) + '/Contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to delete  all Contacts from a Contact Group
		 * Delete ContactGroups/{ContactGroupID}/Contacts
		 * @param {string} ContactGroupID Unique identifier for a Contact Group
		 * @return {void} 
		 */
		DeleteContactGroupContacts(ContactGroupID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)) + '/Contacts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to delete a specific Contact from a Contact Group
		 * Delete ContactGroups/{ContactGroupID}/Contacts/{ContactID}
		 * @param {string} ContactGroupID Unique identifier for a Contact Group
		 * @param {string} ContactID Unique identifier for a Contact
		 * @return {void} 
		 */
		DeleteContactGroupContact(ContactGroupID: string, ContactID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)) + '/Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve any credit notes
		 * Get CreditNotes
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 � Up to 100 credit notes will be returned in a single API call with line items shown for each credit note
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {CreditNotes} Success - return response of type Credit Notes array of CreditNote
		 */
		GetCreditNotes(where: string, order: string, page: number, unitdp: number): Observable<CreditNotes> {
			return this.http.get<CreditNotes>(this.baseUri + 'CreditNotes?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to create a credit note
		 * Put CreditNotes
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @param {CreditNotes} requestBody Credit Notes with array of CreditNote object in body of request
		 * @return {CreditNotes} Success - return response of type Credit Notes array of newly created CreditNote
		 */
		CreateCreditNotes(summarizeErrors: boolean, unitdp: number, requestBody: CreditNotes): Observable<CreditNotes> {
			return this.http.put<CreditNotes>(this.baseUri + 'CreditNotes?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update OR create one or more credit notes
		 * Post CreditNotes
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @param {CreditNotes} requestBody an array of Credit Notes with a single CreditNote object.
		 * @return {CreditNotes} Success - return response of type Credit Notes array of newly created CreditNote
		 */
		UpdateOrCreateCreditNotes(summarizeErrors: boolean, unitdp: number, requestBody: CreditNotes): Observable<CreditNotes> {
			return this.http.post<CreditNotes>(this.baseUri + 'CreditNotes?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specific credit note
		 * Get CreditNotes/{CreditNoteID}
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {CreditNotes} Success - return response of type Credit Notes array with a unique CreditNote
		 */
		GetCreditNote(CreditNoteID: string, unitdp: number): Observable<CreditNotes> {
			return this.http.get<CreditNotes>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to update a specific credit note
		 * Post CreditNotes/{CreditNoteID}
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @param {CreditNotes} requestBody an array of Credit Notes containing credit note details to update
		 * @return {CreditNotes} Success - return response of type Credit Notes array with updated CreditNote
		 */
		UpdateCreditNote(CreditNoteID: string, unitdp: number, requestBody: CreditNotes): Observable<CreditNotes> {
			return this.http.post<CreditNotes>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve Attachments for credit notes
		 * Get CreditNotes/{CreditNoteID}/Attachments
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @return {Attachments} Success - return response of type Attachments array with all Attachment for specific Credit Note
		 */
		GetCreditNoteAttachments(CreditNoteID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve Attachments on CreditNote
		 * Get CreditNotes/{CreditNoteID}/Attachments/{AttachmentID}
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @param {string} AttachmentID Unique identifier for a Attachment
		 * @return {void} Success - return response of attachment for Credit Note as binary data
		 */
		GetCreditNoteAttachmentById(CreditNoteID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachments on CreditNote by file name
		 * Get CreditNotes/{CreditNoteID}/Attachments/{FileName}
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @param {string} FileName Name of the file you are attaching to Credit Note
		 * @return {void} Success - return response of attachment for Credit Note as binary data
		 */
		GetCreditNoteAttachmentByFileName(CreditNoteID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Credit Note as PDF files
		 * Get CreditNotes/{CreditNoteID}/pdf
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @return {void} Success - return response of binary data from the Attachment to a Credit Note
		 */
		GetCreditNoteAsPdf(CreditNoteID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/pdf', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to create Allocation on CreditNote
		 * Put CreditNotes/{CreditNoteID}/Allocations
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Allocations} requestBody Allocations with array of Allocation object in body of request.
		 * @return {Allocations} Success - return response of type Allocations array with newly created Allocation for specific Credit Note
		 */
		CreateCreditNoteAllocation(CreditNoteID: string, summarizeErrors: boolean, requestBody: Allocations): Observable<Allocations> {
			return this.http.put<Allocations>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Allocations&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a history records of an CreditNote
		 * Get CreditNotes/{CreditNoteID}/History
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetCreditNoteHistory(CreditNoteID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/History', {});
		}

		/**
		 * Allows you to retrieve a history records of an CreditNote
		 * Put CreditNotes/{CreditNoteID}/History
		 * @param {string} CreditNoteID Unique identifier for a Credit Note
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateCreditNoteHistory(CreditNoteID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve currencies for your organisation
		 * Get Currencies
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {Currencies} Success - return response of type Currencies array with all Currencies
		 */
		GetCurrencies(where: string, order: string): Observable<Currencies> {
			return this.http.get<Currencies>(this.baseUri + 'Currencies?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Put Currencies
		 * @param {Currency} requestBody Currency obejct in the body of request
		 * @return {Currencies} Unsupported - return response incorrect exception, API is not able to create new Currency
		 */
		CreateCurrency(requestBody: Currency): Observable<Currencies> {
			return this.http.put<Currencies>(this.baseUri + 'Currencies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve employees used in Xero payrun
		 * Get Employees
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {Employees} Success - return response of type Employees array with all Employee
		 */
		GetEmployees(where: string, order: string): Observable<Employees> {
			return this.http.get<Employees>(this.baseUri + 'Employees?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to create new employees used in Xero payrun
		 * Put Employees
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Employees} requestBody Employees with array of Employee object in body of request
		 * @return {Employees} Success - return response of type Employees array with new Employee
		 */
		CreateEmployees(summarizeErrors: boolean, requestBody: Employees): Observable<Employees> {
			return this.http.put<Employees>(this.baseUri + 'Employees?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to create a single new employees used in Xero payrun
		 * Post Employees
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Employees} requestBody Employees with array of Employee object in body of request
		 * @return {Employees} Success - return response of type Employees array with new Employee
		 */
		UpdateOrCreateEmployees(summarizeErrors: boolean, requestBody: Employees): Observable<Employees> {
			return this.http.post<Employees>(this.baseUri + 'Employees?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specific employee used in Xero payrun
		 * Get Employees/{EmployeeID}
		 * @param {string} EmployeeID Unique identifier for a Employee
		 * @return {Employees} Success - return response of type Employees array with specified Employee
		 */
		GetEmployee(EmployeeID: string): Observable<Employees> {
			return this.http.get<Employees>(this.baseUri + 'Employees/' + (EmployeeID == null ? '' : encodeURIComponent(EmployeeID)), {});
		}

		/**
		 * Allows you to retrieve expense claims
		 * Get ExpenseClaims
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {ExpenseClaims} Success - return response of type ExpenseClaims array with all ExpenseClaims
		 */
		GetExpenseClaims(where: string, order: string): Observable<ExpenseClaims> {
			return this.http.get<ExpenseClaims>(this.baseUri + 'ExpenseClaims?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to retrieve expense claims
		 * Put ExpenseClaims
		 * @param {ExpenseClaims} requestBody ExpenseClaims with array of ExpenseClaim object in body of request
		 * @return {ExpenseClaims} Success - return response of type ExpenseClaims array with newly created ExpenseClaim
		 */
		CreateExpenseClaims(requestBody: ExpenseClaims): Observable<ExpenseClaims> {
			return this.http.put<ExpenseClaims>(this.baseUri + 'ExpenseClaims', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified expense claim
		 * Get ExpenseClaims/{ExpenseClaimID}
		 * @param {string} ExpenseClaimID Unique identifier for a ExpenseClaim
		 * @return {ExpenseClaims} Success - return response of type ExpenseClaims array with specified ExpenseClaim
		 */
		GetExpenseClaim(ExpenseClaimID: string): Observable<ExpenseClaims> {
			return this.http.get<ExpenseClaims>(this.baseUri + 'ExpenseClaims/' + (ExpenseClaimID == null ? '' : encodeURIComponent(ExpenseClaimID)), {});
		}

		/**
		 * Allows you to update specified expense claims
		 * Post ExpenseClaims/{ExpenseClaimID}
		 * @param {string} ExpenseClaimID Unique identifier for a ExpenseClaim
		 * @return {ExpenseClaims} Success - return response of type ExpenseClaims array with updated ExpenseClaim
		 */
		UpdateExpenseClaim(ExpenseClaimID: string, requestBody: ExpenseClaims): Observable<ExpenseClaims> {
			return this.http.post<ExpenseClaims>(this.baseUri + 'ExpenseClaims/' + (ExpenseClaimID == null ? '' : encodeURIComponent(ExpenseClaimID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a history records of an ExpenseClaim
		 * Get ExpenseClaims/{ExpenseClaimID}/History
		 * @param {string} ExpenseClaimID Unique identifier for a ExpenseClaim
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetExpenseClaimHistory(ExpenseClaimID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'ExpenseClaims/' + (ExpenseClaimID == null ? '' : encodeURIComponent(ExpenseClaimID)) + '/History', {});
		}

		/**
		 * Allows you to create a history records of an ExpenseClaim
		 * Put ExpenseClaims/{ExpenseClaimID}/History
		 * @param {string} ExpenseClaimID Unique identifier for a ExpenseClaim
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateExpenseClaimHistory(ExpenseClaimID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'ExpenseClaims/' + (ExpenseClaimID == null ? '' : encodeURIComponent(ExpenseClaimID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve any sales invoices or purchase bills
		 * Get Invoices
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {Array<string>} IDs Filter by a comma-separated list of InvoicesIDs.
		 * @param {Array<string>} InvoiceNumbers Filter by a comma-separated list of InvoiceNumbers.
		 * @param {Array<string>} ContactIDs Filter by a comma-separated list of ContactIDs.
		 * @param {Array<string>} Statuses Filter by a comma-separated list Statuses. For faster response times we recommend using these explicit parameters instead of passing OR conditions into the Where filter.
		 * @param {number} page e.g. page=1 � Up to 100 invoices will be returned in a single API call with line items shown for each invoice
		 * @param {boolean} includeArchived e.g. includeArchived=true - Contacts with a status of ARCHIVED will be included in the response
		 * @param {boolean} createdByMyApp When set to true you'll only retrieve Invoices created by your app
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Invoices} Success - return response of type Invoices array with all Invoices
		 */
		GetInvoices(where: string, order: string, IDs: Array<string>, InvoiceNumbers: Array<string>, ContactIDs: Array<string>, Statuses: Array<string>, page: number, includeArchived: boolean, createdByMyApp: boolean, unitdp: number): Observable<Invoices> {
			return this.http.get<Invoices>(this.baseUri + 'Invoices?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&' + IDs.map(z => `IDs=${encodeURIComponent(z)}`).join('&') + '&' + InvoiceNumbers.map(z => `InvoiceNumbers=${encodeURIComponent(z)}`).join('&') + '&' + ContactIDs.map(z => `ContactIDs=${encodeURIComponent(z)}`).join('&') + '&' + Statuses.map(z => `Statuses=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&includeArchived=' + includeArchived + '&createdByMyApp=' + createdByMyApp + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to create one or more sales invoices or purchase bills
		 * Put Invoices
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @param {Invoices} requestBody Invoices with an array of invoice objects in body of request
		 * @return {Invoices} Success - return response of type Invoices array with newly created Invoice
		 */
		CreateInvoices(summarizeErrors: boolean, unitdp: number, requestBody: Invoices): Observable<Invoices> {
			return this.http.put<Invoices>(this.baseUri + 'Invoices?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update OR create one or more sales invoices or purchase bills
		 * Post Invoices
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Invoices} Success - return response of type Invoices array with newly created Invoice
		 */
		UpdateOrCreateInvoices(summarizeErrors: boolean, unitdp: number, requestBody: Invoices): Observable<Invoices> {
			return this.http.post<Invoices>(this.baseUri + 'Invoices?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified sales invoice or purchase bill
		 * Get Invoices/{InvoiceID}
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Invoices} Success - return response of type Invoices array with specified Invoices
		 */
		GetInvoice(InvoiceID: string, unitdp: number): Observable<Invoices> {
			return this.http.get<Invoices>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to update a specified sales invoices or purchase bills
		 * Post Invoices/{InvoiceID}
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Invoices} Success - return response of type Invoices array with updated Invoice
		 */
		UpdateInvoice(InvoiceID: string, unitdp: number, requestBody: Invoices): Observable<Invoices> {
			return this.http.post<Invoices>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve invoices or purchase bills as PDF files
		 * Get Invoices/{InvoiceID}/pdf
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @return {void} Success - return response of byte array pdf version of specified Invoices
		 */
		GetInvoiceAsPdf(InvoiceID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/pdf', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachments on invoices or purchase bills
		 * Get Invoices/{InvoiceID}/Attachments
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @return {Attachments} Success - return response of type Attachments array of Attachments for specified Invoices
		 */
		GetInvoiceAttachments(InvoiceID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve a specified Attachment on invoices or purchase bills by it's ID
		 * Get Invoices/{InvoiceID}/Attachments/{AttachmentID}
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @param {string} AttachmentID Unique identifier for an Attachment
		 * @return {void} Success - return response of attachment for Invoice as binary data
		 */
		GetInvoiceAttachmentById(InvoiceID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachment on invoices or purchase bills by it's filename
		 * Get Invoices/{InvoiceID}/Attachments/{FileName}
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @param {string} FileName Name of the file you are attaching
		 * @return {void} Success - return response of attachment for Invoice as binary data
		 */
		GetInvoiceAttachmentByFileName(InvoiceID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve a URL to an online invoice
		 * Get Invoices/{InvoiceID}/OnlineInvoice
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @return {OnlineInvoices} Success - return response of type OnlineInvoice array with one OnlineInvoice
		 */
		GetOnlineInvoice(InvoiceID: string): Observable<OnlineInvoices> {
			return this.http.get<OnlineInvoices>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/OnlineInvoice', {});
		}

		/**
		 * Allows you to email a copy of invoice to related Contact
		 * Post Invoices/{InvoiceID}/Email
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @return {void} 
		 */
		EmailInvoice(InvoiceID: string, requestBody: RequestEmpty): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/Email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve a history records of an invoice
		 * Get Invoices/{InvoiceID}/History
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetInvoiceHistory(InvoiceID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/History', {});
		}

		/**
		 * Allows you to retrieve a history records of an invoice
		 * Put Invoices/{InvoiceID}/History
		 * @param {string} InvoiceID Unique identifier for an Invoice
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateInvoiceHistory(InvoiceID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve invoice reminder settings
		 * Get InvoiceReminders/Settings
		 * @return {InvoiceReminders} Success - return response of Invoice Reminders
		 */
		GetInvoiceReminders(): Observable<InvoiceReminders> {
			return this.http.get<InvoiceReminders>(this.baseUri + 'InvoiceReminders/Settings', {});
		}

		/**
		 * Allows you to retrieve any items
		 * Get Items
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Items} Success - return response of type Items array with all Item
		 */
		GetItems(where: string, order: string, unitdp: number): Observable<Items> {
			return this.http.get<Items>(this.baseUri + 'Items?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to create one or more items
		 * Put Items
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @param {Items} requestBody Items with an array of Item objects in body of request
		 * @return {Items} Success - return response of type Items array with newly created Item
		 */
		CreateItems(summarizeErrors: boolean, unitdp: number, requestBody: Items): Observable<Items> {
			return this.http.put<Items>(this.baseUri + 'Items?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update or create one or more items
		 * Post Items
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Items} Success - return response of type Items array with newly created Item
		 */
		UpdateOrCreateItems(summarizeErrors: boolean, unitdp: number, requestBody: Items): Observable<Items> {
			return this.http.post<Items>(this.baseUri + 'Items?summarizeErrors=' + summarizeErrors + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified item
		 * Get Items/{ItemID}
		 * @param {string} ItemID Unique identifier for an Item
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Items} Success - return response of type Items array with specified Item
		 */
		GetItem(ItemID: string, unitdp: number): Observable<Items> {
			return this.http.get<Items>(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)) + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to update a specified item
		 * Post Items/{ItemID}
		 * @param {string} ItemID Unique identifier for an Item
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Items} Success - return response of type Items array with updated Item
		 */
		UpdateItem(ItemID: string, unitdp: number, requestBody: Items): Observable<Items> {
			return this.http.post<Items>(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to delete a specified item
		 * Delete Items/{ItemID}
		 * @param {string} ItemID Unique identifier for an Item
		 * @return {void} 
		 */
		DeleteItem(ItemID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve history for items
		 * Get Items/{ItemID}/History
		 * @param {string} ItemID Unique identifier for an Item
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetItemHistory(ItemID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)) + '/History', {});
		}

		/**
		 * Allows you to create a history record for items
		 * Put Items/{ItemID}/History
		 * @param {string} ItemID Unique identifier for an Item
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateItemHistory(ItemID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve any journals.
		 * Get Journals
		 * @param {number} offset Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned
		 * @param {boolean} paymentsOnly Filter to retrieve journals on a cash basis. Journals are returned on an accrual basis by default.
		 * @return {Journals} Success - return response of type Journals array with all Journals
		 */
		GetJournals(offset: number, paymentsOnly: boolean): Observable<Journals> {
			return this.http.get<Journals>(this.baseUri + 'Journals?offset=' + offset + '&paymentsOnly=' + paymentsOnly, {});
		}

		/**
		 * Allows you to retrieve a specified journals.
		 * Get Journals/{JournalID}
		 * @param {string} JournalID Unique identifier for a Journal
		 * @return {Journals} Success - return response of type Journals array with specified Journal
		 */
		GetJournal(JournalID: string): Observable<Journals> {
			return this.http.get<Journals>(this.baseUri + 'Journals/' + (JournalID == null ? '' : encodeURIComponent(JournalID)), {});
		}

		/**
		 * Retrieve linked transactions (billable expenses)
		 * Get LinkedTransactions
		 * @param {number} page Up to 100 linked transactions will be returned in a single API call. Use the page parameter to specify the page to be returned e.g. page=1.
		 * @param {string} LinkedTransactionID The Xero identifier for an Linked Transaction
		 * @param {string} SourceTransactionID Filter by the SourceTransactionID. Get the linked transactions created from a particular ACCPAY invoice
		 * @param {string} ContactID Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.
		 * @param {string} Status Filter by the combination of ContactID and Status. Get  the linked transactions associaed to a  customer and with a status
		 * @param {string} TargetTransactionID Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice
		 * @return {LinkedTransactions} Success - return response of type LinkedTransactions array with all LinkedTransaction
		 */
		GetLinkedTransactions(page: number, LinkedTransactionID: string, SourceTransactionID: string, ContactID: string, Status: string, TargetTransactionID: string): Observable<LinkedTransactions> {
			return this.http.get<LinkedTransactions>(this.baseUri + 'LinkedTransactions?page=' + page + '&LinkedTransactionID=' + (LinkedTransactionID == null ? '' : encodeURIComponent(LinkedTransactionID)) + '&SourceTransactionID=' + (SourceTransactionID == null ? '' : encodeURIComponent(SourceTransactionID)) + '&ContactID=' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&TargetTransactionID=' + (TargetTransactionID == null ? '' : encodeURIComponent(TargetTransactionID)), {});
		}

		/**
		 * Allows you to create linked transactions (billable expenses)
		 * Put LinkedTransactions
		 * @param {LinkedTransaction} requestBody LinkedTransaction object in body of request
		 * @return {LinkedTransactions} Success - return response of type LinkedTransactions array with newly created LinkedTransaction
		 */
		CreateLinkedTransaction(requestBody: LinkedTransaction): Observable<LinkedTransactions> {
			return this.http.put<LinkedTransactions>(this.baseUri + 'LinkedTransactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified linked transactions (billable expenses)
		 * Get LinkedTransactions/{LinkedTransactionID}
		 * @param {string} LinkedTransactionID Unique identifier for a LinkedTransaction
		 * @return {LinkedTransactions} Success - return response of type LinkedTransactions array with a specified LinkedTransaction
		 */
		GetLinkedTransaction(LinkedTransactionID: string): Observable<LinkedTransactions> {
			return this.http.get<LinkedTransactions>(this.baseUri + 'LinkedTransactions/' + (LinkedTransactionID == null ? '' : encodeURIComponent(LinkedTransactionID)), {});
		}

		/**
		 * Allows you to update a specified linked transactions (billable expenses)
		 * Post LinkedTransactions/{LinkedTransactionID}
		 * @param {string} LinkedTransactionID Unique identifier for a LinkedTransaction
		 * @return {LinkedTransactions} Success - return response of type LinkedTransactions array with updated LinkedTransaction
		 */
		UpdateLinkedTransaction(LinkedTransactionID: string, requestBody: LinkedTransactions): Observable<LinkedTransactions> {
			return this.http.post<LinkedTransactions>(this.baseUri + 'LinkedTransactions/' + (LinkedTransactionID == null ? '' : encodeURIComponent(LinkedTransactionID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to delete a specified linked transactions (billable expenses)
		 * Delete LinkedTransactions/{LinkedTransactionID}
		 * @param {string} LinkedTransactionID Unique identifier for a LinkedTransaction
		 * @return {void} 
		 */
		DeleteLinkedTransaction(LinkedTransactionID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'LinkedTransactions/' + (LinkedTransactionID == null ? '' : encodeURIComponent(LinkedTransactionID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve any manual journals
		 * Get ManualJournals
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 � Up to 100 manual journals will be returned in a single API call with line items shown for each overpayment
		 * @return {ManualJournals} Success - return response of type ManualJournals array with a all ManualJournals
		 */
		GetManualJournals(where: string, order: string, page: number): Observable<ManualJournals> {
			return this.http.get<ManualJournals>(this.baseUri + 'ManualJournals?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Allows you to create one or more manual journals
		 * Put ManualJournals
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {ManualJournals} requestBody ManualJournals array with ManualJournal object in body of request
		 * @return {ManualJournals} Success - return response of type ManualJournals array with newly created ManualJournal
		 */
		CreateManualJournals(summarizeErrors: boolean, requestBody: ManualJournals): Observable<ManualJournals> {
			return this.http.put<ManualJournals>(this.baseUri + 'ManualJournals?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to create a single manual journal
		 * Post ManualJournals
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {ManualJournals} requestBody ManualJournals array with ManualJournal object in body of request
		 * @return {ManualJournals} Success - return response of type ManualJournals array with newly created ManualJournal
		 */
		UpdateOrCreateManualJournals(summarizeErrors: boolean, requestBody: ManualJournals): Observable<ManualJournals> {
			return this.http.post<ManualJournals>(this.baseUri + 'ManualJournals?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified manual journals
		 * Get ManualJournals/{ManualJournalID}
		 * @param {string} ManualJournalID Unique identifier for a ManualJournal
		 * @return {ManualJournals} Success - return response of type ManualJournals array with a specified ManualJournals
		 */
		GetManualJournal(ManualJournalID: string): Observable<ManualJournals> {
			return this.http.get<ManualJournals>(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)), {});
		}

		/**
		 * Allows you to update a specified manual journal
		 * Post ManualJournals/{ManualJournalID}
		 * @param {string} ManualJournalID Unique identifier for a ManualJournal
		 * @return {ManualJournals} Success - return response of type ManualJournals array with an updated ManualJournal
		 */
		UpdateManualJournal(ManualJournalID: string, requestBody: ManualJournals): Observable<ManualJournals> {
			return this.http.post<ManualJournals>(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve Attachment for manual journals
		 * Get ManualJournals/{ManualJournalID}/Attachments
		 * @param {string} ManualJournalID Unique identifier for a ManualJournal
		 * @return {Attachments} Success - return response of type Attachments array with all Attachments for a ManualJournals
		 */
		GetManualJournalAttachments(ManualJournalID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve specified Attachment on ManualJournals
		 * Get ManualJournals/{ManualJournalID}/Attachments/{AttachmentID}
		 * @param {string} ManualJournalID Unique identifier for a ManualJournal
		 * @param {string} AttachmentID Unique identifier for a Attachment
		 * @return {void} Success - return response of attachment for Manual Journal as binary data
		 */
		GetManualJournalAttachmentById(ManualJournalID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve specified Attachment on ManualJournal by file name
		 * Get ManualJournals/{ManualJournalID}/Attachments/{FileName}
		 * @param {string} ManualJournalID Unique identifier for a ManualJournal
		 * @param {string} FileName The name of the file being attached to a ManualJournal
		 * @return {void} Success - return response of attachment for Manual Journal as binary data
		 */
		GetManualJournalAttachmentByFileName(ManualJournalID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Organisation details
		 * Get Organisation
		 * @return {Organisations} Success - return response of type Organisation array with all Organisation
		 */
		GetOrganisations(): Observable<Organisations> {
			return this.http.get<Organisations>(this.baseUri + 'Organisation', {});
		}

		/**
		 * Allows you To verify if an organisation is using contruction industry scheme, you can retrieve the CIS settings for the organistaion.
		 * Get Organisation/{OrganisationID}/CISSettings
		 * @param {string} OrganisationID The unique Xero identifier for an organisation
		 * @return {CISOrgSetting} Success - return response of type Organisation array with specified Organisation
		 */
		GetOrganisationCISSettings(OrganisationID: string): Observable<CISOrgSetting> {
			return this.http.get<CISOrgSetting>(this.baseUri + 'Organisation/' + (OrganisationID == null ? '' : encodeURIComponent(OrganisationID)) + '/CISSettings', {});
		}

		/**
		 * Allows you to retrieve overpayments
		 * Get Overpayments
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 � Up to 100 overpayments will be returned in a single API call with line items shown for each overpayment
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Overpayments} Success - return response of type Overpayments array with all Overpayments
		 */
		GetOverpayments(where: string, order: string, page: number, unitdp: number): Observable<Overpayments> {
			return this.http.get<Overpayments>(this.baseUri + 'Overpayments?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to retrieve a specified overpayments
		 * Get Overpayments/{OverpaymentID}
		 * @param {string} OverpaymentID Unique identifier for a Overpayment
		 * @return {Overpayments} Success - return response of type Overpayments array with specified Overpayments
		 */
		GetOverpayment(OverpaymentID: string): Observable<Overpayments> {
			return this.http.get<Overpayments>(this.baseUri + 'Overpayments/' + (OverpaymentID == null ? '' : encodeURIComponent(OverpaymentID)), {});
		}

		/**
		 * Allows you to create a single allocation for an overpayment
		 * Put Overpayments/{OverpaymentID}/Allocations
		 * @param {string} OverpaymentID Unique identifier for a Overpayment
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Allocations} requestBody Allocations array with Allocation object in body of request
		 * @return {Allocations} Success - return response of type Allocations array with all Allocation for Overpayments
		 */
		CreateOverpaymentAllocations(OverpaymentID: string, summarizeErrors: boolean, requestBody: Allocations): Observable<Allocations> {
			return this.http.put<Allocations>(this.baseUri + 'Overpayments/' + (OverpaymentID == null ? '' : encodeURIComponent(OverpaymentID)) + '/Allocations&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a history records of an Overpayment
		 * Get Overpayments/{OverpaymentID}/History
		 * @param {string} OverpaymentID Unique identifier for a Overpayment
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetOverpaymentHistory(OverpaymentID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Overpayments/' + (OverpaymentID == null ? '' : encodeURIComponent(OverpaymentID)) + '/History', {});
		}

		/**
		 * Allows you to create history records of an Overpayment
		 * Put Overpayments/{OverpaymentID}/History
		 * @param {string} OverpaymentID Unique identifier for a Overpayment
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateOverpaymentHistory(OverpaymentID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Overpayments/' + (OverpaymentID == null ? '' : encodeURIComponent(OverpaymentID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve payments for invoices and credit notes
		 * Get Payments
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page Up to 100 payments will be returned in a single API call
		 * @return {Payments} Success - return response of type Payments array for all Payments
		 */
		GetPayments(where: string, order: string, page: number): Observable<Payments> {
			return this.http.get<Payments>(this.baseUri + 'Payments?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Allows you to create multiple payments for invoices or credit notes
		 * Put Payments
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Payments} requestBody Payments array with Payment object in body of request
		 * @return {Payments} Success - return response of type Payments array for newly created Payment
		 */
		CreatePayments(summarizeErrors: boolean, requestBody: Payments): Observable<Payments> {
			return this.http.put<Payments>(this.baseUri + 'Payments?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to create a single payment for invoices or credit notes
		 * Post Payments
		 * @param {Payment} requestBody Request body with a single Payment object
		 * @return {Payments} Success - return response of type Payments array for newly created Payment
		 */
		CreatePayment(requestBody: Payment): Observable<Payments> {
			return this.http.post<Payments>(this.baseUri + 'Payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified payment for invoices and credit notes
		 * Get Payments/{PaymentID}
		 * @param {string} PaymentID Unique identifier for a Payment
		 * @return {Payments} Success - return response of type Payments array for specified Payment
		 */
		GetPayment(PaymentID: string): Observable<Payments> {
			return this.http.get<Payments>(this.baseUri + 'Payments/' + (PaymentID == null ? '' : encodeURIComponent(PaymentID)), {});
		}

		/**
		 * Allows you to update a specified payment for invoices and credit notes
		 * Post Payments/{PaymentID}
		 * @param {string} PaymentID Unique identifier for a Payment
		 * @return {Payments} Success - return response of type Payments array for updated Payment
		 */
		DeletePayment(PaymentID: string, requestBody: PaymentDelete): Observable<Payments> {
			return this.http.post<Payments>(this.baseUri + 'Payments/' + (PaymentID == null ? '' : encodeURIComponent(PaymentID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve history records of a payment
		 * Get Payments/{PaymentID}/History
		 * @param {string} PaymentID Unique identifier for a Payment
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetPaymentHistory(PaymentID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Payments/' + (PaymentID == null ? '' : encodeURIComponent(PaymentID)) + '/History', {});
		}

		/**
		 * Allows you to create a history record for a payment
		 * Put Payments/{PaymentID}/History
		 * @param {string} PaymentID Unique identifier for a Payment
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreatePaymentHistory(PaymentID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Payments/' + (PaymentID == null ? '' : encodeURIComponent(PaymentID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve payment services
		 * Get PaymentServices
		 * @return {PaymentServices} Success - return response of type PaymentServices array for all PaymentService
		 */
		GetPaymentServices(): Observable<PaymentServices> {
			return this.http.get<PaymentServices>(this.baseUri + 'PaymentServices', {});
		}

		/**
		 * Allows you to create payment services
		 * Put PaymentServices
		 * @param {PaymentServices} requestBody PaymentServices array with PaymentService object in body of request
		 * @return {PaymentServices} Success - return response of type PaymentServices array for newly created PaymentService
		 */
		CreatePaymentService(requestBody: PaymentServices): Observable<PaymentServices> {
			return this.http.put<PaymentServices>(this.baseUri + 'PaymentServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve prepayments
		 * Get Prepayments
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} page e.g. page=1 � Up to 100 prepayments will be returned in a single API call with line items shown for each overpayment
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Prepayments} Success - return response of type Prepayments array for all Prepayment
		 */
		GetPrepayments(where: string, order: string, page: number, unitdp: number): Observable<Prepayments> {
			return this.http.get<Prepayments>(this.baseUri + 'Prepayments?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to retrieve a specified prepayments
		 * Get Prepayments/{PrepaymentID}
		 * @param {string} PrepaymentID Unique identifier for a PrePayment
		 * @return {Prepayments} Success - return response of type Prepayments array for a specified Prepayment
		 */
		GetPrepayment(PrepaymentID: string): Observable<Prepayments> {
			return this.http.get<Prepayments>(this.baseUri + 'Prepayments/' + (PrepaymentID == null ? '' : encodeURIComponent(PrepaymentID)), {});
		}

		/**
		 * Allows you to create an Allocation for prepayments
		 * Put Prepayments/{PrepaymentID}/Allocations
		 * @param {string} PrepaymentID Unique identifier for Prepayment
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Allocations} requestBody Allocations with an array of Allocation object in body of request
		 * @return {Allocations} Success - return response of type Allocations array of Allocation for all Prepayment
		 */
		CreatePrepaymentAllocations(PrepaymentID: string, summarizeErrors: boolean, requestBody: Allocations): Observable<Allocations> {
			return this.http.put<Allocations>(this.baseUri + 'Prepayments/' + (PrepaymentID == null ? '' : encodeURIComponent(PrepaymentID)) + '/Allocations&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a history records of an Prepayment
		 * Get Prepayments/{PrepaymentID}/History
		 * @param {string} PrepaymentID Unique identifier for a PrePayment
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetPrepaymentHistory(PrepaymentID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Prepayments/' + (PrepaymentID == null ? '' : encodeURIComponent(PrepaymentID)) + '/History', {});
		}

		/**
		 * Allows you to create a history record for an Prepayment
		 * Put Prepayments/{PrepaymentID}/History
		 * @param {string} PrepaymentID Unique identifier for a PrePayment
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreatePrepaymentHistory(PrepaymentID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Prepayments/' + (PrepaymentID == null ? '' : encodeURIComponent(PrepaymentID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve purchase orders
		 * Get PurchaseOrders
		 * @param {PurchaseOrderStatus} Status Filter by purchase order status
		 * @param {string} DateFrom Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31
		 * @param {string} DateTo Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31
		 * @param {string} order Order by an any element
		 * @param {number} page To specify a page, append the page parameter to the URL e.g. ?page=1. If there are 100 records in the response you will need to check if there is any more data by fetching the next page e.g ?page=2 and continuing this process until no more results are returned.
		 * @return {PurchaseOrders} Success - return response of type PurchaseOrder array of all PurchaseOrder
		 */
		GetPurchaseOrders(Status: PurchaseOrderStatus, DateFrom: string, DateTo: string, order: string, page: number): Observable<PurchaseOrders> {
			return this.http.get<PurchaseOrders>(this.baseUri + 'PurchaseOrders?Status=' + Status + '&DateFrom=' + (DateFrom == null ? '' : encodeURIComponent(DateFrom)) + '&DateTo=' + (DateTo == null ? '' : encodeURIComponent(DateTo)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, {});
		}

		/**
		 * Allows you to create one or more purchase orders
		 * Put PurchaseOrders
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {PurchaseOrders} requestBody PurchaseOrders with an array of PurchaseOrder object in body of request
		 * @return {PurchaseOrders} Success - return response of type PurchaseOrder array for specified PurchaseOrder
		 */
		CreatePurchaseOrders(summarizeErrors: boolean, requestBody: PurchaseOrders): Observable<PurchaseOrders> {
			return this.http.put<PurchaseOrders>(this.baseUri + 'PurchaseOrders?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update or create one or more purchase orders
		 * Post PurchaseOrders
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @return {PurchaseOrders} Success - return response of type PurchaseOrder array for specified PurchaseOrder
		 */
		UpdateOrCreatePurchaseOrders(summarizeErrors: boolean, requestBody: PurchaseOrders): Observable<PurchaseOrders> {
			return this.http.post<PurchaseOrders>(this.baseUri + 'PurchaseOrders?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve purchase orders as PDF files
		 * Get PurchaseOrders/{PurchaseOrderID}/pdf
		 * @param {string} PurchaseOrderID Unique identifier for an Purchase Order
		 * @return {void} Success - return response of byte array pdf version of specified Purchase Orders
		 */
		GetPurchaseOrderAsPdf(PurchaseOrderID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)) + '/pdf', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve a specified purchase orders
		 * Get PurchaseOrders/{PurchaseOrderID}
		 * @param {string} PurchaseOrderID Unique identifier for a PurchaseOrder
		 * @return {PurchaseOrders} Success - return response of type PurchaseOrder array for specified PurchaseOrder
		 */
		GetPurchaseOrder(PurchaseOrderID: string): Observable<PurchaseOrders> {
			return this.http.get<PurchaseOrders>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)), {});
		}

		/**
		 * Allows you to update a specified purchase order
		 * Post PurchaseOrders/{PurchaseOrderID}
		 * @param {string} PurchaseOrderID Unique identifier for a PurchaseOrder
		 * @return {PurchaseOrders} Success - return response of type PurchaseOrder array for updated PurchaseOrder
		 */
		UpdatePurchaseOrder(PurchaseOrderID: string, requestBody: PurchaseOrders): Observable<PurchaseOrders> {
			return this.http.post<PurchaseOrders>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified purchase orders
		 * Get PurchaseOrders/{PurchaseOrderNumber}
		 * @param {string} PurchaseOrderNumber Unique identifier for a PurchaseOrder
		 * @return {PurchaseOrders} Success - return response of type PurchaseOrder array for specified PurchaseOrder
		 */
		GetPurchaseOrderByNumber(PurchaseOrderNumber: string): Observable<PurchaseOrders> {
			return this.http.get<PurchaseOrders>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderNumber == null ? '' : encodeURIComponent(PurchaseOrderNumber)), {});
		}

		/**
		 * Allows you to retrieve history for PurchaseOrder
		 * Get PurchaseOrders/{PurchaseOrderID}/History
		 * @param {string} PurchaseOrderID Unique identifier for a PurchaseOrder
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetPurchaseOrderHistory(PurchaseOrderID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)) + '/History', {});
		}

		/**
		 * Allows you to create HistoryRecord for purchase orders
		 * Put PurchaseOrders/{PurchaseOrderID}/History
		 * @param {string} PurchaseOrderID Unique identifier for a PurchaseOrder
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreatePurchaseOrderHistory(PurchaseOrderID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve any sales quotes
		 * Get Quotes
		 * @param {Date} DateFrom Filter for quotes after a particular date
		 * @param {Date} DateTo Filter for quotes before a particular date
		 * @param {Date} ExpiryDateFrom Filter for quotes expiring after a particular date
		 * @param {Date} ExpiryDateTo Filter for quotes before a particular date
		 * @param {string} ContactID Filter for quotes belonging to a particular contact
		 * @param {string} Status Filter for quotes of a particular Status
		 * @param {number} page e.g. page=1 � Up to 100 Quotes will be returned in a single API call with line items shown for each quote
		 * @param {string} order Order by an any element
		 * @return {Quotes} Success - return response of type quotes array with all quotes
		 */
		GetQuotes(DateFrom: Date, DateTo: Date, ExpiryDateFrom: Date, ExpiryDateTo: Date, ContactID: string, Status: string, page: number, order: string): Observable<Quotes> {
			return this.http.get<Quotes>(this.baseUri + 'Quotes?DateFrom=' + DateFrom.toISOString() + '&DateTo=' + DateTo.toISOString() + '&ExpiryDateFrom=' + ExpiryDateFrom.toISOString() + '&ExpiryDateTo=' + ExpiryDateTo.toISOString() + '&ContactID=' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&page=' + page + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to create one or more quotes
		 * Put Quotes
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @param {Quotes} requestBody Quotes with an array of Quote object in body of request
		 * @return {Quotes} Success - return response of type Quotes with array with newly created Quote
		 */
		CreateQuotes(summarizeErrors: boolean, requestBody: Quotes): Observable<Quotes> {
			return this.http.put<Quotes>(this.baseUri + 'Quotes?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update OR create one or more quotes
		 * Post Quotes
		 * @param {boolean} summarizeErrors If false return 200 OK and mix of successfully created obejcts and any with validation errors
		 * @return {Quotes} Success - return response of type Quotes array with updated or created Quote
		 */
		UpdateOrCreateQuotes(summarizeErrors: boolean, requestBody: Quotes): Observable<Quotes> {
			return this.http.post<Quotes>(this.baseUri + 'Quotes?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified quote
		 * Get Quotes/{QuoteID}
		 * @param {string} QuoteID Unique identifier for an Quote
		 * @return {Quotes} Success - return response of type Quotes array with specified Quote
		 */
		GetQuote(QuoteID: string): Observable<Quotes> {
			return this.http.get<Quotes>(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)), {});
		}

		/**
		 * Allows you to update a specified quote
		 * Post Quotes/{QuoteID}
		 * @param {string} QuoteID Unique identifier for an Quote
		 * @return {Quotes} Success - return response of type Quotes array with updated Quote
		 */
		UpdateQuote(QuoteID: string, requestBody: Quotes): Observable<Quotes> {
			return this.http.post<Quotes>(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a history records of an quote
		 * Get Quotes/{QuoteID}/History
		 * @param {string} QuoteID Unique identifier for an Quote
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetQuoteHistory(QuoteID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)) + '/History', {});
		}

		/**
		 * Allows you to retrieve a history records of an quote
		 * Put Quotes/{QuoteID}/History
		 * @param {string} QuoteID Unique identifier for an Quote
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateQuoteHistory(QuoteID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve quotes as PDF files
		 * Get Quotes/{QuoteID}/pdf
		 * @param {string} QuoteID Unique identifier for an Quote
		 * @return {void} Success - return response of byte array pdf version of specified Quotes
		 */
		GetQuoteAsPdf(QuoteID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)) + '/pdf', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachments for Quotes
		 * Get Quotes/{QuoteID}/Attachments
		 * @param {string} QuoteID Unique identifier for Quote object
		 * @return {Attachments} Success - return response of type Attachments array of Attachment
		 */
		GetQuoteAttachments(QuoteID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve specific Attachment on Quote
		 * Get Quotes/{QuoteID}/Attachments/{AttachmentID}
		 * @param {string} QuoteID Unique identifier for Quote object
		 * @param {string} AttachmentID Unique identifier for Attachment object
		 * @return {void} Success - return response of attachment for Quote as binary data
		 */
		GetQuoteAttachmentById(QuoteID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachment on Quote by Filename
		 * Get Quotes/{QuoteID}/Attachments/{FileName}
		 * @param {string} QuoteID Unique identifier for Quote object
		 * @param {string} FileName Name of the attachment
		 * @return {void} Success - return response of attachment for Quote as binary data
		 */
		GetQuoteAttachmentByFileName(QuoteID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Quotes/' + (QuoteID == null ? '' : encodeURIComponent(QuoteID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve draft expense claim receipts for any user
		 * Get Receipts
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Receipts} Success - return response of type Receipts array for all Receipt
		 */
		GetReceipts(where: string, order: string, unitdp: number): Observable<Receipts> {
			return this.http.get<Receipts>(this.baseUri + 'Receipts?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to create draft expense claim receipts for any user
		 * Put Receipts
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @param {Receipts} requestBody Receipts with an array of Receipt object in body of request
		 * @return {Receipts} Success - return response of type Receipts array for newly created Receipt
		 */
		CreateReceipt(unitdp: number, requestBody: Receipts): Observable<Receipts> {
			return this.http.put<Receipts>(this.baseUri + 'Receipts?unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve a specified draft expense claim receipts
		 * Get Receipts/{ReceiptID}
		 * @param {string} ReceiptID Unique identifier for a Receipt
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Receipts} Success - return response of type Receipts array for a specified Receipt
		 */
		GetReceipt(ReceiptID: string, unitdp: number): Observable<Receipts> {
			return this.http.get<Receipts>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '&unitdp=' + unitdp, {});
		}

		/**
		 * Allows you to retrieve a specified draft expense claim receipts
		 * Post Receipts/{ReceiptID}
		 * @param {string} ReceiptID Unique identifier for a Receipt
		 * @param {number} unitdp e.g. unitdp=4 � (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
		 * @return {Receipts} Success - return response of type Receipts array for updated Receipt
		 */
		UpdateReceipt(ReceiptID: string, unitdp: number, requestBody: Receipts): Observable<Receipts> {
			return this.http.post<Receipts>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve Attachments for expense claim receipts
		 * Get Receipts/{ReceiptID}/Attachments
		 * @param {string} ReceiptID Unique identifier for a Receipt
		 * @return {Attachments} Success - return response of type Attachments array of Attachments for a specified Receipt
		 */
		GetReceiptAttachments(ReceiptID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve Attachments on expense claim receipts by ID
		 * Get Receipts/{ReceiptID}/Attachments/{AttachmentID}
		 * @param {string} ReceiptID Unique identifier for a Receipt
		 * @param {string} AttachmentID Unique identifier for a Attachment
		 * @return {void} Success - return response of attachment for Receipt as binary data
		 */
		GetReceiptAttachmentById(ReceiptID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve Attachments on expense claim receipts by file name
		 * Get Receipts/{ReceiptID}/Attachments/{FileName}
		 * @param {string} ReceiptID Unique identifier for a Receipt
		 * @param {string} FileName The name of the file being attached to the Receipt
		 * @return {void} Success - return response of attachment for Receipt as binary data
		 */
		GetReceiptAttachmentByFileName(ReceiptID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve a history records of an Receipt
		 * Get Receipts/{ReceiptID}/History
		 * @param {string} ReceiptID Unique identifier for a Receipt
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetReceiptHistory(ReceiptID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/History', {});
		}

		/**
		 * Allows you to retrieve a history records of an Receipt
		 * Put Receipts/{ReceiptID}/History
		 * @param {string} ReceiptID Unique identifier for a Receipt
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateReceiptHistory(ReceiptID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve any repeating invoices
		 * Get RepeatingInvoices
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {RepeatingInvoices} Success - return response of type Repeating Invoices array for all Repeating Invoice
		 */
		GetRepeatingInvoices(where: string, order: string): Observable<RepeatingInvoices> {
			return this.http.get<RepeatingInvoices>(this.baseUri + 'RepeatingInvoices?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to retrieve a specified repeating invoice
		 * Get RepeatingInvoices/{RepeatingInvoiceID}
		 * @param {string} RepeatingInvoiceID Unique identifier for a Repeating Invoice
		 * @return {RepeatingInvoices} Success - return response of type Repeating Invoices array with a specified Repeating Invoice
		 */
		GetRepeatingInvoice(RepeatingInvoiceID: string): Observable<RepeatingInvoices> {
			return this.http.get<RepeatingInvoices>(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)), {});
		}

		/**
		 * Allows you to retrieve Attachments on repeating invoice
		 * Get RepeatingInvoices/{RepeatingInvoiceID}/Attachments
		 * @param {string} RepeatingInvoiceID Unique identifier for a Repeating Invoice
		 * @return {Attachments} Success - return response of type Attachments array with all Attachments for a specified Repeating Invoice
		 */
		GetRepeatingInvoiceAttachments(RepeatingInvoiceID: string): Observable<Attachments> {
			return this.http.get<Attachments>(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)) + '/Attachments', {});
		}

		/**
		 * Allows you to retrieve a specified Attachments on repeating invoices
		 * Get RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{AttachmentID}
		 * @param {string} RepeatingInvoiceID Unique identifier for a Repeating Invoice
		 * @param {string} AttachmentID Unique identifier for a Attachment
		 * @return {void} Success - return response of attachment for Repeating Invoice as binary data
		 */
		GetRepeatingInvoiceAttachmentById(RepeatingInvoiceID: string, AttachmentID: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)) + '/Attachments/' + (AttachmentID == null ? '' : encodeURIComponent(AttachmentID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve specified attachment on repeating invoices by file name
		 * Get RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}
		 * @param {string} RepeatingInvoiceID Unique identifier for a Repeating Invoice
		 * @param {string} FileName The name of the file being attached to a Repeating Invoice
		 * @return {void} Success - return response of attachment for Repeating Invoice as binary data
		 */
		GetRepeatingInvoiceAttachmentByFileName(RepeatingInvoiceID: string, FileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to retrieve history for a repeating invoice
		 * Get RepeatingInvoices/{RepeatingInvoiceID}/History
		 * @param {string} RepeatingInvoiceID Unique identifier for a Repeating Invoice
		 * @return {HistoryRecords} Success - return response of HistoryRecords array of 0 to N HistoryRecord
		 */
		GetRepeatingInvoiceHistory(RepeatingInvoiceID: string): Observable<HistoryRecords> {
			return this.http.get<HistoryRecords>(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)) + '/History', {});
		}

		/**
		 * Allows you to create history for a repeating invoice
		 * Put RepeatingInvoices/{RepeatingInvoiceID}/History
		 * @param {string} RepeatingInvoiceID Unique identifier for a Repeating Invoice
		 * @param {HistoryRecords} requestBody HistoryRecords containing an array of HistoryRecord objects in body of request
		 * @return {HistoryRecords} Success - return response of type HistoryRecords array of HistoryRecord objects
		 */
		CreateRepeatingInvoiceHistory(RepeatingInvoiceID: string, requestBody: HistoryRecords): Observable<HistoryRecords> {
			return this.http.put<HistoryRecords>(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)) + '/History', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve report for TenNinetyNine
		 * Get Reports/TenNinetyNine
		 * @param {string} reportYear The year of the 1099 report
		 * @return {Reports} Success - return response of type Reports
		 */
		GetReportTenNinetyNine(reportYear: string): Observable<Reports> {
			return this.http.get<Reports>(this.baseUri + 'Reports/TenNinetyNine?reportYear=' + (reportYear == null ? '' : encodeURIComponent(reportYear)), {});
		}

		/**
		 * Allows you to retrieve report for AgedPayablesByContact
		 * Get Reports/AgedPayablesByContact
		 * @param {string} contactId Unique identifier for a Contact
		 * @param {Date} date The date of the Aged Payables By Contact report
		 * @param {Date} fromDate The from date of the Aged Payables By Contact report
		 * @param {Date} toDate The to date of the Aged Payables By Contact report
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportAgedPayablesByContact(contactId: string, date: Date, fromDate: Date, toDate: Date): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/AgedPayablesByContact?contactId=' + (contactId == null ? '' : encodeURIComponent(contactId)) + '&date=' + date.toISOString() + '&fromDate=' + fromDate.toISOString() + '&toDate=' + toDate.toISOString(), {});
		}

		/**
		 * Allows you to retrieve report for AgedReceivablesByContact
		 * Get Reports/AgedReceivablesByContact
		 * @param {string} contactId Unique identifier for a Contact
		 * @param {Date} date The date of the Aged Receivables By Contact report
		 * @param {Date} fromDate The from date of the Aged Receivables By Contact report
		 * @param {Date} toDate The to date of the Aged Receivables By Contact report
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportAgedReceivablesByContact(contactId: string, date: Date, fromDate: Date, toDate: Date): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/AgedReceivablesByContact?contactId=' + (contactId == null ? '' : encodeURIComponent(contactId)) + '&date=' + date.toISOString() + '&fromDate=' + fromDate.toISOString() + '&toDate=' + toDate.toISOString(), {});
		}

		/**
		 * Allows you to retrieve report for BalanceSheet
		 * Get Reports/BalanceSheet
		 * @param {string} date The date of the Balance Sheet report
		 * @param {number} periods The number of periods for the Balance Sheet report
		 * @param {GetReportBalanceSheetTimeframe} timeframe The period size to compare to (MONTH, QUARTER, YEAR)
		 * @param {string} trackingOptionID1 The tracking option 1 for the Balance Sheet report
		 * @param {string} trackingOptionID2 The tracking option 2 for the Balance Sheet report
		 * @param {boolean} standardLayout The standard layout boolean for the Balance Sheet report
		 * @param {boolean} paymentsOnly return a cash basis for the Balance Sheet report
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportBalanceSheet(date: string, periods: number, timeframe: GetReportBalanceSheetTimeframe, trackingOptionID1: string, trackingOptionID2: string, standardLayout: boolean, paymentsOnly: boolean): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/BalanceSheet?date=' + (date == null ? '' : encodeURIComponent(date)) + '&periods=' + periods + '&timeframe=' + timeframe + '&trackingOptionID1=' + (trackingOptionID1 == null ? '' : encodeURIComponent(trackingOptionID1)) + '&trackingOptionID2=' + (trackingOptionID2 == null ? '' : encodeURIComponent(trackingOptionID2)) + '&standardLayout=' + standardLayout + '&paymentsOnly=' + paymentsOnly, {});
		}

		/**
		 * Allows you to retrieve report for BankSummary
		 * Get Reports/BankSummary
		 * @param {Date} fromDate The from date for the Bank Summary report e.g. 2018-03-31
		 * @param {Date} toDate The to date for the Bank Summary report e.g. 2018-03-31
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportBankSummary(fromDate: Date, toDate: Date): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/BankSummary?fromDate=' + fromDate.toISOString() + '&toDate=' + toDate.toISOString(), {});
		}

		/**
		 * Allows you to retrieve report for BAS only valid for AU orgs
		 * Get Reports
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportBASorGSTList(): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports', {});
		}

		/**
		 * Allows you to retrieve report for BAS only valid for AU orgs
		 * Get Reports/{ReportID}
		 * @param {string} ReportID Unique identifier for a Report
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportBASorGST(ReportID: string): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/' + (ReportID == null ? '' : encodeURIComponent(ReportID)), {});
		}

		/**
		 * Allows you to retrieve report for Budget Summary
		 * Get Reports/BudgetSummary
		 * @param {Date} date The date for the Bank Summary report e.g. 2018-03-31
		 * @param {number} period The number of periods to compare (integer between 1 and 12)
		 * @param {number} timeframe The period size to compare to (1=month, 3=quarter, 12=year)
		 * @return {ReportWithRows} success- return a Report with Rows object
		 */
		GetReportBudgetSummary(date: Date, period: number, timeframe: number): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/BudgetSummary?date=' + date.toISOString() + '&period=' + period + '&timeframe=' + timeframe, {});
		}

		/**
		 * Allows you to retrieve report for ExecutiveSummary
		 * Get Reports/ExecutiveSummary
		 * @param {Date} date The date for the Bank Summary report e.g. 2018-03-31
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportExecutiveSummary(date: Date): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/ExecutiveSummary?date=' + date.toISOString(), {});
		}

		/**
		 * Allows you to retrieve report for ProfitAndLoss
		 * Get Reports/ProfitAndLoss
		 * @param {Date} fromDate The from date for the ProfitAndLoss report e.g. 2018-03-31
		 * @param {Date} toDate The to date for the ProfitAndLoss report e.g. 2018-03-31
		 * @param {number} periods The number of periods to compare (integer between 1 and 12)
		 * @param {GetReportBalanceSheetTimeframe} timeframe The period size to compare to (MONTH, QUARTER, YEAR)
		 * @param {string} trackingCategoryID The trackingCategory 1 for the ProfitAndLoss report
		 * @param {string} trackingCategoryID2 The trackingCategory 2 for the ProfitAndLoss report
		 * @param {string} trackingOptionID The tracking option 1 for the ProfitAndLoss report
		 * @param {string} trackingOptionID2 The tracking option 2 for the ProfitAndLoss report
		 * @param {boolean} standardLayout Return the standard layout for the ProfitAndLoss report
		 * @param {boolean} paymentsOnly Return cash only basis for the ProfitAndLoss report
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportProfitAndLoss(fromDate: Date, toDate: Date, periods: number, timeframe: GetReportBalanceSheetTimeframe, trackingCategoryID: string, trackingCategoryID2: string, trackingOptionID: string, trackingOptionID2: string, standardLayout: boolean, paymentsOnly: boolean): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/ProfitAndLoss?fromDate=' + fromDate.toISOString() + '&toDate=' + toDate.toISOString() + '&periods=' + periods + '&timeframe=' + timeframe + '&trackingCategoryID=' + (trackingCategoryID == null ? '' : encodeURIComponent(trackingCategoryID)) + '&trackingCategoryID2=' + (trackingCategoryID2 == null ? '' : encodeURIComponent(trackingCategoryID2)) + '&trackingOptionID=' + (trackingOptionID == null ? '' : encodeURIComponent(trackingOptionID)) + '&trackingOptionID2=' + (trackingOptionID2 == null ? '' : encodeURIComponent(trackingOptionID2)) + '&standardLayout=' + standardLayout + '&paymentsOnly=' + paymentsOnly, {});
		}

		/**
		 * Allows you to retrieve report for TrialBalance
		 * Get Reports/TrialBalance
		 * @param {Date} date The date for the Trial Balance report e.g. 2018-03-31
		 * @param {boolean} paymentsOnly Return cash only basis for the Trial Balance report
		 * @return {ReportWithRows} Success - return response of type ReportWithRows
		 */
		GetReportTrialBalance(date: Date, paymentsOnly: boolean): Observable<ReportWithRows> {
			return this.http.get<ReportWithRows>(this.baseUri + 'Reports/TrialBalance?date=' + date.toISOString() + '&paymentsOnly=' + paymentsOnly, {});
		}

		/**
		 * Allows you to retrieve Tax Rates
		 * Get TaxRates
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {string} TaxType Filter by tax type
		 * @return {TaxRates} Success - return response of type TaxRates array with TaxRates
		 */
		GetTaxRates(where: string, order: string, TaxType: string): Observable<TaxRates> {
			return this.http.get<TaxRates>(this.baseUri + 'TaxRates?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&TaxType=' + (TaxType == null ? '' : encodeURIComponent(TaxType)), {});
		}

		/**
		 * Allows you to create one or more Tax Rates
		 * Put TaxRates
		 * @param {TaxRates} requestBody TaxRates array with TaxRate object in body of request
		 * @return {TaxRates} Success - return response of type TaxRates array newly created TaxRate
		 */
		CreateTaxRates(requestBody: TaxRates): Observable<TaxRates> {
			return this.http.put<TaxRates>(this.baseUri + 'TaxRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update Tax Rates
		 * Post TaxRates
		 * @return {TaxRates} Success - return response of type TaxRates array updated TaxRate
		 */
		UpdateTaxRate(requestBody: TaxRates): Observable<TaxRates> {
			return this.http.post<TaxRates>(this.baseUri + 'TaxRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve tracking categories and options
		 * Get TrackingCategories
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @param {boolean} includeArchived e.g. includeArchived=true - Categories and options with a status of ARCHIVED will be included in the response
		 * @return {TrackingCategories} Success - return response of type TrackingCategories array of TrackingCategory
		 */
		GetTrackingCategories(where: string, order: string, includeArchived: boolean): Observable<TrackingCategories> {
			return this.http.get<TrackingCategories>(this.baseUri + 'TrackingCategories?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&includeArchived=' + includeArchived, {});
		}

		/**
		 * Allows you to create tracking categories
		 * Put TrackingCategories
		 * @param {TrackingCategory} requestBody TrackingCategory object in body of request
		 * @return {TrackingCategories} Success - return response of type TrackingCategories array of newly created TrackingCategory
		 */
		CreateTrackingCategory(requestBody: TrackingCategory): Observable<TrackingCategories> {
			return this.http.put<TrackingCategories>(this.baseUri + 'TrackingCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to retrieve tracking categories and options for specified category
		 * Get TrackingCategories/{TrackingCategoryID}
		 * @param {string} TrackingCategoryID Unique identifier for a TrackingCategory
		 * @return {TrackingCategories} Success - return response of type TrackingCategories array of specified TrackingCategory
		 */
		GetTrackingCategory(TrackingCategoryID: string): Observable<TrackingCategories> {
			return this.http.get<TrackingCategories>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)), {});
		}

		/**
		 * Allows you to update tracking categories
		 * Post TrackingCategories/{TrackingCategoryID}
		 * @param {string} TrackingCategoryID Unique identifier for a TrackingCategory
		 * @return {TrackingCategories} Success - return response of type TrackingCategories array of updated TrackingCategory
		 */
		UpdateTrackingCategory(TrackingCategoryID: string, requestBody: TrackingCategory): Observable<TrackingCategories> {
			return this.http.post<TrackingCategories>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to delete tracking categories
		 * Delete TrackingCategories/{TrackingCategoryID}
		 * @param {string} TrackingCategoryID Unique identifier for a TrackingCategory
		 * @return {TrackingCategories} Success - return response of type TrackingCategories array of deleted TrackingCategory
		 */
		DeleteTrackingCategory(TrackingCategoryID: string): Observable<TrackingCategories> {
			return this.http.delete<TrackingCategories>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)), {});
		}

		/**
		 * Allows you to create options for a specified tracking category
		 * Put TrackingCategories/{TrackingCategoryID}/Options
		 * @param {string} TrackingCategoryID Unique identifier for a TrackingCategory
		 * @param {TrackingOption} requestBody TrackingOption object in body of request
		 * @return {TrackingOptions} Success - return response of type TrackingOptions array of options for a specified category
		 */
		CreateTrackingOptions(TrackingCategoryID: string, requestBody: TrackingOption): Observable<TrackingOptions> {
			return this.http.put<TrackingOptions>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)) + '/Options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update options for a specified tracking category
		 * Post TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}
		 * @param {string} TrackingCategoryID Unique identifier for a TrackingCategory
		 * @param {string} TrackingOptionID Unique identifier for a Tracking Option
		 * @return {TrackingOptions} Success - return response of type TrackingOptions array of options for a specified category
		 */
		UpdateTrackingOptions(TrackingCategoryID: string, TrackingOptionID: string, requestBody: TrackingOption): Observable<TrackingOptions> {
			return this.http.post<TrackingOptions>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)) + '/Options/' + (TrackingOptionID == null ? '' : encodeURIComponent(TrackingOptionID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to delete a specified option for a specified tracking category
		 * Delete TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}
		 * @param {string} TrackingCategoryID Unique identifier for a TrackingCategory
		 * @param {string} TrackingOptionID Unique identifier for a Tracking Option
		 * @return {TrackingOptions} Success - return response of type TrackingOptions array of remaining options for a specified category
		 */
		DeleteTrackingOptions(TrackingCategoryID: string, TrackingOptionID: string): Observable<TrackingOptions> {
			return this.http.delete<TrackingOptions>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)) + '/Options/' + (TrackingOptionID == null ? '' : encodeURIComponent(TrackingOptionID)), {});
		}

		/**
		 * Allows you to retrieve users
		 * Get Users
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by an any element
		 * @return {Users} Success - return response of type Users array of all User
		 */
		GetUsers(where: string, order: string): Observable<Users> {
			return this.http.get<Users>(this.baseUri + 'Users?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), {});
		}

		/**
		 * Allows you to retrieve a specified user
		 * Get Users/{UserID}
		 * @param {string} UserID Unique identifier for a User
		 * @return {Users} Success - return response of type Users array of specified User
		 */
		GetUser(UserID: string): Observable<Users> {
			return this.http.get<Users>(this.baseUri + 'Users/' + (UserID == null ? '' : encodeURIComponent(UserID)), {});
		}
	}

	export enum GetReportBalanceSheetTimeframe { MONTH = 0, QUARTER = 1, YEAR = 2 }

}

