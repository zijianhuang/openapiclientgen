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
		 * Returns an array of all the available federations.
		 * Get api/v2/list-federations
		 * @return {ApiV2List_federationsGetReturn} Static response, shows available federations.
		 */
		ApiV2List_federationsGet(headersHandler?: () => HttpHeaders): Observable<ApiV2List_federationsGetReturn> {
			return this.http.get<ApiV2List_federationsGetReturn>(this.baseUri + 'api/v2/list-federations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of all the supported prediction markets
		 * Get api/v2/list-markets
		 * @return {ApiV2List_marketsGetReturn} Static response, shows available markets for the current subscription and all available markets in general.
		 */
		ApiV2List_marketsGet(headersHandler?: () => HttpHeaders): Observable<ApiV2List_marketsGetReturn> {
			return this.http.get<ApiV2List_marketsGetReturn>(this.baseUri + 'api/v2/list-markets', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns predictions accuracy in the last 1, 7, 14, 30 days.
		 * Get api/v2/performance-stats
		 * @return {ApiV2Performance_statsGetReturn} Good request, returns object that contains accuracy and other datails about predictions.
		 */
		ApiV2Performance_statsGet(headersHandler?: () => HttpHeaders): Observable<ApiV2Performance_statsGetReturn> {
			return this.http.get<ApiV2Performance_statsGetReturn>(this.baseUri + 'api/v2/performance-stats', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
		 * Get api/v2/predictions
		 * @return {void} Good request, returns object that contains data array with all predictions.
		 */
		ApiV2PredictionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/predictions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all predictions available for a match id.
		 * Get api/v2/predictions/{id}
		 * @param {number} id ID of match
		 * @return {ApiV2Predictions_idGetReturn} Good request, returns object that contains all the predictions for a certain event.
		 */
		ApiV2Predictions_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<ApiV2Predictions_idGetReturn> {
			return this.http.get<ApiV2Predictions_idGetReturn>(this.baseUri + 'api/v2/predictions/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface ApiV2List_federationsGetReturn {
		data?: Array<string>;
	}
	export interface ApiV2List_federationsGetReturnFormProperties {
	}
	export function CreateApiV2List_federationsGetReturnFormGroup() {
		return new FormGroup<ApiV2List_federationsGetReturnFormProperties>({
		});

	}

	export interface ApiV2List_marketsGetReturn {
		data?: ApiV2List_marketsGetReturnData;
	}
	export interface ApiV2List_marketsGetReturnFormProperties {
	}
	export function CreateApiV2List_marketsGetReturnFormGroup() {
		return new FormGroup<ApiV2List_marketsGetReturnFormProperties>({
		});

	}

	export interface ApiV2List_marketsGetReturnData {
		all?: Array<string>;
		allowed_for_your_subscription?: Array<string>;
	}
	export interface ApiV2List_marketsGetReturnDataFormProperties {
	}
	export function CreateApiV2List_marketsGetReturnDataFormGroup() {
		return new FormGroup<ApiV2List_marketsGetReturnDataFormProperties>({
		});

	}

	export interface ApiV2Performance_statsGetReturn {
		data?: ApiV2Performance_statsGetReturnData;
	}
	export interface ApiV2Performance_statsGetReturnFormProperties {
	}
	export function CreateApiV2Performance_statsGetReturnFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnFormProperties>({
		});

	}

	export interface ApiV2Performance_statsGetReturnData {
		accuracy?: ApiV2Performance_statsGetReturnDataAccuracy;
		details?: ApiV2Performance_statsGetReturnDataDetails;
		market?: string | null;
	}
	export interface ApiV2Performance_statsGetReturnDataFormProperties {
		market: FormControl<string | null | undefined>,
	}
	export function CreateApiV2Performance_statsGetReturnDataFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnDataFormProperties>({
			market: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiV2Performance_statsGetReturnDataAccuracy {
		last_14_days?: number | null;
		last_30_days?: number | null;
		last_7_days?: number | null;
		yesterday?: number | null;
	}
	export interface ApiV2Performance_statsGetReturnDataAccuracyFormProperties {
		last_14_days: FormControl<number | null | undefined>,
		last_30_days: FormControl<number | null | undefined>,
		last_7_days: FormControl<number | null | undefined>,
		yesterday: FormControl<number | null | undefined>,
	}
	export function CreateApiV2Performance_statsGetReturnDataAccuracyFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnDataAccuracyFormProperties>({
			last_14_days: new FormControl<number | null | undefined>(undefined),
			last_30_days: new FormControl<number | null | undefined>(undefined),
			last_7_days: new FormControl<number | null | undefined>(undefined),
			yesterday: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiV2Performance_statsGetReturnDataDetails {
		last_14_days?: ApiV2Performance_statsGetReturnDataDetailsLast_14_days;
		last_30_days?: ApiV2Performance_statsGetReturnDataDetailsLast_30_days;
		last_7_days?: ApiV2Performance_statsGetReturnDataDetailsLast_7_days;
		yesterday?: ApiV2Performance_statsGetReturnDataDetailsYesterday;
	}
	export interface ApiV2Performance_statsGetReturnDataDetailsFormProperties {
	}
	export function CreateApiV2Performance_statsGetReturnDataDetailsFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnDataDetailsFormProperties>({
		});

	}

	export interface ApiV2Performance_statsGetReturnDataDetailsLast_14_days {
		lost?: number | null;
		pending?: number | null;
		postponed?: number | null;
		total?: number | null;
		won?: number | null;
	}
	export interface ApiV2Performance_statsGetReturnDataDetailsLast_14_daysFormProperties {
		lost: FormControl<number | null | undefined>,
		pending: FormControl<number | null | undefined>,
		postponed: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		won: FormControl<number | null | undefined>,
	}
	export function CreateApiV2Performance_statsGetReturnDataDetailsLast_14_daysFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnDataDetailsLast_14_daysFormProperties>({
			lost: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
			postponed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			won: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiV2Performance_statsGetReturnDataDetailsLast_30_days {
		lost?: number | null;
		pending?: number | null;
		postponed?: number | null;
		total?: number | null;
		won?: number | null;
	}
	export interface ApiV2Performance_statsGetReturnDataDetailsLast_30_daysFormProperties {
		lost: FormControl<number | null | undefined>,
		pending: FormControl<number | null | undefined>,
		postponed: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		won: FormControl<number | null | undefined>,
	}
	export function CreateApiV2Performance_statsGetReturnDataDetailsLast_30_daysFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnDataDetailsLast_30_daysFormProperties>({
			lost: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
			postponed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			won: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiV2Performance_statsGetReturnDataDetailsLast_7_days {
		lost?: number | null;
		pending?: number | null;
		postponed?: number | null;
		total?: number | null;
		won?: number | null;
	}
	export interface ApiV2Performance_statsGetReturnDataDetailsLast_7_daysFormProperties {
		lost: FormControl<number | null | undefined>,
		pending: FormControl<number | null | undefined>,
		postponed: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		won: FormControl<number | null | undefined>,
	}
	export function CreateApiV2Performance_statsGetReturnDataDetailsLast_7_daysFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnDataDetailsLast_7_daysFormProperties>({
			lost: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
			postponed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			won: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiV2Performance_statsGetReturnDataDetailsYesterday {
		lost?: number | null;
		pending?: number | null;
		postponed?: number | null;
		total?: number | null;
		won?: number | null;
	}
	export interface ApiV2Performance_statsGetReturnDataDetailsYesterdayFormProperties {
		lost: FormControl<number | null | undefined>,
		pending: FormControl<number | null | undefined>,
		postponed: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
		won: FormControl<number | null | undefined>,
	}
	export function CreateApiV2Performance_statsGetReturnDataDetailsYesterdayFormGroup() {
		return new FormGroup<ApiV2Performance_statsGetReturnDataDetailsYesterdayFormProperties>({
			lost: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
			postponed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			won: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiV2Predictions_idGetReturn {
		data?: Array<string>;
	}
	export interface ApiV2Predictions_idGetReturnFormProperties {
	}
	export function CreateApiV2Predictions_idGetReturnFormGroup() {
		return new FormGroup<ApiV2Predictions_idGetReturnFormProperties>({
		});

	}

}

