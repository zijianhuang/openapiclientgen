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
		agentName?: string | null;
		anythingChanged?: boolean | null;
		author?: UserForApiContract;
		changedFields?: Array<string>;
		created?: Date | null;
		hidden?: boolean | null;
		id?: number | null;
		isSnapshot?: boolean | null;
		notes?: string | null;
		reason?: string | null;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		version?: number | null;
	}
	export interface ArchivedObjectVersionForApiContractFormProperties {
		agentName: FormControl<string | null | undefined>,
		anythingChanged: FormControl<boolean | null | undefined>,
		created: FormControl<Date | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		isSnapshot: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateArchivedObjectVersionForApiContractFormGroup() {
		return new FormGroup<ArchivedObjectVersionForApiContractFormProperties>({
			agentName: new FormControl<string | null | undefined>(undefined),
			anythingChanged: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isSnapshot: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
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

	export enum UserForApiContractGroupId { Nothing = 'Nothing', Limited = 'Limited', Regular = 'Regular', Trusted = 'Trusted', Moderator = 'Moderator', Admin = 'Admin' }

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

	export enum UserKnownLanguageContractProficiency { Nothing = 'Nothing', Basics = 'Basics', Intermediate = 'Intermediate', Advanced = 'Advanced', Native = 'Native' }

	export interface EntryThumbForApiContract {
		mime?: string | null;
		name?: string | null;
		urlOriginal?: string | null;
		urlSmallThumb?: string | null;
		urlThumb?: string | null;
		urlTinyThumb?: string | null;
	}
	export interface EntryThumbForApiContractFormProperties {
		mime: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		urlOriginal: FormControl<string | null | undefined>,
		urlSmallThumb: FormControl<string | null | undefined>,
		urlThumb: FormControl<string | null | undefined>,
		urlTinyThumb: FormControl<string | null | undefined>,
	}
	export function CreateEntryThumbForApiContractFormGroup() {
		return new FormGroup<EntryThumbForApiContractFormProperties>({
			mime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			urlOriginal: new FormControl<string | null | undefined>(undefined),
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

	export enum ArchivedObjectVersionForApiContractStatus { Draft = 'Draft', Finished = 'Finished', Approved = 'Approved', Locked = 'Locked' }

	export enum ActivityEntryForApiContractEditEvent { Created = 'Created', Updated = 'Updated', Deleted = 'Deleted', Restored = 'Restored' }

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
		pvs?: Array<PVContract>;
		releaseEventSeriesName?: string | null;
		songListFeaturedCategory?: EntryForApiContractSongListFeaturedCategory | null;
		songType?: EntryForApiContractSongType | null;
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			tagCategoryName: new FormControl<string | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EntryForApiContractArtistType { Unknown = 'Unknown', Circle = 'Circle', Label = 'Label', Producer = 'Producer', Animator = 'Animator', Illustrator = 'Illustrator', Lyricist = 'Lyricist', Vocaloid = 'Vocaloid', UTAU = 'UTAU', CeVIO = 'CeVIO', OtherVoiceSynthesizer = 'OtherVoiceSynthesizer', OtherVocalist = 'OtherVocalist', OtherGroup = 'OtherGroup', OtherIndividual = 'OtherIndividual', Utaite = 'Utaite', Band = 'Band', Vocalist = 'Vocalist', Character = 'Character', SynthesizerV = 'SynthesizerV', CoverArtist = 'CoverArtist' }

	export enum EntryForApiContractDefaultNameLanguage { Unspecified = 'Unspecified', Japanese = 'Japanese', Romaji = 'Romaji', English = 'English' }

	export enum EntryForApiContractDiscType { Unknown = 'Unknown', Album = 'Album', Single = 'Single', EP = 'EP', SplitAlbum = 'SplitAlbum', Compilation = 'Compilation', Video = 'Video', Artbook = 'Artbook', Game = 'Game', Fanmade = 'Fanmade', Instrumental = 'Instrumental', Other = 'Other' }

	export enum EntryForApiContractEntryType { Undefined = 'Undefined', Album = 'Album', Artist = 'Artist', DiscussionTopic = 'DiscussionTopic', PV = 'PV', ReleaseEvent = 'ReleaseEvent', ReleaseEventSeries = 'ReleaseEventSeries', Song = 'Song', SongList = 'SongList', Tag = 'Tag', User = 'User', Venue = 'Venue' }

	export enum EntryForApiContractEventCategory { Unspecified = 'Unspecified', AlbumRelease = 'AlbumRelease', Anniversary = 'Anniversary', Club = 'Club', Concert = 'Concert', Contest = 'Contest', Convention = 'Convention', Other = 'Other', Festival = 'Festival' }

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

	export enum PVContractPvType { Original = 'Original', Reprint = 'Reprint', Other = 'Other' }

	export enum PVContractService { NicoNicoDouga = 'NicoNicoDouga', Youtube = 'Youtube', SoundCloud = 'SoundCloud', Vimeo = 'Vimeo', Piapro = 'Piapro', Bilibili = 'Bilibili', File = 'File', LocalFile = 'LocalFile', Creofuga = 'Creofuga', Bandcamp = 'Bandcamp' }

	export enum EntryForApiContractSongListFeaturedCategory { Nothing = 'Nothing', Concerts = 'Concerts', VocaloidRanking = 'VocaloidRanking', Pools = 'Pools', Other = 'Other' }

	export enum EntryForApiContractSongType { Unspecified = 'Unspecified', Original = 'Original', Remaster = 'Remaster', Remix = 'Remix', Cover = 'Cover', Arrangement = 'Arrangement', Instrumental = 'Instrumental', Mashup = 'Mashup', MusicPV = 'MusicPV', DramaPV = 'DramaPV', Live = 'Live', Illustration = 'Illustration', Other = 'Other' }

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
		disabled?: boolean | null;
		url?: string | null;
	}
	export interface ArchivedWebLinkContractFormProperties {
		category: FormControl<ArchivedWebLinkContractCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArchivedWebLinkContractFormGroup() {
		return new FormGroup<ArchivedWebLinkContractFormProperties>({
			category: new FormControl<ArchivedWebLinkContractCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArchivedWebLinkContractCategory { Official = 'Official', Commercial = 'Commercial', Reference = 'Reference', Other = 'Other' }

	export interface ActivityEntryForApiContractPartialFindResult {
		items?: Array<ActivityEntryForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface ActivityEntryForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateActivityEntryForApiContractPartialFindResultFormGroup() {
		return new FormGroup<ActivityEntryForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ActivityEntryOptionalFields { None = 'None', ArchivedVersion = 'ArchivedVersion', Entry = 'Entry' }

	export enum ActivityEntrySortRule { CreateDateDescending = 'CreateDateDescending', CreateDate = 'CreateDate' }

	export enum AdvancedFilterType { Nothing = 'Nothing', ArtistType = 'ArtistType', WebLink = 'WebLink', HasUserAccount = 'HasUserAccount', RootVoicebank = 'RootVoicebank', VoiceProvider = 'VoiceProvider', HasStoreLink = 'HasStoreLink', HasTracks = 'HasTracks', NoCoverPicture = 'NoCoverPicture', HasAlbum = 'HasAlbum', HasOriginalMedia = 'HasOriginalMedia', HasMedia = 'HasMedia', HasMultipleVoicebanks = 'HasMultipleVoicebanks', HasPublishDate = 'HasPublishDate', Lyrics = 'Lyrics', LyricsContent = 'LyricsContent' }

	export interface AdvancedSearchFilterParams {
		filterType?: AdvancedFilterType | null;
		negate?: boolean | null;
		param?: string | null;
	}
	export interface AdvancedSearchFilterParamsFormProperties {
		filterType: FormControl<AdvancedFilterType | null | undefined>,
		negate: FormControl<boolean | null | undefined>,
		param: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedSearchFilterParamsFormGroup() {
		return new FormGroup<AdvancedSearchFilterParamsFormProperties>({
			filterType: new FormControl<AdvancedFilterType | null | undefined>(undefined),
			negate: new FormControl<boolean | null | undefined>(undefined),
			param: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
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
		pvs?: Array<PVContract>;
		series?: ReleaseEventSeriesContract;
		seriesId?: number | null;
		seriesNumber?: number | null;
		seriesSuffix?: string | null;
		songList?: SongListBaseContract;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		tags?: Array<TagUsageForApiContract>;
		urlSlug?: string | null;
		venue?: VenueForApiContract;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
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
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ArtistForEventContractEffectiveRoles { Default = 'Default', Dancer = 'Dancer', DJ = 'DJ', Instrumentalist = 'Instrumentalist', Organizer = 'Organizer', Promoter = 'Promoter', VJ = 'VJ', Vocalist = 'Vocalist', VoiceManipulator = 'VoiceManipulator', OtherPerformer = 'OtherPerformer', Other = 'Other' }

	export interface ReleaseEventSeriesContract {
		additionalNames?: string | null;
		category?: EntryForApiContractEventCategory | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: number | null;
		name?: string | null;
		pictureMime?: string | null;
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WebLinkContract {
		category?: ArchivedWebLinkContractCategory | null;
		description?: string | null;
		descriptionOrUrl?: string | null;
		disabled?: boolean | null;
		id?: number | null;
		url?: string | null;
	}
	export interface WebLinkContractFormProperties {
		category: FormControl<ArchivedWebLinkContractCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		descriptionOrUrl: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebLinkContractFormGroup() {
		return new FormGroup<WebLinkContractFormProperties>({
			category: new FormControl<ArchivedWebLinkContractCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			descriptionOrUrl: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
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

	export interface VenueForApiContract {
		additionalNames?: string | null;
		address?: string | null;
		addressCountryCode?: string | null;
		coordinates?: OptionalGeoPointContract;
		deleted?: boolean | null;
		description?: string | null;
		events?: Array<ReleaseEventContract>;
		id?: number | null;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		version?: number | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface VenueForApiContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		address: FormControl<string | null | undefined>,
		addressCountryCode: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateVenueForApiContractFormGroup() {
		return new FormGroup<VenueForApiContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			addressCountryCode: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OptionalGeoPointContract {
		formatted?: string | null;
		hasValue?: boolean | null;
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface OptionalGeoPointContractFormProperties {
		formatted: FormControl<string | null | undefined>,
		hasValue: FormControl<boolean | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateOptionalGeoPointContractFormGroup() {
		return new FormGroup<OptionalGeoPointContractFormProperties>({
			formatted: new FormControl<string | null | undefined>(undefined),
			hasValue: new FormControl<boolean | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReleaseEventContract {
		additionalNames?: string | null;
		category?: EntryForApiContractEventCategory | null;
		customName?: boolean | null;
		date?: Date | null;
		deleted?: boolean | null;
		description?: string | null;
		endDate?: Date | null;
		hasVenueOrVenueName?: boolean | null;
		id?: number | null;
		inheritedCategory?: EntryForApiContractEventCategory | null;
		name?: string | null;
		pictureMime?: string | null;
		series?: ReleaseEventSeriesContract;
		songList?: SongListBaseContract;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		urlSlug?: string | null;
		venue?: VenueContract;
		venueName?: string | null;
		version?: number | null;
	}
	export interface ReleaseEventContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		category: FormControl<EntryForApiContractEventCategory | null | undefined>,
		customName: FormControl<boolean | null | undefined>,
		date: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		hasVenueOrVenueName: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		inheritedCategory: FormControl<EntryForApiContractEventCategory | null | undefined>,
		name: FormControl<string | null | undefined>,
		pictureMime: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
		urlSlug: FormControl<string | null | undefined>,
		venueName: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateReleaseEventContractFormGroup() {
		return new FormGroup<ReleaseEventContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<EntryForApiContractEventCategory | null | undefined>(undefined),
			customName: new FormControl<boolean | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			hasVenueOrVenueName: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			inheritedCategory: new FormControl<EntryForApiContractEventCategory | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pictureMime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			venueName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VenueContract {
		additionalNames?: string | null;
		address?: string | null;
		addressCountryCode?: string | null;
		coordinates?: OptionalGeoPointContract;
		deleted?: boolean | null;
		description?: string | null;
		id?: number | null;
		name?: string | null;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		version?: number | null;
		webLinks?: Array<WebLinkContract>;
	}
	export interface VenueContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		address: FormControl<string | null | undefined>,
		addressCountryCode: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateVenueContractFormGroup() {
		return new FormGroup<VenueContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			addressCountryCode: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WebLinkForApiContract {
		category?: ArchivedWebLinkContractCategory | null;
		description?: string | null;
		descriptionOrUrl?: string | null;
		disabled?: boolean | null;
		id?: number | null;
		url?: string | null;
	}
	export interface WebLinkForApiContractFormProperties {
		category: FormControl<ArchivedWebLinkContractCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		descriptionOrUrl: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebLinkForApiContractFormGroup() {
		return new FormGroup<WebLinkForApiContractFormProperties>({
			category: new FormControl<ArchivedWebLinkContractCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			descriptionOrUrl: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
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

	export enum AlbumDiscPropertiesContractMediaType { Audio = 'Audio', Video = 'Video' }

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
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
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

	export enum ArtistForAlbumForApiContractCategories { Nothing = 'Nothing', Vocalist = 'Vocalist', Producer = 'Producer', Animator = 'Animator', Label = 'Label', Circle = 'Circle', Other = 'Other', Band = 'Band', Illustrator = 'Illustrator', Subject = 'Subject' }

	export enum ArtistForAlbumForApiContractEffectiveRoles { Default = 'Default', Animator = 'Animator', Arranger = 'Arranger', Composer = 'Composer', Distributor = 'Distributor', Illustrator = 'Illustrator', Instrumentalist = 'Instrumentalist', Lyricist = 'Lyricist', Mastering = 'Mastering', Publisher = 'Publisher', Vocalist = 'Vocalist', VoiceManipulator = 'VoiceManipulator', Other = 'Other', Mixer = 'Mixer', Chorus = 'Chorus', Encoder = 'Encoder', VocalDataProvider = 'VocalDataProvider' }

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
		rating?: SongInAlbumForApiContractRating | null;
		song?: SongForApiContract;
		trackNumber?: number | null;
	}
	export interface SongInAlbumForApiContractFormProperties {
		discNumber: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		rating: FormControl<SongInAlbumForApiContractRating | null | undefined>,
		trackNumber: FormControl<number | null | undefined>,
	}
	export function CreateSongInAlbumForApiContractFormGroup() {
		return new FormGroup<SongInAlbumForApiContractFormProperties>({
			discNumber: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<SongInAlbumForApiContractRating | null | undefined>(undefined),
			trackNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SongInAlbumForApiContractRating { Nothing = 'Nothing', Dislike = 'Dislike', Like = 'Like', Favorite = 'Favorite' }

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
		maxMilliBpm?: number | null;
		mergedTo?: number | null;
		minMilliBpm?: number | null;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		originalVersionId?: number | null;
		publishDate?: Date | null;
		pvServices?: SongForApiContractPvServices | null;
		pvs?: Array<PVContract>;
		ratingScore?: number | null;
		releaseEvent?: ReleaseEventForApiContract;
		songType?: EntryForApiContractSongType | null;
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		maxMilliBpm: FormControl<number | null | undefined>,
		mergedTo: FormControl<number | null | undefined>,
		minMilliBpm: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		originalVersionId: FormControl<number | null | undefined>,
		publishDate: FormControl<Date | null | undefined>,
		pvServices: FormControl<SongForApiContractPvServices | null | undefined>,
		ratingScore: FormControl<number | null | undefined>,
		songType: FormControl<EntryForApiContractSongType | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			maxMilliBpm: new FormControl<number | null | undefined>(undefined),
			mergedTo: new FormControl<number | null | undefined>(undefined),
			minMilliBpm: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originalVersionId: new FormControl<number | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			pvServices: new FormControl<SongForApiContractPvServices | null | undefined>(undefined),
			ratingScore: new FormControl<number | null | undefined>(undefined),
			songType: new FormControl<EntryForApiContractSongType | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
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

	export enum LyricsForSongContractTranslationType { Original = 'Original', Romanized = 'Romanized', Translation = 'Translation' }

	export enum SongForApiContractPvServices { Nothing = 'Nothing', NicoNicoDouga = 'NicoNicoDouga', Youtube = 'Youtube', SoundCloud = 'SoundCloud', Vimeo = 'Vimeo', Piapro = 'Piapro', Bilibili = 'Bilibili', File = 'File', LocalFile = 'LocalFile', Creofuga = 'Creofuga', Bandcamp = 'Bandcamp' }

	export interface AlbumForApiContractPartialFindResult {
		items?: Array<AlbumForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface AlbumForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateAlbumForApiContractPartialFindResultFormGroup() {
		return new FormGroup<AlbumForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

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

	export enum AlbumForUserForApiContractMediaType { PhysicalDisc = 'PhysicalDisc', DigitalDownload = 'DigitalDownload', Other = 'Other' }

	export enum AlbumForUserForApiContractPurchaseStatus { Nothing = 'Nothing', Wishlisted = 'Wishlisted', Ordered = 'Ordered', Owned = 'Owned' }

	export interface AlbumForUserForApiContractPartialFindResult {
		items?: Array<AlbumForUserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface AlbumForUserForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateAlbumForUserForApiContractPartialFindResultFormGroup() {
		return new FormGroup<AlbumForUserForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AlbumOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', Artists = 'Artists', Description = 'Description', Discs = 'Discs', Identifiers = 'Identifiers', MainPicture = 'MainPicture', Names = 'Names', PVs = 'PVs', ReleaseEvent = 'ReleaseEvent', Tags = 'Tags', Tracks = 'Tracks', WebLinks = 'WebLinks' }

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

	export enum AlbumSortRule { None = 'None', Name = 'Name', ReleaseDate = 'ReleaseDate', ReleaseDateWithNulls = 'ReleaseDateWithNulls', AdditionDate = 'AdditionDate', RatingAverage = 'RatingAverage', RatingTotal = 'RatingTotal', NameThenReleaseDate = 'NameThenReleaseDate', CollectionCount = 'CollectionCount' }

	export enum ArtistAlbumParticipationStatus { Everything = 'Everything', OnlyMainAlbums = 'OnlyMainAlbums', OnlyCollaborations = 'OnlyCollaborations' }

	export enum ArtistCategories { Nothing = 'Nothing', Vocalist = 'Vocalist', Producer = 'Producer', Animator = 'Animator', Label = 'Label', Circle = 'Circle', Other = 'Other', Band = 'Band', Illustrator = 'Illustrator', Subject = 'Subject' }

	export enum ArtistEventRoles { Default = 'Default', Dancer = 'Dancer', DJ = 'DJ', Instrumentalist = 'Instrumentalist', Organizer = 'Organizer', Promoter = 'Promoter', VJ = 'VJ', Vocalist = 'Vocalist', VoiceManipulator = 'VoiceManipulator', OtherPerformer = 'OtherPerformer', Other = 'Other' }

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
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
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

	export enum ArtistForArtistForApiContractLinkType { CharacterDesigner = 'CharacterDesigner', Group = 'Group', Illustrator = 'Illustrator', Manager = 'Manager', VoiceProvider = 'VoiceProvider' }

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

	export interface ArtistForApiContractPartialFindResult {
		items?: Array<ArtistForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface ArtistForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateArtistForApiContractPartialFindResultFormGroup() {
		return new FormGroup<ArtistForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtistForUserForApiContract {
		artist?: ArtistForApiContract;
		id?: number | null;
	}
	export interface ArtistForUserForApiContractFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreateArtistForUserForApiContractFormGroup() {
		return new FormGroup<ArtistForUserForApiContractFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtistForUserForApiContractPartialFindResult {
		items?: Array<ArtistForUserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface ArtistForUserForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateArtistForUserForApiContractPartialFindResultFormGroup() {
		return new FormGroup<ArtistForUserForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ArtistLinkType { CharacterDesigner = 'CharacterDesigner', Group = 'Group', Illustrator = 'Illustrator', Manager = 'Manager', VoiceProvider = 'VoiceProvider' }

	export enum ArtistOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', ArtistLinks = 'ArtistLinks', ArtistLinksReverse = 'ArtistLinksReverse', BaseVoicebank = 'BaseVoicebank', Description = 'Description', MainPicture = 'MainPicture', Names = 'Names', Tags = 'Tags', WebLinks = 'WebLinks' }

	export enum ArtistRelationsFields { None = 'None', LatestAlbums = 'LatestAlbums', LatestEvents = 'LatestEvents', LatestSongs = 'LatestSongs', PopularAlbums = 'PopularAlbums', PopularSongs = 'PopularSongs', All = 'All' }

	export enum ArtistRoles { Default = 'Default', Animator = 'Animator', Arranger = 'Arranger', Composer = 'Composer', Distributor = 'Distributor', Illustrator = 'Illustrator', Instrumentalist = 'Instrumentalist', Lyricist = 'Lyricist', Mastering = 'Mastering', Publisher = 'Publisher', Vocalist = 'Vocalist', VoiceManipulator = 'VoiceManipulator', Other = 'Other', Mixer = 'Mixer', Chorus = 'Chorus', Encoder = 'Encoder', VocalDataProvider = 'VocalDataProvider' }

	export enum ArtistSortRule { None = 'None', Name = 'Name', AdditionDate = 'AdditionDate', AdditionDateAsc = 'AdditionDateAsc', ReleaseDate = 'ReleaseDate', SongCount = 'SongCount', SongRating = 'SongRating', FollowerCount = 'FollowerCount', ArtistType = 'ArtistType' }

	export enum ArtistType { Unknown = 'Unknown', Circle = 'Circle', Label = 'Label', Producer = 'Producer', Animator = 'Animator', Illustrator = 'Illustrator', Lyricist = 'Lyricist', Vocaloid = 'Vocaloid', UTAU = 'UTAU', CeVIO = 'CeVIO', OtherVoiceSynthesizer = 'OtherVoiceSynthesizer', OtherVocalist = 'OtherVocalist', OtherGroup = 'OtherGroup', OtherIndividual = 'OtherIndividual', Utaite = 'Utaite', Band = 'Band', Vocalist = 'Vocalist', Character = 'Character', SynthesizerV = 'SynthesizerV', CoverArtist = 'CoverArtist' }

	export interface CommentForApiContract {
		author?: UserForApiContract;
		authorName?: string | null;
		created?: Date | null;
		entry?: EntryForApiContract;
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

	export interface CommentForApiContractPartialFindResult {
		items?: Array<CommentForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface CommentForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateCommentForApiContractPartialFindResultFormGroup() {
		return new FormGroup<CommentForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CommentOptionalFields { None = 'None', Entry = 'Entry' }

	export enum CommentSortRule { CreateDateDescending = 'CreateDateDescending', CreateDate = 'CreateDate' }

	export enum ContentLanguagePreference { Default = 'Default', Japanese = 'Japanese', Romaji = 'Romaji', English = 'English' }

	export enum ContentLanguageSelection { Unspecified = 'Unspecified', Japanese = 'Japanese', Romaji = 'Romaji', English = 'English' }

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

	export enum CreateReportModelReportType { MaliciousIP = 'MaliciousIP', Spamming = 'Spamming', RemovePermissions = 'RemovePermissions', Other = 'Other' }

	export enum DiscMediaType { Audio = 'Audio', Video = 'Video' }

	export enum DiscType { Unknown = 'Unknown', Album = 'Album', Single = 'Single', EP = 'EP', SplitAlbum = 'SplitAlbum', Compilation = 'Compilation', Video = 'Video', Artbook = 'Artbook', Game = 'Game', Fanmade = 'Fanmade', Instrumental = 'Instrumental', Other = 'Other' }

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

	export enum DiscussionFolderOptionalFields { None = 'None', LastTopic = 'LastTopic', TopicCount = 'TopicCount' }

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

	export interface DiscussionTopicContractPartialFindResult {
		items?: Array<DiscussionTopicContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface DiscussionTopicContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateDiscussionTopicContractPartialFindResultFormGroup() {
		return new FormGroup<DiscussionTopicContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DiscussionTopicOptionalFields { None = 'None', Comments = 'Comments', CommentCount = 'CommentCount', Content = 'Content', LastComment = 'LastComment', All = 'All' }

	export enum DiscussionTopicSortRule { None = 'None', Name = 'Name', DateCreated = 'DateCreated', LastCommentDate = 'LastCommentDate' }

	export enum DistanceUnit { Kilometers = 'Kilometers', Miles = 'Miles' }

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

	export interface EntryEditDataContract {
		time?: Date | null;
		userId?: number | null;
		userName?: string | null;
	}
	export interface EntryEditDataContractFormProperties {
		time: FormControl<Date | null | undefined>,
		userId: FormControl<number | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateEntryEditDataContractFormGroup() {
		return new FormGroup<EntryEditDataContractFormProperties>({
			time: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntryEditEvent { Created = 'Created', Updated = 'Updated', Deleted = 'Deleted', Restored = 'Restored' }

	export interface EntryForApiContractPartialFindResult {
		items?: Array<EntryForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface EntryForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateEntryForApiContractPartialFindResultFormGroup() {
		return new FormGroup<EntryForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EntryOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', Description = 'Description', MainPicture = 'MainPicture', Names = 'Names', PVs = 'PVs', Tags = 'Tags', WebLinks = 'WebLinks' }

	export enum EntrySortRule { None = 'None', Name = 'Name', AdditionDate = 'AdditionDate', ActivityDate = 'ActivityDate' }

	export enum EntryStatus { Draft = 'Draft', Finished = 'Finished', Approved = 'Approved', Locked = 'Locked' }

	export enum EntryType { Undefined = 'Undefined', Album = 'Album', Artist = 'Artist', DiscussionTopic = 'DiscussionTopic', PV = 'PV', ReleaseEvent = 'ReleaseEvent', ReleaseEventSeries = 'ReleaseEventSeries', Song = 'Song', SongList = 'SongList', Tag = 'Tag', User = 'User', Venue = 'Venue' }

	export enum EntryTypes { Nothing = 'Nothing', Album = 'Album', Artist = 'Artist', DiscussionTopic = 'DiscussionTopic', PV = 'PV', ReleaseEvent = 'ReleaseEvent', ReleaseEventSeries = 'ReleaseEventSeries', Song = 'Song', SongList = 'SongList', Tag = 'Tag', User = 'User', Venue = 'Venue' }

	export enum EventCategory { Unspecified = 'Unspecified', AlbumRelease = 'AlbumRelease', Anniversary = 'Anniversary', Club = 'Club', Concert = 'Concert', Contest = 'Contest', Convention = 'Convention', Other = 'Other', Festival = 'Festival' }

	export enum EventReportType { InvalidInfo = 'InvalidInfo', Duplicate = 'Duplicate', Inappropriate = 'Inappropriate', Other = 'Other' }

	export enum EventSortRule { None = 'None', Name = 'Name', Date = 'Date', AdditionDate = 'AdditionDate', SeriesName = 'SeriesName', VenueName = 'VenueName' }

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

	export enum LogicalGrouping { And = 'And', Or = 'Or' }

	export enum MediaType { PhysicalDisc = 'PhysicalDisc', DigitalDownload = 'DigitalDownload', Other = 'Other' }

	export enum NameMatchMode { Auto = 'Auto', Partial = 'Partial', StartsWith = 'StartsWith', Exact = 'Exact', Words = 'Words' }

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
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			thumbUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PVForSongContractPartialFindResult {
		items?: Array<PVForSongContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface PVForSongContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePVForSongContractPartialFindResultFormGroup() {
		return new FormGroup<PVForSongContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PVService { NicoNicoDouga = 'NicoNicoDouga', Youtube = 'Youtube', SoundCloud = 'SoundCloud', Vimeo = 'Vimeo', Piapro = 'Piapro', Bilibili = 'Bilibili', File = 'File', LocalFile = 'LocalFile', Creofuga = 'Creofuga', Bandcamp = 'Bandcamp' }

	export enum PVServices { Nothing = 'Nothing', NicoNicoDouga = 'NicoNicoDouga', Youtube = 'Youtube', SoundCloud = 'SoundCloud', Vimeo = 'Vimeo', Piapro = 'Piapro', Bilibili = 'Bilibili', File = 'File', LocalFile = 'LocalFile', Creofuga = 'Creofuga', Bandcamp = 'Bandcamp' }

	export enum PVType { Original = 'Original', Reprint = 'Reprint', Other = 'Other' }

	export enum PurchaseStatus { Nothing = 'Nothing', Wishlisted = 'Wishlisted', Ordered = 'Ordered', Owned = 'Owned' }

	export enum PurchaseStatuses { Nothing = 'Nothing', Wishlisted = 'Wishlisted', Ordered = 'Ordered', Owned = 'Owned', All = 'All' }

	export interface RatedSongForUserForApiContract {
		date?: Date | null;
		rating?: SongInAlbumForApiContractRating | null;
		song?: SongForApiContract;
		user?: UserForApiContract;
	}
	export interface RatedSongForUserForApiContractFormProperties {
		date: FormControl<Date | null | undefined>,
		rating: FormControl<SongInAlbumForApiContractRating | null | undefined>,
	}
	export function CreateRatedSongForUserForApiContractFormGroup() {
		return new FormGroup<RatedSongForUserForApiContractFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			rating: new FormControl<SongInAlbumForApiContractRating | null | undefined>(undefined),
		});

	}

	export interface RatedSongForUserForApiContractPartialFindResult {
		items?: Array<RatedSongForUserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface RatedSongForUserForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateRatedSongForUserForApiContractPartialFindResultFormGroup() {
		return new FormGroup<RatedSongForUserForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RatedSongForUserSortRule { None = 'None', Name = 'Name', AdditionDate = 'AdditionDate', PublishDate = 'PublishDate', FavoritedTimes = 'FavoritedTimes', RatingScore = 'RatingScore', RatingDate = 'RatingDate' }

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

	export interface ReleaseEventForApiContractPartialFindResult {
		items?: Array<ReleaseEventForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface ReleaseEventForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateReleaseEventForApiContractPartialFindResultFormGroup() {
		return new FormGroup<ReleaseEventForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ReleaseEventOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', Artists = 'Artists', Description = 'Description', MainPicture = 'MainPicture', Names = 'Names', Series = 'Series', SongList = 'SongList', Tags = 'Tags', Venue = 'Venue', WebLinks = 'WebLinks', PVs = 'PVs' }

	export interface ReleaseEventSeriesForApiContract {
		additionalNames?: string | null;
		category?: EntryForApiContractEventCategory | null;
		description?: string | null;
		events?: Array<ReleaseEventForApiContract>;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
		names?: Array<LocalizedStringContract>;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		urlSlug?: string | null;
		version?: number | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface ReleaseEventSeriesForApiContractFormProperties {
		additionalNames: FormControl<string | null | undefined>,
		category: FormControl<EntryForApiContractEventCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
		urlSlug: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateReleaseEventSeriesForApiContractFormGroup() {
		return new FormGroup<ReleaseEventSeriesForApiContractFormProperties>({
			additionalNames: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<EntryForApiContractEventCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReleaseEventSeriesForApiContractPartialFindResult {
		items?: Array<ReleaseEventSeriesForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface ReleaseEventSeriesForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateReleaseEventSeriesForApiContractPartialFindResultFormGroup() {
		return new FormGroup<ReleaseEventSeriesForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReleaseEventSeriesForEditForApiContract {
		category?: EntryForApiContractEventCategory | null;
		defaultNameLanguage?: EntryForApiContractDefaultNameLanguage | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
		names?: Array<LocalizedStringWithIdContract>;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		webLinks?: Array<WebLinkForApiContract>;
	}
	export interface ReleaseEventSeriesForEditForApiContractFormProperties {
		category: FormControl<EntryForApiContractEventCategory | null | undefined>,
		defaultNameLanguage: FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
	}
	export function CreateReleaseEventSeriesForEditForApiContractFormGroup() {
		return new FormGroup<ReleaseEventSeriesForEditForApiContractFormProperties>({
			category: new FormControl<EntryForApiContractEventCategory | null | undefined>(undefined),
			defaultNameLanguage: new FormControl<EntryForApiContractDefaultNameLanguage | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
		});

	}

	export enum ReleaseEventSeriesOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', Description = 'Description', Events = 'Events', MainPicture = 'MainPicture', Names = 'Names', WebLinks = 'WebLinks' }

	export interface SongForApiContractPartialFindResult {
		items?: Array<SongForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface SongForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateSongForApiContractPartialFindResultFormGroup() {
		return new FormGroup<SongForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
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

	export interface SongInListForApiContractPartialFindResult {
		items?: Array<SongInListForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface SongInListForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateSongInListForApiContractPartialFindResultFormGroup() {
		return new FormGroup<SongInListForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SongListFeaturedCategory { Nothing = 'Nothing', Concerts = 'Concerts', VocaloidRanking = 'VocaloidRanking', Pools = 'Pools', Other = 'Other' }

	export interface SongListForApiContract {
		author?: UserForApiContract;
		deleted?: boolean | null;
		description?: string | null;
		eventDate?: Date | null;
		events?: Array<ReleaseEventForApiContract>;
		featuredCategory?: EntryForApiContractSongListFeaturedCategory | null;
		id?: number | null;
		latestComments?: Array<CommentForApiContract>;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		tags?: Array<TagUsageForApiContract>;
	}
	export interface SongListForApiContractFormProperties {
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		featuredCategory: FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
	}
	export function CreateSongListForApiContractFormGroup() {
		return new FormGroup<SongListForApiContractFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			featuredCategory: new FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
		});

	}

	export interface SongListForApiContractPartialFindResult {
		items?: Array<SongListForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface SongListForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateSongListForApiContractPartialFindResultFormGroup() {
		return new FormGroup<SongListForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SongListForEditForApiContract {
		deleted?: boolean | null;
		description?: string | null;
		eventDate?: Date | null;
		featuredCategory?: EntryForApiContractSongListFeaturedCategory | null;
		id?: number | null;
		mainPicture?: EntryThumbForApiContract;
		name?: string | null;
		songLinks?: Array<SongInListEditContract>;
		status?: ArchivedObjectVersionForApiContractStatus | null;
		updateNotes?: string | null;
	}
	export interface SongListForEditForApiContractFormProperties {
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		featuredCategory: FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
		updateNotes: FormControl<string | null | undefined>,
	}
	export function CreateSongListForEditForApiContractFormGroup() {
		return new FormGroup<SongListForEditForApiContractFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			featuredCategory: new FormControl<EntryForApiContractSongListFeaturedCategory | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			updateNotes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SongListOptionalFields { None = 'None', Description = 'Description', Events = 'Events', MainPicture = 'MainPicture', Tags = 'Tags' }

	export enum SongListSortRule { None = 'None', Name = 'Name', Date = 'Date', CreateDate = 'CreateDate' }

	export enum SongOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', Albums = 'Albums', Artists = 'Artists', Lyrics = 'Lyrics', MainPicture = 'MainPicture', Names = 'Names', PVs = 'PVs', ReleaseEvent = 'ReleaseEvent', Tags = 'Tags', ThumbUrl = 'ThumbUrl', WebLinks = 'WebLinks', Bpm = 'Bpm' }

	export interface SongRatingContract {
		rating?: SongInAlbumForApiContractRating | null;
	}
	export interface SongRatingContractFormProperties {
		rating: FormControl<SongInAlbumForApiContractRating | null | undefined>,
	}
	export function CreateSongRatingContractFormGroup() {
		return new FormGroup<SongRatingContractFormProperties>({
			rating: new FormControl<SongInAlbumForApiContractRating | null | undefined>(undefined),
		});

	}

	export enum SongSortRule { None = 'None', Name = 'Name', AdditionDate = 'AdditionDate', PublishDate = 'PublishDate', FavoritedTimes = 'FavoritedTimes', RatingScore = 'RatingScore', TagUsageCount = 'TagUsageCount', SongType = 'SongType' }

	export enum SongType { Unspecified = 'Unspecified', Original = 'Original', Remaster = 'Remaster', Remix = 'Remix', Cover = 'Cover', Arrangement = 'Arrangement', Instrumental = 'Instrumental', Mashup = 'Mashup', MusicPV = 'MusicPV', DramaPV = 'DramaPV', Live = 'Live', Illustration = 'Illustration', Other = 'Other' }

	export enum SongVocalistSelection { Nothing = 'Nothing', Vocaloid = 'Vocaloid', UTAU = 'UTAU', Other = 'Other' }

	export enum SongVoteRating { Nothing = 'Nothing', Dislike = 'Dislike', Like = 'Like', Favorite = 'Favorite' }

	export enum SortDirection { Ascending = 'Ascending', Descending = 'Descending' }

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
		status?: ArchivedObjectVersionForApiContractStatus | null;
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
		status: FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>,
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
			status: new FormControl<ArchivedObjectVersionForApiContractStatus | null | undefined>(undefined),
			targets: new FormControl<number | null | undefined>(undefined),
			urlSlug: new FormControl<string | null | undefined>(undefined),
			usageCount: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagForApiContractPartialFindResult {
		items?: Array<TagForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface TagForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateTagForApiContractPartialFindResultFormGroup() {
		return new FormGroup<TagForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TagOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', AliasedTo = 'AliasedTo', Description = 'Description', MainPicture = 'MainPicture', Names = 'Names', Parent = 'Parent', RelatedTags = 'RelatedTags', TranslatedDescription = 'TranslatedDescription', WebLinks = 'WebLinks' }

	export enum TagReportType { InvalidInfo = 'InvalidInfo', Duplicate = 'Duplicate', Inappropriate = 'Inappropriate', Other = 'Other' }

	export enum TagSortRule { Nothing = 'Nothing', Name = 'Name', AdditionDate = 'AdditionDate', UsageCount = 'UsageCount' }

	export enum TagTargetTypes { Nothing = 'Nothing', Album = 'Album', Artist = 'Artist', AlbumArtist = 'AlbumArtist', Event = 'Event', Song = 'Song', AlbumSong = 'AlbumSong', ArtistSong = 'ArtistSong', SongList = 'SongList', All = 'All' }

	export enum TopSongsDateFilterType { CreateDate = 'CreateDate', PublishDate = 'PublishDate', Popularity = 'Popularity' }

	export enum TranslationType { Original = 'Original', Romanized = 'Romanized', Translation = 'Translation' }

	export enum UserEventRelationshipType { Interested = 'Interested', Attending = 'Attending' }

	export interface UserForApiContractPartialFindResult {
		items?: Array<UserForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface UserForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateUserForApiContractPartialFindResultFormGroup() {
		return new FormGroup<UserForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UserGroupId { Nothing = 'Nothing', Limited = 'Limited', Regular = 'Regular', Trusted = 'Trusted', Moderator = 'Moderator', Admin = 'Admin' }

	export enum UserInboxType { Nothing = 'Nothing', Received = 'Received', Sent = 'Sent', Notifications = 'Notifications' }

	export enum UserLanguageProficiency { Nothing = 'Nothing', Basics = 'Basics', Intermediate = 'Intermediate', Advanced = 'Advanced', Native = 'Native' }

	export interface UserMessageContract {
		body?: string | null;
		createdFormatted?: string | null;
		highPriority?: boolean | null;
		id?: number | null;
		inbox?: UserInboxType | null;
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
		inbox: FormControl<UserInboxType | null | undefined>,
		read: FormControl<boolean | null | undefined>,
		subject: FormControl<string | null | undefined>,
	}
	export function CreateUserMessageContractFormGroup() {
		return new FormGroup<UserMessageContractFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			createdFormatted: new FormControl<string | null | undefined>(undefined),
			highPriority: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			inbox: new FormControl<UserInboxType | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserMessageContractPartialFindResult {
		items?: Array<UserMessageContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface UserMessageContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateUserMessageContractPartialFindResultFormGroup() {
		return new FormGroup<UserMessageContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UserOptionalFields { None = 'None', KnownLanguages = 'KnownLanguages', MainPicture = 'MainPicture', OldUsernames = 'OldUsernames' }

	export enum UserReportType { MaliciousIP = 'MaliciousIP', Spamming = 'Spamming', RemovePermissions = 'RemovePermissions', Other = 'Other' }

	export enum UserSortRule { RegisterDate = 'RegisterDate', Name = 'Name', Group = 'Group' }

	export interface VenueForApiContractPartialFindResult {
		items?: Array<VenueForApiContract>;
		term?: string | null;
		totalCount?: number | null;
	}
	export interface VenueForApiContractPartialFindResultFormProperties {
		term: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateVenueForApiContractPartialFindResultFormGroup() {
		return new FormGroup<VenueForApiContractPartialFindResultFormProperties>({
			term: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VenueOptionalFields { None = 'None', AdditionalNames = 'AdditionalNames', Description = 'Description', Events = 'Events', Names = 'Names', WebLinks = 'WebLinks' }

	export enum VenueReportType { InvalidInfo = 'InvalidInfo', Duplicate = 'Duplicate', Inappropriate = 'Inappropriate', Other = 'Other' }

	export enum VenueSortRule { None = 'None', Name = 'Name', Distance = 'Distance' }

	export enum WebLinkCategory { Official = 'Official', Commercial = 'Commercial', Reference = 'Reference', Other = 'Other' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get api/activityEntries
		 * @return {ActivityEntryForApiContractPartialFindResult} Success
		 */
		ApiActivityEntriesGetByBeforeAndSinceAndUserIdAndEditEventAndEntryTypeAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangAndSortRule(before: Date | null | undefined, since: Date | null | undefined, userId: number | null | undefined, editEvent: ActivityEntryForApiContractEditEvent | null | undefined, entryType: EntryForApiContractEntryType | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, fields: ActivityEntryOptionalFields | null | undefined, entryFields: EntryOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, sortRule: ActivityEntrySortRule | null | undefined, headersHandler?: () => HttpHeaders): Observable<ActivityEntryForApiContractPartialFindResult> {
			return this.http.get<ActivityEntryForApiContractPartialFindResult>(this.baseUri + 'api/activityEntries?before=' + before?.toISOString() + '&since=' + since?.toISOString() + '&userId=' + userId + '&editEvent=' + editEvent + '&entryType=' + entryType + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&fields=' + fields + '&entryFields=' + entryFields + '&lang=' + lang + '&sortRule=' + sortRule, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums
		 * @return {AlbumForApiContractPartialFindResult} Success
		 */
		ApiAlbumsGetByQueryAndDiscTypesAndTagName_AndTagId_AndChildTagsAndArtistId_AndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndBarcodeAndStatusAndReleaseDateAfterAndReleaseDateBeforeAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndDeletedAndNameMatchModeAndFieldsAndLang(query: string | null | undefined, discTypes: EntryForApiContractDiscType | null | undefined, tagName_: Array<string> | null | undefined, tagId_: Array<number> | null | undefined, childTags: boolean | null | undefined, artistId_: Array<number> | null | undefined, artistParticipationStatus: ArtistAlbumParticipationStatus | null | undefined, childVoicebanks: boolean | null | undefined, includeMembers: boolean | null | undefined, barcode: string | null | undefined, status: ArchivedObjectVersionForApiContractStatus | null | undefined, releaseDateAfter: Date | null | undefined, releaseDateBefore: Date | null | undefined, advancedFilters: Array<AdvancedSearchFilterParams> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: AlbumSortRule | null | undefined, preferAccurateMatches: boolean | null | undefined, deleted: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: AlbumOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<AlbumForApiContractPartialFindResult> {
			return this.http.get<AlbumForApiContractPartialFindResult>(this.baseUri + 'api/albums?query=' + (query == null ? '' : encodeURIComponent(query)) + '&discTypes=' + discTypes + '&' + tagName_?.map(z => `tagName[]=${encodeURIComponent(z)}`).join('&') + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&childTags=' + childTags + '&' + artistId_?.map(z => `artistId[]=${z}`).join('&') + '&artistParticipationStatus=' + artistParticipationStatus + '&childVoicebanks=' + childVoicebanks + '&includeMembers=' + includeMembers + '&barcode=' + (barcode == null ? '' : encodeURIComponent(barcode)) + '&status=' + status + '&releaseDateAfter=' + releaseDateAfter?.toISOString() + '&releaseDateBefore=' + releaseDateBefore?.toISOString() + '&' + advancedFilters?.map(z => `advancedFilters=${z}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&deleted=' + deleted + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/albums/comments/{commentId}
		 * @return {void} Success
		 */
		ApiAlbumsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/albums/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/albums/comments/{commentId}
		 * @return {void} Success
		 */
		ApiAlbumsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/albums/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/albums/names
		 * @return {Array<string>} Success
		 */
		ApiAlbumsNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/albums/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums/new
		 * @return {Array<AlbumForApiContract>} Success
		 */
		ApiAlbumsNewGetByLanguagePreferenceAndFields(languagePreference: ContentLanguagePreference | null | undefined, fields: AlbumOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForApiContract>> {
			return this.http.get<Array<AlbumForApiContract>>(this.baseUri + 'api/albums/new?languagePreference=' + languagePreference + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums/top
		 * @return {Array<AlbumForApiContract>} Success
		 */
		ApiAlbumsTopGetByIgnoreIds_AndLanguagePreferenceAndFields(ignoreIds_: Array<number> | null | undefined, languagePreference: ContentLanguagePreference | null | undefined, fields: AlbumOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForApiContract>> {
			return this.http.get<Array<AlbumForApiContract>>(this.baseUri + 'api/albums/top?' + ignoreIds_?.map(z => `ignoreIds[]=${z}`).join('&') + '&languagePreference=' + languagePreference + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/albums/{id}
		 * @return {void} Success
		 */
		ApiAlbums_idDeleteByNotes(id: number, notes: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/albums/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/albums/{id}
		 * @return {AlbumForApiContract} Success
		 */
		ApiAlbums_idGetByFieldsAndSongFieldsAndLang(id: number, fields: AlbumOptionalFields | null | undefined, songFields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<AlbumForApiContract> {
			return this.http.get<AlbumForApiContract>(this.baseUri + 'api/albums/' + id + '?fields=' + fields + '&songFields=' + songFields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums/{id}/comments
		 * @return {Array<CommentForApiContract>} Success
		 */
		ApiAlbums_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<CommentForApiContract>> {
			return this.http.get<Array<CommentForApiContract>>(this.baseUri + 'api/albums/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/albums/{id}/comments
		 * @return {CommentForApiContract} Success
		 */
		ApiAlbums_idCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/albums/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/albums/{id}/reviews
		 * @return {Array<AlbumReviewContract>} Success
		 */
		ApiAlbums_idReviewsGetByLanguageCode(id: number, languageCode: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumReviewContract>> {
			return this.http.get<Array<AlbumReviewContract>>(this.baseUri + 'api/albums/' + id + '/reviews?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/albums/{id}/reviews
		 * @return {AlbumReviewContract} Success
		 */
		ApiAlbums_idReviewsPost(id: number, requestBody: AlbumReviewContract, headersHandler?: () => HttpHeaders): Observable<AlbumReviewContract> {
			return this.http.post<AlbumReviewContract>(this.baseUri + 'api/albums/' + id + '/reviews', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/albums/{id}/reviews/{reviewId}
		 * @return {void} Success
		 */
		ApiAlbums_idReviews_reviewIdDelete(reviewId: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/albums/' + (id == null ? '' : encodeURIComponent(id)) + '/reviews/' + reviewId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/albums/{id}/tracks
		 * @return {Array<SongInAlbumForApiContract>} Success
		 */
		ApiAlbums_idTracksGetByFieldsAndLang(id: number, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongInAlbumForApiContract>> {
			return this.http.get<Array<SongInAlbumForApiContract>>(this.baseUri + 'api/albums/' + id + '/tracks?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums/{id}/tracks/fields
		 * @return {Array<string>} Success
		 */
		ApiAlbums_idTracksFieldsGetByField_AndDiscNumberAndLang(id: number, field_: Array<string> | null | undefined, discNumber: number | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/albums/' + id + '/tracks/fields?' + field_?.map(z => `field[]=${encodeURIComponent(z)}`).join('&') + '&discNumber=' + discNumber + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/albums/{id}/user-collections
		 * @return {Array<AlbumForUserForApiContract>} Success
		 */
		ApiAlbums_idUser_collectionsGetByLanguagePreference(id: number, languagePreference: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForUserForApiContract>> {
			return this.http.get<Array<AlbumForUserForApiContract>>(this.baseUri + 'api/albums/' + id + '/user-collections?languagePreference=' + languagePreference, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/artists
		 * @return {ArtistForApiContractPartialFindResult} Success
		 */
		ApiArtistsGetByQueryAndArtistTypesAndAllowBaseVoicebanksAndTagName_AndTagId_AndChildTagsAndFollowedByUserIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLang(query: string | null | undefined, artistTypes: string | null | undefined, allowBaseVoicebanks: boolean | null | undefined, tagName_: Array<string> | null | undefined, tagId_: Array<number> | null | undefined, childTags: boolean | null | undefined, followedByUserId: number | null | undefined, status: ArchivedObjectVersionForApiContractStatus | null | undefined, advancedFilters: Array<AdvancedSearchFilterParams> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ArtistSortRule | null | undefined, preferAccurateMatches: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: ArtistOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<ArtistForApiContractPartialFindResult> {
			return this.http.get<ArtistForApiContractPartialFindResult>(this.baseUri + 'api/artists?query=' + (query == null ? '' : encodeURIComponent(query)) + '&artistTypes=' + (artistTypes == null ? '' : encodeURIComponent(artistTypes)) + '&allowBaseVoicebanks=' + allowBaseVoicebanks + '&' + tagName_?.map(z => `tagName[]=${encodeURIComponent(z)}`).join('&') + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&childTags=' + childTags + '&followedByUserId=' + followedByUserId + '&status=' + status + '&' + advancedFilters?.map(z => `advancedFilters=${z}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/artists/comments/{commentId}
		 * @return {void} Success
		 */
		ApiArtistsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/artists/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/artists/comments/{commentId}
		 * @return {void} Success
		 */
		ApiArtistsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/artists/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/artists/names
		 * @return {Array<string>} Success
		 */
		ApiArtistsNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/artists/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/artists/{id}
		 * @return {void} Success
		 */
		ApiArtists_idDeleteByNotes(id: number, notes: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/artists/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/artists/{id}
		 * @return {ArtistForApiContract} Success
		 */
		ApiArtists_idGetByFieldsAndRelationsAndLang(id: number, fields: ArtistOptionalFields | null | undefined, relations: ArtistRelationsFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<ArtistForApiContract> {
			return this.http.get<ArtistForApiContract>(this.baseUri + 'api/artists/' + id + '?fields=' + fields + '&relations=' + relations + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/artists/{id}/comments
		 * @return {Array<CommentForApiContract>} Success
		 */
		ApiArtists_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<CommentForApiContract>> {
			return this.http.get<Array<CommentForApiContract>>(this.baseUri + 'api/artists/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/artists/{id}/comments
		 * @return {CommentForApiContract} Success
		 */
		ApiArtists_idCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/artists/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/comments
		 * @return {CommentForApiContractPartialFindResult} Success
		 */
		ApiCommentsGetByBeforeAndSinceAndUserIdAndEntryTypeAndMaxResultsAndGetTotalCountAndFieldsAndEntryFieldsAndLangAndSortRule(before: Date | null | undefined, since: Date | null | undefined, userId: number | null | undefined, entryType: EntryForApiContractEntryType | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, fields: CommentOptionalFields | null | undefined, entryFields: EntryOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, sortRule: ActivityEntrySortRule | null | undefined, headersHandler?: () => HttpHeaders): Observable<CommentForApiContractPartialFindResult> {
			return this.http.get<CommentForApiContractPartialFindResult>(this.baseUri + 'api/comments?before=' + before?.toISOString() + '&since=' + since?.toISOString() + '&userId=' + userId + '&entryType=' + entryType + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&fields=' + fields + '&entryFields=' + entryFields + '&lang=' + lang + '&sortRule=' + sortRule, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/comments/{entryType}-comments
		 * @return {CommentForApiContractPartialFindResult} Success
		 */
		ApiComments_entryType_commentsGetByEntryId(entryType: EntryForApiContractEntryType, entryId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<CommentForApiContractPartialFindResult> {
			return this.http.get<CommentForApiContractPartialFindResult>(this.baseUri + 'api/comments/' + entryType + '-comments?entryId=' + entryId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/comments/{entryType}-comments
		 * @return {CommentForApiContract} Success
		 */
		ApiComments_entryType_commentsPost(entryType: EntryForApiContractEntryType, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/comments/' + entryType + '-comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/comments/{entryType}-comments/{commentId}
		 * @return {void} Success
		 */
		ApiComments_entryType_comments_commentIdDelete(entryType: EntryForApiContractEntryType, commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/comments/' + entryType + '-comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/comments/{entryType}-comments/{commentId}
		 * @return {void} Success
		 */
		ApiComments_entryType_comments_commentIdPost(entryType: EntryForApiContractEntryType, commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/comments/' + entryType + '-comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/discussions/comments/{commentId}
		 * @return {void} Success
		 */
		ApiDiscussionsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/discussions/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/discussions/comments/{commentId}
		 * @return {void} Success
		 */
		ApiDiscussionsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/discussions/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/discussions/folders
		 * @return {Array<DiscussionFolderContract>} Success
		 */
		ApiDiscussionsFoldersGetByFields(fields: DiscussionFolderOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<DiscussionFolderContract>> {
			return this.http.get<Array<DiscussionFolderContract>>(this.baseUri + 'api/discussions/folders?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/discussions/folders
		 * @return {DiscussionFolderContract} Success
		 */
		ApiDiscussionsFoldersPost(requestBody: DiscussionFolderContract, headersHandler?: () => HttpHeaders): Observable<DiscussionFolderContract> {
			return this.http.post<DiscussionFolderContract>(this.baseUri + 'api/discussions/folders', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/discussions/folders/{folderId}/topics
		 * @return {Array<DiscussionTopicContract>} Success
		 */
		ApiDiscussionsFolders_folderIdTopicsGetByFields(folderId: number, fields: DiscussionTopicOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<DiscussionTopicContract>> {
			return this.http.get<Array<DiscussionTopicContract>>(this.baseUri + 'api/discussions/folders/' + folderId + '/topics?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/discussions/folders/{folderId}/topics
		 * @return {DiscussionTopicContract} Success
		 */
		ApiDiscussionsFolders_folderIdTopicsPost(folderId: number, requestBody: DiscussionTopicContract, headersHandler?: () => HttpHeaders): Observable<DiscussionTopicContract> {
			return this.http.post<DiscussionTopicContract>(this.baseUri + 'api/discussions/folders/' + folderId + '/topics', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/discussions/topics
		 * @return {DiscussionTopicContractPartialFindResult} Success
		 */
		ApiDiscussionsTopicsGetByFolderIdAndStartAndMaxResultsAndGetTotalCountAndSortAndFields(folderId: number | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: DiscussionTopicSortRule | null | undefined, fields: DiscussionTopicOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<DiscussionTopicContractPartialFindResult> {
			return this.http.get<DiscussionTopicContractPartialFindResult>(this.baseUri + 'api/discussions/topics?folderId=' + folderId + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/discussions/topics/{topicId}
		 * @return {void} Success
		 */
		ApiDiscussionsTopics_topicIdDelete(topicId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/discussions/topics/' + topicId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/discussions/topics/{topicId}
		 * @return {DiscussionTopicContract} Success
		 */
		ApiDiscussionsTopics_topicIdGetByFields(topicId: number, fields: DiscussionTopicOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<DiscussionTopicContract> {
			return this.http.get<DiscussionTopicContract>(this.baseUri + 'api/discussions/topics/' + topicId + '?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/discussions/topics/{topicId}
		 * @return {void} Success
		 */
		ApiDiscussionsTopics_topicIdPost(topicId: number, requestBody: DiscussionTopicContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/discussions/topics/' + topicId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/discussions/topics/{topicId}/comments
		 * @return {CommentForApiContract} Success
		 */
		ApiDiscussionsTopics_topicIdCommentsPost(topicId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/discussions/topics/' + topicId + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/entries
		 * @return {EntryForApiContractPartialFindResult} Success
		 */
		ApiEntriesGetByQueryAndTagName_AndTagId_AndChildTagsAndEntryTypesAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(query: string | null | undefined, tagName_: Array<string> | null | undefined, tagId_: Array<number> | null | undefined, childTags: boolean | null | undefined, entryTypes: EntryTypes | null | undefined, status: ArchivedObjectVersionForApiContractStatus | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: EntrySortRule | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: EntryOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<EntryForApiContractPartialFindResult> {
			return this.http.get<EntryForApiContractPartialFindResult>(this.baseUri + 'api/entries?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagName_?.map(z => `tagName[]=${encodeURIComponent(z)}`).join('&') + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&childTags=' + childTags + '&entryTypes=' + entryTypes + '&status=' + status + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/entries/names
		 * @return {Array<string>} Success
		 */
		ApiEntriesNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/entries/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/entry-types/{entryType}/{subType}/tag
		 * @return {TagForApiContract} Success
		 */
		ApiEntry_types_entryType_subTypeTagGetByFields(entryType: EntryForApiContractEntryType, subType: string, fields: TagOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagForApiContract> {
			return this.http.get<TagForApiContract>(this.baseUri + 'api/entry-types/' + entryType + '/' + (subType == null ? '' : encodeURIComponent(subType)) + '/tag&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/pvs/for-songs
		 * @return {PVForSongContractPartialFindResult} Success
		 */
		ApiPvsFor_songsGetByNameAndAuthorAndServiceAndMaxResultsAndGetTotalCountAndLang(name: string | null | undefined, author: string | null | undefined, service: PVContractService | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<PVForSongContractPartialFindResult> {
			return this.http.get<PVForSongContractPartialFindResult>(this.baseUri + 'api/pvs/for-songs?name=' + (name == null ? '' : encodeURIComponent(name)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&service=' + service + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/releaseEventSeries
		 * @return {ReleaseEventSeriesForApiContractPartialFindResult} Success
		 */
		ApiReleaseEventSeriesGetByQueryAndFieldsAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndLang(query: string | null | undefined, fields: ReleaseEventSeriesOptionalFields | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReleaseEventSeriesForApiContractPartialFindResult> {
			return this.http.get<ReleaseEventSeriesForApiContractPartialFindResult>(this.baseUri + 'api/releaseEventSeries?query=' + (query == null ? '' : encodeURIComponent(query)) + '&fields=' + fields + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&nameMatchMode=' + nameMatchMode + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/releaseEventSeries/{id}
		 * @return {void} Success
		 */
		ApiReleaseEventSeries_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/releaseEventSeries/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/releaseEventSeries/{id}
		 * @return {ReleaseEventSeriesForApiContract} Success
		 */
		ApiReleaseEventSeries_idGetByFieldsAndLang(id: number, fields: ReleaseEventSeriesOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReleaseEventSeriesForApiContract> {
			return this.http.get<ReleaseEventSeriesForApiContract>(this.baseUri + 'api/releaseEventSeries/' + id + '?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/releaseEventSeries/{id}/for-edit
		 * @return {ReleaseEventSeriesForEditForApiContract} Success
		 */
		ApiReleaseEventSeries_idFor_editGet(id: number, headersHandler?: () => HttpHeaders): Observable<ReleaseEventSeriesForEditForApiContract> {
			return this.http.get<ReleaseEventSeriesForEditForApiContract>(this.baseUri + 'api/releaseEventSeries/' + id + '/for-edit', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/releaseEvents
		 * @return {ReleaseEventForApiContractPartialFindResult} Success
		 */
		ApiReleaseEventsGetByQueryAndNameMatchModeAndSeriesIdAndAfterDateAndBeforeDateAndCategoryAndUserCollectionIdAndTagId_AndChildTagsAndArtistId_AndChildVoicebanksAndIncludeMembersAndStatusAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLangAndSortDirection(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, seriesId: number | null | undefined, afterDate: Date | null | undefined, beforeDate: Date | null | undefined, category: EntryForApiContractEventCategory | null | undefined, userCollectionId: number | null | undefined, tagId_: Array<number> | null | undefined, childTags: boolean | null | undefined, artistId_: Array<number> | null | undefined, childVoicebanks: boolean | null | undefined, includeMembers: boolean | null | undefined, status: ArchivedObjectVersionForApiContractStatus | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: EventSortRule | null | undefined, fields: ReleaseEventOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, sortDirection: SortDirection | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReleaseEventForApiContractPartialFindResult> {
			return this.http.get<ReleaseEventForApiContractPartialFindResult>(this.baseUri + 'api/releaseEvents?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&seriesId=' + seriesId + '&afterDate=' + afterDate?.toISOString() + '&beforeDate=' + beforeDate?.toISOString() + '&category=' + category + '&userCollectionId=' + userCollectionId + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&childTags=' + childTags + '&' + artistId_?.map(z => `artistId[]=${z}`).join('&') + '&childVoicebanks=' + childVoicebanks + '&includeMembers=' + includeMembers + '&status=' + status + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&fields=' + fields + '&lang=' + lang + '&sortDirection=' + sortDirection, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/releaseEvents/names
		 * @return {Array<string>} Success
		 */
		ApiReleaseEventsNamesGetByQueryAndMaxResults(query: string | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/releaseEvents/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/releaseEvents/{eventId}/albums
		 * @return {Array<AlbumForApiContract>} Success
		 */
		ApiReleaseEvents_eventIdAlbumsGetByFieldsAndLang(eventId: number, fields: AlbumOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AlbumForApiContract>> {
			return this.http.get<Array<AlbumForApiContract>>(this.baseUri + 'api/releaseEvents/' + eventId + '/albums?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/releaseEvents/{eventId}/published-songs
		 * @return {Array<SongForApiContract>} Success
		 */
		ApiReleaseEvents_eventIdPublished_songsGetByFieldsAndLang(eventId: number, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/releaseEvents/' + eventId + '/published-songs?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/releaseEvents/{eventId}/reports
		 * @return {void} Success
		 */
		ApiReleaseEvents_eventIdReportsPostByReportTypeAndNotesAndVersionNumber(eventId: number, reportType: EventReportType | null | undefined, notes: string | null | undefined, versionNumber: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/releaseEvents/' + eventId + '/reports?reportType=' + reportType + '&notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&versionNumber=' + versionNumber, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/releaseEvents/{id}
		 * @return {void} Success
		 */
		ApiReleaseEvents_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/releaseEvents/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/releaseEvents/{id}
		 * @return {ReleaseEventForApiContract} Success
		 */
		ApiReleaseEvents_idGetByFieldsAndLang(id: number, fields: ReleaseEventOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReleaseEventForApiContract> {
			return this.http.get<ReleaseEventForApiContract>(this.baseUri + 'api/releaseEvents/' + id + '?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/resources/{cultureCode}
		 * @return {{[id: string]: {[id: string]: string } }} Success
		 */
		ApiResources_cultureCodeGetBySetNames_(cultureCode: string, setNames_: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<{[id: string]: {[id: string]: string } }> {
			return this.http.get<{[id: string]: {[id: string]: string } }>(this.baseUri + 'api/resources/' + (cultureCode == null ? '' : encodeURIComponent(cultureCode)) + '&' + setNames_?.map(z => `setNames[]=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/songLists
		 * @return {number} Success
		 */
		ApiSongListsPost(requestBody: SongListForEditForApiContract, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/songLists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/songLists/comments/{commentId}
		 * @return {void} Success
		 */
		ApiSongListsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songLists/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/songLists/comments/{commentId}
		 * @return {void} Success
		 */
		ApiSongListsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/songLists/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/songLists/featured
		 * @return {SongListForApiContractPartialFindResult} Success
		 */
		ApiSongListsFeaturedGetByQueryAndTagId_AndChildTagsAndNameMatchModeAndFeaturedCategoryAndStartAndMaxResultsAndGetTotalCountAndSortAndFieldsAndLang(query: string | null | undefined, tagId_: Array<number> | null | undefined, childTags: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, featuredCategory: EntryForApiContractSongListFeaturedCategory | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: SongListSortRule | null | undefined, fields: SongListOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongListForApiContractPartialFindResult> {
			return this.http.get<SongListForApiContractPartialFindResult>(this.baseUri + 'api/songLists/featured?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&childTags=' + childTags + '&nameMatchMode=' + nameMatchMode + '&featuredCategory=' + featuredCategory + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songLists/featured/names
		 * @return {Array<string>} Success
		 */
		ApiSongListsFeaturedNamesGetByQueryAndNameMatchModeAndFeaturedCategoryAndMaxResults(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, featuredCategory: EntryForApiContractSongListFeaturedCategory | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/songLists/featured/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&featuredCategory=' + featuredCategory + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/songLists/{id}
		 * @return {void} Success
		 */
		ApiSongLists_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songLists/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/songLists/{listId}/comments
		 * @return {CommentForApiContractPartialFindResult} Success
		 */
		ApiSongLists_listIdCommentsGet(listId: number, headersHandler?: () => HttpHeaders): Observable<CommentForApiContractPartialFindResult> {
			return this.http.get<CommentForApiContractPartialFindResult>(this.baseUri + 'api/songLists/' + listId + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/songLists/{listId}/comments
		 * @return {CommentForApiContract} Success
		 */
		ApiSongLists_listIdCommentsPost(listId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/songLists/' + listId + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/songLists/{listId}/songs
		 * @return {SongInListForApiContractPartialFindResult} Success
		 */
		ApiSongLists_listIdSongsGetByQueryAndSongTypesAndPvServicesAndTagId_AndArtistId_AndChildVoicebanksAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(listId: number, query: string | null | undefined, songTypes: string | null | undefined, pvServices: SongForApiContractPvServices | null | undefined, tagId_: Array<number> | null | undefined, artistId_: Array<number> | null | undefined, childVoicebanks: boolean | null | undefined, advancedFilters: Array<AdvancedSearchFilterParams> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: SongSortRule | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongInListForApiContractPartialFindResult> {
			return this.http.get<SongInListForApiContractPartialFindResult>(this.baseUri + 'api/songLists/' + listId + '/songs?query=' + (query == null ? '' : encodeURIComponent(query)) + '&songTypes=' + (songTypes == null ? '' : encodeURIComponent(songTypes)) + '&pvServices=' + pvServices + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&' + artistId_?.map(z => `artistId[]=${z}`).join('&') + '&childVoicebanks=' + childVoicebanks + '&' + advancedFilters?.map(z => `advancedFilters=${z}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songs
		 * @return {SongForApiContractPartialFindResult} Success
		 */
		ApiSongsGetByQueryAndSongTypesAndAfterDateAndBeforeDateAndTagName_AndTagId_AndChildTagsAndUnifyTypesAndTagsAndArtistId_AndArtistParticipationStatusAndChildVoicebanksAndIncludeMembersAndOnlyWithPvsAndPvServicesAndSinceAndMinScoreAndUserCollectionIdAndReleaseEventIdAndParentSongIdAndStatusAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndPreferAccurateMatchesAndNameMatchModeAndFieldsAndLangAndMinMilliBpmAndMaxMilliBpmAndMinLengthAndMaxLength(query: string | null | undefined, songTypes: string | null | undefined, afterDate: Date | null | undefined, beforeDate: Date | null | undefined, tagName_: Array<string> | null | undefined, tagId_: Array<number> | null | undefined, childTags: boolean | null | undefined, unifyTypesAndTags: boolean | null | undefined, artistId_: Array<number> | null | undefined, artistParticipationStatus: ArtistAlbumParticipationStatus | null | undefined, childVoicebanks: boolean | null | undefined, includeMembers: boolean | null | undefined, onlyWithPvs: boolean | null | undefined, pvServices: SongForApiContractPvServices | null | undefined, since: number | null | undefined, minScore: number | null | undefined, userCollectionId: number | null | undefined, releaseEventId: number | null | undefined, parentSongId: number | null | undefined, status: ArchivedObjectVersionForApiContractStatus | null | undefined, advancedFilters: Array<AdvancedSearchFilterParams> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: SongSortRule | null | undefined, preferAccurateMatches: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, minMilliBpm: number | null | undefined, maxMilliBpm: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongForApiContractPartialFindResult> {
			return this.http.get<SongForApiContractPartialFindResult>(this.baseUri + 'api/songs?query=' + (query == null ? '' : encodeURIComponent(query)) + '&songTypes=' + (songTypes == null ? '' : encodeURIComponent(songTypes)) + '&afterDate=' + afterDate?.toISOString() + '&beforeDate=' + beforeDate?.toISOString() + '&' + tagName_?.map(z => `tagName[]=${encodeURIComponent(z)}`).join('&') + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&childTags=' + childTags + '&unifyTypesAndTags=' + unifyTypesAndTags + '&' + artistId_?.map(z => `artistId[]=${z}`).join('&') + '&artistParticipationStatus=' + artistParticipationStatus + '&childVoicebanks=' + childVoicebanks + '&includeMembers=' + includeMembers + '&onlyWithPvs=' + onlyWithPvs + '&pvServices=' + pvServices + '&since=' + since + '&minScore=' + minScore + '&userCollectionId=' + userCollectionId + '&releaseEventId=' + releaseEventId + '&parentSongId=' + parentSongId + '&status=' + status + '&' + advancedFilters?.map(z => `advancedFilters=${z}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang + '&minMilliBpm=' + minMilliBpm + '&maxMilliBpm=' + maxMilliBpm + '&minLength=' + minLength + '&maxLength=' + maxLength, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songs/byPv
		 * @return {SongForApiContract} Success
		 */
		ApiSongsByPvGetByPvServiceAndPvIdAndFieldsAndLang(pvService: PVContractService | null | undefined, pvId: string | null | undefined, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongForApiContract> {
			return this.http.get<SongForApiContract>(this.baseUri + 'api/songs/byPv?pvService=' + pvService + '&pvId=' + (pvId == null ? '' : encodeURIComponent(pvId)) + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/songs/comments/{commentId}
		 * @return {void} Success
		 */
		ApiSongsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songs/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/songs/comments/{commentId}
		 * @return {void} Success
		 */
		ApiSongsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/songs/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/songs/highlighted
		 * @return {Array<SongForApiContract>} Success
		 */
		ApiSongsHighlightedGetByLanguagePreferenceAndFields(languagePreference: ContentLanguagePreference | null | undefined, fields: SongOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/songs/highlighted?languagePreference=' + languagePreference + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songs/lyrics/{lyricsId}
		 * @return {LyricsForSongContract} Success
		 */
		ApiSongsLyrics_lyricsIdGet(lyricsId: number, headersHandler?: () => HttpHeaders): Observable<LyricsForSongContract> {
			return this.http.get<LyricsForSongContract>(this.baseUri + 'api/songs/lyrics/' + lyricsId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songs/names
		 * @return {Array<string>} Success
		 */
		ApiSongsNamesGetByQueryAndNameMatchModeAndMaxResults(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/songs/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songs/top-rated
		 * @return {Array<SongForApiContract>} Success
		 */
		ApiSongsTop_ratedGetByDurationHoursAndStartDateAndFilterByAndVocalistAndMaxResultsAndFieldsAndLanguagePreference(durationHours: number | null | undefined, startDate: Date | null | undefined, filterBy: TopSongsDateFilterType | null | undefined, vocalist: SongVocalistSelection | null | undefined, maxResults: number | null | undefined, fields: SongOptionalFields | null | undefined, languagePreference: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/songs/top-rated?durationHours=' + durationHours + '&startDate=' + startDate?.toISOString() + '&filterBy=' + filterBy + '&vocalist=' + vocalist + '&maxResults=' + maxResults + '&fields=' + fields + '&languagePreference=' + languagePreference, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/songs/{id}
		 * @return {void} Success
		 */
		ApiSongs_idDeleteByNotes(id: number, notes: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/songs/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/songs/{id}
		 * @return {SongForApiContract} Success
		 */
		ApiSongs_idGetByFieldsAndLang(id: number, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongForApiContract> {
			return this.http.get<SongForApiContract>(this.baseUri + 'api/songs/' + id + '?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songs/{id}/comments
		 * @return {Array<CommentForApiContract>} Success
		 */
		ApiSongs_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<CommentForApiContract>> {
			return this.http.get<Array<CommentForApiContract>>(this.baseUri + 'api/songs/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/songs/{id}/comments
		 * @return {CommentForApiContract} Success
		 */
		ApiSongs_idCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/songs/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/songs/{id}/derived
		 * @return {Array<SongForApiContract>} Success
		 */
		ApiSongs_idDerivedGetByFieldsAndLang(id: number, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SongForApiContract>> {
			return this.http.get<Array<SongForApiContract>>(this.baseUri + 'api/songs/' + id + '/derived?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/songs/{id}/ratings
		 * @return {Array<RatedSongForUserForApiContract>} Success
		 */
		ApiSongs_idRatingsGetByUserFieldsAndLang(id: number, userFields: UserOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<RatedSongForUserForApiContract>> {
			return this.http.get<Array<RatedSongForUserForApiContract>>(this.baseUri + 'api/songs/' + id + '/ratings?userFields=' + userFields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/songs/{id}/ratings
		 * @return {void} Success
		 */
		ApiSongs_idRatingsPost(id: number, requestBody: SongRatingContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/songs/' + id + '/ratings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/songs/{id}/related
		 * @return {RelatedSongsContract} Success
		 */
		ApiSongs_idRelatedGetByFieldsAndLang(id: number, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<RelatedSongsContract> {
			return this.http.get<RelatedSongsContract>(this.baseUri + 'api/songs/' + id + '/related?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/tags
		 * @return {TagForApiContractPartialFindResult} Success
		 */
		ApiTagsGetByQueryAndAllowChildrenAndCategoryNameAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndSortAndPreferAccurateMatchesAndFieldsAndLangAndTarget(query: string | null | undefined, allowChildren: boolean | null | undefined, categoryName: string | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, sort: TagSortRule | null | undefined, preferAccurateMatches: boolean | null | undefined, fields: TagOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, target: TagTargetTypes | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagForApiContractPartialFindResult> {
			return this.http.get<TagForApiContractPartialFindResult>(this.baseUri + 'api/tags?query=' + (query == null ? '' : encodeURIComponent(query)) + '&allowChildren=' + allowChildren + '&categoryName=' + (categoryName == null ? '' : encodeURIComponent(categoryName)) + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&nameMatchMode=' + nameMatchMode + '&sort=' + sort + '&preferAccurateMatches=' + preferAccurateMatches + '&fields=' + fields + '&lang=' + lang + '&target=' + target, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/tags
		 * @return {TagBaseContract} Success
		 */
		ApiTagsPostByName(name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagBaseContract> {
			return this.http.post<TagBaseContract>(this.baseUri + 'api/tags?name=' + (name == null ? '' : encodeURIComponent(name)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/tags/byName/{name}
		 * @return {TagForApiContract} Success
		 */
		ApiTagsByName_nameGetByFieldsAndLang(name: string, fields: TagOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagForApiContract> {
			return this.http.get<TagForApiContract>(this.baseUri + 'api/tags/byName/' + (name == null ? '' : encodeURIComponent(name)) + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/tags/categoryNames
		 * @return {Array<string>} Success
		 */
		ApiTagsCategoryNamesGetByQueryAndNameMatchMode(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/tags/categoryNames?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/tags/comments/{commentId}
		 * @return {void} Success
		 */
		ApiTagsComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/tags/comments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/tags/comments/{commentId}
		 * @return {void} Success
		 */
		ApiTagsComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/tags/comments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/tags/names
		 * @return {Array<string>} Success
		 */
		ApiTagsNamesGetByQueryAndAllowAliasesAndMaxResults(query: string | null | undefined, allowAliases: boolean | null | undefined, maxResults: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/tags/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&allowAliases=' + allowAliases + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/tags/top
		 * @return {Array<TagBaseContract>} Success
		 */
		ApiTagsTopGetByCategoryNameAndEntryTypeAndMaxResultsAndLang(categoryName: string | null | undefined, entryType: EntryForApiContractEntryType | null | undefined, maxResults: number | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<TagBaseContract>> {
			return this.http.get<Array<TagBaseContract>>(this.baseUri + 'api/tags/top?categoryName=' + (categoryName == null ? '' : encodeURIComponent(categoryName)) + '&entryType=' + entryType + '&maxResults=' + maxResults + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/tags/{id}
		 * @return {void} Success
		 */
		ApiTags_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/tags/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/tags/{id}
		 * @return {TagForApiContract} Success
		 */
		ApiTags_idGetByFieldsAndLang(id: number, fields: TagOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagForApiContract> {
			return this.http.get<TagForApiContract>(this.baseUri + 'api/tags/' + id + '?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/tags/{tagId}/children
		 * @return {Array<TagForApiContract>} Success
		 */
		ApiTags_tagIdChildrenGetByFieldsAndLang(tagId: number, fields: TagOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<TagForApiContract>> {
			return this.http.get<Array<TagForApiContract>>(this.baseUri + 'api/tags/' + tagId + '/children?fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/tags/{tagId}/comments
		 * @return {CommentForApiContractPartialFindResult} Success
		 */
		ApiTags_tagIdCommentsGet(tagId: number, headersHandler?: () => HttpHeaders): Observable<CommentForApiContractPartialFindResult> {
			return this.http.get<CommentForApiContractPartialFindResult>(this.baseUri + 'api/tags/' + tagId + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/tags/{tagId}/comments
		 * @return {CommentForApiContract} Success
		 */
		ApiTags_tagIdCommentsPost(tagId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/tags/' + tagId + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/tags/{tagId}/reports
		 * @return {void} Success
		 */
		ApiTags_tagIdReportsPostByReportTypeAndNotesAndVersionNumber(tagId: number, reportType: EventReportType | null | undefined, notes: string | null | undefined, versionNumber: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/tags/' + tagId + '/reports?reportType=' + reportType + '&notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&versionNumber=' + versionNumber, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/users
		 * @return {UserForApiContractPartialFindResult} Success
		 */
		ApiUsersGetByQueryAndGroupsAndJoinDateAfterAndJoinDateBeforeAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndIncludeDisabledAndOnlyVerifiedAndKnowsLanguageAndFields(query: string | null | undefined, groups: UserForApiContractGroupId | null | undefined, joinDateAfter: Date | null | undefined, joinDateBefore: Date | null | undefined, nameMatchMode: NameMatchMode | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: UserSortRule | null | undefined, includeDisabled: boolean | null | undefined, onlyVerified: boolean | null | undefined, knowsLanguage: string | null | undefined, fields: UserOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserForApiContractPartialFindResult> {
			return this.http.get<UserForApiContractPartialFindResult>(this.baseUri + 'api/users?query=' + (query == null ? '' : encodeURIComponent(query)) + '&groups=' + groups + '&joinDateAfter=' + joinDateAfter?.toISOString() + '&joinDateBefore=' + joinDateBefore?.toISOString() + '&nameMatchMode=' + nameMatchMode + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&includeDisabled=' + includeDisabled + '&onlyVerified=' + onlyVerified + '&knowsLanguage=' + (knowsLanguage == null ? '' : encodeURIComponent(knowsLanguage)) + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/current
		 * @return {UserForApiContract} Success
		 */
		ApiUsersCurrentGetByFields(fields: UserOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserForApiContract> {
			return this.http.get<UserForApiContract>(this.baseUri + 'api/users/current?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/current/album-collection-statuses/{albumId}
		 * @return {AlbumForUserForApiContract} Success
		 */
		ApiUsersCurrentAlbum_collection_statuses_albumIdGet(albumId: number, headersHandler?: () => HttpHeaders): Observable<AlbumForUserForApiContract> {
			return this.http.get<AlbumForUserForApiContract>(this.baseUri + 'api/users/current/album-collection-statuses/' + albumId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/users/current/albums/{albumId}
		 * @return {string} Success
		 */
		ApiUsersCurrentAlbums_albumIdPostByCollectionStatusAndMediaTypeAndRating(albumId: number, collectionStatus: AlbumForUserForApiContractPurchaseStatus | null | undefined, mediaType: AlbumForUserForApiContractMediaType | null | undefined, rating: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/users/current/albums/' + albumId + '?collectionStatus=' + collectionStatus + '&mediaType=' + mediaType + '&rating=' + rating, null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get api/users/current/followedArtists/{artistId}
		 * @return {ArtistForUserForApiContract} Success
		 */
		ApiUsersCurrentFollowedArtists_artistIdGet(artistId: number, headersHandler?: () => HttpHeaders): Observable<ArtistForUserForApiContract> {
			return this.http.get<ArtistForUserForApiContract>(this.baseUri + 'api/users/current/followedArtists/' + artistId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/users/current/followedTags/{tagId}
		 * @return {void} Success
		 */
		ApiUsersCurrentFollowedTags_tagIdDelete(tagId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/users/current/followedTags/' + tagId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/users/current/followedTags/{tagId}
		 * @return {void} Success
		 */
		ApiUsersCurrentFollowedTags_tagIdPost(tagId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/current/followedTags/' + tagId, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/users/current/ratedSongs/{songId}
		 * @return {SongInAlbumForApiContractRating} Success
		 */
		ApiUsersCurrentRatedSongs_songIdGet(songId: number, headersHandler?: () => HttpHeaders): Observable<SongInAlbumForApiContractRating> {
			return this.http.get<SongInAlbumForApiContractRating>(this.baseUri + 'api/users/current/ratedSongs/' + songId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/users/current/refreshEntryEdit
		 * @return {EntryEditDataContract} Success
		 */
		ApiUsersCurrentRefreshEntryEditPostByEntryTypeAndEntryId(entryType: EntryForApiContractEntryType | null | undefined, entryId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<EntryEditDataContract> {
			return this.http.post<EntryEditDataContract>(this.baseUri + 'api/users/current/refreshEntryEdit?entryType=' + entryType + '&entryId=' + entryId, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/users/current/songTags/{songId}
		 * @return {void} Success
		 */
		ApiUsersCurrentSongTags_songIdPost(songId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/current/songTags/' + songId, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/users/messages/{messageId}
		 * @return {UserMessageContract} Success
		 */
		ApiUsersMessages_messageIdGet(messageId: number, headersHandler?: () => HttpHeaders): Observable<UserMessageContract> {
			return this.http.get<UserMessageContract>(this.baseUri + 'api/users/messages/' + messageId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/names
		 * @return {Array<string>} Success
		 */
		ApiUsersNamesGetByQueryAndNameMatchModeAndMaxResultsAndIncludeDisabled(query: string | null | undefined, nameMatchMode: NameMatchMode | null | undefined, maxResults: number | null | undefined, includeDisabled: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/users/names?query=' + (query == null ? '' : encodeURIComponent(query)) + '&nameMatchMode=' + nameMatchMode + '&maxResults=' + maxResults + '&includeDisabled=' + includeDisabled, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/users/profileComments/{commentId}
		 * @return {void} Success
		 */
		ApiUsersProfileComments_commentIdDelete(commentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/users/profileComments/' + commentId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/users/profileComments/{commentId}
		 * @return {void} Success
		 */
		ApiUsersProfileComments_commentIdPost(commentId: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/profileComments/' + commentId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/users/{id}
		 * @return {UserForApiContract} Success
		 */
		ApiUsers_idGetByFields(id: number, fields: UserOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserForApiContract> {
			return this.http.get<UserForApiContract>(this.baseUri + 'api/users/' + id + '?fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/{id}/album-collection-statuses/{albumId}
		 * @return {AlbumForUserForApiContract} Success
		 */
		ApiUsers_idAlbum_collection_statuses_albumIdGet(id: number, albumId: number, headersHandler?: () => HttpHeaders): Observable<AlbumForUserForApiContract> {
			return this.http.get<AlbumForUserForApiContract>(this.baseUri + 'api/users/' + id + '/album-collection-statuses/' + albumId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/{id}/albums
		 * @return {AlbumForUserForApiContractPartialFindResult} Success
		 */
		ApiUsers_idAlbumsGetByQueryAndTagIdAndTagAndArtistIdAndPurchaseStatusesAndReleaseEventIdAndAlbumTypesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLangAndMediaType(id: number, query: string | null | undefined, tagId: number | null | undefined, tag: string | null | undefined, artistId: number | null | undefined, purchaseStatuses: PurchaseStatuses | null | undefined, releaseEventId: number | null | undefined, albumTypes: EntryForApiContractDiscType | null | undefined, advancedFilters: Array<AdvancedSearchFilterParams> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: AlbumSortRule | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: AlbumOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, mediaType: AlbumForUserForApiContractMediaType | null | undefined, headersHandler?: () => HttpHeaders): Observable<AlbumForUserForApiContractPartialFindResult> {
			return this.http.get<AlbumForUserForApiContractPartialFindResult>(this.baseUri + 'api/users/' + id + '/albums?query=' + (query == null ? '' : encodeURIComponent(query)) + '&tagId=' + tagId + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&artistId=' + artistId + '&purchaseStatuses=' + purchaseStatuses + '&releaseEventId=' + releaseEventId + '&albumTypes=' + albumTypes + '&' + advancedFilters?.map(z => `advancedFilters=${z}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang + '&mediaType=' + mediaType, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/{id}/events
		 * @return {Array<ReleaseEventForApiContract>} Success
		 */
		ApiUsers_idEventsGetByRelationshipType(id: number, relationshipType: UserEventRelationshipType | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ReleaseEventForApiContract>> {
			return this.http.get<Array<ReleaseEventForApiContract>>(this.baseUri + 'api/users/' + id + '/events?relationshipType=' + relationshipType, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/{id}/followedArtists
		 * @return {ArtistForUserForApiContractPartialFindResult} Success
		 */
		ApiUsers_idFollowedArtistsGetByQueryAndTagId_AndArtistTypeAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(id: number, query: string | null | undefined, tagId_: Array<number> | null | undefined, artistType: EntryForApiContractArtistType | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: ArtistSortRule | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: ArtistOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<ArtistForUserForApiContractPartialFindResult> {
			return this.http.get<ArtistForUserForApiContractPartialFindResult>(this.baseUri + 'api/users/' + id + '/followedArtists?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&artistType=' + artistType + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/{id}/followedArtists/{artistId}
		 * @return {ArtistForUserForApiContract} Success
		 */
		ApiUsers_idFollowedArtists_artistIdGet(id: number, artistId: number, headersHandler?: () => HttpHeaders): Observable<ArtistForUserForApiContract> {
			return this.http.get<ArtistForUserForApiContract>(this.baseUri + 'api/users/' + id + '/followedArtists/' + artistId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/users/{id}/messages
		 * @return {void} Success
		 */
		ApiUsers_idMessagesDeleteByMessageId(id: number, messageId: Array<number> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/users/' + id + '/messages?' + messageId?.map(z => `messageId=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/users/{id}/messages
		 * @return {UserMessageContractPartialFindResult} Success
		 */
		ApiUsers_idMessagesGetByInboxAndUnreadAndAnotherUserIdAndStartAndMaxResultsAndGetTotalCount(id: number, inbox: UserInboxType | null | undefined, unread: boolean | null | undefined, anotherUserId: number | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserMessageContractPartialFindResult> {
			return this.http.get<UserMessageContractPartialFindResult>(this.baseUri + 'api/users/' + id + '/messages?inbox=' + inbox + '&unread=' + unread + '&anotherUserId=' + anotherUserId + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/users/{id}/messages
		 * @return {UserMessageContract} Success
		 */
		ApiUsers_idMessagesPost(id: number, requestBody: UserMessageContract, headersHandler?: () => HttpHeaders): Observable<UserMessageContract> {
			return this.http.post<UserMessageContract>(this.baseUri + 'api/users/' + id + '/messages', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/users/{id}/profileComments
		 * @return {CommentForApiContractPartialFindResult} Success
		 */
		ApiUsers_idProfileCommentsGetByStartAndMaxResultsAndGetTotalCount(id: number, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<CommentForApiContractPartialFindResult> {
			return this.http.get<CommentForApiContractPartialFindResult>(this.baseUri + 'api/users/' + id + '/profileComments?start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/users/{id}/profileComments
		 * @return {CommentForApiContract} Success
		 */
		ApiUsers_idProfileCommentsPost(id: number, requestBody: CommentForApiContract, headersHandler?: () => HttpHeaders): Observable<CommentForApiContract> {
			return this.http.post<CommentForApiContract>(this.baseUri + 'api/users/' + id + '/profileComments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/users/{id}/ratedSongs
		 * @return {RatedSongForUserForApiContractPartialFindResult} Success
		 */
		ApiUsers_idRatedSongsGetByQueryAndTagNameAndTagId_AndArtistId_AndChildVoicebanksAndArtistGroupingAndRatingAndSongListIdAndGroupByRatingAndPvServicesAndAdvancedFiltersAndStartAndMaxResultsAndGetTotalCountAndSortAndNameMatchModeAndFieldsAndLang(id: number, query: string | null | undefined, tagName: string | null | undefined, tagId_: Array<number> | null | undefined, artistId_: Array<number> | null | undefined, childVoicebanks: boolean | null | undefined, artistGrouping: LogicalGrouping | null | undefined, rating: SongInAlbumForApiContractRating | null | undefined, songListId: number | null | undefined, groupByRating: boolean | null | undefined, pvServices: SongForApiContractPvServices | null | undefined, advancedFilters: Array<AdvancedSearchFilterParams> | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: RatedSongForUserSortRule | null | undefined, nameMatchMode: NameMatchMode | null | undefined, fields: SongOptionalFields | null | undefined, lang: ContentLanguagePreference | null | undefined, headersHandler?: () => HttpHeaders): Observable<RatedSongForUserForApiContractPartialFindResult> {
			return this.http.get<RatedSongForUserForApiContractPartialFindResult>(this.baseUri + 'api/users/' + id + '/ratedSongs?query=' + (query == null ? '' : encodeURIComponent(query)) + '&tagName=' + (tagName == null ? '' : encodeURIComponent(tagName)) + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&' + artistId_?.map(z => `artistId[]=${z}`).join('&') + '&childVoicebanks=' + childVoicebanks + '&artistGrouping=' + artistGrouping + '&rating=' + rating + '&songListId=' + songListId + '&groupByRating=' + groupByRating + '&pvServices=' + pvServices + '&' + advancedFilters?.map(z => `advancedFilters=${z}`).join('&') + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&nameMatchMode=' + nameMatchMode + '&fields=' + fields + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/users/{id}/ratedSongs/{songId}
		 * @return {SongInAlbumForApiContractRating} Success
		 */
		ApiUsers_idRatedSongs_songIdGet(id: number, songId: number, headersHandler?: () => HttpHeaders): Observable<SongInAlbumForApiContractRating> {
			return this.http.get<SongInAlbumForApiContractRating>(this.baseUri + 'api/users/' + id + '/ratedSongs/' + songId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/users/{id}/reports
		 * @return {boolean} Success
		 */
		ApiUsers_idReportsPost(id: number, requestBody: CreateReportModel, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/users/' + id + '/reports', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/users/{id}/settings/{settingName}
		 * @return {void} Success
		 */
		ApiUsers_idSettings_settingNamePost(id: number, settingName: string, requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/users/' + id + '/settings/' + (settingName == null ? '' : encodeURIComponent(settingName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/users/{id}/songLists
		 * @return {SongListForApiContractPartialFindResult} Success
		 */
		ApiUsers_idSongListsGetByQueryAndTagId_AndChildTagsAndNameMatchModeAndStartAndMaxResultsAndGetTotalCountAndSortAndFields(id: number, query: string | null | undefined, tagId_: Array<number> | null | undefined, childTags: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, sort: SongListSortRule | null | undefined, fields: SongListOptionalFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<SongListForApiContractPartialFindResult> {
			return this.http.get<SongListForApiContractPartialFindResult>(this.baseUri + 'api/users/' + id + '/songLists?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + tagId_?.map(z => `tagId[]=${z}`).join('&') + '&childTags=' + childTags + '&nameMatchMode=' + nameMatchMode + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&sort=' + sort + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/venues
		 * @return {VenueForApiContractPartialFindResult} Success
		 */
		ApiVenuesGetByQueryAndFieldsAndStartAndMaxResultsAndGetTotalCountAndNameMatchModeAndLangAndSortRuleAndLatitudeAndLongitudeAndRadiusAndDistanceUnit(query: string | null | undefined, fields: VenueOptionalFields | null | undefined, start: number | null | undefined, maxResults: number | null | undefined, getTotalCount: boolean | null | undefined, nameMatchMode: NameMatchMode | null | undefined, lang: ContentLanguagePreference | null | undefined, sortRule: VenueSortRule | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, distanceUnit: DistanceUnit | null | undefined, headersHandler?: () => HttpHeaders): Observable<VenueForApiContractPartialFindResult> {
			return this.http.get<VenueForApiContractPartialFindResult>(this.baseUri + 'api/venues?query=' + (query == null ? '' : encodeURIComponent(query)) + '&fields=' + fields + '&start=' + start + '&maxResults=' + maxResults + '&getTotalCount=' + getTotalCount + '&nameMatchMode=' + nameMatchMode + '&lang=' + lang + '&sortRule=' + sortRule + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&distanceUnit=' + distanceUnit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/venues/{id}
		 * @return {void} Success
		 */
		ApiVenues_idDeleteByNotesAndHardDelete(id: number, notes: string | null | undefined, hardDelete: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/venues/' + id + '?notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&hardDelete=' + hardDelete, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/venues/{id}/reports
		 * @return {void} Success
		 */
		ApiVenues_idReportsPostByReportTypeAndNotesAndVersionNumber(id: number, reportType: EventReportType | null | undefined, notes: string | null | undefined, versionNumber: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/venues/' + id + '/reports?reportType=' + reportType + '&notes=' + (notes == null ? '' : encodeURIComponent(notes)) + '&versionNumber=' + versionNumber, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

