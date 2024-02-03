import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Country model */
	export interface Country {
		iso?: string | null;
		iso3?: string | null;
		name?: string | null;
	}

	/** Country model */
	export interface CountryFormProperties {
		iso: FormControl<string | null | undefined>,
		iso3: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			iso: new FormControl<string | null | undefined>(undefined),
			iso3: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Language model */
	export interface Language {
		name?: string | null;
	}

	/** Language model */
	export interface LanguageFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Podcast model */
	export interface Podcast {
		author?: string | null;
		block?: boolean | null;

		/** Required */
		categories: Array<string>;
		copyright?: string | null;
		country?: string | null;

		/** Required */
		description: string;
		explicit?: boolean | null;
		image?: string | null;
		key?: string | null;
		keywords?: Array<string>;

		/** Required */
		language: string;
		link?: string | null;
		ownerEmail?: string | null;
		ownerName?: string | null;
		showType?: string | null;
		subtitle?: string | null;

		/** Required */
		summary: string;

		/** Required */
		title: string;
	}

	/** Podcast model */
	export interface PodcastFormProperties {
		author: FormControl<string | null | undefined>,
		block: FormControl<boolean | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
		explicit: FormControl<boolean | null | undefined>,
		image: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		ownerEmail: FormControl<string | null | undefined>,
		ownerName: FormControl<string | null | undefined>,
		showType: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,

		/** Required */
		summary: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePodcastFormGroup() {
		return new FormGroup<PodcastFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			block: new FormControl<boolean | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			explicit: new FormControl<boolean | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
			ownerEmail: new FormControl<string | null | undefined>(undefined),
			ownerName: new FormControl<string | null | undefined>(undefined),
			showType: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** PodcastCategory model */
	export interface PodcastCategory {
		id?: string | null;
		parent?: string | null;
		text?: string | null;
	}

	/** PodcastCategory model */
	export interface PodcastCategoryFormProperties {
		id: FormControl<string | null | undefined>,
		parent: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreatePodcastCategoryFormGroup() {
		return new FormGroup<PodcastCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PodcastEpisode model */
	export interface PodcastEpisode {
		author?: string | null;
		block?: boolean | null;

		/** Required */
		description: string;
		duration?: number | null;
		episode?: number | null;
		episodeType?: string | null;
		explicit?: boolean | null;
		fileUrl?: string | null;
		image?: string | null;
		key?: string | null;
		link?: string | null;

		/** Required */
		publishDate: Date;
		season?: number | null;
		size?: number | null;
		subtitle?: string | null;

		/** Required */
		summary: string;
		tags?: Array<string>;

		/** Required */
		title: string;
	}

	/** PodcastEpisode model */
	export interface PodcastEpisodeFormProperties {
		author: FormControl<string | null | undefined>,
		block: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
		duration: FormControl<number | null | undefined>,
		episode: FormControl<number | null | undefined>,
		episodeType: FormControl<string | null | undefined>,
		explicit: FormControl<boolean | null | undefined>,
		fileUrl: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** Required */
		publishDate: FormControl<Date | null | undefined>,
		season: FormControl<number | null | undefined>,
		size: FormControl<number | null | undefined>,
		subtitle: FormControl<string | null | undefined>,

		/** Required */
		summary: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePodcastEpisodeFormGroup() {
		return new FormGroup<PodcastEpisodeFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			block: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined),
			episode: new FormControl<number | null | undefined>(undefined),
			episodeType: new FormControl<string | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined),
			fileUrl: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			season: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of PodcastEpisode */
	export interface PodcastEpisodeList {
		items?: Array<PodcastEpisode>;
		total?: number | null;
	}

	/** List of PodcastEpisode */
	export interface PodcastEpisodeListFormProperties {
		total: FormControl<number | null | undefined>,
	}
	export function CreatePodcastEpisodeListFormGroup() {
		return new FormGroup<PodcastEpisodeListFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filters for podcast search */
	export interface PodcastFilters {
		category?: Array<string>;
		country?: Array<string>;
		language?: Array<string>;
		podcastType?: PodcastFiltersPodcastType | null;
	}

	/** Filters for podcast search */
	export interface PodcastFiltersFormProperties {
		podcastType: FormControl<PodcastFiltersPodcastType | null | undefined>,
	}
	export function CreatePodcastFiltersFormGroup() {
		return new FormGroup<PodcastFiltersFormProperties>({
			podcastType: new FormControl<PodcastFiltersPodcastType | null | undefined>(undefined),
		});

	}

	export enum PodcastFiltersPodcastType { podcasts = 'podcasts', shows = 'shows' }


	/** Podcast search params */
	export interface PodcastSearchParams {

		/** Filters for podcast search */
		filters?: PodcastFilters;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		hitsPerPage?: number | null;

		/** Minimum: 1 */
		page?: number | null;
		query?: string | null;
	}

	/** Podcast search params */
	export interface PodcastSearchParamsFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		hitsPerPage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		page: FormControl<number | null | undefined>,
		query: FormControl<string | null | undefined>,
	}
	export function CreatePodcastSearchParamsFormGroup() {
		return new FormGroup<PodcastSearchParamsFormProperties>({
			hitsPerPage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Podcast search results */
	export interface PodcastSearchResults {
		hits?: Array<Podcast>;
		total?: number | null;
	}

	/** Podcast search results */
	export interface PodcastSearchResultsFormProperties {
		total: FormControl<number | null | undefined>,
	}
	export function CreatePodcastSearchResultsFormGroup() {
		return new FormGroup<PodcastSearchResultsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Station model */
	export interface Station {
		city?: string | null;
		country?: string | null;
		description?: string | null;
		genre?: string | null;
		key?: string | null;
		language?: string | null;
		logo?: string | null;
		name?: string | null;
		stream?: string | null;
		website?: string | null;
	}

	/** Station model */
	export interface StationFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		genre: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		stream: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateStationFormGroup() {
		return new FormGroup<StationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			genre: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stream: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters for station search */
	export interface StationFilters {
		country?: Array<string>;
		genre?: Array<string>;
		language?: Array<string>;
	}

	/** Filters for station search */
	export interface StationFiltersFormProperties {
	}
	export function CreateStationFiltersFormGroup() {
		return new FormGroup<StationFiltersFormProperties>({
		});

	}


	/** StationGenre model */
	export interface StationGenre {
		name?: string | null;
	}

	/** StationGenre model */
	export interface StationGenreFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateStationGenreFormGroup() {
		return new FormGroup<StationGenreFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Station */
	export interface StationList {
		items?: Array<Station>;
		total?: number | null;
	}

	/** List of Station */
	export interface StationListFormProperties {
		total: FormControl<number | null | undefined>,
	}
	export function CreateStationListFormGroup() {
		return new FormGroup<StationListFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Station search params */
	export interface StationSearchParams {

		/** Filters for station search */
		filters?: StationFilters;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		hitsPerPage?: number | null;

		/** Minimum: 1 */
		page?: number | null;
		query?: string | null;
	}

	/** Station search params */
	export interface StationSearchParamsFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		hitsPerPage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		page: FormControl<number | null | undefined>,
		query: FormControl<string | null | undefined>,
	}
	export function CreateStationSearchParamsFormGroup() {
		return new FormGroup<StationSearchParamsFormProperties>({
			hitsPerPage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Station search results */
	export interface StationSearchResults {
		hits?: Array<Station>;
		total?: number | null;
	}

	/** Station search results */
	export interface StationSearchResultsFormProperties {
		total: FormControl<number | null | undefined>,
	}
	export function CreateStationSearchResultsFormGroup() {
		return new FormGroup<StationSearchResultsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of Categories that can be used to filter podcasts in the search podcasts request
		 * Get api/v2/podcasts/categories
		 * @return {void} OK
		 */
		GetPodcastCategories(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/podcasts/categories', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of Countries that can be used to filter podcasts in the search podcasts request
		 * Get api/v2/podcasts/countries
		 * @return {void} OK
		 */
		GetPodcastCountries(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/podcasts/countries', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of Languages that can be used to filter podcasts in the search podcasts request
		 * Get api/v2/podcasts/languages
		 * @return {void} OK
		 */
		GetPodcastLanguages(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/podcasts/languages', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search podcasts
		 * Post api/v2/podcasts/search
		 * @return {void} OK
		 */
		SearchPodcasts(requestBody: PodcastSearchParams): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/podcasts/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete podcast
		 * Delete api/v2/podcasts/{podcastKey}
		 * @return {void} OK
		 */
		DeletePodcast(podcastKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/podcasts/' + (podcastKey == null ? '' : encodeURIComponent(podcastKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get podcast
		 * Get api/v2/podcasts/{podcastKey}
		 * @return {void} OK
		 */
		GetPodcast(podcastKey: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/podcasts/' + (podcastKey == null ? '' : encodeURIComponent(podcastKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get podcast episodes
		 * Get api/v2/podcasts/{podcastKey}/episodes
		 * @return {void} OK
		 */
		GetPodcastEpisodes(podcastKey: string, limit: string | null | undefined, offset: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/podcasts/' + (podcastKey == null ? '' : encodeURIComponent(podcastKey)) + '/episodes&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete podcast episode
		 * Delete api/v2/podcasts/{podcastKey}/episodes/{episodeKey}
		 * @return {void} OK
		 */
		DeletePodcast_1(podcastKey: string, episodeKey: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/podcasts/' + (podcastKey == null ? '' : encodeURIComponent(podcastKey)) + '/episodes/' + (episodeKey == null ? '' : encodeURIComponent(episodeKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get podcast episode
		 * Get api/v2/podcasts/{podcastKey}/episodes/{episodeKey}
		 * @return {void} OK
		 */
		GetPodcastEpisode(podcastKey: string, episodeKey: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/podcasts/' + (podcastKey == null ? '' : encodeURIComponent(podcastKey)) + '/episodes/' + (episodeKey == null ? '' : encodeURIComponent(episodeKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of Countries that can be used to filter stations in the search stations request
		 * Get api/v2/stations/countries
		 * @return {void} OK
		 */
		GetStationCountries(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/stations/countries', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of Genres that can be used to filter stations in the search stations request
		 * Get api/v2/stations/genres
		 * @return {void} OK
		 */
		GetStationGenres(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/stations/genres', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of Languages that can be used to filter stations in the search stations request
		 * Get api/v2/stations/languages
		 * @return {void} OK
		 */
		GetStationLanguages(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/stations/languages', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List stations
		 * Get api/v2/stations/list
		 * @return {void} OK
		 */
		GetPartnerAggregatorStations(page: string | null | undefined, hitsPerPage: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/stations/list?page=' + (page == null ? '' : encodeURIComponent(page)) + '&hitsPerPage=' + (hitsPerPage == null ? '' : encodeURIComponent(hitsPerPage)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search stations
		 * Post api/v2/stations/search
		 * @return {void} OK
		 */
		SearchStations(requestBody: StationSearchParams): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/stations/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

