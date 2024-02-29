import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BulkImportRequest {

		/** Required */
		products: Array<FullProductUpdateRequest>;
	}
	export interface BulkImportRequestFormProperties {
	}
	export function CreateBulkImportRequestFormGroup() {
		return new FormGroup<BulkImportRequestFormProperties>({
		});

	}

	export interface FullProductUpdateRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		categories?: Array<string>;
		category?: CategoryDTO;

		/**
		 * Min length: 0
		 * Max length: 1024
		 */
		description?: string | null;
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;
		metadata?: MetadataDTO;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		name: string;
		online?: OnlineProperties;
		presentation?: PresentationDTO;
		taxCode?: string | null;
		taxExempt?: boolean | null;
		taxRates?: Array<string>;
		unitName?: string | null;

		/** Required */
		uuid: string;
		variantOptionDefinitions?: VariantOptionDefinitions;
		variants?: Array<VariantDTO>;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		vatPercentage?: number | null;
	}
	export interface FullProductUpdateRequestFormProperties {

		/**
		 * Min length: 0
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,
		externalReference: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,
		taxCode: FormControl<string | null | undefined>,
		taxExempt: FormControl<boolean | null | undefined>,
		unitName: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		vatPercentage: FormControl<number | null | undefined>,
	}
	export function CreateFullProductUpdateRequestFormGroup() {
		return new FormGroup<FullProductUpdateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			externalReference: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			taxExempt: new FormControl<boolean | null | undefined>(undefined),
			unitName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vatPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface CategoryDTO {

		/**
		 * Required
		 * Min length: 0
		 * Max length: 100
		 */
		name: string;

		/** Required */
		uuid: string;
	}
	export interface CategoryDTOFormProperties {

		/**
		 * Required
		 * Min length: 0
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateCategoryDTOFormGroup() {
		return new FormGroup<CategoryDTOFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MetadataDTO {

		/** Required */
		inPos: boolean;
		source?: SourceDTO;
	}
	export interface MetadataDTOFormProperties {

		/** Required */
		inPos: FormControl<boolean | null | undefined>,
	}
	export function CreateMetadataDTOFormGroup() {
		return new FormGroup<MetadataDTOFormProperties>({
			inPos: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceDTO {
		external?: boolean | null;
		name?: string | null;
	}
	export interface SourceDTOFormProperties {
		external: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSourceDTOFormGroup() {
		return new FormGroup<SourceDTOFormProperties>({
			external: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OnlineProperties {

		/**
		 * Min length: 0
		 * Max length: 3500
		 */
		description?: string | null;
		presentation?: Presentation;
		seo?: SearchEngineOptimization;
		shipping?: Shipping;

		/** Required */
		status: OnlinePropertiesStatus;

		/**
		 * Min length: 0
		 * Max length: 256
		 */
		title?: string | null;
	}
	export interface OnlinePropertiesFormProperties {

		/**
		 * Min length: 0
		 * Max length: 3500
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<OnlinePropertiesStatus | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 256
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateOnlinePropertiesFormGroup() {
		return new FormGroup<OnlinePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(3500)]),
			status: new FormControl<OnlinePropertiesStatus | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface Presentation {

		/**
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		additionalImageUrls?: Array<string>;
		displayImageUrl?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 8
		 */
		mediaUrls?: Array<string>;
	}
	export interface PresentationFormProperties {
		displayImageUrl: FormControl<string | null | undefined>,
	}
	export function CreatePresentationFormGroup() {
		return new FormGroup<PresentationFormProperties>({
			displayImageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchEngineOptimization {

		/**
		 * Min length: 0
		 * Max length: 320
		 */
		metaDescription?: string | null;

		/**
		 * Min length: 1
		 * Max length: 256
		 */
		slug?: string | null;

		/**
		 * Min length: 0
		 * Max length: 256
		 */
		title?: string | null;
	}
	export interface SearchEngineOptimizationFormProperties {

		/**
		 * Min length: 0
		 * Max length: 320
		 */
		metaDescription: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 256
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 256
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSearchEngineOptimizationFormGroup() {
		return new FormGroup<SearchEngineOptimizationFormProperties>({
			metaDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(320)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface Shipping {
		shippingPricingModel?: ShippingShippingPricingModel | null;
		weight?: Weight;

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		weightInGrams?: string | null;
	}
	export interface ShippingFormProperties {
		shippingPricingModel: FormControl<ShippingShippingPricingModel | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		weightInGrams: FormControl<string | null | undefined>,
	}
	export function CreateShippingFormGroup() {
		return new FormGroup<ShippingFormProperties>({
			shippingPricingModel: new FormControl<ShippingShippingPricingModel | null | undefined>(undefined),
			weightInGrams: new FormControl<string | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export enum ShippingShippingPricingModel { FREE = 'FREE', STANDARD = 'STANDARD' }

	export interface Weight {

		/** Required */
		unit: WeightUnit;

		/**
		 * Required
		 * Minimum: 0
		 */
		weight: number;
	}
	export interface WeightFormProperties {

		/** Required */
		unit: FormControl<WeightUnit | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateWeightFormGroup() {
		return new FormGroup<WeightFormProperties>({
			unit: new FormControl<WeightUnit | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export enum WeightUnit { kg = 'kg', g = 'g', oz = 'oz', lb = 'lb' }

	export enum OnlinePropertiesStatus { ACTIVE = 'ACTIVE', HIDDEN = 'HIDDEN' }

	export interface PresentationDTO {
		backgroundColor?: string | null;
		imageUrl?: string | null;
		textColor?: string | null;
	}
	export interface PresentationDTOFormProperties {
		backgroundColor: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		textColor: FormControl<string | null | undefined>,
	}
	export function CreatePresentationDTOFormGroup() {
		return new FormGroup<PresentationDTOFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			textColor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VariantOptionDefinitions {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		definitions: Array<VariantOptionDefinition>;
	}
	export interface VariantOptionDefinitionsFormProperties {
	}
	export function CreateVariantOptionDefinitionsFormGroup() {
		return new FormGroup<VariantOptionDefinitionsFormProperties>({
		});

	}

	export interface VariantOptionDefinition {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 30
		 */
		name: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 99
		 */
		properties: Array<VariantOptionProperties>;
	}
	export interface VariantOptionDefinitionFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 30
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVariantOptionDefinitionFormGroup() {
		return new FormGroup<VariantOptionDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
		});

	}

	export interface VariantOptionProperties {

		/**
		 * Min length: 1
		 * Max length: 256
		 */
		imageUrl?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		value: string;
	}
	export interface VariantOptionPropertiesFormProperties {

		/**
		 * Min length: 1
		 * Max length: 256
		 */
		imageUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariantOptionPropertiesFormGroup() {
		return new FormGroup<VariantOptionPropertiesFormProperties>({
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface VariantDTO {

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		barcode?: string | null;
		costPrice?: Price;

		/**
		 * Min length: 0
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * Min length: 0
		 * Max length: 256
		 */
		name?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 99
		 */
		options?: Array<VariantOption>;
		presentation?: PresentationDTO;
		price?: Price;

		/**
		 * Min length: 0
		 * Max length: 64
		 */
		sku?: string | null;

		/** Required */
		uuid: string;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		vatPercentage?: number | null;
	}
	export interface VariantDTOFormProperties {

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		barcode: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 64
		 */
		sku: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		vatPercentage: FormControl<number | null | undefined>,
	}
	export function CreateVariantDTOFormGroup() {
		return new FormGroup<VariantDTOFormProperties>({
			barcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vatPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface Price {

		/**
		 * Required
		 * Minimum: 0
		 */
		amount: string;

		/** Required */
		currencyId: PriceCurrencyId;
	}
	export interface PriceFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		amount: FormControl<string | null | undefined>,

		/** Required */
		currencyId: FormControl<PriceCurrencyId | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			currencyId: new FormControl<PriceCurrencyId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PriceCurrencyId { AED = 'AED', AFA = 'AFA', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZM = 'AZM', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHF = 'CHF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', CRC = 'CRC', CSD = 'CSD', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CYP = 'CYP', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EEK = 'EEK', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GGP = 'GGP', GHC = 'GHC', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', IMP = 'IMP', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JEP = 'JEP', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LTL = 'LTL', LVL = 'LVL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MTL = 'MTL', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MYR = 'MYR', MZM = 'MZM', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDD = 'SDD', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SIT = 'SIT', SKK = 'SKK', SLL = 'SLL', SOS = 'SOS', SPL = 'SPL', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMM = 'TMM', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRL = 'TRL', TRY = 'TRY', TTD = 'TTD', TVD = 'TVD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', UYU = 'UYU', UZS = 'UZS', VEB = 'VEB', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', YER = 'YER', ZAR = 'ZAR', ZMK = 'ZMK', ZMW = 'ZMW', ZWD = 'ZWD', ZWL = 'ZWL' }

	export interface VariantOption {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 30
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		value: string;
	}
	export interface VariantOptionFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 30
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariantOptionFormGroup() {
		return new FormGroup<VariantOptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface CategoryResponse {

		/** Required */
		categories: Array<CategoryDTO>;
	}
	export interface CategoryResponseFormProperties {
	}
	export function CreateCategoryResponseFormGroup() {
		return new FormGroup<CategoryResponseFormProperties>({
		});

	}

	export interface ConstraintViolation {
		constraintType?: ConstraintViolationConstraintType | null;
		developerMessage?: string | null;
		expected?: string | null;
		propertyName?: string | null;
		value?: string | null;
	}
	export interface ConstraintViolationFormProperties {
		constraintType: FormControl<ConstraintViolationConstraintType | null | undefined>,
		developerMessage: FormControl<string | null | undefined>,
		expected: FormControl<string | null | undefined>,
		propertyName: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateConstraintViolationFormGroup() {
		return new FormGroup<ConstraintViolationFormProperties>({
			constraintType: new FormControl<ConstraintViolationConstraintType | null | undefined>(undefined),
			developerMessage: new FormControl<string | null | undefined>(undefined),
			expected: new FormControl<string | null | undefined>(undefined),
			propertyName: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConstraintViolationConstraintType { MUST_BE_FALSE = 'MUST_BE_FALSE', MUST_BE_TRUE = 'MUST_BE_TRUE', MUST_BE_LESS_THAN = 'MUST_BE_LESS_THAN', MUST_BE_GREATER_THAN = 'MUST_BE_GREATER_THAN', DIGIT_OUT_OF_BOUNDS = 'DIGIT_OUT_OF_BOUNDS', DATE_MUST_BE_IN_THE_FUTURE = 'DATE_MUST_BE_IN_THE_FUTURE', MUST_BE_LESS_OR_EQUAL_THAN = 'MUST_BE_LESS_OR_EQUAL_THAN', MUST_BE_GREATER_OR_EQUAL_TO = 'MUST_BE_GREATER_OR_EQUAL_TO', MUST_NOT_BE_NULL = 'MUST_NOT_BE_NULL', MUST_BE_NULL = 'MUST_BE_NULL', DATE_MUST_BE_IN_THE_PAST = 'DATE_MUST_BE_IN_THE_PAST', MUST_MATCH_PATTERN = 'MUST_MATCH_PATTERN', INVALID_SIZE = 'INVALID_SIZE', INVALID_EMAIL = 'INVALID_EMAIL', MUST_NOT_BE_EMPTY = 'MUST_NOT_BE_EMPTY', INVALID_RANGE = 'INVALID_RANGE', UNKNOWN = 'UNKNOWN' }

	export interface CreateCategoriesRequest {

		/** Required */
		categories: Array<CategoryDTO>;
	}
	export interface CreateCategoriesRequestFormProperties {
	}
	export function CreateCreateCategoriesRequestFormGroup() {
		return new FormGroup<CreateCategoriesRequestFormProperties>({
		});

	}

	export interface CreateSlugRequest {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		productName: string;
	}
	export interface CreateSlugRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		productName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlugRequestFormGroup() {
		return new FormGroup<CreateSlugRequestFormProperties>({
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface DiscountRequest {
		amount?: Price;

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		description?: string | null;

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;

		/**
		 * Min length: 0
		 * Max length: 64
		 */
		name?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percentage?: number | null;

		/** Required */
		uuid: string;
	}
	export interface DiscountRequestFormProperties {

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		externalReference: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percentage: FormControl<number | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateDiscountRequestFormGroup() {
		return new FormGroup<DiscountRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			externalReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			percentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DiscountResponse {
		amount?: Price;

		/** Required */
		created: Date;
		description?: string | null;

		/** Required */
		etag: string;
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;

		/** Required */
		name: string;

		/** Type: double */
		percentage?: number | null;

		/** Required */
		updated: Date;
		updatedBy?: string | null;

		/** Required */
		uuid: string;
	}
	export interface DiscountResponseFormProperties {

		/** Required */
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		etag: FormControl<string | null | undefined>,
		externalReference: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Type: double */
		percentage: FormControl<number | null | undefined>,

		/** Required */
		updated: FormControl<Date | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateDiscountResponseFormGroup() {
		return new FormGroup<DiscountResponseFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalReference: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			percentage: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorResponse {
		developerMessage?: string | null;
		errorType?: string | null;
		violations?: Array<ConstraintViolation>;
	}
	export interface ErrorResponseFormProperties {
		developerMessage: FormControl<string | null | undefined>,
		errorType: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			developerMessage: new FormControl<string | null | undefined>(undefined),
			errorType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportResponse {
		created?: Date | null;
		errorMessage?: string | null;
		finished?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		items?: string | null;
		state?: ImportResponseState | null;
		uuid?: string | null;
	}
	export interface ImportResponseFormProperties {
		created: FormControl<Date | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		finished: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		items: FormControl<string | null | undefined>,
		state: FormControl<ImportResponseState | null | undefined>,
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateImportResponseFormGroup() {
		return new FormGroup<ImportResponseFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			finished: new FormControl<Date | null | undefined>(undefined),
			items: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ImportResponseState | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportResponseState { IMPORTING = 'IMPORTING', FINISHED_SUCCESS = 'FINISHED_SUCCESS', FINISHED_FAILED = 'FINISHED_FAILED' }

	export interface LibraryImagesResponse {
		imageUrls?: Array<string>;
	}
	export interface LibraryImagesResponseFormProperties {
	}
	export function CreateLibraryImagesResponseFormGroup() {
		return new FormGroup<LibraryImagesResponseFormProperties>({
		});

	}

	export interface LibraryResponse {
		deletedDiscounts?: Array<string>;
		deletedProducts?: Array<string>;
		discounts?: Array<DiscountResponse>;
		fromEventLogUuid?: string | null;
		products?: Array<ProductResponse>;
		untilEventLogUuid?: string | null;
	}
	export interface LibraryResponseFormProperties {
		fromEventLogUuid: FormControl<string | null | undefined>,
		untilEventLogUuid: FormControl<string | null | undefined>,
	}
	export function CreateLibraryResponseFormGroup() {
		return new FormGroup<LibraryResponseFormProperties>({
			fromEventLogUuid: new FormControl<string | null | undefined>(undefined),
			untilEventLogUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		categories?: Array<string>;
		category?: CategoryDTO;

		/** Required */
		created: Date;
		description?: string | null;

		/** Required */
		etag: string;
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;
		metadata?: MetadataDTO;

		/** Required */
		name: string;
		online?: OnlineProperties;
		presentation?: PresentationDTO;
		taxCode?: string | null;
		taxExempt?: boolean | null;
		taxRates?: Array<string>;
		unitName?: string | null;

		/** Required */
		updated: Date;
		updatedBy?: string | null;

		/** Required */
		uuid: string;
		variantOptionDefinitions?: VariantOptionDefinitions;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 99
		 */
		variants: Array<VariantDTO>;

		/** Type: double */
		vatPercentage?: number | null;
	}
	export interface ProductResponseFormProperties {

		/** Required */
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		etag: FormControl<string | null | undefined>,
		externalReference: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		taxCode: FormControl<string | null | undefined>,
		taxExempt: FormControl<boolean | null | undefined>,
		unitName: FormControl<string | null | undefined>,

		/** Required */
		updated: FormControl<Date | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,

		/** Type: double */
		vatPercentage: FormControl<number | null | undefined>,
	}
	export function CreateProductResponseFormGroup() {
		return new FormGroup<ProductResponseFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalReference: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			taxExempt: new FormControl<boolean | null | undefined>(undefined),
			unitName: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vatPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Option {
		name?: string | null;
		values?: Array<string>;
	}
	export interface OptionFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductCountResponse {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		productCount: number;
	}
	export interface ProductCountResponseFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		productCount: FormControl<number | null | undefined>,
	}
	export function CreateProductCountResponseFormGroup() {
		return new FormGroup<ProductCountResponseFormProperties>({
			productCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductCreateRequest {
		categories?: Array<string>;
		category?: CategoryDTO;
		createWithDefaultTax?: boolean | null;

		/**
		 * Min length: 0
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;
		metadata?: MetadataDTO;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		name: string;
		online?: OnlineProperties;
		presentation?: PresentationDTO;
		taxCode?: string | null;
		taxExempt?: boolean | null;
		taxRates?: Array<string>;

		/**
		 * Min length: 0
		 * Max length: 32
		 */
		unitName?: string | null;

		/** Required */
		uuid: string;
		variantOptionDefinitions?: VariantOptionDefinitions;
		variants?: Array<VariantDTO>;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		vatPercentage?: number | null;
	}
	export interface ProductCreateRequestFormProperties {
		createWithDefaultTax: FormControl<boolean | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 128
		 */
		externalReference: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,
		taxCode: FormControl<string | null | undefined>,
		taxExempt: FormControl<boolean | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 32
		 */
		unitName: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		vatPercentage: FormControl<number | null | undefined>,
	}
	export function CreateProductCreateRequestFormGroup() {
		return new FormGroup<ProductCreateRequestFormProperties>({
			createWithDefaultTax: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			externalReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			taxExempt: new FormControl<boolean | null | undefined>(undefined),
			unitName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(32)]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vatPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface RenameCategoryRequest {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;
	}
	export interface RenameCategoryRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRenameCategoryRequestFormGroup() {
		return new FormGroup<RenameCategoryRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('\S|\S.*\S')]),
		});

	}

	export interface SlugResponse {
		productName?: string | null;
		slug?: string | null;
	}
	export interface SlugResponseFormProperties {
		productName: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
	}
	export function CreateSlugResponseFormGroup() {
		return new FormGroup<SlugResponseFormProperties>({
			productName: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRate {
		default?: boolean | null;

		/**
		 * Required
		 * Min length: 0
		 * Max length: 512
		 */
		label: string;

		/** Maximum: 100 */
		percentage?: number | null;

		/** Required */
		uuid: string;
	}
	export interface TaxRateFormProperties {
		default: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 0
		 * Max length: 512
		 */
		label: FormControl<string | null | undefined>,

		/** Maximum: 100 */
		percentage: FormControl<number | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateTaxRateFormGroup() {
		return new FormGroup<TaxRateFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(512)]),
			percentage: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TaxRateProductCount {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		taxRateUuid?: string | null;
	}
	export interface TaxRateProductCountFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		taxRateUuid: FormControl<string | null | undefined>,
	}
	export function CreateTaxRateProductCountFormGroup() {
		return new FormGroup<TaxRateProductCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			taxRateUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRateProductCountResponse {
		counts?: Array<TaxRateProductCount>;
	}
	export interface TaxRateProductCountResponseFormProperties {
	}
	export function CreateTaxRateProductCountResponseFormGroup() {
		return new FormGroup<TaxRateProductCountResponseFormProperties>({
		});

	}

	export interface TaxRateUpdateRequest {
		default?: boolean | null;

		/**
		 * Min length: 0
		 * Max length: 512
		 */
		label?: string | null;

		/** Maximum: 100 */
		percentage?: number | null;
	}
	export interface TaxRateUpdateRequestFormProperties {
		default: FormControl<boolean | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 512
		 */
		label: FormControl<string | null | undefined>,

		/** Maximum: 100 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateTaxRateUpdateRequestFormGroup() {
		return new FormGroup<TaxRateUpdateRequestFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			percentage: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
		});

	}

	export interface TaxRatesCreateRequest {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 15
		 */
		taxRates: Array<TaxRate>;
	}
	export interface TaxRatesCreateRequestFormProperties {
	}
	export function CreateTaxRatesCreateRequestFormGroup() {
		return new FormGroup<TaxRatesCreateRequestFormProperties>({
		});

	}

	export interface TaxRatesResponse {
		taxRates?: Array<TaxRate>;
	}
	export interface TaxRatesResponseFormProperties {
	}
	export function CreateTaxRatesResponseFormGroup() {
		return new FormGroup<TaxRatesResponseFormProperties>({
		});

	}

	export interface TaxSettingsResponse {
		organizationUuid?: string | null;
		taxationMode?: TaxSettingsResponseTaxationMode | null;
		taxationType?: TaxSettingsResponseTaxationType | null;
	}
	export interface TaxSettingsResponseFormProperties {
		organizationUuid: FormControl<string | null | undefined>,
		taxationMode: FormControl<TaxSettingsResponseTaxationMode | null | undefined>,
		taxationType: FormControl<TaxSettingsResponseTaxationType | null | undefined>,
	}
	export function CreateTaxSettingsResponseFormGroup() {
		return new FormGroup<TaxSettingsResponseFormProperties>({
			organizationUuid: new FormControl<string | null | undefined>(undefined),
			taxationMode: new FormControl<TaxSettingsResponseTaxationMode | null | undefined>(undefined),
			taxationType: new FormControl<TaxSettingsResponseTaxationType | null | undefined>(undefined),
		});

	}

	export enum TaxSettingsResponseTaxationMode { EXCLUSIVE = 'EXCLUSIVE', INCLUSIVE = 'INCLUSIVE' }

	export enum TaxSettingsResponseTaxationType { NONE = 'NONE', SALES_TAX = 'SALES_TAX', VAT = 'VAT' }

	export interface TaxSettingsUpdateRequest {

		/** Required */
		taxationMode: TaxSettingsResponseTaxationMode;
	}
	export interface TaxSettingsUpdateRequestFormProperties {

		/** Required */
		taxationMode: FormControl<TaxSettingsResponseTaxationMode | null | undefined>,
	}
	export function CreateTaxSettingsUpdateRequestFormGroup() {
		return new FormGroup<TaxSettingsUpdateRequestFormProperties>({
			taxationMode: new FormControl<TaxSettingsResponseTaxationMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VariantOptionsResponse {
		options?: Array<Option>;
	}
	export interface VariantOptionsResponseFormProperties {
	}
	export function CreateVariantOptionsResponseFormGroup() {
		return new FormGroup<VariantOptionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve all categories
		 * Get organizations/{organizationUuid}/categories/v2
		 * @return {CategoryResponse} List of all categories
		 */
		GetProductTypes(organizationUuid: string): Observable<CategoryResponse> {
			return this.http.get<CategoryResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/categories/v2', {});
		}

		/**
		 * Create a new category
		 * Post organizations/{organizationUuid}/categories/v2
		 * @return {void} 
		 */
		CreateCategories(organizationUuid: string, requestBody: CreateCategoriesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/categories/v2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a category
		 * Delete organizations/{organizationUuid}/categories/v2/{categoryUuid}
		 * @return {void} 
		 */
		DeleteCategory(organizationUuid: string, categoryUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/categories/v2/' + (categoryUuid == null ? '' : encodeURIComponent(categoryUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rename a category
		 * Patch organizations/{organizationUuid}/categories/v2/{categoryUuid}
		 * @return {void} 
		 */
		RenameCategory(organizationUuid: string, categoryUuid: string, requestBody: RenameCategoryRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/categories/v2/' + (categoryUuid == null ? '' : encodeURIComponent(categoryUuid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all discounts
		 * Get organizations/{organizationUuid}/discounts
		 * @return {Array<DiscountResponse>} List of all discounts
		 */
		GetAllDiscounts(organizationUuid: string): Observable<Array<DiscountResponse>> {
			return this.http.get<Array<DiscountResponse>>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/discounts', {});
		}

		/**
		 * Create a discount
		 * Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header
		 * Post organizations/{organizationUuid}/discounts
		 * @return {void} 
		 */
		CreateDiscount(organizationUuid: string, requestBody: DiscountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/discounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a single discount
		 * Delete organizations/{organizationUuid}/discounts/{discountUuid}
		 * @return {void} 
		 */
		DeleteDiscount(organizationUuid: string, discountUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/discounts/' + (discountUuid == null ? '' : encodeURIComponent(discountUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a single discount
		 * Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.
		 * Get organizations/{organizationUuid}/discounts/{discountUuid}
		 * @return {DiscountResponse} Discount
		 */
		GetDiscount(organizationUuid: string, discountUuid: string): Observable<DiscountResponse> {
			return this.http.get<DiscountResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/discounts/' + (discountUuid == null ? '' : encodeURIComponent(discountUuid)), {});
		}

		/**
		 * Update a single discount
		 * Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.
		 * Put organizations/{organizationUuid}/discounts/{discountUuid}
		 * @return {void} 
		 */
		UpdateDiscount(organizationUuid: string, discountUuid: string, requestBody: DiscountRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/discounts/' + (discountUuid == null ? '' : encodeURIComponent(discountUuid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all library item images
		 * Retrieves all library items images used by the organization, sorted by updated date
		 * Get organizations/{organizationUuid}/images
		 * @return {LibraryImagesResponse} List of all image urls
		 */
		GetAllImageUrls(organizationUuid: string): Observable<LibraryImagesResponse> {
			return this.http.get<LibraryImagesResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/images', {});
		}

		/**
		 * Get status for latest import
		 * Get organizations/{organizationUuid}/import/status
		 * @return {ImportResponse} Import status
		 */
		GetLatestImportStatus(organizationUuid: string): Observable<ImportResponse> {
			return this.http.get<ImportResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/import/status', {});
		}

		/**
		 * Get status for an import
		 * Get organizations/{organizationUuid}/import/status/{importUuid}
		 * @return {ImportResponse} Import status
		 */
		GetStatusByUuid(organizationUuid: string, importUuid: string): Observable<ImportResponse> {
			return this.http.get<ImportResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/import/status/' + (importUuid == null ? '' : encodeURIComponent(importUuid)), {});
		}

		/**
		 * Import library items
		 * Post organizations/{organizationUuid}/import/v2
		 * @return {ImportResponse} Import status
		 */
		ImportLibraryV2(organizationUuid: string, requestBody: BulkImportRequest): Observable<ImportResponse> {
			return this.http.post<ImportResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/import/v2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the entire library
		 * Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:
		 * <https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"
		 * where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any "next" value, all items have been sent to the client.
		 * Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:
		 * IETF: https://tools.ietf.org/html/rfc5988
		 * GitHub: https://developer.github.com/guides/traversing-with-pagination/
		 * If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.
		 * Get organizations/{organizationUuid}/library
		 * @param {number} limit Minimum: 1
		 *     Maximum: 500
		 * @return {LibraryResponse} List of library items
		 */
		GetLibrary(organizationUuid: string, eventLogUuid: string | null | undefined, limit: number | null | undefined, offset: string | null | undefined, all: boolean | null | undefined): Observable<LibraryResponse> {
			return this.http.get<LibraryResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/library&eventLogUuid=' + (eventLogUuid == null ? '' : encodeURIComponent(eventLogUuid)) + '&limit=' + limit + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&all=' + all, {});
		}

		/**
		 * Delete a list of products
		 * Delete organizations/{organizationUuid}/products
		 * @param {Array<string>} uuid List of product UUIDs to be deleted
		 * @return {void} 
		 */
		DeleteProducts(organizationUuid: string, uuid: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products&' + uuid.map(z => `uuid=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all products visible in POS
		 * Get organizations/{organizationUuid}/products
		 * @return {Array<ProductResponse>} A list of products
		 */
		GetAllProductsInPos(organizationUuid: string): Observable<Array<ProductResponse>> {
			return this.http.get<Array<ProductResponse>>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products', {});
		}

		/**
		 * Create a new product
		 * Post organizations/{organizationUuid}/products
		 * @return {void} 
		 */
		CreateProduct(organizationUuid: string, returnEntity: boolean | null | undefined, requestBody: ProductCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products&returnEntity=' + returnEntity, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a product identifier
		 * Creates a unique slug (identifier) for a product. The slug is used to create a product URL
		 * Post organizations/{organizationUuid}/products/online/slug
		 * @return {SlugResponse} Product slug
		 */
		CreateProductSlug(organizationUuid: string, requestBody: CreateSlugRequest): Observable<SlugResponse> {
			return this.http.post<SlugResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products/online/slug', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve an aggregate of active Options in the library
		 * Get organizations/{organizationUuid}/products/options
		 * @return {Array<VariantOptionsResponse>} List of Options
		 */
		GetAllOptions(organizationUuid: string): Observable<Array<VariantOptionsResponse>> {
			return this.http.get<Array<VariantOptionsResponse>>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products/options', {});
		}

		/**
		 * Retrieve all products visible in POS – v2
		 * Get organizations/{organizationUuid}/products/v2
		 * @param {boolean} sort If true, sorts response by created date
		 * @return {Array<ProductResponse>} A list of products
		 */
		GetAllProductsV2(organizationUuid: string, sort: boolean | null | undefined): Observable<Array<ProductResponse>> {
			return this.http.get<Array<ProductResponse>>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products/v2&sort=' + sort, {});
		}

		/**
		 * Retrieve the count of existing products
		 * Get organizations/{organizationUuid}/products/v2/count
		 * @return {Array<ProductCountResponse>} Count of existing products
		 */
		CountAllProducts(organizationUuid: string): Observable<Array<ProductCountResponse>> {
			return this.http.get<Array<ProductCountResponse>>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products/v2/count', {});
		}

		/**
		 * Update a single product
		 * Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
		 * Put organizations/{organizationUuid}/products/v2/{productUuid}
		 * @return {void} 
		 */
		UpdateProduct(organizationUuid: string, productUuid: string, requestBody: FullProductUpdateRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products/v2/' + (productUuid == null ? '' : encodeURIComponent(productUuid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a single product
		 * Delete organizations/{organizationUuid}/products/{productUuid}
		 * @return {void} 
		 */
		DeleteProduct(organizationUuid: string, productUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products/' + (productUuid == null ? '' : encodeURIComponent(productUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a single product
		 * Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
		 * Get organizations/{organizationUuid}/products/{productUuid}
		 * @return {ProductResponse} Product
		 */
		GetProduct(organizationUuid: string, productUuid: string): Observable<ProductResponse> {
			return this.http.get<ProductResponse>(this.baseUri + 'organizations/' + (organizationUuid == null ? '' : encodeURIComponent(organizationUuid)) + '/products/' + (productUuid == null ? '' : encodeURIComponent(productUuid)), {});
		}

		/**
		 * Get all available tax rates
		 * Get v1/taxes
		 * @return {Array<TaxRatesResponse>} List of tax rates
		 */
		GetTaxRates(): Observable<Array<TaxRatesResponse>> {
			return this.http.get<Array<TaxRatesResponse>>(this.baseUri + 'v1/taxes', {});
		}

		/**
		 * Create new tax rates
		 * Post v1/taxes
		 * @return {void} 
		 */
		CreateTaxRates(requestBody: TaxRatesCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/taxes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all tax rates and a count of products associated with each
		 * Get v1/taxes/count
		 * @return {TaxRateProductCountResponse} Count of products for each tax rate
		 */
		GetProductCountForAllTaxes(): Observable<TaxRateProductCountResponse> {
			return this.http.get<TaxRateProductCountResponse>(this.baseUri + 'v1/taxes/count', {});
		}

		/**
		 * Get the organization tax settings
		 * Get v1/taxes/settings
		 * @return {TaxSettingsResponse} Tax settings
		 */
		GetTaxSettings(): Observable<TaxSettingsResponse> {
			return this.http.get<TaxSettingsResponse>(this.baseUri + 'v1/taxes/settings', {});
		}

		/**
		 * Update the organization tax settings
		 * Put v1/taxes/settings
		 * @return {TaxSettingsResponse} Updated tax settings
		 */
		SetTaxationMode(requestBody: TaxSettingsUpdateRequest): Observable<TaxSettingsResponse> {
			return this.http.put<TaxSettingsResponse>(this.baseUri + 'v1/taxes/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a single tax rate
		 * Delete v1/taxes/{taxRateUuid}
		 * @return {void} 
		 */
		DeleteTaxRate(taxRateUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/taxes/' + (taxRateUuid == null ? '' : encodeURIComponent(taxRateUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single tax rate
		 * Get v1/taxes/{taxRateUuid}
		 * @return {TaxRate} Single tax rate
		 */
		GetTaxRate(taxRateUuid: string): Observable<TaxRate> {
			return this.http.get<TaxRate>(this.baseUri + 'v1/taxes/' + (taxRateUuid == null ? '' : encodeURIComponent(taxRateUuid)), {});
		}

		/**
		 * Update a single tax rate
		 * Put v1/taxes/{taxRateUuid}
		 * @return {TaxRate} Updated tax rate
		 */
		UpdateTaxRate(taxRateUuid: string, requestBody: TaxRateUpdateRequest): Observable<TaxRate> {
			return this.http.put<TaxRate>(this.baseUri + 'v1/taxes/' + (taxRateUuid == null ? '' : encodeURIComponent(taxRateUuid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

