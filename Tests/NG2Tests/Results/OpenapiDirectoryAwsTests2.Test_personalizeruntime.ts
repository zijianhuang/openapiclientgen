import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface GetPersonalizedRankingResponse {
		personalizedRanking?: Array<PredictedItem>;
	}


	/** <p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p> */
	export interface PredictedItem {
		itemId?: string;
		score?: number;
	}

	export interface InvalidInputException {
	}

	export interface ResourceNotFoundException {
	}

	export interface GetRecommendationsResponse {
		itemList?: Array<PredictedItem>;
	}

	export interface Context {
	}

	export interface GetPersonalizedRankingRequest {
		campaignArn: string;
		inputList: Array<string>;
		userId: string;
		context?: Context;
	}

	export interface GetRecommendationsRequest {
		campaignArn: string;
		itemId?: string;
		userId?: string;
		numResults?: number;
		context?: Context;
		filterArn?: string;
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
		 * <p>Returns a list of recommended items. The required input depends on the recipe type used to create the solution backing the campaign, as follows:</p> <ul> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> <li> <p>USER_PERSONALIZATION - <code>itemId</code> optional, <code>userId</code> required</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note>
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
		 * Pattern: arn:([a-z\d-]+):personalize:.*:.*:.+
		 */
		campaignArn: string;

		/**
		 * A list of items (itemId's) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.
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
	}

	export interface GetRecommendationsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.
		 * Required
		 * Max length: 256
		 * Pattern: arn:([a-z\d-]+):personalize:.*:.*:.+
		 */
		campaignArn: string;

		/**
		 * <p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
		 * Max length: 256
		 */
		itemId?: string;

		/**
		 * <p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
		 * Max length: 256
		 */
		userId?: string;

		/**
		 * The number of results to return. The default is 25. The maximum is 500.
		 * Minimum: 0
		 */
		numResults?: number;

		/** The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type. */
		context?: {[id: string]: string };

		/**
		 * The ARN of the filter to apply to the returned recommendations. For more information, see Using Filters with Amazon Personalize.
		 * Max length: 256
		 * Pattern: arn:([a-z\d-]+):personalize:.*:.*:.+
		 */
		filterArn?: string;
	}

}

