import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DatasetModel {
		name?: DatasetModelName | null;
		timespans?: Array<TimespanType>;
		views?: Array<DataviewType>;
	}
	export interface DatasetModelFormProperties {
		name: FormControl<DatasetModelName | null | undefined>,
	}
	export function CreateDatasetModelFormGroup() {
		return new FormGroup<DatasetModelFormProperties>({
			name: new FormControl<DatasetModelName | null | undefined>(undefined),
		});

	}

	export enum DatasetModelName { pulls = 0 }

	export enum TimespanType { months = 0, weeks = 1 }

	export enum DataviewType { raw = 0, summary = 1, 'repo-summary' = 2 }

	export enum DatasetType { pulls = 0 }

	export interface MonthData {
		months?: Array<MonthModel>;
	}
	export interface MonthDataFormProperties {
	}
	export function CreateMonthDataFormGroup() {
		return new FormGroup<MonthDataFormProperties>({
		});

	}

	export interface MonthModel {
		month?: number | null;
	}
	export interface MonthModelFormProperties {
		month: FormControl<number | null | undefined>,
	}
	export function CreateMonthModelFormGroup() {
		return new FormGroup<MonthModelFormProperties>({
			month: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NamespaceData {
		namespaces?: Array<string>;
	}
	export interface NamespaceDataFormProperties {
	}
	export function CreateNamespaceDataFormGroup() {
		return new FormGroup<NamespaceDataFormProperties>({
		});

	}

	export interface NamespaceMetadata {
		datasets?: Array<DatasetModel>;
		extraRepos?: Array<string>;
		namespace?: string | null;
	}
	export interface NamespaceMetadataFormProperties {
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateNamespaceMetadataFormGroup() {
		return new FormGroup<NamespaceMetadataFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** failed second factor login response. */
	export interface PostUsers2FALoginErrorResponse {

		/** Description of the error. */
		detail?: string | null;
	}

	/** failed second factor login response. */
	export interface PostUsers2FALoginErrorResponseFormProperties {

		/** Description of the error. */
		detail: FormControl<string | null | undefined>,
	}
	export function CreatePostUsers2FALoginErrorResponseFormGroup() {
		return new FormGroup<PostUsers2FALoginErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** failed user login response or second factor required */
	export interface PostUsersLoginErrorResponse {

		/**
		 * Description of the error.
		 * Required
		 */
		detail: string;

		/** Short time lived token to be used on `/v2/users/2fa-login` to complete the authentication. This field is present only if 2FA is enabled. */
		login_2fa_token?: string | null;
	}

	/** failed user login response or second factor required */
	export interface PostUsersLoginErrorResponseFormProperties {

		/**
		 * Description of the error.
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/** Short time lived token to be used on `/v2/users/2fa-login` to complete the authentication. This field is present only if 2FA is enabled. */
		login_2fa_token: FormControl<string | null | undefined>,
	}
	export function CreatePostUsersLoginErrorResponseFormGroup() {
		return new FormGroup<PostUsersLoginErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			login_2fa_token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** successful user login response */
	export interface PostUsersLoginSuccessResponse {

		/**
		 * Created authentication token.
		 * This token can be used in the HTTP Authorization header as a JWT to authenticate with the Docker Hub APIs.
		 */
		token?: string | null;
	}

	/** successful user login response */
	export interface PostUsersLoginSuccessResponseFormProperties {

		/**
		 * Created authentication token.
		 * This token can be used in the HTTP Authorization header as a JWT to authenticate with the Docker Hub APIs.
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreatePostUsersLoginSuccessResponseFormGroup() {
		return new FormGroup<PostUsersLoginSuccessResponseFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseData {
		data?: Array<ResponseDataFile>;
	}
	export interface ResponseDataFormProperties {
	}
	export function CreateResponseDataFormGroup() {
		return new FormGroup<ResponseDataFormProperties>({
		});

	}

	export interface ResponseDataFile {
		size?: number | null;
		url?: string | null;
	}
	export interface ResponseDataFileFormProperties {
		size: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateResponseDataFileFormGroup() {
		return new FormGroup<ResponseDataFileFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimespanData {
	}
	export interface TimespanDataFormProperties {
	}
	export function CreateTimespanDataFormGroup() {
		return new FormGroup<TimespanDataFormProperties>({
		});

	}

	export interface TimespanModel {
	}
	export interface TimespanModelFormProperties {
	}
	export function CreateTimespanModelFormGroup() {
		return new FormGroup<TimespanModelFormProperties>({
		});

	}


	/** Second factor user login details */
	export interface Users2FALoginRequest {

		/**
		 * The Time-based One-Time Password of the Docker Hub account to authenticate with.
		 * Required
		 */
		code: string;

		/**
		 * The intermediate 2FA token returned from `/v2/users/login` API.
		 * Required
		 */
		login_2fa_token: string;
	}

	/** Second factor user login details */
	export interface Users2FALoginRequestFormProperties {

		/**
		 * The Time-based One-Time Password of the Docker Hub account to authenticate with.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The intermediate 2FA token returned from `/v2/users/login` API.
		 * Required
		 */
		login_2fa_token: FormControl<string | null | undefined>,
	}
	export function CreateUsers2FALoginRequestFormGroup() {
		return new FormGroup<Users2FALoginRequestFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			login_2fa_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User login details */
	export interface UsersLoginRequest {

		/**
		 * The password or personal access token (PAT) of the Docker Hub account to authenticate with.
		 * Required
		 */
		password: string;

		/**
		 * The username of the Docker Hub account to authenticate with.
		 * Required
		 */
		username: string;
	}

	/** User login details */
	export interface UsersLoginRequestFormProperties {

		/**
		 * The password or personal access token (PAT) of the Docker Hub account to authenticate with.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The username of the Docker Hub account to authenticate with.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUsersLoginRequestFormGroup() {
		return new FormGroup<UsersLoginRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WeekData {
		weeks?: Array<WeekModel>;
	}
	export interface WeekDataFormProperties {
	}
	export function CreateWeekDataFormGroup() {
		return new FormGroup<WeekDataFormProperties>({
		});

	}

	export interface WeekModel {
		week?: number | null;
	}
	export interface WeekModelFormProperties {
		week: FormControl<number | null | undefined>,
	}
	export function CreateWeekModelFormGroup() {
		return new FormGroup<WeekModelFormProperties>({
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface YearData {
		years?: Array<YearModel>;
	}
	export interface YearDataFormProperties {
	}
	export function CreateYearDataFormGroup() {
		return new FormGroup<YearDataFormProperties>({
		});

	}

	export interface YearModel {
		year?: number | null;
	}
	export interface YearModelFormProperties {
		year: FormControl<number | null | undefined>,
	}
	export function CreateYearModelFormGroup() {
		return new FormGroup<YearModelFormProperties>({
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get namespaces and repos
		 * Gets a list of your namespaces and repos which have data available
		 * Get 
		 * @return {NamespaceData} Success
		 */
		GetNamespaces(): Observable<NamespaceData> {
			return this.http.get<NamespaceData>(this.baseUri + '', {});
		}

		/**
		 * Get namespace
		 * Gets metadata associated with specified namespace, including extra repos associated with the namespace
		 * Get namespaces/{namespace}
		 * @param {string} _namespace Namespace to fetch data for
		 * @return {NamespaceMetadata} Success
		 */
		GetNamespace(_namespace: string): Observable<NamespaceMetadata> {
			return this.http.get<NamespaceMetadata>(this.baseUri + 'namespaces/' + (_namespace == null ? '' : encodeURIComponent(_namespace)), {});
		}

		/**
		 * Get years with data
		 * Gets a list of years that have data for the given namespace
		 * Get namespaces/{namespace}/pulls/exports/years
		 * @param {string} _namespace Namespace to fetch data for
		 * @return {YearData} Success
		 */
		GetNamespaceYears(_namespace: string): Observable<YearData> {
			return this.http.get<YearData>(this.baseUri + 'namespaces/' + (_namespace == null ? '' : encodeURIComponent(_namespace)) + '/pulls/exports/years', {});
		}

		/**
		 * Get timespans with data
		 * Gets a list of timespans of the given type that have data for the given namespace and year
		 * Get namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}
		 * @param {string} _namespace Namespace to fetch data for
		 * @param {number} year Year to fetch data for
		 * @param {TimespanType} timespantype Type of timespan to fetch data for
		 * @return {TimespanData} Success
		 */
		GetNamespaceTimespans(_namespace: string, year: number, timespantype: TimespanType): Observable<TimespanData> {
			return this.http.get<TimespanData>(this.baseUri + 'namespaces/' + (_namespace == null ? '' : encodeURIComponent(_namespace)) + '/pulls/exports/years/' + year + '/' + timespantype, {});
		}

		/**
		 * Get namespace metadata for timespan
		 * Gets info about data for the given namespace and timespan
		 * Get namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}/{timespan}
		 * @param {string} _namespace Namespace to fetch data for
		 * @param {number} year Year to fetch data for
		 * @param {TimespanType} timespantype Type of timespan to fetch data for
		 * @param {number} timespan Timespan to fetch data for
		 * @return {TimespanModel} Success
		 */
		GetNamespaceTimespanMetadata(_namespace: string, year: number, timespantype: TimespanType, timespan: number): Observable<TimespanModel> {
			return this.http.get<TimespanModel>(this.baseUri + 'namespaces/' + (_namespace == null ? '' : encodeURIComponent(_namespace)) + '/pulls/exports/years/' + year + '/' + timespantype + '/' + timespan, {});
		}

		/**
		 * Get namespace data for timespan
		 * Gets a list of URLs that can be used to download the pull data for the given namespace and timespan
		 * Get namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}/{timespan}/{dataview}
		 * @param {string} _namespace Namespace to fetch data for
		 * @param {number} year Year to fetch data for
		 * @param {TimespanType} timespantype Type of timespan to fetch data for
		 * @param {number} timespan Timespan to fetch data for
		 * @param {DataviewType} dataview Type of data to fetch
		 * @return {ResponseData} Success
		 */
		GetNamespaceDataByTimespan(_namespace: string, year: number, timespantype: TimespanType, timespan: number, dataview: DataviewType): Observable<ResponseData> {
			return this.http.get<ResponseData>(this.baseUri + 'namespaces/' + (_namespace == null ? '' : encodeURIComponent(_namespace)) + '/pulls/exports/years/' + year + '/' + timespantype + '/' + timespan + '/' + dataview, {});
		}

		/**
		 * Second factor authentication.
		 * When a user has 2FA enabled, this is the second call to perform after
		 * `/v2/users/login` call.
		 * Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.
		 * The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.
		 * Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.
		 * Post v2/users/2fa-login
		 * @param {Users2FALoginRequest} requestBody Login details.
		 * @return {PostUsersLoginSuccessResponse} Authentication successful
		 */
		PostUsers2FALogin(requestBody: Users2FALoginRequest): Observable<PostUsersLoginSuccessResponse> {
			return this.http.post<PostUsersLoginSuccessResponse>(this.baseUri + 'v2/users/2fa-login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an authentication token
		 * Creates and returns a bearer token in JWT format that you can use to
		 * authenticate with Docker Hub APIs.
		 * The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.
		 * Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.
		 * Post v2/users/login
		 * @param {UsersLoginRequest} requestBody Login details.
		 * @return {PostUsersLoginSuccessResponse} Authentication successful
		 */
		PostUsersLogin(requestBody: UsersLoginRequest): Observable<PostUsersLoginSuccessResponse> {
			return this.http.post<PostUsersLoginSuccessResponse>(this.baseUri + 'v2/users/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

