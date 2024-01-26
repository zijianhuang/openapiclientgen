import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiCoreDtoAccountingConversionOptions {
		hideComCost?: boolean | null;
		hideCost?: boolean | null;
		hideCount?: boolean | null;
		hideParams?: boolean | null;
		hideValue?: boolean | null;
		percentCommission?: number | null;
		percentValue?: number | null;
	}
	export interface ApiCoreDtoAccountingConversionOptionsFormProperties {
		hideComCost: FormControl<boolean | null | undefined>,
		hideCost: FormControl<boolean | null | undefined>,
		hideCount: FormControl<boolean | null | undefined>,
		hideParams: FormControl<boolean | null | undefined>,
		hideValue: FormControl<boolean | null | undefined>,
		percentCommission: FormControl<number | null | undefined>,
		percentValue: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingConversionOptionsFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingConversionOptionsFormProperties>({
			hideComCost: new FormControl<boolean | null | undefined>(undefined),
			hideCost: new FormControl<boolean | null | undefined>(undefined),
			hideCount: new FormControl<boolean | null | undefined>(undefined),
			hideParams: new FormControl<boolean | null | undefined>(undefined),
			hideValue: new FormControl<boolean | null | undefined>(undefined),
			percentCommission: new FormControl<number | null | undefined>(undefined),
			percentValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoAccountingDomainWhitelistEntry {
		id?: string | null;
		name?: string | null;
	}
	export interface ApiCoreDtoAccountingDomainWhitelistEntryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingDomainWhitelistEntryFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingDomainWhitelistEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoAccountingExtendedGrants {
		allowAllGrants?: boolean | null;
		allowGroupCreation?: boolean | null;
	}
	export interface ApiCoreDtoAccountingExtendedGrantsFormProperties {
		allowAllGrants: FormControl<boolean | null | undefined>,
		allowGroupCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingExtendedGrantsFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingExtendedGrantsFormProperties>({
			allowAllGrants: new FormControl<boolean | null | undefined>(undefined),
			allowGroupCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoAccountingGuest {
		apiKey?: string | null;
		conversionOptions?: ApiCoreDtoAccountingConversionOptions;

		/** (A date in "YmdHis" format) */
		creationDate?: string | null;
		currentGrant?: ApiCoreDtoGrantsGrant;
		dateFormat?: string | null;
		decimalSeparator?: string | null;
		email?: string | null;
		extendedGrants?: ApiCoreDtoAccountingExtendedGrants;
		groupGrants?: number | null;
		hitOptions?: ApiCoreDtoAccountingHitOptions;
		id?: number | null;
		key?: string | null;
		language?: string | null;
		loginCount?: number | null;
		name?: string | null;
		notes?: string | null;
		numberGroupSeparator?: string | null;
		password?: string | null;
		timeFormat?: ApiCoreDtoAccountingGuestTimeFormat | null;
		timeZone?: number | null;

		/** (A date in "YmdHis" format) */
		timeframeMinDate?: string | null;
		timezonename?: string | null;
		tlGrants?: number | null;
		tpGrants?: number | null;
		userName?: string | null;
	}
	export interface ApiCoreDtoAccountingGuestFormProperties {
		apiKey: FormControl<string | null | undefined>,

		/** (A date in "YmdHis" format) */
		creationDate: FormControl<string | null | undefined>,
		dateFormat: FormControl<string | null | undefined>,
		decimalSeparator: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		groupGrants: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		key: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		loginCount: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		numberGroupSeparator: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		timeFormat: FormControl<ApiCoreDtoAccountingGuestTimeFormat | null | undefined>,
		timeZone: FormControl<number | null | undefined>,

		/** (A date in "YmdHis" format) */
		timeframeMinDate: FormControl<string | null | undefined>,
		timezonename: FormControl<string | null | undefined>,
		tlGrants: FormControl<number | null | undefined>,
		tpGrants: FormControl<number | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingGuestFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingGuestFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			dateFormat: new FormControl<string | null | undefined>(undefined),
			decimalSeparator: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			groupGrants: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			loginCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			numberGroupSeparator: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			timeFormat: new FormControl<ApiCoreDtoAccountingGuestTimeFormat | null | undefined>(undefined),
			timeZone: new FormControl<number | null | undefined>(undefined),
			timeframeMinDate: new FormControl<string | null | undefined>(undefined),
			timezonename: new FormControl<string | null | undefined>(undefined),
			tlGrants: new FormControl<number | null | undefined>(undefined),
			tpGrants: new FormControl<number | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoGrantsGrant {
		DatapointType?: string | null;
		Entity?: ApiCoreResponsesEntityUri_SystemInt64_;
		EntityName?: string | null;
		EntityType?: string | null;
		Type?: string | null;
	}
	export interface ApiCoreDtoGrantsGrantFormProperties {
		DatapointType: FormControl<string | null | undefined>,
		EntityName: FormControl<string | null | undefined>,
		EntityType: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoGrantsGrantFormGroup() {
		return new FormGroup<ApiCoreDtoGrantsGrantFormProperties>({
			DatapointType: new FormControl<string | null | undefined>(undefined),
			EntityName: new FormControl<string | null | undefined>(undefined),
			EntityType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreResponsesEntityUri_SystemInt64_ {
		id?: number | null;
		uri?: string | null;
	}
	export interface ApiCoreResponsesEntityUri_SystemInt64_FormProperties {
		id: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreResponsesEntityUri_SystemInt64_FormGroup() {
		return new FormGroup<ApiCoreResponsesEntityUri_SystemInt64_FormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoAccountingHitOptions {
		hideReferrer?: boolean | null;
	}
	export interface ApiCoreDtoAccountingHitOptionsFormProperties {
		hideReferrer: FormControl<boolean | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingHitOptionsFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingHitOptionsFormProperties>({
			hideReferrer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ApiCoreDtoAccountingGuestTimeFormat { AmPm = 0, H24 = 1 }

	export interface ApiCoreDtoAccountingIpBlacklistEntry {
		id?: string | null;
		ip?: string | null;
	}
	export interface ApiCoreDtoAccountingIpBlacklistEntryFormProperties {
		id: FormControl<string | null | undefined>,
		ip: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingIpBlacklistEntryFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingIpBlacklistEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoAccountingPlan {
		allowedPersonalDomains?: number | null;
		allowedPersonalUrls?: number | null;

		/** (A date in "YmdHis" format) */
		billingPeriodEnd?: string | null;

		/** (A date in "YmdHis" format) */
		billingPeriodStart?: string | null;
		bonusMonthlyEvents?: number | null;
		maximumDatapoints?: number | null;
		maximumGuests?: number | null;
		monthlyEvents?: number | null;
		name?: string | null;
		price?: number | null;
		profileId?: number | null;
		recurring?: boolean | null;
		recurringPeriod?: number | null;
		usedDatapoints?: number | null;
		usedMonthlyEvents?: number | null;
	}
	export interface ApiCoreDtoAccountingPlanFormProperties {
		allowedPersonalDomains: FormControl<number | null | undefined>,
		allowedPersonalUrls: FormControl<number | null | undefined>,

		/** (A date in "YmdHis" format) */
		billingPeriodEnd: FormControl<string | null | undefined>,

		/** (A date in "YmdHis" format) */
		billingPeriodStart: FormControl<string | null | undefined>,
		bonusMonthlyEvents: FormControl<number | null | undefined>,
		maximumDatapoints: FormControl<number | null | undefined>,
		maximumGuests: FormControl<number | null | undefined>,
		monthlyEvents: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		profileId: FormControl<number | null | undefined>,
		recurring: FormControl<boolean | null | undefined>,
		recurringPeriod: FormControl<number | null | undefined>,
		usedDatapoints: FormControl<number | null | undefined>,
		usedMonthlyEvents: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingPlanFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingPlanFormProperties>({
			allowedPersonalDomains: new FormControl<number | null | undefined>(undefined),
			allowedPersonalUrls: new FormControl<number | null | undefined>(undefined),
			billingPeriodEnd: new FormControl<string | null | undefined>(undefined),
			billingPeriodStart: new FormControl<string | null | undefined>(undefined),
			bonusMonthlyEvents: new FormControl<number | null | undefined>(undefined),
			maximumDatapoints: new FormControl<number | null | undefined>(undefined),
			maximumGuests: new FormControl<number | null | undefined>(undefined),
			monthlyEvents: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			profileId: new FormControl<number | null | undefined>(undefined),
			recurring: new FormControl<boolean | null | undefined>(undefined),
			recurringPeriod: new FormControl<number | null | undefined>(undefined),
			usedDatapoints: new FormControl<number | null | undefined>(undefined),
			usedMonthlyEvents: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoAccountingUser {
		boGoVal?: string | null;
		bonusClicks?: number | null;
		companyName?: string | null;
		companyRole?: string | null;
		email?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		phone?: string | null;
		redirectOnly?: boolean | null;

		/** (A date in "YmdHis" format) */
		registrationDate?: string | null;

		/** (A date in "YmdHis" format) */
		timeframeMinDate?: string | null;
		timezone?: number | null;
		timezonename?: string | null;
	}
	export interface ApiCoreDtoAccountingUserFormProperties {
		boGoVal: FormControl<string | null | undefined>,
		bonusClicks: FormControl<number | null | undefined>,
		companyName: FormControl<string | null | undefined>,
		companyRole: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		redirectOnly: FormControl<boolean | null | undefined>,

		/** (A date in "YmdHis" format) */
		registrationDate: FormControl<string | null | undefined>,

		/** (A date in "YmdHis" format) */
		timeframeMinDate: FormControl<string | null | undefined>,
		timezone: FormControl<number | null | undefined>,
		timezonename: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoAccountingUserFormGroup() {
		return new FormGroup<ApiCoreDtoAccountingUserFormProperties>({
			boGoVal: new FormControl<string | null | undefined>(undefined),
			bonusClicks: new FormControl<number | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			companyRole: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			redirectOnly: new FormControl<boolean | null | undefined>(undefined),
			registrationDate: new FormControl<string | null | undefined>(undefined),
			timeframeMinDate: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<number | null | undefined>(undefined),
			timezonename: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoAggregatedAggregatedResult {

		/** (A date in "YmdHis" format) */
		activityDay?: string | null;
		commissionsCost?: number | null;
		conversionsCost?: number | null;
		conversionsValue?: number | null;
		convertedClicks?: number | null;
		entityData?: SystemObject;
		entityId?: string | null;

		/** (A date in "YmdHis" format) */
		fromDay?: string | null;
		hourlyBreakDown?: {[id: string]: ApiCoreDtoAggregatedAggregatedResult };

		/** (A date in "YmdHis" format) */
		lastHitDate?: string | null;
		spiderHitsCount?: number | null;

		/** (A date in "YmdHis" format) */
		toDay?: string | null;
		totalClicks?: number | null;
		totalViews?: number | null;
		uniqueClicks?: number | null;
		uniqueConversions?: number | null;
		uniqueViews?: number | null;
	}
	export interface ApiCoreDtoAggregatedAggregatedResultFormProperties {

		/** (A date in "YmdHis" format) */
		activityDay: FormControl<string | null | undefined>,
		commissionsCost: FormControl<number | null | undefined>,
		conversionsCost: FormControl<number | null | undefined>,
		conversionsValue: FormControl<number | null | undefined>,
		convertedClicks: FormControl<number | null | undefined>,
		entityId: FormControl<string | null | undefined>,

		/** (A date in "YmdHis" format) */
		fromDay: FormControl<string | null | undefined>,
		hourlyBreakDown: FormControl<{[id: string]: ApiCoreDtoAggregatedAggregatedResult } | null | undefined>,

		/** (A date in "YmdHis" format) */
		lastHitDate: FormControl<string | null | undefined>,
		spiderHitsCount: FormControl<number | null | undefined>,

		/** (A date in "YmdHis" format) */
		toDay: FormControl<string | null | undefined>,
		totalClicks: FormControl<number | null | undefined>,
		totalViews: FormControl<number | null | undefined>,
		uniqueClicks: FormControl<number | null | undefined>,
		uniqueConversions: FormControl<number | null | undefined>,
		uniqueViews: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoAggregatedAggregatedResultFormGroup() {
		return new FormGroup<ApiCoreDtoAggregatedAggregatedResultFormProperties>({
			activityDay: new FormControl<string | null | undefined>(undefined),
			commissionsCost: new FormControl<number | null | undefined>(undefined),
			conversionsCost: new FormControl<number | null | undefined>(undefined),
			conversionsValue: new FormControl<number | null | undefined>(undefined),
			convertedClicks: new FormControl<number | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			fromDay: new FormControl<string | null | undefined>(undefined),
			hourlyBreakDown: new FormControl<{[id: string]: ApiCoreDtoAggregatedAggregatedResult } | null | undefined>(undefined),
			lastHitDate: new FormControl<string | null | undefined>(undefined),
			spiderHitsCount: new FormControl<number | null | undefined>(undefined),
			toDay: new FormControl<string | null | undefined>(undefined),
			totalClicks: new FormControl<number | null | undefined>(undefined),
			totalViews: new FormControl<number | null | undefined>(undefined),
			uniqueClicks: new FormControl<number | null | undefined>(undefined),
			uniqueConversions: new FormControl<number | null | undefined>(undefined),
			uniqueViews: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SystemObject {
	}
	export interface SystemObjectFormProperties {
	}
	export function CreateSystemObjectFormGroup() {
		return new FormGroup<SystemObjectFormProperties>({
		});

	}

	export interface ApiCoreDtoAggregatedAggregatedSummaryResult {
		count?: number | null;
		limit?: number | null;
		offset?: number | null;
		result?: Array<ApiCoreDtoAggregatedAggregatedResult>;
	}
	export interface ApiCoreDtoAggregatedAggregatedSummaryResultFormProperties {
		count: FormControl<number | null | undefined>,
		limit: FormControl<number | null | undefined>,
		offset: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoAggregatedAggregatedSummaryResultFormGroup() {
		return new FormGroup<ApiCoreDtoAggregatedAggregatedSummaryResultFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHit {

		/** (A date in "YmdHis" format) */
		accessTime?: string | null;
		browser?: ApiCoreDtoClickStreamHitBrowserInfo;
		clientLanguage?: string | null;
		conversion1?: ApiCoreDtoClickStreamHitConversionInfo;
		conversion2?: ApiCoreDtoClickStreamHitConversionInfo;
		conversion3?: ApiCoreDtoClickStreamHitConversionInfo;
		conversion4?: ApiCoreDtoClickStreamHitConversionInfo;
		conversion5?: ApiCoreDtoClickStreamHitConversionInfo;
		conversions?: Array<ApiCoreDtoClickStreamHitConversionInfo>;
		entity?: ApiCoreDtoClickStreamHitDatapointInfo;
		ip?: string | null;
		isProxy?: string | null;
		isSpider?: string | null;
		isUnique?: string | null;
		location?: ApiCoreDtoClickStreamHitLocationInfo;
		org?: string | null;
		os?: ApiCoreDtoClickStreamHitOsInfo;
		queryParams?: string | null;
		realDestinationUrl?: string | null;
		referer?: string | null;
		source?: ApiCoreDtoClickStreamHitSource;
		type?: string | null;
	}
	export interface ApiCoreDtoClickStreamHitFormProperties {

		/** (A date in "YmdHis" format) */
		accessTime: FormControl<string | null | undefined>,
		clientLanguage: FormControl<string | null | undefined>,
		ip: FormControl<string | null | undefined>,
		isProxy: FormControl<string | null | undefined>,
		isSpider: FormControl<string | null | undefined>,
		isUnique: FormControl<string | null | undefined>,
		org: FormControl<string | null | undefined>,
		queryParams: FormControl<string | null | undefined>,
		realDestinationUrl: FormControl<string | null | undefined>,
		referer: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitFormProperties>({
			accessTime: new FormControl<string | null | undefined>(undefined),
			clientLanguage: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			isProxy: new FormControl<string | null | undefined>(undefined),
			isSpider: new FormControl<string | null | undefined>(undefined),
			isUnique: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			queryParams: new FormControl<string | null | undefined>(undefined),
			realDestinationUrl: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHitBrowserInfo {
		browserType?: string | null;
		familyId?: number | null;
		familyName?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface ApiCoreDtoClickStreamHitBrowserInfoFormProperties {
		browserType: FormControl<string | null | undefined>,
		familyId: FormControl<number | null | undefined>,
		familyName: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitBrowserInfoFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitBrowserInfoFormProperties>({
			browserType: new FormControl<string | null | undefined>(undefined),
			familyId: new FormControl<number | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHitConversionInfo {

		/** (A date in "YmdHis" format) */
		accessTime?: string | null;
		comcost?: number | null;
		cost?: number | null;

		/** (A date in "YmdHis" format) */
		date?: string | null;
		deleted?: boolean | null;
		id?: number | null;
		name?: string | null;
		parameter?: string | null;
		value?: number | null;
	}
	export interface ApiCoreDtoClickStreamHitConversionInfoFormProperties {

		/** (A date in "YmdHis" format) */
		accessTime: FormControl<string | null | undefined>,
		comcost: FormControl<number | null | undefined>,
		cost: FormControl<number | null | undefined>,

		/** (A date in "YmdHis" format) */
		date: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		parameter: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitConversionInfoFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitConversionInfoFormProperties>({
			accessTime: new FormControl<string | null | undefined>(undefined),
			comcost: new FormControl<number | null | undefined>(undefined),
			cost: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHitDatapointInfo {

		/** (A date in "YmdHis" format) */
		creationDate?: string | null;
		datapointFavourite?: boolean | null;
		datapointId?: number | null;
		datapointName?: string | null;
		datapointTitle?: string | null;
		datapointType?: string | null;
		destinationUrl?: string | null;
		groupId?: number | null;
		groupName?: string | null;
		isABTest?: boolean | null;
		isPrivateShared?: boolean | null;
		isPublic?: boolean | null;
		notes?: string | null;
		status?: ApiCoreDtoClickStreamHitDatapointInfoStatus | null;
		tags?: Array<ApiCoreDtoTagsTag>;
		trackingCode?: string | null;
	}
	export interface ApiCoreDtoClickStreamHitDatapointInfoFormProperties {

		/** (A date in "YmdHis" format) */
		creationDate: FormControl<string | null | undefined>,
		datapointFavourite: FormControl<boolean | null | undefined>,
		datapointId: FormControl<number | null | undefined>,
		datapointName: FormControl<string | null | undefined>,
		datapointTitle: FormControl<string | null | undefined>,
		datapointType: FormControl<string | null | undefined>,
		destinationUrl: FormControl<string | null | undefined>,
		groupId: FormControl<number | null | undefined>,
		groupName: FormControl<string | null | undefined>,
		isABTest: FormControl<boolean | null | undefined>,
		isPrivateShared: FormControl<boolean | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
		status: FormControl<ApiCoreDtoClickStreamHitDatapointInfoStatus | null | undefined>,
		trackingCode: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitDatapointInfoFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitDatapointInfoFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			datapointFavourite: new FormControl<boolean | null | undefined>(undefined),
			datapointId: new FormControl<number | null | undefined>(undefined),
			datapointName: new FormControl<string | null | undefined>(undefined),
			datapointTitle: new FormControl<string | null | undefined>(undefined),
			datapointType: new FormControl<string | null | undefined>(undefined),
			destinationUrl: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<number | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			isABTest: new FormControl<boolean | null | undefined>(undefined),
			isPrivateShared: new FormControl<boolean | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiCoreDtoClickStreamHitDatapointInfoStatus | null | undefined>(undefined),
			trackingCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiCoreDtoClickStreamHitDatapointInfoStatus { Active = 0, Paused = 1, Abuse = 2, Deleted = 3 }

	export interface ApiCoreDtoTagsTag {
		datapoints?: Array<number>;
		groups?: Array<number>;
		id?: number | null;
		name?: string | null;
	}
	export interface ApiCoreDtoTagsTagFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoTagsTagFormGroup() {
		return new FormGroup<ApiCoreDtoTagsTagFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHitLocationInfo {
		areacode?: string | null;
		city?: string | null;
		country?: string | null;
		latitude?: number | null;
		longitude?: number | null;
		metrocode?: string | null;
		organization?: string | null;
		postalcode?: string | null;
		region?: string | null;
		regionName?: string | null;
	}
	export interface ApiCoreDtoClickStreamHitLocationInfoFormProperties {
		areacode: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		metrocode: FormControl<string | null | undefined>,
		organization: FormControl<string | null | undefined>,
		postalcode: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitLocationInfoFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitLocationInfoFormProperties>({
			areacode: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			metrocode: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postalcode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHitOsInfo {
		familyId?: number | null;
		familyName?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface ApiCoreDtoClickStreamHitOsInfoFormProperties {
		familyId: FormControl<number | null | undefined>,
		familyName: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitOsInfoFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitOsInfoFormProperties>({
			familyId: new FormControl<number | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHitSource {
		id?: number | null;
		name?: string | null;
		param?: string | null;
	}
	export interface ApiCoreDtoClickStreamHitSourceFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		param: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitSourceFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitSourceFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			param: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoClickStreamHitListPage {
		hits?: Array<ApiCoreDtoClickStreamHit>;
		lastKey?: string | null;
	}
	export interface ApiCoreDtoClickStreamHitListPageFormProperties {
		lastKey: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoClickStreamHitListPageFormGroup() {
		return new FormGroup<ApiCoreDtoClickStreamHitListPageFormProperties>({
			lastKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoConversionsConversion {
		code?: string | null;

		/** (A date in "YmdHis" format) */
		creationDate?: string | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: number | null;
		name?: string | null;
		protocol?: ApiCoreDtoConversionsConversionProtocol | null;
		value?: number | null;
	}
	export interface ApiCoreDtoConversionsConversionFormProperties {
		code: FormControl<string | null | undefined>,

		/** (A date in "YmdHis" format) */
		creationDate: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		protocol: FormControl<ApiCoreDtoConversionsConversionProtocol | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoConversionsConversionFormGroup() {
		return new FormGroup<ApiCoreDtoConversionsConversionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<ApiCoreDtoConversionsConversionProtocol | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ApiCoreDtoConversionsConversionProtocol { Http = 0, Https = 1 }

	export interface ApiCoreDtoDatapointsBrowserBaseDestinationItem {
		emailDestinationUrl?: string | null;
		mobileDestinationUrl?: string | null;
		spidersDestinationUrl?: string | null;
	}
	export interface ApiCoreDtoDatapointsBrowserBaseDestinationItemFormProperties {
		emailDestinationUrl: FormControl<string | null | undefined>,
		mobileDestinationUrl: FormControl<string | null | undefined>,
		spidersDestinationUrl: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsBrowserBaseDestinationItemFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsBrowserBaseDestinationItemFormProperties>({
			emailDestinationUrl: new FormControl<string | null | undefined>(undefined),
			mobileDestinationUrl: new FormControl<string | null | undefined>(undefined),
			spidersDestinationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoDatapointsDatapoint {

		/** (A date in "YmdHis" format) */
		creationDate?: string | null;
		encodeIp?: boolean | null;
		fifthConversionId?: number | null;
		fifthConversionName?: string | null;
		firstConversionId?: number | null;
		firstConversionName?: string | null;
		fourthConversionId?: number | null;
		fourthConversionName?: string | null;
		groupId?: number | null;
		groupName?: string | null;
		id?: number | null;
		isPublic?: boolean | null;
		isSecured?: boolean | null;
		lightTracking?: boolean | null;
		name?: string | null;
		notes?: string | null;
		preferred?: boolean | null;
		redirectOnly?: boolean | null;
		secondConversionId?: number | null;
		secondConversionName?: string | null;
		status?: ApiCoreDtoClickStreamHitDatapointInfoStatus | null;
		tags?: Array<ApiCoreDtoTagsTag>;
		thirdConversionId?: number | null;
		thirdConversionName?: string | null;
		title?: string | null;
		trackingCode?: string | null;
		type?: ApiCoreDtoDatapointsDatapointType | null;
		typeTL?: ApiCoreDtoDatapointsTrackingLinkSpecifics;
		typeTP?: ApiCoreDtoDatapointsTrackingPixelSpecifics;
		writePermited?: boolean | null;
	}
	export interface ApiCoreDtoDatapointsDatapointFormProperties {

		/** (A date in "YmdHis" format) */
		creationDate: FormControl<string | null | undefined>,
		encodeIp: FormControl<boolean | null | undefined>,
		fifthConversionId: FormControl<number | null | undefined>,
		fifthConversionName: FormControl<string | null | undefined>,
		firstConversionId: FormControl<number | null | undefined>,
		firstConversionName: FormControl<string | null | undefined>,
		fourthConversionId: FormControl<number | null | undefined>,
		fourthConversionName: FormControl<string | null | undefined>,
		groupId: FormControl<number | null | undefined>,
		groupName: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,
		isSecured: FormControl<boolean | null | undefined>,
		lightTracking: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		preferred: FormControl<boolean | null | undefined>,
		redirectOnly: FormControl<boolean | null | undefined>,
		secondConversionId: FormControl<number | null | undefined>,
		secondConversionName: FormControl<string | null | undefined>,
		status: FormControl<ApiCoreDtoClickStreamHitDatapointInfoStatus | null | undefined>,
		thirdConversionId: FormControl<number | null | undefined>,
		thirdConversionName: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		trackingCode: FormControl<string | null | undefined>,
		type: FormControl<ApiCoreDtoDatapointsDatapointType | null | undefined>,
		writePermited: FormControl<boolean | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsDatapointFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsDatapointFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			encodeIp: new FormControl<boolean | null | undefined>(undefined),
			fifthConversionId: new FormControl<number | null | undefined>(undefined),
			fifthConversionName: new FormControl<string | null | undefined>(undefined),
			firstConversionId: new FormControl<number | null | undefined>(undefined),
			firstConversionName: new FormControl<string | null | undefined>(undefined),
			fourthConversionId: new FormControl<number | null | undefined>(undefined),
			fourthConversionName: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<number | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			isSecured: new FormControl<boolean | null | undefined>(undefined),
			lightTracking: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			preferred: new FormControl<boolean | null | undefined>(undefined),
			redirectOnly: new FormControl<boolean | null | undefined>(undefined),
			secondConversionId: new FormControl<number | null | undefined>(undefined),
			secondConversionName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApiCoreDtoClickStreamHitDatapointInfoStatus | null | undefined>(undefined),
			thirdConversionId: new FormControl<number | null | undefined>(undefined),
			thirdConversionName: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			trackingCode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiCoreDtoDatapointsDatapointType | null | undefined>(undefined),
			writePermited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ApiCoreDtoDatapointsDatapointType { TrackingLink = 0, TrackingPixel = 1 }

	export interface ApiCoreDtoDatapointsTrackingLinkSpecifics {
		appendQuery?: boolean | null;
		browserDestinationItem?: ApiCoreDtoDatapointsBrowserBaseDestinationItem;
		destinationMode?: ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationMode | null;
		domainId?: number | null;
		encodeUrl?: boolean | null;
		expirationClicks?: number | null;

		/** (A date in "YmdHis" format) */
		expirationDate?: string | null;
		firstUrl?: string | null;
		goDomainId?: number | null;
		hideUrl?: boolean | null;
		hideUrlTitle?: string | null;
		isABTest?: boolean | null;
		password?: string | null;
		pauseAfterClicksExpiration?: boolean | null;
		pauseAfterDateExpiration?: boolean | null;
		randomDestinationItems?: Array<ApiCoreDtoDatapointsMultipleDestinationItem>;
		redirectType?: ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectType | null;
		referrerClean?: ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerClean | null;
		scripts?: Array<ApiCoreDtoDatapointsDatapointRetargetingInfo>;
		sequentialDestinationItems?: Array<ApiCoreDtoDatapointsMultipleDestinationItem>;
		spilloverDestinationItems?: Array<ApiCoreDtoDatapointsMultipleDestinationItem>;
		uniqueDestinationItem?: ApiCoreDtoDatapointsUniqueDestinationItem;
		url?: string | null;
		urlAfterClicksExpiration?: string | null;
		urlAfterDateExpiration?: string | null;
		urlsByLanguage?: Array<ApiCoreDtoDatapointsUrlByLanguageItem>;
		urlsByNation?: Array<ApiCoreDtoDatapointsUrlByNationItem>;
		weightedDestinationItems?: Array<ApiCoreDtoDatapointsWeightedDestinationItem>;
	}
	export interface ApiCoreDtoDatapointsTrackingLinkSpecificsFormProperties {
		appendQuery: FormControl<boolean | null | undefined>,
		destinationMode: FormControl<ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationMode | null | undefined>,
		domainId: FormControl<number | null | undefined>,
		encodeUrl: FormControl<boolean | null | undefined>,
		expirationClicks: FormControl<number | null | undefined>,

		/** (A date in "YmdHis" format) */
		expirationDate: FormControl<string | null | undefined>,
		firstUrl: FormControl<string | null | undefined>,
		goDomainId: FormControl<number | null | undefined>,
		hideUrl: FormControl<boolean | null | undefined>,
		hideUrlTitle: FormControl<string | null | undefined>,
		isABTest: FormControl<boolean | null | undefined>,
		password: FormControl<string | null | undefined>,
		pauseAfterClicksExpiration: FormControl<boolean | null | undefined>,
		pauseAfterDateExpiration: FormControl<boolean | null | undefined>,
		redirectType: FormControl<ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectType | null | undefined>,
		referrerClean: FormControl<ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerClean | null | undefined>,
		url: FormControl<string | null | undefined>,
		urlAfterClicksExpiration: FormControl<string | null | undefined>,
		urlAfterDateExpiration: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsTrackingLinkSpecificsFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsTrackingLinkSpecificsFormProperties>({
			appendQuery: new FormControl<boolean | null | undefined>(undefined),
			destinationMode: new FormControl<ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationMode | null | undefined>(undefined),
			domainId: new FormControl<number | null | undefined>(undefined),
			encodeUrl: new FormControl<boolean | null | undefined>(undefined),
			expirationClicks: new FormControl<number | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			firstUrl: new FormControl<string | null | undefined>(undefined),
			goDomainId: new FormControl<number | null | undefined>(undefined),
			hideUrl: new FormControl<boolean | null | undefined>(undefined),
			hideUrlTitle: new FormControl<string | null | undefined>(undefined),
			isABTest: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pauseAfterClicksExpiration: new FormControl<boolean | null | undefined>(undefined),
			pauseAfterDateExpiration: new FormControl<boolean | null | undefined>(undefined),
			redirectType: new FormControl<ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectType | null | undefined>(undefined),
			referrerClean: new FormControl<ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerClean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlAfterClicksExpiration: new FormControl<string | null | undefined>(undefined),
			urlAfterDateExpiration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationMode { Simple = 0, RandomDestination = 1, DestinationByLanguage = 2, SpilloverDestination = 3, DynamicUrl = 4, BrowserDestination = 5, DestinationByNation = 6, UniqueDestination = 7, SequentialDestination = 8, WeightedDestination = 9 }

	export interface ApiCoreDtoDatapointsMultipleDestinationItem {
		url?: string | null;
	}
	export interface ApiCoreDtoDatapointsMultipleDestinationItemFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsMultipleDestinationItemFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsMultipleDestinationItemFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectType { PermanentRedirect = 0, TemporaryRedirect = 1 }

	export enum ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerClean { None = 0, Clean = 1, Myself = 2 }

	export interface ApiCoreDtoDatapointsDatapointRetargetingInfo {
		id?: number | null;
		name?: string | null;
	}
	export interface ApiCoreDtoDatapointsDatapointRetargetingInfoFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsDatapointRetargetingInfoFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsDatapointRetargetingInfoFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoDatapointsUniqueDestinationItem {
		firstDestinationUrl?: string | null;
	}
	export interface ApiCoreDtoDatapointsUniqueDestinationItemFormProperties {
		firstDestinationUrl: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsUniqueDestinationItemFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsUniqueDestinationItemFormProperties>({
			firstDestinationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoDatapointsUrlByLanguageItem {
		languageCode?: string | null;
		url?: string | null;
	}
	export interface ApiCoreDtoDatapointsUrlByLanguageItemFormProperties {
		languageCode: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsUrlByLanguageItemFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsUrlByLanguageItemFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoDatapointsUrlByNationItem {
		nation?: string | null;
		url?: string | null;
	}
	export interface ApiCoreDtoDatapointsUrlByNationItemFormProperties {
		nation: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsUrlByNationItemFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsUrlByNationItemFormProperties>({
			nation: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoDatapointsWeightedDestinationItem {
		url?: string | null;
		weight?: number | null;
	}
	export interface ApiCoreDtoDatapointsWeightedDestinationItemFormProperties {
		url: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsWeightedDestinationItemFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsWeightedDestinationItemFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoDatapointsTrackingPixelSpecifics {
		parameterNote?: string | null;
	}
	export interface ApiCoreDtoDatapointsTrackingPixelSpecificsFormProperties {
		parameterNote: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoDatapointsTrackingPixelSpecificsFormGroup() {
		return new FormGroup<ApiCoreDtoDatapointsTrackingPixelSpecificsFormProperties>({
			parameterNote: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoDomainsDomain {
		custom404?: string | null;
		customHomepage?: string | null;
		id?: number | null;
		name?: string | null;
		type?: ApiCoreDtoDomainsDomainType | null;
	}
	export interface ApiCoreDtoDomainsDomainFormProperties {
		custom404: FormControl<string | null | undefined>,
		customHomepage: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<ApiCoreDtoDomainsDomainType | null | undefined>,
	}
	export function CreateApiCoreDtoDomainsDomainFormGroup() {
		return new FormGroup<ApiCoreDtoDomainsDomainFormProperties>({
			custom404: new FormControl<string | null | undefined>(undefined),
			customHomepage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiCoreDtoDomainsDomainType | null | undefined>(undefined),
		});

	}

	export enum ApiCoreDtoDomainsDomainType { System = 0, Go = 1, Dedicated = 2, Personal = 3 }

	export interface ApiCoreDtoEntityUriLong {
		id?: number | null;
		uri?: string | null;
	}
	export interface ApiCoreDtoEntityUriLongFormProperties {
		id: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoEntityUriLongFormGroup() {
		return new FormGroup<ApiCoreDtoEntityUriLongFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoGroupsGroup {

		/** (A date in "YmdHis" format) */
		creationDate?: string | null;
		deleted?: boolean | null;
		id?: number | null;
		isPublic?: boolean | null;
		name?: string | null;
		notes?: string | null;
		preferred?: boolean | null;
		redirectOnly?: boolean | null;
		tags?: Array<ApiCoreDtoTagsTag>;
		writePermited?: boolean | null;
	}
	export interface ApiCoreDtoGroupsGroupFormProperties {

		/** (A date in "YmdHis" format) */
		creationDate: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		preferred: FormControl<boolean | null | undefined>,
		redirectOnly: FormControl<boolean | null | undefined>,
		writePermited: FormControl<boolean | null | undefined>,
	}
	export function CreateApiCoreDtoGroupsGroupFormGroup() {
		return new FormGroup<ApiCoreDtoGroupsGroupFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			preferred: new FormControl<boolean | null | undefined>(undefined),
			redirectOnly: new FormControl<boolean | null | undefined>(undefined),
			writePermited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoRetargetingRetargetingScript {
		id?: number | null;
		name?: string | null;
		script?: string | null;
	}
	export interface ApiCoreDtoRetargetingRetargetingScriptFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoRetargetingRetargetingScriptFormGroup() {
		return new FormGroup<ApiCoreDtoRetargetingRetargetingScriptFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoTopsTop {

		/** (A date in "YmdHis" format) */
		createdAt?: string | null;
		data?: Array<ApiCoreDtoTopsTopItem>;
		key?: string | null;
	}
	export interface ApiCoreDtoTopsTopFormProperties {

		/** (A date in "YmdHis" format) */
		createdAt: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreDtoTopsTopFormGroup() {
		return new FormGroup<ApiCoreDtoTopsTopFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreDtoTopsTopItem {
		entityData?: SystemObject;
		id?: string | null;

		/** (A date in "YmdHis" format) */
		lastHitDate?: string | null;
		spiderClicks?: number | null;
		spiderHits?: number | null;
		spiderViews?: number | null;
		totalClicks?: number | null;
		totalCommissionsCost?: number | null;
		totalConversions?: number | null;
		totalConversionsCost?: number | null;
		totalConversionsValue?: number | null;
		totalHits?: number | null;
		totalViews?: number | null;
		uniqueClicks?: number | null;
		uniqueHits?: number | null;
		uniqueViews?: number | null;
	}
	export interface ApiCoreDtoTopsTopItemFormProperties {
		id: FormControl<string | null | undefined>,

		/** (A date in "YmdHis" format) */
		lastHitDate: FormControl<string | null | undefined>,
		spiderClicks: FormControl<number | null | undefined>,
		spiderHits: FormControl<number | null | undefined>,
		spiderViews: FormControl<number | null | undefined>,
		totalClicks: FormControl<number | null | undefined>,
		totalCommissionsCost: FormControl<number | null | undefined>,
		totalConversions: FormControl<number | null | undefined>,
		totalConversionsCost: FormControl<number | null | undefined>,
		totalConversionsValue: FormControl<number | null | undefined>,
		totalHits: FormControl<number | null | undefined>,
		totalViews: FormControl<number | null | undefined>,
		uniqueClicks: FormControl<number | null | undefined>,
		uniqueHits: FormControl<number | null | undefined>,
		uniqueViews: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreDtoTopsTopItemFormGroup() {
		return new FormGroup<ApiCoreDtoTopsTopItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lastHitDate: new FormControl<string | null | undefined>(undefined),
			spiderClicks: new FormControl<number | null | undefined>(undefined),
			spiderHits: new FormControl<number | null | undefined>(undefined),
			spiderViews: new FormControl<number | null | undefined>(undefined),
			totalClicks: new FormControl<number | null | undefined>(undefined),
			totalCommissionsCost: new FormControl<number | null | undefined>(undefined),
			totalConversions: new FormControl<number | null | undefined>(undefined),
			totalConversionsCost: new FormControl<number | null | undefined>(undefined),
			totalConversionsValue: new FormControl<number | null | undefined>(undefined),
			totalHits: new FormControl<number | null | undefined>(undefined),
			totalViews: new FormControl<number | null | undefined>(undefined),
			uniqueClicks: new FormControl<number | null | undefined>(undefined),
			uniqueHits: new FormControl<number | null | undefined>(undefined),
			uniqueViews: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreRequestsConversionPatchBody {
		Action?: string | null;
		Id?: number | null;
		ReplaceId?: number | null;
	}
	export interface ApiCoreRequestsConversionPatchBodyFormProperties {
		Action: FormControl<string | null | undefined>,
		Id: FormControl<number | null | undefined>,
		ReplaceId: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreRequestsConversionPatchBodyFormGroup() {
		return new FormGroup<ApiCoreRequestsConversionPatchBodyFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			ReplaceId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreRequestsDatapointsBatch {
		List?: Array<ApiCoreDtoDatapointsDatapoint>;
	}
	export interface ApiCoreRequestsDatapointsBatchFormProperties {
	}
	export function CreateApiCoreRequestsDatapointsBatchFormGroup() {
		return new FormGroup<ApiCoreRequestsDatapointsBatchFormProperties>({
		});

	}

	export interface ApiCoreRequestsDeleteBatch {
		Entities?: Array<ApiCoreDtoEntityUriLong>;
	}
	export interface ApiCoreRequestsDeleteBatchFormProperties {
	}
	export function CreateApiCoreRequestsDeleteBatchFormGroup() {
		return new FormGroup<ApiCoreRequestsDeleteBatchFormProperties>({
		});

	}

	export interface ApiCoreRequestsGenericTextPatch {
		Text?: string | null;
	}
	export interface ApiCoreRequestsGenericTextPatchFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreRequestsGenericTextPatchFormGroup() {
		return new FormGroup<ApiCoreRequestsGenericTextPatchFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreRequestsPatchBody {
		Action?: string | null;
		Id?: number | null;
	}
	export interface ApiCoreRequestsPatchBodyFormProperties {
		Action: FormControl<string | null | undefined>,
		Id: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreRequestsPatchBodyFormGroup() {
		return new FormGroup<ApiCoreRequestsPatchBodyFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreRequestsPatchBodyBatch {
		PatchRequests?: Array<ApiCoreRequestsPatchBody>;
	}
	export interface ApiCoreRequestsPatchBodyBatchFormProperties {
	}
	export function CreateApiCoreRequestsPatchBodyBatchFormGroup() {
		return new FormGroup<ApiCoreRequestsPatchBodyBatchFormProperties>({
		});

	}

	export interface ApiCoreRequestsPermissionPatchRequest {
		Action?: string | null;
		Id?: number | null;
		Verb?: string | null;
	}
	export interface ApiCoreRequestsPermissionPatchRequestFormProperties {
		Action: FormControl<string | null | undefined>,
		Id: FormControl<number | null | undefined>,
		Verb: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreRequestsPermissionPatchRequestFormGroup() {
		return new FormGroup<ApiCoreRequestsPermissionPatchRequestFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiCoreResponsesCountResponce {
		count?: number | null;
	}
	export interface ApiCoreResponsesCountResponceFormProperties {
		count: FormControl<number | null | undefined>,
	}
	export function CreateApiCoreResponsesCountResponceFormGroup() {
		return new FormGroup<ApiCoreResponsesCountResponceFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingDomainWhitelistEntry_ {
		entities?: Array<ApiCoreDtoAccountingDomainWhitelistEntry>;
	}
	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingDomainWhitelistEntry_FormProperties {
	}
	export function CreateApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingDomainWhitelistEntry_FormGroup() {
		return new FormGroup<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingDomainWhitelistEntry_FormProperties>({
		});

	}

	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingIpBlacklistEntry_ {
		entities?: Array<ApiCoreDtoAccountingIpBlacklistEntry>;
	}
	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingIpBlacklistEntry_FormProperties {
	}
	export function CreateApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingIpBlacklistEntry_FormGroup() {
		return new FormGroup<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingIpBlacklistEntry_FormProperties>({
		});

	}

	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_ {
		entities?: Array<ApiCoreDtoAggregatedAggregatedResult>;
	}
	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_FormProperties {
	}
	export function CreateApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_FormGroup() {
		return new FormGroup<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_FormProperties>({
		});

	}

	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoClickStreamHit_ {
		entities?: Array<ApiCoreDtoClickStreamHit>;
	}
	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoClickStreamHit_FormProperties {
	}
	export function CreateApiCoreResponsesEntitiesResponse_ApiCoreDtoClickStreamHit_FormGroup() {
		return new FormGroup<ApiCoreResponsesEntitiesResponse_ApiCoreDtoClickStreamHit_FormProperties>({
		});

	}

	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoGrantsGrant_ {
		entities?: Array<ApiCoreDtoGrantsGrant>;
	}
	export interface ApiCoreResponsesEntitiesResponse_ApiCoreDtoGrantsGrant_FormProperties {
	}
	export function CreateApiCoreResponsesEntitiesResponse_ApiCoreDtoGrantsGrant_FormGroup() {
		return new FormGroup<ApiCoreResponsesEntitiesResponse_ApiCoreDtoGrantsGrant_FormProperties>({
		});

	}

	export interface ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_ {
		entities?: Array<ApiCoreResponsesEntityUri_SystemInt64_>;
	}
	export interface ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_FormProperties {
	}
	export function CreateApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_FormGroup() {
		return new FormGroup<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_FormProperties>({
		});

	}

	export interface ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_ {
		entityData?: ApiCoreDtoDatapointsDatapoint;
		errors?: Array<ClickMeterInfrastructureValidationValidationFailure>;
		result?: ApiCoreResponsesEntityUri_SystemInt64_;
		status?: string | null;
	}
	export interface ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_FormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_FormGroup() {
		return new FormGroup<ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_FormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClickMeterInfrastructureValidationValidationFailure {
		code?: SystemObject;
		errorMessage?: string | null;
		errorValue?: SystemObject;
		property?: string | null;
	}
	export interface ClickMeterInfrastructureValidationValidationFailureFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		property: FormControl<string | null | undefined>,
	}
	export function CreateClickMeterInfrastructureValidationValidationFailureFormGroup() {
		return new FormGroup<ClickMeterInfrastructureValidationValidationFailureFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve current account data
		 * Get account
		 * @return {ApiCoreDtoAccountingUser} 
		 */
		Account_Get(): Observable<ApiCoreDtoAccountingUser> {
			return this.http.get<ApiCoreDtoAccountingUser>(this.baseUri + 'account', {});
		}

		/**
		 * Update current account data
		 * Post account
		 * @return {ApiCoreDtoAccountingUser} 
		 */
		Account_Post(requestBody: ApiCoreDtoAccountingUser): Observable<ApiCoreDtoAccountingUser> {
			return this.http.post<ApiCoreDtoAccountingUser>(this.baseUri + 'account', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve list of a domains allowed to redirect in DDU mode
		 * Get account/domainwhitelist
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingDomainWhitelistEntry_} 
		 */
		Account_GetDomainWhitelist(offset: number | null | undefined, limit: number | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingDomainWhitelistEntry_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingDomainWhitelistEntry_>(this.baseUri + 'account/domainwhitelist?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Create an domain entry
		 * Post account/domainwhitelist
		 * @param {ApiCoreDtoAccountingDomainWhitelistEntry} requestBody The entry to add
		 * @return {ApiCoreDtoAccountingDomainWhitelistEntry} 
		 */
		Account_PutDomainWhitelist(requestBody: ApiCoreDtoAccountingDomainWhitelistEntry): Observable<ApiCoreDtoAccountingDomainWhitelistEntry> {
			return this.http.post<ApiCoreDtoAccountingDomainWhitelistEntry>(this.baseUri + 'account/domainwhitelist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an domain entry
		 * Delete account/domainwhitelist/{whitelistId}
		 * @param {string} whitelistId The id of the domain to delete
		 * @return {ApiCoreDtoAccountingDomainWhitelistEntry} 
		 */
		Account_DeleteDomainWhitelist(whitelistId: string): Observable<ApiCoreDtoAccountingDomainWhitelistEntry> {
			return this.http.delete<ApiCoreDtoAccountingDomainWhitelistEntry>(this.baseUri + 'account/domainwhitelist/' + (whitelistId == null ? '' : encodeURIComponent(whitelistId)), {});
		}

		/**
		 * Retrieve list of a guest
		 * Get account/guests
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {string} textSearch Filter fields by this pattern
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Account_GetGuests(offset: number | null | undefined, limit: number | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, textSearch: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'account/guests?offset=' + offset + '&limit=' + limit + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)), {});
		}

		/**
		 * Create a guest
		 * Post account/guests
		 * @param {ApiCoreDtoAccountingGuest} requestBody Guest object to create
		 * @return {ApiCoreDtoAccountingGuest} 
		 */
		Account_PutGuest(requestBody: ApiCoreDtoAccountingGuest): Observable<ApiCoreDtoAccountingGuest> {
			return this.http.post<ApiCoreDtoAccountingGuest>(this.baseUri + 'account/guests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve count of guests
		 * Get account/guests/count
		 * @param {string} textSearch Filter fields by this pattern
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Account_GetGuestsCount(textSearch: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'account/guests/count?textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)), {});
		}

		/**
		 * Delete a guest
		 * Delete account/guests/{guestId}
		 * @param {number} guestId Id of the guest
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Account_DeleteGuest(guestId: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'account/guests/' + guestId, {});
		}

		/**
		 * Retrieve a guest
		 * Get account/guests/{guestId}
		 * @param {number} guestId Id of the guest
		 * @return {ApiCoreDtoAccountingGuest} 
		 */
		Account_GetGuest(guestId: number): Observable<ApiCoreDtoAccountingGuest> {
			return this.http.get<ApiCoreDtoAccountingGuest>(this.baseUri + 'account/guests/' + guestId, {});
		}

		/**
		 * Update a guest
		 * Post account/guests/{guestId}
		 * @param {number} guestId Id of the guest
		 * @param {ApiCoreDtoAccountingGuest} requestBody Guest object with field updated
		 * @return {ApiCoreDtoAccountingGuest} 
		 */
		Account_PostGuest(guestId: number, requestBody: ApiCoreDtoAccountingGuest): Observable<ApiCoreDtoAccountingGuest> {
			return this.http.post<ApiCoreDtoAccountingGuest>(this.baseUri + 'account/guests/' + guestId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve permissions for a guest
		 * Get account/guests/{guestId}/permissions
		 * @param {number} guestId Id of the guest
		 * @param {Account_GetPermissionsEntityType} entityType Can be "datapoint" or "group"
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {Account_GetPermissionsType} type Can be "w" or "r"
		 * @param {number} entityId Optional id of the datapoint/group entity to filter by
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoGrantsGrant_} 
		 */
		Account_GetPermissions(guestId: number, entityType: Account_GetPermissionsEntityType | null | undefined, offset: number | null | undefined, limit: number | null | undefined, type: Account_GetPermissionsType | null | undefined, entityId: number | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoGrantsGrant_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoGrantsGrant_>(this.baseUri + 'account/guests/' + guestId + '/permissions?entityType=' + entityType + '&offset=' + offset + '&limit=' + limit + '&type=' + type + '&entityId=' + entityId, {});
		}

		/**
		 * Retrieve count of the permissions for a guest
		 * Get account/guests/{guestId}/permissions/count
		 * @param {number} guestId Id of the guest
		 * @param {Account_GetPermissionsEntityType} entityType Can be "datapoint" or "group"
		 * @param {Account_GetPermissionsType} type Can be "w" or "r"
		 * @param {number} entityId Optional id of the datapoint/group entity to filter by
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Account_GetPermissionsCount(guestId: number, entityType: Account_GetPermissionsEntityType | null | undefined, type: Account_GetPermissionsType | null | undefined, entityId: number | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'account/guests/' + guestId + '/permissions/count?entityType=' + entityType + '&type=' + type + '&entityId=' + entityId, {});
		}

		/**
		 * Change the permission on a shared object
		 * Post account/guests/{guestId}/{type}/permissions/patch
		 * @param {number} guestId Id of the guest
		 * @param {Account_GetPermissionsEntityType} type Can be "datapoint" or "group"
		 * @param {ApiCoreRequestsPermissionPatchRequest} requestBody The patch permission request
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		AccountPostByGuestIdAndType(guestId: number, type: Account_GetPermissionsEntityType, requestBody: ApiCoreRequestsPermissionPatchRequest): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'account/guests/' + guestId + '/' + type + '/permissions/patch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change the permission on a shared object
		 * Put account/guests/{guestId}/{type}/permissions/patch
		 * @param {number} guestId Id of the guest
		 * @param {Account_GetPermissionsEntityType} type Can be "datapoint" or "group"
		 * @param {ApiCoreRequestsPermissionPatchRequest} requestBody The patch permission request
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Account_PatchPermissions(guestId: number, type: Account_GetPermissionsEntityType, requestBody: ApiCoreRequestsPermissionPatchRequest): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'account/guests/' + guestId + '/' + type + '/permissions/patch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve list of a ip to exclude from event tracking
		 * Get account/ipblacklist
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingIpBlacklistEntry_} 
		 */
		Account_GetIpBlacklist(offset: number | null | undefined, limit: number | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingIpBlacklistEntry_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAccountingIpBlacklistEntry_>(this.baseUri + 'account/ipblacklist?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Create an ip blacklist entry
		 * Post account/ipblacklist
		 * @param {ApiCoreDtoAccountingIpBlacklistEntry} requestBody The entry to add
		 * @return {ApiCoreDtoAccountingIpBlacklistEntry} 
		 */
		Account_PutIpBlacklist(requestBody: ApiCoreDtoAccountingIpBlacklistEntry): Observable<ApiCoreDtoAccountingIpBlacklistEntry> {
			return this.http.post<ApiCoreDtoAccountingIpBlacklistEntry>(this.baseUri + 'account/ipblacklist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an ip blacklist entry
		 * Delete account/ipblacklist/{blacklistId}
		 * @param {string} blacklistId The id of the ip to delete
		 * @return {ApiCoreDtoAccountingIpBlacklistEntry} 
		 */
		Account_DeleteIpBlacklist(blacklistId: string): Observable<ApiCoreDtoAccountingIpBlacklistEntry> {
			return this.http.delete<ApiCoreDtoAccountingIpBlacklistEntry>(this.baseUri + 'account/ipblacklist/' + (blacklistId == null ? '' : encodeURIComponent(blacklistId)), {});
		}

		/**
		 * Retrieve current account plan
		 * Get account/plan
		 * @return {ApiCoreDtoAccountingPlan} 
		 */
		Account_GetPlan(): Observable<ApiCoreDtoAccountingPlan> {
			return this.http.get<ApiCoreDtoAccountingPlan>(this.baseUri + 'account/plan', {});
		}

		/**
		 * Retrieve statistics about this customer for a timeframe
		 * Get aggregated
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {boolean} hourly If using "yesterday" or "today" timeframe you can ask for the hourly detail
		 * @return {ApiCoreDtoAggregatedAggregatedResult} 
		 */
		Aggregated_GetStatisticsSingle(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, hourly: boolean | null | undefined, onlyFavorites: string | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedResult>(this.baseUri + 'aggregated?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&hourly=' + hourly + '&onlyFavorites=' + (onlyFavorites == null ? '' : encodeURIComponent(onlyFavorites)), {});
		}

		/**
		 * Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
		 * Get aggregated/list
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetStatisticsListGroupBy} groupBy The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_} 
		 */
		Aggregated_GetStatisticsList(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, groupBy: Aggregated_GetStatisticsListGroupBy | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_>(this.baseUri + 'aggregated/list?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&groupBy=' + groupBy, {});
		}

		/**
		 * Retrieve statistics about a subset of conversions for a timeframe with conversions data
		 * Get aggregated/summary/conversions
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of conversion ("deleted"/"active")
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {string} textSearch Filter fields by this pattern
		 * @return {ApiCoreDtoAggregatedAggregatedSummaryResult} 
		 */
		Aggregated_GetConversionsSummary(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, offset: number | null | undefined, limit: number | null | undefined, textSearch: string | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedSummaryResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedSummaryResult>(this.baseUri + 'aggregated/summary/conversions?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&status=' + status + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&offset=' + offset + '&limit=' + limit + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)), {});
		}

		/**
		 * Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
		 * Get aggregated/summary/datapoints
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of datapoint ("tl"/"tp")
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of datapoint ("deleted"/"active"/"paused"/"spam")
		 * @param {string} tag A comma separated list of tags you want to filter with.
		 * @param {boolean} favourite Is the datapoint marked as favourite
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {number} groupId Filter by this group id
		 * @param {string} textSearch Filter fields by this pattern
		 * @return {ApiCoreDtoAggregatedAggregatedSummaryResult} 
		 */
		Aggregated_GetDatapointsSummary(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, type: Aggregated_GetDatapointsSummaryType, fromDay: string | null | undefined, toDay: string | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, offset: number | null | undefined, limit: number | null | undefined, groupId: number | null | undefined, textSearch: string | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedSummaryResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedSummaryResult>(this.baseUri + 'aggregated/summary/datapoints?timeFrame=' + timeFrame + '&type=' + type + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&status=' + status + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&offset=' + offset + '&limit=' + limit + '&groupId=' + groupId + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)), {});
		}

		/**
		 * Retrieve statistics about a subset of groups for a timeframe with groups data
		 * Get aggregated/summary/groups
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of group ("deleted"/"active")
		 * @param {string} tag A comma separated list of tags you want to filter with.
		 * @param {boolean} favourite Is the group marked as favourite
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {string} textSearch Filter fields by this pattern
		 * @return {ApiCoreDtoAggregatedAggregatedSummaryResult} 
		 */
		Aggregated_GetGroupsSummary(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, offset: number | null | undefined, limit: number | null | undefined, textSearch: string | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedSummaryResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedSummaryResult>(this.baseUri + 'aggregated/summary/groups?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&status=' + status + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&offset=' + offset + '&limit=' + limit + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)), {});
		}

		/**
		 * Retrieve the latest list of events of this account. Limited to last 100.
		 * Get clickstream
		 * @param {number} group Filter by this group id (mutually exclusive with "datapoint" and "conversion")
		 * @param {number} datapoint Filter by this datapoint id (mutually exclusive with "group" and "conversion")
		 * @param {number} conversion Filter by this conversion id (mutually exclusive with "datapoint" and "group")
		 * @param {number} pageSize Limit results to this number
		 * @param {ClickStream_GetFilter} filter Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoClickStreamHit_} 
		 */
		ClickStream_Get(group: number | null | undefined, datapoint: number | null | undefined, conversion: number | null | undefined, pageSize: number | null | undefined, filter: ClickStream_GetFilter | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoClickStreamHit_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoClickStreamHit_>(this.baseUri + 'clickstream?group=' + group + '&datapoint=' + datapoint + '&conversion=' + conversion + '&pageSize=' + pageSize + '&filter=' + filter, {});
		}

		/**
		 * Retrieve a list of conversions
		 * Get conversions
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of conversion ("deleted"/"active")
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude conversions created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude conversions created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Conversions_Get(offset: number | null | undefined, limit: number | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions?offset=' + offset + '&limit=' + limit + '&status=' + status + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Create a conversion
		 * Post conversions
		 * @param {ApiCoreDtoConversionsConversion} requestBody The body of the conversion
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Conversions_Put(requestBody: ApiCoreDtoConversionsConversion): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
		 * Get conversions/aggregated/list
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of conversion ("deleted"/"active")
		 * @param {Aggregated_GetStatisticsListGroupBy} groupBy The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_} 
		 */
		Conversions_GetStatisticsAllList(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, groupBy: Aggregated_GetStatisticsListGroupBy | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_>(this.baseUri + 'conversions/aggregated/list?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&status=' + status + '&groupBy=' + groupBy, {});
		}

		/**
		 * Retrieve a count of conversions
		 * Get conversions/count
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of conversion ("deleted"/"active")
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude conversions created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude conversions created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Conversions_Count(status: Aggregated_GetConversionsSummaryStatus | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'conversions/count?status=' + status + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Delete conversion specified by id
		 * Delete conversions/{conversionId}
		 * @param {number} conversionId Id of the conversion
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Conversions_Delete(conversionId: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions/' + conversionId, {});
		}

		/**
		 * Retrieve conversion specified by id
		 * Get conversions/{conversionId}
		 * @param {number} conversionId Id of the conversion
		 * @return {ApiCoreDtoConversionsConversion} 
		 */
		ConversionsGetByConversionId(conversionId: number): Observable<ApiCoreDtoConversionsConversion> {
			return this.http.get<ApiCoreDtoConversionsConversion>(this.baseUri + 'conversions/' + conversionId, {});
		}

		/**
		 * Update conversion specified by id
		 * Post conversions/{conversionId}
		 * @param {number} conversionId Id of the conversion
		 * @param {ApiCoreDtoConversionsConversion} requestBody Updated body of the conversion
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Conversions_Post(conversionId: number, requestBody: ApiCoreDtoConversionsConversion): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions/' + conversionId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve statistics about this conversion for a timeframe
		 * Get conversions/{conversionId}/aggregated
		 * @param {number} conversionId Id of the conversion
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {string} tag Filter by this tag name
		 * @param {boolean} favourite Is the datapoint marked as favourite
		 * @param {boolean} hourly If using "yesterday" or "today" timeframe you can ask for the hourly detail
		 * @return {ApiCoreDtoAggregatedAggregatedResult} 
		 */
		Conversions_GetStatisticsSingle(conversionId: number, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined, hourly: boolean | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedResult>(this.baseUri + 'conversions/' + conversionId + '/aggregated?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite + '&hourly=' + hourly, {});
		}

		/**
		 * Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
		 * Get conversions/{conversionId}/aggregated/list
		 * @param {number} conversionId Id of the conversion
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetStatisticsListGroupBy} groupBy The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_} 
		 */
		Conversions_GetStatisticsList(conversionId: number, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, groupBy: Aggregated_GetStatisticsListGroupBy | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_>(this.baseUri + 'conversions/' + conversionId + '/aggregated/list?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&groupBy=' + groupBy, {});
		}

		/**
		 * Retrieve a list of datapoints connected to this conversion
		 * Get conversions/{conversionId}/datapoints
		 * @param {number} conversionId Id of the conversion
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of datapoint ("tl"/"tp")
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of datapoint ("deleted"/"active"/"paused"/"spam")
		 * @param {string} tags Filter by this tag name
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Conversions_GetDatapoints(conversionId: number, offset: number | null | undefined, limit: number | null | undefined, type: Aggregated_GetDatapointsSummaryType | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions/' + conversionId + '/datapoints?offset=' + offset + '&limit=' + limit + '&type=' + type + '&status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Modify the association between a conversion and multiple datapoints
		 * Put conversions/{conversionId}/datapoints/batch/patch
		 * @param {number} conversionId Id of the conversion
		 * @param {ApiCoreRequestsPatchBodyBatch} requestBody Patch requests
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		ConversionsPutByConversionId(conversionId: number, requestBody: ApiCoreRequestsPatchBodyBatch): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions/' + conversionId + '/datapoints/batch/patch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a count of datapoints connected to this conversion
		 * Get conversions/{conversionId}/datapoints/count
		 * @param {number} conversionId Id of the conversion
		 * @param {string} type Type of datapoint ("tl"/"tp")
		 * @param {string} status Status of datapoint ("deleted"/"active"/"paused"/"spam")
		 * @param {string} tags Filter by this tag name
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Conversions_GetDatapointsCount(conversionId: number, type: string | null | undefined, status: string | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'conversions/' + conversionId + '/datapoints/count?type=' + (type == null ? '' : encodeURIComponent(type)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Modify the association between a conversion and a datapoint
		 * Put conversions/{conversionId}/datapoints/patch
		 * @param {number} conversionId Id of the conversion
		 * @param {ApiCoreRequestsConversionPatchBody} requestBody Patch request
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Conversions_Patch(conversionId: number, requestBody: ApiCoreRequestsConversionPatchBody): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions/' + conversionId + '/datapoints/patch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the list of events related to this conversion.
		 * Get conversions/{conversionId}/hits
		 * @param {number} conversionId Id of the conversion
		 * @param {Conversions_GetHitsTimeframe} timeframe Timeframe of the request. See list at $timeframeList
		 * @param {number} limit Limit results to this number
		 * @param {string} offset Offset where to start from (it's the lastKey field in the response object)
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Conversions_GetHitsFilter} filter Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
		 * @return {ApiCoreDtoClickStreamHitListPage} 
		 */
		Conversions_GetHits(conversionId: number, timeframe: Conversions_GetHitsTimeframe, limit: number | null | undefined, offset: string | null | undefined, fromDay: string | null | undefined, toDay: string | null | undefined, filter: Conversions_GetHitsFilter | null | undefined): Observable<ApiCoreDtoClickStreamHitListPage> {
			return this.http.get<ApiCoreDtoClickStreamHitListPage>(this.baseUri + 'conversions/' + conversionId + '/hits?timeframe=' + timeframe + '&limit=' + limit + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&filter=' + filter, {});
		}

		/**
		 * Fast patch the "notes" field of a conversion
		 * Put conversions/{conversionId}/notes
		 * @param {number} conversionId Id of the conversion
		 * @param {ApiCoreRequestsGenericTextPatch} requestBody Patch requests
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Conversions_PatchNotes(conversionId: number, requestBody: ApiCoreRequestsGenericTextPatch): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'conversions/' + conversionId + '/notes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of all the datapoints associated to the user
		 * Get datapoints
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of the datapoint ("tp"/"tl")
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {boolean} onlyFavorites Filter fields by favourite status
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		DataPoints_Get(offset: number | null | undefined, limit: number | null | undefined, type: Aggregated_GetDatapointsSummaryType | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, onlyFavorites: boolean | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'datapoints?offset=' + offset + '&limit=' + limit + '&type=' + type + '&status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&onlyFavorites=' + onlyFavorites + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Create a datapoint
		 * Post datapoints
		 * @param {ApiCoreDtoDatapointsDatapoint} requestBody The body of the datapoint
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		DataPoints_Put(requestBody: ApiCoreDtoDatapointsDatapoint): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'datapoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve statistics about this customer for a timeframe by groups
		 * Get datapoints/aggregated
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of datapoint ("tl"/"tp")
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {boolean} hourly If using "yesterday" or "today" timeframe you can ask for the hourly detail
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of datapoint ("deleted"/"active"/"paused"/"spam")
		 * @param {string} tag A comma separated list of tags you want to filter with.
		 * @param {boolean} favourite Is the datapoint is marked as favourite
		 * @return {ApiCoreDtoAggregatedAggregatedResult} 
		 */
		DataPoints_GetStatisticsAggregatedSingle(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, type: Aggregated_GetDatapointsSummaryType | null | undefined, fromDay: string | null | undefined, toDay: string | null | undefined, hourly: boolean | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedResult>(this.baseUri + 'datapoints/aggregated?timeFrame=' + timeFrame + '&type=' + type + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&hourly=' + hourly + '&status=' + status + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite, {});
		}

		/**
		 * Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
		 * Get datapoints/aggregated/list
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of datapoint ("tl"/"tp")
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of datapoint ("deleted"/"active"/"paused"/"spam")
		 * @param {string} tag A comma separated list of tags you want to filter with.
		 * @param {boolean} favourite Is the datapoint is marked as favourite
		 * @param {Aggregated_GetStatisticsListGroupBy} groupBy The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_} 
		 */
		DataPoints_GetStatisticsAllList(type: Aggregated_GetDatapointsSummaryType, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined, groupBy: Aggregated_GetStatisticsListGroupBy | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_>(this.baseUri + 'datapoints/aggregated/list?type=' + type + '&timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&status=' + status + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite + '&groupBy=' + groupBy, {});
		}

		/**
		 * Delete multiple datapoints
		 * Delete datapoints/batch
		 * @return {ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_} 
		 */
		DataPoints_BatchDelete(): Observable<ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_>(this.baseUri + 'datapoints/batch', {});
		}

		/**
		 * Update multiple datapoints
		 * Post datapoints/batch
		 * @param {ApiCoreRequestsDatapointsBatch} requestBody A json containing the datapoints to update.
		 * @return {ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_} 
		 */
		DataPoints_BatchPost(requestBody: ApiCoreRequestsDatapointsBatch): Observable<ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_> {
			return this.http.post<ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_>(this.baseUri + 'datapoints/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create multiple datapoints
		 * Put datapoints/batch
		 * @param {ApiCoreRequestsDatapointsBatch} requestBody A json containing the datapoints to create.
		 * @return {ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_} 
		 */
		DataPoints_BatchPut(requestBody: ApiCoreRequestsDatapointsBatch): Observable<ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_> {
			return this.http.put<ApiCoreResponsesModifyBatchItemResponce_ApiCoreDtoDatapointsDatapoint_SystemInt64_>(this.baseUri + 'datapoints/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Count the datapoints associated to the user
		 * Get datapoints/count
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of the datapoint ("tp"/"tl")
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {boolean} onlyFavorites Filter fields by favourite status
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		DataPoints_Count(type: Aggregated_GetDatapointsSummaryType | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, onlyFavorites: boolean | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'datapoints/count?type=' + type + '&status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&onlyFavorites=' + onlyFavorites + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Delete a datapoint
		 * Delete datapoints/{id}
		 * @param {number} id The id of the datapoint
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		DataPoints_Delete(id: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'datapoints/' + id, {});
		}

		/**
		 * Get a datapoint
		 * Get datapoints/{id}
		 * @param {number} id The id of the datapoint
		 * @return {ApiCoreDtoDatapointsDatapoint} 
		 */
		DataPointsGetById(id: number): Observable<ApiCoreDtoDatapointsDatapoint> {
			return this.http.get<ApiCoreDtoDatapointsDatapoint>(this.baseUri + 'datapoints/' + id, {});
		}

		/**
		 * Update a datapoint
		 * Post datapoints/{id}
		 * @param {number} id The id of the datapoint
		 * @param {ApiCoreDtoDatapointsDatapoint} requestBody The body of the datapoint
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		DataPoints_Post(id: number, requestBody: ApiCoreDtoDatapointsDatapoint): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'datapoints/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve statistics about this datapoint for a timeframe
		 * Get datapoints/{id}/aggregated
		 * @param {number} id Id of the datapoint
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {boolean} hourly If using "yesterday" or "today" timeframe you can ask for the hourly detail
		 * @return {ApiCoreDtoAggregatedAggregatedResult} 
		 */
		DataPoints_GetStatisticsSingle(id: number, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, hourly: boolean | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedResult>(this.baseUri + 'datapoints/' + id + '/aggregated?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&hourly=' + hourly, {});
		}

		/**
		 * Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
		 * Get datapoints/{id}/aggregated/list
		 * @param {number} id Id of the datapoint
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetStatisticsListGroupBy} groupBy The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_} 
		 */
		DataPoints_GetStatisticsList(id: number, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, groupBy: Aggregated_GetStatisticsListGroupBy | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_>(this.baseUri + 'datapoints/' + id + '/aggregated/list?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&groupBy=' + groupBy, {});
		}

		/**
		 * Fast switch the "favourite" field of a datapoint
		 * Put datapoints/{id}/favourite
		 * @param {number} id Id of the datapoint
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		DataPoints_PatchFavourite(id: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'datapoints/' + id + '/favourite', null, {});
		}

		/**
		 * Retrieve the list of events related to this datapoint.
		 * Get datapoints/{id}/hits
		 * @param {number} id Id of the datapoint
		 * @param {Conversions_GetHitsTimeframe} timeframe Timeframe of the request. See list at $timeframeList
		 * @param {number} limit Limit results to this number
		 * @param {string} offset Offset where to start from (it's the lastKey field in the response object)
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Conversions_GetHitsFilter} filter Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
		 * @return {ApiCoreDtoClickStreamHitListPage} 
		 */
		DataPoints_GetHits(id: number, timeframe: Conversions_GetHitsTimeframe, limit: number | null | undefined, offset: string | null | undefined, fromDay: string | null | undefined, toDay: string | null | undefined, filter: Conversions_GetHitsFilter | null | undefined): Observable<ApiCoreDtoClickStreamHitListPage> {
			return this.http.get<ApiCoreDtoClickStreamHitListPage>(this.baseUri + 'datapoints/' + id + '/hits?timeframe=' + timeframe + '&limit=' + limit + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&filter=' + filter, {});
		}

		/**
		 * Fast patch the "notes" field of a datapoint
		 * Put datapoints/{id}/notes
		 * @param {number} id Id of the datapoint
		 * @param {ApiCoreRequestsGenericTextPatch} requestBody Patch requests
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		DataPoints_PatchNotes(id: number, requestBody: ApiCoreRequestsGenericTextPatch): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'datapoints/' + id + '/notes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of domains
		 * Get domains
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {Domains_GetType} type Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
		 * @param {string} name Filter domains with this anmen
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Domains_Get(offset: number | null | undefined, limit: number | null | undefined, type: Domains_GetType | null | undefined, name: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'domains?offset=' + offset + '&limit=' + limit + '&type=' + type + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Create a domain
		 * Post domains
		 * @param {ApiCoreDtoDomainsDomain} requestBody The domain to create
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Domains_Put(requestBody: ApiCoreDtoDomainsDomain): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve count of domains
		 * Get domains/count
		 * @param {Domains_GetType} type Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
		 * @param {string} name Filter domains with this anmen
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Domains_Count(type: Domains_GetType | null | undefined, name: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'domains/count?type=' + type + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Delete a domain
		 * Delete domains/{id}
		 * @param {number} id Id of domain
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Domains_Delete(id: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'domains/' + id, {});
		}

		/**
		 * Get a domain
		 * Get domains/{id}
		 * @param {number} id Id of domain
		 * @return {ApiCoreDtoDomainsDomain} 
		 */
		DomainsGetById(id: number): Observable<ApiCoreDtoDomainsDomain> {
			return this.http.get<ApiCoreDtoDomainsDomain>(this.baseUri + 'domains/' + id, {});
		}

		/**
		 * Update a domain
		 * Post domains/{id}
		 * @param {number} id Id of domain
		 * @param {ApiCoreDtoDomainsDomain} requestBody The domain to update
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Domains_Update(id: number, requestBody: ApiCoreDtoDomainsDomain): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'domains/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of all the groups associated to the user.
		 * Get groups
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of the group
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude groups created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude groups created after this date (YYYYMMDD)
		 * @param {boolean} write Write permission
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_Get(offset: number | null | undefined, limit: number | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined, write: boolean | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups?offset=' + offset + '&limit=' + limit + '&status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)) + '&write=' + write, {});
		}

		/**
		 * Create a group
		 * Post groups
		 * @param {ApiCoreDtoGroupsGroup} requestBody The body of the group
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_Put(requestBody: ApiCoreDtoGroupsGroup): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve statistics about this customer for a timeframe by groups
		 * Get groups/aggregated
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {boolean} hourly If using "yesterday" or "today" timeframe you can ask for the hourly detail
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of group ("deleted"/"active")
		 * @param {string} tag A comma separated list of tags you want to filter with.
		 * @param {boolean} favourite Is the group is marked as favourite
		 * @return {ApiCoreDtoAggregatedAggregatedResult} 
		 */
		Groups_GetStatisticsAggregatedSingle(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, hourly: boolean | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedResult>(this.baseUri + 'groups/aggregated?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&hourly=' + hourly + '&status=' + status + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite, {});
		}

		/**
		 * Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
		 * Get groups/aggregated/list
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {string} status Status of group ("deleted"/"active")
		 * @param {string} tag A comma separated list of tags you want to filter with.
		 * @param {boolean} favourite Is the group is marked as favourite
		 * @param {Aggregated_GetConversionsSummaryStatus} groupBy The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_} 
		 */
		Groups_GetStatisticsAllList(timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, status: string | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined, groupBy: Aggregated_GetConversionsSummaryStatus | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_>(this.baseUri + 'groups/aggregated/list?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite + '&groupBy=' + groupBy, {});
		}

		/**
		 * Count the groups associated to the user.
		 * Get groups/count
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of the datapoint
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude groups created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude groups created after this date (YYYYMMDD)
		 * @param {boolean} write Write permission
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Groups_Count(status: Aggregated_GetConversionsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined, write: boolean | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'groups/count?status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)) + '&write=' + write, {});
		}

		/**
		 * Delete group specified by id
		 * Delete groups/{id}
		 * @param {number} id Id of the group
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_Delete(id: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups/' + id, {});
		}

		/**
		 * Get a group
		 * Get groups/{id}
		 * @param {number} id The id of the group
		 * @return {ApiCoreDtoGroupsGroup} 
		 */
		GroupsGetById(id: number): Observable<ApiCoreDtoGroupsGroup> {
			return this.http.get<ApiCoreDtoGroupsGroup>(this.baseUri + 'groups/' + id, {});
		}

		/**
		 * Update a group
		 * Post groups/{id}
		 * @param {number} id The id of the group
		 * @param {ApiCoreDtoGroupsGroup} requestBody The body of the group
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_Post(id: number, requestBody: ApiCoreDtoGroupsGroup): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve statistics about this group for a timeframe
		 * Get groups/{id}/aggregated
		 * @param {number} id Id of the group
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {boolean} hourly If using "yesterday" or "today" timeframe you can ask for the hourly detail
		 * @return {ApiCoreDtoAggregatedAggregatedResult} 
		 */
		Groups_GetStatisticsSingle(id: number, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, hourly: boolean | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedResult>(this.baseUri + 'groups/' + id + '/aggregated?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&hourly=' + hourly, {});
		}

		/**
		 * Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
		 * Get groups/{id}/aggregated/list
		 * @param {number} id Id of the group
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetStatisticsListGroupBy} groupBy The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_} 
		 */
		Groups_GetStatisticsList(id: number, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, fromDay: string | null | undefined, toDay: string | null | undefined, groupBy: Aggregated_GetStatisticsListGroupBy | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreDtoAggregatedAggregatedResult_>(this.baseUri + 'groups/' + id + '/aggregated/list?timeFrame=' + timeFrame + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&groupBy=' + groupBy, {});
		}

		/**
		 * Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
		 * Get groups/{id}/aggregated/summary
		 * @param {number} id Filter by this group id
		 * @param {Aggregated_GetStatisticsSingleTimeFrame} timeFrame Timeframe of the request. See list at $timeframeList
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of datapoint ("tl"/"tp")
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of datapoint ("deleted"/"active"/"paused"/"spam")
		 * @param {string} tag A comma separated list of tags you want to filter with.
		 * @param {boolean} favourite Is the datapoint marked as favourite
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {number} offset Offset where to start from
		 * @param {number} limit Limit results to this number
		 * @param {string} textSearch Filter fields by this pattern
		 * @return {ApiCoreDtoAggregatedAggregatedSummaryResult} 
		 */
		Groups_GetDatapointsSummary(id: number, timeFrame: Aggregated_GetStatisticsSingleTimeFrame, type: Aggregated_GetDatapointsSummaryType | null | undefined, fromDay: string | null | undefined, toDay: string | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, tag: string | null | undefined, favourite: boolean | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, offset: number | null | undefined, limit: number | null | undefined, textSearch: string | null | undefined): Observable<ApiCoreDtoAggregatedAggregatedSummaryResult> {
			return this.http.get<ApiCoreDtoAggregatedAggregatedSummaryResult>(this.baseUri + 'groups/' + id + '/aggregated/summary?timeFrame=' + timeFrame + '&type=' + type + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&status=' + status + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&favourite=' + favourite + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&offset=' + offset + '&limit=' + limit + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)), {});
		}

		/**
		 * List of all the datapoints associated to the user in this group.
		 * Get groups/{id}/datapoints
		 * @param {number} id Id of the group
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of the datapoint ("tp"/"tl")
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {boolean} onlyFavorites Filter fields by favourite status
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_GetDatapoints(id: number, offset: number | null | undefined, limit: number | null | undefined, type: Aggregated_GetDatapointsSummaryType | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, onlyFavorites: boolean | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups/' + id + '/datapoints?offset=' + offset + '&limit=' + limit + '&type=' + type + '&status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&onlyFavorites=' + onlyFavorites + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Create a datapoint in this group
		 * Post groups/{id}/datapoints
		 * @param {number} id The id of the group
		 * @param {ApiCoreDtoDatapointsDatapoint} requestBody The body of the datapoint
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_PutDatapoint(id: number, requestBody: ApiCoreDtoDatapointsDatapoint): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups/' + id + '/datapoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Count the datapoints associated to the user in this group.
		 * Get groups/{id}/datapoints/count
		 * @param {number} id Id of the group
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of the datapoint ("tp"/"tl")
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {boolean} onlyFavorites Filter fields by favourite status
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Groups_GetDatapointsCount(id: number, type: Aggregated_GetDatapointsSummaryType | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, onlyFavorites: boolean | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'groups/' + id + '/datapoints/count?type=' + type + '&status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&onlyFavorites=' + onlyFavorites + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Fast switch the "favourite" field of a group
		 * Put groups/{id}/favourite
		 * @param {number} id Id of the group
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_PatchFavourite(id: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups/' + id + '/favourite', null, {});
		}

		/**
		 * Retrieve the list of events related to this group.
		 * Get groups/{id}/hits
		 * @param {number} id Id of the group
		 * @param {Conversions_GetHitsTimeframe} timeframe Timeframe of the request. See list at $timeframeList
		 * @param {number} limit Limit results to this number
		 * @param {string} offset Offset where to start from (it's the lastKey field in the response object)
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Conversions_GetHitsFilter} filter Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
		 * @return {ApiCoreDtoClickStreamHitListPage} 
		 */
		Groups_GetHits(id: number, timeframe: Conversions_GetHitsTimeframe, limit: number | null | undefined, offset: string | null | undefined, fromDay: string | null | undefined, toDay: string | null | undefined, filter: Conversions_GetHitsFilter | null | undefined): Observable<ApiCoreDtoClickStreamHitListPage> {
			return this.http.get<ApiCoreDtoClickStreamHitListPage>(this.baseUri + 'groups/' + id + '/hits?timeframe=' + timeframe + '&limit=' + limit + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&filter=' + filter, {});
		}

		/**
		 * Fast patch the "notes" field of a group
		 * Put groups/{id}/notes
		 * @param {number} id Id of the group
		 * @param {ApiCoreRequestsGenericTextPatch} requestBody Patch requests
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Groups_PatchNotes(id: number, requestBody: ApiCoreRequestsGenericTextPatch): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'groups/' + id + '/notes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the list of events related to this account.
		 * Get hits
		 * @param {Conversions_GetHitsTimeframe} timeframe Timeframe of the request. See list at $timeframeList
		 * @param {number} limit Limit results to this number
		 * @param {string} offset Offset where to start from (it's the lastKey field in the response object)
		 * @param {string} fromDay If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
		 * @param {string} toDay If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
		 * @param {Conversions_GetHitsFilter} filter Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
		 * @return {ApiCoreDtoClickStreamHitListPage} 
		 */
		Hits_GetHits(timeframe: Conversions_GetHitsTimeframe, limit: number | null | undefined, offset: string | null | undefined, fromDay: string | null | undefined, toDay: string | null | undefined, filter: Conversions_GetHitsFilter | null | undefined): Observable<ApiCoreDtoClickStreamHitListPage> {
			return this.http.get<ApiCoreDtoClickStreamHitListPage>(this.baseUri + 'hits?timeframe=' + timeframe + '&limit=' + limit + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&fromDay=' + (fromDay == null ? '' : encodeURIComponent(fromDay)) + '&toDay=' + (toDay == null ? '' : encodeURIComponent(toDay)) + '&filter=' + filter, {});
		}

		/**
		 * Retrieve current account data
		 * Get me
		 * @return {ApiCoreDtoAccountingUser} 
		 */
		Me_GetMe(): Observable<ApiCoreDtoAccountingUser> {
			return this.http.get<ApiCoreDtoAccountingUser>(this.baseUri + 'me', {});
		}

		/**
		 * Retrieve current account plan
		 * Get me/plan
		 * @return {ApiCoreDtoAccountingPlan} 
		 */
		Me_GetMePlan(): Observable<ApiCoreDtoAccountingPlan> {
			return this.http.get<ApiCoreDtoAccountingPlan>(this.baseUri + 'me/plan', {});
		}

		/**
		 * List of all the retargeting scripts associated to the user
		 * Get retargeting
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Retargeting_Get(offset: number | null | undefined, limit: number | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'retargeting?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Creates a retargeting script
		 * Post retargeting
		 * @param {ApiCoreDtoRetargetingRetargetingScript} requestBody The body of the retargeting script
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Retargeting_Put(requestBody: ApiCoreDtoRetargetingRetargetingScript): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'retargeting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve count of retargeting scripts
		 * Get retargeting/count
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Retargeting_Count(): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'retargeting/count', {});
		}

		/**
		 * Deletes a retargeting script (and remove associations)
		 * Delete retargeting/{id}
		 * @param {number} id The id of the retargeting script
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Retargeting_Delete(id: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'retargeting/' + id, {});
		}

		/**
		 * Get a retargeting script object
		 * Get retargeting/{id}
		 * @param {number} id The id of the retargeting script
		 * @return {ApiCoreDtoRetargetingRetargetingScript} 
		 */
		RetargetingGetById(id: number): Observable<ApiCoreDtoRetargetingRetargetingScript> {
			return this.http.get<ApiCoreDtoRetargetingRetargetingScript>(this.baseUri + 'retargeting/' + id, {});
		}

		/**
		 * Updates a retargeting script
		 * Post retargeting/{id}
		 * @param {number} id The id of the retargeting script
		 * @param {ApiCoreDtoRetargetingRetargetingScript} requestBody The body of the retargeting script
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Retargeting_Post(id: number, requestBody: ApiCoreDtoRetargetingRetargetingScript): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'retargeting/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of all the datapoints associated to the retargeting script.
		 * Get retargeting/{id}/datapoints
		 * @param {number} id Id of the retargeting script
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {boolean} onlyFavorites Filter fields by favourite status
		 * @param {string} sortBy Field to sort by
		 * @param {Account_GetGuestsSortDirection} sortDirection Direction of sort "asc" or "desc"
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Retargeting_GetDatapoints(id: number, offset: number | null | undefined, limit: number | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, onlyFavorites: boolean | null | undefined, sortBy: string | null | undefined, sortDirection: Account_GetGuestsSortDirection | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'retargeting/' + id + '/datapoints?offset=' + offset + '&limit=' + limit + '&status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&onlyFavorites=' + onlyFavorites + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortDirection=' + sortDirection + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Count the datapoints associated to the retargeting script.
		 * Get retargeting/{id}/datapoints/count
		 * @param {number} id Id of the group
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} tags A comma separated list of tags you want to filter with.
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {boolean} onlyFavorites Filter fields by favourite status
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Retargeting_GetDatapointsCount(id: number, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, tags: string | null | undefined, textSearch: string | null | undefined, onlyFavorites: boolean | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'retargeting/' + id + '/datapoints/count?status=' + status + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&onlyFavorites=' + onlyFavorites + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * List of all the groups associated to the user filtered by this tag.
		 * Get tags
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @param {string} name Name of the tag
		 * @param {string} datapoints Comma separated list of datapoints id to filter by
		 * @param {string} groups Comma separated list of groups id to filter by
		 * @param {Tags_GetType} type Type of entity related to the tag
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_Get(offset: number | null | undefined, limit: number | null | undefined, name: string | null | undefined, datapoints: string | null | undefined, groups: string | null | undefined, type: Tags_GetType | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags?offset=' + offset + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&datapoints=' + (datapoints == null ? '' : encodeURIComponent(datapoints)) + '&groups=' + (groups == null ? '' : encodeURIComponent(groups)) + '&type=' + type, {});
		}

		/**
		 * Create a tag
		 * Post tags
		 * @param {ApiCoreDtoTagsTag} requestBody The body of the tag
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_Put(requestBody: ApiCoreDtoTagsTag): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.post<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of all the groups associated to the user filtered by this tag.
		 * Get tags/count
		 * @param {string} name Name of the tag
		 * @param {string} datapoints Comma separated list of datapoints id to filter by
		 * @param {string} groups Comma separated list of groups id to filter by
		 * @param {Tags_GetType} type Type of entity related to the tag
		 * @return {SystemObject} 
		 */
		Tags_Count(name: string | null | undefined, datapoints: string | null | undefined, groups: string | null | undefined, type: Tags_GetType | null | undefined): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'tags/count?name=' + (name == null ? '' : encodeURIComponent(name)) + '&datapoints=' + (datapoints == null ? '' : encodeURIComponent(datapoints)) + '&groups=' + (groups == null ? '' : encodeURIComponent(groups)) + '&type=' + type, {});
		}

		/**
		 * Delete a tag
		 * Delete tags/{tagId}
		 * @param {number} tagId Id of the tag
		 * @return {SystemObject} 
		 */
		Tags_Delete(tagId: number): Observable<SystemObject> {
			return this.http.delete<SystemObject>(this.baseUri + 'tags/' + tagId, {});
		}

		/**
		 * Retrieve a tag
		 * Get tags/{tagId}
		 * @param {number} tagId Id of the tag
		 * @return {ApiCoreDtoTagsTag} 
		 */
		TagsGetByTagId(tagId: number): Observable<ApiCoreDtoTagsTag> {
			return this.http.get<ApiCoreDtoTagsTag>(this.baseUri + 'tags/' + tagId, {});
		}

		/**
		 * Delete the association of this tag with all datapoints
		 * Delete tags/{tagId}/datapoints
		 * @param {number} tagId Id of the tag
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_DeleteRelatedDatapoints(tagId: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags/' + tagId + '/datapoints', {});
		}

		/**
		 * List of all the datapoints associated to the user filtered by this tag
		 * Get tags/{tagId}/datapoints
		 * @param {number} tagId Id of the tag.
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of the datapoint ("tp"/"tl")
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_GetDatapoints(tagId: number, offset: number | null | undefined, limit: number | null | undefined, type: Aggregated_GetDatapointsSummaryType | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags/' + tagId + '/datapoints?offset=' + offset + '&limit=' + limit + '&type=' + type + '&status=' + status + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Count the datapoints associated to the user filtered by this tag
		 * Get tags/{tagId}/datapoints/count
		 * @param {number} tagId Id of the tag.
		 * @param {Aggregated_GetDatapointsSummaryType} type Type of the datapoint ("tp"/"tl")
		 * @param {Aggregated_GetDatapointsSummaryStatus} status Status of the datapoint
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude datapoints created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude datapoints created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Tags_GetDatapointsCount(tagId: number, type: Aggregated_GetDatapointsSummaryType | null | undefined, status: Aggregated_GetDatapointsSummaryStatus | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'tags/' + tagId + '/datapoints/count?type=' + type + '&status=' + status + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Associate/Deassociate a tag with a datapoint
		 * Put tags/{tagId}/datapoints/patch
		 * @param {number} tagId Id of the tag
		 * @param {ApiCoreRequestsPatchBody} requestBody The body patch
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_PatchDataPoint(tagId: number, requestBody: ApiCoreRequestsPatchBody): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags/' + tagId + '/datapoints/patch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the association of this tag with all groups
		 * Delete tags/{tagId}/groups
		 * @param {number} tagId Id of the tag
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_DeleteRelatedGroups(tagId: number): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.delete<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags/' + tagId + '/groups', {});
		}

		/**
		 * List of all the groups associated to the user filtered by this tag.
		 * Get tags/{tagId}/groups
		 * @param {number} tagId Id of the tag.
		 * @param {number} offset Where to start when retrieving elements. Default is 0 if not specified.
		 * @param {number} limit Maximum elements to retrieve. Default to 20 if not specified.
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of the datapoint
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude groups created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude groups created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_GetGroups(tagId: number, offset: number | null | undefined, limit: number | null | undefined, status: Aggregated_GetConversionsSummaryStatus | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.get<ApiCoreResponsesEntitiesResponse_ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags/' + tagId + '/groups?offset=' + offset + '&limit=' + limit + '&status=' + status + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Count the groups associated to the user filtered by this tag
		 * Get tags/{tagId}/groups/count
		 * @param {number} tagId Id of the tag.
		 * @param {Aggregated_GetConversionsSummaryStatus} status Status of the datapoint
		 * @param {string} textSearch Filter fields by this pattern
		 * @param {string} createdAfter Exclude groups created before this date (YYYYMMDD)
		 * @param {string} createdBefore Exclude groups created after this date (YYYYMMDD)
		 * @return {ApiCoreResponsesCountResponce} 
		 */
		Tags_GetGroupsCount(tagId: number, status: Aggregated_GetConversionsSummaryStatus | null | undefined, textSearch: string | null | undefined, createdAfter: string | null | undefined, createdBefore: string | null | undefined): Observable<ApiCoreResponsesCountResponce> {
			return this.http.get<ApiCoreResponsesCountResponce>(this.baseUri + 'tags/' + tagId + '/groups/count?status=' + status + '&textSearch=' + (textSearch == null ? '' : encodeURIComponent(textSearch)) + '&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&createdBefore=' + (createdBefore == null ? '' : encodeURIComponent(createdBefore)), {});
		}

		/**
		 * Associate/Deassociate a tag with a group
		 * Put tags/{tagId}/groups/patch
		 * @param {number} tagId Id of the tag
		 * @param {ApiCoreRequestsPatchBody} requestBody The body patch
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_PatchGroup(tagId: number, requestBody: ApiCoreRequestsPatchBody): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags/' + tagId + '/groups/patch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fast patch a tag name
		 * Put tags/{tagId}/name
		 * @param {number} tagId Id of the tag
		 * @param {ApiCoreRequestsGenericTextPatch} requestBody The body patch
		 * @return {ApiCoreResponsesEntityUri_SystemInt64_} 
		 */
		Tags_PatchTagName(tagId: number, requestBody: ApiCoreRequestsGenericTextPatch): Observable<ApiCoreResponsesEntityUri_SystemInt64_> {
			return this.http.put<ApiCoreResponsesEntityUri_SystemInt64_>(this.baseUri + 'tags/' + tagId + '/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Account_GetGuestsSortDirection { asc = 0, desc = 1 }

	export enum Account_GetPermissionsEntityType { datapoint = 0, group = 1 }

	export enum Account_GetPermissionsType { r = 0, w = 1 }

	export enum Aggregated_GetStatisticsSingleTimeFrame { today = 0, yesterday = 1, last7 = 2, last30 = 3, lastmonth = 4, currentmonth = 5, previousmonth = 6, last90 = 7, last120 = 8, last180 = 9, last12months = 10, lastyear = 11, currentyear = 12, beginning = 13, custom = 14 }

	export enum Aggregated_GetStatisticsListGroupBy { week = 0, month = 1 }

	export enum Aggregated_GetConversionsSummaryStatus { deleted = 0, active = 1 }

	export enum Aggregated_GetDatapointsSummaryType { tp = 0, tl = 1 }

	export enum Aggregated_GetDatapointsSummaryStatus { deleted = 0, active = 1, paused = 2, spam = 3 }

	export enum ClickStream_GetFilter { '' = 0, spiders = 1, uniques = 2, nonuniques = 3, conversions = 4 }

	export enum Conversions_GetHitsTimeframe { yesterday = 0, last7 = 1, last30 = 2, lastmonth = 3, currentmonth = 4, previousmonth = 5, last90 = 6, last120 = 7, last180 = 8, custom = 9 }

	export enum Conversions_GetHitsFilter { spiders = 0, uniques = 1, nonuniques = 2, conversions = 3 }

	export enum Domains_GetType { system = 0, go = 1, personal = 2, dedicated = 3 }

	export enum Tags_GetType { tp = 0, tl = 1, dp = 2, gr = 3 }

}

