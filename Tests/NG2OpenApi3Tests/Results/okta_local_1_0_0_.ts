import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Find User
		 * Find User
		 * Get api/v1/users
		 * @return {void} 
		 */
		FindUser(q: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/users?q=' + (q == null ? '' : encodeURIComponent(q)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create User in Group
		 * Create User in Group
		 * Post api/v1/users
		 * @return {void} 
		 */
		CreateUserInGroup(activate: string | null | undefined, requestBody: CreateUserInGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/users?activate=' + (activate == null ? '' : encodeURIComponent(activate)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Current User
		 * Get Current User
		 * Get api/v1/users/me
		 * @return {void} 
		 */
		GetCurrentUser(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/users/me', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User
		 * Get User
		 * Get api/v1/users/{userId}
		 * @return {void} 
		 */
		GetUser(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/users/{userId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set Recovery Credential
		 * Set Recovery Credential
		 * Put api/v1/users/{userId}
		 * @return {void} 
		 */
		SetRecoveryCredential(requestBody: SetRecoveryCredentialPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/users/{userId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Assigned App Links
		 * Get Assigned App Links
		 * Get api/v1/users/{userId}/appLinks
		 * @return {void} 
		 */
		GetAssignedAppLinks(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/users/{userId}/appLinks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Password
		 * Change Password
		 * Post api/v1/users/{userId}/credentials/change_password
		 * @return {void} 
		 */
		ChangePassword(requestBody: ChangePasswordPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/users/{userId}/credentials/change_password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Recovery Question
		 * Change Recovery Question
		 * Post api/v1/users/{userId}/credentials/change_recovery_question
		 * @return {void} 
		 */
		ChangeRecoveryQuestion(requestBody: ChangeRecoveryQuestionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/users/{userId}/credentials/change_recovery_question', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Groups for User
		 * Get Groups for User
		 * Get api/v1/users/{userId}/groups
		 * @return {void} 
		 */
		GetGroupsForUser(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/users/{userId}/groups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear User Sessions
		 * Clear User Sessions
		 * Delete api/v1/users/{userId}/sessions
		 * @return {void} 
		 */
		ClearUserSessions(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/users/{userId}/sessions', { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateUserInGroupPostBody {
		groupIds?: Array<string>;
		profile?: CreateUserInGroupPostBodyProfile;
	}
	export interface CreateUserInGroupPostBodyFormProperties {
	}
	export function CreateCreateUserInGroupPostBodyFormGroup() {
		return new FormGroup<CreateUserInGroupPostBodyFormProperties>({
		});

	}

	export interface CreateUserInGroupPostBodyProfile {
		email?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		login?: string | null;
	}
	export interface CreateUserInGroupPostBodyProfileFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		login: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserInGroupPostBodyProfileFormGroup() {
		return new FormGroup<CreateUserInGroupPostBodyProfileFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetRecoveryCredentialPutBody {
		credentials?: SetRecoveryCredentialPutBodyCredentials;
	}
	export interface SetRecoveryCredentialPutBodyFormProperties {
	}
	export function CreateSetRecoveryCredentialPutBodyFormGroup() {
		return new FormGroup<SetRecoveryCredentialPutBodyFormProperties>({
		});

	}

	export interface SetRecoveryCredentialPutBodyCredentials {
		recovery_question?: SetRecoveryCredentialPutBodyCredentialsRecovery_question;
	}
	export interface SetRecoveryCredentialPutBodyCredentialsFormProperties {
	}
	export function CreateSetRecoveryCredentialPutBodyCredentialsFormGroup() {
		return new FormGroup<SetRecoveryCredentialPutBodyCredentialsFormProperties>({
		});

	}

	export interface SetRecoveryCredentialPutBodyCredentialsRecovery_question {
		answer?: string | null;
		question?: string | null;
	}
	export interface SetRecoveryCredentialPutBodyCredentialsRecovery_questionFormProperties {
		answer: FormControl<string | null | undefined>,
		question: FormControl<string | null | undefined>,
	}
	export function CreateSetRecoveryCredentialPutBodyCredentialsRecovery_questionFormGroup() {
		return new FormGroup<SetRecoveryCredentialPutBodyCredentialsRecovery_questionFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangePasswordPostBody {
		newPassword?: ChangePasswordPostBodyNewPassword;
		oldPassword?: ChangePasswordPostBodyOldPassword;
	}
	export interface ChangePasswordPostBodyFormProperties {
	}
	export function CreateChangePasswordPostBodyFormGroup() {
		return new FormGroup<ChangePasswordPostBodyFormProperties>({
		});

	}

	export interface ChangePasswordPostBodyNewPassword {
		value?: string | null;
	}
	export interface ChangePasswordPostBodyNewPasswordFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordPostBodyNewPasswordFormGroup() {
		return new FormGroup<ChangePasswordPostBodyNewPasswordFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangePasswordPostBodyOldPassword {
		value?: string | null;
	}
	export interface ChangePasswordPostBodyOldPasswordFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordPostBodyOldPasswordFormGroup() {
		return new FormGroup<ChangePasswordPostBodyOldPasswordFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangeRecoveryQuestionPostBody {
		password?: ChangeRecoveryQuestionPostBodyPassword;
		recovery_question?: ChangeRecoveryQuestionPostBodyRecovery_question;
	}
	export interface ChangeRecoveryQuestionPostBodyFormProperties {
	}
	export function CreateChangeRecoveryQuestionPostBodyFormGroup() {
		return new FormGroup<ChangeRecoveryQuestionPostBodyFormProperties>({
		});

	}

	export interface ChangeRecoveryQuestionPostBodyPassword {
		value?: string | null;
	}
	export interface ChangeRecoveryQuestionPostBodyPasswordFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateChangeRecoveryQuestionPostBodyPasswordFormGroup() {
		return new FormGroup<ChangeRecoveryQuestionPostBodyPasswordFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangeRecoveryQuestionPostBodyRecovery_question {
		answer?: string | null;
		question?: string | null;
	}
	export interface ChangeRecoveryQuestionPostBodyRecovery_questionFormProperties {
		answer: FormControl<string | null | undefined>,
		question: FormControl<string | null | undefined>,
	}
	export function CreateChangeRecoveryQuestionPostBodyRecovery_questionFormGroup() {
		return new FormGroup<ChangeRecoveryQuestionPostBodyRecovery_questionFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
		});

	}

}

