import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApplicationInfoDto {
		features?: {[id: string]: boolean };
		releaseDate?: Date | null;
		version?: string | null;
	}
	export interface ApplicationInfoDtoFormProperties {
		features: FormControl<{[id: string]: boolean } | null | undefined>,
		releaseDate: FormControl<Date | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationInfoDtoFormGroup() {
		return new FormGroup<ApplicationInfoDtoFormProperties>({
			features: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
			releaseDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticateModel {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		password: string;
		rememberClient?: boolean | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userNameOrEmailAddress: string;
	}
	export interface AuthenticateModelFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		password: FormControl<string | null | undefined>,
		rememberClient: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userNameOrEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticateModelFormGroup() {
		return new FormGroup<AuthenticateModelFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(32)]),
			rememberClient: new FormControl<boolean | null | undefined>(undefined),
			userNameOrEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface AuthenticateResultModel {
		accessToken?: string | null;
		encryptedAccessToken?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expireInSeconds?: number | null;
		roles?: Array<string>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface AuthenticateResultModelFormProperties {
		accessToken: FormControl<string | null | undefined>,
		encryptedAccessToken: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expireInSeconds: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticateResultModelFormGroup() {
		return new FormGroup<AuthenticateResultModelFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			encryptedAccessToken: new FormControl<string | null | undefined>(undefined),
			expireInSeconds: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseServices {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity?: number | null;

		/** Required */
		category: ServiceCategory;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: number;
		creationTime?: Date | null;

		/**
		 * Required
		 * Min length: 20
		 */
		description: string;
		geoDetails?: GeoDetails;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Required */
		images: Array<ServiceImages>;
		mainImage?: string | null;
		phone?: string | null;
		status?: boolean | null;
		title?: string | null;

		/** Required */
		user: User;
	}
	export interface BaseServicesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 20
		 */
		description: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		mainImage: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateBaseServicesFormGroup() {
		return new FormGroup<BaseServicesFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			categoryId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20)]),
			id: new FormControl<string | null | undefined>(undefined),
			mainImage: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceCategory {
		baseServices?: Array<BaseServices>;
		children?: Array<ServiceCategory>;
		creationTime?: Date | null;
		icon?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId?: number | null;

		/** Required */
		title: string;
	}
	export interface ServiceCategoryFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		icon: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceCategoryFormGroup() {
		return new FormGroup<ServiceCategoryFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			parentId: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeoDetails {
		address?: string | null;
		baseServices?: BaseServices;
		city?: string | null;
		country?: string | null;
		creationTime?: Date | null;
		district?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lng?: number | null;
		locality?: string | null;
		place?: string | null;
		province?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		serviceId?: string | null;
	}
	export interface GeoDetailsFormProperties {
		address: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		district: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lng: FormControl<number | null | undefined>,
		locality: FormControl<string | null | undefined>,
		place: FormControl<string | null | undefined>,
		province: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateGeoDetailsFormGroup() {
		return new FormGroup<GeoDetailsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			place: new FormControl<string | null | undefined>(undefined),
			province: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceImages {

		/** Required */
		alt: string;
		baseServices?: BaseServices;
		creationTime?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		isMain?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		serviceId?: string | null;
		state?: boolean | null;

		/** Required */
		thumbUrl: string;

		/** Required */
		title: string;

		/** Required */
		url: string;
	}
	export interface ServiceImagesFormProperties {

		/** Required */
		alt: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		isMain: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		serviceId: FormControl<string | null | undefined>,
		state: FormControl<boolean | null | undefined>,

		/** Required */
		thumbUrl: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServiceImagesFormGroup() {
		return new FormGroup<ServiceImagesFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isMain: new FormControl<boolean | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<boolean | null | undefined>(undefined),
			thumbUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface User {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		accessFailedCount?: number | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		authenticationSource?: string | null;
		claims?: Array<UserClaim>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		concurrencyStamp?: string | null;
		creationTime?: Date | null;
		creatorUser?: User;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId?: string | null;
		deleterUser?: User;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		deleterUserId?: string | null;
		deletionTime?: Date | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		emailAddress: string;

		/**
		 * Max length: 328
		 * Min length: 0
		 */
		emailConfirmationCode?: string | null;
		expireTime?: Date | null;
		fullName?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		isActive?: boolean | null;
		isDeleted?: boolean | null;
		isEmailConfirmed?: boolean | null;
		isLockoutEnabled?: boolean | null;
		isPhoneNumberConfirmed?: boolean | null;
		isTwoFactorEnabled?: boolean | null;
		lastModificationTime?: Date | null;
		lastModifierUser?: User;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		lastModifierUserId?: string | null;
		lockoutEndDateUtc?: Date | null;
		logins?: Array<UserLogin>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		name: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		normalizedEmailAddress: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		normalizedUserName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		password: string;

		/**
		 * Max length: 328
		 * Min length: 0
		 */
		passwordResetCode?: string | null;
		permissions?: Array<UserPermissionSetting>;

		/**
		 * Max length: 32
		 * Min length: 0
		 */
		phoneNumber?: string | null;
		roles?: Array<UserRole>;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		securityStamp?: string | null;
		settings?: Array<Setting>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		surname: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;
		tokens?: Array<UserToken>;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: string;
	}
	export interface UserFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		accessFailedCount: FormControl<number | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		authenticationSource: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		concurrencyStamp: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		deleterUserId: FormControl<string | null | undefined>,
		deletionTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		emailAddress: FormControl<string | null | undefined>,

		/**
		 * Max length: 328
		 * Min length: 0
		 */
		emailConfirmationCode: FormControl<string | null | undefined>,
		expireTime: FormControl<Date | null | undefined>,
		fullName: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDeleted: FormControl<boolean | null | undefined>,
		isEmailConfirmed: FormControl<boolean | null | undefined>,
		isLockoutEnabled: FormControl<boolean | null | undefined>,
		isPhoneNumberConfirmed: FormControl<boolean | null | undefined>,
		isTwoFactorEnabled: FormControl<boolean | null | undefined>,
		lastModificationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		lastModifierUserId: FormControl<string | null | undefined>,
		lockoutEndDateUtc: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		normalizedEmailAddress: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		normalizedUserName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Max length: 328
		 * Min length: 0
		 */
		passwordResetCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 0
		 */
		phoneNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		securityStamp: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		surname: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			accessFailedCount: new FormControl<number | null | undefined>(undefined),
			authenticationSource: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			code: new FormControl<number | null | undefined>(undefined),
			concurrencyStamp: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			deleterUserId: new FormControl<string | null | undefined>(undefined),
			deletionTime: new FormControl<Date | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			emailConfirmationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(328)]),
			expireTime: new FormControl<Date | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isEmailConfirmed: new FormControl<boolean | null | undefined>(undefined),
			isLockoutEnabled: new FormControl<boolean | null | undefined>(undefined),
			isPhoneNumberConfirmed: new FormControl<boolean | null | undefined>(undefined),
			isTwoFactorEnabled: new FormControl<boolean | null | undefined>(undefined),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined),
			lastModifierUserId: new FormControl<string | null | undefined>(undefined),
			lockoutEndDateUtc: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			normalizedEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			normalizedUserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			passwordResetCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(328)]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(32)]),
			securityStamp: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			tenantId: new FormControl<number | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface UserClaim {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		claimType?: string | null;
		claimValue?: string | null;
		creationTime?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface UserClaimFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		claimType: FormControl<string | null | undefined>,
		claimValue: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserClaimFormGroup() {
		return new FormGroup<UserClaimFormProperties>({
			claimType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			claimValue: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserLogin {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		loginProvider: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		providerKey: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface UserLoginFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		loginProvider: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		providerKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserLoginFormGroup() {
		return new FormGroup<UserLoginFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			loginProvider: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			providerKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			tenantId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserPermissionSetting {
		creationTime?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		isGranted?: boolean | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		name: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface UserPermissionSettingFormProperties {
		creationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		isGranted: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserPermissionSettingFormGroup() {
		return new FormGroup<UserPermissionSettingFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isGranted: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			tenantId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserRole {
		creationTime?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		roleId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface UserRoleFormProperties {
		creationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		roleId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserRoleFormGroup() {
		return new FormGroup<UserRoleFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			roleId: new FormControl<number | null | undefined>(undefined),
			tenantId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Setting {
		creationTime?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		lastModificationTime?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		lastModifierUserId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		name: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;

		/**
		 * Max length: 2000
		 * Min length: 0
		 */
		value?: string | null;
	}
	export interface SettingFormProperties {
		creationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		creatorUserId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		lastModificationTime: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		lastModifierUserId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSettingFormGroup() {
		return new FormGroup<SettingFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModificationTime: new FormControl<Date | null | undefined>(undefined),
			lastModifierUserId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			tenantId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface UserToken {
		expireDate?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		loginProvider?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		value?: string | null;
	}
	export interface UserTokenFormProperties {
		expireDate: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		loginProvider: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserTokenFormGroup() {
		return new FormGroup<UserTokenFormProperties>({
			expireDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			loginProvider: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			tenantId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
		});

	}

	export interface ChangePasswordDto {

		/** Required */
		currentPassword: string;

		/** Required */
		newPassword: string;
	}
	export interface ChangePasswordDtoFormProperties {

		/** Required */
		currentPassword: FormControl<string | null | undefined>,

		/** Required */
		newPassword: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordDtoFormGroup() {
		return new FormGroup<ChangePasswordDtoFormProperties>({
			currentPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChangeUiThemeInput {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		theme: string;
	}
	export interface ChangeUiThemeInputFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		theme: FormControl<string | null | undefined>,
	}
	export function CreateChangeUiThemeInputFormGroup() {
		return new FormGroup<ChangeUiThemeInputFormProperties>({
			theme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(32)]),
		});

	}

	export interface ChangeUserLanguageDto {

		/** Required */
		languageName: string;
	}
	export interface ChangeUserLanguageDtoFormProperties {

		/** Required */
		languageName: FormControl<string | null | undefined>,
	}
	export function CreateChangeUserLanguageDtoFormGroup() {
		return new FormGroup<ChangeUserLanguageDtoFormProperties>({
			languageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CityDto {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		title?: string | null;
	}
	export interface CityDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateCityDtoFormGroup() {
		return new FormGroup<CityDtoFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfirmCodeDto {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/** Required */
		userName: string;
	}
	export interface ConfirmCodeDtoFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** Required */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateConfirmCodeDtoFormGroup() {
		return new FormGroup<ConfirmCodeDtoFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRoleDto {

		/**
		 * Max length: 5000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		displayName: string;
		grantedPermissions?: Array<string>;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		name: string;
		normalizedName?: string | null;
	}
	export interface CreateRoleDtoFormProperties {

		/**
		 * Max length: 5000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
		normalizedName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoleDtoFormGroup() {
		return new FormGroup<CreateRoleDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(5000)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(32)]),
			normalizedName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTenantDto {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		adminEmailAddress: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		connectionString?: string | null;
		isActive?: boolean | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		name: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		tenancyName: string;
	}
	export interface CreateTenantDtoFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		adminEmailAddress: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		connectionString: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		tenancyName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTenantDtoFormGroup() {
		return new FormGroup<CreateTenantDtoFormProperties>({
			adminEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			tenancyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_-]{1,}$')]),
		});

	}

	export interface CreateUserDto {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: string;
	}
	export interface CreateUserDtoFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserDtoFormGroup() {
		return new FormGroup<CreateUserDtoFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface CreateWeddingVendorDto {
		base64Images?: Array<ImageData>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity?: number | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: number;

		/**
		 * Required
		 * Min length: 20
		 */
		description: string;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lng?: number | null;
		mainImage?: string | null;
		phone?: string | null;
		serviceFacilities?: Array<number>;

		/**
		 * Required
		 * Max length: 60
		 * Min length: 3
		 */
		title: string;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface CreateWeddingVendorDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 20
		 */
		description: FormControl<string | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lng: FormControl<number | null | undefined>,
		mainImage: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 60
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWeddingVendorDtoFormGroup() {
		return new FormGroup<CreateWeddingVendorDtoFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			categoryId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20)]),
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			mainImage: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageData {
		content?: string | null;
		fileType?: string | null;
		id?: string | null;
		isMain?: boolean | null;
	}
	export interface ImageDataFormProperties {
		content: FormControl<string | null | undefined>,
		fileType: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isMain: FormControl<boolean | null | undefined>,
	}
	export function CreateImageDataFormGroup() {
		return new FormGroup<ImageDataFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isMain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExternalAuthenticateModel {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		authProvider: string;

		/** Required */
		providerAccessCode: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		providerKey: string;
	}
	export interface ExternalAuthenticateModelFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		authProvider: FormControl<string | null | undefined>,

		/** Required */
		providerAccessCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		providerKey: FormControl<string | null | undefined>,
	}
	export function CreateExternalAuthenticateModelFormGroup() {
		return new FormGroup<ExternalAuthenticateModelFormProperties>({
			authProvider: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			providerAccessCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface ExternalAuthenticateResultModel {
		accessToken?: string | null;
		encryptedAccessToken?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expireInSeconds?: number | null;
		waitingForActivation?: boolean | null;
	}
	export interface ExternalAuthenticateResultModelFormProperties {
		accessToken: FormControl<string | null | undefined>,
		encryptedAccessToken: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expireInSeconds: FormControl<number | null | undefined>,
		waitingForActivation: FormControl<boolean | null | undefined>,
	}
	export function CreateExternalAuthenticateResultModelFormGroup() {
		return new FormGroup<ExternalAuthenticateResultModelFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			encryptedAccessToken: new FormControl<string | null | undefined>(undefined),
			expireInSeconds: new FormControl<number | null | undefined>(undefined),
			waitingForActivation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExternalLoginProviderInfoModel {
		clientId?: string | null;
		name?: string | null;
	}
	export interface ExternalLoginProviderInfoModelFormProperties {
		clientId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateExternalLoginProviderInfoModelFormGroup() {
		return new FormGroup<ExternalLoginProviderInfoModelFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlatPermissionDto {
		description?: string | null;
		displayName?: string | null;
		name?: string | null;
	}
	export interface FlatPermissionDtoFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFlatPermissionDtoFormGroup() {
		return new FormGroup<FlatPermissionDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeoDetailsCreateDto {

		/**
		 * Required
		 * Type: double
		 */
		lat: number;

		/**
		 * Required
		 * Type: double
		 */
		lng: number;

		/** Required */
		phone: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		serviceId: string;
	}
	export interface GeoDetailsCreateDtoFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		lng: FormControl<number | null | undefined>,

		/** Required */
		phone: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateGeoDetailsCreateDtoFormGroup() {
		return new FormGroup<GeoDetailsCreateDtoFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lng: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeoDetailsDto {
		address?: string | null;
		area?: string | null;
		city?: string | null;
		country?: string | null;
		district?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
	}
	export interface GeoDetailsDtoFormProperties {
		address: FormControl<string | null | undefined>,
		area: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		district: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGeoDetailsDtoFormGroup() {
		return new FormGroup<GeoDetailsDtoFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			area: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeoDetailsUpdateDto {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/**
		 * Required
		 * Type: double
		 */
		lat: number;

		/**
		 * Required
		 * Type: double
		 */
		lng: number;

		/** Required */
		phone: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		serviceId: string;
	}
	export interface GeoDetailsUpdateDtoFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		lng: FormControl<number | null | undefined>,

		/** Required */
		phone: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateGeoDetailsUpdateDtoFormGroup() {
		return new FormGroup<GeoDetailsUpdateDtoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lng: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCurrentLoginInformationsOutput {
		application?: ApplicationInfoDto;
		tenant?: TenantLoginInfoDto;
		user?: UserLoginInfoDto;
	}
	export interface GetCurrentLoginInformationsOutputFormProperties {
	}
	export function CreateGetCurrentLoginInformationsOutputFormGroup() {
		return new FormGroup<GetCurrentLoginInformationsOutputFormProperties>({
		});

	}

	export interface TenantLoginInfoDto {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		tenancyName?: string | null;
	}
	export interface TenantLoginInfoDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		tenancyName: FormControl<string | null | undefined>,
	}
	export function CreateTenantLoginInfoDtoFormGroup() {
		return new FormGroup<TenantLoginInfoDtoFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tenancyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserLoginInfoDto {
		emailAddress?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
		surname?: string | null;
		userName?: string | null;
	}
	export interface UserLoginInfoDtoFormProperties {
		emailAddress: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		surname: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserLoginInfoDtoFormGroup() {
		return new FormGroup<UserLoginInfoDtoFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRoleForEditOutput {
		grantedPermissionNames?: Array<string>;
		permissions?: Array<FlatPermissionDto>;
		role?: RoleEditDto;
	}
	export interface GetRoleForEditOutputFormProperties {
	}
	export function CreateGetRoleForEditOutputFormGroup() {
		return new FormGroup<GetRoleForEditOutputFormProperties>({
		});

	}

	export interface RoleEditDto {

		/**
		 * Max length: 5000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		displayName: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isStatic?: boolean | null;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		name: string;
	}
	export interface RoleEditDtoFormProperties {

		/**
		 * Max length: 5000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		displayName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isStatic: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleEditDtoFormGroup() {
		return new FormGroup<RoleEditDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(5000)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			id: new FormControl<number | null | undefined>(undefined),
			isStatic: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(32)]),
		});

	}

	export interface IsTenantAvailableInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		tenancyName: string;
	}
	export interface IsTenantAvailableInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		tenancyName: FormControl<string | null | undefined>,
	}
	export function CreateIsTenantAvailableInputFormGroup() {
		return new FormGroup<IsTenantAvailableInputFormProperties>({
			tenancyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface IsTenantAvailableOutput {
		state?: IsTenantAvailableOutputState;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId?: number | null;
	}
	export interface IsTenantAvailableOutputFormProperties {
		state: FormControl<IsTenantAvailableOutputState | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tenantId: FormControl<number | null | undefined>,
	}
	export function CreateIsTenantAvailableOutputFormGroup() {
		return new FormGroup<IsTenantAvailableOutputFormProperties>({
			state: new FormControl<IsTenantAvailableOutputState | null | undefined>(undefined),
			tenantId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum IsTenantAvailableOutputState { _1 = 0, _2 = 1, _3 = 2 }

	export interface ListResultDto_PermissionDto {
		items?: Array<PermissionDto>;
	}
	export interface ListResultDto_PermissionDtoFormProperties {
	}
	export function CreateListResultDto_PermissionDtoFormGroup() {
		return new FormGroup<ListResultDto_PermissionDtoFormProperties>({
		});

	}

	export interface PermissionDto {
		description?: string | null;
		displayName?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
	}
	export interface PermissionDtoFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePermissionDtoFormGroup() {
		return new FormGroup<PermissionDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResultDto_RoleDto {
		items?: Array<RoleDto>;
	}
	export interface ListResultDto_RoleDtoFormProperties {
	}
	export function CreateListResultDto_RoleDtoFormGroup() {
		return new FormGroup<ListResultDto_RoleDtoFormProperties>({
		});

	}

	export interface RoleDto {

		/**
		 * Max length: 5000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		displayName: string;
		grantedPermissions?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		name: string;
		normalizedName?: string | null;
	}
	export interface RoleDtoFormProperties {

		/**
		 * Max length: 5000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		displayName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
		normalizedName: FormControl<string | null | undefined>,
	}
	export function CreateRoleDtoFormGroup() {
		return new FormGroup<RoleDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(5000)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(32)]),
			normalizedName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResultDto_RoleListDto {
		items?: Array<RoleListDto>;
	}
	export interface ListResultDto_RoleListDtoFormProperties {
	}
	export function CreateListResultDto_RoleListDtoFormGroup() {
		return new FormGroup<ListResultDto_RoleListDtoFormProperties>({
		});

	}

	export interface RoleListDto {
		creationTime?: Date | null;
		displayName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isDefault?: boolean | null;
		isStatic?: boolean | null;
		name?: string | null;
	}
	export interface RoleListDtoFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isStatic: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleListDtoFormGroup() {
		return new FormGroup<RoleListDtoFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isStatic: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoginModel {

		/**
		 * Required
		 * Max length: 11
		 * Min length: 0
		 */
		mobileNumber: string;
		password?: string | null;
	}
	export interface LoginModelFormProperties {

		/**
		 * Required
		 * Max length: 11
		 * Min length: 0
		 */
		mobileNumber: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateLoginModelFormGroup() {
		return new FormGroup<LoginModelFormProperties>({
			mobileNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(11)]),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagedResultDto_GeoDetailsDto {
		items?: Array<GeoDetailsDto>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PagedResultDto_GeoDetailsDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedResultDto_GeoDetailsDtoFormGroup() {
		return new FormGroup<PagedResultDto_GeoDetailsDtoFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagedResultDto_RoleDto {
		items?: Array<RoleDto>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PagedResultDto_RoleDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedResultDto_RoleDtoFormGroup() {
		return new FormGroup<PagedResultDto_RoleDtoFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagedResultDto_ServiceCategoryDto {
		items?: Array<ServiceCategoryDto>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PagedResultDto_ServiceCategoryDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedResultDto_ServiceCategoryDtoFormGroup() {
		return new FormGroup<PagedResultDto_ServiceCategoryDtoFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceCategoryDto {
		children?: Array<ServiceCategoryDto>;
		icon?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId?: number | null;

		/** Required */
		title: string;
	}
	export interface ServiceCategoryDtoFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceCategoryDtoFormGroup() {
		return new FormGroup<ServiceCategoryDtoFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			parentId: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PagedResultDto_ServiceFacilityDto {
		items?: Array<ServiceFacilityDto>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PagedResultDto_ServiceFacilityDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedResultDto_ServiceFacilityDtoFormGroup() {
		return new FormGroup<PagedResultDto_ServiceFacilityDtoFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceFacilityDto {
		icon?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		title?: string | null;
	}
	export interface ServiceFacilityDtoFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceFacilityDtoFormGroup() {
		return new FormGroup<ServiceFacilityDtoFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagedResultDto_TenantDto {
		items?: Array<TenantDto>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PagedResultDto_TenantDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedResultDto_TenantDtoFormGroup() {
		return new FormGroup<PagedResultDto_TenantDtoFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TenantDto {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isActive?: boolean | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		name: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		tenancyName: string;
	}
	export interface TenantDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		tenancyName: FormControl<string | null | undefined>,
	}
	export function CreateTenantDtoFormGroup() {
		return new FormGroup<TenantDtoFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			tenancyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_-]{1,}$')]),
		});

	}

	export interface PagedResultDto_UserDto {
		items?: Array<UserDto>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PagedResultDto_UserDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedResultDto_UserDtoFormGroup() {
		return new FormGroup<PagedResultDto_UserDtoFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserDto {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		creationTime?: Date | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		emailAddress: string;
		expireTime?: Date | null;
		fullName?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		isActive?: boolean | null;
		isExist?: boolean | null;
		lastLoginTime?: Date | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		name: string;
		roleNames?: Array<string>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		surname: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: string;
	}
	export interface UserDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		emailAddress: FormControl<string | null | undefined>,
		expireTime: FormControl<Date | null | undefined>,
		fullName: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isExist: FormControl<boolean | null | undefined>,
		lastLoginTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		surname: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserDtoFormGroup() {
		return new FormGroup<UserDtoFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			expireTime: new FormControl<Date | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isExist: new FormControl<boolean | null | undefined>(undefined),
			lastLoginTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface PagedResultDto_WeddingVendorDto {
		items?: Array<WeddingVendorDto>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PagedResultDto_WeddingVendorDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedResultDto_WeddingVendorDtoFormGroup() {
		return new FormGroup<PagedResultDto_WeddingVendorDtoFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WeddingVendorDto {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		categoryId?: number | null;
		creationTime?: Date | null;
		description?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		mainImage?: string | null;
		title?: string | null;
		userDto?: UserDto;
	}
	export interface WeddingVendorDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		categoryId: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		mainImage: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateWeddingVendorDtoFormGroup() {
		return new FormGroup<WeddingVendorDtoFormProperties>({
			categoryId: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mainImage: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProhibitPermissionInput {
		permissionName?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface ProhibitPermissionInputFormProperties {
		permissionName: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateProhibitPermissionInputFormGroup() {
		return new FormGroup<ProhibitPermissionInputFormProperties>({
			permissionName: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvinceDto {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		title?: string | null;
	}
	export interface ProvinceDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateProvinceDtoFormGroup() {
		return new FormGroup<ProvinceDtoFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: string;
	}
	export interface RegisterInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterInputFormGroup() {
		return new FormGroup<RegisterInputFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface RegisterOutput {
		canLogin?: boolean | null;
	}
	export interface RegisterOutputFormProperties {
		canLogin: FormControl<boolean | null | undefined>,
	}
	export function CreateRegisterOutputFormGroup() {
		return new FormGroup<RegisterOutputFormProperties>({
			canLogin: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResetPasswordDto {

		/** Required */
		adminPassword: string;

		/** Required */
		newPassword: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: string;
	}
	export interface ResetPasswordDtoFormProperties {

		/** Required */
		adminPassword: FormControl<string | null | undefined>,

		/** Required */
		newPassword: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordDtoFormGroup() {
		return new FormGroup<ResetPasswordDtoFormProperties>({
			adminPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceCategoryUpdateDto {
		children?: Array<ServiceCategoryDto>;
		icon?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		parent?: ServiceCategoryDto;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId?: number | null;

		/** Required */
		title: string;
	}
	export interface ServiceCategoryUpdateDtoFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceCategoryUpdateDtoFormGroup() {
		return new FormGroup<ServiceCategoryUpdateDtoFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			parentId: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceCategroyCreateDto {
		icon?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		parent?: ServiceCategoryDto;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId?: number | null;

		/** Required */
		title: string;
	}
	export interface ServiceCategroyCreateDtoFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentId: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceCategroyCreateDtoFormGroup() {
		return new FormGroup<ServiceCategroyCreateDtoFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			parentId: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceFacilityCreateDto {
		icon?: string | null;

		/** Required */
		title: string;
	}
	export interface ServiceFacilityCreateDtoFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceFacilityCreateDtoFormGroup() {
		return new FormGroup<ServiceFacilityCreateDtoFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceFacilityUpdateDto {
		icon?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		title?: string | null;
	}
	export interface ServiceFacilityUpdateDtoFormProperties {
		icon: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceFacilityUpdateDtoFormGroup() {
		return new FormGroup<ServiceFacilityUpdateDtoFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceListModel {
		address?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity?: number | null;
		facilityDtos?: Array<ServiceFacilityDto>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		images?: Array<string>;
		priceType?: ServiceListModelPriceType;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rate?: number | null;
		title?: string | null;
	}
	export interface ServiceListModelFormProperties {
		address: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		priceType: FormControl<ServiceListModelPriceType | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rate: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceListModelFormGroup() {
		return new FormGroup<ServiceListModelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			capacity: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			priceType: new FormControl<ServiceListModelPriceType | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceListModelPriceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }

	export interface UpdateWeddingVendorDto {
		base64Images?: Array<ImageData>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity?: number | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: number;

		/**
		 * Required
		 * Min length: 20
		 */
		description: string;
		facilityDtos?: Array<ServiceFacilityDto>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lng?: number | null;
		mainImage?: string | null;
		phone?: string | null;

		/**
		 * Required
		 * Max length: 60
		 * Min length: 3
		 */
		title: string;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface UpdateWeddingVendorDtoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		categoryId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 20
		 */
		description: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lng: FormControl<number | null | undefined>,
		mainImage: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 60
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWeddingVendorDtoFormGroup() {
		return new FormGroup<UpdateWeddingVendorDtoFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			categoryId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20)]),
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			mainImage: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserServicesDto {
		mainImage?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		serviceId?: string | null;
		status?: boolean | null;
		title?: string | null;
	}
	export interface UserServicesDtoFormProperties {
		mainImage: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		serviceId: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateUserServicesDtoFormGroup() {
		return new FormGroup<UserServicesDtoFormProperties>({
			mainImage: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get api/ServiceQuery/Get
		 * @param {number} CurrentPage Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} PageSize Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedResultDto_WeddingVendorDto} Success
		 */
		ApiServiceQueryGetGetByCurrentPageAndPageSizeAndSorting_PropertyNameAndSorting_OrderByDescending(CurrentPage: number | null | undefined, PageSize: number | null | undefined, Sorting_PropertyName: string | null | undefined, Sorting_OrderByDescending: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_WeddingVendorDto> {
			return this.http.get<PagedResultDto_WeddingVendorDto>(this.baseUri + 'api/ServiceQuery/Get?CurrentPage=' + CurrentPage + '&PageSize=' + PageSize + '&Sorting_PropertyName=' + (Sorting_PropertyName == null ? '' : encodeURIComponent(Sorting_PropertyName)) + '&Sorting_OrderByDescending=' + Sorting_OrderByDescending, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/ServiceQuery/Search
		 * @param {number} CatgoryId Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} PageNumber Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<ServiceListModel>} Success
		 */
		ApiServiceQuerySearchGetByCityAndCatgoryIdAndPageNumber(City: string | null | undefined, CatgoryId: number | null | undefined, PageNumber: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ServiceListModel>> {
			return this.http.get<Array<ServiceListModel>>(this.baseUri + 'api/ServiceQuery/Search?City=' + (City == null ? '' : encodeURIComponent(City)) + '&CatgoryId=' + CatgoryId + '&PageNumber=' + PageNumber, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/ServiceQuery/UserService
		 * @param {string} serviceId Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UpdateWeddingVendorDto} Success
		 */
		ApiServiceQueryUserServiceGetByServiceId(serviceId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UpdateWeddingVendorDto> {
			return this.http.get<UpdateWeddingVendorDto>(this.baseUri + 'api/ServiceQuery/UserService?serviceId=' + serviceId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/ServiceQuery/UserServices
		 * @param {string} userId Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Array<UserServicesDto>} Success
		 */
		ApiServiceQueryUserServicesGetByUserId(userId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<UserServicesDto>> {
			return this.http.get<Array<UserServicesDto>>(this.baseUri + 'api/ServiceQuery/UserServices?userId=' + userId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/TokenAuth/Authenticate
		 * @return {AuthenticateResultModel} Success
		 */
		ApiTokenAuthAuthenticatePost(requestBody: AuthenticateModel, headersHandler?: () => HttpHeaders): Observable<AuthenticateResultModel> {
			return this.http.post<AuthenticateResultModel>(this.baseUri + 'api/TokenAuth/Authenticate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/TokenAuth/ExternalAuthenticate
		 * @return {ExternalAuthenticateResultModel} Success
		 */
		ApiTokenAuthExternalAuthenticatePost(requestBody: ExternalAuthenticateModel, headersHandler?: () => HttpHeaders): Observable<ExternalAuthenticateResultModel> {
			return this.http.post<ExternalAuthenticateResultModel>(this.baseUri + 'api/TokenAuth/ExternalAuthenticate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/TokenAuth/GetExternalAuthenticationProviders
		 * @return {Array<ExternalLoginProviderInfoModel>} Success
		 */
		ApiTokenAuthGetExternalAuthenticationProvidersGet(headersHandler?: () => HttpHeaders): Observable<Array<ExternalLoginProviderInfoModel>> {
			return this.http.get<Array<ExternalLoginProviderInfoModel>>(this.baseUri + 'api/TokenAuth/GetExternalAuthenticationProviders', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/TokenAuth/Login
		 * @return {AuthenticateResultModel} Success
		 */
		ApiTokenAuthLoginPost(requestBody: LoginModel, headersHandler?: () => HttpHeaders): Observable<AuthenticateResultModel> {
			return this.http.post<AuthenticateResultModel>(this.baseUri + 'api/TokenAuth/Login', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/TokenAuth/RefreshToken
		 * @return {AuthenticateResultModel} Success
		 */
		ApiTokenAuthRefreshTokenGetByUserName(userName: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AuthenticateResultModel> {
			return this.http.get<AuthenticateResultModel>(this.baseUri + 'api/TokenAuth/RefreshToken?userName=' + (userName == null ? '' : encodeURIComponent(userName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/services/app/Account/IsTenantAvailable
		 * @return {IsTenantAvailableOutput} Success
		 */
		ApiServicesAppAccountIsTenantAvailablePost(requestBody: IsTenantAvailableInput, headersHandler?: () => HttpHeaders): Observable<IsTenantAvailableOutput> {
			return this.http.post<IsTenantAvailableOutput>(this.baseUri + 'api/services/app/Account/IsTenantAvailable', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/Account/Register
		 * @return {RegisterOutput} Success
		 */
		ApiServicesAppAccountRegisterPost(requestBody: RegisterInput, headersHandler?: () => HttpHeaders): Observable<RegisterOutput> {
			return this.http.post<RegisterOutput>(this.baseUri + 'api/services/app/Account/Register', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/AddressServices/Create
		 * @return {GeoDetailsDto} Success
		 */
		ApiServicesAppAddressServicesCreatePost(requestBody: GeoDetailsCreateDto, headersHandler?: () => HttpHeaders): Observable<GeoDetailsDto> {
			return this.http.post<GeoDetailsDto>(this.baseUri + 'api/services/app/AddressServices/Create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/services/app/AddressServices/Delete
		 * @param {string} Id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Success
		 */
		ApiServicesAppAddressServicesDeleteDeleteById(Id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/services/app/AddressServices/Delete?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/services/app/AddressServices/Get
		 * @param {string} Id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {GeoDetailsDto} Success
		 */
		ApiServicesAppAddressServicesGetGetById(Id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GeoDetailsDto> {
			return this.http.get<GeoDetailsDto>(this.baseUri + 'api/services/app/AddressServices/Get?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/AddressServices/GetAll
		 * @param {number} SkipCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxResultCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedResultDto_GeoDetailsDto} Success
		 */
		ApiServicesAppAddressServicesGetAllGetBySortingAndSkipCountAndMaxResultCount(Sorting: string | null | undefined, SkipCount: number | null | undefined, MaxResultCount: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_GeoDetailsDto> {
			return this.http.get<PagedResultDto_GeoDetailsDto>(this.baseUri + 'api/services/app/AddressServices/GetAll?Sorting=' + (Sorting == null ? '' : encodeURIComponent(Sorting)) + '&SkipCount=' + SkipCount + '&MaxResultCount=' + MaxResultCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/AddressServices/GetCities
		 * @param {number} provinceId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<CityDto>} Success
		 */
		ApiServicesAppAddressServicesGetCitiesGetByProvinceId(provinceId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<CityDto>> {
			return this.http.get<Array<CityDto>>(this.baseUri + 'api/services/app/AddressServices/GetCities?provinceId=' + provinceId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/AddressServices/GetProvince
		 * @return {Array<ProvinceDto>} Success
		 */
		ApiServicesAppAddressServicesGetProvinceGet(headersHandler?: () => HttpHeaders): Observable<Array<ProvinceDto>> {
			return this.http.get<Array<ProvinceDto>>(this.baseUri + 'api/services/app/AddressServices/GetProvince', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/services/app/AddressServices/Update
		 * @return {GeoDetailsDto} Success
		 */
		ApiServicesAppAddressServicesUpdatePut(requestBody: GeoDetailsUpdateDto, headersHandler?: () => HttpHeaders): Observable<GeoDetailsDto> {
			return this.http.put<GeoDetailsDto>(this.baseUri + 'api/services/app/AddressServices/Update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/CategoryService/Create
		 * @return {ServiceCategoryDto} Success
		 */
		ApiServicesAppCategoryServiceCreatePost(requestBody: ServiceCategroyCreateDto, headersHandler?: () => HttpHeaders): Observable<ServiceCategoryDto> {
			return this.http.post<ServiceCategoryDto>(this.baseUri + 'api/services/app/CategoryService/Create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/services/app/CategoryService/Delete
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		ApiServicesAppCategoryServiceDeleteDeleteById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/services/app/CategoryService/Delete?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/services/app/CategoryService/Get
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ServiceCategoryDto} Success
		 */
		ApiServicesAppCategoryServiceGetGetById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceCategoryDto> {
			return this.http.get<ServiceCategoryDto>(this.baseUri + 'api/services/app/CategoryService/Get?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/CategoryService/GetAll
		 * @param {number} TotalCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedResultDto_ServiceCategoryDto} Success
		 */
		ApiServicesAppCategoryServiceGetAllGetByTotalCountAndItems(TotalCount: number | null | undefined, Items: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_ServiceCategoryDto> {
			return this.http.get<PagedResultDto_ServiceCategoryDto>(this.baseUri + 'api/services/app/CategoryService/GetAll?TotalCount=' + TotalCount + '&' + Items?.map(z => `Items=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/CategoryService/GetById
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ServiceCategory} Success
		 */
		ApiServicesAppCategoryServiceGetByIdGetById(id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceCategory> {
			return this.http.get<ServiceCategory>(this.baseUri + 'api/services/app/CategoryService/GetById?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/CategoryService/GetByName
		 * @return {ServiceCategoryDto} Success
		 */
		ApiServicesAppCategoryServiceGetByNameGetByTitle(title: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceCategoryDto> {
			return this.http.get<ServiceCategoryDto>(this.baseUri + 'api/services/app/CategoryService/GetByName?title=' + (title == null ? '' : encodeURIComponent(title)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/CategoryService/GetCategories
		 * @return {Array<ServiceCategoryDto>} Success
		 */
		ApiServicesAppCategoryServiceGetCategoriesGet(headersHandler?: () => HttpHeaders): Observable<Array<ServiceCategoryDto>> {
			return this.http.get<Array<ServiceCategoryDto>>(this.baseUri + 'api/services/app/CategoryService/GetCategories', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/services/app/CategoryService/Update
		 * @return {ServiceCategoryDto} Success
		 */
		ApiServicesAppCategoryServiceUpdatePut(requestBody: ServiceCategoryUpdateDto, headersHandler?: () => HttpHeaders): Observable<ServiceCategoryDto> {
			return this.http.put<ServiceCategoryDto>(this.baseUri + 'api/services/app/CategoryService/Update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/Configuration/ChangeUiTheme
		 * @return {void} Success
		 */
		ApiServicesAppConfigurationChangeUiThemePost(requestBody: ChangeUiThemeInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/services/app/Configuration/ChangeUiTheme', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/services/app/Role/Create
		 * @return {RoleDto} Success
		 */
		ApiServicesAppRoleCreatePost(requestBody: CreateRoleDto, headersHandler?: () => HttpHeaders): Observable<RoleDto> {
			return this.http.post<RoleDto>(this.baseUri + 'api/services/app/Role/Create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/services/app/Role/Delete
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		ApiServicesAppRoleDeleteDeleteById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/services/app/Role/Delete?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/services/app/Role/Get
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RoleDto} Success
		 */
		ApiServicesAppRoleGetGetById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<RoleDto> {
			return this.http.get<RoleDto>(this.baseUri + 'api/services/app/Role/Get?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/Role/GetAll
		 * @param {number} SkipCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxResultCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedResultDto_RoleDto} Success
		 */
		ApiServicesAppRoleGetAllGetByKeywordAndSkipCountAndMaxResultCount(Keyword: string | null | undefined, SkipCount: number | null | undefined, MaxResultCount: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_RoleDto> {
			return this.http.get<PagedResultDto_RoleDto>(this.baseUri + 'api/services/app/Role/GetAll?Keyword=' + (Keyword == null ? '' : encodeURIComponent(Keyword)) + '&SkipCount=' + SkipCount + '&MaxResultCount=' + MaxResultCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/Role/GetAllPermissions
		 * @return {ListResultDto_PermissionDto} Success
		 */
		ApiServicesAppRoleGetAllPermissionsGet(headersHandler?: () => HttpHeaders): Observable<ListResultDto_PermissionDto> {
			return this.http.get<ListResultDto_PermissionDto>(this.baseUri + 'api/services/app/Role/GetAllPermissions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/Role/GetRoleForEdit
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetRoleForEditOutput} Success
		 */
		ApiServicesAppRoleGetRoleForEditGetById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetRoleForEditOutput> {
			return this.http.get<GetRoleForEditOutput>(this.baseUri + 'api/services/app/Role/GetRoleForEdit?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/Role/GetRolesAsync
		 * @return {ListResultDto_RoleListDto} Success
		 */
		ApiServicesAppRoleGetRolesAsyncGetByPermission(Permission: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListResultDto_RoleListDto> {
			return this.http.get<ListResultDto_RoleListDto>(this.baseUri + 'api/services/app/Role/GetRolesAsync?Permission=' + (Permission == null ? '' : encodeURIComponent(Permission)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/services/app/Role/Update
		 * @return {RoleDto} Success
		 */
		ApiServicesAppRoleUpdatePut(requestBody: RoleDto, headersHandler?: () => HttpHeaders): Observable<RoleDto> {
			return this.http.put<RoleDto>(this.baseUri + 'api/services/app/Role/Update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/ServiceFacilityService/Create
		 * @return {ServiceFacilityDto} Success
		 */
		ApiServicesAppServiceFacilityServiceCreatePost(requestBody: ServiceFacilityCreateDto, headersHandler?: () => HttpHeaders): Observable<ServiceFacilityDto> {
			return this.http.post<ServiceFacilityDto>(this.baseUri + 'api/services/app/ServiceFacilityService/Create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/services/app/ServiceFacilityService/Delete
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		ApiServicesAppServiceFacilityServiceDeleteDeleteById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/services/app/ServiceFacilityService/Delete?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/services/app/ServiceFacilityService/Get
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ServiceFacilityDto} Success
		 */
		ApiServicesAppServiceFacilityServiceGetGetById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceFacilityDto> {
			return this.http.get<ServiceFacilityDto>(this.baseUri + 'api/services/app/ServiceFacilityService/Get?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/ServiceFacilityService/GetAll
		 * @return {PagedResultDto_ServiceFacilityDto} Success
		 */
		ApiServicesAppServiceFacilityServiceGetAllGetByInput(input: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_ServiceFacilityDto> {
			return this.http.get<PagedResultDto_ServiceFacilityDto>(this.baseUri + 'api/services/app/ServiceFacilityService/GetAll?' + input?.map(z => `input=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/ServiceFacilityService/GetFacilities
		 * @return {Array<ServiceFacilityDto>} Success
		 */
		ApiServicesAppServiceFacilityServiceGetFacilitiesGet(headersHandler?: () => HttpHeaders): Observable<Array<ServiceFacilityDto>> {
			return this.http.get<Array<ServiceFacilityDto>>(this.baseUri + 'api/services/app/ServiceFacilityService/GetFacilities', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/ServiceFacilityService/GetServiceFacility
		 * @return {Array<ServiceFacilityDto>} Success
		 */
		ApiServicesAppServiceFacilityServiceGetServiceFacilityGetByFacilities(facilities: Array<number> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ServiceFacilityDto>> {
			return this.http.get<Array<ServiceFacilityDto>>(this.baseUri + 'api/services/app/ServiceFacilityService/GetServiceFacility?' + facilities?.map(z => `facilities=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/services/app/ServiceFacilityService/Update
		 * @return {ServiceFacilityDto} Success
		 */
		ApiServicesAppServiceFacilityServiceUpdatePut(requestBody: ServiceFacilityUpdateDto, headersHandler?: () => HttpHeaders): Observable<ServiceFacilityDto> {
			return this.http.put<ServiceFacilityDto>(this.baseUri + 'api/services/app/ServiceFacilityService/Update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/services/app/Session/GetCurrentLoginInformations
		 * @return {GetCurrentLoginInformationsOutput} Success
		 */
		ApiServicesAppSessionGetCurrentLoginInformationsGet(headersHandler?: () => HttpHeaders): Observable<GetCurrentLoginInformationsOutput> {
			return this.http.get<GetCurrentLoginInformationsOutput>(this.baseUri + 'api/services/app/Session/GetCurrentLoginInformations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/services/app/Tenant/Create
		 * @return {TenantDto} Success
		 */
		ApiServicesAppTenantCreatePost(requestBody: CreateTenantDto, headersHandler?: () => HttpHeaders): Observable<TenantDto> {
			return this.http.post<TenantDto>(this.baseUri + 'api/services/app/Tenant/Create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/services/app/Tenant/Delete
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		ApiServicesAppTenantDeleteDeleteById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/services/app/Tenant/Delete?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/services/app/Tenant/Get
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {TenantDto} Success
		 */
		ApiServicesAppTenantGetGetById(Id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<TenantDto> {
			return this.http.get<TenantDto>(this.baseUri + 'api/services/app/Tenant/Get?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/Tenant/GetAll
		 * @param {number} SkipCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxResultCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedResultDto_TenantDto} Success
		 */
		ApiServicesAppTenantGetAllGetByKeywordAndIsActiveAndSkipCountAndMaxResultCount(Keyword: string | null | undefined, IsActive: boolean | null | undefined, SkipCount: number | null | undefined, MaxResultCount: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_TenantDto> {
			return this.http.get<PagedResultDto_TenantDto>(this.baseUri + 'api/services/app/Tenant/GetAll?Keyword=' + (Keyword == null ? '' : encodeURIComponent(Keyword)) + '&IsActive=' + IsActive + '&SkipCount=' + SkipCount + '&MaxResultCount=' + MaxResultCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/services/app/Tenant/Update
		 * @return {TenantDto} Success
		 */
		ApiServicesAppTenantUpdatePut(requestBody: TenantDto, headersHandler?: () => HttpHeaders): Observable<TenantDto> {
			return this.http.put<TenantDto>(this.baseUri + 'api/services/app/Tenant/Update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/User/AddManagerToUserRoles
		 * @return {void} Success
		 */
		ApiServicesAppUserAddManagerToUserRolesPost(requestBody: User, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/services/app/User/AddManagerToUserRoles', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/services/app/User/ChangeLanguage
		 * @return {void} Success
		 */
		ApiServicesAppUserChangeLanguagePost(requestBody: ChangeUserLanguageDto, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/services/app/User/ChangeLanguage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/services/app/User/ChangePassword
		 * @return {boolean} Success
		 */
		ApiServicesAppUserChangePasswordPost(requestBody: ChangePasswordDto, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/services/app/User/ChangePassword', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/User/ConfrimCode
		 * @return {void} Success
		 */
		ApiServicesAppUserConfrimCodePost(requestBody: ConfirmCodeDto, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/services/app/User/ConfrimCode', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/services/app/User/Create
		 * @return {UserDto} Success
		 */
		ApiServicesAppUserCreatePost(requestBody: CreateUserDto, headersHandler?: () => HttpHeaders): Observable<UserDto> {
			return this.http.post<UserDto>(this.baseUri + 'api/services/app/User/Create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/services/app/User/Delete
		 * @param {string} Id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Success
		 */
		ApiServicesAppUserDeleteDeleteById(Id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/services/app/User/Delete?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/services/app/User/Get
		 * @param {string} Id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserDto} Success
		 */
		ApiServicesAppUserGetGetById(Id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserDto> {
			return this.http.get<UserDto>(this.baseUri + 'api/services/app/User/Get?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/User/GetAll
		 * @param {number} SkipCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxResultCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedResultDto_UserDto} Success
		 */
		ApiServicesAppUserGetAllGetByKeywordAndIsActiveAndSkipCountAndMaxResultCount(Keyword: string | null | undefined, IsActive: boolean | null | undefined, SkipCount: number | null | undefined, MaxResultCount: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_UserDto> {
			return this.http.get<PagedResultDto_UserDto>(this.baseUri + 'api/services/app/User/GetAll?Keyword=' + (Keyword == null ? '' : encodeURIComponent(Keyword)) + '&IsActive=' + IsActive + '&SkipCount=' + SkipCount + '&MaxResultCount=' + MaxResultCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/User/GetRoles
		 * @return {ListResultDto_RoleDto} Success
		 */
		ApiServicesAppUserGetRolesGet(headersHandler?: () => HttpHeaders): Observable<ListResultDto_RoleDto> {
			return this.http.get<ListResultDto_RoleDto>(this.baseUri + 'api/services/app/User/GetRoles', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/User/GetToEntity
		 * @param {string} userId Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {User} Success
		 */
		ApiServicesAppUserGetToEntityGetByUserId(userId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'api/services/app/User/GetToEntity?userId=' + userId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/services/app/User/ProhibitPermission
		 * @return {void} Success
		 */
		ApiServicesAppUserProhibitPermissionPost(requestBody: ProhibitPermissionInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/services/app/User/ProhibitPermission', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/services/app/User/ResetPassword
		 * @return {boolean} Success
		 */
		ApiServicesAppUserResetPasswordPost(requestBody: ResetPasswordDto, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/services/app/User/ResetPassword', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Put api/services/app/User/Update
		 * @return {UserDto} Success
		 */
		ApiServicesAppUserUpdatePut(requestBody: UserDto, headersHandler?: () => HttpHeaders): Observable<UserDto> {
			return this.http.put<UserDto>(this.baseUri + 'api/services/app/User/Update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/services/app/WeddingVendorServices/Create
		 * @return {WeddingVendorDto} Success
		 */
		ApiServicesAppWeddingVendorServicesCreatePost(requestBody: CreateWeddingVendorDto, headersHandler?: () => HttpHeaders): Observable<WeddingVendorDto> {
			return this.http.post<WeddingVendorDto>(this.baseUri + 'api/services/app/WeddingVendorServices/Create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/services/app/WeddingVendorServices/Delete
		 * @param {string} Id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Success
		 */
		ApiServicesAppWeddingVendorServicesDeleteDeleteById(Id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/services/app/WeddingVendorServices/Delete?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/services/app/WeddingVendorServices/Get
		 * @param {string} Id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {WeddingVendorDto} Success
		 */
		ApiServicesAppWeddingVendorServicesGetGetById(Id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<WeddingVendorDto> {
			return this.http.get<WeddingVendorDto>(this.baseUri + 'api/services/app/WeddingVendorServices/Get?Id=' + Id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/services/app/WeddingVendorServices/GetAll
		 * @param {number} SkipCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxResultCount Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedResultDto_WeddingVendorDto} Success
		 */
		ApiServicesAppWeddingVendorServicesGetAllGetBySortingAndSkipCountAndMaxResultCount(Sorting: string | null | undefined, SkipCount: number | null | undefined, MaxResultCount: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedResultDto_WeddingVendorDto> {
			return this.http.get<PagedResultDto_WeddingVendorDto>(this.baseUri + 'api/services/app/WeddingVendorServices/GetAll?Sorting=' + (Sorting == null ? '' : encodeURIComponent(Sorting)) + '&SkipCount=' + SkipCount + '&MaxResultCount=' + MaxResultCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/services/app/WeddingVendorServices/Update
		 * @return {WeddingVendorDto} Success
		 */
		ApiServicesAppWeddingVendorServicesUpdatePut(requestBody: UpdateWeddingVendorDto, headersHandler?: () => HttpHeaders): Observable<WeddingVendorDto> {
			return this.http.put<WeddingVendorDto>(this.baseUri + 'api/services/app/WeddingVendorServices/Update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

