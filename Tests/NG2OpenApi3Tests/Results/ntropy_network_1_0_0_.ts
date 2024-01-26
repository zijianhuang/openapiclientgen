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
		 * Get a batch of business transaction classification results.
		 * Get a batch of business transaction classification results.
		 * Get classifier/business/batch/{id}
		 * @return {GetABatchOfBusinessTransactionClassificationResultsReturn} Returned a batch of business transaction classification results.
		 */
		GetABatchOfBusinessTransactionClassificationResults(): Observable<GetABatchOfBusinessTransactionClassificationResultsReturn> {
			return this.http.get<GetABatchOfBusinessTransactionClassificationResultsReturn>(this.baseUri + 'classifier/business/batch/{id}', {});
		}

		/**
		 * Get a batch of consumer transaction classification results.
		 * Get a batch of consumer transaction classification results.
		 * Get classifier/consumer/batch/{id}
		 * @return {GetABatchOfConsumerTransactionClassificationResultsReturn} Returned a batch of consumer transaction classification results.
		 */
		GetABatchOfConsumerTransactionClassificationResults(): Observable<GetABatchOfConsumerTransactionClassificationResultsReturn> {
			return this.http.get<GetABatchOfConsumerTransactionClassificationResultsReturn>(this.baseUri + 'classifier/consumer/batch/{id}', {});
		}
	}

	export interface GetABatchOfBusinessTransactionClassificationResultsReturn {
		id?: string | null;
		progress?: number | null;
		GetABatchOfBusinessTransactionClassificationResultsReturnResults?: Array<GetABatchOfBusinessTransactionClassificationResultsReturnResults>;
		status?: string | null;
		updated_at?: string | null;
	}
	export interface GetABatchOfBusinessTransactionClassificationResultsReturnFormProperties {
		id: FormControl<string | null | undefined>,
		progress: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetABatchOfBusinessTransactionClassificationResultsReturnFormGroup() {
		return new FormGroup<GetABatchOfBusinessTransactionClassificationResultsReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetABatchOfBusinessTransactionClassificationResultsReturnResults {
		labels?: Array<string>;
		logo?: string | null;
		merchant?: string | null;
		transaction_id?: string | null;
		website?: string | null;
	}
	export interface GetABatchOfBusinessTransactionClassificationResultsReturnResultsFormProperties {
		logo: FormControl<string | null | undefined>,
		merchant: FormControl<string | null | undefined>,
		transaction_id: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateGetABatchOfBusinessTransactionClassificationResultsReturnResultsFormGroup() {
		return new FormGroup<GetABatchOfBusinessTransactionClassificationResultsReturnResultsFormProperties>({
			logo: new FormControl<string | null | undefined>(undefined),
			merchant: new FormControl<string | null | undefined>(undefined),
			transaction_id: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetABatchOfConsumerTransactionClassificationResultsReturn {
		id?: string | null;
		progress?: number | null;
		GetABatchOfConsumerTransactionClassificationResultsReturnResults?: Array<GetABatchOfConsumerTransactionClassificationResultsReturnResults>;
		status?: string | null;
		updated_at?: string | null;
	}
	export interface GetABatchOfConsumerTransactionClassificationResultsReturnFormProperties {
		id: FormControl<string | null | undefined>,
		progress: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateGetABatchOfConsumerTransactionClassificationResultsReturnFormGroup() {
		return new FormGroup<GetABatchOfConsumerTransactionClassificationResultsReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResults {
		contact?: GetABatchOfConsumerTransactionClassificationResultsReturnResultsContact;
		labels?: Array<string>;
		location?: GetABatchOfConsumerTransactionClassificationResultsReturnResultsLocation;
		logo?: string | null;
		merchant?: string | null;
		person?: string | null;
		rating?: GetABatchOfConsumerTransactionClassificationResultsReturnResultsRating;
		transaction_id?: string | null;
		website?: string | null;
	}
	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResultsFormProperties {
		logo: FormControl<string | null | undefined>,
		merchant: FormControl<string | null | undefined>,
		person: FormControl<string | null | undefined>,
		transaction_id: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateGetABatchOfConsumerTransactionClassificationResultsReturnResultsFormGroup() {
		return new FormGroup<GetABatchOfConsumerTransactionClassificationResultsReturnResultsFormProperties>({
			logo: new FormControl<string | null | undefined>(undefined),
			merchant: new FormControl<string | null | undefined>(undefined),
			person: new FormControl<string | null | undefined>(undefined),
			transaction_id: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResultsContact {
		email?: string | null;
		phone?: string | null;
	}
	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResultsContactFormProperties {
		email: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
	}
	export function CreateGetABatchOfConsumerTransactionClassificationResultsReturnResultsContactFormGroup() {
		return new FormGroup<GetABatchOfConsumerTransactionClassificationResultsReturnResultsContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResultsLocation {
		address?: string | null;
		city?: string | null;
		country?: string | null;
		lat?: number | null;
		lon?: number | null;
		postal_code?: string | null;
	}
	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResultsLocationFormProperties {
		address: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		lat: FormControl<number | null | undefined>,
		lon: FormControl<number | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
	}
	export function CreateGetABatchOfConsumerTransactionClassificationResultsReturnResultsLocationFormGroup() {
		return new FormGroup<GetABatchOfConsumerTransactionClassificationResultsReturnResultsLocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResultsRating {
		reviews?: number | null;
		value?: number | null;
	}
	export interface GetABatchOfConsumerTransactionClassificationResultsReturnResultsRatingFormProperties {
		reviews: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetABatchOfConsumerTransactionClassificationResultsReturnResultsRatingFormGroup() {
		return new FormGroup<GetABatchOfConsumerTransactionClassificationResultsReturnResultsRatingFormProperties>({
			reviews: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

}

