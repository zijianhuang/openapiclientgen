import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** User's activities. */
	export interface Activities {
		ActivitiesCollection?: Array<ActivitiesCollection>;
		future_href?: string | null;
		next_href?: string | null;
	}

	/** User's activities. */
	export interface ActivitiesFormProperties {
		future_href: FormControl<string | null | undefined>,
		next_href: FormControl<string | null | undefined>,
	}
	export function CreateActivitiesFormGroup() {
		return new FormGroup<ActivitiesFormProperties>({
			future_href: new FormControl<string | null | undefined>(undefined),
			next_href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivitiesCollection {

		/** Created timestamp. */
		created_at?: string | null;

		/** Origin. */
		origin?: string | null;

		/** Type of activity (track). */
		type?: string | null;
	}
	export interface ActivitiesCollectionFormProperties {

		/** Created timestamp. */
		created_at: FormControl<string | null | undefined>,

		/** Origin. */
		origin: FormControl<string | null | undefined>,

		/** Type of activity (track). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActivitiesCollectionFormGroup() {
		return new FormGroup<ActivitiesCollectionFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthorizationCode {

		/** Authorization code */
		authorization_code?: string | null;

		/** Client ID */
		client_id?: string | null;

		/** Client secret */
		client_secret?: string | null;
		grant_type?: AuthorizationCodeGrant_type | null;

		/** Redirect URI */
		redirect_uri?: string | null;
	}
	export interface AuthorizationCodeFormProperties {

		/** Authorization code */
		authorization_code: FormControl<string | null | undefined>,

		/** Client ID */
		client_id: FormControl<string | null | undefined>,

		/** Client secret */
		client_secret: FormControl<string | null | undefined>,
		grant_type: FormControl<AuthorizationCodeGrant_type | null | undefined>,

		/** Redirect URI */
		redirect_uri: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationCodeFormGroup() {
		return new FormGroup<AuthorizationCodeFormProperties>({
			authorization_code: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<AuthorizationCodeGrant_type | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthorizationCodeGrant_type { authorization_code = 'authorization_code', client_credentials = 'client_credentials' }


	/** User's Comment */
	export interface Comment {

		/** Comment body. */
		body?: string | null;

		/** Created timestamp. */
		created_at?: string | null;

		/**
		 * Identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Kind (comment). */
		kind?: string | null;

		/** Timestamp. */
		timestamp?: string | null;

		/**
		 * Track's identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_id?: number | null;

		/** Comment's URL. */
		uri?: string | null;

		/** SoundCloud User object */
		user?: CommentUser;

		/**
		 * User's identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id?: number | null;
	}

	/** User's Comment */
	export interface CommentFormProperties {

		/** Comment body. */
		body: FormControl<string | null | undefined>,

		/** Created timestamp. */
		created_at: FormControl<string | null | undefined>,

		/**
		 * Identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Kind (comment). */
		kind: FormControl<string | null | undefined>,

		/** Timestamp. */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * Track's identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_id: FormControl<number | null | undefined>,

		/** Comment's URL. */
		uri: FormControl<string | null | undefined>,

		/**
		 * User's identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			track_id: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CommentUser {

		/** URL to a JPEG image. */
		avatar_url?: string | null;

		/**
		 * number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count?: number | null;

		/**
		 * number of followed users.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count?: number | null;

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** kind of resource. */
		kind?: string | null;

		/** last modified timestamp. */
		last_modified?: string | null;

		/** permalink of the resource. */
		permalink?: string | null;

		/** URL to the SoundCloud.com page. */
		permalink_url?: string | null;

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count?: number | null;

		/** API resource URL. */
		uri?: string | null;

		/** username */
		username?: string | null;
	}
	export interface CommentUserFormProperties {

		/** URL to a JPEG image. */
		avatar_url: FormControl<string | null | undefined>,

		/**
		 * number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count: FormControl<number | null | undefined>,

		/**
		 * number of followed users.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count: FormControl<number | null | undefined>,

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** kind of resource. */
		kind: FormControl<string | null | undefined>,

		/** last modified timestamp. */
		last_modified: FormControl<string | null | undefined>,

		/** permalink of the resource. */
		permalink: FormControl<string | null | undefined>,

		/** URL to the SoundCloud.com page. */
		permalink_url: FormControl<string | null | undefined>,

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count: FormControl<number | null | undefined>,

		/** API resource URL. */
		uri: FormControl<string | null | undefined>,

		/** username */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCommentUserFormGroup() {
		return new FormGroup<CommentUserFormProperties>({
			avatar_url: new FormControl<string | null | undefined>(undefined),
			followers_count: new FormControl<number | null | undefined>(undefined),
			followings_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			permalink_url: new FormControl<string | null | undefined>(undefined),
			reposts_count: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Comments {
		collection?: Array<Comment>;
		next_href?: string | null;
	}
	export interface CommentsFormProperties {
		next_href: FormControl<string | null | undefined>,
	}
	export function CreateCommentsFormGroup() {
		return new FormGroup<CommentsFormProperties>({
			next_href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SoundCloud Complete User object */
	export interface CompleteUser {

		/** URL to a JPEG image. */
		avatar_url?: string | null;

		/** city. */
		city?: string | null;

		/** country. */
		country?: string | null;

		/** description. */
		description?: string | null;

		/** discogs name. */
		discogs_name?: string | null;

		/** first name. */
		first_name?: string | null;

		/**
		 * number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count?: number | null;

		/**
		 * number of followed users.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count?: number | null;

		/** first and last name. */
		full_name?: string | null;

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** kind of resource. */
		kind?: string | null;

		/** last modified timestamp. */
		last_modified?: string | null;

		/** last name. */
		last_name?: string | null;

		/** locale. */
		locale?: string | null;

		/** myspace name */
		myspace_name?: string | null;

		/** permalink of the resource. */
		permalink?: string | null;

		/** URL to the SoundCloud.com page. */
		permalink_url?: string | null;

		/** subscription plan of the user. */
		plan?: string | null;

		/**
		 * number of public playlists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playlist_count?: number | null;

		/** boolean if email is confirmed. */
		primary_email_confirmed?: boolean | null;

		/**
		 * number of private playlists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		private_playlists_count?: number | null;

		/**
		 * number of private tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		private_tracks_count?: number | null;

		/**
		 * number of favorited public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		public_favorites_count?: number | null;

		/** user's upload quota */
		quota?: CompleteUserQuota;

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count?: number | null;

		/** a list subscriptions associated with the user */
		subscriptions?: any;

		/**
		 * number of public tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count?: number | null;

		/** API resource URL. */
		uri?: string | null;

		/** username */
		username?: string | null;

		/** a URL to the website. */
		website?: string | null;

		/** a custom title for the website. */
		website_title?: string | null;
	}

	/** SoundCloud Complete User object */
	export interface CompleteUserFormProperties {

		/** URL to a JPEG image. */
		avatar_url: FormControl<string | null | undefined>,

		/** city. */
		city: FormControl<string | null | undefined>,

		/** country. */
		country: FormControl<string | null | undefined>,

		/** description. */
		description: FormControl<string | null | undefined>,

		/** discogs name. */
		discogs_name: FormControl<string | null | undefined>,

		/** first name. */
		first_name: FormControl<string | null | undefined>,

		/**
		 * number of followers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count: FormControl<number | null | undefined>,

		/**
		 * number of followed users.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count: FormControl<number | null | undefined>,

		/** first and last name. */
		full_name: FormControl<string | null | undefined>,

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** kind of resource. */
		kind: FormControl<string | null | undefined>,

		/** last modified timestamp. */
		last_modified: FormControl<string | null | undefined>,

		/** last name. */
		last_name: FormControl<string | null | undefined>,

		/** locale. */
		locale: FormControl<string | null | undefined>,

		/** myspace name */
		myspace_name: FormControl<string | null | undefined>,

		/** permalink of the resource. */
		permalink: FormControl<string | null | undefined>,

		/** URL to the SoundCloud.com page. */
		permalink_url: FormControl<string | null | undefined>,

		/** subscription plan of the user. */
		plan: FormControl<string | null | undefined>,

		/**
		 * number of public playlists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playlist_count: FormControl<number | null | undefined>,

		/** boolean if email is confirmed. */
		primary_email_confirmed: FormControl<boolean | null | undefined>,

		/**
		 * number of private playlists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		private_playlists_count: FormControl<number | null | undefined>,

		/**
		 * number of private tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		private_tracks_count: FormControl<number | null | undefined>,

		/**
		 * number of favorited public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		public_favorites_count: FormControl<number | null | undefined>,

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count: FormControl<number | null | undefined>,

		/** a list subscriptions associated with the user */
		subscriptions: FormControl<any | null | undefined>,

		/**
		 * number of public tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count: FormControl<number | null | undefined>,

		/** API resource URL. */
		uri: FormControl<string | null | undefined>,

		/** username */
		username: FormControl<string | null | undefined>,

		/** a URL to the website. */
		website: FormControl<string | null | undefined>,

		/** a custom title for the website. */
		website_title: FormControl<string | null | undefined>,
	}
	export function CreateCompleteUserFormGroup() {
		return new FormGroup<CompleteUserFormProperties>({
			avatar_url: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discogs_name: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			followers_count: new FormControl<number | null | undefined>(undefined),
			followings_count: new FormControl<number | null | undefined>(undefined),
			full_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			myspace_name: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			permalink_url: new FormControl<string | null | undefined>(undefined),
			plan: new FormControl<string | null | undefined>(undefined),
			playlist_count: new FormControl<number | null | undefined>(undefined),
			primary_email_confirmed: new FormControl<boolean | null | undefined>(undefined),
			private_playlists_count: new FormControl<number | null | undefined>(undefined),
			private_tracks_count: new FormControl<number | null | undefined>(undefined),
			public_favorites_count: new FormControl<number | null | undefined>(undefined),
			reposts_count: new FormControl<number | null | undefined>(undefined),
			subscriptions: new FormControl<any | null | undefined>(undefined),
			track_count: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			website_title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompleteUserQuota {

		/** unlimited upload quota. */
		unlimited_upload_quota?: boolean | null;

		/**
		 * upload seconds used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upload_seconds_used?: number | null;
	}
	export interface CompleteUserQuotaFormProperties {

		/** unlimited upload quota. */
		unlimited_upload_quota: FormControl<boolean | null | undefined>,

		/**
		 * upload seconds used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upload_seconds_used: FormControl<number | null | undefined>,
	}
	export function CreateCompleteUserQuotaFormGroup() {
		return new FormGroup<CompleteUserQuotaFormProperties>({
			unlimited_upload_quota: new FormControl<boolean | null | undefined>(undefined),
			upload_seconds_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Connection {

		/** Created timestamp. */
		created_at?: string | null;

		/** Full Name. */
		display_name?: string | null;

		/**
		 * Unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Kind of resource. */
		kind?: string | null;
		post_favorite?: boolean | null;
		post_publish?: boolean | null;

		/** Service. */
		service?: string | null;

		/** Type. */
		type?: string | null;

		/** The external link URI. */
		uri?: string | null;
	}
	export interface ConnectionFormProperties {

		/** Created timestamp. */
		created_at: FormControl<string | null | undefined>,

		/** Full Name. */
		display_name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Kind of resource. */
		kind: FormControl<string | null | undefined>,
		post_favorite: FormControl<boolean | null | undefined>,
		post_publish: FormControl<boolean | null | undefined>,

		/** Service. */
		service: FormControl<string | null | undefined>,

		/** Type. */
		type: FormControl<string | null | undefined>,

		/** The external link URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			post_favorite: new FormControl<boolean | null | undefined>(undefined),
			post_publish: new FormControl<boolean | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUpdatePlaylistRequest {
		playlist?: CreateUpdatePlaylistRequestPlaylist;
	}
	export interface CreateUpdatePlaylistRequestFormProperties {
	}
	export function CreateCreateUpdatePlaylistRequestFormGroup() {
		return new FormGroup<CreateUpdatePlaylistRequestFormProperties>({
		});

	}

	export interface CreateUpdatePlaylistRequestPlaylist {

		/** Description of the playlist */
		description?: string | null;

		/** public or private */
		sharing?: CreateUpdatePlaylistRequestPlaylistSharing | null;

		/** Title of the playlist */
		title?: string | null;

		/** List of tracks to add to playlist */
		CreateUpdatePlaylistRequestPlaylistTracks?: Array<CreateUpdatePlaylistRequestPlaylistTracks>;
	}
	export interface CreateUpdatePlaylistRequestPlaylistFormProperties {

		/** Description of the playlist */
		description: FormControl<string | null | undefined>,

		/** public or private */
		sharing: FormControl<CreateUpdatePlaylistRequestPlaylistSharing | null | undefined>,

		/** Title of the playlist */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdatePlaylistRequestPlaylistFormGroup() {
		return new FormGroup<CreateUpdatePlaylistRequestPlaylistFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			sharing: new FormControl<CreateUpdatePlaylistRequestPlaylistSharing | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateUpdatePlaylistRequestPlaylistSharing { public = 'public', private = 'private' }

	export interface CreateUpdatePlaylistRequestPlaylistTracks {

		/**
		 * SoundCloud track id
		 * Required
		 */
		id: string;
	}
	export interface CreateUpdatePlaylistRequestPlaylistTracksFormProperties {

		/**
		 * SoundCloud track id
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdatePlaylistRequestPlaylistTracksFormGroup() {
		return new FormGroup<CreateUpdatePlaylistRequestPlaylistTracksFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		error?: string | null;
		errors?: Array<string>;
		link?: string | null;
		message?: string | null;
		status?: string | null;
	}
	export interface ErrorFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		error: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Found {

		/** Location URL of the resource. */
		location?: string | null;

		/** Status code. */
		status?: string | null;
	}
	export interface FoundFormProperties {

		/** Location URL of the resource. */
		location: FormControl<string | null | undefined>,

		/** Status code. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateFoundFormGroup() {
		return new FormGroup<FoundFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SoundCloud User object. */
	export interface MetaUser {

		/** URL to a JPEG image */
		avatar_url?: string | null;

		/** profile creation datetime */
		created_at?: Date | null;

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** kind of resource */
		kind?: string | null;

		/** last modified datetime */
		last_modified?: Date | null;

		/** permalink of the resource */
		permalink?: string | null;

		/** URL to the SoundCloud.com page */
		permalink_url?: string | null;

		/** API resource URL */
		uri?: string | null;

		/** username */
		username?: string | null;
	}

	/** SoundCloud User object. */
	export interface MetaUserFormProperties {

		/** URL to a JPEG image */
		avatar_url: FormControl<string | null | undefined>,

		/** profile creation datetime */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** kind of resource */
		kind: FormControl<string | null | undefined>,

		/** last modified datetime */
		last_modified: FormControl<Date | null | undefined>,

		/** permalink of the resource */
		permalink: FormControl<string | null | undefined>,

		/** URL to the SoundCloud.com page */
		permalink_url: FormControl<string | null | undefined>,

		/** API resource URL */
		uri: FormControl<string | null | undefined>,

		/** username */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMetaUserFormGroup() {
		return new FormGroup<MetaUserFormProperties>({
			avatar_url: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<Date | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			permalink_url: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetaUsers {
		collection?: Array<MetaUser>;
		next_href?: string | null;
	}
	export interface MetaUsersFormProperties {
		next_href: FormControl<string | null | undefined>,
	}
	export function CreateMetaUsersFormGroup() {
		return new FormGroup<MetaUsersFormProperties>({
			next_href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Password {

		/** Client ID */
		client_id?: string | null;

		/** Client secret */
		client_secret?: string | null;
		grant_type?: PasswordGrant_type | null;

		/** User password */
		password?: string | null;

		/** Redirect URI */
		redirect_uri?: string | null;

		/** User name */
		user_name?: string | null;
	}
	export interface PasswordFormProperties {

		/** Client ID */
		client_id: FormControl<string | null | undefined>,

		/** Client secret */
		client_secret: FormControl<string | null | undefined>,
		grant_type: FormControl<PasswordGrant_type | null | undefined>,

		/** User password */
		password: FormControl<string | null | undefined>,

		/** Redirect URI */
		redirect_uri: FormControl<string | null | undefined>,

		/** User name */
		user_name: FormControl<string | null | undefined>,
	}
	export function CreatePasswordFormGroup() {
		return new FormGroup<PasswordFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<PasswordGrant_type | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
			user_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PasswordGrant_type { password = 'password' }


	/** Soundcloud Playlist Object */
	export interface Playlist {

		/** URL to a JPEG image. */
		artwork_url?: string | null;

		/** Created timestamp. */
		created_at?: string | null;

		/** Playlist description. */
		description?: string | null;

		/** is downloadable. */
		downloadable?: boolean | null;

		/**
		 * Playlist duration.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** European Article Number. */
		ean?: string | null;

		/** Embeddable by. */
		embeddable_by?: string | null;

		/** Playlist genre. */
		genre?: string | null;

		/**
		 * Playlist identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Type of Soundcloud object (playlist). */
		kind?: string | null;

		/** SoundCloud User object. */
		label?: MetaUser;

		/**
		 * Label user identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		label_id?: number | null;

		/** Label name. */
		label_name?: string | null;

		/** Last modified timestamp. */
		last_modified?: string | null;

		/** License. */
		license?: string | null;

		/**
		 * Count of playlist likes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		likes_count?: number | null;

		/** Playlist permalink. */
		permalink?: string | null;

		/** Playlist permalink URL. */
		permalink_url?: string | null;

		/** Type of playlist. */
		playlist_type?: string | null;

		/** Purchase title. */
		purchase_title?: string | null;

		/** Purchase URL. */
		purchase_url?: string | null;

		/** Release. */
		release?: string | null;

		/**
		 * Day of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_day?: number | null;

		/**
		 * Month of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_month?: number | null;

		/**
		 * Year of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_year?: number | null;

		/** Type of sharing (private/public). */
		sharing?: string | null;

		/** Is streamable. */
		streamable?: boolean | null;

		/** Tags. */
		tag_list?: string | null;

		/** Tags. */
		tags?: string | null;

		/** Playlist title. */
		title?: string | null;

		/**
		 * Count of tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count?: number | null;

		/** List of tracks. */
		tracks?: Array<Track>;

		/** tracks URI. */
		tracks_uri?: string | null;

		/** Playlist type. */
		type?: string | null;

		/** Playlist URI. */
		uri?: string | null;

		/** SoundCloud User object. */
		user?: MetaUser;

		/**
		 * User identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id?: number | null;
	}

	/** Soundcloud Playlist Object */
	export interface PlaylistFormProperties {

		/** URL to a JPEG image. */
		artwork_url: FormControl<string | null | undefined>,

		/** Created timestamp. */
		created_at: FormControl<string | null | undefined>,

		/** Playlist description. */
		description: FormControl<string | null | undefined>,

		/** is downloadable. */
		downloadable: FormControl<boolean | null | undefined>,

		/**
		 * Playlist duration.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** Embeddable by. */
		embeddable_by: FormControl<string | null | undefined>,

		/** Playlist genre. */
		genre: FormControl<string | null | undefined>,

		/**
		 * Playlist identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Type of Soundcloud object (playlist). */
		kind: FormControl<string | null | undefined>,

		/**
		 * Label user identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		label_id: FormControl<number | null | undefined>,

		/** Label name. */
		label_name: FormControl<string | null | undefined>,

		/** Last modified timestamp. */
		last_modified: FormControl<string | null | undefined>,

		/** License. */
		license: FormControl<string | null | undefined>,

		/**
		 * Count of playlist likes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		likes_count: FormControl<number | null | undefined>,

		/** Playlist permalink. */
		permalink: FormControl<string | null | undefined>,

		/** Playlist permalink URL. */
		permalink_url: FormControl<string | null | undefined>,

		/** Type of playlist. */
		playlist_type: FormControl<string | null | undefined>,

		/** Purchase title. */
		purchase_title: FormControl<string | null | undefined>,

		/** Purchase URL. */
		purchase_url: FormControl<string | null | undefined>,

		/** Release. */
		release: FormControl<string | null | undefined>,

		/**
		 * Day of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_day: FormControl<number | null | undefined>,

		/**
		 * Month of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_month: FormControl<number | null | undefined>,

		/**
		 * Year of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_year: FormControl<number | null | undefined>,

		/** Type of sharing (private/public). */
		sharing: FormControl<string | null | undefined>,

		/** Is streamable. */
		streamable: FormControl<boolean | null | undefined>,

		/** Tags. */
		tag_list: FormControl<string | null | undefined>,

		/** Tags. */
		tags: FormControl<string | null | undefined>,

		/** Playlist title. */
		title: FormControl<string | null | undefined>,

		/**
		 * Count of tracks.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count: FormControl<number | null | undefined>,

		/** tracks URI. */
		tracks_uri: FormControl<string | null | undefined>,

		/** Playlist type. */
		type: FormControl<string | null | undefined>,

		/** Playlist URI. */
		uri: FormControl<string | null | undefined>,

		/**
		 * User identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreatePlaylistFormGroup() {
		return new FormGroup<PlaylistFormProperties>({
			artwork_url: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			downloadable: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			embeddable_by: new FormControl<string | null | undefined>(undefined),
			genre: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			label_id: new FormControl<number | null | undefined>(undefined),
			label_name: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined),
			likes_count: new FormControl<number | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			permalink_url: new FormControl<string | null | undefined>(undefined),
			playlist_type: new FormControl<string | null | undefined>(undefined),
			purchase_title: new FormControl<string | null | undefined>(undefined),
			purchase_url: new FormControl<string | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			release_day: new FormControl<number | null | undefined>(undefined),
			release_month: new FormControl<number | null | undefined>(undefined),
			release_year: new FormControl<number | null | undefined>(undefined),
			sharing: new FormControl<string | null | undefined>(undefined),
			streamable: new FormControl<boolean | null | undefined>(undefined),
			tag_list: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			track_count: new FormControl<number | null | undefined>(undefined),
			tracks_uri: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Soundcloud Track object. */
	export interface Track {

		/**
		 * Level of access the user (logged in or anonymous) has to the track.
		 * * `playable` - user is allowed to listen to a full track.
		 * * `preview` - user is allowed to preview a track, meaning a snippet is available
		 * * `blocked` - user can only see the metadata of a track, no streaming is possible
		 */
		access?: TrackAccess | null;

		/** URL to a JPEG image. */
		artwork_url?: string | null;

		/** List of countries where track is available. */
		available_country_codes?: string | null;

		/**
		 * Tempo.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bpm?: number | null;

		/**
		 * Number of comments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		comment_count?: number | null;

		/** Is commentable. */
		commentable?: boolean | null;

		/** Created timestamp. */
		created_at?: string | null;

		/** Track description. */
		description?: string | null;

		/**
		 * NUmber of downloads.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		download_count?: number | null;

		/** URL to download a track. */
		download_url?: string | null;

		/** Is downloadable. */
		downloadable?: string | null;

		/**
		 * Track duration.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** Embeddable by. */
		embeddable_by?: string | null;

		/**
		 * Number of favoritings.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		favoritings_count?: number | null;

		/** Genre */
		genre?: string | null;

		/**
		 * Track identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** ISRC code. */
		isrc?: string | null;

		/** Key signature. */
		key_signature?: string | null;

		/** Type of object (track). */
		kind?: string | null;

		/** Label user name. */
		label_name?: string | null;

		/** License */
		license?: string | null;

		/** Permalink URL. */
		permalink_url?: string | null;

		/**
		 * Number of plays.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playback_count?: number | null;

		/** Purchase title. */
		purchase_title?: string | null;

		/** Purchase URL. */
		purchase_url?: string | null;

		/** Release. */
		release?: string | null;

		/**
		 * Day of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_day?: number | null;

		/**
		 * Month of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_month?: number | null;

		/**
		 * Year of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_year?: number | null;

		/**
		 * Number of reposts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count?: number | null;

		/** Secret URL. */
		secret_uri?: string | null;

		/** Type of sharing (public/private). */
		sharing?: string | null;

		/** URL to stream. */
		stream_url?: string | null;

		/** Is streamable. */
		streamable?: boolean | null;

		/** Tags. */
		tag_list?: string | null;

		/** Track title. */
		title?: string | null;

		/** Track URI. */
		uri?: string | null;

		/** SoundCloud User object. */
		user?: MetaUser;

		/** Is user's favourite. */
		user_favorite?: boolean | null;

		/**
		 * Number of plays by a user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_playback_count?: number | null;

		/** Waveform URL. */
		waveform_url?: string | null;
	}

	/** Soundcloud Track object. */
	export interface TrackFormProperties {

		/**
		 * Level of access the user (logged in or anonymous) has to the track.
		 * * `playable` - user is allowed to listen to a full track.
		 * * `preview` - user is allowed to preview a track, meaning a snippet is available
		 * * `blocked` - user can only see the metadata of a track, no streaming is possible
		 */
		access: FormControl<TrackAccess | null | undefined>,

		/** URL to a JPEG image. */
		artwork_url: FormControl<string | null | undefined>,

		/** List of countries where track is available. */
		available_country_codes: FormControl<string | null | undefined>,

		/**
		 * Tempo.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bpm: FormControl<number | null | undefined>,

		/**
		 * Number of comments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		comment_count: FormControl<number | null | undefined>,

		/** Is commentable. */
		commentable: FormControl<boolean | null | undefined>,

		/** Created timestamp. */
		created_at: FormControl<string | null | undefined>,

		/** Track description. */
		description: FormControl<string | null | undefined>,

		/**
		 * NUmber of downloads.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		download_count: FormControl<number | null | undefined>,

		/** URL to download a track. */
		download_url: FormControl<string | null | undefined>,

		/** Is downloadable. */
		downloadable: FormControl<string | null | undefined>,

		/**
		 * Track duration.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** Embeddable by. */
		embeddable_by: FormControl<string | null | undefined>,

		/**
		 * Number of favoritings.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		favoritings_count: FormControl<number | null | undefined>,

		/** Genre */
		genre: FormControl<string | null | undefined>,

		/**
		 * Track identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** ISRC code. */
		isrc: FormControl<string | null | undefined>,

		/** Key signature. */
		key_signature: FormControl<string | null | undefined>,

		/** Type of object (track). */
		kind: FormControl<string | null | undefined>,

		/** Label user name. */
		label_name: FormControl<string | null | undefined>,

		/** License */
		license: FormControl<string | null | undefined>,

		/** Permalink URL. */
		permalink_url: FormControl<string | null | undefined>,

		/**
		 * Number of plays.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playback_count: FormControl<number | null | undefined>,

		/** Purchase title. */
		purchase_title: FormControl<string | null | undefined>,

		/** Purchase URL. */
		purchase_url: FormControl<string | null | undefined>,

		/** Release. */
		release: FormControl<string | null | undefined>,

		/**
		 * Day of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_day: FormControl<number | null | undefined>,

		/**
		 * Month of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_month: FormControl<number | null | undefined>,

		/**
		 * Year of release.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		release_year: FormControl<number | null | undefined>,

		/**
		 * Number of reposts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count: FormControl<number | null | undefined>,

		/** Secret URL. */
		secret_uri: FormControl<string | null | undefined>,

		/** Type of sharing (public/private). */
		sharing: FormControl<string | null | undefined>,

		/** URL to stream. */
		stream_url: FormControl<string | null | undefined>,

		/** Is streamable. */
		streamable: FormControl<boolean | null | undefined>,

		/** Tags. */
		tag_list: FormControl<string | null | undefined>,

		/** Track title. */
		title: FormControl<string | null | undefined>,

		/** Track URI. */
		uri: FormControl<string | null | undefined>,

		/** Is user's favourite. */
		user_favorite: FormControl<boolean | null | undefined>,

		/**
		 * Number of plays by a user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_playback_count: FormControl<number | null | undefined>,

		/** Waveform URL. */
		waveform_url: FormControl<string | null | undefined>,
	}
	export function CreateTrackFormGroup() {
		return new FormGroup<TrackFormProperties>({
			access: new FormControl<TrackAccess | null | undefined>(undefined),
			artwork_url: new FormControl<string | null | undefined>(undefined),
			available_country_codes: new FormControl<string | null | undefined>(undefined),
			bpm: new FormControl<number | null | undefined>(undefined),
			comment_count: new FormControl<number | null | undefined>(undefined),
			commentable: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			download_count: new FormControl<number | null | undefined>(undefined),
			download_url: new FormControl<string | null | undefined>(undefined),
			downloadable: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			embeddable_by: new FormControl<string | null | undefined>(undefined),
			favoritings_count: new FormControl<number | null | undefined>(undefined),
			genre: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isrc: new FormControl<string | null | undefined>(undefined),
			key_signature: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			label_name: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined),
			permalink_url: new FormControl<string | null | undefined>(undefined),
			playback_count: new FormControl<number | null | undefined>(undefined),
			purchase_title: new FormControl<string | null | undefined>(undefined),
			purchase_url: new FormControl<string | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			release_day: new FormControl<number | null | undefined>(undefined),
			release_month: new FormControl<number | null | undefined>(undefined),
			release_year: new FormControl<number | null | undefined>(undefined),
			reposts_count: new FormControl<number | null | undefined>(undefined),
			secret_uri: new FormControl<string | null | undefined>(undefined),
			sharing: new FormControl<string | null | undefined>(undefined),
			stream_url: new FormControl<string | null | undefined>(undefined),
			streamable: new FormControl<boolean | null | undefined>(undefined),
			tag_list: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			user_favorite: new FormControl<boolean | null | undefined>(undefined),
			user_playback_count: new FormControl<number | null | undefined>(undefined),
			waveform_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrackAccess { playable = 'playable', preview = 'preview', blocked = 'blocked', _null = 3 }

	export interface Playlists {
		collection?: Array<Playlist>;
		next_href?: string | null;
	}
	export interface PlaylistsFormProperties {
		next_href: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistsFormGroup() {
		return new FormGroup<PlaylistsFormProperties>({
			next_href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefreshToken {

		/** Client ID */
		client_id?: string | null;

		/** Client secret */
		client_secret?: string | null;
		grant_type?: RefreshTokenGrant_type | null;

		/** Redirect URI */
		redirect_uri?: string | null;

		/** Refresh token */
		refresh_token?: string | null;
	}
	export interface RefreshTokenFormProperties {

		/** Client ID */
		client_id: FormControl<string | null | undefined>,

		/** Client secret */
		client_secret: FormControl<string | null | undefined>,
		grant_type: FormControl<RefreshTokenGrant_type | null | undefined>,

		/** Redirect URI */
		redirect_uri: FormControl<string | null | undefined>,

		/** Refresh token */
		refresh_token: FormControl<string | null | undefined>,
	}
	export function CreateRefreshTokenFormGroup() {
		return new FormGroup<RefreshTokenFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<RefreshTokenGrant_type | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RefreshTokenGrant_type { refresh_token = 'refresh_token' }

	export interface Streams {
		hls_mp3_128_url?: string | null;
		hls_opus_64_url?: string | null;
		http_mp3_128_url?: string | null;
		preview_mp3_128_url?: string | null;
	}
	export interface StreamsFormProperties {
		hls_mp3_128_url: FormControl<string | null | undefined>,
		hls_opus_64_url: FormControl<string | null | undefined>,
		http_mp3_128_url: FormControl<string | null | undefined>,
		preview_mp3_128_url: FormControl<string | null | undefined>,
	}
	export function CreateStreamsFormGroup() {
		return new FormGroup<StreamsFormProperties>({
			hls_mp3_128_url: new FormControl<string | null | undefined>(undefined),
			hls_opus_64_url: new FormControl<string | null | undefined>(undefined),
			http_mp3_128_url: new FormControl<string | null | undefined>(undefined),
			preview_mp3_128_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyRequests extends Error {
		spam_warning_urn?: string | null;
	}
	export interface TooManyRequestsFormProperties extends ErrorFormProperties {
		spam_warning_urn: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsFormGroup() {
		return new FormGroup<TooManyRequestsFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			spam_warning_urn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackDataRequest {
		'track[artwork_data]'?: string | null;
		'track[asset_data]'?: string | null;
		'track[commentable]'?: boolean | null;
		'track[description]'?: string | null;
		'track[downloadable]'?: boolean | null;

		/** who can embed this track "all", "me", or "none" */
		'track[embeddable_by]'?: TrackDataRequestTrack_embeddable_by_ | null;
		'track[genre]'?: string | null;
		'track[isrc]'?: string | null;
		'track[label_name]'?: string | null;

		/** Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa */
		'track[license]'?: TrackDataRequestTrack_license_ | null;
		'track[permalink]'?: string | null;
		'track[purchase_url]'?: string | null;
		'track[release]'?: string | null;

		/** string, formatted as yyyy-mm-dd, representing release date */
		'track[release_date]'?: string | null;
		'track[sharing]'?: CreateUpdatePlaylistRequestPlaylistSharing | null;
		'track[streamable]'?: boolean | null;

		/** The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages. */
		'track[tag_list]'?: string | null;
		'track[title]'?: string | null;
	}
	export interface TrackDataRequestFormProperties {
		'track[artwork_data]': FormControl<string | null | undefined>,
		'track[asset_data]': FormControl<string | null | undefined>,
		'track[commentable]': FormControl<boolean | null | undefined>,
		'track[description]': FormControl<string | null | undefined>,
		'track[downloadable]': FormControl<boolean | null | undefined>,

		/** who can embed this track "all", "me", or "none" */
		'track[embeddable_by]': FormControl<TrackDataRequestTrack_embeddable_by_ | null | undefined>,
		'track[genre]': FormControl<string | null | undefined>,
		'track[isrc]': FormControl<string | null | undefined>,
		'track[label_name]': FormControl<string | null | undefined>,

		/** Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa */
		'track[license]': FormControl<TrackDataRequestTrack_license_ | null | undefined>,
		'track[permalink]': FormControl<string | null | undefined>,
		'track[purchase_url]': FormControl<string | null | undefined>,
		'track[release]': FormControl<string | null | undefined>,

		/** string, formatted as yyyy-mm-dd, representing release date */
		'track[release_date]': FormControl<string | null | undefined>,
		'track[sharing]': FormControl<CreateUpdatePlaylistRequestPlaylistSharing | null | undefined>,
		'track[streamable]': FormControl<boolean | null | undefined>,

		/** The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages. */
		'track[tag_list]': FormControl<string | null | undefined>,
		'track[title]': FormControl<string | null | undefined>,
	}
	export function CreateTrackDataRequestFormGroup() {
		return new FormGroup<TrackDataRequestFormProperties>({
			'track[artwork_data]': new FormControl<string | null | undefined>(undefined),
			'track[asset_data]': new FormControl<string | null | undefined>(undefined),
			'track[commentable]': new FormControl<boolean | null | undefined>(undefined),
			'track[description]': new FormControl<string | null | undefined>(undefined),
			'track[downloadable]': new FormControl<boolean | null | undefined>(undefined),
			'track[embeddable_by]': new FormControl<TrackDataRequestTrack_embeddable_by_ | null | undefined>(undefined),
			'track[genre]': new FormControl<string | null | undefined>(undefined),
			'track[isrc]': new FormControl<string | null | undefined>(undefined),
			'track[label_name]': new FormControl<string | null | undefined>(undefined),
			'track[license]': new FormControl<TrackDataRequestTrack_license_ | null | undefined>(undefined),
			'track[permalink]': new FormControl<string | null | undefined>(undefined),
			'track[purchase_url]': new FormControl<string | null | undefined>(undefined),
			'track[release]': new FormControl<string | null | undefined>(undefined),
			'track[release_date]': new FormControl<string | null | undefined>(undefined),
			'track[sharing]': new FormControl<CreateUpdatePlaylistRequestPlaylistSharing | null | undefined>(undefined),
			'track[streamable]': new FormControl<boolean | null | undefined>(undefined),
			'track[tag_list]': new FormControl<string | null | undefined>(undefined),
			'track[title]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrackDataRequestTrack_embeddable_by_ { all = 'all', me = 'me', none = 'none' }

	export enum TrackDataRequestTrack_license_ { 'no-rights-reserved' = 'no-rights-reserved', 'all-rights-reserved' = 'all-rights-reserved', 'cc-by' = 'cc-by', 'cc-by-nc' = 'cc-by-nc', 'cc-by-nd' = 'cc-by-nd', 'cc-by-sa' = 'cc-by-sa', 'cc-by-nc-nd' = 'cc-by-nc-nd', 'cc-by-nc-sa' = 'cc-by-nc-sa' }

	export interface TrackMetadataRequest {
		track?: TrackMetadataRequestTrack;
	}
	export interface TrackMetadataRequestFormProperties {
	}
	export function CreateTrackMetadataRequestFormGroup() {
		return new FormGroup<TrackMetadataRequestFormProperties>({
		});

	}

	export interface TrackMetadataRequestTrack {
		commentable?: boolean | null;
		description?: string | null;
		downloadable?: boolean | null;

		/** who can embed this track "all", "me", or "none" */
		embeddable_by?: TrackDataRequestTrack_embeddable_by_ | null;
		genre?: string | null;
		isrc?: string | null;
		label_name?: string | null;

		/** Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa */
		license?: TrackDataRequestTrack_license_ | null;
		permalink?: string | null;
		purchase_url?: string | null;
		release?: string | null;

		/** string, formatted as yyyy-mm-dd, representing release date */
		release_date?: string | null;
		sharing?: CreateUpdatePlaylistRequestPlaylistSharing | null;
		streamable?: boolean | null;

		/** The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages. */
		tag_list?: string | null;
		title?: string | null;
	}
	export interface TrackMetadataRequestTrackFormProperties {
		commentable: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		downloadable: FormControl<boolean | null | undefined>,

		/** who can embed this track "all", "me", or "none" */
		embeddable_by: FormControl<TrackDataRequestTrack_embeddable_by_ | null | undefined>,
		genre: FormControl<string | null | undefined>,
		isrc: FormControl<string | null | undefined>,
		label_name: FormControl<string | null | undefined>,

		/** Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa */
		license: FormControl<TrackDataRequestTrack_license_ | null | undefined>,
		permalink: FormControl<string | null | undefined>,
		purchase_url: FormControl<string | null | undefined>,
		release: FormControl<string | null | undefined>,

		/** string, formatted as yyyy-mm-dd, representing release date */
		release_date: FormControl<string | null | undefined>,
		sharing: FormControl<CreateUpdatePlaylistRequestPlaylistSharing | null | undefined>,
		streamable: FormControl<boolean | null | undefined>,

		/** The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages. */
		tag_list: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateTrackMetadataRequestTrackFormGroup() {
		return new FormGroup<TrackMetadataRequestTrackFormProperties>({
			commentable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			downloadable: new FormControl<boolean | null | undefined>(undefined),
			embeddable_by: new FormControl<TrackDataRequestTrack_embeddable_by_ | null | undefined>(undefined),
			genre: new FormControl<string | null | undefined>(undefined),
			isrc: new FormControl<string | null | undefined>(undefined),
			label_name: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<TrackDataRequestTrack_license_ | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			purchase_url: new FormControl<string | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined),
			sharing: new FormControl<CreateUpdatePlaylistRequestPlaylistSharing | null | undefined>(undefined),
			streamable: new FormControl<boolean | null | undefined>(undefined),
			tag_list: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tracks {
		collection?: Array<Track>;
		next_href?: string | null;
	}
	export interface TracksFormProperties {
		next_href: FormControl<string | null | undefined>,
	}
	export function CreateTracksFormGroup() {
		return new FormGroup<TracksFormProperties>({
			next_href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SoundCloud User object */
	export interface User {

		/** URL to a JPEG image */
		avatar_url?: string | null;

		/** city */
		city?: string | null;

		/** country */
		country?: string | null;

		/** profile creation datetime */
		created_at?: Date | null;

		/** description */
		description?: string | null;

		/** discogs name */
		discogs_name?: string | null;

		/** first name */
		first_name?: string | null;

		/**
		 * number of followers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count?: number | null;

		/**
		 * number of followed users
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count?: number | null;

		/** first and last name */
		full_name?: string | null;

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** kind of resource */
		kind?: string | null;

		/** last modified datetime */
		last_modified?: Date | null;

		/** last name */
		last_name?: string | null;

		/** myspace name */
		myspace_name?: string | null;

		/** permalink of the resource */
		permalink?: string | null;

		/** URL to the SoundCloud.com page */
		permalink_url?: string | null;

		/** subscription plan of the user */
		plan?: string | null;

		/**
		 * number of public playlists
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playlist_count?: number | null;

		/**
		 * number of favorited public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		public_favorites_count?: number | null;

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count?: number | null;

		/** a list subscriptions associated with the user */
		subscriptions?: any;

		/**
		 * number of public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count?: number | null;

		/** API resource URL */
		uri?: string | null;

		/** username */
		username?: string | null;

		/** a URL to the website */
		website?: string | null;

		/** a custom title for the website */
		website_title?: string | null;
	}

	/** SoundCloud User object */
	export interface UserFormProperties {

		/** URL to a JPEG image */
		avatar_url: FormControl<string | null | undefined>,

		/** city */
		city: FormControl<string | null | undefined>,

		/** country */
		country: FormControl<string | null | undefined>,

		/** profile creation datetime */
		created_at: FormControl<Date | null | undefined>,

		/** description */
		description: FormControl<string | null | undefined>,

		/** discogs name */
		discogs_name: FormControl<string | null | undefined>,

		/** first name */
		first_name: FormControl<string | null | undefined>,

		/**
		 * number of followers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count: FormControl<number | null | undefined>,

		/**
		 * number of followed users
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count: FormControl<number | null | undefined>,

		/** first and last name */
		full_name: FormControl<string | null | undefined>,

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** kind of resource */
		kind: FormControl<string | null | undefined>,

		/** last modified datetime */
		last_modified: FormControl<Date | null | undefined>,

		/** last name */
		last_name: FormControl<string | null | undefined>,

		/** myspace name */
		myspace_name: FormControl<string | null | undefined>,

		/** permalink of the resource */
		permalink: FormControl<string | null | undefined>,

		/** URL to the SoundCloud.com page */
		permalink_url: FormControl<string | null | undefined>,

		/** subscription plan of the user */
		plan: FormControl<string | null | undefined>,

		/**
		 * number of public playlists
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playlist_count: FormControl<number | null | undefined>,

		/**
		 * number of favorited public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		public_favorites_count: FormControl<number | null | undefined>,

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count: FormControl<number | null | undefined>,

		/** a list subscriptions associated with the user */
		subscriptions: FormControl<any | null | undefined>,

		/**
		 * number of public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count: FormControl<number | null | undefined>,

		/** API resource URL */
		uri: FormControl<string | null | undefined>,

		/** username */
		username: FormControl<string | null | undefined>,

		/** a URL to the website */
		website: FormControl<string | null | undefined>,

		/** a custom title for the website */
		website_title: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			avatar_url: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discogs_name: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			followers_count: new FormControl<number | null | undefined>(undefined),
			followings_count: new FormControl<number | null | undefined>(undefined),
			full_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			myspace_name: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			permalink_url: new FormControl<string | null | undefined>(undefined),
			plan: new FormControl<string | null | undefined>(undefined),
			playlist_count: new FormControl<number | null | undefined>(undefined),
			public_favorites_count: new FormControl<number | null | undefined>(undefined),
			reposts_count: new FormControl<number | null | undefined>(undefined),
			subscriptions: new FormControl<any | null | undefined>(undefined),
			track_count: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			website_title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users {
		collection?: Array<User>;
		next_href?: string | null;
	}
	export interface UsersFormProperties {
		next_href: FormControl<string | null | undefined>,
	}
	export function CreateUsersFormGroup() {
		return new FormGroup<UsersFormProperties>({
			next_href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SoundCloud User object */
	export interface UsersListElement {

		/** URL to a JPEG image */
		avatar_url?: string | null;

		/** city */
		city?: string | null;

		/** country */
		country?: string | null;

		/** description */
		description?: string | null;

		/** discogs name */
		discogs_name?: string | null;

		/** first name */
		first_name?: string | null;

		/**
		 * number of followers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count?: number | null;

		/**
		 * number of followed users
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count?: number | null;

		/** first and last name */
		full_name?: string | null;

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** kind of resource */
		kind?: string | null;

		/** last modified datetime */
		last_modified?: Date | null;

		/** last name */
		last_name?: string | null;

		/** myspace name */
		myspace_name?: string | null;

		/** permalink of the resource */
		permalink?: string | null;

		/** URL to the SoundCloud.com page */
		permalink_url?: string | null;

		/** subscription plan of the user */
		plan?: string | null;

		/**
		 * number of public playlists
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playlist_count?: number | null;

		/**
		 * number of favorited public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		public_favorites_count?: number | null;

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count?: number | null;

		/** a list subscriptions associated with the user */
		subscriptions?: any;

		/**
		 * number of public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count?: number | null;

		/** API resource URL */
		uri?: string | null;

		/** username */
		username?: string | null;

		/** a URL to the website */
		website?: string | null;

		/** a custom title for the website */
		website_title?: string | null;
	}

	/** SoundCloud User object */
	export interface UsersListElementFormProperties {

		/** URL to a JPEG image */
		avatar_url: FormControl<string | null | undefined>,

		/** city */
		city: FormControl<string | null | undefined>,

		/** country */
		country: FormControl<string | null | undefined>,

		/** description */
		description: FormControl<string | null | undefined>,

		/** discogs name */
		discogs_name: FormControl<string | null | undefined>,

		/** first name */
		first_name: FormControl<string | null | undefined>,

		/**
		 * number of followers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count: FormControl<number | null | undefined>,

		/**
		 * number of followed users
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followings_count: FormControl<number | null | undefined>,

		/** first and last name */
		full_name: FormControl<string | null | undefined>,

		/**
		 * unique identifier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** kind of resource */
		kind: FormControl<string | null | undefined>,

		/** last modified datetime */
		last_modified: FormControl<Date | null | undefined>,

		/** last name */
		last_name: FormControl<string | null | undefined>,

		/** myspace name */
		myspace_name: FormControl<string | null | undefined>,

		/** permalink of the resource */
		permalink: FormControl<string | null | undefined>,

		/** URL to the SoundCloud.com page */
		permalink_url: FormControl<string | null | undefined>,

		/** subscription plan of the user */
		plan: FormControl<string | null | undefined>,

		/**
		 * number of public playlists
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playlist_count: FormControl<number | null | undefined>,

		/**
		 * number of favorited public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		public_favorites_count: FormControl<number | null | undefined>,

		/**
		 * number of reposts from user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reposts_count: FormControl<number | null | undefined>,

		/** a list subscriptions associated with the user */
		subscriptions: FormControl<any | null | undefined>,

		/**
		 * number of public tracks
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track_count: FormControl<number | null | undefined>,

		/** API resource URL */
		uri: FormControl<string | null | undefined>,

		/** username */
		username: FormControl<string | null | undefined>,

		/** a URL to the website */
		website: FormControl<string | null | undefined>,

		/** a custom title for the website */
		website_title: FormControl<string | null | undefined>,
	}
	export function CreateUsersListElementFormGroup() {
		return new FormGroup<UsersListElementFormProperties>({
			avatar_url: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discogs_name: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			followers_count: new FormControl<number | null | undefined>(undefined),
			followings_count: new FormControl<number | null | undefined>(undefined),
			full_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			myspace_name: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			permalink_url: new FormControl<string | null | undefined>(undefined),
			plan: new FormControl<string | null | undefined>(undefined),
			playlist_count: new FormControl<number | null | undefined>(undefined),
			public_favorites_count: new FormControl<number | null | undefined>(undefined),
			reposts_count: new FormControl<number | null | undefined>(undefined),
			subscriptions: new FormControl<any | null | undefined>(undefined),
			track_count: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			website_title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebProfilesElement {

		/** Timestamp of when the link was added to the profile. */
		created_at?: string | null;

		/**
		 * Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Kind */
		kind?: string | null;

		/** Service or platform */
		service?: string | null;

		/** Link's title */
		title?: string | null;

		/** URL of the external link */
		url?: string | null;

		/** Username extracted from the external link */
		username?: string | null;
	}
	export interface WebProfilesElementFormProperties {

		/** Timestamp of when the link was added to the profile. */
		created_at: FormControl<string | null | undefined>,

		/**
		 * Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Kind */
		kind: FormControl<string | null | undefined>,

		/** Service or platform */
		service: FormControl<string | null | undefined>,

		/** Link's title */
		title: FormControl<string | null | undefined>,

		/** URL of the external link */
		url: FormControl<string | null | undefined>,

		/** Username extracted from the external link */
		username: FormControl<string | null | undefined>,
	}
	export function CreateWebProfilesElementFormGroup() {
		return new FormGroup<WebProfilesElementFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
		 * <h3>Security Advice</h3>
		 * * Using the [implicit OAuth authorization flow](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-2.1.2) (`response_type=token`)  is **not recommended**. It can suffer from access token leakage and access token replay attacks. Use `response_type=code` instead.
		 * * Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.
		 * Get connect
		 * @param {string} client_id The client id belonging to your application
		 * @param {string} redirect_uri The redirect uri you have configured for your application
		 * @param {ConnectGetByClient_idAndRedirect_uriAndResponse_typeAndScopeAndStateResponse_type} response_type It's recommended to use "code" here
		 * @param {string} scope Scope
		 * @param {string} state Any value included here will be appended to the redirect URI. Use this for CSRF protection.
		 * @return {void} 
		 */
		ConnectGetByClient_idAndRedirect_uriAndResponse_typeAndScopeAndState(client_id: string, redirect_uri: string, response_type: ConnectGetByClient_idAndRedirect_uriAndResponse_typeAndScopeAndStateResponse_type, scope: string, state: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'connect?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&response_type=' + response_type + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&state=' + (state == null ? '' : encodeURIComponent(state)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unlikes a playlist.
		 * Delete likes/playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		LikesPlaylists_playlist_idDelete(playlist_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'likes/playlists/' + playlist_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Likes a playlist.
		 * Post likes/playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		LikesPlaylists_playlist_idPost(playlist_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'likes/playlists/' + playlist_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unlikes a track.
		 * Delete likes/tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		LikesTracks_track_idDelete(track_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'likes/tracks/' + track_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Likes a track.
		 * Post likes/tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		LikesTracks_track_idPost(track_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'likes/tracks/' + track_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the authenticated user’s information.
		 * Get me
		 * @return {void} Success
		 */
		MeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the authenticated user's activities.
		 * Get me/activities
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		MeActivitiesGetByAccessAndLimit(access: Array<string> | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/activities?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Recent the authenticated user's activities.
		 * Get me/activities/all/own
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		MeActivitiesAllOwnGetByAccessAndLimit(access: Array<string> | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/activities/all/own?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the authenticated user's recent track related activities.
		 * Get me/activities/tracks
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		MeActivitiesTracksGetByAccessAndLimit(access: Array<string> | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/activities/tracks?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the authenticated user's connected social accounts.
		 * Get me/connections
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeConnectionsGetByLimitAndOffset(limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/connections?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the authenticated user's connected social account.
		 * Get me/connections/{connection_id}
		 * @param {number} connection_id SoundCloud connection id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeConnections_connection_idGet(connection_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/connections/' + connection_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)
		 * Get me/favorites/ids
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		MeFavoritesIdsGetByLimit(limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/favorites/ids?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of users who are following the authenticated user.
		 * Get me/followers
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		MeFollowersGetByLimit(limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/followers?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)
		 * Get me/followers/{follower_id}
		 * @param {number} follower_id SoundCloud User id to denote a Follower
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeFollowers_follower_idGet(follower_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/followers/' + follower_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of users who are followed by the authenticated user.
		 * Get me/followings
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeFollowingsGetByLimitAndOffset(limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/followings?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of recent tracks from users followed by the authenticated user.
		 * Get me/followings/tracks
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeFollowingsTracksGetByAccessAndLimitAndOffset(access: Array<string> | null | undefined, limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/followings/tracks?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a user who is followed by the authenticated user.
		 * Delete me/followings/{user_id}
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeFollowings_user_idDelete(user_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/followings/' + user_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)
		 * Get me/followings/{user_id}
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeFollowings_user_idGet(user_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/followings/' + user_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Follows a user.
		 * Put me/followings/{user_id}
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeFollowings_user_idPut(user_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/followings/' + user_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of favorited or liked tracks of the authenticated user.
		 * Get me/likes/tracks
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		MeLikesTracksGetByLimitAndLinked_partitioning(limit: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/likes/tracks?limit=' + limit + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns user’s playlists (sets).
		 * Returns playlist info, playlist tracks and tracks owner info.
		 * Get me/playlists
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		MePlaylistsGetByLimit(limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/playlists?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)
		 * Get me/playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MePlaylists_playlist_idGet(playlist_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/playlists/' + playlist_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user's tracks.
		 * Get me/tracks
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		MeTracksGetByLimitAndLinked_partitioning(limit: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/tracks?limit=' + limit + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)
		 * Get me/tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		MeTracks_track_idGet(track_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/tracks/' + track_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs a playlist search based on a query
		 * Get playlists
		 * @param {string} q search
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		PlaylistsGetByQAndAccessAndLimitAndOffsetAndLinked_partitioning(q: string, access: Array<string> | null | undefined, limit: number | null | undefined, offset: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'playlists?q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&offset=' + offset + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a playlist.
		 * Post playlists
		 * @param {CreateUpdatePlaylistRequest} requestBody Create Playlist request
		 * @return {void} 
		 */
		PlaylistsPost(requestBody: CreateUpdatePlaylistRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'playlists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a playlist.
		 * Delete playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		Playlists_playlist_idDelete(playlist_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'playlists/' + playlist_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a playlist.
		 * Get playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} secret_token A secret token to fetch private playlists/tracks
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @return {void} Success
		 */
		Playlists_playlist_idGetBySecret_tokenAndAccess(playlist_id: number, secret_token: string | null | undefined, access: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'playlists/' + playlist_id + '?secret_token=' + (secret_token == null ? '' : encodeURIComponent(secret_token)) + '&' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a playlist.
		 * Put playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CreateUpdatePlaylistRequest} requestBody Playlist payload
		 * @return {void} Success
		 */
		Playlists_playlist_idPut(playlist_id: number, requestBody: CreateUpdatePlaylistRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'playlists/' + playlist_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of playlist's reposters.
		 * Get playlists/{playlist_id}/reposters
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		Playlists_playlist_idRepostersGetByLimit(playlist_id: number, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'playlists/' + playlist_id + '/reposters?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns tracks under a playlist.
		 * Get playlists/{playlist_id}/tracks
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} secret_token A secret token to fetch private playlists/tracks
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		Playlists_playlist_idTracksGetBySecret_tokenAndAccessAndLinked_partitioning(playlist_id: number, secret_token: string | null | undefined, access: Array<string> | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'playlists/' + playlist_id + '/tracks?secret_token=' + (secret_token == null ? '' : encodeURIComponent(secret_token)) + '&' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a repost on a playlist as the authenticated user
		 * Delete reposts/playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		RepostsPlaylists_playlist_idDelete(playlist_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'reposts/playlists/' + playlist_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reposts a playlist as the authenticated user
		 * Post reposts/playlists/{playlist_id}
		 * @param {number} playlist_id SoundCloud playlist id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		RepostsPlaylists_playlist_idPost(playlist_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reposts/playlists/' + playlist_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a repost on a track as the authenticated user
		 * Delete reposts/tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		RepostsTracks_track_idDelete(track_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'reposts/tracks/' + track_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reposts a track as the authenticated user
		 * Post reposts/tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		RepostsTracks_track_idPost(track_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reposts/tracks/' + track_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resolves soundcloud.com URLs to Resource URLs to use with the API.
		 * Get resolve
		 * @param {string} url SoundCloud URL
		 * @return {void} 
		 */
		ResolveGetByUrl(url: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'resolve?url=' + (url == null ? '' : encodeURIComponent(url)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs a track search based on a query
		 * Get tracks
		 * @param {string} q search
		 * @param {string} ids A comma separated list of track ids to filter on
		 * @param {string} genres A comma separated list of genres
		 * @param {string} tags A comma separated list of tags
		 * @param {TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningBpm} bpm Return tracks with a specified bpm[from], bpm[to]
		 * @param {TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningDuration} duration Return tracks within a specified duration range
		 * @param {TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningCreated_at} created_at (yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioning(q: string, ids: string | null | undefined, genres: string | null | undefined, tags: string | null | undefined, bpm: TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningBpm | null | undefined, duration: TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningDuration | null | undefined, created_at: TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningCreated_at | null | undefined, access: Array<string> | null | undefined, limit: number | null | undefined, offset: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tracks?q=' + (q == null ? '' : encodeURIComponent(q)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&genres=' + (genres == null ? '' : encodeURIComponent(genres)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&bpm=' + bpm + '&duration=' + duration + '&created_at=' + created_at + '&' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&offset=' + offset + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a track.
		 * Delete tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		Tracks_track_idDelete(track_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tracks/' + track_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a track.
		 * Get tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} secret_token A secret token to fetch private playlists/tracks
		 * @return {void} Success
		 */
		Tracks_track_idGetBySecret_token(track_id: number, secret_token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tracks/' + track_id + '?secret_token=' + (secret_token == null ? '' : encodeURIComponent(secret_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a track's information.
		 * Put tracks/{track_id}
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {TrackMetadataRequest} requestBody Track payload
		 * @return {void} Success
		 */
		Tracks_track_idPut(track_id: number, requestBody: TrackMetadataRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tracks/' + track_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the comments posted on the track(track_id).
		 * Get tracks/{track_id}/comments
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		Tracks_track_idCommentsGetByLimitAndOffsetAndLinked_partitioning(track_id: number, limit: number | null | undefined, offset: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tracks/' + track_id + '/comments?limit=' + limit + '&offset=' + offset + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of users who have favorited or liked the track.
		 * Get tracks/{track_id}/favoriters
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		Tracks_track_idFavoritersGetByLimitAndOffset(track_id: number, limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tracks/' + track_id + '/favoriters?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all related tracks of track on SoundCloud.
		 * Get tracks/{track_id}/related
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		Tracks_track_idRelatedGetByAccessAndLimitAndOffsetAndLinked_partitioning(track_id: number, access: Array<string> | null | undefined, limit: number | null | undefined, offset: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tracks/' + track_id + '/related?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&offset=' + offset + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of track's reposters.
		 * Get tracks/{track_id}/reposters
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		Tracks_track_idRepostersGetByLimit(track_id: number, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tracks/' + track_id + '/reposters?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a track's streamable URLs
		 * Get tracks/{track_id}/streams
		 * @param {number} track_id SoundCloud Track id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} secret_token A secret token to fetch private playlists/tracks
		 * @return {void} Success
		 */
		Tracks_track_idStreamsGetBySecret_token(track_id: number, secret_token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tracks/' + track_id + '/streams?secret_token=' + (secret_token == null ? '' : encodeURIComponent(secret_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs a user search based on a query
		 * Get users
		 * @param {string} q search
		 * @param {string} ids A comma separated list of track ids to filter on
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		UsersGetByQAndIdsAndLimitAndOffsetAndLinked_partitioning(q: string, ids: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users?q=' + (q == null ? '' : encodeURIComponent(q)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&limit=' + limit + '&offset=' + offset + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user.
		 * Get users/{user_id}
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		Users_user_idGet(user_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user's comments.
		 * Get users/{user_id}/comments
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {number} offset Offset of first result. Deprecated, use `linked_partitioning` instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		Users_user_idCommentsGetByLimitAndOffset(user_id: number, limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/comments?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)
		 * Get users/{user_id}/favorites
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		Users_user_idFavoritesGetByLimitAndLinked_partitioning(user_id: number, limit: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/favorites?limit=' + limit + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user’s followers.
		 * Returns a list of users that follows (user_id).
		 * Get users/{user_id}/followers
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		Users_user_idFollowersGetByLimit(user_id: number, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/followers?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user’s followings.
		 * Returns list of users that (user_id) follows.
		 * Get users/{user_id}/followings
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		Users_user_idFollowingsGetByLimit(user_id: number, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/followings?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's following. (use /users/{user_id} instead, to fetch the user details)
		 * Returns (following_id) that is followed by (user_id).
		 * Get users/{user_id}/followings/{following_id}
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} following_id SoundCloud User id to denote a Following of a user
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		Users_user_idFollowings_following_idGet(user_id: number, following_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/followings/' + following_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user's liked tracks.
		 * Get users/{user_id}/likes/tracks
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		Users_user_idLikesTracksGetByAccessAndLimitAndLinked_partitioning(user_id: number, access: Array<string> | null | undefined, limit: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/likes/tracks?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user's playlists.
		 * Get users/{user_id}/playlists
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		Users_user_idPlaylistsGetByAccessAndLimitAndLinked_partitioning(user_id: number, access: Array<string> | null | undefined, limit: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/playlists?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of user's tracks.
		 * Get users/{user_id}/tracks
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} access Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @param {boolean} linked_partitioning Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
		 * @return {void} Success
		 */
		Users_user_idTracksGetByAccessAndLimitAndLinked_partitioning(user_id: number, access: Array<string> | null | undefined, limit: number | null | undefined, linked_partitioning: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/tracks?' + access?.map(z => `access=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&linked_partitioning=' + linked_partitioning, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of user's links added to their profile (website, facebook, instagram).
		 * Get users/{user_id}/web-profiles
		 * @param {number} user_id SoundCloud User id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Number of results to return in the collection.
		 *     Minimum: 1    Maximum: 200
		 * @return {void} Success
		 */
		Users_user_idWeb_profilesGetByLimit(user_id: number, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/web-profiles?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum ConnectGetByClient_idAndRedirect_uriAndResponse_typeAndScopeAndStateResponse_type { code = 'code', token = 'token', code_and_token = 'code_and_token' }

	export interface TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningBpm {

		/**
		 * Return tracks with at least this bpm value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from?: number | null;

		/**
		 * Return tracks with at most this bpm value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to?: number | null;
	}
	export interface TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningBpmFormProperties {

		/**
		 * Return tracks with at least this bpm value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * Return tracks with at most this bpm value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,
	}
	export function CreateTracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningBpmFormGroup() {
		return new FormGroup<TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningBpmFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningDuration {

		/**
		 * Return tracks with at least this duration value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from?: number | null;

		/**
		 * Return tracks with at most this duration value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to?: number | null;
	}
	export interface TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningDurationFormProperties {

		/**
		 * Return tracks with at least this duration value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * Return tracks with at most this duration value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,
	}
	export function CreateTracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningDurationFormGroup() {
		return new FormGroup<TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningDurationFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningCreated_at {

		/** (yyyy-mm-dd hh:mm:ss) return tracks created at this date or later */
		from?: string | null;

		/** (yyyy-mm-dd hh:mm:ss) return tracks created at this date or earlier */
		to?: string | null;
	}
	export interface TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningCreated_atFormProperties {

		/** (yyyy-mm-dd hh:mm:ss) return tracks created at this date or later */
		from: FormControl<string | null | undefined>,

		/** (yyyy-mm-dd hh:mm:ss) return tracks created at this date or earlier */
		to: FormControl<string | null | undefined>,
	}
	export function CreateTracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningCreated_atFormGroup() {
		return new FormGroup<TracksGetByQAndIdsAndGenresAndTagsAndBpmAndDurationAndCreated_atAndAccessAndLimitAndOffsetAndLinked_partitioningCreated_atFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

}

