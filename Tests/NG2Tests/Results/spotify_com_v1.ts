import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Album {

		/** The type of the album: one of 'album', 'single', or 'compilation'. */
		album_type?: string | null;

		/** The artists of the album. Each artist object includes a link in href to more detailed information about the artist. */
		artists?: Array<Artist>;

		/** The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market. */
		available_markets?: Array<string>;

		/** The copyright statements of the album. */
		AlbumCopyrights?: Array<AlbumCopyrights>;

		/** Known external IDs for this album. */
		external_ids?: {[id: string]: string };

		/** Known external URLs for this album. */
		external_urls?: {[id: string]: string };

		/** A list of the genres used to classify the album. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.) */
		genres?: Array<string>;

		/** A link to the Web API endpoint providing full details of the album. */
		href?: string | null;

		/** The Spotify ID for the album. */
		id?: string | null;

		/** The cover art for the album in various sizes, widest first. */
		images?: Array<Image>;

		/** The name of the album. */
		name?: string | null;

		/**
		 * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		popularity?: number | null;

		/** The date the album was first released, for example '1981-12-15'. Depending on the precision, it might be shown as '1981' or '1981-12'. */
		release_date?: string | null;

		/** The precision with which release_date value is known: 'year', 'month', or 'day'. */
		release_date_precision?: string | null;
		tracks?: Track_simple_page;

		/** The object type: 'album'. */
		type?: string | null;

		/** The Spotify URI for the album. */
		uri?: string | null;
	}
	export interface AlbumFormProperties {

		/** The type of the album: one of 'album', 'single', or 'compilation'. */
		album_type: FormControl<string | null | undefined>,

		/** Known external IDs for this album. */
		external_ids: FormControl<{[id: string]: string } | null | undefined>,

		/** Known external URLs for this album. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the album. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the album. */
		id: FormControl<string | null | undefined>,

		/** The name of the album. */
		name: FormControl<string | null | undefined>,

		/**
		 * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		popularity: FormControl<number | null | undefined>,

		/** The date the album was first released, for example '1981-12-15'. Depending on the precision, it might be shown as '1981' or '1981-12'. */
		release_date: FormControl<string | null | undefined>,

		/** The precision with which release_date value is known: 'year', 'month', or 'day'. */
		release_date_precision: FormControl<string | null | undefined>,

		/** The object type: 'album'. */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the album. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlbumFormGroup() {
		return new FormGroup<AlbumFormProperties>({
			album_type: new FormControl<string | null | undefined>(undefined),
			external_ids: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			popularity: new FormControl<number | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined),
			release_date_precision: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Artist {

		/** Known external URLs for this artist. */
		external_urls?: {[id: string]: string };

		/** Information about the followers of the artist. */
		followers?: Followers;

		/** A list of the genres the artist is associated with. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.) */
		genres?: Array<string>;

		/** A link to the Web API endpoint providing full details of the artist. */
		href?: string | null;

		/** The Spotify ID for the artist. */
		id?: string | null;

		/** Images of the artist in various sizes, widest first. */
		images?: Array<Image>;

		/** The name of the artist. */
		name?: string | null;

		/**
		 * The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		popularity?: number | null;

		/** The object type: 'artist' */
		type?: string | null;

		/** The Spotify URI for the artist. */
		uri?: string | null;
	}
	export interface ArtistFormProperties {

		/** Known external URLs for this artist. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the artist. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the artist. */
		id: FormControl<string | null | undefined>,

		/** The name of the artist. */
		name: FormControl<string | null | undefined>,

		/**
		 * The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		popularity: FormControl<number | null | undefined>,

		/** The object type: 'artist' */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the artist. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateArtistFormGroup() {
		return new FormGroup<ArtistFormProperties>({
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			popularity: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the followers of the artist. */
	export interface Followers {

		/** A link to the Web API endpoint providing full details of the followers; null if not available. */
		href?: string | null;

		/**
		 * The total number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** Information about the followers of the artist. */
	export interface FollowersFormProperties {

		/** A link to the Web API endpoint providing full details of the followers; null if not available. */
		href: FormControl<string | null | undefined>,

		/**
		 * The total number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateFollowersFormGroup() {
		return new FormGroup<FollowersFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Image {

		/**
		 * The image height in pixels. If unknown: null or not returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** The source URL of the image. */
		url?: string | null;

		/**
		 * The image width in pixels. If unknown: null or not returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface ImageFormProperties {

		/**
		 * The image height in pixels. If unknown: null or not returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** The source URL of the image. */
		url: FormControl<string | null | undefined>,

		/**
		 * The image width in pixels. If unknown: null or not returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AlbumCopyrights {

		/** The copyright text for this album. */
		text?: string | null;

		/** The type of copyright: C = the copyright, P = the sound recording (performance) copyright. */
		type?: string | null;
	}
	export interface AlbumCopyrightsFormProperties {

		/** The copyright text for this album. */
		text: FormControl<string | null | undefined>,

		/** The type of copyright: C = the copyright, P = the sound recording (performance) copyright. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAlbumCopyrightsFormGroup() {
		return new FormGroup<AlbumCopyrightsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Track_simple_page {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Track_simple>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Track_simple_pageFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTrack_simple_pageFormGroup() {
		return new FormGroup<Track_simple_pageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Track_simple {

		/** The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist. */
		artists?: Array<Artist_simple>;

		/** A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. */
		available_markets?: Array<string>;

		/**
		 * The disc number (usually 1 unless the album consists of more than one disc).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disc_number?: number | null;

		/**
		 * The track length in milliseconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_ms?: number | null;

		/** Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown). */
		explicit?: boolean | null;

		/** Known external URLs for this track. */
		external_urls?: {[id: string]: string };

		/** A link to the Web API endpoint providing full details of the track. */
		href?: string | null;

		/** The Spotify ID for the track. */
		id?: string | null;

		/** Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false. */
		is_playable?: boolean | null;

		/** Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track. */
		linked_from?: Track_simpleLinked_from;

		/** The name of the track. */
		name?: string | null;

		/** A URL to a 30 second preview (MP3 format) of the track. */
		preview_url?: string | null;

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_number?: number | null;

		/** The object type: 'track'. */
		type?: string | null;

		/** The Spotify URI for the track. */
		uri?: string | null;
	}
	export interface Track_simpleFormProperties {

		/**
		 * The disc number (usually 1 unless the album consists of more than one disc).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disc_number: FormControl<number | null | undefined>,

		/**
		 * The track length in milliseconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_ms: FormControl<number | null | undefined>,

		/** Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown). */
		explicit: FormControl<boolean | null | undefined>,

		/** Known external URLs for this track. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the track. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the track. */
		id: FormControl<string | null | undefined>,

		/** Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false. */
		is_playable: FormControl<boolean | null | undefined>,

		/** The name of the track. */
		name: FormControl<string | null | undefined>,

		/** A URL to a 30 second preview (MP3 format) of the track. */
		preview_url: FormControl<string | null | undefined>,

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_number: FormControl<number | null | undefined>,

		/** The object type: 'track'. */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the track. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTrack_simpleFormGroup() {
		return new FormGroup<Track_simpleFormProperties>({
			disc_number: new FormControl<number | null | undefined>(undefined),
			duration_ms: new FormControl<number | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_playable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preview_url: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Artist_simple {

		/** Known external URLs for this artist. */
		external_urls?: {[id: string]: string };

		/** A link to the Web API endpoint providing full details of the artist. */
		href?: string | null;

		/** The Spotify ID for the artist. */
		id?: string | null;

		/** The name of the artist. */
		name?: string | null;

		/** The object type: 'artist' */
		type?: string | null;

		/** The Spotify URI for the artist. */
		uri?: string | null;
	}
	export interface Artist_simpleFormProperties {

		/** Known external URLs for this artist. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the artist. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the artist. */
		id: FormControl<string | null | undefined>,

		/** The name of the artist. */
		name: FormControl<string | null | undefined>,

		/** The object type: 'artist' */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the artist. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateArtist_simpleFormGroup() {
		return new FormGroup<Artist_simpleFormProperties>({
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Track_simpleLinked_from {

		/** Known external URLs for this track. */
		external_urls?: {[id: string]: string };

		/** A link to the Web API endpoint providing full details of the track. */
		href?: string | null;

		/** The Spotify ID for the track. */
		id?: string | null;

		/** The object type: 'track'. */
		type?: string | null;

		/** The Spotify URI for the track. */
		uri?: string | null;
	}
	export interface Track_simpleLinked_fromFormProperties {

		/** Known external URLs for this track. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the track. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the track. */
		id: FormControl<string | null | undefined>,

		/** The object type: 'track'. */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the track. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTrack_simpleLinked_fromFormGroup() {
		return new FormGroup<Track_simpleLinked_fromFormProperties>({
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Album_simple {

		/** The type of the album: one of 'album', 'single', or 'compilation'. */
		album_type?: string | null;

		/** The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market. */
		available_markets?: Array<string>;

		/** Known external URLs for this album. */
		external_urls?: {[id: string]: string };

		/** A link to the Web API endpoint providing full details of the album. */
		href?: string | null;

		/** The Spotify ID for the album. */
		id?: string | null;

		/** The cover art for the album in various sizes, widest first. */
		images?: Array<Image>;

		/** The name of the album. */
		name?: string | null;

		/** The object type: 'album'. */
		type?: string | null;

		/** The Spotify URI for the album. */
		uri?: string | null;
	}
	export interface Album_simpleFormProperties {

		/** The type of the album: one of 'album', 'single', or 'compilation'. */
		album_type: FormControl<string | null | undefined>,

		/** Known external URLs for this album. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the album. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the album. */
		id: FormControl<string | null | undefined>,

		/** The name of the album. */
		name: FormControl<string | null | undefined>,

		/** The object type: 'album'. */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the album. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlbum_simpleFormGroup() {
		return new FormGroup<Album_simpleFormProperties>({
			album_type: new FormControl<string | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Album_simple_page {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Album_simple>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Album_simple_pageFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateAlbum_simple_pageFormGroup() {
		return new FormGroup<Album_simple_pageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Album_track_page {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Track_simple>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Album_track_pageFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateAlbum_track_pageFormGroup() {
		return new FormGroup<Album_track_pageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Category {

		/** A link to the Web API endpoint returning full details of the category. */
		href?: string | null;
		icons?: Array<Image>;

		/** The Spotify category ID of the category. */
		id?: string | null;

		/** The name of the category. */
		name?: string | null;
	}
	export interface CategoryFormProperties {

		/** A link to the Web API endpoint returning full details of the category. */
		href: FormControl<string | null | undefined>,

		/** The Spotify category ID of the category. */
		id: FormControl<string | null | undefined>,

		/** The name of the category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Category_page {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Category>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Category_pageFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCategory_pageFormGroup() {
		return new FormGroup<Category_pageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Current_user_profile {

		/** The user's date-of-birth. This field is only available when the current user has granted access to the user-read-birthdate scope. */
		birthdate?: string | null;

		/** The country of the user, as set in the user's account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope. */
		country?: string | null;

		/** The name displayed on the user's profile. */
		displayName?: string | null;

		/** The user's email address, as entered by the user when creating their account. This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope. */
		email?: string | null;

		/** Known external URLs for this user. */
		external_urls?: {[id: string]: string };

		/** Information about the followers of the artist. */
		followers?: Followers;

		/** A link to the Web API endpoint for this user. */
		href?: string | null;

		/** The Spotify ID for this user. */
		id?: string | null;

		/** The user's Spotify subscription level: 'premium', 'free', etc. (The subscription level 'open' can be considered the same as 'free'.) This field is only available when the current user has granted access to the user-read-private scope. */
		product?: string | null;

		/** The object type: 'user' */
		type?: string | null;

		/** The Spotify URI for the user. */
		uri?: string | null;
	}
	export interface Current_user_profileFormProperties {

		/** The user's date-of-birth. This field is only available when the current user has granted access to the user-read-birthdate scope. */
		birthdate: FormControl<string | null | undefined>,

		/** The country of the user, as set in the user's account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope. */
		country: FormControl<string | null | undefined>,

		/** The name displayed on the user's profile. */
		displayName: FormControl<string | null | undefined>,

		/** The user's email address, as entered by the user when creating their account. This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope. */
		email: FormControl<string | null | undefined>,

		/** Known external URLs for this user. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint for this user. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for this user. */
		id: FormControl<string | null | undefined>,

		/** The user's Spotify subscription level: 'premium', 'free', etc. (The subscription level 'open' can be considered the same as 'free'.) This field is only available when the current user has granted access to the user-read-private scope. */
		product: FormControl<string | null | undefined>,

		/** The object type: 'user' */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the user. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCurrent_user_profileFormGroup() {
		return new FormGroup<Current_user_profileFormProperties>({
			birthdate: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Featured_playlists {

		/** A sentence describing the context for the featured playlists. */
		message?: string | null;
		playlists?: Playlist_simple_page;
	}
	export interface Featured_playlistsFormProperties {

		/** A sentence describing the context for the featured playlists. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateFeatured_playlistsFormGroup() {
		return new FormGroup<Featured_playlistsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Playlist_simple_page {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Playlist_simple>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Playlist_simple_pageFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePlaylist_simple_pageFormGroup() {
		return new FormGroup<Playlist_simple_pageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Playlist_simple {

		/** True if the owner allows other users to modify the playlist. */
		collaborative?: boolean | null;

		/** Known external URLs for this album. */
		external_urls?: {[id: string]: string };

		/** A link to the Web API endpoint providing full details of the playlist. */
		href?: string | null;

		/** The Spotify ID of the playlist. */
		id?: string | null;

		/** The cover art for the album in various sizes, widest first. */
		images?: Array<Image>;

		/** The name of the playlist. */
		name?: string | null;
		owner?: User_profile;

		/** The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists. */
		public?: boolean | null;

		/** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
		snapshot_id?: string | null;
		tracks?: Playlist_simpleTracks;

		/** The object type: 'playlist'. */
		type?: string | null;

		/** Spotify URI of the playlist. */
		uri?: string | null;
	}
	export interface Playlist_simpleFormProperties {

		/** True if the owner allows other users to modify the playlist. */
		collaborative: FormControl<boolean | null | undefined>,

		/** Known external URLs for this album. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the playlist. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID of the playlist. */
		id: FormControl<string | null | undefined>,

		/** The name of the playlist. */
		name: FormControl<string | null | undefined>,

		/** The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists. */
		public: FormControl<boolean | null | undefined>,

		/** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
		snapshot_id: FormControl<string | null | undefined>,

		/** The object type: 'playlist'. */
		type: FormControl<string | null | undefined>,

		/** Spotify URI of the playlist. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePlaylist_simpleFormGroup() {
		return new FormGroup<Playlist_simpleFormProperties>({
			collaborative: new FormControl<boolean | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			snapshot_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_profile {

		/** The name displayed on the user's profile. */
		displayName?: string | null;

		/** Known external URLs for this user. */
		external_urls?: {[id: string]: string };

		/** Information about the followers of the artist. */
		followers?: Followers;

		/** A link to the Web API endpoint for this user. */
		href?: string | null;

		/** The Spotify ID for this user. */
		id?: string | null;

		/** The object type: 'user' */
		type?: string | null;

		/** The Spotify URI for the user. */
		uri?: string | null;
	}
	export interface User_profileFormProperties {

		/** The name displayed on the user's profile. */
		displayName: FormControl<string | null | undefined>,

		/** Known external URLs for this user. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint for this user. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for this user. */
		id: FormControl<string | null | undefined>,

		/** The object type: 'user' */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the user. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUser_profileFormGroup() {
		return new FormGroup<User_profileFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Playlist_simpleTracks {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/**
		 * The total number of tracks available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Playlist_simpleTracksFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The total number of tracks available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePlaylist_simpleTracksFormGroup() {
		return new FormGroup<Playlist_simpleTracksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Playlist {

		/** True if the owner allows other users to modify the playlist. */
		collaborative?: boolean | null;

		/** The playlist description. Only returned for modified, verified playlists, otherwise null. */
		description?: string | null;

		/** Known external URLs for this album. */
		external_urls?: {[id: string]: string };

		/** Information about the followers of the playlist. */
		followers?: PlaylistFollowers;

		/** A link to the Web API endpoint providing full details of the playlist. */
		href?: string | null;

		/** The Spotify ID of the playlist. */
		id?: string | null;

		/** The cover art for the album in various sizes, widest first. */
		images?: Array<Image>;

		/** The name of the playlist. */
		name?: string | null;
		owner?: User_profile;

		/** The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists. */
		public?: boolean | null;

		/** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
		snapshot_id?: string | null;
		tracks?: Playlist_track_page;

		/** The object type: 'playlist'. */
		type?: string | null;

		/** Spotify URI of the playlist. */
		uri?: string | null;
	}
	export interface PlaylistFormProperties {

		/** True if the owner allows other users to modify the playlist. */
		collaborative: FormControl<boolean | null | undefined>,

		/** The playlist description. Only returned for modified, verified playlists, otherwise null. */
		description: FormControl<string | null | undefined>,

		/** Known external URLs for this album. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the playlist. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID of the playlist. */
		id: FormControl<string | null | undefined>,

		/** The name of the playlist. */
		name: FormControl<string | null | undefined>,

		/** The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists. */
		public: FormControl<boolean | null | undefined>,

		/** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
		snapshot_id: FormControl<string | null | undefined>,

		/** The object type: 'playlist'. */
		type: FormControl<string | null | undefined>,

		/** Spotify URI of the playlist. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistFormGroup() {
		return new FormGroup<PlaylistFormProperties>({
			collaborative: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			snapshot_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistFollowers {

		/** A link to the Web API endpoint providing full details of the followers; null if not available. */
		href?: string | null;

		/**
		 * The total number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface PlaylistFollowersFormProperties {

		/** A link to the Web API endpoint providing full details of the followers; null if not available. */
		href: FormControl<string | null | undefined>,

		/**
		 * The total number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePlaylistFollowersFormGroup() {
		return new FormGroup<PlaylistFollowersFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Playlist_track_page {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Playlist_track>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Playlist_track_pageFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePlaylist_track_pageFormGroup() {
		return new FormGroup<Playlist_track_pageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Playlist_track {

		/** The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field. */
		added_at?: string | null;
		added_by?: User_profile;

		/** Whether this track is a [local file](https://developer.spotify.com/web-api/local-files-spotify-playlists/) or not. */
		is_local?: boolean | null;
		track?: Track;
	}
	export interface Playlist_trackFormProperties {

		/** The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field. */
		added_at: FormControl<string | null | undefined>,

		/** Whether this track is a [local file](https://developer.spotify.com/web-api/local-files-spotify-playlists/) or not. */
		is_local: FormControl<boolean | null | undefined>,
	}
	export function CreatePlaylist_trackFormGroup() {
		return new FormGroup<Playlist_trackFormProperties>({
			added_at: new FormControl<string | null | undefined>(undefined),
			is_local: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Track {
		album?: Album_simple;

		/** The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist. */
		artists?: Array<Artist_simple>;

		/** A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. */
		available_markets?: Array<string>;

		/**
		 * The disc number (usually 1 unless the album consists of more than one disc).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disc_number?: number | null;

		/**
		 * The track length in milliseconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_ms?: number | null;

		/** Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown). */
		explicit?: boolean | null;

		/** Known external IDs for the track. */
		external_ids?: {[id: string]: string };

		/** Known external URLs for this track. */
		external_urls?: {[id: string]: string };

		/** A link to the Web API endpoint providing full details of the track. */
		href?: string | null;

		/** The Spotify ID for the track. */
		id?: string | null;

		/** Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false. */
		is_playable?: boolean | null;

		/** Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track. */
		linked_from?: TrackLinked_from;

		/** The name of the track. */
		name?: string | null;

		/** A URL to a 30 second preview (MP3 format) of the track. */
		preview_url?: string | null;

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_number?: number | null;

		/** The object type: 'track'. */
		type?: string | null;

		/** The Spotify URI for the track. */
		uri?: string | null;
	}
	export interface TrackFormProperties {

		/**
		 * The disc number (usually 1 unless the album consists of more than one disc).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disc_number: FormControl<number | null | undefined>,

		/**
		 * The track length in milliseconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_ms: FormControl<number | null | undefined>,

		/** Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown). */
		explicit: FormControl<boolean | null | undefined>,

		/** Known external IDs for the track. */
		external_ids: FormControl<{[id: string]: string } | null | undefined>,

		/** Known external URLs for this track. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the track. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the track. */
		id: FormControl<string | null | undefined>,

		/** Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false. */
		is_playable: FormControl<boolean | null | undefined>,

		/** The name of the track. */
		name: FormControl<string | null | undefined>,

		/** A URL to a 30 second preview (MP3 format) of the track. */
		preview_url: FormControl<string | null | undefined>,

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_number: FormControl<number | null | undefined>,

		/** The object type: 'track'. */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the track. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTrackFormGroup() {
		return new FormGroup<TrackFormProperties>({
			disc_number: new FormControl<number | null | undefined>(undefined),
			duration_ms: new FormControl<number | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined),
			external_ids: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_playable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preview_url: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackLinked_from {

		/** Known external URLs for this track. */
		external_urls?: {[id: string]: string };

		/** A link to the Web API endpoint providing full details of the track. */
		href?: string | null;

		/** The Spotify ID for the track. */
		id?: string | null;

		/** The object type: 'track'. */
		type?: string | null;

		/** The Spotify URI for the track. */
		uri?: string | null;
	}
	export interface TrackLinked_fromFormProperties {

		/** Known external URLs for this track. */
		external_urls: FormControl<{[id: string]: string } | null | undefined>,

		/** A link to the Web API endpoint providing full details of the track. */
		href: FormControl<string | null | undefined>,

		/** The Spotify ID for the track. */
		id: FormControl<string | null | undefined>,

		/** The object type: 'track'. */
		type: FormControl<string | null | undefined>,

		/** The Spotify URI for the track. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTrackLinked_fromFormGroup() {
		return new FormGroup<TrackLinked_fromFormProperties>({
			external_urls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Playlist_snapshot {

		/** The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version. */
		snapshot_id?: string | null;
	}
	export interface Playlist_snapshotFormProperties {

		/** The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version. */
		snapshot_id: FormControl<string | null | undefined>,
	}
	export function CreatePlaylist_snapshotFormGroup() {
		return new FormGroup<Playlist_snapshotFormProperties>({
			snapshot_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Saved_track {

		/** The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field. */
		added_at?: string | null;
		track?: Track;
	}
	export interface Saved_trackFormProperties {

		/** The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field. */
		added_at: FormControl<string | null | undefined>,
	}
	export function CreateSaved_trackFormGroup() {
		return new FormGroup<Saved_trackFormProperties>({
			added_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Saved_track_page {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Saved_track>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Saved_track_pageFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSaved_track_pageFormGroup() {
		return new FormGroup<Saved_track_pageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Search {

		/** Present if the type of search includes 'album'. */
		albums?: SearchAlbums;

		/** Present if the type of search includes 'artist'. */
		artists?: SearchArtists;

		/** Present if the type of search includes 'track'. */
		tracks?: SearchTracks;
	}
	export interface SearchFormProperties {
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
		});

	}

	export interface SearchAlbums {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Album_simple>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface SearchAlbumsFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSearchAlbumsFormGroup() {
		return new FormGroup<SearchAlbumsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchArtists {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Artist>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface SearchArtistsFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSearchArtistsFormGroup() {
		return new FormGroup<SearchArtistsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchTracks {

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Track>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** URL to the previous page of items. (null if none) */
		previous?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface SearchTracksFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** URL to the previous page of items. (null if none) */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSearchTracksFormGroup() {
		return new FormGroup<SearchTracksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User_followed {

		/** Present if the type of followe items is 'artist'. */
		artists?: User_followedArtists;
	}
	export interface User_followedFormProperties {
	}
	export function CreateUser_followedFormGroup() {
		return new FormGroup<User_followedFormProperties>({
		});

	}

	export interface User_followedArtists {

		/** The cursors used to find the next set of items. */
		cursor?: User_followedArtistsCursor;

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The requested data. */
		items?: Array<Artist>;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** URL to the next page of items. (null if none) */
		next?: string | null;

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface User_followedArtistsFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. (null if none) */
		next: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateUser_followedArtistsFormGroup() {
		return new FormGroup<User_followedArtistsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User_followedArtistsCursor {

		/** The cursor to use as key to find the next page of items. */
		after?: string | null;
	}
	export interface User_followedArtistsCursorFormProperties {

		/** The cursor to use as key to find the next page of items. */
		after: FormControl<string | null | undefined>,
	}
	export function CreateUser_followedArtistsCursorFormGroup() {
		return new FormGroup<User_followedArtistsCursorFormProperties>({
			after: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)
		 * Get albums
		 * @param {string} ids A comma-separated list of IDs
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {AlbumsGetByIdsAndMarketReturn} OK
		 */
		AlbumsGetByIdsAndMarket(ids: string, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AlbumsGetByIdsAndMarketReturn> {
			return this.http.get<AlbumsGetByIdsAndMarketReturn>(this.baseUri + 'albums?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get an Album](https://developer.spotify.com/web-api/get-album/)
		 * Get albums/{id}
		 * @param {string} id The Spotify ID for the album
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {Album} OK
		 */
		Albums_idGetByMarket(id: string, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Album> {
			return this.http.get<Album>(this.baseUri + 'albums/' + (id == null ? '' : encodeURIComponent(id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)
		 * Get albums/{id}/tracks
		 * @param {string} id The Spotify ID for the album
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {Track_simple_page} OK
		 */
		Albums_idTracksGetByLimitAndOffsetAndMarket(id: string, limit: number | null | undefined, offset: number | null | undefined, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Track_simple_page> {
			return this.http.get<Track_simple_page>(this.baseUri + 'albums/' + (id == null ? '' : encodeURIComponent(id)) + '/tracks&limit=' + limit + '&offset=' + offset + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)
		 * Get artists
		 * @param {string} ids A comma-separated list of IDs
		 * @return {ArtistsGetByIdsReturn} OK
		 */
		ArtistsGetByIds(ids: string, headersHandler?: () => HttpHeaders): Observable<ArtistsGetByIdsReturn> {
			return this.http.get<ArtistsGetByIdsReturn>(this.baseUri + 'artists?ids=' + (ids == null ? '' : encodeURIComponent(ids)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get an Artist](https://developer.spotify.com/web-api/get-artist/)
		 * Get artists/{id}
		 * @param {string} id The Spotify ID for the artist
		 * @return {Artist} OK
		 */
		Artists_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Artist> {
			return this.http.get<Artist>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)
		 * Get artists/{id}/albums
		 * @param {string} id The Spotify ID for the artist
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} album_type Filter by album types
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {Album_simple_page} OK
		 */
		Artists_idAlbumsGetByLimitAndOffsetAndAlbum_typeAndMarket(id: string, limit: number | null | undefined, offset: number | null | undefined, album_type: string | null | undefined, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Album_simple_page> {
			return this.http.get<Album_simple_page>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)) + '/albums&limit=' + limit + '&offset=' + offset + '&album_type=' + (album_type == null ? '' : encodeURIComponent(album_type)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)
		 * Get artists/{id}/related-artists
		 * @param {string} id The Spotify ID for the artist
		 * @return {Artists_idRelated_artistsGetReturn} OK
		 */
		Artists_idRelated_artistsGet(id: string, headersHandler?: () => HttpHeaders): Observable<Artists_idRelated_artistsGetReturn> {
			return this.http.get<Artists_idRelated_artistsGetReturn>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)) + '/related-artists', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)
		 * Get artists/{id}/top-tracks
		 * @param {string} id The Spotify ID for the artist
		 * @param {string} country The country (an ISO 3166-1 alpha-2 country code)
		 * @return {Artists_idTop_tracksGetByCountryReturn} OK
		 */
		Artists_idTop_tracksGetByCountry(id: string, country: string, headersHandler?: () => HttpHeaders): Observable<Artists_idTop_tracksGetByCountryReturn> {
			return this.http.get<Artists_idTop_tracksGetByCountryReturn>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)) + '/top-tracks&country=' + (country == null ? '' : encodeURIComponent(country)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)
		 * Get browse/categories
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} country The country (an ISO 3166-1 alpha-2 country code)
		 * @param {string} locale The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
		 * @return {Category_page} OK
		 */
		BrowseCategoriesGetByLimitAndOffsetAndCountryAndLocale(limit: number | null | undefined, offset: number | null | undefined, country: string | null | undefined, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Category_page> {
			return this.http.get<Category_page>(this.baseUri + 'browse/categories?limit=' + limit + '&offset=' + offset + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)
		 * Get browse/categories/{category_id}
		 * @param {string} category_id The Spotify ID of the category you wish to fetch.
		 * @param {string} country The country (an ISO 3166-1 alpha-2 country code)
		 * @param {string} locale The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
		 * @return {Category} OK
		 */
		BrowseCategories_category_idGetByCountryAndLocale(category_id: string, country: string | null | undefined, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.get<Category>(this.baseUri + 'browse/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)
		 * Get browse/categories/{category_id}/playlists
		 * @param {string} category_id The Spotify ID of the category you wish to fetch.
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} country The country (an ISO 3166-1 alpha-2 country code)
		 * @return {BrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountryReturn} OK
		 */
		BrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountry(category_id: string, limit: number | null | undefined, offset: number | null | undefined, country: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<BrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountryReturn> {
			return this.http.get<BrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountryReturn>(this.baseUri + 'browse/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)) + '/playlists&limit=' + limit + '&offset=' + offset + '&country=' + (country == null ? '' : encodeURIComponent(country)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)
		 * Get browse/featured-playlists
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} country The country (an ISO 3166-1 alpha-2 country code)
		 * @param {string} locale The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
		 * @param {string} timestamp A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM.
		 * @return {Featured_playlists} OK
		 */
		BrowseFeatured_playlistsGetByLimitAndOffsetAndCountryAndLocaleAndTimestamp(limit: number | null | undefined, offset: number | null | undefined, country: string | null | undefined, locale: string | null | undefined, timestamp: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Featured_playlists> {
			return this.http.get<Featured_playlists>(this.baseUri + 'browse/featured-playlists?limit=' + limit + '&offset=' + offset + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)
		 * Get browse/new-releases
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} country The country (an ISO 3166-1 alpha-2 country code)
		 * @return {Album_simple_page} OK
		 */
		BrowseNew_releasesGetByLimitAndOffsetAndCountry(limit: number | null | undefined, offset: number | null | undefined, country: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Album_simple_page> {
			return this.http.get<Album_simple_page>(this.baseUri + 'browse/new-releases?limit=' + limit + '&offset=' + offset + '&country=' + (country == null ? '' : encodeURIComponent(country)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)
		 * Get me
		 * @return {Current_user_profile} OK
		 */
		MeGet(headersHandler?: () => HttpHeaders): Observable<Current_user_profile> {
			return this.http.get<Current_user_profile>(this.baseUri + 'me', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)
		 * Get me/following
		 * @param {MeFollowingGetByTypeAndLimitAndAfterType} type The ID type, currently only artist is supported.
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {string} after The last artist ID retrieved from the previous request.
		 * @return {User_followed} OK
		 */
		MeFollowingGetByTypeAndLimitAndAfter(type: MeFollowingGetByTypeAndLimitAndAfterType, limit: number | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<User_followed> {
			return this.http.get<User_followed>(this.baseUri + 'me/following?type=' + type + '&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)
		 * Put me/following
		 * @param {MeFollowingPutByTypeAndIdsType} type The type to follow.
		 * @param {string} ids A comma-separated list of the artists or users ids
		 * @return {void} 
		 */
		MeFollowingPutByTypeAndIds(type: MeFollowingPutByTypeAndIdsType, ids: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/following?type=' + type + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)
		 * Delete me/following
		 * @param {MeFollowingPutByTypeAndIdsType} type The type to unfollow.
		 * @param {string} ids A comma-separated list of the artists or users ids
		 * @return {void} 
		 */
		MeFollowingDeleteByTypeAndIds(type: MeFollowingPutByTypeAndIdsType, ids: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/following?type=' + type + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * [Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)
		 * Get me/following/contains
		 * @param {MeFollowingPutByTypeAndIdsType} type The type to follow.
		 * @param {string} ids A comma-separated string of the artists or users ids.
		 * @return {Array<boolean>} OK
		 */
		MeFollowingContainsGetByTypeAndIds(type: MeFollowingPutByTypeAndIdsType, ids: string, headersHandler?: () => HttpHeaders): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/following/contains?type=' + type + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)
		 * Get me/tracks
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {Saved_track_page} OK
		 */
		MeTracksGetByLimitAndOffsetAndMarket(limit: number | null | undefined, offset: number | null | undefined, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Saved_track_page> {
			return this.http.get<Saved_track_page>(this.baseUri + 'me/tracks?limit=' + limit + '&offset=' + offset + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)
		 * Put me/tracks
		 * @param {string} ids A comma-separated list of IDs
		 * @return {void} OK
		 */
		MeTracksPutByIds(ids: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/tracks?ids=' + (ids == null ? '' : encodeURIComponent(ids)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)
		 * Delete me/tracks
		 * @param {string} ids A comma-separated list of IDs
		 * @return {void} OK
		 */
		MeTracksDeleteByIds(ids: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/tracks?ids=' + (ids == null ? '' : encodeURIComponent(ids)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)
		 * Get me/tracks/contains
		 * @param {string} ids A comma-separated list of IDs
		 * @return {Array<boolean>} OK
		 */
		MeTracksContainsGetByIds(ids: string, headersHandler?: () => HttpHeaders): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/tracks/contains?ids=' + (ids == null ? '' : encodeURIComponent(ids)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Search for an Item](https://developer.spotify.com/web-api/search-item/)
		 * Get search
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} q The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
		 * @param {string} type A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with "abacab" in their name.
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.
		 * @return {Search} OK
		 */
		SearchGetByLimitAndOffsetAndQAndTypeAndMarket(limit: number | null | undefined, offset: number | null | undefined, q: string, type: string, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Search> {
			return this.http.get<Search>(this.baseUri + 'search?limit=' + limit + '&offset=' + offset + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)
		 * Get tracks
		 * @param {string} ids A comma-separated list of IDs
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {TracksGetByIdsAndMarketReturn} OK
		 */
		TracksGetByIdsAndMarket(ids: string, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<TracksGetByIdsAndMarketReturn> {
			return this.http.get<TracksGetByIdsAndMarketReturn>(this.baseUri + 'tracks?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a Track](https://developer.spotify.com/web-api/get-track/)
		 * Get tracks/{id}
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {Track} OK
		 */
		Tracks_idGetByMarket(id: string, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Track> {
			return this.http.get<Track>(this.baseUri + 'tracks/' + (id == null ? '' : encodeURIComponent(id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)
		 * Get users/{user_id}
		 * @param {string} user_id The user's Spotify user ID.
		 * @return {User_profile} OK
		 */
		Users_user_idGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<User_profile> {
			return this.http.get<User_profile>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)
		 * Get users/{user_id}/playlists
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Playlist_simple_page} OK
		 */
		Users_user_idPlaylistsGetByLimitAndOffset(user_id: string, limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Playlist_simple_page> {
			return this.http.get<Playlist_simple_page>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)
		 * Post users/{user_id}/playlists
		 * @param {string} user_id The user's Spotify user ID.
		 * @return {void} 
		 */
		Users_user_idPlaylistsPost(user_id: string, requestBody: Users_user_idPlaylistsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)
		 * Get users/{user_id}/playlists/{playlist_id}
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @param {string} fields A comma-separated list of fields to filter query
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {Playlist} OK
		 */
		Users_user_idPlaylists_playlist_idGetByFieldsAndMarket(user_id: string, playlist_id: string, fields: string | null | undefined, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Playlist> {
			return this.http.get<Playlist>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)
		 * Put users/{user_id}/playlists/{playlist_id}
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @return {void} OK
		 */
		Users_user_idPlaylists_playlist_idPut(user_id: string, playlist_id: string, requestBody: Users_user_idPlaylists_playlist_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)
		 * Put users/{user_id}/playlists/{playlist_id}/followers
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @return {void} OK
		 */
		Users_user_idPlaylists_playlist_idFollowersPut(user_id: string, playlist_id: string, requestBody: Users_user_idPlaylists_playlist_idFollowersPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/followers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)
		 * Delete users/{user_id}/playlists/{playlist_id}/followers
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @return {void} OK
		 */
		Users_user_idPlaylists_playlist_idFollowersDelete(user_id: string, playlist_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/followers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)
		 * Get users/{user_id}/playlists/{playlist_id}/followers/contains
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @param {string} ids A comma-separated list of users ids
		 * @return {Array<boolean>} OK
		 */
		Users_user_idPlaylists_playlist_idFollowersContainsGetByIds(user_id: string, playlist_id: string, ids: string, headersHandler?: () => HttpHeaders): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/followers/contains&ids=' + (ids == null ? '' : encodeURIComponent(ids)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)
		 * Get users/{user_id}/playlists/{playlist_id}/tracks
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @param {number} limit The maximum number of items to return
		 *     Minimum: 0    Maximum: 50
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} fields A comma-separated list of fields to filter query
		 * @param {string} market The market (an ISO 3166-1 alpha-2 country code)
		 * @return {Playlist_track_page} OK
		 */
		Users_user_idPlaylists_playlist_idTracksGetByLimitAndOffsetAndFieldsAndMarket(user_id: string, playlist_id: string, limit: number | null | undefined, offset: number | null | undefined, fields: string | null | undefined, market: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Playlist_track_page> {
			return this.http.get<Playlist_track_page>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks&limit=' + limit + '&offset=' + offset + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)
		 * Put users/{user_id}/playlists/{playlist_id}/tracks
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @return {Playlist_snapshot} OK
		 */
		Users_user_idPlaylists_playlist_idTracksPut(user_id: string, playlist_id: string, requestBody: Users_user_idPlaylists_playlist_idTracksPutPutBody, headersHandler?: () => HttpHeaders): Observable<Playlist_snapshot> {
			return this.http.put<Playlist_snapshot>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)
		 * Post users/{user_id}/playlists/{playlist_id}/tracks
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @param {number} position The position to insert the tracks, a zero-based index
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} uris A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.
		 * @return {Playlist_snapshot} OK
		 */
		Users_user_idPlaylists_playlist_idTracksPostByPositionAndUris(user_id: string, playlist_id: string, position: number | null | undefined, uris: string, headersHandler?: () => HttpHeaders): Observable<Playlist_snapshot> {
			return this.http.post<Playlist_snapshot>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks&position=' + position + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)
		 * Delete users/{user_id}/playlists/{playlist_id}/tracks
		 * @param {string} user_id The user's Spotify user ID.
		 * @param {string} playlist_id The Spotify playlist ID.
		 * @return {Playlist_snapshot} OK
		 */
		Users_user_idPlaylists_playlist_idTracksDelete(user_id: string, playlist_id: string, headersHandler?: () => HttpHeaders): Observable<Playlist_snapshot> {
			return this.http.delete<Playlist_snapshot>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface AlbumsGetByIdsAndMarketReturn {
		albums?: Array<Album>;
	}
	export interface AlbumsGetByIdsAndMarketReturnFormProperties {
	}
	export function CreateAlbumsGetByIdsAndMarketReturnFormGroup() {
		return new FormGroup<AlbumsGetByIdsAndMarketReturnFormProperties>({
		});

	}

	export interface ArtistsGetByIdsReturn {
		artists?: Array<Artist>;
	}
	export interface ArtistsGetByIdsReturnFormProperties {
	}
	export function CreateArtistsGetByIdsReturnFormGroup() {
		return new FormGroup<ArtistsGetByIdsReturnFormProperties>({
		});

	}

	export interface Artists_idRelated_artistsGetReturn {
		artists?: Array<Artist>;
	}
	export interface Artists_idRelated_artistsGetReturnFormProperties {
	}
	export function CreateArtists_idRelated_artistsGetReturnFormGroup() {
		return new FormGroup<Artists_idRelated_artistsGetReturnFormProperties>({
		});

	}

	export interface Artists_idTop_tracksGetByCountryReturn {
		tracks?: Array<Track>;
	}
	export interface Artists_idTop_tracksGetByCountryReturnFormProperties {
	}
	export function CreateArtists_idTop_tracksGetByCountryReturnFormGroup() {
		return new FormGroup<Artists_idTop_tracksGetByCountryReturnFormProperties>({
		});

	}

	export interface BrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountryReturn {
		playlists?: Playlist_simple_page;
	}
	export interface BrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountryReturnFormProperties {
	}
	export function CreateBrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountryReturnFormGroup() {
		return new FormGroup<BrowseCategories_category_idPlaylistsGetByLimitAndOffsetAndCountryReturnFormProperties>({
		});

	}

	export enum MeFollowingGetByTypeAndLimitAndAfterType { artist = 0 }

	export enum MeFollowingPutByTypeAndIdsType { artist = 0, user = 1 }

	export interface TracksGetByIdsAndMarketReturn {
		tracks?: Array<Track>;
	}
	export interface TracksGetByIdsAndMarketReturnFormProperties {
	}
	export function CreateTracksGetByIdsAndMarketReturnFormGroup() {
		return new FormGroup<TracksGetByIdsAndMarketReturnFormProperties>({
		});

	}

	export interface Users_user_idPlaylistsPostPostBody {

		/** Required */
		name: string;
		public?: boolean | null;
	}
	export interface Users_user_idPlaylistsPostPostBodyFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateUsers_user_idPlaylistsPostPostBodyFormGroup() {
		return new FormGroup<Users_user_idPlaylistsPostPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Users_user_idPlaylists_playlist_idPutPutBody {
		name?: string | null;
		public?: boolean | null;
	}
	export interface Users_user_idPlaylists_playlist_idPutPutBodyFormProperties {
		name: FormControl<string | null | undefined>,
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateUsers_user_idPlaylists_playlist_idPutPutBodyFormGroup() {
		return new FormGroup<Users_user_idPlaylists_playlist_idPutPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Users_user_idPlaylists_playlist_idFollowersPutPutBody {
		public?: boolean | null;
	}
	export interface Users_user_idPlaylists_playlist_idFollowersPutPutBodyFormProperties {
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateUsers_user_idPlaylists_playlist_idFollowersPutPutBodyFormGroup() {
		return new FormGroup<Users_user_idPlaylists_playlist_idFollowersPutPutBodyFormProperties>({
			public: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Users_user_idPlaylists_playlist_idTracksPutPutBody {

		/** Required */
		uris: Array<string>;
	}
	export interface Users_user_idPlaylists_playlist_idTracksPutPutBodyFormProperties {
	}
	export function CreateUsers_user_idPlaylists_playlist_idTracksPutPutBodyFormGroup() {
		return new FormGroup<Users_user_idPlaylists_playlist_idTracksPutPutBodyFormProperties>({
		});

	}

}

