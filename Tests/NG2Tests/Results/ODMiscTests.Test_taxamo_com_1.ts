import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface C {

		/** Date for stats in yyyy-MM-dd format. */
		day?: string | null;

		/** Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		day_raw?: string | null;

		/** Transaction status (C or N). */
		status?: string | null;

		/** Transaction count. */
		value?: number | null;
	}
	export interface CFormProperties {

		/** Date for stats in yyyy-MM-dd format. */
		day: FormControl<string | null | undefined>,

		/** Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		day_raw: FormControl<string | null | undefined>,

		/** Transaction status (C or N). */
		status: FormControl<string | null | undefined>,

		/** Transaction count. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCFormGroup() {
		return new FormGroup<CFormProperties>({
			day: new FormControl<string | null | undefined>(undefined),
			day_raw: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface N {

		/** Date for stats in yyyy-MM-dd format. */
		day?: string | null;

		/** Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		day_raw?: string | null;

		/** Transaction status (C or N). */
		status?: string | null;

		/** Transaction count. */
		value?: number | null;
	}
	export interface NFormProperties {

		/** Date for stats in yyyy-MM-dd format. */
		day: FormControl<string | null | undefined>,

		/** Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		day_raw: FormControl<string | null | undefined>,

		/** Transaction status (C or N). */
		status: FormControl<string | null | undefined>,

		/** Transaction count. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateNFormGroup() {
		return new FormGroup<NFormProperties>({
			day: new FormControl<string | null | undefined>(undefined),
			day_raw: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Additional_currencies {
		invoice?: Additional_currency;
	}
	export interface Additional_currenciesFormProperties {
	}
	export function CreateAdditional_currenciesFormGroup() {
		return new FormGroup<Additional_currenciesFormProperties>({
		});

	}

	export interface Additional_currency {

		/** Amount (w/o TAX) in designated currency. */
		amount?: number | null;

		/** 3-letter ISO currency code. */
		currency_code?: string | null;

		/** Foreign exchange rate used in calculation */
		fx_rate?: number | null;

		/** Tax amount in designated currency. */
		tax_amount?: number | null;

		/** Total amount in designated currency. */
		total_amount?: number | null;
	}
	export interface Additional_currencyFormProperties {

		/** Amount (w/o TAX) in designated currency. */
		amount: FormControl<number | null | undefined>,

		/** 3-letter ISO currency code. */
		currency_code: FormControl<string | null | undefined>,

		/** Foreign exchange rate used in calculation */
		fx_rate: FormControl<number | null | undefined>,

		/** Tax amount in designated currency. */
		tax_amount: FormControl<number | null | undefined>,

		/** Total amount in designated currency. */
		total_amount: FormControl<number | null | undefined>,
	}
	export function CreateAdditional_currencyFormGroup() {
		return new FormGroup<Additional_currencyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			fx_rate: new FormControl<number | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface By_country {

		/** Three-letter ISO currency code. */
		currency_code?: string | null;

		/** Two letter ISO country code. */
		tax_country_code?: string | null;

		/** Country name */
		tax_country_name?: string | null;

		/** Tax amount */
		value?: number | null;
	}
	export interface By_countryFormProperties {

		/** Three-letter ISO currency code. */
		currency_code: FormControl<string | null | undefined>,

		/** Two letter ISO country code. */
		tax_country_code: FormControl<string | null | undefined>,

		/** Country name */
		tax_country_name: FormControl<string | null | undefined>,

		/** Tax amount */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBy_countryFormGroup() {
		return new FormGroup<By_countryFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_country_name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface By_status {

		/** Confirmed transactions */
		C?: Array<C>;

		/** New transactions */
		N?: Array<N>;
	}
	export interface By_statusFormProperties {
	}
	export function CreateBy_statusFormGroup() {
		return new FormGroup<By_statusFormProperties>({
		});

	}

	export interface By_taxation_type {

		/** Number of tax deducted transactions. */
		deducted_count?: number | null;

		/** Total EU B2B transaction count. */
		eu_b2b?: number | null;

		/** Total EU Taxed transaction count. */
		eu_taxed?: number | null;

		/** Number of taxed transactions. */
		taxed_count?: number | null;

		/** Total number of transactions */
		transactions_count?: number | null;
	}
	export interface By_taxation_typeFormProperties {

		/** Number of tax deducted transactions. */
		deducted_count: FormControl<number | null | undefined>,

		/** Total EU B2B transaction count. */
		eu_b2b: FormControl<number | null | undefined>,

		/** Total EU Taxed transaction count. */
		eu_taxed: FormControl<number | null | undefined>,

		/** Number of taxed transactions. */
		taxed_count: FormControl<number | null | undefined>,

		/** Total number of transactions */
		transactions_count: FormControl<number | null | undefined>,
	}
	export function CreateBy_taxation_typeFormGroup() {
		return new FormGroup<By_taxation_typeFormProperties>({
			deducted_count: new FormControl<number | null | undefined>(undefined),
			eu_b2b: new FormControl<number | null | undefined>(undefined),
			eu_taxed: new FormControl<number | null | undefined>(undefined),
			taxed_count: new FormControl<number | null | undefined>(undefined),
			transactions_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalculateSimpleTaxIn {

		/** Amount. Required if total amount or both unit price and quantity are not provided. */
		amount?: number | null;

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix?: string | null;

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number?: string | null;

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: string;

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code?: string | null;

		/** Invoice address/postal_code */
		invoice_address_city?: string | null;

		/** Invoice address/postal_code */
		invoice_address_postal_code?: string | null;

		/** Invoice address/region */
		invoice_address_region?: string | null;

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date?: string | null;

		/** Product type, according to dictionary /dictionaries/product_types. */
		product_type?: string | null;

		/** Quantity Defaults to 1. */
		quantity?: number | null;

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted?: boolean | null;

		/** Total amount. Required if amount or both unit price and quantity are not provided. */
		total_amount?: number | null;

		/** Unit price. */
		unit_price?: number | null;
	}
	export interface CalculateSimpleTaxInFormProperties {

		/** Amount. Required if total amount or both unit price and quantity are not provided. */
		amount: FormControl<number | null | undefined>,

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix: FormControl<string | null | undefined>,

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number: FormControl<string | null | undefined>,

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code: FormControl<string | null | undefined>,

		/** Invoice address/postal_code */
		invoice_address_city: FormControl<string | null | undefined>,

		/** Invoice address/postal_code */
		invoice_address_postal_code: FormControl<string | null | undefined>,

		/** Invoice address/region */
		invoice_address_region: FormControl<string | null | undefined>,

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date: FormControl<string | null | undefined>,

		/** Product type, according to dictionary /dictionaries/product_types. */
		product_type: FormControl<string | null | undefined>,

		/** Quantity Defaults to 1. */
		quantity: FormControl<number | null | undefined>,

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted: FormControl<boolean | null | undefined>,

		/** Total amount. Required if amount or both unit price and quantity are not provided. */
		total_amount: FormControl<number | null | undefined>,

		/** Unit price. */
		unit_price: FormControl<number | null | undefined>,
	}
	export function CreateCalculateSimpleTaxInFormGroup() {
		return new FormGroup<CalculateSimpleTaxInFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_credit_card_prefix: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force_country_code: new FormControl<string | null | undefined>(undefined),
			invoice_address_city: new FormControl<string | null | undefined>(undefined),
			invoice_address_postal_code: new FormControl<string | null | undefined>(undefined),
			invoice_address_region: new FormControl<string | null | undefined>(undefined),
			order_date: new FormControl<string | null | undefined>(undefined),
			product_type: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			tax_deducted: new FormControl<boolean | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalculateSimpleTaxOut {

		/** Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type. */
		storage_required_fields?: Array<Storage_required_fields>;

		/** Fields required for tax calculation. Depends on the region/transaction type. */
		tax_required_fields?: Array<Tax_required_fields>;
		transaction?: Transaction;
	}
	export interface CalculateSimpleTaxOutFormProperties {
	}
	export function CreateCalculateSimpleTaxOutFormGroup() {
		return new FormGroup<CalculateSimpleTaxOutFormProperties>({
		});

	}

	export interface Storage_required_fields {

		/** Required field name. */
		field_name?: string | null;
	}
	export interface Storage_required_fieldsFormProperties {

		/** Required field name. */
		field_name: FormControl<string | null | undefined>,
	}
	export function CreateStorage_required_fieldsFormGroup() {
		return new FormGroup<Storage_required_fieldsFormProperties>({
			field_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tax_required_fields {

		/** Required field name. */
		field_name?: string | null;
	}
	export interface Tax_required_fieldsFormProperties {

		/** Required field name. */
		field_name: FormControl<string | null | undefined>,
	}
	export function CreateTax_required_fieldsFormGroup() {
		return new FormGroup<Tax_required_fieldsFormProperties>({
			field_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transaction {
		additional_currencies?: Additional_currencies;

		/** Amount of transaction without tax. */
		amount?: number | null;

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix?: string | null;

		/** Buyer's declared email address. */
		buyer_email?: string | null;

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip?: string | null;

		/** Buyer's name - first name and last name or company name. */
		buyer_name?: string | null;

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number?: string | null;

		/** If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case. */
		buyer_tax_number_valid?: boolean | null;

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments?: string | null;

		/** Date and time of transaction confirmation. */
		confirm_timestamp?: string | null;
		countries?: Countries;

		/** Date and time of transaction creation. */
		create_timestamp?: string | null;

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: string;

		/** Custom data related to transaction. */
		custom_data?: string | null;

		/** Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers. */
		custom_fields?: Array<Custom_fields>;

		/** Custom identifier provided upon transaction creation. */
		custom_id?: string | null;

		/** Free-form field for storing customer id. */
		customer_id?: string | null;

		/** How much tax has been deducted. */
		deducted_tax_amount?: number | null;

		/** Transaction description. */
		description?: string | null;
		evidence?: Evidence;

		/** Transaction external key */
		external_key?: string | null;

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code?: string | null;

		/** Set to true if transaction has only informative lines. */
		fully_informative?: boolean | null;
		invoice_address?: Invoice_address;

		/** Invoice date of issue. */
		invoice_date?: string | null;

		/** Invoice image URL - provided by Taxamo. */
		invoice_image_url?: string | null;

		/** Invoice number. */
		invoice_number?: string | null;

		/** Invoice place of issue. */
		invoice_place?: string | null;

		/** Id generated by taxamo. */
		key?: string | null;

		/** Transaction kind: eu-b2c, eu-b2b, domestic, untaxed */
		kind?: string | null;

		/** Is the transaction created manually - using private token. In manual mode, it is the merchant who calculates tax country and validates evidence. If you need API to do that when accessing the API with private token, just skip the 'manual' flag or use false value there and provide customer's ip address through buyer_ip field. Manual mode is also used when using original_transaction_key field. */
		manual?: boolean | null;

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note?: string | null;

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date?: string | null;

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key?: string | null;

		/** Refunded tax amount. */
		refunded_tax_amount?: number | null;

		/** Total amount refunde (including tax). */
		refunded_total_amount?: number | null;

		/** Transaction source software - e.g. plugin */
		source?: string | null;

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status?: string | null;

		/** Sub account identifier. */
		sub_account_id?: string | null;

		/** Supply date in yyyy-MM-dd format. */
		supply_date?: string | null;

		/** Tax amount of transaction. */
		tax_amount?: number | null;

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code?: string | null;
		tax_data?: Tax_data_schema;

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted?: boolean | null;

		/** To which entity is the tax due. */
		tax_entity_name?: string | null;

		/** Tax number service identifier - if available for a given region and the region is enabled. */
		tax_number_service?: string | null;

		/** Is tax calculation supported for a detected tax location? */
		tax_supported?: boolean | null;

		/** Timezone name for tax transaction. */
		tax_timezone?: string | null;

		/** Was this transaction created in test mode? */
		test?: boolean | null;

		/** Total amount of transaction. */
		total_amount?: number | null;

		/**
		 * Transaction lines.
		 * Required
		 */
		transaction_lines: Array<Transaction_lines>;

		/** Verification token */
		verification_token?: string | null;
	}
	export interface TransactionFormProperties {

		/** Amount of transaction without tax. */
		amount: FormControl<number | null | undefined>,

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix: FormControl<string | null | undefined>,

		/** Buyer's declared email address. */
		buyer_email: FormControl<string | null | undefined>,

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip: FormControl<string | null | undefined>,

		/** Buyer's name - first name and last name or company name. */
		buyer_name: FormControl<string | null | undefined>,

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number: FormControl<string | null | undefined>,

		/** If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case. */
		buyer_tax_number_valid: FormControl<boolean | null | undefined>,

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments: FormControl<string | null | undefined>,

		/** Date and time of transaction confirmation. */
		confirm_timestamp: FormControl<string | null | undefined>,

		/** Date and time of transaction creation. */
		create_timestamp: FormControl<string | null | undefined>,

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** Custom data related to transaction. */
		custom_data: FormControl<string | null | undefined>,

		/** Custom identifier provided upon transaction creation. */
		custom_id: FormControl<string | null | undefined>,

		/** Free-form field for storing customer id. */
		customer_id: FormControl<string | null | undefined>,

		/** How much tax has been deducted. */
		deducted_tax_amount: FormControl<number | null | undefined>,

		/** Transaction description. */
		description: FormControl<string | null | undefined>,

		/** Transaction external key */
		external_key: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code: FormControl<string | null | undefined>,

		/** Set to true if transaction has only informative lines. */
		fully_informative: FormControl<boolean | null | undefined>,

		/** Invoice date of issue. */
		invoice_date: FormControl<string | null | undefined>,

		/** Invoice image URL - provided by Taxamo. */
		invoice_image_url: FormControl<string | null | undefined>,

		/** Invoice number. */
		invoice_number: FormControl<string | null | undefined>,

		/** Invoice place of issue. */
		invoice_place: FormControl<string | null | undefined>,

		/** Id generated by taxamo. */
		key: FormControl<string | null | undefined>,

		/** Transaction kind: eu-b2c, eu-b2b, domestic, untaxed */
		kind: FormControl<string | null | undefined>,

		/** Is the transaction created manually - using private token. In manual mode, it is the merchant who calculates tax country and validates evidence. If you need API to do that when accessing the API with private token, just skip the 'manual' flag or use false value there and provide customer's ip address through buyer_ip field. Manual mode is also used when using original_transaction_key field. */
		manual: FormControl<boolean | null | undefined>,

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note: FormControl<string | null | undefined>,

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date: FormControl<string | null | undefined>,

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key: FormControl<string | null | undefined>,

		/** Refunded tax amount. */
		refunded_tax_amount: FormControl<number | null | undefined>,

		/** Total amount refunde (including tax). */
		refunded_total_amount: FormControl<number | null | undefined>,

		/** Transaction source software - e.g. plugin */
		source: FormControl<string | null | undefined>,

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status: FormControl<string | null | undefined>,

		/** Sub account identifier. */
		sub_account_id: FormControl<string | null | undefined>,

		/** Supply date in yyyy-MM-dd format. */
		supply_date: FormControl<string | null | undefined>,

		/** Tax amount of transaction. */
		tax_amount: FormControl<number | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code: FormControl<string | null | undefined>,

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted: FormControl<boolean | null | undefined>,

		/** To which entity is the tax due. */
		tax_entity_name: FormControl<string | null | undefined>,

		/** Tax number service identifier - if available for a given region and the region is enabled. */
		tax_number_service: FormControl<string | null | undefined>,

		/** Is tax calculation supported for a detected tax location? */
		tax_supported: FormControl<boolean | null | undefined>,

		/** Timezone name for tax transaction. */
		tax_timezone: FormControl<string | null | undefined>,

		/** Was this transaction created in test mode? */
		test: FormControl<boolean | null | undefined>,

		/** Total amount of transaction. */
		total_amount: FormControl<number | null | undefined>,

		/** Verification token */
		verification_token: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_credit_card_prefix: new FormControl<string | null | undefined>(undefined),
			buyer_email: new FormControl<string | null | undefined>(undefined),
			buyer_ip: new FormControl<string | null | undefined>(undefined),
			buyer_name: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number_valid: new FormControl<boolean | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			confirm_timestamp: new FormControl<string | null | undefined>(undefined),
			create_timestamp: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			custom_data: new FormControl<string | null | undefined>(undefined),
			custom_id: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			deducted_tax_amount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			external_key: new FormControl<string | null | undefined>(undefined),
			force_country_code: new FormControl<string | null | undefined>(undefined),
			fully_informative: new FormControl<boolean | null | undefined>(undefined),
			invoice_date: new FormControl<string | null | undefined>(undefined),
			invoice_image_url: new FormControl<string | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			invoice_place: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			manual: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			order_date: new FormControl<string | null | undefined>(undefined),
			original_transaction_key: new FormControl<string | null | undefined>(undefined),
			refunded_tax_amount: new FormControl<number | null | undefined>(undefined),
			refunded_total_amount: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			sub_account_id: new FormControl<string | null | undefined>(undefined),
			supply_date: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_deducted: new FormControl<boolean | null | undefined>(undefined),
			tax_entity_name: new FormControl<string | null | undefined>(undefined),
			tax_number_service: new FormControl<string | null | undefined>(undefined),
			tax_supported: new FormControl<boolean | null | undefined>(undefined),
			tax_timezone: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			verification_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Countries {
		by_2003_rules?: Country_schema;
		by_billing?: Country_schema;
		by_cc?: Country_schema;
		by_ip?: Country_schema;
		by_tax_number?: Country_schema;
		by_token?: Country_schema;
		detected?: Country_schema;
		forced?: Country_schema;
		guessed_from_ip?: Country_schema;
		other_commercially_relevant_info?: Country_schema;
		self_declaration?: Country_schema;
	}
	export interface CountriesFormProperties {
	}
	export function CreateCountriesFormGroup() {
		return new FormGroup<CountriesFormProperties>({
		});

	}

	export interface Country_schema {

		/** List of phone number calling codes. */
		callingCode?: Array<string>;

		/** Two letter ISO country code. */
		cca2?: string | null;

		/** Three letter ISO country code. */
		cca3?: string | null;

		/** Country ISO 3-digit code. */
		ccn3?: string | null;

		/** Two letter ISO country code. */
		code?: string | null;

		/** Three letter ISO country code. */
		code_long?: string | null;

		/** Country ISO 3-digit code. */
		codenum?: string | null;

		/** List of currencies. */
		currency?: Array<string>;

		/** Country name. */
		name?: string | null;

		/** VAT number country code. Important for Greece. */
		tax_number_country_code?: string | null;

		/** Tax region code - e.g. EU, US, NO, JP... */
		tax_region?: string | null;

		/** True if tax calculation supported for this country. */
		tax_supported?: boolean | null;
	}
	export interface Country_schemaFormProperties {

		/** Two letter ISO country code. */
		cca2: FormControl<string | null | undefined>,

		/** Three letter ISO country code. */
		cca3: FormControl<string | null | undefined>,

		/** Country ISO 3-digit code. */
		ccn3: FormControl<string | null | undefined>,

		/** Two letter ISO country code. */
		code: FormControl<string | null | undefined>,

		/** Three letter ISO country code. */
		code_long: FormControl<string | null | undefined>,

		/** Country ISO 3-digit code. */
		codenum: FormControl<string | null | undefined>,

		/** Country name. */
		name: FormControl<string | null | undefined>,

		/** VAT number country code. Important for Greece. */
		tax_number_country_code: FormControl<string | null | undefined>,

		/** Tax region code - e.g. EU, US, NO, JP... */
		tax_region: FormControl<string | null | undefined>,

		/** True if tax calculation supported for this country. */
		tax_supported: FormControl<boolean | null | undefined>,
	}
	export function CreateCountry_schemaFormGroup() {
		return new FormGroup<Country_schemaFormProperties>({
			cca2: new FormControl<string | null | undefined>(undefined),
			cca3: new FormControl<string | null | undefined>(undefined),
			ccn3: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			code_long: new FormControl<string | null | undefined>(undefined),
			codenum: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tax_number_country_code: new FormControl<string | null | undefined>(undefined),
			tax_region: new FormControl<string | null | undefined>(undefined),
			tax_supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Custom_fields {

		/** Field's key. */
		key?: string | null;

		/** Field's value. */
		value?: string | null;
	}
	export interface Custom_fieldsFormProperties {

		/** Field's key. */
		key: FormControl<string | null | undefined>,

		/** Field's value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustom_fieldsFormGroup() {
		return new FormGroup<Custom_fieldsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Evidence {
		by_2003_rules?: Evidence_schema;
		by_billing?: Evidence_schema;
		by_cc?: Evidence_schema;
		by_ip?: Evidence_schema;
		by_payment_method?: Evidence_schema;
		by_tax_number?: Evidence_schema;
		by_token?: Evidence_schema;
		forced?: Evidence_schema;
		guessed_from_ip?: Evidence_schema;
		other_commercially_relevant_info?: Evidence_schema;
		self_declaration?: Evidence_schema;
	}
	export interface EvidenceFormProperties {
	}
	export function CreateEvidenceFormGroup() {
		return new FormGroup<EvidenceFormProperties>({
		});

	}

	export interface Evidence_schema {

		/** Type of evidence. */
		evidence_type?: string | null;

		/** Value provided as evidence - for example IP address. */
		evidence_value?: string | null;

		/** Country code that was resolved using this evidence. */
		resolved_country_code?: string | null;

		/** If the evidence was used to match the actual country. */
		used?: boolean | null;
	}
	export interface Evidence_schemaFormProperties {

		/** Type of evidence. */
		evidence_type: FormControl<string | null | undefined>,

		/** Value provided as evidence - for example IP address. */
		evidence_value: FormControl<string | null | undefined>,

		/** Country code that was resolved using this evidence. */
		resolved_country_code: FormControl<string | null | undefined>,

		/** If the evidence was used to match the actual country. */
		used: FormControl<boolean | null | undefined>,
	}
	export function CreateEvidence_schemaFormGroup() {
		return new FormGroup<Evidence_schemaFormProperties>({
			evidence_type: new FormControl<string | null | undefined>(undefined),
			evidence_value: new FormControl<string | null | undefined>(undefined),
			resolved_country_code: new FormControl<string | null | undefined>(undefined),
			used: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Invoice_address {

		/** Address details - for example apartament number. */
		address_detail?: string | null;

		/** Building number. */
		building_number?: string | null;

		/** City name. */
		city?: string | null;

		/** 2-letter ISO country code. */
		country?: string | null;

		/** Freeform address. Use when structured data is not available. Will be used in SAF-MOSS file if other fields are not provided. */
		freeform_address?: string | null;

		/** Postal code. */
		postal_code?: string | null;

		/** Region, for United States - state code - e.g. NJ. */
		region?: string | null;

		/** Street name. */
		street_name?: string | null;
	}
	export interface Invoice_addressFormProperties {

		/** Address details - for example apartament number. */
		address_detail: FormControl<string | null | undefined>,

		/** Building number. */
		building_number: FormControl<string | null | undefined>,

		/** City name. */
		city: FormControl<string | null | undefined>,

		/** 2-letter ISO country code. */
		country: FormControl<string | null | undefined>,

		/** Freeform address. Use when structured data is not available. Will be used in SAF-MOSS file if other fields are not provided. */
		freeform_address: FormControl<string | null | undefined>,

		/** Postal code. */
		postal_code: FormControl<string | null | undefined>,

		/** Region, for United States - state code - e.g. NJ. */
		region: FormControl<string | null | undefined>,

		/** Street name. */
		street_name: FormControl<string | null | undefined>,
	}
	export function CreateInvoice_addressFormGroup() {
		return new FormGroup<Invoice_addressFormProperties>({
			address_detail: new FormControl<string | null | undefined>(undefined),
			building_number: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			freeform_address: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tax_data_schema {
		us_tax_exemption_certificate?: Us_tax_exemption_certificate_schema;
	}
	export interface Tax_data_schemaFormProperties {
	}
	export function CreateTax_data_schemaFormGroup() {
		return new FormGroup<Tax_data_schemaFormProperties>({
		});

	}

	export interface Us_tax_exemption_certificate_schema {

		/** The exemption certificate number. */
		certificate_id?: string | null;
		detail?: Us_tax_exemption_certificate_details_schema;
	}
	export interface Us_tax_exemption_certificate_schemaFormProperties {

		/** The exemption certificate number. */
		certificate_id: FormControl<string | null | undefined>,
	}
	export function CreateUs_tax_exemption_certificate_schemaFormGroup() {
		return new FormGroup<Us_tax_exemption_certificate_schemaFormProperties>({
			certificate_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Us_tax_exemption_certificate_details_schema {

		/**
		 * List of states where the certificate is valid.
		 * Required
		 */
		exempt_states: Array<Us_tax_exempt_state>;

		/**
		 * Purchaser's first address line.
		 * Required
		 */
		purchaser_address1: string;

		/** Purchaser's second address line. */
		purchaser_address2?: string | null;

		/**
		 * Purchaser business type.
		 * Required
		 */
		purchaser_business_type: string;

		/** If business type is other, a short description must be provided. */
		purchaser_business_type_other_value?: string | null;

		/**
		 * Purchaser's city.
		 * Required
		 */
		purchaser_city: string;

		/**
		 * The reason for exemption reason.
		 * Required
		 */
		purchaser_exemption_reason: string;

		/**
		 * The value of exemption reason.
		 * Required
		 */
		purchaser_exemption_reason_value: string;

		/**
		 * Purchaser's first name.
		 * Required
		 */
		purchaser_first_name: string;

		/**
		 * Purchaser's last name.
		 * Required
		 */
		purchaser_last_name: string;

		/**
		 * Purchaser's state.
		 * Required
		 */
		purchaser_state: string;

		/** Required */
		purchaser_tax_id: Us_tax_id;

		/** Purchaser's title. */
		purchaser_title?: string | null;

		/**
		 * Purchaser's zip code.
		 * Required
		 */
		purchaser_zip: string;

		/** Set to true if this certificate is valid for single purchase only. */
		single_purchase?: boolean | null;

		/** Purchase/order identifier for single purchase. */
		single_purchase_order_identifier?: string | null;
	}
	export interface Us_tax_exemption_certificate_details_schemaFormProperties {

		/**
		 * Purchaser's first address line.
		 * Required
		 */
		purchaser_address1: FormControl<string | null | undefined>,

		/** Purchaser's second address line. */
		purchaser_address2: FormControl<string | null | undefined>,

		/**
		 * Purchaser business type.
		 * Required
		 */
		purchaser_business_type: FormControl<string | null | undefined>,

		/** If business type is other, a short description must be provided. */
		purchaser_business_type_other_value: FormControl<string | null | undefined>,

		/**
		 * Purchaser's city.
		 * Required
		 */
		purchaser_city: FormControl<string | null | undefined>,

		/**
		 * The reason for exemption reason.
		 * Required
		 */
		purchaser_exemption_reason: FormControl<string | null | undefined>,

		/**
		 * The value of exemption reason.
		 * Required
		 */
		purchaser_exemption_reason_value: FormControl<string | null | undefined>,

		/**
		 * Purchaser's first name.
		 * Required
		 */
		purchaser_first_name: FormControl<string | null | undefined>,

		/**
		 * Purchaser's last name.
		 * Required
		 */
		purchaser_last_name: FormControl<string | null | undefined>,

		/**
		 * Purchaser's state.
		 * Required
		 */
		purchaser_state: FormControl<string | null | undefined>,

		/** Purchaser's title. */
		purchaser_title: FormControl<string | null | undefined>,

		/**
		 * Purchaser's zip code.
		 * Required
		 */
		purchaser_zip: FormControl<string | null | undefined>,

		/** Set to true if this certificate is valid for single purchase only. */
		single_purchase: FormControl<boolean | null | undefined>,

		/** Purchase/order identifier for single purchase. */
		single_purchase_order_identifier: FormControl<string | null | undefined>,
	}
	export function CreateUs_tax_exemption_certificate_details_schemaFormGroup() {
		return new FormGroup<Us_tax_exemption_certificate_details_schemaFormProperties>({
			purchaser_address1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_address2: new FormControl<string | null | undefined>(undefined),
			purchaser_business_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_business_type_other_value: new FormControl<string | null | undefined>(undefined),
			purchaser_city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_exemption_reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_exemption_reason_value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaser_title: new FormControl<string | null | undefined>(undefined),
			purchaser_zip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			single_purchase: new FormControl<boolean | null | undefined>(undefined),
			single_purchase_order_identifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Us_tax_exempt_state {

		/** Identifier for exemption reason. */
		identifier_for_exemption_reason?: string | null;

		/** Exemption reason */
		reason_for_exemption?: string | null;

		/**
		 * Two character state abbreviation.
		 * Required
		 */
		state_abbr: string;
	}
	export interface Us_tax_exempt_stateFormProperties {

		/** Identifier for exemption reason. */
		identifier_for_exemption_reason: FormControl<string | null | undefined>,

		/** Exemption reason */
		reason_for_exemption: FormControl<string | null | undefined>,

		/**
		 * Two character state abbreviation.
		 * Required
		 */
		state_abbr: FormControl<string | null | undefined>,
	}
	export function CreateUs_tax_exempt_stateFormGroup() {
		return new FormGroup<Us_tax_exempt_stateFormProperties>({
			identifier_for_exemption_reason: new FormControl<string | null | undefined>(undefined),
			reason_for_exemption: new FormControl<string | null | undefined>(undefined),
			state_abbr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Us_tax_id {

		/** State of issue */
		state_of_issue?: string | null;

		/** Tax ID */
		tax_id?: string | null;

		/**
		 * Tax id type.
		 * Required
		 */
		tax_id_type: string;
	}
	export interface Us_tax_idFormProperties {

		/** State of issue */
		state_of_issue: FormControl<string | null | undefined>,

		/** Tax ID */
		tax_id: FormControl<string | null | undefined>,

		/**
		 * Tax id type.
		 * Required
		 */
		tax_id_type: FormControl<string | null | undefined>,
	}
	export function CreateUs_tax_idFormGroup() {
		return new FormGroup<Us_tax_idFormProperties>({
			state_of_issue: new FormControl<string | null | undefined>(undefined),
			tax_id: new FormControl<string | null | undefined>(undefined),
			tax_id_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transaction_lines {
		additional_currencies?: Additional_currencies;

		/** Amount. Required if total amount or both unit price and quantity are not provided. */
		amount?: number | null;

		/** Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers. */
		custom_fields?: Array<Custom_fields>;

		/**
		 * Custom id, provided by ecommerce software.
		 * Required
		 */
		custom_id: string;

		/** Deducted tax amount, calculated by taxmo. */
		deducted_tax_amount?: number | null;

		/** Deducted tax rate, calculated by taxamo. */
		deducted_tax_rate?: number | null;

		/** Line contents description. */
		description?: string | null;

		/** Generated id. */
		id?: number | null;

		/** If the line is provided for informative purposes. Such line must have :tax-rate and optionally :tax-name - if not, API validation will fail for this line. */
		informative?: boolean | null;

		/** Generated line key. */
		line_key?: string | null;

		/** Internal product code, used for invoicing for example. */
		product_code?: string | null;

		/** External product tax code for a line, for example TIC in US Sales tax. */
		product_tax_code?: string | null;

		/** Product type, according to dictionary /dictionaries/product_types. */
		product_type?: string | null;

		/** Quantity Defaults to 1. */
		quantity?: number | null;

		/** Refunded tax amount, calculated by taxmo. */
		refunded_tax_amount?: number | null;

		/** Refunded total amount, calculated by taxmo. */
		refunded_total_amount?: number | null;

		/** Date of supply in yyyy-MM-dd format. */
		supply_date?: string | null;

		/** Tax amount, calculated by taxamo. */
		tax_amount?: number | null;

		/** Tax name, calculated by taxamo.  Can be overwritten when informative field is true. */
		tax_name?: string | null;

		/** Tax rate, calculated by taxamo. Must be provided when informative field is true. */
		tax_rate?: number | null;

		/** Total amount. Required if amount or both unit price and quantity are not provided. */
		total_amount?: number | null;

		/** Unit of measure. */
		unit_of_measure?: string | null;

		/** Unit price. */
		unit_price?: number | null;
	}
	export interface Transaction_linesFormProperties {

		/** Amount. Required if total amount or both unit price and quantity are not provided. */
		amount: FormControl<number | null | undefined>,

		/**
		 * Custom id, provided by ecommerce software.
		 * Required
		 */
		custom_id: FormControl<string | null | undefined>,

		/** Deducted tax amount, calculated by taxmo. */
		deducted_tax_amount: FormControl<number | null | undefined>,

		/** Deducted tax rate, calculated by taxamo. */
		deducted_tax_rate: FormControl<number | null | undefined>,

		/** Line contents description. */
		description: FormControl<string | null | undefined>,

		/** Generated id. */
		id: FormControl<number | null | undefined>,

		/** If the line is provided for informative purposes. Such line must have :tax-rate and optionally :tax-name - if not, API validation will fail for this line. */
		informative: FormControl<boolean | null | undefined>,

		/** Generated line key. */
		line_key: FormControl<string | null | undefined>,

		/** Internal product code, used for invoicing for example. */
		product_code: FormControl<string | null | undefined>,

		/** External product tax code for a line, for example TIC in US Sales tax. */
		product_tax_code: FormControl<string | null | undefined>,

		/** Product type, according to dictionary /dictionaries/product_types. */
		product_type: FormControl<string | null | undefined>,

		/** Quantity Defaults to 1. */
		quantity: FormControl<number | null | undefined>,

		/** Refunded tax amount, calculated by taxmo. */
		refunded_tax_amount: FormControl<number | null | undefined>,

		/** Refunded total amount, calculated by taxmo. */
		refunded_total_amount: FormControl<number | null | undefined>,

		/** Date of supply in yyyy-MM-dd format. */
		supply_date: FormControl<string | null | undefined>,

		/** Tax amount, calculated by taxamo. */
		tax_amount: FormControl<number | null | undefined>,

		/** Tax name, calculated by taxamo.  Can be overwritten when informative field is true. */
		tax_name: FormControl<string | null | undefined>,

		/** Tax rate, calculated by taxamo. Must be provided when informative field is true. */
		tax_rate: FormControl<number | null | undefined>,

		/** Total amount. Required if amount or both unit price and quantity are not provided. */
		total_amount: FormControl<number | null | undefined>,

		/** Unit of measure. */
		unit_of_measure: FormControl<string | null | undefined>,

		/** Unit price. */
		unit_price: FormControl<number | null | undefined>,
	}
	export function CreateTransaction_linesFormGroup() {
		return new FormGroup<Transaction_linesFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			custom_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deducted_tax_amount: new FormControl<number | null | undefined>(undefined),
			deducted_tax_rate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			informative: new FormControl<boolean | null | undefined>(undefined),
			line_key: new FormControl<string | null | undefined>(undefined),
			product_code: new FormControl<string | null | undefined>(undefined),
			product_tax_code: new FormControl<string | null | undefined>(undefined),
			product_type: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			refunded_tax_amount: new FormControl<number | null | undefined>(undefined),
			refunded_total_amount: new FormControl<number | null | undefined>(undefined),
			supply_date: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			tax_name: new FormControl<string | null | undefined>(undefined),
			tax_rate: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			unit_of_measure: new FormControl<string | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalculateTaxIn {

		/** Required */
		transaction: Input_transaction;
	}
	export interface CalculateTaxInFormProperties {
	}
	export function CreateCalculateTaxInFormGroup() {
		return new FormGroup<CalculateTaxInFormProperties>({
		});

	}

	export interface Input_transaction {
		additional_currencies?: Additional_currencies;

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix?: string | null;

		/** Buyer's declared email address. */
		buyer_email?: string | null;

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip?: string | null;

		/** Buyer's name - first name and last name or company name. */
		buyer_name?: string | null;

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number?: string | null;

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments?: string | null;

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: string;

		/** Custom data related to transaction. */
		custom_data?: string | null;

		/** Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers. */
		custom_fields?: Array<Custom_fields>;

		/** Custom identifier provided upon transaction creation. */
		custom_id?: string | null;

		/** Free-form field for storing customer id. */
		customer_id?: string | null;

		/** Transaction description. */
		description?: string | null;
		evidence?: Evidence;

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code?: string | null;
		invoice_address?: Invoice_address;

		/** Invoice date of issue. */
		invoice_date?: string | null;

		/** Invoice number. */
		invoice_number?: string | null;

		/** Invoice place of issue. */
		invoice_place?: string | null;

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note?: string | null;

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date?: string | null;

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key?: string | null;

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status?: string | null;

		/** Sub account identifier. */
		sub_account_id?: string | null;

		/** Supply date in yyyy-MM-dd format. */
		supply_date?: string | null;

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code?: string | null;
		tax_data?: Tax_data_schema;

		/** True if the transaction is deducted from tax and no tax is applied (it is untaxed). Either set automatically when VAT number validates with VIES correctly, but can also be provided in manual mode. */
		tax_deducted?: boolean | null;

		/**
		 * Transaction lines.
		 * Required
		 */
		transaction_lines: Array<Input_transaction_line>;

		/** Verification token */
		verification_token?: string | null;
	}
	export interface Input_transactionFormProperties {

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix: FormControl<string | null | undefined>,

		/** Buyer's declared email address. */
		buyer_email: FormControl<string | null | undefined>,

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip: FormControl<string | null | undefined>,

		/** Buyer's name - first name and last name or company name. */
		buyer_name: FormControl<string | null | undefined>,

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number: FormControl<string | null | undefined>,

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments: FormControl<string | null | undefined>,

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** Custom data related to transaction. */
		custom_data: FormControl<string | null | undefined>,

		/** Custom identifier provided upon transaction creation. */
		custom_id: FormControl<string | null | undefined>,

		/** Free-form field for storing customer id. */
		customer_id: FormControl<string | null | undefined>,

		/** Transaction description. */
		description: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code: FormControl<string | null | undefined>,

		/** Invoice date of issue. */
		invoice_date: FormControl<string | null | undefined>,

		/** Invoice number. */
		invoice_number: FormControl<string | null | undefined>,

		/** Invoice place of issue. */
		invoice_place: FormControl<string | null | undefined>,

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note: FormControl<string | null | undefined>,

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date: FormControl<string | null | undefined>,

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key: FormControl<string | null | undefined>,

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status: FormControl<string | null | undefined>,

		/** Sub account identifier. */
		sub_account_id: FormControl<string | null | undefined>,

		/** Supply date in yyyy-MM-dd format. */
		supply_date: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code: FormControl<string | null | undefined>,

		/** True if the transaction is deducted from tax and no tax is applied (it is untaxed). Either set automatically when VAT number validates with VIES correctly, but can also be provided in manual mode. */
		tax_deducted: FormControl<boolean | null | undefined>,

		/** Verification token */
		verification_token: FormControl<string | null | undefined>,
	}
	export function CreateInput_transactionFormGroup() {
		return new FormGroup<Input_transactionFormProperties>({
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_credit_card_prefix: new FormControl<string | null | undefined>(undefined),
			buyer_email: new FormControl<string | null | undefined>(undefined),
			buyer_ip: new FormControl<string | null | undefined>(undefined),
			buyer_name: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number: new FormControl<string | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			custom_data: new FormControl<string | null | undefined>(undefined),
			custom_id: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			force_country_code: new FormControl<string | null | undefined>(undefined),
			invoice_date: new FormControl<string | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			invoice_place: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			order_date: new FormControl<string | null | undefined>(undefined),
			original_transaction_key: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			sub_account_id: new FormControl<string | null | undefined>(undefined),
			supply_date: new FormControl<string | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_deducted: new FormControl<boolean | null | undefined>(undefined),
			verification_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Input_transaction_line {

		/** Amount. Required if total amount or both unit price and quantity are not provided. */
		amount?: number | null;

		/** Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers. */
		custom_fields?: Array<Custom_fields>;

		/**
		 * Custom id, provided by ecommerce software.
		 * Required
		 */
		custom_id: string;

		/** Deducted tax rate, calculated by taxamo. */
		deducted_tax_rate?: number | null;

		/** Line contents description. */
		description?: string | null;

		/** If the line is provided for informative purposes. Such line must have :tax-rate and optionally :tax-name - if not, API validation will fail for this line. */
		informative?: boolean | null;

		/** Generated line key. */
		line_key?: string | null;

		/** Internal product code, used for invoicing for example. */
		product_code?: string | null;

		/** External product tax code for a line, for example TIC in US Sales tax. */
		product_tax_code?: string | null;

		/** Product type, according to dictionary /dictionaries/product_types. */
		product_type?: string | null;

		/** Quantity Defaults to 1. */
		quantity?: number | null;

		/** Date of supply in yyyy-MM-dd format. */
		supply_date?: string | null;

		/** Tax name, calculated by taxamo.  Can be overwritten when informative field is true. */
		tax_name?: string | null;

		/** Tax rate, calculated by taxamo. Must be provided when informative field is true. */
		tax_rate?: number | null;

		/** Total amount. Required if amount or both unit price and quantity are not provided. */
		total_amount?: number | null;

		/** Unit of measure. */
		unit_of_measure?: string | null;

		/** Unit price. */
		unit_price?: number | null;
	}
	export interface Input_transaction_lineFormProperties {

		/** Amount. Required if total amount or both unit price and quantity are not provided. */
		amount: FormControl<number | null | undefined>,

		/**
		 * Custom id, provided by ecommerce software.
		 * Required
		 */
		custom_id: FormControl<string | null | undefined>,

		/** Deducted tax rate, calculated by taxamo. */
		deducted_tax_rate: FormControl<number | null | undefined>,

		/** Line contents description. */
		description: FormControl<string | null | undefined>,

		/** If the line is provided for informative purposes. Such line must have :tax-rate and optionally :tax-name - if not, API validation will fail for this line. */
		informative: FormControl<boolean | null | undefined>,

		/** Generated line key. */
		line_key: FormControl<string | null | undefined>,

		/** Internal product code, used for invoicing for example. */
		product_code: FormControl<string | null | undefined>,

		/** External product tax code for a line, for example TIC in US Sales tax. */
		product_tax_code: FormControl<string | null | undefined>,

		/** Product type, according to dictionary /dictionaries/product_types. */
		product_type: FormControl<string | null | undefined>,

		/** Quantity Defaults to 1. */
		quantity: FormControl<number | null | undefined>,

		/** Date of supply in yyyy-MM-dd format. */
		supply_date: FormControl<string | null | undefined>,

		/** Tax name, calculated by taxamo.  Can be overwritten when informative field is true. */
		tax_name: FormControl<string | null | undefined>,

		/** Tax rate, calculated by taxamo. Must be provided when informative field is true. */
		tax_rate: FormControl<number | null | undefined>,

		/** Total amount. Required if amount or both unit price and quantity are not provided. */
		total_amount: FormControl<number | null | undefined>,

		/** Unit of measure. */
		unit_of_measure: FormControl<string | null | undefined>,

		/** Unit price. */
		unit_price: FormControl<number | null | undefined>,
	}
	export function CreateInput_transaction_lineFormGroup() {
		return new FormGroup<Input_transaction_lineFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			custom_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deducted_tax_rate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			informative: new FormControl<boolean | null | undefined>(undefined),
			line_key: new FormControl<string | null | undefined>(undefined),
			product_code: new FormControl<string | null | undefined>(undefined),
			product_tax_code: new FormControl<string | null | undefined>(undefined),
			product_type: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			supply_date: new FormControl<string | null | undefined>(undefined),
			tax_name: new FormControl<string | null | undefined>(undefined),
			tax_rate: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			unit_of_measure: new FormControl<string | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalculateTaxLocationIn {

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix?: string | null;
	}
	export interface CalculateTaxLocationInFormProperties {

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix: FormControl<string | null | undefined>,
	}
	export function CreateCalculateTaxLocationInFormGroup() {
		return new FormGroup<CalculateTaxLocationInFormProperties>({
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_credit_card_prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalculateTaxLocationOut {

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix?: string | null;

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip?: string | null;
		countries?: Countries;
		evidence?: Evidence;

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code?: string | null;

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted?: boolean | null;

		/** Is tax calculation supported for a detected tax location? */
		tax_supported?: boolean | null;
	}
	export interface CalculateTaxLocationOutFormProperties {

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix: FormControl<string | null | undefined>,

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code: FormControl<string | null | undefined>,

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted: FormControl<boolean | null | undefined>,

		/** Is tax calculation supported for a detected tax location? */
		tax_supported: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateTaxLocationOutFormGroup() {
		return new FormGroup<CalculateTaxLocationOutFormProperties>({
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_credit_card_prefix: new FormControl<string | null | undefined>(undefined),
			buyer_ip: new FormControl<string | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_deducted: new FormControl<boolean | null | undefined>(undefined),
			tax_supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CalculateTaxOut {

		/** Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type. */
		storage_required_fields?: Array<Storage_required_fields>;

		/** Fields required for tax calculation. Depends on the region/transaction type. */
		tax_required_fields?: Array<Tax_required_fields>;
		transaction?: Transaction;
	}
	export interface CalculateTaxOutFormProperties {
	}
	export function CreateCalculateTaxOutFormGroup() {
		return new FormGroup<CalculateTaxOutFormProperties>({
		});

	}

	export interface CancelTransactionOut {

		/** Was operation successful? */
		success?: boolean | null;
	}
	export interface CancelTransactionOutFormProperties {

		/** Was operation successful? */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCancelTransactionOutFormGroup() {
		return new FormGroup<CancelTransactionOutFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CapturePaymentOut {

		/** Was the operation successful? */
		success?: boolean | null;
	}
	export interface CapturePaymentOutFormProperties {

		/** Was the operation successful? */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCapturePaymentOutFormGroup() {
		return new FormGroup<CapturePaymentOutFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ConfirmTransactionIn {
		transaction?: Input_transaction_update;
	}
	export interface ConfirmTransactionInFormProperties {
	}
	export function CreateConfirmTransactionInFormGroup() {
		return new FormGroup<ConfirmTransactionInFormProperties>({
		});

	}

	export interface Input_transaction_update {
		additional_currencies?: Additional_currencies;

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix?: string | null;

		/** Buyer's declared email address. */
		buyer_email?: string | null;

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip?: string | null;

		/** Buyer's name - first name and last name or company name. */
		buyer_name?: string | null;

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number?: string | null;

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments?: string | null;

		/** Currency code for transaction - e.g. EUR. */
		currency_code?: string | null;

		/** Custom data related to transaction. */
		custom_data?: string | null;

		/** Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers. */
		custom_fields?: Array<Custom_fields>;

		/** Custom identifier provided upon transaction creation. */
		custom_id?: string | null;

		/** Free-form field for storing customer id. */
		customer_id?: string | null;

		/** Transaction description. */
		description?: string | null;
		evidence?: Evidence;

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code?: string | null;
		invoice_address?: Invoice_address;

		/** Invoice date of issue. */
		invoice_date?: string | null;

		/** Invoice number. */
		invoice_number?: string | null;

		/** Invoice place of issue. */
		invoice_place?: string | null;

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note?: string | null;

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date?: string | null;

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key?: string | null;

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status?: string | null;

		/** Sub account identifier. */
		sub_account_id?: string | null;

		/** Supply date in yyyy-MM-dd format. */
		supply_date?: string | null;

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code?: string | null;
		tax_data?: Tax_data_schema;

		/** True if the transaction is deducted from tax and no tax is applied (it is untaxed). Either set automatically when VAT number validates with VIES correctly, but can also be provided in manual mode. */
		tax_deducted?: boolean | null;

		/** Transaction lines. */
		transaction_lines?: Array<Input_transaction_line>;

		/** Verification token */
		verification_token?: string | null;
	}
	export interface Input_transaction_updateFormProperties {

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix: FormControl<string | null | undefined>,

		/** Buyer's declared email address. */
		buyer_email: FormControl<string | null | undefined>,

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip: FormControl<string | null | undefined>,

		/** Buyer's name - first name and last name or company name. */
		buyer_name: FormControl<string | null | undefined>,

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number: FormControl<string | null | undefined>,

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments: FormControl<string | null | undefined>,

		/** Currency code for transaction - e.g. EUR. */
		currency_code: FormControl<string | null | undefined>,

		/** Custom data related to transaction. */
		custom_data: FormControl<string | null | undefined>,

		/** Custom identifier provided upon transaction creation. */
		custom_id: FormControl<string | null | undefined>,

		/** Free-form field for storing customer id. */
		customer_id: FormControl<string | null | undefined>,

		/** Transaction description. */
		description: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code: FormControl<string | null | undefined>,

		/** Invoice date of issue. */
		invoice_date: FormControl<string | null | undefined>,

		/** Invoice number. */
		invoice_number: FormControl<string | null | undefined>,

		/** Invoice place of issue. */
		invoice_place: FormControl<string | null | undefined>,

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note: FormControl<string | null | undefined>,

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date: FormControl<string | null | undefined>,

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key: FormControl<string | null | undefined>,

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status: FormControl<string | null | undefined>,

		/** Sub account identifier. */
		sub_account_id: FormControl<string | null | undefined>,

		/** Supply date in yyyy-MM-dd format. */
		supply_date: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code: FormControl<string | null | undefined>,

		/** True if the transaction is deducted from tax and no tax is applied (it is untaxed). Either set automatically when VAT number validates with VIES correctly, but can also be provided in manual mode. */
		tax_deducted: FormControl<boolean | null | undefined>,

		/** Verification token */
		verification_token: FormControl<string | null | undefined>,
	}
	export function CreateInput_transaction_updateFormGroup() {
		return new FormGroup<Input_transaction_updateFormProperties>({
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_credit_card_prefix: new FormControl<string | null | undefined>(undefined),
			buyer_email: new FormControl<string | null | undefined>(undefined),
			buyer_ip: new FormControl<string | null | undefined>(undefined),
			buyer_name: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number: new FormControl<string | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			custom_data: new FormControl<string | null | undefined>(undefined),
			custom_id: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			force_country_code: new FormControl<string | null | undefined>(undefined),
			invoice_date: new FormControl<string | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			invoice_place: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			order_date: new FormControl<string | null | undefined>(undefined),
			original_transaction_key: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			sub_account_id: new FormControl<string | null | undefined>(undefined),
			supply_date: new FormControl<string | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_deducted: new FormControl<boolean | null | undefined>(undefined),
			verification_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfirmTransactionOut {

		/** Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type. */
		storage_required_fields?: Array<Storage_required_fields>;

		/** Fields required for tax calculation. Depends on the region/transaction type. */
		tax_required_fields?: Array<Tax_required_fields>;
		transaction?: Transaction;
	}
	export interface ConfirmTransactionOutFormProperties {
	}
	export function CreateConfirmTransactionOutFormGroup() {
		return new FormGroup<ConfirmTransactionOutFormProperties>({
		});

	}

	export interface Country {

		/** List of phone number calling codes. */
		callingCode?: Array<string>;

		/** Two letter ISO country code. */
		cca2?: string | null;

		/** Three letter ISO country code. */
		cca3?: string | null;

		/** Country ISO 3-digit code. */
		ccn3?: string | null;

		/** Two letter ISO country code. */
		code?: string | null;

		/** Three letter ISO country code. */
		code_long?: string | null;

		/** Country ISO 3-digit code. */
		codenum?: string | null;

		/** List of currencies. */
		currency?: Array<string>;

		/** Country name. */
		name?: string | null;

		/** VAT number country code. Important for Greece. */
		tax_number_country_code?: string | null;

		/** Tax region code - e.g. EU, US, NO, JP... */
		tax_region?: string | null;

		/** True if tax calculation supported for this country. */
		tax_supported?: boolean | null;
	}
	export interface CountryFormProperties {

		/** Two letter ISO country code. */
		cca2: FormControl<string | null | undefined>,

		/** Three letter ISO country code. */
		cca3: FormControl<string | null | undefined>,

		/** Country ISO 3-digit code. */
		ccn3: FormControl<string | null | undefined>,

		/** Two letter ISO country code. */
		code: FormControl<string | null | undefined>,

		/** Three letter ISO country code. */
		code_long: FormControl<string | null | undefined>,

		/** Country ISO 3-digit code. */
		codenum: FormControl<string | null | undefined>,

		/** Country name. */
		name: FormControl<string | null | undefined>,

		/** VAT number country code. Important for Greece. */
		tax_number_country_code: FormControl<string | null | undefined>,

		/** Tax region code - e.g. EU, US, NO, JP... */
		tax_region: FormControl<string | null | undefined>,

		/** True if tax calculation supported for this country. */
		tax_supported: FormControl<boolean | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			cca2: new FormControl<string | null | undefined>(undefined),
			cca3: new FormControl<string | null | undefined>(undefined),
			ccn3: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			code_long: new FormControl<string | null | undefined>(undefined),
			codenum: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tax_number_country_code: new FormControl<string | null | undefined>(undefined),
			tax_region: new FormControl<string | null | undefined>(undefined),
			tax_supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePaymentIn {

		/**
		 * Amount that has been paid. Use negative value to register refunds.
		 * Required
		 */
		amount: number;

		/** Additional payment information. */
		payment_information?: string | null;

		/** When the payment was received in yyyy-MM-dd'T'HH:mm:ss(.SSS)'Z' format (24 hour, UTC timezone). Defaults to current date and time. */
		payment_timestamp?: string | null;
	}
	export interface CreatePaymentInFormProperties {

		/**
		 * Amount that has been paid. Use negative value to register refunds.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/** Additional payment information. */
		payment_information: FormControl<string | null | undefined>,

		/** When the payment was received in yyyy-MM-dd'T'HH:mm:ss(.SSS)'Z' format (24 hour, UTC timezone). Defaults to current date and time. */
		payment_timestamp: FormControl<string | null | undefined>,
	}
	export function CreateCreatePaymentInFormGroup() {
		return new FormGroup<CreatePaymentInFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			payment_information: new FormControl<string | null | undefined>(undefined),
			payment_timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePaymentOut {

		/** Was the operation successful? */
		success?: boolean | null;
	}
	export interface CreatePaymentOutFormProperties {

		/** Was the operation successful? */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePaymentOutFormGroup() {
		return new FormGroup<CreatePaymentOutFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRefundIn {

		/** Amount (without tax) to be refunded. Either amount or total amount is required. In case of line key and custom id missing, only total_amount can be used. */
		amount?: number | null;

		/** Line custom identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order. */
		custom_id?: string | null;

		/** Line identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order. */
		line_key?: string | null;

		/** Refund reason, displayed on the credit note. */
		refund_reason?: string | null;

		/** Total amount, including tax, to be refunded. Either amount or total amount is required. In case of line key and custom id missing, only total_amount can be used. */
		total_amount?: number | null;
	}
	export interface CreateRefundInFormProperties {

		/** Amount (without tax) to be refunded. Either amount or total amount is required. In case of line key and custom id missing, only total_amount can be used. */
		amount: FormControl<number | null | undefined>,

		/** Line custom identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order. */
		custom_id: FormControl<string | null | undefined>,

		/** Line identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order. */
		line_key: FormControl<string | null | undefined>,

		/** Refund reason, displayed on the credit note. */
		refund_reason: FormControl<string | null | undefined>,

		/** Total amount, including tax, to be refunded. Either amount or total amount is required. In case of line key and custom id missing, only total_amount can be used. */
		total_amount: FormControl<number | null | undefined>,
	}
	export function CreateCreateRefundInFormGroup() {
		return new FormGroup<CreateRefundInFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			custom_id: new FormControl<string | null | undefined>(undefined),
			line_key: new FormControl<string | null | undefined>(undefined),
			refund_reason: new FormControl<string | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateRefundOut {

		/** Total tax amount, that was refunded for this line. */
		refunded_tax_amount?: number | null;

		/** Total amount, including tax, that was refunded for this line. */
		refunded_total_amount?: number | null;

		/** Calculated tax amount, that was refunded in this call. */
		tax_amount?: number | null;

		/** Total amount, including tax, that was refunded in this call. */
		total_amount?: number | null;
	}
	export interface CreateRefundOutFormProperties {

		/** Total tax amount, that was refunded for this line. */
		refunded_tax_amount: FormControl<number | null | undefined>,

		/** Total amount, including tax, that was refunded for this line. */
		refunded_total_amount: FormControl<number | null | undefined>,

		/** Calculated tax amount, that was refunded in this call. */
		tax_amount: FormControl<number | null | undefined>,

		/** Total amount, including tax, that was refunded in this call. */
		total_amount: FormControl<number | null | undefined>,
	}
	export function CreateCreateRefundOutFormGroup() {
		return new FormGroup<CreateRefundOutFormProperties>({
			refunded_tax_amount: new FormControl<number | null | undefined>(undefined),
			refunded_total_amount: new FormControl<number | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSMSTokenIn {

		/**
		 * Two letter ISO country code.
		 * Required
		 */
		country_code: string;

		/**
		 * Recipient phone number.
		 * Required
		 */
		recipient: string;
	}
	export interface CreateSMSTokenInFormProperties {

		/**
		 * Two letter ISO country code.
		 * Required
		 */
		country_code: FormControl<string | null | undefined>,

		/**
		 * Recipient phone number.
		 * Required
		 */
		recipient: FormControl<string | null | undefined>,
	}
	export function CreateCreateSMSTokenInFormGroup() {
		return new FormGroup<CreateSMSTokenInFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recipient: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSMSTokenOut {

		/** Always set to true. Success means that the message has been queued for delivery. In some cases message may be undelivered at the end, e.g. mobile number is blacklisted. API errors are signalled with appropriate error codes. */
		success?: boolean | null;
	}
	export interface CreateSMSTokenOutFormProperties {

		/** Always set to true. Success means that the message has been queued for delivery. In some cases message may be undelivered at the end, e.g. mobile number is blacklisted. API errors are signalled with appropriate error codes. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSMSTokenOutFormGroup() {
		return new FormGroup<CreateSMSTokenOutFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateTransactionIn {

		/** Use manual mode, bypassing country detection. Only allowed with private token. This flag allows to use original_transaction_key field */
		manual_mode?: boolean | null;

		/** Required */
		transaction: Input_transaction;
	}
	export interface CreateTransactionInFormProperties {

		/** Use manual mode, bypassing country detection. Only allowed with private token. This flag allows to use original_transaction_key field */
		manual_mode: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTransactionInFormGroup() {
		return new FormGroup<CreateTransactionInFormProperties>({
			manual_mode: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateTransactionOut {

		/** Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type. */
		storage_required_fields?: Array<Storage_required_fields>;

		/** Fields required for tax calculation. Depends on the region/transaction type. */
		tax_required_fields?: Array<Tax_required_fields>;
		transaction?: Transaction;
	}
	export interface CreateTransactionOutFormProperties {
	}
	export function CreateCreateTransactionOutFormGroup() {
		return new FormGroup<CreateTransactionOutFormProperties>({
		});

	}

	export interface Currency_schema {

		/** Currency 3-letter ISO code. */
		code?: string | null;

		/** Currency description. */
		description?: string | null;

		/** Currency 3-letter ISO code. */
		isocode?: string | null;

		/** Currency iso numeric code. */
		isonum?: number | null;

		/** Number of minor units for currency. */
		minorunits?: number | null;
	}
	export interface Currency_schemaFormProperties {

		/** Currency 3-letter ISO code. */
		code: FormControl<string | null | undefined>,

		/** Currency description. */
		description: FormControl<string | null | undefined>,

		/** Currency 3-letter ISO code. */
		isocode: FormControl<string | null | undefined>,

		/** Currency iso numeric code. */
		isonum: FormControl<number | null | undefined>,

		/** Number of minor units for currency. */
		minorunits: FormControl<number | null | undefined>,
	}
	export function CreateCurrency_schemaFormGroup() {
		return new FormGroup<Currency_schemaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isocode: new FormControl<string | null | undefined>(undefined),
			isonum: new FormControl<number | null | undefined>(undefined),
			minorunits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmailInvoiceIn {

		/** Email to send the invoice. If not provided, transaction.buyer_email will be used. */
		buyer_email?: string | null;
	}
	export interface EmailInvoiceInFormProperties {

		/** Email to send the invoice. If not provided, transaction.buyer_email will be used. */
		buyer_email: FormControl<string | null | undefined>,
	}
	export function CreateEmailInvoiceInFormGroup() {
		return new FormGroup<EmailInvoiceInFormProperties>({
			buyer_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailInvoiceOut {

		/** Was operation successful? */
		success?: boolean | null;
	}
	export interface EmailInvoiceOutFormProperties {

		/** Was operation successful? */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailInvoiceOutFormGroup() {
		return new FormGroup<EmailInvoiceOutFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EmailRefundIn {

		/** Email to send the credit note/refund note. If not provided, transaction.buyer_email will be used. */
		buyer_email?: string | null;
	}
	export interface EmailRefundInFormProperties {

		/** Email to send the credit note/refund note. If not provided, transaction.buyer_email will be used. */
		buyer_email: FormControl<string | null | undefined>,
	}
	export function CreateEmailRefundInFormGroup() {
		return new FormGroup<EmailRefundInFormProperties>({
			buyer_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailRefundOut {

		/** Was operation successful? */
		success?: boolean | null;
	}
	export interface EmailRefundOutFormProperties {

		/** Was operation successful? */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailRefundOutFormGroup() {
		return new FormGroup<EmailRefundOutFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetCountriesDictIn {

		/** Should only countries with tax supported be listed? */
		tax_supported?: boolean | null;
	}
	export interface GetCountriesDictInFormProperties {

		/** Should only countries with tax supported be listed? */
		tax_supported: FormControl<boolean | null | undefined>,
	}
	export function CreateGetCountriesDictInFormGroup() {
		return new FormGroup<GetCountriesDictInFormProperties>({
			tax_supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetCountriesDictOut {

		/** Countries dictionary. */
		dictionary?: Array<Country_schema>;
	}
	export interface GetCountriesDictOutFormProperties {
	}
	export function CreateGetCountriesDictOutFormGroup() {
		return new FormGroup<GetCountriesDictOutFormProperties>({
		});

	}

	export interface GetCurrenciesDictOut {

		/** Currency dictionary. */
		dictionary?: Array<Currency_schema>;
	}
	export interface GetCurrenciesDictOutFormProperties {
	}
	export function CreateGetCurrenciesDictOutFormGroup() {
		return new FormGroup<GetCurrenciesDictOutFormProperties>({
		});

	}

	export interface GetDailySettlementStatsIn {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: string;

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: string;

		/**
		 * Interval type - day, week, month.
		 * Required
		 */
		interval: string;
	}
	export interface GetDailySettlementStatsInFormProperties {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: FormControl<string | null | undefined>,

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: FormControl<string | null | undefined>,

		/**
		 * Interval type - day, week, month.
		 * Required
		 */
		interval: FormControl<string | null | undefined>,
	}
	export function CreateGetDailySettlementStatsInFormGroup() {
		return new FormGroup<GetDailySettlementStatsInFormProperties>({
			date_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDailySettlementStatsOut {

		/** Daily settlement stats */
		settlement_daily?: Array<Settlement_daily_stats_schema>;
	}
	export interface GetDailySettlementStatsOutFormProperties {
	}
	export function CreateGetDailySettlementStatsOutFormGroup() {
		return new FormGroup<GetDailySettlementStatsOutFormProperties>({
		});

	}

	export interface Settlement_daily_stats_schema {

		/** B2B transaction count. */
		b2b?: number | null;

		/** B2C transaction count. */
		b2c?: number | null;

		/** Total transaction count. */
		count?: number | null;

		/** Date for stats in yyyy-MM-dd format. */
		day?: string | null;

		/** Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		day_raw?: string | null;

		/** Total EU B2B transaction count. */
		eu_b2b?: number | null;

		/** Total EU Taxed transaction count. */
		eu_taxed?: number | null;

		/** Total EU transaction count. */
		eu_total?: number | null;

		/** Untaxed transaction count. */
		untaxed?: number | null;
	}
	export interface Settlement_daily_stats_schemaFormProperties {

		/** B2B transaction count. */
		b2b: FormControl<number | null | undefined>,

		/** B2C transaction count. */
		b2c: FormControl<number | null | undefined>,

		/** Total transaction count. */
		count: FormControl<number | null | undefined>,

		/** Date for stats in yyyy-MM-dd format. */
		day: FormControl<string | null | undefined>,

		/** Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		day_raw: FormControl<string | null | undefined>,

		/** Total EU B2B transaction count. */
		eu_b2b: FormControl<number | null | undefined>,

		/** Total EU Taxed transaction count. */
		eu_taxed: FormControl<number | null | undefined>,

		/** Total EU transaction count. */
		eu_total: FormControl<number | null | undefined>,

		/** Untaxed transaction count. */
		untaxed: FormControl<number | null | undefined>,
	}
	export function CreateSettlement_daily_stats_schemaFormGroup() {
		return new FormGroup<Settlement_daily_stats_schemaFormProperties>({
			b2b: new FormControl<number | null | undefined>(undefined),
			b2c: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			day: new FormControl<string | null | undefined>(undefined),
			day_raw: new FormControl<string | null | undefined>(undefined),
			eu_b2b: new FormControl<number | null | undefined>(undefined),
			eu_taxed: new FormControl<number | null | undefined>(undefined),
			eu_total: new FormControl<number | null | undefined>(undefined),
			untaxed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDetailedRefundsIn {

		/** Comma separated list of 2-letter country codes */
		country_codes?: string | null;

		/** Take only refunds issued at or after the date. Format: yyyy-MM-dd */
		date_from?: string | null;

		/** Take only refunds issued at or before the date. Format: yyyy-MM-dd */
		date_to?: string | null;

		/** Output format. 'json' or 'csv'. Default value is 'json' */
		format?: string | null;

		/** Limit (no more than 1000, defaults to 100). */
		limit?: number | null;

		/** Offset. Defaults to 0 */
		offset?: number | null;
	}
	export interface GetDetailedRefundsInFormProperties {

		/** Comma separated list of 2-letter country codes */
		country_codes: FormControl<string | null | undefined>,

		/** Take only refunds issued at or after the date. Format: yyyy-MM-dd */
		date_from: FormControl<string | null | undefined>,

		/** Take only refunds issued at or before the date. Format: yyyy-MM-dd */
		date_to: FormControl<string | null | undefined>,

		/** Output format. 'json' or 'csv'. Default value is 'json' */
		format: FormControl<string | null | undefined>,

		/** Limit (no more than 1000, defaults to 100). */
		limit: FormControl<number | null | undefined>,

		/** Offset. Defaults to 0 */
		offset: FormControl<number | null | undefined>,
	}
	export function CreateGetDetailedRefundsInFormGroup() {
		return new FormGroup<GetDetailedRefundsInFormProperties>({
			country_codes: new FormControl<string | null | undefined>(undefined),
			date_from: new FormControl<string | null | undefined>(undefined),
			date_to: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDetailedRefundsOut {

		/** Detailed refunds report */
		report?: Array<Report>;
	}
	export interface GetDetailedRefundsOutFormProperties {
	}
	export function CreateGetDetailedRefundsOutFormGroup() {
		return new FormGroup<GetDetailedRefundsOutFormProperties>({
		});

	}

	export interface Report {

		/** Amount w/o tax */
		amount?: number | null;

		/** Two letter ISO country code. */
		country_code?: string | null;

		/** Country name */
		country_name?: string | null;

		/** Country subdivision (e.g. state or provice or county) */
		country_subdivision?: string | null;

		/** Three-letter ISO currency code. */
		currency_code?: string | null;

		/** If true, this line should not be entered into MOSS and is provided for informative purposes only. For example because the country is the same as MOSS registration country and merchant country. */
		skip_moss?: boolean | null;

		/** Tax amount */
		tax_amount?: number | null;

		/** Tax rate */
		tax_rate?: number | null;

		/** Tax region key */
		tax_region?: string | null;
	}
	export interface ReportFormProperties {

		/** Amount w/o tax */
		amount: FormControl<number | null | undefined>,

		/** Two letter ISO country code. */
		country_code: FormControl<string | null | undefined>,

		/** Country name */
		country_name: FormControl<string | null | undefined>,

		/** Country subdivision (e.g. state or provice or county) */
		country_subdivision: FormControl<string | null | undefined>,

		/** Three-letter ISO currency code. */
		currency_code: FormControl<string | null | undefined>,

		/** If true, this line should not be entered into MOSS and is provided for informative purposes only. For example because the country is the same as MOSS registration country and merchant country. */
		skip_moss: FormControl<boolean | null | undefined>,

		/** Tax amount */
		tax_amount: FormControl<number | null | undefined>,

		/** Tax rate */
		tax_rate: FormControl<number | null | undefined>,

		/** Tax region key */
		tax_region: FormControl<string | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			country_name: new FormControl<string | null | undefined>(undefined),
			country_subdivision: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			skip_moss: new FormControl<boolean | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			tax_rate: new FormControl<number | null | undefined>(undefined),
			tax_region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomesticSummaryReportIn {

		/**
		 * ISO 2-letter country code which will be used for determining which country is domestic.
		 * Required
		 */
		country_code: string;

		/** ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code. */
		currency_code?: string | null;

		/**
		 * Period end month in yyyy-MM format.
		 * Required
		 */
		end_month: string;

		/** Output format. 'xml' and 'csv' values are accepted. Default format - json */
		format?: string | null;

		/** Which date should be used for FX. */
		fx_date_type?: string | null;

		/**
		 * Period start month in yyyy-MM format.
		 * Required
		 */
		start_month: string;
	}
	export interface GetDomesticSummaryReportInFormProperties {

		/**
		 * ISO 2-letter country code which will be used for determining which country is domestic.
		 * Required
		 */
		country_code: FormControl<string | null | undefined>,

		/** ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code. */
		currency_code: FormControl<string | null | undefined>,

		/**
		 * Period end month in yyyy-MM format.
		 * Required
		 */
		end_month: FormControl<string | null | undefined>,

		/** Output format. 'xml' and 'csv' values are accepted. Default format - json */
		format: FormControl<string | null | undefined>,

		/** Which date should be used for FX. */
		fx_date_type: FormControl<string | null | undefined>,

		/**
		 * Period start month in yyyy-MM format.
		 * Required
		 */
		start_month: FormControl<string | null | undefined>,
	}
	export function CreateGetDomesticSummaryReportInFormGroup() {
		return new FormGroup<GetDomesticSummaryReportInFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency_code: new FormControl<string | null | undefined>(undefined),
			end_month: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined),
			fx_date_type: new FormControl<string | null | undefined>(undefined),
			start_month: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDomesticSummaryReportOut {

		/** Three-letter ISO currency code. */
		currency_code?: string | null;

		/** Domestic sales refunds amount. */
		domestic_refunds_amount?: number | null;

		/** Domestic sales refunds tax amout. */
		domestic_refunds_tax_amount?: number | null;

		/** Domestic sales amount. */
		domestic_sales_amount?: number | null;

		/** Domestic sales tax amout. */
		domestic_tax_amount?: number | null;

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date?: string | null;

		/** EU deducted tax sales. */
		eu_tax_deducted_refunds?: number | null;

		/** EU deducted tax sales. */
		eu_tax_deducted_sales?: number | null;

		/** Global sales refunds amount. This includes refunds from domestic country too. */
		global_refunds_amount?: number | null;

		/** Global sales refunds amount. This includes refunds from domestic country too. */
		global_refunds_tax_amount?: number | null;

		/** Global sales amount. This includes sales from domestic country too. */
		global_sales_amount?: number | null;

		/** Global sales amount. This includes sales from domestic country too. */
		global_sales_tax_amount?: number | null;

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date?: string | null;
	}
	export interface GetDomesticSummaryReportOutFormProperties {

		/** Three-letter ISO currency code. */
		currency_code: FormControl<string | null | undefined>,

		/** Domestic sales refunds amount. */
		domestic_refunds_amount: FormControl<number | null | undefined>,

		/** Domestic sales refunds tax amout. */
		domestic_refunds_tax_amount: FormControl<number | null | undefined>,

		/** Domestic sales amount. */
		domestic_sales_amount: FormControl<number | null | undefined>,

		/** Domestic sales tax amout. */
		domestic_tax_amount: FormControl<number | null | undefined>,

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date: FormControl<string | null | undefined>,

		/** EU deducted tax sales. */
		eu_tax_deducted_refunds: FormControl<number | null | undefined>,

		/** EU deducted tax sales. */
		eu_tax_deducted_sales: FormControl<number | null | undefined>,

		/** Global sales refunds amount. This includes refunds from domestic country too. */
		global_refunds_amount: FormControl<number | null | undefined>,

		/** Global sales refunds amount. This includes refunds from domestic country too. */
		global_refunds_tax_amount: FormControl<number | null | undefined>,

		/** Global sales amount. This includes sales from domestic country too. */
		global_sales_amount: FormControl<number | null | undefined>,

		/** Global sales amount. This includes sales from domestic country too. */
		global_sales_tax_amount: FormControl<number | null | undefined>,

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateGetDomesticSummaryReportOutFormGroup() {
		return new FormGroup<GetDomesticSummaryReportOutFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			domestic_refunds_amount: new FormControl<number | null | undefined>(undefined),
			domestic_refunds_tax_amount: new FormControl<number | null | undefined>(undefined),
			domestic_sales_amount: new FormControl<number | null | undefined>(undefined),
			domestic_tax_amount: new FormControl<number | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			eu_tax_deducted_refunds: new FormControl<number | null | undefined>(undefined),
			eu_tax_deducted_sales: new FormControl<number | null | undefined>(undefined),
			global_refunds_amount: new FormControl<number | null | undefined>(undefined),
			global_refunds_tax_amount: new FormControl<number | null | undefined>(undefined),
			global_sales_amount: new FormControl<number | null | undefined>(undefined),
			global_sales_tax_amount: new FormControl<number | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEuViesReportIn {

		/** ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code. */
		currency_code?: string | null;

		/**
		 * Period end month in yyyy-MM format.
		 * Required
		 */
		end_month: string;

		/**
		 * ISO 2-letter country code which will be used for determining which country is domestic.
		 * Required
		 */
		eu_country_code: string;

		/** Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well */
		format?: string | null;

		/** Which date should be used for FX. */
		fx_date_type?: string | null;

		/** Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used. */
		lff_sequence_number?: string | null;

		/** Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested. */
		period_length?: string | null;

		/**
		 * Period start month in yyyy-MM format.
		 * Required
		 */
		start_month: string;

		/** MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. */
		tax_id?: string | null;

		/** Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats. */
		transformation?: string | null;
	}
	export interface GetEuViesReportInFormProperties {

		/** ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code. */
		currency_code: FormControl<string | null | undefined>,

		/**
		 * Period end month in yyyy-MM format.
		 * Required
		 */
		end_month: FormControl<string | null | undefined>,

		/**
		 * ISO 2-letter country code which will be used for determining which country is domestic.
		 * Required
		 */
		eu_country_code: FormControl<string | null | undefined>,

		/** Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well */
		format: FormControl<string | null | undefined>,

		/** Which date should be used for FX. */
		fx_date_type: FormControl<string | null | undefined>,

		/** Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used. */
		lff_sequence_number: FormControl<string | null | undefined>,

		/** Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested. */
		period_length: FormControl<string | null | undefined>,

		/**
		 * Period start month in yyyy-MM format.
		 * Required
		 */
		start_month: FormControl<string | null | undefined>,

		/** MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. */
		tax_id: FormControl<string | null | undefined>,

		/** Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats. */
		transformation: FormControl<string | null | undefined>,
	}
	export function CreateGetEuViesReportInFormGroup() {
		return new FormGroup<GetEuViesReportInFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			end_month: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eu_country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined),
			fx_date_type: new FormControl<string | null | undefined>(undefined),
			lff_sequence_number: new FormControl<string | null | undefined>(undefined),
			period_length: new FormControl<string | null | undefined>(undefined),
			start_month: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tax_id: new FormControl<string | null | undefined>(undefined),
			transformation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEuViesReportOut {

		/** Three-letter ISO currency code. */
		currency_code?: string | null;

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date?: string | null;

		/** Settlement report. */
		report?: Array<Report>;

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date?: string | null;
	}
	export interface GetEuViesReportOutFormProperties {

		/** Three-letter ISO currency code. */
		currency_code: FormControl<string | null | undefined>,

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date: FormControl<string | null | undefined>,

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateGetEuViesReportOutFormGroup() {
		return new FormGroup<GetEuViesReportOutFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetProductTypesDictOut {

		/** Product type dictionary. */
		dictionary?: Array<Product_type_schema>;
	}
	export interface GetProductTypesDictOutFormProperties {
	}
	export function CreateGetProductTypesDictOutFormGroup() {
		return new FormGroup<GetProductTypesDictOutFormProperties>({
		});

	}

	export interface Product_type_schema {

		/** Product type code. */
		code?: string | null;
	}
	export interface Product_type_schemaFormProperties {

		/** Product type code. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateProduct_type_schemaFormGroup() {
		return new FormGroup<Product_type_schemaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRefundsIn {

		/**
		 * Take only refunds issued at or after the date. Format: yyyy-MM-dd
		 * Required
		 */
		date_from: string;

		/** Output format. 'csv' value is accepted as well */
		format?: string | null;

		/** MOSS country code, used to determine currency. If ommited, merchant default setting is used. */
		moss_country_code?: string | null;

		/** Tax region key, defaults to EU for backwards compatibility. */
		tax_region?: string | null;
	}
	export interface GetRefundsInFormProperties {

		/**
		 * Take only refunds issued at or after the date. Format: yyyy-MM-dd
		 * Required
		 */
		date_from: FormControl<string | null | undefined>,

		/** Output format. 'csv' value is accepted as well */
		format: FormControl<string | null | undefined>,

		/** MOSS country code, used to determine currency. If ommited, merchant default setting is used. */
		moss_country_code: FormControl<string | null | undefined>,

		/** Tax region key, defaults to EU for backwards compatibility. */
		tax_region: FormControl<string | null | undefined>,
	}
	export function CreateGetRefundsInFormGroup() {
		return new FormGroup<GetRefundsInFormProperties>({
			date_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined),
			moss_country_code: new FormControl<string | null | undefined>(undefined),
			tax_region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRefundsOut {

		/** Refunds report. */
		report?: Array<Report>;
	}
	export interface GetRefundsOutFormProperties {
	}
	export function CreateGetRefundsOutFormGroup() {
		return new FormGroup<GetRefundsOutFormProperties>({
		});

	}

	export interface GetSettlementIn {

		/** ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code. */
		currency_code?: string | null;

		/** Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		end_month?: string | null;

		/** Output format. 'csv' value is accepted as well */
		format?: string | null;

		/** MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code. */
		moss_country_code?: string | null;

		/** MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id. */
		moss_tax_id?: string | null;

		/** Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting. */
		refund_date_kind_override?: string | null;

		/** Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		start_month?: string | null;

		/** Tax entity country code, used to determine currency/region. */
		tax_country_code?: string | null;

		/** MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id. */
		tax_id?: string | null;
	}
	export interface GetSettlementInFormProperties {

		/** ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code. */
		currency_code: FormControl<string | null | undefined>,

		/** Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		end_month: FormControl<string | null | undefined>,

		/** Output format. 'csv' value is accepted as well */
		format: FormControl<string | null | undefined>,

		/** MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code. */
		moss_country_code: FormControl<string | null | undefined>,

		/** MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id. */
		moss_tax_id: FormControl<string | null | undefined>,

		/** Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting. */
		refund_date_kind_override: FormControl<string | null | undefined>,

		/** Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		start_month: FormControl<string | null | undefined>,

		/** Tax entity country code, used to determine currency/region. */
		tax_country_code: FormControl<string | null | undefined>,

		/** MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id. */
		tax_id: FormControl<string | null | undefined>,
	}
	export function CreateGetSettlementInFormGroup() {
		return new FormGroup<GetSettlementInFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			end_month: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			moss_country_code: new FormControl<string | null | undefined>(undefined),
			moss_tax_id: new FormControl<string | null | undefined>(undefined),
			refund_date_kind_override: new FormControl<string | null | undefined>(undefined),
			start_month: new FormControl<string | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSettlementOut {

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date?: string | null;

		/** Date of ECB FX rate used for conversions in yyyy-MM-dd'T'hh:mm:ss'Z' format. Applies to tax regions where */
		fx_rate_date?: string | null;

		/** If the quarter isn't closed yet, tax amount is indicative, as we cannot determine FX rate or all transactions yet. */
		indicative?: boolean | null;

		/** Settlement report. */
		report?: Array<Report>;

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date?: string | null;
	}
	export interface GetSettlementOutFormProperties {

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date: FormControl<string | null | undefined>,

		/** Date of ECB FX rate used for conversions in yyyy-MM-dd'T'hh:mm:ss'Z' format. Applies to tax regions where */
		fx_rate_date: FormControl<string | null | undefined>,

		/** If the quarter isn't closed yet, tax amount is indicative, as we cannot determine FX rate or all transactions yet. */
		indicative: FormControl<boolean | null | undefined>,

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateGetSettlementOutFormGroup() {
		return new FormGroup<GetSettlementOutFormProperties>({
			end_date: new FormControl<string | null | undefined>(undefined),
			fx_rate_date: new FormControl<string | null | undefined>(undefined),
			indicative: new FormControl<boolean | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSettlementStatsByCountryIn {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: string;

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: string;
	}
	export interface GetSettlementStatsByCountryInFormProperties {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: FormControl<string | null | undefined>,

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: FormControl<string | null | undefined>,
	}
	export function CreateGetSettlementStatsByCountryInFormGroup() {
		return new FormGroup<GetSettlementStatsByCountryInFormProperties>({
			date_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSettlementStatsByCountryOut {

		/** Settlement stats. */
		by_country?: Array<By_country>;
	}
	export interface GetSettlementStatsByCountryOutFormProperties {
	}
	export function CreateGetSettlementStatsByCountryOutFormGroup() {
		return new FormGroup<GetSettlementStatsByCountryOutFormProperties>({
		});

	}

	export interface GetSettlementStatsByTaxationTypeIn {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: string;

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: string;
	}
	export interface GetSettlementStatsByTaxationTypeInFormProperties {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: FormControl<string | null | undefined>,

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: FormControl<string | null | undefined>,
	}
	export function CreateGetSettlementStatsByTaxationTypeInFormGroup() {
		return new FormGroup<GetSettlementStatsByTaxationTypeInFormProperties>({
			date_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSettlementStatsByTaxationTypeOut {
		by_taxation_type?: By_taxation_type;
	}
	export interface GetSettlementStatsByTaxationTypeOutFormProperties {
	}
	export function CreateGetSettlementStatsByTaxationTypeOutFormGroup() {
		return new FormGroup<GetSettlementStatsByTaxationTypeOutFormProperties>({
		});

	}

	export interface GetSettlementSummaryIn {

		/** Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		end_month?: string | null;

		/** MOSS country code, used to determine currency. If ommited, merchant default setting is used. */
		moss_country_code?: string | null;

		/** Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		start_month?: string | null;

		/** Tax region key */
		tax_region?: string | null;
	}
	export interface GetSettlementSummaryInFormProperties {

		/** Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		end_month: FormControl<string | null | undefined>,

		/** MOSS country code, used to determine currency. If ommited, merchant default setting is used. */
		moss_country_code: FormControl<string | null | undefined>,

		/** Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided. */
		start_month: FormControl<string | null | undefined>,

		/** Tax region key */
		tax_region: FormControl<string | null | undefined>,
	}
	export function CreateGetSettlementSummaryInFormGroup() {
		return new FormGroup<GetSettlementSummaryInFormProperties>({
			end_month: new FormControl<string | null | undefined>(undefined),
			moss_country_code: new FormControl<string | null | undefined>(undefined),
			start_month: new FormControl<string | null | undefined>(undefined),
			tax_region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSettlementSummaryOut {
		summary?: Summary;
	}
	export interface GetSettlementSummaryOutFormProperties {
	}
	export function CreateGetSettlementSummaryOutFormGroup() {
		return new FormGroup<GetSettlementSummaryOutFormProperties>({
		});

	}

	export interface Summary {

		/** In which currency code the settlement was calculated. */
		currency_code?: string | null;

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date?: string | null;

		/** Date of ECB FX rate used for conversions in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		fx_rate_date?: string | null;

		/** If the quarter isn't closed yet, tax amount is indicative, as we cannot determine FX rate or all transactions yet. */
		indicative?: boolean | null;

		/** Quarter that this summary applies to. */
		quarter?: string | null;

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date?: string | null;

		/** Tax amount due in this quarter. */
		tax_amount?: number | null;

		/** Tax entity that the tax is due. */
		tax_entity_name?: string | null;
	}
	export interface SummaryFormProperties {

		/** In which currency code the settlement was calculated. */
		currency_code: FormControl<string | null | undefined>,

		/** Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		end_date: FormControl<string | null | undefined>,

		/** Date of ECB FX rate used for conversions in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		fx_rate_date: FormControl<string | null | undefined>,

		/** If the quarter isn't closed yet, tax amount is indicative, as we cannot determine FX rate or all transactions yet. */
		indicative: FormControl<boolean | null | undefined>,

		/** Quarter that this summary applies to. */
		quarter: FormControl<string | null | undefined>,

		/** Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format. */
		start_date: FormControl<string | null | undefined>,

		/** Tax amount due in this quarter. */
		tax_amount: FormControl<number | null | undefined>,

		/** Tax entity that the tax is due. */
		tax_entity_name: FormControl<string | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			fx_rate_date: new FormControl<string | null | undefined>(undefined),
			indicative: new FormControl<boolean | null | undefined>(undefined),
			quarter: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			tax_entity_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionOut {

		/** Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type. */
		storage_required_fields?: Array<Storage_required_fields>;

		/** Fields required for tax calculation. Depends on the region/transaction type. */
		tax_required_fields?: Array<Tax_required_fields>;
		transaction?: Transaction;
	}
	export interface GetTransactionOutFormProperties {
	}
	export function CreateGetTransactionOutFormGroup() {
		return new FormGroup<GetTransactionOutFormProperties>({
		});

	}

	export interface GetTransactionsStatsByCountryIn {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: string;

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: string;

		/** Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB. */
		global_currency_code?: string | null;
	}
	export interface GetTransactionsStatsByCountryInFormProperties {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: FormControl<string | null | undefined>,

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: FormControl<string | null | undefined>,

		/** Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB. */
		global_currency_code: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsStatsByCountryInFormGroup() {
		return new FormGroup<GetTransactionsStatsByCountryInFormProperties>({
			date_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			global_currency_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsStatsByCountryOut {

		/** Settlement stats. */
		by_country?: Array<By_country>;
	}
	export interface GetTransactionsStatsByCountryOutFormProperties {
	}
	export function CreateGetTransactionsStatsByCountryOutFormGroup() {
		return new FormGroup<GetTransactionsStatsByCountryOutFormProperties>({
		});

	}

	export interface GetTransactionsStatsIn {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: string;

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: string;

		/** Interval. Accepted values are 'day', 'week' and 'month'. */
		interval?: string | null;
	}
	export interface GetTransactionsStatsInFormProperties {

		/**
		 * Date from in yyyy-MM format.
		 * Required
		 */
		date_from: FormControl<string | null | undefined>,

		/**
		 * Date to in yyyy-MM format.
		 * Required
		 */
		date_to: FormControl<string | null | undefined>,

		/** Interval. Accepted values are 'day', 'week' and 'month'. */
		interval: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsStatsInFormGroup() {
		return new FormGroup<GetTransactionsStatsInFormProperties>({
			date_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interval: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionsStatsOut {
		by_status?: By_status;
	}
	export interface GetTransactionsStatsOutFormProperties {
	}
	export function CreateGetTransactionsStatsOutFormGroup() {
		return new FormGroup<GetTransactionsStatsOutFormProperties>({
		});

	}

	export interface ListPaymentsIn {

		/** Max record count (no more than 100, defaults to 10). */
		limit?: string | null;

		/** How many records need to be skipped, defaults to 0. */
		offset?: string | null;
	}
	export interface ListPaymentsInFormProperties {

		/** Max record count (no more than 100, defaults to 10). */
		limit: FormControl<string | null | undefined>,

		/** How many records need to be skipped, defaults to 0. */
		offset: FormControl<string | null | undefined>,
	}
	export function CreateListPaymentsInFormGroup() {
		return new FormGroup<ListPaymentsInFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPaymentsOut {

		/** Payments. */
		payments?: Array<Payments>;
	}
	export interface ListPaymentsOutFormProperties {
	}
	export function CreateListPaymentsOutFormGroup() {
		return new FormGroup<ListPaymentsOutFormProperties>({
		});

	}

	export interface Payments {

		/** Amount that has been paid. Use negative value to register refunds. */
		amount?: number | null;

		/** Additional payment information. */
		payment_information?: string | null;

		/** When the payment was received in yyyy-MM-dd HH:mm:ss (24 hour format, UTC+0 timezone). */
		payment_timestamp?: string | null;
	}
	export interface PaymentsFormProperties {

		/** Amount that has been paid. Use negative value to register refunds. */
		amount: FormControl<number | null | undefined>,

		/** Additional payment information. */
		payment_information: FormControl<string | null | undefined>,

		/** When the payment was received in yyyy-MM-dd HH:mm:ss (24 hour format, UTC+0 timezone). */
		payment_timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsFormGroup() {
		return new FormGroup<PaymentsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			payment_information: new FormControl<string | null | undefined>(undefined),
			payment_timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRefundsOut {

		/** Refunds */
		refunds?: Array<Refunds>;
	}
	export interface ListRefundsOutFormProperties {
	}
	export function CreateListRefundsOutFormGroup() {
		return new FormGroup<ListRefundsOutFormProperties>({
		});

	}

	export interface Refunds {

		/** Amount, excluding tax, that was refunded. */
		amount?: number | null;

		/** Was this refund applied to an informative line? */
		informative?: boolean | null;

		/** Line identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order. */
		line_key?: string | null;

		/** Sequential refund note number. */
		refund_note_number?: string | null;

		/** Refund note image url. */
		refund_note_url?: string | null;

		/** Refund reason, displayed on the credit note. */
		refund_reason?: string | null;

		/** Refund timestamp in UTC timezone. */
		refund_timestamp?: string | null;

		/** Calculated tax amount, that was refunded. */
		tax_amount?: number | null;

		/** Tax rate for the line that was used for the refund calculation. */
		tax_rate?: number | null;

		/** Total amount, including tax, that was refunded. */
		total_amount?: number | null;
	}
	export interface RefundsFormProperties {

		/** Amount, excluding tax, that was refunded. */
		amount: FormControl<number | null | undefined>,

		/** Was this refund applied to an informative line? */
		informative: FormControl<boolean | null | undefined>,

		/** Line identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order. */
		line_key: FormControl<string | null | undefined>,

		/** Sequential refund note number. */
		refund_note_number: FormControl<string | null | undefined>,

		/** Refund note image url. */
		refund_note_url: FormControl<string | null | undefined>,

		/** Refund reason, displayed on the credit note. */
		refund_reason: FormControl<string | null | undefined>,

		/** Refund timestamp in UTC timezone. */
		refund_timestamp: FormControl<string | null | undefined>,

		/** Calculated tax amount, that was refunded. */
		tax_amount: FormControl<number | null | undefined>,

		/** Tax rate for the line that was used for the refund calculation. */
		tax_rate: FormControl<number | null | undefined>,

		/** Total amount, including tax, that was refunded. */
		total_amount: FormControl<number | null | undefined>,
	}
	export function CreateRefundsFormGroup() {
		return new FormGroup<RefundsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			informative: new FormControl<boolean | null | undefined>(undefined),
			line_key: new FormControl<string | null | undefined>(undefined),
			refund_note_number: new FormControl<string | null | undefined>(undefined),
			refund_note_url: new FormControl<string | null | undefined>(undefined),
			refund_reason: new FormControl<string | null | undefined>(undefined),
			refund_timestamp: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			tax_rate: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTransactionsIn {

		/** Three letter ISO currency code. */
		currency_code?: string | null;

		/** Filtering expression */
		filter_text?: string | null;

		/** Output format - supports 'csv' value for this operation. */
		format?: string | null;

		/** Return only transactions with a note field set. */
		has_note?: boolean | null;

		/** Transaction invoice number. */
		invoice_number?: string | null;

		/** Taxamo provided transaction key or custom id */
		key_or_custom_id?: string | null;

		/** Limit (no more than 1000, defaults to 100). */
		limit?: number | null;

		/** Offset */
		offset?: number | null;

		/** Order date from in yyyy-MM-dd format. */
		order_date_from?: string | null;

		/** Order date to in yyyy-MM-dd format. */
		order_date_to?: string | null;

		/** Taxamo provided original transaction key */
		original_transaction_key?: string | null;

		/** If true, results are sorted in descending order. */
		sort_reverse?: boolean | null;

		/** Comma separated list of of transaction statuses. 'N' - unconfirmed transaction, 'C' - confirmed transaction. */
		statuses?: string | null;

		/** Two letter ISO tax country code. */
		tax_country_code?: string | null;

		/** Comma separated list of two letter ISO tax country codes. */
		tax_country_codes?: string | null;

		/** Return only transactions with total amount greater than given number. Transactions with total amount equal to a given number (e.g. 0) are not returned. */
		total_amount_greater_than?: string | null;

		/** Return only transactions with total amount less than a given number. Transactions with total amount equal to a given number (e.g. 1) are not returned. */
		total_amount_less_than?: string | null;
	}
	export interface ListTransactionsInFormProperties {

		/** Three letter ISO currency code. */
		currency_code: FormControl<string | null | undefined>,

		/** Filtering expression */
		filter_text: FormControl<string | null | undefined>,

		/** Output format - supports 'csv' value for this operation. */
		format: FormControl<string | null | undefined>,

		/** Return only transactions with a note field set. */
		has_note: FormControl<boolean | null | undefined>,

		/** Transaction invoice number. */
		invoice_number: FormControl<string | null | undefined>,

		/** Taxamo provided transaction key or custom id */
		key_or_custom_id: FormControl<string | null | undefined>,

		/** Limit (no more than 1000, defaults to 100). */
		limit: FormControl<number | null | undefined>,

		/** Offset */
		offset: FormControl<number | null | undefined>,

		/** Order date from in yyyy-MM-dd format. */
		order_date_from: FormControl<string | null | undefined>,

		/** Order date to in yyyy-MM-dd format. */
		order_date_to: FormControl<string | null | undefined>,

		/** Taxamo provided original transaction key */
		original_transaction_key: FormControl<string | null | undefined>,

		/** If true, results are sorted in descending order. */
		sort_reverse: FormControl<boolean | null | undefined>,

		/** Comma separated list of of transaction statuses. 'N' - unconfirmed transaction, 'C' - confirmed transaction. */
		statuses: FormControl<string | null | undefined>,

		/** Two letter ISO tax country code. */
		tax_country_code: FormControl<string | null | undefined>,

		/** Comma separated list of two letter ISO tax country codes. */
		tax_country_codes: FormControl<string | null | undefined>,

		/** Return only transactions with total amount greater than given number. Transactions with total amount equal to a given number (e.g. 0) are not returned. */
		total_amount_greater_than: FormControl<string | null | undefined>,

		/** Return only transactions with total amount less than a given number. Transactions with total amount equal to a given number (e.g. 1) are not returned. */
		total_amount_less_than: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionsInFormGroup() {
		return new FormGroup<ListTransactionsInFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			filter_text: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			has_note: new FormControl<boolean | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			key_or_custom_id: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			order_date_from: new FormControl<string | null | undefined>(undefined),
			order_date_to: new FormControl<string | null | undefined>(undefined),
			original_transaction_key: new FormControl<string | null | undefined>(undefined),
			sort_reverse: new FormControl<boolean | null | undefined>(undefined),
			statuses: new FormControl<string | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_country_codes: new FormControl<string | null | undefined>(undefined),
			total_amount_greater_than: new FormControl<string | null | undefined>(undefined),
			total_amount_less_than: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTransactionsOut {

		/** Transactions matching the criteria. */
		transactions?: Array<Transactions>;
	}
	export interface ListTransactionsOutFormProperties {
	}
	export function CreateListTransactionsOutFormGroup() {
		return new FormGroup<ListTransactionsOutFormProperties>({
		});

	}

	export interface Transactions {
		additional_currencies?: Additional_currencies;

		/** Amount of transaction without tax. */
		amount?: number | null;

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix?: string | null;

		/** Buyer's declared email address. */
		buyer_email?: string | null;

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip?: string | null;

		/** Buyer's name - first name and last name or company name. */
		buyer_name?: string | null;

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number?: string | null;

		/** If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case. */
		buyer_tax_number_valid?: boolean | null;

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments?: string | null;

		/** Date and time of transaction confirmation. */
		confirm_timestamp?: string | null;
		countries?: Countries;

		/** Date and time of transaction creation. */
		create_timestamp?: string | null;

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: string;

		/** Custom data related to transaction. */
		custom_data?: string | null;

		/** Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers. */
		custom_fields?: Array<Custom_fields>;

		/** Custom identifier provided upon transaction creation. */
		custom_id?: string | null;

		/** Free-form field for storing customer id. */
		customer_id?: string | null;

		/** How much tax has been deducted. */
		deducted_tax_amount?: number | null;

		/** Transaction description. */
		description?: string | null;
		evidence?: Evidence;

		/** Transaction external key */
		external_key?: string | null;

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code?: string | null;

		/** Set to true if transaction has only informative lines. */
		fully_informative?: boolean | null;
		invoice_address?: Invoice_address;

		/** Invoice date of issue. */
		invoice_date?: string | null;

		/** Invoice image URL - provided by Taxamo. */
		invoice_image_url?: string | null;

		/** Invoice number. */
		invoice_number?: string | null;

		/** Invoice place of issue. */
		invoice_place?: string | null;

		/** Id generated by taxamo. */
		key?: string | null;

		/** Transaction kind: eu-b2c, eu-b2b, domestic, untaxed */
		kind?: string | null;

		/** Is the transaction created manually - using private token. In manual mode, it is the merchant who calculates tax country and validates evidence. If you need API to do that when accessing the API with private token, just skip the 'manual' flag or use false value there and provide customer's ip address through buyer_ip field. Manual mode is also used when using original_transaction_key field. */
		manual?: boolean | null;

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note?: string | null;

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date?: string | null;

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key?: string | null;

		/** Refunded tax amount. */
		refunded_tax_amount?: number | null;

		/** Total amount refunde (including tax). */
		refunded_total_amount?: number | null;

		/** Transaction source software - e.g. plugin */
		source?: string | null;

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status?: string | null;

		/** Sub account identifier. */
		sub_account_id?: string | null;

		/** Supply date in yyyy-MM-dd format. */
		supply_date?: string | null;

		/** Tax amount of transaction. */
		tax_amount?: number | null;

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code?: string | null;
		tax_data?: Tax_data_schema;

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted?: boolean | null;

		/** To which entity is the tax due. */
		tax_entity_name?: string | null;

		/** Tax number service identifier - if available for a given region and the region is enabled. */
		tax_number_service?: string | null;

		/** Is tax calculation supported for a detected tax location? */
		tax_supported?: boolean | null;

		/** Timezone name for tax transaction. */
		tax_timezone?: string | null;

		/** Was this transaction created in test mode? */
		test?: boolean | null;

		/** Total amount of transaction. */
		total_amount?: number | null;

		/**
		 * Transaction lines.
		 * Required
		 */
		transaction_lines: Array<Transaction_lines>;

		/** Verification token */
		verification_token?: string | null;
	}
	export interface TransactionsFormProperties {

		/** Amount of transaction without tax. */
		amount: FormControl<number | null | undefined>,

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** First 6 digits of buyer's credit card prefix. */
		buyer_credit_card_prefix: FormControl<string | null | undefined>,

		/** Buyer's declared email address. */
		buyer_email: FormControl<string | null | undefined>,

		/** IP address of the buyer in dotted decimal (IPv4) or text format (IPv6). */
		buyer_ip: FormControl<string | null | undefined>,

		/** Buyer's name - first name and last name or company name. */
		buyer_name: FormControl<string | null | undefined>,

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number: FormControl<string | null | undefined>,

		/** If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case. */
		buyer_tax_number_valid: FormControl<boolean | null | undefined>,

		/** Additional information about the transaction - for example if the evidence has been amended. */
		comments: FormControl<string | null | undefined>,

		/** Date and time of transaction confirmation. */
		confirm_timestamp: FormControl<string | null | undefined>,

		/** Date and time of transaction creation. */
		create_timestamp: FormControl<string | null | undefined>,

		/**
		 * Currency code for transaction - e.g. EUR.
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** Custom data related to transaction. */
		custom_data: FormControl<string | null | undefined>,

		/** Custom identifier provided upon transaction creation. */
		custom_id: FormControl<string | null | undefined>,

		/** Free-form field for storing customer id. */
		customer_id: FormControl<string | null | undefined>,

		/** How much tax has been deducted. */
		deducted_tax_amount: FormControl<number | null | undefined>,

		/** Transaction description. */
		description: FormControl<string | null | undefined>,

		/** Transaction external key */
		external_key: FormControl<string | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation. */
		force_country_code: FormControl<string | null | undefined>,

		/** Set to true if transaction has only informative lines. */
		fully_informative: FormControl<boolean | null | undefined>,

		/** Invoice date of issue. */
		invoice_date: FormControl<string | null | undefined>,

		/** Invoice image URL - provided by Taxamo. */
		invoice_image_url: FormControl<string | null | undefined>,

		/** Invoice number. */
		invoice_number: FormControl<string | null | undefined>,

		/** Invoice place of issue. */
		invoice_place: FormControl<string | null | undefined>,

		/** Id generated by taxamo. */
		key: FormControl<string | null | undefined>,

		/** Transaction kind: eu-b2c, eu-b2b, domestic, untaxed */
		kind: FormControl<string | null | undefined>,

		/** Is the transaction created manually - using private token. In manual mode, it is the merchant who calculates tax country and validates evidence. If you need API to do that when accessing the API with private token, just skip the 'manual' flag or use false value there and provide customer's ip address through buyer_ip field. Manual mode is also used when using original_transaction_key field. */
		manual: FormControl<boolean | null | undefined>,

		/** Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed. */
		note: FormControl<string | null | undefined>,

		/** Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used. */
		order_date: FormControl<string | null | undefined>,

		/** Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised. */
		original_transaction_key: FormControl<string | null | undefined>,

		/** Refunded tax amount. */
		refunded_tax_amount: FormControl<number | null | undefined>,

		/** Total amount refunde (including tax). */
		refunded_total_amount: FormControl<number | null | undefined>,

		/** Transaction source software - e.g. plugin */
		source: FormControl<string | null | undefined>,

		/** Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!. */
		status: FormControl<string | null | undefined>,

		/** Sub account identifier. */
		sub_account_id: FormControl<string | null | undefined>,

		/** Supply date in yyyy-MM-dd format. */
		supply_date: FormControl<string | null | undefined>,

		/** Tax amount of transaction. */
		tax_amount: FormControl<number | null | undefined>,

		/** Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode. */
		tax_country_code: FormControl<string | null | undefined>,

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted: FormControl<boolean | null | undefined>,

		/** To which entity is the tax due. */
		tax_entity_name: FormControl<string | null | undefined>,

		/** Tax number service identifier - if available for a given region and the region is enabled. */
		tax_number_service: FormControl<string | null | undefined>,

		/** Is tax calculation supported for a detected tax location? */
		tax_supported: FormControl<boolean | null | undefined>,

		/** Timezone name for tax transaction. */
		tax_timezone: FormControl<string | null | undefined>,

		/** Was this transaction created in test mode? */
		test: FormControl<boolean | null | undefined>,

		/** Total amount of transaction. */
		total_amount: FormControl<number | null | undefined>,

		/** Verification token */
		verification_token: FormControl<string | null | undefined>,
	}
	export function CreateTransactionsFormGroup() {
		return new FormGroup<TransactionsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_credit_card_prefix: new FormControl<string | null | undefined>(undefined),
			buyer_email: new FormControl<string | null | undefined>(undefined),
			buyer_ip: new FormControl<string | null | undefined>(undefined),
			buyer_name: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number_valid: new FormControl<boolean | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			confirm_timestamp: new FormControl<string | null | undefined>(undefined),
			create_timestamp: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			custom_data: new FormControl<string | null | undefined>(undefined),
			custom_id: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			deducted_tax_amount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			external_key: new FormControl<string | null | undefined>(undefined),
			force_country_code: new FormControl<string | null | undefined>(undefined),
			fully_informative: new FormControl<boolean | null | undefined>(undefined),
			invoice_date: new FormControl<string | null | undefined>(undefined),
			invoice_image_url: new FormControl<string | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			invoice_place: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			manual: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			order_date: new FormControl<string | null | undefined>(undefined),
			original_transaction_key: new FormControl<string | null | undefined>(undefined),
			refunded_tax_amount: new FormControl<number | null | undefined>(undefined),
			refunded_total_amount: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			sub_account_id: new FormControl<string | null | undefined>(undefined),
			supply_date: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			tax_country_code: new FormControl<string | null | undefined>(undefined),
			tax_deducted: new FormControl<boolean | null | undefined>(undefined),
			tax_entity_name: new FormControl<string | null | undefined>(undefined),
			tax_number_service: new FormControl<string | null | undefined>(undefined),
			tax_supported: new FormControl<boolean | null | undefined>(undefined),
			tax_timezone: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			verification_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocateGivenIPOut {
		country?: Country;

		/** Detected country code. */
		country_code?: string | null;

		/** Remote IP address. */
		remote_addr?: string | null;
	}
	export interface LocateGivenIPOutFormProperties {

		/** Detected country code. */
		country_code: FormControl<string | null | undefined>,

		/** Remote IP address. */
		remote_addr: FormControl<string | null | undefined>,
	}
	export function CreateLocateGivenIPOutFormGroup() {
		return new FormGroup<LocateGivenIPOutFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined),
			remote_addr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocateMyIPOut {
		country?: Country;

		/** Detected country code. */
		country_code?: string | null;

		/** Remote IP address. */
		remote_addr?: string | null;
	}
	export interface LocateMyIPOutFormProperties {

		/** Detected country code. */
		country_code: FormControl<string | null | undefined>,

		/** Remote IP address. */
		remote_addr: FormControl<string | null | undefined>,
	}
	export function CreateLocateMyIPOutFormGroup() {
		return new FormGroup<LocateMyIPOutFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined),
			remote_addr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnconfirmTransactionIn {
		transaction?: Input_transaction_update;
	}
	export interface UnconfirmTransactionInFormProperties {
	}
	export function CreateUnconfirmTransactionInFormGroup() {
		return new FormGroup<UnconfirmTransactionInFormProperties>({
		});

	}

	export interface UnconfirmTransactionOut {

		/** Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type. */
		storage_required_fields?: Array<Storage_required_fields>;

		/** Fields required for tax calculation. Depends on the region/transaction type. */
		tax_required_fields?: Array<Tax_required_fields>;
		transaction?: Transaction;
	}
	export interface UnconfirmTransactionOutFormProperties {
	}
	export function CreateUnconfirmTransactionOutFormGroup() {
		return new FormGroup<UnconfirmTransactionOutFormProperties>({
		});

	}

	export interface UpdateTransactionIn {
		transaction?: Transaction;
	}
	export interface UpdateTransactionInFormProperties {
	}
	export function CreateUpdateTransactionInFormGroup() {
		return new FormGroup<UpdateTransactionInFormProperties>({
		});

	}

	export interface UpdateTransactionOut {

		/** Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type. */
		storage_required_fields?: Array<Storage_required_fields>;

		/** Fields required for tax calculation. Depends on the region/transaction type. */
		tax_required_fields?: Array<Tax_required_fields>;
		transaction?: Transaction;
	}
	export interface UpdateTransactionOutFormProperties {
	}
	export function CreateUpdateTransactionOutFormGroup() {
		return new FormGroup<UpdateTransactionOutFormProperties>({
		});

	}

	export interface ValidateTaxNumberIn {

		/** Two-letter ISO country code. */
		country_code?: string | null;
	}
	export interface ValidateTaxNumberInFormProperties {

		/** Two-letter ISO country code. */
		country_code: FormControl<string | null | undefined>,
	}
	export function CreateValidateTaxNumberInFormGroup() {
		return new FormGroup<ValidateTaxNumberInFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateTaxNumberOut {

		/** Billing two letter ISO country code. */
		billing_country_code?: string | null;

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number?: string | null;

		/** If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case. */
		buyer_tax_number_valid?: boolean | null;

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted?: boolean | null;
	}
	export interface ValidateTaxNumberOutFormProperties {

		/** Billing two letter ISO country code. */
		billing_country_code: FormControl<string | null | undefined>,

		/** Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly. */
		buyer_tax_number: FormControl<string | null | undefined>,

		/** If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case. */
		buyer_tax_number_valid: FormControl<boolean | null | undefined>,

		/** If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example. */
		tax_deducted: FormControl<boolean | null | undefined>,
	}
	export function CreateValidateTaxNumberOutFormGroup() {
		return new FormGroup<ValidateTaxNumberOutFormProperties>({
			billing_country_code: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number: new FormControl<string | null | undefined>(undefined),
			buyer_tax_number_valid: new FormControl<boolean | null | undefined>(undefined),
			tax_deducted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VerifySMSTokenOut {

		/** Verified country code, returned if operation was successful. */
		country_code?: string | null;
	}
	export interface VerifySMSTokenOutFormProperties {

		/** Verified country code, returned if operation was successful. */
		country_code: FormControl<string | null | undefined>,
	}
	export function CreateVerifySMSTokenOutFormGroup() {
		return new FormGroup<VerifySMSTokenOutFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Countries
		 * Get api/v1/dictionaries/countries
		 * @param {boolean} tax_supported Should only countries with tax supported be listed?
		 * @return {GetCountriesDictOut} OK
		 */
		GetCountriesDict(tax_supported: boolean | null | undefined): Observable<GetCountriesDictOut> {
			return this.http.get<GetCountriesDictOut>(this.baseUri + 'api/v1/dictionaries/countries?tax_supported=' + tax_supported, {});
		}

		/**
		 * Currencies
		 * Get api/v1/dictionaries/currencies
		 * @return {GetCurrenciesDictOut} OK
		 */
		GetCurrenciesDict(): Observable<GetCurrenciesDictOut> {
			return this.http.get<GetCurrenciesDictOut>(this.baseUri + 'api/v1/dictionaries/currencies', {});
		}

		/**
		 * Product types
		 * Get api/v1/dictionaries/product_types
		 * @return {GetProductTypesDictOut} OK
		 */
		GetProductTypesDict(): Observable<GetProductTypesDictOut> {
			return this.http.get<GetProductTypesDictOut>(this.baseUri + 'api/v1/dictionaries/product_types', {});
		}

		/**
		 * Locate IP
		 * Get api/v1/geoip
		 * @return {LocateMyIPOut} OK
		 */
		LocateMyIP(): Observable<LocateMyIPOut> {
			return this.http.get<LocateMyIPOut>(this.baseUri + 'api/v1/geoip', {});
		}

		/**
		 * Locate provided IP
		 * Get api/v1/geoip/{ip}
		 * @param {string} ip IP address.
		 * @return {LocateGivenIPOut} OK
		 */
		LocateGivenIP(ip: string): Observable<LocateGivenIPOut> {
			return this.http.get<LocateGivenIPOut>(this.baseUri + 'api/v1/geoip/' + (ip == null ? '' : encodeURIComponent(ip)), {});
		}

		/**
		 * Calculate domestic summary
		 * Get api/v1/reports/domestic/summary
		 * @param {string} format Output format. 'xml' and 'csv' values are accepted. Default format - json
		 * @param {string} country_code ISO 2-letter country code which will be used for determining which country is domestic.
		 * @param {string} currency_code ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
		 * @param {string} start_month Period start month in yyyy-MM format.
		 * @param {string} end_month Period end month in yyyy-MM format.
		 * @param {string} fx_date_type Which date should be used for FX.
		 * @return {GetDomesticSummaryReportOut} OK
		 */
		GetDomesticSummaryReport(format: string | null | undefined, country_code: string, currency_code: string | null | undefined, start_month: string, end_month: string, fx_date_type: string | null | undefined): Observable<GetDomesticSummaryReportOut> {
			return this.http.get<GetDomesticSummaryReportOut>(this.baseUri + 'api/v1/reports/domestic/summary?format=' + (format == null ? '' : encodeURIComponent(format)) + '&country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)) + '&currency_code=' + (currency_code == null ? '' : encodeURIComponent(currency_code)) + '&start_month=' + (start_month == null ? '' : encodeURIComponent(start_month)) + '&end_month=' + (end_month == null ? '' : encodeURIComponent(end_month)) + '&fx_date_type=' + (fx_date_type == null ? '' : encodeURIComponent(fx_date_type)), {});
		}

		/**
		 * Calculate EU VIES report
		 * Get api/v1/reports/eu/vies
		 * @param {string} period_length Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested.
		 * @param {string} lff_sequence_number Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used.
		 * @param {string} transformation Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats.
		 * @param {string} currency_code ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
		 * @param {string} end_month Period end month in yyyy-MM format.
		 * @param {string} tax_id MOSS-assigned tax ID - if not provided, merchant's national tax number will be used.
		 * @param {string} start_month Period start month in yyyy-MM format.
		 * @param {string} eu_country_code ISO 2-letter country code which will be used for determining which country is domestic.
		 * @param {string} fx_date_type Which date should be used for FX.
		 * @param {string} format Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well
		 * @return {GetEuViesReportOut} OK
		 */
		GetEuViesReport(period_length: string | null | undefined, lff_sequence_number: string | null | undefined, transformation: string | null | undefined, currency_code: string | null | undefined, end_month: string, tax_id: string | null | undefined, start_month: string, eu_country_code: string, fx_date_type: string | null | undefined, format: string | null | undefined): Observable<GetEuViesReportOut> {
			return this.http.get<GetEuViesReportOut>(this.baseUri + 'api/v1/reports/eu/vies?period_length=' + (period_length == null ? '' : encodeURIComponent(period_length)) + '&lff_sequence_number=' + (lff_sequence_number == null ? '' : encodeURIComponent(lff_sequence_number)) + '&transformation=' + (transformation == null ? '' : encodeURIComponent(transformation)) + '&currency_code=' + (currency_code == null ? '' : encodeURIComponent(currency_code)) + '&end_month=' + (end_month == null ? '' : encodeURIComponent(end_month)) + '&tax_id=' + (tax_id == null ? '' : encodeURIComponent(tax_id)) + '&start_month=' + (start_month == null ? '' : encodeURIComponent(start_month)) + '&eu_country_code=' + (eu_country_code == null ? '' : encodeURIComponent(eu_country_code)) + '&fx_date_type=' + (fx_date_type == null ? '' : encodeURIComponent(fx_date_type)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), {});
		}

		/**
		 * Detailed refunds
		 * Get api/v1/settlement/detailed_refunds
		 * @param {string} format Output format. 'json' or 'csv'. Default value is 'json'
		 * @param {string} country_codes Comma separated list of 2-letter country codes
		 * @param {string} date_from Take only refunds issued at or after the date. Format: yyyy-MM-dd
		 * @param {string} date_to Take only refunds issued at or before the date. Format: yyyy-MM-dd
		 * @param {number} limit Limit (no more than 1000, defaults to 100).
		 * @param {number} offset Offset. Defaults to 0
		 * @return {GetDetailedRefundsOut} OK
		 */
		GetDetailedRefunds(format: string | null | undefined, country_codes: string | null | undefined, date_from: string | null | undefined, date_to: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<GetDetailedRefundsOut> {
			return this.http.get<GetDetailedRefundsOut>(this.baseUri + 'api/v1/settlement/detailed_refunds?format=' + (format == null ? '' : encodeURIComponent(format)) + '&country_codes=' + (country_codes == null ? '' : encodeURIComponent(country_codes)) + '&date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Fetch refunds
		 * Get api/v1/settlement/refunds
		 * @param {string} format Output format. 'csv' value is accepted as well
		 * @param {string} moss_country_code MOSS country code, used to determine currency. If ommited, merchant default setting is used.
		 * @param {string} tax_region Tax region key, defaults to EU for backwards compatibility.
		 * @param {string} date_from Take only refunds issued at or after the date. Format: yyyy-MM-dd
		 * @return {GetRefundsOut} OK
		 */
		GetRefunds(format: string | null | undefined, moss_country_code: string | null | undefined, tax_region: string | null | undefined, date_from: string): Observable<GetRefundsOut> {
			return this.http.get<GetRefundsOut>(this.baseUri + 'api/v1/settlement/refunds?format=' + (format == null ? '' : encodeURIComponent(format)) + '&moss_country_code=' + (moss_country_code == null ? '' : encodeURIComponent(moss_country_code)) + '&tax_region=' + (tax_region == null ? '' : encodeURIComponent(tax_region)) + '&date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)), {});
		}

		/**
		 * Fetch summary
		 * Get api/v1/settlement/summary/{quarter}
		 * @param {string} moss_country_code MOSS country code, used to determine currency. If ommited, merchant default setting is used.
		 * @param {string} tax_region Tax region key
		 * @param {string} start_month Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
		 * @param {string} end_month Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
		 * @param {string} quarter Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.
		 * @return {GetSettlementSummaryOut} OK
		 */
		GetSettlementSummary(moss_country_code: string | null | undefined, tax_region: string | null | undefined, start_month: string | null | undefined, end_month: string | null | undefined, quarter: string): Observable<GetSettlementSummaryOut> {
			return this.http.get<GetSettlementSummaryOut>(this.baseUri + 'api/v1/settlement/summary/' + (quarter == null ? '' : encodeURIComponent(quarter)) + '?moss_country_code=' + (moss_country_code == null ? '' : encodeURIComponent(moss_country_code)) + '&tax_region=' + (tax_region == null ? '' : encodeURIComponent(tax_region)) + '&start_month=' + (start_month == null ? '' : encodeURIComponent(start_month)) + '&end_month=' + (end_month == null ? '' : encodeURIComponent(end_month)), {});
		}

		/**
		 * Fetch settlement
		 * Get api/v1/settlement/{quarter}
		 * @param {string} moss_tax_id MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
		 * @param {string} currency_code ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code.
		 * @param {string} end_month Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
		 * @param {string} tax_id MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
		 * @param {string} refund_date_kind_override Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting.
		 * @param {string} start_month Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
		 * @param {string} moss_country_code MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code.
		 * @param {string} format Output format. 'csv' value is accepted as well
		 * @param {string} tax_country_code Tax entity country code, used to determine currency/region. 
		 * @param {string} quarter Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.
		 * @return {GetSettlementOut} OK
		 */
		GetSettlement(moss_tax_id: string | null | undefined, currency_code: string | null | undefined, end_month: string | null | undefined, tax_id: string | null | undefined, refund_date_kind_override: string | null | undefined, start_month: string | null | undefined, moss_country_code: string | null | undefined, format: string | null | undefined, tax_country_code: string | null | undefined, quarter: string): Observable<GetSettlementOut> {
			return this.http.get<GetSettlementOut>(this.baseUri + 'api/v1/settlement/' + (quarter == null ? '' : encodeURIComponent(quarter)) + '?moss_tax_id=' + (moss_tax_id == null ? '' : encodeURIComponent(moss_tax_id)) + '&currency_code=' + (currency_code == null ? '' : encodeURIComponent(currency_code)) + '&end_month=' + (end_month == null ? '' : encodeURIComponent(end_month)) + '&tax_id=' + (tax_id == null ? '' : encodeURIComponent(tax_id)) + '&refund_date_kind_override=' + (refund_date_kind_override == null ? '' : encodeURIComponent(refund_date_kind_override)) + '&start_month=' + (start_month == null ? '' : encodeURIComponent(start_month)) + '&moss_country_code=' + (moss_country_code == null ? '' : encodeURIComponent(moss_country_code)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&tax_country_code=' + (tax_country_code == null ? '' : encodeURIComponent(tax_country_code)), {});
		}

		/**
		 * Settlement by country
		 * Get api/v1/stats/settlement/by_country
		 * @param {string} date_from Date from in yyyy-MM format.
		 * @param {string} date_to Date to in yyyy-MM format.
		 * @return {GetSettlementStatsByCountryOut} OK
		 */
		GetSettlementStatsByCountry(date_from: string, date_to: string): Observable<GetSettlementStatsByCountryOut> {
			return this.http.get<GetSettlementStatsByCountryOut>(this.baseUri + 'api/v1/stats/settlement/by_country?date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), {});
		}

		/**
		 * Settlement by tax type
		 * Get api/v1/stats/settlement/by_taxation_type
		 * @param {string} date_from Date from in yyyy-MM format.
		 * @param {string} date_to Date to in yyyy-MM format.
		 * @return {GetSettlementStatsByTaxationTypeOut} OK
		 */
		GetSettlementStatsByTaxationType(date_from: string, date_to: string): Observable<GetSettlementStatsByTaxationTypeOut> {
			return this.http.get<GetSettlementStatsByTaxationTypeOut>(this.baseUri + 'api/v1/stats/settlement/by_taxation_type?date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), {});
		}

		/**
		 * Settlement stats over time
		 * Get api/v1/stats/settlement/daily
		 * @param {string} interval Interval type - day, week, month.
		 * @param {string} date_from Date from in yyyy-MM format.
		 * @param {string} date_to Date to in yyyy-MM format.
		 * @return {GetDailySettlementStatsOut} OK
		 */
		GetDailySettlementStats(interval: string, date_from: string, date_to: string): Observable<GetDailySettlementStatsOut> {
			return this.http.get<GetDailySettlementStatsOut>(this.baseUri + 'api/v1/stats/settlement/daily?interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), {});
		}

		/**
		 * Transaction stats
		 * Get api/v1/stats/transactions
		 * @param {string} date_from Date from in yyyy-MM format.
		 * @param {string} date_to Date to in yyyy-MM format.
		 * @param {string} interval Interval. Accepted values are 'day', 'week' and 'month'.
		 * @return {GetTransactionsStatsOut} OK
		 */
		GetTransactionsStats(date_from: string, date_to: string, interval: string | null | undefined): Observable<GetTransactionsStatsOut> {
			return this.http.get<GetTransactionsStatsOut>(this.baseUri + 'api/v1/stats/transactions?date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)) + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)), {});
		}

		/**
		 * Settlement by country
		 * Get api/v1/stats/transactions/by_country
		 * @param {string} global_currency_code Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB.
		 * @param {string} date_from Date from in yyyy-MM format.
		 * @param {string} date_to Date to in yyyy-MM format.
		 * @return {GetTransactionsStatsByCountryOut} OK
		 */
		GetTransactionsStatsByCountry(global_currency_code: string | null | undefined, date_from: string, date_to: string): Observable<GetTransactionsStatsByCountryOut> {
			return this.http.get<GetTransactionsStatsByCountryOut>(this.baseUri + 'api/v1/stats/transactions/by_country?global_currency_code=' + (global_currency_code == null ? '' : encodeURIComponent(global_currency_code)) + '&date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), {});
		}

		/**
		 * Simple tax
		 * Get api/v1/tax/calculate
		 * @param {string} product_type Product type, according to dictionary /dictionaries/product_types. 
		 * @param {string} invoice_address_city Invoice address/postal_code
		 * @param {string} buyer_credit_card_prefix First 6 digits of buyer's credit card prefix.
		 * @param {string} currency_code Currency code for transaction - e.g. EUR.
		 * @param {string} invoice_address_region Invoice address/region
		 * @param {number} unit_price Unit price.
		 * @param {number} quantity Quantity Defaults to 1.
		 * @param {string} buyer_tax_number  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
		 * @param {string} force_country_code Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
		 * @param {string} order_date Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
		 * @param {number} amount Amount. Required if total amount or both unit price and quantity are not provided.
		 * @param {string} billing_country_code Billing two letter ISO country code.
		 * @param {string} invoice_address_postal_code Invoice address/postal_code
		 * @param {number} total_amount Total amount. Required if amount or both unit price and quantity are not provided.
		 * @param {boolean} tax_deducted If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.
		 * @return {CalculateSimpleTaxOut} OK
		 */
		CalculateSimpleTax(product_type: string | null | undefined, invoice_address_city: string | null | undefined, buyer_credit_card_prefix: string | null | undefined, currency_code: string, invoice_address_region: string | null | undefined, unit_price: number | null | undefined, quantity: number | null | undefined, buyer_tax_number: string | null | undefined, force_country_code: string | null | undefined, order_date: string | null | undefined, amount: number | null | undefined, billing_country_code: string | null | undefined, invoice_address_postal_code: string | null | undefined, total_amount: number | null | undefined, tax_deducted: boolean | null | undefined): Observable<CalculateSimpleTaxOut> {
			return this.http.get<CalculateSimpleTaxOut>(this.baseUri + 'api/v1/tax/calculate?product_type=' + (product_type == null ? '' : encodeURIComponent(product_type)) + '&invoice_address_city=' + (invoice_address_city == null ? '' : encodeURIComponent(invoice_address_city)) + '&buyer_credit_card_prefix=' + (buyer_credit_card_prefix == null ? '' : encodeURIComponent(buyer_credit_card_prefix)) + '&currency_code=' + (currency_code == null ? '' : encodeURIComponent(currency_code)) + '&invoice_address_region=' + (invoice_address_region == null ? '' : encodeURIComponent(invoice_address_region)) + '&unit_price=' + unit_price + '&quantity=' + quantity + '&buyer_tax_number=' + (buyer_tax_number == null ? '' : encodeURIComponent(buyer_tax_number)) + '&force_country_code=' + (force_country_code == null ? '' : encodeURIComponent(force_country_code)) + '&order_date=' + (order_date == null ? '' : encodeURIComponent(order_date)) + '&amount=' + amount + '&billing_country_code=' + (billing_country_code == null ? '' : encodeURIComponent(billing_country_code)) + '&invoice_address_postal_code=' + (invoice_address_postal_code == null ? '' : encodeURIComponent(invoice_address_postal_code)) + '&total_amount=' + total_amount + '&tax_deducted=' + tax_deducted, {});
		}

		/**
		 * Calculate tax
		 * Post api/v1/tax/calculate
		 * @param {CalculateTaxIn} requestBody Input
		 * @return {CalculateTaxOut} OK
		 */
		CalculateTax(requestBody: CalculateTaxIn): Observable<CalculateTaxOut> {
			return this.http.post<CalculateTaxOut>(this.baseUri + 'api/v1/tax/calculate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Calculate location
		 * Get api/v1/tax/location/calculate
		 * @param {string} billing_country_code Billing two letter ISO country code.
		 * @param {string} buyer_credit_card_prefix First 6 digits of buyer's credit card prefix.
		 * @return {CalculateTaxLocationOut} OK
		 */
		CalculateTaxLocation(billing_country_code: string | null | undefined, buyer_credit_card_prefix: string | null | undefined): Observable<CalculateTaxLocationOut> {
			return this.http.get<CalculateTaxLocationOut>(this.baseUri + 'api/v1/tax/location/calculate?billing_country_code=' + (billing_country_code == null ? '' : encodeURIComponent(billing_country_code)) + '&buyer_credit_card_prefix=' + (buyer_credit_card_prefix == null ? '' : encodeURIComponent(buyer_credit_card_prefix)), {});
		}

		/**
		 * Validate VAT number
		 * Get api/v1/tax/vat_numbers/{tax_number}/validate
		 * @param {string} country_code Two-letter ISO country code.
		 * @param {string} tax_number Tax number
		 * @return {ValidateTaxNumberOut} OK
		 */
		ValidateTaxNumber(country_code: string | null | undefined, tax_number: string): Observable<ValidateTaxNumberOut> {
			return this.http.get<ValidateTaxNumberOut>(this.baseUri + 'api/v1/tax/vat_numbers/' + (tax_number == null ? '' : encodeURIComponent(tax_number)) + '/validate?country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)), {});
		}

		/**
		 * Browse transactions
		 * Get api/v1/transactions
		 * @param {string} filter_text Filtering expression
		 * @param {number} offset Offset
		 * @param {boolean} has_note Return only transactions with a note field set.
		 * @param {string} key_or_custom_id Taxamo provided transaction key or custom id
		 * @param {string} currency_code Three letter ISO currency code.
		 * @param {string} order_date_to Order date to in yyyy-MM-dd format.
		 * @param {boolean} sort_reverse If true, results are sorted in descending order.
		 * @param {number} limit Limit (no more than 1000, defaults to 100).
		 * @param {string} invoice_number Transaction invoice number.
		 * @param {string} tax_country_codes Comma separated list of two letter ISO tax country codes.
		 * @param {string} statuses Comma separated list of of transaction statuses. 'N' - unconfirmed transaction, 'C' - confirmed transaction.
		 * @param {string} original_transaction_key Taxamo provided original transaction key
		 * @param {string} order_date_from Order date from in yyyy-MM-dd format.
		 * @param {string} total_amount_greater_than Return only transactions with total amount greater than given number. Transactions with total amount equal to a given number (e.g. 0) are not returned.
		 * @param {string} format Output format - supports 'csv' value for this operation.
		 * @param {string} total_amount_less_than Return only transactions with total amount less than a given number. Transactions with total amount equal to a given number (e.g. 1) are not returned.
		 * @param {string} tax_country_code Two letter ISO tax country code.
		 * @return {ListTransactionsOut} OK
		 */
		ListTransactions(filter_text: string | null | undefined, offset: number | null | undefined, has_note: boolean | null | undefined, key_or_custom_id: string | null | undefined, currency_code: string | null | undefined, order_date_to: string | null | undefined, sort_reverse: boolean | null | undefined, limit: number | null | undefined, invoice_number: string | null | undefined, tax_country_codes: string | null | undefined, statuses: string | null | undefined, original_transaction_key: string | null | undefined, order_date_from: string | null | undefined, total_amount_greater_than: string | null | undefined, format: string | null | undefined, total_amount_less_than: string | null | undefined, tax_country_code: string | null | undefined): Observable<ListTransactionsOut> {
			return this.http.get<ListTransactionsOut>(this.baseUri + 'api/v1/transactions?filter_text=' + (filter_text == null ? '' : encodeURIComponent(filter_text)) + '&offset=' + offset + '&has_note=' + has_note + '&key_or_custom_id=' + (key_or_custom_id == null ? '' : encodeURIComponent(key_or_custom_id)) + '&currency_code=' + (currency_code == null ? '' : encodeURIComponent(currency_code)) + '&order_date_to=' + (order_date_to == null ? '' : encodeURIComponent(order_date_to)) + '&sort_reverse=' + sort_reverse + '&limit=' + limit + '&invoice_number=' + (invoice_number == null ? '' : encodeURIComponent(invoice_number)) + '&tax_country_codes=' + (tax_country_codes == null ? '' : encodeURIComponent(tax_country_codes)) + '&statuses=' + (statuses == null ? '' : encodeURIComponent(statuses)) + '&original_transaction_key=' + (original_transaction_key == null ? '' : encodeURIComponent(original_transaction_key)) + '&order_date_from=' + (order_date_from == null ? '' : encodeURIComponent(order_date_from)) + '&total_amount_greater_than=' + (total_amount_greater_than == null ? '' : encodeURIComponent(total_amount_greater_than)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&total_amount_less_than=' + (total_amount_less_than == null ? '' : encodeURIComponent(total_amount_less_than)) + '&tax_country_code=' + (tax_country_code == null ? '' : encodeURIComponent(tax_country_code)), {});
		}

		/**
		 * Store transaction
		 * Post api/v1/transactions
		 * @param {CreateTransactionIn} requestBody Input
		 * @return {CreateTransactionOut} OK
		 */
		CreateTransaction(requestBody: CreateTransactionIn): Observable<CreateTransactionOut> {
			return this.http.post<CreateTransactionOut>(this.baseUri + 'api/v1/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve transaction data.
		 * Get api/v1/transactions/{key}
		 * @param {string} key Transaction key
		 * @return {GetTransactionOut} OK
		 */
		GetTransaction(key: string): Observable<GetTransactionOut> {
			return this.http.get<GetTransactionOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Update transaction
		 * Put api/v1/transactions/{key}
		 * @param {string} key Transaction key.
		 * @param {UpdateTransactionIn} requestBody Input
		 * @return {UpdateTransactionOut} OK
		 */
		UpdateTransaction(key: string, requestBody: UpdateTransactionIn): Observable<UpdateTransactionOut> {
			return this.http.put<UpdateTransactionOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete transaction
		 * Delete api/v1/transactions/{key}
		 * @param {string} key Transaction key
		 * @return {CancelTransactionOut} OK
		 */
		CancelTransaction(key: string): Observable<CancelTransactionOut> {
			return this.http.delete<CancelTransactionOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Confirm transaction
		 * Post api/v1/transactions/{key}/confirm
		 * @param {string} key Transaction key.
		 * @param {ConfirmTransactionIn} requestBody Input
		 * @return {ConfirmTransactionOut} OK
		 */
		ConfirmTransaction(key: string, requestBody: ConfirmTransactionIn): Observable<ConfirmTransactionOut> {
			return this.http.post<ConfirmTransactionOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/confirm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Email credit note
		 * Post api/v1/transactions/{key}/invoice/refunds/{refund_note_number}/send_email
		 * @param {string} key Transaction key.
		 * @param {string} refund_note_number Refund note id.
		 * @param {EmailRefundIn} requestBody Input
		 * @return {EmailRefundOut} OK
		 */
		EmailRefund(key: string, refund_note_number: string, requestBody: EmailRefundIn): Observable<EmailRefundOut> {
			return this.http.post<EmailRefundOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/invoice/refunds/' + (refund_note_number == null ? '' : encodeURIComponent(refund_note_number)) + '/send_email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Email invoice
		 * Post api/v1/transactions/{key}/invoice/send_email
		 * @param {string} key Transaction key.
		 * @param {EmailInvoiceIn} requestBody Input
		 * @return {EmailInvoiceOut} OK
		 */
		EmailInvoice(key: string, requestBody: EmailInvoiceIn): Observable<EmailInvoiceOut> {
			return this.http.post<EmailInvoiceOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/invoice/send_email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List payments
		 * Get api/v1/transactions/{key}/payments
		 * @param {string} limit Max record count (no more than 100, defaults to 10).
		 * @param {string} offset How many records need to be skipped, defaults to 0.
		 * @param {string} key Transaction key.
		 * @return {ListPaymentsOut} OK
		 */
		ListPayments(limit: string | null | undefined, offset: string | null | undefined, key: string): Observable<ListPaymentsOut> {
			return this.http.get<ListPaymentsOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/payments?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * Register a payment
		 * Post api/v1/transactions/{key}/payments
		 * @param {string} key Transaction key.
		 * @param {CreatePaymentIn} requestBody Input
		 * @return {CreatePaymentOut} OK
		 */
		CreatePayment(key: string, requestBody: CreatePaymentIn): Observable<CreatePaymentOut> {
			return this.http.post<CreatePaymentOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Capture payment
		 * Post api/v1/transactions/{key}/payments/capture
		 * @param {string} key Transaction key.
		 * @return {CapturePaymentOut} OK
		 */
		CapturePayment(key: string): Observable<CapturePaymentOut> {
			return this.http.post<CapturePaymentOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/payments/capture', null, {});
		}

		/**
		 * Get transaction refunds
		 * Get api/v1/transactions/{key}/refunds
		 * @param {string} key Transaction key.
		 * @return {ListRefundsOut} OK
		 */
		ListRefunds(key: string): Observable<ListRefundsOut> {
			return this.http.get<ListRefundsOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/refunds', {});
		}

		/**
		 * Create a refund
		 * Post api/v1/transactions/{key}/refunds
		 * @param {string} key Transaction key.
		 * @param {CreateRefundIn} requestBody Input
		 * @return {CreateRefundOut} OK
		 */
		CreateRefund(key: string, requestBody: CreateRefundIn): Observable<CreateRefundOut> {
			return this.http.post<CreateRefundOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/refunds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Un-confirm the transaction
		 * Post api/v1/transactions/{key}/unconfirm
		 * @param {string} key Transaction key.
		 * @param {UnconfirmTransactionIn} requestBody Input
		 * @return {UnconfirmTransactionOut} OK
		 */
		UnconfirmTransaction(key: string, requestBody: UnconfirmTransactionIn): Observable<UnconfirmTransactionOut> {
			return this.http.post<UnconfirmTransactionOut>(this.baseUri + 'api/v1/transactions/' + (key == null ? '' : encodeURIComponent(key)) + '/unconfirm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create SMS token
		 * Post api/v1/verification/sms
		 * @param {CreateSMSTokenIn} requestBody Input
		 * @return {CreateSMSTokenOut} OK
		 */
		CreateSMSToken(requestBody: CreateSMSTokenIn): Observable<CreateSMSTokenOut> {
			return this.http.post<CreateSMSTokenOut>(this.baseUri + 'api/v1/verification/sms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verify SMS token
		 * Get api/v1/verification/sms/{token}
		 * @param {string} token Provided token.
		 * @return {VerifySMSTokenOut} OK
		 */
		VerifySMSToken(token: string): Observable<VerifySMSTokenOut> {
			return this.http.get<VerifySMSTokenOut>(this.baseUri + 'api/v1/verification/sms/' + (token == null ? '' : encodeURIComponent(token)), {});
		}
	}

}

