import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BaseIndexResponse {
		_links?: BaseIndexResponse_links;
		_meta?: Pagination;
	}
	export interface BaseIndexResponseFormProperties {
	}
	export function CreateBaseIndexResponseFormGroup() {
		return new FormGroup<BaseIndexResponseFormProperties>({
		});

	}

	export interface BaseIndexResponse_links {
		self?: Link;
	}
	export interface BaseIndexResponse_linksFormProperties {
	}
	export function CreateBaseIndexResponse_linksFormGroup() {
		return new FormGroup<BaseIndexResponse_linksFormProperties>({
		});

	}

	export interface Link {
		href?: string | null;
	}
	export interface LinkFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pagination {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		currentPage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		perPage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount?: number | null;
	}
	export interface PaginationFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		currentPage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		perPage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			currentPage: new FormControl<number | null | undefined>(undefined),
			pageCount: new FormControl<number | null | undefined>(undefined),
			perPage: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Error {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		message?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		type?: string | null;
	}
	export interface ErrorFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Persona` object describes a radio DJ/host. One person can have multiple personas */
	export interface Persona {
		_links?: Persona_links;

		/** HTML-formatted biography */
		bio?: string | null;

		/** DJ/host's email address */
		email?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;

		/** On-air DJ/host name */
		name?: string | null;

		/** Since what year has the DJ/host been at the station? */
		since?: string | null;

		/** URL to web site for the DJ/host */
		website?: string | null;
	}

	/** The `Persona` object describes a radio DJ/host. One person can have multiple personas */
	export interface PersonaFormProperties {

		/** HTML-formatted biography */
		bio: FormControl<string | null | undefined>,

		/** DJ/host's email address */
		email: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** On-air DJ/host name */
		name: FormControl<string | null | undefined>,

		/** Since what year has the DJ/host been at the station? */
		since: FormControl<string | null | undefined>,

		/** URL to web site for the DJ/host */
		website: FormControl<string | null | undefined>,
	}
	export function CreatePersonaFormGroup() {
		return new FormGroup<PersonaFormProperties>({
			bio: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			since: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Persona_links {
		self?: Link;
		shows?: Array<Link>;
	}
	export interface Persona_linksFormProperties {
	}
	export function CreatePersona_linksFormGroup() {
		return new FormGroup<Persona_linksFormProperties>({
		});

	}

	export interface Playlist {
		_links?: Playlist_links;

		/** Was the playlist created playlists created by a radio station automation system? */
		automation?: boolean | null;

		/** Program/show category */
		category?: string | null;

		/** HTML-formatted description of the playlist or program/show */
		description?: string | null;

		/**
		 * Duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** UTC datetime ISO-8601 */
		end?: Date | null;

		/** HTML-formatted description of the episode */
		episode_description?: string | null;

		/** Title of this episode of the program/show */
		episode_name?: string | null;

		/** Should the client application hide information about the playlist's DJ/host? */
		hide_dj?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		persona_id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id?: number | null;

		/** Since what year has the program/show existed? */
		since?: string | null;

		/** UTC datetime ISO-8601 */
		start?: Date | null;

		/** Station's time zone */
		timezone?: string | null;

		/** Program/show title */
		title?: string | null;

		/** URL to web site for the playlist or program/show */
		url?: string | null;
	}
	export interface PlaylistFormProperties {

		/** Was the playlist created playlists created by a radio station automation system? */
		automation: FormControl<boolean | null | undefined>,

		/** Program/show category */
		category: FormControl<string | null | undefined>,

		/** HTML-formatted description of the playlist or program/show */
		description: FormControl<string | null | undefined>,

		/**
		 * Duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** UTC datetime ISO-8601 */
		end: FormControl<Date | null | undefined>,

		/** HTML-formatted description of the episode */
		episode_description: FormControl<string | null | undefined>,

		/** Title of this episode of the program/show */
		episode_name: FormControl<string | null | undefined>,

		/** Should the client application hide information about the playlist's DJ/host? */
		hide_dj: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		persona_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id: FormControl<number | null | undefined>,

		/** Since what year has the program/show existed? */
		since: FormControl<string | null | undefined>,

		/** UTC datetime ISO-8601 */
		start: FormControl<Date | null | undefined>,

		/** Station's time zone */
		timezone: FormControl<string | null | undefined>,

		/** Program/show title */
		title: FormControl<string | null | undefined>,

		/** URL to web site for the playlist or program/show */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistFormGroup() {
		return new FormGroup<PlaylistFormProperties>({
			automation: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			episode_description: new FormControl<string | null | undefined>(undefined),
			episode_name: new FormControl<string | null | undefined>(undefined),
			hide_dj: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			persona_id: new FormControl<number | null | undefined>(undefined),
			show_id: new FormControl<number | null | undefined>(undefined),
			since: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Playlist_links {
		persona?: Link;
		self?: Link;
		show?: Link;
		spins?: Link;
	}
	export interface Playlist_linksFormProperties {
	}
	export function CreatePlaylist_linksFormGroup() {
		return new FormGroup<Playlist_linksFormProperties>({
		});

	}


	/** A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values. */
	export interface Show {
		_links?: Show_links;

		/** Program/show category */
		category?: string | null;

		/** HTML-formatted description of the playlist or program/show */
		description?: string | null;

		/**
		 * Duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** UTC datetime ISO-8601 */
		end?: Date | null;

		/** Should the client application hide information about the show's DJs/hosts? */
		hide_dj?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;

		/** Is the show a one-off in the schedule instead of repeating? */
		one_off?: boolean | null;

		/** Since what year has the program/show existed? */
		since?: string | null;

		/** UTC datetime ISO-8601 */
		start?: Date | null;

		/** Station's time zone */
		timezone?: string | null;

		/** Program/show title */
		title?: string | null;

		/** URL to web site for the program/show */
		url?: string | null;
	}

	/** A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values. */
	export interface ShowFormProperties {

		/** Program/show category */
		category: FormControl<string | null | undefined>,

		/** HTML-formatted description of the playlist or program/show */
		description: FormControl<string | null | undefined>,

		/**
		 * Duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** UTC datetime ISO-8601 */
		end: FormControl<Date | null | undefined>,

		/** Should the client application hide information about the show's DJs/hosts? */
		hide_dj: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Is the show a one-off in the schedule instead of repeating? */
		one_off: FormControl<boolean | null | undefined>,

		/** Since what year has the program/show existed? */
		since: FormControl<string | null | undefined>,

		/** UTC datetime ISO-8601 */
		start: FormControl<Date | null | undefined>,

		/** Station's time zone */
		timezone: FormControl<string | null | undefined>,

		/** Program/show title */
		title: FormControl<string | null | undefined>,

		/** URL to web site for the program/show */
		url: FormControl<string | null | undefined>,
	}
	export function CreateShowFormGroup() {
		return new FormGroup<ShowFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			hide_dj: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			one_off: new FormControl<boolean | null | undefined>(undefined),
			since: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Show_links {
		personas?: Array<Link>;
		playlists?: Link;
		self?: Link;
	}
	export interface Show_linksFormProperties {
	}
	export function CreateShow_linksFormGroup() {
		return new FormGroup<Show_linksFormProperties>({
		});

	}

	export interface Spin {
		_links?: Spin_links;
		artist?: string | null;

		/** Station-specific custom field relating to the song's artist */
		'artist-custom'?: string | null;

		/** Reference number in the record label's catalog */
		'catalog-number'?: string | null;

		/** Is the track's metadata schema "classical" rather than "popular"? */
		classical?: boolean | null;
		composer?: string | null;

		/** For classical music, conducor of the ensemble */
		conductor?: string | null;

		/**
		 * Duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** UTC datetime ISO-8601 */
		end?: Date | null;

		/** For classical music, orchestra, performing ensemble, choir, etc. */
		ensemble?: string | null;
		genre?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Cover art */
		image?: string | null;
		isrc?: string | null;
		iswc?: string | null;

		/** Record label, i.e. publisher of the sound recording */
		label?: string | null;

		/** Station-specific custom field relating to the record label */
		'label-custom'?: string | null;

		/** Is the artist local to the station? */
		local?: boolean | null;

		/** Media format in which the sound recording was reased */
		medium?: string | null;

		/** Is this a recent release? */
		new?: boolean | null;

		/** HTML-formatted DJ annotation of the spin, can include images etc. */
		note?: string | null;

		/** For classical music, featured performing artists, e.g. soloists */
		performers?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playlist_id?: number | null;
		release?: string | null;

		/** Station-specific custom field relating to the release */
		'release-custom'?: string | null;

		/**
		 * Year of initial release
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		released?: number | null;

		/** Was the spin requested by a listener? */
		request?: boolean | null;

		/** Title of the song or track */
		song?: string | null;

		/** UTC datetime ISO-8601 */
		start?: Date | null;

		/** Station's time zone */
		timezone?: string | null;

		/** Universal Product Code of the release */
		upc?: string | null;

		/** Is it a "Various Artists" release? */
		va?: boolean | null;

		/** For classical music, the main compositional work the track (see `song` field) belongs to */
		work?: string | null;
	}
	export interface SpinFormProperties {
		artist: FormControl<string | null | undefined>,

		/** Station-specific custom field relating to the song's artist */
		'artist-custom': FormControl<string | null | undefined>,

		/** Reference number in the record label's catalog */
		'catalog-number': FormControl<string | null | undefined>,

		/** Is the track's metadata schema "classical" rather than "popular"? */
		classical: FormControl<boolean | null | undefined>,
		composer: FormControl<string | null | undefined>,

		/** For classical music, conducor of the ensemble */
		conductor: FormControl<string | null | undefined>,

		/**
		 * Duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** UTC datetime ISO-8601 */
		end: FormControl<Date | null | undefined>,

		/** For classical music, orchestra, performing ensemble, choir, etc. */
		ensemble: FormControl<string | null | undefined>,
		genre: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Cover art */
		image: FormControl<string | null | undefined>,
		isrc: FormControl<string | null | undefined>,
		iswc: FormControl<string | null | undefined>,

		/** Record label, i.e. publisher of the sound recording */
		label: FormControl<string | null | undefined>,

		/** Station-specific custom field relating to the record label */
		'label-custom': FormControl<string | null | undefined>,

		/** Is the artist local to the station? */
		local: FormControl<boolean | null | undefined>,

		/** Media format in which the sound recording was reased */
		medium: FormControl<string | null | undefined>,

		/** Is this a recent release? */
		new: FormControl<boolean | null | undefined>,

		/** HTML-formatted DJ annotation of the spin, can include images etc. */
		note: FormControl<string | null | undefined>,

		/** For classical music, featured performing artists, e.g. soloists */
		performers: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playlist_id: FormControl<number | null | undefined>,
		release: FormControl<string | null | undefined>,

		/** Station-specific custom field relating to the release */
		'release-custom': FormControl<string | null | undefined>,

		/**
		 * Year of initial release
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		released: FormControl<number | null | undefined>,

		/** Was the spin requested by a listener? */
		request: FormControl<boolean | null | undefined>,

		/** Title of the song or track */
		song: FormControl<string | null | undefined>,

		/** UTC datetime ISO-8601 */
		start: FormControl<Date | null | undefined>,

		/** Station's time zone */
		timezone: FormControl<string | null | undefined>,

		/** Universal Product Code of the release */
		upc: FormControl<string | null | undefined>,

		/** Is it a "Various Artists" release? */
		va: FormControl<boolean | null | undefined>,

		/** For classical music, the main compositional work the track (see `song` field) belongs to */
		work: FormControl<string | null | undefined>,
	}
	export function CreateSpinFormGroup() {
		return new FormGroup<SpinFormProperties>({
			artist: new FormControl<string | null | undefined>(undefined),
			'artist-custom': new FormControl<string | null | undefined>(undefined),
			'catalog-number': new FormControl<string | null | undefined>(undefined),
			classical: new FormControl<boolean | null | undefined>(undefined),
			composer: new FormControl<string | null | undefined>(undefined),
			conductor: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			ensemble: new FormControl<string | null | undefined>(undefined),
			genre: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			isrc: new FormControl<string | null | undefined>(undefined),
			iswc: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			'label-custom': new FormControl<string | null | undefined>(undefined),
			local: new FormControl<boolean | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			new: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			performers: new FormControl<string | null | undefined>(undefined),
			playlist_id: new FormControl<number | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			'release-custom': new FormControl<string | null | undefined>(undefined),
			released: new FormControl<number | null | undefined>(undefined),
			request: new FormControl<boolean | null | undefined>(undefined),
			song: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			upc: new FormControl<string | null | undefined>(undefined),
			va: new FormControl<boolean | null | undefined>(undefined),
			work: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Spin_links {
		playlist?: Link;
		self?: Link;
	}
	export interface Spin_linksFormProperties {
	}
	export function CreateSpin_linksFormGroup() {
		return new FormGroup<Spin_linksFormProperties>({
		});

	}

	export interface ValidationError {
		field?: string | null;
		message?: string | null;
	}
	export interface ValidationErrorFormProperties {
		field: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Personas
		 * Get personas
		 * @param {string} name Filter by Persona name
		 * @param {number} count Amount of items to return
		 *     Minimum: 1
		 * @param {number} page Offset, used together with count
		 *     Minimum: 1
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {BaseIndexResponse} The personas
		 */
		PersonaGetByNameAndCountAndPageAndFieldsAndExpand(name: string | null | undefined, count: number | null | undefined, page: number | null | undefined, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<BaseIndexResponse> {
			return this.http.get<BaseIndexResponse>(this.baseUri + 'personas?name=' + (name == null ? '' : encodeURIComponent(name)) + '&count=' + count + '&page=' + page + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get Persona by id
		 * Get personas/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {Persona} The Persona
		 */
		PersonaGetByIdAndFieldsAndExpand(id: number, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<Persona> {
			return this.http.get<Persona>(this.baseUri + 'personas/' + id + '?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns playlists optionally filtered by {start} and/or {end} datetimes
		 * Get Playlists optionally filtered by a datetime range.
		 * Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).
		 * Ordered chronologically from newest to oldest.
		 * Get playlists
		 * @param {Date} start The datetime starting from items must be returned. Maximum 1 hour in future.
		 * @param {Date} end The ending datetime. Maximum 1 hour in future.
		 * @param {number} show_id Filter by show
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} persona_id Filter by persona
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count Amount of items to return
		 *     Minimum: 1
		 * @param {number} page Offset, used together with count
		 *     Minimum: 1
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {BaseIndexResponse} The playlists
		 */
		PlaylistGetByStartAndEndAndShow_idAndPersona_idAndCountAndPageAndFieldsAndExpand(start: Date | null | undefined, end: Date | null | undefined, show_id: number | null | undefined, persona_id: number | null | undefined, count: number | null | undefined, page: number | null | undefined, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<BaseIndexResponse> {
			return this.http.get<BaseIndexResponse>(this.baseUri + 'playlists?start=' + start?.toISOString() + '&end=' + end?.toISOString() + '&show_id=' + show_id + '&persona_id=' + persona_id + '&count=' + count + '&page=' + page + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get a Playlist by id
		 * The response object represents the playlist specified by {id}.
		 * Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).
		 * Get playlists/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {Playlist} The playlist
		 */
		PlaylistGetByIdAndFieldsAndExpand(id: number, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<Playlist> {
			return this.http.get<Playlist>(this.baseUri + 'playlists/' + id + '?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
		 * **Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
		 * each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
		 * Thus scheduled shows have occurences that, for example, may be displayed in a calendar.
		 * In the response, `items` is an array of objects representing occurences of scheduled shows.
		 * You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
		 * parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
		 * included in the reponse.
		 * `itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
		 * {start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
		 * is included.
		 * If the request omits the {start} parameter, the server sets its value to the current time so that the filter
		 * range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
		 * otherwise it is *unbounded*.
		 * For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
		 * difference between objects in `items` representing a given show will be the `start` field value.
		 * For an unbounded request, `items` includes *only one* occurence per show, specifically, the
		 * next occurrence after {start} of all shows occuring after {start}.
		 * Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
		 * of shows expanded into occurrences by thir shedules and repetitions.
		 * Objects in `items` are ordered first by `datetime` and then by `id`.
		 * Get shows
		 * @param {Date} start The datetime starting from items must be returned. Maximum 1 hour in past.
		 * @param {Date} end The ending datetime. Maximum 1 hour in past.
		 * @param {number} count Amount of items to return
		 *     Minimum: 1
		 * @param {number} page Offset, used together with count
		 *     Minimum: 1
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {BaseIndexResponse} The shows
		 */
		ShowGetByStartAndEndAndCountAndPageAndFieldsAndExpand(start: Date | null | undefined, end: Date | null | undefined, count: number | null | undefined, page: number | null | undefined, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<BaseIndexResponse> {
			return this.http.get<BaseIndexResponse>(this.baseUri + 'shows?start=' + start?.toISOString() + '&end=' + end?.toISOString() + '&count=' + count + '&page=' + page + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get a Show by id
		 * The response object represents the next occurence of the show specified by {id}.
		 * Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.
		 * Get shows/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {Show} The Show
		 */
		ShowGetByIdAndFieldsAndExpand(id: number, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<Show> {
			return this.http.get<Show>(this.baseUri + 'shows/' + id + '?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns spins optionally filtered by {start} and/or {end} datetimes
		 * Get Spins optionally filtered by a datetime range. Only past Spins will be returned.
		 * Get spins
		 * @param {Date} start The datetime starting from items must be returned.
		 * @param {Date} end The ending datetime.
		 * @param {number} playlist_id Filter by playlist
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} show_id Filter by show
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count Amount of items to return
		 *     Minimum: 1
		 * @param {number} page Offset, used together with count
		 *     Minimum: 1
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {BaseIndexResponse} The spins
		 */
		SpinGetByStartAndEndAndPlaylist_idAndShow_idAndCountAndPageAndFieldsAndExpand(start: Date | null | undefined, end: Date | null | undefined, playlist_id: number | null | undefined, show_id: number | null | undefined, count: number | null | undefined, page: number | null | undefined, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<BaseIndexResponse> {
			return this.http.get<BaseIndexResponse>(this.baseUri + 'spins?start=' + start?.toISOString() + '&end=' + end?.toISOString() + '&playlist_id=' + playlist_id + '&show_id=' + show_id + '&count=' + count + '&page=' + page + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get a Spin by id
		 * Get spins/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} fields Allows to select only needed fields
		 * @param {Array<string>} expand Allows to select extra fields
		 * @return {Spin} The spin
		 */
		SpinGetByIdAndFieldsAndExpand(id: number, fields: Array<string> | null | undefined, expand: Array<string> | null | undefined): Observable<Spin> {
			return this.http.get<Spin>(this.baseUri + 'spins/' + id + '?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

}

