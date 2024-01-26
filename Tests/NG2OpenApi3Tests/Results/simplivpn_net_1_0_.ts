import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DisableUser {

		/**
		 * Required
		 * Min length: 1
		 */
		username: string;
	}
	export interface DisableUserFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDisableUserFormGroup() {
		return new FormGroup<DisableUserFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EnableUser {

		/**
		 * Required
		 * Min length: 1
		 */
		username: string;
	}
	export interface EnableUserFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateEnableUserFormGroup() {
		return new FormGroup<EnableUserFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface Register {
		await?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		password: string;

		/**
		 * Required
		 * Min length: 1
		 */
		username: string;
	}
	export interface RegisterFormProperties {
		await: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateRegisterFormGroup() {
		return new FormGroup<RegisterFormProperties>({
			await: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface UserLogin {

		/**
		 * Required
		 * Min length: 1
		 */
		password: string;

		/**
		 * Required
		 * Min length: 1
		 */
		username: string;
	}
	export interface UserLoginFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserLoginFormGroup() {
		return new FormGroup<UserLoginFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * DisableUser
		 * This route allows you to disable a user's vpn access.
		 * Post disable-user
		 * @return {void} Success
		 */
		DisableUser(requestBody: DisableUser): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'disable-user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * EnableUser
		 * This route allows you to enable a user's vpn access. This route can only be called using your user's Bearer Auth token.
		 * Post enable-user
		 * @return {void} Success
		 */
		EnableUser(requestBody: EnableUser): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enable-user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Login
		 * This route allows you to login a user. The response will give you a Bearer auth token to use with all rquests pertaining to the user. This token expires in 7 days, so for every request you should check if you get an unauthorized responsve and re-validate the login if needed.
		 * Post login
		 * @return {void} Success
		 */
		Login(requestBody: UserLogin): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Register
		 * This route allows VPN Admin user's with an api key to register a vpn user account. This route can only be called using your api key supplied to you from SimpliVPN. Before calling this you should use your api key to call the /UsernameAvailable route to make sure the username you want is available first. All subsequent user requests following can be done using the user's api token, their token's expire every 7 days, so you should occasionally check them and if you get unauthorized, refresh their token by calling /login route. This route will also auto-enable a new user.
		 * Post register
		 * @return {void} Success
		 */
		Register(requestBody: Register): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get server-summaries
		 * @return {void} Success
		 */
		GetServerSummaries(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'server-summaries', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get servers
		 * @return {void} Success
		 */
		GetServers(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'servers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * UsernameAvailable
		 * This route allows VPN Admin user's to check if a specific username is available before registering an account username. This route can only be called using your api key supplied to you from SimpliVPN.
		 * Post username-available
		 * @return {void} Success
		 */
		UsernameAvailable(requestBody: EnableUser): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'username-available', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

