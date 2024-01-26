import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AliasModel {
		createdAt?: number | null;
		destinations?: Array<DestinationModel>;
		domainName?: string | null;
		metatags?: Array<MetaTagModel>;

		/** Required */
		name: string;
		snippets?: Array<SnippetModel>;
		updatedAt?: number | null;
	}
	export interface AliasModelFormProperties {
		createdAt: FormControl<number | null | undefined>,
		domainName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<number | null | undefined>,
	}
	export function CreateAliasModelFormGroup() {
		return new FormGroup<AliasModelFormProperties>({
			createdAt: new FormControl<number | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DestinationModel {

		/** ISO alpha-2 [country code](//en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) */
		country?: string | null;

		/** Please check the [supported OS list](#tag/OperatingSystems) */
		os?: string | null;

		/** Required */
		url: string;
	}
	export interface DestinationModelFormProperties {

		/** ISO alpha-2 [country code](//en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) */
		country: FormControl<string | null | undefined>,

		/** Please check the [supported OS list](#tag/OperatingSystems) */
		os: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDestinationModelFormGroup() {
		return new FormGroup<DestinationModelFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MetaTagModel {

		/** Required */
		content: string;

		/** Required */
		name: string;
	}
	export interface MetaTagModelFormProperties {

		/** Required */
		content: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMetaTagModelFormGroup() {
		return new FormGroup<MetaTagModelFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SnippetModel {

		/**
		 * Please check the [supported snippets list](#tag/Snippets)
		 * Required
		 */
		id: string;
		parameters?: {[id: string]: string };
	}
	export interface SnippetModelFormProperties {

		/**
		 * Please check the [supported snippets list](#tag/Snippets)
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSnippetModelFormGroup() {
		return new FormGroup<SnippetModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ClickModel {
		alias?: string | null;
		aliasId?: string | null;
		browser?: string | null;
		country?: string | null;
		createdAt?: number | null;
		destination?: string | null;
		domain?: string | null;
		os?: string | null;
		referrer?: string | null;
		userAgent?: string | null;
	}
	export interface ClickModelFormProperties {
		alias: FormControl<string | null | undefined>,
		aliasId: FormControl<string | null | undefined>,
		browser: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		createdAt: FormControl<number | null | undefined>,
		destination: FormControl<string | null | undefined>,
		domain: FormControl<string | null | undefined>,
		os: FormControl<string | null | undefined>,
		referrer: FormControl<string | null | undefined>,
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateClickModelFormGroup() {
		return new FormGroup<ClickModelFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			aliasId: new FormControl<string | null | undefined>(undefined),
			browser: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			referrer: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClickModelPg {
		accountId?: string | null;
		alias?: string | null;
		aliasId?: string | null;
		browser?: string | null;
		country?: string | null;
		createdAt?: number | null;
		destination?: string | null;
		domain?: string | null;
		id?: number | null;
		os?: string | null;
		referrer?: string | null;
		userAgent?: string | null;
	}
	export interface ClickModelPgFormProperties {
		accountId: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,
		aliasId: FormControl<string | null | undefined>,
		browser: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		createdAt: FormControl<number | null | undefined>,
		destination: FormControl<string | null | undefined>,
		domain: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		os: FormControl<string | null | undefined>,
		referrer: FormControl<string | null | undefined>,
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateClickModelPgFormGroup() {
		return new FormGroup<ClickModelPgFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			aliasId: new FormControl<string | null | undefined>(undefined),
			browser: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			referrer: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClicksFilterModel {

		/** Alias Id */
		aliasId?: string | null;

		/** date From */
		dateFrom?: string | null;

		/** date To */
		dateTo?: string | null;

		/** Domain name */
		domain?: string | null;

		/** last Id */
		lastId?: number | null;
	}
	export interface ClicksFilterModelFormProperties {

		/** Alias Id */
		aliasId: FormControl<string | null | undefined>,

		/** date From */
		dateFrom: FormControl<string | null | undefined>,

		/** date To */
		dateTo: FormControl<string | null | undefined>,

		/** Domain name */
		domain: FormControl<string | null | undefined>,

		/** last Id */
		lastId: FormControl<number | null | undefined>,
	}
	export function CreateClicksFilterModelFormGroup() {
		return new FormGroup<ClicksFilterModelFormProperties>({
			aliasId: new FormControl<string | null | undefined>(undefined),
			dateFrom: new FormControl<string | null | undefined>(undefined),
			dateTo: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			lastId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateAliasModel {
		destinations?: Array<DestinationModel>;
		metatags?: Array<MetaTagModel>;
		snippets?: Array<SnippetModel>;
	}
	export interface CreateAliasModelFormProperties {
	}
	export function CreateCreateAliasModelFormGroup() {
		return new FormGroup<CreateAliasModelFormProperties>({
		});

	}

	export interface CreateAliasResponseModel {
		aliasName?: string | null;
		domainName?: string | null;
		shortUrl?: string | null;
	}
	export interface CreateAliasResponseModelFormProperties {
		aliasName: FormControl<string | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		shortUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasResponseModelFormGroup() {
		return new FormGroup<CreateAliasResponseModelFormProperties>({
			aliasName: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			shortUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAliasModel {
		createdAt?: number | null;
		domainName?: string | null;
		name?: string | null;
		updatedAt?: number | null;
	}
	export interface GetAliasModelFormProperties {
		createdAt: FormControl<number | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<number | null | undefined>,
	}
	export function CreateGetAliasModelFormGroup() {
		return new FormGroup<GetAliasModelFormProperties>({
			createdAt: new FormControl<number | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAliasesModel {
		aliases?: Array<string>;
		lastId?: string | null;
	}
	export interface GetAliasesModelFormProperties {
		lastId: FormControl<string | null | undefined>,
	}
	export function CreateGetAliasesModelFormGroup() {
		return new FormGroup<GetAliasesModelFormProperties>({
			lastId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetClicksModel {
		clicks?: Array<ClickModel>;
		lastId?: string | null;
	}
	export interface GetClicksModelFormProperties {
		lastId: FormControl<string | null | undefined>,
	}
	export function CreateGetClicksModelFormGroup() {
		return new FormGroup<GetClicksModelFormProperties>({
			lastId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete alias
		 * Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain
		 * Delete aliases
		 * @param {string} domainName domain which alias belongs to (string without `http/https` or `/`)
		 * @param {string} aliasName alias (without `/` at the beginning)
		 * @return {void} Empty response
		 */
		DeleteAlias(domainName: string | null | undefined, aliasName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'aliases?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&aliasName=' + (aliasName == null ? '' : encodeURIComponent(aliasName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get alias
		 * Get detailed information for a single alias by providing its alias and domain name
		 * Get aliases
		 * @param {string} domainName domain which alias belongs to (string without `http/https` or `/`)
		 * @param {string} aliasName alias value (without `/` at the beginning)
		 * @return {AliasModel} Alias model or **null**
		 */
		GetAlias(domainName: string | null | undefined, aliasName: string): Observable<AliasModel> {
			return this.http.get<AliasModel>(this.baseUri + 'aliases?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&aliasName=' + (aliasName == null ? '' : encodeURIComponent(aliasName)), {});
		}

		/**
		 * Create alias
		 * This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi
		 * **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.
		 * Post aliases
		 * @param {string} domainName domain which alias will belong to (string without `http/https` or `/`)
		 * @param {string} aliasName alias (without `/` at the beginning)
		 * @param {CreateAliasModel} requestBody alias properties
		 * @return {CreateAliasResponseModel} Response contains aliasName, domainName and full generated short link
		 */
		CreateAlias(domainName: string | null | undefined, aliasName: string | null | undefined, requestBody: CreateAliasModel): Observable<CreateAliasResponseModel> {
			return this.http.post<CreateAliasResponseModel>(this.baseUri + 'aliases?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&aliasName=' + (aliasName == null ? '' : encodeURIComponent(aliasName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update alias
		 * Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)
		 * ### NOTE:
		 * ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain
		 * ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them
		 * ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.
		 * Put aliases
		 * @param {string} domainName domain which alias belongs to (string without `http/https` or `/`)
		 * @param {string} aliasName alias (without `/` at the beginning)
		 * @param {CreateAliasModel} requestBody alias properties you wish to be updated
		 * @return {void} Empty response
		 */
		UpdateAlias(domainName: string | null | undefined, aliasName: string, requestBody: CreateAliasModel): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'aliases?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&aliasName=' + (aliasName == null ? '' : encodeURIComponent(aliasName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get aliases by domain
		 * Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date.
		 * If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain.
		 * If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.
		 * Get aliases/all
		 * @param {string} domainName The domain name to get the aliases for (string without `http/https` or `/`)
		 * @param {string} continueFrom An ID returned by a previous query to continue aliases retrieval (see lastId in response)
		 * @param {number} limit Number of results to return per request
		 * @return {GetAliasesModel} returns Array of aliases with lastId
		 */
		GetAliases(domainName: string | null | undefined, continueFrom: string | null | undefined, limit: number | null | undefined): Observable<GetAliasesModel> {
			return this.http.get<GetAliasesModel>(this.baseUri + 'aliases/all?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&continueFrom=' + (continueFrom == null ? '' : encodeURIComponent(continueFrom)) + '&limit=' + limit, {});
		}

		/**
		 * Get clicks
		 * Retrieve the raw click data for your account. Clicks are retrieved by creation date in descending order.
		 * If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.
		 * Get clicks
		 * @param {string} continueFrom An ID returned by a previous query to continue clicks retrieval (see lastId in response)
		 * @param {number} limit Number of results to return per request
		 * @return {GetClicksModel} returns Array of Click models, also returns lastId
		 */
		GetClicks(continueFrom: string | null | undefined, limit: number | null | undefined): Observable<GetClicksModel> {
			return this.http.get<GetClicksModel>(this.baseUri + 'clicks?continueFrom=' + (continueFrom == null ? '' : encodeURIComponent(continueFrom)) + '&limit=' + limit, {});
		}

		/**
		 * Get clicks statistics
		 * Retrieve the raw click statistics for your account. Clicks are retrieved by creation date in descending order.
		 * Post clicks/pg
		 * @param {ClicksFilterModel} requestBody Filter
		 * @return {ClickModelPg} returns Array of Click models, also returns lastId
		 */
		GetStatistics(requestBody: ClicksFilterModel): Observable<ClickModelPg> {
			return this.http.post<ClickModelPg>(this.baseUri + 'clicks/pg', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

