import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The current billing period. */
	export interface APIBillingPeriodUsageOut {

		/** User API Key. */
		apiKey?: string | null;

		/** Current period billing status ex OPEN. */
		billingStatus?: string | null;

		/** Current period hard limit (reaching the limit sends an email notification and blocks the API Key). */
		hardLimit?: number | null;

		/** Datetime when the the plan's current period endend. */
		periodEnded?: number | null;

		/** Datetime when the the plan's current period started. */
		periodStarted?: number | null;

		/** Current period soft limit (reaching the limit sends an email notification). */
		softLimit?: number | null;

		/** Datetime when the the plan's current period endend (in Stripe). Internal and Stripe periodicity should ~coincide. */
		stripeCurrentPeriodEnd?: number | null;

		/** Datetime when the the plan's current period started (in Stripe). Internal and Stripe periodicity should ~coincide. */
		stripeCurrentPeriodStart?: number | null;

		/** Datetime when the user subscribed to the plan. */
		subscriptionStarted?: number | null;

		/** Current period usage in units (NB some API endpoints use more than one unit). */
		usage?: number | null;
	}

	/** The current billing period. */
	export interface APIBillingPeriodUsageOutFormProperties {

		/** User API Key. */
		apiKey: FormControl<string | null | undefined>,

		/** Current period billing status ex OPEN. */
		billingStatus: FormControl<string | null | undefined>,

		/** Current period hard limit (reaching the limit sends an email notification and blocks the API Key). */
		hardLimit: FormControl<number | null | undefined>,

		/** Datetime when the the plan's current period endend. */
		periodEnded: FormControl<number | null | undefined>,

		/** Datetime when the the plan's current period started. */
		periodStarted: FormControl<number | null | undefined>,

		/** Current period soft limit (reaching the limit sends an email notification). */
		softLimit: FormControl<number | null | undefined>,

		/** Datetime when the the plan's current period endend (in Stripe). Internal and Stripe periodicity should ~coincide. */
		stripeCurrentPeriodEnd: FormControl<number | null | undefined>,

		/** Datetime when the the plan's current period started (in Stripe). Internal and Stripe periodicity should ~coincide. */
		stripeCurrentPeriodStart: FormControl<number | null | undefined>,

		/** Datetime when the user subscribed to the plan. */
		subscriptionStarted: FormControl<number | null | undefined>,

		/** Current period usage in units (NB some API endpoints use more than one unit). */
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


	/** The list of classifiers and versions. */
	export interface APIClassifierOut {

		/** The classifier name */
		classifierName?: string | null;

		/** True if the classifier is learning */
		learning?: boolean | null;

		/** True if the classifier has finished the initial learning and calibrated probabilities (meanwhile, during initial learning, probabilities will be equal to -1) */
		probabilityCalibrated?: boolean | null;

		/** True if the classifier is serving requests (has reached minimal learning, is not shutting down) */
		serving?: boolean | null;

		/** True if the classifier is shutting down */
		shuttingDown?: boolean | null;
	}

	/** The list of classifiers and versions. */
	export interface APIClassifierOutFormProperties {

		/** The classifier name */
		classifierName: FormControl<string | null | undefined>,

		/** True if the classifier is learning */
		learning: FormControl<boolean | null | undefined>,

		/** True if the classifier has finished the initial learning and calibrated probabilities (meanwhile, during initial learning, probabilities will be equal to -1) */
		probabilityCalibrated: FormControl<boolean | null | undefined>,

		/** True if the classifier is serving requests (has reached minimal learning, is not shutting down) */
		serving: FormControl<boolean | null | undefined>,

		/** True if the classifier is shutting down */
		shuttingDown: FormControl<boolean | null | undefined>,
	}
	export function CreateAPIClassifierOutFormGroup() {
		return new FormGroup<APIClassifierOutFormProperties>({
			classifierName: new FormControl<string | null | undefined>(undefined),
			learning: new FormControl<boolean | null | undefined>(undefined),
			probabilityCalibrated: new FormControl<boolean | null | undefined>(undefined),
			serving: new FormControl<boolean | null | undefined>(undefined),
			shuttingDown: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface APIClassifierTaxonomyOut {

		/** Name of the classifier as per apiStatus (corresponds also to the name of the service in apiServices) */
		classifierName?: string | null;

		/** The scripts / alphabets this classifiers classifies to */
		classifyingScripts?: Array<string>;

		/** The taxonomy classes this classifier classifies to */
		taxonomyClasses?: Array<string>;
	}
	export interface APIClassifierTaxonomyOutFormProperties {

		/** Name of the classifier as per apiStatus (corresponds also to the name of the service in apiServices) */
		classifierName: FormControl<string | null | undefined>,
	}
	export function CreateAPIClassifierTaxonomyOutFormGroup() {
		return new FormGroup<APIClassifierTaxonomyOutFormProperties>({
			classifierName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIClassifiersStatusOut {

		/** The list of classifiers and versions. */
		classifiers?: Array<APIClassifierOut>;

		/** The software version. */
		softwareVersion?: SoftwareVersionOut;
	}
	export interface APIClassifiersStatusOutFormProperties {
	}
	export function CreateAPIClassifiersStatusOutFormGroup() {
		return new FormGroup<APIClassifiersStatusOutFormProperties>({
		});

	}


	/** The software version. */
	export interface SoftwareVersionOut {

		/** The software version */
		softwareNameAndVersion?: string | null;

		/** The software version major minor build */
		softwareVersion?: Array<number>;
	}

	/** The software version. */
	export interface SoftwareVersionOutFormProperties {

		/** The software version */
		softwareNameAndVersion: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareVersionOutFormGroup() {
		return new FormGroup<SoftwareVersionOutFormProperties>({
			softwareNameAndVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed usage as reported by the deduplicating API counter. */
	export interface APICounterV2Out {
		apiKey?: APIKeyOut;

		/** The apiService corresponds to the classifier name. */
		apiService?: string | null;

		/** The create datetime of the counter. */
		createdDateTime?: number | null;

		/** The processing hostAddress. */
		hostAddress?: string | null;

		/** The flush datetime of the counter. */
		lastFlushedDateTime?: number | null;

		/** The last usage datetime of the counter. */
		lastUsedDateTime?: number | null;

		/** Usage of special features, such as Chinese, Japanese. */
		serviceFeaturesUsage?: {[id: string]: number };

		/** The usage of the counter. */
		totalUsage?: number | null;
	}

	/** Detailed usage as reported by the deduplicating API counter. */
	export interface APICounterV2OutFormProperties {

		/** The apiService corresponds to the classifier name. */
		apiService: FormControl<string | null | undefined>,

		/** The create datetime of the counter. */
		createdDateTime: FormControl<number | null | undefined>,

		/** The processing hostAddress. */
		hostAddress: FormControl<string | null | undefined>,

		/** The flush datetime of the counter. */
		lastFlushedDateTime: FormControl<number | null | undefined>,

		/** The last usage datetime of the counter. */
		lastUsedDateTime: FormControl<number | null | undefined>,

		/** Usage of special features, such as Chinese, Japanese. */
		serviceFeaturesUsage: FormControl<{[id: string]: number } | null | undefined>,

		/** The usage of the counter. */
		totalUsage: FormControl<number | null | undefined>,
	}
	export function CreateAPICounterV2OutFormGroup() {
		return new FormGroup<APICounterV2OutFormProperties>({
			apiService: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<number | null | undefined>(undefined),
			hostAddress: new FormControl<string | null | undefined>(undefined),
			lastFlushedDateTime: new FormControl<number | null | undefined>(undefined),
			lastUsedDateTime: new FormControl<number | null | undefined>(undefined),
			serviceFeaturesUsage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			totalUsage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APIKeyOut {

		/** The API Key has admin role. */
		admin?: boolean | null;

		/** The API Key is anonymized (using SHA-252 digest for logging). Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed). */
		anonymized?: boolean | null;

		/** The user API Key. */
		apiKey?: string | null;

		/** The API Key has role corporate (ex SWIFT payments instead of Stripe payments). */
		corporate?: boolean | null;

		/** The API Key is temporarily or permanently disabled. */
		disabled?: boolean | null;

		/** The API Key is learnable (without assuming truthfulness) for machine learning. Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed). */
		learnable?: boolean | null;

		/** The API Key has partner role. */
		partner?: boolean | null;

		/** The API Key is associated to a valid Stripe account. */
		striped?: boolean | null;

		/** The user identifier. */
		userId?: string | null;

		/** The API Key is vetted (assumed truthful) for machine learning. */
		vetted?: boolean | null;
	}
	export interface APIKeyOutFormProperties {

		/** The API Key has admin role. */
		admin: FormControl<boolean | null | undefined>,

		/** The API Key is anonymized (using SHA-252 digest for logging). Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed). */
		anonymized: FormControl<boolean | null | undefined>,

		/** The user API Key. */
		apiKey: FormControl<string | null | undefined>,

		/** The API Key has role corporate (ex SWIFT payments instead of Stripe payments). */
		corporate: FormControl<boolean | null | undefined>,

		/** The API Key is temporarily or permanently disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** The API Key is learnable (without assuming truthfulness) for machine learning. Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed). */
		learnable: FormControl<boolean | null | undefined>,

		/** The API Key has partner role. */
		partner: FormControl<boolean | null | undefined>,

		/** The API Key is associated to a valid Stripe account. */
		striped: FormControl<boolean | null | undefined>,

		/** The user identifier. */
		userId: FormControl<string | null | undefined>,

		/** The API Key is vetted (assumed truthful) for machine learning. */
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

		/** The current billing period. */
		billingPeriod?: APIBillingPeriodUsageOut;

		/** Currency of the overage amount. */
		overageCurrency?: string | null;

		/** Overage amount including any tax. */
		overageExclTax?: number | null;

		/** Overage amount including tax (if applicable). */
		overageInclTax?: number | null;

		/** Quantity above monthly quota of the current subscritpion, in units. */
		overageQuantity?: number | null;

		/** The API Plan governing the subscription. */
		subscription?: APIPlanSubscriptionOut;
	}
	export interface APIPeriodUsageOutFormProperties {

		/** Currency of the overage amount. */
		overageCurrency: FormControl<string | null | undefined>,

		/** Overage amount including any tax. */
		overageExclTax: FormControl<number | null | undefined>,

		/** Overage amount including tax (if applicable). */
		overageInclTax: FormControl<number | null | undefined>,

		/** Quantity above monthly quota of the current subscritpion, in units. */
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


	/** The API Plan governing the subscription. */
	export interface APIPlanSubscriptionOut {

		/** User API Key. */
		apiKey?: string | null;

		/** Current plan Currency for prices. */
		currency?: string | null;

		/** For USD, GBP, EUR - the factor is 1. */
		currencyFactor?: number | null;

		/** Current plan key (as in Stripe product). */
		planBaseFeesKey?: string | null;

		/** Datetime when the user ended the plan. */
		planEnded?: number | null;

		/** Current plan name. */
		planName?: string | null;

		/** Current plan quota in quantity of units (NB: some API use several units per name). */
		planQuota?: number | null;

		/** Datetime when the user subscribed to the current plan. */
		planStarted?: number | null;

		/** Plan status. */
		planStatus?: string | null;

		/** Current plan price for overages expressed in Currency (extra price per unit above the free quota). */
		price?: number | null;

		/** Current plan price for overages expressed in Currency (extra price per unit above the free quota). */
		priceOverage?: number | null;

		/** Current plan price for overages expressed in USD (extra price per unit above the free quota). */
		priceOverageUSD?: number | null;

		/** Current plan monthly price expressed in USD (includes a free quota). */
		priceUSD?: number | null;

		/** Datetime when the user subscribed to the prior plan. */
		priorPlanStarted?: number | null;

		/** Stripe customer identifier. */
		stripeCustomerId?: string | null;

		/** Stripe status ex active. */
		stripeStatus?: string | null;

		/** Stripe subscription identifier. */
		stripeSubscription?: string | null;

		/** Applicable tax rate for the plan. */
		taxRate?: number | null;

		/** Internal user identifier. */
		userId?: string | null;
	}

	/** The API Plan governing the subscription. */
	export interface APIPlanSubscriptionOutFormProperties {

		/** User API Key. */
		apiKey: FormControl<string | null | undefined>,

		/** Current plan Currency for prices. */
		currency: FormControl<string | null | undefined>,

		/** For USD, GBP, EUR - the factor is 1. */
		currencyFactor: FormControl<number | null | undefined>,

		/** Current plan key (as in Stripe product). */
		planBaseFeesKey: FormControl<string | null | undefined>,

		/** Datetime when the user ended the plan. */
		planEnded: FormControl<number | null | undefined>,

		/** Current plan name. */
		planName: FormControl<string | null | undefined>,

		/** Current plan quota in quantity of units (NB: some API use several units per name). */
		planQuota: FormControl<number | null | undefined>,

		/** Datetime when the user subscribed to the current plan. */
		planStarted: FormControl<number | null | undefined>,

		/** Plan status. */
		planStatus: FormControl<string | null | undefined>,

		/** Current plan price for overages expressed in Currency (extra price per unit above the free quota). */
		price: FormControl<number | null | undefined>,

		/** Current plan price for overages expressed in Currency (extra price per unit above the free quota). */
		priceOverage: FormControl<number | null | undefined>,

		/** Current plan price for overages expressed in USD (extra price per unit above the free quota). */
		priceOverageUSD: FormControl<number | null | undefined>,

		/** Current plan monthly price expressed in USD (includes a free quota). */
		priceUSD: FormControl<number | null | undefined>,

		/** Datetime when the user subscribed to the prior plan. */
		priorPlanStarted: FormControl<number | null | undefined>,

		/** Stripe customer identifier. */
		stripeCustomerId: FormControl<string | null | undefined>,

		/** Stripe status ex active. */
		stripeStatus: FormControl<string | null | undefined>,

		/** Stripe subscription identifier. */
		stripeSubscription: FormControl<string | null | undefined>,

		/** Applicable tax rate for the plan. */
		taxRate: FormControl<number | null | undefined>,

		/** Internal user identifier. */
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


	/** List of API Services */
	export interface APIServiceOut {

		/** Indicates how many units per call this service costs (ex. the number of units per name) */
		costInUnits?: number | null;

		/** Groups together classifiers providing a similar service (ex. gender groups personalname_gender and personalfullname_gender) */
		serviceGroup?: string | null;

		/** A service name corresponds to classifier name in apiStatus (ex. personalname_gender or personalfullname_gender) */
		serviceName?: string | null;
	}

	/** List of API Services */
	export interface APIServiceOutFormProperties {

		/** Indicates how many units per call this service costs (ex. the number of units per name) */
		costInUnits: FormControl<number | null | undefined>,

		/** Groups together classifiers providing a similar service (ex. gender groups personalname_gender and personalfullname_gender) */
		serviceGroup: FormControl<string | null | undefined>,

		/** A service name corresponds to classifier name in apiStatus (ex. personalname_gender or personalfullname_gender) */
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

		/** List of API Services */
		apiServices?: Array<APIServiceOut>;
	}
	export interface APIServicesOutFormProperties {
	}
	export function CreateAPIServicesOutFormGroup() {
		return new FormGroup<APIServicesOutFormProperties>({
		});

	}

	export interface APIUsageAggregatedOut {

		/** apiServices as column headers */
		colHeaders?: Array<string>;

		/** Data points : usage per DAY, WEEK or MONTH and per apiService */
		data?: Array<string>;

		/** If the history was truncaded due to data limit */
		historyTruncated?: boolean | null;

		/** End datetime of the reporting period */
		periodEnd?: number | null;

		/** Start datetime of the reporting period */
		periodStart?: number | null;

		/** dates as row headers */
		rowHeaders?: Array<string>;

		/** Time unit is DAY, WEEK or MONTH depending on prior usage */
		timeUnit?: string | null;

		/** Total usage in the current period */
		totalUsage?: number | null;
	}
	export interface APIUsageAggregatedOutFormProperties {

		/** If the history was truncaded due to data limit */
		historyTruncated: FormControl<boolean | null | undefined>,

		/** End datetime of the reporting period */
		periodEnd: FormControl<number | null | undefined>,

		/** Start datetime of the reporting period */
		periodStart: FormControl<number | null | undefined>,

		/** Time unit is DAY, WEEK or MONTH depending on prior usage */
		timeUnit: FormControl<string | null | undefined>,

		/** Total usage in the current period */
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

	export interface APIUsageHistoryOut {

		/** Detailed usage as reported by the deduplicating API counter. */
		detailedUsage?: Array<APICounterV2Out>;
	}
	export interface APIUsageHistoryOutFormProperties {
	}
	export function CreateAPIUsageHistoryOutFormGroup() {
		return new FormGroup<APIUsageHistoryOutFormProperties>({
		});

	}

	export interface BatchCorridorIn {
		corridorFromTo?: Array<CorridorIn>;
		facts?: Array<FactIn>;
	}
	export interface BatchCorridorInFormProperties {
	}
	export function CreateBatchCorridorInFormGroup() {
		return new FormGroup<BatchCorridorInFormProperties>({
		});

	}


	/** Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel */
	export interface CorridorIn {
		firstLastNameGeoFrom?: FirstLastNameGeoIn;
		firstLastNameGeoTo?: FirstLastNameGeoIn;
		id?: string | null;
	}

	/** Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel */
	export interface CorridorInFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateCorridorInFormGroup() {
		return new FormGroup<CorridorInFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
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

	export interface FactIn {
		id?: string | null;
		name?: string | null;
	}
	export interface FactInFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFactInFormGroup() {
		return new FormGroup<FactInFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCorridorOut {

		/** Classified corridors */
		corridorFromTo?: Array<CorridorOut>;
	}
	export interface BatchCorridorOutFormProperties {
	}
	export function CreateBatchCorridorOutFormGroup() {
		return new FormGroup<BatchCorridorOutFormProperties>({
		});

	}


	/** Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora) */
	export interface CorridorOut {

		/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
		FirstLastNameDiasporaedOut?: FirstLastNameDiasporaedOut;

		/** Represents the output of inferring the LIKELY gender from a personal name. */
		FirstLastNameGenderedOut?: FirstLastNameGenderedOut;

		/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
		FirstLastNameOriginedOut?: FirstLastNameOriginedOut;
		id?: string | null;
		script?: string | null;
	}

	/** Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora) */
	export interface CorridorOutFormProperties {
		id: FormControl<string | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateCorridorOutFormGroup() {
		return new FormGroup<CorridorOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface FirstLastNameDiasporaedOut {

		/** From input data, the countryIso2 of geographic context (US,CA etc.) */
		countryIso2?: string | null;

		/** List most likely ethnicities (top 10) */
		ethnicitiesTop?: Array<string>;

		/** The most likely ethnicity */
		ethnicity?: string | null;

		/** The second best alternative ethnicity */
		ethnicityAlt?: string | null;

		/** The first name (also known as given name) */
		firstName?: string | null;
		id?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;

		/** Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule. Let us know if you believe ethnicity is incorrect on a specific case where lifted is true. */
		lifted?: boolean | null;

		/**
		 * The calibrated probability for ethnicity OR ethnicityAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for ethnicity to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/**
		 * Compatibility to NamSor_v1 Diaspora score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}

	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface FirstLastNameDiasporaedOutFormProperties {

		/** From input data, the countryIso2 of geographic context (US,CA etc.) */
		countryIso2: FormControl<string | null | undefined>,

		/** The most likely ethnicity */
		ethnicity: FormControl<string | null | undefined>,

		/** The second best alternative ethnicity */
		ethnicityAlt: FormControl<string | null | undefined>,

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,

		/** Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule. Let us know if you believe ethnicity is incorrect on a specific case where lifted is true. */
		lifted: FormControl<boolean | null | undefined>,

		/**
		 * The calibrated probability for ethnicity OR ethnicityAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for ethnicity to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/**
		 * Compatibility to NamSor_v1 Diaspora score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
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
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY gender from a personal name. */
	export interface FirstLastNameGenderedOut {

		/** The first name (also known as given name) */
		firstName?: string | null;

		/**
		 * Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.
		 * Minimum: -1
		 * Maximum: 1
		 */
		genderScale?: number | null;
		id?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;

		/** Most likely gender */
		likelyGender?: FirstLastNameGenderedOutLikelyGender | null;

		/**
		 * The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/**
		 * Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}

	/** Represents the output of inferring the LIKELY gender from a personal name. */
	export interface FirstLastNameGenderedOutFormProperties {

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.
		 * Minimum: -1
		 * Maximum: 1
		 */
		genderScale: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,

		/** Most likely gender */
		likelyGender: FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>,

		/**
		 * The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/**
		 * Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameGenderedOutFormGroup() {
		return new FormGroup<FirstLastNameGenderedOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			genderScale: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			likelyGender: new FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>(undefined),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirstLastNameGenderedOutLikelyGender { male = 0, female = 1, unknown = 2 }


	/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
	export interface FirstLastNameOriginedOut {

		/** List countries of Origin (top 10) */
		countriesOriginTop?: Array<string>;

		/** Most likely country of Origin */
		countryOrigin?: string | null;

		/** Second best alternative : country of Origin */
		countryOriginAlt?: string | null;

		/** The first name (also known as given name) */
		firstName?: string | null;
		id?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;

		/**
		 * The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for countryOrigin to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		regionOrigin?: string | null;

		/**
		 * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;

		/** Most likely sub region of Origin (based on countryOrigin ISO2 code) */
		subRegionOrigin?: string | null;

		/** Most likely top region of Origin (based on countryOrigin ISO2 code) */
		topRegionOrigin?: string | null;
	}

	/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
	export interface FirstLastNameOriginedOutFormProperties {

		/** Most likely country of Origin */
		countryOrigin: FormControl<string | null | undefined>,

		/** Second best alternative : country of Origin */
		countryOriginAlt: FormControl<string | null | undefined>,

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for countryOrigin to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		regionOrigin: FormControl<string | null | undefined>,

		/**
		 * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,

		/** Most likely sub region of Origin (based on countryOrigin ISO2 code) */
		subRegionOrigin: FormControl<string | null | undefined>,

		/** Most likely top region of Origin (based on countryOrigin ISO2 code) */
		topRegionOrigin: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameOriginedOutFormGroup() {
		return new FormGroup<FirstLastNameOriginedOutFormProperties>({
			countryOrigin: new FormControl<string | null | undefined>(undefined),
			countryOriginAlt: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			regionOrigin: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
			subRegionOrigin: new FormControl<string | null | undefined>(undefined),
			topRegionOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface BatchFirstLastNameDiasporaedOut {

		/** Classified diaspora names */
		personalNames?: Array<FirstLastNameDiasporaedOut>;
	}

	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface BatchFirstLastNameDiasporaedOutFormProperties {
	}
	export function CreateBatchFirstLastNameDiasporaedOutFormGroup() {
		return new FormGroup<BatchFirstLastNameDiasporaedOutFormProperties>({
		});

	}

	export interface BatchFirstLastNameGenderIn {
		facts?: Array<FactIn>;
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

		/** The known gender of the name */
		gender?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface FirstLastNameGenderInFormProperties {
		firstName: FormControl<string | null | undefined>,

		/** The known gender of the name */
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

		/** Classified genderized names */
		personalNames?: Array<FirstLastNameGenderedOut>;
	}

	/** Represents the output of inferring the LIKELY gender from a list of personal names. */
	export interface BatchFirstLastNameGenderedOutFormProperties {
	}
	export function CreateBatchFirstLastNameGenderedOutFormGroup() {
		return new FormGroup<BatchFirstLastNameGenderedOutFormProperties>({
		});

	}

	export interface BatchFirstLastNameGeoIn {
		facts?: Array<FactIn>;
		personalNames?: Array<FirstLastNameGeoIn>;
	}
	export interface BatchFirstLastNameGeoInFormProperties {
	}
	export function CreateBatchFirstLastNameGeoInFormGroup() {
		return new FormGroup<BatchFirstLastNameGeoInFormProperties>({
		});

	}


	/** Represents the output of inferring the LIKELY country subclassification (regional names). */
	export interface BatchFirstLastNameGeoSubclassificationOut {

		/** Classified names at sub country level (region or state) */
		personalNames?: Array<FirstLastNameGeoSubclassificationOut>;
	}

	/** Represents the output of inferring the LIKELY country subclassification (regional names). */
	export interface BatchFirstLastNameGeoSubclassificationOutFormProperties {
	}
	export function CreateBatchFirstLastNameGeoSubclassificationOutFormGroup() {
		return new FormGroup<BatchFirstLastNameGeoSubclassificationOutFormProperties>({
		});

	}


	/** Represents the geographic name origin at a country subclassification level (usually regional or state level). */
	export interface FirstLastNameGeoSubclassificationOut {

		/** The input country ISO2 code */
		countryIso2?: string | null;

		/** The first name (also known as given name) */
		firstName?: string | null;
		id?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;

		/**
		 * The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for subclassification to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/**
		 * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;

		/** Most likely subclassification ISO_3166-2 code */
		subClassification?: string | null;

		/** Second best alternative : subclassification ISO_3166-2 code */
		subClassificationAlt?: string | null;

		/** List subclassification ISO_3166-2 codes (top 10) */
		subclassificationTop?: Array<string>;
	}

	/** Represents the geographic name origin at a country subclassification level (usually regional or state level). */
	export interface FirstLastNameGeoSubclassificationOutFormProperties {

		/** The input country ISO2 code */
		countryIso2: FormControl<string | null | undefined>,

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for subclassification to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/**
		 * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,

		/** Most likely subclassification ISO_3166-2 code */
		subClassification: FormControl<string | null | undefined>,

		/** Second best alternative : subclassification ISO_3166-2 code */
		subClassificationAlt: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameGeoSubclassificationOutFormGroup() {
		return new FormGroup<FirstLastNameGeoSubclassificationOutFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
			subClassification: new FormControl<string | null | undefined>(undefined),
			subClassificationAlt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchFirstLastNameGeoZippedIn {
		facts?: Array<FactIn>;
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
		facts?: Array<FactIn>;
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

		/** Classified origined names */
		personalNames?: Array<FirstLastNameOriginedOut>;
	}

	/** Represents the output of inferring the LIKELY origin from a list of personal names. */
	export interface BatchFirstLastNameOriginedOutFormProperties {
	}
	export function CreateBatchFirstLastNameOriginedOutFormGroup() {
		return new FormGroup<BatchFirstLastNameOriginedOutFormProperties>({
		});

	}


	/** Represents the output of inferring the LIKELY country and phone code of personal names+phones. */
	export interface BatchFirstLastNamePhoneCodedOut {

		/** Classified phone-coded names */
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

		/** The first name (also known as given name) */
		firstName?: string | null;
		id?: string | null;

		/** The normalized phone number, verified using libphonenumber. */
		internationalPhoneNumberVerified?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;

		/** The likely country of origin of the name. */
		originCountryIso2?: string | null;

		/** The best alternative country of origin of the name. */
		originCountryIso2Alt?: string | null;

		/** The phone country code of the phone number, verified using libphonenumber. */
		phoneCountryCode?: number | null;

		/** The best alternative phone country code of the phone number. */
		phoneCountryCodeAlt?: number | null;

		/** The likely country of the phone number. */
		phoneCountryIso2?: string | null;

		/** The best alternative country of the phone number. */
		phoneCountryIso2Alt?: string | null;

		/** The phone ISO2 country code, verified using libphonenumber. */
		phoneCountryIso2Verified?: string | null;

		/** The input phone number. */
		phoneNumber?: string | null;

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;

		/** Indicates if the phone number could be positively verified using libphonenumber. */
		verified?: boolean | null;
	}

	/** Represents the output of inferring the LIKELY country and phone code from a personal name and phone number. */
	export interface FirstLastNamePhoneCodedOutFormProperties {
		countryIso2: FormControl<string | null | undefined>,

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The normalized phone number, verified using libphonenumber. */
		internationalPhoneNumberVerified: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,

		/** The likely country of origin of the name. */
		originCountryIso2: FormControl<string | null | undefined>,

		/** The best alternative country of origin of the name. */
		originCountryIso2Alt: FormControl<string | null | undefined>,

		/** The phone country code of the phone number, verified using libphonenumber. */
		phoneCountryCode: FormControl<number | null | undefined>,

		/** The best alternative phone country code of the phone number. */
		phoneCountryCodeAlt: FormControl<number | null | undefined>,

		/** The likely country of the phone number. */
		phoneCountryIso2: FormControl<string | null | undefined>,

		/** The best alternative country of the phone number. */
		phoneCountryIso2Alt: FormControl<string | null | undefined>,

		/** The phone ISO2 country code, verified using libphonenumber. */
		phoneCountryIso2Verified: FormControl<string | null | undefined>,

		/** The input phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,

		/** Indicates if the phone number could be positively verified using libphonenumber. */
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
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchFirstLastNamePhoneNumberGeoIn {
		facts?: Array<FactIn>;
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneNumberGeoIn>;
	}
	export interface BatchFirstLastNamePhoneNumberGeoInFormProperties {
	}
	export function CreateBatchFirstLastNamePhoneNumberGeoInFormGroup() {
		return new FormGroup<BatchFirstLastNamePhoneNumberGeoInFormProperties>({
		});

	}

	export interface FirstLastNamePhoneNumberGeoIn {
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
		facts?: Array<FactIn>;
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneNumberIn>;
	}
	export interface BatchFirstLastNamePhoneNumberInFormProperties {
	}
	export function CreateBatchFirstLastNamePhoneNumberInFormGroup() {
		return new FormGroup<BatchFirstLastNamePhoneNumberInFormProperties>({
		});

	}

	export interface FirstLastNamePhoneNumberIn {
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

		/** Classified US 'race'/ethnicized names */
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

		/** The first name (also known as given name) */
		firstName?: string | null;
		id?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;

		/**
		 * The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for raceEthnicity to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/** List 'race'/ethnicities */
		raceEthnicitiesTop?: Array<string>;

		/** Most likely US 'race'/ethnicity */
		raceEthnicity?: FirstLastNameUSRaceEthnicityOutRaceEthnicity | null;

		/** Second most likely US 'race'/ethnicity */
		raceEthnicityAlt?: FirstLastNameUSRaceEthnicityOutRaceEthnicity | null;

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}

	/** Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code. */
	export interface FirstLastNameUSRaceEthnicityOutFormProperties {

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for raceEthnicity to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/** Most likely US 'race'/ethnicity */
		raceEthnicity: FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>,

		/** Second most likely US 'race'/ethnicity */
		raceEthnicityAlt: FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>,

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameUSRaceEthnicityOutFormGroup() {
		return new FormGroup<FirstLastNameUSRaceEthnicityOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			raceEthnicity: new FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>(undefined),
			raceEthnicityAlt: new FormControl<FirstLastNameUSRaceEthnicityOutRaceEthnicity | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirstLastNameUSRaceEthnicityOutRaceEthnicity { W_NL = 0, HL = 1, A = 2, B_NL = 3, AI_AN = 4, PI = 5 }

	export interface BatchMatchPersonalFirstLastNameIn {
		facts?: Array<FactIn>;
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
		name1?: FirstLastNameIn;
		name2?: PersonalNameIn;
	}
	export interface MatchPersonalFirstLastNameInFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateMatchPersonalFirstLastNameInFormGroup() {
		return new FormGroup<MatchPersonalFirstLastNameInFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
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

	export interface BatchNameGeoIn {
		facts?: Array<FactIn>;
		properNouns?: Array<NameGeoIn>;
	}
	export interface BatchNameGeoInFormProperties {
	}
	export function CreateBatchNameGeoInFormGroup() {
		return new FormGroup<BatchNameGeoInFormProperties>({
		});

	}

	export interface NameGeoIn {
		countryIso2?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface NameGeoInFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateNameGeoInFormGroup() {
		return new FormGroup<NameGeoInFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchNameIn {
		facts?: Array<FactIn>;
		properNouns?: Array<NameIn>;
	}
	export interface BatchNameInFormProperties {
	}
	export function CreateBatchNameInFormGroup() {
		return new FormGroup<BatchNameInFormProperties>({
		});

	}

	export interface NameIn {
		id?: string | null;
		name?: string | null;
	}
	export interface NameInFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateNameInFormGroup() {
		return new FormGroup<NameInFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchNameMatchCandidatesOut {

		/** Classified matched names */
		namesAndMatchCandidates?: Array<NameMatchCandidatesOut>;
	}
	export interface BatchNameMatchCandidatesOutFormProperties {
	}
	export function CreateBatchNameMatchCandidatesOutFormGroup() {
		return new FormGroup<BatchNameMatchCandidatesOutFormProperties>({
		});

	}


	/** Classified matched names */
	export interface NameMatchCandidatesOut {

		/** The first name (also known as given name) */
		firstName?: string | null;
		id?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;

		/** The ordered list of name matching candidates */
		matchCandidates?: Array<NameMatchCandidateOut>;

		/** The option for ordering */
		orderOption?: string | null;
		script?: string | null;
	}

	/** Classified matched names */
	export interface NameMatchCandidatesOutFormProperties {

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,

		/** The option for ordering */
		orderOption: FormControl<string | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateNameMatchCandidatesOutFormGroup() {
		return new FormGroup<NameMatchCandidatesOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			orderOption: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ordered list of name matching candidates */
	export interface NameMatchCandidateOut {

		/** The name matching candidate name */
		candidateName?: string | null;

		/** The family name prediction score. */
		predScoreFamilyName?: number | null;

		/** The given name prediction score. */
		predScoreGivenName?: number | null;

		/** The name matching estimated probability. */
		probability?: number | null;
	}

	/** The ordered list of name matching candidates */
	export interface NameMatchCandidateOutFormProperties {

		/** The name matching candidate name */
		candidateName: FormControl<string | null | undefined>,

		/** The family name prediction score. */
		predScoreFamilyName: FormControl<number | null | undefined>,

		/** The given name prediction score. */
		predScoreGivenName: FormControl<number | null | undefined>,

		/** The name matching estimated probability. */
		probability: FormControl<number | null | undefined>,
	}
	export function CreateNameMatchCandidateOutFormGroup() {
		return new FormGroup<NameMatchCandidateOutFormProperties>({
			candidateName: new FormControl<string | null | undefined>(undefined),
			predScoreFamilyName: new FormControl<number | null | undefined>(undefined),
			predScoreGivenName: new FormControl<number | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchNameMatchedOut {

		/** Classified matched names */
		matchedNames?: Array<NameMatchedOut>;
	}
	export interface BatchNameMatchedOutFormProperties {
	}
	export function CreateBatchNameMatchedOutFormGroup() {
		return new FormGroup<BatchNameMatchedOutFormProperties>({
		});

	}


	/** Classified matched names */
	export interface NameMatchedOut {
		id?: string | null;

		/** The name matching status. */
		matchStatus?: NameMatchedOutMatchStatus | null;
		score?: number | null;
		script?: string | null;
	}

	/** Classified matched names */
	export interface NameMatchedOutFormProperties {
		id: FormControl<string | null | undefined>,

		/** The name matching status. */
		matchStatus: FormControl<NameMatchedOutMatchStatus | null | undefined>,
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateNameMatchedOutFormGroup() {
		return new FormGroup<NameMatchedOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			matchStatus: new FormControl<NameMatchedOutMatchStatus | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NameMatchedOutMatchStatus { Match = 0, Mismatch = 1 }

	export interface BatchPersonalNameCastegroupOut {

		/** Caste group-coded names */
		personalNames?: Array<PersonalNameCastegroupOut>;
	}
	export interface BatchPersonalNameCastegroupOutFormProperties {
	}
	export function CreateBatchPersonalNameCastegroupOutFormGroup() {
		return new FormGroup<BatchPersonalNameCastegroupOutFormProperties>({
		});

	}


	/** Caste group-coded names */
	export interface PersonalNameCastegroupOut {

		/** Most likely caste group */
		castegroup?: string | null;

		/** Second best alternative : caste group */
		castegroupAlt?: string | null;

		/** List caste group (top 10) */
		castegroupTop?: Array<string>;
		id?: string | null;

		/** The input name. */
		name?: string | null;

		/**
		 * The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for country to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}

	/** Caste group-coded names */
	export interface PersonalNameCastegroupOutFormProperties {

		/** Most likely caste group */
		castegroup: FormControl<string | null | undefined>,

		/** Second best alternative : caste group */
		castegroupAlt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The input name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for country to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameCastegroupOutFormGroup() {
		return new FormGroup<PersonalNameCastegroupOutFormProperties>({
			castegroup: new FormControl<string | null | undefined>(undefined),
			castegroupAlt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameGenderedOut {

		/** Classified genderized names */
		personalNames?: Array<PersonalNameGenderedOut>;
	}
	export interface BatchPersonalNameGenderedOutFormProperties {
	}
	export function CreateBatchPersonalNameGenderedOutFormGroup() {
		return new FormGroup<BatchPersonalNameGenderedOutFormProperties>({
		});

	}


	/** Classified genderized names */
	export interface PersonalNameGenderedOut {

		/**
		 * Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.
		 * Minimum: -1
		 * Maximum: 1
		 */
		genderScale?: number | null;
		id?: string | null;

		/** Most likely gender */
		likelyGender?: FirstLastNameGenderedOutLikelyGender | null;

		/** The input name */
		name?: string | null;

		/**
		 * The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/**
		 * Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}

	/** Classified genderized names */
	export interface PersonalNameGenderedOutFormProperties {

		/**
		 * Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.
		 * Minimum: -1
		 * Maximum: 1
		 */
		genderScale: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Most likely gender */
		likelyGender: FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>,

		/** The input name */
		name: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/**
		 * Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameGenderedOutFormGroup() {
		return new FormGroup<PersonalNameGenderedOutFormProperties>({
			genderScale: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			id: new FormControl<string | null | undefined>(undefined),
			likelyGender: new FormControl<FirstLastNameGenderedOutLikelyGender | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameGeoIn {
		facts?: Array<FactIn>;
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

		/** Classified geo names */
		personalNames?: Array<PersonalNameGeoOut>;
	}
	export interface BatchPersonalNameGeoOutFormProperties {
	}
	export function CreateBatchPersonalNameGeoOutFormGroup() {
		return new FormGroup<BatchPersonalNameGeoOutFormProperties>({
		});

	}


	/** Classified geo names */
	export interface PersonalNameGeoOut {

		/** List countries (top 10) */
		countriesTop?: Array<string>;

		/** Most likely country */
		country?: string | null;

		/** Second best alternative : country */
		countryAlt?: string | null;
		id?: string | null;

		/** The input name. */
		name?: string | null;

		/**
		 * The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for country to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/** Most likely region (based on country ISO2 code) */
		region?: string | null;

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;

		/** Most likely sub region (based on country ISO2 code) */
		subRegion?: string | null;

		/** Most likely top region (based on country ISO2 code) */
		topRegion?: string | null;
	}

	/** Classified geo names */
	export interface PersonalNameGeoOutFormProperties {

		/** Most likely country */
		country: FormControl<string | null | undefined>,

		/** Second best alternative : country */
		countryAlt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The input name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for country to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/** Most likely region (based on country ISO2 code) */
		region: FormControl<string | null | undefined>,

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,

		/** Most likely sub region (based on country ISO2 code) */
		subRegion: FormControl<string | null | undefined>,

		/** Most likely top region (based on country ISO2 code) */
		topRegion: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameGeoOutFormGroup() {
		return new FormGroup<PersonalNameGeoOutFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			countryAlt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			region: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
			subRegion: new FormControl<string | null | undefined>(undefined),
			topRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the LIKELY country subclassification (regional names). */
	export interface BatchPersonalNameGeoSubclassificationOut {

		/** Classified names at sub country level (region or state) */
		personalNames?: Array<PersonalNameGeoSubclassificationOut>;
	}

	/** Represents the output of inferring the LIKELY country subclassification (regional names). */
	export interface BatchPersonalNameGeoSubclassificationOutFormProperties {
	}
	export function CreateBatchPersonalNameGeoSubclassificationOutFormGroup() {
		return new FormGroup<BatchPersonalNameGeoSubclassificationOutFormProperties>({
		});

	}


	/** Classified names at sub country level (region or state) */
	export interface PersonalNameGeoSubclassificationOut {

		/** The input country ISO2 code */
		countryIso2?: string | null;
		id?: string | null;

		/** The input name */
		name?: string | null;

		/**
		 * The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for subclassification to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/**
		 * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;

		/** Most likely subclassification ISO_3166-2 code */
		subClassification?: string | null;

		/** Second best alternative : subclassification ISO_3166-2 code */
		subClassificationAlt?: string | null;

		/** List subclassification ISO_3166-2 codes (top 10) */
		subclassificationTop?: Array<string>;
	}

	/** Classified names at sub country level (region or state) */
	export interface PersonalNameGeoSubclassificationOutFormProperties {

		/** The input country ISO2 code */
		countryIso2: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The input name */
		name: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for subclassification to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/**
		 * Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,

		/** Most likely subclassification ISO_3166-2 code */
		subClassification: FormControl<string | null | undefined>,

		/** Second best alternative : subclassification ISO_3166-2 code */
		subClassificationAlt: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameGeoSubclassificationOutFormGroup() {
		return new FormGroup<PersonalNameGeoSubclassificationOutFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
			subClassification: new FormControl<string | null | undefined>(undefined),
			subClassificationAlt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameGeoSubdivisionIn {
		facts?: Array<FactIn>;
		personalNames?: Array<PersonalNameGeoSubdivisionIn>;
	}
	export interface BatchPersonalNameGeoSubdivisionInFormProperties {
	}
	export function CreateBatchPersonalNameGeoSubdivisionInFormGroup() {
		return new FormGroup<BatchPersonalNameGeoSubdivisionInFormProperties>({
		});

	}

	export interface PersonalNameGeoSubdivisionIn {
		countryIso2?: string | null;
		id?: string | null;
		name?: string | null;
		subdivisionIso?: string | null;
	}
	export interface PersonalNameGeoSubdivisionInFormProperties {
		countryIso2: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		subdivisionIso: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameGeoSubdivisionInFormGroup() {
		return new FormGroup<PersonalNameGeoSubdivisionInFormProperties>({
			countryIso2: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subdivisionIso: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameIn {
		facts?: Array<FactIn>;
		personalNames?: Array<PersonalNameIn>;
	}
	export interface BatchPersonalNameInFormProperties {
	}
	export function CreateBatchPersonalNameInFormGroup() {
		return new FormGroup<BatchPersonalNameInFormProperties>({
		});

	}

	export interface BatchPersonalNameParsedOut {

		/** Classified parsed names */
		personalNames?: Array<PersonalNameParsedOut>;
	}
	export interface BatchPersonalNameParsedOutFormProperties {
	}
	export function CreateBatchPersonalNameParsedOutFormGroup() {
		return new FormGroup<BatchPersonalNameParsedOutFormProperties>({
		});

	}

	export interface PersonalNameParsedOut {

		/** First / last name structure corresponding to the most likely parsing. */
		firstLastName?: FirstLastNameOut;
		id?: string | null;

		/** The input name */
		name?: string | null;

		/** Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. */
		nameParserType?: PersonalNameParsedOutNameParserType | null;

		/** Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. */
		nameParserTypeAlt?: PersonalNameParsedOutNameParserType | null;

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}
	export interface PersonalNameParsedOutFormProperties {
		id: FormControl<string | null | undefined>,

		/** The input name */
		name: FormControl<string | null | undefined>,

		/** Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. */
		nameParserType: FormControl<PersonalNameParsedOutNameParserType | null | undefined>,

		/** Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. */
		nameParserTypeAlt: FormControl<PersonalNameParsedOutNameParserType | null | undefined>,

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameParsedOutFormGroup() {
		return new FormGroup<PersonalNameParsedOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nameParserType: new FormControl<PersonalNameParsedOutNameParserType | null | undefined>(undefined),
			nameParserTypeAlt: new FormControl<PersonalNameParsedOutNameParserType | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** First / last name structure corresponding to the most likely parsing. */
	export interface FirstLastNameOut {

		/** The first name (also known as given name) */
		firstName?: string | null;
		id?: string | null;

		/** The last name (also known as family name, or surname) */
		lastName?: string | null;
		script?: string | null;
	}

	/** First / last name structure corresponding to the most likely parsing. */
	export interface FirstLastNameOutFormProperties {

		/** The first name (also known as given name) */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The last name (also known as family name, or surname) */
		lastName: FormControl<string | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateFirstLastNameOutFormGroup() {
		return new FormGroup<FirstLastNameOutFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PersonalNameParsedOutNameParserType { FN1LN1 = 0, LN1FN1 = 1, FN1LN2 = 2, LN2FN1 = 3, FN1LNx = 4, LNxFN1 = 5, FN2LN1 = 6, LN1FN2 = 7, FN2LN2 = 8, LN2FN2 = 9, FN2LNx = 10, LNxFN2 = 11, FNxLN1 = 12, LN1FNx = 13, FNxLN2 = 14, LN2FNx = 15, FNxLNx = 16, LNxFNx = 17 }

	export interface BatchPersonalNameReligionedOut {

		/** religious-coded names */
		personalNames?: Array<PersonalNameReligionedOut>;
	}
	export interface BatchPersonalNameReligionedOutFormProperties {
	}
	export function CreateBatchPersonalNameReligionedOutFormGroup() {
		return new FormGroup<BatchPersonalNameReligionedOutFormProperties>({
		});

	}


	/** religious-coded names */
	export interface PersonalNameReligionedOut {
		id?: string | null;

		/** The input name. */
		name?: string | null;

		/**
		 * The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated?: number | null;

		/**
		 * The calibrated probability for country to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated?: number | null;

		/** Most likely religion */
		religion?: string | null;

		/** Second best alternative : religion */
		religionAlt?: string | null;

		/** List countries (top 10) */
		religionsTop?: Array<string>;

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}

	/** religious-coded names */
	export interface PersonalNameReligionedOutFormProperties {
		id: FormControl<string | null | undefined>,

		/** The input name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityAltCalibrated: FormControl<number | null | undefined>,

		/**
		 * The calibrated probability for country to have been guessed correctly. -1 = still calibrating.
		 * Minimum: -1
		 * Maximum: 1
		 */
		probabilityCalibrated: FormControl<number | null | undefined>,

		/** Most likely religion */
		religion: FormControl<string | null | undefined>,

		/** Second best alternative : religion */
		religionAlt: FormControl<string | null | undefined>,

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameReligionedOutFormGroup() {
		return new FormGroup<PersonalNameReligionedOutFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			probabilityAltCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			probabilityCalibrated: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			religion: new FormControl<string | null | undefined>(undefined),
			religionAlt: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPersonalNameSubdivisionIn {
		facts?: Array<FactIn>;
		personalNames?: Array<PersonalNameSubdivisionIn>;
	}
	export interface BatchPersonalNameSubdivisionInFormProperties {
	}
	export function CreateBatchPersonalNameSubdivisionInFormGroup() {
		return new FormGroup<BatchPersonalNameSubdivisionInFormProperties>({
		});

	}

	export interface PersonalNameSubdivisionIn {
		id?: string | null;
		name?: string | null;
		subdivisionIso?: string | null;
	}
	export interface PersonalNameSubdivisionInFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		subdivisionIso: FormControl<string | null | undefined>,
	}
	export function CreatePersonalNameSubdivisionInFormGroup() {
		return new FormGroup<PersonalNameSubdivisionInFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subdivisionIso: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names. */
	export interface BatchProperNounCategorizedOut {

		/** Classified typed proper names */
		properNouns?: Array<ProperNounCategorizedOut>;
	}

	/** Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names. */
	export interface BatchProperNounCategorizedOutFormProperties {
	}
	export function CreateBatchProperNounCategorizedOutFormGroup() {
		return new FormGroup<BatchProperNounCategorizedOutFormProperties>({
		});

	}


	/** Classified typed proper names */
	export interface ProperNounCategorizedOut {

		/** The most likely common name type */
		commonType?: string | null;

		/** Best alternative for : The most likely common name type */
		commonTypeAlt?: string | null;
		id?: string | null;

		/** The input name */
		name?: string | null;

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score?: number | null;
		script?: string | null;
	}

	/** Classified typed proper names */
	export interface ProperNounCategorizedOutFormProperties {

		/** The most likely common name type */
		commonType: FormControl<string | null | undefined>,

		/** Best alternative for : The most likely common name type */
		commonTypeAlt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The input name */
		name: FormControl<string | null | undefined>,

		/**
		 * Higher score is better, but score is not normalized. Use calibratedProbability if available.
		 * Minimum: 0
		 * Maximum: 100
		 */
		score: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateProperNounCategorizedOutFormGroup() {
		return new FormGroup<ProperNounCategorizedOutFormProperties>({
			commonType: new FormControl<string | null | undefined>(undefined),
			commonTypeAlt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeedbackLoopOut {

		/** Number of units recredited as per feedback loop successful classification */
		feedbackCredits?: number | null;
	}
	export interface FeedbackLoopOutFormProperties {

		/** Number of units recredited as per feedback loop successful classification */
		feedbackCredits: FormControl<number | null | undefined>,
	}
	export function CreateFeedbackLoopOutFormGroup() {
		return new FormGroup<FeedbackLoopOutFormProperties>({
			feedbackCredits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of countries and regions */
	export interface RegionISO {
		countryFIPS?: string | null;
		countryISO2?: string | null;
		countryISO3?: string | null;
		countryName?: string | null;
		countryNumCode?: string | null;
		region?: string | null;
		subregion?: string | null;
		topregion?: string | null;
	}

	/** List of countries and regions */
	export interface RegionISOFormProperties {
		countryFIPS: FormControl<string | null | undefined>,
		countryISO2: FormControl<string | null | undefined>,
		countryISO3: FormControl<string | null | undefined>,
		countryName: FormControl<string | null | undefined>,
		countryNumCode: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		subregion: FormControl<string | null | undefined>,
		topregion: FormControl<string | null | undefined>,
	}
	export function CreateRegionISOFormGroup() {
		return new FormGroup<RegionISOFormProperties>({
			countryFIPS: new FormControl<string | null | undefined>(undefined),
			countryISO2: new FormControl<string | null | undefined>(undefined),
			countryISO3: new FormControl<string | null | undefined>(undefined),
			countryName: new FormControl<string | null | undefined>(undefined),
			countryNumCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			subregion: new FormControl<string | null | undefined>(undefined),
			topregion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionOut {

		/** List of countries and regions */
		countriesAndRegions?: Array<RegionISO>;
	}
	export interface RegionOutFormProperties {
	}
	export function CreateRegionOutFormGroup() {
		return new FormGroup<RegionOutFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Activate/deactivate anonymization for a source.
		 * Get api2/json/anonymize/{source}/{anonymized}/{token}
		 * @return {APIKeyOut} Anonymization of a source.
		 */
		Anonymize(source: string, anonymized: boolean, token: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/anonymize/' + (source == null ? '' : encodeURIComponent(source)) + '/' + anonymized + '/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Read API Key info.
		 * Get api2/json/apiKeyInfo
		 * @return {APIKeyOut} Read API Key (uncached, i.e. DB read)
		 */
		ApiKeyInfo(): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/apiKeyInfo', {});
		}

		/**
		 * List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
		 * Get api2/json/apiServices
		 * @return {APIServicesOut} Available services
		 */
		AvailableServices(): Observable<APIServicesOut> {
			return this.http.get<APIServicesOut>(this.baseUri + 'api2/json/apiServices', {});
		}

		/**
		 * Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
		 * Get api2/json/apiStatus
		 * @return {APIClassifiersStatusOut} Available classifiers and status
		 */
		ApiStatus(): Observable<APIClassifiersStatusOut> {
			return this.http.get<APIClassifiersStatusOut>(this.baseUri + 'api2/json/apiStatus', {});
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
		 * @return {APIUsageHistoryOut} Print historical API usage (NB. new output format form v2.0.15)
		 */
		ApiUsageHistory(): Observable<APIUsageHistoryOut> {
			return this.http.get<APIUsageHistoryOut>(this.baseUri + 'api2/json/apiUsageHistory', {});
		}

		/**
		 * Print historical API usage (in an aggregated view, by service, by day/hour/min).
		 * Get api2/json/apiUsageHistoryAggregate
		 * @return {APIUsageAggregatedOut} Print historical API usage.
		 */
		ApiUsageHistoryAggregate(): Observable<APIUsageAggregatedOut> {
			return this.http.get<APIUsageAggregatedOut>(this.baseUri + 'api2/json/apiUsageHistoryAggregate', {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
		 * Get api2/json/castegroupIndianFull/{subDivisionIso31662}/{personalNameFull}
		 * @return {PersonalNameCastegroupOut} A castegroup-coded name.
		 */
		CastegroupIndianFull(subDivisionIso31662: string, personalNameFull: string): Observable<PersonalNameCastegroupOut> {
			return this.http.get<PersonalNameCastegroupOut>(this.baseUri + 'api2/json/castegroupIndianFull/' + (subDivisionIso31662 == null ? '' : encodeURIComponent(subDivisionIso31662)) + '/' + (personalNameFull == null ? '' : encodeURIComponent(personalNameFull)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names.
		 * Post api2/json/castegroupIndianFullBatch
		 * @param {BatchPersonalNameSubdivisionIn} requestBody A list of personal names
		 * @return {BatchPersonalNameCastegroupOut} A list of castegroup-coded names.
		 */
		CastegroupIndianFullBatch(requestBody: BatchPersonalNameSubdivisionIn): Observable<BatchPersonalNameCastegroupOut> {
			return this.http.post<BatchPersonalNameCastegroupOut>(this.baseUri + 'api2/json/castegroupIndianFullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
		 * Get api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}
		 * @return {NameMatchCandidatesOut} A romanized name.
		 */
		ChineseNameCandidates(chineseSurnameLatin: string, chineseGivenNameLatin: string): Observable<NameMatchCandidatesOut> {
			return this.http.get<NameMatchCandidatesOut>(this.baseUri + 'api2/json/chineseNameCandidates/' + (chineseSurnameLatin == null ? '' : encodeURIComponent(chineseSurnameLatin)) + '/' + (chineseGivenNameLatin == null ? '' : encodeURIComponent(chineseGivenNameLatin)), {});
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
		 * @param {BatchFirstLastNameGenderIn} requestBody A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
		 * @return {BatchNameMatchCandidatesOut} A list of genderized names.
		 */
		ChineseNameCandidatesGenderBatch(requestBody: BatchFirstLastNameGenderIn): Observable<BatchNameMatchCandidatesOut> {
			return this.http.post<BatchNameMatchCandidatesOut>(this.baseUri + 'api2/json/chineseNameCandidatesGenderBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
		 * Get api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}
		 * @return {NameMatchCandidatesOut} A romanized name.
		 */
		ChineseNameGenderCandidates(chineseSurnameLatin: string, chineseGivenNameLatin: string, knownGender: string): Observable<NameMatchCandidatesOut> {
			return this.http.get<NameMatchCandidatesOut>(this.baseUri + 'api2/json/chineseNameGenderCandidates/' + (chineseSurnameLatin == null ? '' : encodeURIComponent(chineseSurnameLatin)) + '/' + (chineseGivenNameLatin == null ? '' : encodeURIComponent(chineseGivenNameLatin)) + '/' + (knownGender == null ? '' : encodeURIComponent(knownGender)), {});
		}

		/**
		 * Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
		 * Get api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}
		 * @return {NameMatchedOut} A romanized name.
		 */
		ChineseNameMatch(chineseSurnameLatin: string, chineseGivenNameLatin: string, chineseName: string): Observable<NameMatchedOut> {
			return this.http.get<NameMatchedOut>(this.baseUri + 'api2/json/chineseNameMatch/' + (chineseSurnameLatin == null ? '' : encodeURIComponent(chineseSurnameLatin)) + '/' + (chineseGivenNameLatin == null ? '' : encodeURIComponent(chineseGivenNameLatin)) + '/' + (chineseName == null ? '' : encodeURIComponent(chineseName)), {});
		}

		/**
		 * Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
		 * Post api2/json/chineseNameMatchBatch
		 * @param {BatchMatchPersonalFirstLastNameIn} requestBody A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
		 * @return {BatchNameMatchedOut} A list of genderized names.
		 */
		ChineseNameMatchBatch(requestBody: BatchMatchPersonalFirstLastNameIn): Observable<BatchNameMatchedOut> {
			return this.http.post<BatchNameMatchedOut>(this.baseUri + 'api2/json/chineseNameMatchBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
		 * Get api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}
		 * @return {CorridorOut} Two classified names.
		 */
		Corridor(countryIso2From: string, firstNameFrom: string, lastNameFrom: string, countryIso2To: string, firstNameTo: string, lastNameTo: string): Observable<CorridorOut> {
			return this.http.get<CorridorOut>(this.baseUri + 'api2/json/corridor/' + (countryIso2From == null ? '' : encodeURIComponent(countryIso2From)) + '/' + (firstNameFrom == null ? '' : encodeURIComponent(firstNameFrom)) + '/' + (lastNameFrom == null ? '' : encodeURIComponent(lastNameFrom)) + '/' + (countryIso2To == null ? '' : encodeURIComponent(countryIso2To)) + '/' + (firstNameTo == null ? '' : encodeURIComponent(firstNameTo)) + '/' + (lastNameTo == null ? '' : encodeURIComponent(lastNameTo)), {});
		}

		/**
		 * [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
		 * Post api2/json/corridorBatch
		 * @param {BatchCorridorIn} requestBody A list of name pairs, with country code (nameFrom -> nameTo).
		 * @return {BatchCorridorOut} A list of classified name pairs.
		 */
		CorridorBatch(requestBody: BatchCorridorIn): Observable<BatchCorridorOut> {
			return this.http.post<BatchCorridorOut>(this.baseUri + 'api2/json/corridorBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
		 * Get api2/json/country/{personalNameFull}
		 * @return {PersonalNameGeoOut} A origined name.
		 */
		Country(personalNameFull: string): Observable<PersonalNameGeoOut> {
			return this.http.get<PersonalNameGeoOut>(this.baseUri + 'api2/json/country/' + (personalNameFull == null ? '' : encodeURIComponent(personalNameFull)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
		 * Post api2/json/countryBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names
		 * @return {BatchPersonalNameGeoOut} A list of genderized names.
		 */
		CountryBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameGeoOut> {
			return this.http.post<BatchPersonalNameGeoOut>(this.baseUri + 'api2/json/countryBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
		 * Get api2/json/diaspora/{countryIso2}/{firstName}/{lastName}
		 * @return {FirstLastNameDiasporaedOut} A diaspora / ethnicity for given name and geography.
		 */
		Diaspora(countryIso2: string, firstName: string, lastName: string): Observable<FirstLastNameDiasporaedOut> {
			return this.http.get<FirstLastNameDiasporaedOut>(this.baseUri + 'api2/json/diaspora/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)) + '/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
		 * Post api2/json/diasporaBatch
		 * @param {BatchFirstLastNameGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameDiasporaedOut} A list of diaspora / ethnicity given a name and residency.
		 */
		DiasporaBatch(requestBody: BatchFirstLastNameGeoIn): Observable<BatchFirstLastNameDiasporaedOut> {
			return this.http.post<BatchFirstLastNameDiasporaedOut>(this.baseUri + 'api2/json/diasporaBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
		 * Get api2/json/gender/{firstName}
		 * @return {FirstLastNameGenderedOut} A genderized name.
		 */
		Gender_1(firstName: string): Observable<FirstLastNameGenderedOut> {
			return this.http.get<FirstLastNameGenderedOut>(this.baseUri + 'api2/json/gender/' + (firstName == null ? '' : encodeURIComponent(firstName)), {});
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
		 * @return {PersonalNameGenderedOut} A genderized name.
		 */
		GenderFull(fullName: string): Observable<PersonalNameGenderedOut> {
			return this.http.get<PersonalNameGenderedOut>(this.baseUri + 'api2/json/genderFull/' + (fullName == null ? '' : encodeURIComponent(fullName)), {});
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
		 * @return {PersonalNameGenderedOut} A genderized name.
		 */
		GenderFullGeo(fullName: string, countryIso2: string): Observable<PersonalNameGenderedOut> {
			return this.http.get<PersonalNameGenderedOut>(this.baseUri + 'api2/json/genderFullGeo/' + (fullName == null ? '' : encodeURIComponent(fullName)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
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
		 * Infer the likely gender of a Japanese name in LATIN (Pinyin).
		 * Get api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}
		 * @return {FirstLastNameGenderedOut} A genderized name.
		 */
		GenderJapaneseNamePinyin(japaneseSurname: string, japaneseGivenName: string): Observable<FirstLastNameGenderedOut> {
			return this.http.get<FirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderJapaneseName/' + (japaneseSurname == null ? '' : encodeURIComponent(japaneseSurname)) + '/' + (japaneseGivenName == null ? '' : encodeURIComponent(japaneseGivenName)), {});
		}

		/**
		 * Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
		 * Post api2/json/genderJapaneseNameBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of names, with country code.
		 * @return {BatchFirstLastNameGenderedOut} A list of genderized names.
		 */
		GenderJapaneseNamePinyinBatch(requestBody: BatchFirstLastNameIn): Observable<BatchFirstLastNameGenderedOut> {
			return this.http.post<BatchFirstLastNameGenderedOut>(this.baseUri + 'api2/json/genderJapaneseNameBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely gender of a Japanese full name ex. 王晓明
		 * Get api2/json/genderJapaneseNameFull/{japaneseName}
		 * @return {PersonalNameGenderedOut} A genderized name.
		 */
		GenderJapaneseNameFull(japaneseName: string): Observable<PersonalNameGenderedOut> {
			return this.http.get<PersonalNameGenderedOut>(this.baseUri + 'api2/json/genderJapaneseNameFull/' + (japaneseName == null ? '' : encodeURIComponent(japaneseName)), {});
		}

		/**
		 * Infer the likely gender of up to 100 full names
		 * Post api2/json/genderJapaneseNameFullBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names
		 * @return {BatchPersonalNameGenderedOut} A list of genderized names.
		 */
		GenderJapaneseNameFullBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameGenderedOut> {
			return this.http.post<BatchPersonalNameGenderedOut>(this.baseUri + 'api2/json/genderJapaneseNameFullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
		 * Post api2/json/japaneseNameGenderKanjiCandidatesBatch
		 * @param {BatchFirstLastNameGenderIn} requestBody A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname and known gender
		 * @return {BatchNameMatchCandidatesOut} A list of genderized names.
		 */
		JapaneseNameGenderKanjiCandidatesBatch(requestBody: BatchFirstLastNameGenderIn): Observable<BatchNameMatchCandidatesOut> {
			return this.http.post<BatchNameMatchCandidatesOut>(this.baseUri + 'api2/json/japaneseNameGenderKanjiCandidatesBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
		 * Get api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}
		 * @return {NameMatchCandidatesOut} A romanized name.
		 */
		JapaneseNameKanjiCandidates_1(japaneseSurnameLatin: string, japaneseGivenNameLatin: string): Observable<NameMatchCandidatesOut> {
			return this.http.get<NameMatchCandidatesOut>(this.baseUri + 'api2/json/japaneseNameKanjiCandidates/' + (japaneseSurnameLatin == null ? '' : encodeURIComponent(japaneseSurnameLatin)) + '/' + (japaneseGivenNameLatin == null ? '' : encodeURIComponent(japaneseGivenNameLatin)), {});
		}

		/**
		 * Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
		 * Get api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}
		 * @return {NameMatchCandidatesOut} A romanized name.
		 */
		JapaneseNameKanjiCandidates(japaneseSurnameLatin: string, japaneseGivenNameLatin: string, knownGender: string): Observable<NameMatchCandidatesOut> {
			return this.http.get<NameMatchCandidatesOut>(this.baseUri + 'api2/json/japaneseNameKanjiCandidates/' + (japaneseSurnameLatin == null ? '' : encodeURIComponent(japaneseSurnameLatin)) + '/' + (japaneseGivenNameLatin == null ? '' : encodeURIComponent(japaneseGivenNameLatin)) + '/' + (knownGender == null ? '' : encodeURIComponent(knownGender)), {});
		}

		/**
		 * Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
		 * Post api2/json/japaneseNameKanjiCandidatesBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname
		 * @return {BatchNameMatchCandidatesOut} A list of genderized names.
		 */
		JapaneseNameKanjiCandidatesBatch(requestBody: BatchFirstLastNameIn): Observable<BatchNameMatchCandidatesOut> {
			return this.http.post<BatchNameMatchCandidatesOut>(this.baseUri + 'api2/json/japaneseNameKanjiCandidatesBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Romanize japanese name, based on the name in Kanji.
		 * Get api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}
		 * @return {NameMatchCandidatesOut} A romanized name.
		 */
		JapaneseNameLatinCandidates(japaneseSurnameKanji: string, japaneseGivenNameKanji: string): Observable<NameMatchCandidatesOut> {
			return this.http.get<NameMatchCandidatesOut>(this.baseUri + 'api2/json/japaneseNameLatinCandidates/' + (japaneseSurnameKanji == null ? '' : encodeURIComponent(japaneseSurnameKanji)) + '/' + (japaneseGivenNameKanji == null ? '' : encodeURIComponent(japaneseGivenNameKanji)), {});
		}

		/**
		 * Romanize japanese names, based on the name in KANJI
		 * Post api2/json/japaneseNameLatinCandidatesBatch
		 * @param {BatchFirstLastNameIn} requestBody A list of personal japanese names in KANJI, firstName = japaneseGivenName; lastName=japaneseSurname
		 * @return {BatchNameMatchCandidatesOut} A list of genderized names.
		 */
		JapaneseNameLatinCandidatesBatch(requestBody: BatchFirstLastNameIn): Observable<BatchNameMatchCandidatesOut> {
			return this.http.post<BatchNameMatchCandidatesOut>(this.baseUri + 'api2/json/japaneseNameLatinCandidatesBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
		 * Get api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}
		 * @return {NameMatchedOut} A romanized name.
		 */
		JapaneseNameMatch(japaneseSurnameLatin: string, japaneseGivenNameLatin: string, japaneseName: string): Observable<NameMatchedOut> {
			return this.http.get<NameMatchedOut>(this.baseUri + 'api2/json/japaneseNameMatch/' + (japaneseSurnameLatin == null ? '' : encodeURIComponent(japaneseSurnameLatin)) + '/' + (japaneseGivenNameLatin == null ? '' : encodeURIComponent(japaneseGivenNameLatin)) + '/' + (japaneseName == null ? '' : encodeURIComponent(japaneseName)), {});
		}

		/**
		 * Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
		 * Post api2/json/japaneseNameMatchBatch
		 * @param {BatchMatchPersonalFirstLastNameIn} requestBody A list of personal Japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname
		 * @return {BatchNameMatchedOut} A list of matched names.
		 */
		JapaneseNameMatchBatch(requestBody: BatchMatchPersonalFirstLastNameIn): Observable<BatchNameMatchedOut> {
			return this.http.post<BatchNameMatchedOut>(this.baseUri + 'api2/json/japaneseNameMatchBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
		 * Get api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}
		 * @return {FeedbackLoopOut} A romanized name.
		 */
		JapaneseNameMatchFeedbackLoop(japaneseSurnameLatin: string, japaneseGivenNameLatin: string, japaneseName: string): Observable<FeedbackLoopOut> {
			return this.http.get<FeedbackLoopOut>(this.baseUri + 'api2/json/japaneseNameMatchFeedbackLoop/' + (japaneseSurnameLatin == null ? '' : encodeURIComponent(japaneseSurnameLatin)) + '/' + (japaneseGivenNameLatin == null ? '' : encodeURIComponent(japaneseGivenNameLatin)) + '/' + (japaneseName == null ? '' : encodeURIComponent(japaneseName)), {});
		}

		/**
		 * Activate/deactivate learning from a source.
		 * Get api2/json/learnable/{source}/{learnable}/{token}
		 * @param {string} source The API Key to set as learnable/non learnable.
		 * @return {APIKeyOut} Set learning from source.
		 */
		Learnable(source: string, learnable: boolean, token: string): Observable<APIKeyOut> {
			return this.http.get<APIKeyOut>(this.baseUri + 'api2/json/learnable/' + (source == null ? '' : encodeURIComponent(source)) + '/' + learnable + '/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Infer the likely type of a proper noun (personal name, brand name, place name etc.)
		 * Get api2/json/nameType/{properNoun}
		 * @return {ProperNounCategorizedOut} A typed name.
		 */
		NameType(properNoun: string): Observable<ProperNounCategorizedOut> {
			return this.http.get<ProperNounCategorizedOut>(this.baseUri + 'api2/json/nameType/' + (properNoun == null ? '' : encodeURIComponent(properNoun)), {});
		}

		/**
		 * Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
		 * Post api2/json/nameTypeBatch
		 * @param {BatchNameIn} requestBody A list of proper names
		 * @return {BatchProperNounCategorizedOut} A list of commonTypeized names.
		 */
		NameTypeBatch(requestBody: BatchNameIn): Observable<BatchProperNounCategorizedOut> {
			return this.http.post<BatchProperNounCategorizedOut>(this.baseUri + 'api2/json/nameTypeBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Infer the likely type of a proper noun (personal name, brand name, place name etc.)
		 * Get api2/json/nameTypeGeo/{properNoun}/{countryIso2}
		 * @return {ProperNounCategorizedOut} A typed name.
		 */
		NameTypeGeo(properNoun: string, countryIso2: string): Observable<ProperNounCategorizedOut> {
			return this.http.get<ProperNounCategorizedOut>(this.baseUri + 'api2/json/nameTypeGeo/' + (properNoun == null ? '' : encodeURIComponent(properNoun)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
		}

		/**
		 * Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
		 * Post api2/json/nameTypeGeoBatch
		 * @param {BatchNameGeoIn} requestBody A list of proper names
		 * @return {BatchProperNounCategorizedOut} A list of commonTypeized names.
		 */
		NameTypeGeoBatch(requestBody: BatchNameGeoIn): Observable<BatchProperNounCategorizedOut> {
			return this.http.post<BatchProperNounCategorizedOut>(this.baseUri + 'api2/json/nameTypeGeoBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
		 * Get api2/json/origin/{firstName}/{lastName}
		 * @return {FirstLastNameOriginedOut} A origined name.
		 */
		Origin(firstName: string, lastName: string): Observable<FirstLastNameOriginedOut> {
			return this.http.get<FirstLastNameOriginedOut>(this.baseUri + 'api2/json/origin/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
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
		 * Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
		 * Get api2/json/parseJapaneseName/{japaneseName}
		 * @return {PersonalNameParsedOut} A origined name.
		 */
		ParseJapaneseName(japaneseName: string): Observable<PersonalNameParsedOut> {
			return this.http.get<PersonalNameParsedOut>(this.baseUri + 'api2/json/parseJapaneseName/' + (japaneseName == null ? '' : encodeURIComponent(japaneseName)), {});
		}

		/**
		 * Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
		 * Post api2/json/parseJapaneseNameBatch
		 * @param {BatchPersonalNameIn} requestBody A list of personal names
		 * @return {BatchPersonalNameParsedOut} A list of parsed names.
		 */
		ParseJapaneseNameBatch(requestBody: BatchPersonalNameIn): Observable<BatchPersonalNameParsedOut> {
			return this.http.post<BatchPersonalNameParsedOut>(this.baseUri + 'api2/json/parseJapaneseNameBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
		 * Get api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}
		 * @return {FirstLastNamePhoneCodedOut} A name with country and phone code.
		 */
		PhoneCode(firstName: string, lastName: string, phoneNumber: string): Observable<FirstLastNamePhoneCodedOut> {
			return this.http.get<FirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCode/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)), {});
		}

		/**
		 * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
		 * Post api2/json/phoneCodeBatch
		 * @param {BatchFirstLastNamePhoneNumberIn} requestBody A list of personal names
		 * @return {BatchFirstLastNamePhoneCodedOut} A list of genderized names.
		 */
		PhoneCodeBatch(requestBody: BatchFirstLastNamePhoneNumberIn): Observable<BatchFirstLastNamePhoneCodedOut> {
			return this.http.post<BatchFirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCodeBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
		 * Get api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}
		 * @return {FirstLastNamePhoneCodedOut} A name with country and phone code.
		 */
		PhoneCodeGeo(firstName: string, lastName: string, phoneNumber: string, countryIso2: string): Observable<FirstLastNamePhoneCodedOut> {
			return this.http.get<FirstLastNamePhoneCodedOut>(this.baseUri + 'api2/json/phoneCodeGeo/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)), {});
		}

		/**
		 * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
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
		 * Print basic source statistics.
		 * Get api2/json/regions
		 * @return {RegionOut} List of countries and regions.
		 */
		Regions(): Observable<RegionOut> {
			return this.http.get<RegionOut>(this.baseUri + 'api2/json/regions', {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
		 * Get api2/json/religionFull/{countryIso2}/{subDivisionIso31662}/{personalNameFull}
		 * @return {PersonalNameReligionedOut} A religion-coded name.
		 */
		ReligionFull(countryIso2: string, subDivisionIso31662: string, personalNameFull: string): Observable<PersonalNameReligionedOut> {
			return this.http.get<PersonalNameReligionedOut>(this.baseUri + 'api2/json/religionFull/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)) + '/' + (subDivisionIso31662 == null ? '' : encodeURIComponent(subDivisionIso31662)) + '/' + (personalNameFull == null ? '' : encodeURIComponent(personalNameFull)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
		 * Post api2/json/religionFullBatch
		 * @param {BatchPersonalNameGeoSubdivisionIn} requestBody A list of personal names
		 * @return {BatchPersonalNameReligionedOut} A list of religion-coded names.
		 */
		ReligionFullBatch(requestBody: BatchPersonalNameGeoSubdivisionIn): Observable<BatchPersonalNameReligionedOut> {
			return this.http.post<BatchPersonalNameReligionedOut>(this.baseUri + 'api2/json/religionFullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
		 * Get api2/json/religionIndianFull/{subDivisionIso31662}/{personalNameFull}
		 * @return {PersonalNameReligionedOut} A religion-coded name.
		 */
		Religion(subDivisionIso31662: string, personalNameFull: string): Observable<PersonalNameReligionedOut> {
			return this.http.get<PersonalNameReligionedOut>(this.baseUri + 'api2/json/religionIndianFull/' + (subDivisionIso31662 == null ? '' : encodeURIComponent(subDivisionIso31662)) + '/' + (personalNameFull == null ? '' : encodeURIComponent(personalNameFull)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
		 * Post api2/json/religionIndianFullBatch
		 * @param {BatchPersonalNameSubdivisionIn} requestBody A list of personal names
		 * @return {BatchPersonalNameReligionedOut} A list of religion-coded names.
		 */
		ReligionIndianFullBatch(requestBody: BatchPersonalNameSubdivisionIn): Observable<BatchPersonalNameReligionedOut> {
			return this.http.post<BatchPersonalNameReligionedOut>(this.baseUri + 'api2/json/religionIndianFullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
		 * Get api2/json/subclassification/{countryIso2}/{firstName}/{lastName}
		 * @return {FirstLastNameGeoSubclassificationOut} A classified name at a sub-country level.
		 */
		Subclassification(countryIso2: string, firstName: string, lastName: string): Observable<FirstLastNameGeoSubclassificationOut> {
			return this.http.get<FirstLastNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassification/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)) + '/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
		 * Post api2/json/subclassificationBatch
		 * @param {BatchFirstLastNameGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameGeoSubclassificationOut} A list of classified names at a sub-country level.
		 */
		SubclassificationBatch(requestBody: BatchFirstLastNameGeoIn): Observable<BatchFirstLastNameGeoSubclassificationOut> {
			return this.http.post<BatchFirstLastNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassificationBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
		 * Get api2/json/subclassificationFull/{countryIso2}/{fullName}
		 * @return {FirstLastNameGeoSubclassificationOut} A classified name at a sub-country level.
		 */
		SubclassificationFull(countryIso2: string, fullName: string): Observable<FirstLastNameGeoSubclassificationOut> {
			return this.http.get<FirstLastNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassificationFull/' + (countryIso2 == null ? '' : encodeURIComponent(countryIso2)) + '/' + (fullName == null ? '' : encodeURIComponent(fullName)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
		 * Post api2/json/subclassificationFullBatch
		 * @param {BatchPersonalNameGeoIn} requestBody A list of personal names
		 * @return {BatchPersonalNameGeoSubclassificationOut} A list of classified names at a sub-country level.
		 */
		SubclassificationFullBatch(requestBody: BatchPersonalNameGeoIn): Observable<BatchPersonalNameGeoSubclassificationOut> {
			return this.http.post<BatchPersonalNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassificationFullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
		 * Get api2/json/subclassificationIndian/{firstName}/{lastName}
		 * @return {FirstLastNameGeoSubclassificationOut} A classified name at a sub-country level.
		 */
		SubclassificationIndian(firstName: string, lastName: string): Observable<FirstLastNameGeoSubclassificationOut> {
			return this.http.get<FirstLastNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassificationIndian/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
		 * Post api2/json/subclassificationIndianBatch
		 * @param {BatchFirstLastNameGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameGeoSubclassificationOut} A list of classified names at a subcountry level.
		 */
		SubclassificationIndianBatch(requestBody: BatchFirstLastNameGeoIn): Observable<BatchFirstLastNameGeoSubclassificationOut> {
			return this.http.post<BatchFirstLastNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassificationIndianBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
		 * Get api2/json/subclassificationIndianFull/{fullName}
		 * @return {PersonalNameGeoSubclassificationOut} A classified name at a sub-country level.
		 */
		SubclassificationIndianFull(fullName: string): Observable<PersonalNameGeoSubclassificationOut> {
			return this.http.get<PersonalNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassificationIndianFull/' + (fullName == null ? '' : encodeURIComponent(fullName)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
		 * Post api2/json/subclassificationIndianFullBatch
		 * @param {BatchPersonalNameGeoIn} requestBody A list of personal names
		 * @return {BatchPersonalNameGeoSubclassificationOut} A list of classified names at a subcountry level.
		 */
		SubclassificationIndianFullBatch(requestBody: BatchPersonalNameGeoIn): Observable<BatchPersonalNameGeoSubclassificationOut> {
			return this.http.post<BatchPersonalNameGeoSubclassificationOut>(this.baseUri + 'api2/json/subclassificationIndianFullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Print the taxonomy classes valid for the given classifier.
		 * Get api2/json/taxonomyClasses/{classifierName}
		 * @return {APIClassifierTaxonomyOut} Available plans
		 */
		TaxonomyClasses(classifierName: string): Observable<APIClassifierTaxonomyOut> {
			return this.http.get<APIClassifierTaxonomyOut>(this.baseUri + 'api2/json/taxonomyClasses/' + (classifierName == null ? '' : encodeURIComponent(classifierName)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
		 * Get api2/json/usRaceEthnicity/{firstName}/{lastName}
		 * @return {FirstLastNameUSRaceEthnicityOut} a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally
		 */
		UsRaceEthnicity(firstName: string, lastName: string): Observable<FirstLastNameUSRaceEthnicityOut> {
			return this.http.get<FirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usRaceEthnicity/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
		 * Post api2/json/usRaceEthnicityBatch
		 * @param {BatchFirstLastNameGeoIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameUSRaceEthnicityOut} A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally
		 */
		UsRaceEthnicityBatch(requestBody: BatchFirstLastNameGeoIn): Observable<BatchFirstLastNameUSRaceEthnicityOut> {
			return this.http.post<BatchFirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usRaceEthnicityBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
		 * Get api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}
		 * @return {FirstLastNameUSRaceEthnicityOut} a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally
		 */
		UsRaceEthnicityZIP5(firstName: string, lastName: string, zip5Code: string): Observable<FirstLastNameUSRaceEthnicityOut> {
			return this.http.get<FirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usRaceEthnicityZIP5/' + (firstName == null ? '' : encodeURIComponent(firstName)) + '/' + (lastName == null ? '' : encodeURIComponent(lastName)) + '/' + (zip5Code == null ? '' : encodeURIComponent(zip5Code)), {});
		}

		/**
		 * [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
		 * Post api2/json/usZipRaceEthnicityBatch
		 * @param {BatchFirstLastNameGeoZippedIn} requestBody A list of personal names
		 * @return {BatchFirstLastNameUSRaceEthnicityOut} A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally
		 */
		UsZipRaceEthnicityBatch(requestBody: BatchFirstLastNameGeoZippedIn): Observable<BatchFirstLastNameUSRaceEthnicityOut> {
			return this.http.post<BatchFirstLastNameUSRaceEthnicityOut>(this.baseUri + 'api2/json/usZipRaceEthnicityBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

