import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CheckZappitiServiceRequest {

		/** Client API Key */
		ApiKey?: string | null;
	}
	export interface CheckZappitiServiceRequestFormProperties {

		/** Client API Key */
		ApiKey: FormControl<string | null | undefined>,
	}
	export function CreateCheckZappitiServiceRequestFormGroup() {
		return new FormGroup<CheckZappitiServiceRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckZappitiServiceResult {
		ErrorCode?: CheckZappitiServiceResultErrorCode | null;
	}
	export interface CheckZappitiServiceResultFormProperties {
		ErrorCode: FormControl<CheckZappitiServiceResultErrorCode | null | undefined>,
	}
	export function CreateCheckZappitiServiceResultFormGroup() {
		return new FormGroup<CheckZappitiServiceResultFormProperties>({
			ErrorCode: new FormControl<CheckZappitiServiceResultErrorCode | null | undefined>(undefined),
		});

	}

	export enum CheckZappitiServiceResultErrorCode { None = 0, Failed = 1, Exist = 2, NotInstalled = 3, NotRunning = 4, Running = 5, FailToStart = 6, BadApiKey = 7 }

	export interface ConnectionDetailsRequest {

		/** Client API Key */
		ApiKey?: string | null;
	}
	export interface ConnectionDetailsRequestFormProperties {

		/** Client API Key */
		ApiKey: FormControl<string | null | undefined>,
	}
	export function CreateConnectionDetailsRequestFormGroup() {
		return new FormGroup<ConnectionDetailsRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionDetailsResult {

		/** User's Authentification key */
		AuthKey?: string | null;

		/** User's collection id */
		Collection?: string | null;

		/** User's email used for the collection */
		Email?: string | null;
		ErrorCode?: CheckZappitiServiceResultErrorCode | null;

		/** Server's IP */
		ServerIp?: string | null;

		/**
		 * Port used by the server
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ServerPort?: number | null;
	}
	export interface ConnectionDetailsResultFormProperties {

		/** User's Authentification key */
		AuthKey: FormControl<string | null | undefined>,

		/** User's collection id */
		Collection: FormControl<string | null | undefined>,

		/** User's email used for the collection */
		Email: FormControl<string | null | undefined>,
		ErrorCode: FormControl<CheckZappitiServiceResultErrorCode | null | undefined>,

		/** Server's IP */
		ServerIp: FormControl<string | null | undefined>,

		/**
		 * Port used by the server
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ServerPort: FormControl<number | null | undefined>,
	}
	export function CreateConnectionDetailsResultFormGroup() {
		return new FormGroup<ConnectionDetailsResultFormProperties>({
			AuthKey: new FormControl<string | null | undefined>(undefined),
			Collection: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<CheckZappitiServiceResultErrorCode | null | undefined>(undefined),
			ServerIp: new FormControl<string | null | undefined>(undefined),
			ServerPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { None = 0, Failed = 1, Exist = 2, NotInstalled = 3, NotRunning = 4, Running = 5, FailToStart = 6, BadApiKey = 7 }

	export interface InstallZappitiServiceRequest {

		/** Client API Key */
		ApiKey?: string | null;
	}
	export interface InstallZappitiServiceRequestFormProperties {

		/** Client API Key */
		ApiKey: FormControl<string | null | undefined>,
	}
	export function CreateInstallZappitiServiceRequestFormGroup() {
		return new FormGroup<InstallZappitiServiceRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstallZappitiServiceResult {
		ErrorCode?: CheckZappitiServiceResultErrorCode | null;
	}
	export interface InstallZappitiServiceResultFormProperties {
		ErrorCode: FormControl<CheckZappitiServiceResultErrorCode | null | undefined>,
	}
	export function CreateInstallZappitiServiceResultFormGroup() {
		return new FormGroup<InstallZappitiServiceResultFormProperties>({
			ErrorCode: new FormControl<CheckZappitiServiceResultErrorCode | null | undefined>(undefined),
		});

	}

	export interface IsAliveRequest {

		/** Client API Key */
		ApiKey?: string | null;
	}
	export interface IsAliveRequestFormProperties {

		/** Client API Key */
		ApiKey: FormControl<string | null | undefined>,
	}
	export function CreateIsAliveRequestFormGroup() {
		return new FormGroup<IsAliveRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IsAliveResult {
		ErrorCode?: CheckZappitiServiceResultErrorCode | null;
	}
	export interface IsAliveResultFormProperties {
		ErrorCode: FormControl<CheckZappitiServiceResultErrorCode | null | undefined>,
	}
	export function CreateIsAliveResultFormGroup() {
		return new FormGroup<IsAliveResultFormProperties>({
			ErrorCode: new FormControl<CheckZappitiServiceResultErrorCode | null | undefined>(undefined),
		});

	}

	export interface LastMediaRequest {

		/** Client API Key */
		ApiKey?: string | null;
	}
	export interface LastMediaRequestFormProperties {

		/** Client API Key */
		ApiKey: FormControl<string | null | undefined>,
	}
	export function CreateLastMediaRequestFormGroup() {
		return new FormGroup<LastMediaRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LastMediaResult {
		Actors?: Array<string>;
		BackgroundUrl?: string | null;
		Directors?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Episode?: number | null;
		ErrorCode?: CheckZappitiServiceResultErrorCode | null;
		PosterUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runtime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;
		Synopsis?: string | null;
		Title?: string | null;
		TvShowName?: string | null;
	}
	export interface LastMediaResultFormProperties {
		BackgroundUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Episode: FormControl<number | null | undefined>,
		ErrorCode: FormControl<CheckZappitiServiceResultErrorCode | null | undefined>,
		PosterUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runtime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,
		Synopsis: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		TvShowName: FormControl<string | null | undefined>,
	}
	export function CreateLastMediaResultFormGroup() {
		return new FormGroup<LastMediaResultFormProperties>({
			BackgroundUrl: new FormControl<string | null | undefined>(undefined),
			Episode: new FormControl<number | null | undefined>(undefined),
			ErrorCode: new FormControl<CheckZappitiServiceResultErrorCode | null | undefined>(undefined),
			PosterUrl: new FormControl<string | null | undefined>(undefined),
			Runtime: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			Synopsis: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			TvShowName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartVideoRequest {

		/** Client API Key */
		ApiKey?: string | null;

		/** User auth key */
		AuthKey?: string | null;

		/** Collection id */
		Collection?: string | null;

		/** Server Ip */
		Ip?: string | null;

		/** Id of the video to start */
		MediaId?: string | null;

		/**
		 * Server Port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port?: number | null;
	}
	export interface StartVideoRequestFormProperties {

		/** Client API Key */
		ApiKey: FormControl<string | null | undefined>,

		/** User auth key */
		AuthKey: FormControl<string | null | undefined>,

		/** Collection id */
		Collection: FormControl<string | null | undefined>,

		/** Server Ip */
		Ip: FormControl<string | null | undefined>,

		/** Id of the video to start */
		MediaId: FormControl<string | null | undefined>,

		/**
		 * Server Port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port: FormControl<number | null | undefined>,
	}
	export function CreateStartVideoRequestFormGroup() {
		return new FormGroup<StartVideoRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
			AuthKey: new FormControl<string | null | undefined>(undefined),
			Collection: new FormControl<string | null | undefined>(undefined),
			Ip: new FormControl<string | null | undefined>(undefined),
			MediaId: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartVideoResult {
		ErrorCode?: CheckZappitiServiceResultErrorCode | null;
	}
	export interface StartVideoResultFormProperties {
		ErrorCode: FormControl<CheckZappitiServiceResultErrorCode | null | undefined>,
	}
	export function CreateStartVideoResultFormGroup() {
		return new FormGroup<StartVideoResultFormProperties>({
			ErrorCode: new FormControl<CheckZappitiServiceResultErrorCode | null | undefined>(undefined),
		});

	}

	export interface StartZappitiServiceRequest {

		/** Client API Key */
		ApiKey?: string | null;
	}
	export interface StartZappitiServiceRequestFormProperties {

		/** Client API Key */
		ApiKey: FormControl<string | null | undefined>,
	}
	export function CreateStartZappitiServiceRequestFormGroup() {
		return new FormGroup<StartZappitiServiceRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartZappitiServiceResult {
		ErrorCode?: CheckZappitiServiceResultErrorCode | null;
	}
	export interface StartZappitiServiceResultFormProperties {
		ErrorCode: FormControl<CheckZappitiServiceResultErrorCode | null | undefined>,
	}
	export function CreateStartZappitiServiceResultFormGroup() {
		return new FormGroup<StartZappitiServiceResultFormProperties>({
			ErrorCode: new FormControl<CheckZappitiServiceResultErrorCode | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Check if Zappiti Service app status on the player
		 * ErrorCode.NotInstalled
		 * ErrorCode.NotRunning
		 * ErrorCode.Running
		 * Post CheckZappitiService
		 * @return {CheckZappitiServiceResult} CheckZappitiServiceResult
		 */
		CheckZappitiServicePost(requestBody: CheckZappitiServiceRequest, headersHandler?: () => HttpHeaders): Observable<CheckZappitiServiceResult> {
			return this.http.post<CheckZappitiServiceResult>(this.baseUri + 'CheckZappitiService', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get user's login details
		 * Post ConnectionDetails
		 * @return {ConnectionDetailsResult} ConnectionDetailsResult
		 */
		ConnectionDetailsPost(requestBody: ConnectionDetailsRequest, headersHandler?: () => HttpHeaders): Observable<ConnectionDetailsResult> {
			return this.http.post<ConnectionDetailsResult>(this.baseUri + 'ConnectionDetails', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Open a popup that allow the user to install Zappiti Service, if not already installed
		 * Post InstallZappitiService
		 * @return {InstallZappitiServiceResult} InstallZappitiServiceResult
		 */
		InstallZappitiServicePost(requestBody: InstallZappitiServiceRequest, headersHandler?: () => HttpHeaders): Observable<InstallZappitiServiceResult> {
			return this.http.post<InstallZappitiServiceResult>(this.baseUri + 'InstallZappitiService', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get server status
		 * Post IsAlive
		 * @return {IsAliveResult} IsAliveResult
		 */
		IsAlivePost(requestBody: IsAliveRequest, headersHandler?: () => HttpHeaders): Observable<IsAliveResult> {
			return this.http.post<IsAliveResult>(this.baseUri + 'IsAlive', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get informations about last media playback
		 * Post LastMedia
		 * @return {LastMediaResult} LastMediaResult
		 */
		LastMediaPost(requestBody: LastMediaRequest, headersHandler?: () => HttpHeaders): Observable<LastMediaResult> {
			return this.http.post<LastMediaResult>(this.baseUri + 'LastMedia', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Start the playback
		 * Start the playback of the speficied video.
		 * Post StartVideo
		 * @return {StartVideoResult} StartVideoResult
		 */
		StartVideoPost(requestBody: StartVideoRequest, headersHandler?: () => HttpHeaders): Observable<StartVideoResult> {
			return this.http.post<StartVideoResult>(this.baseUri + 'StartVideo', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Start Zappiti Service if not started yet
		 * Post StartZappitiService
		 * @return {StartZappitiServiceResult} StartZappitiServiceResult
		 */
		StartZappitiServicePost(requestBody: StartZappitiServiceRequest, headersHandler?: () => HttpHeaders): Observable<StartZappitiServiceResult> {
			return this.http.post<StartZappitiServiceResult>(this.baseUri + 'StartZappitiService', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

