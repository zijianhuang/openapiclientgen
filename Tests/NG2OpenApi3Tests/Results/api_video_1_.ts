import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Access_token {

		/** The access token containing security credentials allowing you to acccess the API. The token lasts for one hour. */
		access_token?: string | null;

		/** Lists the time in seconds when your access token expires. It lasts for one hour. */
		expires_in?: number | null;

		/** A token you can use to get the next access token when your current access token expires. */
		refresh_token?: string | null;

		/** The type of token you have. */
		token_type?: string | null;
	}
	export interface Access_tokenFormProperties {

		/** The access token containing security credentials allowing you to acccess the API. The token lasts for one hour. */
		access_token: FormControl<string | null | undefined>,

		/** Lists the time in seconds when your access token expires. It lasts for one hour. */
		expires_in: FormControl<number | null | undefined>,

		/** A token you can use to get the next access token when your current access token expires. */
		refresh_token: FormControl<string | null | undefined>,

		/** The type of token you have. */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateAccess_tokenFormGroup() {
		return new FormGroup<Access_tokenFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Account {

		/** Deprecated. Whether you are using your production or sandbox API key will impact what environment is displayed here, as well as stats and features information. If you use your sandbox key, the environment is "sandbox." If you use your production key, the environment is "production." */
		environment?: string | null;

		/** Deprecated. What features are enabled for your account. Choices include: app.dynamic_metadata - the ability to dynamically tag videos to better segment and understand your audiences, app.event_log - the ability to create and retrieve a log detailing how your videos were interacted with, player.white_label - the ability to customise your player, stats.player_events - the ability to see statistics about how your player is being used, transcode.mp4_support - the ability to reformat content into mp4 using the H264 codec. */
		features?: Array<string>;

		/** Deprecated */
		quota?: AccountQuota;
	}
	export interface AccountFormProperties {

		/** Deprecated. Whether you are using your production or sandbox API key will impact what environment is displayed here, as well as stats and features information. If you use your sandbox key, the environment is "sandbox." If you use your production key, the environment is "production." */
		environment: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			environment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountQuota {

		/** Deprecated */
		quotaRemaining?: number | null;

		/** Deprecated */
		quotaTotal?: number | null;

		/** Deprecated */
		quotaUsed?: number | null;
	}
	export interface AccountQuotaFormProperties {

		/** Deprecated */
		quotaRemaining: FormControl<number | null | undefined>,

		/** Deprecated */
		quotaTotal: FormControl<number | null | undefined>,

		/** Deprecated */
		quotaUsed: FormControl<number | null | undefined>,
	}
	export function CreateAccountQuotaFormGroup() {
		return new FormGroup<AccountQuotaFormProperties>({
			quotaRemaining: new FormControl<number | null | undefined>(undefined),
			quotaTotal: new FormControl<number | null | undefined>(undefined),
			quotaUsed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Authenticate_payload {

		/**
		 * Your account API key. You can use your sandbox API key, or you can use your production API key.
		 * Required
		 */
		apiKey: string;
	}
	export interface Authenticate_payloadFormProperties {

		/**
		 * Your account API key. You can use your sandbox API key, or you can use your production API key.
		 * Required
		 */
		apiKey: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticate_payloadFormGroup() {
		return new FormGroup<Authenticate_payloadFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Bad_request {
		name?: string | null;
		problems?: Array<Bad_request>;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface Bad_requestFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateBad_requestFormGroup() {
		return new FormGroup<Bad_requestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bytes_range {

		/** The starting point for the range of bytes for a chunk of a video. */
		from?: number | null;

		/** The ending point for the range of bytes for a chunk of a video. */
		to?: number | null;

		/** The total number of bytes in the provided range. */
		total?: number | null;
	}
	export interface Bytes_rangeFormProperties {

		/** The starting point for the range of bytes for a chunk of a video. */
		from: FormControl<number | null | undefined>,

		/** The ending point for the range of bytes for a chunk of a video. */
		to: FormControl<number | null | undefined>,

		/** The total number of bytes in the provided range. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBytes_rangeFormGroup() {
		return new FormGroup<Bytes_rangeFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Captions_list_response {
		data?: Array<Subtitle>;
		pagination?: Pagination;
	}
	export interface Captions_list_responseFormProperties {
	}
	export function CreateCaptions_list_responseFormGroup() {
		return new FormGroup<Captions_list_responseFormProperties>({
		});

	}

	export interface Subtitle {

		/** Whether you will have subtitles or not. True for yes you will have subtitles, false for no you will not have subtitles. */
		default?: boolean | null;
		src?: string | null;
		srclang?: string | null;
		uri?: string | null;
	}
	export interface SubtitleFormProperties {

		/** Whether you will have subtitles or not. True for yes you will have subtitles, false for no you will not have subtitles. */
		default: FormControl<boolean | null | undefined>,
		src: FormControl<string | null | undefined>,
		srclang: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSubtitleFormGroup() {
		return new FormGroup<SubtitleFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			srclang: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pagination {

		/** The current page index. */
		currentPage?: number | null;

		/** The number of items on the current page. */
		currentPageItems?: number | null;

		/** Total number of items that exist. */
		itemsTotal?: number | null;

		/** Required */
		links: Array<Pagination_link>;

		/** Maximum number of item per page. */
		pageSize?: number | null;

		/** Number of items listed in the current page. */
		pagesTotal?: number | null;
	}
	export interface PaginationFormProperties {

		/** The current page index. */
		currentPage: FormControl<number | null | undefined>,

		/** The number of items on the current page. */
		currentPageItems: FormControl<number | null | undefined>,

		/** Total number of items that exist. */
		itemsTotal: FormControl<number | null | undefined>,

		/** Maximum number of item per page. */
		pageSize: FormControl<number | null | undefined>,

		/** Number of items listed in the current page. */
		pagesTotal: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			currentPage: new FormControl<number | null | undefined>(undefined),
			currentPageItems: new FormControl<number | null | undefined>(undefined),
			itemsTotal: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pagesTotal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Pagination_link {
		rel?: string | null;
		uri?: string | null;
	}
	export interface Pagination_linkFormProperties {
		rel: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePagination_linkFormGroup() {
		return new FormGroup<Pagination_linkFormProperties>({
			rel: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^self$')]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Captions_update_payload {
		default?: boolean | null;
	}
	export interface Captions_update_payloadFormProperties {
		default: FormControl<boolean | null | undefined>,
	}
	export function CreateCaptions_update_payloadFormGroup() {
		return new FormGroup<Captions_update_payloadFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Captions_upload_payload {

		/**
		 * The video text track (VTT) you want to upload.
		 * Required
		 */
		file: string;
	}
	export interface Captions_upload_payloadFormProperties {

		/**
		 * The video text track (VTT) you want to upload.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateCaptions_upload_payloadFormGroup() {
		return new FormGroup<Captions_upload_payloadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Chapter {
		language?: string | null;

		/** The link to your VTT file, which contains your chapters information for the video. */
		src?: string | null;
		uri?: string | null;
	}
	export interface ChapterFormProperties {
		language: FormControl<string | null | undefined>,

		/** The link to your VTT file, which contains your chapters information for the video. */
		src: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChapterFormGroup() {
		return new FormGroup<ChapterFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Chapters_list_response {
		data?: Array<Chapter>;
		pagination?: Pagination;
	}
	export interface Chapters_list_responseFormProperties {
	}
	export function CreateChapters_list_responseFormGroup() {
		return new FormGroup<Chapters_list_responseFormProperties>({
		});

	}

	export interface Chapters_update_payload {

		/**
		 * The VTT file describing the chapters you want to upload.
		 * Required
		 */
		file: string;
	}
	export interface Chapters_update_payloadFormProperties {

		/**
		 * The VTT file describing the chapters you want to upload.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateChapters_update_payloadFormGroup() {
		return new FormGroup<Chapters_update_payloadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Link {
		rel?: string | null;
		uri?: string | null;
	}
	export interface LinkFormProperties {
		rel: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			rel: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Live_stream {
		assets?: Live_stream_assets;

		/** Whether or not you are broadcasting the live video you recorded for others to see. True means you are broadcasting to viewers, false means you are not. */
		broadcasting?: boolean | null;

		/** The unique identifier for the live stream. Live stream IDs begin with "li." */
		liveStreamId?: string | null;

		/** The name of your live stream. */
		name?: string | null;

		/** The unique identifier for the player. */
		playerId?: string | null;

		/** BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. */
		public?: boolean | null;

		/** Whether you are recording or not. */
		record?: boolean | null;

		/** The unique, private stream key that you use to begin streaming. */
		streamKey?: string | null;
	}
	export interface Live_streamFormProperties {

		/** Whether or not you are broadcasting the live video you recorded for others to see. True means you are broadcasting to viewers, false means you are not. */
		broadcasting: FormControl<boolean | null | undefined>,

		/** The unique identifier for the live stream. Live stream IDs begin with "li." */
		liveStreamId: FormControl<string | null | undefined>,

		/** The name of your live stream. */
		name: FormControl<string | null | undefined>,

		/** The unique identifier for the player. */
		playerId: FormControl<string | null | undefined>,

		/** BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. */
		public: FormControl<boolean | null | undefined>,

		/** Whether you are recording or not. */
		record: FormControl<boolean | null | undefined>,

		/** The unique, private stream key that you use to begin streaming. */
		streamKey: FormControl<string | null | undefined>,
	}
	export function CreateLive_streamFormGroup() {
		return new FormGroup<Live_streamFormProperties>({
			broadcasting: new FormControl<boolean | null | undefined>(undefined),
			liveStreamId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			record: new FormControl<boolean | null | undefined>(undefined),
			streamKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Live_stream_assets {

		/** The http live streaming (HLS) link for your live video stream. */
		hls?: string | null;

		/** The embed code for the iframe containing your live video stream. */
		iframe?: string | null;

		/** A link to the video player that is playing your live stream. */
		player?: string | null;

		/** A link to the thumbnail for your video. */
		thumbnail?: string | null;
	}
	export interface Live_stream_assetsFormProperties {

		/** The http live streaming (HLS) link for your live video stream. */
		hls: FormControl<string | null | undefined>,

		/** The embed code for the iframe containing your live video stream. */
		iframe: FormControl<string | null | undefined>,

		/** A link to the video player that is playing your live stream. */
		player: FormControl<string | null | undefined>,

		/** A link to the thumbnail for your video. */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateLive_stream_assetsFormGroup() {
		return new FormGroup<Live_stream_assetsFormProperties>({
			hls: new FormControl<string | null | undefined>(undefined),
			iframe: new FormControl<string | null | undefined>(undefined),
			player: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Live_stream_create_payload {

		/**
		 * Add a name for your live stream here.
		 * Required
		 */
		name: string;

		/** The unique identifier for the player. */
		playerId?: string | null;

		/** BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. */
		public?: boolean | null;

		/** Whether you are recording or not. True for record, false for not record. */
		record?: boolean | null;
	}
	export interface Live_stream_create_payloadFormProperties {

		/**
		 * Add a name for your live stream here.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The unique identifier for the player. */
		playerId: FormControl<string | null | undefined>,

		/** BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. */
		public: FormControl<boolean | null | undefined>,

		/** Whether you are recording or not. True for record, false for not record. */
		record: FormControl<boolean | null | undefined>,
	}
	export function CreateLive_stream_create_payloadFormGroup() {
		return new FormGroup<Live_stream_create_payloadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			playerId: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			record: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Live_stream_list_response {

		/** Required */
		data: Array<Live_stream>;

		/** Required */
		pagination: Pagination;
	}
	export interface Live_stream_list_responseFormProperties {
	}
	export function CreateLive_stream_list_responseFormGroup() {
		return new FormGroup<Live_stream_list_responseFormProperties>({
		});

	}

	export interface Live_stream_session {

		/** What kind of browser the viewer is using for the live stream session. */
		client?: Live_stream_session_client;

		/** What type of device the user is on when in the live stream session. */
		device?: Live_stream_session_device;

		/** The location of the viewer of the live stream. */
		location?: Live_stream_session_location;

		/** The operating system the viewer is on. */
		os?: Video_session_os;
		referrer?: Live_stream_session_referrer;
		session?: Live_stream_session_session;
	}
	export interface Live_stream_sessionFormProperties {
	}
	export function CreateLive_stream_sessionFormGroup() {
		return new FormGroup<Live_stream_sessionFormProperties>({
		});

	}


	/** What kind of browser the viewer is using for the live stream session. */
	export interface Live_stream_session_client {

		/** The name of the browser used to view the live stream session. */
		name?: string | null;

		/** The type of client used to view the live stream session. */
		type?: string | null;

		/** The version of the browser used to view the live stream session. */
		version?: string | null;
	}

	/** What kind of browser the viewer is using for the live stream session. */
	export interface Live_stream_session_clientFormProperties {

		/** The name of the browser used to view the live stream session. */
		name: FormControl<string | null | undefined>,

		/** The type of client used to view the live stream session. */
		type: FormControl<string | null | undefined>,

		/** The version of the browser used to view the live stream session. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateLive_stream_session_clientFormGroup() {
		return new FormGroup<Live_stream_session_clientFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** What type of device the user is on when in the live stream session. */
	export interface Live_stream_session_device {

		/** The specific model of the device, if known. */
		model?: string | null;

		/** What the type is like desktop, laptop, mobile. */
		type?: string | null;

		/** If known, what the brand of the device is, like Apple, Dell, etc. */
		vendor?: string | null;
	}

	/** What type of device the user is on when in the live stream session. */
	export interface Live_stream_session_deviceFormProperties {

		/** The specific model of the device, if known. */
		model: FormControl<string | null | undefined>,

		/** What the type is like desktop, laptop, mobile. */
		type: FormControl<string | null | undefined>,

		/** If known, what the brand of the device is, like Apple, Dell, etc. */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateLive_stream_session_deviceFormGroup() {
		return new FormGroup<Live_stream_session_deviceFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of the viewer of the live stream. */
	export interface Live_stream_session_location {

		/** The city of the viewer of the live stream. */
		city?: string | null;

		/** The country of the viewer of the live stream. */
		country?: string | null;
	}

	/** The location of the viewer of the live stream. */
	export interface Live_stream_session_locationFormProperties {

		/** The city of the viewer of the live stream. */
		city: FormControl<string | null | undefined>,

		/** The country of the viewer of the live stream. */
		country: FormControl<string | null | undefined>,
	}
	export function CreateLive_stream_session_locationFormGroup() {
		return new FormGroup<Live_stream_session_locationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operating system the viewer is on. */
	export interface Video_session_os {

		/** The name of the operating system. */
		name?: string | null;

		/** The nickname for the operating system, often representing the version. */
		shortname?: string | null;

		/** The version of the operating system. */
		version?: string | null;
	}

	/** The operating system the viewer is on. */
	export interface Video_session_osFormProperties {

		/** The name of the operating system. */
		name: FormControl<string | null | undefined>,

		/** The nickname for the operating system, often representing the version. */
		shortname: FormControl<string | null | undefined>,

		/** The version of the operating system. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVideo_session_osFormGroup() {
		return new FormGroup<Video_session_osFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			shortname: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Live_stream_session_referrer {

		/** The type of search that brought the viewer to the live stream. Organic would be they found it on their own, paid would be they found it via an advertisement. */
		medium?: string | null;

		/** What term they searched for that led them to the live stream. */
		searchTerm?: string | null;

		/** Where the viewer came from to see the live stream (usually where they searched from). */
		source?: string | null;

		/** The website the viewer of the live stream was referred to in order to view the live stream. */
		url?: string | null;
	}
	export interface Live_stream_session_referrerFormProperties {

		/** The type of search that brought the viewer to the live stream. Organic would be they found it on their own, paid would be they found it via an advertisement. */
		medium: FormControl<string | null | undefined>,

		/** What term they searched for that led them to the live stream. */
		searchTerm: FormControl<string | null | undefined>,

		/** Where the viewer came from to see the live stream (usually where they searched from). */
		source: FormControl<string | null | undefined>,

		/** The website the viewer of the live stream was referred to in order to view the live stream. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLive_stream_session_referrerFormGroup() {
		return new FormGroup<Live_stream_session_referrerFormProperties>({
			medium: new FormControl<string | null | undefined>(undefined),
			searchTerm: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Live_stream_session_session {

		/** When the session ended, with the date and time presented in ISO-8601 format. */
		endedAt?: Date | null;

		/** When the session started, with the date and time presented in ISO-8601 format. */
		loadedAt?: Date | null;

		/** A unique identifier for your session. You can use this to track what happens during a specific session. */
		sessionId?: string | null;
	}
	export interface Live_stream_session_sessionFormProperties {

		/** When the session ended, with the date and time presented in ISO-8601 format. */
		endedAt: FormControl<Date | null | undefined>,

		/** When the session started, with the date and time presented in ISO-8601 format. */
		loadedAt: FormControl<Date | null | undefined>,

		/** A unique identifier for your session. You can use this to track what happens during a specific session. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateLive_stream_session_sessionFormGroup() {
		return new FormGroup<Live_stream_session_sessionFormProperties>({
			endedAt: new FormControl<Date | null | undefined>(undefined),
			loadedAt: new FormControl<Date | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Live_stream_thumbnail_upload_payload {

		/**
		 * The image to be added as a thumbnail.
		 * Required
		 */
		file: string;
	}
	export interface Live_stream_thumbnail_upload_payloadFormProperties {

		/**
		 * The image to be added as a thumbnail.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateLive_stream_thumbnail_upload_payloadFormGroup() {
		return new FormGroup<Live_stream_thumbnail_upload_payloadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Live_stream_update_payload {

		/** The name you want to use for your live stream. */
		name?: string | null;

		/** The unique ID for the player associated with a live stream that you want to update. */
		playerId?: string | null;

		/** BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. */
		public?: boolean | null;

		/** Use this to indicate whether you want the recording on or off. On is true, off is false. */
		record?: boolean | null;
	}
	export interface Live_stream_update_payloadFormProperties {

		/** The name you want to use for your live stream. */
		name: FormControl<string | null | undefined>,

		/** The unique ID for the player associated with a live stream that you want to update. */
		playerId: FormControl<string | null | undefined>,

		/** BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. */
		public: FormControl<boolean | null | undefined>,

		/** Use this to indicate whether you want the recording on or off. On is true, off is false. */
		record: FormControl<boolean | null | undefined>,
	}
	export function CreateLive_stream_update_payloadFormGroup() {
		return new FormGroup<Live_stream_update_payloadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			record: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Metadata {

		/** The constant that defines the data set. */
		key?: string | null;

		/** A variable which belongs to the data set. */
		value?: string | null;
	}
	export interface MetadataFormProperties {

		/** The constant that defines the data set. */
		key: FormControl<string | null | undefined>,

		/** A variable which belongs to the data set. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Not_found {
		name?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface Not_foundFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateNot_foundFormGroup() {
		return new FormGroup<Not_foundFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player extends Playerinput {
		assets?: PlayerAssets;

		/** When the player was created, presented in ISO-8601 format. */
		createdAt?: Date | null;

		/** Deprecated */
		linkActive?: string | null;
		playerId?: string | null;

		/** Deprecated */
		shapeAspect?: string | null;

		/** Deprecated */
		shapeBackgroundBottom?: string | null;

		/** Deprecated */
		shapeBackgroundTop?: string | null;

		/** Deprecated */
		shapeMargin?: number | null;

		/** Deprecated */
		shapeRadius?: number | null;

		/** When the player was last updated, presented in ISO-8601 format. */
		updatedAt?: Date | null;
	}
	export interface PlayerFormProperties extends PlayerinputFormProperties {

		/** When the player was created, presented in ISO-8601 format. */
		createdAt: FormControl<Date | null | undefined>,

		/** Deprecated */
		linkActive: FormControl<string | null | undefined>,
		playerId: FormControl<string | null | undefined>,

		/** Deprecated */
		shapeAspect: FormControl<string | null | undefined>,

		/** Deprecated */
		shapeBackgroundBottom: FormControl<string | null | undefined>,

		/** Deprecated */
		shapeBackgroundTop: FormControl<string | null | undefined>,

		/** Deprecated */
		shapeMargin: FormControl<number | null | undefined>,

		/** Deprecated */
		shapeRadius: FormControl<number | null | undefined>,

		/** When the player was last updated, presented in ISO-8601 format. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			backgroundBottom: new FormControl<string | null | undefined>(undefined),
			backgroundText: new FormControl<string | null | undefined>(undefined),
			backgroundTop: new FormControl<string | null | undefined>(undefined),
			enableApi: new FormControl<boolean | null | undefined>(undefined),
			enableControls: new FormControl<boolean | null | undefined>(undefined),
			forceAutoplay: new FormControl<boolean | null | undefined>(undefined),
			forceLoop: new FormControl<boolean | null | undefined>(undefined),
			hideTitle: new FormControl<boolean | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			linkHover: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			trackBackground: new FormControl<string | null | undefined>(undefined),
			trackPlayed: new FormControl<string | null | undefined>(undefined),
			trackUnplayed: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			linkActive: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			shapeAspect: new FormControl<string | null | undefined>(undefined),
			shapeBackgroundBottom: new FormControl<string | null | undefined>(undefined),
			shapeBackgroundTop: new FormControl<string | null | undefined>(undefined),
			shapeMargin: new FormControl<number | null | undefined>(undefined),
			shapeRadius: new FormControl<number | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PlayerAssets {

		/** The path to the file containing your logo. */
		link?: string | null;

		/** The name of the file containing the logo you want to use. */
		logo?: string | null;
	}
	export interface PlayerAssetsFormProperties {

		/** The path to the file containing your logo. */
		link: FormControl<string | null | undefined>,

		/** The name of the file containing the logo you want to use. */
		logo: FormControl<string | null | undefined>,
	}
	export function CreatePlayerAssetsFormGroup() {
		return new FormGroup<PlayerAssetsFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player_session_event {
		at?: number | null;

		/** When an event occurred, presented in ISO-8601 format. */
		emittedAt?: Date | null;
		from?: number | null;
		to?: number | null;

		/** Possible values are: ready, play, pause, resume, seek.backward, seek.forward, end */
		type?: string | null;
	}
	export interface Player_session_eventFormProperties {
		at: FormControl<number | null | undefined>,

		/** When an event occurred, presented in ISO-8601 format. */
		emittedAt: FormControl<Date | null | undefined>,
		from: FormControl<number | null | undefined>,
		to: FormControl<number | null | undefined>,

		/** Possible values are: ready, play, pause, resume, seek.backward, seek.forward, end */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlayer_session_eventFormGroup() {
		return new FormGroup<Player_session_eventFormProperties>({
			at: new FormControl<number | null | undefined>(undefined),
			emittedAt: new FormControl<Date | null | undefined>(undefined),
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerCreationPayload {
	}
	export interface PlayerCreationPayloadFormProperties {
	}
	export function CreatePlayerCreationPayloadFormGroup() {
		return new FormGroup<PlayerCreationPayloadFormProperties>({
		});

	}

	export interface PlayerUpdatePayload {
	}
	export interface PlayerUpdatePayloadFormProperties {
	}
	export function CreatePlayerUpdatePayloadFormGroup() {
		return new FormGroup<PlayerUpdatePayloadFormProperties>({
		});

	}

	export interface Playerinput {

		/** RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7) */
		backgroundBottom?: string | null;

		/** RGBA color for title text. Default: rgba(255, 255, 255, 1) */
		backgroundText?: string | null;

		/** RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7) */
		backgroundTop?: string | null;

		/** enable/disable player SDK access. Default: true */
		enableApi?: boolean | null;

		/** enable/disable player controls. Default: true */
		enableControls?: boolean | null;

		/** enable/disable player autoplay. Default: false */
		forceAutoplay?: boolean | null;

		/** enable/disable looping. Default: false */
		forceLoop?: boolean | null;

		/** enable/disable title. Default: false */
		hideTitle?: boolean | null;

		/** RGBA color for all controls. Default: rgba(255, 255, 255, 1) */
		link?: string | null;

		/** RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1) */
		linkHover?: string | null;

		/** RGBA color for timer text. Default: rgba(255, 255, 255, 1) */
		text?: string | null;

		/** RGBA color playback bar: background. Default: rgba(255, 255, 255, .2) */
		trackBackground?: string | null;

		/** RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95) */
		trackPlayed?: string | null;

		/** RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35) */
		trackUnplayed?: string | null;
	}
	export interface PlayerinputFormProperties {

		/** RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7) */
		backgroundBottom: FormControl<string | null | undefined>,

		/** RGBA color for title text. Default: rgba(255, 255, 255, 1) */
		backgroundText: FormControl<string | null | undefined>,

		/** RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7) */
		backgroundTop: FormControl<string | null | undefined>,

		/** enable/disable player SDK access. Default: true */
		enableApi: FormControl<boolean | null | undefined>,

		/** enable/disable player controls. Default: true */
		enableControls: FormControl<boolean | null | undefined>,

		/** enable/disable player autoplay. Default: false */
		forceAutoplay: FormControl<boolean | null | undefined>,

		/** enable/disable looping. Default: false */
		forceLoop: FormControl<boolean | null | undefined>,

		/** enable/disable title. Default: false */
		hideTitle: FormControl<boolean | null | undefined>,

		/** RGBA color for all controls. Default: rgba(255, 255, 255, 1) */
		link: FormControl<string | null | undefined>,

		/** RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1) */
		linkHover: FormControl<string | null | undefined>,

		/** RGBA color for timer text. Default: rgba(255, 255, 255, 1) */
		text: FormControl<string | null | undefined>,

		/** RGBA color playback bar: background. Default: rgba(255, 255, 255, .2) */
		trackBackground: FormControl<string | null | undefined>,

		/** RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95) */
		trackPlayed: FormControl<string | null | undefined>,

		/** RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35) */
		trackUnplayed: FormControl<string | null | undefined>,
	}
	export function CreatePlayerinputFormGroup() {
		return new FormGroup<PlayerinputFormProperties>({
			backgroundBottom: new FormControl<string | null | undefined>(undefined),
			backgroundText: new FormControl<string | null | undefined>(undefined),
			backgroundTop: new FormControl<string | null | undefined>(undefined),
			enableApi: new FormControl<boolean | null | undefined>(undefined),
			enableControls: new FormControl<boolean | null | undefined>(undefined),
			forceAutoplay: new FormControl<boolean | null | undefined>(undefined),
			forceLoop: new FormControl<boolean | null | undefined>(undefined),
			hideTitle: new FormControl<boolean | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			linkHover: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			trackBackground: new FormControl<string | null | undefined>(undefined),
			trackPlayed: new FormControl<string | null | undefined>(undefined),
			trackUnplayed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Players_list_response {
		data?: Array<Player>;
		pagination?: Pagination;
	}
	export interface Players_list_responseFormProperties {
	}
	export function CreatePlayers_list_responseFormGroup() {
		return new FormGroup<Players_list_responseFormProperties>({
		});

	}

	export interface Players_upload_logo_payload {

		/**
		 * The name of the file you want to use for your logo.
		 * Required
		 */
		file: string;

		/**
		 * The path to the file you want to upload and use as a logo.
		 * Required
		 */
		link: string;
	}
	export interface Players_upload_logo_payloadFormProperties {

		/**
		 * The name of the file you want to use for your logo.
		 * Required
		 */
		file: FormControl<string | null | undefined>,

		/**
		 * The path to the file you want to upload and use as a logo.
		 * Required
		 */
		link: FormControl<string | null | undefined>,
	}
	export function CreatePlayers_upload_logo_payloadFormGroup() {
		return new FormGroup<Players_upload_logo_payloadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Quality {

		/** The quality of the video you have, in pixels. Choices include 360p, 480p, 720p, 1080p, and 2160p. */
		quality?: QualityQuality | null;

		/** The status of your video. Statuses include waiting - the video is waiting to be encoded. encoding - the video is in the process of being encoded. encoded - the video was successfully encoded. failed - the video failed to be encoded. */
		status?: QualityStatus | null;
	}
	export interface QualityFormProperties {

		/** The quality of the video you have, in pixels. Choices include 360p, 480p, 720p, 1080p, and 2160p. */
		quality: FormControl<QualityQuality | null | undefined>,

		/** The status of your video. Statuses include waiting - the video is waiting to be encoded. encoding - the video is in the process of being encoded. encoded - the video was successfully encoded. failed - the video failed to be encoded. */
		status: FormControl<QualityStatus | null | undefined>,
	}
	export function CreateQualityFormGroup() {
		return new FormGroup<QualityFormProperties>({
			quality: new FormControl<QualityQuality | null | undefined>(undefined),
			status: new FormControl<QualityStatus | null | undefined>(undefined),
		});

	}

	export enum QualityQuality { '240p' = '240p', '360p' = '360p', '480p' = '480p', '720p' = '720p', '1080p' = '1080p', '2160p' = '2160p' }

	export enum QualityStatus { waiting = 'waiting', encoding = 'encoding', encoded = 'encoded', failed = 'failed' }

	export interface Raw_statistics_list_live_stream_analytics_response {
		data?: Array<Live_stream_session>;
		pagination?: Pagination;
	}
	export interface Raw_statistics_list_live_stream_analytics_responseFormProperties {
	}
	export function CreateRaw_statistics_list_live_stream_analytics_responseFormGroup() {
		return new FormGroup<Raw_statistics_list_live_stream_analytics_responseFormProperties>({
		});

	}

	export interface Raw_statistics_list_player_session_events_response {
		data?: Array<Player_session_event>;
		pagination?: Pagination;
	}
	export interface Raw_statistics_list_player_session_events_responseFormProperties {
	}
	export function CreateRaw_statistics_list_player_session_events_responseFormGroup() {
		return new FormGroup<Raw_statistics_list_player_session_events_responseFormProperties>({
		});

	}

	export interface Raw_statistics_list_sessions_response {
		data?: Array<Video_session>;
		pagination?: Pagination;
	}
	export interface Raw_statistics_list_sessions_responseFormProperties {
	}
	export function CreateRaw_statistics_list_sessions_responseFormGroup() {
		return new FormGroup<Raw_statistics_list_sessions_responseFormProperties>({
		});

	}

	export interface Video_session {

		/** What kind of browser the viewer is using for the video session. */
		client?: Video_session_client;

		/** What type of device the user is on when in the video session. */
		device?: Video_session_device;

		/** The location of the viewer. */
		location?: Video_session_location;

		/** The operating system the viewer is on. */
		os?: Video_session_os;
		referrer?: Video_session_referrer;
		session?: Video_session_session;
	}
	export interface Video_sessionFormProperties {
	}
	export function CreateVideo_sessionFormGroup() {
		return new FormGroup<Video_sessionFormProperties>({
		});

	}


	/** What kind of browser the viewer is using for the video session. */
	export interface Video_session_client {

		/** The name of the browser used to view the video session. */
		name?: string | null;

		/** The type of client used to view the video session. */
		type?: string | null;

		/** The version of the browser used to view the video session. */
		version?: string | null;
	}

	/** What kind of browser the viewer is using for the video session. */
	export interface Video_session_clientFormProperties {

		/** The name of the browser used to view the video session. */
		name: FormControl<string | null | undefined>,

		/** The type of client used to view the video session. */
		type: FormControl<string | null | undefined>,

		/** The version of the browser used to view the video session. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVideo_session_clientFormGroup() {
		return new FormGroup<Video_session_clientFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** What type of device the user is on when in the video session. */
	export interface Video_session_device {

		/** The specific model of the device, if known. */
		model?: string | null;

		/** What the type is like desktop, laptop, mobile. */
		type?: string | null;

		/** If known, what the brand of the device is, like Apple, Dell, etc. */
		vendor?: string | null;
	}

	/** What type of device the user is on when in the video session. */
	export interface Video_session_deviceFormProperties {

		/** The specific model of the device, if known. */
		model: FormControl<string | null | undefined>,

		/** What the type is like desktop, laptop, mobile. */
		type: FormControl<string | null | undefined>,

		/** If known, what the brand of the device is, like Apple, Dell, etc. */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateVideo_session_deviceFormGroup() {
		return new FormGroup<Video_session_deviceFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of the viewer. */
	export interface Video_session_location {

		/** The city of the viewer. */
		city?: string | null;

		/** The country of the viewer. */
		country?: string | null;
	}

	/** The location of the viewer. */
	export interface Video_session_locationFormProperties {

		/** The city of the viewer. */
		city: FormControl<string | null | undefined>,

		/** The country of the viewer. */
		country: FormControl<string | null | undefined>,
	}
	export function CreateVideo_session_locationFormGroup() {
		return new FormGroup<Video_session_locationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Video_session_referrer {

		/** How they arrived at the site, for example organic or paid. Organic meaning they found it themselves and paid meaning they followed a link from an advertisement. */
		medium?: string | null;

		/** The search term they typed to arrive at the video session. */
		searchTerm?: string | null;

		/** The source the referrer came from to the video session. For example if they searched through google to find the stream. */
		source?: string | null;

		/** The link the viewer used to reach the video session. */
		url?: string | null;
	}
	export interface Video_session_referrerFormProperties {

		/** How they arrived at the site, for example organic or paid. Organic meaning they found it themselves and paid meaning they followed a link from an advertisement. */
		medium: FormControl<string | null | undefined>,

		/** The search term they typed to arrive at the video session. */
		searchTerm: FormControl<string | null | undefined>,

		/** The source the referrer came from to the video session. For example if they searched through google to find the stream. */
		source: FormControl<string | null | undefined>,

		/** The link the viewer used to reach the video session. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVideo_session_referrerFormGroup() {
		return new FormGroup<Video_session_referrerFormProperties>({
			medium: new FormControl<string | null | undefined>(undefined),
			searchTerm: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Video_session_session {

		/** When the video session ended, presented in ISO-8601 format. */
		endedAt?: Date | null;

		/** When the video session started, presented in ISO-8601 format. */
		loadedAt?: Date | null;

		/** The unique identifier for the session that you can use to track what happens during it. */
		sessionId?: string | null;
	}
	export interface Video_session_sessionFormProperties {

		/** When the video session ended, presented in ISO-8601 format. */
		endedAt: FormControl<Date | null | undefined>,

		/** When the video session started, presented in ISO-8601 format. */
		loadedAt: FormControl<Date | null | undefined>,

		/** The unique identifier for the session that you can use to track what happens during it. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateVideo_session_sessionFormGroup() {
		return new FormGroup<Video_session_sessionFormProperties>({
			endedAt: new FormControl<Date | null | undefined>(undefined),
			loadedAt: new FormControl<Date | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Refresh_token_payload {

		/**
		 * The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it's the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token.
		 * Required
		 */
		refreshToken: string;
	}
	export interface Refresh_token_payloadFormProperties {

		/**
		 * The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it's the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token.
		 * Required
		 */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateRefresh_token_payloadFormGroup() {
		return new FormGroup<Refresh_token_payloadFormProperties>({
			refreshToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Token_create_payload {

		/**
		 * Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		ttl?: number | null;
	}
	export interface Token_create_payloadFormProperties {

		/**
		 * Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateToken_create_payloadFormGroup() {
		return new FormGroup<Token_create_payloadFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export interface Token_list_response {

		/** Required */
		data: Array<Upload_token>;

		/** Required */
		pagination: Pagination;
	}
	export interface Token_list_responseFormProperties {
	}
	export function CreateToken_list_responseFormGroup() {
		return new FormGroup<Token_list_responseFormProperties>({
		});

	}

	export interface Upload_token {

		/** When the token was created, displayed in ISO-8601 format. */
		createdAt?: Date | null;

		/** When the token expires, displayed in ISO-8601 format. */
		expiresAt?: Date | null;

		/** The unique identifier for the token you will use to authenticate an upload. */
		token?: string | null;

		/**
		 * Time-to-live - how long the upload token is valid for.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		ttl?: number | null;
	}
	export interface Upload_tokenFormProperties {

		/** When the token was created, displayed in ISO-8601 format. */
		createdAt: FormControl<Date | null | undefined>,

		/** When the token expires, displayed in ISO-8601 format. */
		expiresAt: FormControl<Date | null | undefined>,

		/** The unique identifier for the token you will use to authenticate an upload. */
		token: FormControl<string | null | undefined>,

		/**
		 * Time-to-live - how long the upload token is valid for.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateUpload_tokenFormGroup() {
		return new FormGroup<Upload_tokenFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export interface Token_upload_payload {

		/**
		 * The path to the video you want to upload.
		 * Required
		 */
		file: string;

		/** The video id returned by the first call to this endpoint in a large video upload scenario. */
		videoId?: string | null;
	}
	export interface Token_upload_payloadFormProperties {

		/**
		 * The path to the video you want to upload.
		 * Required
		 */
		file: FormControl<string | null | undefined>,

		/** The video id returned by the first call to this endpoint in a large video upload scenario. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateToken_upload_payloadFormGroup() {
		return new FormGroup<Token_upload_payloadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Video {

		/** Collection of details about the video object that you can use to work with the video object. */
		assets?: VideoAssets;

		/**
		 * A description for the video content.
		 */
		description?: string | null;

		/**
		 * Metadata you can use to categorise and filter videos. Metadata is a list of dictionaries, where each dictionary represents a key value pair for categorising a video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.
		 */
		metadata?: Array<Metadata>;

		/**
		 * This lets you know whether mp4 is supported. If enabled, an mp4 URL will be provided in the response for the video.
		 */
		mp4Support?: boolean | null;

		/**
		 * Defines if video is panoramic.
		 */
		panoramic?: boolean | null;

		/**
		 * The id of the player that will be applied on the video.
		 */
		playerId?: string | null;

		/**
		 * Defines if the content is publicly reachable or if a unique token is needed for each play session. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).
		 */
		public?: boolean | null;

		/** The date and time the API created the video. Date and time are provided using ISO-8601 UTC format. */
		publishedAt?: string | null;

		/** Source information about the video. */
		source?: VideoSource;

		/**
		 * One array of tags (each tag is a string) in order to categorize a video. Tags may include spaces.
		 */
		tags?: Array<string>;

		/**
		 * The title of the video content.
		 */
		title?: string | null;

		/** The date and time the video was updated. Date and time are provided using ISO-8601 UTC format. */
		updatedAt?: Date | null;

		/** The unique identifier of the video object. */
		videoId?: string | null;
	}
	export interface VideoFormProperties {

		/**
		 * A description for the video content.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * This lets you know whether mp4 is supported. If enabled, an mp4 URL will be provided in the response for the video.
		 */
		mp4Support: FormControl<boolean | null | undefined>,

		/**
		 * Defines if video is panoramic.
		 */
		panoramic: FormControl<boolean | null | undefined>,

		/**
		 * The id of the player that will be applied on the video.
		 */
		playerId: FormControl<string | null | undefined>,

		/**
		 * Defines if the content is publicly reachable or if a unique token is needed for each play session. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).
		 */
		public: FormControl<boolean | null | undefined>,

		/** The date and time the API created the video. Date and time are provided using ISO-8601 UTC format. */
		publishedAt: FormControl<string | null | undefined>,

		/**
		 * The title of the video content.
		 */
		title: FormControl<string | null | undefined>,

		/** The date and time the video was updated. Date and time are provided using ISO-8601 UTC format. */
		updatedAt: FormControl<Date | null | undefined>,

		/** The unique identifier of the video object. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			mp4Support: new FormControl<boolean | null | undefined>(undefined),
			panoramic: new FormControl<boolean | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			publishedAt: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of details about the video object that you can use to work with the video object. */
	export interface VideoAssets {

		/** This is the manifest URL. For HTTP Live Streaming (HLS), when a HLS video stream is initiated, the first file to download is the manifest. This file has the extension M3U8, and provides the video player with information about the various bitrates available for streaming. */
		hls?: string | null;

		/** Code to use video from a third party website */
		iframe?: string | null;

		/** Available only if mp4Support is enabled. Raw mp4 url. */
		mp4?: string | null;

		/** Raw url of the player. */
		player?: string | null;

		/** Poster of the video. */
		thumbnail?: string | null;
	}

	/** Collection of details about the video object that you can use to work with the video object. */
	export interface VideoAssetsFormProperties {

		/** This is the manifest URL. For HTTP Live Streaming (HLS), when a HLS video stream is initiated, the first file to download is the manifest. This file has the extension M3U8, and provides the video player with information about the various bitrates available for streaming. */
		hls: FormControl<string | null | undefined>,

		/** Code to use video from a third party website */
		iframe: FormControl<string | null | undefined>,

		/** Available only if mp4Support is enabled. Raw mp4 url. */
		mp4: FormControl<string | null | undefined>,

		/** Raw url of the player. */
		player: FormControl<string | null | undefined>,

		/** Poster of the video. */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateVideoAssetsFormGroup() {
		return new FormGroup<VideoAssetsFormProperties>({
			hls: new FormControl<string | null | undefined>(undefined),
			iframe: new FormControl<string | null | undefined>(undefined),
			mp4: new FormControl<string | null | undefined>(undefined),
			player: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source information about the video. */
	export interface VideoSource {

		/** This appears if the video is from a Live Record. */
		liveStream?: Video_source_live_stream;
		type?: string | null;

		/** The URL where the video is stored. */
		uri?: string | null;
	}

	/** Source information about the video. */
	export interface VideoSourceFormProperties {
		type: FormControl<string | null | undefined>,

		/** The URL where the video is stored. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoSourceFormGroup() {
		return new FormGroup<VideoSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This appears if the video is from a Live Record. */
	export interface Video_source_live_stream {
		links?: Array<Video_source_live_stream_link>;

		/** The unique identifier for the live stream. */
		liveStreamId?: string | null;
	}

	/** This appears if the video is from a Live Record. */
	export interface Video_source_live_streamFormProperties {

		/** The unique identifier for the live stream. */
		liveStreamId: FormControl<string | null | undefined>,
	}
	export function CreateVideo_source_live_streamFormGroup() {
		return new FormGroup<Video_source_live_streamFormProperties>({
			liveStreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Video_source_live_stream_link {
		rel?: string | null;
		uri?: string | null;
	}
	export interface Video_source_live_stream_linkFormProperties {
		rel: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideo_source_live_stream_linkFormGroup() {
		return new FormGroup<Video_source_live_stream_linkFormProperties>({
			rel: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Video_create_payload {

		/** A brief description of your video. */
		description?: string | null;

		/** A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. Read more on [dynamic metadata](https://api.video/blog/endpoints/dynamic-metadata). */
		metadata?: Array<Metadata>;

		/** Enables mp4 version in addition to streamed version. */
		mp4Support?: boolean | null;

		/** Indicates if your video is a 360/immersive video. */
		panoramic?: boolean | null;

		/** The unique identification number for your video player. */
		playerId?: string | null;

		/** Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos). */
		public?: boolean | null;

		/** The API uses ISO-8601 format for time, and includes 3 places for milliseconds. */
		publishedAt?: Date | null;

		/** If you add a video already on the web, this is where you enter the url for the video. */
		source?: string | null;

		/** A list of tags you want to use to describe your video. */
		tags?: Array<string>;

		/**
		 * The title of your new video.
		 * Required
		 */
		title: string;
	}
	export interface Video_create_payloadFormProperties {

		/** A brief description of your video. */
		description: FormControl<string | null | undefined>,

		/** Enables mp4 version in addition to streamed version. */
		mp4Support: FormControl<boolean | null | undefined>,

		/** Indicates if your video is a 360/immersive video. */
		panoramic: FormControl<boolean | null | undefined>,

		/** The unique identification number for your video player. */
		playerId: FormControl<string | null | undefined>,

		/** Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos). */
		public: FormControl<boolean | null | undefined>,

		/** The API uses ISO-8601 format for time, and includes 3 places for milliseconds. */
		publishedAt: FormControl<Date | null | undefined>,

		/** If you add a video already on the web, this is where you enter the url for the video. */
		source: FormControl<string | null | undefined>,

		/**
		 * The title of your new video.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVideo_create_payloadFormGroup() {
		return new FormGroup<Video_create_payloadFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			mp4Support: new FormControl<boolean | null | undefined>(undefined),
			panoramic: new FormControl<boolean | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Video_thumbnail_pick_payload {

		/**
		 * Frame in video to be used as a placeholder before the video plays.
		 * Example: '"00:01:00.000" for 1 minute into the video.'
		 * Valid Patterns:
		 * "hh:mm:ss.ms"
		 * "hh:mm:ss:frameNumber"
		 * "124" (integer value is reported as seconds)
		 * If selection is out of range, "00:00:00.00" will be chosen.
		 * Required
		 */
		timecode: string;
	}
	export interface Video_thumbnail_pick_payloadFormProperties {

		/**
		 * Frame in video to be used as a placeholder before the video plays.
		 * Example: '"00:01:00.000" for 1 minute into the video.'
		 * Valid Patterns:
		 * "hh:mm:ss.ms"
		 * "hh:mm:ss:frameNumber"
		 * "124" (integer value is reported as seconds)
		 * If selection is out of range, "00:00:00.00" will be chosen.
		 * Required
		 */
		timecode: FormControl<string | null | undefined>,
	}
	export function CreateVideo_thumbnail_pick_payloadFormGroup() {
		return new FormGroup<Video_thumbnail_pick_payloadFormProperties>({
			timecode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('00:00:00.00')]),
		});

	}

	export interface Video_thumbnail_upload_payload {

		/**
		 * The image to be added as a thumbnail.
		 * Required
		 */
		file: string;
	}
	export interface Video_thumbnail_upload_payloadFormProperties {

		/**
		 * The image to be added as a thumbnail.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateVideo_thumbnail_upload_payloadFormGroup() {
		return new FormGroup<Video_thumbnail_upload_payloadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Video_update_payload {

		/** A brief description of the video. */
		description?: string | null;

		/** A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair. */
		metadata?: Array<Metadata>;

		/** Whether the player supports the mp4 format. */
		mp4Support?: boolean | null;

		/** Whether the video is a 360 degree or immersive video. */
		panoramic?: boolean | null;

		/** The unique ID for the player you want to associate with your video. */
		playerId?: string | null;

		/** Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos). */
		public?: boolean | null;

		/** A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video. */
		tags?: Array<string>;

		/** The title you want to use for your video. */
		title?: string | null;
	}
	export interface Video_update_payloadFormProperties {

		/** A brief description of the video. */
		description: FormControl<string | null | undefined>,

		/** Whether the player supports the mp4 format. */
		mp4Support: FormControl<boolean | null | undefined>,

		/** Whether the video is a 360 degree or immersive video. */
		panoramic: FormControl<boolean | null | undefined>,

		/** The unique ID for the player you want to associate with your video. */
		playerId: FormControl<string | null | undefined>,

		/** Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos). */
		public: FormControl<boolean | null | undefined>,

		/** The title you want to use for your video. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVideo_update_payloadFormGroup() {
		return new FormGroup<Video_update_payloadFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			mp4Support: new FormControl<boolean | null | undefined>(undefined),
			panoramic: new FormControl<boolean | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Video_upload_payload {

		/**
		 * The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the "/videos" endpoint and add the "source" parameter when you create a new video.
		 * Required
		 */
		file: string;
	}
	export interface Video_upload_payloadFormProperties {

		/**
		 * The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the "/videos" endpoint and add the "source" parameter when you create a new video.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateVideo_upload_payloadFormGroup() {
		return new FormGroup<Video_upload_payloadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Videos_list_response {

		/** Required */
		data: Array<Video>;

		/** Required */
		pagination: Pagination;
	}
	export interface Videos_list_responseFormProperties {
	}
	export function CreateVideos_list_responseFormGroup() {
		return new FormGroup<Videos_list_responseFormProperties>({
		});

	}

	export interface Videostatus {
		encoding?: Videostatus_encoding;

		/** Details about the capturing, transferring, and storing of your video for use immediately or in the future. */
		ingest?: Videostatus_ingest;
	}
	export interface VideostatusFormProperties {
	}
	export function CreateVideostatusFormGroup() {
		return new FormGroup<VideostatusFormProperties>({
		});

	}

	export interface Videostatus_encoding {
		metadata?: Videostatus_encoding_metadata;

		/** Whether the video is playable or not. */
		playable?: boolean | null;

		/** Available qualities the video can be viewed in. */
		qualities?: Array<Quality>;
	}
	export interface Videostatus_encodingFormProperties {

		/** Whether the video is playable or not. */
		playable: FormControl<boolean | null | undefined>,
	}
	export function CreateVideostatus_encodingFormGroup() {
		return new FormGroup<Videostatus_encodingFormProperties>({
			playable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Videostatus_encoding_metadata {
		aspectRatio?: string | null;

		/** The method used to compress and decompress digital audio for your video. */
		audioCodec?: string | null;

		/** The number of bits processed per second. */
		bitrate?: number | null;

		/** The length of the video. */
		duration?: number | null;

		/** The frequency with which consecutive images or frames appear on a display. Shown in this API as frames per second (fps). */
		framerate?: number | null;

		/** The height of the video in pixels. */
		height?: number | null;

		/** How many samples per second a digital audio system uses to record an audio signal. The higher the rate, the higher the frequencies that can be recorded. They are presented in this API using hertz. */
		samplerate?: number | null;

		/** The method used to compress and decompress digital video. API Video supports all codecs in the libavcodec library. */
		videoCodec?: string | null;

		/** The width of the video in pixels. */
		width?: number | null;
	}
	export interface Videostatus_encoding_metadataFormProperties {
		aspectRatio: FormControl<string | null | undefined>,

		/** The method used to compress and decompress digital audio for your video. */
		audioCodec: FormControl<string | null | undefined>,

		/** The number of bits processed per second. */
		bitrate: FormControl<number | null | undefined>,

		/** The length of the video. */
		duration: FormControl<number | null | undefined>,

		/** The frequency with which consecutive images or frames appear on a display. Shown in this API as frames per second (fps). */
		framerate: FormControl<number | null | undefined>,

		/** The height of the video in pixels. */
		height: FormControl<number | null | undefined>,

		/** How many samples per second a digital audio system uses to record an audio signal. The higher the rate, the higher the frequencies that can be recorded. They are presented in this API using hertz. */
		samplerate: FormControl<number | null | undefined>,

		/** The method used to compress and decompress digital video. API Video supports all codecs in the libavcodec library. */
		videoCodec: FormControl<string | null | undefined>,

		/** The width of the video in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateVideostatus_encoding_metadataFormGroup() {
		return new FormGroup<Videostatus_encoding_metadataFormProperties>({
			aspectRatio: new FormControl<string | null | undefined>(undefined),
			audioCodec: new FormControl<string | null | undefined>(undefined),
			bitrate: new FormControl<number | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			framerate: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			samplerate: new FormControl<number | null | undefined>(undefined),
			videoCodec: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about the capturing, transferring, and storing of your video for use immediately or in the future. */
	export interface Videostatus_ingest {

		/** The size of your file in bytes. */
		filesize?: number | null;

		/** The total number of bytes received, listed for each chunk of the upload. */
		receivedBytes?: Array<Bytes_range>;

		/** There are three possible ingest statuses. missing - you are missing information required to ingest the video. uploading - the video is in the process of being uploaded. uploaded - the video is ready for use. */
		status?: Videostatus_ingestStatus | null;
	}

	/** Details about the capturing, transferring, and storing of your video for use immediately or in the future. */
	export interface Videostatus_ingestFormProperties {

		/** The size of your file in bytes. */
		filesize: FormControl<number | null | undefined>,

		/** There are three possible ingest statuses. missing - you are missing information required to ingest the video. uploading - the video is in the process of being uploaded. uploaded - the video is ready for use. */
		status: FormControl<Videostatus_ingestStatus | null | undefined>,
	}
	export function CreateVideostatus_ingestFormGroup() {
		return new FormGroup<Videostatus_ingestFormProperties>({
			filesize: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Videostatus_ingestStatus | null | undefined>(undefined),
		});

	}

	export enum Videostatus_ingestStatus { missing = 'missing', uploading = 'uploading', uploaded = 'uploaded' }

	export interface Webhook {

		/** When an webhook was created, presented in ISO-8601 format. */
		createdAt?: Date | null;

		/** A list of events that will trigger the webhook. */
		events?: Array<string>;

		/** URL of the webhook */
		url?: string | null;

		/** Unique identifier of the webhook */
		webhookId?: string | null;
	}
	export interface WebhookFormProperties {

		/** When an webhook was created, presented in ISO-8601 format. */
		createdAt: FormControl<Date | null | undefined>,

		/** URL of the webhook */
		url: FormControl<string | null | undefined>,

		/** Unique identifier of the webhook */
		webhookId: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			webhookId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhooks_create_payload {

		/**
		 * A list of the webhooks that you are subscribing to. There are Currently four webhook options:
		 * * ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed.
		 * * ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.
		 * * ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true.
		 * * ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.
		 * Required
		 */
		events: Array<string>;

		/**
		 * The the url to which HTTP notifications are sent. It could be any http or https URL.
		 * Required
		 */
		url: string;
	}
	export interface Webhooks_create_payloadFormProperties {

		/**
		 * The the url to which HTTP notifications are sent. It could be any http or https URL.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhooks_create_payloadFormGroup() {
		return new FormGroup<Webhooks_create_payloadFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Webhooks_list_response {
		data?: Array<Webhook>;
		pagination?: Pagination;
	}
	export interface Webhooks_list_responseFormProperties {
	}
	export function CreateWebhooks_list_responseFormGroup() {
		return new FormGroup<Webhooks_list_responseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Show account
		 * Deprecated. Authenticate and get a token, then you can use the bearer token here to retrieve details about your account.
		 * Get account
		 * @return {Account} Success
		 */
		GET_account(): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account', {});
		}

		/**
		 * List live stream player sessions
		 * Get analytics/live-streams/{liveStreamId}
		 * @param {string} liveStreamId The unique identifier for the live stream you want to retrieve analytics for.
		 * @param {string} period Period must have one of the following formats: 
		 * - For a day : "2018-01-01",
		 * - For a week: "2018-W01", 
		 * - For a month: "2018-01"
		 * - For a year: "2018"
		 * For a range period: 
		 * -  Date range: "2018-01-01/2018-01-15"
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Raw_statistics_list_live_stream_analytics_response} Success
		 */
		GET_analytics_live_streams_liveStreamId(liveStreamId: string, period: string | null | undefined, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Raw_statistics_list_live_stream_analytics_response> {
			return this.http.get<Raw_statistics_list_live_stream_analytics_response>(this.baseUri + 'analytics/live-streams/' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&period=' + (period == null ? '' : encodeURIComponent(period)) + '&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * List player session events
		 * Useful to track and measure video's engagement.
		 * Get analytics/sessions/{sessionId}/events
		 * @param {string} sessionId A unique identifier you can use to reference and track a session with.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Raw_statistics_list_player_session_events_response} Success
		 */
		GET_analytics_sessions_sessionId_events(sessionId: string, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Raw_statistics_list_player_session_events_response> {
			return this.http.get<Raw_statistics_list_player_session_events_response>(this.baseUri + 'analytics/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/events&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * List video player sessions
		 * Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).
		 * Get analytics/videos/{videoId}
		 * @param {string} videoId The unique identifier for the video you want to retrieve session information for.
		 * @param {string} period Period must have one of the following formats: 
		 * - For a day : 2018-01-01,
		 * - For a week: 2018-W01, 
		 * - For a month: 2018-01
		 * - For a year: 2018
		 * For a range period: 
		 * -  Date range: 2018-01-01/2018-01-15
		 * @param {Array<string>} metadata Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Raw_statistics_list_sessions_response} Success
		 */
		GET_analytics_videos_videoId(videoId: string, period: string | null | undefined, metadata: Array<string> | null | undefined, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Raw_statistics_list_sessions_response> {
			return this.http.get<Raw_statistics_list_sessions_response>(this.baseUri + 'analytics/videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '&period=' + (period == null ? '' : encodeURIComponent(period)) + '&' + metadata?.map(z => `metadata=${encodeURIComponent(z)}`).join('&') + '&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Authenticate
		 * To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication.
		 * All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)
		 * Post auth/api-key
		 * @return {Access_token} Success
		 */
		POST_auth_api_key(requestBody: Authenticate_payload): Observable<Access_token> {
			return this.http.post<Access_token>(this.baseUri + 'auth/api-key', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refresh token
		 * Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token.
		 * Post auth/refresh
		 * @return {Access_token} Success
		 */
		POST_auth_refresh(requestBody: Refresh_token_payload): Observable<Access_token> {
			return this.http.post<Access_token>(this.baseUri + 'auth/refresh', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all live streams
		 * With no parameters added to the url, this will return all livestreams. Query by name or key to limit the list.
		 * Get live-streams
		 * @param {string} streamKey The unique stream key that allows you to stream videos.
		 * @param {string} name You can filter live streams by their name or a part of their name.
		 * @param {string} sortBy Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format.
		 * @param {GET_live_streamsSortOrder} sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Live_stream_list_response} Success
		 */
		GET_live_streams(streamKey: string | null | undefined, name: string | null | undefined, sortBy: string | null | undefined, sortOrder: GET_live_streamsSortOrder | null | undefined, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Live_stream_list_response> {
			return this.http.get<Live_stream_list_response>(this.baseUri + 'live-streams?streamKey=' + (streamKey == null ? '' : encodeURIComponent(streamKey)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortOrder=' + sortOrder + '&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Create live stream
		 * A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer. See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey}
		 * Tutorials that [create live streams](https://api.video/blog/endpoints/live-create).
		 * Post live-streams
		 * @return {Live_stream} Success
		 */
		POST_live_streams(requestBody: Live_stream_create_payload): Observable<Live_stream> {
			return this.http.post<Live_stream>(this.baseUri + 'live-streams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a live stream
		 * Delete live-streams/{liveStreamId}
		 * @param {string} liveStreamId The unique ID for the live stream that you want to remove.
		 * @return {void} 
		 */
		DELETE_live_streams_liveStreamId(liveStreamId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'live-streams/' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show live stream
		 * Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream. Tutorials that use the [show livestream endpoint](https://api.video/blog/endpoints/live-stream-status).
		 * Get live-streams/{liveStreamId}
		 * @param {string} liveStreamId The unique ID for the live stream you want to watch.
		 * @return {Live_stream} Success
		 */
		GET_live_streams_liveStreamId(liveStreamId: string): Observable<Live_stream> {
			return this.http.get<Live_stream>(this.baseUri + 'live-streams/' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)), {});
		}

		/**
		 * Update a live stream
		 * Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.
		 * Patch live-streams/{liveStreamId}
		 * @param {string} liveStreamId The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.
		 * @return {Live_stream} Success
		 */
		PATCH_live_streams_liveStreamId(liveStreamId: string, requestBody: Live_stream_update_payload): Observable<Live_stream> {
			return this.http.patch<Live_stream>(this.baseUri + 'live-streams/' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a thumbnail
		 * Send the unique identifier for a live stream to delete it from the system.
		 * Delete live-streams/{liveStreamId}/thumbnail
		 * @param {string} liveStreamId The unique identifier for the live stream you want to delete. 
		 * @return {Live_stream} Success
		 */
		DELETE_live_streams_liveStreamId_thumbnail(liveStreamId: string): Observable<Live_stream> {
			return this.http.delete<Live_stream>(this.baseUri + 'live-streams/' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '/thumbnail', {});
		}

		/**
		 * List all players
		 * Retrieve a list of all the players you created, as well as details about each one.
		 * Tutorials that use the [player endpoint](https://api.video/blog/endpoints/player).
		 * Get players
		 * @param {GET_playersSortBy} sortBy createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
		 * @param {GET_live_streamsSortOrder} sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Players_list_response} Success
		 */
		GET_players(sortBy: GET_playersSortBy | null | undefined, sortOrder: GET_live_streamsSortOrder | null | undefined, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Players_list_response> {
			return this.http.get<Players_list_response>(this.baseUri + 'players?sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Create a player
		 * Create a player for your video, and customise it.
		 * Post players
		 * @return {void} 
		 */
		POST_players(requestBody: PlayerCreationPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'players', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a player
		 * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
		 * Delete players/{playerId}
		 * @param {string} playerId The unique identifier for the player you want to delete.
		 * @return {void} 
		 */
		DELETE_players_playerId(playerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show a player
		 * Use a player ID to retrieve details about the player and display it for viewers.
		 * Get players/{playerId}
		 * @param {string} playerId The unique identifier for the player you want to retrieve. 
		 * @return {Player} Success
		 */
		GET_players_playerId(playerId: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)), {});
		}

		/**
		 * Update a player
		 * Use a player ID to update specific details for a player. NOTE: It may take up to 10 min before the new player configuration is available from our CDN.
		 * Patch players/{playerId}
		 * @param {string} playerId The unique identifier for the player.
		 * @return {Player} Success
		 */
		PATCH_players_playerId(playerId: string, requestBody: PlayerUpdatePayload): Observable<Player> {
			return this.http.patch<Player>(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete logo
		 * Delete players/{playerId}/logo
		 * @param {string} playerId The unique identifier for the player.
		 * @return {void} 
		 */
		DELETE_players_playerId_logo(playerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/logo', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all active upload tokens.
		 * A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens.
		 * Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
		 * Get upload-tokens
		 * @param {GET_upload_tokensSortBy} sortBy Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.
		 * @param {GET_live_streamsSortOrder} sortOrder Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Token_list_response} Success
		 */
		GET_upload_tokens(sortBy: GET_upload_tokensSortBy | null | undefined, sortOrder: GET_live_streamsSortOrder | null | undefined, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Token_list_response> {
			return this.http.get<Token_list_response>(this.baseUri + 'upload-tokens?sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Generate an upload token
		 * Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
		 * Post upload-tokens
		 * @return {Upload_token} Success
		 */
		POST_upload_tokens(requestBody: Token_create_payload): Observable<Upload_token> {
			return this.http.post<Upload_token>(this.baseUri + 'upload-tokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an upload token
		 * Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.
		 * Delete upload-tokens/{uploadToken}
		 * @param {string} uploadToken The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.
		 * @return {void} 
		 */
		DELETE_upload_tokens_uploadToken(uploadToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'upload-tokens/' + (uploadToken == null ? '' : encodeURIComponent(uploadToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show upload token
		 * You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.
		 * Get upload-tokens/{uploadToken}
		 * @param {string} uploadToken The unique identifier for the token you want information about.
		 * @return {Upload_token} Success
		 */
		GET_upload_tokens_uploadToken(uploadToken: string): Observable<Upload_token> {
			return this.http.get<Upload_token>(this.baseUri + 'upload-tokens/' + (uploadToken == null ? '' : encodeURIComponent(uploadToken)), {});
		}

		/**
		 * List all videos
		 * Requests to this endpoint return a list of your videos (with all their details). With no parameters added to this query, the API returns all videos. You can filter what videos the API returns using the parameters described below.  We have [several tutorials](https://api.video/blog/endpoints/video-list) that demonstrate this endpoint.
		 * Get videos
		 * @param {string} title The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
		 * @param {Array<string>} tags A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
		 * @param {Array<string>} metadata Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.
		 * @param {string} description If you described a video with a term or sentence, you can add it here to return videos containing this string.
		 * @param {string} liveStreamId If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here.
		 * @param {string} sortBy Allowed: publishedAt, title. You can search by the time videos were published at, or by title.
		 * @param {string} sortOrder Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Videos_list_response} Success
		 */
		LIST_videos(title: string | null | undefined, tags: Array<string> | null | undefined, metadata: Array<string> | null | undefined, description: string | null | undefined, liveStreamId: string | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Videos_list_response> {
			return this.http.get<Videos_list_response>(this.baseUri + 'videos?title=' + (title == null ? '' : encodeURIComponent(title)) + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&' + metadata?.map(z => `metadata=${encodeURIComponent(z)}`).join('&') + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Create a video
		 * To create a video, you create its container&parameters first, before adding the video file (exception - when using an existing HTTP source).
		 * * Videos are public by default. [Learn about Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
		 * * Up to 6 responsive video streams will be created (from 240p to 4k)
		 * * Mp4 encoded versions are created at the highest quality (max 1080p) by default.
		 * * Panoramic videos are for videos recorded in 360 degrees.  You can toggle this after your 360 video upload.
		 * * Searchable parameters: title, description, tags and metadata
		 * ```shell
		 * $ curl https://ws.api.video/videos \ -H 'Authorization: Bearer {access_token} \ -d '{"title":"My video",
		 * "description":"so many details",
		 * "mp4Support":true
		 * }'
		 * ```
		 * ## add an URL to upload on creation
		 * You can also create a video directly from a video hosted on a third-party server by giving its URI in `source` parameter:
		 * ```shell
		 * $ curl https://ws.api.video/videos \
		 * -H 'Authorization: Bearer {access_token} \
		 * -d '{"source":"http://uri/to/video.mp4", "title":"My video"}'
		 * ```
		 * In this case, the service will respond `202 Accepted` and ingest the video asynchronously.
		 * ## Track users with Dynamic Metadata
		 * Metadata values can be a key:value where the values are predefined, but Dynamic metadata allows you to enter *any* value for a defined key.  To defined a dynamic metadata pair use:
		 * ``` "metadata":[{"dynamicKey": "__dynamicKey__"}] ```
		 * The double underscore on both sides of the value allows any variable to be added for a given video session. Added the the url you might have:
		 * ``` <iframe type="text/html" src="https://embed.api.video/vod/vi6QvU9dhYCzW3BpPvPsZUa8?metadata[classUserName]=Doug" width="960" height="320" frameborder="0" scrollling="no"></iframe> ```
		 * This video session will be tagged as watched by Doug - allowing for in-depth analysis on how each viewer interacts with the videos.
		 * ### We have tutorials on:
		 * * [Creating and uploading videos](https://api.video/blog/tutorials/video-upload-tutorial)
		 * * [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos)
		 * * [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices)
		 * * [Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
		 * * [Using Dynamic Metadata](https://api.video/blog/tutorials/dynamic-metadata)
		 * * Full list of [tutorials](https://api.video/blog/endpoints/video-create) that demonstrate this endpoint.
		 * Post videos
		 * @param {Video_create_payload} requestBody video to create
		 * @return {void} 
		 */
		POST_video(requestBody: Video_create_payload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a video
		 * If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. Tutorials using [video deletion](https://api.video/blog/endpoints/video-delete).
		 * Delete videos/{videoId}
		 * @param {string} videoId The video ID for the video you want to delete.
		 * @return {void} 
		 */
		DELETE_video(videoId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show a video
		 * This call provides the same JSON information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL. Tutorials using [video GET](https://api.video/blog/endpoints/video-get).
		 * Get videos/{videoId}
		 * @param {string} videoId The unique identifier for the video you want details about.
		 * @return {Video} Success
		 */
		GET_video(videoId: string): Observable<Video> {
			return this.http.get<Video>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)), {});
		}

		/**
		 * Update a video
		 * Use this endpoint to update the parameters associated with your video. The video you are updating is determined by the video ID you provide in the path. For each parameter you want to update, include the update in the request body. NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it. Tutorials using [video update](https://api.video/blog/endpoints/video-update).
		 * Patch videos/{videoId}
		 * @param {string} videoId The video ID for the video you want to delete.
		 * @return {Video} Success
		 */
		PATCH_video(videoId: string, requestBody: Video_update_payload): Observable<Video> {
			return this.http.patch<Video>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List video captions
		 * Retrieve a list of available captions for the videoId you provide.
		 * Get videos/{videoId}/captions
		 * @param {string} videoId The unique identifier for the video you want to retrieve a list of captions for.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Captions_list_response} Success
		 */
		GET_videos_videoId_captions(videoId: string, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Captions_list_response> {
			return this.http.get<Captions_list_response>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/captions&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Delete a caption
		 * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
		 * Delete videos/{videoId}/captions/{language}
		 * @param {string} videoId The unique identifier for the video you want to delete a caption from.
		 * @param {string} language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
		 * @return {void} 
		 */
		DELETE_videos_videoId_captions_language(videoId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/captions/' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show a caption
		 * Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found.
		 * Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).
		 * Get videos/{videoId}/captions/{language}
		 * @param {string} videoId The unique identifier for the video you want captions for.
		 * @param {string} language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation
		 * @return {Subtitle} Success
		 */
		GET_videos_videoId_captions_language(videoId: string, language: string): Observable<Subtitle> {
			return this.http.get<Subtitle>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/captions/' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Update caption
		 * To have the captions on automatically, use this PATCH to set default: true.
		 * Patch videos/{videoId}/captions/{language}
		 * @param {string} videoId The unique identifier for the video you want to have automatic captions for. 
		 * @param {string} language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
		 * @return {Subtitle} Success
		 */
		PATCH_videos_videoId_captions_language(videoId: string, language: string, requestBody: Captions_update_payload): Observable<Subtitle> {
			return this.http.patch<Subtitle>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/captions/' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List video chapters
		 * Retrieve a list of all chapters for a specified video.
		 * Get videos/{videoId}/chapters
		 * @param {string} videoId The unique identifier for the video you want to retrieve a list of chapters for.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Chapters_list_response} Success
		 */
		GET_videos_videoId_chapters(videoId: string, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Chapters_list_response> {
			return this.http.get<Chapters_list_response>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/chapters&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Delete a chapter
		 * Delete videos/{videoId}/chapters/{language}
		 * @param {string} videoId The unique identifier for the video you want to delete a chapter from. 
		 * @param {string} language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
		 * @return {void} 
		 */
		DELETE_videos_videoId_chapters_language(videoId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/chapters/' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show a chapter
		 * Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).
		 * Get videos/{videoId}/chapters/{language}
		 * @param {string} videoId The unique identifier for the video you want to show a chapter for.
		 * @param {string} language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
		 * @return {Chapter} Success
		 */
		GET_videos_videoId_chapters_language(videoId: string, language: string): Observable<Chapter> {
			return this.http.get<Chapter>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/chapters/' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Show video status
		 * This API provides upload status & encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities. Tutorials using [video status](https://api.video/blog/endpoints/video-status).
		 * Get videos/{videoId}/status
		 * @param {string} videoId The unique identifier for the video you want the status for.
		 * @return {Videostatus} Success
		 */
		GET_video_status(videoId: string): Observable<Videostatus> {
			return this.http.get<Videostatus>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/status', {});
		}

		/**
		 * Pick a thumbnail
		 * Pick a thumbnail from the given time code. If you'd like to upload an image for your thumbnail, use the [Upload a Thumbnail](https://docs.api.video/reference#post_videos-videoid-thumbnail) endpoint. There may be a short delay for the thumbnail to update.
		 * Tutorials using [Thumbnail picking](https://api.video/blog/endpoints/video-pick-a-thumbnail).
		 * Patch videos/{videoId}/thumbnail
		 * @param {string} videoId Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
		 * @return {Video} Success
		 */
		PATCH_videos_videoId_thumbnail(videoId: string, requestBody: Video_thumbnail_pick_payload): Observable<Video> {
			return this.http.patch<Video>(this.baseUri + 'videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/thumbnail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all webhooks
		 * Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.
		 * Get webhooks
		 * @param {string} events The webhook event that you wish to filter on.
		 * @param {number} currentPage Choose the number of search results to return per page. Minimum value: 1
		 * @param {number} pageSize Results per page. Allowed values 1-100, default is 25.
		 * @return {Webhooks_list_response} Success
		 */
		LIST_webhooks(events: string | null | undefined, currentPage: number | null | undefined, pageSize: number | null | undefined): Observable<Webhooks_list_response> {
			return this.http.get<Webhooks_list_response>(this.baseUri + 'webhooks?events=' + (events == null ? '' : encodeURIComponent(events)) + '&currentPage=' + currentPage + '&pageSize=' + pageSize, {});
		}

		/**
		 * Create Webhook
		 * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events:
		 * * ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed.
		 * * ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.
		 * * ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true.
		 * * ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.
		 * Post webhooks
		 * @return {void} 
		 */
		POST_webhooks(requestBody: Webhooks_create_payload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Webhook
		 * This endpoint will delete the indicated webhook.
		 * Delete webhooks/{webhookId}
		 * @param {string} webhookId The webhook you wish to delete.
		 * @return {void} 
		 */
		DELETE_webhook(webhookId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show Webhook details
		 * This call provides the same JSON information provided on Webjhook creation.
		 * Get webhooks/{webhookId}
		 * @param {string} webhookId The unique webhook you wish to retreive details on.
		 * @return {Webhook} Success
		 */
		GET_Webhook(webhookId: string): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), {});
		}
	}

	export enum GET_live_streamsSortOrder { asc = 'asc', desc = 'desc' }

	export enum GET_playersSortBy { createdAt = 'createdAt', updatedAt = 'updatedAt' }

	export enum GET_upload_tokensSortBy { createdAt = 'createdAt', ttl = 'ttl' }

}

