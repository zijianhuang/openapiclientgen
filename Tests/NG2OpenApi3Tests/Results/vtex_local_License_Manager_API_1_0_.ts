import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Successful response for `/api/vlm/account` */
	export interface AccountResponse {

		/** Account name */
		accountName?: string | null;

		/** Address of contact */
		address?: string | null;

		/** Deprecated. Check appKeys object for all appKeys */
		appKey?: AccountResponseAppKey;

		/** Array of application keys */
		appKeys?: Array<AppKeyItems>;

		/** City of contact */
		city?: string | null;

		/** CNPJ (Tax ID) of account */
		cnpj?: string | null;

		/** Company name */
		companyName?: string | null;

		/** Additional address of contact */
		complement?: string | null;
		contact?: AccountResponseContact;

		/** Country of contact */
		country?: string | null;

		/** The date when the account was created */
		creationDate?: Date | null;
		defaultUrl?: string | null;

		/** Neighborhood of contact */
		district?: string | null;

		/** If logo has been setup */
		hasLogo?: boolean | null;

		/** If it has a parent account */
		haveParentAccount?: boolean | null;

		/** Hosts of all stores */
		hosts?: Array<string>;

		/** ID of the account */
		id?: string | null;

		/** The date when the account was deactivated */
		inactivationDate?: Date | null;

		/** If account is active or not */
		isActive?: boolean | null;

		/** If it is in production */
		isOperating?: boolean | null;

		/** Licenses of the account */
		licenses?: Array<LicenseItems>;

		/** Filename of account logo */
		logo?: string | null;
		lv?: string | null;

		/** Trading name */
		name?: string | null;

		/** Number of the address of contact */
		number?: string | null;

		/** The date when the account went into production */
		operationDate?: Date | null;

		/** The ID of the parent account */
		parentAccountId?: string | null;

		/** The name of the parent account */
		parentAccountName?: string | null;

		/** Zip Code of contact */
		postalCode?: string | null;

		/** Array of objects representing a store */
		sites?: Array<SiteItems>;

		/** Object representing the sponsor user */
		sponsor?: AccountResponseSponsor;

		/** State/Province of contact */
		state?: string | null;

		/** Telephone of contact */
		telephone?: string | null;

		/** Trading name */
		tradingName?: string | null;
	}

	/** Successful response for `/api/vlm/account` */
	export interface AccountResponseFormProperties {

		/** Account name */
		accountName: FormControl<string | null | undefined>,

		/** Address of contact */
		address: FormControl<string | null | undefined>,

		/** City of contact */
		city: FormControl<string | null | undefined>,

		/** CNPJ (Tax ID) of account */
		cnpj: FormControl<string | null | undefined>,

		/** Company name */
		companyName: FormControl<string | null | undefined>,

		/** Additional address of contact */
		complement: FormControl<string | null | undefined>,

		/** Country of contact */
		country: FormControl<string | null | undefined>,

		/** The date when the account was created */
		creationDate: FormControl<Date | null | undefined>,
		defaultUrl: FormControl<string | null | undefined>,

		/** Neighborhood of contact */
		district: FormControl<string | null | undefined>,

		/** If logo has been setup */
		hasLogo: FormControl<boolean | null | undefined>,

		/** If it has a parent account */
		haveParentAccount: FormControl<boolean | null | undefined>,

		/** ID of the account */
		id: FormControl<string | null | undefined>,

		/** The date when the account was deactivated */
		inactivationDate: FormControl<Date | null | undefined>,

		/** If account is active or not */
		isActive: FormControl<boolean | null | undefined>,

		/** If it is in production */
		isOperating: FormControl<boolean | null | undefined>,

		/** Filename of account logo */
		logo: FormControl<string | null | undefined>,
		lv: FormControl<string | null | undefined>,

		/** Trading name */
		name: FormControl<string | null | undefined>,

		/** Number of the address of contact */
		number: FormControl<string | null | undefined>,

		/** The date when the account went into production */
		operationDate: FormControl<Date | null | undefined>,

		/** The ID of the parent account */
		parentAccountId: FormControl<string | null | undefined>,

		/** The name of the parent account */
		parentAccountName: FormControl<string | null | undefined>,

		/** Zip Code of contact */
		postalCode: FormControl<string | null | undefined>,

		/** State/Province of contact */
		state: FormControl<string | null | undefined>,

		/** Telephone of contact */
		telephone: FormControl<string | null | undefined>,

		/** Trading name */
		tradingName: FormControl<string | null | undefined>,
	}
	export function CreateAccountResponseFormGroup() {
		return new FormGroup<AccountResponseFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			cnpj: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			defaultUrl: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			hasLogo: new FormControl<boolean | null | undefined>(undefined),
			haveParentAccount: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inactivationDate: new FormControl<Date | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isOperating: new FormControl<boolean | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			lv: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			operationDate: new FormControl<Date | null | undefined>(undefined),
			parentAccountId: new FormControl<string | null | undefined>(undefined),
			parentAccountName: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			telephone: new FormControl<string | null | undefined>(undefined),
			tradingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountResponseAppKey {
		name?: string | null;
		token?: string | null;
	}
	export interface AccountResponseAppKeyFormProperties {
		name: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateAccountResponseAppKeyFormGroup() {
		return new FormGroup<AccountResponseAppKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object representing application keys */
	export interface AppKeyItems {

		/** AppKey (Access Key in the license manager UI) */
		appKey?: string | null;

		/** AppToken. For security reasons, should always be null. */
		appToken?: string | null;

		/** Creation date of the application key */
		createdIn?: Date | null;

		/** ID of the application key */
		id?: string | null;

		/** If the application key is active */
		isActive?: boolean | null;

		/** If the application key is blocked */
		isBlocked?: boolean | null;

		/** Label of the application key */
		label?: string | null;
	}

	/** Object representing application keys */
	export interface AppKeyItemsFormProperties {

		/** AppKey (Access Key in the license manager UI) */
		appKey: FormControl<string | null | undefined>,

		/** AppToken. For security reasons, should always be null. */
		appToken: FormControl<string | null | undefined>,

		/** Creation date of the application key */
		createdIn: FormControl<Date | null | undefined>,

		/** ID of the application key */
		id: FormControl<string | null | undefined>,

		/** If the application key is active */
		isActive: FormControl<boolean | null | undefined>,

		/** If the application key is blocked */
		isBlocked: FormControl<boolean | null | undefined>,

		/** Label of the application key */
		label: FormControl<string | null | undefined>,
	}
	export function CreateAppKeyItemsFormGroup() {
		return new FormGroup<AppKeyItemsFormProperties>({
			appKey: new FormControl<string | null | undefined>(undefined),
			appToken: new FormControl<string | null | undefined>(undefined),
			createdIn: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isBlocked: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountResponseContact {

		/** Email of the contact */
		email?: string | null;

		/** Name of the contact */
		name?: string | null;

		/** Phone of the contact */
		phone?: string | null;
	}
	export interface AccountResponseContactFormProperties {

		/** Email of the contact */
		email: FormControl<string | null | undefined>,

		/** Name of the contact */
		name: FormControl<string | null | undefined>,

		/** Phone of the contact */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateAccountResponseContactFormGroup() {
		return new FormGroup<AccountResponseContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object representing licenses */
	export interface LicenseItems {
		expiration?: Date | null;

		/**
		 * ID of the category of the license
		 * Type: double
		 */
		id?: number | null;

		/** If the license is purchased */
		isPurchased?: boolean | null;

		/** Name of the category of the license */
		name?: string | null;

		/** Array of products */
		LicenseItemsProducts?: Array<LicenseItemsProducts>;
	}

	/** Object representing licenses */
	export interface LicenseItemsFormProperties {
		expiration: FormControl<Date | null | undefined>,

		/**
		 * ID of the category of the license
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/** If the license is purchased */
		isPurchased: FormControl<boolean | null | undefined>,

		/** Name of the category of the license */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLicenseItemsFormGroup() {
		return new FormGroup<LicenseItemsFormProperties>({
			expiration: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isPurchased: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LicenseItemsProducts {
		domains?: Array<string>;
		endpoints?: LicenseItemsProductsEndpoints;

		/**
		 * ID of the product
		 * Type: double
		 */
		id?: number | null;

		/** Name of the product */
		name?: string | null;
	}
	export interface LicenseItemsProductsFormProperties {

		/**
		 * ID of the product
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the product */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLicenseItemsProductsFormGroup() {
		return new FormGroup<LicenseItemsProductsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LicenseItemsProductsEndpoints {
		consoleUrl?: string | null;
		webApiUrl?: string | null;
	}
	export interface LicenseItemsProductsEndpointsFormProperties {
		consoleUrl: FormControl<string | null | undefined>,
		webApiUrl: FormControl<string | null | undefined>,
	}
	export function CreateLicenseItemsProductsEndpointsFormGroup() {
		return new FormGroup<LicenseItemsProductsEndpointsFormProperties>({
			consoleUrl: new FormControl<string | null | undefined>(undefined),
			webApiUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing complete information from a store */
	export interface SiteItems {
		LV?: string | null;
		aliases?: Array<string>;
		domains?: Array<string>;

		/** Hosts associated to the store */
		hosts?: Array<string>;

		/**
		 * ID of the store
		 * Type: double
		 */
		id?: number | null;
		logo?: string | null;

		/** Type: double */
		monetaryUnitId?: number | null;

		/** Store name */
		name?: string | null;

		/** Trading name of the store */
		tradingName?: string | null;
	}

	/** Object containing complete information from a store */
	export interface SiteItemsFormProperties {
		LV: FormControl<string | null | undefined>,

		/**
		 * ID of the store
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Type: double */
		monetaryUnitId: FormControl<number | null | undefined>,

		/** Store name */
		name: FormControl<string | null | undefined>,

		/** Trading name of the store */
		tradingName: FormControl<string | null | undefined>,
	}
	export function CreateSiteItemsFormGroup() {
		return new FormGroup<SiteItemsFormProperties>({
			LV: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			monetaryUnitId: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tradingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountResponseSponsor {

		/** Email of the sponsor user */
		email?: string | null;

		/** Name of the sponsor user */
		name?: string | null;

		/** Phone of the sponsor user */
		phone?: string | null;
	}
	export interface AccountResponseSponsorFormProperties {

		/** Email of the sponsor user */
		email: FormControl<string | null | undefined>,

		/** Name of the sponsor user */
		name: FormControl<string | null | undefined>,

		/** Phone of the sponsor user */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateAccountResponseSponsorFormGroup() {
		return new FormGroup<AccountResponseSponsorFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for creating users */
	export interface CreateUserRequest {

		/**
		 * Email of the user
		 * Required
		 */
		email: string;

		/**
		 * Name of the user
		 * Required
		 */
		name: string;
	}

	/** Request body for creating users */
	export interface CreateUserRequestFormProperties {

		/**
		 * Email of the user
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Name of the user
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body for creating new application key (/api/vlm/appkeys) */
	export interface CreatenewappkeyRequest {

		/**
		 * Label for application key
		 * Required
		 */
		label: string;
	}

	/** Request body for creating new application key (/api/vlm/appkeys) */
	export interface CreatenewappkeyRequestFormProperties {

		/**
		 * Label for application key
		 * Required
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateCreatenewappkeyRequestFormGroup() {
		return new FormGroup<CreatenewappkeyRequestFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response body of sucessful call to /api/vlm/appkeys */
	export interface CreatenewappkeyResponse {

		/**
		 * AppKey (Access Key in the license manager UI)
		 * Required
		 */
		appKey: string;

		/**
		 * Secret of application key
		 * Required
		 */
		appToken: string;

		/**
		 * Date of creation of application key
		 * Required
		 */
		createdIn: Date;

		/**
		 * ID of application key
		 * Required
		 */
		id: string;

		/**
		 * If the application key is active
		 * Required
		 */
		isActive: boolean;

		/**
		 * Label for application key
		 * Required
		 */
		label: string;
	}

	/** Response body of sucessful call to /api/vlm/appkeys */
	export interface CreatenewappkeyResponseFormProperties {

		/**
		 * AppKey (Access Key in the license manager UI)
		 * Required
		 */
		appKey: FormControl<string | null | undefined>,

		/**
		 * Secret of application key
		 * Required
		 */
		appToken: FormControl<string | null | undefined>,

		/**
		 * Date of creation of application key
		 * Required
		 */
		createdIn: FormControl<Date | null | undefined>,

		/**
		 * ID of application key
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * If the application key is active
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Label for application key
		 * Required
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateCreatenewappkeyResponseFormGroup() {
		return new FormGroup<CreatenewappkeyResponseFormProperties>({
			appKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdIn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response body for getting all application keys from the account */
	export interface Getappkeysfromaccount {

		/**
		 * AppKey (Access Key in the license manager UI)
		 * Required
		 */
		appKey: string;

		/**
		 * Date of creation of application key
		 * Required
		 */
		createdIn: Date;

		/**
		 * ID of application key
		 * Required
		 */
		id: string;

		/**
		 * If the application key is active
		 * Required
		 */
		isActive: boolean;

		/**
		 * Label for application key
		 * Required
		 */
		label: string;
	}

	/** Response body for getting all application keys from the account */
	export interface GetappkeysfromaccountFormProperties {

		/**
		 * AppKey (Access Key in the license manager UI)
		 * Required
		 */
		appKey: FormControl<string | null | undefined>,

		/**
		 * Date of creation of application key
		 * Required
		 */
		createdIn: FormControl<Date | null | undefined>,

		/**
		 * ID of application key
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * If the application key is active
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Label for application key
		 * Required
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateGetappkeysfromaccountFormGroup() {
		return new FormGroup<GetappkeysfromaccountFormProperties>({
			appKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdIn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response body for listing all roles */
	export interface ListRolesResponse {

		/** Array of role objects */
		items?: Array<RoleItems>;

		/** Paging object */
		paging?: Paging;
	}

	/** Response body for listing all roles */
	export interface ListRolesResponseFormProperties {
	}
	export function CreateListRolesResponseFormGroup() {
		return new FormGroup<ListRolesResponseFormProperties>({
		});

	}


	/** Object representing roles */
	export interface RoleItems {

		/**
		 * ID of the role
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** If the role is admin */
		isAdmin?: boolean | null;
		logins?: string | null;

		/** Name of the role */
		name?: string | null;

		/** Array of product objects */
		products?: Array<ProductItems>;
		resources?: string | null;

		/**
		 * Returns 1 for custom roles, and 0 otherwise
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		roleType?: number | null;
	}

	/** Object representing roles */
	export interface RoleItemsFormProperties {

		/**
		 * ID of the role
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** If the role is admin */
		isAdmin: FormControl<boolean | null | undefined>,
		logins: FormControl<string | null | undefined>,

		/** Name of the role */
		name: FormControl<string | null | undefined>,
		resources: FormControl<string | null | undefined>,

		/**
		 * Returns 1 for custom roles, and 0 otherwise
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		roleType: FormControl<number | null | undefined>,
	}
	export function CreateRoleItemsFormGroup() {
		return new FormGroup<RoleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			isAdmin: new FormControl<boolean | null | undefined>(undefined),
			logins: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resources: new FormControl<string | null | undefined>(undefined),
			roleType: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Object representing products */
	export interface ProductItems {
		categoryId?: string | null;
		categoryName?: string | null;
		consoleUrlMask?: string | null;
		description?: string | null;
		id?: string | null;

		/** Name of the product */
		name?: string | null;
		productResources?: string | null;
		url?: string | null;
		urlConfiguration?: string | null;
		webApiUrlMask?: string | null;
	}

	/** Object representing products */
	export interface ProductItemsFormProperties {
		categoryId: FormControl<string | null | undefined>,
		categoryName: FormControl<string | null | undefined>,
		consoleUrlMask: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Name of the product */
		name: FormControl<string | null | undefined>,
		productResources: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		urlConfiguration: FormControl<string | null | undefined>,
		webApiUrlMask: FormControl<string | null | undefined>,
	}
	export function CreateProductItemsFormGroup() {
		return new FormGroup<ProductItemsFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			categoryName: new FormControl<string | null | undefined>(undefined),
			consoleUrlMask: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productResources: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlConfiguration: new FormControl<string | null | undefined>(undefined),
			webApiUrlMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Paging object */
	export interface Paging {

		/**
		 * Current page number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: number;

		/**
		 * Total of pages
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: number;

		/**
		 * Items per page
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		perPage: number;

		/**
		 * Total of items
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}

	/** Paging object */
	export interface PagingFormProperties {

		/**
		 * Current page number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Total of pages
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,

		/**
		 * Items per page
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		perPage: FormControl<number | null | undefined>,

		/**
		 * Total of items
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePagingFormGroup() {
		return new FormGroup<PagingFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			perPage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response body for listing all users */
	export interface ListUsersResponse {

		/** Array of user objects */
		items?: Array<UserItems>;

		/** Paging object */
		paging?: Paging;
	}

	/** Response body for listing all users */
	export interface ListUsersResponseFormProperties {
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
		});

	}


	/** Object representing users */
	export interface UserItems {

		/**
		 * Array of account names
		 * Maximum items: 0
		 */
		accountNames?: Array<string>;

		/** Email of the user */
		email?: string | null;

		/** ID of the user */
		id?: string | null;

		/** If user is admin */
		isAdmin?: boolean | null;

		/** If user is blocked */
		isBlocked?: boolean | null;

		/** For internal use only */
		isReliable?: boolean | null;

		/** Name of the user */
		name?: string | null;

		/**
		 * Array of roles
		 * Maximum items: 0
		 */
		roles?: Array<string>;
	}

	/** Object representing users */
	export interface UserItemsFormProperties {

		/** Email of the user */
		email: FormControl<string | null | undefined>,

		/** ID of the user */
		id: FormControl<string | null | undefined>,

		/** If user is admin */
		isAdmin: FormControl<boolean | null | undefined>,

		/** If user is blocked */
		isBlocked: FormControl<boolean | null | undefined>,

		/** For internal use only */
		isReliable: FormControl<boolean | null | undefined>,

		/** Name of the user */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserItemsFormGroup() {
		return new FormGroup<UserItemsFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isAdmin: new FormControl<boolean | null | undefined>(undefined),
			isBlocked: new FormControl<boolean | null | undefined>(undefined),
			isReliable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing summarized information from a store */
	export interface StoreItems {

		/** Array of hosts corresponding to the store */
		hosts?: Array<string>;

		/**
		 * ID of the store
		 * Type: double
		 */
		id?: number | null;

		/** Name of the store */
		name?: string | null;
	}

	/** Object containing summarized information from a store */
	export interface StoreItemsFormProperties {

		/**
		 * ID of the store
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the store */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStoreItemsFormGroup() {
		return new FormGroup<StoreItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for activating/deactivating application keys */
	export interface UpdateappkeyRequest {

		/**
		 * If the application key should be active or inactive
		 * Required
		 */
		isActive: boolean;
	}

	/** Request body for activating/deactivating application keys */
	export interface UpdateappkeyRequestFormProperties {

		/**
		 * If the application key should be active or inactive
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateappkeyRequestFormGroup() {
		return new FormGroup<UpdateappkeyRequestFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object representing VLMError */
	export interface VLMError {

		/** Details of error */
		Detais?: string | null;

		/**
		 * Status code of HTTP response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HttpStatusCode?: number | null;

		/** Error message */
		Message?: string | null;

		/**
		 * Error code for License Manager
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VLMErrorCode?: number | null;
	}

	/** Object representing VLMError */
	export interface VLMErrorFormProperties {

		/** Details of error */
		Detais: FormControl<string | null | undefined>,

		/**
		 * Status code of HTTP response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HttpStatusCode: FormControl<number | null | undefined>,

		/** Error message */
		Message: FormControl<string | null | undefined>,

		/**
		 * Error code for License Manager
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VLMErrorCode: FormControl<number | null | undefined>,
	}
	export function CreateVLMErrorFormGroup() {
		return new FormGroup<VLMErrorFormProperties>({
			Detais: new FormControl<string | null | undefined>(undefined),
			HttpStatusCode: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			VLMErrorCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get List of Users
		 * Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.
		 * Get api/license-manager/site/pvt/logins/list/paged
		 * @param {number} numItems Number of items in the returned page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageNumber Which page from the whole list will be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sort Chooses the field that the list will be sorted by
		 * @param {string} sortType Defines the sorting order. `ASC` is used for ascendant order. `DSC` is used for descendant order
		 * @return {ListUsersResponse} Success
		 */
		GetListUsers(numItems: number | null | undefined, pageNumber: number | null | undefined, sort: string | null | undefined, sortType: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'api/license-manager/site/pvt/logins/list/paged?numItems=' + numItems + '&pageNumber=' + pageNumber + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sortType=' + (sortType == null ? '' : encodeURIComponent(sortType)), {});
		}

		/**
		 * Get List of Roles
		 * Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.
		 * Get api/license-manager/site/pvt/roles/list/paged
		 * @param {number} numItems Number of items in the returned page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageNumber Which page from the whole list will be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sort Chooses the field that the list will be sorted by
		 * @param {string} sortType Defines the sorting order. ASC is used for ascendant order. DSC is used for descendant order
		 * @return {ListRolesResponse} Success
		 */
		GetListRoles(numItems: number | null | undefined, pageNumber: number | null | undefined, sort: string | null | undefined, sortType: string | null | undefined): Observable<ListRolesResponse> {
			return this.http.get<ListRolesResponse>(this.baseUri + 'api/license-manager/site/pvt/roles/list/paged?numItems=' + numItems + '&pageNumber=' + pageNumber + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sortType=' + (sortType == null ? '' : encodeURIComponent(sortType)), {});
		}

		/**
		 * Create User
		 * Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.
		 * Post api/license-manager/users
		 * @return {CreateUserReturn} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserReturn> {
			return this.http.post<CreateUserReturn>(this.baseUri + 'api/license-manager/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get User
		 * Allows you to get a user from the database, using the `userId` as the identifier.
		 * Get api/license-manager/users/{userId}
		 * @param {string} userId ID from queried user.
		 * @return {GetUserReturn} Success
		 */
		GetUser(userId: string): Observable<GetUserReturn> {
			return this.http.get<GetUserReturn>(this.baseUri + 'api/license-manager/users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get Roles by User/appKey
		 * Gets roles of a particular user or application key.
		 * Get api/license-manager/users/{userId}/roles
		 * @param {string} userId ID corresponding to the user
		 * @return {Array<GetRolesbyUserReturn>} Success
		 */
		GetRolesbyUser(userId: string): Observable<Array<GetRolesbyUserReturn>> {
			return this.http.get<Array<GetRolesbyUserReturn>>(this.baseUri + 'api/license-manager/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/roles', {});
		}

		/**
		 * Put Roles in User/appKey
		 * Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.
		 * Put api/license-manager/users/{userId}/roles
		 * @param {string} userId ID corresponding to the user
		 * @param {Array<number>} requestBody List of roles' IDs to add to the user or application key.
		 * @return {void} 
		 */
		PutRolesinUser(userId: string, requestBody: Array<number>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/license-manager/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Role from User/appKey
		 * Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.
		 * > Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.
		 * Delete api/license-manager/users/{userId}/roles/{roleId}
		 * @param {string} userId ID corresponding to the user
		 * @param {string} roleId ID of the role which will be removed from the user
		 * @return {void} 
		 */
		RemoveRolefromUser(userId: string, roleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/license-manager/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/roles/' + (roleId == null ? '' : encodeURIComponent(roleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about account
		 * Retrieves information from an account, such as company and sponsor user details, stores, and appTokens.
		 * This endpoint only accepts requests from the host list designated for that store. If you want to try this request from this portal, be sure to add it to the list. Learn how to add hosts to the list in [How to manage accounts](https://help.vtex.com/en/tutorial/how-to-manage-accounts--tutorials_6285#).
		 * Get api/vlm/account
		 * @return {AccountResponse} Success
		 */
		GetAccount(): Observable<AccountResponse> {
			return this.http.get<AccountResponse>(this.baseUri + 'api/vlm/account', {});
		}

		/**
		 * Get Stores
		 * Gets the stores and respective hosts of the account
		 * Get api/vlm/account/stores
		 * @return {Array<StoreItems>} Success
		 */
		GetByAccount(): Observable<Array<StoreItems>> {
			return this.http.get<Array<StoreItems>>(this.baseUri + 'api/vlm/account/stores', {});
		}

		/**
		 * Get appKeys from account
		 * Gets all application keys from an account.
		 * Get api/vlm/appkeys
		 * @return {Array<Getappkeysfromaccount>} Success
		 */
		Getappkeysfromaccount(): Observable<Array<Getappkeysfromaccount>> {
			return this.http.get<Array<Getappkeysfromaccount>>(this.baseUri + 'api/vlm/appkeys', {});
		}

		/**
		 * Create new appkey
		 * Creates a new pair of `appKey` and `appToken`.
		 * Post api/vlm/appkeys
		 * @return {CreatenewappkeyResponse} Success
		 */
		Createnewappkey(requestBody: CreatenewappkeyRequest): Observable<CreatenewappkeyResponse> {
			return this.http.post<CreatenewappkeyResponse>(this.baseUri + 'api/vlm/appkeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update appkey
		 * Activates or deactivates an `appKey` by its ID.
		 * Put api/vlm/appkeys/{id}
		 * @param {string} id ID from the appKey which will be updated
		 * @param {UpdateappkeyRequest} requestBody Request body for updating AppKeys
		 * @return {void} Success
		 */
		Updateappkey(id: string, requestBody: UpdateappkeyRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/vlm/appkeys/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateUserReturn {

		/** Email of user */
		email?: string | null;

		/** ID of user */
		id?: string | null;

		/** Name of user */
		name?: string | null;
	}
	export interface CreateUserReturnFormProperties {

		/** Email of user */
		email: FormControl<string | null | undefined>,

		/** ID of user */
		id: FormControl<string | null | undefined>,

		/** Name of user */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserReturnFormGroup() {
		return new FormGroup<CreateUserReturnFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserReturn {

		/** Email of user */
		email?: string | null;

		/** ID of user */
		id?: string | null;

		/** Name of user */
		name?: string | null;
	}
	export interface GetUserReturnFormProperties {

		/** Email of user */
		email: FormControl<string | null | undefined>,

		/** ID of user */
		id: FormControl<string | null | undefined>,

		/** Name of user */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetUserReturnFormGroup() {
		return new FormGroup<GetUserReturnFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRolesbyUserReturn {

		/**
		 * ID of role
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of role */
		name?: string | null;
	}
	export interface GetRolesbyUserReturnFormProperties {

		/**
		 * ID of role
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of role */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetRolesbyUserReturnFormGroup() {
		return new FormGroup<GetRolesbyUserReturnFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

}

