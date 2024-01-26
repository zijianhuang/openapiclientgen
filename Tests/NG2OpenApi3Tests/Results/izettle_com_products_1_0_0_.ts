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
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;
		metadata?: MetadataDTO;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		externalReference: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
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
		 * Max length: 100
		 * Min length: 0
		 */
		name: string;

		/** Required */
		uuid: string;
	}
	export interface CategoryDTOFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 0
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
		 * Max length: 3500
		 * Min length: 0
		 */
		description?: string | null;
		presentation?: Presentation;
		seo?: SearchEngineOptimization;
		shipping?: Shipping;

		/** Required */
		status: OnlinePropertiesStatus;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		title?: string | null;
	}
	export interface OnlinePropertiesFormProperties {

		/**
		 * Max length: 3500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<OnlinePropertiesStatus | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
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
		 * Max length: 320
		 * Min length: 0
		 */
		metaDescription?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		slug?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		title?: string | null;
	}
	export interface SearchEngineOptimizationFormProperties {

		/**
		 * Max length: 320
		 * Min length: 0
		 */
		metaDescription: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
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
		weightInGrams?: number | null;
	}
	export interface ShippingFormProperties {
		shippingPricingModel: FormControl<ShippingShippingPricingModel | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		weightInGrams: FormControl<number | null | undefined>,
	}
	export function CreateShippingFormGroup() {
		return new FormGroup<ShippingFormProperties>({
			shippingPricingModel: new FormControl<ShippingShippingPricingModel | null | undefined>(undefined),
			weightInGrams: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export enum ShippingShippingPricingModel { FREE = 0, STANDARD = 1 }

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

	export enum WeightUnit { kg = 0, g = 1, oz = 2, lb = 3 }

	export enum OnlinePropertiesStatus { ACTIVE = 0, HIDDEN = 1 }

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
		 * Max length: 30
		 * Min length: 1
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
		 * Max length: 30
		 * Min length: 1
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
		 * Max length: 256
		 * Min length: 1
		 */
		imageUrl?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		value: string;
	}
	export interface VariantOptionPropertiesFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		imageUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
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
		 * Max length: 128
		 * Min length: 0
		 */
		barcode?: string | null;
		costPrice?: Price;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
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
		 * Max length: 64
		 * Min length: 0
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
		 * Max length: 128
		 * Min length: 0
		 */
		barcode: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
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
		amount: number;

		/** Required */
		currencyId: PriceCurrencyId;
	}
	export interface PriceFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		amount: FormControl<number | null | undefined>,

		/** Required */
		currencyId: FormControl<PriceCurrencyId | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			currencyId: new FormControl<PriceCurrencyId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PriceCurrencyId { AED = 0, AFA = 1, AFN = 2, ALL = 3, AMD = 4, ANG = 5, AOA = 6, ARS = 7, AUD = 8, AWG = 9, AZM = 10, AZN = 11, BAM = 12, BBD = 13, BDT = 14, BGN = 15, BHD = 16, BIF = 17, BMD = 18, BND = 19, BOB = 20, BRL = 21, BSD = 22, BTN = 23, BWP = 24, BYR = 25, BZD = 26, CAD = 27, CDF = 28, CHF = 29, CLP = 30, CNY = 31, COP = 32, CRC = 33, CSD = 34, CUC = 35, CUP = 36, CVE = 37, CYP = 38, CZK = 39, DJF = 40, DKK = 41, DOP = 42, DZD = 43, EEK = 44, EGP = 45, ERN = 46, ETB = 47, EUR = 48, FJD = 49, FKP = 50, GBP = 51, GEL = 52, GGP = 53, GHC = 54, GHS = 55, GIP = 56, GMD = 57, GNF = 58, GTQ = 59, GYD = 60, HKD = 61, HNL = 62, HRK = 63, HTG = 64, HUF = 65, IDR = 66, ILS = 67, IMP = 68, INR = 69, IQD = 70, IRR = 71, ISK = 72, JEP = 73, JMD = 74, JOD = 75, JPY = 76, KES = 77, KGS = 78, KHR = 79, KMF = 80, KPW = 81, KRW = 82, KWD = 83, KYD = 84, KZT = 85, LAK = 86, LBP = 87, LKR = 88, LRD = 89, LSL = 90, LTL = 91, LVL = 92, LYD = 93, MAD = 94, MDL = 95, MGA = 96, MKD = 97, MMK = 98, MNT = 99, MOP = 100, MRO = 101, MTL = 102, MUR = 103, MVR = 104, MWK = 105, MXN = 106, MYR = 107, MZM = 108, MZN = 109, NAD = 110, NGN = 111, NIO = 112, NOK = 113, NPR = 114, NZD = 115, OMR = 116, PAB = 117, PEN = 118, PGK = 119, PHP = 120, PKR = 121, PLN = 122, PYG = 123, QAR = 124, RON = 125, RSD = 126, RUB = 127, RWF = 128, SAR = 129, SBD = 130, SCR = 131, SDD = 132, SDG = 133, SEK = 134, SGD = 135, SHP = 136, SIT = 137, SKK = 138, SLL = 139, SOS = 140, SPL = 141, SRD = 142, SSP = 143, STD = 144, SVC = 145, SYP = 146, SZL = 147, THB = 148, TJS = 149, TMM = 150, TMT = 151, TND = 152, TOP = 153, TRL = 154, TRY = 155, TTD = 156, TVD = 157, TWD = 158, TZS = 159, UAH = 160, UGX = 161, USD = 162, UYU = 163, UZS = 164, VEB = 165, VEF = 166, VND = 167, VUV = 168, WST = 169, XAF = 170, XAG = 171, XAU = 172, XCD = 173, XDR = 174, XOF = 175, XPD = 176, XPF = 177, XPT = 178, YER = 179, ZAR = 180, ZMK = 181, ZMW = 182, ZWD = 183, ZWL = 184 }

	export interface VariantOption {

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		value: string;
	}
	export interface VariantOptionFormProperties {

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
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

	export enum ConstraintViolationConstraintType { MUST_BE_FALSE = 0, MUST_BE_TRUE = 1, MUST_BE_LESS_THAN = 2, MUST_BE_GREATER_THAN = 3, DIGIT_OUT_OF_BOUNDS = 4, DATE_MUST_BE_IN_THE_FUTURE = 5, MUST_BE_LESS_OR_EQUAL_THAN = 6, MUST_BE_GREATER_OR_EQUAL_TO = 7, MUST_NOT_BE_NULL = 8, MUST_BE_NULL = 9, DATE_MUST_BE_IN_THE_PAST = 10, MUST_MATCH_PATTERN = 11, INVALID_SIZE = 12, INVALID_EMAIL = 13, MUST_NOT_BE_EMPTY = 14, INVALID_RANGE = 15, UNKNOWN = 16 }

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
		 * Max length: 256
		 * Min length: 1
		 */
		productName: string;
	}
	export interface CreateSlugRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
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
		 * Max length: 128
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;

		/**
		 * Max length: 64
		 * Min length: 0
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
		 * Max length: 128
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		externalReference: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
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
		items?: number | null;
		state?: ImportResponseState | null;
		uuid?: string | null;
	}
	export interface ImportResponseFormProperties {
		created: FormControl<Date | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		finished: FormControl<Date | null | undefined>,
		items: FormControl<number | null | undefined>,
		state: FormControl<ImportResponseState | null | undefined>,
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateImportResponseFormGroup() {
		return new FormGroup<ImportResponseFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			finished: new FormControl<Date | null | undefined>(undefined),
			items: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<ImportResponseState | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportResponseState { IMPORTING = 0, FINISHED_SUCCESS = 1, FINISHED_FAILED = 2 }

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

		/** Required */
		productCount: number;
	}
	export interface ProductCountResponseFormProperties {

		/** Required */
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
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		externalReference?: string | null;
		imageLookupKeys?: Array<string>;
		metadata?: MetadataDTO;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
		online?: OnlineProperties;
		presentation?: PresentationDTO;
		taxCode?: string | null;
		taxExempt?: boolean | null;
		taxRates?: Array<string>;

		/**
		 * Max length: 32
		 * Min length: 0
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
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		externalReference: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		taxCode: FormControl<string | null | undefined>,
		taxExempt: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 0
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
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;
	}
	export interface RenameCategoryRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
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
		 * Max length: 512
		 * Min length: 0
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
		 * Max length: 512
		 * Min length: 0
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
		count?: number | null;
		taxRateUuid?: string | null;
	}
	export interface TaxRateProductCountFormProperties {
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
		 * Max length: 512
		 * Min length: 0
		 */
		label?: string | null;

		/** Maximum: 100 */
		percentage?: number | null;
	}
	export interface TaxRateUpdateRequestFormProperties {
		default: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 0
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

	export enum TaxSettingsResponseTaxationMode { EXCLUSIVE = 0, INCLUSIVE = 1 }

	export enum TaxSettingsResponseTaxationType { NONE = 0, SALES_TAX = 1, VAT = 2 }

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

