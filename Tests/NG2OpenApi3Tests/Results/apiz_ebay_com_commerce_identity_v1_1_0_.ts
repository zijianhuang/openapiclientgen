import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The type that defines the fields for an address. */
	export interface Address {

		/** The first line of the street address. */
		addressLine1?: string | null;

		/** The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'. */
		addressLine2?: string | null;

		/** The city of the address. */
		city?: string | null;

		/** The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:CountryCodeEnum'>eBay API documentation</a> */
		country?: string | null;

		/** The county of the address. */
		county?: string | null;

		/** The postal code of the address. */
		postalCode?: string | null;

		/** The state or province of the address. */
		stateOrProvince?: string | null;
	}

	/** The type that defines the fields for an address. */
	export interface AddressFormProperties {

		/** The first line of the street address. */
		addressLine1: FormControl<string | null | undefined>,

		/** The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'. */
		addressLine2: FormControl<string | null | undefined>,

		/** The city of the address. */
		city: FormControl<string | null | undefined>,

		/** The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:CountryCodeEnum'>eBay API documentation</a> */
		country: FormControl<string | null | undefined>,

		/** The county of the address. */
		county: FormControl<string | null | undefined>,

		/** The postal code of the address. */
		postalCode: FormControl<string | null | undefined>,

		/** The state or province of the address. */
		stateOrProvince: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the business account information. */
	export interface BusinessAccount {

		/** The type that defines the fields for an address. */
		address?: Address;

		/** An additional name that is used for their business on eBay. The business name is returned in the name field. */
		doingBusinessAs?: string | null;

		/** The email address of the business account. */
		email?: string | null;

		/** The business name associated with the user's eBay account. */
		name?: string | null;

		/** The type that defines the fields for the information of the contact person for the account. */
		primaryContact?: Contact;

		/** The type that defines the fields for the details of a phone. */
		primaryPhone?: Phone;

		/** The type that defines the fields for the details of a phone. */
		secondaryPhone?: Phone;

		/** The business website address associated with the eBay account. */
		website?: string | null;
	}

	/** The type that defines the fields for the business account information. */
	export interface BusinessAccountFormProperties {

		/** An additional name that is used for their business on eBay. The business name is returned in the name field. */
		doingBusinessAs: FormControl<string | null | undefined>,

		/** The email address of the business account. */
		email: FormControl<string | null | undefined>,

		/** The business name associated with the user's eBay account. */
		name: FormControl<string | null | undefined>,

		/** The business website address associated with the eBay account. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateBusinessAccountFormGroup() {
		return new FormGroup<BusinessAccountFormProperties>({
			doingBusinessAs: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the information of the contact person for the account. */
	export interface Contact {

		/** The first name of the contact person. */
		firstName?: string | null;

		/** The last name of the contact person. */
		lastName?: string | null;
	}

	/** The type that defines the fields for the information of the contact person for the account. */
	export interface ContactFormProperties {

		/** The first name of the contact person. */
		firstName: FormControl<string | null | undefined>,

		/** The last name of the contact person. */
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the details of a phone. */
	export interface Phone {

		/** The two-letter ISO 3166 standard of the country to which the phone number belongs. */
		countryCode?: string | null;

		/** The numeric string representing the phone number. */
		number?: string | null;

		/** The type of phone service. Valid Values: MOBILE or LAND_LINE Code so that your app gracefully handles any future changes to this list. */
		phoneType?: string | null;
	}

	/** The type that defines the fields for the details of a phone. */
	export interface PhoneFormProperties {

		/** The two-letter ISO 3166 standard of the country to which the phone number belongs. */
		countryCode: FormControl<string | null | undefined>,

		/** The numeric string representing the phone number. */
		number: FormControl<string | null | undefined>,

		/** The type of phone service. Valid Values: MOBILE or LAND_LINE Code so that your app gracefully handles any future changes to this list. */
		phoneType: FormControl<string | null | undefined>,
	}
	export function CreatePhoneFormGroup() {
		return new FormGroup<PhoneFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			phoneType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies the type of erro. */
		category?: string | null;

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/** A unique number to identify the error. */
		errorId?: number | null;

		/** An array of request elements most closely associated to the error. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message?: string | null;

		/** An array of request elements most closely associated to the error. */
		outputRefIds?: Array<string>;

		/** An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned. */
		parameters?: Array<ErrorParameter>;

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain?: string | null;
	}

	/** This type defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** Identifies the type of erro. */
		category: FormControl<string | null | undefined>,

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain: FormControl<string | null | undefined>,

		/** A unique number to identify the error. */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message: FormControl<string | null | undefined>,

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorParameter {

		/** The object of the error. */
		name?: string | null;

		/** The value of the object. */
		value?: string | null;
	}
	export interface ErrorParameterFormProperties {

		/** The object of the error. */
		name: FormControl<string | null | undefined>,

		/** The value of the object. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the information of an individual account. */
	export interface IndividualAccount {

		/** The eBay user's registration email address. */
		email?: string | null;

		/** The eBay user's first name. */
		firstName?: string | null;

		/** The eBay user's last name. */
		lastName?: string | null;

		/** The type that defines the fields for the details of a phone. */
		primaryPhone?: Phone;

		/** The type that defines the fields for an address. */
		registrationAddress?: Address;

		/** The type that defines the fields for the details of a phone. */
		secondaryPhone?: Phone;
	}

	/** The type that defines the fields for the information of an individual account. */
	export interface IndividualAccountFormProperties {

		/** The eBay user's registration email address. */
		email: FormControl<string | null | undefined>,

		/** The eBay user's first name. */
		firstName: FormControl<string | null | undefined>,

		/** The eBay user's last name. */
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateIndividualAccountFormGroup() {
		return new FormGroup<IndividualAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the getUser method. */
	export interface UserResponse {

		/** Indicates the user account type. This is determined when the user registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in the following countries: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:AccountTypeEnum'>eBay API documentation</a> */
		accountType?: string | null;

		/** The type that defines the fields for the business account information. */
		businessAccount?: BusinessAccount;

		/** The type that defines the fields for the information of an individual account. */
		individualAccount?: IndividualAccount;

		/** The eBay site on which the account is registered. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:MarketplaceIdEnum'>eBay API documentation</a> */
		registrationMarketplaceId?: string | null;

		/** Indicates the user's account status. Possible values: CONFIRMED, UNCONFIRMED, ACCOUNTONHOLD and UNDETERMINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:UserStatusEnum'>eBay API documentation</a> */
		status?: string | null;

		/** The eBay immutable user ID of the user's account and can always be used to identify the user. */
		userId?: string | null;

		/** The user name, which was specific by the user when they created the account. Note: This value can be changed by the user. */
		username?: string | null;
	}

	/** The type that defines the fields for the getUser method. */
	export interface UserResponseFormProperties {

		/** Indicates the user account type. This is determined when the user registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in the following countries: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:AccountTypeEnum'>eBay API documentation</a> */
		accountType: FormControl<string | null | undefined>,

		/** The eBay site on which the account is registered. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:MarketplaceIdEnum'>eBay API documentation</a> */
		registrationMarketplaceId: FormControl<string | null | undefined>,

		/** Indicates the user's account status. Possible values: CONFIRMED, UNCONFIRMED, ACCOUNTONHOLD and UNDETERMINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:UserStatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** The eBay immutable user ID of the user's account and can always be used to identify the user. */
		userId: FormControl<string | null | undefined>,

		/** The user name, which was specific by the user when they created the account. Note: This value can be changed by the user. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
			accountType: new FormControl<string | null | undefined>(undefined),
			registrationMarketplaceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method retrieves the account profile information for an authenticated user, which requires a User access token. What is returned is controlled by the scopes. For a business account you use the default scope commerce.identity.readonly, which returns all the fields in the businessAccount container. These are returned because this is all public information. For an individual account, the fields returned in the individualAccount container are based on the scope you use. Using the default scope, only public information, such as eBay user ID, are returned. For details about what each scope returns, see the Identity API Overview. URLs for this method Production URL: https://apiz.ebay.com/commerce/identity/v1/user/ Sandbox URL: https://apiz.sandbox.ebay.com/commerce/identity/v1/user/ In the Sandbox, this method returns mock data. Note: You must use the correct scope or scopes for the data you want returned.
		 * Get user/
		 * @return {UserResponse} OK
		 */
		GetUser(): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'user/', {});
		}
	}

}

