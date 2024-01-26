import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetPersonalizedRankingResponse {
		personalizedRanking?: Array<PredictedItem>;
		recommendationId?: string;
	}
	export interface GetPersonalizedRankingResponseFormProperties {
		recommendationId: FormControl<string | null | undefined>,
	}
	export function CreateGetPersonalizedRankingResponseFormGroup() {
		return new FormGroup<GetPersonalizedRankingResponseFormProperties>({
			recommendationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p> */
	export interface PredictedItem {
		itemId?: string;
		score?: number | null;
		promotionName?: string;
	}

	/** <p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p> */
	export interface PredictedItemFormProperties {
		itemId: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		promotionName: FormControl<string | null | undefined>,
	}
	export function CreatePredictedItemFormGroup() {
		return new FormGroup<PredictedItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			promotionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface GetRecommendationsResponse {
		itemList?: Array<PredictedItem>;
		recommendationId?: string;
	}
	export interface GetRecommendationsResponseFormProperties {
		recommendationId: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationsResponseFormGroup() {
		return new FormGroup<GetRecommendationsResponseFormProperties>({
			recommendationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items. */
	export interface Promotion {
		name?: string;
		percentPromotedItems?: number | null;
		filterArn?: string;
		filterValues?: FilterValues;
	}

	/** Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items. */
	export interface PromotionFormProperties {
		name: FormControl<string | null | undefined>,
		percentPromotedItems: FormControl<number | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentPromotedItems: new FormControl<number | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterValues {
	}
	export interface FilterValuesFormProperties {
	}
	export function CreateFilterValuesFormGroup() {
		return new FormGroup<FilterValuesFormProperties>({
		});

	}

	export interface Context {
	}
	export interface ContextFormProperties {
	}
	export function CreateContextFormGroup() {
		return new FormGroup<ContextFormProperties>({
		});

	}

	export interface GetPersonalizedRankingRequest {

		/** Required */
		campaignArn: string;

		/** Required */
		inputList: Array<string>;

		/** Required */
		userId: string;
		context?: Context;
		filterArn?: string;
		filterValues?: FilterValues;
	}
	export interface GetPersonalizedRankingRequestFormProperties {

		/** Required */
		campaignArn: FormControl<string | null | undefined>,

		/** Required */
		userId: FormControl<string | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPersonalizedRankingRequestFormGroup() {
		return new FormGroup<GetPersonalizedRankingRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRecommendationsRequest {
		campaignArn?: string;
		itemId?: string;
		userId?: string;
		numResults?: number | null;
		context?: Context;
		filterArn?: string;
		filterValues?: FilterValues;
		recommenderArn?: string;
		promotions?: Array<Promotion>;
	}
	export interface GetRecommendationsRequestFormProperties {
		campaignArn: FormControl<string | null | undefined>,
		itemId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
		numResults: FormControl<number | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationsRequestFormGroup() {
		return new FormGroup<GetRecommendationsRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			numResults: new FormControl<number | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined),
			recommenderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>
		 * Post personalize-ranking
		 * @return {GetPersonalizedRankingResponse} Success
		 */
		GetPersonalizedRanking(requestBody: GetPersonalizedRankingPostBody): Observable<GetPersonalizedRankingResponse> {
			return this.http.post<GetPersonalizedRankingResponse>(this.baseUri + 'personalize-ranking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>
		 * Post recommendations
		 * @return {GetRecommendationsResponse} Success
		 */
		GetRecommendations(requestBody: GetRecommendationsPostBody): Observable<GetRecommendationsResponse> {
			return this.http.post<GetRecommendationsResponse>(this.baseUri + 'recommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface GetPersonalizedRankingPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.
		 * Required
		 * Max length: 256
		 */
		campaignArn: string;

		/**
		 * A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.
		 * Required
		 */
		inputList: Array<string>;

		/**
		 * The user for which you want the campaign to provide a personalized ranking.
		 * Required
		 * Max length: 256
		 */
		userId: string;

		/** The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type. */
		context?: {[id: string]: string };

		/**
		 * The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.
		 * Max length: 256
		 */
		filterArn?: string | null;

		/** <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> */
		filterValues?: {[id: string]: string };
	}
	export interface GetPersonalizedRankingPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.
		 * Required
		 * Max length: 256
		 */
		campaignArn: FormControl<string | null | undefined>,

		/**
		 * The user for which you want the campaign to provide a personalized ranking.
		 * Required
		 * Max length: 256
		 */
		userId: FormControl<string | null | undefined>,

		/** The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type. */
		context: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.
		 * Max length: 256
		 */
		filterArn: FormControl<string | null | undefined>,

		/** <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> */
		filterValues: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGetPersonalizedRankingPostBodyFormGroup() {
		return new FormGroup<GetPersonalizedRankingPostBodyFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			context: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			filterValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface GetRecommendationsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.
		 * Max length: 256
		 */
		campaignArn?: string | null;

		/**
		 * <p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
		 * Max length: 256
		 */
		itemId?: string | null;

		/**
		 * <p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
		 * Max length: 256
		 */
		userId?: string | null;

		/**
		 * The number of results to return. The default is 25. The maximum is 500.
		 * Minimum: 0
		 */
		numResults?: number | null;

		/** The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type. */
		context?: {[id: string]: string };

		/**
		 * <p>The ARN of the filter to apply to the returned recommendations. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>
		 * Max length: 256
		 */
		filterArn?: string | null;

		/** <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p> */
		filterValues?: {[id: string]: string };

		/**
		 * The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case.
		 * Max length: 256
		 */
		recommenderArn?: string | null;

		/**
		 * The promotions to apply to the recommendation request. A promotion defines additional business rules that apply to a configurable subset of recommended items.
		 * Maximum items: 1
		 */
		promotions?: Array<Promotion>;
	}
	export interface GetRecommendationsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.
		 * Max length: 256
		 */
		campaignArn: FormControl<string | null | undefined>,

		/**
		 * <p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
		 * Max length: 256
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * <p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
		 * Max length: 256
		 */
		userId: FormControl<string | null | undefined>,

		/**
		 * The number of results to return. The default is 25. The maximum is 500.
		 * Minimum: 0
		 */
		numResults: FormControl<number | null | undefined>,

		/** The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type. */
		context: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The ARN of the filter to apply to the returned recommendations. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>
		 * Max length: 256
		 */
		filterArn: FormControl<string | null | undefined>,

		/** <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p> */
		filterValues: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case.
		 * Max length: 256
		 */
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationsPostBodyFormGroup() {
		return new FormGroup<GetRecommendationsPostBodyFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			numResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			context: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			filterValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			recommenderArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

}

