import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface _1CreateanewtransactionRequest {

		/** Required */
		channel: string;

		/** Required */
		referenceId: string;

		/** Required */
		salesChannel: string;
		urn?: string | null;

		/** Required */
		value: number;
	}
	export interface _1CreateanewtransactionRequestFormProperties {

		/** Required */
		channel: FormControl<string | null | undefined>,

		/** Required */
		referenceId: FormControl<string | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,
		urn: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function Create_1CreateanewtransactionRequestFormGroup() {
		return new FormGroup<_1CreateanewtransactionRequestFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urn: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface _2SendPaymentsPrivateRequest {

		/** Required */
		currencyCode: string;

		/** Required */
		fields: Fields;

		/** Required */
		installments: number;

		/** Required */
		installmentsInterestRate: number;

		/** Required */
		installmentsValue: number;

		/** Required */
		paymentSystem: number;

		/** Required */
		referenceValue: number;

		/** Required */
		transaction: Transaction;

		/** Required */
		value: number;
	}
	export interface _2SendPaymentsPrivateRequestFormProperties {

		/** Required */
		currencyCode: FormControl<string | null | undefined>,

		/** Required */
		installments: FormControl<number | null | undefined>,

		/** Required */
		installmentsInterestRate: FormControl<number | null | undefined>,

		/** Required */
		installmentsValue: FormControl<number | null | undefined>,

		/** Required */
		paymentSystem: FormControl<number | null | undefined>,

		/** Required */
		referenceValue: FormControl<number | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function Create_2SendPaymentsPrivateRequestFormGroup() {
		return new FormGroup<_2SendPaymentsPrivateRequestFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fields {

		/** Required */
		accountId: string;

		/** Required */
		address: string;

		/** Required */
		callbackUrl: string;

		/** Required */
		cardNumber: string;

		/** Required */
		document: string;

		/** Required */
		dueDate: string;

		/** Required */
		holderName: string;

		/** Required */
		validationCode: string;
	}
	export interface FieldsFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		callbackUrl: FormControl<string | null | undefined>,

		/** Required */
		cardNumber: FormControl<string | null | undefined>,

		/** Required */
		document: FormControl<string | null | undefined>,

		/** Required */
		dueDate: FormControl<string | null | undefined>,

		/** Required */
		holderName: FormControl<string | null | undefined>,

		/** Required */
		validationCode: FormControl<string | null | undefined>,
	}
	export function CreateFieldsFormGroup() {
		return new FormGroup<FieldsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cardNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			holderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validationCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transaction {

		/** Required */
		id: string;

		/** Required */
		merchantName: string;
	}
	export interface TransactionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		merchantName: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			merchantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface _2SendPaymentsPublicRequest {

		/** Required */
		currencyCode: string;

		/** Required */
		fields: Fields;

		/** Required */
		installments: number;

		/** Required */
		installmentsInterestRate: number;

		/** Required */
		installmentsValue: number;

		/** Required */
		paymentSystem: number;

		/** Required */
		referenceValue: number;

		/** Required */
		transaction: Transaction;

		/** Required */
		value: number;
	}
	export interface _2SendPaymentsPublicRequestFormProperties {

		/** Required */
		currencyCode: FormControl<string | null | undefined>,

		/** Required */
		installments: FormControl<number | null | undefined>,

		/** Required */
		installmentsInterestRate: FormControl<number | null | undefined>,

		/** Required */
		installmentsValue: FormControl<number | null | undefined>,

		/** Required */
		paymentSystem: FormControl<number | null | undefined>,

		/** Required */
		referenceValue: FormControl<number | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function Create_2SendPaymentsPublicRequestFormGroup() {
		return new FormGroup<_2SendPaymentsPublicRequestFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface _2SendPaymentsWithSavedCreditCardRequest {

		/** Required */
		currencyCode: string;

		/** Required */
		fields: Fields3;

		/** Required */
		installments: number;

		/** Required */
		installmentsInterestRate: number;

		/** Required */
		installmentsValue: number;

		/** Required */
		paymentSystem: number;

		/** Required */
		referenceValue: number;

		/** Required */
		transaction: Transaction;

		/** Required */
		value: number;
	}
	export interface _2SendPaymentsWithSavedCreditCardRequestFormProperties {

		/** Required */
		currencyCode: FormControl<string | null | undefined>,

		/** Required */
		installments: FormControl<number | null | undefined>,

		/** Required */
		installmentsInterestRate: FormControl<number | null | undefined>,

		/** Required */
		installmentsValue: FormControl<number | null | undefined>,

		/** Required */
		paymentSystem: FormControl<number | null | undefined>,

		/** Required */
		referenceValue: FormControl<number | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function Create_2SendPaymentsWithSavedCreditCardRequestFormGroup() {
		return new FormGroup<_2SendPaymentsWithSavedCreditCardRequestFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fields3 {

		/** Required */
		accountId: string;

		/** Required */
		address: string;

		/** Required */
		callbackUrl: string;

		/** Required */
		firstDigits: string;

		/** Required */
		validationCode: string;
	}
	export interface Fields3FormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		callbackUrl: FormControl<string | null | undefined>,

		/** Required */
		firstDigits: FormControl<string | null | undefined>,

		/** Required */
		validationCode: FormControl<string | null | undefined>,
	}
	export function CreateFields3FormGroup() {
		return new FormGroup<Fields3FormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstDigits: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validationCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface _3SendAdditionalDataRequest {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface _3SendAdditionalDataRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function Create_3SendAdditionalDataRequestFormGroup() {
		return new FormGroup<_3SendAdditionalDataRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface _4DoauthorizationRequest {

		/** Required */
		prepareForRecurrency: boolean;

		/** Required */
		softDescriptor: string;

		/** Required */
		transactionId: string;
	}
	export interface _4DoauthorizationRequestFormProperties {

		/** Required */
		prepareForRecurrency: FormControl<boolean | null | undefined>,

		/** Required */
		softDescriptor: FormControl<string | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function Create_4DoauthorizationRequestFormGroup() {
		return new FormGroup<_4DoauthorizationRequestFormProperties>({
			prepareForRecurrency: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			softDescriptor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Action {

		/** Required */
		connectorResponse: string;

		/** Required */
		date: string;

		/** Required */
		payment: Payment1;

		/** Required */
		paymentId: string;

		/** Required */
		type: string;

		/** Required */
		value: number;
	}
	export interface ActionFormProperties {

		/** Required */
		connectorResponse: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		paymentId: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			connectorResponse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payment1 {

		/** Required */
		href: string;
	}
	export interface Payment1FormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreatePayment1FormGroup() {
		return new FormGroup<Payment1FormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Antifraud {

		/** Required */
		affiliationId: string;

		/** Required */
		implementation: string;
	}
	export interface AntifraudFormProperties {

		/** Required */
		affiliationId: FormControl<string | null | undefined>,

		/** Required */
		implementation: FormControl<string | null | undefined>,
	}
	export function CreateAntifraudFormGroup() {
		return new FormGroup<AntifraudFormProperties>({
			affiliationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			implementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Antifraud1 {

		/** Required */
		affiliationId: string;
	}
	export interface Antifraud1FormProperties {

		/** Required */
		affiliationId: FormControl<string | null | undefined>,
	}
	export function CreateAntifraud1FormGroup() {
		return new FormGroup<Antifraud1FormProperties>({
			affiliationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Cancellations {

		/** Required */
		href: string;
	}
	export interface CancellationsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateCancellationsFormGroup() {
		return new FormGroup<CancellationsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelthetransactionRequest {

		/** This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment. */
		minicart?: CancelthetransactionRequestMinicart;

		/**
		 * Value of the purchase.
		 * Required
		 */
		value: number;
	}
	export interface CancelthetransactionRequestFormProperties {

		/**
		 * Value of the purchase.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCancelthetransactionRequestFormGroup() {
		return new FormGroup<CancelthetransactionRequestFormProperties>({
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelthetransactionRequestMinicart {
		freight?: number | null;
		items?: Array<string>;
		tax?: number | null;
	}
	export interface CancelthetransactionRequestMinicartFormProperties {
		freight: FormControl<number | null | undefined>,
		tax: FormControl<number | null | undefined>,
	}
	export function CreateCancelthetransactionRequestMinicartFormGroup() {
		return new FormGroup<CancelthetransactionRequestMinicartFormProperties>({
			freight: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Configuration {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface ConfigurationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Connector {

		/** Required */
		affiliationId: string;

		/** Required */
		implementation: string;
	}
	export interface ConnectorFormProperties {

		/** Required */
		affiliationId: FormControl<string | null | undefined>,

		/** Required */
		implementation: FormControl<string | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			affiliationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			implementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Required */
		code: string;

		/** Required */
		exception: string;

		/** Required */
		message: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		exception: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exception: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Field {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface FieldFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fields1 {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface Fields1FormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFields1FormGroup() {
		return new FormGroup<Fields1FormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsertAffiliationRequest {

		/** Required */
		configuration: Array<Configuration>;

		/** Required */
		implementation: string;

		/** Required */
		isConfigured: boolean;

		/** Required */
		isdelivered: boolean;

		/** Required */
		name: string;
	}
	export interface InsertAffiliationRequestFormProperties {

		/** Required */
		implementation: FormControl<string | null | undefined>,

		/** Required */
		isConfigured: FormControl<boolean | null | undefined>,

		/** Required */
		isdelivered: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInsertAffiliationRequestFormGroup() {
		return new FormGroup<InsertAffiliationRequestFormProperties>({
			implementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isConfigured: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isdelivered: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsertRuleRequest {

		/** Required */
		antifraud: Antifraud;

		/** Required */
		beginDate: string;

		/** Required */
		condition: string;

		/** Required */
		connector: Connector;

		/** Required */
		country: string;

		/** Required */
		dateIntervals: string;

		/** Required */
		enabled: boolean;

		/** Required */
		endDate: string;

		/** Required */
		installmentOptions: string;

		/** Required */
		installmentsService: string;

		/** Required */
		isDefault: boolean;

		/** Required */
		isSelfAuthorized: string;

		/** Required */
		issuer: Issuer;

		/** Required */
		multiMerchantList: string;

		/** Required */
		name: string;

		/** Required */
		paymentSystem: PaymentSystem;

		/** Required */
		requiresAuthentication: string;

		/** Required */
		salesChannels: Array<SalesChannel>;
	}
	export interface InsertRuleRequestFormProperties {

		/** Required */
		beginDate: FormControl<string | null | undefined>,

		/** Required */
		condition: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		dateIntervals: FormControl<string | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		endDate: FormControl<string | null | undefined>,

		/** Required */
		installmentOptions: FormControl<string | null | undefined>,

		/** Required */
		installmentsService: FormControl<string | null | undefined>,

		/** Required */
		isDefault: FormControl<boolean | null | undefined>,

		/** Required */
		isSelfAuthorized: FormControl<string | null | undefined>,

		/** Required */
		multiMerchantList: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		requiresAuthentication: FormControl<string | null | undefined>,
	}
	export function CreateInsertRuleRequestFormGroup() {
		return new FormGroup<InsertRuleRequestFormProperties>({
			beginDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateIntervals: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			endDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installmentOptions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installmentsService: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isSelfAuthorized: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multiMerchantList: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresAuthentication: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Issuer {

		/** Required */
		name: string;
	}
	export interface IssuerFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIssuerFormGroup() {
		return new FormGroup<IssuerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentSystem {

		/** Required */
		id: number;

		/** Required */
		implementation: string;

		/** Required */
		name: string;
	}
	export interface PaymentSystemFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		implementation: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentSystemFormGroup() {
		return new FormGroup<PaymentSystemFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			implementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SalesChannel {

		/** Required */
		id: string;
	}
	export interface SalesChannelFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSalesChannelFormGroup() {
		return new FormGroup<SalesChannelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Installment {

		/** Required */
		options: Array<Option>;

		/** Required */
		payment: Payment;
	}
	export interface InstallmentFormProperties {
	}
	export function CreateInstallmentFormGroup() {
		return new FormGroup<InstallmentFormProperties>({
		});

	}

	export interface Option {

		/** Required */
		interestRate: number;

		/** Required */
		quantity: number;

		/** Required */
		value: number;
	}
	export interface OptionFormProperties {

		/** Required */
		interestRate: FormControl<number | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payment {

		/** Required */
		bin: string;

		/** Required */
		id: number;

		/** Required */
		isDefault: boolean;

		/** Required */
		name: string;

		/** Required */
		self: Self;

		/** Required */
		value: number;
	}
	export interface PaymentFormProperties {

		/** Required */
		bin: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		isDefault: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Self {

		/** Required */
		href: string;
	}
	export interface SelfFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateSelfFormGroup() {
		return new FormGroup<SelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InstallmentOptions {

		/** Required */
		interestRateMethod: string;
	}
	export interface InstallmentOptionsFormProperties {

		/** Required */
		interestRateMethod: FormControl<string | null | undefined>,
	}
	export function CreateInstallmentOptionsFormGroup() {
		return new FormGroup<InstallmentOptionsFormProperties>({
			interestRateMethod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Interactions {

		/** Required */
		href: string;
	}
	export interface InteractionsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateInteractionsFormGroup() {
		return new FormGroup<InteractionsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidRequestValue {

		/** Required */
		error: Error;
	}
	export interface InvalidRequestValueFormProperties {
	}
	export function CreateInvalidRequestValueFormGroup() {
		return new FormGroup<InvalidRequestValueFormProperties>({
		});

	}

	export interface PaymentDetailsResponse {

		/** Required */
		ConnectorResponses: string;

		/** Required */
		ShowConnectorResponses: boolean;

		/** Required */
		allowInstallments: boolean;

		/** Required */
		allowIssuer: boolean;

		/** Required */
		allowNotification: boolean;

		/** Required */
		connector: string;

		/** Required */
		connectorResponse: string;

		/** Required */
		currencyCode: string;

		/** Required */
		description: string;

		/** Required */
		fields: Array<Fields1>;

		/** Required */
		group: string;

		/** Required */
		id: string;

		/** Required */
		installments: number;

		/** Required */
		installmentsInterestRate: number;

		/** Required */
		installmentsValue: number;

		/** Required */
		isAvailable: boolean;

		/** Required */
		isCustom: boolean;

		/** Required */
		merchantName: string;

		/** Required */
		paymentSystem: number;

		/** Required */
		paymentSystemName: string;

		/** Required */
		provider: string;

		/** Required */
		referenceValue: number;

		/** Required */
		returnCode: string;

		/** Required */
		returnMessage: string;

		/** Required */
		self: Self;

		/** Required */
		sheets: string;

		/** Required */
		status: string;

		/** Required */
		tid: string;

		/** Required */
		value: number;
	}
	export interface PaymentDetailsResponseFormProperties {

		/** Required */
		ConnectorResponses: FormControl<string | null | undefined>,

		/** Required */
		ShowConnectorResponses: FormControl<boolean | null | undefined>,

		/** Required */
		allowInstallments: FormControl<boolean | null | undefined>,

		/** Required */
		allowIssuer: FormControl<boolean | null | undefined>,

		/** Required */
		allowNotification: FormControl<boolean | null | undefined>,

		/** Required */
		connector: FormControl<string | null | undefined>,

		/** Required */
		connectorResponse: FormControl<string | null | undefined>,

		/** Required */
		currencyCode: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		group: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		installments: FormControl<number | null | undefined>,

		/** Required */
		installmentsInterestRate: FormControl<number | null | undefined>,

		/** Required */
		installmentsValue: FormControl<number | null | undefined>,

		/** Required */
		isAvailable: FormControl<boolean | null | undefined>,

		/** Required */
		isCustom: FormControl<boolean | null | undefined>,

		/** Required */
		merchantName: FormControl<string | null | undefined>,

		/** Required */
		paymentSystem: FormControl<number | null | undefined>,

		/** Required */
		paymentSystemName: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		referenceValue: FormControl<number | null | undefined>,

		/** Required */
		returnCode: FormControl<string | null | undefined>,

		/** Required */
		returnMessage: FormControl<string | null | undefined>,

		/** Required */
		sheets: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		tid: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePaymentDetailsResponseFormGroup() {
		return new FormGroup<PaymentDetailsResponseFormProperties>({
			ConnectorResponses: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShowConnectorResponses: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowInstallments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowIssuer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowNotification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			connector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorResponse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			merchantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			returnCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			returnMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sheets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentSystemsResponse {

		/** Required */
		affiliationId: string;

		/** Required */
		allowCommercialCondition: boolean;

		/** Required */
		allowCommercialPolicy: boolean;

		/** Required */
		allowCountry: boolean;

		/** Required */
		allowInstallments: boolean;

		/** Required */
		allowIssuer: boolean;

		/** Required */
		allowMultiple: boolean;

		/** Required */
		allowNotification: boolean;

		/** Required */
		allowPeriod: boolean;

		/** Required */
		antifraudConnectorImplementation: string;

		/** Required */
		connectorId: number;

		/** Required */
		connectorImplementation: string;

		/** Required */
		description: string;

		/** Required */
		dueDate: string;

		/** Required */
		fields: string;

		/** Required */
		groupName: string;

		/** Required */
		id: number;

		/** Required */
		implementation: string;

		/** Required */
		isAvailable: boolean;

		/** Required */
		isCustom: boolean;

		/** Required */
		isSelfAuthorized: boolean;

		/** Required */
		name: string;

		/** Required */
		requiresDocument: boolean;

		/** Required */
		requiresPhone: boolean;

		/** Required */
		rules: Array<Rule>;

		/** Required */
		validator: Validator;
	}
	export interface PaymentSystemsResponseFormProperties {

		/** Required */
		affiliationId: FormControl<string | null | undefined>,

		/** Required */
		allowCommercialCondition: FormControl<boolean | null | undefined>,

		/** Required */
		allowCommercialPolicy: FormControl<boolean | null | undefined>,

		/** Required */
		allowCountry: FormControl<boolean | null | undefined>,

		/** Required */
		allowInstallments: FormControl<boolean | null | undefined>,

		/** Required */
		allowIssuer: FormControl<boolean | null | undefined>,

		/** Required */
		allowMultiple: FormControl<boolean | null | undefined>,

		/** Required */
		allowNotification: FormControl<boolean | null | undefined>,

		/** Required */
		allowPeriod: FormControl<boolean | null | undefined>,

		/** Required */
		antifraudConnectorImplementation: FormControl<string | null | undefined>,

		/** Required */
		connectorId: FormControl<number | null | undefined>,

		/** Required */
		connectorImplementation: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		dueDate: FormControl<string | null | undefined>,

		/** Required */
		fields: FormControl<string | null | undefined>,

		/** Required */
		groupName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		implementation: FormControl<string | null | undefined>,

		/** Required */
		isAvailable: FormControl<boolean | null | undefined>,

		/** Required */
		isCustom: FormControl<boolean | null | undefined>,

		/** Required */
		isSelfAuthorized: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		requiresDocument: FormControl<boolean | null | undefined>,

		/** Required */
		requiresPhone: FormControl<boolean | null | undefined>,
	}
	export function CreatePaymentSystemsResponseFormGroup() {
		return new FormGroup<PaymentSystemsResponseFormProperties>({
			affiliationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allowCommercialCondition: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowCommercialPolicy: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowCountry: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowInstallments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowIssuer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowMultiple: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowNotification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowPeriod: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			antifraudConnectorImplementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			connectorImplementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fields: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			implementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isSelfAuthorized: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requiresPhone: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Rule {

		/** Required */
		antifraudImplementation: string;

		/** Required */
		connectorImplementation: string;

		/** Required */
		id: string;
	}
	export interface RuleFormProperties {

		/** Required */
		antifraudImplementation: FormControl<string | null | undefined>,

		/** Required */
		connectorImplementation: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			antifraudImplementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorImplementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Validator {

		/** Required */
		cardCodeMask: string;

		/** Required */
		cardCodeRegex: string;

		/** Required */
		mask: string;

		/** Required */
		regex: string;

		/** Required */
		useBillingAddress: boolean;

		/** Required */
		useCardHolderName: boolean;

		/** Required */
		useCvv: boolean;

		/** Required */
		useExpirationDate: boolean;

		/** Required */
		validCardLengths: string;

		/** Required */
		weights: Array<number>;
	}
	export interface ValidatorFormProperties {

		/** Required */
		cardCodeMask: FormControl<string | null | undefined>,

		/** Required */
		cardCodeRegex: FormControl<string | null | undefined>,

		/** Required */
		mask: FormControl<string | null | undefined>,

		/** Required */
		regex: FormControl<string | null | undefined>,

		/** Required */
		useBillingAddress: FormControl<boolean | null | undefined>,

		/** Required */
		useCardHolderName: FormControl<boolean | null | undefined>,

		/** Required */
		useCvv: FormControl<boolean | null | undefined>,

		/** Required */
		useExpirationDate: FormControl<boolean | null | undefined>,

		/** Required */
		validCardLengths: FormControl<string | null | undefined>,
	}
	export function CreateValidatorFormGroup() {
		return new FormGroup<ValidatorFormProperties>({
			cardCodeMask: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cardCodeRegex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mask: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useBillingAddress: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useCardHolderName: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useCvv: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useExpirationDate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validCardLengths: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payments {

		/** Required */
		href: string;
	}
	export interface PaymentsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsFormGroup() {
		return new FormGroup<PaymentsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentsByTransactionResponse {

		/** Required */
		ConnectorResponses: string;

		/** Required */
		ShowConnectorResponses: boolean;

		/** Required */
		allowInstallments: boolean;

		/** Required */
		allowIssuer: boolean;

		/** Required */
		allowNotification: boolean;

		/** Required */
		connector: string;

		/** Required */
		connectorResponse: string;

		/** Required */
		currencyCode: string;

		/** Required */
		description: string;

		/** Required */
		fields: Array<Fields1>;

		/** Required */
		group: string;

		/** Required */
		id: string;

		/** Required */
		installments: number;

		/** Required */
		installmentsInterestRate: number;

		/** Required */
		installmentsValue: number;

		/** Required */
		isAvailable: boolean;

		/** Required */
		isCustom: boolean;

		/** Required */
		merchantName: string;

		/** Required */
		paymentSystem: number;

		/** Required */
		paymentSystemName: string;

		/** Required */
		provider: string;

		/** Required */
		referenceValue: number;

		/** Required */
		returnCode: string;

		/** Required */
		returnMessage: string;

		/** Required */
		self: Self;

		/** Required */
		sheets: string;

		/** Required */
		status: string;

		/** Required */
		tid: string;

		/** Required */
		value: number;
	}
	export interface PaymentsByTransactionResponseFormProperties {

		/** Required */
		ConnectorResponses: FormControl<string | null | undefined>,

		/** Required */
		ShowConnectorResponses: FormControl<boolean | null | undefined>,

		/** Required */
		allowInstallments: FormControl<boolean | null | undefined>,

		/** Required */
		allowIssuer: FormControl<boolean | null | undefined>,

		/** Required */
		allowNotification: FormControl<boolean | null | undefined>,

		/** Required */
		connector: FormControl<string | null | undefined>,

		/** Required */
		connectorResponse: FormControl<string | null | undefined>,

		/** Required */
		currencyCode: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		group: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		installments: FormControl<number | null | undefined>,

		/** Required */
		installmentsInterestRate: FormControl<number | null | undefined>,

		/** Required */
		installmentsValue: FormControl<number | null | undefined>,

		/** Required */
		isAvailable: FormControl<boolean | null | undefined>,

		/** Required */
		isCustom: FormControl<boolean | null | undefined>,

		/** Required */
		merchantName: FormControl<string | null | undefined>,

		/** Required */
		paymentSystem: FormControl<number | null | undefined>,

		/** Required */
		paymentSystemName: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		referenceValue: FormControl<number | null | undefined>,

		/** Required */
		returnCode: FormControl<string | null | undefined>,

		/** Required */
		returnMessage: FormControl<string | null | undefined>,

		/** Required */
		sheets: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		tid: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePaymentsByTransactionResponseFormGroup() {
		return new FormGroup<PaymentsByTransactionResponseFormProperties>({
			ConnectorResponses: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShowConnectorResponses: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowInstallments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowIssuer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowNotification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			connector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorResponse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			merchantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			returnCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			returnMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sheets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReceivePaymentsResponse {

		/** Required */
		ConnectorResponses: string;

		/** Required */
		ShowConnectorResponses: boolean;

		/** Required */
		allowInstallments: boolean;

		/** Required */
		allowIssuer: boolean;

		/** Required */
		allowNotification: boolean;

		/** Required */
		connector: string;

		/** Required */
		connectorResponse: string;

		/** Required */
		currencyCode: string;

		/** Required */
		description: string;

		/** Required */
		fields: Array<Fields1>;

		/** Required */
		group: string;

		/** Required */
		id: string;

		/** Required */
		installments: number;

		/** Required */
		installmentsInterestRate: number;

		/** Required */
		installmentsValue: number;

		/** Required */
		isAvailable: boolean;

		/** Required */
		isCustom: boolean;

		/** Required */
		merchantName: string;

		/** Required */
		paymentSystem: number;

		/** Required */
		paymentSystemName: string;

		/** Required */
		provider: string;

		/** Required */
		referenceValue: number;

		/** Required */
		returnCode: string;

		/** Required */
		returnMessage: string;

		/** Required */
		self: Self;

		/** Required */
		sheets: string;

		/** Required */
		status: string;

		/** Required */
		tid: string;

		/** Required */
		value: number;
	}
	export interface ReceivePaymentsResponseFormProperties {

		/** Required */
		ConnectorResponses: FormControl<string | null | undefined>,

		/** Required */
		ShowConnectorResponses: FormControl<boolean | null | undefined>,

		/** Required */
		allowInstallments: FormControl<boolean | null | undefined>,

		/** Required */
		allowIssuer: FormControl<boolean | null | undefined>,

		/** Required */
		allowNotification: FormControl<boolean | null | undefined>,

		/** Required */
		connector: FormControl<string | null | undefined>,

		/** Required */
		connectorResponse: FormControl<string | null | undefined>,

		/** Required */
		currencyCode: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		group: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		installments: FormControl<number | null | undefined>,

		/** Required */
		installmentsInterestRate: FormControl<number | null | undefined>,

		/** Required */
		installmentsValue: FormControl<number | null | undefined>,

		/** Required */
		isAvailable: FormControl<boolean | null | undefined>,

		/** Required */
		isCustom: FormControl<boolean | null | undefined>,

		/** Required */
		merchantName: FormControl<string | null | undefined>,

		/** Required */
		paymentSystem: FormControl<number | null | undefined>,

		/** Required */
		paymentSystemName: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		referenceValue: FormControl<number | null | undefined>,

		/** Required */
		returnCode: FormControl<string | null | undefined>,

		/** Required */
		returnMessage: FormControl<string | null | undefined>,

		/** Required */
		sheets: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		tid: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateReceivePaymentsResponseFormGroup() {
		return new FormGroup<ReceivePaymentsResponseFormProperties>({
			ConnectorResponses: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShowConnectorResponses: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowInstallments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowIssuer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowNotification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			connector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorResponse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			installmentsValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			merchantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			returnCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			returnMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sheets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Refunds {

		/** Required */
		href: string;
	}
	export interface RefundsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRefundsFormGroup() {
		return new FormGroup<RefundsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RefundthetransactionRequest {

		/** This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment. */
		minicart?: RefundthetransactionRequestMinicart;

		/**
		 * Value of the purchase.
		 * Required
		 */
		value: number;
	}
	export interface RefundthetransactionRequestFormProperties {

		/**
		 * Value of the purchase.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateRefundthetransactionRequestFormGroup() {
		return new FormGroup<RefundthetransactionRequestFormProperties>({
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RefundthetransactionRequestMinicart {
		freight?: number | null;
		items?: Array<string>;
		tax?: number | null;
	}
	export interface RefundthetransactionRequestMinicartFormProperties {
		freight: FormControl<number | null | undefined>,
		tax: FormControl<number | null | undefined>,
	}
	export function CreateRefundthetransactionRequestMinicartFormGroup() {
		return new FormGroup<RefundthetransactionRequestMinicartFormProperties>({
			freight: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Request {

		/** Required */
		date: string;

		/** Required */
		id: string;

		/** Required */
		value: number;
	}
	export interface RequestFormProperties {

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RuleByIdRequest {

		/** Required */
		antifraud: Antifraud1;

		/** Required */
		beginDate: string;

		/** Required */
		condition: string;

		/** Required */
		connector: Connector;

		/** Required */
		country: string;

		/** Required */
		dateIntervals: string;

		/** Required */
		enabled: boolean;

		/** Required */
		endDate: string;

		/** Required */
		id: string;

		/** Required */
		installmentOptions: InstallmentOptions;

		/** Required */
		isDefault: string;

		/** Required */
		isSelfAuthorized: string;

		/** Required */
		issuer: Issuer;

		/** Required */
		multiMerchantList: string;

		/** Required */
		name: string;

		/** Required */
		paymentSystem: PaymentSystem;

		/** Required */
		salesChannels: Array<SalesChannel>;
	}
	export interface RuleByIdRequestFormProperties {

		/** Required */
		beginDate: FormControl<string | null | undefined>,

		/** Required */
		condition: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		dateIntervals: FormControl<string | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		endDate: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		isDefault: FormControl<string | null | undefined>,

		/** Required */
		isSelfAuthorized: FormControl<string | null | undefined>,

		/** Required */
		multiMerchantList: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRuleByIdRequestFormGroup() {
		return new FormGroup<RuleByIdRequestFormProperties>({
			beginDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateIntervals: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			endDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isDefault: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isSelfAuthorized: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multiMerchantList: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SettleResponse {

		/** Required */
		cancelledValue: number;

		/** Required */
		connectorRefundedValue: number;

		/** Required */
		message: string;

		/** Required */
		processingDate: string;

		/** Required */
		refundedToken: string;

		/** Required */
		refundedValue: number;

		/** Required */
		status: number;

		/** Required */
		statusDetail: string;

		/** Required */
		token: string;
	}
	export interface SettleResponseFormProperties {

		/** Required */
		cancelledValue: FormControl<number | null | undefined>,

		/** Required */
		connectorRefundedValue: FormControl<number | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		processingDate: FormControl<string | null | undefined>,

		/** Required */
		refundedToken: FormControl<string | null | undefined>,

		/** Required */
		refundedValue: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<number | null | undefined>,

		/** Required */
		statusDetail: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateSettleResponseFormGroup() {
		return new FormGroup<SettleResponseFormProperties>({
			cancelledValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			connectorRefundedValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			processingDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refundedToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refundedValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			statusDetail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Settlements {

		/** Required */
		href: string;
	}
	export interface SettlementsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateSettlementsFormGroup() {
		return new FormGroup<SettlementsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SettlethetransactionRequest {

		/** Required */
		value: number;
	}
	export interface SettlethetransactionRequestFormProperties {

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateSettlethetransactionRequestFormGroup() {
		return new FormGroup<SettlethetransactionRequestFormProperties>({
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartTransactionResponse {

		/** Required */
		acceptHeader: string;

		/** Required */
		antifraudAffiliationId: string;

		/** Required */
		antifraudTid: string;

		/** Required */
		authorizationDate: string;

		/** Required */
		authorizationToken: string;

		/** Required */
		buyer: string;

		/** Required */
		cancelationDate: string;

		/** Required */
		cancelationToken: string;

		/** Required */
		cancellations: Cancellations;

		/** Required */
		channel: string;

		/** Required */
		commitmentDate: string;

		/** Required */
		commitmentToken: string;

		/** Required */
		fields: Array<Field>;

		/** Required */
		id: string;

		/** Required */
		interactions: Interactions;

		/** Required */
		ipAddress: string;

		/** Required */
		markedForRecurrence: boolean;

		/** Required */
		owner: string;

		/** Required */
		payments: Payments;

		/** Required */
		receiverUri: string;

		/** Required */
		referenceKey: string;

		/** Required */
		refundingDate: string;

		/** Required */
		refundingToken: string;

		/** Required */
		refunds: Refunds;

		/** Required */
		salesChannel: string;

		/** Required */
		settlements: Settlements;

		/** Required */
		softDescriptor: string;

		/** Required */
		startDate: string;

		/** Required */
		status: string;

		/** Required */
		timeoutStatus: number;

		/** Required */
		totalRefunds: number;

		/** Required */
		transactionId: string;

		/** Required */
		urn: string;

		/** Required */
		userAgent: string;

		/** Required */
		value: number;
	}
	export interface StartTransactionResponseFormProperties {

		/** Required */
		acceptHeader: FormControl<string | null | undefined>,

		/** Required */
		antifraudAffiliationId: FormControl<string | null | undefined>,

		/** Required */
		antifraudTid: FormControl<string | null | undefined>,

		/** Required */
		authorizationDate: FormControl<string | null | undefined>,

		/** Required */
		authorizationToken: FormControl<string | null | undefined>,

		/** Required */
		buyer: FormControl<string | null | undefined>,

		/** Required */
		cancelationDate: FormControl<string | null | undefined>,

		/** Required */
		cancelationToken: FormControl<string | null | undefined>,

		/** Required */
		channel: FormControl<string | null | undefined>,

		/** Required */
		commitmentDate: FormControl<string | null | undefined>,

		/** Required */
		commitmentToken: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		ipAddress: FormControl<string | null | undefined>,

		/** Required */
		markedForRecurrence: FormControl<boolean | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		receiverUri: FormControl<string | null | undefined>,

		/** Required */
		referenceKey: FormControl<string | null | undefined>,

		/** Required */
		refundingDate: FormControl<string | null | undefined>,

		/** Required */
		refundingToken: FormControl<string | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,

		/** Required */
		softDescriptor: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		timeoutStatus: FormControl<number | null | undefined>,

		/** Required */
		totalRefunds: FormControl<number | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,

		/** Required */
		urn: FormControl<string | null | undefined>,

		/** Required */
		userAgent: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateStartTransactionResponseFormGroup() {
		return new FormGroup<StartTransactionResponseFormProperties>({
			acceptHeader: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			antifraudAffiliationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			antifraudTid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			buyer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cancelationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cancelationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitmentDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitmentToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			markedForRecurrence: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refundingDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refundingToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			softDescriptor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalRefunds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userAgent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionDetailsResponse {

		/** Required */
		acceptHeader: string;

		/** Required */
		antifraudAffiliationId: string;

		/** Required */
		antifraudTid: string;

		/** Required */
		authorizationDate: string;

		/** Required */
		authorizationToken: string;

		/** Required */
		buyer: string;

		/** Required */
		cancelationDate: string;

		/** Required */
		cancelationToken: string;

		/** Required */
		cancellations: Cancellations;

		/** Required */
		channel: string;

		/** Required */
		commitmentDate: string;

		/** Required */
		commitmentToken: string;

		/** Required */
		fields: Array<Fields1>;

		/** Required */
		id: string;

		/** Required */
		interactions: Interactions;

		/** Required */
		ipAddress: string;

		/** Required */
		markedForRecurrence: boolean;

		/** Required */
		owner: string;

		/** Required */
		payments: Payments;

		/** Required */
		receiverUri: string;

		/** Required */
		referenceKey: string;

		/** Required */
		refundingDate: string;

		/** Required */
		refundingToken: string;

		/** Required */
		refunds: Refunds;

		/** Required */
		salesChannel: string;

		/** Required */
		settlements: Settlements;

		/** Required */
		softDescriptor: string;

		/** Required */
		startDate: string;

		/** Required */
		status: string;

		/** Required */
		timeoutStatus: number;

		/** Required */
		totalRefunds: number;

		/** Required */
		transactionId: string;

		/** Required */
		urn: string;

		/** Required */
		userAgent: string;

		/** Required */
		value: number;
	}
	export interface TransactionDetailsResponseFormProperties {

		/** Required */
		acceptHeader: FormControl<string | null | undefined>,

		/** Required */
		antifraudAffiliationId: FormControl<string | null | undefined>,

		/** Required */
		antifraudTid: FormControl<string | null | undefined>,

		/** Required */
		authorizationDate: FormControl<string | null | undefined>,

		/** Required */
		authorizationToken: FormControl<string | null | undefined>,

		/** Required */
		buyer: FormControl<string | null | undefined>,

		/** Required */
		cancelationDate: FormControl<string | null | undefined>,

		/** Required */
		cancelationToken: FormControl<string | null | undefined>,

		/** Required */
		channel: FormControl<string | null | undefined>,

		/** Required */
		commitmentDate: FormControl<string | null | undefined>,

		/** Required */
		commitmentToken: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		ipAddress: FormControl<string | null | undefined>,

		/** Required */
		markedForRecurrence: FormControl<boolean | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		receiverUri: FormControl<string | null | undefined>,

		/** Required */
		referenceKey: FormControl<string | null | undefined>,

		/** Required */
		refundingDate: FormControl<string | null | undefined>,

		/** Required */
		refundingToken: FormControl<string | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,

		/** Required */
		softDescriptor: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		timeoutStatus: FormControl<number | null | undefined>,

		/** Required */
		totalRefunds: FormControl<number | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,

		/** Required */
		urn: FormControl<string | null | undefined>,

		/** Required */
		userAgent: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTransactionDetailsResponseFormGroup() {
		return new FormGroup<TransactionDetailsResponseFormProperties>({
			acceptHeader: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			antifraudAffiliationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			antifraudTid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			buyer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cancelationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cancelationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitmentDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitmentToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			markedForRecurrence: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refundingDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refundingToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			softDescriptor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalRefunds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userAgent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionSettlementDetails {

		/** Required */
		actions: Array<Action>;

		/** Required */
		requests: Array<Request>;
	}
	export interface TransactionSettlementDetailsFormProperties {
	}
	export function CreateTransactionSettlementDetailsFormGroup() {
		return new FormGroup<TransactionSettlementDetailsFormProperties>({
		});

	}

	export interface UpdateAffiliationRequest {

		/** Required */
		configuration: Array<Configuration>;

		/** Required */
		id: string;

		/** Required */
		implementation: string;

		/** Required */
		isConfigured: boolean;

		/** Required */
		isdelivered: boolean;

		/** Required */
		name: string;
	}
	export interface UpdateAffiliationRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		implementation: FormControl<string | null | undefined>,

		/** Required */
		isConfigured: FormControl<boolean | null | undefined>,

		/** Required */
		isdelivered: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAffiliationRequestFormGroup() {
		return new FormGroup<UpdateAffiliationRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			implementation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isConfigured: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isdelivered: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidRequest {

		/** Required */
		installments: Array<Installment>;

		/** Required */
		value: number;
	}
	export interface ValidRequestFormProperties {

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateValidRequestFormGroup() {
		return new FormGroup<ValidRequestFormProperties>({
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * 2.1 Send Payments Information Public
		 * The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.
		 * Post api/pub/transactions/{transactionId}/payments
		 * @return {void} 
		 */
		ApiPubTransactions_transactionIdPaymentsPostByOrderId(orderId: string, transactionId: string, requestBody: Array<_2SendPaymentsPublicRequest>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pub/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/payments?orderId=' + (orderId == null ? '' : encodeURIComponent(orderId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Affiliations
		 * Returns all affiliations that your provider can handle.
		 * Get api/pvt/affiliations
		 * @return {void} 
		 */
		ApiPvtAffiliationsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/affiliations', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert Affiliation
		 * Creates a new affiliation and returns a successful response.
		 * Post api/pvt/affiliations
		 * @return {void} 
		 */
		ApiPvtAffiliationsPost(requestBody: InsertAffiliationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/affiliations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Affiliation By Id
		 * Returns associated data for the specified affiliation Id, like name and implementation, for example.
		 * Get api/pvt/affiliations/{affiliationId}
		 * @return {void} 
		 */
		ApiPvtAffiliations_affiliationIdGet(affiliationId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/affiliations/' + (affiliationId == null ? '' : encodeURIComponent(affiliationId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Affiliation
		 * Returns all affiliations.
		 * Put api/pvt/affiliations/{affiliationId}
		 * @return {void} 
		 */
		ApiPvtAffiliations_affiliationIdPut(affiliationId: string, requestBody: UpdateAffiliationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/pvt/affiliations/' + (affiliationId == null ? '' : encodeURIComponent(affiliationId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Installments options
		 * Returns the best installment options according to the informed params.
		 * Get api/pvt/installments
		 * @return {void} 
		 */
		ApiPvtInstallmentsGetByRequest_valueAndRequest_salesChannelAndRequest_paymentDetails_0_idAndRequest_paymentDetails_0_valueAndRequest_paymentDetails_0_bin(request_value: number, request_salesChannel: number | null | undefined, request_paymentDetails_0_id: number | null | undefined, request_paymentDetails_0_value: number | null | undefined, request_paymentDetails_0_bin: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/installments?request_value=' + request_value + '&request_salesChannel=' + request_salesChannel + '&request_paymentDetails_0_id=' + request_paymentDetails_0_id + '&request_paymentDetails_0_value=' + request_paymentDetails_0_value + '&request_paymentDetails_0_bin=' + request_paymentDetails_0_bin, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Available Payment Methods
		 * Returns enabled payment methods, like visa, master, bankissueinvoice that are shown for the final user and enabled to receive payment.
		 * Get api/pvt/merchants/payment-systems
		 * @return {void} 
		 */
		ApiPvtMerchantsPayment_systemsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/merchants/payment-systems', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rules
		 * Returns all rules conditions your provider can handle.
		 * Get api/pvt/rules
		 * @return {void} 
		 */
		ApiPvtRulesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/rules', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert Rule
		 * Creates a new rule and returns a successful response.
		 * Post api/pvt/rules
		 * @return {void} 
		 */
		ApiPvtRulesPost(requestBody: InsertRuleRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/rules', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Rule
		 * Deletes rules by specified Id.
		 * Delete api/pvt/rules/{ruleId}
		 * @return {void} 
		 */
		ApiPvtRules_ruleIdDelete(ruleId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/pvt/rules/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rule By Id
		 * Returns rule by specified RuleId.
		 * Get api/pvt/rules/{ruleId}
		 * @return {void} 
		 */
		ApiPvtRules_ruleIdGet(ruleId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/rules/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rule By Id
		 * Update Rule.
		 * Put api/pvt/rules/{ruleId}
		 * @return {void} 
		 */
		ApiPvtRules_ruleIdPut(ruleId: string, requestBody: RuleByIdRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/pvt/rules/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * 1. Starts a new transaction
		 * This request is the first step to create a new transaction.
		 * Post api/pvt/transactions
		 * @return {void} 
		 */
		ApiPvtTransactionsPost(requestBody: _1CreateanewtransactionRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/transactions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Transaction Details
		 * Returns associated data for the specified transaction id, like value and status, for exemple.
		 * Get api/pvt/transactions/{transactionId}
		 * @return {void} 
		 */
		ApiPvtTransactions_transactionIdGet(transactionId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * 3. Send Additional Data
		 * The third step to create a new transaction. It will send the additional related data to the transaction, like billig and shipping adress.
		 * Post api/pvt/transactions/{transactionId}/additional-data
		 * @param {string} transactionId Transaction identification.
		 * @return {void} OK
		 */
		ApiPvtTransactions_transactionIdAdditional_dataPost(transactionId: string, requestBody: Array<_3SendAdditionalDataRequest>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/additional-data', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Do authorization
		 * The fouth and last step to create a new transaction. It will authorized the new transction creation acorrdint to the data previously informed in the latests requests.
		 * Post api/pvt/transactions/{transactionId}/authorization-request
		 * @return {void} 
		 */
		ApiPvtTransactions_transactionIdAuthorization_requestPost(transactionId: string, requestBody: _4DoauthorizationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/authorization-request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel the transaction
		 * Cancel's transaction that was previously approved, but not settled.
		 * Post api/pvt/transactions/{transactionId}/cancellation-request
		 * @return {void} 
		 */
		ApiPvtTransactions_transactionIdCancellation_requestPost(transactionId: string, requestBody: CancelthetransactionRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/cancellation-request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * 2.2 Send Payments With Saved Credit Card
		 * The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.
		 * Post api/pvt/transactions/{transactionId}/payments
		 * @return {void} 
		 */
		ApiPvtTransactions_transactionIdPaymentsPost(transactionId: string, requestBody: Array<_2SendPaymentsWithSavedCreditCardRequest>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/payments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Payment Details
		 * Returns associated information details for the specified payment id.
		 * Get api/pvt/transactions/{transactionId}/payments/{paymentId}
		 * @return {void} 
		 */
		ApiPvtTransactions_transactionIdPayments_paymentIdGet(transactionId: string, paymentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/payments/' + (paymentId == null ? '' : encodeURIComponent(paymentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Refund the transaction
		 * Refunds transaction's value that was previously settled.
		 * Post api/pvt/transactions/{transactionId}/refunding-request
		 * @return {void} 
		 */
		ApiPvtTransactions_transactionIdRefunding_requestPost(transactionId: string, requestBody: RefundthetransactionRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/refunding-request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Settle the transaction
		 * Settles transaction's value.
		 * Post api/pvt/transactions/{transactionId}/settlement-request
		 * @return {SettleResponse} 
		 */
		ApiPvtTransactions_transactionIdSettlement_requestPost(transactionId: string, requestBody: SettlethetransactionRequest, headersHandler?: () => HttpHeaders): Observable<SettleResponse> {
			return this.http.post<SettleResponse>(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/settlement-request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Transaction Settlement  Details
		 * Returns associated settlements data for the specified transaction id.
		 * Get api/pvt/transactions/{transactionId}/settlements
		 * @return {TransactionSettlementDetails} 
		 */
		ApiPvtTransactions_transactionIdSettlementsGet(transactionId: string, headersHandler?: () => HttpHeaders): Observable<TransactionSettlementDetails> {
			return this.http.get<TransactionSettlementDetails>(this.baseUri + 'api/pvt/transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/settlements', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

