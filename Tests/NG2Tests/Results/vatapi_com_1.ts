import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Api_Usage {

		/**
		 * The number of api requests remaining in the current billing period
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requests_remaining: number;

		/**
		 * The number of api requests consumed within the last 30 days
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requests_used: number;

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface Api_UsageFormProperties {

		/**
		 * The number of api requests remaining in the current billing period
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requests_remaining: FormControl<number | null | undefined>,

		/**
		 * The number of api requests consumed within the last 30 days
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requests_used: FormControl<number | null | undefined>,

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateApi_UsageFormGroup() {
		return new FormGroup<Api_UsageFormProperties>({
			requests_remaining: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			requests_used: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Convert_Price {

		/**
		 * The 2 digit country code
		 * Required
		 */
		country_code: string;

		/**
		 * The country_rate
		 * Required
		 */
		country_rate: string;

		/**
		 * The price excluding VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price_excl_vat: number;

		/**
		 * The price including VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price_incl_vat: number;

		/**
		 * The rate % for the country_rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rate: number;

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;

		/**
		 * The total amount of VAT applied
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat: number;
	}
	export interface Convert_PriceFormProperties {

		/**
		 * The 2 digit country code
		 * Required
		 */
		country_code: FormControl<string | null | undefined>,

		/**
		 * The country_rate
		 * Required
		 */
		country_rate: FormControl<string | null | undefined>,

		/**
		 * The price excluding VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price_excl_vat: FormControl<number | null | undefined>,

		/**
		 * The price including VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price_incl_vat: FormControl<number | null | undefined>,

		/**
		 * The rate % for the country_rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rate: FormControl<number | null | undefined>,

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * The total amount of VAT applied
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat: FormControl<number | null | undefined>,
	}
	export function CreateConvert_PriceFormGroup() {
		return new FormGroup<Convert_PriceFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country_rate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price_excl_vat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			price_incl_vat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Country_Code_Check {

		/**
		 * The country name
		 * Required
		 */
		country: string;

		/**
		 * The 2 digit country code
		 * Required
		 */
		country_code: string;

		/** Required */
		rates: Country_Rates;

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;

		/**
		 * TRUE or FALSE, depending if country is within the EU.
		 * Required
		 */
		vat_applies: string;
	}
	export interface Country_Code_CheckFormProperties {

		/**
		 * The country name
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The 2 digit country code
		 * Required
		 */
		country_code: FormControl<string | null | undefined>,

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * TRUE or FALSE, depending if country is within the EU.
		 * Required
		 */
		vat_applies: FormControl<string | null | undefined>,
	}
	export function CreateCountry_Code_CheckFormGroup() {
		return new FormGroup<Country_Code_CheckFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vat_applies: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Country_Data {

		/**
		 * The country name
		 * Required
		 */
		country: string;

		/** Required */
		rates: Country_Rates;
	}
	export interface Country_DataFormProperties {

		/**
		 * The country name
		 * Required
		 */
		country: FormControl<string | null | undefined>,
	}
	export function CreateCountry_DataFormGroup() {
		return new FormGroup<Country_DataFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Country_Rates {

		/** Required */
		parking: Parking;

		/** Required */
		reduced: Reduced;

		/** Required */
		reduced_alt: Reduced_alt;

		/** Required */
		standard: Standard;

		/** Required */
		super_reduced: Super_reduced;
	}
	export interface Country_RatesFormProperties {
	}
	export function CreateCountry_RatesFormGroup() {
		return new FormGroup<Country_RatesFormProperties>({
		});

	}

	export interface Create_Invoice {

		/** Required */
		invoice: Invoice_Array;

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface Create_InvoiceFormProperties {

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateCreate_InvoiceFormGroup() {
		return new FormGroup<Create_InvoiceFormProperties>({
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Currency_Conversion {

		/** The amount you are converting from */
		amount_from?: string | null;

		/** The result amount you have converted to */
		amount_to?: string | null;

		/**
		 * The currency code you are converting from
		 * Required
		 */
		currency_from: string;

		/**
		 * The currency code you are converting to
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currency_to: number;

		/**
		 * The rate according to HMRC at time of sale
		 * Required
		 */
		rate: string;

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface Currency_ConversionFormProperties {

		/** The amount you are converting from */
		amount_from: FormControl<string | null | undefined>,

		/** The result amount you have converted to */
		amount_to: FormControl<string | null | undefined>,

		/**
		 * The currency code you are converting from
		 * Required
		 */
		currency_from: FormControl<string | null | undefined>,

		/**
		 * The currency code you are converting to
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currency_to: FormControl<number | null | undefined>,

		/**
		 * The rate according to HMRC at time of sale
		 * Required
		 */
		rate: FormControl<string | null | undefined>,

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateCurrency_ConversionFormGroup() {
		return new FormGroup<Currency_ConversionFormProperties>({
			amount_from: new FormControl<string | null | undefined>(undefined),
			amount_to: new FormControl<string | null | undefined>(undefined),
			currency_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IP_Check {

		/**
		 * The country name
		 * Required
		 */
		country: string;

		/**
		 * The 2 digit country code
		 * Required
		 */
		country_code: string;

		/** Required */
		rates: Country_Rates;

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;

		/**
		 * TRUE or FALSE, depending if country is within the EU.
		 * Required
		 */
		vat_applies: string;
	}
	export interface IP_CheckFormProperties {

		/**
		 * The country name
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The 2 digit country code
		 * Required
		 */
		country_code: FormControl<string | null | undefined>,

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * TRUE or FALSE, depending if country is within the EU.
		 * Required
		 */
		vat_applies: FormControl<string | null | undefined>,
	}
	export function CreateIP_CheckFormGroup() {
		return new FormGroup<IP_CheckFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vat_applies: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Invoice_Array {

		/**
		 * Your business address
		 * Required
		 */
		business_address: string;

		/**
		 * Your business name
		 * Required
		 */
		business_name: string;

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate?: number | null;

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: string;

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion?: string | null;

		/** Your customers address */
		customer_address?: string | null;

		/** Your customers name or trading name */
		customer_name?: string | null;

		/** Customers VAT number */
		customer_vat_number?: string | null;

		/**
		 * The date the invoice was issued
		 * Required
		 */
		date: string;

		/**
		 * The discount rate per item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_rate?: number | null;

		/**
		 * Total amount of discount
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_total: number;

		/**
		 * A sequential invoice number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invoice_number: number;

		/**
		 * A perminant URL to your VAT invoice
		 * Required
		 */
		invoice_url: string;

		/**
		 * An array of your invoice items
		 * Required
		 */
		items: Array<Invoice_Items>;

		/** A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended */
		logo_url?: string | null;

		/** Any notes attached to the invoice */
		notes?: string | null;

		/**
		 * Total amount excluding VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subtotal: number;

		/**
		 * (or 'time of supply') if this is different from the invoice date
		 * Required
		 */
		tax_point: string;

		/**
		 * Total amount of including VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: string;

		/**
		 * Your VAT number
		 * Required
		 */
		vat_number: string;

		/**
		 * Total amount of VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat_total: number;
	}
	export interface Invoice_ArrayFormProperties {

		/**
		 * Your business address
		 * Required
		 */
		business_address: FormControl<string | null | undefined>,

		/**
		 * Your business name
		 * Required
		 */
		business_name: FormControl<string | null | undefined>,

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate: FormControl<number | null | undefined>,

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion: FormControl<string | null | undefined>,

		/** Your customers address */
		customer_address: FormControl<string | null | undefined>,

		/** Your customers name or trading name */
		customer_name: FormControl<string | null | undefined>,

		/** Customers VAT number */
		customer_vat_number: FormControl<string | null | undefined>,

		/**
		 * The date the invoice was issued
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The discount rate per item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_rate: FormControl<number | null | undefined>,

		/**
		 * Total amount of discount
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_total: FormControl<number | null | undefined>,

		/**
		 * A sequential invoice number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invoice_number: FormControl<number | null | undefined>,

		/**
		 * A perminant URL to your VAT invoice
		 * Required
		 */
		invoice_url: FormControl<string | null | undefined>,

		/** A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended */
		logo_url: FormControl<string | null | undefined>,

		/** Any notes attached to the invoice */
		notes: FormControl<string | null | undefined>,

		/**
		 * Total amount excluding VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subtotal: FormControl<number | null | undefined>,

		/**
		 * (or 'time of supply') if this is different from the invoice date
		 * Required
		 */
		tax_point: FormControl<string | null | undefined>,

		/**
		 * Total amount of including VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Your VAT number
		 * Required
		 */
		vat_number: FormControl<string | null | undefined>,

		/**
		 * Total amount of VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat_total: FormControl<number | null | undefined>,
	}
	export function CreateInvoice_ArrayFormGroup() {
		return new FormGroup<Invoice_ArrayFormProperties>({
			business_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			business_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			conversion_rate: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency_code_conversion: new FormControl<string | null | undefined>(undefined),
			customer_address: new FormControl<string | null | undefined>(undefined),
			customer_name: new FormControl<string | null | undefined>(undefined),
			customer_vat_number: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			discount_rate: new FormControl<number | null | undefined>(undefined),
			discount_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			invoice_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			invoice_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo_url: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			subtotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tax_point: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Invoice_Items {

		/**
		 * The item line description
		 * Required
		 */
		description: string;

		/**
		 * The price of the individual item (Ex VAT)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price_each: number;

		/**
		 * The quantity of the item
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * The VAT rate at which the item is charged
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat_rate: number;
	}
	export interface Invoice_ItemsFormProperties {

		/**
		 * The item line description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The price of the individual item (Ex VAT)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price_each: FormControl<number | null | undefined>,

		/**
		 * The quantity of the item
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * The VAT rate at which the item is charged
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat_rate: FormControl<number | null | undefined>,
	}
	export function CreateInvoice_ItemsFormGroup() {
		return new FormGroup<Invoice_ItemsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price_each: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vat_rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Invoice_Data {

		/**
		 * Your business address
		 * Required
		 */
		business_address: string;

		/**
		 * Your business name
		 * Required
		 */
		business_name: string;

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate?: number | null;

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: string;

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion?: string | null;

		/** Your customers address */
		customer_address?: string | null;

		/** Your customers name or trading name */
		customer_name?: string | null;

		/** Optional customers VAT number */
		customer_vat_number?: string | null;

		/** The date the invoice was issued */
		date?: string | null;

		/** The discount rate per item */
		discount_rate?: string | null;

		/**
		 * An array of your invoice items
		 * Required
		 */
		items: Array<Invoice_Items>;

		/** Add a note to the invoice. */
		notes?: string | null;

		/** Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl' */
		price_type?: string | null;

		/** (or 'time of supply') if this is different from the invoice date */
		tax_point?: string | null;

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: string;

		/**
		 * Your VAT number
		 * Required
		 */
		vat_number: string;

		/** To Zero-Rate the VAT, set to true. */
		zero_rated?: string | null;
	}
	export interface Invoice_DataFormProperties {

		/**
		 * Your business address
		 * Required
		 */
		business_address: FormControl<string | null | undefined>,

		/**
		 * Your business name
		 * Required
		 */
		business_name: FormControl<string | null | undefined>,

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate: FormControl<number | null | undefined>,

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion: FormControl<string | null | undefined>,

		/** Your customers address */
		customer_address: FormControl<string | null | undefined>,

		/** Your customers name or trading name */
		customer_name: FormControl<string | null | undefined>,

		/** Optional customers VAT number */
		customer_vat_number: FormControl<string | null | undefined>,

		/** The date the invoice was issued */
		date: FormControl<string | null | undefined>,

		/** The discount rate per item */
		discount_rate: FormControl<string | null | undefined>,

		/** Add a note to the invoice. */
		notes: FormControl<string | null | undefined>,

		/** Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl' */
		price_type: FormControl<string | null | undefined>,

		/** (or 'time of supply') if this is different from the invoice date */
		tax_point: FormControl<string | null | undefined>,

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Your VAT number
		 * Required
		 */
		vat_number: FormControl<string | null | undefined>,

		/** To Zero-Rate the VAT, set to true. */
		zero_rated: FormControl<string | null | undefined>,
	}
	export function CreateInvoice_DataFormGroup() {
		return new FormGroup<Invoice_DataFormProperties>({
			business_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			business_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			conversion_rate: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency_code_conversion: new FormControl<string | null | undefined>(undefined),
			customer_address: new FormControl<string | null | undefined>(undefined),
			customer_name: new FormControl<string | null | undefined>(undefined),
			customer_vat_number: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			discount_rate: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			price_type: new FormControl<string | null | undefined>(undefined),
			tax_point: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zero_rated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Retrieve_Invoice {

		/** Required */
		invoice: Retrieve_Invoice_Array;

		/**
		 * Response code
		 * Required
		 */
		status: string;
	}
	export interface Retrieve_InvoiceFormProperties {

		/**
		 * Response code
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateRetrieve_InvoiceFormGroup() {
		return new FormGroup<Retrieve_InvoiceFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Retrieve_Invoice_Array {

		/**
		 * Your business address
		 * Required
		 */
		business_address: string;

		/**
		 * Your business name
		 * Required
		 */
		business_name: string;

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate?: number | null;

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: string;

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion?: string | null;

		/** Your customers address */
		customer_address?: string | null;

		/** Your customers name or trading name */
		customer_name?: string | null;

		/** Optional, customers VAT number */
		customer_vat_number?: string | null;

		/**
		 * The date the invoice was issued
		 * Required
		 */
		date: string;

		/**
		 * The discount rate per item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_rate?: number | null;

		/**
		 * Total amount of discount
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_total: number;

		/**
		 * The invoice ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * A perminant URL to your VAT invoice
		 * Required
		 */
		invoice_url: string;

		/**
		 * An array of your invoice items
		 * Required
		 */
		items: Array<Invoice_Items>;

		/** A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended */
		logo_url?: string | null;

		/** Any notes attached to the invoice */
		notes?: string | null;

		/** Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl' */
		price_type?: string | null;

		/**
		 * Total amount excluding VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subtotal: number;

		/**
		 * (or 'time of supply') if this is different from the invoice date
		 * Required
		 */
		tax_point: string;

		/**
		 * Total amount of including VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: string;

		/**
		 * Your VAT number
		 * Required
		 */
		vat_number: string;

		/**
		 * Total amount of VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat_total: number;

		/** To Zero-Rate the VAT, set to true. */
		zero_rated?: string | null;
	}
	export interface Retrieve_Invoice_ArrayFormProperties {

		/**
		 * Your business address
		 * Required
		 */
		business_address: FormControl<string | null | undefined>,

		/**
		 * Your business name
		 * Required
		 */
		business_name: FormControl<string | null | undefined>,

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate: FormControl<number | null | undefined>,

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion: FormControl<string | null | undefined>,

		/** Your customers address */
		customer_address: FormControl<string | null | undefined>,

		/** Your customers name or trading name */
		customer_name: FormControl<string | null | undefined>,

		/** Optional, customers VAT number */
		customer_vat_number: FormControl<string | null | undefined>,

		/**
		 * The date the invoice was issued
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The discount rate per item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_rate: FormControl<number | null | undefined>,

		/**
		 * Total amount of discount
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount_total: FormControl<number | null | undefined>,

		/**
		 * The invoice ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * A perminant URL to your VAT invoice
		 * Required
		 */
		invoice_url: FormControl<string | null | undefined>,

		/** A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended */
		logo_url: FormControl<string | null | undefined>,

		/** Any notes attached to the invoice */
		notes: FormControl<string | null | undefined>,

		/** Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl' */
		price_type: FormControl<string | null | undefined>,

		/**
		 * Total amount excluding VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subtotal: FormControl<number | null | undefined>,

		/**
		 * (or 'time of supply') if this is different from the invoice date
		 * Required
		 */
		tax_point: FormControl<string | null | undefined>,

		/**
		 * Total amount of including VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Your VAT number
		 * Required
		 */
		vat_number: FormControl<string | null | undefined>,

		/**
		 * Total amount of VAT
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vat_total: FormControl<number | null | undefined>,

		/** To Zero-Rate the VAT, set to true. */
		zero_rated: FormControl<string | null | undefined>,
	}
	export function CreateRetrieve_Invoice_ArrayFormGroup() {
		return new FormGroup<Retrieve_Invoice_ArrayFormProperties>({
			business_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			business_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			conversion_rate: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency_code_conversion: new FormControl<string | null | undefined>(undefined),
			customer_address: new FormControl<string | null | undefined>(undefined),
			customer_name: new FormControl<string | null | undefined>(undefined),
			customer_vat_number: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			discount_rate: new FormControl<number | null | undefined>(undefined),
			discount_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			invoice_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo_url: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			price_type: new FormControl<string | null | undefined>(undefined),
			subtotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tax_point: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			zero_rated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Update_Invoice {

		/** Required */
		invoice: Retrieve_Invoice_Array;

		/**
		 * Response code
		 * Required
		 */
		status: string;
	}
	export interface Update_InvoiceFormProperties {

		/**
		 * Response code
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdate_InvoiceFormGroup() {
		return new FormGroup<Update_InvoiceFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Update_Invoice_Array {

		/**
		 * Your business address
		 * Required
		 */
		business_address: string;

		/**
		 * Your business name
		 * Required
		 */
		business_name: string;

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate?: number | null;

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: string;

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion?: string | null;

		/** Your customers address */
		customer_address?: string | null;

		/** Your customers name or trading name */
		customer_name?: string | null;

		/**
		 * Customers VAT number
		 * Required
		 */
		customervat_number: string;

		/** The date the invoice was issued */
		date?: string | null;

		/** The discount rate per item */
		discount_rate?: string | null;

		/**
		 * An array of your invoice items
		 * Required
		 */
		items: Array<Invoice_Items>;

		/** A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended */
		logo_url?: string | null;

		/** Add a note to the invoice. */
		notes?: string | null;

		/** (or 'time of supply') if this is different from the invoice date */
		tax_point?: string | null;

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: string;

		/** Your VAT number */
		vat_number?: string | null;
	}
	export interface Update_Invoice_ArrayFormProperties {

		/**
		 * Your business address
		 * Required
		 */
		business_address: FormControl<string | null | undefined>,

		/**
		 * Your business name
		 * Required
		 */
		business_name: FormControl<string | null | undefined>,

		/**
		 * The rate of conversion at time of supply
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversion_rate: FormControl<number | null | undefined>,

		/**
		 * 3 character currency code for invoice
		 * Required
		 */
		currency_code: FormControl<string | null | undefined>,

		/** 3 character currency code to be converted from original transaction currency */
		currency_code_conversion: FormControl<string | null | undefined>,

		/** Your customers address */
		customer_address: FormControl<string | null | undefined>,

		/** Your customers name or trading name */
		customer_name: FormControl<string | null | undefined>,

		/**
		 * Customers VAT number
		 * Required
		 */
		customervat_number: FormControl<string | null | undefined>,

		/** The date the invoice was issued */
		date: FormControl<string | null | undefined>,

		/** The discount rate per item */
		discount_rate: FormControl<string | null | undefined>,

		/** A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended */
		logo_url: FormControl<string | null | undefined>,

		/** Add a note to the invoice. */
		notes: FormControl<string | null | undefined>,

		/** (or 'time of supply') if this is different from the invoice date */
		tax_point: FormControl<string | null | undefined>,

		/**
		 * The type of invoice. Either 'sale' or 'refund'
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Your VAT number */
		vat_number: FormControl<string | null | undefined>,
	}
	export function CreateUpdate_Invoice_ArrayFormGroup() {
		return new FormGroup<Update_Invoice_ArrayFormProperties>({
			business_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			business_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			conversion_rate: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency_code_conversion: new FormControl<string | null | undefined>(undefined),
			customer_address: new FormControl<string | null | undefined>(undefined),
			customer_name: new FormControl<string | null | undefined>(undefined),
			customervat_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined),
			discount_rate: new FormControl<string | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			tax_point: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vat_Rates {

		/**
		 * An array of the EU VAT countries and their respective rates
		 * Required
		 */
		countries: Array<Vat_Rates_Countries>;

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface Vat_RatesFormProperties {

		/**
		 * Response code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateVat_RatesFormGroup() {
		return new FormGroup<Vat_RatesFormProperties>({
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Vat_Rates_Countries {

		/** Required */
		country_code: Country_Data;
	}
	export interface Vat_Rates_CountriesFormProperties {
	}
	export function CreateVat_Rates_CountriesFormGroup() {
		return new FormGroup<Vat_Rates_CountriesFormProperties>({
		});

	}

	export interface Parking {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: string;

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface ParkingFormProperties {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: FormControl<string | null | undefined>,

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateParkingFormGroup() {
		return new FormGroup<ParkingFormProperties>({
			applies_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Reduced {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: string;

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface ReducedFormProperties {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: FormControl<string | null | undefined>,

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateReducedFormGroup() {
		return new FormGroup<ReducedFormProperties>({
			applies_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Reduced_alt {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: string;

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface Reduced_altFormProperties {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: FormControl<string | null | undefined>,

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateReduced_altFormGroup() {
		return new FormGroup<Reduced_altFormProperties>({
			applies_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Standard {

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface StandardFormProperties {

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateStandardFormGroup() {
		return new FormGroup<StandardFormProperties>({
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Super_reduced {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: string;

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface Super_reducedFormProperties {

		/**
		 * The type of goods the rate applies to
		 * Required
		 */
		applies_to: FormControl<string | null | undefined>,

		/**
		 * The % VAT rate
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateSuper_reducedFormGroup() {
		return new FormGroup<Super_reducedFormProperties>({
			applies_to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a countries VAT rates by its 2 digit country code
		 * Get country-code-check
		 * @param {string} code The 2 digit country code
		 * @return {void} No response was specified
		 */
		Country_code_check(code: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'country-code-check?code=' + (code == null ? '' : encodeURIComponent(code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert a currency
		 * Get currency-conversion
		 * @param {string} currency_from The currency code you are converting from
		 * @param {string} currency_to The currency code you are converting to
		 * @param {number} amount Optional, an amount you are wanting to convert. Leave blank to just get the current rate
		 * @return {void} No response was specified
		 */
		Currency_conversion(currency_from: string, currency_to: string, amount: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'currency-conversion?currency_from=' + (currency_from == null ? '' : encodeURIComponent(currency_from)) + '&currency_to=' + (currency_to == null ? '' : encodeURIComponent(currency_to)) + '&amount=' + amount, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a VAT invoice
		 * Post invoice
		 * @param {Invoice_Data} requestBody Enter invoice data as JSON
		 * @return {void} No response was specified
		 */
		Create_invoice(requestBody: Invoice_Data): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'invoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve an invoice
		 * Get invoice/{id}
		 * @param {number} id Enter the invoice id
		 * @return {void} No response was specified
		 */
		Get_invoice(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'invoice/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing invoice
		 * Put invoice/{id}
		 * @param {number} id Enter an invoice id
		 * @param {Update_Invoice_Array} requestBody Enter invoice data as JSON
		 * @return {void} No response was specified
		 */
		Invoice_update(id: number, requestBody: Update_Invoice_Array): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'invoice/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an invoice
		 * Delete invoice/{id}
		 * @param {number} id Enter an invoice id
		 * @return {void} No response was specified
		 */
		Invoice_delete(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'invoice/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a countries VAT rates from an IP address
		 * Get ip-check
		 * @param {string} address The IP address to search against
		 * @return {void} No response was specified
		 */
		Ip_check(address: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ip-check?address=' + (address == null ? '' : encodeURIComponent(address)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check api requests remaining on current subscription plan
		 * Get usage-check
		 * @return {void} No response was specified
		 */
		Api_usage(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'usage-check', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate a VAT number
		 * <p>We highly recommend if you are able, to check a VAT number on your end first to save wasted API lookups. It maybe that your customer has simply entered the wrong format. <a href='http://www.braemoor.co.uk/software/vat.shtml' target='_blank'>Heres a client side way to check the format using Javascript</a></p>
		 * Get vat-number-check
		 * @param {string} vatid The VAT number to validate
		 * @return {void} No response was specified
		 */
		Vat_number_validate(vatid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vat-number-check?vatid=' + (vatid == null ? '' : encodeURIComponent(vatid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert a price to or from VAT price.
		 * Get vat-price
		 * @param {string} code The 2 digit country code
		 * @param {string} country_rate The VAT rate to get the price for. Default: standard
		 * @param {number} price The price you want converting
		 * @param {string} type Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl'
		 * @return {void} No response was specified
		 */
		Convert_price(code: string, country_rate: string | null | undefined, price: number, type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vat-price?code=' + (code == null ? '' : encodeURIComponent(code)) + '&country_rate=' + (country_rate == null ? '' : encodeURIComponent(country_rate)) + '&price=' + price + '&type=' + (type == null ? '' : encodeURIComponent(type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all current EU VAT rates
		 * Get vat-rates
		 * @return {void} No response was specified
		 */
		Vat_rates(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vat-rates', { observe: 'response', responseType: 'text' });
		}
	}

}

