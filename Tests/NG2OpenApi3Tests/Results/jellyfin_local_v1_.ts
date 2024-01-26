import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An entity representing a user's access schedule. */
	export interface AccessSchedule {

		/**
		 * An enum that represents a day of the week, weekdays, weekends, or all days.
		 * Required
		 */
		DayOfWeek: AccessScheduleDayOfWeek;

		/**
		 * Gets or sets the end hour.
		 * Required
		 */
		EndHour: number;

		/**
		 * Gets or sets the id of this instance.
		 * Required
		 */
		Id: number;

		/**
		 * Gets or sets the start hour.
		 * Required
		 */
		StartHour: number;

		/**
		 * Gets or sets the id of the associated user.
		 * Required
		 */
		UserId: string;
	}

	/** An entity representing a user's access schedule. */
	export interface AccessScheduleFormProperties {

		/**
		 * An enum that represents a day of the week, weekdays, weekends, or all days.
		 * Required
		 */
		DayOfWeek: FormControl<AccessScheduleDayOfWeek | null | undefined>,

		/**
		 * Gets or sets the end hour.
		 * Required
		 */
		EndHour: FormControl<number | null | undefined>,

		/**
		 * Gets or sets the id of this instance.
		 * Required
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Gets or sets the start hour.
		 * Required
		 */
		StartHour: FormControl<number | null | undefined>,

		/**
		 * Gets or sets the id of the associated user.
		 * Required
		 */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateAccessScheduleFormGroup() {
		return new FormGroup<AccessScheduleFormProperties>({
			DayOfWeek: new FormControl<AccessScheduleDayOfWeek | null | undefined>(undefined, [Validators.required]),
			EndHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StartHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccessScheduleDayOfWeek { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Everyday = 7, Weekday = 8, Weekend = 9 }

	export interface ActivityLogEntry {

		/** Gets or sets the date. */
		Date?: Date | null;

		/** Gets or sets the identifier. */
		Id?: number | null;

		/** Gets or sets the item identifier. */
		ItemId?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the overview. */
		Overview?: string | null;
		Severity?: ActivityLogEntrySeverity | null;

		/** Gets or sets the short overview. */
		ShortOverview?: string | null;

		/** Gets or sets the type. */
		Type?: string | null;

		/** Gets or sets the user identifier. */
		UserId?: string | null;

		/** Gets or sets the user primary image tag. */
		UserPrimaryImageTag?: string | null;
	}
	export interface ActivityLogEntryFormProperties {

		/** Gets or sets the date. */
		Date: FormControl<Date | null | undefined>,

		/** Gets or sets the identifier. */
		Id: FormControl<number | null | undefined>,

		/** Gets or sets the item identifier. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the overview. */
		Overview: FormControl<string | null | undefined>,
		Severity: FormControl<ActivityLogEntrySeverity | null | undefined>,

		/** Gets or sets the short overview. */
		ShortOverview: FormControl<string | null | undefined>,

		/** Gets or sets the type. */
		Type: FormControl<string | null | undefined>,

		/** Gets or sets the user identifier. */
		UserId: FormControl<string | null | undefined>,

		/** Gets or sets the user primary image tag. */
		UserPrimaryImageTag: FormControl<string | null | undefined>,
	}
	export function CreateActivityLogEntryFormGroup() {
		return new FormGroup<ActivityLogEntryFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Overview: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<ActivityLogEntrySeverity | null | undefined>(undefined),
			ShortOverview: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			UserPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityLogEntrySeverity { Trace = 0, Debug = 1, Information = 2, Warning = 3, Error = 4, Critical = 5, None = 6 }

	export interface ActivityLogEntryQueryResult {

		/** Gets or sets the items. */
		Items?: Array<ActivityLogEntry>;

		/** The index of the first record in Items. */
		StartIndex?: number | null;

		/** The total number of records available. */
		TotalRecordCount?: number | null;
	}
	export interface ActivityLogEntryQueryResultFormProperties {

		/** The index of the first record in Items. */
		StartIndex: FormControl<number | null | undefined>,

		/** The total number of records available. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateActivityLogEntryQueryResultFormGroup() {
		return new FormGroup<ActivityLogEntryQueryResultFormProperties>({
			StartIndex: new FormControl<number | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Add virtual folder dto. */
	export interface AddVirtualFolderDto {
		LibraryOptions?: LibraryOptions;
	}

	/** Add virtual folder dto. */
	export interface AddVirtualFolderDtoFormProperties {
	}
	export function CreateAddVirtualFolderDtoFormGroup() {
		return new FormGroup<AddVirtualFolderDtoFormProperties>({
		});

	}

	export interface LibraryOptions {
		AutomaticRefreshIntervalDays?: number | null;
		DisabledLocalMetadataReaders?: Array<string>;
		DisabledSubtitleFetchers?: Array<string>;
		EnableAutomaticSeriesGrouping?: boolean | null;
		EnableChapterImageExtraction?: boolean | null;
		EnableEmbeddedEpisodeInfos?: boolean | null;
		EnableEmbeddedTitles?: boolean | null;
		EnableInternetProviders?: boolean | null;
		EnablePhotos?: boolean | null;
		EnableRealtimeMonitor?: boolean | null;
		ExtractChapterImagesDuringLibraryScan?: boolean | null;
		LocalMetadataReaderOrder?: Array<string>;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;
		MetadataSavers?: Array<string>;
		PathInfos?: Array<MediaPathInfo>;

		/** Gets or sets the preferred metadata language. */
		PreferredMetadataLanguage?: string | null;
		RequirePerfectSubtitleMatch?: boolean | null;
		SaveLocalMetadata?: boolean | null;
		SaveSubtitlesWithMedia?: boolean | null;
		SeasonZeroDisplayName?: string | null;
		SkipSubtitlesIfAudioTrackMatches?: boolean | null;
		SkipSubtitlesIfEmbeddedSubtitlesPresent?: boolean | null;
		SubtitleDownloadLanguages?: Array<string>;
		SubtitleFetcherOrder?: Array<string>;
		TypeOptions?: Array<TypeOptions>;
	}
	export interface LibraryOptionsFormProperties {
		AutomaticRefreshIntervalDays: FormControl<number | null | undefined>,
		EnableAutomaticSeriesGrouping: FormControl<boolean | null | undefined>,
		EnableChapterImageExtraction: FormControl<boolean | null | undefined>,
		EnableEmbeddedEpisodeInfos: FormControl<boolean | null | undefined>,
		EnableEmbeddedTitles: FormControl<boolean | null | undefined>,
		EnableInternetProviders: FormControl<boolean | null | undefined>,
		EnablePhotos: FormControl<boolean | null | undefined>,
		EnableRealtimeMonitor: FormControl<boolean | null | undefined>,
		ExtractChapterImagesDuringLibraryScan: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the preferred metadata language. */
		PreferredMetadataLanguage: FormControl<string | null | undefined>,
		RequirePerfectSubtitleMatch: FormControl<boolean | null | undefined>,
		SaveLocalMetadata: FormControl<boolean | null | undefined>,
		SaveSubtitlesWithMedia: FormControl<boolean | null | undefined>,
		SeasonZeroDisplayName: FormControl<string | null | undefined>,
		SkipSubtitlesIfAudioTrackMatches: FormControl<boolean | null | undefined>,
		SkipSubtitlesIfEmbeddedSubtitlesPresent: FormControl<boolean | null | undefined>,
	}
	export function CreateLibraryOptionsFormGroup() {
		return new FormGroup<LibraryOptionsFormProperties>({
			AutomaticRefreshIntervalDays: new FormControl<number | null | undefined>(undefined),
			EnableAutomaticSeriesGrouping: new FormControl<boolean | null | undefined>(undefined),
			EnableChapterImageExtraction: new FormControl<boolean | null | undefined>(undefined),
			EnableEmbeddedEpisodeInfos: new FormControl<boolean | null | undefined>(undefined),
			EnableEmbeddedTitles: new FormControl<boolean | null | undefined>(undefined),
			EnableInternetProviders: new FormControl<boolean | null | undefined>(undefined),
			EnablePhotos: new FormControl<boolean | null | undefined>(undefined),
			EnableRealtimeMonitor: new FormControl<boolean | null | undefined>(undefined),
			ExtractChapterImagesDuringLibraryScan: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			PreferredMetadataLanguage: new FormControl<string | null | undefined>(undefined),
			RequirePerfectSubtitleMatch: new FormControl<boolean | null | undefined>(undefined),
			SaveLocalMetadata: new FormControl<boolean | null | undefined>(undefined),
			SaveSubtitlesWithMedia: new FormControl<boolean | null | undefined>(undefined),
			SeasonZeroDisplayName: new FormControl<string | null | undefined>(undefined),
			SkipSubtitlesIfAudioTrackMatches: new FormControl<boolean | null | undefined>(undefined),
			SkipSubtitlesIfEmbeddedSubtitlesPresent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MediaPathInfo {
		NetworkPath?: string | null;
		Path?: string | null;
	}
	export interface MediaPathInfoFormProperties {
		NetworkPath: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateMediaPathInfoFormGroup() {
		return new FormGroup<MediaPathInfoFormProperties>({
			NetworkPath: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TypeOptions {
		ImageFetcherOrder?: Array<string>;
		ImageFetchers?: Array<string>;
		ImageOptions?: Array<ImageOption>;
		MetadataFetcherOrder?: Array<string>;
		MetadataFetchers?: Array<string>;
		Type?: string | null;
	}
	export interface TypeOptionsFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateTypeOptionsFormGroup() {
		return new FormGroup<TypeOptionsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageOption {

		/** Gets or sets the limit. */
		Limit?: number | null;

		/** Gets or sets the minimum width. */
		MinWidth?: number | null;

		/** Enum ImageType. */
		Type?: ImageOptionType | null;
	}
	export interface ImageOptionFormProperties {

		/** Gets or sets the limit. */
		Limit: FormControl<number | null | undefined>,

		/** Gets or sets the minimum width. */
		MinWidth: FormControl<number | null | undefined>,

		/** Enum ImageType. */
		Type: FormControl<ImageOptionType | null | undefined>,
	}
	export function CreateImageOptionFormGroup() {
		return new FormGroup<ImageOptionFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			MinWidth: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<ImageOptionType | null | undefined>(undefined),
		});

	}

	export enum ImageOptionType { Primary = 0, Art = 1, Backdrop = 2, Banner = 3, Logo = 4, Thumb = 5, Disc = 6, Box = 7, Screenshot = 8, Menu = 9, Chapter = 10, BoxRear = 11, Profile = 12 }

	export interface AlbumInfo {

		/** Gets or sets the album artist. */
		AlbumArtists?: Array<string>;

		/** Gets or sets the artist provider ids. */
		ArtistProviderIds?: {[id: string]: string };
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };
		SongInfos?: Array<SongInfo>;

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface AlbumInfoFormProperties {

		/** Gets or sets the artist provider ids. */
		ArtistProviderIds: FormControl<{[id: string]: string } | null | undefined>,
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateAlbumInfoFormGroup() {
		return new FormGroup<AlbumInfoFormProperties>({
			ArtistProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SongInfo {
		Album?: string | null;
		AlbumArtists?: Array<string>;
		Artists?: Array<string>;
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface SongInfoFormProperties {
		Album: FormControl<string | null | undefined>,
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateSongInfoFormGroup() {
		return new FormGroup<SongInfoFormProperties>({
			Album: new FormControl<string | null | undefined>(undefined),
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AlbumInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: AlbumInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface AlbumInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateAlbumInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<AlbumInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllThemeMediaResult {

		/** Class ThemeMediaResult. */
		SoundtrackSongsResult?: ThemeMediaResult;

		/** Class ThemeMediaResult. */
		ThemeSongsResult?: ThemeMediaResult;

		/** Class ThemeMediaResult. */
		ThemeVideosResult?: ThemeMediaResult;
	}
	export interface AllThemeMediaResultFormProperties {
	}
	export function CreateAllThemeMediaResultFormGroup() {
		return new FormGroup<AllThemeMediaResultFormProperties>({
		});

	}


	/** Class ThemeMediaResult. */
	export interface ThemeMediaResult {

		/** Gets or sets the items. */
		Items?: Array<BaseItemDto>;

		/** Gets or sets the owner id. */
		OwnerId?: string | null;

		/** The index of the first record in Items. */
		StartIndex?: number | null;

		/** The total number of records available. */
		TotalRecordCount?: number | null;
	}

	/** Class ThemeMediaResult. */
	export interface ThemeMediaResultFormProperties {

		/** Gets or sets the owner id. */
		OwnerId: FormControl<string | null | undefined>,

		/** The index of the first record in Items. */
		StartIndex: FormControl<number | null | undefined>,

		/** The total number of records available. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateThemeMediaResultFormGroup() {
		return new FormGroup<ThemeMediaResultFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			StartIndex: new FormControl<number | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * This is strictly used as a data transfer object from the api layer.
	 * This holds information about a BaseItem in a format that is convenient for the client.
	 */
	export interface BaseItemDto {

		/** Gets or sets the air days. */
		AirDays?: Array<DayOfWeek>;

		/** Gets or sets the air time. */
		AirTime?: string | null;
		AirsAfterSeasonNumber?: number | null;
		AirsBeforeEpisodeNumber?: number | null;
		AirsBeforeSeasonNumber?: number | null;

		/** Gets or sets the album. */
		Album?: string | null;

		/** Gets or sets the album artist. */
		AlbumArtist?: string | null;

		/** Gets or sets the album artists. */
		AlbumArtists?: Array<NameGuidPair>;

		/** Gets or sets the album count. */
		AlbumCount?: number | null;

		/** Gets or sets the album id. */
		AlbumId?: string | null;

		/** Gets or sets the album image tag. */
		AlbumPrimaryImageTag?: string | null;
		Altitude?: number | null;
		Aperture?: number | null;
		ArtistCount?: number | null;

		/** Gets or sets the artist items. */
		ArtistItems?: Array<NameGuidPair>;

		/** Gets or sets the artists. */
		Artists?: Array<string>;

		/** Gets or sets the aspect ratio. */
		AspectRatio?: string | null;
		Audio?: BaseItemDtoAudio | null;

		/** Gets or sets the backdrop image tags. */
		BackdropImageTags?: Array<string>;
		CameraMake?: string | null;
		CameraModel?: string | null;
		CanDelete?: boolean | null;
		CanDownload?: boolean | null;

		/** Gets or sets the channel identifier. */
		ChannelId?: string | null;
		ChannelName?: string | null;
		ChannelNumber?: string | null;

		/** Gets or sets the channel primary image tag. */
		ChannelPrimaryImageTag?: string | null;

		/** Enum ChannelType. */
		ChannelType?: BaseItemDtoChannelType | null;

		/** Gets or sets the chapters. */
		Chapters?: Array<ChapterInfo>;

		/** Gets or sets the child count. */
		ChildCount?: number | null;

		/** Gets or sets the type of the collection. */
		CollectionType?: string | null;

		/** Gets or sets the community rating. */
		CommunityRating?: number | null;

		/** Gets or sets the completion percentage. */
		CompletionPercentage?: number | null;
		Container?: string | null;

		/** Gets or sets the critic rating. */
		CriticRating?: number | null;

		/** Gets or sets the cumulative run time ticks. */
		CumulativeRunTimeTicks?: number | null;

		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		CurrentProgram?: BaseItemDto;

		/** Gets or sets the custom rating. */
		CustomRating?: string | null;

		/** Gets or sets the date created. */
		DateCreated?: Date | null;
		DateLastMediaAdded?: Date | null;

		/** Gets or sets the display order. */
		DisplayOrder?: string | null;

		/** Gets or sets the display preferences id. */
		DisplayPreferencesId?: string | null;
		EnableMediaSourceDisplay?: boolean | null;

		/** Gets or sets the end date. */
		EndDate?: Date | null;

		/** Gets or sets the episode count. */
		EpisodeCount?: number | null;

		/** Gets or sets the episode title. */
		EpisodeTitle?: string | null;

		/** Gets or sets the etag. */
		Etag?: string | null;
		ExposureTime?: number | null;

		/** Gets or sets the external urls. */
		ExternalUrls?: Array<ExternalUrl>;
		ExtraType?: string | null;
		FocalLength?: number | null;
		ForcedSortName?: string | null;
		GenreItems?: Array<NameGuidPair>;

		/** Gets or sets the genres. */
		Genres?: Array<string>;
		HasSubtitles?: boolean | null;
		Height?: number | null;

		/** Gets or sets the id. */
		Id?: string | null;

		/**
		 * Gets or sets the blurhashes for the image tags.
		 * Maps image type to dictionary mapping image tag to blurhash value.
		 */
		ImageBlurHashes?: BaseItemDtoImageBlurHashes;
		ImageOrientation?: BaseItemDtoImageOrientation | null;

		/** Gets or sets the image tags. */
		ImageTags?: {[id: string]: string };

		/** Gets or sets the index number. */
		IndexNumber?: number | null;

		/** Gets or sets the index number end. */
		IndexNumberEnd?: number | null;

		/** Gets or sets a value indicating whether this instance is folder. */
		IsFolder?: boolean | null;

		/** Gets or sets a value indicating whether this instance is HD. */
		IsHD?: boolean | null;

		/** Gets or sets a value indicating whether this instance is kids. */
		IsKids?: boolean | null;

		/** Gets or sets a value indicating whether this instance is live. */
		IsLive?: boolean | null;

		/** Gets or sets a value indicating whether this instance is movie. */
		IsMovie?: boolean | null;

		/** Gets or sets a value indicating whether this instance is news. */
		IsNews?: boolean | null;

		/** Gets or sets a value indicating whether this instance is place holder. */
		IsPlaceHolder?: boolean | null;

		/** Gets or sets a value indicating whether this instance is premiere. */
		IsPremiere?: boolean | null;

		/** Gets or sets a value indicating whether this instance is repeat. */
		IsRepeat?: boolean | null;

		/** Gets or sets a value indicating whether this instance is series. */
		IsSeries?: boolean | null;

		/** Gets or sets a value indicating whether this instance is sports. */
		IsSports?: boolean | null;
		IsoSpeedRating?: number | null;

		/** Enum IsoType. */
		IsoType?: BaseItemDtoIsoType | null;
		Latitude?: number | null;

		/** Gets or sets the local trailer count. */
		LocalTrailerCount?: number | null;

		/** Enum LocationType. */
		LocationType?: BaseItemDtoLocationType | null;

		/** Gets or sets a value indicating whether [enable internet providers]. */
		LockData?: boolean | null;

		/** Gets or sets the locked fields. */
		LockedFields?: Array<MetadataField>;
		Longitude?: number | null;
		MediaSourceCount?: number | null;

		/** Gets or sets the media versions. */
		MediaSources?: Array<MediaSourceInfo>;

		/** Gets or sets the media streams. */
		MediaStreams?: Array<MediaStream>;

		/** Gets or sets the type of the media. */
		MediaType?: string | null;

		/** Gets or sets the movie count. */
		MovieCount?: number | null;

		/** Gets or sets the music video count. */
		MusicVideoCount?: number | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the number. */
		Number?: string | null;

		/** Gets or sets the official rating. */
		OfficialRating?: string | null;
		OriginalTitle?: string | null;

		/** Gets or sets the overview. */
		Overview?: string | null;

		/** Gets or sets the parent art image tag. */
		ParentArtImageTag?: string | null;

		/** If the item does not have a art, this will hold the Id of the Parent that has one. */
		ParentArtItemId?: string | null;

		/** Gets or sets the parent backdrop image tags. */
		ParentBackdropImageTags?: Array<string>;

		/** If the item does not have any backdrops, this will hold the Id of the Parent that has one. */
		ParentBackdropItemId?: string | null;

		/** Gets or sets the parent id. */
		ParentId?: string | null;

		/** Gets or sets the parent index number. */
		ParentIndexNumber?: number | null;

		/** Gets or sets the parent logo image tag. */
		ParentLogoImageTag?: string | null;

		/** If the item does not have a logo, this will hold the Id of the Parent that has one. */
		ParentLogoItemId?: string | null;

		/** Gets or sets the parent primary image item identifier. */
		ParentPrimaryImageItemId?: string | null;

		/** Gets or sets the parent primary image tag. */
		ParentPrimaryImageTag?: string | null;

		/** Gets or sets the parent thumb image tag. */
		ParentThumbImageTag?: string | null;

		/** Gets or sets the parent thumb item id. */
		ParentThumbItemId?: string | null;

		/** Gets or sets the part count. */
		PartCount?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;

		/** Gets or sets the people. */
		People?: Array<BaseItemPerson>;
		PlayAccess?: BaseItemDtoPlayAccess | null;

		/** Gets or sets the playlist item identifier. */
		PlaylistItemId?: string | null;
		PreferredMetadataCountryCode?: string | null;
		PreferredMetadataLanguage?: string | null;

		/** Gets or sets the premiere date. */
		PremiereDate?: Date | null;

		/** Gets or sets the primary image aspect ratio, after image enhancements. */
		PrimaryImageAspectRatio?: number | null;
		ProductionLocations?: Array<string>;

		/** Gets or sets the production year. */
		ProductionYear?: number | null;
		ProgramCount?: number | null;

		/** Gets or sets the program identifier. */
		ProgramId?: string | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the recursive item count. */
		RecursiveItemCount?: number | null;

		/** Gets or sets the trailer urls. */
		RemoteTrailers?: Array<MediaUrl>;

		/** Gets or sets the run time ticks. */
		RunTimeTicks?: number | null;

		/** Gets or sets the screenshot image tags. */
		ScreenshotImageTags?: Array<string>;

		/** Gets or sets the season identifier. */
		SeasonId?: string | null;

		/** Gets or sets the name of the season. */
		SeasonName?: string | null;

		/** Gets or sets the series count. */
		SeriesCount?: number | null;

		/** Gets or sets the series id. */
		SeriesId?: string | null;

		/** Gets or sets the name of the series. */
		SeriesName?: string | null;

		/** Gets or sets the series primary image tag. */
		SeriesPrimaryImageTag?: string | null;

		/** Gets or sets the series studio. */
		SeriesStudio?: string | null;

		/** Gets or sets the series thumb image tag. */
		SeriesThumbImageTag?: string | null;

		/** Gets or sets the series timer identifier. */
		SeriesTimerId?: string | null;

		/** Gets or sets the server identifier. */
		ServerId?: string | null;
		ShutterSpeed?: number | null;
		Software?: string | null;

		/** Gets or sets the song count. */
		SongCount?: number | null;

		/** Gets or sets the name of the sort. */
		SortName?: string | null;

		/** Gets or sets the type of the source. */
		SourceType?: string | null;

		/** Gets or sets the special feature count. */
		SpecialFeatureCount?: number | null;

		/** The start date of the recording, in UTC. */
		StartDate?: Date | null;

		/** Gets or sets the status. */
		Status?: string | null;

		/** Gets or sets the studios. */
		Studios?: Array<NameGuidPair>;

		/** Gets or sets a value indicating whether [supports synchronize]. */
		SupportsSync?: boolean | null;

		/** Gets or sets the taglines. */
		Taglines?: Array<string>;

		/** Gets or sets the tags. */
		Tags?: Array<string>;

		/** Gets or sets the timer identifier. */
		TimerId?: string | null;

		/** Gets or sets the trailer count. */
		TrailerCount?: number | null;

		/** Gets or sets the type. */
		Type?: string | null;

		/** Class UserItemDataDto. */
		UserData?: UserItemDataDto;
		Video3DFormat?: MediaSourceInfoVideo3DFormat | null;

		/** Enum VideoType. */
		VideoType?: MediaSourceInfoVideoType | null;
		Width?: number | null;
	}

	/**
	 * This is strictly used as a data transfer object from the api layer.
	 * This holds information about a BaseItem in a format that is convenient for the client.
	 */
	export interface BaseItemDtoFormProperties {

		/** Gets or sets the air time. */
		AirTime: FormControl<string | null | undefined>,
		AirsAfterSeasonNumber: FormControl<number | null | undefined>,
		AirsBeforeEpisodeNumber: FormControl<number | null | undefined>,
		AirsBeforeSeasonNumber: FormControl<number | null | undefined>,

		/** Gets or sets the album. */
		Album: FormControl<string | null | undefined>,

		/** Gets or sets the album artist. */
		AlbumArtist: FormControl<string | null | undefined>,

		/** Gets or sets the album count. */
		AlbumCount: FormControl<number | null | undefined>,

		/** Gets or sets the album id. */
		AlbumId: FormControl<string | null | undefined>,

		/** Gets or sets the album image tag. */
		AlbumPrimaryImageTag: FormControl<string | null | undefined>,
		Altitude: FormControl<number | null | undefined>,
		Aperture: FormControl<number | null | undefined>,
		ArtistCount: FormControl<number | null | undefined>,

		/** Gets or sets the aspect ratio. */
		AspectRatio: FormControl<string | null | undefined>,
		Audio: FormControl<BaseItemDtoAudio | null | undefined>,
		CameraMake: FormControl<string | null | undefined>,
		CameraModel: FormControl<string | null | undefined>,
		CanDelete: FormControl<boolean | null | undefined>,
		CanDownload: FormControl<boolean | null | undefined>,

		/** Gets or sets the channel identifier. */
		ChannelId: FormControl<string | null | undefined>,
		ChannelName: FormControl<string | null | undefined>,
		ChannelNumber: FormControl<string | null | undefined>,

		/** Gets or sets the channel primary image tag. */
		ChannelPrimaryImageTag: FormControl<string | null | undefined>,

		/** Enum ChannelType. */
		ChannelType: FormControl<BaseItemDtoChannelType | null | undefined>,

		/** Gets or sets the child count. */
		ChildCount: FormControl<number | null | undefined>,

		/** Gets or sets the type of the collection. */
		CollectionType: FormControl<string | null | undefined>,

		/** Gets or sets the community rating. */
		CommunityRating: FormControl<number | null | undefined>,

		/** Gets or sets the completion percentage. */
		CompletionPercentage: FormControl<number | null | undefined>,
		Container: FormControl<string | null | undefined>,

		/** Gets or sets the critic rating. */
		CriticRating: FormControl<number | null | undefined>,

		/** Gets or sets the cumulative run time ticks. */
		CumulativeRunTimeTicks: FormControl<number | null | undefined>,

		/** Gets or sets the custom rating. */
		CustomRating: FormControl<string | null | undefined>,

		/** Gets or sets the date created. */
		DateCreated: FormControl<Date | null | undefined>,
		DateLastMediaAdded: FormControl<Date | null | undefined>,

		/** Gets or sets the display order. */
		DisplayOrder: FormControl<string | null | undefined>,

		/** Gets or sets the display preferences id. */
		DisplayPreferencesId: FormControl<string | null | undefined>,
		EnableMediaSourceDisplay: FormControl<boolean | null | undefined>,

		/** Gets or sets the end date. */
		EndDate: FormControl<Date | null | undefined>,

		/** Gets or sets the episode count. */
		EpisodeCount: FormControl<number | null | undefined>,

		/** Gets or sets the episode title. */
		EpisodeTitle: FormControl<string | null | undefined>,

		/** Gets or sets the etag. */
		Etag: FormControl<string | null | undefined>,
		ExposureTime: FormControl<number | null | undefined>,
		ExtraType: FormControl<string | null | undefined>,
		FocalLength: FormControl<number | null | undefined>,
		ForcedSortName: FormControl<string | null | undefined>,
		HasSubtitles: FormControl<boolean | null | undefined>,
		Height: FormControl<number | null | undefined>,

		/** Gets or sets the id. */
		Id: FormControl<string | null | undefined>,
		ImageOrientation: FormControl<BaseItemDtoImageOrientation | null | undefined>,

		/** Gets or sets the image tags. */
		ImageTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the index number. */
		IndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the index number end. */
		IndexNumberEnd: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this instance is folder. */
		IsFolder: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is HD. */
		IsHD: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is kids. */
		IsKids: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is live. */
		IsLive: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is movie. */
		IsMovie: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is news. */
		IsNews: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is place holder. */
		IsPlaceHolder: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is premiere. */
		IsPremiere: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is repeat. */
		IsRepeat: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is series. */
		IsSeries: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is sports. */
		IsSports: FormControl<boolean | null | undefined>,
		IsoSpeedRating: FormControl<number | null | undefined>,

		/** Enum IsoType. */
		IsoType: FormControl<BaseItemDtoIsoType | null | undefined>,
		Latitude: FormControl<number | null | undefined>,

		/** Gets or sets the local trailer count. */
		LocalTrailerCount: FormControl<number | null | undefined>,

		/** Enum LocationType. */
		LocationType: FormControl<BaseItemDtoLocationType | null | undefined>,

		/** Gets or sets a value indicating whether [enable internet providers]. */
		LockData: FormControl<boolean | null | undefined>,
		Longitude: FormControl<number | null | undefined>,
		MediaSourceCount: FormControl<number | null | undefined>,

		/** Gets or sets the type of the media. */
		MediaType: FormControl<string | null | undefined>,

		/** Gets or sets the movie count. */
		MovieCount: FormControl<number | null | undefined>,

		/** Gets or sets the music video count. */
		MusicVideoCount: FormControl<number | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the number. */
		Number: FormControl<string | null | undefined>,

		/** Gets or sets the official rating. */
		OfficialRating: FormControl<string | null | undefined>,
		OriginalTitle: FormControl<string | null | undefined>,

		/** Gets or sets the overview. */
		Overview: FormControl<string | null | undefined>,

		/** Gets or sets the parent art image tag. */
		ParentArtImageTag: FormControl<string | null | undefined>,

		/** If the item does not have a art, this will hold the Id of the Parent that has one. */
		ParentArtItemId: FormControl<string | null | undefined>,

		/** If the item does not have any backdrops, this will hold the Id of the Parent that has one. */
		ParentBackdropItemId: FormControl<string | null | undefined>,

		/** Gets or sets the parent id. */
		ParentId: FormControl<string | null | undefined>,

		/** Gets or sets the parent index number. */
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the parent logo image tag. */
		ParentLogoImageTag: FormControl<string | null | undefined>,

		/** If the item does not have a logo, this will hold the Id of the Parent that has one. */
		ParentLogoItemId: FormControl<string | null | undefined>,

		/** Gets or sets the parent primary image item identifier. */
		ParentPrimaryImageItemId: FormControl<string | null | undefined>,

		/** Gets or sets the parent primary image tag. */
		ParentPrimaryImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the parent thumb image tag. */
		ParentThumbImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the parent thumb item id. */
		ParentThumbItemId: FormControl<string | null | undefined>,

		/** Gets or sets the part count. */
		PartCount: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PlayAccess: FormControl<BaseItemDtoPlayAccess | null | undefined>,

		/** Gets or sets the playlist item identifier. */
		PlaylistItemId: FormControl<string | null | undefined>,
		PreferredMetadataCountryCode: FormControl<string | null | undefined>,
		PreferredMetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the premiere date. */
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the primary image aspect ratio, after image enhancements. */
		PrimaryImageAspectRatio: FormControl<number | null | undefined>,

		/** Gets or sets the production year. */
		ProductionYear: FormControl<number | null | undefined>,
		ProgramCount: FormControl<number | null | undefined>,

		/** Gets or sets the program identifier. */
		ProgramId: FormControl<string | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the recursive item count. */
		RecursiveItemCount: FormControl<number | null | undefined>,

		/** Gets or sets the run time ticks. */
		RunTimeTicks: FormControl<number | null | undefined>,

		/** Gets or sets the season identifier. */
		SeasonId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the season. */
		SeasonName: FormControl<string | null | undefined>,

		/** Gets or sets the series count. */
		SeriesCount: FormControl<number | null | undefined>,

		/** Gets or sets the series id. */
		SeriesId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the series. */
		SeriesName: FormControl<string | null | undefined>,

		/** Gets or sets the series primary image tag. */
		SeriesPrimaryImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the series studio. */
		SeriesStudio: FormControl<string | null | undefined>,

		/** Gets or sets the series thumb image tag. */
		SeriesThumbImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the series timer identifier. */
		SeriesTimerId: FormControl<string | null | undefined>,

		/** Gets or sets the server identifier. */
		ServerId: FormControl<string | null | undefined>,
		ShutterSpeed: FormControl<number | null | undefined>,
		Software: FormControl<string | null | undefined>,

		/** Gets or sets the song count. */
		SongCount: FormControl<number | null | undefined>,

		/** Gets or sets the name of the sort. */
		SortName: FormControl<string | null | undefined>,

		/** Gets or sets the type of the source. */
		SourceType: FormControl<string | null | undefined>,

		/** Gets or sets the special feature count. */
		SpecialFeatureCount: FormControl<number | null | undefined>,

		/** The start date of the recording, in UTC. */
		StartDate: FormControl<Date | null | undefined>,

		/** Gets or sets the status. */
		Status: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether [supports synchronize]. */
		SupportsSync: FormControl<boolean | null | undefined>,

		/** Gets or sets the timer identifier. */
		TimerId: FormControl<string | null | undefined>,

		/** Gets or sets the trailer count. */
		TrailerCount: FormControl<number | null | undefined>,

		/** Gets or sets the type. */
		Type: FormControl<string | null | undefined>,
		Video3DFormat: FormControl<MediaSourceInfoVideo3DFormat | null | undefined>,

		/** Enum VideoType. */
		VideoType: FormControl<MediaSourceInfoVideoType | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateBaseItemDtoFormGroup() {
		return new FormGroup<BaseItemDtoFormProperties>({
			AirTime: new FormControl<string | null | undefined>(undefined),
			AirsAfterSeasonNumber: new FormControl<number | null | undefined>(undefined),
			AirsBeforeEpisodeNumber: new FormControl<number | null | undefined>(undefined),
			AirsBeforeSeasonNumber: new FormControl<number | null | undefined>(undefined),
			Album: new FormControl<string | null | undefined>(undefined),
			AlbumArtist: new FormControl<string | null | undefined>(undefined),
			AlbumCount: new FormControl<number | null | undefined>(undefined),
			AlbumId: new FormControl<string | null | undefined>(undefined),
			AlbumPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			Altitude: new FormControl<number | null | undefined>(undefined),
			Aperture: new FormControl<number | null | undefined>(undefined),
			ArtistCount: new FormControl<number | null | undefined>(undefined),
			AspectRatio: new FormControl<string | null | undefined>(undefined),
			Audio: new FormControl<BaseItemDtoAudio | null | undefined>(undefined),
			CameraMake: new FormControl<string | null | undefined>(undefined),
			CameraModel: new FormControl<string | null | undefined>(undefined),
			CanDelete: new FormControl<boolean | null | undefined>(undefined),
			CanDownload: new FormControl<boolean | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelNumber: new FormControl<string | null | undefined>(undefined),
			ChannelPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<BaseItemDtoChannelType | null | undefined>(undefined),
			ChildCount: new FormControl<number | null | undefined>(undefined),
			CollectionType: new FormControl<string | null | undefined>(undefined),
			CommunityRating: new FormControl<number | null | undefined>(undefined),
			CompletionPercentage: new FormControl<number | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			CriticRating: new FormControl<number | null | undefined>(undefined),
			CumulativeRunTimeTicks: new FormControl<number | null | undefined>(undefined),
			CustomRating: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateLastMediaAdded: new FormControl<Date | null | undefined>(undefined),
			DisplayOrder: new FormControl<string | null | undefined>(undefined),
			DisplayPreferencesId: new FormControl<string | null | undefined>(undefined),
			EnableMediaSourceDisplay: new FormControl<boolean | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			EpisodeCount: new FormControl<number | null | undefined>(undefined),
			EpisodeTitle: new FormControl<string | null | undefined>(undefined),
			Etag: new FormControl<string | null | undefined>(undefined),
			ExposureTime: new FormControl<number | null | undefined>(undefined),
			ExtraType: new FormControl<string | null | undefined>(undefined),
			FocalLength: new FormControl<number | null | undefined>(undefined),
			ForcedSortName: new FormControl<string | null | undefined>(undefined),
			HasSubtitles: new FormControl<boolean | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ImageOrientation: new FormControl<BaseItemDtoImageOrientation | null | undefined>(undefined),
			ImageTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IndexNumberEnd: new FormControl<number | null | undefined>(undefined),
			IsFolder: new FormControl<boolean | null | undefined>(undefined),
			IsHD: new FormControl<boolean | null | undefined>(undefined),
			IsKids: new FormControl<boolean | null | undefined>(undefined),
			IsLive: new FormControl<boolean | null | undefined>(undefined),
			IsMovie: new FormControl<boolean | null | undefined>(undefined),
			IsNews: new FormControl<boolean | null | undefined>(undefined),
			IsPlaceHolder: new FormControl<boolean | null | undefined>(undefined),
			IsPremiere: new FormControl<boolean | null | undefined>(undefined),
			IsRepeat: new FormControl<boolean | null | undefined>(undefined),
			IsSeries: new FormControl<boolean | null | undefined>(undefined),
			IsSports: new FormControl<boolean | null | undefined>(undefined),
			IsoSpeedRating: new FormControl<number | null | undefined>(undefined),
			IsoType: new FormControl<BaseItemDtoIsoType | null | undefined>(undefined),
			Latitude: new FormControl<number | null | undefined>(undefined),
			LocalTrailerCount: new FormControl<number | null | undefined>(undefined),
			LocationType: new FormControl<BaseItemDtoLocationType | null | undefined>(undefined),
			LockData: new FormControl<boolean | null | undefined>(undefined),
			Longitude: new FormControl<number | null | undefined>(undefined),
			MediaSourceCount: new FormControl<number | null | undefined>(undefined),
			MediaType: new FormControl<string | null | undefined>(undefined),
			MovieCount: new FormControl<number | null | undefined>(undefined),
			MusicVideoCount: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			OfficialRating: new FormControl<string | null | undefined>(undefined),
			OriginalTitle: new FormControl<string | null | undefined>(undefined),
			Overview: new FormControl<string | null | undefined>(undefined),
			ParentArtImageTag: new FormControl<string | null | undefined>(undefined),
			ParentArtItemId: new FormControl<string | null | undefined>(undefined),
			ParentBackdropItemId: new FormControl<string | null | undefined>(undefined),
			ParentId: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			ParentLogoImageTag: new FormControl<string | null | undefined>(undefined),
			ParentLogoItemId: new FormControl<string | null | undefined>(undefined),
			ParentPrimaryImageItemId: new FormControl<string | null | undefined>(undefined),
			ParentPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			ParentThumbImageTag: new FormControl<string | null | undefined>(undefined),
			ParentThumbItemId: new FormControl<string | null | undefined>(undefined),
			PartCount: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PlayAccess: new FormControl<BaseItemDtoPlayAccess | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			PreferredMetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			PreferredMetadataLanguage: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			PrimaryImageAspectRatio: new FormControl<number | null | undefined>(undefined),
			ProductionYear: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			ProgramId: new FormControl<string | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			RecursiveItemCount: new FormControl<number | null | undefined>(undefined),
			RunTimeTicks: new FormControl<number | null | undefined>(undefined),
			SeasonId: new FormControl<string | null | undefined>(undefined),
			SeasonName: new FormControl<string | null | undefined>(undefined),
			SeriesCount: new FormControl<number | null | undefined>(undefined),
			SeriesId: new FormControl<string | null | undefined>(undefined),
			SeriesName: new FormControl<string | null | undefined>(undefined),
			SeriesPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			SeriesStudio: new FormControl<string | null | undefined>(undefined),
			SeriesThumbImageTag: new FormControl<string | null | undefined>(undefined),
			SeriesTimerId: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			ShutterSpeed: new FormControl<number | null | undefined>(undefined),
			Software: new FormControl<string | null | undefined>(undefined),
			SongCount: new FormControl<number | null | undefined>(undefined),
			SortName: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			SpecialFeatureCount: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SupportsSync: new FormControl<boolean | null | undefined>(undefined),
			TimerId: new FormControl<string | null | undefined>(undefined),
			TrailerCount: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Video3DFormat: new FormControl<MediaSourceInfoVideo3DFormat | null | undefined>(undefined),
			VideoType: new FormControl<MediaSourceInfoVideoType | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DayOfWeek { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6 }

	export interface NameGuidPair {
		Id?: string | null;
		Name?: string | null;
	}
	export interface NameGuidPairFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateNameGuidPairFormGroup() {
		return new FormGroup<NameGuidPairFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BaseItemDtoAudio { Mono = 0, Stereo = 1, Dolby = 2, DolbyDigital = 3, Thx = 4, Atmos = 5 }

	export enum BaseItemDtoChannelType { TV = 0, Radio = 1 }


	/** Class ChapterInfo. */
	export interface ChapterInfo {
		ImageDateModified?: Date | null;

		/** Gets or sets the image path. */
		ImagePath?: string | null;
		ImageTag?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the start position ticks. */
		StartPositionTicks?: number | null;
	}

	/** Class ChapterInfo. */
	export interface ChapterInfoFormProperties {
		ImageDateModified: FormControl<Date | null | undefined>,

		/** Gets or sets the image path. */
		ImagePath: FormControl<string | null | undefined>,
		ImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the start position ticks. */
		StartPositionTicks: FormControl<number | null | undefined>,
	}
	export function CreateChapterInfoFormGroup() {
		return new FormGroup<ChapterInfoFormProperties>({
			ImageDateModified: new FormControl<Date | null | undefined>(undefined),
			ImagePath: new FormControl<string | null | undefined>(undefined),
			ImageTag: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			StartPositionTicks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExternalUrl {

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the type of the item. */
		Url?: string | null;
	}
	export interface ExternalUrlFormProperties {

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the type of the item. */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateExternalUrlFormGroup() {
		return new FormGroup<ExternalUrlFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseItemDtoImageBlurHashes {
		Art?: {[id: string]: string };
		Backdrop?: {[id: string]: string };
		Banner?: {[id: string]: string };
		Box?: {[id: string]: string };
		BoxRear?: {[id: string]: string };
		Chapter?: {[id: string]: string };
		Disc?: {[id: string]: string };
		Logo?: {[id: string]: string };
		Menu?: {[id: string]: string };
		Primary?: {[id: string]: string };
		Profile?: {[id: string]: string };
		Screenshot?: {[id: string]: string };
		Thumb?: {[id: string]: string };
	}
	export interface BaseItemDtoImageBlurHashesFormProperties {
		Art: FormControl<{[id: string]: string } | null | undefined>,
		Backdrop: FormControl<{[id: string]: string } | null | undefined>,
		Banner: FormControl<{[id: string]: string } | null | undefined>,
		Box: FormControl<{[id: string]: string } | null | undefined>,
		BoxRear: FormControl<{[id: string]: string } | null | undefined>,
		Chapter: FormControl<{[id: string]: string } | null | undefined>,
		Disc: FormControl<{[id: string]: string } | null | undefined>,
		Logo: FormControl<{[id: string]: string } | null | undefined>,
		Menu: FormControl<{[id: string]: string } | null | undefined>,
		Primary: FormControl<{[id: string]: string } | null | undefined>,
		Profile: FormControl<{[id: string]: string } | null | undefined>,
		Screenshot: FormControl<{[id: string]: string } | null | undefined>,
		Thumb: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBaseItemDtoImageBlurHashesFormGroup() {
		return new FormGroup<BaseItemDtoImageBlurHashesFormProperties>({
			Art: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Backdrop: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Banner: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Box: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			BoxRear: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Chapter: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Disc: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Logo: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Menu: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Primary: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Profile: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Screenshot: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Thumb: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum BaseItemDtoImageOrientation { TopLeft = 0, TopRight = 1, BottomRight = 2, BottomLeft = 3, LeftTop = 4, RightTop = 5, RightBottom = 6, LeftBottom = 7 }

	export enum BaseItemDtoIsoType { Dvd = 0, BluRay = 1 }

	export enum BaseItemDtoLocationType { FileSystem = 0, Remote = 1, Virtual = 2, Offline = 3 }


	/** Enum MetadataFields. */
	export enum MetadataField { Cast = 0, Genres = 1, ProductionLocations = 2, Studios = 3, Tags = 4, Name = 5, Overview = 6, Runtime = 7, OfficialRating = 8 }

	export interface MediaSourceInfo {
		AnalyzeDurationMs?: number | null;
		Bitrate?: number | null;
		BufferMs?: number | null;
		Container?: string | null;
		DefaultAudioStreamIndex?: number | null;
		DefaultSubtitleStreamIndex?: number | null;
		ETag?: string | null;
		EncoderPath?: string | null;
		EncoderProtocol?: MediaSourceInfoEncoderProtocol | null;
		Formats?: Array<string>;
		GenPtsInput?: boolean | null;
		Id?: string | null;
		IgnoreDts?: boolean | null;
		IgnoreIndex?: boolean | null;
		IsInfiniteStream?: boolean | null;

		/** Differentiate internet url vs local network. */
		IsRemote?: boolean | null;

		/** Enum IsoType. */
		IsoType?: BaseItemDtoIsoType | null;
		LiveStreamId?: string | null;
		MediaAttachments?: Array<MediaAttachment>;
		MediaStreams?: Array<MediaStream>;
		Name?: string | null;
		OpenToken?: string | null;
		Path?: string | null;
		Protocol?: MediaSourceInfoEncoderProtocol | null;
		ReadAtNativeFramerate?: boolean | null;
		RequiredHttpHeaders?: {[id: string]: string };
		RequiresClosing?: boolean | null;
		RequiresLooping?: boolean | null;
		RequiresOpening?: boolean | null;
		RunTimeTicks?: number | null;
		Size?: number | null;
		SupportsDirectPlay?: boolean | null;
		SupportsDirectStream?: boolean | null;
		SupportsProbing?: boolean | null;
		SupportsTranscoding?: boolean | null;
		Timestamp?: MediaSourceInfoTimestamp | null;
		TranscodingContainer?: string | null;
		TranscodingSubProtocol?: string | null;
		TranscodingUrl?: string | null;
		Type?: MediaSourceInfoType | null;
		Video3DFormat?: MediaSourceInfoVideo3DFormat | null;

		/** Enum VideoType. */
		VideoType?: MediaSourceInfoVideoType | null;
	}
	export interface MediaSourceInfoFormProperties {
		AnalyzeDurationMs: FormControl<number | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		BufferMs: FormControl<number | null | undefined>,
		Container: FormControl<string | null | undefined>,
		DefaultAudioStreamIndex: FormControl<number | null | undefined>,
		DefaultSubtitleStreamIndex: FormControl<number | null | undefined>,
		ETag: FormControl<string | null | undefined>,
		EncoderPath: FormControl<string | null | undefined>,
		EncoderProtocol: FormControl<MediaSourceInfoEncoderProtocol | null | undefined>,
		GenPtsInput: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IgnoreDts: FormControl<boolean | null | undefined>,
		IgnoreIndex: FormControl<boolean | null | undefined>,
		IsInfiniteStream: FormControl<boolean | null | undefined>,

		/** Differentiate internet url vs local network. */
		IsRemote: FormControl<boolean | null | undefined>,

		/** Enum IsoType. */
		IsoType: FormControl<BaseItemDtoIsoType | null | undefined>,
		LiveStreamId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OpenToken: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Protocol: FormControl<MediaSourceInfoEncoderProtocol | null | undefined>,
		ReadAtNativeFramerate: FormControl<boolean | null | undefined>,
		RequiredHttpHeaders: FormControl<{[id: string]: string } | null | undefined>,
		RequiresClosing: FormControl<boolean | null | undefined>,
		RequiresLooping: FormControl<boolean | null | undefined>,
		RequiresOpening: FormControl<boolean | null | undefined>,
		RunTimeTicks: FormControl<number | null | undefined>,
		Size: FormControl<number | null | undefined>,
		SupportsDirectPlay: FormControl<boolean | null | undefined>,
		SupportsDirectStream: FormControl<boolean | null | undefined>,
		SupportsProbing: FormControl<boolean | null | undefined>,
		SupportsTranscoding: FormControl<boolean | null | undefined>,
		Timestamp: FormControl<MediaSourceInfoTimestamp | null | undefined>,
		TranscodingContainer: FormControl<string | null | undefined>,
		TranscodingSubProtocol: FormControl<string | null | undefined>,
		TranscodingUrl: FormControl<string | null | undefined>,
		Type: FormControl<MediaSourceInfoType | null | undefined>,
		Video3DFormat: FormControl<MediaSourceInfoVideo3DFormat | null | undefined>,

		/** Enum VideoType. */
		VideoType: FormControl<MediaSourceInfoVideoType | null | undefined>,
	}
	export function CreateMediaSourceInfoFormGroup() {
		return new FormGroup<MediaSourceInfoFormProperties>({
			AnalyzeDurationMs: new FormControl<number | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BufferMs: new FormControl<number | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			DefaultAudioStreamIndex: new FormControl<number | null | undefined>(undefined),
			DefaultSubtitleStreamIndex: new FormControl<number | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			EncoderPath: new FormControl<string | null | undefined>(undefined),
			EncoderProtocol: new FormControl<MediaSourceInfoEncoderProtocol | null | undefined>(undefined),
			GenPtsInput: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IgnoreDts: new FormControl<boolean | null | undefined>(undefined),
			IgnoreIndex: new FormControl<boolean | null | undefined>(undefined),
			IsInfiniteStream: new FormControl<boolean | null | undefined>(undefined),
			IsRemote: new FormControl<boolean | null | undefined>(undefined),
			IsoType: new FormControl<BaseItemDtoIsoType | null | undefined>(undefined),
			LiveStreamId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OpenToken: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<MediaSourceInfoEncoderProtocol | null | undefined>(undefined),
			ReadAtNativeFramerate: new FormControl<boolean | null | undefined>(undefined),
			RequiredHttpHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			RequiresClosing: new FormControl<boolean | null | undefined>(undefined),
			RequiresLooping: new FormControl<boolean | null | undefined>(undefined),
			RequiresOpening: new FormControl<boolean | null | undefined>(undefined),
			RunTimeTicks: new FormControl<number | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			SupportsDirectPlay: new FormControl<boolean | null | undefined>(undefined),
			SupportsDirectStream: new FormControl<boolean | null | undefined>(undefined),
			SupportsProbing: new FormControl<boolean | null | undefined>(undefined),
			SupportsTranscoding: new FormControl<boolean | null | undefined>(undefined),
			Timestamp: new FormControl<MediaSourceInfoTimestamp | null | undefined>(undefined),
			TranscodingContainer: new FormControl<string | null | undefined>(undefined),
			TranscodingSubProtocol: new FormControl<string | null | undefined>(undefined),
			TranscodingUrl: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MediaSourceInfoType | null | undefined>(undefined),
			Video3DFormat: new FormControl<MediaSourceInfoVideo3DFormat | null | undefined>(undefined),
			VideoType: new FormControl<MediaSourceInfoVideoType | null | undefined>(undefined),
		});

	}

	export enum MediaSourceInfoEncoderProtocol { File = 0, Http = 1, Rtmp = 2, Rtsp = 3, Udp = 4, Rtp = 5, Ftp = 6 }


	/** Class MediaAttachment. */
	export interface MediaAttachment {

		/** Gets or sets the codec. */
		Codec?: string | null;

		/** Gets or sets the codec tag. */
		CodecTag?: string | null;

		/** Gets or sets the comment. */
		Comment?: string | null;

		/** Gets or sets the delivery URL. */
		DeliveryUrl?: string | null;

		/** Gets or sets the filename. */
		FileName?: string | null;

		/** Gets or sets the index. */
		Index?: number | null;

		/** Gets or sets the MIME type. */
		MimeType?: string | null;
	}

	/** Class MediaAttachment. */
	export interface MediaAttachmentFormProperties {

		/** Gets or sets the codec. */
		Codec: FormControl<string | null | undefined>,

		/** Gets or sets the codec tag. */
		CodecTag: FormControl<string | null | undefined>,

		/** Gets or sets the comment. */
		Comment: FormControl<string | null | undefined>,

		/** Gets or sets the delivery URL. */
		DeliveryUrl: FormControl<string | null | undefined>,

		/** Gets or sets the filename. */
		FileName: FormControl<string | null | undefined>,

		/** Gets or sets the index. */
		Index: FormControl<number | null | undefined>,

		/** Gets or sets the MIME type. */
		MimeType: FormControl<string | null | undefined>,
	}
	export function CreateMediaAttachmentFormGroup() {
		return new FormGroup<MediaAttachmentFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined),
			CodecTag: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			DeliveryUrl: new FormControl<string | null | undefined>(undefined),
			FileName: new FormControl<string | null | undefined>(undefined),
			Index: new FormControl<number | null | undefined>(undefined),
			MimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class MediaStream. */
	export interface MediaStream {

		/** Gets or sets the aspect ratio. */
		AspectRatio?: string | null;

		/** Gets or sets the average frame rate. */
		AverageFrameRate?: number | null;

		/** Gets or sets the bit depth. */
		BitDepth?: number | null;

		/** Gets or sets the bit rate. */
		BitRate?: number | null;

		/** Gets or sets the channel layout. */
		ChannelLayout?: string | null;

		/** Gets or sets the channels. */
		Channels?: number | null;

		/** Gets or sets the codec. */
		Codec?: string | null;

		/** Gets or sets the codec tag. */
		CodecTag?: string | null;

		/** Gets or sets the codec time base. */
		CodecTimeBase?: string | null;

		/** Gets or sets the color primaries. */
		ColorPrimaries?: string | null;

		/** Gets or sets the color range. */
		ColorRange?: string | null;

		/** Gets or sets the color space. */
		ColorSpace?: string | null;

		/** Gets or sets the color transfer. */
		ColorTransfer?: string | null;

		/** Gets or sets the comment. */
		Comment?: string | null;
		DeliveryMethod?: MediaStreamDeliveryMethod | null;

		/** Gets or sets the delivery URL. */
		DeliveryUrl?: string | null;
		DisplayTitle?: string | null;

		/** Gets or sets the height. */
		Height?: number | null;

		/** Gets or sets the index. */
		Index?: number | null;
		IsAVC?: boolean | null;

		/** Gets a value indicating whether this instance is anamorphic. */
		IsAnamorphic?: boolean | null;

		/** Gets or sets a value indicating whether this instance is default. */
		IsDefault?: boolean | null;

		/** Gets or sets a value indicating whether this instance is external. */
		IsExternal?: boolean | null;

		/** Gets or sets a value indicating whether this instance is external URL. */
		IsExternalUrl?: boolean | null;

		/** Gets or sets a value indicating whether this instance is forced. */
		IsForced?: boolean | null;

		/** Gets or sets a value indicating whether this instance is interlaced. */
		IsInterlaced?: boolean | null;
		IsTextSubtitleStream?: boolean | null;

		/** Gets or sets the language. */
		Language?: string | null;

		/** Gets or sets the level. */
		Level?: number | null;
		NalLengthSize?: string | null;

		/** Gets or sets the length of the packet. */
		PacketLength?: number | null;

		/** Gets or sets the filename. */
		Path?: string | null;

		/** Gets or sets the pixel format. */
		PixelFormat?: string | null;

		/** Gets or sets the profile. */
		Profile?: string | null;

		/** Gets or sets the real frame rate. */
		RealFrameRate?: number | null;

		/** Gets or sets the reference frames. */
		RefFrames?: number | null;

		/** Gets or sets the sample rate. */
		SampleRate?: number | null;

		/** Gets or sets the score. */
		Score?: number | null;

		/** Gets or sets a value indicating whether [supports external stream]. */
		SupportsExternalStream?: boolean | null;

		/** Gets or sets the time base. */
		TimeBase?: string | null;

		/** Gets or sets the title. */
		Title?: string | null;

		/** Enum MediaStreamType. */
		Type?: MediaStreamType | null;

		/** Gets or sets the video range. */
		VideoRange?: string | null;

		/** Gets or sets the width. */
		Width?: number | null;
		localizedDefault?: string | null;
		localizedForced?: string | null;
		localizedUndefined?: string | null;
	}

	/** Class MediaStream. */
	export interface MediaStreamFormProperties {

		/** Gets or sets the aspect ratio. */
		AspectRatio: FormControl<string | null | undefined>,

		/** Gets or sets the average frame rate. */
		AverageFrameRate: FormControl<number | null | undefined>,

		/** Gets or sets the bit depth. */
		BitDepth: FormControl<number | null | undefined>,

		/** Gets or sets the bit rate. */
		BitRate: FormControl<number | null | undefined>,

		/** Gets or sets the channel layout. */
		ChannelLayout: FormControl<string | null | undefined>,

		/** Gets or sets the channels. */
		Channels: FormControl<number | null | undefined>,

		/** Gets or sets the codec. */
		Codec: FormControl<string | null | undefined>,

		/** Gets or sets the codec tag. */
		CodecTag: FormControl<string | null | undefined>,

		/** Gets or sets the codec time base. */
		CodecTimeBase: FormControl<string | null | undefined>,

		/** Gets or sets the color primaries. */
		ColorPrimaries: FormControl<string | null | undefined>,

		/** Gets or sets the color range. */
		ColorRange: FormControl<string | null | undefined>,

		/** Gets or sets the color space. */
		ColorSpace: FormControl<string | null | undefined>,

		/** Gets or sets the color transfer. */
		ColorTransfer: FormControl<string | null | undefined>,

		/** Gets or sets the comment. */
		Comment: FormControl<string | null | undefined>,
		DeliveryMethod: FormControl<MediaStreamDeliveryMethod | null | undefined>,

		/** Gets or sets the delivery URL. */
		DeliveryUrl: FormControl<string | null | undefined>,
		DisplayTitle: FormControl<string | null | undefined>,

		/** Gets or sets the height. */
		Height: FormControl<number | null | undefined>,

		/** Gets or sets the index. */
		Index: FormControl<number | null | undefined>,
		IsAVC: FormControl<boolean | null | undefined>,

		/** Gets a value indicating whether this instance is anamorphic. */
		IsAnamorphic: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is default. */
		IsDefault: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is external. */
		IsExternal: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is external URL. */
		IsExternalUrl: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is forced. */
		IsForced: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is interlaced. */
		IsInterlaced: FormControl<boolean | null | undefined>,
		IsTextSubtitleStream: FormControl<boolean | null | undefined>,

		/** Gets or sets the language. */
		Language: FormControl<string | null | undefined>,

		/** Gets or sets the level. */
		Level: FormControl<number | null | undefined>,
		NalLengthSize: FormControl<string | null | undefined>,

		/** Gets or sets the length of the packet. */
		PacketLength: FormControl<number | null | undefined>,

		/** Gets or sets the filename. */
		Path: FormControl<string | null | undefined>,

		/** Gets or sets the pixel format. */
		PixelFormat: FormControl<string | null | undefined>,

		/** Gets or sets the profile. */
		Profile: FormControl<string | null | undefined>,

		/** Gets or sets the real frame rate. */
		RealFrameRate: FormControl<number | null | undefined>,

		/** Gets or sets the reference frames. */
		RefFrames: FormControl<number | null | undefined>,

		/** Gets or sets the sample rate. */
		SampleRate: FormControl<number | null | undefined>,

		/** Gets or sets the score. */
		Score: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether [supports external stream]. */
		SupportsExternalStream: FormControl<boolean | null | undefined>,

		/** Gets or sets the time base. */
		TimeBase: FormControl<string | null | undefined>,

		/** Gets or sets the title. */
		Title: FormControl<string | null | undefined>,

		/** Enum MediaStreamType. */
		Type: FormControl<MediaStreamType | null | undefined>,

		/** Gets or sets the video range. */
		VideoRange: FormControl<string | null | undefined>,

		/** Gets or sets the width. */
		Width: FormControl<number | null | undefined>,
		localizedDefault: FormControl<string | null | undefined>,
		localizedForced: FormControl<string | null | undefined>,
		localizedUndefined: FormControl<string | null | undefined>,
	}
	export function CreateMediaStreamFormGroup() {
		return new FormGroup<MediaStreamFormProperties>({
			AspectRatio: new FormControl<string | null | undefined>(undefined),
			AverageFrameRate: new FormControl<number | null | undefined>(undefined),
			BitDepth: new FormControl<number | null | undefined>(undefined),
			BitRate: new FormControl<number | null | undefined>(undefined),
			ChannelLayout: new FormControl<string | null | undefined>(undefined),
			Channels: new FormControl<number | null | undefined>(undefined),
			Codec: new FormControl<string | null | undefined>(undefined),
			CodecTag: new FormControl<string | null | undefined>(undefined),
			CodecTimeBase: new FormControl<string | null | undefined>(undefined),
			ColorPrimaries: new FormControl<string | null | undefined>(undefined),
			ColorRange: new FormControl<string | null | undefined>(undefined),
			ColorSpace: new FormControl<string | null | undefined>(undefined),
			ColorTransfer: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			DeliveryMethod: new FormControl<MediaStreamDeliveryMethod | null | undefined>(undefined),
			DeliveryUrl: new FormControl<string | null | undefined>(undefined),
			DisplayTitle: new FormControl<string | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Index: new FormControl<number | null | undefined>(undefined),
			IsAVC: new FormControl<boolean | null | undefined>(undefined),
			IsAnamorphic: new FormControl<boolean | null | undefined>(undefined),
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
			IsExternal: new FormControl<boolean | null | undefined>(undefined),
			IsExternalUrl: new FormControl<boolean | null | undefined>(undefined),
			IsForced: new FormControl<boolean | null | undefined>(undefined),
			IsInterlaced: new FormControl<boolean | null | undefined>(undefined),
			IsTextSubtitleStream: new FormControl<boolean | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			Level: new FormControl<number | null | undefined>(undefined),
			NalLengthSize: new FormControl<string | null | undefined>(undefined),
			PacketLength: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PixelFormat: new FormControl<string | null | undefined>(undefined),
			Profile: new FormControl<string | null | undefined>(undefined),
			RealFrameRate: new FormControl<number | null | undefined>(undefined),
			RefFrames: new FormControl<number | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			SupportsExternalStream: new FormControl<boolean | null | undefined>(undefined),
			TimeBase: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MediaStreamType | null | undefined>(undefined),
			VideoRange: new FormControl<string | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
			localizedDefault: new FormControl<string | null | undefined>(undefined),
			localizedForced: new FormControl<string | null | undefined>(undefined),
			localizedUndefined: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MediaStreamDeliveryMethod { Encode = 0, Embed = 1, External = 2, Hls = 3 }

	export enum MediaStreamType { Audio = 0, Video = 1, Subtitle = 2, EmbeddedImage = 3 }

	export enum MediaSourceInfoTimestamp { None = 0, Zero = 1, Valid = 2 }

	export enum MediaSourceInfoType { Default = 0, Grouping = 1, Placeholder = 2 }

	export enum MediaSourceInfoVideo3DFormat { HalfSideBySide = 0, FullSideBySide = 1, FullTopAndBottom = 2, HalfTopAndBottom = 3, MVC = 4 }

	export enum MediaSourceInfoVideoType { VideoFile = 0, Iso = 1, Dvd = 2, BluRay = 3 }


	/** This is used by the api to get information about a Person within a BaseItem. */
	export interface BaseItemPerson {

		/** Gets or sets the identifier. */
		Id?: string | null;

		/** Gets or sets the primary image blurhash. */
		ImageBlurHashes?: BaseItemPersonImageBlurHashes;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the primary image tag. */
		PrimaryImageTag?: string | null;

		/** Gets or sets the role. */
		Role?: string | null;

		/** Gets or sets the type. */
		Type?: string | null;
	}

	/** This is used by the api to get information about a Person within a BaseItem. */
	export interface BaseItemPersonFormProperties {

		/** Gets or sets the identifier. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the primary image tag. */
		PrimaryImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the role. */
		Role: FormControl<string | null | undefined>,

		/** Gets or sets the type. */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateBaseItemPersonFormGroup() {
		return new FormGroup<BaseItemPersonFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseItemPersonImageBlurHashes {
		Art?: {[id: string]: string };
		Backdrop?: {[id: string]: string };
		Banner?: {[id: string]: string };
		Box?: {[id: string]: string };
		BoxRear?: {[id: string]: string };
		Chapter?: {[id: string]: string };
		Disc?: {[id: string]: string };
		Logo?: {[id: string]: string };
		Menu?: {[id: string]: string };
		Primary?: {[id: string]: string };
		Profile?: {[id: string]: string };
		Screenshot?: {[id: string]: string };
		Thumb?: {[id: string]: string };
	}
	export interface BaseItemPersonImageBlurHashesFormProperties {
		Art: FormControl<{[id: string]: string } | null | undefined>,
		Backdrop: FormControl<{[id: string]: string } | null | undefined>,
		Banner: FormControl<{[id: string]: string } | null | undefined>,
		Box: FormControl<{[id: string]: string } | null | undefined>,
		BoxRear: FormControl<{[id: string]: string } | null | undefined>,
		Chapter: FormControl<{[id: string]: string } | null | undefined>,
		Disc: FormControl<{[id: string]: string } | null | undefined>,
		Logo: FormControl<{[id: string]: string } | null | undefined>,
		Menu: FormControl<{[id: string]: string } | null | undefined>,
		Primary: FormControl<{[id: string]: string } | null | undefined>,
		Profile: FormControl<{[id: string]: string } | null | undefined>,
		Screenshot: FormControl<{[id: string]: string } | null | undefined>,
		Thumb: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBaseItemPersonImageBlurHashesFormGroup() {
		return new FormGroup<BaseItemPersonImageBlurHashesFormProperties>({
			Art: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Backdrop: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Banner: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Box: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			BoxRear: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Chapter: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Disc: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Logo: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Menu: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Primary: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Profile: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Screenshot: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Thumb: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum BaseItemDtoPlayAccess { Full = 0, None = 1 }

	export interface MediaUrl {
		Name?: string | null;
		Url?: string | null;
	}
	export interface MediaUrlFormProperties {
		Name: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateMediaUrlFormGroup() {
		return new FormGroup<MediaUrlFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class UserItemDataDto. */
	export interface UserItemDataDto {

		/** Gets or sets a value indicating whether this instance is favorite. */
		IsFavorite?: boolean | null;

		/** Gets or sets the item identifier. */
		ItemId?: string | null;

		/** Gets or sets the key. */
		Key?: string | null;

		/** Gets or sets the last played date. */
		LastPlayedDate?: Date | null;

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UserItemDataDto is likes. */
		Likes?: boolean | null;

		/** Gets or sets the play count. */
		PlayCount?: number | null;

		/** Gets or sets the playback position ticks. */
		PlaybackPositionTicks?: number | null;

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UserItemDataDto is played. */
		Played?: boolean | null;

		/** Gets or sets the played percentage. */
		PlayedPercentage?: number | null;

		/** Gets or sets the rating. */
		Rating?: number | null;

		/** Gets or sets the unplayed item count. */
		UnplayedItemCount?: number | null;
	}

	/** Class UserItemDataDto. */
	export interface UserItemDataDtoFormProperties {

		/** Gets or sets a value indicating whether this instance is favorite. */
		IsFavorite: FormControl<boolean | null | undefined>,

		/** Gets or sets the item identifier. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the key. */
		Key: FormControl<string | null | undefined>,

		/** Gets or sets the last played date. */
		LastPlayedDate: FormControl<Date | null | undefined>,

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UserItemDataDto is likes. */
		Likes: FormControl<boolean | null | undefined>,

		/** Gets or sets the play count. */
		PlayCount: FormControl<number | null | undefined>,

		/** Gets or sets the playback position ticks. */
		PlaybackPositionTicks: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UserItemDataDto is played. */
		Played: FormControl<boolean | null | undefined>,

		/** Gets or sets the played percentage. */
		PlayedPercentage: FormControl<number | null | undefined>,

		/** Gets or sets the rating. */
		Rating: FormControl<number | null | undefined>,

		/** Gets or sets the unplayed item count. */
		UnplayedItemCount: FormControl<number | null | undefined>,
	}
	export function CreateUserItemDataDtoFormGroup() {
		return new FormGroup<UserItemDataDtoFormProperties>({
			IsFavorite: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			LastPlayedDate: new FormControl<Date | null | undefined>(undefined),
			Likes: new FormControl<boolean | null | undefined>(undefined),
			PlayCount: new FormControl<number | null | undefined>(undefined),
			PlaybackPositionTicks: new FormControl<number | null | undefined>(undefined),
			Played: new FormControl<boolean | null | undefined>(undefined),
			PlayedPercentage: new FormControl<number | null | undefined>(undefined),
			Rating: new FormControl<number | null | undefined>(undefined),
			UnplayedItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Architecture { X86 = 0, X64 = 1, Arm = 2, Arm64 = 3, Wasm = 4 }

	export interface ArtistInfo {
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };
		SongInfos?: Array<SongInfo>;

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface ArtistInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateArtistInfoFormGroup() {
		return new FormGroup<ArtistInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtistInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: ArtistInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface ArtistInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateArtistInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<ArtistInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The authenticate user by name request body. */
	export interface AuthenticateUserByName {

		/** Gets or sets the sha1-hashed password. */
		Password?: string | null;

		/** Gets or sets the plain text password. */
		Pw?: string | null;

		/** Gets or sets the username. */
		Username?: string | null;
	}

	/** The authenticate user by name request body. */
	export interface AuthenticateUserByNameFormProperties {

		/** Gets or sets the sha1-hashed password. */
		Password: FormControl<string | null | undefined>,

		/** Gets or sets the plain text password. */
		Pw: FormControl<string | null | undefined>,

		/** Gets or sets the username. */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticateUserByNameFormGroup() {
		return new FormGroup<AuthenticateUserByNameFormProperties>({
			Password: new FormControl<string | null | undefined>(undefined),
			Pw: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationInfo {

		/** Gets or sets the access token. */
		AccessToken?: string | null;

		/** Gets or sets the name of the application. */
		AppName?: string | null;

		/** Gets or sets the application version. */
		AppVersion?: string | null;

		/** Gets or sets the date created. */
		DateCreated?: Date | null;
		DateLastActivity?: Date | null;

		/** Gets or sets the date revoked. */
		DateRevoked?: Date | null;

		/** Gets or sets the device identifier. */
		DeviceId?: string | null;

		/** Gets or sets the name of the device. */
		DeviceName?: string | null;

		/** Gets or sets the identifier. */
		Id?: number | null;

		/** Gets or sets a value indicating whether this instance is active. */
		IsActive?: boolean | null;

		/** Gets or sets the user identifier. */
		UserId?: string | null;
		UserName?: string | null;
	}
	export interface AuthenticationInfoFormProperties {

		/** Gets or sets the access token. */
		AccessToken: FormControl<string | null | undefined>,

		/** Gets or sets the name of the application. */
		AppName: FormControl<string | null | undefined>,

		/** Gets or sets the application version. */
		AppVersion: FormControl<string | null | undefined>,

		/** Gets or sets the date created. */
		DateCreated: FormControl<Date | null | undefined>,
		DateLastActivity: FormControl<Date | null | undefined>,

		/** Gets or sets the date revoked. */
		DateRevoked: FormControl<Date | null | undefined>,

		/** Gets or sets the device identifier. */
		DeviceId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the device. */
		DeviceName: FormControl<string | null | undefined>,

		/** Gets or sets the identifier. */
		Id: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this instance is active. */
		IsActive: FormControl<boolean | null | undefined>,

		/** Gets or sets the user identifier. */
		UserId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationInfoFormGroup() {
		return new FormGroup<AuthenticationInfoFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AppName: new FormControl<string | null | undefined>(undefined),
			AppVersion: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateLastActivity: new FormControl<Date | null | undefined>(undefined),
			DateRevoked: new FormControl<Date | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationInfoQueryResult {

		/** Gets or sets the items. */
		Items?: Array<AuthenticationInfo>;

		/** The index of the first record in Items. */
		StartIndex?: number | null;

		/** The total number of records available. */
		TotalRecordCount?: number | null;
	}
	export interface AuthenticationInfoQueryResultFormProperties {

		/** The index of the first record in Items. */
		StartIndex: FormControl<number | null | undefined>,

		/** The total number of records available. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateAuthenticationInfoQueryResultFormGroup() {
		return new FormGroup<AuthenticationInfoQueryResultFormProperties>({
			StartIndex: new FormControl<number | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthenticationResult {
		AccessToken?: string | null;
		ServerId?: string | null;

		/** Class SessionInfo. */
		SessionInfo?: SessionInfo;

		/** Class UserDto. */
		User?: UserDto;
	}
	export interface AuthenticationResultFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationResultFormGroup() {
		return new FormGroup<AuthenticationResultFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class SessionInfo. */
	export interface SessionInfo {
		AdditionalUsers?: Array<SessionUserInfo>;

		/** Gets or sets the application version. */
		ApplicationVersion?: string | null;
		Capabilities?: ClientCapabilities;

		/** Gets or sets the type of the client. */
		Client?: string | null;

		/** Gets or sets the device id. */
		DeviceId?: string | null;

		/** Gets or sets the name of the device. */
		DeviceName?: string | null;

		/** Gets or sets the type of the device. */
		DeviceType?: string | null;

		/** Class BaseItem. */
		FullNowPlayingItem?: BaseItem;
		HasCustomDeviceName?: boolean | null;

		/** Gets or sets the id. */
		Id?: string | null;

		/** Gets a value indicating whether this instance is active. */
		IsActive?: boolean | null;

		/** Gets or sets the last activity date. */
		LastActivityDate?: Date | null;

		/** Gets or sets the last playback check in. */
		LastPlaybackCheckIn?: Date | null;

		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		NowPlayingItem?: BaseItemDto;
		NowPlayingQueue?: Array<QueueItem>;

		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		NowViewingItem?: BaseItemDto;
		PlayState?: PlayerStateInfo;

		/** Gets or sets the playable media types. */
		PlayableMediaTypes?: Array<string>;
		PlaylistItemId?: string | null;

		/** Gets or sets the remote end point. */
		RemoteEndPoint?: string | null;
		ServerId?: string | null;

		/** Gets or sets the supported commands. */
		SupportedCommands?: Array<GeneralCommandType>;
		SupportsMediaControl?: boolean | null;
		SupportsRemoteControl?: boolean | null;
		TranscodingInfo?: TranscodingInfo;

		/** Gets or sets the user id. */
		UserId?: string | null;

		/** Gets or sets the username. */
		UserName?: string | null;
		UserPrimaryImageTag?: string | null;
	}

	/** Class SessionInfo. */
	export interface SessionInfoFormProperties {

		/** Gets or sets the application version. */
		ApplicationVersion: FormControl<string | null | undefined>,

		/** Gets or sets the type of the client. */
		Client: FormControl<string | null | undefined>,

		/** Gets or sets the device id. */
		DeviceId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the device. */
		DeviceName: FormControl<string | null | undefined>,

		/** Gets or sets the type of the device. */
		DeviceType: FormControl<string | null | undefined>,
		HasCustomDeviceName: FormControl<boolean | null | undefined>,

		/** Gets or sets the id. */
		Id: FormControl<string | null | undefined>,

		/** Gets a value indicating whether this instance is active. */
		IsActive: FormControl<boolean | null | undefined>,

		/** Gets or sets the last activity date. */
		LastActivityDate: FormControl<Date | null | undefined>,

		/** Gets or sets the last playback check in. */
		LastPlaybackCheckIn: FormControl<Date | null | undefined>,
		PlaylistItemId: FormControl<string | null | undefined>,

		/** Gets or sets the remote end point. */
		RemoteEndPoint: FormControl<string | null | undefined>,
		ServerId: FormControl<string | null | undefined>,
		SupportsMediaControl: FormControl<boolean | null | undefined>,
		SupportsRemoteControl: FormControl<boolean | null | undefined>,

		/** Gets or sets the user id. */
		UserId: FormControl<string | null | undefined>,

		/** Gets or sets the username. */
		UserName: FormControl<string | null | undefined>,
		UserPrimaryImageTag: FormControl<string | null | undefined>,
	}
	export function CreateSessionInfoFormGroup() {
		return new FormGroup<SessionInfoFormProperties>({
			ApplicationVersion: new FormControl<string | null | undefined>(undefined),
			Client: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			DeviceType: new FormControl<string | null | undefined>(undefined),
			HasCustomDeviceName: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			LastActivityDate: new FormControl<Date | null | undefined>(undefined),
			LastPlaybackCheckIn: new FormControl<Date | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			RemoteEndPoint: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			SupportsMediaControl: new FormControl<boolean | null | undefined>(undefined),
			SupportsRemoteControl: new FormControl<boolean | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			UserPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class SessionUserInfo. */
	export interface SessionUserInfo {

		/** Gets or sets the user identifier. */
		UserId?: string | null;

		/** Gets or sets the name of the user. */
		UserName?: string | null;
	}

	/** Class SessionUserInfo. */
	export interface SessionUserInfoFormProperties {

		/** Gets or sets the user identifier. */
		UserId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the user. */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateSessionUserInfoFormGroup() {
		return new FormGroup<SessionUserInfoFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientCapabilities {
		AppStoreUrl?: string | null;

		/** Defines the MediaBrowser.Model.Dlna.DeviceProfile. */
		DeviceProfile?: DeviceProfile;
		IconUrl?: string | null;
		MessageCallbackUrl?: string | null;
		PlayableMediaTypes?: Array<string>;
		SupportedCommands?: Array<GeneralCommandType>;
		SupportsContentUploading?: boolean | null;
		SupportsMediaControl?: boolean | null;
		SupportsPersistentIdentifier?: boolean | null;
		SupportsSync?: boolean | null;
	}
	export interface ClientCapabilitiesFormProperties {
		AppStoreUrl: FormControl<string | null | undefined>,
		IconUrl: FormControl<string | null | undefined>,
		MessageCallbackUrl: FormControl<string | null | undefined>,
		SupportsContentUploading: FormControl<boolean | null | undefined>,
		SupportsMediaControl: FormControl<boolean | null | undefined>,
		SupportsPersistentIdentifier: FormControl<boolean | null | undefined>,
		SupportsSync: FormControl<boolean | null | undefined>,
	}
	export function CreateClientCapabilitiesFormGroup() {
		return new FormGroup<ClientCapabilitiesFormProperties>({
			AppStoreUrl: new FormControl<string | null | undefined>(undefined),
			IconUrl: new FormControl<string | null | undefined>(undefined),
			MessageCallbackUrl: new FormControl<string | null | undefined>(undefined),
			SupportsContentUploading: new FormControl<boolean | null | undefined>(undefined),
			SupportsMediaControl: new FormControl<boolean | null | undefined>(undefined),
			SupportsPersistentIdentifier: new FormControl<boolean | null | undefined>(undefined),
			SupportsSync: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the MediaBrowser.Model.Dlna.DeviceProfile. */
	export interface DeviceProfile {

		/** Gets or sets the AlbumArtPn. */
		AlbumArtPn?: string | null;

		/** Gets or sets the CodecProfiles. */
		CodecProfiles?: Array<CodecProfile>;

		/** Gets or sets the ContainerProfiles. */
		ContainerProfiles?: Array<ContainerProfile>;

		/** Gets or sets the direct play profiles. */
		DirectPlayProfiles?: Array<DirectPlayProfile>;

		/** Gets or sets a value indicating whether EnableAlbumArtInDidl. */
		EnableAlbumArtInDidl?: boolean | null;

		/** Gets or sets a value indicating whether EnableMSMediaReceiverRegistrar. */
		EnableMSMediaReceiverRegistrar?: boolean | null;

		/** Gets or sets a value indicating whether EnableSingleAlbumArtLimit. */
		EnableSingleAlbumArtLimit?: boolean | null;

		/** Gets or sets a value indicating whether EnableSingleSubtitleLimit. */
		EnableSingleSubtitleLimit?: boolean | null;

		/** Gets or sets the FriendlyName. */
		FriendlyName?: string | null;

		/** Gets or sets the Id. */
		Id?: string | null;
		Identification?: DeviceIdentification;

		/** Gets or sets a value indicating whether IgnoreTranscodeByteRangeRequests. */
		IgnoreTranscodeByteRangeRequests?: boolean | null;

		/** Gets or sets the Manufacturer. */
		Manufacturer?: string | null;

		/** Gets or sets the ManufacturerUrl. */
		ManufacturerUrl?: string | null;

		/** Gets or sets the MaxAlbumArtHeight. */
		MaxAlbumArtHeight?: number | null;

		/** Gets or sets the MaxAlbumArtWidth. */
		MaxAlbumArtWidth?: number | null;

		/** Gets or sets the MaxIconHeight. */
		MaxIconHeight?: number | null;

		/** Gets or sets the MaxIconWidth. */
		MaxIconWidth?: number | null;

		/** Gets or sets the MaxStaticBitrate. */
		MaxStaticBitrate?: number | null;

		/** Gets or sets the MaxStaticMusicBitrate. */
		MaxStaticMusicBitrate?: number | null;

		/** Gets or sets the MaxStreamingBitrate. */
		MaxStreamingBitrate?: number | null;

		/** Gets or sets the ModelDescription. */
		ModelDescription?: string | null;

		/** Gets or sets the ModelName. */
		ModelName?: string | null;

		/** Gets or sets the ModelNumber. */
		ModelNumber?: string | null;

		/** Gets or sets the ModelUrl. */
		ModelUrl?: string | null;

		/** Gets or sets the MusicStreamingTranscodingBitrate. */
		MusicStreamingTranscodingBitrate?: number | null;

		/** Gets or sets the Name. */
		Name?: string | null;

		/** Gets or sets the ProtocolInfo. */
		ProtocolInfo?: string | null;

		/** Gets or sets a value indicating whether RequiresPlainFolders. */
		RequiresPlainFolders?: boolean | null;

		/** Gets or sets a value indicating whether RequiresPlainVideoItems. */
		RequiresPlainVideoItems?: boolean | null;

		/** Gets or sets the ResponseProfiles. */
		ResponseProfiles?: Array<ResponseProfile>;

		/** Gets or sets the SerialNumber. */
		SerialNumber?: string | null;

		/** Gets or sets the content of the aggregationFlags element in the urn:schemas-sonycom:av namespace. */
		SonyAggregationFlags?: string | null;

		/** Gets or sets the SubtitleProfiles. */
		SubtitleProfiles?: Array<SubtitleProfile>;

		/** Gets or sets the SupportedMediaTypes. */
		SupportedMediaTypes?: string | null;

		/** Gets or sets the TimelineOffsetSeconds. */
		TimelineOffsetSeconds?: number | null;

		/** Gets or sets the transcoding profiles. */
		TranscodingProfiles?: Array<TranscodingProfile>;

		/** Gets or sets the UserId. */
		UserId?: string | null;

		/** Gets or sets the XmlRootAttributes. */
		XmlRootAttributes?: Array<XmlAttribute>;
	}

	/** Defines the MediaBrowser.Model.Dlna.DeviceProfile. */
	export interface DeviceProfileFormProperties {

		/** Gets or sets the AlbumArtPn. */
		AlbumArtPn: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether EnableAlbumArtInDidl. */
		EnableAlbumArtInDidl: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether EnableMSMediaReceiverRegistrar. */
		EnableMSMediaReceiverRegistrar: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether EnableSingleAlbumArtLimit. */
		EnableSingleAlbumArtLimit: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether EnableSingleSubtitleLimit. */
		EnableSingleSubtitleLimit: FormControl<boolean | null | undefined>,

		/** Gets or sets the FriendlyName. */
		FriendlyName: FormControl<string | null | undefined>,

		/** Gets or sets the Id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether IgnoreTranscodeByteRangeRequests. */
		IgnoreTranscodeByteRangeRequests: FormControl<boolean | null | undefined>,

		/** Gets or sets the Manufacturer. */
		Manufacturer: FormControl<string | null | undefined>,

		/** Gets or sets the ManufacturerUrl. */
		ManufacturerUrl: FormControl<string | null | undefined>,

		/** Gets or sets the MaxAlbumArtHeight. */
		MaxAlbumArtHeight: FormControl<number | null | undefined>,

		/** Gets or sets the MaxAlbumArtWidth. */
		MaxAlbumArtWidth: FormControl<number | null | undefined>,

		/** Gets or sets the MaxIconHeight. */
		MaxIconHeight: FormControl<number | null | undefined>,

		/** Gets or sets the MaxIconWidth. */
		MaxIconWidth: FormControl<number | null | undefined>,

		/** Gets or sets the MaxStaticBitrate. */
		MaxStaticBitrate: FormControl<number | null | undefined>,

		/** Gets or sets the MaxStaticMusicBitrate. */
		MaxStaticMusicBitrate: FormControl<number | null | undefined>,

		/** Gets or sets the MaxStreamingBitrate. */
		MaxStreamingBitrate: FormControl<number | null | undefined>,

		/** Gets or sets the ModelDescription. */
		ModelDescription: FormControl<string | null | undefined>,

		/** Gets or sets the ModelName. */
		ModelName: FormControl<string | null | undefined>,

		/** Gets or sets the ModelNumber. */
		ModelNumber: FormControl<string | null | undefined>,

		/** Gets or sets the ModelUrl. */
		ModelUrl: FormControl<string | null | undefined>,

		/** Gets or sets the MusicStreamingTranscodingBitrate. */
		MusicStreamingTranscodingBitrate: FormControl<number | null | undefined>,

		/** Gets or sets the Name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the ProtocolInfo. */
		ProtocolInfo: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether RequiresPlainFolders. */
		RequiresPlainFolders: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether RequiresPlainVideoItems. */
		RequiresPlainVideoItems: FormControl<boolean | null | undefined>,

		/** Gets or sets the SerialNumber. */
		SerialNumber: FormControl<string | null | undefined>,

		/** Gets or sets the content of the aggregationFlags element in the urn:schemas-sonycom:av namespace. */
		SonyAggregationFlags: FormControl<string | null | undefined>,

		/** Gets or sets the SupportedMediaTypes. */
		SupportedMediaTypes: FormControl<string | null | undefined>,

		/** Gets or sets the TimelineOffsetSeconds. */
		TimelineOffsetSeconds: FormControl<number | null | undefined>,

		/** Gets or sets the UserId. */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceProfileFormGroup() {
		return new FormGroup<DeviceProfileFormProperties>({
			AlbumArtPn: new FormControl<string | null | undefined>(undefined),
			EnableAlbumArtInDidl: new FormControl<boolean | null | undefined>(undefined),
			EnableMSMediaReceiverRegistrar: new FormControl<boolean | null | undefined>(undefined),
			EnableSingleAlbumArtLimit: new FormControl<boolean | null | undefined>(undefined),
			EnableSingleSubtitleLimit: new FormControl<boolean | null | undefined>(undefined),
			FriendlyName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IgnoreTranscodeByteRangeRequests: new FormControl<boolean | null | undefined>(undefined),
			Manufacturer: new FormControl<string | null | undefined>(undefined),
			ManufacturerUrl: new FormControl<string | null | undefined>(undefined),
			MaxAlbumArtHeight: new FormControl<number | null | undefined>(undefined),
			MaxAlbumArtWidth: new FormControl<number | null | undefined>(undefined),
			MaxIconHeight: new FormControl<number | null | undefined>(undefined),
			MaxIconWidth: new FormControl<number | null | undefined>(undefined),
			MaxStaticBitrate: new FormControl<number | null | undefined>(undefined),
			MaxStaticMusicBitrate: new FormControl<number | null | undefined>(undefined),
			MaxStreamingBitrate: new FormControl<number | null | undefined>(undefined),
			ModelDescription: new FormControl<string | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelNumber: new FormControl<string | null | undefined>(undefined),
			ModelUrl: new FormControl<string | null | undefined>(undefined),
			MusicStreamingTranscodingBitrate: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolInfo: new FormControl<string | null | undefined>(undefined),
			RequiresPlainFolders: new FormControl<boolean | null | undefined>(undefined),
			RequiresPlainVideoItems: new FormControl<boolean | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SonyAggregationFlags: new FormControl<string | null | undefined>(undefined),
			SupportedMediaTypes: new FormControl<string | null | undefined>(undefined),
			TimelineOffsetSeconds: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CodecProfile {
		ApplyConditions?: Array<ProfileCondition>;
		Codec?: string | null;
		Conditions?: Array<ProfileCondition>;
		Container?: string | null;
		Type?: CodecProfileType | null;
	}
	export interface CodecProfileFormProperties {
		Codec: FormControl<string | null | undefined>,
		Container: FormControl<string | null | undefined>,
		Type: FormControl<CodecProfileType | null | undefined>,
	}
	export function CreateCodecProfileFormGroup() {
		return new FormGroup<CodecProfileFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CodecProfileType | null | undefined>(undefined),
		});

	}

	export interface ProfileCondition {
		Condition?: ProfileConditionCondition | null;
		IsRequired?: boolean | null;
		Property?: ProfileConditionProperty | null;
		Value?: string | null;
	}
	export interface ProfileConditionFormProperties {
		Condition: FormControl<ProfileConditionCondition | null | undefined>,
		IsRequired: FormControl<boolean | null | undefined>,
		Property: FormControl<ProfileConditionProperty | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProfileConditionFormGroup() {
		return new FormGroup<ProfileConditionFormProperties>({
			Condition: new FormControl<ProfileConditionCondition | null | undefined>(undefined),
			IsRequired: new FormControl<boolean | null | undefined>(undefined),
			Property: new FormControl<ProfileConditionProperty | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProfileConditionCondition { Equals = 0, NotEquals = 1, LessThanEqual = 2, GreaterThanEqual = 3, EqualsAny = 4 }

	export enum ProfileConditionProperty { AudioChannels = 0, AudioBitrate = 1, AudioProfile = 2, Width = 3, Height = 4, Has64BitOffsets = 5, PacketLength = 6, VideoBitDepth = 7, VideoBitrate = 8, VideoFramerate = 9, VideoLevel = 10, VideoProfile = 11, VideoTimestamp = 12, IsAnamorphic = 13, RefFrames = 14, NumAudioStreams = 15, NumVideoStreams = 16, IsSecondaryAudio = 17, VideoCodecTag = 18, IsAvc = 19, IsInterlaced = 20, AudioSampleRate = 21, AudioBitDepth = 22 }

	export enum CodecProfileType { Video = 0, VideoAudio = 1, Audio = 2 }

	export interface ContainerProfile {
		Conditions?: Array<ProfileCondition>;
		Container?: string | null;
		Type?: ContainerProfileType | null;
	}
	export interface ContainerProfileFormProperties {
		Container: FormControl<string | null | undefined>,
		Type: FormControl<ContainerProfileType | null | undefined>,
	}
	export function CreateContainerProfileFormGroup() {
		return new FormGroup<ContainerProfileFormProperties>({
			Container: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContainerProfileType | null | undefined>(undefined),
		});

	}

	export enum ContainerProfileType { Audio = 0, Video = 1, Photo = 2 }

	export interface DirectPlayProfile {
		AudioCodec?: string | null;
		Container?: string | null;
		Type?: ContainerProfileType | null;
		VideoCodec?: string | null;
	}
	export interface DirectPlayProfileFormProperties {
		AudioCodec: FormControl<string | null | undefined>,
		Container: FormControl<string | null | undefined>,
		Type: FormControl<ContainerProfileType | null | undefined>,
		VideoCodec: FormControl<string | null | undefined>,
	}
	export function CreateDirectPlayProfileFormGroup() {
		return new FormGroup<DirectPlayProfileFormProperties>({
			AudioCodec: new FormControl<string | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContainerProfileType | null | undefined>(undefined),
			VideoCodec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceIdentification {

		/** Gets or sets the name of the friendly. */
		FriendlyName?: string | null;

		/** Gets or sets the headers. */
		Headers?: Array<HttpHeaderInfo>;

		/** Gets or sets the manufacturer. */
		Manufacturer?: string | null;

		/** Gets or sets the manufacturer URL. */
		ManufacturerUrl?: string | null;

		/** Gets or sets the model description. */
		ModelDescription?: string | null;

		/** Gets or sets the name of the model. */
		ModelName?: string | null;

		/** Gets or sets the model number. */
		ModelNumber?: string | null;

		/** Gets or sets the model URL. */
		ModelUrl?: string | null;

		/** Gets or sets the serial number. */
		SerialNumber?: string | null;
	}
	export interface DeviceIdentificationFormProperties {

		/** Gets or sets the name of the friendly. */
		FriendlyName: FormControl<string | null | undefined>,

		/** Gets or sets the manufacturer. */
		Manufacturer: FormControl<string | null | undefined>,

		/** Gets or sets the manufacturer URL. */
		ManufacturerUrl: FormControl<string | null | undefined>,

		/** Gets or sets the model description. */
		ModelDescription: FormControl<string | null | undefined>,

		/** Gets or sets the name of the model. */
		ModelName: FormControl<string | null | undefined>,

		/** Gets or sets the model number. */
		ModelNumber: FormControl<string | null | undefined>,

		/** Gets or sets the model URL. */
		ModelUrl: FormControl<string | null | undefined>,

		/** Gets or sets the serial number. */
		SerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeviceIdentificationFormGroup() {
		return new FormGroup<DeviceIdentificationFormProperties>({
			FriendlyName: new FormControl<string | null | undefined>(undefined),
			Manufacturer: new FormControl<string | null | undefined>(undefined),
			ManufacturerUrl: new FormControl<string | null | undefined>(undefined),
			ModelDescription: new FormControl<string | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelNumber: new FormControl<string | null | undefined>(undefined),
			ModelUrl: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HttpHeaderInfo {
		Match?: HttpHeaderInfoMatch | null;
		Name?: string | null;
		Value?: string | null;
	}
	export interface HttpHeaderInfoFormProperties {
		Match: FormControl<HttpHeaderInfoMatch | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateHttpHeaderInfoFormGroup() {
		return new FormGroup<HttpHeaderInfoFormProperties>({
			Match: new FormControl<HttpHeaderInfoMatch | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HttpHeaderInfoMatch { Equals = 0, Regex = 1, Substring = 2 }

	export interface ResponseProfile {
		AudioCodec?: string | null;
		Conditions?: Array<ProfileCondition>;
		Container?: string | null;
		MimeType?: string | null;
		OrgPn?: string | null;
		Type?: ContainerProfileType | null;
		VideoCodec?: string | null;
	}
	export interface ResponseProfileFormProperties {
		AudioCodec: FormControl<string | null | undefined>,
		Container: FormControl<string | null | undefined>,
		MimeType: FormControl<string | null | undefined>,
		OrgPn: FormControl<string | null | undefined>,
		Type: FormControl<ContainerProfileType | null | undefined>,
		VideoCodec: FormControl<string | null | undefined>,
	}
	export function CreateResponseProfileFormGroup() {
		return new FormGroup<ResponseProfileFormProperties>({
			AudioCodec: new FormControl<string | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			MimeType: new FormControl<string | null | undefined>(undefined),
			OrgPn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContainerProfileType | null | undefined>(undefined),
			VideoCodec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubtitleProfile {
		Container?: string | null;
		DidlMode?: string | null;
		Format?: string | null;
		Language?: string | null;
		Method?: MediaStreamDeliveryMethod | null;
	}
	export interface SubtitleProfileFormProperties {
		Container: FormControl<string | null | undefined>,
		DidlMode: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		Method: FormControl<MediaStreamDeliveryMethod | null | undefined>,
	}
	export function CreateSubtitleProfileFormGroup() {
		return new FormGroup<SubtitleProfileFormProperties>({
			Container: new FormControl<string | null | undefined>(undefined),
			DidlMode: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			Method: new FormControl<MediaStreamDeliveryMethod | null | undefined>(undefined),
		});

	}

	export interface TranscodingProfile {
		AudioCodec?: string | null;
		BreakOnNonKeyFrames?: boolean | null;
		Container?: string | null;
		Context?: TranscodingProfileContext | null;
		CopyTimestamps?: boolean | null;
		EnableMpegtsM2TsMode?: boolean | null;
		EnableSubtitlesInManifest?: boolean | null;
		EstimateContentLength?: boolean | null;
		MaxAudioChannels?: string | null;
		MinSegments?: number | null;
		Protocol?: string | null;
		SegmentLength?: number | null;
		TranscodeSeekInfo?: TranscodingProfileTranscodeSeekInfo | null;
		Type?: ContainerProfileType | null;
		VideoCodec?: string | null;
	}
	export interface TranscodingProfileFormProperties {
		AudioCodec: FormControl<string | null | undefined>,
		BreakOnNonKeyFrames: FormControl<boolean | null | undefined>,
		Container: FormControl<string | null | undefined>,
		Context: FormControl<TranscodingProfileContext | null | undefined>,
		CopyTimestamps: FormControl<boolean | null | undefined>,
		EnableMpegtsM2TsMode: FormControl<boolean | null | undefined>,
		EnableSubtitlesInManifest: FormControl<boolean | null | undefined>,
		EstimateContentLength: FormControl<boolean | null | undefined>,
		MaxAudioChannels: FormControl<string | null | undefined>,
		MinSegments: FormControl<number | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		SegmentLength: FormControl<number | null | undefined>,
		TranscodeSeekInfo: FormControl<TranscodingProfileTranscodeSeekInfo | null | undefined>,
		Type: FormControl<ContainerProfileType | null | undefined>,
		VideoCodec: FormControl<string | null | undefined>,
	}
	export function CreateTranscodingProfileFormGroup() {
		return new FormGroup<TranscodingProfileFormProperties>({
			AudioCodec: new FormControl<string | null | undefined>(undefined),
			BreakOnNonKeyFrames: new FormControl<boolean | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			Context: new FormControl<TranscodingProfileContext | null | undefined>(undefined),
			CopyTimestamps: new FormControl<boolean | null | undefined>(undefined),
			EnableMpegtsM2TsMode: new FormControl<boolean | null | undefined>(undefined),
			EnableSubtitlesInManifest: new FormControl<boolean | null | undefined>(undefined),
			EstimateContentLength: new FormControl<boolean | null | undefined>(undefined),
			MaxAudioChannels: new FormControl<string | null | undefined>(undefined),
			MinSegments: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			SegmentLength: new FormControl<number | null | undefined>(undefined),
			TranscodeSeekInfo: new FormControl<TranscodingProfileTranscodeSeekInfo | null | undefined>(undefined),
			Type: new FormControl<ContainerProfileType | null | undefined>(undefined),
			VideoCodec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscodingProfileContext { Streaming = 0, Static = 1 }

	export enum TranscodingProfileTranscodeSeekInfo { Auto = 0, Bytes = 1 }


	/** Defines the MediaBrowser.Model.Dlna.XmlAttribute. */
	export interface XmlAttribute {

		/** Gets or sets the name of the attribute. */
		Name?: string | null;

		/** Gets or sets the value of the attribute. */
		Value?: string | null;
	}

	/** Defines the MediaBrowser.Model.Dlna.XmlAttribute. */
	export interface XmlAttributeFormProperties {

		/** Gets or sets the name of the attribute. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the value of the attribute. */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateXmlAttributeFormGroup() {
		return new FormGroup<XmlAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This exists simply to identify a set of known commands. */
	export enum GeneralCommandType { MoveUp = 0, MoveDown = 1, MoveLeft = 2, MoveRight = 3, PageUp = 4, PageDown = 5, PreviousLetter = 6, NextLetter = 7, ToggleOsd = 8, ToggleContextMenu = 9, Select = 10, Back = 11, TakeScreenshot = 12, SendKey = 13, SendString = 14, GoHome = 15, GoToSettings = 16, VolumeUp = 17, VolumeDown = 18, Mute = 19, Unmute = 20, ToggleMute = 21, SetVolume = 22, SetAudioStreamIndex = 23, SetSubtitleStreamIndex = 24, ToggleFullscreen = 25, DisplayContent = 26, GoToSearch = 27, DisplayMessage = 28, SetRepeatMode = 29, ChannelUp = 30, ChannelDown = 31, Guide = 32, ToggleStats = 33, PlayMediaSource = 34, PlayTrailers = 35, SetShuffleQueue = 36, PlayState = 37, PlayNext = 38, ToggleOsdMenu = 39, Play = 40 }


	/** Class BaseItem. */
	export interface BaseItem {
		Container?: string | null;
		DateLastSaved?: Date | null;
		ExtraIds?: Array<string>;
		Height?: number | null;
		IsHD?: boolean | null;
		IsShortcut?: boolean | null;

		/** Gets or sets the remote trailers. */
		RemoteTrailers?: Array<MediaUrl>;
		ShortcutPath?: string | null;
		Size?: number | null;
		SupportsExternalTransfer?: boolean | null;
		Width?: number | null;
	}

	/** Class BaseItem. */
	export interface BaseItemFormProperties {
		Container: FormControl<string | null | undefined>,
		DateLastSaved: FormControl<Date | null | undefined>,
		Height: FormControl<number | null | undefined>,
		IsHD: FormControl<boolean | null | undefined>,
		IsShortcut: FormControl<boolean | null | undefined>,
		ShortcutPath: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		SupportsExternalTransfer: FormControl<boolean | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateBaseItemFormGroup() {
		return new FormGroup<BaseItemFormProperties>({
			Container: new FormControl<string | null | undefined>(undefined),
			DateLastSaved: new FormControl<Date | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			IsHD: new FormControl<boolean | null | undefined>(undefined),
			IsShortcut: new FormControl<boolean | null | undefined>(undefined),
			ShortcutPath: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			SupportsExternalTransfer: new FormControl<boolean | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueueItem {
		Id?: string | null;
		PlaylistItemId?: string | null;
	}
	export interface QueueItemFormProperties {
		Id: FormControl<string | null | undefined>,
		PlaylistItemId: FormControl<string | null | undefined>,
	}
	export function CreateQueueItemFormGroup() {
		return new FormGroup<QueueItemFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerStateInfo {

		/** Gets or sets the index of the now playing audio stream. */
		AudioStreamIndex?: number | null;

		/** Gets or sets a value indicating whether this instance can seek. */
		CanSeek?: boolean | null;

		/** Gets or sets a value indicating whether this instance is muted. */
		IsMuted?: boolean | null;

		/** Gets or sets a value indicating whether this instance is paused. */
		IsPaused?: boolean | null;

		/** Gets or sets the now playing media version identifier. */
		MediaSourceId?: string | null;
		PlayMethod?: PlayerStateInfoPlayMethod | null;

		/** Gets or sets the now playing position ticks. */
		PositionTicks?: number | null;
		RepeatMode?: PlayerStateInfoRepeatMode | null;

		/** Gets or sets the index of the now playing subtitle stream. */
		SubtitleStreamIndex?: number | null;

		/** Gets or sets the volume level. */
		VolumeLevel?: number | null;
	}
	export interface PlayerStateInfoFormProperties {

		/** Gets or sets the index of the now playing audio stream. */
		AudioStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this instance can seek. */
		CanSeek: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is muted. */
		IsMuted: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is paused. */
		IsPaused: FormControl<boolean | null | undefined>,

		/** Gets or sets the now playing media version identifier. */
		MediaSourceId: FormControl<string | null | undefined>,
		PlayMethod: FormControl<PlayerStateInfoPlayMethod | null | undefined>,

		/** Gets or sets the now playing position ticks. */
		PositionTicks: FormControl<number | null | undefined>,
		RepeatMode: FormControl<PlayerStateInfoRepeatMode | null | undefined>,

		/** Gets or sets the index of the now playing subtitle stream. */
		SubtitleStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets the volume level. */
		VolumeLevel: FormControl<number | null | undefined>,
	}
	export function CreatePlayerStateInfoFormGroup() {
		return new FormGroup<PlayerStateInfoFormProperties>({
			AudioStreamIndex: new FormControl<number | null | undefined>(undefined),
			CanSeek: new FormControl<boolean | null | undefined>(undefined),
			IsMuted: new FormControl<boolean | null | undefined>(undefined),
			IsPaused: new FormControl<boolean | null | undefined>(undefined),
			MediaSourceId: new FormControl<string | null | undefined>(undefined),
			PlayMethod: new FormControl<PlayerStateInfoPlayMethod | null | undefined>(undefined),
			PositionTicks: new FormControl<number | null | undefined>(undefined),
			RepeatMode: new FormControl<PlayerStateInfoRepeatMode | null | undefined>(undefined),
			SubtitleStreamIndex: new FormControl<number | null | undefined>(undefined),
			VolumeLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PlayerStateInfoPlayMethod { Transcode = 0, DirectStream = 1, DirectPlay = 2 }

	export enum PlayerStateInfoRepeatMode { RepeatNone = 0, RepeatAll = 1, RepeatOne = 2 }

	export interface TranscodingInfo {
		AudioChannels?: number | null;
		AudioCodec?: string | null;
		Bitrate?: number | null;
		CompletionPercentage?: number | null;
		Container?: string | null;
		Framerate?: number | null;
		Height?: number | null;
		IsAudioDirect?: boolean | null;
		IsVideoDirect?: boolean | null;
		TranscodeReasons?: Array<TranscodeReason>;
		VideoCodec?: string | null;
		Width?: number | null;
	}
	export interface TranscodingInfoFormProperties {
		AudioChannels: FormControl<number | null | undefined>,
		AudioCodec: FormControl<string | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		CompletionPercentage: FormControl<number | null | undefined>,
		Container: FormControl<string | null | undefined>,
		Framerate: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		IsAudioDirect: FormControl<boolean | null | undefined>,
		IsVideoDirect: FormControl<boolean | null | undefined>,
		VideoCodec: FormControl<string | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateTranscodingInfoFormGroup() {
		return new FormGroup<TranscodingInfoFormProperties>({
			AudioChannels: new FormControl<number | null | undefined>(undefined),
			AudioCodec: new FormControl<string | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CompletionPercentage: new FormControl<number | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			Framerate: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			IsAudioDirect: new FormControl<boolean | null | undefined>(undefined),
			IsVideoDirect: new FormControl<boolean | null | undefined>(undefined),
			VideoCodec: new FormControl<string | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TranscodeReason { ContainerNotSupported = 0, VideoCodecNotSupported = 1, AudioCodecNotSupported = 2, ContainerBitrateExceedsLimit = 3, AudioBitrateNotSupported = 4, AudioChannelsNotSupported = 5, VideoResolutionNotSupported = 6, UnknownVideoStreamInfo = 7, UnknownAudioStreamInfo = 8, AudioProfileNotSupported = 9, AudioSampleRateNotSupported = 10, AnamorphicVideoNotSupported = 11, InterlacedVideoNotSupported = 12, SecondaryAudioNotSupported = 13, RefFramesNotSupported = 14, VideoBitDepthNotSupported = 15, VideoBitrateNotSupported = 16, VideoFramerateNotSupported = 17, VideoLevelNotSupported = 18, VideoProfileNotSupported = 19, AudioBitDepthNotSupported = 20, SubtitleCodecNotSupported = 21, DirectPlayError = 22 }


	/** Class UserDto. */
	export interface UserDto {

		/** Class UserConfiguration. */
		Configuration?: UserConfiguration;

		/** Gets or sets whether async login is enabled or not. */
		EnableAutoLogin?: boolean | null;

		/** Gets or sets a value indicating whether this instance has configured easy password. */
		HasConfiguredEasyPassword?: boolean | null;

		/** Gets or sets a value indicating whether this instance has configured password. */
		HasConfiguredPassword?: boolean | null;

		/** Gets or sets a value indicating whether this instance has password. */
		HasPassword?: boolean | null;

		/** Gets or sets the id. */
		Id?: string | null;

		/** Gets or sets the last activity date. */
		LastActivityDate?: Date | null;

		/** Gets or sets the last login date. */
		LastLoginDate?: Date | null;

		/** Gets or sets the name. */
		Name?: string | null;
		Policy?: UserPolicy;

		/** Gets or sets the primary image aspect ratio. */
		PrimaryImageAspectRatio?: number | null;

		/** Gets or sets the primary image tag. */
		PrimaryImageTag?: string | null;

		/** Gets or sets the server identifier. */
		ServerId?: string | null;

		/**
		 * Gets or sets the name of the server.
		 * This is not used by the server and is for client-side usage only.
		 */
		ServerName?: string | null;
	}

	/** Class UserDto. */
	export interface UserDtoFormProperties {

		/** Gets or sets whether async login is enabled or not. */
		EnableAutoLogin: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance has configured easy password. */
		HasConfiguredEasyPassword: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance has configured password. */
		HasConfiguredPassword: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance has password. */
		HasPassword: FormControl<boolean | null | undefined>,

		/** Gets or sets the id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the last activity date. */
		LastActivityDate: FormControl<Date | null | undefined>,

		/** Gets or sets the last login date. */
		LastLoginDate: FormControl<Date | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the primary image aspect ratio. */
		PrimaryImageAspectRatio: FormControl<number | null | undefined>,

		/** Gets or sets the primary image tag. */
		PrimaryImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the server identifier. */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the name of the server.
		 * This is not used by the server and is for client-side usage only.
		 */
		ServerName: FormControl<string | null | undefined>,
	}
	export function CreateUserDtoFormGroup() {
		return new FormGroup<UserDtoFormProperties>({
			EnableAutoLogin: new FormControl<boolean | null | undefined>(undefined),
			HasConfiguredEasyPassword: new FormControl<boolean | null | undefined>(undefined),
			HasConfiguredPassword: new FormControl<boolean | null | undefined>(undefined),
			HasPassword: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastActivityDate: new FormControl<Date | null | undefined>(undefined),
			LastLoginDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryImageAspectRatio: new FormControl<number | null | undefined>(undefined),
			PrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class UserConfiguration. */
	export interface UserConfiguration {

		/** Gets or sets the audio language preference. */
		AudioLanguagePreference?: string | null;
		DisplayCollectionsView?: boolean | null;
		DisplayMissingEpisodes?: boolean | null;
		EnableLocalPassword?: boolean | null;
		EnableNextEpisodeAutoPlay?: boolean | null;
		GroupedFolders?: Array<string>;
		HidePlayedInLatest?: boolean | null;
		LatestItemsExcludes?: Array<string>;
		MyMediaExcludes?: Array<string>;
		OrderedViews?: Array<string>;

		/** Gets or sets a value indicating whether [play default audio track]. */
		PlayDefaultAudioTrack?: boolean | null;
		RememberAudioSelections?: boolean | null;
		RememberSubtitleSelections?: boolean | null;

		/** Gets or sets the subtitle language preference. */
		SubtitleLanguagePreference?: string | null;

		/** An enum representing a subtitle playback mode. */
		SubtitleMode?: UserConfigurationSubtitleMode | null;
	}

	/** Class UserConfiguration. */
	export interface UserConfigurationFormProperties {

		/** Gets or sets the audio language preference. */
		AudioLanguagePreference: FormControl<string | null | undefined>,
		DisplayCollectionsView: FormControl<boolean | null | undefined>,
		DisplayMissingEpisodes: FormControl<boolean | null | undefined>,
		EnableLocalPassword: FormControl<boolean | null | undefined>,
		EnableNextEpisodeAutoPlay: FormControl<boolean | null | undefined>,
		HidePlayedInLatest: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [play default audio track]. */
		PlayDefaultAudioTrack: FormControl<boolean | null | undefined>,
		RememberAudioSelections: FormControl<boolean | null | undefined>,
		RememberSubtitleSelections: FormControl<boolean | null | undefined>,

		/** Gets or sets the subtitle language preference. */
		SubtitleLanguagePreference: FormControl<string | null | undefined>,

		/** An enum representing a subtitle playback mode. */
		SubtitleMode: FormControl<UserConfigurationSubtitleMode | null | undefined>,
	}
	export function CreateUserConfigurationFormGroup() {
		return new FormGroup<UserConfigurationFormProperties>({
			AudioLanguagePreference: new FormControl<string | null | undefined>(undefined),
			DisplayCollectionsView: new FormControl<boolean | null | undefined>(undefined),
			DisplayMissingEpisodes: new FormControl<boolean | null | undefined>(undefined),
			EnableLocalPassword: new FormControl<boolean | null | undefined>(undefined),
			EnableNextEpisodeAutoPlay: new FormControl<boolean | null | undefined>(undefined),
			HidePlayedInLatest: new FormControl<boolean | null | undefined>(undefined),
			PlayDefaultAudioTrack: new FormControl<boolean | null | undefined>(undefined),
			RememberAudioSelections: new FormControl<boolean | null | undefined>(undefined),
			RememberSubtitleSelections: new FormControl<boolean | null | undefined>(undefined),
			SubtitleLanguagePreference: new FormControl<string | null | undefined>(undefined),
			SubtitleMode: new FormControl<UserConfigurationSubtitleMode | null | undefined>(undefined),
		});

	}

	export enum UserConfigurationSubtitleMode { Default = 0, Always = 1, OnlyForced = 2, None = 3, Smart = 4 }

	export interface UserPolicy {
		AccessSchedules?: Array<AccessSchedule>;
		AuthenticationProviderId?: string | null;
		BlockUnratedItems?: Array<UnratedItem>;
		BlockedChannels?: Array<string>;
		BlockedMediaFolders?: Array<string>;
		BlockedTags?: Array<string>;
		EnableAllChannels?: boolean | null;
		EnableAllDevices?: boolean | null;
		EnableAllFolders?: boolean | null;
		EnableAudioPlaybackTranscoding?: boolean | null;
		EnableContentDeletion?: boolean | null;
		EnableContentDeletionFromFolders?: Array<string>;
		EnableContentDownloading?: boolean | null;
		EnableLiveTvAccess?: boolean | null;
		EnableLiveTvManagement?: boolean | null;
		EnableMediaConversion?: boolean | null;
		EnableMediaPlayback?: boolean | null;
		EnablePlaybackRemuxing?: boolean | null;
		EnablePublicSharing?: boolean | null;
		EnableRemoteAccess?: boolean | null;
		EnableRemoteControlOfOtherUsers?: boolean | null;
		EnableSharedDeviceControl?: boolean | null;

		/** Gets or sets a value indicating whether [enable synchronize]. */
		EnableSyncTranscoding?: boolean | null;
		EnableUserPreferenceAccess?: boolean | null;
		EnableVideoPlaybackTranscoding?: boolean | null;
		EnabledChannels?: Array<string>;
		EnabledDevices?: Array<string>;
		EnabledFolders?: Array<string>;
		ForceRemoteSourceTranscoding?: boolean | null;
		InvalidLoginAttemptCount?: number | null;

		/** Gets or sets a value indicating whether this instance is administrator. */
		IsAdministrator?: boolean | null;

		/** Gets or sets a value indicating whether this instance is disabled. */
		IsDisabled?: boolean | null;

		/** Gets or sets a value indicating whether this instance is hidden. */
		IsHidden?: boolean | null;
		LoginAttemptsBeforeLockout?: number | null;
		MaxActiveSessions?: number | null;

		/** Gets or sets the max parental rating. */
		MaxParentalRating?: number | null;
		PasswordResetProviderId?: string | null;
		RemoteClientBitrateLimit?: number | null;

		/** Enum SyncPlayUserAccessType. */
		SyncPlayAccess?: UserPolicySyncPlayAccess | null;
	}
	export interface UserPolicyFormProperties {
		AuthenticationProviderId: FormControl<string | null | undefined>,
		EnableAllChannels: FormControl<boolean | null | undefined>,
		EnableAllDevices: FormControl<boolean | null | undefined>,
		EnableAllFolders: FormControl<boolean | null | undefined>,
		EnableAudioPlaybackTranscoding: FormControl<boolean | null | undefined>,
		EnableContentDeletion: FormControl<boolean | null | undefined>,
		EnableContentDownloading: FormControl<boolean | null | undefined>,
		EnableLiveTvAccess: FormControl<boolean | null | undefined>,
		EnableLiveTvManagement: FormControl<boolean | null | undefined>,
		EnableMediaConversion: FormControl<boolean | null | undefined>,
		EnableMediaPlayback: FormControl<boolean | null | undefined>,
		EnablePlaybackRemuxing: FormControl<boolean | null | undefined>,
		EnablePublicSharing: FormControl<boolean | null | undefined>,
		EnableRemoteAccess: FormControl<boolean | null | undefined>,
		EnableRemoteControlOfOtherUsers: FormControl<boolean | null | undefined>,
		EnableSharedDeviceControl: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [enable synchronize]. */
		EnableSyncTranscoding: FormControl<boolean | null | undefined>,
		EnableUserPreferenceAccess: FormControl<boolean | null | undefined>,
		EnableVideoPlaybackTranscoding: FormControl<boolean | null | undefined>,
		ForceRemoteSourceTranscoding: FormControl<boolean | null | undefined>,
		InvalidLoginAttemptCount: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this instance is administrator. */
		IsAdministrator: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is disabled. */
		IsDisabled: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is hidden. */
		IsHidden: FormControl<boolean | null | undefined>,
		LoginAttemptsBeforeLockout: FormControl<number | null | undefined>,
		MaxActiveSessions: FormControl<number | null | undefined>,

		/** Gets or sets the max parental rating. */
		MaxParentalRating: FormControl<number | null | undefined>,
		PasswordResetProviderId: FormControl<string | null | undefined>,
		RemoteClientBitrateLimit: FormControl<number | null | undefined>,

		/** Enum SyncPlayUserAccessType. */
		SyncPlayAccess: FormControl<UserPolicySyncPlayAccess | null | undefined>,
	}
	export function CreateUserPolicyFormGroup() {
		return new FormGroup<UserPolicyFormProperties>({
			AuthenticationProviderId: new FormControl<string | null | undefined>(undefined),
			EnableAllChannels: new FormControl<boolean | null | undefined>(undefined),
			EnableAllDevices: new FormControl<boolean | null | undefined>(undefined),
			EnableAllFolders: new FormControl<boolean | null | undefined>(undefined),
			EnableAudioPlaybackTranscoding: new FormControl<boolean | null | undefined>(undefined),
			EnableContentDeletion: new FormControl<boolean | null | undefined>(undefined),
			EnableContentDownloading: new FormControl<boolean | null | undefined>(undefined),
			EnableLiveTvAccess: new FormControl<boolean | null | undefined>(undefined),
			EnableLiveTvManagement: new FormControl<boolean | null | undefined>(undefined),
			EnableMediaConversion: new FormControl<boolean | null | undefined>(undefined),
			EnableMediaPlayback: new FormControl<boolean | null | undefined>(undefined),
			EnablePlaybackRemuxing: new FormControl<boolean | null | undefined>(undefined),
			EnablePublicSharing: new FormControl<boolean | null | undefined>(undefined),
			EnableRemoteAccess: new FormControl<boolean | null | undefined>(undefined),
			EnableRemoteControlOfOtherUsers: new FormControl<boolean | null | undefined>(undefined),
			EnableSharedDeviceControl: new FormControl<boolean | null | undefined>(undefined),
			EnableSyncTranscoding: new FormControl<boolean | null | undefined>(undefined),
			EnableUserPreferenceAccess: new FormControl<boolean | null | undefined>(undefined),
			EnableVideoPlaybackTranscoding: new FormControl<boolean | null | undefined>(undefined),
			ForceRemoteSourceTranscoding: new FormControl<boolean | null | undefined>(undefined),
			InvalidLoginAttemptCount: new FormControl<number | null | undefined>(undefined),
			IsAdministrator: new FormControl<boolean | null | undefined>(undefined),
			IsDisabled: new FormControl<boolean | null | undefined>(undefined),
			IsHidden: new FormControl<boolean | null | undefined>(undefined),
			LoginAttemptsBeforeLockout: new FormControl<number | null | undefined>(undefined),
			MaxActiveSessions: new FormControl<number | null | undefined>(undefined),
			MaxParentalRating: new FormControl<number | null | undefined>(undefined),
			PasswordResetProviderId: new FormControl<string | null | undefined>(undefined),
			RemoteClientBitrateLimit: new FormControl<number | null | undefined>(undefined),
			SyncPlayAccess: new FormControl<UserPolicySyncPlayAccess | null | undefined>(undefined),
		});

	}


	/** An enum representing an unrated item. */
	export enum UnratedItem { Movie = 0, Trailer = 1, Series = 2, Music = 3, Book = 4, LiveTvChannel = 5, LiveTvProgram = 6, ChannelContent = 7, Other = 8 }

	export enum UserPolicySyncPlayAccess { CreateAndJoinGroups = 0, JoinGroups = 1, None = 2 }

	export interface BaseItemDtoQueryResult {

		/** Gets or sets the items. */
		Items?: Array<BaseItemDto>;

		/** The index of the first record in Items. */
		StartIndex?: number | null;

		/** The total number of records available. */
		TotalRecordCount?: number | null;
	}
	export interface BaseItemDtoQueryResultFormProperties {

		/** The index of the first record in Items. */
		StartIndex: FormControl<number | null | undefined>,

		/** The total number of records available. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateBaseItemDtoQueryResultFormGroup() {
		return new FormGroup<BaseItemDtoQueryResultFormProperties>({
			StartIndex: new FormControl<number | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class BasePluginConfiguration. */
	export interface BasePluginConfiguration {
	}

	/** Class BasePluginConfiguration. */
	export interface BasePluginConfigurationFormProperties {
	}
	export function CreateBasePluginConfigurationFormGroup() {
		return new FormGroup<BasePluginConfigurationFormProperties>({
		});

	}

	export interface BookInfo {
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };
		SeriesName?: string | null;

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface BookInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,
		SeriesName: FormControl<string | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateBookInfoFormGroup() {
		return new FormGroup<BookInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			SeriesName: new FormControl<string | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: BookInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface BookInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateBookInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<BookInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxSetInfo {
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface BoxSetInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateBoxSetInfoFormGroup() {
		return new FormGroup<BoxSetInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxSetInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: BoxSetInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface BoxSetInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateBoxSetInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<BoxSetInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandingOptions {

		/** Gets or sets the custom CSS. */
		CustomCss?: string | null;

		/** Gets or sets the login disclaimer. */
		LoginDisclaimer?: string | null;
	}
	export interface BrandingOptionsFormProperties {

		/** Gets or sets the custom CSS. */
		CustomCss: FormControl<string | null | undefined>,

		/** Gets or sets the login disclaimer. */
		LoginDisclaimer: FormControl<string | null | undefined>,
	}
	export function CreateBrandingOptionsFormGroup() {
		return new FormGroup<BrandingOptionsFormProperties>({
			CustomCss: new FormControl<string | null | undefined>(undefined),
			LoginDisclaimer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class BufferRequestDto. */
	export interface BufferRequestDto {

		/** Gets or sets a value indicating whether the client playback is unpaused. */
		IsPlaying?: boolean | null;

		/** Gets or sets the playlist item identifier of the playing item. */
		PlaylistItemId?: string | null;

		/** Gets or sets the position ticks. */
		PositionTicks?: number | null;

		/** Gets or sets when the request has been made by the client. */
		When?: Date | null;
	}

	/** Class BufferRequestDto. */
	export interface BufferRequestDtoFormProperties {

		/** Gets or sets a value indicating whether the client playback is unpaused. */
		IsPlaying: FormControl<boolean | null | undefined>,

		/** Gets or sets the playlist item identifier of the playing item. */
		PlaylistItemId: FormControl<string | null | undefined>,

		/** Gets or sets the position ticks. */
		PositionTicks: FormControl<number | null | undefined>,

		/** Gets or sets when the request has been made by the client. */
		When: FormControl<Date | null | undefined>,
	}
	export function CreateBufferRequestDtoFormGroup() {
		return new FormGroup<BufferRequestDtoFormProperties>({
			IsPlaying: new FormControl<boolean | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			PositionTicks: new FormControl<number | null | undefined>(undefined),
			When: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ChannelFeatures {

		/** Gets or sets the automatic refresh levels. */
		AutoRefreshLevels?: number | null;

		/** Gets or sets a value indicating whether this instance can filter. */
		CanFilter?: boolean | null;

		/** Gets or sets a value indicating whether this instance can search. */
		CanSearch?: boolean | null;

		/** Gets or sets the content types. */
		ContentTypes?: Array<ChannelMediaContentType>;

		/** Gets or sets the default sort orders. */
		DefaultSortFields?: Array<ChannelItemSortField>;

		/** Gets or sets the identifier. */
		Id?: string | null;

		/** Represents the maximum number of records the channel allows retrieving at a time. */
		MaxPageSize?: number | null;

		/** Gets or sets the media types. */
		MediaTypes?: Array<ChannelMediaType>;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets a value indicating whether [supports content downloading]. */
		SupportsContentDownloading?: boolean | null;

		/** Gets or sets a value indicating whether [supports latest media]. */
		SupportsLatestMedia?: boolean | null;

		/** Indicates if a sort ascending/descending toggle is supported or not. */
		SupportsSortOrderToggle?: boolean | null;
	}
	export interface ChannelFeaturesFormProperties {

		/** Gets or sets the automatic refresh levels. */
		AutoRefreshLevels: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this instance can filter. */
		CanFilter: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance can search. */
		CanSearch: FormControl<boolean | null | undefined>,

		/** Gets or sets the identifier. */
		Id: FormControl<string | null | undefined>,

		/** Represents the maximum number of records the channel allows retrieving at a time. */
		MaxPageSize: FormControl<number | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether [supports content downloading]. */
		SupportsContentDownloading: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [supports latest media]. */
		SupportsLatestMedia: FormControl<boolean | null | undefined>,

		/** Indicates if a sort ascending/descending toggle is supported or not. */
		SupportsSortOrderToggle: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelFeaturesFormGroup() {
		return new FormGroup<ChannelFeaturesFormProperties>({
			AutoRefreshLevels: new FormControl<number | null | undefined>(undefined),
			CanFilter: new FormControl<boolean | null | undefined>(undefined),
			CanSearch: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MaxPageSize: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SupportsContentDownloading: new FormControl<boolean | null | undefined>(undefined),
			SupportsLatestMedia: new FormControl<boolean | null | undefined>(undefined),
			SupportsSortOrderToggle: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ChannelMediaContentType { Clip = 0, Podcast = 1, Trailer = 2, Movie = 3, Episode = 4, Song = 5, MovieExtra = 6, TvExtra = 7 }

	export enum ChannelItemSortField { Name = 0, CommunityRating = 1, PremiereDate = 2, DateCreated = 3, Runtime = 4, PlayCount = 5, CommunityPlayCount = 6 }

	export enum ChannelMediaType { Audio = 0, Video = 1, Photo = 2 }


	/** Channel mapping options dto. */
	export interface ChannelMappingOptionsDto {

		/** Gets or sets list of mappings. */
		Mappings?: Array<NameValuePair>;

		/** Gets or sets list of provider channels. */
		ProviderChannels?: Array<NameIdPair>;

		/** Gets or sets provider name. */
		ProviderName?: string | null;

		/** Gets or sets list of tuner channels. */
		TunerChannels?: Array<TunerChannelMapping>;
	}

	/** Channel mapping options dto. */
	export interface ChannelMappingOptionsDtoFormProperties {

		/** Gets or sets provider name. */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateChannelMappingOptionsDtoFormGroup() {
		return new FormGroup<ChannelMappingOptionsDtoFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameValuePair {

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the value. */
		Value?: string | null;
	}
	export interface NameValuePairFormProperties {

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the value. */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateNameValuePairFormGroup() {
		return new FormGroup<NameValuePairFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameIdPair {

		/** Gets or sets the identifier. */
		Id?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
	}
	export interface NameIdPairFormProperties {

		/** Gets or sets the identifier. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateNameIdPairFormGroup() {
		return new FormGroup<NameIdPairFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TunerChannelMapping {
		Id?: string | null;
		Name?: string | null;
		ProviderChannelId?: string | null;
		ProviderChannelName?: string | null;
	}
	export interface TunerChannelMappingFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProviderChannelId: FormControl<string | null | undefined>,
		ProviderChannelName: FormControl<string | null | undefined>,
	}
	export function CreateTunerChannelMappingFormGroup() {
		return new FormGroup<TunerChannelMappingFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProviderChannelId: new FormControl<string | null | undefined>(undefined),
			ProviderChannelName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum ChannelType. */
	export enum ChannelType { TV = 0, Radio = 1 }


	/** Client capabilities dto. */
	export interface ClientCapabilitiesDto {

		/** Gets or sets the app store url. */
		AppStoreUrl?: string | null;

		/** Defines the MediaBrowser.Model.Dlna.DeviceProfile. */
		DeviceProfile?: DeviceProfile;

		/** Gets or sets the icon url. */
		IconUrl?: string | null;

		/** Gets or sets the message callback url. */
		MessageCallbackUrl?: string | null;

		/** Gets or sets the list of playable media types. */
		PlayableMediaTypes?: Array<string>;

		/** Gets or sets the list of supported commands. */
		SupportedCommands?: Array<GeneralCommandType>;

		/** Gets or sets a value indicating whether session supports content uploading. */
		SupportsContentUploading?: boolean | null;

		/** Gets or sets a value indicating whether session supports media control. */
		SupportsMediaControl?: boolean | null;

		/** Gets or sets a value indicating whether session supports a persistent identifier. */
		SupportsPersistentIdentifier?: boolean | null;

		/** Gets or sets a value indicating whether session supports sync. */
		SupportsSync?: boolean | null;
	}

	/** Client capabilities dto. */
	export interface ClientCapabilitiesDtoFormProperties {

		/** Gets or sets the app store url. */
		AppStoreUrl: FormControl<string | null | undefined>,

		/** Gets or sets the icon url. */
		IconUrl: FormControl<string | null | undefined>,

		/** Gets or sets the message callback url. */
		MessageCallbackUrl: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether session supports content uploading. */
		SupportsContentUploading: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether session supports media control. */
		SupportsMediaControl: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether session supports a persistent identifier. */
		SupportsPersistentIdentifier: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether session supports sync. */
		SupportsSync: FormControl<boolean | null | undefined>,
	}
	export function CreateClientCapabilitiesDtoFormGroup() {
		return new FormGroup<ClientCapabilitiesDtoFormProperties>({
			AppStoreUrl: new FormControl<string | null | undefined>(undefined),
			IconUrl: new FormControl<string | null | undefined>(undefined),
			MessageCallbackUrl: new FormControl<string | null | undefined>(undefined),
			SupportsContentUploading: new FormControl<boolean | null | undefined>(undefined),
			SupportsMediaControl: new FormControl<boolean | null | undefined>(undefined),
			SupportsPersistentIdentifier: new FormControl<boolean | null | undefined>(undefined),
			SupportsSync: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CodecType { Video = 0, VideoAudio = 1, Audio = 2 }

	export interface CollectionCreationResult {
		Id?: string | null;
	}
	export interface CollectionCreationResultFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCollectionCreationResultFormGroup() {
		return new FormGroup<CollectionCreationResultFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration page info. */
	export interface ConfigurationPageInfo {

		/** Enum ConfigurationPageType. */
		ConfigurationPageType?: ConfigurationPageInfoConfigurationPageType | null;

		/** Gets or sets the display name. */
		DisplayName?: string | null;

		/** Gets or sets a value indicating whether the configurations page is enabled in the main menu. */
		EnableInMainMenu?: boolean | null;

		/** Gets or sets the menu icon. */
		MenuIcon?: string | null;

		/** Gets or sets the menu section. */
		MenuSection?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the plugin id. */
		PluginId?: string | null;
	}

	/** The configuration page info. */
	export interface ConfigurationPageInfoFormProperties {

		/** Enum ConfigurationPageType. */
		ConfigurationPageType: FormControl<ConfigurationPageInfoConfigurationPageType | null | undefined>,

		/** Gets or sets the display name. */
		DisplayName: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether the configurations page is enabled in the main menu. */
		EnableInMainMenu: FormControl<boolean | null | undefined>,

		/** Gets or sets the menu icon. */
		MenuIcon: FormControl<string | null | undefined>,

		/** Gets or sets the menu section. */
		MenuSection: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the plugin id. */
		PluginId: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationPageInfoFormGroup() {
		return new FormGroup<ConfigurationPageInfoFormProperties>({
			ConfigurationPageType: new FormControl<ConfigurationPageInfoConfigurationPageType | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			EnableInMainMenu: new FormControl<boolean | null | undefined>(undefined),
			MenuIcon: new FormControl<string | null | undefined>(undefined),
			MenuSection: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PluginId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigurationPageInfoConfigurationPageType { PluginConfiguration = 0, None = 1 }


	/** Enum ConfigurationPageType. */
	export enum ConfigurationPageType { PluginConfiguration = 0, None = 1 }

	export interface ControlResponse {
		Headers?: {[id: string]: string };
		IsSuccessful?: boolean | null;
		Xml?: string | null;
	}
	export interface ControlResponseFormProperties {
		Headers: FormControl<{[id: string]: string } | null | undefined>,
		IsSuccessful: FormControl<boolean | null | undefined>,
		Xml: FormControl<string | null | undefined>,
	}
	export function CreateControlResponseFormGroup() {
		return new FormGroup<ControlResponseFormProperties>({
			Headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			IsSuccessful: new FormControl<boolean | null | undefined>(undefined),
			Xml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class CountryInfo. */
	export interface CountryInfo {

		/** Gets or sets the display name. */
		DisplayName?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the name of the three letter ISO region. */
		ThreeLetterISORegionName?: string | null;

		/** Gets or sets the name of the two letter ISO region. */
		TwoLetterISORegionName?: string | null;
	}

	/** Class CountryInfo. */
	export interface CountryInfoFormProperties {

		/** Gets or sets the display name. */
		DisplayName: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the name of the three letter ISO region. */
		ThreeLetterISORegionName: FormControl<string | null | undefined>,

		/** Gets or sets the name of the two letter ISO region. */
		TwoLetterISORegionName: FormControl<string | null | undefined>,
	}
	export function CreateCountryInfoFormGroup() {
		return new FormGroup<CountryInfoFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ThreeLetterISORegionName: new FormControl<string | null | undefined>(undefined),
			TwoLetterISORegionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Create new playlist dto. */
	export interface CreatePlaylistDto {

		/** Gets or sets item ids to add to the playlist. */
		Ids?: Array<string>;

		/** Gets or sets the media type. */
		MediaType?: string | null;

		/** Gets or sets the name of the new playlist. */
		Name?: string | null;

		/** Gets or sets the user id. */
		UserId?: string | null;
	}

	/** Create new playlist dto. */
	export interface CreatePlaylistDtoFormProperties {

		/** Gets or sets the media type. */
		MediaType: FormControl<string | null | undefined>,

		/** Gets or sets the name of the new playlist. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the user id. */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlaylistDtoFormGroup() {
		return new FormGroup<CreatePlaylistDtoFormProperties>({
			MediaType: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The create user by name request body. */
	export interface CreateUserByName {

		/** Gets or sets the username. */
		Name?: string | null;

		/** Gets or sets the password. */
		Password?: string | null;
	}

	/** The create user by name request body. */
	export interface CreateUserByNameFormProperties {

		/** Gets or sets the username. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the password. */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserByNameFormGroup() {
		return new FormGroup<CreateUserByNameFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class CultureDto. */
	export interface CultureDto {

		/** Gets or sets the display name. */
		DisplayName?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the name of the three letter ISO language. */
		ThreeLetterISOLanguageName?: string | null;
		ThreeLetterISOLanguageNames?: Array<string>;

		/** Gets or sets the name of the two letter ISO language. */
		TwoLetterISOLanguageName?: string | null;
	}

	/** Class CultureDto. */
	export interface CultureDtoFormProperties {

		/** Gets or sets the display name. */
		DisplayName: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the name of the three letter ISO language. */
		ThreeLetterISOLanguageName: FormControl<string | null | undefined>,

		/** Gets or sets the name of the two letter ISO language. */
		TwoLetterISOLanguageName: FormControl<string | null | undefined>,
	}
	export function CreateCultureDtoFormGroup() {
		return new FormGroup<CultureDtoFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ThreeLetterISOLanguageName: new FormControl<string | null | undefined>(undefined),
			TwoLetterISOLanguageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DayPattern { Daily = 0, Weekdays = 1, Weekends = 2 }


	/** Default directory browser info. */
	export interface DefaultDirectoryBrowserInfoDto {

		/** Gets or sets the path. */
		Path?: string | null;
	}

	/** Default directory browser info. */
	export interface DefaultDirectoryBrowserInfoDtoFormProperties {

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
	}
	export function CreateDefaultDirectoryBrowserInfoDtoFormGroup() {
		return new FormGroup<DefaultDirectoryBrowserInfoDtoFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceInfo {

		/** Gets or sets the name of the application. */
		AppName?: string | null;

		/** Gets or sets the application version. */
		AppVersion?: string | null;
		Capabilities?: ClientCapabilities;

		/** Gets or sets the date last modified. */
		DateLastActivity?: Date | null;
		IconUrl?: string | null;

		/** Gets or sets the identifier. */
		Id?: string | null;

		/** Gets or sets the last user identifier. */
		LastUserId?: string | null;

		/** Gets or sets the last name of the user. */
		LastUserName?: string | null;
		Name?: string | null;
	}
	export interface DeviceInfoFormProperties {

		/** Gets or sets the name of the application. */
		AppName: FormControl<string | null | undefined>,

		/** Gets or sets the application version. */
		AppVersion: FormControl<string | null | undefined>,

		/** Gets or sets the date last modified. */
		DateLastActivity: FormControl<Date | null | undefined>,
		IconUrl: FormControl<string | null | undefined>,

		/** Gets or sets the identifier. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the last user identifier. */
		LastUserId: FormControl<string | null | undefined>,

		/** Gets or sets the last name of the user. */
		LastUserName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInfoFormGroup() {
		return new FormGroup<DeviceInfoFormProperties>({
			AppName: new FormControl<string | null | undefined>(undefined),
			AppVersion: new FormControl<string | null | undefined>(undefined),
			DateLastActivity: new FormControl<Date | null | undefined>(undefined),
			IconUrl: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUserId: new FormControl<string | null | undefined>(undefined),
			LastUserName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceInfoQueryResult {

		/** Gets or sets the items. */
		Items?: Array<DeviceInfo>;

		/** The index of the first record in Items. */
		StartIndex?: number | null;

		/** The total number of records available. */
		TotalRecordCount?: number | null;
	}
	export interface DeviceInfoQueryResultFormProperties {

		/** The index of the first record in Items. */
		StartIndex: FormControl<number | null | undefined>,

		/** The total number of records available. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateDeviceInfoQueryResultFormGroup() {
		return new FormGroup<DeviceInfoQueryResultFormProperties>({
			StartIndex: new FormControl<number | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeviceOptions {
		CustomName?: string | null;
	}
	export interface DeviceOptionsFormProperties {
		CustomName: FormControl<string | null | undefined>,
	}
	export function CreateDeviceOptionsFormGroup() {
		return new FormGroup<DeviceOptionsFormProperties>({
			CustomName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceProfileInfo {

		/** Gets or sets the identifier. */
		Id?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		Type?: DeviceProfileInfoType | null;
	}
	export interface DeviceProfileInfoFormProperties {

		/** Gets or sets the identifier. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<DeviceProfileInfoType | null | undefined>,
	}
	export function CreateDeviceProfileInfoFormGroup() {
		return new FormGroup<DeviceProfileInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DeviceProfileInfoType | null | undefined>(undefined),
		});

	}

	export enum DeviceProfileInfoType { System = 0, User = 1 }

	export enum DeviceProfileType { System = 0, User = 1 }


	/** Defines the display preferences for any item that supports them (usually Folders). */
	export interface DisplayPreferencesDto {

		/** Gets or sets the client. */
		Client?: string | null;

		/** Gets or sets the custom prefs. */
		CustomPrefs?: {[id: string]: string };

		/** Gets or sets the user id. */
		Id?: string | null;

		/** Gets or sets the index by. */
		IndexBy?: string | null;

		/** Gets or sets the height of the primary image. */
		PrimaryImageHeight?: number | null;

		/** Gets or sets the width of the primary image. */
		PrimaryImageWidth?: number | null;

		/** Gets or sets a value indicating whether [remember indexing]. */
		RememberIndexing?: boolean | null;

		/** Gets or sets a value indicating whether [remember sorting]. */
		RememberSorting?: boolean | null;

		/** An enum representing the axis that should be scrolled. */
		ScrollDirection?: DisplayPreferencesDtoScrollDirection | null;

		/** Gets or sets a value indicating whether to show backdrops on this item. */
		ShowBackdrop?: boolean | null;

		/** Gets or sets a value indicating whether [show sidebar]. */
		ShowSidebar?: boolean | null;

		/** Gets or sets the sort by. */
		SortBy?: string | null;

		/** An enum representing the sorting order. */
		SortOrder?: DisplayPreferencesDtoSortOrder | null;

		/** Gets or sets the type of the view. */
		ViewType?: string | null;
	}

	/** Defines the display preferences for any item that supports them (usually Folders). */
	export interface DisplayPreferencesDtoFormProperties {

		/** Gets or sets the client. */
		Client: FormControl<string | null | undefined>,

		/** Gets or sets the custom prefs. */
		CustomPrefs: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the user id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the index by. */
		IndexBy: FormControl<string | null | undefined>,

		/** Gets or sets the height of the primary image. */
		PrimaryImageHeight: FormControl<number | null | undefined>,

		/** Gets or sets the width of the primary image. */
		PrimaryImageWidth: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether [remember indexing]. */
		RememberIndexing: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [remember sorting]. */
		RememberSorting: FormControl<boolean | null | undefined>,

		/** An enum representing the axis that should be scrolled. */
		ScrollDirection: FormControl<DisplayPreferencesDtoScrollDirection | null | undefined>,

		/** Gets or sets a value indicating whether to show backdrops on this item. */
		ShowBackdrop: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [show sidebar]. */
		ShowSidebar: FormControl<boolean | null | undefined>,

		/** Gets or sets the sort by. */
		SortBy: FormControl<string | null | undefined>,

		/** An enum representing the sorting order. */
		SortOrder: FormControl<DisplayPreferencesDtoSortOrder | null | undefined>,

		/** Gets or sets the type of the view. */
		ViewType: FormControl<string | null | undefined>,
	}
	export function CreateDisplayPreferencesDtoFormGroup() {
		return new FormGroup<DisplayPreferencesDtoFormProperties>({
			Client: new FormControl<string | null | undefined>(undefined),
			CustomPrefs: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IndexBy: new FormControl<string | null | undefined>(undefined),
			PrimaryImageHeight: new FormControl<number | null | undefined>(undefined),
			PrimaryImageWidth: new FormControl<number | null | undefined>(undefined),
			RememberIndexing: new FormControl<boolean | null | undefined>(undefined),
			RememberSorting: new FormControl<boolean | null | undefined>(undefined),
			ScrollDirection: new FormControl<DisplayPreferencesDtoScrollDirection | null | undefined>(undefined),
			ShowBackdrop: new FormControl<boolean | null | undefined>(undefined),
			ShowSidebar: new FormControl<boolean | null | undefined>(undefined),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<DisplayPreferencesDtoSortOrder | null | undefined>(undefined),
			ViewType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DisplayPreferencesDtoScrollDirection { Horizontal = 0, Vertical = 1 }

	export enum DisplayPreferencesDtoSortOrder { Ascending = 0, Descending = 1 }

	export enum DlnaProfileType { Audio = 0, Video = 1, Photo = 2 }


	/** An enum that represents a day of the week, weekdays, weekends, or all days. */
	export enum DynamicDayOfWeek { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Everyday = 7, Weekday = 8, Weekend = 9 }

	export enum EncodingContext { Streaming = 0, Static = 1 }

	export interface EndPointInfo {
		IsInNetwork?: boolean | null;
		IsLocal?: boolean | null;
	}
	export interface EndPointInfoFormProperties {
		IsInNetwork: FormControl<boolean | null | undefined>,
		IsLocal: FormControl<boolean | null | undefined>,
	}
	export function CreateEndPointInfoFormGroup() {
		return new FormGroup<EndPointInfoFormProperties>({
			IsInNetwork: new FormControl<boolean | null | undefined>(undefined),
			IsLocal: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the external id information for serialization to the client. */
	export interface ExternalIdInfo {

		/** Gets or sets the unique key for this id. This key should be unique across all providers. */
		Key?: string | null;

		/** Gets or sets the display name of the external id provider (IE: IMDB, MusicBrainz, etc). */
		Name?: string | null;

		/** The specific media type of an MediaBrowser.Model.Providers.ExternalIdInfo. */
		Type?: ExternalIdInfoType | null;

		/** Gets or sets the URL format string. */
		UrlFormatString?: string | null;
	}

	/** Represents the external id information for serialization to the client. */
	export interface ExternalIdInfoFormProperties {

		/** Gets or sets the unique key for this id. This key should be unique across all providers. */
		Key: FormControl<string | null | undefined>,

		/** Gets or sets the display name of the external id provider (IE: IMDB, MusicBrainz, etc). */
		Name: FormControl<string | null | undefined>,

		/** The specific media type of an MediaBrowser.Model.Providers.ExternalIdInfo. */
		Type: FormControl<ExternalIdInfoType | null | undefined>,

		/** Gets or sets the URL format string. */
		UrlFormatString: FormControl<string | null | undefined>,
	}
	export function CreateExternalIdInfoFormGroup() {
		return new FormGroup<ExternalIdInfoFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ExternalIdInfoType | null | undefined>(undefined),
			UrlFormatString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalIdInfoType { Album = 0, AlbumArtist = 1, Artist = 2, BoxSet = 3, Episode = 4, Movie = 5, OtherArtist = 6, Person = 7, ReleaseGroup = 8, Season = 9, Series = 10, Track = 11 }


	/** The specific media type of an MediaBrowser.Model.Providers.ExternalIdInfo. */
	export enum ExternalIdMediaType { Album = 0, AlbumArtist = 1, Artist = 2, BoxSet = 3, Episode = 4, Movie = 5, OtherArtist = 6, Person = 7, ReleaseGroup = 8, Season = 9, Series = 10, Track = 11 }


	/** Enum describing the location of the FFmpeg tool. */
	export enum FFmpegLocation { NotFound = 0, SetByArgument = 1, Custom = 2, System = 3 }


	/** Class FileSystemEntryInfo. */
	export interface FileSystemEntryInfo {

		/** Gets the name. */
		Name?: string | null;

		/** Gets the path. */
		Path?: string | null;

		/** Enum FileSystemEntryType. */
		Type?: FileSystemEntryInfoType | null;
	}

	/** Class FileSystemEntryInfo. */
	export interface FileSystemEntryInfoFormProperties {

		/** Gets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets the path. */
		Path: FormControl<string | null | undefined>,

		/** Enum FileSystemEntryType. */
		Type: FormControl<FileSystemEntryInfoType | null | undefined>,
	}
	export function CreateFileSystemEntryInfoFormGroup() {
		return new FormGroup<FileSystemEntryInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<FileSystemEntryInfoType | null | undefined>(undefined),
		});

	}

	export enum FileSystemEntryInfoType { File = 0, Directory = 1, NetworkComputer = 2, NetworkShare = 3 }


	/** Enum FileSystemEntryType. */
	export enum FileSystemEntryType { File = 0, Directory = 1, NetworkComputer = 2, NetworkShare = 3 }


	/** Class FontFile. */
	export interface FontFile {

		/** Gets or sets the date created. */
		DateCreated?: Date | null;

		/** Gets or sets the date modified. */
		DateModified?: Date | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the size. */
		Size?: number | null;
	}

	/** Class FontFile. */
	export interface FontFileFormProperties {

		/** Gets or sets the date created. */
		DateCreated: FormControl<Date | null | undefined>,

		/** Gets or sets the date modified. */
		DateModified: FormControl<Date | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the size. */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateFontFileFormGroup() {
		return new FormGroup<FontFileFormProperties>({
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ForgotPasswordAction { ContactAdmin = 0, PinCode = 1, InNetworkRequired = 2 }


	/** Forgot Password request body DTO. */
	export interface ForgotPasswordDto {

		/**
		 * Gets or sets the entered username to have its password reset.
		 * Required
		 */
		EnteredUsername: string;
	}

	/** Forgot Password request body DTO. */
	export interface ForgotPasswordDtoFormProperties {

		/**
		 * Gets or sets the entered username to have its password reset.
		 * Required
		 */
		EnteredUsername: FormControl<string | null | undefined>,
	}
	export function CreateForgotPasswordDtoFormGroup() {
		return new FormGroup<ForgotPasswordDtoFormProperties>({
			EnteredUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ForgotPasswordResult {
		Action?: ForgotPasswordAction | null;

		/** Gets or sets the pin expiration date. */
		PinExpirationDate?: Date | null;

		/** Gets or sets the pin file. */
		PinFile?: string | null;
	}
	export interface ForgotPasswordResultFormProperties {
		Action: FormControl<ForgotPasswordAction | null | undefined>,

		/** Gets or sets the pin expiration date. */
		PinExpirationDate: FormControl<Date | null | undefined>,

		/** Gets or sets the pin file. */
		PinFile: FormControl<string | null | undefined>,
	}
	export function CreateForgotPasswordResultFormGroup() {
		return new FormGroup<ForgotPasswordResultFormProperties>({
			Action: new FormControl<ForgotPasswordAction | null | undefined>(undefined),
			PinExpirationDate: new FormControl<Date | null | undefined>(undefined),
			PinFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeneralCommand {
		Arguments?: {[id: string]: string };
		ControllingUserId?: string | null;

		/** This exists simply to identify a set of known commands. */
		Name?: GeneralCommandType | null;
	}
	export interface GeneralCommandFormProperties {
		Arguments: FormControl<{[id: string]: string } | null | undefined>,
		ControllingUserId: FormControl<string | null | undefined>,

		/** This exists simply to identify a set of known commands. */
		Name: FormControl<GeneralCommandType | null | undefined>,
	}
	export function CreateGeneralCommandFormGroup() {
		return new FormGroup<GeneralCommandFormProperties>({
			Arguments: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ControllingUserId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<GeneralCommandType | null | undefined>(undefined),
		});

	}


	/** Get programs dto. */
	export interface GetProgramsDto {

		/** Gets or sets the channels to return guide information for. */
		ChannelIds?: Array<string>;

		/**
		 * Gets or sets the image types to include in the output.
		 * Optional.
		 */
		EnableImageTypes?: Array<ImageType>;

		/**
		 * Gets or sets include image information in output.
		 * Optional.
		 */
		EnableImages?: boolean | null;

		/** Gets or sets a value indicating whether retrieve total record count. */
		EnableTotalRecordCount?: boolean | null;

		/**
		 * Gets or sets include user data.
		 * Optional.
		 */
		EnableUserData?: boolean | null;

		/**
		 * Gets or sets specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
		 * Optional.
		 */
		Fields?: Array<ItemFields>;

		/** Gets or sets the genre ids to return guide information for. */
		GenreIds?: Array<string>;

		/** Gets or sets the genres to return guide information for. */
		Genres?: Array<string>;

		/**
		 * Gets or sets filter by programs that have completed airing, or not.
		 * Optional.
		 */
		HasAired?: boolean | null;

		/**
		 * Gets or sets the max number of images to return, per image type.
		 * Optional.
		 */
		ImageTypeLimit?: number | null;

		/**
		 * Gets or sets filter by programs that are currently airing, or not.
		 * Optional.
		 */
		IsAiring?: boolean | null;

		/**
		 * Gets or sets filter for kids.
		 * Optional.
		 */
		IsKids?: boolean | null;

		/**
		 * Gets or sets filter for movies.
		 * Optional.
		 */
		IsMovie?: boolean | null;

		/**
		 * Gets or sets filter for news.
		 * Optional.
		 */
		IsNews?: boolean | null;

		/**
		 * Gets or sets filter for series.
		 * Optional.
		 */
		IsSeries?: boolean | null;

		/**
		 * Gets or sets filter for sports.
		 * Optional.
		 */
		IsSports?: boolean | null;

		/**
		 * Gets or sets filter by library series id.
		 * Optional.
		 */
		LibrarySeriesId?: string | null;

		/**
		 * Gets or sets the maximum number of records to return.
		 * Optional.
		 */
		Limit?: number | null;

		/**
		 * Gets or sets the maximum premiere end date.
		 * Optional.
		 */
		MaxEndDate?: Date | null;

		/**
		 * Gets or sets the maximum premiere start date.
		 * Optional.
		 */
		MaxStartDate?: Date | null;

		/**
		 * Gets or sets the minimum premiere end date.
		 * Optional.
		 */
		MinEndDate?: Date | null;

		/**
		 * Gets or sets the minimum premiere start date.
		 * Optional.
		 */
		MinStartDate?: Date | null;

		/**
		 * Gets or sets filter by series timer id.
		 * Optional.
		 */
		SeriesTimerId?: string | null;

		/**
		 * Gets or sets specify one or more sort orders, comma delimited. Options: Name, StartDate.
		 * Optional.
		 */
		SortBy?: string | null;

		/** Gets or sets sort Order - Ascending,Descending. */
		SortOrder?: string | null;

		/**
		 * Gets or sets the record index to start at. All items with a lower index will be dropped from the results.
		 * Optional.
		 */
		StartIndex?: number | null;

		/** Gets or sets optional. Filter by user id. */
		UserId?: string | null;
	}

	/** Get programs dto. */
	export interface GetProgramsDtoFormProperties {

		/**
		 * Gets or sets include image information in output.
		 * Optional.
		 */
		EnableImages: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether retrieve total record count. */
		EnableTotalRecordCount: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets include user data.
		 * Optional.
		 */
		EnableUserData: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets filter by programs that have completed airing, or not.
		 * Optional.
		 */
		HasAired: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets the max number of images to return, per image type.
		 * Optional.
		 */
		ImageTypeLimit: FormControl<number | null | undefined>,

		/**
		 * Gets or sets filter by programs that are currently airing, or not.
		 * Optional.
		 */
		IsAiring: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets filter for kids.
		 * Optional.
		 */
		IsKids: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets filter for movies.
		 * Optional.
		 */
		IsMovie: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets filter for news.
		 * Optional.
		 */
		IsNews: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets filter for series.
		 * Optional.
		 */
		IsSeries: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets filter for sports.
		 * Optional.
		 */
		IsSports: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets filter by library series id.
		 * Optional.
		 */
		LibrarySeriesId: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the maximum number of records to return.
		 * Optional.
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Gets or sets the maximum premiere end date.
		 * Optional.
		 */
		MaxEndDate: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the maximum premiere start date.
		 * Optional.
		 */
		MaxStartDate: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the minimum premiere end date.
		 * Optional.
		 */
		MinEndDate: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the minimum premiere start date.
		 * Optional.
		 */
		MinStartDate: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets filter by series timer id.
		 * Optional.
		 */
		SeriesTimerId: FormControl<string | null | undefined>,

		/**
		 * Gets or sets specify one or more sort orders, comma delimited. Options: Name, StartDate.
		 * Optional.
		 */
		SortBy: FormControl<string | null | undefined>,

		/** Gets or sets sort Order - Ascending,Descending. */
		SortOrder: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the record index to start at. All items with a lower index will be dropped from the results.
		 * Optional.
		 */
		StartIndex: FormControl<number | null | undefined>,

		/** Gets or sets optional. Filter by user id. */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateGetProgramsDtoFormGroup() {
		return new FormGroup<GetProgramsDtoFormProperties>({
			EnableImages: new FormControl<boolean | null | undefined>(undefined),
			EnableTotalRecordCount: new FormControl<boolean | null | undefined>(undefined),
			EnableUserData: new FormControl<boolean | null | undefined>(undefined),
			HasAired: new FormControl<boolean | null | undefined>(undefined),
			ImageTypeLimit: new FormControl<number | null | undefined>(undefined),
			IsAiring: new FormControl<boolean | null | undefined>(undefined),
			IsKids: new FormControl<boolean | null | undefined>(undefined),
			IsMovie: new FormControl<boolean | null | undefined>(undefined),
			IsNews: new FormControl<boolean | null | undefined>(undefined),
			IsSeries: new FormControl<boolean | null | undefined>(undefined),
			IsSports: new FormControl<boolean | null | undefined>(undefined),
			LibrarySeriesId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			MaxEndDate: new FormControl<Date | null | undefined>(undefined),
			MaxStartDate: new FormControl<Date | null | undefined>(undefined),
			MinEndDate: new FormControl<Date | null | undefined>(undefined),
			MinStartDate: new FormControl<Date | null | undefined>(undefined),
			SeriesTimerId: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<string | null | undefined>(undefined),
			StartIndex: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum ImageType. */
	export enum ImageType { Primary = 0, Art = 1, Backdrop = 2, Banner = 3, Logo = 4, Thumb = 5, Disc = 6, Box = 7, Screenshot = 8, Menu = 9, Chapter = 10, BoxRear = 11, Profile = 12 }


	/** Used to control the data that gets attached to DtoBaseItems. */
	export enum ItemFields { AirTime = 0, CanDelete = 1, CanDownload = 2, ChannelInfo = 3, Chapters = 4, ChildCount = 5, CumulativeRunTimeTicks = 6, CustomRating = 7, DateCreated = 8, DateLastMediaAdded = 9, DisplayPreferencesId = 10, Etag = 11, ExternalUrls = 12, Genres = 13, HomePageUrl = 14, ItemCounts = 15, MediaSourceCount = 16, MediaSources = 17, OriginalTitle = 18, Overview = 19, ParentId = 20, Path = 21, People = 22, PlayAccess = 23, ProductionLocations = 24, ProviderIds = 25, PrimaryImageAspectRatio = 26, RecursiveItemCount = 27, Settings = 28, ScreenshotImageTags = 29, SeriesPrimaryImage = 30, SeriesStudio = 31, SortName = 32, SpecialEpisodeNumbers = 33, Studios = 34, BasicSyncInfo = 35, SyncInfo = 36, Taglines = 37, Tags = 38, RemoteTrailers = 39, MediaStreams = 40, SeasonUserData = 41, ServiceName = 42, ThemeSongIds = 43, ThemeVideoIds = 44, ExternalEtag = 45, PresentationUniqueKey = 46, InheritedParentalRatingValue = 47, ExternalSeriesId = 48, SeriesPresentationUniqueKey = 49, DateLastRefreshed = 50, DateLastSaved = 51, RefreshState = 52, ChannelImage = 53, EnableMediaSourceDisplay = 54, Width = 55, Height = 56, ExtraIds = 57, LocalTrailerCount = 58, IsHD = 59, SpecialFeatureCount = 60 }


	/** Class GroupInfoDto. */
	export interface GroupInfoDto {

		/** Gets the group identifier. */
		GroupId?: string | null;

		/** Gets the group name. */
		GroupName?: string | null;

		/** Gets the date when this DTO has been created. */
		LastUpdatedAt?: Date | null;

		/** Gets the participants. */
		Participants?: Array<string>;

		/** Enum GroupState. */
		State?: GroupInfoDtoState | null;
	}

	/** Class GroupInfoDto. */
	export interface GroupInfoDtoFormProperties {

		/** Gets the group identifier. */
		GroupId: FormControl<string | null | undefined>,

		/** Gets the group name. */
		GroupName: FormControl<string | null | undefined>,

		/** Gets the date when this DTO has been created. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/** Enum GroupState. */
		State: FormControl<GroupInfoDtoState | null | undefined>,
	}
	export function CreateGroupInfoDtoFormGroup() {
		return new FormGroup<GroupInfoDtoFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<GroupInfoDtoState | null | undefined>(undefined),
		});

	}

	export enum GroupInfoDtoState { Idle = 0, Waiting = 1, Paused = 2, Playing = 3 }


	/** Enum GroupQueueMode. */
	export enum GroupQueueMode { Queue = 0, QueueNext = 1 }


	/** Enum GroupRepeatMode. */
	export enum GroupRepeatMode { RepeatOne = 0, RepeatAll = 1, RepeatNone = 2 }


	/** Enum GroupShuffleMode. */
	export enum GroupShuffleMode { Sorted = 0, Shuffle = 1 }


	/** Enum GroupState. */
	export enum GroupStateType { Idle = 0, Waiting = 1, Paused = 2, Playing = 3 }


	/** Enum GroupUpdateType. */
	export enum GroupUpdateType { UserJoined = 0, UserLeft = 1, GroupJoined = 2, GroupLeft = 3, StateUpdate = 4, PlayQueue = 5, NotInGroup = 6, GroupDoesNotExist = 7, CreateGroupDenied = 8, JoinGroupDenied = 9, LibraryAccessDenied = 10 }

	export interface GuideInfo {

		/** Gets or sets the end date. */
		EndDate?: Date | null;

		/** Gets or sets the start date. */
		StartDate?: Date | null;
	}
	export interface GuideInfoFormProperties {

		/** Gets or sets the end date. */
		EndDate: FormControl<Date | null | undefined>,

		/** Gets or sets the start date. */
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreateGuideInfoFormGroup() {
		return new FormGroup<GuideInfoFormProperties>({
			EndDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum HeaderMatchType { Equals = 0, Regex = 1, Substring = 2 }


	/** Defines the MediaBrowser.Common.Plugins.IPlugin. */
	export interface IPlugin {

		/** Gets the path to the assembly file. */
		AssemblyFilePath?: string | null;

		/** Gets a value indicating whether the plugin can be uninstalled. */
		CanUninstall?: boolean | null;

		/** Gets the full path to the data folder, where the plugin can store any miscellaneous files needed. */
		DataFolderPath?: string | null;

		/** Gets the Description. */
		Description?: string | null;

		/** Gets the unique id. */
		Id?: string | null;

		/** Gets the name of the plugin. */
		Name?: string | null;
		Version?: Version;
	}

	/** Defines the MediaBrowser.Common.Plugins.IPlugin. */
	export interface IPluginFormProperties {

		/** Gets the path to the assembly file. */
		AssemblyFilePath: FormControl<string | null | undefined>,

		/** Gets a value indicating whether the plugin can be uninstalled. */
		CanUninstall: FormControl<boolean | null | undefined>,

		/** Gets the full path to the data folder, where the plugin can store any miscellaneous files needed. */
		DataFolderPath: FormControl<string | null | undefined>,

		/** Gets the Description. */
		Description: FormControl<string | null | undefined>,

		/** Gets the unique id. */
		Id: FormControl<string | null | undefined>,

		/** Gets the name of the plugin. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIPluginFormGroup() {
		return new FormGroup<IPluginFormProperties>({
			AssemblyFilePath: new FormControl<string | null | undefined>(undefined),
			CanUninstall: new FormControl<boolean | null | undefined>(undefined),
			DataFolderPath: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Version {
		Build?: number | null;
		Major?: number | null;
		MajorRevision?: number | null;
		Minor?: number | null;
		MinorRevision?: number | null;
		Revision?: number | null;
	}
	export interface VersionFormProperties {
		Build: FormControl<number | null | undefined>,
		Major: FormControl<number | null | undefined>,
		MajorRevision: FormControl<number | null | undefined>,
		Minor: FormControl<number | null | undefined>,
		MinorRevision: FormControl<number | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			Build: new FormControl<number | null | undefined>(undefined),
			Major: new FormControl<number | null | undefined>(undefined),
			MajorRevision: new FormControl<number | null | undefined>(undefined),
			Minor: new FormControl<number | null | undefined>(undefined),
			MinorRevision: new FormControl<number | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class IgnoreWaitRequestDto. */
	export interface IgnoreWaitRequestDto {

		/** Gets or sets a value indicating whether the client should be ignored. */
		IgnoreWait?: boolean | null;
	}

	/** Class IgnoreWaitRequestDto. */
	export interface IgnoreWaitRequestDtoFormProperties {

		/** Gets or sets a value indicating whether the client should be ignored. */
		IgnoreWait: FormControl<boolean | null | undefined>,
	}
	export function CreateIgnoreWaitRequestDtoFormGroup() {
		return new FormGroup<IgnoreWaitRequestDtoFormProperties>({
			IgnoreWait: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ImageByNameInfo {

		/** Gets or sets the context. */
		Context?: string | null;

		/** Gets or sets the length of the file. */
		FileLength?: number | null;

		/** Gets or sets the format. */
		Format?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the theme. */
		Theme?: string | null;
	}
	export interface ImageByNameInfoFormProperties {

		/** Gets or sets the context. */
		Context: FormControl<string | null | undefined>,

		/** Gets or sets the length of the file. */
		FileLength: FormControl<number | null | undefined>,

		/** Gets or sets the format. */
		Format: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the theme. */
		Theme: FormControl<string | null | undefined>,
	}
	export function CreateImageByNameInfoFormGroup() {
		return new FormGroup<ImageByNameInfoFormProperties>({
			Context: new FormControl<string | null | undefined>(undefined),
			FileLength: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Theme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum ImageOutputFormat. */
	export enum ImageFormat { Bmp = 0, Gif = 1, Jpg = 2, Png = 3, Webp = 4 }


	/** Class ImageInfo. */
	export interface ImageInfo {

		/** Gets or sets the blurhash. */
		BlurHash?: string | null;

		/** Gets or sets the height. */
		Height?: number | null;

		/** Gets or sets the index of the image. */
		ImageIndex?: number | null;

		/** Gets or sets the image tag. */
		ImageTag?: string | null;

		/** Enum ImageType. */
		ImageType?: ImageOptionType | null;

		/** Gets or sets the path. */
		Path?: string | null;

		/** Gets or sets the size. */
		Size?: number | null;

		/** Gets or sets the width. */
		Width?: number | null;
	}

	/** Class ImageInfo. */
	export interface ImageInfoFormProperties {

		/** Gets or sets the blurhash. */
		BlurHash: FormControl<string | null | undefined>,

		/** Gets or sets the height. */
		Height: FormControl<number | null | undefined>,

		/** Gets or sets the index of the image. */
		ImageIndex: FormControl<number | null | undefined>,

		/** Gets or sets the image tag. */
		ImageTag: FormControl<string | null | undefined>,

		/** Enum ImageType. */
		ImageType: FormControl<ImageOptionType | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,

		/** Gets or sets the size. */
		Size: FormControl<number | null | undefined>,

		/** Gets or sets the width. */
		Width: FormControl<number | null | undefined>,
	}
	export function CreateImageInfoFormGroup() {
		return new FormGroup<ImageInfoFormProperties>({
			BlurHash: new FormControl<string | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			ImageIndex: new FormControl<number | null | undefined>(undefined),
			ImageTag: new FormControl<string | null | undefined>(undefined),
			ImageType: new FormControl<ImageOptionType | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImageOrientation { TopLeft = 0, TopRight = 1, BottomRight = 2, BottomLeft = 3, LeftTop = 4, RightTop = 5, RightBottom = 6, LeftBottom = 7 }


	/** Class ImageProviderInfo. */
	export interface ImageProviderInfo {

		/** Gets the name. */
		Name?: string | null;

		/** Gets the supported image types. */
		SupportedImages?: Array<ImageType>;
	}

	/** Class ImageProviderInfo. */
	export interface ImageProviderInfoFormProperties {

		/** Gets the name. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateImageProviderInfoFormGroup() {
		return new FormGroup<ImageProviderInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageSavingConvention { Legacy = 0, Compatible = 1 }


	/** Class InstallationInfo. */
	export interface InstallationInfo {

		/** Gets or sets the changelog for this version. */
		Changelog?: string | null;

		/** Gets or sets a checksum for the binary. */
		Checksum?: string | null;

		/** Gets or sets the Id. */
		Guid?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the source URL. */
		SourceUrl?: string | null;
		Version?: Version;
	}

	/** Class InstallationInfo. */
	export interface InstallationInfoFormProperties {

		/** Gets or sets the changelog for this version. */
		Changelog: FormControl<string | null | undefined>,

		/** Gets or sets a checksum for the binary. */
		Checksum: FormControl<string | null | undefined>,

		/** Gets or sets the Id. */
		Guid: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the source URL. */
		SourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateInstallationInfoFormGroup() {
		return new FormGroup<InstallationInfoFormProperties>({
			Changelog: new FormControl<string | null | undefined>(undefined),
			Checksum: new FormControl<string | null | undefined>(undefined),
			Guid: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum IsoType. */
	export enum IsoType { Dvd = 0, BluRay = 1 }


	/** Class LibrarySummary. */
	export interface ItemCounts {

		/** Gets or sets the album count. */
		AlbumCount?: number | null;

		/** Gets or sets the artist count. */
		ArtistCount?: number | null;

		/** Gets or sets the book count. */
		BookCount?: number | null;

		/** Gets or sets the box set count. */
		BoxSetCount?: number | null;

		/** Gets or sets the episode count. */
		EpisodeCount?: number | null;

		/** Gets or sets the item count. */
		ItemCount?: number | null;

		/** Gets or sets the movie count. */
		MovieCount?: number | null;

		/** Gets or sets the music video count. */
		MusicVideoCount?: number | null;

		/** Gets or sets the program count. */
		ProgramCount?: number | null;

		/** Gets or sets the series count. */
		SeriesCount?: number | null;

		/** Gets or sets the song count. */
		SongCount?: number | null;

		/** Gets or sets the trailer count. */
		TrailerCount?: number | null;
	}

	/** Class LibrarySummary. */
	export interface ItemCountsFormProperties {

		/** Gets or sets the album count. */
		AlbumCount: FormControl<number | null | undefined>,

		/** Gets or sets the artist count. */
		ArtistCount: FormControl<number | null | undefined>,

		/** Gets or sets the book count. */
		BookCount: FormControl<number | null | undefined>,

		/** Gets or sets the box set count. */
		BoxSetCount: FormControl<number | null | undefined>,

		/** Gets or sets the episode count. */
		EpisodeCount: FormControl<number | null | undefined>,

		/** Gets or sets the item count. */
		ItemCount: FormControl<number | null | undefined>,

		/** Gets or sets the movie count. */
		MovieCount: FormControl<number | null | undefined>,

		/** Gets or sets the music video count. */
		MusicVideoCount: FormControl<number | null | undefined>,

		/** Gets or sets the program count. */
		ProgramCount: FormControl<number | null | undefined>,

		/** Gets or sets the series count. */
		SeriesCount: FormControl<number | null | undefined>,

		/** Gets or sets the song count. */
		SongCount: FormControl<number | null | undefined>,

		/** Gets or sets the trailer count. */
		TrailerCount: FormControl<number | null | undefined>,
	}
	export function CreateItemCountsFormGroup() {
		return new FormGroup<ItemCountsFormProperties>({
			AlbumCount: new FormControl<number | null | undefined>(undefined),
			ArtistCount: new FormControl<number | null | undefined>(undefined),
			BookCount: new FormControl<number | null | undefined>(undefined),
			BoxSetCount: new FormControl<number | null | undefined>(undefined),
			EpisodeCount: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			MovieCount: new FormControl<number | null | undefined>(undefined),
			MusicVideoCount: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			SeriesCount: new FormControl<number | null | undefined>(undefined),
			SongCount: new FormControl<number | null | undefined>(undefined),
			TrailerCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Enum ItemFilter. */
	export enum ItemFilter { IsFolder = 0, IsNotFolder = 1, IsUnplayed = 2, IsPlayed = 3, IsFavorite = 4, IsResumable = 5, Likes = 6, Dislikes = 7, IsFavoriteOrLikes = 8 }


	/** Class JoinGroupRequestDto. */
	export interface JoinGroupRequestDto {

		/** Gets or sets the group identifier. */
		GroupId?: string | null;
	}

	/** Class JoinGroupRequestDto. */
	export interface JoinGroupRequestDtoFormProperties {

		/** Gets or sets the group identifier. */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateJoinGroupRequestDtoFormGroup() {
		return new FormGroup<JoinGroupRequestDtoFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeepUntil { UntilDeleted = 0, UntilSpaceNeeded = 1, UntilWatched = 2, UntilDate = 3 }


	/** Library option info dto. */
	export interface LibraryOptionInfoDto {

		/** Gets or sets a value indicating whether default enabled. */
		DefaultEnabled?: boolean | null;

		/** Gets or sets name. */
		Name?: string | null;
	}

	/** Library option info dto. */
	export interface LibraryOptionInfoDtoFormProperties {

		/** Gets or sets a value indicating whether default enabled. */
		DefaultEnabled: FormControl<boolean | null | undefined>,

		/** Gets or sets name. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLibraryOptionInfoDtoFormGroup() {
		return new FormGroup<LibraryOptionInfoDtoFormProperties>({
			DefaultEnabled: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Library options result dto. */
	export interface LibraryOptionsResultDto {

		/** Gets or sets the metadata readers. */
		MetadataReaders?: Array<LibraryOptionInfoDto>;

		/** Gets or sets the metadata savers. */
		MetadataSavers?: Array<LibraryOptionInfoDto>;

		/** Gets or sets the subtitle fetchers. */
		SubtitleFetchers?: Array<LibraryOptionInfoDto>;

		/** Gets or sets the type options. */
		TypeOptions?: Array<LibraryTypeOptionsDto>;
	}

	/** Library options result dto. */
	export interface LibraryOptionsResultDtoFormProperties {
	}
	export function CreateLibraryOptionsResultDtoFormGroup() {
		return new FormGroup<LibraryOptionsResultDtoFormProperties>({
		});

	}


	/** Library type options dto. */
	export interface LibraryTypeOptionsDto {

		/** Gets or sets the default image options. */
		DefaultImageOptions?: Array<ImageOption>;

		/** Gets or sets the image fetchers. */
		ImageFetchers?: Array<LibraryOptionInfoDto>;

		/** Gets or sets the metadata fetchers. */
		MetadataFetchers?: Array<LibraryOptionInfoDto>;

		/** Gets or sets the supported image types. */
		SupportedImageTypes?: Array<ImageType>;

		/** Gets or sets the type. */
		Type?: string | null;
	}

	/** Library type options dto. */
	export interface LibraryTypeOptionsDtoFormProperties {

		/** Gets or sets the type. */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateLibraryTypeOptionsDtoFormGroup() {
		return new FormGroup<LibraryTypeOptionsDtoFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class LibraryUpdateInfo. */
	export interface LibraryUpdateInfo {
		CollectionFolders?: Array<string>;

		/** Gets or sets the folders added to. */
		FoldersAddedTo?: Array<string>;

		/** Gets or sets the folders removed from. */
		FoldersRemovedFrom?: Array<string>;
		IsEmpty?: boolean | null;

		/** Gets or sets the items added. */
		ItemsAdded?: Array<string>;

		/** Gets or sets the items removed. */
		ItemsRemoved?: Array<string>;

		/** Gets or sets the items updated. */
		ItemsUpdated?: Array<string>;
	}

	/** Class LibraryUpdateInfo. */
	export interface LibraryUpdateInfoFormProperties {
		IsEmpty: FormControl<boolean | null | undefined>,
	}
	export function CreateLibraryUpdateInfoFormGroup() {
		return new FormGroup<LibraryUpdateInfoFormProperties>({
			IsEmpty: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListingsProviderInfo {
		ChannelMappings?: Array<NameValuePair>;
		Country?: string | null;
		EnableAllTuners?: boolean | null;
		EnabledTuners?: Array<string>;
		Id?: string | null;
		KidsCategories?: Array<string>;
		ListingsId?: string | null;
		MovieCategories?: Array<string>;
		MoviePrefix?: string | null;
		NewsCategories?: Array<string>;
		Password?: string | null;
		Path?: string | null;
		PreferredLanguage?: string | null;
		SportsCategories?: Array<string>;
		Type?: string | null;
		UserAgent?: string | null;
		Username?: string | null;
		ZipCode?: string | null;
	}
	export interface ListingsProviderInfoFormProperties {
		Country: FormControl<string | null | undefined>,
		EnableAllTuners: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ListingsId: FormControl<string | null | undefined>,
		MoviePrefix: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		PreferredLanguage: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		UserAgent: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		ZipCode: FormControl<string | null | undefined>,
	}
	export function CreateListingsProviderInfoFormGroup() {
		return new FormGroup<ListingsProviderInfoFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined),
			EnableAllTuners: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ListingsId: new FormControl<string | null | undefined>(undefined),
			MoviePrefix: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PreferredLanguage: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			UserAgent: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			ZipCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveStreamResponse {
		MediaSource?: MediaSourceInfo;
	}
	export interface LiveStreamResponseFormProperties {
	}
	export function CreateLiveStreamResponseFormGroup() {
		return new FormGroup<LiveStreamResponseFormProperties>({
		});

	}

	export interface LiveTvInfo {

		/** Gets or sets the enabled users. */
		EnabledUsers?: Array<string>;

		/** Gets or sets a value indicating whether this instance is enabled. */
		IsEnabled?: boolean | null;

		/** Gets or sets the services. */
		Services?: Array<LiveTvServiceInfo>;
	}
	export interface LiveTvInfoFormProperties {

		/** Gets or sets a value indicating whether this instance is enabled. */
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLiveTvInfoFormGroup() {
		return new FormGroup<LiveTvInfoFormProperties>({
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Class ServiceInfo. */
	export interface LiveTvServiceInfo {

		/** Gets or sets a value indicating whether this instance has update available. */
		HasUpdateAvailable?: boolean | null;

		/** Gets or sets the home page URL. */
		HomePageUrl?: string | null;

		/** Gets or sets a value indicating whether this instance is visible. */
		IsVisible?: boolean | null;

		/** Gets or sets the name. */
		Name?: string | null;
		Status?: LiveTvServiceInfoStatus | null;

		/** Gets or sets the status message. */
		StatusMessage?: string | null;
		Tuners?: Array<string>;

		/** Gets or sets the version. */
		Version?: string | null;
	}

	/** Class ServiceInfo. */
	export interface LiveTvServiceInfoFormProperties {

		/** Gets or sets a value indicating whether this instance has update available. */
		HasUpdateAvailable: FormControl<boolean | null | undefined>,

		/** Gets or sets the home page URL. */
		HomePageUrl: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether this instance is visible. */
		IsVisible: FormControl<boolean | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<LiveTvServiceInfoStatus | null | undefined>,

		/** Gets or sets the status message. */
		StatusMessage: FormControl<string | null | undefined>,

		/** Gets or sets the version. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateLiveTvServiceInfoFormGroup() {
		return new FormGroup<LiveTvServiceInfoFormProperties>({
			HasUpdateAvailable: new FormControl<boolean | null | undefined>(undefined),
			HomePageUrl: new FormControl<string | null | undefined>(undefined),
			IsVisible: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LiveTvServiceInfoStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LiveTvServiceInfoStatus { Ok = 0, Unavailable = 1 }

	export enum LiveTvServiceStatus { Ok = 0, Unavailable = 1 }

	export interface LocalizationOption {
		Name?: string | null;
		Value?: string | null;
	}
	export interface LocalizationOptionFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizationOptionFormGroup() {
		return new FormGroup<LocalizationOptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum LocationType. */
	export enum LocationType { FileSystem = 0, Remote = 1, Virtual = 2, Offline = 3 }

	export interface LogFile {

		/** Gets or sets the date created. */
		DateCreated?: Date | null;

		/** Gets or sets the date modified. */
		DateModified?: Date | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the size. */
		Size?: number | null;
	}
	export interface LogFileFormProperties {

		/** Gets or sets the date created. */
		DateCreated: FormControl<Date | null | undefined>,

		/** Gets or sets the date modified. */
		DateModified: FormControl<Date | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the size. */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateLogFileFormGroup() {
		return new FormGroup<LogFileFormProperties>({
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LogLevel { Trace = 0, Debug = 1, Information = 2, Warning = 3, Error = 4, Critical = 5, None = 6 }


	/** Media Encoder Path Dto. */
	export interface MediaEncoderPathDto {

		/** Gets or sets media encoder path. */
		Path?: string | null;

		/** Gets or sets media encoder path type. */
		PathType?: string | null;
	}

	/** Media Encoder Path Dto. */
	export interface MediaEncoderPathDtoFormProperties {

		/** Gets or sets media encoder path. */
		Path: FormControl<string | null | undefined>,

		/** Gets or sets media encoder path type. */
		PathType: FormControl<string | null | undefined>,
	}
	export function CreateMediaEncoderPathDtoFormGroup() {
		return new FormGroup<MediaEncoderPathDtoFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			PathType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Media Path dto. */
	export interface MediaPathDto {

		/**
		 * Gets or sets the name of the library.
		 * Required
		 */
		Name: string;

		/** Gets or sets the path to add. */
		Path?: string | null;
		PathInfo?: MediaPathInfo;
	}

	/** Media Path dto. */
	export interface MediaPathDtoFormProperties {

		/**
		 * Gets or sets the name of the library.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the path to add. */
		Path: FormControl<string | null | undefined>,
	}
	export function CreateMediaPathDtoFormGroup() {
		return new FormGroup<MediaPathDtoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MediaProtocol { File = 0, Http = 1, Rtmp = 2, Rtsp = 3, Udp = 4, Rtp = 5, Ftp = 6 }

	export enum MediaSourceType { Default = 0, Grouping = 1, Placeholder = 2 }


	/** Media Update Info Dto. */
	export interface MediaUpdateInfoDto {

		/** Gets or sets media path. */
		Path?: string | null;

		/**
		 * Gets or sets media update type.
		 * Created, Modified, Deleted.
		 */
		UpdateType?: string | null;
	}

	/** Media Update Info Dto. */
	export interface MediaUpdateInfoDtoFormProperties {

		/** Gets or sets media path. */
		Path: FormControl<string | null | undefined>,

		/**
		 * Gets or sets media update type.
		 * Created, Modified, Deleted.
		 */
		UpdateType: FormControl<string | null | undefined>,
	}
	export function CreateMediaUpdateInfoDtoFormGroup() {
		return new FormGroup<MediaUpdateInfoDtoFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			UpdateType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetadataEditorInfo {
		ContentType?: string | null;
		ContentTypeOptions?: Array<NameValuePair>;
		Countries?: Array<CountryInfo>;
		Cultures?: Array<CultureDto>;
		ExternalIdInfos?: Array<ExternalIdInfo>;
		ParentalRatingOptions?: Array<ParentalRating>;
	}
	export interface MetadataEditorInfoFormProperties {
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateMetadataEditorInfoFormGroup() {
		return new FormGroup<MetadataEditorInfoFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class ParentalRating. */
	export interface ParentalRating {

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the value. */
		Value?: number | null;
	}

	/** Class ParentalRating. */
	export interface ParentalRatingFormProperties {

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the value. */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateParentalRatingFormGroup() {
		return new FormGroup<ParentalRatingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class MetadataOptions. */
	export interface MetadataOptions {
		DisabledImageFetchers?: Array<string>;
		DisabledMetadataFetchers?: Array<string>;
		DisabledMetadataSavers?: Array<string>;
		ImageFetcherOrder?: Array<string>;
		ItemType?: string | null;
		LocalMetadataReaderOrder?: Array<string>;
		MetadataFetcherOrder?: Array<string>;
	}

	/** Class MetadataOptions. */
	export interface MetadataOptionsFormProperties {
		ItemType: FormControl<string | null | undefined>,
	}
	export function CreateMetadataOptionsFormGroup() {
		return new FormGroup<MetadataOptionsFormProperties>({
			ItemType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetadataRefreshMode { None = 0, ValidationOnly = 1, Default = 2, FullRefresh = 3 }


	/** Class MovePlaylistItemRequestDto. */
	export interface MovePlaylistItemRequestDto {

		/** Gets or sets the new position. */
		NewIndex?: number | null;

		/** Gets or sets the playlist identifier of the item. */
		PlaylistItemId?: string | null;
	}

	/** Class MovePlaylistItemRequestDto. */
	export interface MovePlaylistItemRequestDtoFormProperties {

		/** Gets or sets the new position. */
		NewIndex: FormControl<number | null | undefined>,

		/** Gets or sets the playlist identifier of the item. */
		PlaylistItemId: FormControl<string | null | undefined>,
	}
	export function CreateMovePlaylistItemRequestDtoFormGroup() {
		return new FormGroup<MovePlaylistItemRequestDtoFormProperties>({
			NewIndex: new FormControl<number | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MovieInfo {
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface MovieInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateMovieInfoFormGroup() {
		return new FormGroup<MovieInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MovieInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: MovieInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface MovieInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateMovieInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<MovieInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MusicVideoInfo {
		Artists?: Array<string>;
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface MusicVideoInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateMusicVideoInfoFormGroup() {
		return new FormGroup<MusicVideoInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MusicVideoInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: MusicVideoInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface MusicVideoInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateMusicVideoInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<MusicVideoInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class NewGroupRequestDto. */
	export interface NewGroupRequestDto {

		/** Gets or sets the group name. */
		GroupName?: string | null;
	}

	/** Class NewGroupRequestDto. */
	export interface NewGroupRequestDtoFormProperties {

		/** Gets or sets the group name. */
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateNewGroupRequestDtoFormGroup() {
		return new FormGroup<NewGroupRequestDtoFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class NextItemRequestDto. */
	export interface NextItemRequestDto {

		/** Gets or sets the playing item identifier. */
		PlaylistItemId?: string | null;
	}

	/** Class NextItemRequestDto. */
	export interface NextItemRequestDtoFormProperties {

		/** Gets or sets the playing item identifier. */
		PlaylistItemId: FormControl<string | null | undefined>,
	}
	export function CreateNextItemRequestDtoFormGroup() {
		return new FormGroup<NextItemRequestDtoFormProperties>({
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The notification DTO. */
	export interface NotificationDto {

		/** Gets or sets the notification date. */
		Date?: Date | null;

		/** Gets or sets the notification's description. Defaults to an empty string. */
		Description?: string | null;

		/** Gets or sets the notification ID. Defaults to an empty string. */
		Id?: string | null;

		/** Gets or sets a value indicating whether the notification has been read. Defaults to false. */
		IsRead?: boolean | null;
		Level?: NotificationDtoLevel | null;

		/** Gets or sets the notification's name. Defaults to an empty string. */
		Name?: string | null;

		/** Gets or sets the notification's URL. Defaults to an empty string. */
		Url?: string | null;

		/** Gets or sets the notification's user ID. Defaults to an empty string. */
		UserId?: string | null;
	}

	/** The notification DTO. */
	export interface NotificationDtoFormProperties {

		/** Gets or sets the notification date. */
		Date: FormControl<Date | null | undefined>,

		/** Gets or sets the notification's description. Defaults to an empty string. */
		Description: FormControl<string | null | undefined>,

		/** Gets or sets the notification ID. Defaults to an empty string. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether the notification has been read. Defaults to false. */
		IsRead: FormControl<boolean | null | undefined>,
		Level: FormControl<NotificationDtoLevel | null | undefined>,

		/** Gets or sets the notification's name. Defaults to an empty string. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the notification's URL. Defaults to an empty string. */
		Url: FormControl<string | null | undefined>,

		/** Gets or sets the notification's user ID. Defaults to an empty string. */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateNotificationDtoFormGroup() {
		return new FormGroup<NotificationDtoFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsRead: new FormControl<boolean | null | undefined>(undefined),
			Level: new FormControl<NotificationDtoLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NotificationDtoLevel { Normal = 0, Warning = 1, Error = 2 }

	export enum NotificationLevel { Normal = 0, Warning = 1, Error = 2 }


	/** A list of notifications with the total record count for pagination. */
	export interface NotificationResultDto {

		/** Gets or sets the current page of notifications. */
		Notifications?: Array<NotificationDto>;

		/** Gets or sets the total number of notifications. */
		TotalRecordCount?: number | null;
	}

	/** A list of notifications with the total record count for pagination. */
	export interface NotificationResultDtoFormProperties {

		/** Gets or sets the total number of notifications. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateNotificationResultDtoFormGroup() {
		return new FormGroup<NotificationResultDtoFormProperties>({
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotificationTypeInfo {
		Category?: string | null;
		Enabled?: boolean | null;
		IsBasedOnUserEvent?: boolean | null;
		Name?: string | null;
		Type?: string | null;
	}
	export interface NotificationTypeInfoFormProperties {
		Category: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		IsBasedOnUserEvent: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateNotificationTypeInfoFormGroup() {
		return new FormGroup<NotificationTypeInfoFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			IsBasedOnUserEvent: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The notification summary DTO. */
	export interface NotificationsSummaryDto {
		MaxUnreadNotificationLevel?: NotificationDtoLevel | null;

		/** Gets or sets the number of unread notifications. */
		UnreadCount?: number | null;
	}

	/** The notification summary DTO. */
	export interface NotificationsSummaryDtoFormProperties {
		MaxUnreadNotificationLevel: FormControl<NotificationDtoLevel | null | undefined>,

		/** Gets or sets the number of unread notifications. */
		UnreadCount: FormControl<number | null | undefined>,
	}
	export function CreateNotificationsSummaryDtoFormGroup() {
		return new FormGroup<NotificationsSummaryDtoFormProperties>({
			MaxUnreadNotificationLevel: new FormControl<NotificationDtoLevel | null | undefined>(undefined),
			UnreadCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class GroupUpdate. */
	export interface ObjectGroupUpdate {

		/** Gets the update data. */
		Data?: any;

		/** Gets the group identifier. */
		GroupId?: string | null;

		/** Enum GroupUpdateType. */
		Type?: GroupUpdateType | null;
	}

	/** Class GroupUpdate. */
	export interface ObjectGroupUpdateFormProperties {

		/** Gets the update data. */
		Data: FormControl<any | null | undefined>,

		/** Gets the group identifier. */
		GroupId: FormControl<string | null | undefined>,

		/** Enum GroupUpdateType. */
		Type: FormControl<GroupUpdateType | null | undefined>,
	}
	export function CreateObjectGroupUpdateFormGroup() {
		return new FormGroup<ObjectGroupUpdateFormProperties>({
			Data: new FormControl<any | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<GroupUpdateType | null | undefined>(undefined),
		});

	}


	/** Open live stream dto. */
	export interface OpenLiveStreamDto {

		/** Gets or sets the audio stream index. */
		AudioStreamIndex?: number | null;

		/** Defines the MediaBrowser.Model.Dlna.DeviceProfile. */
		DeviceProfile?: DeviceProfile;

		/** Gets or sets the device play protocols. */
		DirectPlayProtocols?: Array<MediaProtocol>;

		/** Gets or sets a value indicating whether to enable direct play. */
		EnableDirectPlay?: boolean | null;

		/** Gets or sets a value indicating whether to enale direct stream. */
		EnableDirectStream?: boolean | null;

		/** Gets or sets the item id. */
		ItemId?: string | null;

		/** Gets or sets the max audio channels. */
		MaxAudioChannels?: number | null;

		/** Gets or sets the max streaming bitrate. */
		MaxStreamingBitrate?: number | null;

		/** Gets or sets the open token. */
		OpenToken?: string | null;

		/** Gets or sets the play session id. */
		PlaySessionId?: string | null;

		/** Gets or sets the start time in ticks. */
		StartTimeTicks?: number | null;

		/** Gets or sets the subtitle stream index. */
		SubtitleStreamIndex?: number | null;

		/** Gets or sets the user id. */
		UserId?: string | null;
	}

	/** Open live stream dto. */
	export interface OpenLiveStreamDtoFormProperties {

		/** Gets or sets the audio stream index. */
		AudioStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether to enable direct play. */
		EnableDirectPlay: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to enale direct stream. */
		EnableDirectStream: FormControl<boolean | null | undefined>,

		/** Gets or sets the item id. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the max audio channels. */
		MaxAudioChannels: FormControl<number | null | undefined>,

		/** Gets or sets the max streaming bitrate. */
		MaxStreamingBitrate: FormControl<number | null | undefined>,

		/** Gets or sets the open token. */
		OpenToken: FormControl<string | null | undefined>,

		/** Gets or sets the play session id. */
		PlaySessionId: FormControl<string | null | undefined>,

		/** Gets or sets the start time in ticks. */
		StartTimeTicks: FormControl<number | null | undefined>,

		/** Gets or sets the subtitle stream index. */
		SubtitleStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets the user id. */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateOpenLiveStreamDtoFormGroup() {
		return new FormGroup<OpenLiveStreamDtoFormProperties>({
			AudioStreamIndex: new FormControl<number | null | undefined>(undefined),
			EnableDirectPlay: new FormControl<boolean | null | undefined>(undefined),
			EnableDirectStream: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			MaxAudioChannels: new FormControl<number | null | undefined>(undefined),
			MaxStreamingBitrate: new FormControl<number | null | undefined>(undefined),
			OpenToken: new FormControl<string | null | undefined>(undefined),
			PlaySessionId: new FormControl<string | null | undefined>(undefined),
			StartTimeTicks: new FormControl<number | null | undefined>(undefined),
			SubtitleStreamIndex: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class PackageInfo. */
	export interface PackageInfo {

		/** Gets or sets the category. */
		category?: string | null;

		/** Gets or sets a long description of the plugin containing features or helpful explanations. */
		description?: string | null;

		/**
		 * Gets or sets the guid of the assembly associated with this plugin.
		 * This is used to identify the proper item for automatic updates.
		 */
		guid?: string | null;

		/** Gets or sets the image url for the package. */
		imageUrl?: string | null;

		/** Gets or sets the name. */
		name?: string | null;

		/** Gets or sets a short overview of what the plugin does. */
		overview?: string | null;

		/** Gets or sets the owner. */
		owner?: string | null;

		/** Gets or sets the versions. */
		versions?: Array<VersionInfo>;
	}

	/** Class PackageInfo. */
	export interface PackageInfoFormProperties {

		/** Gets or sets the category. */
		category: FormControl<string | null | undefined>,

		/** Gets or sets a long description of the plugin containing features or helpful explanations. */
		description: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the guid of the assembly associated with this plugin.
		 * This is used to identify the proper item for automatic updates.
		 */
		guid: FormControl<string | null | undefined>,

		/** Gets or sets the image url for the package. */
		imageUrl: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets a short overview of what the plugin does. */
		overview: FormControl<string | null | undefined>,

		/** Gets or sets the owner. */
		owner: FormControl<string | null | undefined>,
	}
	export function CreatePackageInfoFormGroup() {
		return new FormGroup<PackageInfoFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the MediaBrowser.Model.Updates.VersionInfo class. */
	export interface VersionInfo {
		VersionNumber?: Version;

		/** Gets or sets the changelog for this version. */
		changelog?: string | null;

		/** Gets or sets a checksum for the binary. */
		checksum?: string | null;

		/** Gets or sets the repository name. */
		repositoryName?: string | null;

		/** Gets or sets the repository url. */
		repositoryUrl?: string | null;

		/** Gets or sets the source URL. */
		sourceUrl?: string | null;

		/** Gets or sets the ABI that this version was built against. */
		targetAbi?: string | null;

		/** Gets or sets a timestamp of when the binary was built. */
		timestamp?: string | null;

		/** Gets or sets the version. */
		version?: string | null;
	}

	/** Defines the MediaBrowser.Model.Updates.VersionInfo class. */
	export interface VersionInfoFormProperties {

		/** Gets or sets the changelog for this version. */
		changelog: FormControl<string | null | undefined>,

		/** Gets or sets a checksum for the binary. */
		checksum: FormControl<string | null | undefined>,

		/** Gets or sets the repository name. */
		repositoryName: FormControl<string | null | undefined>,

		/** Gets or sets the repository url. */
		repositoryUrl: FormControl<string | null | undefined>,

		/** Gets or sets the source URL. */
		sourceUrl: FormControl<string | null | undefined>,

		/** Gets or sets the ABI that this version was built against. */
		targetAbi: FormControl<string | null | undefined>,

		/** Gets or sets a timestamp of when the binary was built. */
		timestamp: FormControl<string | null | undefined>,

		/** Gets or sets the version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVersionInfoFormGroup() {
		return new FormGroup<VersionInfoFormProperties>({
			changelog: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryUrl: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			targetAbi: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the MediaBrowser.Model.Configuration.PathSubstitution. */
	export interface PathSubstitution {

		/** Gets or sets the value to substitute. */
		From?: string | null;

		/** Gets or sets the value to substitution with. */
		To?: string | null;
	}

	/** Defines the MediaBrowser.Model.Configuration.PathSubstitution. */
	export interface PathSubstitutionFormProperties {

		/** Gets or sets the value to substitute. */
		From: FormControl<string | null | undefined>,

		/** Gets or sets the value to substitution with. */
		To: FormControl<string | null | undefined>,
	}
	export function CreatePathSubstitutionFormGroup() {
		return new FormGroup<PathSubstitutionFormProperties>({
			From: new FormControl<string | null | undefined>(undefined),
			To: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonLookupInfo {
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface PersonLookupInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreatePersonLookupInfoFormGroup() {
		return new FormGroup<PersonLookupInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PersonLookupInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: PersonLookupInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface PersonLookupInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreatePersonLookupInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<PersonLookupInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PinRedeemResult {

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Users.PinRedeemResult is success. */
		Success?: boolean | null;

		/** Gets or sets the users reset. */
		UsersReset?: Array<string>;
	}
	export interface PinRedeemResultFormProperties {

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Users.PinRedeemResult is success. */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreatePinRedeemResultFormGroup() {
		return new FormGroup<PinRedeemResultFormProperties>({
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Class PingRequestDto. */
	export interface PingRequestDto {

		/** Gets or sets the ping time. */
		Ping?: number | null;
	}

	/** Class PingRequestDto. */
	export interface PingRequestDtoFormProperties {

		/** Gets or sets the ping time. */
		Ping: FormControl<number | null | undefined>,
	}
	export function CreatePingRequestDtoFormGroup() {
		return new FormGroup<PingRequestDtoFormProperties>({
			Ping: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PlayAccess { Full = 0, None = 1 }


	/** Enum PlayCommand. */
	export enum PlayCommand { PlayNow = 0, PlayNext = 1, PlayLast = 2, PlayInstantMix = 3, PlayShuffle = 4 }

	export enum PlayMethod { Transcode = 0, DirectStream = 1, DirectPlay = 2 }


	/** Class PlayRequest. */
	export interface PlayRequest {
		AudioStreamIndex?: number | null;

		/** Gets or sets the controlling user identifier. */
		ControllingUserId?: string | null;

		/** Gets or sets the item ids. */
		ItemIds?: Array<string>;
		MediaSourceId?: string | null;

		/** Enum PlayCommand. */
		PlayCommand?: PlayCommand | null;
		StartIndex?: number | null;

		/** Gets or sets the start position ticks that the first item should be played at. */
		StartPositionTicks?: number | null;
		SubtitleStreamIndex?: number | null;
	}

	/** Class PlayRequest. */
	export interface PlayRequestFormProperties {
		AudioStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets the controlling user identifier. */
		ControllingUserId: FormControl<string | null | undefined>,
		MediaSourceId: FormControl<string | null | undefined>,

		/** Enum PlayCommand. */
		PlayCommand: FormControl<PlayCommand | null | undefined>,
		StartIndex: FormControl<number | null | undefined>,

		/** Gets or sets the start position ticks that the first item should be played at. */
		StartPositionTicks: FormControl<number | null | undefined>,
		SubtitleStreamIndex: FormControl<number | null | undefined>,
	}
	export function CreatePlayRequestFormGroup() {
		return new FormGroup<PlayRequestFormProperties>({
			AudioStreamIndex: new FormControl<number | null | undefined>(undefined),
			ControllingUserId: new FormControl<string | null | undefined>(undefined),
			MediaSourceId: new FormControl<string | null | undefined>(undefined),
			PlayCommand: new FormControl<PlayCommand | null | undefined>(undefined),
			StartIndex: new FormControl<number | null | undefined>(undefined),
			StartPositionTicks: new FormControl<number | null | undefined>(undefined),
			SubtitleStreamIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class PlayRequestDto. */
	export interface PlayRequestDto {

		/** Gets or sets the position of the playing item in the queue. */
		PlayingItemPosition?: number | null;

		/** Gets or sets the playing queue. */
		PlayingQueue?: Array<string>;

		/** Gets or sets the start position ticks. */
		StartPositionTicks?: number | null;
	}

	/** Class PlayRequestDto. */
	export interface PlayRequestDtoFormProperties {

		/** Gets or sets the position of the playing item in the queue. */
		PlayingItemPosition: FormControl<number | null | undefined>,

		/** Gets or sets the start position ticks. */
		StartPositionTicks: FormControl<number | null | undefined>,
	}
	export function CreatePlayRequestDtoFormGroup() {
		return new FormGroup<PlayRequestDtoFormProperties>({
			PlayingItemPosition: new FormControl<number | null | undefined>(undefined),
			StartPositionTicks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PlaybackErrorCode { NotAllowed = 0, NoCompatibleStream = 1, RateLimitExceeded = 2 }


	/** Plabyback info dto. */
	export interface PlaybackInfoDto {

		/** Gets or sets a value indicating whether to allow audio stream copy. */
		AllowAudioStreamCopy?: boolean | null;

		/** Gets or sets a value indicating whether to enable video stream copy. */
		AllowVideoStreamCopy?: boolean | null;

		/** Gets or sets the audio stream index. */
		AudioStreamIndex?: number | null;

		/** Gets or sets a value indicating whether to auto open the live stream. */
		AutoOpenLiveStream?: boolean | null;

		/** Defines the MediaBrowser.Model.Dlna.DeviceProfile. */
		DeviceProfile?: DeviceProfile;

		/** Gets or sets a value indicating whether to enable direct play. */
		EnableDirectPlay?: boolean | null;

		/** Gets or sets a value indicating whether to enable direct stream. */
		EnableDirectStream?: boolean | null;

		/** Gets or sets a value indicating whether to enable transcoding. */
		EnableTranscoding?: boolean | null;

		/** Gets or sets the live stream id. */
		LiveStreamId?: string | null;

		/** Gets or sets the max audio channels. */
		MaxAudioChannels?: number | null;

		/** Gets or sets the max streaming bitrate. */
		MaxStreamingBitrate?: number | null;

		/** Gets or sets the media source id. */
		MediaSourceId?: string | null;

		/** Gets or sets the start time in ticks. */
		StartTimeTicks?: number | null;

		/** Gets or sets the subtitle stream index. */
		SubtitleStreamIndex?: number | null;

		/** Gets or sets the playback userId. */
		UserId?: string | null;
	}

	/** Plabyback info dto. */
	export interface PlaybackInfoDtoFormProperties {

		/** Gets or sets a value indicating whether to allow audio stream copy. */
		AllowAudioStreamCopy: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to enable video stream copy. */
		AllowVideoStreamCopy: FormControl<boolean | null | undefined>,

		/** Gets or sets the audio stream index. */
		AudioStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether to auto open the live stream. */
		AutoOpenLiveStream: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to enable direct play. */
		EnableDirectPlay: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to enable direct stream. */
		EnableDirectStream: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to enable transcoding. */
		EnableTranscoding: FormControl<boolean | null | undefined>,

		/** Gets or sets the live stream id. */
		LiveStreamId: FormControl<string | null | undefined>,

		/** Gets or sets the max audio channels. */
		MaxAudioChannels: FormControl<number | null | undefined>,

		/** Gets or sets the max streaming bitrate. */
		MaxStreamingBitrate: FormControl<number | null | undefined>,

		/** Gets or sets the media source id. */
		MediaSourceId: FormControl<string | null | undefined>,

		/** Gets or sets the start time in ticks. */
		StartTimeTicks: FormControl<number | null | undefined>,

		/** Gets or sets the subtitle stream index. */
		SubtitleStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets the playback userId. */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreatePlaybackInfoDtoFormGroup() {
		return new FormGroup<PlaybackInfoDtoFormProperties>({
			AllowAudioStreamCopy: new FormControl<boolean | null | undefined>(undefined),
			AllowVideoStreamCopy: new FormControl<boolean | null | undefined>(undefined),
			AudioStreamIndex: new FormControl<number | null | undefined>(undefined),
			AutoOpenLiveStream: new FormControl<boolean | null | undefined>(undefined),
			EnableDirectPlay: new FormControl<boolean | null | undefined>(undefined),
			EnableDirectStream: new FormControl<boolean | null | undefined>(undefined),
			EnableTranscoding: new FormControl<boolean | null | undefined>(undefined),
			LiveStreamId: new FormControl<string | null | undefined>(undefined),
			MaxAudioChannels: new FormControl<number | null | undefined>(undefined),
			MaxStreamingBitrate: new FormControl<number | null | undefined>(undefined),
			MediaSourceId: new FormControl<string | null | undefined>(undefined),
			StartTimeTicks: new FormControl<number | null | undefined>(undefined),
			SubtitleStreamIndex: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class PlaybackInfoResponse. */
	export interface PlaybackInfoResponse {
		ErrorCode?: PlaybackErrorCode | null;

		/** Gets or sets the media sources. */
		MediaSources?: Array<MediaSourceInfo>;

		/** Gets or sets the play session identifier. */
		PlaySessionId?: string | null;
	}

	/** Class PlaybackInfoResponse. */
	export interface PlaybackInfoResponseFormProperties {
		ErrorCode: FormControl<PlaybackErrorCode | null | undefined>,

		/** Gets or sets the play session identifier. */
		PlaySessionId: FormControl<string | null | undefined>,
	}
	export function CreatePlaybackInfoResponseFormGroup() {
		return new FormGroup<PlaybackInfoResponseFormProperties>({
			ErrorCode: new FormControl<PlaybackErrorCode | null | undefined>(undefined),
			PlaySessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class PlaybackProgressInfo. */
	export interface PlaybackProgressInfo {
		AspectRatio?: string | null;

		/** Gets or sets the index of the audio stream. */
		AudioStreamIndex?: number | null;
		Brightness?: number | null;

		/** Gets or sets a value indicating whether this instance can seek. */
		CanSeek?: boolean | null;

		/** Gets or sets a value indicating whether this instance is muted. */
		IsMuted?: boolean | null;

		/** Gets or sets a value indicating whether this instance is paused. */
		IsPaused?: boolean | null;

		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		Item?: BaseItemDto;

		/** Gets or sets the item identifier. */
		ItemId?: string | null;

		/** Gets or sets the live stream identifier. */
		LiveStreamId?: string | null;

		/** Gets or sets the media version identifier. */
		MediaSourceId?: string | null;
		NowPlayingQueue?: Array<QueueItem>;
		PlayMethod?: PlayerStateInfoPlayMethod | null;

		/** Gets or sets the play session identifier. */
		PlaySessionId?: string | null;
		PlaybackStartTimeTicks?: number | null;
		PlaylistItemId?: string | null;

		/** Gets or sets the position ticks. */
		PositionTicks?: number | null;
		RepeatMode?: PlayerStateInfoRepeatMode | null;

		/** Gets or sets the session id. */
		SessionId?: string | null;

		/** Gets or sets the index of the subtitle stream. */
		SubtitleStreamIndex?: number | null;

		/** Gets or sets the volume level. */
		VolumeLevel?: number | null;
	}

	/** Class PlaybackProgressInfo. */
	export interface PlaybackProgressInfoFormProperties {
		AspectRatio: FormControl<string | null | undefined>,

		/** Gets or sets the index of the audio stream. */
		AudioStreamIndex: FormControl<number | null | undefined>,
		Brightness: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this instance can seek. */
		CanSeek: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is muted. */
		IsMuted: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is paused. */
		IsPaused: FormControl<boolean | null | undefined>,

		/** Gets or sets the item identifier. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the live stream identifier. */
		LiveStreamId: FormControl<string | null | undefined>,

		/** Gets or sets the media version identifier. */
		MediaSourceId: FormControl<string | null | undefined>,
		PlayMethod: FormControl<PlayerStateInfoPlayMethod | null | undefined>,

		/** Gets or sets the play session identifier. */
		PlaySessionId: FormControl<string | null | undefined>,
		PlaybackStartTimeTicks: FormControl<number | null | undefined>,
		PlaylistItemId: FormControl<string | null | undefined>,

		/** Gets or sets the position ticks. */
		PositionTicks: FormControl<number | null | undefined>,
		RepeatMode: FormControl<PlayerStateInfoRepeatMode | null | undefined>,

		/** Gets or sets the session id. */
		SessionId: FormControl<string | null | undefined>,

		/** Gets or sets the index of the subtitle stream. */
		SubtitleStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets the volume level. */
		VolumeLevel: FormControl<number | null | undefined>,
	}
	export function CreatePlaybackProgressInfoFormGroup() {
		return new FormGroup<PlaybackProgressInfoFormProperties>({
			AspectRatio: new FormControl<string | null | undefined>(undefined),
			AudioStreamIndex: new FormControl<number | null | undefined>(undefined),
			Brightness: new FormControl<number | null | undefined>(undefined),
			CanSeek: new FormControl<boolean | null | undefined>(undefined),
			IsMuted: new FormControl<boolean | null | undefined>(undefined),
			IsPaused: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			LiveStreamId: new FormControl<string | null | undefined>(undefined),
			MediaSourceId: new FormControl<string | null | undefined>(undefined),
			PlayMethod: new FormControl<PlayerStateInfoPlayMethod | null | undefined>(undefined),
			PlaySessionId: new FormControl<string | null | undefined>(undefined),
			PlaybackStartTimeTicks: new FormControl<number | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			PositionTicks: new FormControl<number | null | undefined>(undefined),
			RepeatMode: new FormControl<PlayerStateInfoRepeatMode | null | undefined>(undefined),
			SessionId: new FormControl<string | null | undefined>(undefined),
			SubtitleStreamIndex: new FormControl<number | null | undefined>(undefined),
			VolumeLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class PlaybackStartInfo. */
	export interface PlaybackStartInfo {
		AspectRatio?: string | null;

		/** Gets or sets the index of the audio stream. */
		AudioStreamIndex?: number | null;
		Brightness?: number | null;

		/** Gets or sets a value indicating whether this instance can seek. */
		CanSeek?: boolean | null;

		/** Gets or sets a value indicating whether this instance is muted. */
		IsMuted?: boolean | null;

		/** Gets or sets a value indicating whether this instance is paused. */
		IsPaused?: boolean | null;

		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		Item?: BaseItemDto;

		/** Gets or sets the item identifier. */
		ItemId?: string | null;

		/** Gets or sets the live stream identifier. */
		LiveStreamId?: string | null;

		/** Gets or sets the media version identifier. */
		MediaSourceId?: string | null;
		NowPlayingQueue?: Array<QueueItem>;
		PlayMethod?: PlayerStateInfoPlayMethod | null;

		/** Gets or sets the play session identifier. */
		PlaySessionId?: string | null;
		PlaybackStartTimeTicks?: number | null;
		PlaylistItemId?: string | null;

		/** Gets or sets the position ticks. */
		PositionTicks?: number | null;
		RepeatMode?: PlayerStateInfoRepeatMode | null;

		/** Gets or sets the session id. */
		SessionId?: string | null;

		/** Gets or sets the index of the subtitle stream. */
		SubtitleStreamIndex?: number | null;

		/** Gets or sets the volume level. */
		VolumeLevel?: number | null;
	}

	/** Class PlaybackStartInfo. */
	export interface PlaybackStartInfoFormProperties {
		AspectRatio: FormControl<string | null | undefined>,

		/** Gets or sets the index of the audio stream. */
		AudioStreamIndex: FormControl<number | null | undefined>,
		Brightness: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether this instance can seek. */
		CanSeek: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is muted. */
		IsMuted: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is paused. */
		IsPaused: FormControl<boolean | null | undefined>,

		/** Gets or sets the item identifier. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the live stream identifier. */
		LiveStreamId: FormControl<string | null | undefined>,

		/** Gets or sets the media version identifier. */
		MediaSourceId: FormControl<string | null | undefined>,
		PlayMethod: FormControl<PlayerStateInfoPlayMethod | null | undefined>,

		/** Gets or sets the play session identifier. */
		PlaySessionId: FormControl<string | null | undefined>,
		PlaybackStartTimeTicks: FormControl<number | null | undefined>,
		PlaylistItemId: FormControl<string | null | undefined>,

		/** Gets or sets the position ticks. */
		PositionTicks: FormControl<number | null | undefined>,
		RepeatMode: FormControl<PlayerStateInfoRepeatMode | null | undefined>,

		/** Gets or sets the session id. */
		SessionId: FormControl<string | null | undefined>,

		/** Gets or sets the index of the subtitle stream. */
		SubtitleStreamIndex: FormControl<number | null | undefined>,

		/** Gets or sets the volume level. */
		VolumeLevel: FormControl<number | null | undefined>,
	}
	export function CreatePlaybackStartInfoFormGroup() {
		return new FormGroup<PlaybackStartInfoFormProperties>({
			AspectRatio: new FormControl<string | null | undefined>(undefined),
			AudioStreamIndex: new FormControl<number | null | undefined>(undefined),
			Brightness: new FormControl<number | null | undefined>(undefined),
			CanSeek: new FormControl<boolean | null | undefined>(undefined),
			IsMuted: new FormControl<boolean | null | undefined>(undefined),
			IsPaused: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			LiveStreamId: new FormControl<string | null | undefined>(undefined),
			MediaSourceId: new FormControl<string | null | undefined>(undefined),
			PlayMethod: new FormControl<PlayerStateInfoPlayMethod | null | undefined>(undefined),
			PlaySessionId: new FormControl<string | null | undefined>(undefined),
			PlaybackStartTimeTicks: new FormControl<number | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			PositionTicks: new FormControl<number | null | undefined>(undefined),
			RepeatMode: new FormControl<PlayerStateInfoRepeatMode | null | undefined>(undefined),
			SessionId: new FormControl<string | null | undefined>(undefined),
			SubtitleStreamIndex: new FormControl<number | null | undefined>(undefined),
			VolumeLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class PlaybackStopInfo. */
	export interface PlaybackStopInfo {

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Session.PlaybackStopInfo is failed. */
		Failed?: boolean | null;

		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		Item?: BaseItemDto;

		/** Gets or sets the item identifier. */
		ItemId?: string | null;

		/** Gets or sets the live stream identifier. */
		LiveStreamId?: string | null;

		/** Gets or sets the media version identifier. */
		MediaSourceId?: string | null;
		NextMediaType?: string | null;
		NowPlayingQueue?: Array<QueueItem>;

		/** Gets or sets the play session identifier. */
		PlaySessionId?: string | null;
		PlaylistItemId?: string | null;

		/** Gets or sets the position ticks. */
		PositionTicks?: number | null;

		/** Gets or sets the session id. */
		SessionId?: string | null;
	}

	/** Class PlaybackStopInfo. */
	export interface PlaybackStopInfoFormProperties {

		/** Gets or sets a value indicating whether this MediaBrowser.Model.Session.PlaybackStopInfo is failed. */
		Failed: FormControl<boolean | null | undefined>,

		/** Gets or sets the item identifier. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the live stream identifier. */
		LiveStreamId: FormControl<string | null | undefined>,

		/** Gets or sets the media version identifier. */
		MediaSourceId: FormControl<string | null | undefined>,
		NextMediaType: FormControl<string | null | undefined>,

		/** Gets or sets the play session identifier. */
		PlaySessionId: FormControl<string | null | undefined>,
		PlaylistItemId: FormControl<string | null | undefined>,

		/** Gets or sets the position ticks. */
		PositionTicks: FormControl<number | null | undefined>,

		/** Gets or sets the session id. */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreatePlaybackStopInfoFormGroup() {
		return new FormGroup<PlaybackStopInfoFormProperties>({
			Failed: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			LiveStreamId: new FormControl<string | null | undefined>(undefined),
			MediaSourceId: new FormControl<string | null | undefined>(undefined),
			NextMediaType: new FormControl<string | null | undefined>(undefined),
			PlaySessionId: new FormControl<string | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			PositionTicks: new FormControl<number | null | undefined>(undefined),
			SessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistCreationResult {
		Id?: string | null;
	}
	export interface PlaylistCreationResultFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistCreationResultFormGroup() {
		return new FormGroup<PlaylistCreationResultFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum PlaystateCommand. */
	export enum PlaystateCommand { Stop = 0, Pause = 1, Unpause = 2, NextTrack = 3, PreviousTrack = 4, Seek = 5, Rewind = 6, FastForward = 7, PlayPause = 8 }

	export interface PlaystateRequest {

		/** Enum PlaystateCommand. */
		Command?: PlaystateCommand | null;

		/** Gets or sets the controlling user identifier. */
		ControllingUserId?: string | null;
		SeekPositionTicks?: number | null;
	}
	export interface PlaystateRequestFormProperties {

		/** Enum PlaystateCommand. */
		Command: FormControl<PlaystateCommand | null | undefined>,

		/** Gets or sets the controlling user identifier. */
		ControllingUserId: FormControl<string | null | undefined>,
		SeekPositionTicks: FormControl<number | null | undefined>,
	}
	export function CreatePlaystateRequestFormGroup() {
		return new FormGroup<PlaystateRequestFormProperties>({
			Command: new FormControl<PlaystateCommand | null | undefined>(undefined),
			ControllingUserId: new FormControl<string | null | undefined>(undefined),
			SeekPositionTicks: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This is a serializable stub class that is used by the api to provide information about installed plugins. */
	export interface PluginInfo {

		/** Gets or sets a value indicating whether the plugin can be uninstalled. */
		CanUninstall?: boolean | null;

		/** Gets or sets the name of the configuration file. */
		ConfigurationFileName?: string | null;

		/** Gets or sets the description. */
		Description?: string | null;

		/** Gets or sets a value indicating whether this plugin has a valid image. */
		HasImage?: boolean | null;

		/** Gets or sets the unique id. */
		Id?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Plugin load status. */
		Status?: PluginInfoStatus | null;
		Version?: Version;
	}

	/** This is a serializable stub class that is used by the api to provide information about installed plugins. */
	export interface PluginInfoFormProperties {

		/** Gets or sets a value indicating whether the plugin can be uninstalled. */
		CanUninstall: FormControl<boolean | null | undefined>,

		/** Gets or sets the name of the configuration file. */
		ConfigurationFileName: FormControl<string | null | undefined>,

		/** Gets or sets the description. */
		Description: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether this plugin has a valid image. */
		HasImage: FormControl<boolean | null | undefined>,

		/** Gets or sets the unique id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Plugin load status. */
		Status: FormControl<PluginInfoStatus | null | undefined>,
	}
	export function CreatePluginInfoFormGroup() {
		return new FormGroup<PluginInfoFormProperties>({
			CanUninstall: new FormControl<boolean | null | undefined>(undefined),
			ConfigurationFileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HasImage: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<PluginInfoStatus | null | undefined>(undefined),
		});

	}

	export enum PluginInfoStatus { Active = 0, Restart = 1, Deleted = 2, Superceded = 3, Malfunctioned = 4, NotSupported = 5, Disabled = 6 }


	/** Plugin security info. */
	export interface PluginSecurityInfo {

		/** Gets or sets a value indicating whether is mb supporter. */
		IsMbSupporter?: boolean | null;

		/** Gets or sets the supporter key. */
		SupporterKey?: string | null;
	}

	/** Plugin security info. */
	export interface PluginSecurityInfoFormProperties {

		/** Gets or sets a value indicating whether is mb supporter. */
		IsMbSupporter: FormControl<boolean | null | undefined>,

		/** Gets or sets the supporter key. */
		SupporterKey: FormControl<string | null | undefined>,
	}
	export function CreatePluginSecurityInfoFormGroup() {
		return new FormGroup<PluginSecurityInfoFormProperties>({
			IsMbSupporter: new FormControl<boolean | null | undefined>(undefined),
			SupporterKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Plugin load status. */
	export enum PluginStatus { Active = 0, Restart = 1, Deleted = 2, Superceded = 3, Malfunctioned = 4, NotSupported = 5, Disabled = 6 }


	/** Class PreviousItemRequestDto. */
	export interface PreviousItemRequestDto {

		/** Gets or sets the playing item identifier. */
		PlaylistItemId?: string | null;
	}

	/** Class PreviousItemRequestDto. */
	export interface PreviousItemRequestDtoFormProperties {

		/** Gets or sets the playing item identifier. */
		PlaylistItemId: FormControl<string | null | undefined>,
	}
	export function CreatePreviousItemRequestDtoFormGroup() {
		return new FormGroup<PreviousItemRequestDtoFormProperties>({
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProblemDetails {
		detail?: string | null;
		instance?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		instance: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProfileConditionType { Equals = 0, NotEquals = 1, LessThanEqual = 2, GreaterThanEqual = 3, EqualsAny = 4 }

	export enum ProfileConditionValue { AudioChannels = 0, AudioBitrate = 1, AudioProfile = 2, Width = 3, Height = 4, Has64BitOffsets = 5, PacketLength = 6, VideoBitDepth = 7, VideoBitrate = 8, VideoFramerate = 9, VideoLevel = 10, VideoProfile = 11, VideoTimestamp = 12, IsAnamorphic = 13, RefFrames = 14, NumAudioStreams = 15, NumVideoStreams = 16, IsSecondaryAudio = 17, VideoCodecTag = 18, IsAvc = 19, IsInterlaced = 20, AudioSampleRate = 21, AudioBitDepth = 22 }

	export enum ProgramAudio { Mono = 0, Stereo = 1, Dolby = 2, DolbyDigital = 3, Thx = 4, Atmos = 5 }

	export interface PublicSystemInfo {

		/** Gets or sets the id. */
		Id?: string | null;

		/** Gets or sets the local address. */
		LocalAddress?: string | null;

		/** Gets or sets the operating system. */
		OperatingSystem?: string | null;

		/** Gets or sets the product name. This is the AssemblyProduct name. */
		ProductName?: string | null;

		/** Gets or sets the name of the server. */
		ServerName?: string | null;

		/** Gets or sets a value indicating whether the startup wizard is completed. */
		StartupWizardCompleted?: boolean | null;

		/** Gets or sets the server version. */
		Version?: string | null;
	}
	export interface PublicSystemInfoFormProperties {

		/** Gets or sets the id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the local address. */
		LocalAddress: FormControl<string | null | undefined>,

		/** Gets or sets the operating system. */
		OperatingSystem: FormControl<string | null | undefined>,

		/** Gets or sets the product name. This is the AssemblyProduct name. */
		ProductName: FormControl<string | null | undefined>,

		/** Gets or sets the name of the server. */
		ServerName: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether the startup wizard is completed. */
		StartupWizardCompleted: FormControl<boolean | null | undefined>,

		/** Gets or sets the server version. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreatePublicSystemInfoFormGroup() {
		return new FormGroup<PublicSystemInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			LocalAddress: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<string | null | undefined>(undefined),
			ProductName: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			StartupWizardCompleted: new FormControl<boolean | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryFilters {
		Genres?: Array<NameGuidPair>;
		Tags?: Array<string>;
	}
	export interface QueryFiltersFormProperties {
	}
	export function CreateQueryFiltersFormGroup() {
		return new FormGroup<QueryFiltersFormProperties>({
		});

	}

	export interface QueryFiltersLegacy {
		Genres?: Array<string>;
		OfficialRatings?: Array<string>;
		Tags?: Array<string>;
		Years?: Array<number>;
	}
	export interface QueryFiltersLegacyFormProperties {
	}
	export function CreateQueryFiltersLegacyFormGroup() {
		return new FormGroup<QueryFiltersLegacyFormProperties>({
		});

	}


	/** Class QueueRequestDto. */
	export interface QueueRequestDto {

		/** Gets or sets the items to enqueue. */
		ItemIds?: Array<string>;

		/** Enum GroupQueueMode. */
		Mode?: GroupQueueMode | null;
	}

	/** Class QueueRequestDto. */
	export interface QueueRequestDtoFormProperties {

		/** Enum GroupQueueMode. */
		Mode: FormControl<GroupQueueMode | null | undefined>,
	}
	export function CreateQueueRequestDtoFormGroup() {
		return new FormGroup<QueueRequestDtoFormProperties>({
			Mode: new FormControl<GroupQueueMode | null | undefined>(undefined),
		});

	}


	/** The quick connect request body. */
	export interface QuickConnectDto {

		/**
		 * Gets or sets the quick connect token.
		 * Required
		 */
		Token: string;
	}

	/** The quick connect request body. */
	export interface QuickConnectDtoFormProperties {

		/**
		 * Gets or sets the quick connect token.
		 * Required
		 */
		Token: FormControl<string | null | undefined>,
	}
	export function CreateQuickConnectDtoFormGroup() {
		return new FormGroup<QuickConnectDtoFormProperties>({
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Stores the result of an incoming quick connect request. */
	export interface QuickConnectResult {

		/** Gets a value indicating whether this request is authorized. */
		Authenticated?: boolean | null;

		/** Gets or sets the private access token. */
		Authentication?: string | null;

		/** Gets or sets the user facing code used so the user can quickly differentiate this request from others. */
		Code?: string | null;

		/** Gets or sets the DateTime that this request was created. */
		DateAdded?: Date | null;

		/** Gets or sets an error message. */
		Error?: string | null;

		/** Gets or sets the secret value used to uniquely identify this request. Can be used to retrieve authentication information. */
		Secret?: string | null;
	}

	/** Stores the result of an incoming quick connect request. */
	export interface QuickConnectResultFormProperties {

		/** Gets a value indicating whether this request is authorized. */
		Authenticated: FormControl<boolean | null | undefined>,

		/** Gets or sets the private access token. */
		Authentication: FormControl<string | null | undefined>,

		/** Gets or sets the user facing code used so the user can quickly differentiate this request from others. */
		Code: FormControl<string | null | undefined>,

		/** Gets or sets the DateTime that this request was created. */
		DateAdded: FormControl<Date | null | undefined>,

		/** Gets or sets an error message. */
		Error: FormControl<string | null | undefined>,

		/** Gets or sets the secret value used to uniquely identify this request. Can be used to retrieve authentication information. */
		Secret: FormControl<string | null | undefined>,
	}
	export function CreateQuickConnectResultFormGroup() {
		return new FormGroup<QuickConnectResultFormProperties>({
			Authenticated: new FormControl<boolean | null | undefined>(undefined),
			Authentication: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			DateAdded: new FormControl<Date | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			Secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quick connect state. */
	export enum QuickConnectState { Unavailable = 0, Available = 1, Active = 2 }

	export enum RatingType { Score = 0, Likes = 1 }


	/** Class ReadyRequest. */
	export interface ReadyRequestDto {

		/** Gets or sets a value indicating whether the client playback is unpaused. */
		IsPlaying?: boolean | null;

		/** Gets or sets the playlist item identifier of the playing item. */
		PlaylistItemId?: string | null;

		/** Gets or sets the position ticks. */
		PositionTicks?: number | null;

		/** Gets or sets when the request has been made by the client. */
		When?: Date | null;
	}

	/** Class ReadyRequest. */
	export interface ReadyRequestDtoFormProperties {

		/** Gets or sets a value indicating whether the client playback is unpaused. */
		IsPlaying: FormControl<boolean | null | undefined>,

		/** Gets or sets the playlist item identifier of the playing item. */
		PlaylistItemId: FormControl<string | null | undefined>,

		/** Gets or sets the position ticks. */
		PositionTicks: FormControl<number | null | undefined>,

		/** Gets or sets when the request has been made by the client. */
		When: FormControl<Date | null | undefined>,
	}
	export function CreateReadyRequestDtoFormGroup() {
		return new FormGroup<ReadyRequestDtoFormProperties>({
			IsPlaying: new FormControl<boolean | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			PositionTicks: new FormControl<number | null | undefined>(undefined),
			When: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RecommendationDto {
		BaselineItemName?: string | null;
		CategoryId?: string | null;
		Items?: Array<BaseItemDto>;
		RecommendationType?: RecommendationDtoRecommendationType | null;
	}
	export interface RecommendationDtoFormProperties {
		BaselineItemName: FormControl<string | null | undefined>,
		CategoryId: FormControl<string | null | undefined>,
		RecommendationType: FormControl<RecommendationDtoRecommendationType | null | undefined>,
	}
	export function CreateRecommendationDtoFormGroup() {
		return new FormGroup<RecommendationDtoFormProperties>({
			BaselineItemName: new FormControl<string | null | undefined>(undefined),
			CategoryId: new FormControl<string | null | undefined>(undefined),
			RecommendationType: new FormControl<RecommendationDtoRecommendationType | null | undefined>(undefined),
		});

	}

	export enum RecommendationDtoRecommendationType { SimilarToRecentlyPlayed = 0, SimilarToLikedItem = 1, HasDirectorFromRecentlyPlayed = 2, HasActorFromRecentlyPlayed = 3, HasLikedDirector = 4, HasLikedActor = 5 }

	export enum RecommendationType { SimilarToRecentlyPlayed = 0, SimilarToLikedItem = 1, HasDirectorFromRecentlyPlayed = 2, HasActorFromRecentlyPlayed = 3, HasLikedDirector = 4, HasLikedActor = 5 }

	export enum RecordingStatus { New = 0, InProgress = 1, Completed = 2, Cancelled = 3, ConflictedOk = 4, ConflictedNotOk = 5, Error = 6 }


	/** Class RemoteImageInfo. */
	export interface RemoteImageInfo {

		/** Gets or sets the community rating. */
		CommunityRating?: number | null;

		/** Gets or sets the height. */
		Height?: number | null;

		/** Gets or sets the language. */
		Language?: string | null;

		/** Gets or sets the name of the provider. */
		ProviderName?: string | null;
		RatingType?: RatingType | null;

		/** Gets a url used for previewing a smaller version. */
		ThumbnailUrl?: string | null;

		/** Enum ImageType. */
		Type?: ImageOptionType | null;

		/** Gets or sets the URL. */
		Url?: string | null;

		/** Gets or sets the vote count. */
		VoteCount?: number | null;

		/** Gets or sets the width. */
		Width?: number | null;
	}

	/** Class RemoteImageInfo. */
	export interface RemoteImageInfoFormProperties {

		/** Gets or sets the community rating. */
		CommunityRating: FormControl<number | null | undefined>,

		/** Gets or sets the height. */
		Height: FormControl<number | null | undefined>,

		/** Gets or sets the language. */
		Language: FormControl<string | null | undefined>,

		/** Gets or sets the name of the provider. */
		ProviderName: FormControl<string | null | undefined>,
		RatingType: FormControl<RatingType | null | undefined>,

		/** Gets a url used for previewing a smaller version. */
		ThumbnailUrl: FormControl<string | null | undefined>,

		/** Enum ImageType. */
		Type: FormControl<ImageOptionType | null | undefined>,

		/** Gets or sets the URL. */
		Url: FormControl<string | null | undefined>,

		/** Gets or sets the vote count. */
		VoteCount: FormControl<number | null | undefined>,

		/** Gets or sets the width. */
		Width: FormControl<number | null | undefined>,
	}
	export function CreateRemoteImageInfoFormGroup() {
		return new FormGroup<RemoteImageInfoFormProperties>({
			CommunityRating: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			RatingType: new FormControl<RatingType | null | undefined>(undefined),
			ThumbnailUrl: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ImageOptionType | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			VoteCount: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class RemoteImageResult. */
	export interface RemoteImageResult {

		/** Gets or sets the images. */
		Images?: Array<RemoteImageInfo>;

		/** Gets or sets the providers. */
		Providers?: Array<string>;

		/** Gets or sets the total record count. */
		TotalRecordCount?: number | null;
	}

	/** Class RemoteImageResult. */
	export interface RemoteImageResultFormProperties {

		/** Gets or sets the total record count. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateRemoteImageResultFormGroup() {
		return new FormGroup<RemoteImageResultFormProperties>({
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RemoteSearchResult {
		AlbumArtist?: RemoteSearchResult;
		Artists?: Array<RemoteSearchResult>;
		ImageUrl?: string | null;
		IndexNumber?: number | null;
		IndexNumberEnd?: number | null;

		/** Gets or sets the name. */
		Name?: string | null;
		Overview?: string | null;
		ParentIndexNumber?: number | null;
		PremiereDate?: Date | null;

		/** Gets or sets the year. */
		ProductionYear?: number | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };
		SearchProviderName?: string | null;
	}
	export interface RemoteSearchResultFormProperties {
		ImageUrl: FormControl<string | null | undefined>,
		IndexNumber: FormControl<number | null | undefined>,
		IndexNumberEnd: FormControl<number | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		Overview: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the year. */
		ProductionYear: FormControl<number | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateRemoteSearchResultFormGroup() {
		return new FormGroup<RemoteSearchResultFormProperties>({
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IndexNumberEnd: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Overview: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProductionYear: new FormControl<number | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoteSubtitleInfo {
		Author?: string | null;
		Comment?: string | null;
		CommunityRating?: number | null;
		DateCreated?: Date | null;
		DownloadCount?: number | null;
		Format?: string | null;
		Id?: string | null;
		IsHashMatch?: boolean | null;
		Name?: string | null;
		ProviderName?: string | null;
		ThreeLetterISOLanguageName?: string | null;
	}
	export interface RemoteSubtitleInfoFormProperties {
		Author: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		CommunityRating: FormControl<number | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DownloadCount: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsHashMatch: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
		ThreeLetterISOLanguageName: FormControl<string | null | undefined>,
	}
	export function CreateRemoteSubtitleInfoFormGroup() {
		return new FormGroup<RemoteSubtitleInfoFormProperties>({
			Author: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CommunityRating: new FormControl<number | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DownloadCount: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsHashMatch: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ThreeLetterISOLanguageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class RemoveFromPlaylistRequestDto. */
	export interface RemoveFromPlaylistRequestDto {

		/** Gets or sets the playlist identifiers ot the items. */
		PlaylistItemIds?: Array<string>;
	}

	/** Class RemoveFromPlaylistRequestDto. */
	export interface RemoveFromPlaylistRequestDtoFormProperties {
	}
	export function CreateRemoveFromPlaylistRequestDtoFormGroup() {
		return new FormGroup<RemoveFromPlaylistRequestDtoFormProperties>({
		});

	}

	export enum RepeatMode { RepeatNone = 0, RepeatAll = 1, RepeatOne = 2 }


	/** Class RepositoryInfo. */
	export interface RepositoryInfo {

		/** Gets or sets a value indicating whether the repository is enabled. */
		Enabled?: boolean | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the URL. */
		Url?: string | null;
	}

	/** Class RepositoryInfo. */
	export interface RepositoryInfoFormProperties {

		/** Gets or sets a value indicating whether the repository is enabled. */
		Enabled: FormControl<boolean | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the URL. */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryInfoFormGroup() {
		return new FormGroup<RepositoryInfoFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An enum representing the axis that should be scrolled. */
	export enum ScrollDirection { Horizontal = 0, Vertical = 1 }


	/** Class SearchHintResult. */
	export interface SearchHint {

		/** Gets or sets the album. */
		Album?: string | null;

		/** Gets or sets the album artist. */
		AlbumArtist?: string | null;
		AlbumId?: string | null;

		/** Gets or sets the artists. */
		Artists?: Array<string>;

		/** Gets or sets the backdrop image item identifier. */
		BackdropImageItemId?: string | null;

		/** Gets or sets the backdrop image tag. */
		BackdropImageTag?: string | null;

		/** Gets or sets the channel identifier. */
		ChannelId?: string | null;

		/** Gets or sets the name of the channel. */
		ChannelName?: string | null;
		EndDate?: Date | null;

		/** Gets or sets the episode count. */
		EpisodeCount?: number | null;
		Id?: string | null;

		/** Gets or sets the index number. */
		IndexNumber?: number | null;
		IsFolder?: boolean | null;

		/** Gets or sets the item id. */
		ItemId?: string | null;

		/** Gets or sets the matched term. */
		MatchedTerm?: string | null;

		/** Gets or sets the type of the media. */
		MediaType?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the parent index number. */
		ParentIndexNumber?: number | null;

		/** Gets or sets the primary image aspect ratio. */
		PrimaryImageAspectRatio?: number | null;

		/** Gets or sets the image tag. */
		PrimaryImageTag?: string | null;

		/** Gets or sets the production year. */
		ProductionYear?: number | null;

		/** Gets or sets the run time ticks. */
		RunTimeTicks?: number | null;

		/** Gets or sets the series. */
		Series?: string | null;

		/** Gets or sets the song count. */
		SongCount?: number | null;
		StartDate?: Date | null;
		Status?: string | null;

		/** Gets or sets the thumb image item identifier. */
		ThumbImageItemId?: string | null;

		/** Gets or sets the thumb image tag. */
		ThumbImageTag?: string | null;

		/** Gets or sets the type. */
		Type?: string | null;
	}

	/** Class SearchHintResult. */
	export interface SearchHintFormProperties {

		/** Gets or sets the album. */
		Album: FormControl<string | null | undefined>,

		/** Gets or sets the album artist. */
		AlbumArtist: FormControl<string | null | undefined>,
		AlbumId: FormControl<string | null | undefined>,

		/** Gets or sets the backdrop image item identifier. */
		BackdropImageItemId: FormControl<string | null | undefined>,

		/** Gets or sets the backdrop image tag. */
		BackdropImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the channel identifier. */
		ChannelId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the channel. */
		ChannelName: FormControl<string | null | undefined>,
		EndDate: FormControl<Date | null | undefined>,

		/** Gets or sets the episode count. */
		EpisodeCount: FormControl<number | null | undefined>,
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the index number. */
		IndexNumber: FormControl<number | null | undefined>,
		IsFolder: FormControl<boolean | null | undefined>,

		/** Gets or sets the item id. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the matched term. */
		MatchedTerm: FormControl<string | null | undefined>,

		/** Gets or sets the type of the media. */
		MediaType: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the parent index number. */
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the primary image aspect ratio. */
		PrimaryImageAspectRatio: FormControl<number | null | undefined>,

		/** Gets or sets the image tag. */
		PrimaryImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the production year. */
		ProductionYear: FormControl<number | null | undefined>,

		/** Gets or sets the run time ticks. */
		RunTimeTicks: FormControl<number | null | undefined>,

		/** Gets or sets the series. */
		Series: FormControl<string | null | undefined>,

		/** Gets or sets the song count. */
		SongCount: FormControl<number | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Gets or sets the thumb image item identifier. */
		ThumbImageItemId: FormControl<string | null | undefined>,

		/** Gets or sets the thumb image tag. */
		ThumbImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the type. */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateSearchHintFormGroup() {
		return new FormGroup<SearchHintFormProperties>({
			Album: new FormControl<string | null | undefined>(undefined),
			AlbumArtist: new FormControl<string | null | undefined>(undefined),
			AlbumId: new FormControl<string | null | undefined>(undefined),
			BackdropImageItemId: new FormControl<string | null | undefined>(undefined),
			BackdropImageTag: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			EpisodeCount: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsFolder: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			MatchedTerm: new FormControl<string | null | undefined>(undefined),
			MediaType: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			PrimaryImageAspectRatio: new FormControl<number | null | undefined>(undefined),
			PrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			ProductionYear: new FormControl<number | null | undefined>(undefined),
			RunTimeTicks: new FormControl<number | null | undefined>(undefined),
			Series: new FormControl<string | null | undefined>(undefined),
			SongCount: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			ThumbImageItemId: new FormControl<string | null | undefined>(undefined),
			ThumbImageTag: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class SearchHintResult. */
	export interface SearchHintResult {

		/** Gets or sets the search hints. */
		SearchHints?: Array<SearchHint>;

		/** Gets or sets the total record count. */
		TotalRecordCount?: number | null;
	}

	/** Class SearchHintResult. */
	export interface SearchHintResultFormProperties {

		/** Gets or sets the total record count. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchHintResultFormGroup() {
		return new FormGroup<SearchHintResultFormProperties>({
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class SeekRequestDto. */
	export interface SeekRequestDto {

		/** Gets or sets the position ticks. */
		PositionTicks?: number | null;
	}

	/** Class SeekRequestDto. */
	export interface SeekRequestDtoFormProperties {

		/** Gets or sets the position ticks. */
		PositionTicks: FormControl<number | null | undefined>,
	}
	export function CreateSeekRequestDtoFormGroup() {
		return new FormGroup<SeekRequestDtoFormProperties>({
			PositionTicks: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class SendCommand. */
	export interface SendCommand {

		/** Enum SendCommandType. */
		Command?: SendCommandCommand | null;

		/** Gets the UTC time when this command has been emitted. */
		EmittedAt?: Date | null;

		/** Gets the group identifier. */
		GroupId?: string | null;

		/** Gets the playlist identifier of the playing item. */
		PlaylistItemId?: string | null;

		/** Gets the position ticks. */
		PositionTicks?: number | null;

		/** Gets or sets the UTC time when to execute the command. */
		When?: Date | null;
	}

	/** Class SendCommand. */
	export interface SendCommandFormProperties {

		/** Enum SendCommandType. */
		Command: FormControl<SendCommandCommand | null | undefined>,

		/** Gets the UTC time when this command has been emitted. */
		EmittedAt: FormControl<Date | null | undefined>,

		/** Gets the group identifier. */
		GroupId: FormControl<string | null | undefined>,

		/** Gets the playlist identifier of the playing item. */
		PlaylistItemId: FormControl<string | null | undefined>,

		/** Gets the position ticks. */
		PositionTicks: FormControl<number | null | undefined>,

		/** Gets or sets the UTC time when to execute the command. */
		When: FormControl<Date | null | undefined>,
	}
	export function CreateSendCommandFormGroup() {
		return new FormGroup<SendCommandFormProperties>({
			Command: new FormControl<SendCommandCommand | null | undefined>(undefined),
			EmittedAt: new FormControl<Date | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
			PositionTicks: new FormControl<number | null | undefined>(undefined),
			When: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SendCommandCommand { Unpause = 0, Pause = 1, Stop = 2, Seek = 3 }


	/** Enum SendCommandType. */
	export enum SendCommandType { Unpause = 0, Pause = 1, Stop = 2, Seek = 3 }

	export interface SeriesInfo {
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface SeriesInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateSeriesInfoFormGroup() {
		return new FormGroup<SeriesInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SeriesInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: SeriesInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface SeriesInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateSeriesInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<SeriesInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum SeriesStatus. */
	export enum SeriesStatus { Continuing = 0, Ended = 1 }


	/** Class SeriesTimerInfoDto. */
	export interface SeriesTimerInfoDto {

		/** ChannelId of the recording. */
		ChannelId?: string | null;

		/** ChannelName of the recording. */
		ChannelName?: string | null;
		ChannelPrimaryImageTag?: string | null;
		DayPattern?: DayPattern | null;

		/** Gets or sets the days. */
		Days?: Array<DayOfWeek>;

		/** The end date of the recording, in UTC. */
		EndDate?: Date | null;

		/** Gets or sets the external channel identifier. */
		ExternalChannelId?: string | null;

		/** Gets or sets the external identifier. */
		ExternalId?: string | null;

		/** Gets or sets the external program identifier. */
		ExternalProgramId?: string | null;

		/** Id of the recording. */
		Id?: string | null;

		/** Gets or sets the image tags. */
		ImageTags?: {[id: string]: string };

		/** Gets or sets a value indicating whether this instance is post padding required. */
		IsPostPaddingRequired?: boolean | null;

		/** Gets or sets a value indicating whether this instance is pre padding required. */
		IsPrePaddingRequired?: boolean | null;
		KeepUntil?: KeepUntil | null;
		KeepUpTo?: number | null;

		/** Name of the recording. */
		Name?: string | null;

		/** Description of the recording. */
		Overview?: string | null;

		/** Gets or sets the parent backdrop image tags. */
		ParentBackdropImageTags?: Array<string>;

		/** If the item does not have any backdrops, this will hold the Id of the Parent that has one. */
		ParentBackdropItemId?: string | null;

		/** Gets or sets the parent primary image item identifier. */
		ParentPrimaryImageItemId?: string | null;

		/** Gets or sets the parent primary image tag. */
		ParentPrimaryImageTag?: string | null;

		/** Gets or sets the parent thumb image tag. */
		ParentThumbImageTag?: string | null;

		/** Gets or sets the parent thumb item id. */
		ParentThumbItemId?: string | null;

		/** Gets or sets the post padding seconds. */
		PostPaddingSeconds?: number | null;

		/** Gets or sets the pre padding seconds. */
		PrePaddingSeconds?: number | null;

		/** Gets or sets the priority. */
		Priority?: number | null;

		/** Gets or sets the program identifier. */
		ProgramId?: string | null;

		/** Gets or sets a value indicating whether [record any channel]. */
		RecordAnyChannel?: boolean | null;

		/** Gets or sets a value indicating whether [record any time]. */
		RecordAnyTime?: boolean | null;

		/** Gets or sets a value indicating whether [record new only]. */
		RecordNewOnly?: boolean | null;

		/** Gets or sets the server identifier. */
		ServerId?: string | null;

		/** Gets or sets the name of the service. */
		ServiceName?: string | null;
		SkipEpisodesInLibrary?: boolean | null;

		/** The start date of the recording, in UTC. */
		StartDate?: Date | null;
		Type?: string | null;
	}

	/** Class SeriesTimerInfoDto. */
	export interface SeriesTimerInfoDtoFormProperties {

		/** ChannelId of the recording. */
		ChannelId: FormControl<string | null | undefined>,

		/** ChannelName of the recording. */
		ChannelName: FormControl<string | null | undefined>,
		ChannelPrimaryImageTag: FormControl<string | null | undefined>,
		DayPattern: FormControl<DayPattern | null | undefined>,

		/** The end date of the recording, in UTC. */
		EndDate: FormControl<Date | null | undefined>,

		/** Gets or sets the external channel identifier. */
		ExternalChannelId: FormControl<string | null | undefined>,

		/** Gets or sets the external identifier. */
		ExternalId: FormControl<string | null | undefined>,

		/** Gets or sets the external program identifier. */
		ExternalProgramId: FormControl<string | null | undefined>,

		/** Id of the recording. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the image tags. */
		ImageTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets a value indicating whether this instance is post padding required. */
		IsPostPaddingRequired: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is pre padding required. */
		IsPrePaddingRequired: FormControl<boolean | null | undefined>,
		KeepUntil: FormControl<KeepUntil | null | undefined>,
		KeepUpTo: FormControl<number | null | undefined>,

		/** Name of the recording. */
		Name: FormControl<string | null | undefined>,

		/** Description of the recording. */
		Overview: FormControl<string | null | undefined>,

		/** If the item does not have any backdrops, this will hold the Id of the Parent that has one. */
		ParentBackdropItemId: FormControl<string | null | undefined>,

		/** Gets or sets the parent primary image item identifier. */
		ParentPrimaryImageItemId: FormControl<string | null | undefined>,

		/** Gets or sets the parent primary image tag. */
		ParentPrimaryImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the parent thumb image tag. */
		ParentThumbImageTag: FormControl<string | null | undefined>,

		/** Gets or sets the parent thumb item id. */
		ParentThumbItemId: FormControl<string | null | undefined>,

		/** Gets or sets the post padding seconds. */
		PostPaddingSeconds: FormControl<number | null | undefined>,

		/** Gets or sets the pre padding seconds. */
		PrePaddingSeconds: FormControl<number | null | undefined>,

		/** Gets or sets the priority. */
		Priority: FormControl<number | null | undefined>,

		/** Gets or sets the program identifier. */
		ProgramId: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether [record any channel]. */
		RecordAnyChannel: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [record any time]. */
		RecordAnyTime: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [record new only]. */
		RecordNewOnly: FormControl<boolean | null | undefined>,

		/** Gets or sets the server identifier. */
		ServerId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the service. */
		ServiceName: FormControl<string | null | undefined>,
		SkipEpisodesInLibrary: FormControl<boolean | null | undefined>,

		/** The start date of the recording, in UTC. */
		StartDate: FormControl<Date | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateSeriesTimerInfoDtoFormGroup() {
		return new FormGroup<SeriesTimerInfoDtoFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			DayPattern: new FormControl<DayPattern | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			ExternalChannelId: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			ExternalProgramId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ImageTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			IsPostPaddingRequired: new FormControl<boolean | null | undefined>(undefined),
			IsPrePaddingRequired: new FormControl<boolean | null | undefined>(undefined),
			KeepUntil: new FormControl<KeepUntil | null | undefined>(undefined),
			KeepUpTo: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Overview: new FormControl<string | null | undefined>(undefined),
			ParentBackdropItemId: new FormControl<string | null | undefined>(undefined),
			ParentPrimaryImageItemId: new FormControl<string | null | undefined>(undefined),
			ParentPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			ParentThumbImageTag: new FormControl<string | null | undefined>(undefined),
			ParentThumbItemId: new FormControl<string | null | undefined>(undefined),
			PostPaddingSeconds: new FormControl<number | null | undefined>(undefined),
			PrePaddingSeconds: new FormControl<number | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			ProgramId: new FormControl<string | null | undefined>(undefined),
			RecordAnyChannel: new FormControl<boolean | null | undefined>(undefined),
			RecordAnyTime: new FormControl<boolean | null | undefined>(undefined),
			RecordNewOnly: new FormControl<boolean | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			SkipEpisodesInLibrary: new FormControl<boolean | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesTimerInfoDtoQueryResult {

		/** Gets or sets the items. */
		Items?: Array<SeriesTimerInfoDto>;

		/** The index of the first record in Items. */
		StartIndex?: number | null;

		/** The total number of records available. */
		TotalRecordCount?: number | null;
	}
	export interface SeriesTimerInfoDtoQueryResultFormProperties {

		/** The index of the first record in Items. */
		StartIndex: FormControl<number | null | undefined>,

		/** The total number of records available. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateSeriesTimerInfoDtoQueryResultFormGroup() {
		return new FormGroup<SeriesTimerInfoDtoQueryResultFormProperties>({
			StartIndex: new FormControl<number | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the server configuration. */
	export interface ServerConfiguration {

		/** Gets or sets the number of days we should retain activity logs. */
		ActivityLogRetentionDays?: number | null;

		/** Gets or sets a value indicating whether Autodiscovery is enabled. */
		AutoDiscovery?: boolean | null;

		/** Gets or sets a value indicating whether Autodiscovery tracing is enabled. */
		AutoDiscoveryTracing?: boolean | null;
		BaseUrl?: string | null;

		/** Gets or sets the cache path. */
		CachePath?: string | null;

		/** Gets or sets the password required to access the X.509 certificate data in the file specified by MediaBrowser.Model.Configuration.ServerConfiguration.CertificatePath. */
		CertificatePassword?: string | null;

		/** Gets or sets the filesystem path of an X.509 certificate to use for SSL. */
		CertificatePath?: string | null;
		CodecsUsed?: Array<string>;
		ContentTypes?: Array<NameValuePair>;

		/** Gets or sets the cors hosts. */
		CorsHosts?: Array<string>;
		DisableLiveTvChannelUserDataName?: boolean | null;

		/** Gets or sets a value indicating whether plugin image should be disabled. */
		DisablePluginImages?: boolean | null;
		DisplaySpecialsWithinSeasons?: boolean | null;

		/** Gets or sets a value indicating whether [enable case sensitive item ids]. */
		EnableCaseSensitiveItemIds?: boolean | null;

		/**
		 * Gets or sets a value indicating whether [enable dashboard response caching].
		 * Allows potential contributors without visual studio to modify production dashboard code and test changes.
		 */
		EnableDashboardResponseCaching?: boolean | null;
		EnableExternalContentInSuggestions?: boolean | null;
		EnableFolderView?: boolean | null;
		EnableGroupingIntoCollections?: boolean | null;

		/** Gets or sets a value indicating whether to use HTTPS. */
		EnableHttps?: boolean | null;

		/** Gets or sets a value indicating whether IPV4 capability is enabled. */
		EnableIPV4?: boolean | null;

		/** Gets or sets a value indicating whether IPV6 capability is enabled. */
		EnableIPV6?: boolean | null;

		/** Gets or sets a value indicating whether to enable prometheus metrics exporting. */
		EnableMetrics?: boolean | null;

		/** Gets a value indicating whether multi-socket binding is available. */
		EnableMultiSocketBinding?: boolean | null;
		EnableNewOmdbSupport?: boolean | null;
		EnableNormalizedItemByNameIds?: boolean | null;

		/** Gets or sets a value indicating whether access outside of the LAN is permitted. */
		EnableRemoteAccess?: boolean | null;

		/**
		 * Gets or sets a value indicating whether detailed ssdp logs are sent to the console/log.
		 * "Emby.Dlna": "Debug" must be set in logging.default.json for this property to work.
		 */
		EnableSSDPTracing?: boolean | null;
		EnableSimpleArtistDetection?: boolean | null;

		/** Gets or sets a value indicating whether slow server responses should be logged as a warning. */
		EnableSlowResponseWarning?: boolean | null;

		/** Gets or sets a value indicating whether to enable automatic port forwarding. */
		EnableUPnP?: boolean | null;

		/** Gets or sets the time (in seconds) between the pings of SSDP gateway monitor. */
		GatewayMonitorPeriod?: number | null;

		/** Gets or sets the ports that HDHomerun uses. */
		HDHomerunPortRange?: string | null;

		/** Gets or sets the HTTP server port number. */
		HttpServerPortNumber?: number | null;

		/** Gets or sets the HTTPS server port number. */
		HttpsPortNumber?: number | null;

		/** Gets or sets a value indicating whether address names that match MediaBrowser.Model.Configuration.ServerConfiguration.VirtualInterfaceNames should be Ignore for the purposes of binding. */
		IgnoreVirtualInterfaces?: boolean | null;
		ImageExtractionTimeoutMs?: number | null;
		ImageSavingConvention?: ImageSavingConvention | null;

		/** Gets or sets a value indicating whether this instance is port authorized. */
		IsPortAuthorized?: boolean | null;

		/** Gets or sets a value indicating whether <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.RemoteIPFilter" /> contains a blacklist or a whitelist. Default is a whitelist. */
		IsRemoteIPFilterBlacklist?: boolean | null;

		/** Gets or sets a value indicating whether this instance is first run. */
		IsStartupWizardCompleted?: boolean | null;

		/** Gets or sets the known proxies. */
		KnownProxies?: Array<string>;

		/** Gets or sets the how many metadata refreshes can run concurrently. */
		LibraryMetadataRefreshConcurrency?: number | null;

		/**
		 * Gets or sets the delay in seconds that we will wait after a file system change to try and discover what has been added/removed
		 * Some delay is necessary with some items because their creation is not atomic.  It involves the creation of several
		 * different directories and files.
		 */
		LibraryMonitorDelay?: number | null;

		/** Gets or sets the how the library scan fans out. */
		LibraryScanFanoutConcurrency?: number | null;

		/** Gets or sets the interface addresses which Jellyfin will bind to. If empty, all interfaces will be used. */
		LocalNetworkAddresses?: Array<string>;

		/** Gets or sets the subnets that are deemed to make up the LAN. */
		LocalNetworkSubnets?: Array<string>;

		/** Gets or sets the number of days we should retain log files. */
		LogFileRetentionDays?: number | null;

		/** Gets or sets the remaining minutes of a book that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched. */
		MaxAudiobookResume?: number | null;

		/** Gets or sets the maximum percentage of an item that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched. */
		MaxResumePct?: number | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;
		MetadataNetworkPath?: string | null;
		MetadataOptions?: Array<MetadataOptions>;

		/** Gets or sets the metadata path. */
		MetadataPath?: string | null;

		/** Gets or sets the minimum minutes of a book that must be played in order for playstate to be updated. */
		MinAudiobookResume?: number | null;

		/** Gets or sets the minimum duration that an item must have in order to be eligible for playstate updates.. */
		MinResumeDurationSeconds?: number | null;

		/** Gets or sets the minimum percentage of an item that must be played in order for playstate to be updated. */
		MinResumePct?: number | null;
		PathSubstitutions?: Array<PathSubstitution>;
		PluginRepositories?: Array<RepositoryInfo>;

		/** Gets or sets the preferred metadata language. */
		PreferredMetadataLanguage?: string | null;
		PreviousVersion?: Version;

		/**
		 * Gets or sets the stringified PreviousVersion to be stored/loaded,
		 * because System.Version itself isn't xml-serializable.
		 */
		PreviousVersionStr?: string | null;

		/** Gets or sets the public HTTPS port. */
		PublicHttpsPort?: number | null;

		/** Gets or sets the public mapped port. */
		PublicPort?: number | null;

		/** Gets or sets PublishedServerUri to advertise for specific subnets. */
		PublishedServerUriBySubnet?: Array<string>;

		/** Gets or sets a value indicating whether quick connect is available for use on this server. */
		QuickConnectAvailable?: boolean | null;
		RemoteClientBitrateLimit?: number | null;

		/** Gets or sets the filter for remote IP connectivity. Used in conjuntion with <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.IsRemoteIPFilterBlacklist" />. */
		RemoteIPFilter?: Array<string>;

		/** Gets or sets a value indicating whether older plugins should automatically be deleted from the plugin folder. */
		RemoveOldPlugins?: boolean | null;

		/** Gets or sets a value indicating whether the server should force connections over HTTPS. */
		RequireHttps?: boolean | null;

		/**
		 * Gets or sets a value indicating whether an IP address is to be used to filter the detailed ssdp logs that are being sent to the console/log.
		 * If the setting "Emby.Dlna": "Debug" msut be set in logging.default.json for this property to work.
		 */
		SSDPTracingFilter?: string | null;
		SaveMetadataHidden?: boolean | null;
		ServerName?: string | null;
		SkipDeserializationForBasicTypes?: boolean | null;

		/** Gets or sets the threshold for the slow response time warning in ms. */
		SlowResponseThresholdMs?: number | null;

		/** Gets or sets characters to be removed from strings to create a sort name. */
		SortRemoveCharacters?: Array<string>;

		/** Gets or sets words to be removed from strings to create a sort name. */
		SortRemoveWords?: Array<string>;

		/** Gets or sets characters to be replaced with a ' ' in strings to create a sort name. */
		SortReplaceCharacters?: Array<string>;

		/**
		 * Gets or sets a value indicating whether all IPv6 interfaces should be treated as on the internal network.
		 * Depending on the address range implemented ULA ranges might not be used.
		 */
		TrustAllIP6Interfaces?: boolean | null;

		/** Gets or sets client udp port range. */
		UDPPortRange?: string | null;

		/** Gets or sets the number of times SSDP UDP messages are sent. */
		UDPSendCount?: number | null;

		/** Gets or sets the delay between each groups of SSDP messages (in ms). */
		UDPSendDelay?: number | null;
		UICulture?: string | null;

		/** Gets or sets a value indicating whether the http port should be mapped as part of UPnP automatic port forwarding. */
		UPnPCreateHttpPortMap?: boolean | null;
		UninstalledPlugins?: Array<string>;

		/** Gets or sets a value indicating the interfaces that should be ignored. The list can be comma separated. <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.IgnoreVirtualInterfaces" />. */
		VirtualInterfaceNames?: string | null;
	}

	/** Represents the server configuration. */
	export interface ServerConfigurationFormProperties {

		/** Gets or sets the number of days we should retain activity logs. */
		ActivityLogRetentionDays: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether Autodiscovery is enabled. */
		AutoDiscovery: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether Autodiscovery tracing is enabled. */
		AutoDiscoveryTracing: FormControl<boolean | null | undefined>,
		BaseUrl: FormControl<string | null | undefined>,

		/** Gets or sets the cache path. */
		CachePath: FormControl<string | null | undefined>,

		/** Gets or sets the password required to access the X.509 certificate data in the file specified by MediaBrowser.Model.Configuration.ServerConfiguration.CertificatePath. */
		CertificatePassword: FormControl<string | null | undefined>,

		/** Gets or sets the filesystem path of an X.509 certificate to use for SSL. */
		CertificatePath: FormControl<string | null | undefined>,
		DisableLiveTvChannelUserDataName: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether plugin image should be disabled. */
		DisablePluginImages: FormControl<boolean | null | undefined>,
		DisplaySpecialsWithinSeasons: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [enable case sensitive item ids]. */
		EnableCaseSensitiveItemIds: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets a value indicating whether [enable dashboard response caching].
		 * Allows potential contributors without visual studio to modify production dashboard code and test changes.
		 */
		EnableDashboardResponseCaching: FormControl<boolean | null | undefined>,
		EnableExternalContentInSuggestions: FormControl<boolean | null | undefined>,
		EnableFolderView: FormControl<boolean | null | undefined>,
		EnableGroupingIntoCollections: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to use HTTPS. */
		EnableHttps: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether IPV4 capability is enabled. */
		EnableIPV4: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether IPV6 capability is enabled. */
		EnableIPV6: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to enable prometheus metrics exporting. */
		EnableMetrics: FormControl<boolean | null | undefined>,

		/** Gets a value indicating whether multi-socket binding is available. */
		EnableMultiSocketBinding: FormControl<boolean | null | undefined>,
		EnableNewOmdbSupport: FormControl<boolean | null | undefined>,
		EnableNormalizedItemByNameIds: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether access outside of the LAN is permitted. */
		EnableRemoteAccess: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets a value indicating whether detailed ssdp logs are sent to the console/log.
		 * "Emby.Dlna": "Debug" must be set in logging.default.json for this property to work.
		 */
		EnableSSDPTracing: FormControl<boolean | null | undefined>,
		EnableSimpleArtistDetection: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether slow server responses should be logged as a warning. */
		EnableSlowResponseWarning: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether to enable automatic port forwarding. */
		EnableUPnP: FormControl<boolean | null | undefined>,

		/** Gets or sets the time (in seconds) between the pings of SSDP gateway monitor. */
		GatewayMonitorPeriod: FormControl<number | null | undefined>,

		/** Gets or sets the ports that HDHomerun uses. */
		HDHomerunPortRange: FormControl<string | null | undefined>,

		/** Gets or sets the HTTP server port number. */
		HttpServerPortNumber: FormControl<number | null | undefined>,

		/** Gets or sets the HTTPS server port number. */
		HttpsPortNumber: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether address names that match MediaBrowser.Model.Configuration.ServerConfiguration.VirtualInterfaceNames should be Ignore for the purposes of binding. */
		IgnoreVirtualInterfaces: FormControl<boolean | null | undefined>,
		ImageExtractionTimeoutMs: FormControl<number | null | undefined>,
		ImageSavingConvention: FormControl<ImageSavingConvention | null | undefined>,

		/** Gets or sets a value indicating whether this instance is port authorized. */
		IsPortAuthorized: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.RemoteIPFilter" /> contains a blacklist or a whitelist. Default is a whitelist. */
		IsRemoteIPFilterBlacklist: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is first run. */
		IsStartupWizardCompleted: FormControl<boolean | null | undefined>,

		/** Gets or sets the how many metadata refreshes can run concurrently. */
		LibraryMetadataRefreshConcurrency: FormControl<number | null | undefined>,

		/**
		 * Gets or sets the delay in seconds that we will wait after a file system change to try and discover what has been added/removed
		 * Some delay is necessary with some items because their creation is not atomic.  It involves the creation of several
		 * different directories and files.
		 */
		LibraryMonitorDelay: FormControl<number | null | undefined>,

		/** Gets or sets the how the library scan fans out. */
		LibraryScanFanoutConcurrency: FormControl<number | null | undefined>,

		/** Gets or sets the number of days we should retain log files. */
		LogFileRetentionDays: FormControl<number | null | undefined>,

		/** Gets or sets the remaining minutes of a book that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched. */
		MaxAudiobookResume: FormControl<number | null | undefined>,

		/** Gets or sets the maximum percentage of an item that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched. */
		MaxResumePct: FormControl<number | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,
		MetadataNetworkPath: FormControl<string | null | undefined>,

		/** Gets or sets the metadata path. */
		MetadataPath: FormControl<string | null | undefined>,

		/** Gets or sets the minimum minutes of a book that must be played in order for playstate to be updated. */
		MinAudiobookResume: FormControl<number | null | undefined>,

		/** Gets or sets the minimum duration that an item must have in order to be eligible for playstate updates.. */
		MinResumeDurationSeconds: FormControl<number | null | undefined>,

		/** Gets or sets the minimum percentage of an item that must be played in order for playstate to be updated. */
		MinResumePct: FormControl<number | null | undefined>,

		/** Gets or sets the preferred metadata language. */
		PreferredMetadataLanguage: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the stringified PreviousVersion to be stored/loaded,
		 * because System.Version itself isn't xml-serializable.
		 */
		PreviousVersionStr: FormControl<string | null | undefined>,

		/** Gets or sets the public HTTPS port. */
		PublicHttpsPort: FormControl<number | null | undefined>,

		/** Gets or sets the public mapped port. */
		PublicPort: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether quick connect is available for use on this server. */
		QuickConnectAvailable: FormControl<boolean | null | undefined>,
		RemoteClientBitrateLimit: FormControl<number | null | undefined>,

		/** Gets or sets a value indicating whether older plugins should automatically be deleted from the plugin folder. */
		RemoveOldPlugins: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether the server should force connections over HTTPS. */
		RequireHttps: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets a value indicating whether an IP address is to be used to filter the detailed ssdp logs that are being sent to the console/log.
		 * If the setting "Emby.Dlna": "Debug" msut be set in logging.default.json for this property to work.
		 */
		SSDPTracingFilter: FormControl<string | null | undefined>,
		SaveMetadataHidden: FormControl<boolean | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		SkipDeserializationForBasicTypes: FormControl<boolean | null | undefined>,

		/** Gets or sets the threshold for the slow response time warning in ms. */
		SlowResponseThresholdMs: FormControl<number | null | undefined>,

		/**
		 * Gets or sets a value indicating whether all IPv6 interfaces should be treated as on the internal network.
		 * Depending on the address range implemented ULA ranges might not be used.
		 */
		TrustAllIP6Interfaces: FormControl<boolean | null | undefined>,

		/** Gets or sets client udp port range. */
		UDPPortRange: FormControl<string | null | undefined>,

		/** Gets or sets the number of times SSDP UDP messages are sent. */
		UDPSendCount: FormControl<number | null | undefined>,

		/** Gets or sets the delay between each groups of SSDP messages (in ms). */
		UDPSendDelay: FormControl<number | null | undefined>,
		UICulture: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether the http port should be mapped as part of UPnP automatic port forwarding. */
		UPnPCreateHttpPortMap: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating the interfaces that should be ignored. The list can be comma separated. <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.IgnoreVirtualInterfaces" />. */
		VirtualInterfaceNames: FormControl<string | null | undefined>,
	}
	export function CreateServerConfigurationFormGroup() {
		return new FormGroup<ServerConfigurationFormProperties>({
			ActivityLogRetentionDays: new FormControl<number | null | undefined>(undefined),
			AutoDiscovery: new FormControl<boolean | null | undefined>(undefined),
			AutoDiscoveryTracing: new FormControl<boolean | null | undefined>(undefined),
			BaseUrl: new FormControl<string | null | undefined>(undefined),
			CachePath: new FormControl<string | null | undefined>(undefined),
			CertificatePassword: new FormControl<string | null | undefined>(undefined),
			CertificatePath: new FormControl<string | null | undefined>(undefined),
			DisableLiveTvChannelUserDataName: new FormControl<boolean | null | undefined>(undefined),
			DisablePluginImages: new FormControl<boolean | null | undefined>(undefined),
			DisplaySpecialsWithinSeasons: new FormControl<boolean | null | undefined>(undefined),
			EnableCaseSensitiveItemIds: new FormControl<boolean | null | undefined>(undefined),
			EnableDashboardResponseCaching: new FormControl<boolean | null | undefined>(undefined),
			EnableExternalContentInSuggestions: new FormControl<boolean | null | undefined>(undefined),
			EnableFolderView: new FormControl<boolean | null | undefined>(undefined),
			EnableGroupingIntoCollections: new FormControl<boolean | null | undefined>(undefined),
			EnableHttps: new FormControl<boolean | null | undefined>(undefined),
			EnableIPV4: new FormControl<boolean | null | undefined>(undefined),
			EnableIPV6: new FormControl<boolean | null | undefined>(undefined),
			EnableMetrics: new FormControl<boolean | null | undefined>(undefined),
			EnableMultiSocketBinding: new FormControl<boolean | null | undefined>(undefined),
			EnableNewOmdbSupport: new FormControl<boolean | null | undefined>(undefined),
			EnableNormalizedItemByNameIds: new FormControl<boolean | null | undefined>(undefined),
			EnableRemoteAccess: new FormControl<boolean | null | undefined>(undefined),
			EnableSSDPTracing: new FormControl<boolean | null | undefined>(undefined),
			EnableSimpleArtistDetection: new FormControl<boolean | null | undefined>(undefined),
			EnableSlowResponseWarning: new FormControl<boolean | null | undefined>(undefined),
			EnableUPnP: new FormControl<boolean | null | undefined>(undefined),
			GatewayMonitorPeriod: new FormControl<number | null | undefined>(undefined),
			HDHomerunPortRange: new FormControl<string | null | undefined>(undefined),
			HttpServerPortNumber: new FormControl<number | null | undefined>(undefined),
			HttpsPortNumber: new FormControl<number | null | undefined>(undefined),
			IgnoreVirtualInterfaces: new FormControl<boolean | null | undefined>(undefined),
			ImageExtractionTimeoutMs: new FormControl<number | null | undefined>(undefined),
			ImageSavingConvention: new FormControl<ImageSavingConvention | null | undefined>(undefined),
			IsPortAuthorized: new FormControl<boolean | null | undefined>(undefined),
			IsRemoteIPFilterBlacklist: new FormControl<boolean | null | undefined>(undefined),
			IsStartupWizardCompleted: new FormControl<boolean | null | undefined>(undefined),
			LibraryMetadataRefreshConcurrency: new FormControl<number | null | undefined>(undefined),
			LibraryMonitorDelay: new FormControl<number | null | undefined>(undefined),
			LibraryScanFanoutConcurrency: new FormControl<number | null | undefined>(undefined),
			LogFileRetentionDays: new FormControl<number | null | undefined>(undefined),
			MaxAudiobookResume: new FormControl<number | null | undefined>(undefined),
			MaxResumePct: new FormControl<number | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataNetworkPath: new FormControl<string | null | undefined>(undefined),
			MetadataPath: new FormControl<string | null | undefined>(undefined),
			MinAudiobookResume: new FormControl<number | null | undefined>(undefined),
			MinResumeDurationSeconds: new FormControl<number | null | undefined>(undefined),
			MinResumePct: new FormControl<number | null | undefined>(undefined),
			PreferredMetadataLanguage: new FormControl<string | null | undefined>(undefined),
			PreviousVersionStr: new FormControl<string | null | undefined>(undefined),
			PublicHttpsPort: new FormControl<number | null | undefined>(undefined),
			PublicPort: new FormControl<number | null | undefined>(undefined),
			QuickConnectAvailable: new FormControl<boolean | null | undefined>(undefined),
			RemoteClientBitrateLimit: new FormControl<number | null | undefined>(undefined),
			RemoveOldPlugins: new FormControl<boolean | null | undefined>(undefined),
			RequireHttps: new FormControl<boolean | null | undefined>(undefined),
			SSDPTracingFilter: new FormControl<string | null | undefined>(undefined),
			SaveMetadataHidden: new FormControl<boolean | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			SkipDeserializationForBasicTypes: new FormControl<boolean | null | undefined>(undefined),
			SlowResponseThresholdMs: new FormControl<number | null | undefined>(undefined),
			TrustAllIP6Interfaces: new FormControl<boolean | null | undefined>(undefined),
			UDPPortRange: new FormControl<string | null | undefined>(undefined),
			UDPSendCount: new FormControl<number | null | undefined>(undefined),
			UDPSendDelay: new FormControl<number | null | undefined>(undefined),
			UICulture: new FormControl<string | null | undefined>(undefined),
			UPnPCreateHttpPortMap: new FormControl<boolean | null | undefined>(undefined),
			VirtualInterfaceNames: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set channel mapping dto. */
	export interface SetChannelMappingDto {

		/**
		 * Gets or sets the provider channel id.
		 * Required
		 */
		ProviderChannelId: string;

		/**
		 * Gets or sets the provider id.
		 * Required
		 */
		ProviderId: string;

		/**
		 * Gets or sets the tuner channel id.
		 * Required
		 */
		TunerChannelId: string;
	}

	/** Set channel mapping dto. */
	export interface SetChannelMappingDtoFormProperties {

		/**
		 * Gets or sets the provider channel id.
		 * Required
		 */
		ProviderChannelId: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the provider id.
		 * Required
		 */
		ProviderId: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the tuner channel id.
		 * Required
		 */
		TunerChannelId: FormControl<string | null | undefined>,
	}
	export function CreateSetChannelMappingDtoFormGroup() {
		return new FormGroup<SetChannelMappingDtoFormProperties>({
			ProviderChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TunerChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Class SetPlaylistItemRequestDto. */
	export interface SetPlaylistItemRequestDto {

		/** Gets or sets the playlist identifier of the playing item. */
		PlaylistItemId?: string | null;
	}

	/** Class SetPlaylistItemRequestDto. */
	export interface SetPlaylistItemRequestDtoFormProperties {

		/** Gets or sets the playlist identifier of the playing item. */
		PlaylistItemId: FormControl<string | null | undefined>,
	}
	export function CreateSetPlaylistItemRequestDtoFormGroup() {
		return new FormGroup<SetPlaylistItemRequestDtoFormProperties>({
			PlaylistItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class SetRepeatModeRequestDto. */
	export interface SetRepeatModeRequestDto {

		/** Enum GroupRepeatMode. */
		Mode?: GroupRepeatMode | null;
	}

	/** Class SetRepeatModeRequestDto. */
	export interface SetRepeatModeRequestDtoFormProperties {

		/** Enum GroupRepeatMode. */
		Mode: FormControl<GroupRepeatMode | null | undefined>,
	}
	export function CreateSetRepeatModeRequestDtoFormGroup() {
		return new FormGroup<SetRepeatModeRequestDtoFormProperties>({
			Mode: new FormControl<GroupRepeatMode | null | undefined>(undefined),
		});

	}


	/** Class SetShuffleModeRequestDto. */
	export interface SetShuffleModeRequestDto {

		/** Enum GroupShuffleMode. */
		Mode?: GroupShuffleMode | null;
	}

	/** Class SetShuffleModeRequestDto. */
	export interface SetShuffleModeRequestDtoFormProperties {

		/** Enum GroupShuffleMode. */
		Mode: FormControl<GroupShuffleMode | null | undefined>,
	}
	export function CreateSetShuffleModeRequestDtoFormGroup() {
		return new FormGroup<SetShuffleModeRequestDtoFormProperties>({
			Mode: new FormControl<GroupShuffleMode | null | undefined>(undefined),
		});

	}


	/** An enum representing the sorting order. */
	export enum SortOrder { Ascending = 0, Descending = 1 }


	/** Special view option dto. */
	export interface SpecialViewOptionDto {

		/** Gets or sets view option id. */
		Id?: string | null;

		/** Gets or sets view option name. */
		Name?: string | null;
	}

	/** Special view option dto. */
	export interface SpecialViewOptionDtoFormProperties {

		/** Gets or sets view option id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets view option name. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSpecialViewOptionDtoFormGroup() {
		return new FormGroup<SpecialViewOptionDtoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The startup configuration DTO. */
	export interface StartupConfigurationDto {

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the preferred language for the metadata. */
		PreferredMetadataLanguage?: string | null;

		/** Gets or sets UI language culture. */
		UICulture?: string | null;
	}

	/** The startup configuration DTO. */
	export interface StartupConfigurationDtoFormProperties {

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the preferred language for the metadata. */
		PreferredMetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets UI language culture. */
		UICulture: FormControl<string | null | undefined>,
	}
	export function CreateStartupConfigurationDtoFormGroup() {
		return new FormGroup<StartupConfigurationDtoFormProperties>({
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			PreferredMetadataLanguage: new FormControl<string | null | undefined>(undefined),
			UICulture: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Startup remote access dto. */
	export interface StartupRemoteAccessDto {

		/**
		 * Gets or sets a value indicating whether enable automatic port mapping.
		 * Required
		 */
		EnableAutomaticPortMapping: boolean;

		/**
		 * Gets or sets a value indicating whether enable remote access.
		 * Required
		 */
		EnableRemoteAccess: boolean;
	}

	/** Startup remote access dto. */
	export interface StartupRemoteAccessDtoFormProperties {

		/**
		 * Gets or sets a value indicating whether enable automatic port mapping.
		 * Required
		 */
		EnableAutomaticPortMapping: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets a value indicating whether enable remote access.
		 * Required
		 */
		EnableRemoteAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateStartupRemoteAccessDtoFormGroup() {
		return new FormGroup<StartupRemoteAccessDtoFormProperties>({
			EnableAutomaticPortMapping: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			EnableRemoteAccess: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The startup user DTO. */
	export interface StartupUserDto {

		/** Gets or sets the username. */
		Name?: string | null;

		/** Gets or sets the user's password. */
		Password?: string | null;
	}

	/** The startup user DTO. */
	export interface StartupUserDtoFormProperties {

		/** Gets or sets the username. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the user's password. */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateStartupUserDtoFormGroup() {
		return new FormGroup<StartupUserDtoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubtitleDeliveryMethod { Encode = 0, Embed = 1, External = 2, Hls = 3 }


	/** An enum representing a subtitle playback mode. */
	export enum SubtitlePlaybackMode { Default = 0, Always = 1, OnlyForced = 2, None = 3, Smart = 4 }


	/** Enum SyncPlayUserAccessType. */
	export enum SyncPlayUserAccessType { CreateAndJoinGroups = 0, JoinGroups = 1, None = 2 }


	/** Class SystemInfo. */
	export interface SystemInfo {

		/** Gets or sets the cache path. */
		CachePath?: string | null;
		CanLaunchWebBrowser?: boolean | null;

		/** Gets or sets a value indicating whether this instance can self restart. */
		CanSelfRestart?: boolean | null;

		/** Gets or sets the completed installations. */
		CompletedInstallations?: Array<InstallationInfo>;

		/** Enum describing the location of the FFmpeg tool. */
		EncoderLocation?: FFmpegLocation | null;

		/** Gets or sets a value indicating whether this instance has pending restart. */
		HasPendingRestart?: boolean | null;

		/** Gets or sets a value indicating whether this instance has update available. */
		HasUpdateAvailable?: boolean | null;

		/** Gets or sets the id. */
		Id?: string | null;

		/** Gets or sets the internal metadata path. */
		InternalMetadataPath?: string | null;
		IsShuttingDown?: boolean | null;

		/** Gets or sets the items by name path. */
		ItemsByNamePath?: string | null;

		/** Gets or sets the local address. */
		LocalAddress?: string | null;

		/** Gets or sets the log path. */
		LogPath?: string | null;

		/** Gets or sets the operating system. */
		OperatingSystem?: string | null;

		/** Gets or sets the display name of the operating system. */
		OperatingSystemDisplayName?: string | null;

		/** Get or sets the package name. */
		PackageName?: string | null;

		/** Gets or sets the product name. This is the AssemblyProduct name. */
		ProductName?: string | null;

		/** Gets or sets the program data path. */
		ProgramDataPath?: string | null;

		/** Gets or sets the name of the server. */
		ServerName?: string | null;

		/** Gets or sets a value indicating whether the startup wizard is completed. */
		StartupWizardCompleted?: boolean | null;

		/** Gets or sets a value indicating whether [supports library monitor]. */
		SupportsLibraryMonitor?: boolean | null;
		SystemArchitecture?: Architecture | null;

		/** Gets or sets the transcode path. */
		TranscodingTempPath?: string | null;

		/** Gets or sets the server version. */
		Version?: string | null;

		/** Gets or sets the web UI resources path. */
		WebPath?: string | null;

		/** Gets or sets the web socket port number. */
		WebSocketPortNumber?: number | null;
	}

	/** Class SystemInfo. */
	export interface SystemInfoFormProperties {

		/** Gets or sets the cache path. */
		CachePath: FormControl<string | null | undefined>,
		CanLaunchWebBrowser: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance can self restart. */
		CanSelfRestart: FormControl<boolean | null | undefined>,

		/** Enum describing the location of the FFmpeg tool. */
		EncoderLocation: FormControl<FFmpegLocation | null | undefined>,

		/** Gets or sets a value indicating whether this instance has pending restart. */
		HasPendingRestart: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance has update available. */
		HasUpdateAvailable: FormControl<boolean | null | undefined>,

		/** Gets or sets the id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the internal metadata path. */
		InternalMetadataPath: FormControl<string | null | undefined>,
		IsShuttingDown: FormControl<boolean | null | undefined>,

		/** Gets or sets the items by name path. */
		ItemsByNamePath: FormControl<string | null | undefined>,

		/** Gets or sets the local address. */
		LocalAddress: FormControl<string | null | undefined>,

		/** Gets or sets the log path. */
		LogPath: FormControl<string | null | undefined>,

		/** Gets or sets the operating system. */
		OperatingSystem: FormControl<string | null | undefined>,

		/** Gets or sets the display name of the operating system. */
		OperatingSystemDisplayName: FormControl<string | null | undefined>,

		/** Get or sets the package name. */
		PackageName: FormControl<string | null | undefined>,

		/** Gets or sets the product name. This is the AssemblyProduct name. */
		ProductName: FormControl<string | null | undefined>,

		/** Gets or sets the program data path. */
		ProgramDataPath: FormControl<string | null | undefined>,

		/** Gets or sets the name of the server. */
		ServerName: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether the startup wizard is completed. */
		StartupWizardCompleted: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether [supports library monitor]. */
		SupportsLibraryMonitor: FormControl<boolean | null | undefined>,
		SystemArchitecture: FormControl<Architecture | null | undefined>,

		/** Gets or sets the transcode path. */
		TranscodingTempPath: FormControl<string | null | undefined>,

		/** Gets or sets the server version. */
		Version: FormControl<string | null | undefined>,

		/** Gets or sets the web UI resources path. */
		WebPath: FormControl<string | null | undefined>,

		/** Gets or sets the web socket port number. */
		WebSocketPortNumber: FormControl<number | null | undefined>,
	}
	export function CreateSystemInfoFormGroup() {
		return new FormGroup<SystemInfoFormProperties>({
			CachePath: new FormControl<string | null | undefined>(undefined),
			CanLaunchWebBrowser: new FormControl<boolean | null | undefined>(undefined),
			CanSelfRestart: new FormControl<boolean | null | undefined>(undefined),
			EncoderLocation: new FormControl<FFmpegLocation | null | undefined>(undefined),
			HasPendingRestart: new FormControl<boolean | null | undefined>(undefined),
			HasUpdateAvailable: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InternalMetadataPath: new FormControl<string | null | undefined>(undefined),
			IsShuttingDown: new FormControl<boolean | null | undefined>(undefined),
			ItemsByNamePath: new FormControl<string | null | undefined>(undefined),
			LocalAddress: new FormControl<string | null | undefined>(undefined),
			LogPath: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<string | null | undefined>(undefined),
			OperatingSystemDisplayName: new FormControl<string | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined),
			ProductName: new FormControl<string | null | undefined>(undefined),
			ProgramDataPath: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			StartupWizardCompleted: new FormControl<boolean | null | undefined>(undefined),
			SupportsLibraryMonitor: new FormControl<boolean | null | undefined>(undefined),
			SystemArchitecture: new FormControl<Architecture | null | undefined>(undefined),
			TranscodingTempPath: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			WebPath: new FormControl<string | null | undefined>(undefined),
			WebSocketPortNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Enum TaskCompletionStatus. */
	export enum TaskCompletionStatus { Completed = 0, Failed = 1, Cancelled = 2, Aborted = 3 }


	/** Class TaskInfo. */
	export interface TaskInfo {

		/** Gets or sets the category. */
		Category?: string | null;

		/** Gets or sets the progress. */
		CurrentProgressPercentage?: number | null;

		/** Gets or sets the description. */
		Description?: string | null;

		/** Gets or sets the id. */
		Id?: string | null;

		/** Gets or sets a value indicating whether this instance is hidden. */
		IsHidden?: boolean | null;

		/** Gets or sets the key. */
		Key?: string | null;

		/** Class TaskExecutionInfo. */
		LastExecutionResult?: TaskResult;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Enum TaskState. */
		State?: TaskInfoState | null;

		/** Gets or sets the triggers. */
		Triggers?: Array<TaskTriggerInfo>;
	}

	/** Class TaskInfo. */
	export interface TaskInfoFormProperties {

		/** Gets or sets the category. */
		Category: FormControl<string | null | undefined>,

		/** Gets or sets the progress. */
		CurrentProgressPercentage: FormControl<number | null | undefined>,

		/** Gets or sets the description. */
		Description: FormControl<string | null | undefined>,

		/** Gets or sets the id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether this instance is hidden. */
		IsHidden: FormControl<boolean | null | undefined>,

		/** Gets or sets the key. */
		Key: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Enum TaskState. */
		State: FormControl<TaskInfoState | null | undefined>,
	}
	export function CreateTaskInfoFormGroup() {
		return new FormGroup<TaskInfoFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			CurrentProgressPercentage: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsHidden: new FormControl<boolean | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<TaskInfoState | null | undefined>(undefined),
		});

	}


	/** Class TaskExecutionInfo. */
	export interface TaskResult {

		/** Gets or sets the end time UTC. */
		EndTimeUtc?: Date | null;

		/** Gets or sets the error message. */
		ErrorMessage?: string | null;

		/** Gets or sets the id. */
		Id?: string | null;

		/** Gets or sets the key. */
		Key?: string | null;

		/** Gets or sets the long error message. */
		LongErrorMessage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the start time UTC. */
		StartTimeUtc?: Date | null;

		/** Enum TaskCompletionStatus. */
		Status?: TaskCompletionStatus | null;
	}

	/** Class TaskExecutionInfo. */
	export interface TaskResultFormProperties {

		/** Gets or sets the end time UTC. */
		EndTimeUtc: FormControl<Date | null | undefined>,

		/** Gets or sets the error message. */
		ErrorMessage: FormControl<string | null | undefined>,

		/** Gets or sets the id. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets the key. */
		Key: FormControl<string | null | undefined>,

		/** Gets or sets the long error message. */
		LongErrorMessage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the start time UTC. */
		StartTimeUtc: FormControl<Date | null | undefined>,

		/** Enum TaskCompletionStatus. */
		Status: FormControl<TaskCompletionStatus | null | undefined>,
	}
	export function CreateTaskResultFormGroup() {
		return new FormGroup<TaskResultFormProperties>({
			EndTimeUtc: new FormControl<Date | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			LongErrorMessage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			StartTimeUtc: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<TaskCompletionStatus | null | undefined>(undefined),
		});

	}

	export enum TaskInfoState { Idle = 0, Cancelling = 1, Running = 2 }


	/** Class TaskTriggerInfo. */
	export interface TaskTriggerInfo {
		DayOfWeek?: DayOfWeek | null;

		/** Gets or sets the interval. */
		IntervalTicks?: number | null;

		/** Gets or sets the maximum runtime ticks. */
		MaxRuntimeTicks?: number | null;

		/** Gets or sets the time of day. */
		TimeOfDayTicks?: number | null;

		/** Gets or sets the type. */
		Type?: string | null;
	}

	/** Class TaskTriggerInfo. */
	export interface TaskTriggerInfoFormProperties {
		DayOfWeek: FormControl<DayOfWeek | null | undefined>,

		/** Gets or sets the interval. */
		IntervalTicks: FormControl<number | null | undefined>,

		/** Gets or sets the maximum runtime ticks. */
		MaxRuntimeTicks: FormControl<number | null | undefined>,

		/** Gets or sets the time of day. */
		TimeOfDayTicks: FormControl<number | null | undefined>,

		/** Gets or sets the type. */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateTaskTriggerInfoFormGroup() {
		return new FormGroup<TaskTriggerInfoFormProperties>({
			DayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
			IntervalTicks: new FormControl<number | null | undefined>(undefined),
			MaxRuntimeTicks: new FormControl<number | null | undefined>(undefined),
			TimeOfDayTicks: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum TaskState. */
	export enum TaskState { Idle = 0, Cancelling = 1, Running = 2 }

	export interface TimerEventInfo {
		Id?: string | null;
		ProgramId?: string | null;
	}
	export interface TimerEventInfoFormProperties {
		Id: FormControl<string | null | undefined>,
		ProgramId: FormControl<string | null | undefined>,
	}
	export function CreateTimerEventInfoFormGroup() {
		return new FormGroup<TimerEventInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ProgramId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimerInfoDto {

		/** ChannelId of the recording. */
		ChannelId?: string | null;

		/** ChannelName of the recording. */
		ChannelName?: string | null;
		ChannelPrimaryImageTag?: string | null;

		/** The end date of the recording, in UTC. */
		EndDate?: Date | null;

		/** Gets or sets the external channel identifier. */
		ExternalChannelId?: string | null;

		/** Gets or sets the external identifier. */
		ExternalId?: string | null;

		/** Gets or sets the external program identifier. */
		ExternalProgramId?: string | null;

		/** Gets or sets the external series timer identifier. */
		ExternalSeriesTimerId?: string | null;

		/** Id of the recording. */
		Id?: string | null;

		/** Gets or sets a value indicating whether this instance is post padding required. */
		IsPostPaddingRequired?: boolean | null;

		/** Gets or sets a value indicating whether this instance is pre padding required. */
		IsPrePaddingRequired?: boolean | null;
		KeepUntil?: KeepUntil | null;

		/** Name of the recording. */
		Name?: string | null;

		/** Description of the recording. */
		Overview?: string | null;

		/** Gets or sets the parent backdrop image tags. */
		ParentBackdropImageTags?: Array<string>;

		/** If the item does not have any backdrops, this will hold the Id of the Parent that has one. */
		ParentBackdropItemId?: string | null;

		/** Gets or sets the post padding seconds. */
		PostPaddingSeconds?: number | null;

		/** Gets or sets the pre padding seconds. */
		PrePaddingSeconds?: number | null;

		/** Gets or sets the priority. */
		Priority?: number | null;

		/** Gets or sets the program identifier. */
		ProgramId?: string | null;

		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		ProgramInfo?: BaseItemDto;

		/** Gets or sets the run time ticks. */
		RunTimeTicks?: number | null;

		/** Gets or sets the series timer identifier. */
		SeriesTimerId?: string | null;

		/** Gets or sets the server identifier. */
		ServerId?: string | null;

		/** Gets or sets the name of the service. */
		ServiceName?: string | null;

		/** The start date of the recording, in UTC. */
		StartDate?: Date | null;
		Status?: RecordingStatus | null;
		Type?: string | null;
	}
	export interface TimerInfoDtoFormProperties {

		/** ChannelId of the recording. */
		ChannelId: FormControl<string | null | undefined>,

		/** ChannelName of the recording. */
		ChannelName: FormControl<string | null | undefined>,
		ChannelPrimaryImageTag: FormControl<string | null | undefined>,

		/** The end date of the recording, in UTC. */
		EndDate: FormControl<Date | null | undefined>,

		/** Gets or sets the external channel identifier. */
		ExternalChannelId: FormControl<string | null | undefined>,

		/** Gets or sets the external identifier. */
		ExternalId: FormControl<string | null | undefined>,

		/** Gets or sets the external program identifier. */
		ExternalProgramId: FormControl<string | null | undefined>,

		/** Gets or sets the external series timer identifier. */
		ExternalSeriesTimerId: FormControl<string | null | undefined>,

		/** Id of the recording. */
		Id: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether this instance is post padding required. */
		IsPostPaddingRequired: FormControl<boolean | null | undefined>,

		/** Gets or sets a value indicating whether this instance is pre padding required. */
		IsPrePaddingRequired: FormControl<boolean | null | undefined>,
		KeepUntil: FormControl<KeepUntil | null | undefined>,

		/** Name of the recording. */
		Name: FormControl<string | null | undefined>,

		/** Description of the recording. */
		Overview: FormControl<string | null | undefined>,

		/** If the item does not have any backdrops, this will hold the Id of the Parent that has one. */
		ParentBackdropItemId: FormControl<string | null | undefined>,

		/** Gets or sets the post padding seconds. */
		PostPaddingSeconds: FormControl<number | null | undefined>,

		/** Gets or sets the pre padding seconds. */
		PrePaddingSeconds: FormControl<number | null | undefined>,

		/** Gets or sets the priority. */
		Priority: FormControl<number | null | undefined>,

		/** Gets or sets the program identifier. */
		ProgramId: FormControl<string | null | undefined>,

		/** Gets or sets the run time ticks. */
		RunTimeTicks: FormControl<number | null | undefined>,

		/** Gets or sets the series timer identifier. */
		SeriesTimerId: FormControl<string | null | undefined>,

		/** Gets or sets the server identifier. */
		ServerId: FormControl<string | null | undefined>,

		/** Gets or sets the name of the service. */
		ServiceName: FormControl<string | null | undefined>,

		/** The start date of the recording, in UTC. */
		StartDate: FormControl<Date | null | undefined>,
		Status: FormControl<RecordingStatus | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateTimerInfoDtoFormGroup() {
		return new FormGroup<TimerInfoDtoFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelPrimaryImageTag: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			ExternalChannelId: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			ExternalProgramId: new FormControl<string | null | undefined>(undefined),
			ExternalSeriesTimerId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsPostPaddingRequired: new FormControl<boolean | null | undefined>(undefined),
			IsPrePaddingRequired: new FormControl<boolean | null | undefined>(undefined),
			KeepUntil: new FormControl<KeepUntil | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Overview: new FormControl<string | null | undefined>(undefined),
			ParentBackdropItemId: new FormControl<string | null | undefined>(undefined),
			PostPaddingSeconds: new FormControl<number | null | undefined>(undefined),
			PrePaddingSeconds: new FormControl<number | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			ProgramId: new FormControl<string | null | undefined>(undefined),
			RunTimeTicks: new FormControl<number | null | undefined>(undefined),
			SeriesTimerId: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<RecordingStatus | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimerInfoDtoQueryResult {

		/** Gets or sets the items. */
		Items?: Array<TimerInfoDto>;

		/** The index of the first record in Items. */
		StartIndex?: number | null;

		/** The total number of records available. */
		TotalRecordCount?: number | null;
	}
	export interface TimerInfoDtoQueryResultFormProperties {

		/** The index of the first record in Items. */
		StartIndex: FormControl<number | null | undefined>,

		/** The total number of records available. */
		TotalRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateTimerInfoDtoQueryResultFormGroup() {
		return new FormGroup<TimerInfoDtoQueryResultFormProperties>({
			StartIndex: new FormControl<number | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TrailerInfo {
		IndexNumber?: number | null;
		IsAutomated?: boolean | null;

		/** Gets or sets the metadata country code. */
		MetadataCountryCode?: string | null;

		/** Gets or sets the metadata language. */
		MetadataLanguage?: string | null;

		/** Gets or sets the name. */
		Name?: string | null;
		ParentIndexNumber?: number | null;

		/** Gets or sets the path. */
		Path?: string | null;
		PremiereDate?: Date | null;

		/** Gets or sets the provider ids. */
		ProviderIds?: {[id: string]: string };

		/** Gets or sets the year. */
		Year?: number | null;
	}
	export interface TrailerInfoFormProperties {
		IndexNumber: FormControl<number | null | undefined>,
		IsAutomated: FormControl<boolean | null | undefined>,

		/** Gets or sets the metadata country code. */
		MetadataCountryCode: FormControl<string | null | undefined>,

		/** Gets or sets the metadata language. */
		MetadataLanguage: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,
		ParentIndexNumber: FormControl<number | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,
		PremiereDate: FormControl<Date | null | undefined>,

		/** Gets or sets the provider ids. */
		ProviderIds: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the year. */
		Year: FormControl<number | null | undefined>,
	}
	export function CreateTrailerInfoFormGroup() {
		return new FormGroup<TrailerInfoFormProperties>({
			IndexNumber: new FormControl<number | null | undefined>(undefined),
			IsAutomated: new FormControl<boolean | null | undefined>(undefined),
			MetadataCountryCode: new FormControl<string | null | undefined>(undefined),
			MetadataLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentIndexNumber: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PremiereDate: new FormControl<Date | null | undefined>(undefined),
			ProviderIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TrailerInfoRemoteSearchQuery {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders?: boolean | null;
		ItemId?: string | null;
		SearchInfo?: TrailerInfo;

		/** Will only search within the given provider when set. */
		SearchProviderName?: string | null;
	}
	export interface TrailerInfoRemoteSearchQueryFormProperties {

		/** Gets or sets a value indicating whether disabled providers should be included. */
		IncludeDisabledProviders: FormControl<boolean | null | undefined>,
		ItemId: FormControl<string | null | undefined>,

		/** Will only search within the given provider when set. */
		SearchProviderName: FormControl<string | null | undefined>,
	}
	export function CreateTrailerInfoRemoteSearchQueryFormGroup() {
		return new FormGroup<TrailerInfoRemoteSearchQueryFormProperties>({
			IncludeDisabledProviders: new FormControl<boolean | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			SearchProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscodeSeekInfo { Auto = 0, Bytes = 1 }

	export enum TransportStreamTimestamp { None = 0, Zero = 1, Valid = 2 }

	export interface TunerHostInfo {
		AllowHWTranscoding?: boolean | null;
		DeviceId?: string | null;
		EnableStreamLooping?: boolean | null;
		FriendlyName?: string | null;
		Id?: string | null;
		ImportFavoritesOnly?: boolean | null;
		Source?: string | null;
		TunerCount?: number | null;
		Type?: string | null;
		Url?: string | null;
		UserAgent?: string | null;
	}
	export interface TunerHostInfoFormProperties {
		AllowHWTranscoding: FormControl<boolean | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		EnableStreamLooping: FormControl<boolean | null | undefined>,
		FriendlyName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ImportFavoritesOnly: FormControl<boolean | null | undefined>,
		Source: FormControl<string | null | undefined>,
		TunerCount: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		UserAgent: FormControl<string | null | undefined>,
	}
	export function CreateTunerHostInfoFormGroup() {
		return new FormGroup<TunerHostInfoFormProperties>({
			AllowHWTranscoding: new FormControl<boolean | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			EnableStreamLooping: new FormControl<boolean | null | undefined>(undefined),
			FriendlyName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ImportFavoritesOnly: new FormControl<boolean | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			TunerCount: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			UserAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update library options dto. */
	export interface UpdateLibraryOptionsDto {

		/** Gets or sets the library item id. */
		Id?: string | null;
		LibraryOptions?: LibraryOptions;
	}

	/** Update library options dto. */
	export interface UpdateLibraryOptionsDtoFormProperties {

		/** Gets or sets the library item id. */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLibraryOptionsDtoFormGroup() {
		return new FormGroup<UpdateLibraryOptionsDtoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The update user easy password request body. */
	export interface UpdateUserEasyPassword {

		/** Gets or sets the new sha1-hashed password. */
		NewPassword?: string | null;

		/** Gets or sets the new password. */
		NewPw?: string | null;

		/** Gets or sets a value indicating whether to reset the password. */
		ResetPassword?: boolean | null;
	}

	/** The update user easy password request body. */
	export interface UpdateUserEasyPasswordFormProperties {

		/** Gets or sets the new sha1-hashed password. */
		NewPassword: FormControl<string | null | undefined>,

		/** Gets or sets the new password. */
		NewPw: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether to reset the password. */
		ResetPassword: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUserEasyPasswordFormGroup() {
		return new FormGroup<UpdateUserEasyPasswordFormProperties>({
			NewPassword: new FormControl<string | null | undefined>(undefined),
			NewPw: new FormControl<string | null | undefined>(undefined),
			ResetPassword: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The update user password request body. */
	export interface UpdateUserPassword {

		/** Gets or sets the current sha1-hashed password. */
		CurrentPassword?: string | null;

		/** Gets or sets the current plain text password. */
		CurrentPw?: string | null;

		/** Gets or sets the new plain text password. */
		NewPw?: string | null;

		/** Gets or sets a value indicating whether to reset the password. */
		ResetPassword?: boolean | null;
	}

	/** The update user password request body. */
	export interface UpdateUserPasswordFormProperties {

		/** Gets or sets the current sha1-hashed password. */
		CurrentPassword: FormControl<string | null | undefined>,

		/** Gets or sets the current plain text password. */
		CurrentPw: FormControl<string | null | undefined>,

		/** Gets or sets the new plain text password. */
		NewPw: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether to reset the password. */
		ResetPassword: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUserPasswordFormGroup() {
		return new FormGroup<UpdateUserPasswordFormProperties>({
			CurrentPassword: new FormControl<string | null | undefined>(undefined),
			CurrentPw: new FormControl<string | null | undefined>(undefined),
			NewPw: new FormControl<string | null | undefined>(undefined),
			ResetPassword: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Upload subtitles dto. */
	export interface UploadSubtitleDto {

		/**
		 * Gets or sets the subtitle data.
		 * Required
		 */
		Data: string;

		/**
		 * Gets or sets the subtitle format.
		 * Required
		 */
		Format: string;

		/**
		 * Gets or sets a value indicating whether the subtitle is forced.
		 * Required
		 */
		IsForced: boolean;

		/**
		 * Gets or sets the subtitle language.
		 * Required
		 */
		Language: string;
	}

	/** Upload subtitles dto. */
	export interface UploadSubtitleDtoFormProperties {

		/**
		 * Gets or sets the subtitle data.
		 * Required
		 */
		Data: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the subtitle format.
		 * Required
		 */
		Format: FormControl<string | null | undefined>,

		/**
		 * Gets or sets a value indicating whether the subtitle is forced.
		 * Required
		 */
		IsForced: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets the subtitle language.
		 * Required
		 */
		Language: FormControl<string | null | undefined>,
	}
	export function CreateUploadSubtitleDtoFormGroup() {
		return new FormGroup<UploadSubtitleDtoFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsForced: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Class UtcTimeResponse. */
	export interface UtcTimeResponse {

		/** Gets the UTC time when request has been received. */
		RequestReceptionTime?: Date | null;

		/** Gets the UTC time when response has been sent. */
		ResponseTransmissionTime?: Date | null;
	}

	/** Class UtcTimeResponse. */
	export interface UtcTimeResponseFormProperties {

		/** Gets the UTC time when request has been received. */
		RequestReceptionTime: FormControl<Date | null | undefined>,

		/** Gets the UTC time when response has been sent. */
		ResponseTransmissionTime: FormControl<Date | null | undefined>,
	}
	export function CreateUtcTimeResponseFormGroup() {
		return new FormGroup<UtcTimeResponseFormProperties>({
			RequestReceptionTime: new FormControl<Date | null | undefined>(undefined),
			ResponseTransmissionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Validate path object. */
	export interface ValidatePathDto {

		/** Gets or sets is path file. */
		IsFile?: boolean | null;

		/** Gets or sets the path. */
		Path?: string | null;

		/** Gets or sets a value indicating whether validate if path is writable. */
		ValidateWritable?: boolean | null;
	}

	/** Validate path object. */
	export interface ValidatePathDtoFormProperties {

		/** Gets or sets is path file. */
		IsFile: FormControl<boolean | null | undefined>,

		/** Gets or sets the path. */
		Path: FormControl<string | null | undefined>,

		/** Gets or sets a value indicating whether validate if path is writable. */
		ValidateWritable: FormControl<boolean | null | undefined>,
	}
	export function CreateValidatePathDtoFormGroup() {
		return new FormGroup<ValidatePathDtoFormProperties>({
			IsFile: new FormControl<boolean | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			ValidateWritable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Video3DFormat { HalfSideBySide = 0, FullSideBySide = 1, FullTopAndBottom = 2, HalfTopAndBottom = 3, MVC = 4 }


	/** Enum VideoType. */
	export enum VideoType { VideoFile = 0, Iso = 1, Dvd = 2, BluRay = 3 }


	/** Used to hold information about a user's list of configured virtual folders. */
	export interface VirtualFolderInfo {

		/** Gets or sets the type of the collection. */
		CollectionType?: string | null;

		/** Gets or sets the item identifier. */
		ItemId?: string | null;
		LibraryOptions?: LibraryOptions;

		/** Gets or sets the locations. */
		Locations?: Array<string>;

		/** Gets or sets the name. */
		Name?: string | null;

		/** Gets or sets the primary image item identifier. */
		PrimaryImageItemId?: string | null;
		RefreshProgress?: number | null;
		RefreshStatus?: string | null;
	}

	/** Used to hold information about a user's list of configured virtual folders. */
	export interface VirtualFolderInfoFormProperties {

		/** Gets or sets the type of the collection. */
		CollectionType: FormControl<string | null | undefined>,

		/** Gets or sets the item identifier. */
		ItemId: FormControl<string | null | undefined>,

		/** Gets or sets the name. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the primary image item identifier. */
		PrimaryImageItemId: FormControl<string | null | undefined>,
		RefreshProgress: FormControl<number | null | undefined>,
		RefreshStatus: FormControl<string | null | undefined>,
	}
	export function CreateVirtualFolderInfoFormGroup() {
		return new FormGroup<VirtualFolderInfoFormProperties>({
			CollectionType: new FormControl<string | null | undefined>(undefined),
			ItemId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryImageItemId: new FormControl<string | null | undefined>(undefined),
			RefreshProgress: new FormControl<number | null | undefined>(undefined),
			RefreshStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the MAC address and port for wake-on-LAN functionality. */
	export interface WakeOnLanInfo {

		/** Gets the MAC address of the device. */
		MacAddress?: string | null;

		/** Gets or sets the wake-on-LAN port. */
		Port?: number | null;
	}

	/** Provides the MAC address and port for wake-on-LAN functionality. */
	export interface WakeOnLanInfoFormProperties {

		/** Gets the MAC address of the device. */
		MacAddress: FormControl<string | null | undefined>,

		/** Gets or sets the wake-on-LAN port. */
		Port: FormControl<number | null | undefined>,
	}
	export function CreateWakeOnLanInfoFormGroup() {
		return new FormGroup<WakeOnLanInfoFormProperties>({
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an instant playlist based on a given song.
		 * Get Albums/{id}/InstantMix
		 * @param {string} id The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Instant playlist returned.
		 */
		GetInstantMixFromAlbum(id: string, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Albums/' + (id == null ? '' : encodeURIComponent(id)) + '/InstantMix&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Gets similar items.
		 * Get Albums/{itemId}/Similar
		 * @param {string} itemId The item id.
		 * @param {Array<string>} excludeArtistIds Exclude artist ids.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @return {BaseItemDtoQueryResult} Similar items returned.
		 */
		GetSimilarAlbums(itemId: string, excludeArtistIds: Array<string> | null | undefined, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Albums/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Similar&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&'), {});
		}

		/**
		 * Gets all artists from a given item, folder, or the entire library.
		 * Get Artists
		 * @param {number} minCommunityRating Optional filter by minimum community rating.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} searchTerm Optional. Search term.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {Array<string>} mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
		 * @param {Array<string>} genres Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
		 * @param {Array<string>} genreIds Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
		 * @param {Array<string>} officialRatings Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
		 * @param {Array<string>} tags Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
		 * @param {Array<number>} years Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
		 * @param {boolean} enableUserData Optional, include user data.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} person Optional. If specified, results will be filtered to include only those containing the specified person.
		 * @param {Array<string>} personIds Optional. If specified, results will be filtered to include only those containing the specified person ids.
		 * @param {Array<string>} personTypes Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
		 * @param {Array<string>} studios Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
		 * @param {Array<string>} studioIds Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
		 * @param {string} userId User id.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @param {boolean} enableTotalRecordCount Total record count.
		 * @return {BaseItemDtoQueryResult} Artists returned.
		 */
		GetArtists(minCommunityRating: number | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, searchTerm: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, filters: Array<ItemFilter> | null | undefined, isFavorite: boolean | null | undefined, mediaTypes: Array<string> | null | undefined, genres: Array<string> | null | undefined, genreIds: Array<string> | null | undefined, officialRatings: Array<string> | null | undefined, tags: Array<string> | null | undefined, years: Array<number> | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, person: string | null | undefined, personIds: Array<string> | null | undefined, personTypes: Array<string> | null | undefined, studios: Array<string> | null | undefined, studioIds: Array<string> | null | undefined, userId: string | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, enableImages: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Artists?minCommunityRating=' + minCommunityRating + '&startIndex=' + startIndex + '&limit=' + limit + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + filters?.map(z => `filters=${z}`).join('&') + '&isFavorite=' + isFavorite + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&' + genres?.map(z => `genres=${encodeURIComponent(z)}`).join('&') + '&' + genreIds?.map(z => `genreIds=${encodeURIComponent(z)}`).join('&') + '&' + officialRatings?.map(z => `officialRatings=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&' + years?.map(z => `years=${z}`).join('&') + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&person=' + (person == null ? '' : encodeURIComponent(person)) + '&' + personIds?.map(z => `personIds=${encodeURIComponent(z)}`).join('&') + '&' + personTypes?.map(z => `personTypes=${encodeURIComponent(z)}`).join('&') + '&' + studios?.map(z => `studios=${encodeURIComponent(z)}`).join('&') + '&' + studioIds?.map(z => `studioIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&enableImages=' + enableImages + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets all album artists from a given item, folder, or the entire library.
		 * Get Artists/AlbumArtists
		 * @param {number} minCommunityRating Optional filter by minimum community rating.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} searchTerm Optional. Search term.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {Array<string>} mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
		 * @param {Array<string>} genres Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
		 * @param {Array<string>} genreIds Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
		 * @param {Array<string>} officialRatings Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
		 * @param {Array<string>} tags Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
		 * @param {Array<number>} years Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
		 * @param {boolean} enableUserData Optional, include user data.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} person Optional. If specified, results will be filtered to include only those containing the specified person.
		 * @param {Array<string>} personIds Optional. If specified, results will be filtered to include only those containing the specified person ids.
		 * @param {Array<string>} personTypes Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
		 * @param {Array<string>} studios Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
		 * @param {Array<string>} studioIds Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
		 * @param {string} userId User id.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @param {boolean} enableTotalRecordCount Total record count.
		 * @return {BaseItemDtoQueryResult} Album artists returned.
		 */
		GetAlbumArtists(minCommunityRating: number | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, searchTerm: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, filters: Array<ItemFilter> | null | undefined, isFavorite: boolean | null | undefined, mediaTypes: Array<string> | null | undefined, genres: Array<string> | null | undefined, genreIds: Array<string> | null | undefined, officialRatings: Array<string> | null | undefined, tags: Array<string> | null | undefined, years: Array<number> | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, person: string | null | undefined, personIds: Array<string> | null | undefined, personTypes: Array<string> | null | undefined, studios: Array<string> | null | undefined, studioIds: Array<string> | null | undefined, userId: string | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, enableImages: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Artists/AlbumArtists?minCommunityRating=' + minCommunityRating + '&startIndex=' + startIndex + '&limit=' + limit + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + filters?.map(z => `filters=${z}`).join('&') + '&isFavorite=' + isFavorite + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&' + genres?.map(z => `genres=${encodeURIComponent(z)}`).join('&') + '&' + genreIds?.map(z => `genreIds=${encodeURIComponent(z)}`).join('&') + '&' + officialRatings?.map(z => `officialRatings=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&' + years?.map(z => `years=${z}`).join('&') + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&person=' + (person == null ? '' : encodeURIComponent(person)) + '&' + personIds?.map(z => `personIds=${encodeURIComponent(z)}`).join('&') + '&' + personTypes?.map(z => `personTypes=${encodeURIComponent(z)}`).join('&') + '&' + studios?.map(z => `studios=${encodeURIComponent(z)}`).join('&') + '&' + studioIds?.map(z => `studioIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&enableImages=' + enableImages + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Creates an instant playlist based on a given song.
		 * Get Artists/{id}/InstantMix
		 * @param {string} id The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Instant playlist returned.
		 */
		GetInstantMixFromArtists(id: string, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Artists/' + (id == null ? '' : encodeURIComponent(id)) + '/InstantMix&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Gets similar items.
		 * Get Artists/{itemId}/Similar
		 * @param {string} itemId The item id.
		 * @param {Array<string>} excludeArtistIds Exclude artist ids.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @return {BaseItemDtoQueryResult} Similar items returned.
		 */
		GetSimilarArtists(itemId: string, excludeArtistIds: Array<string> | null | undefined, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Artists/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Similar&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&'), {});
		}

		/**
		 * Gets an artist by name.
		 * Get Artists/{name}
		 * @param {string} name Studio name.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @return {BaseItemDto} Artist returned.
		 */
		GetArtistByName(name: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'Artists/' + (name == null ? '' : encodeURIComponent(name)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get artist image by name.
		 * Get Artists/{name}/Images/{imageType}/{imageIndex}
		 * @param {string} name Artist name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetArtistImage(name: string, imageType: ImageOptionType, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Artists/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '/' + imageIndex + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified audio segment for an audio item.
		 * Get Audio/{itemId}/hls/{segmentId}/stream.aac
		 * @param {string} itemId The item id.
		 * @param {string} segmentId The segment id.
		 * @return {void} Hls audio segment returned.
		 */
		GetHlsAudioSegmentLegacyAac(itemId: string, segmentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/hls/' + (segmentId == null ? '' : encodeURIComponent(segmentId)) + '/stream.aac', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified audio segment for an audio item.
		 * Get Audio/{itemId}/hls/{segmentId}/stream.mp3
		 * @param {string} itemId The item id.
		 * @param {string} segmentId The segment id.
		 * @return {void} Hls audio segment returned.
		 */
		GetHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/hls/' + (segmentId == null ? '' : encodeURIComponent(segmentId)) + '/stream.mp3', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a video stream using HTTP live streaming.
		 * Get Audio/{itemId}/hls1/{playlistId}/{segmentId}.{container}
		 * @param {string} itemId The item id.
		 * @param {string} playlistId The playlist id.
		 * @param {number} segmentId The segment id.
		 * @param {string} container The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment length.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} maxStreamingBitrate Optional. The maximum streaming bitrate.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Video stream returned.
		 */
		GetHlsAudioSegment(itemId: string, playlistId: string, segmentId: number, container: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, maxStreamingBitrate: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/hls1/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/' + segmentId + '.' + (container == null ? '' : encodeURIComponent(container)) + '&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&maxStreamingBitrate=' + maxStreamingBitrate + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an audio stream using HTTP live streaming.
		 * Get Audio/{itemId}/main.m3u8
		 * @param {string} itemId The item id.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment length.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} maxStreamingBitrate Optional. The maximum streaming bitrate.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Audio stream returned.
		 */
		GetVariantHlsAudioPlaylist(itemId: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, maxStreamingBitrate: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/main.m3u8&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&maxStreamingBitrate=' + maxStreamingBitrate + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an audio hls playlist stream.
		 * Get Audio/{itemId}/master.m3u8
		 * @param {string} itemId The item id.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment length.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} maxStreamingBitrate Optional. The maximum streaming bitrate.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @param {boolean} enableAdaptiveBitrateStreaming Enable adaptive bitrate streaming.
		 * @return {void} Audio stream returned.
		 */
		GetMasterHlsAudioPlaylist(itemId: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, maxStreamingBitrate: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined, enableAdaptiveBitrateStreaming: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/master.m3u8&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&maxStreamingBitrate=' + maxStreamingBitrate + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions + '&enableAdaptiveBitrateStreaming=' + enableAdaptiveBitrateStreaming, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an audio stream.
		 * Get Audio/{itemId}/stream
		 * @param {string} itemId The item id.
		 * @param {string} container The audio container.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment length.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Audio stream returned.
		 */
		GetAudioStream(itemId: string, container: string | null | undefined, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/stream&container=' + (container == null ? '' : encodeURIComponent(container)) + '&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an audio stream.
		 * Get Audio/{itemId}/stream.{container}
		 * @param {string} itemId The item id.
		 * @param {string} container The audio container.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment lenght.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamporphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Audio stream returned.
		 */
		GetAudioStreamByContainer(itemId: string, container: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/stream.' + (container == null ? '' : encodeURIComponent(container)) + '&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an audio stream.
		 * Get Audio/{itemId}/universal
		 * @param {string} itemId The item id.
		 * @param {Array<string>} container Optional. The audio container.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} userId Optional. The user id.
		 * @param {string} audioCodec Optional. The audio codec to transcode to.
		 * @param {number} maxAudioChannels Optional. The maximum number of audio channels.
		 * @param {number} transcodingAudioChannels Optional. The number of how many audio channels to transcode to.
		 * @param {number} maxStreamingBitrate Optional. The maximum streaming bitrate.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {string} transcodingContainer Optional. The container to transcode to.
		 * @param {string} transcodingProtocol Optional. The transcoding protocol.
		 * @param {number} maxAudioSampleRate Optional. The maximum audio sample rate.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {boolean} enableRemoteMedia Optional. Whether to enable remote media.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {boolean} enableRedirection Whether to enable redirection. Defaults to true.
		 * @return {void} Audio stream returned.
		 */
		GetUniversalAudioStream(itemId: string, container: Array<string> | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, userId: string | null | undefined, audioCodec: string | null | undefined, maxAudioChannels: number | null | undefined, transcodingAudioChannels: number | null | undefined, maxStreamingBitrate: number | null | undefined, audioBitRate: number | null | undefined, startTimeTicks: number | null | undefined, transcodingContainer: string | null | undefined, transcodingProtocol: string | null | undefined, maxAudioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, enableRemoteMedia: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, enableRedirection: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Audio/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/universal&' + container?.map(z => `container=${encodeURIComponent(z)}`).join('&') + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&maxAudioChannels=' + maxAudioChannels + '&transcodingAudioChannels=' + transcodingAudioChannels + '&maxStreamingBitrate=' + maxStreamingBitrate + '&audioBitRate=' + audioBitRate + '&startTimeTicks=' + startTimeTicks + '&transcodingContainer=' + (transcodingContainer == null ? '' : encodeURIComponent(transcodingContainer)) + '&transcodingProtocol=' + (transcodingProtocol == null ? '' : encodeURIComponent(transcodingProtocol)) + '&maxAudioSampleRate=' + maxAudioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&enableRemoteMedia=' + enableRemoteMedia + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&enableRedirection=' + enableRedirection, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all keys.
		 * Get Auth/Keys
		 * @return {AuthenticationInfoQueryResult} Api keys retrieved.
		 */
		GetKeys(): Observable<AuthenticationInfoQueryResult> {
			return this.http.get<AuthenticationInfoQueryResult>(this.baseUri + 'Auth/Keys', {});
		}

		/**
		 * Create a new api key.
		 * Post Auth/Keys
		 * @param {string} app Name of the app using the authentication key.
		 * @return {void} 
		 */
		CreateKey(app: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Auth/Keys?app=' + (app == null ? '' : encodeURIComponent(app)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an api key.
		 * Delete Auth/Keys/{key}
		 * @param {string} key The access token to delete.
		 * @return {void} 
		 */
		RevokeKey(key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Auth/Keys/' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all password reset providers.
		 * Get Auth/PasswordResetProviders
		 * @return {Array<NameIdPair>} Password reset providers retrieved.
		 */
		GetPasswordResetProviders(): Observable<Array<NameIdPair>> {
			return this.http.get<Array<NameIdPair>>(this.baseUri + 'Auth/PasswordResetProviders', {});
		}

		/**
		 * Get all auth providers.
		 * Get Auth/Providers
		 * @return {Array<NameIdPair>} Auth providers retrieved.
		 */
		GetAuthProviders(): Observable<Array<NameIdPair>> {
			return this.http.get<Array<NameIdPair>>(this.baseUri + 'Auth/Providers', {});
		}

		/**
		 * Gets branding configuration.
		 * Get Branding/Configuration
		 * @return {BrandingOptions} Branding configuration returned.
		 */
		GetBrandingOptions(): Observable<BrandingOptions> {
			return this.http.get<BrandingOptions>(this.baseUri + 'Branding/Configuration', {});
		}

		/**
		 * Gets branding css.
		 * Get Branding/Css
		 * @return {string} Branding css returned.
		 */
		GetBrandingCss(): Observable<string> {
			return this.http.get(this.baseUri + 'Branding/Css', { responseType: 'text' });
		}

		/**
		 * Gets branding css.
		 * Get Branding/Css.css
		 * @return {string} Branding css returned.
		 */
		GetBrandingCss_2(): Observable<string> {
			return this.http.get(this.baseUri + 'Branding/Css.css', { responseType: 'text' });
		}

		/**
		 * Gets available channels.
		 * Get Channels
		 * @param {string} userId User Id to filter by. Use System.Guid.Empty to not filter by user.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {boolean} supportsLatestItems Optional. Filter by channels that support getting latest items.
		 * @param {boolean} supportsMediaDeletion Optional. Filter by channels that support media deletion.
		 * @param {boolean} isFavorite Optional. Filter by channels that are favorite.
		 * @return {BaseItemDtoQueryResult} Channels returned.
		 */
		GetChannels(userId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, supportsLatestItems: boolean | null | undefined, supportsMediaDeletion: boolean | null | undefined, isFavorite: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Channels?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&supportsLatestItems=' + supportsLatestItems + '&supportsMediaDeletion=' + supportsMediaDeletion + '&isFavorite=' + isFavorite, {});
		}

		/**
		 * Get all channel features.
		 * Get Channels/Features
		 * @return {Array<ChannelFeatures>} All channel features returned.
		 */
		GetAllChannelFeatures(): Observable<Array<ChannelFeatures>> {
			return this.http.get<Array<ChannelFeatures>>(this.baseUri + 'Channels/Features', {});
		}

		/**
		 * Gets latest channel items.
		 * Get Channels/Items/Latest
		 * @param {string} userId Optional. User Id.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} channelIds Optional. Specify one or more channel id's, comma delimited.
		 * @return {BaseItemDtoQueryResult} Latest channel items returned.
		 */
		GetLatestChannelItems(userId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, filters: Array<ItemFilter> | null | undefined, fields: Array<ItemFields> | null | undefined, channelIds: Array<string> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Channels/Items/Latest?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&' + filters?.map(z => `filters=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + channelIds?.map(z => `channelIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get channel features.
		 * Get Channels/{channelId}/Features
		 * @param {string} channelId Channel id.
		 * @return {ChannelFeatures} Channel features returned.
		 */
		GetChannelFeatures(channelId: string): Observable<ChannelFeatures> {
			return this.http.get<ChannelFeatures>(this.baseUri + 'Channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/Features', {});
		}

		/**
		 * Get channel items.
		 * Get Channels/{channelId}/Items
		 * @param {string} channelId Channel Id.
		 * @param {string} folderId Optional. Folder Id.
		 * @param {string} userId Optional. User Id.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} sortOrder Optional. Sort Order - Ascending,Descending.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply.
		 * @param {string} sortBy Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @return {BaseItemDtoQueryResult} Channel items returned.
		 */
		GetChannelItems(channelId: string, folderId: string | null | undefined, userId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, sortOrder: string | null | undefined, filters: Array<ItemFilter> | null | undefined, sortBy: string | null | undefined, fields: Array<ItemFields> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/Items&folderId=' + (folderId == null ? '' : encodeURIComponent(folderId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&' + filters?.map(z => `filters=${z}`).join('&') + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&' + fields?.map(z => `fields=${z}`).join('&'), {});
		}

		/**
		 * Creates a new collection.
		 * Post Collections
		 * @param {string} name The name of the collection.
		 * @param {Array<string>} ids Item Ids to add to the collection.
		 * @param {string} parentId Optional. Create the collection within a specific folder.
		 * @param {boolean} isLocked Whether or not to lock the new collection.
		 * @return {CollectionCreationResult} Collection created.
		 */
		CreateCollection(name: string | null | undefined, ids: Array<string> | null | undefined, parentId: string | null | undefined, isLocked: boolean | null | undefined): Observable<CollectionCreationResult> {
			return this.http.post<CollectionCreationResult>(this.baseUri + 'Collections?name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&isLocked=' + isLocked, null, {});
		}

		/**
		 * Removes items from a collection.
		 * Delete Collections/{collectionId}/Items
		 * @param {string} collectionId The collection id.
		 * @param {Array<string>} ids Item ids, comma delimited.
		 * @return {void} 
		 */
		RemoveFromCollection(collectionId: string, ids: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/Items&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds items to a collection.
		 * Post Collections/{collectionId}/Items
		 * @param {string} collectionId The collection id.
		 * @param {Array<string>} ids Item ids, comma delimited.
		 * @return {void} 
		 */
		AddToCollection(collectionId: string, ids: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/Items&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a device.
		 * Delete Devices
		 * @param {string} id Device Id.
		 * @return {void} 
		 */
		DeleteDevice(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Devices?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Devices.
		 * Get Devices
		 * @param {boolean} supportsSync Gets or sets a value indicating whether [supports synchronize].
		 * @param {string} userId Gets or sets the user identifier.
		 * @return {DeviceInfoQueryResult} Devices retrieved.
		 */
		GetDevices(supportsSync: boolean | null | undefined, userId: string | null | undefined): Observable<DeviceInfoQueryResult> {
			return this.http.get<DeviceInfoQueryResult>(this.baseUri + 'Devices?supportsSync=' + supportsSync + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get info for a device.
		 * Get Devices/Info
		 * @param {string} id Device Id.
		 * @return {DeviceInfo} Device info retrieved.
		 */
		GetDeviceInfo(id: string): Observable<DeviceInfo> {
			return this.http.get<DeviceInfo>(this.baseUri + 'Devices/Info?id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get options for a device.
		 * Get Devices/Options
		 * @param {string} id Device Id.
		 * @return {DeviceOptions} Device options retrieved.
		 */
		GetDeviceOptions(id: string): Observable<DeviceOptions> {
			return this.http.get<DeviceOptions>(this.baseUri + 'Devices/Options?id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update device options.
		 * Post Devices/Options
		 * @param {string} id Device Id.
		 * @param {DeviceOptions} requestBody Device Options.
		 * @return {void} 
		 */
		UpdateDeviceOptions(id: string, requestBody: DeviceOptions): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Devices/Options?id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Display Preferences.
		 * Get DisplayPreferences/{displayPreferencesId}
		 * @param {string} displayPreferencesId Display preferences id.
		 * @param {string} userId User id.
		 * @param {string} client Client.
		 * @return {DisplayPreferencesDto} Display preferences retrieved.
		 */
		GetDisplayPreferences(displayPreferencesId: string, userId: string, client: string): Observable<DisplayPreferencesDto> {
			return this.http.get<DisplayPreferencesDto>(this.baseUri + 'DisplayPreferences/' + (displayPreferencesId == null ? '' : encodeURIComponent(displayPreferencesId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&client=' + (client == null ? '' : encodeURIComponent(client)), {});
		}

		/**
		 * Update Display Preferences.
		 * Post DisplayPreferences/{displayPreferencesId}
		 * @param {string} displayPreferencesId Display preferences id.
		 * @param {string} userId User Id.
		 * @param {string} client Client.
		 * @param {DisplayPreferencesDto} requestBody New Display Preferences object.
		 * @return {void} 
		 */
		UpdateDisplayPreferences(displayPreferencesId: string, userId: string, client: string, requestBody: DisplayPreferencesDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DisplayPreferences/' + (displayPreferencesId == null ? '' : encodeURIComponent(displayPreferencesId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&client=' + (client == null ? '' : encodeURIComponent(client)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get profile infos.
		 * Get Dlna/ProfileInfos
		 * @return {Array<DeviceProfileInfo>} Device profile infos returned.
		 */
		GetProfileInfos(): Observable<Array<DeviceProfileInfo>> {
			return this.http.get<Array<DeviceProfileInfo>>(this.baseUri + 'Dlna/ProfileInfos', {});
		}

		/**
		 * Creates a profile.
		 * Post Dlna/Profiles
		 * @param {DeviceProfile} requestBody Device profile.
		 * @return {void} 
		 */
		CreateProfile(requestBody: DeviceProfile): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Dlna/Profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the default profile.
		 * Get Dlna/Profiles/Default
		 * @return {DeviceProfile} Default device profile returned.
		 */
		GetDefaultProfile(): Observable<DeviceProfile> {
			return this.http.get<DeviceProfile>(this.baseUri + 'Dlna/Profiles/Default', {});
		}

		/**
		 * Deletes a profile.
		 * Delete Dlna/Profiles/{profileId}
		 * @param {string} profileId Profile id.
		 * @return {void} 
		 */
		DeleteProfile(profileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Dlna/Profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a single profile.
		 * Get Dlna/Profiles/{profileId}
		 * @param {string} profileId Profile Id.
		 * @return {DeviceProfile} Device profile returned.
		 */
		GetProfile(profileId: string): Observable<DeviceProfile> {
			return this.http.get<DeviceProfile>(this.baseUri + 'Dlna/Profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), {});
		}

		/**
		 * Updates a profile.
		 * Post Dlna/Profiles/{profileId}
		 * @param {string} profileId Profile id.
		 * @param {DeviceProfile} requestBody Device profile.
		 * @return {void} 
		 */
		UpdateProfile(profileId: string, requestBody: DeviceProfile): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Dlna/Profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a server icon.
		 * Get Dlna/icons/{fileName}
		 * @param {string} fileName The icon filename.
		 * @return {void} Request processed.
		 */
		GetIcon(fileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/icons/' + (fileName == null ? '' : encodeURIComponent(fileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna media receiver registrar xml.
		 * Get Dlna/{serverId}/ConnectionManager
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna media receiver registrar xml returned.
		 */
		GetConnectionManager(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ConnectionManager', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna media receiver registrar xml.
		 * Get Dlna/{serverId}/ConnectionManager/ConnectionManager
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna media receiver registrar xml returned.
		 */
		GetConnectionManager_2(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ConnectionManager/ConnectionManager', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna media receiver registrar xml.
		 * Get Dlna/{serverId}/ConnectionManager/ConnectionManager.xml
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna media receiver registrar xml returned.
		 */
		GetConnectionManager_3(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ConnectionManager/ConnectionManager.xml', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Process a connection manager control request.
		 * Post Dlna/{serverId}/ConnectionManager/Control
		 * @param {string} serverId Server UUID.
		 * @return {void} Request processed.
		 */
		ProcessConnectionManagerControlRequest(serverId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ConnectionManager/Control', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna content directory xml.
		 * Get Dlna/{serverId}/ContentDirectory
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna content directory returned.
		 */
		GetContentDirectory(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ContentDirectory', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna content directory xml.
		 * Get Dlna/{serverId}/ContentDirectory/ContentDirectory
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna content directory returned.
		 */
		GetContentDirectory_2(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ContentDirectory/ContentDirectory', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna content directory xml.
		 * Get Dlna/{serverId}/ContentDirectory/ContentDirectory.xml
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna content directory returned.
		 */
		GetContentDirectory_3(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ContentDirectory/ContentDirectory.xml', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Process a content directory control request.
		 * Post Dlna/{serverId}/ContentDirectory/Control
		 * @param {string} serverId Server UUID.
		 * @return {void} Request processed.
		 */
		ProcessContentDirectoryControlRequest(serverId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/ContentDirectory/Control', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna media receiver registrar xml.
		 * Get Dlna/{serverId}/MediaReceiverRegistrar
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna media receiver registrar xml returned.
		 */
		GetMediaReceiverRegistrar(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/MediaReceiverRegistrar', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Process a media receiver registrar control request.
		 * Post Dlna/{serverId}/MediaReceiverRegistrar/Control
		 * @param {string} serverId Server UUID.
		 * @return {void} Request processed.
		 */
		ProcessMediaReceiverRegistrarControlRequest(serverId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/MediaReceiverRegistrar/Control', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna media receiver registrar xml.
		 * Get Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna media receiver registrar xml returned.
		 */
		GetMediaReceiverRegistrar_2(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/MediaReceiverRegistrar/MediaReceiverRegistrar', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Dlna media receiver registrar xml.
		 * Get Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar.xml
		 * @param {string} serverId Server UUID.
		 * @return {void} Dlna media receiver registrar xml returned.
		 */
		GetMediaReceiverRegistrar_3(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/MediaReceiverRegistrar/MediaReceiverRegistrar.xml', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Description Xml.
		 * Get Dlna/{serverId}/description
		 * @param {string} serverId Server UUID.
		 * @return {void} Description xml returned.
		 */
		GetDescriptionXml(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/description', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Description Xml.
		 * Get Dlna/{serverId}/description.xml
		 * @param {string} serverId Server UUID.
		 * @return {void} Description xml returned.
		 */
		GetDescriptionXml_2(serverId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/description.xml', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a server icon.
		 * Get Dlna/{serverId}/icons/{fileName}
		 * @param {string} serverId Server UUID.
		 * @param {string} fileName The icon filename.
		 * @return {void} Request processed.
		 */
		GetIconId(serverId: string, fileName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Dlna/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/icons/' + (fileName == null ? '' : encodeURIComponent(fileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Default directory browser.
		 * Get Environment/DefaultDirectoryBrowser
		 * @return {DefaultDirectoryBrowserInfoDto} Default directory browser returned.
		 */
		GetDefaultDirectoryBrowser(): Observable<DefaultDirectoryBrowserInfoDto> {
			return this.http.get<DefaultDirectoryBrowserInfoDto>(this.baseUri + 'Environment/DefaultDirectoryBrowser', {});
		}

		/**
		 * Gets the contents of a given directory in the file system.
		 * Get Environment/DirectoryContents
		 * @param {string} path The path.
		 * @param {boolean} includeFiles An optional filter to include or exclude files from the results. true/false.
		 * @param {boolean} includeDirectories An optional filter to include or exclude folders from the results. true/false.
		 * @return {Array<FileSystemEntryInfo>} Directory contents returned.
		 */
		GetDirectoryContents(path: string, includeFiles: boolean | null | undefined, includeDirectories: boolean | null | undefined): Observable<Array<FileSystemEntryInfo>> {
			return this.http.get<Array<FileSystemEntryInfo>>(this.baseUri + 'Environment/DirectoryContents?path=' + (path == null ? '' : encodeURIComponent(path)) + '&includeFiles=' + includeFiles + '&includeDirectories=' + includeDirectories, {});
		}

		/**
		 * Gets available drives from the server's file system.
		 * Get Environment/Drives
		 * @return {Array<FileSystemEntryInfo>} List of entries returned.
		 */
		GetDrives(): Observable<Array<FileSystemEntryInfo>> {
			return this.http.get<Array<FileSystemEntryInfo>>(this.baseUri + 'Environment/Drives', {});
		}

		/**
		 * Gets network paths.
		 * Get Environment/NetworkShares
		 * @return {Array<FileSystemEntryInfo>} Empty array returned.
		 */
		GetNetworkShares(): Observable<Array<FileSystemEntryInfo>> {
			return this.http.get<Array<FileSystemEntryInfo>>(this.baseUri + 'Environment/NetworkShares', {});
		}

		/**
		 * Gets the parent path of a given path.
		 * Get Environment/ParentPath
		 * @param {string} path The path.
		 * @return {string} Success
		 */
		GetParentPath(path: string): Observable<string> {
			return this.http.get(this.baseUri + 'Environment/ParentPath?path=' + (path == null ? '' : encodeURIComponent(path)), { responseType: 'text' });
		}

		/**
		 * Validates path.
		 * Post Environment/ValidatePath
		 * @param {ValidatePathDto} requestBody Validate request object.
		 * @return {void} 
		 */
		ValidatePath(requestBody: ValidatePathDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Environment/ValidatePath', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of available fallback font files.
		 * Get FallbackFont/Fonts
		 * @return {Array<FontFile>} Information retrieved.
		 */
		GetFallbackFontList(): Observable<Array<FontFile>> {
			return this.http.get<Array<FontFile>>(this.baseUri + 'FallbackFont/Fonts', {});
		}

		/**
		 * Gets a fallback font file.
		 * Get FallbackFont/Fonts/{name}
		 * @param {string} name The name of the fallback font file to get.
		 * @return {void} Fallback font file retrieved.
		 */
		GetFallbackFont(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'FallbackFont/Fonts/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all genres from a given item, folder, or the entire library.
		 * Get Genres
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} searchTerm The search term.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} userId User id.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @param {boolean} enableTotalRecordCount Optional. Include total record count.
		 * @return {BaseItemDtoQueryResult} Genres returned.
		 */
		GetGenres(startIndex: number | null | undefined, limit: number | null | undefined, searchTerm: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, isFavorite: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, userId: string | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, enableImages: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Genres?startIndex=' + startIndex + '&limit=' + limit + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&isFavorite=' + isFavorite + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&enableImages=' + enableImages + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets a genre, by name.
		 * Get Genres/{genreName}
		 * @param {string} genreName The genre name.
		 * @param {string} userId The user id.
		 * @return {BaseItemDto} Genres returned.
		 */
		GetGenre(genreName: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'Genres/' + (genreName == null ? '' : encodeURIComponent(genreName)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get genre image by name.
		 * Get Genres/{name}/Images/{imageType}
		 * @param {string} name Genre name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetGenreImage(name: string, imageType: ImageOptionType, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Genres/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)) + '&imageIndex=' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get genre image by name.
		 * Get Genres/{name}/Images/{imageType}/{imageIndex}
		 * @param {string} name Genre name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex Image index.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @return {void} Image stream returned.
		 */
		GetGenreImageByIndex(name: string, imageType: ImageOptionType, imageIndex: number, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Genres/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '/' + imageIndex + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the current UTC time.
		 * Get GetUtcTime
		 * @return {UtcTimeResponse} Time returned.
		 */
		GetUtcTime(): Observable<UtcTimeResponse> {
			return this.http.get<UtcTimeResponse>(this.baseUri + 'GetUtcTime', {});
		}

		/**
		 * Get all general images.
		 * Get Images/General
		 * @return {Array<ImageByNameInfo>} Retrieved list of images.
		 */
		GetGeneralImages(): Observable<Array<ImageByNameInfo>> {
			return this.http.get<Array<ImageByNameInfo>>(this.baseUri + 'Images/General', {});
		}

		/**
		 * Get General Image.
		 * Get Images/General/{name}/{type}
		 * @param {string} name The name of the image.
		 * @param {string} type Image Type (primary, backdrop, logo, etc).
		 * @return {void} Image stream retrieved.
		 */
		GetGeneralImage(name: string, type: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Images/General/' + (name == null ? '' : encodeURIComponent(name)) + '/' + (type == null ? '' : encodeURIComponent(type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all media info images.
		 * Get Images/MediaInfo
		 * @return {Array<ImageByNameInfo>} Image list retrieved.
		 */
		GetMediaInfoImages(): Observable<Array<ImageByNameInfo>> {
			return this.http.get<Array<ImageByNameInfo>>(this.baseUri + 'Images/MediaInfo', {});
		}

		/**
		 * Get media info image.
		 * Get Images/MediaInfo/{theme}/{name}
		 * @param {string} theme The theme to get the image from.
		 * @param {string} name The name of the image.
		 * @return {void} Image stream retrieved.
		 */
		GetMediaInfoImage(theme: string, name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Images/MediaInfo/' + (theme == null ? '' : encodeURIComponent(theme)) + '/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all general images.
		 * Get Images/Ratings
		 * @return {Array<ImageByNameInfo>} Retrieved list of images.
		 */
		GetRatingImages(): Observable<Array<ImageByNameInfo>> {
			return this.http.get<Array<ImageByNameInfo>>(this.baseUri + 'Images/Ratings', {});
		}

		/**
		 * Get rating image.
		 * Get Images/Ratings/{theme}/{name}
		 * @param {string} theme The theme to get the image from.
		 * @param {string} name The name of the image.
		 * @return {void} Image stream retrieved.
		 */
		GetRatingImage(theme: string, name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Images/Ratings/' + (theme == null ? '' : encodeURIComponent(theme)) + '/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a remote image.
		 * Get Images/Remote
		 * @param {string} imageUrl The image url.
		 * @return {void} Remote image returned.
		 */
		GetRemoteImage(imageUrl: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Images/Remote?imageUrl=' + (imageUrl == null ? '' : encodeURIComponent(imageUrl)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes items from the library and filesystem.
		 * Delete Items
		 * @param {Array<string>} ids The item ids.
		 * @return {void} 
		 */
		DeleteItems(ids: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Items?' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets items based on a query.
		 * Get Items
		 * @param {string} userId The user id supplied as query parameter.
		 * @param {string} maxOfficialRating Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
		 * @param {boolean} hasThemeSong Optional filter by items with theme songs.
		 * @param {boolean} hasThemeVideo Optional filter by items with theme videos.
		 * @param {boolean} hasSubtitles Optional filter by items with subtitles.
		 * @param {boolean} hasSpecialFeature Optional filter by items with special features.
		 * @param {boolean} hasTrailer Optional filter by items with trailers.
		 * @param {string} adjacentTo Optional. Return items that are siblings of a supplied item.
		 * @param {number} parentIndexNumber Optional filter by parent index number.
		 * @param {boolean} hasParentalRating Optional filter by items that have or do not have a parental rating.
		 * @param {boolean} isHd Optional filter by items that are HD or not.
		 * @param {boolean} is4K Optional filter by items that are 4K or not.
		 * @param {Array<LocationType>} locationTypes Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.
		 * @param {Array<LocationType>} excludeLocationTypes Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.
		 * @param {boolean} isMissing Optional filter by items that are missing episodes or not.
		 * @param {boolean} isUnaired Optional filter by items that are unaired episodes or not.
		 * @param {number} minCommunityRating Optional filter by minimum community rating.
		 * @param {number} minCriticRating Optional filter by minimum critic rating.
		 * @param {Date} minPremiereDate Optional. The minimum premiere date. Format = ISO.
		 * @param {Date} minDateLastSaved Optional. The minimum last saved date. Format = ISO.
		 * @param {Date} minDateLastSavedForUser Optional. The minimum last saved date for the current user. Format = ISO.
		 * @param {Date} maxPremiereDate Optional. The maximum premiere date. Format = ISO.
		 * @param {boolean} hasOverview Optional filter by items that have an overview or not.
		 * @param {boolean} hasImdbId Optional filter by items that have an imdb id or not.
		 * @param {boolean} hasTmdbId Optional filter by items that have a tmdb id or not.
		 * @param {boolean} hasTvdbId Optional filter by items that have a tvdb id or not.
		 * @param {Array<string>} excludeItemIds Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {boolean} recursive When searching within folders, this determines whether or not the search will be recursive. true/false.
		 * @param {string} searchTerm Optional. Filter based on a search term.
		 * @param {string} sortOrder Sort Order - Ascending,Descending.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {Array<string>} mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
		 * @param {Array<ImageType>} imageTypes Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.
		 * @param {string} sortBy Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
		 * @param {boolean} isPlayed Optional filter by items that are played, or not.
		 * @param {Array<string>} genres Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
		 * @param {Array<string>} officialRatings Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
		 * @param {Array<string>} tags Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
		 * @param {Array<number>} years Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
		 * @param {boolean} enableUserData Optional, include user data.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} person Optional. If specified, results will be filtered to include only those containing the specified person.
		 * @param {Array<string>} personIds Optional. If specified, results will be filtered to include only those containing the specified person id.
		 * @param {Array<string>} personTypes Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
		 * @param {Array<string>} studios Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
		 * @param {Array<string>} artists Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.
		 * @param {Array<string>} excludeArtistIds Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.
		 * @param {Array<string>} artistIds Optional. If specified, results will be filtered to include only those containing the specified artist id.
		 * @param {Array<string>} albumArtistIds Optional. If specified, results will be filtered to include only those containing the specified album artist id.
		 * @param {Array<string>} contributingArtistIds Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.
		 * @param {Array<string>} albums Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.
		 * @param {Array<string>} albumIds Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.
		 * @param {Array<string>} ids Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited.
		 * @param {Array<VideoType>} videoTypes Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.
		 * @param {string} minOfficialRating Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
		 * @param {boolean} isLocked Optional filter by items that are locked.
		 * @param {boolean} isPlaceHolder Optional filter by items that are placeholders.
		 * @param {boolean} hasOfficialRating Optional filter by items that have official ratings.
		 * @param {boolean} collapseBoxSetItems Whether or not to hide items behind their boxsets.
		 * @param {number} minWidth Optional. Filter by the minimum width of the item.
		 * @param {number} minHeight Optional. Filter by the minimum height of the item.
		 * @param {number} maxWidth Optional. Filter by the maximum width of the item.
		 * @param {number} maxHeight Optional. Filter by the maximum height of the item.
		 * @param {boolean} is3D Optional filter by items that are 3D, or not.
		 * @param {Array<SeriesStatus>} seriesStatus Optional filter by Series Status. Allows multiple, comma delimited.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {Array<string>} studioIds Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
		 * @param {Array<string>} genreIds Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
		 * @param {boolean} enableTotalRecordCount Optional. Enable the total record count.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @return {BaseItemDtoQueryResult} Success
		 */
		GetItems(userId: string | null | undefined, maxOfficialRating: string | null | undefined, hasThemeSong: boolean | null | undefined, hasThemeVideo: boolean | null | undefined, hasSubtitles: boolean | null | undefined, hasSpecialFeature: boolean | null | undefined, hasTrailer: boolean | null | undefined, adjacentTo: string | null | undefined, parentIndexNumber: number | null | undefined, hasParentalRating: boolean | null | undefined, isHd: boolean | null | undefined, is4K: boolean | null | undefined, locationTypes: Array<LocationType> | null | undefined, excludeLocationTypes: Array<LocationType> | null | undefined, isMissing: boolean | null | undefined, isUnaired: boolean | null | undefined, minCommunityRating: number | null | undefined, minCriticRating: number | null | undefined, minPremiereDate: Date | null | undefined, minDateLastSaved: Date | null | undefined, minDateLastSavedForUser: Date | null | undefined, maxPremiereDate: Date | null | undefined, hasOverview: boolean | null | undefined, hasImdbId: boolean | null | undefined, hasTmdbId: boolean | null | undefined, hasTvdbId: boolean | null | undefined, excludeItemIds: Array<string> | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, recursive: boolean | null | undefined, searchTerm: string | null | undefined, sortOrder: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, filters: Array<ItemFilter> | null | undefined, isFavorite: boolean | null | undefined, mediaTypes: Array<string> | null | undefined, imageTypes: Array<ImageType> | null | undefined, sortBy: string | null | undefined, isPlayed: boolean | null | undefined, genres: Array<string> | null | undefined, officialRatings: Array<string> | null | undefined, tags: Array<string> | null | undefined, years: Array<number> | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, person: string | null | undefined, personIds: Array<string> | null | undefined, personTypes: Array<string> | null | undefined, studios: Array<string> | null | undefined, artists: Array<string> | null | undefined, excludeArtistIds: Array<string> | null | undefined, artistIds: Array<string> | null | undefined, albumArtistIds: Array<string> | null | undefined, contributingArtistIds: Array<string> | null | undefined, albums: Array<string> | null | undefined, albumIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, videoTypes: Array<VideoType> | null | undefined, minOfficialRating: string | null | undefined, isLocked: boolean | null | undefined, isPlaceHolder: boolean | null | undefined, hasOfficialRating: boolean | null | undefined, collapseBoxSetItems: boolean | null | undefined, minWidth: number | null | undefined, minHeight: number | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, is3D: boolean | null | undefined, seriesStatus: Array<SeriesStatus> | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, studioIds: Array<string> | null | undefined, genreIds: Array<string> | null | undefined, enableTotalRecordCount: boolean | null | undefined, enableImages: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Items?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&maxOfficialRating=' + (maxOfficialRating == null ? '' : encodeURIComponent(maxOfficialRating)) + '&hasThemeSong=' + hasThemeSong + '&hasThemeVideo=' + hasThemeVideo + '&hasSubtitles=' + hasSubtitles + '&hasSpecialFeature=' + hasSpecialFeature + '&hasTrailer=' + hasTrailer + '&adjacentTo=' + (adjacentTo == null ? '' : encodeURIComponent(adjacentTo)) + '&parentIndexNumber=' + parentIndexNumber + '&hasParentalRating=' + hasParentalRating + '&isHd=' + isHd + '&is4K=' + is4K + '&' + locationTypes?.map(z => `locationTypes=${z}`).join('&') + '&' + excludeLocationTypes?.map(z => `excludeLocationTypes=${z}`).join('&') + '&isMissing=' + isMissing + '&isUnaired=' + isUnaired + '&minCommunityRating=' + minCommunityRating + '&minCriticRating=' + minCriticRating + '&minPremiereDate=' + minPremiereDate?.toISOString() + '&minDateLastSaved=' + minDateLastSaved?.toISOString() + '&minDateLastSavedForUser=' + minDateLastSavedForUser?.toISOString() + '&maxPremiereDate=' + maxPremiereDate?.toISOString() + '&hasOverview=' + hasOverview + '&hasImdbId=' + hasImdbId + '&hasTmdbId=' + hasTmdbId + '&hasTvdbId=' + hasTvdbId + '&' + excludeItemIds?.map(z => `excludeItemIds=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex + '&limit=' + limit + '&recursive=' + recursive + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + filters?.map(z => `filters=${z}`).join('&') + '&isFavorite=' + isFavorite + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&' + imageTypes?.map(z => `imageTypes=${z}`).join('&') + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&isPlayed=' + isPlayed + '&' + genres?.map(z => `genres=${encodeURIComponent(z)}`).join('&') + '&' + officialRatings?.map(z => `officialRatings=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&' + years?.map(z => `years=${z}`).join('&') + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&person=' + (person == null ? '' : encodeURIComponent(person)) + '&' + personIds?.map(z => `personIds=${encodeURIComponent(z)}`).join('&') + '&' + personTypes?.map(z => `personTypes=${encodeURIComponent(z)}`).join('&') + '&' + studios?.map(z => `studios=${encodeURIComponent(z)}`).join('&') + '&' + artists?.map(z => `artists=${encodeURIComponent(z)}`).join('&') + '&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + artistIds?.map(z => `artistIds=${encodeURIComponent(z)}`).join('&') + '&' + albumArtistIds?.map(z => `albumArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + contributingArtistIds?.map(z => `contributingArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + albums?.map(z => `albums=${encodeURIComponent(z)}`).join('&') + '&' + albumIds?.map(z => `albumIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + videoTypes?.map(z => `videoTypes=${z}`).join('&') + '&minOfficialRating=' + (minOfficialRating == null ? '' : encodeURIComponent(minOfficialRating)) + '&isLocked=' + isLocked + '&isPlaceHolder=' + isPlaceHolder + '&hasOfficialRating=' + hasOfficialRating + '&collapseBoxSetItems=' + collapseBoxSetItems + '&minWidth=' + minWidth + '&minHeight=' + minHeight + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&is3D=' + is3D + '&' + seriesStatus?.map(z => `seriesStatus=${z}`).join('&') + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&' + studioIds?.map(z => `studioIds=${encodeURIComponent(z)}`).join('&') + '&' + genreIds?.map(z => `genreIds=${encodeURIComponent(z)}`).join('&') + '&enableTotalRecordCount=' + enableTotalRecordCount + '&enableImages=' + enableImages, {});
		}

		/**
		 * Get item counts.
		 * Get Items/Counts
		 * @param {string} userId Optional. Get counts from a specific user's library.
		 * @param {boolean} isFavorite Optional. Get counts of favorite items.
		 * @return {ItemCounts} Item counts returned.
		 */
		GetItemCounts(userId: string | null | undefined, isFavorite: boolean | null | undefined): Observable<ItemCounts> {
			return this.http.get<ItemCounts>(this.baseUri + 'Items/Counts?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&isFavorite=' + isFavorite, {});
		}

		/**
		 * Gets legacy query filters.
		 * Get Items/Filters
		 * @param {string} userId Optional. User id.
		 * @param {string} parentId Optional. Parent id.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} mediaTypes Optional. Filter by MediaType. Allows multiple, comma delimited.
		 * @return {QueryFiltersLegacy} Legacy filters retrieved.
		 */
		GetQueryFiltersLegacy(userId: string | null | undefined, parentId: string | null | undefined, includeItemTypes: Array<string> | null | undefined, mediaTypes: Array<string> | null | undefined): Observable<QueryFiltersLegacy> {
			return this.http.get<QueryFiltersLegacy>(this.baseUri + 'Items/Filters?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets query filters.
		 * Get Items/Filters2
		 * @param {string} userId Optional. User id.
		 * @param {string} parentId Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {boolean} isAiring Optional. Is item airing.
		 * @param {boolean} isMovie Optional. Is item movie.
		 * @param {boolean} isSports Optional. Is item sports.
		 * @param {boolean} isKids Optional. Is item kids.
		 * @param {boolean} isNews Optional. Is item news.
		 * @param {boolean} isSeries Optional. Is item series.
		 * @param {boolean} recursive Optional. Search recursive.
		 * @return {QueryFilters} Filters retrieved.
		 */
		GetQueryFilters(userId: string | null | undefined, parentId: string | null | undefined, includeItemTypes: Array<string> | null | undefined, isAiring: boolean | null | undefined, isMovie: boolean | null | undefined, isSports: boolean | null | undefined, isKids: boolean | null | undefined, isNews: boolean | null | undefined, isSeries: boolean | null | undefined, recursive: boolean | null | undefined): Observable<QueryFilters> {
			return this.http.get<QueryFilters>(this.baseUri + 'Items/Filters2?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&isAiring=' + isAiring + '&isMovie=' + isMovie + '&isSports=' + isSports + '&isKids=' + isKids + '&isNews=' + isNews + '&isSeries=' + isSeries + '&recursive=' + recursive, {});
		}

		/**
		 * Applies search criteria to an item and refreshes metadata.
		 * Post Items/RemoteSearch/Apply/{itemId}
		 * @param {string} itemId Item id.
		 * @param {boolean} replaceAllImages Optional. Whether or not to replace all images. Default: True.
		 * @param {RemoteSearchResult} requestBody The remote search result.
		 * @return {void} 
		 */
		ApplySearchCriteria(itemId: string, replaceAllImages: boolean | null | undefined, requestBody: RemoteSearchResult): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/RemoteSearch/Apply/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '&replaceAllImages=' + replaceAllImages, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get book remote search.
		 * Post Items/RemoteSearch/Book
		 * @param {BookInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Book remote search executed.
		 */
		GetBookRemoteSearchResults(requestBody: BookInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/Book', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get box set remote search.
		 * Post Items/RemoteSearch/BoxSet
		 * @param {BoxSetInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Box set remote search executed.
		 */
		GetBoxSetRemoteSearchResults(requestBody: BoxSetInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/BoxSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a remote image.
		 * Get Items/RemoteSearch/Image
		 * @param {string} imageUrl The image url.
		 * @param {string} providerName The provider name.
		 * @return {void} Remote image retrieved.
		 */
		GetRemoteSearchImage(imageUrl: string, providerName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Items/RemoteSearch/Image?imageUrl=' + (imageUrl == null ? '' : encodeURIComponent(imageUrl)) + '&providerName=' + (providerName == null ? '' : encodeURIComponent(providerName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movie remote search.
		 * Post Items/RemoteSearch/Movie
		 * @param {MovieInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Movie remote search executed.
		 */
		GetMovieRemoteSearchResults(requestBody: MovieInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/Movie', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get music album remote search.
		 * Post Items/RemoteSearch/MusicAlbum
		 * @param {AlbumInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Music album remote search executed.
		 */
		GetMusicAlbumRemoteSearchResults(requestBody: AlbumInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/MusicAlbum', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get music artist remote search.
		 * Post Items/RemoteSearch/MusicArtist
		 * @param {ArtistInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Music artist remote search executed.
		 */
		GetMusicArtistRemoteSearchResults(requestBody: ArtistInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/MusicArtist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get music video remote search.
		 * Post Items/RemoteSearch/MusicVideo
		 * @param {MusicVideoInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Music video remote search executed.
		 */
		GetMusicVideoRemoteSearchResults(requestBody: MusicVideoInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/MusicVideo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get person remote search.
		 * Post Items/RemoteSearch/Person
		 * @param {PersonLookupInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Person remote search executed.
		 */
		GetPersonRemoteSearchResults(requestBody: PersonLookupInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/Person', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get series remote search.
		 * Post Items/RemoteSearch/Series
		 * @param {SeriesInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Series remote search executed.
		 */
		GetSeriesRemoteSearchResults(requestBody: SeriesInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/Series', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get trailer remote search.
		 * Post Items/RemoteSearch/Trailer
		 * @param {TrailerInfoRemoteSearchQuery} requestBody Remote search query.
		 * @return {Array<RemoteSearchResult>} Trailer remote search executed.
		 */
		GetTrailerRemoteSearchResults(requestBody: TrailerInfoRemoteSearchQuery): Observable<Array<RemoteSearchResult>> {
			return this.http.post<Array<RemoteSearchResult>>(this.baseUri + 'Items/RemoteSearch/Trailer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an instant playlist based on a given song.
		 * Get Items/{id}/InstantMix
		 * @param {string} id The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Instant playlist returned.
		 */
		GetInstantMixFromItem(id: string, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Items/' + (id == null ? '' : encodeURIComponent(id)) + '/InstantMix&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Deletes an item from the library and filesystem.
		 * Delete Items/{itemId}
		 * @param {string} itemId The item id.
		 * @return {void} 
		 */
		DeleteItem(itemId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an item.
		 * Post Items/{itemId}
		 * @param {string} itemId The item id.
		 * @param {BaseItemDto} requestBody The new item properties.
		 * @return {void} 
		 */
		UpdateItem(itemId: string, requestBody: BaseItemDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all parents of an item.
		 * Get Items/{itemId}/Ancestors
		 * @param {string} itemId The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @return {Array<BaseItemDto>} Item parents returned.
		 */
		GetAncestors(itemId: string, userId: string | null | undefined): Observable<Array<BaseItemDto>> {
			return this.http.get<Array<BaseItemDto>>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Ancestors&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Updates an item's content type.
		 * Post Items/{itemId}/ContentType
		 * @param {string} itemId The item id.
		 * @param {string} contentType The content type of the item.
		 * @return {void} 
		 */
		UpdateItemContentType(itemId: string, contentType: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/ContentType&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets critic review for an item.
		 * Get Items/{itemId}/CriticReviews
		 * @return {BaseItemDtoQueryResult} Critic reviews returned.
		 */
		GetCriticReviews(itemId: string): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/CriticReviews', {});
		}

		/**
		 * Downloads item media.
		 * Get Items/{itemId}/Download
		 * @param {string} itemId The item id.
		 * @return {void} Media downloaded.
		 */
		GetDownload(itemId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Download', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the item's external id info.
		 * Get Items/{itemId}/ExternalIdInfos
		 * @param {string} itemId Item id.
		 * @return {Array<ExternalIdInfo>} External id info retrieved.
		 */
		GetExternalIdInfos(itemId: string): Observable<Array<ExternalIdInfo>> {
			return this.http.get<Array<ExternalIdInfo>>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/ExternalIdInfos', {});
		}

		/**
		 * Get the original file of an item.
		 * Get Items/{itemId}/File
		 * @param {string} itemId The item id.
		 * @return {void} File stream returned.
		 */
		GetFile(itemId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/File', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get item image infos.
		 * Get Items/{itemId}/Images
		 * @param {string} itemId Item id.
		 * @return {Array<ImageInfo>} Item images returned.
		 */
		GetItemImageInfos(itemId: string): Observable<Array<ImageInfo>> {
			return this.http.get<Array<ImageInfo>>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images', {});
		}

		/**
		 * Delete an item's image.
		 * Delete Items/{itemId}/Images/{imageType}
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex The image index.
		 * @return {void} 
		 */
		DeleteItemImage(itemId: string, imageType: ImageOptionType, imageIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType + '&imageIndex=' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the item's image.
		 * Get Items/{itemId}/Images/{imageType}
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {ImageFormat} format Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetItemImage(itemId: string, imageType: ImageOptionType, maxWidth: number | null | undefined, maxHeight: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, tag: string | null | undefined, cropWhitespace: boolean | null | undefined, format: ImageFormat | null | undefined, addPlayedIndicator: boolean | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&width=' + width + '&height=' + height + '&quality=' + quality + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&cropWhitespace=' + cropWhitespace + '&format=' + format + '&addPlayedIndicator=' + addPlayedIndicator + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)) + '&imageIndex=' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set item image.
		 * Post Items/{itemId}/Images/{imageType}
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @return {void} 
		 */
		SetItemImage(itemId: string, imageType: ImageOptionType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an item's image.
		 * Delete Items/{itemId}/Images/{imageType}/{imageIndex}
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex The image index.
		 * @return {void} 
		 */
		DeleteItemImageByIndex(itemId: string, imageType: ImageOptionType, imageIndex: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType + '/' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the item's image.
		 * Get Items/{itemId}/Images/{imageType}/{imageIndex}
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex Image index.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {ImageFormat} format Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @return {void} Image stream returned.
		 */
		GetItemImageByIndex(itemId: string, imageType: ImageOptionType, imageIndex: number, maxWidth: number | null | undefined, maxHeight: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, tag: string | null | undefined, cropWhitespace: boolean | null | undefined, format: ImageFormat | null | undefined, addPlayedIndicator: boolean | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType + '/' + imageIndex + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&width=' + width + '&height=' + height + '&quality=' + quality + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&cropWhitespace=' + cropWhitespace + '&format=' + format + '&addPlayedIndicator=' + addPlayedIndicator + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set item image.
		 * Post Items/{itemId}/Images/{imageType}/{imageIndex}
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex (Unused) Image index.
		 * @return {void} 
		 */
		SetItemImageByIndex(itemId: string, imageType: ImageOptionType, imageIndex: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType + '/' + imageIndex, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the index for an item image.
		 * Post Items/{itemId}/Images/{imageType}/{imageIndex}/Index
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex Old image index.
		 * @param {number} newIndex New image index.
		 * @return {void} 
		 */
		UpdateItemImageIndex(itemId: string, imageType: ImageOptionType, imageIndex: number, newIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType + '/' + imageIndex + '/Index&newIndex=' + newIndex, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the item's image.
		 * Get Items/{itemId}/Images/{imageType}/{imageIndex}/{tag}/{format}/{maxWidth}/{maxHeight}/{percentPlayed}/{unplayedCount}
		 * @param {string} itemId Item id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetItemImage2(itemId: string, imageType: ImageOptionType, maxWidth: number, maxHeight: number, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, tag: string, cropWhitespace: boolean | null | undefined, format: ImageFormat, addPlayedIndicator: boolean | null | undefined, percentPlayed: number, unplayedCount: number, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Images/' + imageType + '/' + imageIndex + '/' + (tag == null ? '' : encodeURIComponent(tag)) + '/' + format + '/' + maxWidth + '/' + maxHeight + '/' + percentPlayed + '/' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets metadata editor info for an item.
		 * Get Items/{itemId}/MetadataEditor
		 * @param {string} itemId The item id.
		 * @return {MetadataEditorInfo} Item metadata editor returned.
		 */
		GetMetadataEditorInfo(itemId: string): Observable<MetadataEditorInfo> {
			return this.http.get<MetadataEditorInfo>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/MetadataEditor', {});
		}

		/**
		 * Gets live playback media info for an item.
		 * Get Items/{itemId}/PlaybackInfo
		 * @param {string} itemId The item id.
		 * @param {string} userId The user id.
		 * @return {PlaybackInfoResponse} Playback info returned.
		 */
		GetPlaybackInfo(itemId: string, userId: string): Observable<PlaybackInfoResponse> {
			return this.http.get<PlaybackInfoResponse>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/PlaybackInfo&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Gets live playback media info for an item.
		 * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
		 * Post Items/{itemId}/PlaybackInfo
		 * @param {string} itemId The item id.
		 * @param {string} userId The user id.
		 * @param {number} maxStreamingBitrate The maximum streaming bitrate.
		 * @param {number} startTimeTicks The start time in ticks.
		 * @param {number} audioStreamIndex The audio stream index.
		 * @param {number} subtitleStreamIndex The subtitle stream index.
		 * @param {number} maxAudioChannels The maximum number of audio channels.
		 * @param {string} mediaSourceId The media source id.
		 * @param {string} liveStreamId The livestream id.
		 * @param {boolean} autoOpenLiveStream Whether to auto open the livestream.
		 * @param {boolean} enableDirectPlay Whether to enable direct play. Default: true.
		 * @param {boolean} enableDirectStream Whether to enable direct stream. Default: true.
		 * @param {boolean} enableTranscoding Whether to enable transcoding. Default: true.
		 * @param {boolean} allowVideoStreamCopy Whether to allow to copy the video stream. Default: true.
		 * @param {boolean} allowAudioStreamCopy Whether to allow to copy the audio stream. Default: true.
		 * @param {PlaybackInfoDto} requestBody The playback info.
		 * @return {PlaybackInfoResponse} Playback info returned.
		 */
		GetPostedPlaybackInfo(itemId: string, userId: string | null | undefined, maxStreamingBitrate: number | null | undefined, startTimeTicks: number | null | undefined, audioStreamIndex: number | null | undefined, subtitleStreamIndex: number | null | undefined, maxAudioChannels: number | null | undefined, mediaSourceId: string | null | undefined, liveStreamId: string | null | undefined, autoOpenLiveStream: boolean | null | undefined, enableDirectPlay: boolean | null | undefined, enableDirectStream: boolean | null | undefined, enableTranscoding: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, requestBody: PlaybackInfoDto): Observable<PlaybackInfoResponse> {
			return this.http.post<PlaybackInfoResponse>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/PlaybackInfo&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&maxStreamingBitrate=' + maxStreamingBitrate + '&startTimeTicks=' + startTimeTicks + '&audioStreamIndex=' + audioStreamIndex + '&subtitleStreamIndex=' + subtitleStreamIndex + '&maxAudioChannels=' + maxAudioChannels + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&autoOpenLiveStream=' + autoOpenLiveStream + '&enableDirectPlay=' + enableDirectPlay + '&enableDirectStream=' + enableDirectStream + '&enableTranscoding=' + enableTranscoding + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refreshes metadata for an item.
		 * Post Items/{itemId}/Refresh
		 * @param {string} itemId Item id.
		 * @param {MetadataRefreshMode} metadataRefreshMode (Optional) Specifies the metadata refresh mode.
		 * @param {MetadataRefreshMode} imageRefreshMode (Optional) Specifies the image refresh mode.
		 * @param {boolean} replaceAllMetadata (Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.
		 * @param {boolean} replaceAllImages (Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.
		 * @return {void} 
		 */
		Post(itemId: string, metadataRefreshMode: MetadataRefreshMode | null | undefined, imageRefreshMode: MetadataRefreshMode | null | undefined, replaceAllMetadata: boolean | null | undefined, replaceAllImages: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Refresh&metadataRefreshMode=' + metadataRefreshMode + '&imageRefreshMode=' + imageRefreshMode + '&replaceAllMetadata=' + replaceAllMetadata + '&replaceAllImages=' + replaceAllImages, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets available remote images for an item.
		 * Get Items/{itemId}/RemoteImages
		 * @param {string} itemId Item Id.
		 * @param {ImageOptionType} type The image type.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} providerName Optional. The image provider to use.
		 * @param {boolean} includeAllLanguages Optional. Include all languages.
		 * @return {RemoteImageResult} Remote Images returned.
		 */
		GetRemoteImages(itemId: string, type: ImageOptionType | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, providerName: string | null | undefined, includeAllLanguages: boolean | null | undefined): Observable<RemoteImageResult> {
			return this.http.get<RemoteImageResult>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/RemoteImages&type=' + type + '&startIndex=' + startIndex + '&limit=' + limit + '&providerName=' + (providerName == null ? '' : encodeURIComponent(providerName)) + '&includeAllLanguages=' + includeAllLanguages, {});
		}

		/**
		 * Downloads a remote image for an item.
		 * Post Items/{itemId}/RemoteImages/Download
		 * @param {string} itemId Item Id.
		 * @param {ImageOptionType} type The image type.
		 * @param {string} imageUrl The image url.
		 * @return {void} 
		 */
		DownloadRemoteImage(itemId: string, type: ImageOptionType, imageUrl: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/RemoteImages/Download&type=' + type + '&imageUrl=' + (imageUrl == null ? '' : encodeURIComponent(imageUrl)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets available remote image providers for an item.
		 * Get Items/{itemId}/RemoteImages/Providers
		 * @param {string} itemId Item Id.
		 * @return {Array<ImageProviderInfo>} Returned remote image providers.
		 */
		GetRemoteImageProviders(itemId: string): Observable<Array<ImageProviderInfo>> {
			return this.http.get<Array<ImageProviderInfo>>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/RemoteImages/Providers', {});
		}

		/**
		 * Search remote subtitles.
		 * Get Items/{itemId}/RemoteSearch/Subtitles/{language}
		 * @param {string} itemId The item id.
		 * @param {string} language The language of the subtitles.
		 * @param {boolean} isPerfectMatch Optional. Only show subtitles which are a perfect match.
		 * @return {Array<RemoteSubtitleInfo>} Subtitles retrieved.
		 */
		SearchRemoteSubtitles(itemId: string, language: string, isPerfectMatch: boolean | null | undefined): Observable<Array<RemoteSubtitleInfo>> {
			return this.http.get<Array<RemoteSubtitleInfo>>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/RemoteSearch/Subtitles/' + (language == null ? '' : encodeURIComponent(language)) + '&isPerfectMatch=' + isPerfectMatch, {});
		}

		/**
		 * Downloads a remote subtitle.
		 * Post Items/{itemId}/RemoteSearch/Subtitles/{subtitleId}
		 * @param {string} itemId The item id.
		 * @param {string} subtitleId The subtitle id.
		 * @return {void} 
		 */
		DownloadRemoteSubtitles(itemId: string, subtitleId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/RemoteSearch/Subtitles/' + (subtitleId == null ? '' : encodeURIComponent(subtitleId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets similar items.
		 * Get Items/{itemId}/Similar
		 * @param {string} itemId The item id.
		 * @param {Array<string>} excludeArtistIds Exclude artist ids.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @return {BaseItemDtoQueryResult} Similar items returned.
		 */
		GetSimilarItems(itemId: string, excludeArtistIds: Array<string> | null | undefined, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Similar&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&'), {});
		}

		/**
		 * Get theme songs and videos for an item.
		 * Get Items/{itemId}/ThemeMedia
		 * @param {string} itemId The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {boolean} inheritFromParent Optional. Determines whether or not parent items should be searched for theme media.
		 * @return {AllThemeMediaResult} Theme songs and videos returned.
		 */
		GetThemeMedia(itemId: string, userId: string | null | undefined, inheritFromParent: boolean | null | undefined): Observable<AllThemeMediaResult> {
			return this.http.get<AllThemeMediaResult>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/ThemeMedia&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&inheritFromParent=' + inheritFromParent, {});
		}

		/**
		 * Get theme songs for an item.
		 * Get Items/{itemId}/ThemeSongs
		 * @param {string} itemId The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {boolean} inheritFromParent Optional. Determines whether or not parent items should be searched for theme media.
		 * @return {ThemeMediaResult} Theme songs returned.
		 */
		GetThemeSongs(itemId: string, userId: string | null | undefined, inheritFromParent: boolean | null | undefined): Observable<ThemeMediaResult> {
			return this.http.get<ThemeMediaResult>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/ThemeSongs&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&inheritFromParent=' + inheritFromParent, {});
		}

		/**
		 * Get theme videos for an item.
		 * Get Items/{itemId}/ThemeVideos
		 * @param {string} itemId The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {boolean} inheritFromParent Optional. Determines whether or not parent items should be searched for theme media.
		 * @return {ThemeMediaResult} Theme videos returned.
		 */
		GetThemeVideos(itemId: string, userId: string | null | undefined, inheritFromParent: boolean | null | undefined): Observable<ThemeMediaResult> {
			return this.http.get<ThemeMediaResult>(this.baseUri + 'Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/ThemeVideos&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&inheritFromParent=' + inheritFromParent, {});
		}

		/**
		 * Gets the library options info.
		 * Get Libraries/AvailableOptions
		 * @param {string} libraryContentType Library content type.
		 * @param {boolean} isNewLibrary Whether this is a new library.
		 * @return {LibraryOptionsResultDto} Library options info returned.
		 */
		GetLibraryOptionsInfo(libraryContentType: string | null | undefined, isNewLibrary: boolean | null | undefined): Observable<LibraryOptionsResultDto> {
			return this.http.get<LibraryOptionsResultDto>(this.baseUri + 'Libraries/AvailableOptions?libraryContentType=' + (libraryContentType == null ? '' : encodeURIComponent(libraryContentType)) + '&isNewLibrary=' + isNewLibrary, {});
		}

		/**
		 * Reports that new movies have been added by an external source.
		 * Post Library/Media/Updated
		 * @param {Array<MediaUpdateInfoDto>} requestBody A list of updated media paths.
		 * @return {void} 
		 */
		PostUpdatedMedia(requestBody: Array<MediaUpdateInfoDto>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/Media/Updated', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all user media folders.
		 * Get Library/MediaFolders
		 * @param {boolean} isHidden Optional. Filter by folders that are marked hidden, or not.
		 * @return {BaseItemDtoQueryResult} Media folders returned.
		 */
		GetMediaFolders(isHidden: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Library/MediaFolders?isHidden=' + isHidden, {});
		}

		/**
		 * Reports that new movies have been added by an external source.
		 * Post Library/Movies/Added
		 * @param {string} tmdbId The tmdbId.
		 * @param {string} imdbId The imdbId.
		 * @return {void} 
		 */
		PostAddedMovies(tmdbId: string | null | undefined, imdbId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/Movies/Added?tmdbId=' + (tmdbId == null ? '' : encodeURIComponent(tmdbId)) + '&imdbId=' + (imdbId == null ? '' : encodeURIComponent(imdbId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports that new movies have been added by an external source.
		 * Post Library/Movies/Updated
		 * @param {string} tmdbId The tmdbId.
		 * @param {string} imdbId The imdbId.
		 * @return {void} 
		 */
		PostUpdatedMovies(tmdbId: string | null | undefined, imdbId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/Movies/Updated?tmdbId=' + (tmdbId == null ? '' : encodeURIComponent(tmdbId)) + '&imdbId=' + (imdbId == null ? '' : encodeURIComponent(imdbId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of physical paths from virtual folders.
		 * Get Library/PhysicalPaths
		 * @return {Array<string>} Physical paths returned.
		 */
		GetPhysicalPaths(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'Library/PhysicalPaths', {});
		}

		/**
		 * Starts a library scan.
		 * Get Library/Refresh
		 * @return {void} 
		 */
		RefreshLibrary(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Library/Refresh', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports that new episodes of a series have been added by an external source.
		 * Post Library/Series/Added
		 * @param {string} tvdbId The tvdbId.
		 * @return {void} 
		 */
		PostAddedSeries(tvdbId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/Series/Added?tvdbId=' + (tvdbId == null ? '' : encodeURIComponent(tvdbId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports that new episodes of a series have been added by an external source.
		 * Post Library/Series/Updated
		 * @param {string} tvdbId The tvdbId.
		 * @return {void} 
		 */
		PostUpdatedSeries(tvdbId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/Series/Updated?tvdbId=' + (tvdbId == null ? '' : encodeURIComponent(tvdbId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a virtual folder.
		 * Delete Library/VirtualFolders
		 * @param {string} name The name of the folder.
		 * @param {boolean} refreshLibrary Whether to refresh the library.
		 * @return {void} 
		 */
		RemoveVirtualFolder(name: string | null | undefined, refreshLibrary: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Library/VirtualFolders?name=' + (name == null ? '' : encodeURIComponent(name)) + '&refreshLibrary=' + refreshLibrary, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all virtual folders.
		 * Get Library/VirtualFolders
		 * @return {Array<VirtualFolderInfo>} Virtual folders retrieved.
		 */
		GetVirtualFolders(): Observable<Array<VirtualFolderInfo>> {
			return this.http.get<Array<VirtualFolderInfo>>(this.baseUri + 'Library/VirtualFolders', {});
		}

		/**
		 * Adds a virtual folder.
		 * Post Library/VirtualFolders
		 * @param {string} name The name of the virtual folder.
		 * @param {string} collectionType The type of the collection.
		 * @param {Array<string>} paths The paths of the virtual folder.
		 * @param {boolean} refreshLibrary Whether to refresh the library.
		 * @param {AddVirtualFolderDto} requestBody The library options.
		 * @return {void} 
		 */
		AddVirtualFolder(name: string | null | undefined, collectionType: string | null | undefined, paths: Array<string> | null | undefined, refreshLibrary: boolean | null | undefined, requestBody: AddVirtualFolderDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/VirtualFolders?name=' + (name == null ? '' : encodeURIComponent(name)) + '&collectionType=' + (collectionType == null ? '' : encodeURIComponent(collectionType)) + '&' + paths?.map(z => `paths=${encodeURIComponent(z)}`).join('&') + '&refreshLibrary=' + refreshLibrary, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update library options.
		 * Post Library/VirtualFolders/LibraryOptions
		 * @param {UpdateLibraryOptionsDto} requestBody The library name and options.
		 * @return {void} 
		 */
		UpdateLibraryOptions(requestBody: UpdateLibraryOptionsDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/VirtualFolders/LibraryOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Renames a virtual folder.
		 * Post Library/VirtualFolders/Name
		 * @param {string} name The name of the virtual folder.
		 * @param {string} newName The new name.
		 * @param {boolean} refreshLibrary Whether to refresh the library.
		 * @return {void} 
		 */
		RenameVirtualFolder(name: string | null | undefined, newName: string | null | undefined, refreshLibrary: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/VirtualFolders/Name?name=' + (name == null ? '' : encodeURIComponent(name)) + '&newName=' + (newName == null ? '' : encodeURIComponent(newName)) + '&refreshLibrary=' + refreshLibrary, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a media path.
		 * Delete Library/VirtualFolders/Paths
		 * @param {string} name The name of the library.
		 * @param {string} path The path to remove.
		 * @param {boolean} refreshLibrary Whether to refresh the library.
		 * @return {void} 
		 */
		RemoveMediaPath(name: string | null | undefined, path: string | null | undefined, refreshLibrary: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Library/VirtualFolders/Paths?name=' + (name == null ? '' : encodeURIComponent(name)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&refreshLibrary=' + refreshLibrary, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a media path to a library.
		 * Post Library/VirtualFolders/Paths
		 * @param {boolean} refreshLibrary Whether to refresh the library.
		 * @param {MediaPathDto} requestBody The media path dto.
		 * @return {void} 
		 */
		AddMediaPath(refreshLibrary: boolean | null | undefined, requestBody: MediaPathDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/VirtualFolders/Paths?refreshLibrary=' + refreshLibrary, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a media path.
		 * Post Library/VirtualFolders/Paths/Update
		 * @param {string} name The name of the library.
		 * @param {MediaPathInfo} requestBody The path info.
		 * @return {void} 
		 */
		UpdateMediaPath(name: string | null | undefined, requestBody: MediaPathInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Library/VirtualFolders/Paths/Update?name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Closes a media source.
		 * Post LiveStreams/Close
		 * @param {string} liveStreamId The livestream id.
		 * @return {void} 
		 */
		CloseLiveStream(liveStreamId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'LiveStreams/Close?liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Opens a media source.
		 * Post LiveStreams/Open
		 * @param {string} openToken The open token.
		 * @param {string} userId The user id.
		 * @param {string} playSessionId The play session id.
		 * @param {number} maxStreamingBitrate The maximum streaming bitrate.
		 * @param {number} startTimeTicks The start time in ticks.
		 * @param {number} audioStreamIndex The audio stream index.
		 * @param {number} subtitleStreamIndex The subtitle stream index.
		 * @param {number} maxAudioChannels The maximum number of audio channels.
		 * @param {string} itemId The item id.
		 * @param {boolean} enableDirectPlay Whether to enable direct play. Default: true.
		 * @param {boolean} enableDirectStream Whether to enable direct stream. Default: true.
		 * @param {OpenLiveStreamDto} requestBody The open live stream dto.
		 * @return {LiveStreamResponse} Media source opened.
		 */
		OpenLiveStream(openToken: string | null | undefined, userId: string | null | undefined, playSessionId: string | null | undefined, maxStreamingBitrate: number | null | undefined, startTimeTicks: number | null | undefined, audioStreamIndex: number | null | undefined, subtitleStreamIndex: number | null | undefined, maxAudioChannels: number | null | undefined, itemId: string | null | undefined, enableDirectPlay: boolean | null | undefined, enableDirectStream: boolean | null | undefined, requestBody: OpenLiveStreamDto): Observable<LiveStreamResponse> {
			return this.http.post<LiveStreamResponse>(this.baseUri + 'LiveStreams/Open?openToken=' + (openToken == null ? '' : encodeURIComponent(openToken)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&maxStreamingBitrate=' + maxStreamingBitrate + '&startTimeTicks=' + startTimeTicks + '&audioStreamIndex=' + audioStreamIndex + '&subtitleStreamIndex=' + subtitleStreamIndex + '&maxAudioChannels=' + maxAudioChannels + '&itemId=' + (itemId == null ? '' : encodeURIComponent(itemId)) + '&enableDirectPlay=' + enableDirectPlay + '&enableDirectStream=' + enableDirectStream, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get channel mapping options.
		 * Get LiveTv/ChannelMappingOptions
		 * @param {string} providerId Provider id.
		 * @return {ChannelMappingOptionsDto} Channel mapping options returned.
		 */
		GetChannelMappingOptions(providerId: string | null | undefined): Observable<ChannelMappingOptionsDto> {
			return this.http.get<ChannelMappingOptionsDto>(this.baseUri + 'LiveTv/ChannelMappingOptions?providerId=' + (providerId == null ? '' : encodeURIComponent(providerId)), {});
		}

		/**
		 * Set channel mappings.
		 * Post LiveTv/ChannelMappings
		 * @param {SetChannelMappingDto} requestBody The set channel mapping dto.
		 * @return {TunerChannelMapping} Created channel mapping returned.
		 */
		SetChannelMapping(requestBody: SetChannelMappingDto): Observable<TunerChannelMapping> {
			return this.http.post<TunerChannelMapping>(this.baseUri + 'LiveTv/ChannelMappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets available live tv channels.
		 * Get LiveTv/Channels
		 * @param {BaseItemDtoChannelType} type Optional. Filter by channel type.
		 * @param {string} userId Optional. Filter by user and attach user data.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {boolean} isMovie Optional. Filter for movies.
		 * @param {boolean} isSeries Optional. Filter for series.
		 * @param {boolean} isNews Optional. Filter for news.
		 * @param {boolean} isKids Optional. Filter for kids.
		 * @param {boolean} isSports Optional. Filter for sports.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {boolean} isFavorite Optional. Filter by channels that are favorites, or not.
		 * @param {boolean} isLiked Optional. Filter by channels that are liked, or not.
		 * @param {boolean} isDisliked Optional. Filter by channels that are disliked, or not.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes "Optional. The image types to include in the output.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {Array<string>} sortBy Optional. Key to sort by.
		 * @param {DisplayPreferencesDtoSortOrder} sortOrder Optional. Sort order.
		 * @param {boolean} enableFavoriteSorting Optional. Incorporate favorite and like status into channel sorting.
		 * @param {boolean} addCurrentProgram Optional. Adds current program info to each channel.
		 * @return {BaseItemDtoQueryResult} Available live tv channels returned.
		 */
		GetLiveTvChannels(type: BaseItemDtoChannelType | null | undefined, userId: string | null | undefined, startIndex: number | null | undefined, isMovie: boolean | null | undefined, isSeries: boolean | null | undefined, isNews: boolean | null | undefined, isKids: boolean | null | undefined, isSports: boolean | null | undefined, limit: number | null | undefined, isFavorite: boolean | null | undefined, isLiked: boolean | null | undefined, isDisliked: boolean | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, fields: Array<ItemFields> | null | undefined, enableUserData: boolean | null | undefined, sortBy: Array<string> | null | undefined, sortOrder: DisplayPreferencesDtoSortOrder | null | undefined, enableFavoriteSorting: boolean | null | undefined, addCurrentProgram: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Channels?type=' + type + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&isMovie=' + isMovie + '&isSeries=' + isSeries + '&isNews=' + isNews + '&isKids=' + isKids + '&isSports=' + isSports + '&limit=' + limit + '&isFavorite=' + isFavorite + '&isLiked=' + isLiked + '&isDisliked=' + isDisliked + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableUserData=' + enableUserData + '&' + sortBy?.map(z => `sortBy=${encodeURIComponent(z)}`).join('&') + '&sortOrder=' + sortOrder + '&enableFavoriteSorting=' + enableFavoriteSorting + '&addCurrentProgram=' + addCurrentProgram, {});
		}

		/**
		 * Gets a live tv channel.
		 * Get LiveTv/Channels/{channelId}
		 * @param {string} channelId Channel id.
		 * @param {string} userId Optional. Attach user data.
		 * @return {BaseItemDto} Live tv channel returned.
		 */
		GetChannel(channelId: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'LiveTv/Channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get guid info.
		 * Get LiveTv/GuideInfo
		 * @return {GuideInfo} Guid info returned.
		 */
		GetGuideInfo(): Observable<GuideInfo> {
			return this.http.get<GuideInfo>(this.baseUri + 'LiveTv/GuideInfo', {});
		}

		/**
		 * Gets available live tv services.
		 * Get LiveTv/Info
		 * @return {LiveTvInfo} Available live tv services returned.
		 */
		GetLiveTvInfo(): Observable<LiveTvInfo> {
			return this.http.get<LiveTvInfo>(this.baseUri + 'LiveTv/Info', {});
		}

		/**
		 * Delete listing provider.
		 * Delete LiveTv/ListingProviders
		 * @param {string} id Listing provider id.
		 * @return {void} 
		 */
		DeleteListingProvider(id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'LiveTv/ListingProviders?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a listings provider.
		 * Post LiveTv/ListingProviders
		 * @param {string} pw Password.
		 * @param {boolean} validateListings Validate listings.
		 * @param {boolean} validateLogin Validate login.
		 * @param {ListingsProviderInfo} requestBody New listings info.
		 * @return {ListingsProviderInfo} Created listings provider returned.
		 */
		AddListingProvider(pw: string | null | undefined, validateListings: boolean | null | undefined, validateLogin: boolean | null | undefined, requestBody: ListingsProviderInfo): Observable<ListingsProviderInfo> {
			return this.http.post<ListingsProviderInfo>(this.baseUri + 'LiveTv/ListingProviders?pw=' + (pw == null ? '' : encodeURIComponent(pw)) + '&validateListings=' + validateListings + '&validateLogin=' + validateLogin, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets default listings provider info.
		 * Get LiveTv/ListingProviders/Default
		 * @return {ListingsProviderInfo} Default listings provider info returned.
		 */
		GetDefaultListingProvider(): Observable<ListingsProviderInfo> {
			return this.http.get<ListingsProviderInfo>(this.baseUri + 'LiveTv/ListingProviders/Default', {});
		}

		/**
		 * Gets available lineups.
		 * Get LiveTv/ListingProviders/Lineups
		 * @param {string} id Provider id.
		 * @param {string} type Provider type.
		 * @param {string} location Location.
		 * @param {string} country Country.
		 * @return {Array<NameIdPair>} Available lineups returned.
		 */
		GetLineups(id: string | null | undefined, type: string | null | undefined, location: string | null | undefined, country: string | null | undefined): Observable<Array<NameIdPair>> {
			return this.http.get<Array<NameIdPair>>(this.baseUri + 'LiveTv/ListingProviders/Lineups?id=' + (id == null ? '' : encodeURIComponent(id)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * Gets available countries.
		 * Get LiveTv/ListingProviders/SchedulesDirect/Countries
		 * @return {string} Available countries returned.
		 */
		GetSchedulesDirectCountries(): Observable<string> {
			return this.http.get(this.baseUri + 'LiveTv/ListingProviders/SchedulesDirect/Countries', { responseType: 'text' });
		}

		/**
		 * Gets a live tv recording stream.
		 * Get LiveTv/LiveRecordings/{recordingId}/stream
		 * @param {string} recordingId Recording id.
		 * @return {void} Recording stream returned.
		 */
		GetLiveRecordingFile(recordingId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'LiveTv/LiveRecordings/' + (recordingId == null ? '' : encodeURIComponent(recordingId)) + '/stream', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a live tv channel stream.
		 * Get LiveTv/LiveStreamFiles/{streamId}/stream.{container}
		 * @param {string} streamId Stream id.
		 * @param {string} container Container type.
		 * @return {void} Stream returned.
		 */
		GetLiveStreamFile(streamId: string, container: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'LiveTv/LiveStreamFiles/' + (streamId == null ? '' : encodeURIComponent(streamId)) + '/stream.' + (container == null ? '' : encodeURIComponent(container)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets available live tv epgs.
		 * Get LiveTv/Programs
		 * @param {Array<string>} channelIds The channels to return guide information for.
		 * @param {string} userId Optional. Filter by user id.
		 * @param {Date} minStartDate Optional. The minimum premiere start date.
		 * @param {boolean} hasAired Optional. Filter by programs that have completed airing, or not.
		 * @param {boolean} isAiring Optional. Filter by programs that are currently airing, or not.
		 * @param {Date} maxStartDate Optional. The maximum premiere start date.
		 * @param {Date} minEndDate Optional. The minimum premiere end date.
		 * @param {Date} maxEndDate Optional. The maximum premiere end date.
		 * @param {boolean} isMovie Optional. Filter for movies.
		 * @param {boolean} isSeries Optional. Filter for series.
		 * @param {boolean} isNews Optional. Filter for news.
		 * @param {boolean} isKids Optional. Filter for kids.
		 * @param {boolean} isSports Optional. Filter for sports.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} sortBy Optional. Specify one or more sort orders, comma delimited. Options: Name, StartDate.
		 * @param {string} sortOrder Sort Order - Ascending,Descending.
		 * @param {Array<string>} genres The genres to return guide information for.
		 * @param {Array<string>} genreIds The genre ids to return guide information for.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {string} seriesTimerId Optional. Filter by series timer id.
		 * @param {string} librarySeriesId Optional. Filter by library series id.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableTotalRecordCount Retrieve total record count.
		 * @return {BaseItemDtoQueryResult} Live tv epgs returned.
		 */
		GetLiveTvPrograms(channelIds: Array<string> | null | undefined, userId: string | null | undefined, minStartDate: Date | null | undefined, hasAired: boolean | null | undefined, isAiring: boolean | null | undefined, maxStartDate: Date | null | undefined, minEndDate: Date | null | undefined, maxEndDate: Date | null | undefined, isMovie: boolean | null | undefined, isSeries: boolean | null | undefined, isNews: boolean | null | undefined, isKids: boolean | null | undefined, isSports: boolean | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, genres: Array<string> | null | undefined, genreIds: Array<string> | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, enableUserData: boolean | null | undefined, seriesTimerId: string | null | undefined, librarySeriesId: string | null | undefined, fields: Array<ItemFields> | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Programs?' + channelIds?.map(z => `channelIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&minStartDate=' + minStartDate?.toISOString() + '&hasAired=' + hasAired + '&isAiring=' + isAiring + '&maxStartDate=' + maxStartDate?.toISOString() + '&minEndDate=' + minEndDate?.toISOString() + '&maxEndDate=' + maxEndDate?.toISOString() + '&isMovie=' + isMovie + '&isSeries=' + isSeries + '&isNews=' + isNews + '&isKids=' + isKids + '&isSports=' + isSports + '&startIndex=' + startIndex + '&limit=' + limit + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&' + genres?.map(z => `genres=${encodeURIComponent(z)}`).join('&') + '&' + genreIds?.map(z => `genreIds=${encodeURIComponent(z)}`).join('&') + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&enableUserData=' + enableUserData + '&seriesTimerId=' + (seriesTimerId == null ? '' : encodeURIComponent(seriesTimerId)) + '&librarySeriesId=' + (librarySeriesId == null ? '' : encodeURIComponent(librarySeriesId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets available live tv epgs.
		 * Post LiveTv/Programs
		 * @param {GetProgramsDto} requestBody Request body.
		 * @return {BaseItemDtoQueryResult} Live tv epgs returned.
		 */
		GetPrograms(requestBody: GetProgramsDto): Observable<BaseItemDtoQueryResult> {
			return this.http.post<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Programs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets recommended live tv epgs.
		 * Get LiveTv/Programs/Recommended
		 * @param {string} userId Optional. filter by user id.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {boolean} isAiring Optional. Filter by programs that are currently airing, or not.
		 * @param {boolean} hasAired Optional. Filter by programs that have completed airing, or not.
		 * @param {boolean} isSeries Optional. Filter for series.
		 * @param {boolean} isMovie Optional. Filter for movies.
		 * @param {boolean} isNews Optional. Filter for news.
		 * @param {boolean} isKids Optional. Filter for kids.
		 * @param {boolean} isSports Optional. Filter for sports.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {Array<string>} genreIds The genres to return guide information for.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableUserData Optional. include user data.
		 * @param {boolean} enableTotalRecordCount Retrieve total record count.
		 * @return {BaseItemDtoQueryResult} Recommended epgs returned.
		 */
		GetRecommendedPrograms(userId: string | null | undefined, limit: number | null | undefined, isAiring: boolean | null | undefined, hasAired: boolean | null | undefined, isSeries: boolean | null | undefined, isMovie: boolean | null | undefined, isNews: boolean | null | undefined, isKids: boolean | null | undefined, isSports: boolean | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, genreIds: Array<string> | null | undefined, fields: Array<ItemFields> | null | undefined, enableUserData: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Programs/Recommended?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&isAiring=' + isAiring + '&hasAired=' + hasAired + '&isSeries=' + isSeries + '&isMovie=' + isMovie + '&isNews=' + isNews + '&isKids=' + isKids + '&isSports=' + isSports + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&' + genreIds?.map(z => `genreIds=${encodeURIComponent(z)}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableUserData=' + enableUserData + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets a live tv program.
		 * Get LiveTv/Programs/{programId}
		 * @param {string} programId Program id.
		 * @param {string} userId Optional. Attach user data.
		 * @return {BaseItemDto} Program returned.
		 */
		GetProgram(programId: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'LiveTv/Programs/' + (programId == null ? '' : encodeURIComponent(programId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Gets live tv recordings.
		 * Get LiveTv/Recordings
		 * @param {string} channelId Optional. Filter by channel id.
		 * @param {string} userId Optional. Filter by user and attach user data.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {RecordingStatus} status Optional. Filter by recording status.
		 * @param {boolean} isInProgress Optional. Filter by recordings that are in progress, or not.
		 * @param {string} seriesTimerId Optional. Filter by recordings belonging to a series timer.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {boolean} isMovie Optional. Filter for movies.
		 * @param {boolean} isSeries Optional. Filter for series.
		 * @param {boolean} isKids Optional. Filter for kids.
		 * @param {boolean} isSports Optional. Filter for sports.
		 * @param {boolean} isNews Optional. Filter for news.
		 * @param {boolean} isLibraryItem Optional. Filter for is library item.
		 * @param {boolean} enableTotalRecordCount Optional. Return total record count.
		 * @return {BaseItemDtoQueryResult} Live tv recordings returned.
		 */
		GetRecordings(channelId: string | null | undefined, userId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, status: RecordingStatus | null | undefined, isInProgress: boolean | null | undefined, seriesTimerId: string | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, fields: Array<ItemFields> | null | undefined, enableUserData: boolean | null | undefined, isMovie: boolean | null | undefined, isSeries: boolean | null | undefined, isKids: boolean | null | undefined, isSports: boolean | null | undefined, isNews: boolean | null | undefined, isLibraryItem: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Recordings?channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&status=' + status + '&isInProgress=' + isInProgress + '&seriesTimerId=' + (seriesTimerId == null ? '' : encodeURIComponent(seriesTimerId)) + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableUserData=' + enableUserData + '&isMovie=' + isMovie + '&isSeries=' + isSeries + '&isKids=' + isKids + '&isSports=' + isSports + '&isNews=' + isNews + '&isLibraryItem=' + isLibraryItem + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets recording folders.
		 * Get LiveTv/Recordings/Folders
		 * @param {string} userId Optional. Filter by user and attach user data.
		 * @return {BaseItemDtoQueryResult} Recording folders returned.
		 */
		GetRecordingFolders(userId: string | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Recordings/Folders?userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Gets live tv recording groups.
		 * Get LiveTv/Recordings/Groups
		 * @param {string} userId Optional. Filter by user and attach user data.
		 * @return {BaseItemDtoQueryResult} Recording groups returned.
		 */
		GetRecordingGroups(userId: string | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Recordings/Groups?userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get recording group.
		 * Get LiveTv/Recordings/Groups/{groupId}
		 * @param {string} groupId Group id.
		 * @return {void} 
		 */
		GetRecordingGroup(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'LiveTv/Recordings/Groups/' + (groupId == null ? '' : encodeURIComponent(groupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets live tv recording series.
		 * Get LiveTv/Recordings/Series
		 * @param {string} channelId Optional. Filter by channel id.
		 * @param {string} userId Optional. Filter by user and attach user data.
		 * @param {string} groupId Optional. Filter by recording group.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {RecordingStatus} status Optional. Filter by recording status.
		 * @param {boolean} isInProgress Optional. Filter by recordings that are in progress, or not.
		 * @param {string} seriesTimerId Optional. Filter by recordings belonging to a series timer.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {boolean} enableTotalRecordCount Optional. Return total record count.
		 * @return {BaseItemDtoQueryResult} Live tv recordings returned.
		 */
		GetRecordingsSeries(channelId: string | null | undefined, userId: string | null | undefined, groupId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, status: RecordingStatus | null | undefined, isInProgress: boolean | null | undefined, seriesTimerId: string | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, fields: Array<ItemFields> | null | undefined, enableUserData: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'LiveTv/Recordings/Series?channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&status=' + status + '&isInProgress=' + isInProgress + '&seriesTimerId=' + (seriesTimerId == null ? '' : encodeURIComponent(seriesTimerId)) + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableUserData=' + enableUserData + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Deletes a live tv recording.
		 * Delete LiveTv/Recordings/{recordingId}
		 * @param {string} recordingId Recording id.
		 * @return {void} 
		 */
		DeleteRecording(recordingId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'LiveTv/Recordings/' + (recordingId == null ? '' : encodeURIComponent(recordingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a live tv recording.
		 * Get LiveTv/Recordings/{recordingId}
		 * @param {string} recordingId Recording id.
		 * @param {string} userId Optional. Attach user data.
		 * @return {BaseItemDto} Recording returned.
		 */
		GetRecording(recordingId: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'LiveTv/Recordings/' + (recordingId == null ? '' : encodeURIComponent(recordingId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Gets live tv series timers.
		 * Get LiveTv/SeriesTimers
		 * @param {string} sortBy Optional. Sort by SortName or Priority.
		 * @param {DisplayPreferencesDtoSortOrder} sortOrder Optional. Sort in Ascending or Descending order.
		 * @return {SeriesTimerInfoDtoQueryResult} Timers returned.
		 */
		GetSeriesTimers(sortBy: string | null | undefined, sortOrder: DisplayPreferencesDtoSortOrder | null | undefined): Observable<SeriesTimerInfoDtoQueryResult> {
			return this.http.get<SeriesTimerInfoDtoQueryResult>(this.baseUri + 'LiveTv/SeriesTimers?sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Creates a live tv series timer.
		 * Post LiveTv/SeriesTimers
		 * @param {SeriesTimerInfoDto} requestBody New series timer info.
		 * @return {void} 
		 */
		CreateSeriesTimer(requestBody: SeriesTimerInfoDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'LiveTv/SeriesTimers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a live tv series timer.
		 * Delete LiveTv/SeriesTimers/{timerId}
		 * @param {string} timerId Timer id.
		 * @return {void} 
		 */
		CancelSeriesTimer(timerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'LiveTv/SeriesTimers/' + (timerId == null ? '' : encodeURIComponent(timerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a live tv series timer.
		 * Get LiveTv/SeriesTimers/{timerId}
		 * @param {string} timerId Timer id.
		 * @return {SeriesTimerInfoDto} Series timer returned.
		 */
		GetSeriesTimer(timerId: string): Observable<SeriesTimerInfoDto> {
			return this.http.get<SeriesTimerInfoDto>(this.baseUri + 'LiveTv/SeriesTimers/' + (timerId == null ? '' : encodeURIComponent(timerId)), {});
		}

		/**
		 * Updates a live tv series timer.
		 * Post LiveTv/SeriesTimers/{timerId}
		 * @param {string} timerId Timer id.
		 * @param {SeriesTimerInfoDto} requestBody New series timer info.
		 * @return {void} 
		 */
		UpdateSeriesTimer(timerId: string, requestBody: SeriesTimerInfoDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'LiveTv/SeriesTimers/' + (timerId == null ? '' : encodeURIComponent(timerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the live tv timers.
		 * Get LiveTv/Timers
		 * @param {string} channelId Optional. Filter by channel id.
		 * @param {string} seriesTimerId Optional. Filter by timers belonging to a series timer.
		 * @param {boolean} isActive Optional. Filter by timers that are active.
		 * @param {boolean} isScheduled Optional. Filter by timers that are scheduled.
		 * @return {TimerInfoDtoQueryResult} Success
		 */
		GetTimers(channelId: string | null | undefined, seriesTimerId: string | null | undefined, isActive: boolean | null | undefined, isScheduled: boolean | null | undefined): Observable<TimerInfoDtoQueryResult> {
			return this.http.get<TimerInfoDtoQueryResult>(this.baseUri + 'LiveTv/Timers?channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&seriesTimerId=' + (seriesTimerId == null ? '' : encodeURIComponent(seriesTimerId)) + '&isActive=' + isActive + '&isScheduled=' + isScheduled, {});
		}

		/**
		 * Creates a live tv timer.
		 * Post LiveTv/Timers
		 * @param {TimerInfoDto} requestBody New timer info.
		 * @return {void} 
		 */
		CreateTimer(requestBody: TimerInfoDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'LiveTv/Timers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the default values for a new timer.
		 * Get LiveTv/Timers/Defaults
		 * @param {string} programId Optional. To attach default values based on a program.
		 * @return {SeriesTimerInfoDto} Default values returned.
		 */
		GetDefaultTimer(programId: string | null | undefined): Observable<SeriesTimerInfoDto> {
			return this.http.get<SeriesTimerInfoDto>(this.baseUri + 'LiveTv/Timers/Defaults?programId=' + (programId == null ? '' : encodeURIComponent(programId)), {});
		}

		/**
		 * Cancels a live tv timer.
		 * Delete LiveTv/Timers/{timerId}
		 * @param {string} timerId Timer id.
		 * @return {void} 
		 */
		CancelTimer(timerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'LiveTv/Timers/' + (timerId == null ? '' : encodeURIComponent(timerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a timer.
		 * Get LiveTv/Timers/{timerId}
		 * @param {string} timerId Timer id.
		 * @return {TimerInfoDto} Timer returned.
		 */
		GetTimer(timerId: string): Observable<TimerInfoDto> {
			return this.http.get<TimerInfoDto>(this.baseUri + 'LiveTv/Timers/' + (timerId == null ? '' : encodeURIComponent(timerId)), {});
		}

		/**
		 * Updates a live tv timer.
		 * Post LiveTv/Timers/{timerId}
		 * @param {string} timerId Timer id.
		 * @param {TimerInfoDto} requestBody New timer info.
		 * @return {void} 
		 */
		UpdateTimer(timerId: string, requestBody: TimerInfoDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'LiveTv/Timers/' + (timerId == null ? '' : encodeURIComponent(timerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a tuner host.
		 * Delete LiveTv/TunerHosts
		 * @param {string} id Tuner host id.
		 * @return {void} 
		 */
		DeleteTunerHost(id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'LiveTv/TunerHosts?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a tuner host.
		 * Post LiveTv/TunerHosts
		 * @param {TunerHostInfo} requestBody New tuner host.
		 * @return {TunerHostInfo} Created tuner host returned.
		 */
		AddTunerHost(requestBody: TunerHostInfo): Observable<TunerHostInfo> {
			return this.http.post<TunerHostInfo>(this.baseUri + 'LiveTv/TunerHosts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get tuner host types.
		 * Get LiveTv/TunerHosts/Types
		 * @return {Array<NameIdPair>} Tuner host types returned.
		 */
		GetTunerHostTypes(): Observable<Array<NameIdPair>> {
			return this.http.get<Array<NameIdPair>>(this.baseUri + 'LiveTv/TunerHosts/Types', {});
		}

		/**
		 * Discover tuners.
		 * Get LiveTv/Tuners/Discover
		 * @param {boolean} newDevicesOnly Only discover new tuners.
		 * @return {Array<TunerHostInfo>} Tuners returned.
		 */
		DiscoverTuners(newDevicesOnly: boolean | null | undefined): Observable<Array<TunerHostInfo>> {
			return this.http.get<Array<TunerHostInfo>>(this.baseUri + 'LiveTv/Tuners/Discover?newDevicesOnly=' + newDevicesOnly, {});
		}

		/**
		 * Discover tuners.
		 * Get LiveTv/Tuners/Discvover
		 * @param {boolean} newDevicesOnly Only discover new tuners.
		 * @return {Array<TunerHostInfo>} Tuners returned.
		 */
		DiscvoverTuners(newDevicesOnly: boolean | null | undefined): Observable<Array<TunerHostInfo>> {
			return this.http.get<Array<TunerHostInfo>>(this.baseUri + 'LiveTv/Tuners/Discvover?newDevicesOnly=' + newDevicesOnly, {});
		}

		/**
		 * Resets a tv tuner.
		 * Post LiveTv/Tuners/{tunerId}/Reset
		 * @param {string} tunerId Tuner id.
		 * @return {void} 
		 */
		ResetTuner(tunerId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'LiveTv/Tuners/' + (tunerId == null ? '' : encodeURIComponent(tunerId)) + '/Reset', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets known countries.
		 * Get Localization/Countries
		 * @return {Array<CountryInfo>} Known countries returned.
		 */
		GetCountries(): Observable<Array<CountryInfo>> {
			return this.http.get<Array<CountryInfo>>(this.baseUri + 'Localization/Countries', {});
		}

		/**
		 * Gets known cultures.
		 * Get Localization/Cultures
		 * @return {Array<CultureDto>} Known cultures returned.
		 */
		GetCultures(): Observable<Array<CultureDto>> {
			return this.http.get<Array<CultureDto>>(this.baseUri + 'Localization/Cultures', {});
		}

		/**
		 * Gets localization options.
		 * Get Localization/Options
		 * @return {Array<LocalizationOption>} Localization options returned.
		 */
		GetLocalizationOptions(): Observable<Array<LocalizationOption>> {
			return this.http.get<Array<LocalizationOption>>(this.baseUri + 'Localization/Options', {});
		}

		/**
		 * Gets known parental ratings.
		 * Get Localization/ParentalRatings
		 * @return {Array<ParentalRating>} Known parental ratings returned.
		 */
		GetParentalRatings(): Observable<Array<ParentalRating>> {
			return this.http.get<Array<ParentalRating>>(this.baseUri + 'Localization/ParentalRatings', {});
		}

		/**
		 * Gets movie recommendations.
		 * Get Movies/Recommendations
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. The fields to return.
		 * @param {number} categoryLimit The max number of categories to return.
		 * @param {number} itemLimit The max number of items to return per category.
		 * @return {Array<RecommendationDto>} Movie recommendations returned.
		 */
		GetMovieRecommendations(userId: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, categoryLimit: number | null | undefined, itemLimit: number | null | undefined): Observable<Array<RecommendationDto>> {
			return this.http.get<Array<RecommendationDto>>(this.baseUri + 'Movies/Recommendations?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&categoryLimit=' + categoryLimit + '&itemLimit=' + itemLimit, {});
		}

		/**
		 * Gets similar items.
		 * Get Movies/{itemId}/Similar
		 * @param {string} itemId The item id.
		 * @param {Array<string>} excludeArtistIds Exclude artist ids.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @return {BaseItemDtoQueryResult} Similar items returned.
		 */
		GetSimilarMovies(itemId: string, excludeArtistIds: Array<string> | null | undefined, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Movies/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Similar&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&'), {});
		}

		/**
		 * Gets all music genres from a given item, folder, or the entire library.
		 * Get MusicGenres
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} searchTerm The search term.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} userId User id.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @param {boolean} enableTotalRecordCount Optional. Include total record count.
		 * @return {BaseItemDtoQueryResult} Music genres returned.
		 */
		GetMusicGenres(startIndex: number | null | undefined, limit: number | null | undefined, searchTerm: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, isFavorite: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, userId: string | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, enableImages: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'MusicGenres?startIndex=' + startIndex + '&limit=' + limit + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&isFavorite=' + isFavorite + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&enableImages=' + enableImages + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets a music genre, by name.
		 * Get MusicGenres/{genreName}
		 * @param {string} genreName The genre name.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @return {BaseItemDto} Success
		 */
		GetMusicGenre(genreName: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'MusicGenres/' + (genreName == null ? '' : encodeURIComponent(genreName)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Creates an instant playlist based on a given song.
		 * Get MusicGenres/{id}/InstantMix
		 * @param {string} id The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Instant playlist returned.
		 */
		GetInstantMixFromMusicGenres(id: string, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'MusicGenres/' + (id == null ? '' : encodeURIComponent(id)) + '/InstantMix&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Get music genre image by name.
		 * Get MusicGenres/{name}/Images/{imageType}
		 * @param {string} name Music genre name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetMusicGenreImage(name: string, imageType: ImageOptionType, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'MusicGenres/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)) + '&imageIndex=' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get music genre image by name.
		 * Get MusicGenres/{name}/Images/{imageType}/{imageIndex}
		 * @param {string} name Music genre name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex Image index.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @return {void} Image stream returned.
		 */
		GetMusicGenreImageByIndex(name: string, imageType: ImageOptionType, imageIndex: number, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'MusicGenres/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '/' + imageIndex + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an instant playlist based on a given song.
		 * Get MusicGenres/{name}/InstantMix
		 * @param {string} name The genre name.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Instant playlist returned.
		 */
		GetInstantMixFromMusicGenre(name: string, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'MusicGenres/' + (name == null ? '' : encodeURIComponent(name)) + '/InstantMix&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Sends a notification to all admins.
		 * Post Notifications/Admin
		 * @param {string} url The URL of the notification.
		 * @param {NotificationDtoLevel} level The level of the notification.
		 * @param {string} name The name of the notification.
		 * @param {string} description The description of the notification.
		 * @return {void} 
		 */
		CreateAdminNotification(url: string | null | undefined, level: NotificationDtoLevel | null | undefined, name: string | null | undefined, description: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Notifications/Admin?url=' + (url == null ? '' : encodeURIComponent(url)) + '&level=' + level + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets notification services.
		 * Get Notifications/Services
		 * @return {Array<NameIdPair>} All notification services returned.
		 */
		GetNotificationServices(): Observable<Array<NameIdPair>> {
			return this.http.get<Array<NameIdPair>>(this.baseUri + 'Notifications/Services', {});
		}

		/**
		 * Gets notification types.
		 * Get Notifications/Types
		 * @return {Array<NotificationTypeInfo>} All notification types returned.
		 */
		GetNotificationTypes(): Observable<Array<NotificationTypeInfo>> {
			return this.http.get<Array<NotificationTypeInfo>>(this.baseUri + 'Notifications/Types', {});
		}

		/**
		 * Gets a user's notifications.
		 * Get Notifications/{userId}
		 * @return {NotificationResultDto} Notifications returned.
		 */
		GetNotifications(userId: string): Observable<NotificationResultDto> {
			return this.http.get<NotificationResultDto>(this.baseUri + 'Notifications/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Sets notifications as read.
		 * Post Notifications/{userId}/Read
		 * @return {void} 
		 */
		SetRead(userId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Notifications/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Read', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a user's notification summary.
		 * Get Notifications/{userId}/Summary
		 * @return {NotificationsSummaryDto} Summary of user's notifications returned.
		 */
		GetNotificationsSummary(userId: string): Observable<NotificationsSummaryDto> {
			return this.http.get<NotificationsSummaryDto>(this.baseUri + 'Notifications/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Summary', {});
		}

		/**
		 * Sets notifications as unread.
		 * Post Notifications/{userId}/Unread
		 * @return {void} 
		 */
		SetUnread(userId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Notifications/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Unread', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets available packages.
		 * Get Packages
		 * @return {Array<PackageInfo>} Available packages returned.
		 */
		GetPackages(): Observable<Array<PackageInfo>> {
			return this.http.get<Array<PackageInfo>>(this.baseUri + 'Packages', {});
		}

		/**
		 * Installs a package.
		 * Post Packages/Installed/{name}
		 * @param {string} name Package name.
		 * @param {string} assemblyGuid GUID of the associated assembly.
		 * @param {string} version Optional version. Defaults to latest version.
		 * @param {string} repositoryUrl Optional. Specify the repository to install from.
		 * @return {void} 
		 */
		InstallPackage(name: string, assemblyGuid: string | null | undefined, version: string | null | undefined, repositoryUrl: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Packages/Installed/' + (name == null ? '' : encodeURIComponent(name)) + '&assemblyGuid=' + (assemblyGuid == null ? '' : encodeURIComponent(assemblyGuid)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&repositoryUrl=' + (repositoryUrl == null ? '' : encodeURIComponent(repositoryUrl)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a package installation.
		 * Delete Packages/Installing/{packageId}
		 * @param {string} packageId Installation Id.
		 * @return {void} 
		 */
		CancelPackageInstallation(packageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Packages/Installing/' + (packageId == null ? '' : encodeURIComponent(packageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a package by name or assembly GUID.
		 * Get Packages/{name}
		 * @param {string} name The name of the package.
		 * @param {string} assemblyGuid The GUID of the associated assembly.
		 * @return {PackageInfo} Package retrieved.
		 */
		GetPackageInfo(name: string, assemblyGuid: string | null | undefined): Observable<PackageInfo> {
			return this.http.get<PackageInfo>(this.baseUri + 'Packages/' + (name == null ? '' : encodeURIComponent(name)) + '&assemblyGuid=' + (assemblyGuid == null ? '' : encodeURIComponent(assemblyGuid)), {});
		}

		/**
		 * Gets all persons.
		 * Get Persons
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} searchTerm The search term.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not. userId is required.
		 * @param {boolean} enableUserData Optional, include user data.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {Array<string>} excludePersonTypes Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
		 * @param {Array<string>} personTypes Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
		 * @param {string} appearsInItemId Optional. If specified, person results will be filtered on items related to said persons.
		 * @param {string} userId User id.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @return {BaseItemDtoQueryResult} Persons returned.
		 */
		GetPersons(limit: number | null | undefined, searchTerm: string | null | undefined, fields: Array<ItemFields> | null | undefined, filters: Array<ItemFilter> | null | undefined, isFavorite: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, excludePersonTypes: Array<string> | null | undefined, personTypes: Array<string> | null | undefined, appearsInItemId: string | null | undefined, userId: string | null | undefined, enableImages: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Persons?limit=' + limit + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + filters?.map(z => `filters=${z}`).join('&') + '&isFavorite=' + isFavorite + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&' + excludePersonTypes?.map(z => `excludePersonTypes=${encodeURIComponent(z)}`).join('&') + '&' + personTypes?.map(z => `personTypes=${encodeURIComponent(z)}`).join('&') + '&appearsInItemId=' + (appearsInItemId == null ? '' : encodeURIComponent(appearsInItemId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&enableImages=' + enableImages, {});
		}

		/**
		 * Get person by name.
		 * Get Persons/{name}
		 * @param {string} name Person name.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @return {BaseItemDto} Person returned.
		 */
		GetPerson(name: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'Persons/' + (name == null ? '' : encodeURIComponent(name)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get person image by name.
		 * Get Persons/{name}/Images/{imageType}
		 * @param {string} name Person name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetPersonImage(name: string, imageType: ImageOptionType, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Persons/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)) + '&imageIndex=' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get person image by name.
		 * Get Persons/{name}/Images/{imageType}/{imageIndex}
		 * @param {string} name Person name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex Image index.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @return {void} Image stream returned.
		 */
		GetPersonImageByIndex(name: string, imageType: ImageOptionType, imageIndex: number, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Persons/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '/' + imageIndex + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests the network with a request with the size of the bitrate.
		 * Get Playback/BitrateTest
		 * @param {number} size The bitrate. Defaults to 102400.
		 * @return {void} Test buffer returned.
		 */
		GetBitrateTestBytes(size: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Playback/BitrateTest?size=' + size, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new playlist.
		 * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
		 * Post Playlists
		 * @param {string} name The playlist name.
		 * @param {Array<string>} ids The item ids.
		 * @param {string} userId The user id.
		 * @param {string} mediaType The media type.
		 * @param {CreatePlaylistDto} requestBody The create playlist payload.
		 * @return {PlaylistCreationResult} Success
		 */
		CreatePlaylist(name: string | null | undefined, ids: Array<string> | null | undefined, userId: string | null | undefined, mediaType: string | null | undefined, requestBody: CreatePlaylistDto): Observable<PlaylistCreationResult> {
			return this.http.post<PlaylistCreationResult>(this.baseUri + 'Playlists?name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&mediaType=' + (mediaType == null ? '' : encodeURIComponent(mediaType)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an instant playlist based on a given song.
		 * Get Playlists/{id}/InstantMix
		 * @param {string} id The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Instant playlist returned.
		 */
		GetInstantMixFromPlaylist(id: string, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Playlists/' + (id == null ? '' : encodeURIComponent(id)) + '/InstantMix&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Removes items from a playlist.
		 * Delete Playlists/{playlistId}/Items
		 * @param {string} playlistId The playlist id.
		 * @param {Array<string>} entryIds The item ids, comma delimited.
		 * @return {void} 
		 */
		RemoveFromPlaylist(playlistId: string, entryIds: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Playlists/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/Items&' + entryIds?.map(z => `entryIds=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the original items of a playlist.
		 * Get Playlists/{playlistId}/Items
		 * @param {string} playlistId The playlist id.
		 * @param {string} userId User id.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Original playlist returned.
		 */
		GetPlaylistItems(playlistId: string, userId: string, startIndex: number | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Playlists/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/Items&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Adds items to a playlist.
		 * Post Playlists/{playlistId}/Items
		 * @param {string} playlistId The playlist id.
		 * @param {Array<string>} ids Item id, comma delimited.
		 * @param {string} userId The userId.
		 * @return {void} 
		 */
		AddToPlaylist(playlistId: string, ids: Array<string> | null | undefined, userId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Playlists/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/Items&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Moves a playlist item.
		 * Post Playlists/{playlistId}/Items/{itemId}/Move/{newIndex}
		 * @param {string} playlistId The playlist id.
		 * @param {string} itemId The item id.
		 * @param {number} newIndex The new index.
		 * @return {void} 
		 */
		MoveItem(playlistId: string, itemId: string, newIndex: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Playlists/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Move/' + newIndex, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of currently installed plugins.
		 * Get Plugins
		 * @return {Array<PluginInfo>} Installed plugins returned.
		 */
		GetPlugins(): Observable<Array<PluginInfo>> {
			return this.http.get<Array<PluginInfo>>(this.baseUri + 'Plugins', {});
		}

		/**
		 * Updates plugin security info.
		 * Post Plugins/SecurityInfo
		 * @param {PluginSecurityInfo} requestBody Plugin security info.
		 * @return {void} 
		 */
		UpdatePluginSecurityInfo(requestBody: PluginSecurityInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Plugins/SecurityInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uninstalls a plugin.
		 * Delete Plugins/{pluginId}
		 * @param {string} pluginId Plugin id.
		 * @return {void} 
		 */
		UninstallPlugin(pluginId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets plugin configuration.
		 * Get Plugins/{pluginId}/Configuration
		 * @param {string} pluginId Plugin id.
		 * @return {BasePluginConfiguration} Plugin configuration returned.
		 */
		GetPluginConfiguration(pluginId: string): Observable<BasePluginConfiguration> {
			return this.http.get<BasePluginConfiguration>(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)) + '/Configuration', {});
		}

		/**
		 * Updates plugin configuration.
		 * Accepts plugin configuration as JSON body.
		 * Post Plugins/{pluginId}/Configuration
		 * @param {string} pluginId Plugin id.
		 * @return {void} 
		 */
		UpdatePluginConfiguration(pluginId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)) + '/Configuration', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a plugin's manifest.
		 * Post Plugins/{pluginId}/Manifest
		 * @param {string} pluginId Plugin id.
		 * @return {void} 
		 */
		GetPluginManifest(pluginId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)) + '/Manifest', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uninstalls a plugin by version.
		 * Delete Plugins/{pluginId}/{version}
		 * @param {string} pluginId Plugin id.
		 * @param {Version} version Plugin version.
		 * @return {void} 
		 */
		UninstallPluginByVersion(pluginId: string, version: Version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)) + '/' + version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable a plugin.
		 * Post Plugins/{pluginId}/{version}/Disable
		 * @param {string} pluginId Plugin id.
		 * @param {Version} version Plugin version.
		 * @return {void} 
		 */
		DisablePlugin(pluginId: string, version: Version): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)) + '/' + version + '/Disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables a disabled plugin.
		 * Post Plugins/{pluginId}/{version}/Enable
		 * @param {string} pluginId Plugin id.
		 * @param {Version} version Plugin version.
		 * @return {void} 
		 */
		EnablePlugin(pluginId: string, version: Version): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)) + '/' + version + '/Enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a plugin's image.
		 * Get Plugins/{pluginId}/{version}/Image
		 * @param {string} pluginId Plugin id.
		 * @param {Version} version Plugin version.
		 * @return {void} Plugin image returned.
		 */
		GetPluginImage(pluginId: string, version: Version): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Plugins/' + (pluginId == null ? '' : encodeURIComponent(pluginId)) + '/' + version + '/Image', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the remote subtitles.
		 * Get Providers/Subtitles/Subtitles/{id}
		 * @param {string} id The item id.
		 * @return {void} File returned.
		 */
		GetRemoteSubtitles(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Providers/Subtitles/Subtitles/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Temporarily activates quick connect for five minutes.
		 * Post QuickConnect/Activate
		 * @return {void} 
		 */
		Activate(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'QuickConnect/Activate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Authorizes a pending quick connect request.
		 * Post QuickConnect/Authorize
		 * @param {string} code Quick connect code to authorize.
		 * @return {boolean} Quick connect result authorized successfully.
		 */
		Authorize(code: string): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'QuickConnect/Authorize?code=' + (code == null ? '' : encodeURIComponent(code)), null, {});
		}

		/**
		 * Enables or disables quick connect.
		 * Post QuickConnect/Available
		 * @param {QuickConnectState} status New MediaBrowser.Model.QuickConnect.QuickConnectState.
		 * @return {void} 
		 */
		Available(status: QuickConnectState | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'QuickConnect/Available?status=' + status, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Attempts to retrieve authentication information.
		 * Get QuickConnect/Connect
		 * @param {string} secret Secret previously returned from the Initiate endpoint.
		 * @return {QuickConnectResult} Quick connect result returned.
		 */
		Connect(secret: string): Observable<QuickConnectResult> {
			return this.http.get<QuickConnectResult>(this.baseUri + 'QuickConnect/Connect?secret=' + (secret == null ? '' : encodeURIComponent(secret)), {});
		}

		/**
		 * Deauthorize all quick connect devices for the current user.
		 * Post QuickConnect/Deauthorize
		 * @return {number} All quick connect devices were deleted.
		 */
		Deauthorize(): Observable<number> {
			return this.http.post<number>(this.baseUri + 'QuickConnect/Deauthorize', null, {});
		}

		/**
		 * Initiate a new quick connect request.
		 * Get QuickConnect/Initiate
		 * @return {QuickConnectResult} Quick connect request successfully created.
		 */
		Initiate(): Observable<QuickConnectResult> {
			return this.http.get<QuickConnectResult>(this.baseUri + 'QuickConnect/Initiate', {});
		}

		/**
		 * Gets the current quick connect state.
		 * Get QuickConnect/Status
		 * @return {QuickConnectState} Quick connect state returned.
		 */
		GetStatus(): Observable<QuickConnectState> {
			return this.http.get<QuickConnectState>(this.baseUri + 'QuickConnect/Status', {});
		}

		/**
		 * Gets all package repositories.
		 * Get Repositories
		 * @return {Array<RepositoryInfo>} Package repositories returned.
		 */
		GetRepositories(): Observable<Array<RepositoryInfo>> {
			return this.http.get<Array<RepositoryInfo>>(this.baseUri + 'Repositories', {});
		}

		/**
		 * Sets the enabled and existing package repositories.
		 * Post Repositories
		 * @param {Array<RepositoryInfo>} requestBody The list of package repositories.
		 * @return {void} 
		 */
		SetRepositories(requestBody: Array<RepositoryInfo>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Repositories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get tasks.
		 * Get ScheduledTasks
		 * @param {boolean} isHidden Optional filter tasks that are hidden, or not.
		 * @param {boolean} isEnabled Optional filter tasks that are enabled, or not.
		 * @return {Array<TaskInfo>} Scheduled tasks retrieved.
		 */
		GetTasks(isHidden: boolean | null | undefined, isEnabled: boolean | null | undefined): Observable<Array<TaskInfo>> {
			return this.http.get<Array<TaskInfo>>(this.baseUri + 'ScheduledTasks?isHidden=' + isHidden + '&isEnabled=' + isEnabled, {});
		}

		/**
		 * Stop specified task.
		 * Delete ScheduledTasks/Running/{taskId}
		 * @param {string} taskId Task Id.
		 * @return {void} 
		 */
		StopTask(taskId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ScheduledTasks/Running/' + (taskId == null ? '' : encodeURIComponent(taskId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start specified task.
		 * Post ScheduledTasks/Running/{taskId}
		 * @param {string} taskId Task Id.
		 * @return {void} 
		 */
		StartTask(taskId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ScheduledTasks/Running/' + (taskId == null ? '' : encodeURIComponent(taskId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get task by id.
		 * Get ScheduledTasks/{taskId}
		 * @param {string} taskId Task Id.
		 * @return {TaskInfo} Task retrieved.
		 */
		GetTask(taskId: string): Observable<TaskInfo> {
			return this.http.get<TaskInfo>(this.baseUri + 'ScheduledTasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Update specified task triggers.
		 * Post ScheduledTasks/{taskId}/Triggers
		 * @param {string} taskId Task Id.
		 * @param {Array<TaskTriggerInfo>} requestBody Triggers.
		 * @return {void} 
		 */
		UpdateTask(taskId: string, requestBody: Array<TaskTriggerInfo>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ScheduledTasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/Triggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the search hint result.
		 * Get Search/Hints
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} userId Optional. Supply a user id to search within a user's library or omit to search all.
		 * @param {string} searchTerm The search term to filter on.
		 * @param {Array<string>} includeItemTypes If specified, only results with the specified item types are returned. This allows multiple, comma delimeted.
		 * @param {Array<string>} excludeItemTypes If specified, results with these item types are filtered out. This allows multiple, comma delimeted.
		 * @param {Array<string>} mediaTypes If specified, only results with the specified media types are returned. This allows multiple, comma delimeted.
		 * @param {string} parentId If specified, only children of the parent are returned.
		 * @param {boolean} isMovie Optional filter for movies.
		 * @param {boolean} isSeries Optional filter for series.
		 * @param {boolean} isNews Optional filter for news.
		 * @param {boolean} isKids Optional filter for kids.
		 * @param {boolean} isSports Optional filter for sports.
		 * @param {boolean} includePeople Optional filter whether to include people.
		 * @param {boolean} includeMedia Optional filter whether to include media.
		 * @param {boolean} includeGenres Optional filter whether to include genres.
		 * @param {boolean} includeStudios Optional filter whether to include studios.
		 * @param {boolean} includeArtists Optional filter whether to include artists.
		 * @return {SearchHintResult} Search hint returned.
		 */
		Get(startIndex: number | null | undefined, limit: number | null | undefined, userId: string | null | undefined, searchTerm: string, includeItemTypes: Array<string> | null | undefined, excludeItemTypes: Array<string> | null | undefined, mediaTypes: Array<string> | null | undefined, parentId: string | null | undefined, isMovie: boolean | null | undefined, isSeries: boolean | null | undefined, isNews: boolean | null | undefined, isKids: boolean | null | undefined, isSports: boolean | null | undefined, includePeople: boolean | null | undefined, includeMedia: boolean | null | undefined, includeGenres: boolean | null | undefined, includeStudios: boolean | null | undefined, includeArtists: boolean | null | undefined): Observable<SearchHintResult> {
			return this.http.get<SearchHintResult>(this.baseUri + 'Search/Hints?startIndex=' + startIndex + '&limit=' + limit + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&isMovie=' + isMovie + '&isSeries=' + isSeries + '&isNews=' + isNews + '&isKids=' + isKids + '&isSports=' + isSports + '&includePeople=' + includePeople + '&includeMedia=' + includeMedia + '&includeGenres=' + includeGenres + '&includeStudios=' + includeStudios + '&includeArtists=' + includeArtists, {});
		}

		/**
		 * Gets a list of sessions.
		 * Get Sessions
		 * @param {string} controllableByUserId Filter by sessions that a given user is allowed to remote control.
		 * @param {string} deviceId Filter by device Id.
		 * @param {number} activeWithinSeconds Optional. Filter by sessions that were active in the last n seconds.
		 * @return {Array<SessionInfo>} List of sessions returned.
		 */
		GetSessions(controllableByUserId: string | null | undefined, deviceId: string | null | undefined, activeWithinSeconds: number | null | undefined): Observable<Array<SessionInfo>> {
			return this.http.get<Array<SessionInfo>>(this.baseUri + 'Sessions?controllableByUserId=' + (controllableByUserId == null ? '' : encodeURIComponent(controllableByUserId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&activeWithinSeconds=' + activeWithinSeconds, {});
		}

		/**
		 * Updates capabilities for a device.
		 * Post Sessions/Capabilities
		 * @param {string} id The session id.
		 * @param {Array<string>} playableMediaTypes A list of playable media types, comma delimited. Audio, Video, Book, Photo.
		 * @param {Array<GeneralCommandType>} supportedCommands A list of supported remote control commands, comma delimited.
		 * @param {boolean} supportsMediaControl Determines whether media can be played remotely..
		 * @param {boolean} supportsSync Determines whether sync is supported.
		 * @param {boolean} supportsPersistentIdentifier Determines whether the device supports a unique identifier.
		 * @return {void} 
		 */
		PostCapabilities(id: string | null | undefined, playableMediaTypes: Array<string> | null | undefined, supportedCommands: Array<GeneralCommandType> | null | undefined, supportsMediaControl: boolean | null | undefined, supportsSync: boolean | null | undefined, supportsPersistentIdentifier: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Capabilities?id=' + (id == null ? '' : encodeURIComponent(id)) + '&' + playableMediaTypes?.map(z => `playableMediaTypes=${encodeURIComponent(z)}`).join('&') + '&' + supportedCommands?.map(z => `supportedCommands=${z}`).join('&') + '&supportsMediaControl=' + supportsMediaControl + '&supportsSync=' + supportsSync + '&supportsPersistentIdentifier=' + supportsPersistentIdentifier, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates capabilities for a device.
		 * Post Sessions/Capabilities/Full
		 * @param {string} id The session id.
		 * @param {ClientCapabilitiesDto} requestBody The MediaBrowser.Model.Session.ClientCapabilities.
		 * @return {void} 
		 */
		PostFullCapabilities(id: string | null | undefined, requestBody: ClientCapabilitiesDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Capabilities/Full?id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports that a session has ended.
		 * Post Sessions/Logout
		 * @return {void} 
		 */
		ReportSessionEnded(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Logout', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports playback has started within a session.
		 * Post Sessions/Playing
		 * @param {PlaybackStartInfo} requestBody The playback start info.
		 * @return {void} 
		 */
		ReportPlaybackStart(requestBody: PlaybackStartInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Playing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pings a playback session.
		 * Post Sessions/Playing/Ping
		 * @param {string} playSessionId Playback session id.
		 * @return {void} 
		 */
		PingPlaybackSession(playSessionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Playing/Ping?playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports playback progress within a session.
		 * Post Sessions/Playing/Progress
		 * @param {PlaybackProgressInfo} requestBody The playback progress info.
		 * @return {void} 
		 */
		ReportPlaybackProgress(requestBody: PlaybackProgressInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Playing/Progress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports playback has stopped within a session.
		 * Post Sessions/Playing/Stopped
		 * @param {PlaybackStopInfo} requestBody The playback stop info.
		 * @return {void} 
		 */
		ReportPlaybackStopped(requestBody: PlaybackStopInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Playing/Stopped', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports that a session is viewing an item.
		 * Post Sessions/Viewing
		 * @param {string} sessionId The session id.
		 * @param {string} itemId The item id.
		 * @return {void} 
		 */
		ReportViewing(sessionId: string | null | undefined, itemId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/Viewing?sessionId=' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '&itemId=' + (itemId == null ? '' : encodeURIComponent(itemId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Issues a full general command to a client.
		 * Post Sessions/{sessionId}/Command
		 * @param {string} sessionId The session id.
		 * @param {GeneralCommand} requestBody The MediaBrowser.Model.Session.GeneralCommand.
		 * @return {void} 
		 */
		SendFullGeneralCommand(sessionId: string, requestBody: GeneralCommand): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/Command', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Issues a general command to a client.
		 * Post Sessions/{sessionId}/Command/{command}
		 * @param {string} sessionId The session id.
		 * @param {GeneralCommandType} command The command to send.
		 * @return {void} 
		 */
		SendGeneralCommand(sessionId: string, command: GeneralCommandType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/Command/' + command, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Issues a command to a client to display a message to the user.
		 * Post Sessions/{sessionId}/Message
		 * @param {string} sessionId The session id.
		 * @param {string} text The message test.
		 * @param {string} header The message header.
		 * @param {number} timeoutMs The message timeout. If omitted the user will have to confirm viewing the message.
		 * @return {void} 
		 */
		SendMessageCommand(sessionId: string, text: string, header: string | null | undefined, timeoutMs: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/Message&text=' + (text == null ? '' : encodeURIComponent(text)) + '&header=' + (header == null ? '' : encodeURIComponent(header)) + '&timeoutMs=' + timeoutMs, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Instructs a session to play an item.
		 * Post Sessions/{sessionId}/Playing
		 * @param {string} sessionId The session id.
		 * @param {PlayCommand} playCommand The type of play command to issue (PlayNow, PlayNext, PlayLast). Clients who have not yet implemented play next and play last may play now.
		 * @param {Array<string>} itemIds The ids of the items to play, comma delimited.
		 * @param {number} startPositionTicks The starting position of the first item.
		 * @return {void} 
		 */
		Play(sessionId: string, playCommand: PlayCommand, itemIds: Array<string>, startPositionTicks: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/Playing&playCommand=' + playCommand + '&' + itemIds.map(z => `itemIds=${encodeURIComponent(z)}`).join('&') + '&startPositionTicks=' + startPositionTicks, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Issues a playstate command to a client.
		 * Post Sessions/{sessionId}/Playing/{command}
		 * @param {string} sessionId The session id.
		 * @param {PlaystateCommand} command The MediaBrowser.Model.Session.PlaystateCommand.
		 * @param {number} seekPositionTicks The optional position ticks.
		 * @param {string} controllingUserId The optional controlling user id.
		 * @return {void} 
		 */
		SendPlaystateCommand(sessionId: string, command: PlaystateCommand, seekPositionTicks: number | null | undefined, controllingUserId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/Playing/' + command + '&seekPositionTicks=' + seekPositionTicks + '&controllingUserId=' + (controllingUserId == null ? '' : encodeURIComponent(controllingUserId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Issues a system command to a client.
		 * Post Sessions/{sessionId}/System/{command}
		 * @param {string} sessionId The session id.
		 * @param {GeneralCommandType} command The command to send.
		 * @return {void} 
		 */
		SendSystemCommand(sessionId: string, command: GeneralCommandType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/System/' + command, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an additional user from a session.
		 * Delete Sessions/{sessionId}/User/{userId}
		 * @param {string} sessionId The session id.
		 * @param {string} userId The user id.
		 * @return {void} 
		 */
		RemoveUserFromSession(sessionId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/User/' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds an additional user to a session.
		 * Post Sessions/{sessionId}/User/{userId}
		 * @param {string} sessionId The session id.
		 * @param {string} userId The user id.
		 * @return {void} 
		 */
		AddUserToSession(sessionId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/User/' + (userId == null ? '' : encodeURIComponent(userId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Instructs a session to browse to an item or view.
		 * Post Sessions/{sessionId}/Viewing
		 * @param {string} sessionId The session Id.
		 * @param {string} itemType The type of item to browse to.
		 * @param {string} itemId The Id of the item.
		 * @param {string} itemName The name of the item.
		 * @return {void} 
		 */
		DisplayContent(sessionId: string, itemType: string, itemId: string, itemName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/Viewing&itemType=' + (itemType == null ? '' : encodeURIComponent(itemType)) + '&itemId=' + (itemId == null ? '' : encodeURIComponent(itemId)) + '&itemName=' + (itemName == null ? '' : encodeURIComponent(itemName)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of next up episodes.
		 * Get Shows/NextUp
		 * @param {string} userId The user id of the user to get the next up episodes for.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {string} seriesId Optional. Filter by series id.
		 * @param {string} parentId Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {boolean} enableImges Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {boolean} enableTotalRecordCount Whether to enable the total records count. Defaults to true.
		 * @return {BaseItemDtoQueryResult} Success
		 */
		GetNextUp(userId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, seriesId: string | null | undefined, parentId: string | null | undefined, enableImges: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, enableUserData: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Shows/NextUp?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&seriesId=' + (seriesId == null ? '' : encodeURIComponent(seriesId)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&enableImges=' + enableImges + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&enableUserData=' + enableUserData + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets a list of upcoming episodes.
		 * Get Shows/Upcoming
		 * @param {string} userId The user id of the user to get the upcoming episodes for.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {string} parentId Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {boolean} enableImges Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @return {BaseItemDtoQueryResult} Success
		 */
		GetUpcomingEpisodes(userId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, parentId: string | null | undefined, enableImges: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, enableUserData: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Shows/Upcoming?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&enableImges=' + enableImges + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&enableUserData=' + enableUserData, {});
		}

		/**
		 * Gets similar items.
		 * Get Shows/{itemId}/Similar
		 * @param {string} itemId The item id.
		 * @param {Array<string>} excludeArtistIds Exclude artist ids.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @return {BaseItemDtoQueryResult} Similar items returned.
		 */
		GetSimilarShows(itemId: string, excludeArtistIds: Array<string> | null | undefined, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Shows/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Similar&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&'), {});
		}

		/**
		 * Gets episodes for a tv season.
		 * Get Shows/{seriesId}/Episodes
		 * @param {string} seriesId The series id.
		 * @param {string} userId The user id.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @param {number} season Optional filter by season number.
		 * @param {string} seasonId Optional. Filter by season id.
		 * @param {boolean} isMissing Optional. Filter by items that are missing episodes or not.
		 * @param {string} adjacentTo Optional. Return items that are siblings of a supplied item.
		 * @param {string} startItemId Optional. Skip through the list until a given item is found.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {string} sortBy Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
		 * @return {BaseItemDtoQueryResult} Success
		 */
		GetEpisodes(seriesId: string, userId: string | null | undefined, fields: Array<ItemFields> | null | undefined, season: number | null | undefined, seasonId: string | null | undefined, isMissing: boolean | null | undefined, adjacentTo: string | null | undefined, startItemId: string | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, enableUserData: boolean | null | undefined, sortBy: string | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Shows/' + (seriesId == null ? '' : encodeURIComponent(seriesId)) + '/Episodes&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&season=' + season + '&seasonId=' + (seasonId == null ? '' : encodeURIComponent(seasonId)) + '&isMissing=' + isMissing + '&adjacentTo=' + (adjacentTo == null ? '' : encodeURIComponent(adjacentTo)) + '&startItemId=' + (startItemId == null ? '' : encodeURIComponent(startItemId)) + '&startIndex=' + startIndex + '&limit=' + limit + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&enableUserData=' + enableUserData + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)), {});
		}

		/**
		 * Gets seasons for a tv series.
		 * Get Shows/{seriesId}/Seasons
		 * @param {string} seriesId The series id.
		 * @param {string} userId The user id.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @param {boolean} isSpecialSeason Optional. Filter by special season.
		 * @param {boolean} isMissing Optional. Filter by items that are missing episodes or not.
		 * @param {string} adjacentTo Optional. Return items that are siblings of a supplied item.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @return {BaseItemDtoQueryResult} Success
		 */
		GetSeasons(seriesId: string, userId: string | null | undefined, fields: Array<ItemFields> | null | undefined, isSpecialSeason: boolean | null | undefined, isMissing: boolean | null | undefined, adjacentTo: string | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, enableUserData: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Shows/' + (seriesId == null ? '' : encodeURIComponent(seriesId)) + '/Seasons&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&isSpecialSeason=' + isSpecialSeason + '&isMissing=' + isMissing + '&adjacentTo=' + (adjacentTo == null ? '' : encodeURIComponent(adjacentTo)) + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&enableUserData=' + enableUserData, {});
		}

		/**
		 * Creates an instant playlist based on a given song.
		 * Get Songs/{id}/InstantMix
		 * @param {string} id The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @return {BaseItemDtoQueryResult} Instant playlist returned.
		 */
		GetInstantMixFromSong(id: string, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined, enableImages: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Songs/' + (id == null ? '' : encodeURIComponent(id)) + '/InstantMix&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&') + '&enableImages=' + enableImages + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&'), {});
		}

		/**
		 * Completes the startup wizard.
		 * Post Startup/Complete
		 * @return {void} 
		 */
		CompleteWizard(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Startup/Complete', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the initial startup wizard configuration.
		 * Get Startup/Configuration
		 * @return {StartupConfigurationDto} Initial startup wizard configuration retrieved.
		 */
		GetStartupConfiguration(): Observable<StartupConfigurationDto> {
			return this.http.get<StartupConfigurationDto>(this.baseUri + 'Startup/Configuration', {});
		}

		/**
		 * Sets the initial startup wizard configuration.
		 * Post Startup/Configuration
		 * @param {StartupConfigurationDto} requestBody The updated startup configuration.
		 * @return {void} 
		 */
		UpdateInitialConfiguration(requestBody: StartupConfigurationDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Startup/Configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the first user.
		 * Get Startup/FirstUser
		 * @return {StartupUserDto} Initial user retrieved.
		 */
		GetFirstUser_2(): Observable<StartupUserDto> {
			return this.http.get<StartupUserDto>(this.baseUri + 'Startup/FirstUser', {});
		}

		/**
		 * Sets remote access and UPnP.
		 * Post Startup/RemoteAccess
		 * @param {StartupRemoteAccessDto} requestBody The startup remote access dto.
		 * @return {void} 
		 */
		SetRemoteAccess(requestBody: StartupRemoteAccessDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Startup/RemoteAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the first user.
		 * Get Startup/User
		 * @return {StartupUserDto} Initial user retrieved.
		 */
		GetFirstUser(): Observable<StartupUserDto> {
			return this.http.get<StartupUserDto>(this.baseUri + 'Startup/User', {});
		}

		/**
		 * Sets the user name and password.
		 * Post Startup/User
		 * @param {StartupUserDto} requestBody The DTO containing username and password.
		 * @return {void} 
		 */
		UpdateStartupUser(requestBody: StartupUserDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Startup/User', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all studios from a given item, folder, or the entire library.
		 * Get Studios
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} searchTerm Optional. Search term.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {boolean} enableUserData Optional, include user data.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} userId User id.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @param {boolean} enableTotalRecordCount Total record count.
		 * @return {BaseItemDtoQueryResult} Studios returned.
		 */
		GetStudios(startIndex: number | null | undefined, limit: number | null | undefined, searchTerm: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, isFavorite: boolean | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, userId: string | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, enableImages: boolean | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Studios?startIndex=' + startIndex + '&limit=' + limit + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&isFavorite=' + isFavorite + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&enableImages=' + enableImages + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Gets a studio by name.
		 * Get Studios/{name}
		 * @param {string} name Studio name.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @return {BaseItemDto} Studio returned.
		 */
		GetStudio(name: string, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'Studios/' + (name == null ? '' : encodeURIComponent(name)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get studio image by name.
		 * Get Studios/{name}/Images/{imageType}
		 * @param {string} name Studio name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetStudioImage(name: string, imageType: ImageOptionType, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Studios/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)) + '&imageIndex=' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get studio image by name.
		 * Get Studios/{name}/Images/{imageType}/{imageIndex}
		 * @param {string} name Studio name.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex Image index.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @return {void} Image stream returned.
		 */
		GetStudioImageByIndex(name: string, imageType: ImageOptionType, imageIndex: number, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Studios/' + (name == null ? '' : encodeURIComponent(name)) + '/Images/' + imageType + '/' + imageIndex + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Notify SyncPlay group that member is buffering.
		 * Post SyncPlay/Buffering
		 * @param {BufferRequestDto} requestBody The player status.
		 * @return {void} 
		 */
		SyncPlayBuffering(requestBody: BufferRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Buffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Join an existing SyncPlay group.
		 * Post SyncPlay/Join
		 * @param {JoinGroupRequestDto} requestBody The group to join.
		 * @return {void} 
		 */
		SyncPlayJoinGroup(requestBody: JoinGroupRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Join', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Leave the joined SyncPlay group.
		 * Post SyncPlay/Leave
		 * @return {void} 
		 */
		SyncPlayLeaveGroup(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Leave', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all SyncPlay groups.
		 * Get SyncPlay/List
		 * @return {Array<GroupInfoDto>} Groups returned.
		 */
		SyncPlayGetGroups(): Observable<Array<GroupInfoDto>> {
			return this.http.get<Array<GroupInfoDto>>(this.baseUri + 'SyncPlay/List', {});
		}

		/**
		 * Request to move an item in the playlist in SyncPlay group.
		 * Post SyncPlay/MovePlaylistItem
		 * @param {MovePlaylistItemRequestDto} requestBody The new position for the item.
		 * @return {void} 
		 */
		SyncPlayMovePlaylistItem(requestBody: MovePlaylistItemRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/MovePlaylistItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new SyncPlay group.
		 * Post SyncPlay/New
		 * @param {NewGroupRequestDto} requestBody The settings of the new group.
		 * @return {void} 
		 */
		SyncPlayCreateGroup(requestBody: NewGroupRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/New', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request next item in SyncPlay group.
		 * Post SyncPlay/NextItem
		 * @param {NextItemRequestDto} requestBody The current item information.
		 * @return {void} 
		 */
		SyncPlayNextItem(requestBody: NextItemRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/NextItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request pause in SyncPlay group.
		 * Post SyncPlay/Pause
		 * @return {void} 
		 */
		SyncPlayPause(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Pause', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update session ping.
		 * Post SyncPlay/Ping
		 * @param {PingRequestDto} requestBody The new ping.
		 * @return {void} 
		 */
		SyncPlayPing(requestBody: PingRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Ping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request previous item in SyncPlay group.
		 * Post SyncPlay/PreviousItem
		 * @param {PreviousItemRequestDto} requestBody The current item information.
		 * @return {void} 
		 */
		SyncPlayPreviousItem(requestBody: PreviousItemRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/PreviousItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request to queue items to the playlist of a SyncPlay group.
		 * Post SyncPlay/Queue
		 * @param {QueueRequestDto} requestBody The items to add.
		 * @return {void} 
		 */
		SyncPlayQueue(requestBody: QueueRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Queue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Notify SyncPlay group that member is ready for playback.
		 * Post SyncPlay/Ready
		 * @param {ReadyRequestDto} requestBody The player status.
		 * @return {void} 
		 */
		SyncPlayReady(requestBody: ReadyRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Ready', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request to remove items from the playlist in SyncPlay group.
		 * Post SyncPlay/RemoveFromPlaylist
		 * @param {RemoveFromPlaylistRequestDto} requestBody The items to remove.
		 * @return {void} 
		 */
		SyncPlayRemoveFromPlaylist(requestBody: RemoveFromPlaylistRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/RemoveFromPlaylist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request seek in SyncPlay group.
		 * Post SyncPlay/Seek
		 * @param {SeekRequestDto} requestBody The new playback position.
		 * @return {void} 
		 */
		SyncPlaySeek(requestBody: SeekRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Seek', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request SyncPlay group to ignore member during group-wait.
		 * Post SyncPlay/SetIgnoreWait
		 * @param {IgnoreWaitRequestDto} requestBody The settings to set.
		 * @return {void} 
		 */
		SyncPlaySetIgnoreWait(requestBody: IgnoreWaitRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/SetIgnoreWait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request to set new playlist in SyncPlay group.
		 * Post SyncPlay/SetNewQueue
		 * @param {PlayRequestDto} requestBody The new playlist to play in the group.
		 * @return {void} 
		 */
		SyncPlaySetNewQueue(requestBody: PlayRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/SetNewQueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request to change playlist item in SyncPlay group.
		 * Post SyncPlay/SetPlaylistItem
		 * @param {SetPlaylistItemRequestDto} requestBody The new item to play.
		 * @return {void} 
		 */
		SyncPlaySetPlaylistItem(requestBody: SetPlaylistItemRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/SetPlaylistItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request to set repeat mode in SyncPlay group.
		 * Post SyncPlay/SetRepeatMode
		 * @param {SetRepeatModeRequestDto} requestBody The new repeat mode.
		 * @return {void} 
		 */
		SyncPlaySetRepeatMode(requestBody: SetRepeatModeRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/SetRepeatMode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request to set shuffle mode in SyncPlay group.
		 * Post SyncPlay/SetShuffleMode
		 * @param {SetShuffleModeRequestDto} requestBody The new shuffle mode.
		 * @return {void} 
		 */
		SyncPlaySetShuffleMode(requestBody: SetShuffleModeRequestDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/SetShuffleMode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request stop in SyncPlay group.
		 * Post SyncPlay/Stop
		 * @return {void} 
		 */
		SyncPlayStop(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Stop', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request unpause in SyncPlay group.
		 * Post SyncPlay/Unpause
		 * @return {void} 
		 */
		SyncPlayUnpause(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SyncPlay/Unpause', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets activity log entries.
		 * Get System/ActivityLog/Entries
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Date} minDate Optional. The minimum date. Format = ISO.
		 * @param {boolean} hasUserId Optional. Filter log entries if it has user id, or not.
		 * @return {ActivityLogEntryQueryResult} Activity log returned.
		 */
		GetLogEntries(startIndex: number | null | undefined, limit: number | null | undefined, minDate: Date | null | undefined, hasUserId: boolean | null | undefined): Observable<ActivityLogEntryQueryResult> {
			return this.http.get<ActivityLogEntryQueryResult>(this.baseUri + 'System/ActivityLog/Entries?startIndex=' + startIndex + '&limit=' + limit + '&minDate=' + minDate?.toISOString() + '&hasUserId=' + hasUserId, {});
		}

		/**
		 * Gets application configuration.
		 * Get System/Configuration
		 * @return {ServerConfiguration} Application configuration returned.
		 */
		GetConfiguration(): Observable<ServerConfiguration> {
			return this.http.get<ServerConfiguration>(this.baseUri + 'System/Configuration', {});
		}

		/**
		 * Updates application configuration.
		 * Post System/Configuration
		 * @param {ServerConfiguration} requestBody Configuration.
		 * @return {void} 
		 */
		UpdateConfiguration(requestBody: ServerConfiguration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'System/Configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a default MetadataOptions object.
		 * Get System/Configuration/MetadataOptions/Default
		 * @return {MetadataOptions} Metadata options returned.
		 */
		GetDefaultMetadataOptions(): Observable<MetadataOptions> {
			return this.http.get<MetadataOptions>(this.baseUri + 'System/Configuration/MetadataOptions/Default', {});
		}

		/**
		 * Gets a named configuration.
		 * Get System/Configuration/{key}
		 * @param {string} key Configuration key.
		 * @return {string} Configuration returned.
		 */
		GetNamedConfiguration(key: string): Observable<string> {
			return this.http.get(this.baseUri + 'System/Configuration/' + (key == null ? '' : encodeURIComponent(key)), { responseType: 'text' });
		}

		/**
		 * Updates named configuration.
		 * Post System/Configuration/{key}
		 * @param {string} key Configuration key.
		 * @return {void} 
		 */
		UpdateNamedConfiguration(key: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'System/Configuration/' + (key == null ? '' : encodeURIComponent(key)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the request endpoint.
		 * Get System/Endpoint
		 * @return {EndPointInfo} Information retrieved.
		 */
		GetEndpointInfo(): Observable<EndPointInfo> {
			return this.http.get<EndPointInfo>(this.baseUri + 'System/Endpoint', {});
		}

		/**
		 * Gets information about the server.
		 * Get System/Info
		 * @return {SystemInfo} Information retrieved.
		 */
		GetSystemInfo(): Observable<SystemInfo> {
			return this.http.get<SystemInfo>(this.baseUri + 'System/Info', {});
		}

		/**
		 * Gets public information about the server.
		 * Get System/Info/Public
		 * @return {PublicSystemInfo} Information retrieved.
		 */
		GetPublicSystemInfo(): Observable<PublicSystemInfo> {
			return this.http.get<PublicSystemInfo>(this.baseUri + 'System/Info/Public', {});
		}

		/**
		 * Gets a list of available server log files.
		 * Get System/Logs
		 * @return {Array<LogFile>} Information retrieved.
		 */
		GetServerLogs(): Observable<Array<LogFile>> {
			return this.http.get<Array<LogFile>>(this.baseUri + 'System/Logs', {});
		}

		/**
		 * Gets a log file.
		 * Get System/Logs/Log
		 * @param {string} name The name of the log file to get.
		 * @return {string} Log file retrieved.
		 */
		GetLogFile(name: string): Observable<string> {
			return this.http.get(this.baseUri + 'System/Logs/Log?name=' + (name == null ? '' : encodeURIComponent(name)), { responseType: 'text' });
		}

		/**
		 * Updates the path to the media encoder.
		 * Post System/MediaEncoder/Path
		 * @param {MediaEncoderPathDto} requestBody Media encoder path form body.
		 * @return {void} 
		 */
		UpdateMediaEncoderPath(requestBody: MediaEncoderPathDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'System/MediaEncoder/Path', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pings the system.
		 * Get System/Ping
		 * @return {string} Information retrieved.
		 */
		GetPingSystem(): Observable<string> {
			return this.http.get(this.baseUri + 'System/Ping', { responseType: 'text' });
		}

		/**
		 * Pings the system.
		 * Post System/Ping
		 * @return {string} Information retrieved.
		 */
		PostPingSystem(): Observable<string> {
			return this.http.post(this.baseUri + 'System/Ping', null, { responseType: 'text' });
		}

		/**
		 * Restarts the application.
		 * Post System/Restart
		 * @return {void} 
		 */
		RestartApplication(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'System/Restart', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Shuts down the application.
		 * Post System/Shutdown
		 * @return {void} 
		 */
		ShutdownApplication(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'System/Shutdown', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets wake on lan information.
		 * Get System/WakeOnLanInfo
		 * @return {Array<WakeOnLanInfo>} Information retrieved.
		 */
		GetWakeOnLanInfo(): Observable<Array<WakeOnLanInfo>> {
			return this.http.get<Array<WakeOnLanInfo>>(this.baseUri + 'System/WakeOnLanInfo', {});
		}

		/**
		 * Finds movies and trailers similar to a given trailer.
		 * Get Trailers
		 * @param {string} userId The user id.
		 * @param {string} maxOfficialRating Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
		 * @param {boolean} hasThemeSong Optional filter by items with theme songs.
		 * @param {boolean} hasThemeVideo Optional filter by items with theme videos.
		 * @param {boolean} hasSubtitles Optional filter by items with subtitles.
		 * @param {boolean} hasSpecialFeature Optional filter by items with special features.
		 * @param {boolean} hasTrailer Optional filter by items with trailers.
		 * @param {string} adjacentTo Optional. Return items that are siblings of a supplied item.
		 * @param {number} parentIndexNumber Optional filter by parent index number.
		 * @param {boolean} hasParentalRating Optional filter by items that have or do not have a parental rating.
		 * @param {boolean} isHd Optional filter by items that are HD or not.
		 * @param {boolean} is4K Optional filter by items that are 4K or not.
		 * @param {Array<LocationType>} locationTypes Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.
		 * @param {Array<LocationType>} excludeLocationTypes Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.
		 * @param {boolean} isMissing Optional filter by items that are missing episodes or not.
		 * @param {boolean} isUnaired Optional filter by items that are unaired episodes or not.
		 * @param {number} minCommunityRating Optional filter by minimum community rating.
		 * @param {number} minCriticRating Optional filter by minimum critic rating.
		 * @param {Date} minPremiereDate Optional. The minimum premiere date. Format = ISO.
		 * @param {Date} minDateLastSaved Optional. The minimum last saved date. Format = ISO.
		 * @param {Date} minDateLastSavedForUser Optional. The minimum last saved date for the current user. Format = ISO.
		 * @param {Date} maxPremiereDate Optional. The maximum premiere date. Format = ISO.
		 * @param {boolean} hasOverview Optional filter by items that have an overview or not.
		 * @param {boolean} hasImdbId Optional filter by items that have an imdb id or not.
		 * @param {boolean} hasTmdbId Optional filter by items that have a tmdb id or not.
		 * @param {boolean} hasTvdbId Optional filter by items that have a tvdb id or not.
		 * @param {Array<string>} excludeItemIds Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {boolean} recursive When searching within folders, this determines whether or not the search will be recursive. true/false.
		 * @param {string} searchTerm Optional. Filter based on a search term.
		 * @param {string} sortOrder Sort Order - Ascending,Descending.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {Array<string>} mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
		 * @param {Array<ImageType>} imageTypes Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.
		 * @param {string} sortBy Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
		 * @param {boolean} isPlayed Optional filter by items that are played, or not.
		 * @param {Array<string>} genres Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
		 * @param {Array<string>} officialRatings Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
		 * @param {Array<string>} tags Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
		 * @param {Array<number>} years Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
		 * @param {boolean} enableUserData Optional, include user data.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} person Optional. If specified, results will be filtered to include only those containing the specified person.
		 * @param {Array<string>} personIds Optional. If specified, results will be filtered to include only those containing the specified person id.
		 * @param {Array<string>} personTypes Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
		 * @param {Array<string>} studios Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
		 * @param {Array<string>} artists Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.
		 * @param {Array<string>} excludeArtistIds Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.
		 * @param {Array<string>} artistIds Optional. If specified, results will be filtered to include only those containing the specified artist id.
		 * @param {Array<string>} albumArtistIds Optional. If specified, results will be filtered to include only those containing the specified album artist id.
		 * @param {Array<string>} contributingArtistIds Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.
		 * @param {Array<string>} albums Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.
		 * @param {Array<string>} albumIds Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.
		 * @param {Array<string>} ids Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited.
		 * @param {Array<VideoType>} videoTypes Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.
		 * @param {string} minOfficialRating Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
		 * @param {boolean} isLocked Optional filter by items that are locked.
		 * @param {boolean} isPlaceHolder Optional filter by items that are placeholders.
		 * @param {boolean} hasOfficialRating Optional filter by items that have official ratings.
		 * @param {boolean} collapseBoxSetItems Whether or not to hide items behind their boxsets.
		 * @param {number} minWidth Optional. Filter by the minimum width of the item.
		 * @param {number} minHeight Optional. Filter by the minimum height of the item.
		 * @param {number} maxWidth Optional. Filter by the maximum width of the item.
		 * @param {number} maxHeight Optional. Filter by the maximum height of the item.
		 * @param {boolean} is3D Optional filter by items that are 3D, or not.
		 * @param {Array<SeriesStatus>} seriesStatus Optional filter by Series Status. Allows multiple, comma delimited.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {Array<string>} studioIds Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
		 * @param {Array<string>} genreIds Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
		 * @param {boolean} enableTotalRecordCount Optional. Enable the total record count.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @return {BaseItemDtoQueryResult} Success
		 */
		GetTrailers(userId: string | null | undefined, maxOfficialRating: string | null | undefined, hasThemeSong: boolean | null | undefined, hasThemeVideo: boolean | null | undefined, hasSubtitles: boolean | null | undefined, hasSpecialFeature: boolean | null | undefined, hasTrailer: boolean | null | undefined, adjacentTo: string | null | undefined, parentIndexNumber: number | null | undefined, hasParentalRating: boolean | null | undefined, isHd: boolean | null | undefined, is4K: boolean | null | undefined, locationTypes: Array<LocationType> | null | undefined, excludeLocationTypes: Array<LocationType> | null | undefined, isMissing: boolean | null | undefined, isUnaired: boolean | null | undefined, minCommunityRating: number | null | undefined, minCriticRating: number | null | undefined, minPremiereDate: Date | null | undefined, minDateLastSaved: Date | null | undefined, minDateLastSavedForUser: Date | null | undefined, maxPremiereDate: Date | null | undefined, hasOverview: boolean | null | undefined, hasImdbId: boolean | null | undefined, hasTmdbId: boolean | null | undefined, hasTvdbId: boolean | null | undefined, excludeItemIds: Array<string> | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, recursive: boolean | null | undefined, searchTerm: string | null | undefined, sortOrder: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, filters: Array<ItemFilter> | null | undefined, isFavorite: boolean | null | undefined, mediaTypes: Array<string> | null | undefined, imageTypes: Array<ImageType> | null | undefined, sortBy: string | null | undefined, isPlayed: boolean | null | undefined, genres: Array<string> | null | undefined, officialRatings: Array<string> | null | undefined, tags: Array<string> | null | undefined, years: Array<number> | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, person: string | null | undefined, personIds: Array<string> | null | undefined, personTypes: Array<string> | null | undefined, studios: Array<string> | null | undefined, artists: Array<string> | null | undefined, excludeArtistIds: Array<string> | null | undefined, artistIds: Array<string> | null | undefined, albumArtistIds: Array<string> | null | undefined, contributingArtistIds: Array<string> | null | undefined, albums: Array<string> | null | undefined, albumIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, videoTypes: Array<VideoType> | null | undefined, minOfficialRating: string | null | undefined, isLocked: boolean | null | undefined, isPlaceHolder: boolean | null | undefined, hasOfficialRating: boolean | null | undefined, collapseBoxSetItems: boolean | null | undefined, minWidth: number | null | undefined, minHeight: number | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, is3D: boolean | null | undefined, seriesStatus: Array<SeriesStatus> | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, studioIds: Array<string> | null | undefined, genreIds: Array<string> | null | undefined, enableTotalRecordCount: boolean | null | undefined, enableImages: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Trailers?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&maxOfficialRating=' + (maxOfficialRating == null ? '' : encodeURIComponent(maxOfficialRating)) + '&hasThemeSong=' + hasThemeSong + '&hasThemeVideo=' + hasThemeVideo + '&hasSubtitles=' + hasSubtitles + '&hasSpecialFeature=' + hasSpecialFeature + '&hasTrailer=' + hasTrailer + '&adjacentTo=' + (adjacentTo == null ? '' : encodeURIComponent(adjacentTo)) + '&parentIndexNumber=' + parentIndexNumber + '&hasParentalRating=' + hasParentalRating + '&isHd=' + isHd + '&is4K=' + is4K + '&' + locationTypes?.map(z => `locationTypes=${z}`).join('&') + '&' + excludeLocationTypes?.map(z => `excludeLocationTypes=${z}`).join('&') + '&isMissing=' + isMissing + '&isUnaired=' + isUnaired + '&minCommunityRating=' + minCommunityRating + '&minCriticRating=' + minCriticRating + '&minPremiereDate=' + minPremiereDate?.toISOString() + '&minDateLastSaved=' + minDateLastSaved?.toISOString() + '&minDateLastSavedForUser=' + minDateLastSavedForUser?.toISOString() + '&maxPremiereDate=' + maxPremiereDate?.toISOString() + '&hasOverview=' + hasOverview + '&hasImdbId=' + hasImdbId + '&hasTmdbId=' + hasTmdbId + '&hasTvdbId=' + hasTvdbId + '&' + excludeItemIds?.map(z => `excludeItemIds=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex + '&limit=' + limit + '&recursive=' + recursive + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + filters?.map(z => `filters=${z}`).join('&') + '&isFavorite=' + isFavorite + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&' + imageTypes?.map(z => `imageTypes=${z}`).join('&') + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&isPlayed=' + isPlayed + '&' + genres?.map(z => `genres=${encodeURIComponent(z)}`).join('&') + '&' + officialRatings?.map(z => `officialRatings=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&' + years?.map(z => `years=${z}`).join('&') + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&person=' + (person == null ? '' : encodeURIComponent(person)) + '&' + personIds?.map(z => `personIds=${encodeURIComponent(z)}`).join('&') + '&' + personTypes?.map(z => `personTypes=${encodeURIComponent(z)}`).join('&') + '&' + studios?.map(z => `studios=${encodeURIComponent(z)}`).join('&') + '&' + artists?.map(z => `artists=${encodeURIComponent(z)}`).join('&') + '&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + artistIds?.map(z => `artistIds=${encodeURIComponent(z)}`).join('&') + '&' + albumArtistIds?.map(z => `albumArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + contributingArtistIds?.map(z => `contributingArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + albums?.map(z => `albums=${encodeURIComponent(z)}`).join('&') + '&' + albumIds?.map(z => `albumIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + videoTypes?.map(z => `videoTypes=${z}`).join('&') + '&minOfficialRating=' + (minOfficialRating == null ? '' : encodeURIComponent(minOfficialRating)) + '&isLocked=' + isLocked + '&isPlaceHolder=' + isPlaceHolder + '&hasOfficialRating=' + hasOfficialRating + '&collapseBoxSetItems=' + collapseBoxSetItems + '&minWidth=' + minWidth + '&minHeight=' + minHeight + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&is3D=' + is3D + '&' + seriesStatus?.map(z => `seriesStatus=${z}`).join('&') + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&' + studioIds?.map(z => `studioIds=${encodeURIComponent(z)}`).join('&') + '&' + genreIds?.map(z => `genreIds=${encodeURIComponent(z)}`).join('&') + '&enableTotalRecordCount=' + enableTotalRecordCount + '&enableImages=' + enableImages, {});
		}

		/**
		 * Gets similar items.
		 * Get Trailers/{itemId}/Similar
		 * @param {string} itemId The item id.
		 * @param {Array<string>} excludeArtistIds Exclude artist ids.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
		 * @return {BaseItemDtoQueryResult} Similar items returned.
		 */
		GetSimilarTrailers(itemId: string, excludeArtistIds: Array<string> | null | undefined, userId: string | null | undefined, limit: number | null | undefined, fields: Array<ItemFields> | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Trailers/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Similar&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${z}`).join('&'), {});
		}

		/**
		 * Gets a list of users.
		 * Get Users
		 * @param {boolean} isHidden Optional filter by IsHidden=true or false.
		 * @param {boolean} isDisabled Optional filter by IsDisabled=true or false.
		 * @return {Array<UserDto>} Users returned.
		 */
		GetUsers(isHidden: boolean | null | undefined, isDisabled: boolean | null | undefined): Observable<Array<UserDto>> {
			return this.http.get<Array<UserDto>>(this.baseUri + 'Users?isHidden=' + isHidden + '&isDisabled=' + isDisabled, {});
		}

		/**
		 * Authenticates a user by name.
		 * Post Users/AuthenticateByName
		 * @param {AuthenticateUserByName} requestBody The M:Jellyfin.Api.Controllers.UserController.AuthenticateUserByName(Jellyfin.Api.Models.UserDtos.AuthenticateUserByName) request.
		 * @return {AuthenticationResult} User authenticated.
		 */
		AuthenticateUserByName(requestBody: AuthenticateUserByName): Observable<AuthenticationResult> {
			return this.http.post<AuthenticationResult>(this.baseUri + 'Users/AuthenticateByName', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authenticates a user with quick connect.
		 * Post Users/AuthenticateWithQuickConnect
		 * @param {QuickConnectDto} requestBody The Jellyfin.Api.Models.UserDtos.QuickConnectDto request.
		 * @return {AuthenticationResult} User authenticated.
		 */
		AuthenticateWithQuickConnect(requestBody: QuickConnectDto): Observable<AuthenticationResult> {
			return this.http.post<AuthenticationResult>(this.baseUri + 'Users/AuthenticateWithQuickConnect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates the forgot password process for a local user.
		 * Post Users/ForgotPassword
		 * @param {ForgotPasswordDto} requestBody The forgot password request containing the entered username.
		 * @return {ForgotPasswordResult} Password reset process started.
		 */
		ForgotPassword(requestBody: ForgotPasswordDto): Observable<ForgotPasswordResult> {
			return this.http.post<ForgotPasswordResult>(this.baseUri + 'Users/ForgotPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Redeems a forgot password pin.
		 * Post Users/ForgotPassword/Pin
		 * @param {string} requestBody The pin.
		 * @return {PinRedeemResult} Pin reset process started.
		 */
		ForgotPasswordPin(requestBody: string): Observable<PinRedeemResult> {
			return this.http.post<PinRedeemResult>(this.baseUri + 'Users/ForgotPassword/Pin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the user based on auth token.
		 * Get Users/Me
		 * @return {UserDto} User returned.
		 */
		GetCurrentUser(): Observable<UserDto> {
			return this.http.get<UserDto>(this.baseUri + 'Users/Me', {});
		}

		/**
		 * Creates a user.
		 * Post Users/New
		 * @param {CreateUserByName} requestBody The create user by name request body.
		 * @return {UserDto} User created.
		 */
		CreateUserByName(requestBody: CreateUserByName): Observable<UserDto> {
			return this.http.post<UserDto>(this.baseUri + 'Users/New', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of publicly visible users for display on a login screen.
		 * Get Users/Public
		 * @return {Array<UserDto>} Public users returned.
		 */
		GetPublicUsers(): Observable<Array<UserDto>> {
			return this.http.get<Array<UserDto>>(this.baseUri + 'Users/Public', {});
		}

		/**
		 * Deletes a user.
		 * Delete Users/{userId}
		 * @param {string} userId The user id.
		 * @return {void} 
		 */
		DeleteUser(userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a user by Id.
		 * Get Users/{userId}
		 * @param {string} userId The user id.
		 * @return {UserDto} User returned.
		 */
		GetUserById(userId: string): Observable<UserDto> {
			return this.http.get<UserDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Updates a user.
		 * Post Users/{userId}
		 * @param {string} userId The user id.
		 * @param {UserDto} requestBody The updated user model.
		 * @return {void} 
		 */
		UpdateUser(userId: string, requestBody: UserDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticates a user.
		 * Post Users/{userId}/Authenticate
		 * @param {string} userId The user id.
		 * @param {string} pw The password as plain text.
		 * @param {string} password The password sha1-hash.
		 * @return {AuthenticationResult} User authenticated.
		 */
		AuthenticateUser(userId: string, pw: string, password: string | null | undefined): Observable<AuthenticationResult> {
			return this.http.post<AuthenticationResult>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Authenticate&pw=' + (pw == null ? '' : encodeURIComponent(pw)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), null, {});
		}

		/**
		 * Updates a user configuration.
		 * Post Users/{userId}/Configuration
		 * @param {string} userId The user id.
		 * @param {UserConfiguration} requestBody The new user configuration.
		 * @return {void} 
		 */
		UpdateUserConfiguration(userId: string, requestBody: UserConfiguration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a user's easy password.
		 * Post Users/{userId}/EasyPassword
		 * @param {string} userId The user id.
		 * @param {UpdateUserEasyPassword} requestBody The M:Jellyfin.Api.Controllers.UserController.UpdateUserEasyPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserEasyPassword) request.
		 * @return {void} 
		 */
		UpdateUserEasyPassword(userId: string, requestBody: UpdateUserEasyPassword): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/EasyPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unmarks item as a favorite.
		 * Delete Users/{userId}/FavoriteItems/{itemId}
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {UserItemDataDto} Item unmarked as favorite.
		 */
		UnmarkFavoriteItem(userId: string, itemId: string): Observable<UserItemDataDto> {
			return this.http.delete<UserItemDataDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/FavoriteItems/' + (itemId == null ? '' : encodeURIComponent(itemId)), {});
		}

		/**
		 * Marks an item as a favorite.
		 * Post Users/{userId}/FavoriteItems/{itemId}
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {UserItemDataDto} Item marked as favorite.
		 */
		MarkFavoriteItem(userId: string, itemId: string): Observable<UserItemDataDto> {
			return this.http.post<UserItemDataDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/FavoriteItems/' + (itemId == null ? '' : encodeURIComponent(itemId)), null, {});
		}

		/**
		 * Get user view grouping options.
		 * Get Users/{userId}/GroupingOptions
		 * @param {string} userId User id.
		 * @return {Array<SpecialViewOptionDto>} User view grouping options returned.
		 */
		GetGroupingOptions(userId: string): Observable<Array<SpecialViewOptionDto>> {
			return this.http.get<Array<SpecialViewOptionDto>>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/GroupingOptions', {});
		}

		/**
		 * Delete the user's image.
		 * Delete Users/{userId}/Images/{imageType}
		 * @param {string} userId User Id.
		 * @param {ImageOptionType} imageType (Unused) Image type.
		 * @param {number} index (Unused) Image index.
		 * @return {void} 
		 */
		DeleteUserImage(userId: string, imageType: ImageOptionType, index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Images/' + imageType + '&index=' + index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user profile image.
		 * Get Users/{userId}/Images/{imageType}
		 * @param {string} userId User id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @param {number} imageIndex Image index.
		 * @return {void} Image stream returned.
		 */
		GetUserImage(userId: string, imageType: ImageOptionType, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined, imageIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Images/' + imageType + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)) + '&imageIndex=' + imageIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the user image.
		 * Post Users/{userId}/Images/{imageType}
		 * @param {string} userId User Id.
		 * @param {ImageOptionType} imageType (Unused) Image type.
		 * @param {number} index (Unused) Image index.
		 * @return {void} 
		 */
		PostUserImage(userId: string, imageType: ImageOptionType, index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Images/' + imageType + '&index=' + index, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user profile image.
		 * Get Users/{userId}/Images/{imageType}/{imageIndex}
		 * @param {string} userId User id.
		 * @param {ImageOptionType} imageType Image type.
		 * @param {number} imageIndex Image index.
		 * @param {string} tag Optional. Supply the cache tag from the item object to receive strong caching headers.
		 * @param {ImageFormat} format Determines the output format of the image - original,gif,jpg,png.
		 * @param {number} maxWidth The maximum image width to return.
		 * @param {number} maxHeight The maximum image height to return.
		 * @param {number} percentPlayed Optional. Percent to render for the percent played overlay.
		 * @param {number} unplayedCount Optional. Unplayed count overlay to render.
		 * @param {number} width The fixed image width to return.
		 * @param {number} height The fixed image height to return.
		 * @param {number} quality Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
		 * @param {boolean} cropWhitespace Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
		 * @param {boolean} addPlayedIndicator Optional. Add a played indicator.
		 * @param {number} blur Optional. Blur image.
		 * @param {string} backgroundColor Optional. Apply a background color for transparent images.
		 * @param {string} foregroundLayer Optional. Apply a foreground layer on top of the image.
		 * @return {void} Image stream returned.
		 */
		GetUserImageByIndex(userId: string, imageType: ImageOptionType, imageIndex: number, tag: string | null | undefined, format: ImageFormat | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, percentPlayed: number | null | undefined, unplayedCount: number | null | undefined, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined, cropWhitespace: boolean | null | undefined, addPlayedIndicator: boolean | null | undefined, blur: number | null | undefined, backgroundColor: string | null | undefined, foregroundLayer: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Images/' + imageType + '/' + imageIndex + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&format=' + format + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&percentPlayed=' + percentPlayed + '&unplayedCount=' + unplayedCount + '&width=' + width + '&height=' + height + '&quality=' + quality + '&cropWhitespace=' + cropWhitespace + '&addPlayedIndicator=' + addPlayedIndicator + '&blur=' + blur + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)) + '&foregroundLayer=' + (foregroundLayer == null ? '' : encodeURIComponent(foregroundLayer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the user's image.
		 * Delete Users/{userId}/Images/{imageType}/{index}
		 * @param {string} userId User Id.
		 * @param {ImageOptionType} imageType (Unused) Image type.
		 * @param {number} index (Unused) Image index.
		 * @return {void} 
		 */
		DeleteUserImageByIndex(userId: string, imageType: ImageOptionType, index: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Images/' + imageType + '/' + index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the user image.
		 * Post Users/{userId}/Images/{imageType}/{index}
		 * @param {string} userId User Id.
		 * @param {ImageOptionType} imageType (Unused) Image type.
		 * @param {number} index (Unused) Image index.
		 * @return {void} 
		 */
		PostUserImageByIndex(userId: string, imageType: ImageOptionType, index: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Images/' + imageType + '/' + index, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets items based on a query.
		 * Get Users/{userId}/Items
		 * @param {string} userId The user id supplied as query parameter.
		 * @param {string} maxOfficialRating Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
		 * @param {boolean} hasThemeSong Optional filter by items with theme songs.
		 * @param {boolean} hasThemeVideo Optional filter by items with theme videos.
		 * @param {boolean} hasSubtitles Optional filter by items with subtitles.
		 * @param {boolean} hasSpecialFeature Optional filter by items with special features.
		 * @param {boolean} hasTrailer Optional filter by items with trailers.
		 * @param {string} adjacentTo Optional. Return items that are siblings of a supplied item.
		 * @param {number} parentIndexNumber Optional filter by parent index number.
		 * @param {boolean} hasParentalRating Optional filter by items that have or do not have a parental rating.
		 * @param {boolean} isHd Optional filter by items that are HD or not.
		 * @param {boolean} is4K Optional filter by items that are 4K or not.
		 * @param {Array<LocationType>} locationTypes Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimeted.
		 * @param {Array<LocationType>} excludeLocationTypes Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimeted.
		 * @param {boolean} isMissing Optional filter by items that are missing episodes or not.
		 * @param {boolean} isUnaired Optional filter by items that are unaired episodes or not.
		 * @param {number} minCommunityRating Optional filter by minimum community rating.
		 * @param {number} minCriticRating Optional filter by minimum critic rating.
		 * @param {Date} minPremiereDate Optional. The minimum premiere date. Format = ISO.
		 * @param {Date} minDateLastSaved Optional. The minimum last saved date. Format = ISO.
		 * @param {Date} minDateLastSavedForUser Optional. The minimum last saved date for the current user. Format = ISO.
		 * @param {Date} maxPremiereDate Optional. The maximum premiere date. Format = ISO.
		 * @param {boolean} hasOverview Optional filter by items that have an overview or not.
		 * @param {boolean} hasImdbId Optional filter by items that have an imdb id or not.
		 * @param {boolean} hasTmdbId Optional filter by items that have a tmdb id or not.
		 * @param {boolean} hasTvdbId Optional filter by items that have a tvdb id or not.
		 * @param {Array<string>} excludeItemIds Optional. If specified, results will be filtered by exxcluding item ids. This allows multiple, comma delimeted.
		 * @param {number} startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {boolean} recursive When searching within folders, this determines whether or not the search will be recursive. true/false.
		 * @param {string} searchTerm Optional. Filter based on a search term.
		 * @param {string} sortOrder Sort Order - Ascending,Descending.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimeted.
		 * @param {Array<ItemFilter>} filters Optional. Specify additional filters to apply. This allows multiple, comma delimeted. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
		 * @param {boolean} isFavorite Optional filter by items that are marked as favorite, or not.
		 * @param {Array<string>} mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
		 * @param {Array<ImageType>} imageTypes Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.
		 * @param {string} sortBy Optional. Specify one or more sort orders, comma delimeted. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
		 * @param {boolean} isPlayed Optional filter by items that are played, or not.
		 * @param {Array<string>} genres Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimeted.
		 * @param {Array<string>} officialRatings Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimeted.
		 * @param {Array<string>} tags Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimeted.
		 * @param {Array<number>} years Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimeted.
		 * @param {boolean} enableUserData Optional, include user data.
		 * @param {number} imageTypeLimit Optional, the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} person Optional. If specified, results will be filtered to include only those containing the specified person.
		 * @param {Array<string>} personIds Optional. If specified, results will be filtered to include only those containing the specified person id.
		 * @param {Array<string>} personTypes Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
		 * @param {Array<string>} studios Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimeted.
		 * @param {Array<string>} artists Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimeted.
		 * @param {Array<string>} excludeArtistIds Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimeted.
		 * @param {Array<string>} artistIds Optional. If specified, results will be filtered to include only those containing the specified artist id.
		 * @param {Array<string>} albumArtistIds Optional. If specified, results will be filtered to include only those containing the specified album artist id.
		 * @param {Array<string>} contributingArtistIds Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.
		 * @param {Array<string>} albums Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimeted.
		 * @param {Array<string>} albumIds Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimeted.
		 * @param {Array<string>} ids Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited.
		 * @param {Array<VideoType>} videoTypes Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimeted.
		 * @param {string} minOfficialRating Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
		 * @param {boolean} isLocked Optional filter by items that are locked.
		 * @param {boolean} isPlaceHolder Optional filter by items that are placeholders.
		 * @param {boolean} hasOfficialRating Optional filter by items that have official ratings.
		 * @param {boolean} collapseBoxSetItems Whether or not to hide items behind their boxsets.
		 * @param {number} minWidth Optional. Filter by the minimum width of the item.
		 * @param {number} minHeight Optional. Filter by the minimum height of the item.
		 * @param {number} maxWidth Optional. Filter by the maximum width of the item.
		 * @param {number} maxHeight Optional. Filter by the maximum height of the item.
		 * @param {boolean} is3D Optional filter by items that are 3D, or not.
		 * @param {Array<SeriesStatus>} seriesStatus Optional filter by Series Status. Allows multiple, comma delimeted.
		 * @param {string} nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
		 * @param {string} nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
		 * @param {string} nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
		 * @param {Array<string>} studioIds Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimeted.
		 * @param {Array<string>} genreIds Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimeted.
		 * @param {boolean} enableTotalRecordCount Optional. Enable the total record count.
		 * @param {boolean} enableImages Optional, include image information in output.
		 * @return {BaseItemDtoQueryResult} Success
		 */
		GetItemsByUserId(userId: string, maxOfficialRating: string | null | undefined, hasThemeSong: boolean | null | undefined, hasThemeVideo: boolean | null | undefined, hasSubtitles: boolean | null | undefined, hasSpecialFeature: boolean | null | undefined, hasTrailer: boolean | null | undefined, adjacentTo: string | null | undefined, parentIndexNumber: number | null | undefined, hasParentalRating: boolean | null | undefined, isHd: boolean | null | undefined, is4K: boolean | null | undefined, locationTypes: Array<LocationType> | null | undefined, excludeLocationTypes: Array<LocationType> | null | undefined, isMissing: boolean | null | undefined, isUnaired: boolean | null | undefined, minCommunityRating: number | null | undefined, minCriticRating: number | null | undefined, minPremiereDate: Date | null | undefined, minDateLastSaved: Date | null | undefined, minDateLastSavedForUser: Date | null | undefined, maxPremiereDate: Date | null | undefined, hasOverview: boolean | null | undefined, hasImdbId: boolean | null | undefined, hasTmdbId: boolean | null | undefined, hasTvdbId: boolean | null | undefined, excludeItemIds: Array<string> | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, recursive: boolean | null | undefined, searchTerm: string | null | undefined, sortOrder: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, filters: Array<ItemFilter> | null | undefined, isFavorite: boolean | null | undefined, mediaTypes: Array<string> | null | undefined, imageTypes: Array<ImageType> | null | undefined, sortBy: string | null | undefined, isPlayed: boolean | null | undefined, genres: Array<string> | null | undefined, officialRatings: Array<string> | null | undefined, tags: Array<string> | null | undefined, years: Array<number> | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, person: string | null | undefined, personIds: Array<string> | null | undefined, personTypes: Array<string> | null | undefined, studios: Array<string> | null | undefined, artists: Array<string> | null | undefined, excludeArtistIds: Array<string> | null | undefined, artistIds: Array<string> | null | undefined, albumArtistIds: Array<string> | null | undefined, contributingArtistIds: Array<string> | null | undefined, albums: Array<string> | null | undefined, albumIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, videoTypes: Array<VideoType> | null | undefined, minOfficialRating: string | null | undefined, isLocked: boolean | null | undefined, isPlaceHolder: boolean | null | undefined, hasOfficialRating: boolean | null | undefined, collapseBoxSetItems: boolean | null | undefined, minWidth: number | null | undefined, minHeight: number | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, is3D: boolean | null | undefined, seriesStatus: Array<SeriesStatus> | null | undefined, nameStartsWithOrGreater: string | null | undefined, nameStartsWith: string | null | undefined, nameLessThan: string | null | undefined, studioIds: Array<string> | null | undefined, genreIds: Array<string> | null | undefined, enableTotalRecordCount: boolean | null | undefined, enableImages: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items&maxOfficialRating=' + (maxOfficialRating == null ? '' : encodeURIComponent(maxOfficialRating)) + '&hasThemeSong=' + hasThemeSong + '&hasThemeVideo=' + hasThemeVideo + '&hasSubtitles=' + hasSubtitles + '&hasSpecialFeature=' + hasSpecialFeature + '&hasTrailer=' + hasTrailer + '&adjacentTo=' + (adjacentTo == null ? '' : encodeURIComponent(adjacentTo)) + '&parentIndexNumber=' + parentIndexNumber + '&hasParentalRating=' + hasParentalRating + '&isHd=' + isHd + '&is4K=' + is4K + '&' + locationTypes?.map(z => `locationTypes=${z}`).join('&') + '&' + excludeLocationTypes?.map(z => `excludeLocationTypes=${z}`).join('&') + '&isMissing=' + isMissing + '&isUnaired=' + isUnaired + '&minCommunityRating=' + minCommunityRating + '&minCriticRating=' + minCriticRating + '&minPremiereDate=' + minPremiereDate?.toISOString() + '&minDateLastSaved=' + minDateLastSaved?.toISOString() + '&minDateLastSavedForUser=' + minDateLastSavedForUser?.toISOString() + '&maxPremiereDate=' + maxPremiereDate?.toISOString() + '&hasOverview=' + hasOverview + '&hasImdbId=' + hasImdbId + '&hasTmdbId=' + hasTmdbId + '&hasTvdbId=' + hasTvdbId + '&' + excludeItemIds?.map(z => `excludeItemIds=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex + '&limit=' + limit + '&recursive=' + recursive + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + filters?.map(z => `filters=${z}`).join('&') + '&isFavorite=' + isFavorite + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&' + imageTypes?.map(z => `imageTypes=${z}`).join('&') + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&isPlayed=' + isPlayed + '&' + genres?.map(z => `genres=${encodeURIComponent(z)}`).join('&') + '&' + officialRatings?.map(z => `officialRatings=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&' + years?.map(z => `years=${z}`).join('&') + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&person=' + (person == null ? '' : encodeURIComponent(person)) + '&' + personIds?.map(z => `personIds=${encodeURIComponent(z)}`).join('&') + '&' + personTypes?.map(z => `personTypes=${encodeURIComponent(z)}`).join('&') + '&' + studios?.map(z => `studios=${encodeURIComponent(z)}`).join('&') + '&' + artists?.map(z => `artists=${encodeURIComponent(z)}`).join('&') + '&' + excludeArtistIds?.map(z => `excludeArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + artistIds?.map(z => `artistIds=${encodeURIComponent(z)}`).join('&') + '&' + albumArtistIds?.map(z => `albumArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + contributingArtistIds?.map(z => `contributingArtistIds=${encodeURIComponent(z)}`).join('&') + '&' + albums?.map(z => `albums=${encodeURIComponent(z)}`).join('&') + '&' + albumIds?.map(z => `albumIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + videoTypes?.map(z => `videoTypes=${z}`).join('&') + '&minOfficialRating=' + (minOfficialRating == null ? '' : encodeURIComponent(minOfficialRating)) + '&isLocked=' + isLocked + '&isPlaceHolder=' + isPlaceHolder + '&hasOfficialRating=' + hasOfficialRating + '&collapseBoxSetItems=' + collapseBoxSetItems + '&minWidth=' + minWidth + '&minHeight=' + minHeight + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&is3D=' + is3D + '&' + seriesStatus?.map(z => `seriesStatus=${z}`).join('&') + '&nameStartsWithOrGreater=' + (nameStartsWithOrGreater == null ? '' : encodeURIComponent(nameStartsWithOrGreater)) + '&nameStartsWith=' + (nameStartsWith == null ? '' : encodeURIComponent(nameStartsWith)) + '&nameLessThan=' + (nameLessThan == null ? '' : encodeURIComponent(nameLessThan)) + '&' + studioIds?.map(z => `studioIds=${encodeURIComponent(z)}`).join('&') + '&' + genreIds?.map(z => `genreIds=${encodeURIComponent(z)}`).join('&') + '&enableTotalRecordCount=' + enableTotalRecordCount + '&enableImages=' + enableImages, {});
		}

		/**
		 * Gets latest media.
		 * Get Users/{userId}/Items/Latest
		 * @param {string} userId User id.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {boolean} isPlayed Filter by items that are played, or not.
		 * @param {boolean} enableImages Optional. include image information in output.
		 * @param {number} imageTypeLimit Optional. the max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {boolean} enableUserData Optional. include user data.
		 * @param {number} limit Return item limit.
		 * @param {boolean} groupItems Whether or not to group items into a parent container.
		 * @return {Array<BaseItemDto>} Latest media returned.
		 */
		GetLatestMedia(userId: string, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, includeItemTypes: Array<string> | null | undefined, isPlayed: boolean | null | undefined, enableImages: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, enableUserData: boolean | null | undefined, limit: number | null | undefined, groupItems: boolean | null | undefined): Observable<Array<BaseItemDto>> {
			return this.http.get<Array<BaseItemDto>>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/Latest&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&isPlayed=' + isPlayed + '&enableImages=' + enableImages + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&enableUserData=' + enableUserData + '&limit=' + limit + '&groupItems=' + groupItems, {});
		}

		/**
		 * Gets items based on a query.
		 * Get Users/{userId}/Items/Resume
		 * @param {string} userId The user id.
		 * @param {number} startIndex The start index.
		 * @param {number} limit The item limit.
		 * @param {string} searchTerm The search term.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
		 * @param {Array<string>} mediaTypes Optional. Filter by MediaType. Allows multiple, comma delimited.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.
		 * @param {boolean} enableTotalRecordCount Optional. Enable the total record count.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @return {BaseItemDtoQueryResult} Items returned.
		 */
		GetResumeItems(userId: string, startIndex: number | null | undefined, limit: number | null | undefined, searchTerm: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, mediaTypes: Array<string> | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, enableTotalRecordCount: boolean | null | undefined, enableImages: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/Resume&startIndex=' + startIndex + '&limit=' + limit + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&enableTotalRecordCount=' + enableTotalRecordCount + '&enableImages=' + enableImages, {});
		}

		/**
		 * Gets the root folder from a user's library.
		 * Get Users/{userId}/Items/Root
		 * @param {string} userId User id.
		 * @return {BaseItemDto} Root folder returned.
		 */
		GetRootFolder(userId: string): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/Root', {});
		}

		/**
		 * Gets an item from a user's library.
		 * Get Users/{userId}/Items/{itemId}
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {BaseItemDto} Item returned.
		 */
		GetItem(userId: string, itemId: string): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/' + (itemId == null ? '' : encodeURIComponent(itemId)), {});
		}

		/**
		 * Gets intros to play before the main media item plays.
		 * Get Users/{userId}/Items/{itemId}/Intros
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {BaseItemDtoQueryResult} Intros returned.
		 */
		GetIntros(userId: string, itemId: string): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Intros', {});
		}

		/**
		 * Gets local trailers for an item.
		 * Get Users/{userId}/Items/{itemId}/LocalTrailers
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {Array<BaseItemDto>} An Microsoft.AspNetCore.Mvc.OkResult containing the item's local trailers.
		 */
		GetLocalTrailers(userId: string, itemId: string): Observable<Array<BaseItemDto>> {
			return this.http.get<Array<BaseItemDto>>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/LocalTrailers', {});
		}

		/**
		 * Deletes a user's saved personal rating for an item.
		 * Delete Users/{userId}/Items/{itemId}/Rating
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {UserItemDataDto} Personal rating removed.
		 */
		DeleteUserItemRating(userId: string, itemId: string): Observable<UserItemDataDto> {
			return this.http.delete<UserItemDataDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Rating', {});
		}

		/**
		 * Updates a user's rating for an item.
		 * Post Users/{userId}/Items/{itemId}/Rating
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @param {boolean} likes Whether this M:Jellyfin.Api.Controllers.UserLibraryController.UpdateUserItemRating(System.Guid,System.Guid,System.Nullable{System.Boolean}) is likes.
		 * @return {UserItemDataDto} Item rating updated.
		 */
		UpdateUserItemRating(userId: string, itemId: string, likes: boolean | null | undefined): Observable<UserItemDataDto> {
			return this.http.post<UserItemDataDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Rating&likes=' + likes, null, {});
		}

		/**
		 * Gets special features for an item.
		 * Get Users/{userId}/Items/{itemId}/SpecialFeatures
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {Array<BaseItemDto>} Special features returned.
		 */
		GetSpecialFeatures(userId: string, itemId: string): Observable<Array<BaseItemDto>> {
			return this.http.get<Array<BaseItemDto>>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/SpecialFeatures', {});
		}

		/**
		 * Updates a user's password.
		 * Post Users/{userId}/Password
		 * @param {string} userId The user id.
		 * @param {UpdateUserPassword} requestBody The M:Jellyfin.Api.Controllers.UserController.UpdateUserPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserPassword) request.
		 * @return {void} 
		 */
		UpdateUserPassword(userId: string, requestBody: UpdateUserPassword): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks an item as unplayed for user.
		 * Delete Users/{userId}/PlayedItems/{itemId}
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @return {UserItemDataDto} Item marked as unplayed.
		 */
		MarkUnplayedItem(userId: string, itemId: string): Observable<UserItemDataDto> {
			return this.http.delete<UserItemDataDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/PlayedItems/' + (itemId == null ? '' : encodeURIComponent(itemId)), {});
		}

		/**
		 * Marks an item as played for user.
		 * Post Users/{userId}/PlayedItems/{itemId}
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @param {Date} datePlayed Optional. The date the item was played.
		 * @return {UserItemDataDto} Item marked as played.
		 */
		MarkPlayedItem(userId: string, itemId: string, datePlayed: Date | null | undefined): Observable<UserItemDataDto> {
			return this.http.post<UserItemDataDto>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/PlayedItems/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '&datePlayed=' + datePlayed?.toISOString(), null, {});
		}

		/**
		 * Reports that a user has stopped playing an item.
		 * Delete Users/{userId}/PlayingItems/{itemId}
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @param {string} mediaSourceId The id of the MediaSource.
		 * @param {string} nextMediaType The next media type that will play.
		 * @param {number} positionTicks Optional. The position, in ticks, where playback stopped. 1 tick = 10000 ms.
		 * @param {string} liveStreamId The live stream id.
		 * @param {string} playSessionId The play session id.
		 * @return {void} 
		 */
		OnPlaybackStopped(userId: string, itemId: string, mediaSourceId: string | null | undefined, nextMediaType: string | null | undefined, positionTicks: number | null | undefined, liveStreamId: string | null | undefined, playSessionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/PlayingItems/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&nextMediaType=' + (nextMediaType == null ? '' : encodeURIComponent(nextMediaType)) + '&positionTicks=' + positionTicks + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports that a user has begun playing an item.
		 * Post Users/{userId}/PlayingItems/{itemId}
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @param {string} mediaSourceId The id of the MediaSource.
		 * @param {number} audioStreamIndex The audio stream index.
		 * @param {number} subtitleStreamIndex The subtitle stream index.
		 * @param {PlayerStateInfoPlayMethod} playMethod The play method.
		 * @param {string} liveStreamId The live stream id.
		 * @param {string} playSessionId The play session id.
		 * @param {boolean} canSeek Indicates if the client can seek.
		 * @return {void} 
		 */
		OnPlaybackStart(userId: string, itemId: string, mediaSourceId: string | null | undefined, audioStreamIndex: number | null | undefined, subtitleStreamIndex: number | null | undefined, playMethod: PlayerStateInfoPlayMethod | null | undefined, liveStreamId: string | null | undefined, playSessionId: string | null | undefined, canSeek: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/PlayingItems/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&audioStreamIndex=' + audioStreamIndex + '&subtitleStreamIndex=' + subtitleStreamIndex + '&playMethod=' + playMethod + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&canSeek=' + canSeek, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports a user's playback progress.
		 * Post Users/{userId}/PlayingItems/{itemId}/Progress
		 * @param {string} userId User id.
		 * @param {string} itemId Item id.
		 * @param {string} mediaSourceId The id of the MediaSource.
		 * @param {number} positionTicks Optional. The current position, in ticks. 1 tick = 10000 ms.
		 * @param {number} audioStreamIndex The audio stream index.
		 * @param {number} subtitleStreamIndex The subtitle stream index.
		 * @param {number} volumeLevel Scale of 0-100.
		 * @param {PlayerStateInfoPlayMethod} playMethod The play method.
		 * @param {string} liveStreamId The live stream id.
		 * @param {string} playSessionId The play session id.
		 * @param {PlayerStateInfoRepeatMode} repeatMode The repeat mode.
		 * @param {boolean} isPaused Indicates if the player is paused.
		 * @param {boolean} isMuted Indicates if the player is muted.
		 * @return {void} 
		 */
		OnPlaybackProgress(userId: string, itemId: string, mediaSourceId: string | null | undefined, positionTicks: number | null | undefined, audioStreamIndex: number | null | undefined, subtitleStreamIndex: number | null | undefined, volumeLevel: number | null | undefined, playMethod: PlayerStateInfoPlayMethod | null | undefined, liveStreamId: string | null | undefined, playSessionId: string | null | undefined, repeatMode: PlayerStateInfoRepeatMode | null | undefined, isPaused: boolean | null | undefined, isMuted: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/PlayingItems/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Progress&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&positionTicks=' + positionTicks + '&audioStreamIndex=' + audioStreamIndex + '&subtitleStreamIndex=' + subtitleStreamIndex + '&volumeLevel=' + volumeLevel + '&playMethod=' + playMethod + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&repeatMode=' + repeatMode + '&isPaused=' + isPaused + '&isMuted=' + isMuted, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a user policy.
		 * Post Users/{userId}/Policy
		 * @param {string} userId The user id.
		 * @param {UserPolicy} requestBody The new user policy.
		 * @return {void} 
		 */
		UpdateUserPolicy(userId: string, requestBody: UserPolicy): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets suggestions.
		 * Get Users/{userId}/Suggestions
		 * @param {string} userId The user id.
		 * @param {Array<string>} mediaType The media types.
		 * @param {Array<string>} type The type.
		 * @param {number} startIndex Optional. The start index.
		 * @param {number} limit Optional. The limit.
		 * @param {boolean} enableTotalRecordCount Whether to enable the total record count.
		 * @return {BaseItemDtoQueryResult} Suggestions returned.
		 */
		GetSuggestions(userId: string, mediaType: Array<string> | null | undefined, type: Array<string> | null | undefined, startIndex: number | null | undefined, limit: number | null | undefined, enableTotalRecordCount: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Suggestions&' + mediaType?.map(z => `mediaType=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex + '&limit=' + limit + '&enableTotalRecordCount=' + enableTotalRecordCount, {});
		}

		/**
		 * Get user views.
		 * Get Users/{userId}/Views
		 * @param {string} userId User id.
		 * @param {boolean} includeExternalContent Whether or not to include external views such as channels or live tv.
		 * @param {Array<string>} presetViews Preset views.
		 * @param {boolean} includeHidden Whether or not to include hidden content.
		 * @return {BaseItemDtoQueryResult} User views returned.
		 */
		GetUserViews(userId: string, includeExternalContent: boolean | null | undefined, presetViews: Array<string> | null | undefined, includeHidden: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/Views&includeExternalContent=' + includeExternalContent + '&' + presetViews?.map(z => `presetViews=${encodeURIComponent(z)}`).join('&') + '&includeHidden=' + includeHidden, {});
		}

		/**
		 * Stops an active encoding.
		 * Delete Videos/ActiveEncodings
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} playSessionId The play session id.
		 * @return {void} 
		 */
		StopEncodingProcess(deviceId: string | null | undefined, playSessionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Videos/ActiveEncodings?deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Merges videos into a single record.
		 * Post Videos/MergeVersions
		 * @param {Array<string>} ids Item id list. This allows multiple, comma delimited.
		 * @return {void} 
		 */
		MergeVersions(ids: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Videos/MergeVersions?' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets additional parts for a video.
		 * Get Videos/{itemId}/AdditionalParts
		 * @param {string} itemId The item id.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @return {BaseItemDtoQueryResult} Additional parts returned.
		 */
		GetAdditionalPart(itemId: string, userId: string | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/AdditionalParts&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Removes alternate video sources.
		 * Delete Videos/{itemId}/AlternateSources
		 * @param {string} itemId The item id.
		 * @return {void} 
		 */
		DeleteAlternateSources(itemId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/AlternateSources', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an external subtitle file.
		 * Post Videos/{itemId}/Subtitles
		 * @param {string} itemId The item the subtitle belongs to.
		 * @param {UploadSubtitleDto} requestBody The request body.
		 * @return {void} 
		 */
		UploadSubtitle(itemId: string, requestBody: UploadSubtitleDto): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Subtitles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an external subtitle file.
		 * Delete Videos/{itemId}/Subtitles/{index}
		 * @param {string} itemId The item id.
		 * @param {number} index The index of the subtitle file.
		 * @return {void} 
		 */
		DeleteSubtitle(itemId: string, index: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/Subtitles/' + index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a hls video playlist.
		 * Get Videos/{itemId}/hls/{playlistId}/stream.m3u8
		 * @param {string} itemId The video id.
		 * @param {string} playlistId The playlist id.
		 * @return {void} Hls video playlist returned.
		 */
		GetHlsPlaylistLegacy(itemId: string, playlistId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/hls/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/stream.m3u8', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a hls video segment.
		 * Get Videos/{itemId}/hls/{playlistId}/{segmentId}.{segmentContainer}
		 * @param {string} itemId The item id.
		 * @param {string} playlistId The playlist id.
		 * @param {string} segmentId The segment id.
		 * @param {string} segmentContainer The segment container.
		 * @return {void} Hls video segment returned.
		 */
		GetHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/hls/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/' + (segmentId == null ? '' : encodeURIComponent(segmentId)) + '.' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a video stream using HTTP live streaming.
		 * Get Videos/{itemId}/hls1/{playlistId}/{segmentId}.{container}
		 * @param {string} itemId The item id.
		 * @param {string} playlistId The playlist id.
		 * @param {number} segmentId The segment id.
		 * @param {string} container The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment lenght.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Video stream returned.
		 */
		GetHlsVideoSegment(itemId: string, playlistId: string, segmentId: number, container: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/hls1/' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '/' + segmentId + '.' + (container == null ? '' : encodeURIComponent(container)) + '&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a hls live stream.
		 * Get Videos/{itemId}/live.m3u8
		 * @param {string} itemId The item id.
		 * @param {string} container The audio container.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment lenght.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @param {number} maxWidth Optional. The max width.
		 * @param {number} maxHeight Optional. The max height.
		 * @param {boolean} enableSubtitlesInManifest Optional. Whether to enable subtitles in the manifest.
		 * @return {void} Hls live stream retrieved.
		 */
		GetLiveHlsStream(itemId: string, container: string | null | undefined, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined, maxWidth: number | null | undefined, maxHeight: number | null | undefined, enableSubtitlesInManifest: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/live.m3u8&container=' + (container == null ? '' : encodeURIComponent(container)) + '&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions + '&maxWidth=' + maxWidth + '&maxHeight=' + maxHeight + '&enableSubtitlesInManifest=' + enableSubtitlesInManifest, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a video stream using HTTP live streaming.
		 * Get Videos/{itemId}/main.m3u8
		 * @param {string} itemId The item id.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment length.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Video stream returned.
		 */
		GetVariantHlsVideoPlaylist(itemId: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/main.m3u8&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a video hls playlist stream.
		 * Get Videos/{itemId}/master.m3u8
		 * @param {string} itemId The item id.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment length.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @param {boolean} enableAdaptiveBitrateStreaming Enable adaptive bitrate streaming.
		 * @return {void} Video stream returned.
		 */
		GetMasterHlsVideoPlaylist(itemId: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined, enableAdaptiveBitrateStreaming: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/master.m3u8&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions + '&enableAdaptiveBitrateStreaming=' + enableAdaptiveBitrateStreaming, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a video stream.
		 * Get Videos/{itemId}/stream
		 * @param {string} itemId The item id.
		 * @param {string} container The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment length.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamorphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Video stream returned.
		 */
		GetVideoStream(itemId: string, container: string | null | undefined, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/stream&container=' + (container == null ? '' : encodeURIComponent(container)) + '&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets subtitles in a specified format.
		 * Get Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/Stream.{format}
		 * @param {string} itemId The item id.
		 * @param {string} mediaSourceId The media source id.
		 * @param {number} index The subtitle stream index.
		 * @param {string} format The format of the returned subtitle.
		 * @param {number} endPositionTicks Optional. The end position of the subtitle in ticks.
		 * @param {boolean} copyTimestamps Optional. Whether to copy the timestamps.
		 * @param {boolean} addVttTimeMap Optional. Whether to add a VTT time map.
		 * @param {number} startPositionTicks Optional. The start position of the subtitle in ticks.
		 * @return {void} File returned.
		 */
		GetSubtitle(itemId: string, mediaSourceId: string, index: number, format: string, endPositionTicks: number | null | undefined, copyTimestamps: boolean | null | undefined, addVttTimeMap: boolean | null | undefined, startPositionTicks: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '/Subtitles/' + index + '/Stream.' + (format == null ? '' : encodeURIComponent(format)) + '&endPositionTicks=' + endPositionTicks + '&copyTimestamps=' + copyTimestamps + '&addVttTimeMap=' + addVttTimeMap + '&startPositionTicks=' + startPositionTicks, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an HLS subtitle playlist.
		 * Get Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/subtitles.m3u8
		 * @param {string} itemId The item id.
		 * @param {number} index The subtitle stream index.
		 * @param {string} mediaSourceId The media source id.
		 * @param {number} segmentLength The subtitle segment length.
		 * @return {void} Subtitle playlist retrieved.
		 */
		GetSubtitlePlaylist(itemId: string, index: number, mediaSourceId: string, segmentLength: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '/Subtitles/' + index + '/subtitles.m3u8&segmentLength=' + segmentLength, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets subtitles in a specified format.
		 * Get Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/{startPositionTicks}/Stream.{format}
		 * @param {string} itemId The item id.
		 * @param {string} mediaSourceId The media source id.
		 * @param {number} index The subtitle stream index.
		 * @param {number} startPositionTicks Optional. The start position of the subtitle in ticks.
		 * @param {string} format The format of the returned subtitle.
		 * @param {number} endPositionTicks Optional. The end position of the subtitle in ticks.
		 * @param {boolean} copyTimestamps Optional. Whether to copy the timestamps.
		 * @param {boolean} addVttTimeMap Optional. Whether to add a VTT time map.
		 * @return {void} File returned.
		 */
		GetSubtitleWithTicks(itemId: string, mediaSourceId: string, index: number, startPositionTicks: number, format: string, endPositionTicks: number | null | undefined, copyTimestamps: boolean | null | undefined, addVttTimeMap: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '/Subtitles/' + index + '/' + startPositionTicks + '/Stream.' + (format == null ? '' : encodeURIComponent(format)) + '&endPositionTicks=' + endPositionTicks + '&copyTimestamps=' + copyTimestamps + '&addVttTimeMap=' + addVttTimeMap, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a video stream.
		 * Get Videos/{itemId}/{stream}.{container}
		 * @param {string} itemId The item id.
		 * @param {string} container The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
		 * @param {boolean} _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
		 * @param {string} _params The streaming parameters.
		 * @param {string} tag The tag.
		 * @param {string} deviceProfileId Optional. The dlna device profile id to utilize.
		 * @param {string} playSessionId The play session id.
		 * @param {string} segmentContainer The segment container.
		 * @param {number} segmentLength The segment lenght.
		 * @param {number} minSegments The minimum number of segments.
		 * @param {string} mediaSourceId The media version id, if playing an alternate version.
		 * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
		 * @param {string} audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
		 * @param {boolean} enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
		 * @param {boolean} allowVideoStreamCopy Whether or not to allow copying of the video stream url.
		 * @param {boolean} allowAudioStreamCopy Whether or not to allow copying of the audio stream url.
		 * @param {boolean} breakOnNonKeyFrames Optional. Whether to break on non key frames.
		 * @param {number} audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100.
		 * @param {number} maxAudioBitDepth Optional. The maximum audio bit depth.
		 * @param {number} audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
		 * @param {number} audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2.
		 * @param {number} maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
		 * @param {string} profile Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
		 * @param {string} level Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
		 * @param {number} framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {number} maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
		 * @param {boolean} copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
		 * @param {number} startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
		 * @param {number} width Optional. The fixed horizontal resolution of the encoded video.
		 * @param {number} height Optional. The fixed vertical resolution of the encoded video.
		 * @param {number} videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
		 * @param {number} subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
		 * @param {MediaStreamDeliveryMethod} subtitleMethod Optional. Specify the subtitle delivery method.
		 * @param {number} maxRefFrames Optional.
		 * @param {number} maxVideoBitDepth Optional. The maximum video bit depth.
		 * @param {boolean} requireAvc Optional. Whether to require avc.
		 * @param {boolean} deInterlace Optional. Whether to deinterlace the video.
		 * @param {boolean} requireNonAnamorphic Optional. Whether to require a non anamporphic stream.
		 * @param {number} transcodingMaxAudioChannels Optional. The maximum number of audio channels to transcode.
		 * @param {number} cpuCoreLimit Optional. The limit of how many cpu cores to use.
		 * @param {string} liveStreamId The live stream id.
		 * @param {boolean} enableMpegtsM2TsMode Optional. Whether to enable the MpegtsM2Ts mode.
		 * @param {string} videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
		 * @param {string} subtitleCodec Optional. Specify a subtitle codec to encode to.
		 * @param {string} transcodeReasons Optional. The transcoding reason.
		 * @param {number} audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
		 * @param {number} videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
		 * @param {TranscodingProfileContext} context Optional. The MediaBrowser.Model.Dlna.EncodingContext.
		 * @param {{[id: string]: string }} streamOptions Optional. The streaming options.
		 * @return {void} Video stream returned.
		 */
		GetVideoStreamByContainer(itemId: string, container: string, _static: boolean | null | undefined, _params: string | null | undefined, tag: string | null | undefined, deviceProfileId: string | null | undefined, playSessionId: string | null | undefined, segmentContainer: string | null | undefined, segmentLength: number | null | undefined, minSegments: number | null | undefined, mediaSourceId: string | null | undefined, deviceId: string | null | undefined, audioCodec: string | null | undefined, enableAutoStreamCopy: boolean | null | undefined, allowVideoStreamCopy: boolean | null | undefined, allowAudioStreamCopy: boolean | null | undefined, breakOnNonKeyFrames: boolean | null | undefined, audioSampleRate: number | null | undefined, maxAudioBitDepth: number | null | undefined, audioBitRate: number | null | undefined, audioChannels: number | null | undefined, maxAudioChannels: number | null | undefined, profile: string | null | undefined, level: string | null | undefined, framerate: number | null | undefined, maxFramerate: number | null | undefined, copyTimestamps: boolean | null | undefined, startTimeTicks: number | null | undefined, width: number | null | undefined, height: number | null | undefined, videoBitRate: number | null | undefined, subtitleStreamIndex: number | null | undefined, subtitleMethod: MediaStreamDeliveryMethod | null | undefined, maxRefFrames: number | null | undefined, maxVideoBitDepth: number | null | undefined, requireAvc: boolean | null | undefined, deInterlace: boolean | null | undefined, requireNonAnamorphic: boolean | null | undefined, transcodingMaxAudioChannels: number | null | undefined, cpuCoreLimit: number | null | undefined, liveStreamId: string | null | undefined, enableMpegtsM2TsMode: boolean | null | undefined, videoCodec: string | null | undefined, subtitleCodec: string | null | undefined, transcodeReasons: string | null | undefined, audioStreamIndex: number | null | undefined, videoStreamIndex: number | null | undefined, context: TranscodingProfileContext | null | undefined, streamOptions: {[id: string]: string } | null | undefined, stream: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/' + (stream == null ? '' : encodeURIComponent(stream)) + '.' + (container == null ? '' : encodeURIComponent(container)) + '&_static=' + _static + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&deviceProfileId=' + (deviceProfileId == null ? '' : encodeURIComponent(deviceProfileId)) + '&playSessionId=' + (playSessionId == null ? '' : encodeURIComponent(playSessionId)) + '&segmentContainer=' + (segmentContainer == null ? '' : encodeURIComponent(segmentContainer)) + '&segmentLength=' + segmentLength + '&minSegments=' + minSegments + '&mediaSourceId=' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&audioCodec=' + (audioCodec == null ? '' : encodeURIComponent(audioCodec)) + '&enableAutoStreamCopy=' + enableAutoStreamCopy + '&allowVideoStreamCopy=' + allowVideoStreamCopy + '&allowAudioStreamCopy=' + allowAudioStreamCopy + '&breakOnNonKeyFrames=' + breakOnNonKeyFrames + '&audioSampleRate=' + audioSampleRate + '&maxAudioBitDepth=' + maxAudioBitDepth + '&audioBitRate=' + audioBitRate + '&audioChannels=' + audioChannels + '&maxAudioChannels=' + maxAudioChannels + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&framerate=' + framerate + '&maxFramerate=' + maxFramerate + '&copyTimestamps=' + copyTimestamps + '&startTimeTicks=' + startTimeTicks + '&width=' + width + '&height=' + height + '&videoBitRate=' + videoBitRate + '&subtitleStreamIndex=' + subtitleStreamIndex + '&subtitleMethod=' + subtitleMethod + '&maxRefFrames=' + maxRefFrames + '&maxVideoBitDepth=' + maxVideoBitDepth + '&requireAvc=' + requireAvc + '&deInterlace=' + deInterlace + '&requireNonAnamorphic=' + requireNonAnamorphic + '&transcodingMaxAudioChannels=' + transcodingMaxAudioChannels + '&cpuCoreLimit=' + cpuCoreLimit + '&liveStreamId=' + (liveStreamId == null ? '' : encodeURIComponent(liveStreamId)) + '&enableMpegtsM2TsMode=' + enableMpegtsM2TsMode + '&videoCodec=' + (videoCodec == null ? '' : encodeURIComponent(videoCodec)) + '&subtitleCodec=' + (subtitleCodec == null ? '' : encodeURIComponent(subtitleCodec)) + '&transcodeReasons=' + (transcodeReasons == null ? '' : encodeURIComponent(transcodeReasons)) + '&audioStreamIndex=' + audioStreamIndex + '&videoStreamIndex=' + videoStreamIndex + '&context=' + context + '&streamOptions=' + streamOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get video attachment.
		 * Get Videos/{videoId}/{mediaSourceId}/Attachments/{index}
		 * @param {string} videoId Video ID.
		 * @param {string} mediaSourceId Media Source ID.
		 * @param {number} index Attachment Index.
		 * @return {void} Attachment retrieved.
		 */
		GetAttachment(videoId: string, mediaSourceId: string, index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Videos/' + (videoId == null ? '' : encodeURIComponent(videoId)) + '/' + (mediaSourceId == null ? '' : encodeURIComponent(mediaSourceId)) + '/Attachments/' + index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get years.
		 * Get Years
		 * @param {number} startIndex Skips over a given number of items within the results. Use for paging.
		 * @param {number} limit Optional. The maximum number of records to return.
		 * @param {string} sortOrder Sort Order - Ascending,Descending.
		 * @param {string} parentId Specify this to localize the search to a specific item or folder. Omit to use the root.
		 * @param {Array<ItemFields>} fields Optional. Specify additional fields of information to return in the output.
		 * @param {Array<string>} excludeItemTypes Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} includeItemTypes Optional. If specified, results will be included based on item type. This allows multiple, comma delimited.
		 * @param {Array<string>} mediaTypes Optional. Filter by MediaType. Allows multiple, comma delimited.
		 * @param {string} sortBy Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
		 * @param {boolean} enableUserData Optional. Include user data.
		 * @param {number} imageTypeLimit Optional. The max number of images to return, per image type.
		 * @param {Array<ImageType>} enableImageTypes Optional. The image types to include in the output.
		 * @param {string} userId User Id.
		 * @param {boolean} recursive Search recursively.
		 * @param {boolean} enableImages Optional. Include image information in output.
		 * @return {BaseItemDtoQueryResult} Year query returned.
		 */
		GetYears(startIndex: number | null | undefined, limit: number | null | undefined, sortOrder: string | null | undefined, parentId: string | null | undefined, fields: Array<ItemFields> | null | undefined, excludeItemTypes: Array<string> | null | undefined, includeItemTypes: Array<string> | null | undefined, mediaTypes: Array<string> | null | undefined, sortBy: string | null | undefined, enableUserData: boolean | null | undefined, imageTypeLimit: number | null | undefined, enableImageTypes: Array<ImageType> | null | undefined, userId: string | null | undefined, recursive: boolean | null | undefined, enableImages: boolean | null | undefined): Observable<BaseItemDtoQueryResult> {
			return this.http.get<BaseItemDtoQueryResult>(this.baseUri + 'Years?startIndex=' + startIndex + '&limit=' + limit + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + excludeItemTypes?.map(z => `excludeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + includeItemTypes?.map(z => `includeItemTypes=${encodeURIComponent(z)}`).join('&') + '&' + mediaTypes?.map(z => `mediaTypes=${encodeURIComponent(z)}`).join('&') + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&enableUserData=' + enableUserData + '&imageTypeLimit=' + imageTypeLimit + '&' + enableImageTypes?.map(z => `enableImageTypes=${z}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&recursive=' + recursive + '&enableImages=' + enableImages, {});
		}

		/**
		 * Gets a year.
		 * Get Years/{year}
		 * @param {number} year The year.
		 * @param {string} userId Optional. Filter by user id, and attach user data.
		 * @return {BaseItemDto} Year returned.
		 */
		GetYear(year: number, userId: string | null | undefined): Observable<BaseItemDto> {
			return this.http.get<BaseItemDto>(this.baseUri + 'Years/' + year + '?userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Gets a dashboard configuration page.
		 * Get web/ConfigurationPage
		 * @param {string} name The name of the page.
		 * @return {void} ConfigurationPage returned.
		 */
		GetDashboardConfigurationPage(name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'web/ConfigurationPage?name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the configuration pages.
		 * Get web/ConfigurationPages
		 * @param {boolean} enableInMainMenu Whether to enable in the main menu.
		 * @param {ConfigurationPageInfoConfigurationPageType} pageType The Jellyfin.Api.Models.ConfigurationPageInfo.
		 * @return {Array<ConfigurationPageInfo>} ConfigurationPages returned.
		 */
		GetConfigurationPages(enableInMainMenu: boolean | null | undefined, pageType: ConfigurationPageInfoConfigurationPageType | null | undefined): Observable<Array<ConfigurationPageInfo>> {
			return this.http.get<Array<ConfigurationPageInfo>>(this.baseUri + 'web/ConfigurationPages?enableInMainMenu=' + enableInMainMenu + '&pageType=' + pageType, {});
		}
	}

}

