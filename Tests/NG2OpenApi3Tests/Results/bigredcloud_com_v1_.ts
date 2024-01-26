import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcEntryDto {
		accountCode?: string | null;
		analysisCategoryId?: number | null;
		description?: string | null;
		id?: number | null;
		value?: number | null;
	}
	export interface AcEntryDtoFormProperties {
		accountCode: FormControl<string | null | undefined>,
		analysisCategoryId: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAcEntryDtoFormGroup() {
		return new FormGroup<AcEntryDtoFormProperties>({
			accountCode: new FormControl<string | null | undefined>(undefined),
			analysisCategoryId: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AccountDto {
		accountGroup?: string | null;
		accountType?: string | null;
		code?: string | null;
		description?: string | null;
		id?: number | null;
	}
	export interface AccountDtoFormProperties {
		accountGroup: FormControl<string | null | undefined>,
		accountType: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateAccountDtoFormGroup() {
		return new FormGroup<AccountDtoFormProperties>({
			accountGroup: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AccountTranDto {
		bookTranId?: number | null;
		bookTranTypeId?: number | null;
		bookTransactionReference?: string | null;
		bookTypeDesc?: string | null;
		credit?: number | null;
		debit?: number | null;
		id?: number | null;
		procDate?: Date | null;
	}
	export interface AccountTranDtoFormProperties {
		bookTranId: FormControl<number | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		bookTransactionReference: FormControl<string | null | undefined>,
		bookTypeDesc: FormControl<string | null | undefined>,
		credit: FormControl<number | null | undefined>,
		debit: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccountTranDtoFormGroup() {
		return new FormGroup<AccountTranDtoFormProperties>({
			bookTranId: new FormControl<number | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			bookTransactionReference: new FormControl<string | null | undefined>(undefined),
			bookTypeDesc: new FormControl<string | null | undefined>(undefined),
			credit: new FormControl<number | null | undefined>(undefined),
			debit: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AcudfValueDto {
		description?: string | null;
		id?: number | null;
		userDefinedFieldId?: number | null;
		value?: string | null;
	}
	export interface AcudfValueDtoFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		userDefinedFieldId: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAcudfValueDtoFormGroup() {
		return new FormGroup<AcudfValueDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			userDefinedFieldId: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalysisCategoryDto {
		accountCode?: string | null;
		accountId?: number | null;
		categoryTypeId?: number | null;
		description?: string | null;
		id?: number | null;
		orderIndex?: number | null;
	}
	export interface AnalysisCategoryDtoFormProperties {
		accountCode: FormControl<string | null | undefined>,
		accountId: FormControl<number | null | undefined>,
		categoryTypeId: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		orderIndex: FormControl<number | null | undefined>,
	}
	export function CreateAnalysisCategoryDtoFormGroup() {
		return new FormGroup<AnalysisCategoryDtoFormProperties>({
			accountCode: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<number | null | undefined>(undefined),
			categoryTypeId: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			orderIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BankAccountDto {
		acCode?: string | null;
		accountName?: string | null;
		accountNumber?: string | null;
		address?: Array<string>;
		bankFeedSource?: number | null;
		businessIdentifierCodes?: string | null;
		categoryId?: number | null;
		creditorScheme?: string | null;
		details?: string | null;
		id?: number | null;
		internationalBankAccountNumber?: string | null;
		isDefaultBank?: boolean | null;
		lastChq?: string | null;
		nominalAcCode?: string | null;
		oBalance?: number | null;
		sortCode?: string | null;
		timestamp?: string | null;
	}
	export interface BankAccountDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		accountName: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,
		bankFeedSource: FormControl<number | null | undefined>,
		businessIdentifierCodes: FormControl<string | null | undefined>,
		categoryId: FormControl<number | null | undefined>,
		creditorScheme: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		internationalBankAccountNumber: FormControl<string | null | undefined>,
		isDefaultBank: FormControl<boolean | null | undefined>,
		lastChq: FormControl<string | null | undefined>,
		nominalAcCode: FormControl<string | null | undefined>,
		oBalance: FormControl<number | null | undefined>,
		sortCode: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountDtoFormGroup() {
		return new FormGroup<BankAccountDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			bankFeedSource: new FormControl<number | null | undefined>(undefined),
			businessIdentifierCodes: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<number | null | undefined>(undefined),
			creditorScheme: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			internationalBankAccountNumber: new FormControl<string | null | undefined>(undefined),
			isDefaultBank: new FormControl<boolean | null | undefined>(undefined),
			lastChq: new FormControl<string | null | undefined>(undefined),
			nominalAcCode: new FormControl<string | null | undefined>(undefined),
			oBalance: new FormControl<number | null | undefined>(undefined),
			sortCode: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankAccountQueryDto {
		acCode?: string | null;
		accountName?: string | null;
		accountNumber?: string | null;
		address?: Array<string>;
		bankFeedSource?: number | null;
		businessIdentifierCodes?: string | null;
		categoryId?: number | null;
		creditorScheme?: string | null;
		details?: string | null;
		id?: number | null;
		internationalBankAccountNumber?: string | null;
		isDefaultBank?: boolean | null;
		lastChq?: string | null;
		nominalAcCode?: string | null;
		sortCode?: string | null;
		timestamp?: string | null;
	}
	export interface BankAccountQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		accountName: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,
		bankFeedSource: FormControl<number | null | undefined>,
		businessIdentifierCodes: FormControl<string | null | undefined>,
		categoryId: FormControl<number | null | undefined>,
		creditorScheme: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		internationalBankAccountNumber: FormControl<string | null | undefined>,
		isDefaultBank: FormControl<boolean | null | undefined>,
		lastChq: FormControl<string | null | undefined>,
		nominalAcCode: FormControl<string | null | undefined>,
		sortCode: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountQueryDtoFormGroup() {
		return new FormGroup<BankAccountQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			bankFeedSource: new FormControl<number | null | undefined>(undefined),
			businessIdentifierCodes: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<number | null | undefined>(undefined),
			creditorScheme: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			internationalBankAccountNumber: new FormControl<string | null | undefined>(undefined),
			isDefaultBank: new FormControl<boolean | null | undefined>(undefined),
			lastChq: new FormControl<string | null | undefined>(undefined),
			nominalAcCode: new FormControl<string | null | undefined>(undefined),
			sortCode: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchItem_BankAccountDto_ {
		item?: BankAccountDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_BankAccountDto_OpCode;
	}
	export interface BatchItem_BankAccountDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_BankAccountDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_BankAccountDto_FormGroup() {
		return new FormGroup<BatchItem_BankAccountDto_FormProperties>({
			opCode: new FormControl<BatchItem_BankAccountDto_OpCode | null | undefined>(undefined),
		});

	}

	export enum BatchItem_BankAccountDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_CashPaymentDto_ {
		item?: CashPaymentDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_CashPaymentDto_OpCode;
	}
	export interface BatchItem_CashPaymentDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_CashPaymentDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_CashPaymentDto_FormGroup() {
		return new FormGroup<BatchItem_CashPaymentDto_FormProperties>({
			opCode: new FormControl<BatchItem_CashPaymentDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface CashPaymentDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bankAccountCode?: string | null;
		bankAccountId?: number | null;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		detailCollection?: Array<string>;
		discount?: number | null;
		entryDate?: Date | null;
		id?: number | null;
		ledger?: number | null;
		lodgement?: number | null;
		note?: string | null;
		plaidTransactionId?: string | null;
		procDate?: Date | null;
		supplierId?: number | null;
		timestamp?: string | null;
		total?: number | null;
	}
	export interface CashPaymentDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bankAccountCode: FormControl<string | null | undefined>,
		bankAccountId: FormControl<number | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		discount: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		ledger: FormControl<number | null | undefined>,
		lodgement: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		plaidTransactionId: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		supplierId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateCashPaymentDtoFormGroup() {
		return new FormGroup<CashPaymentDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bankAccountCode: new FormControl<string | null | undefined>(undefined),
			bankAccountId: new FormControl<number | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			ledger: new FormControl<number | null | undefined>(undefined),
			lodgement: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			plaidTransactionId: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			supplierId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_CashPaymentDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_CashReceiptDto_ {
		item?: CashReceiptDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_CashReceiptDto_OpCode;
	}
	export interface BatchItem_CashReceiptDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_CashReceiptDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_CashReceiptDto_FormGroup() {
		return new FormGroup<BatchItem_CashReceiptDto_FormProperties>({
			opCode: new FormControl<BatchItem_CashReceiptDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface CashReceiptDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		detailCollection?: Array<string>;
		discount?: number | null;
		entryDate?: Date | null;
		id?: number | null;
		ledger?: number | null;
		note?: string | null;
		plaidTransactionId?: string | null;
		procDate?: Date | null;
		timestamp?: string | null;
		total?: number | null;
		unallocated?: number | null;
		vatEntries?: Array<VatEntryDto>;
		vatTypeId?: number | null;
	}
	export interface CashReceiptDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		discount: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		ledger: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		plaidTransactionId: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		unallocated: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreateCashReceiptDtoFormGroup() {
		return new FormGroup<CashReceiptDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			ledger: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			plaidTransactionId: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			unallocated: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VatEntryDto {
		amount?: number | null;
		id?: number | null;
		percentage?: number | null;
		vatRateId?: number | null;
	}
	export interface VatEntryDtoFormProperties {
		amount: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		percentage: FormControl<number | null | undefined>,
		vatRateId: FormControl<number | null | undefined>,
	}
	export function CreateVatEntryDtoFormGroup() {
		return new FormGroup<VatEntryDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			vatRateId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_CashReceiptDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_CustomerDto_ {
		item?: CustomerDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_CustomerDto_OpCode;
	}
	export interface BatchItem_CustomerDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_CustomerDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_CustomerDto_FormGroup() {
		return new FormGroup<BatchItem_CustomerDto_FormProperties>({
			opCode: new FormControl<BatchItem_CustomerDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface CustomerDto {
		accountName?: string | null;
		accountNumber?: string | null;
		additionalEmails?: Array<string>;
		address?: Array<string>;
		authCode?: string | null;
		bank?: EFTBankDto;
		businessIdentifierCode?: string | null;
		code?: string | null;
		contact?: string | null;
		delivery?: Array<string>;
		eFTReference?: string | null;
		email?: string | null;
		fax?: string | null;
		id?: number | null;
		internationalBankAccountNumber?: string | null;
		ledgerBalance?: number | null;
		mobile?: string | null;
		name?: string | null;
		openingBalance?: OwnerOpeningBalanceInPeriodsDto;
		openingBalances?: Array<OwnerOpeningBalanceDto>;
		ourCode?: string | null;
		ownerTypeId?: number | null;
		phone?: string | null;
		timestamp?: string | null;
		vatAnalysisTypeId?: number | null;
		vatReg?: string | null;
		vatType?: number | null;
	}
	export interface CustomerDtoFormProperties {
		accountName: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,
		authCode: FormControl<string | null | undefined>,
		businessIdentifierCode: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		contact: FormControl<string | null | undefined>,
		eFTReference: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		internationalBankAccountNumber: FormControl<string | null | undefined>,
		ledgerBalance: FormControl<number | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ourCode: FormControl<string | null | undefined>,
		ownerTypeId: FormControl<number | null | undefined>,
		phone: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatReg: FormControl<string | null | undefined>,
		vatType: FormControl<number | null | undefined>,
	}
	export function CreateCustomerDtoFormGroup() {
		return new FormGroup<CustomerDtoFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			authCode: new FormControl<string | null | undefined>(undefined),
			businessIdentifierCode: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			contact: new FormControl<string | null | undefined>(undefined),
			eFTReference: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			internationalBankAccountNumber: new FormControl<string | null | undefined>(undefined),
			ledgerBalance: new FormControl<number | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ourCode: new FormControl<string | null | undefined>(undefined),
			ownerTypeId: new FormControl<number | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatReg: new FormControl<string | null | undefined>(undefined),
			vatType: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EFTBankDto {
		branch?: string | null;
		id?: number | null;
		name?: string | null;
		sortCode?: string | null;
	}
	export interface EFTBankDtoFormProperties {
		branch: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		sortCode: FormControl<string | null | undefined>,
	}
	export function CreateEFTBankDtoFormGroup() {
		return new FormGroup<EFTBankDtoFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OwnerOpeningBalanceInPeriodsDto {
		currentMonth?: number | null;
		oneMonthOld?: number | null;
		threeMonthsOld?: number | null;
		twoMonthsOld?: number | null;
	}
	export interface OwnerOpeningBalanceInPeriodsDtoFormProperties {
		currentMonth: FormControl<number | null | undefined>,
		oneMonthOld: FormControl<number | null | undefined>,
		threeMonthsOld: FormControl<number | null | undefined>,
		twoMonthsOld: FormControl<number | null | undefined>,
	}
	export function CreateOwnerOpeningBalanceInPeriodsDtoFormGroup() {
		return new FormGroup<OwnerOpeningBalanceInPeriodsDtoFormProperties>({
			currentMonth: new FormControl<number | null | undefined>(undefined),
			oneMonthOld: new FormControl<number | null | undefined>(undefined),
			threeMonthsOld: new FormControl<number | null | undefined>(undefined),
			twoMonthsOld: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OwnerOpeningBalanceDto {
		entryDate?: Date | null;
		id?: number | null;
		isChanged?: boolean | null;
		procDate?: Date | null;
		reference?: string | null;
		timestamp?: string | null;
		total?: number | null;
		totalVAT?: number | null;
		unpaid?: number | null;
		vatEntries?: Array<OwnerOpeningBalanceVatEntryDto>;
	}
	export interface OwnerOpeningBalanceDtoFormProperties {
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		isChanged: FormControl<boolean | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
	}
	export function CreateOwnerOpeningBalanceDtoFormGroup() {
		return new FormGroup<OwnerOpeningBalanceDtoFormProperties>({
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isChanged: new FormControl<boolean | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OwnerOpeningBalanceVatEntryDto {
		amount?: number | null;
		vatRateId?: number | null;
	}
	export interface OwnerOpeningBalanceVatEntryDtoFormProperties {
		amount: FormControl<number | null | undefined>,
		vatRateId: FormControl<number | null | undefined>,
	}
	export function CreateOwnerOpeningBalanceVatEntryDtoFormGroup() {
		return new FormGroup<OwnerOpeningBalanceVatEntryDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			vatRateId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_CustomerDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_PaymentDto_ {
		item?: PaymentDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_PaymentDto_OpCode;
	}
	export interface BatchItem_PaymentDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_PaymentDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_PaymentDto_FormGroup() {
		return new FormGroup<BatchItem_PaymentDto_FormProperties>({
			opCode: new FormControl<BatchItem_PaymentDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface PaymentDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bankAccountCode?: string | null;
		bankAccountId?: number | null;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		detailCollection?: Array<string>;
		discount?: number | null;
		entryDate?: Date | null;
		id?: number | null;
		note?: string | null;
		plaidTransactionId?: string | null;
		procDate?: Date | null;
		reference?: string | null;
		supplierId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		transferBankCode?: string | null;
		transferBankId?: number | null;
		unallocated?: number | null;
	}
	export interface PaymentDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bankAccountCode: FormControl<string | null | undefined>,
		bankAccountId: FormControl<number | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		discount: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		plaidTransactionId: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		supplierId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		transferBankCode: FormControl<string | null | undefined>,
		transferBankId: FormControl<number | null | undefined>,
		unallocated: FormControl<number | null | undefined>,
	}
	export function CreatePaymentDtoFormGroup() {
		return new FormGroup<PaymentDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bankAccountCode: new FormControl<string | null | undefined>(undefined),
			bankAccountId: new FormControl<number | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			plaidTransactionId: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			supplierId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			transferBankCode: new FormControl<string | null | undefined>(undefined),
			transferBankId: new FormControl<number | null | undefined>(undefined),
			unallocated: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_PaymentDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_ProductDto_ {
		item?: ProductDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_ProductDto_OpCode;
	}
	export interface BatchItem_ProductDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_ProductDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_ProductDto_FormGroup() {
		return new FormGroup<BatchItem_ProductDto_FormProperties>({
			opCode: new FormControl<BatchItem_ProductDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface ProductDto {
		details?: Array<string>;
		grossUnitPrice?: boolean | null;
		hasDefaultVatRate?: boolean | null;
		id?: number | null;
		productTypeId?: number | null;
		stockCode?: string | null;
		timestamp?: string | null;
		unitPrice?: number | null;
		vatAnalysisTypeId?: number | null;
		vatRateId?: number | null;
	}
	export interface ProductDtoFormProperties {
		grossUnitPrice: FormControl<boolean | null | undefined>,
		hasDefaultVatRate: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		productTypeId: FormControl<number | null | undefined>,
		stockCode: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		unitPrice: FormControl<number | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatRateId: FormControl<number | null | undefined>,
	}
	export function CreateProductDtoFormGroup() {
		return new FormGroup<ProductDtoFormProperties>({
			grossUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			hasDefaultVatRate: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			productTypeId: new FormControl<number | null | undefined>(undefined),
			stockCode: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			unitPrice: new FormControl<number | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatRateId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_ProductDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_PurchaseDto_ {
		item?: PurchaseDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_PurchaseDto_OpCode;
	}
	export interface BatchItem_PurchaseDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_PurchaseDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_PurchaseDto_FormGroup() {
		return new FormGroup<BatchItem_PurchaseDto_FormProperties>({
			opCode: new FormControl<BatchItem_PurchaseDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface PurchaseDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		detailCollection?: Array<string>;
		entryDate?: Date | null;
		id?: number | null;
		isDiscrepancyAccepted?: boolean | null;
		netGoods?: number | null;
		netServices?: number | null;
		note?: string | null;
		postponedAccounting?: boolean | null;
		procDate?: Date | null;
		reference?: string | null;
		supplierId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unallocated?: number | null;
		unpaid?: number | null;
		vatEntries?: Array<VatEntryDto>;
		vatTypeId?: number | null;
	}
	export interface PurchaseDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		isDiscrepancyAccepted: FormControl<boolean | null | undefined>,
		netGoods: FormControl<number | null | undefined>,
		netServices: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		postponedAccounting: FormControl<boolean | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		supplierId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unallocated: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseDtoFormGroup() {
		return new FormGroup<PurchaseDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isDiscrepancyAccepted: new FormControl<boolean | null | undefined>(undefined),
			netGoods: new FormControl<number | null | undefined>(undefined),
			netServices: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			postponedAccounting: new FormControl<boolean | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			supplierId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unallocated: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_PurchaseDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_QuoteDto_ {
		item?: QuoteDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_QuoteDto_OpCode;
	}
	export interface BatchItem_QuoteDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_QuoteDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_QuoteDto_FormGroup() {
		return new FormGroup<BatchItem_QuoteDto_FormProperties>({
			opCode: new FormControl<BatchItem_QuoteDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface QuoteDto {
		acCode?: string | null;
		closedDate?: Date | null;
		comments?: string | null;
		companyId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerOwnerId?: number | null;
		customerOwnerName?: string | null;
		ddNumber?: string | null;
		deliveryList?: string | null;
		deliveryTo?: Array<string>;
		entryDate?: Date | null;
		id?: number | null;
		layoutType?: number | null;
		note?: string | null;
		poNumber?: string | null;
		procDate?: Date | null;
		productTrans?: Array<QuoteProductTransDto>;
		reference?: string | null;
		saleInvoiceId?: number | null;
		saleRepCode?: string | null;
		saleRepId?: number | null;
		timeStamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVat?: number | null;
		vatTypeId?: number | null;
	}
	export interface QuoteDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		closedDate: FormControl<Date | null | undefined>,
		comments: FormControl<string | null | undefined>,
		companyId: FormControl<number | null | undefined>,
		customerOwnerId: FormControl<number | null | undefined>,
		customerOwnerName: FormControl<string | null | undefined>,
		ddNumber: FormControl<string | null | undefined>,
		deliveryList: FormControl<string | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		layoutType: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		poNumber: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		saleInvoiceId: FormControl<number | null | undefined>,
		saleRepCode: FormControl<string | null | undefined>,
		saleRepId: FormControl<number | null | undefined>,
		timeStamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVat: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreateQuoteDtoFormGroup() {
		return new FormGroup<QuoteDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			closedDate: new FormControl<Date | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			companyId: new FormControl<number | null | undefined>(undefined),
			customerOwnerId: new FormControl<number | null | undefined>(undefined),
			customerOwnerName: new FormControl<string | null | undefined>(undefined),
			ddNumber: new FormControl<string | null | undefined>(undefined),
			deliveryList: new FormControl<string | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			layoutType: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			poNumber: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			saleInvoiceId: new FormControl<number | null | undefined>(undefined),
			saleRepCode: new FormControl<string | null | undefined>(undefined),
			saleRepId: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVat: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuoteProductTransDto {
		acEntries?: Array<QuoteAcEntriesDto>;
		amount?: number | null;
		companyId?: number | null;
		id?: number | null;
		percentage?: number | null;
		productCode?: string | null;
		productId?: number | null;
		quantity?: number | null;
		tranNotes?: Array<string>;
		unitPrice?: number | null;
		vatAmount?: number | null;
		vatAnalysisTypeId?: number | null;
		vatRateId?: number | null;
	}
	export interface QuoteProductTransDtoFormProperties {
		amount: FormControl<number | null | undefined>,
		companyId: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		percentage: FormControl<number | null | undefined>,
		productCode: FormControl<string | null | undefined>,
		productId: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		unitPrice: FormControl<number | null | undefined>,
		vatAmount: FormControl<number | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatRateId: FormControl<number | null | undefined>,
	}
	export function CreateQuoteProductTransDtoFormGroup() {
		return new FormGroup<QuoteProductTransDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			companyId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			unitPrice: new FormControl<number | null | undefined>(undefined),
			vatAmount: new FormControl<number | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatRateId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuoteAcEntriesDto {
		accountCode?: string | null;
		analysisCategoryId?: number | null;
		companyId?: number | null;
		id?: number | null;
		quoteProductTranId?: number | null;
		value?: number | null;
	}
	export interface QuoteAcEntriesDtoFormProperties {
		accountCode: FormControl<string | null | undefined>,
		analysisCategoryId: FormControl<number | null | undefined>,
		companyId: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		quoteProductTranId: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateQuoteAcEntriesDtoFormGroup() {
		return new FormGroup<QuoteAcEntriesDtoFormProperties>({
			accountCode: new FormControl<string | null | undefined>(undefined),
			analysisCategoryId: new FormControl<number | null | undefined>(undefined),
			companyId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			quoteProductTranId: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_QuoteDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_SaleRepsDto_ {
		item?: SaleRepsDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_SaleRepsDto_OpCode;
	}
	export interface BatchItem_SaleRepsDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_SaleRepsDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_SaleRepsDto_FormGroup() {
		return new FormGroup<BatchItem_SaleRepsDto_FormProperties>({
			opCode: new FormControl<BatchItem_SaleRepsDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface SaleRepsDto {
		code?: string | null;
		companyId?: number | null;
		email?: string | null;
		id?: number | null;
		name?: string | null;
		phone?: string | null;
		timeStamp?: string | null;
	}
	export interface SaleRepsDtoFormProperties {
		code: FormControl<string | null | undefined>,
		companyId: FormControl<number | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		timeStamp: FormControl<string | null | undefined>,
	}
	export function CreateSaleRepsDtoFormGroup() {
		return new FormGroup<SaleRepsDtoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			companyId: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchItem_SaleRepsDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_SalesEntryDto_ {
		item?: SalesEntryDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_SalesEntryDto_OpCode;
	}
	export interface BatchItem_SalesEntryDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_SalesEntryDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_SalesEntryDto_FormGroup() {
		return new FormGroup<BatchItem_SalesEntryDto_FormProperties>({
			opCode: new FormControl<BatchItem_SalesEntryDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface SalesEntryDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		detailCollection?: Array<string>;
		details?: string | null;
		entryDate?: Date | null;
		id?: number | null;
		netGoods?: number | null;
		netServices?: number | null;
		note?: string | null;
		procDate?: Date | null;
		reference?: string | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unpaid?: number | null;
		vatEntries?: Array<VatEntryDto>;
		vatTypeId?: number | null;
	}
	export interface SalesEntryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		netGoods: FormControl<number | null | undefined>,
		netServices: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreateSalesEntryDtoFormGroup() {
		return new FormGroup<SalesEntryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			netGoods: new FormControl<number | null | undefined>(undefined),
			netServices: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_SalesEntryDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_SalesInvoiceCreditNoteDto_ {
		item?: SalesInvoiceCreditNoteDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_SalesInvoiceCreditNoteDto_OpCode;
	}
	export interface BatchItem_SalesInvoiceCreditNoteDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_SalesInvoiceCreditNoteDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_SalesInvoiceCreditNoteDto_FormGroup() {
		return new FormGroup<BatchItem_SalesInvoiceCreditNoteDto_FormProperties>({
			opCode: new FormControl<BatchItem_SalesInvoiceCreditNoteDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface SalesInvoiceCreditNoteDto {
		acCode?: string | null;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		deliveryTo?: Array<string>;
		details?: string | null;
		entryDate?: Date | null;
		id?: number | null;
		loType?: string | null;
		netGoods?: number | null;
		netServices?: number | null;
		note?: string | null;
		ourReference?: string | null;
		procDate?: Date | null;
		productTrans?: Array<ProductTranDto>;
		quoteId?: number | null;
		reference?: string | null;
		saleRepCode?: string | null;
		saleRepId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unpaid?: number | null;
		vatTypeId?: number | null;
		yourReference?: string | null;
	}
	export interface SalesInvoiceCreditNoteDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		loType: FormControl<string | null | undefined>,
		netGoods: FormControl<number | null | undefined>,
		netServices: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		ourReference: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		quoteId: FormControl<number | null | undefined>,
		reference: FormControl<string | null | undefined>,
		saleRepCode: FormControl<string | null | undefined>,
		saleRepId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
		yourReference: FormControl<string | null | undefined>,
	}
	export function CreateSalesInvoiceCreditNoteDtoFormGroup() {
		return new FormGroup<SalesInvoiceCreditNoteDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			loType: new FormControl<string | null | undefined>(undefined),
			netGoods: new FormControl<number | null | undefined>(undefined),
			netServices: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			ourReference: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			quoteId: new FormControl<number | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			saleRepCode: new FormControl<string | null | undefined>(undefined),
			saleRepId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
			yourReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductTranDto {
		acEntries?: Array<AcEntryDto>;
		amount?: number | null;

		/** Required */
		amountNet: number;
		id?: number | null;
		percentage?: number | null;
		productCode?: string | null;
		productId?: number | null;
		quantity?: number | null;
		tranNotes?: Array<string>;
		unitPrice?: number | null;
		vat?: number | null;
		vatAnalysisTypeId?: number | null;
		vatRateId?: number | null;
	}
	export interface ProductTranDtoFormProperties {
		amount: FormControl<number | null | undefined>,

		/** Required */
		amountNet: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		percentage: FormControl<number | null | undefined>,
		productCode: FormControl<string | null | undefined>,
		productId: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		unitPrice: FormControl<number | null | undefined>,
		vat: FormControl<number | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatRateId: FormControl<number | null | undefined>,
	}
	export function CreateProductTranDtoFormGroup() {
		return new FormGroup<ProductTranDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amountNet: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			unitPrice: new FormControl<number | null | undefined>(undefined),
			vat: new FormControl<number | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatRateId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_SalesInvoiceCreditNoteDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BatchItem_SupplierDto_ {
		item?: SupplierDto;

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode?: BatchItem_SupplierDto_OpCode;
	}
	export interface BatchItem_SupplierDto_FormProperties {

		/**
		 * 1 - Create
		 * 2 - Update
		 * 3 - Delete
		 */
		opCode: FormControl<BatchItem_SupplierDto_OpCode | null | undefined>,
	}
	export function CreateBatchItem_SupplierDto_FormGroup() {
		return new FormGroup<BatchItem_SupplierDto_FormProperties>({
			opCode: new FormControl<BatchItem_SupplierDto_OpCode | null | undefined>(undefined),
		});

	}

	export interface SupplierDto {
		accountName?: string | null;
		accountNumber?: string | null;
		additionalEmails?: Array<string>;
		address?: Array<string>;
		authCode?: string | null;
		bank?: EFTBankDto;
		businessIdentifierCode?: string | null;
		code?: string | null;
		contact?: string | null;
		eFTReference?: string | null;
		email?: string | null;
		fax?: string | null;
		id?: number | null;
		internationalBankAccountNumber?: string | null;
		ledgerBalance?: number | null;
		mobile?: string | null;
		name?: string | null;
		openingBalance?: OwnerOpeningBalanceInPeriodsDto;
		openingBalances?: Array<OwnerOpeningBalanceDto>;
		ourCode?: string | null;
		ownerTypeId?: number | null;
		phone?: string | null;
		postponedAccounting?: boolean | null;
		timestamp?: string | null;
		vatAnalysisTypeId?: number | null;
		vatReg?: string | null;
		vatType?: number | null;
	}
	export interface SupplierDtoFormProperties {
		accountName: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,
		authCode: FormControl<string | null | undefined>,
		businessIdentifierCode: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		contact: FormControl<string | null | undefined>,
		eFTReference: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		internationalBankAccountNumber: FormControl<string | null | undefined>,
		ledgerBalance: FormControl<number | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ourCode: FormControl<string | null | undefined>,
		ownerTypeId: FormControl<number | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postponedAccounting: FormControl<boolean | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatReg: FormControl<string | null | undefined>,
		vatType: FormControl<number | null | undefined>,
	}
	export function CreateSupplierDtoFormGroup() {
		return new FormGroup<SupplierDtoFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			authCode: new FormControl<string | null | undefined>(undefined),
			businessIdentifierCode: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			contact: new FormControl<string | null | undefined>(undefined),
			eFTReference: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			internationalBankAccountNumber: new FormControl<string | null | undefined>(undefined),
			ledgerBalance: new FormControl<number | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ourCode: new FormControl<string | null | undefined>(undefined),
			ownerTypeId: new FormControl<number | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postponedAccounting: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatReg: new FormControl<string | null | undefined>(undefined),
			vatType: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchItem_SupplierDto_OpCode { _1 = 0, _2 = 1, _3 = 2 }

	export interface BookTranTypeDto {
		code?: string | null;
		description?: string | null;
		id?: number | null;
	}
	export interface BookTranTypeDtoFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateBookTranTypeDtoFormGroup() {
		return new FormGroup<BookTranTypeDtoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CashPaymentQueryDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bankAccountCode?: string | null;
		bankAccountId?: number | null;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		detailCollection?: Array<string>;
		discount?: number | null;
		entryDate?: Date | null;
		id?: number | null;
		ledger?: number | null;
		lodgement?: number | null;
		note?: string | null;
		plaidTransactionId?: string | null;
		procDate?: Date | null;
		supplierId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		unallocated?: number | null;
	}
	export interface CashPaymentQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bankAccountCode: FormControl<string | null | undefined>,
		bankAccountId: FormControl<number | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		discount: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		ledger: FormControl<number | null | undefined>,
		lodgement: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		plaidTransactionId: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		supplierId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		unallocated: FormControl<number | null | undefined>,
	}
	export function CreateCashPaymentQueryDtoFormGroup() {
		return new FormGroup<CashPaymentQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bankAccountCode: new FormControl<string | null | undefined>(undefined),
			bankAccountId: new FormControl<number | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			ledger: new FormControl<number | null | undefined>(undefined),
			lodgement: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			plaidTransactionId: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			supplierId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			unallocated: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CashReceiptQueryDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		detailCollection?: Array<string>;
		discount?: number | null;
		entryDate?: Date | null;
		id?: number | null;
		ledger?: number | null;
		note?: string | null;
		plaidTransactionId?: string | null;
		procDate?: Date | null;
		timestamp?: string | null;
		total?: number | null;
		unallocated?: number | null;
		vatEntries?: Array<VatEntryDto>;
		vatTypeId?: number | null;
	}
	export interface CashReceiptQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		discount: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		ledger: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		plaidTransactionId: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		unallocated: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreateCashReceiptQueryDtoFormGroup() {
		return new FormGroup<CashReceiptQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			ledger: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			plaidTransactionId: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			unallocated: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CategoryTypeDto {
		description?: string | null;
		id?: number | null;
	}
	export interface CategoryTypeDtoFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateCategoryTypeDtoFormGroup() {
		return new FormGroup<CategoryTypeDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CompanyFinancialYearViewModel {
		firstMonth?: number | null;
		startMonth?: number | null;
		startYear?: number | null;
	}
	export interface CompanyFinancialYearViewModelFormProperties {
		firstMonth: FormControl<number | null | undefined>,
		startMonth: FormControl<number | null | undefined>,
		startYear: FormControl<number | null | undefined>,
	}
	export function CreateCompanyFinancialYearViewModelFormGroup() {
		return new FormGroup<CompanyFinancialYearViewModelFormProperties>({
			firstMonth: new FormControl<number | null | undefined>(undefined),
			startMonth: new FormControl<number | null | undefined>(undefined),
			startYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CompanyGeneralDetaisViewModel {
		companyAddresses?: Array<string>;
		companyName?: string | null;
		currencyCode?: string | null;
		currencyDescription?: string | null;
		currencyId?: number | null;
		currentcySymbol?: string | null;
		emails?: Array<string>;
		faxes?: Array<string>;
		phones?: Array<string>;
		regionDescription?: string | null;
		regionId?: number | null;
		vatReg?: string | null;
	}
	export interface CompanyGeneralDetaisViewModelFormProperties {
		companyName: FormControl<string | null | undefined>,
		currencyCode: FormControl<string | null | undefined>,
		currencyDescription: FormControl<string | null | undefined>,
		currencyId: FormControl<number | null | undefined>,
		currentcySymbol: FormControl<string | null | undefined>,
		regionDescription: FormControl<string | null | undefined>,
		regionId: FormControl<number | null | undefined>,
		vatReg: FormControl<string | null | undefined>,
	}
	export function CreateCompanyGeneralDetaisViewModelFormGroup() {
		return new FormGroup<CompanyGeneralDetaisViewModelFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			currencyDescription: new FormControl<string | null | undefined>(undefined),
			currencyId: new FormControl<number | null | undefined>(undefined),
			currentcySymbol: new FormControl<string | null | undefined>(undefined),
			regionDescription: new FormControl<string | null | undefined>(undefined),
			regionId: new FormControl<number | null | undefined>(undefined),
			vatReg: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyOptionDto {
		allowEntryOfGrossPriceInInvoicing?: boolean | null;
		creditInputForReverseChargeVAT?: boolean | null;
		creditNoteJournalAgeingName?: string | null;
		creditNoteJournalAgeingValue?: number | null;
		discrepancyAllowed?: number | null;
		enableVOCRReporting?: boolean | null;
		marginVatScheme?: boolean | null;
		printOSItemsOnly?: boolean | null;
		purchasesVatAnalysisType?: number | null;
		salesVatAnalysisType?: number | null;
		useAllocations?: boolean | null;
		useNominal?: boolean | null;
		useNominalCode?: boolean | null;
		vocrSettingValue?: boolean | null;
	}
	export interface CompanyOptionDtoFormProperties {
		allowEntryOfGrossPriceInInvoicing: FormControl<boolean | null | undefined>,
		creditInputForReverseChargeVAT: FormControl<boolean | null | undefined>,
		creditNoteJournalAgeingName: FormControl<string | null | undefined>,
		creditNoteJournalAgeingValue: FormControl<number | null | undefined>,
		discrepancyAllowed: FormControl<number | null | undefined>,
		enableVOCRReporting: FormControl<boolean | null | undefined>,
		marginVatScheme: FormControl<boolean | null | undefined>,
		printOSItemsOnly: FormControl<boolean | null | undefined>,
		purchasesVatAnalysisType: FormControl<number | null | undefined>,
		salesVatAnalysisType: FormControl<number | null | undefined>,
		useAllocations: FormControl<boolean | null | undefined>,
		useNominal: FormControl<boolean | null | undefined>,
		useNominalCode: FormControl<boolean | null | undefined>,
		vocrSettingValue: FormControl<boolean | null | undefined>,
	}
	export function CreateCompanyOptionDtoFormGroup() {
		return new FormGroup<CompanyOptionDtoFormProperties>({
			allowEntryOfGrossPriceInInvoicing: new FormControl<boolean | null | undefined>(undefined),
			creditInputForReverseChargeVAT: new FormControl<boolean | null | undefined>(undefined),
			creditNoteJournalAgeingName: new FormControl<string | null | undefined>(undefined),
			creditNoteJournalAgeingValue: new FormControl<number | null | undefined>(undefined),
			discrepancyAllowed: new FormControl<number | null | undefined>(undefined),
			enableVOCRReporting: new FormControl<boolean | null | undefined>(undefined),
			marginVatScheme: new FormControl<boolean | null | undefined>(undefined),
			printOSItemsOnly: new FormControl<boolean | null | undefined>(undefined),
			purchasesVatAnalysisType: new FormControl<number | null | undefined>(undefined),
			salesVatAnalysisType: new FormControl<number | null | undefined>(undefined),
			useAllocations: new FormControl<boolean | null | undefined>(undefined),
			useNominal: new FormControl<boolean | null | undefined>(undefined),
			useNominalCode: new FormControl<boolean | null | undefined>(undefined),
			vocrSettingValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CompanyOptionViewModel {
		allowEntryOfGrossPriceInInvoicing?: boolean | null;
		creditInputForReverseChargeVAT?: boolean | null;
		creditNoteJournalAgeingName?: string | null;
		creditNoteJournalAgeingValue?: number | null;
		discrepancyAllowed?: number | null;
		enableVOCRReporting?: boolean | null;
		marginVatScheme?: boolean | null;
		printOSItemsOnly?: boolean | null;
		purchasesVatAnalysisType?: number | null;
		salesVatAnalysisType?: number | null;
		useAllocations?: boolean | null;
		useNominal?: boolean | null;
		useNominalCode?: boolean | null;
		vocrSettingValue?: boolean | null;
	}
	export interface CompanyOptionViewModelFormProperties {
		allowEntryOfGrossPriceInInvoicing: FormControl<boolean | null | undefined>,
		creditInputForReverseChargeVAT: FormControl<boolean | null | undefined>,
		creditNoteJournalAgeingName: FormControl<string | null | undefined>,
		creditNoteJournalAgeingValue: FormControl<number | null | undefined>,
		discrepancyAllowed: FormControl<number | null | undefined>,
		enableVOCRReporting: FormControl<boolean | null | undefined>,
		marginVatScheme: FormControl<boolean | null | undefined>,
		printOSItemsOnly: FormControl<boolean | null | undefined>,
		purchasesVatAnalysisType: FormControl<number | null | undefined>,
		salesVatAnalysisType: FormControl<number | null | undefined>,
		useAllocations: FormControl<boolean | null | undefined>,
		useNominal: FormControl<boolean | null | undefined>,
		useNominalCode: FormControl<boolean | null | undefined>,
		vocrSettingValue: FormControl<boolean | null | undefined>,
	}
	export function CreateCompanyOptionViewModelFormGroup() {
		return new FormGroup<CompanyOptionViewModelFormProperties>({
			allowEntryOfGrossPriceInInvoicing: new FormControl<boolean | null | undefined>(undefined),
			creditInputForReverseChargeVAT: new FormControl<boolean | null | undefined>(undefined),
			creditNoteJournalAgeingName: new FormControl<string | null | undefined>(undefined),
			creditNoteJournalAgeingValue: new FormControl<number | null | undefined>(undefined),
			discrepancyAllowed: new FormControl<number | null | undefined>(undefined),
			enableVOCRReporting: new FormControl<boolean | null | undefined>(undefined),
			marginVatScheme: new FormControl<boolean | null | undefined>(undefined),
			printOSItemsOnly: new FormControl<boolean | null | undefined>(undefined),
			purchasesVatAnalysisType: new FormControl<number | null | undefined>(undefined),
			salesVatAnalysisType: new FormControl<number | null | undefined>(undefined),
			useAllocations: new FormControl<boolean | null | undefined>(undefined),
			useNominal: new FormControl<boolean | null | undefined>(undefined),
			useNominalCode: new FormControl<boolean | null | undefined>(undefined),
			vocrSettingValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CompanyReferenceSettingViewModel {
		creditorsJournal?: boolean | null;
		debtorsJournal?: boolean | null;
		purchases?: boolean | null;
		sales?: boolean | null;
	}
	export interface CompanyReferenceSettingViewModelFormProperties {
		creditorsJournal: FormControl<boolean | null | undefined>,
		debtorsJournal: FormControl<boolean | null | undefined>,
		purchases: FormControl<boolean | null | undefined>,
		sales: FormControl<boolean | null | undefined>,
	}
	export function CreateCompanyReferenceSettingViewModelFormGroup() {
		return new FormGroup<CompanyReferenceSettingViewModelFormProperties>({
			creditorsJournal: new FormControl<boolean | null | undefined>(undefined),
			debtorsJournal: new FormControl<boolean | null | undefined>(undefined),
			purchases: new FormControl<boolean | null | undefined>(undefined),
			sales: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CompanySettingDto {
		enableVOCRReporting?: boolean | null;
		id?: number | null;
		useAllocations?: boolean | null;
		value?: string | null;
		vocrSettingValue?: boolean | null;
	}
	export interface CompanySettingDtoFormProperties {
		enableVOCRReporting: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		useAllocations: FormControl<boolean | null | undefined>,
		value: FormControl<string | null | undefined>,
		vocrSettingValue: FormControl<boolean | null | undefined>,
	}
	export function CreateCompanySettingDtoFormGroup() {
		return new FormGroup<CompanySettingDtoFormProperties>({
			enableVOCRReporting: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			useAllocations: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			vocrSettingValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CompanySetupConfigViewModel {
		financialYear?: CompanyFinancialYearViewModel;
		generalDetails?: CompanyGeneralDetaisViewModel;
		options?: CompanyOptionViewModel;
		referenceSettings?: CompanyReferenceSettingViewModel;
	}
	export interface CompanySetupConfigViewModelFormProperties {
	}
	export function CreateCompanySetupConfigViewModelFormGroup() {
		return new FormGroup<CompanySetupConfigViewModelFormProperties>({
		});

	}

	export interface CustomerQueryDto {
		accountName?: string | null;
		accountNumber?: string | null;
		additionalEmails?: Array<string>;
		address?: Array<string>;
		authCode?: string | null;
		bank?: EFTBankDto;
		businessIdentifierCode?: string | null;
		code?: string | null;
		contact?: string | null;
		delivery?: Array<string>;
		eFTReference?: string | null;
		email?: string | null;
		fax?: string | null;
		id?: number | null;
		internationalBankAccountNumber?: string | null;
		mobile?: string | null;
		name?: string | null;
		ourCode?: string | null;
		ownerTypeId?: number | null;
		phone?: string | null;
		timestamp?: string | null;
		vatAnalysisTypeId?: number | null;
		vatReg?: string | null;
		vatType?: number | null;
	}
	export interface CustomerQueryDtoFormProperties {
		accountName: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,
		authCode: FormControl<string | null | undefined>,
		businessIdentifierCode: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		contact: FormControl<string | null | undefined>,
		eFTReference: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		internationalBankAccountNumber: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ourCode: FormControl<string | null | undefined>,
		ownerTypeId: FormControl<number | null | undefined>,
		phone: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatReg: FormControl<string | null | undefined>,
		vatType: FormControl<number | null | undefined>,
	}
	export function CreateCustomerQueryDtoFormGroup() {
		return new FormGroup<CustomerQueryDtoFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			authCode: new FormControl<string | null | undefined>(undefined),
			businessIdentifierCode: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			contact: new FormControl<string | null | undefined>(undefined),
			eFTReference: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			internationalBankAccountNumber: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ourCode: new FormControl<string | null | undefined>(undefined),
			ownerTypeId: new FormControl<number | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatReg: new FormControl<string | null | undefined>(undefined),
			vatType: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmailQuoteDto {
		bccAddresses?: Array<string>;
		messageBody?: string | null;
		quoteId?: number | null;
		toAddress?: string | null;
	}
	export interface EmailQuoteDtoFormProperties {
		messageBody: FormControl<string | null | undefined>,
		quoteId: FormControl<number | null | undefined>,
		toAddress: FormControl<string | null | undefined>,
	}
	export function CreateEmailQuoteDtoFormGroup() {
		return new FormGroup<EmailQuoteDtoFormProperties>({
			messageBody: new FormControl<string | null | undefined>(undefined),
			quoteId: new FormControl<number | null | undefined>(undefined),
			toAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailStatementDto {
		bccAddresses?: Array<string>;
		customerId?: number | null;
		fromPeriod?: Date | null;
		messageBody?: string | null;
		minimumBalance?: number | null;
		toAddress?: string | null;
		toPeriod?: Date | null;
	}
	export interface EmailStatementDtoFormProperties {
		customerId: FormControl<number | null | undefined>,
		fromPeriod: FormControl<Date | null | undefined>,
		messageBody: FormControl<string | null | undefined>,
		minimumBalance: FormControl<number | null | undefined>,
		toAddress: FormControl<string | null | undefined>,
		toPeriod: FormControl<Date | null | undefined>,
	}
	export function CreateEmailStatementDtoFormGroup() {
		return new FormGroup<EmailStatementDtoFormProperties>({
			customerId: new FormControl<number | null | undefined>(undefined),
			fromPeriod: new FormControl<Date | null | undefined>(undefined),
			messageBody: new FormControl<string | null | undefined>(undefined),
			minimumBalance: new FormControl<number | null | undefined>(undefined),
			toAddress: new FormControl<string | null | undefined>(undefined),
			toPeriod: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FilterClause {
		Expression?: SingleValueNode;
		ItemType?: IEdmTypeReference;
		RangeVariable?: RangeVariable;
	}
	export interface FilterClauseFormProperties {
	}
	export function CreateFilterClauseFormGroup() {
		return new FormGroup<FilterClauseFormProperties>({
		});

	}

	export interface SingleValueNode {
		Kind?: SingleValueNodeKind;
		TypeReference?: IEdmTypeReference;
	}
	export interface SingleValueNodeFormProperties {
		Kind: FormControl<SingleValueNodeKind | null | undefined>,
	}
	export function CreateSingleValueNodeFormGroup() {
		return new FormGroup<SingleValueNodeFormProperties>({
			Kind: new FormControl<SingleValueNodeKind | null | undefined>(undefined),
		});

	}

	export enum SingleValueNodeKind { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20 }

	export interface IEdmTypeReference {
		Definition?: IEdmType;
		IsNullable?: boolean | null;
	}
	export interface IEdmTypeReferenceFormProperties {
		IsNullable: FormControl<boolean | null | undefined>,
	}
	export function CreateIEdmTypeReferenceFormGroup() {
		return new FormGroup<IEdmTypeReferenceFormProperties>({
			IsNullable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IEdmType {
		TypeKind?: IEdmTypeTypeKind;
	}
	export interface IEdmTypeFormProperties {
		TypeKind: FormControl<IEdmTypeTypeKind | null | undefined>,
	}
	export function CreateIEdmTypeFormGroup() {
		return new FormGroup<IEdmTypeFormProperties>({
			TypeKind: new FormControl<IEdmTypeTypeKind | null | undefined>(undefined),
		});

	}

	export enum IEdmTypeTypeKind { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7 }

	export interface RangeVariable {
		Kind?: number | null;
		Name?: string | null;
		TypeReference?: IEdmTypeReference;
	}
	export interface RangeVariableFormProperties {
		Kind: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRangeVariableFormGroup() {
		return new FormGroup<RangeVariableFormProperties>({
			Kind: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterQueryOption {
		Context?: ODataQueryContext;
		FilterClause?: FilterClause;
		RawValue?: string | null;
		Validator?: FilterQueryValidator;
	}
	export interface FilterQueryOptionFormProperties {
		RawValue: FormControl<string | null | undefined>,
	}
	export function CreateFilterQueryOptionFormGroup() {
		return new FormGroup<FilterQueryOptionFormProperties>({
			RawValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryContext {
		ElementClrType?: string | null;
		ElementType?: IEdmType;
		Model?: IEdmModel;
	}
	export interface ODataQueryContextFormProperties {
		ElementClrType: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryContextFormGroup() {
		return new FormGroup<ODataQueryContextFormProperties>({
			ElementClrType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IEdmModel {
		DirectValueAnnotationsManager?: IEdmDirectValueAnnotationsManager;
		ReferencedModels?: Array<IEdmModel>;
		SchemaElements?: Array<IEdmSchemaElement>;
		VocabularyAnnotations?: Array<IEdmVocabularyAnnotation>;
	}
	export interface IEdmModelFormProperties {
	}
	export function CreateIEdmModelFormGroup() {
		return new FormGroup<IEdmModelFormProperties>({
		});

	}

	export interface IEdmDirectValueAnnotationsManager {
	}
	export interface IEdmDirectValueAnnotationsManagerFormProperties {
	}
	export function CreateIEdmDirectValueAnnotationsManagerFormGroup() {
		return new FormGroup<IEdmDirectValueAnnotationsManagerFormProperties>({
		});

	}

	export interface IEdmSchemaElement {
		Name?: string | null;
		Namespace?: string | null;
		SchemaElementKind?: IEdmSchemaElementSchemaElementKind;
	}
	export interface IEdmSchemaElementFormProperties {
		Name: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		SchemaElementKind: FormControl<IEdmSchemaElementSchemaElementKind | null | undefined>,
	}
	export function CreateIEdmSchemaElementFormGroup() {
		return new FormGroup<IEdmSchemaElementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			SchemaElementKind: new FormControl<IEdmSchemaElementSchemaElementKind | null | undefined>(undefined),
		});

	}

	export enum IEdmSchemaElementSchemaElementKind { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export interface IEdmVocabularyAnnotation {
		Qualifier?: string | null;
		Target?: IEdmVocabularyAnnotatable;
		Term?: IEdmTerm;
	}
	export interface IEdmVocabularyAnnotationFormProperties {
		Qualifier: FormControl<string | null | undefined>,
	}
	export function CreateIEdmVocabularyAnnotationFormGroup() {
		return new FormGroup<IEdmVocabularyAnnotationFormProperties>({
			Qualifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IEdmVocabularyAnnotatable {
	}
	export interface IEdmVocabularyAnnotatableFormProperties {
	}
	export function CreateIEdmVocabularyAnnotatableFormGroup() {
		return new FormGroup<IEdmVocabularyAnnotatableFormProperties>({
		});

	}

	export interface IEdmTerm {
		Name?: string | null;
		Namespace?: string | null;
		SchemaElementKind?: IEdmTermSchemaElementKind;
		TermKind?: IEdmTermTermKind;
	}
	export interface IEdmTermFormProperties {
		Name: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		SchemaElementKind: FormControl<IEdmTermSchemaElementKind | null | undefined>,
		TermKind: FormControl<IEdmTermTermKind | null | undefined>,
	}
	export function CreateIEdmTermFormGroup() {
		return new FormGroup<IEdmTermFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			SchemaElementKind: new FormControl<IEdmTermSchemaElementKind | null | undefined>(undefined),
			TermKind: new FormControl<IEdmTermTermKind | null | undefined>(undefined),
		});

	}

	export enum IEdmTermSchemaElementKind { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum IEdmTermTermKind { _0 = 0, _1 = 1, _2 = 2 }

	export interface FilterQueryValidator {
	}
	export interface FilterQueryValidatorFormProperties {
	}
	export function CreateFilterQueryValidatorFormGroup() {
		return new FormGroup<FilterQueryValidatorFormProperties>({
		});

	}

	export interface FinancialYearDto {
		firstMonth?: number | null;
		startMonth?: number | null;
		startYear?: number | null;
	}
	export interface FinancialYearDtoFormProperties {
		firstMonth: FormControl<number | null | undefined>,
		startMonth: FormControl<number | null | undefined>,
		startYear: FormControl<number | null | undefined>,
	}
	export function CreateFinancialYearDtoFormGroup() {
		return new FormGroup<FinancialYearDtoFormProperties>({
			firstMonth: new FormControl<number | null | undefined>(undefined),
			startMonth: new FormControl<number | null | undefined>(undefined),
			startYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InlineCountQueryOption {
		Context?: ODataQueryContext;
		RawValue?: string | null;
		Value?: InlineCountQueryOptionValue;
	}
	export interface InlineCountQueryOptionFormProperties {
		RawValue: FormControl<string | null | undefined>,
		Value: FormControl<InlineCountQueryOptionValue | null | undefined>,
	}
	export function CreateInlineCountQueryOptionFormGroup() {
		return new FormGroup<InlineCountQueryOptionFormProperties>({
			RawValue: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<InlineCountQueryOptionValue | null | undefined>(undefined),
		});

	}

	export enum InlineCountQueryOptionValue { _0 = 0, _1 = 1 }

	export interface ODataQueryOptions_AccountDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_AccountDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_AccountDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_AccountDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderByQueryOption {
		Context?: ODataQueryContext;
		OrderByClause?: OrderByClause;
		OrderByNodes?: Array<OrderByNode>;
		RawValue?: string | null;
		Validator?: OrderByQueryValidator;
	}
	export interface OrderByQueryOptionFormProperties {
		RawValue: FormControl<string | null | undefined>,
	}
	export function CreateOrderByQueryOptionFormGroup() {
		return new FormGroup<OrderByQueryOptionFormProperties>({
			RawValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderByClause {
		Direction?: OrderByClauseDirection;
		Expression?: SingleValueNode;
		ItemType?: IEdmTypeReference;
		RangeVariable?: RangeVariable;
		ThenBy?: OrderByClause;
	}
	export interface OrderByClauseFormProperties {
		Direction: FormControl<OrderByClauseDirection | null | undefined>,
	}
	export function CreateOrderByClauseFormGroup() {
		return new FormGroup<OrderByClauseFormProperties>({
			Direction: new FormControl<OrderByClauseDirection | null | undefined>(undefined),
		});

	}

	export enum OrderByClauseDirection { _0 = 0, _1 = 1 }

	export interface OrderByNode {
		Direction?: OrderByNodeDirection;
	}
	export interface OrderByNodeFormProperties {
		Direction: FormControl<OrderByNodeDirection | null | undefined>,
	}
	export function CreateOrderByNodeFormGroup() {
		return new FormGroup<OrderByNodeFormProperties>({
			Direction: new FormControl<OrderByNodeDirection | null | undefined>(undefined),
		});

	}

	export enum OrderByNodeDirection { _0 = 0, _1 = 1 }

	export interface OrderByQueryValidator {
	}
	export interface OrderByQueryValidatorFormProperties {
	}
	export function CreateOrderByQueryValidatorFormGroup() {
		return new FormGroup<OrderByQueryValidatorFormProperties>({
		});

	}

	export interface ODataRawQueryOptions {
		Expand?: string | null;
		Filter?: string | null;
		Format?: string | null;
		InlineCount?: string | null;
		OrderBy?: string | null;
		Select?: string | null;
		Skip?: string | null;
		SkipToken?: string | null;
		Top?: string | null;
	}
	export interface ODataRawQueryOptionsFormProperties {
		Expand: FormControl<string | null | undefined>,
		Filter: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
		InlineCount: FormControl<string | null | undefined>,
		OrderBy: FormControl<string | null | undefined>,
		Select: FormControl<string | null | undefined>,
		Skip: FormControl<string | null | undefined>,
		SkipToken: FormControl<string | null | undefined>,
		Top: FormControl<string | null | undefined>,
	}
	export function CreateODataRawQueryOptionsFormGroup() {
		return new FormGroup<ODataRawQueryOptionsFormProperties>({
			Expand: new FormControl<string | null | undefined>(undefined),
			Filter: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			InlineCount: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<string | null | undefined>(undefined),
			Select: new FormControl<string | null | undefined>(undefined),
			Skip: new FormControl<string | null | undefined>(undefined),
			SkipToken: new FormControl<string | null | undefined>(undefined),
			Top: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SelectExpandQueryOption {
		Context?: ODataQueryContext;
		RawExpand?: string | null;
		RawSelect?: string | null;
		SelectExpandClause?: SelectExpandClause;
		Validator?: SelectExpandQueryValidator;
	}
	export interface SelectExpandQueryOptionFormProperties {
		RawExpand: FormControl<string | null | undefined>,
		RawSelect: FormControl<string | null | undefined>,
	}
	export function CreateSelectExpandQueryOptionFormGroup() {
		return new FormGroup<SelectExpandQueryOptionFormProperties>({
			RawExpand: new FormControl<string | null | undefined>(undefined),
			RawSelect: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SelectExpandClause {
		AllSelected?: boolean | null;
		SelectedItems?: Array<SelectItem>;
	}
	export interface SelectExpandClauseFormProperties {
		AllSelected: FormControl<boolean | null | undefined>,
	}
	export function CreateSelectExpandClauseFormGroup() {
		return new FormGroup<SelectExpandClauseFormProperties>({
			AllSelected: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SelectItem {
	}
	export interface SelectItemFormProperties {
	}
	export function CreateSelectItemFormGroup() {
		return new FormGroup<SelectItemFormProperties>({
		});

	}

	export interface SelectExpandQueryValidator {
	}
	export interface SelectExpandQueryValidatorFormProperties {
	}
	export function CreateSelectExpandQueryValidatorFormGroup() {
		return new FormGroup<SelectExpandQueryValidatorFormProperties>({
		});

	}

	export interface SkipQueryOption {
		Context?: ODataQueryContext;
		RawValue?: string | null;
		Validator?: SkipQueryValidator;
		Value?: number | null;
	}
	export interface SkipQueryOptionFormProperties {
		RawValue: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateSkipQueryOptionFormGroup() {
		return new FormGroup<SkipQueryOptionFormProperties>({
			RawValue: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SkipQueryValidator {
	}
	export interface SkipQueryValidatorFormProperties {
	}
	export function CreateSkipQueryValidatorFormGroup() {
		return new FormGroup<SkipQueryValidatorFormProperties>({
		});

	}

	export interface TopQueryOption {
		Context?: ODataQueryContext;
		RawValue?: string | null;
		Validator?: TopQueryValidator;
		Value?: number | null;
	}
	export interface TopQueryOptionFormProperties {
		RawValue: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateTopQueryOptionFormGroup() {
		return new FormGroup<TopQueryOptionFormProperties>({
			RawValue: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TopQueryValidator {
	}
	export interface TopQueryValidatorFormProperties {
	}
	export function CreateTopQueryValidatorFormGroup() {
		return new FormGroup<TopQueryValidatorFormProperties>({
		});

	}

	export interface ODataQueryValidator {
	}
	export interface ODataQueryValidatorFormProperties {
	}
	export function CreateODataQueryValidatorFormGroup() {
		return new FormGroup<ODataQueryValidatorFormProperties>({
		});

	}

	export interface ODataQueryOptions_AnalysisCategoryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_AnalysisCategoryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_AnalysisCategoryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_AnalysisCategoryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_BankAccountQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_BankAccountQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_BankAccountQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_BankAccountQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_BookTranTypeDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_BookTranTypeDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_BookTranTypeDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_BookTranTypeDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_CashPaymentQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_CashPaymentQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_CashPaymentQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_CashPaymentQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_CashReceiptQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_CashReceiptQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_CashReceiptQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_CashReceiptQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_CategoryTypeDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_CategoryTypeDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_CategoryTypeDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_CategoryTypeDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_CompanySettingDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_CompanySettingDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_CompanySettingDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_CompanySettingDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_CustomerQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_CustomerQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_CustomerQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_CustomerQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_OwnerTypeDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_OwnerTypeDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_OwnerTypeDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_OwnerTypeDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_OwnerTypeGroupDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_OwnerTypeGroupDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_OwnerTypeGroupDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_OwnerTypeGroupDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_PaymentQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_PaymentQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_PaymentQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_PaymentQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_ProductDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_ProductDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_ProductDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_ProductDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_PurchaseQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_PurchaseQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_PurchaseQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_PurchaseQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_QuoteDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_QuoteDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_QuoteDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_QuoteDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_SaleRepsDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_SaleRepsDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_SaleRepsDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_SaleRepsDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_SalesCreditNoteQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_SalesCreditNoteQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_SalesCreditNoteQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_SalesCreditNoteQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_SalesEntryQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_SalesEntryQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_SalesEntryQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_SalesEntryQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_SalesInvoiceQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_SalesInvoiceQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_SalesInvoiceQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_SalesInvoiceQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_SalesQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_SalesQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_SalesQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_SalesQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_SupplierQueryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_SupplierQueryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_SupplierQueryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_SupplierQueryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_UserDefinedFieldDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_UserDefinedFieldDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_UserDefinedFieldDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_UserDefinedFieldDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_VatAnalysisTypeDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_VatAnalysisTypeDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_VatAnalysisTypeDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_VatAnalysisTypeDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_VatCategoryDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_VatCategoryDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_VatCategoryDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_VatCategoryDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_VatRateDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_VatRateDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_VatRateDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_VatRateDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ODataQueryOptions_VatTypeDto_ {
		Context?: ODataQueryContext;
		Filter?: FilterQueryOption;
		IfMatch?: string | null;
		IfNoneMatch?: string | null;
		InlineCount?: InlineCountQueryOption;
		OrderBy?: OrderByQueryOption;
		RawValues?: ODataRawQueryOptions;
		Request?: string | null;
		SelectExpand?: SelectExpandQueryOption;
		Skip?: SkipQueryOption;
		Top?: TopQueryOption;
		Validator?: ODataQueryValidator;
	}
	export interface ODataQueryOptions_VatTypeDto_FormProperties {
		IfMatch: FormControl<string | null | undefined>,
		IfNoneMatch: FormControl<string | null | undefined>,
		Request: FormControl<string | null | undefined>,
	}
	export function CreateODataQueryOptions_VatTypeDto_FormGroup() {
		return new FormGroup<ODataQueryOptions_VatTypeDto_FormProperties>({
			IfMatch: new FormControl<string | null | undefined>(undefined),
			IfNoneMatch: new FormControl<string | null | undefined>(undefined),
			Request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OwnerTypeDto {
		description?: string | null;
		id?: number | null;
		recordTypeGroupId?: number | null;
	}
	export interface OwnerTypeDtoFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		recordTypeGroupId: FormControl<number | null | undefined>,
	}
	export function CreateOwnerTypeDtoFormGroup() {
		return new FormGroup<OwnerTypeDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			recordTypeGroupId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OwnerTypeGroupDto {
		description?: string | null;
		id?: number | null;
	}
	export interface OwnerTypeGroupDtoFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateOwnerTypeGroupDtoFormGroup() {
		return new FormGroup<OwnerTypeGroupDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_AccountDto_ {
		Count?: number | null;
		Items?: Array<AccountDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_AccountDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_AccountDto_FormGroup() {
		return new FormGroup<PageResult_AccountDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_AnalysisCategoryDto_ {
		Count?: number | null;
		Items?: Array<AnalysisCategoryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_AnalysisCategoryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_AnalysisCategoryDto_FormGroup() {
		return new FormGroup<PageResult_AnalysisCategoryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_BankAccountQueryDto_ {
		Count?: number | null;
		Items?: Array<BankAccountQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_BankAccountQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_BankAccountQueryDto_FormGroup() {
		return new FormGroup<PageResult_BankAccountQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_BookTranTypeDto_ {
		Count?: number | null;
		Items?: Array<BookTranTypeDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_BookTranTypeDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_BookTranTypeDto_FormGroup() {
		return new FormGroup<PageResult_BookTranTypeDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_CashPaymentQueryDto_ {
		Count?: number | null;
		Items?: Array<CashPaymentQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_CashPaymentQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_CashPaymentQueryDto_FormGroup() {
		return new FormGroup<PageResult_CashPaymentQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_CashReceiptQueryDto_ {
		Count?: number | null;
		Items?: Array<CashReceiptQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_CashReceiptQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_CashReceiptQueryDto_FormGroup() {
		return new FormGroup<PageResult_CashReceiptQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_CategoryTypeDto_ {
		Count?: number | null;
		Items?: Array<CategoryTypeDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_CategoryTypeDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_CategoryTypeDto_FormGroup() {
		return new FormGroup<PageResult_CategoryTypeDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_CompanySettingDto_ {
		Count?: number | null;
		Items?: Array<CompanySettingDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_CompanySettingDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_CompanySettingDto_FormGroup() {
		return new FormGroup<PageResult_CompanySettingDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_CustomerQueryDto_ {
		Count?: number | null;
		Items?: Array<CustomerQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_CustomerQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_CustomerQueryDto_FormGroup() {
		return new FormGroup<PageResult_CustomerQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_OwnerTypeDto_ {
		Count?: number | null;
		Items?: Array<OwnerTypeDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_OwnerTypeDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_OwnerTypeDto_FormGroup() {
		return new FormGroup<PageResult_OwnerTypeDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_OwnerTypeGroupDto_ {
		Count?: number | null;
		Items?: Array<OwnerTypeGroupDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_OwnerTypeGroupDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_OwnerTypeGroupDto_FormGroup() {
		return new FormGroup<PageResult_OwnerTypeGroupDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_PaymentQueryDto_ {
		Count?: number | null;
		Items?: Array<PaymentQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_PaymentQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_PaymentQueryDto_FormGroup() {
		return new FormGroup<PageResult_PaymentQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentQueryDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bankAccountCode?: string | null;
		bankAccountId?: number | null;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		detailCollection?: Array<string>;
		discount?: number | null;
		entryDate?: Date | null;
		id?: number | null;
		note?: string | null;
		plaidTransactionId?: string | null;
		procDate?: Date | null;
		reference?: string | null;
		supplierId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		transferBankCode?: string | null;
		transferBankId?: number | null;
		unallocated?: number | null;
	}
	export interface PaymentQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bankAccountCode: FormControl<string | null | undefined>,
		bankAccountId: FormControl<number | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		discount: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		plaidTransactionId: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		supplierId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		transferBankCode: FormControl<string | null | undefined>,
		transferBankId: FormControl<number | null | undefined>,
		unallocated: FormControl<number | null | undefined>,
	}
	export function CreatePaymentQueryDtoFormGroup() {
		return new FormGroup<PaymentQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bankAccountCode: new FormControl<string | null | undefined>(undefined),
			bankAccountId: new FormControl<number | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			plaidTransactionId: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			supplierId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			transferBankCode: new FormControl<string | null | undefined>(undefined),
			transferBankId: new FormControl<number | null | undefined>(undefined),
			unallocated: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_ProductDto_ {
		Count?: number | null;
		Items?: Array<ProductDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_ProductDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_ProductDto_FormGroup() {
		return new FormGroup<PageResult_ProductDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_PurchaseQueryDto_ {
		Count?: number | null;
		Items?: Array<PurchaseQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_PurchaseQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_PurchaseQueryDto_FormGroup() {
		return new FormGroup<PageResult_PurchaseQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseQueryDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		detailCollection?: Array<string>;
		entryDate?: Date | null;
		id?: number | null;
		netGoods?: number | null;
		netServices?: number | null;
		note?: string | null;
		postponedAccounting?: boolean | null;
		procDate?: Date | null;
		reference?: string | null;
		supplierId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unallocated?: number | null;
		unpaid?: number | null;
		vatEntries?: Array<VatEntryDto>;
		vatTypeId?: number | null;
	}
	export interface PurchaseQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		netGoods: FormControl<number | null | undefined>,
		netServices: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		postponedAccounting: FormControl<boolean | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		supplierId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unallocated: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseQueryDtoFormGroup() {
		return new FormGroup<PurchaseQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			netGoods: new FormControl<number | null | undefined>(undefined),
			netServices: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			postponedAccounting: new FormControl<boolean | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			supplierId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unallocated: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_QuoteDto_ {
		Count?: number | null;
		Items?: Array<QuoteDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_QuoteDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_QuoteDto_FormGroup() {
		return new FormGroup<PageResult_QuoteDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_SaleRepsDto_ {
		Count?: number | null;
		Items?: Array<SaleRepsDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_SaleRepsDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_SaleRepsDto_FormGroup() {
		return new FormGroup<PageResult_SaleRepsDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_SalesCreditNoteQueryDto_ {
		Count?: number | null;
		Items?: Array<SalesCreditNoteQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_SalesCreditNoteQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_SalesCreditNoteQueryDto_FormGroup() {
		return new FormGroup<PageResult_SalesCreditNoteQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesCreditNoteQueryDto {
		acCode?: string | null;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		deliveryTo?: Array<string>;
		details?: string | null;
		entryDate?: Date | null;
		id?: number | null;
		loType?: string | null;
		netGoods?: number | null;
		netServices?: number | null;
		note?: string | null;
		ourReference?: string | null;
		procDate?: Date | null;
		productTrans?: Array<ProductTranQueryDto>;
		quoteId?: number | null;
		reference?: string | null;
		saleRepCode?: string | null;
		saleRepId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unpaid?: number | null;
		vatTypeId?: number | null;
		yourReference?: string | null;
	}
	export interface SalesCreditNoteQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		loType: FormControl<string | null | undefined>,
		netGoods: FormControl<number | null | undefined>,
		netServices: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		ourReference: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		quoteId: FormControl<number | null | undefined>,
		reference: FormControl<string | null | undefined>,
		saleRepCode: FormControl<string | null | undefined>,
		saleRepId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
		yourReference: FormControl<string | null | undefined>,
	}
	export function CreateSalesCreditNoteQueryDtoFormGroup() {
		return new FormGroup<SalesCreditNoteQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			loType: new FormControl<string | null | undefined>(undefined),
			netGoods: new FormControl<number | null | undefined>(undefined),
			netServices: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			ourReference: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			quoteId: new FormControl<number | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			saleRepCode: new FormControl<string | null | undefined>(undefined),
			saleRepId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
			yourReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductTranQueryDto {
		acEntries?: Array<AcEntryDto>;
		amount?: number | null;
		amountNet?: number | null;
		id?: number | null;
		percentage?: number | null;
		productCode?: string | null;
		productId?: number | null;
		quantity?: number | null;
		tranNotes?: Array<string>;
		unitPrice?: number | null;
		vat?: number | null;
		vatAnalysisTypeId?: number | null;
		vatRateId?: number | null;
	}
	export interface ProductTranQueryDtoFormProperties {
		amount: FormControl<number | null | undefined>,
		amountNet: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		percentage: FormControl<number | null | undefined>,
		productCode: FormControl<string | null | undefined>,
		productId: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		unitPrice: FormControl<number | null | undefined>,
		vat: FormControl<number | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatRateId: FormControl<number | null | undefined>,
	}
	export function CreateProductTranQueryDtoFormGroup() {
		return new FormGroup<ProductTranQueryDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amountNet: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			unitPrice: new FormControl<number | null | undefined>(undefined),
			vat: new FormControl<number | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatRateId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_SalesEntryQueryDto_ {
		Count?: number | null;
		Items?: Array<SalesEntryQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_SalesEntryQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_SalesEntryQueryDto_FormGroup() {
		return new FormGroup<PageResult_SalesEntryQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesEntryQueryDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		detailCollection?: Array<string>;
		details?: string | null;
		entryDate?: Date | null;
		id?: number | null;
		netGoods?: number | null;
		netServices?: number | null;
		note?: string | null;
		procDate?: Date | null;
		reference?: string | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unpaid?: number | null;
		vatEntries?: Array<VatEntryDto>;
		vatTypeId?: number | null;
	}
	export interface SalesEntryQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		netGoods: FormControl<number | null | undefined>,
		netServices: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreateSalesEntryQueryDtoFormGroup() {
		return new FormGroup<SalesEntryQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			netGoods: new FormControl<number | null | undefined>(undefined),
			netServices: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_SalesInvoiceQueryDto_ {
		Count?: number | null;
		Items?: Array<SalesInvoiceQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_SalesInvoiceQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_SalesInvoiceQueryDto_FormGroup() {
		return new FormGroup<PageResult_SalesInvoiceQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesInvoiceQueryDto {
		acCode?: string | null;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		deliveryTo?: Array<string>;
		details?: string | null;
		entryDate?: Date | null;
		id?: number | null;
		loType?: string | null;
		netGoods?: number | null;
		netServices?: number | null;
		note?: string | null;
		ourReference?: string | null;
		procDate?: Date | null;
		productTrans?: Array<ProductTranQueryDto>;
		quoteId?: number | null;
		reference?: string | null;
		saleRepCode?: string | null;
		saleRepId?: number | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unpaid?: number | null;
		vatTypeId?: number | null;
		yourReference?: string | null;
	}
	export interface SalesInvoiceQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		loType: FormControl<string | null | undefined>,
		netGoods: FormControl<number | null | undefined>,
		netServices: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		ourReference: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		quoteId: FormControl<number | null | undefined>,
		reference: FormControl<string | null | undefined>,
		saleRepCode: FormControl<string | null | undefined>,
		saleRepId: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
		yourReference: FormControl<string | null | undefined>,
	}
	export function CreateSalesInvoiceQueryDtoFormGroup() {
		return new FormGroup<SalesInvoiceQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			loType: new FormControl<string | null | undefined>(undefined),
			netGoods: new FormControl<number | null | undefined>(undefined),
			netServices: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			ourReference: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			quoteId: new FormControl<number | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			saleRepCode: new FormControl<string | null | undefined>(undefined),
			saleRepId: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
			yourReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageResult_SalesQueryDto_ {
		Count?: number | null;
		Items?: Array<SalesQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_SalesQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_SalesQueryDto_FormGroup() {
		return new FormGroup<PageResult_SalesQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesQueryDto {
		acCode?: string | null;
		acEntries?: Array<AcEntryDto>;
		bookTranTypeId?: number | null;
		customFields?: Array<AcudfValueDto>;
		customerId?: number | null;
		details?: string | null;
		entryDate?: Date | null;
		id?: number | null;
		loType?: string | null;
		note?: string | null;
		procDate?: Date | null;
		reference?: string | null;
		timestamp?: string | null;
		total?: number | null;
		totalNet?: number | null;
		totalVAT?: number | null;
		unpaid?: number | null;
		vatEntries?: Array<VatEntryDto>;
		vatTypeId?: number | null;
	}
	export interface SalesQueryDtoFormProperties {
		acCode: FormControl<string | null | undefined>,
		bookTranTypeId: FormControl<number | null | undefined>,
		customerId: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		loType: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,
		procDate: FormControl<Date | null | undefined>,
		reference: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		totalNet: FormControl<number | null | undefined>,
		totalVAT: FormControl<number | null | undefined>,
		unpaid: FormControl<number | null | undefined>,
		vatTypeId: FormControl<number | null | undefined>,
	}
	export function CreateSalesQueryDtoFormGroup() {
		return new FormGroup<SalesQueryDtoFormProperties>({
			acCode: new FormControl<string | null | undefined>(undefined),
			bookTranTypeId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			loType: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			procDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalNet: new FormControl<number | null | undefined>(undefined),
			totalVAT: new FormControl<number | null | undefined>(undefined),
			unpaid: new FormControl<number | null | undefined>(undefined),
			vatTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_SupplierQueryDto_ {
		Count?: number | null;
		Items?: Array<SupplierQueryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_SupplierQueryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_SupplierQueryDto_FormGroup() {
		return new FormGroup<PageResult_SupplierQueryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SupplierQueryDto {
		accountName?: string | null;
		accountNumber?: string | null;
		additionalEmails?: Array<string>;
		address?: Array<string>;
		authCode?: string | null;
		bank?: EFTBankDto;
		businessIdentifierCode?: string | null;
		code?: string | null;
		contact?: string | null;
		eFTReference?: string | null;
		email?: string | null;
		fax?: string | null;
		id?: number | null;
		internationalBankAccountNumber?: string | null;
		mobile?: string | null;
		name?: string | null;
		ourCode?: string | null;
		ownerTypeId?: number | null;
		phone?: string | null;
		postponedAccounting?: boolean | null;
		timestamp?: string | null;
		vatAnalysisTypeId?: number | null;
		vatReg?: string | null;
		vatType?: number | null;
	}
	export interface SupplierQueryDtoFormProperties {
		accountName: FormControl<string | null | undefined>,
		accountNumber: FormControl<string | null | undefined>,
		authCode: FormControl<string | null | undefined>,
		businessIdentifierCode: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		contact: FormControl<string | null | undefined>,
		eFTReference: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		internationalBankAccountNumber: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ourCode: FormControl<string | null | undefined>,
		ownerTypeId: FormControl<number | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postponedAccounting: FormControl<boolean | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		vatAnalysisTypeId: FormControl<number | null | undefined>,
		vatReg: FormControl<string | null | undefined>,
		vatType: FormControl<number | null | undefined>,
	}
	export function CreateSupplierQueryDtoFormGroup() {
		return new FormGroup<SupplierQueryDtoFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			authCode: new FormControl<string | null | undefined>(undefined),
			businessIdentifierCode: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			contact: new FormControl<string | null | undefined>(undefined),
			eFTReference: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			internationalBankAccountNumber: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ourCode: new FormControl<string | null | undefined>(undefined),
			ownerTypeId: new FormControl<number | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postponedAccounting: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			vatAnalysisTypeId: new FormControl<number | null | undefined>(undefined),
			vatReg: new FormControl<string | null | undefined>(undefined),
			vatType: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_UserDefinedFieldDto_ {
		Count?: number | null;
		Items?: Array<UserDefinedFieldDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_UserDefinedFieldDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_UserDefinedFieldDto_FormGroup() {
		return new FormGroup<PageResult_UserDefinedFieldDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserDefinedFieldDto {
		categoryTypeId?: number | null;
		description?: string | null;
		id?: number | null;
		orderIndex?: number | null;
	}
	export interface UserDefinedFieldDtoFormProperties {
		categoryTypeId: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		orderIndex: FormControl<number | null | undefined>,
	}
	export function CreateUserDefinedFieldDtoFormGroup() {
		return new FormGroup<UserDefinedFieldDtoFormProperties>({
			categoryTypeId: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			orderIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_VatAnalysisTypeDto_ {
		Count?: number | null;
		Items?: Array<VatAnalysisTypeDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_VatAnalysisTypeDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_VatAnalysisTypeDto_FormGroup() {
		return new FormGroup<PageResult_VatAnalysisTypeDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VatAnalysisTypeDto {
		description?: string | null;
		id?: number | null;
	}
	export interface VatAnalysisTypeDtoFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateVatAnalysisTypeDtoFormGroup() {
		return new FormGroup<VatAnalysisTypeDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_VatCategoryDto_ {
		Count?: number | null;
		Items?: Array<VatCategoryDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_VatCategoryDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_VatCategoryDto_FormGroup() {
		return new FormGroup<PageResult_VatCategoryDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VatCategoryDto {
		description?: string | null;
		id?: number | null;
	}
	export interface VatCategoryDtoFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateVatCategoryDtoFormGroup() {
		return new FormGroup<VatCategoryDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_VatRateDto_ {
		Count?: number | null;
		Items?: Array<VatRateDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_VatRateDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_VatRateDto_FormGroup() {
		return new FormGroup<PageResult_VatRateDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VatRateDto {
		id?: number | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		orderIndex?: number | null;
		percentage?: number | null;
		timestamp?: string | null;
		vatCategoryId?: number | null;
	}
	export interface VatRateDtoFormProperties {
		id: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		orderIndex: FormControl<number | null | undefined>,
		percentage: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		vatCategoryId: FormControl<number | null | undefined>,
	}
	export function CreateVatRateDtoFormGroup() {
		return new FormGroup<VatRateDtoFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			orderIndex: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			vatCategoryId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResult_VatTypeDto_ {
		Count?: number | null;
		Items?: Array<VatTypeDto>;
		NextPageLink?: string | null;
	}
	export interface PageResult_VatTypeDto_FormProperties {
		Count: FormControl<number | null | undefined>,
		NextPageLink: FormControl<string | null | undefined>,
	}
	export function CreatePageResult_VatTypeDto_FormGroup() {
		return new FormGroup<PageResult_VatTypeDto_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextPageLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VatTypeDto {
		code?: string | null;
		description?: string | null;
		id?: number | null;
		isNotApplicable?: boolean | null;
		isOnlyZero?: boolean | null;
	}
	export interface VatTypeDtoFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		isNotApplicable: FormControl<boolean | null | undefined>,
		isOnlyZero: FormControl<boolean | null | undefined>,
	}
	export function CreateVatTypeDtoFormGroup() {
		return new FormGroup<VatTypeDtoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isNotApplicable: new FormControl<boolean | null | undefined>(undefined),
			isOnlyZero: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface QuoteGeneratingInvoiceDto {
		quoteId?: number | null;
		saleInvoice?: SalesInvoiceCreditNoteDto;
	}
	export interface QuoteGeneratingInvoiceDtoFormProperties {
		quoteId: FormControl<number | null | undefined>,
	}
	export function CreateQuoteGeneratingInvoiceDtoFormGroup() {
		return new FormGroup<QuoteGeneratingInvoiceDtoFormProperties>({
			quoteId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SalesInvoiceEmailInfoDto {
		bccAddresses?: Array<string>;
		messageBody?: string | null;
		salesInvoiceId?: number | null;
		toAddress?: string | null;
	}
	export interface SalesInvoiceEmailInfoDtoFormProperties {
		messageBody: FormControl<string | null | undefined>,
		salesInvoiceId: FormControl<number | null | undefined>,
		toAddress: FormControl<string | null | undefined>,
	}
	export function CreateSalesInvoiceEmailInfoDtoFormGroup() {
		return new FormGroup<SalesInvoiceEmailInfoDtoFormProperties>({
			messageBody: new FormControl<string | null | undefined>(undefined),
			salesInvoiceId: new FormControl<number | null | undefined>(undefined),
			toAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VatRatesByVatCategoryDto {
		vatCategoryId?: number | null;
		vatRates?: Array<VatRateDto>;
	}
	export interface VatRatesByVatCategoryDtoFormProperties {
		vatCategoryId: FormControl<number | null | undefined>,
	}
	export function CreateVatRatesByVatCategoryDtoFormGroup() {
		return new FormGroup<VatRatesByVatCategoryDtoFormProperties>({
			vatCategoryId: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of company's Accounts. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" and "code" fields.
		 * Get v1/accounts
		 * @return {PageResult_AccountDto_} OK
		 */
		Accounts_Get(): Observable<PageResult_AccountDto_> {
			return this.http.get<PageResult_AccountDto_>(this.baseUri + 'v1/accounts', {});
		}

		/**
		 * Returns a list of company's Analysis Categories. Supports OData querying protocol.
		 * Filtering is allowed by "categoryTypeId" field.
		 * Ordering is allowed by "id" and "orderIndex" fields.
		 * Get v1/analysisCategories
		 * @return {PageResult_AnalysisCategoryDto_} OK
		 */
		AnalysisCategories_Get(): Observable<PageResult_AnalysisCategoryDto_> {
			return this.http.get<PageResult_AnalysisCategoryDto_>(this.baseUri + 'v1/analysisCategories', {});
		}

		/**
		 * Returns a list of company's Bank Account. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" and "acCode" fields.
		 * Get v1/bankAccounts
		 * @return {PageResult_BankAccountQueryDto_} OK
		 */
		BankAccounts_Get(): Observable<PageResult_BankAccountQueryDto_> {
			return this.http.get<PageResult_BankAccountQueryDto_>(this.baseUri + 'v1/bankAccounts', {});
		}

		/**
		 * Creates a new Bank Account.
		 * Post v1/bankAccounts
		 * @param {BankAccountDto} requestBody Information of Bank Account to create.
		 * @return {string} OK
		 */
		BankAccounts_Post(requestBody: BankAccountDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/bankAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Bank Accounts.
		 * Put v1/bankAccounts/batch
		 * @param {Array<BatchItem_BankAccountDto_>} requestBody Batch of Bank Accounts to process.
		 * @return {string} OK
		 */
		BankAccounts_ProcessBatch(requestBody: Array<BatchItem_BankAccountDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/bankAccounts/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Bank Account.
		 * Delete v1/bankAccounts/{id}
		 * @param {number} id Id of Bank Account to remove.
		 * @param {string} timestamp Timestamp of Bank Account to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		BankAccounts_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/bankAccounts/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Bank Account.
		 * Get v1/bankAccounts/{id}
		 * @param {number} id Id of Bank Account to return.
		 * @return {BankAccountDto} OK
		 */
		BankAccountsGetById(id: number): Observable<BankAccountDto> {
			return this.http.get<BankAccountDto>(this.baseUri + 'v1/bankAccounts/' + id, {});
		}

		/**
		 * Updates an existing Bank Account.
		 * Put v1/bankAccounts/{id}
		 * @param {number} id Id of Bank Account to update.
		 * @param {BankAccountDto} requestBody Information of Bank Account to update.
		 * @return {string} OK
		 */
		BankAccounts_Put(id: number, requestBody: BankAccountDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/bankAccounts/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of global Book Transactions' Types. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/bookTranTypes
		 * @return {PageResult_BookTranTypeDto_} OK
		 */
		BookTranTypes_Get(): Observable<PageResult_BookTranTypeDto_> {
			return this.http.get<PageResult_BookTranTypeDto_>(this.baseUri + 'v1/bookTranTypes', {});
		}

		/**
		 * Returns a list of company's Cash Payments. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/cashPayments
		 * @return {PageResult_CashPaymentQueryDto_} OK
		 */
		CashPayments_Get(): Observable<PageResult_CashPaymentQueryDto_> {
			return this.http.get<PageResult_CashPaymentQueryDto_>(this.baseUri + 'v1/cashPayments', {});
		}

		/**
		 * Creates a new Cash Payment.
		 * Post v1/cashPayments
		 * @param {CashPaymentDto} requestBody Information of Cash Receipt to create.
		 * @return {string} OK
		 */
		CashPayments_Post(requestBody: CashPaymentDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/cashPayments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Cash Payments.
		 * Put v1/cashPayments/batch
		 * @param {Array<BatchItem_CashPaymentDto_>} requestBody Batch of Cash Receipts to process.
		 * @return {string} OK
		 */
		CashPayments_ProcessBatch(requestBody: Array<BatchItem_CashPaymentDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/cashPayments/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Cash Payment.
		 * Delete v1/cashPayments/{id}
		 * @param {number} id Id of Cash Receipt to remove.
		 * @param {string} timestamp Timestamp of Cash Receipt to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		CashPayments_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/cashPayments/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Cash Payment.
		 * Get v1/cashPayments/{id}
		 * @param {number} id Id of Cash Receipt to return.
		 * @return {CashPaymentDto} OK
		 */
		CashPaymentsGetById(id: number): Observable<CashPaymentDto> {
			return this.http.get<CashPaymentDto>(this.baseUri + 'v1/cashPayments/' + id, {});
		}

		/**
		 * Updates an existing Cash Payment.
		 * Put v1/cashPayments/{id}
		 * @param {number} id Id of Cash Receipt to update.
		 * @param {CashPaymentDto} requestBody Information of Cash Receipt to update.
		 * @return {string} OK
		 */
		CashPayments_Put(id: number, requestBody: CashPaymentDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/cashPayments/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Cash Receipts. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/cashReceipts
		 * @return {PageResult_CashReceiptQueryDto_} OK
		 */
		CashReceipts_Get(): Observable<PageResult_CashReceiptQueryDto_> {
			return this.http.get<PageResult_CashReceiptQueryDto_>(this.baseUri + 'v1/cashReceipts', {});
		}

		/**
		 * Creates a new Cash Receipt.
		 * Post v1/cashReceipts
		 * @param {CashReceiptDto} requestBody Information of Cash Receipt to create.
		 * @return {string} OK
		 */
		CashReceipts_Post(requestBody: CashReceiptDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/cashReceipts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Cash Receipts.
		 * Put v1/cashReceipts/batch
		 * @param {Array<BatchItem_CashReceiptDto_>} requestBody Batch of Cash Receipts to process.
		 * @return {string} OK
		 */
		CashReceipts_ProcessBatch(requestBody: Array<BatchItem_CashReceiptDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/cashReceipts/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Cash Receipt.
		 * Delete v1/cashReceipts/{id}
		 * @param {number} id Id of Cash Receipt to remove.
		 * @param {string} timestamp Timestamp of Cash Receipt to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		CashReceipts_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/cashReceipts/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Cash Receipt.
		 * Get v1/cashReceipts/{id}
		 * @param {number} id Id of Cash Receipt to return.
		 * @return {CashReceiptDto} OK
		 */
		CashReceiptsGetById(id: number): Observable<CashReceiptDto> {
			return this.http.get<CashReceiptDto>(this.baseUri + 'v1/cashReceipts/' + id, {});
		}

		/**
		 * Updates an existing Cash Receipt.
		 * Put v1/cashReceipts/{id}
		 * @param {number} id Id of Cash Receipt to update.
		 * @param {CashReceiptDto} requestBody Information of Cash Receipt to update.
		 * @return {string} OK
		 */
		CashReceipts_Put(id: number, requestBody: CashReceiptDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/cashReceipts/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Category Types. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/categoryTypes
		 * @return {PageResult_CategoryTypeDto_} OK
		 */
		CategoryTypes_Get(): Observable<PageResult_CategoryTypeDto_> {
			return this.http.get<PageResult_CategoryTypeDto_>(this.baseUri + 'v1/categoryTypes', {});
		}

		/**
		 * Returns a list of company settings. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Get v1/companySettings
		 * @return {PageResult_CompanySettingDto_} OK
		 */
		CompanySettings_Get(): Observable<PageResult_CompanySettingDto_> {
			return this.http.get<PageResult_CompanySettingDto_>(this.baseUri + 'v1/companySettings', {});
		}

		/**
		 * Returns the company configuration settings.
		 * Get v1/companySetupConfig
		 * @return {CompanySetupConfigViewModel} OK
		 */
		CompanySetupConfig_Get(): Observable<CompanySetupConfigViewModel> {
			return this.http.get<CompanySetupConfigViewModel>(this.baseUri + 'v1/companySetupConfig', {});
		}

		/**
		 * Returns the company option setting.
		 * Get v1/companySetupConfig/getCompanyOptions
		 * @return {CompanyOptionDto} OK
		 */
		CompanySetupConfig_GetCompanyOptions(): Observable<CompanyOptionDto> {
			return this.http.get<CompanyOptionDto>(this.baseUri + 'v1/companySetupConfig/getCompanyOptions', {});
		}

		/**
		 * Returns the financial year.
		 * Get v1/companySetupConfig/getFinancialYear
		 * @return {FinancialYearDto} OK
		 */
		CompanySetupConfig_GetFinancialYear(): Observable<FinancialYearDto> {
			return this.http.get<FinancialYearDto>(this.baseUri + 'v1/companySetupConfig/getFinancialYear', {});
		}

		/**
		 * Returns a list of company's Customers. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" and "code" fields.
		 * Get v1/customers
		 * @return {PageResult_CustomerQueryDto_} OK
		 */
		Customers_Get(): Observable<PageResult_CustomerQueryDto_> {
			return this.http.get<PageResult_CustomerQueryDto_>(this.baseUri + 'v1/customers', {});
		}

		/**
		 * Creates a new Customer.
		 * Post v1/customers
		 * @param {CustomerDto} requestBody Information of Customer to create.
		 * @return {string} OK
		 */
		Customers_Post(requestBody: CustomerDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/customers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Customers.
		 * Put v1/customers/batch
		 * @param {Array<BatchItem_CustomerDto_>} requestBody Batch of Customers to process.
		 * @return {string} OK
		 */
		Customers_ProcessBatch(requestBody: Array<BatchItem_CustomerDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/customers/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Customer.
		 * Delete v1/customers/{id}
		 * @param {number} id Id of Customer to remove.
		 * @param {string} timestamp Timestamp of Customer to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		Customers_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/customers/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.
		 * Get v1/customers/{id}
		 * @param {number} id Id of Customer to return.
		 * @param {boolean} needBalance If "true" then Customer's ledger balance will be calculated; otherwise balance will be returned as 0.
		 * @return {CustomerDto} OK
		 */
		CustomersGetByIdAndNeedBalance(id: number, needBalance: boolean | null | undefined): Observable<CustomerDto> {
			return this.http.get<CustomerDto>(this.baseUri + 'v1/customers/' + id + '?needBalance=' + needBalance, {});
		}

		/**
		 * Updates an existing Customer.
		 * Put v1/customers/{id}
		 * @param {number} id Id of Customer to update.
		 * @param {CustomerDto} requestBody Information of Customer to update.
		 * @return {string} OK
		 */
		Customers_Put(id: number, requestBody: CustomerDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/customers/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of Customer's account transactions.
		 * Get v1/customers/{itemId}/accountTrans
		 * @param {number} itemId Id of Customer to return account transaction.
		 * @return {Array<AccountTranDto>} OK
		 */
		Customers_GetAccountTrans(itemId: number): Observable<Array<AccountTranDto>> {
			return this.http.get<Array<AccountTranDto>>(this.baseUri + 'v1/customers/' + itemId + '/accountTrans', {});
		}

		/**
		 * Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
		 * Get v1/customers/{itemId}/openingBalance
		 * @param {number} itemId Id of Customer to return opening balances.
		 * @return {OwnerOpeningBalanceInPeriodsDto} OK
		 */
		Customers_GetOpeningBalance(itemId: number): Observable<OwnerOpeningBalanceInPeriodsDto> {
			return this.http.get<OwnerOpeningBalanceInPeriodsDto>(this.baseUri + 'v1/customers/' + itemId + '/openingBalance', {});
		}

		/**
		 * Returns a list of Customer's opening balance transactions.
		 * Get v1/customers/{itemId}/openingBalanceList
		 * @param {number} itemId Id of Customer to return opening balances transaction.
		 * @return {Array<OwnerOpeningBalanceDto>} OK
		 */
		Customers_GetOpeningBalanceList(itemId: number): Observable<Array<OwnerOpeningBalanceDto>> {
			return this.http.get<Array<OwnerOpeningBalanceDto>>(this.baseUri + 'v1/customers/' + itemId + '/openingBalanceList', {});
		}

		/**
		 * Returns a list of Customer's quotes.
		 * Get v1/customers/{itemId}/quotes
		 * @param {number} itemId Id of Customer to return quotes.
		 * @return {Array<QuoteDto>} OK
		 */
		Customers_GetQuotes(itemId: number): Observable<Array<QuoteDto>> {
			return this.http.get<Array<QuoteDto>>(this.baseUri + 'v1/customers/' + itemId + '/quotes', {});
		}

		/**
		 * Sends a Statement email.
		 * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
		 * Post v1/email/sendEmailStatement
		 * @return {string} OK
		 */
		Email_SendEmailStatement(requestBody: EmailStatementDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/email/sendEmailStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Sends a Quote email.
		 * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
		 * Post v1/email/sendQuote
		 * @return {string} OK
		 */
		Email_SendQuote(requestBody: EmailQuoteDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/email/sendQuote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Sends a Sales Invoice email.
		 * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.
		 * Post v1/email/sendSalesInvoice
		 * @return {string} OK
		 */
		Email_SendSalesInvoice(requestBody: SalesInvoiceEmailInfoDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/email/sendSalesInvoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of global Owner Type Groups. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/ownerTypeGroups
		 * @return {PageResult_OwnerTypeGroupDto_} OK
		 */
		OwnerTypeGroups_Get(): Observable<PageResult_OwnerTypeGroupDto_> {
			return this.http.get<PageResult_OwnerTypeGroupDto_>(this.baseUri + 'v1/ownerTypeGroups', {});
		}

		/**
		 * Returns a list of global Owner Types. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/ownerTypes
		 * @return {PageResult_OwnerTypeDto_} OK
		 */
		OwnerTypes_Get(): Observable<PageResult_OwnerTypeDto_> {
			return this.http.get<PageResult_OwnerTypeDto_>(this.baseUri + 'v1/ownerTypes', {});
		}

		/**
		 * Returns a list of company's Payments. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/payments
		 * @return {PageResult_PaymentQueryDto_} OK
		 */
		Payments_Get(): Observable<PageResult_PaymentQueryDto_> {
			return this.http.get<PageResult_PaymentQueryDto_>(this.baseUri + 'v1/payments', {});
		}

		/**
		 * Creates a new Payment.
		 * Post v1/payments
		 * @param {PaymentDto} requestBody Information of Payment to create.
		 * @return {string} OK
		 */
		Payments_Post(requestBody: PaymentDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Payments.
		 * Put v1/payments/batch
		 * @param {Array<BatchItem_PaymentDto_>} requestBody Batch of Payments to process.
		 * @return {string} OK
		 */
		Payments_ProcessBatch(requestBody: Array<BatchItem_PaymentDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/payments/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Payment.
		 * Delete v1/payments/{id}
		 * @param {number} id Id of Payment to remove.
		 * @param {string} timestamp Timestamp of Payment to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		Payments_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/payments/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Payments.
		 * Get v1/payments/{id}
		 * @param {number} id Id of Payment to return.
		 * @return {PaymentDto} OK
		 */
		PaymentsGetById(id: number): Observable<PaymentDto> {
			return this.http.get<PaymentDto>(this.baseUri + 'v1/payments/' + id, {});
		}

		/**
		 * Updates an existing Payment.
		 * Put v1/payments/{id}
		 * @param {number} id Id of Payment to update.
		 * @param {PaymentDto} requestBody Information of Payment to update.
		 * @return {string} OK
		 */
		Payments_Put(id: number, requestBody: PaymentDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/payments/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of global Product Types. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/productTypes
		 * @return {PageResult_OwnerTypeDto_} OK
		 */
		ProductTypes_Get(): Observable<PageResult_OwnerTypeDto_> {
			return this.http.get<PageResult_OwnerTypeDto_>(this.baseUri + 'v1/productTypes', {});
		}

		/**
		 * Returns a list of company's Products. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" and "stockCode" fields.
		 * Get v1/products
		 * @return {PageResult_ProductDto_} OK
		 */
		Products_Get(): Observable<PageResult_ProductDto_> {
			return this.http.get<PageResult_ProductDto_>(this.baseUri + 'v1/products', {});
		}

		/**
		 * Creates a new Product.
		 * Post v1/products
		 * @param {ProductDto} requestBody Information of Product to create.
		 * @return {string} OK
		 */
		Products_Post(requestBody: ProductDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/products', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Products.
		 * Put v1/products/batch
		 * @param {Array<BatchItem_ProductDto_>} requestBody Batch of Products to process.
		 * @return {string} OK
		 */
		Products_ProcessBatch(requestBody: Array<BatchItem_ProductDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/products/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Product.
		 * Delete v1/products/{id}
		 * @param {number} id Id of Product to remove.
		 * @param {string} timestamp Timestamp of Product to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		Products_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/products/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Product.
		 * Get v1/products/{id}
		 * @param {number} id Id of Product to return.
		 * @return {ProductDto} OK
		 */
		ProductsGetById(id: number): Observable<ProductDto> {
			return this.http.get<ProductDto>(this.baseUri + 'v1/products/' + id, {});
		}

		/**
		 * Updates an existing Product.
		 * Put v1/products/{id}
		 * @param {number} id Id of Product to update.
		 * @param {ProductDto} requestBody Information of Product to update.
		 * @return {string} OK
		 */
		Products_Put(id: number, requestBody: ProductDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/products/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Purchases. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/purchases
		 * @return {PageResult_PurchaseQueryDto_} OK
		 */
		Purchases_Get(): Observable<PageResult_PurchaseQueryDto_> {
			return this.http.get<PageResult_PurchaseQueryDto_>(this.baseUri + 'v1/purchases', {});
		}

		/**
		 * Creates a new Purchase.
		 * Post v1/purchases
		 * @param {PurchaseDto} requestBody Information of Purchase to create.
		 * @return {string} OK
		 */
		Purchases_Post(requestBody: PurchaseDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/purchases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Purchases.
		 * Put v1/purchases/batch
		 * @param {Array<BatchItem_PurchaseDto_>} requestBody Batch of Purchases to process.
		 * @return {string} OK
		 */
		Purchases_ProcessBatch(requestBody: Array<BatchItem_PurchaseDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/purchases/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Purchase.
		 * Delete v1/purchases/{id}
		 * @param {number} id Id of Purchase to remove.
		 * @param {string} timestamp Timestamp of Purchase to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		Purchases_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/purchases/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Purchases.
		 * Get v1/purchases/{id}
		 * @param {number} id Id of Purchase to return.
		 * @return {PurchaseDto} OK
		 */
		PurchasesGetById(id: number): Observable<PurchaseDto> {
			return this.http.get<PurchaseDto>(this.baseUri + 'v1/purchases/' + id, {});
		}

		/**
		 * Updates an existing Purchase.
		 * Put v1/purchases/{id}
		 * @param {number} id Id of Purchase to update.
		 * @param {PurchaseDto} requestBody Information of Purchase to update.
		 * @return {string} OK
		 */
		Purchases_Put(id: number, requestBody: PurchaseDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/purchases/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Quotes.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id".
		 * Get v1/quotes
		 * @return {PageResult_QuoteDto_} OK
		 */
		Quote_Get(): Observable<PageResult_QuoteDto_> {
			return this.http.get<PageResult_QuoteDto_>(this.baseUri + 'v1/quotes', {});
		}

		/**
		 * Creates a new Quote.
		 * Post v1/quotes
		 * @param {QuoteDto} requestBody Information of Quote to create.
		 * @return {string} OK
		 */
		Quote_Post(requestBody: QuoteDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/quotes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Quote.
		 * Put v1/quotes/batch
		 * @param {Array<BatchItem_QuoteDto_>} requestBody Batch of Quote to process.
		 * @return {string} OK
		 */
		Quote_ProcessBatch(requestBody: Array<BatchItem_QuoteDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/quotes/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Close a Quote.
		 * Put v1/quotes/close/{id}
		 * @param {number} id Id of Quote to close
		 * @return {string} OK
		 */
		Quote_Close(id: number): Observable<string> {
			return this.http.put(this.baseUri + 'v1/quotes/close/' + id, null, { responseType: 'text' });
		}

		/**
		 * Creates a new Quote with auto generating reference.
		 * Post v1/quotes/createQuoteWithGeneratingReference
		 * @param {QuoteDto} requestBody Information of Quote to create.
		 * @return {string} OK
		 */
		Quote_Post_CreateQuoteWithGeneratingReference(requestBody: QuoteDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/quotes/createQuoteWithGeneratingReference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Generate a sale invoice from a Quote.
		 * When sale invoice is empty, new sale invoice will be generated from Quote.
		 * Post v1/quotes/generateSaleInvoice
		 * @param {QuoteGeneratingInvoiceDto} requestBody Id of Quote to generate
		 * @return {string} OK
		 */
		Quote_Post_GenerateSaleInvoice(requestBody: QuoteGeneratingInvoiceDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/quotes/generateSaleInvoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Reopen a Quote.
		 * Put v1/quotes/reopen/{id}
		 * @param {number} id Id of Quote to reopen
		 * @return {string} OK
		 */
		Quote_Reopen(id: number): Observable<string> {
			return this.http.put(this.baseUri + 'v1/quotes/reopen/' + id, null, { responseType: 'text' });
		}

		/**
		 * Removes an existing Quote.
		 * Delete v1/quotes/{id}
		 * @param {number} id Id of Quote to remove.
		 * @param {string} timestamp Timestamp of Quote to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		Quote_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/quotes/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Quote.
		 * Get v1/quotes/{id}
		 * @param {number} id Id of Sale Rep to return.
		 * @return {QuoteDto} OK
		 */
		QuoteGetById(id: number): Observable<QuoteDto> {
			return this.http.get<QuoteDto>(this.baseUri + 'v1/quotes/' + id, {});
		}

		/**
		 * Updates an existing Quote.
		 * Put v1/quotes/{id}
		 * @param {number} id Id of Quote to update.
		 * @param {QuoteDto} requestBody Information of Quote to update.
		 * @return {string} OK
		 */
		Quote_Put(id: number, requestBody: QuoteDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/quotes/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/sales
		 * @return {PageResult_SalesQueryDto_} OK
		 */
		Sales_Get(): Observable<PageResult_SalesQueryDto_> {
			return this.http.get<PageResult_SalesQueryDto_>(this.baseUri + 'v1/sales', {});
		}

		/**
		 * Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/salesCreditNotes
		 * @return {PageResult_SalesCreditNoteQueryDto_} OK
		 */
		SalesCreditNotes_Get(): Observable<PageResult_SalesCreditNoteQueryDto_> {
			return this.http.get<PageResult_SalesCreditNoteQueryDto_>(this.baseUri + 'v1/salesCreditNotes', {});
		}

		/**
		 * Creates a new Sales Credit Note.
		 * Post v1/salesCreditNotes
		 * @param {SalesInvoiceCreditNoteDto} requestBody Information of Sales Credit Note to create.
		 * @return {string} OK
		 */
		SalesCreditNotes_Post(requestBody: SalesInvoiceCreditNoteDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/salesCreditNotes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Sales Credit Notes.
		 * Put v1/salesCreditNotes/batch
		 * @param {Array<BatchItem_SalesInvoiceCreditNoteDto_>} requestBody Batch of Sales Credit Notes to process.
		 * @return {string} OK
		 */
		SalesCreditNotes_ProcessBatch(requestBody: Array<BatchItem_SalesInvoiceCreditNoteDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesCreditNotes/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Sales Credit Note.
		 * Delete v1/salesCreditNotes/{id}
		 * @param {number} id Id of Sales Credit Note to remove.
		 * @param {string} timestamp Timestamp of Sales Credit Note to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		SalesCreditNotes_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/salesCreditNotes/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Sales Credit Note.
		 * Get v1/salesCreditNotes/{id}
		 * @param {number} id Id of Sales Credit Note to return.
		 * @return {SalesInvoiceCreditNoteDto} OK
		 */
		SalesCreditNotesGetById(id: number): Observable<SalesInvoiceCreditNoteDto> {
			return this.http.get<SalesInvoiceCreditNoteDto>(this.baseUri + 'v1/salesCreditNotes/' + id, {});
		}

		/**
		 * Updates an existing Sales Credit Note.
		 * Put v1/salesCreditNotes/{id}
		 * @param {number} id Id of Sales Credit Note to update.
		 * @param {SalesInvoiceCreditNoteDto} requestBody Information of Sales Credit Note to update.
		 * @return {string} OK
		 */
		SalesCreditNotes_Put(id: number, requestBody: SalesInvoiceCreditNoteDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesCreditNotes/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Sales Entries. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/salesEntries
		 * @return {PageResult_SalesEntryQueryDto_} OK
		 */
		SalesEntries_Get(): Observable<PageResult_SalesEntryQueryDto_> {
			return this.http.get<PageResult_SalesEntryQueryDto_>(this.baseUri + 'v1/salesEntries', {});
		}

		/**
		 * Creates a new Sales Entry.
		 * Post v1/salesEntries
		 * @param {SalesEntryDto} requestBody Information of Sales Entry to create.
		 * @return {string} OK
		 */
		SalesEntries_Post(requestBody: SalesEntryDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/salesEntries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Sales Entries.
		 * Put v1/salesEntries/batch
		 * @param {Array<BatchItem_SalesEntryDto_>} requestBody Batch of Sales Entries to process.
		 * @return {string} OK
		 */
		SalesEntries_ProcessBatch(requestBody: Array<BatchItem_SalesEntryDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesEntries/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Sales Entry.
		 * Delete v1/salesEntries/{id}
		 * @param {number} id Id of Sales Entry to remove.
		 * @param {string} timestamp Timestamp of Sales Entry to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		SalesEntries_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/salesEntries/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Sales Entry.
		 * Get v1/salesEntries/{id}
		 * @param {number} id Id of Sales Entry to return.
		 * @return {SalesEntryDto} OK
		 */
		SalesEntriesGetById(id: number): Observable<SalesEntryDto> {
			return this.http.get<SalesEntryDto>(this.baseUri + 'v1/salesEntries/' + id, {});
		}

		/**
		 * Updates an existing Sales Entry.
		 * Put v1/salesEntries/{id}
		 * @param {number} id Id of Sales Entry to update.
		 * @param {SalesEntryDto} requestBody Information of Sales Entry to update.
		 * @return {string} OK
		 */
		SalesEntries_Put(id: number, requestBody: SalesEntryDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesEntries/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Sales Invoices. Supports OData querying protocol.
		 * Filtering is allowed by "entryDate" field.
		 * Ordering is allowed by "id" field.
		 * Get v1/salesInvoices
		 * @return {PageResult_SalesInvoiceQueryDto_} OK
		 */
		SalesInvoices_Get(): Observable<PageResult_SalesInvoiceQueryDto_> {
			return this.http.get<PageResult_SalesInvoiceQueryDto_>(this.baseUri + 'v1/salesInvoices', {});
		}

		/**
		 * Creates a new Sales Invoice.
		 * Post v1/salesInvoices
		 * @param {SalesInvoiceCreditNoteDto} requestBody Information of Sales Invoice to create.
		 * @return {string} OK
		 */
		SalesInvoices_Post(requestBody: SalesInvoiceCreditNoteDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/salesInvoices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Sales Invoices.
		 * Put v1/salesInvoices/batch
		 * @param {Array<BatchItem_SalesInvoiceCreditNoteDto_>} requestBody Batch of Sales Invoices to process.
		 * @return {string} OK
		 */
		SalesInvoices_ProcessBatch(requestBody: Array<BatchItem_SalesInvoiceCreditNoteDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesInvoices/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Creates a new Sale Invoice with auto generating reference.
		 * Post v1/salesInvoices/createSaleInvoiceWithGeneratingReference
		 * @param {SalesInvoiceCreditNoteDto} requestBody Information of Sale Invoice to create.
		 * @return {string} OK
		 */
		SalesInvoices_Post_CreateSaleInvoiceWithGeneratingReference(requestBody: SalesInvoiceCreditNoteDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/salesInvoices/createSaleInvoiceWithGeneratingReference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Sales Invoice.
		 * Delete v1/salesInvoices/{id}
		 * @param {number} id Id of Sales Invoice to remove.
		 * @param {string} timestamp Timestamp of Sales Invoice to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		SalesInvoices_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/salesInvoices/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Sales Invoice.
		 * Get v1/salesInvoices/{id}
		 * @param {number} id Id of Sales Invoice to return.
		 * @return {SalesInvoiceCreditNoteDto} OK
		 */
		SalesInvoicesGetById(id: number): Observable<SalesInvoiceCreditNoteDto> {
			return this.http.get<SalesInvoiceCreditNoteDto>(this.baseUri + 'v1/salesInvoices/' + id, {});
		}

		/**
		 * Updates an existing Sales Invoice.
		 * Put v1/salesInvoices/{id}
		 * @param {number} id Id of Sales Invoice to update.
		 * @param {SalesInvoiceCreditNoteDto} requestBody Information of Sales Invoice to update.
		 * @return {string} OK
		 */
		SalesInvoices_Put(id: number, requestBody: SalesInvoiceCreditNoteDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesInvoices/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's SaleRep.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id".
		 * Get v1/salesReps
		 * @return {PageResult_SaleRepsDto_} OK
		 */
		SalesRep_Get(): Observable<PageResult_SaleRepsDto_> {
			return this.http.get<PageResult_SaleRepsDto_>(this.baseUri + 'v1/salesReps', {});
		}

		/**
		 * Creates a new SaleRep.
		 * Post v1/salesReps
		 * @param {SaleRepsDto} requestBody Information of Sale Rep to create.
		 * @return {string} OK
		 */
		SalesRep_Post(requestBody: SaleRepsDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/salesReps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Sale Rep.
		 * Put v1/salesReps/batch
		 * @param {Array<BatchItem_SaleRepsDto_>} requestBody Batch of Sale Rep to process.
		 * @return {string} OK
		 */
		SalesRep_ProcessBatch(requestBody: Array<BatchItem_SaleRepsDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesReps/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Sale Rep.
		 * Delete v1/salesReps/{id}
		 * @param {number} id Id of Sale Rep to remove.
		 * @param {string} timestamp Timestamp of Sale Rep to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		SalesRep_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/salesReps/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single SaleRep.
		 * Get v1/salesReps/{id}
		 * @param {number} id Id of Sale Rep to return.
		 * @return {SaleRepsDto} OK
		 */
		SalesRepGetById(id: number): Observable<SaleRepsDto> {
			return this.http.get<SaleRepsDto>(this.baseUri + 'v1/salesReps/' + id, {});
		}

		/**
		 * Updates an existing Sale Rep.
		 * Put v1/salesReps/{id}
		 * @param {number} id Id of Sale Rep to update.
		 * @param {SaleRepsDto} requestBody Information of Sale Rep to update.
		 * @return {string} OK
		 */
		SalesRep_Put(id: number, requestBody: SaleRepsDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/salesReps/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Suppliers. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" and "code" fields.
		 * Get v1/suppliers
		 * @return {PageResult_SupplierQueryDto_} OK
		 */
		Suppliers_Get(): Observable<PageResult_SupplierQueryDto_> {
			return this.http.get<PageResult_SupplierQueryDto_>(this.baseUri + 'v1/suppliers', {});
		}

		/**
		 * Creates a new Supplier.
		 * Post v1/suppliers
		 * @param {SupplierDto} requestBody Information of Supplier to create.
		 * @return {string} OK
		 */
		Suppliers_Post(requestBody: SupplierDto): Observable<string> {
			return this.http.post(this.baseUri + 'v1/suppliers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Processes a batch of Suppliers.
		 * Put v1/suppliers/batch
		 * @param {Array<BatchItem_SupplierDto_>} requestBody Batch of Suppliers to process.
		 * @return {string} OK
		 */
		Suppliers_ProcessBatch(requestBody: Array<BatchItem_SupplierDto_>): Observable<string> {
			return this.http.put(this.baseUri + 'v1/suppliers/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Removes an existing Supplier.
		 * Delete v1/suppliers/{id}
		 * @param {number} id Id of Supplier to remove.
		 * @param {string} timestamp Timestamp of Supplier to remove. Should be encoded in Base64.
		 * @return {string} OK
		 */
		Suppliers_Delete(id: number, timestamp: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/suppliers/' + id + '?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.
		 * Get v1/suppliers/{id}
		 * @param {number} id Id of Supplier to return.
		 * @param {boolean} needBalance If "true" then Supplier's ledger balance will be calculated; otherwise balance will be returned as 0.
		 * @return {SupplierDto} OK
		 */
		SuppliersGetByIdAndNeedBalance(id: number, needBalance: boolean | null | undefined): Observable<SupplierDto> {
			return this.http.get<SupplierDto>(this.baseUri + 'v1/suppliers/' + id + '?needBalance=' + needBalance, {});
		}

		/**
		 * Updates an existing Supplier.
		 * Put v1/suppliers/{id}
		 * @param {number} id Id of Supplier to update.
		 * @param {SupplierDto} requestBody Information of Supplier to update.
		 * @return {string} OK
		 */
		Suppliers_Put(id: number, requestBody: SupplierDto): Observable<string> {
			return this.http.put(this.baseUri + 'v1/suppliers/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of Supplier's account transactions.
		 * Get v1/suppliers/{itemId}/accountTrans
		 * @param {number} itemId Id of Supplier to return account transaction.
		 * @return {Array<AccountTranDto>} OK
		 */
		Suppliers_GetAccountTrans(itemId: number): Observable<Array<AccountTranDto>> {
			return this.http.get<Array<AccountTranDto>>(this.baseUri + 'v1/suppliers/' + itemId + '/accountTrans', {});
		}

		/**
		 * Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
		 * Get v1/suppliers/{itemId}/openingBalance
		 * @param {number} itemId Id of Supplier to return opening balances.
		 * @return {OwnerOpeningBalanceInPeriodsDto} OK
		 */
		Suppliers_GetOpeningBalance(itemId: number): Observable<OwnerOpeningBalanceInPeriodsDto> {
			return this.http.get<OwnerOpeningBalanceInPeriodsDto>(this.baseUri + 'v1/suppliers/' + itemId + '/openingBalance', {});
		}

		/**
		 * Returns a list of Supplier's opening balance transactions.
		 * Get v1/suppliers/{itemId}/openingBalanceList
		 * @param {number} itemId Id of Supplier to return opening balances transaction.
		 * @return {Array<OwnerOpeningBalanceDto>} OK
		 */
		Suppliers_GetOpeningBalanceList(itemId: number): Observable<Array<OwnerOpeningBalanceDto>> {
			return this.http.get<Array<OwnerOpeningBalanceDto>>(this.baseUri + 'v1/suppliers/' + itemId + '/openingBalanceList', {});
		}

		/**
		 * Returns a list of company's User Defined Fields. Supports OData querying protocol.
		 * Filtering is allowed by "categoryTypeId" field.
		 * Ordering is allowed by "id" and "orderIndex" fields.
		 * Get v1/userDefinedFields
		 * @return {PageResult_UserDefinedFieldDto_} OK
		 */
		UserDefinedFields_Get(): Observable<PageResult_UserDefinedFieldDto_> {
			return this.http.get<PageResult_UserDefinedFieldDto_>(this.baseUri + 'v1/userDefinedFields', {});
		}

		/**
		 * Returns a list of global Vat Analysis Types. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/vatAnalysisTypes
		 * @return {PageResult_VatAnalysisTypeDto_} OK
		 */
		VatAnalysisTypes_Get(): Observable<PageResult_VatAnalysisTypeDto_> {
			return this.http.get<PageResult_VatAnalysisTypeDto_>(this.baseUri + 'v1/vatAnalysisTypes', {});
		}

		/**
		 * Returns a list of global Vat Categories. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/vatCategories
		 * @return {PageResult_VatCategoryDto_} OK
		 */
		VatCategories_Get(): Observable<PageResult_VatCategoryDto_> {
			return this.http.get<PageResult_VatCategoryDto_>(this.baseUri + 'v1/vatCategories', {});
		}

		/**
		 * Process Vat Rates
		 * Post v1/vatCategories/vatRates
		 * @param {Array<VatRatesByVatCategoryDto>} requestBody Array of Vat Rates.
		 * @return {string} OK
		 */
		VatCategories_ProcessVatRates(requestBody: Array<VatRatesByVatCategoryDto>): Observable<string> {
			return this.http.post(this.baseUri + 'v1/vatCategories/vatRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of company's Vat Rates. Supports OData querying protocol.
		 * Filtering is allowed by "vatCategoryId" field.
		 * Ordering is allowed by "id" and "orderIndex" fields.
		 * Get v1/vatRates
		 * @return {PageResult_VatRateDto_} OK
		 */
		VatRates_Get(): Observable<PageResult_VatRateDto_> {
			return this.http.get<PageResult_VatRateDto_>(this.baseUri + 'v1/vatRates', {});
		}

		/**
		 * Returns a list of global Vat Types. Supports OData querying protocol.
		 * Filtering is forbidden.
		 * Ordering is allowed by "id" field.
		 * Get v1/vatTypes
		 * @return {PageResult_VatTypeDto_} OK
		 */
		VatTypes_Get(): Observable<PageResult_VatTypeDto_> {
			return this.http.get<PageResult_VatTypeDto_>(this.baseUri + 'v1/vatTypes', {});
		}
	}

}

