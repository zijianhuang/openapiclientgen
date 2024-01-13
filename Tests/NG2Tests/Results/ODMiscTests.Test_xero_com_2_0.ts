import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {

		/** Unique identifier for the account */
		AccountID?: string | null;

		/** For bank accounts only (Type BANK) */
		BankAccountNumber?: string | null;

		/** For bank accounts only */
		BankAccountType?: AccountBankAccountType | null;

		/** The class of account */
		Class?: AccountClass | null;

		/**
		 * Customer defined alpha numeric account code e.g 200 or SALES
		 * Required
		 * Max length: 10
		 */
		Code: string;

		/** For bank accounts only */
		CurrencyCode?: string | null;

		/**
		 * Description of the Account. Valid for all types of accounts except bank accounts
		 * Max length: 4000
		 */
		Description?: string | null;

		/** Describes whether account can have payments applied to it */
		EnablePaymentsToAccount?: boolean | null;

		/** Indicates if an account has an attachment */
		HasAttachments?: boolean | null;

		/**
		 * Name of account
		 * Required
		 * Max length: 150
		 */
		Name: string;

		/** Shown if set */
		ReportingCode?: string | null;

		/** Shown if set */
		ReportingCodeName?: string | null;

		/** Describes whether account code is available for use with expense claims */
		ShowInExpenseClaims?: boolean | null;

		/** Accounts with a status of ACTIVE can be updated to ARCHIVED */
		Status?: AccountStatus | null;

		/** If this is a system account then this element is returned. Note that non-system accounts may have this element set as either “” or null. */
		SystemAccount?: AccountSystemAccount | null;

		/** Default tax rate for the account */
		TaxType?: string | null;

		/**
		 * Account type
		 * Required
		 */
		Type: AccountType;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;
	}
	export interface AccountFormProperties {

		/** Unique identifier for the account */
		AccountID: FormControl<string | null | undefined>,

		/** For bank accounts only (Type BANK) */
		BankAccountNumber: FormControl<string | null | undefined>,

		/** For bank accounts only */
		BankAccountType: FormControl<AccountBankAccountType | null | undefined>,

		/** The class of account */
		Class: FormControl<AccountClass | null | undefined>,

		/**
		 * Customer defined alpha numeric account code e.g 200 or SALES
		 * Required
		 * Max length: 10
		 */
		Code: FormControl<string | null | undefined>,

		/** For bank accounts only */
		CurrencyCode: FormControl<string | null | undefined>,

		/**
		 * Description of the Account. Valid for all types of accounts except bank accounts
		 * Max length: 4000
		 */
		Description: FormControl<string | null | undefined>,

		/** Describes whether account can have payments applied to it */
		EnablePaymentsToAccount: FormControl<boolean | null | undefined>,

		/** Indicates if an account has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/**
		 * Name of account
		 * Required
		 * Max length: 150
		 */
		Name: FormControl<string | null | undefined>,

		/** Shown if set */
		ReportingCode: FormControl<string | null | undefined>,

		/** Shown if set */
		ReportingCodeName: FormControl<string | null | undefined>,

		/** Describes whether account code is available for use with expense claims */
		ShowInExpenseClaims: FormControl<boolean | null | undefined>,

		/** Accounts with a status of ACTIVE can be updated to ARCHIVED */
		Status: FormControl<AccountStatus | null | undefined>,

		/** If this is a system account then this element is returned. Note that non-system accounts may have this element set as either “” or null. */
		SystemAccount: FormControl<AccountSystemAccount | null | undefined>,

		/** Default tax rate for the account */
		TaxType: FormControl<string | null | undefined>,

		/**
		 * Account type
		 * Required
		 */
		Type: FormControl<AccountType | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			AccountID: new FormControl<string | null | undefined>(undefined),
			BankAccountNumber: new FormControl<string | null | undefined>(undefined),
			BankAccountType: new FormControl<AccountBankAccountType | null | undefined>(undefined),
			Class: new FormControl<AccountClass | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10)]),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000)]),
			EnablePaymentsToAccount: new FormControl<boolean | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(150)]),
			ReportingCode: new FormControl<string | null | undefined>(undefined),
			ReportingCodeName: new FormControl<string | null | undefined>(undefined),
			ShowInExpenseClaims: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<AccountStatus | null | undefined>(undefined),
			SystemAccount: new FormControl<AccountSystemAccount | null | undefined>(undefined),
			TaxType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AccountType | null | undefined>(undefined, [Validators.required]),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AccountBankAccountType { BANK = 0, CREDITCARD = 1, PAYPAL = 2 }

	export enum AccountClass { ASSET = 0, EQUITY = 1, EXPENSE = 2, LIABILITY = 3, REVENUE = 4 }

	export enum AccountStatus { ACTIVE = 0, ARCHIVED = 1 }

	export enum AccountSystemAccount { DEBTORS = 0, CREDITORS = 1, BANKCURRENCYGAIN = 2, GST = 3, GSTONIMPORTS = 4, HISTORICAL = 5, REALISEDCURRENCYGAIN = 6, RETAINEDEARNINGS = 7, ROUNDING = 8, TRACKINGTRANSFERS = 9, UNPAIDEXPCLM = 10, UNREALISEDCURRENCYGAIN = 11, WAGEPAYABLES = 12 }

	export enum AccountType { BANK = 0, CURRENT = 1, CURRLIAB = 2, DEPRECIATN = 3, DIRECTCOSTS = 4, EQUITY = 5, EXPENSE = 6, FIXED = 7, INVENTORY = 8, LIABILITY = 9, NONCURRENT = 10, OTHERINCOME = 11, OVERHEADS = 12, PREPAYMENT = 13, REVENUE = 14, SALES = 15, TERMLIAB = 16, PAYGLIABILITY = 17, SUPERANNUATIONEXPENSE = 18, SUPERANNUATIONLIABILITY = 19, WAGESEXPENSE = 20, WAGESPAYABLELIABILITY = 21 }

	export interface Address {

		/** Max length: 500 */
		AddressLine1?: string | null;

		/** Max length: 500 */
		AddressLine2?: string | null;

		/** Max length: 500 */
		AddressLine3?: string | null;

		/** Max length: 500 */
		AddressLine4?: string | null;

		/** The address type */
		AddressType?: AddressAddressType | null;

		/** Max length: 255 */
		Attentionto?: string | null;

		/** Max length: 255 */
		City?: string | null;

		/** Max length: 50 */
		Country?: string | null;

		/** Max length: 50 */
		PostalCode?: string | null;

		/** Max length: 500 */
		Region?: string | null;
	}
	export interface AddressFormProperties {

		/** Max length: 500 */
		AddressLine1: FormControl<string | null | undefined>,

		/** Max length: 500 */
		AddressLine2: FormControl<string | null | undefined>,

		/** Max length: 500 */
		AddressLine3: FormControl<string | null | undefined>,

		/** Max length: 500 */
		AddressLine4: FormControl<string | null | undefined>,

		/** The address type */
		AddressType: FormControl<AddressAddressType | null | undefined>,

		/** Max length: 255 */
		Attentionto: FormControl<string | null | undefined>,

		/** Max length: 255 */
		City: FormControl<string | null | undefined>,

		/** Max length: 50 */
		Country: FormControl<string | null | undefined>,

		/** Max length: 50 */
		PostalCode: FormControl<string | null | undefined>,

		/** Max length: 500 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			AddressLine1: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			AddressLine2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			AddressLine3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			AddressLine4: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			AddressType: new FormControl<AddressAddressType | null | undefined>(undefined),
			Attentionto: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			City: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export enum AddressAddressType { POBOX = 0, STREET = 1, POSTAL = 2 }

	export interface Allocation {

		/**
		 * the amount being applied to the invoice
		 * Required
		 */
		AppliedAmount: number;

		/**
		 * The date the prepayment is applied YYYY-MM-DD (read-only). This will be the latter of the invoice date and the prepayment date.
		 * Required
		 */
		Date: Date;

		/** Required */
		Invoice: AllocationInvoice;
	}
	export interface AllocationFormProperties {

		/**
		 * the amount being applied to the invoice
		 * Required
		 */
		AppliedAmount: FormControl<number | null | undefined>,

		/**
		 * The date the prepayment is applied YYYY-MM-DD (read-only). This will be the latter of the invoice date and the prepayment date.
		 * Required
		 */
		Date: FormControl<Date | null | undefined>,
	}
	export function CreateAllocationFormGroup() {
		return new FormGroup<AllocationFormProperties>({
			AppliedAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AllocationInvoice {
		InvoiceID?: string | null;
	}
	export interface AllocationInvoiceFormProperties {
		InvoiceID: FormControl<string | null | undefined>,
	}
	export function CreateAllocationInvoiceFormGroup() {
		return new FormGroup<AllocationInvoiceFormProperties>({
			InvoiceID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Attachment {

		/** Xero generated unique identifier for attachment */
		AttachmentId?: string | null;

		/** The content length in bytes */
		ContentLegth?: number | null;

		/** The filename of the attachemnt */
		Filename?: string | null;

		/** Determines whether the attachment is included with the online invoice */
		IncludeOnline?: boolean | null;

		/** The mimetype of the attachemnt */
		MimeType?: string | null;

		/** The URL to where the attachment is located */
		Url?: string | null;
	}
	export interface AttachmentFormProperties {

		/** Xero generated unique identifier for attachment */
		AttachmentId: FormControl<string | null | undefined>,

		/** The content length in bytes */
		ContentLegth: FormControl<number | null | undefined>,

		/** The filename of the attachemnt */
		Filename: FormControl<string | null | undefined>,

		/** Determines whether the attachment is included with the online invoice */
		IncludeOnline: FormControl<boolean | null | undefined>,

		/** The mimetype of the attachemnt */
		MimeType: FormControl<string | null | undefined>,

		/** The URL to where the attachment is located */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			AttachmentId: new FormControl<string | null | undefined>(undefined),
			ContentLegth: new FormControl<number | null | undefined>(undefined),
			Filename: new FormControl<string | null | undefined>(undefined),
			IncludeOnline: new FormControl<boolean | null | undefined>(undefined),
			MimeType: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BalancesElement {
		AccountsPayable?: BalancesElementAccountsPayable;
		AccountsReceivable?: BalancesElementAccountsReceivable;
	}
	export interface BalancesElementFormProperties {
	}
	export function CreateBalancesElementFormGroup() {
		return new FormGroup<BalancesElementFormProperties>({
		});

	}

	export interface BalancesElementAccountsPayable {

		/** AP outstanding balance */
		Outstanding?: number | null;

		/** AP overdue balance */
		Overdue?: number | null;
	}
	export interface BalancesElementAccountsPayableFormProperties {

		/** AP outstanding balance */
		Outstanding: FormControl<number | null | undefined>,

		/** AP overdue balance */
		Overdue: FormControl<number | null | undefined>,
	}
	export function CreateBalancesElementAccountsPayableFormGroup() {
		return new FormGroup<BalancesElementAccountsPayableFormProperties>({
			Outstanding: new FormControl<number | null | undefined>(undefined),
			Overdue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BalancesElementAccountsReceivable {

		/** AR outstanding balance */
		Outstanding?: number | null;

		/** AR overdue balance */
		Overdue?: number | null;
	}
	export interface BalancesElementAccountsReceivableFormProperties {

		/** AR outstanding balance */
		Outstanding: FormControl<number | null | undefined>,

		/** AR overdue balance */
		Overdue: FormControl<number | null | undefined>,
	}
	export function CreateBalancesElementAccountsReceivableFormGroup() {
		return new FormGroup<BalancesElementAccountsReceivableFormProperties>({
			Outstanding: new FormControl<number | null | undefined>(undefined),
			Overdue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BankAccount {

		/** Account identifier */
		AccountID?: string | null;

		/** Bank account code */
		Code?: string | null;

		/** The Name Bank Account */
		Name?: string | null;
	}
	export interface BankAccountFormProperties {

		/** Account identifier */
		AccountID: FormControl<string | null | undefined>,

		/** Bank account code */
		Code: FormControl<string | null | undefined>,

		/** The Name Bank Account */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountFormGroup() {
		return new FormGroup<BankAccountFormProperties>({
			AccountID: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransaction {
		Attachments?: Array<Attachment>;

		/** Required */
		BankAccount: BankAccount;

		/** Xero generated unique identifier for bank transactions */
		BankTransactionId?: string | null;

		/** Required */
		Contact: ContactSummary;

		/** The currency that bank transaction has been raised in */
		CurrencyCode?: string | null;

		/** The currency rate for a multicurrency bank transaction. If no rate is specified, the XE.com day rate is used. */
		CurrencyRate?: number | null;

		/** Date bank transaction was made YYYY-MM-DD */
		Date?: Date | null;

		/** boolean to indicate if the bank transaction has an attachment */
		HasAttachments?: boolean | null;

		/** Indicates if transaction has been reconciled */
		IsReconciled?: boolean | null;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Required */
		LineItems: Array<LineItem>;

		/** Xero generated unique identifier for an Overpayment. This will be returned on BankTransactions with a Type of SPEND-OVERPAYMENT or RECEIVE-OVERPAYMENT */
		OverpaymentID?: string | null;

		/** Xero generated unique identifier for a Prepayment. This will be returned on BankTransactions with a Type of SPEND-PREPAYMENT or RECEIVE-PREPAYMENT */
		PrepaymentID?: string | null;

		/** Reference for the transaction. Only supported for SPEND and RECEIVE transactions */
		Reference?: string | null;

		/** The status of the bank transaction */
		Status?: BankTransactionStatus | null;

		/** Total of bank transaction excluding taxes */
		SubTotal?: number | null;

		/** Total of bank transaction tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts */
		Total?: number | null;

		/** Total tax on the bank transaction */
		Totaltax?: number | null;

		/**
		 * The type of bank transaction
		 * Required
		 */
		Type: BankTransactionType;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** URL link to a source document – shown as “Go to [appName]” in the Xero app */
		Url?: string | null;
	}
	export interface BankTransactionFormProperties {

		/** Xero generated unique identifier for bank transactions */
		BankTransactionId: FormControl<string | null | undefined>,

		/** The currency that bank transaction has been raised in */
		CurrencyCode: FormControl<string | null | undefined>,

		/** The currency rate for a multicurrency bank transaction. If no rate is specified, the XE.com day rate is used. */
		CurrencyRate: FormControl<number | null | undefined>,

		/** Date bank transaction was made YYYY-MM-DD */
		Date: FormControl<Date | null | undefined>,

		/** boolean to indicate if the bank transaction has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Indicates if transaction has been reconciled */
		IsReconciled: FormControl<boolean | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** Xero generated unique identifier for an Overpayment. This will be returned on BankTransactions with a Type of SPEND-OVERPAYMENT or RECEIVE-OVERPAYMENT */
		OverpaymentID: FormControl<string | null | undefined>,

		/** Xero generated unique identifier for a Prepayment. This will be returned on BankTransactions with a Type of SPEND-PREPAYMENT or RECEIVE-PREPAYMENT */
		PrepaymentID: FormControl<string | null | undefined>,

		/** Reference for the transaction. Only supported for SPEND and RECEIVE transactions */
		Reference: FormControl<string | null | undefined>,

		/** The status of the bank transaction */
		Status: FormControl<BankTransactionStatus | null | undefined>,

		/** Total of bank transaction excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** Total of bank transaction tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts */
		Total: FormControl<number | null | undefined>,

		/** Total tax on the bank transaction */
		Totaltax: FormControl<number | null | undefined>,

		/**
		 * The type of bank transaction
		 * Required
		 */
		Type: FormControl<BankTransactionType | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,

		/** URL link to a source document – shown as “Go to [appName]” in the Xero app */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactionFormGroup() {
		return new FormGroup<BankTransactionFormProperties>({
			BankTransactionId: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			IsReconciled: new FormControl<boolean | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			OverpaymentID: new FormControl<string | null | undefined>(undefined),
			PrepaymentID: new FormControl<string | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<BankTransactionStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			Totaltax: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<BankTransactionType | null | undefined>(undefined, [Validators.required]),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactSummary {

		/** Xero identifier */
		ContactID?: string | null;

		/**
		 * Full name of contact/organisation
		 * Required
		 * Max length: 255
		 */
		Name: string;
	}
	export interface ContactSummaryFormProperties {

		/** Xero identifier */
		ContactID: FormControl<string | null | undefined>,

		/**
		 * Full name of contact/organisation
		 * Required
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateContactSummaryFormGroup() {
		return new FormGroup<ContactSummaryFormProperties>({
			ContactID: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}

	export enum BankTransactionLineAmountTypes { Inclusive = 0, Exclusive = 1, NoTax = 2 }

	export interface LineItem {

		/** The account that the lineitem is being coded to */
		AccountCode?: string | null;

		/**
		 * Description needs to be at least 1 char long. A line item with just a description (i.e no unit amount or quantity) can be created by specifying just a <Description> element that contains at least 1 character
		 * Required
		 */
		Description: string;

		/** Percentage discount being applied to a line item (only supported on ACCREC invoices – ACC PAY invoices and credit notes in Xero do not support discounts */
		DiscountRate?: number | null;

		/** Code of the item */
		ItemCode?: string | null;

		/** The line amount reflects the discounted price if a DiscountRate has been used i.e LineAmount = Quantity * Unit Amount * ((100 – DiscountRate)/100) */
		LineAmount?: number | null;

		/** The Xero generated identifier for a LineItem. If LineItemIDs are not included with line items in an update request then the line items are deleted and recreated. */
		LineItemID?: string | null;

		/** LineItem Quantity */
		Quantity?: number | null;

		/** The tax amount is auto calculated as a percentage of the line amount based on the tax rate. This value can be overriden if the calculated TaxAmount is not correct. */
		TaxAmount?: number | null;

		/** Used as an override if the default Tax Code for the selected <AccountCode> is not correct */
		TaxType?: string | null;
		Tracking?: Tracking;

		/** Lineitem unit amount. By default, unit amount will be rounded to two decimal places. You can opt in to use four decimal places by adding the querystring parameter unitdp=4 to your query. See the Rounding in Xero guide for more information. */
		UnitAmount?: number | null;
	}
	export interface LineItemFormProperties {

		/** The account that the lineitem is being coded to */
		AccountCode: FormControl<string | null | undefined>,

		/**
		 * Description needs to be at least 1 char long. A line item with just a description (i.e no unit amount or quantity) can be created by specifying just a <Description> element that contains at least 1 character
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** Percentage discount being applied to a line item (only supported on ACCREC invoices – ACC PAY invoices and credit notes in Xero do not support discounts */
		DiscountRate: FormControl<number | null | undefined>,

		/** Code of the item */
		ItemCode: FormControl<string | null | undefined>,

		/** The line amount reflects the discounted price if a DiscountRate has been used i.e LineAmount = Quantity * Unit Amount * ((100 – DiscountRate)/100) */
		LineAmount: FormControl<number | null | undefined>,

		/** The Xero generated identifier for a LineItem. If LineItemIDs are not included with line items in an update request then the line items are deleted and recreated. */
		LineItemID: FormControl<string | null | undefined>,

		/** LineItem Quantity */
		Quantity: FormControl<number | null | undefined>,

		/** The tax amount is auto calculated as a percentage of the line amount based on the tax rate. This value can be overriden if the calculated TaxAmount is not correct. */
		TaxAmount: FormControl<number | null | undefined>,

		/** Used as an override if the default Tax Code for the selected <AccountCode> is not correct */
		TaxType: FormControl<string | null | undefined>,

		/** Lineitem unit amount. By default, unit amount will be rounded to two decimal places. You can opt in to use four decimal places by adding the querystring parameter unitdp=4 to your query. See the Rounding in Xero guide for more information. */
		UnitAmount: FormControl<number | null | undefined>,
	}
	export function CreateLineItemFormGroup() {
		return new FormGroup<LineItemFormProperties>({
			AccountCode: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DiscountRate: new FormControl<number | null | undefined>(undefined),
			ItemCode: new FormControl<string | null | undefined>(undefined),
			LineAmount: new FormControl<number | null | undefined>(undefined),
			LineItemID: new FormControl<string | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxType: new FormControl<string | null | undefined>(undefined),
			UnitAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tracking {
		TrackingTrackingCategory?: Array<TrackingTrackingCategory>;
	}
	export interface TrackingFormProperties {
	}
	export function CreateTrackingFormGroup() {
		return new FormGroup<TrackingFormProperties>({
		});

	}

	export interface TrackingTrackingCategory {

		/** The name of the tracking category */
		Name?: string | null;

		/** The name of the tracking option */
		Option?: string | null;

		/** The identifier for the tracking category */
		TrackingCategoryID?: string | null;
	}
	export interface TrackingTrackingCategoryFormProperties {

		/** The name of the tracking category */
		Name: FormControl<string | null | undefined>,

		/** The name of the tracking option */
		Option: FormControl<string | null | undefined>,

		/** The identifier for the tracking category */
		TrackingCategoryID: FormControl<string | null | undefined>,
	}
	export function CreateTrackingTrackingCategoryFormGroup() {
		return new FormGroup<TrackingTrackingCategoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Option: new FormControl<string | null | undefined>(undefined),
			TrackingCategoryID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BankTransactionStatus { AUTHORISED = 0, DELETED = 1 }

	export enum BankTransactionType { RECEIVE = 0, 'RECEIVE-OVERPAYMENT' = 1, 'RECEIVE-PREPAYMENT' = 2, SPEND = 3, 'SPEND-OVERPAYMENT' = 4, 'SPEND-PREPAYMENT' = 5, 'RECEIVE-TRANSFER' = 6, 'SPEND-TRANSFER' = 7 }

	export interface BankTransfer {

		/**
		 * Total of the bank transfer
		 * Required
		 */
		Amount: number;
		Attachments?: Array<Attachment>;

		/** Xero generated unique identifier for bank transfers */
		BankTransferId?: string | null;

		/** The currency rate for a multicurrency bank transfer. If no rate is specified, the XE.com day rate is used. */
		CurrencyRate?: number | null;

		/** Date bank transfer was made YYYY-MM-DD */
		Date?: Date | null;

		/** Required */
		FromBankAccount: FromBankAccount;

		/** The Bank Transaction ID for the source account */
		FromBankTransactionID?: string | null;

		/** boolean to indicate if the bank transaction has an attachment */
		HasAttachments?: boolean | null;

		/** Required */
		ToBankAccount: ToBankAccount;

		/** The Bank Transaction ID for the destination account */
		ToBankTransactionID?: string | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;
	}
	export interface BankTransferFormProperties {

		/**
		 * Total of the bank transfer
		 * Required
		 */
		Amount: FormControl<number | null | undefined>,

		/** Xero generated unique identifier for bank transfers */
		BankTransferId: FormControl<string | null | undefined>,

		/** The currency rate for a multicurrency bank transfer. If no rate is specified, the XE.com day rate is used. */
		CurrencyRate: FormControl<number | null | undefined>,

		/** Date bank transfer was made YYYY-MM-DD */
		Date: FormControl<Date | null | undefined>,

		/** The Bank Transaction ID for the source account */
		FromBankTransactionID: FormControl<string | null | undefined>,

		/** boolean to indicate if the bank transaction has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** The Bank Transaction ID for the destination account */
		ToBankTransactionID: FormControl<string | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateBankTransferFormGroup() {
		return new FormGroup<BankTransferFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			BankTransferId: new FormControl<string | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			FromBankTransactionID: new FormControl<string | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			ToBankTransactionID: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FromBankAccount {

		/** Account identifier */
		AccountID?: string | null;

		/** Bank account code */
		Code?: string | null;

		/** Bank account name */
		Name?: string | null;
	}
	export interface FromBankAccountFormProperties {

		/** Account identifier */
		AccountID: FormControl<string | null | undefined>,

		/** Bank account code */
		Code: FormControl<string | null | undefined>,

		/** Bank account name */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFromBankAccountFormGroup() {
		return new FormGroup<FromBankAccountFormProperties>({
			AccountID: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ToBankAccount {

		/** Account identifier */
		AccountID?: string | null;

		/** Bank account code */
		Code?: string | null;

		/** Bank account name */
		Name?: string | null;
	}
	export interface ToBankAccountFormProperties {

		/** Account identifier */
		AccountID: FormControl<string | null | undefined>,

		/** Bank account code */
		Code: FormControl<string | null | undefined>,

		/** Bank account name */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateToBankAccountFormGroup() {
		return new FormGroup<ToBankAccountFormProperties>({
			AccountID: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPayments {
		BankAccountName?: string | null;
		BankAccountNumber?: string | null;
		Details?: string | null;
	}
	export interface BatchPaymentsFormProperties {
		BankAccountName: FormControl<string | null | undefined>,
		BankAccountNumber: FormControl<string | null | undefined>,
		Details: FormControl<string | null | undefined>,
	}
	export function CreateBatchPaymentsFormGroup() {
		return new FormGroup<BatchPaymentsFormProperties>({
			BankAccountName: new FormControl<string | null | undefined>(undefined),
			BankAccountNumber: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandingTheme {

		/** Xero identifier */
		BrandingThemeID?: string | null;

		/** UTC timestamp of creation date of branding theme */
		CreatedDateUTC?: Date | null;

		/** Name of branding theme */
		Name?: string | null;

		/** Integer – ranked order of branding theme. The default branding theme has a value of 0 */
		SortOrder?: number | null;
	}
	export interface BrandingThemeFormProperties {

		/** Xero identifier */
		BrandingThemeID: FormControl<string | null | undefined>,

		/** UTC timestamp of creation date of branding theme */
		CreatedDateUTC: FormControl<Date | null | undefined>,

		/** Name of branding theme */
		Name: FormControl<string | null | undefined>,

		/** Integer – ranked order of branding theme. The default branding theme has a value of 0 */
		SortOrder: FormControl<number | null | undefined>,
	}
	export function CreateBrandingThemeFormGroup() {
		return new FormGroup<BrandingThemeFormProperties>({
			BrandingThemeID: new FormControl<string | null | undefined>(undefined),
			CreatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Contact {

		/**
		 * A user defined account number. This can be updated via the API and the Xero UI.
		 * Max length: 50
		 */
		AccountNumber?: string | null;

		/** Default tax type used for contact on AP invoices */
		AccountsPayableTaxType?: string | null;

		/** Default tax type used for contact on AR invoices */
		AccountsReceivableTaxType?: string | null;

		/** Address details for the contact */
		Addresses?: Array<Address>;

		/** The raw AccountsReceivable (sales invoices) and AccountsPayable (bills) outstanding and overdue amounts, not converted to base currency */
		ContactBalances?: Array<ContactBalances>;

		/** Bank account number of contact */
		BankAccountDetails?: string | null;
		BatchPayments?: BatchPayments;
		BrandingTheme?: BrandingTheme;
		ContactGroups?: Array<ContactGroup>;

		/** Xero identifier */
		ContactID?: string | null;
		ContactPersons?: Array<ContactPerson>;

		/** Current status of a contact */
		ContactStatus?: AccountStatus | null;

		/** Default currency for raising invoices against contact */
		DefaultCurrency?: string | null;

		/**
		 * Email address of contact person (umlauts not supported)
		 * Max length: 255
		 */
		EmailAddress?: string | null;

		/**
		 * First name of contact person
		 * Max length: 255
		 */
		FirstName?: string | null;

		/** A boolean to indicate if a contact has an attachment */
		HasAttachments?: boolean | null;

		/** Boolean that describes if a contact has any AR invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts receivable invoice is generated against this contact. */
		IsCustomer?: boolean | null;

		/** Boolean that describes if a contact that has any AP invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts payable invoice is generated against this contact. */
		IsSupplier?: boolean | null;

		/**
		 * Last name of contact person
		 * Max length: 255
		 */
		LastName?: string | null;

		/**
		 * Full name of contact/organisation
		 * Required
		 * Max length: 255
		 */
		Name: string;
		ContactPaymentTerms?: Array<ContactPaymentTerms>;
		Phones?: Array<Phone>;

		/** The default purchases account code for contacts */
		PurchasesDefaultAccountCode?: string | null;
		PurchasesTrackingCategories?: Array<PurchasesTrackingCategory>;

		/** The default sales account code for contacts */
		SalesDefaultAccountCode?: string | null;
		SalesTrackingCategories?: Array<SalesTrackingCategory>;

		/** Skype user name of contact */
		SkypeUserName?: string | null;

		/**
		 * Tax number of contact – this is also known as the ABN (Australia), GST Number (New Zealand), VAT Number (UK) or Tax ID Number (US and global) in the Xero UI depending on which regionalized version of Xero you are using.
		 * Max length: 50
		 */
		TaxNumber?: string | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** Website address for contact */
		Website?: string | null;

		/** Store XeroNetworkKey for contacts. */
		XeroNetworkKey?: string | null;
	}
	export interface ContactFormProperties {

		/**
		 * A user defined account number. This can be updated via the API and the Xero UI.
		 * Max length: 50
		 */
		AccountNumber: FormControl<string | null | undefined>,

		/** Default tax type used for contact on AP invoices */
		AccountsPayableTaxType: FormControl<string | null | undefined>,

		/** Default tax type used for contact on AR invoices */
		AccountsReceivableTaxType: FormControl<string | null | undefined>,

		/** Bank account number of contact */
		BankAccountDetails: FormControl<string | null | undefined>,

		/** Xero identifier */
		ContactID: FormControl<string | null | undefined>,

		/** Current status of a contact */
		ContactStatus: FormControl<AccountStatus | null | undefined>,

		/** Default currency for raising invoices against contact */
		DefaultCurrency: FormControl<string | null | undefined>,

		/**
		 * Email address of contact person (umlauts not supported)
		 * Max length: 255
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * First name of contact person
		 * Max length: 255
		 */
		FirstName: FormControl<string | null | undefined>,

		/** A boolean to indicate if a contact has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Boolean that describes if a contact has any AR invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts receivable invoice is generated against this contact. */
		IsCustomer: FormControl<boolean | null | undefined>,

		/** Boolean that describes if a contact that has any AP invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts payable invoice is generated against this contact. */
		IsSupplier: FormControl<boolean | null | undefined>,

		/**
		 * Last name of contact person
		 * Max length: 255
		 */
		LastName: FormControl<string | null | undefined>,

		/**
		 * Full name of contact/organisation
		 * Required
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/** The default purchases account code for contacts */
		PurchasesDefaultAccountCode: FormControl<string | null | undefined>,

		/** The default sales account code for contacts */
		SalesDefaultAccountCode: FormControl<string | null | undefined>,

		/** Skype user name of contact */
		SkypeUserName: FormControl<string | null | undefined>,

		/**
		 * Tax number of contact – this is also known as the ABN (Australia), GST Number (New Zealand), VAT Number (UK) or Tax ID Number (US and global) in the Xero UI depending on which regionalized version of Xero you are using.
		 * Max length: 50
		 */
		TaxNumber: FormControl<string | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,

		/** Website address for contact */
		Website: FormControl<string | null | undefined>,

		/** Store XeroNetworkKey for contacts. */
		XeroNetworkKey: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			AccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			AccountsPayableTaxType: new FormControl<string | null | undefined>(undefined),
			AccountsReceivableTaxType: new FormControl<string | null | undefined>(undefined),
			BankAccountDetails: new FormControl<string | null | undefined>(undefined),
			ContactID: new FormControl<string | null | undefined>(undefined),
			ContactStatus: new FormControl<AccountStatus | null | undefined>(undefined),
			DefaultCurrency: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			FirstName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			IsCustomer: new FormControl<boolean | null | undefined>(undefined),
			IsSupplier: new FormControl<boolean | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			PurchasesDefaultAccountCode: new FormControl<string | null | undefined>(undefined),
			SalesDefaultAccountCode: new FormControl<string | null | undefined>(undefined),
			SkypeUserName: new FormControl<string | null | undefined>(undefined),
			TaxNumber: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			Website: new FormControl<string | null | undefined>(undefined),
			XeroNetworkKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactBalances {
		AccountsPayable?: ContactAccountsPayable;
		AccountsReceivable?: ContactAccountsReceivable;
	}
	export interface ContactBalancesFormProperties {
	}
	export function CreateContactBalancesFormGroup() {
		return new FormGroup<ContactBalancesFormProperties>({
		});

	}

	export interface ContactAccountsPayable {

		/** AP outstanding balance */
		Outstanding?: number | null;

		/** AP overdue balance */
		Overdue?: number | null;
	}
	export interface ContactAccountsPayableFormProperties {

		/** AP outstanding balance */
		Outstanding: FormControl<number | null | undefined>,

		/** AP overdue balance */
		Overdue: FormControl<number | null | undefined>,
	}
	export function CreateContactAccountsPayableFormGroup() {
		return new FormGroup<ContactAccountsPayableFormProperties>({
			Outstanding: new FormControl<number | null | undefined>(undefined),
			Overdue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContactAccountsReceivable {

		/** AR outstanding balance */
		Outstanding?: number | null;

		/** AR overdue balance */
		Overdue?: number | null;
	}
	export interface ContactAccountsReceivableFormProperties {

		/** AR outstanding balance */
		Outstanding: FormControl<number | null | undefined>,

		/** AR overdue balance */
		Overdue: FormControl<number | null | undefined>,
	}
	export function CreateContactAccountsReceivableFormGroup() {
		return new FormGroup<ContactAccountsReceivableFormProperties>({
			Outstanding: new FormControl<number | null | undefined>(undefined),
			Overdue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContactGroup {

		/** Unique identifier for the contact group */
		ContactGroupID?: string | null;

		/**
		 * Name of the contact group
		 * Required
		 */
		Name: string;

		/** The status of the contact group */
		Status?: ContactGroupStatus | null;
	}
	export interface ContactGroupFormProperties {

		/** Unique identifier for the contact group */
		ContactGroupID: FormControl<string | null | undefined>,

		/**
		 * Name of the contact group
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** The status of the contact group */
		Status: FormControl<ContactGroupStatus | null | undefined>,
	}
	export function CreateContactGroupFormGroup() {
		return new FormGroup<ContactGroupFormProperties>({
			ContactGroupID: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ContactGroupStatus | null | undefined>(undefined),
		});

	}

	export enum ContactGroupStatus { ACTIVE = 0, DELETED = 1 }

	export interface ContactPerson {

		/** Email address of person */
		EmailAddress?: string | null;

		/** First name of person */
		FirstName?: string | null;

		/** Boolean to indicate whether contact should be included on emails with invoices etc. */
		IncludeInEmails?: boolean | null;

		/** Last name of person */
		LastName?: string | null;
	}
	export interface ContactPersonFormProperties {

		/** Email address of person */
		EmailAddress: FormControl<string | null | undefined>,

		/** First name of person */
		FirstName: FormControl<string | null | undefined>,

		/** Boolean to indicate whether contact should be included on emails with invoices etc. */
		IncludeInEmails: FormControl<boolean | null | undefined>,

		/** Last name of person */
		LastName: FormControl<string | null | undefined>,
	}
	export function CreateContactPersonFormGroup() {
		return new FormGroup<ContactPersonFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			IncludeInEmails: new FormControl<boolean | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactPaymentTerms {
		Bills?: ContactBills;
		Sales?: ContactSales;
	}
	export interface ContactPaymentTermsFormProperties {
	}
	export function CreateContactPaymentTermsFormGroup() {
		return new FormGroup<ContactPaymentTermsFormProperties>({
		});

	}

	export interface ContactBills {
		Days?: string | null;
		Type?: ContactBillsType | null;
	}
	export interface ContactBillsFormProperties {
		Days: FormControl<string | null | undefined>,
		Type: FormControl<ContactBillsType | null | undefined>,
	}
	export function CreateContactBillsFormGroup() {
		return new FormGroup<ContactBillsFormProperties>({
			Days: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactBillsType | null | undefined>(undefined),
		});

	}

	export enum ContactBillsType { DAYSAFTERBILLDATE = 0, DAYSAFTERBILLMONTH = 1, OFCURRENTMONTH = 2, OFFOLLOWINGMONTH = 3 }

	export interface ContactSales {
		Days?: string | null;
		Type?: ContactBillsType | null;
	}
	export interface ContactSalesFormProperties {
		Days: FormControl<string | null | undefined>,
		Type: FormControl<ContactBillsType | null | undefined>,
	}
	export function CreateContactSalesFormGroup() {
		return new FormGroup<ContactSalesFormProperties>({
			Days: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactBillsType | null | undefined>(undefined),
		});

	}

	export interface Phone {

		/** Max length: 10 */
		PhoneAreaCode?: string | null;

		/** Max length: 20 */
		PhoneCountryCode?: string | null;

		/** Max length: 50 */
		PhoneNumber?: string | null;

		/** The phone type */
		PhoneType?: PhonePhoneType | null;
	}
	export interface PhoneFormProperties {

		/** Max length: 10 */
		PhoneAreaCode: FormControl<string | null | undefined>,

		/** Max length: 20 */
		PhoneCountryCode: FormControl<string | null | undefined>,

		/** Max length: 50 */
		PhoneNumber: FormControl<string | null | undefined>,

		/** The phone type */
		PhoneType: FormControl<PhonePhoneType | null | undefined>,
	}
	export function CreatePhoneFormGroup() {
		return new FormGroup<PhoneFormProperties>({
			PhoneAreaCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			PhoneCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			PhoneType: new FormControl<PhonePhoneType | null | undefined>(undefined),
		});

	}

	export enum PhonePhoneType { DEFAULT = 0, DDI = 1, MOBILE = 2, FAX = 3 }

	export interface PurchasesTrackingCategory {
		Name?: string | null;
		Option?: string | null;
		TrackingCategoryID?: string | null;
	}
	export interface PurchasesTrackingCategoryFormProperties {
		Name: FormControl<string | null | undefined>,
		Option: FormControl<string | null | undefined>,
		TrackingCategoryID: FormControl<string | null | undefined>,
	}
	export function CreatePurchasesTrackingCategoryFormGroup() {
		return new FormGroup<PurchasesTrackingCategoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Option: new FormControl<string | null | undefined>(undefined),
			TrackingCategoryID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesTrackingCategory {
		Name?: string | null;
		Option?: string | null;
		TrackingCategoryID?: string | null;
	}
	export interface SalesTrackingCategoryFormProperties {
		Name: FormControl<string | null | undefined>,
		Option: FormControl<string | null | undefined>,
		TrackingCategoryID: FormControl<string | null | undefined>,
	}
	export function CreateSalesTrackingCategoryFormGroup() {
		return new FormGroup<SalesTrackingCategoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Option: new FormControl<string | null | undefined>(undefined),
			TrackingCategoryID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Content {

		/**
		 * The raw file content
		 * Required
		 */
		Content1: string;
	}
	export interface ContentFormProperties {

		/**
		 * The raw file content
		 * Required
		 */
		Content1: FormControl<string | null | undefined>,
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
			Content1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreditNote {

		/** Transactions the credit note has been allocated to */
		Allocations?: Array<Allocation>;

		/** The identifier for the branding theme applied to the credit note */
		BrandingThemeID?: string | null;

		/** Required */
		Contact: ContactSummary;

		/** Xero generated unique identifier */
		CreditNoteID?: string | null;

		/** ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings) */
		CreditNoteNumber?: string | null;

		/** Currency used for the Credit Note */
		CurrencyCode?: string | null;

		/** The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used */
		CurrencyRate?: number | null;

		/** The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date?: Date | null;

		/** Date when credit note was fully paid */
		FullyPaidOnDate?: Date | null;

		/** boolean to indicate if a credit note has an attachment */
		HasAttachments?: boolean | null;

		/** How tax is applied on the line items */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Required */
		LineItems: Array<LineItem>;

		/** ACCRECCREDIT only – additional reference number */
		Reference?: string | null;

		/** The remaining credit balance on the Credit Note */
		RemainingCredit?: number | null;

		/** boolean to indicate if a credit note has been sent to a contact via the Xero app (currently read only) */
		SentToContact?: boolean | null;

		/** The Credit Note status */
		Status?: CreditNoteStatus | null;

		/** The subtotal of the credit note excluding taxes */
		SubTotal?: number | null;

		/** The total of the Credit Note(subtotal + total tax) */
		Total?: number | null;

		/** The total tax on the credit note */
		TotalTax?: number | null;

		/**
		 * The type of Credit Note
		 * Required
		 */
		Type: CreditNoteType;

		/** UTC timestamp of last update to the credit note */
		UpdatedDateUTC?: Date | null;
	}
	export interface CreditNoteFormProperties {

		/** The identifier for the branding theme applied to the credit note */
		BrandingThemeID: FormControl<string | null | undefined>,

		/** Xero generated unique identifier */
		CreditNoteID: FormControl<string | null | undefined>,

		/** ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings) */
		CreditNoteNumber: FormControl<string | null | undefined>,

		/** Currency used for the Credit Note */
		CurrencyCode: FormControl<string | null | undefined>,

		/** The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used */
		CurrencyRate: FormControl<number | null | undefined>,

		/** The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date: FormControl<Date | null | undefined>,

		/** Date when credit note was fully paid */
		FullyPaidOnDate: FormControl<Date | null | undefined>,

		/** boolean to indicate if a credit note has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** How tax is applied on the line items */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** ACCRECCREDIT only – additional reference number */
		Reference: FormControl<string | null | undefined>,

		/** The remaining credit balance on the Credit Note */
		RemainingCredit: FormControl<number | null | undefined>,

		/** boolean to indicate if a credit note has been sent to a contact via the Xero app (currently read only) */
		SentToContact: FormControl<boolean | null | undefined>,

		/** The Credit Note status */
		Status: FormControl<CreditNoteStatus | null | undefined>,

		/** The subtotal of the credit note excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** The total of the Credit Note(subtotal + total tax) */
		Total: FormControl<number | null | undefined>,

		/** The total tax on the credit note */
		TotalTax: FormControl<number | null | undefined>,

		/**
		 * The type of Credit Note
		 * Required
		 */
		Type: FormControl<CreditNoteType | null | undefined>,

		/** UTC timestamp of last update to the credit note */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateCreditNoteFormGroup() {
		return new FormGroup<CreditNoteFormProperties>({
			BrandingThemeID: new FormControl<string | null | undefined>(undefined),
			CreditNoteID: new FormControl<string | null | undefined>(undefined),
			CreditNoteNumber: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			FullyPaidOnDate: new FormControl<Date | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			RemainingCredit: new FormControl<number | null | undefined>(undefined),
			SentToContact: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<CreditNoteStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			TotalTax: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<CreditNoteType | null | undefined>(undefined, [Validators.required]),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreditNoteStatus { DRAFT = 0, SUBMITTED = 1, AUTHORISED = 2, PAID = 3, VOIDED = 4, DELETED = 5 }

	export enum CreditNoteType { ACCPAYCREDIT = 0, ACCRECCREDIT = 1 }

	export interface CreditNoteSummary {

		/** The total applied to the invoice */
		AppliedAmount?: number | null;

		/** Xero generated unique identifier */
		CreditNoteID?: string | null;

		/** ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings) */
		CreditNoteNumber?: string | null;

		/** The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date?: Date | null;

		/** The total of the Credit Note(subtotal + total tax) */
		Total?: number | null;
	}
	export interface CreditNoteSummaryFormProperties {

		/** The total applied to the invoice */
		AppliedAmount: FormControl<number | null | undefined>,

		/** Xero generated unique identifier */
		CreditNoteID: FormControl<string | null | undefined>,

		/** ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings) */
		CreditNoteNumber: FormControl<string | null | undefined>,

		/** The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date: FormControl<Date | null | undefined>,

		/** The total of the Credit Note(subtotal + total tax) */
		Total: FormControl<number | null | undefined>,
	}
	export function CreateCreditNoteSummaryFormGroup() {
		return new FormGroup<CreditNoteSummaryFormProperties>({
			AppliedAmount: new FormControl<number | null | undefined>(undefined),
			CreditNoteID: new FormControl<string | null | undefined>(undefined),
			CreditNoteNumber: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Currency {

		/** 3 letter alpha code for the currency */
		Code?: string | null;

		/** Name of Currency */
		Description?: string | null;
	}
	export interface CurrencyFormProperties {

		/** 3 letter alpha code for the currency */
		Code: FormControl<string | null | undefined>,

		/** Name of Currency */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyFormGroup() {
		return new FormGroup<CurrencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Employee {

		/**
		 * The Xero identifier for an employee
		 * e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9
		 */
		EmployeeID?: string | null;
		ExternalLink?: string | null;

		/**
		 * First name of an employee (max length = 255)
		 * Required
		 * Max length: 255
		 */
		FirstName: string;

		/**
		 * Last name of an employee (max length = 255)
		 * Required
		 * Max length: 255
		 */
		LastName: string;

		/** Current status of an employee */
		Status?: AccountStatus | null;
	}
	export interface EmployeeFormProperties {

		/**
		 * The Xero identifier for an employee
		 * e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9
		 */
		EmployeeID: FormControl<string | null | undefined>,
		ExternalLink: FormControl<string | null | undefined>,

		/**
		 * First name of an employee (max length = 255)
		 * Required
		 * Max length: 255
		 */
		FirstName: FormControl<string | null | undefined>,

		/**
		 * Last name of an employee (max length = 255)
		 * Required
		 * Max length: 255
		 */
		LastName: FormControl<string | null | undefined>,

		/** Current status of an employee */
		Status: FormControl<AccountStatus | null | undefined>,
	}
	export function CreateEmployeeFormGroup() {
		return new FormGroup<EmployeeFormProperties>({
			EmployeeID: new FormControl<string | null | undefined>(undefined),
			ExternalLink: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			LastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			Status: new FormControl<AccountStatus | null | undefined>(undefined),
		});

	}

	export interface ExpenseClaim {

		/** The amount due to be paid for an expense claim */
		AmountDue?: number | null;

		/** The amount still to pay for an expense claim */
		AmountPaid?: number | null;

		/** Xero generated unique identifier for an expense claim */
		ExpenseClaimID?: string | null;

		/** The date when the expense claim is due to be paid YYYY-MM-DD */
		PaymentDueDate?: Date | null;

		/** Payments applied to the expense claim */
		Payments?: Array<PaymentSummary>;

		/**
		 * The Receipts in the expense claim
		 * Required
		 */
		Receipts: Array<Receipt>;

		/** The date the expense claim will be reported in Xero YYYY-MM-DD */
		ReportingDate?: Date | null;

		/** Current status of an expense claim */
		Status?: ExpenseClaimStatus | null;

		/** The total of an expense claim being paid */
		Total?: number | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** Required */
		User: User;
	}
	export interface ExpenseClaimFormProperties {

		/** The amount due to be paid for an expense claim */
		AmountDue: FormControl<number | null | undefined>,

		/** The amount still to pay for an expense claim */
		AmountPaid: FormControl<number | null | undefined>,

		/** Xero generated unique identifier for an expense claim */
		ExpenseClaimID: FormControl<string | null | undefined>,

		/** The date when the expense claim is due to be paid YYYY-MM-DD */
		PaymentDueDate: FormControl<Date | null | undefined>,

		/** The date the expense claim will be reported in Xero YYYY-MM-DD */
		ReportingDate: FormControl<Date | null | undefined>,

		/** Current status of an expense claim */
		Status: FormControl<ExpenseClaimStatus | null | undefined>,

		/** The total of an expense claim being paid */
		Total: FormControl<number | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateExpenseClaimFormGroup() {
		return new FormGroup<ExpenseClaimFormProperties>({
			AmountDue: new FormControl<number | null | undefined>(undefined),
			AmountPaid: new FormControl<number | null | undefined>(undefined),
			ExpenseClaimID: new FormControl<string | null | undefined>(undefined),
			PaymentDueDate: new FormControl<Date | null | undefined>(undefined),
			ReportingDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ExpenseClaimStatus | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PaymentSummary {

		/** The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice */
		Amount?: number | null;

		/** Date the payment is being made (YYYY-MM-DD) */
		Date?: Date | null;

		/** The Xero identifier for an Payment */
		PaymentID?: string | null;
	}
	export interface PaymentSummaryFormProperties {

		/** The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice */
		Amount: FormControl<number | null | undefined>,

		/** Date the payment is being made (YYYY-MM-DD) */
		Date: FormControl<Date | null | undefined>,

		/** The Xero identifier for an Payment */
		PaymentID: FormControl<string | null | undefined>,
	}
	export function CreatePaymentSummaryFormGroup() {
		return new FormGroup<PaymentSummaryFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			PaymentID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Receipt {

		/** Required */
		Contact: ContactSummary;

		/**
		 * Date of receipt – YYYY-MM-DD
		 * Required
		 */
		Date: Date;

		/** boolean to indicate if a receipt has an attachment */
		HasAttachments?: boolean | null;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Required */
		Lineitems: Array<LineItem>;

		/** Xero generated unique identifier for receipt */
		ReceiptID?: string | null;

		/** Xero generated sequence number for receipt in current claim for a given user */
		ReceiptNumber?: string | null;

		/** Additional reference number */
		Reference?: string | null;

		/** Current status of receipt */
		Status?: ReceiptStatus | null;

		/** Total of receipt excluding taxes */
		SubTotal?: number | null;

		/** Total of receipt tax inclusive (i.e. SubTotal + TotalTax) */
		Total?: number | null;

		/** Total tax on receipt */
		TotalTax?: number | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** URL link to a source document – shown as “Go to [appName]” in the Xero app */
		Url?: string | null;

		/** Required */
		User: User;
	}
	export interface ReceiptFormProperties {

		/**
		 * Date of receipt – YYYY-MM-DD
		 * Required
		 */
		Date: FormControl<Date | null | undefined>,

		/** boolean to indicate if a receipt has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** Xero generated unique identifier for receipt */
		ReceiptID: FormControl<string | null | undefined>,

		/** Xero generated sequence number for receipt in current claim for a given user */
		ReceiptNumber: FormControl<string | null | undefined>,

		/** Additional reference number */
		Reference: FormControl<string | null | undefined>,

		/** Current status of receipt */
		Status: FormControl<ReceiptStatus | null | undefined>,

		/** Total of receipt excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** Total of receipt tax inclusive (i.e. SubTotal + TotalTax) */
		Total: FormControl<number | null | undefined>,

		/** Total tax on receipt */
		TotalTax: FormControl<number | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,

		/** URL link to a source document – shown as “Go to [appName]” in the Xero app */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateReceiptFormGroup() {
		return new FormGroup<ReceiptFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			ReceiptID: new FormControl<string | null | undefined>(undefined),
			ReceiptNumber: new FormControl<string | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ReceiptStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			TotalTax: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReceiptStatus { DRAFT = 0, SUBMITTED = 1, AUTHORISED = 2, DECLINED = 3 }

	export interface User {

		/** Email address of user */
		EmailAddress?: string | null;

		/** First name of user */
		FirstName?: string | null;

		/** Boolean to indicate if user is the subscriber */
		IsSubscriber?: boolean | null;

		/** Last name of user */
		LastName?: string | null;

		/** User role */
		OrganisationRole?: UserOrganisationRole | null;

		/** Timestamp of last change to user */
		UpdatedDateUTC?: Date | null;

		/** Xero identifier */
		UserID?: string | null;
	}
	export interface UserFormProperties {

		/** Email address of user */
		EmailAddress: FormControl<string | null | undefined>,

		/** First name of user */
		FirstName: FormControl<string | null | undefined>,

		/** Boolean to indicate if user is the subscriber */
		IsSubscriber: FormControl<boolean | null | undefined>,

		/** Last name of user */
		LastName: FormControl<string | null | undefined>,

		/** User role */
		OrganisationRole: FormControl<UserOrganisationRole | null | undefined>,

		/** Timestamp of last change to user */
		UpdatedDateUTC: FormControl<Date | null | undefined>,

		/** Xero identifier */
		UserID: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			IsSubscriber: new FormControl<boolean | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			OrganisationRole: new FormControl<UserOrganisationRole | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			UserID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserOrganisationRole { READONLY = 0, INVOICEONLY = 1, STANDARD = 2, FINANCIALADVISER = 3, MANAGEDCLIENT = 4, CASHBOOKCLIENT = 5 }

	export enum ExpenseClaimStatus { SUBMITTED = 0, AUTHORISED = 1, PAID = 2 }

	export interface ExternalLink {

		/** External link types */
		LinkType?: ExternalLinkLinkType | null;

		/** URL for service */
		Url?: string | null;
	}
	export interface ExternalLinkFormProperties {

		/** External link types */
		LinkType: FormControl<ExternalLinkLinkType | null | undefined>,

		/** URL for service */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateExternalLinkFormGroup() {
		return new FormGroup<ExternalLinkFormProperties>({
			LinkType: new FormControl<ExternalLinkLinkType | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalLinkLinkType { Facebook = 0, GooglePlus = 1, LinkedIn = 2, Twitter = 3, Website = 4 }

	export interface Invoice {

		/** Sum of all credit notes, over-payments and pre-payments applied to invoice */
		AmountCredited?: number | null;

		/** Amount remaining to be paid on invoice */
		AmountDue?: number | null;

		/** Sum of payments received for invoice */
		AmountPaid?: number | null;
		Attachments?: Array<Attachment>;

		/** The identifier for the branding theme applied to the invoice */
		BrandingThemeID?: string | null;

		/** Required */
		Contact: ContactSummary;
		CreditNotes?: Array<CreditNoteSummary>;

		/** The currency that invoice has been raised in */
		CurrencyCode?: string | null;

		/** The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used. */
		CurrencyRate?: number | null;

		/** Date invoice was issued YYYY-MM-DD */
		Date?: Date | null;

		/** Date the invoice is due to be paid YYYY-MM-DD */
		DueDate?: Date | null;

		/** Shown on sales invoices (Accounts Receivable) when this has been set */
		ExpectedPaymentDate?: Date | null;

		/** The date the invoice was fully paid. Only returned on fully paid invoices */
		FullyPaidOnDate?: Date | null;

		/** boolean to indicate if an invoice has an attachment */
		HasAttachments?: boolean | null;

		/** Xero generated unique identifier for invoice */
		InvoiceID?: string | null;

		/**
		 * User defined alphanumeric code for identifying invoices.
		 * - Unique for ACCREC but not for ACCPAY.
		 * - For ACCREC it will auto-generate when left blank.
		 * - For ACCPAY it displays as Reference in the UI.
		 */
		InvoiceNumber?: string | null;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Required */
		LineItems: Array<LineItem>;
		Overpayments?: Array<OverpaymentSummary>;
		Payments?: Array<PaymentSummary>;

		/** Shown on bills (Accounts Payable) when this has been set */
		PlannedPaymentDate?: Date | null;
		Prepayments?: Array<PrepaymentSummary>;

		/** ACCREC only – additional reference number */
		Reference?: string | null;

		/** Boolean to set whether the invoice in the Xero app should be marked as “sent”. This can be set only on invoices that have been approved */
		SentToContact?: boolean | null;

		/** The status of the invoice */
		Status?: CreditNoteStatus | null;

		/** Total of invoice excluding taxes */
		SubTotal?: number | null;

		/** Total of Invoice tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts */
		Total?: number | null;

		/** Total of discounts applied on the invoice line items */
		TotalDiscount?: number | null;

		/** Total tax on the invoice */
		Totaltax?: number | null;

		/**
		 * ACCREC (for sales) or ACCPAY (for bills)
		 * Required
		 */
		Type: InvoiceType;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** URL link to a source document – shown as “Go to [appName]” in the Xero app */
		Url?: string | null;
	}
	export interface InvoiceFormProperties {

		/** Sum of all credit notes, over-payments and pre-payments applied to invoice */
		AmountCredited: FormControl<number | null | undefined>,

		/** Amount remaining to be paid on invoice */
		AmountDue: FormControl<number | null | undefined>,

		/** Sum of payments received for invoice */
		AmountPaid: FormControl<number | null | undefined>,

		/** The identifier for the branding theme applied to the invoice */
		BrandingThemeID: FormControl<string | null | undefined>,

		/** The currency that invoice has been raised in */
		CurrencyCode: FormControl<string | null | undefined>,

		/** The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used. */
		CurrencyRate: FormControl<number | null | undefined>,

		/** Date invoice was issued YYYY-MM-DD */
		Date: FormControl<Date | null | undefined>,

		/** Date the invoice is due to be paid YYYY-MM-DD */
		DueDate: FormControl<Date | null | undefined>,

		/** Shown on sales invoices (Accounts Receivable) when this has been set */
		ExpectedPaymentDate: FormControl<Date | null | undefined>,

		/** The date the invoice was fully paid. Only returned on fully paid invoices */
		FullyPaidOnDate: FormControl<Date | null | undefined>,

		/** boolean to indicate if an invoice has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Xero generated unique identifier for invoice */
		InvoiceID: FormControl<string | null | undefined>,

		/**
		 * User defined alphanumeric code for identifying invoices.
		 * - Unique for ACCREC but not for ACCPAY.
		 * - For ACCREC it will auto-generate when left blank.
		 * - For ACCPAY it displays as Reference in the UI.
		 */
		InvoiceNumber: FormControl<string | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** Shown on bills (Accounts Payable) when this has been set */
		PlannedPaymentDate: FormControl<Date | null | undefined>,

		/** ACCREC only – additional reference number */
		Reference: FormControl<string | null | undefined>,

		/** Boolean to set whether the invoice in the Xero app should be marked as “sent”. This can be set only on invoices that have been approved */
		SentToContact: FormControl<boolean | null | undefined>,

		/** The status of the invoice */
		Status: FormControl<CreditNoteStatus | null | undefined>,

		/** Total of invoice excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** Total of Invoice tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts */
		Total: FormControl<number | null | undefined>,

		/** Total of discounts applied on the invoice line items */
		TotalDiscount: FormControl<number | null | undefined>,

		/** Total tax on the invoice */
		Totaltax: FormControl<number | null | undefined>,

		/**
		 * ACCREC (for sales) or ACCPAY (for bills)
		 * Required
		 */
		Type: FormControl<InvoiceType | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,

		/** URL link to a source document – shown as “Go to [appName]” in the Xero app */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			AmountCredited: new FormControl<number | null | undefined>(undefined),
			AmountDue: new FormControl<number | null | undefined>(undefined),
			AmountPaid: new FormControl<number | null | undefined>(undefined),
			BrandingThemeID: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			DueDate: new FormControl<Date | null | undefined>(undefined),
			ExpectedPaymentDate: new FormControl<Date | null | undefined>(undefined),
			FullyPaidOnDate: new FormControl<Date | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			InvoiceID: new FormControl<string | null | undefined>(undefined),
			InvoiceNumber: new FormControl<string | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			PlannedPaymentDate: new FormControl<Date | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			SentToContact: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<CreditNoteStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			TotalDiscount: new FormControl<number | null | undefined>(undefined),
			Totaltax: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<InvoiceType | null | undefined>(undefined, [Validators.required]),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OverpaymentSummary {

		/** The total applied to the invoice */
		AppliedAmount?: number | null;

		/** The date the overpayment was made YYYY-MM-DD */
		Date?: Date | null;

		/** Xero generated unique identifier */
		OverpaymentID?: string | null;

		/** The total of the Overpayment (subtotal + total tax) */
		Total?: number | null;
	}
	export interface OverpaymentSummaryFormProperties {

		/** The total applied to the invoice */
		AppliedAmount: FormControl<number | null | undefined>,

		/** The date the overpayment was made YYYY-MM-DD */
		Date: FormControl<Date | null | undefined>,

		/** Xero generated unique identifier */
		OverpaymentID: FormControl<string | null | undefined>,

		/** The total of the Overpayment (subtotal + total tax) */
		Total: FormControl<number | null | undefined>,
	}
	export function CreateOverpaymentSummaryFormGroup() {
		return new FormGroup<OverpaymentSummaryFormProperties>({
			AppliedAmount: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			OverpaymentID: new FormControl<string | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PrepaymentSummary {

		/** The total applied to the invoice */
		AppliedAmount?: number | null;

		/** The date the prepayment is issued YYYY-MM-DD. */
		Date?: Date | null;

		/** Xero generated unique identifier */
		PrepaymentID?: string | null;

		/** The total of the Prepayment (subtotal + total tax) */
		Total?: number | null;
	}
	export interface PrepaymentSummaryFormProperties {

		/** The total applied to the invoice */
		AppliedAmount: FormControl<number | null | undefined>,

		/** The date the prepayment is issued YYYY-MM-DD. */
		Date: FormControl<Date | null | undefined>,

		/** Xero generated unique identifier */
		PrepaymentID: FormControl<string | null | undefined>,

		/** The total of the Prepayment (subtotal + total tax) */
		Total: FormControl<number | null | undefined>,
	}
	export function CreatePrepaymentSummaryFormGroup() {
		return new FormGroup<PrepaymentSummaryFormProperties>({
			AppliedAmount: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			PrepaymentID: new FormControl<string | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InvoiceType { ACCREC = 0, ACCPAY = 1 }

	export interface InvoiceSummary {
		Contact?: ContactSummary;

		/** Xero generated unique identifier for invoice */
		InvoiceID?: string | null;

		/**
		 * User defined alphanumeric code for identifying invoices.
		 * - Unique for ACCREC but not for ACCPAY.
		 * - For ACCREC it will auto-generate when left blank.
		 * - For ACCPAY it displays as Reference in the UI.
		 */
		InvoiceNumber?: string | null;

		/** The Invoice Type */
		Type?: InvoiceSummaryType | null;
	}
	export interface InvoiceSummaryFormProperties {

		/** Xero generated unique identifier for invoice */
		InvoiceID: FormControl<string | null | undefined>,

		/**
		 * User defined alphanumeric code for identifying invoices.
		 * - Unique for ACCREC but not for ACCPAY.
		 * - For ACCREC it will auto-generate when left blank.
		 * - For ACCPAY it displays as Reference in the UI.
		 */
		InvoiceNumber: FormControl<string | null | undefined>,

		/** The Invoice Type */
		Type: FormControl<InvoiceSummaryType | null | undefined>,
	}
	export function CreateInvoiceSummaryFormGroup() {
		return new FormGroup<InvoiceSummaryFormProperties>({
			InvoiceID: new FormControl<string | null | undefined>(undefined),
			InvoiceNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InvoiceSummaryType | null | undefined>(undefined),
		});

	}

	export enum InvoiceSummaryType { ACCPAY = 0, ACCREC = 1 }

	export interface Item {

		/**
		 * User defined item code
		 * Required
		 * Max length: 30
		 */
		Code: string;

		/**
		 * The sales description of the item
		 * Max length: 4000
		 */
		Description?: string | null;

		/** The inventory asset account for the item. The account must be of type INVENTORY. The  COGSAccountCode in PurchaseDetails is also required to create a tracked item */
		InventoryAssetAccountCode?: string | null;

		/** Boolean value, defaults to true. When IsPurchased is true the item is available for purchase transactions in the Xero UI. If IsPurchased is updated to false then PurchaseDescription and PurchaseDetails values will be nulled. */
		IsPurchased?: boolean | null;

		/** Boolean value, defaults to true. When IsSold is true the item will be available on sales transactions in the Xero UI. If IsSold is updated to false then Description and SalesDetails values will be nulled. */
		IsSold?: boolean | null;

		/** True for items that are tracked as inventory. An item will be tracked as inventory if the InventoryAssetAccountCode and COGSAccountCode are set. */
		IsTrackedAsInventory?: boolean | null;

		/** The Xero identifier for an Item */
		ItemID?: string | null;

		/**
		 * The name of the item (max length = 50)
		 * Max length: 50
		 */
		Name?: string | null;

		/**
		 * The purchase description of the item
		 * Max length: 4000
		 */
		PurchaseDescription?: string | null;
		PurchaseDetails?: PurchaseDetails;

		/** The quantity of the item on hand */
		QuantityOnHand?: number | null;
		SalesDetails?: SalesDetails;

		/** The value of the item on hand. Calculated using average cost accounting. */
		TotalCostPool?: number | null;

		/** Last modified date in UTC format */
		UpdatedDateUTC?: Date | null;
	}
	export interface ItemFormProperties {

		/**
		 * User defined item code
		 * Required
		 * Max length: 30
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * The sales description of the item
		 * Max length: 4000
		 */
		Description: FormControl<string | null | undefined>,

		/** The inventory asset account for the item. The account must be of type INVENTORY. The  COGSAccountCode in PurchaseDetails is also required to create a tracked item */
		InventoryAssetAccountCode: FormControl<string | null | undefined>,

		/** Boolean value, defaults to true. When IsPurchased is true the item is available for purchase transactions in the Xero UI. If IsPurchased is updated to false then PurchaseDescription and PurchaseDetails values will be nulled. */
		IsPurchased: FormControl<boolean | null | undefined>,

		/** Boolean value, defaults to true. When IsSold is true the item will be available on sales transactions in the Xero UI. If IsSold is updated to false then Description and SalesDetails values will be nulled. */
		IsSold: FormControl<boolean | null | undefined>,

		/** True for items that are tracked as inventory. An item will be tracked as inventory if the InventoryAssetAccountCode and COGSAccountCode are set. */
		IsTrackedAsInventory: FormControl<boolean | null | undefined>,

		/** The Xero identifier for an Item */
		ItemID: FormControl<string | null | undefined>,

		/**
		 * The name of the item (max length = 50)
		 * Max length: 50
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The purchase description of the item
		 * Max length: 4000
		 */
		PurchaseDescription: FormControl<string | null | undefined>,

		/** The quantity of the item on hand */
		QuantityOnHand: FormControl<number | null | undefined>,

		/** The value of the item on hand. Calculated using average cost accounting. */
		TotalCostPool: FormControl<number | null | undefined>,

		/** Last modified date in UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(30)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000)]),
			InventoryAssetAccountCode: new FormControl<string | null | undefined>(undefined),
			IsPurchased: new FormControl<boolean | null | undefined>(undefined),
			IsSold: new FormControl<boolean | null | undefined>(undefined),
			IsTrackedAsInventory: new FormControl<boolean | null | undefined>(undefined),
			ItemID: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			PurchaseDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000)]),
			QuantityOnHand: new FormControl<number | null | undefined>(undefined),
			TotalCostPool: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PurchaseDetails {

		/** Default account code to be used for purchase of non-tracked items. Not applicable to the purchase details of tracked items */
		AccountCode?: string | null;

		/** Cost of goods sold account. Only applicable to the purchase details of tracked items. */
		COGSAccountCode?: string | null;

		/** Used as an override if the default Tax Code for the selected AccountCode is not correct. */
		TaxType?: string | null;

		/** Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request. */
		UnitPrice?: number | null;
	}
	export interface PurchaseDetailsFormProperties {

		/** Default account code to be used for purchase of non-tracked items. Not applicable to the purchase details of tracked items */
		AccountCode: FormControl<string | null | undefined>,

		/** Cost of goods sold account. Only applicable to the purchase details of tracked items. */
		COGSAccountCode: FormControl<string | null | undefined>,

		/** Used as an override if the default Tax Code for the selected AccountCode is not correct. */
		TaxType: FormControl<string | null | undefined>,

		/** Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request. */
		UnitPrice: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseDetailsFormGroup() {
		return new FormGroup<PurchaseDetailsFormProperties>({
			AccountCode: new FormControl<string | null | undefined>(undefined),
			COGSAccountCode: new FormControl<string | null | undefined>(undefined),
			TaxType: new FormControl<string | null | undefined>(undefined),
			UnitPrice: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SalesDetails {

		/** Default account code to be used for sale. */
		AccountCode?: string | null;

		/** Used as an override if the default Tax Code for the selected AccountCode is not correct . */
		TaxType?: string | null;

		/** Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request. */
		UnitPrice?: number | null;
	}
	export interface SalesDetailsFormProperties {

		/** Default account code to be used for sale. */
		AccountCode: FormControl<string | null | undefined>,

		/** Used as an override if the default Tax Code for the selected AccountCode is not correct . */
		TaxType: FormControl<string | null | undefined>,

		/** Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request. */
		UnitPrice: FormControl<number | null | undefined>,
	}
	export function CreateSalesDetailsFormGroup() {
		return new FormGroup<SalesDetailsFormProperties>({
			AccountCode: new FormControl<string | null | undefined>(undefined),
			TaxType: new FormControl<string | null | undefined>(undefined),
			UnitPrice: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Journal {

		/** Created date UTC format */
		CreatedDateUTC?: Date | null;

		/** Date the journal was posted */
		JournalDate?: Date | null;

		/** Xero identifier */
		JournalID?: string | null;
		JournalLines?: Array<JournalLine>;

		/** Xero generated journal number */
		JournalNumber?: string | null;

		/** The identifier for the source transaction (e.g. InvoiceID) */
		SourceID?: string | null;

		/** The journal source type. The type of transaction that created the journal */
		SourceType?: JournalSourceType | null;
	}
	export interface JournalFormProperties {

		/** Created date UTC format */
		CreatedDateUTC: FormControl<Date | null | undefined>,

		/** Date the journal was posted */
		JournalDate: FormControl<Date | null | undefined>,

		/** Xero identifier */
		JournalID: FormControl<string | null | undefined>,

		/** Xero generated journal number */
		JournalNumber: FormControl<string | null | undefined>,

		/** The identifier for the source transaction (e.g. InvoiceID) */
		SourceID: FormControl<string | null | undefined>,

		/** The journal source type. The type of transaction that created the journal */
		SourceType: FormControl<JournalSourceType | null | undefined>,
	}
	export function CreateJournalFormGroup() {
		return new FormGroup<JournalFormProperties>({
			CreatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			JournalDate: new FormControl<Date | null | undefined>(undefined),
			JournalID: new FormControl<string | null | undefined>(undefined),
			JournalNumber: new FormControl<string | null | undefined>(undefined),
			SourceID: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<JournalSourceType | null | undefined>(undefined),
		});

	}

	export interface JournalLine {

		/** Account Code */
		AccountCode?: string | null;

		/** Description for journal line */
		Description?: string | null;

		/** Total for line. Debits are positive, credits are negative value */
		LineAmount?: number | null;

		/** The calculated tax amount based on the TaxType and LineAmount */
		TaxAmount?: number | null;

		/** Used as an override if the default Tax Code for the selected AccountCode is not correct. */
		TaxType?: string | null;

		/** Optional Tracking Category. Any JournalLine can have a maximum of 2 TrackingCategory elements. */
		Tracking?: Array<TrackingCategory>;
	}
	export interface JournalLineFormProperties {

		/** Account Code */
		AccountCode: FormControl<string | null | undefined>,

		/** Description for journal line */
		Description: FormControl<string | null | undefined>,

		/** Total for line. Debits are positive, credits are negative value */
		LineAmount: FormControl<number | null | undefined>,

		/** The calculated tax amount based on the TaxType and LineAmount */
		TaxAmount: FormControl<number | null | undefined>,

		/** Used as an override if the default Tax Code for the selected AccountCode is not correct. */
		TaxType: FormControl<string | null | undefined>,
	}
	export function CreateJournalLineFormGroup() {
		return new FormGroup<JournalLineFormProperties>({
			AccountCode: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LineAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingCategory {

		/**
		 * The name of the tracking category e.g. Department, Region (max length = 100)
		 * Max length: 100
		 */
		Name?: string | null;
		Options?: Array<TrackingOption>;

		/** The status of a tracking category */
		Status?: AccountStatus | null;

		/** The Xero identifier for a tracking categorye.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		TrackingCategoryID?: string | null;
	}
	export interface TrackingCategoryFormProperties {

		/**
		 * The name of the tracking category e.g. Department, Region (max length = 100)
		 * Max length: 100
		 */
		Name: FormControl<string | null | undefined>,

		/** The status of a tracking category */
		Status: FormControl<AccountStatus | null | undefined>,

		/** The Xero identifier for a tracking categorye.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		TrackingCategoryID: FormControl<string | null | undefined>,
	}
	export function CreateTrackingCategoryFormGroup() {
		return new FormGroup<TrackingCategoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Status: new FormControl<AccountStatus | null | undefined>(undefined),
			TrackingCategoryID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingOption {

		/**
		 * The name of the tracking option e.g. Marketing, East (max length = 50)
		 * Max length: 50
		 */
		Name?: string | null;

		/** The status of a tracking option */
		Status?: AccountStatus | null;

		/** The Xero identifier for a tracking optione.g. ae777a87-5ef3-4fa0-a4f0-d10e1f13073a */
		TrackingOptionID?: string | null;
	}
	export interface TrackingOptionFormProperties {

		/**
		 * The name of the tracking option e.g. Marketing, East (max length = 50)
		 * Max length: 50
		 */
		Name: FormControl<string | null | undefined>,

		/** The status of a tracking option */
		Status: FormControl<AccountStatus | null | undefined>,

		/** The Xero identifier for a tracking optione.g. ae777a87-5ef3-4fa0-a4f0-d10e1f13073a */
		TrackingOptionID: FormControl<string | null | undefined>,
	}
	export function CreateTrackingOptionFormGroup() {
		return new FormGroup<TrackingOptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			Status: new FormControl<AccountStatus | null | undefined>(undefined),
			TrackingOptionID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JournalSourceType { ACCREC = 0, ACCPAY = 1, ACCPAYCREDIT = 2, ACCRECPAYMENT = 3, ACCPAYPAYMENT = 4, ARCREDITPAYMENT = 5, APCREDITPAYMENT = 6, CASHREC = 7, CASHPAID = 8, TRANSFER = 9, ARPREPAYMENT = 10, APPREPAYMENT = 11, AROVERPAYMENT = 12, APOVERPAYMENT = 13, EXPCLAIM = 14, EXPPAYMENT = 15, MANJOURNAL = 16, PAYSLIP = 17, WAGEPAYABLE = 18, INTEGRATEDPAYROLLPE = 19, INTEGRATEDPAYROLLPT = 20, EXTERNALSPENDMONEY = 21, INTEGRATEDPAYROLLPTPAYMENT = 22, INTEGRATEDPAYROLLCN = 23 }

	export interface LinkedTransaction {

		/** Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED. */
		ContactID?: string | null;

		/** The Xero identifier for an Linked Transaction e.g. /LinkedTransactions/297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		LinkedTransactionID?: string | null;

		/** The line item identifier from the source transaction. */
		SourceLineItemID?: string | null;

		/** Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice */
		SourceTransactionID?: string | null;

		/** The Type of the source tranasction. This will be ACCPAY if the linked transaction was created from an invoice and SPEND if it was created from a bank transaction. */
		SourceTransactionTypeCode?: string | null;

		/** Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED. */
		Status?: LinkedTransactionStatus | null;

		/** The line item identifier from the target transaction. It is possible to link multiple billable expenses to the same TargetLineItemID. */
		TargetLineItemID?: string | null;

		/** Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice */
		TargetTransactionID?: string | null;

		/** This will always be BILLABLEEXPENSE. More types may be added in future. */
		Type?: LinkedTransactionType | null;

		/** The last modified date in UTC format */
		UpdatedDateUTC?: Date | null;
	}
	export interface LinkedTransactionFormProperties {

		/** Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED. */
		ContactID: FormControl<string | null | undefined>,

		/** The Xero identifier for an Linked Transaction e.g. /LinkedTransactions/297c2dc5-cc47-4afd-8ec8-74990b8761e9 */
		LinkedTransactionID: FormControl<string | null | undefined>,

		/** The line item identifier from the source transaction. */
		SourceLineItemID: FormControl<string | null | undefined>,

		/** Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice */
		SourceTransactionID: FormControl<string | null | undefined>,

		/** The Type of the source tranasction. This will be ACCPAY if the linked transaction was created from an invoice and SPEND if it was created from a bank transaction. */
		SourceTransactionTypeCode: FormControl<string | null | undefined>,

		/** Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED. */
		Status: FormControl<LinkedTransactionStatus | null | undefined>,

		/** The line item identifier from the target transaction. It is possible to link multiple billable expenses to the same TargetLineItemID. */
		TargetLineItemID: FormControl<string | null | undefined>,

		/** Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice */
		TargetTransactionID: FormControl<string | null | undefined>,

		/** This will always be BILLABLEEXPENSE. More types may be added in future. */
		Type: FormControl<LinkedTransactionType | null | undefined>,

		/** The last modified date in UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateLinkedTransactionFormGroup() {
		return new FormGroup<LinkedTransactionFormProperties>({
			ContactID: new FormControl<string | null | undefined>(undefined),
			LinkedTransactionID: new FormControl<string | null | undefined>(undefined),
			SourceLineItemID: new FormControl<string | null | undefined>(undefined),
			SourceTransactionID: new FormControl<string | null | undefined>(undefined),
			SourceTransactionTypeCode: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LinkedTransactionStatus | null | undefined>(undefined),
			TargetLineItemID: new FormControl<string | null | undefined>(undefined),
			TargetTransactionID: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<LinkedTransactionType | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LinkedTransactionStatus { DRAFT = 0, APPROVED = 1, ONDRAFT = 2, BILLED = 3, VOIDED = 4 }

	export enum LinkedTransactionType { BILLABLEEXPENSE = 0 }

	export interface ManualJournal {

		/** Date journal was posted – YYYY-MM-DD */
		Date?: Date | null;

		/** Boolean to indicate if a manual journal has an attachment */
		HasAttachments?: boolean | null;

		/** The Xero identifier for a Manual Journal */
		JournalID?: string | null;

		/**
		 * See JournalLines
		 * Required
		 */
		JournalLines: Array<JournalLine>;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/**
		 * Description of journal being posted
		 * Required
		 */
		Narration: string;

		/** Boolean – default is true if not specified */
		ShowOnCashBasisReports?: boolean | null;

		/** Manual Journal Status Codes */
		Status?: ManualJournalStatus | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;

		/** Url link to a source document – shown as “Go to [appName]” in the Xero app */
		Url?: string | null;
	}
	export interface ManualJournalFormProperties {

		/** Date journal was posted – YYYY-MM-DD */
		Date: FormControl<Date | null | undefined>,

		/** Boolean to indicate if a manual journal has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** The Xero identifier for a Manual Journal */
		JournalID: FormControl<string | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/**
		 * Description of journal being posted
		 * Required
		 */
		Narration: FormControl<string | null | undefined>,

		/** Boolean – default is true if not specified */
		ShowOnCashBasisReports: FormControl<boolean | null | undefined>,

		/** Manual Journal Status Codes */
		Status: FormControl<ManualJournalStatus | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,

		/** Url link to a source document – shown as “Go to [appName]” in the Xero app */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateManualJournalFormGroup() {
		return new FormGroup<ManualJournalFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			JournalID: new FormControl<string | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			Narration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShowOnCashBasisReports: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<ManualJournalStatus | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManualJournalStatus { DRAFT = 0, POSTED = 1, DELETED = 2, VOIDED = 3 }

	export interface OnlineInvoice {

		/** The URL to view the online invoice */
		OnlineInvoiceUrl?: string | null;
	}
	export interface OnlineInvoiceFormProperties {

		/** The URL to view the online invoice */
		OnlineInvoiceUrl: FormControl<string | null | undefined>,
	}
	export function CreateOnlineInvoiceFormGroup() {
		return new FormGroup<OnlineInvoiceFormProperties>({
			OnlineInvoiceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Organisation {

		/** Display a unique key used for Xero-to-Xero transactions */
		APIKey?: string | null;

		/** Address details for organisation */
		Addresses?: Array<Address>;

		/** Default currency for organisation. See ISO 4217 Currency Codes */
		BaseCurrency?: string | null;

		/** Country code for organisation. See ISO 3166-2 Country Codes */
		CountryCode?: string | null;

		/** Timestamp when the organisation was created in Xero */
		CreatedDateUTC?: Date | null;

		/** The default for LineAmountTypes on purchase transactions */
		DefaultPurchasesTax?: BankTransactionLineAmountTypes | null;

		/** The default for LineAmountTypes on sales transactions */
		DefaultSalesTax?: BankTransactionLineAmountTypes | null;

		/** Shown if set */
		EndOfYearLockDate?: Date | null;

		/** Organisation profile links for popular services such as Facebook, Twitter, GooglePlus and LinkedIn. You can also add link to your website here. Shown if Organisation settings  is updated in Xero. See ExternalLinks below */
		ExternalLinks?: Array<ExternalLink>;

		/** Calendar day e.g. 0-31 */
		FinancialYearEndDay?: string | null;

		/** Calendar Month e.g. 1-12 */
		FinancialYearEndMonth?: string | null;

		/** Boolean to describe if organisation is a demo company. */
		IsDemoCompany?: boolean | null;

		/** Organisation name shown on Reports */
		LegalName?: string | null;

		/** Description of business type as defined in Organisation settings */
		LineOfBusiness?: string | null;

		/** Display name of organisation shown in Xero */
		Name?: string | null;

		/** Organisation Type */
		OrganisationEntityType?: OrganisationOrganisationEntityType | null;

		/** Will be set to ACTIVE if you can connect to organisation via the Xero API */
		OrganisationStatus?: OrganisationOrganisationStatus | null;

		/** Organisation Type */
		OrganisationType?: OrganisationOrganisationEntityType | null;
		PaymentTerms?: any;

		/** Boolean to describe if organisation is registered with a local tax authority i.e. true, false */
		PaysTax?: boolean | null;

		/** Shown if set */
		PeriodLockDate?: Date | null;

		/** Phones details for organisation */
		Phones?: Array<Phone>;

		/** Shows for New Zealand, Australian and UK organisations */
		RegistrationNumber?: string | null;

		/** The accounting basis used for tax returns */
		SalesTaxBasis?: string | null;

		/** The frequency with which tax returns are processed. See Sales Tax Period */
		SalesTaxPeriod?: string | null;

		/** A unique identifier for the organisation. Used for deep linking into Xero. */
		ShortCode?: string | null;

		/** Shown if set. Displays in the Xero UI as Tax File Number (AU), GST Number (NZ), VAT Number (UK) and Tax ID Number (US & Global). */
		TaxNumber?: string | null;

		/** Timezone specifications */
		Timezone?: string | null;

		/** Version Types */
		Version?: OrganisationVersion | null;
	}
	export interface OrganisationFormProperties {

		/** Display a unique key used for Xero-to-Xero transactions */
		APIKey: FormControl<string | null | undefined>,

		/** Default currency for organisation. See ISO 4217 Currency Codes */
		BaseCurrency: FormControl<string | null | undefined>,

		/** Country code for organisation. See ISO 3166-2 Country Codes */
		CountryCode: FormControl<string | null | undefined>,

		/** Timestamp when the organisation was created in Xero */
		CreatedDateUTC: FormControl<Date | null | undefined>,

		/** The default for LineAmountTypes on purchase transactions */
		DefaultPurchasesTax: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** The default for LineAmountTypes on sales transactions */
		DefaultSalesTax: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** Shown if set */
		EndOfYearLockDate: FormControl<Date | null | undefined>,

		/** Calendar day e.g. 0-31 */
		FinancialYearEndDay: FormControl<string | null | undefined>,

		/** Calendar Month e.g. 1-12 */
		FinancialYearEndMonth: FormControl<string | null | undefined>,

		/** Boolean to describe if organisation is a demo company. */
		IsDemoCompany: FormControl<boolean | null | undefined>,

		/** Organisation name shown on Reports */
		LegalName: FormControl<string | null | undefined>,

		/** Description of business type as defined in Organisation settings */
		LineOfBusiness: FormControl<string | null | undefined>,

		/** Display name of organisation shown in Xero */
		Name: FormControl<string | null | undefined>,

		/** Organisation Type */
		OrganisationEntityType: FormControl<OrganisationOrganisationEntityType | null | undefined>,

		/** Will be set to ACTIVE if you can connect to organisation via the Xero API */
		OrganisationStatus: FormControl<OrganisationOrganisationStatus | null | undefined>,

		/** Organisation Type */
		OrganisationType: FormControl<OrganisationOrganisationEntityType | null | undefined>,
		PaymentTerms: FormControl<any | null | undefined>,

		/** Boolean to describe if organisation is registered with a local tax authority i.e. true, false */
		PaysTax: FormControl<boolean | null | undefined>,

		/** Shown if set */
		PeriodLockDate: FormControl<Date | null | undefined>,

		/** Shows for New Zealand, Australian and UK organisations */
		RegistrationNumber: FormControl<string | null | undefined>,

		/** The accounting basis used for tax returns */
		SalesTaxBasis: FormControl<string | null | undefined>,

		/** The frequency with which tax returns are processed. See Sales Tax Period */
		SalesTaxPeriod: FormControl<string | null | undefined>,

		/** A unique identifier for the organisation. Used for deep linking into Xero. */
		ShortCode: FormControl<string | null | undefined>,

		/** Shown if set. Displays in the Xero UI as Tax File Number (AU), GST Number (NZ), VAT Number (UK) and Tax ID Number (US & Global). */
		TaxNumber: FormControl<string | null | undefined>,

		/** Timezone specifications */
		Timezone: FormControl<string | null | undefined>,

		/** Version Types */
		Version: FormControl<OrganisationVersion | null | undefined>,
	}
	export function CreateOrganisationFormGroup() {
		return new FormGroup<OrganisationFormProperties>({
			APIKey: new FormControl<string | null | undefined>(undefined),
			BaseCurrency: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			CreatedDateUTC: new FormControl<Date | null | undefined>(undefined),
			DefaultPurchasesTax: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			DefaultSalesTax: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			EndOfYearLockDate: new FormControl<Date | null | undefined>(undefined),
			FinancialYearEndDay: new FormControl<string | null | undefined>(undefined),
			FinancialYearEndMonth: new FormControl<string | null | undefined>(undefined),
			IsDemoCompany: new FormControl<boolean | null | undefined>(undefined),
			LegalName: new FormControl<string | null | undefined>(undefined),
			LineOfBusiness: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OrganisationEntityType: new FormControl<OrganisationOrganisationEntityType | null | undefined>(undefined),
			OrganisationStatus: new FormControl<OrganisationOrganisationStatus | null | undefined>(undefined),
			OrganisationType: new FormControl<OrganisationOrganisationEntityType | null | undefined>(undefined),
			PaymentTerms: new FormControl<any | null | undefined>(undefined),
			PaysTax: new FormControl<boolean | null | undefined>(undefined),
			PeriodLockDate: new FormControl<Date | null | undefined>(undefined),
			RegistrationNumber: new FormControl<string | null | undefined>(undefined),
			SalesTaxBasis: new FormControl<string | null | undefined>(undefined),
			SalesTaxPeriod: new FormControl<string | null | undefined>(undefined),
			ShortCode: new FormControl<string | null | undefined>(undefined),
			TaxNumber: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<OrganisationVersion | null | undefined>(undefined),
		});

	}

	export enum OrganisationOrganisationEntityType { COMPANY = 0, CHARITY = 1, CLUBSOCIETY = 2, PARTNERSHIP = 3, PRACTICE = 4, PERSON = 5, SOLETRADER = 6, TRUST = 7 }

	export enum OrganisationOrganisationStatus { ACTIVE = 0 }

	export enum OrganisationVersion { AU = 0, NZ = 1, GLOBAL = 2, UK = 3, US = 4, AUONRAMP = 5, NZONRAMP = 6, GLOBALONRAMP = 7, UKONRAMP = 8, USONRAMP = 9 }

	export interface Overpayment {

		/** See Allocations */
		Allocations?: Array<Allocation>;
		Contact?: ContactSummary;

		/** Currency used for the overpayment */
		CurrencyCode?: string | null;

		/** The currency rate for a multicurrency overpayment. If no rate is specified, the XE.com day rate is used */
		CurrencyRate?: number | null;

		/** The date the overpayment is created YYYY-MM-DD */
		Date?: Date | null;

		/** boolean to indicate if a overpayment has an attachment */
		HasAttachments?: boolean | null;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Overpayment Line Items */
		LineItems?: Array<LineItem>;

		/** Xero generated unique identifier */
		OverpaymentID?: string | null;
		Payments?: Array<PaymentSummary>;

		/** The remaining credit balance on the overpayment */
		RemainingCredit?: number | null;

		/** Overpayment Status */
		Status?: OverpaymentStatus | null;

		/** The subtotal of the overpayment excluding taxes */
		SubTotal?: number | null;

		/** The total of the overpayment (subtotal + total tax) */
		Total?: number | null;

		/** The total tax on the overpayment */
		TotalTax?: number | null;

		/** The Overpayment Type */
		Type?: OverpaymentType | null;

		/** UTC timestamp of last update to the overpayment */
		UpdatedDateUTC?: Date | null;
	}
	export interface OverpaymentFormProperties {

		/** Currency used for the overpayment */
		CurrencyCode: FormControl<string | null | undefined>,

		/** The currency rate for a multicurrency overpayment. If no rate is specified, the XE.com day rate is used */
		CurrencyRate: FormControl<number | null | undefined>,

		/** The date the overpayment is created YYYY-MM-DD */
		Date: FormControl<Date | null | undefined>,

		/** boolean to indicate if a overpayment has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** Xero generated unique identifier */
		OverpaymentID: FormControl<string | null | undefined>,

		/** The remaining credit balance on the overpayment */
		RemainingCredit: FormControl<number | null | undefined>,

		/** Overpayment Status */
		Status: FormControl<OverpaymentStatus | null | undefined>,

		/** The subtotal of the overpayment excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** The total of the overpayment (subtotal + total tax) */
		Total: FormControl<number | null | undefined>,

		/** The total tax on the overpayment */
		TotalTax: FormControl<number | null | undefined>,

		/** The Overpayment Type */
		Type: FormControl<OverpaymentType | null | undefined>,

		/** UTC timestamp of last update to the overpayment */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateOverpaymentFormGroup() {
		return new FormGroup<OverpaymentFormProperties>({
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			OverpaymentID: new FormControl<string | null | undefined>(undefined),
			RemainingCredit: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OverpaymentStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			TotalTax: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<OverpaymentType | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OverpaymentStatus { AUTHORISED = 0, PAID = 1, VOIDED = 2 }

	export enum OverpaymentType { 'RECEIVE-OVERPAYMENT' = 0, 'SPEND-OVERPAYMENT' = 1 }

	export interface Payment {

		/** The Account the payment was made from */
		Account?: PaymentAccount;

		/** The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice */
		Amount?: number | null;
		CreditNote?: CreditNoteSummary;

		/** Exchange rate when payment is received. Only used for non base currency invoices and credit notes. */
		CurrencyRate?: number | null;

		/** Date the payment is being made (YYYY-MM-DD) */
		Date?: Date | null;
		Invoice?: InvoiceSummary;

		/** An optional parameter for the payment. A boolean indicating whether you would like the payment to be created as reconciled when using PUT, or whether a payment has been reconciled when using GET */
		IsReconciled?: boolean | null;
		Overpayment?: OverpaymentSummary;

		/** The Xero identifier for an Payment */
		PaymentID?: string | null;

		/** The Payment Type. */
		PaymentType?: PaymentPaymentType | null;
		Prepayment?: PrepaymentSummary;

		/** An optional description for the payment */
		Reference?: string | null;

		/** The status of the payment. */
		Status?: BankTransactionStatus | null;

		/** UTC timestamp of last update to the payment */
		UpdatedDateUTC?: Date | null;
	}
	export interface PaymentFormProperties {

		/** The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice */
		Amount: FormControl<number | null | undefined>,

		/** Exchange rate when payment is received. Only used for non base currency invoices and credit notes. */
		CurrencyRate: FormControl<number | null | undefined>,

		/** Date the payment is being made (YYYY-MM-DD) */
		Date: FormControl<Date | null | undefined>,

		/** An optional parameter for the payment. A boolean indicating whether you would like the payment to be created as reconciled when using PUT, or whether a payment has been reconciled when using GET */
		IsReconciled: FormControl<boolean | null | undefined>,

		/** The Xero identifier for an Payment */
		PaymentID: FormControl<string | null | undefined>,

		/** The Payment Type. */
		PaymentType: FormControl<PaymentPaymentType | null | undefined>,

		/** An optional description for the payment */
		Reference: FormControl<string | null | undefined>,

		/** The status of the payment. */
		Status: FormControl<BankTransactionStatus | null | undefined>,

		/** UTC timestamp of last update to the payment */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			IsReconciled: new FormControl<boolean | null | undefined>(undefined),
			PaymentID: new FormControl<string | null | undefined>(undefined),
			PaymentType: new FormControl<PaymentPaymentType | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<BankTransactionStatus | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PaymentAccount {

		/** Identifier for the account */
		AccountID?: string | null;

		/** Account Code */
		Code?: string | null;
	}
	export interface PaymentAccountFormProperties {

		/** Identifier for the account */
		AccountID: FormControl<string | null | undefined>,

		/** Account Code */
		Code: FormControl<string | null | undefined>,
	}
	export function CreatePaymentAccountFormGroup() {
		return new FormGroup<PaymentAccountFormProperties>({
			AccountID: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentPaymentType { ACCRECPAYMENT = 0, ACCPAYPAYMENT = 1, ARCREDITPAYMENT = 2, APCREDITPAYMENT = 3, AROVERPAYMENTPAYMENT = 4, ARPREPAYMENTPAYMENT = 5, APPREPAYMENTPAYMENT = 6, APOVERPAYMENTPAYMENT = 7 }

	export interface PaymentTermsElement {
		Bills?: PaymentTermsElementBills;
		Sales?: PaymentTermsElementSales;
	}
	export interface PaymentTermsElementFormProperties {
	}
	export function CreatePaymentTermsElementFormGroup() {
		return new FormGroup<PaymentTermsElementFormProperties>({
		});

	}

	export interface PaymentTermsElementBills {
		Days?: string | null;
		Type?: ContactBillsType | null;
	}
	export interface PaymentTermsElementBillsFormProperties {
		Days: FormControl<string | null | undefined>,
		Type: FormControl<ContactBillsType | null | undefined>,
	}
	export function CreatePaymentTermsElementBillsFormGroup() {
		return new FormGroup<PaymentTermsElementBillsFormProperties>({
			Days: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactBillsType | null | undefined>(undefined),
		});

	}

	export interface PaymentTermsElementSales {
		Days?: string | null;
		Type?: ContactBillsType | null;
	}
	export interface PaymentTermsElementSalesFormProperties {
		Days: FormControl<string | null | undefined>,
		Type: FormControl<ContactBillsType | null | undefined>,
	}
	export function CreatePaymentTermsElementSalesFormGroup() {
		return new FormGroup<PaymentTermsElementSalesFormProperties>({
			Days: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactBillsType | null | undefined>(undefined),
		});

	}

	export interface Prepayment {
		Allocations?: Array<Allocation>;
		Contact?: ContactSummary;

		/** Currency used for the prepayment */
		CurrencyCode?: string | null;

		/** The currency rate for a multicurrency prepayment. If no rate is specified, the XE.com day rate is used */
		CurrencyRate?: number | null;

		/** The date the prepayment is created YYYY-MM-DD */
		Date?: Date | null;

		/** boolean to indicate if a prepayment has an attachment */
		HasAttachments?: boolean | null;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;
		LineItems?: Array<LineItem>;

		/** Xero generated unique identifier */
		PrepaymentID?: string | null;

		/** The remaining credit balance on the prepayment */
		RemainingCredit?: number | null;

		/** Prepayment Status Codes */
		Status?: OverpaymentStatus | null;

		/** The subtotal of the prepayment excluding taxes */
		SubTotal?: number | null;

		/** The total of the prepayment(subtotal + total tax) */
		Total?: number | null;

		/** The total tax on the prepayment */
		TotalTax?: number | null;

		/** Prepayment Types */
		Type?: PrepaymentType | null;

		/** UTC timestamp of last update to the prepayment */
		UpdatedDateUTC?: Date | null;
	}
	export interface PrepaymentFormProperties {

		/** Currency used for the prepayment */
		CurrencyCode: FormControl<string | null | undefined>,

		/** The currency rate for a multicurrency prepayment. If no rate is specified, the XE.com day rate is used */
		CurrencyRate: FormControl<number | null | undefined>,

		/** The date the prepayment is created YYYY-MM-DD */
		Date: FormControl<Date | null | undefined>,

		/** boolean to indicate if a prepayment has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** Xero generated unique identifier */
		PrepaymentID: FormControl<string | null | undefined>,

		/** The remaining credit balance on the prepayment */
		RemainingCredit: FormControl<number | null | undefined>,

		/** Prepayment Status Codes */
		Status: FormControl<OverpaymentStatus | null | undefined>,

		/** The subtotal of the prepayment excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** The total of the prepayment(subtotal + total tax) */
		Total: FormControl<number | null | undefined>,

		/** The total tax on the prepayment */
		TotalTax: FormControl<number | null | undefined>,

		/** Prepayment Types */
		Type: FormControl<PrepaymentType | null | undefined>,

		/** UTC timestamp of last update to the prepayment */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreatePrepaymentFormGroup() {
		return new FormGroup<PrepaymentFormProperties>({
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			PrepaymentID: new FormControl<string | null | undefined>(undefined),
			RemainingCredit: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OverpaymentStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			TotalTax: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<PrepaymentType | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PrepaymentType { 'RECEIVE-PREPAYMENT' = 0, 'SPEND-PREPAYMENT' = 1 }

	export interface PurchaseOrder {

		/** The person that the delivery is going to */
		AttentionTo?: string | null;

		/** See BrandingThemes */
		BrandingThemeID?: string | null;

		/** Required */
		Contact: ContactSummary;

		/** The currency that purchase order has been raised in */
		CurrencyCode?: string | null;

		/** The currency rate for a multicurrency purchase order. As no rate can be specified, the XE.com day rate is used. */
		CurrencyRate?: number | null;

		/** Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date?: Date | null;

		/** The address the goods are to be delivered to */
		DeliveryAddress?: string | null;

		/** Date the goods are to be delivered – YYYY-MM-DD */
		DeliveryDate?: Date | null;

		/** A free text feild for instructions (500 characters max) */
		DeliveryInstructions?: string | null;

		/** The date the goods are expected to arrive. */
		ExpectedArrivalDate?: Date | null;

		/** boolean to indicate if a purchase order has an attachment */
		HasAttachments?: boolean | null;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;

		/** Required */
		LineItems: Array<LineItem>;

		/** Xero generated unique identifier for purchase order */
		PurchaseOrderID?: string | null;

		/** Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings) */
		PurchaseOrderNumber?: string | null;

		/** Additional reference number */
		Reference?: string | null;

		/** Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed */
		SentToContact?: boolean | null;

		/** Purchase Order Status Codes */
		Status?: PurchaseOrderStatus | null;

		/** Total of purchase order excluding taxes */
		SubTotal?: number | null;

		/** The phone number for the person accepting the delivery */
		Telephone?: string | null;

		/** Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax) */
		Total?: number | null;

		/** Total of discounts applied on the purchase order line items */
		TotalDiscount?: number | null;

		/** Total tax on purchase order */
		TotalTax?: number | null;

		/** Last modified date UTC format */
		UpdatedDateUTC?: Date | null;
	}
	export interface PurchaseOrderFormProperties {

		/** The person that the delivery is going to */
		AttentionTo: FormControl<string | null | undefined>,

		/** See BrandingThemes */
		BrandingThemeID: FormControl<string | null | undefined>,

		/** The currency that purchase order has been raised in */
		CurrencyCode: FormControl<string | null | undefined>,

		/** The currency rate for a multicurrency purchase order. As no rate can be specified, the XE.com day rate is used. */
		CurrencyRate: FormControl<number | null | undefined>,

		/** Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation */
		Date: FormControl<Date | null | undefined>,

		/** The address the goods are to be delivered to */
		DeliveryAddress: FormControl<string | null | undefined>,

		/** Date the goods are to be delivered – YYYY-MM-DD */
		DeliveryDate: FormControl<Date | null | undefined>,

		/** A free text feild for instructions (500 characters max) */
		DeliveryInstructions: FormControl<string | null | undefined>,

		/** The date the goods are expected to arrive. */
		ExpectedArrivalDate: FormControl<Date | null | undefined>,

		/** boolean to indicate if a purchase order has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** Xero generated unique identifier for purchase order */
		PurchaseOrderID: FormControl<string | null | undefined>,

		/** Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings) */
		PurchaseOrderNumber: FormControl<string | null | undefined>,

		/** Additional reference number */
		Reference: FormControl<string | null | undefined>,

		/** Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed */
		SentToContact: FormControl<boolean | null | undefined>,

		/** Purchase Order Status Codes */
		Status: FormControl<PurchaseOrderStatus | null | undefined>,

		/** Total of purchase order excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** The phone number for the person accepting the delivery */
		Telephone: FormControl<string | null | undefined>,

		/** Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax) */
		Total: FormControl<number | null | undefined>,

		/** Total of discounts applied on the purchase order line items */
		TotalDiscount: FormControl<number | null | undefined>,

		/** Total tax on purchase order */
		TotalTax: FormControl<number | null | undefined>,

		/** Last modified date UTC format */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreatePurchaseOrderFormGroup() {
		return new FormGroup<PurchaseOrderFormProperties>({
			AttentionTo: new FormControl<string | null | undefined>(undefined),
			BrandingThemeID: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			CurrencyRate: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			DeliveryAddress: new FormControl<string | null | undefined>(undefined),
			DeliveryDate: new FormControl<Date | null | undefined>(undefined),
			DeliveryInstructions: new FormControl<string | null | undefined>(undefined),
			ExpectedArrivalDate: new FormControl<Date | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			PurchaseOrderID: new FormControl<string | null | undefined>(undefined),
			PurchaseOrderNumber: new FormControl<string | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			SentToContact: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<PurchaseOrderStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Telephone: new FormControl<string | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			TotalDiscount: new FormControl<number | null | undefined>(undefined),
			TotalTax: new FormControl<number | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PurchaseOrderStatus { DRAFT = 0, SUBMITTED = 1, AUTHORISED = 2, BILLED = 3, DELETED = 4 }

	export interface RepeatingInvoice {

		/** Branding Theme to be applied to the invoice */
		BrandingThemeID?: string | null;
		Contact?: ContactSummary;

		/** The currency that invoice has been raised in */
		CurrencyCode?: string | null;

		/** boolean to indicate if an invoice has an attachment */
		HasAttachments?: boolean | null;

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes?: BankTransactionLineAmountTypes | null;
		LineItems?: Array<LineItem>;

		/** ACCREC only – additional reference number */
		Reference?: string | null;

		/** Xero generated unique identifier for repeating invoice template */
		RepeatingInvoiceID?: string | null;
		Schedule?: Schedule;

		/** One of the following : DRAFT or AUTHORISED */
		Status?: RepeatingInvoiceStatus | null;

		/** Total of invoice excluding taxes */
		SubTotal?: number | null;

		/** Total of Invoice tax inclusive (i.e. SubTotal + TotalTax) */
		Total?: number | null;

		/** Total tax on invoice */
		TotalTax?: number | null;

		/** Invoice Types */
		Type?: InvoiceSummaryType | null;
	}
	export interface RepeatingInvoiceFormProperties {

		/** Branding Theme to be applied to the invoice */
		BrandingThemeID: FormControl<string | null | undefined>,

		/** The currency that invoice has been raised in */
		CurrencyCode: FormControl<string | null | undefined>,

		/** boolean to indicate if an invoice has an attachment */
		HasAttachments: FormControl<boolean | null | undefined>,

		/** Line amounts are exclusive of tax by default if you don’t specify this element */
		LineAmountTypes: FormControl<BankTransactionLineAmountTypes | null | undefined>,

		/** ACCREC only – additional reference number */
		Reference: FormControl<string | null | undefined>,

		/** Xero generated unique identifier for repeating invoice template */
		RepeatingInvoiceID: FormControl<string | null | undefined>,

		/** One of the following : DRAFT or AUTHORISED */
		Status: FormControl<RepeatingInvoiceStatus | null | undefined>,

		/** Total of invoice excluding taxes */
		SubTotal: FormControl<number | null | undefined>,

		/** Total of Invoice tax inclusive (i.e. SubTotal + TotalTax) */
		Total: FormControl<number | null | undefined>,

		/** Total tax on invoice */
		TotalTax: FormControl<number | null | undefined>,

		/** Invoice Types */
		Type: FormControl<InvoiceSummaryType | null | undefined>,
	}
	export function CreateRepeatingInvoiceFormGroup() {
		return new FormGroup<RepeatingInvoiceFormProperties>({
			BrandingThemeID: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			HasAttachments: new FormControl<boolean | null | undefined>(undefined),
			LineAmountTypes: new FormControl<BankTransactionLineAmountTypes | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined),
			RepeatingInvoiceID: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RepeatingInvoiceStatus | null | undefined>(undefined),
			SubTotal: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			TotalTax: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<InvoiceSummaryType | null | undefined>(undefined),
		});

	}

	export enum RepeatingInvoiceStatus { DRAFT = 0, AUTHORISED = 1 }

	export interface Report {

		/** The date of the report */
		ReportDate?: string | null;

		/** Identifier of the report */
		ReportID?: string | null;

		/** Name of the report */
		ReportName?: string | null;

		/** The titles of the report */
		ReportTitles?: Array<string>;

		/** Type of report */
		ReportType?: string | null;

		/** The rows of the report that contain the data (including header rows) */
		ReportRows?: Array<ReportRows>;

		/** The date and time the report was generated */
		UpdatedDateUTC?: Date | null;
	}
	export interface ReportFormProperties {

		/** The date of the report */
		ReportDate: FormControl<string | null | undefined>,

		/** Identifier of the report */
		ReportID: FormControl<string | null | undefined>,

		/** Name of the report */
		ReportName: FormControl<string | null | undefined>,

		/** Type of report */
		ReportType: FormControl<string | null | undefined>,

		/** The date and time the report was generated */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			ReportDate: new FormControl<string | null | undefined>(undefined),
			ReportID: new FormControl<string | null | undefined>(undefined),
			ReportName: new FormControl<string | null | undefined>(undefined),
			ReportType: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ReportRows {
		ReportRowsCells?: Array<ReportRowsCells>;

		/** The type of row */
		RowType?: ReportRowsRowType | null;

		/** The rows of the report (including header rows) */
		ReportRowsRows?: Array<ReportRowsRows>;

		/** The title of the row */
		Title?: string | null;
	}
	export interface ReportRowsFormProperties {

		/** The type of row */
		RowType: FormControl<ReportRowsRowType | null | undefined>,

		/** The title of the row */
		Title: FormControl<string | null | undefined>,
	}
	export function CreateReportRowsFormGroup() {
		return new FormGroup<ReportRowsFormProperties>({
			RowType: new FormControl<ReportRowsRowType | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportRowsCells {

		/** Header row labels */
		Value?: string | null;
	}
	export interface ReportRowsCellsFormProperties {

		/** Header row labels */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateReportRowsCellsFormGroup() {
		return new FormGroup<ReportRowsCellsFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportRowsRowType { Header = 0, Section = 1, Row = 2, SummaryRow = 3 }

	export interface ReportRowsRows {

		/** The cells that contain the data of the report */
		ReportRowsRowsCells?: Array<ReportRowsRowsCells>;

		/** The type of row */
		RowType?: ReportRowsRowsRowType | null;
	}
	export interface ReportRowsRowsFormProperties {

		/** The type of row */
		RowType: FormControl<ReportRowsRowsRowType | null | undefined>,
	}
	export function CreateReportRowsRowsFormGroup() {
		return new FormGroup<ReportRowsRowsFormProperties>({
			RowType: new FormControl<ReportRowsRowsRowType | null | undefined>(undefined),
		});

	}

	export interface ReportRowsRowsCells {

		/** AccountID that the Value relates to */
		ReportRowsRowsCellsAttributes?: Array<ReportRowsRowsCellsAttributes>;

		/** The data displayed in the report */
		Value?: string | null;
	}
	export interface ReportRowsRowsCellsFormProperties {

		/** The data displayed in the report */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateReportRowsRowsCellsFormGroup() {
		return new FormGroup<ReportRowsRowsCellsFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportRowsRowsCellsAttributes {

		/** Always 'account' */
		Id?: ReportRowsRowsCellsAttributesId | null;

		/** The AccountID that the Value relates to */
		Value?: string | null;
	}
	export interface ReportRowsRowsCellsAttributesFormProperties {

		/** Always 'account' */
		Id: FormControl<ReportRowsRowsCellsAttributesId | null | undefined>,

		/** The AccountID that the Value relates to */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateReportRowsRowsCellsAttributesFormGroup() {
		return new FormGroup<ReportRowsRowsCellsAttributesFormProperties>({
			Id: new FormControl<ReportRowsRowsCellsAttributesId | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportRowsRowsCellsAttributesId { account = 0 }

	export enum ReportRowsRowsRowType { Row = 0, SummaryRow = 1 }

	export interface ReportSummary {

		/** The date of the report */
		ReportDate?: string | null;

		/** Identifier of the report */
		ReportID?: string | null;

		/** Name of the report */
		ReportName?: string | null;

		/** Type of report */
		ReportType?: string | null;

		/** The date and time the report was generated */
		UpdatedDateUTC?: Date | null;
	}
	export interface ReportSummaryFormProperties {

		/** The date of the report */
		ReportDate: FormControl<string | null | undefined>,

		/** Identifier of the report */
		ReportID: FormControl<string | null | undefined>,

		/** Name of the report */
		ReportName: FormControl<string | null | undefined>,

		/** Type of report */
		ReportType: FormControl<string | null | undefined>,

		/** The date and time the report was generated */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateReportSummaryFormGroup() {
		return new FormGroup<ReportSummaryFormProperties>({
			ReportDate: new FormControl<string | null | undefined>(undefined),
			ReportID: new FormControl<string | null | undefined>(undefined),
			ReportName: new FormControl<string | null | undefined>(undefined),
			ReportType: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Schedule {

		/** Integer used with due date type e.g 20 (of following month), 31 (of current month) */
		DueDate?: number | null;

		/** Used with due date to describe when the invoice is due */
		DueDateType?: ScheduleDueDateType | null;

		/** Invoice end date – only returned if the template has an end date set */
		EndDate?: Date | null;

		/** The calendar date of the next invoice in the schedule to be generated */
		NextScheduledDate?: Date | null;

		/** Integer used with the unit e.g. 1 (every 1 week), 2 (every 2 months) */
		Period?: number | null;

		/** Date the first invoice of the current version of the repeating schedule was generated (changes when repeating invoice is edited) */
		StartDate?: Date | null;

		/** One of the following : WEEKLY or MONTHLY */
		Unit?: string | null;
	}
	export interface ScheduleFormProperties {

		/** Integer used with due date type e.g 20 (of following month), 31 (of current month) */
		DueDate: FormControl<number | null | undefined>,

		/** Used with due date to describe when the invoice is due */
		DueDateType: FormControl<ScheduleDueDateType | null | undefined>,

		/** Invoice end date – only returned if the template has an end date set */
		EndDate: FormControl<Date | null | undefined>,

		/** The calendar date of the next invoice in the schedule to be generated */
		NextScheduledDate: FormControl<Date | null | undefined>,

		/** Integer used with the unit e.g. 1 (every 1 week), 2 (every 2 months) */
		Period: FormControl<number | null | undefined>,

		/** Date the first invoice of the current version of the repeating schedule was generated (changes when repeating invoice is edited) */
		StartDate: FormControl<Date | null | undefined>,

		/** One of the following : WEEKLY or MONTHLY */
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			DueDate: new FormControl<number | null | undefined>(undefined),
			DueDateType: new FormControl<ScheduleDueDateType | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			NextScheduledDate: new FormControl<Date | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleDueDateType { DAYSAFTERBILLDATE = 0, DAYSAFTERBILLMONTH = 1, OFCURRENTMONTH = 2, OFFOLLOWINGMONTH = 3 }

	export interface TaxComponent {

		/** Boolean to describe if Tax rate is compounded.Learn more */
		IsCompound?: boolean | null;

		/** Determines if this tax component can be recovered */
		IsNonRecoverable?: boolean | null;

		/** Name of Tax Component */
		Name?: string | null;

		/** Tax Rate (up to 4dp) */
		Rate?: number | null;
	}
	export interface TaxComponentFormProperties {

		/** Boolean to describe if Tax rate is compounded.Learn more */
		IsCompound: FormControl<boolean | null | undefined>,

		/** Determines if this tax component can be recovered */
		IsNonRecoverable: FormControl<boolean | null | undefined>,

		/** Name of Tax Component */
		Name: FormControl<string | null | undefined>,

		/** Tax Rate (up to 4dp) */
		Rate: FormControl<number | null | undefined>,
	}
	export function CreateTaxComponentFormGroup() {
		return new FormGroup<TaxComponentFormProperties>({
			IsCompound: new FormControl<boolean | null | undefined>(undefined),
			IsNonRecoverable: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TaxRate {

		/** Boolean to describe if tax rate can be used for asset accounts */
		CanApplyToAssets?: boolean | null;

		/** Boolean to describe if tax rate can be used for equity accounts */
		CanApplyToEquity?: boolean | null;

		/** Boolean to describe if tax rate can be used for expense accounts */
		CanApplyToExpenses?: boolean | null;

		/** Boolean to describe if tax rate can be used for liability accounts */
		CanApplyToLiabilities?: boolean | null;

		/** Boolean to describe if tax rate can be used for revenue accounts */
		CanApplyToRevenue?: boolean | null;

		/** Tax Rate (decimal to 4dp) e.g 12.5000 */
		DisplayTaxRate?: number | null;

		/** Effective Tax Rate (decimal to 4dp) e.g 12.5000 */
		EffectiveRate?: number | null;

		/**
		 * Name of tax rate
		 * Required
		 */
		Name: string;

		/** See ReportTaxTypes */
		ReportTaxType?: string | null;

		/** Status Codes */
		Status?: TaxRateStatus | null;

		/** Required */
		TaxComponents: Array<TaxComponent>;

		/** Tax Types – can only be used as the identifier on update calls */
		TaxType?: string | null;
	}
	export interface TaxRateFormProperties {

		/** Boolean to describe if tax rate can be used for asset accounts */
		CanApplyToAssets: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for equity accounts */
		CanApplyToEquity: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for expense accounts */
		CanApplyToExpenses: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for liability accounts */
		CanApplyToLiabilities: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for revenue accounts */
		CanApplyToRevenue: FormControl<boolean | null | undefined>,

		/** Tax Rate (decimal to 4dp) e.g 12.5000 */
		DisplayTaxRate: FormControl<number | null | undefined>,

		/** Effective Tax Rate (decimal to 4dp) e.g 12.5000 */
		EffectiveRate: FormControl<number | null | undefined>,

		/**
		 * Name of tax rate
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** See ReportTaxTypes */
		ReportTaxType: FormControl<string | null | undefined>,

		/** Status Codes */
		Status: FormControl<TaxRateStatus | null | undefined>,

		/** Tax Types – can only be used as the identifier on update calls */
		TaxType: FormControl<string | null | undefined>,
	}
	export function CreateTaxRateFormGroup() {
		return new FormGroup<TaxRateFormProperties>({
			CanApplyToAssets: new FormControl<boolean | null | undefined>(undefined),
			CanApplyToEquity: new FormControl<boolean | null | undefined>(undefined),
			CanApplyToExpenses: new FormControl<boolean | null | undefined>(undefined),
			CanApplyToLiabilities: new FormControl<boolean | null | undefined>(undefined),
			CanApplyToRevenue: new FormControl<boolean | null | undefined>(undefined),
			DisplayTaxRate: new FormControl<number | null | undefined>(undefined),
			EffectiveRate: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReportTaxType: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaxRateStatus | null | undefined>(undefined),
			TaxType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaxRateStatus { ACTIVE = 0, DELETED = 1, ARCHIVED = 2 }

	export interface TaxReport {
		Attributes?: TaxReportAttributes;
		Fields?: TaxReportFields;

		/** The date of the report */
		ReportDate?: string | null;

		/** Identifier of the report */
		ReportID?: string | null;

		/** Name of the report */
		ReportName?: string | null;

		/** Type of report */
		ReportType?: string | null;

		/** The date and time the report was generated */
		UpdatedDateUTC?: Date | null;
	}
	export interface TaxReportFormProperties {

		/** The date of the report */
		ReportDate: FormControl<string | null | undefined>,

		/** Identifier of the report */
		ReportID: FormControl<string | null | undefined>,

		/** Name of the report */
		ReportName: FormControl<string | null | undefined>,

		/** Type of report */
		ReportType: FormControl<string | null | undefined>,

		/** The date and time the report was generated */
		UpdatedDateUTC: FormControl<Date | null | undefined>,
	}
	export function CreateTaxReportFormGroup() {
		return new FormGroup<TaxReportFormProperties>({
			ReportDate: new FormControl<string | null | undefined>(undefined),
			ReportID: new FormControl<string | null | undefined>(undefined),
			ReportName: new FormControl<string | null | undefined>(undefined),
			ReportType: new FormControl<string | null | undefined>(undefined),
			UpdatedDateUTC: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TaxReportAttributes {

		/** The attributes of the report (AU BAS Report only) */
		TaxReportAttributesReportAttribute?: Array<TaxReportAttributesReportAttribute>;
	}
	export interface TaxReportAttributesFormProperties {
	}
	export function CreateTaxReportAttributesFormGroup() {
		return new FormGroup<TaxReportAttributesFormProperties>({
		});

	}

	export interface TaxReportAttributesReportAttribute {

		/** The description of the field */
		Description?: string | null;

		/** The identifier for the field */
		Name?: string | null;

		/** The value of the field */
		Value?: string | null;
	}
	export interface TaxReportAttributesReportAttributeFormProperties {

		/** The description of the field */
		Description: FormControl<string | null | undefined>,

		/** The identifier for the field */
		Name: FormControl<string | null | undefined>,

		/** The value of the field */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTaxReportAttributesReportAttributeFormGroup() {
		return new FormGroup<TaxReportAttributesReportAttributeFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxReportFields {

		/** The report fields that contain useful data */
		TaxReportFieldsReportField?: Array<TaxReportFieldsReportField>;
	}
	export interface TaxReportFieldsFormProperties {
	}
	export function CreateTaxReportFieldsFormGroup() {
		return new FormGroup<TaxReportFieldsFormProperties>({
		});

	}

	export interface TaxReportFieldsReportField {

		/** The description of the field */
		Description?: string | null;

		/** The identifier for the field */
		FieldID?: string | null;

		/** The value of the field */
		Value?: string | null;
	}
	export interface TaxReportFieldsReportFieldFormProperties {

		/** The description of the field */
		Description: FormControl<string | null | undefined>,

		/** The identifier for the field */
		FieldID: FormControl<string | null | undefined>,

		/** The value of the field */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTaxReportFieldsReportFieldFormGroup() {
		return new FormGroup<TaxReportFieldsReportFieldFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			FieldID: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve the full chart of accounts
		 * Retrieve the chart of accounts
		 * Get Accounts
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @return {AccountsGetByWhereAndOrderReturn} A successful response
		 */
		AccountsGetByWhereAndOrder(where: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AccountsGetByWhereAndOrderReturn> {
			return this.http.get<AccountsGetByWhereAndOrderReturn>(this.baseUri + 'Accounts?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create new accounts
		 * Put Accounts
		 * @return {AccountsPutReturn} A successful response
		 */
		AccountsPut(requestBody: Account, headersHandler?: () => HttpHeaders): Observable<AccountsPutReturn> {
			return this.http.put<AccountsPutReturn>(this.baseUri + 'Accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update accounts
		 * Post Accounts
		 * @return {AccountsPostReturn} A successful response
		 */
		AccountsPost(requestBody: Account, headersHandler?: () => HttpHeaders): Observable<AccountsPostReturn> {
			return this.http.post<AccountsPostReturn>(this.baseUri + 'Accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a single account
		 * Get Accounts/{AccountID}
		 * @return {Accounts_AccountIDGetReturn} A successful response
		 */
		Accounts_AccountIDGet(AccountID: string, headersHandler?: () => HttpHeaders): Observable<Accounts_AccountIDGetReturn> {
			return this.http.get<Accounts_AccountIDGetReturn>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an account
		 * Post Accounts/{AccountID}
		 * @return {Accounts_AccountIDPostReturn} A successful response
		 */
		Accounts_AccountIDPost(AccountID: string, requestBody: Account, headersHandler?: () => HttpHeaders): Observable<Accounts_AccountIDPostReturn> {
			return this.http.post<Accounts_AccountIDPostReturn>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an account
		 * Delete Accounts/{AccountID}
		 * @return {void} A successful request
		 */
		Accounts_AccountIDDelete(AccountID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get Accounts/{AccountID}/Attachments
		 * @param {string} AccountID The Xero generated unique identifier for an account
		 * @return {Accounts_AccountIDAttachmentsGetReturn} A successful response
		 */
		Accounts_AccountIDAttachmentsGet(AccountID: string, headersHandler?: () => HttpHeaders): Observable<Accounts_AccountIDAttachmentsGetReturn> {
			return this.http.get<Accounts_AccountIDAttachmentsGetReturn>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get Accounts/{AccountID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} AccountID The Xero generated unique identifier for an account
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		Accounts_AccountIDAttachments_FileNameGet(FileName: string, AccountID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post Accounts/{AccountID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} AccountID The Xero generated unique identifier for an account
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {Accounts_AccountIDAttachments_FileNamePostReturn} A successful response
		 */
		Accounts_AccountIDAttachments_FileNamePost(FileName: string, AccountID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<Accounts_AccountIDAttachments_FileNamePostReturn> {
			return this.http.post<Accounts_AccountIDAttachments_FileNamePostReturn>(this.baseUri + 'Accounts/' + (AccountID == null ? '' : encodeURIComponent(AccountID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve any spend or receive money transactions (inc. prepayments and overpayments)
		 * Get BankTransactions
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {BankTransactionsGetByWhereAndOrderAndUnitdpReturn} A successful response
		 */
		BankTransactionsGetByWhereAndOrderAndUnitdp(where: string | null | undefined, order: string | null | undefined, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BankTransactionsGetByWhereAndOrderAndUnitdpReturn> {
			return this.http.get<BankTransactionsGetByWhereAndOrderAndUnitdpReturn>(this.baseUri + 'BankTransactions?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new spend or receive money (inc. prepayments and overpayments)
		 * Put BankTransactions
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {BankTransactionsPutBySummarizeErrorsReturn} A successful response
		 */
		BankTransactionsPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: BankTransaction, headersHandler?: () => HttpHeaders): Observable<BankTransactionsPutBySummarizeErrorsReturn> {
			return this.http.put<BankTransactionsPutBySummarizeErrorsReturn>(this.baseUri + 'BankTransactions?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create a new spend or receive money (inc. prepayments and overpayments)
		 * Post BankTransactions
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {BankTransactionsPostByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		BankTransactionsPostByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: BankTransaction, headersHandler?: () => HttpHeaders): Observable<BankTransactionsPostByUnitdpAndSummarizeErrorsReturn> {
			return this.http.post<BankTransactionsPostByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'BankTransactions?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a spend or receive money (inc. prepayments and overpayments)
		 * Get BankTransactions/{BankTransactionID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {BankTransactions_BankTransactionIDGetByUnitdpReturn} A successful response
		 */
		BankTransactions_BankTransactionIDGetByUnitdp(BankTransactionID: string, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BankTransactions_BankTransactionIDGetByUnitdpReturn> {
			return this.http.get<BankTransactions_BankTransactionIDGetByUnitdpReturn>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a spend or receive money
		 * Post BankTransactions/{BankTransactionID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {BankTransactions_BankTransactionIDPostByUnitdpReturn} A successful response
		 */
		BankTransactions_BankTransactionIDPostByUnitdp(BankTransactionID: string, unitdp: number | null | undefined, requestBody: BankTransaction, headersHandler?: () => HttpHeaders): Observable<BankTransactions_BankTransactionIDPostByUnitdpReturn> {
			return this.http.post<BankTransactions_BankTransactionIDPostByUnitdpReturn>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get BankTransactions/{BankTransactionID}/Attachments
		 * @param {string} BankTransactionID The Xero generated unique identifier for an bank transaction
		 * @return {BankTransactions_BankTransactionIDAttachmentsGetReturn} A successful response
		 */
		BankTransactions_BankTransactionIDAttachmentsGet(BankTransactionID: string, headersHandler?: () => HttpHeaders): Observable<BankTransactions_BankTransactionIDAttachmentsGetReturn> {
			return this.http.get<BankTransactions_BankTransactionIDAttachmentsGetReturn>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get BankTransactions/{BankTransactionID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} BankTransactionID The Xero generated unique identifier for an bank transaction
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		BankTransactions_BankTransactionIDAttachments_FileNameGet(FileName: string, BankTransactionID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post BankTransactions/{BankTransactionID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} BankTransactionID The Xero generated unique identifier for an bank transaction
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {BankTransactions_BankTransactionIDAttachments_FileNamePostReturn} A successful response
		 */
		BankTransactions_BankTransactionIDAttachments_FileNamePost(FileName: string, BankTransactionID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<BankTransactions_BankTransactionIDAttachments_FileNamePostReturn> {
			return this.http.post<BankTransactions_BankTransactionIDAttachments_FileNamePostReturn>(this.baseUri + 'BankTransactions/' + (BankTransactionID == null ? '' : encodeURIComponent(BankTransactionID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a colection of bank transfers
		 * Get BankTransfers
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @return {BankTransfersGetByWhereAndOrderReturn} A successful response
		 */
		BankTransfersGetByWhereAndOrder(where: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<BankTransfersGetByWhereAndOrderReturn> {
			return this.http.get<BankTransfersGetByWhereAndOrderReturn>(this.baseUri + 'BankTransfers?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a bank transfer
		 * Put BankTransfers
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {BankTransfersPutBySummarizeErrorsReturn} A successful response
		 */
		BankTransfersPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: BankTransfer, headersHandler?: () => HttpHeaders): Observable<BankTransfersPutBySummarizeErrorsReturn> {
			return this.http.put<BankTransfersPutBySummarizeErrorsReturn>(this.baseUri + 'BankTransfers?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an individual bank transfer
		 * Get BankTransfers/{BankTransferID}
		 * @return {BankTransfers_BankTransferIDGetReturn} A successful response
		 */
		BankTransfers_BankTransferIDGet(BankTransferID: string, headersHandler?: () => HttpHeaders): Observable<BankTransfers_BankTransferIDGetReturn> {
			return this.http.get<BankTransfers_BankTransferIDGetReturn>(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get BankTransfers/{BankTransferID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} BankTransferID The Xero generated unique identifier for an BankTransfer
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		BankTransfers_BankTransferIDAttachments_FileNameGet(FileName: string, BankTransferID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post BankTransfers/{BankTransferID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} BankTransferID The Xero generated unique identifier for a BankTransfer
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {BankTransfers_BankTransferIDAttachments_FileNamePostReturn} A successful response
		 */
		BankTransfers_BankTransferIDAttachments_FileNamePost(FileName: string, BankTransferID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<BankTransfers_BankTransferIDAttachments_FileNamePostReturn> {
			return this.http.post<BankTransfers_BankTransferIDAttachments_FileNamePostReturn>(this.baseUri + 'BankTransfers/' + (BankTransferID == null ? '' : encodeURIComponent(BankTransferID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of BrandingThemes
		 * Get BrandingThemes
		 * @return {BrandingThemesGetReturn} A successful response
		 */
		BrandingThemesGet(headersHandler?: () => HttpHeaders): Observable<BrandingThemesGetReturn> {
			return this.http.get<BrandingThemesGetReturn>(this.baseUri + 'BrandingThemes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an individual BrandingTheme
		 * Get BrandingThemes/{BrandingThemeID}
		 * @return {BrandingThemes_BrandingThemeIDGetReturn} A successful response
		 */
		BrandingThemes_BrandingThemeIDGet(BrandingThemeID: string, headersHandler?: () => HttpHeaders): Observable<BrandingThemes_BrandingThemeIDGetReturn> {
			return this.http.get<BrandingThemes_BrandingThemeIDGetReturn>(this.baseUri + 'BrandingThemes/' + (BrandingThemeID == null ? '' : encodeURIComponent(BrandingThemeID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a collection of contact groups
		 * Get ContactGroups
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @return {ContactGroupsGetByWhereAndOrderReturn} A successful response
		 */
		ContactGroupsGetByWhereAndOrder(where: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ContactGroupsGetByWhereAndOrderReturn> {
			return this.http.get<ContactGroupsGetByWhereAndOrderReturn>(this.baseUri + 'ContactGroups?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new contact group
		 * Put ContactGroups
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ContactGroupsPutBySummarizeErrorsReturn} A successful response
		 */
		ContactGroupsPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: ContactGroup, headersHandler?: () => HttpHeaders): Observable<ContactGroupsPutBySummarizeErrorsReturn> {
			return this.http.put<ContactGroupsPutBySummarizeErrorsReturn>(this.baseUri + 'ContactGroups?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update a contact group
		 * Post ContactGroups
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ContactGroupsPostBySummarizeErrorsReturn} A successful response
		 */
		ContactGroupsPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: ContactGroup, headersHandler?: () => HttpHeaders): Observable<ContactGroupsPostBySummarizeErrorsReturn> {
			return this.http.post<ContactGroupsPostBySummarizeErrorsReturn>(this.baseUri + 'ContactGroups?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve the ContactID and Name of all the contacts in a contact group
		 * Get ContactGroups/{ContactGroupID}
		 * @return {ContactGroups_ContactGroupIDGetReturn} A successful response
		 */
		ContactGroups_ContactGroupIDGet(ContactGroupID: string, headersHandler?: () => HttpHeaders): Observable<ContactGroups_ContactGroupIDGetReturn> {
			return this.http.get<ContactGroups_ContactGroupIDGetReturn>(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a contact group
		 * Post ContactGroups/{ContactGroupID}
		 * @return {ContactGroups_ContactGroupIDPostReturn} A successful response
		 */
		ContactGroups_ContactGroupIDPost(ContactGroupID: string, requestBody: ContactGroup, headersHandler?: () => HttpHeaders): Observable<ContactGroups_ContactGroupIDPostReturn> {
			return this.http.post<ContactGroups_ContactGroupIDPostReturn>(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a contact group
		 * Delete ContactGroups/{ContactGroupID}
		 * @return {void} A successful request
		 */
		ContactGroups_ContactGroupIDDelete(ContactGroupID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add contacts to a contact group
		 * Put ContactGroups/{ContactGroupID}/Contacts
		 * @return {ContactGroups_ContactGroupIDContactsPutReturn} A successful response
		 */
		ContactGroups_ContactGroupIDContactsPut(ContactGroupID: string, requestBody: Contact, headersHandler?: () => HttpHeaders): Observable<ContactGroups_ContactGroupIDContactsPutReturn> {
			return this.http.put<ContactGroups_ContactGroupIDContactsPutReturn>(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)) + '/Contacts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Remove all contacts from a contact group
		 * Delete ContactGroups/{ContactGroupID}/Contacts
		 * @return {void} A successful request
		 */
		ContactGroups_ContactGroupIDContactsDelete(ContactGroupID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)) + '/Contacts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a contact from a contact group
		 * Delete ContactGroups/{ContactGroupID}/Contacts/{ContactID}
		 * @return {void} A successful request
		 */
		ContactGroups_ContactGroupIDContacts_ContactIDDelete(ContactGroupID: string, ContactID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ContactGroups/' + (ContactGroupID == null ? '' : encodeURIComponent(ContactGroupID)) + '/Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a collection of contacts
		 * Get Contacts
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {boolean} includeArchived Include archived records in the response 
		 * @param {string} IDs Filter by a comma-separated list of ContactIDs
		 * @return {ContactsGetByWhereAndOrderAndIncludeArchivedAndIDsReturn} A successful response
		 */
		ContactsGetByWhereAndOrderAndIncludeArchivedAndIDs(where: string | null | undefined, order: string | null | undefined, includeArchived: boolean | null | undefined, IDs: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ContactsGetByWhereAndOrderAndIncludeArchivedAndIDsReturn> {
			return this.http.get<ContactsGetByWhereAndOrderAndIncludeArchivedAndIDsReturn>(this.baseUri + 'Contacts?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&includeArchived=' + includeArchived + '&IDs=' + (IDs == null ? '' : encodeURIComponent(IDs)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a contact
		 * Put Contacts
		 * @return {ContactsPutReturn} A successful response
		 */
		ContactsPut(requestBody: Contact, headersHandler?: () => HttpHeaders): Observable<ContactsPutReturn> {
			return this.http.put<ContactsPutReturn>(this.baseUri + 'Contacts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update a contact
		 * Post Contacts
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ContactsPostBySummarizeErrorsReturn} A successful response
		 */
		ContactsPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: Contact, headersHandler?: () => HttpHeaders): Observable<ContactsPostBySummarizeErrorsReturn> {
			return this.http.post<ContactsPostBySummarizeErrorsReturn>(this.baseUri + 'Contacts?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an individual contact
		 * Get Contacts/{ContactID}
		 * @return {Contacts_ContactIDGetReturn} A successful response
		 */
		Contacts_ContactIDGet(ContactID: string, headersHandler?: () => HttpHeaders): Observable<Contacts_ContactIDGetReturn> {
			return this.http.get<Contacts_ContactIDGetReturn>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a contact
		 * Post Contacts/{ContactID}
		 * @return {Contacts_ContactIDPostReturn} A successful response
		 */
		Contacts_ContactIDPost(ContactID: string, requestBody: Contact, headersHandler?: () => HttpHeaders): Observable<Contacts_ContactIDPostReturn> {
			return this.http.post<Contacts_ContactIDPostReturn>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get Contacts/{ContactID}/Attachments
		 * @param {string} ContactID The Xero generated unique identifier for a Contact
		 * @return {Contacts_ContactIDAttachmentsGetReturn} A successful response
		 */
		Contacts_ContactIDAttachmentsGet(ContactID: string, headersHandler?: () => HttpHeaders): Observable<Contacts_ContactIDAttachmentsGetReturn> {
			return this.http.get<Contacts_ContactIDAttachmentsGetReturn>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get Contacts/{ContactID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} ContactID The Xero generated unique identifier for a Contact
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		Contacts_ContactIDAttachments_FileNameGet(FileName: string, ContactID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post Contacts/{ContactID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} ContactID The Xero generated unique identifier for a Contact
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {Contacts_ContactIDAttachments_FileNamePostReturn} A successful response
		 */
		Contacts_ContactIDAttachments_FileNamePost(FileName: string, ContactID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<Contacts_ContactIDAttachments_FileNamePostReturn> {
			return this.http.post<Contacts_ContactIDAttachments_FileNamePostReturn>(this.baseUri + 'Contacts/' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of credit notes
		 * Get CreditNotes
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {number} page Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
		 * @return {CreditNotesGetByWhereAndOrderAndUnitdpAndPageReturn} A successful response
		 */
		CreditNotesGetByWhereAndOrderAndUnitdpAndPage(where: string | null | undefined, order: string | null | undefined, unitdp: number | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<CreditNotesGetByWhereAndOrderAndUnitdpAndPageReturn> {
			return this.http.get<CreditNotesGetByWhereAndOrderAndUnitdpAndPageReturn>(this.baseUri + 'CreditNotes?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&unitdp=' + unitdp + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a credit note
		 * Put CreditNotes
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {CreditNotesPutByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		CreditNotesPutByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: CreditNote, headersHandler?: () => HttpHeaders): Observable<CreditNotesPutByUnitdpAndSummarizeErrorsReturn> {
			return this.http.put<CreditNotesPutByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'CreditNotes?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update a credit note
		 * Post CreditNotes
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {CreditNotesPostByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		CreditNotesPostByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: CreditNote, headersHandler?: () => HttpHeaders): Observable<CreditNotesPostByUnitdpAndSummarizeErrorsReturn> {
			return this.http.post<CreditNotesPostByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'CreditNotes?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an individual credit note
		 * Get CreditNotes/{CreditNoteID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {CreditNotes_CreditNoteIDGetByUnitdpReturn} A successful response
		 */
		CreditNotes_CreditNoteIDGetByUnitdp(CreditNoteID: string, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<CreditNotes_CreditNoteIDGetByUnitdpReturn> {
			return this.http.get<CreditNotes_CreditNoteIDGetByUnitdpReturn>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a credit note
		 * Post CreditNotes/{CreditNoteID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {CreditNotes_CreditNoteIDPostByUnitdpReturn} A successful response
		 */
		CreditNotes_CreditNoteIDPostByUnitdp(CreditNoteID: string, unitdp: number | null | undefined, requestBody: CreditNote, headersHandler?: () => HttpHeaders): Observable<CreditNotes_CreditNoteIDPostByUnitdpReturn> {
			return this.http.post<CreditNotes_CreditNoteIDPostByUnitdpReturn>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Allocate a credit note
		 * Put CreditNotes/{CreditNoteID}/Allocations
		 * @return {CreditNotes_CreditNoteIDAllocationsPutReturn} A successful response
		 */
		CreditNotes_CreditNoteIDAllocationsPut(CreditNoteID: string, requestBody: Allocation, headersHandler?: () => HttpHeaders): Observable<CreditNotes_CreditNoteIDAllocationsPutReturn> {
			return this.http.put<CreditNotes_CreditNoteIDAllocationsPutReturn>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Allocations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get CreditNotes/{CreditNoteID}/Attachments
		 * @param {string} CreditNoteID The Xero generated unique identifier for a CreditNote
		 * @return {CreditNotes_CreditNoteIDAttachmentsGetReturn} A successful response
		 */
		CreditNotes_CreditNoteIDAttachmentsGet(CreditNoteID: string, headersHandler?: () => HttpHeaders): Observable<CreditNotes_CreditNoteIDAttachmentsGetReturn> {
			return this.http.get<CreditNotes_CreditNoteIDAttachmentsGetReturn>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get CreditNotes/{CreditNoteID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} CreditNoteID The Xero generated unique identifier for a CreditNote
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		CreditNotes_CreditNoteIDAttachments_FileNameGet(FileName: string, CreditNoteID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post CreditNotes/{CreditNoteID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} CreditNoteID The Xero generated unique identifier for a CreditNote
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {CreditNotes_CreditNoteIDAttachments_FileNamePostReturn} A successful response
		 */
		CreditNotes_CreditNoteIDAttachments_FileNamePost(FileName: string, CreditNoteID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<CreditNotes_CreditNoteIDAttachments_FileNamePostReturn> {
			return this.http.post<CreditNotes_CreditNoteIDAttachments_FileNamePostReturn>(this.baseUri + 'CreditNotes/' + (CreditNoteID == null ? '' : encodeURIComponent(CreditNoteID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve the currencies the organisation is subscribed to
		 * Get Currencies
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @return {CurrenciesGetByWhereAndOrderReturn} A successful response
		 */
		CurrenciesGetByWhereAndOrder(where: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<CurrenciesGetByWhereAndOrderReturn> {
			return this.http.get<CurrenciesGetByWhereAndOrderReturn>(this.baseUri + 'Currencies?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add currencies to the organisation
		 * Put Currencies
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {CurrenciesPutBySummarizeErrorsReturn} A successful response
		 */
		CurrenciesPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: Currency, headersHandler?: () => HttpHeaders): Observable<CurrenciesPutBySummarizeErrorsReturn> {
			return this.http.put<CurrenciesPutBySummarizeErrorsReturn>(this.baseUri + 'Currencies?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of employees
		 * Get Employees
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @return {EmployeesGetByWhereAndOrderReturn} A successful response
		 */
		EmployeesGetByWhereAndOrder(where: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<EmployeesGetByWhereAndOrderReturn> {
			return this.http.get<EmployeesGetByWhereAndOrderReturn>(this.baseUri + 'Employees?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create employees
		 * Put Employees
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {EmployeesPutBySummarizeErrorsReturn} A successful response
		 */
		EmployeesPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: Employee, headersHandler?: () => HttpHeaders): Observable<EmployeesPutBySummarizeErrorsReturn> {
			return this.http.put<EmployeesPutBySummarizeErrorsReturn>(this.baseUri + 'Employees?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update employees
		 * Post Employees
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {EmployeesPostBySummarizeErrorsReturn} A successful response
		 */
		EmployeesPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: Employee, headersHandler?: () => HttpHeaders): Observable<EmployeesPostBySummarizeErrorsReturn> {
			return this.http.post<EmployeesPostBySummarizeErrorsReturn>(this.baseUri + 'Employees?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an individual employee
		 * Get Employees/{EmployeeID}
		 * @return {Employees_EmployeeIDGetReturn} A successful response
		 */
		Employees_EmployeeIDGet(EmployeeID: string, headersHandler?: () => HttpHeaders): Observable<Employees_EmployeeIDGetReturn> {
			return this.http.get<Employees_EmployeeIDGetReturn>(this.baseUri + 'Employees/' + (EmployeeID == null ? '' : encodeURIComponent(EmployeeID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an employee
		 * Post Employees/{EmployeeID}
		 * @return {Employees_EmployeeIDPostReturn} A successful response
		 */
		Employees_EmployeeIDPost(EmployeeID: string, requestBody: Employee, headersHandler?: () => HttpHeaders): Observable<Employees_EmployeeIDPostReturn> {
			return this.http.post<Employees_EmployeeIDPostReturn>(this.baseUri + 'Employees/' + (EmployeeID == null ? '' : encodeURIComponent(EmployeeID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of expense claims
		 * Get ExpenseClaims
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @return {ExpenseClaimsGetByWhereAndOrderReturn} A successful response
		 */
		ExpenseClaimsGetByWhereAndOrder(where: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ExpenseClaimsGetByWhereAndOrderReturn> {
			return this.http.get<ExpenseClaimsGetByWhereAndOrderReturn>(this.baseUri + 'ExpenseClaims?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an expense claim
		 * Put ExpenseClaims
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ExpenseClaimsPutBySummarizeErrorsReturn} A successful response
		 */
		ExpenseClaimsPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: ExpenseClaim, headersHandler?: () => HttpHeaders): Observable<ExpenseClaimsPutBySummarizeErrorsReturn> {
			return this.http.put<ExpenseClaimsPutBySummarizeErrorsReturn>(this.baseUri + 'ExpenseClaims?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update an expense claim
		 * Post ExpenseClaims
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ExpenseClaimsPostBySummarizeErrorsReturn} A successful response
		 */
		ExpenseClaimsPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: ExpenseClaim, headersHandler?: () => HttpHeaders): Observable<ExpenseClaimsPostBySummarizeErrorsReturn> {
			return this.http.post<ExpenseClaimsPostBySummarizeErrorsReturn>(this.baseUri + 'ExpenseClaims?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an individual expense claim
		 * Get ExpenseClaims/{ExpenseClaimID}
		 * @return {ExpenseClaims_ExpenseClaimIDGetReturn} A successful response
		 */
		ExpenseClaims_ExpenseClaimIDGet(ExpenseClaimID: string, headersHandler?: () => HttpHeaders): Observable<ExpenseClaims_ExpenseClaimIDGetReturn> {
			return this.http.get<ExpenseClaims_ExpenseClaimIDGetReturn>(this.baseUri + 'ExpenseClaims/' + (ExpenseClaimID == null ? '' : encodeURIComponent(ExpenseClaimID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an expense claim
		 * Post ExpenseClaims/{ExpenseClaimID}
		 * @return {ExpenseClaims_ExpenseClaimIDPostReturn} A successful response
		 */
		ExpenseClaims_ExpenseClaimIDPost(ExpenseClaimID: string, requestBody: ExpenseClaim, headersHandler?: () => HttpHeaders): Observable<ExpenseClaims_ExpenseClaimIDPostReturn> {
			return this.http.post<ExpenseClaims_ExpenseClaimIDPostReturn>(this.baseUri + 'ExpenseClaims/' + (ExpenseClaimID == null ? '' : encodeURIComponent(ExpenseClaimID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of invoices (sales invoices and bills)
		 * Get Invoices
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {string} IDs Filter by a comma-separated list of InvoiceIDs
		 * @param {string} ContactIDs Filter by a comma-separated list of ContactIDs
		 * @param {string} Statuses Filter by a comma-separated list of Statuses
		 * @param {string} InvoiceNumbers Filter by a comma-separated list of InvoiceNumbers
		 * @return {InvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbersReturn} A successful response
		 */
		InvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbers(where: string | null | undefined, order: string | null | undefined, unitdp: number | null | undefined, IDs: string | null | undefined, ContactIDs: string | null | undefined, Statuses: string | null | undefined, InvoiceNumbers: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<InvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbersReturn> {
			return this.http.get<InvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbersReturn>(this.baseUri + 'Invoices?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&unitdp=' + unitdp + '&IDs=' + (IDs == null ? '' : encodeURIComponent(IDs)) + '&ContactIDs=' + (ContactIDs == null ? '' : encodeURIComponent(ContactIDs)) + '&Statuses=' + (Statuses == null ? '' : encodeURIComponent(Statuses)) + '&InvoiceNumbers=' + (InvoiceNumbers == null ? '' : encodeURIComponent(InvoiceNumbers)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an Invoice (sales invoices or bills)
		 * Put Invoices
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {InvoicesPutByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		InvoicesPutByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: Invoice, headersHandler?: () => HttpHeaders): Observable<InvoicesPutByUnitdpAndSummarizeErrorsReturn> {
			return this.http.put<InvoicesPutByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'Invoices?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update an Invoice (sales invoices or bills)
		 * Post Invoices
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {InvoicesPostByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		InvoicesPostByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: Invoice, headersHandler?: () => HttpHeaders): Observable<InvoicesPostByUnitdpAndSummarizeErrorsReturn> {
			return this.http.post<InvoicesPostByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'Invoices?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an Invoice (sales invoice or bill)
		 * Get Invoices/{InvoiceID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Invoices_InvoiceIDGetByUnitdpReturn} A successful response
		 */
		Invoices_InvoiceIDGetByUnitdp(InvoiceID: string, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Invoices_InvoiceIDGetByUnitdpReturn> {
			return this.http.get<Invoices_InvoiceIDGetByUnitdpReturn>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an Invoice (sales invoice or bill)
		 * Post Invoices/{InvoiceID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Invoices_InvoiceIDPostByUnitdpReturn} A successful response
		 */
		Invoices_InvoiceIDPostByUnitdp(InvoiceID: string, unitdp: number | null | undefined, requestBody: Invoice, headersHandler?: () => HttpHeaders): Observable<Invoices_InvoiceIDPostByUnitdpReturn> {
			return this.http.post<Invoices_InvoiceIDPostByUnitdpReturn>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get Invoices/{InvoiceID}/Attachments
		 * @param {string} InvoiceID The Xero generated unique identifier for an Invoice
		 * @return {Invoices_InvoiceIDAttachmentsGetReturn} A successful response
		 */
		Invoices_InvoiceIDAttachmentsGet(InvoiceID: string, headersHandler?: () => HttpHeaders): Observable<Invoices_InvoiceIDAttachmentsGetReturn> {
			return this.http.get<Invoices_InvoiceIDAttachmentsGetReturn>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get Invoices/{InvoiceID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} InvoiceID The Xero generated unique identifier for an Invoice
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		Invoices_InvoiceIDAttachments_FileNameGet(FileName: string, InvoiceID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post Invoices/{InvoiceID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} InvoiceID The Xero generated unique identifier for an Invoice
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {Invoices_InvoiceIDAttachments_FileNamePostReturn} A successful response
		 */
		Invoices_InvoiceIDAttachments_FileNamePost(FileName: string, InvoiceID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<Invoices_InvoiceIDAttachments_FileNamePostReturn> {
			return this.http.post<Invoices_InvoiceIDAttachments_FileNamePostReturn>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve the URL to view the online invoice
		 * Get Invoices/{InvoiceID}/OnlineInvoice
		 * @return {Invoices_InvoiceIDOnlineInvoiceGetReturn} A successful response
		 */
		Invoices_InvoiceIDOnlineInvoiceGet(InvoiceID: string, headersHandler?: () => HttpHeaders): Observable<Invoices_InvoiceIDOnlineInvoiceGetReturn> {
			return this.http.get<Invoices_InvoiceIDOnlineInvoiceGetReturn>(this.baseUri + 'Invoices/' + (InvoiceID == null ? '' : encodeURIComponent(InvoiceID)) + '/OnlineInvoice', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a collection of items
		 * Get Items
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {ItemsGetByWhereAndOrderAndUnitdpReturn} A successful response
		 */
		ItemsGetByWhereAndOrderAndUnitdp(where: string | null | undefined, order: string | null | undefined, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ItemsGetByWhereAndOrderAndUnitdpReturn> {
			return this.http.get<ItemsGetByWhereAndOrderAndUnitdpReturn>(this.baseUri + 'Items?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an item
		 * Put Items
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ItemsPutByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		ItemsPutByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: Item, headersHandler?: () => HttpHeaders): Observable<ItemsPutByUnitdpAndSummarizeErrorsReturn> {
			return this.http.put<ItemsPutByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'Items?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update an item
		 * Post Items
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ItemsPostByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		ItemsPostByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: Item, headersHandler?: () => HttpHeaders): Observable<ItemsPostByUnitdpAndSummarizeErrorsReturn> {
			return this.http.post<ItemsPostByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'Items?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an item
		 * Get Items/{ItemID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Items_ItemIDGetByUnitdpReturn} A successful response
		 */
		Items_ItemIDGetByUnitdp(ItemID: string, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Items_ItemIDGetByUnitdpReturn> {
			return this.http.get<Items_ItemIDGetByUnitdpReturn>(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an item
		 * Post Items/{ItemID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Items_ItemIDPostByUnitdpReturn} A successful response
		 */
		Items_ItemIDPostByUnitdp(ItemID: string, unitdp: number | null | undefined, requestBody: Item, headersHandler?: () => HttpHeaders): Observable<Items_ItemIDPostByUnitdpReturn> {
			return this.http.post<Items_ItemIDPostByUnitdpReturn>(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an item
		 * Delete Items/{ItemID}
		 * @return {void} A successful request
		 */
		Items_ItemIDDelete(ItemID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Items/' + (ItemID == null ? '' : encodeURIComponent(ItemID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a collection of journals.
		 * Get Journals
		 * @param {boolean} paymentsOnly Return results on a the cash basis
		 * @param {number} offset Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned.
		 * @return {JournalsGetByPaymentsOnlyAndOffsetReturn} A successful response
		 */
		JournalsGetByPaymentsOnlyAndOffset(paymentsOnly: boolean | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<JournalsGetByPaymentsOnlyAndOffsetReturn> {
			return this.http.get<JournalsGetByPaymentsOnlyAndOffsetReturn>(this.baseUri + 'Journals?paymentsOnly=' + paymentsOnly + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an individual journal.
		 * Get Journals/{JournalID}
		 * @return {Journals_JournalIDGetReturn} A successful response
		 */
		Journals_JournalIDGet(JournalID: string, headersHandler?: () => HttpHeaders): Observable<Journals_JournalIDGetReturn> {
			return this.http.get<Journals_JournalIDGetReturn>(this.baseUri + 'Journals/' + (JournalID == null ? '' : encodeURIComponent(JournalID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a collection of linked transactions (billable expenses)
		 * Get LinkedTransactions
		 * @param {number} page Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
		 * @param {string} SourceTransactionID Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice
		 * @param {string} ContactID Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.
		 * @param {string} Status Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
		 * @param {string} TargetTransactionID Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice.
		 * @return {LinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionIDReturn} A successful response
		 */
		LinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionID(page: number | null | undefined, SourceTransactionID: string | null | undefined, ContactID: string | null | undefined, Status: string | null | undefined, TargetTransactionID: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<LinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionIDReturn> {
			return this.http.get<LinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionIDReturn>(this.baseUri + 'LinkedTransactions?page=' + page + '&SourceTransactionID=' + (SourceTransactionID == null ? '' : encodeURIComponent(SourceTransactionID)) + '&ContactID=' + (ContactID == null ? '' : encodeURIComponent(ContactID)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&TargetTransactionID=' + (TargetTransactionID == null ? '' : encodeURIComponent(TargetTransactionID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a linked transaction (billable expense)
		 * Put LinkedTransactions
		 * @return {LinkedTransactionsPutReturn} A successful response
		 */
		LinkedTransactionsPut(requestBody: LinkedTransaction, headersHandler?: () => HttpHeaders): Observable<LinkedTransactionsPutReturn> {
			return this.http.put<LinkedTransactionsPutReturn>(this.baseUri + 'LinkedTransactions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update a linked transaction (billable expense)
		 * Post LinkedTransactions
		 * @return {LinkedTransactionsPostReturn} A successful response
		 */
		LinkedTransactionsPost(requestBody: LinkedTransaction, headersHandler?: () => HttpHeaders): Observable<LinkedTransactionsPostReturn> {
			return this.http.post<LinkedTransactionsPostReturn>(this.baseUri + 'LinkedTransactions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a linked transaction (billable expense)
		 * Get LinkedTransactions/{LinkedTransactionID}
		 * @return {LinkedTransactions_LinkedTransactionIDGetReturn} A successful response
		 */
		LinkedTransactions_LinkedTransactionIDGet(LinkedTransactionID: string, headersHandler?: () => HttpHeaders): Observable<LinkedTransactions_LinkedTransactionIDGetReturn> {
			return this.http.get<LinkedTransactions_LinkedTransactionIDGetReturn>(this.baseUri + 'LinkedTransactions/' + (LinkedTransactionID == null ? '' : encodeURIComponent(LinkedTransactionID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a linked transaction (billable expense)
		 * Post LinkedTransactions/{LinkedTransactionID}
		 * @return {LinkedTransactions_LinkedTransactionIDPostReturn} A successful response
		 */
		LinkedTransactions_LinkedTransactionIDPost(LinkedTransactionID: string, requestBody: LinkedTransaction, headersHandler?: () => HttpHeaders): Observable<LinkedTransactions_LinkedTransactionIDPostReturn> {
			return this.http.post<LinkedTransactions_LinkedTransactionIDPostReturn>(this.baseUri + 'LinkedTransactions/' + (LinkedTransactionID == null ? '' : encodeURIComponent(LinkedTransactionID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a linked transaction (billable expense)
		 * Delete LinkedTransactions/{LinkedTransactionID}
		 * @return {void} A successful request
		 */
		LinkedTransactions_LinkedTransactionIDDelete(LinkedTransactionID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'LinkedTransactions/' + (LinkedTransactionID == null ? '' : encodeURIComponent(LinkedTransactionID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a collection of manual journals
		 * Get ManualJournals
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {number} page Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
		 * @return {ManualJournalsGetByWhereAndOrderAndPageReturn} A successful response
		 */
		ManualJournalsGetByWhereAndOrderAndPage(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ManualJournalsGetByWhereAndOrderAndPageReturn> {
			return this.http.get<ManualJournalsGetByWhereAndOrderAndPageReturn>(this.baseUri + 'ManualJournals?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a manual journal
		 * Put ManualJournals
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ManualJournalsPutBySummarizeErrorsReturn} A successful response
		 */
		ManualJournalsPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: ManualJournal, headersHandler?: () => HttpHeaders): Observable<ManualJournalsPutBySummarizeErrorsReturn> {
			return this.http.put<ManualJournalsPutBySummarizeErrorsReturn>(this.baseUri + 'ManualJournals?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update a manual journal
		 * Post ManualJournals
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ManualJournalsPostBySummarizeErrorsReturn} A successful response
		 */
		ManualJournalsPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: ManualJournal, headersHandler?: () => HttpHeaders): Observable<ManualJournalsPostBySummarizeErrorsReturn> {
			return this.http.post<ManualJournalsPostBySummarizeErrorsReturn>(this.baseUri + 'ManualJournals?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an individual manual journal
		 * Get ManualJournals/{ManualJournalID}
		 * @return {ManualJournals_ManualJournalIDGetReturn} A successful response
		 */
		ManualJournals_ManualJournalIDGet(ManualJournalID: string, headersHandler?: () => HttpHeaders): Observable<ManualJournals_ManualJournalIDGetReturn> {
			return this.http.get<ManualJournals_ManualJournalIDGetReturn>(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a manual journal
		 * Post ManualJournals/{ManualJournalID}
		 * @return {ManualJournals_ManualJournalIDPostReturn} A successful response
		 */
		ManualJournals_ManualJournalIDPost(ManualJournalID: string, requestBody: ManualJournal, headersHandler?: () => HttpHeaders): Observable<ManualJournals_ManualJournalIDPostReturn> {
			return this.http.post<ManualJournals_ManualJournalIDPostReturn>(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get ManualJournals/{ManualJournalID}/Attachments
		 * @param {string} ManualJournalID The Xero generated unique identifier for a Manual Journal
		 * @return {ManualJournals_ManualJournalIDAttachmentsGetReturn} A successful response
		 */
		ManualJournals_ManualJournalIDAttachmentsGet(ManualJournalID: string, headersHandler?: () => HttpHeaders): Observable<ManualJournals_ManualJournalIDAttachmentsGetReturn> {
			return this.http.get<ManualJournals_ManualJournalIDAttachmentsGetReturn>(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get ManualJournals/{ManualJournalID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} ManualJournalID The Xero generated unique identifier for a Manual Journal
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		ManualJournals_ManualJournalIDAttachments_FileNameGet(FileName: string, ManualJournalID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post ManualJournals/{ManualJournalID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} ManualJournalID The Xero generated unique identifier for a Manual Journal
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {ManualJournals_ManualJournalIDAttachments_FileNamePostReturn} A successful response
		 */
		ManualJournals_ManualJournalIDAttachments_FileNamePost(FileName: string, ManualJournalID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<ManualJournals_ManualJournalIDAttachments_FileNamePostReturn> {
			return this.http.post<ManualJournals_ManualJournalIDAttachments_FileNamePostReturn>(this.baseUri + 'ManualJournals/' + (ManualJournalID == null ? '' : encodeURIComponent(ManualJournalID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Organisation details
		 * Get Organisation
		 * @return {OrganisationGetReturn} A successful response
		 */
		OrganisationGet(headersHandler?: () => HttpHeaders): Observable<OrganisationGetReturn> {
			return this.http.get<OrganisationGetReturn>(this.baseUri + 'Organisation', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve Organisation details
		 * Get Organisation/{ShortCode}
		 * @return {Organisation_ShortCodeGetReturn} A successful response
		 */
		Organisation_ShortCodeGet(ShortCode: string, headersHandler?: () => HttpHeaders): Observable<Organisation_ShortCodeGetReturn> {
			return this.http.get<Organisation_ShortCodeGetReturn>(this.baseUri + 'Organisation/' + (ShortCode == null ? '' : encodeURIComponent(ShortCode)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a collection of overpayments
		 * Get Overpayments
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {number} page Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {OverpaymentsGetByWhereAndOrderAndPageAndUnitdpReturn} A successful response
		 */
		OverpaymentsGetByWhereAndOrderAndPageAndUnitdp(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<OverpaymentsGetByWhereAndOrderAndPageAndUnitdpReturn> {
			return this.http.get<OverpaymentsGetByWhereAndOrderAndPageAndUnitdpReturn>(this.baseUri + 'Overpayments?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an overpayment
		 * Get Overpayments/{OverpaymentID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Overpayments_OverpaymentIDGetByUnitdpReturn} A successful response
		 */
		Overpayments_OverpaymentIDGetByUnitdp(OverpaymentID: string, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Overpayments_OverpaymentIDGetByUnitdpReturn> {
			return this.http.get<Overpayments_OverpaymentIDGetByUnitdpReturn>(this.baseUri + 'Overpayments/' + (OverpaymentID == null ? '' : encodeURIComponent(OverpaymentID)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Allocate an overpayment
		 * Put Overpayments/{OverpaymentID}/Allocations
		 * @return {Overpayments_OverpaymentIDAllocationsPutReturn} A successful response
		 */
		Overpayments_OverpaymentIDAllocationsPut(OverpaymentID: string, requestBody: Allocation, headersHandler?: () => HttpHeaders): Observable<Overpayments_OverpaymentIDAllocationsPutReturn> {
			return this.http.put<Overpayments_OverpaymentIDAllocationsPutReturn>(this.baseUri + 'Overpayments/' + (OverpaymentID == null ? '' : encodeURIComponent(OverpaymentID)) + '/Allocations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of payments for invoices, credit notes, prepayments and overpayments
		 * Get Payments
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @return {PaymentsGetByWhereAndOrderReturn} A successful response
		 */
		PaymentsGetByWhereAndOrder(where: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PaymentsGetByWhereAndOrderReturn> {
			return this.http.get<PaymentsGetByWhereAndOrderReturn>(this.baseUri + 'Payments?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a payment
		 * Put Payments
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {PaymentsPutBySummarizeErrorsReturn} A successful response
		 */
		PaymentsPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: Payment, headersHandler?: () => HttpHeaders): Observable<PaymentsPutBySummarizeErrorsReturn> {
			return this.http.put<PaymentsPutBySummarizeErrorsReturn>(this.baseUri + 'Payments?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create a payment
		 * Post Payments
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {PaymentsPostBySummarizeErrorsReturn} A successful response
		 */
		PaymentsPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: Payment, headersHandler?: () => HttpHeaders): Observable<PaymentsPostBySummarizeErrorsReturn> {
			return this.http.post<PaymentsPostBySummarizeErrorsReturn>(this.baseUri + 'Payments?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a payment
		 * Get Payments/{PaymentID}
		 * @return {Payments_PaymentIDGetReturn} A successful response
		 */
		Payments_PaymentIDGet(PaymentID: string, headersHandler?: () => HttpHeaders): Observable<Payments_PaymentIDGetReturn> {
			return this.http.get<Payments_PaymentIDGetReturn>(this.baseUri + 'Payments/' + (PaymentID == null ? '' : encodeURIComponent(PaymentID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a payment's status to deleted
		 * Post Payments/{PaymentID}
		 * @return {Payments_PaymentIDPostReturn} A successful response
		 */
		Payments_PaymentIDPost(PaymentID: string, requestBody: Payment, headersHandler?: () => HttpHeaders): Observable<Payments_PaymentIDPostReturn> {
			return this.http.post<Payments_PaymentIDPostReturn>(this.baseUri + 'Payments/' + (PaymentID == null ? '' : encodeURIComponent(PaymentID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of prepayments
		 * Get Prepayments
		 * @param {string} where Filter by an any element
		 * @param {string} order Order by any element returned
		 * @param {number} page Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {PrepaymentsGetByWhereAndOrderAndPageAndUnitdpReturn} A successful response
		 */
		PrepaymentsGetByWhereAndOrderAndPageAndUnitdp(where: string | null | undefined, order: string | null | undefined, page: number | null | undefined, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PrepaymentsGetByWhereAndOrderAndPageAndUnitdpReturn> {
			return this.http.get<PrepaymentsGetByWhereAndOrderAndPageAndUnitdpReturn>(this.baseUri + 'Prepayments?where=' + (where == null ? '' : encodeURIComponent(where)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an individual prepayment
		 * Get Prepayments/{PrepaymentID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Prepayments_PrepaymentIDGetByUnitdpReturn} A successful response
		 */
		Prepayments_PrepaymentIDGetByUnitdp(PrepaymentID: string, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Prepayments_PrepaymentIDGetByUnitdpReturn> {
			return this.http.get<Prepayments_PrepaymentIDGetByUnitdpReturn>(this.baseUri + 'Prepayments/' + (PrepaymentID == null ? '' : encodeURIComponent(PrepaymentID)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Allocate a prepayment
		 * Put Prepayments/{PrepaymentID}/Allocations
		 * @return {Prepayments_PrepaymentIDAllocationsPutReturn} A successful response
		 */
		Prepayments_PrepaymentIDAllocationsPut(PrepaymentID: string, requestBody: Allocation, headersHandler?: () => HttpHeaders): Observable<Prepayments_PrepaymentIDAllocationsPutReturn> {
			return this.http.put<Prepayments_PrepaymentIDAllocationsPutReturn>(this.baseUri + 'Prepayments/' + (PrepaymentID == null ? '' : encodeURIComponent(PrepaymentID)) + '/Allocations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of purchase orders
		 * Get PurchaseOrders
		 * @param {string} order Order by any element returned
		 * @param {number} page Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
		 * @return {PurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatusReturn} A successful response
		 */
		PurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatus(order: string | null | undefined, page: number | null | undefined, DateFrom: Date | null | undefined, DateTo: Date | null | undefined, Status: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatusReturn> {
			return this.http.get<PurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatusReturn>(this.baseUri + 'PurchaseOrders?order=' + (order == null ? '' : encodeURIComponent(order)) + '&page=' + page + '&DateFrom=' + DateFrom?.toISOString() + '&DateTo=' + DateTo?.toISOString() + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create purchase orders
		 * Put PurchaseOrders
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {PurchaseOrdersPutBySummarizeErrorsReturn} A successful response
		 */
		PurchaseOrdersPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: PurchaseOrder, headersHandler?: () => HttpHeaders): Observable<PurchaseOrdersPutBySummarizeErrorsReturn> {
			return this.http.put<PurchaseOrdersPutBySummarizeErrorsReturn>(this.baseUri + 'PurchaseOrders?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create and update purchase orders
		 * Post PurchaseOrders
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {PurchaseOrdersPostBySummarizeErrorsReturn} A successful response
		 */
		PurchaseOrdersPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: PurchaseOrder, headersHandler?: () => HttpHeaders): Observable<PurchaseOrdersPostBySummarizeErrorsReturn> {
			return this.http.post<PurchaseOrdersPostBySummarizeErrorsReturn>(this.baseUri + 'PurchaseOrders?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a single purchase order
		 * Get PurchaseOrders/{PurchaseOrderID}
		 * @return {PurchaseOrders_PurchaseOrderIDGetReturn} A successful response
		 */
		PurchaseOrders_PurchaseOrderIDGet(PurchaseOrderID: string, headersHandler?: () => HttpHeaders): Observable<PurchaseOrders_PurchaseOrderIDGetReturn> {
			return this.http.get<PurchaseOrders_PurchaseOrderIDGetReturn>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a purchase order
		 * Post PurchaseOrders/{PurchaseOrderID}
		 * @return {PurchaseOrders_PurchaseOrderIDPostReturn} A successful response
		 */
		PurchaseOrders_PurchaseOrderIDPost(PurchaseOrderID: string, requestBody: PurchaseOrder, headersHandler?: () => HttpHeaders): Observable<PurchaseOrders_PurchaseOrderIDPostReturn> {
			return this.http.post<PurchaseOrders_PurchaseOrderIDPostReturn>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get PurchaseOrders/{PurchaseOrderID}/Attachments
		 * @param {string} PurchaseOrderID The Xero generated unique identifier for a purchase order
		 * @return {PurchaseOrders_PurchaseOrderIDAttachmentsGetReturn} A successful response
		 */
		PurchaseOrders_PurchaseOrderIDAttachmentsGet(PurchaseOrderID: string, headersHandler?: () => HttpHeaders): Observable<PurchaseOrders_PurchaseOrderIDAttachmentsGetReturn> {
			return this.http.get<PurchaseOrders_PurchaseOrderIDAttachmentsGetReturn>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} PurchaseOrderID The Xero generated unique identifier for a purchase order
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		PurchaseOrders_PurchaseOrderIDAttachments_FileNameGet(FileName: string, PurchaseOrderID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} PurchaseOrderID The Xero generated unique identifier for a purchase order
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {PurchaseOrders_PurchaseOrderIDAttachments_FileNamePostReturn} A successful response
		 */
		PurchaseOrders_PurchaseOrderIDAttachments_FileNamePost(FileName: string, PurchaseOrderID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<PurchaseOrders_PurchaseOrderIDAttachments_FileNamePostReturn> {
			return this.http.post<PurchaseOrders_PurchaseOrderIDAttachments_FileNamePostReturn>(this.baseUri + 'PurchaseOrders/' + (PurchaseOrderID == null ? '' : encodeURIComponent(PurchaseOrderID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of draft receipts
		 * Get Receipts
		 * @param {string} order Order by any element returned
		 * @param {string} where Filter by an any element
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {ReceiptsGetByOrderAndWhereAndUnitdpReturn} A successful response
		 */
		ReceiptsGetByOrderAndWhereAndUnitdp(order: string | null | undefined, where: string | null | undefined, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReceiptsGetByOrderAndWhereAndUnitdpReturn> {
			return this.http.get<ReceiptsGetByOrderAndWhereAndUnitdpReturn>(this.baseUri + 'Receipts?order=' + (order == null ? '' : encodeURIComponent(order)) + '&where=' + (where == null ? '' : encodeURIComponent(where)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a receipt
		 * Put Receipts
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ReceiptsPutByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		ReceiptsPutByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: Receipt, headersHandler?: () => HttpHeaders): Observable<ReceiptsPutByUnitdpAndSummarizeErrorsReturn> {
			return this.http.put<ReceiptsPutByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'Receipts?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update a receipt
		 * Post Receipts
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {ReceiptsPostByUnitdpAndSummarizeErrorsReturn} A successful response
		 */
		ReceiptsPostByUnitdpAndSummarizeErrors(unitdp: number | null | undefined, summarizeErrors: boolean | null | undefined, requestBody: Receipt, headersHandler?: () => HttpHeaders): Observable<ReceiptsPostByUnitdpAndSummarizeErrorsReturn> {
			return this.http.post<ReceiptsPostByUnitdpAndSummarizeErrorsReturn>(this.baseUri + 'Receipts?unitdp=' + unitdp + '&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve an individual receipt
		 * Get Receipts/{ReceiptID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Receipts_ReceiptIDGetByUnitdpReturn} A successful response
		 */
		Receipts_ReceiptIDGetByUnitdp(ReceiptID: string, unitdp: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Receipts_ReceiptIDGetByUnitdpReturn> {
			return this.http.get<Receipts_ReceiptIDGetByUnitdpReturn>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '&unitdp=' + unitdp, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a receipt
		 * Post Receipts/{ReceiptID}
		 * @param {number} unitdp Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
		 * @return {Receipts_ReceiptIDPostByUnitdpReturn} A successful response
		 */
		Receipts_ReceiptIDPostByUnitdp(ReceiptID: string, unitdp: number | null | undefined, requestBody: Receipt, headersHandler?: () => HttpHeaders): Observable<Receipts_ReceiptIDPostByUnitdpReturn> {
			return this.http.post<Receipts_ReceiptIDPostByUnitdpReturn>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '&unitdp=' + unitdp, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get Receipts/{ReceiptID}/Attachments
		 * @param {string} ReceiptID The Xero generated unique identifier for a Receipt
		 * @return {Receipts_ReceiptIDAttachmentsGetReturn} A successful response
		 */
		Receipts_ReceiptIDAttachmentsGet(ReceiptID: string, headersHandler?: () => HttpHeaders): Observable<Receipts_ReceiptIDAttachmentsGetReturn> {
			return this.http.get<Receipts_ReceiptIDAttachmentsGetReturn>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get Receipts/{ReceiptID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} ReceiptID The Xero generated unique identifier for a Receipt
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		Receipts_ReceiptIDAttachments_FileNameGet(FileName: string, ReceiptID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Attachment
		 * Upload an Attachment
		 * Post Receipts/{ReceiptID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment being uploaded
		 * @param {string} ReceiptID The Xero generated unique identifier for a Receipt
		 * @param {Content} requestBody The raw content of the file to be uploaded
		 * @return {Receipts_ReceiptIDAttachments_FileNamePostReturn} A successful response
		 */
		Receipts_ReceiptIDAttachments_FileNamePost(FileName: string, ReceiptID: string, requestBody: Content, headersHandler?: () => HttpHeaders): Observable<Receipts_ReceiptIDAttachments_FileNamePostReturn> {
			return this.http.post<Receipts_ReceiptIDAttachments_FileNamePostReturn>(this.baseUri + 'Receipts/' + (ReceiptID == null ? '' : encodeURIComponent(ReceiptID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of repeating invoice templates
		 * Get RepeatingInvoices
		 * @param {string} order Order by any element returned
		 * @param {string} where Filter by an any element
		 * @return {RepeatingInvoicesGetByOrderAndWhereReturn} A successful response
		 */
		RepeatingInvoicesGetByOrderAndWhere(order: string | null | undefined, where: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<RepeatingInvoicesGetByOrderAndWhereReturn> {
			return this.http.get<RepeatingInvoicesGetByOrderAndWhereReturn>(this.baseUri + 'RepeatingInvoices?order=' + (order == null ? '' : encodeURIComponent(order)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an individual repeating invoice template
		 * Get RepeatingInvoices/{RepeatingInvoiceID}
		 * @return {RepeatingInvoices_RepeatingInvoiceIDGetReturn} A successful response
		 */
		RepeatingInvoices_RepeatingInvoiceIDGet(RepeatingInvoiceID: string, headersHandler?: () => HttpHeaders): Observable<RepeatingInvoices_RepeatingInvoiceIDGetReturn> {
			return this.http.get<RepeatingInvoices_RepeatingInvoiceIDGetReturn>(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve Attachments
		 * Retrieve Attachments
		 * Get RepeatingInvoices/{RepeatingInvoiceID}/Attachments
		 * @param {string} RepeatingInvoiceID The Xero generated unique identifier for a RepeatingInvoice
		 * @return {RepeatingInvoices_RepeatingInvoiceIDAttachmentsGetReturn} A successful response
		 */
		RepeatingInvoices_RepeatingInvoiceIDAttachmentsGet(RepeatingInvoiceID: string, headersHandler?: () => HttpHeaders): Observable<RepeatingInvoices_RepeatingInvoiceIDAttachmentsGetReturn> {
			return this.http.get<RepeatingInvoices_RepeatingInvoiceIDAttachmentsGetReturn>(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)) + '/Attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an Attachment
		 * Download an Attachment
		 * Get RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}
		 * @param {string} FileName The filename of the attachment to be downloaded
		 * @param {string} RepeatingInvoiceID The Xero generated unique identifier for a RepeatingInvoice
		 * @return {void} Successful response. The response message will contain the raw file content that was originally uploaded. The response won’t contain any xml or json encoded information
		 */
		RepeatingInvoices_RepeatingInvoiceIDAttachments_FileNameGet(FileName: string, RepeatingInvoiceID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'RepeatingInvoices/' + (RepeatingInvoiceID == null ? '' : encodeURIComponent(RepeatingInvoiceID)) + '/Attachments/' + (FileName == null ? '' : encodeURIComponent(FileName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of published GST reports (NZ) or BAS reports (AU)
		 * Get Reports
		 * @return {ReportsGetReturn} A successful response
		 */
		ReportsGet(headersHandler?: () => HttpHeaders): Observable<ReportsGetReturn> {
			return this.http.get<ReportsGetReturn>(this.baseUri + 'Reports', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an Aged Payables report for a contact
		 * Get Reports/AgedPayablesByContact
		 * @param {string} contactID ContactID for the contact you're running the report for
		 * @param {string} date Shows payments up to this date e.g. 2014-04-30. Defaults to end of the current month
		 * @param {string} fromDate Show all payable invoices from this date for contact
		 * @param {string} toDate Show all payable invoices to this date for the contact
		 * @return {ReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn} A successful response
		 */
		ReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDate(contactID: string, date: string | null | undefined, fromDate: string | null | undefined, toDate: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn> {
			return this.http.get<ReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn>(this.baseUri + 'Reports/AgedPayablesByContact?contactID=' + (contactID == null ? '' : encodeURIComponent(contactID)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an Aged Receivables report for a contact
		 * Get Reports/AgedReceivablesByContact
		 * @param {string} contactID ContactID for the contact you're running the report for
		 * @param {string} date Shows payments up to this date e.g. 2014-04-30. Defaults to end of the current month
		 * @param {string} fromDate Show all receivable invoices from this date for contact
		 * @param {string} toDate Show all receivable invoices to this date for the contact
		 * @return {ReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn} A successful response
		 */
		ReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDate(contactID: string, date: string | null | undefined, fromDate: string | null | undefined, toDate: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn> {
			return this.http.get<ReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn>(this.baseUri + 'Reports/AgedReceivablesByContact?contactID=' + (contactID == null ? '' : encodeURIComponent(contactID)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a Balance Sheet Report
		 * Get Reports/BalanceSheet
		 * @param {Date} date YYYY-MM-DD
		 * @param {string} trackingOptionID1 Run the balance sheet for a specific tracking option
		 * @param {string} trackingOptionID2 Run the balance sheet for a combination of two tracking options
		 * @param {boolean} standardLayout If set to true no custom report layouts will be applied to response
		 * @param {boolean} paymentsOnly Set this to true to get cash transactions only
		 * @return {ReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn} A successful response
		 */
		ReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnly(date: Date | null | undefined, trackingOptionID1: string | null | undefined, trackingOptionID2: string | null | undefined, standardLayout: boolean | null | undefined, paymentsOnly: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn> {
			return this.http.get<ReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn>(this.baseUri + 'Reports/BalanceSheet?date=' + date?.toISOString() + '&trackingOptionID1=' + (trackingOptionID1 == null ? '' : encodeURIComponent(trackingOptionID1)) + '&trackingOptionID2=' + (trackingOptionID2 == null ? '' : encodeURIComponent(trackingOptionID2)) + '&standardLayout=' + standardLayout + '&paymentsOnly=' + paymentsOnly, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a bank statement report
		 * Get Reports/BankStatement
		 * @param {string} bankAccountID bankAccountID e.g. 5040915e-8ce7-4177-8d08-fde416232f18
		 * @param {string} fromDate YYYY-MM-DD
		 * @param {string} toDate YYYY-MM-DD
		 * @return {ReportsBankStatementGetByBankAccountIDAndFromDateAndToDateReturn} A successful response
		 */
		ReportsBankStatementGetByBankAccountIDAndFromDateAndToDate(bankAccountID: string, fromDate: string | null | undefined, toDate: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsBankStatementGetByBankAccountIDAndFromDateAndToDateReturn> {
			return this.http.get<ReportsBankStatementGetByBankAccountIDAndFromDateAndToDateReturn>(this.baseUri + 'Reports/BankStatement?bankAccountID=' + (bankAccountID == null ? '' : encodeURIComponent(bankAccountID)) + '&fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a bank summary report
		 * Get Reports/BankSummary
		 * @param {string} fromDate YYYY-MM-DD
		 * @param {string} toDate YYYY-MM-DD
		 * @return {ReportsBankSummaryGetByFromDateAndToDateReturn} A successful response
		 */
		ReportsBankSummaryGetByFromDateAndToDate(fromDate: string | null | undefined, toDate: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsBankSummaryGetByFromDateAndToDateReturn> {
			return this.http.get<ReportsBankSummaryGetByFromDateAndToDateReturn>(this.baseUri + 'Reports/BankSummary?fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a budget summary report
		 * Get Reports/BudgetSummary
		 * @param {string} date YYYY-MM-DD
		 * @param {number} periods The number of periods to compare (integer between 1 and 12)
		 * @param {number} timeframe The period size to compare to (1=month, 3=quarter, 12=year)
		 * @return {ReportsBudgetSummaryGetByDateAndPeriodsAndTimeframeReturn} A successful response
		 */
		ReportsBudgetSummaryGetByDateAndPeriodsAndTimeframe(date: string | null | undefined, periods: number | null | undefined, timeframe: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsBudgetSummaryGetByDateAndPeriodsAndTimeframeReturn> {
			return this.http.get<ReportsBudgetSummaryGetByDateAndPeriodsAndTimeframeReturn>(this.baseUri + 'Reports/BudgetSummary?date=' + (date == null ? '' : encodeURIComponent(date)) + '&periods=' + periods + '&timeframe=' + timeframe, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an executive summary report
		 * Get Reports/ExecutiveSummary
		 * @param {string} date YYYY-MM-DD
		 * @return {ReportsExecutiveSummaryGetByDateReturn} A successful response
		 */
		ReportsExecutiveSummaryGetByDate(date: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsExecutiveSummaryGetByDateReturn> {
			return this.http.get<ReportsExecutiveSummaryGetByDateReturn>(this.baseUri + 'Reports/ExecutiveSummary?date=' + (date == null ? '' : encodeURIComponent(date)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a profit and loss report
		 * Get Reports/ProfitAndLoss
		 * @param {string} fromDate YYYY-MM-DD
		 * @param {string} toDate YYYY-MM-DD
		 * @param {string} trackingCategoryID If you specify the trackingCategoryID parameter then the Profit and Loss Report will show figures for each of the options in the category as separate columns. See the Profit and Loss Report in Xero to learn more about this behavior when filtering by a tracking category.
		 * @param {string} trackingOptionID If you specify this parameter in addition to the trackingCategoryID then just one option will be returned (i.e. 1 column only)
		 * @param {string} trackingCategoryID2 If you specify a second trackingCategoryID parameter then the Profit and Loss Report will show figures for each combination of options from the two categories as separate columns. See the Profit and Loss Report in Xero to learn more about this behaviour when filtering by two tracking categories.
		 * @param {string} trackingOptionID2 If you specify this parameter in addition to a second trackingCategoryID then just one option will be returned combined with the option/s from the first tracking category
		 * @param {boolean} standardLayout If you set this parameter to "true" then no custom report layouts will be applied to response
		 * @param {string} paymentsOnly Set this to true to get cash transactions only
		 * @return {ReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn} A successful response
		 */
		ReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnly(fromDate: string | null | undefined, toDate: string | null | undefined, trackingCategoryID: string | null | undefined, trackingOptionID: string | null | undefined, trackingCategoryID2: string | null | undefined, trackingOptionID2: string | null | undefined, standardLayout: boolean | null | undefined, paymentsOnly: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn> {
			return this.http.get<ReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn>(this.baseUri + 'Reports/ProfitAndLoss?fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&trackingCategoryID=' + (trackingCategoryID == null ? '' : encodeURIComponent(trackingCategoryID)) + '&trackingOptionID=' + (trackingOptionID == null ? '' : encodeURIComponent(trackingOptionID)) + '&trackingCategoryID2=' + (trackingCategoryID2 == null ? '' : encodeURIComponent(trackingCategoryID2)) + '&trackingOptionID2=' + (trackingOptionID2 == null ? '' : encodeURIComponent(trackingOptionID2)) + '&standardLayout=' + standardLayout + '&paymentsOnly=' + (paymentsOnly == null ? '' : encodeURIComponent(paymentsOnly)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a 1099 Report (US only)
		 * Get Reports/TenNinetyNine
		 * @param {string} reportYear Year of the report e.g. 2013
		 * @return {ReportsTenNinetyNineGetByReportYearReturn} A successful response
		 */
		ReportsTenNinetyNineGetByReportYear(reportYear: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsTenNinetyNineGetByReportYearReturn> {
			return this.http.get<ReportsTenNinetyNineGetByReportYearReturn>(this.baseUri + 'Reports/TenNinetyNine?reportYear=' + (reportYear == null ? '' : encodeURIComponent(reportYear)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a Trial Balance Report
		 * Get Reports/TrialBalance
		 * @param {string} Date YYYY-MM-DD
		 * @param {string} paymentsOnly Set this to true to get cash transactions only
		 * @return {ReportsTrialBalanceGetByDateAndPaymentsOnlyReturn} A successful response
		 */
		ReportsTrialBalanceGetByDateAndPaymentsOnly(Date: string | null | undefined, paymentsOnly: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReportsTrialBalanceGetByDateAndPaymentsOnlyReturn> {
			return this.http.get<ReportsTrialBalanceGetByDateAndPaymentsOnlyReturn>(this.baseUri + 'Reports/TrialBalance?Date=' + (Date == null ? '' : encodeURIComponent(Date)) + '&paymentsOnly=' + (paymentsOnly == null ? '' : encodeURIComponent(paymentsOnly)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an individual BAS Report (AU) or GST Report (NZ)
		 * Get Reports/{ReportID}
		 * @return {Reports_ReportIDGetReturn} A successful response
		 */
		Reports_ReportIDGet(ReportID: string, headersHandler?: () => HttpHeaders): Observable<Reports_ReportIDGetReturn> {
			return this.http.get<Reports_ReportIDGetReturn>(this.baseUri + 'Reports/' + (ReportID == null ? '' : encodeURIComponent(ReportID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a collection of tax rates
		 * Get TaxRates
		 * @param {string} order Order by any element returned
		 * @param {string} where Filter by an any element
		 * @return {TaxRatesGetByOrderAndWhereReturn} A successful response
		 */
		TaxRatesGetByOrderAndWhere(order: string | null | undefined, where: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<TaxRatesGetByOrderAndWhereReturn> {
			return this.http.get<TaxRatesGetByOrderAndWhereReturn>(this.baseUri + 'TaxRates?order=' + (order == null ? '' : encodeURIComponent(order)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create tax rates
		 * Put TaxRates
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {TaxRatesPutBySummarizeErrorsReturn} A successful response
		 */
		TaxRatesPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: TaxRate, headersHandler?: () => HttpHeaders): Observable<TaxRatesPutBySummarizeErrorsReturn> {
			return this.http.put<TaxRatesPutBySummarizeErrorsReturn>(this.baseUri + 'TaxRates?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create or update tax rates
		 * Post TaxRates
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {TaxRatesPostBySummarizeErrorsReturn} A successful response
		 */
		TaxRatesPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: TaxRate, headersHandler?: () => HttpHeaders): Observable<TaxRatesPostBySummarizeErrorsReturn> {
			return this.http.post<TaxRatesPostBySummarizeErrorsReturn>(this.baseUri + 'TaxRates?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a collection of tracking categories and options
		 * Get TrackingCategories
		 * @param {string} order Order by any element returned
		 * @param {string} where Filter by an any element
		 * @param {boolean} includeArchived Include archived records in the response 
		 * @return {TrackingCategoriesGetByOrderAndWhereAndIncludeArchivedReturn} A successful response
		 */
		TrackingCategoriesGetByOrderAndWhereAndIncludeArchived(order: string | null | undefined, where: string | null | undefined, includeArchived: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<TrackingCategoriesGetByOrderAndWhereAndIncludeArchivedReturn> {
			return this.http.get<TrackingCategoriesGetByOrderAndWhereAndIncludeArchivedReturn>(this.baseUri + 'TrackingCategories?order=' + (order == null ? '' : encodeURIComponent(order)) + '&where=' + (where == null ? '' : encodeURIComponent(where)) + '&includeArchived=' + includeArchived, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a tracking category
		 * Put TrackingCategories
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {TrackingCategoriesPutBySummarizeErrorsReturn} A successful response
		 */
		TrackingCategoriesPutBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: TrackingCategory, headersHandler?: () => HttpHeaders): Observable<TrackingCategoriesPutBySummarizeErrorsReturn> {
			return this.http.put<TrackingCategoriesPutBySummarizeErrorsReturn>(this.baseUri + 'TrackingCategories?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create a tracking category
		 * Post TrackingCategories
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {TrackingCategoriesPostBySummarizeErrorsReturn} A successful response
		 */
		TrackingCategoriesPostBySummarizeErrors(summarizeErrors: boolean | null | undefined, requestBody: TrackingCategory, headersHandler?: () => HttpHeaders): Observable<TrackingCategoriesPostBySummarizeErrorsReturn> {
			return this.http.post<TrackingCategoriesPostBySummarizeErrorsReturn>(this.baseUri + 'TrackingCategories?summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a tracking category and it's options
		 * Get TrackingCategories/{TrackingCategoryID}
		 * @return {TrackingCategories_TrackingCategoryIDGetReturn} A successful response
		 */
		TrackingCategories_TrackingCategoryIDGet(TrackingCategoryID: string, headersHandler?: () => HttpHeaders): Observable<TrackingCategories_TrackingCategoryIDGetReturn> {
			return this.http.get<TrackingCategories_TrackingCategoryIDGetReturn>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create or update a tracking category
		 * Post TrackingCategories/{TrackingCategoryID}
		 * @return {TrackingCategories_TrackingCategoryIDPostReturn} A successful response
		 */
		TrackingCategories_TrackingCategoryIDPost(TrackingCategoryID: string, requestBody: TrackingCategory, headersHandler?: () => HttpHeaders): Observable<TrackingCategories_TrackingCategoryIDPostReturn> {
			return this.http.post<TrackingCategories_TrackingCategoryIDPostReturn>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Tracking Category
		 * Delete TrackingCategories/{TrackingCategoryID}
		 * @return {void} A successful request
		 */
		TrackingCategories_TrackingCategoryIDDelete(TrackingCategoryID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add options to a tracking category
		 * Put TrackingCategories/{TrackingCategoryID}/Options
		 * @param {boolean} summarizeErrors If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.
		 * @return {TrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrorsReturn} A successful response
		 */
		TrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrors(TrackingCategoryID: string, summarizeErrors: boolean | null | undefined, requestBody: TrackingOption, headersHandler?: () => HttpHeaders): Observable<TrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrorsReturn> {
			return this.http.put<TrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrorsReturn>(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)) + '/Options&summarizeErrors=' + summarizeErrors, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an option from a tracking category
		 * Delete TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}
		 * @return {void} A successful request
		 */
		TrackingCategories_TrackingCategoryIDOptions_TrackingOptionIDDelete(TrackingCategoryID: string, TrackingOptionID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'TrackingCategories/' + (TrackingCategoryID == null ? '' : encodeURIComponent(TrackingCategoryID)) + '/Options/' + (TrackingOptionID == null ? '' : encodeURIComponent(TrackingOptionID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a collection of Users
		 * Get Users
		 * @param {string} order Order by any element returned
		 * @param {string} where Filter by an any element
		 * @return {UsersGetByOrderAndWhereReturn} A successful response
		 */
		UsersGetByOrderAndWhere(order: string | null | undefined, where: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsersGetByOrderAndWhereReturn> {
			return this.http.get<UsersGetByOrderAndWhereReturn>(this.baseUri + 'Users?order=' + (order == null ? '' : encodeURIComponent(order)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an individual User
		 * Get Users/{UserID}
		 * @return {Users_UserIDGetReturn} A successful response
		 */
		Users_UserIDGet(UserID: string, headersHandler?: () => HttpHeaders): Observable<Users_UserIDGetReturn> {
			return this.http.get<Users_UserIDGetReturn>(this.baseUri + 'Users/' + (UserID == null ? '' : encodeURIComponent(UserID)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface AccountsGetByWhereAndOrderReturn {
		Accounts?: Array<Account>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface AccountsGetByWhereAndOrderReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAccountsGetByWhereAndOrderReturnFormGroup() {
		return new FormGroup<AccountsGetByWhereAndOrderReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsPutReturn {
		Accounts?: Array<Account>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface AccountsPutReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAccountsPutReturnFormGroup() {
		return new FormGroup<AccountsPutReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsPostReturn {
		Accounts?: Array<Account>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface AccountsPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAccountsPostReturnFormGroup() {
		return new FormGroup<AccountsPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accounts_AccountIDGetReturn {
		Accounts?: Array<Account>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Accounts_AccountIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAccounts_AccountIDGetReturnFormGroup() {
		return new FormGroup<Accounts_AccountIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accounts_AccountIDPostReturn {
		Accounts?: Array<Account>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Accounts_AccountIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAccounts_AccountIDPostReturnFormGroup() {
		return new FormGroup<Accounts_AccountIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accounts_AccountIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Accounts_AccountIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAccounts_AccountIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<Accounts_AccountIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accounts_AccountIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Accounts_AccountIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAccounts_AccountIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<Accounts_AccountIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransactionsGetByWhereAndOrderAndUnitdpReturn {
		BankTransactions?: Array<BankTransaction>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransactionsGetByWhereAndOrderAndUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactionsGetByWhereAndOrderAndUnitdpReturnFormGroup() {
		return new FormGroup<BankTransactionsGetByWhereAndOrderAndUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransactionsPutBySummarizeErrorsReturn {
		BankTransactions?: Array<BankTransaction>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransactionsPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactionsPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<BankTransactionsPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransactionsPostByUnitdpAndSummarizeErrorsReturn {
		BankTransactions?: Array<BankTransaction>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransactionsPostByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactionsPostByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<BankTransactionsPostByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransactions_BankTransactionIDGetByUnitdpReturn {
		BankTransactions?: Array<BankTransaction>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransactions_BankTransactionIDGetByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactions_BankTransactionIDGetByUnitdpReturnFormGroup() {
		return new FormGroup<BankTransactions_BankTransactionIDGetByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransactions_BankTransactionIDPostByUnitdpReturn {
		BankTransactions?: Array<BankTransaction>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransactions_BankTransactionIDPostByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactions_BankTransactionIDPostByUnitdpReturnFormGroup() {
		return new FormGroup<BankTransactions_BankTransactionIDPostByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransactions_BankTransactionIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransactions_BankTransactionIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactions_BankTransactionIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<BankTransactions_BankTransactionIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransactions_BankTransactionIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransactions_BankTransactionIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransactions_BankTransactionIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<BankTransactions_BankTransactionIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransfersGetByWhereAndOrderReturn {
		BankTransfers?: Array<BankTransfer>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransfersGetByWhereAndOrderReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransfersGetByWhereAndOrderReturnFormGroup() {
		return new FormGroup<BankTransfersGetByWhereAndOrderReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransfersPutBySummarizeErrorsReturn {
		BankTransfers?: Array<BankTransfer>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransfersPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransfersPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<BankTransfersPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransfers_BankTransferIDGetReturn {
		BankTransfers?: Array<BankTransfer>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransfers_BankTransferIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransfers_BankTransferIDGetReturnFormGroup() {
		return new FormGroup<BankTransfers_BankTransferIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankTransfers_BankTransferIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BankTransfers_BankTransferIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBankTransfers_BankTransferIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<BankTransfers_BankTransferIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandingThemesGetReturn {
		BrandingThemes?: Array<BrandingTheme>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BrandingThemesGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBrandingThemesGetReturnFormGroup() {
		return new FormGroup<BrandingThemesGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandingThemes_BrandingThemeIDGetReturn {
		BrandingThemes?: Array<BrandingTheme>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface BrandingThemes_BrandingThemeIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateBrandingThemes_BrandingThemeIDGetReturnFormGroup() {
		return new FormGroup<BrandingThemes_BrandingThemeIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactGroupsGetByWhereAndOrderReturn {
		ContactGroups?: Array<ContactGroup>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactGroupsGetByWhereAndOrderReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactGroupsGetByWhereAndOrderReturnFormGroup() {
		return new FormGroup<ContactGroupsGetByWhereAndOrderReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactGroupsPutBySummarizeErrorsReturn {
		ContactGroups?: Array<ContactGroup>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactGroupsPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactGroupsPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<ContactGroupsPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactGroupsPostBySummarizeErrorsReturn {
		ContactGroups?: Array<ContactGroup>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactGroupsPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactGroupsPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<ContactGroupsPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactGroups_ContactGroupIDGetReturn {
		ContactGroups?: Array<ContactGroup>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactGroups_ContactGroupIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactGroups_ContactGroupIDGetReturnFormGroup() {
		return new FormGroup<ContactGroups_ContactGroupIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactGroups_ContactGroupIDPostReturn {
		ContactGroups?: Array<ContactGroup>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactGroups_ContactGroupIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactGroups_ContactGroupIDPostReturnFormGroup() {
		return new FormGroup<ContactGroups_ContactGroupIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactGroups_ContactGroupIDContactsPutReturn {
		ContactGroups?: Array<ContactGroup>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactGroups_ContactGroupIDContactsPutReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactGroups_ContactGroupIDContactsPutReturnFormGroup() {
		return new FormGroup<ContactGroups_ContactGroupIDContactsPutReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactsGetByWhereAndOrderAndIncludeArchivedAndIDsReturn {
		Contacts?: Array<Contact>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactsGetByWhereAndOrderAndIncludeArchivedAndIDsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactsGetByWhereAndOrderAndIncludeArchivedAndIDsReturnFormGroup() {
		return new FormGroup<ContactsGetByWhereAndOrderAndIncludeArchivedAndIDsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactsPutReturn {
		Contacts?: Array<Contact>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactsPutReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactsPutReturnFormGroup() {
		return new FormGroup<ContactsPutReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactsPostBySummarizeErrorsReturn {
		Contacts?: Array<Contact>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ContactsPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContactsPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<ContactsPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contacts_ContactIDGetReturn {
		Contacts?: Array<Contact>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Contacts_ContactIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContacts_ContactIDGetReturnFormGroup() {
		return new FormGroup<Contacts_ContactIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contacts_ContactIDPostReturn {
		Contacts?: Array<Contact>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Contacts_ContactIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContacts_ContactIDPostReturnFormGroup() {
		return new FormGroup<Contacts_ContactIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contacts_ContactIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Contacts_ContactIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContacts_ContactIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<Contacts_ContactIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contacts_ContactIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Contacts_ContactIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContacts_ContactIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<Contacts_ContactIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotesGetByWhereAndOrderAndUnitdpAndPageReturn {
		CreditNotes?: Array<CreditNote>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotesGetByWhereAndOrderAndUnitdpAndPageReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotesGetByWhereAndOrderAndUnitdpAndPageReturnFormGroup() {
		return new FormGroup<CreditNotesGetByWhereAndOrderAndUnitdpAndPageReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotesPutByUnitdpAndSummarizeErrorsReturn {
		CreditNotes?: Array<CreditNote>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotesPutByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotesPutByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<CreditNotesPutByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotesPostByUnitdpAndSummarizeErrorsReturn {
		CreditNotes?: Array<CreditNote>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotesPostByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotesPostByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<CreditNotesPostByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotes_CreditNoteIDGetByUnitdpReturn {
		CreditNotes?: Array<CreditNote>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotes_CreditNoteIDGetByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotes_CreditNoteIDGetByUnitdpReturnFormGroup() {
		return new FormGroup<CreditNotes_CreditNoteIDGetByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotes_CreditNoteIDPostByUnitdpReturn {
		CreditNotes?: Array<CreditNote>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotes_CreditNoteIDPostByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotes_CreditNoteIDPostByUnitdpReturnFormGroup() {
		return new FormGroup<CreditNotes_CreditNoteIDPostByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotes_CreditNoteIDAllocationsPutReturn {
		CreditNotes?: Array<CreditNote>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotes_CreditNoteIDAllocationsPutReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotes_CreditNoteIDAllocationsPutReturnFormGroup() {
		return new FormGroup<CreditNotes_CreditNoteIDAllocationsPutReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotes_CreditNoteIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotes_CreditNoteIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotes_CreditNoteIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<CreditNotes_CreditNoteIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNotes_CreditNoteIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CreditNotes_CreditNoteIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreditNotes_CreditNoteIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<CreditNotes_CreditNoteIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrenciesGetByWhereAndOrderReturn {
		Currencies?: Array<Currency>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CurrenciesGetByWhereAndOrderReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCurrenciesGetByWhereAndOrderReturnFormGroup() {
		return new FormGroup<CurrenciesGetByWhereAndOrderReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrenciesPutBySummarizeErrorsReturn {
		Currencies?: Array<Currency>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface CurrenciesPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCurrenciesPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<CurrenciesPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeesGetByWhereAndOrderReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		Employees?: Array<Employee>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface EmployeesGetByWhereAndOrderReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateEmployeesGetByWhereAndOrderReturnFormGroup() {
		return new FormGroup<EmployeesGetByWhereAndOrderReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeesPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		Employees?: Array<Employee>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface EmployeesPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateEmployeesPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<EmployeesPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeesPostBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		Employees?: Array<Employee>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface EmployeesPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateEmployeesPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<EmployeesPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Employees_EmployeeIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		Employees?: Array<Employee>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Employees_EmployeeIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateEmployees_EmployeeIDGetReturnFormGroup() {
		return new FormGroup<Employees_EmployeeIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Employees_EmployeeIDPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		Employees?: Array<Employee>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Employees_EmployeeIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateEmployees_EmployeeIDPostReturnFormGroup() {
		return new FormGroup<Employees_EmployeeIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpenseClaimsGetByWhereAndOrderReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		ExpenseClaims?: Array<ExpenseClaim>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ExpenseClaimsGetByWhereAndOrderReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateExpenseClaimsGetByWhereAndOrderReturnFormGroup() {
		return new FormGroup<ExpenseClaimsGetByWhereAndOrderReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpenseClaimsPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		ExpenseClaims?: Array<ExpenseClaim>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ExpenseClaimsPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateExpenseClaimsPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<ExpenseClaimsPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpenseClaimsPostBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		ExpenseClaims?: Array<ExpenseClaim>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ExpenseClaimsPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateExpenseClaimsPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<ExpenseClaimsPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpenseClaims_ExpenseClaimIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		ExpenseClaims?: Array<ExpenseClaim>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ExpenseClaims_ExpenseClaimIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateExpenseClaims_ExpenseClaimIDGetReturnFormGroup() {
		return new FormGroup<ExpenseClaims_ExpenseClaimIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpenseClaims_ExpenseClaimIDPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;
		ExpenseClaims?: Array<ExpenseClaim>;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ExpenseClaims_ExpenseClaimIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateExpenseClaims_ExpenseClaimIDPostReturnFormGroup() {
		return new FormGroup<ExpenseClaims_ExpenseClaimIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbersReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Invoices?: Array<Invoice>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface InvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbersReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbersReturnFormGroup() {
		return new FormGroup<InvoicesGetByWhereAndOrderAndUnitdpAndIDsAndContactIDsAndStatusesAndInvoiceNumbersReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoicesPutByUnitdpAndSummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Invoices?: Array<Invoice>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface InvoicesPutByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoicesPutByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<InvoicesPutByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoicesPostByUnitdpAndSummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Invoices?: Array<Invoice>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface InvoicesPostByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoicesPostByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<InvoicesPostByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Invoices_InvoiceIDGetByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Invoices?: Array<Invoice>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Invoices_InvoiceIDGetByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoices_InvoiceIDGetByUnitdpReturnFormGroup() {
		return new FormGroup<Invoices_InvoiceIDGetByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Invoices_InvoiceIDPostByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Invoices?: Array<Invoice>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Invoices_InvoiceIDPostByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoices_InvoiceIDPostByUnitdpReturnFormGroup() {
		return new FormGroup<Invoices_InvoiceIDPostByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Invoices_InvoiceIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Invoices_InvoiceIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoices_InvoiceIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<Invoices_InvoiceIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Invoices_InvoiceIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Invoices_InvoiceIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoices_InvoiceIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<Invoices_InvoiceIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Invoices_InvoiceIDOnlineInvoiceGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		OnlineInvoices?: Array<OnlineInvoice>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Invoices_InvoiceIDOnlineInvoiceGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvoices_InvoiceIDOnlineInvoiceGetReturnFormGroup() {
		return new FormGroup<Invoices_InvoiceIDOnlineInvoiceGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsGetByWhereAndOrderAndUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Items?: Array<Item>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ItemsGetByWhereAndOrderAndUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateItemsGetByWhereAndOrderAndUnitdpReturnFormGroup() {
		return new FormGroup<ItemsGetByWhereAndOrderAndUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsPutByUnitdpAndSummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Items?: Array<Item>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ItemsPutByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateItemsPutByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<ItemsPutByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsPostByUnitdpAndSummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Items?: Array<Item>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ItemsPostByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateItemsPostByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<ItemsPostByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Items_ItemIDGetByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Items?: Array<Item>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Items_ItemIDGetByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateItems_ItemIDGetByUnitdpReturnFormGroup() {
		return new FormGroup<Items_ItemIDGetByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Items_ItemIDPostByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Items?: Array<Item>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Items_ItemIDPostByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateItems_ItemIDPostByUnitdpReturnFormGroup() {
		return new FormGroup<Items_ItemIDPostByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JournalsGetByPaymentsOnlyAndOffsetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Journals?: Array<Journal>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface JournalsGetByPaymentsOnlyAndOffsetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateJournalsGetByPaymentsOnlyAndOffsetReturnFormGroup() {
		return new FormGroup<JournalsGetByPaymentsOnlyAndOffsetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Journals_JournalIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Journals?: Array<Journal>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Journals_JournalIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateJournals_JournalIDGetReturnFormGroup() {
		return new FormGroup<Journals_JournalIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionIDReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		LinkedTransactions?: Array<LinkedTransaction>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface LinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionIDReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionIDReturnFormGroup() {
		return new FormGroup<LinkedTransactionsGetByPageAndSourceTransactionIDAndContactIDAndStatusAndTargetTransactionIDReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedTransactionsPutReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		LinkedTransactions?: Array<LinkedTransaction>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface LinkedTransactionsPutReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTransactionsPutReturnFormGroup() {
		return new FormGroup<LinkedTransactionsPutReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedTransactionsPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		LinkedTransactions?: Array<LinkedTransaction>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface LinkedTransactionsPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTransactionsPostReturnFormGroup() {
		return new FormGroup<LinkedTransactionsPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedTransactions_LinkedTransactionIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		LinkedTransactions?: Array<LinkedTransaction>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface LinkedTransactions_LinkedTransactionIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTransactions_LinkedTransactionIDGetReturnFormGroup() {
		return new FormGroup<LinkedTransactions_LinkedTransactionIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedTransactions_LinkedTransactionIDPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		LinkedTransactions?: Array<LinkedTransaction>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface LinkedTransactions_LinkedTransactionIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTransactions_LinkedTransactionIDPostReturnFormGroup() {
		return new FormGroup<LinkedTransactions_LinkedTransactionIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualJournalsGetByWhereAndOrderAndPageReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		ManualJournals?: Array<ManualJournal>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ManualJournalsGetByWhereAndOrderAndPageReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateManualJournalsGetByWhereAndOrderAndPageReturnFormGroup() {
		return new FormGroup<ManualJournalsGetByWhereAndOrderAndPageReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualJournalsPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		ManualJournals?: Array<ManualJournal>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ManualJournalsPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateManualJournalsPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<ManualJournalsPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualJournalsPostBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		ManualJournals?: Array<ManualJournal>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ManualJournalsPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateManualJournalsPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<ManualJournalsPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualJournals_ManualJournalIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		ManualJournals?: Array<ManualJournal>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ManualJournals_ManualJournalIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateManualJournals_ManualJournalIDGetReturnFormGroup() {
		return new FormGroup<ManualJournals_ManualJournalIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualJournals_ManualJournalIDPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		ManualJournals?: Array<ManualJournal>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ManualJournals_ManualJournalIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateManualJournals_ManualJournalIDPostReturnFormGroup() {
		return new FormGroup<ManualJournals_ManualJournalIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualJournals_ManualJournalIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ManualJournals_ManualJournalIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateManualJournals_ManualJournalIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<ManualJournals_ManualJournalIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualJournals_ManualJournalIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ManualJournals_ManualJournalIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateManualJournals_ManualJournalIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<ManualJournals_ManualJournalIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganisationGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Organisations?: Array<Organisation>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface OrganisationGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateOrganisationGetReturnFormGroup() {
		return new FormGroup<OrganisationGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Organisation_ShortCodeGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Organisations?: Array<Organisation>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Organisation_ShortCodeGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateOrganisation_ShortCodeGetReturnFormGroup() {
		return new FormGroup<Organisation_ShortCodeGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OverpaymentsGetByWhereAndOrderAndPageAndUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Overpayments?: Array<Overpayment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface OverpaymentsGetByWhereAndOrderAndPageAndUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateOverpaymentsGetByWhereAndOrderAndPageAndUnitdpReturnFormGroup() {
		return new FormGroup<OverpaymentsGetByWhereAndOrderAndPageAndUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Overpayments_OverpaymentIDGetByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Overpayments?: Array<Overpayment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Overpayments_OverpaymentIDGetByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateOverpayments_OverpaymentIDGetByUnitdpReturnFormGroup() {
		return new FormGroup<Overpayments_OverpaymentIDGetByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Overpayments_OverpaymentIDAllocationsPutReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Overpayments?: Array<Overpayment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Overpayments_OverpaymentIDAllocationsPutReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateOverpayments_OverpaymentIDAllocationsPutReturnFormGroup() {
		return new FormGroup<Overpayments_OverpaymentIDAllocationsPutReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentsGetByWhereAndOrderReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Payments?: Array<Payment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PaymentsGetByWhereAndOrderReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsGetByWhereAndOrderReturnFormGroup() {
		return new FormGroup<PaymentsGetByWhereAndOrderReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentsPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Payments?: Array<Payment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PaymentsPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<PaymentsPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentsPostBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Payments?: Array<Payment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PaymentsPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<PaymentsPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Payments_PaymentIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Payments?: Array<Payment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Payments_PaymentIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePayments_PaymentIDGetReturnFormGroup() {
		return new FormGroup<Payments_PaymentIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Payments_PaymentIDPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Payments?: Array<Payment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Payments_PaymentIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePayments_PaymentIDPostReturnFormGroup() {
		return new FormGroup<Payments_PaymentIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrepaymentsGetByWhereAndOrderAndPageAndUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Prepayments?: Array<Prepayment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PrepaymentsGetByWhereAndOrderAndPageAndUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePrepaymentsGetByWhereAndOrderAndPageAndUnitdpReturnFormGroup() {
		return new FormGroup<PrepaymentsGetByWhereAndOrderAndPageAndUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Prepayments_PrepaymentIDGetByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Prepayments?: Array<Prepayment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Prepayments_PrepaymentIDGetByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePrepayments_PrepaymentIDGetByUnitdpReturnFormGroup() {
		return new FormGroup<Prepayments_PrepaymentIDGetByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Prepayments_PrepaymentIDAllocationsPutReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;
		Prepayments?: Array<Prepayment>;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Prepayments_PrepaymentIDAllocationsPutReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePrepayments_PrepaymentIDAllocationsPutReturnFormGroup() {
		return new FormGroup<Prepayments_PrepaymentIDAllocationsPutReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatusReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		PurchaseOrders?: Array<PurchaseOrder>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatusReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatusReturnFormGroup() {
		return new FormGroup<PurchaseOrdersGetByOrderAndPageAndDateFromAndDateToAndStatusReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseOrdersPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		PurchaseOrders?: Array<PurchaseOrder>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PurchaseOrdersPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrdersPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<PurchaseOrdersPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseOrdersPostBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		PurchaseOrders?: Array<PurchaseOrder>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PurchaseOrdersPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrdersPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<PurchaseOrdersPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseOrders_PurchaseOrderIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		PurchaseOrders?: Array<PurchaseOrder>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PurchaseOrders_PurchaseOrderIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrders_PurchaseOrderIDGetReturnFormGroup() {
		return new FormGroup<PurchaseOrders_PurchaseOrderIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseOrders_PurchaseOrderIDPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		PurchaseOrders?: Array<PurchaseOrder>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PurchaseOrders_PurchaseOrderIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrders_PurchaseOrderIDPostReturnFormGroup() {
		return new FormGroup<PurchaseOrders_PurchaseOrderIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseOrders_PurchaseOrderIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PurchaseOrders_PurchaseOrderIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrders_PurchaseOrderIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<PurchaseOrders_PurchaseOrderIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseOrders_PurchaseOrderIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface PurchaseOrders_PurchaseOrderIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrders_PurchaseOrderIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<PurchaseOrders_PurchaseOrderIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReceiptsGetByOrderAndWhereAndUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Receipts?: Array<Receipt>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReceiptsGetByOrderAndWhereAndUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReceiptsGetByOrderAndWhereAndUnitdpReturnFormGroup() {
		return new FormGroup<ReceiptsGetByOrderAndWhereAndUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReceiptsPutByUnitdpAndSummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Receipts?: Array<Receipt>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReceiptsPutByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReceiptsPutByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<ReceiptsPutByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReceiptsPostByUnitdpAndSummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Receipts?: Array<Receipt>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReceiptsPostByUnitdpAndSummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReceiptsPostByUnitdpAndSummarizeErrorsReturnFormGroup() {
		return new FormGroup<ReceiptsPostByUnitdpAndSummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Receipts_ReceiptIDGetByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Receipts?: Array<Receipt>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Receipts_ReceiptIDGetByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReceipts_ReceiptIDGetByUnitdpReturnFormGroup() {
		return new FormGroup<Receipts_ReceiptIDGetByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Receipts_ReceiptIDPostByUnitdpReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Receipts?: Array<Receipt>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Receipts_ReceiptIDPostByUnitdpReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReceipts_ReceiptIDPostByUnitdpReturnFormGroup() {
		return new FormGroup<Receipts_ReceiptIDPostByUnitdpReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Receipts_ReceiptIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Receipts_ReceiptIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReceipts_ReceiptIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<Receipts_ReceiptIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Receipts_ReceiptIDAttachments_FileNamePostReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Receipts_ReceiptIDAttachments_FileNamePostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReceipts_ReceiptIDAttachments_FileNamePostReturnFormGroup() {
		return new FormGroup<Receipts_ReceiptIDAttachments_FileNamePostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepeatingInvoicesGetByOrderAndWhereReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		RepeatingInvoices?: Array<RepeatingInvoice>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface RepeatingInvoicesGetByOrderAndWhereReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateRepeatingInvoicesGetByOrderAndWhereReturnFormGroup() {
		return new FormGroup<RepeatingInvoicesGetByOrderAndWhereReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepeatingInvoices_RepeatingInvoiceIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		RepeatingInvoices?: Array<RepeatingInvoice>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface RepeatingInvoices_RepeatingInvoiceIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateRepeatingInvoices_RepeatingInvoiceIDGetReturnFormGroup() {
		return new FormGroup<RepeatingInvoices_RepeatingInvoiceIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepeatingInvoices_RepeatingInvoiceIDAttachmentsGetReturn {
		Attachments?: Array<Attachment>;

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface RepeatingInvoices_RepeatingInvoiceIDAttachmentsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateRepeatingInvoices_RepeatingInvoiceIDAttachmentsGetReturnFormGroup() {
		return new FormGroup<RepeatingInvoices_RepeatingInvoiceIDAttachmentsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<ReportSummary>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsGetReturnFormGroup() {
		return new FormGroup<ReportsGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDateReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDateReturnFormGroup() {
		return new FormGroup<ReportsAgedPayablesByContactGetByContactIDAndDateAndFromDateAndToDateReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDateReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDateReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDateReturnFormGroup() {
		return new FormGroup<ReportsAgedReceivablesByContactGetByContactIDAndDateAndFromDateAndToDateReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturnFormGroup() {
		return new FormGroup<ReportsBalanceSheetGetByDateAndTrackingOptionID1AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsBankStatementGetByBankAccountIDAndFromDateAndToDateReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsBankStatementGetByBankAccountIDAndFromDateAndToDateReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsBankStatementGetByBankAccountIDAndFromDateAndToDateReturnFormGroup() {
		return new FormGroup<ReportsBankStatementGetByBankAccountIDAndFromDateAndToDateReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsBankSummaryGetByFromDateAndToDateReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsBankSummaryGetByFromDateAndToDateReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsBankSummaryGetByFromDateAndToDateReturnFormGroup() {
		return new FormGroup<ReportsBankSummaryGetByFromDateAndToDateReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsBudgetSummaryGetByDateAndPeriodsAndTimeframeReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsBudgetSummaryGetByDateAndPeriodsAndTimeframeReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsBudgetSummaryGetByDateAndPeriodsAndTimeframeReturnFormGroup() {
		return new FormGroup<ReportsBudgetSummaryGetByDateAndPeriodsAndTimeframeReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsExecutiveSummaryGetByDateReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsExecutiveSummaryGetByDateReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsExecutiveSummaryGetByDateReturnFormGroup() {
		return new FormGroup<ReportsExecutiveSummaryGetByDateReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturnFormGroup() {
		return new FormGroup<ReportsProfitAndLossGetByFromDateAndToDateAndTrackingCategoryIDAndTrackingOptionIDAndTrackingCategoryID2AndTrackingOptionID2AndStandardLayoutAndPaymentsOnlyReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsTenNinetyNineGetByReportYearReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsTenNinetyNineGetByReportYearReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsTenNinetyNineGetByReportYearReturnFormGroup() {
		return new FormGroup<ReportsTenNinetyNineGetByReportYearReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportsTrialBalanceGetByDateAndPaymentsOnlyReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<Report>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface ReportsTrialBalanceGetByDateAndPaymentsOnlyReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReportsTrialBalanceGetByDateAndPaymentsOnlyReturnFormGroup() {
		return new FormGroup<ReportsTrialBalanceGetByDateAndPaymentsOnlyReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Reports_ReportIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;
		Reports?: Array<TaxReport>;

		/** OK for a successful response */
		Status?: string | null;
	}
	export interface Reports_ReportIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateReports_ReportIDGetReturnFormGroup() {
		return new FormGroup<Reports_ReportIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRatesGetByOrderAndWhereReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TaxRates?: Array<TaxRate>;
	}
	export interface TaxRatesGetByOrderAndWhereReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTaxRatesGetByOrderAndWhereReturnFormGroup() {
		return new FormGroup<TaxRatesGetByOrderAndWhereReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRatesPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TaxRates?: Array<TaxRate>;
	}
	export interface TaxRatesPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTaxRatesPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<TaxRatesPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRatesPostBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TaxRates?: Array<TaxRate>;
	}
	export interface TaxRatesPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTaxRatesPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<TaxRatesPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingCategoriesGetByOrderAndWhereAndIncludeArchivedReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TrackingCategories?: Array<TrackingCategory>;
	}
	export interface TrackingCategoriesGetByOrderAndWhereAndIncludeArchivedReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTrackingCategoriesGetByOrderAndWhereAndIncludeArchivedReturnFormGroup() {
		return new FormGroup<TrackingCategoriesGetByOrderAndWhereAndIncludeArchivedReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingCategoriesPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TrackingCategories?: Array<TrackingCategory>;
	}
	export interface TrackingCategoriesPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTrackingCategoriesPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<TrackingCategoriesPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingCategoriesPostBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TrackingCategories?: Array<TrackingCategory>;
	}
	export interface TrackingCategoriesPostBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTrackingCategoriesPostBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<TrackingCategoriesPostBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingCategories_TrackingCategoryIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TrackingCategories?: Array<TrackingCategory>;
	}
	export interface TrackingCategories_TrackingCategoryIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTrackingCategories_TrackingCategoryIDGetReturnFormGroup() {
		return new FormGroup<TrackingCategories_TrackingCategoryIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingCategories_TrackingCategoryIDPostReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TrackingCategories?: Array<TrackingCategory>;
	}
	export interface TrackingCategories_TrackingCategoryIDPostReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTrackingCategories_TrackingCategoryIDPostReturnFormGroup() {
		return new FormGroup<TrackingCategories_TrackingCategoryIDPostReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrorsReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		TrackingCategories?: Array<TrackingCategory>;
	}
	export interface TrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrorsReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrorsReturnFormGroup() {
		return new FormGroup<TrackingCategories_TrackingCategoryIDOptionsPutBySummarizeErrorsReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersGetByOrderAndWhereReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		Users?: Array<User>;
	}
	export interface UsersGetByOrderAndWhereReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUsersGetByOrderAndWhereReturnFormGroup() {
		return new FormGroup<UsersGetByOrderAndWhereReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users_UserIDGetReturn {

		/** DateTime of the request */
		DateTimeUTC?: Date | null;

		/** Unique identifier for each response */
		ID?: string | null;

		/** Name of the application that made the request */
		ProviderName?: string | null;

		/** OK for a successful response */
		Status?: string | null;
		Users?: Array<User>;
	}
	export interface Users_UserIDGetReturnFormProperties {

		/** DateTime of the request */
		DateTimeUTC: FormControl<Date | null | undefined>,

		/** Unique identifier for each response */
		ID: FormControl<string | null | undefined>,

		/** Name of the application that made the request */
		ProviderName: FormControl<string | null | undefined>,

		/** OK for a successful response */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUsers_UserIDGetReturnFormGroup() {
		return new FormGroup<Users_UserIDGetReturnFormProperties>({
			DateTimeUTC: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

}

