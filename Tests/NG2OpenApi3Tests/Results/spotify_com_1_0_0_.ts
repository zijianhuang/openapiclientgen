import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AlbumBase {

		/**
		 * The type of the album.
		 * Required
		 */
		album_type: AlbumBaseAlbum_type;

		/**
		 * The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._
		 * Required
		 */
		available_markets: Array<string>;

		/**
		 * The copyright statements of the album.
		 */
		copyrights?: Array<CopyrightObject>;

		/**
		 * Known external IDs for the album.
		 */
		external_ids?: ExternalIdObject;

		/**
		 * Known external URLs for this album.
		 * Required
		 */
		external_urls: ExternalUrlObject;

		/**
		 * A list of the genres the album is associated with. If not yet classified, the array is empty.
		 */
		genres?: Array<string>;

		/**
		 * A link to the Web API endpoint providing full details of the album.
		 * Required
		 */
		href: string;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.
		 * Required
		 */
		id: string;

		/**
		 * The cover art for the album in various sizes, widest first.
		 * Required
		 */
		images: Array<ImageObject>;

		/**
		 * The label associated with the album.
		 */
		label?: string | null;

		/**
		 * The name of the album. In case of an album takedown, the value may be an empty string.
		 * Required
		 */
		name: string;

		/**
		 * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.
		 */
		popularity?: number | null;

		/**
		 * The date the album was first released.
		 * Required
		 */
		release_date: string;

		/**
		 * The precision with which `release_date` value is known.
		 * Required
		 */
		release_date_precision: AlbumBaseRelease_date_precision;

		/**
		 * Included in the response when a content restriction is applied.
		 */
		restrictions?: AlbumRestrictionObject;

		/**
		 * The number of tracks in the album.
		 * Required
		 */
		total_tracks: number;

		/**
		 * The object type.
		 * Required
		 */
		type: AlbumBaseType;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.
		 * Required
		 */
		uri: string;
	}
	export interface AlbumBaseFormProperties {

		/**
		 * The type of the album.
		 * Required
		 */
		album_type: FormControl<AlbumBaseAlbum_type | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the album.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The label associated with the album.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The name of the album. In case of an album takedown, the value may be an empty string.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.
		 */
		popularity: FormControl<number | null | undefined>,

		/**
		 * The date the album was first released.
		 * Required
		 */
		release_date: FormControl<string | null | undefined>,

		/**
		 * The precision with which `release_date` value is known.
		 * Required
		 */
		release_date_precision: FormControl<AlbumBaseRelease_date_precision | null | undefined>,

		/**
		 * The number of tracks in the album.
		 * Required
		 */
		total_tracks: FormControl<number | null | undefined>,

		/**
		 * The object type.
		 * Required
		 */
		type: FormControl<AlbumBaseType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlbumBaseFormGroup() {
		return new FormGroup<AlbumBaseFormProperties>({
			album_type: new FormControl<AlbumBaseAlbum_type | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			popularity: new FormControl<number | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date_precision: new FormControl<AlbumBaseRelease_date_precision | null | undefined>(undefined, [Validators.required]),
			total_tracks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AlbumBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlbumBaseAlbum_type { album = 0, single = 1, compilation = 2 }

	export interface CopyrightObject {

		/**
		 * The copyright text for this content.
		 */
		text?: string | null;

		/**
		 * The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.
		 */
		type?: string | null;
	}
	export interface CopyrightObjectFormProperties {

		/**
		 * The copyright text for this content.
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCopyrightObjectFormGroup() {
		return new FormGroup<CopyrightObjectFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExternalIdObject {

		/**
		 * [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)
		 */
		ean?: string | null;

		/**
		 * [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)
		 */
		isrc?: string | null;

		/**
		 * [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)
		 */
		upc?: string | null;
	}
	export interface ExternalIdObjectFormProperties {

		/**
		 * [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)
		 */
		ean: FormControl<string | null | undefined>,

		/**
		 * [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)
		 */
		isrc: FormControl<string | null | undefined>,

		/**
		 * [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)
		 */
		upc: FormControl<string | null | undefined>,
	}
	export function CreateExternalIdObjectFormGroup() {
		return new FormGroup<ExternalIdObjectFormProperties>({
			ean: new FormControl<string | null | undefined>(undefined),
			isrc: new FormControl<string | null | undefined>(undefined),
			upc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExternalUrlObject {

		/**
		 * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object.
		 */
		spotify?: string | null;
	}
	export interface ExternalUrlObjectFormProperties {

		/**
		 * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object.
		 */
		spotify: FormControl<string | null | undefined>,
	}
	export function CreateExternalUrlObjectFormGroup() {
		return new FormGroup<ExternalUrlObjectFormProperties>({
			spotify: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageObject {

		/**
		 * The image height in pixels.
		 * Required
		 */
		height: number;

		/**
		 * The source URL of the image.
		 * Required
		 */
		url: string;

		/**
		 * The image width in pixels.
		 * Required
		 */
		width: number;
	}
	export interface ImageObjectFormProperties {

		/**
		 * The image height in pixels.
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The source URL of the image.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * The image width in pixels.
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageObjectFormGroup() {
		return new FormGroup<ImageObjectFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlbumBaseRelease_date_precision { year = 0, month = 1, day = 2 }

	export interface AlbumRestrictionObject {

		/**
		 * The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
		 * Additional reasons may be added in the future.
		 */
		reason?: AlbumRestrictionObjectReason | null;
	}
	export interface AlbumRestrictionObjectFormProperties {

		/**
		 * The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
		 * Additional reasons may be added in the future.
		 */
		reason: FormControl<AlbumRestrictionObjectReason | null | undefined>,
	}
	export function CreateAlbumRestrictionObjectFormGroup() {
		return new FormGroup<AlbumRestrictionObjectFormProperties>({
			reason: new FormControl<AlbumRestrictionObjectReason | null | undefined>(undefined),
		});

	}

	export enum AlbumRestrictionObjectReason { market = 0, product = 1, explicit = 2 }

	export enum AlbumBaseType { album = 0 }

	export interface AlbumObject extends AlbumBase {

		/**
		 * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
		 */
		artists?: Array<ArtistObject>;
		tracks?: PagingSimplifiedTrackObject;
	}
	export interface AlbumObjectFormProperties extends AlbumBaseFormProperties {
	}
	export function CreateAlbumObjectFormGroup() {
		return new FormGroup<AlbumObjectFormProperties>({
			album_type: new FormControl<AlbumBaseAlbum_type | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			popularity: new FormControl<number | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date_precision: new FormControl<AlbumBaseRelease_date_precision | null | undefined>(undefined, [Validators.required]),
			total_tracks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AlbumBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArtistObject {

		/**
		 * Known external URLs for this artist.
		 */
		external_urls?: ExternalUrlObject;

		/**
		 * Information about the followers of the artist.
		 */
		followers?: FollowersObject;

		/**
		 * A list of the genres the artist is associated with. If not yet classified, the array is empty.
		 */
		genres?: Array<string>;

		/**
		 * A link to the Web API endpoint providing full details of the artist.
		 */
		href?: string | null;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		id?: string | null;

		/**
		 * Images of the artist in various sizes, widest first.
		 */
		images?: Array<ImageObject>;

		/**
		 * The name of the artist.
		 */
		name?: string | null;

		/**
		 * The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
		 */
		popularity?: number | null;

		/**
		 * The object type.
		 */
		type?: ArtistObjectType | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		uri?: string | null;
	}
	export interface ArtistObjectFormProperties {

		/**
		 * A link to the Web API endpoint providing full details of the artist.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the artist.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
		 */
		popularity: FormControl<number | null | undefined>,

		/**
		 * The object type.
		 */
		type: FormControl<ArtistObjectType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateArtistObjectFormGroup() {
		return new FormGroup<ArtistObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			popularity: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ArtistObjectType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FollowersObject {

		/**
		 * This will always be set to null, as the Web API does not support it at the moment.
		 */
		href?: string | null;

		/**
		 * The total number of followers.
		 */
		total?: number | null;
	}
	export interface FollowersObjectFormProperties {

		/**
		 * This will always be set to null, as the Web API does not support it at the moment.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The total number of followers.
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateFollowersObjectFormGroup() {
		return new FormGroup<FollowersObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ArtistObjectType { artist = 0 }

	export interface PagingSimplifiedTrackObject {
	}
	export interface PagingSimplifiedTrackObjectFormProperties {
	}
	export function CreatePagingSimplifiedTrackObjectFormGroup() {
		return new FormGroup<PagingSimplifiedTrackObjectFormProperties>({
		});

	}

	export interface AudioAnalysisObject {

		/** The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats. */
		bars?: Array<TimeIntervalObject>;

		/** The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums. */
		beats?: Array<TimeIntervalObject>;
		meta?: AudioAnalysisObjectMeta;

		/** Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness. */
		sections?: Array<SectionObject>;

		/** Each segment contains a roughly conisistent sound throughout its duration. */
		segments?: Array<SegmentObject>;

		/** A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments). */
		tatums?: Array<TimeIntervalObject>;
		track?: AudioAnalysisObjectTrack;
	}
	export interface AudioAnalysisObjectFormProperties {
	}
	export function CreateAudioAnalysisObjectFormGroup() {
		return new FormGroup<AudioAnalysisObjectFormProperties>({
		});

	}

	export interface TimeIntervalObject {

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the interval.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence?: number | null;

		/** The duration (in seconds) of the time interval. */
		duration?: number | null;

		/** The starting point (in seconds) of the time interval. */
		start?: number | null;
	}
	export interface TimeIntervalObjectFormProperties {

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the interval.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/** The duration (in seconds) of the time interval. */
		duration: FormControl<number | null | undefined>,

		/** The starting point (in seconds) of the time interval. */
		start: FormControl<number | null | undefined>,
	}
	export function CreateTimeIntervalObjectFormGroup() {
		return new FormGroup<TimeIntervalObjectFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			duration: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AudioAnalysisObjectMeta {

		/** The amount of time taken to analyze this track. */
		analysis_time?: number | null;

		/** The version of the Analyzer used to analyze this track. */
		analyzer_version?: string | null;

		/** A detailed status code for this track. If analysis data is missing, this code may explain why. */
		detailed_status?: string | null;

		/** The method used to read the track's audio data. */
		input_process?: string | null;

		/** The platform used to read the track's audio data. */
		platform?: string | null;

		/** The return code of the analyzer process. 0 if successful, 1 if any errors occurred. */
		status_code?: number | null;

		/** The Unix timestamp (in seconds) at which this track was analyzed. */
		timestamp?: number | null;
	}
	export interface AudioAnalysisObjectMetaFormProperties {

		/** The amount of time taken to analyze this track. */
		analysis_time: FormControl<number | null | undefined>,

		/** The version of the Analyzer used to analyze this track. */
		analyzer_version: FormControl<string | null | undefined>,

		/** A detailed status code for this track. If analysis data is missing, this code may explain why. */
		detailed_status: FormControl<string | null | undefined>,

		/** The method used to read the track's audio data. */
		input_process: FormControl<string | null | undefined>,

		/** The platform used to read the track's audio data. */
		platform: FormControl<string | null | undefined>,

		/** The return code of the analyzer process. 0 if successful, 1 if any errors occurred. */
		status_code: FormControl<number | null | undefined>,

		/** The Unix timestamp (in seconds) at which this track was analyzed. */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateAudioAnalysisObjectMetaFormGroup() {
		return new FormGroup<AudioAnalysisObjectMetaFormProperties>({
			analysis_time: new FormControl<number | null | undefined>(undefined),
			analyzer_version: new FormControl<string | null | undefined>(undefined),
			detailed_status: new FormControl<string | null | undefined>(undefined),
			input_process: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SectionObject {

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the section's "designation".
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence?: number | null;

		/** The duration (in seconds) of the section. */
		duration?: number | null;

		/** The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1. */
		key?: number | null;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		key_confidence?: number | null;

		/** The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks. */
		loudness?: number | null;

		/** Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches. */
		mode?: SectionObjectMode;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		mode_confidence?: number | null;

		/** The starting point (in seconds) of the section. */
		start?: number | null;

		/** The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
		tempo?: number | null;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		tempo_confidence?: number | null;

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature?: number | null;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		time_signature_confidence?: number | null;
	}
	export interface SectionObjectFormProperties {

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the section's "designation".
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/** The duration (in seconds) of the section. */
		duration: FormControl<number | null | undefined>,

		/** The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1. */
		key: FormControl<number | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		key_confidence: FormControl<number | null | undefined>,

		/** The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks. */
		loudness: FormControl<number | null | undefined>,

		/** Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches. */
		mode: FormControl<SectionObjectMode | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		mode_confidence: FormControl<number | null | undefined>,

		/** The starting point (in seconds) of the section. */
		start: FormControl<number | null | undefined>,

		/** The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
		tempo: FormControl<number | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		tempo_confidence: FormControl<number | null | undefined>,

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature: FormControl<number | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		time_signature_confidence: FormControl<number | null | undefined>,
	}
	export function CreateSectionObjectFormGroup() {
		return new FormGroup<SectionObjectFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			duration: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined),
			key_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			loudness: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<SectionObjectMode | null | undefined>(undefined),
			mode_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			start: new FormControl<number | null | undefined>(undefined),
			tempo: new FormControl<number | null | undefined>(undefined),
			tempo_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			time_signature: new FormControl<number | null | undefined>(undefined, [Validators.min(3), Validators.max(7)]),
			time_signature_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum SectionObjectMode { _Minus1 = -1, _0 = 0, _1 = 1 }

	export interface SegmentObject {

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence?: number | null;

		/** The duration (in seconds) of the segment. */
		duration?: number | null;

		/** The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment. */
		loudness_end?: number | null;

		/** The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
		loudness_max?: number | null;

		/** The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the "attack" of the segment. */
		loudness_max_time?: number | null;

		/** The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
		loudness_start?: number | null;

		/**
		 * Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7).
		 * Vectors are normalized to 1 by their strongest dimension, therefore noisy sounds are likely represented by values that are all close to 1, while pure tones are described by one value at 1 (the pitch) and others near 0.
		 * As can be seen below, the 12 vector indices are a combination of low-power spectrum values at their respective pitch frequencies.
		 * ![pitch vector](https://developer.spotify.com/assets/audio/Pitch_vector.png)
		 */
		pitches?: Array<number>;

		/** The starting point (in seconds) of the segment. */
		start?: number | null;

		/**
		 * Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. The timbre feature is a vector that includes 12 unbounded values roughly centered around 0. Those values are high level abstractions of the spectral surface, ordered by degree of importance.
		 * For completeness however, the first dimension represents the average loudness of the segment; second emphasizes brightness; third is more closely correlated to the flatness of a sound; fourth to sounds with a stronger attack; etc. See an image below representing the 12 basis functions (i.e. template segments).
		 * ![timbre basis functions](https://developer.spotify.com/assets/audio/Timbre_basis_functions.png)
		 * The actual timbre of the segment is best described as a linear combination of these 12 basis functions weighted by the coefficient values: timbre = c1 x b1 + c2 x b2 + ... + c12 x b12, where c1 to c12 represent the 12 coefficients and b1 to b12 the 12 basis functions as displayed below. Timbre vectors are best used in comparison with each other.
		 */
		timbre?: Array<number>;
	}
	export interface SegmentObjectFormProperties {

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/** The duration (in seconds) of the segment. */
		duration: FormControl<number | null | undefined>,

		/** The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment. */
		loudness_end: FormControl<number | null | undefined>,

		/** The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
		loudness_max: FormControl<number | null | undefined>,

		/** The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the "attack" of the segment. */
		loudness_max_time: FormControl<number | null | undefined>,

		/** The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
		loudness_start: FormControl<number | null | undefined>,

		/** The starting point (in seconds) of the segment. */
		start: FormControl<number | null | undefined>,
	}
	export function CreateSegmentObjectFormGroup() {
		return new FormGroup<SegmentObjectFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			duration: new FormControl<number | null | undefined>(undefined),
			loudness_end: new FormControl<number | null | undefined>(undefined),
			loudness_max: new FormControl<number | null | undefined>(undefined),
			loudness_max_time: new FormControl<number | null | undefined>(undefined),
			loudness_start: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AudioAnalysisObjectTrack {

		/** The number of channels used for analysis. If 1, all channels are summed together to mono before analysis. */
		analysis_channels?: number | null;

		/** The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify. */
		analysis_sample_rate?: number | null;

		/** A version number for the Echo Nest Musical Fingerprint format used in the codestring field. */
		code_version?: number | null;

		/** An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track. */
		codestring?: string | null;

		/** Length of the track in seconds. */
		duration?: number | null;

		/** A version number for the EchoPrint format used in the echoprintstring field. */
		echoprint_version?: number | null;

		/** An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track. */
		echoprintstring?: string | null;

		/** The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0. */
		end_of_fade_in?: number | null;

		/**
		 * The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
		 * Minimum: -1
		 * Maximum: 11
		 */
		key?: number | null;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `key`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		key_confidence?: number | null;

		/**
		 * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
		 */
		loudness?: number | null;

		/**
		 * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
		 */
		mode?: number | null;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		mode_confidence?: number | null;

		/** The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`. */
		num_samples?: number | null;

		/** An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.) */
		offset_seconds?: number | null;

		/** A version number for the Rhythmstring used in the rhythmstring field. */
		rhythm_version?: number | null;

		/** A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
		rhythmstring?: string | null;

		/** This field will always contain the empty string. */
		sample_md5?: string | null;

		/** The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length. */
		start_of_fade_out?: number | null;

		/** A version number for the Synchstring used in the synchstring field. */
		synch_version?: number | null;

		/** A [Synchstring](https://github.com/echonest/synchdata) for this track. */
		synchstring?: string | null;

		/**
		 * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
		 */
		tempo?: number | null;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		tempo_confidence?: number | null;

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature?: number | null;

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		time_signature_confidence?: number | null;

		/** The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.) */
		window_seconds?: number | null;
	}
	export interface AudioAnalysisObjectTrackFormProperties {

		/** The number of channels used for analysis. If 1, all channels are summed together to mono before analysis. */
		analysis_channels: FormControl<number | null | undefined>,

		/** The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify. */
		analysis_sample_rate: FormControl<number | null | undefined>,

		/** A version number for the Echo Nest Musical Fingerprint format used in the codestring field. */
		code_version: FormControl<number | null | undefined>,

		/** An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track. */
		codestring: FormControl<string | null | undefined>,

		/** Length of the track in seconds. */
		duration: FormControl<number | null | undefined>,

		/** A version number for the EchoPrint format used in the echoprintstring field. */
		echoprint_version: FormControl<number | null | undefined>,

		/** An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track. */
		echoprintstring: FormControl<string | null | undefined>,

		/** The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0. */
		end_of_fade_in: FormControl<number | null | undefined>,

		/**
		 * The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
		 * Minimum: -1
		 * Maximum: 11
		 */
		key: FormControl<number | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `key`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		key_confidence: FormControl<number | null | undefined>,

		/**
		 * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
		 */
		loudness: FormControl<number | null | undefined>,

		/**
		 * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
		 */
		mode: FormControl<number | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		mode_confidence: FormControl<number | null | undefined>,

		/** The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`. */
		num_samples: FormControl<number | null | undefined>,

		/** An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.) */
		offset_seconds: FormControl<number | null | undefined>,

		/** A version number for the Rhythmstring used in the rhythmstring field. */
		rhythm_version: FormControl<number | null | undefined>,

		/** A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
		rhythmstring: FormControl<string | null | undefined>,

		/** This field will always contain the empty string. */
		sample_md5: FormControl<string | null | undefined>,

		/** The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length. */
		start_of_fade_out: FormControl<number | null | undefined>,

		/** A version number for the Synchstring used in the synchstring field. */
		synch_version: FormControl<number | null | undefined>,

		/** A [Synchstring](https://github.com/echonest/synchdata) for this track. */
		synchstring: FormControl<string | null | undefined>,

		/**
		 * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
		 */
		tempo: FormControl<number | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		tempo_confidence: FormControl<number | null | undefined>,

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature: FormControl<number | null | undefined>,

		/**
		 * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.
		 * Minimum: 0
		 * Maximum: 1
		 */
		time_signature_confidence: FormControl<number | null | undefined>,

		/** The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.) */
		window_seconds: FormControl<number | null | undefined>,
	}
	export function CreateAudioAnalysisObjectTrackFormGroup() {
		return new FormGroup<AudioAnalysisObjectTrackFormProperties>({
			analysis_channels: new FormControl<number | null | undefined>(undefined),
			analysis_sample_rate: new FormControl<number | null | undefined>(undefined),
			code_version: new FormControl<number | null | undefined>(undefined),
			codestring: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			echoprint_version: new FormControl<number | null | undefined>(undefined),
			echoprintstring: new FormControl<string | null | undefined>(undefined),
			end_of_fade_in: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(11)]),
			key_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			loudness: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<number | null | undefined>(undefined),
			mode_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			num_samples: new FormControl<number | null | undefined>(undefined),
			offset_seconds: new FormControl<number | null | undefined>(undefined),
			rhythm_version: new FormControl<number | null | undefined>(undefined),
			rhythmstring: new FormControl<string | null | undefined>(undefined),
			sample_md5: new FormControl<string | null | undefined>(undefined),
			start_of_fade_out: new FormControl<number | null | undefined>(undefined),
			synch_version: new FormControl<number | null | undefined>(undefined),
			synchstring: new FormControl<string | null | undefined>(undefined),
			tempo: new FormControl<number | null | undefined>(undefined),
			tempo_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			time_signature: new FormControl<number | null | undefined>(undefined, [Validators.min(3), Validators.max(7)]),
			time_signature_confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			window_seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AudioFeaturesObject {

		/**
		 * A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
		 * Minimum: 0
		 * Maximum: 1
		 */
		acousticness?: number | null;

		/**
		 * A URL to access the full audio analysis of this track. An access token is required to access this data.
		 */
		analysis_url?: string | null;

		/**
		 * Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
		 */
		danceability?: number | null;

		/**
		 * The duration of the track in milliseconds.
		 */
		duration_ms?: number | null;

		/**
		 * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
		 */
		energy?: number | null;

		/**
		 * The Spotify ID for the track.
		 */
		id?: string | null;

		/**
		 * Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
		 */
		instrumentalness?: number | null;

		/**
		 * The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
		 * Minimum: -1
		 * Maximum: 11
		 */
		key?: number | null;

		/**
		 * Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
		 */
		liveness?: number | null;

		/**
		 * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
		 */
		loudness?: number | null;

		/**
		 * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
		 */
		mode?: number | null;

		/**
		 * Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
		 */
		speechiness?: number | null;

		/**
		 * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
		 */
		tempo?: number | null;

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature?: number | null;

		/**
		 * A link to the Web API endpoint providing full details of the track.
		 */
		track_href?: string | null;

		/**
		 * The object type.
		 */
		type?: AudioFeaturesObjectType | null;

		/**
		 * The Spotify URI for the track.
		 */
		uri?: string | null;

		/**
		 * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
		 * Minimum: 0
		 * Maximum: 1
		 */
		valence?: number | null;
	}
	export interface AudioFeaturesObjectFormProperties {

		/**
		 * A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
		 * Minimum: 0
		 * Maximum: 1
		 */
		acousticness: FormControl<number | null | undefined>,

		/**
		 * A URL to access the full audio analysis of this track. An access token is required to access this data.
		 */
		analysis_url: FormControl<string | null | undefined>,

		/**
		 * Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
		 */
		danceability: FormControl<number | null | undefined>,

		/**
		 * The duration of the track in milliseconds.
		 */
		duration_ms: FormControl<number | null | undefined>,

		/**
		 * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
		 */
		energy: FormControl<number | null | undefined>,

		/**
		 * The Spotify ID for the track.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
		 */
		instrumentalness: FormControl<number | null | undefined>,

		/**
		 * The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
		 * Minimum: -1
		 * Maximum: 11
		 */
		key: FormControl<number | null | undefined>,

		/**
		 * Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
		 */
		liveness: FormControl<number | null | undefined>,

		/**
		 * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
		 */
		loudness: FormControl<number | null | undefined>,

		/**
		 * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
		 */
		mode: FormControl<number | null | undefined>,

		/**
		 * Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
		 */
		speechiness: FormControl<number | null | undefined>,

		/**
		 * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
		 */
		tempo: FormControl<number | null | undefined>,

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature: FormControl<number | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the track.
		 */
		track_href: FormControl<string | null | undefined>,

		/**
		 * The object type.
		 */
		type: FormControl<AudioFeaturesObjectType | null | undefined>,

		/**
		 * The Spotify URI for the track.
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
		 * Minimum: 0
		 * Maximum: 1
		 */
		valence: FormControl<number | null | undefined>,
	}
	export function CreateAudioFeaturesObjectFormGroup() {
		return new FormGroup<AudioFeaturesObjectFormProperties>({
			acousticness: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			analysis_url: new FormControl<string | null | undefined>(undefined),
			danceability: new FormControl<number | null | undefined>(undefined),
			duration_ms: new FormControl<number | null | undefined>(undefined),
			energy: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instrumentalness: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(11)]),
			liveness: new FormControl<number | null | undefined>(undefined),
			loudness: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<number | null | undefined>(undefined),
			speechiness: new FormControl<number | null | undefined>(undefined),
			tempo: new FormControl<number | null | undefined>(undefined),
			time_signature: new FormControl<number | null | undefined>(undefined, [Validators.min(3), Validators.max(7)]),
			track_href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AudioFeaturesObjectType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			valence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum AudioFeaturesObjectType { audio_features = 0 }

	export interface AudiobookBase {

		/**
		 * The author(s) for the audiobook.
		 * Required
		 */
		authors: Array<AuthorObject>;

		/**
		 * A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
		 * Required
		 */
		available_markets: Array<string>;

		/**
		 * The copyright statements of the audiobook.
		 * Required
		 */
		copyrights: Array<CopyrightObject>;

		/**
		 * A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: string;

		/**
		 * The edition of the audiobook.
		 */
		edition?: string | null;

		/**
		 * Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: boolean;

		/**
		 * External URLs for this audiobook.
		 * Required
		 */
		external_urls: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the audiobook.
		 * Required
		 */
		href: string;

		/**
		 * A description of the audiobook. This field may contain HTML tags.
		 * Required
		 */
		html_description: string;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
		 * Required
		 */
		id: string;

		/**
		 * The cover art for the audiobook in various sizes, widest first.
		 * Required
		 */
		images: Array<ImageObject>;

		/**
		 * A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
		 * Required
		 */
		languages: Array<string>;

		/**
		 * The media type of the audiobook.
		 * Required
		 */
		media_type: string;

		/**
		 * The name of the audiobook.
		 * Required
		 */
		name: string;

		/**
		 * The narrator(s) for the audiobook.
		 * Required
		 */
		narrators: Array<NarratorObject>;

		/**
		 * The publisher of the audiobook.
		 * Required
		 */
		publisher: string;

		/**
		 * The number of chapters in this audiobook.
		 * Required
		 */
		total_chapters: number;

		/**
		 * The object type.
		 * Required
		 */
		type: AudiobookBaseType;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
		 * Required
		 */
		uri: string;
	}
	export interface AudiobookBaseFormProperties {

		/**
		 * A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The edition of the audiobook.
		 */
		edition: FormControl<string | null | undefined>,

		/**
		 * Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: FormControl<boolean | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the audiobook.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * A description of the audiobook. This field may contain HTML tags.
		 * Required
		 */
		html_description: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The media type of the audiobook.
		 * Required
		 */
		media_type: FormControl<string | null | undefined>,

		/**
		 * The name of the audiobook.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The publisher of the audiobook.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * The number of chapters in this audiobook.
		 * Required
		 */
		total_chapters: FormControl<number | null | undefined>,

		/**
		 * The object type.
		 * Required
		 */
		type: FormControl<AudiobookBaseType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAudiobookBaseFormGroup() {
		return new FormGroup<AudiobookBaseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			edition: new FormControl<string | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_chapters: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AudiobookBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuthorObject {

		/**
		 * The name of the author.
		 */
		name?: string | null;
	}
	export interface AuthorObjectFormProperties {

		/**
		 * The name of the author.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorObjectFormGroup() {
		return new FormGroup<AuthorObjectFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NarratorObject {

		/**
		 * The name of the Narrator.
		 */
		name?: string | null;
	}
	export interface NarratorObjectFormProperties {

		/**
		 * The name of the Narrator.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNarratorObjectFormGroup() {
		return new FormGroup<NarratorObjectFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AudiobookBaseType { audiobook = 0 }

	export interface AudiobookObject extends AudiobookBase {

		/**
		 * The chapters of the audiobook.
		 * Required
		 */
		chapters: string;
	}
	export interface AudiobookObjectFormProperties extends AudiobookBaseFormProperties {

		/**
		 * The chapters of the audiobook.
		 * Required
		 */
		chapters: FormControl<string | null | undefined>,
	}
	export function CreateAudiobookObjectFormGroup() {
		return new FormGroup<AudiobookObjectFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			edition: new FormControl<string | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_chapters: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AudiobookBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chapters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryObject {

		/**
		 * A link to the Web API endpoint returning full details of the category.
		 * Required
		 */
		href: string;

		/**
		 * The category icon, in various sizes.
		 * Required
		 */
		icons: Array<ImageObject>;

		/**
		 * The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.
		 * Required
		 */
		id: string;

		/**
		 * The name of the category.
		 * Required
		 */
		name: string;
	}
	export interface CategoryObjectFormProperties {

		/**
		 * A link to the Web API endpoint returning full details of the category.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the category.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryObjectFormGroup() {
		return new FormGroup<CategoryObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChapterBase {

		/**
		 * A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.
		 * Required
		 */
		audio_preview_url: string;

		/**
		 * A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
		 */
		available_markets?: Array<string>;

		/**
		 * The number of the chapter
		 * Required
		 */
		chapter_number: number;

		/**
		 * A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: string;

		/**
		 * The episode length in milliseconds.
		 * Required
		 */
		duration_ms: number;

		/**
		 * Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: boolean;

		/**
		 * External URLs for this episode.
		 * Required
		 */
		external_urls: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the episode.
		 * Required
		 */
		href: string;

		/**
		 * A description of the episode. This field may contain HTML tags.
		 * Required
		 */
		html_description: string;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		id: string;

		/**
		 * The cover art for the episode in various sizes, widest first.
		 * Required
		 */
		images: Array<ImageObject>;

		/**
		 * True if the episode is playable in the given market. Otherwise false.
		 * Required
		 */
		is_playable: boolean;

		/**
		 * A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
		 * Required
		 */
		languages: Array<string>;

		/**
		 * The name of the episode.
		 * Required
		 */
		name: string;

		/**
		 * The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
		 * Required
		 */
		release_date: string;

		/**
		 * The precision with which `release_date` value is known.
		 * Required
		 */
		release_date_precision: AlbumBaseRelease_date_precision;

		/**
		 * Included in the response when a content restriction is applied.
		 */
		restrictions?: ChapterRestrictionObject;

		/**
		 * The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
		 * Required
		 */
		resume_point: ResumePointObject;

		/**
		 * The object type.
		 * Required
		 */
		type: ChapterBaseType;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		uri: string;
	}
	export interface ChapterBaseFormProperties {

		/**
		 * A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.
		 * Required
		 */
		audio_preview_url: FormControl<string | null | undefined>,

		/**
		 * The number of the chapter
		 * Required
		 */
		chapter_number: FormControl<number | null | undefined>,

		/**
		 * A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The episode length in milliseconds.
		 * Required
		 */
		duration_ms: FormControl<number | null | undefined>,

		/**
		 * Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: FormControl<boolean | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the episode.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * A description of the episode. This field may contain HTML tags.
		 * Required
		 */
		html_description: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * True if the episode is playable in the given market. Otherwise false.
		 * Required
		 */
		is_playable: FormControl<boolean | null | undefined>,

		/**
		 * The name of the episode.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
		 * Required
		 */
		release_date: FormControl<string | null | undefined>,

		/**
		 * The precision with which `release_date` value is known.
		 * Required
		 */
		release_date_precision: FormControl<AlbumBaseRelease_date_precision | null | undefined>,

		/**
		 * The object type.
		 * Required
		 */
		type: FormControl<ChapterBaseType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChapterBaseFormGroup() {
		return new FormGroup<ChapterBaseFormProperties>({
			audio_preview_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chapter_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration_ms: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_playable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date_precision: new FormControl<AlbumBaseRelease_date_precision | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ChapterBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChapterRestrictionObject {

		/**
		 * The reason for the restriction. Supported values:
		 * - `market` - The content item is not available in the given market.
		 * - `product` - The content item is not available for the user's subscription type.
		 * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
		 * - `payment_required` - Payment is required to play the content item.
		 * Additional reasons may be added in the future.
		 * **Note**: If you use this field, make sure that your application safely handles unknown values.
		 */
		reason?: string | null;
	}
	export interface ChapterRestrictionObjectFormProperties {

		/**
		 * The reason for the restriction. Supported values:
		 * - `market` - The content item is not available in the given market.
		 * - `product` - The content item is not available for the user's subscription type.
		 * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
		 * - `payment_required` - Payment is required to play the content item.
		 * Additional reasons may be added in the future.
		 * **Note**: If you use this field, make sure that your application safely handles unknown values.
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateChapterRestrictionObjectFormGroup() {
		return new FormGroup<ChapterRestrictionObjectFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResumePointObject {

		/**
		 * Whether or not the episode has been fully played by the user.
		 */
		fully_played?: boolean | null;

		/**
		 * The user's most recent position in the episode in milliseconds.
		 */
		resume_position_ms?: number | null;
	}
	export interface ResumePointObjectFormProperties {

		/**
		 * Whether or not the episode has been fully played by the user.
		 */
		fully_played: FormControl<boolean | null | undefined>,

		/**
		 * The user's most recent position in the episode in milliseconds.
		 */
		resume_position_ms: FormControl<number | null | undefined>,
	}
	export function CreateResumePointObjectFormGroup() {
		return new FormGroup<ResumePointObjectFormProperties>({
			fully_played: new FormControl<boolean | null | undefined>(undefined),
			resume_position_ms: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ChapterBaseType { episode = 0 }

	export interface ChapterObject {
	}
	export interface ChapterObjectFormProperties {
	}
	export function CreateChapterObjectFormGroup() {
		return new FormGroup<ChapterObjectFormProperties>({
		});

	}

	export interface ContextObject {

		/** External URLs for this context. */
		external_urls?: ExternalUrlObject;

		/** A link to the Web API endpoint providing full details of the track. */
		href?: string | null;

		/**
		 * The object type, e.g. "artist", "playlist", "album", "show".
		 */
		type?: string | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context.
		 */
		uri?: string | null;
	}
	export interface ContextObjectFormProperties {

		/** A link to the Web API endpoint providing full details of the track. */
		href: FormControl<string | null | undefined>,

		/**
		 * The object type, e.g. "artist", "playlist", "album", "show".
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContextObjectFormGroup() {
		return new FormGroup<ContextObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrentlyPlayingContextObject {

		/**
		 * Allows to update the user interface based on which playback actions are available within the current context.
		 */
		actions?: DisallowsObject;

		/** A Context Object. Can be `null`. */
		context?: ContextObject;

		/**
		 * The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
		 */
		currently_playing_type?: string | null;

		/**
		 * The device that is currently active.
		 */
		device?: DeviceObject;

		/** If something is currently playing, return `true`. */
		is_playing?: boolean | null;

		/** The currently playing track or episode. Can be `null`. */
		item?: TrackObject;

		/** Progress into the currently playing track or episode. Can be `null`. */
		progress_ms?: number | null;

		/** off, track, context */
		repeat_state?: string | null;

		/** If shuffle is on or off. */
		shuffle_state?: boolean | null;

		/** Unix Millisecond Timestamp when data was fetched. */
		timestamp?: number | null;
	}
	export interface CurrentlyPlayingContextObjectFormProperties {

		/**
		 * The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
		 */
		currently_playing_type: FormControl<string | null | undefined>,

		/** If something is currently playing, return `true`. */
		is_playing: FormControl<boolean | null | undefined>,

		/** Progress into the currently playing track or episode. Can be `null`. */
		progress_ms: FormControl<number | null | undefined>,

		/** off, track, context */
		repeat_state: FormControl<string | null | undefined>,

		/** If shuffle is on or off. */
		shuffle_state: FormControl<boolean | null | undefined>,

		/** Unix Millisecond Timestamp when data was fetched. */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateCurrentlyPlayingContextObjectFormGroup() {
		return new FormGroup<CurrentlyPlayingContextObjectFormProperties>({
			currently_playing_type: new FormControl<string | null | undefined>(undefined),
			is_playing: new FormControl<boolean | null | undefined>(undefined),
			progress_ms: new FormControl<number | null | undefined>(undefined),
			repeat_state: new FormControl<string | null | undefined>(undefined),
			shuffle_state: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DisallowsObject {

		/** Interrupting playback. Optional field. */
		interrupting_playback?: boolean | null;

		/** Pausing. Optional field. */
		pausing?: boolean | null;

		/** Resuming. Optional field. */
		resuming?: boolean | null;

		/** Seeking playback location. Optional field. */
		seeking?: boolean | null;

		/** Skipping to the next context. Optional field. */
		skipping_next?: boolean | null;

		/** Skipping to the previous context. Optional field. */
		skipping_prev?: boolean | null;

		/** Toggling repeat context flag. Optional field. */
		toggling_repeat_context?: boolean | null;

		/** Toggling repeat track flag. Optional field. */
		toggling_repeat_track?: boolean | null;

		/** Toggling shuffle flag. Optional field. */
		toggling_shuffle?: boolean | null;

		/** Transfering playback between devices. Optional field. */
		transferring_playback?: boolean | null;
	}
	export interface DisallowsObjectFormProperties {

		/** Interrupting playback. Optional field. */
		interrupting_playback: FormControl<boolean | null | undefined>,

		/** Pausing. Optional field. */
		pausing: FormControl<boolean | null | undefined>,

		/** Resuming. Optional field. */
		resuming: FormControl<boolean | null | undefined>,

		/** Seeking playback location. Optional field. */
		seeking: FormControl<boolean | null | undefined>,

		/** Skipping to the next context. Optional field. */
		skipping_next: FormControl<boolean | null | undefined>,

		/** Skipping to the previous context. Optional field. */
		skipping_prev: FormControl<boolean | null | undefined>,

		/** Toggling repeat context flag. Optional field. */
		toggling_repeat_context: FormControl<boolean | null | undefined>,

		/** Toggling repeat track flag. Optional field. */
		toggling_repeat_track: FormControl<boolean | null | undefined>,

		/** Toggling shuffle flag. Optional field. */
		toggling_shuffle: FormControl<boolean | null | undefined>,

		/** Transfering playback between devices. Optional field. */
		transferring_playback: FormControl<boolean | null | undefined>,
	}
	export function CreateDisallowsObjectFormGroup() {
		return new FormGroup<DisallowsObjectFormProperties>({
			interrupting_playback: new FormControl<boolean | null | undefined>(undefined),
			pausing: new FormControl<boolean | null | undefined>(undefined),
			resuming: new FormControl<boolean | null | undefined>(undefined),
			seeking: new FormControl<boolean | null | undefined>(undefined),
			skipping_next: new FormControl<boolean | null | undefined>(undefined),
			skipping_prev: new FormControl<boolean | null | undefined>(undefined),
			toggling_repeat_context: new FormControl<boolean | null | undefined>(undefined),
			toggling_repeat_track: new FormControl<boolean | null | undefined>(undefined),
			toggling_shuffle: new FormControl<boolean | null | undefined>(undefined),
			transferring_playback: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeviceObject {

		/** The device ID. */
		id?: string | null;

		/** If this device is the currently active device. */
		is_active?: boolean | null;

		/** If this device is currently in a private session. */
		is_private_session?: boolean | null;

		/** Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device. */
		is_restricted?: boolean | null;

		/** A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model. */
		name?: string | null;

		/** Device type, such as "computer", "smartphone" or "speaker". */
		type?: string | null;

		/**
		 * The current volume in percent.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volume_percent?: number | null;
	}
	export interface DeviceObjectFormProperties {

		/** The device ID. */
		id: FormControl<string | null | undefined>,

		/** If this device is the currently active device. */
		is_active: FormControl<boolean | null | undefined>,

		/** If this device is currently in a private session. */
		is_private_session: FormControl<boolean | null | undefined>,

		/** Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device. */
		is_restricted: FormControl<boolean | null | undefined>,

		/** A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model. */
		name: FormControl<string | null | undefined>,

		/** Device type, such as "computer", "smartphone" or "speaker". */
		type: FormControl<string | null | undefined>,

		/**
		 * The current volume in percent.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volume_percent: FormControl<number | null | undefined>,
	}
	export function CreateDeviceObjectFormGroup() {
		return new FormGroup<DeviceObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			is_active: new FormControl<boolean | null | undefined>(undefined),
			is_private_session: new FormControl<boolean | null | undefined>(undefined),
			is_restricted: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			volume_percent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface TrackObject {

		/**
		 * The album on which the track appears. The album object includes a link in `href` to full information about the album.
		 */
		album?: SimplifiedAlbumObject;

		/**
		 * The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.
		 */
		artists?: Array<ArtistObject>;

		/**
		 * A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
		 */
		available_markets?: Array<string>;

		/**
		 * The disc number (usually `1` unless the album consists of more than one disc).
		 */
		disc_number?: number | null;

		/**
		 * The track length in milliseconds.
		 */
		duration_ms?: number | null;

		/**
		 * Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).
		 */
		explicit?: boolean | null;

		/**
		 * Known external IDs for the track.
		 */
		external_ids?: ExternalIdObject;

		/**
		 * Known external URLs for this track.
		 */
		external_urls?: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the track.
		 */
		href?: string | null;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		id?: string | null;

		/**
		 * Whether or not the track is from a local file.
		 */
		is_local?: boolean | null;

		/**
		 * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
		 */
		is_playable?: boolean | null;

		/**
		 * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track.
		 */
		linked_from?: string | null;

		/**
		 * The name of the track.
		 */
		name?: string | null;

		/**
		 * The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._
		 */
		popularity?: number | null;

		/**
		 * A link to a 30 second preview (MP3 format) of the track. Can be `null`
		 */
		preview_url?: string | null;

		/**
		 * Included in the response when a content restriction is applied.
		 */
		restrictions?: TrackRestrictionObject;

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 */
		track_number?: number | null;

		/**
		 * The object type: "track".
		 */
		type?: TrackObjectType | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		uri?: string | null;
	}
	export interface TrackObjectFormProperties {

		/**
		 * The disc number (usually `1` unless the album consists of more than one disc).
		 */
		disc_number: FormControl<number | null | undefined>,

		/**
		 * The track length in milliseconds.
		 */
		duration_ms: FormControl<number | null | undefined>,

		/**
		 * Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).
		 */
		explicit: FormControl<boolean | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the track.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether or not the track is from a local file.
		 */
		is_local: FormControl<boolean | null | undefined>,

		/**
		 * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
		 */
		is_playable: FormControl<boolean | null | undefined>,

		/**
		 * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track.
		 */
		linked_from: FormControl<string | null | undefined>,

		/**
		 * The name of the track.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._
		 */
		popularity: FormControl<number | null | undefined>,

		/**
		 * A link to a 30 second preview (MP3 format) of the track. Can be `null`
		 */
		preview_url: FormControl<string | null | undefined>,

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 */
		track_number: FormControl<number | null | undefined>,

		/**
		 * The object type: "track".
		 */
		type: FormControl<TrackObjectType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTrackObjectFormGroup() {
		return new FormGroup<TrackObjectFormProperties>({
			disc_number: new FormControl<number | null | undefined>(undefined),
			duration_ms: new FormControl<number | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_local: new FormControl<boolean | null | undefined>(undefined),
			is_playable: new FormControl<boolean | null | undefined>(undefined),
			linked_from: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			popularity: new FormControl<number | null | undefined>(undefined),
			preview_url: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<TrackObjectType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackRestrictionObject {

		/**
		 * The reason for the restriction. Supported values:
		 * - `market` - The content item is not available in the given market.
		 * - `product` - The content item is not available for the user's subscription type.
		 * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
		 * Additional reasons may be added in the future.
		 * **Note**: If you use this field, make sure that your application safely handles unknown values.
		 */
		reason?: string | null;
	}
	export interface TrackRestrictionObjectFormProperties {

		/**
		 * The reason for the restriction. Supported values:
		 * - `market` - The content item is not available in the given market.
		 * - `product` - The content item is not available for the user's subscription type.
		 * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
		 * Additional reasons may be added in the future.
		 * **Note**: If you use this field, make sure that your application safely handles unknown values.
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateTrackRestrictionObjectFormGroup() {
		return new FormGroup<TrackRestrictionObjectFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrackObjectType { track = 0 }

	export interface CurrentlyPlayingObject {

		/** A Context Object. Can be `null`. */
		context?: ContextObject;

		/**
		 * The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
		 */
		currently_playing_type?: string | null;

		/** If something is currently playing, return `true`. */
		is_playing?: boolean | null;

		/** The currently playing track or episode. Can be `null`. */
		item?: TrackObject;

		/** Progress into the currently playing track or episode. Can be `null`. */
		progress_ms?: number | null;

		/** Unix Millisecond Timestamp when data was fetched */
		timestamp?: number | null;
	}
	export interface CurrentlyPlayingObjectFormProperties {

		/**
		 * The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
		 */
		currently_playing_type: FormControl<string | null | undefined>,

		/** If something is currently playing, return `true`. */
		is_playing: FormControl<boolean | null | undefined>,

		/** Progress into the currently playing track or episode. Can be `null`. */
		progress_ms: FormControl<number | null | undefined>,

		/** Unix Millisecond Timestamp when data was fetched */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateCurrentlyPlayingObjectFormGroup() {
		return new FormGroup<CurrentlyPlayingObjectFormProperties>({
			currently_playing_type: new FormControl<string | null | undefined>(undefined),
			is_playing: new FormControl<boolean | null | undefined>(undefined),
			progress_ms: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CursorObject {

		/** The cursor to use as key to find the next page of items. */
		after?: string | null;

		/** The cursor to use as key to find the previous page of items. */
		before?: string | null;
	}
	export interface CursorObjectFormProperties {

		/** The cursor to use as key to find the next page of items. */
		after: FormControl<string | null | undefined>,

		/** The cursor to use as key to find the previous page of items. */
		before: FormControl<string | null | undefined>,
	}
	export function CreateCursorObjectFormGroup() {
		return new FormGroup<CursorObjectFormProperties>({
			after: new FormControl<string | null | undefined>(undefined),
			before: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CursorPagingObject {

		/** The cursors used to find the next set of items. */
		cursors?: CursorObject;

		/** A link to the Web API endpoint returning the full result of the request. */
		href?: string | null;

		/** The maximum number of items in the response (as set in the query or by default). */
		limit?: number | null;

		/** URL to the next page of items. ( `null` if none) */
		next?: string | null;

		/** The total number of items available to return. */
		total?: number | null;
	}
	export interface CursorPagingObjectFormProperties {

		/** A link to the Web API endpoint returning the full result of the request. */
		href: FormControl<string | null | undefined>,

		/** The maximum number of items in the response (as set in the query or by default). */
		limit: FormControl<number | null | undefined>,

		/** URL to the next page of items. ( `null` if none) */
		next: FormControl<string | null | undefined>,

		/** The total number of items available to return. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCursorPagingObjectFormGroup() {
		return new FormGroup<CursorPagingObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CursorPagingPlayHistoryObject {
	}
	export interface CursorPagingPlayHistoryObjectFormProperties {
	}
	export function CreateCursorPagingPlayHistoryObjectFormGroup() {
		return new FormGroup<CursorPagingPlayHistoryObjectFormProperties>({
		});

	}

	export interface CursorPagingSimplifiedArtistObject {
	}
	export interface CursorPagingSimplifiedArtistObjectFormProperties {
	}
	export function CreateCursorPagingSimplifiedArtistObjectFormGroup() {
		return new FormGroup<CursorPagingSimplifiedArtistObjectFormProperties>({
		});

	}

	export interface DevicesObject {

		/** A list of 0..n Device objects */
		devices?: Array<DeviceObject>;
	}
	export interface DevicesObjectFormProperties {
	}
	export function CreateDevicesObjectFormGroup() {
		return new FormGroup<DevicesObjectFormProperties>({
		});

	}

	export interface EpisodeBase {

		/**
		 * A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.
		 * Required
		 */
		audio_preview_url: string;

		/**
		 * A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: string;

		/**
		 * The episode length in milliseconds.
		 * Required
		 */
		duration_ms: number;

		/**
		 * Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: boolean;

		/**
		 * External URLs for this episode.
		 * Required
		 */
		external_urls: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the episode.
		 * Required
		 */
		href: string;

		/**
		 * A description of the episode. This field may contain HTML tags.
		 * Required
		 */
		html_description: string;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		id: string;

		/**
		 * The cover art for the episode in various sizes, widest first.
		 * Required
		 */
		images: Array<ImageObject>;

		/**
		 * True if the episode is hosted outside of Spotify's CDN.
		 * Required
		 */
		is_externally_hosted: boolean;

		/**
		 * True if the episode is playable in the given market. Otherwise false.
		 * Required
		 */
		is_playable: boolean;

		/**
		 * The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.
		 */
		language?: string | null;

		/**
		 * A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
		 * Required
		 */
		languages: Array<string>;

		/**
		 * The name of the episode.
		 * Required
		 */
		name: string;

		/**
		 * The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
		 * Required
		 */
		release_date: string;

		/**
		 * The precision with which `release_date` value is known.
		 * Required
		 */
		release_date_precision: AlbumBaseRelease_date_precision;

		/**
		 * Included in the response when a content restriction is applied.
		 */
		restrictions?: EpisodeRestrictionObject;

		/**
		 * The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
		 * Required
		 */
		resume_point: ResumePointObject;

		/**
		 * The object type.
		 * Required
		 */
		type: ChapterBaseType;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		uri: string;
	}
	export interface EpisodeBaseFormProperties {

		/**
		 * A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.
		 * Required
		 */
		audio_preview_url: FormControl<string | null | undefined>,

		/**
		 * A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The episode length in milliseconds.
		 * Required
		 */
		duration_ms: FormControl<number | null | undefined>,

		/**
		 * Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: FormControl<boolean | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the episode.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * A description of the episode. This field may contain HTML tags.
		 * Required
		 */
		html_description: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * True if the episode is hosted outside of Spotify's CDN.
		 * Required
		 */
		is_externally_hosted: FormControl<boolean | null | undefined>,

		/**
		 * True if the episode is playable in the given market. Otherwise false.
		 * Required
		 */
		is_playable: FormControl<boolean | null | undefined>,

		/**
		 * The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * The name of the episode.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
		 * Required
		 */
		release_date: FormControl<string | null | undefined>,

		/**
		 * The precision with which `release_date` value is known.
		 * Required
		 */
		release_date_precision: FormControl<AlbumBaseRelease_date_precision | null | undefined>,

		/**
		 * The object type.
		 * Required
		 */
		type: FormControl<ChapterBaseType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeBaseFormGroup() {
		return new FormGroup<EpisodeBaseFormProperties>({
			audio_preview_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration_ms: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_externally_hosted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_playable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date_precision: new FormControl<AlbumBaseRelease_date_precision | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ChapterBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EpisodeRestrictionObject {

		/**
		 * The reason for the restriction. Supported values:
		 * - `market` - The content item is not available in the given market.
		 * - `product` - The content item is not available for the user's subscription type.
		 * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
		 * Additional reasons may be added in the future.
		 * **Note**: If you use this field, make sure that your application safely handles unknown values.
		 */
		reason?: string | null;
	}
	export interface EpisodeRestrictionObjectFormProperties {

		/**
		 * The reason for the restriction. Supported values:
		 * - `market` - The content item is not available in the given market.
		 * - `product` - The content item is not available for the user's subscription type.
		 * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
		 * Additional reasons may be added in the future.
		 * **Note**: If you use this field, make sure that your application safely handles unknown values.
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeRestrictionObjectFormGroup() {
		return new FormGroup<EpisodeRestrictionObjectFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EpisodeObject {
	}
	export interface EpisodeObjectFormProperties {
	}
	export function CreateEpisodeObjectFormGroup() {
		return new FormGroup<EpisodeObjectFormProperties>({
		});

	}

	export interface ErrorObject {

		/**
		 * A short description of the cause of the error.
		 * Required
		 */
		message: string;

		/**
		 * The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information).
		 * Required
		 * Minimum: 400
		 * Maximum: 599
		 */
		status: number;
	}
	export interface ErrorObjectFormProperties {

		/**
		 * A short description of the cause of the error.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information).
		 * Required
		 * Minimum: 400
		 * Maximum: 599
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorObjectFormGroup() {
		return new FormGroup<ErrorObjectFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(400), Validators.max(599)]),
		});

	}

	export interface ExplicitContentSettingsObject {

		/**
		 * When `true`, indicates that explicit content should not be played.
		 */
		filter_enabled?: boolean | null;

		/**
		 * When `true`, indicates that the explicit content setting is locked and can't be changed by the user.
		 */
		filter_locked?: boolean | null;
	}
	export interface ExplicitContentSettingsObjectFormProperties {

		/**
		 * When `true`, indicates that explicit content should not be played.
		 */
		filter_enabled: FormControl<boolean | null | undefined>,

		/**
		 * When `true`, indicates that the explicit content setting is locked and can't be changed by the user.
		 */
		filter_locked: FormControl<boolean | null | undefined>,
	}
	export function CreateExplicitContentSettingsObjectFormGroup() {
		return new FormGroup<ExplicitContentSettingsObjectFormProperties>({
			filter_enabled: new FormControl<boolean | null | undefined>(undefined),
			filter_locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LinkedTrackObject {

		/**
		 * Known external URLs for this track.
		 */
		external_urls?: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the track.
		 */
		href?: string | null;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		id?: string | null;

		/**
		 * The object type: "track".
		 */
		type?: string | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		uri?: string | null;
	}
	export interface LinkedTrackObjectFormProperties {

		/**
		 * A link to the Web API endpoint providing full details of the track.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The object type: "track".
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTrackObjectFormGroup() {
		return new FormGroup<LinkedTrackObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagingArtistObject {
	}
	export interface PagingArtistObjectFormProperties {
	}
	export function CreatePagingArtistObjectFormGroup() {
		return new FormGroup<PagingArtistObjectFormProperties>({
		});

	}

	export interface PagingFeaturedPlaylistObject {
		message?: string | null;
		playlists?: PagingPlaylistObject;
	}
	export interface PagingFeaturedPlaylistObjectFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreatePagingFeaturedPlaylistObjectFormGroup() {
		return new FormGroup<PagingFeaturedPlaylistObjectFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagingPlaylistObject {
	}
	export interface PagingPlaylistObjectFormProperties {
	}
	export function CreatePagingPlaylistObjectFormGroup() {
		return new FormGroup<PagingPlaylistObjectFormProperties>({
		});

	}

	export interface PagingObject {

		/**
		 * A link to the Web API endpoint returning the full result of the request
		 * Required
		 */
		href: string;

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Required
		 */
		limit: number;

		/**
		 * URL to the next page of items. ( `null` if none)
		 * Required
		 */
		next: string;

		/**
		 * The offset of the items returned (as set in the query or by default)
		 * Required
		 */
		offset: number;

		/**
		 * URL to the previous page of items. ( `null` if none)
		 * Required
		 */
		previous: string;

		/**
		 * The total number of items available to return.
		 * Required
		 */
		total: number;
	}
	export interface PagingObjectFormProperties {

		/**
		 * A link to the Web API endpoint returning the full result of the request
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the response (as set in the query or by default).
		 * Required
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * URL to the next page of items. ( `null` if none)
		 * Required
		 */
		next: FormControl<string | null | undefined>,

		/**
		 * The offset of the items returned (as set in the query or by default)
		 * Required
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * URL to the previous page of items. ( `null` if none)
		 * Required
		 */
		previous: FormControl<string | null | undefined>,

		/**
		 * The total number of items available to return.
		 * Required
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePagingObjectFormGroup() {
		return new FormGroup<PagingObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PagingPlaylistTrackObject {
	}
	export interface PagingPlaylistTrackObjectFormProperties {
	}
	export function CreatePagingPlaylistTrackObjectFormGroup() {
		return new FormGroup<PagingPlaylistTrackObjectFormProperties>({
		});

	}

	export interface PagingSavedAlbumObject {
	}
	export interface PagingSavedAlbumObjectFormProperties {
	}
	export function CreatePagingSavedAlbumObjectFormGroup() {
		return new FormGroup<PagingSavedAlbumObjectFormProperties>({
		});

	}

	export interface PagingSavedEpisodeObject {
	}
	export interface PagingSavedEpisodeObjectFormProperties {
	}
	export function CreatePagingSavedEpisodeObjectFormGroup() {
		return new FormGroup<PagingSavedEpisodeObjectFormProperties>({
		});

	}

	export interface PagingSavedShowObject {
	}
	export interface PagingSavedShowObjectFormProperties {
	}
	export function CreatePagingSavedShowObjectFormGroup() {
		return new FormGroup<PagingSavedShowObjectFormProperties>({
		});

	}

	export interface PagingSavedTrackObject {
	}
	export interface PagingSavedTrackObjectFormProperties {
	}
	export function CreatePagingSavedTrackObjectFormGroup() {
		return new FormGroup<PagingSavedTrackObjectFormProperties>({
		});

	}

	export interface PagingSimplifiedAlbumObject {
	}
	export interface PagingSimplifiedAlbumObjectFormProperties {
	}
	export function CreatePagingSimplifiedAlbumObjectFormGroup() {
		return new FormGroup<PagingSimplifiedAlbumObjectFormProperties>({
		});

	}

	export interface PagingSimplifiedArtistObject {
	}
	export interface PagingSimplifiedArtistObjectFormProperties {
	}
	export function CreatePagingSimplifiedArtistObjectFormGroup() {
		return new FormGroup<PagingSimplifiedArtistObjectFormProperties>({
		});

	}

	export interface PagingSimplifiedAudiobookObject {
	}
	export interface PagingSimplifiedAudiobookObjectFormProperties {
	}
	export function CreatePagingSimplifiedAudiobookObjectFormGroup() {
		return new FormGroup<PagingSimplifiedAudiobookObjectFormProperties>({
		});

	}

	export interface PagingSimplifiedChapterObject {
	}
	export interface PagingSimplifiedChapterObjectFormProperties {
	}
	export function CreatePagingSimplifiedChapterObjectFormGroup() {
		return new FormGroup<PagingSimplifiedChapterObjectFormProperties>({
		});

	}

	export interface PagingSimplifiedEpisodeObject {
	}
	export interface PagingSimplifiedEpisodeObjectFormProperties {
	}
	export function CreatePagingSimplifiedEpisodeObjectFormGroup() {
		return new FormGroup<PagingSimplifiedEpisodeObjectFormProperties>({
		});

	}

	export interface PagingSimplifiedShowObject {
	}
	export interface PagingSimplifiedShowObjectFormProperties {
	}
	export function CreatePagingSimplifiedShowObjectFormGroup() {
		return new FormGroup<PagingSimplifiedShowObjectFormProperties>({
		});

	}

	export interface PagingTrackObject {
	}
	export interface PagingTrackObjectFormProperties {
	}
	export function CreatePagingTrackObjectFormGroup() {
		return new FormGroup<PagingTrackObjectFormProperties>({
		});

	}

	export interface PlayHistoryObject {

		/** The context the track was played from. */
		context?: ContextObject;

		/** The date and time the track was played. */
		played_at?: Date | null;

		/** The track the user listened to. */
		track?: TrackObject;
	}
	export interface PlayHistoryObjectFormProperties {

		/** The date and time the track was played. */
		played_at: FormControl<Date | null | undefined>,
	}
	export function CreatePlayHistoryObjectFormGroup() {
		return new FormGroup<PlayHistoryObjectFormProperties>({
			played_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PlayerErrorObject {

		/**
		 * A short description of the cause of the error.
		 */
		message?: string | null;
		reason?: PlayerErrorReasons;

		/**
		 * The HTTP status code. Either `404 NOT FOUND` or `403 FORBIDDEN`.  Also returned in the response header.
		 */
		status?: number | null;
	}
	export interface PlayerErrorObjectFormProperties {

		/**
		 * A short description of the cause of the error.
		 */
		message: FormControl<string | null | undefined>,
		reason: FormControl<PlayerErrorReasons | null | undefined>,

		/**
		 * The HTTP status code. Either `404 NOT FOUND` or `403 FORBIDDEN`.  Also returned in the response header.
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreatePlayerErrorObjectFormGroup() {
		return new FormGroup<PlayerErrorObjectFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<PlayerErrorReasons | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * * `NO_PREV_TRACK` - The command requires a previous track, but there is none in the context.
	 * * `NO_NEXT_TRACK` - The command requires a next track, but there is none in the context.
	 * * `NO_SPECIFIC_TRACK` - The requested track does not exist.
	 * * `ALREADY_PAUSED` - The command requires playback to not be paused.
	 * * `NOT_PAUSED` - The command requires playback to be paused.
	 * * `NOT_PLAYING_LOCALLY` - The command requires playback on the local device.
	 * * `NOT_PLAYING_TRACK` - The command requires that a track is currently playing.
	 * * `NOT_PLAYING_CONTEXT` - The command requires that a context is currently playing.
	 * * `ENDLESS_CONTEXT` - The shuffle command cannot be applied on an endless context.
	 * * `CONTEXT_DISALLOW` - The command could not be performed on the context.
	 * * `ALREADY_PLAYING` - The track should not be restarted if the same track and context is already playing, and there is a resume point.
	 * * `RATE_LIMITED` - The user is rate limited due to too frequent track play, also known as cat-on-the-keyboard spamming.
	 * * `REMOTE_CONTROL_DISALLOW` - The context cannot be remote-controlled.
	 * * `DEVICE_NOT_CONTROLLABLE` - Not possible to remote control the device.
	 * * `VOLUME_CONTROL_DISALLOW` - Not possible to remote control the device's volume.
	 * * `NO_ACTIVE_DEVICE` - Requires an active device and the user has none.
	 * * `PREMIUM_REQUIRED` - The request is prohibited for non-premium users.
	 * * `UNKNOWN` - Certain actions are restricted because of unknown reasons.
	 */
	export enum PlayerErrorReasons { NO_PREV_TRACK = 0, NO_NEXT_TRACK = 1, NO_SPECIFIC_TRACK = 2, ALREADY_PAUSED = 3, NOT_PAUSED = 4, NOT_PLAYING_LOCALLY = 5, NOT_PLAYING_TRACK = 6, NOT_PLAYING_CONTEXT = 7, ENDLESS_CONTEXT = 8, CONTEXT_DISALLOW = 9, ALREADY_PLAYING = 10, RATE_LIMITED = 11, REMOTE_CONTROL_DISALLOW = 12, DEVICE_NOT_CONTROLLABLE = 13, VOLUME_CONTROL_DISALLOW = 14, NO_ACTIVE_DEVICE = 15, PREMIUM_REQUIRED = 16, UNKNOWN = 17 }

	export interface PlaylistObject {

		/**
		 * `true` if the owner allows other users to modify the playlist.
		 */
		collaborative?: boolean | null;

		/**
		 * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
		 */
		description?: string | null;

		/**
		 * Known external URLs for this playlist.
		 */
		external_urls?: ExternalUrlObject;

		/** Information about the followers of the playlist. */
		followers?: FollowersObject;

		/**
		 * A link to the Web API endpoint providing full details of the playlist.
		 */
		href?: string | null;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		id?: string | null;

		/**
		 * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
		 */
		images?: Array<ImageObject>;

		/**
		 * The name of the playlist.
		 */
		name?: string | null;

		/**
		 * The user who owns the playlist
		 */
		owner?: PlaylistOwnerObject;

		/**
		 * The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
		 */
		public?: boolean | null;

		/**
		 * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
		 */
		snapshot_id?: string | null;

		/**
		 * The tracks of the playlist.
		 */
		tracks?: string | null;

		/**
		 * The object type: "playlist"
		 */
		type?: string | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		uri?: string | null;
	}
	export interface PlaylistObjectFormProperties {

		/**
		 * `true` if the owner allows other users to modify the playlist.
		 */
		collaborative: FormControl<boolean | null | undefined>,

		/**
		 * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the playlist.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the playlist.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
		 */
		snapshot_id: FormControl<string | null | undefined>,

		/**
		 * The tracks of the playlist.
		 */
		tracks: FormControl<string | null | undefined>,

		/**
		 * The object type: "playlist"
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistObjectFormGroup() {
		return new FormGroup<PlaylistObjectFormProperties>({
			collaborative: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			snapshot_id: new FormControl<string | null | undefined>(undefined),
			tracks: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistOwnerObject extends PlaylistUserObject {

		/**
		 * The name displayed on the user's profile. `null` if not available.
		 */
		display_name?: string | null;
	}
	export interface PlaylistOwnerObjectFormProperties extends PlaylistUserObjectFormProperties {

		/**
		 * The name displayed on the user's profile. `null` if not available.
		 */
		display_name: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistOwnerObjectFormGroup() {
		return new FormGroup<PlaylistOwnerObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlaylistUserObjectType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistTrackObject {

		/**
		 * The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._
		 */
		added_at?: Date | null;

		/**
		 * The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._
		 */
		added_by?: PlaylistUserObject;

		/**
		 * Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.
		 */
		is_local?: boolean | null;

		/** Information about the track or episode. */
		track?: TrackObject;
	}
	export interface PlaylistTrackObjectFormProperties {

		/**
		 * The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._
		 */
		added_at: FormControl<Date | null | undefined>,

		/**
		 * Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.
		 */
		is_local: FormControl<boolean | null | undefined>,
	}
	export function CreatePlaylistTrackObjectFormGroup() {
		return new FormGroup<PlaylistTrackObjectFormProperties>({
			added_at: new FormControl<Date | null | undefined>(undefined),
			is_local: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PlaylistUserObject {

		/**
		 * Known public external URLs for this user.
		 */
		external_urls?: ExternalUrlObject;

		/**
		 * Information about the followers of this user.
		 */
		followers?: FollowersObject;

		/**
		 * A link to the Web API endpoint for this user.
		 */
		href?: string | null;

		/**
		 * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		id?: string | null;

		/**
		 * The object type.
		 */
		type?: PlaylistUserObjectType | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		uri?: string | null;
	}
	export interface PlaylistUserObjectFormProperties {

		/**
		 * A link to the Web API endpoint for this user.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The object type.
		 */
		type: FormControl<PlaylistUserObjectType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistUserObjectFormGroup() {
		return new FormGroup<PlaylistUserObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlaylistUserObjectType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlaylistUserObjectType { user = 0 }

	export interface PlaylistTracksRefObject {

		/**
		 * A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.
		 */
		href?: string | null;

		/**
		 * Number of tracks in the playlist.
		 */
		total?: number | null;
	}
	export interface PlaylistTracksRefObjectFormProperties {

		/**
		 * A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * Number of tracks in the playlist.
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePlaylistTracksRefObjectFormGroup() {
		return new FormGroup<PlaylistTracksRefObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PrivateUserObject {

		/**
		 * The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
		 */
		country?: string | null;

		/**
		 * The name displayed on the user's profile. `null` if not available.
		 */
		display_name?: string | null;

		/**
		 * The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
		 */
		email?: string | null;

		/**
		 * The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
		 */
		explicit_content?: ExplicitContentSettingsObject;

		/** Known external URLs for this user. */
		external_urls?: ExternalUrlObject;

		/** Information about the followers of the user. */
		followers?: FollowersObject;

		/**
		 * A link to the Web API endpoint for this user.
		 */
		href?: string | null;

		/**
		 * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user.
		 */
		id?: string | null;

		/** The user's profile image. */
		images?: Array<ImageObject>;

		/**
		 * The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
		 */
		product?: string | null;

		/**
		 * The object type: "user"
		 */
		type?: string | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.
		 */
		uri?: string | null;
	}
	export interface PrivateUserObjectFormProperties {

		/**
		 * The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The name displayed on the user's profile. `null` if not available.
		 */
		display_name: FormControl<string | null | undefined>,

		/**
		 * The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * A link to the Web API endpoint for this user.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
		 */
		product: FormControl<string | null | undefined>,

		/**
		 * The object type: "user"
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePrivateUserObjectFormGroup() {
		return new FormGroup<PrivateUserObjectFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicUserObject {

		/**
		 * The name displayed on the user's profile. `null` if not available.
		 */
		display_name?: string | null;

		/**
		 * Known public external URLs for this user.
		 */
		external_urls?: ExternalUrlObject;

		/**
		 * Information about the followers of this user.
		 */
		followers?: FollowersObject;

		/**
		 * A link to the Web API endpoint for this user.
		 */
		href?: string | null;

		/**
		 * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		id?: string | null;

		/**
		 * The user's profile image.
		 */
		images?: Array<ImageObject>;

		/**
		 * The object type.
		 */
		type?: PlaylistUserObjectType | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		uri?: string | null;
	}
	export interface PublicUserObjectFormProperties {

		/**
		 * The name displayed on the user's profile. `null` if not available.
		 */
		display_name: FormControl<string | null | undefined>,

		/**
		 * A link to the Web API endpoint for this user.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The object type.
		 */
		type: FormControl<PlaylistUserObjectType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePublicUserObjectFormGroup() {
		return new FormGroup<PublicUserObjectFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlaylistUserObjectType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueueObject {

		/** The currently playing track or episode. Can be `null`. */
		currently_playing?: TrackObject;

		/** The tracks or episodes in the queue. Can be empty. */
		queue?: Array<string>;
	}
	export interface QueueObjectFormProperties {
	}
	export function CreateQueueObjectFormGroup() {
		return new FormGroup<QueueObjectFormProperties>({
		});

	}

	export interface RecommendationSeedObject {

		/**
		 * The number of tracks available after min\_\* and max\_\* filters have been applied.
		 */
		afterFilteringSize?: number | null;

		/**
		 * The number of tracks available after relinking for regional availability.
		 */
		afterRelinkingSize?: number | null;

		/**
		 * A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.
		 */
		href?: string | null;

		/**
		 * The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.
		 */
		id?: string | null;

		/**
		 * The number of recommended tracks available for this seed.
		 */
		initialPoolSize?: number | null;

		/**
		 * The entity type of this seed. One of `artist`, `track` or `genre`.
		 */
		type?: string | null;
	}
	export interface RecommendationSeedObjectFormProperties {

		/**
		 * The number of tracks available after min\_\* and max\_\* filters have been applied.
		 */
		afterFilteringSize: FormControl<number | null | undefined>,

		/**
		 * The number of tracks available after relinking for regional availability.
		 */
		afterRelinkingSize: FormControl<number | null | undefined>,

		/**
		 * A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The number of recommended tracks available for this seed.
		 */
		initialPoolSize: FormControl<number | null | undefined>,

		/**
		 * The entity type of this seed. One of `artist`, `track` or `genre`.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationSeedObjectFormGroup() {
		return new FormGroup<RecommendationSeedObjectFormProperties>({
			afterFilteringSize: new FormControl<number | null | undefined>(undefined),
			afterRelinkingSize: new FormControl<number | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initialPoolSize: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecommendationsObject {

		/**
		 * An array of recommendation seed objects.
		 * Required
		 */
		seeds: Array<RecommendationSeedObject>;

		/**
		 * An array of track object (simplified) ordered according to the parameters supplied.
		 * Required
		 */
		tracks: Array<TrackObject>;
	}
	export interface RecommendationsObjectFormProperties {
	}
	export function CreateRecommendationsObjectFormGroup() {
		return new FormGroup<RecommendationsObjectFormProperties>({
		});

	}

	export interface SavedAlbumObject {

		/**
		 * The date and time the album was saved
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
		 */
		added_at?: Date | null;

		/** Information about the album. */
		album?: AlbumObject;
	}
	export interface SavedAlbumObjectFormProperties {

		/**
		 * The date and time the album was saved
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
		 */
		added_at: FormControl<Date | null | undefined>,
	}
	export function CreateSavedAlbumObjectFormGroup() {
		return new FormGroup<SavedAlbumObjectFormProperties>({
			added_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SavedEpisodeObject {

		/**
		 * The date and time the episode was saved.
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 */
		added_at?: Date | null;

		/** Information about the episode. */
		episode?: EpisodeObject;
	}
	export interface SavedEpisodeObjectFormProperties {

		/**
		 * The date and time the episode was saved.
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 */
		added_at: FormControl<Date | null | undefined>,
	}
	export function CreateSavedEpisodeObjectFormGroup() {
		return new FormGroup<SavedEpisodeObjectFormProperties>({
			added_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SavedShowObject {

		/**
		 * The date and time the show was saved.
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
		 */
		added_at?: Date | null;

		/** Information about the show. */
		show?: SimplifiedShowObject;
	}
	export interface SavedShowObjectFormProperties {

		/**
		 * The date and time the show was saved.
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
		 */
		added_at: FormControl<Date | null | undefined>,
	}
	export function CreateSavedShowObjectFormGroup() {
		return new FormGroup<SavedShowObjectFormProperties>({
			added_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SavedTrackObject {

		/**
		 * The date and time the track was saved.
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
		 */
		added_at?: Date | null;

		/** Information about the track. */
		track?: TrackObject;
	}
	export interface SavedTrackObjectFormProperties {

		/**
		 * The date and time the track was saved.
		 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
		 * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
		 */
		added_at: FormControl<Date | null | undefined>,
	}
	export function CreateSavedTrackObjectFormGroup() {
		return new FormGroup<SavedTrackObjectFormProperties>({
			added_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ShowBase {

		/**
		 * A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
		 * Required
		 */
		available_markets: Array<string>;

		/**
		 * The copyright statements of the show.
		 * Required
		 */
		copyrights: Array<CopyrightObject>;

		/**
		 * A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: string;

		/**
		 * Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: boolean;

		/**
		 * External URLs for this show.
		 * Required
		 */
		external_urls: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the show.
		 * Required
		 */
		href: string;

		/**
		 * A description of the show. This field may contain HTML tags.
		 * Required
		 */
		html_description: string;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.
		 * Required
		 */
		id: string;

		/**
		 * The cover art for the show in various sizes, widest first.
		 * Required
		 */
		images: Array<ImageObject>;

		/**
		 * True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.
		 * Required
		 */
		is_externally_hosted: boolean;

		/**
		 * A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
		 * Required
		 */
		languages: Array<string>;

		/**
		 * The media type of the show.
		 * Required
		 */
		media_type: string;

		/**
		 * The name of the episode.
		 * Required
		 */
		name: string;

		/**
		 * The publisher of the show.
		 * Required
		 */
		publisher: string;

		/**
		 * The total number of episodes in the show.
		 * Required
		 */
		total_episodes: number;

		/**
		 * The object type.
		 * Required
		 */
		type: ShowBaseType;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.
		 * Required
		 */
		uri: string;
	}
	export interface ShowBaseFormProperties {

		/**
		 * A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
		 * Required
		 */
		explicit: FormControl<boolean | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the show.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * A description of the show. This field may contain HTML tags.
		 * Required
		 */
		html_description: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.
		 * Required
		 */
		is_externally_hosted: FormControl<boolean | null | undefined>,

		/**
		 * The media type of the show.
		 * Required
		 */
		media_type: FormControl<string | null | undefined>,

		/**
		 * The name of the episode.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The publisher of the show.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * The total number of episodes in the show.
		 * Required
		 */
		total_episodes: FormControl<number | null | undefined>,

		/**
		 * The object type.
		 * Required
		 */
		type: FormControl<ShowBaseType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateShowBaseFormGroup() {
		return new FormGroup<ShowBaseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_externally_hosted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_episodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ShowBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ShowBaseType { show = 0 }

	export interface ShowObject extends ShowBase {

		/**
		 * The episodes of the show.
		 * Required
		 */
		episodes: string;
	}
	export interface ShowObjectFormProperties extends ShowBaseFormProperties {

		/**
		 * The episodes of the show.
		 * Required
		 */
		episodes: FormControl<string | null | undefined>,
	}
	export function CreateShowObjectFormGroup() {
		return new FormGroup<ShowObjectFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_externally_hosted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_episodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ShowBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			episodes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SimplifiedAlbumObject extends AlbumBase {

		/**
		 * The field is present when getting an artist's albums. Compare to album_type this field represents relationship between the artist and the album.
		 */
		album_group?: SimplifiedAlbumObjectAlbum_group | null;

		/**
		 * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
		 * Required
		 */
		artists: Array<SimplifiedArtistObject>;
	}
	export interface SimplifiedAlbumObjectFormProperties extends AlbumBaseFormProperties {

		/**
		 * The field is present when getting an artist's albums. Compare to album_type this field represents relationship between the artist and the album.
		 */
		album_group: FormControl<SimplifiedAlbumObjectAlbum_group | null | undefined>,
	}
	export function CreateSimplifiedAlbumObjectFormGroup() {
		return new FormGroup<SimplifiedAlbumObjectFormProperties>({
			album_type: new FormControl<AlbumBaseAlbum_type | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			popularity: new FormControl<number | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date_precision: new FormControl<AlbumBaseRelease_date_precision | null | undefined>(undefined, [Validators.required]),
			total_tracks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AlbumBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			album_group: new FormControl<SimplifiedAlbumObjectAlbum_group | null | undefined>(undefined),
		});

	}

	export enum SimplifiedAlbumObjectAlbum_group { album = 0, single = 1, compilation = 2, appears_on = 3 }

	export interface SimplifiedArtistObject {

		/**
		 * Known external URLs for this artist.
		 */
		external_urls?: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the artist.
		 */
		href?: string | null;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		id?: string | null;

		/**
		 * The name of the artist.
		 */
		name?: string | null;

		/**
		 * The object type.
		 */
		type?: ArtistObjectType | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		uri?: string | null;
	}
	export interface SimplifiedArtistObjectFormProperties {

		/**
		 * A link to the Web API endpoint providing full details of the artist.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the artist.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The object type.
		 */
		type: FormControl<ArtistObjectType | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSimplifiedArtistObjectFormGroup() {
		return new FormGroup<SimplifiedArtistObjectFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ArtistObjectType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimplifiedAudiobookObject extends AudiobookBase {
	}
	export interface SimplifiedAudiobookObjectFormProperties extends AudiobookBaseFormProperties {
	}
	export function CreateSimplifiedAudiobookObjectFormGroup() {
		return new FormGroup<SimplifiedAudiobookObjectFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			edition: new FormControl<string | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_chapters: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AudiobookBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SimplifiedChapterObject {
	}
	export interface SimplifiedChapterObjectFormProperties {
	}
	export function CreateSimplifiedChapterObjectFormGroup() {
		return new FormGroup<SimplifiedChapterObjectFormProperties>({
		});

	}

	export interface SimplifiedEpisodeObject {
	}
	export interface SimplifiedEpisodeObjectFormProperties {
	}
	export function CreateSimplifiedEpisodeObjectFormGroup() {
		return new FormGroup<SimplifiedEpisodeObjectFormProperties>({
		});

	}

	export interface SimplifiedPlaylistObject {

		/**
		 * `true` if the owner allows other users to modify the playlist.
		 */
		collaborative?: boolean | null;

		/**
		 * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
		 */
		description?: string | null;

		/**
		 * Known external URLs for this playlist.
		 */
		external_urls?: ExternalUrlObject;

		/**
		 * A link to the Web API endpoint providing full details of the playlist.
		 */
		href?: string | null;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		id?: string | null;

		/**
		 * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
		 */
		images?: Array<ImageObject>;

		/**
		 * The name of the playlist.
		 */
		name?: string | null;

		/**
		 * The user who owns the playlist
		 */
		owner?: PlaylistOwnerObject;

		/**
		 * The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
		 */
		public?: boolean | null;

		/**
		 * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
		 */
		snapshot_id?: string | null;

		/**
		 * A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
		 */
		tracks?: PlaylistTracksRefObject;

		/**
		 * The object type: "playlist"
		 */
		type?: string | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		uri?: string | null;
	}
	export interface SimplifiedPlaylistObjectFormProperties {

		/**
		 * `true` if the owner allows other users to modify the playlist.
		 */
		collaborative: FormControl<boolean | null | undefined>,

		/**
		 * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A link to the Web API endpoint providing full details of the playlist.
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the playlist.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
		 */
		snapshot_id: FormControl<string | null | undefined>,

		/**
		 * The object type: "playlist"
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSimplifiedPlaylistObjectFormGroup() {
		return new FormGroup<SimplifiedPlaylistObjectFormProperties>({
			collaborative: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			snapshot_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimplifiedShowObject extends ShowBase {
	}
	export interface SimplifiedShowObjectFormProperties extends ShowBaseFormProperties {
	}
	export function CreateSimplifiedShowObjectFormGroup() {
		return new FormGroup<SimplifiedShowObjectFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			explicit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_externally_hosted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_episodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ShowBaseType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SimplifiedTrackObject {

		/** The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist. */
		artists?: Array<SimplifiedArtistObject>;

		/**
		 * A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
		 */
		available_markets?: Array<string>;

		/** The disc number (usually `1` unless the album consists of more than one disc). */
		disc_number?: number | null;

		/** The track length in milliseconds. */
		duration_ms?: number | null;

		/** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
		explicit?: boolean | null;

		/**
		 * External URLs for this track.
		 */
		external_urls?: ExternalUrlObject;

		/** A link to the Web API endpoint providing full details of the track. */
		href?: string | null;

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		id?: string | null;

		/**
		 * Whether or not the track is from a local file.
		 */
		is_local?: boolean | null;

		/**
		 * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
		 */
		is_playable?: boolean | null;

		/** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track. */
		linked_from?: LinkedTrackObject;

		/** The name of the track. */
		name?: string | null;

		/**
		 * A URL to a 30 second preview (MP3 format) of the track.
		 */
		preview_url?: string | null;

		/**
		 * Included in the response when a content restriction is applied.
		 */
		restrictions?: TrackRestrictionObject;

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 */
		track_number?: number | null;

		/**
		 * The object type: "track".
		 */
		type?: string | null;

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		uri?: string | null;
	}
	export interface SimplifiedTrackObjectFormProperties {

		/** The disc number (usually `1` unless the album consists of more than one disc). */
		disc_number: FormControl<number | null | undefined>,

		/** The track length in milliseconds. */
		duration_ms: FormControl<number | null | undefined>,

		/** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
		explicit: FormControl<boolean | null | undefined>,

		/** A link to the Web API endpoint providing full details of the track. */
		href: FormControl<string | null | undefined>,

		/**
		 * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether or not the track is from a local file.
		 */
		is_local: FormControl<boolean | null | undefined>,

		/**
		 * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
		 */
		is_playable: FormControl<boolean | null | undefined>,

		/** The name of the track. */
		name: FormControl<string | null | undefined>,

		/**
		 * A URL to a 30 second preview (MP3 format) of the track.
		 */
		preview_url: FormControl<string | null | undefined>,

		/**
		 * The number of the track. If an album has several discs, the track number is the number on the specified disc.
		 */
		track_number: FormControl<number | null | undefined>,

		/**
		 * The object type: "track".
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSimplifiedTrackObjectFormGroup() {
		return new FormGroup<SimplifiedTrackObjectFormProperties>({
			disc_number: new FormControl<number | null | undefined>(undefined),
			duration_ms: new FormControl<number | null | undefined>(undefined),
			explicit: new FormControl<boolean | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_local: new FormControl<boolean | null | undefined>(undefined),
			is_playable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preview_url: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TuneableTrackObject {

		/**
		 * A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
		 */
		acousticness?: number | null;

		/**
		 * Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
		 */
		danceability?: number | null;

		/**
		 * The duration of the track in milliseconds.
		 */
		duration_ms?: number | null;

		/**
		 * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
		 */
		energy?: number | null;

		/**
		 * Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
		 */
		instrumentalness?: number | null;

		/**
		 * The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
		 * Minimum: -1
		 * Maximum: 11
		 */
		key?: number | null;

		/**
		 * Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
		 */
		liveness?: number | null;

		/**
		 * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
		 */
		loudness?: number | null;

		/**
		 * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
		 */
		mode?: number | null;

		/**
		 * The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. _**Note**: When applying track relinking via the `market` parameter, it is expected to find relinked tracks with popularities that do not match `min_*`, `max_*`and `target_*` popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the `linked_from` attribute of the [relinked track response](/documentation/web-api/concepts/track-relinking)._
		 */
		popularity?: number | null;

		/**
		 * Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
		 */
		speechiness?: number | null;

		/**
		 * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
		 */
		tempo?: number | null;

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature?: number | null;

		/**
		 * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
		 */
		valence?: number | null;
	}
	export interface TuneableTrackObjectFormProperties {

		/**
		 * A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
		 */
		acousticness: FormControl<number | null | undefined>,

		/**
		 * Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
		 */
		danceability: FormControl<number | null | undefined>,

		/**
		 * The duration of the track in milliseconds.
		 */
		duration_ms: FormControl<number | null | undefined>,

		/**
		 * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
		 */
		energy: FormControl<number | null | undefined>,

		/**
		 * Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
		 */
		instrumentalness: FormControl<number | null | undefined>,

		/**
		 * The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
		 * Minimum: -1
		 * Maximum: 11
		 */
		key: FormControl<number | null | undefined>,

		/**
		 * Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
		 */
		liveness: FormControl<number | null | undefined>,

		/**
		 * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
		 */
		loudness: FormControl<number | null | undefined>,

		/**
		 * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
		 */
		mode: FormControl<number | null | undefined>,

		/**
		 * The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. _**Note**: When applying track relinking via the `market` parameter, it is expected to find relinked tracks with popularities that do not match `min_*`, `max_*`and `target_*` popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the `linked_from` attribute of the [relinked track response](/documentation/web-api/concepts/track-relinking)._
		 */
		popularity: FormControl<number | null | undefined>,

		/**
		 * Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
		 */
		speechiness: FormControl<number | null | undefined>,

		/**
		 * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
		 */
		tempo: FormControl<number | null | undefined>,

		/**
		 * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
		 * Minimum: 3
		 * Maximum: 7
		 */
		time_signature: FormControl<number | null | undefined>,

		/**
		 * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
		 */
		valence: FormControl<number | null | undefined>,
	}
	export function CreateTuneableTrackObjectFormGroup() {
		return new FormGroup<TuneableTrackObjectFormProperties>({
			acousticness: new FormControl<number | null | undefined>(undefined),
			danceability: new FormControl<number | null | undefined>(undefined),
			duration_ms: new FormControl<number | null | undefined>(undefined),
			energy: new FormControl<number | null | undefined>(undefined),
			instrumentalness: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(11)]),
			liveness: new FormControl<number | null | undefined>(undefined),
			loudness: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<number | null | undefined>(undefined),
			popularity: new FormControl<number | null | undefined>(undefined),
			speechiness: new FormControl<number | null | undefined>(undefined),
			tempo: new FormControl<number | null | undefined>(undefined),
			time_signature: new FormControl<number | null | undefined>(undefined, [Validators.min(3), Validators.max(7)]),
			valence: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Several Albums
		 * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
		 * Get albums
		 * @return {Get_multiple_albumsReturn} A set of albums
		 */
		Get_multiple_albums(ids: string, market: string | null | undefined): Observable<Get_multiple_albumsReturn> {
			return this.http.get<Get_multiple_albumsReturn>(this.baseUri + 'albums?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Album
		 * Get Spotify catalog information for a single album.
		 * Get albums/{id}
		 * @return {AlbumObject} An album
		 */
		Get_an_album(id: string, market: string | null | undefined): Observable<AlbumObject> {
			return this.http.get<AlbumObject>(this.baseUri + 'albums/' + (id == null ? '' : encodeURIComponent(id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Album Tracks
		 * Get Spotify catalog information about an album’s tracks.
		 * Optional parameters can be used to limit the number of tracks returned.
		 * Get albums/{id}/tracks
		 * @return {PagingSimplifiedTrackObject} Pages of tracks
		 */
		Get_an_albums_tracks(id: string, market: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSimplifiedTrackObject> {
			return this.http.get<PagingSimplifiedTrackObject>(this.baseUri + 'albums/' + (id == null ? '' : encodeURIComponent(id)) + '/tracks&market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Several Artists
		 * Get Spotify catalog information for several artists based on their Spotify IDs.
		 * Get artists
		 * @return {Get_multiple_artistsReturn} A set of artists
		 */
		Get_multiple_artists(ids: string): Observable<Get_multiple_artistsReturn> {
			return this.http.get<Get_multiple_artistsReturn>(this.baseUri + 'artists?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get Artist
		 * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
		 * Get artists/{id}
		 * @return {ArtistObject} An artist
		 */
		Get_an_artist(id: string): Observable<ArtistObject> {
			return this.http.get<ArtistObject>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get Artist's Albums
		 * Get Spotify catalog information about an artist's albums.
		 * Get artists/{id}/albums
		 * @return {PagingSimplifiedAlbumObject} Pages of albums
		 */
		Get_an_artists_albums(id: string, include_groups: string | null | undefined, market: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSimplifiedAlbumObject> {
			return this.http.get<PagingSimplifiedAlbumObject>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)) + '/albums&include_groups=' + (include_groups == null ? '' : encodeURIComponent(include_groups)) + '&market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Artist's Related Artists
		 * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).
		 * Get artists/{id}/related-artists
		 * @return {Get_an_artists_related_artistsReturn} A set of artists
		 */
		Get_an_artists_related_artists(id: string): Observable<Get_an_artists_related_artistsReturn> {
			return this.http.get<Get_an_artists_related_artistsReturn>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)) + '/related-artists', {});
		}

		/**
		 * Get Artist's Top Tracks
		 * Get Spotify catalog information about an artist's top tracks by country.
		 * Get artists/{id}/top-tracks
		 * @return {Get_an_artists_top_tracksReturn} A set of tracks
		 */
		Get_an_artists_top_tracks(id: string, market: string | null | undefined): Observable<Get_an_artists_top_tracksReturn> {
			return this.http.get<Get_an_artists_top_tracksReturn>(this.baseUri + 'artists/' + (id == null ? '' : encodeURIComponent(id)) + '/top-tracks&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Track's Audio Analysis
		 * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
		 * Get audio-analysis/{id}
		 * @return {AudioAnalysisObject} Audio analysis for one track
		 */
		Get_audio_analysis(id: string): Observable<AudioAnalysisObject> {
			return this.http.get<AudioAnalysisObject>(this.baseUri + 'audio-analysis/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get Tracks' Audio Features
		 * Get audio features for multiple tracks based on their Spotify IDs.
		 * Get audio-features
		 * @return {Get_several_audio_featuresReturn} A set of audio features
		 */
		Get_several_audio_features(ids: string): Observable<Get_several_audio_featuresReturn> {
			return this.http.get<Get_several_audio_featuresReturn>(this.baseUri + 'audio-features?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get Track's Audio Features
		 * Get audio feature information for a single track identified by its unique
		 * Spotify ID.
		 * Get audio-features/{id}
		 * @return {AudioFeaturesObject} Audio features for one track
		 */
		Get_audio_features(id: string): Observable<AudioFeaturesObject> {
			return this.http.get<AudioFeaturesObject>(this.baseUri + 'audio-features/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get Several Audiobooks
		 * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
		 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
		 * Get audiobooks
		 * @return {Get_multiple_audiobooksReturn} A set of audiobooks
		 */
		Get_multiple_audiobooks(ids: string, market: string | null | undefined): Observable<Get_multiple_audiobooksReturn> {
			return this.http.get<Get_multiple_audiobooksReturn>(this.baseUri + 'audiobooks?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get an Audiobook
		 * Get Spotify catalog information for a single audiobook.<br />
		 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
		 * Get audiobooks/{id}
		 * @return {AudiobookObject} An Audiobook
		 */
		Get_an_audiobook(id: string, market: string | null | undefined): Observable<AudiobookObject> {
			return this.http.get<AudiobookObject>(this.baseUri + 'audiobooks/' + (id == null ? '' : encodeURIComponent(id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Audiobook Chapters
		 * Get Spotify catalog information about an audiobook's chapters.<br />
		 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
		 * Get audiobooks/{id}/chapters
		 * @return {PagingSimplifiedChapterObject} Pages of chapters
		 */
		Get_audiobook_chapters(id: string, market: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSimplifiedChapterObject> {
			return this.http.get<PagingSimplifiedChapterObject>(this.baseUri + 'audiobooks/' + (id == null ? '' : encodeURIComponent(id)) + '/chapters&market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Several Browse Categories
		 * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
		 * Get browse/categories
		 * @return {Get_categoriesReturn} A paged set of categories
		 */
		Get_categories(country: string | null | undefined, locale: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<Get_categoriesReturn> {
			return this.http.get<Get_categoriesReturn>(this.baseUri + 'browse/categories?country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Single Browse Category
		 * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
		 * Get browse/categories/{category_id}
		 * @return {CategoryObject} A category
		 */
		Get_a_category(category_id: string, country: string | null | undefined, locale: string | null | undefined): Observable<CategoryObject> {
			return this.http.get<CategoryObject>(this.baseUri + 'browse/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), {});
		}

		/**
		 * Get Category's Playlists
		 * Get a list of Spotify playlists tagged with a particular category.
		 * Get browse/categories/{category_id}/playlists
		 * @return {PagingFeaturedPlaylistObject} A paged set of playlists
		 */
		Get_a_categories_playlists(category_id: string, country: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingFeaturedPlaylistObject> {
			return this.http.get<PagingFeaturedPlaylistObject>(this.baseUri + 'browse/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)) + '/playlists&country=' + (country == null ? '' : encodeURIComponent(country)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Featured Playlists
		 * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
		 * Get browse/featured-playlists
		 * @return {PagingFeaturedPlaylistObject} A paged set of playlists
		 */
		Get_featured_playlists(country: string | null | undefined, locale: string | null | undefined, timestamp: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingFeaturedPlaylistObject> {
			return this.http.get<PagingFeaturedPlaylistObject>(this.baseUri + 'browse/featured-playlists?country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get New Releases
		 * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
		 * Get browse/new-releases
		 * @return {Get_new_releasesReturn} A paged set of albums
		 */
		Get_new_releases(country: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<Get_new_releasesReturn> {
			return this.http.get<Get_new_releasesReturn>(this.baseUri + 'browse/new-releases?country=' + (country == null ? '' : encodeURIComponent(country)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Several Chapters
		 * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
		 * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
		 * Get chapters
		 * @return {Get_several_chaptersReturn} A set of chapters
		 */
		Get_several_chapters(ids: string, market: string | null | undefined): Observable<Get_several_chaptersReturn> {
			return this.http.get<Get_several_chaptersReturn>(this.baseUri + 'chapters?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get a Chapter
		 * Get Spotify catalog information for a single chapter.<br />
		 * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
		 * Get chapters/{id}
		 * @return {ChapterObject} A Chapter
		 */
		Get_a_chapter(id: string, market: string | null | undefined): Observable<ChapterObject> {
			return this.http.get<ChapterObject>(this.baseUri + 'chapters/' + (id == null ? '' : encodeURIComponent(id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Several Episodes
		 * Get Spotify catalog information for several episodes based on their Spotify IDs.
		 * Get episodes
		 * @return {Get_multiple_episodesReturn} A set of episodes
		 */
		Get_multiple_episodes(ids: string, market: string | null | undefined): Observable<Get_multiple_episodesReturn> {
			return this.http.get<Get_multiple_episodesReturn>(this.baseUri + 'episodes?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Episode
		 * Get Spotify catalog information for a single episode identified by its
		 * unique Spotify ID.
		 * Get episodes/{id}
		 * @return {EpisodeObject} An episode
		 */
		Get_an_episode(id: string, market: string | null | undefined): Observable<EpisodeObject> {
			return this.http.get<EpisodeObject>(this.baseUri + 'episodes/' + (id == null ? '' : encodeURIComponent(id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Available Markets
		 * Get the list of markets where Spotify is available.
		 * Get markets
		 * @return {Get_available_marketsReturn} A markets object with an array of country codes
		 */
		Get_available_markets(): Observable<Get_available_marketsReturn> {
			return this.http.get<Get_available_marketsReturn>(this.baseUri + 'markets', {});
		}

		/**
		 * Get Current User's Profile
		 * Get detailed profile information about the current user (including the
		 * current user's username).
		 * Get me
		 * @return {PrivateUserObject} A user
		 */
		Get_current_users_profile(): Observable<PrivateUserObject> {
			return this.http.get<PrivateUserObject>(this.baseUri + 'me', {});
		}

		/**
		 * Remove Users' Saved Albums
		 * Remove one or more albums from the current user's 'Your Music' library.
		 * Delete me/albums
		 * @return {void} Album(s) have been removed from the library
		 */
		Remove_albums_user(ids: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/albums?ids=' + (ids == null ? '' : encodeURIComponent(ids)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User's Saved Albums
		 * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
		 * Get me/albums
		 * @return {PagingSavedAlbumObject} Pages of albums
		 */
		Get_users_saved_albums(limit: number | null | undefined, offset: number | null | undefined, market: string | null | undefined): Observable<PagingSavedAlbumObject> {
			return this.http.get<PagingSavedAlbumObject>(this.baseUri + 'me/albums?limit=' + limit + '&offset=' + offset + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Save Albums for Current User
		 * Save one or more albums to the current user's 'Your Music' library.
		 * Put me/albums
		 * @return {void} The album is saved
		 */
		Save_albums_user(ids: string, requestBody: Save_albums_userPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/albums?ids=' + (ids == null ? '' : encodeURIComponent(ids)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check User's Saved Albums
		 * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
		 * Get me/albums/contains
		 * @return {Array<boolean>} Array of booleans
		 */
		Check_users_saved_albums(ids: string): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/albums/contains?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Remove User's Saved Audiobooks
		 * Remove one or more audiobooks from the Spotify user's library.
		 * Delete me/audiobooks
		 * @return {void} Audiobook(s) have been removed from the library
		 */
		Remove_audiobooks_user(ids: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/audiobooks?ids=' + (ids == null ? '' : encodeURIComponent(ids)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User's Saved Audiobooks
		 * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
		 * Get me/audiobooks
		 * @return {PagingSimplifiedAudiobookObject} Pages of audiobooks
		 */
		Get_users_saved_audiobooks(limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSimplifiedAudiobookObject> {
			return this.http.get<PagingSimplifiedAudiobookObject>(this.baseUri + 'me/audiobooks?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Save Audiobooks for Current User
		 * Save one or more audiobooks to the current Spotify user's library.
		 * Put me/audiobooks
		 * @return {void} Audiobook(s) are saved to the library
		 */
		Save_audiobooks_user(ids: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/audiobooks?ids=' + (ids == null ? '' : encodeURIComponent(ids)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check User's Saved Audiobooks
		 * Check if one or more audiobooks are already saved in the current Spotify user's library.
		 * Get me/audiobooks/contains
		 * @return {Array<boolean>} Array of booleans
		 */
		Check_users_saved_audiobooks(ids: string): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/audiobooks/contains?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Remove User's Saved Episodes
		 * Remove one or more episodes from the current user's library.<br/>
		 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
		 * Delete me/episodes
		 * @return {void} Episode removed
		 */
		Remove_episodes_user(ids: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/episodes?ids=' + (ids == null ? '' : encodeURIComponent(ids)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User's Saved Episodes
		 * Get a list of the episodes saved in the current Spotify user's library.<br/>
		 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
		 * Get me/episodes
		 * @return {PagingSavedEpisodeObject} Pages of episodes
		 */
		Get_users_saved_episodes(market: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSavedEpisodeObject> {
			return this.http.get<PagingSavedEpisodeObject>(this.baseUri + 'me/episodes?market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Save Episodes for Current User
		 * Save one or more episodes to the current user's library.<br/>
		 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
		 * Put me/episodes
		 * @return {void} Episode saved
		 */
		Save_episodes_user(ids: string, requestBody: Save_episodes_userPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/episodes?ids=' + (ids == null ? '' : encodeURIComponent(ids)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check User's Saved Episodes
		 * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
		 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
		 * Get me/episodes/contains
		 * @return {Array<boolean>} Array of booleans
		 */
		Check_users_saved_episodes(ids: string): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/episodes/contains?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Unfollow Artists or Users
		 * Remove the current user as a follower of one or more artists or other Spotify users.
		 * Delete me/following
		 * @return {void} Artist or user unfollowed
		 */
		Unfollow_artists_users(type: Unfollow_artists_usersType, ids: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/following?type=' + type + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Followed Artists
		 * Get the current user's followed artists.
		 * Get me/following
		 * @return {Get_followedReturn} A paged set of artists
		 */
		Get_followed(type: ArtistObjectType, after: string | null | undefined, limit: number | null | undefined): Observable<Get_followedReturn> {
			return this.http.get<Get_followedReturn>(this.baseUri + 'me/following?type=' + type + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit, {});
		}

		/**
		 * Follow Artists or Users
		 * Add the current user as a follower of one or more artists or other Spotify users.
		 * Put me/following
		 * @return {void} 
		 */
		Follow_artists_users(type: Unfollow_artists_usersType, ids: string, requestBody: Follow_artists_usersPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/following?type=' + type + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check If User Follows Artists or Users
		 * Check to see if the current user is following one or more artists or other Spotify users.
		 * Get me/following/contains
		 * @return {Array<boolean>} Array of booleans
		 */
		Check_current_user_follows(type: Unfollow_artists_usersType, ids: string): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/following/contains?type=' + type + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get Playback State
		 * Get information about the user’s current playback state, including track or episode, progress, and active device.
		 * Get me/player
		 * @return {CurrentlyPlayingContextObject} Information about playback
		 */
		Get_information_about_the_users_current_playback(market: string | null | undefined, additional_types: string | null | undefined): Observable<CurrentlyPlayingContextObject> {
			return this.http.get<CurrentlyPlayingContextObject>(this.baseUri + 'me/player?market=' + (market == null ? '' : encodeURIComponent(market)) + '&additional_types=' + (additional_types == null ? '' : encodeURIComponent(additional_types)), {});
		}

		/**
		 * Transfer Playback
		 * Transfer playback to a new device and determine if it should start playing.
		 * Put me/player
		 * @return {void} 
		 */
		Transfer_a_users_playback(requestBody: Transfer_a_users_playbackPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/player', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Currently Playing Track
		 * Get the object currently being played on the user's Spotify account.
		 * Get me/player/currently-playing
		 * @return {CurrentlyPlayingContextObject} Information about the currently playing track
		 */
		Get_the_users_currently_playing_track(market: string | null | undefined, additional_types: string | null | undefined): Observable<CurrentlyPlayingContextObject> {
			return this.http.get<CurrentlyPlayingContextObject>(this.baseUri + 'me/player/currently-playing?market=' + (market == null ? '' : encodeURIComponent(market)) + '&additional_types=' + (additional_types == null ? '' : encodeURIComponent(additional_types)), {});
		}

		/**
		 * Get Available Devices
		 * Get information about a user’s available devices.
		 * Get me/player/devices
		 * @return {Get_a_users_available_devicesReturn} A set of devices
		 */
		Get_a_users_available_devices(): Observable<Get_a_users_available_devicesReturn> {
			return this.http.get<Get_a_users_available_devicesReturn>(this.baseUri + 'me/player/devices', {});
		}

		/**
		 * Skip To Next
		 * Skips to next track in the user’s queue.
		 * Post me/player/next
		 * @return {void} 
		 */
		Skip_users_playback_to_next_track(device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/player/next?device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Pause Playback
		 * Pause playback on the user's account.
		 * Put me/player/pause
		 * @return {void} 
		 */
		Pause_a_users_playback(device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/player/pause?device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start/Resume Playback
		 * Start a new context or resume current playback on the user's active device.
		 * Put me/player/play
		 * @return {void} 
		 */
		Start_a_users_playback(device_id: string | null | undefined, requestBody: Start_a_users_playbackPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/player/play?device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Skip To Previous
		 * Skips to previous track in the user’s queue.
		 * Post me/player/previous
		 * @return {void} 
		 */
		Skip_users_playback_to_previous_track(device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/player/previous?device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the User's Queue
		 * Get the list of objects that make up the user's queue.
		 * Get me/player/queue
		 * @return {QueueObject} Information about the queue
		 */
		Get_queue(): Observable<QueueObject> {
			return this.http.get<QueueObject>(this.baseUri + 'me/player/queue', {});
		}

		/**
		 * Add Item to Playback Queue
		 * Add an item to the end of the user's current playback queue.
		 * Post me/player/queue
		 * @return {void} 
		 */
		Add_to_queue(uri: string, device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/player/queue?uri=' + (uri == null ? '' : encodeURIComponent(uri)) + '&device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Recently Played Tracks
		 * Get tracks from the current user's recently played tracks.
		 * _**Note**: Currently doesn't support podcast episodes._
		 * Get me/player/recently-played
		 * @return {CursorPagingPlayHistoryObject} A paged set of tracks
		 */
		Get_recently_played(limit: number | null | undefined, after: number | null | undefined, before: number | null | undefined): Observable<CursorPagingPlayHistoryObject> {
			return this.http.get<CursorPagingPlayHistoryObject>(this.baseUri + 'me/player/recently-played?limit=' + limit + '&after=' + after + '&before=' + before, {});
		}

		/**
		 * Set Repeat Mode
		 * Set the repeat mode for the user's playback. Options are repeat-track,
		 * repeat-context, and off.
		 * Put me/player/repeat
		 * @return {void} 
		 */
		Set_repeat_mode_on_users_playback(state: string, device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/player/repeat?state=' + (state == null ? '' : encodeURIComponent(state)) + '&device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Seek To Position
		 * Seeks to the given position in the user’s currently playing track.
		 * Put me/player/seek
		 * @return {void} 
		 */
		Seek_to_position_in_currently_playing_track(position_ms: number, device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/player/seek?position_ms=' + position_ms + '&device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Toggle Playback Shuffle
		 * Toggle shuffle on or off for user’s playback.
		 * Put me/player/shuffle
		 * @return {void} 
		 */
		Toggle_shuffle_for_users_playback(state: boolean, device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/player/shuffle?state=' + state + '&device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set Playback Volume
		 * Set the volume for the user’s current playback device.
		 * Put me/player/volume
		 * @return {void} 
		 */
		Set_volume_for_users_playback(volume_percent: number, device_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/player/volume?volume_percent=' + volume_percent + '&device_id=' + (device_id == null ? '' : encodeURIComponent(device_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Current User's Playlists
		 * Get a list of the playlists owned or followed by the current Spotify
		 * user.
		 * Get me/playlists
		 * @return {PagingPlaylistObject} A paged set of playlists
		 */
		Get_a_list_of_current_users_playlists(limit: number | null | undefined, offset: number | null | undefined): Observable<PagingPlaylistObject> {
			return this.http.get<PagingPlaylistObject>(this.baseUri + 'me/playlists?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Remove User's Saved Shows
		 * Delete one or more shows from current Spotify user's library.
		 * Delete me/shows
		 * @return {void} Show removed
		 */
		Remove_shows_user(ids: string, market: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/shows?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User's Saved Shows
		 * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
		 * Get me/shows
		 * @return {PagingSavedShowObject} Pages of shows
		 */
		Get_users_saved_shows(limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSavedShowObject> {
			return this.http.get<PagingSavedShowObject>(this.baseUri + 'me/shows?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Save Shows for Current User
		 * Save one or more shows to current Spotify user's library.
		 * Put me/shows
		 * @return {void} Show saved
		 */
		Save_shows_user(ids: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/shows?ids=' + (ids == null ? '' : encodeURIComponent(ids)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check User's Saved Shows
		 * Check if one or more shows is already saved in the current Spotify user's library.
		 * Get me/shows/contains
		 * @return {Array<boolean>} Array of booleans
		 */
		Check_users_saved_shows(ids: string): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/shows/contains?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get User's Top Items
		 * Get the current user's top artists or tracks based on calculated affinity.
		 * Get me/top/{type}
		 * @return {string} Pages of artists or tracks
		 */
		Get_users_top_artists_and_tracks(type: Get_users_top_artists_and_tracksType, time_range: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'me/top/' + type + '?time_range=' + (time_range == null ? '' : encodeURIComponent(time_range)) + '&limit=' + limit + '&offset=' + offset, { responseType: 'text' });
		}

		/**
		 * Remove User's Saved Tracks
		 * Remove one or more tracks from the current user's 'Your Music' library.
		 * Delete me/tracks
		 * @return {void} Track removed
		 */
		Remove_tracks_user(ids: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/tracks?ids=' + (ids == null ? '' : encodeURIComponent(ids)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User's Saved Tracks
		 * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
		 * Get me/tracks
		 * @return {PagingSavedTrackObject} Pages of tracks
		 */
		Get_users_saved_tracks(market: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSavedTrackObject> {
			return this.http.get<PagingSavedTrackObject>(this.baseUri + 'me/tracks?market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Save Tracks for Current User
		 * Save one or more tracks to the current user's 'Your Music' library.
		 * Put me/tracks
		 * @return {void} Track saved
		 */
		Save_tracks_user(ids: string, requestBody: Save_tracks_userPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/tracks?ids=' + (ids == null ? '' : encodeURIComponent(ids)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check User's Saved Tracks
		 * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
		 * Get me/tracks/contains
		 * @return {Array<boolean>} Array of booleans
		 */
		Check_users_saved_tracks(ids: string): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'me/tracks/contains?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get Playlist
		 * Get a playlist owned by a Spotify user.
		 * Get playlists/{playlist_id}
		 * @return {PlaylistObject} A playlist
		 */
		Get_playlist(playlist_id: string, market: string | null | undefined, fields: string | null | undefined, additional_types: string | null | undefined): Observable<PlaylistObject> {
			return this.http.get<PlaylistObject>(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&additional_types=' + (additional_types == null ? '' : encodeURIComponent(additional_types)), {});
		}

		/**
		 * Change Playlist Details
		 * Change a playlist's name and public/private state. (The user must, of
		 * course, own the playlist.)
		 * Put playlists/{playlist_id}
		 * @return {void} Playlist updated
		 */
		Change_playlist_details(playlist_id: string, requestBody: Change_playlist_detailsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unfollow Playlist
		 * Remove the current user as a follower of a playlist.
		 * Delete playlists/{playlist_id}/followers
		 * @return {void} Playlist unfollowed
		 */
		Unfollow_playlist(playlist_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/followers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow Playlist
		 * Add the current user as a follower of a playlist.
		 * Put playlists/{playlist_id}/followers
		 * @return {void} Playlist followed
		 */
		Follow_playlist(playlist_id: string, requestBody: Follow_playlistPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/followers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if Users Follow Playlist
		 * Check to see if one or more Spotify users are following a specified playlist.
		 * Get playlists/{playlist_id}/followers/contains
		 * @return {Array<boolean>} Array of booleans
		 */
		Check_if_user_follows_playlist(playlist_id: string, ids: string): Observable<Array<boolean>> {
			return this.http.get<Array<boolean>>(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/followers/contains&ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get Playlist Cover Image
		 * Get the current image associated with a specific playlist.
		 * Get playlists/{playlist_id}/images
		 * @return {Array<ImageObject>} A set of images
		 */
		Get_playlist_cover(playlist_id: string): Observable<Array<ImageObject>> {
			return this.http.get<Array<ImageObject>>(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/images', {});
		}

		/**
		 * Remove Playlist Items
		 * Remove one or more items from a user's playlist.
		 * Delete playlists/{playlist_id}/tracks
		 * @return {Remove_tracks_playlistReturn} A snapshot ID for the playlist
		 */
		Remove_tracks_playlist(playlist_id: string): Observable<Remove_tracks_playlistReturn> {
			return this.http.delete<Remove_tracks_playlistReturn>(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks', {});
		}

		/**
		 * Get Playlist Items
		 * Get full details of the items of a playlist owned by a Spotify user.
		 * Get playlists/{playlist_id}/tracks
		 * @return {PagingPlaylistTrackObject} Pages of tracks
		 */
		Get_playlists_tracks(playlist_id: string, market: string | null | undefined, fields: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, additional_types: string | null | undefined): Observable<PagingPlaylistTrackObject> {
			return this.http.get<PagingPlaylistTrackObject>(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks&market=' + (market == null ? '' : encodeURIComponent(market)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&limit=' + limit + '&offset=' + offset + '&additional_types=' + (additional_types == null ? '' : encodeURIComponent(additional_types)), {});
		}

		/**
		 * Add Items to Playlist
		 * Add one or more items to a user's playlist.
		 * Post playlists/{playlist_id}/tracks
		 * @return {void} 
		 */
		Add_tracks_to_playlist(playlist_id: string, position: number | null | undefined, uris: string | null | undefined, requestBody: Add_tracks_to_playlistPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks&position=' + position + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Playlist Items
		 * Either reorder or replace items in a playlist depending on the request's parameters.
		 * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
		 * To replace items, include `uris` as either a query parameter or in the request's body.
		 * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
		 * <br/>
		 * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
		 * These operations can't be applied together in a single request.
		 * Put playlists/{playlist_id}/tracks
		 * @return {Reorder_or_replace_playlists_tracksReturn} A snapshot ID for the playlist
		 */
		Reorder_or_replace_playlists_tracks(playlist_id: string, uris: string | null | undefined, requestBody: Reorder_or_replace_playlists_tracksPutBody): Observable<Reorder_or_replace_playlists_tracksReturn> {
			return this.http.put<Reorder_or_replace_playlists_tracksReturn>(this.baseUri + 'playlists/' + (playlist_id == null ? '' : encodeURIComponent(playlist_id)) + '/tracks&uris=' + (uris == null ? '' : encodeURIComponent(uris)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Recommendations
		 * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
		 * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
		 * Get recommendations
		 * @return {RecommendationsObject} A set of recommendations
		 */
		Get_recommendations(limit: number | null | undefined, market: string | null | undefined, seed_artists: string, seed_genres: string, seed_tracks: string, min_acousticness: number | null | undefined, max_acousticness: number | null | undefined, target_acousticness: number | null | undefined, min_danceability: number | null | undefined, max_danceability: number | null | undefined, target_danceability: number | null | undefined, min_duration_ms: number | null | undefined, max_duration_ms: number | null | undefined, target_duration_ms: number | null | undefined, min_energy: number | null | undefined, max_energy: number | null | undefined, target_energy: number | null | undefined, min_instrumentalness: number | null | undefined, max_instrumentalness: number | null | undefined, target_instrumentalness: number | null | undefined, min_key: number | null | undefined, max_key: number | null | undefined, target_key: number | null | undefined, min_liveness: number | null | undefined, max_liveness: number | null | undefined, target_liveness: number | null | undefined, min_loudness: number | null | undefined, max_loudness: number | null | undefined, target_loudness: number | null | undefined, min_mode: number | null | undefined, max_mode: number | null | undefined, target_mode: number | null | undefined, min_popularity: number | null | undefined, max_popularity: number | null | undefined, target_popularity: number | null | undefined, min_speechiness: number | null | undefined, max_speechiness: number | null | undefined, target_speechiness: number | null | undefined, min_tempo: number | null | undefined, max_tempo: number | null | undefined, target_tempo: number | null | undefined, min_time_signature: number | null | undefined, max_time_signature: number | null | undefined, target_time_signature: number | null | undefined, min_valence: number | null | undefined, max_valence: number | null | undefined, target_valence: number | null | undefined): Observable<RecommendationsObject> {
			return this.http.get<RecommendationsObject>(this.baseUri + 'recommendations?limit=' + limit + '&market=' + (market == null ? '' : encodeURIComponent(market)) + '&seed_artists=' + (seed_artists == null ? '' : encodeURIComponent(seed_artists)) + '&seed_genres=' + (seed_genres == null ? '' : encodeURIComponent(seed_genres)) + '&seed_tracks=' + (seed_tracks == null ? '' : encodeURIComponent(seed_tracks)) + '&min_acousticness=' + min_acousticness + '&max_acousticness=' + max_acousticness + '&target_acousticness=' + target_acousticness + '&min_danceability=' + min_danceability + '&max_danceability=' + max_danceability + '&target_danceability=' + target_danceability + '&min_duration_ms=' + min_duration_ms + '&max_duration_ms=' + max_duration_ms + '&target_duration_ms=' + target_duration_ms + '&min_energy=' + min_energy + '&max_energy=' + max_energy + '&target_energy=' + target_energy + '&min_instrumentalness=' + min_instrumentalness + '&max_instrumentalness=' + max_instrumentalness + '&target_instrumentalness=' + target_instrumentalness + '&min_key=' + min_key + '&max_key=' + max_key + '&target_key=' + target_key + '&min_liveness=' + min_liveness + '&max_liveness=' + max_liveness + '&target_liveness=' + target_liveness + '&min_loudness=' + min_loudness + '&max_loudness=' + max_loudness + '&target_loudness=' + target_loudness + '&min_mode=' + min_mode + '&max_mode=' + max_mode + '&target_mode=' + target_mode + '&min_popularity=' + min_popularity + '&max_popularity=' + max_popularity + '&target_popularity=' + target_popularity + '&min_speechiness=' + min_speechiness + '&max_speechiness=' + max_speechiness + '&target_speechiness=' + target_speechiness + '&min_tempo=' + min_tempo + '&max_tempo=' + max_tempo + '&target_tempo=' + target_tempo + '&min_time_signature=' + min_time_signature + '&max_time_signature=' + max_time_signature + '&target_time_signature=' + target_time_signature + '&min_valence=' + min_valence + '&max_valence=' + max_valence + '&target_valence=' + target_valence, {});
		}

		/**
		 * Get Available Genre Seeds
		 * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
		 * Get recommendations/available-genre-seeds
		 * @return {Get_recommendation_genresReturn} A set of genres
		 */
		Get_recommendation_genres(): Observable<Get_recommendation_genresReturn> {
			return this.http.get<Get_recommendation_genresReturn>(this.baseUri + 'recommendations/available-genre-seeds', {});
		}

		/**
		 * Search for Item
		 * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
		 * that match a keyword string.<br />
		 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
		 * Get search
		 * @return {SearchReturn} Search response
		 */
		Search(q: string, type: Array<string>, market: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, include_external: SearchInclude_external | null | undefined): Observable<SearchReturn> {
			return this.http.get<SearchReturn>(this.baseUri + 'search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + type.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&offset=' + offset + '&include_external=' + include_external, {});
		}

		/**
		 * Get Several Shows
		 * Get Spotify catalog information for several shows based on their Spotify IDs.
		 * Get shows
		 * @return {Get_multiple_showsReturn} A set of shows
		 */
		Get_multiple_shows(market: string | null | undefined, ids: string): Observable<Get_multiple_showsReturn> {
			return this.http.get<Get_multiple_showsReturn>(this.baseUri + 'shows?market=' + (market == null ? '' : encodeURIComponent(market)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get Show
		 * Get Spotify catalog information for a single show identified by its
		 * unique Spotify ID.
		 * Get shows/{id}
		 * @return {ShowObject} A show
		 */
		Get_a_show(market: string | null | undefined, id: string): Observable<ShowObject> {
			return this.http.get<ShowObject>(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '?market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get Show Episodes
		 * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
		 * Get shows/{id}/episodes
		 * @return {PagingSimplifiedEpisodeObject} Pages of episodes
		 */
		Get_a_shows_episodes(id: string, market: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingSimplifiedEpisodeObject> {
			return this.http.get<PagingSimplifiedEpisodeObject>(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/episodes&market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Several Tracks
		 * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
		 * Get tracks
		 * @return {Get_several_tracksReturn} A set of tracks
		 */
		Get_several_tracks(market: string | null | undefined, ids: string): Observable<Get_several_tracksReturn> {
			return this.http.get<Get_several_tracksReturn>(this.baseUri + 'tracks?market=' + (market == null ? '' : encodeURIComponent(market)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Get Track
		 * Get Spotify catalog information for a single track identified by its
		 * unique Spotify ID.
		 * Get tracks/{id}
		 * @return {TrackObject} A track
		 */
		Get_track(id: string, market: string | null | undefined): Observable<TrackObject> {
			return this.http.get<TrackObject>(this.baseUri + 'tracks/' + (id == null ? '' : encodeURIComponent(id)) + '&market=' + (market == null ? '' : encodeURIComponent(market)), {});
		}

		/**
		 * Get User's Profile
		 * Get public profile information about a Spotify user.
		 * Get users/{user_id}
		 * @return {PublicUserObject} A user
		 */
		Get_users_profile(user_id: string): Observable<PublicUserObject> {
			return this.http.get<PublicUserObject>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)), {});
		}

		/**
		 * Get User's Playlists
		 * Get a list of the playlists owned or followed by a Spotify user.
		 * Get users/{user_id}/playlists
		 * @return {PagingPlaylistObject} A paged set of playlists
		 */
		Get_list_users_playlists(user_id: string, limit: number | null | undefined, offset: number | null | undefined): Observable<PagingPlaylistObject> {
			return this.http.get<PagingPlaylistObject>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create Playlist
		 * Create a playlist for a Spotify user. (The playlist will be empty until
		 * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
		 * Post users/{user_id}/playlists
		 * @return {void} 
		 */
		Create_playlist(user_id: string, requestBody: Create_playlistPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/playlists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface Get_multiple_albumsReturn {

		/** Required */
		albums: Array<AlbumObject>;
	}
	export interface Get_multiple_albumsReturnFormProperties {
	}
	export function CreateGet_multiple_albumsReturnFormGroup() {
		return new FormGroup<Get_multiple_albumsReturnFormProperties>({
		});

	}

	export interface Get_multiple_artistsReturn {

		/** Required */
		artists: Array<ArtistObject>;
	}
	export interface Get_multiple_artistsReturnFormProperties {
	}
	export function CreateGet_multiple_artistsReturnFormGroup() {
		return new FormGroup<Get_multiple_artistsReturnFormProperties>({
		});

	}

	export interface Get_an_artists_related_artistsReturn {

		/** Required */
		artists: Array<ArtistObject>;
	}
	export interface Get_an_artists_related_artistsReturnFormProperties {
	}
	export function CreateGet_an_artists_related_artistsReturnFormGroup() {
		return new FormGroup<Get_an_artists_related_artistsReturnFormProperties>({
		});

	}

	export interface Get_an_artists_top_tracksReturn {

		/** Required */
		tracks: Array<TrackObject>;
	}
	export interface Get_an_artists_top_tracksReturnFormProperties {
	}
	export function CreateGet_an_artists_top_tracksReturnFormGroup() {
		return new FormGroup<Get_an_artists_top_tracksReturnFormProperties>({
		});

	}

	export interface Get_several_audio_featuresReturn {

		/** Required */
		audio_features: Array<AudioFeaturesObject>;
	}
	export interface Get_several_audio_featuresReturnFormProperties {
	}
	export function CreateGet_several_audio_featuresReturnFormGroup() {
		return new FormGroup<Get_several_audio_featuresReturnFormProperties>({
		});

	}

	export interface Get_multiple_audiobooksReturn {

		/** Required */
		audiobooks: Array<AudiobookObject>;
	}
	export interface Get_multiple_audiobooksReturnFormProperties {
	}
	export function CreateGet_multiple_audiobooksReturnFormGroup() {
		return new FormGroup<Get_multiple_audiobooksReturnFormProperties>({
		});

	}

	export interface Get_categoriesReturn {

		/** Required */
		categories: PagingObject;
	}
	export interface Get_categoriesReturnFormProperties {
	}
	export function CreateGet_categoriesReturnFormGroup() {
		return new FormGroup<Get_categoriesReturnFormProperties>({
		});

	}

	export interface Get_new_releasesReturn {

		/** Required */
		albums: PagingSimplifiedAlbumObject;
	}
	export interface Get_new_releasesReturnFormProperties {
	}
	export function CreateGet_new_releasesReturnFormGroup() {
		return new FormGroup<Get_new_releasesReturnFormProperties>({
		});

	}

	export interface Get_several_chaptersReturn {

		/** Required */
		chapters: Array<ChapterObject>;
	}
	export interface Get_several_chaptersReturnFormProperties {
	}
	export function CreateGet_several_chaptersReturnFormGroup() {
		return new FormGroup<Get_several_chaptersReturnFormProperties>({
		});

	}

	export interface Get_multiple_episodesReturn {

		/** Required */
		episodes: Array<EpisodeObject>;
	}
	export interface Get_multiple_episodesReturnFormProperties {
	}
	export function CreateGet_multiple_episodesReturnFormGroup() {
		return new FormGroup<Get_multiple_episodesReturnFormProperties>({
		});

	}

	export interface Get_available_marketsReturn {
		markets?: Array<string>;
	}
	export interface Get_available_marketsReturnFormProperties {
	}
	export function CreateGet_available_marketsReturnFormGroup() {
		return new FormGroup<Get_available_marketsReturnFormProperties>({
		});

	}

	export interface Save_albums_userPutBody {

		/**
		 * A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
		 */
		ids?: Array<string>;
	}
	export interface Save_albums_userPutBodyFormProperties {
	}
	export function CreateSave_albums_userPutBodyFormGroup() {
		return new FormGroup<Save_albums_userPutBodyFormProperties>({
		});

	}

	export interface Save_episodes_userPutBody {

		/**
		 * A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
		 */
		ids?: Array<string>;
	}
	export interface Save_episodes_userPutBodyFormProperties {
	}
	export function CreateSave_episodes_userPutBodyFormGroup() {
		return new FormGroup<Save_episodes_userPutBodyFormProperties>({
		});

	}

	export enum Unfollow_artists_usersType { artist = 0, user = 1 }

	export interface Get_followedReturn {

		/** Required */
		artists: CursorPagingSimplifiedArtistObject;
	}
	export interface Get_followedReturnFormProperties {
	}
	export function CreateGet_followedReturnFormGroup() {
		return new FormGroup<Get_followedReturnFormProperties>({
		});

	}

	export interface Follow_artists_usersPutBody {

		/**
		 * A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).
		 * For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
		 * Required
		 */
		ids: Array<string>;
	}
	export interface Follow_artists_usersPutBodyFormProperties {
	}
	export function CreateFollow_artists_usersPutBodyFormGroup() {
		return new FormGroup<Follow_artists_usersPutBodyFormProperties>({
		});

	}

	export interface Transfer_a_users_playbackPutBody {

		/**
		 * A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_
		 * Required
		 */
		device_ids: Array<string>;

		/**
		 * **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.
		 */
		play?: boolean | null;
	}
	export interface Transfer_a_users_playbackPutBodyFormProperties {

		/**
		 * **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.
		 */
		play: FormControl<boolean | null | undefined>,
	}
	export function CreateTransfer_a_users_playbackPutBodyFormGroup() {
		return new FormGroup<Transfer_a_users_playbackPutBodyFormProperties>({
			play: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Get_a_users_available_devicesReturn {

		/** Required */
		devices: Array<DeviceObject>;
	}
	export interface Get_a_users_available_devicesReturnFormProperties {
	}
	export function CreateGet_a_users_available_devicesReturnFormGroup() {
		return new FormGroup<Get_a_users_available_devicesReturnFormProperties>({
		});

	}

	export interface Start_a_users_playbackPutBody {

		/**
		 * Optional. Spotify URI of the context to play.
		 * Valid contexts are albums, artists & playlists.
		 * `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
		 */
		context_uri?: string | null;

		/**
		 * Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
		 * "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`
		 * "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
		 */
		offset?: string | null;

		/** integer */
		position_ms?: number | null;

		/**
		 * Optional. A JSON array of the Spotify track URIs to play.
		 * For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
		 */
		uris?: Array<string>;
	}
	export interface Start_a_users_playbackPutBodyFormProperties {

		/**
		 * Optional. Spotify URI of the context to play.
		 * Valid contexts are albums, artists & playlists.
		 * `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
		 */
		context_uri: FormControl<string | null | undefined>,

		/**
		 * Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
		 * "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`
		 * "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
		 */
		offset: FormControl<string | null | undefined>,

		/** integer */
		position_ms: FormControl<number | null | undefined>,
	}
	export function CreateStart_a_users_playbackPutBodyFormGroup() {
		return new FormGroup<Start_a_users_playbackPutBodyFormProperties>({
			context_uri: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			position_ms: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Get_users_top_artists_and_tracksType { artists = 0, tracks = 1 }

	export interface Save_tracks_userPutBody {

		/**
		 * A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
		 */
		ids?: Array<string>;
	}
	export interface Save_tracks_userPutBodyFormProperties {
	}
	export function CreateSave_tracks_userPutBodyFormGroup() {
		return new FormGroup<Save_tracks_userPutBodyFormProperties>({
		});

	}

	export interface Change_playlist_detailsPutBody {

		/**
		 * If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>
		 * _**Note**: You can only set `collaborative` to `true` on non-public playlists._
		 */
		collaborative?: boolean | null;

		/**
		 * Value for playlist description as displayed in Spotify Clients and in the Web API.
		 */
		description?: string | null;

		/**
		 * The new name for the playlist, for example `"My New Playlist Title"`
		 */
		name?: string | null;

		/**
		 * If `true` the playlist will be public, if `false` it will be private.
		 */
		public?: boolean | null;
	}
	export interface Change_playlist_detailsPutBodyFormProperties {

		/**
		 * If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>
		 * _**Note**: You can only set `collaborative` to `true` on non-public playlists._
		 */
		collaborative: FormControl<boolean | null | undefined>,

		/**
		 * Value for playlist description as displayed in Spotify Clients and in the Web API.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The new name for the playlist, for example `"My New Playlist Title"`
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If `true` the playlist will be public, if `false` it will be private.
		 */
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateChange_playlist_detailsPutBodyFormGroup() {
		return new FormGroup<Change_playlist_detailsPutBodyFormProperties>({
			collaborative: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Follow_playlistPutBody {

		/**
		 * Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private.
		 */
		public?: boolean | null;
	}
	export interface Follow_playlistPutBodyFormProperties {

		/**
		 * Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private.
		 */
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateFollow_playlistPutBodyFormGroup() {
		return new FormGroup<Follow_playlistPutBodyFormProperties>({
			public: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Remove_tracks_playlistReturn {
		snapshot_id?: string | null;
	}
	export interface Remove_tracks_playlistReturnFormProperties {
		snapshot_id: FormControl<string | null | undefined>,
	}
	export function CreateRemove_tracks_playlistReturnFormGroup() {
		return new FormGroup<Remove_tracks_playlistReturnFormProperties>({
			snapshot_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Add_tracks_to_playlistPostBody {

		/**
		 * The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
		 */
		position?: number | null;

		/**
		 * A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._
		 */
		uris?: Array<string>;
	}
	export interface Add_tracks_to_playlistPostBodyFormProperties {

		/**
		 * The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
		 */
		position: FormControl<number | null | undefined>,
	}
	export function CreateAdd_tracks_to_playlistPostBodyFormGroup() {
		return new FormGroup<Add_tracks_to_playlistPostBodyFormProperties>({
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Reorder_or_replace_playlists_tracksPutBody {

		/**
		 * The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.
		 */
		insert_before?: number | null;

		/**
		 * The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.
		 */
		range_length?: number | null;

		/**
		 * The position of the first item to be reordered.
		 */
		range_start?: number | null;

		/**
		 * The playlist's snapshot ID against which you want to make the changes.
		 */
		snapshot_id?: string | null;
		uris?: Array<string>;
	}
	export interface Reorder_or_replace_playlists_tracksPutBodyFormProperties {

		/**
		 * The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.
		 */
		insert_before: FormControl<number | null | undefined>,

		/**
		 * The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.
		 */
		range_length: FormControl<number | null | undefined>,

		/**
		 * The position of the first item to be reordered.
		 */
		range_start: FormControl<number | null | undefined>,

		/**
		 * The playlist's snapshot ID against which you want to make the changes.
		 */
		snapshot_id: FormControl<string | null | undefined>,
	}
	export function CreateReorder_or_replace_playlists_tracksPutBodyFormGroup() {
		return new FormGroup<Reorder_or_replace_playlists_tracksPutBodyFormProperties>({
			insert_before: new FormControl<number | null | undefined>(undefined),
			range_length: new FormControl<number | null | undefined>(undefined),
			range_start: new FormControl<number | null | undefined>(undefined),
			snapshot_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Reorder_or_replace_playlists_tracksReturn {
		snapshot_id?: string | null;
	}
	export interface Reorder_or_replace_playlists_tracksReturnFormProperties {
		snapshot_id: FormControl<string | null | undefined>,
	}
	export function CreateReorder_or_replace_playlists_tracksReturnFormGroup() {
		return new FormGroup<Reorder_or_replace_playlists_tracksReturnFormProperties>({
			snapshot_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_recommendation_genresReturn {

		/** Required */
		genres: Array<string>;
	}
	export interface Get_recommendation_genresReturnFormProperties {
	}
	export function CreateGet_recommendation_genresReturnFormGroup() {
		return new FormGroup<Get_recommendation_genresReturnFormProperties>({
		});

	}

	export enum SearchInclude_external { audio = 0 }

	export interface SearchReturn {
		albums?: PagingSimplifiedAlbumObject;
		artists?: PagingArtistObject;
		audiobooks?: PagingSimplifiedAudiobookObject;
		episodes?: PagingSimplifiedEpisodeObject;
		playlists?: PagingPlaylistObject;
		shows?: PagingSimplifiedShowObject;
		tracks?: PagingTrackObject;
	}
	export interface SearchReturnFormProperties {
	}
	export function CreateSearchReturnFormGroup() {
		return new FormGroup<SearchReturnFormProperties>({
		});

	}

	export interface Get_multiple_showsReturn {

		/** Required */
		shows: Array<SimplifiedShowObject>;
	}
	export interface Get_multiple_showsReturnFormProperties {
	}
	export function CreateGet_multiple_showsReturnFormGroup() {
		return new FormGroup<Get_multiple_showsReturnFormProperties>({
		});

	}

	export interface Get_several_tracksReturn {

		/** Required */
		tracks: Array<TrackObject>;
	}
	export interface Get_several_tracksReturnFormProperties {
	}
	export function CreateGet_several_tracksReturnFormGroup() {
		return new FormGroup<Get_several_tracksReturnFormProperties>({
		});

	}

	export interface Create_playlistPostBody {

		/**
		 * Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._
		 */
		collaborative?: boolean | null;

		/**
		 * value for playlist description as displayed in Spotify Clients and in the Web API.
		 */
		description?: string | null;

		/**
		 * The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.
		 * Required
		 */
		name: string;

		/**
		 * Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes)
		 */
		public?: boolean | null;
	}
	export interface Create_playlistPostBodyFormProperties {

		/**
		 * Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._
		 */
		collaborative: FormControl<boolean | null | undefined>,

		/**
		 * value for playlist description as displayed in Spotify Clients and in the Web API.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes)
		 */
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateCreate_playlistPostBodyFormGroup() {
		return new FormGroup<Create_playlistPostBodyFormProperties>({
			collaborative: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

