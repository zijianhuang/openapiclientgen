import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface APIBillingPeriodUsageOut {
		apiKey?: string | null;
		billingStatus?: string | null;
		hardLimit?: number | null;
		periodEnded?: number | null;
		periodStarted?: number | null;
		softLimit?: number | null;
		stripeCurrentPeriodEnd?: number | null;
		stripeCurrentPeriodStart?: number | null;
		subscriptionStarted?: number | null;
		usage?: number | null;
	}
	export interface APIBillingPeriodUsageOutFormProperties {
		apiKey: FormControl<string | null | undefined>,
		billingStatus: FormControl<string | null | undefined>,
		hardLimit: FormControl<number | null | undefined>,
		periodEnded: FormControl<number | null | undefined>,
		periodStarted: FormControl<number | null | undefined>,
		softLimit: FormControl<number | null | undefined>,
		stripeCurrentPeriodEnd: FormControl<number | null | undefined>,
		stripeCurrentPeriodStart: FormControl<number | null | undefined>,
		subscriptionStarted: FormControl<number | null | undefined>,
		usage: FormControl<number | null | undefined>,
	}
	export function CreateAPIBillingPeriodUsageOutFormGroup() {
		return new FormGroup<APIBillingPeriodUsageOutFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			billingStatus: new FormControl<string | null | undefined>(undefined),
			hardLimit: new FormControl<number | null | undefined>(undefined),
			periodEnded: new FormControl<number | null | undefined>(undefined),
			periodStarted: new FormControl<number | null | undefined>(undefined),
			softLimit: new FormControl<number | null | undefined>(undefined),
			stripeCurrentPeriodEnd: new FormControl<number | null | undefined>(undefined),
			stripeCurrentPeriodStart: new FormControl<number | null | undefined>(undefined),
			subscriptionStarted: new FormControl<number | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APICounterV2Out {
		apiKey?: APIKeyOut;
		apiService?: string | null;
		createdDateTime?: number | null;
		lastFlushedDateTime?: number | null;
		lastUsedDateTime?: number | null;
		serviceFeaturesUsage?: {[id: string]: number };
		totalUsage?: number | null;
	}
	export interface APICounterV2OutFormProperties {
		apiService: FormControl<string | null | undefined>,
		createdDateTime: FormControl<number | null | undefined>,
		lastFlushedDateTime: FormControl<number | null | undefined>,
		lastUsedDateTime: FormControl<number | null | undefined>,
		serviceFeaturesUsage: FormControl<{[id: string]: number } | null | undefined>,
		totalUsage: FormControl<number | null | undefined>,
	}
	export function CreateAPICounterV2OutFormGroup() {
		return new FormGroup<APICounterV2OutFormProperties>({
			apiService: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<number | null | undefined>(undefined),
			lastFlushedDateTime: new FormControl<number | null | undefined>(undefined),
			lastUsedDateTime: new FormControl<number | null | undefined>(undefined),
			serviceFeaturesUsage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			totalUsage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APIKeyOut {
		admin?: boolean | null;
		anonymized?: boolean | null;
		apiKey?: string | null;
		corporate?: boolean | null;
		disabled?: boolean | null;
		learnable?: boolean | null;
		partner?: boolean | null;
		striped?: boolean | null;
		userId?: string | null;
		vetted?: boolean | null;
	}
	export interface APIKeyOutFormProperties {
		admin: FormControl<boolean | null | undefined>,
		anonymized: FormControl<boolean | null | undefined>,
		apiKey: FormControl<string | null | undefined>,
		corporate: FormControl<boolean | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		learnable: FormControl<boolean | null | undefined>,
		partner: FormControl<boolean | null | undefined>,
		striped: FormControl<boolean | null | undefined>,
		userId: FormControl<string | null | undefined>,
		vetted: FormControl<boolean | null | undefined>,
	}
	export function CreateAPIKeyOutFormGroup() {
		return new FormGroup<APIKeyOutFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			anonymized: new FormControl<boolean | null | undefined>(undefined),
			apiKey: new FormControl<string | null | undefined>(undefined),
			corporate: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			learnable: new FormControl<boolean | null | undefined>(undefined),
			partner: new FormControl<boolean | null | undefined>(undefined),
			striped: new FormControl<boolean | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			vetted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface APIPeriodUsageOut {
		billingPeriod?: APIBillingPeriodUsageOut;
		overageCurrency?: string | null;
		overageExclTax?: number | null;
		overageInclTax?: number | null;
		overageQuantity?: number | null;
		subscription?: APIPlanSubscriptionOut;
	}
	export interface APIPeriodUsageOutFormProperties {
		overageCurrency: FormControl<string | null | undefined>,
		overageExclTax: FormControl<number | null | undefined>,
		overageInclTax: FormControl<number | null | undefined>,
		overageQuantity: FormControl<number | null | undefined>,
	}
	export function CreateAPIPeriodUsageOutFormGroup() {
		return new FormGroup<APIPeriodUsageOutFormProperties>({
			overageCurrency: new FormControl<string | null | undefined>(undefined),
			overageExclTax: new FormControl<number | null | undefined>(undefined),
			overageInclTax: new FormControl<number | null | undefined>(undefined),
			overageQuantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APIPlanSubscriptionOut {
		apiKey?: string | null;
		currency?: string | null;
		currencyFactor?: number | null;
		planBaseFeesKey?: string | null;
		planEnded?: number | null;
		planName?: string | null;
		planQuota?: number | null;
		planStarted?: number | null;
		planStatus?: string | null;
		price?: number | null;
		priceOverage?: number | null;
		priceOverageUSD?: number | null;
		priceUSD?: number | null;
		priorPlanStarted?: number | null;
		stripeCustomerId?: string | null;
		stripeStatus?: string | null;
		stripeSubscription?: string | null;
		taxRate?: number | null;
		userId?: string | null;
	}
	export interface APIPlanSubscriptionOutFormProperties {
		apiKey: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,
		currencyFactor: FormControl<number | null | undefined>,
		planBaseFeesKey: FormControl<string | null | undefined>,
		planEnded: FormControl<number | null | undefined>,
		planName: FormControl<string | null | undefined>,
		planQuota: FormControl<number | null | undefined>,
		planStarted: FormControl<number | null | undefined>,
		planStatus: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		priceOverage: FormControl<number | null | undefined>,
		priceOverageUSD: FormControl<number | null | undefined>,
		priceUSD: FormControl<number | null | undefined>,
		priorPlanStarted: FormControl<number | null | undefined>,
		stripeCustomerId: FormControl<string | null | undefined>,
		stripeStatus: FormControl<string | null | undefined>,
		stripeSubscription: FormControl<string | null | undefined>,
		taxRate: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAPIPlanSubscriptionOutFormGroup() {
		return new FormGroup<APIPlanSubscriptionOutFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			currencyFactor: new FormControl<number | null | undefined>(undefined),
			planBaseFeesKey: new FormControl<string | null | undefined>(undefined),
			planEnded: new FormControl<number | null | undefined>(undefined),
			planName: new FormControl<string | null | undefined>(undefined),
			planQuota: new FormControl<number | null | undefined>(undefined),
			planStarted: new FormControl<number | null | undefined>(undefined),
			planStatus: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceOverage: new FormControl<number | null | undefined>(undefined),
			priceOverageUSD: new FormControl<number | null | undefined>(undefined),
			priceUSD: new FormControl<number | null | undefined>(undefined),
			priorPlanStarted: new FormControl<number | null | undefined>(undefined),
			stripeCustomerId: new FormControl<string | null | undefined>(undefined),
			stripeStatus: new FormControl<string | null | undefined>(undefined),
			stripeSubscription: new FormControl<string | null | undefined>(undefined),
			taxRate: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIPlanOut {
		planName?: string | null;
		planQuota?: number | null;
		price?: number | null;
		priceOverage?: number | null;
	}
	export interface APIPlanOutFormProperties {
		planName: FormControl<string | null | undefined>,
		planQuota: FormControl<number | null | undefined>,
		price: FormControl<number | null | undefined>,
		priceOverage: FormControl<number | null | undefined>,
	}
	export function CreateAPIPlanOutFormGroup() {
		return new FormGroup<APIPlanOutFormProperties>({
			planName: new FormControl<string | null | undefined>(undefined),
			planQuota: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceOverage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APIPlansOut {
		currencyIso3?: string | null;
		currencySymbol?: string | null;
		plans?: Array<APIPlanOut>;
		usageRatioForDupplicates?: number | null;
	}
	export interface APIPlansOutFormProperties {
		currencyIso3: FormControl<string | null | undefined>,
		currencySymbol: FormControl<string | null | undefined>,
		usageRatioForDupplicates: FormControl<number | null | undefined>,
	}
	export function CreateAPIPlansOutFormGroup() {
		return new FormGroup<APIPlansOutFormProperties>({
			currencyIso3: new FormControl<string | null | undefined>(undefined),
			currencySymbol: new FormControl<string | null | undefined>(undefined),
			usageRatioForDupplicates: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APIServiceOut {
		costInUnits?: number | null;
		serviceGroup?: string | null;
		serviceName?: string | null;
	}
	export interface APIServiceOutFormProperties {
		costInUnits: FormControl<number | null | undefined>,
		serviceGroup: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAPIServiceOutFormGroup() {
		return new FormGroup<APIServiceOutFormProperties>({
			costInUnits: new FormControl<number | null | undefined>(undefined),
			serviceGroup: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIServicesOut {
		apiServices?: Array<APIServiceOut>;
	}
	export interface APIServicesOutFormProperties {
	}
	export function CreateAPIServicesOutFormGroup() {
		return new FormGroup<APIServicesOutFormProperties>({
		});

	}

	export interface APIUsageAggregatedOut {
		colHeaders?: Array<string>;
		data?: Array<string>;
		historyTruncated?: boolean | null;
		periodEnd?: number | null;
		periodStart?: number | null;
		rowHeaders?: Array<string>;
		timeUnit?: string | null;
		totalUsage?: number | null;
	}
	export interface APIUsageAggregatedOutFormProperties {
		historyTruncated: FormControl<boolean | null | undefined>,
		periodEnd: FormControl<number | null | undefined>,
		periodStart: FormControl<number | null | undefined>,
		timeUnit: FormControl<string | null | undefined>,
		totalUsage: FormControl<number | null | undefined>,
	}
	export function CreateAPIUsageAggregatedOutFormGroup() {
		return new FormGroup<APIUsageAggregatedOutFormProperties>({
			historyTruncated: new FormControl<boolean | null | undefined>(undefined),
			periodEnd: new FormControl<number | null | undefined>(undefined),
			periodStart: new FormControl<number | null | undefined>(undefined),
			timeUnit: new FormControl<string | null | undefined>(undefined),
			totalUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface BatchFirstLastNameDiasporaedOut {
		personalNames?: Array<FirstLastNameDiasporaedOut>;
	}

	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface BatchFirstLastNameDiasporaedOutFormProperties {
	}
	export function CreateBatchFirstLastNameDiasporaedOutFormGroup() {
		return new FormGroup<BatchFirstLastNameDiasporaedOutFormProperties>({
		});

	}


	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface FirstLastNameDiasporaedOut {
		countryIso2?: string | null;
		ethnicity?: string | null;
		ethnicityAlt?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		lifted?: boolean | null;

		/** Compatibility to NamSor_v1 Origin score value */
		score?: number | null;
	}

	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface FirstLastNameDiasporaedOutFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		ethnicity: FormControl<string | null | undefined>,
		ethnicityAlt: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		lifted: FormControl<boolean | null | undefined>,

		/** Compatibility to NamSor_v1 Origin score value */
		score: FormControl<number | null | undefined>,
	}
	export function CreateFirstLastNameDiasporaedOutFormGroup() {
		return new FormGroup<FirstLastNameDiasporaedOutFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			ethnicity: new FormControl<string | null | undefined>(undefined),
			ethnicityAlt: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			lifted: new FormControl<boolean | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchFirstLastNameGenderIn {
		personalNames?: Array<FirstLastNameGenderIn>;
	}
	export interface BatchFirstLastNameGenderInFormProperties {
	}
	export function CreateBatchFirstLastNameGenderInFormGroup() {
		return new FormGroup<BatchFirstLastNameGenderInFormProperties>({
		});

	}

	export interface FirstLastNameGenderIn {
		firstName?: string | null;
		gender?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface FirstLastNameGenderInFormProperties {
		firstName: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameGenderInFormGroup() {
		return new FormGroup<FirstLastNameGenderInFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY gender from a list of personal names. */
	export interface BatchFirstLastNameGenderedOut {
		personalNames?: Array<FirstLastNameGenderedOut>;
	}

	/** Represents the output of inferring the LIKELY gender from a list of personal names. */
	export interface BatchFirstLastNameGenderedOutFormProperties {
	}
	export function CreateBatchFirstLastNameGenderedOutFormGroup() {
		return new FormGroup<BatchFirstLastNameGenderedOutFormProperties>({
		});

	}


	/** Represents the output of inferring the LIKELY gender from a personal name. */
	export interface FirstLastNameGenderedOut {
		firstName?: string | null;

		/** Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value */
		genderScale?: number | null;
		id?: string | null;
		lastName?: string | null;

		/** Most likely gender */
		likelyGender?: FirstLastNameGenderedOutLikelyGender | null;
		probabilityCalibrated?: number | null;
		score?: number | null;
	}

	/** Represents the output of inferring the LIKELY gender from a personal name. */
	export interface FirstLastNameGenderedOutFormProperties {
		firstName: FormControl<string | null | undefined>,

		/** Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value */
		genderScale: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,

		/** Most likely gender */
		likelyGender: FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>,
		probabilityCalibrated: FormControl<number | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreateFirstLastNameGenderedOutFormGroup() {
		return new FormGroup<FirstLastNameGenderedOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			genderScale: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			likelyGender: new FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>(undefined),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FirstLastNameGenderedOutLikelyGender { male = 0, female = 1, unknown = 2 }

	export interface BatchFirstLastNameGeoIn {
		personalNames?: Array<FirstLastNameGeoIn>;
	}
	export interface BatchFirstLastNameGeoInFormProperties {
	}
	export function CreateBatchFirstLastNameGeoInFormGroup() {
		return new FormGroup<BatchFirstLastNameGeoInFormProperties>({
		});

	}

	export interface FirstLastNameGeoIn {
		countryIso2?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface FirstLastNameGeoInFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameGeoInFormGroup() {
		return new FormGroup<FirstLastNameGeoInFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchFirstLastNameGeoZippedIn {
		personalNames?: Array<FirstLastNameGeoZippedIn>;
	}
	export interface BatchFirstLastNameGeoZippedInFormProperties {
	}
	export function CreateBatchFirstLastNameGeoZippedInFormGroup() {
		return new FormGroup<BatchFirstLastNameGeoZippedInFormProperties>({
		});

	}

	export interface FirstLastNameGeoZippedIn {
		countryIso2?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		zipCode?: string | null;
	}
	export interface FirstLastNameGeoZippedInFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameGeoZippedInFormGroup() {
		return new FormGroup<FirstLastNameGeoZippedInFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			zipCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchFirstLastNameIn {
		personalNames?: Array<FirstLastNameIn>;
	}
	export interface BatchFirstLastNameInFormProperties {
	}
	export function CreateBatchFirstLastNameInFormGroup() {
		return new FormGroup<BatchFirstLastNameInFormProperties>({
		});

	}

	export interface FirstLastNameIn {
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface FirstLastNameInFormProperties {
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameInFormGroup() {
		return new FormGroup<FirstLastNameInFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY origin from a list of personal names. */
	export interface BatchFirstLastNameOriginedOut {
		personalNames?: Array<FirstLastNameOriginedOut>;
	}

	/** Represents the output of inferring the LIKELY origin from a list of personal names. */
	export interface BatchFirstLastNameOriginedOutFormProperties {
	}
	export function CreateBatchFirstLastNameOriginedOutFormGroup() {
		return new FormGroup<BatchFirstLastNameOriginedOutFormProperties>({
		});

	}


	/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
	export interface FirstLastNameOriginedOut {

		/** Most likely country of Origin */
		countryOrigin?: string | null;

		/** Second best alternative : country of Origin */
		countryOriginAlt?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		regionOrigin?: string | null;

		/** Compatibility to NamSor_v1 Origin score value */
		score?: number | null;

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		subRegionOrigin?: string | null;

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		topRegionOrigin?: string | null;
	}

	/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
	export interface FirstLastNameOriginedOutFormProperties {

		/** Most likely country of Origin */
		countryOrigin: FormControl<string | null | undefined>,

		/** Second best alternative : country of Origin */
		countryOriginAlt: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		regionOrigin: FormControl<string | null | undefined>,

		/** Compatibility to NamSor_v1 Origin score value */
		score: FormControl<number | null | undefined>,

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		subRegionOrigin: FormControl<string | null | undefined>,

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		topRegionOrigin: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameOriginedOutFormGroup() {
		return new FormGroup<FirstLastNameOriginedOutFormProperties>({
			countryOrigin: new FormControl<string | null | undefined>(undefined),
			countryOriginAlt: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			regionOrigin: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			subRegionOrigin: new FormControl<string | null | undefined>(undefined),
			topRegionOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY country and phone code of personal names+phones. */
	export interface BatchFirstLastNamePhoneCodedOut {
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneCodedOut>;
	}

	/** Represents the output of inferring the LIKELY country and phone code of personal names+phones. */
	export interface BatchFirstLastNamePhoneCodedOutFormProperties {
	}
	export function CreateBatchFirstLastNamePhoneCodedOutFormGroup() {
		return new FormGroup<BatchFirstLastNamePhoneCodedOutFormProperties>({
		});

	}


	/** Represents the output of inferring the LIKELY country and phone code from a personal name and phone number. */
	export interface FirstLastNamePhoneCodedOut {
		countryIso2?: string | null;
		firstName?: string | null;
		id?: string | null;
		internationalPhoneNumberVerified?: string | null;
		lastName?: string | null;
		originCountryIso2?: string | null;
		originCountryIso2Alt?: string | null;
		phoneCountryCode?: number | null;
		phoneCountryCodeAlt?: number | null;
		phoneCountryIso2?: string | null;
		phoneCountryIso2Alt?: string | null;
		phoneCountryIso2Verified?: string | null;
		phoneNumber?: string | null;
		score?: number | null;
		verified?: boolean | null;
	}

	/** Represents the output of inferring the LIKELY country and phone code from a personal name and phone number. */
	export interface FirstLastNamePhoneCodedOutFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		internationalPhoneNumberVerified: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		originCountryIso2: FormControl<string | null | undefined>,
		originCountryIso2Alt: FormControl<string | null | undefined>,
		phoneCountryCode: FormControl<number | null | undefined>,
		phoneCountryCodeAlt: FormControl<number | null | undefined>,
		phoneCountryIso2: FormControl<string | null | undefined>,
		phoneCountryIso2Alt: FormControl<string | null | undefined>,
		phoneCountryIso2Verified: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateFirstLastNamePhoneCodedOutFormGroup() {
		return new FormGroup<FirstLastNamePhoneCodedOutFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internationalPhoneNumberVerified: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			originCountryIso2: new FormControl<string | null | undefined>(undefined),
			originCountryIso2Alt: new FormControl<string | null | undefined>(undefined),
			phoneCountryCode: new FormControl<number | null | undefined>(undefined),
			phoneCountryCodeAlt: new FormControl<number | null | undefined>(undefined),
			phoneCountryIso2: new FormControl<string | null | undefined>(undefined),
			phoneCountryIso2Alt: new FormControl<string | null | undefined>(undefined),
			phoneCountryIso2Verified: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchFirstLastNamePhoneNumberGeoIn {
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneNumberGeoIn>;
	}
	export interface BatchFirstLastNamePhoneNumberGeoInFormProperties {
	}
	export function CreateBatchFirstLastNamePhoneNumberGeoInFormGroup() {
		return new FormGroup<BatchFirstLastNamePhoneNumberGeoInFormProperties>({
		});

	}

	export interface FirstLastNamePhoneNumberGeoIn {

		/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
		FirstLastNameOriginedOut?: FirstLastNameOriginedOut;
		countryIso2?: string | null;
		countryIso2Alt?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		phoneNumber?: string | null;
	}
	export interface FirstLastNamePhoneNumberGeoInFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		countryIso2Alt: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNamePhoneNumberGeoInFormGroup() {
		return new FormGroup<FirstLastNamePhoneNumberGeoInFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			countryIso2Alt: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchFirstLastNamePhoneNumberIn {
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneNumberIn>;
	}
	export interface BatchFirstLastNamePhoneNumberInFormProperties {
	}
	export function CreateBatchFirstLastNamePhoneNumberInFormGroup() {
		return new FormGroup<BatchFirstLastNamePhoneNumberInFormProperties>({
		});

	}

	export interface FirstLastNamePhoneNumberIn {

		/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
		FirstLastNameOriginedOut?: FirstLastNameOriginedOut;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		phoneNumber?: string | null;
	}
	export interface FirstLastNamePhoneNumberInFormProperties {
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNamePhoneNumberInFormGroup() {
		return new FormGroup<FirstLastNamePhoneNumberInFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code. */
	export interface BatchFirstLastNameUSRaceEthnicityOut {
		personalNames?: Array<FirstLastNameUSRaceEthnicityOut>;
	}

	/** Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code. */
	export interface BatchFirstLastNameUSRaceEthnicityOutFormProperties {
	}
	export function CreateBatchFirstLastNameUSRaceEthnicityOutFormGroup() {
		return new FormGroup<BatchFirstLastNameUSRaceEthnicityOutFormProperties>({
		});

	}


	/** Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code. */
	export interface FirstLastNameUSRaceEthnicityOut {
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;

		/** Most likely US 'race'/ethnicity */
		raceEthnicity?: FirstLastNameUSRaceEthnicityOutRaceEthnicity | null;

		/** Second most likely US 'race'/ethnicity */
		raceEthnicityAlt?: FirstLastNameUSRaceEthnicityOutRaceEthnicity | null;

		/** Compatibility to NamSor_v1 Origin score value */
		score?: number | null;
	}

	/** Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code. */
	export interface FirstLastNameUSRaceEthnicityOutFormProperties {
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,

		/** Most likely US 'race'/ethnicity */
		raceEthnicity: FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>,

		/** Second most likely US 'race'/ethnicity */
		raceEthnicityAlt: FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>,

		/** Compatibility to NamSor_v1 Origin score value */
		score: FormControl<number | null | undefined>,
	}
	export function CreateFirstLastNameUSRaceEthnicityOutFormGroup() {
		return new FormGroup<FirstLastNameUSRaceEthnicityOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			raceEthnicity: new FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>(undefined),
			raceEthnicityAlt: new FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FirstLastNameUSRaceEthnicityOutRaceEthnicity { W_NL = 0, HL = 1, A = 2, B_NL = 3 }

	export interface BatchMatchPersonalFirstLastNameIn {
		personalNames?: Array<MatchPersonalFirstLastNameIn>;
	}
	export interface BatchMatchPersonalFirstLastNameInFormProperties {
	}
	export function CreateBatchMatchPersonalFirstLastNameInFormGroup() {
		return new FormGroup<BatchMatchPersonalFirstLastNameInFormProperties>({
		});

	}

	export interface MatchPersonalFirstLastNameIn {
		id?: string | null;
		name?: string | null;
		name1?: FirstLastNameIn;
		name2?: PersonalNameIn;
	}
	export interface MatchPersonalFirstLastNameInFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateMatchPersonalFirstLastNameInFormGroup() {
		return new FormGroup<MatchPersonalFirstLastNameInFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalNameIn {
		id?: string | null;
		name?: string | null;
	}
	export interface PersonalNameInFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameInFormGroup() {
		return new FormGroup<PersonalNameInFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchNameMatchCandidatesOut {
		namesAndMatchCandidates?: Array<NameMatchCandidatesOut>;
	}
	export interface BatchNameMatchCandidatesOutFormProperties {
	}
	export function CreateBatchNameMatchCandidatesOutFormGroup() {
		return new FormGroup<BatchNameMatchCandidatesOutFormProperties>({
		});

	}

	export interface NameMatchCandidatesOut {
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		matchCandidates?: Array<NameMatchCandidateOut>;
	}
	export interface NameMatchCandidatesOutFormProperties {
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateNameMatchCandidatesOutFormGroup() {
		return new FormGroup<NameMatchCandidatesOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameMatchCandidateOut {
		candidateName?: string | null;
		probability?: number | null;
	}
	export interface NameMatchCandidateOutFormProperties {
		candidateName: FormControl<string | null | undefined>,
		probability: FormControl<number | null | undefined>,
	}
	export function CreateNameMatchCandidateOutFormGroup() {
		return new FormGroup<NameMatchCandidateOutFormProperties>({
			candidateName: new FormControl<string | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchNameMatchedOut {
		matchedNames?: Array<NameMatchedOut>;
	}
	export interface BatchNameMatchedOutFormProperties {
	}
	export function CreateBatchNameMatchedOutFormGroup() {
		return new FormGroup<BatchNameMatchedOutFormProperties>({
		});

	}

	export interface NameMatchedOut {
		id?: string | null;
		matchStatus?: string | null;
		score?: number | null;
	}
	export interface NameMatchedOutFormProperties {
		id: FormControl<string | null | undefined>,
		matchStatus: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreateNameMatchedOutFormGroup() {
		return new FormGroup<NameMatchedOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			matchStatus: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchParsedFullNameGeoIn {
		personalNames?: Array<ParsedFullNameGeoIn>;
	}
	export interface BatchParsedFullNameGeoInFormProperties {
	}
	export function CreateBatchParsedFullNameGeoInFormGroup() {
		return new FormGroup<BatchParsedFullNameGeoInFormProperties>({
		});

	}

	export interface ParsedFullNameGeoIn {
		countryIso2?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		prefixOrTitle?: string | null;
		suffix?: string | null;
	}
	export interface ParsedFullNameGeoInFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		prefixOrTitle: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateParsedFullNameGeoInFormGroup() {
		return new FormGroup<ParsedFullNameGeoInFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			prefixOrTitle: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchParsedFullNameIn {
		personalNames?: Array<ParsedFullNameIn>;
	}
	export interface BatchParsedFullNameInFormProperties {
	}
	export function CreateBatchParsedFullNameInFormGroup() {
		return new FormGroup<BatchParsedFullNameInFormProperties>({
		});

	}

	export interface ParsedFullNameIn {
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		middleName?: string | null;
		prefixOrTitle?: string | null;
		suffix?: string | null;
	}
	export interface ParsedFullNameInFormProperties {
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		middleName: FormControl<string | null | undefined>,
		prefixOrTitle: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateParsedFullNameInFormGroup() {
		return new FormGroup<ParsedFullNameInFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			prefixOrTitle: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameGenderedOut {
		personalNames?: Array<PersonalNameGenderedOut>;
	}
	export interface BatchPersonalNameGenderedOutFormProperties {
	}
	export function CreateBatchPersonalNameGenderedOutFormGroup() {
		return new FormGroup<BatchPersonalNameGenderedOutFormProperties>({
		});

	}

	export interface PersonalNameGenderedOut {

		/** Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value */
		genderScale?: number | null;
		id?: string | null;

		/** Most likely gender */
		likelyGender?: FirstLastNameGenderedOutLikelyGender | null;
		name?: string | null;
		score?: number | null;
	}
	export interface PersonalNameGenderedOutFormProperties {

		/** Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value */
		genderScale: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Most likely gender */
		likelyGender: FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>,
		name: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreatePersonalNameGenderedOutFormGroup() {
		return new FormGroup<PersonalNameGenderedOutFormProperties>({
			genderScale: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			likelyGender: new FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameGeoIn {
		personalNames?: Array<PersonalNameGeoIn>;
	}
	export interface BatchPersonalNameGeoInFormProperties {
	}
	export function CreateBatchPersonalNameGeoInFormGroup() {
		return new FormGroup<BatchPersonalNameGeoInFormProperties>({
		});

	}

	export interface PersonalNameGeoIn {
		countryIso2?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface PersonalNameGeoInFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameGeoInFormGroup() {
		return new FormGroup<PersonalNameGeoInFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameGeoOut {
		personalNames?: Array<PersonalNameGeoOut>;
	}
	export interface BatchPersonalNameGeoOutFormProperties {
	}
	export function CreateBatchPersonalNameGeoOutFormGroup() {
		return new FormGroup<BatchPersonalNameGeoOutFormProperties>({
		});

	}

	export interface PersonalNameGeoOut {
		country?: string | null;
		countryAlt?: string | null;
		id?: string | null;
		name?: string | null;
		region?: string | null;
		score?: number | null;
		subRegion?: string | null;
		topRegion?: string | null;
	}
	export interface PersonalNameGeoOutFormProperties {
		country: FormControl<string | null | undefined>,
		countryAlt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		subRegion: FormControl<string | null | undefined>,
		topRegion: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameGeoOutFormGroup() {
		return new FormGroup<PersonalNameGeoOutFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			countryAlt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			subRegion: new FormControl<string | null | undefined>(undefined),
			topRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameIn {
		personalNames?: Array<PersonalNameIn>;
	}
	export interface BatchPersonalNameInFormProperties {
	}
	export function CreateBatchPersonalNameInFormGroup() {
		return new FormGroup<BatchPersonalNameInFormProperties>({
		});

	}

	export interface BatchPersonalNameParsedOut {
		personalNames?: Array<PersonalNameParsedOut>;
	}
	export interface BatchPersonalNameParsedOutFormProperties {
	}
	export function CreateBatchPersonalNameParsedOutFormGroup() {
		return new FormGroup<BatchPersonalNameParsedOutFormProperties>({
		});

	}

	export interface PersonalNameParsedOut {
		firstLastName?: FirstLastNameOut;
		id?: string | null;
		name?: string | null;
		nameParserType?: string | null;
		nameParserTypeAlt?: string | null;
		score?: number | null;
	}
	export interface PersonalNameParsedOutFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nameParserType: FormControl<string | null | undefined>,
		nameParserTypeAlt: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreatePersonalNameParsedOutFormGroup() {
		return new FormGroup<PersonalNameParsedOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nameParserType: new FormControl<string | null | undefined>(undefined),
			nameParserTypeAlt: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FirstLastNameOut {
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface FirstLastNameOutFormProperties {
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameOutFormGroup() {
		return new FormGroup<FirstLastNameOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillingHistoryOut {
		corporateInvoices?: Array<InvoiceOut>;
		stripeInvoices?: Array<InvoiceOut>;
	}
	export interface BillingHistoryOutFormProperties {
	}
	export function CreateBillingHistoryOutFormGroup() {
		return new FormGroup<BillingHistoryOutFormProperties>({
		});

	}

	export interface InvoiceOut {
		amountDue?: number | null;
		amountPaid?: number | null;
		amountRemaining?: number | null;
		attempted?: boolean | null;
		currency?: string | null;
		description?: string | null;
		dueDate?: Date | null;
		invoiceDate?: Date | null;
		invoiceId?: string | null;
		invoicePdf?: string | null;
		invoiceStatus?: string | null;
		isStriped?: boolean | null;
		items?: Array<InvoiceItemOut>;
		periodEnd?: Date | null;
		periodStart?: Date | null;
		receiptNumber?: string | null;
		stripeCustomerId?: string | null;
		subTotal?: number | null;
		tax?: number | null;
		taxPercent?: number | null;
		total?: number | null;
		userId?: string | null;
	}
	export interface InvoiceOutFormProperties {
		amountDue: FormControl<number | null | undefined>,
		amountPaid: FormControl<number | null | undefined>,
		amountRemaining: FormControl<number | null | undefined>,
		attempted: FormControl<boolean | null | undefined>,
		currency: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		dueDate: FormControl<Date | null | undefined>,
		invoiceDate: FormControl<Date | null | undefined>,
		invoiceId: FormControl<string | null | undefined>,
		invoicePdf: FormControl<string | null | undefined>,
		invoiceStatus: FormControl<string | null | undefined>,
		isStriped: FormControl<boolean | null | undefined>,
		periodEnd: FormControl<Date | null | undefined>,
		periodStart: FormControl<Date | null | undefined>,
		receiptNumber: FormControl<string | null | undefined>,
		stripeCustomerId: FormControl<string | null | undefined>,
		subTotal: FormControl<number | null | undefined>,
		tax: FormControl<number | null | undefined>,
		taxPercent: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceOutFormGroup() {
		return new FormGroup<InvoiceOutFormProperties>({
			amountDue: new FormControl<number | null | undefined>(undefined),
			amountPaid: new FormControl<number | null | undefined>(undefined),
			amountRemaining: new FormControl<number | null | undefined>(undefined),
			attempted: new FormControl<boolean | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			invoiceDate: new FormControl<Date | null | undefined>(undefined),
			invoiceId: new FormControl<string | null | undefined>(undefined),
			invoicePdf: new FormControl<string | null | undefined>(undefined),
			invoiceStatus: new FormControl<string | null | undefined>(undefined),
			isStriped: new FormControl<boolean | null | undefined>(undefined),
			periodEnd: new FormControl<Date | null | undefined>(undefined),
			periodStart: new FormControl<Date | null | undefined>(undefined),
			receiptNumber: new FormControl<string | null | undefined>(undefined),
			stripeCustomerId: new FormControl<string | null | undefined>(undefined),
			subTotal: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			taxPercent: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceItemOut {
		amount?: number | null;
		currency?: string | null;
		description?: string | null;
		invoiceItemType?: string | null;
		itemId?: string | null;
		planDesc?: string | null;
		planName?: string | null;
		planNickname?: string | null;
		quantity?: number | null;
		subscription?: string | null;
		subscriptionItem?: string | null;
	}
	export interface InvoiceItemOutFormProperties {
		amount: FormControl<number | null | undefined>,
		currency: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		invoiceItemType: FormControl<string | null | undefined>,
		itemId: FormControl<string | null | undefined>,
		planDesc: FormControl<string | null | undefined>,
		planName: FormControl<string | null | undefined>,
		planNickname: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		subscription: FormControl<string | null | undefined>,
		subscriptionItem: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceItemOutFormGroup() {
		return new FormGroup<InvoiceItemOutFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			invoiceItemType: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			planDesc: new FormControl<string | null | undefined>(undefined),
			planName: new FormControl<string | null | undefined>(undefined),
			planNickname: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
			subscriptionItem: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillingInfoInOut {
		addressCity?: string | null;
		addressCountry?: string | null;
		addressLine1?: string | null;
		addressLine2?: string | null;
		addressPostalCode?: string | null;
		addressState?: string | null;
		billingEmail?: string | null;
		customerName?: string | null;
		customerPhone?: string | null;
		preferredCurrency?: string | null;
		vatID?: string | null;
	}
	export interface BillingInfoInOutFormProperties {
		addressCity: FormControl<string | null | undefined>,
		addressCountry: FormControl<string | null | undefined>,
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		addressPostalCode: FormControl<string | null | undefined>,
		addressState: FormControl<string | null | undefined>,
		billingEmail: FormControl<string | null | undefined>,
		customerName: FormControl<string | null | undefined>,
		customerPhone: FormControl<string | null | undefined>,
		preferredCurrency: FormControl<string | null | undefined>,
		vatID: FormControl<string | null | undefined>,
	}
	export function CreateBillingInfoInOutFormGroup() {
		return new FormGroup<BillingInfoInOutFormProperties>({
			addressCity: new FormControl<string | null | undefined>(undefined),
			addressCountry: new FormControl<string | null | undefined>(undefined),
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			addressPostalCode: new FormControl<string | null | undefined>(undefined),
			addressState: new FormControl<string | null | undefined>(undefined),
			billingEmail: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			customerPhone: new FormControl<string | null | undefined>(undefined),
			preferredCurrency: new FormControl<string | null | undefined>(undefined),
			vatID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Simple metrics on a classifier */
	export interface ClassifierMetricsOut {
		aiNonVettedEstimatePrecision?: number | null;
		aiNonVettedEstimateRecall?: number | null;
		aiNonVettedEstimateTotal?: number | null;
		aiNonVettedExpectedClassMetrics?: Array<ExpectedClassMetricsOut>;
		aiNonVettedLearnTotal?: number | null;
		aiStartTime?: number | null;
		aiVettedEstimatePrecision?: number | null;
		aiVettedEstimateRecall?: number | null;
		aiVettedEstimateTotal?: number | null;
		aiVettedExpectedClassMetrics?: Array<ExpectedClassMetricsOut>;
		aiVettedLearnTotal?: number | null;
		bufferSize?: number | null;
		classifierName?: string | null;
		classifyDurationsCurrent?: number | null;
		classifyDurationsSummary?: number | null;
		factKeysSize?: number | null;
		factsLearned?: number | null;
		featuresSize?: number | null;
		learnDurationsCurrent?: number | null;
		learnDurationsSummary?: number | null;
		learnQueueSize?: number | null;
		metricTimeStamp?: number | null;
		preClassifyQueueSize?: number | null;
	}

	/** Simple metrics on a classifier */
	export interface ClassifierMetricsOutFormProperties {
		aiNonVettedEstimatePrecision: FormControl<number | null | undefined>,
		aiNonVettedEstimateRecall: FormControl<number | null | undefined>,
		aiNonVettedEstimateTotal: FormControl<number | null | undefined>,
		aiNonVettedLearnTotal: FormControl<number | null | undefined>,
		aiStartTime: FormControl<number | null | undefined>,
		aiVettedEstimatePrecision: FormControl<number | null | undefined>,
		aiVettedEstimateRecall: FormControl<number | null | undefined>,
		aiVettedEstimateTotal: FormControl<number | null | undefined>,
		aiVettedLearnTotal: FormControl<number | null | undefined>,
		bufferSize: FormControl<number | null | undefined>,
		classifierName: FormControl<string | null | undefined>,
		classifyDurationsCurrent: FormControl<number | null | undefined>,
		classifyDurationsSummary: FormControl<number | null | undefined>,
		factKeysSize: FormControl<number | null | undefined>,
		factsLearned: FormControl<number | null | undefined>,
		featuresSize: FormControl<number | null | undefined>,
		learnDurationsCurrent: FormControl<number | null | undefined>,
		learnDurationsSummary: FormControl<number | null | undefined>,
		learnQueueSize: FormControl<number | null | undefined>,
		metricTimeStamp: FormControl<number | null | undefined>,
		preClassifyQueueSize: FormControl<number | null | undefined>,
	}
	export function CreateClassifierMetricsOutFormGroup() {
		return new FormGroup<ClassifierMetricsOutFormProperties>({
			aiNonVettedEstimatePrecision: new FormControl<number | null | undefined>(undefined),
			aiNonVettedEstimateRecall: new FormControl<number | null | undefined>(undefined),
			aiNonVettedEstimateTotal: new FormControl<number | null | undefined>(undefined),
			aiNonVettedLearnTotal: new FormControl<number | null | undefined>(undefined),
			aiStartTime: new FormControl<number | null | undefined>(undefined),
			aiVettedEstimatePrecision: new FormControl<number | null | undefined>(undefined),
			aiVettedEstimateRecall: new FormControl<number | null | undefined>(undefined),
			aiVettedEstimateTotal: new FormControl<number | null | undefined>(undefined),
			aiVettedLearnTotal: new FormControl<number | null | undefined>(undefined),
			bufferSize: new FormControl<number | null | undefined>(undefined),
			classifierName: new FormControl<string | null | undefined>(undefined),
			classifyDurationsCurrent: new FormControl<number | null | undefined>(undefined),
			classifyDurationsSummary: new FormControl<number | null | undefined>(undefined),
			factKeysSize: new FormControl<number | null | undefined>(undefined),
			factsLearned: new FormControl<number | null | undefined>(undefined),
			featuresSize: new FormControl<number | null | undefined>(undefined),
			learnDurationsCurrent: new FormControl<number | null | undefined>(undefined),
			learnDurationsSummary: new FormControl<number | null | undefined>(undefined),
			learnQueueSize: new FormControl<number | null | undefined>(undefined),
			metricTimeStamp: new FormControl<number | null | undefined>(undefined),
			preClassifyQueueSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Simple metrics on a classifier, for a given expected class */
	export interface ExpectedClassMetricsOut {
		aiEstimatePrecision?: number | null;
		aiEstimateRecall?: number | null;
		aiEstimateTotal?: number | null;
		aiLearnTotal?: number | null;
		classifierName?: string | null;
		expectedClass?: string | null;
	}

	/** Simple metrics on a classifier, for a given expected class */
	export interface ExpectedClassMetricsOutFormProperties {
		aiEstimatePrecision: FormControl<number | null | undefined>,
		aiEstimateRecall: FormControl<number | null | undefined>,
		aiEstimateTotal: FormControl<number | null | undefined>,
		aiLearnTotal: FormControl<number | null | undefined>,
		classifierName: FormControl<string | null | undefined>,
		expectedClass: FormControl<string | null | undefined>,
	}
	export function CreateExpectedClassMetricsOutFormGroup() {
		return new FormGroup<ExpectedClassMetricsOutFormProperties>({
			aiEstimatePrecision: new FormControl<number | null | undefined>(undefined),
			aiEstimateRecall: new FormControl<number | null | undefined>(undefined),
			aiEstimateTotal: new FormControl<number | null | undefined>(undefined),
			aiLearnTotal: new FormControl<number | null | undefined>(undefined),
			classifierName: new FormControl<string | null | undefined>(undefined),
			expectedClass: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrenciesOut {
		currenciesIso3?: Array<string>;
	}
	export interface CurrenciesOutFormProperties {
	}
	export function CreateCurrenciesOutFormGroup() {
		return new FormGroup<CurrenciesOutFormProperties>({
		});

	}

	export interface DeployUIOut {
		errorMessage?: string | null;
		succeeded?: boolean | null;
	}
	export interface DeployUIOutFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		succeeded: FormControl<boolean | null | undefined>,
	}
	export function CreateDeployUIOutFormGroup() {
		return new FormGroup<DeployUIOutFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			succeeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FeedbackLoopOut {
		feedbackCredits?: number | null;
	}
	export interface FeedbackLoopOutFormProperties {
		feedbackCredits: FormControl<number | null | undefined>,
	}
	export function CreateFeedbackLoopOutFormGroup() {
		return new FormGroup<FeedbackLoopOutFormProperties>({
			feedbackCredits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NamSorCounterOut {
		counter?: number | null;
	}
	export interface NamSorCounterOutFormProperties {
		counter: FormControl<number | null | undefined>,
	}
	export function CreateNamSorCounterOutFormGroup() {
		return new FormGroup<NamSorCounterOutFormProperties>({
			counter: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RomanizedNameOut {
		id?: string | null;
		latinName?: string | null;
		originalName?: string | null;
		score?: number | null;
		sourceLanguage?: string | null;
		sourceScript?: string | null;
		targetLanguage?: string | null;
		targetScript?: string | null;
	}
	export interface RomanizedNameOutFormProperties {
		id: FormControl<string | null | undefined>,
		latinName: FormControl<string | null | undefined>,
		originalName: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		sourceLanguage: FormControl<string | null | undefined>,
		sourceScript: FormControl<string | null | undefined>,
		targetLanguage: FormControl<string | null | undefined>,
		targetScript: FormControl<string | null | undefined>,
	}
	export function CreateRomanizedNameOutFormGroup() {
		return new FormGroup<RomanizedNameOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			latinName: new FormControl<string | null | undefined>(undefined),
			originalName: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			sourceLanguage: new FormControl<string | null | undefined>(undefined),
			sourceScript: new FormControl<string | null | undefined>(undefined),
			targetLanguage: new FormControl<string | null | undefined>(undefined),
			targetScript: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SoftwareVersionOut {
		softwareNameAndVersion?: string | null;
		softwareVersion?: Array<number>;
	}
	export interface SoftwareVersionOutFormProperties {
		softwareNameAndVersion: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareVersionOutFormGroup() {
		return new FormGroup<SoftwareVersionOutFormProperties>({
			softwareNameAndVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Simple metrics on source, with details by classifier. */
	export interface SourceDetailedMetricsOut {
		aiEstimatePrecision?: number | null;
		aiEstimateRecall?: number | null;
		aiEstimateTotal?: number | null;
		aiLearnTotal?: number | null;
		aiStartTime?: number | null;
		classifierName?: string | null;
		expectedClassMetrics?: Array<ExpectedClassMetricsOut>;
		metricTimeStamp?: number | null;
		snapshotDate?: number | null;
		source?: APIKeyOut;
	}

	/** Simple metrics on source, with details by classifier. */
	export interface SourceDetailedMetricsOutFormProperties {
		aiEstimatePrecision: FormControl<number | null | undefined>,
		aiEstimateRecall: FormControl<number | null | undefined>,
		aiEstimateTotal: FormControl<number | null | undefined>,
		aiLearnTotal: FormControl<number | null | undefined>,
		aiStartTime: FormControl<number | null | undefined>,
		classifierName: FormControl<string | null | undefined>,
		metricTimeStamp: FormControl<number | null | undefined>,
		snapshotDate: FormControl<number | null | undefined>,
	}
	export function CreateSourceDetailedMetricsOutFormGroup() {
		return new FormGroup<SourceDetailedMetricsOutFormProperties>({
			aiEstimatePrecision: new FormControl<number | null | undefined>(undefined),
			aiEstimateRecall: new FormControl<number | null | undefined>(undefined),
			aiEstimateTotal: new FormControl<number | null | undefined>(undefined),
			aiLearnTotal: new FormControl<number | null | undefined>(undefined),
			aiStartTime: new FormControl<number | null | undefined>(undefined),
			classifierName: new FormControl<string | null | undefined>(undefined),
			metricTimeStamp: new FormControl<number | null | undefined>(undefined),
			snapshotDate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Simple metrics on a classifier, for a given source */
	export interface SourceMetricsOut {
		aiEstimatePrecision?: number | null;
		aiEstimateRecall?: number | null;
		aiEstimateTotal?: number | null;
		aiLearnTotal?: number | null;
		aiStartTime?: number | null;
		classifierName?: string | null;
		metricTimeStamp?: number | null;
		snapshotDate?: number | null;
		source?: APIKeyOut;
	}

	/** Simple metrics on a classifier, for a given source */
	export interface SourceMetricsOutFormProperties {
		aiEstimatePrecision: FormControl<number | null | undefined>,
		aiEstimateRecall: FormControl<number | null | undefined>,
		aiEstimateTotal: FormControl<number | null | undefined>,
		aiLearnTotal: FormControl<number | null | undefined>,
		aiStartTime: FormControl<number | null | undefined>,
		classifierName: FormControl<string | null | undefined>,
		metricTimeStamp: FormControl<number | null | undefined>,
		snapshotDate: FormControl<number | null | undefined>,
	}
	export function CreateSourceMetricsOutFormGroup() {
		return new FormGroup<SourceMetricsOutFormProperties>({
			aiEstimatePrecision: new FormControl<number | null | undefined>(undefined),
			aiEstimateRecall: new FormControl<number | null | undefined>(undefined),
			aiEstimateTotal: new FormControl<number | null | undefined>(undefined),
			aiLearnTotal: new FormControl<number | null | undefined>(undefined),
			aiStartTime: new FormControl<number | null | undefined>(undefined),
			classifierName: new FormControl<string | null | undefined>(undefined),
			metricTimeStamp: new FormControl<number | null | undefined>(undefined),
			snapshotDate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StripeCardOut {
		brand?: string | null;
		defaultCard?: boolean | null;
		expMonth?: number | null;
		expYear?: number | null;
		last4?: string | null;
		sourceId?: string | null;
	}
	export interface StripeCardOutFormProperties {
		brand: FormControl<string | null | undefined>,
		defaultCard: FormControl<boolean | null | undefined>,
		expMonth: FormControl<number | null | undefined>,
		expYear: FormControl<number | null | undefined>,
		last4: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,
	}
	export function CreateStripeCardOutFormGroup() {
		return new FormGroup<StripeCardOutFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			defaultCard: new FormControl<boolean | null | undefined>(undefined),
			expMonth: new FormControl<number | null | undefined>(undefined),
			expYear: new FormControl<number | null | undefined>(undefined),
			last4: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StripeCustomerOut {
		sourceCountry?: string | null;
		sourceCurrency?: string | null;
		stripeCustomerId?: string | null;
		stripedCards?: Array<StripeCardOut>;
	}
	export interface StripeCustomerOutFormProperties {
		sourceCountry: FormControl<string | null | undefined>,
		sourceCurrency: FormControl<string | null | undefined>,
		stripeCustomerId: FormControl<string | null | undefined>,
	}
	export function CreateStripeCustomerOutFormGroup() {
		return new FormGroup<StripeCustomerOutFormProperties>({
			sourceCountry: new FormControl<string | null | undefined>(undefined),
			sourceCurrency: new FormControl<string | null | undefined>(undefined),
			stripeCustomerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SystemMetricsOut {
		classifierMetrics?: Array<ClassifierMetricsOut>;
		freeMem?: number | null;
		maxMem?: number | null;
		sourceMetrics?: Array<SourceMetricsOut>;
		totalMem?: number | null;
	}
	export interface SystemMetricsOutFormProperties {
		freeMem: FormControl<number | null | undefined>,
		maxMem: FormControl<number | null | undefined>,
		totalMem: FormControl<number | null | undefined>,
	}
	export function CreateSystemMetricsOutFormGroup() {
		return new FormGroup<SystemMetricsOutFormProperties>({
			freeMem: new FormControl<number | null | undefined>(undefined),
			maxMem: new FormControl<number | null | undefined>(undefined),
			totalMem: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserInfoOut {
		apiKey?: string | null;
		disabled?: boolean | null;
		displayName?: string | null;
		email?: string | null;
		emailVerified?: boolean | null;
		firstKnownIpAddress?: string | null;
		otherInfos?: Array<UserInfoOut>;
		phoneNumber?: string | null;
		photoUrl?: string | null;
		providerId?: string | null;
		stripeCustomerId?: string | null;
		stripePerishableKey?: string | null;
		timeStamp?: number | null;
		uid?: string | null;
		verifyToken?: string | null;
	}
	export interface UserInfoOutFormProperties {
		apiKey: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		emailVerified: FormControl<boolean | null | undefined>,
		firstKnownIpAddress: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		photoUrl: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
		stripeCustomerId: FormControl<string | null | undefined>,
		stripePerishableKey: FormControl<string | null | undefined>,
		timeStamp: FormControl<number | null | undefined>,
		uid: FormControl<string | null | undefined>,
		verifyToken: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoOutFormGroup() {
		return new FormGroup<UserInfoOutFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			firstKnownIpAddress: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			stripeCustomerId: new FormControl<string | null | undefined>(undefined),
			stripePerishableKey: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<number | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			verifyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Add usage credits to an API Key.
		 * Get api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}
		 * @return {SystemMetricsOut} Estimate new after applying credits.
		 */
		AddCredits(apiKey: string, usageCredits: number, userMessage: string): Observable<SystemMetricsOut> {
			return this.http.get<SystemMetricsOut>(this.baseUri + 'api2/json/addCredits/' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '/' + usageCredits + '/' + (userMessage == null ? '' : encodeURIComponent(userMessage)), {});
		}

		/**
		 * Activate/deactivate anonymization for a source.
		 * Get api2/json/anonymize/{source}/{anonymized}
		 * @return {void} Anonymization of a source.
		 */
		Anonymize(source: string, anonymized: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/anonymize/' + (source == null ? '' : encodeURIComponent(source)) + '/' + anonymized, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List of API services and usage cost in Units (default is 1=ONE Unit).
		 * Get api2/json/apiServices
		 * @return {APIPlansOut} Available services
		 */
		AvailableServices(): Observable<APIPlansOut> {
			return this.http.get<APIPlansOut>(this.baseUri + 'api2/json/apiServices', {});
		}

		/**
		 * Print current API usage.
		 * Get api2/json/apiUsage
		 * @return {APIPeriodUsageOut} Print current API usage.
		 */
		ApiUsage(): Observable<APIPeriodUsageOut> {
			return this.http.get<APIPeriodUsageOut>(this.baseUri + 'api2/json/apiUsage', {});
		}

		/**
		 * Print historical API usage.
		 * Get api2/json/apiUsageHistory
		 * @return {APIPeriodUsageOut} Print historical API usage.
		 */
		ApiUsageHistory(): Observable<APIPeriodUsageOut> {
			return this.http.get<APIPeriodUsageOut>(this.baseUri + 'api2/json/apiUsageHistory', {});
		}

		/**
		 * Print historical API usage (in an aggregated view, by service, by day/hour/min).
		 * Get api2/json/apiUsageHistoryAggregate
		 * @return {APIPeriodUsageOut} Print historical API usage.
		 */
		ApiUsageHistoryAggregate(): Observable<APIPeriodUsageOut> {
			return this.http.get<APIPeriodUsageOut>(this.baseUri + 'api2/json/apiUsageHistoryAggregate', {});
		}

		/**
		 * List all available plans in the default currency (usd).
		 * Get api2/json/availablePlans
		 * @return {APIPlansOut} Available plans
		 */
		AvailablePlans_1(): Observable<APIPlansOut> {
			return this.http.get<APIPlansOut>(this.baseUri + 'api2/json/availablePlans', {});
		}

		/**
		 * List all available plans in the user's preferred currency.
		 * Get api2/json/availablePlans/{token}
		 * @return {APIPlansOut} Available plans
		 */
		AvailablePlans(token: string): Observable<APIPlansOut> {
			return this.http.get<APIPlansOut>(this.baseUri + 'api2/json/availablePlans/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * List possible currency options for billing (USD, EUR, GBP, ...)
		 * Get api2/json/billingCurrencies
		 * @return {CurrenciesOut} The supported billing currencies.
		 */
		BillingCurrencies(): Observable<CurrenciesOut> {
			return this.http.get<CurrenciesOut>(this.baseUri + 'api2/json/billingCurrencies', {});
		}

		/**
		 * Read the history billing information (invoices paid via Stripe or manually).
		 * Get api2/json/billingHistory/{token}
		 * @return {BillingHistoryOut} The billing history
		 */
		BillingHistory(token: string): Observable<BillingHistoryOut> {
			return this.http.get<BillingHistoryOut>(this.baseUri + 'api2/json/billingHistory/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Read the billing information (company name, address, phone, vat ID)
		 * Get api2/json/billingInfo/{token}
		 * @return {BillingInfoInOut} The current billing info
		 */
		BillingInfo(token: string): Observable<BillingInfoInOut> {
			return this.http.get<BillingInfoInOut>(this.baseUri + 'api2/json/billingInfo/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
		 * Get api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}
		 * @return {RomanizedNameOut} A romanized name.
		 */
		ChineseNameCandidates(chineseSurnameLatin: string, chineseGivenNameLatin: string): Observable<RomanizedNameOut> {
			return this.http.get<RomanizedNameOut>(this.baseUri + 'api2/json/chineseNameCandidates/' + (chineseSurnameLatin == null ? '' : encodeURIComponent(chineseSurnameLatin)) + '/' + (chineseGivenNameLatin == null ? '' : encodeURIComponent(chineseGivenNameLatin)), {});
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
		 * Post api2/json/chineseNameCandidatesBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
		 * @return {BatchNameMatchCandidatesOut} A list of genderized names.
		 */
		ChineseNameCandidatesBatch(requestBody: BatchFirstLastNameIn): Observable<BatchNameMatchCandidatesOut> {
			return this.http.post<BatchNameMatchCandidatesOut>(this.baseUri + 'api2/json/chineseNameCandidatesBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
		 * Post api2/json/chineseNameCandidatesGenderBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
		 * @return {BatchNameMatchCandidatesOut} A list of genderized names.
		 */
		ChineseNameCandidatesGenderBatch(requestBody: BatchFirstLastNameIn): Observable<BatchNameMatchCandidatesOut> {
			return this.http.post<BatchNameMatchCandidatesOut>(this.baseUri + 'api2/json/chineseNameCandidatesGenderBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
		 * Get api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}
		 * @return {RomanizedNameOut} A romanized name.
		 */
		ChineseNameGenderCandidates(chineseSurnameLatin: string, chineseGivenNameLatin: string, knownGender: string): Observable<RomanizedNameOut> {
			return this.http.get<RomanizedNameOut>(this.baseUri + 'api2/json/chineseNameGenderCandidates/' + (chineseSurnameLatin == null ? '' : encodeURIComponent(chineseSurnameLatin)) + '/' + (chineseGivenNameLatin == null ? '' : encodeURIComponent(chineseGivenNameLatin)) + '/' + (knownGender == null ? '' : encodeURIComponent(knownGender)), {});
		}

		/**
		 * Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
		 * Get api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}
		 * @return {RomanizedNameOut} A romanized name.
		 */
		ChineseNameMatch(chineseSurnameLatin: string, chineseGivenNameLatin: string, chineseName: string): Observable<RomanizedNameOut> {
			return this.http.get<RomanizedNameOut>(this.baseUri + 'api2/json/chineseNameMatch/' + (chineseSurnameLatin == null ? '' : encodeURIComponent(chineseSurnameLatin)) + '/' + (chineseGivenNameLatin == null ? '' : encodeURIComponent(chineseGivenNameLatin)) + '/' + (chineseName == null ? '' : encodeURIComponent(chineseName)), {});
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
		 * Post api2/json/chineseNameMatchBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
		 * @return {BatchNameMatchCandidatesOut} A list of genderized names.
		 */
		ChineseNameMatchBatch(requestBody: BatchFirstLastNameIn): Observable<BatchNameMatchCandidatesOut> {
			return this.http.post<BatchNameMatchCandidatesOut>(this.baseUri + 'api2/json/chineseNameMatchBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Setting an API Key to a corporate status.
		 * Get api2/json/corporateKey/{apiKey}/{corporate}
		 * @return {void} API Key set to a corporate status.
		 */
		CorporateKey(apiKey: string, corporate: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/corporateKey/' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '/' + corporate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * [USES 10 UNITS] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
		 * Get api2/json/country/{personalNameFull}
		 * @return {PersonalNameGeoOut} A origined name.
		 */
		Country(personalNameFull: string): Observable<PersonalNameGeoOut> {
			return this.http.get<PersonalNameGeoOut>(this.baseUri + 'api2/json/country/' + (personalNameFull == null ? '' : encodeURIComponent(personalNameFull)), {});
		}

		/**
		 * [USES 10 UNITS] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
		 * Post api2/json/countryBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names
		 * @return {BatchPersonalNameGeoOut} A list of genderized names.
		 */
		CountryBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameGeoOut> {
			return this.http.post<BatchPersonalNameGeoOut>(this.baseUri + 'api2/json/countryBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update debug level for a classifier
		 * Get api2/json/debugLevel/{logger}/{level}
		 * @return {void} 
		 */
		DebugLevel(logger: string, level: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/debugLevel/' + (logger == null ? '' : encodeURIComponent(logger)) + '/' + (level == null ? '' : encodeURIComponent(level)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * [USES 20 UNITS] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
		 * Get api2/json/diaspora/{countryIso2}/{firstName}/{lastName}
		 * @return {FirstLastNameDiasporaedOut} A diaspora / ethnicity for given name and geography.
		 */
		Diaspora(countryIso2: string, firstName: string, lastName: string): Observable<FirstLastNameDiasporaedOut> {
			return this.http.get<FirstLastNameDiasporaedOut>(this.baseUri + 'api2/json/diaspora/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)) + '/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 20 UNITS] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
		 * Post api2/json/diasporaBatch
		 * @param {BatchFirstLastNameGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameDiasporaedOut} A list of diaspora / ethnicity given a name and residency.
		 */
		DiasporaBatch(requestBody: BatchFirstLastNameGeoIn): Observable<BatchFirstLastNameDiasporaedOut> {
			return this.http.post<BatchFirstLastNameDiasporaedOut>(this.baseUri + 'api2/json/diasporaBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Flush counters.
		 * Get api2/json/flush
		 * @return {void} Shutdown AI.
		 */
		Flush(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/flush', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Infer the likely gender of a name.
		 * Get api2/json/gender/{firstName}/{lastName}
		 * @return {FirstLastNameGenderedOut} A genderized name.
		 */
		Gender(firstName: string, lastName: string): Observable<FirstLastNameGenderedOut> {
			return this.http.get<FirstLastNameGenderedOut>(this.baseUri + 'api2/json/gender/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * Infer the likely gender of up to 100 names, detecting automatically the cultural context.
		 * Post api2/json/genderBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameGenderedOut} A list of genderized names.
		 */
		GenderBatch(requestBody: BatchFirstLastNameIn): Observable<BatchFirstLastNameGenderedOut> {
			return this.http.post<BatchFirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of a Chinese full name ex. 王晓明
		 * Get api2/json/genderChineseName/{chineseName}
		 * @return {PersonalNameGenderedOut} A genderized name.
		 */
		GenderChineseName(chineseName: string): Observable<PersonalNameGenderedOut> {
			return this.http.get<PersonalNameGenderedOut>(this.baseUri + 'api2/json/genderChineseName/' + (chineseName == null ? '' : encodeURIComponent(chineseName)), {});
		}

		/**
		 * Infer the likely gender of up to 100 full names ex. 王晓明
		 * Post api2/json/genderChineseNameBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names, with a country ISO2 code
		 * @return {BatchPersonalNameGenderedOut} A list of genderized names.
		 */
		GenderChineseNameBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameGenderedOut> {
			return this.http.post<BatchPersonalNameGenderedOut>(this.baseUri + 'api2/json/genderChineseNameBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of a Chinese name in LATIN (Pinyin).
		 * Get api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}
		 * @return {FirstLastNameGenderedOut} A genderized name.
		 */
		GenderChineseNamePinyin(chineseSurnameLatin: string, chineseGivenNameLatin: string): Observable<FirstLastNameGenderedOut> {
			return this.http.get<FirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderChineseNamePinyin/' + (chineseSurnameLatin == null ? '' : encodeURIComponent(chineseSurnameLatin)) + '/' + (chineseGivenNameLatin == null ? '' : encodeURIComponent(chineseGivenNameLatin)), {});
		}

		/**
		 * Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
		 * Post api2/json/genderChineseNamePinyinBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of names, with country code.
		 * @return {BatchFirstLastNameGenderedOut} A list of genderized names.
		 */
		GenderChineseNamePinyinBatch(requestBody: BatchFirstLastNameIn): Observable<BatchFirstLastNameGenderedOut> {
			return this.http.post<BatchFirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderChineseNamePinyinBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of a full name, ex. John H. Smith
		 * Get api2/json/genderFull/{fullName}
		 * @return {FirstLastNameGenderedOut} A genderized name.
		 */
		GenderFull(fullName: string): Observable<FirstLastNameGenderedOut> {
			return this.http.get<FirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderFull/' + (fullName == null ? '' : encodeURIComponent(fullName)), {});
		}

		/**
		 * Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
		 * Post api2/json/genderFullBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names
		 * @return {BatchPersonalNameGenderedOut} A list of genderized names.
		 */
		GenderFullBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameGenderedOut> {
			return this.http.post<BatchPersonalNameGenderedOut>(this.baseUri + 'api2/json/genderFullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of a full name, given a local context (ISO2 country code).
		 * Get api2/json/genderFullGeo/{fullName}/{countryIso2}
		 * @return {FirstLastNameGenderedOut} A genderized name.
		 */
		GenderFullGeo(fullName: string, countryIso2: string): Observable<FirstLastNameGenderedOut> {
			return this.http.get<FirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderFullGeo/' + (fullName == null ? '' : encodeURIComponent(fullName)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
		}

		/**
		 * Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
		 * Post api2/json/genderFullGeoBatch
		 * @param {BatchPersonalNameGeoIn} requestBody A list of personal names, with a country ISO2 code
		 * @return {BatchPersonalNameGenderedOut} A list of genderized names.
		 */
		GenderFullGeoBatch(requestBody: BatchPersonalNameGeoIn): Observable<BatchPersonalNameGenderedOut> {
			return this.http.post<BatchPersonalNameGenderedOut>(this.baseUri + 'api2/json/genderFullGeoBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of a name, given a local context (ISO2 country code).
		 * Get api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}
		 * @return {FirstLastNameGenderedOut} A genderized name.
		 */
		GenderGeo(firstName: string, lastName: string, countryIso2: string): Observable<FirstLastNameGenderedOut> {
			return this.http.get<FirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderGeo/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
		}

		/**
		 * Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
		 * Post api2/json/genderGeoBatch
		 * @param {BatchFirstLastNameGeoIn} requestBody A list of names, with country code.
		 * @return {BatchFirstLastNameGenderedOut} A list of genderized names.
		 */
		GenderGeoBatch(requestBody: BatchFirstLastNameGeoIn): Observable<BatchFirstLastNameGenderedOut> {
			return this.http.post<BatchFirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderGeoBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Invalidate system caches.
		 * Get api2/json/invalidateCache
		 * @return {void} Clear caches.
		 */
		InvalidateCache(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/invalidateCache', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate/deactivate learning from a source.
		 * Get api2/json/learnable/{source}/{learnable}
		 * @return {void} Vetting of a source.
		 */
		Learnable(source: string, learnable: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/learnable/' + (source == null ? '' : encodeURIComponent(source)) + '/' + learnable, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the overall API counter
		 * Get api2/json/namsorCounter
		 * @return {SoftwareVersionOut} The overall API counter
		 */
		NamsorCounter(): Observable<SoftwareVersionOut> {
			return this.http.get<SoftwareVersionOut>(this.baseUri + 'api2/json/namsorCounter', {});
		}

		/**
		 * [USES 10 UNITS] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
		 * Get api2/json/origin/{firstName}/{lastName}
		 * @return {FirstLastNameOriginedOut} A origined name.
		 */
		Origin(firstName: string, lastName: string): Observable<FirstLastNameOriginedOut> {
			return this.http.get<FirstLastNameOriginedOut>(this.baseUri + 'api2/json/origin/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 10 UNITS] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
		 * Post api2/json/originBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameOriginedOut} A list of genderized names.
		 */
		OriginBatch(requestBody: BatchFirstLastNameIn): Observable<BatchFirstLastNameOriginedOut> {
			return this.http.post<BatchFirstLastNameOriginedOut>(this.baseUri + 'api2/json/originBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
		 * Get api2/json/parseChineseName/{chineseName}
		 * @return {PersonalNameParsedOut} A origined name.
		 */
		ParseChineseName(chineseName: string): Observable<PersonalNameParsedOut> {
			return this.http.get<PersonalNameParsedOut>(this.baseUri + 'api2/json/parseChineseName/' + (chineseName == null ? '' : encodeURIComponent(chineseName)), {});
		}

		/**
		 * Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
		 * Post api2/json/parseChineseNameBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names
		 * @return {BatchPersonalNameParsedOut} A list of parsed names.
		 */
		ParseChineseNameBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameParsedOut> {
			return this.http.post<BatchPersonalNameParsedOut>(this.baseUri + 'api2/json/parseChineseNameBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
		 * Get api2/json/parseName/{nameFull}
		 * @return {PersonalNameParsedOut} A origined name.
		 */
		ParseName(nameFull: string): Observable<PersonalNameParsedOut> {
			return this.http.get<PersonalNameParsedOut>(this.baseUri + 'api2/json/parseName/' + (nameFull == null ? '' : encodeURIComponent(nameFull)), {});
		}

		/**
		 * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
		 * Get api2/json/parseName/{nameFull}/{countryIso2}
		 * @return {PersonalNameParsedOut} A origined name.
		 */
		ParseNameGeo(nameFull: string, countryIso2: string): Observable<PersonalNameParsedOut> {
			return this.http.get<PersonalNameParsedOut>(this.baseUri + 'api2/json/parseName/' + (nameFull == null ? '' : encodeURIComponent(nameFull)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
		}

		/**
		 * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
		 * Post api2/json/parseNameBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names
		 * @return {BatchPersonalNameParsedOut} A list of parsed names.
		 */
		ParseNameBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameParsedOut> {
			return this.http.post<BatchPersonalNameParsedOut>(this.baseUri + 'api2/json/parseNameBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision.
		 * Post api2/json/parseNameGeoBatch
		 * @param {BatchPersonalNameGeoIn} requestBody A list of personal names
		 * @return {BatchPersonalNameParsedOut} A list of parsed names.
		 */
		ParseNameGeoBatch(requestBody: BatchPersonalNameGeoIn): Observable<BatchPersonalNameParsedOut> {
			return this.http.post<BatchPersonalNameParsedOut>(this.baseUri + 'api2/json/parseNameGeoBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.
		 * Post api2/json/parsedGenderBatch
		 * @param {BatchParsedFullNameIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameGenderedOut} A list of genderized names.
		 */
		ParsedGenderBatch(requestBody: BatchParsedFullNameIn): Observable<BatchFirstLastNameGenderedOut> {
			return this.http.post<BatchFirstLastNameGenderedOut>(this.baseUri + 'api2/json/parsedGenderBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.
		 * Post api2/json/parsedGenderGeoBatch
		 * @param {BatchParsedFullNameGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameGenderedOut} A list of genderized names.
		 */
		ParsedGenderGeoBatch(requestBody: BatchParsedFullNameGeoIn): Observable<BatchFirstLastNameGenderedOut> {
			return this.http.post<BatchFirstLastNameGenderedOut>(this.baseUri + 'api2/json/parsedGenderGeoBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the Stripe payment information associated with the current google auth session token.
		 * Get api2/json/paymentInfo/{token}
		 * @return {APIKeyOut} An session token
		 */
		PaymentInfo(token: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/paymentInfo/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * [USES 11 UNITS] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
		 * Get api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}
		 * @return {FirstLastNamePhoneCodedOut} A name with country and phone code.
		 */
		PhoneCode(firstName: string, lastName: string, phoneNumber: string): Observable<FirstLastNamePhoneCodedOut> {
			return this.http.get<FirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCode/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)), {});
		}

		/**
		 * [USES 11 UNITS] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
		 * Post api2/json/phoneCodeBatch
		 * @param {BatchFirstLastNamePhoneNumberIn} requestBody A list of personal names
		 * @return {BatchFirstLastNamePhoneCodedOut} A list of genderized names.
		 */
		PhoneCodeBatch(requestBody: BatchFirstLastNamePhoneNumberIn): Observable<BatchFirstLastNamePhoneCodedOut> {
			return this.http.post<BatchFirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCodeBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 11 UNITS] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
		 * Get api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}
		 * @return {FirstLastNamePhoneCodedOut} A name with country and phone code.
		 */
		PhoneCodeGeo(firstName: string, lastName: string, phoneNumber: string, countryIso2: string): Observable<FirstLastNamePhoneCodedOut> {
			return this.http.get<FirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCodeGeo/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
		}

		/**
		 * [USES 11 UNITS] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
		 * Post api2/json/phoneCodeGeoBatch
		 * @param {BatchFirstLastNamePhoneNumberGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNamePhoneCodedOut} A list of genderized names.
		 */
		PhoneCodeGeoBatch(requestBody: BatchFirstLastNamePhoneNumberGeoIn): Observable<BatchFirstLastNamePhoneCodedOut> {
			return this.http.post<BatchFirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCodeGeoBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
		 * Get api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}
		 * @return {FirstLastNamePhoneCodedOut} A name with country and phone code.
		 */
		PhoneCodeGeoFeedbackLoop(firstName: string, lastName: string, phoneNumber: string, phoneNumberE164: string, countryIso2: string): Observable<FirstLastNamePhoneCodedOut> {
			return this.http.get<FirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCodeGeoFeedbackLoop/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '/' + (phoneNumberE164 == null ? '' : encodeURIComponent(phoneNumberE164)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
		}

		/**
		 * Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
		 * Get api2/json/pinyinChineseName/{chineseName}
		 * @return {PersonalNameParsedOut} A pinyin name.
		 */
		PinyinChineseName(chineseName: string): Observable<PersonalNameParsedOut> {
			return this.http.get<PersonalNameParsedOut>(this.baseUri + 'api2/json/pinyinChineseName/' + (chineseName == null ? '' : encodeURIComponent(chineseName)), {});
		}

		/**
		 * Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
		 * Post api2/json/pinyinChineseNameBatch
		 * @param {BatchPersonalNameIn} requestBody A list of Chinese names
		 * @return {BatchPersonalNameParsedOut} A list of Pinyin names.
		 */
		PinyinChineseNameBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameParsedOut> {
			return this.http.post<BatchPersonalNameParsedOut>(this.baseUri + 'api2/json/pinyinChineseNameBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.
		 * Get api2/json/procureKey/{token}
		 * @return {APIKeyOut} An API Key
		 */
		ProcureKey(token: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/procureKey/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Redeploy UI from current dev branch.
		 * Get api2/json/redeployUI
		 * @return {void} Redeploy UI from DEV.
		 */
		RedeployUI_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/redeployUI', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Redeploy UI from current dev branch.
		 * Get api2/json/redeployUI/{live}
		 * @return {void} Redeploy UI from DEV.
		 */
		RedeployUI(live: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/redeployUI/' + live, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove the user account.
		 * Get api2/json/removeUserAccount/{token}
		 * @return {APIPlanSubscriptionOut} An API subscription
		 */
		RemoveUserAccount(token: string): Observable<APIPlanSubscriptionOut> {
			return this.http.get<APIPlanSubscriptionOut>(this.baseUri + 'api2/json/removeUserAccount/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Remove (on behalf) a user account.
		 * Get api2/json/removeUserAccountOnBehalf/{apiKey}
		 * @return {APIPlanSubscriptionOut} An API subscription
		 */
		RemoveUserAccountOnBehalf(apiKey: string): Observable<APIPlanSubscriptionOut> {
			return this.http.get<APIPlanSubscriptionOut>(this.baseUri + 'api2/json/removeUserAccountOnBehalf/' + (apiKey == null ? '' : encodeURIComponent(apiKey)), {});
		}

		/**
		 * Stop learning and shutdown system.
		 * Get api2/json/shutdown
		 * @return {void} Shutdown AI.
		 */
		Shutdown(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/shutdown', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the current software version
		 * Get api2/json/softwareVersion
		 * @return {SoftwareVersionOut} The current software version
		 */
		SoftwareVersion(): Observable<SoftwareVersionOut> {
			return this.http.get<SoftwareVersionOut>(this.baseUri + 'api2/json/softwareVersion', {});
		}

		/**
		 * Print basic source statistics.
		 * Get api2/json/sourceStats/{source}
		 * @return {SystemMetricsOut} Current system status.
		 */
		SourceStats(source: string): Observable<SystemMetricsOut> {
			return this.http.get<SystemMetricsOut>(this.baseUri + 'api2/json/sourceStats/' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Print basic system statistics.
		 * Get api2/json/stats
		 * @return {SystemMetricsOut} Current system status.
		 */
		Stats(): Observable<SystemMetricsOut> {
			return this.http.get<SystemMetricsOut>(this.baseUri + 'api2/json/stats', {});
		}

		/**
		 * Connects a Stripe Account.
		 * Get api2/json/stripeConnect
		 * @return {void} 
		 */
		StripeConnect(scope: string | null | undefined, code: string | null | undefined, error: string | null | undefined, error_description: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/stripeConnect?scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&error=' + (error == null ? '' : encodeURIComponent(error)) + '&error_description=' + (error_description == null ? '' : encodeURIComponent(error_description)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe to a give API plan, using the user's preferred or default currency.
		 * Get api2/json/subscribePlan/{planName}/{token}
		 * @return {APIPlanSubscriptionOut} An API subscription
		 */
		SubscribePlan(planName: string, token: string): Observable<APIPlanSubscriptionOut> {
			return this.http.get<APIPlanSubscriptionOut>(this.baseUri + 'api2/json/subscribePlan/' + (planName == null ? '' : encodeURIComponent(planName)) + '/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Subscribe to a give API plan, using the user's preferred or default currency (admin only).
		 * Get api2/json/subscribePlanOnBehalf/{planName}/{apiKey}
		 * @return {APIPlanSubscriptionOut} An API subscription
		 */
		SubscribePlanOnBehalf(planName: string, apiKey: string): Observable<APIPlanSubscriptionOut> {
			return this.http.get<APIPlanSubscriptionOut>(this.baseUri + 'api2/json/subscribePlanOnBehalf/' + (planName == null ? '' : encodeURIComponent(planName)) + '/' + (apiKey == null ? '' : encodeURIComponent(apiKey)), {});
		}

		/**
		 * Modifies the hard/soft limit on the API plan's overages (default is 0$ soft limit).
		 * Get api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}
		 * @return {APIPeriodUsageOut} An API subscription
		 */
		UpdateLimit(usageLimit: number, hardOrSoft: boolean, token: string): Observable<APIPeriodUsageOut> {
			return this.http.get<APIPeriodUsageOut>(this.baseUri + 'api2/json/updateLimit/' + usageLimit + '/' + hardOrSoft + '/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Update the default Stripe card associated with the current google auth session token.
		 * Get api2/json/updatePaymentDefault/{defautSourceId}/{token}
		 * @return {APIKeyOut} An session token
		 */
		UpdatePaymentDefault(defautSourceId: string, token: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/updatePaymentDefault/' + (defautSourceId == null ? '' : encodeURIComponent(defautSourceId)) + '/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * [USES 10 UNITS] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
		 * Get api2/json/usRaceEthnicity/{firstName}/{lastName}
		 * @return {FirstLastNameUSRaceEthnicityOut} a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
		 */
		UsRaceEthnicity(firstName: string, lastName: string): Observable<FirstLastNameUSRaceEthnicityOut> {
			return this.http.get<FirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usRaceEthnicity/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 10 UNITS] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy.
		 * Post api2/json/usRaceEthnicityBatch
		 * @param {BatchFirstLastNameGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameUSRaceEthnicityOut} A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
		 */
		UsRaceEthnicityBatch(requestBody: BatchFirstLastNameGeoIn): Observable<BatchFirstLastNameUSRaceEthnicityOut> {
			return this.http.post<BatchFirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usRaceEthnicityBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
		 * Get api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}
		 * @return {FirstLastNameUSRaceEthnicityOut} a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
		 */
		UsRaceEthnicityZIP5(firstName: string, lastName: string, zip5Code: string): Observable<FirstLastNameUSRaceEthnicityOut> {
			return this.http.get<FirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usRaceEthnicityZIP5/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (zip5Code == null ? '' : encodeURIComponent(zip5Code)), {});
		}

		/**
		 * [USES 10 UNITS] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code.
		 * Post api2/json/usZipRaceEthnicityBatch
		 * @param {BatchFirstLastNameGeoZippedIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameUSRaceEthnicityOut} A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
		 */
		UsZipRaceEthnicityBatch(requestBody: BatchFirstLastNameGeoZippedIn): Observable<BatchFirstLastNameUSRaceEthnicityOut> {
			return this.http.post<BatchFirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usZipRaceEthnicityBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the user profile associated with the current google auth session token.
		 * Get api2/json/userInfo/{token}
		 * @return {APIKeyOut} An session token
		 */
		UserInfo(token: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/userInfo/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Verifies an email, based on token sent to that email
		 * Get api2/json/verifyEmail/{emailToken}
		 * @return {APIKeyOut} An API Key
		 */
		VerifyEmail(emailToken: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/verifyEmail/' + (emailToken == null ? '' : encodeURIComponent(emailToken)), {});
		}

		/**
		 * Verifies an email, based on token sent to that email
		 * Get api2/json/verifyRemoveEmail/{emailToken}
		 * @return {APIKeyOut} An API Key
		 */
		VerifyRemoveEmail(emailToken: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/verifyRemoveEmail/' + (emailToken == null ? '' : encodeURIComponent(emailToken)), {});
		}

		/**
		 * Vetting of a source.
		 * Get api2/json/vetting/{source}/{vetted}
		 * @return {void} Vetting of a source.
		 */
		Vet(source: string, vetted: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api2/json/vetting/' + (source == null ? '' : encodeURIComponent(source)) + '/' + vetted, { observe: 'response', responseType: 'text' });
		}
	}

}

