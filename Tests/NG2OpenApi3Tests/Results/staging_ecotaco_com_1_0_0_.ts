import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Autocomplete_places {
	}
	export interface Autocomplete_placesFormProperties {
	}
	export function CreateAutocomplete_placesFormGroup() {
		return new FormGroup<Autocomplete_placesFormProperties>({
		});

	}

	export interface Autocomplete_places_details {
	}
	export interface Autocomplete_places_detailsFormProperties {
	}
	export function CreateAutocomplete_places_detailsFormGroup() {
		return new FormGroup<Autocomplete_places_detailsFormProperties>({
		});

	}

	export interface Cancel_Ride {
	}
	export interface Cancel_RideFormProperties {
	}
	export function CreateCancel_RideFormGroup() {
		return new FormGroup<Cancel_RideFormProperties>({
		});

	}

	export interface Cancel_fee {
	}
	export interface Cancel_feeFormProperties {
	}
	export function CreateCancel_feeFormGroup() {
		return new FormGroup<Cancel_feeFormProperties>({
		});

	}

	export interface Catchement_Area {
	}
	export interface Catchement_AreaFormProperties {
	}
	export function CreateCatchement_AreaFormGroup() {
		return new FormGroup<Catchement_AreaFormProperties>({
		});

	}

	export interface Collection_of_catchement_areas {
	}
	export interface Collection_of_catchement_areasFormProperties {
	}
	export function CreateCollection_of_catchement_areasFormGroup() {
		return new FormGroup<Collection_of_catchement_areasFormProperties>({
		});

	}

	export interface Collection_of_products {
	}
	export interface Collection_of_productsFormProperties {
	}
	export function CreateCollection_of_productsFormGroup() {
		return new FormGroup<Collection_of_productsFormProperties>({
		});

	}

	export interface Credit_card {
	}
	export interface Credit_cardFormProperties {
	}
	export function CreateCredit_cardFormGroup() {
		return new FormGroup<Credit_cardFormProperties>({
		});

	}

	export interface Current_User {
	}
	export interface Current_UserFormProperties {
	}
	export function CreateCurrent_UserFormGroup() {
		return new FormGroup<Current_UserFormProperties>({
		});

	}

	export interface Endpoint {
	}
	export interface EndpointFormProperties {
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
		});

	}

	export interface Estimate_Ride {
	}
	export interface Estimate_RideFormProperties {
	}
	export function CreateEstimate_RideFormGroup() {
		return new FormGroup<Estimate_RideFormProperties>({
		});

	}

	export interface Forget_password {
	}
	export interface Forget_passwordFormProperties {
	}
	export function CreateForget_passwordFormGroup() {
		return new FormGroup<Forget_passwordFormProperties>({
		});

	}

	export interface Login {
	}
	export interface LoginFormProperties {
	}
	export function CreateLoginFormGroup() {
		return new FormGroup<LoginFormProperties>({
		});

	}

	export interface Password {
	}
	export interface PasswordFormProperties {
	}
	export function CreatePasswordFormGroup() {
		return new FormGroup<PasswordFormProperties>({
		});

	}

	export interface Payment_Methods {
	}
	export interface Payment_MethodsFormProperties {
	}
	export function CreatePayment_MethodsFormGroup() {
		return new FormGroup<Payment_MethodsFormProperties>({
		});

	}

	export interface Product {
	}
	export interface ProductFormProperties {
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
		});

	}

	export interface Register {
	}
	export interface RegisterFormProperties {
	}
	export function CreateRegisterFormGroup() {
		return new FormGroup<RegisterFormProperties>({
		});

	}

	export interface Reserve_Ride {
	}
	export interface Reserve_RideFormProperties {
	}
	export function CreateReserve_RideFormGroup() {
		return new FormGroup<Reserve_RideFormProperties>({
		});

	}

	export interface Settings {
	}
	export interface SettingsFormProperties {
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
		});

	}

	export interface User_Credit_Cards {
	}
	export interface User_Credit_CardsFormProperties {
	}
	export function CreateUser_Credit_CardsFormGroup() {
		return new FormGroup<User_Credit_CardsFormProperties>({
		});

	}

	export interface User_Promotional_Codes {
	}
	export interface User_Promotional_CodesFormProperties {
	}
	export function CreateUser_Promotional_CodesFormGroup() {
		return new FormGroup<User_Promotional_CodesFormProperties>({
		});

	}

	export interface User_Ride {
	}
	export interface User_RideFormProperties {
	}
	export function CreateUser_RideFormGroup() {
		return new FormGroup<User_RideFormProperties>({
		});

	}

	export interface User_Rides {
	}
	export interface User_RidesFormProperties {
	}
	export function CreateUser_RidesFormGroup() {
		return new FormGroup<User_RidesFormProperties>({
		});

	}

	export interface Version {
	}
	export interface VersionFormProperties {
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve the version API
		 * Get 
		 * @return {void} OK
		 */
		Retrieve_the_version_API(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get current user
		 * Get accounts
		 * @return {void} OK
		 */
		Get_current_user(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new account with an application key
		 * Post accounts
		 * @return {void} 
		 */
		Create_a_new_account_with_an_application_key(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update User
		 * Put accounts
		 * @return {void} OK
		 */
		Update_User(): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Forget password with email
		 * Post accounts/password
		 * @return {void} 
		 */
		Forget_password_with_email(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/password', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Payment Methods
		 * Get accounts/payment_methods
		 * @return {void} OK
		 */
		Payment_Methods(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/payment_methods', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Settings
		 * Post accounts/settings
		 * @return {void} OK
		 */
		Settings(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/settings', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Login with email, password and application key
		 * Post accounts/sign_in
		 * @return {void} OK
		 */
		Login_with_email__password_and_application_key(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/sign_in', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Password
		 * Put accounts/update_password
		 * @return {void} OK
		 */
		Update_Password(): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/update_password', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get autocomplete places
		 * For searching places just send the following attributes :
		 * - **longitude** (optional, float) : The location longitude for the seach
		 * - **latitude** (optional, float) : The location latitude for the seach
		 * - **search** (required, string) : The search text (most than 3 char)
		 * Post addresses/places_autocomplete
		 * @return {void} OK
		 */
		Get_autocomplete_places(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'addresses/places_autocomplete', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get autocomplete places details
		 * Post addresses/places_details
		 * @return {void} OK
		 */
		Get_autocomplete_places_details(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'addresses/places_details', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all catchement areas
		 * Get catchement_areas
		 * @return {void} OK
		 */
		List_all_catchement_areas(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'catchement_areas', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Catchement Area
		 * Get catchement_areas/{id}
		 * @param {number} id Numeric `id` of the Catchement Area
		 * @return {void} OK
		 */
		Get_a_Catchement_Area(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'catchement_areas/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all CreditCards for the current User
		 * Get credit_cards
		 * @return {void} OK
		 */
		List_all_CreditCards_for_the_current_User(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'credit_cards', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a CreditCard
		 * Get credit_cards/{id}
		 * @param {number} id Numeric `id` of the Credit Card
		 * @return {void} OK
		 */
		Get_a_CreditCard(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'credit_cards/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all products
		 * Get products
		 * @return {void} OK
		 */
		List_all_products(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Product
		 * Get products/{id}
		 * @param {number} id Numeric `id` of the Product
		 * @return {void} OK
		 */
		Get_a_Product(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all promotional codes for user
		 * Get promotional_codes
		 * @return {void} OK
		 */
		Get_all_promotional_codes_for_user(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'promotional_codes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a promotional code
		 * Post promotional_codes
		 * @return {void} 
		 */
		Add_a_promotional_code(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'promotional_codes', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a ride
		 * Get rides/{id}
		 * @param {number} id Numeric `id` of Ride
		 * @return {void} OK
		 */
		Get_a_ride(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rides/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel a Ride
		 * **Must be authenticate**
		 * Get rides/{id}/cancel
		 * @param {number} id Numeric `id` of Ride
		 * @return {void} OK
		 */
		Cancel_a_Ride(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rides/' + id + '/cancel', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel fee of a Ride
		 * **Must be authenticate**
		 * Get rides/{id}/cancel_fees
		 * @param {number} id Numeric `id` of Ride
		 * @return {void} OK
		 */
		Cancel_fee_of_a_Ride(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rides/' + id + '/cancel_fees', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Estimate a ride
		 * Get rides/{id}/estimate
		 * @param {number} id Numeric `id` of Ride
		 * @return {void} OK
		 */
		Estimate_a_ride(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rides/' + id + '/estimate', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reserve a ride
		 * To book, the ride must belong to the connected user. The ride must have a main passenger at least, the booking user id and the payment hash must be set.
		 * **Must be authenticate**
		 * Post rides/{id}/reserve
		 * @param {number} id Numeric `id` of Ride
		 * @return {void} OK
		 */
		Reserve_a_ride(id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rides/' + id + '/reserve', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all user rides
		 * Get rides?page={page}&per_page={per_page}
		 * @param {number} page Number of the page to load
		 * @param {number} per_page Number of items per page to load
		 * @return {void} OK
		 */
		Get_all_user_rides(page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rides?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a ride
		 * Post rides?page={page}&per_page={per_page}
		 * @return {void} 
		 */
		Create_a_ride(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rides?page={page}&per_page={per_page}', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the Entry Point on Version
		 * Get {version}
		 * @param {string} version Ecotaco API version
		 * @return {void} OK
		 */
		Retrieve_the_Entry_Point_on_Version(version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (version == null ? '' : encodeURIComponent(version)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

