import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address_AutoComplete {
	}
	export interface Address_AutoCompleteFormProperties {
	}
	export function CreateAddress_AutoCompleteFormGroup() {
		return new FormGroup<Address_AutoCompleteFormProperties>({
		});

	}

	export interface Caller_ID {
	}
	export interface Caller_IDFormProperties {
	}
	export function CreateCaller_IDFormGroup() {
		return new FormGroup<Caller_IDFormProperties>({
		});

	}

	export interface Contact_Enrichment {
	}
	export interface Contact_EnrichmentFormProperties {
	}
	export function CreateContact_EnrichmentFormGroup() {
		return new FormGroup<Contact_EnrichmentFormProperties>({
		});

	}

	export interface Email_ID {
	}
	export interface Email_IDFormProperties {
	}
	export function CreateEmail_IDFormGroup() {
		return new FormGroup<Email_IDFormProperties>({
		});

	}

	export interface ID_Verification {
	}
	export interface ID_VerificationFormProperties {
	}
	export function CreateID_VerificationFormGroup() {
		return new FormGroup<ID_VerificationFormProperties>({
		});

	}

	export interface SearchBody {
		Address?: SearchBodyAddress;

		/** Type: double */
		Age?: number | null;
		Dob?: string | null;
		Email?: string | null;
		FirstName?: string | null;
		LastName?: string | null;
		MiddleName?: string | null;
		PhoneNumber?: string | null;
	}
	export interface SearchBodyFormProperties {

		/** Type: double */
		Age: FormControl<number | null | undefined>,
		Dob: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateSearchBodyFormGroup() {
		return new FormGroup<SearchBodyFormProperties>({
			Age: new FormControl<number | null | undefined>(undefined),
			Dob: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchBodyAddress {
		addressLine1?: string | null;
		addressLine2?: string | null;
	}
	export interface SearchBodyAddressFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
	}
	export function CreateSearchBodyAddressFormGroup() {
		return new FormGroup<SearchBodyAddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search
		 * ###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*
		 * Perform a search:
		 * 1. Add your key and key secret to the request headers.
		 * + galaxy-ap-name: [Key]
		 * + galaxy-ap-password: [Secret]
		 * + galaxy-search-type: DevAPIAddressAutoComplete
		 * 2.  Add search criteria to your request.
		 * ~~~html
		 * {
		 * "Input":"1821 Q"
		 * }
		 * ~~~
		 * 3.  Submit your search
		 * The JSON request should have parts of the address.
		 * + <code>Input</code> = null (optional, string) ... address.
		 * Post address/autocomplete
		 * @return {void} OK
		 */
		AddressAutocompletePost(requestBody: AddressAutocompletePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'address/autocomplete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Search
		 * ###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*
		 * Perform a search:
		 * 1. Add your key and key secret to the request headers.
		 * + galaxy-ap-name: [Key]
		 * + galaxy-ap-password: [Secret]
		 * + galaxy-search-type: DevAPIContactEnrich
		 * 2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
		 * ~~~html
		 * {
		 * "FirstName": "John",
		 * "MiddleName": "T",
		 * "LastName": "Lawrence",
		 * "Dob":"",
		 * "Age": 0,
		 * "Address": {
		 * "addressLine1":"123 Q Street",
		 * "addressLine2":"Sacramento, CA"
		 * },
		 * "PhoneNumber":"",
		 * "Email":""
		 * }
		 * ~~~
		 * 3.  Submit your search
		 * A complete list of JSON request properties follows.
		 * + <code>FirstName</code>= null (optional, string) ... First name.
		 * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
		 * + <code>LastName</code> = null (optional, string) ... Last name.
		 * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
		 * + <code>Age</code> = null (optional, int) ... Age.
		 * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
		 * + <code>Members</code>
		 * + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
		 * + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
		 * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
		 * + <code>Email</code> = null (optional, string) ... E-mail address.
		 * Post contact/enrich
		 * @return {void} OK
		 */
		ContactEnrichPost(requestBody: SearchBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'contact/enrich', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Search
		 * ###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*
		 * Perform a search:
		 * 1. Add your Access Profile username and password to the request headers.
		 * + galaxy-ap-name: [Key]
		 * + galaxy-ap-password: [Secret]
		 * + galaxy-search-type: DevAPIEmailID
		 * 2.  Add search criteria to your request.
		 * ~~~html
		 * {
		 * "Email":"johnsmith@somedomain"
		 * }
		 * ~~~
		 * 3.  Submit your search
		 * The JSON request should have an email.
		 * + <code>Email</code> = null (optional, string) ... E-mail address.
		 * Post email/enrich
		 * @return {void} OK
		 */
		EmailEnrichPost(requestBody: EmailEnrichPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email/enrich', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Search
		 * ###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*
		 * Perform a search:
		 * 1. Add your key and key secret to the request headers.
		 * + galaxy-ap-name: [Key]
		 * + galaxy-ap-password: [Secret]
		 * + galaxy-search-type: DevAPIIDVerification
		 * 2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
		 * ~~~html
		 * {
		 * "FirstName": "John",
		 * "MiddleName": "T",
		 * "LastName": "Lawrence",
		 * "Dob":"",
		 * "Age": 0,
		 * "Address": {
		 * "addressLine1":"123 Q Street, Unit 102",
		 * "addressLine2":"Sacramento, CA"
		 * },
		 * "PhoneNumber":"",
		 * "Email":""
		 * }
		 * ~~~
		 * 3.  Submit your search
		 * A complete list of JSON request properties follows.
		 * + <code>FirstName</code>= null (optional, string) ... First name.
		 * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
		 * + <code>LastName</code> = null (optional, string) ... Last name.
		 * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
		 * + <code>Age</code> = null (optional, int) ... Age.
		 * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
		 * + <code>Members</code>
		 * + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
		 * + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
		 * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
		 * + <code>Email</code> = null (optional, string) ... E-mail address.
		 * Post identity/verify_id
		 * @return {void} OK
		 */
		IdentityVerify_idPost(requestBody: SearchBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'identity/verify_id', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Search
		 * ###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*
		 * Perform a search:
		 * 1. Add your key and key secret to the request headers.
		 * + galaxy-ap-name: [Key]
		 * + galaxy-ap-password: [Secret]
		 * + galaxy-search-type: DevAPICallerID
		 * 2.  Add search criteria to your request.
		 * ~~~html
		 * {
		 * "Phone":"(123) 456-7890"
		 * }
		 * ~~~
		 * 3.  Submit your search
		 * The JSON request should have a phone number.
		 * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
		 * Post phone/enrich
		 * @return {void} OK
		 */
		PhoneEnrichPost(requestBody: PhoneEnrichPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'phone/enrich', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export interface AddressAutocompletePostPostBody {
		Input?: string | null;
	}
	export interface AddressAutocompletePostPostBodyFormProperties {
		Input: FormControl<string | null | undefined>,
	}
	export function CreateAddressAutocompletePostPostBodyFormGroup() {
		return new FormGroup<AddressAutocompletePostPostBodyFormProperties>({
			Input: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailEnrichPostPostBody {
		Email?: string | null;
	}
	export interface EmailEnrichPostPostBodyFormProperties {
		Email: FormControl<string | null | undefined>,
	}
	export function CreateEmailEnrichPostPostBodyFormGroup() {
		return new FormGroup<EmailEnrichPostPostBodyFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneEnrichPostPostBody {
		Phone?: string | null;
	}
	export interface PhoneEnrichPostPostBodyFormProperties {
		Phone: FormControl<string | null | undefined>,
	}
	export function CreatePhoneEnrichPostPostBodyFormGroup() {
		return new FormGroup<PhoneEnrichPostPostBodyFormProperties>({
			Phone: new FormControl<string | null | undefined>(undefined),
		});

	}

}

