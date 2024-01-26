import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The object that's returned when a user record is created. */
	export interface CreateUserResponse {

		/** The user's email address */
		email?: string | null;

		/** The user's password reset code */
		guid?: string | null;
	}

	/** The object that's returned when a user record is created. */
	export interface CreateUserResponseFormProperties {

		/** The user's email address */
		email: FormControl<string | null | undefined>,

		/** The user's password reset code */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Invalid token */
	export interface InvalidToken {
		message?: string | null;
	}

	/** Invalid token */
	export interface InvalidTokenFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidTokenFormGroup() {
		return new FormGroup<InvalidTokenFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key Failure */
	export interface KeyFailure {
		message?: string | null;
	}

	/** Key Failure */
	export interface KeyFailureFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateKeyFailureFormGroup() {
		return new FormGroup<KeyFailureFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload of successful login */
	export interface LoginResponse {

		/** True if this user is an admin. False otherwise */
		admin?: boolean | null;

		/** The login id for this user */
		login_id?: number | null;

		/** This user's name */
		name?: string | null;

		/** True if this user has permissions to write to the database. False otherwise */
		read_only?: boolean | null;

		/** The API key that will be used to authenticate the user. */
		token?: string | null;
	}

	/** Payload of successful login */
	export interface LoginResponseFormProperties {

		/** True if this user is an admin. False otherwise */
		admin: FormControl<boolean | null | undefined>,

		/** The login id for this user */
		login_id: FormControl<number | null | undefined>,

		/** This user's name */
		name: FormControl<string | null | undefined>,

		/** True if this user has permissions to write to the database. False otherwise */
		read_only: FormControl<boolean | null | undefined>,

		/** The API key that will be used to authenticate the user. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateLoginResponseFormGroup() {
		return new FormGroup<LoginResponseFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			login_id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			read_only: new FormControl<boolean | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This object contains the password reset code for the user */
	export interface RequestPasswordResetResponse {

		/** The user's email address */
		email?: string | null;

		/** The password reset code */
		guid?: string | null;
	}

	/** This object contains the password reset code for the user */
	export interface RequestPasswordResetResponseFormProperties {

		/** The user's email address */
		email: FormControl<string | null | undefined>,

		/** The password reset code */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateRequestPasswordResetResponseFormGroup() {
		return new FormGroup<RequestPasswordResetResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload of signin object */
	export interface Signin {

		/** The original scan time in number of seconds since 1/1/1970 (GMT) */
		dt?: number | null;

		/** The person's email */
		email?: string | null;

		/** The record id */
		id?: number | null;

		/**
		 * The person's name
		 * Required
		 */
		name: string;

		/**
		 * The person's phone number
		 * Required
		 */
		phone: string;
	}

	/** Payload of signin object */
	export interface SigninFormProperties {

		/** The original scan time in number of seconds since 1/1/1970 (GMT) */
		dt: FormControl<number | null | undefined>,

		/** The person's email */
		email: FormControl<string | null | undefined>,

		/** The record id */
		id: FormControl<number | null | undefined>,

		/**
		 * The person's name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The person's phone number
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateSigninFormGroup() {
		return new FormGroup<SigninFormProperties>({
			dt: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response when you successfully create a signin record */
	export interface SigninResponse {

		/**
		 * Minimum: 1
		 * Maximum: 1
		 */
		result?: number | null;
	}

	/** Response when you successfully create a signin record */
	export interface SigninResponseFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1
		 */
		result: FormControl<number | null | undefined>,
	}
	export function CreateSigninResponseFormGroup() {
		return new FormGroup<SigninResponseFormProperties>({
			result: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1)]),
		});

	}


	/** A team member user record */
	export interface UserRecord {

		/**
		 * If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
		 */
		admin?: boolean | null;

		/** The user's email address */
		email?: string | null;

		/** The id of the user's record */
		id?: number | null;

		/** The user's name */
		name?: string | null;

		/** Not used in this version of the API. For future use. */
		read_only?: boolean | null;
	}

	/** A team member user record */
	export interface UserRecordFormProperties {

		/**
		 * If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
		 */
		admin: FormControl<boolean | null | undefined>,

		/** The user's email address */
		email: FormControl<string | null | undefined>,

		/** The id of the user's record */
		id: FormControl<number | null | undefined>,

		/** The user's name */
		name: FormControl<string | null | undefined>,

		/** Not used in this version of the API. For future use. */
		read_only: FormControl<boolean | null | undefined>,
	}
	export function CreateUserRecordFormGroup() {
		return new FormGroup<UserRecordFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			read_only: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ChangePasswordPayload {

		/** The old (current) password */
		old_password?: string | null;

		/** The new password */
		password?: string | null;
	}
	export interface ChangePasswordPayloadFormProperties {

		/** The old (current) password */
		old_password: FormControl<string | null | undefined>,

		/** The new password */
		password: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordPayloadFormGroup() {
		return new FormGroup<ChangePasswordPayloadFormProperties>({
			old_password: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserPayload {

		/**
		 * If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
		 */
		admin?: boolean | null;

		/** The email address of the user record you want to create */
		email?: string | null;

		/** The name of the user record you want to create */
		name?: string | null;

		/** Not used in this version of the API. For future use. */
		read_only?: boolean | null;
	}
	export interface CreateUserPayloadFormProperties {

		/**
		 * If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
		 */
		admin: FormControl<boolean | null | undefined>,

		/** The email address of the user record you want to create */
		email: FormControl<string | null | undefined>,

		/** The name of the user record you want to create */
		name: FormControl<string | null | undefined>,

		/** Not used in this version of the API. For future use. */
		read_only: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateUserPayloadFormGroup() {
		return new FormGroup<CreateUserPayloadFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			read_only: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LoginPayload {
		email?: string | null;
		password?: string | null;
		source?: LoginPayloadSource | null;
	}
	export interface LoginPayloadFormProperties {
		email: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		source: FormControl<LoginPayloadSource | null | undefined>,
	}
	export function CreateLoginPayloadFormGroup() {
		return new FormGroup<LoginPayloadFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<LoginPayloadSource | null | undefined>(undefined),
		});

	}

	export enum LoginPayloadSource { iOS = 'iOS', android = 'android', web = 'web' }

	export interface PasswordResetPayload {

		/** The password reset code */
		guid?: string | null;

		/** The new password */
		password?: string | null;
	}
	export interface PasswordResetPayloadFormProperties {

		/** The password reset code */
		guid: FormControl<string | null | undefined>,

		/** The new password */
		password: FormControl<string | null | undefined>,
	}
	export function CreatePasswordResetPayloadFormGroup() {
		return new FormGroup<PasswordResetPayloadFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestPasswordResetPayload {

		/** The user whose password you want to reset */
		email?: string | null;
	}
	export interface RequestPasswordResetPayloadFormProperties {

		/** The user whose password you want to reset */
		email: FormControl<string | null | undefined>,
	}
	export function CreateRequestPasswordResetPayloadFormGroup() {
		return new FormGroup<RequestPasswordResetPayloadFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload of signin object */
	export interface SigninPayload {

		/** The original scan time in number of seconds since 1/1/1970 (GMT) */
		dt?: number | null;

		/** The person's email */
		email?: string | null;

		/** The record id */
		id?: number | null;

		/**
		 * The person's name
		 * Required
		 */
		name: string;

		/**
		 * The person's phone number
		 * Required
		 */
		phone: string;
	}

	/** Payload of signin object */
	export interface SigninPayloadFormProperties {

		/** The original scan time in number of seconds since 1/1/1970 (GMT) */
		dt: FormControl<number | null | undefined>,

		/** The person's email */
		email: FormControl<string | null | undefined>,

		/** The record id */
		id: FormControl<number | null | undefined>,

		/**
		 * The person's name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The person's phone number
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateSigninPayloadFormGroup() {
		return new FormGroup<SigninPayloadFormProperties>({
			dt: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used for changing your password
		 * Pass in your old password and your new password
		 * Post changePassword
		 * @param {ChangePasswordPayload} requestBody Change Password Payload
		 * @return {void} Success
		 */
		ChangePasswordPost(requestBody: ChangePasswordPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'changePassword', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Log in to get an API token
		 * Submit your email and password to get an API token
		 * Post login
		 * @param {LoginPayload} requestBody The login payload
		 * @return {LoginResponse} Success
		 */
		LoginPost(requestBody: LoginPayload, headersHandler?: () => HttpHeaders): Observable<LoginResponse> {
			return this.http.post<LoginResponse>(this.baseUri + 'login', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Log out
		 * Log out by deleting your token off the server.
		 * Post logout
		 * @return {void} Success
		 */
		LogoutPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'logout', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Used for requesting a password reset code
		 * The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.
		 * Post requestPasswordReset
		 * @param {RequestPasswordResetPayload} requestBody Request Password Reset Payload
		 * @return {RequestPasswordResetResponse} Success
		 */
		RequestPasswordResetPost(requestBody: RequestPasswordResetPayload, headersHandler?: () => HttpHeaders): Observable<RequestPasswordResetResponse> {
			return this.http.post<RequestPasswordResetResponse>(this.baseUri + 'requestPasswordReset', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create a new signin record
		 * Post signin
		 * @return {SigninResponse} Success
		 */
		SigninPost(requestBody: SigninPayload, headersHandler?: () => HttpHeaders): Observable<SigninResponse> {
			return this.http.post<SigninResponse>(this.baseUri + 'signin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a signin record
		 * Delete a signin record
		 * Delete signin/{signinId}
		 * @param {number} signinId The ID of the signin record to be deleted.
		 * @return {void} Success
		 */
		Signin_signinIdDelete(signinId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'signin/' + signinId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the information associated with a signin record
		 * Retrieve the information associated with a signin record
		 * Get signin/{signinId}
		 * @param {number} signinId The ID of the signin record to be retrieved.
		 * @return {Signin} Success
		 */
		Signin_signinIdGet(signinId: number, headersHandler?: () => HttpHeaders): Observable<Signin> {
			return this.http.get<Signin>(this.baseUri + 'signin/' + signinId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a signin record
		 * Update a signin record
		 * Put signin/{signinId}
		 * @param {number} signinId The ID of the signin record to be retrieved.
		 * @return {UserRecord} Success
		 */
		Signin_signinIdPut(signinId: number, requestBody: SigninPayload, headersHandler?: () => HttpHeaders): Observable<UserRecord> {
			return this.http.put<UserRecord>(this.baseUri + 'signin/' + signinId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get signin info
		 * Returns a list of signin objects sorted by signin ID descending.
		 * Get signins
		 * @param {number} less_than Return signins with IDs less than this value.
		 * @param {number} return_count Return this many objects
		 * @return {Array<Signin>} Successful response
		 */
		SigninsGetByLess_thanAndReturn_count(less_than: number | null | undefined, return_count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Signin>> {
			return this.http.get<Array<Signin>>(this.baseUri + 'signins?less_than=' + less_than + '&return_count=' + return_count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a user
		 * Use this endpoint to create a team member (user) record
		 * Post user
		 * @param {CreateUserPayload} requestBody Create User Payload
		 * @return {CreateUserResponse} Success
		 */
		UserPost(requestBody: CreateUserPayload, headersHandler?: () => HttpHeaders): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + 'user', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a team member's user record
		 * To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens.
		 * Delete user/{userId}
		 * @param {number} userId The ID of the user record to be deleted.
		 * @return {void} Success
		 */
		User_userIdDelete(userId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/' + userId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the information associated with a team member's user record
		 * Retrieve the information associated with a user's account
		 * Get user/{userId}
		 * @param {number} userId The ID of the user record to be retrieved.
		 * @return {UserRecord} Success
		 */
		User_userIdGet(userId: number, headersHandler?: () => HttpHeaders): Observable<UserRecord> {
			return this.http.get<UserRecord>(this.baseUri + 'user/' + userId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the information associated with all team members' user records
		 * Retrieve the information associated with all team members' user records
		 * Get users
		 * @return {Array<UserRecord>} Success
		 */
		UsersGet(headersHandler?: () => HttpHeaders): Observable<Array<UserRecord>> {
			return this.http.get<Array<UserRecord>>(this.baseUri + 'users', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Used for resetting your password when you forgot it
		 * Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.
		 * Post verifyPasswordChange
		 * @param {PasswordResetPayload} requestBody Password Reset Payload
		 * @return {void} Success
		 */
		VerifyPasswordChangePost(requestBody: PasswordResetPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifyPasswordChange', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

