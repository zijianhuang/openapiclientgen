import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateSavingsPlanResponse {
		savingsPlanId?: string | null;
	}
	export interface CreateSavingsPlanResponseFormProperties {
		savingsPlanId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSavingsPlanResponseFormGroup() {
		return new FormGroup<CreateSavingsPlanResponseFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DescribeSavingsPlanRatesResponse {
		savingsPlanId?: string | null;
		searchResults?: Array<SavingsPlanRate>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;
	}
	export interface DescribeSavingsPlanRatesResponseFormProperties {
		savingsPlanId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlanRatesResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlanRatesResponseFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** Information about a Savings Plan rate. */
	export interface SavingsPlanRate {
		rate?: string | null;
		currency?: SavingsPlanRateCurrency | null;
		unit?: SavingsPlanRateUnit | null;
		productType?: SavingsPlanRateProductType | null;
		serviceCode?: SavingsPlanRateServiceCode | null;

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]+$
		 */
		usageType?: string | null;

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]*$
		 */
		operation?: string | null;
		properties?: Array<SavingsPlanRateProperty>;
	}

	/** Information about a Savings Plan rate. */
	export interface SavingsPlanRateFormProperties {
		rate: FormControl<string | null | undefined>,
		currency: FormControl<SavingsPlanRateCurrency | null | undefined>,
		unit: FormControl<SavingsPlanRateUnit | null | undefined>,
		productType: FormControl<SavingsPlanRateProductType | null | undefined>,
		serviceCode: FormControl<SavingsPlanRateServiceCode | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]+$
		 */
		usageType: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]*$
		 */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanRateFormGroup() {
		return new FormGroup<SavingsPlanRateFormProperties>({
			rate: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<SavingsPlanRateCurrency | null | undefined>(undefined),
			unit: new FormControl<SavingsPlanRateUnit | null | undefined>(undefined),
			productType: new FormControl<SavingsPlanRateProductType | null | undefined>(undefined),
			serviceCode: new FormControl<SavingsPlanRateServiceCode | null | undefined>(undefined),
			usageType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			operation: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export enum SavingsPlanRateCurrency { CNY = 0, USD = 1 }

	export enum SavingsPlanRateUnit { Hrs = 0, Lambda_GB_Second = 1, Request = 2 }

	export enum SavingsPlanRateProductType { EC2 = 0, Fargate = 1, Lambda = 2 }

	export enum SavingsPlanRateServiceCode { AmazonEC2 = 0, AmazonECS = 1, AWSLambda = 2 }


	/** Information about a property. */
	export interface SavingsPlanRateProperty {
		name?: SavingsPlanRatePropertyName | null;

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		value?: string | null;
	}

	/** Information about a property. */
	export interface SavingsPlanRatePropertyFormProperties {
		name: FormControl<SavingsPlanRatePropertyName | null | undefined>,

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanRatePropertyFormGroup() {
		return new FormGroup<SavingsPlanRatePropertyFormProperties>({
			name: new FormControl<SavingsPlanRatePropertyName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanRatePropertyName { region = 0, instanceType = 1, instanceFamily = 2, productDescription = 3, tenancy = 4 }


	/** Information about a filter. */
	export interface SavingsPlanRateFilter {
		name?: SavingsPlanRateFilterName | null;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface SavingsPlanRateFilterFormProperties {
		name: FormControl<SavingsPlanRateFilterName | null | undefined>,
	}
	export function CreateSavingsPlanRateFilterFormGroup() {
		return new FormGroup<SavingsPlanRateFilterFormProperties>({
			name: new FormControl<SavingsPlanRateFilterName | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanRateFilterName { region = 0, instanceType = 1, productDescription = 2, tenancy = 3, productType = 4, serviceCode = 5, usageType = 6, operation = 7 }

	export interface DescribeSavingsPlansResponse {
		savingsPlans?: Array<SavingsPlan>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;
	}
	export interface DescribeSavingsPlansResponseFormProperties {

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlansResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlansResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** Information about a Savings Plan. */
	export interface SavingsPlan {
		offeringId?: string | null;
		savingsPlanId?: string | null;

		/** Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$ */
		savingsPlanArn?: string | null;
		description?: string | null;
		start?: string | null;
		end?: string | null;
		state?: SavingsPlanState | null;
		region?: string | null;
		ec2InstanceFamily?: string | null;
		savingsPlanType?: SavingsPlanSavingsPlanType | null;
		paymentOption?: SavingsPlanPaymentOption | null;
		productTypes?: Array<SavingsPlanProductType>;
		currency?: SavingsPlanRateCurrency | null;
		commitment?: string | null;
		upfrontPaymentAmount?: string | null;
		recurringPaymentAmount?: string | null;
		termDurationInSeconds?: number | null;
		tags?: TagMap;
	}

	/** Information about a Savings Plan. */
	export interface SavingsPlanFormProperties {
		offeringId: FormControl<string | null | undefined>,
		savingsPlanId: FormControl<string | null | undefined>,

		/** Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$ */
		savingsPlanArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		start: FormControl<string | null | undefined>,
		end: FormControl<string | null | undefined>,
		state: FormControl<SavingsPlanState | null | undefined>,
		region: FormControl<string | null | undefined>,
		ec2InstanceFamily: FormControl<string | null | undefined>,
		savingsPlanType: FormControl<SavingsPlanSavingsPlanType | null | undefined>,
		paymentOption: FormControl<SavingsPlanPaymentOption | null | undefined>,
		currency: FormControl<SavingsPlanRateCurrency | null | undefined>,
		commitment: FormControl<string | null | undefined>,
		upfrontPaymentAmount: FormControl<string | null | undefined>,
		recurringPaymentAmount: FormControl<string | null | undefined>,
		termDurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSavingsPlanFormGroup() {
		return new FormGroup<SavingsPlanFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined),
			savingsPlanId: new FormControl<string | null | undefined>(undefined),
			savingsPlanArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SavingsPlanState | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			ec2InstanceFamily: new FormControl<string | null | undefined>(undefined),
			savingsPlanType: new FormControl<SavingsPlanSavingsPlanType | null | undefined>(undefined),
			paymentOption: new FormControl<SavingsPlanPaymentOption | null | undefined>(undefined),
			currency: new FormControl<SavingsPlanRateCurrency | null | undefined>(undefined),
			commitment: new FormControl<string | null | undefined>(undefined),
			upfrontPaymentAmount: new FormControl<string | null | undefined>(undefined),
			recurringPaymentAmount: new FormControl<string | null | undefined>(undefined),
			termDurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanState { payment_pending = 0, payment_failed = 1, active = 2, retired = 3 }

	export enum SavingsPlanSavingsPlanType { Compute = 0, EC2Instance = 1 }

	export enum SavingsPlanPaymentOption { All_Upfront = 0, Partial_Upfront = 1, No_Upfront = 2 }

	export enum SavingsPlanProductType { EC2 = 0, Fargate = 1, Lambda = 2 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Information about a filter. */
	export interface SavingsPlanFilter {
		name?: SavingsPlanFilterName | null;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface SavingsPlanFilterFormProperties {
		name: FormControl<SavingsPlanFilterName | null | undefined>,
	}
	export function CreateSavingsPlanFilterFormGroup() {
		return new FormGroup<SavingsPlanFilterFormProperties>({
			name: new FormControl<SavingsPlanFilterName | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanFilterName { region = 0, ec2_instance_family = 1, commitment = 2, upfront = 3, term = 4, savings_plan_type = 5, payment_option = 6, start = 7, end = 8 }

	export interface DescribeSavingsPlansOfferingRatesResponse {
		searchResults?: Array<SavingsPlanOfferingRate>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;
	}
	export interface DescribeSavingsPlansOfferingRatesResponseFormProperties {

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingRatesResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingRatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** Information about a Savings Plan offering rate. */
	export interface SavingsPlanOfferingRate {

		/** Information about a Savings Plan offering. */
		savingsPlanOffering?: ParentSavingsPlanOffering;
		rate?: string | null;
		unit?: SavingsPlanOfferingRateUnit | null;
		productType?: SavingsPlanRateProductType | null;
		serviceCode?: SavingsPlanRateServiceCode | null;

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]+$
		 */
		usageType?: string | null;

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]*$
		 */
		operation?: string | null;
		properties?: Array<SavingsPlanOfferingRateProperty>;
	}

	/** Information about a Savings Plan offering rate. */
	export interface SavingsPlanOfferingRateFormProperties {
		rate: FormControl<string | null | undefined>,
		unit: FormControl<SavingsPlanOfferingRateUnit | null | undefined>,
		productType: FormControl<SavingsPlanRateProductType | null | undefined>,
		serviceCode: FormControl<SavingsPlanRateServiceCode | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]+$
		 */
		usageType: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]*$
		 */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanOfferingRateFormGroup() {
		return new FormGroup<SavingsPlanOfferingRateFormProperties>({
			rate: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<SavingsPlanOfferingRateUnit | null | undefined>(undefined),
			productType: new FormControl<SavingsPlanRateProductType | null | undefined>(undefined),
			serviceCode: new FormControl<SavingsPlanRateServiceCode | null | undefined>(undefined),
			usageType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			operation: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** Information about a Savings Plan offering. */
	export interface ParentSavingsPlanOffering {

		/** Pattern: ^(([0-9a-f]+)(-?))+$ */
		offeringId?: string | null;
		paymentOption?: ParentSavingsPlanOfferingPaymentOption | null;
		planType?: SavingsPlanSavingsPlanType | null;

		/** Minimum: 0 */
		durationSeconds?: number | null;
		currency?: SavingsPlanRateCurrency | null;

		/** Pattern: ^[a-zA-Z0-9_\- ]+$ */
		planDescription?: string | null;
	}

	/** Information about a Savings Plan offering. */
	export interface ParentSavingsPlanOfferingFormProperties {

		/** Pattern: ^(([0-9a-f]+)(-?))+$ */
		offeringId: FormControl<string | null | undefined>,
		paymentOption: FormControl<ParentSavingsPlanOfferingPaymentOption | null | undefined>,
		planType: FormControl<SavingsPlanSavingsPlanType | null | undefined>,

		/** Minimum: 0 */
		durationSeconds: FormControl<number | null | undefined>,
		currency: FormControl<SavingsPlanRateCurrency | null | undefined>,

		/** Pattern: ^[a-zA-Z0-9_\- ]+$ */
		planDescription: FormControl<string | null | undefined>,
	}
	export function CreateParentSavingsPlanOfferingFormGroup() {
		return new FormGroup<ParentSavingsPlanOfferingFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined),
			paymentOption: new FormControl<ParentSavingsPlanOfferingPaymentOption | null | undefined>(undefined),
			planType: new FormControl<SavingsPlanSavingsPlanType | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			currency: new FormControl<SavingsPlanRateCurrency | null | undefined>(undefined),
			planDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParentSavingsPlanOfferingPaymentOption { All_Upfront = 0, Partial_Upfront = 1, No_Upfront = 2 }

	export enum SavingsPlanOfferingRateUnit { Hrs = 0, Lambda_GB_Second = 1, Request = 2 }


	/** Information about a property. */
	export interface SavingsPlanOfferingRateProperty {

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		name?: string | null;

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		value?: string | null;
	}

	/** Information about a property. */
	export interface SavingsPlanOfferingRatePropertyFormProperties {

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		name: FormControl<string | null | undefined>,

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanOfferingRatePropertyFormGroup() {
		return new FormGroup<SavingsPlanOfferingRatePropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanType { Compute = 0, EC2Instance = 1 }


	/** Information about a filter. */
	export interface SavingsPlanOfferingRateFilterElement {
		name?: SavingsPlanOfferingRateFilterElementName | null;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface SavingsPlanOfferingRateFilterElementFormProperties {
		name: FormControl<SavingsPlanOfferingRateFilterElementName | null | undefined>,
	}
	export function CreateSavingsPlanOfferingRateFilterElementFormGroup() {
		return new FormGroup<SavingsPlanOfferingRateFilterElementFormProperties>({
			name: new FormControl<SavingsPlanOfferingRateFilterElementName | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanOfferingRateFilterElementName { region = 0, instanceFamily = 1, instanceType = 2, productDescription = 3, tenancy = 4, productId = 5 }

	export interface DescribeSavingsPlansOfferingsResponse {
		searchResults?: Array<SavingsPlanOffering>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;
	}
	export interface DescribeSavingsPlansOfferingsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingsResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** Information about a Savings Plan offering. */
	export interface SavingsPlanOffering {

		/** Pattern: ^(([0-9a-f]+)(-?))+$ */
		offeringId?: string | null;
		productTypes?: Array<SavingsPlanProductType>;
		planType?: SavingsPlanSavingsPlanType | null;

		/** Pattern: ^[a-zA-Z0-9_\- ]+$ */
		description?: string | null;
		paymentOption?: SavingsPlanOfferingPaymentOption | null;

		/** Minimum: 0 */
		durationSeconds?: number | null;
		currency?: SavingsPlanRateCurrency | null;

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z]+$
		 */
		serviceCode?: string | null;

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]+$
		 */
		usageType?: string | null;

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]*$
		 */
		operation?: string | null;
		properties?: Array<SavingsPlanOfferingProperty>;
	}

	/** Information about a Savings Plan offering. */
	export interface SavingsPlanOfferingFormProperties {

		/** Pattern: ^(([0-9a-f]+)(-?))+$ */
		offeringId: FormControl<string | null | undefined>,
		planType: FormControl<SavingsPlanSavingsPlanType | null | undefined>,

		/** Pattern: ^[a-zA-Z0-9_\- ]+$ */
		description: FormControl<string | null | undefined>,
		paymentOption: FormControl<SavingsPlanOfferingPaymentOption | null | undefined>,

		/** Minimum: 0 */
		durationSeconds: FormControl<number | null | undefined>,
		currency: FormControl<SavingsPlanRateCurrency | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z]+$
		 */
		serviceCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]+$
		 */
		usageType: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: ^[a-zA-Z0-9_ \/.:-]*$
		 */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanOfferingFormGroup() {
		return new FormGroup<SavingsPlanOfferingFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined),
			planType: new FormControl<SavingsPlanSavingsPlanType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			paymentOption: new FormControl<SavingsPlanOfferingPaymentOption | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			currency: new FormControl<SavingsPlanRateCurrency | null | undefined>(undefined),
			serviceCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			usageType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			operation: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export enum SavingsPlanOfferingPaymentOption { All_Upfront = 0, Partial_Upfront = 1, No_Upfront = 2 }


	/** Information about a property. */
	export interface SavingsPlanOfferingProperty {
		name?: SavingsPlanOfferingPropertyName | null;

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		value?: string | null;
	}

	/** Information about a property. */
	export interface SavingsPlanOfferingPropertyFormProperties {
		name: FormControl<SavingsPlanOfferingPropertyName | null | undefined>,

		/** Pattern: ^[a-zA-Z0-9_ \/.\:\-\(\)]+$ */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanOfferingPropertyFormGroup() {
		return new FormGroup<SavingsPlanOfferingPropertyFormProperties>({
			name: new FormControl<SavingsPlanOfferingPropertyName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanOfferingPropertyName { region = 0, instanceFamily = 1 }

	export enum CurrencyCode { CNY = 0, USD = 1 }


	/** Information about a filter. */
	export interface SavingsPlanOfferingFilterElement {
		name?: SavingsPlanOfferingPropertyName | null;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface SavingsPlanOfferingFilterElementFormProperties {
		name: FormControl<SavingsPlanOfferingPropertyName | null | undefined>,
	}
	export function CreateSavingsPlanOfferingFilterElementFormGroup() {
		return new FormGroup<SavingsPlanOfferingFilterElementFormProperties>({
			name: new FormControl<SavingsPlanOfferingPropertyName | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface CreateSavingsPlanRequest {

		/** Required */
		savingsPlanOfferingId: string;

		/** Required */
		commitment: string;
		upfrontPaymentAmount?: string | null;
		clientToken?: string | null;
		tags?: TagMap;
	}
	export interface CreateSavingsPlanRequestFormProperties {

		/** Required */
		savingsPlanOfferingId: FormControl<string | null | undefined>,

		/** Required */
		commitment: FormControl<string | null | undefined>,
		upfrontPaymentAmount: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSavingsPlanRequestFormGroup() {
		return new FormGroup<CreateSavingsPlanRequestFormProperties>({
			savingsPlanOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upfrontPaymentAmount: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSavingsPlanRatesRequest {

		/** Required */
		savingsPlanId: string;
		filters?: Array<SavingsPlanRateFilter>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlanRatesRequestFormProperties {

		/** Required */
		savingsPlanId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlanRatesRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlanRatesRequestFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface DescribeSavingsPlansOfferingRatesRequest {
		savingsPlanOfferingIds?: Array<string>;
		savingsPlanPaymentOptions?: Array<SavingsPlanPaymentOption>;
		savingsPlanTypes?: Array<SavingsPlanType>;
		products?: Array<SavingsPlanProductType>;
		serviceCodes?: Array<SavingsPlanRateServiceCode>;
		usageTypes?: Array<string>;
		operations?: Array<string>;
		filters?: Array<SavingsPlanOfferingRateFilterElement>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlansOfferingRatesRequestFormProperties {

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingRatesRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingRatesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

	}

	export interface DescribeSavingsPlansOfferingsRequest {
		offeringIds?: Array<string>;
		paymentOptions?: Array<SavingsPlanPaymentOption>;
		productType?: SavingsPlanRateProductType | null;
		planTypes?: Array<SavingsPlanType>;
		durations?: Array<number>;
		currencies?: Array<CurrencyCode>;
		descriptions?: Array<string>;
		serviceCodes?: Array<string>;
		usageTypes?: Array<string>;
		operations?: Array<string>;
		filters?: Array<SavingsPlanOfferingFilterElement>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlansOfferingsRequestFormProperties {
		productType: FormControl<SavingsPlanRateProductType | null | undefined>,

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingsRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingsRequestFormProperties>({
			productType: new FormControl<SavingsPlanRateProductType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

	}

	export interface DescribeSavingsPlansRequest {

		/** Maximum items: 100 */
		savingsPlanArns?: Array<string>;
		savingsPlanIds?: Array<string>;

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;
		states?: Array<SavingsPlanState>;
		filters?: Array<SavingsPlanFilter>;
	}
	export interface DescribeSavingsPlansRequestFormProperties {

		/**
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlansRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SavingsPlansFilterName { region = 0, ec2_instance_family = 1, commitment = 2, upfront = 3, term = 4, savings_plan_type = 5, payment_option = 6, start = 7, end = 8 }

	export enum SavingsPlanOfferingFilterAttribute { region = 0, instanceFamily = 1 }

	export enum SavingsPlanOfferingPropertyKey { region = 0, instanceFamily = 1 }

	export enum SavingsPlanRateFilterAttribute { region = 0, instanceFamily = 1, instanceType = 2, productDescription = 3, tenancy = 4, productId = 5 }

	export enum SavingsPlanRatePropertyKey { region = 0, instanceType = 1, instanceFamily = 2, productDescription = 3, tenancy = 4 }

	export interface TagResourceRequest {

		/**
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/**
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a Savings Plan.
		 * Post CreateSavingsPlan
		 * @return {CreateSavingsPlanResponse} Success
		 */
		CreateSavingsPlan(requestBody: CreateSavingsPlanPostBody): Observable<CreateSavingsPlanResponse> {
			return this.http.post<CreateSavingsPlanResponse>(this.baseUri + 'CreateSavingsPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans rates.
		 * Post DescribeSavingsPlanRates
		 * @return {DescribeSavingsPlanRatesResponse} Success
		 */
		DescribeSavingsPlanRates(requestBody: DescribeSavingsPlanRatesPostBody): Observable<DescribeSavingsPlanRatesResponse> {
			return this.http.post<DescribeSavingsPlanRatesResponse>(this.baseUri + 'DescribeSavingsPlanRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans.
		 * Post DescribeSavingsPlans
		 * @return {DescribeSavingsPlansResponse} Success
		 */
		DescribeSavingsPlans(requestBody: DescribeSavingsPlansPostBody): Observable<DescribeSavingsPlansResponse> {
			return this.http.post<DescribeSavingsPlansResponse>(this.baseUri + 'DescribeSavingsPlans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans offering rates.
		 * Post DescribeSavingsPlansOfferingRates
		 * @return {DescribeSavingsPlansOfferingRatesResponse} Success
		 */
		DescribeSavingsPlansOfferingRates(requestBody: DescribeSavingsPlansOfferingRatesPostBody): Observable<DescribeSavingsPlansOfferingRatesResponse> {
			return this.http.post<DescribeSavingsPlansOfferingRatesResponse>(this.baseUri + 'DescribeSavingsPlansOfferingRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans offerings.
		 * Post DescribeSavingsPlansOfferings
		 * @return {DescribeSavingsPlansOfferingsResponse} Success
		 */
		DescribeSavingsPlansOfferings(requestBody: DescribeSavingsPlansOfferingsPostBody): Observable<DescribeSavingsPlansOfferingsResponse> {
			return this.http.post<DescribeSavingsPlansOfferingsResponse>(this.baseUri + 'DescribeSavingsPlansOfferings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified resource.
		 * Post ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + 'ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds the specified tags to the specified resource.
		 * Post TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Post UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateSavingsPlanPostBody {

		/**
		 * The ID of the offering.
		 * Required
		 */
		savingsPlanOfferingId: string;

		/**
		 * The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than three digits after the decimal point.
		 * Required
		 */
		commitment: string;

		/** The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>. */
		upfrontPaymentAmount?: string | null;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** One or more tags. */
		tags?: {[id: string]: string };
	}
	export interface CreateSavingsPlanPostBodyFormProperties {

		/**
		 * The ID of the offering.
		 * Required
		 */
		savingsPlanOfferingId: FormControl<string | null | undefined>,

		/**
		 * The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than three digits after the decimal point.
		 * Required
		 */
		commitment: FormControl<string | null | undefined>,

		/** The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>. */
		upfrontPaymentAmount: FormControl<string | null | undefined>,

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** One or more tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSavingsPlanPostBodyFormGroup() {
		return new FormGroup<CreateSavingsPlanPostBodyFormProperties>({
			savingsPlanOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upfrontPaymentAmount: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DescribeSavingsPlanRatesPostBody {

		/**
		 * The ID of the Savings Plan.
		 * Required
		 */
		savingsPlanId: string;

		/** The filters. */
		filters?: Array<SavingsPlanRateFilter>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlanRatesPostBodyFormProperties {

		/**
		 * The ID of the Savings Plan.
		 * Required
		 */
		savingsPlanId: FormControl<string | null | undefined>,

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlanRatesPostBodyFormGroup() {
		return new FormGroup<DescribeSavingsPlanRatesPostBodyFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface DescribeSavingsPlansPostBody {

		/**
		 * The Amazon Resource Names (ARN) of the Savings Plans.
		 * Maximum items: 100
		 */
		savingsPlanArns?: Array<string>;

		/** The IDs of the Savings Plans. */
		savingsPlanIds?: Array<string>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** The states. */
		states?: Array<SavingsPlanState>;

		/** The filters. */
		filters?: Array<SavingsPlanFilter>;
	}
	export interface DescribeSavingsPlansPostBodyFormProperties {

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansPostBodyFormGroup() {
		return new FormGroup<DescribeSavingsPlansPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface DescribeSavingsPlansOfferingRatesPostBody {

		/** The IDs of the offerings. */
		savingsPlanOfferingIds?: Array<string>;

		/** The payment options. */
		savingsPlanPaymentOptions?: Array<SavingsPlanPaymentOption>;

		/** The plan types. */
		savingsPlanTypes?: Array<SavingsPlanType>;

		/** The AWS products. */
		products?: Array<SavingsPlanProductType>;

		/** The services. */
		serviceCodes?: Array<SavingsPlanRateServiceCode>;

		/** The usage details of the line item in the billing report. */
		usageTypes?: Array<string>;

		/** The specific AWS operation for the line item in the billing report. */
		operations?: Array<string>;

		/** The filters. */
		filters?: Array<SavingsPlanOfferingRateFilterElement>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlansOfferingRatesPostBodyFormProperties {

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingRatesPostBodyFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingRatesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

	}

	export interface DescribeSavingsPlansOfferingsPostBody {

		/** The IDs of the offerings. */
		offeringIds?: Array<string>;

		/** The payment options. */
		paymentOptions?: Array<SavingsPlanPaymentOption>;

		/** The product type. */
		productType?: SavingsPlanRateProductType | null;

		/** The plan type. */
		planTypes?: Array<SavingsPlanType>;

		/** The durations, in seconds. */
		durations?: Array<number>;

		/** The currencies. */
		currencies?: Array<CurrencyCode>;

		/** The descriptions. */
		descriptions?: Array<string>;

		/** The services. */
		serviceCodes?: Array<string>;

		/** The usage details of the line item in the billing report. */
		usageTypes?: Array<string>;

		/** The specific AWS operation for the line item in the billing report. */
		operations?: Array<string>;

		/** The filters. */
		filters?: Array<SavingsPlanOfferingFilterElement>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlansOfferingsPostBodyFormProperties {

		/** The product type. */
		productType: FormControl<SavingsPlanRateProductType | null | undefined>,

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingsPostBodyFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingsPostBodyFormProperties>({
			productType: new FormControl<SavingsPlanRateProductType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;

		/**
		 * One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;

		/**
		 * The tag keys.
		 * Required
		 */
		tagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

