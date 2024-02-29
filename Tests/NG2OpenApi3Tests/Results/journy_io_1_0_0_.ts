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
		 * Delete account
		 * Endpoint used to delete an account.
		 * Delete accounts
		 * @return {void} 
		 */
		DeleteAccount(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update account
		 * Endpoint used to create or update an account.
		 * Post accounts/upsert
		 * @return {void} 
		 */
		UpsertAccount(requestBody: UpsertAccountPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add users to an account
		 * You can add up to 100 users to an account.
		 * Post accounts/users/add
		 * @return {void} 
		 */
		AddUserToAccount(requestBody: AddUserToAccountPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/users/add', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove user from account
		 * You can remove up to 100 users from an account.
		 * When removing a user, the user will still be stored in journy.io, but marked as "removed".
		 * Post accounts/users/remove
		 * @return {void} 
		 */
		RemoveUserFromAccount(requestBody: RemoveUserFromAccountPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/users/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get events
		 * Endpoint to list events.
		 * Get events
		 * @return {GetEventsReturn} Events
		 */
		GetEvents(): Observable<GetEventsReturn> {
			return this.http.get<GetEventsReturn>(this.baseUri + 'events', {});
		}

		/**
		 * Track event
		 * Endpoint used to track an event for a user or an account.
		 * This endpoint is moved to [Track](#operation/trackEvent).
		 * Post events
		 * @return {void} 
		 */
		TrackJourneyEvent(requestBody: TrackJourneyEventPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Link web activity to user
		 * 💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.
		 * This endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.
		 * When our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.
		 * This will only work if your website and application are under the same top level domain.
		 * Website, blog or landing pages
		 * * www.my-domain.tld
		 * * blog.my-domain.tld
		 * * landing-page.my-domain.tld
		 * Application
		 * * app.my-domain.tld
		 * The cookie on my-domain.tld will also be send to your app domain.
		 * You should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.
		 * Post link
		 * @return {void} 
		 */
		Link(requestBody: LinkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'link', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get account properties
		 * Endpoint to list account properties.
		 * Get properties/accounts
		 * @return {GetAccountPropertiesReturn} Account Properties
		 */
		GetAccountProperties(): Observable<GetAccountPropertiesReturn> {
			return this.http.get<GetAccountPropertiesReturn>(this.baseUri + 'properties/accounts', {});
		}

		/**
		 * Get user properties
		 * Endpoint to list user properties.
		 * Get properties/users
		 * @return {GetUserPropertiesReturn} User Properties
		 */
		GetUserProperties(): Observable<GetUserPropertiesReturn> {
			return this.http.get<GetUserPropertiesReturn>(this.baseUri + 'properties/users', {});
		}

		/**
		 * Get account segments
		 * Endpoint to list account segments.
		 * Get segments/accounts
		 * @return {GetAccountSegmentsReturn} Account Segments
		 */
		GetAccountSegments(): Observable<GetAccountSegmentsReturn> {
			return this.http.get<GetAccountSegmentsReturn>(this.baseUri + 'segments/accounts', {});
		}

		/**
		 * Get user segments
		 * Endpoint to list user segments.
		 * Get segments/users
		 * @return {GetUserSegmentsReturn} User Segments
		 */
		GetUserSegments(): Observable<GetUserSegmentsReturn> {
			return this.http.get<GetUserSegmentsReturn>(this.baseUri + 'segments/users', {});
		}

		/**
		 * Track event
		 * Endpoint used to track an event for a user or an account.
		 * Post track
		 * @return {void} 
		 */
		TrackEvent(requestBody: TrackEventPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'track', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get snippet for a website
		 * Endpoint used to get a snippet for a website.
		 * Get tracking/snippet
		 * @param {string} domain The domain you want to receive a snippet for
		 * @return {GetTrackingSnippetReturn} Snippet
		 */
		GetTrackingSnippet(domain: string): Observable<GetTrackingSnippetReturn> {
			return this.http.get<GetTrackingSnippetReturn>(this.baseUri + 'tracking/snippet?domain=' + (domain == null ? '' : encodeURIComponent(domain)), {});
		}

		/**
		 * Delete user
		 * Endpoint to delete a user.
		 * Delete users
		 * @return {void} 
		 */
		DeleteUser(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update user
		 * Endpoint to create or update a user.
		 * Post users/upsert
		 * @return {void} 
		 */
		UpsertUser(requestBody: UpsertUserPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate API key
		 * Endpoint used to test the validity and some basic information about a specific API Key.
		 * Get validate
		 * @return {GetValidityReturn} Key validation
		 */
		GetValidity(): Observable<GetValidityReturn> {
			return this.http.get<GetValidityReturn>(this.baseUri + 'validate', {});
		}
	}

	export interface UpsertAccountPostBody {

		/**
		 * Account identification requires an accountId, domain or both
		 * Required
		 */
		identification: UpsertAccountPostBodyIdentification;

		/** The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		properties?: {[id: string]: any };
	}
	export interface UpsertAccountPostBodyFormProperties {

		/** The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		properties: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateUpsertAccountPostBodyFormGroup() {
		return new FormGroup<UpsertAccountPostBodyFormProperties>({
			properties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface UpsertAccountPostBodyIdentification {

		/** Unique identifier for the account in your database */
		accountId?: string | null;

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain?: string | null;
	}
	export interface UpsertAccountPostBodyIdentificationFormProperties {

		/** Unique identifier for the account in your database */
		accountId: FormControl<string | null | undefined>,

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateUpsertAccountPostBodyIdentificationFormGroup() {
		return new FormGroup<UpsertAccountPostBodyIdentificationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddUserToAccountPostBody {

		/**
		 * Account identification requires an accountId, domain or both
		 * Required
		 */
		account: AddUserToAccountPostBodyAccount;

		/** Required */
		AddUserToAccountPostBodyUsers: Array<AddUserToAccountPostBodyUsers>;
	}
	export interface AddUserToAccountPostBodyFormProperties {
	}
	export function CreateAddUserToAccountPostBodyFormGroup() {
		return new FormGroup<AddUserToAccountPostBodyFormProperties>({
		});

	}

	export interface AddUserToAccountPostBodyAccount {

		/** Unique identifier for the account in your database */
		accountId?: string | null;

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain?: string | null;
	}
	export interface AddUserToAccountPostBodyAccountFormProperties {

		/** Unique identifier for the account in your database */
		accountId: FormControl<string | null | undefined>,

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateAddUserToAccountPostBodyAccountFormGroup() {
		return new FormGroup<AddUserToAccountPostBodyAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddUserToAccountPostBodyUsers {

		/**
		 * User identification requires a userId, email or both
		 * Required
		 */
		identification: AddUserToAccountPostBodyUsersIdentification;
	}
	export interface AddUserToAccountPostBodyUsersFormProperties {
	}
	export function CreateAddUserToAccountPostBodyUsersFormGroup() {
		return new FormGroup<AddUserToAccountPostBodyUsersFormProperties>({
		});

	}

	export interface AddUserToAccountPostBodyUsersIdentification {

		/** Email address of the user */
		email?: string | null;

		/** Unique identifier for the user in your database */
		userId?: string | null;
	}
	export interface AddUserToAccountPostBodyUsersIdentificationFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** Unique identifier for the user in your database */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAddUserToAccountPostBodyUsersIdentificationFormGroup() {
		return new FormGroup<AddUserToAccountPostBodyUsersIdentificationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveUserFromAccountPostBody {

		/**
		 * Account identification requires an accountId, domain or both
		 * Required
		 */
		account: RemoveUserFromAccountPostBodyAccount;

		/** Required */
		RemoveUserFromAccountPostBodyUsers: Array<RemoveUserFromAccountPostBodyUsers>;
	}
	export interface RemoveUserFromAccountPostBodyFormProperties {
	}
	export function CreateRemoveUserFromAccountPostBodyFormGroup() {
		return new FormGroup<RemoveUserFromAccountPostBodyFormProperties>({
		});

	}

	export interface RemoveUserFromAccountPostBodyAccount {

		/** Unique identifier for the account in your database */
		accountId?: string | null;

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain?: string | null;
	}
	export interface RemoveUserFromAccountPostBodyAccountFormProperties {

		/** Unique identifier for the account in your database */
		accountId: FormControl<string | null | undefined>,

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateRemoveUserFromAccountPostBodyAccountFormGroup() {
		return new FormGroup<RemoveUserFromAccountPostBodyAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveUserFromAccountPostBodyUsers {

		/**
		 * User identification requires a userId, email or both
		 * Required
		 */
		identification: RemoveUserFromAccountPostBodyUsersIdentification;
	}
	export interface RemoveUserFromAccountPostBodyUsersFormProperties {
	}
	export function CreateRemoveUserFromAccountPostBodyUsersFormGroup() {
		return new FormGroup<RemoveUserFromAccountPostBodyUsersFormProperties>({
		});

	}

	export interface RemoveUserFromAccountPostBodyUsersIdentification {

		/** Email address of the user */
		email?: string | null;

		/** Unique identifier for the user in your database */
		userId?: string | null;
	}
	export interface RemoveUserFromAccountPostBodyUsersIdentificationFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** Unique identifier for the user in your database */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveUserFromAccountPostBodyUsersIdentificationFormGroup() {
		return new FormGroup<RemoveUserFromAccountPostBodyUsersIdentificationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEventsReturn {

		/** Required */
		meta: GetEventsReturnMeta;
	}
	export interface GetEventsReturnFormProperties {
	}
	export function CreateGetEventsReturnFormGroup() {
		return new FormGroup<GetEventsReturnFormProperties>({
		});

	}

	export interface GetEventsReturnMeta {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		status: number;
	}
	export interface GetEventsReturnMetaFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetEventsReturnMetaFormGroup() {
		return new FormGroup<GetEventsReturnMetaFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrackJourneyEventPostBody {

		/**
		 * Event identification requires a user, account or both
		 * Required
		 */
		identification: TrackJourneyEventPostBodyIdentification;

		/** Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		metadata?: {[id: string]: any };

		/** Required */
		name: string;

		/** If left blank this defaults to the current datetime */
		triggeredAt?: string | null;
	}
	export interface TrackJourneyEventPostBodyFormProperties {

		/** Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** If left blank this defaults to the current datetime */
		triggeredAt: FormControl<string | null | undefined>,
	}
	export function CreateTrackJourneyEventPostBodyFormGroup() {
		return new FormGroup<TrackJourneyEventPostBodyFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			triggeredAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackJourneyEventPostBodyIdentification {

		/** Account identification requires an accountId, domain or both */
		account?: TrackJourneyEventPostBodyIdentificationAccount;

		/** User identification requires a userId, email or both */
		user?: TrackJourneyEventPostBodyIdentificationUser;
	}
	export interface TrackJourneyEventPostBodyIdentificationFormProperties {
	}
	export function CreateTrackJourneyEventPostBodyIdentificationFormGroup() {
		return new FormGroup<TrackJourneyEventPostBodyIdentificationFormProperties>({
		});

	}

	export interface TrackJourneyEventPostBodyIdentificationAccount {

		/** Unique identifier for the account in your database */
		accountId?: string | null;

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain?: string | null;
	}
	export interface TrackJourneyEventPostBodyIdentificationAccountFormProperties {

		/** Unique identifier for the account in your database */
		accountId: FormControl<string | null | undefined>,

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateTrackJourneyEventPostBodyIdentificationAccountFormGroup() {
		return new FormGroup<TrackJourneyEventPostBodyIdentificationAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackJourneyEventPostBodyIdentificationUser {

		/** Email address of the user */
		email?: string | null;

		/** Unique identifier for the user in your database */
		userId?: string | null;
	}
	export interface TrackJourneyEventPostBodyIdentificationUserFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** Unique identifier for the user in your database */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTrackJourneyEventPostBodyIdentificationUserFormGroup() {
		return new FormGroup<TrackJourneyEventPostBodyIdentificationUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkPostBody {

		/** Required */
		deviceId: string;

		/**
		 * User identification requires a userId, email or both
		 * Required
		 */
		identification: LinkPostBodyIdentification;
	}
	export interface LinkPostBodyFormProperties {

		/** Required */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateLinkPostBodyFormGroup() {
		return new FormGroup<LinkPostBodyFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinkPostBodyIdentification {

		/** Email address of the user */
		email?: string | null;

		/** Unique identifier for the user in your database */
		userId?: string | null;
	}
	export interface LinkPostBodyIdentificationFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** Unique identifier for the user in your database */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateLinkPostBodyIdentificationFormGroup() {
		return new FormGroup<LinkPostBodyIdentificationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccountPropertiesReturn {

		/** Required */
		meta: GetAccountPropertiesReturnMeta;
	}
	export interface GetAccountPropertiesReturnFormProperties {
	}
	export function CreateGetAccountPropertiesReturnFormGroup() {
		return new FormGroup<GetAccountPropertiesReturnFormProperties>({
		});

	}

	export interface GetAccountPropertiesReturnMeta {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		status: number;
	}
	export interface GetAccountPropertiesReturnMetaFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetAccountPropertiesReturnMetaFormGroup() {
		return new FormGroup<GetAccountPropertiesReturnMetaFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserPropertiesReturn {

		/** Required */
		meta: GetUserPropertiesReturnMeta;
	}
	export interface GetUserPropertiesReturnFormProperties {
	}
	export function CreateGetUserPropertiesReturnFormGroup() {
		return new FormGroup<GetUserPropertiesReturnFormProperties>({
		});

	}

	export interface GetUserPropertiesReturnMeta {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		status: number;
	}
	export interface GetUserPropertiesReturnMetaFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetUserPropertiesReturnMetaFormGroup() {
		return new FormGroup<GetUserPropertiesReturnMetaFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccountSegmentsReturn {

		/** Required */
		meta: GetAccountSegmentsReturnMeta;
	}
	export interface GetAccountSegmentsReturnFormProperties {
	}
	export function CreateGetAccountSegmentsReturnFormGroup() {
		return new FormGroup<GetAccountSegmentsReturnFormProperties>({
		});

	}

	export interface GetAccountSegmentsReturnMeta {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		status: number;
	}
	export interface GetAccountSegmentsReturnMetaFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetAccountSegmentsReturnMetaFormGroup() {
		return new FormGroup<GetAccountSegmentsReturnMetaFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserSegmentsReturn {

		/** Required */
		meta: GetUserSegmentsReturnMeta;
	}
	export interface GetUserSegmentsReturnFormProperties {
	}
	export function CreateGetUserSegmentsReturnFormGroup() {
		return new FormGroup<GetUserSegmentsReturnFormProperties>({
		});

	}

	export interface GetUserSegmentsReturnMeta {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		status: number;
	}
	export interface GetUserSegmentsReturnMetaFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetUserSegmentsReturnMetaFormGroup() {
		return new FormGroup<GetUserSegmentsReturnMetaFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrackEventPostBody {

		/**
		 * Event identification requires a user, account or both
		 * Required
		 */
		identification: TrackEventPostBodyIdentification;

		/** Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		metadata?: {[id: string]: any };

		/** Required */
		name: string;

		/** If left blank this defaults to the current datetime */
		triggeredAt?: string | null;
	}
	export interface TrackEventPostBodyFormProperties {

		/** Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** If left blank this defaults to the current datetime */
		triggeredAt: FormControl<string | null | undefined>,
	}
	export function CreateTrackEventPostBodyFormGroup() {
		return new FormGroup<TrackEventPostBodyFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			triggeredAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackEventPostBodyIdentification {

		/** Account identification requires an accountId, domain or both */
		account?: TrackEventPostBodyIdentificationAccount;

		/** User identification requires a userId, email or both */
		user?: TrackEventPostBodyIdentificationUser;
	}
	export interface TrackEventPostBodyIdentificationFormProperties {
	}
	export function CreateTrackEventPostBodyIdentificationFormGroup() {
		return new FormGroup<TrackEventPostBodyIdentificationFormProperties>({
		});

	}

	export interface TrackEventPostBodyIdentificationAccount {

		/** Unique identifier for the account in your database */
		accountId?: string | null;

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain?: string | null;
	}
	export interface TrackEventPostBodyIdentificationAccountFormProperties {

		/** Unique identifier for the account in your database */
		accountId: FormControl<string | null | undefined>,

		/** The domain associated with the account (e.g. acme-inc.com) */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateTrackEventPostBodyIdentificationAccountFormGroup() {
		return new FormGroup<TrackEventPostBodyIdentificationAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackEventPostBodyIdentificationUser {

		/** Email address of the user */
		email?: string | null;

		/** Unique identifier for the user in your database */
		userId?: string | null;
	}
	export interface TrackEventPostBodyIdentificationUserFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** Unique identifier for the user in your database */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTrackEventPostBodyIdentificationUserFormGroup() {
		return new FormGroup<TrackEventPostBodyIdentificationUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTrackingSnippetReturn {

		/** Required */
		meta: GetTrackingSnippetReturnMeta;
	}
	export interface GetTrackingSnippetReturnFormProperties {
	}
	export function CreateGetTrackingSnippetReturnFormGroup() {
		return new FormGroup<GetTrackingSnippetReturnFormProperties>({
		});

	}

	export interface GetTrackingSnippetReturnMeta {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		status: number;
	}
	export interface GetTrackingSnippetReturnMetaFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetTrackingSnippetReturnMetaFormGroup() {
		return new FormGroup<GetTrackingSnippetReturnMetaFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpsertUserPostBody {

		/**
		 * User identification requires a userId, email or both
		 * Required
		 */
		identification: UpsertUserPostBodyIdentification;

		/** The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		properties?: {[id: string]: any };
	}
	export interface UpsertUserPostBodyFormProperties {

		/** The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601) */
		properties: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateUpsertUserPostBodyFormGroup() {
		return new FormGroup<UpsertUserPostBodyFormProperties>({
			properties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface UpsertUserPostBodyIdentification {

		/** Email address of the user */
		email?: string | null;

		/** Unique identifier for the user in your database */
		userId?: string | null;
	}
	export interface UpsertUserPostBodyIdentificationFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** Unique identifier for the user in your database */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUpsertUserPostBodyIdentificationFormGroup() {
		return new FormGroup<UpsertUserPostBodyIdentificationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetValidityReturn {

		/** Required */
		meta: GetValidityReturnMeta;
	}
	export interface GetValidityReturnFormProperties {
	}
	export function CreateGetValidityReturnFormGroup() {
		return new FormGroup<GetValidityReturnFormProperties>({
		});

	}

	export interface GetValidityReturnMeta {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		status: number;
	}
	export interface GetValidityReturnMetaFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetValidityReturnMetaFormGroup() {
		return new FormGroup<GetValidityReturnMetaFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

}

