import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An achievement configuration resource. */
	export interface AchievementConfiguration {

		/** The type of the achievement. */
		achievementType?: AchievementConfigurationAchievementType | null;

		/** An achievement configuration detail. */
		draft?: AchievementConfigurationDetail;

		/** The ID of the achievement. */
		id?: string | null;

		/** The initial state of the achievement. */
		initialState?: AchievementConfigurationInitialState | null;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#achievementConfiguration</code>.
		 */
		kind?: string | null;

		/** An achievement configuration detail. */
		published?: AchievementConfigurationDetail;

		/** Steps to unlock.  Only applicable to incremental achievements. */
		stepsToUnlock?: number | null;

		/** The token for this resource. */
		token?: string | null;
	}

	/** An achievement configuration resource. */
	export interface AchievementConfigurationFormProperties {

		/** The type of the achievement. */
		achievementType: FormControl<AchievementConfigurationAchievementType | null | undefined>,

		/** The ID of the achievement. */
		id: FormControl<string | null | undefined>,

		/** The initial state of the achievement. */
		initialState: FormControl<AchievementConfigurationInitialState | null | undefined>,

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#achievementConfiguration</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** Steps to unlock.  Only applicable to incremental achievements. */
		stepsToUnlock: FormControl<number | null | undefined>,

		/** The token for this resource. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateAchievementConfigurationFormGroup() {
		return new FormGroup<AchievementConfigurationFormProperties>({
			achievementType: new FormControl<AchievementConfigurationAchievementType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initialState: new FormControl<AchievementConfigurationInitialState | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			stepsToUnlock: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AchievementConfigurationAchievementType { ACHIEVEMENT_TYPE_UNSPECIFIED = 0, STANDARD = 1, INCREMENTAL = 2 }


	/** An achievement configuration detail. */
	export interface AchievementConfigurationDetail {

		/** A localized string bundle resource. */
		description?: LocalizedStringBundle;

		/** The icon url of this achievement. Writes to this field are ignored. */
		iconUrl?: string | null;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#achievementConfigurationDetail</code>.
		 */
		kind?: string | null;

		/** A localized string bundle resource. */
		name?: LocalizedStringBundle;

		/** Point value for the achievement. */
		pointValue?: number | null;

		/** The sort rank of this achievement. Writes to this field are ignored. */
		sortRank?: number | null;
	}

	/** An achievement configuration detail. */
	export interface AchievementConfigurationDetailFormProperties {

		/** The icon url of this achievement. Writes to this field are ignored. */
		iconUrl: FormControl<string | null | undefined>,

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#achievementConfigurationDetail</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** Point value for the achievement. */
		pointValue: FormControl<number | null | undefined>,

		/** The sort rank of this achievement. Writes to this field are ignored. */
		sortRank: FormControl<number | null | undefined>,
	}
	export function CreateAchievementConfigurationDetailFormGroup() {
		return new FormGroup<AchievementConfigurationDetailFormProperties>({
			iconUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pointValue: new FormControl<number | null | undefined>(undefined),
			sortRank: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A localized string bundle resource. */
	export interface LocalizedStringBundle {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#localizedStringBundle</code>.
		 */
		kind?: string | null;

		/** The locale strings. */
		translations?: Array<LocalizedString>;
	}

	/** A localized string bundle resource. */
	export interface LocalizedStringBundleFormProperties {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#localizedStringBundle</code>.
		 */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringBundleFormGroup() {
		return new FormGroup<LocalizedStringBundleFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A localized string resource. */
	export interface LocalizedString {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#localizedString</code>.
		 */
		kind?: string | null;

		/** The locale string. */
		locale?: string | null;

		/** The string value. */
		value?: string | null;
	}

	/** A localized string resource. */
	export interface LocalizedStringFormProperties {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#localizedString</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** The locale string. */
		locale: FormControl<string | null | undefined>,

		/** The string value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringFormGroup() {
		return new FormGroup<LocalizedStringFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

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
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** A ListConfigurations response. */
	export interface AchievementConfigurationListResponseFormProperties {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string
		 * <code>gamesConfiguration#achievementConfigurationListResponse</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAchievementConfigurationListResponseFormGroup() {
		return new FormGroup<AchievementConfigurationListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** A number affix resource. */
	export interface GamesNumberAffixConfigurationFormProperties {
	}
	export function CreateGamesNumberAffixConfigurationFormGroup() {
		return new FormGroup<GamesNumberAffixConfigurationFormProperties>({
		});

	}


	/** A number format resource. */
	export interface GamesNumberFormatConfiguration {

		/** The curreny code string. Only used for CURRENCY format type. */
		currencyCode?: string | null;

		/** The number of decimal places for number. Only used for NUMERIC format type. */
		numDecimalPlaces?: number | null;

		/** The formatting for the number. */
		numberFormatType?: GamesNumberFormatConfigurationNumberFormatType | null;

		/** A number affix resource. */
		suffix?: GamesNumberAffixConfiguration;
	}

	/** A number format resource. */
	export interface GamesNumberFormatConfigurationFormProperties {

		/** The curreny code string. Only used for CURRENCY format type. */
		currencyCode: FormControl<string | null | undefined>,

		/** The number of decimal places for number. Only used for NUMERIC format type. */
		numDecimalPlaces: FormControl<number | null | undefined>,

		/** The formatting for the number. */
		numberFormatType: FormControl<GamesNumberFormatConfigurationNumberFormatType | null | undefined>,
	}
	export function CreateGamesNumberFormatConfigurationFormGroup() {
		return new FormGroup<GamesNumberFormatConfigurationFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			numDecimalPlaces: new FormControl<number | null | undefined>(undefined),
			numberFormatType: new FormControl<GamesNumberFormatConfigurationNumberFormatType | null | undefined>(undefined),
		});

	}

	export enum GamesNumberFormatConfigurationNumberFormatType { NUMBER_FORMAT_TYPE_UNSPECIFIED = 0, NUMERIC = 1, TIME_DURATION = 2, CURRENCY = 3 }


	/** An image configuration resource. */
	export interface ImageConfiguration {

		/** The image type for the image. */
		imageType?: ImageConfigurationImageType | null;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#imageConfiguration</code>.
		 */
		kind?: string | null;

		/** The resource ID of resource which the image belongs to. */
		resourceId?: string | null;

		/** The url for this image. */
		url?: string | null;
	}

	/** An image configuration resource. */
	export interface ImageConfigurationFormProperties {

		/** The image type for the image. */
		imageType: FormControl<ImageConfigurationImageType | null | undefined>,

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#imageConfiguration</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** The resource ID of resource which the image belongs to. */
		resourceId: FormControl<string | null | undefined>,

		/** The url for this image. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageConfigurationFormGroup() {
		return new FormGroup<ImageConfigurationFormProperties>({
			imageType: new FormControl<ImageConfigurationImageType | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageConfigurationImageType { IMAGE_TYPE_UNSPECIFIED = 0, ACHIEVEMENT_ICON = 1, LEADERBOARD_ICON = 2 }


	/** An leaderboard configuration resource. */
	export interface LeaderboardConfiguration {

		/** A leaderboard configuration detail. */
		draft?: LeaderboardConfigurationDetail;

		/** The ID of the leaderboard. */
		id?: string | null;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#leaderboardConfiguration</code>.
		 */
		kind?: string | null;

		/** A leaderboard configuration detail. */
		published?: LeaderboardConfigurationDetail;

		/** Maximum score that can be posted to this leaderboard. */
		scoreMax?: string | null;

		/** Minimum score that can be posted to this leaderboard. */
		scoreMin?: string | null;
		scoreOrder?: LeaderboardConfigurationScoreOrder | null;

		/** The token for this resource. */
		token?: string | null;
	}

	/** An leaderboard configuration resource. */
	export interface LeaderboardConfigurationFormProperties {

		/** The ID of the leaderboard. */
		id: FormControl<string | null | undefined>,

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#leaderboardConfiguration</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** Maximum score that can be posted to this leaderboard. */
		scoreMax: FormControl<string | null | undefined>,

		/** Minimum score that can be posted to this leaderboard. */
		scoreMin: FormControl<string | null | undefined>,
		scoreOrder: FormControl<LeaderboardConfigurationScoreOrder | null | undefined>,

		/** The token for this resource. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardConfigurationFormGroup() {
		return new FormGroup<LeaderboardConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			scoreMax: new FormControl<string | null | undefined>(undefined),
			scoreMin: new FormControl<string | null | undefined>(undefined),
			scoreOrder: new FormControl<LeaderboardConfigurationScoreOrder | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A leaderboard configuration detail. */
	export interface LeaderboardConfigurationDetail {

		/** The icon url of this leaderboard. Writes to this field are ignored. */
		iconUrl?: string | null;

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#leaderboardConfigurationDetail</code>.
		 */
		kind?: string | null;

		/** A localized string bundle resource. */
		name?: LocalizedStringBundle;

		/** A number format resource. */
		scoreFormat?: GamesNumberFormatConfiguration;

		/** The sort rank of this leaderboard. Writes to this field are ignored. */
		sortRank?: number | null;
	}

	/** A leaderboard configuration detail. */
	export interface LeaderboardConfigurationDetailFormProperties {

		/** The icon url of this leaderboard. Writes to this field are ignored. */
		iconUrl: FormControl<string | null | undefined>,

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string <code>gamesConfiguration#leaderboardConfigurationDetail</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** The sort rank of this leaderboard. Writes to this field are ignored. */
		sortRank: FormControl<number | null | undefined>,
	}
	export function CreateLeaderboardConfigurationDetailFormGroup() {
		return new FormGroup<LeaderboardConfigurationDetailFormProperties>({
			iconUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			sortRank: new FormControl<number | null | undefined>(undefined),
		});

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
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** A ListConfigurations response. */
	export interface LeaderboardConfigurationListResponseFormProperties {

		/**
		 * Uniquely identifies the type of this resource. Value is always the fixed
		 * string
		 * <code>gamesConfiguration#leaderboardConfigurationListResponse</code>.
		 */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardConfigurationListResponseFormGroup() {
		return new FormGroup<LeaderboardConfigurationListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

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
		GamesConfiguration_achievementConfigurations_list(applicationId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		GamesConfiguration_leaderboardConfigurations_list(applicationId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
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

