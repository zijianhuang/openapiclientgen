import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateSavingsPlanResponse {
		savingsPlanId?: string;
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

	export interface DeleteQueuedSavingsPlanResponse {
	}
	export interface DeleteQueuedSavingsPlanResponseFormProperties {
	}
	export function CreateDeleteQueuedSavingsPlanResponseFormGroup() {
		return new FormGroup<DeleteQueuedSavingsPlanResponseFormProperties>({
		});

	}

	export interface DescribeSavingsPlanRatesResponse {
		savingsPlanId?: string;
		searchResults?: Array<SavingsPlanRate>;
		nextToken?: string;
	}
	export interface DescribeSavingsPlanRatesResponseFormProperties {
		savingsPlanId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlanRatesResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlanRatesResponseFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Savings Plan rate. */
	export interface SavingsPlanRate {
		rate?: string;
		currency?: CurrencyCode;
		unit?: SavingsPlanRateUnit;
		productType?: SavingsPlanProductType;
		serviceCode?: SavingsPlanRateServiceCode;
		usageType?: string;
		operation?: string;

		/** The properties. */
		properties?: any;
	}

	/** Information about a Savings Plan rate. */
	export interface SavingsPlanRateFormProperties {
		rate: FormControl<string | null | undefined>,
		currency: FormControl<CurrencyCode | null | undefined>,
		unit: FormControl<SavingsPlanRateUnit | null | undefined>,
		productType: FormControl<SavingsPlanProductType | null | undefined>,
		serviceCode: FormControl<SavingsPlanRateServiceCode | null | undefined>,
		usageType: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,

		/** The properties. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSavingsPlanRateFormGroup() {
		return new FormGroup<SavingsPlanRateFormProperties>({
			rate: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<CurrencyCode | null | undefined>(undefined),
			unit: new FormControl<SavingsPlanRateUnit | null | undefined>(undefined),
			productType: new FormControl<SavingsPlanProductType | null | undefined>(undefined),
			serviceCode: new FormControl<SavingsPlanRateServiceCode | null | undefined>(undefined),
			usageType: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum CurrencyCode { CNY = 'CNY', USD = 'USD' }

	export enum SavingsPlanRateUnit { Hrs = 'Hrs', 'Lambda-GB-Second' = 'Lambda-GB-Second', Request = 'Request' }

	export enum SavingsPlanProductType { EC2 = 'EC2', Fargate = 'Fargate', Lambda = 'Lambda', SageMaker = 'SageMaker' }

	export enum SavingsPlanRateServiceCode { AmazonEC2 = 'AmazonEC2', AmazonECS = 'AmazonECS', AmazonEKS = 'AmazonEKS', AWSLambda = 'AWSLambda', AmazonSageMaker = 'AmazonSageMaker' }


	/** Information about a filter. */
	export interface SavingsPlanRateFilter {
		name?: SavingsPlanRateFilterName;
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

	export enum SavingsPlanRateFilterName { region = 'region', instanceType = 'instanceType', productDescription = 'productDescription', tenancy = 'tenancy', productType = 'productType', serviceCode = 'serviceCode', usageType = 'usageType', operation = 'operation' }

	export interface DescribeSavingsPlansResponse {
		savingsPlans?: Array<SavingsPlan>;
		nextToken?: string;
	}
	export interface DescribeSavingsPlansResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlansResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlansResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Savings Plan. */
	export interface SavingsPlan {
		offeringId?: string;
		savingsPlanId?: string;
		savingsPlanArn?: string;
		description?: string;
		start?: string;
		end?: string;
		state?: SavingsPlanState;
		region?: string;
		ec2InstanceFamily?: string;
		savingsPlanType?: SavingsPlanType;
		paymentOption?: SavingsPlanPaymentOption;
		productTypes?: Array<SavingsPlanProductType>;
		currency?: CurrencyCode;
		commitment?: string;
		upfrontPaymentAmount?: string;
		recurringPaymentAmount?: string;
		termDurationInSeconds?: number | null;
		tags?: TagMap;
	}

	/** Information about a Savings Plan. */
	export interface SavingsPlanFormProperties {
		offeringId: FormControl<string | null | undefined>,
		savingsPlanId: FormControl<string | null | undefined>,
		savingsPlanArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		start: FormControl<string | null | undefined>,
		end: FormControl<string | null | undefined>,
		state: FormControl<SavingsPlanState | null | undefined>,
		region: FormControl<string | null | undefined>,
		ec2InstanceFamily: FormControl<string | null | undefined>,
		savingsPlanType: FormControl<SavingsPlanType | null | undefined>,
		paymentOption: FormControl<SavingsPlanPaymentOption | null | undefined>,
		currency: FormControl<CurrencyCode | null | undefined>,
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
			savingsPlanType: new FormControl<SavingsPlanType | null | undefined>(undefined),
			paymentOption: new FormControl<SavingsPlanPaymentOption | null | undefined>(undefined),
			currency: new FormControl<CurrencyCode | null | undefined>(undefined),
			commitment: new FormControl<string | null | undefined>(undefined),
			upfrontPaymentAmount: new FormControl<string | null | undefined>(undefined),
			recurringPaymentAmount: new FormControl<string | null | undefined>(undefined),
			termDurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanState { 'payment-pending' = 'payment-pending', 'payment-failed' = 'payment-failed', active = 'active', retired = 'retired', queued = 'queued', 'queued-deleted' = 'queued-deleted' }

	export enum SavingsPlanType { Compute = 'Compute', EC2Instance = 'EC2Instance', SageMaker = 'SageMaker' }

	export enum SavingsPlanPaymentOption { 'All Upfront' = 'All Upfront', 'Partial Upfront' = 'Partial Upfront', 'No Upfront' = 'No Upfront' }

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
		name?: SavingsPlansFilterName;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface SavingsPlanFilterFormProperties {
		name: FormControl<SavingsPlansFilterName | null | undefined>,
	}
	export function CreateSavingsPlanFilterFormGroup() {
		return new FormGroup<SavingsPlanFilterFormProperties>({
			name: new FormControl<SavingsPlansFilterName | null | undefined>(undefined),
		});

	}

	export enum SavingsPlansFilterName { region = 'region', 'ec2-instance-family' = 'ec2-instance-family', commitment = 'commitment', upfront = 'upfront', term = 'term', 'savings-plan-type' = 'savings-plan-type', 'payment-option' = 'payment-option', start = 'start', end = 'end' }

	export interface DescribeSavingsPlansOfferingRatesResponse {
		searchResults?: Array<SavingsPlanOfferingRate>;
		nextToken?: string;
	}
	export interface DescribeSavingsPlansOfferingRatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingRatesResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingRatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Savings Plan offering rate. */
	export interface SavingsPlanOfferingRate {
		savingsPlanOffering?: ParentSavingsPlanOffering;
		rate?: string;
		unit?: SavingsPlanRateUnit;
		productType?: SavingsPlanProductType;
		serviceCode?: SavingsPlanRateServiceCode;
		usageType?: string;
		operation?: string;

		/** The properties. */
		properties?: any;
	}

	/** Information about a Savings Plan offering rate. */
	export interface SavingsPlanOfferingRateFormProperties {
		rate: FormControl<string | null | undefined>,
		unit: FormControl<SavingsPlanRateUnit | null | undefined>,
		productType: FormControl<SavingsPlanProductType | null | undefined>,
		serviceCode: FormControl<SavingsPlanRateServiceCode | null | undefined>,
		usageType: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,

		/** The properties. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSavingsPlanOfferingRateFormGroup() {
		return new FormGroup<SavingsPlanOfferingRateFormProperties>({
			rate: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<SavingsPlanRateUnit | null | undefined>(undefined),
			productType: new FormControl<SavingsPlanProductType | null | undefined>(undefined),
			serviceCode: new FormControl<SavingsPlanRateServiceCode | null | undefined>(undefined),
			usageType: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Information about a Savings Plan offering. */
	export interface ParentSavingsPlanOffering {
		offeringId?: string;
		paymentOption?: SavingsPlanPaymentOption;
		planType?: SavingsPlanType;
		durationSeconds?: number | null;
		currency?: CurrencyCode;
		planDescription?: string;
	}

	/** Information about a Savings Plan offering. */
	export interface ParentSavingsPlanOfferingFormProperties {
		offeringId: FormControl<string | null | undefined>,
		paymentOption: FormControl<SavingsPlanPaymentOption | null | undefined>,
		planType: FormControl<SavingsPlanType | null | undefined>,
		durationSeconds: FormControl<number | null | undefined>,
		currency: FormControl<CurrencyCode | null | undefined>,
		planDescription: FormControl<string | null | undefined>,
	}
	export function CreateParentSavingsPlanOfferingFormGroup() {
		return new FormGroup<ParentSavingsPlanOfferingFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined),
			paymentOption: new FormControl<SavingsPlanPaymentOption | null | undefined>(undefined),
			planType: new FormControl<SavingsPlanType | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<CurrencyCode | null | undefined>(undefined),
			planDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a filter. */
	export interface SavingsPlanOfferingRateFilterElement {
		name?: SavingsPlanRateFilterAttribute;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface SavingsPlanOfferingRateFilterElementFormProperties {
		name: FormControl<SavingsPlanRateFilterAttribute | null | undefined>,
	}
	export function CreateSavingsPlanOfferingRateFilterElementFormGroup() {
		return new FormGroup<SavingsPlanOfferingRateFilterElementFormProperties>({
			name: new FormControl<SavingsPlanRateFilterAttribute | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanRateFilterAttribute { region = 'region', instanceFamily = 'instanceFamily', instanceType = 'instanceType', productDescription = 'productDescription', tenancy = 'tenancy', productId = 'productId' }

	export interface DescribeSavingsPlansOfferingsResponse {
		searchResults?: Array<SavingsPlanOffering>;
		nextToken?: string;
	}
	export interface DescribeSavingsPlansOfferingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingsResponseFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Savings Plan offering. */
	export interface SavingsPlanOffering {
		offeringId?: string;
		productTypes?: Array<SavingsPlanProductType>;
		planType?: SavingsPlanType;
		description?: string;
		paymentOption?: SavingsPlanPaymentOption;
		durationSeconds?: number | null;
		currency?: CurrencyCode;
		serviceCode?: string;
		usageType?: string;
		operation?: string;

		/** The properties. */
		properties?: any;
	}

	/** Information about a Savings Plan offering. */
	export interface SavingsPlanOfferingFormProperties {
		offeringId: FormControl<string | null | undefined>,
		planType: FormControl<SavingsPlanType | null | undefined>,
		description: FormControl<string | null | undefined>,
		paymentOption: FormControl<SavingsPlanPaymentOption | null | undefined>,
		durationSeconds: FormControl<number | null | undefined>,
		currency: FormControl<CurrencyCode | null | undefined>,
		serviceCode: FormControl<string | null | undefined>,
		usageType: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,

		/** The properties. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSavingsPlanOfferingFormGroup() {
		return new FormGroup<SavingsPlanOfferingFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined),
			planType: new FormControl<SavingsPlanType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			paymentOption: new FormControl<SavingsPlanPaymentOption | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<CurrencyCode | null | undefined>(undefined),
			serviceCode: new FormControl<string | null | undefined>(undefined),
			usageType: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Information about a filter. */
	export interface SavingsPlanOfferingFilterElement {
		name?: SavingsPlanOfferingFilterAttribute;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface SavingsPlanOfferingFilterElementFormProperties {
		name: FormControl<SavingsPlanOfferingFilterAttribute | null | undefined>,
	}
	export function CreateSavingsPlanOfferingFilterElementFormGroup() {
		return new FormGroup<SavingsPlanOfferingFilterElementFormProperties>({
			name: new FormControl<SavingsPlanOfferingFilterAttribute | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanOfferingFilterAttribute { region = 'region', instanceFamily = 'instanceFamily' }

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
		upfrontPaymentAmount?: string;
		purchaseTime?: Date;
		clientToken?: string;
		tags?: TagMap;
	}
	export interface CreateSavingsPlanRequestFormProperties {

		/** Required */
		savingsPlanOfferingId: FormControl<string | null | undefined>,

		/** Required */
		commitment: FormControl<string | null | undefined>,
		upfrontPaymentAmount: FormControl<string | null | undefined>,
		purchaseTime: FormControl<Date | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSavingsPlanRequestFormGroup() {
		return new FormGroup<CreateSavingsPlanRequestFormProperties>({
			savingsPlanOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upfrontPaymentAmount: new FormControl<string | null | undefined>(undefined),
			purchaseTime: new FormControl<Date | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteQueuedSavingsPlanRequest {

		/** Required */
		savingsPlanId: string;
	}
	export interface DeleteQueuedSavingsPlanRequestFormProperties {

		/** Required */
		savingsPlanId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQueuedSavingsPlanRequestFormGroup() {
		return new FormGroup<DeleteQueuedSavingsPlanRequestFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSavingsPlanRatesRequest {

		/** Required */
		savingsPlanId: string;
		filters?: Array<SavingsPlanRateFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlanRatesRequestFormProperties {

		/** Required */
		savingsPlanId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlanRatesRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlanRatesRequestFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlansOfferingRatesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingRatesRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingRatesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeSavingsPlansOfferingsRequest {
		offeringIds?: Array<string>;
		paymentOptions?: Array<SavingsPlanPaymentOption>;
		productType?: SavingsPlanProductType;
		planTypes?: Array<SavingsPlanType>;
		durations?: Array<number> | null;
		currencies?: Array<CurrencyCode>;
		descriptions?: Array<string>;
		serviceCodes?: Array<string>;
		usageTypes?: Array<string>;
		operations?: Array<string>;
		filters?: Array<SavingsPlanOfferingFilterElement>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeSavingsPlansOfferingsRequestFormProperties {
		productType: FormControl<SavingsPlanProductType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansOfferingsRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlansOfferingsRequestFormProperties>({
			productType: new FormControl<SavingsPlanProductType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeSavingsPlansRequest {
		savingsPlanArns?: Array<string>;
		savingsPlanIds?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
		states?: Array<SavingsPlanState>;
		filters?: Array<SavingsPlanFilter>;
	}
	export interface DescribeSavingsPlansRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSavingsPlansRequestFormGroup() {
		return new FormGroup<DescribeSavingsPlansRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SavingsPlanOfferingPropertyKey { region = 'region', instanceFamily = 'instanceFamily' }


	/** Information about a property. */
	export interface SavingsPlanOfferingProperty {
		name?: SavingsPlanOfferingFilterAttribute;
		value?: string;
	}

	/** Information about a property. */
	export interface SavingsPlanOfferingPropertyFormProperties {
		name: FormControl<SavingsPlanOfferingFilterAttribute | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanOfferingPropertyFormGroup() {
		return new FormGroup<SavingsPlanOfferingPropertyFormProperties>({
			name: new FormControl<SavingsPlanOfferingFilterAttribute | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a property. */
	export interface SavingsPlanOfferingRateProperty {
		name?: string;
		value?: string;
	}

	/** Information about a property. */
	export interface SavingsPlanOfferingRatePropertyFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanOfferingRatePropertyFormGroup() {
		return new FormGroup<SavingsPlanOfferingRatePropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SavingsPlanRatePropertyKey { region = 'region', instanceType = 'instanceType', instanceFamily = 'instanceFamily', productDescription = 'productDescription', tenancy = 'tenancy' }


	/** Information about a property. */
	export interface SavingsPlanRateProperty {
		name?: SavingsPlanRatePropertyKey;
		value?: string;
	}

	/** Information about a property. */
	export interface SavingsPlanRatePropertyFormProperties {
		name: FormControl<SavingsPlanRatePropertyKey | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlanRatePropertyFormGroup() {
		return new FormGroup<SavingsPlanRatePropertyFormProperties>({
			name: new FormControl<SavingsPlanRatePropertyKey | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
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
		 * Deletes the queued purchase for the specified Savings Plan.
		 * Post DeleteQueuedSavingsPlan
		 * @return {DeleteQueuedSavingsPlanResponse} Success
		 */
		DeleteQueuedSavingsPlan(requestBody: DeleteQueuedSavingsPlanPostBody): Observable<DeleteQueuedSavingsPlanResponse> {
			return this.http.post<DeleteQueuedSavingsPlanResponse>(this.baseUri + 'DeleteQueuedSavingsPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.
		 * Required
		 */
		commitment: string;

		/** The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>. */
		upfrontPaymentAmount?: string | null;

		/** The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). */
		purchaseTime?: Date | null;

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
		 * The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.
		 * Required
		 */
		commitment: FormControl<string | null | undefined>,

		/** The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>. */
		upfrontPaymentAmount: FormControl<string | null | undefined>,

		/** The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). */
		purchaseTime: FormControl<Date | null | undefined>,

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
			purchaseTime: new FormControl<Date | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeleteQueuedSavingsPlanPostBody {

		/**
		 * The ID of the Savings Plan.
		 * Required
		 */
		savingsPlanId: string;
	}
	export interface DeleteQueuedSavingsPlanPostBodyFormProperties {

		/**
		 * The ID of the Savings Plan.
		 * Required
		 */
		savingsPlanId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQueuedSavingsPlanPostBodyFormGroup() {
		return new FormGroup<DeleteQueuedSavingsPlanPostBodyFormProperties>({
			savingsPlanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^[A-Za-z0-9/=\+]+$')]),
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
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^[A-Za-z0-9/=\+]+$')]),
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
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^[A-Za-z0-9/=\+]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

	}

	export interface DescribeSavingsPlansOfferingsPostBody {

		/** The IDs of the offerings. */
		offeringIds?: Array<string>;

		/** The payment options. */
		paymentOptions?: Array<SavingsPlanPaymentOption>;

		/** The product type. */
		productType?: SavingsPlanProductType | null;

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
		productType: FormControl<SavingsPlanProductType | null | undefined>,

		/**
		 * The token for the next page of results.
		 * Max length: 1024
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
			productType: new FormControl<SavingsPlanProductType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^[A-Za-z0-9/=\+]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 */
		resourceArn: string;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
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
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
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
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$')]),
		});

	}

}

