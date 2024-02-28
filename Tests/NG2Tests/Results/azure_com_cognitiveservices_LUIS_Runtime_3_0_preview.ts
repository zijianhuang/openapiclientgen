import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines an extension for a list entity. */
	export interface DynamicList {

		/**
		 * The name of the list entity to extend.
		 * Required
		 */
		listEntityName: string;

		/**
		 * The lists to append on the extended list entity.
		 * Required
		 */
		requestLists: Array<RequestList>;
	}

	/** Defines an extension for a list entity. */
	export interface DynamicListFormProperties {

		/**
		 * The name of the list entity to extend.
		 * Required
		 */
		listEntityName: FormControl<string | null | undefined>,
	}
	export function CreateDynamicListFormGroup() {
		return new FormGroup<DynamicListFormProperties>({
			listEntityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a sub-list to append to an existing list entity. */
	export interface RequestList {

		/**
		 * The canonical form of the sub-list.
		 * Required
		 */
		canonicalForm: string;

		/** The name of the sub-list. */
		name?: string | null;

		/** The synonyms of the canonical form. */
		synonyms?: Array<string>;
	}

	/** Defines a sub-list to append to an existing list entity. */
	export interface RequestListFormProperties {

		/**
		 * The canonical form of the sub-list.
		 * Required
		 */
		canonicalForm: FormControl<string | null | undefined>,

		/** The name of the sub-list. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRequestListFormGroup() {
		return new FormGroup<RequestListFormProperties>({
			canonicalForm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the error that occurred. */
	export interface Error {

		/**
		 * Represents the definition of the error that occurred.
		 * Required
		 */
		error: ErrorBody;
	}

	/** Represents the error that occurred. */
	export interface ErrorFormProperties {
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
		});

	}


	/** Represents the definition of the error that occurred. */
	export interface ErrorBody {

		/**
		 * The error code.
		 * Required
		 */
		code: string;

		/**
		 * The error message.
		 * Required
		 */
		message: string;
	}

	/** Represents the definition of the error that occurred. */
	export interface ErrorBodyFormProperties {

		/**
		 * The error code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorBodyFormGroup() {
		return new FormGroup<ErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a user predicted entity that extends an already existing one. */
	export interface ExternalEntity {

		/**
		 * The length of the predicted entity.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		entityLength: number;

		/**
		 * The name of the entity to extend.
		 * Required
		 */
		entityName: string;

		/** A user supplied custom resolution to return as the entity's prediction. */
		resolution?: any;

		/**
		 * The start character index of the predicted entity.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startIndex: number;
	}

	/** Defines a user predicted entity that extends an already existing one. */
	export interface ExternalEntityFormProperties {

		/**
		 * The length of the predicted entity.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		entityLength: FormControl<number | null | undefined>,

		/**
		 * The name of the entity to extend.
		 * Required
		 */
		entityName: FormControl<string | null | undefined>,

		/** A user supplied custom resolution to return as the entity's prediction. */
		resolution: FormControl<any | null | undefined>,

		/**
		 * The start character index of the predicted entity.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startIndex: FormControl<number | null | undefined>,
	}
	export function CreateExternalEntityFormGroup() {
		return new FormGroup<ExternalEntityFormProperties>({
			entityLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<any | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an intent prediction. */
	export interface Intent {

		/** Represents the prediction of a query. */
		childApp?: Prediction;

		/**
		 * The score of the fired intent.
		 * Type: float
		 */
		score?: number | null;
	}

	/** Represents an intent prediction. */
	export interface IntentFormProperties {

		/**
		 * The score of the fired intent.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateIntentFormGroup() {
		return new FormGroup<IntentFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the prediction of a query. */
	export interface Prediction {

		/** The query after spell checking. Only set if spell check was enabled and a spelling mistake was found. */
		alteredQuery?: string | null;

		/**
		 * The dictionary representing the entities that fired.
		 * Required
		 */
		entities: {[id: string]: any };

		/**
		 * A dictionary representing the intents that fired.
		 * Required
		 */
		intents: {[id: string]: Intent };

		/**
		 * The query after pre-processing and normalization.
		 * Required
		 */
		normalizedQuery: string;

		/** The result of the sentiment analysis. */
		sentiment?: Sentiment;

		/**
		 * The name of the top scoring intent.
		 * Required
		 */
		topIntent: string;
	}

	/** Represents the prediction of a query. */
	export interface PredictionFormProperties {

		/** The query after spell checking. Only set if spell check was enabled and a spelling mistake was found. */
		alteredQuery: FormControl<string | null | undefined>,

		/**
		 * The dictionary representing the entities that fired.
		 * Required
		 */
		entities: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * A dictionary representing the intents that fired.
		 * Required
		 */
		intents: FormControl<{[id: string]: Intent } | null | undefined>,

		/**
		 * The query after pre-processing and normalization.
		 * Required
		 */
		normalizedQuery: FormControl<string | null | undefined>,

		/**
		 * The name of the top scoring intent.
		 * Required
		 */
		topIntent: FormControl<string | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			alteredQuery: new FormControl<string | null | undefined>(undefined),
			entities: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			intents: new FormControl<{[id: string]: Intent } | null | undefined>(undefined, [Validators.required]),
			normalizedQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topIntent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of the sentiment analysis. */
	export interface Sentiment {

		/** The label of the sentiment analysis result. */
		label?: string | null;

		/**
		 * The sentiment score of the query.
		 * Required
		 * Type: float
		 */
		score: number;
	}

	/** The result of the sentiment analysis. */
	export interface SentimentFormProperties {

		/** The label of the sentiment analysis result. */
		label: FormControl<string | null | undefined>,

		/**
		 * The sentiment score of the query.
		 * Required
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateSentimentFormGroup() {
		return new FormGroup<SentimentFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the prediction request parameters. */
	export interface PredictionRequest {

		/** The dynamically created list entities for this request. */
		dynamicLists?: Array<DynamicList>;

		/** The externally predicted entities for this request. */
		externalEntities?: Array<ExternalEntity>;

		/** The custom options for the prediction request. */
		options?: PredictionRequestOptions;

		/**
		 * The query to predict.
		 * Required
		 */
		query: string;
	}

	/** Represents the prediction request parameters. */
	export interface PredictionRequestFormProperties {

		/**
		 * The query to predict.
		 * Required
		 */
		query: FormControl<string | null | undefined>,
	}
	export function CreatePredictionRequestFormGroup() {
		return new FormGroup<PredictionRequestFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The custom options for the prediction request. */
	export interface PredictionRequestOptions {

		/** The reference DateTime used for predicting datetime entities. */
		datetimeReference?: Date | null;

		/** Whether to make the external entities resolution override the predictions if an overlap occurs. */
		overridePredictions?: boolean | null;
	}

	/** The custom options for the prediction request. */
	export interface PredictionRequestOptionsFormProperties {

		/** The reference DateTime used for predicting datetime entities. */
		datetimeReference: FormControl<Date | null | undefined>,

		/** Whether to make the external entities resolution override the predictions if an overlap occurs. */
		overridePredictions: FormControl<boolean | null | undefined>,
	}
	export function CreatePredictionRequestOptionsFormGroup() {
		return new FormGroup<PredictionRequestOptionsFormProperties>({
			datetimeReference: new FormControl<Date | null | undefined>(undefined),
			overridePredictions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the prediction response. */
	export interface PredictionResponse {

		/**
		 * Represents the prediction of a query.
		 * Required
		 */
		prediction: Prediction;

		/**
		 * The query used in the prediction.
		 * Required
		 */
		query: string;
	}

	/** Represents the prediction response. */
	export interface PredictionResponseFormProperties {

		/**
		 * The query used in the prediction.
		 * Required
		 */
		query: FormControl<string | null | undefined>,
	}
	export function CreatePredictionResponseFormGroup() {
		return new FormGroup<PredictionResponseFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the predictions for an application slot.
		 * Get apps/{appId}/slots/{slotName}/predict
		 * @param {string} appId The application ID.
		 * @param {string} slotName The application slot name.
		 * @param {string} query The query to predict.
		 * @param {boolean} verbose Indicates whether to get extra metadata for the entities predictions or not.
		 * @param {boolean} show_all_intents Indicates whether to return all the intents in the response or just the top intent.
		 * @param {boolean} log Indicates whether to log the endpoint query or not.
		 * @return {PredictionResponse} The prediction for the supplied query.
		 */
		Prediction_GetSlotPredictionGET(appId: string, slotName: string, query: string, verbose: boolean | null | undefined, show_all_intents: boolean | null | undefined, log: boolean | null | undefined): Observable<PredictionResponse> {
			return this.http.get<PredictionResponse>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/slots/' + (slotName == null ? '' : encodeURIComponent(slotName)) + '/predict&query=' + (query == null ? '' : encodeURIComponent(query)) + '&verbose=' + verbose + '&show_all_intents=' + show_all_intents + '&log=' + log, {});
		}

		/**
		 * Gets the predictions for an application slot.
		 * Post apps/{appId}/slots/{slotName}/predict
		 * @param {string} appId The application ID.
		 * @param {string} slotName The application slot name.
		 * @param {boolean} verbose Indicates whether to get extra metadata for the entities predictions or not.
		 * @param {boolean} show_all_intents Indicates whether to return all the intents in the response or just the top intent.
		 * @param {boolean} log Indicates whether to log the endpoint query or not.
		 * @param {PredictionRequest} requestBody The prediction request parameters.
		 * @return {PredictionResponse} The prediction for the supplied query.
		 */
		Prediction_GetSlotPrediction(appId: string, slotName: string, verbose: boolean | null | undefined, show_all_intents: boolean | null | undefined, log: boolean | null | undefined, requestBody: PredictionRequest): Observable<PredictionResponse> {
			return this.http.post<PredictionResponse>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/slots/' + (slotName == null ? '' : encodeURIComponent(slotName)) + '/predict&verbose=' + verbose + '&show_all_intents=' + show_all_intents + '&log=' + log, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the predictions for an application version.
		 * Get apps/{appId}/versions/{versionId}/predict
		 * @param {string} appId The application ID.
		 * @param {string} versionId The application version ID.
		 * @param {string} query The query to predict.
		 * @param {boolean} verbose Indicates whether to get extra metadata for the entities predictions or not.
		 * @param {boolean} show_all_intents Indicates whether to return all the intents in the response or just the top intent.
		 * @param {boolean} log Indicates whether to log the endpoint query or not.
		 * @return {PredictionResponse} The prediction for the supplied query.
		 */
		Prediction_GetVersionPredictionGET(appId: string, versionId: string, query: string, verbose: boolean | null | undefined, show_all_intents: boolean | null | undefined, log: boolean | null | undefined): Observable<PredictionResponse> {
			return this.http.get<PredictionResponse>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/predict&query=' + (query == null ? '' : encodeURIComponent(query)) + '&verbose=' + verbose + '&show_all_intents=' + show_all_intents + '&log=' + log, {});
		}

		/**
		 * Gets the predictions for an application version.
		 * Post apps/{appId}/versions/{versionId}/predict
		 * @param {string} appId The application ID.
		 * @param {string} versionId The application version ID.
		 * @param {boolean} verbose Indicates whether to get extra metadata for the entities predictions or not.
		 * @param {boolean} show_all_intents Indicates whether to return all the intents in the response or just the top intent.
		 * @param {boolean} log Indicates whether to log the endpoint query or not.
		 * @param {PredictionRequest} requestBody The prediction request parameters.
		 * @return {PredictionResponse} The prediction for the supplied query.
		 */
		Prediction_GetVersionPrediction(appId: string, versionId: string, verbose: boolean | null | undefined, show_all_intents: boolean | null | undefined, log: boolean | null | undefined, requestBody: PredictionRequest): Observable<PredictionResponse> {
			return this.http.post<PredictionResponse>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/predict&verbose=' + verbose + '&show_all_intents=' + show_all_intents + '&log=' + log, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

