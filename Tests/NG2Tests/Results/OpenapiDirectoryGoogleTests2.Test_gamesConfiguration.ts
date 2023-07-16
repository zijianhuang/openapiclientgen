import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** An achievement configuration resource. */
	export interface AchievementConfiguration {

		/** The type of the achievement. */
		achievementType?: AchievementConfigurationAchievementType;

		/** An achievement configuration detail. */
		draft?: AchievementConfigurationDetail;

		/** The ID of the achievement. */
		id?: string;

		/** The initial state of the achievement. */
		initialState?: AchievementConfigurationInitialState;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#achievementConfiguration</code>.
		 */
		kind?: string;

		/** An achievement configuration detail. */
		published?: AchievementConfigurationDetail;

		/** Steps to unlock.  Only applicable to incremental achievements. */
		stepsToUnlock?: number;

		/** The token for this resource. */
		token?: string;
	}

	export enum AchievementConfigurationAchievementType { ACHIEVEMENT_TYPE_UNSPECIFIED = 0, STANDARD = 1, INCREMENTAL = 2 }


	/** An achievement configuration detail. */
	export interface AchievementConfigurationDetail {

		/** A localized string bundle resource. */
		description?: LocalizedStringBundle;

		/** The icon url of this achievement. Writes to this field are ignored. */
		iconUrl?: string;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#achievementConfigurationDetail</code>.
		 */
		kind?: string;

		/** A localized string bundle resource. */
		name?: LocalizedStringBundle;

		/** Point value for the achievement. */
		pointValue?: number;

		/** The sort rank of this achievement. Writes to this field are ignored. */
		sortRank?: number;
	}


	/** A localized string bundle resource. */
	export interface LocalizedStringBundle {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#localizedStringBundle</code>.
		 */
		kind?: string;

		/** The locale strings. */
		translations?: Array<LocalizedString>;
	}


	/** A localized string resource. */
	export interface LocalizedString {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#localizedString</code>.
		 */
		kind?: string;

		/** The locale string. */
		locale?: string;

		/** The string value. */
		value?: string;
	}

	export enum AchievementConfigurationInitialState { INITIAL_STATE_UNSPECIFIED = 0, HIDDEN = 1, REVEALED = 2 }


	/** A ListConfigurations response. */
	export interface AchievementConfigurationListResponse {

		/** The achievement configurations. */
		items?: Array<AchievementConfiguration>;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string
		 * <code>gamesConfiguration#achievementConfigurationListResponse</code>.
		 */
		kind?: string;

		/** The pagination token for the next page of results. */
		nextPageToken?: string;
	}


	/** A number affix resource. */
	export interface GamesNumberAffixConfiguration {

		/** A localized string bundle resource. */
		few?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		many?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		one?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		other?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		two?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		zero?: LocalizedStringBundle;
	}


	/** A number format resource. */
	export interface GamesNumberFormatConfiguration {

		/** The curreny code string. Only used for CURRENCY format type. */
		currencyCode?: string;

		/** The number of decimal places for number. Only used for NUMERIC format type. */
		numDecimalPlaces?: number;

		/** The formatting for the number. */
		numberFormatType?: GamesNumberFormatConfigurationNumberFormatType;

		/** A number affix resource. */
		suffix?: GamesNumberAffixConfiguration;
	}

	export enum GamesNumberFormatConfigurationNumberFormatType { NUMBER_FORMAT_TYPE_UNSPECIFIED = 0, NUMERIC = 1, TIME_DURATION = 2, CURRENCY = 3 }


	/** An image configuration resource. */
	export interface ImageConfiguration {

		/** The image type for the image. */
		imageType?: ImageConfigurationImageType;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#imageConfiguration</code>.
		 */
		kind?: string;

		/** The resource ID of resource which the image belongs to. */
		resourceId?: string;

		/** The url for this image. */
		url?: string;
	}

	export enum ImageConfigurationImageType { IMAGE_TYPE_UNSPECIFIED = 0, ACHIEVEMENT_ICON = 1, LEADERBOARD_ICON = 2 }


	/** An leaderboard configuration resource. */
	export interface LeaderboardConfiguration {

		/** A leaderboard configuration detail. */
		draft?: LeaderboardConfigurationDetail;

		/** The ID of the leaderboard. */
		id?: string;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#leaderboardConfiguration</code>.
		 */
		kind?: string;

		/** A leaderboard configuration detail. */
		published?: LeaderboardConfigurationDetail;

		/** Maximum score that can be posted to this leaderboard. */
		scoreMax?: string;

		/** Minimum score that can be posted to this leaderboard. */
		scoreMin?: string;
		scoreOrder?: LeaderboardConfigurationScoreOrder;

		/** The token for this resource. */
		token?: string;
	}


	/** A leaderboard configuration detail. */
	export interface LeaderboardConfigurationDetail {

		/** The icon url of this leaderboard. Writes to this field are ignored. */
		iconUrl?: string;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#leaderboardConfigurationDetail</code>.
		 */
		kind?: string;

		/** A localized string bundle resource. */
		name?: LocalizedStringBundle;

		/** A number format resource. */
		scoreFormat?: GamesNumberFormatConfiguration;

		/** The sort rank of this leaderboard. Writes to this field are ignored. */
		sortRank?: number;
	}

	export enum LeaderboardConfigurationScoreOrder { SCORE_ORDER_UNSPECIFIED = 0, LARGER_IS_BETTER = 1, SMALLER_IS_BETTER = 2 }


	/** A ListConfigurations response. */
	export interface LeaderboardConfigurationListResponse {

		/** The leaderboard configurations. */
		items?: Array<LeaderboardConfiguration>;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string
		 * <code>gamesConfiguration#leaderboardConfigurationListResponse</code>.
		 */
		kind?: string;

		/** The pagination token for the next page of results. */
		nextPageToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete the achievement configuration with the given ID.
		 * Delete games/v1configuration/achievements/{achievementId}
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {void} Successful response
		 */
		GamesConfiguration_achievementConfigurations_delete(achievementId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'games/v1configuration/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the achievement configuration with the given ID.
		 * Get games/v1configuration/achievements/{achievementId}
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {void} Successful response
		 */
		GamesConfiguration_achievementConfigurations_get(achievementId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'games/v1configuration/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the metadata of the achievement configuration with the given ID.
		 * Put games/v1configuration/achievements/{achievementId}
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {void} Successful response
		 */
		GamesConfiguration_achievementConfigurations_update(achievementId: string, requestBody: AchievementConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'games/v1configuration/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the achievement configurations in this application.
		 * Get games/v1configuration/applications/{applicationId}/achievements
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {number} maxResults The maximum number of resource configurations to return in the response,
		 * used for paging. For any response, the actual number of resources returned
		 * may be less than the specified <code>maxResults</code>.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		GamesConfiguration_achievementConfigurations_list(applicationId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/achievements&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert a new achievement configuration in this application.
		 * Post games/v1configuration/applications/{applicationId}/achievements
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @return {void} Successful response
		 */
		GamesConfiguration_achievementConfigurations_insert(applicationId: string, requestBody: AchievementConfiguration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/achievements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the leaderboard configurations in this application.
		 * Get games/v1configuration/applications/{applicationId}/leaderboards
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {number} maxResults The maximum number of resource configurations to return in the response,
		 * used for paging. For any response, the actual number of resources returned
		 * may be less than the specified <code>maxResults</code>.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_list(applicationId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/leaderboards&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert a new leaderboard configuration in this application.
		 * Post games/v1configuration/applications/{applicationId}/leaderboards
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @return {void} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_insert(applicationId: string, requestBody: LeaderboardConfiguration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/leaderboards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads an image for a resource with the given ID and image type.
		 * Post games/v1configuration/images/{resourceId}/imageType/{imageType}
		 * @param {string} resourceId The ID of the resource used by this method.
		 * @param {ImageConfigurationImageType} imageType Selects which image in a resource for this method.
		 * @return {void} Successful response
		 */
		GamesConfiguration_imageConfigurations_upload(resourceId: string, imageType: ImageConfigurationImageType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1configuration/images/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/imageType/' + imageType, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the leaderboard configuration with the given ID.
		 * Delete games/v1configuration/leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {void} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_delete(leaderboardId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'games/v1configuration/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the leaderboard configuration with the given ID.
		 * Get games/v1configuration/leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {void} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_get(leaderboardId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'games/v1configuration/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the metadata of the leaderboard configuration with the given ID.
		 * Put games/v1configuration/leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {void} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_update(leaderboardId: string, requestBody: LeaderboardConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'games/v1configuration/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

