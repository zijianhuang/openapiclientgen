import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Auth {
		apikey?: string | null;
		userkey?: string | null;
		username?: string | null;
	}
	export interface AuthFormProperties {
		apikey: FormControl<string | null | undefined>,
		userkey: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateAuthFormGroup() {
		return new FormGroup<AuthFormProperties>({
			apikey: new FormControl<string | null | undefined>(undefined),
			userkey: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BasicEpisode {
		absoluteNumber?: number | null;
		airedEpisodeNumber?: number | null;
		airedSeason?: number | null;
		dvdEpisodeNumber?: number | null;
		dvdSeason?: number | null;
		episodeName?: string | null;
		firstAired?: string | null;
		id?: number | null;
		language?: EpisodeLanguageInfo;
		lastUpdated?: number | null;
		overview?: string | null;
	}
	export interface BasicEpisodeFormProperties {
		absoluteNumber: FormControl<number | null | undefined>,
		airedEpisodeNumber: FormControl<number | null | undefined>,
		airedSeason: FormControl<number | null | undefined>,
		dvdEpisodeNumber: FormControl<number | null | undefined>,
		dvdSeason: FormControl<number | null | undefined>,
		episodeName: FormControl<string | null | undefined>,
		firstAired: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdated: FormControl<number | null | undefined>,
		overview: FormControl<string | null | undefined>,
	}
	export function CreateBasicEpisodeFormGroup() {
		return new FormGroup<BasicEpisodeFormProperties>({
			absoluteNumber: new FormControl<number | null | undefined>(undefined),
			airedEpisodeNumber: new FormControl<number | null | undefined>(undefined),
			airedSeason: new FormControl<number | null | undefined>(undefined),
			dvdEpisodeNumber: new FormControl<number | null | undefined>(undefined),
			dvdSeason: new FormControl<number | null | undefined>(undefined),
			episodeName: new FormControl<string | null | undefined>(undefined),
			firstAired: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<number | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EpisodeLanguageInfo {
		episodeName?: string | null;
		overview?: string | null;
	}
	export interface EpisodeLanguageInfoFormProperties {
		episodeName: FormControl<string | null | undefined>,
		overview: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeLanguageInfoFormGroup() {
		return new FormGroup<EpisodeLanguageInfoFormProperties>({
			episodeName: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Conflict {
		Error?: string | null;
	}
	export interface ConflictFormProperties {
		Error: FormControl<string | null | undefined>,
	}
	export function CreateConflictFormGroup() {
		return new FormGroup<ConflictFormProperties>({
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Episode {
		absoluteNumber?: number | null;
		airedEpisodeNumber?: number | null;
		airedSeason?: number | null;
		airsAfterSeason?: number | null;
		airsBeforeEpisode?: number | null;
		airsBeforeSeason?: number | null;
		director?: string | null;
		directors?: Array<string>;
		dvdChapter?: number | null;
		dvdDiscid?: string | null;
		dvdEpisodeNumber?: number | null;
		dvdSeason?: number | null;
		episodeName?: string | null;
		filename?: string | null;
		firstAired?: string | null;
		guestStars?: Array<string>;
		id?: number | null;
		imdbId?: string | null;
		lastUpdated?: number | null;
		lastUpdatedBy?: string | null;
		overview?: string | null;
		productionCode?: string | null;
		seriesId?: string | null;
		showUrl?: string | null;
		siteRating?: number | null;
		siteRatingCount?: number | null;
		thumbAdded?: string | null;
		thumbAuthor?: number | null;
		thumbHeight?: string | null;
		thumbWidth?: string | null;
		writers?: Array<string>;
	}
	export interface EpisodeFormProperties {
		absoluteNumber: FormControl<number | null | undefined>,
		airedEpisodeNumber: FormControl<number | null | undefined>,
		airedSeason: FormControl<number | null | undefined>,
		airsAfterSeason: FormControl<number | null | undefined>,
		airsBeforeEpisode: FormControl<number | null | undefined>,
		airsBeforeSeason: FormControl<number | null | undefined>,
		director: FormControl<string | null | undefined>,
		dvdChapter: FormControl<number | null | undefined>,
		dvdDiscid: FormControl<string | null | undefined>,
		dvdEpisodeNumber: FormControl<number | null | undefined>,
		dvdSeason: FormControl<number | null | undefined>,
		episodeName: FormControl<string | null | undefined>,
		filename: FormControl<string | null | undefined>,
		firstAired: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		imdbId: FormControl<string | null | undefined>,
		lastUpdated: FormControl<number | null | undefined>,
		lastUpdatedBy: FormControl<string | null | undefined>,
		overview: FormControl<string | null | undefined>,
		productionCode: FormControl<string | null | undefined>,
		seriesId: FormControl<string | null | undefined>,
		showUrl: FormControl<string | null | undefined>,
		siteRating: FormControl<number | null | undefined>,
		siteRatingCount: FormControl<number | null | undefined>,
		thumbAdded: FormControl<string | null | undefined>,
		thumbAuthor: FormControl<number | null | undefined>,
		thumbHeight: FormControl<string | null | undefined>,
		thumbWidth: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeFormGroup() {
		return new FormGroup<EpisodeFormProperties>({
			absoluteNumber: new FormControl<number | null | undefined>(undefined),
			airedEpisodeNumber: new FormControl<number | null | undefined>(undefined),
			airedSeason: new FormControl<number | null | undefined>(undefined),
			airsAfterSeason: new FormControl<number | null | undefined>(undefined),
			airsBeforeEpisode: new FormControl<number | null | undefined>(undefined),
			airsBeforeSeason: new FormControl<number | null | undefined>(undefined),
			director: new FormControl<string | null | undefined>(undefined),
			dvdChapter: new FormControl<number | null | undefined>(undefined),
			dvdDiscid: new FormControl<string | null | undefined>(undefined),
			dvdEpisodeNumber: new FormControl<number | null | undefined>(undefined),
			dvdSeason: new FormControl<number | null | undefined>(undefined),
			episodeName: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			firstAired: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			imdbId: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<number | null | undefined>(undefined),
			lastUpdatedBy: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			productionCode: new FormControl<string | null | undefined>(undefined),
			seriesId: new FormControl<string | null | undefined>(undefined),
			showUrl: new FormControl<string | null | undefined>(undefined),
			siteRating: new FormControl<number | null | undefined>(undefined),
			siteRatingCount: new FormControl<number | null | undefined>(undefined),
			thumbAdded: new FormControl<string | null | undefined>(undefined),
			thumbAuthor: new FormControl<number | null | undefined>(undefined),
			thumbHeight: new FormControl<string | null | undefined>(undefined),
			thumbWidth: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EpisodeDataQueryParams {
		data?: Array<string>;
	}
	export interface EpisodeDataQueryParamsFormProperties {
	}
	export function CreateEpisodeDataQueryParamsFormGroup() {
		return new FormGroup<EpisodeDataQueryParamsFormProperties>({
		});

	}

	export interface EpisodeRecordData {
		data?: Episode;
		errors?: JSONErrors;
	}
	export interface EpisodeRecordDataFormProperties {
	}
	export function CreateEpisodeRecordDataFormGroup() {
		return new FormGroup<EpisodeRecordDataFormProperties>({
		});

	}

	export interface JSONErrors {

		/** Invalid filters passed to route */
		invalidFilters?: Array<string>;

		/** Invalid language or translation missing */
		invalidLanguage?: string | null;

		/** Invalid query params passed to route */
		invalidQueryParams?: Array<string>;
	}
	export interface JSONErrorsFormProperties {

		/** Invalid language or translation missing */
		invalidLanguage: FormControl<string | null | undefined>,
	}
	export function CreateJSONErrorsFormGroup() {
		return new FormGroup<JSONErrorsFormProperties>({
			invalidLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterKeys {
		data?: Array<string>;
	}
	export interface FilterKeysFormProperties {
	}
	export function CreateFilterKeysFormGroup() {
		return new FormGroup<FilterKeysFormProperties>({
		});

	}

	export interface Language {
		abbreviation?: string | null;
		englishName?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface LanguageFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguageData {
		data?: Array<Language>;
	}
	export interface LanguageDataFormProperties {
	}
	export function CreateLanguageDataFormGroup() {
		return new FormGroup<LanguageDataFormProperties>({
		});

	}

	export interface Links {
		first?: number | null;
		last?: number | null;
		next?: number | null;
		previous?: number | null;
	}
	export interface LinksFormProperties {
		first: FormControl<number | null | undefined>,
		last: FormControl<number | null | undefined>,
		next: FormControl<number | null | undefined>,
		previous: FormControl<number | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			first: new FormControl<number | null | undefined>(undefined),
			last: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotAuthorized {
		Error?: string | null;
	}
	export interface NotAuthorizedFormProperties {
		Error: FormControl<string | null | undefined>,
	}
	export function CreateNotAuthorizedFormGroup() {
		return new FormGroup<NotAuthorizedFormProperties>({
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotFound {
		Error?: string | null;
	}
	export interface NotFoundFormProperties {
		Error: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundFormGroup() {
		return new FormGroup<NotFoundFormProperties>({
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Series {
		added?: string | null;
		airsDayOfWeek?: string | null;
		airsTime?: string | null;
		aliases?: Array<string>;
		banner?: string | null;
		firstAired?: string | null;
		genre?: Array<string>;
		id?: number | null;
		imdbId?: string | null;
		lastUpdated?: number | null;
		network?: string | null;
		networkId?: string | null;
		overview?: string | null;
		rating?: string | null;
		runtime?: string | null;
		seriesId?: string | null;
		seriesName?: string | null;
		siteRating?: number | null;
		siteRatingCount?: number | null;
		slug?: string | null;
		status?: string | null;
		zap2itId?: string | null;
	}
	export interface SeriesFormProperties {
		added: FormControl<string | null | undefined>,
		airsDayOfWeek: FormControl<string | null | undefined>,
		airsTime: FormControl<string | null | undefined>,
		banner: FormControl<string | null | undefined>,
		firstAired: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		imdbId: FormControl<string | null | undefined>,
		lastUpdated: FormControl<number | null | undefined>,
		network: FormControl<string | null | undefined>,
		networkId: FormControl<string | null | undefined>,
		overview: FormControl<string | null | undefined>,
		rating: FormControl<string | null | undefined>,
		runtime: FormControl<string | null | undefined>,
		seriesId: FormControl<string | null | undefined>,
		seriesName: FormControl<string | null | undefined>,
		siteRating: FormControl<number | null | undefined>,
		siteRatingCount: FormControl<number | null | undefined>,
		slug: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		zap2itId: FormControl<string | null | undefined>,
	}
	export function CreateSeriesFormGroup() {
		return new FormGroup<SeriesFormProperties>({
			added: new FormControl<string | null | undefined>(undefined),
			airsDayOfWeek: new FormControl<string | null | undefined>(undefined),
			airsTime: new FormControl<string | null | undefined>(undefined),
			banner: new FormControl<string | null | undefined>(undefined),
			firstAired: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			imdbId: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<string | null | undefined>(undefined),
			runtime: new FormControl<string | null | undefined>(undefined),
			seriesId: new FormControl<string | null | undefined>(undefined),
			seriesName: new FormControl<string | null | undefined>(undefined),
			siteRating: new FormControl<number | null | undefined>(undefined),
			siteRatingCount: new FormControl<number | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			zap2itId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesActors {
		data?: Array<SeriesActorsData>;
		errors?: JSONErrors;
	}
	export interface SeriesActorsFormProperties {
	}
	export function CreateSeriesActorsFormGroup() {
		return new FormGroup<SeriesActorsFormProperties>({
		});

	}

	export interface SeriesActorsData {
		id?: number | null;
		image?: string | null;
		imageAdded?: string | null;
		imageAuthor?: number | null;
		lastUpdated?: string | null;
		name?: string | null;
		role?: string | null;
		seriesId?: number | null;
		sortOrder?: number | null;
	}
	export interface SeriesActorsDataFormProperties {
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,
		imageAdded: FormControl<string | null | undefined>,
		imageAuthor: FormControl<number | null | undefined>,
		lastUpdated: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		seriesId: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateSeriesActorsDataFormGroup() {
		return new FormGroup<SeriesActorsDataFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			imageAdded: new FormControl<string | null | undefined>(undefined),
			imageAuthor: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			seriesId: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SeriesData {
		data?: Series;
		errors?: JSONErrors;
	}
	export interface SeriesDataFormProperties {
	}
	export function CreateSeriesDataFormGroup() {
		return new FormGroup<SeriesDataFormProperties>({
		});

	}

	export interface SeriesEpisodes {
		data?: Array<Episode>;
		errors?: JSONErrors;
		links?: Links;
	}
	export interface SeriesEpisodesFormProperties {
	}
	export function CreateSeriesEpisodesFormGroup() {
		return new FormGroup<SeriesEpisodesFormProperties>({
		});

	}

	export interface SeriesEpisodesQuery {
		data?: Array<Episode>;
		errors?: JSONErrors;
		links?: Links;
	}
	export interface SeriesEpisodesQueryFormProperties {
	}
	export function CreateSeriesEpisodesQueryFormGroup() {
		return new FormGroup<SeriesEpisodesQueryFormProperties>({
		});

	}

	export interface SeriesEpisodesQueryParams {
		data?: Array<string>;
	}
	export interface SeriesEpisodesQueryParamsFormProperties {
	}
	export function CreateSeriesEpisodesQueryParamsFormGroup() {
		return new FormGroup<SeriesEpisodesQueryParamsFormProperties>({
		});

	}

	export interface SeriesEpisodesSummary {

		/** Number of all aired episodes for this series */
		airedEpisodes?: string | null;
		airedSeasons?: Array<string>;

		/** Number of all dvd episodes for this series */
		dvdEpisodes?: string | null;
		dvdSeasons?: Array<string>;
	}
	export interface SeriesEpisodesSummaryFormProperties {

		/** Number of all aired episodes for this series */
		airedEpisodes: FormControl<string | null | undefined>,

		/** Number of all dvd episodes for this series */
		dvdEpisodes: FormControl<string | null | undefined>,
	}
	export function CreateSeriesEpisodesSummaryFormGroup() {
		return new FormGroup<SeriesEpisodesSummaryFormProperties>({
			airedEpisodes: new FormControl<string | null | undefined>(undefined),
			dvdEpisodes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesImageQueryResult {
		fileName?: string | null;
		id?: number | null;
		keyType?: string | null;
		languageId?: number | null;
		ratingsInfo?: SeriesImageQueryResultRatingsInfo;
		resolution?: string | null;
		subKey?: string | null;
		thumbnail?: string | null;
	}
	export interface SeriesImageQueryResultFormProperties {
		fileName: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		keyType: FormControl<string | null | undefined>,
		languageId: FormControl<number | null | undefined>,
		resolution: FormControl<string | null | undefined>,
		subKey: FormControl<string | null | undefined>,
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateSeriesImageQueryResultFormGroup() {
		return new FormGroup<SeriesImageQueryResultFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			keyType: new FormControl<string | null | undefined>(undefined),
			languageId: new FormControl<number | null | undefined>(undefined),
			resolution: new FormControl<string | null | undefined>(undefined),
			subKey: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesImageQueryResultRatingsInfo {

		/** Average rating for the given record. */
		average?: number | null;

		/** Number of ratings for the given record. */
		count?: number | null;
	}
	export interface SeriesImageQueryResultRatingsInfoFormProperties {

		/** Average rating for the given record. */
		average: FormControl<number | null | undefined>,

		/** Number of ratings for the given record. */
		count: FormControl<number | null | undefined>,
	}
	export function CreateSeriesImageQueryResultRatingsInfoFormGroup() {
		return new FormGroup<SeriesImageQueryResultRatingsInfoFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SeriesImageQueryResults {
		data?: Array<SeriesImageQueryResult>;
		errors?: JSONErrors;
	}
	export interface SeriesImageQueryResultsFormProperties {
	}
	export function CreateSeriesImageQueryResultsFormGroup() {
		return new FormGroup<SeriesImageQueryResultsFormProperties>({
		});

	}

	export interface SeriesImagesCount {
		fanart?: number | null;
		poster?: number | null;
		season?: number | null;
		seasonwide?: number | null;
		series?: number | null;
	}
	export interface SeriesImagesCountFormProperties {
		fanart: FormControl<number | null | undefined>,
		poster: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
		seasonwide: FormControl<number | null | undefined>,
		series: FormControl<number | null | undefined>,
	}
	export function CreateSeriesImagesCountFormGroup() {
		return new FormGroup<SeriesImagesCountFormProperties>({
			fanart: new FormControl<number | null | undefined>(undefined),
			poster: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			seasonwide: new FormControl<number | null | undefined>(undefined),
			series: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SeriesImagesCounts {
		data?: SeriesImagesCount;
	}
	export interface SeriesImagesCountsFormProperties {
	}
	export function CreateSeriesImagesCountsFormGroup() {
		return new FormGroup<SeriesImagesCountsFormProperties>({
		});

	}

	export interface SeriesImagesQueryParam {
		keyType?: string | null;
		languageId?: string | null;
		resolution?: Array<string>;
		subKey?: Array<string>;
	}
	export interface SeriesImagesQueryParamFormProperties {
		keyType: FormControl<string | null | undefined>,
		languageId: FormControl<string | null | undefined>,
	}
	export function CreateSeriesImagesQueryParamFormGroup() {
		return new FormGroup<SeriesImagesQueryParamFormProperties>({
			keyType: new FormControl<string | null | undefined>(undefined),
			languageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesImagesQueryParams {
		data?: Array<SeriesImagesQueryParam>;
	}
	export interface SeriesImagesQueryParamsFormProperties {
	}
	export function CreateSeriesImagesQueryParamsFormGroup() {
		return new FormGroup<SeriesImagesQueryParamsFormProperties>({
		});

	}

	export interface SeriesSearchResult {
		aliases?: Array<string>;
		banner?: string | null;
		firstAired?: string | null;
		id?: number | null;
		network?: string | null;
		overview?: string | null;
		seriesName?: string | null;
		slug?: string | null;
		status?: string | null;
	}
	export interface SeriesSearchResultFormProperties {
		banner: FormControl<string | null | undefined>,
		firstAired: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		network: FormControl<string | null | undefined>,
		overview: FormControl<string | null | undefined>,
		seriesName: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateSeriesSearchResultFormGroup() {
		return new FormGroup<SeriesSearchResultFormProperties>({
			banner: new FormControl<string | null | undefined>(undefined),
			firstAired: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			seriesName: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesSearchResults {
		data?: Array<SeriesSearchResult>;
	}
	export interface SeriesSearchResultsFormProperties {
	}
	export function CreateSeriesSearchResultsFormGroup() {
		return new FormGroup<SeriesSearchResultsFormProperties>({
		});

	}

	export interface Token {
		token?: string | null;
	}
	export interface TokenFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Update {
		id?: number | null;
		lastUpdated?: number | null;
	}
	export interface UpdateFormProperties {
		id: FormControl<number | null | undefined>,
		lastUpdated: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFormGroup() {
		return new FormGroup<UpdateFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateData {
		data?: Array<Update>;
		errors?: JSONErrors;
	}
	export interface UpdateDataFormProperties {
	}
	export function CreateUpdateDataFormGroup() {
		return new FormGroup<UpdateDataFormProperties>({
		});

	}

	export interface UpdateDataQueryParams {
		data?: Array<string>;
	}
	export interface UpdateDataQueryParamsFormProperties {
	}
	export function CreateUpdateDataQueryParamsFormGroup() {
		return new FormGroup<UpdateDataQueryParamsFormProperties>({
		});

	}

	export interface User {
		favoritesDisplaymode?: string | null;
		language?: string | null;
		userName?: string | null;
	}
	export interface UserFormProperties {
		favoritesDisplaymode: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			favoritesDisplaymode: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserData {
		data?: User;
	}
	export interface UserDataFormProperties {
	}
	export function CreateUserDataFormGroup() {
		return new FormGroup<UserDataFormProperties>({
		});

	}

	export interface UserFavorites {
		favorites?: Array<string>;
	}
	export interface UserFavoritesFormProperties {
	}
	export function CreateUserFavoritesFormGroup() {
		return new FormGroup<UserFavoritesFormProperties>({
		});

	}

	export interface UserFavoritesData {
		data?: UserFavorites;
		errors?: JSONErrors;
	}
	export interface UserFavoritesDataFormProperties {
	}
	export function CreateUserFavoritesDataFormGroup() {
		return new FormGroup<UserFavoritesDataFormProperties>({
		});

	}

	export interface UserRatings {
		rating?: number | null;
		ratingItemId?: number | null;
		ratingType?: string | null;
	}
	export interface UserRatingsFormProperties {
		rating: FormControl<number | null | undefined>,
		ratingItemId: FormControl<number | null | undefined>,
		ratingType: FormControl<string | null | undefined>,
	}
	export function CreateUserRatingsFormGroup() {
		return new FormGroup<UserRatingsFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined),
			ratingItemId: new FormControl<number | null | undefined>(undefined),
			ratingType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserRatingsData {
		data?: Array<UserRatings>;
		errors?: JSONErrors;
		links?: Links;
	}
	export interface UserRatingsDataFormProperties {
	}
	export function CreateUserRatingsDataFormGroup() {
		return new FormGroup<UserRatingsDataFormProperties>({
		});

	}

	export interface UserRatingsDataNoLinks {
		data?: Array<UserRatings>;
	}
	export interface UserRatingsDataNoLinksFormProperties {
	}
	export function CreateUserRatingsDataNoLinksFormGroup() {
		return new FormGroup<UserRatingsDataNoLinksFormProperties>({
		});

	}

	export interface UserRatingsDataNoLinksEmptyArray {
		data?: Array<string>;
	}
	export interface UserRatingsDataNoLinksEmptyArrayFormProperties {
	}
	export function CreateUserRatingsDataNoLinksEmptyArrayFormGroup() {
		return new FormGroup<UserRatingsDataNoLinksEmptyArrayFormProperties>({
		});

	}

	export interface UserRatingsQueryParams {
		data?: Array<string>;
	}
	export interface UserRatingsQueryParamsFormProperties {
	}
	export function CreateUserRatingsQueryParamsFormGroup() {
		return new FormGroup<UserRatingsQueryParamsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the full information for a given episode id. __Deprecation Warning:__ The _director_ key will be deprecated in favor of the new _directors_ key in a future release.
		 * Get episodes/{id}
		 * @param {number} id ID of the episode
		 * @return {EpisodeRecordData} An array of query keys as strings
		 */
		Episodes_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<EpisodeRecordData> {
			return this.http.get<EpisodeRecordData>(this.baseUri + 'episodes/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * All available languages. These language abbreviations can be used in the `Accept-Language` header for routes that return translation records.
		 * Get languages
		 * @return {LanguageData} An array of language objects.
		 */
		LanguagesGet(headersHandler?: () => HttpHeaders): Observable<LanguageData> {
			return this.http.get<LanguageData>(this.baseUri + 'languages', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Information about a particular language, given the language ID.
		 * Get languages/{id}
		 * @param {string} id ID of the language
		 * @return {Language} An array of language objects.
		 */
		Languages_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Language> {
			return this.http.get<Language>(this.baseUri + 'languages/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a session token to be included in the rest of the requests. Note that API key authentication is required for all subsequent requests and user auth is required for routes in the `User` section
		 * Post login
		 * @param {Auth} requestBody JSON string containing your authentication details.
		 * @return {Token} Returns a JWT token for use with the rest of the API routes
		 */
		LoginPost(requestBody: Auth, headersHandler?: () => HttpHeaders): Observable<Token> {
			return this.http.post<Token>(this.baseUri + 'login', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Refreshes your current, valid JWT token and returns a new token. Hit this route so that you do not have to post to `/login` with your API key and credentials once you have already been authenticated.
		 * Get refresh_token
		 * @return {Token} Returns a new token to use in your subsequent requests
		 */
		Refresh_tokenGet(headersHandler?: () => HttpHeaders): Observable<Token> {
			return this.http.get<Token>(this.baseUri + 'refresh_token', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Allows the user to search for a series based on the following parameters.
		 * Get search/series
		 * @param {string} name Name of the series to search for.
		 * @param {string} imdbId IMDB id of the series
		 * @param {string} zap2itId Zap2it ID of the series to search for.
		 * @param {string} slug Slug from site URL of series (https://www.thetvdb.com/series/$SLUG)
		 * @return {SeriesSearchResults} An array of results that match the provided query.
		 */
		SearchSeriesGetByNameAndImdbIdAndZap2itIdAndSlug(name: string | null | undefined, imdbId: string | null | undefined, zap2itId: string | null | undefined, slug: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<SeriesSearchResults> {
			return this.http.get<SeriesSearchResults>(this.baseUri + 'search/series?name=' + (name == null ? '' : encodeURIComponent(name)) + '&imdbId=' + (imdbId == null ? '' : encodeURIComponent(imdbId)) + '&zap2itId=' + (zap2itId == null ? '' : encodeURIComponent(zap2itId)) + '&slug=' + (slug == null ? '' : encodeURIComponent(slug)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of parameters to query by in the `/search/series` route.
		 * Get search/series/params
		 * @return {EpisodeDataQueryParams} An array of query keys as strings
		 */
		SearchSeriesParamsGet(headersHandler?: () => HttpHeaders): Observable<EpisodeDataQueryParams> {
			return this.http.get<EpisodeDataQueryParams>(this.baseUri + 'search/series/params', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a series records that contains all information known about a particular series id.
		 * Get series/{id}
		 * @param {number} id ID of the series
		 * @return {SeriesData} A series record.
		 */
		Series_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<SeriesData> {
			return this.http.get<SeriesData>(this.baseUri + 'series/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns actors for the given series id
		 * Get series/{id}/actors
		 * @param {number} id ID of the series
		 * @return {SeriesActors} An array of actor objects for the given series id.
		 */
		Series_idActorsGet(id: number, headersHandler?: () => HttpHeaders): Observable<SeriesActors> {
			return this.http.get<SeriesActors>(this.baseUri + 'series/' + id + '/actors', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * All episodes for a given series. Paginated with 100 results per page.
		 * Get series/{id}/episodes
		 * @param {number} id ID of the series
		 * @param {string} page Page of results to fetch. Defaults to page 1 if not provided.
		 * @return {SeriesEpisodes} An array of episode objects for the given series id.
		 */
		Series_idEpisodesGetByPage(id: number, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<SeriesEpisodes> {
			return this.http.get<SeriesEpisodes>(this.baseUri + 'series/' + id + '/episodes?page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * This route allows the user to query against episodes for the given series. The response is a paginated array of episode records.
		 * Get series/{id}/episodes/query
		 * @param {number} id ID of the series
		 * @param {string} absoluteNumber Absolute number of the episode
		 * @param {string} airedSeason Aired season number
		 * @param {string} airedEpisode Aired episode number
		 * @param {string} dvdSeason DVD season number
		 * @param {string} dvdEpisode DVD episode number
		 * @param {string} imdbId IMDB id of the series
		 * @param {string} page Page of results to fetch. Defaults to page 1 if not provided.
		 * @return {SeriesEpisodesQuery} An array of basic Episode results that matched the query
		 */
		Series_idEpisodesQueryGetByAbsoluteNumberAndAiredSeasonAndAiredEpisodeAndDvdSeasonAndDvdEpisodeAndImdbIdAndPage(id: number, absoluteNumber: string | null | undefined, airedSeason: string | null | undefined, airedEpisode: string | null | undefined, dvdSeason: string | null | undefined, dvdEpisode: string | null | undefined, imdbId: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<SeriesEpisodesQuery> {
			return this.http.get<SeriesEpisodesQuery>(this.baseUri + 'series/' + id + '/episodes/query?absoluteNumber=' + (absoluteNumber == null ? '' : encodeURIComponent(absoluteNumber)) + '&airedSeason=' + (airedSeason == null ? '' : encodeURIComponent(airedSeason)) + '&airedEpisode=' + (airedEpisode == null ? '' : encodeURIComponent(airedEpisode)) + '&dvdSeason=' + (dvdSeason == null ? '' : encodeURIComponent(dvdSeason)) + '&dvdEpisode=' + (dvdEpisode == null ? '' : encodeURIComponent(dvdEpisode)) + '&imdbId=' + (imdbId == null ? '' : encodeURIComponent(imdbId)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the allowed query keys for the `/series/{id}/episodes/query` route
		 * Get series/{id}/episodes/query/params
		 * @param {number} id ID of the series
		 * @return {SeriesEpisodesQueryParams} An array of query keys as strings
		 */
		Series_idEpisodesQueryParamsGet(id: number, headersHandler?: () => HttpHeaders): Observable<SeriesEpisodesQueryParams> {
			return this.http.get<SeriesEpisodesQueryParams>(this.baseUri + 'series/' + id + '/episodes/query/params', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a summary of the episodes and seasons available for the series.
		 * __Note__: Season "0" is for all episodes that are considered to be specials.
		 * Get series/{id}/episodes/summary
		 * @param {number} id ID of the series
		 * @return {SeriesEpisodesSummary} A summary of the episodes and seasons avaialable for the given series.
		 */
		Series_idEpisodesSummaryGet(id: number, headersHandler?: () => HttpHeaders): Observable<SeriesEpisodesSummary> {
			return this.http.get<SeriesEpisodesSummary>(this.baseUri + 'series/' + id + '/episodes/summary', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a series records, filtered by the supplied comma-separated list of keys. Query keys can be found at the `/series/{id}/filter/params` route.
		 * Get series/{id}/filter
		 * @param {number} id ID of the series
		 * @param {string} keys Comma-separated list of keys to filter by
		 * @return {SeriesData} A filtered series record
		 */
		Series_idFilterGetByKeys(id: number, keys: string, headersHandler?: () => HttpHeaders): Observable<SeriesData> {
			return this.http.get<SeriesData>(this.baseUri + 'series/' + id + '/filter?keys=' + (keys == null ? '' : encodeURIComponent(keys)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the list of keys available for the `/series/{id}/filter` route
		 * Get series/{id}/filter/params
		 * @param {number} id ID of the series
		 * @return {FilterKeys} A list of keys to filter by
		 */
		Series_idFilterParamsGet(id: number, headersHandler?: () => HttpHeaders): Observable<FilterKeys> {
			return this.http.get<FilterKeys>(this.baseUri + 'series/' + id + '/filter/params', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a summary of the images for a particular series
		 * Get series/{id}/images
		 * @param {number} id ID of the series
		 * @return {SeriesImagesCounts} A summary of the image types and counts available for the given series.
		 */
		Series_idImagesGet(id: number, headersHandler?: () => HttpHeaders): Observable<SeriesImagesCounts> {
			return this.http.get<SeriesImagesCounts>(this.baseUri + 'series/' + id + '/images', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Query images for the given series ID.
		 * Get series/{id}/images/query
		 * @param {number} id ID of the series
		 * @param {string} keyType Type of image you're querying for (fanart, poster, etc. See ../images/query/params for more details).
		 * @param {string} resolution Resolution to filter by (1280x1024, for example)
		 * @param {string} subKey Subkey for the above query keys. See /series/{id}/images/query/params for more information
		 * @return {SeriesImageQueryResults} An array of basic Episode results that matched the query
		 */
		Series_idImagesQueryGetByKeyTypeAndResolutionAndSubKey(id: number, keyType: string | null | undefined, resolution: string | null | undefined, subKey: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<SeriesImageQueryResults> {
			return this.http.get<SeriesImageQueryResults>(this.baseUri + 'series/' + id + '/images/query?keyType=' + (keyType == null ? '' : encodeURIComponent(keyType)) + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&subKey=' + (subKey == null ? '' : encodeURIComponent(subKey)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the allowed query keys for the `/series/{id}/images/query` route. Contains a parameter record for each unique `keyType`, listing values that will return results.
		 * Get series/{id}/images/query/params
		 * @param {number} id ID of the series
		 * @return {SeriesImagesQueryParams} An array of query keys as strings
		 */
		Series_idImagesQueryParamsGet(id: number, headersHandler?: () => HttpHeaders): Observable<SeriesImagesQueryParams> {
			return this.http.get<SeriesImagesQueryParams>(this.baseUri + 'series/' + id + '/images/query/params', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of series that have changed in a maximum of one week blocks since the provided `fromTime`.
		 * The user may specify a `toTime` to grab results for less than a week. Any timespan larger than a week will be reduced down to one week automatically.
		 * Get updated/query
		 * @param {string} fromTime Epoch time to start your date range.
		 * @param {string} toTime Epoch time to end your date range. Must be one week from `fromTime`.
		 * @return {UpdateData} An array of Update objects that match the given timeframe.
		 */
		UpdatedQueryGetByFromTimeAndToTime(fromTime: string, toTime: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UpdateData> {
			return this.http.get<UpdateData>(this.baseUri + 'updated/query?fromTime=' + (fromTime == null ? '' : encodeURIComponent(fromTime)) + '&toTime=' + (toTime == null ? '' : encodeURIComponent(toTime)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of valid query keys for the `/updated/query/params` route.
		 * Get updated/query/params
		 * @return {UpdateDataQueryParams} An array of Update objects that match the given timeframe.
		 */
		UpdatedQueryParamsGet(headersHandler?: () => HttpHeaders): Observable<UpdateDataQueryParams> {
			return this.http.get<UpdateDataQueryParams>(this.baseUri + 'updated/query/params', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns basic information about the currently authenticated user.
		 * Get user
		 * @return {UserData} User information.
		 */
		UserGet(headersHandler?: () => HttpHeaders): Observable<UserData> {
			return this.http.get<UserData>(this.baseUri + 'user', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of favorite series for a given user, will be a blank array if no favorites exist.
		 * Get user/favorites
		 * @return {UserFavoritesData} User favorites.
		 */
		UserFavoritesGet(headersHandler?: () => HttpHeaders): Observable<UserFavoritesData> {
			return this.http.get<UserFavoritesData>(this.baseUri + 'user/favorites', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds the supplied series ID to the user’s favorite’s list and returns the updated list.
		 * Put user/favorites/{id}
		 * @param {number} id ID of the series
		 * @return {UserFavoritesData} List of user favorites.
		 */
		UserFavorites_idPut(id: number, headersHandler?: () => HttpHeaders): Observable<UserFavoritesData> {
			return this.http.put<UserFavoritesData>(this.baseUri + 'user/favorites/' + id, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the given series ID from the user’s favorite’s list and returns the updated list.
		 * Delete user/favorites/{id}
		 * @param {number} id ID of the series
		 * @return {UserFavoritesData} List of user favorites.
		 */
		UserFavorites_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<UserFavoritesData> {
			return this.http.delete<UserFavoritesData>(this.baseUri + 'user/favorites/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of ratings for the given user.
		 * Get user/ratings
		 * @return {UserRatingsData} Array of user ratings.
		 */
		UserRatingsGet(headersHandler?: () => HttpHeaders): Observable<UserRatingsData> {
			return this.http.get<UserRatingsData>(this.baseUri + 'user/ratings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of ratings for a given user that match the query.
		 * Get user/ratings/query
		 * @param {string} itemType Item to query. Can be either 'series', 'episode', or 'banner'
		 * @return {UserRatingsData} List of user ratings that match the given query.
		 */
		UserRatingsQueryGetByItemType(itemType: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserRatingsData> {
			return this.http.get<UserRatingsData>(this.baseUri + 'user/ratings/query?itemType=' + (itemType == null ? '' : encodeURIComponent(itemType)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of query params for use in the `/user/ratings/query` route.
		 * Get user/ratings/query/params
		 * @return {UserRatingsQueryParams} Parameters to use for querying.
		 */
		UserRatingsQueryParamsGet(headersHandler?: () => HttpHeaders): Observable<UserRatingsQueryParams> {
			return this.http.get<UserRatingsQueryParams>(this.baseUri + 'user/ratings/query/params', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * This route deletes a given rating of a given type.
		 * Delete user/ratings/{itemType}/{itemId}
		 * @param {string} itemType Item to update. Can be either 'series', 'episode', or 'image'
		 * @param {number} itemId ID of the ratings record that you wish to modify
		 * @return {UserRatingsDataNoLinksEmptyArray} Returns OK if the delete was successful
		 */
		UserRatings_itemType_itemIdDelete(itemType: string, itemId: number, headersHandler?: () => HttpHeaders): Observable<UserRatingsDataNoLinksEmptyArray> {
			return this.http.delete<UserRatingsDataNoLinksEmptyArray>(this.baseUri + 'user/ratings/' + (itemType == null ? '' : encodeURIComponent(itemType)) + '/' + itemId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * This route updates a given rating of a given type.
		 * Put user/ratings/{itemType}/{itemId}/{itemRating}
		 * @param {string} itemType Item to update. Can be either 'series', 'episode', or 'image'
		 * @param {number} itemId ID of the ratings record that you wish to modify
		 * @param {number} itemRating The updated rating number
		 * @return {UserRatingsDataNoLinks} Update OK if the update was successful
		 */
		UserRatings_itemType_itemId_itemRatingPut(itemType: string, itemId: number, itemRating: number, headersHandler?: () => HttpHeaders): Observable<UserRatingsDataNoLinks> {
			return this.http.put<UserRatingsDataNoLinks>(this.baseUri + 'user/ratings/' + (itemType == null ? '' : encodeURIComponent(itemType)) + '/' + itemId + '/' + itemRating, null, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

