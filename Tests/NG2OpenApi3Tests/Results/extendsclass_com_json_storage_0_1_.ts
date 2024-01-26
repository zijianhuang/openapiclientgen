import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateStatus {
		id?: string | null;
		status?: number | null;
		uri?: string | null;
	}
	export interface CreateStatusFormProperties {
		id: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateStatusFormGroup() {
		return new FormGroup<CreateStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteStatus {
		status?: number | null;
	}
	export interface DeleteStatusFormProperties {
		status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteStatusFormGroup() {
		return new FormGroup<DeleteStatusFormProperties>({
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Error {
		message?: string | null;
		status?: number | null;
	}
	export interface ErrorFormProperties {
		message: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateStatus {
		data?: string | null;
		status?: number | null;
	}
	export interface UpdateStatusFormProperties {
		data: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStatusFormGroup() {
		return new FormGroup<UpdateStatusFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a json bin
		 * Post bin
		 * @return {CreateStatus} Bin information (id and URL)
		 */
		BinPost(headersHandler?: () => HttpHeaders): Observable<CreateStatus> {
			return this.http.post<CreateStatus>(this.baseUri + 'bin', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a json bin
		 * Delete bin/{id}
		 * @return {DeleteStatus} Status of the deletion
		 */
		Bin_idDelete(headersHandler?: () => HttpHeaders): Observable<DeleteStatus> {
			return this.http.delete<DeleteStatus>(this.baseUri + 'bin/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a json bin
		 * Get bin/{id}
		 * @return {string} Bin data
		 */
		Bin_idGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'bin/{id}', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Partially update a json bin with JSON Merge Patch
		 * Patch bin/{id}
		 * @return {UpdateStatus} Bin data updated
		 */
		Bin_idPatch(headersHandler?: () => HttpHeaders): Observable<UpdateStatus> {
			return this.http.patch<UpdateStatus>(this.baseUri + 'bin/{id}', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a json bin
		 * Put bin/{id}
		 * @return {UpdateStatus} Bin data updated
		 */
		Bin_idPut(headersHandler?: () => HttpHeaders): Observable<UpdateStatus> {
			return this.http.put<UpdateStatus>(this.baseUri + 'bin/{id}', null, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

