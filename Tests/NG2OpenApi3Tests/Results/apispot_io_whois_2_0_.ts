import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArrayOfBatch {
		batches?: Array<Batch>;
	}
	export interface ArrayOfBatchFormProperties {
	}
	export function CreateArrayOfBatchFormGroup() {
		return new FormGroup<ArrayOfBatchFormProperties>({
		});

	}

	export interface Batch {
		completed?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		created_at?: string | null;
		id?: string | null;
		operation?: string | null;
		results?: Array<string>;
		status?: string | null;
	}
	export interface BatchFormProperties {
		completed: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateBatchFormGroup() {
		return new FormGroup<BatchFormProperties>({
			completed: new FormControl<boolean | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get your batches
		 * Get batch
		 * @return {ArrayOfBatch} OK
		 */
		GetBatches(): Observable<ArrayOfBatch> {
			return this.http.get<ArrayOfBatch>(this.baseUri + 'batch', {});
		}

		/**
		 * Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
		 * Post batch
		 * @return {Batch} OK
		 */
		CreateBatch(requestBody: CreateBatchPostBody): Observable<Batch> {
			return this.http.post<Batch>(this.baseUri + 'batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete batch
		 * Delete batch/{id}
		 * @param {string} id Batch ID
		 * @return {void} OK
		 */
		DeleteBatch(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'batch/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get batch
		 * Get batch/{id}
		 * @param {string} id Batch ID
		 * @return {Batch} OK
		 */
		GetBatch(id: string): Observable<Batch> {
			return this.http.get<Batch>(this.baseUri + 'batch/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Query domain database
		 * Get db
		 * @param {string} query Query (contact name, dns, domain etc)
		 * @return {string} OK
		 */
		QueryDb(query: string): Observable<string> {
			return this.http.get(this.baseUri + 'db?query=' + (query == null ? '' : encodeURIComponent(query)), { responseType: 'text' });
		}

		/**
		 * Check domain availability
		 * Get domains/{domain}/check
		 * @param {string} domain Domain
		 * @return {CheckDomainReturn} OK
		 */
		CheckDomain(domain: string): Observable<CheckDomainReturn> {
			return this.http.get<CheckDomainReturn>(this.baseUri + 'domains/' + (domain == null ? '' : encodeURIComponent(domain)) + '/check', {});
		}

		/**
		 * Check domain rank (authority).
		 * Get domains/{domain}/rank
		 * @param {string} domain Domain
		 * @return {DomainRankReturn} OK
		 */
		DomainRank(domain: string): Observable<DomainRankReturn> {
			return this.http.get<DomainRankReturn>(this.baseUri + 'domains/' + (domain == null ? '' : encodeURIComponent(domain)) + '/rank', {});
		}

		/**
		 * WHOIS query for a domain
		 * Get domains/{domain}/whois
		 * @param {string} domain Domain
		 * @return {void} OK
		 */
		Whois(domain: string, format: CreateBatchPostBodyOptionsFormat | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'domains/' + (domain == null ? '' : encodeURIComponent(domain)) + '/whois&format=' + format, { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateBatchPostBody {

		/** Required */
		domains: Array<string>;

		/** Required */
		operation: CreateBatchPostBodyOperation;
		options?: CreateBatchPostBodyOptions;
	}
	export interface CreateBatchPostBodyFormProperties {

		/** Required */
		operation: FormControl<CreateBatchPostBodyOperation | null | undefined>,
	}
	export function CreateCreateBatchPostBodyFormGroup() {
		return new FormGroup<CreateBatchPostBodyFormProperties>({
			operation: new FormControl<CreateBatchPostBodyOperation | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateBatchPostBodyOperation { whois = 'whois', check = 'check' }

	export interface CreateBatchPostBodyOptions {
		format?: CreateBatchPostBodyOptionsFormat | null;
	}
	export interface CreateBatchPostBodyOptionsFormProperties {
		format: FormControl<CreateBatchPostBodyOptionsFormat | null | undefined>,
	}
	export function CreateCreateBatchPostBodyOptionsFormGroup() {
		return new FormGroup<CreateBatchPostBodyOptionsFormProperties>({
			format: new FormControl<CreateBatchPostBodyOptionsFormat | null | undefined>(undefined),
		});

	}

	export enum CreateBatchPostBodyOptionsFormat { raw = 'raw', formatted = 'formatted', json = 'json' }

	export interface CheckDomainReturn {
		isAvailable?: boolean | null;
	}
	export interface CheckDomainReturnFormProperties {
		isAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckDomainReturnFormGroup() {
		return new FormGroup<CheckDomainReturnFormProperties>({
			isAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DomainRankReturn {

		/** Type: double */
		rank?: number | null;
	}
	export interface DomainRankReturnFormProperties {

		/** Type: double */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateDomainRankReturnFormGroup() {
		return new FormGroup<DomainRankReturnFormProperties>({
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}

}

