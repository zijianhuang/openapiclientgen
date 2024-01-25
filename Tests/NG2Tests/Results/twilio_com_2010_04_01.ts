import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {
		auth_token?: string | null;

		/** The date that this account was created, in GMT in RFC 2822 format */
		date_created?: string | null;

		/** The date that this account was last updated, in GMT in RFC 2822 format. */
		date_updated?: string | null;

		/** A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address. */
		friendly_name?: string | null;

		/** A 34 character string that uniquely identifies this account. */
		sid?: string | null;

		/** The status of this account. Usually active, but can be suspended or closed. */
		status?: string | null;
		subresource_uris?: string | null;

		/** The type of this account. Either Trial or Full if you've upgraded. */
		type?: string | null;
		uri?: string | null;
	}
	export interface AccountFormProperties {
		auth_token: FormControl<string | null | undefined>,

		/** The date that this account was created, in GMT in RFC 2822 format */
		date_created: FormControl<string | null | undefined>,

		/** The date that this account was last updated, in GMT in RFC 2822 format. */
		date_updated: FormControl<string | null | undefined>,

		/** A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address. */
		friendly_name: FormControl<string | null | undefined>,

		/** A 34 character string that uniquely identifies this account. */
		sid: FormControl<string | null | undefined>,

		/** The status of this account. Usually active, but can be suspended or closed. */
		status: FormControl<string | null | undefined>,
		subresource_uris: FormControl<string | null | undefined>,

		/** The type of this account. Either Trial or Full if you've upgraded. */
		type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			auth_token: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subresource_uris: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accounts {
		AccountsAccounts?: Array<AccountsAccounts>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface AccountsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAccountsFormGroup() {
		return new FormGroup<AccountsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsAccounts {

		/** The date that this account was created, in GMT in RFC 2822 format */
		date_created?: string | null;

		/** The date that this account was last updated, in GMT in RFC 2822 format. */
		date_updated?: string | null;

		/** A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address. */
		friendly_name?: string | null;

		/** A 34 character string that uniquely identifies this account. */
		sid?: string | null;

		/** The status of this account. Usually active, but can be suspended or closed. */
		status?: string | null;

		/** The type of this account. Either Trial or Full if you've upgraded. */
		type?: string | null;
	}
	export interface AccountsAccountsFormProperties {

		/** The date that this account was created, in GMT in RFC 2822 format */
		date_created: FormControl<string | null | undefined>,

		/** The date that this account was last updated, in GMT in RFC 2822 format. */
		date_updated: FormControl<string | null | undefined>,

		/** A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address. */
		friendly_name: FormControl<string | null | undefined>,

		/** A 34 character string that uniquely identifies this account. */
		sid: FormControl<string | null | undefined>,

		/** The status of this account. Usually active, but can be suspended or closed. */
		status: FormControl<string | null | undefined>,

		/** The type of this account. Either Trial or Full if you've upgraded. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAccountsAccountsFormGroup() {
		return new FormGroup<AccountsAccountsFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppResource {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_status_callback?: string | null;
		sms_url?: string | null;
		status_callback?: string | null;
		status_callback_method?: string | null;
		uri?: string | null;
		voice_caller_id_lookup?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_url?: string | null;
	}
	export interface AppResourceFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_status_callback: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		status_callback: FormControl<string | null | undefined>,
		status_callback_method: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_caller_id_lookup: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateAppResourceFormGroup() {
		return new FormGroup<AppResourceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_status_callback: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_caller_id_lookup: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppResources {
		AppResourcesApplications?: Array<AppResourcesApplications>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface AppResourcesFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAppResourcesFormGroup() {
		return new FormGroup<AppResourcesFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppResourcesApplications {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_status_callback?: string | null;
		sms_url?: string | null;
		status_callback?: string | null;
		status_callback_method?: string | null;
		uri?: string | null;
		voice_caller_id_lookup?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_url?: string | null;
	}
	export interface AppResourcesApplicationsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_status_callback: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		status_callback: FormControl<string | null | undefined>,
		status_callback_method: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_caller_id_lookup: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateAppResourcesApplicationsFormGroup() {
		return new FormGroup<AppResourcesApplicationsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_status_callback: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_caller_id_lookup: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Application {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_status_callback?: string | null;
		sms_url?: string | null;
		status_callback?: string | null;
		status_callback_method?: string | null;
		uri?: string | null;
		voice_caller_id_lookup?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_url?: string | null;
	}
	export interface ApplicationFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_status_callback: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		status_callback: FormControl<string | null | undefined>,
		status_callback_method: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_caller_id_lookup: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_status_callback: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_caller_id_lookup: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Applications {
		ApplicationsApplications?: Array<ApplicationsApplications>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface ApplicationsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationsFormGroup() {
		return new FormGroup<ApplicationsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationsApplications {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_status_callback?: string | null;
		sms_url?: string | null;
		status_callback?: string | null;
		status_callback_method?: string | null;
		uri?: string | null;
		voice_caller_id_lookup?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_url?: string | null;
	}
	export interface ApplicationsApplicationsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_status_callback: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		status_callback: FormControl<string | null | undefined>,
		status_callback_method: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_caller_id_lookup: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateApplicationsApplicationsFormGroup() {
		return new FormGroup<ApplicationsApplicationsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_status_callback: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_caller_id_lookup: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthApp {
		account_sid?: string | null;
		connect_app_company_name?: string | null;
		connect_app_description?: string | null;
		connect_app_friendly_name?: string | null;
		connect_app_homepage_url?: string | null;
		connect_app_sid?: string | null;
		permissions?: Array<string>;
	}
	export interface AuthAppFormProperties {
		account_sid: FormControl<string | null | undefined>,
		connect_app_company_name: FormControl<string | null | undefined>,
		connect_app_description: FormControl<string | null | undefined>,
		connect_app_friendly_name: FormControl<string | null | undefined>,
		connect_app_homepage_url: FormControl<string | null | undefined>,
		connect_app_sid: FormControl<string | null | undefined>,
	}
	export function CreateAuthAppFormGroup() {
		return new FormGroup<AuthAppFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			connect_app_company_name: new FormControl<string | null | undefined>(undefined),
			connect_app_description: new FormControl<string | null | undefined>(undefined),
			connect_app_friendly_name: new FormControl<string | null | undefined>(undefined),
			connect_app_homepage_url: new FormControl<string | null | undefined>(undefined),
			connect_app_sid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthApps {
		AuthAppsAuthorized_connect_apps?: Array<AuthAppsAuthorized_connect_apps>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface AuthAppsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAuthAppsFormGroup() {
		return new FormGroup<AuthAppsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthAppsAuthorized_connect_apps {
		account_sid?: string | null;
		connect_app_company_name?: string | null;
		connect_app_description?: string | null;
		connect_app_friendly_name?: string | null;
		connect_app_homepage_url?: string | null;
		connect_app_sid?: string | null;
		permissions?: Array<string>;
	}
	export interface AuthAppsAuthorized_connect_appsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		connect_app_company_name: FormControl<string | null | undefined>,
		connect_app_description: FormControl<string | null | undefined>,
		connect_app_friendly_name: FormControl<string | null | undefined>,
		connect_app_homepage_url: FormControl<string | null | undefined>,
		connect_app_sid: FormControl<string | null | undefined>,
	}
	export function CreateAuthAppsAuthorized_connect_appsFormGroup() {
		return new FormGroup<AuthAppsAuthorized_connect_appsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			connect_app_company_name: new FormControl<string | null | undefined>(undefined),
			connect_app_description: new FormControl<string | null | undefined>(undefined),
			connect_app_friendly_name: new FormControl<string | null | undefined>(undefined),
			connect_app_homepage_url: new FormControl<string | null | undefined>(undefined),
			connect_app_sid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailablePhoneNumbers {
		AvailablePhoneNumbersAvailable_phone_numbers?: Array<AvailablePhoneNumbersAvailable_phone_numbers>;
		uri?: string | null;
	}
	export interface AvailablePhoneNumbersFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAvailablePhoneNumbersFormGroup() {
		return new FormGroup<AvailablePhoneNumbersFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailablePhoneNumbersAvailable_phone_numbers {
		capabilities?: AvailablePhoneNumbersAvailable_phone_numbersCapabilities;
		friendly_name?: string | null;
		iso_country?: string | null;
		lata?: string | null;
		latitude?: string | null;
		longitude?: string | null;
		phone_number?: string | null;
		postal_code?: string | null;
		rate_center?: string | null;
		region?: string | null;
	}
	export interface AvailablePhoneNumbersAvailable_phone_numbersFormProperties {
		friendly_name: FormControl<string | null | undefined>,
		iso_country: FormControl<string | null | undefined>,
		lata: FormControl<string | null | undefined>,
		latitude: FormControl<string | null | undefined>,
		longitude: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		rate_center: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateAvailablePhoneNumbersAvailable_phone_numbersFormGroup() {
		return new FormGroup<AvailablePhoneNumbersAvailable_phone_numbersFormProperties>({
			friendly_name: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			lata: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			rate_center: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailablePhoneNumbersAvailable_phone_numbersCapabilities {
		MMS?: string | null;
		SMS?: string | null;
		voice?: string | null;
	}
	export interface AvailablePhoneNumbersAvailable_phone_numbersCapabilitiesFormProperties {
		MMS: FormControl<string | null | undefined>,
		SMS: FormControl<string | null | undefined>,
		voice: FormControl<string | null | undefined>,
	}
	export function CreateAvailablePhoneNumbersAvailable_phone_numbersCapabilitiesFormGroup() {
		return new FormGroup<AvailablePhoneNumbersAvailable_phone_numbersCapabilitiesFormProperties>({
			MMS: new FormControl<string | null | undefined>(undefined),
			SMS: new FormControl<string | null | undefined>(undefined),
			voice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Call {

		/** The unique id of the Account responsible for creating this call. */
		account_sid?: string | null;
		answered_by?: string | null;
		api_version?: string | null;
		caller_name?: string | null;

		/** GMT in RFC 2822 format. */
		date_created?: string | null;
		date_updated?: string | null;
		direction?: string | null;
		duration?: string | null;

		/** Given as GMT in RFC 2822 format. */
		end_time?: string | null;
		formatted_from?: string | null;
		formatted_to?: string | null;
		forwarded_from?: string | null;

		/** The phone number, SIP address or Client identifier that made this call. Phone numbers are in E.164 format (e.g. +16175551212). */
		from?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		parent_call_sid?: string | null;
		phone_number_sid?: string | null;
		price?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** Given as GMT in RFC 2822 format. */
		start_time?: string | null;
		status?: CallStatus | null;
		subresource_uris?: CallSubresource_uris;

		/** Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formated as name@company.com. Client identifiers are formatted client:name. */
		to?: string | null;
		uri?: string | null;
	}
	export interface CallFormProperties {

		/** The unique id of the Account responsible for creating this call. */
		account_sid: FormControl<string | null | undefined>,
		answered_by: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		caller_name: FormControl<string | null | undefined>,

		/** GMT in RFC 2822 format. */
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		direction: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,

		/** Given as GMT in RFC 2822 format. */
		end_time: FormControl<string | null | undefined>,
		formatted_from: FormControl<string | null | undefined>,
		formatted_to: FormControl<string | null | undefined>,
		forwarded_from: FormControl<string | null | undefined>,

		/** The phone number, SIP address or Client identifier that made this call. Phone numbers are in E.164 format (e.g. +16175551212). */
		from: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		parent_call_sid: FormControl<string | null | undefined>,
		phone_number_sid: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** Given as GMT in RFC 2822 format. */
		start_time: FormControl<string | null | undefined>,
		status: FormControl<CallStatus | null | undefined>,

		/** Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formated as name@company.com. Client identifiers are formatted client:name. */
		to: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCallFormGroup() {
		return new FormGroup<CallFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			answered_by: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			caller_name: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<string | null | undefined>(undefined),
			formatted_from: new FormControl<string | null | undefined>(undefined),
			formatted_to: new FormControl<string | null | undefined>(undefined),
			forwarded_from: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			parent_call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34)]),
			phone_number_sid: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34)]),
			start_time: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CallStatus | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CallStatus { queued = 0, ringing = 1, 'in-progress' = 2, canceled = 3, completed = 4, failed = 5, busy = 6, 'no-answer' = 7 }

	export interface CallSubresource_uris {
		notifications?: string | null;
		recordings?: string | null;
	}
	export interface CallSubresource_urisFormProperties {
		notifications: FormControl<string | null | undefined>,
		recordings: FormControl<string | null | undefined>,
	}
	export function CreateCallSubresource_urisFormGroup() {
		return new FormGroup<CallSubresource_urisFormProperties>({
			notifications: new FormControl<string | null | undefined>(undefined),
			recordings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CallInstance {

		/** The unique id of the Account responsible for creating this call. */
		account_sid?: string | null;

		/** If this call was initiated with answering machine detection, either human or machine. Empty otherwise. */
		answered_by?: CallInstanceAnswered_by | null;
		api_version?: string | null;

		/** If this call was an incoming call to a phone number with Caller ID Lookup enabled, the caller's name. Empty otherwise. */
		caller_name?: string | null;

		/** GMT in RFC 2822 format. */
		date_created?: string | null;
		date_updated?: string | null;

		/** A string describing the direction of the call. inbound for inbound calls, outbound-api for calls initiated via the REST API or outbound-dial for calls initiated by a <Dial> verb. */
		direction?: CallInstanceDirection | null;

		/** The length of the call in seconds. */
		duration?: string | null;

		/** Given as GMT in RFC 2822 format. */
		end_time?: string | null;

		/** If this call was an incoming call forwarded from another number, the forwarding phone number (depends on carrier supporting forwarding). Empty otherwise. */
		forwarded_from?: string | null;

		/** The phone number, SIP address or Client identifier that made this call. Phone numbers are in E.164 format (e.g. +16175551212). */
		from?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		parent_call_sid?: string | null;

		/** If the call was inbound, this is the Sid of the IncomingPhoneNumber that received the call. If the call was outbound, it is the Sid of the OutgoingCallerId from which the call was placed. */
		phone_number_sid?: string | null;

		/** The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available. */
		price?: string | null;

		/** The currency in which Price is measured, in ISO 4127 format. */
		price_unit?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** Given as GMT in RFC 2822 format. */
		start_time?: string | null;

		/** A string representing the status of the call. */
		status?: CallInstanceStatus | null;
		subresource_uris?: string | null;

		/** Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formated as name@company.com. Client identifiers are formatted client:name. */
		to?: string | null;

		/** The URI for this resource, relative to https://api.twilio.com */
		uri?: string | null;
	}
	export interface CallInstanceFormProperties {

		/** The unique id of the Account responsible for creating this call. */
		account_sid: FormControl<string | null | undefined>,

		/** If this call was initiated with answering machine detection, either human or machine. Empty otherwise. */
		answered_by: FormControl<CallInstanceAnswered_by | null | undefined>,
		api_version: FormControl<string | null | undefined>,

		/** If this call was an incoming call to a phone number with Caller ID Lookup enabled, the caller's name. Empty otherwise. */
		caller_name: FormControl<string | null | undefined>,

		/** GMT in RFC 2822 format. */
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,

		/** A string describing the direction of the call. inbound for inbound calls, outbound-api for calls initiated via the REST API or outbound-dial for calls initiated by a <Dial> verb. */
		direction: FormControl<CallInstanceDirection | null | undefined>,

		/** The length of the call in seconds. */
		duration: FormControl<string | null | undefined>,

		/** Given as GMT in RFC 2822 format. */
		end_time: FormControl<string | null | undefined>,

		/** If this call was an incoming call forwarded from another number, the forwarding phone number (depends on carrier supporting forwarding). Empty otherwise. */
		forwarded_from: FormControl<string | null | undefined>,

		/** The phone number, SIP address or Client identifier that made this call. Phone numbers are in E.164 format (e.g. +16175551212). */
		from: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		parent_call_sid: FormControl<string | null | undefined>,

		/** If the call was inbound, this is the Sid of the IncomingPhoneNumber that received the call. If the call was outbound, it is the Sid of the OutgoingCallerId from which the call was placed. */
		phone_number_sid: FormControl<string | null | undefined>,

		/** The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available. */
		price: FormControl<string | null | undefined>,

		/** The currency in which Price is measured, in ISO 4127 format. */
		price_unit: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** Given as GMT in RFC 2822 format. */
		start_time: FormControl<string | null | undefined>,

		/** A string representing the status of the call. */
		status: FormControl<CallInstanceStatus | null | undefined>,
		subresource_uris: FormControl<string | null | undefined>,

		/** Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formated as name@company.com. Client identifiers are formatted client:name. */
		to: FormControl<string | null | undefined>,

		/** The URI for this resource, relative to https://api.twilio.com */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCallInstanceFormGroup() {
		return new FormGroup<CallInstanceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			answered_by: new FormControl<CallInstanceAnswered_by | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			caller_name: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<CallInstanceDirection | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<string | null | undefined>(undefined),
			forwarded_from: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			parent_call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34)]),
			phone_number_sid: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34)]),
			start_time: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CallInstanceStatus | null | undefined>(undefined),
			subresource_uris: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CallInstanceAnswered_by { null = 0, human = 1, machine = 2 }

	export enum CallInstanceDirection { inbound = 0, 'outbound-api' = 1, 'outbound-dial' = 2 }

	export enum CallInstanceStatus { queued = 0, ringing = 1, 'in-progress' = 2, canceled = 3, completed = 4, failed = 5, busy = 6, 'no-answer' = 7 }

	export interface Calls {
		CallsCalls?: Array<CallsCalls>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface CallsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCallsFormGroup() {
		return new FormGroup<CallsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CallsCalls {
		account_sid?: string | null;
		answered_by?: string | null;
		api_version?: string | null;
		caller_name?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		direction?: string | null;
		duration?: string | null;
		end_time?: string | null;
		forwarded_from?: string | null;
		from?: string | null;
		from_formatted?: string | null;
		parent_call_sid?: string | null;
		phone_number_sid?: string | null;
		price?: string | null;
		sid?: string | null;
		start_time?: string | null;
		status?: string | null;
		subresource_uris?: CallsCallsSubresource_uris;
		to?: string | null;
		to_formatted?: string | null;
		uri?: string | null;
	}
	export interface CallsCallsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		answered_by: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		caller_name: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		direction: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
		end_time: FormControl<string | null | undefined>,
		forwarded_from: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		from_formatted: FormControl<string | null | undefined>,
		parent_call_sid: FormControl<string | null | undefined>,
		phone_number_sid: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		start_time: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		to_formatted: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCallsCallsFormGroup() {
		return new FormGroup<CallsCallsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			answered_by: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			caller_name: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<string | null | undefined>(undefined),
			forwarded_from: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			from_formatted: new FormControl<string | null | undefined>(undefined),
			parent_call_sid: new FormControl<string | null | undefined>(undefined),
			phone_number_sid: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			to_formatted: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CallsCallsSubresource_uris {
		notifications?: string | null;
		recordings?: string | null;
	}
	export interface CallsCallsSubresource_urisFormProperties {
		notifications: FormControl<string | null | undefined>,
		recordings: FormControl<string | null | undefined>,
	}
	export function CreateCallsCallsSubresource_urisFormGroup() {
		return new FormGroup<CallsCallsSubresource_urisFormProperties>({
			notifications: new FormControl<string | null | undefined>(undefined),
			recordings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Conference {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		status?: ConferenceStatus | null;
		subresource_uris?: ConferenceSubresource_uris;
		uri?: string | null;
	}
	export interface ConferenceFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		status: FormControl<ConferenceStatus | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateConferenceFormGroup() {
		return new FormGroup<ConferenceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ConferenceStatus | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConferenceStatus { init = 0, 'in-progress' = 1, completed = 2 }

	export interface ConferenceSubresource_uris {
		participants?: string | null;
	}
	export interface ConferenceSubresource_urisFormProperties {
		participants: FormControl<string | null | undefined>,
	}
	export function CreateConferenceSubresource_urisFormGroup() {
		return new FormGroup<ConferenceSubresource_urisFormProperties>({
			participants: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Conferences {
		ConferencesConferences?: Array<ConferencesConferences>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface ConferencesFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateConferencesFormGroup() {
		return new FormGroup<ConferencesFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferencesConferences {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		status?: string | null;
		subresource_uris?: ConferencesConferencesSubresource_uris;
		uri?: string | null;
	}
	export interface ConferencesConferencesFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateConferencesConferencesFormGroup() {
		return new FormGroup<ConferencesConferencesFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferencesConferencesSubresource_uris {
		participants?: string | null;
	}
	export interface ConferencesConferencesSubresource_urisFormProperties {
		participants: FormControl<string | null | undefined>,
	}
	export function CreateConferencesConferencesSubresource_urisFormGroup() {
		return new FormGroup<ConferencesConferencesSubresource_urisFormProperties>({
			participants: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectApp {
		account_sid?: string | null;
		authorize_redirect_url?: string | null;
		company_name?: string | null;
		deauthorize_callback_method?: string | null;
		deauthorize_callback_url?: string | null;
		description?: string | null;
		friendly_name?: string | null;
		homepage_url?: string | null;
		permissions?: Array<string>;
		sid?: string | null;
	}
	export interface ConnectAppFormProperties {
		account_sid: FormControl<string | null | undefined>,
		authorize_redirect_url: FormControl<string | null | undefined>,
		company_name: FormControl<string | null | undefined>,
		deauthorize_callback_method: FormControl<string | null | undefined>,
		deauthorize_callback_url: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		homepage_url: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
	}
	export function CreateConnectAppFormGroup() {
		return new FormGroup<ConnectAppFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			authorize_redirect_url: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			deauthorize_callback_method: new FormControl<string | null | undefined>(undefined),
			deauthorize_callback_url: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			homepage_url: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectApps {
		ConnectAppsConnect_apps?: Array<ConnectAppsConnect_apps>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface ConnectAppsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateConnectAppsFormGroup() {
		return new FormGroup<ConnectAppsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectAppsConnect_apps {
		account_sid?: string | null;
		authorize_redirect_url?: string | null;
		company_name?: string | null;
		deauthorize_callback_method?: string | null;
		deauthorize_callback_url?: string | null;
		description?: string | null;
		friendly_name?: string | null;
		homepage_url?: string | null;
		permissions?: Array<string>;
		sid?: string | null;
	}
	export interface ConnectAppsConnect_appsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		authorize_redirect_url: FormControl<string | null | undefined>,
		company_name: FormControl<string | null | undefined>,
		deauthorize_callback_method: FormControl<string | null | undefined>,
		deauthorize_callback_url: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		homepage_url: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
	}
	export function CreateConnectAppsConnect_appsFormGroup() {
		return new FormGroup<ConnectAppsConnect_appsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			authorize_redirect_url: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			deauthorize_callback_method: new FormControl<string | null | undefined>(undefined),
			deauthorize_callback_url: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			homepage_url: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Credential {
		date_created?: string | null;
		date_updated?: string | null;
		sid?: string | null;
		uri?: string | null;
		username?: string | null;
	}
	export interface CredentialFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateCredentialFormGroup() {
		return new FormGroup<CredentialFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialList {
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: CredentialListSubresource_uris;
		uri?: string | null;
	}
	export interface CredentialListFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListFormGroup() {
		return new FormGroup<CredentialListFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialListSubresource_uris {
		credentials?: string | null;
	}
	export interface CredentialListSubresource_urisFormProperties {
		credentials: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListSubresource_urisFormGroup() {
		return new FormGroup<CredentialListSubresource_urisFormProperties>({
			credentials: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialListMapping {
		account_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: CredentialListMappingSubresource_uris;
		uri?: string | null;
	}
	export interface CredentialListMappingFormProperties {
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListMappingFormGroup() {
		return new FormGroup<CredentialListMappingFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialListMappingSubresource_uris {
		credentials?: string | null;
	}
	export interface CredentialListMappingSubresource_urisFormProperties {
		credentials: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListMappingSubresource_urisFormGroup() {
		return new FormGroup<CredentialListMappingSubresource_urisFormProperties>({
			credentials: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialListMappings {
		credential_list_mappings?: Array<string>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface CredentialListMappingsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListMappingsFormGroup() {
		return new FormGroup<CredentialListMappingsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialLists {
		CredentialListsCredential_lists?: Array<CredentialListsCredential_lists>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface CredentialListsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListsFormGroup() {
		return new FormGroup<CredentialListsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialListsCredential_lists {
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: CredentialListsCredential_listsSubresource_uris;
		uri?: string | null;
	}
	export interface CredentialListsCredential_listsFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListsCredential_listsFormGroup() {
		return new FormGroup<CredentialListsCredential_listsFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialListsCredential_listsSubresource_uris {
		credentials?: string | null;
	}
	export interface CredentialListsCredential_listsSubresource_urisFormProperties {
		credentials: FormControl<string | null | undefined>,
	}
	export function CreateCredentialListsCredential_listsSubresource_urisFormGroup() {
		return new FormGroup<CredentialListsCredential_listsSubresource_urisFormProperties>({
			credentials: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Credentials {
		CredentialsCredentials?: Array<CredentialsCredentials>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface CredentialsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CredentialsCredentials {
		account_sid?: string | null;
		credential_list_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		sid?: string | null;
		uri?: string | null;
		username?: string | null;
	}
	export interface CredentialsCredentialsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		credential_list_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsCredentialsFormGroup() {
		return new FormGroup<CredentialsCredentialsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			credential_list_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Domain {
		account_sid?: string | null;
		api_version?: string | null;
		auth_type?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		domain_name?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: DomainSubresource_uris;
		uri?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_status_callback_method?: string | null;
		voice_status_callback_url?: string | null;
		voice_url?: string | null;
	}
	export interface DomainFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		auth_type: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		domain_name: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_status_callback_method: FormControl<string | null | undefined>,
		voice_status_callback_url: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			auth_type: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_status_callback_method: new FormControl<string | null | undefined>(undefined),
			voice_status_callback_url: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainSubresource_uris {
		credential_list_mappings?: string | null;
		ip_access_control_list_mappings?: string | null;
	}
	export interface DomainSubresource_urisFormProperties {
		credential_list_mappings: FormControl<string | null | undefined>,
		ip_access_control_list_mappings: FormControl<string | null | undefined>,
	}
	export function CreateDomainSubresource_urisFormGroup() {
		return new FormGroup<DomainSubresource_urisFormProperties>({
			credential_list_mappings: new FormControl<string | null | undefined>(undefined),
			ip_access_control_list_mappings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Domains {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		DomainsSip_domains?: Array<DomainsSip_domains>;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface DomainsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDomainsFormGroup() {
		return new FormGroup<DomainsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainsSip_domains {
		account_sid?: string | null;
		api_version?: string | null;
		auth_type?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		domain_name?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: DomainsSip_domainsSubresource_uris;
		uri?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_status_callback_method?: string | null;
		voice_status_callback_url?: string | null;
		voice_url?: string | null;
	}
	export interface DomainsSip_domainsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		auth_type: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		domain_name: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_status_callback_method: FormControl<string | null | undefined>,
		voice_status_callback_url: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateDomainsSip_domainsFormGroup() {
		return new FormGroup<DomainsSip_domainsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			auth_type: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_status_callback_method: new FormControl<string | null | undefined>(undefined),
			voice_status_callback_url: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainsSip_domainsSubresource_uris {
		credential_list_mappings?: string | null;
		ip_access_control_list_mappings?: string | null;
	}
	export interface DomainsSip_domainsSubresource_urisFormProperties {
		credential_list_mappings: FormControl<string | null | undefined>,
		ip_access_control_list_mappings: FormControl<string | null | undefined>,
	}
	export function CreateDomainsSip_domainsSubresource_urisFormGroup() {
		return new FormGroup<DomainsSip_domainsSubresource_urisFormProperties>({
			credential_list_mappings: new FormControl<string | null | undefined>(undefined),
			ip_access_control_list_mappings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingCall {
		account_sid?: string | null;
		api_version?: string | null;
		capabilities?: IncomingCallCapabilities;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		phone_number?: string | null;
		sid?: string | null;
		sms_application_sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_url?: string | null;
		status_callback?: string | null;
		status_callback_method?: string | null;
		uri?: string | null;
		voice_application_sid?: string | null;
		voice_caller_id_lookup?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_url?: string | null;
	}
	export interface IncomingCallFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_application_sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		status_callback: FormControl<string | null | undefined>,
		status_callback_method: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_application_sid: FormControl<string | null | undefined>,
		voice_caller_id_lookup: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateIncomingCallFormGroup() {
		return new FormGroup<IncomingCallFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_application_sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_application_sid: new FormControl<string | null | undefined>(undefined),
			voice_caller_id_lookup: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingCallCapabilities {
		sms?: string | null;
		voice?: string | null;
	}
	export interface IncomingCallCapabilitiesFormProperties {
		sms: FormControl<string | null | undefined>,
		voice: FormControl<string | null | undefined>,
	}
	export function CreateIncomingCallCapabilitiesFormGroup() {
		return new FormGroup<IncomingCallCapabilitiesFormProperties>({
			sms: new FormControl<string | null | undefined>(undefined),
			voice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingCalls {
		end?: number | null;
		first_page_uri?: string | null;
		IncomingCallsIncoming_phone_numbers?: Array<IncomingCallsIncoming_phone_numbers>;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface IncomingCallsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateIncomingCallsFormGroup() {
		return new FormGroup<IncomingCallsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingCallsIncoming_phone_numbers {
		account_sid?: string | null;
		api_version?: string | null;
		capabilities?: IncomingCallsIncoming_phone_numbersCapabilities;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		phone_number?: string | null;
		sid?: string | null;
		sms_application_sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_url?: string | null;
		status_callback?: string | null;
		status_callback_method?: string | null;
		uri?: string | null;
		voice_application_sid?: string | null;
		voice_caller_id_lookup?: string | null;
		voice_fallback_method?: string | null;
		voice_fallback_url?: string | null;
		voice_method?: string | null;
		voice_url?: string | null;
	}
	export interface IncomingCallsIncoming_phone_numbersFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_application_sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		status_callback: FormControl<string | null | undefined>,
		status_callback_method: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		voice_application_sid: FormControl<string | null | undefined>,
		voice_caller_id_lookup: FormControl<string | null | undefined>,
		voice_fallback_method: FormControl<string | null | undefined>,
		voice_fallback_url: FormControl<string | null | undefined>,
		voice_method: FormControl<string | null | undefined>,
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateIncomingCallsIncoming_phone_numbersFormGroup() {
		return new FormGroup<IncomingCallsIncoming_phone_numbersFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_application_sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			voice_application_sid: new FormControl<string | null | undefined>(undefined),
			voice_caller_id_lookup: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<string | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<string | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingCallsIncoming_phone_numbersCapabilities {
		sms?: boolean | null;
		voice?: boolean | null;
	}
	export interface IncomingCallsIncoming_phone_numbersCapabilitiesFormProperties {
		sms: FormControl<boolean | null | undefined>,
		voice: FormControl<boolean | null | undefined>,
	}
	export function CreateIncomingCallsIncoming_phone_numbersCapabilitiesFormGroup() {
		return new FormGroup<IncomingCallsIncoming_phone_numbersCapabilitiesFormProperties>({
			sms: new FormControl<boolean | null | undefined>(undefined),
			voice: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IpAccessControlList {
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: IpAccessControlListSubresource_uris;
		uri?: string | null;
	}
	export interface IpAccessControlListFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessControlListFormGroup() {
		return new FormGroup<IpAccessControlListFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAccessControlListSubresource_uris {
		addresses?: string | null;
	}
	export interface IpAccessControlListSubresource_urisFormProperties {
		addresses: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessControlListSubresource_urisFormGroup() {
		return new FormGroup<IpAccessControlListSubresource_urisFormProperties>({
			addresses: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAccessControlListMapping {
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: IpAccessControlListMappingSubresource_uris;
		uri?: string | null;
	}
	export interface IpAccessControlListMappingFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessControlListMappingFormGroup() {
		return new FormGroup<IpAccessControlListMappingFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAccessControlListMappingSubresource_uris {
		addresses?: string | null;
	}
	export interface IpAccessControlListMappingSubresource_urisFormProperties {
		addresses: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessControlListMappingSubresource_urisFormGroup() {
		return new FormGroup<IpAccessControlListMappingSubresource_urisFormProperties>({
			addresses: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAccessControlListMappings {
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: IpAccessControlListMappingsSubresource_uris;
		uri?: string | null;
	}
	export interface IpAccessControlListMappingsFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessControlListMappingsFormGroup() {
		return new FormGroup<IpAccessControlListMappingsFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAccessControlListMappingsSubresource_uris {
		addresses?: string | null;
	}
	export interface IpAccessControlListMappingsSubresource_urisFormProperties {
		addresses: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessControlListMappingsSubresource_urisFormGroup() {
		return new FormGroup<IpAccessControlListMappingsSubresource_urisFormProperties>({
			addresses: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAddress {
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		ip_address?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface IpAddressFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		ip_address: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressFormGroup() {
		return new FormGroup<IpAddressFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAddresses {
		end?: number | null;
		first_page_uri?: string | null;
		IpAddressesIp_addresses?: Array<IpAddressesIp_addresses>;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface IpAddressesFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressesFormGroup() {
		return new FormGroup<IpAddressesFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpAddressesIp_addresses {
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		ip_address?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface IpAddressesIp_addressesFormProperties {
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		ip_address: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressesIp_addressesFormGroup() {
		return new FormGroup<IpAddressesIp_addressesFormProperties>({
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media {
		account_sid?: string | null;
		'content-type'?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		parent_sid?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface MediaFormProperties {
		account_sid: FormControl<string | null | undefined>,
		'content-type': FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		parent_sid: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			'content-type': new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			parent_sid: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MediaList {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		MediaListMedia_list?: Array<MediaListMedia_list>;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface MediaListFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMediaListFormGroup() {
		return new FormGroup<MediaListFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MediaListMedia_list {
		account_sid?: string | null;
		content_type?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		parent_sid?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface MediaListMedia_listFormProperties {
		account_sid: FormControl<string | null | undefined>,
		content_type: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		parent_sid: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMediaListMedia_listFormGroup() {
		return new FormGroup<MediaListMedia_listFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			content_type: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			parent_sid: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Member {
		call_sid?: string | null;
		date_enqueued?: string | null;
		position?: number | null;
		uri?: string | null;
		wait_time?: number | null;
	}
	export interface MemberFormProperties {
		call_sid: FormControl<string | null | undefined>,
		date_enqueued: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
		wait_time: FormControl<number | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			call_sid: new FormControl<string | null | undefined>(undefined),
			date_enqueued: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			wait_time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Members {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		MembersQueue_members?: Array<MembersQueue_members>;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface MembersFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMembersFormGroup() {
		return new FormGroup<MembersFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MembersQueue_members {
		call_sid?: string | null;
		date_enqueued?: string | null;
		position?: number | null;
		uri?: string | null;
		wait_time?: number | null;
	}
	export interface MembersQueue_membersFormProperties {
		call_sid: FormControl<string | null | undefined>,
		date_enqueued: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
		wait_time: FormControl<number | null | undefined>,
	}
	export function CreateMembersQueue_membersFormGroup() {
		return new FormGroup<MembersQueue_membersFormProperties>({
			call_sid: new FormControl<string | null | undefined>(undefined),
			date_enqueued: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			wait_time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Message {
		account_sid?: string | null;
		api_version?: string | null;
		body?: string | null;
		date_created?: string | null;
		date_sent?: string | null;
		date_updated?: string | null;
		direction?: string | null;
		from?: string | null;
		num_media?: string | null;
		num_segments?: string | null;
		price?: string | null;
		sid?: string | null;
		status?: string | null;
		to?: string | null;
		uri?: string | null;
	}
	export interface MessageFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_sent: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		direction: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		num_media: FormControl<string | null | undefined>,
		num_segments: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_sent: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			num_media: new FormControl<string | null | undefined>(undefined),
			num_segments: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Messages {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		MessagesMessages?: Array<MessagesMessages>;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface MessagesFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMessagesFormGroup() {
		return new FormGroup<MessagesFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessagesMessages {
		account_sid?: string | null;
		api_version?: string | null;
		body?: string | null;
		date_created?: string | null;
		date_sent?: string | null;
		date_updated?: string | null;
		direction?: string | null;
		from?: string | null;
		num_media?: string | null;
		num_segments?: string | null;
		price?: string | null;
		sid?: string | null;
		status?: string | null;
		to?: string | null;
		uri?: string | null;
	}
	export interface MessagesMessagesFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_sent: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		direction: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		num_media: FormControl<string | null | undefined>,
		num_segments: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMessagesMessagesFormGroup() {
		return new FormGroup<MessagesMessagesFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_sent: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			num_media: new FormControl<string | null | undefined>(undefined),
			num_segments: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobilePhoneNumbers {
		MobilePhoneNumbersAvailable_phone_numbers?: Array<MobilePhoneNumbersAvailable_phone_numbers>;
		uri?: string | null;
	}
	export interface MobilePhoneNumbersFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMobilePhoneNumbersFormGroup() {
		return new FormGroup<MobilePhoneNumbersFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobilePhoneNumbersAvailable_phone_numbers {
		capabilities?: MobilePhoneNumbersAvailable_phone_numbersCapabilities;
		friendly_name?: string | null;
		iso_country?: string | null;
		lata?: string | null;
		latitude?: string | null;
		longitude?: string | null;
		phone_number?: string | null;
		postal_code?: string | null;
		rate_center?: string | null;
		region?: string | null;
	}
	export interface MobilePhoneNumbersAvailable_phone_numbersFormProperties {
		friendly_name: FormControl<string | null | undefined>,
		iso_country: FormControl<string | null | undefined>,
		lata: FormControl<string | null | undefined>,
		latitude: FormControl<string | null | undefined>,
		longitude: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		rate_center: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateMobilePhoneNumbersAvailable_phone_numbersFormGroup() {
		return new FormGroup<MobilePhoneNumbersAvailable_phone_numbersFormProperties>({
			friendly_name: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			lata: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			rate_center: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobilePhoneNumbersAvailable_phone_numbersCapabilities {
		MMS?: string | null;
		SMS?: string | null;
		voice?: string | null;
	}
	export interface MobilePhoneNumbersAvailable_phone_numbersCapabilitiesFormProperties {
		MMS: FormControl<string | null | undefined>,
		SMS: FormControl<string | null | undefined>,
		voice: FormControl<string | null | undefined>,
	}
	export function CreateMobilePhoneNumbersAvailable_phone_numbersCapabilitiesFormGroup() {
		return new FormGroup<MobilePhoneNumbersAvailable_phone_numbersCapabilitiesFormProperties>({
			MMS: new FormControl<string | null | undefined>(undefined),
			SMS: new FormControl<string | null | undefined>(undefined),
			voice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notification {
		account_sid?: string | null;
		api_version?: string | null;
		call_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		error_code?: string | null;
		log?: string | null;
		message_date?: string | null;
		message_text?: string | null;
		more_info?: string | null;
		request_method?: string | null;
		request_url?: string | null;
		request_variables?: string | null;
		response_body?: string | null;
		response_headers?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface NotificationFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		call_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		error_code: FormControl<string | null | undefined>,
		log: FormControl<string | null | undefined>,
		message_date: FormControl<string | null | undefined>,
		message_text: FormControl<string | null | undefined>,
		more_info: FormControl<string | null | undefined>,
		request_method: FormControl<string | null | undefined>,
		request_url: FormControl<string | null | undefined>,
		request_variables: FormControl<string | null | undefined>,
		response_body: FormControl<string | null | undefined>,
		response_headers: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			error_code: new FormControl<string | null | undefined>(undefined),
			log: new FormControl<string | null | undefined>(undefined),
			message_date: new FormControl<string | null | undefined>(undefined),
			message_text: new FormControl<string | null | undefined>(undefined),
			more_info: new FormControl<string | null | undefined>(undefined),
			request_method: new FormControl<string | null | undefined>(undefined),
			request_url: new FormControl<string | null | undefined>(undefined),
			request_variables: new FormControl<string | null | undefined>(undefined),
			response_body: new FormControl<string | null | undefined>(undefined),
			response_headers: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notifications {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		NotificationsNotifications?: Array<NotificationsNotifications>;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface NotificationsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateNotificationsFormGroup() {
		return new FormGroup<NotificationsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotificationsNotifications {
		account_sid?: string | null;
		api_version?: string | null;
		call_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		error_code?: string | null;
		log?: string | null;
		message_date?: string | null;
		message_text?: string | null;
		more_info?: string | null;
		request_method?: string | null;
		request_url?: string | null;
		request_variables?: string | null;
		response_body?: string | null;
		response_headers?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface NotificationsNotificationsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		call_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		error_code: FormControl<string | null | undefined>,
		log: FormControl<string | null | undefined>,
		message_date: FormControl<string | null | undefined>,
		message_text: FormControl<string | null | undefined>,
		more_info: FormControl<string | null | undefined>,
		request_method: FormControl<string | null | undefined>,
		request_url: FormControl<string | null | undefined>,
		request_variables: FormControl<string | null | undefined>,
		response_body: FormControl<string | null | undefined>,
		response_headers: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateNotificationsNotificationsFormGroup() {
		return new FormGroup<NotificationsNotificationsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			error_code: new FormControl<string | null | undefined>(undefined),
			log: new FormControl<string | null | undefined>(undefined),
			message_date: new FormControl<string | null | undefined>(undefined),
			message_text: new FormControl<string | null | undefined>(undefined),
			more_info: new FormControl<string | null | undefined>(undefined),
			request_method: new FormControl<string | null | undefined>(undefined),
			request_url: new FormControl<string | null | undefined>(undefined),
			request_variables: new FormControl<string | null | undefined>(undefined),
			response_body: new FormControl<string | null | undefined>(undefined),
			response_headers: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutCaller {
		account_sid?: string | null;
		call_sid?: string | null;
		friendly_name?: string | null;
		phone_number?: string | null;
		validation_code?: number | null;
	}
	export interface OutCallerFormProperties {
		account_sid: FormControl<string | null | undefined>,
		call_sid: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		validation_code: FormControl<number | null | undefined>,
	}
	export function CreateOutCallerFormGroup() {
		return new FormGroup<OutCallerFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			validation_code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutCallerId {
		account_sid?: string | null;
		call_sid?: string | null;
		friendly_name?: string | null;
		phone_number?: string | null;
		validation_code?: number | null;
	}
	export interface OutCallerIdFormProperties {
		account_sid: FormControl<string | null | undefined>,
		call_sid: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		validation_code: FormControl<number | null | undefined>,
	}
	export function CreateOutCallerIdFormGroup() {
		return new FormGroup<OutCallerIdFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			validation_code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutCallerIds {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		outgoing_caller_ids?: OutCallerIdsOutgoing_caller_ids;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface OutCallerIdsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOutCallerIdsFormGroup() {
		return new FormGroup<OutCallerIdsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutCallerIdsOutgoing_caller_ids {
		account_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		phone_number?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface OutCallerIdsOutgoing_caller_idsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOutCallerIdsOutgoing_caller_idsFormGroup() {
		return new FormGroup<OutCallerIdsOutgoing_caller_idsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutgoingCallerId {
		account_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		phone_number?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface OutgoingCallerIdFormProperties {
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOutgoingCallerIdFormGroup() {
		return new FormGroup<OutgoingCallerIdFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Participant {
		account_sid?: string | null;
		call_sid?: string | null;
		conference_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		end_conference_on_exit?: boolean | null;
		muted?: boolean | null;
		start_conference_on_enter?: boolean | null;
		uri?: string | null;
	}
	export interface ParticipantFormProperties {
		account_sid: FormControl<string | null | undefined>,
		call_sid: FormControl<string | null | undefined>,
		conference_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		end_conference_on_exit: FormControl<boolean | null | undefined>,
		muted: FormControl<boolean | null | undefined>,
		start_conference_on_enter: FormControl<boolean | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateParticipantFormGroup() {
		return new FormGroup<ParticipantFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined),
			conference_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			end_conference_on_exit: new FormControl<boolean | null | undefined>(undefined),
			muted: new FormControl<boolean | null | undefined>(undefined),
			start_conference_on_enter: new FormControl<boolean | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Participants {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		ParticipantsParticipants?: Array<ParticipantsParticipants>;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface ParticipantsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateParticipantsFormGroup() {
		return new FormGroup<ParticipantsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParticipantsParticipants {
		account_sid?: string | null;
		call_sid?: string | null;
		conference_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		end_conference_on_exit?: boolean | null;
		muted?: boolean | null;
		start_conference_on_enter?: boolean | null;
		uri?: string | null;
	}
	export interface ParticipantsParticipantsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		call_sid: FormControl<string | null | undefined>,
		conference_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		end_conference_on_exit: FormControl<boolean | null | undefined>,
		muted: FormControl<boolean | null | undefined>,
		start_conference_on_enter: FormControl<boolean | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateParticipantsParticipantsFormGroup() {
		return new FormGroup<ParticipantsParticipantsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined),
			conference_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			end_conference_on_exit: new FormControl<boolean | null | undefined>(undefined),
			muted: new FormControl<boolean | null | undefined>(undefined),
			start_conference_on_enter: new FormControl<boolean | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneLocalNumbers {
		PhoneLocalNumbersAvailable_phone_numbers?: Array<PhoneLocalNumbersAvailable_phone_numbers>;
		uri?: string | null;
	}
	export interface PhoneLocalNumbersFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePhoneLocalNumbersFormGroup() {
		return new FormGroup<PhoneLocalNumbersFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneLocalNumbersAvailable_phone_numbers {
		capabilities?: PhoneLocalNumbersAvailable_phone_numbersCapabilities;
		friendly_name?: string | null;
		iso_country?: string | null;
		lata?: string | null;
		latitude?: string | null;
		longitude?: string | null;
		phone_number?: string | null;
		postal_code?: string | null;
		rate_center?: string | null;
		region?: string | null;
	}
	export interface PhoneLocalNumbersAvailable_phone_numbersFormProperties {
		friendly_name: FormControl<string | null | undefined>,
		iso_country: FormControl<string | null | undefined>,
		lata: FormControl<string | null | undefined>,
		latitude: FormControl<string | null | undefined>,
		longitude: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		rate_center: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreatePhoneLocalNumbersAvailable_phone_numbersFormGroup() {
		return new FormGroup<PhoneLocalNumbersAvailable_phone_numbersFormProperties>({
			friendly_name: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			lata: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			rate_center: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneLocalNumbersAvailable_phone_numbersCapabilities {
		MMS?: string | null;
		SMS?: string | null;
		voice?: string | null;
	}
	export interface PhoneLocalNumbersAvailable_phone_numbersCapabilitiesFormProperties {
		MMS: FormControl<string | null | undefined>,
		SMS: FormControl<string | null | undefined>,
		voice: FormControl<string | null | undefined>,
	}
	export function CreatePhoneLocalNumbersAvailable_phone_numbersCapabilitiesFormGroup() {
		return new FormGroup<PhoneLocalNumbersAvailable_phone_numbersCapabilitiesFormProperties>({
			MMS: new FormControl<string | null | undefined>(undefined),
			SMS: new FormControl<string | null | undefined>(undefined),
			voice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneMobileNumbers {
		PhoneMobileNumbersAvailable_phone_numbers?: Array<PhoneMobileNumbersAvailable_phone_numbers>;
		uri?: string | null;
	}
	export interface PhoneMobileNumbersFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePhoneMobileNumbersFormGroup() {
		return new FormGroup<PhoneMobileNumbersFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneMobileNumbersAvailable_phone_numbers {
		capabilities?: PhoneMobileNumbersAvailable_phone_numbersCapabilities;
		friendly_name?: string | null;
		iso_country?: string | null;
		lata?: string | null;
		latitude?: string | null;
		longitude?: string | null;
		phone_number?: string | null;
		postal_code?: string | null;
		rate_center?: string | null;
		region?: string | null;
	}
	export interface PhoneMobileNumbersAvailable_phone_numbersFormProperties {
		friendly_name: FormControl<string | null | undefined>,
		iso_country: FormControl<string | null | undefined>,
		lata: FormControl<string | null | undefined>,
		latitude: FormControl<string | null | undefined>,
		longitude: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		rate_center: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreatePhoneMobileNumbersAvailable_phone_numbersFormGroup() {
		return new FormGroup<PhoneMobileNumbersAvailable_phone_numbersFormProperties>({
			friendly_name: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			lata: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			rate_center: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneMobileNumbersAvailable_phone_numbersCapabilities {
		MMS?: string | null;
		SMS?: string | null;
		voice?: string | null;
	}
	export interface PhoneMobileNumbersAvailable_phone_numbersCapabilitiesFormProperties {
		MMS: FormControl<string | null | undefined>,
		SMS: FormControl<string | null | undefined>,
		voice: FormControl<string | null | undefined>,
	}
	export function CreatePhoneMobileNumbersAvailable_phone_numbersCapabilitiesFormGroup() {
		return new FormGroup<PhoneMobileNumbersAvailable_phone_numbersCapabilitiesFormProperties>({
			MMS: new FormControl<string | null | undefined>(undefined),
			SMS: new FormControl<string | null | undefined>(undefined),
			voice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneNumbers {
		PhoneNumbersAvailable_phone_numbers?: Array<PhoneNumbersAvailable_phone_numbers>;
		uri?: string | null;
	}
	export interface PhoneNumbersFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumbersFormGroup() {
		return new FormGroup<PhoneNumbersFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneNumbersAvailable_phone_numbers {

		/** A nicely-formatted version of the phone number. */
		friendly_name?: string | null;

		/** The ISO country code of this phone number. */
		iso_country?: string | null;

		/** The LATA of this phone number. */
		lata?: string | null;

		/** The latitude coordinate of this phone number. */
		latitude?: string | null;

		/** The longitude coordinate of this phone number. */
		longitude?: string | null;

		/** The phone number, in E.164 (i.e. '+1') format. */
		phone_number?: string | null;

		/** The postal (zip) code of this phone number. */
		postal_code?: string | null;

		/** The rate center of this phone number. */
		rate_center?: string | null;

		/**
		 * The two-letter state or province abbreviation of this phone number.
		 * Max length: 2
		 * Min length: 2
		 */
		region?: string | null;
	}
	export interface PhoneNumbersAvailable_phone_numbersFormProperties {

		/** A nicely-formatted version of the phone number. */
		friendly_name: FormControl<string | null | undefined>,

		/** The ISO country code of this phone number. */
		iso_country: FormControl<string | null | undefined>,

		/** The LATA of this phone number. */
		lata: FormControl<string | null | undefined>,

		/** The latitude coordinate of this phone number. */
		latitude: FormControl<string | null | undefined>,

		/** The longitude coordinate of this phone number. */
		longitude: FormControl<string | null | undefined>,

		/** The phone number, in E.164 (i.e. '+1') format. */
		phone_number: FormControl<string | null | undefined>,

		/** The postal (zip) code of this phone number. */
		postal_code: FormControl<string | null | undefined>,

		/** The rate center of this phone number. */
		rate_center: FormControl<string | null | undefined>,

		/**
		 * The two-letter state or province abbreviation of this phone number.
		 * Max length: 2
		 * Min length: 2
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumbersAvailable_phone_numbersFormGroup() {
		return new FormGroup<PhoneNumbersAvailable_phone_numbersFormProperties>({
			friendly_name: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			lata: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			rate_center: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
		});

	}

	export interface PhoneTollFreeNumbers {
		PhoneTollFreeNumbersAvailable_phone_numbers?: Array<PhoneTollFreeNumbersAvailable_phone_numbers>;
		uri?: string | null;
	}
	export interface PhoneTollFreeNumbersFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePhoneTollFreeNumbersFormGroup() {
		return new FormGroup<PhoneTollFreeNumbersFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneTollFreeNumbersAvailable_phone_numbers {
		capabilities?: PhoneTollFreeNumbersAvailable_phone_numbersCapabilities;
		friendly_name?: string | null;
		iso_country?: string | null;
		phone_number?: string | null;
	}
	export interface PhoneTollFreeNumbersAvailable_phone_numbersFormProperties {
		friendly_name: FormControl<string | null | undefined>,
		iso_country: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
	}
	export function CreatePhoneTollFreeNumbersAvailable_phone_numbersFormGroup() {
		return new FormGroup<PhoneTollFreeNumbersAvailable_phone_numbersFormProperties>({
			friendly_name: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneTollFreeNumbersAvailable_phone_numbersCapabilities {
		MMS?: string | null;
		SMS?: string | null;
		voice?: string | null;
	}
	export interface PhoneTollFreeNumbersAvailable_phone_numbersCapabilitiesFormProperties {
		MMS: FormControl<string | null | undefined>,
		SMS: FormControl<string | null | undefined>,
		voice: FormControl<string | null | undefined>,
	}
	export function CreatePhoneTollFreeNumbersAvailable_phone_numbersCapabilitiesFormGroup() {
		return new FormGroup<PhoneTollFreeNumbersAvailable_phone_numbersCapabilitiesFormProperties>({
			MMS: new FormControl<string | null | undefined>(undefined),
			SMS: new FormControl<string | null | undefined>(undefined),
			voice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queue {
		average_wait_time?: number | null;
		current_size?: number | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;

		/** Maximum: 1000 */
		max_size?: number | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		uri?: string | null;
	}
	export interface QueueFormProperties {
		average_wait_time: FormControl<number | null | undefined>,
		current_size: FormControl<number | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,

		/** Maximum: 1000 */
		max_size: FormControl<number | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateQueueFormGroup() {
		return new FormGroup<QueueFormProperties>({
			average_wait_time: new FormControl<number | null | undefined>(undefined),
			current_size: new FormControl<number | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			max_size: new FormControl<number | null | undefined>(undefined, [Validators.max(1000)]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34)]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queues {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		QueuesQueues?: Array<QueuesQueues>;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface QueuesFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateQueuesFormGroup() {
		return new FormGroup<QueuesFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueuesQueues {
		average_wait_time?: number | null;
		current_size?: number | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;

		/** Maximum: 1000 */
		max_size?: number | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		uri?: string | null;
	}
	export interface QueuesQueuesFormProperties {
		average_wait_time: FormControl<number | null | undefined>,
		current_size: FormControl<number | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,

		/** Maximum: 1000 */
		max_size: FormControl<number | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateQueuesQueuesFormGroup() {
		return new FormGroup<QueuesQueuesFormProperties>({
			average_wait_time: new FormControl<number | null | undefined>(undefined),
			current_size: new FormControl<number | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			max_size: new FormControl<number | null | undefined>(undefined, [Validators.max(1000)]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34)]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Recordings {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		RecordingsRecordings?: Array<RecordingsRecordings>;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface RecordingsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRecordingsFormGroup() {
		return new FormGroup<RecordingsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecordingsRecordings {
		account_sid?: string | null;
		api_version?: string | null;
		call_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		duration?: string | null;
		sid?: string | null;
		uri?: string | null;
	}
	export interface RecordingsRecordingsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		call_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRecordingsRecordingsFormGroup() {
		return new FormGroup<RecordingsRecordingsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShortCode {
		account_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		short_code?: string | null;
		sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_url?: string | null;
		uri?: string | null;
	}
	export interface ShortCodeFormProperties {
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		short_code: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateShortCodeFormGroup() {
		return new FormGroup<ShortCodeFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			short_code: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShortCodes {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		ShortCodesShort_codes?: Array<ShortCodesShort_codes>;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface ShortCodesFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateShortCodesFormGroup() {
		return new FormGroup<ShortCodesFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShortCodesShort_codes {
		account_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		short_code?: string | null;
		sid?: string | null;
		sms_fallback_method?: string | null;
		sms_fallback_url?: string | null;
		sms_method?: string | null;
		sms_url?: string | null;
		uri?: string | null;
	}
	export interface ShortCodesShort_codesFormProperties {
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		short_code: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		sms_fallback_method: FormControl<string | null | undefined>,
		sms_fallback_url: FormControl<string | null | undefined>,
		sms_method: FormControl<string | null | undefined>,
		sms_url: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateShortCodesShort_codesFormGroup() {
		return new FormGroup<ShortCodesShort_codesFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			short_code: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			sms_fallback_method: new FormControl<string | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<string | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transcription {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		duration?: string | null;
		price?: string | null;
		recording_sid?: string | null;
		sid?: string | null;
		status?: string | null;
		transcription_text?: string | null;
		type?: string | null;
		uri?: string | null;
	}
	export interface TranscriptionFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		recording_sid: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		transcription_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTranscriptionFormGroup() {
		return new FormGroup<TranscriptionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			recording_sid: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			transcription_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transcriptions {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		TranscriptionsTranscriptions?: Array<TranscriptionsTranscriptions>;
		uri?: string | null;
	}
	export interface TranscriptionsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTranscriptionsFormGroup() {
		return new FormGroup<TranscriptionsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranscriptionsTranscriptions {
		account_sid?: string | null;
		api_version?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		duration?: string | null;
		price?: string | null;
		recording_sid?: string | null;
		sid?: string | null;
		status?: string | null;
		transcription_text?: string | null;
		type?: string | null;
		uri?: string | null;
	}
	export interface TranscriptionsTranscriptionsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		api_version: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		recording_sid: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		transcription_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTranscriptionsTranscriptionsFormGroup() {
		return new FormGroup<TranscriptionsTranscriptionsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			recording_sid: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			transcription_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsageRecords {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
		usage_records?: UsageRecordsUsage_records;
	}
	export interface UsageRecordsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUsageRecordsFormGroup() {
		return new FormGroup<UsageRecordsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsageRecordsUsage_records {
		account_sid?: string | null;
		category?: string | null;
		count?: string | null;
		count_unit?: string | null;
		description?: string | null;
		end_date?: string | null;
		price?: string | null;
		price_unit?: string | null;
		start_date?: string | null;
		subresource_uris?: string | null;
		uri?: string | null;
		usage?: string | null;
		usage_unit?: string | null;
	}
	export interface UsageRecordsUsage_recordsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
		count: FormControl<string | null | undefined>,
		count_unit: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		end_date: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		price_unit: FormControl<string | null | undefined>,
		start_date: FormControl<string | null | undefined>,
		subresource_uris: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		usage: FormControl<string | null | undefined>,
		usage_unit: FormControl<string | null | undefined>,
	}
	export function CreateUsageRecordsUsage_recordsFormGroup() {
		return new FormGroup<UsageRecordsUsage_recordsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			count_unit: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
			subresource_uris: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<string | null | undefined>(undefined),
			usage_unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsageTrigger {

		/** The account this trigger monitors. */
		account_sid?: string | null;

		/** The HTTP method Twilio will use when making a request to the CallbackUrl. GET or POST. */
		callback_method?: UsageTriggerCallback_method | null;

		/** Twilio will make a request to this url when the trigger fires. */
		callback_url?: string | null;

		/** The current value of the field the trigger is watching. */
		current_value?: string | null;

		/** The date the trigger was created, given as GMT RFC 2822 format. */
		date_created?: string | null;

		/** The date the trigger was last fired, given as GMT RFC 2822 format. */
		date_fired?: string | null;

		/** The date the trigger was last updated, given as GMT RFC 2822 format. */
		date_updated?: string | null;

		/** A user-specified, human-readable name for the trigger. */
		friendly_name?: string | null;

		/** How this trigger recurs. Empty for non-recurring triggers. One of daily, monthly, or yearly for recurring triggers. A trigger will only fire once during each recurring period. Recurring periods are in GMT. */
		recurring?: string | null;

		/** The trigger's unique Sid. */
		sid?: string | null;

		/** The field in the UsageRecord that fires the trigger. One of count, usage, or price. */
		trigger_by?: UsageTriggerTrigger_by | null;

		/** The value at which the trigger will fire. Must be a positive numeric value. */
		trigger_value?: string | null;

		/** The URI for this resource, relative to https://api.twilio.com. */
		uri?: string | null;

		/** The usage category the trigger watches. One of the supported usage categories. */
		usage_category?: string | null;

		/** The URI of the UsageRecord this trigger is watching, relative to https://api.twilio.com. */
		usage_record_uri?: string | null;
	}
	export interface UsageTriggerFormProperties {

		/** The account this trigger monitors. */
		account_sid: FormControl<string | null | undefined>,

		/** The HTTP method Twilio will use when making a request to the CallbackUrl. GET or POST. */
		callback_method: FormControl<UsageTriggerCallback_method | null | undefined>,

		/** Twilio will make a request to this url when the trigger fires. */
		callback_url: FormControl<string | null | undefined>,

		/** The current value of the field the trigger is watching. */
		current_value: FormControl<string | null | undefined>,

		/** The date the trigger was created, given as GMT RFC 2822 format. */
		date_created: FormControl<string | null | undefined>,

		/** The date the trigger was last fired, given as GMT RFC 2822 format. */
		date_fired: FormControl<string | null | undefined>,

		/** The date the trigger was last updated, given as GMT RFC 2822 format. */
		date_updated: FormControl<string | null | undefined>,

		/** A user-specified, human-readable name for the trigger. */
		friendly_name: FormControl<string | null | undefined>,

		/** How this trigger recurs. Empty for non-recurring triggers. One of daily, monthly, or yearly for recurring triggers. A trigger will only fire once during each recurring period. Recurring periods are in GMT. */
		recurring: FormControl<string | null | undefined>,

		/** The trigger's unique Sid. */
		sid: FormControl<string | null | undefined>,

		/** The field in the UsageRecord that fires the trigger. One of count, usage, or price. */
		trigger_by: FormControl<UsageTriggerTrigger_by | null | undefined>,

		/** The value at which the trigger will fire. Must be a positive numeric value. */
		trigger_value: FormControl<string | null | undefined>,

		/** The URI for this resource, relative to https://api.twilio.com. */
		uri: FormControl<string | null | undefined>,

		/** The usage category the trigger watches. One of the supported usage categories. */
		usage_category: FormControl<string | null | undefined>,

		/** The URI of the UsageRecord this trigger is watching, relative to https://api.twilio.com. */
		usage_record_uri: FormControl<string | null | undefined>,
	}
	export function CreateUsageTriggerFormGroup() {
		return new FormGroup<UsageTriggerFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			callback_method: new FormControl<UsageTriggerCallback_method | null | undefined>(undefined),
			callback_url: new FormControl<string | null | undefined>(undefined),
			current_value: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_fired: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			recurring: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			trigger_by: new FormControl<UsageTriggerTrigger_by | null | undefined>(undefined),
			trigger_value: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			usage_category: new FormControl<string | null | undefined>(undefined),
			usage_record_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UsageTriggerCallback_method { GET = 0, POST = 1 }

	export enum UsageTriggerTrigger_by { count = 0, usage = 1, price = 2 }

	export interface UsageTriggers {
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
		UsageTriggersUsage_triggers?: Array<UsageTriggersUsage_triggers>;
	}
	export interface UsageTriggersFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUsageTriggersFormGroup() {
		return new FormGroup<UsageTriggersFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsageTriggersUsage_triggers {
		account_sid?: string | null;
		callback_method?: UsageTriggersUsage_triggersCallback_method | null;
		callback_url?: string | null;
		current_value?: string | null;
		date_created?: string | null;
		date_fired?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		recurring?: string | null;
		sid?: string | null;
		trigger_by?: UsageTriggersUsage_triggersTrigger_by | null;
		trigger_value?: string | null;
		uri?: string | null;
		usage_category?: string | null;
		usage_record_uri?: string | null;
	}
	export interface UsageTriggersUsage_triggersFormProperties {
		account_sid: FormControl<string | null | undefined>,
		callback_method: FormControl<UsageTriggersUsage_triggersCallback_method | null | undefined>,
		callback_url: FormControl<string | null | undefined>,
		current_value: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_fired: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		recurring: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		trigger_by: FormControl<UsageTriggersUsage_triggersTrigger_by | null | undefined>,
		trigger_value: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		usage_category: FormControl<string | null | undefined>,
		usage_record_uri: FormControl<string | null | undefined>,
	}
	export function CreateUsageTriggersUsage_triggersFormGroup() {
		return new FormGroup<UsageTriggersUsage_triggersFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			callback_method: new FormControl<UsageTriggersUsage_triggersCallback_method | null | undefined>(undefined),
			callback_url: new FormControl<string | null | undefined>(undefined),
			current_value: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_fired: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			recurring: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			trigger_by: new FormControl<UsageTriggersUsage_triggersTrigger_by | null | undefined>(undefined),
			trigger_value: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			usage_category: new FormControl<string | null | undefined>(undefined),
			usage_record_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UsageTriggersUsage_triggersCallback_method { GET = 0, POST = 1 }

	export enum UsageTriggersUsage_triggersTrigger_by { count = 0, usage = 1, price = 2 }

	export interface UserLists {
		UserListsCredential_list_mappings?: Array<UserListsCredential_list_mappings>;
		end?: number | null;
		first_page_uri?: string | null;
		last_page_uri?: string | null;
		next_page_uri?: string | null;
		num_pages?: number | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_uri?: string | null;
		start?: number | null;
		total?: number | null;
		uri?: string | null;
	}
	export interface UserListsFormProperties {
		end: FormControl<number | null | undefined>,
		first_page_uri: FormControl<string | null | undefined>,
		last_page_uri: FormControl<string | null | undefined>,
		next_page_uri: FormControl<string | null | undefined>,
		num_pages: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_uri: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserListsFormGroup() {
		return new FormGroup<UserListsFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			first_page_uri: new FormControl<string | null | undefined>(undefined),
			last_page_uri: new FormControl<string | null | undefined>(undefined),
			next_page_uri: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_uri: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserListsCredential_list_mappings {
		account_sid?: string | null;
		date_created?: string | null;
		date_updated?: string | null;
		friendly_name?: string | null;
		sid?: string | null;
		subresource_uris?: UserListsCredential_list_mappingsSubresource_uris;
		uri?: string | null;
	}
	export interface UserListsCredential_list_mappingsFormProperties {
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<string | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserListsCredential_list_mappingsFormGroup() {
		return new FormGroup<UserListsCredential_list_mappingsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserListsCredential_list_mappingsSubresource_uris {
		credentials?: string | null;
	}
	export interface UserListsCredential_list_mappingsSubresource_urisFormProperties {
		credentials: FormControl<string | null | undefined>,
	}
	export function CreateUserListsCredential_list_mappingsSubresource_urisFormGroup() {
		return new FormGroup<UserListsCredential_list_mappingsSubresource_urisFormProperties>({
			credentials: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get application instance resource.
		 * Get Accounts/{AccountSid}/Applications/{ApplicationSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ApplicationSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Applications/' + (ApplicationSid == null ? '' : encodeURIComponent(ApplicationSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tries to update the application's properties, and returns the updated
		 * resource representation if successful. The returned response is identical
		 * to that returned above when making a GET request.
		 * Post Accounts/{AccountSid}/Applications/{ApplicationSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ApplicationSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Applications/' + (ApplicationSid == null ? '' : encodeURIComponent(ApplicationSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete this application.
		 * Delete Accounts/{AccountSid}/Applications/{ApplicationSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ApplicationSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Applications/' + (ApplicationSid == null ? '' : encodeURIComponent(ApplicationSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Application resource representations, each representing
		 * an application within your account. The list includes paging information.
		 * Get Accounts/{AccountSid}/Applications{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidApplications_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Applications' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new application within your account.
		 * Post Accounts/{AccountSid}/Applications{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidApplications_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Applications' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the properties of the authorized application.
		 * Get Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidAuthorizedConnectApps_ConnectAppSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ConnectAppSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/AuthorizedConnectApps/' + (ConnectAppSid == null ? '' : encodeURIComponent(ConnectAppSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Connect App resource representations, each representing a
		 * Connect App you've authorized to access your account. The list includes
		 * paging information.
		 * Get Accounts/{AccountSid}/AuthorizedConnectApps{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidAuthorizedConnectApps_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/AuthorizedConnectApps' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of local AvailablePhoneNumber resource representations
		 * that match the specified filters, each representing a phone number tha
		 * is currently available for provisioning within your account.
		 * Get Accounts/{AccountSid}/AvailablePhoneNumbers/{IsoCountryCode}/Local{mediaTypeExtension}
		 * @param {string} IsoCountryCode ISO 3166-1 alpha-2.
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidAvailablePhoneNumbers_IsoCountryCodeLocal_mediaTypeExtensionGet(AccountSid: string, IsoCountryCode: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/AvailablePhoneNumbers/' + (IsoCountryCode == null ? '' : encodeURIComponent(IsoCountryCode)) + '/Local' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of mobile AvailablePhoneNumber resource representations that match the specified filters, each representing a phone number that is currently available for provisioning within your account.
		 * Get Accounts/{AccountSid}/AvailablePhoneNumbers/{IsoCountryCode}/Mobile{mediaTypeExtension}
		 * @param {string} IsoCountryCode ISO 3166-1 alpha-2.
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidAvailablePhoneNumbers_IsoCountryCodeMobile_mediaTypeExtensionGet(AccountSid: string, IsoCountryCode: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/AvailablePhoneNumbers/' + (IsoCountryCode == null ? '' : encodeURIComponent(IsoCountryCode)) + '/Mobile' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of toll-free AvailablePhoneNumber elements that match the
		 * specified filters, each representing a phone number that is currently
		 * available for provisioning within your account. To provision an available
		 * phone number, POST the number to the IncomingPhoneNumbers resource.
		 * Get Accounts/{AccountSid}/AvailablePhoneNumbers/{IsoCountryCode}/TollFree{mediaTypeExtension}
		 * @param {string} IsoCountryCode ISO 3166-1 alpha-2.
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidAvailablePhoneNumbers_IsoCountryCodeTollFree_mediaTypeExtensionGet(AccountSid: string, IsoCountryCode: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/AvailablePhoneNumbers/' + (IsoCountryCode == null ? '' : encodeURIComponent(IsoCountryCode)) + '/TollFree' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of all AvailablePhoneNumber subresources for your account by ISO Country. For full information about our phone number support, see our Phone Number CSV (http://www.twilio.com/resources/rates/international-phone-number-rates.csv).
		 * Get Accounts/{AccountSid}/AvailablePhoneNumbers{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidAvailablePhoneNumbers_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/AvailablePhoneNumbers' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of notifications generated for an account. The list includes
		 * paging information.
		 * Get Accounts/{AccountSid}/Calls/{CallSid}/Notifications{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidCalls_CallSidNotifications_mediaTypeExtensionGet(AccountSid: string, CallSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Calls/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + '/Notifications' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Recording resource representations, each representing a
		 * recording generated during the course of a phone call.
		 * Get Accounts/{AccountSid}/Calls/{CallSid}/Recordings{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidCalls_CallSidRecordings_mediaTypeExtensionGet(AccountSid: string, CallSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Calls/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + '/Recordings' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the single Call resource identified by {CallSid}.
		 * Get Accounts/{AccountSid}/Calls/{CallSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidCalls_CallSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CallSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Calls/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify a phone call.
		 * Post Accounts/{AccountSid}/Calls/{CallSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidCalls_CallSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CallSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Calls/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of phone calls made to and from the account identified by {AccountSid}.
		 * Get Accounts/{AccountSid}/Calls{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidCalls_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Calls' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * To make a call, make an HTTP POST request. Initiate a new phone call.
		 * Post Accounts/{AccountSid}/Calls{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidCalls_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Calls' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a representation of this participant.
		 * Get Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidConferences_ConferenceSidParticipants_CallSid_mediaTypeExtensionGet(AccountSid: string, ConferenceSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CallSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + '/Participants/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the status of a participant.
		 * Post Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidConferences_ConferenceSidParticipants_CallSid_mediaTypeExtensionPost(AccountSid: string, ConferenceSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CallSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + '/Participants/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Kick this participant from the conference.
		 * Delete Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidConferences_ConferenceSidParticipants_CallSid_mediaTypeExtensionDelete(AccountSid: string, ConferenceSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CallSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + '/Participants/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the list of participants in the conference identified by
		 * {ConferenceSid}.
		 * Get Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidConferences_ConferenceSidParticipants_mediaTypeExtensionGet(AccountSid: string, ConferenceSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + '/Participants' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a representation of the conference identified by {ConferenceSid}.
		 * Get Accounts/{AccountSid}/Conferences/{ConferenceSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidConferences_ConferenceSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ConferenceSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of conferences within an account. The list includes paging
		 * information.
		 * Get Accounts/{AccountSid}/Conferences{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidConferences_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Conferences' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the properties of a Connect App.
		 * Get Accounts/{AccountSid}/ConnectApps/{ConnectAppSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidConnectApps_ConnectAppSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ConnectAppSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/ConnectApps/' + (ConnectAppSid == null ? '' : encodeURIComponent(ConnectAppSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tries to update the Connect App's properties, and returns the updated
		 * resource representation if successful. The returned response is identical
		 * to that returned above when making a GET request.
		 * Post Accounts/{AccountSid}/ConnectApps/{ConnectAppSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidConnectApps_ConnectAppSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ConnectAppSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/ConnectApps/' + (ConnectAppSid == null ? '' : encodeURIComponent(ConnectAppSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Connect App resource representations, each representing
		 * a Connect App in your account. The list includes paging information.
		 * Get Accounts/{AccountSid}/ConnectApps{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidConnectApps_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/ConnectApps' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of local <IncomingPhoneNumber> elements, each representing a local (not toll-free) phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out toll-free numbers.
		 * Get Accounts/{AccountSid}/IncomingPhoneNumbers/Local{mediaTypeExtension}
		 * @return {void} OK
		 */
		Accounts_AccountSidIncomingPhoneNumbersLocal_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/Local' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number.
		 * Post Accounts/{AccountSid}/IncomingPhoneNumbers/Local{mediaTypeExtension}
		 * @return {void} 
		 */
		Accounts_AccountSidIncomingPhoneNumbersLocal_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/Local' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of local <IncomingPhoneNumber> elements, each representing a mobile phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out local and toll free numbers.
		 * Get Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile{mediaTypeExtension}
		 * @return {void} OK
		 */
		Accounts_AccountSidIncomingPhoneNumbersMobile_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/Mobile' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number.
		 * Post Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile{mediaTypeExtension}
		 * @return {void} 
		 */
		Accounts_AccountSidIncomingPhoneNumbersMobile_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/Mobile' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of local <IncomingPhoneNumber> elements, each representing a toll-free phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out all numbers that aren't toll-free.
		 * Get Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree{mediaTypeExtension}
		 * @return {void} OK
		 */
		Accounts_AccountSidIncomingPhoneNumbersTollFree_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/TollFree' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number.
		 * Post Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree{mediaTypeExtension}
		 * @return {void} 
		 */
		Accounts_AccountSidIncomingPhoneNumbersTollFree_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/TollFree' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get info about incoming call's phone number.
		 * Get Accounts/{AccountSid}/IncomingPhoneNumbers/{IncomingPhoneNumberSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidIncomingPhoneNumbers_IncomingPhoneNumberSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IncomingPhoneNumberSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/' + (IncomingPhoneNumberSid == null ? '' : encodeURIComponent(IncomingPhoneNumberSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tries to update the incoming phone number's properties, and returns the
		 * updated resource representation if successful. The returned response is
		 * identical to that returned above when making a GET request.
		 * Put Accounts/{AccountSid}/IncomingPhoneNumbers/{IncomingPhoneNumberSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidIncomingPhoneNumbers_IncomingPhoneNumberSid_mediaTypeExtensionPut(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IncomingPhoneNumberSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/' + (IncomingPhoneNumberSid == null ? '' : encodeURIComponent(IncomingPhoneNumberSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tries to update the incoming phone number's properties, and returns the
		 * updated resource representation if successful. The returned response is
		 * identical to that returned above when making a GET request.
		 * Post Accounts/{AccountSid}/IncomingPhoneNumbers/{IncomingPhoneNumberSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidIncomingPhoneNumbers_IncomingPhoneNumberSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IncomingPhoneNumberSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/' + (IncomingPhoneNumberSid == null ? '' : encodeURIComponent(IncomingPhoneNumberSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Release this phone number from your account. Twilio will no longer answer
		 * calls to this number, and you will stop being billed the monthly phone
		 * number fee. The phone number will eventually be recycled and potentially
		 * given to another customer, so use with care. If you make a mistake, contac
		 * us. We may be able to give you the number back.
		 * Delete Accounts/{AccountSid}/IncomingPhoneNumbers/{IncomingPhoneNumberSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidIncomingPhoneNumbers_IncomingPhoneNumberSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IncomingPhoneNumberSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers/' + (IncomingPhoneNumberSid == null ? '' : encodeURIComponent(IncomingPhoneNumberSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of IncomingPhoneNumber resource representations, each
		 * representing a phone number given to your account. The list includes paging
		 * information.
		 * Get Accounts/{AccountSid}/IncomingPhoneNumbers{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidIncomingPhoneNumbers_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Purchases a new phone number for your account. If a phone number is found
		 * for your request, Twilio will add it to your account and bill you for the
		 * first month's cost of the phone number.
		 * To find an available phone number to POST, use the subresources of the
		 * AvailablePhoneNumbers list resource.
		 * Post Accounts/{AccountSid}/IncomingPhoneNumbers{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidIncomingPhoneNumbers_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/IncomingPhoneNumbers' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Without an extension, the media is returned using the mime-type provided when the media was generated.
		 * Get Accounts/{AccountSid}/Messages/{MessageSid}/Media/{MediaSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidMessages_MessageSidMedia_MediaSid_mediaTypeExtensionGet(AccountSid: string, MessageSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, MediaSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Messages/' + (MessageSid == null ? '' : encodeURIComponent(MessageSid)) + '/Media/' + (MediaSid == null ? '' : encodeURIComponent(MediaSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of media associated with your message.
		 * Get Accounts/{AccountSid}/Messages/{MessageSid}/Media{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidMessages_MessageSidMedia_mediaTypeExtensionGet(AccountSid: string, MessageSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Messages/' + (MessageSid == null ? '' : encodeURIComponent(MessageSid)) + '/Media' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single message specified by the provided {MessageSid}.
		 * Get Accounts/{AccountSid}/Messages/{MessageSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidMessages_MessageSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, MessageSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Messages/' + (MessageSid == null ? '' : encodeURIComponent(MessageSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of messages associated with your account. The list includes paging information.
		 * Get Accounts/{AccountSid}/Messages{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidMessages_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Messages' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a notification entry.
		 * Get Accounts/{AccountSid}/Notifications/{NotificationSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidNotifications_NotificationSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, NotificationSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Notifications/' + (NotificationSid == null ? '' : encodeURIComponent(NotificationSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the notification identified by {NotificationSid} from an account's log.
		 * Delete Accounts/{AccountSid}/Notifications/{NotificationSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidNotifications_NotificationSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, NotificationSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Notifications/' + (NotificationSid == null ? '' : encodeURIComponent(NotificationSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of notifications generated for an account. The list includes
		 * paging information.
		 * Get Accounts/{AccountSid}/Notifications{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidNotifications_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Notifications' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the set of an account's verified phone numbers.
		 * Get Accounts/{AccountSid}/OutgoingCallerIds/{OutgoingCallerIdSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidOutgoingCallerIds_OutgoingCallerIdSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, OutgoingCallerIdSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/OutgoingCallerIds/' + (OutgoingCallerIdSid == null ? '' : encodeURIComponent(OutgoingCallerIdSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the caller id, and returns the updated resource if successful.
		 * Put Accounts/{AccountSid}/OutgoingCallerIds/{OutgoingCallerIdSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidOutgoingCallerIds_OutgoingCallerIdSid_mediaTypeExtensionPut(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, OutgoingCallerIdSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/OutgoingCallerIds/' + (OutgoingCallerIdSid == null ? '' : encodeURIComponent(OutgoingCallerIdSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the caller id, and returns the updated resource if successful.
		 * Post Accounts/{AccountSid}/OutgoingCallerIds/{OutgoingCallerIdSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidOutgoingCallerIds_OutgoingCallerIdSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, OutgoingCallerIdSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/OutgoingCallerIds/' + (OutgoingCallerIdSid == null ? '' : encodeURIComponent(OutgoingCallerIdSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the caller ID from the account. Returns an HTTP 204 response if
		 * successful, with no body.
		 * Delete Accounts/{AccountSid}/OutgoingCallerIds/{OutgoingCallerIdSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidOutgoingCallerIds_OutgoingCallerIdSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, OutgoingCallerIdSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/OutgoingCallerIds/' + (OutgoingCallerIdSid == null ? '' : encodeURIComponent(OutgoingCallerIdSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of OutgoingCallerId resource representations, each representing
		 * a Caller ID number valid for an account. The list includes paging information.
		 * Get Accounts/{AccountSid}/OutgoingCallerIds{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidOutgoingCallerIds_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/OutgoingCallerIds' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new CallerID to your account.
		 * Post Accounts/{AccountSid}/OutgoingCallerIds{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidOutgoingCallerIds_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/OutgoingCallerIds' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a front member.
		 * Get Accounts/{AccountSid}/Queues/{QueueSid}/Members/Front{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidQueues_QueueSidMembersFront_mediaTypeExtensionGet(AccountSid: string, QueueSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + '/Members/Front' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Posting a URL and Method to a Queue instance will dequeue a member from a
		 * queue and have the member's call begin executing the TwiML document at that URL
		 * When dequeuing the 'Front' of the queue, the next call in the queue will be redirected.
		 * Post Accounts/{AccountSid}/Queues/{QueueSid}/Members/Front{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidQueues_QueueSidMembersFront_mediaTypeExtensionPost(AccountSid: string, QueueSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + '/Members/Front' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific member.
		 * Get Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidQueues_QueueSidMembers_CallSid_mediaTypeExtensionGet(AccountSid: string, QueueSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CallSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + '/Members/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Posting a URL and Method to a Queue instance will dequeue a member from a
		 * queue and have the member's call begin executing the TwiML document at that URL
		 * When redirecting a member of a queue addressed by CallSid, only the first request
		 * will succeed and return a 200 response code. A second request will fail and
		 * return an appropriate 400 response code.
		 * Post Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidQueues_QueueSidMembers_CallSid_mediaTypeExtensionPost(AccountSid: string, QueueSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CallSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + '/Members/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the list of members in the queue identified by {QueueSid}.
		 * Get Accounts/{AccountSid}/Queues/{QueueSid}/Members{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidQueues_QueueSidMembers_mediaTypeExtensionGet(AccountSid: string, QueueSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + '/Members' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get resource's individual Queue instance.
		 * Get Accounts/{AccountSid}/Queues/{QueueSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidQueues_QueueSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, QueueSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * This POST request allows you to change the FriendlyName or MaxSize.
		 * Post Accounts/{AccountSid}/Queues/{QueueSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidQueues_QueueSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, QueueSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * The DELETE method allows you to remove a Queue. Only empty queues are
		 * deletable.
		 * Delete Accounts/{AccountSid}/Queues/{QueueSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidQueues_QueueSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, QueueSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues/' + (QueueSid == null ? '' : encodeURIComponent(QueueSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of queues within an account. The list includes paging
		 * information.
		 * Get Accounts/{AccountSid}/Queues{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidQueues_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new Queue resource.
		 * Post Accounts/{AccountSid}/Queues{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidQueues_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Queues' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a set of Transcription resource representations that includes paging
		 * information.
		 * Get Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidRecordings_RecordingSidTranscriptions_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, RecordingSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Recordings/' + (RecordingSid == null ? '' : encodeURIComponent(RecordingSid)) + '/Transcriptions' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns one of several representations:
		 * Without an extension, or with a ".wav", a binary WAV audio file is returned
		 * with mime-type "audio/x-wav".
		 * Appending ".mp3" to the URI returns a binary MP3 audio file with mime-type
		 * type "audio/mpeg".
		 * Appending ".xml" to the URI returns a XML representation.
		 * Get Accounts/{AccountSid}/Recordings/{RecordingSid}{mediaTypeExtension}
		 * @return {void} A binary WAV audio file is returned.
		 */
		Accounts_AccountSidRecordings_RecordingSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidRecordings_RecordingSid_mediaTypeExtensionGetMediaTypeExtension, RecordingSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Recordings/' + (RecordingSid == null ? '' : encodeURIComponent(RecordingSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a recording  from your account.
		 * Delete Accounts/{AccountSid}/Recordings/{RecordingSid}{mediaTypeExtension}
		 * @return {void} 
		 */
		Accounts_AccountSidRecordings_RecordingSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidRecordings_RecordingSid_mediaTypeExtensionGetMediaTypeExtension, RecordingSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Recordings/' + (RecordingSid == null ? '' : encodeURIComponent(RecordingSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Recording resource representations, each representing a
		 * recording generated during the course of a phone call.
		 * Get Accounts/{AccountSid}/Recordings{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidRecordings_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Recordings' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific Credential in a list. Though a password is stored for each username in your list, the password is not returned to protect your password. If you cannot remember your password, you will need to POST to this resource to update it.
		 * Get Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}/Credentials/{CredentialSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPCredentialLists_CLSidCredentials_CredentialSid_mediaTypeExtensionGet(AccountSid: string, CLSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CredentialSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + '/Credentials/' + (CredentialSid == null ? '' : encodeURIComponent(CredentialSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the password of a Credential record.
		 * If the change is successful, Twilio will respond with the Credential record but will not include the password in the response.
		 * Post Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}/Credentials/{CredentialSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPCredentialLists_CLSidCredentials_CredentialSid_mediaTypeExtensionPost(AccountSid: string, CLSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CredentialSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + '/Credentials/' + (CredentialSid == null ? '' : encodeURIComponent(CredentialSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a Credential from a CredentialList.
		 * Delete Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}/Credentials/{CredentialSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidSIPCredentialLists_CLSidCredentials_CredentialSid_mediaTypeExtensionDelete(AccountSid: string, CLSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CredentialSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + '/Credentials/' + (CredentialSid == null ? '' : encodeURIComponent(CredentialSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of Credentials in a CredentialList. The passwords for the Credentials are intentionally not returned so as to protect them.
		 * Get Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}/Credentials{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPCredentialLists_CLSidCredentials_mediaTypeExtensionGet(AccountSid: string, CLSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + '/Credentials' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a Credential to the CredentialList.
		 * When creating a Credential, you will POST both a username and password, but only receive the username back in the response. The password is intentionally not returned so as to protect it.
		 * Post Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}/Credentials{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPCredentialLists_CLSidCredentials_mediaTypeExtensionPost(AccountSid: string, CLSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + '/Credentials' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a credential list instance resource
		 * Get Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPCredentialLists_CLSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CLSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the FriendlyName of the list
		 * Post Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPCredentialLists_CLSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CLSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a CredentialList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.
		 * Delete Accounts/{AccountSid}/SIP/CredentialLists/{CLSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidSIPCredentialLists_CLSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CLSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of Credential Lists for an account
		 * Get Accounts/{AccountSid}/SIP/CredentialLists{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPCredentialLists_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new Credential List.
		 * Post Accounts/{AccountSid}/SIP/CredentialLists{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPCredentialLists_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/CredentialLists' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a CredentialListMapping from a domain
		 * Delete Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}/CredentialListMappings/{CLSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidSIPDomains_SipDomainSidCredentialListMappings_CLSid_mediaTypeExtensionDelete(AccountSid: string, SipDomainSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, CLSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + '/CredentialListMappings/' + (CLSid == null ? '' : encodeURIComponent(CLSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the user lists mapped to this domain.
		 * Get Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}/CredentialListMappings{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPDomains_SipDomainSidCredentialListMappings_mediaTypeExtensionGet(AccountSid: string, SipDomainSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + '/CredentialListMappings' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Map a CredentialList to the domain.
		 * Post Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}/CredentialListMappings{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPDomains_SipDomainSidCredentialListMappings_mediaTypeExtensionPost(AccountSid: string, SipDomainSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + '/CredentialListMappings' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a specific IpAccessControlListMapping instance by Sid.
		 * Get Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}/IpAccessControlListMappings/{ALSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPDomains_SipDomainSidIpAccessControlListMappings_ALSid_mediaTypeExtensionGet(AccountSid: string, SipDomainSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ALSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + '/IpAccessControlListMappings/' + (ALSid == null ? '' : encodeURIComponent(ALSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a mapping from this domain.
		 * Delete Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}/IpAccessControlListMappings/{ALSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidSIPDomains_SipDomainSidIpAccessControlListMappings_ALSid_mediaTypeExtensionDelete(AccountSid: string, SipDomainSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ALSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + '/IpAccessControlListMappings/' + (ALSid == null ? '' : encodeURIComponent(ALSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the IpAccessControlListMappings that are associated to this domain.
		 * Get Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}/IpAccessControlListMappings{mediaTypeExtension}
		 * @return {void} OK
		 */
		Accounts_AccountSidSIPDomains_SipDomainSidIpAccessControlListMappings_mediaTypeExtensionGet(AccountSid: string, SipDomainSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + '/IpAccessControlListMappings' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Map an IpAccessControlList to this domain.
		 * Post Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}/IpAccessControlListMappings{mediaTypeExtension}
		 * @return {void} 
		 */
		Accounts_AccountSidSIPDomains_SipDomainSidIpAccessControlListMappings_mediaTypeExtensionPost(AccountSid: string, SipDomainSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + '/IpAccessControlListMappings' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a specific instance by Sid.
		 * Get Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPDomains_SipDomainSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, SipDomainSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the attributes of a domain.
		 * Post Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPDomains_SipDomainSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, SipDomainSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a domain. If you have created subdomains of a domain, you will not be able to delete the domain until you first delete all subdomains of it.
		 * Delete Accounts/{AccountSid}/SIP/Domains/{SipDomainSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidSIPDomains_SipDomainSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, SipDomainSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains/' + (SipDomainSid == null ? '' : encodeURIComponent(SipDomainSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a paged list of the domains for an account.
		 * Get Accounts/{AccountSid}/SIP/Domains{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPDomains_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Domain and returns its instance resource. You must pick a unique domain name that ends in ".sip.twilio.com".
		 * After creating a Domain, you must map it to an authentication method before the domain is ready to receive traffic.
		 * Post Accounts/{AccountSid}/SIP/Domains{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPDomains_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/Domains' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a single IP Address resource.
		 * Get Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{IpAddressSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSidIpAddresses_IpAddressSid_mediaTypeExtensionGet(AccountSid: string, IpAccessControlListSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IpAddressSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + '/IpAddresses/' + (IpAddressSid == null ? '' : encodeURIComponent(IpAddressSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the description or IP address of a given IpAddress instance resource
		 * Post Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{IpAddressSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSidIpAddresses_IpAddressSid_mediaTypeExtensionPost(AccountSid: string, IpAccessControlListSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IpAddressSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + '/IpAddresses/' + (IpAddressSid == null ? '' : encodeURIComponent(IpAddressSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an IP address entry from the list.
		 * Delete Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{IpAddressSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSidIpAddresses_IpAddressSid_mediaTypeExtensionDelete(AccountSid: string, IpAccessControlListSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IpAddressSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + '/IpAddresses/' + (IpAddressSid == null ? '' : encodeURIComponent(IpAddressSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the IP Addresses contained in this list.
		 * Get Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSidIpAddresses_mediaTypeExtensionGet(AccountSid: string, IpAccessControlListSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + '/IpAddresses' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add an IP Address to the list with a description.
		 * Post Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSidIpAddresses_mediaTypeExtensionPost(AccountSid: string, IpAccessControlListSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + '/IpAddresses' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a specific IpAccessControlList resource.
		 * Get Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IpAccessControlListSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rename an IpAccessControlList.
		 * Post Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IpAccessControlListSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an IpAccessControlList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.
		 * Delete Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidSIPIpAccessControlLists_IpAccessControlListSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, IpAccessControlListSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists/' + (IpAccessControlListSid == null ? '' : encodeURIComponent(IpAccessControlListSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a paged list of all IpAccessControlLists under this account.
		 * Get Accounts/{AccountSid}/SIP/IpAccessControlLists{mediaTypeExtension}
		 * @return {void} OK
		 */
		Accounts_AccountSidSIPIpAccessControlLists_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new IpAccessControlList resource.
		 * When created, the list will contain no IP addresses. You will need to add IP addresses to the list for it to be active. To add IP addresses, you will need to POST to the IpAddresses List subresource.
		 * Post Accounts/{AccountSid}/SIP/IpAccessControlLists{mediaTypeExtension}
		 * @return {void} 
		 */
		Accounts_AccountSidSIPIpAccessControlLists_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SIP/IpAccessControlLists' + (mediaTypeExtension == null ? '' : encodeURIComponent(mediaTypeExtension)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single message.
		 * Get Accounts/{AccountSid}/SMS/ShortCodes/{ShortCodeSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSMSShortCodes_ShortCodeSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ShortCodeSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SMS/ShortCodes/' + (ShortCodeSid == null ? '' : encodeURIComponent(ShortCodeSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tries to update the shortcode's properties, and returns the updated
		 * resource representation if successful.
		 * Post Accounts/{AccountSid}/SMS/ShortCodes/{ShortCodeSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidSMSShortCodes_ShortCodeSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, ShortCodeSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SMS/ShortCodes/' + (ShortCodeSid == null ? '' : encodeURIComponent(ShortCodeSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of ShortCode resource representations, each representing a
		 * short code within your account. The list includes paging information.
		 * Get Accounts/{AccountSid}/SMS/ShortCodes{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidSMSShortCodes_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/SMS/ShortCodes' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single Transcription resource representation identified by the
		 * given {TranscriptionSid}. By default Twilio will respond with the XML metadata for the Transcription. If you append ".txt" to the end of the Transcription resource's URI Twilio will just return you the transcription tex.
		 * Get Accounts/{AccountSid}/Transcriptions/{TranscriptionSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidTranscriptions_TranscriptionSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidTranscriptions_TranscriptionSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidTranscriptions_TranscriptionSid_mediaTypeExtensionGetMediaTypeExtension, TranscriptionSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Transcriptions/' + (TranscriptionSid == null ? '' : encodeURIComponent(TranscriptionSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a transcription from your account.
		 * Delete Accounts/{AccountSid}/Transcriptions/{TranscriptionSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidTranscriptions_TranscriptionSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidTranscriptions_TranscriptionSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidTranscriptions_TranscriptionSid_mediaTypeExtensionGetMediaTypeExtension, TranscriptionSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Transcriptions/' + (TranscriptionSid == null ? '' : encodeURIComponent(TranscriptionSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a set of Transcription resource representations that includes paging
		 * information.
		 * Get Accounts/{AccountSid}/Transcriptions{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidTranscriptions_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Transcriptions' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns UsageRecords for all usage categories for a specified period.
		 * Get Accounts/{AccountSid}/Usage/Records/{Subresource}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @param {Accounts_AccountSidUsageRecords_Subresource_mediaTypeExtensionGetSubresource} Subresource |Subresource|Description|
		 * |---|---|
		 * |Daily|Return multiple UsageRecords for each usage category, each representing usage over a daily time-interval.|
		 * |Monthly|Return multiple UsageRecords for each usage category, each representing usage over a monthly time-interval.|
		 * |Yearly|Return multple UsageRecords for each usage category, each representing usage over a yearly time-interval.|
		 * |AllTime|  Return a single UsageRecord for each usage category, each representing usage over the date-range specified. This is the same as the root /Usage/Records.|
		 * |Today|Return a single UsageRecord per usage category, for today's usage only.|
		 * ||Yesterday|Return a single UsageRecord per usage category, for yesterday's usage only.|
		 * |ThisMonth|Return a single UsageRecord per usage category, for this month's usage only.|
		 * |LastMonth|Return a single UsageRecord per usage category, for last month's usage only.|
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidUsageRecords_Subresource_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, Subresource: Accounts_AccountSidUsageRecords_Subresource_mediaTypeExtensionGetSubresource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Usage/Records/' + Subresource + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns UsageRecords for all usage categories. The list includes paging
		 * information.
		 * By default, the UsageRecords resource will return one UsageRecord for
		 * each Category, representing all usage accrued all-time for the account.
		 * You can filter the usage Category or change the date-range over which usage
		 * is counted using optional GET query parameters.
		 * Get Accounts/{AccountSid}/Usage/Records{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidUsageRecords_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Usage/Records' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a repesentation of the UsageTrigger.
		 * Get Accounts/{AccountSid}/Usage/Triggers/{UsageTriggerSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidUsageTriggers_UsageTriggerSid_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, UsageTriggerSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Usage/Triggers/' + (UsageTriggerSid == null ? '' : encodeURIComponent(UsageTriggerSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tries to update the UsageTrigger's properties, and returns the updated
		 * resource representation if successful.
		 * Post Accounts/{AccountSid}/Usage/Triggers/{UsageTriggerSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidUsageTriggers_UsageTriggerSid_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, UsageTriggerSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Usage/Triggers/' + (UsageTriggerSid == null ? '' : encodeURIComponent(UsageTriggerSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete this UsageTrigger.
		 * Delete Accounts/{AccountSid}/Usage/Triggers/{UsageTriggerSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} 
		 */
		Accounts_AccountSidUsageTriggers_UsageTriggerSid_mediaTypeExtensionDelete(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, UsageTriggerSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Usage/Triggers/' + (UsageTriggerSid == null ? '' : encodeURIComponent(UsageTriggerSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of UsageTrigger resource representations. The list includes
		 * paging information.
		 * By default, all UsageTriggers are returned. You can filter the list by
		 * specifying one or more query parameters. Note that the query parameters are
		 * case-sensitive
		 * Get Accounts/{AccountSid}/Usage/Triggers{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSidUsageTriggers_mediaTypeExtensionGet(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Usage/Triggers' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new UsageTrigger. Each account can create up to 1,000 UsageTriggers.
		 * Currently, UsageTriggers that are no longer active are not deleted automatically.
		 * Use DELETE to delete triggers you no longer need.
		 * Post Accounts/{AccountSid}/Usage/Triggers{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSidUsageTriggers_mediaTypeExtensionPost(AccountSid: string, mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + '/Usage/Triggers' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a representation of an account.
		 * Get Accounts/{AccountSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @param {string} AccountSid A 34 character string that uniquely identifies this account.
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_AccountSid_mediaTypeExtensionGet(mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, AccountSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to modify the properties of an account.
		 * Put Accounts/{AccountSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @param {string} AccountSid A 34 character string that uniquely identifies this account.
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSid_mediaTypeExtensionPut(mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, AccountSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to modify the properties of an account.
		 * Post Accounts/{AccountSid}{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @param {string} AccountSid A 34 character string that uniquely identifies this account.
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_AccountSid_mediaTypeExtensionPost(mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, AccountSid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts/' + (AccountSid == null ? '' : encodeURIComponent(AccountSid)) + mediaTypeExtension + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of the Account resources belonging to the account used to make the
		 * API request. This list will include that Account as well.
		 * Get Accounts{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful and the response body contains the representation
		 * requested.
		 */
		Accounts_mediaTypeExtensionGet(mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Accounts' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new Account instance resource as a subaccount of the one used to make the request. See
		 * Creating Subaccounts for more information.
		 * Post Accounts{mediaTypeExtension}
		 * @param {Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension By default, Twilio's REST API returns XML. You may obtain CSV, JSON or HTML by appending ".csv", ".json", or ".html".
		 * @return {void} The request was successful, we updated the resource and the response
		 * body contains the representation.
		 */
		Accounts_mediaTypeExtensionPost(mediaTypeExtension: Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Accounts' + mediaTypeExtension, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Accounts_AccountSidApplications_ApplicationSid_mediaTypeExtensionGetMediaTypeExtension { '.xml' = 0, '.json' = 1, '.csv' = 2, '.html' = 3 }

	export enum Accounts_AccountSidRecordings_RecordingSid_mediaTypeExtensionGetMediaTypeExtension { '.xml' = 0, '.wav' = 1, '.mp3' = 2 }

	export enum Accounts_AccountSidTranscriptions_TranscriptionSid_mediaTypeExtensionGetMediaTypeExtension { '.json' = 0, '.csv' = 1, '.html' = 2, '.txt' = 3, '.xml' = 4 }

	export enum Accounts_AccountSidUsageRecords_Subresource_mediaTypeExtensionGetSubresource { Daily = 0, Monthly = 1, Yearly = 2, AllTime = 3, Today = 4, Yesterday = 5, ThisMonth = 6, LastMonth = 7 }

}

