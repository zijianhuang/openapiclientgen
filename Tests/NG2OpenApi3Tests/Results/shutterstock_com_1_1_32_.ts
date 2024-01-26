import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Access token details that are currently associated with this user */
	export interface AccessTokenDetails {

		/** Client ID that is associated with the user */
		client_id?: string | null;

		/** Contributor ID that is associated with the user */
		contributor_id?: string | null;

		/** Customer ID that is associated with the user */
		customer_id?: string | null;

		/** Number of seconds until the access token expires; no expiration if this value is null */
		expires_in?: number | null;

		/** Organization ID that is associated with the user */
		organization_id?: string | null;

		/** Type of access token */
		realm?: AccessTokenDetailsRealm | null;

		/** Scopes that this access token provides when used as authentication */
		scopes?: Array<string>;

		/** User ID that is associated with the user */
		user_id?: string | null;

		/** User name that is associated with the user */
		username?: string | null;
	}

	/** Access token details that are currently associated with this user */
	export interface AccessTokenDetailsFormProperties {

		/** Client ID that is associated with the user */
		client_id: FormControl<string | null | undefined>,

		/** Contributor ID that is associated with the user */
		contributor_id: FormControl<string | null | undefined>,

		/** Customer ID that is associated with the user */
		customer_id: FormControl<string | null | undefined>,

		/** Number of seconds until the access token expires; no expiration if this value is null */
		expires_in: FormControl<number | null | undefined>,

		/** Organization ID that is associated with the user */
		organization_id: FormControl<string | null | undefined>,

		/** Type of access token */
		realm: FormControl<AccessTokenDetailsRealm | null | undefined>,

		/** User ID that is associated with the user */
		user_id: FormControl<string | null | undefined>,

		/** User name that is associated with the user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenDetailsFormGroup() {
		return new FormGroup<AccessTokenDetailsFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			contributor_id: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			realm: new FormControl<AccessTokenDetailsRealm | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessTokenDetailsRealm { customer = 0, contributor = 1 }


	/** Album metadata */
	export interface Album {

		/**
		 * The album ID
		 * Required
		 */
		id: string;

		/**
		 * The album title
		 * Required
		 */
		title: string;
	}

	/** Album metadata */
	export interface AlbumFormProperties {

		/**
		 * The album ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The album title
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAlbumFormGroup() {
		return new FormGroup<AlbumFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An allotment of credits as part of a subscription */
	export interface Allotment {

		/** Number of credits remaining in the subscription */
		downloads_left?: number | null;

		/** Total number of credits available to this subscription */
		downloads_limit?: number | null;

		/** Date the subscription ends */
		end_time?: Date | null;

		/** Date the subscription started */
		start_time?: Date | null;
	}

	/** An allotment of credits as part of a subscription */
	export interface AllotmentFormProperties {

		/** Number of credits remaining in the subscription */
		downloads_left: FormControl<number | null | undefined>,

		/** Total number of credits available to this subscription */
		downloads_limit: FormControl<number | null | undefined>,

		/** Date the subscription ends */
		end_time: FormControl<Date | null | undefined>,

		/** Date the subscription started */
		start_time: FormControl<Date | null | undefined>,
	}
	export function CreateAllotmentFormGroup() {
		return new FormGroup<AllotmentFormProperties>({
			downloads_left: new FormControl<number | null | undefined>(undefined),
			downloads_limit: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Metadata about the artist that created the media */
	export interface Artist {

		/**
		 * The artist's name
		 * Required
		 */
		name: string;
	}

	/** Metadata about the artist that created the media */
	export interface ArtistFormProperties {

		/**
		 * The artist's name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateArtistFormGroup() {
		return new FormGroup<ArtistFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio metadata */
	export interface Audio {

		/** Date this track was added to the Shutterstock library */
		added_date?: Date | null;

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url?: string | null;

		/** Album metadata */
		album?: Album;

		/** List of artists */
		artists?: Array<Artist>;

		/** Files that are available as part of an audio asset */
		assets?: AudioAssets;

		/** BPM (beats per minute) of this track */
		bpm?: number | null;

		/**
		 * Information about a contributor
		 * Required
		 */
		contributor: Contributor;
		deleted_time?: Date | null;

		/** Description of this track */
		description?: string | null;

		/** Duration of this track in seconds */
		duration?: number | null;

		/** List of all genres for this track */
		genres?: Array<string>;

		/**
		 * Shutterstock ID of this track
		 * Required
		 */
		id: string;

		/** List of all instruments that appear in this track */
		instruments?: Array<string>;

		/** Whether or not this track contains adult content */
		is_adult?: boolean | null;

		/** Whether or not this track is purely instrumental (lacking lyrics) */
		is_instrumental?: boolean | null;
		isrc?: string | null;

		/** List of all keywords for this track */
		keywords?: Array<string>;

		/** Language of this track's lyrics */
		language?: string | null;

		/** Lyrics of this track */
		lyrics?: string | null;

		/**
		 * Media type of this track; should always be "audio"
		 * Required
		 */
		media_type: string;

		/** List of all model releases for this track */
		model_releases?: Array<ModelRelease>;

		/** List of all moods of this track */
		moods?: Array<string>;

		/** Time this track was published */
		published_time?: Date | null;

		/** Recording version of this track */
		recording_version?: string | null;

		/** List of all releases of this track */
		releases?: Array<string>;

		/** List of all similar artists of this track */
		similar_artists?: Array<Artist>;

		/** Time this track was submitted */
		submitted_time?: Date | null;

		/** Title of this track */
		title?: string | null;

		/** Time this track was last updated */
		updated_time?: Date | null;
		url?: string | null;

		/** Vocal description of this track */
		vocal_description?: string | null;
	}

	/** Audio metadata */
	export interface AudioFormProperties {

		/** Date this track was added to the Shutterstock library */
		added_date: FormControl<Date | null | undefined>,

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url: FormControl<string | null | undefined>,

		/** BPM (beats per minute) of this track */
		bpm: FormControl<number | null | undefined>,
		deleted_time: FormControl<Date | null | undefined>,

		/** Description of this track */
		description: FormControl<string | null | undefined>,

		/** Duration of this track in seconds */
		duration: FormControl<number | null | undefined>,

		/**
		 * Shutterstock ID of this track
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Whether or not this track contains adult content */
		is_adult: FormControl<boolean | null | undefined>,

		/** Whether or not this track is purely instrumental (lacking lyrics) */
		is_instrumental: FormControl<boolean | null | undefined>,
		isrc: FormControl<string | null | undefined>,

		/** Language of this track's lyrics */
		language: FormControl<string | null | undefined>,

		/** Lyrics of this track */
		lyrics: FormControl<string | null | undefined>,

		/**
		 * Media type of this track; should always be "audio"
		 * Required
		 */
		media_type: FormControl<string | null | undefined>,

		/** Time this track was published */
		published_time: FormControl<Date | null | undefined>,

		/** Recording version of this track */
		recording_version: FormControl<string | null | undefined>,

		/** Time this track was submitted */
		submitted_time: FormControl<Date | null | undefined>,

		/** Title of this track */
		title: FormControl<string | null | undefined>,

		/** Time this track was last updated */
		updated_time: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Vocal description of this track */
		vocal_description: FormControl<string | null | undefined>,
	}
	export function CreateAudioFormGroup() {
		return new FormGroup<AudioFormProperties>({
			added_date: new FormControl<Date | null | undefined>(undefined),
			affiliate_url: new FormControl<string | null | undefined>(undefined),
			bpm: new FormControl<number | null | undefined>(undefined),
			deleted_time: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_adult: new FormControl<boolean | null | undefined>(undefined),
			is_instrumental: new FormControl<boolean | null | undefined>(undefined),
			isrc: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lyrics: new FormControl<string | null | undefined>(undefined),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			published_time: new FormControl<Date | null | undefined>(undefined),
			recording_version: new FormControl<string | null | undefined>(undefined),
			submitted_time: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			vocal_description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Files that are available as part of an audio asset */
	export interface AudioAssets {

		/** Information about a file that is part of an audio asset */
		album_art?: AudioAssetDetails;

		/** Information about a file that is part of an audio asset */
		clean_audio?: AudioAssetDetails;

		/** Information about a file that is part of an audio asset */
		original_audio?: AudioAssetDetails;

		/** Information about a file that is part of an audio asset */
		preview_mp3?: AudioAssetDetails;

		/** Information about a file that is part of an audio asset */
		preview_ogg?: AudioAssetDetails;

		/** Links for Shorts, Loops and Stems previews */
		shorts_loops_stems?: ShortsLoopsStems;

		/** Information about a file that is part of an audio asset */
		waveform?: AudioAssetDetails;
	}

	/** Files that are available as part of an audio asset */
	export interface AudioAssetsFormProperties {
	}
	export function CreateAudioAssetsFormGroup() {
		return new FormGroup<AudioAssetsFormProperties>({
		});

	}


	/** Information about a file that is part of an audio asset */
	export interface AudioAssetDetails {

		/** File size of the track */
		file_size?: number | null;

		/** URL the track is available at */
		url?: string | null;
	}

	/** Information about a file that is part of an audio asset */
	export interface AudioAssetDetailsFormProperties {

		/** File size of the track */
		file_size: FormControl<number | null | undefined>,

		/** URL the track is available at */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAudioAssetDetailsFormGroup() {
		return new FormGroup<AudioAssetDetailsFormProperties>({
			file_size: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Links for Shorts, Loops and Stems previews */
	export interface ShortsLoopsStems {
		loops?: any;
		shorts?: any;
		stems?: any;
	}

	/** Links for Shorts, Loops and Stems previews */
	export interface ShortsLoopsStemsFormProperties {
		loops: FormControl<any | null | undefined>,
		shorts: FormControl<any | null | undefined>,
		stems: FormControl<any | null | undefined>,
	}
	export function CreateShortsLoopsStemsFormGroup() {
		return new FormGroup<ShortsLoopsStemsFormProperties>({
			loops: new FormControl<any | null | undefined>(undefined),
			shorts: new FormControl<any | null | undefined>(undefined),
			stems: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Information about a contributor */
	export interface Contributor {

		/**
		 * ID of the contributor
		 * Required
		 */
		id: string;
	}

	/** Information about a contributor */
	export interface ContributorFormProperties {

		/**
		 * ID of the contributor
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateContributorFormGroup() {
		return new FormGroup<ContributorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Model and property release metadata */
	export interface ModelRelease {

		/** ID of the model or property release */
		id?: string | null;
	}

	/** Model and property release metadata */
	export interface ModelReleaseFormProperties {

		/** ID of the model or property release */
		id: FormControl<string | null | undefined>,
	}
	export function CreateModelReleaseFormGroup() {
		return new FormGroup<ModelReleaseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of tracks */
	export interface AudioDataList {

		/** Tracks */
		data?: Array<Audio>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of tracks */
	export interface AudioDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateAudioDataListFormGroup() {
		return new FormGroup<AudioDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Error object */
	export interface Error {

		/** The error code of this error */
		code?: string | null;

		/** Debugging information about the error */
		data?: string | null;

		/** A list of items that produced the error */
		items?: Array<string>;

		/**
		 * Specific details about this error
		 * Required
		 */
		message: string;

		/** Internal code reference to the source of the error */
		path?: string | null;
	}

	/** Error object */
	export interface ErrorFormProperties {

		/** The error code of this error */
		code: FormControl<string | null | undefined>,

		/** Debugging information about the error */
		data: FormControl<string | null | undefined>,

		/**
		 * Specific details about this error
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Internal code reference to the source of the error */
		path: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output of an audio render in WAV or MP3 format */
	export interface AudioRenderResult {

		/** The time the render was submitted to the API */
		created_date?: Date | null;

		/** The files associated with the render */
		files?: Array<AudioRendersFilesList>;

		/**
		 * The alphanumeric ID of the simple render
		 * Required
		 */
		id: string;

		/** The file format preset */
		preset?: AudioRenderResultPreset | null;

		/** The current progress of the render as a percentage */
		progress_percent?: number | null;

		/**
		 * A coarse progress indicator
		 * Required
		 */
		status: AudioRenderResultStatus;

		/**
		 * A timeline object that represents either a request for music to be created or an entire music composition
		 * Required
		 */
		timeline: AudioRenderTimeline;

		/** The time that the audio output was uploaded */
		updated_date?: Date | null;
	}

	/** The output of an audio render in WAV or MP3 format */
	export interface AudioRenderResultFormProperties {

		/** The time the render was submitted to the API */
		created_date: FormControl<Date | null | undefined>,

		/**
		 * The alphanumeric ID of the simple render
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The file format preset */
		preset: FormControl<AudioRenderResultPreset | null | undefined>,

		/** The current progress of the render as a percentage */
		progress_percent: FormControl<number | null | undefined>,

		/**
		 * A coarse progress indicator
		 * Required
		 */
		status: FormControl<AudioRenderResultStatus | null | undefined>,

		/** The time that the audio output was uploaded */
		updated_date: FormControl<Date | null | undefined>,
	}
	export function CreateAudioRenderResultFormGroup() {
		return new FormGroup<AudioRenderResultFormProperties>({
			created_date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preset: new FormControl<AudioRenderResultPreset | null | undefined>(undefined),
			progress_percent: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AudioRenderResultStatus | null | undefined>(undefined, [Validators.required]),
			updated_date: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Files associated with the render */
	export interface AudioRendersFilesList {

		/**
		 * The bit depth of the audio files in bits/sample
		 * Required
		 */
		bits_sample: number;

		/**
		 * The content-type of the file
		 * Required
		 */
		content_type: string;

		/**
		 * The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed
		 * Required
		 */
		download_url: string;

		/**
		 * The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
		 * Required
		 */
		filename: string;

		/**
		 * The Sample rate of the audio files in Hertz (Hz)
		 * Required
		 */
		frequency_hz: number;

		/**
		 * The data rate of the audio files in kilobits/second
		 * Required
		 */
		kbits_second: number;

		/**
		 * Size of the file in bytes
		 * Required
		 */
		size_bytes: number;

		/**
		 * An array of track names included in the file
		 * Required
		 */
		tracks: Array<string>;
	}

	/** Files associated with the render */
	export interface AudioRendersFilesListFormProperties {

		/**
		 * The bit depth of the audio files in bits/sample
		 * Required
		 */
		bits_sample: FormControl<number | null | undefined>,

		/**
		 * The content-type of the file
		 * Required
		 */
		content_type: FormControl<string | null | undefined>,

		/**
		 * The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed
		 * Required
		 */
		download_url: FormControl<string | null | undefined>,

		/**
		 * The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
		 * Required
		 */
		filename: FormControl<string | null | undefined>,

		/**
		 * The Sample rate of the audio files in Hertz (Hz)
		 * Required
		 */
		frequency_hz: FormControl<number | null | undefined>,

		/**
		 * The data rate of the audio files in kilobits/second
		 * Required
		 */
		kbits_second: FormControl<number | null | undefined>,

		/**
		 * Size of the file in bytes
		 * Required
		 */
		size_bytes: FormControl<number | null | undefined>,
	}
	export function CreateAudioRendersFilesListFormGroup() {
		return new FormGroup<AudioRendersFilesListFormProperties>({
			bits_sample: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			content_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			download_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			frequency_hz: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			kbits_second: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size_bytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AudioRenderResultPreset { MASTER_MP3 = 0, MASTER_WAV = 1, STEMS_WAV = 2 }

	export enum AudioRenderResultStatus { WAITING_COMPOSE = 0, RUNNING_COMPOSE = 1, WAITING_RENDER = 2, RUNNING_RENDER = 3, CREATED = 4, FAILED_CREATE = 5 }


	/** A timeline object that represents either a request for music to be created or an entire music composition */
	export interface AudioRenderTimeline {

		/** A span object that represents the beginning of a period of absolute time */
		spans?: Array<AudioRenderTimelineSpan>;
	}

	/** A timeline object that represents either a request for music to be created or an entire music composition */
	export interface AudioRenderTimelineFormProperties {
	}
	export function CreateAudioRenderTimelineFormGroup() {
		return new FormGroup<AudioRenderTimelineFormProperties>({
		});

	}


	/** The beginning of a non-overlapping period of absolute time */
	export interface AudioRenderTimelineSpan {

		/** An identifier which must be unique within the parent span */
		id?: number | null;

		/** An array of instrument_group objects that are used in this span */
		instrument_groups?: Array<AudioRenderTimelineSpanInstrumentGroup>;

		/** An array of region objects within the span */
		regions?: Array<AudioRenderTimelineSpanRegion>;

		/**
		 * Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span
		 * Required
		 */
		span_type: AudioRenderTimelineSpanSpan_type;

		/** The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo */
		tempo?: number | null;

		/** Two or more inflection points in a tempo curve; the API creates a smoothly changing tempo by using a linear interpolation of the time between each tempo change */
		tempo_changes?: Array<AudioRenderTimelineSpanTempoChanges>;

		/**
		 * The absolute time, in seconds, at which the span starts
		 * Required
		 */
		time: number;
	}

	/** The beginning of a non-overlapping period of absolute time */
	export interface AudioRenderTimelineSpanFormProperties {

		/** An identifier which must be unique within the parent span */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span
		 * Required
		 */
		span_type: FormControl<AudioRenderTimelineSpanSpan_type | null | undefined>,

		/** The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo */
		tempo: FormControl<number | null | undefined>,

		/**
		 * The absolute time, in seconds, at which the span starts
		 * Required
		 */
		time: FormControl<number | null | undefined>,
	}
	export function CreateAudioRenderTimelineSpanFormGroup() {
		return new FormGroup<AudioRenderTimelineSpanFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			span_type: new FormControl<AudioRenderTimelineSpanSpan_type | null | undefined>(undefined, [Validators.required]),
			tempo: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An instrument and the status objects that specify when that instrument plays */
	export interface AudioRenderTimelineSpanInstrumentGroup {

		/**
		 * The instrument ID
		 * Required
		 */
		instrument_group: string;

		/** An array of status objects */
		statuses?: Array<AudioRenderTimelineSpanInstrumentGroupStatus>;
	}

	/** An instrument and the status objects that specify when that instrument plays */
	export interface AudioRenderTimelineSpanInstrumentGroupFormProperties {

		/**
		 * The instrument ID
		 * Required
		 */
		instrument_group: FormControl<string | null | undefined>,
	}
	export function CreateAudioRenderTimelineSpanInstrumentGroupFormGroup() {
		return new FormGroup<AudioRenderTimelineSpanInstrumentGroupFormProperties>({
			instrument_group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The status of an instrument at a specific beat */
	export interface AudioRenderTimelineSpanInstrumentGroupStatus {

		/**
		 * The beat, relative to the span, at which the status begins
		 * Required
		 */
		beat: number;

		/**
		 * Whether the instrument is playing or not
		 * Required
		 */
		status: AudioRenderTimelineSpanInstrumentGroupStatusStatus;
	}

	/** The status of an instrument at a specific beat */
	export interface AudioRenderTimelineSpanInstrumentGroupStatusFormProperties {

		/**
		 * The beat, relative to the span, at which the status begins
		 * Required
		 */
		beat: FormControl<number | null | undefined>,

		/**
		 * Whether the instrument is playing or not
		 * Required
		 */
		status: FormControl<AudioRenderTimelineSpanInstrumentGroupStatusStatus | null | undefined>,
	}
	export function CreateAudioRenderTimelineSpanInstrumentGroupStatusFormGroup() {
		return new FormGroup<AudioRenderTimelineSpanInstrumentGroupStatusFormProperties>({
			beat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AudioRenderTimelineSpanInstrumentGroupStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AudioRenderTimelineSpanInstrumentGroupStatusStatus { active = 0, inactive = 1 }


	/** A period of music or silence, measured in beats */
	export interface AudioRenderTimelineSpanRegion {

		/**
		 * The beat, relative to the span, at which the region object's music begins
		 * Required
		 */
		beat: number;

		/**
		 * The descriptor ID needed to compose the music
		 * Required
		 */
		descriptor: string;

		/** A high-level description of how a region ends */
		end_type?: AudioRenderTimelineSpanRegionEnd_type;

		/**
		 * An identifier which must be unique within the parent span
		 * Required
		 */
		id: number;

		/** The key signature active at the beginning of the region */
		key?: AudioRenderTimelineSpanRegionKey;

		/**
		 * The type of region
		 * Required
		 */
		region: AudioRenderTimelineSpanRegionRegion;
	}

	/** A period of music or silence, measured in beats */
	export interface AudioRenderTimelineSpanRegionFormProperties {

		/**
		 * The beat, relative to the span, at which the region object's music begins
		 * Required
		 */
		beat: FormControl<number | null | undefined>,

		/**
		 * The descriptor ID needed to compose the music
		 * Required
		 */
		descriptor: FormControl<string | null | undefined>,

		/**
		 * An identifier which must be unique within the parent span
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The type of region
		 * Required
		 */
		region: FormControl<AudioRenderTimelineSpanRegionRegion | null | undefined>,
	}
	export function CreateAudioRenderTimelineSpanRegionFormGroup() {
		return new FormGroup<AudioRenderTimelineSpanRegionFormProperties>({
			beat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			descriptor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<AudioRenderTimelineSpanRegionRegion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AudioRenderTimelineSpanRegionEnd_type {

		/**
		 * The beat, relative to the start of the active region, at which the end_type begins; in other words, the ending starts on this beat of the region
		 * Required
		 */
		beat: number;

		/**
		 * The type of event
		 * Required
		 */
		event: AudioRenderTimelineSpanRegionEnd_typeEvent;

		/**
		 * The specific action to perform; if the event type is "ending" then this must be "ringout" and if event type is "transition" this must be "cut"
		 * Required
		 */
		type: AudioRenderTimelineSpanRegionEnd_typeType;
	}
	export interface AudioRenderTimelineSpanRegionEnd_typeFormProperties {

		/**
		 * The beat, relative to the start of the active region, at which the end_type begins; in other words, the ending starts on this beat of the region
		 * Required
		 */
		beat: FormControl<number | null | undefined>,

		/**
		 * The type of event
		 * Required
		 */
		event: FormControl<AudioRenderTimelineSpanRegionEnd_typeEvent | null | undefined>,

		/**
		 * The specific action to perform; if the event type is "ending" then this must be "ringout" and if event type is "transition" this must be "cut"
		 * Required
		 */
		type: FormControl<AudioRenderTimelineSpanRegionEnd_typeType | null | undefined>,
	}
	export function CreateAudioRenderTimelineSpanRegionEnd_typeFormGroup() {
		return new FormGroup<AudioRenderTimelineSpanRegionEnd_typeFormProperties>({
			beat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<AudioRenderTimelineSpanRegionEnd_typeEvent | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AudioRenderTimelineSpanRegionEnd_typeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AudioRenderTimelineSpanRegionEnd_typeEvent { ending = 0, transition = 1 }

	export enum AudioRenderTimelineSpanRegionEnd_typeType { ringout = 0, cut = 1 }

	export interface AudioRenderTimelineSpanRegionKey {

		/** A text representation of the accidental; if this field is specified, the tonic_note field should also be specified */
		tonic_accidental?: AudioRenderTimelineSpanRegionKeyTonic_accidental | null;

		/** A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified */
		tonic_note?: AudioRenderTimelineSpanRegionKeyTonic_note | null;

		/** The scale quality; if this field is not specified, the API selects the quality automatically */
		tonic_quality?: AudioRenderTimelineSpanRegionKeyTonic_quality | null;
	}
	export interface AudioRenderTimelineSpanRegionKeyFormProperties {

		/** A text representation of the accidental; if this field is specified, the tonic_note field should also be specified */
		tonic_accidental: FormControl<AudioRenderTimelineSpanRegionKeyTonic_accidental | null | undefined>,

		/** A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified */
		tonic_note: FormControl<AudioRenderTimelineSpanRegionKeyTonic_note | null | undefined>,

		/** The scale quality; if this field is not specified, the API selects the quality automatically */
		tonic_quality: FormControl<AudioRenderTimelineSpanRegionKeyTonic_quality | null | undefined>,
	}
	export function CreateAudioRenderTimelineSpanRegionKeyFormGroup() {
		return new FormGroup<AudioRenderTimelineSpanRegionKeyFormProperties>({
			tonic_accidental: new FormControl<AudioRenderTimelineSpanRegionKeyTonic_accidental | null | undefined>(undefined),
			tonic_note: new FormControl<AudioRenderTimelineSpanRegionKeyTonic_note | null | undefined>(undefined),
			tonic_quality: new FormControl<AudioRenderTimelineSpanRegionKeyTonic_quality | null | undefined>(undefined),
		});

	}

	export enum AudioRenderTimelineSpanRegionKeyTonic_accidental { 'double flat' = 0, flat = 1, natural = 2, sharp = 3, 'double sharp' = 4 }

	export enum AudioRenderTimelineSpanRegionKeyTonic_note { c = 0, d = 1, e = 2, f = 3, g = 4, a = 5, b = 6 }

	export enum AudioRenderTimelineSpanRegionKeyTonic_quality { major = 0, natural_minor = 1, harmonic_minor = 2, melodic_minor = 3, ionian = 4, dorian = 5, phrygian = 6, lydian = 7, mixolydian = 8, aeolian = 9, locrian = 10 }

	export enum AudioRenderTimelineSpanRegionRegion { music = 0, silence = 1 }

	export enum AudioRenderTimelineSpanSpan_type { metered = 0, unmetered = 1 }


	/** An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change */
	export interface AudioRenderTimelineSpanTempoChanges {

		/**
		 * The tempo, in beats per minute, active at this time
		 * Required
		 */
		tempo: number;

		/**
		 * The time, in seconds, at which the tempo exists
		 * Required
		 */
		time: number;
	}

	/** An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change */
	export interface AudioRenderTimelineSpanTempoChangesFormProperties {

		/**
		 * The tempo, in beats per minute, active at this time
		 * Required
		 */
		tempo: FormControl<number | null | undefined>,

		/**
		 * The time, in seconds, at which the tempo exists
		 * Required
		 */
		time: FormControl<number | null | undefined>,
	}
	export function CreateAudioRenderTimelineSpanTempoChangesFormGroup() {
		return new FormGroup<AudioRenderTimelineSpanTempoChangesFormProperties>({
			tempo: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio render data */
	export interface AudioRendersListResults {

		/**
		 * Audio render results
		 * Required
		 */
		audio_renders: Array<AudioRenderResult>;
	}

	/** Audio render data */
	export interface AudioRendersListResultsFormProperties {
	}
	export function CreateAudioRendersListResultsFormGroup() {
		return new FormGroup<AudioRendersListResultsFormProperties>({
		});

	}


	/** Audio search results */
	export interface AudioSearchResults {

		/**
		 * List of tracks
		 * Required
		 */
		data: Array<Audio>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/**
		 * ID of the search
		 * Required
		 */
		search_id: string;

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: number;
	}

	/** Audio search results */
	export interface AudioSearchResultsFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the search
		 * Required
		 */
		search_id: FormControl<string | null | undefined>,

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateAudioSearchResultsFormGroup() {
		return new FormGroup<AudioSearchResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio License URL object */
	export interface AudioUrl {

		/** URL that can be used to download the .zip file containing shorts, loops, and stems */
		shorts_loops_stems?: string | null;

		/**
		 * URL that can be used to download the unwatermarked, licensed asset
		 * Required
		 */
		url: string;
	}

	/** Audio License URL object */
	export interface AudioUrlFormProperties {

		/** URL that can be used to download the .zip file containing shorts, loops, and stems */
		shorts_loops_stems: FormControl<string | null | undefined>,

		/**
		 * URL that can be used to download the unwatermarked, licensed asset
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAudioUrlFormGroup() {
		return new FormGroup<AudioUrlFormProperties>({
			shorts_loops_stems: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A band that can be used to generate music */
	export interface Bands {

		/** The ID of the band */
		id?: string | null;

		/** The name of the band */
		name?: string | null;
	}

	/** A band that can be used to generate music */
	export interface BandsFormProperties {

		/** The ID of the band */
		id: FormControl<string | null | undefined>,

		/** The name of the band */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBandsFormGroup() {
		return new FormGroup<BandsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data required to search for an image */
	export interface SearchImage {

		/** Show images added on the specified date */
		added_date?: Date | null;

		/** Show images added before the specified date */
		added_date_end?: Date | null;

		/** Show images added on or after the specified date */
		added_date_start?: Date | null;

		/** Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
		aspect_ratio?: number | null;

		/**
		 * Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * Minimum: 0
		 */
		aspect_ratio_max?: number | null;

		/**
		 * Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * Minimum: 0
		 */
		aspect_ratio_min?: number | null;

		/** Show only authentic images */
		authentic?: boolean | null;

		/** Show images with the specified Shutterstock-defined category; specify a category name or ID */
		category?: string | null;

		/** Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors */
		color?: string | null;

		/** Show images with the specified contributor names or IDs, allows multiple */
		contributor?: Array<string>;

		/** Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search */
		contributor_country?: Array<string>;

		/** Fields to display in the response; see the documentation for the fields parameter in the overview section */
		fields?: string | null;

		/** (Deprecated; use height_from and height_to instead) Show images with the specified height */
		height?: number | null;

		/** Show images with the specified height or larger, in pixels */
		height_from?: number | null;

		/** Show images with the specified height or smaller, in pixels */
		height_to?: number | null;

		/** Show images of the specified type */
		image_type?: Array<string>;

		/** Hide results with potentially unsafe keywords */
		keyword_safe_search?: boolean | null;

		/** Language code */
		language?: SearchImageLanguage | null;

		/** Show only images with the specified license */
		license?: Array<string>;

		/** Show image results with the specified model IDs */
		model?: Array<string>;

		/** Show image results with horizontal or vertical orientation */
		orientation?: SearchImageOrientation | null;

		/**
		 * Page number
		 * Minimum: 1
		 */
		page?: number | null;

		/** Show images that feature people of the specified age category */
		people_age?: SearchImagePeople_age | null;

		/** Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities */
		people_ethnicity?: Array<string>;

		/** Show images with people of the specified gender */
		people_gender?: SearchImagePeople_gender | null;

		/** Show images of people with a signed model release */
		people_model_released?: boolean | null;

		/**
		 * Show images with the specified number of people
		 * Minimum: 0
		 * Maximum: 4
		 */
		people_number?: number | null;

		/**
		 * Number of results per page
		 * Minimum: 0
		 * Maximum: 20
		 */
		per_page?: number | null;

		/** One or more search terms separated by spaces; you can use NOT to filter out images that match a term */
		query?: string | null;

		/** Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country */
		region?: string;

		/** Enable or disable safe search */
		safe?: boolean | null;

		/** Sort by */
		sort?: SearchImageSort | null;

		/** Spellcheck the search query and return results on suggested spellings */
		spellcheck_query?: boolean | null;

		/** Amount of detail to render in the response */
		view?: SearchImageView | null;

		/** (Deprecated; use width_from and width_to instead) Show images with the specified width */
		width?: number | null;

		/** Show images with the specified width or larger, in pixels */
		width_from?: number | null;

		/** Show images with the specified width or smaller, in pixels */
		width_to?: number | null;
	}

	/** Data required to search for an image */
	export interface SearchImageFormProperties {

		/** Show images added on the specified date */
		added_date: FormControl<Date | null | undefined>,

		/** Show images added before the specified date */
		added_date_end: FormControl<Date | null | undefined>,

		/** Show images added on or after the specified date */
		added_date_start: FormControl<Date | null | undefined>,

		/** Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
		aspect_ratio: FormControl<number | null | undefined>,

		/**
		 * Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * Minimum: 0
		 */
		aspect_ratio_max: FormControl<number | null | undefined>,

		/**
		 * Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * Minimum: 0
		 */
		aspect_ratio_min: FormControl<number | null | undefined>,

		/** Show only authentic images */
		authentic: FormControl<boolean | null | undefined>,

		/** Show images with the specified Shutterstock-defined category; specify a category name or ID */
		category: FormControl<string | null | undefined>,

		/** Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors */
		color: FormControl<string | null | undefined>,

		/** Fields to display in the response; see the documentation for the fields parameter in the overview section */
		fields: FormControl<string | null | undefined>,

		/** (Deprecated; use height_from and height_to instead) Show images with the specified height */
		height: FormControl<number | null | undefined>,

		/** Show images with the specified height or larger, in pixels */
		height_from: FormControl<number | null | undefined>,

		/** Show images with the specified height or smaller, in pixels */
		height_to: FormControl<number | null | undefined>,

		/** Hide results with potentially unsafe keywords */
		keyword_safe_search: FormControl<boolean | null | undefined>,

		/** Language code */
		language: FormControl<SearchImageLanguage | null | undefined>,

		/** Show image results with horizontal or vertical orientation */
		orientation: FormControl<SearchImageOrientation | null | undefined>,

		/**
		 * Page number
		 * Minimum: 1
		 */
		page: FormControl<number | null | undefined>,

		/** Show images that feature people of the specified age category */
		people_age: FormControl<SearchImagePeople_age | null | undefined>,

		/** Show images with people of the specified gender */
		people_gender: FormControl<SearchImagePeople_gender | null | undefined>,

		/** Show images of people with a signed model release */
		people_model_released: FormControl<boolean | null | undefined>,

		/**
		 * Show images with the specified number of people
		 * Minimum: 0
		 * Maximum: 4
		 */
		people_number: FormControl<number | null | undefined>,

		/**
		 * Number of results per page
		 * Minimum: 0
		 * Maximum: 20
		 */
		per_page: FormControl<number | null | undefined>,

		/** One or more search terms separated by spaces; you can use NOT to filter out images that match a term */
		query: FormControl<string | null | undefined>,

		/** Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country */
		region: FormControl<string | null | undefined>,

		/** Enable or disable safe search */
		safe: FormControl<boolean | null | undefined>,

		/** Sort by */
		sort: FormControl<SearchImageSort | null | undefined>,

		/** Spellcheck the search query and return results on suggested spellings */
		spellcheck_query: FormControl<boolean | null | undefined>,

		/** Amount of detail to render in the response */
		view: FormControl<SearchImageView | null | undefined>,

		/** (Deprecated; use width_from and width_to instead) Show images with the specified width */
		width: FormControl<number | null | undefined>,

		/** Show images with the specified width or larger, in pixels */
		width_from: FormControl<number | null | undefined>,

		/** Show images with the specified width or smaller, in pixels */
		width_to: FormControl<number | null | undefined>,
	}
	export function CreateSearchImageFormGroup() {
		return new FormGroup<SearchImageFormProperties>({
			added_date: new FormControl<Date | null | undefined>(undefined),
			added_date_end: new FormControl<Date | null | undefined>(undefined),
			added_date_start: new FormControl<Date | null | undefined>(undefined),
			aspect_ratio: new FormControl<number | null | undefined>(undefined),
			aspect_ratio_max: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			aspect_ratio_min: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			authentic: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			fields: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			height_from: new FormControl<number | null | undefined>(undefined),
			height_to: new FormControl<number | null | undefined>(undefined),
			keyword_safe_search: new FormControl<boolean | null | undefined>(undefined),
			language: new FormControl<SearchImageLanguage | null | undefined>(undefined),
			orientation: new FormControl<SearchImageOrientation | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			people_age: new FormControl<SearchImagePeople_age | null | undefined>(undefined),
			people_gender: new FormControl<SearchImagePeople_gender | null | undefined>(undefined),
			people_model_released: new FormControl<boolean | null | undefined>(undefined),
			people_number: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4)]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			query: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			safe: new FormControl<boolean | null | undefined>(undefined),
			sort: new FormControl<SearchImageSort | null | undefined>(undefined),
			spellcheck_query: new FormControl<boolean | null | undefined>(undefined),
			view: new FormControl<SearchImageView | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			width_from: new FormControl<number | null | undefined>(undefined),
			width_to: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SearchImageLanguage { ar = 0, bg = 1, bn = 2, cs = 3, da = 4, de = 5, el = 6, en = 7, es = 8, fi = 9, fr = 10, gu = 11, he = 12, hi = 13, hr = 14, hu = 15, id = 16, it = 17, ja = 18, kn = 19, ko = 20, ml = 21, mr = 22, nb = 23, nl = 24, or = 25, pl = 26, pt = 27, ro = 28, ru = 29, sk = 30, sl = 31, sv = 32, ta = 33, te = 34, th = 35, tr = 36, uk = 37, ur = 38, vi = 39, zh = 40, 'zh-Hant' = 41 }

	export enum SearchImageOrientation { horizontal = 0, vertical = 1 }

	export enum SearchImagePeople_age { infants = 0, children = 1, teenagers = 2, '20s' = 3, '30s' = 4, '40s' = 5, '50s' = 6, '60s' = 7, older = 8 }

	export enum SearchImagePeople_gender { male = 0, female = 1, both = 2 }

	export enum SearchImageSort { newest = 0, popular = 1, relevance = 2, random = 3 }

	export enum SearchImageView { minimal = 0, full = 1 }


	/** List of search results for each given query */
	export interface BulkImageSearchResults {

		/** Unique identifier for the search request */
		bulk_search_id?: string | null;

		/** List of image search results */
		results?: Array<ImageSearchResults>;
	}

	/** List of search results for each given query */
	export interface BulkImageSearchResultsFormProperties {

		/** Unique identifier for the search request */
		bulk_search_id: FormControl<string | null | undefined>,
	}
	export function CreateBulkImageSearchResultsFormGroup() {
		return new FormGroup<BulkImageSearchResultsFormProperties>({
			bulk_search_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image search results */
	export interface ImageSearchResults {

		/**
		 * List of images
		 * Required
		 */
		data: Array<Image>;

		/** AI-powered insights about an asset, based on the specified audience and objective */
		insights?: Insights;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/**
		 * Unique identifier for the search request
		 * Required
		 */
		search_id: string;

		/** Returns information if search phrase has potentially been mistyped or another query would lead to better search results */
		spellcheck_info?: string | null;

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: number;
	}

	/** Image search results */
	export interface ImageSearchResultsFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/**
		 * Unique identifier for the search request
		 * Required
		 */
		search_id: FormControl<string | null | undefined>,

		/** Returns information if search phrase has potentially been mistyped or another query would lead to better search results */
		spellcheck_info: FormControl<string | null | undefined>,

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateImageSearchResultsFormGroup() {
		return new FormGroup<ImageSearchResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spellcheck_info: new FormControl<string | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about an image */
	export interface Image {

		/** Date that the image was added by the contributor */
		added_date?: Date | null;

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url?: string | null;

		/** Aspect ratio of the image in decimal format, such as 0.6667 */
		aspect?: number | null;

		/** Information about the assets that are part of an image */
		assets?: ImageAssets;

		/** Categories that this image is a part of */
		categories?: Array<Category>;

		/**
		 * Information about a contributor
		 * Required
		 */
		contributor: Contributor;

		/** Detailed description of the image */
		description?: string | null;

		/** Indicates whether there are model releases for the image */
		has_model_release?: boolean | null;

		/** Indicates whether there are property releases for the image */
		has_property_release?: boolean | null;

		/**
		 * Image ID
		 * Required
		 */
		id: string;

		/** Type of image */
		image_type?: string | null;

		/** AI-powered insights about how the asset will perform for the objective and audience */
		insights?: ImageInsights;

		/** Whether or not this image contains adult content */
		is_adult?: boolean | null;

		/** Whether or not this image is editorial content */
		is_editorial?: boolean | null;

		/** Whether or not this image is an illustration */
		is_illustration?: boolean | null;

		/** Keywords associated with the content of this image */
		keywords?: Array<string>;

		/**
		 * Media type of this image, should always be "image"
		 * Required
		 */
		media_type: string;

		/** List of model releases */
		model_releases?: Array<ModelRelease>;

		/** List of models */
		models?: Array<Model>;

		/** List of all releases of this image */
		releases?: Array<string>;

		/** Link to image information page; included only for certain accounts */
		url?: string | null;
	}

	/** Information about an image */
	export interface ImageFormProperties {

		/** Date that the image was added by the contributor */
		added_date: FormControl<Date | null | undefined>,

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url: FormControl<string | null | undefined>,

		/** Aspect ratio of the image in decimal format, such as 0.6667 */
		aspect: FormControl<number | null | undefined>,

		/** Detailed description of the image */
		description: FormControl<string | null | undefined>,

		/** Indicates whether there are model releases for the image */
		has_model_release: FormControl<boolean | null | undefined>,

		/** Indicates whether there are property releases for the image */
		has_property_release: FormControl<boolean | null | undefined>,

		/**
		 * Image ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Type of image */
		image_type: FormControl<string | null | undefined>,

		/** Whether or not this image contains adult content */
		is_adult: FormControl<boolean | null | undefined>,

		/** Whether or not this image is editorial content */
		is_editorial: FormControl<boolean | null | undefined>,

		/** Whether or not this image is an illustration */
		is_illustration: FormControl<boolean | null | undefined>,

		/**
		 * Media type of this image, should always be "image"
		 * Required
		 */
		media_type: FormControl<string | null | undefined>,

		/** Link to image information page; included only for certain accounts */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			added_date: new FormControl<Date | null | undefined>(undefined),
			affiliate_url: new FormControl<string | null | undefined>(undefined),
			aspect: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			has_model_release: new FormControl<boolean | null | undefined>(undefined),
			has_property_release: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			image_type: new FormControl<string | null | undefined>(undefined),
			is_adult: new FormControl<boolean | null | undefined>(undefined),
			is_editorial: new FormControl<boolean | null | undefined>(undefined),
			is_illustration: new FormControl<boolean | null | undefined>(undefined),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the assets that are part of an image */
	export interface ImageAssets {

		/** Image size information */
		huge_jpg?: ImageSizeDetails;

		/** Image thumbnail information */
		huge_thumb?: Thumbnail;

		/** Image thumbnail information */
		large_thumb?: Thumbnail;

		/** Image size information */
		medium_jpg?: ImageSizeDetails;

		/** Image thumbnail information */
		preview?: Thumbnail;

		/** Image thumbnail information */
		preview_1000?: Thumbnail;

		/** Image thumbnail information */
		preview_1500?: Thumbnail;

		/** Image size information */
		small_jpg?: ImageSizeDetails;

		/** Image thumbnail information */
		small_thumb?: Thumbnail;

		/** Image size information */
		supersize_jpg?: ImageSizeDetails;

		/** Image size information */
		vector_eps?: ImageSizeDetails;
	}

	/** Information about the assets that are part of an image */
	export interface ImageAssetsFormProperties {
	}
	export function CreateImageAssetsFormGroup() {
		return new FormGroup<ImageAssetsFormProperties>({
		});

	}


	/** Image size information */
	export interface ImageSizeDetails {

		/** Display name of this image size */
		display_name?: string | null;
		dpi?: number | null;

		/** File size (in bytes) of this image size */
		file_size?: number | null;

		/** Format of this image size */
		format?: string | null;

		/** Height of this image size */
		height?: number | null;

		/** Whether or not this image can be licensed in this image size */
		is_licensable?: boolean | null;

		/** Width of this image size */
		width?: number | null;
	}

	/** Image size information */
	export interface ImageSizeDetailsFormProperties {

		/** Display name of this image size */
		display_name: FormControl<string | null | undefined>,
		dpi: FormControl<number | null | undefined>,

		/** File size (in bytes) of this image size */
		file_size: FormControl<number | null | undefined>,

		/** Format of this image size */
		format: FormControl<string | null | undefined>,

		/** Height of this image size */
		height: FormControl<number | null | undefined>,

		/** Whether or not this image can be licensed in this image size */
		is_licensable: FormControl<boolean | null | undefined>,

		/** Width of this image size */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageSizeDetailsFormGroup() {
		return new FormGroup<ImageSizeDetailsFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			dpi: new FormControl<number | null | undefined>(undefined),
			file_size: new FormControl<number | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			is_licensable: new FormControl<boolean | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Image thumbnail information */
	export interface Thumbnail {

		/**
		 * Height in pixels of the image thumbnail
		 * Required
		 */
		height: number;

		/**
		 * Direct URL to the image
		 * Required
		 */
		url: string;

		/**
		 * Width in pixels of the image thumbnail
		 * Required
		 */
		width: number;
	}

	/** Image thumbnail information */
	export interface ThumbnailFormProperties {

		/**
		 * Height in pixels of the image thumbnail
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Direct URL to the image
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Width in pixels of the image thumbnail
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Category information */
	export interface Category {

		/** Category ID */
		id?: string | null;

		/** Category name */
		name?: string | null;
	}

	/** Category information */
	export interface CategoryFormProperties {

		/** Category ID */
		id: FormControl<string | null | undefined>,

		/** Category name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageInsights {
		labels?: Array<string>;
	}
	export interface ImageInsightsFormProperties {
	}
	export function CreateImageInsightsFormGroup() {
		return new FormGroup<ImageInsightsFormProperties>({
		});

	}


	/** Information about a human model or property that appears in media; used to search for assets that this model is in */
	export interface Model {

		/**
		 * ID of the model
		 * Required
		 */
		id: string;
	}

	/** Information about a human model or property that appears in media; used to search for assets that this model is in */
	export interface ModelFormProperties {

		/**
		 * ID of the model
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** AI-powered insights about an asset, based on the specified audience and objective */
	export interface Insights {

		/**
		 * How effective the AI thinks an asset in the category is for the specified audience and objective, expressed as a percentile compared to other images
		 * Required
		 */
		InsightsLabel_performance: Array<InsightsLabel_performance>;
	}

	/** AI-powered insights about an asset, based on the specified audience and objective */
	export interface InsightsFormProperties {
	}
	export function CreateInsightsFormGroup() {
		return new FormGroup<InsightsFormProperties>({
		});

	}

	export interface InsightsLabel_performance {
		name?: string | null;
		percentile_performance?: number | null;
	}
	export interface InsightsLabel_performanceFormProperties {
		name: FormControl<string | null | undefined>,
		percentile_performance: FormControl<number | null | undefined>,
	}
	export function CreateInsightsLabel_performanceFormGroup() {
		return new FormGroup<InsightsLabel_performanceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentile_performance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Catalog collection */
	export interface CatalogCollection {

		/** Metadata about an item that is part of a collection */
		cover_asset?: CatalogCollectionItem;

		/** Required */
		created_time: Date;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/**
		 * List of role assignments for a catalog collection
		 * Required
		 */
		role_assignments: CatalogCollectionRoleAssignments;

		/** Required */
		total_item_count: number;

		/** Required */
		updated_time: Date;

		/** Required */
		visibility: CatalogCollectionVisibility;
	}

	/** Catalog collection */
	export interface CatalogCollectionFormProperties {

		/** Required */
		created_time: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		total_item_count: FormControl<number | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,

		/** Required */
		visibility: FormControl<CatalogCollectionVisibility | null | undefined>,
	}
	export function CreateCatalogCollectionFormGroup() {
		return new FormGroup<CatalogCollectionFormProperties>({
			created_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_item_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			visibility: new FormControl<CatalogCollectionVisibility | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata about an item that is part of a collection */
	export interface CatalogCollectionItem {

		/** Required */
		asset: CatalogCollectionItemAsset;

		/** The collection IDs that this asset belongs to */
		collection_ids?: Array<string>;

		/** Required */
		created_time: Date;

		/** Required */
		id: string;
	}

	/** Metadata about an item that is part of a collection */
	export interface CatalogCollectionItemFormProperties {

		/** Required */
		created_time: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCatalogCollectionItemFormGroup() {
		return new FormGroup<CatalogCollectionItemFormProperties>({
			created_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CatalogCollectionItemAsset {
		id?: string | null;
		name?: string | null;

		/** Required */
		type: CatalogCollectionItemAssetType;
	}
	export interface CatalogCollectionItemAssetFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CatalogCollectionItemAssetType | null | undefined>,
	}
	export function CreateCatalogCollectionItemAssetFormGroup() {
		return new FormGroup<CatalogCollectionItemAssetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CatalogCollectionItemAssetType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CatalogCollectionItemAssetType { image = 0, video = 1, audio = 2, 'editorial-image' = 3, 'editorial-video' = 4 }


	/** List of role assignments for a catalog collection */
	export interface CatalogCollectionRoleAssignments {

		/** Required */
		collection_id: string;

		/** Required */
		roles: CatalogCollectionRoleAssignmentsRoles;
	}

	/** List of role assignments for a catalog collection */
	export interface CatalogCollectionRoleAssignmentsFormProperties {

		/** Required */
		collection_id: FormControl<string | null | undefined>,
	}
	export function CreateCatalogCollectionRoleAssignmentsFormGroup() {
		return new FormGroup<CatalogCollectionRoleAssignmentsFormProperties>({
			collection_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CatalogCollectionRoleAssignmentsRoles {
		editors?: Array<CatalogCollectionRole>;
		owners?: Array<CatalogCollectionRole>;
		viewers?: Array<CatalogCollectionRole>;
	}
	export interface CatalogCollectionRoleAssignmentsRolesFormProperties {
	}
	export function CreateCatalogCollectionRoleAssignmentsRolesFormGroup() {
		return new FormGroup<CatalogCollectionRoleAssignmentsRolesFormProperties>({
		});

	}


	/** A user that has access to a catalog collection */
	export interface CatalogCollectionRole {

		/** Required */
		email: string;

		/** Required */
		id: string;

		/** Required */
		type: CatalogCollectionRoleType;
	}

	/** A user that has access to a catalog collection */
	export interface CatalogCollectionRoleFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CatalogCollectionRoleType | null | undefined>,
	}
	export function CreateCatalogCollectionRoleFormGroup() {
		return new FormGroup<CatalogCollectionRoleFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CatalogCollectionRoleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CatalogCollectionRoleType { USER = 0 }

	export enum CatalogCollectionVisibility { private = 0, public = 1 }


	/** List of catalog collections */
	export interface CatalogCollectionDataList {

		/**
		 * List of catalog collections
		 * Required
		 */
		data: Array<CatalogCollection>;

		/** Required */
		page: number;

		/** Required */
		per_page: number;

		/** Required */
		total_count: number;
	}

	/** List of catalog collections */
	export interface CatalogCollectionDataListFormProperties {

		/** Required */
		page: FormControl<number | null | undefined>,

		/** Required */
		per_page: FormControl<number | null | undefined>,

		/** Required */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateCatalogCollectionDataListFormGroup() {
		return new FormGroup<CatalogCollectionDataListFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of catalog collection items */
	export interface CatalogCollectionItemDataList {

		/**
		 * List of catalog collection items
		 * Required
		 */
		data: Array<CatalogCollectionItem>;

		/** Required */
		page: number;

		/** Required */
		per_page: number;

		/** Required */
		total_count: number;
	}

	/** List of catalog collection items */
	export interface CatalogCollectionItemDataListFormProperties {

		/** Required */
		page: FormControl<number | null | undefined>,

		/** Required */
		per_page: FormControl<number | null | undefined>,

		/** Required */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateCatalogCollectionItemDataListFormGroup() {
		return new FormGroup<CatalogCollectionItemDataListFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of categories that images can belong to */
	export interface CategoryDataList {

		/** Categories */
		data?: Array<Category>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** The current page of results */
		page?: number | null;

		/** The number of results per page */
		per_page?: number | null;

		/** The total number of results across all pages */
		total_count?: number | null;
	}

	/** List of categories that images can belong to */
	export interface CategoryDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** The current page of results */
		page: FormControl<number | null | undefined>,

		/** The number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** The total number of results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateCategoryDataListFormGroup() {
		return new FormGroup<CategoryDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata about a collection of assets */
	export interface Collection {

		/** Metadata about an item that is part of a collection */
		cover_item?: CollectionItem;

		/** When the collection was created */
		created_time?: Date | null;

		/**
		 * The collection ID
		 * Required
		 */
		id: string;

		/** The last time this collection's items were updated */
		items_updated_time?: Date | null;

		/**
		 * The name of the collection
		 * Required
		 */
		name: string;

		/** A code that can be used to share the collection (optional) */
		share_code?: string | null;

		/** The browser URL that can be used to share the collection (optional) */
		share_url?: string | null;

		/**
		 * The number of items in the collection
		 * Required
		 */
		total_item_count: number;

		/** The last time the collection was update (other than changes to the items in it) */
		updated_time?: Date | null;
	}

	/** Metadata about a collection of assets */
	export interface CollectionFormProperties {

		/** When the collection was created */
		created_time: FormControl<Date | null | undefined>,

		/**
		 * The collection ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The last time this collection's items were updated */
		items_updated_time: FormControl<Date | null | undefined>,

		/**
		 * The name of the collection
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** A code that can be used to share the collection (optional) */
		share_code: FormControl<string | null | undefined>,

		/** The browser URL that can be used to share the collection (optional) */
		share_url: FormControl<string | null | undefined>,

		/**
		 * The number of items in the collection
		 * Required
		 */
		total_item_count: FormControl<number | null | undefined>,

		/** The last time the collection was update (other than changes to the items in it) */
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			created_time: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			items_updated_time: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			share_code: new FormControl<string | null | undefined>(undefined),
			share_url: new FormControl<string | null | undefined>(undefined),
			total_item_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Metadata about an item that is part of a collection */
	export interface CollectionItem {

		/** The date the item was added to the collection */
		added_time?: Date | null;

		/**
		 * ID of the item
		 * Required
		 */
		id: string;

		/** The media type of the item, such as image, video, or audio */
		media_type?: string | null;
	}

	/** Metadata about an item that is part of a collection */
	export interface CollectionItemFormProperties {

		/** The date the item was added to the collection */
		added_time: FormControl<Date | null | undefined>,

		/**
		 * ID of the item
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The media type of the item, such as image, video, or audio */
		media_type: FormControl<string | null | undefined>,
	}
	export function CreateCollectionItemFormGroup() {
		return new FormGroup<CollectionItemFormProperties>({
			added_time: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection creation request */
	export interface CollectionCreateRequest {

		/**
		 * The name of the collection
		 * Required
		 */
		name: string;
	}

	/** Collection creation request */
	export interface CollectionCreateRequestFormProperties {

		/**
		 * The name of the collection
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCollectionCreateRequestFormGroup() {
		return new FormGroup<CollectionCreateRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Collection creation response */
	export interface CollectionCreateResponse {

		/**
		 * ID of the new collection
		 * Required
		 */
		id: string;
	}

	/** Collection creation response */
	export interface CollectionCreateResponseFormProperties {

		/**
		 * ID of the new collection
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCollectionCreateResponseFormGroup() {
		return new FormGroup<CollectionCreateResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of collections */
	export interface CollectionDataList {

		/** Collections */
		data?: Array<Collection>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** The current page of results */
		page?: number | null;

		/** The number of results per page */
		per_page?: number | null;

		/** The total number of results across all pages */
		total_count?: number | null;
	}

	/** List of collections */
	export interface CollectionDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** The current page of results */
		page: FormControl<number | null | undefined>,

		/** The number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** The total number of results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateCollectionDataListFormGroup() {
		return new FormGroup<CollectionDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of items in a collection */
	export interface CollectionItemDataList {

		/** Assets in the collection */
		data?: Array<CollectionItem>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** The current page of results */
		page?: number | null;

		/** The number of results per page */
		per_page?: number | null;

		/** The total number of results across all pages */
		total_count?: number | null;
	}

	/** List of items in a collection */
	export interface CollectionItemDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** The current page of results */
		page: FormControl<number | null | undefined>,

		/** The number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** The total number of results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateCollectionItemDataListFormGroup() {
		return new FormGroup<CollectionItemDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to get a list of items in a collection */
	export interface CollectionItemRequest {

		/**
		 * List of items
		 * Required
		 */
		items: Array<CollectionItem>;
	}

	/** Request to get a list of items in a collection */
	export interface CollectionItemRequestFormProperties {
	}
	export function CreateCollectionItemRequestFormGroup() {
		return new FormGroup<CollectionItemRequestFormProperties>({
		});

	}


	/** Collection update request */
	export interface CollectionUpdateRequest {

		/**
		 * The new name of the collection
		 * Required
		 */
		name: string;
	}

	/** Collection update request */
	export interface CollectionUpdateRequestFormProperties {

		/**
		 * The new name of the collection
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCollectionUpdateRequestFormGroup() {
		return new FormGroup<CollectionUpdateRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Asset upload information */
	export interface ComputerVisionImageCreateResponse {

		/** Required */
		upload_id: string;
	}

	/** Asset upload information */
	export interface ComputerVisionImageCreateResponseFormProperties {

		/** Required */
		upload_id: FormControl<string | null | undefined>,
	}
	export function CreateComputerVisionImageCreateResponseFormGroup() {
		return new FormGroup<ComputerVisionImageCreateResponseFormProperties>({
			upload_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contributor profile data */
	export interface ContributorProfile {

		/** Short description of the contributors' library */
		about?: string | null;

		/** Type of content that the contributor specializes in (photographer, illustrator, etc) */
		contributor_type?: Array<string>;

		/** Preferred name to be displayed for the contributor */
		display_name?: string | null;

		/** List of equipment used by the contributor (Canon EOS 5D Mark II, etc) */
		equipment?: Array<string>;

		/**
		 * Contributor ID
		 * Required
		 */
		id: string;

		/** Country code representing the contributor's locale */
		location?: string | null;

		/** Web URL for the contributors' profile */
		portfolio_url?: string | null;

		/** Contributor profile social media links */
		social_media?: ContributorProfileSocialMedia;

		/** List of styles that the contributor specializes in (lifestyle, mixed media, etc) */
		styles?: Array<string>;

		/** Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc) */
		subjects?: Array<string>;

		/** Personal website for the contributor */
		website?: string | null;
	}

	/** Contributor profile data */
	export interface ContributorProfileFormProperties {

		/** Short description of the contributors' library */
		about: FormControl<string | null | undefined>,

		/** Preferred name to be displayed for the contributor */
		display_name: FormControl<string | null | undefined>,

		/**
		 * Contributor ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Country code representing the contributor's locale */
		location: FormControl<string | null | undefined>,

		/** Web URL for the contributors' profile */
		portfolio_url: FormControl<string | null | undefined>,

		/** Personal website for the contributor */
		website: FormControl<string | null | undefined>,
	}
	export function CreateContributorProfileFormGroup() {
		return new FormGroup<ContributorProfileFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			portfolio_url: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contributor profile social media links */
	export interface ContributorProfileSocialMedia {

		/** Facebook link for contributor */
		facebook?: string | null;

		/** Google+ link for contributor */
		google_plus?: string | null;

		/** LinkedIn link for contributor */
		linkedin?: string | null;

		/** Pinterest page for contributor */
		pinterest?: string | null;

		/** Tumblr link for contributor */
		tumblr?: string | null;

		/** Twitter link for contributor */
		twitter?: string | null;
	}

	/** Contributor profile social media links */
	export interface ContributorProfileSocialMediaFormProperties {

		/** Facebook link for contributor */
		facebook: FormControl<string | null | undefined>,

		/** Google+ link for contributor */
		google_plus: FormControl<string | null | undefined>,

		/** LinkedIn link for contributor */
		linkedin: FormControl<string | null | undefined>,

		/** Pinterest page for contributor */
		pinterest: FormControl<string | null | undefined>,

		/** Tumblr link for contributor */
		tumblr: FormControl<string | null | undefined>,

		/** Twitter link for contributor */
		twitter: FormControl<string | null | undefined>,
	}
	export function CreateContributorProfileSocialMediaFormGroup() {
		return new FormGroup<ContributorProfileSocialMediaFormProperties>({
			facebook: new FormControl<string | null | undefined>(undefined),
			google_plus: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			pinterest: new FormControl<string | null | undefined>(undefined),
			tumblr: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of contributor profiles */
	export interface ContributorProfileDataList {

		/** Conributor profiles */
		data?: Array<ContributorProfile>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Error message */
		message?: string | null;

		/** Page of response */
		page?: number | null;

		/** Number of contributors per page */
		per_page?: number | null;

		/** Total count of contributors for this request */
		total_count?: number | null;
	}

	/** List of contributor profiles */
	export interface ContributorProfileDataListFormProperties {

		/** Error message */
		message: FormControl<string | null | undefined>,

		/** Page of response */
		page: FormControl<number | null | undefined>,

		/** Number of contributors per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of contributors for this request */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateContributorProfileDataListFormGroup() {
		return new FormGroup<ContributorProfileDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Cookie object */
	export interface Cookie {

		/**
		 * The name of the cookie
		 * Required
		 */
		name: string;

		/**
		 * The value of the cookie
		 * Required
		 */
		value: string;
	}

	/** Cookie object */
	export interface CookieFormProperties {

		/**
		 * The name of the cookie
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the cookie
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCookieFormGroup() {
		return new FormGroup<CookieFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data required to create an audio render */
	export interface CreateAudioRender {

		/**
		 * A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
		 * Required
		 */
		filename: string;

		/**
		 * File format, such as MP3 file, combined WAV file, or individual track WAV files
		 * Required
		 */
		preset: AudioRenderResultPreset;

		/**
		 * A timeline object that represents either a request for music to be created or an entire music composition
		 * Required
		 */
		timeline: AudioRenderTimeline;
	}

	/** Data required to create an audio render */
	export interface CreateAudioRenderFormProperties {

		/**
		 * A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
		 * Required
		 */
		filename: FormControl<string | null | undefined>,

		/**
		 * File format, such as MP3 file, combined WAV file, or individual track WAV files
		 * Required
		 */
		preset: FormControl<AudioRenderResultPreset | null | undefined>,
	}
	export function CreateCreateAudioRenderFormGroup() {
		return new FormGroup<CreateAudioRenderFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preset: new FormControl<AudioRenderResultPreset | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Render request data */
	export interface CreateAudioRendersRequest {

		/**
		 * Parameters to create computer audio renders
		 * Required
		 */
		audio_renders: Array<CreateAudioRender>;
	}

	/** Render request data */
	export interface CreateAudioRendersRequestFormProperties {
	}
	export function CreateCreateAudioRendersRequestFormGroup() {
		return new FormGroup<CreateAudioRendersRequestFormProperties>({
		});

	}

	export interface CreateCatalogCollection {

		/** Maximum items: 50 */
		items?: Array<CreateCatalogCollectionItem>;

		/**
		 * Required
		 * Max length: 100000
		 * Min length: 1
		 */
		name: string;
		visibility?: CatalogCollectionVisibility | null;
	}
	export interface CreateCatalogCollectionFormProperties {

		/**
		 * Required
		 * Max length: 100000
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		visibility: FormControl<CatalogCollectionVisibility | null | undefined>,
	}
	export function CreateCreateCatalogCollectionFormGroup() {
		return new FormGroup<CreateCatalogCollectionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100000)]),
			visibility: new FormControl<CatalogCollectionVisibility | null | undefined>(undefined),
		});

	}

	export interface CreateCatalogCollectionItem {

		/** Required */
		asset: CreateCatalogCollectionItemAsset;
	}
	export interface CreateCatalogCollectionItemFormProperties {
	}
	export function CreateCreateCatalogCollectionItemFormGroup() {
		return new FormGroup<CreateCatalogCollectionItemFormProperties>({
		});

	}

	export interface CreateCatalogCollectionItemAsset {
		id?: string | null;

		/** Required */
		type: string;
	}
	export interface CreateCatalogCollectionItemAssetFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateCatalogCollectionItemAssetFormGroup() {
		return new FormGroup<CreateCatalogCollectionItemAssetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCatalogCollectionItems {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		items: Array<CreateCatalogCollectionItem>;
	}
	export interface CreateCatalogCollectionItemsFormProperties {
	}
	export function CreateCreateCatalogCollectionItemsFormGroup() {
		return new FormGroup<CreateCatalogCollectionItemsFormProperties>({
		});

	}


	/** A custom height or a custom width to resize the image to, but not both (experimental) */
	export interface CustomSizeDimensions {

		/**
		 * Custom height to resize the image to
		 * Minimum: 100
		 */
		height?: number | null;

		/**
		 * Custom width to resize the image to
		 * Minimum: 100
		 */
		width?: number | null;
	}

	/** A custom height or a custom width to resize the image to, but not both (experimental) */
	export interface CustomSizeDimensionsFormProperties {

		/**
		 * Custom height to resize the image to
		 * Minimum: 100
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Custom width to resize the image to
		 * Minimum: 100
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCustomSizeDimensionsFormGroup() {
		return new FormGroup<CustomSizeDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(100)]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(100)]),
		});

	}


	/** Information about a descriptor */
	export interface Descriptors {

		/** The average ratio of the length of the music to the time it takes to render; for example, a render speed of 3.0 generates 30 seconds of music in about 10 seconds */
		average_render_speed?: number | null;

		/** The bands that are available to use this descriptor */
		bands?: Array<Bands>;

		/** The ID of the descriptor */
		id?: string | null;

		/** The instruments that can play with this descriptor */
		instruments?: Array<Instruments>;

		/** The maximum beats per minute that the descriptor is intended to be used with */
		max_tempo?: number | null;

		/** The minimum beats per minute that the descriptor is intended to be used with */
		min_tempo?: number | null;

		/** The name of the descriptor */
		name?: string | null;

		/** Preview of the descriptor */
		previews?: Array<Preview>;

		/** Tags that describe the descriptor */
		tags?: Array<string>;
	}

	/** Information about a descriptor */
	export interface DescriptorsFormProperties {

		/** The average ratio of the length of the music to the time it takes to render; for example, a render speed of 3.0 generates 30 seconds of music in about 10 seconds */
		average_render_speed: FormControl<number | null | undefined>,

		/** The ID of the descriptor */
		id: FormControl<string | null | undefined>,

		/** The maximum beats per minute that the descriptor is intended to be used with */
		max_tempo: FormControl<number | null | undefined>,

		/** The minimum beats per minute that the descriptor is intended to be used with */
		min_tempo: FormControl<number | null | undefined>,

		/** The name of the descriptor */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDescriptorsFormGroup() {
		return new FormGroup<DescriptorsFormProperties>({
			average_render_speed: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			max_tempo: new FormControl<number | null | undefined>(undefined),
			min_tempo: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instruments */
	export interface Instruments {

		/** The string id of the instrument */
		id?: string | null;

		/** The string name of the instrument */
		name?: string | null;
	}

	/** Instruments */
	export interface InstrumentsFormProperties {

		/** The string id of the instrument */
		id: FormControl<string | null | undefined>,

		/** The string name of the instrument */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInstrumentsFormGroup() {
		return new FormGroup<InstrumentsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Preview information */
	export interface Preview {

		/** Content type of the preview, currently audio/mp3 */
		content_type?: PreviewContent_type | null;

		/** Url of the instrument's preview file */
		url?: string | null;
	}

	/** Preview information */
	export interface PreviewFormProperties {

		/** Content type of the preview, currently audio/mp3 */
		content_type: FormControl<PreviewContent_type | null | undefined>,

		/** Url of the instrument's preview file */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePreviewFormGroup() {
		return new FormGroup<PreviewFormProperties>({
			content_type: new FormControl<PreviewContent_type | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PreviewContent_type { 'audio/mp3' = 0 }


	/** List Descriptors results */
	export interface DescriptorsListResult {

		/** List of descriptors */
		data?: Array<Descriptors>;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;
	}

	/** List Descriptors results */
	export interface DescriptorsListResultFormProperties {

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,
	}
	export function CreateDescriptorsListResultFormGroup() {
		return new FormGroup<DescriptorsListResultFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object */
	export interface DownloadHistory {

		/** Information about the downloaded media */
		audio?: DownloadHistoryMediaDetails;

		/**
		 * Date the media was downloaded the first time
		 * Required
		 */
		download_time: Date;

		/**
		 * ID of the download
		 * Required
		 */
		id: string;

		/** Information about the downloaded media */
		image?: DownloadHistoryMediaDetails;

		/** Specifies if the media is downloadable via its respective downloads endpoint */
		is_downloadable?: boolean | null;

		/**
		 * The name of the license of this download
		 * Required
		 */
		license: string;

		/** The metadata that was passed in the original licensing request */
		metadata?: string | null;

		/** Pricing information for revenue-sharing transactions */
		revshare?: DownloadHistoryRevshareDetails;

		/** ID of the subscription used to perform this download */
		subscription_id?: string | null;

		/** Information about a user */
		user?: DownloadHistoryUserDetails;

		/** Information about the downloaded media */
		video?: DownloadHistoryMediaDetails;
	}

	/** Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object */
	export interface DownloadHistoryFormProperties {

		/**
		 * Date the media was downloaded the first time
		 * Required
		 */
		download_time: FormControl<Date | null | undefined>,

		/**
		 * ID of the download
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Specifies if the media is downloadable via its respective downloads endpoint */
		is_downloadable: FormControl<boolean | null | undefined>,

		/**
		 * The name of the license of this download
		 * Required
		 */
		license: FormControl<string | null | undefined>,

		/** The metadata that was passed in the original licensing request */
		metadata: FormControl<string | null | undefined>,

		/** ID of the subscription used to perform this download */
		subscription_id: FormControl<string | null | undefined>,
	}
	export function CreateDownloadHistoryFormGroup() {
		return new FormGroup<DownloadHistoryFormProperties>({
			download_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_downloadable: new FormControl<boolean | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			subscription_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the downloaded media */
	export interface DownloadHistoryMediaDetails {

		/** Information about the format of a download */
		format?: DownloadHistoryFormatDetails;

		/**
		 * ID of the download history media details
		 * Required
		 */
		id: string;
	}

	/** Information about the downloaded media */
	export interface DownloadHistoryMediaDetailsFormProperties {

		/**
		 * ID of the download history media details
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDownloadHistoryMediaDetailsFormGroup() {
		return new FormGroup<DownloadHistoryMediaDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the format of a download */
	export interface DownloadHistoryFormatDetails {

		/** The format of the downloaded media */
		format?: string | null;

		/** The size of the downloaded media */
		size?: string | null;
	}

	/** Information about the format of a download */
	export interface DownloadHistoryFormatDetailsFormProperties {

		/** The format of the downloaded media */
		format: FormControl<string | null | undefined>,

		/** The size of the downloaded media */
		size: FormControl<string | null | undefined>,
	}
	export function CreateDownloadHistoryFormatDetailsFormGroup() {
		return new FormGroup<DownloadHistoryFormatDetailsFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pricing information for revenue-sharing transactions */
	export interface DownloadHistoryRevshareDetails {

		/**
		 * The amount charged for the license
		 * Required
		 */
		purchase_amount: string;

		/**
		 * The currency the amount was charged in
		 * Required
		 */
		purchase_currency: string;
	}

	/** Pricing information for revenue-sharing transactions */
	export interface DownloadHistoryRevshareDetailsFormProperties {

		/**
		 * The amount charged for the license
		 * Required
		 */
		purchase_amount: FormControl<string | null | undefined>,

		/**
		 * The currency the amount was charged in
		 * Required
		 */
		purchase_currency: FormControl<string | null | undefined>,
	}
	export function CreateDownloadHistoryRevshareDetailsFormGroup() {
		return new FormGroup<DownloadHistoryRevshareDetailsFormProperties>({
			purchase_amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchase_currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a user */
	export interface DownloadHistoryUserDetails {

		/**
		 * The name of the user who downloaded the item
		 * Required
		 */
		username: string;
	}

	/** Information about a user */
	export interface DownloadHistoryUserDetailsFormProperties {

		/**
		 * The name of the user who downloaded the item
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDownloadHistoryUserDetailsFormGroup() {
		return new FormGroup<DownloadHistoryUserDetailsFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of download events */
	export interface DownloadHistoryDataList {

		/** Download events */
		data?: Array<DownloadHistory>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** The current page of results */
		page?: number | null;

		/** The number of results per page */
		per_page?: number | null;

		/** The total number of results across all pages */
		total_count?: number | null;
	}

	/** List of download events */
	export interface DownloadHistoryDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** The current page of results */
		page: FormControl<number | null | undefined>,

		/** The number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** The total number of results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateDownloadHistoryDataListFormGroup() {
		return new FormGroup<DownloadHistoryDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Asset information, including size and thumbnail URLs */
	export interface EditorialAssets {

		/** Image size information */
		medium_jpg?: ImageSizeDetails;

		/** Image size information */
		original?: ImageSizeDetails;

		/** Image size information */
		small_jpg?: ImageSizeDetails;

		/** Image thumbnail information */
		thumb_170?: Thumbnail;

		/** Image thumbnail information */
		thumb_220?: Thumbnail;

		/** Image thumbnail information */
		watermark_1500?: Thumbnail;

		/** Image thumbnail information */
		watermark_450?: Thumbnail;
	}

	/** Asset information, including size and thumbnail URLs */
	export interface EditorialAssetsFormProperties {
	}
	export function CreateEditorialAssetsFormGroup() {
		return new FormGroup<EditorialAssetsFormProperties>({
		});

	}


	/** Name of an editorial category */
	export interface EditorialCategory {
		name?: string | null;
	}

	/** Name of an editorial category */
	export interface EditorialCategoryFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateEditorialCategoryFormGroup() {
		return new FormGroup<EditorialCategoryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of editorial categories */
	export interface EditorialCategoryResults {

		/** List of editorial categories */
		data?: Array<EditorialCategory>;
	}

	/** List of editorial categories */
	export interface EditorialCategoryResultsFormProperties {
	}
	export function CreateEditorialCategoryResultsFormGroup() {
		return new FormGroup<EditorialCategoryResultsFormProperties>({
		});

	}


	/** Metadata about editorial content */
	export interface EditorialContent {
		aspect?: number | null;

		/** Asset information, including size and thumbnail URLs */
		assets?: EditorialAssets;
		byline?: string | null;
		caption?: string | null;

		/** List of categories */
		categories?: Array<EditorialCategory>;
		date_taken?: Date | null;
		description?: string | null;

		/** Required */
		id: string;
		keywords?: Array<string>;
		special_instructions?: string | null;
		title?: string | null;
	}

	/** Metadata about editorial content */
	export interface EditorialContentFormProperties {
		aspect: FormControl<number | null | undefined>,
		byline: FormControl<string | null | undefined>,
		caption: FormControl<string | null | undefined>,
		date_taken: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		special_instructions: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateEditorialContentFormGroup() {
		return new FormGroup<EditorialContentFormProperties>({
			aspect: new FormControl<number | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			date_taken: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			special_instructions: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of editorial items */
	export interface EditorialContentDataList {

		/** Editorial items */
		data?: Array<EditorialContent>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Optional error message */
		message?: string | null;

		/** Current page of the response */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results */
		total_count?: number | null;
	}

	/** List of editorial items */
	export interface EditorialContentDataListFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Current page of the response */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialContentDataListFormGroup() {
		return new FormGroup<EditorialContentDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Cover image for editorial livefeed */
	export interface EditorialCoverItem {
		height?: number | null;

		/** Required */
		id: string;

		/** Required */
		url: string;
		width?: number | null;
	}

	/** Cover image for editorial livefeed */
	export interface EditorialCoverItemFormProperties {
		height: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateEditorialCoverItemFormGroup() {
		return new FormGroup<EditorialCoverItemFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of editorial categories */
	export interface EditorialImageCategoryResults {
		data?: Array<EditorialCategory>;
	}

	/** List of editorial categories */
	export interface EditorialImageCategoryResultsFormProperties {
	}
	export function CreateEditorialImageCategoryResultsFormGroup() {
		return new FormGroup<EditorialImageCategoryResultsFormProperties>({
		});

	}


	/** List of editorial items */
	export interface EditorialImageContentDataList {

		/** Editorial items */
		data?: Array<EditorialContent>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Optional error message */
		message?: string | null;

		/** Current page of the response */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results */
		total_count?: number | null;
	}

	/** List of editorial items */
	export interface EditorialImageContentDataListFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Current page of the response */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialImageContentDataListFormGroup() {
		return new FormGroup<EditorialImageContentDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata about editorial livefeed */
	export interface EditorialImageLivefeed {

		/** Cover image for editorial livefeed */
		cover_item?: EditorialCoverItem;

		/** When the livefeed was initially created */
		created_time?: Date | null;

		/**
		 * Livefeed ID
		 * Required
		 */
		id: string;

		/**
		 * Name of the livefeed
		 * Required
		 */
		name: string;

		/**
		 * Total count of items in the livefeed
		 * Required
		 */
		total_item_count: number;
	}

	/** Metadata about editorial livefeed */
	export interface EditorialImageLivefeedFormProperties {

		/** When the livefeed was initially created */
		created_time: FormControl<Date | null | undefined>,

		/**
		 * Livefeed ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the livefeed
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Total count of items in the livefeed
		 * Required
		 */
		total_item_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialImageLivefeedFormGroup() {
		return new FormGroup<EditorialImageLivefeedFormProperties>({
			created_time: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_item_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of editorial livefeeds */
	export interface EditorialImageLivefeedList {

		/**
		 * Editorial livefeeds
		 * Required
		 */
		data: Array<EditorialLivefeed>;

		/** Optional error message */
		message?: string | null;

		/** Current page of the response */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: number;
	}

	/** List of editorial livefeeds */
	export interface EditorialImageLivefeedListFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Current page of the response */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialImageLivefeedListFormGroup() {
		return new FormGroup<EditorialImageLivefeedListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata about editorial livefeed */
	export interface EditorialLivefeed {

		/** Cover image for editorial livefeed */
		cover_item?: EditorialCoverItem;

		/** When the livefeed was initially created */
		created_time?: Date | null;

		/**
		 * Livefeed ID
		 * Required
		 */
		id: string;

		/**
		 * Name of the livefeed
		 * Required
		 */
		name: string;

		/**
		 * Total count of items in the livefeed
		 * Required
		 */
		total_item_count: number;
	}

	/** Metadata about editorial livefeed */
	export interface EditorialLivefeedFormProperties {

		/** When the livefeed was initially created */
		created_time: FormControl<Date | null | undefined>,

		/**
		 * Livefeed ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the livefeed
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Total count of items in the livefeed
		 * Required
		 */
		total_item_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialLivefeedFormGroup() {
		return new FormGroup<EditorialLivefeedFormProperties>({
			created_time: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_item_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of editorial livefeeds */
	export interface EditorialLivefeedList {

		/**
		 * Editorial livefeeds
		 * Required
		 */
		data: Array<EditorialLivefeed>;

		/** Optional error message */
		message?: string | null;

		/** Current page of the response */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: number;
	}

	/** List of editorial livefeeds */
	export interface EditorialLivefeedListFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Current page of the response */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialLivefeedListFormGroup() {
		return new FormGroup<EditorialLivefeedListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Editorial search results */
	export interface EditorialSearchResults {

		/**
		 * Editorial items
		 * Required
		 */
		data: Array<EditorialContent>;

		/** Optional error message */
		message?: string | null;

		/** Cursor value that represents the next page of results */
		next?: string | null;

		/** Current page of the response */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Cursor value that represents the previous page of results */
		prev?: string | null;

		/** Unique identifier for the search request */
		search_id?: string | null;

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: number;
	}

	/** Editorial search results */
	export interface EditorialSearchResultsFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Cursor value that represents the next page of results */
		next: FormControl<string | null | undefined>,

		/** Current page of the response */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Cursor value that represents the previous page of results */
		prev: FormControl<string | null | undefined>,

		/** Unique identifier for the search request */
		search_id: FormControl<string | null | undefined>,

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialSearchResultsFormGroup() {
		return new FormGroup<EditorialSearchResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata about updated editorial content */
	export interface EditorialUpdatedContent {
		aspect?: number | null;

		/** Asset information, including size and thumbnail URLs */
		assets?: EditorialAssets;
		byline?: string | null;
		caption?: string | null;

		/** List of categories */
		categories?: Array<EditorialCategory>;
		commercial_status?: any;
		created_time?: Date | null;
		date_taken?: Date | null;
		description?: string | null;

		/** Required */
		id: string;
		keywords?: Array<string>;
		rights?: EditorialUpdatedContentRights;
		special_instructions?: string | null;
		supplier_code?: string | null;
		title?: string | null;
		updated_time?: Date | null;
		updates?: Array<string>;
	}

	/** Metadata about updated editorial content */
	export interface EditorialUpdatedContentFormProperties {
		aspect: FormControl<number | null | undefined>,
		byline: FormControl<string | null | undefined>,
		caption: FormControl<string | null | undefined>,
		commercial_status: FormControl<any | null | undefined>,
		created_time: FormControl<Date | null | undefined>,
		date_taken: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		special_instructions: FormControl<string | null | undefined>,
		supplier_code: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateEditorialUpdatedContentFormGroup() {
		return new FormGroup<EditorialUpdatedContentFormProperties>({
			aspect: new FormControl<number | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			commercial_status: new FormControl<any | null | undefined>(undefined),
			created_time: new FormControl<Date | null | undefined>(undefined),
			date_taken: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			special_instructions: new FormControl<string | null | undefined>(undefined),
			supplier_code: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EditorialUpdatedContentRights {
		countries?: string | null;
	}
	export interface EditorialUpdatedContentRightsFormProperties {
		countries: FormControl<string | null | undefined>,
	}
	export function CreateEditorialUpdatedContentRightsFormGroup() {
		return new FormGroup<EditorialUpdatedContentRightsFormProperties>({
			countries: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Editorial updated results */
	export interface EditorialUpdatedResults {

		/**
		 * Editorial updated items
		 * Required
		 */
		data: Array<EditorialUpdatedContent>;

		/** Optional error message */
		message?: string | null;

		/** Cursor value that represents the next page of results */
		next?: string | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Cursor value that represents the previous page of results */
		prev?: string | null;
	}

	/** Editorial updated results */
	export interface EditorialUpdatedResultsFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Cursor value that represents the next page of results */
		next: FormControl<string | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Cursor value that represents the previous page of results */
		prev: FormControl<string | null | undefined>,
	}
	export function CreateEditorialUpdatedResultsFormGroup() {
		return new FormGroup<EditorialUpdatedResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Asset information, including size and thumbnail URLs */
	export interface EditorialVideoAssets {

		/** Video asset information */
		original?: VideoSizeDetails;

		/** Video preview information */
		preview_mp4?: VideoPreviewUrl;

		/** Video preview information */
		preview_webm?: VideoPreviewUrl;

		/** Video preview information */
		thumb_jpg?: VideoPreviewUrl;
	}

	/** Asset information, including size and thumbnail URLs */
	export interface EditorialVideoAssetsFormProperties {
	}
	export function CreateEditorialVideoAssetsFormGroup() {
		return new FormGroup<EditorialVideoAssetsFormProperties>({
		});

	}


	/** Video asset information */
	export interface VideoSizeDetails {

		/** Display name of this video size */
		display_name?: string | null;

		/** File size (in bytes) of this video size */
		file_size?: number | null;

		/** Format of this video size */
		format?: string | null;

		/** Frames per second of this video size */
		fps?: number | null;

		/** Height of this video size */
		height?: number | null;

		/** Whether or not videos can be licensed in this video size */
		is_licensable?: boolean | null;

		/** Width of this video size */
		width?: number | null;
	}

	/** Video asset information */
	export interface VideoSizeDetailsFormProperties {

		/** Display name of this video size */
		display_name: FormControl<string | null | undefined>,

		/** File size (in bytes) of this video size */
		file_size: FormControl<number | null | undefined>,

		/** Format of this video size */
		format: FormControl<string | null | undefined>,

		/** Frames per second of this video size */
		fps: FormControl<number | null | undefined>,

		/** Height of this video size */
		height: FormControl<number | null | undefined>,

		/** Whether or not videos can be licensed in this video size */
		is_licensable: FormControl<boolean | null | undefined>,

		/** Width of this video size */
		width: FormControl<number | null | undefined>,
	}
	export function CreateVideoSizeDetailsFormGroup() {
		return new FormGroup<VideoSizeDetailsFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			file_size: new FormControl<number | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			fps: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			is_licensable: new FormControl<boolean | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video preview information */
	export interface VideoPreviewUrl {

		/**
		 * Direct URL to the image
		 * Required
		 */
		url: string;
	}

	/** Video preview information */
	export interface VideoPreviewUrlFormProperties {

		/**
		 * Direct URL to the image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVideoPreviewUrlFormGroup() {
		return new FormGroup<VideoPreviewUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of editorial video categories */
	export interface EditorialVideoCategoryResults {
		data?: Array<EditorialCategory>;
	}

	/** List of editorial video categories */
	export interface EditorialVideoCategoryResultsFormProperties {
	}
	export function CreateEditorialVideoCategoryResultsFormGroup() {
		return new FormGroup<EditorialVideoCategoryResultsFormProperties>({
		});

	}


	/** Metadata about editorial content */
	export interface EditorialVideoContent {
		aspect?: number | null;

		/** Asset information, including size and thumbnail URLs */
		assets?: EditorialVideoAssets;
		byline?: string | null;
		caption?: string | null;

		/** List of categories */
		categories?: Array<EditorialCategory>;
		date_taken?: Date | null;
		description?: string | null;

		/** Required */
		id: string;
		keywords?: Array<string>;
		title?: string | null;
	}

	/** Metadata about editorial content */
	export interface EditorialVideoContentFormProperties {
		aspect: FormControl<number | null | undefined>,
		byline: FormControl<string | null | undefined>,
		caption: FormControl<string | null | undefined>,
		date_taken: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateEditorialVideoContentFormGroup() {
		return new FormGroup<EditorialVideoContentFormProperties>({
			aspect: new FormControl<number | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			date_taken: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Editorial search results */
	export interface EditorialVideoSearchResults {

		/**
		 * Editorial items
		 * Required
		 */
		data: Array<EditorialVideoContent>;

		/** Optional error message */
		message?: string | null;

		/** Cursor value that represents the next page of results */
		next?: string | null;

		/** Current page of the response */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Cursor value that represents the previous page of results */
		prev?: string | null;

		/** Unique identifier for the search request */
		search_id?: string | null;

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: number;
	}

	/** Editorial search results */
	export interface EditorialVideoSearchResultsFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Cursor value that represents the next page of results */
		next: FormControl<string | null | undefined>,

		/** Current page of the response */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Cursor value that represents the previous page of results */
		prev: FormControl<string | null | undefined>,

		/** Unique identifier for the search request */
		search_id: FormControl<string | null | undefined>,

		/**
		 * Total count of all results
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialVideoSearchResultsFormGroup() {
		return new FormGroup<EditorialVideoSearchResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata about a featured collection */
	export interface FeaturedCollection {

		/** Featured collection cover item metadata */
		cover_item?: FeaturedCollectionCoverItem;

		/** Date that the collection was created */
		created_time?: Date | null;

		/** Featured collection cover item metadata */
		hero_item?: FeaturedCollectionCoverItem;

		/**
		 * Collection ID
		 * Required
		 */
		id: string;

		/** Date that an item in the collection was last added or removed */
		items_updated_time?: Date | null;

		/**
		 * Name of the collection
		 * Required
		 */
		name: string;

		/** Unique share url for the collection */
		share_url?: string | null;

		/**
		 * Total number of items in the collection
		 * Required
		 */
		total_item_count: number;

		/** Date that the collection was last modified */
		updated_time?: Date | null;
	}

	/** Metadata about a featured collection */
	export interface FeaturedCollectionFormProperties {

		/** Date that the collection was created */
		created_time: FormControl<Date | null | undefined>,

		/**
		 * Collection ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Date that an item in the collection was last added or removed */
		items_updated_time: FormControl<Date | null | undefined>,

		/**
		 * Name of the collection
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Unique share url for the collection */
		share_url: FormControl<string | null | undefined>,

		/**
		 * Total number of items in the collection
		 * Required
		 */
		total_item_count: FormControl<number | null | undefined>,

		/** Date that the collection was last modified */
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateFeaturedCollectionFormGroup() {
		return new FormGroup<FeaturedCollectionFormProperties>({
			created_time: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			items_updated_time: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			share_url: new FormControl<string | null | undefined>(undefined),
			total_item_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Featured collection cover item metadata */
	export interface FeaturedCollectionCoverItem {

		/**
		 * URL of the collection cover item
		 * Required
		 */
		url: string;
	}

	/** Featured collection cover item metadata */
	export interface FeaturedCollectionCoverItemFormProperties {

		/**
		 * URL of the collection cover item
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFeaturedCollectionCoverItemFormGroup() {
		return new FormGroup<FeaturedCollectionCoverItemFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of featured collections */
	export interface FeaturedCollectionDataList {

		/** Featured collections */
		data?: Array<FeaturedCollection>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of featured collections */
	export interface FeaturedCollectionDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateFeaturedCollectionDataListFormGroup() {
		return new FormGroup<FeaturedCollectionDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of audio genres */
	export interface GenreList {

		/**
		 * List of genres
		 * Required
		 */
		data: Array<string>;
	}

	/** List of audio genres */
	export interface GenreListFormProperties {
	}
	export function CreateGenreListFormGroup() {
		return new FormGroup<GenreListFormProperties>({
		});

	}


	/** A valid ISO 3166-1 Alpha-2 or ISO 3166-1 Alpha-3 code. */
	export interface ISOCountryCode {
	}

	/** A valid ISO 3166-1 Alpha-2 or ISO 3166-1 Alpha-3 code. */
	export interface ISOCountryCodeFormProperties {
	}
	export function CreateISOCountryCodeFormGroup() {
		return new FormGroup<ISOCountryCodeFormProperties>({
		});

	}


	/** Request to upload an image */
	export interface ImageCreateRequest {

		/**
		 * A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
		 * Required
		 */
		base64_image: string;
	}

	/** Request to upload an image */
	export interface ImageCreateRequestFormProperties {

		/**
		 * A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
		 * Required
		 */
		base64_image: FormControl<string | null | undefined>,
	}
	export function CreateImageCreateRequestFormGroup() {
		return new FormGroup<ImageCreateRequestFormProperties>({
			base64_image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Image upload information */
	export interface ImageCreateResponse {

		/** Required */
		id: string;
	}

	/** Image upload information */
	export interface ImageCreateResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateImageCreateResponseFormGroup() {
		return new FormGroup<ImageCreateResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of images */
	export interface ImageDataList {

		/** Images */
		data?: Array<Image>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of images */
	export interface ImageDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateImageDataListFormGroup() {
		return new FormGroup<ImageDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about an musical instrument */
	export interface Instrument {

		/** The id of the instrument */
		id?: string | null;

		/** Name of the instrument */
		name?: string | null;

		/** Preview of the instrument */
		previews?: Array<Preview>;

		/** List of tags */
		tags?: Array<string>;
	}

	/** Information about an musical instrument */
	export interface InstrumentFormProperties {

		/** The id of the instrument */
		id: FormControl<string | null | undefined>,

		/** Name of the instrument */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInstrumentFormGroup() {
		return new FormGroup<InstrumentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of instruments */
	export interface InstrumentList {

		/**
		 * List of instruments
		 * Required
		 */
		data: Array<string>;
	}

	/** List of instruments */
	export interface InstrumentListFormProperties {
	}
	export function CreateInstrumentListFormGroup() {
		return new FormGroup<InstrumentListFormProperties>({
		});

	}


	/** Image search results */
	export interface InstrumentsListResult {

		/** List of instrumnets */
		data?: Array<Instrument>;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;
	}

	/** Image search results */
	export interface InstrumentsListResultFormProperties {

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,
	}
	export function CreateInstrumentsListResultFormGroup() {
		return new FormGroup<InstrumentsListResultFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of keywords */
	export interface KeywordDataList {

		/** Keywords */
		data?: Array<string>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;
	}

	/** List of keywords */
	export interface KeywordDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,
	}
	export function CreateKeywordDataListFormGroup() {
		return new FormGroup<KeywordDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Language code */
	export enum Language { ar = 0, bg = 1, bn = 2, cs = 3, da = 4, de = 5, el = 6, en = 7, es = 8, fi = 9, fr = 10, gu = 11, he = 12, hi = 13, hr = 14, hu = 15, id = 16, it = 17, ja = 18, kn = 19, ko = 20, ml = 21, mr = 22, nb = 23, nl = 24, or = 25, pl = 26, pt = 27, ro = 28, ru = 29, sk = 30, sl = 31, sv = 32, ta = 33, te = 34, th = 35, tr = 36, uk = 37, ur = 38, vi = 39, zh = 40, 'zh-Hant' = 41 }


	/** An audio track in a licensing request */
	export interface LicenseAudio {

		/**
		 * ID of the track being licensed
		 * Required
		 */
		audio_id: string;

		/** Type of license */
		license?: LicenseAudioLicense | null;

		/** ID of the search that led to this licensing event */
		search_id?: string | null;
	}

	/** An audio track in a licensing request */
	export interface LicenseAudioFormProperties {

		/**
		 * ID of the track being licensed
		 * Required
		 */
		audio_id: FormControl<string | null | undefined>,

		/** Type of license */
		license: FormControl<LicenseAudioLicense | null | undefined>,

		/** ID of the search that led to this licensing event */
		search_id: FormControl<string | null | undefined>,
	}
	export function CreateLicenseAudioFormGroup() {
		return new FormGroup<LicenseAudioFormProperties>({
			audio_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			license: new FormControl<LicenseAudioLicense | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LicenseAudioLicense { audio_platform = 0, premier_music_basic = 1, premier_music_extended = 2, premier_music_pro = 3, premier_music_comp = 4, asset_all_music = 5 }


	/** Audio license request data */
	export interface LicenseAudioRequest {

		/**
		 * List of audio tracks to license
		 * Required
		 * Maximum items: 50
		 */
		audio: Array<LicenseAudio>;
	}

	/** Audio license request data */
	export interface LicenseAudioRequestFormProperties {
	}
	export function CreateLicenseAudioRequestFormGroup() {
		return new FormGroup<LicenseAudioRequestFormProperties>({
		});

	}


	/** The response to a licensing request for an audio track */
	export interface LicenseAudioResult {

		/** Number of credits that this licensing event used */
		allotment_charge?: number | null;

		/**
		 * ID of the track that was licensed
		 * Required
		 */
		audio_id: string;

		/** Audio License URL object */
		download?: AudioUrl;

		/** Error information if applicable */
		error?: string | null;

		/** ID of the license event */
		license_id?: string | null;
	}

	/** The response to a licensing request for an audio track */
	export interface LicenseAudioResultFormProperties {

		/** Number of credits that this licensing event used */
		allotment_charge: FormControl<number | null | undefined>,

		/**
		 * ID of the track that was licensed
		 * Required
		 */
		audio_id: FormControl<string | null | undefined>,

		/** Error information if applicable */
		error: FormControl<string | null | undefined>,

		/** ID of the license event */
		license_id: FormControl<string | null | undefined>,
	}
	export function CreateLicenseAudioResultFormGroup() {
		return new FormGroup<LicenseAudioResultFormProperties>({
			allotment_charge: new FormControl<number | null | undefined>(undefined),
			audio_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			license_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of audio license results */
	export interface LicenseAudioResultDataList {

		/** License results */
		data?: Array<LicenseAudioResult>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of audio license results */
	export interface LicenseAudioResultDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateLicenseAudioResultDataListFormGroup() {
		return new FormGroup<LicenseAudioResultDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Individual editorial content to license */
	export interface LicenseEditorialContent {

		/**
		 * Editorial ID
		 * Required
		 */
		editorial_id: string;

		/**
		 * License agreement to use for licensing
		 * Required
		 */
		license: string;

		/** Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder */
		metadata?: LicenseRequestMetadata;

		/** Asset size to download */
		size?: LicenseEditorialContentSize | null;
	}

	/** Individual editorial content to license */
	export interface LicenseEditorialContentFormProperties {

		/**
		 * Editorial ID
		 * Required
		 */
		editorial_id: FormControl<string | null | undefined>,

		/**
		 * License agreement to use for licensing
		 * Required
		 */
		license: FormControl<string | null | undefined>,

		/** Asset size to download */
		size: FormControl<LicenseEditorialContentSize | null | undefined>,
	}
	export function CreateLicenseEditorialContentFormGroup() {
		return new FormGroup<LicenseEditorialContentFormProperties>({
			editorial_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			license: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<LicenseEditorialContentSize | null | undefined>(undefined),
		});

	}


	/** Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder */
	export interface LicenseRequestMetadata {
	}

	/** Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder */
	export interface LicenseRequestMetadataFormProperties {
	}
	export function CreateLicenseRequestMetadataFormGroup() {
		return new FormGroup<LicenseRequestMetadataFormProperties>({
		});

	}

	export enum LicenseEditorialContentSize { small = 0, medium = 1, original = 2 }


	/** License editorial content request */
	export interface LicenseEditorialContentRequest {

		/**
		 * A valid ISO 3166-1 Alpha-2 or ISO 3166-1 Alpha-3 code.
		 * Required
		 */
		country: ISOCountryCode;

		/**
		 * Editorial content to license
		 * Required
		 */
		editorial: Array<LicenseEditorialContent>;
	}

	/** License editorial content request */
	export interface LicenseEditorialContentRequestFormProperties {
	}
	export function CreateLicenseEditorialContentRequestFormGroup() {
		return new FormGroup<LicenseEditorialContentRequestFormProperties>({
		});

	}


	/** The response to a licensing request for editorial content */
	export interface LicenseEditorialContentResult {

		/** For pre-paid plans, how many credits were used for the item license */
		allotment_charge?: number | null;

		/** URL object */
		download?: Url;

		/**
		 * Editorial ID
		 * Required
		 */
		editorial_id: string;
		error?: string | null;
	}

	/** The response to a licensing request for editorial content */
	export interface LicenseEditorialContentResultFormProperties {

		/** For pre-paid plans, how many credits were used for the item license */
		allotment_charge: FormControl<number | null | undefined>,

		/**
		 * Editorial ID
		 * Required
		 */
		editorial_id: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateLicenseEditorialContentResultFormGroup() {
		return new FormGroup<LicenseEditorialContentResultFormProperties>({
			allotment_charge: new FormControl<number | null | undefined>(undefined),
			editorial_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL object */
	export interface Url {

		/**
		 * URL that can be used to download the unwatermarked, licensed asset
		 * Required
		 */
		url: string;
	}

	/** URL object */
	export interface UrlFormProperties {

		/**
		 * URL that can be used to download the unwatermarked, licensed asset
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlFormGroup() {
		return new FormGroup<UrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of editorial license results */
	export interface LicenseEditorialContentResults {

		/** License results */
		data?: Array<LicenseEditorialContentResult>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Optional error message */
		message?: string | null;

		/** Current page of the response */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results */
		total_count?: number | null;
	}

	/** List of editorial license results */
	export interface LicenseEditorialContentResultsFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Current page of the response */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateLicenseEditorialContentResultsFormGroup() {
		return new FormGroup<LicenseEditorialContentResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Individual editorial video content to license */
	export interface LicenseEditorialVideoContent {

		/**
		 * Editorial ID
		 * Required
		 */
		editorial_id: string;

		/**
		 * License agreement to use for licensing
		 * Required
		 */
		license: LicenseEditorialVideoContentLicense;

		/** Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder */
		metadata?: LicenseRequestMetadata;

		/** Asset size to download */
		size?: LicenseEditorialVideoContentSize | null;
	}

	/** Individual editorial video content to license */
	export interface LicenseEditorialVideoContentFormProperties {

		/**
		 * Editorial ID
		 * Required
		 */
		editorial_id: FormControl<string | null | undefined>,

		/**
		 * License agreement to use for licensing
		 * Required
		 */
		license: FormControl<LicenseEditorialVideoContentLicense | null | undefined>,

		/** Asset size to download */
		size: FormControl<LicenseEditorialVideoContentSize | null | undefined>,
	}
	export function CreateLicenseEditorialVideoContentFormGroup() {
		return new FormGroup<LicenseEditorialVideoContentFormProperties>({
			editorial_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			license: new FormControl<LicenseEditorialVideoContentLicense | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<LicenseEditorialVideoContentSize | null | undefined>(undefined),
		});

	}

	export enum LicenseEditorialVideoContentLicense { premier_editorial_video_digital_only = 0, premier_editorial_video_all_media = 1, premier_editorial_video_all_media_single_territory = 2, premier_editorial_video_comp = 3 }

	export enum LicenseEditorialVideoContentSize { original = 0 }


	/** License editorial video content request */
	export interface LicenseEditorialVideoContentRequest {

		/**
		 * A valid ISO 3166-1 Alpha-2 or ISO 3166-1 Alpha-3 code.
		 * Required
		 */
		country: ISOCountryCode;

		/**
		 * Editorial content to license
		 * Required
		 */
		editorial: Array<LicenseEditorialVideoContent>;
	}

	/** License editorial video content request */
	export interface LicenseEditorialVideoContentRequestFormProperties {
	}
	export function CreateLicenseEditorialVideoContentRequestFormGroup() {
		return new FormGroup<LicenseEditorialVideoContentRequestFormProperties>({
		});

	}


	/** Description of a license */
	export interface LicenseFormat {

		/** Description of the license */
		description?: string | null;

		/** Format or extension of the media, such as mpeg for videos or jpeg for images */
		format?: string | null;

		/** Media type of the license */
		media_type?: LicenseFormatMedia_type | null;

		/** Width of the media, in pixels, allowed by this license */
		min_resolution?: number | null;

		/** Keyword that details the size of the media, such as hd or sd for video, huge or vector for images */
		size?: string | null;
	}

	/** Description of a license */
	export interface LicenseFormatFormProperties {

		/** Description of the license */
		description: FormControl<string | null | undefined>,

		/** Format or extension of the media, such as mpeg for videos or jpeg for images */
		format: FormControl<string | null | undefined>,

		/** Media type of the license */
		media_type: FormControl<LicenseFormatMedia_type | null | undefined>,

		/** Width of the media, in pixels, allowed by this license */
		min_resolution: FormControl<number | null | undefined>,

		/** Keyword that details the size of the media, such as hd or sd for video, huge or vector for images */
		size: FormControl<string | null | undefined>,
	}
	export function CreateLicenseFormatFormGroup() {
		return new FormGroup<LicenseFormatFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			media_type: new FormControl<LicenseFormatMedia_type | null | undefined>(undefined),
			min_resolution: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LicenseFormatMedia_type { image = 0, video = 1, audio = 2, editorial = 3 }


	/** Data required to license an image */
	export interface LicenseImage {

		/** Cookie object */
		auth_cookie?: Cookie;

		/** A custom height or a custom width to resize the image to, but not both (experimental) */
		custom_dimensions?: CustomSizeDimensions;

		/** Set to true to acknowledge the editorial agreement */
		editorial_acknowledgement?: boolean | null;

		/** (Deprecated) Image format to download */
		format?: LicenseImageFormat | null;

		/**
		 * Image ID
		 * Required
		 */
		image_id: string;

		/** Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder */
		metadata?: LicenseRequestMetadata;

		/** For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34 */
		price?: number | null;

		/** ID of the search that led to this licensing transaction */
		search_id?: string | null;

		/** (Deprecated) */
		show_modal?: boolean | null;

		/** Image size to download */
		size?: LicenseImageSize | null;

		/** ID of the subscription to use for the download. */
		subscription_id?: string | null;

		/** (Deprecated) */
		verification_code?: string | null;
	}

	/** Data required to license an image */
	export interface LicenseImageFormProperties {

		/** Set to true to acknowledge the editorial agreement */
		editorial_acknowledgement: FormControl<boolean | null | undefined>,

		/** (Deprecated) Image format to download */
		format: FormControl<LicenseImageFormat | null | undefined>,

		/**
		 * Image ID
		 * Required
		 */
		image_id: FormControl<string | null | undefined>,

		/** For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34 */
		price: FormControl<number | null | undefined>,

		/** ID of the search that led to this licensing transaction */
		search_id: FormControl<string | null | undefined>,

		/** (Deprecated) */
		show_modal: FormControl<boolean | null | undefined>,

		/** Image size to download */
		size: FormControl<LicenseImageSize | null | undefined>,

		/** ID of the subscription to use for the download. */
		subscription_id: FormControl<string | null | undefined>,

		/** (Deprecated) */
		verification_code: FormControl<string | null | undefined>,
	}
	export function CreateLicenseImageFormGroup() {
		return new FormGroup<LicenseImageFormProperties>({
			editorial_acknowledgement: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<LicenseImageFormat | null | undefined>(undefined),
			image_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined),
			show_modal: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<LicenseImageSize | null | undefined>(undefined),
			subscription_id: new FormControl<string | null | undefined>(undefined),
			verification_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LicenseImageFormat { jpg = 0 }

	export enum LicenseImageSize { small = 0, medium = 1, huge = 2, custom = 3 }


	/** Image license request data */
	export interface LicenseImageRequest {

		/**
		 * Images to create licenses for
		 * Required
		 * Maximum items: 50
		 */
		images: Array<string>;
	}

	/** Image license request data */
	export interface LicenseImageRequestFormProperties {
	}
	export function CreateLicenseImageRequestFormGroup() {
		return new FormGroup<LicenseImageRequestFormProperties>({
		});

	}


	/** The response to a licensing request for an image */
	export interface LicenseImageResult {

		/** Number of credits that this licensing event used */
		allotment_charge?: number | null;

		/** URL object */
		download?: Url;

		/** Error message, appears only if there was an error */
		error?: string | null;

		/**
		 * Image ID that was licensed
		 * Required
		 */
		image_id: string;

		/** ID of the license event */
		license_id?: string | null;

		/** Price */
		price?: Price;
	}

	/** The response to a licensing request for an image */
	export interface LicenseImageResultFormProperties {

		/** Number of credits that this licensing event used */
		allotment_charge: FormControl<number | null | undefined>,

		/** Error message, appears only if there was an error */
		error: FormControl<string | null | undefined>,

		/**
		 * Image ID that was licensed
		 * Required
		 */
		image_id: FormControl<string | null | undefined>,

		/** ID of the license event */
		license_id: FormControl<string | null | undefined>,
	}
	export function CreateLicenseImageResultFormGroup() {
		return new FormGroup<LicenseImageResultFormProperties>({
			allotment_charge: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			image_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			license_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Price */
	export interface Price {

		/** Floating-point amount of the calculated rev-share price in the currency local_currency */
		local_amount?: number | null;

		/** Currency of the rev-share price that was calculated */
		local_currency?: string | null;
	}

	/** Price */
	export interface PriceFormProperties {

		/** Floating-point amount of the calculated rev-share price in the currency local_currency */
		local_amount: FormControl<number | null | undefined>,

		/** Currency of the rev-share price that was calculated */
		local_currency: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			local_amount: new FormControl<number | null | undefined>(undefined),
			local_currency: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of information about licensed images */
	export interface LicenseImageResultDataList {

		/** License results */
		data?: Array<LicenseImageResult>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of information about licensed images */
	export interface LicenseImageResultDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateLicenseImageResultDataListFormGroup() {
		return new FormGroup<LicenseImageResultDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data required to license an image */
	export interface LicenseImageVector {

		/** Cookie object */
		auth_cookie?: Cookie;

		/** Set to true to acknowledge the editorial agreement */
		editorial_acknowledgement?: boolean | null;

		/** (Deprecated) Image format to download */
		format?: LicenseImageVectorFormat | null;

		/**
		 * Image ID
		 * Required
		 */
		image_id: string;

		/** Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder */
		metadata?: LicenseRequestMetadata;

		/** For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34 */
		price?: number | null;

		/** ID of the search that led to this licensing transaction */
		search_id?: string | null;

		/** (Deprecated) */
		show_modal?: boolean | null;

		/** Image size to download */
		size?: LicenseImageVectorSize | null;

		/** ID of the subscription to use for the download. */
		subscription_id?: string | null;

		/** (Deprecated) */
		verification_code?: string | null;
	}

	/** Data required to license an image */
	export interface LicenseImageVectorFormProperties {

		/** Set to true to acknowledge the editorial agreement */
		editorial_acknowledgement: FormControl<boolean | null | undefined>,

		/** (Deprecated) Image format to download */
		format: FormControl<LicenseImageVectorFormat | null | undefined>,

		/**
		 * Image ID
		 * Required
		 */
		image_id: FormControl<string | null | undefined>,

		/** For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34 */
		price: FormControl<number | null | undefined>,

		/** ID of the search that led to this licensing transaction */
		search_id: FormControl<string | null | undefined>,

		/** (Deprecated) */
		show_modal: FormControl<boolean | null | undefined>,

		/** Image size to download */
		size: FormControl<LicenseImageVectorSize | null | undefined>,

		/** ID of the subscription to use for the download. */
		subscription_id: FormControl<string | null | undefined>,

		/** (Deprecated) */
		verification_code: FormControl<string | null | undefined>,
	}
	export function CreateLicenseImageVectorFormGroup() {
		return new FormGroup<LicenseImageVectorFormProperties>({
			editorial_acknowledgement: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<LicenseImageVectorFormat | null | undefined>(undefined),
			image_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined),
			show_modal: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<LicenseImageVectorSize | null | undefined>(undefined),
			subscription_id: new FormControl<string | null | undefined>(undefined),
			verification_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LicenseImageVectorFormat { eps = 0 }

	export enum LicenseImageVectorSize { vector = 0 }

	export interface LicenseSFX {
		audio_layout?: LicenseSFXAudio_layout | null;
		format?: LicenseSFXFormat | null;

		/** ID of the search that led to this licensing event */
		search_id?: string | null;

		/**
		 * ID of the sounds effect being licensed
		 * Required
		 */
		sfx_id: string;

		/**
		 * ID of the subscription to use for the download.
		 * Required
		 */
		subscription_id: string;
	}
	export interface LicenseSFXFormProperties {
		audio_layout: FormControl<LicenseSFXAudio_layout | null | undefined>,
		format: FormControl<LicenseSFXFormat | null | undefined>,

		/** ID of the search that led to this licensing event */
		search_id: FormControl<string | null | undefined>,

		/**
		 * ID of the sounds effect being licensed
		 * Required
		 */
		sfx_id: FormControl<string | null | undefined>,

		/**
		 * ID of the subscription to use for the download.
		 * Required
		 */
		subscription_id: FormControl<string | null | undefined>,
	}
	export function CreateLicenseSFXFormGroup() {
		return new FormGroup<LicenseSFXFormProperties>({
			audio_layout: new FormControl<LicenseSFXAudio_layout | null | undefined>(undefined),
			format: new FormControl<LicenseSFXFormat | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined),
			sfx_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscription_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LicenseSFXAudio_layout { ambisonic = 0, _5_1 = 1, stereo = 2 }

	export enum LicenseSFXFormat { wav = 0, mp3 = 1 }


	/** License sounds effect asset request body */
	export interface LicenseSFXRequest {

		/**
		 * Sound effects to license for
		 * Required
		 */
		sound_effects: Array<LicenseSFX>;
	}

	/** License sounds effect asset request body */
	export interface LicenseSFXRequestFormProperties {
	}
	export function CreateLicenseSFXRequestFormGroup() {
		return new FormGroup<LicenseSFXRequestFormProperties>({
		});

	}


	/** The response to a licensing request for an sound effects */
	export interface LicenseSFXResult {

		/** Number of credits that this licensing event used */
		allotment_charge?: number | null;

		/** URL object */
		download?: Url;

		/** Error message, appears only if there was an error */
		error?: string | null;

		/** ID of the license event */
		license_id?: string | null;

		/**
		 * Sound effects ID that was licensed
		 * Required
		 */
		sfx_id: string;
	}

	/** The response to a licensing request for an sound effects */
	export interface LicenseSFXResultFormProperties {

		/** Number of credits that this licensing event used */
		allotment_charge: FormControl<number | null | undefined>,

		/** Error message, appears only if there was an error */
		error: FormControl<string | null | undefined>,

		/** ID of the license event */
		license_id: FormControl<string | null | undefined>,

		/**
		 * Sound effects ID that was licensed
		 * Required
		 */
		sfx_id: FormControl<string | null | undefined>,
	}
	export function CreateLicenseSFXResultFormGroup() {
		return new FormGroup<LicenseSFXResultFormProperties>({
			allotment_charge: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			license_id: new FormControl<string | null | undefined>(undefined),
			sfx_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of information about licensed sound effects */
	export interface LicenseSFXResultDataList {

		/** Sound effects license results */
		data?: Array<LicenseSFXResult>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;
	}

	/** List of information about licensed sound effects */
	export interface LicenseSFXResultDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLicenseSFXResultDataListFormGroup() {
		return new FormGroup<LicenseSFXResultDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data required to license a video */
	export interface LicenseVideo {

		/** Cookie object */
		auth_cookie?: Cookie;

		/** Whether or not this item is editorial content */
		editorial_acknowledgement?: boolean | null;

		/** Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder */
		metadata?: LicenseRequestMetadata;

		/** Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners */
		price?: number | null;

		/** ID of the search that led to this licensing event */
		search_id?: string | null;

		/** (Deprecated) */
		show_modal?: boolean | null;

		/** Size of the video being licensed */
		size?: LicenseVideoSize | null;

		/** ID of the subscription used for this license */
		subscription_id?: string | null;

		/**
		 * ID of the video being licensed
		 * Required
		 */
		video_id: string;
	}

	/** Data required to license a video */
	export interface LicenseVideoFormProperties {

		/** Whether or not this item is editorial content */
		editorial_acknowledgement: FormControl<boolean | null | undefined>,

		/** Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners */
		price: FormControl<number | null | undefined>,

		/** ID of the search that led to this licensing event */
		search_id: FormControl<string | null | undefined>,

		/** (Deprecated) */
		show_modal: FormControl<boolean | null | undefined>,

		/** Size of the video being licensed */
		size: FormControl<LicenseVideoSize | null | undefined>,

		/** ID of the subscription used for this license */
		subscription_id: FormControl<string | null | undefined>,

		/**
		 * ID of the video being licensed
		 * Required
		 */
		video_id: FormControl<string | null | undefined>,
	}
	export function CreateLicenseVideoFormGroup() {
		return new FormGroup<LicenseVideoFormProperties>({
			editorial_acknowledgement: new FormControl<boolean | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined),
			show_modal: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<LicenseVideoSize | null | undefined>(undefined),
			subscription_id: new FormControl<string | null | undefined>(undefined),
			video_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LicenseVideoSize { web = 0, sd = 1, hd = 2, '4k' = 3 }


	/** List of videos to license */
	export interface LicenseVideoRequest {

		/**
		 * Videos to license
		 * Required
		 * Maximum items: 50
		 */
		videos: Array<LicenseVideo>;
	}

	/** List of videos to license */
	export interface LicenseVideoRequestFormProperties {
	}
	export function CreateLicenseVideoRequestFormGroup() {
		return new FormGroup<LicenseVideoRequestFormProperties>({
		});

	}


	/** The response to a licensing request for a video */
	export interface LicenseVideoResult {

		/** Number of credits that this licensing event used */
		allotment_charge?: number | null;

		/** URL object */
		download?: Url;

		/** Potential error that occurred during licensing */
		error?: string | null;

		/** ID of the license event */
		license_id?: string | null;

		/** Price */
		price?: Price;

		/**
		 * ID of the video that was licensed
		 * Required
		 */
		video_id: string;
	}

	/** The response to a licensing request for a video */
	export interface LicenseVideoResultFormProperties {

		/** Number of credits that this licensing event used */
		allotment_charge: FormControl<number | null | undefined>,

		/** Potential error that occurred during licensing */
		error: FormControl<string | null | undefined>,

		/** ID of the license event */
		license_id: FormControl<string | null | undefined>,

		/**
		 * ID of the video that was licensed
		 * Required
		 */
		video_id: FormControl<string | null | undefined>,
	}
	export function CreateLicenseVideoResultFormGroup() {
		return new FormGroup<LicenseVideoResultFormProperties>({
			allotment_charge: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			license_id: new FormControl<string | null | undefined>(undefined),
			video_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of video license results */
	export interface LicenseVideoResultDataList {

		/** License results */
		data?: Array<LicenseVideoResult>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of video license results */
	export interface LicenseVideoResultDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateLicenseVideoResultDataListFormGroup() {
		return new FormGroup<LicenseVideoResultDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of audio moods */
	export interface MoodList {

		/**
		 * List of audio moods
		 * Required
		 */
		data: Array<string>;
	}

	/** List of audio moods */
	export interface MoodListFormProperties {
	}
	export function CreateMoodListFormGroup() {
		return new FormGroup<MoodListFormProperties>({
		});

	}


	/** Access token response to client apps */
	export interface OauthAccessTokenResponse {

		/**
		 * Access token that can be used for future requests
		 * Required
		 */
		access_token: string;

		/** Number of seconds before token expires, only present for expiring tokens */
		expires_in?: number | null;

		/** A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens */
		refresh_token?: string | null;

		/**
		 * Type of token
		 * Required
		 */
		token_type: string;

		/** Metadata about the access_token, only present for expiring tokens */
		user_token?: string | null;
	}

	/** Access token response to client apps */
	export interface OauthAccessTokenResponseFormProperties {

		/**
		 * Access token that can be used for future requests
		 * Required
		 */
		access_token: FormControl<string | null | undefined>,

		/** Number of seconds before token expires, only present for expiring tokens */
		expires_in: FormControl<number | null | undefined>,

		/** A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens */
		refresh_token: FormControl<string | null | undefined>,

		/**
		 * Type of token
		 * Required
		 */
		token_type: FormControl<string | null | undefined>,

		/** Metadata about the access_token, only present for expiring tokens */
		user_token: FormControl<string | null | undefined>,
	}
	export function CreateOauthAccessTokenResponseFormGroup() {
		return new FormGroup<OauthAccessTokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<number | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Media Recommendation */
	export interface Recommendation {

		/**
		 * Media ID
		 * Required
		 */
		id: string;
	}

	/** Media Recommendation */
	export interface RecommendationFormProperties {

		/**
		 * Media ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of recommended images */
	export interface RecommendationDataList {

		/** Recommended images */
		data?: Array<Recommendation>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of recommended images */
	export interface RecommendationDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateRecommendationDataListFormGroup() {
		return new FormGroup<RecommendationDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data required to redownload an image */
	export interface RedownloadImage {

		/** Cookie object */
		auth_cookie?: Cookie;

		/** (Deprecated) */
		show_modal?: boolean | null;

		/** Size of the image */
		size?: RedownloadImageSize | null;

		/** (Deprecated) */
		verification_code?: string | null;
	}

	/** Data required to redownload an image */
	export interface RedownloadImageFormProperties {

		/** (Deprecated) */
		show_modal: FormControl<boolean | null | undefined>,

		/** Size of the image */
		size: FormControl<RedownloadImageSize | null | undefined>,

		/** (Deprecated) */
		verification_code: FormControl<string | null | undefined>,
	}
	export function CreateRedownloadImageFormGroup() {
		return new FormGroup<RedownloadImageFormProperties>({
			show_modal: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<RedownloadImageSize | null | undefined>(undefined),
			verification_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RedownloadImageSize { small = 0, medium = 1, huge = 2, supersize = 3, vector = 4 }


	/** Data required to redownload a video */
	export interface RedownloadVideo {

		/** Cookie object */
		auth_cookie?: Cookie;

		/** (Deprecated) */
		show_modal?: boolean | null;

		/** Size of the video */
		size?: LicenseVideoSize | null;

		/** (Deprecated) */
		verification_code?: string | null;
	}

	/** Data required to redownload a video */
	export interface RedownloadVideoFormProperties {

		/** (Deprecated) */
		show_modal: FormControl<boolean | null | undefined>,

		/** Size of the video */
		size: FormControl<LicenseVideoSize | null | undefined>,

		/** (Deprecated) */
		verification_code: FormControl<string | null | undefined>,
	}
	export function CreateRedownloadVideoFormGroup() {
		return new FormGroup<RedownloadVideoFormProperties>({
			show_modal: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<LicenseVideoSize | null | undefined>(undefined),
			verification_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveCatalogCollectionItem {

		/** Required */
		id: string;
	}
	export interface RemoveCatalogCollectionItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRemoveCatalogCollectionItemFormGroup() {
		return new FormGroup<RemoveCatalogCollectionItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveCatalogCollectionItems {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		items: Array<RemoveCatalogCollectionItem>;
	}
	export interface RemoveCatalogCollectionItemsFormProperties {
	}
	export function CreateRemoveCatalogCollectionItemsFormGroup() {
		return new FormGroup<RemoveCatalogCollectionItemsFormProperties>({
		});

	}


	/** SFX metadata */
	export interface SFX {

		/** Date this sound effect was added to the Shutterstock library */
		added_date?: Date | null;

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url?: string | null;

		/** Artist of the sound effect */
		artist?: string | null;

		/** Files that are available as part of an sound effect asset */
		assets?: SFXAssets;

		/**
		 * Information about a contributor
		 * Required
		 */
		contributor: Contributor;

		/** Description of this sound effect */
		description?: string | null;

		/** Duration of this sound effect in seconds */
		duration?: number | null;

		/**
		 * Shutterstock ID of this sound effect
		 * Required
		 */
		id: string;

		/** List of all keywords for this sound effect */
		keywords?: Array<string>;

		/**
		 * Media type of this track; should always be "sfx"
		 * Required
		 */
		media_type: string;

		/** List of all releases of this sound effect */
		releases?: Array<string>;

		/** Title of this sound effect */
		title?: string | null;

		/** Time this sound effect was last updated */
		updated_time?: Date | null;
		url?: string | null;
	}

	/** SFX metadata */
	export interface SFXFormProperties {

		/** Date this sound effect was added to the Shutterstock library */
		added_date: FormControl<Date | null | undefined>,

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url: FormControl<string | null | undefined>,

		/** Artist of the sound effect */
		artist: FormControl<string | null | undefined>,

		/** Description of this sound effect */
		description: FormControl<string | null | undefined>,

		/** Duration of this sound effect in seconds */
		duration: FormControl<number | null | undefined>,

		/**
		 * Shutterstock ID of this sound effect
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Media type of this track; should always be "sfx"
		 * Required
		 */
		media_type: FormControl<string | null | undefined>,

		/** Title of this sound effect */
		title: FormControl<string | null | undefined>,

		/** Time this sound effect was last updated */
		updated_time: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSFXFormGroup() {
		return new FormGroup<SFXFormProperties>({
			added_date: new FormControl<Date | null | undefined>(undefined),
			affiliate_url: new FormControl<string | null | undefined>(undefined),
			artist: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Files that are available as part of an sound effect asset */
	export interface SFXAssets {

		/** Information about a file that is part of an sound effect asset */
		preview_mp3?: SFXAssetDetails;

		/** Information about a file that is part of an sound effect asset */
		waveform?: SFXAssetDetails;
	}

	/** Files that are available as part of an sound effect asset */
	export interface SFXAssetsFormProperties {
	}
	export function CreateSFXAssetsFormGroup() {
		return new FormGroup<SFXAssetsFormProperties>({
		});

	}


	/** Information about a file that is part of an sound effect asset */
	export interface SFXAssetDetails {

		/** File size of the sound effect */
		file_size?: number | null;

		/** URL the sound effect is available at */
		url?: string | null;
	}

	/** Information about a file that is part of an sound effect asset */
	export interface SFXAssetDetailsFormProperties {

		/** File size of the sound effect */
		file_size: FormControl<number | null | undefined>,

		/** URL the sound effect is available at */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSFXAssetDetailsFormGroup() {
		return new FormGroup<SFXAssetDetailsFormProperties>({
			file_size: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of sound effects */
	export interface SFXDataList {

		/** Sound Effects */
		data?: Array<SFX>;
	}

	/** List of sound effects */
	export interface SFXDataListFormProperties {
	}
	export function CreateSFXDataListFormGroup() {
		return new FormGroup<SFXDataListFormProperties>({
		});

	}


	/** Sound effects search results */
	export interface SFXSearchResults {

		/**
		 * List of tracks
		 * Required
		 */
		data: Array<SFX>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/**
		 * ID of the search
		 * Required
		 */
		search_id: string;

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: number;
	}

	/** Sound effects search results */
	export interface SFXSearchResultsFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the search
		 * Required
		 */
		search_id: FormControl<string | null | undefined>,

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateSFXSearchResultsFormGroup() {
		return new FormGroup<SFXSearchResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Search entity request data */
	export interface SearchEntitiesRequest {

		/**
		 * Plain text to extract keywords from
		 * Required
		 * Max length: 100000
		 * Min length: 1
		 */
		text: string;
	}

	/** Search entity request data */
	export interface SearchEntitiesRequestFormProperties {

		/**
		 * Plain text to extract keywords from
		 * Required
		 * Max length: 100000
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSearchEntitiesRequestFormGroup() {
		return new FormGroup<SearchEntitiesRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100000)]),
		});

	}


	/** The response to a request for keyword analysis */
	export interface SearchEntitiesResponse {

		/** The top keywords from the submitted text */
		keywords?: Array<string>;
	}

	/** The response to a request for keyword analysis */
	export interface SearchEntitiesResponseFormProperties {
	}
	export function CreateSearchEntitiesResponseFormGroup() {
		return new FormGroup<SearchEntitiesResponseFormProperties>({
		});

	}


	/** Sound effect license URL object */
	export interface SfxUrl {

		/**
		 * URL that can be used to download the unwatermarked, licensed asset
		 * Required
		 */
		url: string;
	}

	/** Sound effect license URL object */
	export interface SfxUrlFormProperties {

		/**
		 * URL that can be used to download the unwatermarked, licensed asset
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSfxUrlFormGroup() {
		return new FormGroup<SfxUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Subscription information */
	export interface Subscription {

		/** An allotment of credits as part of a subscription */
		allotment?: Allotment;

		/** Identifier for the type of assets associated with this subscription (images, videos, audio, editorial) */
		asset_type?: string | null;

		/** Description of the subscription */
		description?: string | null;

		/** Date the subscription ends */
		expiration_time?: Date | null;

		/** List of formats that are licensable for the subscription */
		formats?: Array<LicenseFormat>;

		/**
		 * Unique internal identifier for the subscription
		 * Required
		 */
		id: string;

		/** Internal identifier for the type of subscription */
		license?: string | null;

		/** Subscription metadata; different for each customer */
		metadata?: SubscriptionMetadata;

		/** Price */
		price_per_download?: Price;
	}

	/** Subscription information */
	export interface SubscriptionFormProperties {

		/** Identifier for the type of assets associated with this subscription (images, videos, audio, editorial) */
		asset_type: FormControl<string | null | undefined>,

		/** Description of the subscription */
		description: FormControl<string | null | undefined>,

		/** Date the subscription ends */
		expiration_time: FormControl<Date | null | undefined>,

		/**
		 * Unique internal identifier for the subscription
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Internal identifier for the type of subscription */
		license: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			asset_type: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expiration_time: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			license: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subscription metadata; different for each customer */
	export interface SubscriptionMetadata {
	}

	/** Subscription metadata; different for each customer */
	export interface SubscriptionMetadataFormProperties {
	}
	export function CreateSubscriptionMetadataFormGroup() {
		return new FormGroup<SubscriptionMetadataFormProperties>({
		});

	}


	/** List of subscriptions */
	export interface SubscriptionDataList {

		/** Subscriptions retrieved from this user */
		data?: Array<Subscription>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Optional error message */
		message?: string | null;

		/** Current page that is being queried */
		page?: number | null;

		/** Amount of subscriptions to show per page */
		per_page?: number | null;

		/** Total number of subscriptions for this user */
		total_count?: number | null;
	}

	/** List of subscriptions */
	export interface SubscriptionDataListFormProperties {

		/** Optional error message */
		message: FormControl<string | null | undefined>,

		/** Current page that is being queried */
		page: FormControl<number | null | undefined>,

		/** Amount of subscriptions to show per page */
		per_page: FormControl<number | null | undefined>,

		/** Total number of subscriptions for this user */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionDataListFormGroup() {
		return new FormGroup<SubscriptionDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of search suggestions */
	export interface Suggestions {

		/** Search suggestions */
		data?: Array<string>;
	}

	/** List of search suggestions */
	export interface SuggestionsFormProperties {
	}
	export function CreateSuggestionsFormGroup() {
		return new FormGroup<SuggestionsFormProperties>({
		});

	}


	/** Text to echo in the response */
	export interface TestEcho {
		text?: string | null;
	}

	/** Text to echo in the response */
	export interface TestEchoFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateTestEchoFormGroup() {
		return new FormGroup<TestEchoFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Validation results */
	export interface TestValidate {

		/** Validation results */
		header?: TestValidateHeader;

		/** Validation results */
		query?: TestValidateQuery;
	}

	/** Validation results */
	export interface TestValidateFormProperties {
	}
	export function CreateTestValidateFormGroup() {
		return new FormGroup<TestValidateFormProperties>({
		});

	}


	/** Validation results */
	export interface TestValidateHeader {

		/** User agent to expect in the response */
		'user-agent'?: string | null;
	}

	/** Validation results */
	export interface TestValidateHeaderFormProperties {

		/** User agent to expect in the response */
		'user-agent': FormControl<string | null | undefined>,
	}
	export function CreateTestValidateHeaderFormGroup() {
		return new FormGroup<TestValidateHeaderFormProperties>({
			'user-agent': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Validation results */
	export interface TestValidateQuery {

		/**
		 * Integer ID that was passed in the request
		 * Required
		 */
		id: number;

		/** List of tags that were passed in the request */
		tag?: Array<string>;
	}

	/** Validation results */
	export interface TestValidateQueryFormProperties {

		/**
		 * Integer ID that was passed in the request
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateTestValidateQueryFormGroup() {
		return new FormGroup<TestValidateQueryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCatalogCollection {
		cover_asset?: UpdateCatalogCollectionCover_asset;

		/**
		 * Max length: 100000
		 * Min length: 1
		 */
		name?: string | null;
		visibility?: CatalogCollectionVisibility | null;
	}
	export interface UpdateCatalogCollectionFormProperties {

		/**
		 * Max length: 100000
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		visibility: FormControl<CatalogCollectionVisibility | null | undefined>,
	}
	export function CreateUpdateCatalogCollectionFormGroup() {
		return new FormGroup<UpdateCatalogCollectionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100000)]),
			visibility: new FormControl<CatalogCollectionVisibility | null | undefined>(undefined),
		});

	}

	export interface UpdateCatalogCollectionCover_asset {

		/** Required */
		id: string;
	}
	export interface UpdateCatalogCollectionCover_assetFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCatalogCollectionCover_assetFormGroup() {
		return new FormGroup<UpdateCatalogCollectionCover_assetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a piece of updated media */
	export interface UpdatedMedia {

		/**
		 * ID of the media
		 * Required
		 */
		id: string;

		/**
		 * Date that the media was updated
		 * Required
		 */
		updated_time: Date;

		/**
		 * Types of updates that were made to the piece of media
		 * Required
		 */
		updates: Array<string>;
	}

	/** Information about a piece of updated media */
	export interface UpdatedMediaFormProperties {

		/**
		 * ID of the media
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Date that the media was updated
		 * Required
		 */
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatedMediaFormGroup() {
		return new FormGroup<UpdatedMediaFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of updated media */
	export interface UpdatedMediaDataList {

		/** Updated media items */
		data?: Array<UpdatedMedia>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of updated media */
	export interface UpdatedMediaDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateUpdatedMediaDataListFormGroup() {
		return new FormGroup<UpdatedMediaDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of URLs */
	export interface Urls {

		/**
		 * URLs
		 * Required
		 */
		urls: Array<string>;
	}

	/** List of URLs */
	export interface UrlsFormProperties {
	}
	export function CreateUrlsFormGroup() {
		return new FormGroup<UrlsFormProperties>({
		});

	}


	/** User details */
	export interface UserDetails {

		/** Unique internal identifier of the user, as a contributor */
		contributor_id?: string | null;

		/** Unique internal identifier of the user, as a purchaser */
		customer_id?: string | null;

		/** Email address of the user */
		email?: string | null;

		/** First name of the user */
		first_name?: string | null;

		/** Full name including first, middle, and last name of the user */
		full_name?: string | null;

		/** Unique internal identifier for the user, not tied to contributor or purchasing customer */
		id?: string | null;

		/** True if the user has access to the Premier collection, false otherwise */
		is_premier?: boolean | null;

		/** True if the user has access to the Premier collection and also has child users */
		is_premier_parent?: boolean | null;

		/** Main language of the user account */
		language?: string | null;

		/** Last name of the user */
		last_name?: string | null;

		/** True if the user has an enterprise license, false otherwise */
		only_enhanced_license?: boolean | null;

		/** True if the user has access to sensitive use only, false otherwise */
		only_sensitive_use?: boolean | null;

		/** Unique internal identifier for the user's organization, specific to Premier users */
		organization_id?: string | null;

		/** List of permissions allowed through the Premier client */
		premier_permissions?: Array<string>;

		/** User name associated to the user */
		username?: string | null;
	}

	/** User details */
	export interface UserDetailsFormProperties {

		/** Unique internal identifier of the user, as a contributor */
		contributor_id: FormControl<string | null | undefined>,

		/** Unique internal identifier of the user, as a purchaser */
		customer_id: FormControl<string | null | undefined>,

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** First name of the user */
		first_name: FormControl<string | null | undefined>,

		/** Full name including first, middle, and last name of the user */
		full_name: FormControl<string | null | undefined>,

		/** Unique internal identifier for the user, not tied to contributor or purchasing customer */
		id: FormControl<string | null | undefined>,

		/** True if the user has access to the Premier collection, false otherwise */
		is_premier: FormControl<boolean | null | undefined>,

		/** True if the user has access to the Premier collection and also has child users */
		is_premier_parent: FormControl<boolean | null | undefined>,

		/** Main language of the user account */
		language: FormControl<string | null | undefined>,

		/** Last name of the user */
		last_name: FormControl<string | null | undefined>,

		/** True if the user has an enterprise license, false otherwise */
		only_enhanced_license: FormControl<boolean | null | undefined>,

		/** True if the user has access to sensitive use only, false otherwise */
		only_sensitive_use: FormControl<boolean | null | undefined>,

		/** Unique internal identifier for the user's organization, specific to Premier users */
		organization_id: FormControl<string | null | undefined>,

		/** User name associated to the user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserDetailsFormGroup() {
		return new FormGroup<UserDetailsFormProperties>({
			contributor_id: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			full_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_premier: new FormControl<boolean | null | undefined>(undefined),
			is_premier_parent: new FormControl<boolean | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			only_enhanced_license: new FormControl<boolean | null | undefined>(undefined),
			only_sensitive_use: new FormControl<boolean | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a video */
	export interface Video {

		/** Date this video was added to the Shutterstock library */
		added_date?: Date | null;

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url?: string | null;

		/** Aspect ratio of this video in decimal format, such as 0.6667 */
		aspect?: number | null;

		/** Aspect ratio of the video as a ratio, such as 16:9 */
		aspect_ratio?: string | null;

		/** Video asset information */
		assets?: VideoAssets;

		/** List of categories */
		categories?: Array<Category>;

		/**
		 * Information about a contributor
		 * Required
		 */
		contributor: Contributor;

		/** Description of this video */
		description?: string | null;

		/** Duration of this video, in seconds */
		duration?: number | null;

		/** Whether or not this video has been released for use by the model appearing in it */
		has_model_release?: boolean | null;

		/** Whether or not this video has received a release to show the landmark or property appearing in it */
		has_property_release?: boolean | null;

		/**
		 * ID of the video
		 * Required
		 */
		id: string;

		/** Whether or not this video contains adult content */
		is_adult?: boolean | null;

		/** Whether or not this video is editorial content */
		is_editorial?: boolean | null;

		/** Keywords associated with the content of this video */
		keywords?: Array<string>;

		/**
		 * Media type of this video, should always be "video"
		 * Required
		 */
		media_type: string;

		/** List of models in this video */
		models?: Array<Model>;

		/** Link to video information page; included only for certain accounts */
		url?: string | null;
	}

	/** Information about a video */
	export interface VideoFormProperties {

		/** Date this video was added to the Shutterstock library */
		added_date: FormControl<Date | null | undefined>,

		/** Affiliate referral link; appears only for registered affiliate partners */
		affiliate_url: FormControl<string | null | undefined>,

		/** Aspect ratio of this video in decimal format, such as 0.6667 */
		aspect: FormControl<number | null | undefined>,

		/** Aspect ratio of the video as a ratio, such as 16:9 */
		aspect_ratio: FormControl<string | null | undefined>,

		/** Description of this video */
		description: FormControl<string | null | undefined>,

		/** Duration of this video, in seconds */
		duration: FormControl<number | null | undefined>,

		/** Whether or not this video has been released for use by the model appearing in it */
		has_model_release: FormControl<boolean | null | undefined>,

		/** Whether or not this video has received a release to show the landmark or property appearing in it */
		has_property_release: FormControl<boolean | null | undefined>,

		/**
		 * ID of the video
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Whether or not this video contains adult content */
		is_adult: FormControl<boolean | null | undefined>,

		/** Whether or not this video is editorial content */
		is_editorial: FormControl<boolean | null | undefined>,

		/**
		 * Media type of this video, should always be "video"
		 * Required
		 */
		media_type: FormControl<string | null | undefined>,

		/** Link to video information page; included only for certain accounts */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			added_date: new FormControl<Date | null | undefined>(undefined),
			affiliate_url: new FormControl<string | null | undefined>(undefined),
			aspect: new FormControl<number | null | undefined>(undefined),
			aspect_ratio: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			has_model_release: new FormControl<boolean | null | undefined>(undefined),
			has_property_release: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_adult: new FormControl<boolean | null | undefined>(undefined),
			is_editorial: new FormControl<boolean | null | undefined>(undefined),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video asset information */
	export interface VideoAssets {

		/** Video asset information */
		'4k'?: VideoSizeDetails;

		/** Video asset information */
		hd?: VideoSizeDetails;

		/** URL object */
		preview_jpg?: Url;

		/** URL object */
		preview_mp4?: Url;

		/** URL object */
		preview_webm?: Url;

		/** Video asset information */
		sd?: VideoSizeDetails;

		/** URL object */
		thumb_jpg?: Url;

		/** List of URLs */
		thumb_jpgs?: Urls;

		/** URL object */
		thumb_mp4?: Url;

		/** URL object */
		thumb_webm?: Url;

		/** Video asset information */
		web?: VideoSizeDetails;
	}

	/** Video asset information */
	export interface VideoAssetsFormProperties {
	}
	export function CreateVideoAssetsFormGroup() {
		return new FormGroup<VideoAssetsFormProperties>({
		});

	}


	/** List of items in a collection */
	export interface VideoCollectionItemDataList {

		/** Assets in the collection */
		data?: Array<CollectionItem>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** The current page of results */
		page?: number | null;

		/** The number of results per page */
		per_page?: number | null;

		/** The total number of results across all pages */
		total_count?: number | null;
	}

	/** List of items in a collection */
	export interface VideoCollectionItemDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** The current page of results */
		page: FormControl<number | null | undefined>,

		/** The number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** The total number of results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateVideoCollectionItemDataListFormGroup() {
		return new FormGroup<VideoCollectionItemDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of videos */
	export interface VideoDataList {

		/** Videos */
		data?: Array<Video>;

		/** Error list; appears only if there was an error */
		errors?: Array<Error>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/** Total count of all results across all pages */
		total_count?: number | null;
	}

	/** List of videos */
	export interface VideoDataListFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/** Total count of all results across all pages */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateVideoDataListFormGroup() {
		return new FormGroup<VideoDataListFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video search results */
	export interface VideoSearchResults {

		/**
		 * List of videos
		 * Required
		 */
		data: Array<Video>;

		/** Server-generated message, if any */
		message?: string | null;

		/** Current page that is returned */
		page?: number | null;

		/** Number of results per page */
		per_page?: number | null;

		/**
		 * Unique identifier for the search request
		 * Required
		 */
		search_id: string;

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: number;
	}

	/** Video search results */
	export interface VideoSearchResultsFormProperties {

		/** Server-generated message, if any */
		message: FormControl<string | null | undefined>,

		/** Current page that is returned */
		page: FormControl<number | null | undefined>,

		/** Number of results per page */
		per_page: FormControl<number | null | undefined>,

		/**
		 * Unique identifier for the search request
		 * Required
		 */
		search_id: FormControl<string | null | undefined>,

		/**
		 * Total count of all results across all pages
		 * Required
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateVideoSearchResultsFormGroup() {
		return new FormGroup<VideoSearchResultsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			search_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List computer audio descriptors
		 * This endpoint lists the descriptors that you can use in the audio regions in an audio render.
		 * Get v2/ai/audio/descriptors
		 * @param {number} render_speed_over Show descriptors with an average render speed that is greater than or equal to the specified value
		 * @param {string} band_id Show descriptors that contain the specified band (case-sentsitive)
		 * @param {string} band_name Show descriptors with the specified band name (case-sensitive)
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {Array<string>} id Show descriptors with the specified IDs (case-sensitive)
		 * @param {string} instrument_name Show descriptors with the specified instrument name (case-sensitive)
		 * @param {string} instrument_id Show descriptors with the specified instrument ID (case-sensitive)
		 * @param {number} tempo Show descriptors whose tempo range includes the specified tempo in beats per minute
		 * @param {number} tempo_to Show descriptors with a tempo that is less than or equal to the specified number
		 * @param {number} tempo_from Show descriptors that have a tempo range that includes the specified tempo in beats per minute
		 * @param {string} name Show descriptors with the specified name (case-sensitive)
		 * @param {string} tag Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)
		 * @return {DescriptorsListResult} OK
		 */
		ListCustomDescriptors(render_speed_over: number | null | undefined, band_id: string | null | undefined, band_name: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, id: Array<string> | null | undefined, instrument_name: string | null | undefined, instrument_id: string | null | undefined, tempo: number | null | undefined, tempo_to: number | null | undefined, tempo_from: number | null | undefined, name: string | null | undefined, tag: string | null | undefined): Observable<DescriptorsListResult> {
			return this.http.get<DescriptorsListResult>(this.baseUri + 'v2/ai/audio/descriptors?render_speed_over=' + render_speed_over + '&band_id=' + (band_id == null ? '' : encodeURIComponent(band_id)) + '&band_name=' + (band_name == null ? '' : encodeURIComponent(band_name)) + '&page=' + page + '&per_page=' + per_page + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&instrument_name=' + (instrument_name == null ? '' : encodeURIComponent(instrument_name)) + '&instrument_id=' + (instrument_id == null ? '' : encodeURIComponent(instrument_id)) + '&tempo=' + tempo + '&tempo_to=' + tempo_to + '&tempo_from=' + tempo_from + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)), {});
		}

		/**
		 * List computer audio instruments
		 * This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.
		 * Get v2/ai/audio/instruments
		 * @param {Array<string>} id Show instruments with the specified ID
		 * @param {number} per_page Number of results per page
		 * @param {number} page Page number
		 * @param {string} name Show instruments with the specified name (case-sensitive)
		 * @param {string} tag Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)
		 * @return {InstrumentsListResult} OK
		 */
		ListCustomInstruments(id: Array<string> | null | undefined, per_page: number | null | undefined, page: number | null | undefined, name: string | null | undefined, tag: string | null | undefined): Observable<InstrumentsListResult> {
			return this.http.get<InstrumentsListResult>(this.baseUri + 'v2/ai/audio/instruments?' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&per_page=' + per_page + '&page=' + page + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)), {});
		}

		/**
		 * Get details about audio renders
		 * This endpoint shows the status of one or more audio renders, including download links for completed audio.
		 * Get v2/ai/audio/renders
		 * @param {Array<string>} id One or more render IDs
		 * @return {AudioRendersListResults} OK
		 */
		FetchRenders(id: Array<string>): Observable<AudioRendersListResults> {
			return this.http.get<AudioRendersListResults>(this.baseUri + 'v2/ai/audio/renders?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Create rendered audio
		 * This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.
		 * Post v2/ai/audio/renders
		 * @param {CreateAudioRendersRequest} requestBody Parameters for the audio, including the timeline and information about the output file
		 * @return {AudioRendersListResults} OK
		 */
		CreateAudioRenders(requestBody: CreateAudioRendersRequest): Observable<AudioRendersListResults> {
			return this.http.post<AudioRendersListResults>(this.baseUri + 'v2/ai/audio/renders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List audio tracks
		 * This endpoint lists information about one or more audio tracks, including the description and publication date.
		 * Get v2/audio
		 * @param {Array<string>} id One or more audio IDs
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {AudioDataList} OK
		 */
		GetTrackList(id: Array<string>, view: SearchImageView | null | undefined, search_id: string | null | undefined): Observable<AudioDataList> {
			return this.http.get<AudioDataList>(this.baseUri + 'v2/audio?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&view=' + view + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * List audio collections
		 * This endpoint lists your collections of audio tracks and their basic attributes.
		 * Get v2/audio/collections
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {Array<string>} embed Which sharing information to include in the response, such as a URL to the collection
		 * @return {CollectionDataList} OK
		 */
		GetTrackCollectionList(page: number | null | undefined, per_page: number | null | undefined, embed: Array<string> | null | undefined): Observable<CollectionDataList> {
			return this.http.get<CollectionDataList>(this.baseUri + 'v2/audio/collections?page=' + page + '&per_page=' + per_page + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Create audio collections
		 * This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
		 * Post v2/audio/collections
		 * @param {CollectionCreateRequest} requestBody Collection metadata
		 * @return {void} 
		 */
		CreateTrackCollection(requestBody: CollectionCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/audio/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete audio collections
		 * This endpoint deletes a collection.
		 * Delete v2/audio/collections/{id}
		 * @param {string} id Collection ID
		 * @return {void} 
		 */
		DeleteTrackCollection(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/audio/collections/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of audio collections
		 * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
		 * Get v2/audio/collections/{id}
		 * @param {string} id Collection ID
		 * @param {Array<string>} embed Which sharing information to include in the response, such as a URL to the collection
		 * @param {string} share_code Code to retrieve a shared collection
		 * @return {Collection} OK
		 */
		GetTrackCollection(id: string, embed: Array<string> | null | undefined, share_code: string | null | undefined): Observable<Collection> {
			return this.http.get<Collection>(this.baseUri + 'v2/audio/collections/' + (id == null ? '' : encodeURIComponent(id)) + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&') + '&share_code=' + (share_code == null ? '' : encodeURIComponent(share_code)), {});
		}

		/**
		 * Rename audio collections
		 * This endpoint sets a new name for a collection.
		 * Post v2/audio/collections/{id}
		 * @param {string} id Collection ID
		 * @param {CollectionUpdateRequest} requestBody Collection changes
		 * @return {void} 
		 */
		RenameTrackCollection(id: string, requestBody: CollectionUpdateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/audio/collections/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove audio tracks from collections
		 * This endpoint removes one or more tracks from a collection.
		 * Delete v2/audio/collections/{id}/items
		 * @param {string} id Collection ID
		 * @param {Array<string>} item_id One or more item IDs to remove from the collection
		 * @return {void} 
		 */
		DeleteTrackCollectionItems(id: string, item_id: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/audio/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items&' + item_id?.map(z => `item_id=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the contents of audio collections
		 * This endpoint lists the IDs of tracks in a collection and the date that each was added.
		 * Get v2/audio/collections/{id}/items
		 * @param {string} id Collection ID
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {string} share_code Code to retrieve the contents of a shared collection
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @return {CollectionItemDataList} OK
		 */
		GetTrackCollectionItems(id: string, page: number | null | undefined, per_page: number | null | undefined, share_code: string | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined): Observable<CollectionItemDataList> {
			return this.http.get<CollectionItemDataList>(this.baseUri + 'v2/audio/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items&page=' + page + '&per_page=' + per_page + '&share_code=' + (share_code == null ? '' : encodeURIComponent(share_code)) + '&sort=' + sort, {});
		}

		/**
		 * Add audio tracks to collections
		 * This endpoint adds one or more tracks to a collection by track IDs.
		 * Post v2/audio/collections/{id}/items
		 * @param {string} id Collection ID
		 * @param {CollectionItemRequest} requestBody List of items to add to collection
		 * @return {void} 
		 */
		AddTrackCollectionItems(id: string, requestBody: CollectionItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/audio/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List audio genres
		 * This endpoint returns a list of all audio genres.
		 * Get v2/audio/genres
		 * @param {string} language Which language the genres will be returned
		 * @return {GenreList} OK
		 */
		ListGenres(language: string | null | undefined): Observable<GenreList> {
			return this.http.get<GenreList>(this.baseUri + 'v2/audio/genres?language=' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * List audio instruments
		 * This endpoint returns a list of all audio instruments.
		 * Get v2/audio/instruments
		 * @param {string} language Which language the instruments will be returned in
		 * @return {InstrumentList} OK
		 */
		ListInstruments(language: string | null | undefined): Observable<InstrumentList> {
			return this.http.get<InstrumentList>(this.baseUri + 'v2/audio/instruments?language=' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * List audio licenses
		 * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
		 * Get v2/audio/licenses
		 * @param {string} audio_id Show licenses for the specified track ID
		 * @param {string} license Restrict results by license. Prepending a `-` sign will exclude results by license
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @param {string} username Filter licenses by username of licensee
		 * @param {Date} start_date Show licenses created on or after the specified date
		 * @param {Date} end_date Show licenses created before the specified date
		 * @param {GetTrackLicenseListDownload_availability} download_availability Filter licenses by download availability
		 * @param {boolean} team_history Set to true to see license history for all members of your team.
		 * @return {DownloadHistoryDataList} OK
		 */
		GetTrackLicenseList(audio_id: string | null | undefined, license: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, username: string | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, download_availability: GetTrackLicenseListDownload_availability | null | undefined, team_history: boolean | null | undefined): Observable<DownloadHistoryDataList> {
			return this.http.get<DownloadHistoryDataList>(this.baseUri + 'v2/audio/licenses?audio_id=' + (audio_id == null ? '' : encodeURIComponent(audio_id)) + '&license=' + (license == null ? '' : encodeURIComponent(license)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&download_availability=' + download_availability + '&team_history=' + team_history, {});
		}

		/**
		 * License audio tracks
		 * This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.
		 * Post v2/audio/licenses
		 * @param {LicenseAudioLicense} license License type
		 * @param {string} search_id The ID of the search that led to licensing this track
		 * @param {LicenseAudioRequest} requestBody Tracks to license
		 * @return {LicenseAudioResultDataList} OK
		 */
		LicenseTrack(license: LicenseAudioLicense | null | undefined, search_id: string | null | undefined, requestBody: LicenseAudioRequest): Observable<LicenseAudioResultDataList> {
			return this.http.post<LicenseAudioResultDataList>(this.baseUri + 'v2/audio/licenses?license=' + license + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download audio tracks
		 * This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.
		 * Post v2/audio/licenses/{id}/downloads
		 * @param {string} id License ID
		 * @return {AudioUrl} OK
		 */
		DownloadTracks(id: string): Observable<AudioUrl> {
			return this.http.post<AudioUrl>(this.baseUri + 'v2/audio/licenses/' + (id == null ? '' : encodeURIComponent(id)) + '/downloads', null, {});
		}

		/**
		 * List audio moods
		 * This endpoint returns a list of all audio moods.
		 * Get v2/audio/moods
		 * @param {string} language Which language the moods will be returned in
		 * @return {MoodList} OK
		 */
		ListMoods(language: string | null | undefined): Observable<MoodList> {
			return this.http.get<MoodList>(this.baseUri + 'v2/audio/moods?language=' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Search for tracks
		 * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
		 * Get v2/audio/search
		 * @param {Array<string>} artists Show tracks with one of the specified artist names or IDs
		 * @param {number} bpm (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute
		 * @param {number} bpm_from Show tracks with the specified beats per minute or faster
		 * @param {number} bpm_to Show tracks with the specified beats per minute or slower
		 * @param {number} duration Show tracks with the specified duration in seconds
		 * @param {number} duration_from Show tracks with the specified duration or longer in seconds
		 * @param {number} duration_to Show tracks with the specified duration or shorter in seconds
		 * @param {Array<string>} genre Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres`
		 * @param {boolean} is_instrumental Show instrumental music only
		 * @param {Array<string>} instruments Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments`
		 * @param {Array<string>} moods Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods`
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {string} query One or more search terms separated by spaces
		 * @param {SearchTracksSort} sort Sort by
		 * @param {SearchTracksSort_order} sort_order Sort order
		 * @param {string} vocal_description Show tracks with the specified vocal description (male, female)
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {string} fields Fields to display in the response; see the documentation for the fields parameter in the overview section
		 * @param {SearchTracksLibrary} library Which library to search
		 * @param {string} language Which language to search in
		 * @return {AudioSearchResults} OK
		 */
		SearchTracks(artists: Array<string> | null | undefined, bpm: number | null | undefined, bpm_from: number | null | undefined, bpm_to: number | null | undefined, duration: number | null | undefined, duration_from: number | null | undefined, duration_to: number | null | undefined, genre: Array<string> | null | undefined, is_instrumental: boolean | null | undefined, instruments: Array<string> | null | undefined, moods: Array<string> | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: SearchTracksSort | null | undefined, sort_order: SearchTracksSort_order | null | undefined, vocal_description: string | null | undefined, view: SearchImageView | null | undefined, fields: string | null | undefined, library: SearchTracksLibrary | null | undefined, language: string | null | undefined): Observable<AudioSearchResults> {
			return this.http.get<AudioSearchResults>(this.baseUri + 'v2/audio/search?' + artists?.map(z => `artists=${encodeURIComponent(z)}`).join('&') + '&bpm=' + bpm + '&bpm_from=' + bpm_from + '&bpm_to=' + bpm_to + '&duration=' + duration + '&duration_from=' + duration_from + '&duration_to=' + duration_to + '&' + genre?.map(z => `genre=${encodeURIComponent(z)}`).join('&') + '&is_instrumental=' + is_instrumental + '&' + instruments?.map(z => `instruments=${encodeURIComponent(z)}`).join('&') + '&' + moods?.map(z => `moods=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&sort_order=' + sort_order + '&vocal_description=' + (vocal_description == null ? '' : encodeURIComponent(vocal_description)) + '&view=' + view + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&library=' + library + '&language=' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Get details about audio tracks
		 * This endpoint shows information about a track, including its genres, instruments, and other attributes.
		 * Get v2/audio/{id}
		 * @param {number} id Audio track ID
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {Audio} OK
		 */
		GetTrack(id: number, view: SearchImageView | null | undefined, search_id: string | null | undefined): Observable<Audio> {
			return this.http.get<Audio>(this.baseUri + 'v2/audio/' + id + '?view=' + view + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * Run multiple image searches
		 * This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.
		 * Post v2/bulk_search/images
		 * @param {Date} added_date Show images added on the specified date
		 * @param {Date} added_date_start Show images added on or after the specified date
		 * @param {number} aspect_ratio_min Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * @param {number} aspect_ratio_max Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * @param {number} aspect_ratio Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * @param {Date} added_date_end Show images added before the specified date
		 * @param {string} category Show images with the specified Shutterstock-defined category; specify a category name or ID
		 * @param {string} color Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
		 * @param {Array<string>} contributor Show images with the specified contributor names or IDs, allows multiple
		 * @param {Array<string>} contributor_country Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
		 * @param {string} fields Fields to display in the response; see the documentation for the fields parameter in the overview section
		 * @param {number} height (Deprecated; use height_from and height_to instead) Show images with the specified height
		 * @param {number} height_from Show images with the specified height or larger, in pixels
		 * @param {number} height_to Show images with the specified height or smaller, in pixels
		 * @param {Array<string>} image_type Show images of the specified type
		 * @param {boolean} keyword_safe_search Hide results with potentially unsafe keywords
		 * @param {SearchImageLanguage} language Set query and result language (uses Accept-Language header if not set)
		 * @param {Array<string>} license Show only images with the specified license
		 * @param {Array<string>} model Show image results with the specified model IDs
		 * @param {SearchImageOrientation} orientation Show image results with horizontal or vertical orientation
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {boolean} people_model_released Show images of people with a signed model release
		 * @param {SearchImagePeople_age} people_age Show images that feature people of the specified age category
		 * @param {Array<string>} people_ethnicity Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
		 * @param {SearchImagePeople_gender} people_gender Show images with people of the specified gender
		 * @param {number} people_number Show images with the specified number of people
		 * @param {string} region Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
		 * @param {boolean} safe Enable or disable safe search
		 * @param {SearchImageSort} sort Sort by
		 * @param {boolean} spellcheck_query Spellcheck the search query and return results on suggested spellings
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {number} width (Deprecated; use width_from and width_to instead) Show images with the specified width
		 * @param {number} width_from Show images with the specified width or larger, in pixels
		 * @param {number} width_to Show images with the specified width or smaller, in pixels
		 * @param {Array<SearchImage>} requestBody List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters
		 * @return {BulkImageSearchResults} OK
		 */
		BulkSearchImages(added_date: Date | null | undefined, added_date_start: Date | null | undefined, aspect_ratio_min: number | null | undefined, aspect_ratio_max: number | null | undefined, aspect_ratio: number | null | undefined, added_date_end: Date | null | undefined, category: string | null | undefined, color: string | null | undefined, contributor: Array<string> | null | undefined, contributor_country: Array<string> | null | undefined, fields: string | null | undefined, height: number | null | undefined, height_from: number | null | undefined, height_to: number | null | undefined, image_type: Array<string> | null | undefined, keyword_safe_search: boolean | null | undefined, language: SearchImageLanguage | null | undefined, license: Array<string> | null | undefined, model: Array<string> | null | undefined, orientation: SearchImageOrientation | null | undefined, page: number | null | undefined, per_page: number | null | undefined, people_model_released: boolean | null | undefined, people_age: SearchImagePeople_age | null | undefined, people_ethnicity: Array<string> | null | undefined, people_gender: SearchImagePeople_gender | null | undefined, people_number: number | null | undefined, region: string | null | undefined, safe: boolean | null | undefined, sort: SearchImageSort | null | undefined, spellcheck_query: boolean | null | undefined, view: SearchImageView | null | undefined, width: number | null | undefined, width_from: number | null | undefined, width_to: number | null | undefined, requestBody: Array<SearchImage>): Observable<BulkImageSearchResults> {
			return this.http.post<BulkImageSearchResults>(this.baseUri + 'v2/bulk_search/images?added_date=' + added_date?.toISOString() + '&added_date_start=' + added_date_start?.toISOString() + '&aspect_ratio_min=' + aspect_ratio_min + '&aspect_ratio_max=' + aspect_ratio_max + '&aspect_ratio=' + aspect_ratio + '&added_date_end=' + added_date_end?.toISOString() + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&color=' + (color == null ? '' : encodeURIComponent(color)) + '&' + contributor?.map(z => `contributor=${encodeURIComponent(z)}`).join('&') + '&' + contributor_country?.map(z => `contributor_country=${encodeURIComponent(z)}`).join('&') + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&height=' + height + '&height_from=' + height_from + '&height_to=' + height_to + '&' + image_type?.map(z => `image_type=${encodeURIComponent(z)}`).join('&') + '&keyword_safe_search=' + keyword_safe_search + '&language=' + language + '&' + license?.map(z => `license=${encodeURIComponent(z)}`).join('&') + '&' + model?.map(z => `model=${encodeURIComponent(z)}`).join('&') + '&orientation=' + orientation + '&page=' + page + '&per_page=' + per_page + '&people_model_released=' + people_model_released + '&people_age=' + people_age + '&' + people_ethnicity?.map(z => `people_ethnicity=${encodeURIComponent(z)}`).join('&') + '&people_gender=' + people_gender + '&people_number=' + people_number + '&region=' + (region == null ? '' : encodeURIComponent(region)) + '&safe=' + safe + '&sort=' + sort + '&spellcheck_query=' + spellcheck_query + '&view=' + view + '&width=' + width + '&width_from=' + width_from + '&width_to=' + width_to, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List catalog collections
		 * This endpoint returns a list of catalog collections.
		 * Get v2/catalog/collections
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort by
		 * @param {boolean} shared Set to true to omit collections that you own and return only collections  that are shared with you
		 * @return {CatalogCollectionDataList} OK
		 */
		GetCollections(page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, shared: boolean | null | undefined): Observable<CatalogCollectionDataList> {
			return this.http.get<CatalogCollectionDataList>(this.baseUri + 'v2/catalog/collections?page=' + page + '&per_page=' + per_page + '&sort=' + sort + '&shared=' + shared, {});
		}

		/**
		 * Create catalog collections
		 * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
		 * Post v2/catalog/collections
		 * @param {CreateCatalogCollection} requestBody Create a catalog collection and, optionally, add items.
		 * @return {void} 
		 */
		CreateCollection(requestBody: CreateCatalogCollection): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/catalog/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete catalog collections
		 * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
		 * Delete v2/catalog/collections/{collection_id}
		 * @param {string} collection_id The ID of the collection to delete
		 * @return {void} 
		 */
		DeleteCollection(collection_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/catalog/collections/' + (collection_id == null ? '' : encodeURIComponent(collection_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update collection metadata
		 * This endpoint updates the metadata of a catalog collection.
		 * Patch v2/catalog/collections/{collection_id}
		 * @param {string} collection_id ID of collection that needs to be modified
		 * @param {UpdateCatalogCollection} requestBody Collections Metadata to update
		 * @return {CatalogCollection} OK
		 */
		UpdateCollection(collection_id: string, requestBody: UpdateCatalogCollection): Observable<CatalogCollection> {
			return this.http.patch<CatalogCollection>(this.baseUri + 'v2/catalog/collections/' + (collection_id == null ? '' : encodeURIComponent(collection_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove items from catalog collection
		 * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
		 * Delete v2/catalog/collections/{collection_id}/items
		 * @param {string} collection_id The ID of the collection to remove assets from
		 * @return {CatalogCollection} OK
		 */
		DeleteFromCollection(collection_id: string): Observable<CatalogCollection> {
			return this.http.delete<CatalogCollection>(this.baseUri + 'v2/catalog/collections/' + (collection_id == null ? '' : encodeURIComponent(collection_id)) + '/items', {});
		}

		/**
		 * Add items to catalog collections
		 * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
		 * Post v2/catalog/collections/{collection_id}/items
		 * @param {string} collection_id The ID of the collection to add assets to
		 * @param {CreateCatalogCollectionItems} requestBody Collection item attributes to add to collection
		 * @return {CatalogCollection} OK
		 */
		AddToCollection(collection_id: string, requestBody: CreateCatalogCollectionItems): Observable<CatalogCollection> {
			return this.http.post<CatalogCollection>(this.baseUri + 'v2/catalog/collections/' + (collection_id == null ? '' : encodeURIComponent(collection_id)) + '/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search catalogs for assets
		 * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
		 * Get v2/catalog/search
		 * @param {GetTrackCollectionItemsSort} sort Sort by
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {string} query One or more search terms separated by spaces
		 * @param {Array<string>} collection_id Filter by collection id
		 * @param {Array<string>} asset_type Filter by asset type
		 * @return {CatalogCollectionItemDataList} OK
		 */
		SearchCatalog(sort: GetTrackCollectionItemsSort | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, collection_id: Array<string> | null | undefined, asset_type: Array<string> | null | undefined): Observable<CatalogCollectionItemDataList> {
			return this.http.get<CatalogCollectionItemDataList>(this.baseUri + 'v2/catalog/search?sort=' + sort + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + collection_id?.map(z => `collection_id=${encodeURIComponent(z)}`).join('&') + '&' + asset_type?.map(z => `asset_type=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get details about multiple contributors
		 * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
		 * Get v2/contributors
		 * @param {Array<string>} id One or more contributor IDs
		 * @return {ContributorProfileDataList} OK
		 */
		GetContributorList(id: Array<string>): Observable<ContributorProfileDataList> {
			return this.http.get<ContributorProfileDataList>(this.baseUri + 'v2/contributors?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get details about a single contributor
		 * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
		 * Get v2/contributors/{contributor_id}
		 * @param {string} contributor_id Contributor ID
		 * @return {ContributorProfile} OK
		 */
		GetContributor(contributor_id: string): Observable<ContributorProfile> {
			return this.http.get<ContributorProfile>(this.baseUri + 'v2/contributors/' + (contributor_id == null ? '' : encodeURIComponent(contributor_id)), {});
		}

		/**
		 * List contributors' collections
		 * This endpoint lists collections based on contributor ID.
		 * Get v2/contributors/{contributor_id}/collections
		 * @param {string} contributor_id Contributor ID
		 * @param {GetContributorCollectionsListSort} sort Sort order
		 * @return {CollectionDataList} OK
		 */
		GetContributorCollectionsList(contributor_id: string, sort: GetContributorCollectionsListSort | null | undefined): Observable<CollectionDataList> {
			return this.http.get<CollectionDataList>(this.baseUri + 'v2/contributors/' + (contributor_id == null ? '' : encodeURIComponent(contributor_id)) + '/collections&sort=' + sort, {});
		}

		/**
		 * Get details about contributors' collections
		 * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
		 * Get v2/contributors/{contributor_id}/collections/{id}
		 * @param {string} contributor_id Contributor ID
		 * @param {string} id Collection ID that belongs to the contributor
		 * @return {Collection} OK
		 */
		GetContributorCollections(contributor_id: string, id: string): Observable<Collection> {
			return this.http.get<Collection>(this.baseUri + 'v2/contributors/' + (contributor_id == null ? '' : encodeURIComponent(contributor_id)) + '/collections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get the items in contributors' collections
		 * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
		 * Get v2/contributors/{contributor_id}/collections/{id}/items
		 * @param {string} contributor_id Contributor ID
		 * @param {string} id Collection ID that belongs to the contributor
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @return {CollectionItemDataList} OK
		 */
		GetContributorCollectionItems(contributor_id: string, id: string, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined): Observable<CollectionItemDataList> {
			return this.http.get<CollectionItemDataList>(this.baseUri + 'v2/contributors/' + (contributor_id == null ? '' : encodeURIComponent(contributor_id)) + '/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Upload images
		 * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
		 * Post v2/cv/images
		 * @param {ImageCreateRequest} requestBody A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
		 * @return {void} 
		 */
		UploadImage(requestBody: ImageCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/cv/images', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List suggested keywords
		 * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
		 * Get v2/cv/keywords
		 * @param {string} asset_id The asset ID or upload ID to suggest keywords for
		 * @return {KeywordDataList} OK
		 */
		GetKeywords(asset_id: string): Observable<KeywordDataList> {
			return this.http.get<KeywordDataList>(this.baseUri + 'v2/cv/keywords?asset_id=' + (asset_id == null ? '' : encodeURIComponent(asset_id)), {});
		}

		/**
		 * List similar images
		 * This endpoint returns images that are visually similar to an image that you specify or upload.
		 * Get v2/cv/similar/images
		 * @param {string} asset_id The asset ID or upload ID to find similar images for
		 * @param {Array<string>} license Show only images with the specified license
		 * @param {boolean} safe Enable or disable safe search
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @return {ImageSearchResults} OK
		 */
		GetSimilarImages(asset_id: string, license: Array<string> | null | undefined, safe: boolean | null | undefined, language: SearchImageLanguage | null | undefined, page: number | null | undefined, per_page: number | null | undefined, view: SearchImageView | null | undefined): Observable<ImageSearchResults> {
			return this.http.get<ImageSearchResults>(this.baseUri + 'v2/cv/similar/images?asset_id=' + (asset_id == null ? '' : encodeURIComponent(asset_id)) + '&' + license?.map(z => `license=${encodeURIComponent(z)}`).join('&') + '&safe=' + safe + '&language=' + language + '&page=' + page + '&per_page=' + per_page + '&view=' + view, {});
		}

		/**
		 * List similar videos
		 * This endpoint returns videos that are visually similar to an image that you specify or upload.
		 * Get v2/cv/similar/videos
		 * @param {string} asset_id The asset ID or upload ID to find similar videos for
		 * @param {Array<string>} license Show only videos with the specified license
		 * @param {boolean} safe Enable or disable safe search
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @return {VideoSearchResults} OK
		 */
		GetSimilarVideos(asset_id: string, license: Array<string> | null | undefined, safe: boolean | null | undefined, language: SearchImageLanguage | null | undefined, page: number | null | undefined, per_page: number | null | undefined, view: SearchImageView | null | undefined): Observable<VideoSearchResults> {
			return this.http.get<VideoSearchResults>(this.baseUri + 'v2/cv/similar/videos?asset_id=' + (asset_id == null ? '' : encodeURIComponent(asset_id)) + '&' + license?.map(z => `license=${encodeURIComponent(z)}`).join('&') + '&safe=' + safe + '&language=' + language + '&page=' + page + '&per_page=' + per_page + '&view=' + view, {});
		}

		/**
		 * (Deprecated) List editorial categories
		 * Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
		 * Get v2/editorial/categories
		 * @return {EditorialCategoryResults} OK
		 */
		GetEditorialCategories(): Observable<EditorialCategoryResults> {
			return this.http.get<EditorialCategoryResults>(this.baseUri + 'v2/editorial/categories', {});
		}

		/**
		 * List editorial categories
		 * This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
		 * Get v2/editorial/images/categories
		 * @return {EditorialImageCategoryResults} OK
		 */
		ListEditorialImageCategories(): Observable<EditorialImageCategoryResults> {
			return this.http.get<EditorialImageCategoryResults>(this.baseUri + 'v2/editorial/images/categories', {});
		}

		/**
		 * List editorial image licenses
		 * This endpoint lists existing editorial image licenses.
		 * Get v2/editorial/images/licenses
		 * @param {string} image_id Show licenses for the specified editorial image ID
		 * @param {string} license Show editorial images that are available with the specified license name
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @param {string} username Filter licenses by username of licensee
		 * @param {Date} start_date Show licenses created on or after the specified date
		 * @param {Date} end_date Show licenses created before the specified date
		 * @param {GetTrackLicenseListDownload_availability} download_availability Filter licenses by download availability
		 * @param {boolean} team_history Set to true to see license history for all members of your team.
		 * @return {DownloadHistoryDataList} OK
		 */
		GetEditorialImageLicenseList(image_id: string | null | undefined, license: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, username: string | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, download_availability: GetTrackLicenseListDownload_availability | null | undefined, team_history: boolean | null | undefined): Observable<DownloadHistoryDataList> {
			return this.http.get<DownloadHistoryDataList>(this.baseUri + 'v2/editorial/images/licenses?image_id=' + (image_id == null ? '' : encodeURIComponent(image_id)) + '&license=' + (license == null ? '' : encodeURIComponent(license)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&download_availability=' + download_availability + '&team_history=' + team_history, {});
		}

		/**
		 * License editorial content
		 * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
		 * Post v2/editorial/images/licenses
		 * @param {LicenseEditorialContentRequest} requestBody License editorial content
		 * @return {LicenseEditorialContentResults} OK
		 */
		LicenseEditorialImages(requestBody: LicenseEditorialContentRequest): Observable<LicenseEditorialContentResults> {
			return this.http.post<LicenseEditorialContentResults>(this.baseUri + 'v2/editorial/images/licenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get editorial livefeed list
		 * Get v2/editorial/images/livefeeds
		 * @param {string} country Returns only livefeeds that are available for distribution in a certain country
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @return {EditorialImageLivefeedList} OK
		 */
		GetEditorialImageLivefeedList(country: string, page: number | null | undefined, per_page: number | null | undefined): Observable<EditorialImageLivefeedList> {
			return this.http.get<EditorialImageLivefeedList>(this.baseUri + 'v2/editorial/images/livefeeds?country=' + (country == null ? '' : encodeURIComponent(country)) + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Get editorial livefeed
		 * Get v2/editorial/images/livefeeds/{id}
		 * @param {string} id Editorial livefeed ID; must be an URI encoded string
		 * @param {string} country Returns only if the livefeed is available for distribution in a certain country
		 * @return {EditorialImageLivefeed} OK
		 */
		GetEditorialImageLivefeed(id: string, country: string): Observable<EditorialImageLivefeed> {
			return this.http.get<EditorialImageLivefeed>(this.baseUri + 'v2/editorial/images/livefeeds/' + (id == null ? '' : encodeURIComponent(id)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * Get editorial livefeed items
		 * Get v2/editorial/images/livefeeds/{id}/items
		 * @param {string} id Editorial livefeed ID; must be an URI encoded string
		 * @param {string} country Returns only if the livefeed items are available for distribution in a certain country
		 * @return {EditorialImageContentDataList} OK
		 */
		GetEditorialImageLivefeedItems(id: string, country: string): Observable<EditorialImageContentDataList> {
			return this.http.get<EditorialImageContentDataList>(this.baseUri + 'v2/editorial/images/livefeeds/' + (id == null ? '' : encodeURIComponent(id)) + '/items&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * Search editorial images
		 * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
		 * Get v2/editorial/images/search
		 * @param {string} query One or more search terms separated by spaces
		 * @param {SearchEditorialImagesSort} sort Sort by
		 * @param {string} category Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
		 * @param {string} country Show only editorial content that is available for distribution in a certain country
		 * @param {Array<string>} supplier_code Show only editorial content from certain suppliers
		 * @param {Date} date_start Show only editorial content generated on or after a specific date
		 * @param {Date} date_end Show only editorial content generated on or before a specific date
		 * @param {number} per_page Number of results per page
		 * @param {string} cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
		 * @return {EditorialSearchResults} OK
		 */
		SearchEditorialImages(query: string | null | undefined, sort: SearchEditorialImagesSort | null | undefined, category: string | null | undefined, country: string, supplier_code: Array<string> | null | undefined, date_start: Date | null | undefined, date_end: Date | null | undefined, per_page: number | null | undefined, cursor: string | null | undefined): Observable<EditorialSearchResults> {
			return this.http.get<EditorialSearchResults>(this.baseUri + 'v2/editorial/images/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&' + supplier_code?.map(z => `supplier_code=${encodeURIComponent(z)}`).join('&') + '&date_start=' + date_start?.toISOString() + '&date_end=' + date_end?.toISOString() + '&per_page=' + per_page + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), {});
		}

		/**
		 * List updated content
		 * This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
		 * Get v2/editorial/images/updated
		 * @param {GetUpdatedEditorialImagesType} type Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted
		 * @param {Date} date_updated_start Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
		 * @param {Date} date_updated_end Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
		 * @param {Date} date_taken_start Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets
		 * @param {Date} date_taken_end Show images that were taken before the specified date
		 * @param {string} cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
		 * @param {GetTrackCollectionItemsSort} sort Sort by
		 * @param {Array<string>} supplier_code Show only editorial content from certain suppliers
		 * @param {string} country Show only editorial content that is available for distribution in a certain country
		 * @param {number} per_page Number of results per page
		 * @return {EditorialUpdatedResults} OK
		 */
		GetUpdatedEditorialImages(type: GetUpdatedEditorialImagesType, date_updated_start: Date, date_updated_end: Date, date_taken_start: Date | null | undefined, date_taken_end: Date | null | undefined, cursor: string | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, supplier_code: Array<string> | null | undefined, country: string, per_page: number | null | undefined): Observable<EditorialUpdatedResults> {
			return this.http.get<EditorialUpdatedResults>(this.baseUri + 'v2/editorial/images/updated?type=' + type + '&date_updated_start=' + date_updated_start.toISOString() + '&date_updated_end=' + date_updated_end.toISOString() + '&date_taken_start=' + date_taken_start?.toISOString() + '&date_taken_end=' + date_taken_end?.toISOString() + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&sort=' + sort + '&' + supplier_code?.map(z => `supplier_code=${encodeURIComponent(z)}`).join('&') + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&per_page=' + per_page, {});
		}

		/**
		 * Get editorial content details
		 * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
		 * Get v2/editorial/images/{id}
		 * @param {string} id Editorial ID
		 * @param {string} country Returns only if the content is available for distribution in a certain country
		 * @return {EditorialContent} OK
		 */
		GetEditorialImage(id: string, country: string): Observable<EditorialContent> {
			return this.http.get<EditorialContent>(this.baseUri + 'v2/editorial/images/' + (id == null ? '' : encodeURIComponent(id)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * (Deprecated) License editorial content
		 * Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
		 * Post v2/editorial/licenses
		 * @param {LicenseEditorialContentRequest} requestBody License editorial content
		 * @return {LicenseEditorialContentResults} OK
		 */
		LicenseEditorialImage(requestBody: LicenseEditorialContentRequest): Observable<LicenseEditorialContentResults> {
			return this.http.post<LicenseEditorialContentResults>(this.baseUri + 'v2/editorial/licenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * (Deprecated) Get editorial livefeed list
		 * Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
		 * Get v2/editorial/livefeeds
		 * @param {string} country Returns only livefeeds that are available for distribution in a certain country
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @return {EditorialLivefeedList} OK
		 */
		GetEditorialLivefeedList(country: string, page: number | null | undefined, per_page: number | null | undefined): Observable<EditorialLivefeedList> {
			return this.http.get<EditorialLivefeedList>(this.baseUri + 'v2/editorial/livefeeds?country=' + (country == null ? '' : encodeURIComponent(country)) + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * (Deprecated) Get editorial livefeed
		 * Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
		 * Get v2/editorial/livefeeds/{id}
		 * @param {string} id Editorial livefeed ID; must be an URI encoded string
		 * @param {string} country Returns only if the livefeed is available for distribution in a certain country
		 * @return {EditorialLivefeed} OK
		 */
		GetEditorialLivefeed(id: string, country: string): Observable<EditorialLivefeed> {
			return this.http.get<EditorialLivefeed>(this.baseUri + 'v2/editorial/livefeeds/' + (id == null ? '' : encodeURIComponent(id)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * (Deprecated) Get editorial livefeed items
		 * Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
		 * Get v2/editorial/livefeeds/{id}/items
		 * @param {string} id Editorial livefeed ID; must be an URI encoded string
		 * @param {string} country Returns only if the livefeed items are available for distribution in a certain country
		 * @return {EditorialContentDataList} OK
		 */
		GetEditorialLivefeedItems(id: string, country: string): Observable<EditorialContentDataList> {
			return this.http.get<EditorialContentDataList>(this.baseUri + 'v2/editorial/livefeeds/' + (id == null ? '' : encodeURIComponent(id)) + '/items&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * (Deprecated) Search editorial content
		 * Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
		 * Get v2/editorial/search
		 * @param {string} query One or more search terms separated by spaces
		 * @param {SearchEditorialImagesSort} sort Sort by
		 * @param {string} category Show editorial content within a certain editorial category; specify by category name
		 * @param {string} country Show only editorial content that is available for distribution in a certain country
		 * @param {Array<string>} supplier_code Show only editorial content from certain suppliers
		 * @param {Date} date_start Show only editorial content generated on or after a specific date
		 * @param {Date} date_end Show only editorial content generated on or before a specific date
		 * @param {number} per_page Number of results per page
		 * @param {string} cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
		 * @return {EditorialSearchResults} OK
		 */
		SearchEditorial(query: string | null | undefined, sort: SearchEditorialImagesSort | null | undefined, category: string | null | undefined, country: string, supplier_code: Array<string> | null | undefined, date_start: Date | null | undefined, date_end: Date | null | undefined, per_page: number | null | undefined, cursor: string | null | undefined): Observable<EditorialSearchResults> {
			return this.http.get<EditorialSearchResults>(this.baseUri + 'v2/editorial/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&' + supplier_code?.map(z => `supplier_code=${encodeURIComponent(z)}`).join('&') + '&date_start=' + date_start?.toISOString() + '&date_end=' + date_end?.toISOString() + '&per_page=' + per_page + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), {});
		}

		/**
		 * (Deprecated) List updated content
		 * Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
		 * Get v2/editorial/updated
		 * @param {GetUpdatedEditorialImagesType} type Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted
		 * @param {Date} date_updated_start Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
		 * @param {Date} date_updated_end Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
		 * @param {Date} date_taken_start Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets
		 * @param {Date} date_taken_end Show images that were taken before the specified date
		 * @param {string} cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
		 * @param {GetTrackCollectionItemsSort} sort Sort by
		 * @param {Array<string>} supplier_code Show only editorial content from certain suppliers
		 * @param {string} country Show only editorial content that is available for distribution in a certain country
		 * @param {number} per_page Number of results per page
		 * @return {EditorialUpdatedResults} OK
		 */
		GetUpdatedEditorialImage(type: GetUpdatedEditorialImagesType, date_updated_start: Date, date_updated_end: Date, date_taken_start: Date | null | undefined, date_taken_end: Date | null | undefined, cursor: string | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, supplier_code: Array<string> | null | undefined, country: string, per_page: number | null | undefined): Observable<EditorialUpdatedResults> {
			return this.http.get<EditorialUpdatedResults>(this.baseUri + 'v2/editorial/updated?type=' + type + '&date_updated_start=' + date_updated_start.toISOString() + '&date_updated_end=' + date_updated_end.toISOString() + '&date_taken_start=' + date_taken_start?.toISOString() + '&date_taken_end=' + date_taken_end?.toISOString() + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&sort=' + sort + '&' + supplier_code?.map(z => `supplier_code=${encodeURIComponent(z)}`).join('&') + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&per_page=' + per_page, {});
		}

		/**
		 * List editorial video categories
		 * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
		 * Get v2/editorial/videos/categories
		 * @return {EditorialVideoCategoryResults} OK
		 */
		ListEditorialVideoCategories(): Observable<EditorialVideoCategoryResults> {
			return this.http.get<EditorialVideoCategoryResults>(this.baseUri + 'v2/editorial/videos/categories', {});
		}

		/**
		 * List editorial video licenses
		 * This endpoint lists existing editorial video licenses.
		 * Get v2/editorial/videos/licenses
		 * @param {string} video_id Show licenses for the specified editorial video ID
		 * @param {string} license Show editorial videos that are available with the specified license name
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @param {string} username Filter licenses by username of licensee
		 * @param {Date} start_date Show licenses created on or after the specified date
		 * @param {Date} end_date Show licenses created before the specified date
		 * @param {GetTrackLicenseListDownload_availability} download_availability Filter licenses by download availability
		 * @param {boolean} team_history Set to true to see license history for all members of your team.
		 * @return {DownloadHistoryDataList} OK
		 */
		GetEditorialVideoLicenseList(video_id: string | null | undefined, license: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, username: string | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, download_availability: GetTrackLicenseListDownload_availability | null | undefined, team_history: boolean | null | undefined): Observable<DownloadHistoryDataList> {
			return this.http.get<DownloadHistoryDataList>(this.baseUri + 'v2/editorial/videos/licenses?video_id=' + (video_id == null ? '' : encodeURIComponent(video_id)) + '&license=' + (license == null ? '' : encodeURIComponent(license)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&download_availability=' + download_availability + '&team_history=' + team_history, {});
		}

		/**
		 * License editorial video content
		 * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
		 * Post v2/editorial/videos/licenses
		 * @param {LicenseEditorialVideoContentRequest} requestBody License editorial video content
		 * @return {LicenseEditorialContentResults} OK
		 */
		LicenseEditorialVideo(requestBody: LicenseEditorialVideoContentRequest): Observable<LicenseEditorialContentResults> {
			return this.http.post<LicenseEditorialContentResults>(this.baseUri + 'v2/editorial/videos/licenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search editorial video content
		 * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
		 * Get v2/editorial/videos/search
		 * @param {string} query One or more search terms separated by spaces
		 * @param {SearchEditorialImagesSort} sort Sort by
		 * @param {string} category Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
		 * @param {string} country Show only editorial video content that is available for distribution in a certain country
		 * @param {Array<string>} supplier_code Show only editorial video content from certain suppliers
		 * @param {Date} date_start Show only editorial video content generated on or after a specific date
		 * @param {Date} date_end Show only editorial video content generated on or before a specific date
		 * @param {SearchEditorialVideosResolution} resolution Show only editorial video content with specific resolution
		 * @param {number} fps Show only editorial video content generated with specific frames per second
		 * @param {number} per_page Number of results per page
		 * @param {string} cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
		 * @return {EditorialVideoSearchResults} OK
		 */
		SearchEditorialVideos(query: string | null | undefined, sort: SearchEditorialImagesSort | null | undefined, category: string | null | undefined, country: string, supplier_code: Array<string> | null | undefined, date_start: Date | null | undefined, date_end: Date | null | undefined, resolution: SearchEditorialVideosResolution | null | undefined, fps: number | null | undefined, per_page: number | null | undefined, cursor: string | null | undefined): Observable<EditorialVideoSearchResults> {
			return this.http.get<EditorialVideoSearchResults>(this.baseUri + 'v2/editorial/videos/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&' + supplier_code?.map(z => `supplier_code=${encodeURIComponent(z)}`).join('&') + '&date_start=' + date_start?.toISOString() + '&date_end=' + date_end?.toISOString() + '&resolution=' + resolution + '&fps=' + fps + '&per_page=' + per_page + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), {});
		}

		/**
		 * Get editorial video content details
		 * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
		 * Get v2/editorial/videos/{id}
		 * @param {string} id Editorial ID
		 * @param {string} country Returns only if the content is available for distribution in a certain country
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {EditorialVideoContent} OK
		 */
		GetEditorialVideo(id: string, country: string, search_id: string | null | undefined): Observable<EditorialVideoContent> {
			return this.http.get<EditorialVideoContent>(this.baseUri + 'v2/editorial/videos/' + (id == null ? '' : encodeURIComponent(id)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * (Deprecated) Get editorial content details
		 * Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
		 * Get v2/editorial/{id}
		 * @param {string} id Editorial ID
		 * @param {string} country Returns only if the content is available for distribution in a certain country
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {EditorialContent} OK
		 */
		Editorial_imagesGetByIdAndCountryAndSearch_id(id: string, country: string, search_id: string | null | undefined): Observable<EditorialContent> {
			return this.http.get<EditorialContent>(this.baseUri + 'v2/editorial/' + (id == null ? '' : encodeURIComponent(id)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * List images
		 * This endpoint lists information about one or more images, including the available sizes.
		 * Get v2/images
		 * @param {Array<string>} id One or more image IDs
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {ImageDataList} OK
		 */
		GetImageList(id: Array<string>, view: SearchImageView | null | undefined, search_id: string | null | undefined): Observable<ImageDataList> {
			return this.http.get<ImageDataList>(this.baseUri + 'v2/images?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&view=' + view + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * Upload ephemeral images
		 * Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.
		 * Post v2/images
		 * @param {ImageCreateRequest} requestBody The image data in JPEG or PNG format
		 * @return {void} 
		 */
		UploadEphemeralImage(requestBody: ImageCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/images', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List image categories
		 * This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
		 * Get v2/images/categories
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @return {CategoryDataList} OK
		 */
		ListImageCategories(language: SearchImageLanguage | null | undefined): Observable<CategoryDataList> {
			return this.http.get<CategoryDataList>(this.baseUri + 'v2/images/categories?language=' + language, {});
		}

		/**
		 * List image collections
		 * This endpoint lists your collections of images and their basic attributes.
		 * Get v2/images/collections
		 * @param {Array<string>} embed Which sharing information to include in the response, such as a URL to the collection
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @return {CollectionDataList} OK
		 */
		GetImageCollectionList(embed: Array<string> | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<CollectionDataList> {
			return this.http.get<CollectionDataList>(this.baseUri + 'v2/images/collections?' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create image collections
		 * This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
		 * Post v2/images/collections
		 * @param {CollectionCreateRequest} requestBody The names of the new collections
		 * @return {void} 
		 */
		CreateImageCollection(requestBody: CollectionCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/images/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List featured image collections
		 * This endpoint lists featured collections of specific types and a name and cover image for each collection.
		 * Get v2/images/collections/featured
		 * @param {GetFeaturedImageCollectionListEmbed} embed Which sharing information to include in the response, such as a URL to the collection
		 * @param {Array<string>} type The types of collections to return
		 * @param {GetFeaturedImageCollectionListAsset_hint} asset_hint Cover image size
		 * @return {FeaturedCollectionDataList} OK
		 */
		GetFeaturedImageCollectionList(embed: GetFeaturedImageCollectionListEmbed | null | undefined, type: Array<string> | null | undefined, asset_hint: GetFeaturedImageCollectionListAsset_hint | null | undefined): Observable<FeaturedCollectionDataList> {
			return this.http.get<FeaturedCollectionDataList>(this.baseUri + 'v2/images/collections/featured?embed=' + embed + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&asset_hint=' + asset_hint, {});
		}

		/**
		 * Get the details of featured image collections
		 * This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.
		 * Get v2/images/collections/featured/{id}
		 * @param {string} id Collection ID
		 * @param {GetFeaturedImageCollectionListEmbed} embed Which sharing information to include in the response, such as a URL to the collection
		 * @param {GetFeaturedImageCollectionListAsset_hint} asset_hint Cover image size
		 * @return {FeaturedCollection} OK
		 */
		GetFeaturedImageCollection(id: string, embed: GetFeaturedImageCollectionListEmbed | null | undefined, asset_hint: GetFeaturedImageCollectionListAsset_hint | null | undefined): Observable<FeaturedCollection> {
			return this.http.get<FeaturedCollection>(this.baseUri + 'v2/images/collections/featured/' + (id == null ? '' : encodeURIComponent(id)) + '&embed=' + embed + '&asset_hint=' + asset_hint, {});
		}

		/**
		 * Get the contents of featured image collections
		 * This endpoint lists the IDs of images in a featured collection and the date that each was added.
		 * Get v2/images/collections/featured/{id}/items
		 * @param {string} id Collection ID
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @return {CollectionItemDataList} OK
		 */
		GetFeaturedImageCollectionItems(id: string, page: number | null | undefined, per_page: number | null | undefined): Observable<CollectionItemDataList> {
			return this.http.get<CollectionItemDataList>(this.baseUri + 'v2/images/collections/featured/' + (id == null ? '' : encodeURIComponent(id)) + '/items&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Delete image collections
		 * This endpoint deletes an image collection.
		 * Delete v2/images/collections/{id}
		 * @param {string} id Collection ID
		 * @return {void} 
		 */
		DeleteImageCollection(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/images/collections/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of image collections
		 * This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
		 * Get v2/images/collections/{id}
		 * @param {string} id Collection ID
		 * @param {Array<string>} embed Which sharing information to include in the response, such as a URL to the collection
		 * @param {string} share_code Code to retrieve a shared collection
		 * @return {Collection} OK
		 */
		GetImageCollection(id: string, embed: Array<string> | null | undefined, share_code: string | null | undefined): Observable<Collection> {
			return this.http.get<Collection>(this.baseUri + 'v2/images/collections/' + (id == null ? '' : encodeURIComponent(id)) + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&') + '&share_code=' + (share_code == null ? '' : encodeURIComponent(share_code)), {});
		}

		/**
		 * Rename image collections
		 * This endpoint sets a new name for an image collection.
		 * Post v2/images/collections/{id}
		 * @param {string} id Collection ID
		 * @param {CollectionUpdateRequest} requestBody The new name for the collection
		 * @return {void} 
		 */
		RenameImageCollection(id: string, requestBody: CollectionUpdateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/images/collections/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove images from collections
		 * This endpoint removes one or more images from a collection.
		 * Delete v2/images/collections/{id}/items
		 * @param {string} id Collection ID
		 * @param {Array<string>} item_id One or more image IDs to remove from the collection
		 * @return {void} 
		 */
		DeleteImageCollectionItems(id: string, item_id: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/images/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items&' + item_id?.map(z => `item_id=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the contents of image collections
		 * This endpoint lists the IDs of images in a collection and the date that each was added.
		 * Get v2/images/collections/{id}/items
		 * @param {string} id Collection ID
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {string} share_code Code to retrieve the contents of a shared collection
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @return {CollectionItemDataList} OK
		 */
		GetImageCollectionItems(id: string, page: number | null | undefined, per_page: number | null | undefined, share_code: string | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined): Observable<CollectionItemDataList> {
			return this.http.get<CollectionItemDataList>(this.baseUri + 'v2/images/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items&page=' + page + '&per_page=' + per_page + '&share_code=' + (share_code == null ? '' : encodeURIComponent(share_code)) + '&sort=' + sort, {});
		}

		/**
		 * Add images to collections
		 * This endpoint adds one or more images to a collection by image IDs.
		 * Post v2/images/collections/{id}/items
		 * @param {string} id Collection ID
		 * @param {CollectionItemRequest} requestBody Array of image IDs to add to the collection
		 * @return {void} 
		 */
		AddImageCollectionItems(id: string, requestBody: CollectionItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/images/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List image licenses
		 * This endpoint lists existing licenses.
		 * Get v2/images/licenses
		 * @param {string} image_id Show licenses for the specified image ID
		 * @param {string} license Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @param {string} username Filter licenses by username of licensee
		 * @param {Date} start_date Show licenses created on or after the specified date
		 * @param {Date} end_date Show licenses created before the specified date
		 * @param {GetTrackLicenseListDownload_availability} download_availability Filter licenses by download availability
		 * @param {boolean} team_history Set to true to see license history for all members of your team.
		 * @return {DownloadHistoryDataList} OK
		 */
		GetImageLicenseList(image_id: string | null | undefined, license: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, username: string | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, download_availability: GetTrackLicenseListDownload_availability | null | undefined, team_history: boolean | null | undefined): Observable<DownloadHistoryDataList> {
			return this.http.get<DownloadHistoryDataList>(this.baseUri + 'v2/images/licenses?image_id=' + (image_id == null ? '' : encodeURIComponent(image_id)) + '&license=' + (license == null ? '' : encodeURIComponent(license)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&download_availability=' + download_availability + '&team_history=' + team_history, {});
		}

		/**
		 * License images
		 * This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
		 * Post v2/images/licenses
		 * @param {string} subscription_id Subscription ID to use to license the image
		 * @param {LicenseImagesFormat} format (Deprecated) Image format
		 * @param {LicenseImagesSize} size Image size
		 * @param {string} search_id Search ID that was provided in the results of an image search
		 * @param {LicenseImageRequest} requestBody List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters
		 * @return {LicenseImageResultDataList} OK
		 */
		LicenseImages(subscription_id: string | null | undefined, format: LicenseImagesFormat | null | undefined, size: LicenseImagesSize | null | undefined, search_id: string | null | undefined, requestBody: LicenseImageRequest): Observable<LicenseImageResultDataList> {
			return this.http.post<LicenseImageResultDataList>(this.baseUri + 'v2/images/licenses?subscription_id=' + (subscription_id == null ? '' : encodeURIComponent(subscription_id)) + '&format=' + format + '&size=' + size + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download images
		 * This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.
		 * Post v2/images/licenses/{id}/downloads
		 * @param {string} id License ID
		 * @param {RedownloadImage} requestBody Information about the images to redownload
		 * @return {Url} OK
		 */
		DownloadImage(id: string, requestBody: RedownloadImage): Observable<Url> {
			return this.http.post<Url>(this.baseUri + 'v2/images/licenses/' + (id == null ? '' : encodeURIComponent(id)) + '/downloads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List recommended images
		 * This endpoint returns images that customers put in the same collection as the specified image IDs.
		 * Get v2/images/recommendations
		 * @param {Array<string>} id Image IDs
		 * @param {number} max_items Maximum number of results returned in the response
		 * @param {boolean} safe Restrict results to safe images
		 * @return {RecommendationDataList} OK
		 */
		GetImageRecommendations(id: Array<string>, max_items: number | null | undefined, safe: boolean | null | undefined): Observable<RecommendationDataList> {
			return this.http.get<RecommendationDataList>(this.baseUri + 'v2/images/recommendations?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&max_items=' + max_items + '&safe=' + safe, {});
		}

		/**
		 * Search for images
		 * This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
		 * Get v2/images/search
		 * @param {Date} added_date Show images added on the specified date
		 * @param {Date} added_date_start Show images added on or after the specified date
		 * @param {number} aspect_ratio_min Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * @param {number} aspect_ratio_max Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * @param {number} aspect_ratio Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
		 * @param {boolean} ai_search Set to true and specify the `ai_objective` and `ai_industry` parameters to use AI-powered search; the API returns information about how well images meet the objective for the industry 
		 * @param {number} ai_labels_limit For AI-powered search, specify the maximum number of labels to return
		 * @param {SearchImagesAi_industry} ai_industry For AI-powered search, specify the industry to target; requires that the `ai_search` parameter is set to true
		 * @param {SearchImagesAi_objective} ai_objective For AI-powered search, specify the goal of the media; requires that the `ai_search` parameter is set to true
		 * @param {Date} added_date_end Show images added before the specified date
		 * @param {string} category Show images with the specified Shutterstock-defined category; specify a category name or ID
		 * @param {string} color Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
		 * @param {Array<string>} contributor Show images with the specified contributor names or IDs, allows multiple
		 * @param {Array<string>} contributor_country Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
		 * @param {string} fields Fields to display in the response; see the documentation for the fields parameter in the overview section
		 * @param {number} height (Deprecated; use height_from and height_to instead) Show images with the specified height
		 * @param {number} height_from Show images with the specified height or larger, in pixels
		 * @param {number} height_to Show images with the specified height or smaller, in pixels
		 * @param {Array<string>} image_type Show images of the specified type
		 * @param {boolean} keyword_safe_search Hide results with potentially unsafe keywords
		 * @param {SearchImageLanguage} language Set query and result language (uses Accept-Language header if not set)
		 * @param {Array<string>} license Show only images with the specified license
		 * @param {Array<string>} model Show image results with the specified model IDs
		 * @param {SearchImageOrientation} orientation Show image results with horizontal or vertical orientation
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {boolean} people_model_released Show images of people with a signed model release
		 * @param {SearchImagePeople_age} people_age Show images that feature people of the specified age category
		 * @param {Array<string>} people_ethnicity Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
		 * @param {SearchImagePeople_gender} people_gender Show images with people of the specified gender
		 * @param {number} people_number Show images with the specified number of people
		 * @param {string} query One or more search terms separated by spaces; you can use NOT to filter out images that match a term
		 * @param {string} region Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
		 * @param {boolean} safe Enable or disable safe search
		 * @param {SearchImageSort} sort Sort by
		 * @param {boolean} spellcheck_query Spellcheck the search query and return results on suggested spellings
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {number} width (Deprecated; use width_from and width_to instead) Show images with the specified width
		 * @param {number} width_from Show images with the specified width or larger, in pixels
		 * @param {number} width_to Show images with the specified width or smaller, in pixels
		 * @return {ImageSearchResults} OK
		 */
		SearchImages(added_date: Date | null | undefined, added_date_start: Date | null | undefined, aspect_ratio_min: number | null | undefined, aspect_ratio_max: number | null | undefined, aspect_ratio: number | null | undefined, ai_search: boolean | null | undefined, ai_labels_limit: number | null | undefined, ai_industry: SearchImagesAi_industry | null | undefined, ai_objective: SearchImagesAi_objective | null | undefined, added_date_end: Date | null | undefined, category: string | null | undefined, color: string | null | undefined, contributor: Array<string> | null | undefined, contributor_country: Array<string> | null | undefined, fields: string | null | undefined, height: number | null | undefined, height_from: number | null | undefined, height_to: number | null | undefined, image_type: Array<string> | null | undefined, keyword_safe_search: boolean | null | undefined, language: SearchImageLanguage | null | undefined, license: Array<string> | null | undefined, model: Array<string> | null | undefined, orientation: SearchImageOrientation | null | undefined, page: number | null | undefined, per_page: number | null | undefined, people_model_released: boolean | null | undefined, people_age: SearchImagePeople_age | null | undefined, people_ethnicity: Array<string> | null | undefined, people_gender: SearchImagePeople_gender | null | undefined, people_number: number | null | undefined, query: string | null | undefined, region: string | null | undefined, safe: boolean | null | undefined, sort: SearchImageSort | null | undefined, spellcheck_query: boolean | null | undefined, view: SearchImageView | null | undefined, width: number | null | undefined, width_from: number | null | undefined, width_to: number | null | undefined): Observable<ImageSearchResults> {
			return this.http.get<ImageSearchResults>(this.baseUri + 'v2/images/search?added_date=' + added_date?.toISOString() + '&added_date_start=' + added_date_start?.toISOString() + '&aspect_ratio_min=' + aspect_ratio_min + '&aspect_ratio_max=' + aspect_ratio_max + '&aspect_ratio=' + aspect_ratio + '&ai_search=' + ai_search + '&ai_labels_limit=' + ai_labels_limit + '&ai_industry=' + ai_industry + '&ai_objective=' + ai_objective + '&added_date_end=' + added_date_end?.toISOString() + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&color=' + (color == null ? '' : encodeURIComponent(color)) + '&' + contributor?.map(z => `contributor=${encodeURIComponent(z)}`).join('&') + '&' + contributor_country?.map(z => `contributor_country=${encodeURIComponent(z)}`).join('&') + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&height=' + height + '&height_from=' + height_from + '&height_to=' + height_to + '&' + image_type?.map(z => `image_type=${encodeURIComponent(z)}`).join('&') + '&keyword_safe_search=' + keyword_safe_search + '&language=' + language + '&' + license?.map(z => `license=${encodeURIComponent(z)}`).join('&') + '&' + model?.map(z => `model=${encodeURIComponent(z)}`).join('&') + '&orientation=' + orientation + '&page=' + page + '&per_page=' + per_page + '&people_model_released=' + people_model_released + '&people_age=' + people_age + '&' + people_ethnicity?.map(z => `people_ethnicity=${encodeURIComponent(z)}`).join('&') + '&people_gender=' + people_gender + '&people_number=' + people_number + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&region=' + (region == null ? '' : encodeURIComponent(region)) + '&safe=' + safe + '&sort=' + sort + '&spellcheck_query=' + spellcheck_query + '&view=' + view + '&width=' + width + '&width_from=' + width_from + '&width_to=' + width_to, {});
		}

		/**
		 * Get suggestions for a search term
		 * This endpoint provides autocomplete suggestions for partial search terms.
		 * Get v2/images/search/suggestions
		 * @param {string} query Search term for which you want keyword suggestions
		 * @param {number} limit Limit the number of suggestions
		 * @return {Suggestions} OK
		 */
		GetImageSuggestions(query: string, limit: number | null | undefined): Observable<Suggestions> {
			return this.http.get<Suggestions>(this.baseUri + 'v2/images/search/suggestions?query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit, {});
		}

		/**
		 * Get keywords from text
		 * This endpoint returns up to 10 important keywords from a block of plain text.
		 * Post v2/images/search/suggestions
		 * @param {SearchEntitiesRequest} requestBody Plain text to extract keywords from
		 * @return {SearchEntitiesResponse} OK
		 */
		GetImageKeywordSuggestions(requestBody: SearchEntitiesRequest): Observable<SearchEntitiesResponse> {
			return this.http.post<SearchEntitiesResponse>(this.baseUri + 'v2/images/search/suggestions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List updated images
		 * This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
		 * Get v2/images/updated
		 * @param {Array<string>} type Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways
		 * @param {Date} start_date Show images updated on or after the specified date
		 * @param {Date} end_date Show images updated before the specified date
		 * @param {string} interval Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @return {UpdatedMediaDataList} OK
		 */
		GetUpdatedImages(type: Array<string> | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, interval: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined): Observable<UpdatedMediaDataList> {
			return this.http.get<UpdatedMediaDataList>(this.baseUri + 'v2/images/updated?' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Get details about images
		 * This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
		 * Get v2/images/{id}
		 * @param {string} id Image ID
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {Image} OK
		 */
		GetImage(id: string, language: SearchImageLanguage | null | undefined, view: SearchImageView | null | undefined, search_id: string | null | undefined): Observable<Image> {
			return this.http.get<Image>(this.baseUri + 'v2/images/' + (id == null ? '' : encodeURIComponent(id)) + '&language=' + language + '&view=' + view + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * List similar images
		 * This endpoint returns images that are visually similar to an image that you specify.
		 * Get v2/images/{id}/similar
		 * @param {string} id Image ID
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @return {ImageSearchResults} OK
		 */
		ListSimilarImages(id: string, language: SearchImageLanguage | null | undefined, page: number | null | undefined, per_page: number | null | undefined, view: SearchImageView | null | undefined): Observable<ImageSearchResults> {
			return this.http.get<ImageSearchResults>(this.baseUri + 'v2/images/' + (id == null ? '' : encodeURIComponent(id)) + '/similar&language=' + language + '&page=' + page + '&per_page=' + per_page + '&view=' + view, {});
		}

		/**
		 * Get access tokens
		 * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
		 * Post v2/oauth/access_token
		 * @return {OauthAccessTokenResponse} OK
		 */
		CreateAccessToken(requestBody: CreateAccessTokenPostBody): Observable<OauthAccessTokenResponse> {
			return this.http.post<OauthAccessTokenResponse>(this.baseUri + 'v2/oauth/access_token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authorize applications
		 * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
		 * Get v2/oauth/authorize
		 * @param {string} client_id Client ID (Consumer Key) of your application
		 * @param {AccessTokenDetailsRealm} realm User type to be authorized (usually 'customer')
		 * @param {string} redirect_uri The callback URI to send the request to after authorization; must use a host name that is registered with your application
		 * @param {AuthorizeResponse_type} response_type Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'
		 * @param {string} scope Space-separated list of scopes to be authorized
		 * @param {string} state Unique value used by the calling app to verify the request
		 * @return {void} 
		 */
		Authorize(client_id: string, realm: AccessTokenDetailsRealm | null | undefined, redirect_uri: string, response_type: AuthorizeResponse_type, scope: string | null | undefined, state: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/oauth/authorize?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&realm=' + realm + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&response_type=' + response_type + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&state=' + (state == null ? '' : encodeURIComponent(state)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List details about sound effects
		 * This endpoint shows information about sound effects.
		 * Get v2/sfx
		 * @param {Array<string>} id One or more sound effect IDs
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {GetSfxListDetailsLibrary} library Which library to fetch from
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {SFXDataList} OK
		 */
		GetSfxListDetails(id: Array<string>, view: SearchImageView | null | undefined, language: SearchImageLanguage | null | undefined, library: GetSfxListDetailsLibrary | null | undefined, search_id: string | null | undefined): Observable<SFXDataList> {
			return this.http.get<SFXDataList>(this.baseUri + 'v2/sfx?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&view=' + view + '&language=' + language + '&library=' + library + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * List sound effects licenses
		 * This endpoint lists existing licenses.
		 * Get v2/sfx/licenses
		 * @param {string} sfx_id Show licenses for the specified sound effects ID
		 * @param {string} license Show sound effects that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @param {string} username Filter licenses by username of licensee
		 * @param {Date} start_date Show licenses created on or after the specified date
		 * @param {Date} end_date Show licenses created before the specified date
		 * @param {string} license_id Filter by the license ID
		 * @param {GetTrackLicenseListDownload_availability} download_availability Filter licenses by download availability
		 * @param {boolean} team_history Set to true to see license history for all members of your team.
		 * @return {DownloadHistoryDataList} OK
		 */
		GetSfxLicenseList(sfx_id: string | null | undefined, license: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, username: string | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, license_id: string | null | undefined, download_availability: GetTrackLicenseListDownload_availability | null | undefined, team_history: boolean | null | undefined): Observable<DownloadHistoryDataList> {
			return this.http.get<DownloadHistoryDataList>(this.baseUri + 'v2/sfx/licenses?sfx_id=' + (sfx_id == null ? '' : encodeURIComponent(sfx_id)) + '&license=' + (license == null ? '' : encodeURIComponent(license)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&license_id=' + (license_id == null ? '' : encodeURIComponent(license_id)) + '&download_availability=' + download_availability + '&team_history=' + team_history, {});
		}

		/**
		 * License sound effects
		 * This endpoint licenses sounds effect assets.
		 * Post v2/sfx/licenses
		 * @return {LicenseSFXResultDataList} OK
		 */
		LicensesSFX(requestBody: LicenseSFXRequest): Observable<LicenseSFXResultDataList> {
			return this.http.post<LicenseSFXResultDataList>(this.baseUri + 'v2/sfx/licenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download sound effects
		 * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
		 * Post v2/sfx/licenses/{id}/downloads
		 * @param {string} id License ID
		 * @return {SfxUrl} OK
		 */
		DownloadSfx(id: string): Observable<SfxUrl> {
			return this.http.post<SfxUrl>(this.baseUri + 'v2/sfx/licenses/' + (id == null ? '' : encodeURIComponent(id)) + '/downloads', null, {});
		}

		/**
		 * Search for sound effects
		 * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
		 * Get v2/sfx/search
		 * @param {Date} added_date Show sound effects added on the specified date
		 * @param {Date} added_date_start Show sound effects added on or after the specified date
		 * @param {Date} added_date_end Show sound effects added before the specified date
		 * @param {number} duration Show sound effects with the specified duration in seconds
		 * @param {number} duration_from Show sound effects with the specified duration or longer in seconds
		 * @param {number} duration_to Show sound effects with the specified duration or shorter in seconds
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {string} query One or more search terms separated by spaces
		 * @param {boolean} safe Enable or disable safe search
		 * @param {SearchSFXSort} sort Sort by
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {SearchImageLanguage} language Set query and result language (uses Accept-Language header if not set)
		 * @return {SFXSearchResults} OK
		 */
		SearchSFX(added_date: Date | null | undefined, added_date_start: Date | null | undefined, added_date_end: Date | null | undefined, duration: number | null | undefined, duration_from: number | null | undefined, duration_to: number | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, safe: boolean | null | undefined, sort: SearchSFXSort | null | undefined, view: SearchImageView | null | undefined, language: SearchImageLanguage | null | undefined): Observable<SFXSearchResults> {
			return this.http.get<SFXSearchResults>(this.baseUri + 'v2/sfx/search?added_date=' + added_date?.toISOString() + '&added_date_start=' + added_date_start?.toISOString() + '&added_date_end=' + added_date_end?.toISOString() + '&duration=' + duration + '&duration_from=' + duration_from + '&duration_to=' + duration_to + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&safe=' + safe + '&sort=' + sort + '&view=' + view + '&language=' + language, {});
		}

		/**
		 * Get details about sound effects
		 * This endpoint shows information about a sound effect.
		 * Get v2/sfx/{id}
		 * @param {number} id Audio track ID
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {GetSfxListDetailsLibrary} library Which library to fetch from
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {SFX} OK
		 */
		GetSfxDetails(id: number, language: SearchImageLanguage | null | undefined, view: SearchImageView | null | undefined, library: GetSfxListDetailsLibrary | null | undefined, search_id: string | null | undefined): Observable<SFX> {
			return this.http.get<SFX>(this.baseUri + 'v2/sfx/' + id + '?language=' + language + '&view=' + view + '&library=' + library + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * Echo text
		 * Get v2/test
		 * @param {string} text Text to echo
		 * @return {TestEcho} OK
		 */
		Echo(text: string | null | undefined): Observable<TestEcho> {
			return this.http.get<TestEcho>(this.baseUri + 'v2/test?text=' + (text == null ? '' : encodeURIComponent(text)), {});
		}

		/**
		 * Validate input
		 * Get v2/test/validate
		 * @param {number} id Integer ID
		 * @param {Array<string>} tag List of tags
		 * @return {TestValidate} OK
		 */
		Validate(id: number, tag: Array<string> | null | undefined): Observable<TestValidate> {
			return this.http.get<TestValidate>(this.baseUri + 'v2/test/validate?id=' + id + '&' + tag?.map(z => `tag=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get user details
		 * Get v2/user
		 * @return {UserDetails} OK
		 */
		GetUser(): Observable<UserDetails> {
			return this.http.get<UserDetails>(this.baseUri + 'v2/user', {});
		}

		/**
		 * Get access token details
		 * Get v2/user/access_token
		 * @return {AccessTokenDetails} OK
		 */
		GetAccessToken(): Observable<AccessTokenDetails> {
			return this.http.get<AccessTokenDetails>(this.baseUri + 'v2/user/access_token', {});
		}

		/**
		 * List user subscriptions
		 * Get v2/user/subscriptions
		 * @return {SubscriptionDataList} OK
		 */
		GetUserSubscriptionList(): Observable<SubscriptionDataList> {
			return this.http.get<SubscriptionDataList>(this.baseUri + 'v2/user/subscriptions', {});
		}

		/**
		 * List videos
		 * This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
		 * Get v2/videos
		 * @param {Array<string>} id One or more video IDs
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {VideoDataList} OK
		 */
		GetVideoList(id: Array<string>, view: SearchImageView | null | undefined, search_id: string | null | undefined): Observable<VideoDataList> {
			return this.http.get<VideoDataList>(this.baseUri + 'v2/videos?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&view=' + view + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * List video categories
		 * This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
		 * Get v2/videos/categories
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @return {CategoryDataList} OK
		 */
		ListVideoCategories(language: SearchImageLanguage | null | undefined): Observable<CategoryDataList> {
			return this.http.get<CategoryDataList>(this.baseUri + 'v2/videos/categories?language=' + language, {});
		}

		/**
		 * List video collections
		 * This endpoint lists your collections of videos and their basic attributes.
		 * Get v2/videos/collections
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {Array<string>} embed Which sharing information to include in the response, such as a URL to the collection
		 * @return {CollectionDataList} OK
		 */
		GetVideoCollectionList(page: number | null | undefined, per_page: number | null | undefined, embed: Array<string> | null | undefined): Observable<CollectionDataList> {
			return this.http.get<CollectionDataList>(this.baseUri + 'v2/videos/collections?page=' + page + '&per_page=' + per_page + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Create video collections
		 * This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
		 * Post v2/videos/collections
		 * @param {CollectionCreateRequest} requestBody Collection metadata
		 * @return {void} 
		 */
		CreateVideoCollection(requestBody: CollectionCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/videos/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List featured video collections
		 * This endpoint lists featured video collections and a name and cover video for each collection.
		 * Get v2/videos/collections/featured
		 * @param {GetFeaturedImageCollectionListEmbed} embed What information to include in the response, such as a URL to the collection
		 * @return {FeaturedCollectionDataList} OK
		 */
		GetFeaturedVideoCollectionList(embed: GetFeaturedImageCollectionListEmbed | null | undefined): Observable<FeaturedCollectionDataList> {
			return this.http.get<FeaturedCollectionDataList>(this.baseUri + 'v2/videos/collections/featured?embed=' + embed, {});
		}

		/**
		 * Get the details of featured video collections
		 * This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.
		 * Get v2/videos/collections/featured/{id}
		 * @param {string} id Collection ID
		 * @param {GetFeaturedImageCollectionListEmbed} embed What information to include in the response, such as a URL to the collection
		 * @return {FeaturedCollection} OK
		 */
		GetFeaturedVideoCollection(id: string, embed: GetFeaturedImageCollectionListEmbed | null | undefined): Observable<FeaturedCollection> {
			return this.http.get<FeaturedCollection>(this.baseUri + 'v2/videos/collections/featured/' + (id == null ? '' : encodeURIComponent(id)) + '&embed=' + embed, {});
		}

		/**
		 * Get the contents of featured video collections
		 * This endpoint lists the IDs of videos in a featured collection and the date that each was added.
		 * Get v2/videos/collections/featured/{id}/items
		 * @param {string} id Collection ID
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @return {VideoCollectionItemDataList} OK
		 */
		GetFeaturedVideoCollectionItems(id: string, page: number | null | undefined, per_page: number | null | undefined): Observable<VideoCollectionItemDataList> {
			return this.http.get<VideoCollectionItemDataList>(this.baseUri + 'v2/videos/collections/featured/' + (id == null ? '' : encodeURIComponent(id)) + '/items&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Delete video collections
		 * This endpoint deletes a collection.
		 * Delete v2/videos/collections/{id}
		 * @param {string} id The ID of the collection to delete
		 * @return {void} 
		 */
		DeleteVideoCollection(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/videos/collections/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of video collections
		 * This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
		 * Get v2/videos/collections/{id}
		 * @param {string} id The ID of the collection to return
		 * @param {Array<string>} embed Which sharing information to include in the response, such as a URL to the collection
		 * @param {string} share_code Code to retrieve a shared collection
		 * @return {Collection} OK
		 */
		GetVideoCollection(id: string, embed: Array<string> | null | undefined, share_code: string | null | undefined): Observable<Collection> {
			return this.http.get<Collection>(this.baseUri + 'v2/videos/collections/' + (id == null ? '' : encodeURIComponent(id)) + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&') + '&share_code=' + (share_code == null ? '' : encodeURIComponent(share_code)), {});
		}

		/**
		 * Rename video collections
		 * This endpoint sets a new name for a collection.
		 * Post v2/videos/collections/{id}
		 * @param {string} id The ID of the collection to rename
		 * @param {CollectionUpdateRequest} requestBody The new name for the collection
		 * @return {void} 
		 */
		RenameVideoCollection(id: string, requestBody: CollectionUpdateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/videos/collections/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove videos from collections
		 * This endpoint removes one or more videos from a collection.
		 * Delete v2/videos/collections/{id}/items
		 * @param {string} id The ID of the Collection from which items will be deleted
		 * @param {Array<string>} item_id One or more video IDs to remove from the collection
		 * @return {void} 
		 */
		DeleteVideoCollectionItems(id: string, item_id: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/videos/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items&' + item_id?.map(z => `item_id=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the contents of video collections
		 * This endpoint lists the IDs of videos in a collection and the date that each was added.
		 * Get v2/videos/collections/{id}/items
		 * @param {string} id Collection ID
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {string} share_code Code to retrieve the contents of a shared collection
		 * @param {GetTrackCollectionItemsSort} sort Sort order
		 * @return {CollectionItemDataList} OK
		 */
		GetVideoCollectionItems(id: string, page: number | null | undefined, per_page: number | null | undefined, share_code: string | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined): Observable<CollectionItemDataList> {
			return this.http.get<CollectionItemDataList>(this.baseUri + 'v2/videos/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items&page=' + page + '&per_page=' + per_page + '&share_code=' + (share_code == null ? '' : encodeURIComponent(share_code)) + '&sort=' + sort, {});
		}

		/**
		 * Add videos to collections
		 * This endpoint adds one or more videos to a collection by video IDs.
		 * Post v2/videos/collections/{id}/items
		 * @param {string} id The ID of the collection to which items should be added
		 * @param {CollectionItemRequest} requestBody Array of video IDs to add to the collection
		 * @return {void} 
		 */
		AddVideoCollectionItems(id: string, requestBody: CollectionItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/videos/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List video licenses
		 * This endpoint lists existing licenses.
		 * Get v2/videos/licenses
		 * @param {string} video_id Show licenses for the specified video ID
		 * @param {string} license Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort by oldest or newest videos first
		 * @param {string} username Filter licenses by username of licensee
		 * @param {Date} start_date Show licenses created on or after the specified date
		 * @param {Date} end_date Show licenses created before the specified date
		 * @param {GetTrackLicenseListDownload_availability} download_availability Filter licenses by download availability
		 * @param {boolean} team_history Set to true to see license history for all members of your team.
		 * @return {DownloadHistoryDataList} OK
		 */
		GetVideoLicenseList(video_id: string | null | undefined, license: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined, username: string | null | undefined, start_date: Date | null | undefined, end_date: Date | null | undefined, download_availability: GetTrackLicenseListDownload_availability | null | undefined, team_history: boolean | null | undefined): Observable<DownloadHistoryDataList> {
			return this.http.get<DownloadHistoryDataList>(this.baseUri + 'v2/videos/licenses?video_id=' + (video_id == null ? '' : encodeURIComponent(video_id)) + '&license=' + (license == null ? '' : encodeURIComponent(license)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&download_availability=' + download_availability + '&team_history=' + team_history, {});
		}

		/**
		 * License videos
		 * This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
		 * Post v2/videos/licenses
		 * @param {string} subscription_id The subscription ID to use for licensing
		 * @param {LicenseVideoSize} size The size of the video to license
		 * @param {string} search_id The Search ID that led to this licensing event
		 * @param {LicenseVideoRequest} requestBody List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters
		 * @return {LicenseVideoResultDataList} OK
		 */
		LicenseVideos(subscription_id: string | null | undefined, size: LicenseVideoSize | null | undefined, search_id: string | null | undefined, requestBody: LicenseVideoRequest): Observable<LicenseVideoResultDataList> {
			return this.http.post<LicenseVideoResultDataList>(this.baseUri + 'v2/videos/licenses?subscription_id=' + (subscription_id == null ? '' : encodeURIComponent(subscription_id)) + '&size=' + size + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download videos
		 * This endpoint redownloads videos that you have already received a license for.
		 * Post v2/videos/licenses/{id}/downloads
		 * @param {string} id The license ID of the item to (re)download. The download links in the response are valid for 8 hours.
		 * @param {RedownloadVideo} requestBody Information about the videos to redownload
		 * @return {Url} OK
		 */
		DownloadVideos(id: string, requestBody: RedownloadVideo): Observable<Url> {
			return this.http.post<Url>(this.baseUri + 'v2/videos/licenses/' + (id == null ? '' : encodeURIComponent(id)) + '/downloads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for videos
		 * This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
		 * Get v2/videos/search
		 * @param {Date} added_date Show videos added on the specified date
		 * @param {Date} added_date_start Show videos added on or after the specified date
		 * @param {Date} added_date_end Show videos added before the specified date
		 * @param {SearchVideosAspect_ratio} aspect_ratio Show videos with the specified aspect ratio
		 * @param {string} category Show videos with the specified Shutterstock-defined category; specify a category name or ID
		 * @param {Array<string>} contributor Show videos with the specified artist names or IDs
		 * @param {Array<string>} contributor_country Show videos from contributors in one or more specified countries
		 * @param {number} duration (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds
		 * @param {number} duration_from Show videos with the specified duration or longer in seconds
		 * @param {number} duration_to Show videos with the specified duration or shorter in seconds
		 * @param {number} fps (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second
		 * @param {number} fps_from Show videos with the specified frames per second or more
		 * @param {number} fps_to Show videos with the specified frames per second or fewer
		 * @param {boolean} keyword_safe_search Hide results with potentially unsafe keywords
		 * @param {SearchImageLanguage} language Set query and result language (uses Accept-Language header if not set)
		 * @param {Array<string>} license Show only videos with the specified license or licenses
		 * @param {Array<string>} model Show videos with each of the specified models
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {SearchImagePeople_age} people_age Show videos that feature people of the specified age range
		 * @param {Array<string>} people_ethnicity Show videos with people of the specified ethnicities
		 * @param {SearchImagePeople_gender} people_gender Show videos with people with the specified gender
		 * @param {number} people_number Show videos with the specified number of people
		 * @param {boolean} people_model_released Show only videos of people with a signed model release
		 * @param {string} query One or more search terms separated by spaces; you can use NOT to filter out videos that match a term
		 * @param {SearchVideosResolution} resolution Show videos with the specified resolution
		 * @param {boolean} safe Enable or disable safe search
		 * @param {SearchImageSort} sort Sort by one of these categories
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @return {VideoSearchResults} OK
		 */
		SearchVideos(added_date: Date | null | undefined, added_date_start: Date | null | undefined, added_date_end: Date | null | undefined, aspect_ratio: SearchVideosAspect_ratio | null | undefined, category: string | null | undefined, contributor: Array<string> | null | undefined, contributor_country: Array<string> | null | undefined, duration: number | null | undefined, duration_from: number | null | undefined, duration_to: number | null | undefined, fps: number | null | undefined, fps_from: number | null | undefined, fps_to: number | null | undefined, keyword_safe_search: boolean | null | undefined, language: SearchImageLanguage | null | undefined, license: Array<string> | null | undefined, model: Array<string> | null | undefined, page: number | null | undefined, per_page: number | null | undefined, people_age: SearchImagePeople_age | null | undefined, people_ethnicity: Array<string> | null | undefined, people_gender: SearchImagePeople_gender | null | undefined, people_number: number | null | undefined, people_model_released: boolean | null | undefined, query: string | null | undefined, resolution: SearchVideosResolution | null | undefined, safe: boolean | null | undefined, sort: SearchImageSort | null | undefined, view: SearchImageView | null | undefined): Observable<VideoSearchResults> {
			return this.http.get<VideoSearchResults>(this.baseUri + 'v2/videos/search?added_date=' + added_date?.toISOString() + '&added_date_start=' + added_date_start?.toISOString() + '&added_date_end=' + added_date_end?.toISOString() + '&aspect_ratio=' + aspect_ratio + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&' + contributor?.map(z => `contributor=${encodeURIComponent(z)}`).join('&') + '&' + contributor_country?.map(z => `contributor_country=${encodeURIComponent(z)}`).join('&') + '&duration=' + duration + '&duration_from=' + duration_from + '&duration_to=' + duration_to + '&fps=' + fps + '&fps_from=' + fps_from + '&fps_to=' + fps_to + '&keyword_safe_search=' + keyword_safe_search + '&language=' + language + '&' + license?.map(z => `license=${encodeURIComponent(z)}`).join('&') + '&' + model?.map(z => `model=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&per_page=' + per_page + '&people_age=' + people_age + '&' + people_ethnicity?.map(z => `people_ethnicity=${encodeURIComponent(z)}`).join('&') + '&people_gender=' + people_gender + '&people_number=' + people_number + '&people_model_released=' + people_model_released + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&resolution=' + resolution + '&safe=' + safe + '&sort=' + sort + '&view=' + view, {});
		}

		/**
		 * Get suggestions for a search term
		 * This endpoint provides autocomplete suggestions for partial search terms.
		 * Get v2/videos/search/suggestions
		 * @param {string} query Search term for which you want keyword suggestions
		 * @param {number} limit Limit the number of the suggestions
		 * @return {Suggestions} OK
		 */
		GetVideoSuggestions(query: string, limit: number | null | undefined): Observable<Suggestions> {
			return this.http.get<Suggestions>(this.baseUri + 'v2/videos/search/suggestions?query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit, {});
		}

		/**
		 * List updated videos
		 * This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
		 * Get v2/videos/updated
		 * @param {Date} start_date Show videos updated on or after the specified date
		 * @param {Date} end_date Show videos updated before the specified date
		 * @param {string} interval Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {GetTrackCollectionItemsSort} sort Sort by oldest or newest videos first
		 * @return {UpdatedMediaDataList} OK
		 */
		GetUpdatedVideos(start_date: Date | null | undefined, end_date: Date | null | undefined, interval: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: GetTrackCollectionItemsSort | null | undefined): Observable<UpdatedMediaDataList> {
			return this.http.get<UpdatedMediaDataList>(this.baseUri + 'v2/videos/updated?start_date=' + start_date?.toISOString() + '&end_date=' + end_date?.toISOString() + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Get details about videos
		 * This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
		 * Get v2/videos/{id}
		 * @param {string} id Video ID
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @param {string} search_id The ID of the search that is related to this request
		 * @return {Video} OK
		 */
		GetVideo(id: string, language: SearchImageLanguage | null | undefined, view: SearchImageView | null | undefined, search_id: string | null | undefined): Observable<Video> {
			return this.http.get<Video>(this.baseUri + 'v2/videos/' + (id == null ? '' : encodeURIComponent(id)) + '&language=' + language + '&view=' + view + '&search_id=' + (search_id == null ? '' : encodeURIComponent(search_id)), {});
		}

		/**
		 * List similar videos
		 * This endpoint searches for videos that are similar to a video that you specify.
		 * Get v2/videos/{id}/similar
		 * @param {string} id The ID of a video for which similar videos should be returned
		 * @param {SearchImageLanguage} language Language for the keywords and categories in the response
		 * @param {number} page Page number
		 * @param {number} per_page Number of results per page
		 * @param {SearchImageView} view Amount of detail to render in the response
		 * @return {VideoSearchResults} OK
		 */
		FindSimilarVideos(id: string, language: SearchImageLanguage | null | undefined, page: number | null | undefined, per_page: number | null | undefined, view: SearchImageView | null | undefined): Observable<VideoSearchResults> {
			return this.http.get<VideoSearchResults>(this.baseUri + 'v2/videos/' + (id == null ? '' : encodeURIComponent(id)) + '/similar&language=' + language + '&page=' + page + '&per_page=' + per_page + '&view=' + view, {});
		}
	}

	export enum GetTrackCollectionItemsSort { newest = 0, oldest = 1 }

	export enum GetTrackLicenseListDownload_availability { all = 0, downloadable = 1, non_downloadable = 2 }

	export enum SearchTracksSort { score = 0, ranking_all = 1, artist = 2, title = 3, bpm = 4, freshness = 5, duration = 6 }

	export enum SearchTracksSort_order { asc = 0, desc = 1 }

	export enum SearchTracksLibrary { shutterstock = 0, premier = 1 }

	export enum GetContributorCollectionsListSort { newest = 0, last_updated = 1, item_count = 2 }

	export enum SearchEditorialImagesSort { relevant = 0, newest = 1, oldest = 2 }

	export enum GetUpdatedEditorialImagesType { edit = 0, addition = 1 }

	export enum SearchEditorialVideosResolution { '4k' = 0, high_definition = 1, standard_definition = 2 }

	export enum GetFeaturedImageCollectionListEmbed { share_url = 0 }

	export enum GetFeaturedImageCollectionListAsset_hint { '1x' = 0, '2x' = 1 }

	export enum LicenseImagesFormat { eps = 0, jpg = 1 }

	export enum LicenseImagesSize { small = 0, medium = 1, huge = 2, vector = 3, custom = 4 }

	export enum SearchImagesAi_industry { automotive = 0, cpg = 1, finance = 2, healthcare = 3, retail = 4, technology = 5 }

	export enum SearchImagesAi_objective { awareness = 0, traffic = 1, conversions = 2 }

	export interface CreateAccessTokenPostBody {

		/**
		 * Client ID (Consumer Key) of your application
		 * Required
		 */
		client_id: string;

		/** Client Secret (Consumer Secret) of your application */
		client_secret?: string | null;

		/** Response code from the /oauth/authorize flow; required if grant_type=authorization_code */
		code?: string | null;

		/** Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token */
		expires?: boolean | null;

		/**
		 * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
		 * Required
		 */
		grant_type: CreateAccessTokenPostBodyGrant_type;

		/** User type to be authorized (usually 'customer') */
		realm?: AccessTokenDetailsRealm | null;

		/** Pass this along with grant_type=refresh_token to get a fresh access token */
		refresh_token?: string | null;
	}
	export interface CreateAccessTokenPostBodyFormProperties {

		/**
		 * Client ID (Consumer Key) of your application
		 * Required
		 */
		client_id: FormControl<string | null | undefined>,

		/** Client Secret (Consumer Secret) of your application */
		client_secret: FormControl<string | null | undefined>,

		/** Response code from the /oauth/authorize flow; required if grant_type=authorization_code */
		code: FormControl<string | null | undefined>,

		/** Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token */
		expires: FormControl<boolean | null | undefined>,

		/**
		 * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
		 * Required
		 */
		grant_type: FormControl<CreateAccessTokenPostBodyGrant_type | null | undefined>,

		/** User type to be authorized (usually 'customer') */
		realm: FormControl<AccessTokenDetailsRealm | null | undefined>,

		/** Pass this along with grant_type=refresh_token to get a fresh access token */
		refresh_token: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessTokenPostBodyFormGroup() {
		return new FormGroup<CreateAccessTokenPostBodyFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_secret: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<boolean | null | undefined>(undefined),
			grant_type: new FormControl<CreateAccessTokenPostBodyGrant_type | null | undefined>(undefined, [Validators.required]),
			realm: new FormControl<AccessTokenDetailsRealm | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateAccessTokenPostBodyGrant_type { authorization_code = 0, client_credentials = 1, refresh_token = 2 }

	export enum AuthorizeResponse_type { code = 0 }

	export enum GetSfxListDetailsLibrary { shutterstock = 0, premier = 1, premiumbeat = 2 }

	export enum SearchSFXSort { popular = 0, newest = 1, relevance = 2, random = 3, oldest = 4 }

	export enum SearchVideosAspect_ratio { '4_3' = 0, '16_9' = 1, nonstandard = 2 }

	export enum SearchVideosResolution { '4k' = 0, standard_definition = 1, high_definition = 2 }

}

