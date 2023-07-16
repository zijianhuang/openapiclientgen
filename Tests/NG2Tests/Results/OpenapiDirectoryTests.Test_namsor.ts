import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface APIBillingPeriodUsageOut {
		apiKey?: string;
		billingStatus?: string;
		hardLimit?: number;
		periodEnded?: number;
		periodStarted?: number;
		softLimit?: number;
		stripeCurrentPeriodEnd?: number;
		stripeCurrentPeriodStart?: number;
		subscriptionStarted?: number;
		usage?: number;
	}

	export interface APICounterV2Out {
		apiKey?: APIKeyOut;
		apiService?: string;
		createdDateTime?: number;
		lastFlushedDateTime?: number;
		lastUsedDateTime?: number;
		serviceFeaturesUsage?: {[id: string]: number };
		totalUsage?: number;
	}

	export interface APIKeyOut {
		admin?: boolean;
		anonymized?: boolean;
		apiKey?: string;
		corporate?: boolean;
		disabled?: boolean;
		learnable?: boolean;
		partner?: boolean;
		striped?: boolean;
		userId?: string;
		vetted?: boolean;
	}

	export interface APIPeriodUsageOut {
		billingPeriod?: APIBillingPeriodUsageOut;
		overageCurrency?: string;
		overageExclTax?: number;
		overageInclTax?: number;
		overageQuantity?: number;
		subscription?: APIPlanSubscriptionOut;
	}

	export interface APIPlanSubscriptionOut {
		apiKey?: string;
		currency?: string;
		currencyFactor?: number;
		planBaseFeesKey?: string;
		planEnded?: number;
		planName?: string;
		planQuota?: number;
		planStarted?: number;
		planStatus?: string;
		price?: number;
		priceOverage?: number;
		priceOverageUSD?: number;
		priceUSD?: number;
		priorPlanStarted?: number;
		stripeCustomerId?: string;
		stripeStatus?: string;
		stripeSubscription?: string;
		taxRate?: number;
		userId?: string;
	}

	export interface APIPlanOut {
		planName?: string;
		planQuota?: number;
		price?: number;
		priceOverage?: number;
	}

	export interface APIPlansOut {
		currencyIso3?: string;
		currencySymbol?: string;
		plans?: Array<APIPlanOut>;
		usageRatioForDupplicates?: number;
	}

	export interface APIServiceOut {
		costInUnits?: number;
		serviceGroup?: string;
		serviceName?: string;
	}

	export interface APIServicesOut {
		apiServices?: Array<APIServiceOut>;
	}

	export interface APIUsageAggregatedOut {
		colHeaders?: Array<string>;
		data?: Array<string>;
		historyTruncated?: boolean;
		periodEnd?: number;
		periodStart?: number;
		rowHeaders?: Array<string>;
		timeUnit?: string;
		totalUsage?: number;
	}


	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface BatchFirstLastNameDiasporaedOut {
		personalNames?: Array<FirstLastNameDiasporaedOut>;
	}


	/** Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence. */
	export interface FirstLastNameDiasporaedOut {
		countryIso2?: string;
		ethnicity?: string;
		ethnicityAlt?: string;
		firstName?: string;
		id?: string;
		lastName?: string;
		lifted?: boolean;

		/** Compatibility to NamSor_v1 Origin score value */
		score?: number;
	}

	export interface BatchFirstLastNameGenderIn {
		personalNames?: Array<FirstLastNameGenderIn>;
	}

	export interface FirstLastNameGenderIn {
		firstName?: string;
		gender?: string;
		id?: string;
		lastName?: string;
	}


	/** Represents the output of inferring the LIKELY gender from a list of personal names. */
	export interface BatchFirstLastNameGenderedOut {
		personalNames?: Array<FirstLastNameGenderedOut>;
	}


	/** Represents the output of inferring the LIKELY gender from a personal name. */
	export interface FirstLastNameGenderedOut {
		firstName?: string;

		/** Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value */
		genderScale?: number;
		id?: string;
		lastName?: string;

		/** Most likely gender */
		likelyGender?: FirstLastNameGenderedOutLikelyGender;
		probabilityCalibrated?: number;
		score?: number;
	}

	export enum FirstLastNameGenderedOutLikelyGender { male = 0, female = 1, unknown = 2 }

	export interface BatchFirstLastNameGeoIn {
		personalNames?: Array<FirstLastNameGeoIn>;
	}

	export interface FirstLastNameGeoIn {
		countryIso2?: string;
		firstName?: string;
		id?: string;
		lastName?: string;
	}

	export interface BatchFirstLastNameGeoZippedIn {
		personalNames?: Array<FirstLastNameGeoZippedIn>;
	}

	export interface FirstLastNameGeoZippedIn {
		countryIso2?: string;
		firstName?: string;
		id?: string;
		lastName?: string;
		zipCode?: string;
	}

	export interface BatchFirstLastNameIn {
		personalNames?: Array<FirstLastNameIn>;
	}

	export interface FirstLastNameIn {
		firstName?: string;
		id?: string;
		lastName?: string;
	}


	/** Represents the output of inferring the LIKELY origin from a list of personal names. */
	export interface BatchFirstLastNameOriginedOut {
		personalNames?: Array<FirstLastNameOriginedOut>;
	}


	/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
	export interface FirstLastNameOriginedOut {

		/** Most likely country of Origin */
		countryOrigin?: string;

		/** Second best alternative : country of Origin */
		countryOriginAlt?: string;
		firstName?: string;
		id?: string;
		lastName?: string;

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		regionOrigin?: string;

		/** Compatibility to NamSor_v1 Origin score value */
		score?: number;

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		subRegionOrigin?: string;

		/** Most likely region of Origin (based on countryOrigin ISO2 code) */
		topRegionOrigin?: string;
	}


	/** Represents the output of inferring the LIKELY country and phone code of personal names+phones. */
	export interface BatchFirstLastNamePhoneCodedOut {
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneCodedOut>;
	}


	/** Represents the output of inferring the LIKELY country and phone code from a personal name and phone number. */
	export interface FirstLastNamePhoneCodedOut {
		countryIso2?: string;
		firstName?: string;
		id?: string;
		internationalPhoneNumberVerified?: string;
		lastName?: string;
		originCountryIso2?: string;
		originCountryIso2Alt?: string;
		phoneCountryCode?: number;
		phoneCountryCodeAlt?: number;
		phoneCountryIso2?: string;
		phoneCountryIso2Alt?: string;
		phoneCountryIso2Verified?: string;
		phoneNumber?: string;
		score?: number;
		verified?: boolean;
	}

	export interface BatchFirstLastNamePhoneNumberGeoIn {
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneNumberGeoIn>;
	}

	export interface FirstLastNamePhoneNumberGeoIn {

		/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
		FirstLastNameOriginedOut?: FirstLastNameOriginedOut;
		countryIso2?: string;
		countryIso2Alt?: string;
		firstName?: string;
		id?: string;
		lastName?: string;
		phoneNumber?: string;
	}

	export interface BatchFirstLastNamePhoneNumberIn {
		personalNamesWithPhoneNumbers?: Array<FirstLastNamePhoneNumberIn>;
	}

	export interface FirstLastNamePhoneNumberIn {

		/** Represents the output of inferring the LIKELY country of Origin from a personal name. */
		FirstLastNameOriginedOut?: FirstLastNameOriginedOut;
		firstName?: string;
		id?: string;
		lastName?: string;
		phoneNumber?: string;
	}


	/** Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code. */
	export interface BatchFirstLastNameUSRaceEthnicityOut {
		personalNames?: Array<FirstLastNameUSRaceEthnicityOut>;
	}


	/** Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code. */
	export interface FirstLastNameUSRaceEthnicityOut {
		firstName?: string;
		id?: string;
		lastName?: string;

		/** Most likely US 'race'/ethnicity */
		raceEthnicity?: FirstLastNameUSRaceEthnicityOutRaceEthnicity;

		/** Second most likely US 'race'/ethnicity */
		raceEthnicityAlt?: FirstLastNameUSRaceEthnicityOutRaceEthnicity;

		/** Compatibility to NamSor_v1 Origin score value */
		score?: number;
	}

	export enum FirstLastNameUSRaceEthnicityOutRaceEthnicity { W_NL = 0, HL = 1, A = 2, B_NL = 3 }

	export interface BatchMatchPersonalFirstLastNameIn {
		personalNames?: Array<MatchPersonalFirstLastNameIn>;
	}

	export interface MatchPersonalFirstLastNameIn {
		id?: string;
		name?: string;
		name1?: FirstLastNameIn;
		name2?: PersonalNameIn;
	}

	export interface PersonalNameIn {
		id?: string;
		name?: string;
	}

	export interface BatchNameMatchCandidatesOut {
		namesAndMatchCandidates?: Array<NameMatchCandidatesOut>;
	}

	export interface NameMatchCandidatesOut {
		firstName?: string;
		id?: string;
		lastName?: string;
		matchCandidates?: Array<NameMatchCandidateOut>;
	}

	export interface NameMatchCandidateOut {
		candidateName?: string;
		probability?: number;
	}

	export interface BatchNameMatchedOut {
		matchedNames?: Array<NameMatchedOut>;
	}

	export interface NameMatchedOut {
		id?: string;
		matchStatus?: string;
		score?: number;
	}

	export interface BatchParsedFullNameGeoIn {
		personalNames?: Array<ParsedFullNameGeoIn>;
	}

	export interface ParsedFullNameGeoIn {
		countryIso2?: string;
		firstName?: string;
		id?: string;
		lastName?: string;
		middleName?: string;
		prefixOrTitle?: string;
		suffix?: string;
	}

	export interface BatchParsedFullNameIn {
		personalNames?: Array<ParsedFullNameIn>;
	}

	export interface ParsedFullNameIn {
		firstName?: string;
		id?: string;
		lastName?: string;
		middleName?: string;
		prefixOrTitle?: string;
		suffix?: string;
	}

	export interface BatchPersonalNameGenderedOut {
		personalNames?: Array<PersonalNameGenderedOut>;
	}

	export interface PersonalNameGenderedOut {

		/** Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value */
		genderScale?: number;
		id?: string;

		/** Most likely gender */
		likelyGender?: FirstLastNameGenderedOutLikelyGender;
		name?: string;
		score?: number;
	}

	export interface BatchPersonalNameGeoIn {
		personalNames?: Array<PersonalNameGeoIn>;
	}

	export interface PersonalNameGeoIn {
		countryIso2?: string;
		id?: string;
		name?: string;
	}

	export interface BatchPersonalNameGeoOut {
		personalNames?: Array<PersonalNameGeoOut>;
	}

	export interface PersonalNameGeoOut {
		country?: string;
		countryAlt?: string;
		id?: string;
		name?: string;
		region?: string;
		score?: number;
		subRegion?: string;
		topRegion?: string;
	}

	export interface BatchPersonalNameIn {
		personalNames?: Array<PersonalNameIn>;
	}

	export interface BatchPersonalNameParsedOut {
		personalNames?: Array<PersonalNameParsedOut>;
	}

	export interface PersonalNameParsedOut {
		firstLastName?: FirstLastNameOut;
		id?: string;
		name?: string;
		nameParserType?: string;
		nameParserTypeAlt?: string;
		score?: number;
	}

	export interface FirstLastNameOut {
		firstName?: string;
		id?: string;
		lastName?: string;
	}

	export interface BillingHistoryOut {
		corporateInvoices?: Array<InvoiceOut>;
		stripeInvoices?: Array<InvoiceOut>;
	}

	export interface InvoiceOut {
		amountDue?: number;
		amountPaid?: number;
		amountRemaining?: number;
		attempted?: boolean;
		currency?: string;
		description?: string;
		dueDate?: Date;
		invoiceDate?: Date;
		invoiceId?: string;
		invoicePdf?: string;
		invoiceStatus?: string;
		isStriped?: boolean;
		items?: Array<InvoiceItemOut>;
		periodEnd?: Date;
		periodStart?: Date;
		receiptNumber?: string;
		stripeCustomerId?: string;
		subTotal?: number;
		tax?: number;
		taxPercent?: number;
		total?: number;
		userId?: string;
	}

	export interface InvoiceItemOut {
		amount?: number;
		currency?: string;
		description?: string;
		invoiceItemType?: string;
		itemId?: string;
		planDesc?: string;
		planName?: string;
		planNickname?: string;
		quantity?: number;
		subscription?: string;
		subscriptionItem?: string;
	}

	export interface BillingInfoInOut {
		addressCity?: string;
		addressCountry?: string;
		addressLine1?: string;
		addressLine2?: string;
		addressPostalCode?: string;
		addressState?: string;
		billingEmail?: string;
		customerName?: string;
		customerPhone?: string;
		preferredCurrency?: string;
		vatID?: string;
	}


	/** Simple metrics on a classifier */
	export interface ClassifierMetricsOut {
		aiNonVettedEstimatePrecision?: number;
		aiNonVettedEstimateRecall?: number;
		aiNonVettedEstimateTotal?: number;
		aiNonVettedExpectedClassMetrics?: Array<ExpectedClassMetricsOut>;
		aiNonVettedLearnTotal?: number;
		aiStartTime?: number;
		aiVettedEstimatePrecision?: number;
		aiVettedEstimateRecall?: number;
		aiVettedEstimateTotal?: number;
		aiVettedExpectedClassMetrics?: Array<ExpectedClassMetricsOut>;
		aiVettedLearnTotal?: number;
		bufferSize?: number;
		classifierName?: string;
		classifyDurationsCurrent?: number;
		classifyDurationsSummary?: number;
		factKeysSize?: number;
		factsLearned?: number;
		featuresSize?: number;
		learnDurationsCurrent?: number;
		learnDurationsSummary?: number;
		learnQueueSize?: number;
		metricTimeStamp?: number;
		preClassifyQueueSize?: number;
	}


	/** Simple metrics on a classifier, for a given expected class */
	export interface ExpectedClassMetricsOut {
		aiEstimatePrecision?: number;
		aiEstimateRecall?: number;
		aiEstimateTotal?: number;
		aiLearnTotal?: number;
		classifierName?: string;
		expectedClass?: string;
	}

	export interface CurrenciesOut {
		currenciesIso3?: Array<string>;
	}

	export interface DeployUIOut {
		errorMessage?: string;
		succeeded?: boolean;
	}

	export interface FeedbackLoopOut {
		feedbackCredits?: number;
	}

	export interface NamSorCounterOut {
		counter?: number;
	}

	export interface RomanizedNameOut {
		id?: string;
		latinName?: string;
		originalName?: string;
		score?: number;
		sourceLanguage?: string;
		sourceScript?: string;
		targetLanguage?: string;
		targetScript?: string;
	}

	export interface SoftwareVersionOut {
		softwareNameAndVersion?: string;
		softwareVersion?: Array<number>;
	}


	/** Simple metrics on source, with details by classifier. */
	export interface SourceDetailedMetricsOut {
		aiEstimatePrecision?: number;
		aiEstimateRecall?: number;
		aiEstimateTotal?: number;
		aiLearnTotal?: number;
		aiStartTime?: number;
		classifierName?: string;
		expectedClassMetrics?: Array<ExpectedClassMetricsOut>;
		metricTimeStamp?: number;
		snapshotDate?: number;
		source?: APIKeyOut;
	}


	/** Simple metrics on a classifier, for a given source */
	export interface SourceMetricsOut {
		aiEstimatePrecision?: number;
		aiEstimateRecall?: number;
		aiEstimateTotal?: number;
		aiLearnTotal?: number;
		aiStartTime?: number;
		classifierName?: string;
		metricTimeStamp?: number;
		snapshotDate?: number;
		source?: APIKeyOut;
	}

	export interface StripeCardOut {
		brand?: string;
		defaultCard?: boolean;
		expMonth?: number;
		expYear?: number;
		last4?: string;
		sourceId?: string;
	}

	export interface StripeCustomerOut {
		sourceCountry?: string;
		sourceCurrency?: string;
		stripeCustomerId?: string;
		stripedCards?: Array<StripeCardOut>;
	}

	export interface SystemMetricsOut {
		classifierMetrics?: Array<ClassifierMetricsOut>;
		freeMem?: number;
		maxMem?: number;
		sourceMetrics?: Array<SourceMetricsOut>;
		totalMem?: number;
	}

	export interface UserInfoOut {
		apiKey?: string;
		disabled?: boolean;
		displayName?: string;
		email?: string;
		emailVerified?: boolean;
		firstKnownIpAddress?: string;
		otherInfos?: Array<UserInfoOut>;
		phoneNumber?: string;
		photoUrl?: string;
		providerId?: string;
		stripeCustomerId?: string;
		stripePerishableKey?: string;
		timeStamp?: number;
		uid?: string;
		verifyToken?: string;
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
		StripeConnect(scope: string, code: string, error: string, error_description: string): Observable<HttpResponse<string>> {
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

