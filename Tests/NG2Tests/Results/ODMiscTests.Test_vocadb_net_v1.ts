import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivityEntryForApiContract {
		archivedVersion?: ArchivedObjectVersionForApiContract;
		author?: UserForApiContract;
		createDate?: Date | null;
		editEvent?: ActivityEntryForApiContractEditEvent | null;
		entry?: EntryForApiContract;
	}
	export interface ActivityEntryForApiContractFormProperties {
		createDate: FormControl<Date | null | undefined>,
		editEvent: FormControl<ActivityEntryForApiContractEditEvent | null | undefined>,
	}
	export function CreateActivityEntryForApiContractFormGroup() {
		return new FormGroup<ActivityEntryForApiContractFormProperties>({
			createDate: new FormControl<Date | null | undefined>(undefined),
			editEvent: new FormControl<ActivityEntryForApiContractEditEvent | null | undefined>(undefined),
		});

	}

	export interface ArchivedObjectVersionForApiContract {
		changedFields?: Array<string>;
		id?: number | null;
		notes?: string | null;
		version?: number | null;
	}
	export interface ArchivedObjectVersionForApiContractFormProperties {
		id: FormControl<number | null | undefined>,
		notes: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateArchivedObjectVersionForApiContractFormGroup() {
		return new FormGroup<ArchivedObjectVersionForApiContractFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserForApiContract {
		active?: boolean | null;
		groupId?: UserForApiContractGroupId | null;
		id?: number | null;
		knownLanguages?: Array<UserKnownLanguageContract>;
		mainPicture?: EntryThumbForApiContract;
		memberSince?: Date | null;
		name?: string | null;
		oldUsernames?: Array<OldUsernameContract>;
		verifiedArtist?: boolean | null;
	}
	export interface UserForApiContractFormProperties {
		active: FormControl<boolean | null | undefined>,
		groupId: FormControl<UserForApiContractGroupId | null | undefined>,
		id: FormControl<number | null | undefined>,
		memberSince: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		verifiedArtist: FormControl<boolean | null | undefined>,
	}
	export function CreateUserForApiContractFormGroup() {
		return new FormGroup<UserForApiContractFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			groupId: new FormControl<UserForApiContractGroupId | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			memberSince: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			verifiedArtist: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UserForApiContractGroupId { Nothing = 0, Limited = 1, Regular = 2, Trusted = 3, Moderator = 4, Admin = 5 }

	export interface UserKnownLanguageContract {
		cultureCode?: string | null;
		proficiency?: UserKnownLanguageContractProficiency | null;
	}
	export interface UserKnownLanguageContractFormProperties {
		cultureCode: FormControl<string | null | undefined>,
		proficiency: FormControl<UserKnownLanguageContractProficiency | null | undefined>,
	}
	export function CreateUserKnownLanguageContractFormGroup() {
		return new FormGroup<UserKnownLanguageContractFormProperties>({
			cultureCode: new FormControl<string | null | undefined>(undefined),
			proficiency: new FormControl<UserKnownLanguageContractProficiency | null | undefined>(undefined),
		});

	}

	export enum UserKnownLanguageContractProficiency { Nothing = 0, Basics = 1, Intermediate = 2, Advanced = 3, Native = 4 }

	export interface EntryThumbForApiContract {
		mime?: string | null;
		urlSmallThumb?: string | null;
		urlThumb?: string | null;
		urlTinyThumb?: string | null;
	}
	export interface EntryThumbForApiContractFormProperties {
		mime: FormControl<string | null | undefined>,
		urlSmallThumb: FormControl<string | null | undefined>,
		urlThumb: FormControl<string | null | undefined>,
		urlTinyThumb: FormControl<string | null | undefined>,
	}
	export function CreateEntryThumbForApiContractFormGroup() {
		return new FormGroup<EntryThumbForApiContractFormProperties>({
			mime: new FormControl<string | null | undefined>(undefined),
			urlSmallThumb: new FormControl<string | null | undefined>(undefined),
			urlThumb: new FormControl<string | null | undefined>(undefined),
			urlTinyThumb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OldUsernameContract {
		date?: Date | null;
		oldName?: string | null;
	}
	export interface OldUsernameContractFormProperties {
		date: FormControl<Date | null | undefined>,
		oldName: FormControl<string | null | undefined>,
	}
	export function CreateOldUsernameContractFormGroup() {
		return new FormGroup<OldUsernameContractFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			oldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityEntryForApiContractEditEvent { Created = 0, Updated = 1, Deleted = 2, Restored = 3 }

	export interface EntryForApiContract {
		activityDate?: Date | null;
		additionalNames?: string | null;
		artistString?: string | null;
		artistType?: EntryForApiContractArtistType | null;
		createDate?: Date | null;
		defaultName?: string | null;
		defaultNameLanguage?: EntryForApiContractDefaultNameLanguage | null;
		description?: string | null;
		discType?: EntryForApiContractDiscType | null;
		entryType?: EntryForApiContractEntryType | null;
		eventCategory?: EntryForApiContractEventCategory | null;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		pVs?: Array<PVContract>;
		releaseEventSeriesName?: string | null;
		songListFeaturedCategory?: EntryForApiContractSongListFeaturedCategory | null;
		songType?: EntryForApiContractSongType | null;
		status?: EntryForApiContractStatus | null;
		tagCategoryName?: string | null;
		tags?: Array<TagUsageForApiContract>;
		urlSlug?: string | null;
		version?: number | null;
		webLinks?: Array<ArchivedWebLinkContract>;
	}
	export interface EntryForApiContractFormProperties {
		activityDate: FormControl<Date | null | undefined>,
		additionalNames: FormControl<string | null | undefined>,
		artistString: FormControl<string | null | undefined>,
		artistType: FormControl<EntryForApiContractArtistType | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		defaultName: FormControl<string | null | undefined>,
		defaultNameLanguage: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		description: FormControl<string | null | undefined>,
		discType: FormControl<EntryForApiContractDiscType | null | undefined>,
		entryType: FormControl<EntryForApiContractEntryType | null | undefined>,
		eventCategory: FormControl<EntryForApiContractEventCategory | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		releaseEventSeriesName: FormControl<string | null | undefined>,
		songListFeaturedCategory: FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>,
		songType: FormControl<EntryForApiContractSongType | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		tagCategoryName: FormControl<string | null | undefined>,
		urlSlug: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateEntryForApiContractFormGroup() {
		return new FormGroup<EntryForApiContractFormProperties>({
			activityDate: new FormControl<Date | null | undefined>(undefined),
			additionalNames: new FormControl<string | null | undefined>(undefined),
			artistString: new FormControl<string | null | undefined>(undefined),
			artistType: new FormControl<EntryForApiContractArtistType | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			defaultName: new FormControl<string | null | undefined>(undefined),
			defaultNameLanguage: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discType: new FormControl<EntryForApiContractDiscType | null | undefined>(undefined),
			entryType: new FormControl<EntryForApiContractEntryType | null | undefined>(undefined),
			eventCategory: new FormControl<EntryForApiContractEventCategory | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			releaseEventSeriesName: new FormControl<string | null | undefined>(undefined),
			songListFeaturedCategory: new FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>(undefined),
			songType: new FormControl<EntryForApiContractSongType | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			tagCategoryName: new FormControl<string | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EntryForApiContractArtistType { Unknown = 0, Circle = 1, Label = 2, Producer = 3, Animator = 4, Illustrator = 5, Lyricist = 6, Vocaloid = 7, UTAU = 8, CeVIO = 9, OtherVoiceSynthesizer = 10, OtherVocalist = 11, OtherGroup = 12, OtherIndividual = 13, Utaite = 14, Band = 15, Vocalist = 16, Character = 17 }

	export enum EntryForApiContractDefaultNameLanguage { Unspecified = 0, Japanese = 1, Romaji = 2, English = 3 }

	export enum EntryForApiContractDiscType { Unknown = 0, Album = 1, Single = 2, EP = 3, SplitAlbum = 4, Compilation = 5, Video = 6, Artbook = 7, Game = 8, Fanmade = 9, Instrumental = 10, Other = 11 }

	export enum EntryForApiContractEntryType { Undefined = 0, Album = 1, Artist = 2, DiscussionTopic = 3, PV = 4, ReleaseEvent = 5, ReleaseEventSeries = 6, Song = 7, SongList = 8, Tag = 9, User = 10 }

	export enum EntryForApiContractEventCategory { Unspecified = 0, AlbumRelease = 1, Anniversary = 2, Club = 3, Concert = 4, Contest = 5, Convention = 6, Other = 7 }

	export interface LocalizedStringContract {
		language?: EntryForApiContractDefaultNameLanguage | null;
		value?: string | null;
	}
	export interface LocalizedStringContractFormProperties {
		language: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringContractFormGroup() {
		return new FormGroup<LocalizedStringContractFormProperties>({
			language: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PVContract {
		author?: string | null;
		createdBy?: number | null;
		disabled?: boolean | null;
		extendedMetadata?: PVExtendedMetadata;
		id?: number | null;
		length?: number | null;
		name?: string | null;
		publishDate?: Date | null;
		pvId?: string | null;
		pvType?: PVContractPvType | null;
		service?: PVContractService | null;
		thumbUrl?: string | null;
		url?: string | null;
	}
	export interface PVContractFormProperties {
		author: FormControl<string | null | undefined>,
		createdBy: FormControl<number | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		length: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		publishDate: FormControl<Date | null | undefined>,
		pvId: FormControl<string | null | undefined>,
		pvType: FormControl<PVContractPvType | null | undefined>,
		service: FormControl<PVContractService | null | undefined>,
		thumbUrl: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePVContractFormGroup() {
		return new FormGroup<PVContractFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<number | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			pvId: new FormControl<string | null | undefined>(undefined),
			pvType: new FormControl<PVContractPvType | null | undefined>(undefined),
			service: new FormControl<PVContractService | null | undefined>(undefined),
			thumbUrl: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PVExtendedMetadata {
		json?: string | null;
	}
	export interface PVExtendedMetadataFormProperties {
		json: FormControl<string | null | undefined>,
	}
	export function CreatePVExtendedMetadataFormGroup() {
		return new FormGroup<PVExtendedMetadataFormProperties>({
			json: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PVContractPvType { Original = 0, Reprint = 1, Other = 2 }

	export enum PVContractService { NicoNicoDouga = 0, Youtube = 1, SoundCloud = 2, Vimeo = 3, Piapro = 4, Bilibili = 5, File = 6, LocalFile = 7, Creofuga = 8, Bandcamp = 9 }

	export enum EntryForApiContractSongListFeaturedCategory { Nothing = 0, Concerts = 1, VocaloidRanking = 2, Pools = 3, Other = 4 }

	export enum EntryForApiContractSongType { Unspecified = 0, Original = 1, Remaster = 2, Remix = 3, Cover = 4, Arrangement = 5, Instrumental = 6, Mashup = 7, MusicPV = 8, DramaPV = 9, Live = 10, Illustration = 11, Other = 12 }

	export enum EntryForApiContractStatus { Draft = 0, Finished = 1, Approved = 2, Locked = 3 }

	export interface TagUsageForApiContract {
		count?: number | null;
		tag?: TagBaseContract;
	}
	export interface TagUsageForApiContractFormProperties {
		count: FormControl<number | null | undefined>,
	}
	export function CreateTagUsageForApiContractFormGroup() {
		return new FormGroup<TagUsageForApiContractFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagBaseContract {
		additionalNames?: string | null;
		categoryName?: string | null;
		id?: number | null;
		name?: string | null;
		urlSlug?: string | null;
	}
	export interface TagBaseContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		categoryName: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		urlSlug: FormControl<string | null | undefined>,
	}
	export function CreateTagBaseContractFormGroup() {
		return new FormGroup<TagBaseContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			categoryName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArchivedWebLinkContract {
		category?: ArchivedWebLinkContractCategory | null;
		description?: string | null;
		url?: string | null;
	}
	export interface ArchivedWebLinkContractFormProperties {
		category: FormControl<ArchivedWebLinkContractCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArchivedWebLinkContractFormGroup() {
		return new FormGroup<ArchivedWebLinkContractFormProperties>({
			category: new FormControl<ArchivedWebLinkContractCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArchivedWebLinkContractCategory { Official = 0, Commercial = 1, Reference = 2, Other = 3 }

	export interface AdvancedSearchFilter {
		filterType?: AdvancedSearchFilterFilterType | null;
		negate?: boolean | null;
		param?: string | null;
	}
	export interface AdvancedSearchFilterFormProperties {
		filterType: FormControl<AdvancedSearchFilterFilterType | null | undefined>,
		negate: FormControl<boolean | null | undefined>,
		param: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedSearchFilterFormGroup() {
		return new FormGroup<AdvancedSearchFilterFormProperties>({
			filterType: new FormControl<AdvancedSearchFilterFilterType | null | undefined>(undefined),
			negate: new FormControl<boolean | null | undefined>(undefined),
			param: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdvancedSearchFilterFilterType { Nothing = 0, ArtistType = 1, WebLink = 2, HasUserAccount = 3, RootVoicebank = 4, VoiceProvider = 5, HasStoreLink = 6, HasTracks = 7, NoCoverPicture = 8, HasAlbum = 9, HasOriginalMedia = 10, HasMedia = 11, HasMultipleVoicebanks = 12, HasPublishDate = 13, Lyrics = 14, LyricsContent = 15 }

	export interface AlbumContract {
		additionalNames?: string | null;
		artistString?: string | null;
		coverPictureMime?: string | null;
		createDate?: Date | null;
		deleted?: boolean | null;
		discType?: EntryForApiContractDiscType | null;
		id?: number | null;
		name?: string | null;
		ratingAverage?: number | null;
		ratingCount?: number | null;
		releaseDate?: OptionalDateTimeContract;
		releaseEvent?: ReleaseEventForApiContract;
		status?: EntryForApiContractStatus | null;
		version?: number | null;
	}
	export interface AlbumContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		artistString: FormControl<string | null | undefined>,
		coverPictureMime: FormControl<string | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		discType: FormControl<EntryForApiContractDiscType | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		ratingAverage: FormControl<number | null | undefined>,
		ratingCount: FormControl<number | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateAlbumContractFormGroup() {
		return new FormGroup<AlbumContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			artistString: new FormControl<string | null | undefined>(undefined),
			coverPictureMime: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			discType: new FormControl<EntryForApiContractDiscType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ratingAverage: new FormControl<number | null | undefined>(undefined),
			ratingCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OptionalDateTimeContract {
		day?: number | null;
		formatted?: string | null;
		isEmpty?: boolean | null;
		month?: number | null;
		year?: number | null;
	}
	export interface OptionalDateTimeContractFormProperties {
		day: FormControl<number | null | undefined>,
		formatted: FormControl<string | null | undefined>,
		isEmpty: FormControl<boolean | null | undefined>,
		month: FormControl<number | null | undefined>,
		year: FormControl<number | null | undefined>,
	}
	export function CreateOptionalDateTimeContractFormGroup() {
		return new FormGroup<OptionalDateTimeContractFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			isEmpty: new FormControl<boolean | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReleaseEventForApiContract {
		additionalNames?: string | null;
		artists?: Array<ArtistForEventContract>;
		category?: EntryForApiContractEventCategory | null;
		date?: Date | null;
		description?: string | null;
		endDate?: Date | null;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		series?: ReleaseEventSeriesContract;
		seriesId?: number | null;
		seriesNumber?: number | null;
		seriesSuffix?: string | null;
		songList?: SongListBaseContract;
		status?: EntryForApiContractStatus | null;
		urlSlug?: string | null;
		venueName?: string | null;
		version?: number | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface ReleaseEventForApiContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		category: FormControl<EntryForApiContractEventCategory | null | undefined>,
		date: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		seriesId: FormControl<number | null | undefined>,
		seriesNumber: FormControl<number | null | undefined>,
		seriesSuffix: FormControl<string | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		urlSlug: FormControl<string | null | undefined>,
		venueName: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateReleaseEventForApiContractFormGroup() {
		return new FormGroup<ReleaseEventForApiContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<EntryForApiContractEventCategory | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			seriesId: new FormControl<number | null | undefined>(undefined),
			seriesNumber: new FormControl<number | null | undefined>(undefined),
			seriesSuffix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			venueName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtistForEventContract {
		artist?: ArtistContract;
		effectiveRoles?: ArtistForEventContractEffectiveRoles | null;
		id?: number | null;
		name?: string | null;
		roles?: ArtistForEventContractEffectiveRoles | null;
	}
	export interface ArtistForEventContractFormProperties {
		effectiveRoles: FormControl<ArtistForEventContractEffectiveRoles | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		roles: FormControl<ArtistForEventContractEffectiveRoles | null | undefined>,
	}
	export function CreateArtistForEventContractFormGroup() {
		return new FormGroup<ArtistForEventContractFormProperties>({
			effectiveRoles: new FormControl<ArtistForEventContractEffectiveRoles | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			roles: new FormControl<ArtistForEventContractEffectiveRoles | null | undefined>(undefined),
		});

	}

	export interface ArtistContract {
		additionalNames?: string | null;
		artistType?: EntryForApiContractArtistType | null;
		deleted?: boolean | null;
		id?: number | null;
		name?: string | null;
		pictureMime?: string | null;
		releaseDate?: Date | null;
		status?: EntryForApiContractStatus | null;
		version?: number | null;
	}
	export interface ArtistContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		artistType: FormControl<EntryForApiContractArtistType | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		pictureMime: FormControl<string | null | undefined>,
		releaseDate: FormControl<Date | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateArtistContractFormGroup() {
		return new FormGroup<ArtistContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			artistType: new FormControl<EntryForApiContractArtistType | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pictureMime: new FormControl<string | null | undefined>(undefined),
			releaseDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ArtistForEventContractEffectiveRoles { Default = 0, Dancer = 1, DJ = 2, Instrumentalist = 3, Organizer = 4, Promoter = 5, VJ = 6, Vocalist = 7, VoiceManipulator = 8, OtherPerformer = 9, Other = 10 }

	export interface ReleaseEventSeriesContract {
		additionalNames?: string | null;
		category?: EntryForApiContractEventCategory | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: number | null;
		name?: string | null;
		pictureMime?: string | null;
		status?: EntryForApiContractStatus | null;
		urlSlug?: string | null;
		version?: number | null;
		webLinks?: Array<WebLinkContract>;
	}
	export interface ReleaseEventSeriesContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		category: FormControl<EntryForApiContractEventCategory | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		pictureMime: FormControl<string | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		urlSlug: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateReleaseEventSeriesContractFormGroup() {
		return new FormGroup<ReleaseEventSeriesContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<EntryForApiContractEventCategory | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pictureMime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WebLinkContract {
		category?: ArchivedWebLinkContractCategory | null;
		description?: string | null;
		descriptionOrUrl?: string | null;
		id?: number | null;
		url?: string | null;
	}
	export interface WebLinkContractFormProperties {
		category: FormControl<ArchivedWebLinkContractCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		descriptionOrUrl: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebLinkContractFormGroup() {
		return new FormGroup<WebLinkContractFormProperties>({
			category: new FormControl<ArchivedWebLinkContractCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			descriptionOrUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SongListBaseContract {
		featuredCategory?: EntryForApiContractSongListFeaturedCategory | null;
		id?: number | null;
		name?: string | null;
	}
	export interface SongListBaseContractFormProperties {
		featuredCategory: FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSongListBaseContractFormGroup() {
		return new FormGroup<SongListBaseContractFormProperties>({
			featuredCategory: new FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebLinkForApiContract {
		category?: ArchivedWebLinkContractCategory | null;
		description?: string | null;
		id?: number | null;
		url?: string | null;
	}
	export interface WebLinkForApiContractFormProperties {
		category: FormControl<ArchivedWebLinkContractCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebLinkForApiContractFormGroup() {
		return new FormGroup<WebLinkForApiContractFormProperties>({
			category: new FormControl<ArchivedWebLinkContractCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AlbumDiscPropertiesContract {
		discNumber?: number | null;
		id?: number | null;
		mediaType?: AlbumDiscPropertiesContractMediaType | null;
		name?: string | null;
	}
	export interface AlbumDiscPropertiesContractFormProperties {
		discNumber: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		mediaType: FormControl<AlbumDiscPropertiesContractMediaType | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlbumDiscPropertiesContractFormGroup() {
		return new FormGroup<AlbumDiscPropertiesContractFormProperties>({
			discNumber: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			mediaType: new FormControl<AlbumDiscPropertiesContractMediaType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlbumDiscPropertiesContractMediaType { Audio = 0, Video = 1 }

	export interface AlbumForApiContract {
		additionalNames?: string | null;
		artistString?: string | null;
		artists?: Array<ArtistForAlbumForApiContract>;
		barcode?: string | null;
		catalogNumber?: string | null;
		createDate?: Date | null;
		defaultName?: string | null;
		defaultNameLanguage?: EntryForApiContractDefaultNameLanguage | null;
		deleted?: boolean | null;
		description?: string | null;
		discType?: EntryForApiContractDiscType | null;
		discs?: Array<AlbumDiscPropertiesContract>;
		id?: number | null;
		identifiers?: Array<AlbumIdentifierContract>;
		mainPicture?: EntryThumbForApiContract;
		mergedTo?: number | null;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		pvs?: Array<PVContract>;
		ratingAverage?: number | null;
		ratingCount?: number | null;
		releaseDate?: OptionalDateTimeContract;
		releaseEvent?: ReleaseEventForApiContract;
		status?: EntryForApiContractStatus | null;
		tags?: Array<TagUsageForApiContract>;
		tracks?: Array<SongInAlbumForApiContract>;
		version?: number | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface AlbumForApiContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		artistString: FormControl<string | null | undefined>,
		barcode: FormControl<string | null | undefined>,
		catalogNumber: FormControl<string | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		defaultName: FormControl<string | null | undefined>,
		defaultNameLanguage: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		discType: FormControl<EntryForApiContractDiscType | null | undefined>,
		id: FormControl<number | null | undefined>,
		mergedTo: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		ratingAverage: FormControl<number | null | undefined>,
		ratingCount: FormControl<number | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateAlbumForApiContractFormGroup() {
		return new FormGroup<AlbumForApiContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			artistString: new FormControl<string | null | undefined>(undefined),
			barcode: new FormControl<string | null | undefined>(undefined),
			catalogNumber: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			defaultName: new FormControl<string | null | undefined>(undefined),
			defaultNameLanguage: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discType: new FormControl<EntryForApiContractDiscType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			mergedTo: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ratingAverage: new FormControl<number | null | undefined>(undefined),
			ratingCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtistForAlbumForApiContract {
		artist?: ArtistContract;
		categories?: ArtistForAlbumForApiContractCategories | null;
		effectiveRoles?: ArtistForAlbumForApiContractEffectiveRoles | null;
		isSupport?: boolean | null;
		name?: string | null;
		roles?: ArtistForAlbumForApiContractEffectiveRoles | null;
	}
	export interface ArtistForAlbumForApiContractFormProperties {
		categories: FormControl<ArtistForAlbumForApiContractCategories | null | undefined>,
		effectiveRoles: FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>,
		isSupport: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		roles: FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>,
	}
	export function CreateArtistForAlbumForApiContractFormGroup() {
		return new FormGroup<ArtistForAlbumForApiContractFormProperties>({
			categories: new FormControl<ArtistForAlbumForApiContractCategories | null | undefined>(undefined),
			effectiveRoles: new FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>(undefined),
			isSupport: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			roles: new FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>(undefined),
		});

	}

	export enum ArtistForAlbumForApiContractCategories { Nothing = 0, Vocalist = 1, Producer = 2, Animator = 3, Label = 4, Circle = 5, Other = 6, Band = 7, Illustrator = 8, Subject = 9 }

	export enum ArtistForAlbumForApiContractEffectiveRoles { Default = 0, Animator = 1, Arranger = 2, Composer = 3, Distributor = 4, Illustrator = 5, Instrumentalist = 6, Lyricist = 7, Mastering = 8, Publisher = 9, Vocalist = 10, VoiceManipulator = 11, Other = 12, Mixer = 13, Chorus = 14, Encoder = 15, VocalDataProvider = 16 }

	export interface AlbumIdentifierContract {
		value?: string | null;
	}
	export interface AlbumIdentifierContractFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateAlbumIdentifierContractFormGroup() {
		return new FormGroup<AlbumIdentifierContractFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SongInAlbumForApiContract {
		discNumber?: number | null;
		id?: number | null;
		name?: string | null;
		song?: SongForApiContract;
		trackNumber?: number | null;
	}
	export interface SongInAlbumForApiContractFormProperties {
		discNumber: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		trackNumber: FormControl<number | null | undefined>,
	}
	export function CreateSongInAlbumForApiContractFormGroup() {
		return new FormGroup<SongInAlbumForApiContractFormProperties>({
			discNumber: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			trackNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SongForApiContract {
		additionalNames?: string | null;
		albums?: Array<AlbumContract>;
		artistString?: string | null;
		artists?: Array<ArtistForSongContract>;
		createDate?: Date | null;
		defaultName?: string | null;
		defaultNameLanguage?: EntryForApiContractDefaultNameLanguage | null;
		deleted?: boolean | null;
		favoritedTimes?: number | null;
		id?: number | null;
		lengthSeconds?: number | null;
		lyrics?: Array<LyricsForSongContract>;
		mainPicture?: EntryThumbForApiContract;
		mergedTo?: number | null;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		originalVersionId?: number | null;
		publishDate?: Date | null;
		pvServices?: SongForApiContractPvServices | null;
		pvs?: Array<PVContract>;
		ratingScore?: number | null;
		releaseEvent?: ReleaseEventForApiContract;
		songType?: EntryForApiContractSongType | null;
		status?: EntryForApiContractStatus | null;
		tags?: Array<TagUsageForApiContract>;
		thumbUrl?: string | null;
		version?: number | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface SongForApiContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		artistString: FormControl<string | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		defaultName: FormControl<string | null | undefined>,
		defaultNameLanguage: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		favoritedTimes: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		lengthSeconds: FormControl<number | null | undefined>,
		mergedTo: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		originalVersionId: FormControl<number | null | undefined>,
		publishDate: FormControl<Date | null | undefined>,
		pvServices: FormControl<SongForApiContractPvServices | null | undefined>,
		ratingScore: FormControl<number | null | undefined>,
		songType: FormControl<EntryForApiContractSongType | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		thumbUrl: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateSongForApiContractFormGroup() {
		return new FormGroup<SongForApiContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			artistString: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			defaultName: new FormControl<string | null | undefined>(undefined),
			defaultNameLanguage: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			favoritedTimes: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lengthSeconds: new FormControl<number | null | undefined>(undefined),
			mergedTo: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originalVersionId: new FormControl<number | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			pvServices: new FormControl<SongForApiContractPvServices | null | undefined>(undefined),
			ratingScore: new FormControl<number | null | undefined>(undefined),
			songType: new FormControl<EntryForApiContractSongType | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			thumbUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtistForSongContract {
		artist?: ArtistContract;
		categories?: ArtistForAlbumForApiContractCategories | null;
		effectiveRoles?: ArtistForAlbumForApiContractEffectiveRoles | null;
		id?: number | null;
		isCustomName?: boolean | null;
		isSupport?: boolean | null;
		name?: string | null;
		roles?: ArtistForAlbumForApiContractEffectiveRoles | null;
	}
	export interface ArtistForSongContractFormProperties {
		categories: FormControl<ArtistForAlbumForApiContractCategories | null | undefined>,
		effectiveRoles: FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>,
		id: FormControl<number | null | undefined>,
		isCustomName: FormControl<boolean | null | undefined>,
		isSupport: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		roles: FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>,
	}
	export function CreateArtistForSongContractFormGroup() {
		return new FormGroup<ArtistForSongContractFormProperties>({
			categories: new FormControl<ArtistForAlbumForApiContractCategories | null | undefined>(undefined),
			effectiveRoles: new FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isCustomName: new FormControl<boolean | null | undefined>(undefined),
			isSupport: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			roles: new FormControl<ArtistForAlbumForApiContractEffectiveRoles | null | undefined>(undefined),
		});

	}

	export interface LyricsForSongContract {
		cultureCode?: string | null;
		id?: number | null;
		source?: string | null;
		translationType?: LyricsForSongContractTranslationType | null;
		url?: string | null;
		value?: string | null;
	}
	export interface LyricsForSongContractFormProperties {
		cultureCode: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
		translationType: FormControl<LyricsForSongContractTranslationType | null | undefined>,
		url: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateLyricsForSongContractFormGroup() {
		return new FormGroup<LyricsForSongContractFormProperties>({
			cultureCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			translationType: new FormControl<LyricsForSongContractTranslationType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LyricsForSongContractTranslationType { Original = 0, Romanized = 1, Translation = 2 }

	export enum SongForApiContractPvServices { Nothing = 0, NicoNicoDouga = 1, Youtube = 2, SoundCloud = 3, Vimeo = 4, Piapro = 5, Bilibili = 6, File = 7, LocalFile = 8, Creofuga = 9, Bandcamp = 10 }

	export interface AlbumForUserForApiContract {
		album?: AlbumForApiContract;
		mediaType?: AlbumForUserForApiContractMediaType | null;
		purchaseStatus?: AlbumForUserForApiContractPurchaseStatus | null;
		rating?: number | null;
		user?: UserForApiContract;
	}
	export interface AlbumForUserForApiContractFormProperties {
		mediaType: FormControl<AlbumForUserForApiContractMediaType | null | undefined>,
		purchaseStatus: FormControl<AlbumForUserForApiContractPurchaseStatus | null | undefined>,
		rating: FormControl<number | null | undefined>,
	}
	export function CreateAlbumForUserForApiContractFormGroup() {
		return new FormGroup<AlbumForUserForApiContractFormProperties>({
			mediaType: new FormControl<AlbumForUserForApiContractMediaType | null | undefined>(undefined),
			purchaseStatus: new FormControl<AlbumForUserForApiContractPurchaseStatus | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AlbumForUserForApiContractMediaType { PhysicalDisc = 0, DigitalDownload = 1, Other = 2 }

	export enum AlbumForUserForApiContractPurchaseStatus { Nothing = 0, Wishlisted = 1, Ordered = 2, Owned = 3 }

	export interface AlbumReviewContract {
		albumId?: number | null;
		date?: Date | null;
		id?: number | null;
		languageCode?: string | null;
		text?: string | null;
		title?: string | null;
		user?: UserForApiContract;
	}
	export interface AlbumReviewContractFormProperties {
		albumId: FormControl<number | null | undefined>,
		date: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		languageCode: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAlbumReviewContractFormGroup() {
		return new FormGroup<AlbumReviewContractFormProperties>({
			albumId: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArtistForApiContract {
		additionalNames?: string | null;
		artistLinks?: Array<ArtistForArtistForApiContract>;
		artistLinksReverse?: Array<ArtistForArtistForApiContract>;
		artistType?: EntryForApiContractArtistType | null;
		baseVoicebank?: ArtistContract;
		createDate?: Date | null;
		defaultName?: string | null;
		defaultNameLanguage?: EntryForApiContractDefaultNameLanguage | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		mergedTo?: number | null;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		pictureMime?: string | null;
		relations?: ArtistRelationsForApi;
		releaseDate?: Date | null;
		status?: EntryForApiContractStatus | null;
		tags?: Array<TagUsageForApiContract>;
		version?: number | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface ArtistForApiContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		artistType: FormControl<EntryForApiContractArtistType | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		defaultName: FormControl<string | null | undefined>,
		defaultNameLanguage: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		mergedTo: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		pictureMime: FormControl<string | null | undefined>,
		releaseDate: FormControl<Date | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateArtistForApiContractFormGroup() {
		return new FormGroup<ArtistForApiContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			artistType: new FormControl<EntryForApiContractArtistType | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			defaultName: new FormControl<string | null | undefined>(undefined),
			defaultNameLanguage: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			mergedTo: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pictureMime: new FormControl<string | null | undefined>(undefined),
			releaseDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtistForArtistForApiContract {
		artist?: ArtistContract;
		linkType?: ArtistForArtistForApiContractLinkType | null;
	}
	export interface ArtistForArtistForApiContractFormProperties {
		linkType: FormControl<ArtistForArtistForApiContractLinkType | null | undefined>,
	}
	export function CreateArtistForArtistForApiContractFormGroup() {
		return new FormGroup<ArtistForArtistForApiContractFormProperties>({
			linkType: new FormControl<ArtistForArtistForApiContractLinkType | null | undefined>(undefined),
		});

	}

	export enum ArtistForArtistForApiContractLinkType { CharacterDesigner = 0, Group = 1, Illustrator = 2, Manager = 3, VoiceProvider = 4 }

	export interface ArtistRelationsForApi {
		latestAlbums?: Array<AlbumForApiContract>;
		latestEvents?: Array<ReleaseEventForApiContract>;
		latestSongs?: Array<SongForApiContract>;
		popularAlbums?: Array<AlbumForApiContract>;
		popularSongs?: Array<SongForApiContract>;
	}
	export interface ArtistRelationsForApiFormProperties {
	}
	export function CreateArtistRelationsForApiFormGroup() {
		return new FormGroup<ArtistRelationsForApiFormProperties>({
		});

	}

	export interface ArtistForUserForApiContract {
		artist?: ArtistForApiContract;
	}
	export interface ArtistForUserForApiContractFormProperties {
	}
	export function CreateArtistForUserForApiContractFormGroup() {
		return new FormGroup<ArtistForUserForApiContractFormProperties>({
		});

	}

	export interface CommentForApiContract {
		author?: UserForApiContract;
		authorName?: string | null;
		created?: Date | null;
		entry?: EntryRefContract;
		id?: number | null;
		message?: string | null;
	}
	export interface CommentForApiContractFormProperties {
		authorName: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCommentForApiContractFormGroup() {
		return new FormGroup<CommentForApiContractFormProperties>({
			authorName: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntryRefContract {
		entryType?: EntryForApiContractEntryType | null;
		id?: number | null;
	}
	export interface EntryRefContractFormProperties {
		entryType: FormControl<EntryForApiContractEntryType | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateEntryRefContractFormGroup() {
		return new FormGroup<EntryRefContractFormProperties>({
			entryType: new FormControl<EntryForApiContractEntryType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateReportModel {
		reason?: string | null;
		reportType?: CreateReportModelReportType | null;
	}
	export interface CreateReportModelFormProperties {
		reason: FormControl<string | null | undefined>,
		reportType: FormControl<CreateReportModelReportType | null | undefined>,
	}
	export function CreateCreateReportModelFormGroup() {
		return new FormGroup<CreateReportModelFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			reportType: new FormControl<CreateReportModelReportType | null | undefined>(undefined),
		});

	}

	export enum CreateReportModelReportType { MaliciousIP = 0, Spamming = 1, RemovePermissions = 2, Other = 3 }

	export interface DiscussionFolderContract {
		description?: string | null;
		id?: number | null;
		lastTopicAuthor?: UserForApiContract;
		lastTopicDate?: Date | null;
		name?: string | null;
		topicCount?: number | null;
	}
	export interface DiscussionFolderContractFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastTopicDate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		topicCount: FormControl<number | null | undefined>,
	}
	export function CreateDiscussionFolderContractFormGroup() {
		return new FormGroup<DiscussionFolderContractFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastTopicDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topicCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DiscussionTopicContract {
		author?: UserForApiContract;
		commentCount?: number | null;
		comments?: Array<CommentForApiContract>;
		content?: string | null;
		created?: Date | null;
		folderId?: number | null;
		id?: number | null;
		lastComment?: CommentForApiContract;
		locked?: boolean | null;
		name?: string | null;
	}
	export interface DiscussionTopicContractFormProperties {
		commentCount: FormControl<number | null | undefined>,
		content: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		folderId: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		locked: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDiscussionTopicContractFormGroup() {
		return new FormGroup<DiscussionTopicContractFormProperties>({
			commentCount: new FormControl<number | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			folderId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnglishTranslatedStringContract {
		english?: string | null;
		original?: string | null;
	}
	export interface EnglishTranslatedStringContractFormProperties {
		english: FormControl<string | null | undefined>,
		original: FormControl<string | null | undefined>,
	}
	export function CreateEnglishTranslatedStringContractFormGroup() {
		return new FormGroup<EnglishTranslatedStringContractFormProperties>({
			english: new FormControl<string | null | undefined>(undefined),
			original: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntryThumbContract {
		entryType?: EntryForApiContractEntryType | null;
		id?: number | null;
		mime?: string | null;
		version?: number | null;
	}
	export interface EntryThumbContractFormProperties {
		entryType: FormControl<EntryForApiContractEntryType | null | undefined>,
		id: FormControl<number | null | undefined>,
		mime: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateEntryThumbContractFormGroup() {
		return new FormGroup<EntryThumbContractFormProperties>({
			entryType: new FormControl<EntryForApiContractEntryType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			mime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LocalizedStringWithIdContract {
		id?: number | null;
		language?: EntryForApiContractDefaultNameLanguage | null;
		value?: string | null;
	}
	export interface LocalizedStringWithIdContractFormProperties {
		id: FormControl<number | null | undefined>,
		language: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringWithIdContractFormGroup() {
		return new FormGroup<LocalizedStringWithIdContractFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			language: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PVForSongContract {
		author?: string | null;
		createdBy?: number | null;
		disabled?: boolean | null;
		extendedMetadata?: PVExtendedMetadata;
		id?: number | null;
		length?: number | null;
		name?: string | null;
		publishDate?: Date | null;
		pvId?: string | null;
		pvType?: PVContractPvType | null;
		service?: PVContractService | null;
		song?: SongContract;
		thumbUrl?: string | null;
		url?: string | null;
	}
	export interface PVForSongContractFormProperties {
		author: FormControl<string | null | undefined>,
		createdBy: FormControl<number | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		length: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		publishDate: FormControl<Date | null | undefined>,
		pvId: FormControl<string | null | undefined>,
		pvType: FormControl<PVContractPvType | null | undefined>,
		service: FormControl<PVContractService | null | undefined>,
		thumbUrl: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePVForSongContractFormGroup() {
		return new FormGroup<PVForSongContractFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<number | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			pvId: new FormControl<string | null | undefined>(undefined),
			pvType: new FormControl<PVContractPvType | null | undefined>(undefined),
			service: new FormControl<PVContractService | null | undefined>(undefined),
			thumbUrl: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SongContract {
		additionalNames?: string | null;
		artistString?: string | null;
		createDate?: Date | null;
		deleted?: boolean | null;
		favoritedTimes?: number | null;
		id?: number | null;
		lengthSeconds?: number | null;
		name?: string | null;
		nicoId?: string | null;
		publishDate?: Date | null;
		pvServices?: SongForApiContractPvServices | null;
		ratingScore?: number | null;
		songType?: EntryForApiContractSongType | null;
		status?: EntryForApiContractStatus | null;
		thumbUrl?: string | null;
		version?: number | null;
	}
	export interface SongContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		artistString: FormControl<string | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		favoritedTimes: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		lengthSeconds: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		nicoId: FormControl<string | null | undefined>,
		publishDate: FormControl<Date | null | undefined>,
		pvServices: FormControl<SongForApiContractPvServices | null | undefined>,
		ratingScore: FormControl<number | null | undefined>,
		songType: FormControl<EntryForApiContractSongType | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		thumbUrl: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateSongContractFormGroup() {
		return new FormGroup<SongContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			artistString: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			favoritedTimes: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lengthSeconds: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nicoId: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			pvServices: new FormControl<SongForApiContractPvServices | null | undefined>(undefined),
			ratingScore: new FormControl<number | null | undefined>(undefined),
			songType: new FormControl<EntryForApiContractSongType | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			thumbUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_ActivityEntryForApiContract {
		items?: Array<ActivityEntryForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_ActivityEntryForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_ActivityEntryForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_ActivityEntryForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_AlbumForApiContract {
		items?: Array<AlbumForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_AlbumForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_AlbumForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_AlbumForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_AlbumForUserForApiContract {
		items?: Array<AlbumForUserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_AlbumForUserForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_AlbumForUserForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_AlbumForUserForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_ArtistForApiContract {
		items?: Array<ArtistForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_ArtistForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_ArtistForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_ArtistForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_ArtistForUserForApiContract {
		items?: Array<ArtistForUserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_ArtistForUserForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_ArtistForUserForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_ArtistForUserForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_CommentForApiContract {
		items?: Array<CommentForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_CommentForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_CommentForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_CommentForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_DiscussionTopicContract {
		items?: Array<DiscussionTopicContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_DiscussionTopicContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_DiscussionTopicContractFormGroup() {
		return new FormGroup<PartialFindResult_DiscussionTopicContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_EntryForApiContract {
		items?: Array<EntryForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_EntryForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_EntryForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_EntryForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_PVForSongContract {
		items?: Array<PVForSongContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_PVForSongContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_PVForSongContractFormGroup() {
		return new FormGroup<PartialFindResult_PVForSongContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_RatedSongForUserForApiContract {
		items?: Array<RatedSongForUserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_RatedSongForUserForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_RatedSongForUserForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_RatedSongForUserForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RatedSongForUserForApiContract {
		date?: Date | null;
		rating?: RatedSongForUserForApiContractRating | null;
		song?: SongForApiContract;
		user?: UserForApiContract;
	}
	export interface RatedSongForUserForApiContractFormProperties {
		date: FormControl<Date | null | undefined>,
		rating: FormControl<RatedSongForUserForApiContractRating | null | undefined>,
	}
	export function CreateRatedSongForUserForApiContractFormGroup() {
		return new FormGroup<RatedSongForUserForApiContractFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			rating: new FormControl<RatedSongForUserForApiContractRating | null | undefined>(undefined),
		});

	}

	export enum RatedSongForUserForApiContractRating { Nothing = 0, Dislike = 1, Like = 2, Favorite = 3 }

	export interface PartialFindResult_ReleaseEventForApiContract {
		items?: Array<ReleaseEventForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_ReleaseEventForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_ReleaseEventForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_ReleaseEventForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_ReleaseEventSeriesContract {
		items?: Array<ReleaseEventSeriesContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_ReleaseEventSeriesContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_ReleaseEventSeriesContractFormGroup() {
		return new FormGroup<PartialFindResult_ReleaseEventSeriesContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_SongForApiContract {
		items?: Array<SongForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_SongForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_SongForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_SongForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_SongInListForApiContract {
		items?: Array<SongInListForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_SongInListForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_SongInListForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_SongInListForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SongInListForApiContract {
		notes?: string | null;
		order?: number | null;
		song?: SongForApiContract;
	}
	export interface SongInListForApiContractFormProperties {
		notes: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
	}
	export function CreateSongInListForApiContractFormGroup() {
		return new FormGroup<SongInListForApiContractFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_SongListForApiContract {
		items?: Array<SongListForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_SongListForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_SongListForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_SongListForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SongListForApiContract {
		author?: UserForApiContract;
		eventDate?: Date | null;
		featuredCategory?: EntryForApiContractSongListFeaturedCategory | null;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
	}
	export interface SongListForApiContractFormProperties {
		eventDate: FormControl<Date | null | undefined>,
		featuredCategory: FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSongListForApiContractFormGroup() {
		return new FormGroup<SongListForApiContractFormProperties>({
			eventDate: new FormControl<Date | null | undefined>(undefined),
			featuredCategory: new FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_TagForApiContract {
		items?: Array<TagForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_TagForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_TagForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_TagForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagForApiContract {
		additionalNames?: string | null;
		aliasedTo?: TagBaseContract;
		categoryName?: string | null;
		createDate?: Date | null;
		defaultNameLanguage?: EntryForApiContractDefaultNameLanguage | null;
		description?: string | null;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
		names?: Array<LocalizedStringWithIdContract>;
		parent?: TagBaseContract;
		relatedTags?: Array<TagBaseContract>;
		status?: EntryForApiContractStatus | null;
		targets?: number | null;
		translatedDescription?: EnglishTranslatedStringContract;
		urlSlug?: string | null;
		usageCount?: number | null;
		version?: number | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface TagForApiContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		categoryName: FormControl<string | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		defaultNameLanguage: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		targets: FormControl<number | null | undefined>,
		urlSlug: FormControl<string | null | undefined>,
		usageCount: FormControl<number | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateTagForApiContractFormGroup() {
		return new FormGroup<TagForApiContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			categoryName: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			defaultNameLanguage: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			targets: new FormControl<number | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			usageCount: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_UserForApiContract {
		items?: Array<UserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_UserForApiContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_UserForApiContractFormGroup() {
		return new FormGroup<PartialFindResult_UserForApiContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartialFindResult_UserMessageContract {
		items?: Array<UserMessageContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PartialFindResult_UserMessageContractFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePartialFindResult_UserMessageContractFormGroup() {
		return new FormGroup<PartialFindResult_UserMessageContractFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserMessageContract {
		body?: string | null;
		createdFormatted?: string | null;
		highPriority?: boolean | null;
		id?: number | null;
		inbox?: UserMessageContractInbox | null;
		read?: boolean | null;
		receiver?: UserForApiContract;
		sender?: UserForApiContract;
		subject?: string | null;
	}
	export interface UserMessageContractFormProperties {
		body: FormControl<string | null | undefined>,
		createdFormatted: FormControl<string | null | undefined>,
		highPriority: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		inbox: FormControl<UserMessageContractInbox | null | undefined>,
		read: FormControl<boolean | null | undefined>,
		subject: FormControl<string | null | undefined>,
	}
	export function CreateUserMessageContractFormGroup() {
		return new FormGroup<UserMessageContractFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			createdFormatted: new FormControl<string | null | undefined>(undefined),
			highPriority: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			inbox: new FormControl<UserMessageContractInbox | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserMessageContractInbox { Nothing = 0, Received = 1, Sent = 2, Notifications = 3 }

	export interface RelatedSongsContract {
		artistMatches?: Array<SongForApiContract>;
		likeMatches?: Array<SongForApiContract>;
		tagMatches?: Array<SongForApiContract>;
	}
	export interface RelatedSongsContractFormProperties {
	}
	export function CreateRelatedSongsContractFormGroup() {
		return new FormGroup<RelatedSongsContractFormProperties>({
		});

	}

	export interface SongInListEditContract {
		notes?: string | null;
		order?: number | null;
		song?: SongForApiContract;
		songInListId?: number | null;
	}
	export interface SongInListEditContractFormProperties {
		notes: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		songInListId: FormControl<number | null | undefined>,
	}
	export function CreateSongInListEditContractFormGroup() {
		return new FormGroup<SongInListEditContractFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			songInListId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SongListForEditContract {
		author?: UserWithEmailContract;
		canEdit?: boolean | null;
		deleted?: boolean | null;
		description?: string | null;
		eventDate?: Date | null;
		featuredCategory?: EntryForApiContractSongListFeaturedCategory | null;
		id?: number | null;
		name?: string | null;
		songLinks?: Array<SongInListEditContract>;
		status?: EntryForApiContractStatus | null;
		thumb?: EntryThumbContract;
		updateNotes?: string | null;
		version?: number | null;
	}
	export interface SongListForEditContractFormProperties {
		canEdit: FormControl<boolean | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		featuredCategory: FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<EntryForApiContractStatus | null | undefined>,
		updateNotes: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateSongListForEditContractFormGroup() {
		return new FormGroup<SongListForEditContractFormProperties>({
			canEdit: new FormControl<boolean | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			featuredCategory: new FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EntryForApiContractStatus | null | undefined>(undefined),
			updateNotes: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserWithEmailContract {
		email?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface UserWithEmailContractFormProperties {
		email: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserWithEmailContractFormGroup() {
		return new FormGroup<UserWithEmailContractFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SongRatingContract {
		rating?: RatedSongForUserForApiContractRating | null;
	}
	export interface SongRatingContractFormProperties {
		rating: FormControl<RatedSongForUserForApiContractRating | null | undefined>,
	}
	export function CreateSongRatingContractFormGroup() {
		return new FormGroup<SongRatingContractFormProperties>({
			rating: new FormControl<RatedSongForUserForApiContractRating | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of recent activity entries.
		 * Entries are always returned sorted from newest to oldest.
		 * Activity for deleted entries is not returned.
		 * Get api/activityEntries
		 * @param {Date} before Filter to return activity entries only before this date. Optional, by default no filter.
		 * @param {Date} since Filter to return activity entries only after this date. Optional, by default no filter.
		 * @param {number} userId Filter by user Id. Optional, by default no filter.
		 * @param {ActivityEntryForApiContractEditEvent} editEvent Filter by entry edit event (either Created or Updated). Optional, by default no filter.
		 * @param {number} maxResults Maximum number of results to return. Default 50. Maximum value 500.
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangFields} fields Optional fields.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangEntryFields} entryFields Optional fields for entries.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference.
		 * @return {PartialFindResult_ActivityEntryForApiContract} OK
		 */
		ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLang(before: Date | null | undefined, since: Date | null | undefined, userId: number | null | undefined, editEvent: ActivityEntryForApiContractEditEvent | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, fields: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangFields | null | undefined, entryFields: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangEntryFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_ActivityEntryForApiContract> {
			return this.http.get<PartialFindResult_ActivityEntryForApiContract>(this.baseUri + 'api/activityEntries?before=' + before?.toISOString() + '&since=' + since?.toISOString() + '&userId=' + userId + '&editEvent=' + editEvent + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&fields=' + fields + '&entryFields=' + entryFields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a page of albums.
		 * Get api/albums
		 * @param {string} query Album name query (optional).
		 * @param {EntryForApiContractDiscType} discTypes Disc type. By default nothing. Possible values are Album, Single, EP, SplitAlbum, Compilation, Video, Other. Note: only one type supported for now.
		 * @param {Array<string>} tagName Filter by tag name (optional). This filter can be specified multiple times.
		 * @param {Array<number>} tagId Filter by tag Id (optional). This filter can be specified multiple times.
		 * @param {boolean} childTags Include child tags, if the tags being filtered by have any.
		 * @param {Array<number>} artistId Filter by artist Id (optional).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangArtistParticipationStatus} artistParticipationStatus Filter by artist participation status. Only valid if artistId is specified.
		 *             Everything (default): Show all albums by that artist (no filter).
		 *             OnlyMainAlbums: Show only main albums by that artist.
		 *             OnlyCollaborations: Show only collaborations by that artist.
		 * @param {boolean} childVoicebanks Include child voicebanks, if the artist being filtered by has any.
		 * @param {boolean} includeMembers Include members of groups. This applies if {artistId} is a group.
		 * @param {string} barcode Filter by album barcode (optional).
		 * @param {EntryForApiContractStatus} status Filter by entry status (optional).
		 * @param {Date} releaseDateAfter Filter by albums whose release date is after this date (inclusive).
		 * @param {Date} releaseDateBefore Filter by albums whose release date is before this date (exclusive).
		 * @param {Array<string>} advancedFilters List of advanced filters (optional).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). 
		 *             Possible values are None, Name, ReleaseDate, ReleaseDateWithNulls, AdditionDate, RatingAverage, RatingTotal, NameThenReleaseDate.
		 * @param {boolean} preferAccurateMatches Whether the search should prefer accurate matches. 
		 *             If this is true, entries that match by prefix will be moved first, instead of being sorted alphabetically.
		 *             Requires a text query. Does not support pagination.
		 *             This is mostly useful for autocomplete boxes.
		 * @param {boolean} deleted Whether to search for deleted entries.
		 *             If this is true, only deleted entries will be returned.
		 *             If this is false (default), deleted entries are not returned.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for artist name (optional, defaults to Exact).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields} fields Optional fields (optional). Possible values are artists, names, pvs, tags, tracks, webLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_AlbumForApiContract} OK
		 */
		ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLang(query: string | null | undefined, discTypes: EntryForApiContractDiscType | null | undefined, tagName: Array<string> | null | undefined, tagId: Array<number> | null | undefined, childTags: boolean | null | undefined, artistId: Array<number> | null | undefined, artistParticipationStatus: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangArtistParticipationStatus | null | undefined, childVoicebanks: boolean | null | undefined, includeMembers: boolean | null | undefined, barcode: string | null | undefined, status: EntryForApiContractStatus | null | undefined, releaseDateAfter: Date | null | undefined, releaseDateBefore: Date | null | undefined, advancedFilters: Array<string> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangSort | null | undefined, preferAccurateMatches: boolean | null | undefined, deleted: boolean | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_AlbumForApiContract> {
			return this.http.get<PartialFindResult_AlbumForApiContract>(this.baseUri + 'api/albums?query=' + (query == null ? '' : encodeURIComponent(query)) + '&discTypes=' + discTypes + '&' + tagName?.map(z => `tagName=${encodeURIComponent(z)}`).join('&') + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&childTags=' + childTags + '&' + artistId?.map(z => `artistId=${z}`).join('&') + '&artistParticipationStatus=' + artistParticipationStatus + '&childVoicebanks=' + childVoicebanks + '&includeMembers=' + includeMembers + '&barcode=' + (barcode == null ? '' : encodeURIComponent(barcode)) + '&status=' + status + '&releaseDateAfter=' + releaseDateAfter?.toISOString() + '&releaseDateBefore=' + releaseDateBefore?.toISOString() + '&' + advancedFilters?.map(z => `advancedFilters=${encodeURIComponent(z)}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&deleted=' + deleted + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a comment.
		 * Normal users can edit their own comments, moderators can edit all comments.
		 * Requires login.
		 * Post api/albums/comments/{commentId}
		 * @param {number} commentId ID of the comment to be edited.
		 * @param {CommentForApiContract} requestBody New comment data. Only message can be edited.
		 * @return {void} 
		 */
		ApiAlbumsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/albums/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Normal users can delete their own comments, moderators can delete all comments.
		 * Requires login.
		 * Delete api/albums/comments/{commentId}
		 * @param {number} commentId ID of the comment to be deleted.
		 * @return {void} 
		 */
		ApiAlbumsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/albums/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of album names. Ideal for autocomplete boxes.
		 * Get api/albums/names
		 * @param {string} query Text query.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Name match mode.
		 * @param {number} maxResults Maximum number of results.
		 * @return {Array<string>} OK
		 */
		ApiAlbumsNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/albums/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets list of upcoming or recent albums, same as front page.
		 * Output is cached for 1 hour.
		 * Get api/albums/new
		 * @return {Array<AlbumForApiContract>} OK
		 */
		ApiAlbumsNewGetByLanguagePreferenceAndFields(languagePreference: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, fields: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForApiContract>> {
			return this.http.get<Array<AlbumForApiContract>>(this.baseUri + 'api/albums/new?languagePreference=' + languagePreference + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets list of top rated albums, same as front page.
		 * Output is cached for 1 hour.
		 * Get api/albums/top
		 * @return {Array<AlbumForApiContract>} OK
		 */
		ApiAlbumsTopGetByLanguagePreferenceAndFields(languagePreference: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, fields: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForApiContract>> {
			return this.http.get<Array<AlbumForApiContract>>(this.baseUri + 'api/albums/top?languagePreference=' + languagePreference + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets an album by Id.
		 * Get api/albums/{id}
		 * @param {number} id Album Id (required).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields} fields Optional fields (optional). Possible values are artists, names, pvs, tags, tracks, webLinks.
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} songFields Optional fields for tracks, if included (optional).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {AlbumForApiContract} OK
		 */
		ApiAlbums_idGetByFieldsAndSongFieldsAndLang(id: number, fields: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields | null | undefined, songFields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<AlbumForApiContract> {
			return this.http.get<AlbumForApiContract>(this.baseUri + 'api/albums/' + id + '?fields=' + fields + '&songFields=' + songFields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an album.
		 * Delete api/albums/{id}
		 * @param {number} id ID of the album to be deleted.
		 * @param {string} notes Notes.
		 * @return {void} 
		 */
		ApiAlbums_idDeleteByNotes(id: number, notes: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/albums/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of comments for an album.
		 * Pagination and sorting might be added later.
		 * Get api/albums/{id}/comments
		 * @param {number} id ID of the album whose comments to load.
		 * @return {Array<CommentForApiContract>} OK
		 */
		ApiAlbums_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<CommentForApiContract>> {
			return this.http.get<Array<CommentForApiContract>>(this.baseUri + 'api/albums/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Posts a new comment.
		 * Post api/albums/{id}/comments
		 * @param {number} id ID of the album for which to create the comment.
		 * @param {CommentForApiContract} requestBody Comment data. Message and author must be specified. Author must match the logged in user.
		 * @return {CommentForApiContract} OK
		 */
		ApiAlbums_idCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/albums/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/albums/{id}/reviews
		 * @return {Array<AlbumReviewContract>} OK
		 */
		ApiAlbums_idReviewsGetByLanguageCode(id: number, languageCode: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumReviewContract>> {
			return this.http.get<Array<AlbumReviewContract>>(this.baseUri + 'api/albums/' + id + '/reviews?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/albums/{id}/reviews
		 * @return {AlbumReviewContract} OK
		 */
		ApiAlbums_idReviewsPost(id: number, requestBody: AlbumReviewContract, headersHandler?: () => HttpHeaders): Observable<AlbumReviewContract> {
			return this.http.post<AlbumReviewContract>(this.baseUri + 'api/albums/' + id + '/reviews', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/albums/{id}/reviews/{reviewId}
		 * @return {void} 
		 */
		ApiAlbums_idReviews_reviewIdDelete(reviewId: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/albums/' + (id == null ? '' : encodeURIComponent(id)) + '/reviews/' + reviewId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets tracks for an album.
		 * Get api/albums/{id}/tracks
		 * @param {number} id Album ID (required).
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {Array<SongInAlbumForApiContract>} OK
		 */
		ApiAlbums_idTracksGetByFieldsAndLang(id: number, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongInAlbumForApiContract>> {
			return this.http.get<Array<SongInAlbumForApiContract>>(this.baseUri + 'api/albums/' + id + '/tracks?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums/{id}/tracks/fields
		 * @return {Array<string>} OK
		 */
		ApiAlbums_idTracksFieldsGetByFieldAndDiscNumberAndLang(id: number, field: Array<string> | null | undefined, discNumber: number | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/albums/' + id + '/tracks/fields?' + field?.map(z => `field=${encodeURIComponent(z)}`).join('&') + '&discNumber=' + discNumber + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums/{id}/user-collections
		 * @return {Array<AlbumForUserForApiContract>} OK
		 */
		ApiAlbums_idUser_collectionsGetByLanguagePreference(id: number, languagePreference: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForUserForApiContract>> {
			return this.http.get<Array<AlbumForUserForApiContract>>(this.baseUri + 'api/albums/' + id + '/user-collections?languagePreference=' + languagePreference, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find artists.
		 * Get api/artists
		 * @param {string} query Artist name query (optional).
		 * @param {string} artistTypes Filtered artist type (optional).
		 * @param {boolean} allowBaseVoicebanks Allow base voicebanks. If false, only root voicebanks will be allowed. Only affects voice synthesizers that can have base voicebanks.
		 * @param {Array<string>} tagName Filter by tag name (optional).
		 * @param {Array<number>} tagId Filter by tag Id (optional). This filter can be specified multiple times.
		 * @param {boolean} childTags Include child tags, if the tags being filtered by have any.
		 * @param {number} followedByUserId Filter by user following the artists. By default there is no filtering.
		 * @param {EntryForApiContractStatus} status Filter by entry status (optional).
		 * @param {Array<string>} advancedFilters List of advanced filters (optional).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 100).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, AdditionDateAsc.
		 * @param {boolean} preferAccurateMatches Whether the search should prefer accurate matches. 
		 *             If this is true, entries that match by prefix will be moved first, instead of being sorted alphabetically.
		 *             Requires a text query. Does not support pagination.
		 *             This is mostly useful for autocomplete boxes.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for artist name (optional, defaults to Exact).
		 * @param {ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangFields} fields List of optional fields (optional). Possible values are Description, Groups, Members, Names, Tags, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_ArtistForApiContract} OK
		 */
		ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLang(query: string | null | undefined, artistTypes: string | null | undefined, allowBaseVoicebanks: boolean | null | undefined, tagName: Array<string> | null | undefined, tagId: Array<number> | null | undefined, childTags: boolean | null | undefined, followedByUserId: number | null | undefined, status: EntryForApiContractStatus | null | undefined, advancedFilters: Array<string> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangSort | null | undefined, preferAccurateMatches: boolean | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_ArtistForApiContract> {
			return this.http.get<PartialFindResult_ArtistForApiContract>(this.baseUri + 'api/artists?query=' + (query == null ? '' : encodeURIComponent(query)) + '&artistTypes=' + (artistTypes == null ? '' : encodeURIComponent(artistTypes)) + '&allowBaseVoicebanks=' + allowBaseVoicebanks + '&' + tagName?.map(z => `tagName=${encodeURIComponent(z)}`).join('&') + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&childTags=' + childTags + '&followedByUserId=' + followedByUserId + '&status=' + status + '&' + advancedFilters?.map(z => `advancedFilters=${encodeURIComponent(z)}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a comment.
		 * Normal users can edit their own comments, moderators can edit all comments.
		 * Requires login.
		 * Post api/artists/comments/{commentId}
		 * @param {number} commentId ID of the comment to be edited.
		 * @param {CommentForApiContract} requestBody New comment data. Only message can be edited.
		 * @return {void} 
		 */
		ApiArtistsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/artists/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Normal users can delete their own comments, moderators can delete all comments.
		 * Requires login.
		 * Delete api/artists/comments/{commentId}
		 * @param {number} commentId ID of the comment to be deleted.
		 * @return {void} 
		 */
		ApiArtistsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/artists/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of artist names. Ideal for autocomplete boxes.
		 * Get api/artists/names
		 * @param {string} query Text query.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Name match mode.
		 * @param {number} maxResults Maximum number of results.
		 * @return {Array<string>} OK
		 */
		ApiArtistsNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/artists/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets an artist by Id.
		 * Get api/artists/{id}
		 * @param {number} id Artist ID (required).
		 * @param {ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangFields} fields List of optional fields (optional). Possible values are Description, Groups, Members, Names, Tags, WebLinks.
		 * @param {ApiArtists_idGetByFieldsAndRelationsAndLangRelations} relations List of artist relations (optional). Possible values are LatestAlbums, PopularAlbums, LatestSongs, PopularSongs, All
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {ArtistForApiContract} OK
		 */
		ApiArtists_idGetByFieldsAndRelationsAndLang(id: number, fields: ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangFields | null | undefined, relations: ApiArtists_idGetByFieldsAndRelationsAndLangRelations | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<ArtistForApiContract> {
			return this.http.get<ArtistForApiContract>(this.baseUri + 'api/artists/' + id + '?fields=' + fields + '&relations=' + relations + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an artist.
		 * Delete api/artists/{id}
		 * @param {number} id ID of the artist to be deleted.
		 * @param {string} notes Notes.
		 * @return {void} 
		 */
		ApiArtists_idDeleteByNotes(id: number, notes: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/artists/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of comments for an artist.
		 * Pagination and sorting might be added later.
		 * Get api/artists/{id}/comments
		 * @param {number} id ID of the artist whose comments to load.
		 * @return {Array<CommentForApiContract>} OK
		 */
		ApiArtists_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<CommentForApiContract>> {
			return this.http.get<Array<CommentForApiContract>>(this.baseUri + 'api/artists/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Posts a new comment.
		 * Post api/artists/{id}/comments
		 * @param {number} id ID of the artist for which to create the comment.
		 * @param {CommentForApiContract} requestBody Comment data. Message and author must be specified. Author must match the logged in user.
		 * @return {CommentForApiContract} OK
		 */
		ApiArtists_idCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/artists/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a list of comments for an entry.
		 * Get api/comments/{entryType}-comments
		 * @param {EntryForApiContractEntryType} entryType Entry type.
		 * @param {number} entryId ID of the entry whose comments to load.
		 * @return {PartialFindResult_CommentForApiContract} OK
		 */
		ApiComments_entryType_commentsGetByEntryId(entryType: EntryForApiContractEntryType, entryId: number, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_CommentForApiContract> {
			return this.http.get<PartialFindResult_CommentForApiContract>(this.baseUri + 'api/comments/' + entryType + '-comments?entryId=' + entryId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Posts a new comment.
		 * Post api/comments/{entryType}-comments
		 * @param {EntryForApiContractEntryType} entryType Entry type.
		 * @param {CommentForApiContract} requestBody Comment data. Message, entry and author must be specified. Author must match the logged in user.
		 * @return {CommentForApiContract} OK
		 */
		ApiComments_entryType_commentsPost(entryType: EntryForApiContractEntryType, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/comments/' + entryType + '-comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a comment.
		 * Normal users can edit their own comments, moderators can edit all comments.
		 * Requires login.
		 * Post api/comments/{entryType}-comments/{commentId}
		 * @param {EntryForApiContractEntryType} entryType Entry type.
		 * @param {number} commentId ID of the comment to be edited.
		 * @param {CommentForApiContract} requestBody New comment data. Only message can be edited.
		 * @return {void} 
		 */
		ApiComments_entryType_comments_commentIdPost(entryType: EntryForApiContractEntryType, commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/comments/' + entryType + '-comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Normal users can delete their own comments, moderators can delete all comments.
		 * Requires login.
		 * Delete api/comments/{entryType}-comments/{commentId}
		 * @param {EntryForApiContractEntryType} entryType Entry type.
		 * @param {number} commentId ID of the comment to be deleted.
		 * @return {void} 
		 */
		ApiComments_entryType_comments_commentIdDelete(entryType: EntryForApiContractEntryType, commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/comments/' + entryType + '-comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/discussions/comments/{commentId}
		 * @return {void} 
		 */
		ApiDiscussionsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/discussions/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/discussions/comments/{commentId}
		 * @return {void} 
		 */
		ApiDiscussionsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/discussions/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/discussions/folders
		 * @return {Array<DiscussionFolderContract>} OK
		 */
		ApiDiscussionsFoldersGetByFields(fields: ApiDiscussionsFoldersGetByFieldsFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<DiscussionFolderContract>> {
			return this.http.get<Array<DiscussionFolderContract>>(this.baseUri + 'api/discussions/folders?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/discussions/folders
		 * @return {DiscussionFolderContract} OK
		 */
		ApiDiscussionsFoldersPost(requestBody: DiscussionFolderContract, headersHandler?: () => HttpHeaders): Observable<DiscussionFolderContract> {
			return this.http.post<DiscussionFolderContract>(this.baseUri + 'api/discussions/folders', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/discussions/folders/{folderId}/topics
		 * @return {Array<DiscussionTopicContract>} OK
		 */
		ApiDiscussionsFolders_folderIdTopicsGetByFields(folderId: number, fields: ApiDiscussionsFolders_folderIdTopicsGetByFieldsFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<DiscussionTopicContract>> {
			return this.http.get<Array<DiscussionTopicContract>>(this.baseUri + 'api/discussions/folders/' + folderId + '/topics?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/discussions/folders/{folderId}/topics
		 * @return {DiscussionTopicContract} OK
		 */
		ApiDiscussionsFolders_folderIdTopicsPost(folderId: number, requestBody: DiscussionTopicContract, headersHandler?: () => HttpHeaders): Observable<DiscussionTopicContract> {
			return this.http.post<DiscussionTopicContract>(this.baseUri + 'api/discussions/folders/' + folderId + '/topics', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/discussions/topics
		 * @return {PartialFindResult_DiscussionTopicContract} OK
		 */
		ApiDiscussionsTopicsGetByFolderIdAndStartAndMaxResultsAndGetTotalCountAndSortAndFields(folderId: number | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiDiscussionsTopicsGetByFolderIdAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsSort | null | undefined, fields: ApiDiscussionsFolders_folderIdTopicsGetByFieldsFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_DiscussionTopicContract> {
			return this.http.get<PartialFindResult_DiscussionTopicContract>(this.baseUri + 'api/discussions/topics?folderId=' + folderId + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/discussions/topics/{topicId}
		 * @return {DiscussionTopicContract} OK
		 */
		ApiDiscussionsTopics_topicIdGetByFields(topicId: number, fields: ApiDiscussionsFolders_folderIdTopicsGetByFieldsFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<DiscussionTopicContract> {
			return this.http.get<DiscussionTopicContract>(this.baseUri + 'api/discussions/topics/' + topicId + '?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/discussions/topics/{topicId}
		 * @return {void} 
		 */
		ApiDiscussionsTopics_topicIdPost(topicId: number, requestBody: DiscussionTopicContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/discussions/topics/' + topicId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/discussions/topics/{topicId}
		 * @return {void} 
		 */
		ApiDiscussionsTopics_topicIdDelete(topicId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/discussions/topics/' + topicId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/discussions/topics/{topicId}/comments
		 * @return {CommentForApiContract} OK
		 */
		ApiDiscussionsTopics_topicIdCommentsPost(topicId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/discussions/topics/' + topicId + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find entries.
		 * Get api/entries
		 * @param {string} query Entry name query (optional).
		 * @param {Array<string>} tagName Filter by tag name (optional).
		 * @param {Array<number>} tagId Filter by tag Id (optional).
		 * @param {boolean} childTags Include child tags, if the tags being filtered by have any.
		 * @param {ApiEntriesGetByQueryAndTagNameAndTagIdAndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangEntryTypes} entryTypes Included entry types (optional).
		 * @param {EntryForApiContractStatus} status Filter by entry status (optional).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 30).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiEntriesGetByQueryAndTagNameAndTagIdAndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for entry name (optional, defaults to Exact).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangEntryFields} fields List of optional fields (optional). Possible values are Description, MainPicture, Names, Tags, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_EntryForApiContract} OK
		 */
		ApiEntriesGetByQueryAndTagNameAndTagIdAndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(query: string | null | undefined, tagName: Array<string> | null | undefined, tagId: Array<number> | null | undefined, childTags: boolean | null | undefined, entryTypes: ApiEntriesGetByQueryAndTagNameAndTagIdAndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangEntryTypes | null | undefined, status: EntryForApiContractStatus | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiEntriesGetByQueryAndTagNameAndTagIdAndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangEntryFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_EntryForApiContract> {
			return this.http.get<PartialFindResult_EntryForApiContract>(this.baseUri + 'api/entries?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagName?.map(z => `tagName=${encodeURIComponent(z)}`).join('&') + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&childTags=' + childTags + '&entryTypes=' + entryTypes + '&status=' + status + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of entry names. Ideal for autocomplete boxes.
		 * Get api/entries/names
		 * @param {string} query Text query.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Name match mode.
		 * @param {number} maxResults Maximum number of results.
		 * @return {Array<string>} OK
		 */
		ApiEntriesNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/entries/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of PVs for songs.
		 * Get api/pvs/for-songs
		 * @param {string} author Uploader name (optional).
		 * @param {number} maxResults Maximum number of results.
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_PVForSongContract} OK
		 */
		ApiPvsFor_songsGetByAuthorAndMaxResultsAndGetTotalCountAndLang(author: string | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_PVForSongContract> {
			return this.http.get<PartialFindResult_PVForSongContract>(this.baseUri + 'api/pvs/for-songs?author=' + (author == null ? '' : encodeURIComponent(author)) + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a page of event series.
		 * Get api/releaseEventSeries
		 * @param {string} query Text query.
		 * @param {number} start First item to be retrieved (optional).
		 * @param {number} maxResults Maximum number of results to be loaded (optional).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for event name (optional).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_ReleaseEventSeriesContract} OK
		 */
		ApiReleaseEventSeriesGetByQueryAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndLang(query: string | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_ReleaseEventSeriesContract> {
			return this.http.get<PartialFindResult_ReleaseEventSeriesContract>(this.baseUri + 'api/releaseEventSeries?query=' + (query == null ? '' : encodeURIComponent(query)) + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&nameMatchMode=' + nameMatchMode + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an event series.
		 * Delete api/releaseEventSeries/{id}
		 * @param {number} id ID of the series to be deleted.
		 * @param {string} notes Notes.
		 * @param {boolean} hardDelete If true, the entry is hard deleted. Hard deleted entries cannot be restored normally, but they will be moved to trash.
		 *             If false, the entry is soft deleted, meaning it can still be restored.
		 * @return {void} 
		 */
		ApiReleaseEventSeries_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/releaseEventSeries/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a page of events.
		 * Get api/releaseEvents
		 * @param {string} query Event name query (optional).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for event name (optional, defaults to Auto).
		 * @param {number} seriesId Filter by series Id.
		 * @param {Date} afterDate Filter by events after this date (inclusive).
		 * @param {Date} beforeDate Filter by events before this date (exclusive).
		 * @param {EntryForApiContractEventCategory} category Filter by event category.
		 * @param {number} userCollectionId Filter to include only events in user's events (interested or attending).
		 * @param {Array<number>} tagId Filter by one or more tag Ids (optional).
		 * @param {boolean} childTags Include child tags, if the tags being filtered by have any.
		 * @param {Array<number>} artistId Filter by artist Id.
		 * @param {boolean} childVoicebanks Include child voicebanks, if the artist being filtered by has any.
		 * @param {boolean} includeMembers Include members of groups. This applies if {artistId} is a group.
		 * @param {EntryForApiContractStatus} status Filter by entry status.
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). 
		 *             Possible values are None, Name, Date, SeriesName.
		 * @param {ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangFields} fields Optional fields (optional). Possible values are Description, Series.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference.
		 * @return {PartialFindResult_ReleaseEventForApiContract} OK
		 */
		ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLang(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, seriesId: number | null | undefined, afterDate: Date | null | undefined, beforeDate: Date | null | undefined, category: EntryForApiContractEventCategory | null | undefined, userCollectionId: number | null | undefined, tagId: Array<number> | null | undefined, childTags: boolean | null | undefined, artistId: Array<number> | null | undefined, childVoicebanks: boolean | null | undefined, includeMembers: boolean | null | undefined, status: EntryForApiContractStatus | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangSort | null | undefined, fields: ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_ReleaseEventForApiContract> {
			return this.http.get<PartialFindResult_ReleaseEventForApiContract>(this.baseUri + 'api/releaseEvents?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&seriesId=' + seriesId + '&afterDate=' + afterDate?.toISOString() + '&beforeDate=' + beforeDate?.toISOString() + '&category=' + category + '&userCollectionId=' + userCollectionId + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&childTags=' + childTags + '&' + artistId?.map(z => `artistId=${z}`).join('&') + '&childVoicebanks=' + childVoicebanks + '&includeMembers=' + includeMembers + '&status=' + status + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find event names by a part of name.
		 * Matching is done anywhere from the name.
		 * Get api/releaseEvents/names
		 * @param {string} query Event name query, for example "Voc@loid".
		 * @param {number} maxResults Maximum number of search results.
		 * @return {Array<string>} OK
		 */
		ApiReleaseEventsNamesGetByQueryAndMaxResults(query: string | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/releaseEvents/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of albums for a specific event.
		 * Get api/releaseEvents/{eventId}/albums
		 * @param {number} eventId Release event ID.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields} fields List of optional album fields.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference.
		 * @return {Array<AlbumForApiContract>} OK
		 */
		ApiReleaseEvents_eventIdAlbumsGetByFieldsAndLang(eventId: number, fields: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForApiContract>> {
			return this.http.get<Array<AlbumForApiContract>>(this.baseUri + 'api/releaseEvents/' + eventId + '/albums?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of songs for a specific event.
		 * Get api/releaseEvents/{eventId}/published-songs
		 * @param {number} eventId Event ID.
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional song fields.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference.
		 * @return {Array<SongForApiContract>} OK
		 */
		ApiReleaseEvents_eventIdPublished_songsGetByFieldsAndLang(eventId: number, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/releaseEvents/' + eventId + '/published-songs?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new report.
		 * Post api/releaseEvents/{eventId}/reports
		 * @param {number} eventId Event to be reported.
		 * @param {ApiReleaseEvents_eventIdReportsPostByReportTypeAndNotesAndVersionNumberReportType} reportType Report type.
		 * @param {string} notes Notes. Optional.
		 * @param {number} versionNumber Version to be reported. Optional.
		 * @return {void} 
		 */
		ApiReleaseEvents_eventIdReportsPostByReportTypeAndNotesAndVersionNumber(eventId: number, reportType: ApiReleaseEvents_eventIdReportsPostByReportTypeAndNotesAndVersionNumberReportType, notes: string, versionNumber: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/releaseEvents/' + eventId + '/reports?reportType=' + reportType + '&notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&versionNumber=' + versionNumber, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/releaseEvents/{id}
		 * @return {ReleaseEventForApiContract} OK
		 */
		ApiReleaseEvents_idGetByFieldsAndLang(id: number, fields: ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReleaseEventForApiContract> {
			return this.http.get<ReleaseEventForApiContract>(this.baseUri + 'api/releaseEvents/' + id + '?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an event.
		 * Delete api/releaseEvents/{id}
		 * @param {number} id ID of the event to be deleted.
		 * @param {string} notes Notes.
		 * @param {boolean} hardDelete If true, the entry is hard deleted. Hard deleted entries cannot be restored normally, but they will be moved to trash.
		 *             If false, the entry is soft deleted, meaning it can still be restored.
		 * @return {void} 
		 */
		ApiReleaseEvents_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/releaseEvents/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a number of resource sets for a specific culture.
		 * Get api/resources/{cultureCode}
		 * @param {string} cultureCode Culture code, for example "en-US" or "fi-FI".
		 * @param {Array<string>} setNames Names of resource sets to be returned. More than one value can be specified. For example "artistTypeNames"
		 * @return {{[id: string]: {[id: string]: string } }} OK
		 */
		ApiResources_cultureCodeGetBySetNames(cultureCode: string, setNames: Array<string>, headersHandler?: () => HttpHeaders): Observable<{[id: string]: {[id: string]: string } }> {
			return this.http.get<{[id: string]: {[id: string]: string } }>(this.baseUri + 'api/resources/' + (cultureCode == null ? '' : encodeURIComponent(cultureCode)) + '&' + setNames.map(z => `setNames=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a song list.
		 * Post api/songLists
		 * @param {SongListForEditContract} requestBody Song list properties.
		 * @return {number} OK
		 */
		ApiSongListsPost(requestBody: SongListForEditContract, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/songLists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a comment.
		 * Normal users can edit their own comments, moderators can edit all comments.
		 * Requires login.
		 * Post api/songLists/comments/{commentId}
		 * @param {number} commentId ID of the comment to be edited.
		 * @param {CommentForApiContract} requestBody New comment data. Only message can be edited.
		 * @return {void} 
		 */
		ApiSongListsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/songLists/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Normal users can delete their own comments, moderators can delete all comments.
		 * Requires login.
		 * Delete api/songLists/comments/{commentId}
		 * @param {number} commentId ID of the comment to be deleted.
		 * @return {void} 
		 */
		ApiSongListsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songLists/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of featured song lists.
		 * Get api/songLists/featured
		 * @param {string} query Song list name query (optional).
		 * @param {Array<number>} tagId Filter by one or more tag Ids (optional).
		 * @param {boolean} childTags Include child tags, if the tags being filtered by have any.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for list name (optional, defaults to Auto).
		 * @param {EntryForApiContractSongListFeaturedCategory} featuredCategory Filter by a specific featured category. If empty, all categories are returned.
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiSongListsFeaturedGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndFeaturedCategoryAndStartAndMaxResultsAndGetTotalCountAndSortSort} sort List sort rule. Possible values are Nothing, Date, CreateDate, Name.
		 * @return {PartialFindResult_SongListForApiContract} OK
		 */
		ApiSongListsFeaturedGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndFeaturedCategoryAndStartAndMaxResultsAndGetTotalCountAndSort(query: string | null | undefined, tagId: Array<number> | null | undefined, childTags: boolean | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, featuredCategory: EntryForApiContractSongListFeaturedCategory | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiSongListsFeaturedGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndFeaturedCategoryAndStartAndMaxResultsAndGetTotalCountAndSortSort | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_SongListForApiContract> {
			return this.http.get<PartialFindResult_SongListForApiContract>(this.baseUri + 'api/songLists/featured?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&childTags=' + childTags + '&nameMatchMode=' + nameMatchMode + '&featuredCategory=' + featuredCategory + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of featuedd list names. Ideal for autocomplete boxes.
		 * Get api/songLists/featured/names
		 * @param {string} query Text query.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Name match mode. Words is treated the same as Partial.
		 * @param {EntryForApiContractSongListFeaturedCategory} featuredCategory Filter by a specific featured category. If empty, all categories are returned.
		 * @param {number} maxResults Maximum number of results.
		 * @return {Array<string>} OK
		 */
		ApiSongListsFeaturedNamesGetByQueryAndNameMatchModeAndFeaturedCategoryAndMaxResults(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, featuredCategory: EntryForApiContractSongListFeaturedCategory | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/songLists/featured/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&featuredCategory=' + featuredCategory + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a song list.
		 * Delete api/songLists/{id}
		 * @param {number} id ID of the list to be deleted.
		 * @param {string} notes Notes.
		 * @param {boolean} hardDelete If true, the entry is hard deleted. Hard deleted entries cannot be restored normally, but they will be moved to trash.
		 *             If false, the entry is soft deleted, meaning it can still be restored.
		 * @return {void} 
		 */
		ApiSongLists_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songLists/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of comments for a song list.
		 * Get api/songLists/{listId}/comments
		 * @param {number} listId ID of the list whose comments to load.
		 * @return {PartialFindResult_CommentForApiContract} OK
		 */
		ApiSongLists_listIdCommentsGet(listId: number, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_CommentForApiContract> {
			return this.http.get<PartialFindResult_CommentForApiContract>(this.baseUri + 'api/songLists/' + listId + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Posts a new comment.
		 * Post api/songLists/{listId}/comments
		 * @param {number} listId ID of the song list for which to create the comment.
		 * @param {CommentForApiContract} requestBody Comment data. Message and author must be specified. Author must match the logged in user.
		 * @return {CommentForApiContract} OK
		 */
		ApiSongLists_listIdCommentsPost(listId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/songLists/' + listId + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a list of songs in a song list.
		 * Get api/songLists/{listId}/songs
		 * @param {number} listId ID of the song list.
		 * @param {string} query Song name query (optional).
		 * @param {string} songTypes Filtered song types (optional).
		 * @param {SongForApiContractPvServices} pvServices Filter by one or more PV services (separated by commas). The song will pass the filter if it has a PV for any of the matched services.
		 * @param {Array<number>} tagId Filter by one or more tag Ids (optional).
		 * @param {Array<number>} artistId Filter by artist Id.
		 * @param {boolean} childVoicebanks Include child voicebanks, if the artist being filtered by has any.
		 * @param {Array<string>} advancedFilters List of advanced filters (optional).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiSongLists_listIdSongsGetByQueryAndSongTypesAndPvServicesAndTagIdAndArtistIdAndChildVoicebanksAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort} sort Song sort rule (optional, by default songs are sorted by song list order).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for song name (optional, defaults to Auto).
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_SongInListForApiContract} OK
		 */
		ApiSongLists_listIdSongsGetByQueryAndSongTypesAndPvServicesAndTagIdAndArtistIdAndChildVoicebanksAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(listId: number, query: string | null | undefined, songTypes: string | null | undefined, pvServices: SongForApiContractPvServices | null | undefined, tagId: Array<number> | null | undefined, artistId: Array<number> | null | undefined, childVoicebanks: boolean | null | undefined, advancedFilters: Array<string> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiSongLists_listIdSongsGetByQueryAndSongTypesAndPvServicesAndTagIdAndArtistIdAndChildVoicebanksAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_SongInListForApiContract> {
			return this.http.get<PartialFindResult_SongInListForApiContract>(this.baseUri + 'api/songLists/' + listId + '/songs?query=' + (query == null ? '' : encodeURIComponent(query)) + '&songTypes=' + (songTypes == null ? '' : encodeURIComponent(songTypes)) + '&pvServices=' + pvServices + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&' + artistId?.map(z => `artistId=${z}`).join('&') + '&childVoicebanks=' + childVoicebanks + '&' + advancedFilters?.map(z => `advancedFilters=${encodeURIComponent(z)}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find songs.
		 * Get api/songs
		 * @param {string} query Song name query (optional).
		 * @param {string} songTypes Filtered song types (optional). 
		 *             Possible values are Original, Remaster, Remix, Cover, Instrumental, Mashup, MusicPV, DramaPV, Other.
		 * @param {Date} afterDate Filter by songs published after this date (inclusive).
		 * @param {Date} beforeDate Filter by songs published before this date (exclusive).
		 * @param {Array<string>} tagName Filter by one or more tag names (optional).
		 * @param {Array<number>} tagId Filter by one or more tag Ids (optional).
		 * @param {boolean} childTags Include child tags, if the tags being filtered by have any.
		 * @param {Array<number>} artistId Filter by artist Id.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangArtistParticipationStatus} artistParticipationStatus Filter by artist participation status. Only valid if artistId is specified.
		 *             Everything (default): Show all songs by that artist (no filter).
		 *             OnlyMainAlbums: Show only main songs by that artist.
		 *             OnlyCollaborations: Show only collaborations by that artist.
		 * @param {boolean} childVoicebanks Include child voicebanks, if the artist being filtered by has any.
		 * @param {boolean} includeMembers Include members of groups. This applies if {artistId} is a group.
		 * @param {boolean} onlyWithPvs Whether to only include songs with at least one PV.
		 * @param {SongForApiContractPvServices} pvServices Filter by one or more PV services (separated by commas). The song will pass the filter if it has a PV for any of the matched services.
		 * @param {number} since Allow only entries that have been created at most this many hours ago. By default there is no filtering.
		 * @param {number} minScore Minimum rating score. Optional.
		 * @param {number} userCollectionId Filter by user's rated songs. By default there is no filtering.
		 * @param {number} releaseEventId Filter by release event. By default there is no filtering.
		 * @param {number} parentSongId Filter by parent song. By default there is no filtering.
		 * @param {EntryForApiContractStatus} status Filter by entry status (optional).
		 * @param {Array<string>} advancedFilters List of advanced filters (optional).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiSongLists_listIdSongsGetByQueryAndSongTypesAndPvServicesAndTagIdAndArtistIdAndChildVoicebanksAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, FavoritedTimes, RatingScore.
		 * @param {boolean} preferAccurateMatches Whether the search should prefer accurate matches. 
		 *             If this is true, entries that match by prefix will be moved first, instead of being sorted alphabetically.
		 *             Requires a text query. Does not support pagination.
		 *             This is mostly useful for autocomplete boxes.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for song name (optional, defaults to Exact).
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_SongForApiContract} OK
		 */
		ApiSongsGetByQueryAndSongTypesAndAfterDateAndBeforeDateAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndOnlyWithPvsAndPvServicesAndSinceAndMinScoreAndUserCollectionIdAndReleaseEventIdAndParentSongIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLang(query: string | null | undefined, songTypes: string | null | undefined, afterDate: Date | null | undefined, beforeDate: Date | null | undefined, tagName: Array<string> | null | undefined, tagId: Array<number> | null | undefined, childTags: boolean | null | undefined, artistId: Array<number> | null | undefined, artistParticipationStatus: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangArtistParticipationStatus | null | undefined, childVoicebanks: boolean | null | undefined, includeMembers: boolean | null | undefined, onlyWithPvs: boolean | null | undefined, pvServices: SongForApiContractPvServices | null | undefined, since: number | null | undefined, minScore: number | null | undefined, userCollectionId: number | null | undefined, releaseEventId: number | null | undefined, parentSongId: number | null | undefined, status: EntryForApiContractStatus | null | undefined, advancedFilters: Array<string> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiSongLists_listIdSongsGetByQueryAndSongTypesAndPvServicesAndTagIdAndArtistIdAndChildVoicebanksAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort | null | undefined, preferAccurateMatches: boolean | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_SongForApiContract> {
			return this.http.get<PartialFindResult_SongForApiContract>(this.baseUri + 'api/songs?query=' + (query == null ? '' : encodeURIComponent(query)) + '&songTypes=' + (songTypes == null ? '' : encodeURIComponent(songTypes)) + '&afterDate=' + afterDate?.toISOString() + '&beforeDate=' + beforeDate?.toISOString() + '&' + tagName?.map(z => `tagName=${encodeURIComponent(z)}`).join('&') + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&childTags=' + childTags + '&' + artistId?.map(z => `artistId=${z}`).join('&') + '&artistParticipationStatus=' + artistParticipationStatus + '&childVoicebanks=' + childVoicebanks + '&includeMembers=' + includeMembers + '&onlyWithPvs=' + onlyWithPvs + '&pvServices=' + pvServices + '&since=' + since + '&minScore=' + minScore + '&userCollectionId=' + userCollectionId + '&releaseEventId=' + releaseEventId + '&parentSongId=' + parentSongId + '&status=' + status + '&' + advancedFilters?.map(z => `advancedFilters=${encodeURIComponent(z)}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a song by PV.
		 * Get api/songs/byPv
		 * @param {PVContractService} pvService PV service (required). Possible values are NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili.
		 * @param {string} pvId PV Id (required). For example sm123456.
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {SongForApiContract} OK
		 */
		ApiSongsByPvGetByPvServiceAndPvIdAndFieldsAndLang(pvService: PVContractService, pvId: string, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongForApiContract> {
			return this.http.get<SongForApiContract>(this.baseUri + 'api/songs/byPv?pvService=' + pvService + '&pvId=' + (pvId == null ? '' : encodeURIComponent(pvId)) + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a comment.
		 * Normal users can edit their own comments, moderators can edit all comments.
		 * Requires login.
		 * Post api/songs/comments/{commentId}
		 * @param {number} commentId ID of the comment to be edited.
		 * @param {CommentForApiContract} requestBody New comment data. Only message can be edited.
		 * @return {void} 
		 */
		ApiSongsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/songs/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Normal users can delete their own comments, moderators can delete all comments.
		 * Requires login.
		 * Delete api/songs/comments/{commentId}
		 * @param {number} commentId ID of the comment to be deleted.
		 * @return {void} 
		 */
		ApiSongsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songs/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets list of highlighted songs, same as front page.
		 * Output is cached for 1 hour.
		 * Get api/songs/highlighted
		 * @return {Array<SongForApiContract>} OK
		 */
		ApiSongsHighlightedGetByLanguagePreferenceAndFields(languagePreference: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/songs/highlighted?languagePreference=' + languagePreference + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets lyrics by ID.
		 * Output is cached. Specify song version as parameter to refresh.
		 * Get api/songs/lyrics/{lyricsId}
		 * @param {number} lyricsId Lyrics ID.
		 * @return {LyricsForSongContract} OK
		 */
		ApiSongsLyrics_lyricsIdGet(lyricsId: number, headersHandler?: () => HttpHeaders): Observable<LyricsForSongContract> {
			return this.http.get<LyricsForSongContract>(this.baseUri + 'api/songs/lyrics/' + lyricsId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of song names. Ideal for autocomplete boxes.
		 * Get api/songs/names
		 * @param {string} query Text query.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Name match mode.
		 * @param {number} maxResults Maximum number of results.
		 * @return {Array<string>} OK
		 */
		ApiSongsNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/songs/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets top rated songs.
		 * Get api/songs/top-rated
		 * @param {number} durationHours Duration in hours from which to get songs.
		 * @param {Date} startDate Lower bound of the date. Optional.
		 * @param {ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreferenceFilterBy} filterBy Filtering mode.
		 * @param {ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreferenceVocalist} vocalist Vocalist selection.
		 * @param {number} maxResults Maximum number of results to be loaded (optional).
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields Optional song fields to load.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} languagePreference Language preference.
		 * @return {Array<SongForApiContract>} OK
		 */
		ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreference(durationHours: number | null | undefined, startDate: Date | null | undefined, filterBy: ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreferenceFilterBy | null | undefined, vocalist: ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreferenceVocalist | null | undefined, maxResults: number | null | undefined, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, languagePreference: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/songs/top-rated?durationHours=' + durationHours + '&startDate=' + startDate?.toISOString() + '&filterBy=' + filterBy + '&vocalist=' + vocalist + '&maxResults=' + maxResults + '&fields=' + fields + '&languagePreference=' + languagePreference, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a song by Id.
		 * Get api/songs/{id}
		 * @param {number} id Song Id (required).
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional fields (optional). 
		 *             Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {SongForApiContract} OK
		 */
		ApiSongs_idGetByFieldsAndLang(id: number, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongForApiContract> {
			return this.http.get<SongForApiContract>(this.baseUri + 'api/songs/' + id + '?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a song.
		 * Delete api/songs/{id}
		 * @param {number} id ID of the song to be deleted.
		 * @param {string} notes Notes.
		 * @return {void} 
		 */
		ApiSongs_idDeleteByNotes(id: number, notes: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songs/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of comments for a song.
		 * Pagination and sorting might be added later.
		 * Get api/songs/{id}/comments
		 * @param {number} id ID of the song whose comments to load.
		 * @return {Array<CommentForApiContract>} OK
		 */
		ApiSongs_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<CommentForApiContract>> {
			return this.http.get<Array<CommentForApiContract>>(this.baseUri + 'api/songs/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Posts a new comment.
		 * Post api/songs/{id}/comments
		 * @param {number} id ID of the song for which to create the comment.
		 * @param {CommentForApiContract} requestBody Comment data. Message and author must be specified. Author must match the logged in user.
		 * @return {CommentForApiContract} OK
		 */
		ApiSongs_idCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/songs/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets derived (alternate versions) of a song.
		 * Pagination and sorting might be added later.
		 * Get api/songs/{id}/derived
		 * @param {number} id Song Id (required).
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional fields (optional). 
		 *             Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {Array<SongForApiContract>} OK
		 */
		ApiSongs_idDerivedGetByFieldsAndLang(id: number, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/songs/' + id + '/derived?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get ratings for a song.
		 * The result includes ratings and user information.
		 * For users who have requested not to make their ratings public, the user will be empty.
		 * Get api/songs/{id}/ratings
		 * @param {number} id Song ID.
		 * @param {ApiSongs_idRatingsGetByUserFieldsAndLangUserFields} userFields Optional fields for the users.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference.
		 * @return {Array<RatedSongForUserForApiContract>} OK
		 */
		ApiSongs_idRatingsGetByUserFieldsAndLang(id: number, userFields: ApiSongs_idRatingsGetByUserFieldsAndLangUserFields, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<RatedSongForUserForApiContract>> {
			return this.http.get<Array<RatedSongForUserForApiContract>>(this.baseUri + 'api/songs/' + id + '/ratings?userFields=' + userFields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add or update rating for a specific song, for the currently logged in user.
		 * If the user has already rated the song, any previous rating is replaced.
		 * Authorization cookie must be included.
		 * This API supports CORS.
		 * Post api/songs/{id}/ratings
		 * @param {number} id ID of the song to be rated.
		 * @param {SongRatingContract} requestBody Rating to be given. Possible values are Nothing, Like, Favorite.
		 * @return {void} 
		 */
		ApiSongs_idRatingsPost(id: number, requestBody: SongRatingContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/songs/' + id + '/ratings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets related songs.
		 * Get api/songs/{id}/related
		 * @param {number} id Song whose related songs are to be queried.
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields Optional song fields.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference.
		 * @return {RelatedSongsContract} OK
		 */
		ApiSongs_idRelatedGetByFieldsAndLang(id: number, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<RelatedSongsContract> {
			return this.http.get<RelatedSongsContract>(this.baseUri + 'api/songs/' + id + '/related?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find tags.
		 * Get api/tags
		 * @param {string} query Tag name query (optional).
		 * @param {boolean} allowChildren Whether to allow child tags. If this is false, only root tags (that aren't children of any other tag) will be included.
		 * @param {string} categoryName Filter tags by category (optional). If specified, this must be an exact match (case insensitive).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 30).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for song name (optional, defaults to Exact).
		 * @param {ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetSort} sort Sort rule (optional, by default tags are sorted by name).Possible values are Name and UsageCount.
		 * @param {boolean} preferAccurateMatches Whether the search should prefer accurate matches. 
		 *             If this is true, entries that match by prefix will be moved first, instead of being sorted alphabetically.
		 *             Requires a text query. Does not support pagination.
		 *             This is mostly useful for autocomplete boxes.
		 * @param {ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields} fields List of optional fields (optional).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_TagForApiContract} OK
		 */
		ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTarget(query: string | null | undefined, allowChildren: boolean | null | undefined, categoryName: string | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, sort: ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetSort | null | undefined, preferAccurateMatches: boolean | null | undefined, fields: ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, target: ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetTarget | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_TagForApiContract> {
			return this.http.get<PartialFindResult_TagForApiContract>(this.baseUri + 'api/tags?query=' + (query == null ? '' : encodeURIComponent(query)) + '&allowChildren=' + allowChildren + '&categoryName=' + (categoryName == null ? '' : encodeURIComponent(categoryName)) + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&nameMatchMode=' + nameMatchMode + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&fields=' + fields + '&lang=' + lang + '&target=' + target, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new tag.
		 * Post api/tags
		 * @param {string} name Tag English name. Tag names must be unique.
		 * @return {TagBaseContract} OK
		 */
		ApiTagsPostByName(name: string, headersHandler?: () => HttpHeaders): Observable<TagBaseContract> {
			return this.http.post<TagBaseContract>(this.baseUri + 'api/tags?name=' + (name == null ? '' : encodeURIComponent(name)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * DEPRECATED. Gets a tag by name.
		 * Get api/tags/byName/{name}
		 * @param {string} name Tag name (required).
		 * @param {ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields} fields List of optional fields (optional).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {TagForApiContract} OK
		 */
		ApiTagsByName_nameGetByFieldsAndLang(name: string, fields: ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagForApiContract> {
			return this.http.get<TagForApiContract>(this.baseUri + 'api/tags/byName/' + (name == null ? '' : encodeURIComponent(name)) + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of tag category names.
		 * Get api/tags/categoryNames
		 * @return {Array<string>} OK
		 */
		ApiTagsCategoryNamesGetByQueryAndNameMatchMode(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/tags/categoryNames?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a comment.
		 * Normal users can edit their own comments, moderators can edit all comments.
		 * Requires login.
		 * Post api/tags/comments/{commentId}
		 * @param {number} commentId ID of the comment to be edited.
		 * @param {CommentForApiContract} requestBody New comment data. Only message can be edited.
		 * @return {void} 
		 */
		ApiTagsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/tags/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Normal users can delete their own comments, moderators can delete all comments.
		 * Requires login.
		 * Delete api/tags/comments/{commentId}
		 * @param {number} commentId ID of the comment to be deleted.
		 * @return {void} 
		 */
		ApiTagsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/tags/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find tag names by a part of name.
		 * Matching is done anywhere from the name.
		 * Get api/tags/names
		 * @param {string} query Tag name query, for example "rock".
		 * @param {boolean} allowAliases Whether to find tags that are aliases of other tags as well. 
		 *             If false, only tags that are not aliases will be listed.
		 * @param {number} maxResults Maximum number of search results.
		 * @return {Array<string>} OK
		 */
		ApiTagsNamesGetByQueryAndAllowAliasesAndMaxResults(query: string | null | undefined, allowAliases: boolean | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/tags/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&allowAliases=' + allowAliases + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the most common tags in a category.
		 * Get api/tags/top
		 * @param {string} categoryName Tag category, for example "Genres". Optional - if not specified, no filtering is done.
		 * @param {number} maxResults Maximum number of tags to return.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {Array<TagBaseContract>} OK
		 */
		ApiTagsTopGetByCategoryNameAndMaxResultsAndLang(categoryName: string | null | undefined, maxResults: number | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<TagBaseContract>> {
			return this.http.get<Array<TagBaseContract>>(this.baseUri + 'api/tags/top?categoryName=' + (categoryName == null ? '' : encodeURIComponent(categoryName)) + '&maxResults=' + maxResults + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a tag by ID.
		 * Get api/tags/{id}
		 * @param {number} id Tag ID (required).
		 * @param {ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields} fields List of optional fields (optional).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {TagForApiContract} OK
		 */
		ApiTags_idGetByFieldsAndLang(id: number, fields: ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagForApiContract> {
			return this.http.get<TagForApiContract>(this.baseUri + 'api/tags/' + id + '?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a tag.
		 * Delete api/tags/{id}
		 * @param {number} id ID of the tag to be deleted.
		 * @param {string} notes Notes (optional).
		 * @param {boolean} hardDelete If true, the entry is hard deleted. Hard deleted entries cannot be restored normally, but they will be moved to trash.
		 *             If false, the entry is soft deleted, meaning it can still be restored.
		 * @return {void} 
		 */
		ApiTags_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/tags/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of child tags for a tag.
		 * Only direct children will be included.
		 * Get api/tags/{tagId}/children
		 * @param {number} tagId ID of the tag whose children to load.
		 * @param {ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields} fields List of optional fields (optional).
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {Array<TagForApiContract>} OK
		 */
		ApiTags_tagIdChildrenGetByFieldsAndLang(tagId: number, fields: ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<TagForApiContract>> {
			return this.http.get<Array<TagForApiContract>>(this.baseUri + 'api/tags/' + tagId + '/children?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of comments for a tag.
		 * Note: pagination and sorting might be added later.
		 * Get api/tags/{tagId}/comments
		 * @param {number} tagId ID of the tag whose comments to load.
		 * @return {PartialFindResult_CommentForApiContract} OK
		 */
		ApiTags_tagIdCommentsGet(tagId: number, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_CommentForApiContract> {
			return this.http.get<PartialFindResult_CommentForApiContract>(this.baseUri + 'api/tags/' + tagId + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Posts a new comment.
		 * Post api/tags/{tagId}/comments
		 * @param {number} tagId ID of the tag for which to create the comment.
		 * @param {CommentForApiContract} requestBody Comment data. Message and author must be specified. Author must match the logged in user.
		 * @return {CommentForApiContract} OK
		 */
		ApiTags_tagIdCommentsPost(tagId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/tags/' + tagId + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new report.
		 * Post api/tags/{tagId}/reports
		 * @param {number} tagId Tag to be reported.
		 * @param {ApiReleaseEvents_eventIdReportsPostByReportTypeAndNotesAndVersionNumberReportType} reportType Report type.
		 * @param {string} notes Notes. Optional.
		 * @param {number} versionNumber Version to be reported. Optional.
		 * @return {void} 
		 */
		ApiTags_tagIdReportsPostByReportTypeAndNotesAndVersionNumber(tagId: number, reportType: ApiReleaseEvents_eventIdReportsPostByReportTypeAndNotesAndVersionNumberReportType, notes: string, versionNumber: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/tags/' + tagId + '/reports?reportType=' + reportType + '&notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&versionNumber=' + versionNumber, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of users.
		 * Get api/users
		 * @param {string} query User name query (optional).
		 * @param {UserForApiContractGroupId} groups Filter by user group. Only one value supported for now. Optional.
		 * @param {Date} joinDateAfter Filter by users who joined after this date (inclusive).
		 * @param {Date} joinDateBefore Filter by users who joined before this date (exclusive).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Name match mode.
		 * @param {number} start Index of the first entry to be loaded.
		 * @param {number} maxResults Maximum number of results to be loaded.
		 * @param {boolean} getTotalCount Whether to get total number of results.
		 * @param {ApiUsersGetByQueryAndGroupsAndJoinDateAfterAndJoinDateBeforeAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndIncludeDisabledAndOnlyVerifiedAndKnowsLanguageAndFieldsSort} sort Sort rule.
		 * @param {boolean} includeDisabled Whether to include disabled user accounts.
		 * @param {boolean} onlyVerified Whether to only include verified artists.
		 * @param {string} knowsLanguage Filter by known language (optional). This is the ISO 639-1 language code, for example "en" or "zh".
		 * @param {ApiSongs_idRatingsGetByUserFieldsAndLangUserFields} fields Optional fields. Possible values are None and MainPicture. Optional.
		 * @return {PartialFindResult_UserForApiContract} OK
		 */
		ApiUsersGetByQueryAndGroupsAndJoinDateAfterAndJoinDateBeforeAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndIncludeDisabledAndOnlyVerifiedAndKnowsLanguageAndFields(query: string | null | undefined, groups: UserForApiContractGroupId | null | undefined, joinDateAfter: Date | null | undefined, joinDateBefore: Date | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiUsersGetByQueryAndGroupsAndJoinDateAfterAndJoinDateBeforeAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndIncludeDisabledAndOnlyVerifiedAndKnowsLanguageAndFieldsSort | null | undefined, includeDisabled: boolean | null | undefined, onlyVerified: boolean | null | undefined, knowsLanguage: string | null | undefined, fields: ApiSongs_idRatingsGetByUserFieldsAndLangUserFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_UserForApiContract> {
			return this.http.get<PartialFindResult_UserForApiContract>(this.baseUri + 'api/users?query=' + (query == null ? '' : encodeURIComponent(query)) + '&groups=' + groups + '&joinDateAfter=' + joinDateAfter?.toISOString() + '&joinDateBefore=' + joinDateBefore?.toISOString() + '&nameMatchMode=' + nameMatchMode + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&includeDisabled=' + includeDisabled + '&onlyVerified=' + onlyVerified + '&knowsLanguage=' + (knowsLanguage == null ? '' : encodeURIComponent(knowsLanguage)) + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about the currently logged in user.
		 * Requires login information.
		 * This API supports CORS, and is restricted to specific origins.
		 * Get api/users/current
		 * @param {ApiSongs_idRatingsGetByUserFieldsAndLangUserFields} fields Optional fields.
		 * @return {UserForApiContract} OK
		 */
		ApiUsersCurrentGetByFields(fields: ApiSongs_idRatingsGetByUserFieldsAndLangUserFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserForApiContract> {
			return this.http.get<UserForApiContract>(this.baseUri + 'api/users/current?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add or update collection status, media type and rating for a specific album, for the currently logged in user.
		 * If the user has already rated the album, any previous rating is replaced.
		 * Authorization cookie must be included.
		 * Post api/users/current/albums/{albumId}
		 * @param {number} albumId ID of the album to be rated.
		 * @param {AlbumForUserForApiContractPurchaseStatus} collectionStatus Collection status. Possible values are Nothing, Wishlisted, Ordered and Owned.
		 * @param {AlbumForUserForApiContractMediaType} mediaType Album media type. Possible values are PhysicalDisc, DigitalDownload and Other.
		 * @param {number} rating Rating to be given. Possible values are between 0 and 5.
		 * @return {string} OK
		 */
		ApiUsersCurrentAlbums_albumIdPostByCollectionStatusAndMediaTypeAndRating(albumId: number, collectionStatus: AlbumForUserForApiContractPurchaseStatus, mediaType: AlbumForUserForApiContractMediaType, rating: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/users/current/albums/' + albumId + '?collectionStatus=' + collectionStatus + '&mediaType=' + mediaType + '&rating=' + rating, null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Post api/users/current/followedTags/{tagId}
		 * @return {void} 
		 */
		ApiUsersCurrentFollowedTags_tagIdPost(tagId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/current/followedTags/' + tagId, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/users/current/followedTags/{tagId}
		 * @return {void} 
		 */
		ApiUsersCurrentFollowedTags_tagIdDelete(tagId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/users/current/followedTags/' + tagId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets currently logged in user's rating for a song.
		 * Requires authentication.
		 * Get api/users/current/ratedSongs/{songId}
		 * @param {number} songId ID of the song whose rating is to be checked.
		 * @return {RatedSongForUserForApiContractRating} OK
		 */
		ApiUsersCurrentRatedSongs_songIdGet(songId: number, headersHandler?: () => HttpHeaders): Observable<RatedSongForUserForApiContractRating> {
			return this.http.get<RatedSongForUserForApiContractRating>(this.baseUri + 'api/users/current/ratedSongs/' + songId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Refresh entry edit status, indicating that the current user is still editing that entry.
		 * Post api/users/current/refreshEntryEdit
		 * @param {EntryForApiContractEntryType} entryType Type of entry.
		 * @param {number} entryId Entry ID.
		 * @return {void} 
		 */
		ApiUsersCurrentRefreshEntryEditPostByEntryTypeAndEntryId(entryType: EntryForApiContractEntryType, entryId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/current/refreshEntryEdit?entryType=' + entryType + '&entryId=' + entryId, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Appends tags for a song, by the currently logged in user.
		 * This can only be used to add tags - existing tags will not be removed.
		 * Nothing will be done for tags that are already applied by the current user for the song.
		 * Authorization cookie is required.
		 * Post api/users/current/songTags/{songId}
		 * @param {number} songId ID of the song to be tagged.
		 * @param {Array<TagBaseContract>} requestBody List of tags to be appended.
		 * @return {void} 
		 */
		ApiUsersCurrentSongTags_songIdPost(songId: number, requestBody: Array<TagBaseContract>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/current/songTags/' + songId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a user message.
		 * The message will be marked as read.
		 * User can only load messages from their own inbox.
		 * Get api/users/messages/{messageId}
		 * @param {number} messageId ID of the message.
		 * @return {UserMessageContract} OK
		 */
		ApiUsersMessages_messageIdGet(messageId: number, headersHandler?: () => HttpHeaders): Observable<UserMessageContract> {
			return this.http.get<UserMessageContract>(this.baseUri + 'api/users/messages/' + messageId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of user names. Ideal for autocomplete boxes.
		 * Get api/users/names
		 * @param {string} query Text query.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Name match mode. Words is treated the same as Partial.
		 * @param {number} maxResults Maximum number of results.
		 * @param {boolean} includeDisabled Whether to include disabled user accounts. If false, disabled accounts are excluded.
		 * @return {Array<string>} OK
		 */
		ApiUsersNamesGetByQueryAndNameMatchModeAndMaxResultsAndIncludeDisabled(query: string | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, maxResults: number | null | undefined, includeDisabled: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/users/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults + '&includeDisabled=' + includeDisabled, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a comment.
		 * Normal users can edit their own comments, moderators can edit all comments.
		 * Requires login.
		 * Post api/users/profileComments/{commentId}
		 * @param {number} commentId ID of the comment to be edited.
		 * @param {CommentForApiContract} requestBody New comment data. Only message can be edited.
		 * @return {void} 
		 */
		ApiUsersProfileComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/profileComments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Normal users can delete their own comments, moderators can delete all comments.
		 * Requires login.
		 * Delete api/users/profileComments/{commentId}
		 * @param {number} commentId ID of the comment to be deleted.
		 * @return {void} 
		 */
		ApiUsersProfileComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/users/profileComments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets user by ID.
		 * Get api/users/{id}
		 * @param {number} id User ID.
		 * @param {ApiSongs_idRatingsGetByUserFieldsAndLangUserFields} fields Optional fields.
		 * @return {UserForApiContract} OK
		 */
		ApiUsers_idGetByFields(id: number, fields: ApiSongs_idRatingsGetByUserFieldsAndLangUserFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserForApiContract> {
			return this.http.get<UserForApiContract>(this.baseUri + 'api/users/' + id + '?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of albums in a user's collection.
		 * This includes albums that have been rated by the user as well as albums that the user has bought or wishlisted.
		 * Note that the user might have set his album ownership status and media type as private, in which case those properties are not included.
		 * Get api/users/{id}/albums
		 * @param {number} id ID of the user whose albums are to be browsed.
		 * @param {string} query Album name query (optional).
		 * @param {number} tagId Filter by tag Id (optional).
		 * @param {string} tag Filter by tag (optional).
		 * @param {number} artistId Filter by album artist (optional).
		 * @param {ApiUsers_idAlbumsGetByQueryAndTagIdAndTagAndArtistIdAndPurchaseStatusesAndReleaseEventIdAndAlbumTypesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangPurchaseStatuses} purchaseStatuses Filter by a comma-separated list of purchase statuses (optional). Possible values are Nothing, Wishlisted, Ordered, Owned, and all combinations of these.
		 * @param {number} releaseEventId Filter by release event. Optional.
		 * @param {EntryForApiContractDiscType} albumTypes Filter by album type (optional).
		 * @param {Array<string>} advancedFilters List of advanced filters (optional).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). Possible values are None, Name, ReleaseDate, AdditionDate, RatingAverage, RatingTotal, CollectionCount.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for album name (optional, defaults to Auto).
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields} fields List of optional fields (optional). Possible values are Artists, MainPicture, Names, PVs, Tags, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_AlbumForUserForApiContract} OK
		 */
		ApiUsers_idAlbumsGetByQueryAndTagIdAndTagAndArtistIdAndPurchaseStatusesAndReleaseEventIdAndAlbumTypesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(id: number, query: string | null | undefined, tagId: number | null | undefined, tag: string | null | undefined, artistId: number | null | undefined, purchaseStatuses: ApiUsers_idAlbumsGetByQueryAndTagIdAndTagAndArtistIdAndPurchaseStatusesAndReleaseEventIdAndAlbumTypesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangPurchaseStatuses | null | undefined, releaseEventId: number | null | undefined, albumTypes: EntryForApiContractDiscType | null | undefined, advancedFilters: Array<string> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangSort | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_AlbumForUserForApiContract> {
			return this.http.get<PartialFindResult_AlbumForUserForApiContract>(this.baseUri + 'api/users/' + id + '/albums?query=' + (query == null ? '' : encodeURIComponent(query)) + '&tagId=' + tagId + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&artistId=' + artistId + '&purchaseStatuses=' + purchaseStatuses + '&releaseEventId=' + releaseEventId + '&albumTypes=' + albumTypes + '&' + advancedFilters?.map(z => `advancedFilters=${encodeURIComponent(z)}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of events a user has subscribed to.
		 * Get api/users/{id}/events
		 * @param {number} id User ID.
		 * @param {ApiUsers_idEventsGetByRelationshipTypeRelationshipType} relationshipType Type of event subscription.
		 * @return {Array<ReleaseEventForApiContract>} OK
		 */
		ApiUsers_idEventsGetByRelationshipType(id: number, relationshipType: ApiUsers_idEventsGetByRelationshipTypeRelationshipType, headersHandler?: () => HttpHeaders): Observable<Array<ReleaseEventForApiContract>> {
			return this.http.get<Array<ReleaseEventForApiContract>>(this.baseUri + 'api/users/' + id + '/events?relationshipType=' + relationshipType, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of artists followed by a user.
		 * Get api/users/{id}/followedArtists
		 * @param {number} id ID of the user whose followed artists are to be browsed.
		 * @param {string} query Artist name query (optional).
		 * @param {Array<number>} tagId Filter by tag Id (optional). This filter can be specified multiple times.
		 * @param {EntryForApiContractArtistType} artistType Filter by artist type.
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, AdditionDateAsc.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for artist name (optional, defaults to Auto).
		 * @param {ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangFields} fields List of optional fields (optional). Possible values are Description, Groups, Members, Names, Tags, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_ArtistForUserForApiContract} OK
		 */
		ApiUsers_idFollowedArtistsGetByQueryAndTagIdAndArtistTypeAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(id: number, query: string | null | undefined, tagId: Array<number> | null | undefined, artistType: EntryForApiContractArtistType | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangSort | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_ArtistForUserForApiContract> {
			return this.http.get<PartialFindResult_ArtistForUserForApiContract>(this.baseUri + 'api/users/' + id + '/followedArtists?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&artistType=' + artistType + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of messages.
		 * Get api/users/{id}/messages
		 * @param {number} id User ID. Must be the currently logged in user (loading messages for another user is not allowed).
		 * @param {UserMessageContractInbox} inbox Type of inbox. Possible values are Nothing (load all, default), Received, Sent, Notifications.
		 * @param {boolean} unread Whether to only load unread messages. Loading unread messages is only possible for received messages and notifications (not sent messages).
		 * @param {number} anotherUserId Filter by id of the other user (either sender or receiver).
		 * @param {number} start Index of the first entry to be loaded.
		 * @param {number} maxResults Maximum number of results to be loaded.
		 * @param {boolean} getTotalCount Whether to get total number of results.
		 * @return {PartialFindResult_UserMessageContract} OK
		 */
		ApiUsers_idMessagesGetByInboxAndUnreadAndAnotherUserIdAndStartAndMaxResultsAndGetTotalCount(id: number, inbox: UserMessageContractInbox | null | undefined, unread: boolean | null | undefined, anotherUserId: number | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_UserMessageContract> {
			return this.http.get<PartialFindResult_UserMessageContract>(this.baseUri + 'api/users/' + id + '/messages?inbox=' + inbox + '&unread=' + unread + '&anotherUserId=' + anotherUserId + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new message.
		 * Post api/users/{id}/messages
		 * @param {number} id User ID. Must be logged in user.
		 * @param {UserMessageContract} requestBody Message data.
		 * @return {UserMessageContract} OK
		 */
		ApiUsers_idMessagesPost(id: number, requestBody: UserMessageContract, headersHandler?: () => HttpHeaders): Observable<UserMessageContract> {
			return this.http.post<UserMessageContract>(this.baseUri + 'api/users/' + id + '/messages', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a list of user messages.
		 * Delete api/users/{id}/messages
		 * @param {number} id ID of the user whose messages to delete.
		 * @param {Array<number>} messageId IDs of messages.
		 * @return {void} 
		 */
		ApiUsers_idMessagesDeleteByMessageId(id: number, messageId: Array<number>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/users/' + id + '/messages?' + messageId.map(z => `messageId=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of comments posted on user's profile.
		 * Get api/users/{id}/profileComments
		 * @param {number} id ID of the user whose comments are to be retrieved.
		 * @param {number} start Index of the first comment to be loaded.
		 * @param {number} maxResults Maximum number of comments to load.
		 * @param {boolean} getTotalCount Whether to load the total number of comments.
		 * @return {PartialFindResult_CommentForApiContract} OK
		 */
		ApiUsers_idProfileCommentsGetByStartAndMaxResultsAndGetTotalCount(id: number, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_CommentForApiContract> {
			return this.http.get<PartialFindResult_CommentForApiContract>(this.baseUri + 'api/users/' + id + '/profileComments?start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Posts a new comment.
		 * Post api/users/{id}/profileComments
		 * @param {number} id ID of the user for whom to create the comment.
		 * @param {CommentForApiContract} requestBody Comment data. Message and author must be specified. Author must match the logged in user.
		 * @return {CommentForApiContract} OK
		 */
		ApiUsers_idProfileCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/users/' + id + '/profileComments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a list of songs rated by a user.
		 * Get api/users/{id}/ratedSongs
		 * @param {number} id ID of the user whose songs are to be browsed.
		 * @param {string} query Song name query (optional).
		 * @param {string} tagName Filter by tag name (optional).
		 * @param {Array<number>} tagId Filter by tag Id (optional). This filter can be specified multiple times.
		 * @param {Array<number>} artistId Filter by song artist (optional).
		 * @param {boolean} childVoicebanks Include child voicebanks, if the artist being filtered by has any.
		 * @param {ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagIdAndArtistIdAndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangArtistGrouping} artistGrouping Logical grouping for artists.
		 * @param {RatedSongForUserForApiContractRating} rating Filter songs by given rating (optional).
		 * @param {number} songListId Filter songs by song list (optional).
		 * @param {boolean} groupByRating Group results by rating so that highest rated are first.
		 * @param {SongForApiContractPvServices} pvServices Filter by one or more PV services (separated by commas). The song will pass the filter if it has a PV for any of the matched services.
		 * @param {Array<string>} advancedFilters List of advanced filters (optional).
		 * @param {number} start First item to be retrieved (optional, defaults to 0).
		 * @param {number} maxResults Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
		 * @param {boolean} getTotalCount Whether to load total number of items (optional, default to false).
		 * @param {ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagIdAndArtistIdAndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort} sort Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, FavoritedTimes, RatingScore.
		 * @param {ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode} nameMatchMode Match mode for song name (optional, defaults to Auto).
		 * @param {ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields} fields List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
		 * @param {ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang} lang Content language preference (optional).
		 * @return {PartialFindResult_RatedSongForUserForApiContract} OK
		 */
		ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagIdAndArtistIdAndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(id: number, query: string | null | undefined, tagName: string | null | undefined, tagId: Array<number> | null | undefined, artistId: Array<number> | null | undefined, childVoicebanks: boolean | null | undefined, artistGrouping: ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagIdAndArtistIdAndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangArtistGrouping | null | undefined, rating: RatedSongForUserForApiContractRating | null | undefined, songListId: number | null | undefined, groupByRating: boolean | null | undefined, pvServices: SongForApiContractPvServices | null | undefined, advancedFilters: Array<string> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagIdAndArtistIdAndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, fields: ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields | null | undefined, lang: ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_RatedSongForUserForApiContract> {
			return this.http.get<PartialFindResult_RatedSongForUserForApiContract>(this.baseUri + 'api/users/' + id + '/ratedSongs?query=' + (query == null ? '' : encodeURIComponent(query)) + '&tagName=' + (tagName == null ? '' : encodeURIComponent(tagName)) + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&' + artistId?.map(z => `artistId=${z}`).join('&') + '&childVoicebanks=' + childVoicebanks + '&artistGrouping=' + artistGrouping + '&rating=' + rating + '&songListId=' + songListId + '&groupByRating=' + groupByRating + '&pvServices=' + pvServices + '&' + advancedFilters?.map(z => `advancedFilters=${encodeURIComponent(z)}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a specific user's rating for a song.
		 * Get api/users/{id}/ratedSongs/{songId}
		 * @param {number} id User whose rating is to be checked.
		 * @param {number} songId ID of the song whose rating is to be checked.
		 * @return {RatedSongForUserForApiContractRating} OK
		 */
		ApiUsers_idRatedSongs_songIdGet(id: number, songId: number, headersHandler?: () => HttpHeaders): Observable<RatedSongForUserForApiContractRating> {
			return this.http.get<RatedSongForUserForApiContractRating>(this.baseUri + 'api/users/' + id + '/ratedSongs/' + songId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/users/{id}/reports
		 * @return {boolean} OK
		 */
		ApiUsers_idReportsPost(id: number, requestBody: CreateReportModel, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/users/' + id + '/reports', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates user setting.
		 * Post api/users/{id}/settings/{settingName}
		 * @param {number} id ID of the user to be updated. This must match the current user OR be unspecified (or 0) if the user is not logged in.
		 * @param {string} settingName Name of the setting to be updated, for example 'showChatBox'.
		 * @param {string} requestBody Setting value, for example 'false'.
		 * @return {void} 
		 */
		ApiUsers_idSettings_settingNamePost(id: number, settingName: string, requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/' + id + '/settings/' + (settingName == null ? '' : encodeURIComponent(settingName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/users/{id}/songLists
		 * @return {PartialFindResult_SongListForApiContract} OK
		 */
		ApiUsers_idSongListsGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndFields(id: number, query: string | null | undefined, tagId: Array<number> | null | undefined, childTags: boolean | null | undefined, nameMatchMode: ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ApiSongListsFeaturedGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndFeaturedCategoryAndStartAndMaxResultsAndGetTotalCountAndSortSort | null | undefined, fields: ApiUsers_idSongListsGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartialFindResult_SongListForApiContract> {
			return this.http.get<PartialFindResult_SongListForApiContract>(this.baseUri + 'api/users/' + id + '/songLists?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagId?.map(z => `tagId=${z}`).join('&') + '&childTags=' + childTags + '&nameMatchMode=' + nameMatchMode + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangFields { None = 0, ArchivedVersion = 1, Entry = 2 }

	export enum ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangEntryFields { None = 0, AdditionalNames = 1, Description = 2, MainPicture = 3, Names = 4, PVs = 5, Tags = 6, WebLinks = 7 }

	export enum ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangLang { Default = 0, Japanese = 1, Romaji = 2, English = 3 }

	export enum ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangArtistParticipationStatus { Everything = 0, OnlyMainAlbums = 1, OnlyCollaborations = 2 }

	export enum ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangSort { None = 0, Name = 1, ReleaseDate = 2, ReleaseDateWithNulls = 3, AdditionDate = 4, RatingAverage = 5, RatingTotal = 6, NameThenReleaseDate = 7, CollectionCount = 8 }

	export enum ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangNameMatchMode { Auto = 0, Partial = 1, StartsWith = 2, Exact = 3, Words = 4 }

	export enum ApiAlbumsGetByQueryAndDiscTypesAndTagNameAndTagIdAndChildTagsAndArtistIdAndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLangFields { None = 0, AdditionalNames = 1, Artists = 2, Description = 3, Discs = 4, Identifiers = 5, MainPicture = 6, Names = 7, PVs = 8, ReleaseEvent = 9, Tags = 10, Tracks = 11, WebLinks = 12 }

	export enum ApiAlbums_idGetByFieldsAndSongFieldsAndLangSongFields { None = 0, AdditionalNames = 1, Albums = 2, Artists = 3, Lyrics = 4, MainPicture = 5, Names = 6, PVs = 7, ReleaseEvent = 8, Tags = 9, ThumbUrl = 10, WebLinks = 11 }

	export enum ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangSort { None = 0, Name = 1, AdditionDate = 2, AdditionDateAsc = 3, ReleaseDate = 4, SongCount = 5, SongRating = 6, FollowerCount = 7 }

	export enum ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagNameAndTagIdAndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangFields { None = 0, AdditionalNames = 1, ArtistLinks = 2, ArtistLinksReverse = 3, BaseVoicebank = 4, Description = 5, MainPicture = 6, Names = 7, Tags = 8, WebLinks = 9 }

	export enum ApiArtists_idGetByFieldsAndRelationsAndLangRelations { None = 0, LatestAlbums = 1, LatestEvents = 2, LatestSongs = 3, PopularAlbums = 4, PopularSongs = 5, All = 6 }

	export enum ApiDiscussionsFoldersGetByFieldsFields { None = 0, LastTopic = 1, TopicCount = 2 }

	export enum ApiDiscussionsFolders_folderIdTopicsGetByFieldsFields { None = 0, Comments = 1, CommentCount = 2, Content = 3, LastComment = 4, All = 5 }

	export enum ApiDiscussionsTopicsGetByFolderIdAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsSort { None = 0, Name = 1, DateCreated = 2, LastCommentDate = 3 }

	export enum ApiEntriesGetByQueryAndTagNameAndTagIdAndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangEntryTypes { Nothing = 0, Album = 1, Artist = 2, DiscussionTopic = 3, PV = 4, ReleaseEvent = 5, ReleaseEventSeries = 6, Song = 7, SongList = 8, Tag = 9, User = 10 }

	export enum ApiEntriesGetByQueryAndTagNameAndTagIdAndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort { None = 0, Name = 1, AdditionDate = 2, ActivityDate = 3 }

	export enum ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangSort { None = 0, Name = 1, Date = 2, AdditionDate = 3, SeriesName = 4 }

	export enum ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagIdAndChildTagsAndArtistIdAndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangFields { None = 0, AdditionalNames = 1, Artists = 2, Description = 3, MainPicture = 4, Names = 5, Series = 6, SongList = 7, WebLinks = 8 }

	export enum ApiReleaseEvents_eventIdReportsPostByReportTypeAndNotesAndVersionNumberReportType { InvalidInfo = 0, Duplicate = 1, Inappropriate = 2, Other = 3 }

	export enum ApiSongListsFeaturedGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndFeaturedCategoryAndStartAndMaxResultsAndGetTotalCountAndSortSort { None = 0, Name = 1, Date = 2, CreateDate = 3 }

	export enum ApiSongLists_listIdSongsGetByQueryAndSongTypesAndPvServicesAndTagIdAndArtistIdAndChildVoicebanksAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort { None = 0, Name = 1, AdditionDate = 2, PublishDate = 3, FavoritedTimes = 4, RatingScore = 5 }

	export enum ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreferenceFilterBy { CreateDate = 0, PublishDate = 1, Popularity = 2 }

	export enum ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreferenceVocalist { Nothing = 0, Vocaloid = 1, UTAU = 2, CeVIO = 3 }

	export enum ApiSongs_idRatingsGetByUserFieldsAndLangUserFields { None = 0, KnownLanguages = 1, MainPicture = 2, OldUsernames = 3 }

	export enum ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetSort { Nothing = 0, Name = 1, AdditionDate = 2, UsageCount = 3 }

	export enum ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetFields { None = 0, AdditionalNames = 1, AliasedTo = 2, Description = 3, MainPicture = 4, Names = 5, Parent = 6, RelatedTags = 7, TranslatedDescription = 8, WebLinks = 9 }

	export enum ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTargetTarget { Nothing = 0, Album = 1, Artist = 2, AlbumArtist = 3, Event = 4, Song = 5, AlbumSong = 6, ArtistSong = 7, All = 8 }

	export enum ApiUsersGetByQueryAndGroupsAndJoinDateAfterAndJoinDateBeforeAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndIncludeDisabledAndOnlyVerifiedAndKnowsLanguageAndFieldsSort { RegisterDate = 0, Name = 1, Group = 2 }

	export enum ApiUsers_idAlbumsGetByQueryAndTagIdAndTagAndArtistIdAndPurchaseStatusesAndReleaseEventIdAndAlbumTypesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangPurchaseStatuses { Nothing = 0, Wishlisted = 1, Ordered = 2, Owned = 3, All = 4 }

	export enum ApiUsers_idEventsGetByRelationshipTypeRelationshipType { Interested = 0, Attending = 1 }

	export enum ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagIdAndArtistIdAndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangArtistGrouping { And = 0, Or = 1 }

	export enum ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagIdAndArtistIdAndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangSort { None = 0, Name = 1, AdditionDate = 2, PublishDate = 3, FavoritedTimes = 4, RatingScore = 5, RatingDate = 6 }

	export enum ApiUsers_idSongListsGetByQueryAndTagIdAndChildTagsAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsFields { None = 0, Description = 1, MainPicture = 2 }

}

