import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CapProgramResponse {

		/** A unique ID that a user or seller uses for a marketplace. */
		martId?: string | null;
		statusInfo?: CapProgramResponseStatusInfo;
	}
	export interface CapProgramResponseFormProperties {

		/** A unique ID that a user or seller uses for a marketplace. */
		martId: FormControl<string | null | undefined>,
	}
	export function CreateCapProgramResponseFormGroup() {
		return new FormGroup<CapProgramResponseFormProperties>({
			martId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CapProgramResponseStatusInfo {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled?: boolean | null;

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference?: boolean | null;
	}
	export interface CapProgramResponseStatusInfoFormProperties {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled: FormControl<boolean | null | undefined>,

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference: FormControl<boolean | null | undefined>,
	}
	export function CreateCapProgramResponseStatusInfoFormGroup() {
		return new FormGroup<CapProgramResponseStatusInfoFormProperties>({
			subsidyEnrolled: new FormControl<boolean | null | undefined>(undefined),
			subsidyPreference: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Cause {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface CauseFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCauseFormGroup() {
		return new FormGroup<CauseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is applicable only for promotions */
	export interface ComparisonPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}

	/** This is applicable only for promotions */
	export interface ComparisonPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreateComparisonPriceFormGroup() {
		return new FormGroup<ComparisonPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export enum ComparisonPriceCurrency { USD = 0, CAD = 1 }

	export interface CurrentPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}
	export interface CurrentPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreateCurrentPriceFormGroup() {
		return new FormGroup<CurrentPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export interface FeedId {
		additionalAttributes?: string | null;
		errors?: string | null;

		/** A unique ID, returned from the Bulk Upload API, used for tracking the feed file */
		feedId?: string | null;
	}
	export interface FeedIdFormProperties {
		additionalAttributes: FormControl<string | null | undefined>,
		errors: FormControl<string | null | undefined>,

		/** A unique ID, returned from the Bulk Upload API, used for tracking the feed file */
		feedId: FormControl<string | null | undefined>,
	}
	export function CreateFeedIdFormGroup() {
		return new FormGroup<FeedIdFormProperties>({
			additionalAttributes: new FormControl<string | null | undefined>(undefined),
			errors: new FormControl<string | null | undefined>(undefined),
			feedId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeedItemsHeaderRequestDTO {
		locale?: string | null;
		mart?: string | null;
		processMode?: string | null;
		sellingChannel?: string | null;
		subset?: string | null;
		version?: string | null;
	}
	export interface FeedItemsHeaderRequestDTOFormProperties {
		locale: FormControl<string | null | undefined>,
		mart: FormControl<string | null | undefined>,
		processMode: FormControl<string | null | undefined>,
		sellingChannel: FormControl<string | null | undefined>,
		subset: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateFeedItemsHeaderRequestDTOFormGroup() {
		return new FormGroup<FeedItemsHeaderRequestDTOFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			mart: new FormControl<string | null | undefined>(undefined),
			processMode: new FormControl<string | null | undefined>(undefined),
			sellingChannel: new FormControl<string | null | undefined>(undefined),
			subset: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeedItemsRequestDTO {
		maximumSellerAllowedPrice?: number | null;
		minimumSellerAllowedPrice?: number | null;
		repricerStrategy?: string | null;
		sku?: string | null;
	}
	export interface FeedItemsRequestDTOFormProperties {
		maximumSellerAllowedPrice: FormControl<number | null | undefined>,
		minimumSellerAllowedPrice: FormControl<number | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
	}
	export function CreateFeedItemsRequestDTOFormGroup() {
		return new FormGroup<FeedItemsRequestDTOFormProperties>({
			maximumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			minimumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeedUploadRequestDTO {
		FeedUploadRequestDTOItem?: Array<FeedUploadRequestDTOItem>;
		ItemFeedHeader?: FeedUploadRequestDTOItemFeedHeader;
	}
	export interface FeedUploadRequestDTOFormProperties {
	}
	export function CreateFeedUploadRequestDTOFormGroup() {
		return new FormGroup<FeedUploadRequestDTOFormProperties>({
		});

	}

	export interface FeedUploadRequestDTOItem {
		Strategy?: FeedUploadRequestDTOItemStrategy;
	}
	export interface FeedUploadRequestDTOItemFormProperties {
	}
	export function CreateFeedUploadRequestDTOItemFormGroup() {
		return new FormGroup<FeedUploadRequestDTOItemFormProperties>({
		});

	}

	export interface FeedUploadRequestDTOItemStrategy {
		maximumSellerAllowedPrice?: number | null;
		minimumSellerAllowedPrice?: number | null;
		repricerStrategy?: string | null;
		sku?: string | null;
	}
	export interface FeedUploadRequestDTOItemStrategyFormProperties {
		maximumSellerAllowedPrice: FormControl<number | null | undefined>,
		minimumSellerAllowedPrice: FormControl<number | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
	}
	export function CreateFeedUploadRequestDTOItemStrategyFormGroup() {
		return new FormGroup<FeedUploadRequestDTOItemStrategyFormProperties>({
			maximumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			minimumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeedUploadRequestDTOItemFeedHeader {
		locale?: string | null;
		mart?: string | null;
		processMode?: string | null;
		sellingChannel?: string | null;
		subset?: string | null;
		version?: string | null;
	}
	export interface FeedUploadRequestDTOItemFeedHeaderFormProperties {
		locale: FormControl<string | null | undefined>,
		mart: FormControl<string | null | undefined>,
		processMode: FormControl<string | null | undefined>,
		sellingChannel: FormControl<string | null | undefined>,
		subset: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateFeedUploadRequestDTOItemFeedHeaderFormGroup() {
		return new FormGroup<FeedUploadRequestDTOItemFeedHeaderFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			mart: new FormControl<string | null | undefined>(undefined),
			processMode: new FormControl<string | null | undefined>(undefined),
			sellingChannel: new FormControl<string | null | undefined>(undefined),
			subset: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeedUploadResponseDTO {
		feedId?: string | null;
	}
	export interface FeedUploadResponseDTOFormProperties {
		feedId: FormControl<string | null | undefined>,
	}
	export function CreateFeedUploadResponseDTOFormGroup() {
		return new FormGroup<FeedUploadResponseDTOFormProperties>({
			feedId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GatewayError {
		category?: GatewayErrorCategory | null;
		GatewayErrorCauses?: Array<GatewayErrorCauses>;

		/** Required */
		code: string;
		component?: string | null;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		gatewayErrorCategory?: GatewayErrorGatewayErrorCategory | null;
		info?: string | null;
		serviceName?: string | null;
		severity?: GatewayErrorSeverity | null;
		type?: string | null;
	}
	export interface GatewayErrorFormProperties {
		category: FormControl<GatewayErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		component: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		gatewayErrorCategory: FormControl<GatewayErrorGatewayErrorCategory | null | undefined>,
		info: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		severity: FormControl<GatewayErrorSeverity | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGatewayErrorFormGroup() {
		return new FormGroup<GatewayErrorFormProperties>({
			category: new FormControl<GatewayErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			component: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			gatewayErrorCategory: new FormControl<GatewayErrorGatewayErrorCategory | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GatewayErrorSeverity | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GatewayErrorCategory { APPLICATION = 0, SYSTEM = 1, REQUEST = 2, DATA = 3 }

	export interface GatewayErrorCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface GatewayErrorCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGatewayErrorCausesFormGroup() {
		return new FormGroup<GatewayErrorCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GatewayErrorGatewayErrorCategory { INTERNAL_DATA_ERROR = 0, EXTERNAL_DATA_ERROR = 1, SYSTEM_ERROR = 2 }

	export enum GatewayErrorSeverity { INFO = 0, WARN = 1, ERROR = 2 }

	export interface ItemPriceResponse {
		ItemPriceResponseErrors?: Array<ItemPriceResponseErrors>;

		/** Marketplace name. Example: Walmart-US */
		mart?: string | null;

		/** A message of acknowledgement for a price update */
		message?: string | null;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
		statusCode?: number | null;
	}
	export interface ItemPriceResponseFormProperties {

		/** Marketplace name. Example: Walmart-US */
		mart: FormControl<string | null | undefined>,

		/** A message of acknowledgement for a price update */
		message: FormControl<string | null | undefined>,

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateItemPriceResponseFormGroup() {
		return new FormGroup<ItemPriceResponseFormProperties>({
			mart: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemPriceResponseErrors {
		category?: GatewayErrorCategory | null;
		ItemPriceResponseErrorsCauses?: Array<ItemPriceResponseErrorsCauses>;

		/** Required */
		code: string;
		component?: string | null;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		gatewayErrorCategory?: GatewayErrorGatewayErrorCategory | null;
		info?: string | null;
		serviceName?: string | null;
		severity?: GatewayErrorSeverity | null;
		type?: string | null;
	}
	export interface ItemPriceResponseErrorsFormProperties {
		category: FormControl<GatewayErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		component: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		gatewayErrorCategory: FormControl<GatewayErrorGatewayErrorCategory | null | undefined>,
		info: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		severity: FormControl<GatewayErrorSeverity | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateItemPriceResponseErrorsFormGroup() {
		return new FormGroup<ItemPriceResponseErrorsFormProperties>({
			category: new FormControl<GatewayErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			component: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			gatewayErrorCategory: new FormControl<GatewayErrorGatewayErrorCategory | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GatewayErrorSeverity | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemPriceResponseErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface ItemPriceResponseErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateItemPriceResponseErrorsCausesFormGroup() {
		return new FormGroup<ItemPriceResponseErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Price {
		definitions?: string | null;

		/** This is applicable only for promotions */
		offerId?: string | null;

		/** Required */
		PricePricing: Array<PricePricing>;

		/** This is applicable only for promotions */
		replaceAll?: PriceReplaceAll | null;

		/** Required */
		sku: string;
	}
	export interface PriceFormProperties {
		definitions: FormControl<string | null | undefined>,

		/** This is applicable only for promotions */
		offerId: FormControl<string | null | undefined>,

		/** This is applicable only for promotions */
		replaceAll: FormControl<PriceReplaceAll | null | undefined>,

		/** Required */
		sku: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			definitions: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			replaceAll: new FormControl<PriceReplaceAll | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricePricing {

		/** This is applicable only for promotions */
		comparisonPrice?: PricePricingComparisonPrice;

		/** This is applicable only for promotions */
		comparisonPriceType?: PricePricingComparisonPriceType | null;

		/** Required */
		currentPrice: PricePricingCurrentPrice;

		/**
		 * This is applicable only for both promotions and price
		 * Required
		 */
		currentPriceType: PricePricingCurrentPriceType;

		/** This is applicable only for promotions */
		effectiveDate?: Date | null;

		/** This is applicable only for promotions */
		expirationDate?: Date | null;

		/** Represent promo placement. This is applicable only for promotions */
		priceDisplayCodes?: PricePricingPriceDisplayCodes | null;

		/** This is applicable only for promotions */
		processMode?: PricePricingProcessMode | null;

		/** This is applicable only for promotions */
		promoId?: string | null;
	}
	export interface PricePricingFormProperties {

		/** This is applicable only for promotions */
		comparisonPriceType: FormControl<PricePricingComparisonPriceType | null | undefined>,

		/**
		 * This is applicable only for both promotions and price
		 * Required
		 */
		currentPriceType: FormControl<PricePricingCurrentPriceType | null | undefined>,

		/** This is applicable only for promotions */
		effectiveDate: FormControl<Date | null | undefined>,

		/** This is applicable only for promotions */
		expirationDate: FormControl<Date | null | undefined>,

		/** Represent promo placement. This is applicable only for promotions */
		priceDisplayCodes: FormControl<PricePricingPriceDisplayCodes | null | undefined>,

		/** This is applicable only for promotions */
		processMode: FormControl<PricePricingProcessMode | null | undefined>,

		/** This is applicable only for promotions */
		promoId: FormControl<string | null | undefined>,
	}
	export function CreatePricePricingFormGroup() {
		return new FormGroup<PricePricingFormProperties>({
			comparisonPriceType: new FormControl<PricePricingComparisonPriceType | null | undefined>(undefined),
			currentPriceType: new FormControl<PricePricingCurrentPriceType | null | undefined>(undefined, [Validators.required]),
			effectiveDate: new FormControl<Date | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			priceDisplayCodes: new FormControl<PricePricingPriceDisplayCodes | null | undefined>(undefined),
			processMode: new FormControl<PricePricingProcessMode | null | undefined>(undefined),
			promoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PricePricingComparisonPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}
	export interface PricePricingComparisonPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreatePricePricingComparisonPriceFormGroup() {
		return new FormGroup<PricePricingComparisonPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export enum PricePricingComparisonPriceType { BASE = 0 }

	export interface PricePricingCurrentPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}
	export interface PricePricingCurrentPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreatePricePricingCurrentPriceFormGroup() {
		return new FormGroup<PricePricingCurrentPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export enum PricePricingCurrentPriceType { BASE = 0, REDUCED = 1, CLEARANCE = 2 }

	export enum PricePricingPriceDisplayCodes { CART = 0, CHECKOUT = 1 }

	export enum PricePricingProcessMode { UPSERT = 0, DELETE = 1 }

	export enum PriceReplaceAll { true = 0, false = 1 }

	export interface Pricing {

		/** This is applicable only for promotions */
		comparisonPrice?: PricingComparisonPrice;

		/** This is applicable only for promotions */
		comparisonPriceType?: PricePricingComparisonPriceType | null;

		/** Required */
		currentPrice: PricingCurrentPrice;

		/**
		 * This is applicable only for both promotions and price
		 * Required
		 */
		currentPriceType: PricePricingCurrentPriceType;

		/** This is applicable only for promotions */
		effectiveDate?: Date | null;

		/** This is applicable only for promotions */
		expirationDate?: Date | null;

		/** Represent promo placement. This is applicable only for promotions */
		priceDisplayCodes?: PricePricingPriceDisplayCodes | null;

		/** This is applicable only for promotions */
		processMode?: PricePricingProcessMode | null;

		/** This is applicable only for promotions */
		promoId?: string | null;
	}
	export interface PricingFormProperties {

		/** This is applicable only for promotions */
		comparisonPriceType: FormControl<PricePricingComparisonPriceType | null | undefined>,

		/**
		 * This is applicable only for both promotions and price
		 * Required
		 */
		currentPriceType: FormControl<PricePricingCurrentPriceType | null | undefined>,

		/** This is applicable only for promotions */
		effectiveDate: FormControl<Date | null | undefined>,

		/** This is applicable only for promotions */
		expirationDate: FormControl<Date | null | undefined>,

		/** Represent promo placement. This is applicable only for promotions */
		priceDisplayCodes: FormControl<PricePricingPriceDisplayCodes | null | undefined>,

		/** This is applicable only for promotions */
		processMode: FormControl<PricePricingProcessMode | null | undefined>,

		/** This is applicable only for promotions */
		promoId: FormControl<string | null | undefined>,
	}
	export function CreatePricingFormGroup() {
		return new FormGroup<PricingFormProperties>({
			comparisonPriceType: new FormControl<PricePricingComparisonPriceType | null | undefined>(undefined),
			currentPriceType: new FormControl<PricePricingCurrentPriceType | null | undefined>(undefined, [Validators.required]),
			effectiveDate: new FormControl<Date | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			priceDisplayCodes: new FormControl<PricePricingPriceDisplayCodes | null | undefined>(undefined),
			processMode: new FormControl<PricePricingProcessMode | null | undefined>(undefined),
			promoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PricingComparisonPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}
	export interface PricingComparisonPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreatePricingComparisonPriceFormGroup() {
		return new FormGroup<PricingComparisonPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export interface PricingCurrentPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}
	export interface PricingCurrentPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreatePricingCurrentPriceFormGroup() {
		return new FormGroup<PricingCurrentPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityCollectionResponse {
		RepricerEntityCollectionResponseStrategyCollections?: Array<RepricerEntityCollectionResponseStrategyCollections>;
		totalElements?: number | null;
	}
	export interface RepricerEntityCollectionResponseFormProperties {
		totalElements: FormControl<number | null | undefined>,
	}
	export function CreateRepricerEntityCollectionResponseFormGroup() {
		return new FormGroup<RepricerEntityCollectionResponseFormProperties>({
			totalElements: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityCollectionResponseStrategyCollections {
		assignedCount?: number | null;
		enableRepricerForPromotion?: boolean | null;
		enabled?: boolean | null;
		repricerStrategy?: string | null;
		RepricerEntityCollectionResponseStrategyCollectionsStrategies?: Array<RepricerEntityCollectionResponseStrategyCollectionsStrategies>;
		strategyCollectionId?: string | null;
	}
	export interface RepricerEntityCollectionResponseStrategyCollectionsFormProperties {
		assignedCount: FormControl<number | null | undefined>,
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		strategyCollectionId: FormControl<string | null | undefined>,
	}
	export function CreateRepricerEntityCollectionResponseStrategyCollectionsFormGroup() {
		return new FormGroup<RepricerEntityCollectionResponseStrategyCollectionsFormProperties>({
			assignedCount: new FormControl<number | null | undefined>(undefined),
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			strategyCollectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityCollectionResponseStrategyCollectionsStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface RepricerEntityCollectionResponseStrategyCollectionsStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateRepricerEntityCollectionResponseStrategyCollectionsStrategiesFormGroup() {
		return new FormGroup<RepricerEntityCollectionResponseStrategyCollectionsStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export enum RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType { UNIT = 0, PERCENTAGE = 1 }

	export enum RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType { 'Buy Box Price' = 0, 'External Price' = 1, 'Competitive Price' = 2 }

	export interface RepricerEntityDeleteResponse {
		message?: string | null;
	}
	export interface RepricerEntityDeleteResponseFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateRepricerEntityDeleteResponseFormGroup() {
		return new FormGroup<RepricerEntityDeleteResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityGetResponse {
		assignedCount?: number | null;
		enableRepricerForPromotion?: boolean | null;
		enabled?: boolean | null;
		repricerStrategy?: string | null;
		RepricerEntityGetResponseStrategies?: Array<RepricerEntityGetResponseStrategies>;
		strategyCollectionId?: string | null;
	}
	export interface RepricerEntityGetResponseFormProperties {
		assignedCount: FormControl<number | null | undefined>,
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		strategyCollectionId: FormControl<string | null | undefined>,
	}
	export function CreateRepricerEntityGetResponseFormGroup() {
		return new FormGroup<RepricerEntityGetResponseFormProperties>({
			assignedCount: new FormControl<number | null | undefined>(undefined),
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			strategyCollectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityGetResponseStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface RepricerEntityGetResponseStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateRepricerEntityGetResponseStrategiesFormGroup() {
		return new FormGroup<RepricerEntityGetResponseStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityRequest {

		/** Status of item on promotions to be enable on repricer */
		enableRepricerForPromotion?: boolean | null;

		/** Status of the Strategy Collection */
		enabled?: boolean | null;

		/** Name of the Strategy Collection */
		repricerStrategy?: string | null;

		/** Strategies */
		RepricerEntityRequestStrategies?: Array<RepricerEntityRequestStrategies>;
	}
	export interface RepricerEntityRequestFormProperties {

		/** Status of item on promotions to be enable on repricer */
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,

		/** Status of the Strategy Collection */
		enabled: FormControl<boolean | null | undefined>,

		/** Name of the Strategy Collection */
		repricerStrategy: FormControl<string | null | undefined>,
	}
	export function CreateRepricerEntityRequestFormGroup() {
		return new FormGroup<RepricerEntityRequestFormProperties>({
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityRequestStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface RepricerEntityRequestStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateRepricerEntityRequestStrategiesFormGroup() {
		return new FormGroup<RepricerEntityRequestStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityResponse {
		enableRepricerForPromotion?: boolean | null;
		enabled?: boolean | null;
		repricerStrategy?: string | null;
		RepricerEntityResponseStrategies?: Array<RepricerEntityResponseStrategies>;
		strategyCollectionId?: string | null;
	}
	export interface RepricerEntityResponseFormProperties {
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		strategyCollectionId: FormControl<string | null | undefined>,
	}
	export function CreateRepricerEntityResponseFormGroup() {
		return new FormGroup<RepricerEntityResponseFormProperties>({
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			strategyCollectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepricerEntityResponseStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface RepricerEntityResponseStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateRepricerEntityResponseStrategiesFormGroup() {
		return new FormGroup<RepricerEntityResponseStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface RepricerStrategyType {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface RepricerStrategyTypeFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateRepricerStrategyTypeFormGroup() {
		return new FormGroup<RepricerStrategyTypeFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface StatusInfo {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled?: boolean | null;

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference?: boolean | null;
	}
	export interface StatusInfoFormProperties {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled: FormControl<boolean | null | undefined>,

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference: FormControl<boolean | null | undefined>,
	}
	export function CreateStatusInfoFormGroup() {
		return new FormGroup<StatusInfoFormProperties>({
			subsidyEnrolled: new FormControl<boolean | null | undefined>(undefined),
			subsidyPreference: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StrategyDetailsRequestDTO {
		Strategy?: StrategyDetailsRequestDTOStrategy;
	}
	export interface StrategyDetailsRequestDTOFormProperties {
	}
	export function CreateStrategyDetailsRequestDTOFormGroup() {
		return new FormGroup<StrategyDetailsRequestDTOFormProperties>({
		});

	}

	export interface StrategyDetailsRequestDTOStrategy {
		maximumSellerAllowedPrice?: number | null;
		minimumSellerAllowedPrice?: number | null;
		repricerStrategy?: string | null;
		sku?: string | null;
	}
	export interface StrategyDetailsRequestDTOStrategyFormProperties {
		maximumSellerAllowedPrice: FormControl<number | null | undefined>,
		minimumSellerAllowedPrice: FormControl<number | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
	}
	export function CreateStrategyDetailsRequestDTOStrategyFormGroup() {
		return new FormGroup<StrategyDetailsRequestDTOStrategyFormProperties>({
			maximumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			minimumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Set up CAP SKU All
		 * This API helps Sellers to completely opt-in or opt-out from CAP program.
		 * If the subsidyEnrolled value = "true", the Seller enrolls in the CAP program. All eligible SKUs (current and future) are by default opt-in. Seller should use the SKU opt-in/opt-out API to opt-out individual items.
		 * If the subsidyEnrolled value = "false", the Seller stops participating in the CAP program and all eligible SKUs (current and future) are opt-out of the CAP program.
		 * Post v3/cppreference
		 * @param {OptCapProgramInPricePostBody} requestBody Request fields
		 * @return {OptCapProgramInPriceReturn} Successful Operation
		 */
		OptCapProgramInPrice(requestBody: OptCapProgramInPricePostBody): Observable<OptCapProgramInPriceReturn> {
			return this.http.post<OptCapProgramInPriceReturn>(this.baseUri + 'v3/cppreference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a price
		 * Updates the regular price for a given item.
		 * Put v3/price
		 * @param {UpdatePricePutBody} requestBody The request body consists of a Feed file attached to the request.
		 * @return {UpdatePriceReturn} Successful Operation
		 */
		UpdatePrice(requestBody: UpdatePricePutBody): Observable<UpdatePriceReturn> {
			return this.http.put<UpdatePriceReturn>(this.baseUri + 'v3/price', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of Repricer Strategies
		 * Get the list of strategies
		 * Get v3/repricer/strategies
		 * @return {GetStrategiesReturn} Successful Operation
		 */
		GetStrategies(): Observable<GetStrategiesReturn> {
			return this.http.get<GetStrategiesReturn>(this.baseUri + 'v3/repricer/strategies', {});
		}

		/**
		 * Create Repricer Strategy
		 * Creates a new strategy for the seller
		 * Post v3/repricer/strategy
		 * @param {CreateStrategyPostBody} requestBody The request body will have the strategy related information
		 * @return {CreateStrategyReturn} Successful Operation
		 */
		CreateStrategy(requestBody: CreateStrategyPostBody): Observable<CreateStrategyReturn> {
			return this.http.post<CreateStrategyReturn>(this.baseUri + 'v3/repricer/strategy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Repricer Strategy
		 * Deletes the strategy
		 * Delete v3/repricer/strategy/{strategyCollectionId}
		 * @param {string} strategyCollectionId Automatically added
		 * @return {DeleteStrategyReturn} Successful Operation
		 */
		DeleteStrategy(strategyCollectionId: string): Observable<DeleteStrategyReturn> {
			return this.http.delete<DeleteStrategyReturn>(this.baseUri + 'v3/repricer/strategy/' + (strategyCollectionId == null ? '' : encodeURIComponent(strategyCollectionId)), {});
		}

		/**
		 * Update Repricer Strategy
		 * Updates the existing strategy
		 * Put v3/repricer/strategy/{strategyCollectionId}
		 * @param {string} strategyCollectionId Automatically added
		 * @param {UpdateStrategyPutBody} requestBody The request body will have the strategy related information
		 * @return {UpdateStrategyReturn} Successful Operation
		 */
		UpdateStrategy(strategyCollectionId: string, requestBody: UpdateStrategyPutBody): Observable<UpdateStrategyReturn> {
			return this.http.put<UpdateStrategyReturn>(this.baseUri + 'v3/repricer/strategy/' + (strategyCollectionId == null ? '' : encodeURIComponent(strategyCollectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Assign/Unassign items to/from Repricer Strategy
		 * Add/Remove one or more items from a strategy
		 * Post v3/repricerFeeds
		 * @return {GetRepricerFeedReturn} Successful Operation
		 */
		GetRepricerFeed(requestBody: GetRepricerFeedPostBody): Observable<GetRepricerFeedReturn> {
			return this.http.post<GetRepricerFeedReturn>(this.baseUri + 'v3/repricerFeeds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface OptCapProgramInPricePostBody {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled?: boolean | null;

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference?: boolean | null;
	}
	export interface OptCapProgramInPricePostBodyFormProperties {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled: FormControl<boolean | null | undefined>,

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference: FormControl<boolean | null | undefined>,
	}
	export function CreateOptCapProgramInPricePostBodyFormGroup() {
		return new FormGroup<OptCapProgramInPricePostBodyFormProperties>({
			subsidyEnrolled: new FormControl<boolean | null | undefined>(undefined),
			subsidyPreference: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OptCapProgramInPriceReturn {

		/** A unique ID that a user or seller uses for a marketplace. */
		martId?: string | null;
		statusInfo?: OptCapProgramInPriceReturnStatusInfo;
	}
	export interface OptCapProgramInPriceReturnFormProperties {

		/** A unique ID that a user or seller uses for a marketplace. */
		martId: FormControl<string | null | undefined>,
	}
	export function CreateOptCapProgramInPriceReturnFormGroup() {
		return new FormGroup<OptCapProgramInPriceReturnFormProperties>({
			martId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptCapProgramInPriceReturnStatusInfo {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled?: boolean | null;

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference?: boolean | null;
	}
	export interface OptCapProgramInPriceReturnStatusInfoFormProperties {

		/** A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program */
		subsidyEnrolled: FormControl<boolean | null | undefined>,

		/** A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting */
		subsidyPreference: FormControl<boolean | null | undefined>,
	}
	export function CreateOptCapProgramInPriceReturnStatusInfoFormGroup() {
		return new FormGroup<OptCapProgramInPriceReturnStatusInfoFormProperties>({
			subsidyEnrolled: new FormControl<boolean | null | undefined>(undefined),
			subsidyPreference: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PriceBulkUploadsFeedType { price = 0, CPT_SELLER_ELIGIBILITY = 1 }

	export interface UpdatePricePutBody {
		definitions?: string | null;

		/** This is applicable only for promotions */
		offerId?: string | null;

		/** Required */
		UpdatePricePutBodyPricing: Array<UpdatePricePutBodyPricing>;

		/** This is applicable only for promotions */
		replaceAll?: PriceReplaceAll | null;

		/** Required */
		sku: string;
	}
	export interface UpdatePricePutBodyFormProperties {
		definitions: FormControl<string | null | undefined>,

		/** This is applicable only for promotions */
		offerId: FormControl<string | null | undefined>,

		/** This is applicable only for promotions */
		replaceAll: FormControl<PriceReplaceAll | null | undefined>,

		/** Required */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePricePutBodyFormGroup() {
		return new FormGroup<UpdatePricePutBodyFormProperties>({
			definitions: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			replaceAll: new FormControl<PriceReplaceAll | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePricePutBodyPricing {

		/** This is applicable only for promotions */
		comparisonPrice?: UpdatePricePutBodyPricingComparisonPrice;

		/** This is applicable only for promotions */
		comparisonPriceType?: PricePricingComparisonPriceType | null;

		/** Required */
		currentPrice: UpdatePricePutBodyPricingCurrentPrice;

		/**
		 * This is applicable only for both promotions and price
		 * Required
		 */
		currentPriceType: PricePricingCurrentPriceType;

		/** This is applicable only for promotions */
		effectiveDate?: Date | null;

		/** This is applicable only for promotions */
		expirationDate?: Date | null;

		/** Represent promo placement. This is applicable only for promotions */
		priceDisplayCodes?: PricePricingPriceDisplayCodes | null;

		/** This is applicable only for promotions */
		processMode?: PricePricingProcessMode | null;

		/** This is applicable only for promotions */
		promoId?: string | null;
	}
	export interface UpdatePricePutBodyPricingFormProperties {

		/** This is applicable only for promotions */
		comparisonPriceType: FormControl<PricePricingComparisonPriceType | null | undefined>,

		/**
		 * This is applicable only for both promotions and price
		 * Required
		 */
		currentPriceType: FormControl<PricePricingCurrentPriceType | null | undefined>,

		/** This is applicable only for promotions */
		effectiveDate: FormControl<Date | null | undefined>,

		/** This is applicable only for promotions */
		expirationDate: FormControl<Date | null | undefined>,

		/** Represent promo placement. This is applicable only for promotions */
		priceDisplayCodes: FormControl<PricePricingPriceDisplayCodes | null | undefined>,

		/** This is applicable only for promotions */
		processMode: FormControl<PricePricingProcessMode | null | undefined>,

		/** This is applicable only for promotions */
		promoId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePricePutBodyPricingFormGroup() {
		return new FormGroup<UpdatePricePutBodyPricingFormProperties>({
			comparisonPriceType: new FormControl<PricePricingComparisonPriceType | null | undefined>(undefined),
			currentPriceType: new FormControl<PricePricingCurrentPriceType | null | undefined>(undefined, [Validators.required]),
			effectiveDate: new FormControl<Date | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			priceDisplayCodes: new FormControl<PricePricingPriceDisplayCodes | null | undefined>(undefined),
			processMode: new FormControl<PricePricingProcessMode | null | undefined>(undefined),
			promoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePricePutBodyPricingComparisonPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}
	export interface UpdatePricePutBodyPricingComparisonPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreateUpdatePricePutBodyPricingComparisonPriceFormGroup() {
		return new FormGroup<UpdatePricePutBodyPricingComparisonPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export interface UpdatePricePutBodyPricingCurrentPrice {
		amount?: number | null;
		currency?: ComparisonPriceCurrency | null;
	}
	export interface UpdatePricePutBodyPricingCurrentPriceFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<ComparisonPriceCurrency | null | undefined>,
	}
	export function CreateUpdatePricePutBodyPricingCurrentPriceFormGroup() {
		return new FormGroup<UpdatePricePutBodyPricingCurrentPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<ComparisonPriceCurrency | null | undefined>(undefined),
		});

	}

	export interface UpdatePriceReturn {
		UpdatePriceReturnErrors?: Array<UpdatePriceReturnErrors>;

		/** Marketplace name. Example: Walmart-US */
		mart?: string | null;

		/** A message of acknowledgement for a price update */
		message?: string | null;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
		statusCode?: number | null;
	}
	export interface UpdatePriceReturnFormProperties {

		/** Marketplace name. Example: Walmart-US */
		mart: FormControl<string | null | undefined>,

		/** A message of acknowledgement for a price update */
		message: FormControl<string | null | undefined>,

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePriceReturnFormGroup() {
		return new FormGroup<UpdatePriceReturnFormProperties>({
			mart: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdatePriceReturnErrors {
		category?: GatewayErrorCategory | null;
		UpdatePriceReturnErrorsCauses?: Array<UpdatePriceReturnErrorsCauses>;

		/** Required */
		code: string;
		component?: string | null;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		gatewayErrorCategory?: GatewayErrorGatewayErrorCategory | null;
		info?: string | null;
		serviceName?: string | null;
		severity?: GatewayErrorSeverity | null;
		type?: string | null;
	}
	export interface UpdatePriceReturnErrorsFormProperties {
		category: FormControl<GatewayErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		component: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		gatewayErrorCategory: FormControl<GatewayErrorGatewayErrorCategory | null | undefined>,
		info: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		severity: FormControl<GatewayErrorSeverity | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePriceReturnErrorsFormGroup() {
		return new FormGroup<UpdatePriceReturnErrorsFormProperties>({
			category: new FormControl<GatewayErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			component: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			gatewayErrorCategory: new FormControl<GatewayErrorGatewayErrorCategory | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GatewayErrorSeverity | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePriceReturnErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface UpdatePriceReturnErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePriceReturnErrorsCausesFormGroup() {
		return new FormGroup<UpdatePriceReturnErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStrategiesReturn {
		GetStrategiesReturnStrategyCollections?: Array<GetStrategiesReturnStrategyCollections>;
		totalElements?: number | null;
	}
	export interface GetStrategiesReturnFormProperties {
		totalElements: FormControl<number | null | undefined>,
	}
	export function CreateGetStrategiesReturnFormGroup() {
		return new FormGroup<GetStrategiesReturnFormProperties>({
			totalElements: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetStrategiesReturnStrategyCollections {
		assignedCount?: number | null;
		enableRepricerForPromotion?: boolean | null;
		enabled?: boolean | null;
		repricerStrategy?: string | null;
		GetStrategiesReturnStrategyCollectionsStrategies?: Array<GetStrategiesReturnStrategyCollectionsStrategies>;
		strategyCollectionId?: string | null;
	}
	export interface GetStrategiesReturnStrategyCollectionsFormProperties {
		assignedCount: FormControl<number | null | undefined>,
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		strategyCollectionId: FormControl<string | null | undefined>,
	}
	export function CreateGetStrategiesReturnStrategyCollectionsFormGroup() {
		return new FormGroup<GetStrategiesReturnStrategyCollectionsFormProperties>({
			assignedCount: new FormControl<number | null | undefined>(undefined),
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			strategyCollectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStrategiesReturnStrategyCollectionsStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface GetStrategiesReturnStrategyCollectionsStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateGetStrategiesReturnStrategyCollectionsStrategiesFormGroup() {
		return new FormGroup<GetStrategiesReturnStrategyCollectionsStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface CreateStrategyPostBody {

		/** Status of item on promotions to be enable on repricer */
		enableRepricerForPromotion?: boolean | null;

		/** Status of the Strategy Collection */
		enabled?: boolean | null;

		/** Name of the Strategy Collection */
		repricerStrategy?: string | null;

		/** Strategies */
		CreateStrategyPostBodyStrategies?: Array<CreateStrategyPostBodyStrategies>;
	}
	export interface CreateStrategyPostBodyFormProperties {

		/** Status of item on promotions to be enable on repricer */
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,

		/** Status of the Strategy Collection */
		enabled: FormControl<boolean | null | undefined>,

		/** Name of the Strategy Collection */
		repricerStrategy: FormControl<string | null | undefined>,
	}
	export function CreateCreateStrategyPostBodyFormGroup() {
		return new FormGroup<CreateStrategyPostBodyFormProperties>({
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStrategyPostBodyStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface CreateStrategyPostBodyStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateCreateStrategyPostBodyStrategiesFormGroup() {
		return new FormGroup<CreateStrategyPostBodyStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface CreateStrategyReturn {
		enableRepricerForPromotion?: boolean | null;
		enabled?: boolean | null;
		repricerStrategy?: string | null;
		CreateStrategyReturnStrategies?: Array<CreateStrategyReturnStrategies>;
		strategyCollectionId?: string | null;
	}
	export interface CreateStrategyReturnFormProperties {
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		strategyCollectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStrategyReturnFormGroup() {
		return new FormGroup<CreateStrategyReturnFormProperties>({
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			strategyCollectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStrategyReturnStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface CreateStrategyReturnStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateCreateStrategyReturnStrategiesFormGroup() {
		return new FormGroup<CreateStrategyReturnStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface DeleteStrategyReturn {
		message?: string | null;
	}
	export interface DeleteStrategyReturnFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStrategyReturnFormGroup() {
		return new FormGroup<DeleteStrategyReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStrategyPutBody {

		/** Status of item on promotions to be enable on repricer */
		enableRepricerForPromotion?: boolean | null;

		/** Status of the Strategy Collection */
		enabled?: boolean | null;

		/** Name of the Strategy Collection */
		repricerStrategy?: string | null;

		/** Strategies */
		UpdateStrategyPutBodyStrategies?: Array<UpdateStrategyPutBodyStrategies>;
	}
	export interface UpdateStrategyPutBodyFormProperties {

		/** Status of item on promotions to be enable on repricer */
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,

		/** Status of the Strategy Collection */
		enabled: FormControl<boolean | null | undefined>,

		/** Name of the Strategy Collection */
		repricerStrategy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStrategyPutBodyFormGroup() {
		return new FormGroup<UpdateStrategyPutBodyFormProperties>({
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStrategyPutBodyStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface UpdateStrategyPutBodyStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateUpdateStrategyPutBodyStrategiesFormGroup() {
		return new FormGroup<UpdateStrategyPutBodyStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface UpdateStrategyReturn {
		enableRepricerForPromotion?: boolean | null;
		enabled?: boolean | null;
		repricerStrategy?: string | null;
		UpdateStrategyReturnStrategies?: Array<UpdateStrategyReturnStrategies>;
		strategyCollectionId?: string | null;
	}
	export interface UpdateStrategyReturnFormProperties {
		enableRepricerForPromotion: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		strategyCollectionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStrategyReturnFormGroup() {
		return new FormGroup<UpdateStrategyReturnFormProperties>({
			enableRepricerForPromotion: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			strategyCollectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStrategyReturnStrategies {
		adjustmentType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null;
		adjustmentValue?: number | null;
		strategyType?: RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null;
	}
	export interface UpdateStrategyReturnStrategiesFormProperties {
		adjustmentType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>,
		adjustmentValue: FormControl<number | null | undefined>,
		strategyType: FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>,
	}
	export function CreateUpdateStrategyReturnStrategiesFormGroup() {
		return new FormGroup<UpdateStrategyReturnStrategiesFormProperties>({
			adjustmentType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesAdjustmentType | null | undefined>(undefined),
			adjustmentValue: new FormControl<number | null | undefined>(undefined),
			strategyType: new FormControl<RepricerEntityCollectionResponseStrategyCollectionsStrategiesStrategyType | null | undefined>(undefined),
		});

	}

	export interface GetRepricerFeedPostBody {
		GetRepricerFeedPostBodyItem?: Array<GetRepricerFeedPostBodyItem>;
		ItemFeedHeader?: GetRepricerFeedPostBodyItemFeedHeader;
	}
	export interface GetRepricerFeedPostBodyFormProperties {
	}
	export function CreateGetRepricerFeedPostBodyFormGroup() {
		return new FormGroup<GetRepricerFeedPostBodyFormProperties>({
		});

	}

	export interface GetRepricerFeedPostBodyItem {
		Strategy?: GetRepricerFeedPostBodyItemStrategy;
	}
	export interface GetRepricerFeedPostBodyItemFormProperties {
	}
	export function CreateGetRepricerFeedPostBodyItemFormGroup() {
		return new FormGroup<GetRepricerFeedPostBodyItemFormProperties>({
		});

	}

	export interface GetRepricerFeedPostBodyItemStrategy {
		maximumSellerAllowedPrice?: number | null;
		minimumSellerAllowedPrice?: number | null;
		repricerStrategy?: string | null;
		sku?: string | null;
	}
	export interface GetRepricerFeedPostBodyItemStrategyFormProperties {
		maximumSellerAllowedPrice: FormControl<number | null | undefined>,
		minimumSellerAllowedPrice: FormControl<number | null | undefined>,
		repricerStrategy: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGetRepricerFeedPostBodyItemStrategyFormGroup() {
		return new FormGroup<GetRepricerFeedPostBodyItemStrategyFormProperties>({
			maximumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			minimumSellerAllowedPrice: new FormControl<number | null | undefined>(undefined),
			repricerStrategy: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRepricerFeedPostBodyItemFeedHeader {
		locale?: string | null;
		mart?: string | null;
		processMode?: string | null;
		sellingChannel?: string | null;
		subset?: string | null;
		version?: string | null;
	}
	export interface GetRepricerFeedPostBodyItemFeedHeaderFormProperties {
		locale: FormControl<string | null | undefined>,
		mart: FormControl<string | null | undefined>,
		processMode: FormControl<string | null | undefined>,
		sellingChannel: FormControl<string | null | undefined>,
		subset: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateGetRepricerFeedPostBodyItemFeedHeaderFormGroup() {
		return new FormGroup<GetRepricerFeedPostBodyItemFeedHeaderFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			mart: new FormControl<string | null | undefined>(undefined),
			processMode: new FormControl<string | null | undefined>(undefined),
			sellingChannel: new FormControl<string | null | undefined>(undefined),
			subset: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRepricerFeedReturn {
		feedId?: string | null;
	}
	export interface GetRepricerFeedReturnFormProperties {
		feedId: FormControl<string | null | undefined>,
	}
	export function CreateGetRepricerFeedReturnFormGroup() {
		return new FormGroup<GetRepricerFeedReturnFormProperties>({
			feedId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

