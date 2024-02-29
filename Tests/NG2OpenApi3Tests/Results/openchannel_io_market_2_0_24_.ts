import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Access {

		/**
		 * The approved access restrictions for this app
		 * Required
		 */
		access: Array<string>;

		/**
		 * The id of the app that owns this access key
		 * Required
		 */
		appId: string;

		/**
		 * The time (in milliseconds) of when the user agreed to the access request
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: string;

		/**
		 * The ip address of the user agreeing to the access request
		 * Required
		 */
		ip: string;

		/**
		 * True if this access is up to date with the current version of the app
		 * Required
		 */
		isValid: boolean;

		/**
		 * The id for this user
		 * Required
		 */
		userId: string;
	}
	export interface AccessFormProperties {

		/**
		 * The id of the app that owns this access key
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/**
		 * The time (in milliseconds) of when the user agreed to the access request
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The ip address of the user agreeing to the access request
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * True if this access is up to date with the current version of the app
		 * Required
		 */
		isValid: FormControl<boolean | null | undefined>,

		/**
		 * The id for this user
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAccessFormGroup() {
		return new FormGroup<AccessFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isValid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The connected Stripe account for a developer */
	export interface Account {

		/**
		 * The name of the Stripe account
		 * Required
		 */
		accountName: string;

		/**
		 * The country for this Stripe account
		 * Required
		 */
		country: string;

		/**
		 * The default currency for this Stripe account
		 * Required
		 */
		defaultCurrency: string;

		/**
		 * The id of the Stripe account
		 * Required
		 */
		stripeId: string;
	}

	/** The connected Stripe account for a developer */
	export interface AccountFormProperties {

		/**
		 * The name of the Stripe account
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * The country for this Stripe account
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The default currency for this Stripe account
		 * Required
		 */
		defaultCurrency: FormControl<string | null | undefined>,

		/**
		 * The id of the Stripe account
		 * Required
		 */
		stripeId: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stripeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A developer's connected Stripe accounts */
	export interface Accounts {

		/**
		 * An array of connected Stripe accounts
		 * Required
		 */
		accounts: Array<Account>;

		/**
		 * The id of the developer
		 * Required
		 */
		developerId: string;
	}

	/** A developer's connected Stripe accounts */
	export interface AccountsFormProperties {

		/**
		 * The id of the developer
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,
	}
	export function CreateAccountsFormGroup() {
		return new FormGroup<AccountsFormProperties>({
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An app */
	export interface App {

		/** A custom defined list of access requirements */
		access?: Array<string>;

		/**
		 * Resticts users from accessing this app
		 * Required
		 */
		allow: Restrictions;

		/**
		 * The id of this app
		 * Required
		 */
		appId: string;

		/**
		 * A custom defined list of app attributes
		 * Required
		 */
		attributes: string;

		/**
		 * The date (in millis) that this app was created
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created: string;

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: string;

		/**
		 * The id of the developer that owns this app
		 * Required
		 */
		developerId: string;

		/**
		 * True if this is the live version of the app
		 * Required
		 */
		isLive: boolean;

		/**
		 * The date (in millis) that this app was last modified
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastUpdated: string;

		/**
		 * The models that describes the cost and pricing for this app
		 * Required
		 */
		model: Array<Model>;

		/**
		 * The name of this app
		 * Required
		 */
		name: string;
		ownership?: Ownership;

		/**
		 * A random number that changes hourly and is used for achieving a random sort order when displaying apps
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		randomize: number;

		/**
		 * The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
		 * Required
		 * Minimum: 0
		 * Maximum: 500
		 */
		rating: number;

		/**
		 * Resticts users from accessing this app
		 * Required
		 */
		restrict: Restrictions;

		/**
		 * The number of approved reviews for this app.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reviewCount?: number | null;

		/**
		 * URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.
		 * Required
		 */
		safeName: Array<string>;

		/** A field containing summary stats about the app and is specially designed to allow apps to be sorted by popularity */
		statistics?: string | null;

		/**
		 * The current status of this review
		 * Required
		 */
		status: Status;

		/**
		 * The date (in millis) that this app was submitted for approval
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		submittedDate?: string | null;

		/** The type for this app */
		type?: string | null;

		/**
		 * The version number for this app
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: number;
	}

	/** An app */
	export interface AppFormProperties {

		/**
		 * The id of this app
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/**
		 * A custom defined list of app attributes
		 * Required
		 */
		attributes: FormControl<string | null | undefined>,

		/**
		 * The date (in millis) that this app was created
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: FormControl<string | null | undefined>,

		/**
		 * The id of the developer that owns this app
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,

		/**
		 * True if this is the live version of the app
		 * Required
		 */
		isLive: FormControl<boolean | null | undefined>,

		/**
		 * The date (in millis) that this app was last modified
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastUpdated: FormControl<string | null | undefined>,

		/**
		 * The name of this app
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A random number that changes hourly and is used for achieving a random sort order when displaying apps
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		randomize: FormControl<number | null | undefined>,

		/**
		 * The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
		 * Required
		 * Minimum: 0
		 * Maximum: 500
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * The number of approved reviews for this app.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reviewCount: FormControl<number | null | undefined>,

		/** A field containing summary stats about the app and is specially designed to allow apps to be sorted by popularity */
		statistics: FormControl<string | null | undefined>,

		/**
		 * The date (in millis) that this app was submitted for approval
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		submittedDate: FormControl<string | null | undefined>,

		/** The type for this app */
		type: FormControl<string | null | undefined>,

		/**
		 * The version number for this app
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attributes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isLive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastUpdated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			randomize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(500)]),
			reviewCount: new FormControl<number | null | undefined>(undefined),
			statistics: new FormControl<string | null | undefined>(undefined),
			submittedDate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The model that describes the cost and pricing for apps */
	export interface Model {

		/** The billingPeriod along with the billingPeriodUnit make up the time between billing cycles */
		billingPeriod?: ModelBillingPeriod | null;

		/**
		 * The billingPeriod along with the billingPeriodUnit make up the time between billing cycles
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		billingPeriodUnit?: number | null;

		/**
		 * The marketplace commission applied to this app's model multiplied by 100 to include two digits for fractions of a percent
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		commission: number;

		/**
		 * The ISO 4217 currency code for this price
		 * Required
		 */
		currency: string;

		/** A custom JSON object that you can create and attach to this record */
		customData?: string | null;

		/**
		 * The payee that will be paying for any payment processing fees
		 * Required
		 */
		feePayer: ModelFeePayer;

		/**
		 * The license model type. Single allows a purchase to a single user or organization
		 * Required
		 */
		license: ModelLicense;

		/** The id that uniquely identifies this model */
		modelId?: string | null;

		/**
		 * The price of this app in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/** The pricing model subtype */
		subtype?: ModelSubtype | null;

		/**
		 * The maximum number of free trial days available
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trial: number;

		/**
		 * The pricing model type. Free has no cost, single has a one time purchase cost and recurring requires a monthly subscription
		 * Required
		 */
		type: ModelType;
	}

	/** The model that describes the cost and pricing for apps */
	export interface ModelFormProperties {

		/** The billingPeriod along with the billingPeriodUnit make up the time between billing cycles */
		billingPeriod: FormControl<ModelBillingPeriod | null | undefined>,

		/**
		 * The billingPeriod along with the billingPeriodUnit make up the time between billing cycles
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		billingPeriodUnit: FormControl<number | null | undefined>,

		/**
		 * The marketplace commission applied to this app's model multiplied by 100 to include two digits for fractions of a percent
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		commission: FormControl<number | null | undefined>,

		/**
		 * The ISO 4217 currency code for this price
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/** A custom JSON object that you can create and attach to this record */
		customData: FormControl<string | null | undefined>,

		/**
		 * The payee that will be paying for any payment processing fees
		 * Required
		 */
		feePayer: FormControl<ModelFeePayer | null | undefined>,

		/**
		 * The license model type. Single allows a purchase to a single user or organization
		 * Required
		 */
		license: FormControl<ModelLicense | null | undefined>,

		/** The id that uniquely identifies this model */
		modelId: FormControl<string | null | undefined>,

		/**
		 * The price of this app in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** The pricing model subtype */
		subtype: FormControl<ModelSubtype | null | undefined>,

		/**
		 * The maximum number of free trial days available
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trial: FormControl<number | null | undefined>,

		/**
		 * The pricing model type. Free has no cost, single has a one time purchase cost and recurring requires a monthly subscription
		 * Required
		 */
		type: FormControl<ModelType | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			billingPeriod: new FormControl<ModelBillingPeriod | null | undefined>(undefined),
			billingPeriodUnit: new FormControl<number | null | undefined>(undefined),
			commission: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined),
			feePayer: new FormControl<ModelFeePayer | null | undefined>(undefined, [Validators.required]),
			license: new FormControl<ModelLicense | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			subtype: new FormControl<ModelSubtype | null | undefined>(undefined),
			trial: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ModelType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ModelBillingPeriod { daily = 'daily', weekly = 'weekly', monthly = 'monthly', annually = 'annually' }

	export enum ModelFeePayer { developer = 'developer', marketplace = 'marketplace' }

	export enum ModelLicense { single = 'single' }

	export enum ModelSubtype { usage = 'usage', seat = 'seat' }

	export enum ModelType { free = 'free', single = 'single', recurring = 'recurring' }


	/** Pages of app results */
	export interface AppPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of apps for the current page
		 * Required
		 */
		list: Array<App>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of app results */
	export interface AppPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateAppPagesFormGroup() {
		return new FormGroup<AppPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The totals for the app */
	export interface AppTotal {

		/**
		 * The totals for the field
		 * Required
		 */
		'$appId': DataTotal;
	}

	/** The totals for the app */
	export interface AppTotalFormProperties {
	}
	export function CreateAppTotalFormGroup() {
		return new FormGroup<AppTotalFormProperties>({
		});

	}


	/** An AppVersion */
	export interface AppVersion {

		/** A custom defined list of access requirements */
		access?: Array<string>;

		/**
		 * Resticts users from accessing this app
		 * Required
		 */
		allow: Restrictions;

		/**
		 * The id of this app
		 * Required
		 */
		appId: string;

		/** A custom defined list of app attributes */
		attributes?: string | null;

		/**
		 * The date (in millis) that this app was created
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created: string;

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: string;

		/**
		 * The id of the developer that owns this app
		 * Required
		 */
		developerId: string;

		/**
		 * True if this is the latest version of this app
		 * Required
		 */
		isLatestVersion: boolean;

		/**
		 * True if this is the live version of the app
		 * Required
		 */
		isLive: boolean;

		/**
		 * The date (in millis) that this app was last modified
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastUpdated: string;

		/**
		 * The models that describes the cost and pricing for this app
		 * Required
		 */
		model: Array<Model>;

		/**
		 * The name of this app
		 * Required
		 */
		name: string;

		/**
		 * Details of the live version of this app
		 * Required
		 */
		parent: Parent;

		/**
		 * The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
		 * Minimum: 0
		 * Maximum: 500
		 */
		rating?: number | null;

		/**
		 * Resticts users from accessing this app
		 * Required
		 */
		restrict: Restrictions;

		/**
		 * The number of approved reviews for this app.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reviewCount?: number | null;

		/**
		 * URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.
		 * Required
		 */
		safeName: Array<string>;

		/**
		 * The current status of this review
		 * Required
		 */
		status: Status;

		/** The type for this app */
		type?: string | null;

		/**
		 * The version number for this app
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: number;
	}

	/** An AppVersion */
	export interface AppVersionFormProperties {

		/**
		 * The id of this app
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/** A custom defined list of app attributes */
		attributes: FormControl<string | null | undefined>,

		/**
		 * The date (in millis) that this app was created
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: FormControl<string | null | undefined>,

		/**
		 * The id of the developer that owns this app
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,

		/**
		 * True if this is the latest version of this app
		 * Required
		 */
		isLatestVersion: FormControl<boolean | null | undefined>,

		/**
		 * True if this is the live version of the app
		 * Required
		 */
		isLive: FormControl<boolean | null | undefined>,

		/**
		 * The date (in millis) that this app was last modified
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastUpdated: FormControl<string | null | undefined>,

		/**
		 * The name of this app
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
		 * Minimum: 0
		 * Maximum: 500
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * The number of approved reviews for this app.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reviewCount: FormControl<number | null | undefined>,

		/** The type for this app */
		type: FormControl<string | null | undefined>,

		/**
		 * The version number for this app
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateAppVersionFormGroup() {
		return new FormGroup<AppVersionFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attributes: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isLatestVersion: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isLive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastUpdated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(500)]),
			reviewCount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App_Entry {

		/**
		 * The id of the app involved in this action
		 * Required
		 */
		appId: string;

		/**
		 * The date (in millis) of when this action was performed
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: string;
	}
	export interface App_EntryFormProperties {

		/**
		 * The id of the app involved in this action
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/**
		 * The date (in millis) of when this action was performed
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: FormControl<string | null | undefined>,
	}
	export function CreateApp_EntryFormGroup() {
		return new FormGroup<App_EntryFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An app attribute */
	export interface Attributes {

		/**
		 * The name of this attribute
		 * Required
		 */
		name: string;

		/**
		 * The type of this attribute
		 * Required
		 */
		type: AttributesType;

		/** A comma seperated list of values allowed for this attribute */
		values?: string | null;
	}

	/** An app attribute */
	export interface AttributesFormProperties {

		/**
		 * The name of this attribute
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of this attribute
		 * Required
		 */
		type: FormControl<AttributesType | null | undefined>,

		/** A comma seperated list of values allowed for this attribute */
		values: FormControl<string | null | undefined>,
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AttributesType | null | undefined>(undefined, [Validators.required]),
			values: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributesType { text = 'text', select = 'select', multi = 'multi' }

	export interface Card {

		/** The card holder's city */
		address_city?: string | null;

		/** The card holder's country */
		address_country?: string | null;

		/** The card holder's street address */
		address_line1?: string | null;

		/** The card holder's street address */
		address_line2?: string | null;

		/** The card holder's city state/province */
		address_state?: string | null;

		/** The card holder's zip/postal code */
		address_zip?: string | null;

		/**
		 * The brand of the credit card. Example: Visa
		 * Required
		 */
		brand: string;

		/**
		 * The id for this credit card
		 * Required
		 */
		cardId: string;

		/**
		 * The two digit expiration month
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exp_month: number;

		/**
		 * The four digit expiration year
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exp_year: number;

		/**
		 * True if this is the default credit card
		 * Required
		 */
		isDefault: boolean;

		/**
		 * The last 4 digits of the credit card number
		 * Required
		 */
		last4: string;

		/**
		 * The card holder's full name
		 * Required
		 */
		name: string;
	}
	export interface CardFormProperties {

		/** The card holder's city */
		address_city: FormControl<string | null | undefined>,

		/** The card holder's country */
		address_country: FormControl<string | null | undefined>,

		/** The card holder's street address */
		address_line1: FormControl<string | null | undefined>,

		/** The card holder's street address */
		address_line2: FormControl<string | null | undefined>,

		/** The card holder's city state/province */
		address_state: FormControl<string | null | undefined>,

		/** The card holder's zip/postal code */
		address_zip: FormControl<string | null | undefined>,

		/**
		 * The brand of the credit card. Example: Visa
		 * Required
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * The id for this credit card
		 * Required
		 */
		cardId: FormControl<string | null | undefined>,

		/**
		 * The two digit expiration month
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exp_month: FormControl<number | null | undefined>,

		/**
		 * The four digit expiration year
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exp_year: FormControl<number | null | undefined>,

		/**
		 * True if this is the default credit card
		 * Required
		 */
		isDefault: FormControl<boolean | null | undefined>,

		/**
		 * The last 4 digits of the credit card number
		 * Required
		 */
		last4: FormControl<string | null | undefined>,

		/**
		 * The card holder's full name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCardFormGroup() {
		return new FormGroup<CardFormProperties>({
			address_city: new FormControl<string | null | undefined>(undefined),
			address_country: new FormControl<string | null | undefined>(undefined),
			address_line1: new FormControl<string | null | undefined>(undefined),
			address_line2: new FormControl<string | null | undefined>(undefined),
			address_state: new FormControl<string | null | undefined>(undefined),
			address_zip: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exp_month: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			exp_year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			last4: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A User's credit card details */
	export interface Cards {

		/**
		 * An array of credit cards added by this user
		 * Required
		 */
		cards: Array<Card>;

		/**
		 * The id of this user
		 * Required
		 */
		userId: string;
	}

	/** A User's credit card details */
	export interface CardsFormProperties {

		/**
		 * The id of this user
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCardsFormGroup() {
		return new FormGroup<CardsFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The category supported by this category group */
	export interface Category {

		/**
		 * The description of this category
		 * Required
		 */
		description: string;

		/**
		 * The name of this category
		 * Required
		 */
		name: string;
	}

	/** The category supported by this category group */
	export interface CategoryFormProperties {

		/**
		 * The description of this category
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of this category
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The category groups supported by this marketplace */
	export interface CategoryGroups {

		/**
		 * The categories supported by this category group
		 * Required
		 */
		categories: Array<Category>;

		/**
		 * The name of this category group
		 * Required
		 */
		name: string;
	}

	/** The category groups supported by this marketplace */
	export interface CategoryGroupsFormProperties {

		/**
		 * The name of this category group
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryGroupsFormGroup() {
		return new FormGroup<CategoryGroupsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The totals for the field */
	export interface DataTotal {

		/**
		 * The totals for the field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'$field'?: number | null;
	}

	/** The totals for the field */
	export interface DataTotalFormProperties {

		/**
		 * The totals for the field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'$field': FormControl<number | null | undefined>,
	}
	export function CreateDataTotalFormGroup() {
		return new FormGroup<DataTotalFormProperties>({
			'$field': new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Developer */
	export interface Developer {

		/**
		 * The time (in millis) of when this developer was created
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created: number;

		/** A custom JSON object that you can create and attach to this record */
		customData?: string | null;

		/**
		 * The id of this developer
		 * Required
		 */
		developerId: string;

		/** The developer's email */
		email?: string | null;

		/** The developer's name */
		name?: string | null;

		/** The type for this developer */
		type?: string | null;
	}

	/** A Developer */
	export interface DeveloperFormProperties {

		/**
		 * The time (in millis) of when this developer was created
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created: FormControl<number | null | undefined>,

		/** A custom JSON object that you can create and attach to this record */
		customData: FormControl<string | null | undefined>,

		/**
		 * The id of this developer
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,

		/** The developer's email */
		email: FormControl<string | null | undefined>,

		/** The developer's name */
		name: FormControl<string | null | undefined>,

		/** The type for this developer */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperFormGroup() {
		return new FormGroup<DeveloperFormProperties>({
			created: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined),
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Developer Account */
	export interface DeveloperAccount {

		/** A custom JSON object that you can create and attach to this record */
		customData?: string | null;

		/**
		 * The id of this developer account
		 * Required
		 */
		developerAccountId: string;

		/**
		 * The id of the developer that this account belongs to
		 * Required
		 */
		developerId: string;

		/** The contact email address */
		email?: string | null;

		/** The name for the account */
		name?: string | null;
	}

	/** A Developer Account */
	export interface DeveloperAccountFormProperties {

		/** A custom JSON object that you can create and attach to this record */
		customData: FormControl<string | null | undefined>,

		/**
		 * The id of this developer account
		 * Required
		 */
		developerAccountId: FormControl<string | null | undefined>,

		/**
		 * The id of the developer that this account belongs to
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,

		/** The contact email address */
		email: FormControl<string | null | undefined>,

		/** The name for the account */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperAccountFormGroup() {
		return new FormGroup<DeveloperAccountFormProperties>({
			customData: new FormControl<string | null | undefined>(undefined),
			developerAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pages of developerAccount results */
	export interface DeveloperAccountPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of developerAccounts for the current page
		 * Required
		 */
		list: Array<DeveloperAccount>;

		/**
		 * The current page number for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: number;

		/**
		 * The total number of pages available for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: number;
	}

	/** Pages of developerAccount results */
	export interface DeveloperAccountPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateDeveloperAccountPagesFormGroup() {
		return new FormGroup<DeveloperAccountPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pages of developer results */
	export interface DeveloperPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of developers for the current page
		 * Required
		 */
		list: Array<Developer>;

		/**
		 * The current page number for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: number;

		/**
		 * The total number of pages available for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: number;
	}

	/** Pages of developer results */
	export interface DeveloperPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateDeveloperPagesFormGroup() {
		return new FormGroup<DeveloperPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeveloperToken {

		/**
		 * The id of the developer connecting their Stripe account
		 * Required
		 */
		developerId: string;

		/**
		 * The time (in milliseconds) when this URL expires
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires: string;

		/**
		 * The URL that this developer can use to connect their Stripe account
		 * Required
		 */
		targetUrl: string;
	}
	export interface DeveloperTokenFormProperties {

		/**
		 * The id of the developer connecting their Stripe account
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,

		/**
		 * The time (in milliseconds) when this URL expires
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires: FormControl<string | null | undefined>,

		/**
		 * The URL that this developer can use to connect their Stripe account
		 * Required
		 */
		targetUrl: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperTokenFormGroup() {
		return new FormGroup<DeveloperTokenFormProperties>({
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Event {

		/** An app */
		app?: App;

		/**
		 * The date (in millis) of when this event occurred
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createdDate: string;

		/** A description of the event */
		description?: string | null;

		/** A Developer */
		developer?: Developer;

		/**
		 * The id of the event
		 * Required
		 */
		eventId: string;

		/**
		 * The current event type
		 * Required
		 */
		eventType: EventEventType;

		/**
		 * The id of the marketplace that owns this event
		 * Required
		 */
		marketplaceId: string;
		ownership?: Ownership;

		/** A Review */
		review?: Review;

		/** A transaction for an app initiated by a user */
		transaction?: Transaction;

		/** A User */
		user?: User;
	}
	export interface EventFormProperties {

		/**
		 * The date (in millis) of when this event occurred
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createdDate: FormControl<string | null | undefined>,

		/** A description of the event */
		description: FormControl<string | null | undefined>,

		/**
		 * The id of the event
		 * Required
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * The current event type
		 * Required
		 */
		eventType: FormControl<EventEventType | null | undefined>,

		/**
		 * The id of the marketplace that owns this event
		 * Required
		 */
		marketplaceId: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			createdDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<EventEventType | null | undefined>(undefined, [Validators.required]),
			marketplaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventEventType { 'app.submitted' = 'app.submitted', 'app.approved' = 'app.approved', 'app.suspended' = 'app.suspended', 'app.unsuspended' = 'app.unsuspended', 'app.rejected' = 'app.rejected', 'app.inReview' = 'app.inReview', 'app.installed' = 'app.installed', 'app.uninstalled' = 'app.uninstalled', 'review.created' = 'review.created', 'review.updated' = 'review.updated', 'review.approved' = 'review.approved', 'review.spam' = 'review.spam', 'review.removed' = 'review.removed', 'user.created' = 'user.created', 'user.updated' = 'user.updated', 'user.removed' = 'user.removed', 'user.invalidPaymentDetails' = 'user.invalidPaymentDetails', 'user.paymentDetailsRequired' = 'user.paymentDetailsRequired', 'developer.created' = 'developer.created', 'developer.updated' = 'developer.updated', 'developer.removed' = 'developer.removed', 'developer.paymentDetailsRequired' = 'developer.paymentDetailsRequired', 'permission.added' = 'permission.added', 'permission.removed' = 'permission.removed', 'payment.complete' = 'payment.complete', 'payment.refunded' = 'payment.refunded', 'payment.required' = 'payment.required', 'ownership.expired' = 'ownership.expired' }


	/** The file ids of the uploaded file */
	export interface File {

		/** The internet media type of the file */
		contentType?: string | null;

		/**
		 * The id of the uploaded file
		 * Required
		 */
		fileId: string;

		/** The path where the file can be located. */
		fileUrl?: string | null;

		/** The hashes requested for the file. */
		hash?: Hash;

		/** The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED */
		mimeCheck?: FileMimeCheck | null;

		/**
		 * The name of the uploaded file
		 * Required
		 */
		name: string;

		/**
		 * The number of bytes in the uploaded file
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: number;

		/**
		 * The time in milliseconds when the file was uploaded
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploadDate: string;

		/** The virus scan results for this file */
		virusScan?: VirusScan;
	}

	/** The file ids of the uploaded file */
	export interface FileFormProperties {

		/** The internet media type of the file */
		contentType: FormControl<string | null | undefined>,

		/**
		 * The id of the uploaded file
		 * Required
		 */
		fileId: FormControl<string | null | undefined>,

		/** The path where the file can be located. */
		fileUrl: FormControl<string | null | undefined>,

		/** The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED */
		mimeCheck: FormControl<FileMimeCheck | null | undefined>,

		/**
		 * The name of the uploaded file
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of bytes in the uploaded file
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The time in milliseconds when the file was uploaded
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploadDate: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			fileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileUrl: new FormControl<string | null | undefined>(undefined),
			mimeCheck: new FormControl<FileMimeCheck | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uploadDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FileMimeCheck { PASSED = 'PASSED', FAILED = 'FAILED' }


	/** The signed URL for downloading a private file */
	export interface FileDownload {

		/**
		 * The signed URL for downloading a private file
		 * Required
		 */
		url: string;
	}

	/** The signed URL for downloading a private file */
	export interface FileDownloadFormProperties {

		/**
		 * The signed URL for downloading a private file
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFileDownloadFormGroup() {
		return new FormGroup<FileDownloadFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pages of file results */
	export interface File_Pages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of users for the current page
		 * Required
		 */
		list: Array<File>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of file results */
	export interface File_PagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateFile_PagesFormGroup() {
		return new FormGroup<File_PagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The virus found within this file */
	export interface FoundVirus {

		/** The name of the file */
		fileName?: string | null;

		/** The name of the virus */
		virusName?: string | null;
	}

	/** The virus found within this file */
	export interface FoundVirusFormProperties {

		/** The name of the file */
		fileName: FormControl<string | null | undefined>,

		/** The name of the virus */
		virusName: FormControl<string | null | undefined>,
	}
	export function CreateFoundVirusFormGroup() {
		return new FormGroup<FoundVirusFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			virusName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The hashes requested for the file. */
	export interface Hash {

		/** The MD5 hash for this uploaded file. */
		MD5?: string | null;

		/** The SHA-1 hash for this uploaded file. */
		'SHA-1'?: string | null;

		/** The SHA-256 hash for this uploaded file. */
		'SHA-256'?: string | null;
	}

	/** The hashes requested for the file. */
	export interface HashFormProperties {

		/** The MD5 hash for this uploaded file. */
		MD5: FormControl<string | null | undefined>,

		/** The SHA-1 hash for this uploaded file. */
		'SHA-1': FormControl<string | null | undefined>,

		/** The SHA-256 hash for this uploaded file. */
		'SHA-256': FormControl<string | null | undefined>,
	}
	export function CreateHashFormGroup() {
		return new FormGroup<HashFormProperties>({
			MD5: new FormControl<string | null | undefined>(undefined),
			'SHA-1': new FormControl<string | null | undefined>(undefined),
			'SHA-256': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A marketplace */
	export interface Market {

		/**
		 * The different app attributes supported by this marketplace
		 * Required
		 */
		attributes: Array<Attributes>;

		/** The category groups supported by this marketplace */
		categoryGroups?: Array<CategoryGroups>;

		/**
		 * The id of this marketplace
		 * Required
		 */
		marketplaceId: string;

		/**
		 * The URL template for previewing apps on this marketplace
		 * Required
		 */
		previewAppUrl: string;

		/**
		 * The URL template for viewing apps on this marketplace
		 * Required
		 */
		viewAppUrl: string;
	}

	/** A marketplace */
	export interface MarketFormProperties {

		/**
		 * The id of this marketplace
		 * Required
		 */
		marketplaceId: FormControl<string | null | undefined>,

		/**
		 * The URL template for previewing apps on this marketplace
		 * Required
		 */
		previewAppUrl: FormControl<string | null | undefined>,

		/**
		 * The URL template for viewing apps on this marketplace
		 * Required
		 */
		viewAppUrl: FormControl<string | null | undefined>,
	}
	export function CreateMarketFormGroup() {
		return new FormGroup<MarketFormProperties>({
			marketplaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			previewAppUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			viewAppUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pages of marketplace results */
	export interface Market_Pages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of markets for the current page
		 * Required
		 */
		list: Array<Market>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of marketplace results */
	export interface Market_PagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateMarket_PagesFormGroup() {
		return new FormGroup<Market_PagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Ownership {

		/**
		 * The id of the app that is owned
		 * Required
		 */
		appId: string;

		/** A custom JSON object that you can create and attach to this record */
		customData?: string | null;

		/**
		 * The date (in millis) of when this app was owned
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: string;

		/**
		 * The id of the developer for this app
		 * Required
		 */
		developerId: string;

		/**
		 * The date (in millis) of when this app ownership expires
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires?: string | null;

		/**
		 * The model that describes the cost and pricing for apps
		 * Required
		 */
		model: Model;

		/**
		 * The id of this ownership
		 * Required
		 */
		ownershipId: string;

		/**
		 * The current ownership status for this app
		 * Required
		 */
		ownershipStatus: OwnershipOwnershipStatus;

		/**
		 * The current ownership type for this app
		 * Required
		 */
		ownershipType: OwnershipOwnershipType;

		/**
		 * The date (in millis) of when this app was uninstalled
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uninstallDate?: string | null;

		/**
		 * The id of the user that owns this app
		 * Required
		 */
		userId: string;
	}
	export interface OwnershipFormProperties {

		/**
		 * The id of the app that is owned
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/** A custom JSON object that you can create and attach to this record */
		customData: FormControl<string | null | undefined>,

		/**
		 * The date (in millis) of when this app was owned
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The id of the developer for this app
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,

		/**
		 * The date (in millis) of when this app ownership expires
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires: FormControl<string | null | undefined>,

		/**
		 * The id of this ownership
		 * Required
		 */
		ownershipId: FormControl<string | null | undefined>,

		/**
		 * The current ownership status for this app
		 * Required
		 */
		ownershipStatus: FormControl<OwnershipOwnershipStatus | null | undefined>,

		/**
		 * The current ownership type for this app
		 * Required
		 */
		ownershipType: FormControl<OwnershipOwnershipType | null | undefined>,

		/**
		 * The date (in millis) of when this app was uninstalled
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uninstallDate: FormControl<string | null | undefined>,

		/**
		 * The id of the user that owns this app
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateOwnershipFormGroup() {
		return new FormGroup<OwnershipFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires: new FormControl<string | null | undefined>(undefined),
			ownershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownershipStatus: new FormControl<OwnershipOwnershipStatus | null | undefined>(undefined, [Validators.required]),
			ownershipType: new FormControl<OwnershipOwnershipType | null | undefined>(undefined, [Validators.required]),
			uninstallDate: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OwnershipOwnershipStatus { pending = 'pending', active = 'active', uninstalled = 'uninstalled', cancelled = 'cancelled' }

	export enum OwnershipOwnershipType { full = 'full', subscription = 'subscription', trial = 'trial' }


	/** Pages of ownership results */
	export interface OwnershipPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of ownership records for the current page
		 * Required
		 */
		list: Array<Ownership>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of ownership results */
	export interface OwnershipPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateOwnershipPagesFormGroup() {
		return new FormGroup<OwnershipPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of the live version of this app */
	export interface Parent {

		/** The current status of this review */
		status?: Status;
	}

	/** Details of the live version of this app */
	export interface ParentFormProperties {
	}
	export function CreateParentFormGroup() {
		return new FormGroup<ParentFormProperties>({
		});

	}


	/** Profanity found in this review */
	export interface Profanity {

		/**
		 * The ending location of the profanity
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: number;

		/**
		 * The starting location of the profanity
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start: number;

		/**
		 * The profane word
		 * Required
		 */
		word: string;
	}

	/** Profanity found in this review */
	export interface ProfanityFormProperties {

		/**
		 * The ending location of the profanity
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * The starting location of the profanity
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start: FormControl<number | null | undefined>,

		/**
		 * The profane word
		 * Required
		 */
		word: FormControl<string | null | undefined>,
	}
	export function CreateProfanityFormGroup() {
		return new FormGroup<ProfanityFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			word: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Resticts users from accessing this app */
	export interface Restrictions {

		/** A custom object containing fields paired with an array value of restrictions. Restricts the users that may own this app. Example: {'country':['Canada','Mexico']} */
		own?: string | null;

		/** A custom object containing fields paired with an array value of restrictions. Restricts the users that may view this app. Example: {'country':['Canada','Mexico']} */
		view?: string | null;
	}

	/** Resticts users from accessing this app */
	export interface RestrictionsFormProperties {

		/** A custom object containing fields paired with an array value of restrictions. Restricts the users that may own this app. Example: {'country':['Canada','Mexico']} */
		own: FormControl<string | null | undefined>,

		/** A custom object containing fields paired with an array value of restrictions. Restricts the users that may view this app. Example: {'country':['Canada','Mexico']} */
		view: FormControl<string | null | undefined>,
	}
	export function CreateRestrictionsFormGroup() {
		return new FormGroup<RestrictionsFormProperties>({
			own: new FormControl<string | null | undefined>(undefined),
			view: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The revenue generated by this app */
	export interface Revenue {

		/**
		 * The total revenue generated for the developer by this app in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		developer: number;

		/**
		 * The total revenue generated by this app in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}

	/** The revenue generated by this app */
	export interface RevenueFormProperties {

		/**
		 * The total revenue generated for the developer by this app in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		developer: FormControl<number | null | undefined>,

		/**
		 * The total revenue generated by this app in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateRevenueFormGroup() {
		return new FormGroup<RevenueFormProperties>({
			developer: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Review */
	export interface Review {

		/**
		 * The Id of the App that owns this review
		 * Required
		 */
		appId: string;

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: string;

		/**
		 * The review's description. Limited to 2000 characters.
		 * Required
		 */
		description: string;

		/**
		 * The review's headline. Limited to 50 characters.
		 * Required
		 */
		headline: string;

		/**
		 * The rating given within this review. The rating is represented as an integer between 100 and 500 (1 - 5 stars)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rating: number;

		/**
		 * The date (in millis) this Review was posted
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		reportDate: string;

		/**
		 * The id for this review.
		 * Required
		 */
		reviewId: string;

		/**
		 * The current status of this review
		 * Required
		 */
		status: Status;

		/** The type for this review */
		type?: string | null;

		/** A User */
		user?: User;

		/** A User Account */
		userAccount?: UserAccount;

		/** The id of the user account that posted this review */
		userAccountId?: string | null;

		/**
		 * The id of the User that posted this review
		 * Required
		 */
		userId: string;
	}

	/** A Review */
	export interface ReviewFormProperties {

		/**
		 * The Id of the App that owns this review
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: FormControl<string | null | undefined>,

		/**
		 * The review's description. Limited to 2000 characters.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The review's headline. Limited to 50 characters.
		 * Required
		 */
		headline: FormControl<string | null | undefined>,

		/**
		 * The rating given within this review. The rating is represented as an integer between 100 and 500 (1 - 5 stars)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * The date (in millis) this Review was posted
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		reportDate: FormControl<string | null | undefined>,

		/**
		 * The id for this review.
		 * Required
		 */
		reviewId: FormControl<string | null | undefined>,

		/** The type for this review */
		type: FormControl<string | null | undefined>,

		/** The id of the user account that posted this review */
		userAccountId: FormControl<string | null | undefined>,

		/**
		 * The id of the User that posted this review
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateReviewFormGroup() {
		return new FormGroup<ReviewFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			headline: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reportDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reviewId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
			userAccountId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pages of review results */
	export interface ReviewPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of reviews for the current page
		 * Required
		 */
		list: Array<Review>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of review results */
	export interface ReviewPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateReviewPagesFormGroup() {
		return new FormGroup<ReviewPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Review_Entry {

		/**
		 * The date (in millis) of when this action was performed
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: string;

		/**
		 * The id of the review involved in this action
		 * Required
		 */
		reviewId: string;
	}
	export interface Review_EntryFormProperties {

		/**
		 * The date (in millis) of when this action was performed
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The id of the review involved in this action
		 * Required
		 */
		reviewId: FormControl<string | null | undefined>,
	}
	export function CreateReview_EntryFormGroup() {
		return new FormGroup<Review_EntryFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reviewId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pages of search results */
	export interface SearchPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of results for the current page
		 * Required
		 */
		list: Array<App>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of search results */
	export interface SearchPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateSearchPagesFormGroup() {
		return new FormGroup<SearchPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The statistic value */
	export interface Stat {

		/**
		 * The statistic value
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		value: string;
	}

	/** The statistic value */
	export interface StatFormProperties {

		/**
		 * The statistic value
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStatFormGroup() {
		return new FormGroup<StatFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current status of this review */
	export interface Status {

		/**
		 * A list of profanity found in this review
		 * Required
		 */
		profanity: Array<Profanity>;

		/**
		 * Text describing the reason for the current status
		 * Required
		 */
		reason: StatusReason;

		/**
		 * The current status value
		 * Required
		 */
		value: StatusValue;
	}

	/** The current status of this review */
	export interface StatusFormProperties {

		/**
		 * Text describing the reason for the current status
		 * Required
		 */
		reason: FormControl<StatusReason | null | undefined>,

		/**
		 * The current status value
		 * Required
		 */
		value: FormControl<StatusValue | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			reason: new FormControl<StatusReason | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<StatusValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StatusReason { profanity = 'profanity', spam = 'spam' }

	export enum StatusValue { pending = 'pending', spam = 'spam', flagged = 'flagged', approved = 'approved' }


	/** The total number of events for a particular field */
	export interface Total {

		/**
		 * The totals for the app
		 * Required
		 */
		apps: AppTotal;

		/**
		 * The end date for this total (in millis)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		end?: string | null;

		/**
		 * The start date for this total (in millis)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		start?: string | null;

		/**
		 * The totals for the field
		 * Required
		 */
		totals: DataTotal;
	}

	/** The total number of events for a particular field */
	export interface TotalFormProperties {

		/**
		 * The end date for this total (in millis)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		end: FormControl<string | null | undefined>,

		/**
		 * The start date for this total (in millis)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		start: FormControl<string | null | undefined>,
	}
	export function CreateTotalFormGroup() {
		return new FormGroup<TotalFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transaction for an app initiated by a user */
	export interface Transaction {

		/**
		 * The total amount paid in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount: number;

		/**
		 * The id of the app involved with this transaction
		 * Required
		 */
		appId: string;

		/** A custom JSON object that you can create and attach to this record */
		customData?: string | null;

		/**
		 * The date (in millis) of when this transaction occurred
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: string;

		/**
		 * The total amount paid to the developer in cents
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		developerAmount?: number | null;

		/**
		 * The id of the developer involved with this transaction
		 * Required
		 */
		developerId: string;

		/**
		 * The total amount paid to payment processing fees in cents
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		feeAmount?: number | null;

		/**
		 * The total amount paid to the marketplace owner in cents
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplaceAmount?: number | null;

		/**
		 * The id for the ownership associated with this transaction
		 * Required
		 */
		ownershipId: string;

		/**
		 * The id for this transaction
		 * Required
		 */
		transactionId: string;

		/**
		 * The type for this transaction
		 * Required
		 */
		type: TransactionType;

		/**
		 * The id of the user making the transaction
		 * Required
		 */
		userId: string;
	}

	/** A transaction for an app initiated by a user */
	export interface TransactionFormProperties {

		/**
		 * The total amount paid in cents
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The id of the app involved with this transaction
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/** A custom JSON object that you can create and attach to this record */
		customData: FormControl<string | null | undefined>,

		/**
		 * The date (in millis) of when this transaction occurred
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The total amount paid to the developer in cents
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		developerAmount: FormControl<number | null | undefined>,

		/**
		 * The id of the developer involved with this transaction
		 * Required
		 */
		developerId: FormControl<string | null | undefined>,

		/**
		 * The total amount paid to payment processing fees in cents
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		feeAmount: FormControl<number | null | undefined>,

		/**
		 * The total amount paid to the marketplace owner in cents
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplaceAmount: FormControl<number | null | undefined>,

		/**
		 * The id for the ownership associated with this transaction
		 * Required
		 */
		ownershipId: FormControl<string | null | undefined>,

		/**
		 * The id for this transaction
		 * Required
		 */
		transactionId: FormControl<string | null | undefined>,

		/**
		 * The type for this transaction
		 * Required
		 */
		type: FormControl<TransactionType | null | undefined>,

		/**
		 * The id of the user making the transaction
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			developerAmount: new FormControl<number | null | undefined>(undefined),
			developerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			marketplaceAmount: new FormControl<number | null | undefined>(undefined),
			ownershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TransactionType | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransactionType { payment = 'payment', refund = 'refund' }


	/** Pages of transaction results */
	export interface TransactionPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of paymnets for the current page
		 * Required
		 */
		list: Array<Transaction>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of transaction results */
	export interface TransactionPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateTransactionPagesFormGroup() {
		return new FormGroup<TransactionPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A User */
	export interface User {

		/**
		 * The date (in millis) of when this user was created
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created: string;

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: string;

		/** The user's email */
		email?: string | null;

		/** The user's name */
		name?: string | null;

		/** The type for this user */
		type?: string | null;

		/**
		 * The id of this user
		 * Required
		 */
		userId: string;
	}

	/** A User */
	export interface UserFormProperties {

		/**
		 * The date (in millis) of when this user was created
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * A custom JSON object that you can create and attach to this record
		 * Required
		 */
		customData: FormControl<string | null | undefined>,

		/** The user's email */
		email: FormControl<string | null | undefined>,

		/** The user's name */
		name: FormControl<string | null | undefined>,

		/** The type for this user */
		type: FormControl<string | null | undefined>,

		/**
		 * The id of this user
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A User Account */
	export interface UserAccount {

		/** A custom JSON object that you can create and attach to this record */
		customData?: string | null;

		/** The contact email address */
		email?: string | null;

		/** The name for the account */
		name?: string | null;

		/**
		 * The id of this user account
		 * Required
		 */
		userAccountId: string;

		/**
		 * The id of this user that this account belongs to
		 * Required
		 */
		userId: string;
	}

	/** A User Account */
	export interface UserAccountFormProperties {

		/** A custom JSON object that you can create and attach to this record */
		customData: FormControl<string | null | undefined>,

		/** The contact email address */
		email: FormControl<string | null | undefined>,

		/** The name for the account */
		name: FormControl<string | null | undefined>,

		/**
		 * The id of this user account
		 * Required
		 */
		userAccountId: FormControl<string | null | undefined>,

		/**
		 * The id of this user that this account belongs to
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserAccountFormGroup() {
		return new FormGroup<UserAccountFormProperties>({
			customData: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pages of userAccount results */
	export interface UserAccountPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of userAccounts for the current page
		 * Required
		 */
		list: Array<UserAccount>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of userAccount results */
	export interface UserAccountPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateUserAccountPagesFormGroup() {
		return new FormGroup<UserAccountPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pages of user results */
	export interface UserPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of users for the current page
		 * Required
		 */
		list: Array<User>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of user results */
	export interface UserPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateUserPagesFormGroup() {
		return new FormGroup<UserPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pages of AppVersion results */
	export interface VersionPages {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * An array of apps for the current page
		 * Required
		 */
		list: Array<AppVersion>;

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages?: number | null;
	}

	/** Pages of AppVersion results */
	export interface VersionPagesFormProperties {

		/**
		 * The total number of results
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The current page number for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available for this result set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,
	}
	export function CreateVersionPagesFormGroup() {
		return new FormGroup<VersionPagesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The virus scan results for this file */
	export interface VirusScan {

		/**
		 * The date (in milliseconds) when this file finished it's scan
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		finished?: string | null;

		/** The list of viruses found in this file */
		foundViruses?: Array<FoundVirus>;

		/**
		 * The date (in milliseconds) when this file started it's scan
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		started?: string | null;

		/**
		 * The status of this scan. Can be NOT_SCANNED, CLEAN or DIRTY
		 * Required
		 */
		status: string;
	}

	/** The virus scan results for this file */
	export interface VirusScanFormProperties {

		/**
		 * The date (in milliseconds) when this file finished it's scan
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * The date (in milliseconds) when this file started it's scan
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * The status of this scan. Can be NOT_SCANNED, CLEAN or DIRTY
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateVirusScanFormGroup() {
		return new FormGroup<VirusScanFormProperties>({
			finished: new FormControl<string | null | undefined>(undefined),
			started: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a paginated list of APPROVED or SUSPENDED apps
		 * - Results are paginated and the default is value is 1000 if no limit is provided
		 * - If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace
		 * Get apps
		 * @param {string} query A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'
		 * @param {string} sort A sort document. Example: {'name':1} sorts the results by name in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} userId The unique id of the user requesting this resource
		 * @param {boolean} isOwner Whether this result should only contain apps that are owned by this user
		 * @return {void} 
		 */
		AppsGetByQueryAndSortAndPageNumberAndLimitAndUserIdAndIsOwner(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, userId: string | null | undefined, isOwner: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apps?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&isOwner=' + isOwner, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new app for this developer
		 * - This method is called on behalf of a developer.
		 * - Price is required if the model is 'single' or 'recurring'
		 * - Returns the newly created app
		 * Post apps
		 * @param {string} developerId The unique id of the developer that is adding this app
		 * @param {string} name The name of the app
		 * @param {string} type The type for this app
		 * @param {string} model A JSON object representing the pricing model type for this app
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @param {string} attributes A custom set of app attributes defined by the administrator and attached to this app
		 * @param {string} restrict JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app
		 * @param {string} allow JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app
		 * @param {string} access JSON array of data access requirements
		 * @return {void} 
		 */
		AppsPostByDeveloperIdAndNameAndTypeAndModelAndCustomDataAndAttributesAndRestrictAndAllowAndAccess(developerId: string, name: string, type: string | null | undefined, model: string | null | undefined, customData: string | null | undefined, attributes: string | null | undefined, restrict: string | null | undefined, allow: string | null | undefined, access: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps?developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)) + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)) + '&restrict=' + (restrict == null ? '' : encodeURIComponent(restrict)) + '&allow=' + (allow == null ? '' : encodeURIComponent(allow)) + '&access=' + (access == null ? '' : encodeURIComponent(access)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single APPROVED or SUSPENDED app
		 * - A 'view' event is recorded when trackViews is set to true
		 * Get apps/bySafeName/{safeName}
		 * @param {string} safeName The safeName of the App to be located
		 * @param {string} userId The unique id of the user that is requesting this resource
		 * @param {boolean} trackViews Whether this call should be tracked as a 'view' for this app. Default is false.
		 * @return {void} 
		 */
		AppsBySafeName_safeNameGetByUserIdAndTrackViews(safeName: string, userId: string | null | undefined, trackViews: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apps/bySafeName/' + (safeName == null ? '' : encodeURIComponent(safeName)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&trackViews=' + trackViews, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches through the text of fields to find APPROVED or SUSPENDED apps
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get apps/textSearch
		 * @param {string} query A query document. Example: {'name':'MyApp'} matches all the documents that have the name 'MyApp'
		 * @param {string} text The text to search for.
		 * @param {string} fields A JSON array containing all the fields to be searched through. Example: ['name', 'customData.description']
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} userId The unique id of the user requesting this resource
		 * @param {boolean} isOwned Whether this result should only contain apps that are owned by this user
		 * @return {void} 
		 */
		AppsTextSearchGetByQueryAndTextAndFieldsAndPageNumberAndLimitAndUserIdAndIsOwned(query: string | null | undefined, text: string, fields: string, pageNumber: number | null | undefined, limit: number | null | undefined, userId: string | null | undefined, isOwned: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apps/textSearch?query=' + (query == null ? '' : encodeURIComponent(query)) + '&text=' + (text == null ? '' : encodeURIComponent(text)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&pageNumber=' + pageNumber + '&limit=' + limit + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&isOwned=' + isOwned, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of AppVersions
		 * - Results are paginated when limit is set, otherwise all results are returned
		 * - If no query is specified, returns all AppVersions within the marketplace
		 * - Only returns AppVersions owned by this developer
		 * Get apps/versions
		 * @param {string} query A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'
		 * @param {string} sort A sort document. Example: {'name':1} sorts the results by name in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} developerId The unique id of the developer requesting this resource
		 * @return {void} 
		 */
		AppsVersionsGetByQueryAndSortAndPageNumberAndLimitAndDeveloperId(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, developerId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apps/versions?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes app and all versions
		 * - This method is called on behalf of a developer.
		 * Delete apps/{appId}
		 * @param {string} appId The id of the App to be removed
		 * @param {string} developerId The unique id of the developer that is removing this app
		 * @return {void} 
		 */
		Apps_appIdDeleteByDeveloperId(appId: string, developerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single APPROVED or SUSPENDED app
		 * - A 'view' event is recorded when trackViews is set to true
		 * Get apps/{appId}
		 * @param {string} appId The id of the App to be located
		 * @param {string} userId The unique id of the user that is requesting this resource
		 * @param {boolean} trackViews Whether this call should be tracked as a 'view' for this app. Default is false.
		 * @return {void} 
		 */
		Apps_appIdGetByUserIdAndTrackViews(appId: string, userId: string | null | undefined, trackViews: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&trackViews=' + trackViews, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the live app to another, previously approved version
		 * - This method is called on behalf of a developer.
		 * Post apps/{appId}/live
		 * @param {string} appId The id of the App to be changed
		 * @param {string} developerId The unique id of the developer that is changing this AppVersion
		 * @param {string} version The new version of the live App
		 * @return {void} 
		 */
		Apps_appIdLivePostByDeveloperIdAndVersion(appId: string, developerId: string, version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/live&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publishes the current working version of the app to the marketplace
		 * - This method is called on behalf of a developer.
		 * - Only effects the current working version of the app.
		 * Post apps/{appId}/publish
		 * @param {string} appId The id of the app to be published
		 * @param {string} developerId The unique id of the developer that is modifying this app
		 * @param {number} version The version of the app to be published
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} autoApprove If true, this AppVersion is automatically approved and becomes immediately available to end users
		 * @return {void} 
		 */
		Apps_appIdPublishPostByDeveloperIdAndVersionAndAutoApprove(appId: string, developerId: string, version: number, autoApprove: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/publish&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&version=' + version + '&autoApprove=' + autoApprove, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes AppVersion
		 * - This method is called on behalf of a developer.
		 * Delete apps/{appId}/versions/{version}
		 * @param {string} appId The id of the App to be removed
		 * @param {string} version The version of the App to be removed
		 * @param {string} developerId The unique id of the developer that is removing this app
		 * @return {void} 
		 */
		Apps_appIdVersions_versionDeleteByDeveloperId(appId: string, version: string, developerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single AppVersion
		 * - Only returns AppVersions owned by this developer
		 * Get apps/{appId}/versions/{version}
		 * @param {string} appId The id of the App to be located
		 * @param {number} version The version number of the app
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} developerId The unique id of the developer that is requesting this resource
		 * @return {void} 
		 */
		Apps_appIdVersions_versionGetByDeveloperId(appId: string, version: number, developerId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/versions/' + version + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the app fields or creates a new version
		 * - This method is called on behalf of a developer.
		 * - Price and is required if the model is 'single' or 'recurring'
		 * - Returns the newly updated app
		 * - This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update).
		 * Patch apps/{appId}/versions/{version}
		 * @param {string} appId The id of the App to be updated
		 * @param {string} version The version of the App to be updated
		 * @param {string} developerId The unique id of the developer that is updating this app
		 * @param {string} name The name of the app
		 * @param {string} type The type for this app
		 * @param {string} model A JSON object representing the pricing model type for this app
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @param {string} attributes A custom set of app attributes defined by the administrator and attached to this app
		 * @param {string} restrict JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app
		 * @param {string} allow JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app
		 * @param {string} access JSON array of data access requirements
		 * @param {string} approvalRequired False if updates should skip the approval process and be available immediately. Default is True
		 * @return {void} 
		 */
		Apps_appIdVersions_versionPatchByDeveloperIdAndNameAndTypeAndModelAndCustomDataAndAttributesAndRestrictAndAllowAndAccessAndApprovalRequired(appId: string, version: string, developerId: string, name: string | null | undefined, type: string | null | undefined, model: string | null | undefined, customData: string | null | undefined, attributes: string | null | undefined, restrict: string | null | undefined, allow: string | null | undefined, access: string | null | undefined, approvalRequired: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)) + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)) + '&restrict=' + (restrict == null ? '' : encodeURIComponent(restrict)) + '&allow=' + (allow == null ? '' : encodeURIComponent(allow)) + '&access=' + (access == null ? '' : encodeURIComponent(access)) + '&approvalRequired=' + (approvalRequired == null ? '' : encodeURIComponent(approvalRequired)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the app or creates a new version
		 * - This method is called on behalf of a developer.
		 * - Price and is required if the model is 'single' or 'recurring'
		 * - Returns the newly updated app
		 * - This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).
		 * Post apps/{appId}/versions/{version}
		 * @param {string} appId The id of the App to be updated
		 * @param {string} version The version of the App to be updated
		 * @param {string} developerId The unique id of the developer that is updating this app
		 * @param {string} name The name of the app
		 * @param {string} type The type for this app
		 * @param {string} model A JSON object representing the pricing model type for this app
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @param {string} attributes A custom set of app attributes defined by the administrator and attached to this app
		 * @param {string} restrict JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app
		 * @param {string} allow JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app
		 * @param {string} access JSON array of data access requirements
		 * @param {string} approvalRequired False if updates should skip the approval process and be available immediately. Default is True
		 * @return {void} 
		 */
		Apps_appIdVersions_versionPostByDeveloperIdAndNameAndTypeAndModelAndCustomDataAndAttributesAndRestrictAndAllowAndAccessAndApprovalRequired(appId: string, version: string, developerId: string, name: string | null | undefined, type: string | null | undefined, model: string | null | undefined, customData: string | null | undefined, attributes: string | null | undefined, restrict: string | null | undefined, allow: string | null | undefined, access: string | null | undefined, approvalRequired: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)) + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)) + '&restrict=' + (restrict == null ? '' : encodeURIComponent(restrict)) + '&allow=' + (allow == null ? '' : encodeURIComponent(allow)) + '&access=' + (access == null ? '' : encodeURIComponent(access)) + '&approvalRequired=' + (approvalRequired == null ? '' : encodeURIComponent(approvalRequired)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows a developer or administrator to change the status of apps
		 * Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change
		 * Post apps/{appId}/versions/{version}/status
		 * @param {string} appId The id of the App to be updated
		 * @param {number} version The version of the App to be updated
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} developerId The unique id of the developer that is modifying this app
		 * @param {Apps_appIdVersions_versionStatusPostByDeveloperIdAndStatusAndModifiedByAndReasonStatus} status The new status for this app. Can be either 'inReview', 'approved', 'suspended' or 'rejected'
		 * @param {Apps_appIdVersions_versionStatusPostByDeveloperIdAndStatusAndModifiedByAndReasonModifiedBy} modifiedBy The role initiating this status change. Can be either 'developer' or 'administrator' (default)
		 * @param {string} reason The reason for this status change
		 * @return {void} 
		 */
		Apps_appIdVersions_versionStatusPostByDeveloperIdAndStatusAndModifiedByAndReason(appId: string, version: number, developerId: string | null | undefined, status: Apps_appIdVersions_versionStatusPostByDeveloperIdAndStatusAndModifiedByAndReasonStatus | null | undefined, modifiedBy: Apps_appIdVersions_versionStatusPostByDeveloperIdAndStatusAndModifiedByAndReasonModifiedBy | null | undefined, reason: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/versions/' + version + '/status&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&status=' + status + '&modifiedBy=' + modifiedBy + '&reason=' + (reason == null ? '' : encodeURIComponent(reason)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a payment for an app on behalf of a user
		 * - Results are returned for the market provided within the basic authentication credentials
		 * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
		 * Post custom-gateway/payment/{ownershipId}
		 * @param {string} ownershipId The id of the ownership record involved in this transaction
		 * @param {number} amount The total amount paid in cents
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} date The date (in milliseconds) of when this payment was made
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} feeAmount The fee (in cents) paid to a payment processors or third parties to process this payment. Default is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} marketplaceAmount The amount (in cents) paid to the marketplace owner as a commission for the purchase of this app. Defaults based on the commission amount configured for this marketplace.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} developerAmount The amount (in cents) paid to the owner of the app. Defaults based on the commission amount configured for this marketplace.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} customData A custom JSON object to attach to this transaction
		 * @return {void} 
		 */
		Custom_gatewayPayment_ownershipIdPostByAmountAndDateAndFeeAmountAndMarketplaceAmountAndDeveloperAmountAndCustomData(ownershipId: string, amount: number, date: string | null | undefined, feeAmount: number | null | undefined, marketplaceAmount: number | null | undefined, developerAmount: number | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'custom-gateway/payment/' + (ownershipId == null ? '' : encodeURIComponent(ownershipId)) + '&amount=' + amount + '&date=' + date + '&feeAmount=' + feeAmount + '&marketplaceAmount=' + marketplaceAmount + '&developerAmount=' + developerAmount + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fully or partially refund payment for an app on behalf of a user
		 * - Results are returned for the market provided within the basic authentication credentials
		 * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
		 * Post custom-gateway/refund/{ownershipId}
		 * @param {string} ownershipId The id of the ownership record involved in this transaction
		 * @param {number} amount The total amount refunded in cents
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} date The date (in milliseconds) of when this refund was made
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} feeAmount The fee (in cents) recovered from a payment processor or third party to process this payment. The default value is 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} marketplaceAmount The amount (in cents) recovered from the marketplace owner as a commission refund for the purchase of this app
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} developerAmount The amount (in cents) recovered from the owner of the app
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} customData A custom JSON object to attach to this transaction
		 * @return {void} 
		 */
		Custom_gatewayRefund_ownershipIdPostByAmountAndDateAndFeeAmountAndMarketplaceAmountAndDeveloperAmountAndCustomData(ownershipId: string, amount: number, date: string | null | undefined, feeAmount: number | null | undefined, marketplaceAmount: number | null | undefined, developerAmount: number | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'custom-gateway/refund/' + (ownershipId == null ? '' : encodeURIComponent(ownershipId)) + '&amount=' + amount + '&date=' + date + '&feeAmount=' + feeAmount + '&marketplaceAmount=' + marketplaceAmount + '&developerAmount=' + developerAmount + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of developerAccounts
		 * - Results are paginated and the default is value is 1000 if no limit is provided
		 * Get developerAccounts
		 * @param {string} query A query document. Example: {'name':'NASA'} matches all the developerAccounts that have the name 'NASA'
		 * @param {string} sort A sort document. Example: {'name':1} sorts the results by name in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		DeveloperAccountsGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'developerAccounts?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the developer account
		 * Delete developerAccounts/{developerAccountId}
		 * @param {string} developerAccountId The id of the developer account to be updated
		 * @return {void} 
		 */
		DeveloperAccounts_developerAccountIdDelete(developerAccountId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'developerAccounts/' + (developerAccountId == null ? '' : encodeURIComponent(developerAccountId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single developer account
		 * Get developerAccounts/{developerAccountId}
		 * @param {string} developerAccountId The id of the developer account to be located
		 * @return {void} 
		 */
		DeveloperAccounts_developerAccountIdGet(developerAccountId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'developerAccounts/' + (developerAccountId == null ? '' : encodeURIComponent(developerAccountId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the developer account fields
		 * Patch developerAccounts/{developerAccountId}
		 * @param {string} developerAccountId The id of the developer account to be updated
		 * @param {string} developerId The id of the developer that this account belongs to
		 * @param {string} email The contact email address
		 * @param {string} name The name for the account
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		DeveloperAccounts_developerAccountIdPatchByDeveloperIdAndEmailAndNameAndCustomData(developerAccountId: string, developerId: string, email: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'developerAccounts/' + (developerAccountId == null ? '' : encodeURIComponent(developerAccountId)) + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the developer account or adds the developer account if it doesn't exist
		 * Post developerAccounts/{developerAccountId}
		 * @param {string} developerAccountId The id of the developer account to be updated
		 * @param {string} developerId The id of the developer that this account belongs to
		 * @param {string} email The contact email address
		 * @param {string} name The name for the account
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		DeveloperAccounts_developerAccountIdPostByDeveloperIdAndEmailAndNameAndCustomData(developerAccountId: string, developerId: string, email: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'developerAccounts/' + (developerAccountId == null ? '' : encodeURIComponent(developerAccountId)) + '&developerId=' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of developers
		 * - Results are paginated and the default is value is 100 if no limit is provided
		 * Get developers
		 * @param {string} query A query document. Example: {'name':'John'} matches all the developers that have the name 'John'
		 * @param {string} sort A sort document. Example: {'name':1} sorts the results by name in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		DevelopersGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'developers?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a single developer
		 * Delete developers/{developerId}
		 * @param {string} developerId The id of the developer to be removed
		 * @return {void} 
		 */
		Developers_developerIdDelete(developerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'developers/' + (developerId == null ? '' : encodeURIComponent(developerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single developer
		 * Get developers/{developerId}
		 * @param {string} developerId The id of the developer to be located
		 * @return {void} 
		 */
		Developers_developerIdGet(developerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'developers/' + (developerId == null ? '' : encodeURIComponent(developerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the developer fields
		 * Patch developers/{developerId}
		 * @param {string} developerId The id of the developer to be located
		 * @param {string} type The type for this developer
		 * @param {string} email The developer's email
		 * @param {string} username The developer's username
		 * @param {string} name The developer's name
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		Developers_developerIdPatchByTypeAndEmailAndUsernameAndNameAndCustomData(developerId: string, type: string | null | undefined, email: string | null | undefined, username: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'developers/' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the developer record or adds the developer if it doesn't exist
		 * Post developers/{developerId}
		 * @param {string} developerId The id of the developer to be located
		 * @param {string} type The type for this developer
		 * @param {string} email The developer's email
		 * @param {string} username The developer's username
		 * @param {string} name The developer's name
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		Developers_developerIdPostByTypeAndEmailAndUsernameAndNameAndCustomData(developerId: string, type: string | null | undefined, email: string | null | undefined, username: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'developers/' + (developerId == null ? '' : encodeURIComponent(developerId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an event
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get events/{eventId}
		 * @param {string} eventId The id of the event
		 * @return {void} 
		 */
		Events_eventIdGet(eventId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of files
		 * Get files
		 * @param {string} query A query document. Example: {'name':'file.txt'} matches all the files that have the name 'file.txt'
		 * @param {string} sort A sort document. Example: {'name':1} sorts the results by name in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		FilesGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details for a file.
		 * Get files/byIdOrUrl
		 * @param {string} fileIdOrUrl The fileId or fileUrl of the file to be returned
		 * @return {void} 
		 */
		FilesByIdOrUrlGetByFileIdOrUrl(fileIdOrUrl: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/byIdOrUrl?fileIdOrUrl=' + (fileIdOrUrl == null ? '' : encodeURIComponent(fileIdOrUrl)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * A signed URL for downloading a private file can be returned by providing the fileId.
		 * Get files/download
		 * @param {string} fileId The URL of the file to be uploaded
		 * @param {number} validSeconds The number of seconds that this signed URL should be valid for. The default is 60.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		FilesDownloadGetByFileIdAndValidSeconds(fileId: string, validSeconds: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/download?fileId=' + (fileId == null ? '' : encodeURIComponent(fileId)) + '&validSeconds=' + validSeconds, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads a file from a URL
		 * - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
		 * - This method is called on behalf of a developer.
		 * Post files/url
		 * @param {string} url The URL of the file to be uploaded
		 * @param {boolean} isPrivate If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.
		 * @return {void} 
		 */
		FilesUrlPostByUrlAndIsPrivate(url: string, isPrivate: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/url?url=' + (url == null ? '' : encodeURIComponent(url)) + '&isPrivate=' + isPrivate, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the current marketplace
		 * Get markets/this
		 * @return {void} 
		 */
		MarketsThisGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'markets/this', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of app licenses
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get ownership
		 * @param {string} query A query document. Example: {'userId':'12'} matches all the ownership records that have the userId '12'.
		 * @param {string} sort A sort document. Example: {'date':1} sorts the results by date in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		OwnershipGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ownership?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Aquires an app license for a user (installs app)
		 * - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called
		 * Post ownership/install
		 * @param {string} appId The id of the App being owned
		 * @param {string} userId The id of the User requesting to own the App
		 * @param {string} modelId The id of the model associated with this ownership request
		 * @param {string} model A custom model that will override the app's default model for this install
		 * @param {string} customData A custom JSON object to attach to this ownership record
		 * @return {void} 
		 */
		OwnershipInstallPostByAppIdAndUserIdAndModelIdAndModelAndCustomData(appId: string, userId: string, modelId: string | null | undefined, model: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ownership/install?appId=' + (appId == null ? '' : encodeURIComponent(appId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&modelId=' + (modelId == null ? '' : encodeURIComponent(modelId)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uninstalls a license for a particular user and app (uninstalls app)
		 * - This method is called on behalf of a user - User data and statistics are recorded when this method is called
		 * Post ownership/uninstall/{ownershipId}
		 * @param {string} ownershipId The id of the ownership to be unintalled
		 * @param {string} userId The id of the User requesting to uninstall the App
		 * @param {boolean} cancelOwnership True if this app will require payment to be re-installed. Default is false
		 * @param {string} customData A custom JSON object to attach to this ownership record
		 * @return {void} 
		 */
		OwnershipUninstall_ownershipIdPostByUserIdAndCancelOwnershipAndCustomData(ownershipId: string, userId: string, cancelOwnership: boolean | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ownership/uninstall/' + (ownershipId == null ? '' : encodeURIComponent(ownershipId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&cancelOwnership=' + cancelOwnership + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an ownership record
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get ownership/{ownershipId}
		 * @param {string} ownershipId The id belonging to the ownership record
		 * @return {void} 
		 */
		Ownership_ownershipIdGet(ownershipId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ownership/' + (ownershipId == null ? '' : encodeURIComponent(ownershipId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates ownership fields
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Patch ownership/{ownershipId}
		 * @param {string} ownershipId The id of the ownership to be updated
		 * @param {string} customData Custom JSON object that will be attached to this ownership record
		 * @param {string} expires The date (in millis) of when this app ownership expires
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		Ownership_ownershipIdPatchByCustomDataAndExpires(ownershipId: string, customData: string | null | undefined, expires: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'ownership/' + (ownershipId == null ? '' : encodeURIComponent(ownershipId)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)) + '&expires=' + expires, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an ownership record
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Post ownership/{ownershipId}
		 * @param {string} ownershipId The id of the ownership to be updated
		 * @param {string} customData Custom JSON object that will be attached to this ownership record
		 * @param {string} expires The date (in millis) of when this app ownership expires
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		Ownership_ownershipIdPostByCustomDataAndExpires(ownershipId: string, customData: string | null | undefined, expires: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ownership/' + (ownershipId == null ? '' : encodeURIComponent(ownershipId)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)) + '&expires=' + expires, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes permission that allows the app to access this user's data
		 * Delete permission/apps/{appId}
		 * @param {string} appId The id of the app
		 * @param {string} userId The id of the user
		 * @return {void} 
		 */
		PermissionApps_appIdDeleteByUserId(appId: string, userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'permission/apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permission that allows the app to access this user's data
		 * Get permission/apps/{appId}
		 * @param {string} appId The id of the app
		 * @param {string} userId The id of the user
		 * @return {void} 
		 */
		PermissionApps_appIdGetByUserId(appId: string, userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'permission/apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds permission to allow the app to access this user's data
		 * Post permission/apps/{appId}
		 * @param {string} appId The id of the app
		 * @param {string} userId The id of the user
		 * @param {string} date The time (in milliseconds) of when the user agreed to the access request
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} ip The ip address of the user agreeing to the access request
		 * @return {void} 
		 */
		PermissionApps_appIdPostByUserIdAndDateAndIp(appId: string, userId: string, date: string | null | undefined, ip: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'permission/apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&date=' + date + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
		 * - Results are paginated and the default is value is 100 if no limit is provided
		 * Get reviews
		 * @param {string} query A query document. Example: {'rating': 500} matches all the reviews that have a rating of 500. 
		 * @param {string} sort A sort document. Example: {'rating':1} sorts the results by rating in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ReviewsGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reviews?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post a review from a User and returns the new post
		 * - Only authenticated users are able to post reviews
		 * - Returns the newly created review
		 * Post reviews
		 * @param {string} appId The id of the App that will own this review
		 * @param {string} userId The id of the User that is posting this review
		 * @param {string} userAccountId The id of the User account that is posting this review
		 * @param {string} headline The review's headline. Limited to 50 characters.
		 * @param {number} rating The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
		 *     Minimum: 0    Maximum: 500
		 * @param {string} description The review's description. Limited to 2000 characters.
		 * @param {string} type The type for this review
		 * @param {boolean} mustOwnApp True if a review can be created only by a user that has owned the app. The default is True.
		 * @param {boolean} autoApprove True if the review should be automatically approved. The default is False.
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		ReviewsPostByAppIdAndUserIdAndUserAccountIdAndHeadlineAndRatingAndDescriptionAndTypeAndMustOwnAppAndAutoApproveAndCustomData(appId: string, userId: string, userAccountId: string | null | undefined, headline: string, rating: number, description: string, type: string | null | undefined, mustOwnApp: boolean | null | undefined, autoApprove: boolean | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reviews?appId=' + (appId == null ? '' : encodeURIComponent(appId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&userAccountId=' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)) + '&headline=' + (headline == null ? '' : encodeURIComponent(headline)) + '&rating=' + rating + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&mustOwnApp=' + mustOwnApp + '&autoApprove=' + autoApprove + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a review
		 * - Only the review author is able to remove their review
		 * Delete reviews/{reviewId}
		 * @param {string} reviewId The id of the Review to be updated
		 * @param {string} userId The id of the User that is removing this review
		 * @param {string} userAccountId The id of the User account that is emoving this review
		 * @return {void} 
		 */
		Reviews_reviewIdDeleteByUserIdAndUserAccountId(reviewId: string, userId: string, userAccountId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&userAccountId=' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find a Review within a particular App and marketplace
		 * Get reviews/{reviewId}
		 * @param {string} reviewId The id of the review to be located
		 * @return {void} 
		 */
		Reviews_reviewIdGet(reviewId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a review fields
		 * - Only the review author is able to update their review
		 * - Returns the newly updated review
		 * Patch reviews/{reviewId}
		 * @param {string} reviewId The id of the Review to be updated
		 * @param {string} userId The id of the User that is updating this review
		 * @param {string} userAccountId The id of the User account that is posting this review
		 * @param {string} headline The review's headline. Limited to 50 characters.
		 * @param {number} rating The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
		 *     Minimum: 0    Maximum: 500
		 * @param {string} description The review's description. Limited to 2000 characters.
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		Reviews_reviewIdPatchByUserIdAndUserAccountIdAndHeadlineAndRatingAndDescriptionAndCustomData(reviewId: string, userId: string, userAccountId: string | null | undefined, headline: string | null | undefined, rating: number | null | undefined, description: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&userAccountId=' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)) + '&headline=' + (headline == null ? '' : encodeURIComponent(headline)) + '&rating=' + rating + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a review from a User and returns the new post
		 * - Only the review author is able to update their review
		 * - Returns the newly updated review
		 * Post reviews/{reviewId}
		 * @param {string} reviewId The id of the Review to be updated
		 * @param {string} userId The id of the User that is updating this review
		 * @param {string} userAccountId The id of the User account that is posting this review
		 * @param {string} headline The review's headline. Limited to 50 characters.
		 * @param {number} rating The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
		 *     Minimum: 0    Maximum: 500
		 * @param {string} description The review's description. Limited to 2000 characters.
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		Reviews_reviewIdPostByUserIdAndUserAccountIdAndHeadlineAndRatingAndDescriptionAndCustomData(reviewId: string, userId: string, userAccountId: string, headline: string, rating: number, description: string, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&userAccountId=' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)) + '&headline=' + (headline == null ? '' : encodeURIComponent(headline)) + '&rating=' + rating + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Increments a statistics field
		 * increment a statistics field
		 * Post stats/increment/{field}
		 * @param {string} field The field to be incremented
		 * @param {string} appId The id of the app associated with this statistic value
		 * @param {string} userId The id of the user that is performing the action
		 * @param {number} value The increment amount. Default is 1 if no value is provided.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} date The date (in millis) for when this increment occurred. The default is the current date if no value is provided.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		StatsIncrement_fieldPostByAppIdAndUserIdAndValueAndDate(field: string, appId: string, userId: string | null | undefined, value: number | null | undefined, date: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stats/increment/' + (field == null ? '' : encodeURIComponent(field)) + '&appId=' + (appId == null ? '' : encodeURIComponent(appId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&value=' + value + '&date=' + date, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a timeseries for a particular field
		 * Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]
		 * Get stats/series/{period}/{fields}
		 * @param {StatsSeries_period_fieldsGetByStartAndEndAndQueryPeriod} period The period for the series (day or month)
		 * @param {string} fields The field to be graphed. This also be a comma separated list of fields and the result will be a single timeseries containing the sum of all fields.
		 * @param {string} start The start date for this series (in millis)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} end The end date for this series (in millis)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} query A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112
		 * @return {void} 
		 */
		StatsSeries_period_fieldsGetByStartAndEndAndQuery(period: StatsSeries_period_fieldsGetByStartAndEndAndQueryPeriod, fields: string, start: string | null | undefined, end: string | null | undefined, query: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/series/' + period + '/' + (fields == null ? '' : encodeURIComponent(fields)) + '&start=' + start + '&end=' + end + '&query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the total number of events for a particular field.
		 * Get stats/total
		 * @param {string} fields A comma seperated list of all the fields to be returned in the total (available by default: dislikes, likes, reviews, totalSales, developerSales, marketplaceSales, downloads, ownerships, views)
		 * @param {string} query A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112
		 * @param {string} start The start date for this total (in millis)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} end The end date for this total (in millis)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		StatsTotalGetByFieldsAndQueryAndStartAndEnd(fields: string, query: string | null | undefined, start: string | null | undefined, end: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/total?fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&start=' + start + '&end=' + end, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a developers connected Stripe accounts
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get stripe-gateway/developer/{developerId}/accounts
		 * @param {string} developerId The id of the developer connecting their Stripe account
		 * @return {void} 
		 */
		Stripe_gatewayDeveloper_developerIdAccountsGet(developerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stripe-gateway/developer/' + (developerId == null ? '' : encodeURIComponent(developerId)) + '/accounts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a temporary URL to allow a developer to connect their Stripe account
		 * - Results are returned for the market provided within the basic authentication credentials
		 * - The URL generated by this method is only valid for 48 hours.
		 * Post stripe-gateway/developer/{developerId}/accounts
		 * @param {string} developerId The id of the developer connecting their Stripe account
		 * @param {string} redirectUrl The URL to redirect this developer after they have connected their Stripe account
		 * @return {void} 
		 */
		Stripe_gatewayDeveloper_developerIdAccountsPostByRedirectUrl(developerId: string, redirectUrl: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stripe-gateway/developer/' + (developerId == null ? '' : encodeURIComponent(developerId)) + '/accounts&redirectUrl=' + (redirectUrl == null ? '' : encodeURIComponent(redirectUrl)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disconnects a developer's Stripe account
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Delete stripe-gateway/developer/{developerId}/accounts/{stripeId}
		 * @param {string} developerId The id of the developer disconnecting their Stripe account
		 * @param {string} stripeId The id of the stripe account to disconnect
		 * @return {void} 
		 */
		Stripe_gatewayDeveloper_developerIdAccounts_stripeIdDelete(developerId: string, stripeId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'stripe-gateway/developer/' + (developerId == null ? '' : encodeURIComponent(developerId)) + '/accounts/' + (stripeId == null ? '' : encodeURIComponent(stripeId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns credit cards for this user
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get stripe-gateway/user/{userId}/cards
		 * @param {string} userId The id of the user requesting their credit cards
		 * @return {void} 
		 */
		Stripe_gatewayUser_userIdCardsGet(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stripe-gateway/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/cards', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds credit card for this user
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Post stripe-gateway/user/{userId}/cards
		 * @param {string} userId The id of the user adding their credit card
		 * @param {string} token The Stripe token returned by the Stripe.js Stripe.card.createToken call
		 * @param {boolean} isDefault Set to true if this should be set to be the default credit card
		 * @return {void} 
		 */
		Stripe_gatewayUser_userIdCardsPostByTokenAndIsDefault(userId: string, token: string, isDefault: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stripe-gateway/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/cards&token=' + (token == null ? '' : encodeURIComponent(token)) + '&isDefault=' + isDefault, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a credit card for a user
		 * Delete stripe-gateway/user/{userId}/cards/{cardId}
		 * @param {string} userId The id of the user removing their credit card
		 * @param {string} cardId The id of the credit card to remove
		 * @return {void} 
		 */
		Stripe_gatewayUser_userIdCards_cardIdDelete(userId: string, cardId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'stripe-gateway/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/cards/' + (cardId == null ? '' : encodeURIComponent(cardId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a credit card for this user
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Post stripe-gateway/user/{userId}/cards/{cardId}
		 * @param {string} userId The id of the user adding their credit card
		 * @param {string} cardId The id of the card to be updated
		 * @param {boolean} isDefault Set to true if this should be set to be the default credit card
		 * @param {string} address_city The card holder's city
		 * @param {string} address_country The card holder's country
		 * @param {string} address_line1 The card holder's street address
		 * @param {string} address_line2 The card holder's street address
		 * @param {string} address_state The card holder's city state/province
		 * @param {string} address_zip The card holder's zip/postal code
		 * @return {void} 
		 */
		Stripe_gatewayUser_userIdCards_cardIdPostByIsDefaultAndAddress_cityAndAddress_countryAndAddress_line1AndAddress_line2AndAddress_stateAndAddress_zip(userId: string, cardId: string, isDefault: boolean | null | undefined, address_city: string | null | undefined, address_country: string | null | undefined, address_line1: string | null | undefined, address_line2: string | null | undefined, address_state: string | null | undefined, address_zip: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stripe-gateway/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/cards/' + (cardId == null ? '' : encodeURIComponent(cardId)) + '&isDefault=' + isDefault + '&address_city=' + (address_city == null ? '' : encodeURIComponent(address_city)) + '&address_country=' + (address_country == null ? '' : encodeURIComponent(address_country)) + '&address_line1=' + (address_line1 == null ? '' : encodeURIComponent(address_line1)) + '&address_line2=' + (address_line2 == null ? '' : encodeURIComponent(address_line2)) + '&address_state=' + (address_state == null ? '' : encodeURIComponent(address_state)) + '&address_zip=' + (address_zip == null ? '' : encodeURIComponent(address_zip)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of transactions
		 * - Results are paginated and the default is value is 100 if no limit is provided
		 * Get transactions
		 * @param {string} query A query document. Example: {'userId':'1'} matches all the transactions that have the userId '1'.
		 * @param {string} sort A sort document. Example: {'date':1} sorts the results by total in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TransactionsGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transactions?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deleted a transaction
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Delete transactions/{transactionId}
		 * @param {string} transactionId The id of the transaction to be deleted
		 * @return {void} 
		 */
		Transactions_transactionIdDelete(transactionId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a transaction
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get transactions/{transactionId}
		 * @param {string} transactionId The id of the transaction to return
		 * @return {void} 
		 */
		Transactions_transactionIdGet(transactionId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a transaction
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Post transactions/{transactionId}
		 * @param {string} transactionId The id of the transaction to be updated
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		Transactions_transactionIdPostByCustomData(transactionId: string, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of userAccounts
		 * - Results are paginated and the default is value is 1000 if no limit is provided
		 * Get userAccounts
		 * @param {string} query A query document. Example: {'name':'NASA'} matches all the userAccounts that have the name 'NASA'
		 * @param {string} sort A sort document. Example: {'name':1} sorts the results by name in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		UserAccountsGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userAccounts?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the user account
		 * Delete userAccounts/{userAccountId}
		 * @param {string} userAccountId The id of the user account to be removed
		 * @return {void} 
		 */
		UserAccounts_userAccountIdDelete(userAccountId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userAccounts/' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single user account
		 * Get userAccounts/{userAccountId}
		 * @param {string} userAccountId The id of the user account to be located
		 * @return {void} 
		 */
		UserAccounts_userAccountIdGet(userAccountId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userAccounts/' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the user account fields
		 * Patch userAccounts/{userAccountId}
		 * @param {string} userAccountId The id of the user account to be updated
		 * @param {string} userId The Id of the user that this account belongs to
		 * @param {string} email The contact email address
		 * @param {string} name The user account name
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		UserAccounts_userAccountIdPatchByUserIdAndEmailAndNameAndCustomData(userAccountId: string, userId: string, email: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userAccounts/' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the user account or adds the user account if it doesn't exist
		 * Post userAccounts/{userAccountId}
		 * @param {string} userAccountId The id of the user account to be updated
		 * @param {string} userId The Id of the user that this account belongs to
		 * @param {string} email The contact email address
		 * @param {string} name The user account name
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		UserAccounts_userAccountIdPostByUserIdAndEmailAndNameAndCustomData(userAccountId: string, userId: string, email: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userAccounts/' + (userAccountId == null ? '' : encodeURIComponent(userAccountId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paginated list of users
		 * - Results are paginated and the default is value is 100 if no limit is provided
		 * Get users
		 * @param {string} query A query document. Example: {'name':'John'} matches all the users that have the name 'John'
		 * @param {string} sort A sort document. Example: {'name':1} sorts the results by name in ascending order
		 * @param {number} pageNumber The result set page number to be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of results to return per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		UsersGetByQueryAndSortAndPageNumberAndLimit(query: string | null | undefined, sort: string | null | undefined, pageNumber: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&pageNumber=' + pageNumber + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a single user
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Delete users/{userId}
		 * @param {string} userId The id of the user to be removed
		 * @return {void} 
		 */
		Users_userIdDelete(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a single user
		 * - Results are returned for the market provided within the basic authentication credentials
		 * Get users/{userId}
		 * @param {string} userId The id of the user to be located
		 * @return {void} 
		 */
		Users_userIdGet(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates user fields
		 * Patch users/{userId}
		 * @param {string} userId The id of the user to be updated
		 * @param {string} type The type for this user
		 * @param {string} email The user's email
		 * @param {string} username The user's username
		 * @param {string} name The user's name
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		Users_userIdPatchByTypeAndEmailAndUsernameAndNameAndCustomData(userId: string, type: string | null | undefined, email: string | null | undefined, username: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a single user or adds the user if they don't exist
		 * Post users/{userId}
		 * @param {string} userId The id of the user to be updated
		 * @param {string} type The type for this user
		 * @param {string} email The user's email
		 * @param {string} username The user's username
		 * @param {string} name The user's name
		 * @param {string} customData A custom JSON object that you can create and attach to this record
		 * @return {void} 
		 */
		Users_userIdPostByTypeAndEmailAndUsernameAndNameAndCustomData(userId: string, type: string | null | undefined, email: string | null | undefined, username: string | null | undefined, name: string | null | undefined, customData: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customData=' + (customData == null ? '' : encodeURIComponent(customData)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Apps_appIdVersions_versionStatusPostByDeveloperIdAndStatusAndModifiedByAndReasonStatus { inReview = 'inReview', approved = 'approved', suspended = 'suspended', rejected = 'rejected' }

	export enum Apps_appIdVersions_versionStatusPostByDeveloperIdAndStatusAndModifiedByAndReasonModifiedBy { developer = 'developer', administrator = 'administrator' }

	export enum StatsSeries_period_fieldsGetByStartAndEndAndQueryPeriod { day = 'day', month = 'month' }

}

